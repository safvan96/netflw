/* NET FLOW — E-Katalog verisi (Türkçe, düzeltilmiş)
   Tüm ürün kodları NT- ön ekiyle. */
window.NF_CAT = {
  brand:{name:"Net Flow", domain:"netflw.com", phone:"+90 541 373 79 53", mail:"info@netflw.com",
    tagline:"VFA Elektronik'in ihracat markası", since:"12 yıllık üretim tecrübesi",
    addr:"Fevzıçakmak Mah. Aslım Cad. · Konya · Türkiye"},

  ui:{
    principle:"Çalışma Prensibi", contents:"İçindekiler",
    jumpHint:"Ürün sayfasına gitmek için ürün adına tıklayınız",
    corporate:"Kurumsal", aboutTitle:"Biz Kimiz", aboutLabel:"Biz Kimiz",
    uses:"Uygulamalar", sectorsLong:"Hizmet Verilen Sektörler", sectors:"Sektörler",
    variantImgs:"Model Görselleri", notes:"Notlar", models:"Modeller",
    specs:"Teknik Özellikler", contact:"İletişim", address:"Adres",
    waCta:"WhatsApp ile mesaj gönderin", exportBrand:"VFA Elektronik'in ihracat markası",
    coverVfa:"VFA Elektronik'in ihracat markası · 12 yıllık üretim tecrübesi",
    tagline:"Endüstriyel Ölçüm", coverLabel:"Kapak", backLabel:"Arka Kapak",
    coverEyebrow:"Ürün Kataloğu · 2026",
    coverH1:"Ölç.", coverH1em:"Kontrol et.",
    coverLede:"Debi, seviye, basınç ve sıcaklık ölçümü için uçtan uca enstrümantasyon çözümleri. Türkiye'de üretilmekte ve TÜRKAK akrediteli laboratuvarımızda kalibre edilmektedir.",
    madeIn:"Türkiye Üretimi",
    calibTitle:"Kalibrasyon Güvencesi",
    calibBody:"Elektromanyetik debimetreler, TÜRKAK akrediteli (AB-0354-K) ISO/IEC 17025:2017 laboratuvarımızda 1-350 m³/h aralığında ±%0,27 belirsizlikle kalibre edilmektedir. EA ve ILAC karşılıklı tanınma anlaşmaları kapsamında 100'den fazla ülkede geçerli, izlenebilir kalibrasyon sertifikası cihazla birlikte verilmektedir. Diğer tüm ürünler Yerli Malı belgeli, ISO 9001 kalite sistemi ve CE beyannamesiyle sunulmaktadır.",
    projectTitle:"Proje Talebi",
    projectBody:"Ölçüm noktalarınızı, akışkan verilerinizi ve hat ölçülerinizi paylaştığınızda mühendislik ekibimiz uygun ürün seçimi, boyutlandırma ve fiyat teklifi ile destek verecektir. Özel üretim ve özel proses gereksinimleri için doğrudan bize ulaşınız.",
    closingLabel:"Otomasyon", closingScreen:"Otomasyon ve Tasarım",
    backH2:"Hassas ölçüm,<br>güvenilir veri.",
    backSub:"Ürün seçimi, uygulama desteği ve fiyat teklifi için bizimle iletişime geçin. Yerli üretim, hızlı teslimat ve doğrudan mühendislik desteği.",
    contLabel:"Devamı",
    rights:"© 2026 Net Flow · Tüm hakları saklıdır",
  },

  about:[
    "Net Flow, 12 yıllık üretim ve mühendislik tecrübesine sahip VFA Elektronik'in ihracat markasıdır. Türk sanayisine endüstriyel ölçüm enstrümanları ve otomasyon çözümleri sunmak amacıyla Türkiye'de kurulmuştur. Sanayimizin gelişmesiyle birlikte kalite ve kalitenin sürekliliği üretici için belirleyici bir unsur hâline gelmiştir. Bu nedenle üreticiler; enerji verimliliği ve kalite standartları için proses parametrelerinde endüstriyel ölçüm, veri izleme ve izlenen veriyi kontrol etme ihtiyacı duymaktadır.",
    "Genç ve dinamik kadromuzla bu ihtiyaçlara doğru ve yenilikçi çözümler üretiyoruz. Ölçüm elemanlarında başlıca debi, akış, seviye, basınç, sıcaklık, nem ve analiz ölçümleri yapabilecek sensör tedariki ve uygulamaları gerçekleştiriyoruz. Veri izlemede proses göstergeler, kağıtlı ve kağıtsız tip kaydediciler ile PID ve PLC uygulamaları sunuyoruz. Bunların yanında aktüatörler, valfler ve vanalar ile mekanik kontrol alanında da tedarik ve uygulama yapıyoruz.",
    "Uygun maliyet, yüksek kalite ve hızlı hizmet anlayışıyla çözüm üretmeyi hedefleyerek memnun müşteri profili oluşturduk. Bu doğrultuda yurt içi ve yurt dışı satış temsilcilikleriyle ürün çeşitliliğimizi her geçen gün artırıyoruz.",
    "Şamandıralı ve kapasitif seviye sensörlerinin imalatında özgün tasarım ve güvenilir ölçümü kendimize prensip edindik. Uzun vadede tüm ölçüm enstrümanlarının yerli imalatını yaparak ülkemizin bu alandaki dışa bağımlılığını azaltmayı amaçlıyoruz."
  ],
  aboutStats:[["TÜRKAK","AB-0354-K akreditasyon"],["ISO/IEC 17025","Kalibrasyon laboratuvarı"],["100+","Ülkede geçerli sertifika"],["12 Yıl","VFA Elektronik tecrübesi"]],

  sections:[
    /* ===================== DEBİMETRE ===================== */
    {id:"debi", kicker:"01", title:"Debimetreler", sub:"Sıvı, gaz ve buhar hatlarında hacimsel ve kütlesel debi ölçümü", glyph:"flow",
     products:[
      {code:"NT-VMF", img:"assets/products/NT-VMF.webp", name:"Elektromanyetik Debimetre", glyph:"flow", hero:true,
       vimgs:[["Gıda Tipi","assets/products/NT-VMF-W.webp"],["Minyatür Tip","assets/products/NT-VMF-M.webp"],["Daldırma Tip","assets/products/NT-VMF-I.webp"],["Pilli Tip","assets/products/NT-VMF-BT.webp"],["Kısmi Dolu","assets/products/NT-VMF-P.webp"],["Sıfır Düz Boru (0D)","assets/products/NT-VMF-0D.webp"],["Çamur (Slurry)","assets/products/NT-VMF-S.webp"]],
       desc:"Bobinlerin oluşturduğu manyetik alan ve buna bağlı oluşan gerilim farkının akışkan hızı ile ilişkilendirilmesi sonucu, iletken sıvı akışkanların (minimum 5 μS/cm) ölçümünü yapan debimetrelerdir. Hassas ölçüm yapabilmesi ve iç aksamında hareketli parça bulunmaması, korozif olmayan tüm iletken sıvılarda kullanım sağlamaktadır.",
       variants:[
         ["Gıda Tipi","Bakteri üremesini engelleyen ve tüm gıda uygulamalarında kullanım için tasarlanmış; hijyenik bağlantı veya tri-clamp bağlantı tipiyle komple paslanmaz gövde olarak imal edilmiş modeldir."],
         ["Minyatür Tip","Düşük akışlar için geliştirilmiştir. 0,2–2 lt/dak ile 5–100 lt/dak ölçüm aralığında, DN3 ile DN15 arası bağlantı çaplarına uygulanabilir. Dolum uygulamalarında yaygın olarak kullanılır."],
         ["Daldırma Tip","DN100 ile DN3000 arasında farklı uygulama çapları için tasarlanmıştır; boru üstünden manşon yardımıyla montajlanarak kullanılan modeldir."],
         ["Pilli Tip","Enerji beslemesi sağlanamayan uygulamalarda kullanım için tasarlanmıştır. 3,6 V lityum pil ile uzun süreli kullanım sağlar."]
       ],
       specs:[["Gövde Materyali","Karbon Çelik / Paslanmaz Çelik 304-316 (ops.)"],["Bağlantı Ölçüsü","DN10 – DN3000"],["Ölçüm Aralığı | Hızı","0,2–2 lt/dak … 12000–38000 m³/saat | 0,5–15 m/s"],["Bobin Materyali","%99 bakır"],["Minimum İletkenlik","5 μS/cm"],["Nominal Basınç","0,6 / 1,0 / 1,6 / 2,5 / 4,0 MPa"],["İç Kaplama Materyali","PTFE / Neopren / Sert Kauçuk / F46 / PFA / Poliüretan"],["Elektrot Materyali","SS316L / Hastelloy B / Hastelloy C / Titanyum / Tantal / Platin"],["Ortam Sıcaklığı","Kauçuk −25…+60 °C / Teflon −20…+150 °C"],["Doğruluk","%0,5 / ±%0,3 / ±%0,2 (ops.)"],["Besleme","AC 85–250 V / DC 20–36 V"],["Çıkış","4–20 mA, Pulse, RS485 Modbus (ops.) / HART, Profibus (ops.)"],["Alarm","Boş boru, uyarma, alt ve üst sınır"],["Ekran","Üç satır LCD gösterge"],["Koruma Sınıfı","IP65 / IP67 / IP68 (ops.)"],["Belgeler","CE / ISO 9001 / Kalibrasyon Sertifikası"]],
       uses:"İçme suyu, tarımsal sulama, meyve suları, kimyasallar, iri taneler içeren iletken sıvılar.",
       sectors:"Atık su tesisleri, gıda sanayi, tekstil sanayi, ağır sanayi, makine sanayi, kimya sanayi, petrokimya, kağıt sanayi, ilaç sanayi ve tarımsal sulama.",
       notes:["Test edilen sıvının elektriksel iletkenliğe sahip olması gerekir.","Akışın boru içerisinden tam dolu geçmesi gerekir.","Akışkan içerisindeki bileşenlerin homojen şekilde karışmış olması gerekir.","Sıvı manyetik indükleme yaparsa cihazın manyetik alanı değişeceğinden yeniden ayar gerekir.","Laminer akış için mekanik bağlantı kılavuzuna göre montaj edilmelidir."]},

      {code:"NT-TRB", img:"assets/products/NT-TRB.webp", name:"Türbin Debimetre", glyph:"turbine",
       desc:"Akışkanın hızını tespit edebilmek için gövdenin içine serbestçe dönebilen türbin yerleştirilerek oluşturulmuştur. Türbinin dönme oranı akışkanın hızı ile doğru orantılıdır. Hız × kesit hesabı ve laminer akışın sağlanmasıyla ±%0,2 hassasiyet oranında debi ölçümü yapılabilir. Paslanmaz ve plastik gövdeli olmak üzere flanşlı, dişli, tri-clamp, daldırma ve sıkıştırma modelleri mevcuttur.",
       variants:[
         ["Gıda Tipi","Gıda uygulamaları için geliştirilmiş modellerdir; bakteri üremesini engelleyecek bağlantı tipiyle tri-clamp / kelepçe tip bağlantı ile mekanik montajı yapılır."],
         ["Plastik Model","1/8\" ile 2\" dişli bağlantılar arası hat çapları için 0,15–200 lt/dak ölçüm aralığına sahiptir. Asidik uygulamalar için komple teflondan imal edilmiş modeller mevcuttur."],
         ["Daldırma Tip","DN100 ile DN3000 arasında farklı uygulama çapları için tasarlanmıştır; boru üstünden manşon yardımıyla montajlanarak kullanılır."],
         ["Yüksek Sıcaklık","200 °C sıcaklık dayanımına göre ekstra soğutucu ile tasarlanmış modeldir."]
       ],
       specs:[["Gövde Materyali","AISI 304-316 Paslanmaz Çelik / PTFE (Teflon)"],["Bağlantı Ölçüsü","DN4 – DN200"],["Akışkan","Partikülsüz sıvılar"],["Akış Aralığı","0,04 – 800 m³/saat"],["Hassasiyet","±%0,2 / ±%0,5 / ±%1"],["Sıcaklık Aralığı","−20…+80 °C, ops. −20…+120 °C, ops. 200 °C"],["Tekrarlanabilirlik","%0,1 O.D."],["Türbin Malzemesi","CD4MCU Paslanmaz Çelik"],["Türbin Dönme Oranı","Standart 10:1, ops. 20:1"],["Maksimum Basınç","16 / 25 / 40 / 63 bar, ops. 400 bar'a kadar"],["Çıkış","Kare dalga (Pulse), ops. 4–20 mA"],["Besleme","12 – 24 VDC"],["Koruma Sınıfı","IP65"],["Gösterge","Kompakt veya ayrık tip 2 satır LCD"],["Belgeler","CE / ISO 9001 / Kalibrasyon Sertifikası"]],
       uses:"Partikül içermeyen sıvılar, su hatları, süt hatları, gıda hatları, iletkenlik değeri aranmayan sıvılar, kimyasallar, dolum üniteleri.",
       sectors:"Makine endüstrisi, kimya endüstrisi, test üniteleri, ilaç sanayi, kağıt sanayi, ağır sanayi.",
       notes:["Parçacıklı akışkanlarda, türbini (rotor) tıkayabilecek noktalarda kullanım önerilmez.","Akışın boru içerisinden tam dolu geçmesi gerekir.","Aşındırıcı sıvılarda mutlaka sıvı detayları ürün seçiminde belirtilmelidir.","Laminer akış için mekanik bağlantı kılavuzuna göre montaj edilmelidir."]},

      {code:"NT-VA / NT-DK800", img:"assets/products/NT-VA.webp", name:"Şamandıralı Debimetre", glyph:"rota",
       desc:"Konik cam veya sert plastikten imal edilmiş borunun içinde serbestçe hareket edebilen, ağırlığı hesaplanmış şamandıradan oluşmaktadır. Akışkan borunun içinden geçerken şamandırayı yukarı yönlü hareket ettirir ve bu harekete bağlı olarak geçen anlık debi miktarı tespit edilebilir.",
       variants:[
         ["NT-VA Serisi","Sıvı veya gaz akışkanların anlık akışını tespit etmek için kullanılır. Cam tüplü, metal gövdelidir; hatta dik olarak bağlanır ve akışın aşağıdan yukarıya geçmesiyle sürtünme olmaksızın hareket eden şamandıra konum değiştirir. Yüksek sıcaklıkta kullanılabilir."],
         ["NT-DK800 Serisi","Cam tüplü ve metal gövdeli bir modeldir. Cam skala üzerinden anlık debi izlenebilir; kompakt yapısı ve ayar vanası sayesinde hassas debi ayarı yapılmasına olanak sağlar."],
         ["NT-LZS Serisi","Sıvı ve korozif sıvı akışkanların anlık akışı için PVC gövdeli modeldir. Değişim oranı; şamandıranın ağırlığı ile akışkanın yoğunluğu ve viskozitesine bağlıdır."],
         ["NT-LZM Serisi","Sıvı ve gaz akışkanlar için polipropilen gövdeli modeldir. Ayar vanası sayesinde hassas debi ayarı yapılmasına olanak sağlar."]
       ],
       specs:[["Gövde Materyali","Alüminyum / SS316 Paslanmaz Çelik (epoksi boyalı), PVC, Polipropilen"],["Maksimum Sıcaklık","70 °C … 150 °C (modele göre)"],["Bağlantı Ölçüsü","1/4\" NPT … 1\" dişli, flanşlı ve tri-clamp; DN65–DN150"],["O-Ring","Viton"],["Akışkan","Sıvı ve gaz"],["Ölçüm Aralığı – Sıvı","0,25 lt/saat … 15000 lt/saat"],["Ölçüm Aralığı – Gaz","0,05 lt/dak … 4300 lt/saat"],["Hassasiyet","%1 – %2,5 T.S."],["Ölçüm Tüpü","Cam / sert plastik"],["Maksimum Basınç","10 – 16 bar"]],
       uses:"Gazlar ve sıvılar.",
       sectors:"Arıtma tesisleri, makine imalatı, geri dönüşüm tesisleri, ısıl işlem tesisleri, test üniteleri, kimya sanayi."},

      {code:"NT-VTX", img:"assets/products/NT-VTX.webp", name:"Vorteks Debimetre", glyph:"vortex",
       desc:"Bir engel ile karşılaşan akışkan akıntısının dönerek ve çukurlaşarak yaptığı çevrinti prensibine dayanan akış ölçümüdür. Kısaca gövdede bulunan engelin oluşturduğu burgaç sayesinde oluşan fark basınç değişimine bağlı debi bilgisine ulaşılır.",
       specs:[["Akışkan","Sıvı, gaz, buhar"],["Ölçüm Aralığı","DN15–DN300 (flanş ve sıkıştırmalı), DN100–DN2000 (daldırma tip)"],["Sıcaklık Aralığı","−20…250 °C, ops. 350 °C"],["Maksimum Basınç","16 / 25 / 40 bar"],["Hassasiyet","T.S. ±%0,5 / ±%1,0 / ±%1,5 — Daldırma tip: ±%2,5"],["Reynolds Sayısı","Re > 4000"],["Sinyal ve İletişim Çıkışı","4–20 mA (2 telli), Pulse (3 telli), RS485 Modbus"],["Ortam Sıcaklığı","−25…55 °C"],["Besleme","24 VDC, 3,6 V lityum pil"],["Gövde Materyali","SS304, ops. SS316"]],
       uses:"Solvent ve kimyasallar, petrol ve gaz, soğutucu akışkanlar, buhar üniteleri.",
       sectors:"Kimya sanayi, kağıt sanayi, geri dönüşüm tesisi, petrokimya, enerji, maden, demir çelik, tekstil sanayi.",
       notes:["Zorlu proses koşulları için uygundur.","Debi ölçümü esnasında sıcaklık ve basınç verileri de izlenebilir.","Boru mesafelerinin kısıtlı olduğu alanlarda kullanılabilir.","Sıcaklık ve basınç kompanzasyonu ile gerçek değerler elde edilebilir."]},

      {code:"NT-TUF-2000", img:"assets/products/NT-TUF-2000.webp", name:"Ultrasonik Debimetre", glyph:"ultra",
       desc:"Kapalı boru içindeki sıvıların hızını, borunun yüzeyine yerleştirilen ses dalgası üreten sensörler yardımıyla, boruya mekanik tahribat yapmadan tespit eden debimetrelerdir. Okuma terminallerinde akış hızının oransal hesaplaması ile %1 hassasiyet oranında debi bilgisine ulaşılabilir.",
       variants:[["NT-TUF-2000H","Portatif tip; çanta, bağlantı kelepçeleri ve metre ile birlikte. Şarj edilebilir pil ile saha ölçümü."],["NT-TUF-2000S/M","Sabit (duvar) / ray tip; 220 VAC veya 24 VDC besleme, IP68 koruma, RS485 ve 4–20 mA çıkış."],["Hat Tipi Ultrasonik Su Sayacı","Boruya doğrudan entegre edilen inline ultrasonik su sayacı. Mekanik parça içermez; DN15–DN300 arası hat çaplarında konut ve endüstriyel su ölçümü."],["Hat Tipi Ultrasonik Debimetre","Boru hattına doğrudan flanşlı veya dişli bağlantı ile montajlanan inline ultrasonik debimetre. Clamp-on'a göre daha yüksek hassasiyet sağlar."],["Yazıcılı Taşınabilir Model","Entegre termal yazıcı ile sahada anlık ölçüm raporu çıktısı. Portatif kullanım, şarj edilebilir pil beslemesi."]],
       specs:[["Bağlantı Ölçüsü","DN15 … DN6000"],["Ölçüm Aralığı","0,01 … 32 m/s"],["Hassasiyet","%1 O.D."],["Sıcaklık Aralığı","−40…110 °C, ops. 160 °C"],["Gösterge","Aydınlatmalı 4×16 / 2×20 karakter LCD"],["Kablo Boyu","5 metre, ops. 10 metre"],["Haberleşme","RS232 / RS485"],["Sinyal Çıkışı","4–20 mA, röle (sabit tip)"],["Kayıt","2000 veri hafızası"],["Koruma Sınıfı","IP65 / IP68"]],
       uses:"Su, atık su, kimyasallar, asitler, aşındırıcı ve viskoz sıvılar.",
       sectors:"Arıtma tesisleri, petrokimya, hidroelektrik santralleri, gıda sanayi, kağıt sanayi, ilaç sanayi, otomotiv sanayi, belediye ve kamu kurumları.",
       notes:["Boruya hasar vermeden ölçüm sağlar.","3 boy sensörü ile geniş ölçüm aralığı sağlar.","Akışkanın viskozitesi sabit olmalı ve homojen, tam dolu borularda kullanılmalıdır.","Çelik, paslanmaz çelik, dökme demir, PVC, bakır, alüminyum gibi materyallerde ölçüm seçenekleri."]},

      {code:"NT-OCF", img:"assets/products/NT-OCF.webp", name:"Açık Kanal Debimetre", glyph:"channel",
       desc:"Açık bir kanalda savak veya bent üzerine kurularak, forma girmiş akışkanın temassız (ultrasonik) yöntemle hızı ve derinliğini esas alarak debisini tespit eden debimetrelerdir. 1 mm değişim çözünürlüğü ile yüksek hassasiyet sağlar. Aşırı soğuk uygulamalar için elektrikli ısıtma özelliği bulunur. Parazit izolasyonu sayesinde parazitlerden etkilenmez; anlık ve toplam miktar izlenebilir.",
       specs:[["Ölçüm Aralığı","0 ~ 99999 l/s veya m³/sa"],["Seviye Çözünürlüğü","1 mm"],["Gösterge","14 haneli, iki satırlı arkadan aydınlatmalı LCD"],["Debi Ölçüm Birimi","m³/saat – lt/saniye"],["Çıkış","4–20 mA ve RS485 seri iletişim (Modbus-RTU)"],["Çıkış Alarmları","En fazla 6 adet programlanabilir röle; kümülatif akış için pulse çıkışı"],["Sıcaklık Dayanımı","−40…+70 °C"],["Koruma Sınıfı","IP67 (ana bilgisayar) / IP68 (prob)"],["Besleme","DC 24 V (±%5) 0,2 A / AC 220 V (±%20) 0,1 A"],["Kullanılan Savaklar","Açık savak ve kanallar, Parshall kanallar (ISO), dik açılı üçgen ve dikdörtgen savaklar"],["Prob Ölçüm Aralığı","0,00 ~ 4,00 m (seviye)"],["Prob Malzemesi","ABS / PVC / PTFE"]],
       uses:"Su arıtma, sulama, endüstriyel atık su ve diğer endüstriyel alanlar.",
       sectors:"Savak yapısı mevcut dere ve nehirler, belediye ve kamu kurumları, arıtma ve atık su tesisleri, otel ve turizm işletmeleri, sanayi ve tarımsal sulama.",
       notes:["Savak tipine göre montaj kılavuzunda belirtilen adımlar uygulanmalıdır.","Kullanılan akışkana göre prob seçimine dikkat edilmelidir."]},

      {code:"NT-MTF", img:"assets/products/NT-MTF.webp", name:"Metal Tüplü Debimetre", glyph:"metaltube",
       desc:"Sıvı, gaz ve buhar ölçümünde kullanılan değişken alanlı debimetre modelidir; manyetik şamandıra hareketine bağlı olarak ölçüm almaktadır. Hidrodinamik etkilere dayanabilen metal tüplü debimetreler çoğunlukla dikey hatlarda kullanılır, fakat özel mekanik tasarımla yatay olarak da kullanılabilir. Hassas birimli göstergesi ve geniş skala oranı sayesinde rahat okumaya elverişlidir.",
       specs:[["Ölçüm Aralığı","Sıvılar 2,5–100000 lt/saat; gazlar 0,07–3000 m³/saat"],["Sıcaklık Dayanımı","−25…+100 °C, ops. yüksek sıcaklık 300 °C"],["Hassasiyet","±%2,5, ops. yüksek hassasiyet ±%1,5"],["Çıkış","Ops. 4–20 mA, kontak, LCD izleme paneli"],["Besleme","24 VDC, 3,6 V lityum pil"],["Maks. Çalışma Basıncı","16 bar"],["Boru Bağlantısı","Flanş, diş, hızlı bağlantı"],["Koruma Sınıfı","IP65, IP67"]],
       uses:"Yüksek sıcaklık ve basınçlı uygulamalar, kimyasal akışkanlar, su uygulamaları, patlayıcı gaz ve sıvılar, aşındırıcı akışkanlar, elektrik bağlantısı gerektirmeyen analog izleme uygulamaları.",
       sectors:"Kimya tesisleri, enerji tesisleri, ağır sanayi, makine sanayi, petrokimya sanayi, kağıt sanayi, gaz dolum tesisleri.",
       notes:["Yüksek sıcaklık ve basınç bilgilerine dikkat edilmelidir.","Skala aralığı tercih edilebilir.","Gıda uygulamaları için hijyenik kelepçe bağlantısı yapılabilir.","Korozif ve patlayıcı akışkanlara göre gövde ve koruma sınıfı seçilebilir."]},

      {code:"NT-OGF", img:"assets/products/NT-OGF.webp", name:"Oval Dişli Debimetre", glyph:"ovalgear",
       desc:"Senkronize iki oval dişlinin akış hızına bağlı devir yapmasıyla ölçüm yapan debimetrelerdir. Devir hızı akış hızını tayin eder ve kesit hesabıyla anlık ve toplam debi miktarını tespit eder. Yüksek sıcaklık ve viskoziteye sahip akışkanlarda kolay kurulum ve yüksek hassasiyet sağlar. Çok düşük akışlarda kullanılabilir, yüksek çözünürlüklü pulse üretir.",
       specs:[["Bağlantı","DN6 – DN100 mm arası"],["Hassasiyet","±%0,5 (ops.)"],["Maks. Basınç Dayanımı","100 bar"],["Ölçüm Aralığı","0,5 ml/dak – 240 lt/dak"],["Çıkış","Pulse, ops. 4–20 mA"],["Besleme","5 – 24 VDC"]],
       uses:"Endüstriyel yağlar, hidrolik yağlar, düşük veya yüksek viskoziteli kimyasallar, yüksek sıcaklık ve basınçlı sıvılar, sıvı gıda uygulamaları, rafine yağlar.",
       sectors:"Otomotiv endüstrisi, makine endüstrisi, petrokimya ve boya tesisleri, kimya tesisleri, yağ üretim tesisleri, içecek endüstrisi.",
       notes:["Akışkan viskozitesine göre ürün seçilmelidir.","Yüksek sıcaklık ve basınç bilgilerine dikkat edilmelidir.","Partikül içeren akışkanlar filtre edilmelidir.","Aşındırıcı akışkanlar için gövde seçenekleri mevcuttur."]},

      {code:"NT-HGF", img:"assets/products/NT-HGF.webp", name:"Helisel Dişli Debimetre", glyph:"helical",
       desc:"Helisel (sarmal) debimetreler, viskoz akışkanların debisini tespit etmek için; silindirik muhafaza içine iki adet sikloidal helisel milin yerleştirilmesi, bu millerin iç cidarda kapalı alan oluşturması ve akışkanın hareketinin sadece millerin dönmesine bağlanması ile tasarlanmış ölçüm yöntemidir. Bu yöntem sayesinde minimum sızıntı, kesintisiz akış ve minimum basınç kaybı ile çok yüksek hassasiyet elde edilir.",
       specs:[["Bağlantı","DN6 – DN100"],["Hassasiyet","±%0,1"],["Tekrarlanabilirlik","±%0,05"],["Maks. Basınç Dayanımı","400 bar"],["Ölçüm Aralığı","0,4 – 400 lt/dak"],["Çıkış","Pulse, ops. 4–20 mA"],["Besleme","5 – 24 VDC"]],
       uses:"Değişken viskoziteli akışkanlar, parafin ve yapışkan akışkanlar, gıda uygulamaları, kimyasal akışkanlar, gres vb. yağlar.",
       sectors:"Dolum ve dozaj sistemleri, kağıt endüstrisi, ağır sanayi, yalıtım ve kaplama endüstrisi, test üniteleri, parafin endüstrisi, gıda endüstrisi.",
       notes:["Sağlam yapısı ile uzun hizmet ömrü sağlar.","Aşındırıcı akışkanlar için gövde seçenekleri mevcuttur.","Düşük akışlar ve değişken viskoziteli akışkanlar için ideal seçimdir."]},

      {code:"NT-TMF", img:"assets/products/NT-TMF.webp", name:"Termal Kütlesel Debimetre", glyph:"thermal",
       desc:"Gaz normundaki akışkanlar için termal dağılım (sıcaklık yayılması) temelinde tasarlanmış, sabit diferansiyel sıcaklık yöntemiyle ölçüm yapan debimetrelerdir. Ölçüm probu üzerinde enerji ile ısı oluşur; gaz geçişinin soğutma etkisi olmaması için enerji oranı artar ve bu oran kütlesel akış hızı ile doğru orantılıdır. Buradan anlık ve toplam debi miktarı tespit edilir.",
       specs:[["Bağlantı Ölçüleri","DN80–DN4000 (ekleme), DN10–DN2000 (boru)"],["Hız","0,5 ~ 100 Nm/s (20 °C, 101,33 kPa)"],["Hassasiyet","±%2,5 (ekleme) / ±%1 (boru)"],["Çalışma Sıcaklığı","−40…+220 °C (sensör), −20…+45 °C (verici)"],["Maks. Basınç","Ekleme ≤2,5 MPa, boru ≤4,0 MPa"],["Çıkış","4–20 mA (optoelektronik izolasyon, maks. yük 500 Ω)"],["Alarm Çıkışı","1–2 hat röle, normalde açık, 10 A / 220 VAC veya 5 A / 30 VDC"],["Haberleşme","RS485 (optoelektronik izolasyon), HART"],["Koruma Sınıfı","IP65"]],
       uses:"Kuru hava ve gazlar (propan, nitrojen, oksijen, hidrojen vb.).",
       sectors:"Enerji ve ısı tesisleri, doğalgaz santralleri, kimya endüstrisi, makine endüstrisi.",
       notes:["Cihaz ayrıca gaz kaçağı tespiti için de kullanılabilir.","Yüksek titreşim direncine sahiptir."]},

      {code:"NT-CMF", img:"assets/products/NT-CMF.webp", name:"Coriolis Kütlesel Debimetre", glyph:"coriolis",
       desc:"Özel olarak tasarlanan akış tüpünün giriş ve çıkışlarında bulunan sensörler ile akış yokken sensörlerden gelen sinyaller aynı fazdadır. Akış geçmeye başladığı anda oluşan titreşim ile sinyaller arasında faz farkı oluşur; bu fark tüplerin içinden geçen kütlesel akış ile doğru orantılıdır. Tüplerin üzerine yerleştirilen ısı sensörü ile akış kompanze edilir; ayrıca bu ürünler akışkan yoğunluğunu da tespit edebilir.",
       specs:[["Hassasiyet","±%0,2, ops. ±%0,1"],["Yoğunluk Ölçüm Aralığı","0,3–3000 g/cm³ (hassasiyet ±0,002 g/cm³)"],["Sıcaklık Dayanımı","−50…+200 °C, ops. −200…+300 °C (hassasiyet ±1 °C)"],["Çıkış","4–20 mA, ops. akış hızı / yoğunluk / sıcaklık sinyali"],["Haberleşme","RS485, Modbus protokolü"],["Koruma ve Basınç Dayanımı","IP67 – 4,0 MPa"]],
       uses:"Tüm sıvı ve gaz uygulamaları; ağırlıklı olarak petrol türevleri, kimyasal endüstri, medikal endüstri, ısı santralleri.",
       sectors:"Kimya tesisleri, petrokimya ve akaryakıt endüstrisi, enerji tesisleri, kağıt sanayi, tekstil sanayi, soğutma endüstrisi, makine endüstrisi, ilaç sanayi.",
       notes:["Kütlesel akış, yoğunluk ve sıcaklık ölçümünü bir arada sağlar.","Yatay ve dikey montaj kolaylığı sağlar.","Giriş ve çıkışlar için düz boru mesafesi gerektirmez.","Akışkanın fiziksel özelliklerinden bağımsız ölçüm sağlar."]},

      {code:"NT-CTG", img:"assets/products/NT-CTG.webp", name:"Kompakt Termal Gaz Debimetre", glyph:"thermal",
       desc:"Ekonomik termal dağılım temelinde tasarlanmış ve gaz akışını ölçmek için sabit diferansiyel sıcaklık yöntemini benimsemiştir. Küçük boyut, kolay kurulum, yüksek güvenilirlik ve yüksek doğruluk gibi avantajları vardır.",
       specs:[["Bağlantı Ölçüleri","DN8 – DN300"],["Hassasiyet","±%1,5 okuma değeri + %0,3 tam ölçek"],["Ölçülebilen Gazlar","N₂, Ar, O₂, CO₂ vb. proses gazları"],["Çalışma Sıcaklığı","−30…+230 °C / bağıl nem <%90"],["Maks. Basınç","5,0 MPa"],["Çıkış","4–20 mA ve Pulse çıkışı, Modbus, M-Bus haberleşme"],["Alarm Çıkışı","1–2 hat röle, normalde açık, 10 A / 220 VAC veya 5 A / 30 VDC"],["Koruma Sınıfı","IP65"]],
       uses:"Proses gazları, doğalgaz hatları, basınçlı hava sistemleri.",
       sectors:"Enerji tesisleri, kimya endüstrisi, makine endüstrisi, gaz dolum tesisleri.",
       notes:["Tüm gazlara kolay kalibrasyon özelliğine sahiptir.","Uzaktan kontrol, ayar ve kalibrasyon özelliğine sahiptir."]}
     ]},

    /* ===================== AKIŞ SENSÖRLERİ ===================== */
    {id:"akis", kicker:"02", title:"Akış Sensörleri", sub:"Akış varlığının izlenmesi, şalterleme ve gözle kontrol", glyph:"switchflow",
     products:[
      {code:"NT-FSW", img:"assets/products/NT-FSW.webp", name:"Akış Şalterleri", glyph:"switchflow",
       desc:"Akış şalteri borulardaki akışın hissedilmesi için kullanılmaktadır. Boru içinde sıvıların hareketini algılayarak akışkan olup olmadığının bilgisini verir. Birçok makine imalatçısı tarafından akış kontrolünde ve ısıtma-soğutma sistemlerinde güvenilir tercihlerdir.",
       variants:[
         ["Pedallı Akış Şalterleri (VAS-10/20)","Dilli tip akış şalterleri ve sensörler hatta dikey olarak bağlanır. T gövdeli veya doğrudan dilli modelleriyle kullanımı pratik ve kolaydır; doğrudan röle çıkışlı olması birçok tahrik elemanına doğrudan bağlantı kolaylığı sağlar. VAS-10 ekonomik seri ve VAS-20 endüstriyel seri mevcuttur."],
         ["Plastik Dilli Akış Şalteri (VAS-10P)","PP gövde, plastik dil. Korozif ve asidik ortamlar için ekonomik çözüm."],
         ["Pirinç Gövdeli Akış Şalteri (VAS-30)","Pirinç gövde, yüksek basınç ve sıcaklık dayanımı. Kompakt boyut, endüstriyel su ve soğutma hatları."],
         ["Plastik Gövdeli Akış Şalteri (VAS-35)","PP plastik gövde, düşük maliyet. Kimyasal uyumluluk gerektiren uygulamalar için."],
         ["Termal Akış Şalterleri (VAS-FS10)","Sıvı bazlı akışı izleyen, kalorimetre prensibine göre çalışan akış anahtarlarıdır. Akış hızı kullanıcı tarafından belirlenen limit değerin dışına çıktığında mevcut konumu tersine çevirir; cihaz üzerindeki LED'lerden bilgi alınabilir."],
         ["Ex-Proof Termal Akış Şalteri","Patlayıcı ve tehlikeli ortamlar için ATEX onaylı termal akış şalteri. Ex d IIC T6 sertifikalı, kimya ve petrokimya prosesleri için."]
       ],
       specs:[["Bağlantı Hat Çapları","DN8 – DN200"],["Sıcaklık Dayanımı","+200 °C"],["Basınç Dayanımı","25 bar (termal tip 6,3 MPa)"],["Malzeme","304 SS – PP"],["Sinyal Çıkışı","Reed kontak 26 VA / 20 W; röle, PNP, NPN, 4–20 mA (termal)"],["Besleme","24 V ±%10 DC (termal tip)"],["Ekran","10 × üç renkli LED (akış hızı) + 1 × LED (sıcaklık)"],["Hız Akış Aralığı","4 … 400 cm/s (hassasiyet ±2 … ±8 cm/s)"],["Koruma Sınıfı","IP65 / IP67"]],
       uses:"Şofben, kombi, ısıtıcı gibi cihazlar, soğutma su hatları, enerji tesisleri ve madenler. Patlayıcı ve zorlu prosesler için özel modeller mevcuttur.",
       sectors:"Makine imalatı, ısıtma-soğutma sistemleri, enerji tesisleri, madencilik."},

      {code:"NT-FSG", img:"assets/products/NT-FSG.webp", name:"Akış Göstergeleri", glyph:"sight",
       desc:"Akış göstergesi, kapalı boru devrelerindeki akışı değişik yönlerden izlemek amacıyla kullanılan bir elemandır. Akış göstergeleri buhar kapanlarından önce ve sonra bağlanarak buhar kaçağının izlenmesinde; gıda, ilaç vb. sanayilerinde akışkanın gözle kontrolünün sağlanmasında kullanılır. Akış göstergelerinde kullanılan camlar özeldir; temperlenmiş sodalime cam olarak da bilinir.",
       variants:[
         ["VAG-12 Yatay Akış Göstergesi","3/8\" bağlantı, 32 mm iç boru çapı, paslanmaz çelik gövde. Yatay borularda cam pencere üzerinden akışın gözle izlenmesi."],
         ["VAG-11 Dikey Akış Göstergesi","1/4\" bağlantı, AISI 304 paslanmaz çelik gövde, maks. 100 °C, 1,6 MPa (229 PSI). Dikey borularda akış izleme."]
       ],
       specs:[["Bağlantı Hat Çapları","1/4\" – 2\""],["Sıcaklık Dayanımı","−30…+180 °C"],["Çalışma Basıncı","16 bar"],["Malzeme","AISI 304 Paslanmaz Çelik, ops. 316 Paslanmaz Çelik"],["Gözetleme Malzemesi","Isıya dayanıklı cam"]],
       uses:"Soğuk su, sıcak su, buhar, basınçlı hava, LPG, LNG, asfalt, fuel oil, seramik çamuru vb.",
       sectors:"Gıda sanayi, ilaç sanayi, enerji tesisleri, kimya sanayi, seramik sanayi."}
     ]},

    /* ===================== SEVİYE SENSÖRLERİ ===================== */
    {id:"seviye", kicker:"03", title:"Seviye Sensörleri", sub:"Sıvı ve katı malzemelerde sürekli ve noktasal seviye ölçümü", glyph:"level",
     products:[
      {code:"NT-ULS", img:"assets/products/NT-ULS.webp", name:"Ultrasonik Seviye Transmitterleri", glyph:"ultra",
       desc:"Ultrasonik seviye sensörleri; katı ve sıvılarda temassız mesafe, seviye ve hacim ölçümü için tasarlanmış enstrümanlardır. Ultrasonik sensör, sinyal çevirici ve kontrol birimi bileşenlerinden oluşur. Kolayca montajı yapılan sensörün tank içerisine gönderdiği ses dalgası malzemeye çarpar ve geri algılanır; böylece seviye tespiti yapılmış olur. Filtreleme özelliği ile yanlış ölçümler engellenir.",
       variants:[
         ["VUS QLU Serisi","4 haneli LCD gösterge, %0,2 hassasiyet, 24 VDC besleme, 60 mA tüketim. Kompakt ve ekonomik ultrasonik seviye sensörü."],
         ["VUS ECH-30x Serisi","6–18 m ölçüm aralığı, yüksek frekanslı ultrasonik teknoloji, 4–20 mA çıkış ve Modbus RS485 haberleşme, 2 röle kontağı. Geniş menzilli uygulamalar."]
       ],
       specs:[["Ölçüm Aralığı","0–1 … 0–20 metre"],["Hassasiyet","%0,2 – %1,0"],["Çözünürlük","3 mm veya %0,1"],["Sıcaklık Dayanımı","Verici −20…+60 °C, sensör −20…+80 °C"],["Koruma Sınıfı","Verici IP65, sensör IP68"],["Çıkış","4–20 mA, RS485 Modbus"],["Besleme","24 VDC"]],
       uses:"Su arıtma ve dağıtım tesisleri, kimya ve petrokimya tesisleri, gıda tesisleri, kapalı ve açık tanklar.",
       sectors:"Kum, çimento-klinker, atık su, temiz su, tozlu katı partiküller, gıda ve yem, plastik granüller.",
       notes:["Montaj kılavuzunda belirtilen adımlar uygulanmalıdır.","Kullanılan akışkana göre prob seçimine dikkat edilmelidir."]},

      {code:"NT-RLS", img:"assets/products/NT-RLS.webp", name:"Radar Seviye Transmitterleri", glyph:"radar",
       vimgs:[["Radar","assets/products/NT-RLS-radar.webp"],["Kılavuzlu","assets/products/NT-RLS-H.png"]],
       desc:"Radar seviye sensörleri darbe yönetimi ile zamanla artan frekans taramaları gönderir; ölçüm yüzeyinden yansıyarak geri dönen bu sinyaller anten tarafından toplanır ve böylece sıvı ve katılarda seviye tespiti yapılır. Yüksek teknolojisi ve temassız – kılavuzlu gibi farklı uygulama metotları ile zorlu proseslerde ölçüm kolaylığı sağlar. Ölçüm değerini mesafe, seviye, hacim ve kütle gibi farklı değerlerde yorumlar.",
       variants:[
         ["VRS FMCW Radar","77–81 GHz frekans bandı, temassız ölçüm. Sıvı ve katı malzemelerde yüksek hassasiyetli seviye tespiti."],
         ["VRS Kılavuzlu Radar","26 GHz, kılavuzlu dalga prensibi. Köpük, buhar veya toz bulutu olan tanklarda güvenilir ölçüm."],
         ["VRS RDR300 Serisi (ORION FMCW)","50 metreye kadar ölçüm menzili. Büyük hacimli tanklar ve silolar için."],
         ["VRS 900 Serisi","26 GHz, Ex ia IIC T6 Ga onaylı. Patlayıcı ortamlar ve tehlikeli bölgelerde kullanım."]
       ],
       specs:[["Ölçüm Aralığı","0–10 m / 0–30 m / 0–50 m / 0–70 m"],["Hassasiyet","±2 mm"],["Besleme","24 VDC – 220 VAC"],["Sıcaklık Dayanımı","−60…+60 °C / −60…+150 °C / −60…+250 °C"],["Koruma Sınıfı","Verici IP65, sensör IP68"],["Sinyal ve İletişim Çıkışı","4–20 mA, HART, RS485 Modbus, Profibus PA, Foundation Fieldbus"],["Frekans Bandı","26 GHz – 80 GHz"],["Ex-Proof","Ex ia IIC T6 Ga (ops.)"]],
       uses:"Kum, çimento-klinker, atık su, temiz su, tozlu katı partiküller, yüksek sıcaklık ve viskoz sıvılar; süt ve süt ürünleri, meşrubat, yağ, benzin, mazot, dolomit, kalsit, kireç, un ve yem, plastik granüller.",
       sectors:"Seramik sanayi, çimento fabrikaları, arıtma tesisleri, gıda endüstrisi, petrokimya endüstrisi, plastik işleme ve hammadde tesisleri, kum ve taş ocakları, kireç ve alçı tesisleri."},

      {code:"NT-HLS", img:"assets/products/NT-HLS.webp", name:"Hidrostatik Seviye Transmitterleri", glyph:"hydro",
       desc:"Hidrostatik seviye transmitteri özel olarak daldırma tip olarak dizayn edilmiştir. Sıvı seviyesi yükseldikçe dip kısma yapmış olduğu basınç lineer olarak artmaktadır. Bu prensibe dayalı olarak sıvıya daldırılan ürün, sıvı seviyesinin yükselmesine bağlı olarak seviyeyi hassas bir şekilde ölçer.",
       variants:[
         ["VHL PL110","100 mbar – 25 bar ölçüm aralığı, 4–20 mA veya 0–10 VDC çıkış. Genel amaçlı daldırma seviye transmitteri."],
         ["VHL PL130","Piezorezistif membran (1.4404/AISI 316L), 100 mbar – 25 bar, 0–10 VDC / 0,5–4,5 VDC / 4–20 mA çıkış. Yüksek hassasiyetli model."]
       ],
       specs:[["Ölçüm Aralığı","100 mbar – 25 bar (1 – 100 metre)"],["Hassasiyet","%0,5"],["Maksimum Basınç","%200 FS"],["Elektriksel Bağlantı","Seviye değerine göre kablo uzunluğu"],["Besleme Voltajı","+12…30 VDC"],["Koruma Sınıfı","IP68"],["Gövde","1.4404 (AISI 316L), ops. 1.4462 (dubleks) – Titanyum"],["Çalışma Sıcaklığı","−25…+85 °C"],["Çıkış","4–20 mA, 0–10 VDC veya 0,5–4,5 VDC"]],
       uses:"Kuyular, su tankları, akaryakıt tankları, göl seviyesi, nehir seviyesi, deniz seviyesi, rezervuarlar.",
       sectors:"Sulama sistemleri, akarsular, tanklar, belediye ve kamu kurumları.",
       notes:["Kablo boyu sipariş sırasında belirtilmelidir.","Ölçümde hava kanallı özel kablo kullanıldığı için muhafaza edilmelidir."]},

      {code:"NT-CLS", img:"assets/products/NT-CLS.webp", name:"Kapasitif Seviye Transmitterleri", glyph:"capacitive",
       desc:"Kapasitif seviye transmitteri, katı ve sıvı malzemelerin seviye yönetiminde; toz, köpük, kir veya benzer partiküllere rağmen yüksek hassasiyette oransal ölçüm imkânı sunar. Kapasitif ölçüm prensibi, elektrot ve tank yüzeyi arasında kütleye bağlı değişen kapasite değerinin algılanmasına dayanır. Sensör elektrodu, kurulum sonrasında istenen noktaya kadar malzeme içerisine daldırılır.",
       variants:[
         ["VKS 5 Kapasitif Seviye Transmitteri","İletken sıvılarda seviye ölçümü. 9–36 VDC besleme, (−)1…(+)100 bar basınç, −40…+150 °C sıcaklık aralığı."],
         ["VKS 11 ECAP Serisi","Yapışkan ve asit/bazik sıvılarda seviye ölçümü. 9–36 VDC besleme, (−)1…(+)100 bar, −40…+150 °C. Özel kaplama ile korozif akışkanlara dayanıklı."]
       ],
       specs:[["Ölçüm Mesafesi","150 – 1150 mm"],["İşlem Sıcaklığı","−40…+150 °C"],["Koruma Sınıfı","IP68"],["Maks. Çalışma Basıncı","100 bar"],["Besleme Gerilimi","9 – 36 VDC"],["Sinyal Çıkışı","4–20 mA, röle"]],
       uses:"Yapı endüstrisinde alçı, kireç, ince kum, dolomit, kalsit, perlitli alçı, çimento, taş, kömür, pulverize kömür tozu; gıda endüstrisinde yem, tohum, un, tuz, şeker.",
       sectors:"Yapı endüstrisi, gıda endüstrisi, inşaat endüstrisi.",
       notes:["Kullanıldığı yerdeki tozdan ve topraktan etkilenmez.","Ürün, malzeme girişinden uzak tutulmalıdır.","Ürüne zarar verebilecek durumlarda ölçüm yapılacak yere siperlik takılması önerilir."]},

      {code:"NT-MLS", img:"assets/products/NT-MLS.webp", name:"Motorlu Seviye Sensörleri", glyph:"motor",
       desc:"Bu tip seviye şalterleri silo ve konteyner içinde bulunan iri taneli malzemenin seviye kontrolü için tasarlanmış enstrümanlardır. Çalışma prensibi oldukça basittir: tank duvarına montajı yapılan seviye şalterinin paletli probu düşük devirde dönmeye başlar; prob seviyesine yükselen iri tanecikli malzemeler palet üzerine karşı kuvvet uygulayarak dönmesini engeller, böylece motor durur ve kontak vererek kontrol amaçlı kullanılabilir.",
       variants:[
         ["VMS Serisi Pedallı Motorlu","Standart bayraklı (pedallı) motorlu seviye şalteri. 250 g/lt minimum algılama yoğunluğu. Silo ve konteyner uygulamaları."],
         ["ROT320 Pedallı Motorlu","Kompakt tasarım, yüksek tork kapasitesi. Ağır sanayi ve çimento tesisleri için dayanıklı model."]
       ],
       specs:[["Bağlantı Terminali","Maksimum 2 mm² (AWG 14) kesitli kablo girişi"],["Besleme","24 VDC – 220 VAC"],["Sıcaklık Dayanımı","Çevre −20…+80 °C, ürün −5…+100 °C"],["Malzeme","Paslanmaz Çelik SS316"],["Bağlantı Ölçüsü","R1½\" – R1\" – R2\""],["Min. Algılama Yoğunluğu","250 g/lt (standart bayrak ile)"],["Maks. Silo İç Basıncı","0,5 bar"]],
       uses:"İnşaat, yapı, gıda ve plastik endüstrisinde bulk katı malzeme seviye kontrolü.",
       sectors:"İnşaat sektörü (alçı, kireç, çimento, taş kırma tesisleri), gıda (yem, tohum, un, tuz, şeker, çay, bakliyat), plastik sanayi."},

      {code:"NT-VLS", img:"assets/products/NT-VLS.webp", name:"Titreşimli Seviye Sensörleri", glyph:"vibrating",
       desc:"Titreşimli seviye sensörleri; sıvı ve katı malzemelerde noktasal seviye tespiti için tasarlanmıştır. Prob üzerindeki titreşimin malzeme teması ile sönümlenmesi esasına dayanır. Oynar parça sayısının azlığı sayesinde bakım gereksinimi düşüktür ve yüksek titreşimli ortamlarda güvenle çalışır.",
       variants:[
         ["VLV Çatal Tip","Paslanmaz çelik çatal prob, R1\" ve R1/2\" bağlantı. Sıvı ve katı malzemelerde güvenilir seviye tespiti."],
         ["VLV Tek Problu","Tek paslanmaz çelik prob, R1\" ve R1/2\" bağlantı. Dar alanlarda ve viskoz sıvılarda kullanım."],
         ["VLV-VBR Çatal Tip Kontrol","12–55 VDC besleme, 100 mm çatal boyu, −40…+85 °C çalışma sıcaklığı. Gelişmiş kontrol özellikleri."]
       ],
       specs:[["Uygulama","Sıvı ve katı malzemeler"],["Malzeme","Paslanmaz çelik"],["Mekanik Bağlantı","R1\", R1/2\", ops. flanşlı, tri-clamp"],["Maks. Sıcaklık ve Basınç","150 °C … 1,5 MPa"],["Çıkış","PNP-NO"],["Besleme","24 VDC / 12–55 VDC"]],
       uses:"Toz, granül ve partikül hâlindeki katı ürünler ile sıvılar.",
       sectors:"Gıda, ilaç ve kimya sanayi, yapı ve inşaat endüstrisi."},

      {code:"NT-CSW", img:"assets/products/NT-CSW.webp", name:"Kapasitif Seviye Şalteri", glyph:"capacitive",
       desc:"Magcap tip seviye şalterinin uç kısmındaki algılama sensörünün etrafı kullanılan yerdeki hammadde ile kaplandıktan sonra yaydığı RF gücünde azalma oluşur. Bu azalma, yapılan hassasiyet ayarından fazla olduğunda çıkış sinyali üretir. Malzemenin dielektrik katsayısına ve özelliğine bağlı olarak cihaz üstünden hassasiyet ayarı yapılabilir.",
       variants:[
         ["VKS 10 Kapasitif Seviye Şalteri","24 VDC besleme, maks. 50 mW tüketim, −40…+150 °C çalışma sıcaklığı. Kompakt yapı, endüstriyel seviye kontrolü."],
         ["VKS 12 Kapasitif Seviye Şalteri","Ayarlanabilir algılama hassasiyeti, 1,5 MHz çalışma frekansı, röle çıkış (AC 250 V maks. 2 A). Geniş uygulama yelpazesi."]
       ],
       specs:[["Ölçüm Mesafesi","150 – 400 – 650 – 1150 mm"],["İşlem Sıcaklığı","−20…+150 °C"],["Koruma Sınıfı","IP68"],["Maks. Çalışma Basıncı","10 bar"],["Algılama Gecikmesi","Maks. 1 sn"],["Besleme Gerilimi","12 – 35 VDC, 1,2 W"],["Sinyal Çıkışı","Röle, 1 enversör kontak, AC maks. 250 VAC / 2 A / 500 VA"]],
       uses:"Toz, granül ve partikül hâlindeki katı ürünler, sıvılar.",
       sectors:"Yapı endüstrisi, gıda endüstrisi, inşaat endüstrisi, kimya sanayi.",
       notes:["Kullanıldığı yerdeki tozdan ve topraktan etkilenmez.","Uygulama noktasına göre ürünün zarar görebileceği durumlarda siperlik kullanılması gerekebilir."]},

      {code:"NT-SSW", img:"assets/products/NT-SSW.webp", name:"Yandan Montajlı Seviye Şalteri", glyph:"sideswitch",
       desc:"F1 tip manyetik seviye şalterleri tüm tankların sıvı seviye ölçümleri için kullanılır. Harici besleme kaynağı olmadan çalışma özelliği, yandan montaj imkânı, geniş basınç ve sıcaklık aralığı ile komple paslanmaz temas sayesinde geniş kullanım alanına sahiptir.",
       specs:[["Basınç Dayanımı","16 bar"],["Sıcaklık Dayanımı","Maks. 150 °C"],["Bağlantı Tipi","Kare flanş"],["Flanş Özelliği","AISI 316"],["Buat","Alüminyum"],["Regülasyon","50 – 100 – 200 mm"],["Yoğunluk","> 0,7 kg/lt"],["Switch Kapasitesi","250 VAC, 15 A, NO+NC"]],
       uses:"Pis ve temiz su tankları, asit ve kostik tanklar, yakıt ve yağ tankları, tüm basınçlı ve basınçsız kaplar.",
       sectors:"Gemi sanayi, yakıt ve yağ tesisleri, kimya sanayi.",
       notes:["Harici beslemeye gerek duymaz.","Yüksek vibrasyonda çalışabilir."]},

      {code:"NT-DSW", img:"assets/products/NT-DSW.webp", name:"Diyaframlı Seviye Şalteri", glyph:"diaphragm",
       desc:"Diyaframlı katı seviye şalteri, depodaki dökme malzemenin seviyesinin ölçülmesinde en ekonomik yöntemdir. Açık ve basınçsız tanklarda kullanılabilir. Tozlu, pudralı, tanecikli, granüllü dökme malzemelerin silodaki dolu ve boş durumları kontrol edilebilir. Membran, kontrolü yapılan malzemeye mutlaka temas etmelidir. Siloya dökülen malzeme yığıldıkça membran kapanır; oluşan baskıyla malzeme diyaframı geri iter ve mekanizma kontağı iter. Malzeme azaldıkça kontak eski konuma döner.",
       specs:[["Gövde Malzemesi","Nitril, NBR, FPM, paslanmaz çelik"],["Bağlantı","Yuvarlak flanş"],["Çıkış","1 × NA/NK mikro şalter"],["Maksimum Sıcaklık","200 °C"]],
       uses:"Dökme katı malzemelerin silo dolu/boş kontrolü.",
       sectors:"İnşaat, yapı, gıda ve plastik endüstrisi."},

      {code:"NT-WLD", img:"assets/products/NT-WLD.webp", name:"Su Baskın Dedektörü", glyph:"flood",
       desc:"Su basma ihtimali olan ve bu konuda kritik önem taşıyan tüm mekanlarda güvenle kullanılabilir. Baskın anında dahili siren ile uyarı vererek hızlı bir şekilde önlem alınmasına imkân tanır. Röle çıkışı ile pompa veya solenoid vana gibi üniteleri kontrol ederek kaçağın durdurulmasını sağlar. Yanlış alarmları önlemek için 3 saniye algılama gecikme özelliği mevcuttur.",
       specs:[["Gösterge","3 adet alarm LED'i"],["Siren","1 adet dahili siren"],["Sensör Sayısı","3 adet sensör bağlanabilir"],["Güç","24 VDC"],["Çıkış","Röle, 2 A / 125 °C, NO, NC"]],
       uses:"Sunucu odaları, bodrum katları, pompa istasyonları, kritik ekipman mahalleri.",
       sectors:"Bina otomasyonu, veri merkezleri, endüstriyel tesisler."},

      {code:"NT-MLI", img:"assets/products/NT-MLI.webp", name:"Manyetik Seviye Göstergeleri", glyph:"bypass",
       vimgs:[["Ex-Proof Tip","assets/products/NT-MLI-EX.webp"],["Kazan Tipi","assets/products/NT-MLI-BR.webp"]],
       desc:"MLG tip manyetik seviye gösterge cihazı, sürekli olarak sıvı seviyesinin ölçümü, izlenmesi ve görüntülenmesi için kullanılır. Tanktaki seviye değişimi, birleşik kaplar prensibine göre bypass tüpü içindeki sıvının seviyesini de aynı oranda değiştirir. Bu sayede seviye göstergesi içinde bulunan mıknatıslı şamandıra hareket ederek bypass tüpünün dış yüzeyindeki manyetik flapları etkiler ve kendi ekseni etrafında 180° dönmesini sağlar. Sıvı seviyesi artarken beyaz flaplar kırmızıya, azalırken kırmızı flaplar beyaza döner.",
       variants:[
         ["VSG Standart","Genel amaçlı manyetik bypass seviye göstergesi. Sürekli sıvı seviye izleme ve görüntüleme."],
         ["VSG Ex-Proof","Patlayıcı ortamlar için Ex-Proof onaylı model. Rafineri, petrokimya ve tehlikeli bölgelerde kullanım."],
         ["VSG Kazan Tipi","Yüksek basınç ve sıcaklık uygulamaları için tasarlanmış kazan tipi model. Buhar kazanları ve enerji tesisleri."]
       ],
       specs:[["Basınç Dayanımı","10 bar (ops. 40 bar)"],["Sıcaklık Dayanımı","150 °C (ops. 350 °C)"],["Bağlantı Tipleri","Dişli G 1/2\", 3/4\", 1\" – Flanşlı DN15, DN20, DN25"],["Boru ve Şamandıra","Paslanmaz çelik"],["Gösterge Profili","Alüminyum"],["Çıkış","4–20 mA, 0–10 V, kontak çıkışı"],["Ex-Proof","Opsiyonel"]],
       uses:"Su tankları, kondens tankları, degazörler, yakıt tankları, buhar kazanları, yeraltı tankları, agresif ve toksik sıvılar, sıvılaştırılmış gazlar, tüm basınçlı ve basınçsız kaplar.",
       sectors:"Gemi inşa sanayi, kimya sanayi, rafineriler, enerji tesisleri."},

      {code:"NT-CDS", img:"assets/products/NT-CDS.webp", name:"İletken Tip Seviye Şalterleri", glyph:"conductive",
       desc:"İletken tip seviye şalteri tank ve kazanların sıvı seviye kontrolünde kullanılmaktadır. Oynar parçası olmadığından kritik ortamlarda, katı partiküllü, düşük yoğunluklu ve yüksek viskoziteli iletken sıvılarda kullanılabilir.",
       specs:[["Elektrot Malzemesi","304 paslanmaz çelik, ops. 316 paslanmaz çelik"],["Bağlantı ve Muhafaza Malzemesi","Derlin"],["Çıkış","1 × NA/NK mikro şalter"],["Maksimum Sıcaklık ve Basınç","60 °C … 6 bar"],["Elektrot Sayısı","Maks. 3"]],
       uses:"Hidrofor uygulamaları, buhar kazanları su seviye kontrolü ve muhtelif iletken sıvı tankları için ekonomik ve güvenli bir çözümdür.",
       sectors:"Enerji tesisleri, bina otomasyonu, kimya sanayi."},

      {code:"NT-RCS", img:"assets/products/NT-RCS.webp", name:"Halatlı Tip Kapasitif Seviye Şalteri", glyph:"rope",
       desc:"Toz ve tanecikli katı maddelerin depolama alanında anlık (nokta) seviyesini tespit etmek için tasarlanmıştır. Çalışma prensibi, prob yüzeyine temasta bulunan maddelerin kapasite değişimi oluşturması ve bu değişimin elektronik bileşenler ile seviye tespiti amacıyla kullanılmasını sağlayan enstrümanlardır.",
       specs:[["Çıkış (Kontak)","1 × NC-NO röle (220 VAC/5 A – 14 VDC/20 A)"],["Halat ve Ağırlık Materyali","304 SS, ops. 316 SS"],["Boy","1 metre … 20 metre"],["Buat Materyali","Delrin"],["Besleme","24 VDC"]],
       uses:"Tanecikli katı maddeler, kireç, kum, kömür tozu, çimento, klinker, buğday, mısır gibi tahıllar.",
       sectors:"Tahıl siloları, çimento tesisleri, kireç ve alçı tesisleri, dökümhaneler.",
       notes:["Halat boyu uygulama noktasına göre belirlenebilir.","Halat yalıtımlı veya yalıtımsız olarak kullanılabilir."]},

      {code:"NT-ELES", img:"assets/products/NT-ELES.webp", name:"Şamandıralı Seviye Sensörleri", glyph:"floattx",
       desc:"NT-ELES şamandıralı seviye sensörleri; sıvıların kaldırma kuvveti prensibinden yararlanılarak, kılavuz çubuğu kapsayan mıknatıslı ve hareketli şamandıranın manyetik alan etkisiyle kılavuz çubuk içerisine yerleştirilen reed kontağı tetiklemesine bağlı olarak devreye alarak veya devreden çıkararak sıvıların seviye tespitini yapmak için tasarlanmış enstrümanlardır. Kullanım amacına göre sürekli (online) seviye ve noktasal seviye şeklinde üretilir; sürekli seviye sensörlerine seviye transmitterleri, noktasal seviye sensörlerine ise seviye şalterleri denir.",
       variants:[
         ["NT-ELES11 Serisi","Sıvı akışkanların anlık (online) seviyesini tespit etmek için tasarlanmıştır. Aktarım veya izleme için analog sinyal çıkışları ve haberleşme çıkışları üretebilir; farklı mekanik bağlantı yapıları ve 50 mm'den 3000 mm'ye kadar boyut seçenekleri ile geniş bir kullanım alanı sağlar. Dalga kıranlı, flanşlı ve PP buatlı modeller mevcuttur."],
         ["NT-ELES7 Serisi","Seviye şalterleri; sıvılarda dolu-boş gibi veya seçilebilir noktalardan anlık seviye tespitini sağlamak amacıyla tasarlanmıştır. 50 mm'den 5000 mm'ye kadar geniş boyut aralığı, üstten veya yandan montaj seçenekleri, flanşlı, dişli ve sıkıştırma mekanik bağlantı seçenekleri ile ekonomik ve güvenilir ölçüm sağlar."],
         ["ELES 5 PP Buatlı Şalter","R2\" dişli bağlantı, maks. 4 kontak ve 2 şamandıra. PP buat ile ekonomik seviye kontrolü."],
         ["ELES 5 Flanşlı Şalter","Flanşlı bağlantı, maks. 4 kontak ve 2 şamandıra. Basınçlı tanklar için uygun."],
         ["ELES 5 M10 Bağlantılı Şalter","M10 dış diş bağlantı, maks. 3 kontak ve 3 şamandıra. Kompakt uygulamalar."],
         ["ELES 5 Soketli Şalter","G1\" dişli bağlantı, maks. 2 kontak ve 2 şamandıra. Pratik soket bağlantısı."],
         ["ELES 5 Yandan Montajlı B10","Alüminyum enjeksiyon gövde, AISI 304/316 flanş ve şamandıra, PN10/16 basınç sınıfı. Depo dolum-boşaltma uyarı ve kontrol sistemleri."]
       ],
       specs:[["Buat ve Boru Materyali","Paslanmaz Çelik 304, 316, 316L / Derlin ve PVDF / Pirinç"],["Şamandıra Materyali","Paslanmaz Çelik 304, 316, 316L / PVDF, NBR, Poliüretan"],["Elektrik Bağlantısı","M12 terminal, DIN 43650, klemens, blendajlı kablo"],["Bağlantı Şekli","R 1/4\" | 1/2\" | 1\" | 1¼\" | 1½\" | R 2\" erkek diş veya flanş DN15–DN100"],["Ölçüm Aralığı","50 mm – 5000 mm"],["Şamandıra Tipi","Küresel veya silindirik"],["Min. Kaldırma Yoğunluğu","0,6 g/cm³"],["Basınç Dayanımı","10 bar, ops. 30 bar"],["Sıcaklık Dayanımı","−20…+120 °C, ops. 180 °C"],["Transmitterler için Hassasiyet","5 mm – 10 mm – 15 mm"],["Transmitter Sinyal Çıkışı","4–20 mA / 0–10 V / Ohm"],["Şalterler için Sinyal Çıkışı","NO-NC kontak / röle"],["Opsiyonel Sıcaklık Sensörü","PT100 – PT1000"]],
       uses:"Su ve türevi tüm akışkanlar; su depoları, pis su tankları, yat ve gemi su tankları, hidrolik yağ tankları, kimyasal tankları, meşrubat ve düşük viskoziteli sıvı kazanları.",
       sectors:"Arıtma tesisleri, makine imalatçıları, yat ve gemi sektörü, kimya sektörü, tekstil sektörü, otel ve havuzlar, petrol ve akaryakıt sektörü, gıda sektörü.",
       notes:["Ekonomik çözümdür.","Uygulamaya özel imalat yapılabilmektedir.","Kurulumu ve montajı kolaydır.","Yapışkan ve yoğunluğu yüksek sıvılarda önerilmez."]},

      {code:"NT-MNS", img:"assets/products/NT-LSW-M.png", name:"Mini Seviye Şalterleri", glyph:"floattx",
       vimgs:[["Plastik Mini","assets/products/NT-MLP.webp"],["Paslanmaz Mini","assets/products/NT-LSW-M.png"]],
       desc:"Mini seviye şalterleri; makine, tank ve kazan gibi endüstriyel uygulamalarda kompakt boyutlarıyla sıvı seviye kontrolü için tasarlanmıştır. Paslanmaz çelik ve plastik (PP, PVDF) gövde seçenekleri ile geniş kullanım alanına sahiptir. Manyetik şamandıra prensibine göre çalışır; sıvı seviyesi belirlenen noktaya ulaştığında reed kontak tetiklenerek sinyal üretir.",
       variants:[
         ["VML-V Paslanmaz Yandan Montaj","AISI 304 paslanmaz çelik gövde, R1/2\" ve M10 bağlantı, 1 A maks. kontak akımı. Makine ve tankların yandan seviye kontrolü için idealdir."],
         ["VML-PS Paslanmaz Üstten Montaj","AISI 304 paslanmaz çelik gövde, M10 bağlantı, −40…+125 °C sıcaklık dayanımı. Üstten montaj ile tank seviye izleme."],
         ["VF-V26-S Soketli Paslanmaz","AISI 304 gövde, R1/2\" dişli bağlantı, soketli elektrik bağlantısı, 1 A kontak akımı."],
         ["VML-P Plastik Yandan Montaj","PP gövde, 0,5 A maks. kontak akımı, silikon kablo. Ekonomik çözüm."],
         ["VML-T PVDF Yandan Montaj","PVDF gövde, NPT 1/2\" dişli bağlantı, maks. 80 °C. Agresif kimyasal ortamlar için."],
         ["VML-PS Plastik Üstten Montaj","PP gövde, M8 bağlantı, maks. 80 °C, 1,2 A kontak akımı."]
       ],
       specs:[["Gövde Materyali","AISI 304 Paslanmaz Çelik / PP / PVDF"],["Bağlantı","R1/2\", M8, M10, NPT 1/2\""],["Montaj","Yandan veya üstten"],["Sıcaklık Dayanımı","−40…+125 °C (paslanmaz), maks. 80 °C (plastik)"],["Kontak Tipi","Reed switch NO / NC"],["Maks. Kontak Akımı","0,5 – 1,2 A"],["Kablo","Silikon"],["Koruma Sınıfı","IP67"]],
       uses:"Makine ve CNC soğutma suyu kontrolü, su tankları, kimyasal tanklar, yağ tankları, küçük depolar.",
       sectors:"Makine imalatı, CNC ve takım tezgahları, soğutma sistemleri, kimya sanayi, otomotiv, plastik sanayi.",
       notes:["Kompakt boyutu ile dar alanlarda montaj kolaylığı sağlar.","Harici besleme gerektirmez.","Yapışkan ve yoğunluğu yüksek sıvılarda önerilmez."]}
     ]},

    /* ===================== BASINÇ SENSÖRLERİ ===================== */
    {id:"basinc", kicker:"04", title:"Basınç Sensörleri", sub:"Basınç transmitterleri, şalterler ve manometreler", glyph:"pressure",
     products:[
      {code:"NT-BT", img:"assets/products/NT-BTT-S.webp", name:"Standart Seri (OEM) Basınç Transmitterleri", glyph:"pressure",
       desc:"Sıvı ve gazların birim alana uyguladığı kuvvetin büyüklüğüne basınç denir. Algıladığı basınç değerini belirli bir elektronik sinyale dönüştüren ekipmanları basınç transmitteri olarak adlandırabiliriz.",
       variants:[["NT-BT Serisi","G1/4\" bağlantı, 0…2,5 bar'dan 0…600 bar'a kadar ölçüm aralığı."],["NT-FPT Serisi","G1/4\" – G1/2\" bağlantı; 0…100 mbar ile 0…600 bar, vakum seçenekleri (0…−1 bar)."]],
       specs:[["Bağlantı Ölçüsü","G1/4\" – G1/2\""],["Ölçüm Aralığı","0…2,5 bar'dan 0…600 bar'a kadar; 0…100 mbar seçenekleri"],["Hassasiyet","±%0,5 FS / ±%0,3 FS"],["Sıcaklık Aralığı","−40…+125 °C"],["Çıkış Sinyali","4…20 mA, 0…5 VDC, 1…6 VDC, 0…10 VDC, 0,5…4,5 VDC ratiometrik"]],
       uses:"Yapışkan olmayan ve partikül içermeyen sıvılar, agresif olmayan gazlar.",
       sectors:"Atık su tesisleri, gıda sanayi, tekstil sanayi, ağır sanayi, makine sanayi, kimya sanayi, petrokimya, kağıt sanayi, ilaç sanayi, hidroelektrik santralleri."},

      {code:"NT-EPI / NT-NAT / NT-BCT", img:"assets/products/NT-EPI.webp", name:"Diyaframlı Basınç Transmitterleri", glyph:"diaphragm",
       desc:"Mekanik bağlantı noktasında bulunan diyaframa uygulanan kuvveti algılayarak elektriksel sinyale dönüştürerek ölçümleme sağlayan ekipmanlardır. Atık ve partikül içeren sıvılar, viskoz sıvılar ve tozlu gazlar gibi yapışkan akışkanlar için uygundur.",
       specs:[["Bağlantı Ölçüsü","1/4\" – 1/2\", G1/2\" erkek flush membran"],["Ölçüm Aralığı","0…1 bar'dan 0…600 bar'a kadar"],["Hassasiyet","±%0,4 FS / ±%0,5 FS"],["Sıcaklık Aralığı","−40…+85 °C / −40…+125 °C"],["Çıkış Sinyali","4…20 mA, 0…5 VDC, 1…6 VDC, 0…10 VDC"]],
       uses:"Atık ve partikül içeren sıvılar, viskoz sıvılar, tozlu gazlar, yapışkan sıvılar.",
       sectors:"Atık su ve arıtma tesisleri, gıda endüstrisi, makine endüstrisi, kimya ve petrokimya endüstrisi, iklimlendirme endüstrisi."},

      {code:"NT-DMP / NT-BFT / NT-DPT", img:"assets/products/NT-DMP.webp", name:"Fark Basınç Transmitterleri", glyph:"diffpressure",
       desc:"İki farklı basınç değeri arasındaki farkı (Δp) tespit etme amaçlı tasarlanmış ürünlerdir. Hortum girişli düşük fark basınç modellerinden yüksek basınç fark ölçümüne kadar geniş bir yelpaze sunar.",
       specs:[["Bağlantı Ölçüsü","1/4\", M20×1,5, G1/2\", hortum girişi"],["Ölçüm Aralığı","−100 Pa … +7000 Pa; 0 bar … 200 bar"],["Fark Basınç Ölçüm Aralığı","100 mbar'dan 25 bar'a kadar; ±60 mbar'dan ±100 bar'a"],["Hassasiyet","±%0,5 FS; ±%1,5, ops. ±%0,25"],["Sıcaklık Aralığı","−40…+125 °C / −10…+50 °C"],["Çıkış Sinyali","4…20 mA, 0…5 VDC, 1…5 VDC, 0–10 V, ops. Modbus"]],
       uses:"Pnömatik sistemler, hava kompresörleri, hava soğutma-ısıtma sistemleri, su pompaları, sıvı tankları.",
       sectors:"Medikal ve kimya endüstrisi, test sistemleri, iklimlendirme, makine endüstrisi."},

      {code:"NT-EXNT", img:"assets/products/NT-EXNT.webp", name:"Ex-Proof Basınç Transmitterleri", glyph:"exproof",
       desc:"Parlayıcı ve patlayıcı sıvı ve gazların ölçümü için özel olarak tasarlanmış enstrümanlardır. Ex-proof onaylı gövde ile tehlikeli bölgelerde güvenli ölçüm sağlar.",
       specs:[["Bağlantı Ölçüsü","1/4\""],["Ölçüm Aralığı","200 Pa … 10 MPa"],["Fark Basınç Ölçüm Aralığı","±60 mbar'dan ±100 bar'a kadar"],["Hassasiyet","±%0,075 FS (ops. ±%0,05 FS)"],["Sıcaklık Aralığı","−40…+125 °C (ops. 400 °C)"],["Çıkış Sinyali","4…20 mA / HART / MBAS"],["Ex-Proof Onay","Ex d IIC T6, Ex ia IIC T6"]],
       uses:"LNG – LPG türevi yanıcı gazlar, yanıcı ve parlayıcı sıvılar.",
       sectors:"Gemi sanayi, Ex Zones 0/1/2 (gaz) ve 20/21/22 (toz), maden sanayi, petrokimya endüstrisi, kömür madenleri, hububat siloları, şeker fabrikaları."},

      {code:"NT-DMPX", img:"assets/products/NT-DMPX.webp", name:"Smart Basınç Transmitterleri", glyph:"smart",
       desc:"Gelişmiş mikroişlemci teknolojisi ve sıcaklık kompanzasyonu ile basınç ölçümü sağlayan ekipmanlardır. Yüksek hassasiyet ve kabiliyete sahiptir.",
       specs:[["Bağlantı Ölçüsü","1/4\""],["Ölçüm Aralığı","0…100 mbar – 0…1000 bar'a kadar"],["Hassasiyet","±%0,075 FS (ops. ±%0,05 FS)"],["Sıcaklık Aralığı","−40…+125 °C (ops. 400 °C)"],["Çıkış Sinyali","4…20 mA / HART / MBAS"],["Ex-Proof Onay","Ex d IIC T6, Ex ia IIC T6"]],
       uses:"Tüm sıvı, gaz ve buhar uygulamaları.",
       sectors:"Makine endüstrisi, test ve kalibrasyon sistemleri, kimya sanayi, ağır sanayi, savunma sanayi, petrokimya endüstrisi."},

      {code:"NT-EPD", img:"assets/products/NT-EPD.webp", name:"Göstergeli Basınç Transmitterleri ve Şalterleri", glyph:"gauge",
       desc:"Basınç transmitterine kompakt şekilde eklenmiş programlama ve gösterge ekranından oluşmaktadır. Kolay ve pratik kullanımı sayesinde sahada anlık veri izlemeye olanak sağlar.",
       specs:[["Bağlantı Ölçüsü","G1/4\" – G1/2\""],["Ölçüm Aralığı","0…0,2 bar'dan 0…600 bar'a kadar"],["Hassasiyet","±%0,5 FS"],["Sıcaklık Aralığı","−25…+85 °C"],["Çıkış Sinyali","4…20 mA, 0…10 VDC, değiştirilebilir mA veya V"],["Anahtarlama","2 adet PNP transistör (ops. kontak çıkış)"]],
       uses:"Tüm sıvı ve gazlar.",
       sectors:"İmalat tezgahları, hidrolik çalışan tüm makineler, HVAC makineleri (ısıtma, klima, havalandırma üniteleri), soğutma üniteleri, su arıtma makineleri.",
       notes:["Absolute veya relative ölçüm seçeneği.","NFC ile cep telefonundan programlayabilme.","Tek cihazda akım ve voltaj çıkış seçeneği."]},

      {code:"NT-TG / NT-KP", img:"assets/products/NT-PSW.webp", name:"Basınç Şalterleri", glyph:"pswitch",
       desc:"Algıladığı basınç verisini set edilen nokta veya noktalarda anahtarlama, emniyet ve alarm amaçlı üretilmiş basınç ölçme ekipmanlarıdır.",
       specs:[["Bağlantı Ölçüsü","G1/4\", G1/8\""],["Ölçüm Aralığı","−200 mbar…−800 mbar ve 0,1…600 bar'a kadar; −0,2…7,5 / 2…14 bar"],["Hassasiyet","<%5"],["Sıcaklık Aralığı","−30…+100 °C (ops. 250 °C); −40…+60 °C"],["Çıkış Sinyali","NO / NC / değişken (NO&NC)"]],
       uses:"Partikül içermeyen sıvılar, hava, buhar ve agresif olmayan gazlar.",
       sectors:"Makine parçaları, hidrolik, endüstriyel uygulamalar."},

      {code:"NT-A300 / NT-S100 / NT-C600", img:"assets/products/NT-MNM.webp", name:"Manometreler", glyph:"manometer",
       desc:"Gaz, sıvı ve buhar hatlarında standart tip, diyaframlı tip, endüstriyel tip, kontaklı tip gibi çeşitleri bulunan ve basınç bilgisini en kolay izleme yöntemi olarak günümüzde de en çok kullanılan ürün grubudur. Prosese göre şekillenebilen mekanik bağlantı çeşitleri mevcuttur; bazı modeller anahtarlama yapabilmesi için kontaklı imal edilmiştir. Ürün portföyümüzde 40 mm'den 200 mm'ye kadar gösterge çapları bulunmaktadır; vakum hatları dahil −1 bar … 1000 bar basınç aralıklarında imal edilmektedir.",
       variants:[
         ["Standart Seri","G1/8\" (40 mm) – G1/4\" B (50, 63 mm) – G1/2\" B (100, 160 mm). −1…0 bar ile 0…400 bar. Cl. 2.5 / Cl. 1.6."],
         ["Paslanmaz Seri","G1/4\" B (63 mm) – G1/2\" B (100, 160 mm). −1…0 ile 0…1600 bar. Kuru tip maks. +200 °C, gliserinli tip maks. +100 °C."],
         ["Kapsül Diyaframlı","63/100/160 mm gösterge. −25…0 mbar ile 0…600 mbar. Cl. 1.6 (pozitif), Cl. 2.5 (vakum)."],
         ["Flush Seri Diyaframlı","DN40, DN50 bağlantı. −1…0 bar ile 0…40 bar. Kuru tip maks. +150 °C."],
         ["Hijyenik Rakor Bağlantılı","DN25/32/40/50 (DIN 11851), 1½\" ve 2\" (SMS). −1…0 bar ile 0…40 bar."],
         ["Clamp Diyaframlı","DN25/32/40/50 (DIN 32676), 1\", 1½\", 2\" (ISO 2852). −1…0 bar ile 0…40 bar."]
       ],
       specs:[["Gösterge Çapları","40, 50, 63, 100, 160, 200 mm"],["Ölçüm Aralığı","−1 bar … 1600 bar"],["Hassasiyet","Cl. 1.0 / Cl. 1.6 / Cl. 2.5"],["Sıcaklık Aralığı","+60 °C … +200 °C (tipe göre)"],["Gövde","Paslanmaz çelik / pirinç"]],
       uses:"Sıvı, buhar ve gazlar.",
       sectors:"Gemi endüstrisi, temiz su taşıma sistemleri, atık su sistemleri, kimya ve petrokimya endüstrisi, enerji santralleri, gıda ve meşrubat endüstrisi, süt makineleri, ilaç sanayi, makine endüstrisi."},

      {code:"NT-DPS-A", img:"assets/products/NT-DPS-A.webp", name:"Hava Fark Basınç Şalteri", glyph:"diffpressure",
       desc:"Klima ve havalandırma sistemlerinde filtre tıkanma tespiti için fark basınç şalteri. Filtre üzerindeki basınç düşüşü ayarlanan set değerini aştığında SPDT röle çıkışı alarm veya kontrol işlemi başlatır.",
       specs:[["Ölçüm Aralığı","20 – 300 Pa (ayarlanabilir)"],["Kontak","SPDT (değiştirmeli)"],["Koruma Sınıfı","IP54"],["Bağlantı","6 mm hortum nipeli"],["Çalışma Sıcaklığı","−10…+85 °C"],["Set Değeri","Skaladan ayarlanabilir"]],
       uses:"Hava filtresi tıkanma tespiti, temiz oda izleme, havalandırma ve fan kontrolü.",
       sectors:"HVAC, temiz odalar, bina otomasyonu, üretim tesisleri."},

      {code:"NT-DPS-L", img:"assets/products/NT-DPS-L.webp", name:"Sıvı Fark Basınç Şalteri", glyph:"diffpressure",
       desc:"Sıvı filtre durumunu izlemek ve basınç farkı set değerini aştığında alarm tetiklemek için kompakt fark basınç şalteri. Su, yağ ve kimyasal filtrasyon sistemlerine uygundur.",
       specs:[["Ölçüm Aralığı","0,2 – 4 bar (ayarlanabilir)"],["Kontak","SPDT (değiştirmeli)"],["Koruma Sınıfı","IP65"],["Bağlantı","G 1/4\" veya 1/4\" NPT"],["Çalışma Sıcaklığı","−20…+85 °C"],["Maks. Çalışma Basıncı","40 bar"]],
       uses:"Sıvı filtre izleme, soğutma devresi koruması, endüstriyel proses kontrolü.",
       sectors:"Su arıtma, kimya, enerji santralleri, üretim."}
     ]},

    /* ===================== SICAKLIK ===================== */
    {id:"sicaklik", kicker:"05", title:"Sıcaklık Sensörleri", sub:"Termokupllar, termo rezistanslar ve sıcaklık-nem transmitterleri", glyph:"temp",
     products:[
      {code:"NT-TC", img:"assets/products/NT-TC.webp", name:"Termokupllar", glyph:"thermocouple",
       desc:"İki farklı metalin birleşme noktasında oluşan sıcaklık farkının küçük gerilim üretmesi (Seebeck etkisi) prensibine dayanan sıcaklık sensörleridir. Basit yapısı, geniş sıcaklık aralığı ve hızlı tepki süresiyle endüstriyel sıcaklık ölçümünde en yaygın kullanılan çözümdür. Tüm modellerde proseslere uygun özgün imalat (projeye uygun çap, boy ve tip) sağlanmaktadır.",
       variants:[
         ["VTC-J — J Tipi Termokupl","Demir-konstantan yapısıyla genel endüstriyel sıcaklık ölçümlerinde tercih edilen, hızlı tepki süresi ve uygun maliyet avantajı sunan termokupllardır. 0 … 750 °C aralığında çalışır. Plastik ve kauçuk işleme, ısıtma sistemleri, laboratuvar cihazları, fırın ve ocak kontrolü uygulamalarında kullanılır."],
         ["VTC-K — K Tipi Termokupl","Nikel-krom / nikel-alüminyum alaşımdan üretilmiş, oksitlenmeye ve aşındırıcı ortamlara karşı dayanıklıdır. −200 °C … +1260 °C aralığında yüksek sıcaklıklarda stabil ölçüm sağlar. Metal işleme, seramik üretimi, cam sanayi, petrokimya, enerji santralleri ve otomasyon sistemlerinde kullanılır."],
         ["VTC-S — S Tipi (Platin) Termokupl","Platin-rodyum (Pt10Rh-Pt) alaşımlı yapısıyla 0 °C … 1600 °C arasında çok yüksek sıcaklıklarda hassas ölçüm yapabilen termokupllardır. IEC ve NIST standartlarına uygundur. Cam üretimi, demir-çelik sanayi, seramik fırınları, metal ergitme, ilaç üretimi ve havacılık uygulamalarında kullanılır."],
         ["VTC-T — T Tipi Termokupl","Bakır-konstantan alaşımdan oluşur; −200 °C … +350 °C aralığında yüksek hassasiyetle çalışır. Nemli ve düşük sıcaklık ortamlarında güvenilir ölçüm sağlar. Soğuk zincir takibi, kriyojenik uygulamalar, laboratuvar deneyleri, gıda işleme ve medikal cihazlarda kullanılır."]
       ],
       specs:[["Tip","J – K – T – E – N – R – S – B"],["Tel Çapı","0,35 – 0,50 – 0,80 – 1 – 1,6 – 2 – 2,5 – 3 mm"],["Koruyucu Kılıf","SS316, Inconel 600/800, 1.4749, 1.4841 (1.4845), Seramik KER 530/610/710 (C799), Silisyum Karbür, Silisyum Nitrür (Si₃N₄), PTFE, PVDF, PFA"],["Bağlantı Şekilleri","R veya NPT 1/4\", 3/8\", 1/2\", 3/4\", 1\"; DIN veya ASME flanş"],["Termoçift Adedi","Tek / çift / çoklu"],["Sinyal Çıkışı","4–20 mA, 0–10 V"],["Buat / Kafa","DIN 43729 alüminyum, IP67 (ops. Ex-proof, bakalit)"]],
       uses:"Katı, sıvı, gaz ve buhar uygulamalarının tümünde.",
       sectors:"Metal işleme, çimento tesisleri, cam ve seramik endüstrisi, gıda endüstrisi, ilaç endüstrisi, kimya ve petrokimya endüstrisi, enerji santralleri, makine imalatı, otomasyon sistemleri.",
       notes:["Ölçüm sıcaklık aralığı, ortamın kimyasal bileşimi, tepki süresi ve montaj şekline göre doğru tip seçilmelidir.","Koruyucu kılıf çapının en az 8-10 katı kadar dalma boyu önerilir.","İsteğe bağlı özel üretimler yapılabilmektedir."]},

      {code:"NT-RTD", img:"assets/products/NT-RTD.webp", name:"Termo Rezistanslar (PT100 / PT1000)", glyph:"rtd",
       desc:"Platin dirençli sıcaklık sensörleri olup sıcaklık değişimine bağlı direnç değişimi ile hassas ölçüm yapar. PT100 ve PT1000 modelleri endüstriyel proseslerde, enerji sistemlerinde ve tesis otomasyonlarında yaygın olarak kullanılır. Yüksek doğruluk, kararlı performans ve uzun ömür sunar.",
       variants:[
         ["VPT-100K — Kafalı Tip PT100","Ölçüm ucu metal kılıfla donatılmış, bağlantı kafası sayesinde sahada kolay kablolama imkânı sunan dirençli sıcaklık sensörüdür. Zorlu çevre koşullarına karşı dayanıklıdır. 316 paslanmaz çelik boru ve bağlantı materyali, Class B (ops. Class A) hassasiyet, 1 veya 2 elemanlı, 4–20 mA opsiyonel çıkış."],
         ["VPT-100B — Bayonet Tip PT100","Titreşime dayanıklı yapısı ve kolay monte edilebilirliği ile üretim hatlarında zamandan tasarruf sağlar. Yayla sıkıştırma sayesinde yüzeye sıkıca oturur. Maks. 400 °C (çelik örgü kablo) / 200 °C (silikon kablo), 3–8 mm çap aralığı, nikel kaplı pirinç koruyucu kılıf. Plastik enjeksiyon, ekstrüzyon, lastik ve kauçuk makinelerinde yaygındır."],
         ["VPT-1000K — Kafalı Tip PT1000","Yüksek hassasiyetli ve düşük kablo etkisine sahip dirençli sıcaklık sensörüdür. PT1000 sensörlerin yüksek direnç değerleri uzun kablo mesafelerinde sinyal kaybını azaltır. Kafalı yapısı sahada kolay bağlantı ve bakım imkânı sunar. 316 paslanmaz çelik gövde, zorlu ortam koşullarına yüksek dayanıklılık."],
         ["VPT-1000B — Bayonet Tip PT1000","Hızlı montaj ve güvenli temas avantajıyla kalıp, makine ve yüzey sıcaklığı ölçümlerinde yaygın kullanılan dirençli sıcaklık sensörüdür. Yaylı bayonet bağlantısı ile sensör yüzeye sıkıca oturur. Otomasyon sistemleri ve hassas uygulamalar için idealdir."]
       ],
       specs:[["Tip","PT100, PT200, PT500, PT1000, PT2000"],["Koruyucu Kılıf","SS316, SS310, PTFE, PVDF, PFA, nikel kaplı pirinç (bayonet)"],["Kılıf Çapları","3 mm … 22 mm"],["Eleman Yapısı","Class A, Class B; DIN/EN60751 standardı"],["Eleman Sayısı","1×, 2× (opsiyonel)"],["Mekanik Bağlantı","R 1/2\", 1/4\" × 19\" (M12 opsiyonel)"],["Maks. Sıcaklık","400 °C (çelik örgü kablo), 200 °C (silikon kablo)"],["Sinyal Çıkışı","4–20 mA, 0–10 V (opsiyonel)"],["Kablo","Cam elyaf + çelik örgü veya silikon + silikon, 3 × 0,22 mm²"]],
       uses:"Petrokimya tesisleri, enerji santralleri, gıda üretimi, ilaç ve kimya endüstrisi, kazan sistemleri, HVAC, tank ve boru sıcaklık kontrolü.",
       sectors:"Kimya ve petrokimya, gıda ve ilaç, enerji, HVAC, plastik enjeksiyon, ekstrüzyon, lastik ve kauçuk işleme, makine imalatı, otomasyon.",
       notes:["PT100 kısa kablo mesafelerinde, PT1000 uzun kablo mesafelerinde tercih edilir.","Kafalı tip proses uygulamalarında, bayonet tip makine ve yüzey ölçümlerinde idealdir.","İsteğe bağlı özel üretimler yapılabilmektedir."]},

      {code:"NT-HT", img:"assets/products/NT-HT.webp", name:"Sıcaklık ve Nem Transmitterleri", glyph:"humidity",
       desc:"VTH serisi sıcaklık ve nem transmitterleri, yerli üretim hassas ölçüm cihazlarıdır. Yenilenmiş sensör ve entegre teknoloji sayesinde neredeyse tüm şartlar altında kullanılabilir. Amerikan menşei sensör direkt olarak sıvı ile temas etse bile, üzerindeki sıvı buharlaştığında ölçüm almaya devam edebilecek yapıdadır.",
       variants:[
         ["VTH Plastik Problu","Duvar montajlı veya uzatılabilir kablo ile farklı uygulamalarda rahatlıkla kullanılır. Göstergeli modelinde 14 mm yüksekliğinde, 15 metreden görülebilir ekranı ile üzerinden izleme yapılabilir. Röle ve analog sinyal çıkışlarının yanında RS485 Modbus iletişim modülü ilave edilebilir. PVC sensör gövdesi."],
         ["VTH Paslanmaz Problu","Aynı VTH serisi özelliklerini taşıyan paslanmaz çelik prob versiyonudur. Endüstriyel proseslerde ve zorlu ortamlarda tercih edilir. Pirinç filtreli veya dişli paslanmaz çelik prob seçenekleri mevcuttur."],
         ["Hat Tipi Transmitter","Hava kanalları veya daldırma sıcaklık-nem uygulamaları için geliştirilen hat tipi transmitterdir. Paslanmaz, pirinç ve plastik prob seçenekleri ile basınçlı ortamlar için özel filtre seçenekleri mevcuttur."],
         ["GSM Veri İzleme","Sıcaklık-nem verilerini GSM üzerinden izleme amacıyla geliştirilmiştir. Harici 2 analog, 2 lojik ve 16 Modbus parametresi okuma özelliği. Tüm dataların kayıt ve web gönderim süreleri ayarlanabilir."]
       ],
       specs:[["Ekran","2 × 14 mm 4 dijit özel ekran (15 m okuma mesafesi)"],["Sinyal Çıkışı","Sıcaklık ve nem için 4–20 mA / 0–10 V veya 2 × 3 A röle + RS485 Modbus RTU"],["Koruma Sınıfı","IP65 (ops. IP68)"],["Doğruluk","Sıcaklık ±0,3 °C, Nem ±%1,8 rH"],["Çözünürlük","0,1 °C, 0,1 %rH"],["Sıcaklık Ölçüm Aralığı","−40 … +80 °C"],["Nem Ölçüm Aralığı","0 – 100 %rH"],["Besleme","24 VDC ±%10 (maks. 3 W)"],["Kontrol","AL1 ve AL2 ısıtma/soğutma kontrolleri, timer fonksiyonları"],["Bağlantı Şekli","Duvar montaj, dişli montaj, hat montajı"],["Prob Materyali","Paslanmaz çelik, pirinç filtreli, dişli paslanmaz çelik, PVC"],["Sensör Uzatma","30 m'ye kadar"],["Boyutlar","165 × 65 × 56 mm"]],
       uses:"Soğuk hava depoları, kümes hayvancılığı, ofis sıcaklık-nem izleme sistemleri, izole odalar.",
       sectors:"Gıda depolama, tarım ve hayvancılık, bina otomasyonu, ilaç ve lojistik."}
     ]},

    /* ===================== PROSES KONTROL ===================== */
    {id:"kontrol", kicker:"06", title:"Proses Göstergeler ve Kontrol Cihazları", sub:"İzleme, kontrol ve sinyal aktarımı", glyph:"panel",
     products:[
      {code:"NT-TCS / NT-FBT", img:"assets/products/NT-TCS.webp", name:"Debi ve Akış Göstergeleri", glyph:"panel",
       desc:"Endüstriyel süreçlerde yapılan ölçümlemelerin izlenmesi, kontrol edilmesi ve sinyal aktarımları için tasarlanmış kumanda enstrümanlarıdır. Anlık ve toplam akış miktarını izleyebilmek, farklı çıkış seçenekleri ile kontrol edebilmek ve aktarmak amaçlı geliştirilmiş cihazlardır.",
       specs:[["Ürün Kodu","NT-TCS / NT-FBT / NT-TCS37"],["Boyut","72×72 mm / 96×96 mm / 36×72 mm"],["Gösterge","2×6 dijit (8 mm) / 6 dijit (8 mm)"],["Anahtarlama","2×8 A röle / 1×8 A röle"],["Analog Çıkış","4–20 mA / 0–20 mA"],["Haberleşme","RS485 Modbus ASCII/RTU"],["Besleme Gerilimi","12 VDC – 24 VDC – 220 VAC"],["Sayma Hızı","10 kHz"]],
       uses:"Debi ve akış ölçümlerinin panelden izlenmesi ve kontrolü.",
       sectors:"Arıtma tesisleri, gıda sanayi, kimya sanayi, makine imalatı."},

      {code:"NT-DI / NT-UPI", img:"assets/products/NT-DI.webp", name:"Üniversal Girişli Göstergeler", glyph:"panel",
       desc:"Üniversal tüm giriş tiplerine göre (sıcaklık ve analog çıkışlı sensörlere uyumlu) proses değerlerinin gözlemlenmesi ve kontrolü için üretilmiş basit tipte kontrol göstergeleridir. Farklı alarm seçenekleri tanımlanarak çıkış alınabilir.",
       specs:[["Ürün Kodu","NT-DI 377 / NT-UPI"],["Boyut","35×77 mm / 48×48, 72×72, 48×96, 96×48 mm"],["Gösterge","4 dijit (10 mm) / 2×4 dijit (üst 14 mm, alt 10 mm)"],["Giriş","Termokupl, PT100, PTC, NTC, 4–20 mA, 0–10 V, ohm"],["Anahtarlama","4×8 A röle / 2×8 A röle (ops. 3×8 A)"],["Analog Çıkış","4–20 mA, 0–20 mA, 0–10 V"],["Haberleşme","RS485 Modbus ASCII/RTU"],["Doğruluk","%0,5 / %0,3"],["Besleme Gerilimi","12 VDC – 24 VDC – 220 VAC"]],
       uses:"Sıcaklık ve analog sensörlerin panel üzerinden izlenmesi.",
       sectors:"Makine imalatı, gıda, kimya, enerji tesisleri."},

      {code:"NT-EPD 11", img:"assets/products/NT-EPD11.webp", name:"Kompakt Üniversal Göstergeler", glyph:"panel",
       desc:"NT-EPD 11 dijital gösterge, transmitterlerden 4–20 mA sinyalini alarak istenen ölçüm birimine çevirmek ve görüntülemek için kullanılır. DIN 43650 soket bağlantılı 2 kablolu transmitterlere kolayca takma/çıkarma için tasarlanmıştır. Ürün yüksek doğruluk, kararlılık ve kolay kullanım özelliklerine sahiptir. Basınç veya diğer transmitterlere gösterge ve alarm set noktaları eklemek için uygun bir çözümdür.",
       specs:[["Uygulamalar","4–20 mA akım değeri veya yüzde görüntüleme, 2 adet bağımsız alarm/switch çıkışı"],["Giriş Sinyali","4–20 mA (2 kablolu)"],["Güç Kaynağı","4–20 mA 2 kablolu hat beslemesi, maks. basınç düşümü 8 VDC"],["Çıkış Sinyali","4–20 mA 2 kablolu sinyal çıkışı"],["Saha Çalışması","3 buton, bütün parametreler yerinde değiştirilebilir"],["Gösterge","Çift sıralı 5 bit/8 bit, 7/16 segment arkadan aydınlatmalı LCD, −19999~99999"],["Doğruluk ve ADC","%0,1 FS ±1 bit / 24 bit"],["Switch Adedi","2 yönlü PNP / NA"],["Switch Fonksiyonu","Yüksek ayar, düşük ayar, pencere fonksiyonu, histerezis"],["Ölçüm Birimleri","kPa, MPa, Pa, bar, mbar, psi, mH₂O, Torr, atm, kg, N, °C, °F, K, %RH, PPM, pH, m, mm, m/s, Ω, mV, V"]],
       uses:"Transmitterlere saha göstergesi ve alarm eklenmesi.",
       sectors:"Tüm endüstriyel proses uygulamaları."},

      {code:"NT-UPC / NT-TC / NT-PRFC", img:"assets/products/NT-UPC.webp", name:"Kontrol Cihazları", glyph:"controller",
       desc:"Sıcaklık ve analog çıkışlı sensörlerle ölçüm yapılan uygulamalarda proses değerlerinin gözlemlenmesi ve kontrolü için kullanılır. Kontrol çıkışı için On-Off, oransal (P), oransal + integral (PI), oransal + integral + türev (PID) çalışma şekilleri mevcuttur. Modbus haberleşme protokolü ile diğer sistemlerle entegre çalışabilir.",
       variants:[
         ["Üniversal Girişli Kontrol Cihazları","NT-UPC 4 / 7 / 49. 48×48, 72×72, 48×96 mm. Üniversal proses girişi 4…20 mA, 0…20 mA, 0…60 mV, 0…10 V, termokupl (J,K,R,S,T), PT100 (hat kompanzasyonlu). 2 röle çıkışı 8 A@250 VAC, analog çıkış, RS485 Modbus."],
         ["Sıcaklık Kontrol Cihazları","NT-TCS 377-X / NT-TC 4 / NT-TC 38. Tüm termokupl tipleri, PT100, PTC ve NTC girişi. ON/OFF veya zaman oransal (P) çalışma, ısıtma/soğutma fonksiyonu, alarm çıkışı ve gecikme zamanı tanımlanabilir."],
         ["Adım Kontrol Cihazları","NT-PRFC7. 72×72 mm. Adım/profil kontrol cihazı; endüstride sıcaklık veya herhangi bir proses değerinin ölçülmesi ve kontrol edilmesi için tasarlanmıştır. 20 adıma kadar profil."]
       ],
       specs:[["Doğruluk","%0,3 – %0,5"],["Kontrol Çıkışı","Röle çıkışı (8 A@250 VAC)"],["Analog Çıkış","4…20 mA, 0…20 mA"],["Haberleşme","RS485 Modbus RTU/ASCII"],["Çözünürlük","1 °C / 0,1 °C (PT100, 0…100 °C aralığı için)"],["Besleme Gerilimi","220 VAC, 24 VDC, 12 VDC (siparişte belirtilmelidir)"]],
       uses:"Sıcaklık ve proses değeri kontrolü, ısıtma-soğutma otomasyonu.",
       sectors:"Fırın ve ısıl işlem tesisleri, gıda, plastik, kimya, makine imalatı."},

      {code:"NT-UT / NT-LT / NT-TT", img:"assets/products/NT-UT.webp", name:"Sinyal Dönüştürücüler", glyph:"converter",
       desc:"Analog ve dijital sinyal çıkışlarının, farklı giriş seçeneği bulunan sistemlere çevrilmesi ve taşınması amacıyla tasarlanmış cihazlardır. Kolay montajlı olması ve dış etkenlere karşı izole edilmiş olması bu tip çevirici cihazlarda doğru uygulama için önemlidir.",
       variants:[
         ["Ray Tipi Üniversal Sinyal Dönüştürücüler","NT-UT 17 / 18. Tüm termokupl ve rezistans termo elemanlar, 0/4–20 mA akım ve 0–50 mV gerilim girişlerini 0/4–20 mA ve 0/2–10 V gerilim çıkışlarına dönüştürür. Tek ve çift kanal seçenekleri; 1500 V 3 yollu galvanik izolasyon."],
         ["Kafa İçi Sinyal Dönüştürücüler","NT-LT / NT-TT Serisi. B, E, J, K, L, N, R, S, T, U tiplerinde termokupllar, PT100 rezistans termo elemanlar ve direnç çıkışı üreten seviye sensörlerinde 4–20 / 20–4 mA çıkışları elde etmek amacıyla tasarlanmıştır. Buat veya yuva içi montaja uygundur."]
       ],
       specs:[["Besleme Gerilimi","8 – 36 VDC"],["Üniversal Analog Giriş","Termokupl B,E,J,K,L,N,R,S,T,U; PT100; akım 0/4–20 mA; gerilim 0–50 mV"],["Giriş Çözünürlüğü","16 bit"],["Örnekleme Periyodu","100 – 400 ms"],["Analog Çıkış","0/4–20 mA, 0/2–10 V, 20–4 mA"],["Yük Direnci","Akım RL ≤ 600 Ω, gerilim RL ≥ 1 MΩ"],["Doğruluk","PT100 ±%0,2 MV ±0,3 °C; T/C, mV ±%0,2 MV ±1 °C"],["Isıl Sürüklenme","±100 ppm/°C"],["Galvanik İzolasyon","1500 V"],["Hafıza","100 yıl, 100.000 yenileme"],["Tepki Süresi","0,2 … 120 s"],["Çalışma Sıcaklığı","−40…+85 °C"]],
       uses:"Sinyal seviyesi ve tipi dönüşümü, uzun mesafe sinyal taşıma, galvanik izolasyon.",
       sectors:"Tüm endüstriyel otomasyon uygulamaları."},

      {code:"NT-MLC", img:"assets/products/NT-MLC.webp", name:"Manyetik Lineer Enkoder", glyph:"angle",
       desc:"Yağ, nem ve toza karşı çift conta korumalı, yataklı kapalı profil sisteme sahip kompakt manyetik lineer enkoder. Artımlı veya mutlak konum sinyali, sızdırmaz alüminyum profil içindeki manyetik skaladan okunarak üretilir.",
       variants:[["MLC 310 Serisi","Kompakt yataklı kapalı profil, 20 m'ye kadar ölçüm uzunluğu. SSI, analog ve artımlı çıkış seçenekleri. IP67 koruma ile 5 µm çözünürlük."]],
       specs:[["Ölçüm Uzunluğu","20 m'ye kadar"],["Çözünürlük","5 µm"],["Çıkış","SSI, 4–20 mA, 0–10 V, artımlı"],["Koruma","IP67"],["Çalışma Sıcaklığı","−20…+85 °C"],["Profil","Yataklı sızdırmaz alüminyum"]],
       uses:"CNC tezgah eksen konumlama, pres strok ölçümü, paketleme makineleri.",
       sectors:"Tezgahlar, presler, paketleme, kauçuk ve plastik makineleri."},

      {code:"NT-MLS-E", img:"assets/products/NT-MLS-E.webp", name:"Manyetik Okuyucu Sensör", glyph:"angle",
       desc:"Ayrı monte edilen manyetik bant üzerinde çalışan temassız manyetik okuyucu sensör. Entegre bant sıyırıcıları ile çevresel koruma sağlar ve çok uzun mesafelerde hassas konum ölçümü yapar.",
       variants:[["MLS 130 Serisi","Entegre bant sıyırıcılı okuyucu kafa, 100 m'ye kadar ölçüm uzunluğu. SSI, analog ve artımlı çıkışlar. 5 µm çözünürlük, IP67 koruma."]],
       specs:[["Ölçüm Uzunluğu","100 m'ye kadar"],["Çözünürlük","5 µm"],["Çıkış","SSI, 4–20 mA, 0–10 V, artımlı"],["Koruma","IP67"],["Çalışma Sıcaklığı","−20…+85 °C"],["Bant","Yapışkanlı manyetik bant"]],
       uses:"Uzun strok konumlama, vinç ve portal yürüyüş ölçümü, depolama sistemleri.",
       sectors:"Lojistik, vinçler, AGV, demir çelik, ahşap işleme."},

      {code:"NT-PLC", img:"assets/products/NT-PLC.webp", name:"Potansiyometrik Lineer Cetvel", glyph:"angle",
       desc:"Tezgahlar, hidrolik silindirler, enjeksiyon kalıpları ve endüstriyel aktüatörlerde strok ölçümü için analog potansiyometrik lineer pozisyon sensörü. Şaftlı ve şaftsız konfigürasyonlarda mevcuttur.",
       variants:[["TLH Serisi","Şaftsız üstten montaj tasarım, 25–3000 mm strok aralığı, ±%0,01 doğrusallık, IP65 koruma."],["LWH Serisi","Yüksek hızlı ölçüm için bilye uçlu şaft tasarım, 50–1250 mm strok aralığı."],["LWG Serisi","Açılı montaj için mafsallı tasarım, 50–900 mm strok aralığı."]],
       specs:[["Strok Aralığı","25 – 3000 mm"],["Doğrusallık","±%0,01"],["Çıkış","0–10 V, 4–20 mA"],["Koruma","IP65"],["Çalışma Sıcaklığı","−30…+100 °C"],["Ömür","50 × 10⁶ strok"]],
       uses:"Hidrolik silindir pozisyonu, pres stroku, enjeksiyon kalıp kapanma mesafesi.",
       sectors:"Hidrolik, presler, enjeksiyon kalıp, paketleme, test."},

      {code:"NT-MSC", img:"assets/products/NT-MSC.webp", name:"Manyetostriktif Lineer Cetvel", glyph:"angle",
       desc:"Hidrolik silindir içi montaj ve harici strok ölçümü için temassız manyetostriktif lineer pozisyon sensörü. Algılama prensibi mükemmel uzun vadeli kararlılık ve titreşim bağışıklığı sağlar.",
       variants:[["TP1 Serisi","Konumsal mıknatıslı harici montaj, 50–5000 mm strok aralığı, 1 µm çözünürlük, 350 bar basınç dayanımı."],["TH1 Serisi","Hidrolik silindirler için silindir içi montaj, piston mıknatısı ile doğrudan entegrasyon."]],
       specs:[["Strok Aralığı","50 – 5000 mm"],["Çözünürlük","1 µm"],["Basınç Dayanımı","350 bar'a kadar"],["Çıkış","SSI, 4–20 mA, 0–10 V"],["Koruma","IP67 / IP68"],["Çalışma Sıcaklığı","−40…+100 °C"]],
       uses:"Hidrolik silindir pozisyonu, pres ve kalıp yastığı kontrolü, servo-hidrolik.",
       sectors:"Hidrolik, demir çelik, presler, enerji, mobil makine."},

      {code:"NT-OLC", img:"assets/products/NT-OLC.webp", name:"Optik Lineer Enkoder", glyph:"angle",
       desc:"Yüksek hassasiyetli CNC tezgahlar, koordinat ölçüm makineleri ve yarıiletken ekipmanları için yataklı optik lineer enkoder. Cam skala teknolojisi mikron altı çözünürlük sağlar.",
       specs:[["Ölçüm Uzunluğu","3000 mm'ye kadar"],["Çözünürlük","1 µm (opsiyonel 0,1 µm)"],["Çıkış","RS422 / TTL artımlı, opsiyonel SSI mutlak"],["Koruma","IP53"],["Doğruluk","±3 µm / m"],["Çalışma Sıcaklığı","+10…+50 °C"]],
       uses:"CNC işleme merkezleri, EDM, taşlama tezgahları, koordinat ölçüm makineleri.",
       sectors:"Tezgahlar, hassas üretim, yarıiletken, metroloji."},

      {code:"NT-INS", img:"assets/products/NT-INS.webp", name:"Eğim Sensörü (İnklinometre)", glyph:"angle",
       desc:"Eğim ve meyil ölçümü için MEMS tabanlı inklinometre. Platform tesviyesi, iş makineleri, güneş takip sistemleri ve yapısal sağlık izleme için güvenilir açı verileri sağlar.",
       variants:[["INS 130 Serisi","Tek veya çift eksen, ±10° ile ±90° aralık, 0,01° çözünürlük, IP67, 4–20 mA ve CANopen çıkışlar. ±0,15° hassasiyet."],["INS 120 Serisi","OEM entegrasyonu için voltaj çıkışlı kompakt versiyon. ±15° ile ±60° aralık, ±0,15° hassasiyet."],["INS 110 Serisi","OEM kompakt versiyon. ±0,15° hassasiyet, düşük güç tüketimi."],["INC 210 Serisi","Yapısal izleme için dijital çıkışlı yüksek hassasiyetli inklinometre. ±0,10° hassasiyet."],["INC 110 Serisi","Tek veya çift eksen konfigürasyonu, kompakt yapı. Yapısal sağlık izleme ve platform tesviyesi."]],
       specs:[["Aralık","±10° … ±90°"],["Çözünürlük","0,01°"],["Doğruluk","±0,1° (standart), ±0,005° (hassas)"],["Çıkış","4–20 mA, 0–10 V, CANopen, Modbus"],["Koruma","IP67"],["Çalışma Sıcaklığı","−40…+85 °C"]],
       uses:"Mobil makine eğim izleme, güneş takip konumlama, platform tesviyesi, yapısal izleme.",
       sectors:"İnşaat, yenilenebilir enerji, denizcilik, madencilik, endüstriyel otomasyon."},

      {code:"NT-AGS", img:"assets/products/NT-RCS-3100-2100.png", name:"Açı Sensörleri", glyph:"angle",
       desc:"Temassız manyetik prensiple çalışan rotary açı sensörleri; endüstriyel uygulamalarda dönüş açısını hassas şekilde ölçmek için tasarlanmıştır. Mekanik aşınma olmadan uzun ömürlü, güvenilir konum ve açı verisi sağlar. Kaplinli, milsiz ve entegre milli modelleri ile farklı montaj ihtiyaçlarına uyum sağlar.",
       variants:[
         ["RCS 3100 Serisi","Temassız manyetik prensip, kaplin bağlantılı. Endüstriyel konumlama ve servo sistemlerde kullanılır."],
         ["RFC 4800 Serisi","Temassız, milsiz tasarım. Kaplin gerektirmez; kompakt montaj imkânı sunar."],
         ["RSC 2800 Serisi","Entegre 6 mm mil, temassız ölçüm. Kompakt yapısıyla doğrudan tahrik bağlantısı sağlar."],
         ["RCS 2100 Serisi","Tam temassız manyetik ölçüm prensibi. Yüksek hassasiyetli açı tespiti."],
         ["SAS-T Serisi","40 mm gövde, mutlak ölçüm, CANopen çıkışlı rotary açı sensörü. Otomasyon ve servo sistemler için idealdir."]
       ],
       specs:[["Ölçüm Prensibi","Temassız manyetik"],["Ölçüm Aralığı","0–360°"],["Çözünürlük","12–14 bit"],["Doğruluk","±0,1° … ±0,5°"],["Çıkış","4–20 mA, 0–10 V, SSI, CANopen"],["Koruma Sınıfı","IP65 / IP67"],["Çalışma Sıcaklığı","−40…+85 °C"],["Besleme","10–30 VDC"]],
       uses:"Vana pozisyon geri bildirimi, robot kol açı ölçümü, anten yönlendirme, rüzgâr türbini yaw kontrolü.",
       sectors:"Otomasyon, robotik, yenilenebilir enerji, denizcilik, paketleme, iş makineleri."},

      {code:"NT-TMR", img:"assets/products/NT-TMR.webp", name:"Timer / Kronometre", glyph:"panel",
       desc:"Tek cihazda çoklu zamanlama modları sunan panel tipi dijital timer ve kronometre. Ön panelden programlanabilir, endüstriyel zamanlama, sıralama ve parti kontrolü için çift röle çıkışlı.",
       variants:[["TCS9 Serisi","72×72 mm panel montaj, çift 6 haneli gösterge, çoklu zamanlama modları, 2× röle çıkış, RS485 opsiyonu."],["TCS4 Serisi","48×48 mm kompakt panel montaj, aynı zamanlama fonksiyonları daha küçük form faktöründe."],["TCS37 Serisi","DIN 72×36 mm format, temel zamanlama modlarıyla ekonomik timer."]],
       specs:[["Panel Boyutu","48×48 / 72×72 / 72×36 mm"],["Gösterge","2 × 6 hane (kırmızı LED)"],["Zamanlama Aralığı","0,01 s – 9999 saat"],["Çıkış","2× röle (SPDT), opsiyonel transistör"],["Besleme","100–240 VAC veya 12–24 VDC"],["Doğruluk","±%0,05"]],
       uses:"Parti zamanlama, makine sıralama, pompa çalışma süresi, proses gecikme kontrolü.",
       sectors:"Paketleme, gıda işleme, su arıtma, genel üretim."},

      {code:"NT-STC", img:"assets/products/NT-STC.webp", name:"Adım Kontrol Cihazı (Profil Kontrol)", glyph:"controller",
       desc:"Rampa/tutma sıcaklık programları, fırın pişirme eğrileri ve ısıl işlem çevrimleri için adım (profil) kontrol cihazı. Termokupl ve PT100 girişli, röle ve analog çıkışlı programlanabilir çok adımlı profiller.",
       specs:[["Panel Boyutu","72×72 mm"],["Giriş","TC (J, K, R, S, T), PT100, 4–20 mA"],["Gösterge","2 × 4 hane (kırmızı LED)"],["Adım","7 rampa/tutma adımına kadar"],["Çıkış","2× röle + 4–20 mA analog"],["Doğruluk","±%0,5"],["Besleme","100–240 VAC"]],
       uses:"Fırın pişirme eğrileri, ısıl işlem rampa/tutma, ocak sıcaklık profilleme.",
       sectors:"Seramik, cam, metalürji, laboratuvarlar, ısıl işlem tesisleri."}
     ]},

    /* ===================== MEKANİK KONTROL ===================== */
    {id:"mekanik", kicker:"07", title:"Mekanik Kontrol", sub:"Aktüatörler, valfler ve vanalar", glyph:"valve",
     products:[
      {code:"NT-VT / NT-ATG / NT-KE100", img:"assets/products/NT-ACT.webp", name:"Aktüatörler", glyph:"actuator",
       desc:"Bir sistemin veya mekanizmanın açma-kapama işlemini yapabilmesini sağlayan tahrik elemanlarıdır. Kullanım ve uygulama alanlarına göre farklı tipler mevcuttur. Genellikle hidrolik, pnömatik ve elektrik akımı ile bu kontrolü kumanda ederler.",
       variants:[
         ["Pnömatik Aktüatör (NT-VT)","Alüminyum gövde ve piston, alaşımlı çelik mil, Namur solenoid valf bağlantısı, 5–8 bar besleme basıncı, ISO 5211 vana bağlantısı, 90° ±5° dönüş açısı."],
         ["Pnömatik Aktüatör (NT-ATG)","Alüminyum gövde ve piston, Namur switch kutusu bağlantısı, ISO 5211 vana bağlantısı, 180° dönüş açısı."],
         ["Elektrikli Aktüatör (NT-KE100)","Çeyrek turlu elektrik aktüatör; alüminyum gövde (polyester boya kaplı), ISO 5211 bağlantı, IP67 koruma, 220 VAC besleme, −20…+70 °C ortam, 20–500 Nm tork, standart 2 adet sınır anahtarı, F sınıfı motor."]
       ],
       specs:[["Gövde ve Piston","Alüminyum"],["Çalışma Sıcaklığı","−20…+80 °C"],["Mil Materyali","Alaşımlı çelik"],["Besleme Basıncı","5 – 8 bar (pnömatik)"],["Vana Bağlantısı","ISO 5211"],["Koruma Sınıfı","IP67 (elektrikli)"],["Tork Değerleri","20 – 500 Nm"]],
       uses:"Vana ve kelebek vana tahriki, otomatik hat kontrolü.",
       sectors:"Arıtma tesisleri, kimya ve petrokimya, gıda sanayi, enerji tesisleri."},

      {code:"NT-1901 / NT-7901 / NT-PV250", img:"assets/products/NT-VLV-MAIN.webp", name:"Valfler", glyph:"solenoid",
       desc:"Bir ya da daha fazla orifis açıp kapatarak, akışkanın yolunu açıp kapayan ya da değiştiren elektrik veya pnömatik kontrollü mekanik devre elemanlarıdır.",
       variants:[
         ["Pirinç Gövdeli Solenoid Valf (NT-1901)","Pirinç gövde, NK-NA pozisyon, 1/8\"…2\" ölçü (ops. hortum bağlantısı), NBR/EPDM/HNBR/Viton/Teflon/Rubin/POM diyafram, 12-24 VAC/DC … 220 VAC bobin. Pilot kumandalı, direkt etkili, diyafram kumandalı çalışma şekilleri."],
         ["Paslanmaz Gövdeli Solenoid Valf (NT-7901)","Paslanmaz çelik gövde, NK-NA pozisyon, 1/8\"…1\" ölçü, Viton/NBR/Teflon diyafram, 12-24 VAC/DC … 220 VAC bobin."],
         ["Patlaç Valf (NT-PV250)","Alüminyum gövde, NK pozisyon, 3/4\"'den 4\"'e kadar dişli, flanşlı veya rakor bağlantı, silikon/kauçuk diyafram, 12 VAC/DC … 220 VAC bobin."]
       ],
       specs:[["Gövde Materyali","Pirinç / paslanmaz çelik / alüminyum"],["Pozisyon","NK – NA"],["Ölçü","1/8\" … 4\""],["Diyafram / Conta","NBR, EPDM, HNBR, Viton, Teflon, silikon, kauçuk"],["Bobin","12, 24 VAC/DC … 220 VAC"]],
       uses:"Sıvı ve gaz hatlarında açma-kapama, filtre temizleme (patlaç), dozaj kontrolü.",
       sectors:"Su ve arıtma, çimento ve toz toplama tesisleri, gıda sanayi, makine imalatı."},

      {code:"NT-VLV", img:"assets/products/NT-VANA.webp", name:"Vanalar", glyph:"valve",
       desc:"Redüktör, kol kumandası veya aktüatör ile tahrik edilen; on-off veya oransal çalışabilen, farklı normlardaki akışkanların akışını ayarlamaya, durdurmaya veya akış yönünü değiştirmeye yarayan mekanik kontrol ürünleridir. Küresel, kelebek, glob, bıçaklı, plug vb. farklı tipler mevcut olup proseste var olan basınç, sıcaklık, akışkan cinsi, yoğunluk ve viskozite gibi özelliklere göre farklı tipler tercih edilebilir.",
       variants:[
         ["Wafer Kelebek Vana","Sfero döküm gövde, wafer bağlantı, opsiyonlu basınç sınıfı, pnömatik ve elektrik aktüatör uyumu."],
         ["Küresel Vana","Paslanmaz veya pirinç gövde, dişli/flanşlı/wafer bağlantı, PN10 (ops. PN63), maks. 180 °C, pnömatik ve elektrik aktüatör uyumu."],
         ["3 Yollu Vana","Paslanmaz veya pirinç gövde, dişli bağlantı, L veya T tip, PN63, maks. 180 °C."],
         ["PVC Küresel Vana","PVC gövde, tam geçişli, PN10, maks. 60 °C, pnömatik ve elektrik aktüatör uyumu."],
         ["Pinch Vana","Alüminyum döküm gövde, dişli ve flanşlı bağlantı, Namur standardına uyumlu."],
         ["Zaman Ayarlı Vana","Paslanmaz, pirinç veya PVC gövde, PN10 / 90 °C, 2 veya 3 yollu, on-off veya oransal, zaman kontrollü modeller."]
       ],
       specs:[["Gövde Materyali","Sfero döküm, paslanmaz çelik, pirinç, PVC, alüminyum döküm"],["Bağlantı","Wafer, dişli, flanşlı"],["Basınç Sınıfı","PN10 … PN63"],["Maks. Sıcaklık","60 °C … 180 °C"],["Aktüatör Uyumu","Pnömatik ve elektrik"]],
       uses:"Hat açma-kapama, akış yönlendirme ve oransal debi kontrolü.",
       sectors:"Su ve atık su, kimya ve petrokimya, gıda sanayi, enerji tesisleri, madencilik."},

      {code:"NT-SOL-L", img:"assets/products/NT-SOL-L.webp", name:"Büyük Ölçü Solenoid Vana", glyph:"solenoid",
       desc:"Su, sulama, yangın söndürme ve endüstriyel açma/kapama kontrolü için büyük çaplı solenoid vana (DN50–DN200). Pirinç veya döküm demir gövdeli pilot kumandalı.",
       specs:[["Ölçü","DN50 – DN200"],["Gövde Malzemesi","Pirinç / döküm demir"],["Pozisyon","NK (normalde kapalı)"],["Bobin","24 VAC/DC – 220 VAC"],["Maks. Basınç","10 bar"],["Sıcaklık","−10…+80 °C"]],
       uses:"Su dağıtımı, sulama sistemleri, yangın söndürme hatları, büyük çaplı açma/kapama kontrolü.",
       sectors:"Tarım, yangın koruması, su idareleri, endüstriyel tesisler."},

      {code:"NT-BDV", img:"assets/products/NT-BDV.webp", name:"Patlaç Valf", glyph:"solenoid",
       desc:"Torba filtre toz toplayıcıları için darbe jet valf (patlaç valf). Filtre torbalarını temizlemek için kısa, yüksek enerjili hava darbesi verir. Alüminyum gövde, silikon veya kauçuk diyafram.",
       specs:[["Ölçü","1\" – 4\" (dişli, flanşlı veya rekor)"],["Gövde Malzemesi","Alüminyum"],["Diyafram","Silikon / kauçuk"],["Çalışma Basıncı","0,2 – 0,6 MPa"],["Bobin","DC 24V (standart)"],["Tepki Süresi","< 5 ms"]],
       uses:"Toz toplama sistemlerinde torba filtre temizleme.",
       sectors:"Çimento fabrikaları, madencilik, toz işleme, demir çelik, gıda işleme."}
     ]},

    /* ===================== EL TİPİ + OTOMASYON ===================== */
    {id:"eltipi", kicker:"08", title:"El Tipi Ölçüm Cihazları ve Kayıt", sub:"Saha ölçümü, analiz ve veri kaydı", glyph:"handheld",
     products:[
      {code:"NT-IRT", img:"assets/products/NT-IRT.webp", name:"Lazerli Sıcaklık Ölçer", glyph:"laser",
       desc:"Temassız (kızılötesi) algılama yapan sıcaklık ölçerdir. −60…+2000 °C sıcaklık aralıklarında veri okuması sağlayabilen modeller mevcuttur; el tipi, kolay kullanımlı ve ergonomik ürünlerdir.",
       specs:[["Ölçüm Aralığı","−60 … +2000 °C (modele göre)"],["Ölçüm Tipi","Temassız kızılötesi"],["Kullanım","El tipi, ergonomik"]],
       uses:"Makine yüzey sıcaklığı, elektrik panosu kontrolü, gıda güvenliği denetimi.",
       sectors:"Bakım-onarım, gıda, enerji, ağır sanayi."},

      {code:"NT-ANM", img:"assets/products/NT-ANM.webp", name:"Anemometre", glyph:"anemo",
       desc:"Açık sahalarda veya hava akışının geliştiği tünellerde rüzgâr/hava hızı ölçümlemesi yapan kolay kullanımlı cihazlardır. Bu tip cihazların birçok modelinde sıcaklık ve nem değerleri ölçümü de yapılır.",
       specs:[["Ölçüm","Hava/rüzgâr hızı, sıcaklık, nem"],["Kullanım","El tipi"]],
       uses:"Havalandırma kanalı ölçümü, tünel ve maden havalandırması, HVAC devreye alma.",
       sectors:"İklimlendirme, madencilik, inşaat, enerji."},

      {code:"NT-SLM", img:"assets/products/NT-SLM.png", name:"Ses (Desibel) Ölçer", glyph:"sound",
       desc:"Ses şiddetinin ölçümlenmesi ve tespit edilmesi için geliştirilmiş el tipi kompakt cihazlardır. Isı, nem ve ışık gibi farklı ölçüm parametreleriyle bir araya getirilmiş farklı modeller mevcuttur.",
       specs:[["Ölçüm","Ses şiddeti (dB), ops. ısı-nem-ışık"],["Kullanım","El tipi kompakt"]],
       uses:"İş sağlığı ve güvenliği ölçümleri, çevresel gürültü denetimi.",
       sectors:"İSG, belediye ve kamu, endüstriyel tesisler."},

      {code:"NT-GLD", img:"assets/products/NT-GLD.png", name:"Gaz Kaçak Dedektörü", glyph:"gasdetect",
       desc:"Sızıntısı ile insan sağlığını tehlikeye atabilecek karbonmonoksit, amonyak, metan, propan gibi gazların kaçak tespitini sağlayabilen cihazlardır. Ses ve ışıkla, belirtilen seviyenin üstüne çıkması durumunda alarm verebilir.",
       specs:[["Algılanan Gazlar","CO, amonyak, metan, propan vb."],["Alarm","Sesli ve ışıklı"],["Kullanım","El tipi"]],
       uses:"Gaz hattı kaçak kontrolü, kapalı alan güvenliği, bakım denetimi.",
       sectors:"Doğalgaz, petrokimya, soğutma tesisleri, bina yönetimi."},

      {code:"NT-AQM", img:"assets/products/NT-AQM.webp", name:"pH, EC, TDS ve Klor Ölçerler", glyph:"analytic",
       desc:"pH, iletkenlik, tuzluluk, çözünmüş oksijen, klor vb. analitik ölçümlemeler için geliştirilmiş cihazlardır. El tipi, laboratuvar tipi ve online (sürekli) ölçüm için tasarlanmış modeller mevcuttur. Bazı modellerinde kontrol ve izleme amaçlı analog veya dijital sinyal çıkışlı seçenekler bulunur.",
       specs:[["Ölçüm Parametreleri","pH, EC, TDS, tuzluluk, çözünmüş oksijen, klor"],["Model Tipleri","El tipi, laboratuvar tipi, online"],["Çıkış","Ops. analog veya dijital sinyal"]],
       uses:"Su arıtma proses kontrolü, havuz ve içme suyu denetimi, laboratuvar analizi.",
       sectors:"Su ve atık su arıtma, gıda sanayi, kimya, belediye ve kamu."},

      {code:"NT-TAO", img:"assets/products/NT-TAO.png", name:"Tarla Alan Ölçer", glyph:"gps",
       desc:"GPS sinyalleri sayesinde alan metrekare ölçümü yapabilen, pratik ve yüksek hassasiyetli üründür. Türkçe menüsü ve kullanıcı dostu ara yüzü ile tek butonla ölçüm alabilmenize olanak sağlar.",
       specs:[["Ölçüm","GPS tabanlı alan (m², dekar)"],["Arayüz","Türkçe menü, tek buton ölçüm"]],
       uses:"Tarla ve arazi alan hesabı, tarımsal planlama.",
       sectors:"Tarım, arazi yönetimi, kadastro uygulamaları."},

      {code:"NT-CO2", img:"assets/products/NT-CO2.webp", name:"CO₂ / Sıcaklık / Nem Transmitteri", glyph:"humidity",
       desc:"İç hava kalitesi izleme için NDIR CO₂ transmitteri. Entegre sıcaklık ve nem sensörleri ile seralar, soğuk hava depoları, ofisler ve endüstriyel havalandırma sistemleri için tasarlanmıştır.",
       specs:[["CO₂ Aralığı","0 – 5000 ppm"],["CO₂ Doğruluğu","±30 ppm + okumanın %3'ü"],["Sensör","NDIR (dağılımsız kızılötesi)"],["Sıcaklık","−40…+60 °C"],["Nem","0–100 %rH"],["Çıkış","4–20 mA, RS485 Modbus"],["Koruma","IP65"],["Besleme","24 VDC"]],
       uses:"Sera CO₂ kontrolü, soğuk hava deposu izleme, ofis hava kalitesi, HVAC talep havalandırma.",
       sectors:"Tarım, gıda depolama, bina otomasyonu, laboratuvarlar."},

      {code:"NT-GDC", img:"assets/products/NT-GDC.webp", name:"Katalitik Gaz Dedektörü", glyph:"gasdetect",
       desc:"Tehlikeli alanlarda yanıcı gaz konsantrasyonlarının (0–100% LEL) sürekli izlenmesi için sabit katalitik (pelistör) gaz dedektörü. Ex d IIC T6 sertifikalı, 4–20 mA çıkışlı.",
       specs:[["Algılama","0 – 100% LEL"],["Sensör","Katalitik pelistör"],["Onay","Ex d IIC T6"],["Çıkış","4–20 mA (3 telli)"],["Koruma","IP66"],["Besleme","24 VDC"]],
       uses:"Rafinerilerde, kimya tesislerinde ve kazan dairelerinde yanıcı gaz kaçak izleme.",
       sectors:"Petrol ve gaz, petrokimya, enerji santralleri, madencilik."},

      {code:"NT-GDI", img:"assets/products/NT-GDI.webp", name:"Kızılötesi Gaz Dedektörü", glyph:"gasdetect",
       desc:"Yanıcı gazlar ve CO₂ için sabit kızılötesi (NDIR) gaz dedektörü. Katalitik sensörlerden farklı olarak kızılötesi sensörler zehirlenmeye karşı bağışıktır ve oksijensiz ortamlarda çalışır.",
       specs:[["Algılama","0 – 100% LEL veya 0 – 100% Hacim"],["Sensör","NDIR (kızılötesi)"],["Onay","Ex d IIC T6"],["Çıkış","4–20 mA (3 telli)"],["Koruma","IP66"],["Besleme","24 VDC"]],
       uses:"Kapalı alanlarda ve tehlikeli bölgelerde yanıcı ve CO₂ gaz izleme.",
       sectors:"Petrol ve gaz, petrokimya, tüneller, atıksu, madencilik."},

      {code:"NT-GDE", img:"assets/products/NT-GDE.webp", name:"Elektrokimyasal Gaz Dedektörü", glyph:"gasdetect",
       desc:"Endüstriyel ortamlarda ve kapalı alanlarda toksik gazlar (CO, H₂S, O₂, NH₃, Cl₂, SO₂) için sabit elektrokimyasal gaz dedektörü. Ex d IIC T6 sertifikalı.",
       specs:[["Algılanan Gazlar","CO, H₂S, O₂, NH₃, Cl₂, SO₂ ve diğerleri"],["Sensör","Elektrokimyasal hücre"],["Onay","Ex d IIC T6"],["Çıkış","4–20 mA (3 telli)"],["Koruma","IP66"],["Besleme","24 VDC"]],
       uses:"Kapalı alanlarda, su arıtma tesislerinde ve kimyasal depolarda toksik gaz izleme.",
       sectors:"Su arıtma, kimya, madencilik, petrol ve gaz, gıda işleme."},

      {code:"NT-DLG", img:"assets/products/NT-DLG.webp", name:"Veri Kayıt Cihazları ve Datalogger", glyph:"logger",
       desc:"Tüm termokupl çeşitleri, rezistans termo elemanlar ve tüm üniversal analog giriş tiplerine göre çıkış üreten sensör gruplarının algıladığı verileri hafızasında saklayan; göstergeli modellerinde ekran üzerinden grafiksel veya tablo hâlindeki verileri izleyebilmeye olanak sağlayan cihazlardır. Birçok modelinde bilgisayar üzerinden verilerin incelenebilmesi için haberleşme çıkışları ve izleme yazılımları mevcuttur.",
       variants:[["Veri Kayıt Cihazları","2, 4, 6 … 40 kanal, 320×200 LCD ekran, izole edilmiş üniversal girişler, RS232 haberleşme, 2 GB USB disk ve 1 GB SD kart hafıza, 4–20 mA çıkış ve 24 VDC sensör beslemesi. Kayıt süresi 1 sn – 30 dk arası ayarlanabilir."],["Datalogger","İlaç ve gıda gibi ürünlerin anlık sıcaklık verilerini kaydedebilmek için tasarlanmıştır; genellikle sevkiyat sürecinde ısı değişimleri izlenir. −35…+70 °C, ±0,5 °C hassasiyet, IP67, EN 12830 uyumlu, uluslararası HACCP sertifikalı, 16.000 kayıt kapasitesi, 90 gün çalışma süresi."]],
       specs:[["Kanal Sayısı","2, 4, 6 … 40"],["Ekran","320×200 LCD (kanal sayısına göre değişkenlik gösterir)"],["Giriş","İzole edilmiş üniversal girişler"],["Haberleşme","RS232"],["Hafıza","2 GB USB disk, 1 GB SD kart"],["Tepki Süresi ve Doğruluk","1 sn / ±0,2"],["Çıkış","4–20 mA, 24 VDC sensör besleme"],["Kayıt Süresi","1 sn – 30 dk arası ayarlanabilir"],["Besleme","220 VAC, ops. 24 VDC"]],
       uses:"Proses veri kaydı, soğuk zincir izleme, kalite dokümantasyonu.",
       sectors:"Gıda ve ilaç sanayi, lojistik, ısıl işlem tesisleri, laboratuvarlar."}
     ]},

    /* ===================== ANALİTİK ÖLÇÜM ===================== */
    {id:"analitik", kicker:"09", title:"Analitik Ölçüm", sub:"pH, ORP, iletkenlik elektrotları ve online analizörler", glyph:"analytic",
     products:[
      {code:"NT-PHA", img:"assets/products/NT-PHA.png", name:"pH Elektrotları", glyph:"analytic",
       desc:"Sıvıların asitlik veya baziklik derecesini 0–14 pH skalasında ölçmek için kullanılan cam ve polimer gövdeli elektrotlardır. Cam membran üzerindeki potansiyel farkı prensibine dayanır. Farklı sıcaklık, basınç ve kimyasal dayanım gereksinimlerine göre çeşitli gövde malzemeleri mevcuttur.",
       variants:[
         ["GPE100 Ekonomik Cam pH Elektrodu","80 °C'ye kadar çalışma sıcaklığı. Genel amaçlı pH ölçümü için ekonomik çözüm. Su arıtma, havuz ve temel endüstriyel uygulamalar."],
         ["PH5806 PRO Yüksek Sıcaklık pH Elektrodu","130 °C'ye kadar dayanıklı cam gövdeli profesyonel elektrot. Zorlu endüstriyel prosesler ve yüksek sıcaklık uygulamaları için."],
         ["PH8012P PVC Gövdeli pH Elektrodu","80 °C'ye kadar çalışma. PVC gövde ile dayanıklı ve ekonomik. Standart su ve atık su uygulamaları."],
         ["PH8012F Teflon Gövdeli pH Elektrodu","Agresif kimyasal ortamlara dayanıklı teflon (PTFE) gövde. Asit-baz tankları ve kimya prosesleri için idealdir."]
       ],
       specs:[["Ölçüm Aralığı","0 – 14 pH"],["Doğruluk","±0,02 pH"],["Sıcaklık Dayanımı","80 °C (standart), 130 °C (PRO)"],["Referans","Ag/AgCl"],["Gövde Materyali","Cam, PVC, Teflon (PTFE)"],["Bağlantı","BNC konnektör"],["Kablo Uzunluğu","1 m (standart), özel boylar"]],
       uses:"Su arıtma, havuz suyu kontrolü, kimyasal proses izleme, gıda ve içecek üretimi, laboratuvar analizi.",
       sectors:"Su ve atık su arıtma, kimya sanayi, gıda ve içecek, ilaç, kağıt sanayi, yüzme havuzları."},

      {code:"NT-ORP", img:"assets/products/NT-ORP.png", name:"ORP Elektrodu", glyph:"analytic",
       desc:"Sıvıdaki oksidasyon-redüksiyon potansiyelini (ORP/Redoks) milivolt cinsinden ölçen elektrottur. Dezenfeksiyon süreçlerinin izlenmesi, klor dozajı kontrolü ve su kalitesi değerlendirmesi için kullanılır.",
       specs:[["Ölçüm Aralığı","−2000 … +2000 mV"],["Doğruluk","±1 mV"],["Referans","Ag/AgCl"],["Gövde Materyali","Cam / PVC"],["Bağlantı","BNC konnektör"],["Çalışma Sıcaklığı","0…+80 °C"]],
       uses:"Klorlama ve dezenfeksiyon kontrolü, atık su izleme, yüzme havuzu bakımı, içme suyu kalite kontrolü.",
       sectors:"Su ve atık su arıtma, havuz işletmeleri, gıda sanayi, kimya sanayi."},

      {code:"NT-ECA", img:"assets/products/NT-ECA.png", name:"İletkenlik Elektrodu", glyph:"analytic",
       desc:"Sıvıdaki çözünmüş iyon konsantrasyonunu ölçerek iletkenlik (µS/cm veya mS/cm) değerini tespit eden elektrottur. Saf su üretimi, su arıtma prosesleri ve endüstriyel proses kontrolünde kritik bir parametredir.",
       specs:[["Elektrot Sabiti","1,0"],["Ölçüm Aralığı","0 – 20 mS / 0 – 20.000 µS"],["Gövde Materyali","SS316L / Titanyum Alaşım"],["Çalışma Basıncı","0,3 MPa"],["Çalışma Sıcaklığı","0…+80 °C"],["Bağlantı","BNC / kablo"]],
       uses:"Saf su ve ultra saf su izleme, su arıtma proses kontrolü, endüstriyel yıkama suyu kalite kontrolü.",
       sectors:"Su arıtma, ilaç sanayi, yarıiletken üretimi, enerji santralleri, gıda sanayi."},

      {code:"NT-ANZ", img:"assets/products/NT-ANZ.png", name:"Online Analizörler", glyph:"controller",
       desc:"Sürekli (online) proses izleme için tasarlanmış çok parametreli analizörlerdir. pH, ORP, sıcaklık, iletkenlik, TDS ve tuzluluk gibi su kalite parametrelerini gerçek zamanlı ölçer ve kontrol eder. ABS aleve dayanıklı gövde, renkli ekran ve röle çıkışları ile tam otomatik proses kontrolü sağlar.",
       variants:[
         ["2091PRO Online pH / ORP / Sıcaklık Analizörü","−2…+16 pH, −2000…+2000 mV ORP, −30…+130 °C sıcaklık ölçümü. ±0,05 pH doğruluk. 3 röle çıkış, 4–20 mA analog çıkış, RS485 Modbus. Duvar montajlı ABS gövde."],
         ["2090PRO Online İletkenlik / TDS / Tuzluluk / Sıcaklık Analizörü","0 – 2.000.000 µS/cm iletkenlik, TDS ve tuzluluk ölçümü, −40…+200 °C sıcaklık. %1 doğruluk. 3 röle çıkış, 4–20 mA analog çıkış, RS485 Modbus."]
       ],
       specs:[["Ölçüm (2091PRO)","pH: −2…+16, ORP: −2000…+2000 mV, Sıcaklık: −30…+130 °C"],["Ölçüm (2090PRO)","İletkenlik: 0–2.000.000 µS/cm, TDS, tuzluluk, sıcaklık: −40…+200 °C"],["Doğruluk","±0,05 pH / %1 (iletkenlik) / ±0,2 °C"],["Çıkış","4–20 mA analog, 3× röle (5 A@250 VAC)"],["Haberleşme","RS485 Modbus"],["Koruma Sınıfı","IP65"],["Gövde","ABS aleve dayanıklı (V0)"],["Besleme","220 VAC / 24 VDC"],["Ekran","Renkli LCD"]],
       uses:"Su arıtma tesisi proses kontrolü, içme suyu kalite izleme, havuz otomasyonu, endüstriyel proses izleme.",
       sectors:"Su ve atık su arıtma, enerji santralleri, gıda ve içecek, kimya, ilaç sanayi, havuz işletmeleri."}
     ]}
  ],

  closing:{
    title:"Otomasyon ve Tasarım",
    body:["Net Flow, VFA Elektronik'in 12 yıllık üretim tecrübesini ihracat pazarlarına taşıyan markasıdır. Ölçüm enstrümanı tedarikinin yanında, tesisinizin ihtiyacına göre komple otomasyon çözümleri tasarlar ve devreye alır. Saha enstrümantasyonundan pano imalatına, PLC ve SCADA yazılımından devreye alma ve eğitime kadar süreçlerin tümünü tek elden yürütüyoruz.",
      "Proje sürecinde tüm gücümüz ve yeteneğimizle; doğru ölçüm, güvenilir veri ve sürdürülebilir kontrol hedefiyle çalışıyoruz. Mevcut tesisinizin modernizasyonu veya yeni yatırımınızın enstrümantasyon tasarımı için mühendislik ekibimiz hizmetinizdedir."],
    items:[["Saha Enstrümantasyonu","Debi, seviye, basınç, sıcaklık ve analiz ölçümlerinin proje bazlı seçimi ve tedariki."],["Pano İmalatı","Kumanda ve kontrol panolarının tasarımı, imalatı ve saha montajı."],["PLC ve SCADA","Proses otomasyonu yazılımı, veri izleme ve raporlama sistemleri."],["Devreye Alma","Saha montajı, kalibrasyon, test ve kullanıcı eğitimi."]]
  }
};
