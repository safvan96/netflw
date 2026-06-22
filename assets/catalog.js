/* Net Flow, catalog data + filtering */
(function(){
  // schematic glyphs by family, each animates its working principle
  const PIPE = `<rect x="12" y="58" width="10" height="46" rx="2"/><rect x="138" y="58" width="10" height="46" rx="2"/><rect x="22" y="64" width="116" height="34" rx="6"/>`;
  const FLOWDOTS = `<g fill="currentColor" stroke="none"><circle class="g-flow" cx="30" cy="81" r="3"/><circle class="g-flow" cx="30" cy="73" r="2.4"/><circle class="g-flow" cx="30" cy="89" r="2.6"/><circle class="g-flow" cx="30" cy="81" r="2"/></g>`;
  const G = {
    flow:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="62" y="8" width="36" height="32" rx="5"/><rect x="70" y="14" width="20" height="13" rx="2"/><rect x="74" y="40" width="12" height="24"/>${PIPE}<g stroke-width="2.4" opacity=".85"><path d="M64 64q-6-8 0-15M74 64q-6-8 0-15M86 64q-6-8 0-15"/></g><circle class="g-pulse" cx="80" cy="70" r="2.8" fill="currentColor" stroke="none"/><circle class="g-pulse" cx="80" cy="92" r="2.8" fill="currentColor" stroke="none"/>${FLOWDOTS}</svg>`,
    food:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="66" y="10" width="28" height="22" rx="5"/><rect x="75" y="32" width="10" height="22"/><rect x="34" y="54" width="92" height="34" rx="17"/><g stroke-width="3.4"><path d="M30 50v42M130 50v42"/><circle cx="30" cy="71" r="7"/><circle cx="130" cy="71" r="7"/></g>${FLOWDOTS}</svg>`,
    battery:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="50" y="4" width="60" height="38" rx="6"/><rect x="110" y="15" width="6" height="16" rx="2" fill="currentColor" stroke="none"/><g stroke-width="3.4"><path d="M64 16v14M72 16v14"/><path class="g-pulse" d="M88 23h12M94 17v12"/></g><rect x="74" y="42" width="12" height="22"/>${PIPE}${FLOWDOTS}</svg>`,
    insertion:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="66" y="2" width="28" height="20" rx="4"/><rect x="75" y="22" width="10" height="40"/><line x1="80" y1="62" x2="80" y2="94" stroke-width="4"/>${PIPE}<circle class="g-pulse" cx="80" cy="92" r="4" fill="currentColor" stroke="none"/>${FLOWDOTS}</svg>`,
    partial:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="66" y="4" width="28" height="26" rx="4"/><line x1="80" y1="30" x2="80" y2="80"/><path d="M14 56v48h132V56"/><path d="M14 84h132" stroke-dasharray="2 7" opacity=".55"/><g fill="currentColor" stroke="none"><circle class="g-flow" cx="30" cy="92" r="3"/><circle class="g-flow" cx="30" cy="96" r="2.4"/><circle class="g-flow" cx="30" cy="88" r="2.6"/><circle class="g-flow" cx="30" cy="93" r="2"/></g></svg>`,
    zerod:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M30 26h18a10 10 0 0110 10v22" stroke-width="3.4"/><rect x="62" y="6" width="32" height="28" rx="5"/><rect x="72" y="34" width="12" height="24"/>${PIPE}<text x="122" y="86" font-family="JetBrains Mono,monospace" font-size="20" fill="currentColor" stroke="none" text-anchor="middle" font-weight="700">0D</text>${FLOWDOTS}</svg>`,
    mini:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="66" y="30" width="28" height="22" rx="4"/><rect x="74" y="52" width="12" height="14"/><rect x="56" y="66" width="48" height="22" rx="6"/><rect x="48" y="70" width="8" height="14" rx="2"/><rect x="104" y="70" width="8" height="14" rx="2"/><g stroke-width="2" opacity=".7"><path d="M40 100h80M40 96v8M120 96v8"/></g><g fill="currentColor" stroke="none"><circle class="g-flow" cx="60" cy="77" r="2.4"/><circle class="g-flow" cx="60" cy="73" r="1.8"/><circle class="g-flow" cx="60" cy="81" r="2"/></g></svg>`,
    slurry:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="60" y="6" width="40" height="32" rx="5"/><rect x="74" y="38" width="12" height="26"/><rect x="10" y="56" width="12" height="50" rx="2"/><rect x="138" y="56" width="12" height="50" rx="2"/><rect x="22" y="62" width="116" height="38" rx="6"/><g fill="currentColor" stroke="none"><circle class="g-flow" cx="32" cy="81" r="5"/><circle class="g-flow" cx="32" cy="74" r="4"/><circle class="g-flow" cx="32" cy="89" r="4.5"/><circle class="g-flow" cx="32" cy="82" r="3.5"/></g></svg>`,
    bypass:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="44" y="12" width="38" height="96" rx="8"/><rect x="92" y="12" width="22" height="96" rx="4"/><path d="M92 34h22M92 54h22M92 74h22M92 94h22" stroke-width="1.4" opacity=".45"/><path d="M44 58h-12M114 58h12"/><rect class="g-level" x="50" y="54" width="26" height="12" rx="6" fill="currentColor" stroke="none"/></svg>`,
    exproof:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="44" y="12" width="38" height="96" rx="8"/><rect x="92" y="12" width="22" height="96" rx="4"/><path d="M97 30l-4 9h8l-4 9" stroke-width="2.4"/><path d="M30 24l7 7M122 24l-7 7" stroke-width="2.4"/><path d="M44 60h-12M114 60h12"/><rect class="g-level" x="50" y="56" width="26" height="12" rx="6" fill="currentColor" stroke="none"/></svg>`,
    boiler:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="48" y="14" width="40" height="92" rx="8"/><rect x="98" y="14" width="20" height="92" rx="4"/><path class="g-pulse" d="M56 8c0 5-5 5-5 10M68 8c0 5-5 5-5 10" stroke-width="2.4"/><path d="M48 60h-12M118 60h12"/><rect class="g-level" x="54" y="56" width="28" height="12" rx="6" fill="currentColor" stroke="none"/></svg>`,
    floattx:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="66" y="4" width="28" height="22" rx="4"/><line x1="80" y1="26" x2="80" y2="106"/><path d="M52 106h56" stroke-dasharray="2 7" opacity=".5"/><g class="g-bob"><ellipse cx="80" cy="70" rx="24" ry="14" fill="currentColor" fill-opacity=".12"/><ellipse cx="80" cy="70" rx="24" ry="14"/></g></svg>`,
    motor:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="58" y="6" width="44" height="28" rx="5"/><circle class="g-pulse" cx="80" cy="20" r="3" fill="currentColor" stroke="none"/><line x1="80" y1="34" x2="80" y2="72"/><g class="g-spin" style="transform-box:view-box;transform-origin:80px 78px"><rect x="50" y="72" width="60" height="12" rx="3" fill="currentColor" fill-opacity=".15"/><rect x="50" y="72" width="60" height="12" rx="3"/></g><circle cx="80" cy="78" r="3" fill="currentColor" stroke="none"/></svg>`,
    maglevel:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="64" y="4" width="32" height="24" rx="4"/><line x1="80" y1="28" x2="80" y2="106"/><path d="M62 106h36" stroke-dasharray="2 7" opacity=".5"/><rect class="g-bob" x="60" y="62" width="40" height="16" rx="8" fill="currentColor" fill-opacity=".14"/><rect class="g-bob" x="60" y="62" width="40" height="16" rx="8"/></svg>`,
    miniswitch:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="66" y="10" width="28" height="22" rx="4"/><line x1="80" y1="32" x2="80" y2="74"/><g class="g-bob"><circle cx="80" cy="86" r="16" fill="currentColor" fill-opacity=".12"/><circle cx="80" cy="86" r="16"/></g></svg>`,
    floatswitch:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="66" y="8" width="28" height="20" rx="4"/><path class="g-bob" d="M80 28v32"/><g class="g-bob"><ellipse cx="80" cy="80" rx="22" ry="15" fill="currentColor" fill-opacity=".12"/><ellipse cx="80" cy="80" rx="22" ry="15"/></g></svg>`,
    sideswitch:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="128" y="8" width="10" height="104" rx="2"/><rect x="106" y="48" width="22" height="24" rx="4"/><circle cx="117" cy="60" r="3" fill="currentColor" stroke="none"/><g class="g-needle" style="transform-box:view-box;transform-origin:117px 60px"><line x1="50" y1="60" x2="106" y2="60" stroke-width="2.5"/><ellipse cx="36" cy="60" rx="15" ry="9" fill="currentColor" fill-opacity=".14"/><ellipse cx="36" cy="60" rx="15" ry="9"/></g></svg>`,
    paddle:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="60" y="6" width="40" height="26" rx="5"/><line x1="80" y1="32" x2="80" y2="66"/><g class="g-spin" style="transform-box:view-box;transform-origin:80px 80px"><rect x="58" y="66" width="44" height="14" rx="3" fill="currentColor" fill-opacity=".15"/><rect x="58" y="66" width="44" height="14" rx="3"/><rect x="74" y="80" width="12" height="20" rx="3"/></g><circle cx="80" cy="80" r="3" fill="currentColor" stroke="none"/></svg>`,
    angle:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="80" cy="62" r="40"/><circle cx="80" cy="62" r="4" fill="currentColor" stroke="none"/><path d="M48 38a44 44 0 0164 0" stroke-width="2" opacity=".5" stroke-dasharray="2 6"/><line class="g-needle" x1="80" y1="62" x2="80" y2="26" style="transform-box:view-box;transform-origin:80px 62px" stroke-width="3.5"/></svg>`,
    pt:`<svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="80" cy="46" r="30"/><circle class="g-field" cx="80" cy="46" r="20" stroke-width="1.6"/><line class="g-needle" x1="80" y1="46" x2="98" y2="30" style="transform-box:view-box;transform-origin:80px 46px" stroke-width="3"/><circle cx="80" cy="46" r="3.5" fill="currentColor" stroke="none"/><line x1="80" y1="76" x2="80" y2="106"/><path d="M68 106h24"/></svg>`
  };

  const cat = {flow:"Flow Meter",level:"Level Instrument",switch:"Level Switch",process:"Process Instrument"};

  const P = [
    {n:"Electromagnetic Flow Meter",code:"NT-VMF",c:"flow",g:"flow",t:0,star:1,ind:["water","oil","food","chemical","mining"],link:"electromagnetic-flow-meter.html",tags:["★ Bestseller","Made in Türkiye"],s:[["DN3–DN3000","Diameter"],["±0.2%","Accuracy"]],d:"No moving parts, zero pressure drop. For any conductive liquid, six liners, six electrode alloys, every output protocol.",pdf:"nt-vmf",img:"assets/img/1.png"},
    {n:"Food-Grade Flow Meter",code:"NT-VMF-W",c:"flow",g:"food",t:1,ind:["food","chemical"],tags:["Hygienic"],s:[["DN10–DN200","Diameter"],["Tri-Clamp","Connection"]],d:"Hygienic tri-clamp connection for dairy, beverage and pharma transfer lines. PTFE / PFA lined, 316L electrodes.",pdf:"nt-vmf-w",img:"assets/img/food.webp"},
    {n:"Battery-Powered Flow Meter",code:"NT-VMF-BT",c:"flow",g:"battery",t:0,ind:["water"],tags:["5-Year Battery"],s:[["DN3–DN600","Diameter"],["3.6V Li","Power"]],d:"Five-year lithium battery for remote sites with no mains power, irrigation, DMA stations, NRW leak detection.",pdf:"nt-vmf-bt",img:"assets/img/battery.png"},
    {n:"Insertion Flow Meter",code:"NT-VMF-I",c:"flow",g:"insertion",t:0,ind:["water","oil"],tags:["Easy Retrofit"],s:[["DN100–DN3000","Diameter"],["±0.5%","Accuracy"]],d:"Single-point insertion for large mains, retrofit onto existing lines without cutting the pipe. ABS / PP body.",pdf:"nt-vmf-i",img:"assets/img/insertion.webp"},
    {n:"Partially-Filled Flow Meter",code:"NT-VMF-P",c:"flow",g:"partial",t:0,ind:["water"],tags:["Gravity Flow"],s:[["DN200–DN3000","Diameter"],["±2.5%","Accuracy"]],d:"Measures level and velocity together in non-full pipes, sewerage, stormwater and industrial drainage.",pdf:"nt-vmf-p",img:"assets/img/partial.webp"},
    {n:"Zero Straight-Run (0D) Meter",code:"NT-VMF-0D",c:"flow",g:"zerod",t:0,ind:["water","chemical"],tags:["0D Install"],s:[["DN3–DN3000","Diameter"],["±0.5%","Accuracy"]],d:"No upstream or downstream straight pipe required, mount right after an elbow, valve or pump in tight spaces.",pdf:"nt-vmf-0d",img:"assets/img/zerod.webp"},
    {n:"Miniature Flow Meter",code:"NT-VMF-M",c:"flow",g:"mini",t:1,ind:["chemical","food"],tags:["Micro Flow"],s:[["DN3–DN15","Diameter"],["PIC body","Material"]],d:"Precision micro-dosing from 0.2 L/min, chemical dosing, pharma and lab applications. Polyimide composite body.",pdf:"nt-vmf-m",img:"assets/img/mini.webp"},
    {n:"Slurry Flow Meter",code:"NT-VMF-S",c:"flow",g:"slurry",t:1,ind:["mining","chemical"],tags:["Heavy Duty"],s:[["Pt-Ir","Electrode"],["≤0.17%","Repeatability"]],d:"Abrasion-resistant with 25/30 Hz high-frequency excitation to suppress particle noise, mining, cement, drilling mud.",pdf:"nt-vmf-s",img:"assets/img/slurry.webp"},
    {n:"Magnetic Bypass Level Indicator",code:"NT-MLI",c:"level",g:"bypass",t:0,ind:["oil","chemical","water"],tags:["No Power"],s:[["200°C","Max temp"],["PN10","Pressure"]],d:"Sealed magnetic flag indication, no power, zero maintenance. For fuel, chemical and boiler-drum tanks.",pdf:"nt-mbl",img:"assets/img/bypass.png"},
    {n:"Ex-Proof Bypass Indicator",code:"NT-MLI-EX",c:"level",g:"exproof",t:0,ind:["oil","chemical"],tags:["Hazardous Areas"],s:[["150°C","Max temp"],["PN10","Pressure"]],d:"Ex-proof design for hazardous atmospheres, refineries, LPG/LNG terminals and solvent storage.",img:"assets/img/exproof.webp"},
    {n:"Boiler-Type Bypass Indicator",code:"NT-MLI-BR",c:"level",g:"boiler",t:0,ind:["oil"],tags:["High Pressure"],s:[["300°C","Max temp"],["PN40","Pressure"]],d:"Built for high-pressure steam systems, fire-tube and water-tube boiler drums, power-plant feed tanks.",img:"assets/img/boiler.webp"},
    {n:"Float Level Transmitter",code:"NT-FLT",c:"level",g:"floattx",t:1,ind:["water","chemical","food"],tags:["Continuous"],s:[["0–6000mm","Range"],["4–20mA","Output"]],d:"Continuous level with simple, reliable float + magnetic coupling, water reservoirs, process and wastewater tanks.",img:"assets/img/floattx.png"},
    {n:"Motorized Level Sensor",code:"NT-MLS",c:"level",g:"motor",t:0,ind:["mining","food"],tags:["Solids Detection"],s:[["Relay","Output"],["IP65","Protection"]],d:"Rotary-paddle detection of bulk solids, grain silos, cement, plastic granule and powder storage.",img:"assets/img/motor.png"},
    {n:"Side-Mount Level Switch",code:"NT-MLP",c:"switch",g:"sideswitch",t:0,ind:["water","chemical","oil"],tags:["Point Level"],s:[["Side mount","Type"],["IP67","Protection"]],d:"Lever-arm float switch mounted on the side wall of a tank for high/low alarms and pump control in water, chemical and oil service."},
    {n:"Mini Stainless Level Switch",code:"NT-LSW-M",c:"switch",g:"miniswitch",t:1,ind:["chemical"],tags:["Compact"],s:[["IP67","Protection"],["316L","Body"]],d:"Fits the tightest spaces, machine tanks, compressors and compact systems. Stainless, NO/NC relay.",img:"assets/img/miniswitch.png"},
    {n:"Float Level Switch",code:"NT-LSW-F",c:"switch",g:"floatswitch",t:0,ind:["water"],tags:["Economical"],s:[["120°C","Max temp"],["PP / SS","Body"]],d:"The simplest, most economical level detection, pump control, sumps and condensate tanks.",img:"assets/img/floatswitch.png"},
    {n:"Paddle Motor Level Switch",code:"NT-LSW-P",c:"switch",g:"paddle",t:0,ind:["mining","food"],tags:["Solids"],s:[["220VAC","Supply"],["IP65","Protection"]],d:"Rotating-paddle full/empty detection for grain, cement and plastic-granule silos, economical and rugged.",pdf:"nt-lsw-p",img:"assets/img/paddle.png"},
    {n:"Angle Sensor (RCS Series)",code:"NT-RCS 3100/2100",c:"process",g:"angle",t:0,ind:["oil"],tags:["Contactless"],s:[["0–360°","Range"],["12-bit","Resolution"]],d:"Contactless Hall-effect angle sensing with unlimited rotation life, valve position feedback and mobile machinery.",img:"assets/img/angle.png"},
    {n:"Pressure-Temperature Transmitter",code:"NT-BTT-S",c:"process",g:"pt",t:0,ind:["oil","chemical"],tags:["2-in-1"],s:[["0–600 bar","Pressure"],["PT100","Temp"]],d:"Two measurements from one tapping, pressure and temperature together, halving cabling and install space.",img:"assets/img/pt.png"}
  ];

  const grid=document.getElementById('catGrid');
  const countEl=document.getElementById('count');
  let curCat='all', curInd='all', curQ='';
  function L(){ return (localStorage.getItem('pm_lang')||'en'); }
  function countMsg(n,t){ const l=L();
    if(l==='tr') return n+' / '+t+' cihaz';
    if(l==='ar') return n+' / '+t+' جهاز';
    if(l==='ru') return n+' / '+t+' приборов';
    return n+' of '+t+' instruments'; }
  function emptyMsg(){ const l=L();
    return ({tr:'Bu filtrelere uygun cihaz yok.',ar:'لا توجد أجهزة تطابق هذه المرشحات.',ru:'Нет приборов по этим фильтрам.'}[l])||'No instruments match these filters.'; }

  function card(p){
    const theme=p.t?' theme-light':'';
    const tags=(p.tags||[]).map(t=>{
      let cls='badge';
      if(t.startsWith('★'))cls='badge badge--star';
      else if(/Türkiye/.test(t))cls='badge badge--turkey';
      else if(/Battery|Hygienic|Micro|Continuous|2-in-1/.test(t))cls='badge badge--blue';
      return `<span class="${cls}">${t}</span>`;
    }).join('');
    const specs=p.s.map(x=>`<div class="ps"><b>${x[0]}</b><span>${x[1]}</span></div>`).join('');
    const href=p.link?p.link:('product.html?p='+encodeURIComponent(p.code));
    const media = `<div class="glyph glyph-anim">${G[p.g]}</div>`;
    const photo = p.img ? `<img class="prod-hover-photo" src="${p.img}" alt="${p.n}" loading="lazy">` : '';
    return `<a href="${href}" class="card prod-card${theme}">
      <div class="prod-figure">${p.t?'':'<div class="blueprint"></div>'}<div class="prod-tags">${tags}</div>${media}${photo}</div>
      <div class="prod-body">
        <span class="prod-cat"><span class="pc-name">${cat[p.c]}</span>${p.code&&p.code!==', '?' · '+p.code:''}</span>
        <h3>${p.n}</h3>
        <p>${p.d}</p>
        <div class="prod-specs">${specs}</div>
        <span class="prod-link">View product <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
    </a>`;
  }

  function render(){
    const q=curQ.trim().toLowerCase();
    const list=P.filter(p=>
      (curCat==='all'||p.c===curCat) &&
      (curInd==='all'||p.ind.includes(curInd)) &&
      (!q || (p.n+' '+p.d+' '+p.code).toLowerCase().includes(q))
    );
    grid.innerHTML = list.length ? list.map(card).join('') : `<div class="empty">${emptyMsg()}</div>`;
    countEl.textContent = countMsg(list.length, P.length);
    if(window.PMI18n) PMI18n.apply();
    mobileCycle();
  }

  function mobileCycle(){
    if(window.matchMedia('(hover:hover)').matches) return;
    [...document.querySelectorAll('.prod-card')].forEach(function(card,i){
      if(!card.querySelector('.prod-hover-photo')) return;
      setTimeout(function flip(){
        card.classList.add('photo-on');
        setTimeout(function(){card.classList.remove('photo-on');setTimeout(flip,2000);},2000);
      },2000+i*400);
    });
  }

  function scrollToGrid(){
    const top = grid.getBoundingClientRect().top + scrollY - 140;
    window.scrollTo({top, behavior:'smooth'});
  }
  document.getElementById('catChips').addEventListener('click',e=>{
    const b=e.target.closest('.chip'); if(!b)return;
    document.querySelectorAll('#catChips .chip').forEach(c=>c.classList.remove('on'));
    b.classList.add('on'); curCat=b.dataset.cat; render(); scrollToGrid();
  });
  document.getElementById('indChips').addEventListener('click',e=>{
    const b=e.target.closest('.chip'); if(!b)return;
    document.querySelectorAll('#indChips .chip').forEach(c=>c.classList.remove('on'));
    b.classList.add('on'); curInd=b.dataset.ind; render(); scrollToGrid();
  });
  document.getElementById('search').addEventListener('input',e=>{curQ=e.target.value;render();});
  document.querySelectorAll('.ind[data-jump]').forEach(el=>el.addEventListener('click',()=>{
    const ind=el.dataset.jump;
    document.querySelectorAll('#indChips .chip').forEach(c=>c.classList.toggle('on',c.dataset.ind===ind));
    curInd=ind; render(); scrollToGrid();
  }));

  // header shrink
  const hdr=document.getElementById('hdr');
  addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>20));

  // pre-filter from ?ind= / ?cat= (industry links from other pages)
  (function(){
    const m=location.search.match(/[?&]ind=([a-z]+)/i);
    if(m){ const ind=m[1].toLowerCase();
      const chip=document.querySelector('#indChips .chip[data-ind="'+ind+'"]');
      if(chip){ document.querySelectorAll('#indChips .chip').forEach(c=>c.classList.remove('on')); chip.classList.add('on'); curInd=ind; }
    }
    const mc=location.search.match(/[?&]cat=([a-z]+)/i);
    if(mc){ const c=mc[1].toLowerCase(); const ch=document.querySelector('#catChips .chip[data-cat="'+c+'"]');
      if(ch){ document.querySelectorAll('#catChips .chip').forEach(x=>x.classList.remove('on')); ch.classList.add('on'); curCat=c; } }
  })();

  render();
})();
