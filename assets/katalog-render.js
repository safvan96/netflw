/* NET FLOW — E-Katalog sayfa üretici */
(function(){
  const C = window.NF_CAT, doc = document.querySelector('doc-page');
  const UI = Object.assign({
    principle:"Çalışma Prensibi", contents:"İçindekiler",
    jumpHint:"Ürün adına tıklayarak ilgili sayfaya gidebilirsiniz",
    corporate:"Kurumsal", aboutTitle:"Biz Kimiz?", aboutLabel:"Biz Kimiz",
    uses:"Kullanım Alanları", sectorsLong:"Kullanılan Sektörler", sectors:"Sektörler",
    variantImgs:"Model Görselleri", notes:"Notlar", models:"Modeller",
    specs:"Teknik Özellikler", contact:"İletişim", address:"Adres",
    waCta:"WhatsApp'tan hemen yazın", exportBrand:"VFA Elektronik ihracat markası",
    coverVfa:"VFA Elektronik'in ihracat markası · 12 yıllık üretim tecrübesi",
    tagline:"Endüstriyel Ölçüm", coverLabel:"Kapak", backLabel:"Arka Kapak",
    coverEyebrow:"Ürün Kataloğu · 2026",
    coverH1:"Ölçün.", coverH1em:"Kontrol edin.",
    coverLede:"${esc(UI.coverLede)}",
    madeIn:"Yerli Malı",
    calibTitle:"Kalibrasyon Güvencesi",
    projectTitle:"Proje Talebi",
    closingLabel:"Otomasyon", closingScreen:"Otomasyon ve Tasarım",
    backH2:"Doğru ölçüm,<br>güvenilir veri.",
    backSub:"Ürün seçimi, uygulama desteği ve teklif için bize ulaşın. Yerli üretim, hızlı teslimat ve doğrudan mühendislik desteği.",
    calibBody:"Elektromanyetik debimetreler, TÜRKAK akreditasyonlu (AB-0354-K) ISO/IEC 17025:2017 laboratuvarımızda 1–350 m³/h aralığında ±%0,27 belirsizlikle kalibre edilir ve izlenebilir sertifikasıyla sevk edilir. Diğer tüm ürünlerimiz Yerli Malı belgesi, ISO 9001 kalite sistemi ve CE beyanı ile teslim edilir.",
    projectBody:"Ölçüm noktalarınızı, akışkan bilgilerini ve hat ölçülerini paylaşın; mühendislik ekibimiz uygun ürün seçimini yaparak bir iş günü içinde yapılandırılmış teklif ve teknik doküman ile dönüş sağlar.",
    contLabel:"Devam",
    rights:"© 2026 Net Flow · Tüm hakları saklıdır"
  }, C.ui || {});
  const WPX = C.wp || null;

  if(!C||!doc) return;
  const esc = s => (s==null?'':String(s)).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  const LOGO = `<img src="assets/logo-amblem.svg" alt="Net Flow" class="nf-mark">`;
  const LOGO_FULL = `<img src="assets/logo-full.svg" alt="Net Flow" class="nf-full">`;

  /* ---- schematic glyphs (working principle) ---- */
  const PIPE = `<rect x="12" y="58" width="10" height="46" rx="2"/><rect x="138" y="58" width="10" height="46" rx="2"/><rect x="22" y="64" width="116" height="34" rx="6"/>`;
  const DOTS = `<g fill="currentColor" stroke="none"><circle cx="34" cy="81" r="3"/><circle cx="58" cy="74" r="2.4"/><circle cx="58" cy="89" r="2.6"/><circle cx="84" cy="81" r="2.2"/><circle cx="108" cy="76" r="2.6"/></g>`;
  const G = {
    flow:`<rect x="62" y="8" width="36" height="32" rx="5"/><rect x="70" y="14" width="20" height="13" rx="2"/><rect x="74" y="40" width="12" height="24"/>${PIPE}<g stroke-width="2.4" opacity=".85"><path d="M64 64q-6-8 0-15M74 64q-6-8 0-15M86 64q-6-8 0-15"/></g><circle cx="80" cy="70" r="2.8" fill="currentColor" stroke="none"/><circle cx="80" cy="92" r="2.8" fill="currentColor" stroke="none"/>${DOTS}`,
    turbine:`<rect x="62" y="8" width="36" height="30" rx="5"/><rect x="74" y="38" width="12" height="26"/>${PIPE}<circle cx="80" cy="81" r="13"/><path d="M80 68v26M67 81h26M71 72l18 18M89 72l-18 18" stroke-width="2"/>`,
    rota:`<path d="M58 108V30q0-8 8-8h28q8 0 8 8v78" /><path d="M52 108h56"/><ellipse cx="80" cy="66" rx="13" ry="8" fill="currentColor" fill-opacity=".18"/><ellipse cx="80" cy="66" rx="13" ry="8"/><path d="M104 40h12M104 60h12M104 80h12" stroke-width="1.6" opacity=".6"/>`,
    vortex:`<rect x="62" y="6" width="36" height="30" rx="5"/><rect x="74" y="36" width="12" height="28"/>${PIPE}<rect x="72" y="70" width="8" height="22" rx="2" fill="currentColor" stroke="none" opacity=".5"/><path d="M88 74q8 4 0 8t0 8M100 76q7 3 0 6t0 6" stroke-width="2"/>`,
    ultra:`${PIPE}<rect x="44" y="34" width="26" height="18" rx="4"/><rect x="92" y="34" width="26" height="18" rx="4"/><path d="M57 52l16 14M105 52L89 66" stroke-width="2" stroke-dasharray="3 3"/><path d="M30 81h100" stroke-width="1.6" opacity=".5" stroke-dasharray="4 4"/>`,
    channel:`<path d="M14 40v64h132V40" /><path d="M14 78h132" stroke-dasharray="3 6" opacity=".6"/><rect x="64" y="8" width="32" height="22" rx="4"/><path d="M80 30v14" stroke-dasharray="2 3"/><path d="M52 92q14-8 28 0t28 0" stroke-width="2"/>`,
    metaltube:`<path d="M60 108V34q0-10 10-10h20q10 0 10 10v74"/><path d="M52 108h56"/><rect x="66" y="56" width="28" height="12" rx="6" fill="currentColor" fill-opacity=".2"/><rect x="66" y="56" width="28" height="12" rx="6"/><rect x="104" y="30" width="26" height="20" rx="4"/>`,
    ovalgear:`${PIPE}<ellipse cx="66" cy="81" rx="16" ry="10"/><ellipse cx="98" cy="81" rx="16" ry="10"/><circle cx="66" cy="81" r="3" fill="currentColor" stroke="none"/><circle cx="98" cy="81" r="3" fill="currentColor" stroke="none"/>`,
    helical:`${PIPE}<path d="M36 81q12-12 24 0t24 0t24 0t16 0" stroke-width="2.4"/><path d="M36 74q12-12 24 0t24 0t24 0t16 0" stroke-width="1.6" opacity=".5"/><path d="M36 88q12-12 24 0t24 0t24 0t16 0" stroke-width="1.6" opacity=".5"/>`,
    thermal:`<rect x="62" y="4" width="36" height="30" rx="5"/><line x1="80" y1="34" x2="80" y2="70"/>${PIPE}<path d="M72 70v18M88 70v18" stroke-width="2"/><path d="M40 76h14M40 86h14M112 76h14M112 86h14" stroke-width="1.6" opacity=".55"/>`,
    coriolis:`<rect x="60" y="4" width="40" height="26" rx="5"/><path d="M22 88q0-34 24-34h20q10 0 10 12v10q0 12 10 12h20q24 0 24 34" stroke-width="2.6"/><circle cx="52" cy="60" r="3.5" fill="currentColor" stroke="none"/><circle cx="108" cy="60" r="3.5" fill="currentColor" stroke="none"/>`,
    switchflow:`${PIPE}<rect x="66" y="14" width="28" height="26" rx="4"/><line x1="80" y1="40" x2="80" y2="64"/><path d="M70 64l10 16 10-16" stroke-width="2.4"/>`,
    sight:`${PIPE}<circle cx="80" cy="81" r="16" fill="currentColor" fill-opacity=".12"/><circle cx="80" cy="81" r="16"/><path d="M70 81h20M80 71v20" stroke-width="1.6" opacity=".6"/><rect x="64" y="26" width="32" height="14" rx="4"/><line x1="80" y1="40" x2="80" y2="64"/>`,
    level:`<rect x="44" y="12" width="72" height="96" rx="8"/><path d="M44 66h72" stroke-dasharray="3 5" opacity=".6"/><rect x="50" y="70" width="60" height="34" rx="4" fill="currentColor" fill-opacity=".18" stroke="none"/><rect x="64" y="4" width="32" height="14" rx="4"/>`,
    radar:`<rect x="56" y="6" width="48" height="22" rx="5"/><path d="M80 28v10"/><path d="M62 38h36l-18 20z" fill="currentColor" fill-opacity=".18"/><path d="M62 38h36l-18 20z"/><path d="M56 72q24 10 48 0M50 86q30 12 60 0" stroke-width="1.8" opacity=".6"/><path d="M40 104h80" stroke-dasharray="3 5"/>`,
    hydro:`<path d="M28 30v78h104V30" stroke-dasharray="0"/><path d="M28 54h104" stroke-dasharray="3 5" opacity=".6"/><line x1="80" y1="8" x2="80" y2="88"/><rect x="72" y="88" width="16" height="16" rx="4" fill="currentColor" fill-opacity=".2"/><rect x="72" y="88" width="16" height="16" rx="4"/>`,
    capacitive:`<rect x="40" y="16" width="80" height="92" rx="6"/><line x1="80" y1="4" x2="80" y2="86"/><rect x="74" y="30" width="12" height="56" rx="3" fill="currentColor" fill-opacity=".2"/><rect x="74" y="30" width="12" height="56" rx="3"/><path d="M46 94h68" stroke-dasharray="3 5" opacity=".6"/>`,
    motor:`<rect x="58" y="6" width="44" height="28" rx="5"/><circle cx="80" cy="20" r="3" fill="currentColor" stroke="none"/><line x1="80" y1="34" x2="80" y2="72"/><rect x="50" y="72" width="60" height="12" rx="3" fill="currentColor" fill-opacity=".18"/><rect x="50" y="72" width="60" height="12" rx="3"/><path d="M44 96h72" stroke-dasharray="3 5" opacity=".5"/>`,
    vibrating:`<rect x="62" y="6" width="36" height="26" rx="5"/><line x1="80" y1="32" x2="80" y2="76"/><path d="M70 76v26M90 76v26" stroke-width="2.4"/><path d="M56 60q-6 8 0 16M104 60q6 8 0 16" stroke-width="1.8" opacity=".6"/>`,
    sideswitch:`<rect x="30" y="20" width="100" height="84" rx="6"/><path d="M30 62h100" stroke-dasharray="3 5" opacity=".6"/><rect x="6" y="52" width="24" height="20" rx="4"/><line x1="30" y1="62" x2="70" y2="62"/><ellipse cx="82" cy="62" rx="13" ry="9" fill="currentColor" fill-opacity=".2"/><ellipse cx="82" cy="62" rx="13" ry="9"/>`,
    diaphragm:`<rect x="34" y="14" width="92" height="92" rx="6"/><rect x="10" y="52" width="24" height="22" rx="4"/><path d="M34 63q10-10 20 0" stroke-width="2.4"/><g fill="currentColor" stroke="none" opacity=".35"><circle cx="70" cy="84" r="4"/><circle cx="86" cy="90" r="5"/><circle cx="104" cy="82" r="4"/><circle cx="90" cy="74" r="3.4"/></g>`,
    flood:`<rect x="24" y="14" width="52" height="34" rx="5"/><path d="M50 48v18"/><rect x="36" y="66" width="28" height="10" rx="3"/><path d="M8 96q14-10 28 0t28 0t28 0t28 0" stroke-width="2.4"/><path d="M8 108q14-10 28 0t28 0t28 0t28 0" stroke-width="1.8" opacity=".55"/><path d="M100 26l8 14h-16z" stroke-width="2"/>`,
    bypass:`<rect x="44" y="12" width="38" height="96" rx="8"/><rect x="92" y="12" width="22" height="96" rx="4"/><path d="M92 34h22M92 54h22M92 74h22M92 94h22" stroke-width="1.4" opacity=".45"/><path d="M44 58h-12M114 58h12"/><rect x="50" y="54" width="26" height="12" rx="6" fill="currentColor" stroke="none"/>`,
    conductive:`<rect x="38" y="16" width="84" height="92" rx="6"/><line x1="66" y1="4" x2="66" y2="80"/><line x1="80" y1="4" x2="80" y2="62"/><line x1="94" y1="4" x2="94" y2="44"/><path d="M44 90h72" stroke-dasharray="3 5" opacity=".6"/>`,
    rope:`<rect x="58" y="4" width="44" height="22" rx="5"/><path d="M80 26v66" stroke-dasharray="6 4"/><ellipse cx="80" cy="98" rx="9" ry="11" fill="currentColor" fill-opacity=".2"/><ellipse cx="80" cy="98" rx="9" ry="11"/><path d="M26 26v82h108V26" stroke-width="1.8" opacity=".45"/>`,
    floattx:`<rect x="66" y="4" width="28" height="22" rx="4"/><line x1="80" y1="26" x2="80" y2="106"/><path d="M52 106h56" stroke-dasharray="2 7" opacity=".5"/><ellipse cx="80" cy="70" rx="24" ry="14" fill="currentColor" fill-opacity=".14"/><ellipse cx="80" cy="70" rx="24" ry="14"/>`,
    pressure:`<circle cx="80" cy="52" r="34"/><circle cx="80" cy="52" r="26" stroke-width="1.4" opacity=".5"/><line x1="80" y1="52" x2="100" y2="34" stroke-width="3"/><circle cx="80" cy="52" r="4" fill="currentColor" stroke="none"/><rect x="72" y="86" width="16" height="20" rx="3"/><path d="M66 106h28"/>`,
    diffpressure:`<circle cx="56" cy="48" r="24"/><circle cx="110" cy="48" r="24"/><line x1="56" y1="48" x2="70" y2="34" stroke-width="2.4"/><line x1="110" y1="48" x2="98" y2="36" stroke-width="2.4"/><path d="M56 72v14h54V72" /><rect x="74" y="86" width="16" height="20" rx="3"/>`,
    exproof:`<circle cx="80" cy="52" r="32"/><path d="M80 34l-8 18h16l-8 18" stroke-width="2.6"/><path d="M28 20l10 10M132 20l-10 10M28 84l10-10M132 84l-10-10" stroke-width="2"/><rect x="72" y="84" width="16" height="22" rx="3"/>`,
    smart:`<circle cx="80" cy="50" r="32"/><rect x="60" y="38" width="40" height="22" rx="4" fill="currentColor" fill-opacity=".16"/><rect x="60" y="38" width="40" height="22" rx="4"/><path d="M66 48h8M78 44h4M86 48h8" stroke-width="1.6"/><rect x="72" y="82" width="16" height="24" rx="3"/>`,
    gauge:`<rect x="42" y="16" width="76" height="52" rx="6"/><rect x="52" y="26" width="56" height="24" rx="3" fill="currentColor" fill-opacity=".16"/><rect x="52" y="26" width="56" height="24" rx="3"/><path d="M60 38h10M76 34h6M88 38h10" stroke-width="1.6"/><rect x="72" y="68" width="16" height="20" rx="3"/><path d="M64 88h32"/>`,
    pswitch:`<circle cx="80" cy="48" r="30"/><line x1="80" y1="48" x2="98" y2="32" stroke-width="2.6"/><path d="M110 40h16l-8 12z" fill="currentColor" stroke="none" opacity=".5"/><rect x="72" y="78" width="16" height="20" rx="3"/><path d="M64 98h32"/>`,
    manometer:`<circle cx="80" cy="50" r="34"/><circle cx="80" cy="50" r="27" stroke-width="1.2" opacity=".45"/><g stroke-width="1.6"><path d="M80 20v6M110 50h-6M80 80v-6M50 50h6M59 29l4 4M101 29l-4 4"/></g><line x1="80" y1="50" x2="96" y2="32" stroke-width="3"/><rect x="73" y="84" width="14" height="20" rx="3"/>`,
    temp:`<rect x="66" y="6" width="28" height="72" rx="14"/><circle cx="80" cy="92" r="16"/><rect x="74" y="20" width="12" height="62" rx="6" fill="currentColor" stroke="none" opacity=".3"/><path d="M100 24h14M100 40h14M100 56h14" stroke-width="1.6" opacity=".6"/>`,
    thermocouple:`<rect x="56" y="6" width="48" height="26" rx="5"/><line x1="80" y1="32" x2="80" y2="104"/><path d="M72 44h16M72 60h16M72 76h16" stroke-width="1.6" opacity=".55"/><circle cx="80" cy="104" r="4" fill="currentColor" stroke="none"/>`,
    rtd:`<rect x="58" y="6" width="44" height="24" rx="5"/><line x1="80" y1="30" x2="80" y2="100"/><path d="M68 48q12-8 24 0t-24 12t24 0" stroke-width="1.8" opacity=".7"/><circle cx="80" cy="102" r="4" fill="currentColor" stroke="none"/>`,
    humidity:`<rect x="40" y="14" width="80" height="56" rx="6"/><rect x="50" y="24" width="30" height="20" rx="3" fill="currentColor" fill-opacity=".16"/><rect x="50" y="24" width="30" height="20" rx="3"/><path d="M96 24v20M88 34h16" stroke-width="1.6"/><path d="M80 78c8 10 12 14 12 20a12 12 0 01-24 0c0-6 4-10 12-20z"/>`,
    panel:`<rect x="26" y="24" width="108" height="72" rx="5"/><rect x="36" y="34" width="88" height="26" rx="3" fill="currentColor" fill-opacity=".16"/><rect x="36" y="34" width="88" height="26" rx="3"/><path d="M46 47h14M66 43h8M80 47h14M100 43h8" stroke-width="1.8"/><g fill="currentColor" stroke="none"><circle cx="46" cy="78" r="4"/><circle cx="62" cy="78" r="4"/><circle cx="78" cy="78" r="4"/></g>`,
    controller:`<rect x="26" y="20" width="108" height="80" rx="5"/><rect x="36" y="30" width="88" height="22" rx="3" fill="currentColor" fill-opacity=".16"/><rect x="36" y="30" width="88" height="22" rx="3"/><path d="M36 70h88" stroke-width="1.4" opacity=".5"/><g fill="currentColor" stroke="none"><rect x="40" y="80" width="16" height="8" rx="2"/><rect x="62" y="80" width="16" height="8" rx="2"/><rect x="84" y="80" width="16" height="8" rx="2"/></g>`,
    converter:`<rect x="44" y="18" width="72" height="84" rx="5"/><path d="M20 44h24M20 76h24M116 44h24M116 76h24" stroke-width="2"/><path d="M60 50h40M60 70h40" stroke-width="1.6" opacity=".6"/><path d="M70 56l10 8 10-8" stroke-width="2"/>`,
    valve:`<path d="M20 60h30M110 60h30" stroke-width="3"/><path d="M50 40l60 40V40l-60 40z"/><line x1="80" y1="60" x2="80" y2="24"/><rect x="60" y="12" width="40" height="12" rx="4"/>`,
    actuator:`<rect x="48" y="10" width="64" height="44" rx="6"/><line x1="80" y1="54" x2="80" y2="72"/><path d="M20 84h30M110 84h30" stroke-width="3"/><path d="M50 68l60 32V68l-60 32z"/><path d="M62 22h36M62 34h24" stroke-width="1.8" opacity=".6"/>`,
    solenoid:`<rect x="56" y="8" width="48" height="40" rx="5"/><path d="M64 16h32M64 26h32M64 36h32" stroke-width="1.8" opacity=".65"/><line x1="80" y1="48" x2="80" y2="66"/><path d="M22 82h34M104 82h34" stroke-width="3"/><rect x="56" y="66" width="48" height="32" rx="4"/>`,
    handheld:`<rect x="52" y="10" width="56" height="90" rx="8"/><rect x="62" y="22" width="36" height="26" rx="3" fill="currentColor" fill-opacity=".16"/><rect x="62" y="22" width="36" height="26" rx="3"/><g fill="currentColor" stroke="none"><circle cx="70" cy="62" r="4"/><circle cx="86" cy="62" r="4"/><circle cx="70" cy="78" r="4"/><circle cx="86" cy="78" r="4"/></g>`,
    laser:`<rect x="30" y="34" width="52" height="34" rx="5"/><path d="M52 68v28h-16"/><path d="M82 46h44M82 56h34M82 66h44" stroke-width="1.8" stroke-dasharray="4 3"/><circle cx="132" cy="56" r="5" fill="currentColor" stroke="none" opacity=".6"/>`,
    anemo:`<circle cx="80" cy="46" r="5" fill="currentColor" stroke="none"/><path d="M80 46l-26-16M80 46l30-10M80 46l-4 30" stroke-width="2.4"/><ellipse cx="52" cy="28" rx="9" ry="6" transform="rotate(-30 52 28)"/><ellipse cx="112" cy="34" rx="9" ry="6" transform="rotate(20 112 34)"/><ellipse cx="75" cy="78" rx="6" ry="9"/><line x1="80" y1="88" x2="80" y2="108"/>`,
    sound:`<rect x="52" y="14" width="56" height="86" rx="8"/><rect x="62" y="26" width="36" height="22" rx="3" fill="currentColor" fill-opacity=".16"/><rect x="62" y="26" width="36" height="22" rx="3"/><path d="M64 68q16-6 32 0M64 80q16-6 32 0" stroke-width="1.8" opacity=".65"/>`,
    gasdetect:`<rect x="50" y="16" width="60" height="88" rx="8"/><rect x="60" y="28" width="40" height="24" rx="3" fill="currentColor" fill-opacity=".16"/><rect x="60" y="28" width="40" height="24" rx="3"/><g fill="currentColor" stroke="none" opacity=".45"><circle cx="70" cy="70" r="3"/><circle cx="84" cy="76" r="3.6"/><circle cx="96" cy="68" r="3"/></g><path d="M74 92h12" stroke-width="2"/>`,
    analytic:`<path d="M60 12h40v26l18 54a8 8 0 01-8 10H50a8 8 0 01-8-10l18-54z"/><path d="M60 12h40" stroke-width="2.4"/><path d="M52 78h56" stroke-dasharray="3 4" opacity=".6"/><rect x="54" y="82" width="52" height="18" rx="3" fill="currentColor" fill-opacity=".2" stroke="none"/>`,
    gps:`<path d="M80 8a30 30 0 00-30 30c0 22 30 60 30 60s30-38 30-60A30 30 0 0080 8z"/><circle cx="80" cy="38" r="11"/><path d="M24 104h112" stroke-dasharray="4 4" opacity=".55"/>`,
    logger:`<rect x="26" y="26" width="108" height="72" rx="5"/><rect x="36" y="36" width="88" height="34" rx="3" fill="currentColor" fill-opacity=".14"/><rect x="36" y="36" width="88" height="34" rx="3"/><path d="M42 60l14-12 12 8 14-16 12 10 14-8" stroke-width="2"/><g fill="currentColor" stroke="none"><rect x="40" y="80" width="20" height="8" rx="2"/><rect x="66" y="80" width="20" height="8" rx="2"/></g>`
  };
  const glyph = k => `<div class="gl"><svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${G[k]||G.flow}</svg></div>`;

  /* ---- working principle copy per measuring technology ---- */
  const WP = {
    flow:["Bobinler boru kesitinde manyetik alan oluşturur.","İletken sıvı alan içinden geçerken <b>gerilim indüklenir</b>.","Elektrotlar bu gerilimi okur; hızla doğru orantılıdır.","Transmitter değeri hacimsel debiye çevirir."],
    turbine:["Akış, hat içindeki türbin çarkını döndürür.","Sensör kanat geçişlerini <b>darbe</b> olarak sayar.","Darbe frekansı akış hızıyla orantılıdır.","Toplam ve anlık debi hesaplanır."],
    rota:["Sıvı veya gaz konik tüp içinde yukarı akar.","Şamandıra, akış kuvveti ile <b>dengede</b> asılı kalır.","Denge yüksekliği debiyle orantılıdır.","Değer skaladan doğrudan okunur."],
    vortex:["Akış yolundaki engel arkasında girdaplar oluşur.","Girdap kopma frekansı <b>hızla orantılıdır</b>.","Piezo sensör basınç salınımını algılar.","Buhar, gaz ve sıvıda debi hesaplanır."],
    ultra:["Karşılıklı iki prob ultrasonik sinyal gönderir.","Akış yönündeki sinyal daha <b>hızlı</b> ulaşır.","Geçiş süresi farkı ölçülür.","Fark, akış hızına çevrilir."],
    channel:["Açık kanalda savak veya kanal daraltılır.","Sensör su <b>seviyesini</b> temassız ölçer.","Seviye–debi bağıntısı uygulanır.","Anlık ve toplam debi elde edilir."],
    metaltube:["Şamandıra metal tüp içinde akışla yükselir.","Konumu <b>manyetik kuplajla</b> dışa aktarılır.","Gösterge iğnesi bu konumu takip eder.","Opak ve yüksek basınçlı hatlarda okunur."],
    ovalgear:["Sıvı, iki oval dişlinin arasını doldurur.","Her dönüş <b>sabit hacim</b> taşır.","Dönüş sayısı sensörle sayılır.","Viskoz sıvılarda yüksek doğruluk sağlanır."],
    helical:["Birbirine geçen helisel rotorlar döner.","Her dönüşte <b>hacim</b> transfer edilir.","Dönüş darbeleri sayılır.","Yüksek viskoziteli ürünlerde ölçüm yapılır."],
    thermal:["Isıtılan prob akış içine yerleştirilir.","Gaz geçtikçe prob <b>soğur</b>.","Soğuma hızı kütlesel debiye bağlıdır.","Basınç/sıcaklık düzeltmesi gerekmez."],
    coriolis:["Ölçüm tüpleri kontrollü şekilde titreştirilir.","Akış, tüplerde <b>faz kayması</b> oluşturur.","Kayma miktarı kütlesel debiyle orantılıdır.","Yoğunluk ve sıcaklık da ölçülür."],
    switchflow:["Akış yolundaki pedal veya prob konum değiştirir.","Belirlenen debide <b>kontak</b> konum değiştirir.","Röle çıkışı panele iletilir.","Pompa koruması ve alarm sağlanır."],
    sight:["Akış, şeffaf gözetleme camından geçer.","Operatör akışı <b>gözle</b> doğrular.","Pervane veya bilye hareketi yönü gösterir.","Hatta akış olup olmadığı anlaşılır."],
    level:["Sensör tankın üstüne monte edilir.","Sıvı yüzeyine <b>mesafe</b> ölçülür.","Tank yüksekliğinden seviye hesaplanır.","4–20 mA veya dijital çıkış verilir."],
    radar:["Anten yüksek frekanslı radar dalgası gönderir.","Dalga sıvı yüzeyinden <b>yansır</b>.","Gidiş-dönüş süresinden mesafe bulunur.","Toz, buhar ve köpükten etkilenmez."],
    hydro:["Prob tankın dibine daldırılır.","Sıvı sütunu prob üzerinde <b>basınç</b> oluşturur.","Basınç, yoğunluk ile seviyeye çevrilir.","Sürekli seviye sinyali üretilir."],
    capacitive:["Prob ve tank duvarı bir kondansatör oluşturur.","Seviye değiştikçe <b>kapasitans</b> değişir.","Elektronik bu değişimi ölçer.","Katı ve sıvılarda seviye algılanır."],
    motor:["Küçük motor pedalı sürekli döndürür.","Malzeme pedalı engelleyince dönüş <b>durur</b>.","Motor torku mikro switch'i tetikler.","Dolu/boş sinyali röle ile verilir."],
    vibrating:["Diyapazon çatal kendi frekansında titreşir.","Malzeme çatalı sarınca frekans <b>düşer</b>.","Elektronik bu değişimi algılar.","Nokta seviye alarmı üretilir."],
    sideswitch:["Şamandıra tank duvarına yandan monte edilir.","Seviye değişince şamandıra <b>döner</b>.","İçindeki mıknatıs reed kontak tetikler.","NO/NC röle çıkışı alınır."],
    diaphragm:["Esnek diyafram malzemeye temas eder.","Malzeme baskısı diyaframı <b>iter</b>.","Hareket mikro switch'i çalıştırır.","Toz ve granülde dolu sinyali verilir."],
    flood:["Sensör zemin veya bacaya yerleştirilir.","Su temas edince devre <b>tamamlanır</b>.","Kontrol ünitesi alarm verir.","Su basmasına karşı erken uyarı sağlanır."],
    bypass:["Yan borudaki şamandıra sıvıyla yükselir.","İçindeki mıknatıs bayraklı skalayı <b>çevirir</b>.","Renk değişimi seviyeyi gösterir.","Enerji gerekmez, bakım istemez."],
    conductive:["Farklı boylarda elektrotlar tanka iner.","Sıvı elektroda değince devre <b>iletir</b>.","Röle ünitesi iletimi algılar.","Dolu, boş ve ara seviye kontrol edilir."],
    rope:["Halatlı prob yüksek silolara sarkıtılır.","Malzeme proba yaklaşınca <b>kapasitans</b> değişir.","Elektronik eşiği geçtiğinde tetiklenir.","Derin silolarda nokta seviye alınır."],
    floattx:["Şamandıra kılavuz boru üzerinde yüzer.","Konum <b>manyetik olarak</b> aktarılır.","Direnç zinciri konumu sinyale çevirir.","Sürekli 4–20 mA çıkış verilir."],
    pressure:["Proses basıncı ölçüm hücresine etki eder.","Sensör elemanı mikron seviyede <b>esner</b>.","Esneme elektrik sinyaline çevrilir.","4–20 mA olarak iletilir."],
    diffpressure:["İki ayrı noktanın basıncı alınır.","Aradaki <b>fark</b> ölçüm hücresinde oluşur.","Fark sinyale dönüştürülür.","Filtre tıkanıklığı ve seviye izlenir."],
    exproof:["Ölçüm hücresi alevi <b>geçirmez</b> gövdededir.","Proses basıncı sensöre iletilir.","Sinyal güvenli bölgeye taşınır.","Patlayıcı ortamda güvenli ölçüm sağlanır."],
    smart:["Sensör sinyali dijital olarak işlenir.","Sıcaklık ve doğrusallık <b>kompanze</b> edilir.","Ekrandan yerinde parametre girilir.","HART/Modbus ile sisteme bağlanır."],
    gauge:["Basınç sensörü ölçümü dijitale çevirir.","Değer <b>ekrandan</b> doğrudan okunur.","Min/max değerler hafızada tutulur.","Kalibrasyon menüden yapılır."],
    pswitch:["Ayarlanan basınç değerine ulaşılır.","Mekanizma <b>kontak</b> konumunu değiştirir.","Röle sinyali panele iletilir.","Pompa ve kompresör korunur."],
    manometer:["Bourdon tüpü basınçla <b>açılır</b>.","Hareket dişli mekanizmaya aktarılır.","İğne skala üzerinde sapar.","Enerjisiz, doğrudan okuma sağlanır."],
    temp:["Sensör ucu prosese daldırılır.","Sıcaklıkla <b>direnç veya gerilim</b> değişir.","Transmitter bunu ölçer.","4–20 mA sinyali üretilir."],
    thermocouple:["İki farklı metal uçta birleştirilir.","Sıcaklık farkı küçük bir <b>gerilim</b> üretir.","Gerilim sıcaklığa çevrilir.","Yüksek sıcaklıklarda ölçüm yapılır."],
    rtd:["Platin elemanın direnci sıcaklıkla değişir.","0 °C'de <b>100 Ω</b> referans alınır.","Direnç hassas şekilde ölçülür.","Yüksek doğruluklu sıcaklık elde edilir."],
    humidity:["Kapasitif eleman nemi emer.","Nemle birlikte <b>kapasitans</b> değişir.","Elektronik bağıl nemi hesaplar.","Sıcaklıkla birlikte raporlanır."],
    panel:["Sensör sinyali panel girişine bağlanır.","Cihaz sinyali <b>ölçekler</b> ve gösterir.","Alarm limitleri tanımlanır.","Röle ve seri çıkış verilir."],
    controller:["Proses değeri sürekli okunur.","Set değerle karşılaştırılıp <b>sapma</b> bulunur.","PID algoritması çıkışı hesaplar.","Vana veya ısıtıcı sürülür."],
    converter:["Giriş sinyali izole edilir.","Farklı formata <b>dönüştürülür</b>.","Gürültü ve toprak döngüsü engellenir.","Sistem güvenli şekilde beslenir."],
    valve:["Akışkan vana gövdesine girer.","Disk veya küre konumu <b>akışı kısar</b>.","Konum aktüatörle ayarlanır.","Debi veya basınç kontrol edilir."],
    actuator:["Kontrol sinyali aktüatöre ulaşır.","Motor veya piston mili <b>hareket ettirir</b>.","Vana konumu değiştirilir.","Konum geri bildirimi gönderilir."],
    solenoid:["Bobine enerji verilir.","Oluşan manyetik alan pistonu <b>çeker</b>.","Geçiş açılır veya kapanır.","Enerji kesilince yay geri getirir."],
    handheld:["Cihaz ölçüm noktasına götürülür.","Prob ile <b>anında</b> ölçüm alınır.","Değer ekranda görüntülenir.","Kayıtlar hafızaya alınır."],
    laser:["Cihaz hedefe lazer ışını gönderir.","Yüzeyden <b>yansıyan</b> ışık ölçülür.","Geçiş süresi mesafeye çevrilir.","Temassız ölçüm yapılır."],
    anemo:["Kepçeler veya prob hava akımına girer.","Akım hızı <b>dönüşe</b> veya soğumaya çevrilir.","Elektronik hızı hesaplar.","Hava debisi ve hızı raporlanır."],
    sound:["Mikrofon ortam sesini alır.","Sinyal <b>desibel</b> olarak işlenir.","Ağırlıklı filtreler uygulanır.","Gürültü seviyesi raporlanır."],
    gasdetect:["Sensör hücresi ortam havasını örnekler.","Hedef gaz <b>tepkime</b> oluşturur.","Konsantrasyon hesaplanır.","Eşik aşılınca alarm verilir."],
    analytic:["Numune ölçüm hücresinden geçer.","Elektrot veya optik sensör <b>değeri okur</b>.","Sıcaklık kompanzasyonu uygulanır.","pH, iletkenlik veya bulanıklık verilir."],
    gps:["Alıcı uydu sinyallerini yakalar.","Sinyal gecikmelerinden <b>konum</b> çözülür.","Veri kaydedilir veya iletilir.","Araç ve saha takibi sağlanır."],
    logger:["Cihaz sensör verisini periyodik okur.","Veriler zaman damgasıyla <b>kaydedilir</b>.","Hafıza veya buluta aktarılır.","Rapor ve grafik olarak incelenir."]
  };
  function principle(p){
    const steps = (WPX && WPX[p.glyph]) || WP[p.glyph];
    if(!steps) return '';
    const list = steps;
    return `<div class="wp"><div class="wp-h"><span>${esc(UI.principle)}</span><em>${esc(p.code.split(' /')[0])}</em></div>
      <div class="wp-b">
        <div class="wp-art"><div class="bp blueprint"></div><svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${G[p.glyph]||G.flow}</svg></div>
        <ol class="wp-steps">${list.map((s,i)=>`<li><i>${i+1}</i><span>${s}</span></li>`).join('')}</ol>
      </div></div>`;
  }
  /* rough page-fill estimate so nothing overflows and nothing sits empty */
  function weight(p){
    return (p.specs?p.specs.length:0)*1
      + (p.variants?p.variants.length:0)*1.6
      + (p.notes?p.notes.length:0)*1.1
      + Math.ceil((p.desc||'').length/180)*1.4
      + (p.vimgs?Math.ceil(p.vimgs.length/4)*4:0)
      + ((p.uses||p.sectors)?2.4:0);
  }

  /* ---- page helpers ---- */
  let pageNo = 0;
  const pages = [];
  function head(secTitle){
    return `<div class="ptop"><div class="plogo">${LOGO}<div><b>Net Flow</b><small>${esc(UI.tagline)}</small></div></div>
      <div class="psec">${esc(secTitle||'')}</div></div>`;
  }
  const WA_TXT = encodeURIComponent('Merhaba, Net Flow ürünleri hakkında bilgi almak istiyorum.');
  const WA = 'https://wa.me/905413737953?text=' + WA_TXT;
  const waLink = (label, cls) => `<a class="${cls||''}" href="${WA}" target="_blank" rel="noopener">${esc(label)}</a>`;
  function foot(){
    return `<div class="pfoot"><span>${esc(C.brand.domain)} · ${waLink(C.brand.phone,'wa-a')}</span><span class="pfoot-vfa">${esc(UI.exportBrand)}</span><span class="pno"></span></div>`;
  }
  function add(html){ pages.push(html); }
  const slug = c => 'p-'+String(c).split(' /')[0].replace(/[^A-Za-z0-9]+/g,'-').toLowerCase();

  /* ---- 1. cover ---- */
  add(`<section class="page cover" data-screen-label="${esc(UI.coverLabel)}">
    <div class="bp blueprint"></div><div class="glow"></div>
    <div class="cov-in">
      <div class="cov-logo">${LOGO_FULL}</div>
      <div class="cov-mid">
        <span class="cov-eyebrow">${esc(UI.coverEyebrow)}</span>
        <h1>${esc(UI.coverH1)}<em>${esc(UI.coverH1em)}</em></h1>
        <p class="lede">${esc(UI.coverLede)}</p>
        <div class="cov-cats">
          ${C.sections.map(s=>`<div>${esc(s.title)}</div>`).join('')}
        </div>
      </div>
      <div class="cov-bot">
        <div class="cov-badges">
          <span class="bdg gold">${esc(UI.madeIn)}</span>
          <span class="bdg green">TÜRKAK AB-0354-K</span>
          <span class="bdg">ISO/IEC 17025</span>
          <span class="bdg">ISO 9001</span>
          <span class="bdg">CE</span>
        </div>
        <div class="cov-contact"><b>${esc(C.brand.domain)}</b><br>${waLink(C.brand.phone,'wa-a')}<br><a class="wa-a" href="mailto:${esc(C.brand.mail)}">${esc(C.brand.mail)}</a></div>
      </div>
      <div class="cov-vfa">${esc(UI.coverVfa)}</div>
    </div>
  </section>`);

  /* ---- 2. contents ---- */
  add(`<section class="page" data-screen-label="${esc(UI.contents)}">
    <div class="pad">
      ${head(UI.contents)}
      <h2 class="ab-head" style="font-size:19pt">${esc(UI.contents)}</h2>
      <div class="toc-grid">
        ${C.sections.map(s=>`<div class="toc-sec"><h3><span>${esc(s.kicker)}</span>${esc(s.title)}</h3>
          <ul>${s.products.map(p=>`<li><a href="#${slug(p.code)}"><b>${esc(p.name)}</b><i>${esc(p.code.split(' /')[0])}</i></a></li>`).join('')}</ul></div>`).join('')}
      </div>
      <div class="toc-hint">${esc(UI.jumpHint)}</div>
    </div>${foot()}
  </section>`);

  /* ---- 3. about ---- */
  add(`<section class="page" data-screen-label="${esc(UI.aboutLabel)}">
    <div class="pad">
      ${head(UI.corporate)}
      <h2 class="ab-head">${esc(UI.aboutTitle)}</h2>
      <div class="ab-body">${C.about.map(p=>`<p>${esc(p)}</p>`).join('')}</div>
      <div class="ab-stats">${C.aboutStats.map(s=>`<div><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join('')}</div>
      <div class="notes" style="margin-top:7mm">
        <div class="blk-h" style="margin-bottom:0;border:none;padding:0">${esc(UI.calibTitle)}</div>
        <p style="font-size:7.6pt;line-height:1.6;color:var(--ink-2);margin-top:2.5mm">${esc(UI.calibBody)}</p>
      </div>
    </div>${foot()}
  </section>`);

  /* ---- product blocks ---- */
  function figure(p){
    return `<div class="pr-fig">${p.img?`<img src="${esc(p.img)}" alt="${esc(p.name)}">`:`<div class="bp blueprint"></div>${glyph(p.glyph)}`}</div>`;
  }
  function badges(p){
    const t = p.code==='NT-VMF';
    return `<div class="pr-badges"><span class="pb turkey">${esc(UI.madeIn)}</span>${t?'<span class="pb cert">TÜRKAK · ISO 17025</span>':''}<span class="pb">ISO 9001</span><span class="pb blue">CE</span></div>`;
  }
  function specTable(p){
    return `<table class="spec-t"><tbody>${p.specs.map(s=>`<tr><td>${esc(s[0])}</td><td>${esc(s[1])}</td></tr>`).join('')}</tbody></table>`;
  }
  function infoRow(p){
    const u = p.uses?`<div class="info-b"><div class="blk-h">${esc(UI.uses)}</div><p>${esc(p.uses)}</p></div>`:'';
    const s = p.sectors?`<div class="info-b"><div class="blk-h">${esc(UI.sectorsLong)}</div><p>${esc(p.sectors)}</p></div>`:'';
    return (u||s)?`<div class="info-row">${u}${s}</div>`:'';
  }
  function vstrip(p){
    if(!p.vimgs||!p.vimgs.length) return '';
    return `<div class="vstrip"><div class="blk-h">${esc(UI.variantImgs)}</div><div class="vgrid">`+
      p.vimgs.map(v=>`<div class="vcard"><div class="vph"><img src="${esc(v[1])}" alt="${esc(v[0])}"></div><b>${esc(v[0])}</b></div>`).join('')+
      `</div></div>`;
  }
  function notes(p){
    if(!p.notes||!p.notes.length) return '';
    return `<div class="notes"><div class="blk-h" style="margin-bottom:0;border:none;padding:0">${esc(UI.notes)}</div>
      <ul>${p.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul></div>`;
  }
  function variants(p){
    if(!p.variants||!p.variants.length) return '';
    return `<div><div class="blk-h">${esc(UI.models)}</div><div class="var-list">${p.variants.map(v=>`<div class="var"><b>${esc(v[0])}</b><p>${esc(v[1])}</p></div>`).join('')}</div></div>`;
  }

  /* full page product */
  function fullProduct(p, sec){
    const hasVar = p.variants && p.variants.length;
    const body = hasVar
      ? `<div class="pr-body"><div><div class="blk-h">${esc(UI.specs)}</div>${specTable(p)}</div>${variants(p)}</div>`
      : `<div><div class="blk-h">${esc(UI.specs)}</div>${specTable(p)}</div>`;
    return `<section class="page" id="${slug(p.code)}" data-screen-label="${esc(p.name)}">
      <div class="pad">
        ${head(sec.title)}
        <div class="pr-head">
          <div class="pr-title"><div class="pr-code">${esc(p.code)}</div><h2>${esc(p.name)}</h2>${badges(p)}</div>
          ${figure(p)}
        </div>
        <p class="pr-desc">${esc(p.desc)}</p>
        ${body}
        <div class="pr-fill">${principle(p)}${vstrip(p)}${infoRow(p)}${notes(p)}</div>
      </div>${foot()}
    </section>`;
  }

  /* half page product (two per page) */
  function halfProduct(p){
    const hasVar = p.variants && p.variants.length;
    const body = hasVar
      ? `<div class="pr-body"><div><div class="blk-h">${esc(UI.specs)}</div>${specTable(p)}</div>${variants(p)}</div>`
      : `<div class="pr-body"><div><div class="blk-h">${esc(UI.specs)}</div>${specTable(p)}</div>
          <div>${p.uses?`<div class="blk-h">${esc(UI.uses)}</div><p style="font-size:7.4pt;line-height:1.6;color:var(--ink-2)">${esc(p.uses)}</p>`:''}
          ${p.sectors?`<div class="blk-h" style="margin-top:4mm">${esc(UI.sectors)}</div><p style="font-size:7.4pt;line-height:1.6;color:var(--ink-2)">${esc(p.sectors)}</p>`:''}</div></div>`;
    return `<div class="pr-half" id="${slug(p.code)}">
      <div class="pr-head">
        <div class="pr-title"><div class="pr-code">${esc(p.code)}</div><h2>${esc(p.name)}</h2>${badges(p)}</div>
        ${figure(p)}
      </div>
      <p class="pr-desc">${esc(p.desc)}</p>
      ${body}
      ${hasVar?infoRow(p):''}
    </div>`;
  }
  function pairPage(list, sec){
    return `<section class="page" data-screen-label="${esc(list.map(x=>x.name).join(' + '))}">
      <div class="pad">${head(sec.title)}${list.map(halfProduct).join('')}</div>${foot()}
    </section>`;
  }

  /* ---- section divider ---- */
  function divider(sec){
    return `<section class="page div-page" data-screen-label="${esc(sec.title)}">
      <div class="bp blueprint"></div><div class="glow"></div>
      <div class="div-in">
        <div class="div-kick">${esc(sec.kicker)}</div>
        <h2>${esc(sec.title)}</h2>
        <p>${esc(sec.sub)}</p>
        <div class="div-list">${sec.products.map(p=>`<a href="#${slug(p.code)}"><i>${esc(p.code.split(' /')[0])}</i>${esc(p.name)}</a>`).join('')}</div>
        <div class="div-hint">${esc(UI.jumpHint)}</div>
      </div>
      <div class="div-art"><svg viewBox="0 0 160 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${G[sec.glyph]||G.flow}</svg></div>
    </section>`;
  }

  /* ---- build sections ---- */
  C.sections.forEach(sec=>{
    add(divider(sec));
    // hero products get a full page; others are paired two-per-page
    const heroes = sec.products.filter(p=>p.hero);
    const rest = sec.products.filter(p=>!p.hero);
    heroes.forEach(p=>add(fullProduct(p,sec)));
    for(let i=0;i<rest.length;i+=2){
      const chunk = rest.slice(i,i+2);
      // pair only when both are light enough to share a page
      if(chunk.length===1){
        add(fullProduct(chunk[0],sec));
      } else if(weight(chunk[0])+weight(chunk[1]) > 26 || chunk.every(p=>(p.variants||[]).length>=4)){
        add(fullProduct(chunk[0],sec)); add(fullProduct(chunk[1],sec));
      } else {
        add(pairPage(chunk,sec));
      }
    }
  });

  /* ---- closing: automation ---- */
  add(`<section class="page" data-screen-label="${esc(UI.closingScreen)}">
    <div class="pad">
      ${head(UI.closingLabel)}
      <h2 class="ab-head">${esc(C.closing.title)}</h2>
      <div class="cl-body">
        ${C.closing.body.map(p=>`<p>${esc(p)}</p>`).join('')}
      </div>
      <div class="cl-items">${C.closing.items.map(i=>`<div class="cl-item"><b>${esc(i[0])}</b><p>${esc(i[1])}</p></div>`).join('')}</div>
      <div class="notes" style="margin-top:7mm">
        <div class="blk-h" style="margin-bottom:0;border:none;padding:0">${esc(UI.projectTitle)}</div>
        <p style="font-size:7.6pt;line-height:1.6;color:var(--ink-2);margin-top:2.5mm">${esc(UI.projectBody)}</p>
      </div>
    </div>${foot()}
  </section>`);

  /* ---- back cover ---- */
  add(`<section class="page back" data-screen-label="${esc(UI.backLabel)}">
    <div class="bp blueprint"></div><div class="glow"></div>
    <div class="back-in">
      <div class="cov-logo">${LOGO_FULL}</div>
      <h2>${UI.backH2}</h2>
      <p class="sub">${esc(UI.backSub)}</p>
      <div class="back-grid">
        <div class="back-col"><h5>${esc(UI.contact)}</h5><p><b>${waLink(C.brand.phone,'wa-a')}</b><br><a class="wa-a" href="mailto:${esc(C.brand.mail)}">${esc(C.brand.mail)}</a><br><a class="wa-a" href="https://${esc(C.brand.domain)}" target="_blank" rel="noopener">${esc(C.brand.domain)}</a></p>
          <p class="wa-cta">${waLink(UI.waCta,'wa-btn')}</p></div>
        <div class="back-col"><h5>${esc(UI.address)}</h5><p>${esc(C.brand.addr)}</p></div>
      </div>
      <div class="back-bot">
        <span>${esc(UI.rights)}</span>
        <div class="cov-badges">
          <span class="bdg gold">${esc(UI.madeIn)}</span><span class="bdg green">TÜRKAK AB-0354-K</span><span class="bdg">ISO 9001</span>
        </div>
      </div>
    </div>
  </section>`);

  doc.innerHTML = pages.join('');
  // ensure doc-page detects the injected pages and switches to paginated mode
  function nfPaginate(tries){
    if(typeof doc._measure === 'function') doc._measure();
    var sh = doc.shadowRoot && doc.shadowRoot.querySelector('.sheet');
    if(sh && sh.classList.contains('paginated')){
      // Paginated, but web fonts may not have swapped yet: fitting with fallback metrics
      // yields stale line counts, so always re-fit once fonts settle. fit() is idempotent.
      fit();
      if(document.fonts && document.fonts.ready){
        document.fonts.ready.then(function(){ requestAnimationFrame(function(){ refit(); }); });
      }
      return;
    }
    if(tries > 0) requestAnimationFrame(function(){ nfPaginate(tries-1); });
  }
  (customElements.whenDefined ? customElements.whenDefined('doc-page') : Promise.resolve())
    .then(function(){ nfPaginate(30); });
  addEventListener('load', function(){ if(!fitDone) nfPaginate(10); });

  /* ============================================================
     Measure-and-split: no .page may clip its content.
     Each content page's .pad blocks are re-flowed onto
     continuation pages until everything fits the A4 box.
     ============================================================ */
  function mm(v){ return v * (96/25.4); }

  const LIMIT = new WeakMap();          // page height is constant: measure once
  function limitOf(page){
    let v = LIMIT.get(page);
    if(v === undefined){ v = page.clientHeight - mm(15); LIMIT.set(page, v); }
    return v;
  }
  function contentBottom(pad){
    const kids = [...pad.children].filter(c=>getComputedStyle(c).position!=='absolute');
    if(!kids.length) return pad.offsetTop;
    const last = kids[kids.length-1];
    return last.offsetTop + last.offsetHeight;
  }
  function overflowing(page){ return gapOf(page) < -2; }
  function contPage(src){
    const sec = document.createElement('section');
    sec.className = 'page';
    sec.dataset.cont = '1';
    const suffix = ' ('+UI.contLabel.toLowerCase()+')';
    const base = (src.dataset.screenLabel||'').split(suffix)[0];
    sec.dataset.screenLabel = base + suffix;
    const top = src.querySelector('.ptop');
    sec.innerHTML = `<div class="pad">${top?top.outerHTML:''}<div class="cont-label">${esc(UI.contLabel)}</div></div>` + foot();
    return sec;
  }
  function movable(pad){
    const out = [];
    for(const c of pad.children){
      if(c.classList.contains('ptop') || c.classList.contains('cont-label')) continue;
      // .pr-fill is a layout wrapper: expose its blocks so a split can move just one
      if(c.classList.contains('pr-fill') || c.classList.contains('pr-body')) out.push(...c.children);
      else out.push(c);
    }
    return out;
  }

  const DENS = ['d-1','d-2','d-3','d-4'];
  const ROOMY = ['r-1','r-2'];
  const FILL_MIN = 0.60, FILL_MAX = 1.0, TARGET = 1e9;
  function clearDens(page){ DENS.concat(ROOMY).forEach(c=>page.classList.remove(c)); }
  function clamp(lo,v,hi){ return v<lo?lo:(v>hi?hi:v); }
  function setFill(page,k,tight){
    const s = page.style;
    s.setProperty('--fill',  k.toFixed(3));
    s.setProperty('--tfill', clamp(0.97,k,1.06).toFixed(3));           // body type: <10% spread
    s.setProperty('--gfill', clamp(tight?0.78:0.94,k,1.14).toFixed(3)); // photos compress more to reclaim a tail
  }
  function gapOf(page){
    const pad = page.querySelector('.pad');
    if(!pad) return 0;
    const padBottom = parseFloat(getComputedStyle(pad).paddingBottom) || 0;
    // reserve whichever is larger: the footer band or the pad's own bottom margin
    const floor = page.clientHeight - Math.max(mm(15), padBottom);
    return floor - contentBottom(pad);
  }
  /* Pick the largest scale that still fits the sheet. Every probe is undone,
     so a page that cannot reach the target keeps a sane scale, never a probe extreme. */
  function chooseFill(page, pre, allowGrow){
    let natural = pre;
    if(natural === undefined){ setFill(page, 1); natural = gapOf(page); }
    if(natural >= 0 && natural <= TARGET) return;          // already well filled
    if(natural > TARGET){
      // never inflate before merge(), and never in front of a continuation page:
      // the orphan needs that room to come back
      const nx = page.nextElementSibling;
      if(!allowGrow || (nx && nx.dataset.cont === '1')) return;
    }

    if(natural > TARGET){                                  // too empty: grow it
      setFill(page, FILL_MAX);
      if(gapOf(page) >= 0) return;                          // max scale fits: keep it (best available)
      let lo = 1, hi = FILL_MAX;                           // lo fits, hi overflows
      for(let i=0;i<10;i++){
        const mid=(lo+hi)/2; setFill(page, mid);
        if(gapOf(page) >= 0) lo = mid; else hi = mid;
      }
      setFill(page, lo);
      return;
    }

    setFill(page, FILL_MIN);
    if(gapOf(page) < 0){                                   // whitespace exhausted:
      setFill(page, FILL_MIN, true);                       // let graphics compress too
      return;
    }
    let lo = FILL_MIN, hi = 1;                             // lo fits, hi overflows
    for(let i=0;i<10;i++){
      const mid=(lo+hi)/2; setFill(page, mid);
      if(gapOf(page) >= 0) lo = mid; else hi = mid;
    }
    setFill(page, lo);
    if(gapOf(page) < 0) setFill(page, FILL_MIN, true);
  }
  function densify(allowGrow){
    // Phase 1: pure writes (no reads) so the engine batches one relayout.
    const pages = [...doc.querySelectorAll('.page')].filter(p=>
      !p.classList.contains('cover') && !p.classList.contains('div-page') &&
      !p.classList.contains('back') && p.querySelector('.pad'));
    pages.forEach(p=>{ clearDens(p); setFill(p, 1); });
    // Phase 2: one read pass for every page's natural gap.
    const natural = pages.map(gapOf);
    // Phase 3: only pages that actually need rescaling get probed.
    pages.forEach((p,i)=>{
      const n = natural[i];
      if(n >= 0 && n <= TARGET) return;
      chooseFill(p, n, allowGrow);
    });
  }

  function reflow(){
    let guard = 0;
    let list = [...doc.querySelectorAll('.page')];
    for(let i=0;i<list.length && guard<400;i++){
      const page = list[i];
      if(page.classList.contains('cover')||page.classList.contains('div-page')||page.classList.contains('back')) continue;
      const pad = page.querySelector('.pad');
      if(!pad) continue;
      while(overflowing(page) && guard++<400){
        const kids = movable(pad);
        if(kids.length <= 1) break;                  // can't split further
        const last = kids[kids.length-1];
        let next = page.nextElementSibling;
        if(!next || next.dataset.cont !== '1'){
          next = contPage(page);
          page.after(next);
          list = [...doc.querySelectorAll('.page')];
        }
        const nPad = next.querySelector('.pad');
        const anchor = movable(nPad)[0] || null;
        nPad.insertBefore(last, anchor);
      }
    }
  }


  /* outerHeight: offsetHeight EXCLUDES margin, and every moved block carries one */
  function outerH(el){
    const cs = getComputedStyle(el);
    return el.offsetHeight + (parseFloat(cs.marginTop)||0) + (parseFloat(cs.marginBottom)||0);
  }
  /* Balance any continuation sheet left under ~35% by moving the parent's LAST
     blocks down onto it, so neither sheet reads as blank. */
  function balanceSplit(){
    let guard = 0;
    for(const page of [...doc.querySelectorAll('.page[data-cont="1"]')]){
      const pad = page.querySelector('.pad');
      const prev = page.previousElementSibling;
      if(!pad || !prev || !prev.classList.contains('page')) continue;
      const pPad = prev.querySelector('.pad');
      if(!pPad) continue;
      const used  = () => movable(pad).reduce((s,b)=>s+outerH(b),0) / page.clientHeight;
      const pUsed = () => movable(pPad).reduce((s,b)=>s+outerH(b),0) / prev.clientHeight;
      if(used() >= 0.35) continue;

      while(used() < 0.45 && guard++ < 200){
        const src = movable(pPad);
        if(src.length <= 2) break;                       // parent must keep substance
        // Walk candidates from the end backwards and take the LARGEST block whose
        // move still leaves the parent readable. Taking only the last block meant a
        // tall trailing column vetoed the whole pair, even when a shorter sibling
        // beside it would have balanced both sheets.
        let last = null;
        for(let ci = src.length - 1; ci >= 0; ci--){
          const cand = src[ci];
          if(pUsed() - outerH(cand)/prev.clientHeight >= 0.45){ last = cand; break; }
        }
        if(!last) break;                                 // nothing can move safely
        const anchor = movable(pad)[0] || null;
        pad.insertBefore(last, anchor);
        setFill(page, 1); chooseFill(page, undefined, false);
        if(overflowing(page)) setFill(page, FILL_MIN, true);
        if(overflowing(page)){                            // child can't take it: undo
          pPad.appendChild(last);
          setFill(page, 1); chooseFill(page, undefined, false);
          break;
        }
        // parent relaxes now that it carries less
        setFill(prev, 1); chooseFill(prev, undefined, false);
        if(overflowing(prev)) setFill(prev, FILL_MIN, true);
      }
    }
  }

  function renumber(){
    let n = 0;
    doc.querySelectorAll('.page').forEach(p=>{
      const el = p.querySelector('.pno');
      if(!el) return;               // cover / dividers / back have no footer
      n++; el.textContent = String(n).padStart(2,'0');
    });
    // dividers and cover still consume a page number in the printed doc,
    // so count them too for an honest running number
    let run = 0;
    doc.querySelectorAll('.page').forEach(p=>{
      run++;
      const el = p.querySelector('.pno');
      if(el) el.textContent = String(run).padStart(2,'0');
    });
  }

  /* Pull continuation blocks back into their parent whenever the chosen scale
     makes them fit, so a split is only ever a last resort. */
  /* Pull continuation blocks back until nothing more can move (fixed point).
     Re-queries each round, and pulls into the previous sheet even when that sheet
     is itself a continuation page, so chained splits collapse into one. */
  function merge(){
    let guard = 0, moved = true;
    while(moved && guard < 600){
      moved = false;
      const conts = [...doc.querySelectorAll('.page[data-cont="1"]')];
      for(const page of conts){
        const prev = page.previousElementSibling;
        if(!prev) continue;
        const pPad = prev.querySelector('.pad');
        const cPad = page.querySelector('.pad');
        if(!pPad || !cPad) continue;
        let blocks = movable(cPad);
        for(let bi = 0; bi < blocks.length && guard++ < 600; ){
          const b = blocks[bi];
          const anchor = b.nextSibling, home = b.parentNode;
          pPad.appendChild(b);
          setFill(prev, 1); chooseFill(prev, undefined, false);
          if(overflowing(prev)) setFill(prev, FILL_MIN, true);  // graphics compress too
          if(overflowing(prev)){
            home.insertBefore(b, anchor);              // exactly where it was
            setFill(prev, 1); chooseFill(prev, gapOf(prev), false);
            bi++;                                      // try the next, smaller block
          } else {
            moved = true;
            blocks = movable(cPad); bi = 0;
          }
        }
        if(!movable(cPad).length){ page.remove(); moved = true; }
        else { setFill(page, 1); chooseFill(page, gapOf(page), false); }
      }
    }
  }

  /* Continuation sheets left under ~35% full are folded into the NEXT sheet. */
  function absorbSparse(){
    let guard = 0;
    for(const page of [...doc.querySelectorAll('.page[data-cont="1"]')]){
      const pad = page.querySelector('.pad');
      const next = page.nextElementSibling;
      if(!pad || !next || !next.classList.contains('page')) continue;
      const blocked = next.classList.contains('cover') || next.classList.contains('div-page') || next.classList.contains('back');
      const nPad = blocked ? null : next.querySelector('.pad');
      const blocks = movable(pad);
      if(!blocks.length) continue;
      const filled = blocks.reduce((s,b)=>s+b.offsetHeight,0) / page.clientHeight;
      if(filled >= 0.35) continue;                       // sheet earns its place

      // fold backward into the parent when the next sheet can't take it
      const prev = page.previousElementSibling;
      if(prev && prev.classList.contains('page') && prev.querySelector('.pad')){
        const pPad = prev.querySelector('.pad');
        const back = [];
        for(const b of blocks){ if(guard++ > 300) break; pPad.appendChild(b); back.push(b); }
        setFill(prev, 1); chooseFill(prev, undefined, false);
        if(overflowing(prev)) setFill(prev, FILL_MIN, true);
        if(!overflowing(prev)){ page.remove(); continue; }
        for(const b of back) pad.appendChild(b);
        setFill(prev, 1); chooseFill(prev, gapOf(prev), false);
      }
      // No forward fold: moving a tail onto the NEXT product's sheet would place it
      // above that product's heading. balanceSplit() handles what stays behind.
    }
  }

  let fitDone = false;
  function fit(){
    if(fitDone) return;
    fitDone = true;
    densify(false); reflow(); merge();
    // settle: shrink only, so merge() always has room to pull orphans back
    for(let pass=0; pass<8 && [...doc.querySelectorAll('.page')].some(overflowing); pass++){
      densify(false); reflow(); merge();
    }
    absorbSparse();           // no sheet may be owned by a stranded tail block
    balanceSplit();           // and no sheet may read as blank
    densify(false);            // growth pass runs last, once pagination is stable
    // growth must never leave a page overflowing
    for(const p of doc.querySelectorAll('.page')){
      if(overflowing(p)){
        setFill(p, 1); chooseFill(p, undefined, false);
        if(overflowing(p)) setFill(p, FILL_MIN, true);
      }
    }
    for(const p of doc.querySelectorAll('.page')){
      if(overflowing(p)){
        setFill(p, 1); chooseFill(p, undefined, false);
        if(overflowing(p)) setFill(p, FILL_MIN, true);
      }
    }
    // anything that still cannot fit at FILL_MIN has to be split
    if([...doc.querySelectorAll('.page')].some(overflowing)){
      reflow(); merge(); densify(false); densify(false);
      for(const p of doc.querySelectorAll('.page')){
        if(overflowing(p)){
        setFill(p, 1); chooseFill(p, undefined, false);
        if(overflowing(p)) setFill(p, FILL_MIN, true);
      }
      }
    }
    renumber();
  }
  /* After fonts settle, re-run the SAME guarded pipeline — a bare grow pass here
     was inflating pages past the sheet with nothing to re-check or split them. */
  function refit(){
    densify(false); reflow(); merge();
    for(let pass=0; pass<6 && [...doc.querySelectorAll('.page')].some(overflowing); pass++){
      densify(false); reflow(); merge();
    }
    for(const p of doc.querySelectorAll('.page')){
      if(overflowing(p)){
        setFill(p, 1); chooseFill(p, undefined, false);
        if(overflowing(p)) setFill(p, FILL_MIN, true);
      }
    }
    renumber();
  }
  window.NF_FILLS = () => [...doc.querySelectorAll('.page')].map(p=>({l:p.dataset.screenLabel,k:p.style.getPropertyValue('--fill'),gap:Math.round(gapOf(p))}));

  // run once layout has settled (fonts affect measurement)
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(()=>requestAnimationFrame(fit)); }
  else { requestAnimationFrame(fit); }
  addEventListener('load', ()=>requestAnimationFrame(fit), {once:true});

  /* Late correction: document.fonts.ready can resolve BEFORE the Arabic face's
     metrics are applied to laid-out text, so fills chosen against fallback metrics
     leave a few pages overflowing. This pass is never latched and only re-scales
     pages that actually overflow, so it is safe to run repeatedly. */
  function guardOverflow(){
    let fixed = 0;
    for(const p of doc.querySelectorAll('.page')){
      if(!overflowing(p)) continue;
      setFill(p, 1); chooseFill(p, undefined, false);
      if(overflowing(p)) setFill(p, FILL_MIN, true);
      fixed++;
    }
    // scaling alone cannot always win: split what is still over, then reclaim tails
    if([...doc.querySelectorAll('.page')].some(overflowing)){
      for(let pass=0; pass<4 && [...doc.querySelectorAll('.page')].some(overflowing); pass++){
        reflow(); merge();
        for(const p of doc.querySelectorAll('.page')){
          if(!overflowing(p)) continue;
          setFill(p, 1); chooseFill(p, undefined, false);
          if(overflowing(p)) setFill(p, FILL_MIN, true);
        }
      }
      absorbSparse();
      fixed++;
    }
    balanceSplit();          // always: a blank sheet is not an overflow symptom
    for(const p of doc.querySelectorAll('.page')){
      if(!overflowing(p)) continue;
      setFill(p, 1); chooseFill(p, undefined, false);
      if(overflowing(p)) setFill(p, FILL_MIN, true);
    }
    if(fixed) renumber(); else renumber();
    return fixed;
  }

  /* Fixed timeouts guessed wrong for Cyrillic (its face settles later than Arabic's).
     Wait for the LAYOUT ITSELF to stop moving: poll total content height until two
     consecutive samples agree, then correct. */
  function whenStable(cb){
    let last = -1, same = 0, ticks = 0;
    (function sample(){
      let h = 0;
      for(const p of doc.querySelectorAll('.page')){
        const pad = p.querySelector('.pad');
        if(pad) h += contentBottom(pad);
      }
      if(h === last){ if(++same >= 2){ cb(); return; } }
      else { same = 0; last = h; }
      if(++ticks < 120) setTimeout(sample, 150);   // up to ~18s
      else cb();
    })();
  }
  function lateGuard(){
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      guardOverflow();                 // correct what we can see right now
      whenStable(function(){           // then again once layout truly settles
        if(guardOverflow()) whenStable(guardOverflow);
      });
    }));
  }
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(lateGuard); }
  addEventListener('load', lateGuard, {once:true});

  window.NF_FIT = fit;
  window.NF_GUARD = guardOverflow;
  /* clicking a product in the contents jumps to its page */
  doc.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#p-"]');
    if(!a) return;
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const t = doc.querySelector('#'+CSS.escape(id)) || document.getElementById(id);
    if(!t) return;
    const page = t.closest('.page') || t;
    const box = document.scrollingElement || document.documentElement;
    const y = page.getBoundingClientRect().top + box.scrollTop - 24;
    box.scrollTo({top:y, behavior:'smooth'});
    page.classList.add('jump-hit');
    setTimeout(()=>page.classList.remove('jump-hit'), 1200);
  });
  window.NF_AUDIT = function(){
    return [...doc.querySelectorAll('.page')].map((p,i)=>{
      const pad=p.querySelector('.pad'); if(!pad) return null;
      const over=(pad.offsetTop+pad.scrollHeight)-limitOf(p);
      const gap=limitOf(p)-(pad.offsetTop+pad.scrollHeight);
      if(over>1) return {page:i+1,label:p.dataset.screenLabel,over:Math.round(over)};
      if(gap>120) return {page:i+1,label:p.dataset.screenLabel,gap:Math.round(gap)};
      return null;
    }).filter(Boolean);
  };
})();
