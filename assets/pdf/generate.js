/**
 * Net Flow — Datasheet PDF Generator
 * Generates EN / TR / AR datasheets using Chrome headless
 * Run: node generate.js
 */

const { execSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT    = path.join(__dirname);
const TMP    = path.join(__dirname, '_tmp');

['en','tr','ar'].forEach(l => fs.mkdirSync(path.join(OUT, l), { recursive: true }));
fs.mkdirSync(TMP, { recursive: true });

// ─── PRODUCT DATA ──────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'nt-vmf',
    code: 'NT-VMF',
    name: {
      en: 'Electromagnetic Flow Meter',
      tr: 'Elektromanyetik Debimetre',
      ar: 'مقياس التدفق الكهرومغناطيسي'
    },
    desc: {
      en: 'Based on Faraday\'s law of electromagnetic induction. No moving parts, zero pressure drop, suitable for any conductive liquid. Available in compact and remote-mount versions with six liner and six electrode material options.',
      tr: 'Faraday elektromanyetik indüksiyon ilkesine dayanır. Hareketli parça yok, basınç kaybı sıfır, tüm iletken sıvılar için uygundur. Altı farklı astar ve altı farklı elektrot malzemesi seçeneği mevcuttur.',
      ar: 'يعمل وفق قانون فاراداي للحث الكهرومغناطيسي. لا توجد أجزاء متحركة، ولا فقد في الضغط. مناسب لجميع السوائل الموصلة مع خيارات متعددة من البطانات وأقطاب الكهرباء.'
    },
    features: {
      en: ['No moving parts — zero maintenance','±0.2% accuracy available','Bi-directional flow measurement','Self-diagnosis & empty-pipe alarm','4-20 mA + Pulse + RS485 standard','HART / PROFIBUS / GPRS optional','Liner: PTFE · Neoprene · PU · F46','Electrodes: SS316L · HC · Ti · Pt'],
      tr: ['Hareketli parça yok — bakım gerektirmez','±%0.2 doğruluk mevcut','İki yönlü akış ölçümü','Kendi kendine teşhis & boş boru alarmı','4-20 mA + Pulse + RS485 standart','HART / PROFIBUS / GPRS opsiyonel','Astar: PTFE · Neopren · PÜ · F46','Elektrot: SS316L · HC · Ti · Pt'],
      ar: ['لا توجد أجزاء متحركة — صفر صيانة','دقة ±0.2% متاحة','قياس تدفق ثنائي الاتجاه','تشخيص ذاتي وإنذار الأنبوب الفارغ','4-20 mA + نبضة + RS485 معياري','HART / PROFIBUS / GPRS اختياري','بطانة: PTFE · نيوبرين · PU · F46','أقطاب: SS316L · HC · Ti · Pt']
    },
    specs: {
      en: [
        ['Nominal Size','DN3 – DN3000 (⅛" – 120")'],
        ['Flow Velocity','0.2 – 15 m/s'],
        ['Accuracy','±0.5% · ±0.3% · ±0.2% (opt.)'],
        ['Min. Conductivity','≥ 5 µS/cm'],
        ['Body Material','Carbon Steel / SS304 / SS316'],
        ['Liner','PTFE · Neoprene · PU · F46'],
        ['Electrodes','SS316L · Hastelloy C · Ti · Pt'],
        ['Nominal Pressure','0.6 / 1.0 / 1.6 / 2.5 / 4.0 MPa'],
        ['Medium Temperature','-10 °C ~ +150 °C'],
        ['Supply Voltage','AC 85-250 V / DC 20-36 V'],
        ['Output','4-20 mA + Pulse + RS485'],
        ['Protection','IP65 / IP67 / IP68'],
        ['Ex Rating','ExdIICT6 (optional)'],
      ],
      tr: [
        ['Nominal Çap','DN3 – DN3000 (⅛" – 120")'],
        ['Akış Hızı','0.2 – 15 m/s'],
        ['Doğruluk','±%0.5 · ±%0.3 · ±%0.2 (ops.)'],
        ['Min. İletkenlik','≥ 5 µS/cm'],
        ['Gövde Malzemesi','Karbon Çelik / SS304 / SS316'],
        ['Astar','PTFE · Neopren · PÜ · F46'],
        ['Elektrotlar','SS316L · Hastelloy C · Ti · Pt'],
        ['Nominal Basınç','0.6 / 1.0 / 1.6 / 2.5 / 4.0 MPa'],
        ['Ortam Sıcaklığı','-10 °C ~ +150 °C'],
        ['Besleme Gerilimi','AC 85-250 V / DC 20-36 V'],
        ['Çıkış','4-20 mA + Pulse + RS485'],
        ['Koruma Sınıfı','IP65 / IP67 / IP68'],
        ['Ex Sertifikası','ExdIICT6 (opsiyonel)'],
      ],
      ar: [
        ['الحجم الاسمي','DN3 – DN3000 (⅛" – 120")'],
        ['سرعة التدفق','0.2 – 15 م/ث'],
        ['الدقة','±0.5% · ±0.3% · ±0.2% (اختياري)'],
        ['الحد الأدنى للتوصيلية','≥ 5 µS/cm'],
        ['مادة الجسم','كربون فولاذي / SS304 / SS316'],
        ['البطانة','PTFE · نيوبرين · PU · F46'],
        ['الأقطاب','SS316L · Hastelloy C · Ti · Pt'],
        ['الضغط الاسمي','0.6 / 1.0 / 1.6 / 2.5 / 4.0 MPa'],
        ['درجة حرارة الوسط','-10 °C ~ +150 °C'],
        ['جهد الإمداد','AC 85-250 V / DC 20-36 V'],
        ['المخرجات','4-20 mA + نبضة + RS485'],
        ['درجة الحماية','IP65 / IP67 / IP68'],
        ['شهادة Ex','ExdIICT6 (اختياري)'],
      ]
    },
    apps: {
      en: ['Water & Wastewater','Chemical Processing','Food & Beverage','Mining & Slurry','HVAC & Cooling','Oil & Gas'],
      tr: ['Su & Atık Su','Kimya Prosesi','Gıda & İçecek','Madencilik & Çamur','HVAC & Soğutma','Petrol & Gaz'],
      ar: ['مياه وصرف صحي','معالجة كيميائية','أغذية ومشروبات','تعدين','تكييف وتبريد','نفط وغاز']
    }
  },
  {
    id: 'nt-vmf-w',
    code: 'NT-VMF-W',
    name: {
      en: 'Food-Grade Flow Meter',
      tr: 'Gıdaya Uygun Debimetre',
      ar: 'مقياس تدفق للدرجة الغذائية'
    },
    desc: {
      en: 'Hygienic electromagnetic flow meter with tri-clamp connection for dairy, beverage, pharma and CIP lines. PTFE/PFA lined with SS316L electrodes. Fully drainable design meets FDA and EHEDG requirements.',
      tr: 'Süt ürünleri, içecek, ilaç ve CIP hatları için tri-clamp bağlantılı hijyenik elektromanyetik debimetre. PTFE/PFA astarlı, SS316L elektrotlu. Tam tahliye edilebilir tasarım FDA ve EHEDG gereksinimlerini karşılar.',
      ar: 'مقياس تدفق كهرومغناطيسي صحي باتصال tri-clamp لخطوط الألبان والمشروبات والصيدلة وCIP. مبطن بـ PTFE/PFA مع أقطاب SS316L. التصميم القابل للتصريف الكامل يلبي متطلبات FDA و EHEDG.'
    },
    features: {
      en: ['Tri-Clamp / DIN hygienic connection','PTFE or PFA liner','SS316L wetted parts','CIP & SIP compatible','Surface finish Ra ≤ 0.8 µm','FDA-compliant materials','Zero dead-leg design','±0.5% accuracy'],
      tr: ['Tri-Clamp / DIN hijyenik bağlantı','PTFE veya PFA astar','SS316L ıslak parçalar','CIP & SIP uyumlu','Yüzey kalitesi Ra ≤ 0.8 µm','FDA uyumlu malzemeler','Sıfır ölü nokta tasarım','±%0.5 doğruluk'],
      ar: ['توصيل صحي Tri-Clamp / DIN','بطانة PTFE أو PFA','أجزاء مبللة SS316L','متوافق مع CIP و SIP','تشطيب سطحي Ra ≤ 0.8 µm','مواد متوافقة مع FDA','تصميم بدون منطقة ميتة','دقة ±0.5%']
    },
    specs: {
      en: [
        ['Nominal Size','DN10 – DN200'],
        ['Connection','Tri-Clamp · DIN 11851 · Flange'],
        ['Accuracy','±0.5% of reading'],
        ['Liner Material','PTFE / PFA'],
        ['Electrode Material','SS316L'],
        ['Body Material','SS304 / SS316L'],
        ['Surface Finish','Ra ≤ 0.8 µm (interior)'],
        ['Medium Temperature','0 °C ~ +130 °C'],
        ['Nominal Pressure','≤ 1.6 MPa'],
        ['Supply Voltage','AC 85-250 V / DC 20-36 V'],
        ['Output','4-20 mA + Pulse + RS485'],
        ['Protection','IP67'],
      ],
      tr: [
        ['Nominal Çap','DN10 – DN200'],
        ['Bağlantı','Tri-Clamp · DIN 11851 · Flanş'],
        ['Doğruluk','±%0.5 okuma değeri'],
        ['Astar Malzemesi','PTFE / PFA'],
        ['Elektrot Malzemesi','SS316L'],
        ['Gövde Malzemesi','SS304 / SS316L'],
        ['Yüzey Kalitesi','Ra ≤ 0.8 µm (iç yüzey)'],
        ['Ortam Sıcaklığı','0 °C ~ +130 °C'],
        ['Nominal Basınç','≤ 1.6 MPa'],
        ['Besleme Gerilimi','AC 85-250 V / DC 20-36 V'],
        ['Çıkış','4-20 mA + Pulse + RS485'],
        ['Koruma Sınıfı','IP67'],
      ],
      ar: [
        ['الحجم الاسمي','DN10 – DN200'],
        ['التوصيل','Tri-Clamp · DIN 11851 · فلانج'],
        ['الدقة','±0.5% من القراءة'],
        ['مادة البطانة','PTFE / PFA'],
        ['مادة الأقطاب','SS316L'],
        ['مادة الجسم','SS304 / SS316L'],
        ['التشطيب السطحي','Ra ≤ 0.8 µm (داخلي)'],
        ['درجة حرارة الوسط','0 °C ~ +130 °C'],
        ['الضغط الاسمي','≤ 1.6 MPa'],
        ['جهد الإمداد','AC 85-250 V / DC 20-36 V'],
        ['المخرجات','4-20 mA + نبضة + RS485'],
        ['درجة الحماية','IP67'],
      ]
    },
    apps: {
      en: ['Dairy & Milk Processing','Juice & Beverage','Brewing & Winery','Pharmaceutical','CIP / SIP Cleaning','Food Ingredient Dosing'],
      tr: ['Süt Ürünleri İşleme','Meyve Suyu & İçecek','Bira & Şarap','İlaç Sanayi','CIP / SIP Temizleme','Gıda Bileşeni Dozajlama'],
      ar: ['معالجة الألبان','عصائر ومشروبات','تخمير','صيدلة','تنظيف CIP / SIP','جرعات مكونات الغذاء']
    }
  },
  {
    id: 'nt-vmf-bt',
    code: 'NT-VMF-BT',
    name: {
      en: 'Battery-Powered Flow Meter',
      tr: 'Pilli Elektromanyetik Debimetre',
      ar: 'مقياس تدفق يعمل بالبطارية'
    },
    desc: {
      en: 'Lithium-battery powered electromagnetic flow meter for remote sites with no mains power. Up to 6-year battery life with GPRS/CDMA wireless data transmission. IP68 rated for underground and submerged installations.',
      tr: 'Şebeke gücü olmayan uzak noktalar için lityum pilli elektromanyetik debimetre. GPRS/CDMA kablosuz veri aktarımı ile 6 yıla kadar pil ömrü. Yeraltı ve sualttı kurulumlar için IP68 sertifikalı.',
      ar: 'مقياس تدفق كهرومغناطيسي يعمل بالليثيوم للمواقع النائية. عمر بطارية يصل إلى 6 سنوات مع نقل بيانات لاسلكي GPRS/CDMA. مصنف IP68 للتركيبات تحت الأرض والغمر.'
    },
    features: {
      en: ['3.6 V lithium battery — 3-6 year life','IP68 waterproof — underground safe','GPRS / CDMA wireless optional','RS485 Modbus communication','LCD display with backlight','Power-failure data logging','Infrared remote configuration','No mains power required'],
      tr: ['3.6 V lityum pil — 3-6 yıl ömür','IP68 su geçirmez — yeraltı güvenli','GPRS / CDMA kablosuz opsiyonel','RS485 Modbus iletişim','LCD ekran arka ışıklı','Güç kesintisi veri kaydı','Kızılötesi uzaktan yapılandırma','Şebeke gücü gerektirmez'],
      ar: ['بطارية ليثيوم 3.6V — عمر 3-6 سنوات','IP68 مقاوم للماء — آمن تحت الأرض','GPRS / CDMA لاسلكي اختياري','اتصال RS485 Modbus','شاشة LCD مع إضاءة خلفية','تسجيل بيانات عند انقطاع الكهرباء','إعداد بالأشعة تحت الحمراء','لا يحتاج كهرباء شبكة']
    },
    specs: {
      en: [
        ['Nominal Size','DN3 – DN600'],
        ['Accuracy','±0.5% of reading'],
        ['Battery','3.6 V Lithium, 3-6 years'],
        ['Body Material','SS304'],
        ['Liner','PTFE · Neoprene · PU'],
        ['Electrodes','SS316L · Hastelloy C · Ti'],
        ['Min. Conductivity','≥ 5 µS/cm'],
        ['Medium Temperature','-10 °C ~ +80 °C'],
        ['Protection','IP68'],
        ['Communication','RS485 Modbus · GPRS (opt.)'],
        ['Display','LCD, flow rate & total'],
        ['Output','Pulse + RS485'],
      ],
      tr: [
        ['Nominal Çap','DN3 – DN600'],
        ['Doğruluk','±%0.5 okuma değeri'],
        ['Pil','3.6 V Lityum, 3-6 yıl'],
        ['Gövde Malzemesi','SS304'],
        ['Astar','PTFE · Neopren · PÜ'],
        ['Elektrotlar','SS316L · Hastelloy C · Ti'],
        ['Min. İletkenlik','≥ 5 µS/cm'],
        ['Ortam Sıcaklığı','-10 °C ~ +80 °C'],
        ['Koruma Sınıfı','IP68'],
        ['İletişim','RS485 Modbus · GPRS (ops.)'],
        ['Ekran','LCD, debi & toplam'],
        ['Çıkış','Pulse + RS485'],
      ],
      ar: [
        ['الحجم الاسمي','DN3 – DN600'],
        ['الدقة','±0.5% من القراءة'],
        ['البطارية','3.6V ليثيوم، 3-6 سنوات'],
        ['مادة الجسم','SS304'],
        ['البطانة','PTFE · نيوبرين · PU'],
        ['الأقطاب','SS316L · Hastelloy C · Ti'],
        ['الحد الأدنى للتوصيلية','≥ 5 µS/cm'],
        ['درجة حرارة الوسط','-10 °C ~ +80 °C'],
        ['درجة الحماية','IP68'],
        ['الاتصالات','RS485 Modbus · GPRS (اختياري)'],
        ['الشاشة','LCD، معدل تدفق والمجموع'],
        ['المخرجات','نبضة + RS485'],
      ]
    },
    apps: {
      en: ['Remote Water Mains','DMA & NRW Metering','Irrigation Schemes','Groundwater Monitoring','Mining Sites','Agricultural Water'],
      tr: ['Uzak Su Şebekeleri','DMA & NRW Sayımı','Sulama Sistemleri','Yeraltı Suyu İzleme','Maden Sahaları','Tarımsal Su'],
      ar: ['شبكات المياه البعيدة','قياس DMA والفاقد','أنظمة الري','رصد المياه الجوفية','مواقع التعدين','المياه الزراعية']
    }
  },
  {
    id: 'nt-vmf-i',
    code: 'NT-VMF-I',
    name: {
      en: 'Insertion Flow Meter',
      tr: 'Daldırma Tip Debimetre',
      ar: 'مقياس تدفق بالإدخال'
    },
    desc: {
      en: 'Single-point insertion electromagnetic flow meter for large-diameter pipelines. Retrofit onto existing lines without cutting the pipe. ABS or polypropylene body for chemical resistance. Hot-tap installation available.',
      tr: 'Büyük çaplı boru hatları için tek noktalı daldırma elektromanyetik debimetre. Boru kesilmeden mevcut hatlara sonradan takılabilir. Kimyasal direnç için ABS veya polipropilen gövde. Basınç altında montaj mevcut.',
      ar: 'مقياس تدفق كهرومغناطيسي بالإدخال لخطوط الأنابيب ذات الأقطار الكبيرة. ركّب على الخطوط الموجودة دون قطع الأنبوب. جسم ABS أو بولي بروبيلين. التركيب تحت الضغط متاح.'
    },
    features: {
      en: ['DN100–DN3000 pipe size','No pipe cutting — easy retrofit','ABS / Polypropylene body','Hot-tap installation optional','±0.5% accuracy','Bi-directional measurement','4-20 mA + Pulse + RS485','Suitable for large water mains'],
      tr: ['DN100–DN3000 boru çapı','Boru kesmeden — kolay montaj','ABS / Polipropilen gövde','Basınç altında montaj opsiyonel','±%0.5 doğruluk','İki yönlü ölçüm','4-20 mA + Pulse + RS485','Büyük su şebekeleri için uygun'],
      ar: ['حجم الأنبوب DN100–DN3000','بدون قطع الأنبوب — تركيب سهل','جسم ABS / بولي بروبيلين','تركيب hot-tap اختياري','دقة ±0.5%','قياس ثنائي الاتجاه','4-20 mA + نبضة + RS485','مناسب لشبكات المياه الكبيرة']
    },
    specs: {
      en: [
        ['Pipe Size','DN100 – DN3000'],
        ['Accuracy','±0.5% of reading'],
        ['Body Material','ABS / Polypropylene'],
        ['Electrode Material','SS316L'],
        ['Min. Conductivity','≥ 5 µS/cm'],
        ['Flow Velocity','0.3 – 15 m/s'],
        ['Medium Temperature','0 °C ~ +60 °C'],
        ['Nominal Pressure','≤ 0.6 MPa'],
        ['Supply Voltage','AC 85-250 V / DC 20-36 V'],
        ['Output','4-20 mA + Pulse + RS485'],
        ['Protection','IP65'],
        ['Installation','Insertion · Hot-tap (opt.)'],
      ],
      tr: [
        ['Boru Çapı','DN100 – DN3000'],
        ['Doğruluk','±%0.5 okuma değeri'],
        ['Gövde Malzemesi','ABS / Polipropilen'],
        ['Elektrot Malzemesi','SS316L'],
        ['Min. İletkenlik','≥ 5 µS/cm'],
        ['Akış Hızı','0.3 – 15 m/s'],
        ['Ortam Sıcaklığı','0 °C ~ +60 °C'],
        ['Nominal Basınç','≤ 0.6 MPa'],
        ['Besleme Gerilimi','AC 85-250 V / DC 20-36 V'],
        ['Çıkış','4-20 mA + Pulse + RS485'],
        ['Koruma Sınıfı','IP65'],
        ['Kurulum','Daldırma · Basınç altında (ops.)'],
      ],
      ar: [
        ['حجم الأنبوب','DN100 – DN3000'],
        ['الدقة','±0.5% من القراءة'],
        ['مادة الجسم','ABS / بولي بروبيلين'],
        ['مادة الأقطاب','SS316L'],
        ['الحد الأدنى للتوصيلية','≥ 5 µS/cm'],
        ['سرعة التدفق','0.3 – 15 م/ث'],
        ['درجة حرارة الوسط','0 °C ~ +60 °C'],
        ['الضغط الاسمي','≤ 0.6 MPa'],
        ['جهد الإمداد','AC 85-250 V / DC 20-36 V'],
        ['المخرجات','4-20 mA + نبضة + RS485'],
        ['درجة الحماية','IP65'],
        ['التركيب','إدخال · hot-tap (اختياري)'],
      ]
    },
    apps: {
      en: ['Large Water Mains','Irrigation Canals','Industrial Pipelines','Mining Water Supply','District Heating','Wastewater Networks'],
      tr: ['Büyük Su Şebekeleri','Sulama Kanalları','Endüstriyel Boru Hatları','Maden Su Temini','Bölgesel Isıtma','Atık Su Ağları'],
      ar: ['شبكات المياه الكبيرة','قنوات الري','خطوط أنابيب صناعية','إمداد مياه التعدين','التدفئة المحلية','شبكات الصرف الصحي']
    }
  },
  {
    id: 'nt-vmf-p',
    code: 'NT-VMF-P',
    name: {
      en: 'Partially-Filled Flow Meter',
      tr: 'Kısmi Dolgulu Debimetre',
      ar: 'مقياس تدفق الأنابيب غير المملوءة'
    },
    desc: {
      en: 'Measures both velocity and level simultaneously in non-full pipes using electromagnetic induction. Ideal for gravity-flow sewerage, stormwater and industrial drainage channels. DN200–DN3000 range.',
      tr: 'Elektromanyetik indüksiyon kullanarak tam dolmayan borularda hem hızı hem seviyeyi eşzamanlı ölçer. Yerçekimi akışlı kanalizasyon, yağmur suyu ve endüstriyel drenaj kanalları için idealdir. DN200–DN3000 aralığı.',
      ar: 'يقيس السرعة والمستوى في آنٍ واحد في الأنابيب غير المملوءة بالكامل. مثالي لشبكات الصرف الصحي بالجاذبية ومياه العواصف والمصارف الصناعية. النطاق DN200–DN3000.'
    },
    features: {
      en: ['Simultaneous velocity + level measurement','DN200 – DN3000','±2.5% accuracy for partial fill','No upstream straight pipe needed','RS485 / RS232 communication','Built-in data logger','Self-cleaning electrodes','Gravity-flow applications'],
      tr: ['Eşzamanlı hız + seviye ölçümü','DN200 – DN3000','Kısmi dolgu için ±%2.5 doğruluk','Yukarı akış düz boru gerekmez','RS485 / RS232 iletişim','Dahili veri kaydedici','Kendi kendini temizleyen elektrotlar','Yerçekimi akışı uygulamaları'],
      ar: ['قياس السرعة + المستوى في آنٍ واحد','DN200 – DN3000','دقة ±2.5% للملء الجزئي','لا يحتاج أنبوب مستقيم أمامي','اتصال RS485 / RS232','مسجل بيانات مدمج','أقطاب ذاتية التنظيف','تطبيقات التدفق بالجاذبية']
    },
    specs: {
      en: [
        ['Nominal Size','DN200 – DN3000'],
        ['Accuracy','±2.5% (partial fill)'],
        ['Measurement','Velocity + Level simultaneous'],
        ['Min. Fill Level','10% of diameter'],
        ['Electrode Material','SS316L / Hastelloy C'],
        ['Body Material','SS304 / SS316'],
        ['Medium Temperature','0 °C ~ +80 °C'],
        ['Supply Voltage','AC 85-250 V / DC 20-36 V'],
        ['Output','4-20 mA + Pulse + RS485 + RS232'],
        ['Protection','IP68'],
        ['Data Logger','Built-in (optional)'],
      ],
      tr: [
        ['Nominal Çap','DN200 – DN3000'],
        ['Doğruluk','±%2.5 (kısmi dolgu)'],
        ['Ölçüm','Hız + Seviye eşzamanlı'],
        ['Min. Dolgu Seviyesi','Çapın %10\'u'],
        ['Elektrot Malzemesi','SS316L / Hastelloy C'],
        ['Gövde Malzemesi','SS304 / SS316'],
        ['Ortam Sıcaklığı','0 °C ~ +80 °C'],
        ['Besleme Gerilimi','AC 85-250 V / DC 20-36 V'],
        ['Çıkış','4-20 mA + Pulse + RS485 + RS232'],
        ['Koruma Sınıfı','IP68'],
        ['Veri Kaydedici','Dahili (opsiyonel)'],
      ],
      ar: [
        ['الحجم الاسمي','DN200 – DN3000'],
        ['الدقة','±2.5% (ملء جزئي)'],
        ['القياس','سرعة + مستوى في آنٍ واحد'],
        ['أدنى مستوى ملء','10% من القطر'],
        ['مادة الأقطاب','SS316L / Hastelloy C'],
        ['مادة الجسم','SS304 / SS316'],
        ['درجة حرارة الوسط','0 °C ~ +80 °C'],
        ['جهد الإمداد','AC 85-250 V / DC 20-36 V'],
        ['المخرجات','4-20 mA + نبضة + RS485 + RS232'],
        ['درجة الحماية','IP68'],
        ['مسجل البيانات','مدمج (اختياري)'],
      ]
    },
    apps: {
      en: ['Sewerage Systems','Stormwater Drainage','Industrial Effluent','Open Channel Flow','Municipal Drainage','Culverts & Tunnels'],
      tr: ['Kanalizasyon Sistemleri','Yağmur Suyu Drenajı','Endüstriyel Atık Su','Açık Kanal Akışı','Belediye Drenajı','Menfezler & Tüneller'],
      ar: ['شبكات الصرف الصحي','تصريف مياه العواصف','مياه الصرف الصناعي','تدفق القناة المفتوحة','الصرف البلدي','القنوات والأنفاق']
    }
  },
  {
    id: 'nt-vmf-0d',
    code: 'NT-VMF-0D',
    name: {
      en: 'Zero Straight-Run Flow Meter',
      tr: 'Düz Boru Mesafesi Gerektirmeyen Debimetre',
      ar: 'مقياس تدفق بدون مسافة أنبوب مستقيمة'
    },
    desc: {
      en: 'Reduced-bore electromagnetic flow meter requiring zero upstream or downstream straight pipe. Installs directly after elbows, valves or pumps in space-constrained environments. Increases velocity for low-flow accuracy.',
      tr: 'Yukarı veya aşağı akışta düz boru mesafesi gerektirmeyen daraltılmış delikli elektromanyetik debimetre. Alan kısıtlı ortamlarda dirsek, vana veya pompa sonrasına doğrudan kurulur. Düşük debide doğruluk için hızı artırır.',
      ar: 'مقياس تدفق كهرومغناطيسي بفتحة مضيقة لا يحتاج أي طول مستقيم قبله أو بعده. يُركّب مباشرةً بعد المرافق والصمامات والمضخات في البيئات الضيقة. يزيد السرعة لدقة أفضل عند التدفق المنخفض.'
    },
    features: {
      en: ['0D upstream & downstream','Installs after elbows/valves/pumps','Increases low-flow velocity','DN50 – DN300','±0.5% accuracy','No flow conditioner needed','4-20 mA + Pulse + RS485','Compact installation footprint'],
      tr: ['0D yukarı ve aşağı akış','Dirsek/vana/pompa sonrası kurulum','Düşük debi hızını artırır','DN50 – DN300','±%0.5 doğruluk','Akış düzenleyici gerekmez','4-20 mA + Pulse + RS485','Kompakt kurulum alanı'],
      ar: ['0D أمامي وخلفي','يُركّب بعد المرافق/الصمامات/المضخات','يزيد سرعة التدفق المنخفض','DN50 – DN300','دقة ±0.5%','لا يحتاج معدّل تدفق','4-20 mA + نبضة + RS485','حجم تركيب صغير']
    },
    specs: {
      en: [
        ['Nominal Size','DN50 – DN300 (2" – 12")'],
        ['Upstream / Downstream','0D required'],
        ['Accuracy','±0.5% of reading'],
        ['Bore','Reduced (convergent)'],
        ['Body Material','Carbon Steel / SS304 / SS316'],
        ['Liner','PTFE · Neoprene · PU'],
        ['Electrodes','SS316L · Hastelloy C · Ti'],
        ['Medium Temperature','-10 °C ~ +150 °C'],
        ['Nominal Pressure','≤ 1.6 MPa'],
        ['Supply Voltage','AC 85-250 V / DC 20-36 V'],
        ['Output','4-20 mA + Pulse + RS485'],
        ['Protection','IP65 / IP67'],
      ],
      tr: [
        ['Nominal Çap','DN50 – DN300 (2" – 12")'],
        ['Yukarı / Aşağı Akış','0D yeterli'],
        ['Doğruluk','±%0.5 okuma değeri'],
        ['Delik','Daraltılmış (yakınsak)'],
        ['Gövde Malzemesi','Karbon Çelik / SS304 / SS316'],
        ['Astar','PTFE · Neopren · PÜ'],
        ['Elektrotlar','SS316L · Hastelloy C · Ti'],
        ['Ortam Sıcaklığı','-10 °C ~ +150 °C'],
        ['Nominal Basınç','≤ 1.6 MPa'],
        ['Besleme Gerilimi','AC 85-250 V / DC 20-36 V'],
        ['Çıkış','4-20 mA + Pulse + RS485'],
        ['Koruma Sınıfı','IP65 / IP67'],
      ],
      ar: [
        ['الحجم الاسمي','DN50 – DN300 (2" – 12")'],
        ['أمامي / خلفي','0D مطلوب'],
        ['الدقة','±0.5% من القراءة'],
        ['الفتحة','مضيقة (متقاربة)'],
        ['مادة الجسم','كربون فولاذي / SS304 / SS316'],
        ['البطانة','PTFE · نيوبرين · PU'],
        ['الأقطاب','SS316L · Hastelloy C · Ti'],
        ['درجة حرارة الوسط','-10 °C ~ +150 °C'],
        ['الضغط الاسمي','≤ 1.6 MPa'],
        ['جهد الإمداد','AC 85-250 V / DC 20-36 V'],
        ['المخرجات','4-20 mA + نبضة + RS485'],
        ['درجة الحماية','IP65 / IP67'],
      ]
    },
    apps: {
      en: ['Post-Valve Metering','Post-Pump Metering','Space-Constrained Plants','Low-Flow Enhancement','Chemical Dosing','Compact Skid Systems'],
      tr: ['Vana Sonrası Sayım','Pompa Sonrası Sayım','Alan Kısıtlı Tesisler','Düşük Debi İyileştirme','Kimyasal Dozajlama','Kompakt Skid Sistemleri'],
      ar: ['القياس بعد الصمامات','القياس بعد المضخات','المصانع ذات المساحة المحدودة','تعزيز التدفق المنخفض','جرعات كيميائية','أنظمة skid مدمجة']
    }
  },
  {
    id: 'nt-vmf-m',
    code: 'NT-VMF-M',
    name: {
      en: 'Miniature Flow Meter',
      tr: 'Minyatür Elektromanyetik Debimetre',
      ar: 'مقياس تدفق مصغّر'
    },
    desc: {
      en: 'Compact electromagnetic flow meter for DN3–DN15 micro-flow applications. Polyimide composite body for chemical resistance. Measures strong acids, alkalis, slurries and liquid-solid suspensions from 0.1 m/s minimum velocity.',
      tr: 'DN3–DN15 mikro akış uygulamaları için kompakt elektromanyetik debimetre. Kimyasal direnç için poliimid kompozit gövde. Minimum 0.1 m/s hızdan itibaren güçlü asitler, alkaliler, çamurlar ve sıvı-katı süspansiyonları ölçer.',
      ar: 'مقياس تدفق كهرومغناطيسي مدمج لتطبيقات التدفق الصغير DN3–DN15. جسم مركّب من البولي إيميد. يقيس الأحماض والقلويات والطين والمعلقات من أدنى سرعة 0.1 م/ث.'
    },
    features: {
      en: ['DN3 / DN6 / DN10 / DN15','Polyimide composite body','Min. velocity: 0.1 m/s','±0.5% accuracy','RS232 / RS485 Modbus','Empty-pipe detection','Power-failure data logging','30-day measurement records'],
      tr: ['DN3 / DN6 / DN10 / DN15','Poliimid kompozit gövde','Min. hız: 0.1 m/s','±%0.5 doğruluk','RS232 / RS485 Modbus','Boş boru tespiti','Güç kesintisi veri kaydı','30 günlük ölçüm kayıtları'],
      ar: ['DN3 / DN6 / DN10 / DN15','جسم مركّب من البولي إيميد','أدنى سرعة: 0.1 م/ث','دقة ±0.5%','RS232 / RS485 Modbus','كشف الأنبوب الفارغ','تسجيل بيانات عند انقطاع الكهرباء','سجلات قياس لمدة 30 يوماً']
    },
    specs: {
      en: [
        ['Nominal Size','DN3 · DN6 · DN10 · DN15 (thread)'],
        ['Flow Velocity','0.1 – 15 m/s'],
        ['Accuracy','±0.5% of reading'],
        ['Body Material','PIC (Polyimide Composite)'],
        ['Electrode Material','SS316L · Hastelloy C · Titanium'],
        ['Min. Conductivity','≥ 5 µS/cm'],
        ['Ambient Temperature','-10 °C ~ +55 °C'],
        ['Medium Temperature','-10 °C ~ +60 °C'],
        ['Nominal Pressure','≤ 1.0 MPa'],
        ['Supply Voltage','AC 85-250 V / DC 20-36 V'],
        ['Output','4-20 mA + Pulse + RS485'],
        ['Communication','RS232 / RS485 Modbus'],
        ['Protection','IP65'],
      ],
      tr: [
        ['Nominal Çap','DN3 · DN6 · DN10 · DN15 (diş)'],
        ['Akış Hızı','0.1 – 15 m/s'],
        ['Doğruluk','±%0.5 okuma değeri'],
        ['Gövde Malzemesi','PIC (Poliimid Kompozit)'],
        ['Elektrot Malzemesi','SS316L · Hastelloy C · Titanyum'],
        ['Min. İletkenlik','≥ 5 µS/cm'],
        ['Ortam Sıcaklığı','-10 °C ~ +55 °C'],
        ['Ortam Sıcaklığı','-10 °C ~ +60 °C'],
        ['Nominal Basınç','≤ 1.0 MPa'],
        ['Besleme Gerilimi','AC 85-250 V / DC 20-36 V'],
        ['Çıkış','4-20 mA + Pulse + RS485'],
        ['İletişim','RS232 / RS485 Modbus'],
        ['Koruma Sınıfı','IP65'],
      ],
      ar: [
        ['الحجم الاسمي','DN3 · DN6 · DN10 · DN15 (خيط)'],
        ['سرعة التدفق','0.1 – 15 م/ث'],
        ['الدقة','±0.5% من القراءة'],
        ['مادة الجسم','PIC (بولي إيميد مركّب)'],
        ['مادة الأقطاب','SS316L · Hastelloy C · تيتانيوم'],
        ['الحد الأدنى للتوصيلية','≥ 5 µS/cm'],
        ['درجة الحرارة المحيطة','-10 °C ~ +55 °C'],
        ['درجة حرارة الوسط','-10 °C ~ +60 °C'],
        ['الضغط الاسمي','≤ 1.0 MPa'],
        ['جهد الإمداد','AC 85-250 V / DC 20-36 V'],
        ['المخرجات','4-20 mA + نبضة + RS485'],
        ['الاتصالات','RS232 / RS485 Modbus'],
        ['درجة الحماية','IP65'],
      ]
    },
    apps: {
      en: ['Chemical Micro-Dosing','Pharmaceutical Lab','Reagent Injection','Ink & Dye Industry','Acid / Alkali Transfer','Slurry & Pulp Metering'],
      tr: ['Kimyasal Mikro Dozajlama','İlaç Laboratuvarı','Reaktif Enjeksiyonu','Mürekkep & Boya Sanayi','Asit / Alkali Transferi','Çamur & Hamur Sayımı'],
      ar: ['الجرعات الكيميائية الدقيقة','مختبر صيدلاني','حقن الكواشف','صناعة الحبر والصبغات','نقل الحامض / القاعدة','قياس الطين والعجينة']
    }
  },
  {
    id: 'nt-vmf-s',
    code: 'NT-VMF-S',
    name: {
      en: 'Slurry Flow Meter',
      tr: 'Çamurlu Akışkan Debimetresi',
      ar: 'مقياس تدفق الطين والعجائن'
    },
    desc: {
      en: 'Heavy-duty electromagnetic flow meter for abrasive slurries, mining pulp and drilling mud. High-frequency 25/30 Hz excitation suppresses particle noise. Platinum-iridium electrodes for maximum abrasion resistance and repeatability ≤0.17%.',
      tr: 'Aşındırıcı çamur, madencilik hamuru ve sondaj çamuru için ağır hizmet elektromanyetik debimetre. Yüksek frekanslı 25/30 Hz uyarımı parçacık gürültüsünü bastırır. Maksimum aşınma direnci için platin-iridyum elektrotlar, tekrarlanabilirlik ≤%0.17.',
      ar: 'مقياس تدفق كهرومغناطيسي للطين الكاشط وعجينة التعدين وطين الحفر. الإثارة بتردد عالٍ 25/30 هرتز تقلل ضوضاء الجسيمات. أقطاب بلاتين-إيريديوم لأقصى مقاومة للتآكل مع تكرارية ≤0.17%.'
    },
    features: {
      en: ['Pt-Ir electrodes — abrasion resistant','25 / 30 Hz high-frequency excitation','Repeatability ≤ 0.17%','DN3 – DN3000','Hard rubber or PU liner','±0.5% accuracy','4-20 mA + Pulse + RS485','Compact & remote versions'],
      tr: ['Pt-Ir elektrotlar — aşınmaya dayanıklı','25 / 30 Hz yüksek frekanslı uyarım','Tekrarlanabilirlik ≤ %0.17','DN3 – DN3000','Sert kauçuk veya PÜ astar','±%0.5 doğruluk','4-20 mA + Pulse + RS485','Kompakt & uzaktan versiyonlar'],
      ar: ['أقطاب Pt-Ir — مقاومة للتآكل','إثارة عالية التردد 25/30 هرتز','تكرارية ≤ 0.17%','DN3 – DN3000','بطانة مطاط صلب أو PU','دقة ±0.5%','4-20 mA + نبضة + RS485','إصدارات مدمجة وبعيدة']
    },
    specs: {
      en: [
        ['Nominal Size','DN3 – DN3000'],
        ['Accuracy','±0.5% / ±0.3% (opt.)'],
        ['Repeatability','≤ 0.17%'],
        ['Excitation Frequency','25 Hz / 30 Hz'],
        ['Electrode Material','Platinum-Iridium (Pt-Ir)'],
        ['Liner Material','Hard Rubber · Polyurethane · PTFE'],
        ['Body Material','Carbon Steel / SS304 / SS316'],
        ['Min. Conductivity','≥ 5 µS/cm'],
        ['Medium Temperature','-10 °C ~ +80 °C'],
        ['Nominal Pressure','≤ 1.6 MPa'],
        ['Supply Voltage','AC 85-250 V / DC 20-36 V'],
        ['Output','4-20 mA + Pulse + RS485'],
        ['Protection','IP65 / IP67'],
      ],
      tr: [
        ['Nominal Çap','DN3 – DN3000'],
        ['Doğruluk','±%0.5 / ±%0.3 (ops.)'],
        ['Tekrarlanabilirlik','≤ %0.17'],
        ['Uyarım Frekansı','25 Hz / 30 Hz'],
        ['Elektrot Malzemesi','Platin-İridyum (Pt-Ir)'],
        ['Astar Malzemesi','Sert Kauçuk · Poliüretan · PTFE'],
        ['Gövde Malzemesi','Karbon Çelik / SS304 / SS316'],
        ['Min. İletkenlik','≥ 5 µS/cm'],
        ['Ortam Sıcaklığı','-10 °C ~ +80 °C'],
        ['Nominal Basınç','≤ 1.6 MPa'],
        ['Besleme Gerilimi','AC 85-250 V / DC 20-36 V'],
        ['Çıkış','4-20 mA + Pulse + RS485'],
        ['Koruma Sınıfı','IP65 / IP67'],
      ],
      ar: [
        ['الحجم الاسمي','DN3 – DN3000'],
        ['الدقة','±0.5% / ±0.3% (اختياري)'],
        ['التكرارية','≤ 0.17%'],
        ['تردد الإثارة','25 هرتز / 30 هرتز'],
        ['مادة الأقطاب','بلاتين-إيريديوم (Pt-Ir)'],
        ['مادة البطانة','مطاط صلب · بولي يوريثان · PTFE'],
        ['مادة الجسم','كربون فولاذي / SS304 / SS316'],
        ['الحد الأدنى للتوصيلية','≥ 5 µS/cm'],
        ['درجة حرارة الوسط','-10 °C ~ +80 °C'],
        ['الضغط الاسمي','≤ 1.6 MPa'],
        ['جهد الإمداد','AC 85-250 V / DC 20-36 V'],
        ['المخرجات','4-20 mA + نبضة + RS485'],
        ['درجة الحماية','IP65 / IP67'],
      ]
    },
    apps: {
      en: ['Mining & Ore Processing','Cement & Concrete','Drilling Mud','Paper & Pulp','Wastewater Sludge','Chemical Slurries'],
      tr: ['Madencilik & Cevher İşleme','Çimento & Beton','Sondaj Çamuru','Kağıt & Hamur','Atık Su Çamuru','Kimyasal Çamurlar'],
      ar: ['تعدين ومعالجة الخام','أسمنت وخرسانة','طين الحفر','ورق ولب الخشب','حمأة الصرف الصحي','طين كيميائي']
    }
  },
  {
    id: 'nt-mbl',
    code: 'NT-MBL',
    name: {
      en: 'Magnetic Bypass Level Indicator',
      tr: 'Manyetik Baypas Seviye Göstergesi',
      ar: 'مؤشر مستوى التجاوز المغناطيسي'
    },
    desc: {
      en: 'No-power magnetic bypass level indicator with rotating flag elements. Level change in the tank proportionally changes liquid level in the bypass tube; the internal magnetic float actuates 180° colour-flip flaps visible from 15 m. Up to 5800 mm single-piece construction.',
      tr: 'Döner bayrak elemanları ile güç gerektirmeyen manyetik baypas seviye göstergesi. Tankta seviye değişimi bypass tüpündeki sıvı seviyesini aynı oranda değiştirir; dahili mıknatıslı şamandıra 15 m\'den görülebilen 180° renk döndüren flapları aktive eder. 5800 mm\'ye kadar tek parça imalat.',
      ar: 'مؤشر مستوى تجاوز مغناطيسي لا يحتاج طاقة مع عناصر علم دوّارة. يتغير مستوى السائل في أنبوب التجاوز بنسبة التغيير في الخزان؛ العوّامة المغناطيسية الداخلية تُشغّل الحواجز التي تقلب لوناً 180° مرئية من 15 م. تصنيع أحادي القطعة حتى 5800 مم.'
    },
    features: {
      en: ['No power required','Visible from 15 m distance','Pressure: 10/16/25/40 bar','Temperature: up to 350 °C','Single-piece up to 5800 mm','SS316 tube as standard','Limit switches optional','Bureau Veritas & Türk Loydu approved'],
      tr: ['Güç gerektirmez','15 m mesafeden görünür','Basınç: 10/16/25/40 bar','Sıcaklık: 350 °C\'ye kadar','5800 mm\'ye kadar tek parça','SS316 tüp standart','Limit switchler opsiyonel','Bureau Veritas & Türk Loydu onaylı'],
      ar: ['لا يحتاج طاقة','مرئي من مسافة 15 م','الضغط: 10/16/25/40 بار','درجة الحرارة: حتى 350°C','قطعة واحدة حتى 5800 مم','أنبوب SS316 كقياسي','مفاتيح الحد اختيارية','معتمد من Bureau Veritas وتيرك لويدو']
    },
    specs: {
      en: [
        ['Nominal Pressure','10 / 16 / 25 / 40 bar'],
        ['Max. Temperature','200 °C (std) / 350 °C (HT)'],
        ['Min. Liquid Density','> 0.7 kg/L'],
        ['Level Tube Material','AISI 304 / AISI 316'],
        ['Flange Material','St 37.2 / AISI 304 / AISI 316'],
        ['Max. Single Length','5800 mm'],
        ['Connection Type','Flanged · Threaded · Special'],
        ['Flag Element','Glass-fibre reinforced'],
        ['Limit Switches','Reed / magnetic (optional)'],
        ['Approvals','Bureau Veritas · Türk Loydu · TSEK'],
        ['Analog Transmitter','4-20 mA add-on (optional)'],
      ],
      tr: [
        ['Nominal Basınç','10 / 16 / 25 / 40 bar'],
        ['Maks. Sıcaklık','200 °C (std) / 350 °C (YS)'],
        ['Min. Sıvı Yoğunluğu','> 0.7 kg/L'],
        ['Seviye Tüpü Malzemesi','AISI 304 / AISI 316'],
        ['Flanş Malzemesi','St 37.2 / AISI 304 / AISI 316'],
        ['Maks. Tek Uzunluk','5800 mm'],
        ['Bağlantı Tipi','Flanşlı · Dişli · Özel'],
        ['Bayrak Eleman','Cam elyaf takviyeli'],
        ['Limit Switchler','Reed / manyetik (opsiyonel)'],
        ['Onaylar','Bureau Veritas · Türk Loydu · TSEK'],
        ['Analog Transmitter','4-20 mA eklenti (opsiyonel)'],
      ],
      ar: [
        ['الضغط الاسمي','10 / 16 / 25 / 40 بار'],
        ['أقصى درجة حرارة','200°C (قياسي) / 350°C (HT)'],
        ['أدنى كثافة سائل','> 0.7 كغ/ل'],
        ['مادة أنبوب المستوى','AISI 304 / AISI 316'],
        ['مادة الفلانج','St 37.2 / AISI 304 / AISI 316'],
        ['أقصى طول قطعة واحدة','5800 مم'],
        ['نوع التوصيل','فلانج · مسنن · خاص'],
        ['عنصر العلم','ألياف زجاجية مقوّاة'],
        ['مفاتيح الحد','Reed / مغناطيسي (اختياري)'],
        ['الاعتمادات','Bureau Veritas · تيرك لويدو · TSEK'],
        ['ناقل تناظري','4-20 mA إضافة (اختياري)'],
      ]
    },
    apps: {
      en: ['Storage Tanks','Boiler Drums','Fuel & LPG Tanks','Chemical Tanks','Ship Ballast Tanks','Refineries'],
      tr: ['Depolama Tankları','Kazan Tamburları','Yakıt & LPG Tankları','Kimya Tankları','Gemi Balast Tankları','Rafineriler'],
      ar: ['خزانات التخزين','طبول المراجل','خزانات الوقود وLPG','خزانات الكيماويات','صهاريج التوازن السفني','المصافي']
    }
  },
  {
    id: 'nt-lsw-p',
    code: 'NT-LSW-P',
    name: {
      en: 'Paddle Motor Level Switch',
      tr: 'Pedallı Motorlu Seviye Şalteri',
      ar: 'مفتاح مستوى بمحرك بدال'
    },
    desc: {
      en: 'Rotating-paddle level switch for reliable full/empty detection in bulk solid silos. When material covers the rotating paddle, resistance torque stops the shaft; an optical sensor detects this and triggers the relay output. Eight selectable torque levels suit any bulk density.',
      tr: 'Dökme katı silolarında güvenilir doldu/boşaldı tespiti için döner paletli seviye şalteri. Malzeme dönen paleti kapattığında direnç torku mili durdurur; optik sensör bunu algılayarak röle çıkışını tetikler. Sekiz seçilebilir tork seviyesi her özgül ağırlığa uygundur.',
      ar: 'مفتاح مستوى بدال دوّار للكشف الموثوق عن الامتلاء/الفراغ في صوامع المواد السائبة. عندما تغطي المادة الدوّار، تُوقف عزم المقاومة العمود؛ يكتشف المستشعر الضوئي ذلك ويُشغّل مخرج التتابع. ثمانية مستويات عزم تناسب أي كثافة.'
    },
    features: {
      en: ['8 selectable torque levels','24VDC or 220VAC versions','IP67 standard / IP68 optional','Max. response time: 1.6 s','Relay output NO/NC','Suitable for powders & granules','Digital gearbox-free design','Compact ORION series'],
      tr: ['8 seçilebilir tork seviyesi','24VDC veya 220VAC versiyonları','IP67 standart / IP68 opsiyonel','Maks. yanıt süresi: 1.6 s','Röle çıkışı NO/NC','Toz & granül için uygun','Dijital dişlisiz tasarım','Kompakt ORION serisi'],
      ar: ['8 مستويات عزم قابلة للاختيار','إصدارات 24VDC أو 220VAC','IP67 قياسي / IP68 اختياري','أقصى زمن استجابة: 1.6 ث','مخرج تتابع NO/NC','مناسب للمساحيق والحبيبات','تصميم رقمي بدون علبة تروس','سلسلة ORION مدمجة']
    },
    specs: {
      en: [
        ['Supply (DC)','12 – 24 VDC ±30%, max 2.7 W'],
        ['Supply (AC)','85 – 250 VAC, max 3.1 W'],
        ['Output','1 relay, NO/NC, max 250VAC / 1A'],
        ['Response Time','≤ 1.6 seconds'],
        ['Torque Selection','8 digital levels'],
        ['Protection','IP67 (std) / IP68 (opt.)'],
        ['Cable Entry','PG9, max 2 mm² (AWG14)'],
        ['Ambient Temperature','-20 °C ~ +70 °C'],
        ['Process Temperature','max +80 °C'],
        ['Paddle Length','Standard 150 mm'],
        ['Applications','Powder · Grain · Granules · Cement'],
        ['Certifications','CE'],
      ],
      tr: [
        ['Besleme (DC)','12 – 24 VDC ±%30, maks 2.7 W'],
        ['Besleme (AC)','85 – 250 VAC, maks 3.1 W'],
        ['Çıkış','1 röle, NO/NC, maks 250VAC / 1A'],
        ['Yanıt Süresi','≤ 1.6 saniye'],
        ['Tork Seçimi','8 dijital kademeli'],
        ['Koruma Sınıfı','IP67 (std) / IP68 (ops.)'],
        ['Kablo Girişi','PG9, maks 2 mm² (AWG14)'],
        ['Ortam Sıcaklığı','-20 °C ~ +70 °C'],
        ['Proses Sıcaklığı','maks +80 °C'],
        ['Palet Uzunluğu','Standart 150 mm'],
        ['Uygulamalar','Toz · Tahıl · Granül · Çimento'],
        ['Sertifikalar','CE'],
      ],
      ar: [
        ['الإمداد (تيار مستمر)','12 – 24 VDC ±30%، بحد أقصى 2.7 واط'],
        ['الإمداد (تيار متردد)','85 – 250 VAC، بحد أقصى 3.1 واط'],
        ['المخرج','تتابع 1، NO/NC، بحد أقصى 250VAC / 1A'],
        ['زمن الاستجابة','≤ 1.6 ثانية'],
        ['اختيار العزم','8 مستويات رقمية'],
        ['درجة الحماية','IP67 (قياسي) / IP68 (اختياري)'],
        ['مدخل الكابل','PG9، بحد أقصى 2 مم² (AWG14)'],
        ['درجة الحرارة المحيطة','-20 °C ~ +70 °C'],
        ['درجة حرارة العملية','بحد أقصى +80 °C'],
        ['طول الدوّار','150 مم قياسي'],
        ['التطبيقات','مسحوق · حبوب · حبيبات · أسمنت'],
        ['الشهادات','CE'],
      ]
    },
    apps: {
      en: ['Grain & Feed Silos','Cement Plants','Plaster & Lime Production','Plastic Granule Storage','Coal & Coke Bunkers','Flour & Sugar Mills'],
      tr: ['Tahıl & Yem Siloları','Çimento Tesisleri','Alçı & Kireç Üretimi','Plastik Granül Depolama','Kömür & Kok Bunkerları','Un & Şeker Değirmenleri'],
      ar: ['صوامع الحبوب والأعلاف','مصانع الأسمنت','إنتاج الجبس والجير','تخزين الحبيبات البلاستيكية','مخازن الفحم والكوك','طواحين الدقيق والسكر']
    }
  }
];

// ─── LABELS ─────────────────────────────────────────────────────────────────
const LABELS = {
  en: {
    datasheet: 'DATASHEET',
    features: 'KEY FEATURES',
    specs: 'TECHNICAL SPECIFICATIONS',
    apps: 'APPLICATIONS',
    parameter: 'PARAMETER',
    value: 'VALUE',
    contact: 'CONTACT',
    web: 'Web',
    email: 'Email',
    whatsapp: 'WhatsApp',
    madeIn: 'Made in Türkiye',
    accred: 'TÜRKAK AB-0354-K · ISO/IEC 17025:2017',
    dir: 'ltr'
  },
  tr: {
    datasheet: 'TEKNİK VERİ SAYFASI',
    features: 'TEMEL ÖZELLİKLER',
    specs: 'TEKNİK ÖZELLİKLER',
    apps: 'UYGULAMA ALANLARI',
    parameter: 'PARAMETRE',
    value: 'DEĞER',
    contact: 'İLETİŞİM',
    web: 'Web',
    email: 'E-posta',
    whatsapp: 'WhatsApp',
    madeIn: 'Türkiye Üretimi',
    accred: 'TÜRKAK AB-0354-K · ISO/IEC 17025:2017',
    dir: 'ltr'
  },
  ar: {
    datasheet: 'ورقة البيانات الفنية',
    features: 'الميزات الرئيسية',
    specs: 'المواصفات الفنية',
    apps: 'التطبيقات',
    parameter: 'المعامل',
    value: 'القيمة',
    contact: 'التواصل',
    web: 'الموقع',
    email: 'البريد',
    whatsapp: 'واتساب',
    madeIn: 'صُنع في تركيا',
    accred: 'TÜRKAK AB-0354-K · ISO/IEC 17025:2017',
    dir: 'rtl'
  }
};

// ─── HTML GENERATOR ──────────────────────────────────────────────────────────
function generateHTML(product, lang) {
  const L = LABELS[lang];
  const dir = L.dir;
  const isAR = lang === 'ar';

  const featureRows = product.features[lang].map(f =>
    `<li>${f}</li>`
  ).join('');

  const specRows = product.specs[lang].map(([param, val]) =>
    `<tr><td class="param">${param}</td><td class="val">${val}</td></tr>`
  ).join('');

  const appItems = product.apps[lang].map(a =>
    `<div class="app-chip">${a}</div>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${product.name[lang]} — Net Flow Datasheet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&${isAR ? 'family=Cairo:wght@400;600;700&' : ''}display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  :root{
    --navy:#0a1628;
    --navy2:#112140;
    --teal:#0e8c8c;
    --teal2:#0a6e6e;
    --white:#ffffff;
    --gray50:#f8f9fa;
    --gray100:#e9ecef;
    --gray200:#dee2e6;
    --gray600:#6c757d;
    --gray800:#343a40;
    --ink:#0a1628;
    --f:${isAR ? "'Cairo'" : "'Inter'"}, -apple-system, sans-serif;
    --fm:'JetBrains Mono', monospace;
  }
  @page{size:A4;margin:0}
  html,body{width:210mm;height:297mm;font-family:var(--f);color:var(--ink);font-size:9pt;line-height:1.5}

  /* HEADER */
  .hdr{background:var(--navy);color:#fff;padding:18mm 16mm 12mm;display:flex;justify-content:space-between;align-items:flex-start;gap:20px}
  .hdr-left{flex:1}
  .logo-area{display:flex;flex-direction:column;gap:6px;margin-bottom:14px}
  .logo-svg{height:32px;width:auto}
  .logo-text{font-weight:700;font-size:15pt;color:#fff;letter-spacing:-0.3px}
  .logo-sub{font-size:7pt;color:#7a9bb5;letter-spacing:0.12em;text-transform:uppercase;margin-top:1px}
  .prod-code{font-family:var(--fm);font-size:8pt;color:var(--teal);letter-spacing:0.08em;margin-bottom:4px}
  .prod-name{font-size:20pt;font-weight:800;color:#fff;line-height:1.15;letter-spacing:-0.3px}
  .ds-badge{margin-top:10px;display:inline-block;background:rgba(14,140,140,0.25);border:1px solid var(--teal);color:var(--teal);font-family:var(--fm);font-size:7pt;padding:3px 9px;border-radius:4px;letter-spacing:0.1em}
  .hdr-right{width:80px;display:flex;flex-direction:column;align-items:flex-end;gap:6px}
  .cert-pill{font-family:var(--fm);font-size:6pt;color:#7a9bb5;text-align:right;line-height:1.4}

  /* BODY */
  .body{padding:10mm 16mm 0;display:grid;grid-template-columns:1fr 1fr;gap:10mm}
  .col{display:flex;flex-direction:column;gap:8mm}

  /* SECTIONS */
  .sec-title{font-size:6.5pt;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);border-bottom:1.5px solid var(--teal);padding-bottom:3px;margin-bottom:7px}
  .desc{font-size:8.5pt;color:#2c3e50;line-height:1.6}
  .feat-list{list-style:none;display:flex;flex-direction:column;gap:3px}
  .feat-list li{font-size:8pt;padding-${isAR?'right':'left'}:10px;position:relative;color:var(--gray800)}
  .feat-list li::before{content:'▸';position:absolute;${isAR?'right':'left'}:0;color:var(--teal);font-size:7pt;top:1px}

  /* SPECS TABLE */
  .specs-wrap{grid-column:1/-1}
  table{width:100%;border-collapse:collapse}
  tr:nth-child(odd){background:var(--gray50)}
  tr:nth-child(even){background:#fff}
  td{padding:4px 8px;font-size:8pt;border-bottom:1px solid var(--gray200)}
  td.param{font-weight:600;color:var(--navy);width:40%;${isAR?'text-align:right':'text-align:left'}}
  td.val{font-family:var(--fm);color:var(--gray800);font-size:7.5pt}

  /* APPS */
  .apps-wrap{grid-column:1/-1}
  .apps-grid{display:flex;flex-wrap:wrap;gap:5px}
  .app-chip{background:var(--gray50);border:1px solid var(--gray200);border-radius:4px;padding:4px 9px;font-size:7.5pt;color:var(--navy2);font-weight:500}

  /* FOOTER */
  .ftr{background:var(--navy);color:#fff;padding:8px 16mm;display:flex;justify-content:space-between;align-items:center;margin-top:auto;position:fixed;bottom:0;left:0;right:0;height:22mm}
  .ftr-contact{display:flex;flex-direction:column;gap:3px}
  .ftr-row{display:flex;align-items:center;gap:6px;font-size:7.5pt;color:#aebfd0}
  .ftr-row strong{color:#fff;font-size:7.5pt}
  .ftr-right{text-align:${isAR?'left':'right'}}
  .ftr-brand{font-weight:700;font-size:10pt;color:#fff;margin-bottom:3px}
  .ftr-made{font-size:6.5pt;color:var(--teal);letter-spacing:0.08em;text-transform:uppercase}
  .ftr-accred{font-family:var(--fm);font-size:6pt;color:#7a9bb5;margin-top:2px}
  .teal{color:var(--teal)}

  .main-wrap{min-height:calc(297mm - 22mm);display:flex;flex-direction:column}
</style>
</head>
<body>
<div class="main-wrap">
  <!-- HEADER -->
  <div class="hdr">
    <div class="hdr-left">
      <div class="logo-area">
        <svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406.08 103.78"><path fill="#fff" d="M0,0c7.33.45,10.99.66,18.32,1.07,4.68,20.24,9.42,40.47,14.2,60.69.11,0,.16,0,.27,0V1.84c5.2.27,7.81.4,13.01.64,0,32.94,0,65.87,0,98.81-6,.28-9,.43-15,.74-5.93-24.53-11.77-49.09-17.52-73.66-.11,0-.16,0-.27,0v74.64c-5.2.3-7.8.45-13.01.77V0Z"/><path fill="#fff" d="M63.72,3.28c13.28.53,26.56,1.01,39.85,1.43,0,5.39,0,8.09,0,13.48-10.1-.22-15.14-.34-25.24-.61,0,10.15,0,15.23,0,25.39,8.02.06,12.03.08,20.06.13,0,5.41,0,8.11,0,13.52-8.02.03-12.04.04-20.06.07,0,11.8,0,17.7,0,29.5,10.09-.27,15.14-.39,25.24-.61,0,5.39,0,8.09,0,13.48-13.29.43-26.57.9-39.85,1.43,0-32.4,0-64.81,0-97.21Z"/><path fill="#fff" d="M130.41,18.69c-6.11-.1-9.17-.15-15.28-.26V5.04c15.06.4,30.12.69,45.18.89,0,5.25,0,7.88,0,13.13-6.11-.06-9.17-.09-15.28-.17,0,26.4,0,52.79,0,79.19-5.85.1-8.77.16-14.62.29,0-26.56,0-53.12,0-79.68Z"/><path fill="#fff" d="M174.4,6.08c12.89.08,25.78.12,38.67.11v13.06c-9.62.02-14.43.02-24.05-.01v25.47c7.55,0,11.32,0,18.87,0v13.05c-7.55,0-11.32,0-18.87,0v39.84c-5.85.02-8.77.04-14.62.09V6.08Z"/><path fill="#fff" d="M227.16,6.12c5.85-.04,8.77-.07,14.62-.14v78.71c9.62.08,14.43.13,24.05.26v13.22c-12.89-.22-25.78-.39-38.67-.51,0-30.52,0-61.03,0-91.55Z"/><path fill="#fff" d="M284.03,93.76c-3.81-4.17-5.71-9.96-5.71-17.41V27.42c0-7.45,1.9-13.23,5.71-17.41,3.81-4.17,9.3-6.37,16.48-6.59,7.17-.22,12.66,1.67,16.47,5.72,3.81,4.06,5.71,9.93,5.71,17.59v50.3c0,7.65-1.91,13.53-5.71,17.59-3.81,4.06-9.3,5.94-16.47,5.72-7.17-.22-12.67-2.42-16.48-6.59ZM308.08,77.73V26.05c0-6.22-2.52-9.27-7.57-9.16s-7.57,3.24-7.57,9.4c0,17.06,0,34.13,0,51.19,0,6.16,2.53,9.29,7.57,9.4,5.05.11,7.57-2.94,7.57-9.16Z"/><path fill="#fff" d="M336.11,3.54c5.63-.23,8.45-.34,14.08-.59,2.18,25.13,4.35,50.26,6.51,75.39.11,0,.16,0,.27,0,2.31-25.34,4.62-50.69,6.9-76.03,6.37-.31,9.56-.47,15.93-.81,2.31,25.88,4.62,51.77,6.9,77.65.11,0,.16,0,.27,0,2.18-26.14,4.35-52.28,6.5-78.42,5.04-.29,7.57-.44,12.61-.75-3.11,34.41-6.25,68.81-9.42,103.22-7.27-.42-10.91-.63-18.18-1.01-2.2-22.58-4.41-45.16-6.64-67.74-.11,0-.16,0-.27,0-2.2,22.35-4.41,44.7-6.64,67.04-7.75-.38-11.63-.56-19.39-.89-3.12-32.37-6.26-64.73-9.43-97.09Z"/></svg>
        <div class="logo-sub">Industrial Instrumentation</div>
      </div>
      <div class="prod-code">${product.code}</div>
      <div class="prod-name">${product.name[lang]}</div>
      <div class="ds-badge">${L.datasheet}</div>
    </div>
    <div class="hdr-right">
      <div class="cert-pill">${L.accred}</div>
    </div>
  </div>

  <!-- BODY -->
  <div class="body">
    <!-- Description -->
    <div class="col">
      <div>
        <div class="sec-title">${product.code} — ${product.name[lang]}</div>
        <div class="desc">${product.desc[lang]}</div>
      </div>
      <div>
        <div class="sec-title">${L.features}</div>
        <ul class="feat-list">${featureRows}</ul>
      </div>
    </div>

    <!-- Applications -->
    <div class="col">
      <div>
        <div class="sec-title">${L.apps}</div>
        <div class="apps-grid">${appItems}</div>
      </div>
    </div>

    <!-- Specs (full width) -->
    <div class="specs-wrap">
      <div class="sec-title">${L.specs}</div>
      <table>
        <thead><tr style="background:var(--navy)"><th style="padding:5px 8px;text-align:${isAR?'right':'left'};color:#aebfd0;font-size:7pt;font-weight:600;letter-spacing:0.1em">${L.parameter}</th><th style="padding:5px 8px;text-align:${isAR?'right':'left'};color:#aebfd0;font-size:7pt;font-weight:600;letter-spacing:0.1em">${L.value}</th></tr></thead>
        <tbody>${specRows}</tbody>
      </table>
    </div>
  </div>
</div>

<!-- FOOTER -->
<div class="ftr">
  <div class="ftr-contact">
    <div class="ftr-row"><strong>${L.web}:</strong> netflw.com</div>
    <div class="ftr-row"><strong>${L.email}:</strong> info@netflw.com</div>
    <div class="ftr-row"><strong>${L.whatsapp}:</strong> +90 541 373 79 53</div>
  </div>
  <div class="ftr-right">
    <div class="ftr-brand">Net Flow</div>
    <div class="ftr-made">${L.madeIn}</div>
    <div class="ftr-accred">${L.accred}</div>
  </div>
</div>
</body>
</html>`;
}

// ─── GENERATE PDFs ───────────────────────────────────────────────────────────
const CHROME_BIN = `"${CHROME}"`;
const LANGS = ['en','tr','ar'];

let total = 0;
for (const product of PRODUCTS) {
  for (const lang of LANGS) {
    const html = generateHTML(product, lang);
    const htmlPath = path.join(TMP, `${product.id}-${lang}.html`);
    const pdfPath  = path.join(OUT, lang, `${product.id}-${lang}.pdf`);

    fs.writeFileSync(htmlPath, html, 'utf8');

    try {
      execSync(`${CHROME_BIN} --headless --disable-gpu --no-sandbox --print-to-pdf="${pdfPath}" --print-to-pdf-no-header "file://${htmlPath}" 2>/dev/null`, { stdio: 'inherit' });
      console.log(`✓  ${pdfPath}`);
      total++;
    } catch(e) {
      console.error(`✗  ${product.id}-${lang}: ${e.message}`);
    }
  }
}

// cleanup tmp
fs.rmSync(TMP, { recursive: true, force: true });
console.log(`\nDone. ${total} PDFs generated.`);
