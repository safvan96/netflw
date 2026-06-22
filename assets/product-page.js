/* Net Flow — generic product detail builder (brief content only) */
(function(){
  const hdr=document.getElementById('hdr');
  addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>20),{passive:true});
  // mobile menu
  const burger=hdr.querySelector('.hamburger');
  const navLinks=hdr.querySelector('.nav-links');
  if(burger&&navLinks){
    burger.addEventListener('click',()=>{
      const open=navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded',open);
      if(open){document.body.style.overflow='hidden'}else{document.body.style.overflow=''}
    });
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      navLinks.classList.remove('open');burger.setAttribute('aria-expanded','false');document.body.style.overflow='';
    }));
  }

  const P = window.PM_PRODUCTS||[], BY = window.PM_BYCODE||{}, G = window.PM_GLYPHS||{};
  const cat = {flow:"Flow Meter",level:"Level Instrument",switch:"Level Switch",process:"Process Instrument"};
  const catUrl = {flow:"products.html",level:"products.html",switch:"products.html",process:"products.html"};

  function qp(){ const m=location.search.match(/[?&]p=([^&]+)/); return m?decodeURIComponent(m[1].replace(/\+/g,' ')):''; }
  let code=qp(); let p=BY[code];
  // flagship has its own page
  if(p && p.link==='electromagnetic-flow-meter.html'){ location.replace('electromagnetic-flow-meter.html'); return; }
  if(!p){ p=P.find(x=>x.link!=='electromagnetic-flow-meter.html')||P[1]; }

  const esc=s=>(s==null?'':String(s)).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  document.title = p.n + ' · ' + p.code + ' — Net Flow';
  // dynamic SEO meta
  const metaDesc=document.querySelector('meta[name="description"]');
  if(metaDesc) metaDesc.setAttribute('content',p.d+' '+p.code+'. '+p.s.map(x=>x[1]+': '+x[0]).join(', ')+'. Made in Turkey by Net Flow.');
  const ogTitle=document.querySelector('meta[property="og:title"]');
  if(ogTitle) ogTitle.setAttribute('content',p.n+' · '+p.code+' | Net Flow');
  const ogDesc=document.querySelector('meta[property="og:description"]');
  if(ogDesc) ogDesc.setAttribute('content',p.d);
  const canon=document.querySelector('link[rel="canonical"]');
  if(canon) canon.setAttribute('href','https://netflw.com/product.html?p='+encodeURIComponent(p.code));

  const chk='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>';
  const arrow='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  // related = same category, different code
  const related = P.filter(x=>x.c===p.c && x.code!==p.code).slice(0,3);
  function relHref(x){ return x.link==='electromagnetic-flow-meter.html' ? x.link : 'product.html?p='+encodeURIComponent(x.code); }

  const specStrip = p.s.map(x=>`<div class="ss"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join('');
  const feats = p.s.map((x,i)=>`<div class="feat${i===0?' on':''}" data-i="${i}"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join('');
  const specRows = p.s.map(x=>`<tr><td>${esc(x[1])}</td><td>${esc(x[0])}</td></tr>`).join('');

  const html = `
  <section class="p-hero">
    <div class="blueprint"></div><div class="hero-glow"></div>
    <div class="wrap">
      <div class="p-breadcrumb"><a href="index.html">Home</a> / <a href="${catUrl[p.c]}">${esc(cat[p.c])}</a> / <span style="color:#cdd9e6">${esc(p.n)}</span></div>
      <div class="p-hero-inner">
        <div>
          <span class="eyebrow"><span class="pc-name">${esc(cat[p.c])}</span> · ${esc(p.code)}</span>
          <h1>${esc(p.n)}</h1>
          <p class="lede">${esc(p.d)}</p>
          <div class="p-badges">
            <span class="badge badge--turkey">Made in Türkiye</span>
            <span class="badge badge--cert">ISO 9001</span>
            ${p.tags&&p.tags[0]&&!p.tags[0].startsWith('★')?`<span class="badge badge--blue">${esc(p.tags[0])}</span>`:''}
          </div>
          <div class="p-cta">
            <a href="#quote" class="btn btn-primary btn-lg">Request a Quote</a>
            <a href="#specs" class="btn btn-ghost btn-lg">Specifications</a>
          </div>
        </div>
        <div class="gstage idle-host" data-z="0" data-photo="0" id="gstage">
          <div class="blueprint"></div><div class="spot"></div>
          <div class="gart idle">${G[p.g]||''}</div>
          <img class="gphoto" alt="${esc(p.n)}">
        </div>
      </div>
    </div>
    <div class="spec-strip"><div class="wrap"><div class="spec-strip-inner">${specStrip}</div></div></div>
  </section>

  <section class="tour">
    <div class="blueprint"></div>
    <div class="wrap tour-inner">
      <div class="tour-head">
        <span class="eyebrow">How it works</span>
        <h2>${esc(p.n)}</h2>
        <p>${esc(p.d)}</p>
      </div>
      <div class="tour-grid" id="featGrid">${feats}</div>
    </div>
  </section>

  <section class="p-section" id="specs">
    <div class="wrap two-col">
      <div class="prose">
        <span class="eyebrow">Overview</span>
        <h2 style="font-size:clamp(24px,3vw,36px);margin-top:14px">Built and calibrated in Turkey</h2>
        <p>${esc(p.d)}</p>
        <p>Every Net Flow instrument is manufactured in Türkiye and supplied as a Yerli Malı (local-production) certified product, with an ISO 9001 quality system and a CE declaration. Specify your connection, material and output and we configure the unit to your exact application.</p>
        <table class="spec-table">
          <tr><td>Product code</td><td>${esc(p.code)}</td></tr>
          <tr><td>Category</td><td>${esc(cat[p.c])}</td></tr>
          ${specRows}
          <tr><td>Origin</td><td>Made in Türkiye · Yerli Malı</td></tr>
          <tr><td>Quality</td><td>ISO 9001 · CE</td></tr>
        </table>
      </div>
      <aside>
        <div class="quote-side" id="quote">
          <div class="quote-card">
            <h3>Request a quote</h3>
            <div class="qsub">${esc(p.n)} · ${esc(p.code)}</div>
            <form onsubmit="return false">
              <div class="field"><label>Full name</label><input placeholder="Jane Engineer"></div>
              <div class="field"><label>Email</label><input type="email" placeholder="you@company.com"></div>
              <div class="field"><label>Application</label><input placeholder="media, size, range…"></div>
              <div class="field"><label>Country</label><select><option value="">Select…</option><option>Iraq</option><option>Azerbaijan</option><option>United Arab Emirates</option><option>Jordan</option><option>Kazakhstan</option><option>Saudi Arabia</option><option>Other</option></select></div>
              <button class="btn btn-primary" style="width:100%;margin-top:14px">Request a Quote ${arrow}</button>
            </form>
            <div class="quote-meta">
              <a href="https://wa.me/905413737953"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2z"/></svg> Message us on WhatsApp</a>
              <a href="tel:+903322351888"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z"/></svg> +90 332 235 1888</a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>

  ${related.length?`<section class="p-section" style="background:var(--bg-alt);border-top:1px solid var(--line)">
    <div class="wrap">
      <div class="sec-head"><span class="eyebrow">Related Instruments</span><h2 style="font-size:clamp(22px,2.6vw,32px);margin-top:12px">You might also need</h2></div>
      <div class="related-grid">
        ${related.map(x=>`<a href="${relHref(x)}" class="card prod-card${x.t?' theme-light':''}" data-code="${esc(x.code)}">
          <div class="prod-figure">${x.t?'':'<div class="blueprint"></div>'}<div class="glyph glyph-anim">${G[x.g]||''}</div></div>
          <div class="prod-body"><span class="prod-cat"><span>${esc(cat[x.c])}</span> · ${esc(x.code)}</span><h3>${esc(x.n)}</h3>
          <span class="prod-link">View product ${arrow}</span></div></a>`).join('')}
      </div>
    </div>
  </section>`:''}
  `;
  document.getElementById('app').innerHTML = html;

  // ---- hover photos for related product cards ----
  var rPhotos=window.PM_PHOTOS||[];
  document.querySelectorAll('.related-grid .prod-card').forEach(function(card){
    var code=card.dataset.code;
    if(!code||rPhotos.indexOf(code)===-1) return;
    var fig=card.querySelector('.prod-figure');
    if(!fig) return;
    var img=document.createElement('img');
    img.className='prod-hover-photo';
    img.src='assets/products/'+code.replace(/[^A-Za-z0-9]+/g,'-')+'.png';
    img.alt='';
    fig.appendChild(img);
  });

  // ---- cinematic glyph + spotlight cycle ----
  const stage=document.getElementById('gstage');
  const art=stage&&stage.querySelector('.gart');
  const fes=[...document.querySelectorAll('#featGrid .feat')];
  if(stage&&fes.length){
    let i=0;
    function cyc(){
      fes.forEach((f,n)=>f.classList.toggle('on',n===i));
      stage.dataset.z=String(i% 4);
      if(art){art.classList.add('glow');setTimeout(()=>art.classList.remove('glow'),650);}
      i=(i+1)%fes.length;
    }
    cyc(); setInterval(cyc,2600);
    fes.forEach((f,n)=>{
      f.addEventListener('mouseenter',()=>{i=n;fes.forEach((x,m)=>x.classList.toggle('on',m===n));stage.dataset.z=String(n%4);});
      f.addEventListener('click',()=>{i=n;fes.forEach((x,m)=>x.classList.toggle('on',m===n));stage.dataset.z=String(n%4);});
    });
  }

  // ---- real product photo slot (drop a 1000x1000 PNG at assets/products/<code>.png) ----
  if(stage){
    const ph = stage.querySelector('.gphoto');
    const has = (window.PM_PHOTOS||[]).indexOf(p.code)>-1;
    if(ph && has){
      const slug = p.code.replace(/[^A-Za-z0-9]+/g,'-');
      ph.addEventListener('load',()=>{
        // cycle: 3s animation → 5s photo → repeat
        function showPhoto(){ stage.dataset.photo='1'; setTimeout(hidePhoto,5000); }
        function hidePhoto(){ delete stage.dataset.photo; setTimeout(showPhoto,3000); }
        setTimeout(showPhoto,1500);
      });
      ph.addEventListener('error',()=>{ ph.remove(); });
      ph.src='assets/products/'+slug+'.png';
    } else if(ph){ ph.remove(); }
  }

  // translate after injection
  if(window.PMI18n) PMI18n.apply();

  // mobile: animation → photo cycle for related cards
  if(!window.matchMedia('(hover:hover)').matches){
    [...document.querySelectorAll('.prod-card')].forEach(function(card,i){
      if(!card.querySelector('.prod-hover-photo')) return;
      setTimeout(function flip(){
        card.classList.add('photo-on');
        setTimeout(function(){card.classList.remove('photo-on');setTimeout(flip,2000);},2000);
      },2000+i*400);
    });
  }
})();
