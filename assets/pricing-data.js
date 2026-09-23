/* ═══════════════════════════════════════════════════════════
   NF_PRICING — 2026 Bayi Fiyat Tablosu (EUR)
   Kaynak: 2026 Fiyatlar.xlsx
   Son güncelleme: 2026-09-19
   ═══════════════════════════════════════════════════════════ */

const NF_PRICING = {
  version: '2026-v2',
  currency: 'EUR',

  products: {

    /* ─── ELEKTROMANYETİK DEBİMETRE (VMF-E Standart) ─── */
    'NT-VMF': {
      byDN: {
        'DN10':[725,null],'DN15':[390,null],'DN20':[390,null],'DN25':[390,null],
        'DN32':[400,null],'DN40':[410,null],'DN50':[420,null],
        'DN65':[450,490],'DN80':[490,510],'DN100':[500,540],
        'DN125':[540,650],'DN150':[620,680],'DN200':[700,770],
        'DN250':[890,1050],'DN300':[1150,1350],'DN350':[1280,1720],
        'DN400':[1480,1760],'DN450':[1700,2050],'DN500':[1850,2200],
        'DN600':[1980,2800],'DN700':[2650,3400],
        'DN800':[3200,4100],'DN900':[3900,5100],'DN1000':[4750,6800]
      },
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225},
        output: {'4–20mA + HART':148},
        ip: {'IP68':{pct:20}},
        pn: {'PN25':{pct:15},'PN40':{pct:25},'PN63':{pct:40}},
        supply: {'Battery 3.6V Li':450}
      }
    },

    /* ─── EM Remote Tip (aynı fiyat) ─── */
    'NT-VMF-R': { ref: 'NT-VMF' },

    /* ─── EM Pilli (VMF-E + pil opsiyonu) ─── */
    'NT-VMF-B': { ref: 'NT-VMF' },
    'NT-VMF-BT': { ref: 'NT-VMF' },

    /* ─── EM Gıda/Kelepçe Tip (VMF-C) — [PTFE, PFA] ─── */
    'NT-VMF-S': {
      byDN: {
        'DN25':[800,865],'DN32':[810,870],'DN40':[820,880],'DN50':[840,900],
        'DN65':[940,990],'DN80':[945,1010],'DN100':[1095,1160],
        'DN125':[1270,1340],'DN150':[1380,1450],'DN200':[1710,1800]
      },
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225}
      }
    },

    /* ─── EM Wafer Tip ─── */
    'NT-VMF-W': { ref: 'NT-VMF' },

    /* ─── EM Daldırma Tip ─── */
    'NT-VMF-I': { base: 900, listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225},
        output: {'4–20mA + HART':148}
      }
    },

    /* ─── EM Kısmen Dolu ─── */
    'NT-VMF-P': { ref: 'NT-VMF' },

    /* ─── EM 0D (düz boru gerektirmeyen) ─── */
    'NT-VMF-0D': { ref: 'NT-VMF' },

    /* ─── EM Bulamaç (Slurry) ─── */
    'NT-VMF-SL': { ref: 'NT-VMF' },

    /* ─── EM Mini (VMF-M) ─── */
    'NT-VMF-M': {
      byDN: {'DN3':[550],'DN6':[550],'DN10':[500],'DN15':[500]},
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225}
      }
    },

    /* ─── TÜRBİN DEBİMETRE (VTD) ─── */
    'NT-VTR': {
      byDN: {
        'DN15':[120],'DN20':[122],'DN25':[124],'DN32':[132],
        'DN40':[168],'DN50':[180],'DN65':[360],'DN80':[392],
        'DN100':[480],'DN125':[904],'DN150':[980]
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

    /* ─── Ultrasonik Taşınabilir / Duvar Tip ─── */
    'NT-TUF-H': { ref: 'NT-ULF' },
    'NT-TUF-S': { ref: 'NT-ULF' },

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
        pn: {'PN40':{pct:10}},
        temp: {'350°C':200}
      }
    },

    /* ─── AÇIK KANAL ULTRASONİK (OCF) ─── */
    'NT-VAK': { base: 640, listRatio: 2.0, options: {} },

    /* ─── METAL TÜPLÜ DEBİMETRE (VFF) — [304SS, 316SS] ─── */
    'NT-MTF': {
      byDN: {
        'DN15':[340,530],'DN20':[370,610],'DN25':[390,640],
        'DN32':[450,720],'DN40':[500,730],'DN50':[610,920],
        'DN65':[1010,1490],'DN80':[1110,1640],'DN100':[1400,2340],
        'DN150':[2200,3050]
      },
      listRatio: 2.0,
      options: {
        output: {'4–20mA + HART':220},
        temp: {'300°C':180},
        pn: {'PN25':{pct:15},'PN40':{pct:25},'PN63':{pct:40}}
      }
    },

    /* ─── CAM TÜPLÜ DEBİMETRE (VA) ─── */
    'NT-VA': {
      byDN: {
        'DN15':[58],'DN25':[72],'DN40':[85],'DN50':[124]
      },
      listRatio: 1.8,
      options: {}
    },

    /* ─── OVAL DİŞLİ DEBİMETRE (VDD) ─── */
    'NT-VDD': {
      byDN: {
        'DN15':[315],'DN20':[315],'DN25':[399],'DN32':[735],
        'DN40':[399],'DN50':[462],'DN80':[840]
      },
      listRatio: 1.7,
      options: {}
    },

    /* ─── HELİSEL DİŞLİ DEBİMETRE ─── */
    'NT-VDD-O': { ref: 'NT-VDD' },

    /* ─── CORİOLİS DEBİMETRE ─── */
    'NT-CMF': {
      byDN: {
        'DN15':[2500],'DN25':[2800],'DN40':[3200],'DN50':[3600],
        'DN80':[5200],'DN100':[6500]
      },
      listRatio: 1.5,
      options: {}
    },

    /* ─── TERMAL KÜTLE DEBİMETRE (SUTO S415) ─── */
    'NT-TMF': {
      byDN: {
        'DN8':[390],'DN15':[415],'DN20':[425],'DN25':[435],'DN32':[575],
        'DN40':[860],'DN50':[870],'DN65':[880],'DN80':[900],
        'DN100':[950]
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── CLAMP-ON GAZ ULTRASONİK ─── */
    'NT-S415': { ref: 'NT-ULF' },

    /* ─── RADAR SEVİYE SENSÖRÜ (VRS) ─── */
    'NT-VRS': { base: 144, listRatio: 3.0, options: {} },
    'NT-RLS-H': { base: 176, listRatio: 3.0, options: {} },

    /* ─── ULTRASONİK SEVİYE ─── */
    'NT-VUS': { base: 120, listRatio: 2.5, options: {} },

    /* ─── HİDROSTATİK SEVİYE ─── */
    'NT-VHL': { base: 85, listRatio: 2.5, options: {} },

    /* ─── KAPASİTİF SEVİYE ─── */
    'NT-VKS': { base: 95, listRatio: 2.5, options: {} },

    /* ─── MANYETİK SEVİYE GÖSTERGESİ (VSG) ─── */
    'NT-MLP': {
      byLength: {
        300:6593, 400:6954, 500:7296, 600:7714, 700:8005, 800:8322,
        900:8652, 1000:8968, 1100:9310, 1200:9652, 1300:9994, 1400:10335,
        1500:10678, 1600:11019, 1700:11361, 1800:11702, 1900:12121,
        2000:12540, 2200:13382, 2400:14024, 2500:14326, 2600:14628,
        2800:15604, 3000:16264, 3500:17850, 4000:19646
      },
      listRatio: 2.6,
      options: {}
    },

    /* ─── MANYETOSTRİKTİF SEVİYE İNDİKATÖRÜ ─── */
    'NT-MBP': { ref: 'NT-MLP' },
    'NT-MLI-EX': { ref: 'NT-MLP' },
    'NT-MLI-BR': { ref: 'NT-MLP' },

    /* ─── ŞAMANDIRALI SEVİYE ŞALTERİ (ELES) ─── */
    'NT-FLT': { base: 18, listRatio: 2.5, options: {} },
    'NT-LSW-F': { ref: 'NT-FLT' },

    /* ─── YANDAN MONTAJ SEVİYE ─── */
    'NT-VMS': {
      variants: {
        'Plastik 24VDC 100mm':63, 'Plastik 220VAC 100mm':59,
        'Plastik 24VDC 200mm':67, 'Plastik 220VAC 200mm':63,
        'Alüminyum 24VDC 100mm':76, 'Alüminyum 220VAC 100mm':71,
        'Alüminyum 24VDC 200mm':76, 'Alüminyum 220VAC 200mm':71,
        'Alüminyum 24VDC 500mm':74, 'Alüminyum 220VAC 500mm':74
      },
      listRatio: 2.5,
      options: {
        extension: {'Uzatma Mili 50cm':10.5, 'Uzatma Mili 100cm':12.6}
      }
    },
    'NT-LSW-M': { base: 20, listRatio: 2.5, options: {} },

    /* ─── MOTORLU SEVİYE (VMS) ─── */
    'NT-LSW-P': { base: 59, listRatio: 2.5, options: {} },

    /* ─── TİTREŞİMLİ ÇATAL (VLV) ─── */
    'NT-VLV-VBR': { base: 84, listRatio: 2.5, options: {} },
    'NT-LSW-V': { ref: 'NT-VLV-VBR' },

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
    'NT-EXNT': { base: 75, listRatio: 2.5, options: {} },
    'NT-DMPX': { base: 350, listRatio: 2.0, options: {} },
    'NT-BTT-S': { base: 55, listRatio: 2.5, options: {} },

    /* ─── FARK BASINÇ TRANSMİTTERİ ─── */
    'NT-DPT': { base: 350, listRatio: 2.0, options: {} },

    /* ─── FARK BASINÇ ŞALTERİ ─── */
    'NT-VDP-A': { base: 38, listRatio: 2.5, options: {} },
    'NT-VDP-L': { base: 45, listRatio: 2.5, options: {} },

    /* ─── BASINÇ ŞALTERİ ─── */
    'NT-VPO': { base: 32, listRatio: 2.5, options: {} },

    /* ─── MANOMETRE ─── */
    'NT-MNM': { base: 28, listRatio: 2.5, options: {} },

    /* ─── TERMOKUPL ─── */
    'NT-VTC': { base: 25, listRatio: 2.5, options: {} },

    /* ─── PT100 / RTD ─── */
    'NT-VPT': {
      variants: {
        'L:50mm':23, 'L:100mm':24, 'L:150mm':25, 'L:200mm':27,
        'L:250mm':29, 'L:300mm':31, 'L:350mm':32, 'L:400mm':33,
        'L:450mm':34, 'L:500mm':35
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── SICAKLIK/NEM TRANSMİTTERİ ─── */
    'NT-VHT': { base: 65, listRatio: 2.0, options: {} },

    /* ─── CO2/SICAKLIK/NEM TRANSMİTTERİ ─── */
    'NT-CO2': { base: 85, listRatio: 2.0, options: {} },

    /* ─── KIZILÖTESİ TERMOMETRE ─── */
    'NT-IRT': { base: 120, listRatio: 2.0, options: {} },

    /* ─── KOMPAKT SICAKLIK GÖSTERGESİ ─── */
    'NT-TCS': { base: 55, listRatio: 2.0, options: {} },

    /* ─── PROSES İNDİKATÖRÜ ─── */
    'NT-VBT-G': { base: 85, listRatio: 2.0, options: {} },
    'NT-VBT-G11': { base: 65, listRatio: 2.0, options: {} },

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
    'NT-VAS': {
      variants: {
        'VAS-10 Ekonomik 1/2"':17, 'VAS-10 Ekonomik 1"':17,
        'VAS-10 Plastik Dilli 3/4"':18,
        'VAS-20 Paslanmaz Dilli 1/2"':38, 'VAS-20 Paslanmaz Dilli 1"':38,
        'VAS-20 Plastik Dilli 1/2"':31, 'VAS-20 Plastik Dilli 1"':31,
        'VAS-30 Pirinç 1/2"':38, 'VAS-30 Pirinç 1"':38,
        'VAS-FS10 Termal':84
      },
      listRatio: 2.5,
      options: {}
    },

    /* ─── AKIŞ GÖSTERGESİ (VAG) ─── */
    'NT-VAG': {
      byDN: {'DN15':[52],'DN20':[56],'DN25':[72],'DN32':[52],'DN40':[64],'DN50':[72]},
      listRatio: 2.3,
      options: { temp: {'200°C':20,'300°C':20} }
    },

    /* ─── PATLAC VALF ─── */
    'NT-BDV': { base: 55, listRatio: 2.0, options: {} },

    /* ─── TİMER ─── */
    'NT-TMR': { base: 45, listRatio: 2.0, options: {} },

    /* ─── ADIM KONTROL ─── */
    'NT-STC': { base: 85, listRatio: 2.0, options: {} },

    /* ─── AÇI SENSÖRÜ ─── */
    'NT-VKS-H 3100/2100': { base: 120, listRatio: 2.0, options: {} },

    /* ─── EĞİM SENSÖRÜ ─── */
    'NT-INS': { base: 95, listRatio: 2.0, options: {} },

    /* ─── LİNEER CETVEL / ENKODER ─── */
    'NT-MLC': { base: 85, listRatio: 2.0, options: {} },
    'NT-MLS-E': { base: 45, listRatio: 2.0, options: {} },
    'NT-PLC': { base: 75, listRatio: 2.0, options: {} },
    'NT-MSC': { base: 120, listRatio: 2.0, options: {} },
    'NT-OLC': { base: 95, listRatio: 2.0, options: {} },

    /* ─── GAZ DEDEKTÖRÜ ─── */
    'NT-GDC': { base: 280, listRatio: 2.0, options: {} },
    'NT-GDI': { base: 320, listRatio: 2.0, options: {} },
    'NT-GDE': { base: 260, listRatio: 2.0, options: {} },

    /* ─── DATALOGGER ─── */
    'NT-DLG': { base: 150, listRatio: 2.0, options: {} },

    /* ─── EL ALETLERİ ─── */
    'NT-ANM': { base: 45, listRatio: 2.0, options: {} },
    'NT-SLM': { base: 65, listRatio: 2.0, options: {} },
    'NT-GLD': { base: 85, listRatio: 2.0, options: {} },
    'NT-AQM': { base: 120, listRatio: 2.0, options: {} },
    'NT-TAO': { base: 95, listRatio: 2.0, options: {} },

    /* ─── MİNİ SEVİYE ŞALTERİ (VML) ─── */
    'NT-VML': {
      variants: {
        'Paslanmaz 304 (Yandan)':13, 'Paslanmaz 316 (Yandan)':22,
        'Paslanmaz Soketli 304':18, 'Paslanmaz Soketli 316':30,
        'Plastik PP (Yandan)':4, 'PVDF (Yandan)':18,
        'Plastik Üstten 2cm':2, 'Plastik Üstten 3cm':2.5, 'Plastik Üstten 4cm':3
      },
      listRatio: 2.5,
      options: {}
    },

    /* ─── ORP ELEKTRODU ─── */
    'NT-ORP': { base: 160, listRatio: 2.0, options: {} },

    /* ─── ONLİNE ANALİZÖR ─── */
    'NT-ANZ': {
      variants: {
        '2091PRO (pH/ORP/Sıcaklık)':310, '2090PRO (İletkenlik/TDS/Tuzluluk)':325
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── KATALOG KOD EŞLEMELERİ (alternatif kodlar) ─── */
    'NT-DK800': { ref: 'NT-VA' },
    'NT-TUF-2000': { ref: 'NT-ULF' },
    'NT-VKS-S': { base: 72, listRatio: 2.5, options: {} },
    'NT-ELES-S': { base: 13, listRatio: 2.5, options: {} },
    'NT-VDZ': { ref: 'NT-LSW-D' },
    'NT-ILS': { base: 28, listRatio: 2.5, options: {} },
    'NT-VKS-H': { ref: 'NT-VKS-H 3100/2100' },
    'NT-ELES': { ref: 'NT-FLT' },
    'NT-VBT': { ref: 'NT-BCT' },
    'NT-EPI': { ref: 'NT-BCT' },
    'NT-NAT': { ref: 'NT-BCT' },
    'NT-DMP': { ref: 'NT-DPT' },
    'NT-BFT': { ref: 'NT-DPT' },
    'NT-TG': { ref: 'NT-VPO' },
    'NT-KP': { ref: 'NT-VPO' },
    'NT-A300': { ref: 'NT-MNM' },
    'NT-S100': { ref: 'NT-MNM' },
    'NT-C600': { ref: 'NT-MNM' },
    'NT-FBT': { ref: 'NT-TCS' },
    'NT-DI': { ref: 'NT-VBT-G' },
    'NT-VBT-G 11': { ref: 'NT-VBT-G11' },
    'NT-UPC': { base: 95, listRatio: 2.0, options: {} },
    'NT-PRFC': { ref: 'NT-STC' },
    'NT-UT': { ref: 'NT-CTRL' },
    'NT-LT': { ref: 'NT-CTRL' },
    'NT-TT': { ref: 'NT-CTRL' },
    'NT-VT': { ref: 'NT-ACT' },
    'NT-ATG': { ref: 'NT-ACT' },
    'NT-KE100': { ref: 'NT-ACT' },
    'NT-1901': { ref: 'NT-SOL' },
    'NT-7901': { ref: 'NT-SOL' },
    'NT-PV250': { ref: 'NT-VLV' },
    'NT-RCS': { ref: 'NT-VKS-H 3100/2100' }
  }
};
