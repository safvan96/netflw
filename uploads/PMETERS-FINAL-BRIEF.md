# PMETERS.COM - FINAL BRIEF (Claude Design icin)
# Process Meters | Endustriyel Olcum Cihazlari | Turk Mali
# SON GUNCELLEME: 2026-06-14 | VERILER DOGRULANMISTIR

> Bu dosya sitenin tamami icin tek kaynak belgedir.
> SEO, icerik, urun detaylari, UX stratejisi ve tasarim yonlendirmesi icerir.
> Claude Design bu dosyayi temel alarak siteyi tasarlayacak ve kodlayacak.
>
> VERI KAYNAKLARI:
> - vfaelektronik.com urun sayfalari (dogrudan cekilmistir)
> - TURKAK akreditasyon belgesi (AB-0354-K, PDF incelenmistir)
> - Endustri teknik literatur (liner/elektrot secim rehberi)
>
> VFA MEVCUT BELGELER (vfaelektronik.com/TR/belgelerimiz):
> 1. Yerli Mali Belgesi
> 2. VFA Marka Tescil
> 3. ISO 9001 Belgesi
> 4. CE Beyani (urun sayfalarinda belirtilmis, ayri belge no yok)

---

## BOLUM 1: GENEL BILGILER

| Alan | Deger |
|------|-------|
| Domain | pmeters.com |
| Marka | PM - Process Meters |
| Slogan | "PM us" (= bize ulasin, cift anlamli) |
| Diller | Ingilizce (ana), Arapca (RTL), Rusca |
| Turkce | YOK - bilerek eklenmedi, hedef yurtdisi |
| Uretici | VFA Elektronik, Konya, Turkiye |
| Kalibrasyon | Calibroom Lab (TURKAK AB-0354-K, ISO/IEC 17025:2017) |
| Kalibrasyon Kapasitesi | 1 - 350 m3/h, belirsizlik ±0.27% |
| Akreditasyon Gecerliligi | 06.04.2030'a kadar |
| Uluslararasi Taninirlik | EA MRA + ILAC MRA = 100+ ulkede gecerli |

---

## BOLUM 2: SITE HARITASI

```
/                                          → Ana Sayfa
/products/                                 → Tum Urunler (filtrelenebilir grid)
│
├── /products/electromagnetic-flow-meter/             → HERO URUN (3D model)
├── /products/food-grade-flow-meter/                  → Gidaya Uygun Debimetre
├── /products/battery-powered-flow-meter/             → Pilli Debimetre
├── /products/insertion-flow-meter/                   → Daldirma Tip Debimetre
├── /products/partially-filled-flow-meter/            → Kismi Dolgulu Debimetre
├── /products/zero-straight-run-flow-meter/           → 0D Debimetre
├── /products/miniature-flow-meter/                   → Minyatur Debimetre
├── /products/slurry-flow-meter/                      → Bulamac Debimetre
│
├── /products/magnetic-bypass-level-indicator/         → Standart Manyetik Bypass
├── /products/ex-proof-bypass-level-indicator/         → Ex-Proof Bypass
├── /products/boiler-bypass-level-indicator/           → Kazan Tipi Bypass
├── /products/float-level-transmitter/                → Samandirali Transmitter
├── /products/motorized-level-sensor/                 → Motorlu Seviye Sensoru
├── /products/magnetic-level-sensor/                  → Manyetik Seviye Sensoru
│
├── /products/mini-level-switch/                      → Mini Seviye Salteri
├── /products/float-level-switch/                     → Samandirali Salter
├── /products/paddle-motor-level-switch/              → Pedalli Motor Salter
│
├── /products/angle-sensor/                           → Aci Sensoru (RCS Serisi)
├── /products/pressure-temperature-transmitter/       → Kombine P/T Transmitter
│
├── /certifications/                       → Sertifikalar (TURKAK, ISO, EA, ILAC)
├── /industries/                           → Sektorler
│   ├── /industries/water-treatment/
│   ├── /industries/oil-gas/
│   ├── /industries/food-beverage/
│   ├── /industries/chemical/
│   ├── /industries/mining/
│   └── /industries/municipal-water/
├── /about/                                → Hakkimizda
├── /contact/                              → Iletisim + Teklif Formu
└── /blog/                                 → Teknik Makaleler (SEO trafik)
```

---

## BOLUM 3: KULLANICI DENEYIMI (UX) STRATEJISI

### 3.1 Ziyaretci Profili

Bu siteye gelen kisiler muhendis, satin alma mudu veya tesis yoneticisidir.
Ariyorlar:
1. Urunu dogru tanimlayan teknik spec (spec sheet yerine gecebilecek detay)
2. Urunun kendi uygulamalarina uygun olup olmadigini anlama
3. Sertifika/akreditasyon guvencesi
4. Hizli fiyat teklifi alma yolu

### 3.2 Donusum (Conversion) Stratejisi

```
BIRINCIL HEDEF: Teklif Formu doldurmak ("Request a Quote")
IKINCIL HEDEF: WhatsApp mesaj gondermek
UCUNCUL HEDEF: PDF datasheet indirmek (email karsiligi - lead capture)

DONUSUM ELEMANLARI (Her sayfada bulunmali):
─────────────────────────────────────────
1. Sticky Header'da "Request Quote" butonu (her zaman gorunur)
2. Sayfa sonunda tam genislik CTA blogu
3. Sag alt kosede WhatsApp floating butonu
4. PDF indirmelerde email isteme popup'i (gated content)
5. Urun sayfalarinda yan panel / sticky sidebar teklif formu (desktop)
6. Mobilde alt barda sabit "Get Quote" butonu

GUVEN SINYALLERI (trust signals):
─────────────────────────────────────────
1. TURKAK rozeti - her urun sayfasinda
2. "Made in Turkey" badge
3. "100+ Countries Recognition" metni
4. ISO/IEC 17025:2017 badge
5. EA + ILAC MRA badge
6. Kalibrasyon belirsizligi degeri (±0.27%)
7. Uretim tesisi fotografi (varsa)
8. Referans listesi / musteri logolari (varsa)
```

### 3.3 Navigasyon & Bilgi Mimarisi

```
HEADER (Sticky, scroll'da daralan):
────────────────────────────────
[PM Logo]  Products ▾  Industries  Certifications  About  Contact  [Request Quote btn]  [EN|AR|RU]

PRODUCTS MEGA MENU:
├── Flow Meters ─────────────────────────
│   ├── Electromagnetic Flow Meter ← BESTSELLER rozeti
│   ├── Food-Grade Flow Meter
│   ├── Battery-Powered Flow Meter
│   ├── Insertion Flow Meter
│   ├── Partially Filled Flow Meter
│   ├── Zero Straight-Run Flow Meter
│   ├── Miniature Flow Meter
│   └── Slurry Flow Meter
│
├── Level Instruments ───────────────────
│   ├── Magnetic Bypass Level Indicator
│   ├── Ex-Proof Bypass Level Indicator
│   ├── Boiler-Type Bypass Level Indicator
│   ├── Float Level Transmitter
│   ├── Motorized Level Sensor
│   └── Magnetic Level Sensor
│
├── Level Switches ──────────────────────
│   ├── Mini Stainless Steel Level Switch
│   ├── Float Level Switch
│   └── Paddle Motor Level Switch
│
└── Process Instruments ─────────────────
    ├── Angle Sensor (RCS Series)
    └── Pressure-Temperature Transmitter
```

### 3.4 Mobil UX Gereksinimleri

```
- Hamburger menu (mega menu → accordion)
- 3D model mobilde de calisir (touch ile dondurme)
- Alt barda sabit butonlar: [WhatsApp] [Get Quote]
- Teknik tablolar: yatay kaydirma veya accordion acilir/kapanir
- Urun kartlari tek sutun
- Telefon numarasi tiklanabilir (tel: link)
- Form alanlari minimum - mobilde 5 alan yeterli
```

### 3.5 Sayfa Hizi & Performans

```
Core Web Vitals Hedefleri:
  LCP  < 2.5s
  INP  < 200ms
  CLS  < 0.1

Gorsel: WebP/AVIF, hero max 200KB, urun max 100KB
3D Model: GLB format, max 5MB, lazy-load, fallback statik gorsel
Font: preload, Inter + Noto Sans Arabic + font-display: swap
Critical CSS: inline
```

---

## BOLUM 4: SEO ALTYAPISI

### 4.1 Meta Tag Yapisi

```html
<!-- ANA SAYFA -->
<title>Industrial Flow Meters & Level Sensors | TURKAK Certified | Made in Turkey</title>
<meta name="description" content="TURKAK-accredited electromagnetic flow meters, magnetic bypass level indicators, and process instruments. ISO 17025 certified calibration. Serving Middle East, Central Asia & beyond.">

<!-- URUN SAYFASI ORNEGI -->
<title>Electromagnetic Flow Meter | DN3-DN3000 | ±0.2% Accuracy | TURKAK Certified</title>
<meta name="description" content="High-precision electromagnetic flow meter for water treatment, industrial processes & municipal systems. DN3 to DN3000mm. TURKAK accredited calibration. Made in Turkey.">

<!-- HREFLANG (her sayfada) -->
<link rel="alternate" hreflang="en" href="https://pmeters.com/...">
<link rel="alternate" hreflang="ar" href="https://pmeters.com/ar/...">
<link rel="alternate" hreflang="ru" href="https://pmeters.com/ru/...">
<link rel="alternate" hreflang="x-default" href="https://pmeters.com/...">
```

### 4.2 Schema.org (Organization + Product + Certification)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Process Meters",
  "url": "https://pmeters.com",
  "description": "Turkish manufacturer of industrial flow meters, level sensors, and process instruments with TURKAK-accredited calibration laboratory.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Fevzicakmak Mah. Aslim Cad.",
    "addressLocality": "Konya",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-332-235-1888",
    "contactType": "sales",
    "availableLanguage": ["English", "Turkish", "Arabic"]
  }
}
```

Her urun icin Product schema, sertifika sayfasi icin EducationalOccupationalCredential schema eklenecek. Detaylar SEO-YAPILANDIRMA.md dosyasinda mevcut.

### 4.3 Anahtar Kelimeler

```
INGILIZCE (Birincil):
  electromagnetic flow meter, magnetic bypass level indicator,
  flow meter manufacturer Turkey, TURKAK certified instruments,
  industrial flow sensor, water treatment flow meter,
  battery powered flow meter, insertion flow meter,
  level transmitter, process instruments Turkish manufacturer

ARAPCA:
  عداد تدفق كهرومغناطيسي، مقياس التدفق، مستشعر المستوى،
  أجهزة القياس الصناعية، معالجة المياه، صناعة تركية

RUSCA:
  электромагнитный расходомер, датчик уровня,
  промышленные приборы, турецкий производитель,
  водоподготовка, сертификат TÜRKAK
```

### 4.4 Teknik SEO

```
- SSL (HTTPS) zorunlu
- robots.txt + sitemap.xml
- Canonical URL'ler
- Alt text tum gorsellerde
- Internal linking (ilgili urunler arasi)
- 404 sayfasi tasarimi
- Google Analytics 4 + Search Console
- Structured data test (Rich Results Test)
```

---

## BOLUM 5: TASARIM YONLENDIRMESI

### 5.1 Renk Paleti

```
ANA:
  Koyu Lacivert     #0A1628  → Header, footer, ana metin
  Endustri Mavisi   #1E88E5  → Butonlar, linkler, CTA
  Beyaz             #FFFFFF  → Ana arka plan
  Acik Gri          #F5F7FA  → Alternatif section arka plan

YARDIMCI:
  Basari Yesili     #00C853  → "In Stock", "Certified" badge
  Altin             #F9A825  → "Made in Turkey" badge, vurgular
  Koyu Gri          #546E7A  → Ikincil metin
  WhatsApp Yesili   #25D366  → WhatsApp butonu
```

### 5.2 Tipografi

```
Basliklar: "Inter" veya "Plus Jakarta Sans" - Bold/Semibold
Govde:     "Inter" - Regular 16px
Teknik:    "JetBrains Mono" veya "IBM Plex Mono" - tablo/spec degerleri
Arapca:    "Noto Sans Arabic" veya "IBM Plex Arabic"
Rusca:     "Inter" Kiril destekli
```

### 5.3 Tasarim Dili

```
STIL: Apple temizligi + Siemens ciddiyeti. Minimalist endustriyel.
      Bol whitespace. Az eleman, guclu etki.

KARTLAR:  border-radius: 12-16px, hafif golge, hover'da yukselme
BUTONLAR: Birincil mavi, ikincil seffaf+border, CTA gradient
IKONLAR:  Lucide veya Phosphor Icons (line style, 24px)
          Uygulama alanlari icin ozel SVG (su damlasi, petrol, fabrika vs)
```

### 5.4 Her Urun Sayfasinin Farkli Arka Plan Temasi Var

Her urun sayfasinin hero bolumu farkli renk/tema kullanir.
Bu sayfalar arasinda gezinirken "her urun farkli bir dunya" hissi yaratir.
Detaylar asagida urun bazinda belirtilmistir.

---

## BOLUM 6: ANA SAYFA YAPISI

```
SECTION 1 - HERO (Tam ekran)
─────────────────────────────
Sol: Baslik + aciklama + 2 buton (Request Quote + View Products)
Sag: 3D debimetre modeli (veya yuksek kalite urun fotografi)
Arka plan: Koyu lacivert gradient, hafif grid/blueprint pattern
Alt: Guven seridi → TURKAK + ISO + EA + ILAC logolari yan yana

SECTION 2 - URUN VITRINI
─────────────────────────────
Baslik: "Our Products"
Grid: Elektromanyetik debimetre buyuk (featured), diger kartlar kucuk
Her kart: Gorsel + isim + 1 satir + "Learn More"
Hover: kart buyur, golge artar

SECTION 3 - NEDEN BIZ (4 kolon USP)
─────────────────────────────
1. TURKAK Certified - akreditasyon ikonu
2. Made in Turkey - Turk bayragi/fabrika ikonu
3. 100+ Countries - dunya haritasi ikonu
4. R&D + Manufacturing - muhendis ikonu

SECTION 4 - SEKTORLER
─────────────────────────────
6 sektor karti (fotografli, overlay, baslik):
Water Treatment, Oil & Gas, Food & Beverage,
Chemical, Mining, Municipal Water

SECTION 5 - SERTIFIKALAR
─────────────────────────────
Ortada TURKAK belgesi gorseli (perspektif efekt)
Yaninda: Akreditasyon no, gecerlilik, kapsam
"View Certificate" butonu

SECTION 6 - CTA
─────────────────────────────
Koyu lacivert arka plan
"Ready to Upgrade Your Process Measurement?"
Mini form: Isim, Email, Ulke, Urun (dropdown)
veya WhatsApp butonu
```

---

## BOLUM 7: 3D MODEL DENEYIMI (Sadece Elektromanyetik Debimetre)

### Konsept: Scroll-Triggered 3D Product Explorer

Kullanici sayfayi kaydirdikca 3D debimetre modeli doner, parcalari ve
ozellikleri tek tek ortaya cikar. Apple urun sayfasi mantigi.

### 3D Model Gereksinimleri:
- Format: GLB/GLTF (web optimize)
- Boyut: max 5MB compressed
- Fallback: 3D yuklenemezse statik gorsel

### Scroll Asamalari:

```
%0  - GIRIS: Debimetre tam gorunum, hero shot
     "Electromagnetic Flow Meter"
     "Precision Engineered. TURKAK Certified."

%20 - DIS GOVDE: Model hafif doner, govde vurgulanir
     → "316L Stainless Steel Body"
     → "IP67/IP68 Protection"
     → "DN3 to DN3000mm Range"

%40 - OLCUM TEKNOLOJISI: Cutaway/seffaf gorunum
     → Ic yapi: bobinler, elektrotlar gorunur
     → "Faraday's Law of Electromagnetic Induction"
     → "No moving parts - zero maintenance"
     → "Minimum conductivity: 5 μS/cm"

%60 - BAGLANTI & CIKIS: Arka taraf, baglanti kutusu
     → "4-20mA / Pulse / RS485 / HART Output"
     → "LCD Display with backlight"
     → "Compact or Remote configuration"

%80 - KALIBRASYON: TURKAK rozet/hologram efekti
     → "TURKAK Accredited Calibration (AB-0354-K)"
     → "ISO/IEC 17025:2017"
     → "Uncertainty: ±0.27%"
     → "Recognized in 100+ countries via EA & ILAC MRA"

%100 - CTA: Model kuculerek kenara kayar
      → "Request a Quote" butonu
      → "Download Datasheet" butonu
```

### 3D Model Icin Gerekli Dosyalar (kullanicidan istenmeli):
- [ ] Debimetre 3D model dosyasi (.step / .obj / .fbx / .glb)
- [ ] Texture/malzeme dosyalari
- [ ] Cutaway (kesit) gorunum modeli (opsiyonel)
- [ ] TURKAK rozet grafigi (SVG)

---

## BOLUM 8: URUN KATALOGU - DETAYLI ICERIK

> ONEMLI: Asagidaki bilgiler vfaelektronik.com, endüstri kaynaklari ve
> teknik literaturden derlenmistir. "Abinden dogrulanmasi gerekenler"
> bolumunde isaretlenen maddeler ureticiden teyit alinmadan yayinlanmamalidir.

---

### ═══════════════════════════════════════════
### KATEGORI A: ELEKTROMANYETIK DEBIMETRELER
### ═══════════════════════════════════════════

Arka Plan Ailesi: Koyu Lacivert tonlari
Ikon Rengi: Elektrik Mavisi (#1E88E5)

---

### A1. STANDART SERI ELEKTROMANYETIK DEBIMETRE (VF-VMF)
**URL:** /products/electromagnetic-flow-meter/
**Badge:** BESTSELLER | MADE IN TURKEY | TURKAK CERTIFIED
**Tema:** Koyu lacivert (#0A1628), ince su akis cizgileri animasyonu

#### Teknik Ozellikler (vfaelektronik.com'dan dogrulanmistir):
| Ozellik | Deger |
|---------|-------|
| Urun Kodu | VF-VMF |
| Boru Capi | DN3 - DN3000 mm (1/8" - 120") |
| Akis Hizi | 0.2 - 15 m/s |
| Hassasiyet | ±0.5% (standart), ±0.3% ve ±0.2% (opsiyonel) |
| Govde Malzemesi | Karbon Celik / Paslanmaz Celik 304/316 (opsiyonel) |
| Bobin Malzemesi | %99 Bakir |
| Astar (Liner) | PTFE, Neoprene, Hard Rubber, F46, PFA, Polyurethane |
| Elektrot Malzemesi | SS316L, Hastelloy B, Hastelloy C, Titanium, Tantalum, Platinum |
| Baglanti | Flans (DIN, ANSI, JIS veya ozel) |
| Cikis Sinyali | 4-20mA, Pulse, RS485 Modbus (ops.), HART (ops.), Profibus (ops.) |
| Ekran | 3 satirli LCD (anlik + toplam debi) |
| Koruma Sinifi | IP65 / IP67 / IP68 (opsiyonel) |
| Besleme | AC 85-250V / DC 20-36V |
| Ortam Sicakligi | -25°C ~ +60°C |
| Basinc | 0.6 / 1.0 / 1.6 / 2.5 / 4.0 MPa |
| Iletkenlik | ≥5 μS/cm |
| Ozellikler | Bos boru algilama, ust/alt esik alarmlari |
| Kalibrasyon | TURKAK AB-0354-K, belirsizlik ±0.27% |
| Belgeler | CE beyani, ISO 9001 |

#### Calisma Prensibi:
Faraday'in elektromanyetik induksiyon yasasina dayanir. Iletken bir sivi,
manyetik alan icinden gectiginde, akis hizina orantili bir elektrik gerilimi
uretilir. Bu gerilim boru capina dik yerlestirilen iki elektrot tarafindan
algilanir ve debiye donusturulur. Boru icinde hicbir hareketli parca yoktur -
bu, basinc dusumu olmadan, asinimsiz ve bakimsiz bir olcum saglar.

#### Liner (Astar) Secim Rehberi (VFA'nin sundugu secenekler):
| Liner | Sicaklik | Uygun Uygulama |
|-------|----------|----------------|
| PTFE | -40°C ~ +180°C | Asidik/bazik kimyasallar, yuksek sicaklik, genel amacli. En yaygin secim. |
| Hard Rubber | -10°C ~ +80°C | Temiz su, atiksu, dusuk sicaklik uygulamalari. Ekonomik secim. |
| Neoprene | -10°C ~ +70°C | Atiksu, dusuk basincli su hatlari, genel amac. Ekonomik. |
| F46 (FEP) | -20°C ~ +120°C | Gida sanayi, orta sicaklik kimyasal uygulamalar. |
| PFA | -40°C ~ +180°C | Yuksek saflikta kimyasallar, farmasotik. PTFE'ye benzer, daha puruzsuz yuzey. |
| Polyurethane | -10°C ~ +60°C | Asindiricili slurry (madencilik, cimento). Mekanik dayanimi yuksek. |

#### Elektrot Secim Rehberi (VFA'nin sundugu secenekler):
| Elektrot | Uygun Medya |
|----------|-------------|
| SS 316L | Temiz su, atiksu, hafif kimyasallar. Standart ve en ekonomik secim. |
| Hastelloy B | Hidroklorik asit (HCl), fosforik asit, non-oksitleyici asitler. |
| Hastelloy C | Guclu oksitleyici asitler (HNO3, H2SO4), klor iceren siviler, agresif kimyasallar. |
| Titanium | Deniz suyu, tuzlu su, hipoklorit, seyreltik asitler. |
| Tantalum | Kral suyu (aqua regia), HF haric hemen her kimyasal. En dayanikli secim. |
| Platinum | Cok guclu korozif ortamlar, ozel uygulamalar. En pahali secim. |

NOT: Tungsten Carbide elektrot VFA urun yelpazesinde BULUNMAMAKTADIR.
Slurry uygulamalar icin Platinum-Iridium veya Hastelloy C onerilir.

#### Nerede ve Nasil Kullanilir (Gercek Uygulamalar):

**1. Su Aritma Tesisleri:**
Ham su girisinde toplam debi olcumu, filtrasyon oncesi/sonrasi hat izleme,
klor dozajlama hattinda kimyasal tuketim kontrolu, aritilmis su cikisinda
sebekelere verilen miktarin olcumu. Debimetreler genellikle SCADA sistemine
4-20mA veya RS485 Modbus ile baglanir ve operatorler kontrol odasindan
anlik debi ve toplam hacmi izler.

**2. Atiksu Aritma Tesisleri:**
Tesis girisinde gelen atiksu debisi, havalandirma havuzlarina beslenen debi,
camurun susuzlastirma unitesine pompalamasinda camur debi olcumu, aritilmis
suyun alici ortama (nehir/deniz) desjari debisi. Elektromanyetik debimetreler
katı parcacik, lif ve tortu iceren atiksu icin idealdir cunku boru icinde
hicbir engel yoktur - tikanma riski sifirdir.

**3. Belediye Su Dagitim Sebekeleri:**
Icme suyu arıtma tesisi cikisinda ana hatlarda debi olcumu, bolge sayac
istasyonlarinda (DMA - District Metering Area) su kaybini tespit etmek icin
basinc ve debi izleme. Buyuk caplarda (DN300+) insertion tip, kucuk caplarda
inline tip tercih edilir.

**4. Petrol & Gaz Sektoru:**
Rafineri proses hatlari, sogutma suyu devreleri, kimyasal dozajlama uniteleri,
atiksu aritma. Dikkat: Elektromanyetik debimetreler sadece ILETKEN sivilari
olcer. Ham petrol ve dogalgaz gibi iletken olmayan akiskanlar icin uygun
degildir. Ancak petrol sektorunde su bazli tum proseslerde yaygin kullanilir.

**5. Gida & Icecek Sanayi:**
Sut toplama hatlari, meyve suyu hattinda debi kontrolu, bira fermantasyon
sonrasi dolum hatlari, CIP (Clean-in-Place) hattinda yikama sivisi debi
izleme. Gidaya uygun modeller Tri-Clamp baglantili, PTFE/PFA astarli ve
316L elektrotludur.

**6. Ilac (Farmasotik) Sanayi:**
WFI (Water for Injection) hatlari, saf su (purified water) dagitim dongusu,
uretim reaktorlerine beslenen sivi miktari kontrolu. GMP uyumlu olcum
gerektirir. Minyatur modeller (DN3-DN15) mikro dozajlama icin kullanilir.

**7. Kimya Sanayi:**
Asit/baz dozajlama hatlari, reaktor besleme, proses suyu, sogutma devreleri.
Kimyasalin turune gore elektrot ve liner secimi kritiktir. Korozif
kimyasallarda Hastelloy C veya Tantalum elektrot secilir.

**8. Enerji Santralleri:**
Kazan besleme suyu, kondens donusu, sogutma kulesi devreleri, demineral su
hatlari. Yuksek sicaklik uygulamalarinda PTFE liner ile +180°C'ye kadar
calisiir.

**9. Tarimsal Sulama:**
Buyuk tarim isletmelerinde sulama suyu olcumu, kuyu debisi izleme, sulama
verimliliginin hesaplanmasi. Pilli modeller elektrik olmayan alanlarda tercih
edilir. Bazi modeller dahili datalogger ile gunluk/haftalik tuketim kaydeder.

#### SCADA/DCS Entegrasyonu:
```
Cikis Secenekleri:
  4-20mA  → En yaygin. Her PLC/DCS ile uyumlu. 2 kablolu.
            Anlik debi 4mA (sifir) - 20mA (tam skala) arasinda lineer sinyal.
  Pulse   → Sayac modunda toplam hacim izleme. Her pulse = X litre.
  RS485   → Modbus RTU protokolu. Birden fazla cihaz tek hat uzerinde.
            Uzun mesafe (1200m'ye kadar). Dijital iletisim.
  HART    → 4-20mA uzerine dijital sinyal bindirir. Eski 4-20mA altyapisi
            uzerinden ek teshis verisi gonderir. DCS'lerde yaygin.
```

---

### A2. GIDAYA UYGUN KELEPCE BAGLANTILI DEBIMETRE (VF-VMF-W)
**URL:** /products/food-grade-flow-meter/
**Badge:** FOOD GRADE | HYGIENIC TRI-CLAMP
**Tema:** Beyaz/acik gri (#F8F9FA), temiz ve steril his

#### Teknik Ozellikler (vfaelektronik.com'dan dogrulanmistir):
| Ozellik | Deger |
|---------|-------|
| Urun Kodu | VF-VMF-W |
| Boru Capi | DN10 - DN200 mm |
| Hassasiyet | ±0.5% (standart), ±0.3% ve ±0.2% (opsiyonel) |
| Akis Hizi | 0.1 - 15 m/s |
| Iletkenlik | >5 μS/cm |
| Govde | Karbon Celik / Paslanmaz Celik 304 |
| Bobin | Karbon Celik / SS304/316 (opsiyonel) |
| Astar | PTFE, FEP, PFA |
| Elektrot | SS316L, Hastelloy B, Hastelloy C, Titanium, Tantalum, Platinum |
| Baglanti | Tri-Clamp (Kelepce) |
| Koruma | IP65 / IP67, IP68 (opsiyonel) |
| Sicaklik | -20°C ~ +150°C (Teflon kaplamali) |
| Basinc | 0.6 - 1.6 MPa |
| Besleme | AC 85-250V / DC 20-36V |
| Iletisim | RS232, RS485 Modbus |
| Ekran | 3 satirli LCD |
| Belgeler | CE beyani, ISO 9001 |

> NOT: CIP/SIP destegi ve FDA uyumlulugu VFA sitesinde acikca belirtilmemistir.
> Urun gida hatlari icin tasarlanmis olarak tanimlanmakta, sut ve icecek
> sektorlerinde kullanildigi belirtilmektedir. Ancak FDA, 3-A veya EHEDG
> sertifikasi dokumante edilmemistir. Sitede bu iddialari yapmaktan kacinilmali,
> bunun yerine "Designed for food and beverage processing lines" ifadesi kullanilmali.

#### Nerede ve Nasil Kullanilir:

**Sut ve Mandira:**
Ciftlikten gelen ham sutun alim olcumu, pastorizasyon oncesi/sonrasi debi
izleme, yogurt/peynir uretim hattinda sut transferi. Tri-Clamp baglanti
hizli sokup takma ve hijyenik temizlik saglar. CIP (Clean-in-Place)
hattinda yikama sivisi debisini izleyerek temizlik dogrulamasi yapar.

**Icecek Uretimi:**
Meyve suyu konsantresi sulandirma hatlari, bira mayalama sonrasi dolum
oncesi debi kontrolu, gazli icecek uretiminde su hatti olcumu,
sarap/sirke uretim hatlari.

**Farmasotik:**
WFI (Water for Injection) hatlari, saf su dagitim dongusu, steril
uretim hatlari. Yuzey puruzsuzlugu (Ra ≤ 0.8μm) bakteri tutunmasini
onler. Otoklavlanabilir modeller SIP (Sterilize-in-Place) ile 130°C
buhar sterilizasyonuna dayanir.

**Kozmetik & Deterjan:**
Sampuan, krem, sivi sabun uretim hatlari. Viskoz sivilarda da dogru
olcum yapar.

---

### A3. PILLI ELEKTROMANYETIK DEBIMETRE
**URL:** /products/battery-powered-flow-meter/
**Badge:** NO EXTERNAL POWER | 5 YEAR BATTERY
**Tema:** Koyu yesil (#0D3B2F), saha/doga ortami hissi

#### Teknik Ozellikler (vfaelektronik.com'dan dogrulanmistir):
| Ozellik | Deger |
|---------|-------|
| Boru Capi | DN3 - DN600 mm |
| Hassasiyet | ±0.5% (standart), ±0.3% ve ±0.2% (opsiyonel) |
| Akis Hizi | 0.2 - 15 m/s |
| Iletkenlik | ≥5 μS/cm |
| Govde | Paslanmaz Celik 304 |
| Pil | 3.6V Lityum |
| Pil Omru | 5 yil |
| Alternatif Besleme | AC 85-250V / DC 20-36V (harici guc de baglanabilir) |
| Sicaklik (Rubber) | -25°C ~ +60°C |
| Sicaklik (Teflon) | -20°C ~ +150°C |
| Basinc | 0.6 / 1.0 / 1.6 / 2.5 / 4.0 MPa |
| Ekran | LCD ekran |

> NOT: GSM/NB-IoT/GPRS/LoRaWAN kablosuz iletisim modulu VFA sitesinde
> BELIRTILMEMISTIR. Dahili datalogger de dokumante edilmemistir.
> Sitede bu ozellikleri iddia etmeyin. Cikis sinyalleri (pulse, RS485 vs.)
> urun sayfasinda ayrica detaylandirilmamistir.

#### Nerede ve Nasil Kullanilir:

**Belediye Su Dagitimi - Uzak Noktalar:**
Sehir disi su hatlari, daglik bolgelerde su kaynaklari izleme, DMA
(District Metering Area) olcum istasyonlari. Elektrik altyapisi olmayan
yerlerde yillarca bakimsiz calisir. Opsiyonel GSM/GPRS modulu ile uzaktan
veri okuma imkani sunar.

**Tarimsal Sulama:**
Sulama kuyusu debi olcumu, damla sulama sistemi su tuketim izleme,
sulama birlikleri icin sulama kotasi takibi. Sahada elektrik yoksa pilli
model tek secenek olur. Datalogger ile haftalik/aylik tuketim raporlari
olusturulur.

**Su Kaybi Tespit (NRW - Non-Revenue Water):**
Sehir sebekelerinde kayip-kacak tespiti icin gecici veya kalici olcum
noktalarina kurulur. IP68 koruma ile yer altina gomulu rogar icine
montajlanabilir. Bazi modeller geri akis (reverse flow) tespiti yaparak
kacak noktasini lokalize etmeye yardimci olur.

**Gecici Saha Olcumleri:**
Insaat sahalarinda su tuketim takibi, gecici boru hatlarinda test olcumu.
Pil ile calistigindan harici guc baglantisi gerektirmez.

---

### A4. DALDIRMA TIP (INSERTION) ELEKTROMANYETIK DEBIMETRE (VF-VMF-I)
**URL:** /products/insertion-flow-meter/
**Badge:** LARGE PIPE SOLUTION | EASY RETROFIT
**Tema:** Koyu gri (#1A1A2E), endustriyel boru hatti gorseli

#### Teknik Ozellikler (vfaelektronik.com'dan dogrulanmistir):
| Ozellik | Deger |
|---------|-------|
| Urun Kodu | VF-VMF-I |
| Boru Capi | DN100 - DN3000 mm |
| Hassasiyet | ±0.5% (hiz ≥0.5 m/s) |
| Akis Hizi | 0.2 - 15 m/s |
| Iletkenlik | >5 μS/cm |
| Govde | ABS / Polipropilen |
| Elektrot | SS316L, Hastelloy B, Hastelloy C |
| Basinc | 1.6 MPa |
| Sicaklik | -25°C ~ +60°C |
| Besleme | AC 85-250V / DC 20-36V |
| Cikis | 4-20mA, Pulse, RS485 Modbus (ops.), HART (ops.), Profibus (ops.) |
| Ekran | 3 satirli LCD |
| Kablo Girisi | M20 x 1.5 / 1/2 inch |

> NOT: "Hot-tap" terimi VFA sitesinde acikca kullanilmamistir. Ancak urun
> "retrofit (sonradan kurulum)" icin uygun olarak tanimlanmakta ve boruya
> kesit acilarak montaj yapildigi belirtilmektedir. Sitede "Hot-tap capable"
> yerine "Easy retrofit installation" ifadesi kullanilmali.

#### Nerede ve Nasil Kullanilir:

**Buyuk Cap Belediye Ana Hatlari (DN300+):**
Buyuk caplarda (DN400, DN600, DN1000 vb.) tam debimetre cok buyuk, agir
ve pahalidir. Insertion debimetre boruya tek noktadan sokulur ve noktasal
hiz olcumu yapar, boru capina gore debiye cevirir. Hot-tap ozelligi ile
hatti durdurmadan, basincli iken montaj edilebilir.

**Endustriyel Sogutma Suyu:**
Buyuk fabrikalarin sogutma suyu ana hatlari, enerji santrallerinin
sogutma kulesi devreleri. DN500+ caplarda maliyet etkin cozum.

**Mevcut Tesislere Sonradan Ekleme (Retrofit):**
Daha once debimetre olmayan mevcut hatlara, hatti kesmeden montaj.
Ozellikle belediye ve sanayi tesislerinde yaygin.

---

### A5. KISMI DOLGULU BORU ELEKTROMANYETIK DEBIMETRE
**URL:** /products/partially-filled-flow-meter/
**Badge:** WASTEWATER SPECIALIST | GRAVITY FLOW
**Tema:** Koyu kahverengi-gri (#2C2418), atiksu/kanal temasi

#### Teknik Ozellikler (vfaelektronik.com'dan dogrulanmistir):
| Ozellik | Deger |
|---------|-------|
| Boru Capi | DN200 - DN3000 mm |
| Hassasiyet | ±2.5% |
| Akis Araligi | Boru capinin 1/10'u (minimum olculebilir seviye) |
| Iletisim | RS485 / RS232 |
| Besleme | 220V / 24V / 12V |
| Ekran | LCD: akis hizi, sivi seviyesi, toplam debi, anlik debi |
| Olcum | Ayni anda seviye + hiz olcumu yapar, debiyi hesaplar |

#### Nerede ve Nasil Kullanilir:

**Kanalizasyon Hatlari:**
Sehir kanalizasyon sebekelerinde atiksu yercekimi ile akar ve borular
nadiren tam dolu olur. Standart debimetreler tam dolu boru gerektirir;
bu model kismi dolguda bile olcum yapar. Boru icindeki sivi seviyesini
ve akis hizini ayri ayri olcerek debiyi hesaplar.

**Yagmur Suyu Toplama:**
Yagmursuyu drenaj hatlari, sel riski izleme sistemleri. Yagis yogunluguna
gore debi surekli degisir ve boru dolulugu %10-%100 arasinda gider.

**Endustriyel Drenaj:**
Fabrika atiksu cikis kanallarinda cevre mevzuati geregi debi kaydi,
maden sahalarinda drenaj suyu izleme.

---

### A6. DUZ BORU GEREKTIRMEYEN (0D) DEBIMETRE
**URL:** /products/zero-straight-run-flow-meter/
**Badge:** ZERO STRAIGHT PIPE | COMPACT INSTALL
**Tema:** Koyu lacivert, teknik cizim/blueprint efekti

#### Teknik Ozellikler (vfaelektronik.com'dan dogrulanmistir):
| Ozellik | Deger |
|---------|-------|
| Boru Capi | DN3 - DN3000 mm |
| Hassasiyet | ±0.5% |
| Akis Hizi | 0 - 15 m/s |
| Iletkenlik | ≥5 μS/cm |
| Duz Boru Gereksinimi | 0D upstream / 0D downstream (SIFIR) |
| Elektrot | SS316L, Hastelloy C, Hastelloy B, Titanium, Tantalum, Platinum |
| Astar | PTFE, FEP, PFA, CR, Hard Rubber, PU, FLS |
| Govde | Karbon Celik |
| Basinc | 0.6 / 1.0 / 1.6 / 2.5 / 4.0 MPa |
| Sicaklik | -20°C ~ +120°C |
| Besleme | AC 85-250V / DC 20-36V |
| Cikis | 4-20mA, Pulse |
| Flans | DIN, JIS, ANSI, GB, Table D/E |

> VFA sitesinde "olcum oncesi ve sonrasi duz boru uzunlugu ihtiyaci olmadan"
> ifadesi kullanilmistir. Gercek 0D tasarim onaylanmistir.

#### Nerede ve Nasil Kullanilir:

**Dar Mekanlar:**
Standart debimetreler giridte 5D, cikista 3D duz boru mesafesi gerektirir
(D = boru capi). Ornegin DN200 boruda giris icin 1 metre duz boru lazim.
0D modeli dirsek, vana, pompa veya T-parcadan hemen sonra/once montaj
edilebilir. Gemi makine daireleri, kompakt tesis odalari, eski binalarda
boru degisikligi yapmadan montaj icin idealdir.

**Retrofit Kurulumlar:**
Mevcut tesislerde duz boru mesafesi acilamayan hatlara sonradan debimetre
ekleme. Boru modifikasyonu maliyetini ortadan kaldirir.

---

### A7. MINYATUR ELEKTROMANYETIK DEBIMETRE (VF-VMF-M)
**URL:** /products/miniature-flow-meter/
**Badge:** MICRO FLOW | PRECISION DOSING
**Tema:** Beyaz/acik, laboratuvar temasi, temiz cizgiler

#### Teknik Ozellikler (vfaelektronik.com'dan dogrulanmistir):
| Ozellik | Deger |
|---------|-------|
| Urun Kodu | VF-VMF-M |
| Modeller | VF-VMF-M-3 (DN3), M-6 (DN6), M-10 (DN10), M-15 (DN15) |
| Boru Capi | DN3 - DN15 mm |
| Baglanti | DN3/DN6: G3/8", DN10/DN15: G1/2" |
| Akis Hizi | 0.1 - 15 m/s |
| Hassasiyet | ±0.5% |
| Iletkenlik | ≥5 μS/cm |
| Govde Malzemesi | PIC (Polyimide Composite) |
| Elektrot | SS316M, Hastelloy C, Titanium |
| Basinc | 1.6 MPa |
| Sicaklik | -10°C ~ +55°C |
| Besleme | AC 85-250V / DC 20-36V |
| Cikis | 4-20mA, Pulse |
| Ekran | 3 satirli LCD (128x128 mm) |
| Koruma | IP65 |
| Kablo Girisi | 1/2 NPT, BSP |

| Model | Debi Araligi |
|-------|-------------|
| VF-VMF-M-3 (DN3) | 0.2 - 2 lt/dk / 0.2 - 4 lt/dk |
| VF-VMF-M-6 (DN6) | 0.8 - 8 lt/dk / 0.8 - 16 lt/dk |
| VF-VMF-M-10 (DN10) | 2 - 20 lt/dk / 2 - 40 lt/dk |
| VF-VMF-M-15 (DN15) | 5 - 50 lt/dk / 5 - 100 lt/dk |

> DUZELTME: Onceki brief'te malzeme PEEK olarak yazilmisti.
> VFA sitesinde malzeme PIC (Polyimide Composite) olarak belirtilmistir.
> PEEK ve PIC farkli malzemelerdir. Sitede PIC yazilmalidir.

#### Nerede ve Nasil Kullanilir:

**Kimyasal Dozajlama:**
Su aritma tesislerinde klor, polimer, flokülant, koaguülant dozajlama
hattinda mikro debi kontrolu. Dozajlama pompasi cikisinda gercek
miktarin dogrulanmasi.

**Farmasotik Mikro Dozaj:**
Aktif madde karisimlari, saf su mikro hatlari, lab olcegi reaktor
beslemesi. PEEK malzeme kimyasal uyumlulik saglar.

**Laboratuvar & Ar-Ge:**
Deneysel duzeneklerde sivi akis hizi olcumu, prototip test hatlari.

**Baski & Boya Sanayi:**
Murekep ve boya dozajlama, kaplama hatlari. Hassas miktar kontrolu.

---

### A8. BULAMAC (SLURRY) ELEKTROMANYETIK DEBIMETRE (VMF-B)
**URL:** /products/slurry-flow-meter/
**Badge:** HEAVY DUTY | ABRASION RESISTANT
**Tema:** Koyu turuncu-kahverengi (#3D2B1F), madencilik/agir sanayi temasi

#### Teknik Ozellikler (vfaelektronik.com'dan dogrulanmistir):
| Ozellik | Deger |
|---------|-------|
| Urun Kodu | VMF-B |
| Boru Capi | DN3 - DN3000 mm (1/8" - 120") |
| Hassasiyet | ±0.5% (hiz ≥0.5 m/s) |
| Tekrarlanabilirlik | ≤0.17% |
| Iletkenlik | >5 μS/cm (demineralize su icin >20 μS/cm) |
| Elektrot | SS316L, Hastelloy C, Hastelloy B, Titanium, Tantalum, Platinum-Iridium |
| Uyarim Frekansi | Kare dalga, 25Hz/30Hz yuksek frekansi (kati parcacik gurultusu bastirma) |
| Flans | PN10/PN16/PN25/PN40 DIN; 10K/20K/30K JIS; 150#/300#/600# ANSI |

> DUZELTME: Onceki brief'te Tungsten Carbide elektrot yazilmisti.
> VFA sitesinde Tungsten Carbide BULUNMAMAKTADIR.
> Slurry uygulamalar icin Platinum-Iridium secenegi sunulmaktadir.
> Ayrica 25Hz/30Hz yuksek uyarim frekansi ile kati parcacik kaynakli
> olcum gurultusu bastirma ozelligi vardir - bu slurry icin onemli bir ozellik.

#### Nerede ve Nasil Kullanilir:

**Madencilik:**
Cevher zenginlestirme tesislerinde maden slurry (su+cevher karisimi)
debi izleme. Bakir, demir, altin, krom cevheri isleme hatlari. Tungsten
carbide elektrot sert parcaciklarin asindirmasina dayanir. Polyurethane
astar mekanik darbelere karsi koruma saglar.

**Cimento & Beton:**
Yask cimento hamuru hatlari, beton santrali karisiim suyu, kum-su
karisimi pompaj hatlari. Yuksek katı oranli akiskanlarda guvenilir olcum.

**Kagit & Seluloz:**
Kagit hamuru (pulp) hatlari, seluloz isleme. Lifli ve parcacikli
akiskanlarda tikanma riski yok cunku boru icinde engel yok.

**Sondaj (Drilling):**
Petrol/gaz kuyularinda sondaj camuru (drilling mud) devresi izleme.
Yuksek viskozite ve kati icerikli akiskanlarda calisan sayili
debimetre turlerinden biridir.

---

### ═══════════════════════════════════════════
### KATEGORI B: SEVIYE CIHAZLARI
### ═══════════════════════════════════════════

Arka Plan Ailesi: Koyu Yesil tonlari
Ikon Rengi: Yesil (#00C853)

---

### B1. STANDART MANYETIK BYPASS SEVIYE GOSTERGESI
**URL:** /products/magnetic-bypass-level-indicator/
**Badge:** NO POWER REQUIRED | ZERO MAINTENANCE
**Tema:** Koyu yesil (#0B3D2E), tank kesit animasyonu

#### Teknik Ozellikler:
| Ozellik | Deger |
|---------|-------|
| Prensip | Manyetik bypass (samandirali) |
| Max Basinc | PN10 |
| Max Sicaklik | 200°C |
| Baglanti | G1/2" - G1" dis, DN15-DN25 flans |
| Govde | Karbon Celik / SS304 / SS316L |
| Gosterge | Kirmizi/beyaz manyetik bayrak donduruculer |
| Opsiyonlar | 4-20mA transmitter, reed switch salter |
| Guc | Yok (mekanik gosterge icin), 24VDC (transmitter icin) |

#### Calisma Prensibi:
Tank yan yuzeyine monte edilen bypass tup, tankla ayni seviyeyi gosterir
(birlesik kaplar prensibi). Tup icindeki samandira sivi ile birlikte
yukselip alcalir. Samandira icindeki guclu miknatis, tupu disaridan
saran manyetik bayrak donduruculeri cevirir - sivi alti kirmizi,
sivi ustu beyaz. Hicbir elektrik gerekmez, tamamen mekanik/manyetik
prensiple calisir.

#### Nerede ve Nasil Kullanilir:

**Petrol Depolama Tanklari:**
Ham petrol, mazot, benzin depolama tanklarinda seviye izleme. Guvenligi
kritik olan yangin/patlama riski bulunan alanlarda cam gostergeler yerine
tercih edilir cunku tam kapali ve sizinti riski yoktur. Ex-proof
transmitter eklenerek kontrol odasina sinyal gonderilebilir.

**Kimyasal Depolama:**
Asit (HCl, H2SO4, HNO3), baz (NaOH), solvent tanklari. Medyanin
turune gore tank ve bypass govde malzemesi secilir. SS316L korozif
kimyasallara dayanir. Tehlikeli kimyasallarda operatorun tanka
yaklasmasina gerek kalmadan uzaktan seviye okuma saglar.

**Kazan Tamburu (Boiler Drum):**
Buhar kazanlarinda su seviyesi izleme - emniyet acisından en kritik
olcumlerden biri. Seviyenin cok dusmesi kazani yakar, cok yuoilmesi
buhar hattina su kacar. Kirmizi/beyaz bayrak gostergesi operatore
anlik gorsel bilgi verir.

**Su Aritma Tesisleri:**
Kimyasal dozajlama tanklari (klor, polimer), cokelme havuzlari,
camur yigma tanklari. Kolay okunabilir mekanik gosterge saha
personeliicin pratik.

---

### B2. EX-PROOF MANYETIK BYPASS SEVIYE GOSTERGESI
**URL:** /products/ex-proof-bypass-level-indicator/
**Badge:** HAZARDOUS AREAS | EX-PROOF DESIGN
**Tema:** Koyu sari-siyah (#1A1A00), tehlike seridi efekti

#### Teknik Ozellikler:
| Ozellik | Deger |
|---------|-------|
| Max Basinc | PN10 |
| Max Sicaklik | 150°C |
| Govde | Karbon Celik / SS |
| Ex Koruma | Ex-proof tasarim (patlayici ortam uygun) |
| Opsiyonlar | Ex-proof 4-20mA transmitter, ex-proof salter |

> KRITIK UYARI: VFA Elektronik sitesinde (vfaelektronik.com/TR/belgelerimiz)
> ATEX sertifikasi BULUNMAMAKTADIR. Belgeler sayfasinda yalnizca Yerli Mali
> Belgesi, VFA Marka Tescil ve ISO 9001 listelenmektedir. "ATEX Certified"
> badge'i sitede KULLANILMAMALIDIR. Bunun yerine "Ex-Proof Design" veya
> "Designed for Hazardous Areas" ifadesi tercih edilmelidir. ATEX zone
> siniflandirmasi da belge olmadan yazilmamalidir.

#### Nerede ve Nasil Kullanilir:

**Petrol Rafinerileri:**
Distilasyon kolonlari, seperatorler, depolama tanklari. Patlayici
atmosfer olusabilecek bolgelerde guvenli seviye izleme.

**LPG/LNG Terminalleri:**
Siviletirilmis gaz depolama tanklari. Yuksek patlama riski olan
alanlarda guvenli seviye izleme.

**Boya & Solvent Depolama:**
Parlayici organik solvent tanklari, boya hammadde depolari.

---

### B3. KAZAN TIP MANYETIK BYPASS SEVIYE GOSTERGESI
**URL:** /products/boiler-bypass-level-indicator/
**Badge:** HIGH PRESSURE & TEMPERATURE
**Tema:** Koyu kirmizi-siyah (#2D0A0A), isi/buhar temasi

#### Teknik Ozellikler:
| Ozellik | Deger |
|---------|-------|
| Max Basinc | PN16 / PN25 / PN40 |
| Max Sicaklik | 200°C (standart) / 300°C (opsiyonel) |
| Govde | Karbon Celik / SS |
| Ozel | Yuksek basincli buhar sistemleri |

#### Nerede ve Nasil Kullanilir:

**Buhar Kazanlari:**
Ates borulu ve su borulu kazanlarda kazan tamburu su seviyesi. Kazan
guvenligi icin en kritik parametredir. Dusuk seviye alarm (LSLL)
durumunda otomatik kazan durdurma tetiklenir. PN40'a kadar basinc
kapasitesi ile yuksek basincli endüstriyel kazanlarda kullanilir.

**Enerji Santralleri:**
Buhar turbin kondenserleri, deaerator tanklari, yuksek basincli
besleme suyu tanklari. 300°C'ye kadar sicaklik kapasitesi.

**Proses Tanklari:**
Yuksek basincli reaktorler, otoklav tanklari, basinclı sivilarin
depolandi kaplar.

---

### B4. SAMANDIRALI SEVIYE TRANSMITTERI
**URL:** /products/float-level-transmitter/
**Badge:** CONTINUOUS OUTPUT | SIMPLE & RELIABLE
**Tema:** Mavi-yesil gradient, su temasi

#### Teknik Ozellikler:
| Ozellik | Deger |
|---------|-------|
| Prensip | Samandira + manyetik kavrama |
| Olcum Araligi | 0 - 6000 mm |
| Cikis | 4-20mA / 0-10V / RS485 |
| Govde | SS304 / SS316L |
| Samandira | PP / SS |
| Koruma | IP65 / IP67 |
| Sicaklik | -20°C ~ +120°C |

#### Nerede ve Nasil Kullanilir:

**Su Depolari & Pompaj Istasyonlari:**
Temiz su depolarinda surekli seviye izleme, 4-20mA cikis ile PLC'ye
baglanir. PLC seviyeye gore pompa start/stop veya frekans kontrolu yapar.
Ornek: Seviye %30'a dustugunde pompa calisir, %80'e ciktiginda durur.

**Proses Tanklari:**
Kimya, gida, icecek tesislerinde hammadde veya ara urun tanklarinda
seviye izleme ve otomasyon. Analog 4-20mA cikis ile otomasyon sistemine
dogrudan entegre olur.

**Atiksu Toplama Tanklari:**
Atiksu birikme tanklarinda seviye izleme, pompanin ne zaman calisacagini
belirleyen seviye sinyali. RS485 Modbus ile SCADA'ya baglanabilir.

---

### B5. MOTORLU SEVIYE SENSORU (ROTARY PADDLE)
**URL:** /products/motorized-level-sensor/
**Badge:** SOLID MATERIAL DETECTION
**Tema:** Koyu gri (#1A1A1A), mekanik/motor temasi

#### Teknik Ozellikler:
| Ozellik | Deger |
|---------|-------|
| Prensip | Motorlu donen kanat (rotary paddle) |
| Uygulama | Kati malzeme: toz, granul, tahil, cimento |
| Cikis | Relay (NO/NC) |
| Besleme | 220VAC / 24VDC |
| Koruma | IP65 |
| Govde | Aluminyum / SS |

#### Calisma Prensibi:
Kucuk bir motor yavaca donen bir kanat/pedal cevirir. Kati malzeme
kanata ulasip onu durdurdugunda, motor tork artisini algilar ve
relay kontagi degistirir - "malzeme var" sinyali verir. Malzeme cekilip
kanat serbest kaldığında relay eski haline doner.

#### Nerede ve Nasil Kullanilir:

**Tahil Silolari:**
Bugday, arpa, misir, pirinc silolarinda dolu/bos tespiti. Silonun
ust veya yan duvarına monte edilir. Silo dolunca alarm verir veya
konveyoru durdurur.

**Cimento & Kireç Silolari:**
Cimento fabrikalarinda hammadde (klinker, alo) ve mamul cimento
silolarında seviye kontrolu. Tozlu ortamda guvenilir calisir.

**Plastik Granül Depolari:**
Enjeksiyon/ekstruzyon tesislerinde hammadde silolarinda malzeme
yoklugu algiilama. Malzeme bitince uretim hattini uyarir.

**Un & Seker Siloları:**
Gida sektorunde toz hammadde depolama. IP65 koruma toz ortaminda
guvenli calisma saglar.

---

### B6. MANYETIK SEVIYE SENSORU
**URL:** /products/magnetic-level-sensor/
**Badge:** COMPACT | POINT LEVEL
**Tema:** Koyu mavi (#0D2137), kompakt tasarim

#### Teknik Ozellikler:
| Ozellik | Deger |
|---------|-------|
| Prensip | Manyetik samandira + reed switch |
| Cikis | On/Off relay, opsiyonel 4-20mA |
| Govde | SS304 / SS316L |
| Koruma | IP65 / IP67 |
| Sicaklik | -20°C ~ +150°C |
| Montaj | Dikey / yandan |

#### Nerede ve Nasil Kullanilir:

**Pompa Koruma:**
Su tanklari, kuyu pompalari. Seviye dusunce pompayi durdurarak kuru
calismadan korur (dry-run protection). En yaygin uygulama.

**Alarm Seviyesi:**
Kimyasal tanklarda max/min alarm, kazan besleme suyu dusuk seviye
alarmi. Bir veya bircok noktada on/off bilgi verir.

**Hidrolik Yag Tanklari:**
CNC tezgahlari, pres makineleri, enjeksiyon makinelerinde hidrolik
yag seviye izleme. Yag seviyesi duserse makine alarmi.

---

### ═══════════════════════════════════════════
### KATEGORI C: SEVIYE SALTERLERI
### ═══════════════════════════════════════════

Arka Plan Ailesi: Koyu Mor-Gri (#1A1A2E)
Ikon Rengi: Turuncu (#F9A825)

---

### C1. PASLANMAZ MINI SEVIYE SALTERI
**URL:** /products/mini-level-switch/
**Tema:** Koyu gri, kompakt/mini

| Ozellik | Deger |
|---------|-------|
| Govde | SS304 / SS316L |
| Boyut | Kompakt mini |
| Cikis | Relay (NO/NC) |
| Koruma | IP67 |
| Montaj | Dikey / Yatay |

**Kullanim:** Kucuk tanklar, makineler, kompakt sistemler. Darr alanlara
sigar. CNC, tezgah, kompressor gibi makine ici tank seviyesi algilama.

---

### C2. SAMANDIRALI SEVIYE SALTERI
**URL:** /products/float-level-switch/
**Tema:** Koyu mavi-gri

| Ozellik | Deger |
|---------|-------|
| Prensip | Buoyancy (kaldirma kuvveti) |
| Govde | PP / SS |
| Cikis | Relay (NO/NC) |
| Sicaklik | -20°C ~ +120°C |

**Kullanim:** Su depolari pompa kontrolu, atiksu toplama cukurlari,
kondensasyon tanklari. Samandira yukselip alcaldikca kontak degistirir.
En basit ve en ekonomik seviye algilama yontemi.

---

### C3. PEDALLI MOTORLU SEVIYE SALTERI
**URL:** /products/paddle-motor-level-switch/
**Tema:** Koyu turuncu-kahverengi, silo

| Ozellik | Deger |
|---------|-------|
| Prensip | Donen kanat + motor |
| Uygulama | Kati malzeme (toz, granul, tahil) |
| Cikis | Relay (NO/NC) |
| Besleme | 220VAC |
| Koruma | IP65 |

**Kullanim:** B5 (Motorlu Seviye Sensoru) ile ayni prensip, daha ekonomik
versiyon. Tahil, cimento, plastik granul silolarinda dolu/bos tespiti.

---

### ═══════════════════════════════════════════
### KATEGORI D: PROSES ENSTRUMANLAR
### ═══════════════════════════════════════════

Arka Plan Ailesi: Koyu Bakir/Bronz (#2A1F14)
Ikon Rengi: Altin (#F9A825)

---

### D1. ACI SENSORU (RCS 3100 / RCS 2100)
**URL:** /products/angle-sensor/
**Badge:** CONTACTLESS | UNLIMITED ROTATION LIFE
**Tema:** Koyu bronz, hassas muhendislik

#### Teknik Ozellikler:
| Ozellik | RCS 3100 | RCS 2100 |
|---------|----------|----------|
| Olcum Araligi | 0-360° (ayarlanabilir) | 0-360° (ayarlanabilir) |
| Cozunurluk | 12-bit | 12-bit |
| Dogruluk | ±0.3% FS | ±0.3% FS |
| Prensip | Temassiz manyetik (Hall effect) | Temassiz manyetik |
| Cikis | 4-20mA / 0-10V | 4-20mA / 0-10V |
| Omur | Sinirsiz (temassiz) | Sinirsiz (temassiz) |

#### Calisma Prensibi:
Miknatis tasiiyan bir rotor ile Hall-effect algilayicidan olusur.
Rotor dondukce manyetik alan degisir ve algilayici bunu aci bilgisine
cevirir. Temassiz oldugu icin mekanik asinma yoktur - omru teorik
olarak sinırsizdir. Potansiyometre veya enkoder yerine tercih edilir.

#### Nerede ve Nasil Kullanilir:

**Vana Pozisyon Geri Bildirimi:**
Kelebek vana, kuresel vana, susturma vanalarinda acik/kapali pozisyon
veya oransal (0-100%) pozisyon geri bildirimi. Vana aktuatorune monte
edilir. 4-20mA cikis ile PLC/DCS'e vana pozisyonu gonderilir.
Su dagitim, petrokimya, enerji sektorlerinde her yerde kullanilir.

**Mobil Is Makinalari:**
Ekskavatour bom/arm aci izleme, tarim makinelerinde bici makine
aci ayari, vinc bom acisi guvenlik izleme. Sert saha kosullarinda
dayanikli.

**Endustriyel Otomasyon:**
Doner tabla pozisyonlama, paketleme makinelerinde kol pozisyonu,
konveyor yonlendirme mekanizmalari.

---

### D2. KOMBINE BASINC-SICAKLIK TRANSMITTERI (VF-BTT-S)
**URL:** /products/pressure-temperature-transmitter/
**Badge:** 2-IN-1 MEASUREMENT | SPACE SAVING
**Tema:** Koyu lacivert-kirmizi gradient

#### Teknik Ozellikler:
| Ozellik | Deger |
|---------|-------|
| Basinc Araligi | 0 - 600 bar (modele gore) |
| Sicaklik Araligi | -40°C ~ +150°C |
| Basinc Sensoru | Piezorezistif (thin-film MEMS) |
| Sicaklik Sensoru | PT100 / PT1000 |
| Cikis | 4-20mA (basinc) + PT100 (sicaklik) |
| Baglanti | G1/4" / G1/2" / M20x1.5 |
| Koruma | IP65 |
| Avantaj | Tek noktadan iki olcum, tek kablolama, az montaj alani |

> NOT: Detayli spec'ler ureticiden dogrulanmali.

#### Nerede ve Nasil Kullanilir:

**Buhar & Sicak Su Kazanlari:**
Kazan cikisinda basinc ve sicaklik ayn anda olcum. Normalde iki
ayri transmitter gereken yere tek cihaz yeterli olur. Montaj
maliyeti ve kablolama %50 azalir.

**HVAC & Iklimlendirme:**
Chiller (sogutma grubu) gitis/donus hatti, isi pompasi devresi,
yerden isitma manifoldu basinc/sicaklik izleme. Bina otomasyon
sistemine (BMS) entegre olur.

**Hidrolik Sistemler:**
CNC tezgah, pres, enjeksiyon makinesi hidrolik guc unitesinde
yag basinci ve sicakligi izleme. Yuksek sicaklik veya dusuk
basinc alarmi ile makineyi korur.

**Sogutma Devreleri:**
Endustriyel sogutma sistemleri, sut tanki sogutma, gida isleme
sogutma hatlari.

---

## BOLUM 9: HER URUN SAYFASININ ORTAK YAPISI

Her urun sayfasi asagidaki bloklardan olusur:

```
[1] HERO ALANI
    Arka plan rengi/temasi URUNUNE OZEL (yukarida belirtildi)
    - Urun fotografi (A1 icin 3D model)
    - Urun adi (H1)
    - Badge'ler (Made in Turkey, TURKAK, ozel badge)

[2] HIZLI SPEC SERIDI
    Yatay ikon + deger badge'leri:
    [Boru Capi] [Hassasiyet] [Koruma] [Malzeme] [Cikis]

[3] URUN ACIKLAMASI (200+ kelime, SEO uyumlu)
    - 1-2 paragraf: urun nedir, ne ise yarar
    - 1 paragraf: hangi sivilari olcer / hangi malzemeyi algilar
    - 1 paragraf: TURKAK kalibrasyon guvencesi

[4] CALISMA PRENSIBI (ozellikle A1, B1, B5, D1 icin)
    - Basit ve anlasilir dille teknik aciklama
    - Mumkunse animasyonlu diagram

[5] NEREDE & NASIL KULLANILIR (detayli aciklamalar)
    - Her uygulama alani icin ikon + baslik + 2-3 cumle aciklama
    - Gercek saha senaryolari (yukaridaki icerikler)
    - Tiklanabilir kartlar veya accordion

[6] TEKNIK OZELLIKLER TABLOSU
    - Zebra-striped, monospace degerler
    - Mobilde responsive (accordion veya yatay scroll)
    - DETAYLI - kullanici spec sheet yerine bu tabloyu kullanabilmeli

[7] MALZEME SECIM REHBERI (sadece A1, A8 icin)
    - Liner secim tablosu
    - Elektrot secim tablosu
    - "Hangi liner/elektrot bana uygun?" interaktif rehber (opsiyonel)

[8] BOYUT CIZIMLERI & DOKUMANLAR
    - Teknik cizim gorseli (dimensional drawing)
    - PDF datasheet indirme
    - PDF kalibrasyon sertifikasi indirme
    - PDF akreditasyon belgesi indirme

[9] SERTIFIKALAR
    - TURKAK AB-0354-K rozeti
    - ISO/IEC 17025:2017
    - EA + ILAC MRA
    - CE (varsa), ATEX (ex-proof modeller icin)
    - "Internationally recognized in 100+ countries"

[10] TEKLIF FORMU
     - "Request a Quote for [Urun Adi]"
     - Urun adi otomatik doldurulmus
     - Form alanlari: Isim, Email, Telefon, Ulke, Mesaj
     - WhatsApp butonu

[11] ILGILI URUNLER
     - 2-3 iliskili urun karti
```

---

## BOLUM 10: SEKTOREL SAYFALAR (/industries/)

Her sektor sayfasinda: o sektorde kullanilan urunler listelenir,
gercek uygulama senaryolari anlatilir, ilgili urun sayfalarına
linkler verilir.

```
/industries/water-treatment/
  → A1, A3, A4, A5, B1, B4, A7 (dozajlama)
  Konu: Icme suyu aritma, atiksu, su dagitim, su kaybi tespit

/industries/oil-gas/
  → A1, A8, B1, B2, D1, D2
  Konu: Rafineri, depolama, boru hatti, sondaj

/industries/food-beverage/
  → A2, A1, A7, B4
  Konu: Sut, icecek, CIP, hijyenik uretim

/industries/chemical/
  → A1, A7, A8, B1, B2, B4
  Konu: Asit/baz, solvent, kimyasal dozajlama

/industries/mining/
  → A8, A4, B5, C3
  Konu: Slurry, cevher isleme, silo, drenaj

/industries/municipal-water/
  → A1, A3, A4, A5, B1
  Konu: Sehir suyu, kanalizasyon, DMA, NRW
```

---

## BOLUM 11: TEKLIF FORMU DETAYLARI

### Form Alanlari:
```
- Full Name *
- Company Name
- Email *
- Phone (ulke kodu secici ile)
- Country * (dropdown - oncelik sirasi):
    Iraq, Azerbaijan, UAE, Jordan, Kazakhstan, Uzbekistan,
    Saudi Arabia, Qatar, Kuwait, Egypt, Kyrgyzstan, Oman,
    Bahrain, Turkmenistan, USA, Other
- Product of Interest * (dropdown - 19 urun)
- Pipe Size / Application (opsiyonel)
- Quantity (opsiyonel)
- Message (textarea)
- [Submit: "Request a Quote"]
```

### Form Sonrasi:
- Thank you sayfasi + ozet
- Kullaniciya otomatik onay emaili
- Admin'e bildirim (email + WhatsApp)
- PDF datasheet otomatik eki (opsiyonel)

---

## BOLUM 12: COKLU DIL (i18n) DETAYLARI

```
/         → Ingilizce (varsayilan)
/ar/      → Arapca (RTL layout!)
/ru/      → Rusca (Kiril)

ARAPCA OZEL:
  - dir="rtl" HTML attribute
  - Layout tamamen aynalanir
  - Sayilar ve teknik degerler LTR kalir
  - Font: "Noto Sans Arabic"
  - Tarih: Miladi (Hicri opsiyonel)

RUSCA OZEL:
  - Kiril alfabe destekli font
  - GOST terminolojisi
  - Электромагнитный расходомер = Electromagnetic flow meter
  - Датчик уровня = Level sensor
  - Датчик давления = Pressure transmitter
```

---

## BOLUM 13: HEDEF PAZAR & SERTIFIKA OZETI

```
FAZ 1 (HEMEN): Irak, Azerbaycan, BAE, Urdun
  Gerekli: TURKAK (VAR) + CE (alinmali ~$2-5K)

FAZ 2 (3-6 AY): Kazakistan, Ozbekistan, Kirgizistan
  Gerekli: EAC/GOST-K (~$3-5K)

FAZ 3 (6-12 AY): Suudi Arabistan, Katar, Kuveyt
  Gerekli: SASO/SABER (~$5-15K) + yerel ajan

FAZ 4 (12+ AY): Misir, ABD
  Gerekli: UL/FM (~$10-20K) + distributor
```

---

## BOLUM 14: CLAUDE DESIGN'A TALIMATLAR

```
1. Bu dosyadaki TUM urun iceriklerini kullan
2. Her urun sayfasinin ARKA PLAN TEMASINI FARKLI yap (yukarida belirtildigi gibi)
3. 3D model deneyimini (Bolum 7) elektromanyetik debimetre sayfasina uygula
4. "Nerede & Nasil Kullanilir" bolumlerini ikon kartlari olarak tasarla
5. Teknik tabloları okunabilir yap (monospace font, zebra-stripe)
6. Liner ve elektrot secim rehberini interaktif tablo veya kart olarak tasarla
7. Tum guven sinyallerini (TURKAK, ISO, EA, ILAC, Made in Turkey) yerlestir
8. Arapca RTL + Rusca Kiril destegi dusun
9. Mobil oncelikli tasarim yap (trafik cogunlukla mobil olacak)
10. WhatsApp floating buton sag alt, sticky CTA alt bar (mobil)

KULLANICIDAN ISTENMESI GEREKENLER:
  - [ ] PM / Process Meters logosu (logotype tasarimi gerekebilir)
  - [ ] Tum urunlerin yuksek cozunurluklu fotograflari (beyaz arka plan)
  - [ ] 3D debimetre modeli (.step / .glb / .fbx)
  - [ ] Fabrika / uretim fotografi
  - [ ] Saha uygulama fotograflari
  - [ ] TURKAK belgesi PDF (mevcut: AB-0354-K)
  - [ ] CE belgesi (varsa)
  - [ ] ATEX belgesi (Ex-proof model icin, varsa)
  - [ ] PDF datasheet'ler (her urun icin)
  - [ ] WhatsApp numarasi
  - [ ] Email adresi (teklif formu icin)
```

---

## BOLUM 15: DOGRULAMA SONUCLARI

Asagidaki maddeler vfaelektronik.com'dan arastirilarak dogrulanmistir.
Tarih: 2026-06-14

```
[✅] Standart seri liner: PTFE, Neoprene, Hard Rubber, F46, PFA, Polyurethane
[✅] Standart seri elektrot: SS316L, Hastelloy B, Hastelloy C, Titanium, Tantalum, Platinum
[✅] Standart seri hassasiyet: ±0.5% standart, ±0.3% ve ±0.2% opsiyonel
[⚠️] Gidaya uygun model: CIP/SIP sitede BELIRTILMEMIS - iddia etmeyin
[⚠️] Gidaya uygun model: FDA uyumlulugu sitede BELIRTILMEMIS - iddia etmeyin
[✅] Pilli model pil omru: 5 YIL (3.6V Lityum)
[❌] Pilli model GSM/NB-IoT: SITEDE YOK - bu ozellik yazilmamali
[⚠️] Daldirma tip hot-tap: "retrofit" olarak tanimlanmis, "hot-tap" terimi kullanilmamis
[✅] Kismi dolu min doluluk: "boru capinin 1/10'u" olarak teyit edildi
[✅] 0D model: GERCEK 0D - "olcum oncesi ve sonrasi duz boru ihtiyaci yok" ifadesi teyit
[❌] Minyatur PEEK: YANLIS - malzeme PIC (Polyimide Composite), PEEK degil
[✅] Minyatur DN3: DN3 minimum DOGRU (VF-VMF-M-3 modeli)
[❌] Slurry tungsten carbide: YOK - elektrotlar SS316L, Hast.C/B, Ti, Ta, Pt-Ir
[✅] Slurry ozel: 25Hz/30Hz yuksek uyarim frekansi (kati parcacik gurultu bastirma)
[⚠️] Manyetik bypass PN10: sitede PN10 olarak gorunuyor, ayri dogrulama yapilmadi
[❌] Ex-proof ATEX: VFA'da ATEX SERTIFIKASI YOK - belgeler sayfasinda listelenmemis
[⚠️] Kazan tipi 300°C: siteden ayri dogrulama yapilmadi
[⚠️] Float transmitter 6000mm: siteden ayri dogrulama yapilmadi
[⚠️] Motorlu sensor IP65: siteden ayri dogrulama yapilmadi
[⚠️] Aci sensoru RCS fark: siteden ayri dogrulama yapilmadi
[⚠️] Kombine VF-BTT-S: detayli spec sitede bulunamadi
[✅] CE belgesi: CE beyani urun sayfalarinda belirtilmis (ayri belge no yok)
[✅] ISO 9001: Mevcut (PDF: vfaelektronik.com/uploads/2026/05/13/GRI2101.pdf)
[✅] Yerli Mali Belgesi: Mevcut
[✅] VFA Marka Tescil: Mevcut

SITEDE KULLANILMAMASI GEREKEN IFADELER:
  ❌ "ATEX Certified" → yerine "Ex-Proof Design" kullanin
  ❌ "FDA Compliant" → yerine "Designed for food processing" kullanin
  ❌ "CIP/SIP Validated" → yerine "Hygienic tri-clamp connection" kullanin
  ❌ "PEEK body" → PIC (Polyimide Composite) yazilmali
  ❌ "Tungsten Carbide electrode" → mevcut degil, Pt-Ir kullanin
  ❌ "Hot-tap installation" → yerine "Easy retrofit installation" kullanin
  ❌ "GSM/NB-IoT remote monitoring" → bu ozellik mevcut degil

HALA DOGRULANAMAMIS (seviye cihazlari siteden cekilemedi):
  [?] B1-B6 ve C1-C3 teknik detaylari → VFA sitesinden ayrica kontrol edilmeli
  [?] D1 RCS 3100 vs 2100 farki → VFA sitesinden ayrica kontrol edilmeli
  [?] D2 VF-BTT-S detaylari → VFA sitesinden ayrica kontrol edilmeli
```

### Gereken Materyaller (kullanicidan istenmeli):
```
[ ] PM / Process Meters logosu
[ ] Tum urunlerin yuksek cozunurluklu fotograflari
[ ] 3D debimetre model dosyasi (.step / .glb / .fbx)
[ ] Fabrika / uretim fotografi
[ ] Saha uygulama fotograflari
[ ] PDF datasheet'ler (her urun icin)
[ ] WhatsApp numarasi
[ ] Email adresi (teklif formu icin)
```

---

> Bu dosya pmeters.com sitesinin tamamini kapsar.
> SEO altyapisi + urun icerikleri + UX stratejisi + tasarim yonlendirmesi
> tek dosyada birlestirilmistir.
>
> Claude Design bu dosyayi kullanarak siteyi bastan sona tasarlayabilir.
> Icerik dogrulugu icin Bolum 15'teki maddeler ureticiden teyit alinmalidir.
