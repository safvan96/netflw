/* ============================================================
   PROCESS METERS, Quotation Builder
   Multi-language (EN / TR / AR / RU) printable quotation tool
   ============================================================ */
(function(){
'use strict';

/* ---------- languages ---------- */
const LANG_META = {
  en:{name:'English', dir:'ltr', locale:'en'},
  tr:{name:'Türkçe', dir:'ltr', locale:'tr'},
  ar:{name:'العربية', dir:'rtl', locale:'ar'},
  ru:{name:'Русский', dir:'ltr', locale:'ru'}
};

/* ---------- UI strings per language ---------- */
const T = {
  en:{quotation:'QUOTATION', quoteNo:'Quote No.', date:'Date', valid:'Valid Until', by:'Prepared by',
      supplier:'Supplier', customer:'Customer', project:'Project', attn:'Attn', reqBy:'Requested by',
      thNo:'#', thDesc:'Description', thQty:'Qty', thUnit:'Unit Price', thTotal:'Total',
      subtotal:'Subtotal', discount:'Discount', transport:'Transport & Field Visit', vat:'VAT', grand:'Grand Total',
      terms:'Terms & Conditions', authSign:'Authorized Signature', custAcc:'Customer Acceptance',
      tagline:'Industrial Instrumentation · Made in Türkiye', noItems:'No products added yet.',
      legal:'Net Flow · netflw.com · +90 541 373 79 53 · info@netflw.com · TÜRKAK-accredited (AB-0354-K) · ISO/IEC 17025 · ISO 9001 · VFA Elektronik, Konya · Türkiye'},
  tr:{quotation:'FİYAT TEKLİFİ', quoteNo:'Teklif No.', date:'Tarih', valid:'Son Geçerlilik', by:'Hazırlayan',
      supplier:'Tedarikçi', customer:'Müşteri', project:'Proje', attn:'İlgili', reqBy:'Talep eden',
      thNo:'#', thDesc:'Açıklama', thQty:'Adet', thUnit:'Birim Fiyat', thTotal:'Tutar',
      subtotal:'Ara Toplam', discount:'İskonto', transport:'Yol & Saha Masrafı', vat:'KDV', grand:'Genel Toplam',
      terms:'Şartlar ve Koşullar', authSign:'Yetkili İmza', custAcc:'Müşteri Onayı',
      tagline:'Endüstriyel Ölçüm Cihazları · Türk Malı', noItems:'Henüz ürün eklenmedi.',
      legal:'Net Flow · netflw.com · +90 541 373 79 53 · info@netflw.com · TÜRKAK akreditasyonlu (AB-0354-K) · ISO/IEC 17025 · ISO 9001 · VFA Elektronik, Konya · Türkiye'},
  ar:{quotation:'عرض سعر', quoteNo:'رقم العرض', date:'التاريخ', valid:'صالح حتى', by:'أعدّه',
      supplier:'المورّد', customer:'العميل', project:'المشروع', attn:'عناية', reqBy:'طلب من قِبَل',
      thNo:'#', thDesc:'الوصف', thQty:'الكمية', thUnit:'سعر الوحدة', thTotal:'الإجمالي',
      subtotal:'المجموع الفرعي', discount:'الخصم', transport:'النقل والزيارة الميدانية', vat:'ضريبة القيمة المضافة', grand:'الإجمالي الكلي',
      terms:'الشروط والأحكام', authSign:'التوقيع المعتمد', custAcc:'موافقة العميل',
      tagline:'أجهزة قياس صناعية · صنع في تركيا', noItems:'لم تتم إضافة منتجات بعد.',
      legal:'Net Flow · netflw.com · ‎+90 541 373 79 53 · info@netflw.com · معتمد من TÜRKAK ‏(AB-0354-K) · ISO/IEC 17025 · ISO 9001 · VFA Elektronik، قونية · تركيا'},
  ru:{quotation:'КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ', quoteNo:'№ предложения', date:'Дата', valid:'Действительно до', by:'Подготовил',
      supplier:'Поставщик', customer:'Заказчик', project:'Проект', attn:'Вниманию', reqBy:'Запросил',
      thNo:'#', thDesc:'Описание', thQty:'Кол-во', thUnit:'Цена за ед.', thTotal:'Сумма',
      subtotal:'Промежуточный итог', discount:'Скидка', transport:'Транспорт / выезд на объект', vat:'НДС', grand:'Итого',
      terms:'Условия', authSign:'Подпись уполномоченного', custAcc:'Согласие заказчика',
      tagline:'Промышленные измерительные приборы · Сделано в Турции', noItems:'Товары ещё не добавлены.',
      legal:'Net Flow · netflw.com · +90 541 373 79 53 · info@netflw.com · аккредитация TÜRKAK (AB-0354-K) · ISO/IEC 17025 · ISO 9001 · VFA Elektronik, Конья · Турция'}
};

/* ---------- default terms per language ---------- */
const TERMS = {
  en:'1. VALIDITY: This quotation is valid for 15 (fifteen) days from the date of issue. After this period, prices and delivery times are subject to reconfirmation.\n\n2. PRICES: All prices are quoted EXW Konya, Turkey (Incoterms® 2020) unless otherwise stated. Prices do not include shipping, insurance, customs duties, or local taxes.\n\n3. PAYMENT: 100% advance payment by T/T (bank transfer) before production commences. Production will not begin until payment is confirmed.\n\n4. DELIVERY: Estimated delivery time is 3–5 weeks from the date of payment confirmation. Delivery times are approximate and may vary depending on order volume and stock availability.\n\n5. SHIPPING: Products are packed in reinforced cardboard boxes suitable for international shipping. Freight, insurance, and customs clearance costs are the responsibility of the buyer unless agreed otherwise.\n\n6. WARRANTY: All products carry a 24-month warranty against manufacturing defects from the date of shipment. The warranty does not cover damage caused by improper installation, misuse, or unauthorized modification.\n\n7. CALIBRATION & CERTIFICATES: Electromagnetic flow meters DN15–DN200 are delivered with a TÜRKAK-accredited calibration certificate (ISO/IEC 17025, Accreditation No: AB-0354-K). Sizes above DN200 and all other instruments are supplied with a CE declaration of conformity and factory calibration certificate.\n\n8. TECHNICAL SUPPORT: Free technical support is provided via phone, email, and WhatsApp during and after installation.\n\n9. RETURNS: Products manufactured to custom specifications (special DN sizes, materials, or configurations) are non-returnable. Standard products may be returned within 14 days in original, unused condition.\n\n10. JURISDICTION: Any disputes arising from this quotation or resulting orders shall be resolved under the laws of the Republic of Turkey, with Konya courts having exclusive jurisdiction.',
  tr:'1. GEÇERLİLİK: Bu teklif, düzenlenme tarihinden itibaren 15 (on beş) gün geçerlidir. Bu sürenin dolmasından sonra fiyatlar ve teslimat süreleri yeniden teyit edilmelidir.\n\n2. FİYATLAR: Tüm fiyatlar aksi belirtilmedikçe EXW Konya, Türkiye (Incoterms® 2020) olarak verilmiştir. Fiyatlara nakliye, sigorta, gümrük vergisi ve yerel vergiler dahil değildir.\n\n3. ÖDEME: Üretime başlanmadan önce %100 peşin ödeme, T/T (banka havalesi) ile yapılmalıdır. Ödeme teyit edilmeden üretime başlanmaz.\n\n4. TESLİMAT: Tahmini teslimat süresi, ödeme teyidinden itibaren 3–5 haftadır. Teslimat süreleri sipariş hacmine ve stok durumuna göre değişiklik gösterebilir.\n\n5. SEVKİYAT: Ürünler uluslararası sevkiyata uygun güçlendirilmiş karton kutularda paketlenir. Nakliye, sigorta ve gümrükleme masrafları aksi kararlaştırılmadıkça alıcıya aittir.\n\n6. GARANTİ: Tüm ürünler sevk tarihinden itibaren 24 ay üretim hatalarına karşı garantilidir. Garanti; hatalı kurulum, yanlış kullanım veya yetkisiz müdahale sonucu oluşan hasarları kapsamaz.\n\n7. KALİBRASYON VE SERTİFİKALAR: DN15–DN200 arası elektromanyetik debimetreler TÜRKAK akreditasyonlu kalibrasyon sertifikası (ISO/IEC 17025, Akreditasyon No: AB-0354-K) ile teslim edilir. DN200 üzeri çaplar ve diğer tüm cihazlar CE uygunluk beyanı ve fabrika kalibrasyon sertifikası ile gönderilir.\n\n8. TEKNİK DESTEK: Kurulum süresince ve sonrasında telefon, e-posta ve WhatsApp üzerinden ücretsiz teknik destek sağlanır.\n\n9. İADE: Özel sipariş ürünler (özel DN çapları, malzemeler veya konfigürasyonlar) iade edilemez. Standart ürünler orijinal ve kullanılmamış durumda 14 gün içinde iade edilebilir.\n\n10. YETKİ: Bu tekliften veya sonucunda oluşan siparişlerden doğacak anlaşmazlıklar Türkiye Cumhuriyeti kanunlarına göre çözülür; Konya mahkemeleri münhasır yetkiye sahiptir.',
  ar:'1. الصلاحية: هذا العرض ساري المفعول لمدة 15 (خمسة عشر) يومًا من تاريخ الإصدار. بعد انتهاء هذه الفترة، تخضع الأسعار ومواعيد التسليم لإعادة التأكيد.\n\n2. الأسعار: جميع الأسعار مقدمة على أساس تسليم المصنع EXW قونية، تركيا (إنكوترمز 2020) ما لم يُذكر خلاف ذلك. لا تشمل الأسعار الشحن والتأمين والرسوم الجمركية والضرائب المحلية.\n\n3. الدفع: 100% دفعة مقدمة بالتحويل البنكي T/T قبل بدء الإنتاج. لن يبدأ الإنتاج حتى يتم تأكيد الدفع.\n\n4. التسليم: مدة التسليم المقدرة 3–5 أسابيع من تاريخ تأكيد الدفع. قد تتغير مواعيد التسليم حسب حجم الطلب وتوفر المخزون.\n\n5. الشحن: تُعبأ المنتجات في صناديق كرتون مقوّاة مناسبة للشحن الدولي. تكاليف الشحن والتأمين والتخليص الجمركي على حساب المشتري ما لم يُتفق على خلاف ذلك.\n\n6. الضمان: جميع المنتجات مضمونة لمدة 24 شهرًا ضد عيوب التصنيع من تاريخ الشحن. لا يشمل الضمان الأضرار الناتجة عن التركيب الخاطئ أو سوء الاستخدام أو التعديل غير المصرح به.\n\n7. المعايرة والشهادات: تُسلَّم مقاييس التدفق الكهرومغناطيسية بأقطار DN15–DN200 بشهادة معايرة معتمدة من TÜRKAK ‏(ISO/IEC 17025، رقم الاعتماد: AB-0354-K). الأقطار الأكبر من DN200 وجميع الأجهزة الأخرى تُسلَّم بإعلان مطابقة CE وشهادة معايرة المصنع.\n\n8. الدعم الفني: يتم تقديم دعم فني مجاني عبر الهاتف والبريد الإلكتروني وواتساب أثناء التركيب وبعده.\n\n9. الإرجاع: المنتجات المصنعة بمواصفات خاصة (أقطار DN خاصة أو مواد أو تكوينات) غير قابلة للإرجاع. يمكن إرجاع المنتجات القياسية خلال 14 يومًا بحالتها الأصلية غير المستخدمة.\n\n10. الاختصاص القضائي: تُحل أي نزاعات ناشئة عن هذا العرض أو الطلبات الناتجة عنه وفقًا لقوانين جمهورية تركيا، وتكون محاكم قونية هي المختصة حصريًا.',
  ru:'1. СРОК ДЕЙСТВИЯ: Данное предложение действительно в течение 15 (пятнадцати) дней с даты выдачи. По истечении этого срока цены и сроки поставки подлежат повторному подтверждению.\n\n2. ЦЕНЫ: Все цены указаны на условиях EXW Конья, Турция (Incoterms® 2020), если не указано иное. Цены не включают доставку, страховку, таможенные пошлины и местные налоги.\n\n3. ОПЛАТА: 100% предоплата банковским переводом T/T до начала производства. Производство не начнётся до подтверждения оплаты.\n\n4. ПОСТАВКА: Ориентировочный срок поставки — 3–5 недель с даты подтверждения оплаты. Сроки поставки могут варьироваться в зависимости от объёма заказа и наличия на складе.\n\n5. ОТГРУЗКА: Продукция упакована в усиленные картонные коробки, пригодные для международной доставки. Расходы на доставку, страховку и таможенное оформление несёт покупатель, если не согласовано иное.\n\n6. ГАРАНТИЯ: На все изделия предоставляется гарантия 24 месяца от производственных дефектов с даты отгрузки. Гарантия не распространяется на повреждения, вызванные неправильной установкой, неправильной эксплуатацией или несанкционированной модификацией.\n\n7. КАЛИБРОВКА И СЕРТИФИКАТЫ: Электромагнитные расходомеры DN15–DN200 поставляются с калибровочным сертификатом, аккредитованным TÜRKAK (ISO/IEC 17025, номер аккредитации: AB-0354-K). Размеры свыше DN200 и все остальные приборы поставляются с декларацией соответствия CE и заводским калибровочным сертификатом.\n\n8. ТЕХНИЧЕСКАЯ ПОДДЕРЖКА: Бесплатная техническая поддержка предоставляется по телефону, электронной почте и WhatsApp во время и после установки.\n\n9. ВОЗВРАТ: Продукция, изготовленная по специальным спецификациям (нестандартные DN, материалы или конфигурации), возврату не подлежит. Стандартная продукция может быть возвращена в течение 14 дней в оригинальном неиспользованном состоянии.\n\n10. ЮРИСДИКЦИЯ: Любые споры, возникающие из данного предложения или вытекающих заказов, разрешаются в соответствии с законами Турецкой Республики, с исключительной юрисдикцией судов Коньи.'
};

/* ---------- config field definitions ---------- */
const FIELDS = {
  dn:{label:{en:'Diameter',tr:'Çap',ar:'القطر',ru:'Диаметр'}, opts:['DN15','DN25','DN40','DN50','DN80','DN100','DN150','DN200','DN300','DN400','DN500','DN600','DN800','DN1000']},
  liner:{label:{en:'Liner',tr:'Astar',ar:'البطانة',ru:'Футеровка'}, opts:['PTFE','Hard Rubber','Neoprene','F46 (FEP)','PFA','Polyurethane']},
  electrode:{label:{en:'Electrode',tr:'Elektrot',ar:'القطب',ru:'Электрод'}, opts:['SS 316L','Hastelloy B','Hastelloy C','Titanium','Tantalum','Platinum']},
  output:{label:{en:'Output',tr:'Çıkış',ar:'الخرج',ru:'Выход'}, opts:['4–20mA','4–20mA + HART','RS485 Modbus','Pulse / Frequency','Profibus DP']},
  conn:{label:{en:'Connection',tr:'Bağlantı',ar:'التوصيل',ru:'Соединение'}, opts:['DIN Flange','ANSI Flange','JIS Flange','Tri-Clamp','Wafer','Threaded']},
  ip:{label:{en:'Protection',tr:'Koruma',ar:'الحماية',ru:'Защита'}, opts:['IP65','IP67','IP68']},
  pn:{label:{en:'Pressure',tr:'Basınç',ar:'الضغط',ru:'Давление'}, opts:['PN10','PN16','PN25','PN40']},
  temp:{label:{en:'Max Temp',tr:'Maks. Sıcaklık',ar:'أقصى حرارة',ru:'Макс. темп.'}, opts:['80°C','150°C','200°C','300°C']},
  supply:{label:{en:'Supply',tr:'Besleme',ar:'التغذية',ru:'Питание'}, opts:['AC 85–250V','DC 20–36V','Battery 3.6V Li']},
  mat:{label:{en:'Material',tr:'Malzeme',ar:'المادة',ru:'Материал'}, opts:['SS 304','SS 316L','PP','PVC']},
  range:{label:{en:'Range',tr:'Aralık',ar:'النطاق',ru:'Диапазон'}, opts:['0–360°','0–10 bar','0–100 bar','0–600 bar','−50…+150°C']},
  outSw:{label:{en:'Output',tr:'Çıkış',ar:'الخرج',ru:'Выход'}, opts:['NO/NC Relay','PNP','NPN','4–20mA']}
};

/* ---------- EM flow meter weight & box dimensions ---------- */
const EM_WEIGHT = {
  DN15:{kg:7,box:[30,25,25]},DN20:{kg:8,box:[30,25,25]},
  DN25:{kg:9,box:[32,27,27]},DN32:{kg:10,box:[34,28,28]},
  DN40:{kg:11,box:[36,30,30]},DN50:{kg:13,box:[38,32,32]},
  DN65:{kg:15,box:[42,35,35]},DN80:{kg:17,box:[45,38,36]},
  DN100:{kg:19,box:[48,40,38]},DN125:{kg:26,box:[52,44,42]},
  DN150:{kg:32,box:[56,48,45]},DN200:{kg:46.5,box:[66,48,63]},
  DN250:{kg:65,box:[78,60,74]},DN300:{kg:79.5,box:[78,60,74]},
  DN350:{kg:100,box:[78,60,74]},DN400:{kg:128,box:[83,75,67]},
  DN450:{kg:160,box:[90,80,75]},DN500:{kg:179,box:[100,85,80]},
  DN600:{kg:225,box:[115,100,90]},DN700:{kg:360,box:[130,110,100]},
  DN800:{kg:428,box:[140,120,110]},DN900:{kg:560,box:[155,135,120]},
  DN1000:{kg:680,box:[170,150,135]}
};
function calcDesi(b){return Math.ceil(b[0]*b[1]*b[2]/3000);}

/* weight multiplier by product type — only standard EM and food-grade */
const WT_RATIO = {
  'NT-VMF':1,         // standard flange EM
  'NT-VMF-W':0.7      // food-grade: tri-clamp, lighter body
};
function getWeight(code,dn){
  const w=EM_WEIGHT[dn]; if(!w) return null;
  const r=WT_RATIO[code]; if(r==null) return null;
  const kg=+(w.kg*r).toFixed(1);
  // box scales proportionally for lighter products
  const bs = r<1 ? w.box.map(d=>Math.round(d*Math.pow(r,0.33))) : w.box;
  return {kg,box:bs};
}

/* ---------- auto pricing from NF_PRICING ---------- */
function calcPrice(code, cfg){
  if(typeof NF_PRICING==='undefined') return 0;
  var pr = NF_PRICING.products[code];
  if(!pr) return 0;
  // follow ref
  if(pr.ref) pr = NF_PRICING.products[pr.ref];
  if(!pr) return 0;

  var base = 0;
  var listRatio = pr.listRatio || 2.0;

  // DN-based pricing
  if(pr.byDN && cfg.dn){
    var arr = pr.byDN[cfg.dn];
    if(!arr) return 0;
    // arr = [rubber/304/default, ptfe/316/alt] or [single]
    var idx = 0;
    if(arr.length > 1){
      // liner: PTFE/PFA/F46 → col 1
      if(cfg.liner && /PTFE|PFA|F46/.test(cfg.liner)) idx = 1;
      // material: SS 316L → col 1
      if(cfg.mat && /316/.test(cfg.mat)) idx = 1;
    }
    base = arr[idx] || arr[0] || 0;
  }
  // length-based
  else if(pr.byLength && cfg.range){
    var len = parseInt(cfg.range);
    if(pr.byLength[len]) base = pr.byLength[len];
    else{
      // nearest
      var keys = Object.keys(pr.byLength).map(Number).sort((a,b)=>a-b);
      base = pr.byLength[keys[0]] || 0;
    }
  }
  // variant-based
  else if(pr.variants && cfg.range){
    base = pr.variants[cfg.range] || 0;
    if(!base){
      // try first variant
      var vk = Object.keys(pr.variants);
      base = vk.length ? pr.variants[vk[0]] : 0;
    }
  }
  // flat base
  else if(pr.base){
    base = pr.base;
  }
  // variant without range (e.g. ultrasonic types)
  else if(pr.variants){
    var vk2 = Object.keys(pr.variants);
    base = vk2.length ? pr.variants[vk2[0]] : 0;
  }

  if(!base) return 0;

  // calculate list price for percentage-based options
  var listPrice = base * listRatio;
  var total = base;

  // apply options
  var opts = pr.options || {};

  // electrode
  if(opts.electrode && cfg.electrode){
    var eVal = opts.electrode[cfg.electrode];
    if(eVal) total += eVal;
  }
  // output
  if(opts.output && cfg.output){
    var oVal = opts.output[cfg.output];
    if(oVal) total += oVal;
  }
  // ip protection
  if(opts.ip && cfg.ip){
    var ipDef = opts.ip[cfg.ip];
    if(ipDef && ipDef.pct) total += listPrice * ipDef.pct / 100;
  }
  // pressure class
  if(opts.pn && cfg.pn){
    var pnDef = opts.pn[cfg.pn];
    if(pnDef && pnDef.pct) total += listPrice * pnDef.pct / 100;
  }
  // supply (battery)
  if(opts.supply && cfg.supply){
    var sVal = opts.supply[cfg.supply];
    if(sVal) total += sVal;
  }
  // temperature
  if(opts.temp && cfg.temp){
    var tVal = opts.temp[cfg.temp];
    if(tVal) total += tVal;
  }

  return Math.round(total * 100) / 100;
}

/* ---------- icons by category ---------- */
const ICONS = {
  flow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="9" width="20" height="6" rx="1.5"/><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"/><rect x="9" y="3" width="6" height="6" rx="1"/></svg>',
  level:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 13h12"/><rect x="9" y="6" width="6" height="5" fill="currentColor" stroke="none"/></svg>',
  switch:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="3" width="8" height="6" rx="1"/><path d="M12 9v6"/><circle cx="12" cy="18" r="3"/></svg>',
  process:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="7"/><path d="M12 10l4-2.5M12 17v4M9 21h6"/></svg>',
  temp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0a4 4 0 100 0"/><circle cx="12" cy="18" r="2" fill="currentColor" stroke="none"/></svg>',
  control:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M7 10h2M11 10h2M15 10h2M3 21h18"/></svg>',
  mechanical:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 7V3M12 21v-4M17 12h4M3 12h4"/></svg>',
  handheld:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 6h4M10 18h4"/></svg>'
};
const CATNAME = {flow:'Flow Meter',level:'Level Instrument',switch:'Level Switch',process:'Process Instrument',temp:'Temperature',control:'Process Control',mechanical:'Mechanical Control',handheld:'Handheld Instrument'};

/* ---------- products ---------- */
const N=(en,tr,ar,ru)=>({en,tr,ar,ru});
const PRODUCTS = [
  {code:'NT-VMF',cat:'flow',cfg:['dn','liner','electrode','output','conn','ip'],
    name:N('Electromagnetic Flow Meter','Elektromanyetik Debimetre','مقياس تدفق كهرومغناطيسي','Электромагнитный расходомер'),
    desc:N('Full-bore electromagnetic flow meter for conductive liquids, no moving parts, no pressure loss.','İletken sıvılar için tam açıklıklı elektromanyetik debimetre, hareketli parça yok, basınç kaybı yok.','مقياس تدفق كهرومغناطيسي كامل الفتحة للسوائل الموصلة, بلا أجزاء متحركة وبلا فقد للضغط.','Полнопроходной электромагнитный расходомер для проводящих жидкостей, без движущихся частей и потерь давления.')},
  {code:'NT-VMF-W',cat:'flow',cfg:['dn','liner','electrode','output','conn'],
    name:N('Food-Grade Flow Meter','Gıda Tipi Debimetre','مقياس تدفق صحي للأغذية','Расходомер пищевого класса'),
    desc:N('Hygienic tri-clamp electromagnetic flow meter for food, dairy and beverage lines.','Gıda, süt ürünleri ve içecek hatları için hijyenik tri-clamp elektromanyetik debimetre.','مقياس تدفق كهرومغناطيسي صحي بوصلة tri-clamp لخطوط الأغذية والألبان والمشروبات.','Гигиенический электромагнитный расходомер с зажимом tri-clamp для пищевых, молочных и напиточных линий.')},
  {code:'NT-VMF-BT',cat:'flow',cfg:['dn','liner','electrode','output','ip','supply'],
    name:N('Battery-Powered Flow Meter','Pilli Debimetre','مقياس تدفق يعمل بالبطارية','Расходомер с батарейным питанием'),
    desc:N('Battery-powered electromagnetic flow meter with 5-year lithium cell for sites without mains power.','Şebeke elektriği olmayan sahalar için 5 yıllık lityum pilli elektromanyetik debimetre.','مقياس تدفق كهرومغناطيسي يعمل ببطارية ليثيوم لمدة 5 سنوات للمواقع دون كهرباء.','Электромагнитный расходомер с литиевой батареей на 5 лет для объектов без сети.')},
  {code:'NT-VMF-I',cat:'flow',cfg:['dn','electrode','output','conn','ip'],
    name:N('Insertion Flow Meter','Daldırma (Insertion) Debimetre','مقياس تدفق إدخالي','Погружной (врезной) расходомер'),
    desc:N('Insertion-type electromagnetic flow meter for retrofitting large pipelines without shutdown.','Büyük boru hatlarına kesintisiz montaj için daldırma tip elektromanyetik debimetre.','مقياس تدفق كهرومغناطيسي إدخالي للتركيب على الأنابيب الكبيرة دون إيقاف التشغيل.','Врезной электромагнитный расходомер для монтажа на крупных трубопроводах без остановки.')},
  {code:'NT-VMF-P',cat:'flow',cfg:['dn','liner','output','conn','ip'],
    name:N('Partially-Filled Flow Meter','Kısmi Dolu Boru Debimetresi','مقياس تدفق للأنابيب الممتلئة جزئيًا','Расходомер для частично заполненных труб'),
    desc:N('Electromagnetic flow meter for partially-filled pipes, measuring level and velocity together.','Kısmen dolu borularda seviye ve hızı birlikte ölçen elektromanyetik debimetre.','مقياس تدفق كهرومغناطيسي للأنابيب الممتلئة جزئيًا يقيس المستوى والسرعة معًا.','Электромагнитный расходомер для частично заполненных труб, измеряет уровень и скорость.')},
  {code:'NT-VMF-0D',cat:'flow',cfg:['dn','liner','electrode','output','conn','ip'],
    name:N('Zero Straight-Run (0D) Meter','Sıfır Düz Boru (0D) Debimetre','مقياس تدفق بدون أنبوب مستقيم (0D)','Расходомер с нулевым прямым участком (0D)'),
    desc:N('Zero straight-run electromagnetic flow meter installable directly after bends, valves or pumps.','Dirsek, vana veya pompadan hemen sonra monte edilebilen sıfır düz borulu elektromanyetik debimetre.','مقياس تدفق كهرومغناطيسي لا يحتاج أنبوبًا مستقيمًا، يُركّب مباشرة بعد الأكواع والصمامات والمضخات.','Электромагнитный расходомер без прямого участка, монтируется сразу после отводов, клапанов и насосов.')},
  {code:'NT-VMF-M',cat:'flow',cfg:['dn','electrode','output','conn'],
    name:N('Miniature Flow Meter','Mini Debimetre','مقياس تدفق مصغّر','Миниатюрный расходомер'),
    desc:N('Miniature electromagnetic flow meter for precision micro-dosing from 0.2 L/min.','0,2 L/dk’dan itibaren hassas mikro dozajlama için mini elektromanyetik debimetre.','مقياس تدفق كهرومغناطيسي مصغّر للجرعات الدقيقة بدءًا من 0.2 لتر/دقيقة.','Миниатюрный электромагнитный расходомер для точного микродозирования от 0,2 л/мин.')},
  {code:'NT-VMF-S',cat:'flow',cfg:['dn','liner','electrode','output','conn','ip'],
    name:N('Slurry Flow Meter','Çamur (Slurry) Debimetre','مقياس تدفق للوحل (Slurry)','Расходомер для шламов (Slurry)'),
    desc:N('Heavy-duty electromagnetic flow meter with abrasion-resistant liner for slurries.','Çamur uygulamaları için aşınmaya dayanıklı astarlı ağır hizmet tipi elektromanyetik debimetre.','مقياس تدفق كهرومغناطيسي شاق التحمل ببطانة مقاومة للتآكل للوحل.','Высокопрочный электромагнитный расходомер с износостойкой футеровкой для шламов.')},
  {code:'NT-MLI',cat:'level',cfg:['temp','pn','conn','ip'],
    name:N('Magnetic Bypass Level Indicator','Manyetik Baypas Seviye Göstergesi','مؤشر مستوى مغناطيسي جانبي','Магнитный байпасный уровнемер'),
    desc:N('Magnetic bypass level indicator with sealed flag display, no power required.','Sızdırmaz bayrak göstergeli manyetik baypas seviye göstergesi, enerji gerektirmez.','مؤشر مستوى مغناطيسي جانبي بعرض راية محكم, بلا حاجة للطاقة.','Магнитный байпасный уровнемер с герметичным флажковым индикатором, без питания.')},
  {code:'NT-MLI-EX',cat:'level',cfg:['temp','pn','conn','ip'],
    name:N('Ex-Proof Bypass Indicator','Ex-Proof Baypas Seviye Göstergesi','مؤشر مستوى جانبي مضاد للانفجار','Взрывозащищённый байпасный уровнемер'),
    desc:N('Explosion-proof magnetic bypass level indicator for hazardous areas.','Tehlikeli bölgeler için Ex-proof manyetik baypas seviye göstergesi.','مؤشر مستوى مغناطيسي جانبي مضاد للانفجار للمناطق الخطرة.','Взрывозащищённый магнитный байпасный уровнемер для опасных зон.')},
  {code:'NT-MLI-BR',cat:'level',cfg:['temp','pn','conn'],
    name:N('Boiler-Type Bypass Indicator','Kazan Tipi Baypas Göstergesi','مؤشر جانبي لنوع الغلايات','Котловой байпасный уровнемер'),
    desc:N('Boiler-type magnetic bypass indicator rated for high-pressure steam drums.','Yüksek basınçlı buhar kazanları için kazan tipi manyetik baypas göstergesi.','مؤشر مغناطيسي جانبي لنوع الغلايات مصمم لأسطوانات البخار عالية الضغط.','Котловой магнитный байпасный уровнемер для барабанов пара высокого давления.')},
  {code:'NT-FLT',cat:'level',cfg:['range','output','mat','ip'],
    name:N('Float Level Transmitter','Şamandıralı Seviye Transmitteri','ناقل مستوى بعوّامة','Поплавковый уровнемер-преобразователь'),
    desc:N('Float level transmitter giving continuous 4–20 mA signal via magnetic coupling.','Manyetik kuplaj ile sürekli 4–20 mA sinyal veren şamandıralı seviye transmitteri.','ناقل مستوى بعوّامة يعطي إشارة مستمرة 4–20 مللي أمبير عبر اقتران مغناطيسي.','Поплавковый уровнемер с непрерывным сигналом 4–20 мА через магнитную связь.')},
  {code:'NT-MLS',cat:'level',cfg:['supply','outSw','ip'],
    name:N('Motorized Level Sensor','Motorlu Seviye Sensörü','حساس مستوى محرّكي','Моторизованный датчик уровня'),
    desc:N('Motorized rotary-paddle level sensor for bulk-solids detection in silos.','Silolarda katı malzeme tespiti için motorlu döner paletli seviye sensörü.','حساس مستوى بمجداف دوّار محرّكي لكشف المواد الصلبة في الصوامع.','Моторизованный лопастной датчик уровня для контроля сыпучих в силосах.')},
  {code:'NT-MLP',cat:'switch',cfg:['outSw','mat','ip'],
    name:N('Side-Mount Level Switch','Yandan Montajlı Seviye Şalteri','مفتاح مستوى للتركيب الجانبي','Датчик-реле уровня с боковым монтажом'),
    desc:N('Lever-arm float switch mounted on the side wall of a tank for high/low level alarms and pump control.','Tank yan cidarına monte edilen kollu şamandıralı seviye şalteri, yüksek/düşük alarm ve pompa kontrolü.','مفتاح عوّامة بذراع مثبّت على الجدار الجانبي للخزان لإنذارات الارتفاع/الانخفاض والتحكم بالمضخة.','Рычажный поплавковый датчик на боковой стенке резервуара для сигнализации уровня и управления насосом.')},
  {code:'NT-LSW-M',cat:'switch',cfg:['outSw','mat','ip'],
    name:N('Mini Stainless Level Switch','Mini Paslanmaz Seviye Switchi','مفتاح مستوى صغير من الستانلس','Мини датчик-реле уровня (нерж.)'),
    desc:N('Mini stainless-steel level switch for tight installations; NO/NC relay output.','Dar montajlar için mini paslanmaz çelik seviye switchi; NO/NC röle çıkışı.','مفتاح مستوى صغير من الفولاذ المقاوم للصدأ للمساحات الضيقة؛ خرج ريليه NO/NC.','Мини датчик-реле уровня из нержавеющей стали; релейный выход NO/NC.')},
  {code:'NT-LSW-F',cat:'switch',cfg:['outSw','mat','temp'],
    name:N('Float Level Switch','Şamandıralı Seviye Switchi','مفتاح مستوى بعوّامة','Поплавковый датчик-реле уровня'),
    desc:N('Economical float level switch for pump control, sumps and condensate tanks.','Pompa kontrolü, su çukurları ve kondens tankları için ekonomik şamandıralı seviye switchi.','مفتاح مستوى بعوّامة اقتصادي للتحكم بالمضخات والآبار وخزانات التكاثف.','Экономичный поплавковый датчик-реле уровня для насосов, приямков и конденсатных баков.')},
  {code:'NT-LSW-P',cat:'switch',cfg:['supply','outSw','ip'],
    name:N('Paddle Motor Level Switch','Paletli Motorlu Seviye Switchi','مفتاح مستوى بمجداف محرّكي','Лопастной датчик-реле уровня'),
    desc:N('Paddle-motor level switch for full/empty detection of granular solids.','Granül katıların dolu/boş tespiti için paletli motorlu seviye switchi.','مفتاح مستوى بمجداف محرّكي لكشف الامتلاء/الفراغ للمواد الحبيبية.','Лопастной датчик-реле уровня для контроля «полно/пусто» сыпучих материалов.')},
  {code:'NT-RCS 3100/2100',cat:'process',cfg:['range','output','ip'],
    name:N('Angle Sensor (RCS Series)','Açı Sensörü (RCS Serisi)','حساس زاوية (سلسلة RCS)','Датчик угла (серия RCS)'),
    desc:N('Contactless Hall-effect angle sensor with unlimited rotational life.','Sınırsız dönme ömrüne sahip temassız Hall etkili açı sensörü.','حساس زاوية بتأثير هول بدون تلامس وبعمر دوران غير محدود.','Бесконтактный датчик угла на эффекте Холла с неограниченным ресурсом вращения.')},
  {code:'NT-BTT-S',cat:'process',cfg:['range','output','ip'],
    name:N('Pressure-Temperature Transmitter','Basınç-Sıcaklık Transmitteri','ناقل ضغط-حرارة','Преобразователь давления и температуры'),
    desc:N('Combined pressure and temperature transmitter measuring both from one tapping.','Tek bağlantıdan basınç ve sıcaklığı birlikte ölçen kombine transmitter.','ناقل مدمج للضغط والحرارة يقيس كليهما من نقطة توصيل واحدة.','Комбинированный преобразователь давления и температуры с одной точки отбора.')},
  {code:'NT-TUF-S',cat:'flow',cfg:['dn','output','ip','supply'],
    name:N('Wall-Mount Ultrasonic Flow Meter','Duvar Tipi Ultrasonik Debimetre','مقياس تدفق بالموجات فوق الصوتية للتركيب الجداري','Настенный ультразвуковой расходомер'),
    desc:N('Clamp-on ultrasonic flow meter with wall-mount converter for non-invasive measurement on any pipe material.','Her türlü boru malzemesinde temassız ölçüm için duvar tipi çevirici ile clamp-on ultrasonik debimetre.','مقياس تدفق بالموجات فوق الصوتية مع محول حائطي للقياس غير التلامسي على أي مادة أنبوب.','Накладной ультразвуковой расходомер с настенным преобразователем для бесконтактного измерения на любом трубопроводе.')},
  {code:'NT-TUF-H',cat:'flow',cfg:['dn','output','ip'],
    name:N('Portable Ultrasonic Flow Meter','Portatif Ultrasonik Debimetre','مقياس تدفق بالموجات فوق الصوتية محمول','Портативный ультразвуковой расходомер'),
    desc:N('Handheld portable ultrasonic flow meter for audit measurements, commissioning and temporary monitoring.','Denetim ölçümleri, devreye alma ve geçici izleme için elde taşınabilir ultrasonik debimetre.','مقياس تدفق بالموجات فوق الصوتية محمول للقياسات التدقيقية والتشغيل والمراقبة المؤقتة.','Портативный ультразвуковой расходомер для аудита, ввода в эксплуатацию и временного мониторинга.')},
  {code:'NT-RLS',cat:'level',cfg:['range','output','ip','supply'],
    name:N('Radar Level Transmitter','Radar Seviye Sensörü','مرسل مستوى بالرادار','Радарный уровнемер'),
    desc:N('FMCW radar level transmitter, ±2mm accuracy, 26–70 GHz, for tanks, silos, and open channels.','FMCW radar seviye transmitteri, ±2mm hassasiyet, 26–70 GHz, tanklar, silolar ve açık kanallar için.','مرسل مستوى بالرادار FMCW بدقة ±2 ملم، 26–70 جيجاهرتز، للخزانات والصوامع والقنوات المفتوحة.','Радарный уровнемер FMCW, точность ±2 мм, 26–70 ГГц, для резервуаров, силосов и открытых каналов.')},
  {code:'NT-BCT',cat:'process',cfg:['range','output','conn','ip'],
    name:N('Pressure Transmitter','Basınç Transmitteri','ناقل ضغط','Преобразователь давления'),
    desc:N('Industrial pressure transmitter with SS316L diaphragm, 0–600 bar range, 4–20mA output.','SS316L diyaframlı endüstriyel basınç transmitteri, 0–600 bar aralık, 4–20mA çıkış.','ناقل ضغط صناعي بغشاء SS316L، نطاق 0–600 بار، خرج 4–20 مللي أمبير.','Промышленный преобразователь давления с мембраной SS316L, диапазон 0–600 бар, выход 4–20 мА.')},
  /* --- Flow Meters --- */
  {code:'NT-TRB',cat:'flow',cfg:['dn','output','conn','ip'],
    name:N('Turbine Flow Meter','Türbin Debimetre','مقياس تدفق توربيني','Турбинный расходомер'),
    desc:N('Turbine flow meter for particle-free liquids with ±0.2% accuracy.','Parçacıksız sıvılar için ±0,2% hassasiyetli türbin debimetre.','مقياس تدفق توربيني للسوائل الخالية من الجسيمات بدقة ±0.2%.','Турбинный расходомер для чистых жидкостей с точностью ±0,2%.')},
  {code:'NT-VA',cat:'flow',cfg:['dn','mat','temp'],
    name:N('Variable Area Flow Meter (Rotameter)','Değişken Alanlı Debimetre (Rotametre)','مقياس تدفق بمساحة متغيرة (روتاميتر)','Ротаметр'),
    desc:N('Glass or metal tube rotameter for liquid and gas flow measurement.','Sıvı ve gaz akış ölçümü için cam veya metal tüp rotametre.','روتاميتر بأنبوب زجاجي أو معدني لقياس تدفق السوائل والغازات.','Ротаметр со стеклянной или металлической трубкой для жидкостей и газов.')},
  {code:'NT-VTX',cat:'flow',cfg:['dn','output','conn','ip','temp'],
    name:N('Vortex Flow Meter','Vorteks Debimetre','مقياس تدفق دوامي','Вихревой расходомер'),
    desc:N('Vortex flow meter for liquid, gas and steam measurement.','Sıvı, gaz ve buhar ölçümü için vorteks debimetre.','مقياس تدفق دوامي للسوائل والغازات والبخار.','Вихревой расходомер для жидкостей, газов и пара.')},
  {code:'NT-OCF',cat:'flow',cfg:['output','ip','supply'],
    name:N('Open Channel Flow Meter','Açık Kanal Debimetre','مقياس تدفق القنوات المفتوحة','Расходомер открытого канала'),
    desc:N('Non-contact ultrasonic open channel flow meter with weir support.','Savak destekli temassız ultrasonik açık kanal debimetre.','مقياس تدفق بالموجات فوق الصوتية للقنوات المفتوحة مع دعم السد.','Бесконтактный ультразвуковой расходомер открытого канала.')},
  {code:'NT-MTF',cat:'flow',cfg:['dn','output','conn','temp'],
    name:N('Metal Tube Rotameter','Metal Tüp Rotametre','روتاميتر بأنبوب معدني','Ротаметр с металлической трубкой'),
    desc:N('Metal tube rotameter with magnetic float for liquid and gas measurement.','Sıvı ve gaz ölçümü için manyetik şamandıralı metal tüp rotametre.','روتاميتر بأنبوب معدني مع عوامة مغناطيسية للسوائل والغازات.','Ротаметр с металлической трубкой и магнитным поплавком.')},
  {code:'NT-OGF',cat:'flow',cfg:['dn','output','conn','pn'],
    name:N('Oval Gear Flow Meter','Oval Dişli Debimetre','مقياس تدفق بتروس بيضاوية','Шестерёнчатый расходомер'),
    desc:N('Positive displacement oval gear flow meter for viscous liquids.','Viskoz sıvılar için pozitif deplasmanlı oval dişli debimetre.','مقياس تدفق بإزاحة إيجابية بتروس بيضاوية للسوائل اللزجة.','Овально-шестерёнчатый расходомер для вязких жидкостей.')},
  {code:'NT-HGF',cat:'flow',cfg:['dn','output','conn','pn'],
    name:N('Helical Gear Flow Meter','Helisel Dişli Debimetre','مقياس تدفق بتروس حلزونية','Расходомер с винтовыми шестернями'),
    desc:N('Helical gear flow meter for high-viscosity media with minimal leakage.','Minimum kaçak ile yüksek viskoziteli ortamlar için helisel dişli debimetre.','مقياس تدفق بتروس حلزونية للوسائط عالية اللزوجة.','Расходомер с винтовыми шестернями для высоковязких сред.')},
  {code:'NT-TMF',cat:'flow',cfg:['dn','output','conn','ip'],
    name:N('Thermal Mass Flow Meter','Termal Kütle Debimetre','مقياس تدفق كتلي حراري','Термический массовый расходомер'),
    desc:N('Thermal dispersion mass flow meter for gas measurement, no pressure correction needed.','Gaz ölçümü için termal dispersiyonlu kütle debimetre, basınç düzeltmesi gerekmez.','مقياس تدفق كتلي حراري للغازات، لا حاجة لتصحيح الضغط.','Термический массовый расходомер для газов, без коррекции давления.')},
  {code:'NT-CMF',cat:'flow',cfg:['dn','output','conn','ip'],
    name:N('Coriolis Mass Flow Meter','Coriolis Kütle Debimetre','مقياس تدفق كتلي كوريوليس','Кориолисовый расходомер'),
    desc:N('Coriolis mass flow meter measuring mass flow, density and temperature simultaneously.','Kütle akışı, yoğunluk ve sıcaklığı aynı anda ölçen Coriolis kütle debimetre.','مقياس تدفق كتلي كوريوليس يقيس التدفق الكتلي والكثافة والحرارة.','Кориолисовый расходомер — масса, плотность и температура одновременно.')},
  {code:'NT-CTG',cat:'flow',cfg:['dn','output','ip'],
    name:N('Compact Thermal Gas Flow Meter','Kompakt Termal Gaz Debimetre','مقياس تدفق غاز حراري مدمج','Компактный термический газовый расходомер'),
    desc:N('Compact thermal gas flow meter for process gases, compressed air and natural gas.','Proses gazları, basınçlı hava ve doğal gaz için kompakt termal gaz debimetre.','مقياس تدفق غاز حراري مدمج لغازات العمليات والهواء المضغوط.','Компактный термический расходомер для процессных газов и сжатого воздуха.')},
  {code:'NT-FSW',cat:'switch',cfg:['dn','outSw','ip','temp'],
    name:N('Flow Switch','Akış Şalteri','مفتاح تدفق','Датчик-реле потока'),
    desc:N('Paddle or thermal flow switch for flow detection and pump protection.','Akış tespiti ve pompa koruması için paletli veya termal akış şalteri.','مفتاح تدفق بمجداف أو حراري لكشف التدفق وحماية المضخة.','Лопастной или термический датчик-реле потока для защиты насосов.')},
  {code:'NT-FSG',cat:'flow',cfg:['dn','mat','temp'],
    name:N('Sight Flow Indicator','Görsel Akış Göstergesi','مؤشر تدفق بصري','Смотровой индикатор потока'),
    desc:N('Sight glass flow indicator for visual verification of flow in closed pipes.','Kapalı borularda akışın görsel doğrulaması için gözetleme camı akış göstergesi.','مؤشر تدفق بزجاج رؤية للتحقق البصري من التدفق.','Смотровой индикатор потока для визуальной проверки.')},
  /* --- Level --- */
  {code:'NT-ULS',cat:'level',cfg:['range','output','ip','supply'],
    name:N('Ultrasonic Level Transmitter','Ultrasonik Seviye Transmitteri','مرسل مستوى بالموجات فوق الصوتية','Ультразвуковой уровнемер'),
    desc:N('Non-contact ultrasonic level transmitter for solids and liquids, 0–20m range.','Katı ve sıvılar için temassız ultrasonik seviye transmitteri, 0–20m aralık.','مرسل مستوى بالموجات فوق الصوتية للمواد الصلبة والسائلة، نطاق 0–20 م.','Бесконтактный ультразвуковой уровнемер для жидкостей и сыпучих, 0–20 м.')},
  {code:'NT-HLS',cat:'level',cfg:['range','output','ip','mat'],
    name:N('Hydrostatic Level Transmitter','Hidrostatik Seviye Transmitteri','مرسل مستوى هيدروستاتيكي','Гидростатический уровнемер'),
    desc:N('Submersible hydrostatic level transmitter for wells, tanks and reservoirs.','Kuyular, tanklar ve rezervuarlar için daldırmalı hidrostatik seviye transmitteri.','مرسل مستوى هيدروستاتيكي غاطس للآبار والخزانات.','Погружной гидростатический уровнемер для колодцев, резервуаров.')},
  {code:'NT-CLS',cat:'level',cfg:['range','output','ip'],
    name:N('Capacitive Level Transmitter','Kapasitif Seviye Transmitteri','مرسل مستوى سعوي','Ёмкостный уровнемер'),
    desc:N('Capacitive level transmitter for solids and liquids with high accuracy.','Katı ve sıvılar için yüksek hassasiyetli kapasitif seviye transmitteri.','مرسل مستوى سعوي للمواد الصلبة والسائلة بدقة عالية.','Ёмкостный уровнемер для сыпучих и жидкостей с высокой точностью.')},
  {code:'NT-VLS',cat:'switch',cfg:['conn','outSw','ip','temp'],
    name:N('Vibrating Fork Level Switch','Titreşimli Çatal Seviye Şalteri','مفتاح مستوى بشوكة اهتزازية','Вибрационный датчик-реле уровня'),
    desc:N('Vibrating fork level switch for point level detection on liquids and solids.','Sıvı ve katılarda nokta seviye tespiti için titreşimli çatal seviye şalteri.','مفتاح مستوى بشوكة اهتزازية لكشف مستوى النقطة.','Вибрационный камертонный датчик-реле уровня.')},
  {code:'NT-WLD',cat:'switch',cfg:['supply','outSw'],
    name:N('Water Leak Detector','Su Kaçak Dedektörü','كاشف تسرب المياه','Детектор утечки воды'),
    desc:N('Water leak detector with siren alarm and relay output for flood protection.','Sel koruması için siren alarm ve röle çıkışlı su kaçak dedektörü.','كاشف تسرب المياه مع إنذار صوتي وخرج ريليه.','Детектор утечки воды с сиреной и релейным выходом.')},
  /* --- Pressure --- */
  {code:'NT-DPT',cat:'process',cfg:['range','output','conn','ip'],
    name:N('Differential Pressure Transmitter','Fark Basınç Transmitteri','مرسل ضغط تفاضلي','Дифференциальный преобразователь давления'),
    desc:N('Differential pressure transmitter for filter monitoring, level and flow measurement.','Filtre izleme, seviye ve akış ölçümü için fark basınç transmitteri.','مرسل ضغط تفاضلي لمراقبة الفلاتر وقياس المستوى والتدفق.','Дифференциальный преобразователь давления для мониторинга фильтров.')},
  {code:'NT-EXNT',cat:'process',cfg:['range','output','conn','ip'],
    name:N('Ex-Proof Pressure Transmitter','Ex-Proof Basınç Transmitteri','مرسل ضغط مضاد للانفجار','Взрывозащищённый преобразователь давления'),
    desc:N('Ex-proof pressure transmitter for hazardous areas with flammable gases and liquids.','Yanıcı gaz ve sıvıların bulunduğu tehlikeli alanlar için Ex-proof basınç transmitteri.','مرسل ضغط مضاد للانفجار للمناطق الخطرة.','Взрывозащищённый преобразователь давления для опасных зон.')},
  {code:'NT-DMPX',cat:'process',cfg:['range','output','conn','ip'],
    name:N('Smart Pressure Transmitter','Akıllı Basınç Transmitteri','مرسل ضغط ذكي','Интеллектуальный преобразователь давления'),
    desc:N('Smart pressure transmitter with HART/Modbus, temperature compensation and high accuracy.','HART/Modbus, sıcaklık kompanzasyonu ve yüksek hassasiyetli akıllı basınç transmitteri.','مرسل ضغط ذكي مع HART/Modbus وتعويض الحرارة ودقة عالية.','Интеллектуальный преобразователь давления с HART/Modbus.')},
  {code:'NT-EPD',cat:'process',cfg:['range','output','conn','ip'],
    name:N('Pressure Transmitter with Display','Göstergeli Basınç Transmitteri','مرسل ضغط مع شاشة عرض','Преобразователь давления с дисплеем'),
    desc:N('Pressure transmitter with integrated LCD display and programmable switch outputs.','Entegre LCD ekran ve programlanabilir şalter çıkışlı basınç transmitteri.','مرسل ضغط مع شاشة LCD مدمجة ومخارج تبديل قابلة للبرمجة.','Преобразователь давления с встроенным ЖК-дисплеем.')},
  {code:'NT-PSW',cat:'switch',cfg:['range','outSw','conn'],
    name:N('Pressure Switch','Basınç Şalteri','مفتاح ضغط','Реле давления'),
    desc:N('Mechanical pressure switch for pump protection, safety and alarm.','Pompa koruması, güvenlik ve alarm için mekanik basınç şalteri.','مفتاح ضغط ميكانيكي لحماية المضخات والأمان والإنذار.','Механическое реле давления для защиты насосов и аварийной сигнализации.')},
  {code:'NT-MNM',cat:'process',cfg:['range','conn'],
    name:N('Pressure Gauge (Manometer)','Manometre','مقياس ضغط (مانومتر)','Манометр'),
    desc:N('Mechanical pressure gauge, standard/stainless/diaphragm types, 40–200mm dial.','Mekanik manometre, standart/paslanmaz/diyaframlı tipler, 40–200mm kadran.','مقياس ضغط ميكانيكي، أنواع قياسية/ستانلس/غشائية.','Механический манометр, стандартный/нержавеющий/мембранный, шкала 40–200 мм.')},
  /* --- Temperature --- */
  {code:'NT-TC',cat:'temp',cfg:['temp','conn','ip'],
    name:N('Thermocouple','Termokupl','مزدوجة حرارية','Термопара'),
    desc:N('Thermocouples type J/K/T/E/N/R/S/B for temperatures from −200°C to 2320°C.','−200°C ile 2320°C arası sıcaklıklar için J/K/T/E/N/R/S/B tipi termokupl.','مزدوجات حرارية نوع J/K/T/E/N/R/S/B لدرجات من −200 إلى 2320 درجة.','Термопары типов J/K/T/E/N/R/S/B для температур от −200 до 2320 °C.')},
  {code:'NT-RTD',cat:'temp',cfg:['temp','conn','output','ip'],
    name:N('Resistance Thermometer (PT100)','Rezistans Termometre (PT100)','مقاومة حرارية (PT100)','Термометр сопротивления (PT100)'),
    desc:N('Platinum resistance thermometer PT100/PT1000 for precise temperature measurement.','Hassas sıcaklık ölçümü için platin rezistans termometre PT100/PT1000.','مقاومة حرارية من البلاتين PT100/PT1000 لقياس دقيق.','Платиновый термометр сопротивления PT100/PT1000 для точных измерений.')},
  {code:'NT-HT',cat:'temp',cfg:['output','ip','supply'],
    name:N('Temperature & Humidity Sensor','Sıcaklık & Nem Sensörü','حساس حرارة ورطوبة','Датчик температуры и влажности'),
    desc:N('Capacitive temperature and humidity transmitter with display and relay outputs.','Ekranlı ve röle çıkışlı kapasitif sıcaklık ve nem transmitteri.','مرسل حرارة ورطوبة سعوي مع شاشة ومخارج ريليه.','Ёмкостный преобразователь температуры и влажности с дисплеем.')},
  /* --- Process Control --- */
  {code:'NT-TCS',cat:'control',cfg:['output','supply'],
    name:N('Flow Rate & Totaliser Indicator','Debi Göstergesi & Totalizatör','مؤشر معدل التدفق والمجمع','Индикатор расхода и сумматор'),
    desc:N('Panel-mount indicator for flow rate display and flow totalisation.','Debi gösterimi ve toplam akış için panel tipi gösterge.','مؤشر لوحة لعرض معدل التدفق وتجميع التدفق.','Панельный индикатор расхода и сумматор.')},
  {code:'NT-UPI',cat:'control',cfg:['output','supply'],
    name:N('Universal Input Indicator','Üniversal Giriş Göstergesi','مؤشر مدخل عالمي','Универсальный индикатор'),
    desc:N('Universal input indicator for temperature sensors and 4–20mA/0–10V signals.','Sıcaklık sensörleri ve 4–20mA/0–10V sinyalleri için üniversal giriş göstergesi.','مؤشر مدخل عالمي لحساسات الحرارة وإشارات 4–20 مللي أمبير.','Универсальный индикатор для датчиков температуры и сигналов 4–20 мА.')},
  {code:'NT-CTRL',cat:'control',cfg:['output','supply'],
    name:N('PID Controller','PID Kontrol Cihazı','وحدة تحكم PID','ПИД-регулятор'),
    desc:N('PID temperature and process controller with relay, analogue and RS485 outputs.','Röle, analog ve RS485 çıkışlı PID sıcaklık ve proses kontrol cihazı.','وحدة تحكم PID للحرارة والعمليات مع خرج ريليه وتناظري وRS485.','ПИД-регулятор температуры и процесса с релейным и аналоговым выходом.')},
  {code:'NT-EPD11',cat:'control',cfg:['output','supply'],
    name:N('Compact Universal Indicator','Kompakt Üniversal Gösterge','مؤشر عالمي مدمج','Компактный универсальный индикатор'),
    desc:N('Compact 4–20mA loop-powered indicator with dual alarm outputs for field display.','4–20mA loop beslemeli kompakt gösterge, çift alarm çıkışlı saha ekranı.','مؤشر مدمج يعمل بحلقة 4–20 مللي أمبير مع خرجي إنذار.','Компактный индикатор с питанием от токовой петли 4–20 мА и двумя выходами тревоги.')},
  {code:'NT-SCV',cat:'control',cfg:['output','supply'],
    name:N('Signal Converter','Sinyal Çevirici','محول إشارة','Преобразователь сигнала'),
    desc:N('DIN-rail signal converter for galvanic isolation and signal format conversion.','Galvanik izolasyon ve sinyal formatı dönüşümü için DIN ray sinyal çevirici.','محول إشارة على قضيب DIN للعزل الجلفاني وتحويل تنسيق الإشارة.','DIN-реечный преобразователь сигнала с гальванической развязкой.')},
  /* --- Mechanical Control --- */
  {code:'NT-ACT',cat:'mechanical',cfg:['conn','ip'],
    name:N('Actuator','Aktüatör','مشغل','Привод'),
    desc:N('Pneumatic and electric actuators for valves, ISO 5211 compatible.','Vanalar için pnömatik ve elektrik aktüatörler, ISO 5211 uyumlu.','مشغلات هوائية وكهربائية للصمامات، متوافقة مع ISO 5211.','Пневматические и электрические приводы для арматуры, ISO 5211.')},
  {code:'NT-SOL',cat:'mechanical',cfg:['dn','mat','supply'],
    name:N('Solenoid Valve','Solenoid Vana','صمام ملفي','Электромагнитный клапан'),
    desc:N('Solenoid valves in brass, stainless steel or aluminium body for on-off duty.','Açma-kapama için pirinç, paslanmaz veya alüminyum gövdeli solenoid vanalar.','صمامات ملفية بجسم نحاسي أو ستانلس أو ألومنيوم.','Электромагнитные клапаны с латунным, нержавеющим или алюминиевым корпусом.')},
  {code:'NT-VLV',cat:'mechanical',cfg:['dn','mat','pn'],
    name:N('Valve','Vana','صمام','Клапан'),
    desc:N('Ball, butterfly, globe and knife gate valves with actuator compatibility.','Aktüatör uyumlu küresel, kelebek, glob ve bıçak sürgü vanalar.','صمامات كروية وفراشة وكروية وبوابة بسكين متوافقة مع المشغلات.','Шаровые, дисковые, вентильные и ножевые задвижки с приводом.')},
  /* --- Handheld Instruments --- */
  {code:'NT-IRT',cat:'handheld',cfg:[],
    name:N('Infrared Thermometer','Kızılötesi Termometre','مقياس حرارة بالأشعة تحت الحمراء','Инфракрасный термометр'),
    desc:N('Non-contact infrared thermometer, −60 to +2000°C range.','Temassız kızılötesi termometre, −60 ile +2000°C aralık.','مقياس حرارة بالأشعة تحت الحمراء بدون تلامس.','Бесконтактный инфракрасный термометр, от −60 до +2000 °C.')},
  {code:'NT-ANM',cat:'handheld',cfg:[],
    name:N('Anemometer','Anemometre','مقياس سرعة الرياح','Анемометр'),
    desc:N('Handheld anemometer for air velocity, temperature and humidity measurement.','Hava hızı, sıcaklık ve nem ölçümü için elde taşınır anemometre.','مقياس سرعة الرياح المحمول لقياس سرعة الهواء والحرارة والرطوبة.','Анемометр для измерения скорости воздуха, температуры и влажности.')},
  {code:'NT-SLM',cat:'handheld',cfg:[],
    name:N('Sound Level Meter','Desibel Ölçer','مقياس مستوى الصوت','Шумомер'),
    desc:N('Compact sound level meter for occupational health and noise monitoring.','İş sağlığı ve gürültü izleme için kompakt desibel ölçer.','مقياس مستوى صوت مدمج للصحة المهنية ومراقبة الضوضاء.','Компактный шумомер для охраны труда и мониторинга шума.')},
  {code:'NT-GLD',cat:'handheld',cfg:[],
    name:N('Gas Leak Detector','Gaz Kaçak Dedektörü','كاشف تسرب الغاز','Детектор утечки газа'),
    desc:N('Handheld gas leak detector for CO, methane, propane and ammonia.','CO, metan, propan ve amonyak için elde taşınır gaz kaçak dedektörü.','كاشف تسرب غاز محمول لأول أكسيد الكربون والميثان والبروبان.','Портативный детектор утечки газов: CO, метан, пропан, аммиак.')},
  {code:'NT-PHA',cat:'process',cfg:['output','supply','ip'],
    name:N('Online pH / ORP Analyser','Online pH / ORP Analizörü','محلل pH / ORP أونلاين','Онлайн-анализатор pH/ORP'),
    desc:N('Panel-mount online pH/ORP/temperature analyser. Range −2…16 pH, ±0.05 pH accuracy. 2× relay, 2× 4-20 mA, RS485 Modbus. IP65 ABS housing, 90-260 VAC. 1000-record data logger.','Panel tipi online pH/ORP/sıcaklık analizörü. −2…16 pH aralığı, ±0.05 pH doğruluk. 2× röle, 2× 4-20 mA, RS485 Modbus. IP65 ABS gövde, 90-260 VAC. 1000 kayıt hafıza.','محلل pH/ORP/درجة حرارة أونلاين للوحة. نطاق −2…16 pH، دقة ±0.05 pH. 2× مرحل، 2× 4-20 مللي أمبير، RS485 Modbus. IP65 غلاف ABS، 90-260 فولت. 1000 سجل.','Панельный онлайн-анализатор pH/ORP/температуры. Диапазон −2…16 pH, точность ±0,05 pH. 2× реле, 2× 4-20 мА, RS485 Modbus. IP65, корпус ABS, 90-260 В. 1000 записей.')},
  {code:'NT-ECA',cat:'process',cfg:['output','supply','ip'],
    name:N('Online EC / TDS / Salinity Analyser','Online İletkenlik / TDS Analizörü','محلل التوصيل الكهربائي / TDS أونلاين','Онлайн-анализатор EC/TDS/солёности'),
    desc:N('Panel-mount online conductivity/TDS/salinity/resistivity/temperature analyser. EC 0–2000 mS/cm, TDS 0–130 000 ppm. ±1% accuracy. 2× relay, 2× 4-20 mA, RS485 Modbus. IP65, 90-260 VAC.','Panel tipi online iletkenlik/TDS/tuzluluk/direnç/sıcaklık analizörü. EC 0–2000 mS/cm, TDS 0–130 000 ppm. ±%1 doğruluk. 2× röle, 2× 4-20 mA, RS485 Modbus. IP65, 90-260 VAC.','محلل أونلاين للتوصيل الكهربائي/TDS/الملوحة/المقاومة/الحرارة. EC 0–2000 مللي سيمنز/سم، TDS 0–130,000 جزء بالمليون. دقة ±1%. 2× مرحل، 2× 4-20 مللي أمبير، RS485.','Панельный анализатор проводимости/TDS/солёности/удельного сопротивления. EC 0–2000 мС/см, TDS 0–130 000 ppm. Точность ±1%. 2× реле, 2× 4-20 мА, RS485.')},
  {code:'NT-PHE',cat:'process',cfg:['temp','mat'],
    name:N('pH / ORP Electrode (Probe)','pH / ORP Elektrotu (Prob)','قطب كهربائي pH / ORP','Электрод pH/ORP (зонд)'),
    desc:N('Industrial pH/ORP electrode with glass, PVC or PTFE body. Range 0–14 pH, ±0.1 pH. Temperature compensation via PT1000/NTC10K. Models for high-temperature (130 °C) and corrosive media.','Endüstriyel pH/ORP elektrotu; cam, PVC veya PTFE gövde. 0–14 pH aralığı, ±0.1 pH. PT1000/NTC10K sıcaklık kompanzasyonu. Yüksek sıcaklık (130 °C) ve korozif ortam modelleri mevcut.','قطب pH/ORP صناعي بجسم زجاجي أو PVC أو PTFE. نطاق 0–14 pH، دقة ±0.1 pH. تعويض حرارة PT1000/NTC10K. طرازات للحرارة العالية (130 °C) والأوساط التآكلية.','Промышленный электрод pH/ORP: стекло, ПВХ или PTFE. Диапазон 0–14 pH, ±0,1 pH. Компенсация температуры PT1000/NTC10K. Модели для высоких температур (130 °C) и агрессивных сред.')},
  {code:'NT-ECE',cat:'process',cfg:['mat'],
    name:N('Conductivity Electrode (Probe)','İletkenlik Elektrotu (Prob)','قطب التوصيل الكهربائي','Электрод проводимости (зонд)'),
    desc:N('Industrial conductivity electrode, cell constant 1.0, range 0–20 mS/cm. SS316L or titanium alloy body. Max pressure 0.3 MPa. For water treatment, ultra-pure water and chemical processes.','Endüstriyel iletkenlik elektrotu, hücre sabiti 1.0, 0–20 mS/cm aralığı. SS316L veya titanyum alaşım gövde. Maks 0.3 MPa. Su arıtma, ultra saf su ve kimyasal prosesler için.','قطب توصيل كهربائي صناعي، ثابت الخلية 1.0، نطاق 0–20 مللي سيمنز/سم. جسم SS316L أو سبيكة تيتانيوم. ضغط أقصى 0.3 ميجاباسكال. لمعالجة المياه والعمليات الكيميائية.','Промышленный электрод проводимости, константа ячейки 1,0, диапазон 0–20 мС/см. Корпус SS316L или титановый сплав. Макс. давление 0,3 МПа. Для водоподготовки и химических процессов.')},
  {code:'NT-AQM',cat:'handheld',cfg:[],
    name:N('Portable pH / EC / TDS Meter','Portatif pH / EC / TDS Ölçer','مقياس pH / EC / TDS محمول','Портативный pH/EC/TDS-метр'),
    desc:N('Handheld multi-parameter water quality meter for pH, EC, TDS, salinity and temperature. Digital probe, ATC, IP67 rated, ideal for field and laboratory use.','pH, EC, TDS, tuzluluk ve sıcaklık için elde taşınır çoklu parametre su kalitesi ölçer. Dijital prob, ATC, IP67, saha ve laboratuvar kullanımına uygun.','مقياس جودة مياه محمول متعدد المعايير: pH، EC، TDS، الملوحة والحرارة. مسبار رقمي، ATC، IP67، للاستخدام الميداني والمختبري.','Портативный мультипараметрический анализатор воды: pH, EC, TDS, солёность, температура. Цифровой зонд, АТС, IP67, для полевых и лабораторных работ.')},
  {code:'NT-TAO',cat:'handheld',cfg:[],
    name:N('GPS Field Area Meter','GPS Alan Ölçer','مقياس مساحة الحقول بالـ GPS','GPS-измеритель площади'),
    desc:N('Handheld GPS area measurement device for agricultural land, construction sites and forestry. Walk or drive the perimeter to compute area and distance. Built-in rechargeable battery, colour LCD, data storage.','Tarım arazisi, şantiye ve ormancılık için elde taşınır GPS alan ölçüm cihazı. Çevre dolaşarak alan ve mesafe hesaplar. Dahili şarj edilebilir pil, renkli LCD, veri depolama.','جهاز قياس مساحة GPS محمول للأراضي الزراعية ومواقع البناء والغابات. امشِ أو قُد حول المحيط لحساب المساحة والمسافة. بطارية قابلة للشحن، شاشة LCD ملونة، تخزين بيانات.','GPS-прибор для измерения площади сельхозугодий, строительных участков и лесных массивов. Обход периметра для расчёта площади и расстояния. Встроенный аккумулятор, цветной ЖК-дисплей, хранение данных.')},
  {code:'NT-DLG',cat:'handheld',cfg:['supply'],
    name:N('Data Recorder / Datalogger','Veri Kaydedici / Datalogger','مسجل بيانات','Регистратор данных'),
    desc:N('Multi-channel data recorder and datalogger with LCD display and USB/SD storage.','LCD ekran ve USB/SD depolamalı çok kanallı veri kaydedici.','مسجل بيانات متعدد القنوات مع شاشة LCD وتخزين USB/SD.','Многоканальный регистратор данных с ЖК-дисплеем и USB/SD.')},
  /* --- Linear Encoders & Position Sensors --- */
  {code:'NT-MLC',cat:'control',cfg:['range','output','ip'],
    name:N('Magnetic Linear Encoder','Manyetik Lineer Enkoder','مشفر خطي مغناطيسي','Магнитный линейный энкодер'),
    desc:N('Compact magnetic linear encoder with bearing-mounted closed profile for position measurement up to 20 m.','20 m\'ye kadar pozisyon ölçümü için yataklı kapalı profilli kompakt manyetik lineer enkoder.','مشفر خطي مغناطيسي مدمج بملف مغلق محمل على محامل لقياس الموضع حتى 20 م.','Компактный магнитный линейный энкодер с подшипниковым профилем для измерения позиции до 20 м.')},
  {code:'NT-MLS-E',cat:'control',cfg:['range','output','ip'],
    name:N('Magnetic Reader Sensor','Manyetik Okuyucu Sensör','حساس قراءة مغناطيسي','Магнитный датчик-считыватель'),
    desc:N('Magnetic reader sensor on magnetic tape for contactless linear position measurement up to 100 m.','100 m\'ye kadar temassız lineer pozisyon ölçümü için manyetik bant üzerinde çalışan okuyucu sensör.','حساس قراءة مغناطيسي على شريط مغناطيسي لقياس الموضع الخطي بدون تلامس حتى 100 م.','Магнитный датчик-считыватель на магнитной ленте для бесконтактного измерения позиции до 100 м.')},
  {code:'NT-PLC',cat:'control',cfg:['range','output'],
    name:N('Potentiometric Linear Ruler','Potansiyometrik Lineer Cetvel','مسطرة خطية بوتنسيومترية','Потенциометрическая линейная линейка'),
    desc:N('Potentiometric linear position sensor for machine tools, hydraulic cylinders and injection moulding.','Tezgahlar, hidrolik silindirler ve enjeksiyon kalıpları için potansiyometrik lineer pozisyon sensörü.','حساس موضع خطي بوتنسيومتري للأدوات الآلية والأسطوانات الهيدروليكية.','Потенциометрический линейный датчик положения для станков и гидроцилиндров.')},
  {code:'NT-MSC',cat:'control',cfg:['range','output','ip'],
    name:N('Magnetostrictive Linear Ruler','Manyetostriktif Lineer Cetvel','مسطرة خطية مغناطيسية انقباضية','Магнитострикционная линейная линейка'),
    desc:N('Magnetostrictive linear position sensor for hydraulic cylinders and high-pressure environments.','Hidrolik silindirler ve yüksek basınçlı ortamlar için manyetostriktif lineer pozisyon sensörü.','حساس موضع خطي مغناطيسي انقباضي للأسطوانات الهيدروليكية والبيئات عالية الضغط.','Магнитострикционный датчик положения для гидроцилиндров и высокого давления.')},
  {code:'NT-OLC',cat:'control',cfg:['range','output'],
    name:N('Optical Linear Encoder','Optik Lineer Enkoder','مشفر خطي بصري','Оптический линейный энкодер'),
    desc:N('Bearing-mounted optical linear encoder for high-precision CNC machines and coordinate measurement.','Yüksek hassasiyetli CNC tezgahları ve koordinat ölçümü için yataklı optik lineer enkoder.','مشفر خطي بصري محمل على محامل لآلات CNC عالية الدقة.','Оптический линейный энкодер на подшипниках для высокоточных станков с ЧПУ.')},
  {code:'NT-INS',cat:'control',cfg:['range','output','ip'],
    name:N('Inclinometer / Tilt Sensor','Eğim Sensörü (İnklinometre)','حساس ميل (إنكلينومتر)','Инклинометр / Датчик наклона'),
    desc:N('MEMS-based inclinometer for slope monitoring, platform levelling and mobile machinery.','Eğim izleme, platform tesviyesi ve mobil makine için MEMS tabanlı eğim sensörü.','حساس ميل قائم على MEMS لمراقبة الانحدار وتسوية المنصات والآلات المتنقلة.','МЭМС-инклинометр для мониторинга уклонов, выравнивания платформ и мобильной техники.')},
  /* --- Differential Pressure Switches --- */
  {code:'NT-DPS-A',cat:'process',cfg:['range','outSw'],
    name:N('Air Differential Pressure Switch','Hava Fark Basınç Şalteri','مفتاح فرق ضغط الهواء','Реле перепада давления воздуха'),
    desc:N('Differential pressure switch for HVAC filter clogging detection and air handling unit monitoring.','Klima filtre tıkanma tespiti ve hava işleme ünitesi izleme için fark basınç şalteri.','مفتاح فرق ضغط لكشف انسداد فلاتر التكييف ومراقبة وحدات معالجة الهواء.','Реле перепада давления для контроля засорения фильтров HVAC и вентиляционных установок.')},
  {code:'NT-DPS-L',cat:'process',cfg:['range','outSw','ip'],
    name:N('Liquid Differential Pressure Switch','Sıvı Fark Basınç Şalteri','مفتاح فرق ضغط السوائل','Реле перепада давления жидкости'),
    desc:N('Compact differential pressure switch for liquid filter monitoring and industrial process control.','Sıvı filtre izleme ve endüstriyel proses kontrolü için kompakt fark basınç şalteri.','مفتاح فرق ضغط مدمج لمراقبة فلاتر السوائل والتحكم في العمليات الصناعية.','Компактное реле перепада давления для мониторинга жидкостных фильтров.')},
  /* --- Gas Detection --- */
  {code:'NT-CO2',cat:'process',cfg:['output','supply','ip'],
    name:N('CO₂ / Temp / Humidity Transmitter','CO₂ / Sıcaklık / Nem Transmitteri','مرسل CO₂ / حرارة / رطوبة','Преобразователь CO₂ / темп. / влажн.'),
    desc:N('Wall-mount CO₂, temperature and humidity transmitter for indoor air quality and greenhouses.','İç hava kalitesi ve seralar için duvar tipi CO₂, sıcaklık ve nem transmitteri.','مرسل CO₂ والحرارة والرطوبة للتركيب الجداري لجودة الهواء الداخلي والبيوت الزجاجية.','Настенный преобразователь CO₂, температуры и влажности для мониторинга воздуха.')},
  {code:'NT-GDC',cat:'process',cfg:['range','output','ip'],
    name:N('Catalytic Gas Detector','Katalitik Gaz Dedektörü','كاشف غاز تحفيزي','Каталитический газоанализатор'),
    desc:N('Fixed catalytic (pellistor) gas detector for LEL monitoring of combustible gases.','Yanıcı gazların LEL izlemesi için sabit katalitik (pelistör) gaz dedektörü.','كاشف غاز تحفيزي (بيليستور) ثابت لمراقبة حد الانفجار السفلي للغازات القابلة للاشتعال.','Стационарный каталитический газоанализатор для мониторинга НКПР горючих газов.')},
  {code:'NT-GDI',cat:'process',cfg:['range','output','ip'],
    name:N('Infrared Gas Detector','Kızılötesi Gaz Dedektörü','كاشف غاز بالأشعة تحت الحمراء','Инфракрасный газоанализатор'),
    desc:N('Fixed infrared (NDIR) gas detector for combustible and CO₂ gases, immune to sensor poisoning.','Yanıcı ve CO₂ gazları için sabit kızılötesi (NDIR) gaz dedektörü, sensör zehirlenmesine dayanıklı.','كاشف غاز ثابت بالأشعة تحت الحمراء (NDIR) للغازات القابلة للاشتعال وCO₂.','Стационарный ИК-газоанализатор (NDIR) для горючих газов и CO₂, устойчив к отравлению.')},
  {code:'NT-GDE',cat:'process',cfg:['range','output','ip'],
    name:N('Electrochemical Gas Detector','Elektrokimyasal Gaz Dedektörü','كاشف غاز كهروكيميائي','Электрохимический газоанализатор'),
    desc:N('Fixed electrochemical gas detector for toxic gases (CO, H₂S, O₂, NH₃) in confined spaces.','Kapalı alanlarda toksik gazlar (CO, H₂S, O₂, NH₃) için sabit elektrokimyasal gaz dedektörü.','كاشف غاز كهروكيميائي ثابت للغازات السامة (CO، H₂S، O₂، NH₃) في الأماكن المحصورة.','Стационарный электрохимический газоанализатор для токсичных газов (CO, H₂S, O₂, NH₃).')},
  /* --- Valves --- */
  {code:'NT-SOL-L',cat:'mechanical',cfg:['dn','mat','supply'],
    name:N('Large Solenoid Valve','Büyük Ölçü Solenoid Vana','صمام ملفي كبير','Электромагнитный клапан большого диаметра'),
    desc:N('Large-bore solenoid valve (DN50–DN200) for water, irrigation and fire suppression systems.','Su, sulama ve yangın söndürme sistemleri için büyük çaplı solenoid vana (DN50–DN200).','صمام ملفي كبير القطر (DN50–DN200) للمياه والري وأنظمة إطفاء الحريق.','Соленоидный клапан большого диаметра (DN50–DN200) для воды, ирригации и пожаротушения.')},
  {code:'NT-BDV',cat:'mechanical',cfg:['dn','mat'],
    name:N('Pulse Jet Valve (Burst Disc)','Patlaç Valf','صمام نفث نبضي','Импульсный клапан (мембранный)'),
    desc:N('Pulse jet valve for bag filter dust collectors in cement, mining and powder processing.','Çimento, madencilik ve toz işleme tesislerinde torba filtre toz toplayıcıları için patlaç valf.','صمام نفث نبضي لجامعات الغبار بالفلاتر الكيسية في الأسمنت والتعدين.','Импульсный клапан для рукавных фильтров в цементной, горнодобывающей и порошковой промышленности.')},
  /* --- Process Control --- */
  {code:'NT-TMR',cat:'control',cfg:['output','supply'],
    name:N('Timer / Chronometer','Timer / Kronometre','مؤقت / كرونومتر','Таймер / Хронометр'),
    desc:N('Panel-mount digital timer and chronometer with relay outputs and multiple timing modes.','Röle çıkışlı ve çoklu zamanlama modlu panel tipi dijital timer ve kronometre.','مؤقت رقمي وكرونومتر للوحة مع مخارج ريليه وأوضاع توقيت متعددة.','Панельный цифровой таймер и хронометр с релейными выходами и режимами отсчёта.')},
  {code:'NT-STC',cat:'control',cfg:['range','output','supply'],
    name:N('Step Controller','Adım Kontrol Cihazı','جهاز تحكم بالخطوات','Программный регулятор'),
    desc:N('Step (profile) controller for ramp/soak temperature programmes and kiln firing curves.','Rampa/tutma sıcaklık programları ve fırın pişirme eğrileri için adım (profil) kontrol cihazı.','جهاز تحكم بالخطوات (الملف الشخصي) لبرامج درجة الحرارة المنحدرة/الثابتة ومنحنيات الأفران.','Программный (профильный) регулятор для термических режимов обжига и нагрева.')}
];
const BYCODE = {}; PRODUCTS.forEach(p=>BYCODE[p.code]=p);

/* ---------- currency ---------- */
const CUR = {USD:{sym:'$',pre:true}, EUR:{sym:'€',pre:true}, TRY:{sym:'₺',pre:true}};
const YERLI = {en:'Made in Türkiye',tr:'Yerli Malı',ar:'صنع في تركيا',ru:'Сделано в Турции'};
const CERT = {
  en:{turkak:'TÜRKAK Calibration · ISO/IEC 17025 (AB-0354-K)',ce:'CE · Factory Calibration Certificate'},
  tr:{turkak:'TÜRKAK Kalibrasyon · ISO/IEC 17025 (AB-0354-K)',ce:'CE · Fabrika Kalibrasyon Sertifikası'},
  ar:{turkak:'معايرة TÜRKAK · ISO/IEC 17025 (AB-0354-K)',ce:'CE · شهادة معايرة المصنع'},
  ru:{turkak:'Калибровка TÜRKAK · ISO/IEC 17025 (AB-0354-K)',ce:'CE · Заводской калибровочный сертификат'}
};
function isTurkak(code,dn){
  if(code!=='NT-VMF'&&code!=='NT-VMF-W') return false;
  if(!dn) return false;
  const n=parseInt(dn.replace('DN',''),10);
  return n<=200;
}
function slug(code){ return code.replace(/[^A-Za-z0-9]+/g,'-'); }

/* ---- admin UI language (follows site pm_lang) ---- */
function uiLang(){ var l=localStorage.getItem('pm_lang')||'en'; return LANG_META[l]?l:'en'; }
const AUI = {
  en:{empty:'No products added yet. Pick instruments from the left to start your quotation.',hintAdd:'Click products on the left to add',items:function(n){return n+' item(s)';},qty:'Qty',unit:function(c){return 'Unit Price ('+c+')';}},
  tr:{empty:'Henüz ürün eklenmedi. Teklifinize başlamak için soldan cihaz seçin.',hintAdd:'Eklemek için soldaki ürünlere tıklayın',items:function(n){return n+' kalem';},qty:'Adet',unit:function(c){return 'Birim Fiyat ('+c+')';}},
  ar:{empty:'لم تتم إضافة منتجات بعد. اختر الأجهزة من اليسار لبدء عرضك.',hintAdd:'انقر على المنتجات يسارًا للإضافة',items:function(n){return n+' بند';},qty:'الكمية',unit:function(c){return 'سعر الوحدة ('+c+')';}},
  ru:{empty:'Товары ещё не добавлены. Выберите приборы слева, чтобы начать.',hintAdd:'Нажмите товары слева, чтобы добавить',items:function(n){return n+' поз.';},qty:'Кол-во',unit:function(c){return 'Цена за ед. ('+c+')';}}
};
function aui(){ return AUI[uiLang()]||AUI.en; }

/* ---------- state ---------- */
const DRAFT_KEY='pm_quote_draft_v1';
const LIST_KEY='pm_quote_list_v2';
function pad(n){return String(n).padStart(2,'0');}
function iso(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());}
function genNo(){return 'NT-Q-'+new Date().getFullYear()+'-'+String(Math.floor(1000+Math.random()*9000));}
function fmtDate(s){ if(!s) return '—'; const [y,m,d]=s.split('-'); return d+'.'+m+'.'+y; }

function defaultState(){
  const today=new Date(); const valid=new Date(Date.now()+30*86400000);
  return {lang:'en', currency:'USD', review:false,
    meta:{no:genNo(), date:iso(today), valid:iso(valid), by:''},
    cust:{company:'',contact:'',reqBy:'',custSign:'',country:'',email:'',project:''},
    discount:0, vat:0, travel:0, terms:{}, items:[]};
}
let S;
try{ S = JSON.parse(localStorage.getItem(DRAFT_KEY)); }catch(e){ S=null; }
if(!S || !S.meta) S = defaultState();
if(!S.terms) S.terms={};
if(!S.cust.reqBy) S.cust.reqBy='';
if(!S.cust.custSign) S.cust.custSign='';
// migrate: add priceMode to old items
if(S.items) S.items.forEach(function(it){ if(!it.priceMode) it.priceMode = (parseFloat(it.unit)||0)===0 ? 'manual' : 'custom'; });
function updateQBar(){
  const code=$('#qbarCode'); if(code) code.textContent=S.meta.no||'—';
  const ci=$('#qbarCust'); if(ci && ci!==document.activeElement) ci.value=S.cust.company||'';
}
let _archTimer;
function save(){
  try{ localStorage.setItem(DRAFT_KEY, JSON.stringify(S)); }catch(e){}
  updateQBar();
  clearTimeout(_archTimer);
  _archTimer=setTimeout(()=>{
    saveToArchive(); renderArchive();
    const st=$('#qbarStatus');
    if(st){st.className='qbar-status vis';clearTimeout(st._t);st._t=setTimeout(()=>{st.className='qbar-status';},2200);}
  },1800);
}

/* ---- quote archive ---- */
function getList(){ try{ return JSON.parse(localStorage.getItem(LIST_KEY)||'[]'); }catch(e){ return []; } }
function saveToArchive(){
  const list=getList();
  const entry={code:S.meta.no, date:S.meta.date, customer:S.cust.company||'—', country:S.cust.country||'', currency:S.currency, grand:totals().grand, data:JSON.stringify(S)};
  const idx=list.findIndex(x=>x.code===entry.code);
  if(idx>=0) list[idx]=entry; else list.unshift(entry);
  localStorage.setItem(LIST_KEY, JSON.stringify(list.slice(0,100)));
}
function renderArchive(){
  const list=getList();
  const ul=$('#archiveList');
  if(!ul) return;
  if(!list.length){ ul.innerHTML='<div style="padding:20px;text-align:center;color:var(--ink-3);font-size:13px">No saved quotes yet.</div>'; return; }
  ul.innerHTML=list.map(q=>`
    <div class="arch-item" data-load="${esc(q.code)}">
      <div class="arch-code">${esc(q.code)}</div>
      <div class="arch-cust">${esc(q.customer)}${q.country?' · '+esc(q.country):''}</div>
      <div class="arch-meta">${fmtDate(q.date)} · ${q.currency} ${(q.grand||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
    </div>`).join('');
}

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
function money(n){ const c=CUR[S.currency]; const v=(n||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); return c.pre? c.sym+v : v+' '+c.sym; }
function uid(){ return 'i'+Math.random().toString(36).slice(2,9); }
function esc(s){ return (s==null?'':String(s)).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function specOf(it){ const p=BYCODE[it.code]; return p.cfg.map(f=>it.cfg[f]).filter(Boolean).join(' · '); }
function lineTotal(it){ return (parseFloat(it.qty)||0)*(parseFloat(it.unit)||0); }
function subtotal(){ return S.items.reduce((a,it)=>a+lineTotal(it),0); }
function totals(){ const sub=subtotal(); const disc=sub*(parseFloat(S.discount)||0)/100; const net=sub-disc; const travel=parseFloat(S.travel)||0; const vat=net*(parseFloat(S.vat)||0)/100; return {sub,disc,net,travel,vat,grand:net+travel+vat}; }

/* ============================================================
   PALETTE
   ============================================================ */
let palCat='all', palQ='';
function renderPalette(){
  const list=PRODUCTS.filter(p=>(palCat==='all'||p.cat===palCat) &&
    (!palQ || (p.code+' '+p.name.en).toLowerCase().includes(palQ.toLowerCase())));
  const L=uiLang();
  $('#palList').innerHTML = list.map(p=>`
    <div class="pitem" data-add="${esc(p.code)}">
      <span class="pic" style="position:relative;overflow:hidden">
        <img src="assets/products/${slug(p.code)}.png" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:3px;background:#fff;border-radius:8px" onerror="this.remove()">
        ${ICONS[p.cat]}
      </span>
      <span class="pmeta"><b>${esc(p.name[L])}</b><span>${esc(p.code)}</span></span>
      <span class="padd">+</span>
    </div>`).join('');
  $('#palCount').textContent=list.length;
}

/* ============================================================
   LINE ITEM EDITOR
   ============================================================ */
function addItem(code){
  const p=BYCODE[code]; if(!p) return;
  const cfg={}; p.cfg.forEach(f=>cfg[f]=FIELDS[f].opts[0]);
  const autoPrice = calcPrice(code, cfg);
  S.items.push({uid:uid(), code, cfg, qty:1, unit:autoPrice||0, priceMode:autoPrice?'auto':'manual'});
  save(); renderItems(); renderTotals();
}
function renderItems(){
  const box=$('#itemsBox');
  if(!S.items.length){
    box.innerHTML=`<div class="items-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>
      <p>${esc(aui().empty)}</p></div>`;
    $('#itemHint').textContent=aui().hintAdd;
    return;
  }
  $('#itemHint').textContent=aui().items(S.items.length);
  const L=uiLang();
  box.innerHTML = S.items.map((it,i)=>{
    const p=BYCODE[it.code];
    const cfgHtml=p.cfg.map(f=>`
      <div class="cfg-pick"><label>${esc(FIELDS[f].label[L])}</label>
        <select data-uid="${it.uid}" data-field="${f}">
          ${FIELDS[f].opts.map(o=>`<option${o===it.cfg[f]?' selected':''}>${esc(o)}</option>`).join('')}
        </select></div>`).join('');
    return `<div class="litem">
      <div class="litem-top">
        <span class="litem-no">${String(i+1).padStart(2,'0')}</span>
        <div class="litem-main" style="display:flex;gap:12px;align-items:flex-start">
          <img src="assets/products/${slug(it.code)}.png" alt="" style="width:56px;height:56px;object-fit:contain;border:1px solid var(--line);border-radius:8px;background:#fff;flex:none" onerror="this.remove()">
          <div style="flex:1;min-width:0">
          <h4>${esc(p.name[L])} <span class="lcode">${esc(p.code)}</span></h4>
          <div class="litem-desc">${esc(p.desc[L])}</div>
          ${(()=>{const dn=it.cfg.dn;const w=dn&&getWeight(it.code,dn);return w?`<span class="ship-badge">${w.kg} kg · ${calcDesi(w.box)} desi · ${w.box.join('×')} cm</span>`:''})()}
          <div class="cfg-row" style="margin-top:10px">${cfgHtml}</div>
          </div>
        </div>
        <button class="litem-remove" data-remove="${it.uid}" title="Remove">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>
        </button>
      </div>
      <div class="litem-money">
        <div class="money-field qty"><label>${esc(aui().qty)}</label><input type="number" min="1" step="1" value="${it.qty}" data-qty="${it.uid}"></div>
        <div class="money-field"><label>${esc(aui().unit(S.currency))}</label><div style="position:relative;display:flex;align-items:center;gap:4px"><input class="price-input" type="number" min="0" step="0.01" value="${it.unit}" data-unit="${it.uid}" placeholder="0.00">${it.priceMode==='auto'?'<span class="price-mode-badge auto">auto</span>':it.priceMode==='custom'?`<span class="price-mode-badge custom">custom</span><button class="price-reset" data-reset="${it.uid}" title="Reset to auto price">↻</button>`:''}</div></div>
        <div class="litem-total" data-total="${it.uid}">${money(lineTotal(it))}</div>
      </div>
    </div>`;
  }).join('');
}

/* ============================================================
   TOTALS
   ============================================================ */
function renderTotals(){
  const t=totals();
  $('#tSub').textContent=money(t.sub);
  $('#tDiscVal').textContent='− '+money(t.disc);
  $('#tVatVal').textContent='+ '+money(t.vat);
  $('#tGrand').textContent=money(t.grand);
  renderShipping();
}

/* ============================================================
   SHIPPING WEIGHT & DESI CALCULATOR
   ============================================================ */
function renderShipping(){
  const box=$('#shippingBox'); if(!box) return;
  const rows=[];
  let totalKg=0, totalDesi=0, hasData=false;
  S.items.forEach(it=>{
    const p=BYCODE[it.code]; if(!p) return;
    const dn=it.cfg&&it.cfg.dn;
    const w=dn?getWeight(it.code,dn):null;
    const qty=parseInt(it.qty)||1;
    if(w){
      const desi=calcDesi(w.box);
      const rowKg=+(w.kg*qty).toFixed(1);
      const rowDesi=desi*qty;
      totalKg+=rowKg; totalDesi+=rowDesi; hasData=true;
      rows.push(`<tr><td>${qty}×</td><td>${esc(p.name.en)}</td><td><b>${dn}</b></td><td>${w.box.join(' × ')} cm</td><td style="text-align:right">${rowKg} kg</td><td style="text-align:right">${rowDesi} desi</td></tr>`);
    } else if(p.cfg.includes('dn')){
      rows.push(`<tr style="opacity:.5"><td>${qty}×</td><td>${esc(p.name.en)}</td><td>—</td><td>—</td><td style="text-align:right">—</td><td style="text-align:right">—</td></tr>`);
    }
  });
  if(!rows.length){
    box.innerHTML='<div style="padding:18px;color:var(--ink-3);font-size:13px">Add products with DN size to see weight & shipping calculations.</div>';
    return;
  }
  box.innerHTML=`<table class="ship-tbl">
    <thead><tr><th>Qty</th><th>Product</th><th>DN</th><th>Box (L×W×H)</th><th style="text-align:right">Weight</th><th style="text-align:right">Vol. Weight</th></tr></thead>
    <tbody>${rows.join('')}
    <tr class="ship-total"><td colspan="4">TOTAL</td><td style="text-align:right"><b>${totalKg.toFixed(1)} kg</b></td><td style="text-align:right"><b>${totalDesi} desi</b></td></tr>
    </tbody></table>
    ${totalKg>0?`<div style="padding:8px 14px;font-size:12px;color:var(--ink-3)">Courier uses whichever is greater: actual weight (${totalKg.toFixed(1)} kg) or volumetric weight (${totalDesi} desi).</div>`:''}`;
}
function getShippingText(){
  const lines=['NET FLOW — Shipping Details',''];
  let totalKg=0,totalDesi=0;
  S.items.forEach(it=>{
    const p=BYCODE[it.code]; if(!p) return;
    const dn=it.cfg&&it.cfg.dn;
    const w=dn?getWeight(it.code,dn):null;
    const qty=parseInt(it.qty)||1;
    if(w){
      const desi=calcDesi(w.box);
      const rk=+(w.kg*qty).toFixed(1); const rd=desi*qty;
      totalKg+=rk; totalDesi+=rd;
      lines.push(`${qty}x ${dn} ${p.name.en} — ${rk} kg, ${rd} desi (${w.box.join('×')} cm)`);
    }
  });
  if(!lines.length) return '';
  lines.push('─────────────');
  lines.push(`TOTAL: ${totalKg.toFixed(1)} kg | ${totalDesi} desi (volumetric)`);
  return lines.join('\n');
}

/* ============================================================
   QUOTATION DOCUMENT (print/PDF)
   ============================================================ */
function buildDoc(){
  const L=S.lang, t=T[L], meta=LANG_META[L];
  const tot=totals();
  const review = S.review && L!=='en';
  const hasTurkak = S.items.some(it=>isTurkak(it.code,it.cfg.dn));
  const doc=$('#quoteDoc');
  doc.dir=meta.dir;
  doc.style.fontFamily = (L==='ar') ? "'Inter','Plus Jakarta Sans',sans-serif" : '';

  const rows = S.items.length ? S.items.map((it,i)=>{
    const p=BYCODE[it.code];
    const nm = esc(p.name[L]);
    const ds = esc(p.desc[L]);
    const nmRef = review? `<div class="ti-spec" style="font-style:italic;opacity:.7">EN: ${esc(p.name.en)}</div>`:'';
    const dsRef = review? `<div class="ti-spec" style="font-style:italic;opacity:.7">EN: ${esc(p.desc.en)}</div>`:'';
    return `<tr>
      <td class="num">${i+1}</td>
      <td>
        <div style="display:flex;gap:10px;align-items:flex-start">
        <img src="assets/products/${slug(p.code)}.png" alt="" style="width:54px;height:54px;object-fit:contain;border:1px solid #e5eaf0;border-radius:6px;flex:none" onerror="this.remove()">
        <div style="flex:1;min-width:0">
        <div class="ti-name">${nm} <span class="ti-code">${esc(p.code)}</span></div>
        ${nmRef}
        <div class="ti-spec">${esc(specOf(it))}</div>
        <div class="ti-cert">\u2713 ${isTurkak(it.code,it.cfg.dn) ? esc(CERT[L].turkak) : esc(CERT[L].ce)}</div>
        <div class="ti-desc">${ds}</div>
        ${dsRef}
        </div></div>
      </td>
      <td class="num">${esc(it.qty)}</td>
      <td class="num">${money(parseFloat(it.unit)||0)}</td>
      <td class="num">${money(lineTotal(it))}</td>
    </tr>`;
  }).join('') : `<tr><td colspan="5" style="text-align:center;color:var(--ink-3);padding:30px">${esc(t.noItems)}</td></tr>`;

  const termsText = (S.terms[L]!=null? S.terms[L] : TERMS[L]);

  doc.innerHTML = `
    <div class="qd-top">
      <div class="qd-brand">
        <span class="mk"><svg viewBox="0 0 40 40" fill="none"><rect class="mk-bg" x="1.5" y="1.5" width="37" height="37" rx="11"/><text class="mk-pm" x="20" y="17.5" text-anchor="middle" dominant-baseline="central">NF</text><path class="mk-wave" d="M9 28.5q3.6-4.2 7.2 0t7.2 0t7.2 0"/></svg></span>
        <div><h1>Net Flow</h1><small>${esc(t.tagline)}</small></div>
      </div>
      <div class="qd-title">
        <div class="qt">${esc(t.quotation)}</div>
        <div class="qmeta">
          ${esc(t.quoteNo)}: <b>${esc(S.meta.no)}</b><br>
          ${esc(t.date)}: <b>${fmtDate(S.meta.date)}</b><br>
          ${esc(t.valid)}: <b>${fmtDate(S.meta.valid)}</b>
        </div>
      </div>
    </div>

    <div class="qd-parties">
      <div class="qd-party">
        <h5>${esc(t.supplier)}</h5>
        <p><b>Net Flow</b> — VFA Elektronik<br>Fevzıçakmak Mah. Aslım Cad.<br>Konya · Türkiye<br>+90 541 373 79 53 (WhatsApp / Telegram)<br>info@netflw.com · netflw.com</p>
      </div>
      <div class="qd-party">
        <h5>${esc(t.customer)}</h5>
        <p><b>${esc(S.cust.company||', ')}</b><br>
        ${S.cust.contact?esc(t.attn)+': '+esc(S.cust.contact)+'<br>':''}
        ${S.cust.country?esc(S.cust.country)+'<br>':''}
        ${S.cust.email?esc(S.cust.email)+'<br>':''}
        ${S.cust.project?esc(t.project)+': '+esc(S.cust.project):''}</p>
      </div>
    </div>

    <table class="qd-table">
      <thead><tr>
        <th class="num" style="width:6%">${esc(t.thNo)}</th>
        <th>${esc(t.thDesc)}</th>
        <th class="num" style="width:8%">${esc(t.thQty)}</th>
        <th class="num" style="width:16%">${esc(t.thUnit)}</th>
        <th class="num" style="width:16%">${esc(t.thTotal)}</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>

    <div class="qd-totals"><div class="tt">
      <div class="ttrow"><span>${esc(t.subtotal)}</span><span class="v">${money(tot.sub)}</span></div>
      ${(parseFloat(S.discount)||0)>0?`<div class="ttrow"><span>${esc(t.discount)} (${S.discount}%)</span><span class="v">− ${money(tot.disc)}</span></div>`:''}
      ${(parseFloat(S.travel)||0)>0?`<div class="ttrow"><span>${esc(t.transport)}</span><span class="v">+ ${money(tot.travel)}</span></div>`:''}
      ${(parseFloat(S.vat)||0)>0?`<div class="ttrow"><span>${esc(t.vat)} (${S.vat}%)</span><span class="v">+ ${money(tot.vat)}</span></div>`:''}
      <div class="ttgrand"><span class="l">${esc(t.grand)}</span><span class="v">${money(tot.grand)} ${S.currency}</span></div>
    </div></div>

    <div class="qd-terms">
      <h5>${esc(t.terms)}</h5>
      <div class="tt-body">${esc(termsText).replace(/\n\n/g,'<br><br>').replace(/\n/g,'<br>')}</div>
    </div>

    <div class="qd-foot">
      <div>
        <div class="qd-sign" style="margin-bottom:4px">${esc(S.meta.by||'Net Flow')}</div>
        <div class="qd-sign">${esc(t.authSign)}</div>
        <div class="qd-badges" style="justify-content:flex-start;margin-top:12px">
          ${hasTurkak?'<span class="badge badge--cert">TÜRKAK AB-0354-K</span><span class="badge">ISO 17025</span>':''}
          <span class="badge">CE</span>
          <span class="badge">ISO 9001</span>
          <span class="badge badge--turkey">${esc(YERLI[L])}</span>
        </div>
      </div>
      <div style="text-align:right">
        <div class="qd-sign" style="margin-bottom:4px">${esc(S.cust.custSign||'________________')}</div>
        <div class="qd-sign">${esc(t.custAcc)}</div>
        ${S.cust.reqBy?`<div style="font-family:var(--f-mono);font-size:10px;color:var(--ink-3);margin-top:8px">${esc(t.reqBy)}: ${esc(S.cust.reqBy)}</div>`:''}
      </div>
    </div>

    <div class="qd-legal">${esc(t.legal)}</div>
  `;
}

/* ============================================================
   BIND
   ============================================================ */
function loadForm(){
  $('#qNo').value=S.meta.no; $('#qDate').value=S.meta.date; $('#qValid').value=S.meta.valid; $('#qBy').value=S.meta.by;
  $('#cCompany').value=S.cust.company; $('#cContact').value=S.cust.contact; $('#cReqBy').value=S.cust.reqBy||'';
  $('#cCustSign').value=S.cust.custSign||''; $('#cCountry').value=S.cust.country;
  $('#cEmail').value=S.cust.email; $('#cProject').value=S.cust.project;
  $('#tDisc').value=S.discount; $('#tTravel').value=S.travel||0; $('#tVat').value=S.vat;
  $('#curSel').value=S.currency; $('#langSel').value=S.lang;
  $('#qTerms').value = (S.terms[S.lang]!=null? S.terms[S.lang] : TERMS[S.lang]);
  $('#pvLang').value=S.lang; $('#pvReview').checked=!!S.review;
  updateQBar();
}

function bind(){
  // palette
  $('#palSearch').addEventListener('input',e=>{palQ=e.target.value;renderPalette();});
  $('#palCats').addEventListener('click',e=>{const b=e.target.closest('.pcat');if(!b)return;
    document.querySelectorAll('#palCats .pcat').forEach(c=>c.classList.remove('on'));b.classList.add('on');palCat=b.dataset.c;renderPalette();});
  $('#palList').addEventListener('click',e=>{const it=e.target.closest('[data-add]');if(!it)return;addItem(it.dataset.add);});

  // items delegation
  $('#itemsBox').addEventListener('input',e=>{
    const el=e.target;
    if(el.dataset.qty!=null){ const it=S.items.find(x=>x.uid===el.dataset.qty); if(it){it.qty=el.value; $('[data-total="'+it.uid+'"]').textContent=money(lineTotal(it)); renderTotals(); save(); renderShipping();} }
    else if(el.dataset.unit!=null){ const it=S.items.find(x=>x.uid===el.dataset.unit); if(it){it.unit=el.value; if(it.priceMode==='auto'){it.priceMode='custom';} $('[data-total="'+it.uid+'"]').textContent=money(lineTotal(it)); renderTotals(); save(); const badge=el.closest('.litem-money').querySelector('.price-mode-badge'); if(badge&&badge.classList.contains('auto')){badge.className='price-mode-badge custom';badge.textContent='custom';const resetBtn=document.createElement('button');resetBtn.className='price-reset';resetBtn.dataset.reset=it.uid;resetBtn.title='Reset to auto price';resetBtn.textContent='↻';badge.after(resetBtn);}} }
  });
  $('#itemsBox').addEventListener('change',e=>{
    const el=e.target;
    if(el.dataset.field){ const it=S.items.find(x=>x.uid===el.dataset.uid); if(it){it.cfg[el.dataset.field]=el.value; save();
      // recalc price if auto mode
      if(it.priceMode==='auto'){const np=calcPrice(it.code,it.cfg);if(np){it.unit=np;save();renderItems();renderTotals();return;}}
      if(el.dataset.field==='dn'){const w=getWeight(it.code,el.value);const badge=el.closest('.litem').querySelector('.ship-badge');if(w){const txt=w.kg+' kg · '+calcDesi(w.box)+' desi · '+w.box.join('×')+' cm';if(badge)badge.textContent=txt;else{const sp=document.createElement('span');sp.className='ship-badge';sp.textContent=txt;const descEl=el.closest('.litem').querySelector('.litem-desc');if(descEl)descEl.after(sp);}}else if(badge){badge.remove();}renderShipping();}
    } }
  });
  $('#itemsBox').addEventListener('click',e=>{
    const rm=e.target.closest('[data-remove]'); if(rm){S.items=S.items.filter(x=>x.uid!==rm.dataset.remove); save(); renderItems(); renderTotals(); return;}
    const rst=e.target.closest('[data-reset]'); if(rst){const it=S.items.find(x=>x.uid===rst.dataset.reset); if(it){const np=calcPrice(it.code,it.cfg); if(np){it.unit=np;it.priceMode='auto';save();renderItems();renderTotals();}}}
  });

  // quick bar: customer sync + copy code
  $('#qbarCust').addEventListener('input',e=>{
    S.cust.company=e.target.value; $('#cCompany').value=e.target.value; save();
  });
  $('#btnCopyCode').addEventListener('click',()=>{
    navigator.clipboard.writeText(S.meta.no||'').catch(()=>{});
    const b=$('#btnCopyCode'); b.title='Copied!'; setTimeout(()=>b.title='Kodu kopyala',1500);
  });

  // meta + customer
  const map={qNo:['meta','no'],qDate:['meta','date'],qValid:['meta','valid'],qBy:['meta','by'],
    cCompany:['cust','company'],cContact:['cust','contact'],cReqBy:['cust','reqBy'],cCustSign:['cust','custSign'],
    cCountry:['cust','country'],cEmail:['cust','email'],cProject:['cust','project']};
  Object.keys(map).forEach(id=>{ $('#'+id).addEventListener('input',e=>{const[a,b]=map[id];S[a][b]=e.target.value;
    if(id==='cCompany') updateQBar();
    if(id==='qNo'){$('#qbarCode').textContent=e.target.value||'—';}
    save();
  }); });

  // discount / vat
  $('#tDisc').addEventListener('input',e=>{S.discount=e.target.value;renderTotals();save();});
  $('#tTravel').addEventListener('input',e=>{S.travel=e.target.value;renderTotals();save();});
  $('#tVat').addEventListener('input',e=>{S.vat=e.target.value;renderTotals();save();});

  // currency
  $('#curSel').addEventListener('change',e=>{S.currency=e.target.value;renderItems();renderTotals();save();});

  // language (top bar + preview), master language for UI + output
  function setLang(l){ S.lang=l; localStorage.setItem('pm_lang',l); localStorage.setItem('pm_lang_userset','1');
    if(window.PMI18n) PMI18n.apply();
    $('#langSel').value=l; $('#pvLang').value=l;
    $('#qTerms').value=(S.terms[l]!=null?S.terms[l]:TERMS[l]);
    renderPalette(); renderItems(); renderTotals();
    save(); if($('#previewOv').classList.contains('open')) buildDoc(); }
  $('#langSel').addEventListener('change',e=>setLang(e.target.value));
  $('#pvLang').addEventListener('change',e=>setLang(e.target.value));

  // terms editing (per language)
  $('#qTerms').addEventListener('input',e=>{ S.terms[S.lang]=e.target.value; save(); });

  // review toggle
  $('#pvReview').addEventListener('change',e=>{S.review=e.target.checked;save();buildDoc();});

  // language modal helpers
  function openLangModal(cb){
    const m=$('#langModal');
    const mc=$('#modalCust');
    if(mc) mc.value=S.cust.company||'';
    m.style.display='flex';
    setTimeout(()=>{ if(mc) mc.focus(); },80);
    m.onclick=e=>{
      const btn=e.target.closest('[data-lang]');
      if(!btn && !e.target.closest('.lang-modal-box'))return;
      if(!btn) return;
      // save customer name from modal before closing
      if(mc && mc.value.trim()){
        S.cust.company=mc.value.trim();
        $('#cCompany').value=S.cust.company;
        updateQBar();
      }
      m.style.display='none';
      cb(btn.dataset.lang);
    };
  }
  function closeLangModal(){$('#langModal').style.display='none';}
  $('#langModalClose').addEventListener('click',closeLangModal);

  // actions
  $('#btnPreview').addEventListener('click',()=>{
    openLangModal(lang=>{setLang(lang);buildDoc();$('#previewOv').classList.add('open');document.body.style.overflow='hidden';});
  });
  $('#btnClosePv').addEventListener('click',()=>{$('#previewOv').classList.remove('open');document.body.style.overflow='';});
  $('#btnPrint').addEventListener('click',()=>{buildDoc();setTimeout(()=>window.print(),60);});
  $('#btnSave').addEventListener('click',()=>{save();saveToArchive();renderArchive();const b=$('#btnSave');const o=b.innerHTML;b.innerHTML='✓ Saved';setTimeout(()=>b.innerHTML=o,1200);});
  // archive panel toggle
  $('#btnArchive').addEventListener('click',()=>{ const p=$('#archivePanel'); p.style.display=p.style.display==='block'?'none':'block'; renderArchive(); });
  document.addEventListener('click',e=>{ if(!e.target.closest('#archivePanel')&&!e.target.closest('#btnArchive')) $('#archivePanel').style.display='none'; });
  $('#archiveList').addEventListener('click',e=>{ const it=e.target.closest('[data-load]'); if(!it)return; const list=getList(); const entry=list.find(x=>x.code===it.dataset.load); if(!entry)return; try{ S=JSON.parse(entry.data); if(!S.terms)S.terms={}; if(!S.cust.reqBy)S.cust.reqBy=''; if(!S.cust.custSign)S.cust.custSign=''; save(); loadForm(); renderPalette(); renderItems(); renderTotals(); $('#archivePanel').style.display='none'; }catch(e){} });
  $('#btnNew').addEventListener('click',()=>{ if(confirm('Start a new blank quotation? The current draft will be cleared.')){ S=defaultState(); save(); loadForm(); renderItems(); renderTotals(); } });

  // shipping copy
  const shipBtn=$('#btnCopyShip');
  if(shipBtn) shipBtn.addEventListener('click',()=>{
    const txt=getShippingText();
    if(!txt){alert('No shipping data to copy.');return;}
    navigator.clipboard.writeText(txt).then(()=>{shipBtn.textContent='Copied!';setTimeout(()=>shipBtn.textContent='Copy for courier',1500);}).catch(()=>{});
  });
}

/* ---------- init ---------- */
var _pl=localStorage.getItem('pm_lang'); if(_pl && LANG_META[_pl]) S.lang=_pl;
bind();
loadForm();
updateQBar();
renderPalette();
renderItems();
renderTotals();

})();
