/* Net Flow — Quote Basket Widget
   Floating button + slide-in drawer + request modal
   localStorage key: nf_quote_basket
*/
(function(){
  'use strict';

  const KEY = 'nf_quote_basket';

  /* ---- State ---- */
  let basket = load();

  function load(){
    try{ return JSON.parse(localStorage.getItem(KEY)||'[]'); }catch(e){ return []; }
  }
  function save(){
    localStorage.setItem(KEY, JSON.stringify(basket));
  }
  function lang(){ return localStorage.getItem('pm_lang')||'en'; }

  /* ---- i18n ---- */
  const T = {
    en:{
      basket:'Quote Basket', empty_title:'Your basket is empty',
      empty_body:'Browse products and click "+ Add to Quote"',
      request:'Request Quote', clear:'Clear All',
      count:n => n===1 ? '1 product selected' : n+' products selected',
      add:'+ Add to Quote', added:'✓ Added',
      modal_title:'Request a Quote',
      modal_sub:"We'll get back to you within 24 hours.",
      name:'Full Name *', email:'E-mail *', company:'Company',
      country:'Country', message:'Message / Application',
      products_label:'Selected Products:',
      send:'Send Request', cancel:'Cancel',
      success_title:'Request Sent!',
      success_body:'Thank you. Our team will contact you within 24 hours.',
      close:'Close',
      select_country:'Select country…'
    },
    tr:{
      basket:'Teklif Sepeti', empty_title:'Sepetiniz boş',
      empty_body:'Ürünlere göz atın ve "+ Teklif Ekle" butonuna tıklayın',
      request:'Teklif Al', clear:'Temizle',
      count:n => n+' ürün seçildi',
      add:'+ Teklif Ekle', added:'✓ Eklendi',
      modal_title:'Teklif Talep Et',
      modal_sub:'24 saat içinde size dönüş yapacağız.',
      name:'Ad Soyad *', email:'E-posta *', company:'Firma',
      country:'Ülke', message:'Mesaj / Uygulama Bilgisi',
      products_label:'Seçilen Ürünler:',
      send:'Teklif Gönder', cancel:'İptal',
      success_title:'Talebiniz Alındı!',
      success_body:'Teşekkürler. Ekibimiz 24 saat içinde sizinle iletişime geçecek.',
      close:'Kapat',
      select_country:'Ülke seçin…'
    },
    ar:{
      basket:'سلة الاستفسار', empty_title:'السلة فارغة',
      empty_body:'تصفح المنتجات واضغط "+ إضافة للاستفسار"',
      request:'طلب عرض', clear:'مسح الكل',
      count:n => n+' منتجات مختارة',
      add:'+ إضافة للاستفسار', added:'✓ تمت الإضافة',
      modal_title:'طلب عرض سعر',
      modal_sub:'سنرد عليك خلال 24 ساعة.',
      name:'الاسم الكامل *', email:'البريد الإلكتروني *', company:'الشركة',
      country:'الدولة', message:'رسالة / معلومات التطبيق',
      products_label:'المنتجات المختارة:',
      send:'إرسال الطلب', cancel:'إلغاء',
      success_title:'تم إرسال الطلب!',
      success_body:'شكراً لك. سيتواصل معك فريقنا خلال 24 ساعة.',
      close:'إغلاق',
      select_country:'اختر الدولة…'
    },
    ru:{
      basket:'Корзина запроса', empty_title:'Корзина пуста',
      empty_body:'Просмотрите продукты и нажмите "+ Добавить в запрос"',
      request:'Запросить КП', clear:'Очистить',
      count:n => n+' товаров выбрано',
      add:'+ Добавить в запрос', added:'✓ Добавлено',
      modal_title:'Запросить коммерческое предложение',
      modal_sub:'Мы ответим вам в течение 24 часов.',
      name:'Полное имя *', email:'E-mail *', company:'Компания',
      country:'Страна', message:'Сообщение / Применение',
      products_label:'Выбранные товары:',
      send:'Отправить запрос', cancel:'Отмена',
      success_title:'Запрос отправлен!',
      success_body:'Спасибо. Наша команда свяжется с вами в течение 24 часов.',
      close:'Закрыть',
      select_country:'Выберите страну…'
    }
  };

  function t(k){ const l=lang(); return (T[l]&&T[l][k])||T.en[k]; }

  /* ---- Build DOM ---- */
  function buildUI(){
    // Floating button
    const fab = document.createElement('button');
    fab.className = 'qb-float';
    fab.setAttribute('aria-label', 'Quote Basket');
    fab.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      <span class="qb-badge" id="qbBadge"></span>`;
    document.body.appendChild(fab);

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'qb-overlay';
    overlay.id = 'qbOverlay';
    document.body.appendChild(overlay);

    // Drawer
    const drawer = document.createElement('div');
    drawer.className = 'qb-drawer';
    drawer.id = 'qbDrawer';
    drawer.setAttribute('role','dialog');
    drawer.setAttribute('aria-modal','true');
    drawer.innerHTML = `
      <div class="qb-head">
        <h3 id="qbTitle"></h3>
        <button class="qb-close" id="qbClose" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="qb-items" id="qbItems"></div>
      <div class="qb-foot" id="qbFoot">
        <p class="qb-count" id="qbCount"></p>
        <button class="btn btn--primary" id="qbRequest"></button>
        <button class="btn btn--ghost" id="qbClear" style="font-size:13px;padding:8px"></button>
      </div>`;
    document.body.appendChild(drawer);

    // Events
    fab.addEventListener('click', openDrawer);
    overlay.addEventListener('click', closeDrawer);
    document.getElementById('qbClose').addEventListener('click', closeDrawer);
    document.getElementById('qbRequest').addEventListener('click', openModal);
    document.getElementById('qbClear').addEventListener('click', ()=>{ basket=[]; save(); renderDrawer(); updateBadge(); });

    updateBadge();
    renderDrawer();
  }

  function openDrawer(){
    renderDrawer();
    document.getElementById('qbDrawer').classList.add('open');
    document.getElementById('qbOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer(){
    document.getElementById('qbDrawer').classList.remove('open');
    document.getElementById('qbOverlay').classList.remove('show');
    document.body.style.overflow = '';
  }

  function updateBadge(){
    const badge = document.getElementById('qbBadge');
    if(!badge) return;
    const n = basket.reduce((s,i)=>s+i.qty,0);
    badge.textContent = n > 9 ? '9+' : n;
    badge.classList.toggle('show', n > 0);
  }

  function renderDrawer(){
    const title = document.getElementById('qbTitle');
    const items = document.getElementById('qbItems');
    const foot  = document.getElementById('qbFoot');
    const count = document.getElementById('qbCount');
    const req   = document.getElementById('qbRequest');
    const clr   = document.getElementById('qbClear');
    if(!title) return;

    title.textContent = t('basket');
    req.textContent   = t('request');
    clr.textContent   = t('clear');

    if(!basket.length){
      items.innerHTML = `<div class="qb-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p><b>${t('empty_title')}</b><br><span style="font-size:13px">${t('empty_body')}</span></p>
      </div>`;
      foot.style.display = 'none';
      return;
    }

    foot.style.display = '';
    const total = basket.reduce((s,i)=>s+i.qty,0);
    count.textContent = t('count')(total);

    items.innerHTML = basket.map((item,idx)=>`
      <div class="qb-item" data-idx="${idx}">
        <div class="qb-item-img"><img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'"></div>
        <div class="qb-item-info">
          <div class="qb-item-name">${item.name}</div>
          <div class="qb-item-code">${item.code}</div>
          <div class="qb-qty">
            <button class="qb-dec" data-idx="${idx}">−</button>
            <span>${item.qty}</span>
            <button class="qb-inc" data-idx="${idx}">+</button>
          </div>
        </div>
        <button class="qb-remove" data-idx="${idx}" aria-label="Remove">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>`).join('');

    items.querySelectorAll('.qb-inc').forEach(btn=>btn.addEventListener('click',e=>{
      const i = +e.currentTarget.dataset.idx;
      basket[i].qty = Math.min(basket[i].qty+1, 99);
      save(); renderDrawer(); updateBadge();
    }));
    items.querySelectorAll('.qb-dec').forEach(btn=>btn.addEventListener('click',e=>{
      const i = +e.currentTarget.dataset.idx;
      basket[i].qty = Math.max(basket[i].qty-1, 1);
      save(); renderDrawer(); updateBadge();
    }));
    items.querySelectorAll('.qb-remove').forEach(btn=>btn.addEventListener('click',e=>{
      const i = +e.currentTarget.dataset.idx;
      basket.splice(i,1); save(); renderDrawer(); updateBadge();
    }));
  }

  /* ---- Add to basket (called from catalog.js or product pages) ---- */
  window.NFQuote = {
    add: function(code, name, img){
      const existing = basket.find(x=>x.code===code);
      if(existing){ existing.qty++; }
      else{ basket.push({code, name, img: img||'', qty:1}); }
      save();
      updateBadge();
      // flash badge
      const badge = document.getElementById('qbBadge');
      if(badge){ badge.classList.remove('pop'); void badge.offsetWidth; badge.classList.add('pop'); }
    },
    has: function(code){ return basket.some(x=>x.code===code); },
    t: t
  };

  /* ---- Modal ---- */
  const COUNTRIES = ["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Belarus","Belgium","Bolivia","Bosnia","Botswana","Brazil","Brunei","Bulgaria","Cambodia","Cameroon","Canada","Chile","China","Colombia","Congo","Costa Rica","Croatia","Cuba","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Georgia","Germany","Ghana","Greece","Guatemala","Haiti","Honduras","Hungary","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Japan","Jordan","Kazakhstan","Kenya","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Libya","Lithuania","Madagascar","Malawi","Malaysia","Mauritius","Mexico","Moldova","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Nigeria","North Macedonia","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

  function openModal(){
    closeDrawer();
    const wrap = document.createElement('div');
    wrap.className = 'qb-modal-wrap';
    wrap.id = 'qbModal';
    const productList = basket.map(i=>`<li>${i.qty}× ${i.name} (${i.code})</li>`).join('');
    const countryOpts = COUNTRIES.map(c=>`<option value="${c}">${c}</option>`).join('');
    wrap.innerHTML = `
      <div class="qb-modal-bg" id="qbModalBg"></div>
      <div class="qb-modal">
        <h3>${t('modal_title')}</h3>
        <p class="sub">${t('modal_sub')}</p>
        <div class="qb-modal-products"><b>${t('products_label')}</b><ul style="margin:0;padding-left:18px">${productList}</ul></div>
        <label>${t('name')}</label>
        <input type="text" id="qbName" required placeholder="">
        <label>${t('email')}</label>
        <input type="email" id="qbEmail" required placeholder="">
        <label>${t('company')}</label>
        <input type="text" id="qbCompany" placeholder="">
        <label>${t('country')}</label>
        <select id="qbCountry"><option value="">${t('select_country')}</option>${countryOpts}</select>
        <label>${t('message')}</label>
        <textarea id="qbMessage" rows="3" placeholder=""></textarea>
        <div class="qb-modal-actions">
          <button class="btn btn--ghost" id="qbModalCancel">${t('cancel')}</button>
          <button class="btn btn--primary" id="qbModalSend">${t('send')}</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);
    document.body.style.overflow = 'hidden';

    document.getElementById('qbModalBg').addEventListener('click', closeModal);
    document.getElementById('qbModalCancel').addEventListener('click', closeModal);
    document.getElementById('qbModalSend').addEventListener('click', submitQuote);
  }

  function closeModal(){
    const m = document.getElementById('qbModal');
    if(m) m.remove();
    document.body.style.overflow = '';
  }

  function submitQuote(){
    const name    = document.getElementById('qbName').value.trim();
    const email   = document.getElementById('qbEmail').value.trim();
    const company = document.getElementById('qbCompany').value.trim();
    const country = document.getElementById('qbCountry').value;
    const message = document.getElementById('qbMessage').value.trim();

    if(!name){ document.getElementById('qbName').focus(); return; }
    if(!email || !email.includes('@')){ document.getElementById('qbEmail').focus(); return; }

    const productLines = basket.map(i=>`${i.qty}x ${i.name} (${i.code})`).join('\n');
    const subject = encodeURIComponent('Quote Request — Net Flow');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company||'—'}\nCountry: ${country||'—'}\n\nProducts:\n${productLines}\n\nMessage:\n${message||'—'}`
    );

    // Send via mailto (works without backend)
    const mailLink = `mailto:info@netflw.com?subject=${subject}&body=${body}`;
    const a = document.createElement('a');
    a.href = mailLink;
    a.click();

    // Also try Brevo API if available
    sendBrevo({name, email, company, country, message, products: basket});

    // Show success
    const modal = document.querySelector('.qb-modal');
    if(modal) modal.innerHTML = `
      <div class="qb-success">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <h4>${t('success_title')}</h4>
        <p>${t('success_body')}</p>
        <button class="btn btn--primary" style="margin-top:20px" onclick="document.getElementById('qbModal').remove();document.body.style.overflow=''">${t('close')}</button>
      </div>`;

    // Clear basket after success
    basket = []; save(); updateBadge();
  }

  function sendBrevo(data){
    fetch('/api/send-quote',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    }).catch(()=>{});
  }

  /* ---- Init ---- */
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', buildUI);
  } else {
    buildUI();
  }

})();
