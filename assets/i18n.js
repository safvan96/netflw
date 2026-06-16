/* ============================================================
   PROCESS METERS — i18n engine
   Walks text nodes, translates via PM_DICT, persists choice,
   handles RTL for Arabic. Re-translatable between languages.
   ============================================================ */
window.PMI18n = (function(){
  const RTL = ['ar'];
  const CODE = {EN:'en',TR:'tr',AR:'ar',RU:'ru'};
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
      if(s.indexOf('en')===0||s.indexOf('de')===0||s.indexOf('fr')===0||s.indexOf('es')===0) return 'en';
    }
    return 'en';
  }
  function countryLang(c){
    c=(c||'').toUpperCase();
    if(c==='TR') return 'tr';
    if(['SA','IQ','AE','JO','QA','KW','OM','BH','EG','SY','LB','LY','YE','SD','DZ','MA','TN','PS','MR'].indexOf(c)>-1) return 'ar';
    if(['RU','KZ','UZ','AZ','KG','TM','TJ','BY','UA','AM','MD','GE','MN'].indexOf(c)>-1) return 'ru';
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
    const want = ({en:'EN',tr:'TR',ar:'AR',ru:'RU'})[lang];
    document.querySelectorAll('.lang button').forEach(b=>{
      b.classList.toggle('on', b.textContent.trim().toUpperCase() === want);
    });
  }

  function apply(){
    const lang = curLang();
    document.documentElement.lang = lang;
    document.documentElement.dir  = RTL.indexOf(lang) > -1 ? 'rtl' : 'ltr';
    walk(document.body, lang);
    placeholders(lang);
    rich(lang);
    markSwitchers(lang);
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
