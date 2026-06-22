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
  en:'• Prices are quoted EXW Konya (Incoterms® 2020) unless otherwise agreed.\n• Delivery: 3–5 weeks after order confirmation and receipt of full payment.\n• Payment: 100% advance by T/T (bank transfer) before production.\n• Warranty: 24 months against manufacturing defects.\n• Electromagnetic flow meters ship with a TÜRKAK-accredited calibration certificate (ISO/IEC 17025); other instruments carry a Yerli Malı (local-production) certificate.\n• This quotation is valid until the date stated above.',
  tr:'• Fiyatlar aksi belirtilmedikçe EXW Konya (Incoterms® 2020) olarak verilmiştir.\n• Teslimat: Tam ödeme alındıktan sonra 3–5 hafta.\n• Ödeme: %100 peşin, T/T (banka havalesi) ile üretim başlamadan önce.\n• Garanti: Üretim hatalarına karşı 24 ay.\n• Elektromanyetik debimetreler TÜRKAK akreditasyonlu kalibrasyon sertifikası (ISO/IEC 17025) ile; diğer cihazlar Yerli Malı belgesi ile teslim edilir.\n• Bu teklif yukarıda belirtilen tarihe kadar geçerlidir.',
  ar:'• الأسعار على أساس تسليم المصنع EXW قونية (إنكوترمز 2020) ما لم يُتفق على خلاف ذلك.\n• التسليم: 3–5 أسابيع بعد استلام الدفعة الكاملة.\n• الدفع: 100% مقدمًا بالتحويل البنكي T/T قبل بدء الإنتاج.\n• الضمان: 24 شهرًا ضد عيوب التصنيع.\n• تُسلَّم أجهزة قياس التدفق الكهرومغناطيسية بشهادة معايرة معتمدة من TÜRKAK ‏(ISO/IEC 17025)؛ بينما تحمل الأجهزة الأخرى شهادة منشأ محلي (Yerli Malı).\n• هذا العرض صالح حتى التاريخ المذكور أعلاه.',
  ru:'• Цены указаны на условиях EXW Конья (Incoterms® 2020), если не согласовано иное.\n• Поставка: 3–5 недель после получения полной оплаты.\n• Оплата: 100% аванс банковским переводом T/T до начала производства.\n• Гарантия: 24 месяца от производственных дефектов.\n• Электромагнитные расходомеры поставляются с калибровкой ISO/IEC 17025, аккредитованной TÜRKAK; прочие приборы, с сертификатом локального производства (Yerli Malı).\n• Данное предложение действительно до указанной выше даты.'
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

/* ---------- icons by category ---------- */
const ICONS = {
  flow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="9" width="20" height="6" rx="1.5"/><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"/><rect x="9" y="3" width="6" height="6" rx="1"/></svg>',
  level:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 13h12"/><rect x="9" y="6" width="6" height="5" fill="currentColor" stroke="none"/></svg>',
  switch:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="3" width="8" height="6" rx="1"/><path d="M12 9v6"/><circle cx="12" cy="18" r="3"/></svg>',
  process:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="7"/><path d="M12 10l4-2.5M12 17v4M9 21h6"/></svg>'
};
const CATNAME = {flow:'Flow Meter',level:'Level Instrument',switch:'Level Switch',process:'Process Instrument'};

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
    desc:N('Combined pressure and temperature transmitter measuring both from one tapping.','Tek bağlantıdan basınç ve sıcaklığı birlikte ölçen kombine transmitter.','ناقل مدمج للضغط والحرارة يقيس كليهما من نقطة توصيل واحدة.','Комбинированный преобразователь давления и температуры с одной точки отбора.')}
];
const BYCODE = {}; PRODUCTS.forEach(p=>BYCODE[p.code]=p);

/* ---------- currency ---------- */
const CUR = {USD:{sym:'$',pre:true}, EUR:{sym:'€',pre:true}, TRY:{sym:'₺',pre:true}};
const YERLI = {en:'Made in Türkiye',tr:'Yerli Malı',ar:'صنع في تركيا',ru:'Сделано в Турции'};
function isTurkak(code){ return code==='NT-VMF'; }
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
function save(){ try{ localStorage.setItem(DRAFT_KEY, JSON.stringify(S)); }catch(e){} }

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
  S.items.push({uid:uid(), code, cfg, qty:1, unit:0});
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
          <div class="cfg-row" style="margin-top:10px">${cfgHtml}</div>
          </div>
        </div>
        <button class="litem-remove" data-remove="${it.uid}" title="Remove">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>
        </button>
      </div>
      <div class="litem-money">
        <div class="money-field qty"><label>${esc(aui().qty)}</label><input type="number" min="1" step="1" value="${it.qty}" data-qty="${it.uid}"></div>
        <div class="money-field"><label>${esc(aui().unit(S.currency))}</label><input class="price-input" type="number" min="0" step="0.01" value="${it.unit}" data-unit="${it.uid}" placeholder="0.00"></div>
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
}

/* ============================================================
   QUOTATION DOCUMENT (print/PDF)
   ============================================================ */
function buildDoc(){
  const L=S.lang, t=T[L], meta=LANG_META[L];
  const tot=totals();
  const review = S.review && L!=='en';
  const hasTurkak = S.items.some(it=>isTurkak(it.code));
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
        <div class="ti-cert">${isTurkak(p.code) ? '\u2713 TÜRKAK · ISO/IEC 17025' : '\u2713 '+esc(YERLI[L])}</div>
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
      <div class="tt-body">${esc(termsText)}</div>
    </div>

    <div class="qd-foot">
      <div>
        <div class="qd-sign" style="margin-bottom:4px">${esc(S.meta.by||'Net Flow')}</div>
        <div class="qd-sign">${esc(t.authSign)}</div>
        <div class="qd-badges" style="justify-content:flex-start;margin-top:12px">
          ${hasTurkak?'<span class="badge badge--cert">TÜRKAK AB-0354-K</span><span class="badge">ISO 17025</span>':''}
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
    if(el.dataset.qty!=null){ const it=S.items.find(x=>x.uid===el.dataset.qty); if(it){it.qty=el.value; $('[data-total="'+it.uid+'"]').textContent=money(lineTotal(it)); renderTotals(); save();} }
    else if(el.dataset.unit!=null){ const it=S.items.find(x=>x.uid===el.dataset.unit); if(it){it.unit=el.value; $('[data-total="'+it.uid+'"]').textContent=money(lineTotal(it)); renderTotals(); save();} }
  });
  $('#itemsBox').addEventListener('change',e=>{
    const el=e.target;
    if(el.dataset.field){ const it=S.items.find(x=>x.uid===el.dataset.uid); if(it){it.cfg[el.dataset.field]=el.value; save();} }
  });
  $('#itemsBox').addEventListener('click',e=>{
    const rm=e.target.closest('[data-remove]'); if(!rm)return;
    S.items=S.items.filter(x=>x.uid!==rm.dataset.remove); save(); renderItems(); renderTotals();
  });

  // meta + customer
  const map={qNo:['meta','no'],qDate:['meta','date'],qValid:['meta','valid'],qBy:['meta','by'],
    cCompany:['cust','company'],cContact:['cust','contact'],cReqBy:['cust','reqBy'],cCustSign:['cust','custSign'],
    cCountry:['cust','country'],cEmail:['cust','email'],cProject:['cust','project']};
  Object.keys(map).forEach(id=>{ $('#'+id).addEventListener('input',e=>{const[a,b]=map[id];S[a][b]=e.target.value;save();}); });

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
    m.style.display='flex';
    m.onclick=e=>{
      const btn=e.target.closest('[data-lang]');
      if(!btn && !e.target.closest('.lang-modal-box'))return;
      if(!btn){return;}
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
}

/* ---------- init ---------- */
var _pl=localStorage.getItem('pm_lang'); if(_pl && LANG_META[_pl]) S.lang=_pl;
bind();
loadForm();
renderPalette();
renderItems();
renderTotals();

})();
