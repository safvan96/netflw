/* ═══════════════════════════════════════════════════════════
   NF_PRICING — 2026 Bayi Fiyat Tablosu (USD)
   Kaynak: 2026 Fiyatlar.xlsx
   Son güncelleme: 2026-09-19
   ═══════════════════════════════════════════════════════════ */

const NF_PRICING = {
  version: '2026-v1',
  currency: 'USD',

  products: {

    /* ─── ELEKTROMANYETİK DEBİMETRE (VMF-E Standart) ─── */
    'NT-VMF': {
      byDN: {
        'DN10':[725,null],'DN15':[390,null],'DN20':[390,null],'DN25':[390,null],
        'DN32':[400,null],'DN40':[410,null],'DN50':[420,null],
        'DN65':[450,490],'DN80':[490,510],'DN100':[500,540],
        'DN125':[540,650],'DN150':[620,680],'DN200':[700,770],
        'DN250':[890,1050],'DN300':[1150,1350],'DN350':[1280,1720],
        'DN400':[1480,1760],'DN500':[1850,2200],'DN600':[1980,2800],
        'DN800':[3200,4100],'DN1000':[4750,6800]
      },
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225},
        output: {'4–20mA + HART':148},
        ip: {'IP68':{pct:20}},
        pn: {'PN25':{pct:15},'PN40':{pct:25}},
        supply: {'Battery 3.6V Li':450}
      }
    },

    /* ─── EM Remote Tip (aynı fiyat, ayrı transmitter yok) ─── */
    'NT-VMF-R': { ref: 'NT-VMF' },

    /* ─── EM Pilli (VMF-E + pil opsiyonu) ─── */
    'NT-VMF-B': { ref: 'NT-VMF' },

    /* ─── EM Gıda/Kelepçe Tip (VMF-C) ─── */
    'NT-VMF-S': {
      byDN: {
        'DN25':[800,null],'DN32':[810,null],'DN40':[820,null],'DN50':[840,null],
        'DN65':[940,990],'DN80':[945,1010],'DN100':[1095,1160],
        'DN125':[1270,1340],'DN150':[1380,1450],'DN200':[1710,1800]
      },
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225}
      }
    },

    /* ─── EM Daldırma Tip ─── */
    'NT-VMF-I': { base: 900, listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225},
        output: {'4–20mA + HART':148}
      }
    },

    /* ─── EM Wafer Tip ─── */
    'NT-VMF-W': { ref: 'NT-VMF' },

    /* ─── EM Mini (VMF-M) ─── */
    'NT-VMF-M': {
      byDN: {'DN3':[550],'DN6':[550],'DN10':[500],'DN15':[500]},
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225}
      }
    },

    /* ─── TÜRBİN DEBİMETRE (VTD) ─── */
    'NT-TRB': {
      byDN: {
        'DN15':[132],'DN20':[132],'DN25':[132],'DN32':[148],
        'DN40':[172],'DN50':[180],'DN65':[360],'DN80':[392],
        'DN100':[480]
      },
      listRatio: 2.5,
      options: {}
    },

    /* ─── ULTRASONİK DEBİMETRE (VUF) ─── */
    'NT-ULF': {
      variants: {
        'Portable':376, 'Wall-Mount':288, 'Module':160, 'Dual-Channel':600
      },
      byDN: {
        'DN15':[480],'DN20':[500],'DN25':[520],'DN32':[540],
        'DN40':[420],'DN50':[440],'DN65':[452],'DN80':[460],
        'DN100':[480],'DN125':[528],'DN150':[592],'DN200':[720],
        'DN250':[880],'DN300':[1040]
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── VORTEKS DEBİMETRE (VRF) ─── */
    'NT-VTX': {
      byDN: {
        'DN15':[540],'DN20':[540],'DN25':[540],'DN32':[540],
        'DN40':[560],'DN50':[590],'DN65':[600],'DN80':[610],
        'DN100':[700],'DN125':[760],'DN150':[825],'DN200':[1175],
        'DN250':[1450],'DN300':[2050]
      },
      listRatio: 2.0,
      options: {
        pn: {'PN40':{pct:10}}
      }
    },

    /* ─── AÇIK KANAL ULTRASONİK (OCF) ─── */
    'NT-OCF': { base: 640, listRatio: 2.0, options: {} },

    /* ─── METAL TÜPLÜ DEBİMETRE (VFF) ─── */
    'NT-MTF': {
      byDN: {
        'DN15':[340,530],'DN20':[370,610],'DN25':[390,640],
        'DN32':[450,720],'DN40':[500,730],'DN50':[610,920],
        'DN65':[1010,1490],'DN80':[1110,1640],'DN100':[1400,2340],
        'DN150':[2200,3050]
      },
      listRatio: 2.0,
      options: {
        output: {'4–20mA + HART':220}
      }
    },

    /* ─── CAM TÜPLÜ DEBİMETRE (VA) ─── */
    'NT-VA': {
      byDN: {
        'DN15':[58],'DN25':[82],'DN40':[110],'DN50':[165],
        'DN80':[300],'DN100':[350]
      },
      listRatio: 1.8,
      options: {}
    },

    /* ─── OVAL DİŞLİ DEBİMETRE (VDD) ─── */
    'NT-OGF': {
      byDN: {
        'DN15':[336],'DN20':[315],'DN25':[399],'DN32':[735],
        'DN40':[399],'DN50':[462],'DN80':[840]
      },
      listRatio: 1.7,
      options: {}
    },

    /* ─── HELİSEL DİŞLİ DEBİMETRE ─── */
    'NT-HGF': { ref: 'NT-OGF' },

    /* ─── CORİOLİS DEBİMETRE ─── */
    'NT-CMF': {
      byDN: {
        'DN15':[2500],'DN25':[2800],'DN40':[3200],'DN50':[3600],
        'DN80':[5200],'DN100':[6500]
      },
      listRatio: 1.5,
      options: {}
    },

    /* ─── TERMAL KÜTLE DEBİMETRE (SUTO) ─── */
    'NT-TMF': {
      byDN: {
        'DN15':[415],'DN20':[425],'DN25':[435],'DN32':[575],
        'DN40':[860],'DN50':[870],'DN65':[880],'DN80':[900],
        'DN100':[950]
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── CLAMP-ON GAZ ULTRASONİK ─── */
    'NT-CTG': { ref: 'NT-ULF' },

    /* ─── RADAR SEVİYE SENSÖRÜ (VRS) ─── */
    'NT-RLS': { base: 144, listRatio: 3.0, options: {} },
    'NT-RLS-H': { base: 176, listRatio: 3.0, options: {} },

    /* ─── ULTRASONİK SEVİYE ─── */
    'NT-ULS': { base: 120, listRatio: 2.5, options: {} },

    /* ─── HİDROSTATİK SEVİYE ─── */
    'NT-HLS': { base: 85, listRatio: 2.5, options: {} },

    /* ─── KAPASİTİF SEVİYE ─── */
    'NT-CLS': { base: 95, listRatio: 2.5, options: {} },

    /* ─── MANYETİK SEVİYE GÖSTERGESİ (VSG) ─── */
    'NT-MLP': {
      byLength: {
        300:6593, 500:7270, 600:7709, 800:8322, 1000:8968,
        1200:9650, 1500:10673, 2000:12540, 2500:14315, 3000:16250
      },
      listRatio: 2.6,
      options: {}
    },

    /* ─── MANYETOSTRİKTİF SEVİYE İNDİKATÖRÜ ─── */
    'NT-MLI': { ref: 'NT-MLP' },

    /* ─── ŞAMANDIRALI SEVİYE ŞALTERİ (ELES) ─── */
    'NT-FLT': { base: 18, listRatio: 2.5, options: {} },

    /* ─── YANDAN MONTAJ SEVİYE ─── */
    'NT-MLS': { base: 13, listRatio: 2.5, options: {} },

    /* ─── TİTREŞİMLİ ÇATAL (VLV) ─── */
    'NT-VLS': { base: 84, listRatio: 2.5, options: {} },
    'NT-LSW-V': { ref: 'NT-VLS' },

    /* ─── DİYAFRAM SEVİYE ŞALTERİ ─── */
    'NT-LSW-D': { base: 95, listRatio: 2.5, options: {} },

    /* ─── SU BASKIN DEDEKTÖRÜ ─── */
    'NT-WLD': { base: 45, listRatio: 2.0, options: {} },

    /* ─── BASINÇ TRANSMİTTERİ (TRF/ECT) ─── */
    'NT-BCT': {
      variants: {
        '0-1 bar':38, '0-4 bar':38, '0-10 bar':38, '0-16 bar':38,
        '0-25 bar':38, '0-40 bar':38, '0-60 bar':38, '0-100 bar':38,
        '0-160 bar':38, '0-250 bar':38, '0-400 bar':45, '0-600 bar':45
      },
      listRatio: 2.6,
      options: {}
    },
    'NT-BCT-D': { base: 48, listRatio: 2.5, options: {} },
    'NT-BCT-E': { base: 75, listRatio: 2.5, options: {} },

    /* ─── FARK BASINÇ TRANSMİTTERİ ─── */
    'NT-DPT': { base: 350, listRatio: 2.0, options: {} },

    /* ─── BASINÇ ŞALTERİ ─── */
    'NT-PSW': { base: 32, listRatio: 2.5, options: {} },

    /* ─── MANOMETRE ─── */
    'NT-MNM': { base: 28, listRatio: 2.5, options: {} },

    /* ─── TERMOKUPL ─── */
    'NT-TC': { base: 25, listRatio: 2.5, options: {} },

    /* ─── PT100 / RTD ─── */
    'NT-RTD': {
      variants: {
        'L:50mm':23, 'L:100mm':24, 'L:150mm':25, 'L:200mm':27,
        'L:250mm':29, 'L:300mm':31, 'L:400mm':33, 'L:500mm':35
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── SICAKLIK/NEM TRANSMİTTERİ ─── */
    'NT-HT': { base: 65, listRatio: 2.0, options: {} },

    /* ─── KOMPAKT SICAKLIK GÖSTERGESİ ─── */
    'NT-TCS': { base: 55, listRatio: 2.0, options: {} },

    /* ─── PROSES İNDİKATÖRÜ ─── */
    'NT-EPD': { base: 85, listRatio: 2.0, options: {} },
    'NT-EPD11': { base: 65, listRatio: 2.0, options: {} },

    /* ─── PID KONTROLÖR ─── */
    'NT-UPI': { base: 95, listRatio: 2.0, options: {} },

    /* ─── SİNYAL DÖNÜŞTÜRÜCÜ ─── */
    'NT-CTRL': { base: 45, listRatio: 2.0, options: {} },
    'NT-SCV': { base: 42, listRatio: 2.0, options: {} },

    /* ─── ELEKTRİKLİ AKTÜATÖR ─── */
    'NT-ACT': { base: 180, listRatio: 2.0, options: {} },

    /* ─── SOLENOİD VALF ─── */
    'NT-SOL': { base: 35, listRatio: 2.5, options: {} },
    'NT-SOL-L': { base: 120, listRatio: 2.5, options: {} },

    /* ─── KELEBEK VANA ─── */
    'NT-VLV': { base: 85, listRatio: 2.0, options: {} },

    /* ─── pH ANALİZÖRÜ ─── */
    'NT-PHA': { base: 310, listRatio: 2.0, options: {} },

    /* ─── EC ANALİZÖRÜ ─── */
    'NT-ECA': { base: 325, listRatio: 2.0, options: {} },

    /* ─── pH ELEKTROT ─── */
    'NT-PHE': { base: 130, listRatio: 2.0, options: {} },

    /* ─── EC ELEKTROT ─── */
    'NT-ECE': { base: 150, listRatio: 2.0, options: {} },

    /* ─── AKIŞ ŞALTERİ (VAS) ─── */
    'NT-FSW': {
      byDN: {'DN15':[17],'DN25':[17],'DN40':[38],'DN50':[38]},
      listRatio: 2.5,
      options: {}
    },

    /* ─── AKIŞ GÖSTERGESİ (VAG) ─── */
    'NT-FSG': {
      byDN: {'DN15':[52],'DN20':[52],'DN25':[52],'DN32':[52],'DN40':[57],'DN50':[65]},
      listRatio: 2.3,
      options: { temp: {'200°C':20,'300°C':20} }
    },

    /* ─── PATLAC VALF ─── */
    'NT-BDV': { base: 55, listRatio: 2.0, options: {} },

    /* ─── TİMER ─── */
    'NT-TMR': { base: 45, listRatio: 2.0, options: {} },

    /* ─── ADIM KONTROL ─── */
    'NT-STC': { base: 85, listRatio: 2.0, options: {} }
  }
};
