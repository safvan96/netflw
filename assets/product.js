/* Net Flow — flagship product page */
(function(){
  // header shrink
  const hdr=document.getElementById('hdr');
  addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>20),{passive:true});

  // ---- drop-in 3D model: show it when a real .glb loads, else keep the SVG ----
  const mv=document.querySelector('.hero-mv');
  if(mv){
    mv.addEventListener('load',()=>{ mv.classList.add('mv-ready'); });
    mv.addEventListener('error',()=>{ mv.remove(); });
  }
  // ---- real product photo slot — animation cycle (in page script) handles show/hide ----
  const exPhoto=document.querySelector('.p-hero .ex-photo');
  if(exPhoto){ exPhoto.addEventListener('error',()=>exPhoto.remove()); }

  // ---- animated LCD ----
  const lcds=[...document.querySelectorAll('.lcd-val')];
  if(lcds.length){let cur=128.4,target=128.4;setInterval(()=>{target=127.4+Math.random()*2;},2200);
    (function tick(){cur+=(target-cur)*0.07;lcds.forEach(l=>l.textContent=cur.toFixed(1));requestAnimationFrame(tick);})();}

  // ---- scroll-driven explorer (clone the tour meter, drive stages by wheel scroll) ----
  const sxMeter=document.querySelector('.sx-meter');
  const tourMeterSrc=document.querySelector('.tour-meter');
  if(sxMeter&&tourMeterSrc){ sxMeter.innerHTML=tourMeterSrc.innerHTML; }
  const sxTrack=document.getElementById('sxTrack');
  const sxPin=document.getElementById('sxPin');
  if(sxTrack&&sxPin){
    const sxCaps=[...document.querySelectorAll('#sxCaps .sx-cap')];
    const sxDots=[...document.querySelectorAll('#sxProg i')];
    const SX=6; let sxCur=-1;
    function sxSet(n){ if(n===sxCur)return; sxCur=n; sxPin.dataset.stage=n;
      sxCaps.forEach((c,i)=>c.classList.toggle('on',i===n));
      sxDots.forEach((d,i)=>d.classList.toggle('on',i===n)); }
    function sxScroll(){
      const r=sxTrack.getBoundingClientRect();
      const scrollable=sxTrack.offsetHeight-innerHeight;
      if(scrollable<=0){ sxSet(0); return; }
      const p=Math.min(1,Math.max(0,(-r.top)/scrollable));
      sxSet(Math.min(SX-1,Math.floor(p*SX)));
    }
    addEventListener('scroll',sxScroll,{passive:true});
    addEventListener('resize',sxScroll); sxScroll();
  }

  // ---- interactive product tour ----
  const stage=document.getElementById('tourStage');
  if(stage){
    const PARTS=['output','physics','body','cal'];
    const chips=[...document.querySelectorAll('#tourChips .tchip')];
    const cards=[...document.querySelectorAll('#tourCards .tcard')];
    const hots=[...stage.querySelectorAll('.hot')];
    const bar=document.getElementById('tourBar');
    const meter=stage.querySelector('.tour-meter');
    let idx=0, timer=null, auto=true;

    function show(part){
      if(!part)return;
      idx=Math.max(0,PARTS.indexOf(part));
      stage.dataset.focus=part;
      chips.forEach(c=>c.classList.toggle('on',c.dataset.part===part));
      cards.forEach(c=>c.classList.toggle('on',c.dataset.part===part));
      hots.forEach(h=>h.classList.toggle('on',h.dataset.part===part));
      // restart progress bar animation
      if(bar){ bar.classList.remove('run'); void bar.offsetWidth; if(auto) bar.classList.add('run'); }
    }
    function next(){ show(PARTS[(idx+1)%PARTS.length]); }
    function start(){ auto=true; if(meter) meter.classList.add('idle'); clearInterval(timer); timer=setInterval(next,4600); show(PARTS[idx]); }
    function stop(){ auto=false; clearInterval(timer); if(bar) bar.classList.remove('run'); if(meter) meter.classList.remove('idle'); }

    function pick(part){ stop(); show(part); }
    chips.forEach(c=>c.addEventListener('click',()=>pick(c.dataset.part)));
    hots.forEach(h=>h.addEventListener('click',()=>pick(h.dataset.part)));

    // start auto-tour when it scrolls into view; pause when out
    let started=false;
    const io=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting){ if(!started){started=true; show('output'); start();} }
      else { clearInterval(timer); }
    }),{threshold:.3});
    io.observe(stage);
    // fallback: ensure first state visible immediately
    show('output');
    // resume auto if it was running and comes back
    addEventListener('focus',()=>{ if(auto&&started) start(); });
  }

  // ---- material selector ----
  const MEDIA={
    cleanwater:{liner:"Hard Rubber",el:"SS 316L"},
    wastewater:{liner:"Neoprene",el:"SS 316L"},
    food:{liner:"F46 (FEP)",el:"SS 316L"},
    acid:{liner:"PTFE",el:"Hastelloy B"},
    oxidizer:{liner:"PTFE",el:"Hastelloy C"},
    seawater:{liner:"PTFE",el:"Titanium"},
    slurry:{liner:"Polyurethane",el:"Hastelloy C"}
  };
  const LINER_D={
    "PTFE":"−40→180°C. Acids, bases, high temperature and general-purpose service — the most common choice.",
    "Hard Rubber":"Economical, durable lining for clean and raw water at low temperature.",
    "Neoprene":"Economical lining for wastewater and low-pressure water lines.",
    "F46 (FEP)":"Smooth fluoropolymer lining for food and mid-temperature chemical duty.",
    "PFA":"Ultra-smooth, high-purity lining for pharmaceutical and high-purity chemicals.",
    "Polyurethane":"High mechanical strength for abrasive slurry in mining and cement."
  };
  const EL_D={
    "SS 316L":"Standard, most economical electrode for water, wastewater and mild media.",
    "Hastelloy B":"For hydrochloric, phosphoric and other non-oxidizing acids.",
    "Hastelloy C":"For strong oxidizers (HNO₃, H₂SO₄) and chlorinated, aggressive media.",
    "Titanium":"For seawater, brine and hypochlorite.",
    "Tantalum":"Withstands aqua regia and nearly every chemical.",
    "Platinum":"For extreme corrosives and special applications."
  };
  const chips=document.getElementById('mediaChips');
  function applyMedia(m){
    const r=MEDIA[m]; if(!r)return;
    // use innerHTML to force new text nodes so i18n engine re-translates
    var pl=document.getElementById('pickLiner'),pld=document.getElementById('pickLinerD');
    var pe=document.getElementById('pickEl'),ped=document.getElementById('pickElD');
    if(pl)pl.innerHTML='';pl.appendChild(document.createTextNode(r.liner));
    if(pld)pld.innerHTML='';pld.appendChild(document.createTextNode(LINER_D[r.liner]||''));
    if(pe)pe.innerHTML='';pe.appendChild(document.createTextNode(r.el));
    if(ped)ped.innerHTML='';ped.appendChild(document.createTextNode(EL_D[r.el]||''));
    document.querySelectorAll('#linerTable tr').forEach(tr=>tr.classList.toggle('sel',tr.dataset.l===r.liner));
    document.querySelectorAll('#elTable tr').forEach(tr=>tr.classList.toggle('sel',tr.dataset.e===r.el));
    if(window.PMI18n) PMI18n.apply();
  }
  if(chips){
    chips.addEventListener('click',e=>{
      const b=e.target.closest('.media-chip'); if(!b)return;
      chips.querySelectorAll('.media-chip').forEach(c=>c.classList.remove('on'));
      b.classList.add('on'); applyMedia(b.dataset.m);
    });
    applyMedia('cleanwater');
  }
})();
