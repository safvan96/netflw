/* ============================================================
   PROCESS METERS — i18n engine
   Walks text nodes, translates via PM_DICT, persists choice,
   handles RTL for Arabic. Re-translatable between languages.
   ============================================================ */
window.PMI18n = (function(){
  const RTL = ['ar'];
  const CODE = {EN:'en',TR:'tr',AR:'ar',RU:'ru',FR:'fr'};
  const D  = window.PM_DICT || {};
  const RICH = window.PM_RICH || [];
  const PH = window.PM_PH || {};
  const origText = new WeakMap();   // textNode -> original English string
  const origHTML = new WeakMap();   // element  -> original innerHTML

  function curLang(){ return localStorage.getItem('pm_lang') || 'en'; }

  /* ---- auto language detection (first visit only) ---- */
  function navLang(){
    var ls = navigator.languages || [navigator.language || 'en'];
    for(var i=0;i<ls.length;i++){
      var s=(ls[i]||'').toLowerCase();
      if(s.indexOf('tr')===0) return 'tr';
      if(s.indexOf('ar')===0) return 'ar';
      if(/^(ru|kk|uz|az|ky|tk|tg|be|uk|hy|mn)/.test(s)) return 'ru';
      if(s.indexOf('fr')===0) return 'fr';
      if(s.indexOf('en')===0||s.indexOf('de')===0||s.indexOf('es')===0) return 'en';
    }
    return 'en';
  }
  function countryLang(c){
    c=(c||'').toUpperCase();
    if(c==='TR') return 'tr';
    if(['SA','IQ','AE','JO','QA','KW','OM','BH','EG','SY','LB','LY','YE','SD','DZ','MA','TN','PS','MR'].indexOf(c)>-1) return 'ar';
    if(['RU','KZ','UZ','AZ','KG','TM','TJ','BY','UA','AM','MD','GE','MN'].indexOf(c)>-1) return 'ru';
    if(['FR','SN','CI','CM','CD','CG','ML','NE','BF','GN','BJ','TG','GA','TD','DJ','KM','MG','HT','BE','CH','LU','MC'].indexOf(c)>-1) return 'fr';
    if(c) return 'en';
    return null;
  }
  function ipRefine(){
    if(localStorage.getItem('pm_lang_userset')) return;          // respect manual choice
    try{
      fetch('https://ipapi.co/json/').then(function(r){return r.json();}).then(function(d){
        if(localStorage.getItem('pm_lang_userset')) return;
        var l = countryLang(d && d.country_code);
        if(l && l !== curLang()){ localStorage.setItem('pm_lang', l); apply();
          if(typeof window.onPMLang==='function'){ try{window.onPMLang(l);}catch(e){} } }
      }).catch(function(){});
    }catch(e){}
  }

  function translateTextNode(node, lang){
    let o = origText.get(node);
    if(o === undefined){ o = node.nodeValue; origText.set(node, o); }
    const key = o.trim();
    if(!key) return;
    if(lang === 'en'){ if(node.nodeValue !== o) node.nodeValue = o; return; }
    const entry = D[key];
    const tr = entry && entry[lang];
    if(tr != null){ node.nodeValue = o.replace(key, tr); }
    else if(node.nodeValue !== o){ node.nodeValue = o; }  // unknown -> keep English
  }

  function walk(root, lang){
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode:function(n){
        const p = n.parentNode; if(!p) return NodeFilter.FILTER_REJECT;
        const tag = p.nodeName;
        if(tag==='SCRIPT'||tag==='STYLE'||tag==='TEXTAREA'||tag==='OPTION') return NodeFilter.FILTER_REJECT;
        if(p.namespaceURI && p.namespaceURI.indexOf('svg') > -1) return NodeFilter.FILTER_REJECT;
        if(p.closest && p.closest('[data-i18n-skip]')) return NodeFilter.FILTER_REJECT;
        if(!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const arr = []; let n; while(n = tw.nextNode()) arr.push(n);
    arr.forEach(nn => translateTextNode(nn, lang));
  }

  function placeholders(lang){
    document.querySelectorAll('[placeholder]').forEach(el=>{
      if(el.dataset.i18nPh === undefined){ el.dataset.i18nPh = el.getAttribute('placeholder') || ''; }
      const o = el.dataset.i18nPh;
      const tr = (lang!=='en') && PH[o] && PH[o][lang];
      el.setAttribute('placeholder', tr || o);
    });
  }

  function rich(lang){
    RICH.forEach(r=>{
      document.querySelectorAll(r.sel).forEach(el=>{
        if(!origHTML.has(el)) origHTML.set(el, el.innerHTML);
        const o = origHTML.get(el);
        el.innerHTML = (lang==='en' || !r[lang]) ? o : r[lang];
      });
    });
  }

  function markSwitchers(lang){
    const want = ({en:'EN',tr:'TR',ar:'AR',ru:'RU',fr:'FR'})[lang];
    document.querySelectorAll('.lang button').forEach(b=>{
      b.classList.toggle('on', b.textContent.trim().toUpperCase() === want);
    });
  }

  const CATALOG_MAP = {en:'katalog-en.html',tr:'katalog.html',ar:'katalog-ar.html',ru:'katalog-ru.html',fr:'katalog-fr.html'};
  const BLOG_MAP = {en:'blog-en.html',tr:'blog.html',ar:'blog-ar.html',ru:'blog-ru.html',fr:'blog-fr.html'};

  const UI_STRINGS = {
    catalogTitle:{en:'Download Our Catalog',tr:'Kataloğumuzu İndirin',ar:'حمّل كتالوجنا',ru:'Скачайте наш каталог',fr:'Téléchargez notre catalogue'},
    catalogDesc:{en:'Get our complete product catalog with specifications for all 19 instruments.',tr:'19 ürünümüzün tüm teknik özelliklerini içeren kataloğumuzu indirin.',ar:'احصل على كتالوج منتجاتنا الكامل مع المواصفات لجميع الأجهزة الـ 19.',ru:'Полный каталог с характеристиками всех 19 приборов.',fr:'Notre catalogue complet avec les spécifications de nos 19 instruments.'},
    catalogBtn:{en:'Download Catalog (PDF)',tr:'Kataloğu İndir (PDF)',ar:'تنزيل الكتالوج (PDF)',ru:'Скачать каталог (PDF)',fr:'Télécharger le catalogue (PDF)'},
    blogEyebrow:{en:'Resources & Insights',tr:'Kaynaklar & İçgörüler',ar:'الموارد والرؤى',ru:'Ресурсы и аналитика',fr:'Ressources & perspectives'},
    blogHeading:{en:'Latest articles from our laboratory & field',tr:'Laboratuvarımızdan ve sahadan son yazılar',ar:'أحدث المقالات من مختبرنا والميدان',ru:'Последние статьи из нашей лаборатории и с объектов',fr:'Derniers articles de notre laboratoire et du terrain'},
    blogViewAll:{en:'View all articles →',tr:'Tüm yazıları gör →',ar:'عرض جميع المقالات →',ru:'Все статьи →',fr:'Voir tous les articles →'},
    navCatalog:{en:'Catalog',tr:'Katalog',ar:'الكتالوج',ru:'Каталог',fr:'Catalogue'}
  };

  function catalogLinks(lang){
    var href = CATALOG_MAP[lang] || CATALOG_MAP.en;
    document.querySelectorAll('.navCatalogLink').forEach(function(a){ a.setAttribute('href', href); });
    var el = document.getElementById('navCatalogLink');
    if(el){ el.setAttribute('href', href); el.textContent = UI_STRINGS.navCatalog[lang] || UI_STRINGS.navCatalog.en; }
    var blogHref = BLOG_MAP[lang] || BLOG_MAP.en;
    document.querySelectorAll('.navBlogLink').forEach(function(a){ a.setAttribute('href', blogHref); });
    // Translate hardcoded UI elements
    Object.keys(UI_STRINGS).forEach(function(id){
      var node = document.getElementById(id);
      if(node) node.textContent = UI_STRINGS[id][lang] || UI_STRINGS[id].en;
    });
  }

  function applyDataI18n(lang){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(!key) return;
      var entry = D[key];
      var txt = (lang === 'en') ? key : (entry && entry[lang] != null ? entry[lang] : key);
      // Only set if element has no child elements (avoid destroying SVG etc.)
      if(!el.children.length){
        el.textContent = txt;
      } else {
        // Find first text node child and update it
        for(var i=0;i<el.childNodes.length;i++){
          if(el.childNodes[i].nodeType===3 && el.childNodes[i].nodeValue.trim()){
            el.childNodes[i].nodeValue = txt;
            break;
          }
        }
      }
    });
  }

  function apply(){
    const lang = curLang();
    document.documentElement.lang = lang;
    document.documentElement.dir  = RTL.indexOf(lang) > -1 ? 'rtl' : 'ltr';
    // First translate data-i18n elements (reliable, explicit)
    applyDataI18n(lang);
    // Then walk remaining text nodes
    walk(document.body, lang);
    placeholders(lang);
    rich(lang);
    markSwitchers(lang);
    catalogLinks(lang);
    // Re-render blog carousel for current language
    if(window.renderBlogCarousel){
      var bc = document.getElementById('blog-carousel');
      if(bc) renderBlogCarousel(bc);
    }
  }

  function set(lang){
    localStorage.setItem('pm_lang', lang);
    localStorage.setItem('pm_lang_userset', '1');   // explicit user choice
    apply();
    if(typeof window.onPMLang === 'function'){ try{ window.onPMLang(lang); }catch(e){} }
  }

  function bind(){
    document.querySelectorAll('.lang').forEach(g=>{
      g.addEventListener('click', e=>{
        const b = e.target.closest('button'); if(!b) return;
        const code = CODE[b.textContent.trim().toUpperCase()];
        if(code) set(code);
      });
    });
  }

  function init(){
    if(!localStorage.getItem('pm_lang')){ localStorage.setItem('pm_lang', navLang()); }
    bind(); apply(); ipRefine();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  return { apply, set, get: curLang };
})();
