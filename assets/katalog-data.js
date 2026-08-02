/* NET FLOW — E-Katalog verisi (Türkçe, düzeltilmiş)
   Tüm ürün kodları NT- ön ekiyle. */
window.NF_CAT = {
  brand:{name:"Net Flow", domain:"netflw.com", phone:"+90 541 373 79 53", mail:"info@netflw.com",
    tagline:"VFA Elektronik'in ihracat markası", since:"12 yıllık üretim tecrübesi",
    addr:"Fevzıçakmak Mah. Aslım Cad. · Konya · Türkiye"},

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
      {code:"NT-VMF", img:"assets/products/NT-VMF.png", name:"Elektromanyetik Debimetre", glyph:"flow", hero:true,
       vimgs:[["Gıda Tipi","assets/products/NT-VMF-W.png"],["Minyatür Tip","assets/products/NT-VMF-M.png"],["Daldırma Tip","assets/products/NT-VMF-I.png"],["Pilli Tip","assets/products/NT-VMF-BT.png"],["Kısmi Dolu","assets/products/NT-VMF-P.png"],["Sıfır Düz Boru (0D)","assets/products/NT-VMF-0D.png"],["Çamur (Slurry)","assets/products/NT-VMF-S.png"]],
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

      {code:"NT-TRB", img:"assets/kat/p04_6.png", name:"Türbin Debimetre", glyph:"turbine",
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

      {code:"NT-VA / NT-DK800", img:"assets/kat/p05_2.png", name:"Şamandıralı Debimetre", glyph:"rota",
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

      {code:"NT-VTX", img:"assets/kat/p06_2.png", name:"Vorteks Debimetre", glyph:"vortex",
       desc:"Bir engel ile karşılaşan akışkan akıntısının dönerek ve çukurlaşarak yaptığı çevrinti prensibine dayanan akış ölçümüdür. Kısaca gövdede bulunan engelin oluşturduğu burgaç sayesinde oluşan fark basınç değişimine bağlı debi bilgisine ulaşılır.",
       specs:[["Akışkan","Sıvı, gaz, buhar"],["Ölçüm Aralığı","DN15–DN300 (flanş ve sıkıştırmalı), DN100–DN2000 (daldırma tip)"],["Sıcaklık Aralığı","−20…250 °C, ops. 350 °C"],["Maksimum Basınç","16 / 25 / 40 bar"],["Hassasiyet","T.S. ±%0,5 / ±%1,0 / ±%1,5 — Daldırma tip: ±%2,5"],["Reynolds Sayısı","Re > 4000"],["Sinyal ve İletişim Çıkışı","4–20 mA (2 telli), Pulse (3 telli), RS485 Modbus"],["Ortam Sıcaklığı","−25…55 °C"],["Besleme","24 VDC, 3,6 V lityum pil"],["Gövde Materyali","SS304, ops. SS316"]],
       uses:"Solvent ve kimyasallar, petrol ve gaz, soğutucu akışkanlar, buhar üniteleri.",
       sectors:"Kimya sanayi, kağıt sanayi, geri dönüşüm tesisi, petrokimya, enerji, maden, demir çelik, tekstil sanayi.",
       notes:["Zorlu proses koşulları için uygundur.","Debi ölçümü esnasında sıcaklık ve basınç verileri de izlenebilir.","Boru mesafelerinin kısıtlı olduğu alanlarda kullanılabilir.","Sıcaklık ve basınç kompanzasyonu ile gerçek değerler elde edilebilir."]},

      {code:"NT-TUF-2000", img:"assets/kat/p06_5.png", name:"Ultrasonik Debimetre", glyph:"ultra",
       desc:"Kapalı boru içindeki sıvıların hızını, borunun yüzeyine yerleştirilen ses dalgası üreten sensörler yardımıyla, boruya mekanik tahribat yapmadan tespit eden debimetrelerdir. Okuma terminallerinde akış hızının oransal hesaplaması ile %1 hassasiyet oranında debi bilgisine ulaşılabilir.",
       variants:[["NT-TUF-2000H","Portatif tip; çanta, bağlantı kelepçeleri ve metre ile birlikte. Şarj edilebilir pil ile saha ölçümü."],["NT-TUF-2000S/M","Sabit / ray tip; 220 VAC veya 24 VDC besleme, IP68 koruma, RS485 ve 4–20 mA çıkış."]],
       specs:[["Bağlantı Ölçüsü","DN15 … DN6000"],["Ölçüm Aralığı","0,01 … 32 m/s"],["Hassasiyet","%1 O.D."],["Sıcaklık Aralığı","−40…110 °C, ops. 160 °C"],["Gösterge","Aydınlatmalı 4×16 / 2×20 karakter LCD"],["Kablo Boyu","5 metre, ops. 10 metre"],["Haberleşme","RS232 / RS485"],["Sinyal Çıkışı","4–20 mA, röle (sabit tip)"],["Kayıt","2000 veri hafızası"],["Koruma Sınıfı","IP65 / IP68"]],
       uses:"Su, atık su, kimyasallar, asitler, aşındırıcı ve viskoz sıvılar.",
       sectors:"Arıtma tesisleri, petrokimya, hidroelektrik santralleri, gıda sanayi, kağıt sanayi, ilaç sanayi, otomotiv sanayi, belediye ve kamu kurumları.",
       notes:["Boruya hasar vermeden ölçüm sağlar.","3 boy sensörü ile geniş ölçüm aralığı sağlar.","Akışkanın viskozitesi sabit olmalı ve homojen, tam dolu borularda kullanılmalıdır.","Çelik, paslanmaz çelik, dökme demir, PVC, bakır, alüminyum gibi materyallerde ölçüm seçenekleri."]},

      {code:"NT-OCF", img:"assets/kat/p07_2.png", name:"Açık Kanal Debimetre", glyph:"channel",
       desc:"Açık bir kanalda savak veya bent üzerine kurularak, forma girmiş akışkanın temassız (ultrasonik) yöntemle hızı ve derinliğini esas alarak debisini tespit eden debimetrelerdir. 1 mm değişim çözünürlüğü ile yüksek hassasiyet sağlar. Aşırı soğuk uygulamalar için elektrikli ısıtma özelliği bulunur. Parazit izolasyonu sayesinde parazitlerden etkilenmez; anlık ve toplam miktar izlenebilir.",
       specs:[["Ölçüm Aralığı","0 ~ 99999 l/s veya m³/sa"],["Seviye Çözünürlüğü","1 mm"],["Gösterge","14 haneli, iki satırlı arkadan aydınlatmalı LCD"],["Debi Ölçüm Birimi","m³/saat – lt/saniye"],["Çıkış","4–20 mA ve RS485 seri iletişim (Modbus-RTU)"],["Çıkış Alarmları","En fazla 6 adet programlanabilir röle; kümülatif akış için pulse çıkışı"],["Sıcaklık Dayanımı","−40…+70 °C"],["Koruma Sınıfı","IP67 (ana bilgisayar) / IP68 (prob)"],["Besleme","DC 24 V (±%5) 0,2 A / AC 220 V (±%20) 0,1 A"],["Kullanılan Savaklar","Açık savak ve kanallar, Parshall kanallar (ISO), dik açılı üçgen ve dikdörtgen savaklar"],["Prob Ölçüm Aralığı","0,00 ~ 4,00 m (seviye)"],["Prob Malzemesi","ABS / PVC / PTFE"]],
       uses:"Su arıtma, sulama, endüstriyel atık su ve diğer endüstriyel alanlar.",
       sectors:"Savak yapısı mevcut dere ve nehirler, belediye ve kamu kurumları, arıtma ve atık su tesisleri, otel ve turizm işletmeleri, sanayi ve tarımsal sulama.",
       notes:["Savak tipine göre montaj kılavuzunda belirtilen adımlar uygulanmalıdır.","Kullanılan akışkana göre prob seçimine dikkat edilmelidir."]},

      {code:"NT-MTF", img:"assets/kat/p07_4.png", name:"Metal Tüplü Debimetre", glyph:"metaltube",
       desc:"Sıvı, gaz ve buhar ölçümünde kullanılan değişken alanlı debimetre modelidir; manyetik şamandıra hareketine bağlı olarak ölçüm almaktadır. Hidrodinamik etkilere dayanabilen metal tüplü debimetreler çoğunlukla dikey hatlarda kullanılır, fakat özel mekanik tasarımla yatay olarak da kullanılabilir. Hassas birimli göstergesi ve geniş skala oranı sayesinde rahat okumaya elverişlidir.",
       specs:[["Ölçüm Aralığı","Sıvılar 2,5–100000 lt/saat; gazlar 0,07–3000 m³/saat"],["Sıcaklık Dayanımı","−25…+100 °C, ops. yüksek sıcaklık 300 °C"],["Hassasiyet","±%2,5, ops. yüksek hassasiyet ±%1,5"],["Çıkış","Ops. 4–20 mA, kontak, LCD izleme paneli"],["Besleme","24 VDC, 3,6 V lityum pil"],["Maks. Çalışma Basıncı","16 bar"],["Boru Bağlantısı","Flanş, diş, hızlı bağlantı"],["Koruma Sınıfı","IP65, IP67"]],
       uses:"Yüksek sıcaklık ve basınçlı uygulamalar, kimyasal akışkanlar, su uygulamaları, patlayıcı gaz ve sıvılar, aşındırıcı akışkanlar, elektrik bağlantısı gerektirmeyen analog izleme uygulamaları.",
       sectors:"Kimya tesisleri, enerji tesisleri, ağır sanayi, makine sanayi, petrokimya sanayi, kağıt sanayi, gaz dolum tesisleri.",
       notes:["Yüksek sıcaklık ve basınç bilgilerine dikkat edilmelidir.","Skala aralığı tercih edilebilir.","Gıda uygulamaları için hijyenik kelepçe bağlantısı yapılabilir.","Korozif ve patlayıcı akışkanlara göre gövde ve koruma sınıfı seçilebilir."]},

      {code:"NT-OGF", img:"assets/kat/p08_2.png", name:"Oval Dişli Debimetre", glyph:"ovalgear",
       desc:"Senkronize iki oval dişlinin akış hızına bağlı devir yapmasıyla ölçüm yapan debimetrelerdir. Devir hızı akış hızını tayin eder ve kesit hesabıyla anlık ve toplam debi miktarını tespit eder. Yüksek sıcaklık ve viskoziteye sahip akışkanlarda kolay kurulum ve yüksek hassasiyet sağlar. Çok düşük akışlarda kullanılabilir, yüksek çözünürlüklü pulse üretir.",
       specs:[["Bağlantı","DN6 – DN100 mm arası"],["Hassasiyet","±%0,5 (ops.)"],["Maks. Basınç Dayanımı","100 bar"],["Ölçüm Aralığı","0,5 ml/dak – 240 lt/dak"],["Çıkış","Pulse, ops. 4–20 mA"],["Besleme","5 – 24 VDC"]],
       uses:"Endüstriyel yağlar, hidrolik yağlar, düşük veya yüksek viskoziteli kimyasallar, yüksek sıcaklık ve basınçlı sıvılar, sıvı gıda uygulamaları, rafine yağlar.",
       sectors:"Otomotiv endüstrisi, makine endüstrisi, petrokimya ve boya tesisleri, kimya tesisleri, yağ üretim tesisleri, içecek endüstrisi.",
       notes:["Akışkan viskozitesine göre ürün seçilmelidir.","Yüksek sıcaklık ve basınç bilgilerine dikkat edilmelidir.","Partikül içeren akışkanlar filtre edilmelidir.","Aşındırıcı akışkanlar için gövde seçenekleri mevcuttur."]},

      {code:"NT-HGF", img:"assets/kat/p08_4.png", name:"Helisel Dişli Debimetre", glyph:"helical",
       desc:"Helisel (sarmal) debimetreler, viskoz akışkanların debisini tespit etmek için; silindirik muhafaza içine iki adet sikloidal helisel milin yerleştirilmesi, bu millerin iç cidarda kapalı alan oluşturması ve akışkanın hareketinin sadece millerin dönmesine bağlanması ile tasarlanmış ölçüm yöntemidir. Bu yöntem sayesinde minimum sızıntı, kesintisiz akış ve minimum basınç kaybı ile çok yüksek hassasiyet elde edilir.",
       specs:[["Bağlantı","DN6 – DN100"],["Hassasiyet","±%0,5"],["Maks. Basınç Dayanımı","100 bar"],["Ölçüm Aralığı","0,5 ml/dak – 240 lt/dak"],["Çıkış","Pulse, ops. 4–20 mA"],["Besleme","5 – 24 VDC"]],
       uses:"Değişken viskoziteli akışkanlar, parafin ve yapışkan akışkanlar, gıda uygulamaları, kimyasal akışkanlar, gres vb. yağlar.",
       sectors:"Dolum ve dozaj sistemleri, kağıt endüstrisi, ağır sanayi, yalıtım ve kaplama endüstrisi, test üniteleri, parafin endüstrisi, gıda endüstrisi.",
       notes:["Sağlam yapısı ile uzun hizmet ömrü sağlar.","Aşındırıcı akışkanlar için gövde seçenekleri mevcuttur.","Düşük akışlar ve değişken viskoziteli akışkanlar için ideal seçimdir."]},

      {code:"NT-TMF", img:"assets/kat/p09_2.png", name:"Termal Kütlesel Debimetre", glyph:"thermal",
       desc:"Gaz normundaki akışkanlar için termal dağılım (sıcaklık yayılması) temelinde tasarlanmış, sabit diferansiyel sıcaklık yöntemiyle ölçüm yapan debimetrelerdir. Ölçüm probu üzerinde enerji ile ısı oluşur; gaz geçişinin soğutma etkisi olmaması için enerji oranı artar ve bu oran kütlesel akış hızı ile doğru orantılıdır. Buradan anlık ve toplam debi miktarı tespit edilir.",
       specs:[["Bağlantı Ölçüleri","DN80–DN4000 (ekleme), DN10–DN2000 (boru)"],["Hız","0,5 ~ 100 Nm/s (20 °C, 101,33 kPa)"],["Hassasiyet","±%2,5 (ekleme) / ±%1 (boru)"],["Çalışma Sıcaklığı","−40…+220 °C (sensör), −20…+45 °C (verici)"],["Maks. Basınç","Ekleme ≤2,5 MPa, boru ≤4,0 MPa"],["Çıkış","4–20 mA (optoelektronik izolasyon, maks. yük 500 Ω)"],["Alarm Çıkışı","1–2 hat röle, normalde açık, 10 A / 220 VAC veya 5 A / 30 VDC"],["Haberleşme","RS485 (optoelektronik izolasyon), HART"],["Koruma Sınıfı","IP65"]],
       uses:"Kuru hava ve gazlar (propan, nitrojen, oksijen, hidrojen vb.).",
       sectors:"Enerji ve ısı tesisleri, doğalgaz santralleri, kimya endüstrisi, makine endüstrisi.",
       notes:["Cihaz ayrıca gaz kaçağı tespiti için de kullanılabilir.","Yüksek titreşim direncine sahiptir."]},

      {code:"NT-CMF", img:"assets/kat/p09_4.png", name:"Coriolis Kütlesel Debimetre", glyph:"coriolis",
       desc:"Özel olarak tasarlanan akış tüpünün giriş ve çıkışlarında bulunan sensörler ile akış yokken sensörlerden gelen sinyaller aynı fazdadır. Akış geçmeye başladığı anda oluşan titreşim ile sinyaller arasında faz farkı oluşur; bu fark tüplerin içinden geçen kütlesel akış ile doğru orantılıdır. Tüplerin üzerine yerleştirilen ısı sensörü ile akış kompanze edilir; ayrıca bu ürünler akışkan yoğunluğunu da tespit edebilir.",
       specs:[["Hassasiyet","±%0,2, ops. ±%0,1"],["Yoğunluk Ölçüm Aralığı","0,3–3000 g/cm³ (hassasiyet ±0,002 g/cm³)"],["Sıcaklık Dayanımı","−50…+200 °C, ops. −200…+300 °C (hassasiyet ±1 °C)"],["Çıkış","4–20 mA, ops. akış hızı / yoğunluk / sıcaklık sinyali"],["Haberleşme","RS485, Modbus protokolü"],["Koruma ve Basınç Dayanımı","IP67 – 4,0 MPa"]],
       uses:"Tüm sıvı ve gaz uygulamaları; ağırlıklı olarak petrol türevleri, kimyasal endüstri, medikal endüstri, ısı santralleri.",
       sectors:"Kimya tesisleri, petrokimya ve akaryakıt endüstrisi, enerji tesisleri, kağıt sanayi, tekstil sanayi, soğutma endüstrisi, makine endüstrisi, ilaç sanayi.",
       notes:["Kütlesel akış, yoğunluk ve sıcaklık ölçümünü bir arada sağlar.","Yatay ve dikey montaj kolaylığı sağlar.","Giriş ve çıkışlar için düz boru mesafesi gerektirmez.","Akışkanın fiziksel özelliklerinden bağımsız ölçüm sağlar."]},

      {code:"NT-CTG", img:"assets/kat/p10_2.png", name:"Kompakt Termal Gaz Debimetre", glyph:"thermal",
       desc:"Ekonomik termal dağılım temelinde tasarlanmış ve gaz akışını ölçmek için sabit diferansiyel sıcaklık yöntemini benimsemiştir. Küçük boyut, kolay kurulum, yüksek güvenilirlik ve yüksek doğruluk gibi avantajları vardır.",
       specs:[["Bağlantı Ölçüleri","DN8 – DN300"],["Hassasiyet","±%1,5 okuma değeri + %0,3 tam ölçek"],["Ölçülebilen Gazlar","N₂, Ar, O₂, CO₂ vb. proses gazları"],["Çalışma Sıcaklığı","−30…+230 °C / bağıl nem <%90"],["Maks. Basınç","5,0 MPa"],["Çıkış","4–20 mA ve Pulse çıkışı, Modbus, M-Bus haberleşme"],["Alarm Çıkışı","1–2 hat röle, normalde açık, 10 A / 220 VAC veya 5 A / 30 VDC"],["Koruma Sınıfı","IP65"]],
       uses:"Proses gazları, doğalgaz hatları, basınçlı hava sistemleri.",
       sectors:"Enerji tesisleri, kimya endüstrisi, makine endüstrisi, gaz dolum tesisleri.",
       notes:["Tüm gazlara kolay kalibrasyon özelliğine sahiptir.","Uzaktan kontrol, ayar ve kalibrasyon özelliğine sahiptir."]}
     ]},

    /* ===================== AKIŞ SENSÖRLERİ ===================== */
    {id:"akis", kicker:"02", title:"Akış Sensörleri", sub:"Akış varlığının izlenmesi, şalterleme ve gözle kontrol", glyph:"switchflow",
     products:[
      {code:"NT-FSW", img:"assets/kat/p11_2.png", name:"Akış Şalterleri", glyph:"switchflow",
       desc:"Akış şalteri borulardaki akışın hissedilmesi için kullanılmaktadır. Boru içinde sıvıların hareketini algılayarak akışkan olup olmadığının bilgisini verir. Birçok makine imalatçısı tarafından akış kontrolünde ve ısıtma-soğutma sistemlerinde güvenilir tercihlerdir.",
       variants:[
         ["Pedallı Akış Şalterleri","Dilli tip akış şalterleri ve sensörler hatta dikey olarak bağlanır. T gövdeli veya doğrudan dilli modelleriyle kullanımı pratik ve kolaydır; doğrudan röle çıkışlı olması birçok tahrik elemanına doğrudan bağlantı kolaylığı sağlar."],
         ["Termal Akış Şalterleri","Sıvı bazlı akışı izleyen, kalorimetre prensibine göre çalışan akış anahtarlarıdır. Akış hızı kullanıcı tarafından belirlenen limit değerin dışına çıktığında mevcut konumu tersine çevirir; cihaz üzerindeki LED'lerden bilgi alınabilir."]
       ],
       specs:[["Bağlantı Hat Çapları","DN8 – DN200"],["Sıcaklık Dayanımı","+200 °C"],["Basınç Dayanımı","25 bar (termal tip 6,3 MPa)"],["Malzeme","304 SS – PP"],["Sinyal Çıkışı","Reed kontak 26 VA / 20 W; röle, PNP, NPN, 4–20 mA (termal)"],["Besleme","24 V ±%10 DC (termal tip)"],["Ekran","10 × üç renkli LED (akış hızı) + 1 × LED (sıcaklık)"],["Hız Akış Aralığı","4 … 400 cm/s (hassasiyet ±2 … ±8 cm/s)"],["Koruma Sınıfı","IP65 / IP67"]],
       uses:"Şofben, kombi, ısıtıcı gibi cihazlar, soğutma su hatları, enerji tesisleri ve madenler. Patlayıcı ve zorlu prosesler için özel modeller mevcuttur.",
       sectors:"Makine imalatı, ısıtma-soğutma sistemleri, enerji tesisleri, madencilik."},

      {code:"NT-FSG", img:"assets/kat/p11_3.png", name:"Akış Göstergeleri", glyph:"sight",
       desc:"Akış göstergesi, kapalı boru devrelerindeki akışı değişik yönlerden izlemek amacıyla kullanılan bir elemandır. Akış göstergeleri buhar kapanlarından önce ve sonra bağlanarak buhar kaçağının izlenmesinde; gıda, ilaç vb. sanayilerinde akışkanın gözle kontrolünün sağlanmasında kullanılır. Akış göstergelerinde kullanılan camlar özeldir; temperlenmiş sodalime cam olarak da bilinir.",
       specs:[["Bağlantı Hat Çapları","1/4\" – 2\""],["Sıcaklık Dayanımı","−30…+180 °C"],["Çalışma Basıncı","16 bar"],["Malzeme","AISI 304 Paslanmaz Çelik, ops. 316 Paslanmaz Çelik"],["Gözetleme Malzemesi","Isıya dayanıklı cam"]],
       uses:"Soğuk su, sıcak su, buhar, basınçlı hava, LPG, LNG, asfalt, fuel oil, seramik çamuru vb.",
       sectors:"Gıda sanayi, ilaç sanayi, enerji tesisleri, kimya sanayi, seramik sanayi."}
     ]},

    /* ===================== SEVİYE SENSÖRLERİ ===================== */
    {id:"seviye", kicker:"03", title:"Seviye Sensörleri", sub:"Sıvı ve katı malzemelerde sürekli ve noktasal seviye ölçümü", glyph:"level",
     products:[
      {code:"NT-ULS", img:"assets/kat/p12_1.png", name:"Ultrasonik Seviye Transmitterleri", glyph:"ultra",
       desc:"Ultrasonik seviye sensörleri; katı ve sıvılarda temassız mesafe, seviye ve hacim ölçümü için tasarlanmış enstrümanlardır. Ultrasonik sensör, sinyal çevirici ve kontrol birimi bileşenlerinden oluşur. Kolayca montajı yapılan sensörün tank içerisine gönderdiği ses dalgası malzemeye çarpar ve geri algılanır; böylece seviye tespiti yapılmış olur. Filtreleme özelliği ile yanlış ölçümler engellenir.",
       specs:[["Ölçüm Aralığı","0–1 … 0–20 metre"],["Hassasiyet","%0,5 – %1,0"],["Çözünürlük","3 mm veya %0,1"],["Sıcaklık Dayanımı","Verici −20…+60 °C, sensör −20…+80 °C"],["Koruma Sınıfı","Verici IP65, sensör IP68"],["Çıkış","4–20 mA"],["Besleme","24 VDC"]],
       uses:"Su arıtma ve dağıtım tesisleri, kimya ve petrokimya tesisleri, gıda tesisleri, kapalı ve açık tanklar.",
       sectors:"Kum, çimento-klinker, atık su, temiz su, tozlu katı partiküller, gıda ve yem, plastik granüller.",
       notes:["Montaj kılavuzunda belirtilen adımlar uygulanmalıdır.","Kullanılan akışkana göre prob seçimine dikkat edilmelidir."]},

      {code:"NT-RLS", img:"assets/kat/p12_2.png", name:"Radar Seviye Transmitterleri", glyph:"radar",
       desc:"Radar seviye sensörleri darbe yönetimi ile zamanla artan frekans taramaları gönderir; ölçüm yüzeyinden yansıyarak geri dönen bu sinyaller anten tarafından toplanır ve böylece sıvı ve katılarda seviye tespiti yapılır. Yüksek teknolojisi ve temassız – kılavuzlu gibi farklı uygulama metotları ile zorlu proseslerde ölçüm kolaylığı sağlar. Ölçüm değerini mesafe, seviye, hacim ve kütle gibi farklı değerlerde yorumlar.",
       specs:[["Ölçüm Aralığı","0–10 m / 0–30 m / 0–50 m / 0–70 m"],["Hassasiyet","±2 mm"],["Besleme","24 VDC – 220 VAC"],["Sıcaklık Dayanımı","−60…+60 °C / −60…+150 °C / −60…+250 °C"],["Koruma Sınıfı","Verici IP65, sensör IP68"],["Sinyal ve İletişim Çıkışı","4–20 mA, HART, RS485 Modbus, Profibus PA, Foundation Fieldbus"],["Frekans Bandı","26 GHz – 70 GHz"]],
       uses:"Kum, çimento-klinker, atık su, temiz su, tozlu katı partiküller, yüksek sıcaklık ve viskoz sıvılar; süt ve süt ürünleri, meşrubat, yağ, benzin, mazot, dolomit, kalsit, kireç, un ve yem, plastik granüller.",
       sectors:"Seramik sanayi, çimento fabrikaları, arıtma tesisleri, gıda endüstrisi, petrokimya endüstrisi, plastik işleme ve hammadde tesisleri, kum ve taş ocakları, kireç ve alçı tesisleri."},

      {code:"NT-HLS", img:"assets/kat/p13_2.png", name:"Hidrostatik Seviye Transmitterleri", glyph:"hydro",
       desc:"Hidrostatik seviye transmitteri özel olarak daldırma tip olarak dizayn edilmiştir. Sıvı seviyesi yükseldikçe dip kısma yapmış olduğu basınç lineer olarak artmaktadır. Bu prensibe dayalı olarak sıvıya daldırılan ürün, sıvı seviyesinin yükselmesine bağlı olarak seviyeyi hassas bir şekilde ölçer.",
       specs:[["Ölçüm Aralığı","1 – 100 metre"],["Hassasiyet","%0,5"],["Maksimum Basınç","%200 FS"],["Elektriksel Bağlantı","Seviye değerine göre kablo uzunluğu"],["Besleme Voltajı","+12…30 VDC"],["Koruma Sınıfı","IP68"],["Gövde","1.4404 (AISI 316L), ops. 1.4462 (dubleks) – Titanyum"],["Çalışma Sıcaklığı","−25…+85 °C"],["Çıkış","4–20 mA, 0–10 VDC veya 0,5–4,5 VDC"]],
       uses:"Kuyular, su tankları, akaryakıt tankları, göl seviyesi, nehir seviyesi, deniz seviyesi, rezervuarlar.",
       sectors:"Sulama sistemleri, akarsular, tanklar, belediye ve kamu kurumları.",
       notes:["Kablo boyu sipariş sırasında belirtilmelidir.","Ölçümde hava kanallı özel kablo kullanıldığı için muhafaza edilmelidir."]},

      {code:"NT-CLS", img:"assets/kat/p13_3.png", name:"Kapasitif Seviye Transmitterleri", glyph:"capacitive",
       desc:"Kapasitif seviye transmitteri, katı ve sıvı malzemelerin seviye yönetiminde; toz, köpük, kir veya benzer partiküllere rağmen yüksek hassasiyette oransal ölçüm imkânı sunar. Kapasitif ölçüm prensibi, elektrot ve tank yüzeyi arasında kütleye bağlı değişen kapasite değerinin algılanmasına dayanır. Sensör elektrodu, kurulum sonrasında istenen noktaya kadar malzeme içerisine daldırılır.",
       specs:[["Ölçüm Mesafesi","150 – 400 – 650 – 1150 mm"],["İşlem Sıcaklığı","−20…+100 °C"],["Koruma Sınıfı","IP68"],["Maks. Çalışma Basıncı","10 bar"],["Algılama Gecikmesi","Maks. 1 sn"],["Besleme Gerilimi","12 – 35 VDC, 1,2 W"],["Sinyal Çıkışı","Röle, 1 enversör kontak, AC maks. 250 VAC / 2 A / 500 VA"]],
       uses:"Yapı endüstrisinde alçı, kireç, ince kum, dolomit, kalsit, perlitli alçı, çimento, taş, kömür, pulverize kömür tozu; gıda endüstrisinde yem, tohum, un, tuz, şeker.",
       sectors:"Yapı endüstrisi, gıda endüstrisi, inşaat endüstrisi.",
       notes:["Kullanıldığı yerdeki tozdan ve topraktan etkilenmez.","Ürün, malzeme girişinden uzak tutulmalıdır.","Ürüne zarar verebilecek durumlarda ölçüm yapılacak yere siperlik takılması önerilir."]},

      {code:"NT-MLS", img:"assets/products/NT-MLS.png", name:"Motorlu Seviye Sensörleri", glyph:"motor",
       desc:"Bu tip seviye şalterleri silo ve konteyner içinde bulunan iri taneli malzemenin seviye kontrolü için tasarlanmış enstrümanlardır. Çalışma prensibi oldukça basittir: tank duvarına montajı yapılan seviye şalterinin paletli probu düşük devirde dönmeye başlar; prob seviyesine yükselen iri tanecikli malzemeler palet üzerine karşı kuvvet uygulayarak dönmesini engeller, böylece motor durur ve kontak vererek kontrol amaçlı kullanılabilir.",
       specs:[["Bağlantı Terminali","Maksimum 2 mm² (AWG 14) kesitli kablo girişi"],["Besleme","24 VDC – 220 VAC"],["Sıcaklık Dayanımı","Çevre −20…+80 °C, ürün −5…+100 °C"],["Malzeme","Paslanmaz Çelik SS316"],["Bağlantı Ölçüsü","R1½\" – R1\" – R2\""],["Min. Algılama Yoğunluğu","250 g/lt (standart bayrak ile)"],["Maks. Silo İç Basıncı","0,5 bar"]],
       uses:"İnşaat, yapı, gıda ve plastik endüstrisinde bulk katı malzeme seviye kontrolü.",
       sectors:"İnşaat sektörü (alçı, kireç, çimento, taş kırma tesisleri), gıda (yem, tohum, un, tuz, şeker, çay, bakliyat), plastik sanayi."},

      {code:"NT-VLS", img:"assets/kat/p14_3.png", name:"Titreşimli Seviye Sensörleri", glyph:"vibrating",
       desc:"Titreşimli seviye sensörleri; sıvı ve katı malzemelerde noktasal seviye tespiti için tasarlanmıştır. Prob üzerindeki titreşimin malzeme teması ile sönümlenmesi esasına dayanır. Oynar parça sayısının azlığı sayesinde bakım gereksinimi düşüktür ve yüksek titreşimli ortamlarda güvenle çalışır.",
       specs:[["Uygulama","Sıvı ve katı malzemeler"],["Malzeme","Paslanmaz çelik"],["Mekanik Bağlantı","R1\", ops. flanşlı, tri-clamp"],["Maks. Sıcaklık ve Basınç","150 °C … 1,5 MPa"],["Çıkış","PNP-NO"],["Besleme","24 VDC"]],
       uses:"Toz, granül ve partikül hâlindeki katı ürünler ile sıvılar.",
       sectors:"Gıda, ilaç ve kimya sanayi, yapı ve inşaat endüstrisi."},

      {code:"NT-CSW", img:"assets/products/NT-LSW-M.png", name:"Kapasitif Seviye Şalteri", glyph:"capacitive",
       desc:"Magcap tip seviye şalterinin uç kısmındaki algılama sensörünün etrafı kullanılan yerdeki hammadde ile kaplandıktan sonra yaydığı RF gücünde azalma oluşur. Bu azalma, yapılan hassasiyet ayarından fazla olduğunda çıkış sinyali üretir. Malzemenin dielektrik katsayısına ve özelliğine bağlı olarak cihaz üstünden hassasiyet ayarı yapılabilir.",
       specs:[["Ölçüm Mesafesi","150 – 400 – 650 – 1150 mm"],["İşlem Sıcaklığı","−20…+100 °C"],["Koruma Sınıfı","IP68"],["Maks. Çalışma Basıncı","10 bar"],["Algılama Gecikmesi","Maks. 1 sn"],["Besleme Gerilimi","12 – 35 VDC, 1,2 W"],["Sinyal Çıkışı","Röle, 1 enversör kontak, AC maks. 250 VAC / 2 A / 500 VA"]],
       uses:"Toz, granül ve partikül hâlindeki katı ürünler.",
       sectors:"Yapı endüstrisi, gıda endüstrisi, inşaat endüstrisi.",
       notes:["Kullanıldığı yerdeki tozdan ve topraktan etkilenmez.","Uygulama noktasına göre ürünün zarar görebileceği durumlarda siperlik kullanılması gerekebilir."]},

      {code:"NT-SSW", img:"assets/products/NT-MLP.png", name:"Yandan Montajlı Seviye Şalteri", glyph:"sideswitch",
       desc:"F1 tip manyetik seviye şalterleri tüm tankların sıvı seviye ölçümleri için kullanılır. Harici besleme kaynağı olmadan çalışma özelliği, yandan montaj imkânı, geniş basınç ve sıcaklık aralığı ile komple paslanmaz temas sayesinde geniş kullanım alanına sahiptir.",
       specs:[["Basınç Dayanımı","16 bar"],["Sıcaklık Dayanımı","Maks. 150 °C"],["Bağlantı Tipi","Kare flanş"],["Flanş Özelliği","AISI 316"],["Buat","Alüminyum"],["Regülasyon","50 – 100 – 200 mm"],["Yoğunluk","> 0,7 kg/lt"],["Switch Kapasitesi","250 VAC, 15 A, NO+NC"]],
       uses:"Pis ve temiz su tankları, asit ve kostik tanklar, yakıt ve yağ tankları, tüm basınçlı ve basınçsız kaplar.",
       sectors:"Gemi sanayi, yakıt ve yağ tesisleri, kimya sanayi.",
       notes:["Harici beslemeye gerek duymaz.","Yüksek vibrasyonda çalışabilir."]},

      {code:"NT-DSW", img:"assets/products/NT-LSW-P.png", name:"Diyaframlı Seviye Şalteri", glyph:"diaphragm",
       desc:"Diyaframlı katı seviye şalteri, depodaki dökme malzemenin seviyesinin ölçülmesinde en ekonomik yöntemdir. Açık ve basınçsız tanklarda kullanılabilir. Tozlu, pudralı, tanecikli, granüllü dökme malzemelerin silodaki dolu ve boş durumları kontrol edilebilir. Membran, kontrolü yapılan malzemeye mutlaka temas etmelidir. Siloya dökülen malzeme yığıldıkça membran kapanır; oluşan baskıyla malzeme diyaframı geri iter ve mekanizma kontağı iter. Malzeme azaldıkça kontak eski konuma döner.",
       specs:[["Gövde Malzemesi","Nitril, NBR, FPM, paslanmaz çelik"],["Bağlantı","Yuvarlak flanş"],["Çıkış","1 × NA/NK mikro şalter"],["Maksimum Sıcaklık","200 °C"]],
       uses:"Dökme katı malzemelerin silo dolu/boş kontrolü.",
       sectors:"İnşaat, yapı, gıda ve plastik endüstrisi."},

      {code:"NT-WLD", img:"assets/kat/p16_2.png", name:"Su Baskın Dedektörü", glyph:"flood",
       desc:"Su basma ihtimali olan ve bu konuda kritik önem taşıyan tüm mekanlarda güvenle kullanılabilir. Baskın anında dahili siren ile uyarı vererek hızlı bir şekilde önlem alınmasına imkân tanır. Röle çıkışı ile pompa veya solenoid vana gibi üniteleri kontrol ederek kaçağın durdurulmasını sağlar. Yanlış alarmları önlemek için 3 saniye algılama gecikme özelliği mevcuttur.",
       specs:[["Gösterge","3 adet alarm LED'i"],["Siren","1 adet dahili siren"],["Sensör Sayısı","3 adet sensör bağlanabilir"],["Güç","24 VDC"],["Çıkış","Röle, 2 A / 125 °C, NO, NC"]],
       uses:"Sunucu odaları, bodrum katları, pompa istasyonları, kritik ekipman mahalleri.",
       sectors:"Bina otomasyonu, veri merkezleri, endüstriyel tesisler."},

      {code:"NT-MLI", img:"assets/products/NT-MLI.png", name:"Manyetik Seviye Göstergeleri", glyph:"bypass",
       vimgs:[["Ex-Proof Tip","assets/products/NT-MLI-EX.png"],["Kazan Tipi","assets/products/NT-MLI-BR.png"]],
       desc:"MLG tip manyetik seviye gösterge cihazı, sürekli olarak sıvı seviyesinin ölçümü, izlenmesi ve görüntülenmesi için kullanılır. Tanktaki seviye değişimi, birleşik kaplar prensibine göre bypass tüpü içindeki sıvının seviyesini de aynı oranda değiştirir. Bu sayede seviye göstergesi içinde bulunan mıknatıslı şamandıra hareket ederek bypass tüpünün dış yüzeyindeki manyetik flapları etkiler ve kendi ekseni etrafında 180° dönmesini sağlar. Sıvı seviyesi artarken beyaz flaplar kırmızıya, azalırken kırmızı flaplar beyaza döner.",
       specs:[["Basınç Dayanımı","10 bar (ops. 40 bar)"],["Sıcaklık Dayanımı","150 °C (ops. 350 °C)"],["Bağlantı Tipleri","Dişli G 1/2\", 3/4\", 1\" – Flanşlı DN15, DN20, DN25"],["Boru ve Şamandıra","Paslanmaz çelik"],["Gösterge Profili","Alüminyum"],["Çıkış","4–20 mA, 0–10 V, kontak çıkışı"]],
       uses:"Su tankları, kondens tankları, degazörler, yakıt tankları, buhar kazanları, yeraltı tankları, agresif ve toksik sıvılar, sıvılaştırılmış gazlar, tüm basınçlı ve basınçsız kaplar.",
       sectors:"Gemi inşa sanayi, kimya sanayi, rafineriler, enerji tesisleri."},

      {code:"NT-CDS", img:"assets/products/NT-LSW-F.png", name:"İletken Tip Seviye Şalterleri", glyph:"conductive",
       desc:"İletken tip seviye şalteri tank ve kazanların sıvı seviye kontrolünde kullanılmaktadır. Oynar parçası olmadığından kritik ortamlarda, katı partiküllü, düşük yoğunluklu ve yüksek viskoziteli iletken sıvılarda kullanılabilir.",
       specs:[["Elektrot Malzemesi","304 paslanmaz çelik, ops. 316 paslanmaz çelik"],["Bağlantı ve Muhafaza Malzemesi","Derlin"],["Çıkış","1 × NA/NK mikro şalter"],["Maksimum Sıcaklık ve Basınç","60 °C … 6 bar"],["Elektrot Sayısı","Maks. 3"]],
       uses:"Hidrofor uygulamaları, buhar kazanları su seviye kontrolü ve muhtelif iletken sıvı tankları için ekonomik ve güvenli bir çözümdür.",
       sectors:"Enerji tesisleri, bina otomasyonu, kimya sanayi."},

      {code:"NT-RCS", img:"assets/products/NT-RCS-3100-2100.png", name:"Halatlı Tip Kapasitif Seviye Şalteri", glyph:"rope",
       desc:"Toz ve tanecikli katı maddelerin depolama alanında anlık (nokta) seviyesini tespit etmek için tasarlanmıştır. Çalışma prensibi, prob yüzeyine temasta bulunan maddelerin kapasite değişimi oluşturması ve bu değişimin elektronik bileşenler ile seviye tespiti amacıyla kullanılmasını sağlayan enstrümanlardır.",
       specs:[["Çıkış (Kontak)","1 × NC-NO röle (220 VAC/5 A – 14 VDC/20 A)"],["Halat ve Ağırlık Materyali","304 SS, ops. 316 SS"],["Boy","1 metre … 20 metre"],["Buat Materyali","Delrin"],["Besleme","24 VDC"]],
       uses:"Tanecikli katı maddeler, kireç, kum, kömür tozu, çimento, klinker, buğday, mısır gibi tahıllar.",
       sectors:"Tahıl siloları, çimento tesisleri, kireç ve alçı tesisleri, dökümhaneler.",
       notes:["Halat boyu uygulama noktasına göre belirlenebilir.","Halat yalıtımlı veya yalıtımsız olarak kullanılabilir."]},

      {code:"NT-ELES", img:"assets/products/NT-FLT.png", name:"Şamandıralı Seviye Sensörleri", glyph:"floattx",
       desc:"NT-ELES şamandıralı seviye sensörleri; sıvıların kaldırma kuvveti prensibinden yararlanılarak, kılavuz çubuğu kapsayan mıknatıslı ve hareketli şamandıranın manyetik alan etkisiyle kılavuz çubuk içerisine yerleştirilen reed kontağı tetiklemesine bağlı olarak devreye alarak veya devreden çıkararak sıvıların seviye tespitini yapmak için tasarlanmış enstrümanlardır. Kullanım amacına göre sürekli (online) seviye ve noktasal seviye şeklinde üretilir; sürekli seviye sensörlerine seviye transmitterleri, noktasal seviye sensörlerine ise seviye şalterleri denir.",
       variants:[
         ["NT-ELES11 Serisi","Sıvı akışkanların anlık (online) seviyesini tespit etmek için tasarlanmıştır. Aktarım veya izleme için analog sinyal çıkışları ve haberleşme çıkışları üretebilir; farklı mekanik bağlantı yapıları ve 50 mm'den 3000 mm'ye kadar boyut seçenekleri ile geniş bir kullanım alanı sağlar."],
         ["NT-ELES7 Serisi","Seviye şalterleri; sıvılarda dolu-boş gibi veya seçilebilir noktalardan anlık seviye tespitini sağlamak amacıyla tasarlanmıştır. 50 mm'den 5000 mm'ye kadar geniş boyut aralığı, üstten veya yandan montaj seçenekleri, flanşlı, dişli ve sıkıştırma mekanik bağlantı seçenekleri ile ekonomik ve güvenilir ölçüm sağlar."]
       ],
       specs:[["Buat ve Boru Materyali","Paslanmaz Çelik 304, 316, 316L / Derlin ve PVDF / Pirinç"],["Şamandıra Materyali","Paslanmaz Çelik 304, 316, 316L / PVDF, NBR, Poliüretan"],["Elektrik Bağlantısı","M12 terminal, DIN 43650, klemens, blendajlı kablo"],["Bağlantı Şekli","R 1/4\" | 1/2\" | 1\" | 1¼\" | 1½\" | R 2\" erkek diş veya flanş DN15–DN100"],["Ölçüm Aralığı","50 mm – 5000 mm"],["Şamandıra Tipi","Küresel veya silindirik"],["Min. Kaldırma Yoğunluğu","0,6 g/cm³"],["Basınç Dayanımı","10 bar, ops. 30 bar"],["Sıcaklık Dayanımı","−20…+120 °C, ops. 180 °C"],["Transmitterler için Hassasiyet","5 mm – 10 mm – 15 mm"],["Transmitter Sinyal Çıkışı","4–20 mA / 0–10 V / Ohm"],["Şalterler için Sinyal Çıkışı","NO-NC kontak / röle"],["Opsiyonel Sıcaklık Sensörü","PT100 – PT1000"]],
       uses:"Su ve türevi tüm akışkanlar; su depoları, pis su tankları, yat ve gemi su tankları, hidrolik yağ tankları, kimyasal tankları, meşrubat ve düşük viskoziteli sıvı kazanları.",
       sectors:"Arıtma tesisleri, makine imalatçıları, yat ve gemi sektörü, kimya sektörü, tekstil sektörü, otel ve havuzlar, petrol ve akaryakıt sektörü, gıda sektörü.",
       notes:["Ekonomik çözümdür.","Uygulamaya özel imalat yapılabilmektedir.","Kurulumu ve montajı kolaydır.","Yapışkan ve yoğunluğu yüksek sıvılarda önerilmez."]}
     ]},

    /* ===================== BASINÇ SENSÖRLERİ ===================== */
    {id:"basinc", kicker:"04", title:"Basınç Sensörleri", sub:"Basınç transmitterleri, şalterler ve manometreler", glyph:"pressure",
     products:[
      {code:"NT-BT", img:"assets/products/NT-BTT-S.png", name:"Standart Seri (OEM) Basınç Transmitterleri", glyph:"pressure",
       desc:"Sıvı ve gazların birim alana uyguladığı kuvvetin büyüklüğüne basınç denir. Algıladığı basınç değerini belirli bir elektronik sinyale dönüştüren ekipmanları basınç transmitteri olarak adlandırabiliriz.",
       variants:[["NT-BT Serisi","G1/4\" bağlantı, 0…2,5 bar'dan 0…600 bar'a kadar ölçüm aralığı."],["NT-FPT Serisi","G1/4\" – G1/2\" bağlantı; 0…100 mbar ile 0…600 bar, vakum seçenekleri (0…−1 bar)."]],
       specs:[["Bağlantı Ölçüsü","G1/4\" – G1/2\""],["Ölçüm Aralığı","0…2,5 bar'dan 0…600 bar'a kadar; 0…100 mbar seçenekleri"],["Hassasiyet","±%0,5 FS / ±%0,3 FS"],["Sıcaklık Aralığı","−40…+125 °C"],["Çıkış Sinyali","4…20 mA, 0…5 VDC, 1…6 VDC, 0…10 VDC, 0,5…4,5 VDC ratiometrik"]],
       uses:"Yapışkan olmayan ve partikül içermeyen sıvılar, agresif olmayan gazlar.",
       sectors:"Atık su tesisleri, gıda sanayi, tekstil sanayi, ağır sanayi, makine sanayi, kimya sanayi, petrokimya, kağıt sanayi, ilaç sanayi, hidroelektrik santralleri."},

      {code:"NT-EPI / NT-NAT / NT-BCT", img:"assets/kat/p19_4.png", name:"Diyaframlı Basınç Transmitterleri", glyph:"diaphragm",
       desc:"Mekanik bağlantı noktasında bulunan diyaframa uygulanan kuvveti algılayarak elektriksel sinyale dönüştürerek ölçümleme sağlayan ekipmanlardır. Atık ve partikül içeren sıvılar, viskoz sıvılar ve tozlu gazlar gibi yapışkan akışkanlar için uygundur.",
       specs:[["Bağlantı Ölçüsü","1/4\" – 1/2\", G1/2\" erkek flush membran"],["Ölçüm Aralığı","0…1 bar'dan 0…600 bar'a kadar"],["Hassasiyet","±%0,4 FS / ±%0,5 FS"],["Sıcaklık Aralığı","−40…+85 °C / −40…+125 °C"],["Çıkış Sinyali","4…20 mA, 0…5 VDC, 1…6 VDC, 0…10 VDC"]],
       uses:"Atık ve partikül içeren sıvılar, viskoz sıvılar, tozlu gazlar, yapışkan sıvılar.",
       sectors:"Atık su ve arıtma tesisleri, gıda endüstrisi, makine endüstrisi, kimya ve petrokimya endüstrisi, iklimlendirme endüstrisi."},

      {code:"NT-DMP / NT-BFT / NT-DPT", img:"assets/kat/p20_2.png", name:"Fark Basınç Transmitterleri", glyph:"diffpressure",
       desc:"İki farklı basınç değeri arasındaki farkı (Δp) tespit etme amaçlı tasarlanmış ürünlerdir. Hortum girişli düşük fark basınç modellerinden yüksek basınç fark ölçümüne kadar geniş bir yelpaze sunar.",
       specs:[["Bağlantı Ölçüsü","1/4\", M20×1,5, G1/2\", hortum girişi"],["Ölçüm Aralığı","−100 Pa … +7000 Pa; 0 bar … 200 bar"],["Fark Basınç Ölçüm Aralığı","100 mbar'dan 25 bar'a kadar; ±60 mbar'dan ±100 bar'a"],["Hassasiyet","±%0,5 FS; ±%1,5, ops. ±%0,25"],["Sıcaklık Aralığı","−40…+125 °C / −10…+50 °C"],["Çıkış Sinyali","4…20 mA, 0…5 VDC, 1…5 VDC, 0–10 V, ops. Modbus"]],
       uses:"Pnömatik sistemler, hava kompresörleri, hava soğutma-ısıtma sistemleri, su pompaları, sıvı tankları.",
       sectors:"Medikal ve kimya endüstrisi, test sistemleri, iklimlendirme, makine endüstrisi."},

      {code:"NT-EXNT", img:"assets/kat/p20_3.png", name:"Ex-Proof Basınç Transmitterleri", glyph:"exproof",
       desc:"Parlayıcı ve patlayıcı sıvı ve gazların ölçümü için özel olarak tasarlanmış enstrümanlardır. Ex-proof onaylı gövde ile tehlikeli bölgelerde güvenli ölçüm sağlar.",
       specs:[["Bağlantı Ölçüsü","1/4\""],["Ölçüm Aralığı","200 Pa … 10 MPa"],["Fark Basınç Ölçüm Aralığı","±60 mbar'dan ±100 bar'a kadar"],["Hassasiyet","±%0,075 FS (ops. ±%0,05 FS)"],["Sıcaklık Aralığı","−40…+125 °C (ops. 400 °C)"],["Çıkış Sinyali","4…20 mA / HART / MBAS"],["Ex-Proof Onay","Ex d IIC T6, Ex ia IIC T6"]],
       uses:"LNG – LPG türevi yanıcı gazlar, yanıcı ve parlayıcı sıvılar.",
       sectors:"Gemi sanayi, Ex Zones 0/1/2 (gaz) ve 20/21/22 (toz), maden sanayi, petrokimya endüstrisi, kömür madenleri, hububat siloları, şeker fabrikaları."},

      {code:"NT-DMPX", img:"assets/kat/p21_2.png", name:"Smart Basınç Transmitterleri", glyph:"smart",
       desc:"Gelişmiş mikroişlemci teknolojisi ve sıcaklık kompanzasyonu ile basınç ölçümü sağlayan ekipmanlardır. Yüksek hassasiyet ve kabiliyete sahiptir.",
       specs:[["Bağlantı Ölçüsü","1/4\""],["Ölçüm Aralığı","0…100 mbar – 0…1000 bar'a kadar"],["Hassasiyet","±%0,075 FS (ops. ±%0,05 FS)"],["Sıcaklık Aralığı","−40…+125 °C (ops. 400 °C)"],["Çıkış Sinyali","4…20 mA / HART / MBAS"],["Ex-Proof Onay","Ex d IIC T6, Ex ia IIC T6"]],
       uses:"Tüm sıvı, gaz ve buhar uygulamaları.",
       sectors:"Makine endüstrisi, test ve kalibrasyon sistemleri, kimya sanayi, ağır sanayi, savunma sanayi, petrokimya endüstrisi."},

      {code:"NT-EPD", img:"assets/kat/p21_4.png", name:"Göstergeli Basınç Transmitterleri ve Şalterleri", glyph:"gauge",
       desc:"Basınç transmitterine kompakt şekilde eklenmiş programlama ve gösterge ekranından oluşmaktadır. Kolay ve pratik kullanımı sayesinde sahada anlık veri izlemeye olanak sağlar.",
       specs:[["Bağlantı Ölçüsü","G1/4\" – G1/2\""],["Ölçüm Aralığı","0…0,2 bar'dan 0…600 bar'a kadar"],["Hassasiyet","±%0,5 FS"],["Sıcaklık Aralığı","−25…+85 °C"],["Çıkış Sinyali","4…20 mA, 0…10 VDC, değiştirilebilir mA veya V"],["Anahtarlama","2 adet PNP transistör (ops. kontak çıkış)"]],
       uses:"Tüm sıvı ve gazlar.",
       sectors:"İmalat tezgahları, hidrolik çalışan tüm makineler, HVAC makineleri (ısıtma, klima, havalandırma üniteleri), soğutma üniteleri, su arıtma makineleri.",
       notes:["Absolute veya relative ölçüm seçeneği.","NFC ile cep telefonundan programlayabilme.","Tek cihazda akım ve voltaj çıkış seçeneği."]},

      {code:"NT-TG / NT-KP", img:"assets/kat/p22_2.png", name:"Basınç Şalterleri", glyph:"pswitch",
       desc:"Algıladığı basınç verisini set edilen nokta veya noktalarda anahtarlama, emniyet ve alarm amaçlı üretilmiş basınç ölçme ekipmanlarıdır.",
       specs:[["Bağlantı Ölçüsü","G1/4\", G1/8\""],["Ölçüm Aralığı","−200 mbar…−800 mbar ve 0,1…600 bar'a kadar; −0,2…7,5 / 2…14 bar"],["Hassasiyet","<%5"],["Sıcaklık Aralığı","−30…+100 °C (ops. 250 °C); −40…+60 °C"],["Çıkış Sinyali","NO / NC / değişken (NO&NC)"]],
       uses:"Partikül içermeyen sıvılar, hava, buhar ve agresif olmayan gazlar.",
       sectors:"Makine parçaları, hidrolik, endüstriyel uygulamalar."},

      {code:"NT-A300 / NT-S100 / NT-C600", img:"assets/kat/p23_2.png", name:"Manometreler", glyph:"manometer",
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
       sectors:"Gemi endüstrisi, temiz su taşıma sistemleri, atık su sistemleri, kimya ve petrokimya endüstrisi, enerji santralleri, gıda ve meşrubat endüstrisi, süt makineleri, ilaç sanayi, makine endüstrisi."}
     ]},

    /* ===================== SICAKLIK ===================== */
    {id:"sicaklik", kicker:"05", title:"Sıcaklık Sensörleri", sub:"Termokupllar, termo rezistanslar ve sıcaklık-nem transmitterleri", glyph:"temp",
     products:[
      {code:"NT-TC", img:"assets/kat/p24_2.png", name:"Termokupllar", glyph:"thermocouple",
       desc:"Ortam ya da maddelerin sıcaklık verisini tespit etmek, gözlemlemek ve kontrol etmek için tasarlanmış enstrümanlardır. Rezistans termometreler, termokupllar ve infrared sıcaklık ölçerler şeklinde üç başlıkta incelenebilir.",
       variants:[
         ["Kafalı Tip Termokupllar","Düz tip termokupllar −200 °C'den 2320 °C'ye kadar değişik proseslerde yaygın olarak kullanılır. Termokuplun ömrünü uzatabilmek için proses şartları çok iyi belirlenmelidir. L tip termokupllar metal eriyiklerinin ve tuz banyolarının sıcaklık ölçümlerinde kullanılır."],
         ["Platin Termokupllar","Yüksek sıcaklık ölçümlerinde tercih edilmektedir. 1200 °C – 1600 °C ortam proses özelliklerine uygun yapıda üretim gerçekleştirilmektedir. Çimento, alüminyum, bakır, demir ve çelik, seramik ve cam endüstrilerinde tercih edilir."],
         ["Özel Termokupllar","Proseslerin gerektirdiği değişken bağlantı şekilleri ve fiziksel yapıları ile özel ürünler yapılabilmektedir. Asitli ortamlar için PP buat kafası ve teflon kılıflı modeller, patlayıcı ortamlar için Ex-proof korumalı modeller bunlardan bazılarıdır."],
         ["Mineral İzoleli ve Bayonet","Tek veya çift elemanlı olarak imal edilen mineral izoleli termokupllar −40 °C ile 1600 °C arasında kullanılabilir. Bayonet termokupllar genelde basit proseslerde tercih edilir; kablolu ve yay sıkıştırmalı olarak üretilir."]
       ],
       specs:[["Tip","J – K – T – E – N – R – S – B"],["Tel Çapı","0,35 – 0,50 – 0,80 – 1 – 1,6 – 2 – 2,5 – 3 mm"],["Koruyucu Kılıf","SS316 – Inconel 600/800 – 1.4749 – 1.4841 (1.4845), Seramik KER 530/610/710 (C799), Silisyum Karbür, Silisyum Nitrür (Si₃N₄), PTFE, PVDF, PFA"],["Bağlantı Şekilleri","R veya NPT 1/4\", 3/8\", 1/2\", 3/4\", 1\"; DIN veya ASME flanş"],["Termoçift Adedi","Tek / çift / çoklu"],["Sinyal Çıkışı","4–20 mA – 0–10 V"],["Buat / Kafa","DIN 43729 alüminyum, IP67 (ops. Ex-proof, bakalit)"]],
       uses:"Katı, sıvı, gaz ve buhar uygulamalarının tümünde.",
       sectors:"Makine endüstrisi, çimento tesisleri, cam ve seramik endüstrisi, gıda endüstrisi, ilaç endüstrisi, kimya ve petrokimya endüstrisi, ağır sanayi ve savunma sanayi, test üniteleri, iklimlendirme, tarım endüstrisi.",
       notes:["Sıcaklığa göre doğru tip seçilmelidir.","İsteğe bağlı özel üretimler yapılabilmektedir."]},

      {code:"NT-RTD", img:"assets/kat/p25_2.png", name:"Termo Rezistanslar (PT100 / PT1000)", glyph:"rtd",
       desc:"Platin rezistans termo elemanlar −200 °C'den +450 °C arasında sıcaklık ölçümü yapabilen, hassas ölçümleme kabiliyetine sahip sıcaklık sensörleridir. PT100, PT1000 vb. şeklinde isimlendirilebilir.",
       variants:[
         ["Kafalı Tip Termo Elemanlar","SS316 – SS310 koruyucu kılıf, 4–6 mm kılıf çapları, Class A / Class B eleman yapısı, 4–20 mA veya 0–10 V sinyal çıkışı."],
         ["Özel Termo Elemanlar","Asitli ortamlar için PP buat kafası ve teflon kılıflı modeller, patlayıcı ortamlar için Ex-proof korumalı modeller. 3–22 mm kılıf çapı aralığında üretim olanakları."],
         ["Maça Termo Elemanlar","Uçları sivri (batırmaya uygun) yapıda olan sıcaklık sensörleridir. Uygulama prosesleri gıda ve et işleme tesisleridir; paslanmaz veya teflon saplı olabilir."],
         ["Soketli ve Göstergeli","Genelde makine uygulamalarında veya proses noktasında kolayca okunabilmesi için geliştirilen modellerdir. Gösterge üzerinden çıkış seçimi sağlanabilir; Android uygulaması (NFC) ile veriler telefon üzerinden izlenebilir ve ayarlanabilir."]
       ],
       specs:[["Tip","PT100, PT200, PT500, PT1000, PT2000"],["Koruyucu Kılıf","SS316 – SS310 – (PTFE-PVDF-PFA)"],["Kılıf Çapları","3 mm … 22 mm aralığında üretim olanakları"],["Eleman Yapısı","Çekirdek, Class A, Class B, folyo, cam, seramik"],["Eleman Sayısı","1×, 2×, 3×, 6×"],["Mekanik Bağlantı","R 1/2\" (ops. isteğe özel)"],["Dalma Boyu","50 mm … 500 mm"],["Besleme","10 – 30 VDC"],["Sinyal Çıkışı","4–20 mA, 0–10 V, 2×PNP (göstergeli model)"],["Doğruluk","±%0,5 FS"]],
       uses:"Katı, sıvı, gaz ve buhar uygulamalarının tümünde.",
       sectors:"Makine endüstrisi, çimento tesisleri, cam ve seramik endüstrisi, gıda endüstrisi, ilaç endüstrisi, kimya ve petrokimya endüstrisi, ağır sanayi ve savunma sanayi, test üniteleri, iklimlendirme, tarım endüstrisi.",
       notes:["Sıcaklığa göre doğru tip seçilmelidir.","İsteğe bağlı özel üretimler yapılabilmektedir."]},

      {code:"NT-HT", img:"assets/kat/p26_2.png", name:"Sıcaklık ve Nem Sensörleri", glyph:"humidity",
       desc:"NT-HT serisi sıcaklık ve nem transmitterleri kapasitif sensörle ölçümleme yapan hassas ölçüm cihazlarıdır. Yenilenmiş sensör ve entegre teknoloji sayesinde neredeyse tüm şartlar altında kullanılabilir. Sensör direkt olarak sıvı ile temas etse bile, üzerindeki sıvı buharlaştığında ölçüm almaya devam edebilecek yapıdadır.",
       variants:[
         ["NT-HT100 Serisi","Standart duvar montajlı veya uzatılabilir kablosu ile farklı uygulamalarda rahatlıkla kullanılabilir. Göstergeli modelinde üzerinden rahatça izleme yapılabilir; göstergesiz ekonomik seriler de tercih edilebilir. Röle ve analog sinyal çıkışlarının yanında isteğe bağlı RS485 Modbus iletişim modülü ilave edilebilir."],
         ["NT-HT101 Serisi","Hava kanalları veya daldırma sıcaklık-nem uygulamaları için geliştirilen hat tipi transmitterdir; göstergeli-göstergesiz, paslanmaz-pirinç-plastik prob seçenekleri ve basınçlı ortamlar için özel geliştirilmiş filtre seçenekleri mevcuttur."],
         ["NT-HT-W10","Sıcaklık-nem verilerini GSM üzerinden izleme amacıyla geliştirilmiştir. Harici 2 analog, 2 lojik ve 16 Modbus parametresi okuma, GSM ile haberleştirme özellikleri eklenmiştir. Tüm dataların kayıt ve web gönderim süreleri ayarlanabilir."],
         ["NT-HT13/14","Sıcaklık ve nem için seri 4–20 mA çıkışı alınabilecek özel seri ürünlerdir; pratik uygulama ve ekonomiktir."]
       ],
       specs:[["Ekran Özellikleri","2 × 14 mm 4 dijit özel ekran (15 m okuma mesafesi)"],["Sinyal Çıkışı","Sıcaklık ve nem için 4–20 mA / 0–10 V veya 2×3 A röle + RS485 Modbus"],["Koruma Sınıfı","IP65 (ops. IP68)"],["Hassasiyet","%0,2 °C, %3 rH"],["Sıcaklık Ölçüm Aralığı","−40…+120 °C"],["Nem Ölçüm Aralığı","0–100 %rH"],["Besleme","24 VDC (12…36 VDC / 100–240 VAC modele göre)"],["Bağlantı Şekli","Duvar montaj, dişli montaj, hat montajı"],["Prob Materyali","Paslanmaz çelik, pirinç filtreli, dişli paslanmaz çelik, PVC sensör gövdesi"],["Filtre Malzemesi","Paslanmaz veya PTFE"],["Kablo Boyu","5 m (ops. 30 m'ye kadar)"]],
       uses:"Soğuk hava depoları, kümes hayvancılığı, ofis sıcaklık-nem izleme sistemleri, izole odalar.",
       sectors:"Gıda depolama, tarım ve hayvancılık, bina otomasyonu, ilaç ve lojistik."}
     ]},

    /* ===================== PROSES KONTROL ===================== */
    {id:"kontrol", kicker:"06", title:"Proses Göstergeler ve Kontrol Cihazları", sub:"İzleme, kontrol ve sinyal aktarımı", glyph:"panel",
     products:[
      {code:"NT-TCS / NT-FBT", img:"assets/kat/p27_2.png", name:"Debi ve Akış Göstergeleri", glyph:"panel",
       desc:"Endüstriyel süreçlerde yapılan ölçümlemelerin izlenmesi, kontrol edilmesi ve sinyal aktarımları için tasarlanmış kumanda enstrümanlarıdır. Anlık ve toplam akış miktarını izleyebilmek, farklı çıkış seçenekleri ile kontrol edebilmek ve aktarmak amaçlı geliştirilmiş cihazlardır.",
       specs:[["Ürün Kodu","NT-TCS / NT-FBT / NT-TCS37"],["Boyut","72×72 mm / 96×96 mm / 36×72 mm"],["Gösterge","2×6 dijit (8 mm) / 6 dijit (8 mm)"],["Anahtarlama","2×8 A röle / 1×8 A röle"],["Analog Çıkış","4–20 mA / 0–20 mA"],["Haberleşme","RS485 Modbus ASCII/RTU"],["Besleme Gerilimi","12 VDC – 24 VDC – 220 VAC"],["Sayma Hızı","10 kHz"]],
       uses:"Debi ve akış ölçümlerinin panelden izlenmesi ve kontrolü.",
       sectors:"Arıtma tesisleri, gıda sanayi, kimya sanayi, makine imalatı."},

      {code:"NT-DI / NT-UPI", img:"assets/kat/p27_3.png", name:"Üniversal Girişli Göstergeler", glyph:"panel",
       desc:"Üniversal tüm giriş tiplerine göre (sıcaklık ve analog çıkışlı sensörlere uyumlu) proses değerlerinin gözlemlenmesi ve kontrolü için üretilmiş basit tipte kontrol göstergeleridir. Farklı alarm seçenekleri tanımlanarak çıkış alınabilir.",
       specs:[["Ürün Kodu","NT-DI 377 / NT-UPI"],["Boyut","35×77 mm / 48×48, 72×72, 48×96, 96×48 mm"],["Gösterge","4 dijit (10 mm) / 2×4 dijit (üst 14 mm, alt 10 mm)"],["Giriş","Termokupl, PT100, PTC, NTC, 4–20 mA, 0–10 V, ohm"],["Anahtarlama","4×8 A röle / 2×8 A röle (ops. 3×8 A)"],["Analog Çıkış","4–20 mA, 0–20 mA, 0–10 V"],["Haberleşme","RS485 Modbus ASCII/RTU"],["Doğruluk","%0,5 / %0,3"],["Besleme Gerilimi","12 VDC – 24 VDC – 220 VAC"]],
       uses:"Sıcaklık ve analog sensörlerin panel üzerinden izlenmesi.",
       sectors:"Makine imalatı, gıda, kimya, enerji tesisleri."},

      {code:"NT-EPD 11", img:"assets/kat/p28_2.png", name:"Kompakt Üniversal Göstergeler", glyph:"panel",
       desc:"NT-EPD 11 dijital gösterge, transmitterlerden 4–20 mA sinyalini alarak istenen ölçüm birimine çevirmek ve görüntülemek için kullanılır. DIN 43650 soket bağlantılı 2 kablolu transmitterlere kolayca takma/çıkarma için tasarlanmıştır. Ürün yüksek doğruluk, kararlılık ve kolay kullanım özelliklerine sahiptir. Basınç veya diğer transmitterlere gösterge ve alarm set noktaları eklemek için uygun bir çözümdür.",
       specs:[["Uygulamalar","4–20 mA akım değeri veya yüzde görüntüleme, 2 adet bağımsız alarm/switch çıkışı"],["Giriş Sinyali","4–20 mA (2 kablolu)"],["Güç Kaynağı","4–20 mA 2 kablolu hat beslemesi, maks. basınç düşümü 8 VDC"],["Çıkış Sinyali","4–20 mA 2 kablolu sinyal çıkışı"],["Saha Çalışması","3 buton, bütün parametreler yerinde değiştirilebilir"],["Gösterge","Çift sıralı 5 bit/8 bit, 7/16 segment arkadan aydınlatmalı LCD, −19999~99999"],["Doğruluk ve ADC","%0,1 FS ±1 bit / 24 bit"],["Switch Adedi","2 yönlü PNP / NA"],["Switch Fonksiyonu","Yüksek ayar, düşük ayar, pencere fonksiyonu, histerezis"],["Ölçüm Birimleri","kPa, MPa, Pa, bar, mbar, psi, mH₂O, Torr, atm, kg, N, °C, °F, K, %RH, PPM, pH, m, mm, m/s, Ω, mV, V"]],
       uses:"Transmitterlere saha göstergesi ve alarm eklenmesi.",
       sectors:"Tüm endüstriyel proses uygulamaları."},

      {code:"NT-UPC / NT-TC / NT-PRFC", img:"assets/kat/p28_4.png", name:"Kontrol Cihazları", glyph:"controller",
       desc:"Sıcaklık ve analog çıkışlı sensörlerle ölçüm yapılan uygulamalarda proses değerlerinin gözlemlenmesi ve kontrolü için kullanılır. Kontrol çıkışı için On-Off, oransal (P), oransal + integral (PI), oransal + integral + türev (PID) çalışma şekilleri mevcuttur. Modbus haberleşme protokolü ile diğer sistemlerle entegre çalışabilir.",
       variants:[
         ["Üniversal Girişli Kontrol Cihazları","NT-UPC 4 / 7 / 49. 48×48, 72×72, 48×96 mm. Üniversal proses girişi 4…20 mA, 0…20 mA, 0…60 mV, 0…10 V, termokupl (J,K,R,S,T), PT100 (hat kompanzasyonlu). 2 röle çıkışı 8 A@250 VAC, analog çıkış, RS485 Modbus."],
         ["Sıcaklık Kontrol Cihazları","NT-TCS 377-X / NT-TC 4 / NT-TC 38. Tüm termokupl tipleri, PT100, PTC ve NTC girişi. ON/OFF veya zaman oransal (P) çalışma, ısıtma/soğutma fonksiyonu, alarm çıkışı ve gecikme zamanı tanımlanabilir."],
         ["Adım Kontrol Cihazları","NT-PRFC7. 72×72 mm. Adım/profil kontrol cihazı; endüstride sıcaklık veya herhangi bir proses değerinin ölçülmesi ve kontrol edilmesi için tasarlanmıştır. 20 adıma kadar profil."]
       ],
       specs:[["Doğruluk","%0,3 – %0,5"],["Kontrol Çıkışı","Röle çıkışı (8 A@250 VAC)"],["Analog Çıkış","4…20 mA, 0…20 mA"],["Haberleşme","RS485 Modbus RTU/ASCII"],["Çözünürlük","1 °C / 0,1 °C (PT100, 0…100 °C aralığı için)"],["Besleme Gerilimi","220 VAC, 24 VDC, 12 VDC (siparişte belirtilmelidir)"]],
       uses:"Sıcaklık ve proses değeri kontrolü, ısıtma-soğutma otomasyonu.",
       sectors:"Fırın ve ısıl işlem tesisleri, gıda, plastik, kimya, makine imalatı."},

      {code:"NT-UT / NT-LT / NT-TT", img:"assets/kat/p28_6.png", name:"Sinyal Dönüştürücüler", glyph:"converter",
       desc:"Analog ve dijital sinyal çıkışlarının, farklı giriş seçeneği bulunan sistemlere çevrilmesi ve taşınması amacıyla tasarlanmış cihazlardır. Kolay montajlı olması ve dış etkenlere karşı izole edilmiş olması bu tip çevirici cihazlarda doğru uygulama için önemlidir.",
       variants:[
         ["Ray Tipi Üniversal Sinyal Dönüştürücüler","NT-UT 17 / 18. Tüm termokupl ve rezistans termo elemanlar, 0/4–20 mA akım ve 0–50 mV gerilim girişlerini 0/4–20 mA ve 0/2–10 V gerilim çıkışlarına dönüştürür. Tek ve çift kanal seçenekleri; 1500 V 3 yollu galvanik izolasyon."],
         ["Kafa İçi Sinyal Dönüştürücüler","NT-LT / NT-TT Serisi. B, E, J, K, L, N, R, S, T, U tiplerinde termokupllar, PT100 rezistans termo elemanlar ve direnç çıkışı üreten seviye sensörlerinde 4–20 / 20–4 mA çıkışları elde etmek amacıyla tasarlanmıştır. Buat veya yuva içi montaja uygundur."]
       ],
       specs:[["Besleme Gerilimi","8 – 36 VDC"],["Üniversal Analog Giriş","Termokupl B,E,J,K,L,N,R,S,T,U; PT100; akım 0/4–20 mA; gerilim 0–50 mV"],["Giriş Çözünürlüğü","16 bit"],["Örnekleme Periyodu","100 – 400 ms"],["Analog Çıkış","0/4–20 mA, 0/2–10 V, 20–4 mA"],["Yük Direnci","Akım RL ≤ 600 Ω, gerilim RL ≥ 1 MΩ"],["Doğruluk","PT100 ±%0,2 MV ±0,3 °C; T/C, mV ±%0,2 MV ±1 °C"],["Isıl Sürüklenme","±100 ppm/°C"],["Galvanik İzolasyon","1500 V"],["Hafıza","100 yıl, 100.000 yenileme"],["Tepki Süresi","0,2 … 120 s"],["Çalışma Sıcaklığı","−40…+85 °C"]],
       uses:"Sinyal seviyesi ve tipi dönüşümü, uzun mesafe sinyal taşıma, galvanik izolasyon.",
       sectors:"Tüm endüstriyel otomasyon uygulamaları."}
     ]},

    /* ===================== MEKANİK KONTROL ===================== */
    {id:"mekanik", kicker:"07", title:"Mekanik Kontrol", sub:"Aktüatörler, valfler ve vanalar", glyph:"valve",
     products:[
      {code:"NT-VT / NT-ATG / NT-KE100", img:"assets/kat/p29_2.png", name:"Aktüatörler", glyph:"actuator",
       desc:"Bir sistemin veya mekanizmanın açma-kapama işlemini yapabilmesini sağlayan tahrik elemanlarıdır. Kullanım ve uygulama alanlarına göre farklı tipler mevcuttur. Genellikle hidrolik, pnömatik ve elektrik akımı ile bu kontrolü kumanda ederler.",
       variants:[
         ["Pnömatik Aktüatör (NT-VT)","Alüminyum gövde ve piston, alaşımlı çelik mil, Namur solenoid valf bağlantısı, 5–8 bar besleme basıncı, ISO 5211 vana bağlantısı, 90° ±5° dönüş açısı."],
         ["Pnömatik Aktüatör (NT-ATG)","Alüminyum gövde ve piston, Namur switch kutusu bağlantısı, ISO 5211 vana bağlantısı, 180° dönüş açısı."],
         ["Elektrikli Aktüatör (NT-KE100)","Çeyrek turlu elektrik aktüatör; alüminyum gövde (polyester boya kaplı), ISO 5211 bağlantı, IP67 koruma, 220 VAC besleme, −20…+70 °C ortam, 20–500 Nm tork, standart 2 adet sınır anahtarı, F sınıfı motor."]
       ],
       specs:[["Gövde ve Piston","Alüminyum"],["Çalışma Sıcaklığı","−20…+80 °C"],["Mil Materyali","Alaşımlı çelik"],["Besleme Basıncı","5 – 8 bar (pnömatik)"],["Vana Bağlantısı","ISO 5211"],["Koruma Sınıfı","IP67 (elektrikli)"],["Tork Değerleri","20 – 500 Nm"]],
       uses:"Vana ve kelebek vana tahriki, otomatik hat kontrolü.",
       sectors:"Arıtma tesisleri, kimya ve petrokimya, gıda sanayi, enerji tesisleri."},

      {code:"NT-1901 / NT-7901 / NT-PV250", img:"assets/kat/p29_4.png", name:"Valfler", glyph:"solenoid",
       desc:"Bir ya da daha fazla orifis açıp kapatarak, akışkanın yolunu açıp kapayan ya da değiştiren elektrik veya pnömatik kontrollü mekanik devre elemanlarıdır.",
       variants:[
         ["Pirinç Gövdeli Solenoid Valf (NT-1901)","Pirinç gövde, NK-NA pozisyon, 1/8\"…2\" ölçü (ops. hortum bağlantısı), NBR/EPDM/HNBR/Viton/Teflon/Rubin/POM diyafram, 12-24 VAC/DC … 220 VAC bobin. Pilot kumandalı, direkt etkili, diyafram kumandalı çalışma şekilleri."],
         ["Paslanmaz Gövdeli Solenoid Valf (NT-7901)","Paslanmaz çelik gövde, NK-NA pozisyon, 1/8\"…1\" ölçü, Viton/NBR/Teflon diyafram, 12-24 VAC/DC … 220 VAC bobin."],
         ["Patlaç Valf (NT-PV250)","Alüminyum gövde, NK pozisyon, 3/4\"'den 4\"'e kadar dişli, flanşlı veya rakor bağlantı, silikon/kauçuk diyafram, 12 VAC/DC … 220 VAC bobin."]
       ],
       specs:[["Gövde Materyali","Pirinç / paslanmaz çelik / alüminyum"],["Pozisyon","NK – NA"],["Ölçü","1/8\" … 4\""],["Diyafram / Conta","NBR, EPDM, HNBR, Viton, Teflon, silikon, kauçuk"],["Bobin","12, 24 VAC/DC … 220 VAC"]],
       uses:"Sıvı ve gaz hatlarında açma-kapama, filtre temizleme (patlaç), dozaj kontrolü.",
       sectors:"Su ve arıtma, çimento ve toz toplama tesisleri, gıda sanayi, makine imalatı."},

      {code:"NT-VLV", img:"assets/kat/p29_6.png", name:"Vanalar", glyph:"valve",
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
       sectors:"Su ve atık su, kimya ve petrokimya, gıda sanayi, enerji tesisleri, madencilik."}
     ]},

    /* ===================== EL TİPİ + OTOMASYON ===================== */
    {id:"eltipi", kicker:"08", title:"El Tipi Ölçüm Cihazları ve Kayıt", sub:"Saha ölçümü, analiz ve veri kaydı", glyph:"handheld",
     products:[
      {code:"NT-IRT", img:"assets/kat/p30_1.png", name:"Lazerli Sıcaklık Ölçer", glyph:"laser",
       desc:"Temassız (kızılötesi) algılama yapan sıcaklık ölçerdir. −60…+2000 °C sıcaklık aralıklarında veri okuması sağlayabilen modeller mevcuttur; el tipi, kolay kullanımlı ve ergonomik ürünlerdir.",
       specs:[["Ölçüm Aralığı","−60 … +2000 °C (modele göre)"],["Ölçüm Tipi","Temassız kızılötesi"],["Kullanım","El tipi, ergonomik"]],
       uses:"Makine yüzey sıcaklığı, elektrik panosu kontrolü, gıda güvenliği denetimi.",
       sectors:"Bakım-onarım, gıda, enerji, ağır sanayi."},

      {code:"NT-ANM", img:"assets/kat/p30_2.png", name:"Anemometre", glyph:"anemo",
       desc:"Açık sahalarda veya hava akışının geliştiği tünellerde rüzgâr/hava hızı ölçümlemesi yapan kolay kullanımlı cihazlardır. Bu tip cihazların birçok modelinde sıcaklık ve nem değerleri ölçümü de yapılır.",
       specs:[["Ölçüm","Hava/rüzgâr hızı, sıcaklık, nem"],["Kullanım","El tipi"]],
       uses:"Havalandırma kanalı ölçümü, tünel ve maden havalandırması, HVAC devreye alma.",
       sectors:"İklimlendirme, madencilik, inşaat, enerji."},

      {code:"NT-SLM", img:"assets/kat/p30_3.png", name:"Ses (Desibel) Ölçer", glyph:"sound",
       desc:"Ses şiddetinin ölçümlenmesi ve tespit edilmesi için geliştirilmiş el tipi kompakt cihazlardır. Isı, nem ve ışık gibi farklı ölçüm parametreleriyle bir araya getirilmiş farklı modeller mevcuttur.",
       specs:[["Ölçüm","Ses şiddeti (dB), ops. ısı-nem-ışık"],["Kullanım","El tipi kompakt"]],
       uses:"İş sağlığı ve güvenliği ölçümleri, çevresel gürültü denetimi.",
       sectors:"İSG, belediye ve kamu, endüstriyel tesisler."},

      {code:"NT-GLD", img:"assets/kat/p30_4.png", name:"Gaz Kaçak Dedektörü", glyph:"gasdetect",
       desc:"Sızıntısı ile insan sağlığını tehlikeye atabilecek karbonmonoksit, amonyak, metan, propan gibi gazların kaçak tespitini sağlayabilen cihazlardır. Ses ve ışıkla, belirtilen seviyenin üstüne çıkması durumunda alarm verebilir.",
       specs:[["Algılanan Gazlar","CO, amonyak, metan, propan vb."],["Alarm","Sesli ve ışıklı"],["Kullanım","El tipi"]],
       uses:"Gaz hattı kaçak kontrolü, kapalı alan güvenliği, bakım denetimi.",
       sectors:"Doğalgaz, petrokimya, soğutma tesisleri, bina yönetimi."},

      {code:"NT-AQM", img:"assets/kat/p30_5.png", name:"pH, EC, TDS ve Klor Ölçerler", glyph:"analytic",
       desc:"pH, iletkenlik, tuzluluk, çözünmüş oksijen, klor vb. analitik ölçümlemeler için geliştirilmiş cihazlardır. El tipi, laboratuvar tipi ve online (sürekli) ölçüm için tasarlanmış modeller mevcuttur. Bazı modellerinde kontrol ve izleme amaçlı analog veya dijital sinyal çıkışlı seçenekler bulunur.",
       specs:[["Ölçüm Parametreleri","pH, EC, TDS, tuzluluk, çözünmüş oksijen, klor"],["Model Tipleri","El tipi, laboratuvar tipi, online"],["Çıkış","Ops. analog veya dijital sinyal"]],
       uses:"Su arıtma proses kontrolü, havuz ve içme suyu denetimi, laboratuvar analizi.",
       sectors:"Su ve atık su arıtma, gıda sanayi, kimya, belediye ve kamu."},

      {code:"NT-TAO", img:"assets/kat/p30_6.png", name:"Tarla Alan Ölçer", glyph:"gps",
       desc:"GPS sinyalleri sayesinde alan metrekare ölçümü yapabilen, pratik ve yüksek hassasiyetli üründür. Türkçe menüsü ve kullanıcı dostu ara yüzü ile tek butonla ölçüm alabilmenize olanak sağlar.",
       specs:[["Ölçüm","GPS tabanlı alan (m², dekar)"],["Arayüz","Türkçe menü, tek buton ölçüm"]],
       uses:"Tarla ve arazi alan hesabı, tarımsal planlama.",
       sectors:"Tarım, arazi yönetimi, kadastro uygulamaları."},

      {code:"NT-DLG", img:"assets/kat/p30_8.png", name:"Veri Kayıt Cihazları ve Datalogger", glyph:"logger",
       desc:"Tüm termokupl çeşitleri, rezistans termo elemanlar ve tüm üniversal analog giriş tiplerine göre çıkış üreten sensör gruplarının algıladığı verileri hafızasında saklayan; göstergeli modellerinde ekran üzerinden grafiksel veya tablo hâlindeki verileri izleyebilmeye olanak sağlayan cihazlardır. Birçok modelinde bilgisayar üzerinden verilerin incelenebilmesi için haberleşme çıkışları ve izleme yazılımları mevcuttur.",
       variants:[["Veri Kayıt Cihazları","2, 4, 6 … 40 kanal, 320×200 LCD ekran, izole edilmiş üniversal girişler, RS232 haberleşme, 2 GB USB disk ve 1 GB SD kart hafıza, 4–20 mA çıkış ve 24 VDC sensör beslemesi. Kayıt süresi 1 sn – 30 dk arası ayarlanabilir."],["Datalogger","İlaç ve gıda gibi ürünlerin anlık sıcaklık verilerini kaydedebilmek için tasarlanmıştır; genellikle sevkiyat sürecinde ısı değişimleri izlenir. −35…+70 °C, ±0,5 °C hassasiyet, IP67, EN 12830 uyumlu, uluslararası HACCP sertifikalı, 16.000 kayıt kapasitesi, 90 gün çalışma süresi."]],
       specs:[["Kanal Sayısı","2, 4, 6 … 40"],["Ekran","320×200 LCD (kanal sayısına göre değişkenlik gösterir)"],["Giriş","İzole edilmiş üniversal girişler"],["Haberleşme","RS232"],["Hafıza","2 GB USB disk, 1 GB SD kart"],["Tepki Süresi ve Doğruluk","1 sn / ±0,2"],["Çıkış","4–20 mA, 24 VDC sensör besleme"],["Kayıt Süresi","1 sn – 30 dk arası ayarlanabilir"],["Besleme","220 VAC, ops. 24 VDC"]],
       uses:"Proses veri kaydı, soğuk zincir izleme, kalite dokümantasyonu.",
       sectors:"Gıda ve ilaç sanayi, lojistik, ısıl işlem tesisleri, laboratuvarlar."}
     ]}
  ],

  closing:{
    title:"Otomasyon ve Tasarım",
    body:["Net Flow, VFA Elektronik'in 12 yıllık üretim tecrübesini ihracat pazarlarına taşıyan markasıdır. Ölçüm enstrümanı tedarikinin yanında, tesisinizin ihtiyacına göre komple otomasyon çözümleri tasarlar ve devreye alır. Saha enstrümantasyonundan pano imalatına, PLC ve SCADA yazılımından devreye alma ve eğitime kadar süreçlerin tümünü tek elden yürütüyoruz.",
      "Proje sürecinde tüm gücümüz ve yeteneğimizle; doğru ölçüm, güvenilir veri ve sürdürülebilir kontrol hedefiyle çalışıyoruz. Mevcut tesisinizin modernizasyonu veya yeni yatırımınızın enstrümantasyon tasarımı için mühendislik ekibimiz hizmetinizdedir."],
    items:[["Saha Enstrümantasyonu","Debi, seviye, basınç, sıcaklık ve analiz ölçümlerinin proje bazlı seçimi ve tedariki."],["Pano İmalatı","Kumanda ve kontrol panolarının tasarımı, imalatı ve saha montajı."],["PLC ve SCADA","Proses otomasyonu yazılımı, veri izleme ve raporlama sistemleri."],["Devreye Alma","Saha montajı, kalibrasyon, test ve kullanıcı eğitimi."]]
  }
};
