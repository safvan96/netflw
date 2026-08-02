/**
 * Net Flow — Full Product Catalog PDF Generator
 * Generates a multi-page catalog in EN / TR / AR / RU
 * Run: node generate-catalog.js
 */
const { execSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT    = path.join(__dirname);
const TMP    = path.join(__dirname, '_tmp');

['en','tr','ar','ru'].forEach(l => fs.mkdirSync(path.join(OUT, l), { recursive: true }));
fs.mkdirSync(TMP, { recursive: true });

const PRODUCTS = [
  {code:'NT-VMF', name:{en:'Electromagnetic Flow Meter',tr:'Elektromanyetik Debimetre',ar:'مقياس التدفق الكهرومغناطيسي',ru:'Электромагнитный расходомер'}, cat:{en:'Flow Meter',tr:'Debimetre',ar:'مقياس التدفق',ru:'Расходомер'}, specs:{en:[['DN3–DN3000','Diameter'],['±0.2%','Accuracy'],['IP68','Protection'],['4–20mA / HART','Output']],tr:[['DN3–DN3000','Çap'],['±0,2%','Doğruluk'],['IP68','Koruma'],['4–20mA / HART','Çıkış']],ar:[['DN3–DN3000','القطر'],['±0.2%','الدقة'],['IP68','الحماية'],['4–20mA / HART','المخرج']],ru:[['DN3–DN3000','Диаметр'],['±0,2%','Точность'],['IP68','Защита'],['4–20мА / HART','Выход']]}, desc:{en:'No moving parts, zero pressure drop. For any conductive liquid, six liners, six electrode alloys.',tr:'Hareketli parça yok, basınç kaybı sıfır. Tüm iletken sıvılar için altı astar ve elektrot seçeneği.',ar:'لا أجزاء متحركة، صفر فقد ضغط. لجميع السوائل الموصلة مع ست بطانات وست سبائك.',ru:'Без движущихся частей, нулевая потеря давления. Для любой проводящей жидкости, шесть футеровок и электродов.'}},
  {code:'NT-VMF-W', name:{en:'Food-Grade Flow Meter',tr:'Hijyenik Debimetre',ar:'مقياس تدفق غذائي',ru:'Пищевой расходомер'}, cat:{en:'Flow Meter',tr:'Debimetre',ar:'مقياس التدفق',ru:'Расходомер'}, specs:{en:[['DN10–DN200','Diameter'],['Tri-Clamp','Connection'],['PTFE / PFA','Liner'],['316L','Electrode']],tr:[['DN10–DN200','Çap'],['Tri-Clamp','Bağlantı'],['PTFE / PFA','Astar'],['316L','Elektrot']],ar:[['DN10–DN200','القطر'],['Tri-Clamp','التوصيل'],['PTFE / PFA','البطانة'],['316L','القطب']],ru:[['DN10–DN200','Диаметр'],['Tri-Clamp','Соединение'],['PTFE / PFA','Футеровка'],['316L','Электрод']]}, desc:{en:'Hygienic tri-clamp for dairy, beverage and pharma lines.',tr:'Süt, içecek ve ilaç hatları için hijyenik tri-clamp bağlantı.',ar:'توصيل صحي Tri-Clamp لخطوط الألبان والمشروبات والأدوية.',ru:'Гигиеническое соединение Tri-Clamp для молочных, напиточных и фарм линий.'}},
  {code:'NT-VMF-BT', name:{en:'Battery-Powered Flow Meter',tr:'Bataryalı Debimetre',ar:'مقياس تدفق بالبطارية',ru:'Расходомер на батарее'}, cat:{en:'Flow Meter',tr:'Debimetre',ar:'مقياس التدفق',ru:'Расходомер'}, specs:{en:[['DN3–DN600','Diameter'],['3.6V Li','Power'],['5 years','Battery life'],['IP68','Protection']],tr:[['DN3–DN600','Çap'],['3.6V Li','Besleme'],['5 yıl','Pil ömrü'],['IP68','Koruma']],ar:[['DN3–DN600','القطر'],['3.6V Li','الطاقة'],['5 سنوات','عمر البطارية'],['IP68','الحماية']],ru:[['DN3–DN600','Диаметр'],['3,6В Li','Питание'],['5 лет','Ресурс батареи'],['IP68','Защита']]}, desc:{en:'Five-year lithium battery for remote sites, irrigation and DMA stations.',tr:'Uzak sahalar, sulama ve DMA istasyonları için beş yıllık lityum pil.',ar:'بطارية ليثيوم لخمس سنوات للمواقع البعيدة والري ومحطات DMA.',ru:'Пятилетняя литиевая батарея для удалённых объектов, ирригации и станций DMA.'}},
  {code:'NT-VMF-I', name:{en:'Insertion Flow Meter',tr:'Daldırma Debimetre',ar:'مقياس تدفق إدخالي',ru:'Погружной расходомер'}, cat:{en:'Flow Meter',tr:'Debimetre',ar:'مقياس التدفق',ru:'Расходомер'}, specs:{en:[['DN100–DN3000','Diameter'],['±0.5%','Accuracy'],['ABS / PP','Body'],['Hot-tap','Install']],tr:[['DN100–DN3000','Çap'],['±0,5%','Doğruluk'],['ABS / PP','Gövde'],['Hot-tap','Montaj']],ar:[['DN100–DN3000','القطر'],['±0.5%','الدقة'],['ABS / PP','الجسم'],['وصل ساخن','التركيب']],ru:[['DN100–DN3000','Диаметр'],['±0,5%','Точность'],['ABS / PP','Корпус'],['Hot-tap','Монтаж']]}, desc:{en:'Single-point insertion for large mains, retrofit without cutting the pipe.',tr:'Büyük ana hatlar için tek nokta daldırma, boru kesmeden montaj.',ar:'إدخال نقطة واحدة للأنابيب الكبيرة دون قطع.',ru:'Врезка в большие трубопроводы без резки трубы.'}},
  {code:'NT-VMF-P', name:{en:'Partially-Filled Flow Meter',tr:'Kısmi Dolu Debimetre',ar:'مقياس تدفق جزئي الامتلاء',ru:'Расходомер неполного заполнения'}, cat:{en:'Flow Meter',tr:'Debimetre',ar:'مقياس التدفق',ru:'Расходомер'}, specs:{en:[['DN200–DN3000','Diameter'],['±2.5%','Accuracy'],['Level + velocity','Method'],['IP68','Protection']],tr:[['DN200–DN3000','Çap'],['±2,5%','Doğruluk'],['Seviye + hız','Yöntem'],['IP68','Koruma']],ar:[['DN200–DN3000','القطر'],['±2.5%','الدقة'],['مستوى + سرعة','الطريقة'],['IP68','الحماية']],ru:[['DN200–DN3000','Диаметр'],['±2,5%','Точность'],['Уровень + скорость','Метод'],['IP68','Защита']]}, desc:{en:'Level and velocity measurement in non-full pipes, sewerage and drainage.',tr:'Tam dolmayan borularda seviye ve hız ölçümü, kanalizasyon ve drenaj.',ar:'قياس المستوى والسرعة في الأنابيب غير الممتلئة والصرف الصحي.',ru:'Измерение уровня и скорости в неполных трубах, канализация и дренаж.'}},
  {code:'NT-VMF-0D', name:{en:'Zero Straight-Run (0D) Meter',tr:'Sıfır Düz Boru (0D) Debimetre',ar:'مقياس 0D بدون أنبوب مستقيم',ru:'Расходомер без прямых участков (0D)'}, cat:{en:'Flow Meter',tr:'Debimetre',ar:'مقياس التدفق',ru:'Расходомер'}, specs:{en:[['DN3–DN3000','Diameter'],['±0.5%','Accuracy'],['0D','Straight run'],['4–20mA','Output']],tr:[['DN3–DN3000','Çap'],['±0,5%','Doğruluk'],['0D','Düz boru'],['4–20mA','Çıkış']],ar:[['DN3–DN3000','القطر'],['±0.5%','الدقة'],['0D','الأنبوب المستقيم'],['4–20mA','المخرج']],ru:[['DN3–DN3000','Диаметр'],['±0,5%','Точность'],['0D','Прямой участок'],['4–20мА','Выход']]}, desc:{en:'No straight pipe required, mount after elbows, valves or pumps.',tr:'Düz boru gerektirmez, dirsek, vana veya pompa sonrasına montaj.',ar:'لا حاجة لأنبوب مستقيم، يُركّب بعد الأكواع والصمامات.',ru:'Не требует прямых участков, монтаж после колен, задвижек и насосов.'}},
  {code:'NT-VMF-M', name:{en:'Miniature Flow Meter',tr:'Minyatür Debimetre',ar:'مقياس تدفق مصغّر',ru:'Миниатюрный расходомер'}, cat:{en:'Flow Meter',tr:'Debimetre',ar:'مقياس التدفق',ru:'Расходомер'}, specs:{en:[['DN3–DN15','Diameter'],['PIC body','Material'],['0.2 L/min','From'],['316L','Electrode']],tr:[['DN3–DN15','Çap'],['PIC gövde','Malzeme'],['0,2 L/dk','Başlangıç'],['316L','Elektrot']],ar:[['DN3–DN15','القطر'],['جسم PIC','المادة'],['0.2 ل/د','يبدأ من'],['316L','القطب']],ru:[['DN3–DN15','Диаметр'],['Корпус PIC','Материал'],['0,2 л/мин','От'],['316L','Электрод']]}, desc:{en:'Precision micro-dosing from 0.2 L/min, chemical and pharma applications.',tr:'0,2 L/dk mikro dozajlama, kimya ve ilaç uygulamaları.',ar:'جرعات دقيقة من 0.2 ل/د للتطبيقات الكيميائية والصيدلانية.',ru:'Точное микродозирование от 0,2 л/мин, химия и фармацевтика.'}},
  {code:'NT-VMF-S', name:{en:'Slurry Flow Meter',tr:'Çamur Debimetresi',ar:'مقياس تدفق الطين',ru:'Расходомер для шлама'}, cat:{en:'Flow Meter',tr:'Debimetre',ar:'مقياس التدفق',ru:'Расходомер'}, specs:{en:[['Pt-Ir','Electrode'],['≤0.17%','Repeatability'],['25/30 Hz','Excitation'],['IP68','Protection']],tr:[['Pt-Ir','Elektrot'],['≤0,17%','Tekrarlanabilirlik'],['25/30 Hz','Uyartım'],['IP68','Koruma']],ar:[['Pt-Ir','القطب'],['≤0.17%','التكرارية'],['25/30 Hz','الإثارة'],['IP68','الحماية']],ru:[['Pt-Ir','Электрод'],['≤0,17%','Повторяемость'],['25/30 Гц','Возбуждение'],['IP68','Защита']]}, desc:{en:'Abrasion-resistant for mining, cement and drilling mud.',tr:'Madencilik, çimento ve sondaj çamuru için aşınma dayanıklı.',ar:'مقاوم للتآكل للتعدين والأسمنت وطين الحفر.',ru:'Износостойкий для горнодобычи, цемента и бурового шлама.'}},
  {code:'NT-MLI', name:{en:'Magnetic Bypass Level Indicator',tr:'Manyetik Bypass Seviye Göstergesi',ar:'مؤشر مستوى مغناطيسي',ru:'Магнитный байпасный уровнемер'}, cat:{en:'Level Instrument',tr:'Seviye Cihazı',ar:'جهاز مستوى',ru:'Уровнемер'}, specs:{en:[['200°C','Max temp'],['PN10','Pressure'],['No power','Supply'],['Flag display','Readout']],tr:[['200°C','Maks sıcaklık'],['PN10','Basınç'],['Enerjisiz','Besleme'],['Bayrak gösterge','Okuma']],ar:[['200°C','أقصى حرارة'],['PN10','الضغط'],['بلا طاقة','الإمداد'],['عرض راية','القراءة']],ru:[['200°C','Макс. темп.'],['PN10','Давление'],['Без питания','Питание'],['Флажковый','Индикация']]}, desc:{en:'Sealed magnetic flag indication, no power, zero maintenance.',tr:'Mühürlü manyetik bayrak gösterimi, enerjisiz, sıfır bakım.',ar:'مؤشر مغناطيسي بالرايات، بلا طاقة، صفر صيانة.',ru:'Герметичная магнитная индикация флажками, без питания, без обслуживания.'}},
  {code:'NT-MLI-EX', name:{en:'Ex-Proof Bypass Indicator',tr:'Ex-Proof Bypass Gösterge',ar:'مؤشر مستوى مضاد للانفجار',ru:'Взрывозащищённый уровнемер'}, cat:{en:'Level Instrument',tr:'Seviye Cihazı',ar:'جهاز مستوى',ru:'Уровнемер'}, specs:{en:[['150°C','Max temp'],['PN10','Pressure'],['Ex-proof','Design'],['Flag display','Readout']],tr:[['150°C','Maks sıcaklık'],['PN10','Basınç'],['Ex-proof','Tasarım'],['Bayrak gösterge','Okuma']],ar:[['150°C','أقصى حرارة'],['PN10','الضغط'],['مضاد للانفجار','التصميم'],['عرض راية','القراءة']],ru:[['150°C','Макс. темп.'],['PN10','Давление'],['Взрывозащита','Исполнение'],['Флажковый','Индикация']]}, desc:{en:'For hazardous atmospheres, refineries, LPG/LNG terminals.',tr:'Tehlikeli ortamlar, rafineriler, LPG/LNG terminalleri için.',ar:'للأجواء الخطرة والمصافي ومحطات LPG/LNG.',ru:'Для взрывоопасных зон, НПЗ, терминалов СУГ/СПГ.'}},
  {code:'NT-MLI-BR', name:{en:'Boiler-Type Bypass Indicator',tr:'Kazan Tipi Bypass Gösterge',ar:'مؤشر مستوى للغلايات',ru:'Уровнемер котлового типа'}, cat:{en:'Level Instrument',tr:'Seviye Cihazı',ar:'جهاز مستوى',ru:'Уровнемер'}, specs:{en:[['300°C','Max temp'],['PN40','Pressure'],['Steam','Service'],['Flag display','Readout']],tr:[['300°C','Maks sıcaklık'],['PN40','Basınç'],['Buhar','Servis'],['Bayrak gösterge','Okuma']],ar:[['300°C','أقصى حرارة'],['PN40','الضغط'],['بخار','الخدمة'],['عرض راية','القراءة']],ru:[['300°C','Макс. темп.'],['PN40','Давление'],['Пар','Среда'],['Флажковый','Индикация']]}, desc:{en:'High-pressure steam systems, boiler drums, power-plant feed tanks.',tr:'Yüksek basınçlı buhar sistemleri, kazan tamburları, santral besleme tankları.',ar:'أنظمة بخار عالي الضغط، أسطوانات الغلايات، خزانات تغذية المحطات.',ru:'Паровые системы высокого давления, барабаны котлов, питательные баки.'}},
  {code:'NT-FLT', name:{en:'Float Level Transmitter',tr:'Şamandıralı Seviye Transmitteri',ar:'مرسل مستوى عوّامة',ru:'Поплавковый уровнемер'}, cat:{en:'Level Instrument',tr:'Seviye Cihazı',ar:'جهاز مستوى',ru:'Уровнемер'}, specs:{en:[['0–6000mm','Range'],['4–20mA','Output'],['Magnetic','Coupling'],['IP67','Protection']],tr:[['0–6000mm','Aralık'],['4–20mA','Çıkış'],['Manyetik','Kuplaj'],['IP67','Koruma']],ar:[['0–6000mm','المدى'],['4–20mA','المخرج'],['مغناطيسي','الاقتران'],['IP67','الحماية']],ru:[['0–6000мм','Диапазон'],['4–20мА','Выход'],['Магнитный','Связь'],['IP67','Защита']]}, desc:{en:'Continuous level with float + magnetic coupling for water and process tanks.',tr:'Su ve proses tankları için şamandıra + manyetik kuplajlı sürekli seviye ölçümü.',ar:'مستوى مستمر بعوّامة واقتران مغناطيسي لخزانات المياه والعمليات.',ru:'Непрерывный уровень с поплавком и магнитной связью для резервуаров.'}},
  {code:'NT-MLS', name:{en:'Motorized Level Sensor',tr:'Motorlu Seviye Sensörü',ar:'مستشعر مستوى محرّكي',ru:'Моторизованный датчик уровня'}, cat:{en:'Level Instrument',tr:'Seviye Cihazı',ar:'جهاز مستوى',ru:'Уровнемер'}, specs:{en:[['Relay','Output'],['IP65','Protection'],['Rotary paddle','Method'],['Bulk solids','Media']],tr:[['Röle','Çıkış'],['IP65','Koruma'],['Döner palet','Yöntem'],['Dökme katı','Ortam']],ar:[['ريليه','المخرج'],['IP65','الحماية'],['مجداف دوّار','الطريقة'],['مواد سائبة','الوسط']],ru:[['Реле','Выход'],['IP65','Защита'],['Поворотная лопасть','Метод'],['Сыпучие','Среда']]}, desc:{en:'Rotary-paddle detection for grain silos, cement and powder storage.',tr:'Tahıl siloları, çimento ve toz depolama için döner paletli algılama.',ar:'كشف بمجداف دوّار للصوامع والأسمنت والمسحوق.',ru:'Ротационное обнаружение для зерновых силосов, цемента и порошков.'}},
  {code:'NT-MLP', name:{en:'Side-Mount Level Switch',tr:'Yan Montaj Seviye Anahtarı',ar:'مفتاح مستوى جانبي',ru:'Боковой поплавковый выключатель'}, cat:{en:'Level Switch',tr:'Seviye Anahtarı',ar:'مفتاح مستوى',ru:'Реле уровня'}, specs:{en:[['Side mount','Type'],['IP67','Protection'],['NO/NC','Relay'],['Liquids','Media']],tr:[['Yan montaj','Tip'],['IP67','Koruma'],['NO/NC','Röle'],['Sıvılar','Ortam']],ar:[['جانبي','النوع'],['IP67','الحماية'],['NO/NC','ريليه'],['سوائل','الوسط']],ru:[['Боковой','Тип'],['IP67','Защита'],['NO/NC','Реле'],['Жидкости','Среда']]}, desc:{en:'Lever-arm float switch for tank high/low alarms and pump control.',tr:'Tank yüksek/düşük alarmları ve pompa kontrolü için levye kol şamandıra anahtarı.',ar:'مفتاح عوّامة بذراع رافعة لإنذارات الخزان والتحكم بالمضخات.',ru:'Поплавковый переключатель для сигнализации уровня и управления насосом.'}},
  {code:'NT-LSW-M', name:{en:'Mini Stainless Level Switch',tr:'Mini Paslanmaz Seviye Anahtarı',ar:'مفتاح مستوى صغير',ru:'Мини-выключатель уровня'}, cat:{en:'Level Switch',tr:'Seviye Anahtarı',ar:'مفتاح مستوى',ru:'Реле уровня'}, specs:{en:[['IP67','Protection'],['316L','Body'],['NO/NC','Relay'],['Compact','Size']],tr:[['IP67','Koruma'],['316L','Gövde'],['NO/NC','Röle'],['Kompakt','Boyut']],ar:[['IP67','الحماية'],['316L','الجسم'],['NO/NC','ريليه'],['مدمج','الحجم']],ru:[['IP67','Защита'],['316L','Корпус'],['NO/NC','Реле'],['Компактный','Размер']]}, desc:{en:'Compact stainless switch for tight spaces, machine tanks and compressors.',tr:'Dar alanlar, makine tankları ve kompresörler için kompakt paslanmaz anahtar.',ar:'مفتاح مدمج من الفولاذ المقاوم للصدأ للمساحات الضيقة.',ru:'Компактный нержавеющий выключатель для ограниченного пространства.'}},
  {code:'NT-LSW-F', name:{en:'Float Level Switch',tr:'Şamandıralı Seviye Anahtarı',ar:'مفتاح مستوى عوّامة',ru:'Поплавковый выключатель'}, cat:{en:'Level Switch',tr:'Seviye Anahtarı',ar:'مفتاح مستوى',ru:'Реле уровня'}, specs:{en:[['120°C','Max temp'],['PP / SS','Body'],['Float','Method'],['NO/NC','Relay']],tr:[['120°C','Maks sıcaklık'],['PP / SS','Gövde'],['Şamandıra','Yöntem'],['NO/NC','Röle']],ar:[['120°C','أقصى حرارة'],['PP / SS','الجسم'],['عوّامة','الطريقة'],['NO/NC','ريليه']],ru:[['120°C','Макс. темп.'],['PP / SS','Корпус'],['Поплавок','Метод'],['NO/NC','Реле']]}, desc:{en:'Simple, economical level detection for pump control and condensate tanks.',tr:'Pompa kontrolü ve kondens tankları için basit, ekonomik seviye algılama.',ar:'كشف مستوى بسيط واقتصادي للتحكم بالمضخات.',ru:'Простое и экономичное обнаружение уровня для управления насосами.'}},
  {code:'NT-LSW-P', name:{en:'Paddle Motor Level Switch',tr:'Paletli Motor Seviye Anahtarı',ar:'مفتاح مستوى بمجداف',ru:'Ротационный сигнализатор уровня'}, cat:{en:'Level Switch',tr:'Seviye Anahtarı',ar:'مفتاح مستوى',ru:'Реле уровня'}, specs:{en:[['220VAC','Supply'],['IP65','Protection'],['Rotary paddle','Method'],['Silos','Media']],tr:[['220VAC','Besleme'],['IP65','Koruma'],['Döner palet','Yöntem'],['Silolar','Ortam']],ar:[['220VAC','الإمداد'],['IP65','الحماية'],['مجداف دوّار','الطريقة'],['الصوامع','الوسط']],ru:[['220В','Питание'],['IP65','Защита'],['Поворотная лопасть','Метод'],['Силосы','Среда']]}, desc:{en:'Rotating-paddle detection for grain, cement and plastic-granule silos.',tr:'Tahıl, çimento ve plastik granül siloları için döner paletli algılama.',ar:'كشف بمجداف دوّار لصوامع الحبوب والأسمنت.',ru:'Ротационное обнаружение для силосов зерна, цемента и гранул.'}},
  {code:'NT-RCS 3100/2100', name:{en:'Angle Sensor (RCS Series)',tr:'Açı Sensörü (RCS Serisi)',ar:'مستشعر زاوية (سلسلة RCS)',ru:'Датчик угла (серия RCS)'}, cat:{en:'Process Instrument',tr:'Proses Cihazı',ar:'جهاز عمليات',ru:'Прибор процесса'}, specs:{en:[['0–360°','Range'],['12-bit','Resolution'],['Hall-effect','Sensing'],['Unlimited','Rotation life']],tr:[['0–360°','Aralık'],['12-bit','Çözünürlük'],['Hall-effect','Algılama'],['Sınırsız','Dönme ömrü']],ar:[['0–360°','المدى'],['12-bit','الدقة'],['تأثير هول','الاستشعار'],['غير محدود','عمر الدوران']],ru:[['0–360°','Диапазон'],['12 бит','Разрешение'],['Холла','Измерение'],['Неограничен','Ресурс']]}, desc:{en:'Contactless Hall-effect angle sensing for valve feedback and machinery.',tr:'Vana geri bildirimi ve makineler için temassız Hall-effect açı algılama.',ar:'استشعار زاوية بتأثير هول بلا تلامس للصمامات والآلات.',ru:'Бесконтактное измерение угла Холла для обратной связи задвижек.'}},
  {code:'NT-BTT-S', name:{en:'Pressure-Temperature Transmitter',tr:'Basınç-Sıcaklık Transmitteri',ar:'مرسل ضغط وحرارة',ru:'Датчик давления и температуры'}, cat:{en:'Process Instrument',tr:'Proses Cihazı',ar:'جهاز عمليات',ru:'Прибор процесса'}, specs:{en:[['0–600 bar','Pressure'],['PT100','Temp'],['2-in-1','Measurement'],['4–20mA','Output']],tr:[['0–600 bar','Basınç'],['PT100','Sıcaklık'],['2\'si 1 arada','Ölçüm'],['4–20mA','Çıkış']],ar:[['0–600 bar','الضغط'],['PT100','الحرارة'],['2 في 1','القياس'],['4–20mA','المخرج']],ru:[['0–600 бар','Давление'],['PT100','Температура'],['2-в-1','Измерение'],['4–20мА','Выход']]}, desc:{en:'Two measurements from one tapping: pressure and temperature together.',tr:'Tek bağlantıdan iki ölçüm: basınç ve sıcaklık birlikte.',ar:'قياسان من نقطة واحدة: الضغط والحرارة معًا.',ru:'Два измерения из одной точки: давление и температура вместе.'}}
];

const LABELS = {
  en:{title:'PRODUCT CATALOG',sub:'Flow Meters · Level Instruments · Process Transmitters',specs:'SPECIFICATIONS',contact:'CONTACT',web:'Web',email:'Email',whatsapp:'WhatsApp',madeIn:'Made in Türkiye',accred:'TÜRKAK AB-0354-K · ISO/IEC 17025:2017',instruments:'19 Instruments',dir:'ltr'},
  tr:{title:'ÜRÜN KATALOĞU',sub:'Debimetreler · Seviye Cihazları · Proses Transmitterleri',specs:'TEKNİK ÖZELLİKLER',contact:'İLETİŞİM',web:'Web',email:'E-posta',whatsapp:'WhatsApp',madeIn:'Türkiye Üretimi',accred:'TÜRKAK AB-0354-K · ISO/IEC 17025:2017',instruments:'19 Cihaz',dir:'ltr'},
  ar:{title:'كتالوج المنتجات',sub:'مقاييس التدفق · أجهزة المستوى · مرسلات العمليات',specs:'المواصفات',contact:'التواصل',web:'الموقع',email:'البريد',whatsapp:'واتساب',madeIn:'صُنع في تركيا',accred:'TÜRKAK AB-0354-K · ISO/IEC 17025:2017',instruments:'19 جهازًا',dir:'rtl'},
  ru:{title:'КАТАЛОГ ПРОДУКЦИИ',sub:'Расходомеры · Уровнемеры · Датчики процесса',specs:'ХАРАКТЕРИСТИКИ',contact:'КОНТАКТЫ',web:'Сайт',email:'Эл. почта',whatsapp:'WhatsApp',madeIn:'Сделано в Турции',accred:'TÜRKAK AB-0354-K · ISO/IEC 17025:2017',instruments:'19 приборов',dir:'ltr'}
};

function generateCatalogHTML(lang) {
  const L = LABELS[lang];
  const isAR = lang === 'ar';

  const productCards = PRODUCTS.map((p, i) => {
    const specHTML = p.specs[lang].map(([val, label]) =>
      `<div class="spec"><span class="spec-val">${val}</span><span class="spec-lbl">${label}</span></div>`
    ).join('');
    return `
    <div class="product${i > 0 && i % 4 === 0 ? ' page-break' : ''}">
      <div class="prod-head">
        <div class="prod-code">${p.code}</div>
        <div class="prod-name">${p.name[lang]}</div>
        <div class="prod-cat">${p.cat[lang]}</div>
      </div>
      <div class="prod-desc">${p.desc[lang]}</div>
      <div class="specs-row">${specHTML}</div>
    </div>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${L.dir}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Net Flow — ${L.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&${isAR ? 'family=Cairo:wght@400;600;700&' : ''}display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  :root{--navy:#0a1628;--teal:#0e8c8c;--f:${isAR?"'Cairo'":"'Inter'"},-apple-system,sans-serif;--fm:'JetBrains Mono',monospace}
  @page{size:A4;margin:0}
  html,body{width:210mm;font-family:var(--f);color:var(--navy);font-size:9pt;line-height:1.5}
  .page-break{page-break-before:always}

  /* Cover */
  .cover{height:297mm;background:var(--navy);color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40mm}
  .cover-logo{font-family:var(--fm);font-size:36pt;font-weight:800;letter-spacing:.08em;color:#fff}
  .cover-sub{font-size:11pt;color:#9fb1c4;margin-top:8mm;letter-spacing:.04em}
  .cover-title{font-size:22pt;font-weight:700;margin-top:20mm;letter-spacing:.06em}
  .cover-instruments{font-family:var(--fm);font-size:12pt;color:var(--teal);margin-top:6mm}
  .cover-bottom{margin-top:auto;font-size:8pt;color:#6c8296}

  /* Products */
  .content{padding:12mm 16mm}
  .product{padding:5mm 0;border-bottom:0.5pt solid #dee2e6}
  .product:last-child{border-bottom:none}
  .prod-head{display:flex;align-items:baseline;gap:4mm;flex-wrap:wrap}
  .prod-code{font-family:var(--fm);font-size:10pt;font-weight:600;color:var(--teal);min-width:30mm}
  .prod-name{font-size:11pt;font-weight:700;color:var(--navy)}
  .prod-cat{font-size:7.5pt;color:#6c757d;text-transform:uppercase;letter-spacing:.08em;margin-${isAR?'right':'left'}:auto}
  .prod-desc{font-size:8.5pt;color:#495057;margin-top:2mm;max-width:160mm}
  .specs-row{display:flex;gap:3mm;margin-top:3mm;flex-wrap:wrap}
  .spec{background:#f8f9fa;border:0.5pt solid #e9ecef;border-radius:3pt;padding:2mm 3mm;display:flex;flex-direction:column;min-width:28mm}
  .spec-val{font-family:var(--fm);font-size:9pt;font-weight:600;color:var(--navy)}
  .spec-lbl{font-size:7pt;color:#6c757d;text-transform:uppercase;letter-spacing:.06em;margin-top:1mm}

  /* Footer */
  .ftr{position:fixed;bottom:0;left:0;right:0;height:14mm;background:var(--navy);color:#9fb1c4;display:flex;align-items:center;justify-content:space-between;padding:0 16mm;font-size:7.5pt}
  .ftr-brand{font-family:var(--fm);font-weight:700;font-size:9pt;color:#fff}
</style>
</head>
<body>

<!-- COVER PAGE -->
<div class="cover">
  <div class="cover-logo">NET FLOW</div>
  <div class="cover-sub">Industrial Instrumentation</div>
  <div class="cover-title">${L.title}</div>
  <div class="cover-instruments">${L.instruments}</div>
  <div style="margin-top:12mm;font-size:9pt;color:#6c8296">${L.sub}</div>
  <div class="cover-bottom">
    netflw.com · info@netflw.com · +90 541 373 79 53<br>
    ${L.madeIn} · ${L.accred}
  </div>
</div>

<!-- PRODUCT PAGES -->
<div class="content">
  ${productCards}
</div>

<div class="ftr">
  <div><span class="ftr-brand">Net Flow</span> · netflw.com · info@netflw.com</div>
  <div>${L.madeIn} · ${L.accred}</div>
</div>

</body>
</html>`;
}

// Generate
const CHROME_BIN = `"${CHROME}"`;
const LANGS = ['en','tr','ar','ru'];
let total = 0;

for (const lang of LANGS) {
  const html = generateCatalogHTML(lang);
  const htmlPath = path.join(TMP, `catalog-${lang}.html`);
  const pdfPath  = path.join(OUT, lang, `netflow-catalog-${lang}.pdf`);

  fs.writeFileSync(htmlPath, html, 'utf8');

  try {
    execSync(`${CHROME_BIN} --headless --disable-gpu --no-sandbox --print-to-pdf="${pdfPath}" --print-to-pdf-no-header "file://${htmlPath}" 2>/dev/null`, { stdio: 'inherit' });
    console.log(`OK  ${pdfPath}`);
    total++;
  } catch(e) {
    console.error(`FAIL  catalog-${lang}: ${e.message}`);
  }
}

fs.rmSync(TMP, { recursive: true, force: true });
console.log(`\nDone. ${total} catalog PDFs generated.`);
