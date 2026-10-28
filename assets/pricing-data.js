/* ═══════════════════════════════════════════════════════════
   NF_PRICING — 2026 Bayi Fiyat Tablosu (USD)
   Kaynak: 2026 Fiyatlar.xlsx
   Son güncelleme: 2026-10-28
   ═══════════════════════════════════════════════════════════ */

const NF_PRICING = {
  version: '2026-v5',
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
        'DN400':[1480,1760],'DN450':[1700,2050],'DN500':[1850,2200],
        'DN600':[1980,2800],'DN700':[2650,3400],
        'DN800':[3200,4100],'DN900':[3900,5100],'DN1000':[4750,6800],
        'DN1200':[6050,8500],'DN1400':[13430,18000]
      },
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225},
        output: {'4–20mA + HART':148},
        ip: {'IP68':{pct:20}},
        pn: {'PN25':{pct:15},'PN40':{pct:25},'PN63':{pct:40}},
        supply: {'Battery 3.6V Li':450},
        exproof: {'Ex-proof':{pct:30}},
        accuracy: {'0.2%':{pct:35}}
      }
    },

    /* ─── EM Remote Tip (aynı fiyat) ─── */
    'NT-VMF-R': { ref: 'NT-VMF' },

    /* ─── EM Pilli (VMF-E + pil opsiyonu) ─── */
    'NT-VMF-B': { ref: 'NT-VMF' },
    'NT-VMF-BT': { ref: 'NT-VMF' },

    /* ─── EM Gıda/Kelepçe Tip (VMF-C) — [PTFE, PFA] ─── */
    'NT-VMF-C': {
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

    /* ─── EM Wafer/Gıda Tip (VMF-C fiyatları) ─── */
    'NT-VMF-W': { ref: 'NT-VMF-C' },

    /* ─── EM Bulamaç/Slurry (VMF-E + %40) ─── */
    'NT-VMF-S': {
      byDN: {
        'DN10':[1015,null],'DN15':[546,null],'DN20':[546,null],'DN25':[546,null],
        'DN32':[560,null],'DN40':[574,null],'DN50':[588,null],
        'DN65':[630,686],'DN80':[686,714],'DN100':[700,756],
        'DN125':[756,910],'DN150':[868,952],'DN200':[980,1078],
        'DN250':[1246,1470],'DN300':[1610,1890],'DN350':[1792,2408],
        'DN400':[2072,2464],'DN450':[2380,2870],'DN500':[2590,3080],
        'DN600':[2772,3920],'DN700':[3710,4760],
        'DN800':[4480,5740],'DN900':[5460,7140],'DN1000':[6650,9520]
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

    /* ─── EM Kısmen Dolu (VMF-E + %50) ─── */
    'NT-VMF-P': {
      byDN: {
        'DN10':[1088,null],'DN15':[585,null],'DN20':[585,null],'DN25':[585,null],
        'DN32':[600,null],'DN40':[615,null],'DN50':[630,null],
        'DN65':[675,735],'DN80':[735,765],'DN100':[750,810],
        'DN125':[810,975],'DN150':[930,1020],'DN200':[1050,1155],
        'DN250':[1335,1575],'DN300':[1725,2025],'DN350':[1920,2580],
        'DN400':[2220,2640],'DN450':[2550,3075],'DN500':[2775,3300],
        'DN600':[2970,4200],'DN700':[3975,5100],
        'DN800':[4800,6150],'DN900':[5850,7650],'DN1000':[7125,10200]
      },
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225}
      }
    },

    /* ─── EM 0D — düz boru gerektirmeyen (VMF-E + %30) ─── */
    'NT-VMF-0D': {
      byDN: {
        'DN10':[943,null],'DN15':[507,null],'DN20':[507,null],'DN25':[507,null],
        'DN32':[520,null],'DN40':[533,null],'DN50':[546,null],
        'DN65':[585,637],'DN80':[637,663],'DN100':[650,702],
        'DN125':[702,845],'DN150':[806,884],'DN200':[910,1001],
        'DN250':[1157,1365],'DN300':[1495,1755],'DN350':[1664,2236],
        'DN400':[1924,2288],'DN450':[2210,2665],'DN500':[2405,2860],
        'DN600':[2574,3640],'DN700':[3445,4420],
        'DN800':[4160,5330],'DN900':[5070,6630],'DN1000':[6175,8840]
      },
      listRatio: 2.0,
      options: {
        electrode: {'Titanium':90,'Tantalum':350,'Hastelloy C':120,'Hastelloy B':225}
      }
    },

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
        'DN4':[144],'DN6':[144],'DN10':[140],
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
      listRatio: 2.5,
      options: {}
    },

    /* ─── Ultrasonik Taşınabilir / Duvar Tip ─── */
    'NT-TUF-H': { ref: 'NT-ULF' },
    'NT-TUF-S': { ref: 'NT-ULF' },

    /* ─── ULTRASONİK YAZICILI / RAY TİP ─── */
    'NT-TUF-P': { base: 600, listRatio: 2.5, options: {} },
    'NT-TUF-R': { base: 160, listRatio: 2.5, options: {} },

    /* ─── HAT TİPİ ULTRASONİK DEBİMETRE (VUF-2000F) ─── */
    'NT-ULF-F': {
      byDN: {
        'DN15':[480],'DN20':[500],'DN25':[520],'DN32':[540],
        'DN40':[420],'DN50':[440],'DN65':[452],'DN80':[460],
        'DN100':[480],'DN125':[528],'DN150':[592],'DN200':[720],
        'DN250':[880],'DN300':[1040]
      },
      listRatio: 2.5,
      options: {}
    },

    /* ─── VORTEKS DEBİMETRE — SIKIŞTIRMA TİP (VRF-V) ─── */
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

    /* ─── VORTEKS DEBİMETRE — FLANŞLI TİP (VRF-F) ─── */
    'NT-VTX-F': {
      byDN: {
        'DN15':[630],'DN20':[630],'DN25':[630],'DN32':[640],
        'DN40':[640],'DN50':[640],'DN65':[675],'DN80':[700],
        'DN100':[830],'DN125':[940],'DN150':[1050],'DN200':[1400],
        'DN250':[1850],'DN300':[2600]
      },
      listRatio: 2.0,
      options: {
        pn: {'PN40':{pct:10}},
        temp: {'350°C':200}
      }
    },

    /* ─── VORTEKS DEBİMETRE — DALDIRMA TİP (VRF-I) ─── */
    'NT-VTX-I': {
      variants: {
        '100-400mm':800, '450-800mm':800, '900-1200mm':800
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── AÇIK KANAL ULTRASONİK (OCF) ─── */
    'NT-VAK': { base: 640, listRatio: 2.0, options: {} },

    /* ─── AÇIK KANAL RADAR DEBİMETRE (VAF-R) ─── */
    'NT-VAF-R': { base: 2720, listRatio: 2.0, options: {} },

    /* ─── METAL TÜPLÜ DEBİMETRE (VFF) — [304SS, 316SS] ─── */
    'NT-MTF': {
      byDN: {
        'DN15':[340,530],'DN20':[370,610],'DN25':[400,680],
        'DN32':[450,730],'DN40':[500,820],'DN50':[540,880],
        'DN65':[575,940],'DN80':[700,1140],'DN100':[920,1450],
        'DN125':[1250,1800],'DN150':[1500,null]
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
      listRatio: 2.4,
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
        'DN8':[390],'DN15':[415],'DN20':[425],'DN25':[435],'DN32':[575]
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── SUTO S418 PRO (Termal Kütle — Pro Seri) ─── */
    'NT-S418': {
      byDN: {
        'DN8':[840],'DN15':[860],'DN20':[865],'DN25':[880],'DN32':[950]
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── CLAMP-ON GAZ ULTRASONİK ─── */
    'NT-S415': { ref: 'NT-TMF' },

    /* ─── SUTO S401 DALDIRMA TİP TERMAL KÜTLE DEBİMETRE ─── */
    'NT-S401': {
      variants: {
        '160mm':1565, '220mm':1570, '300mm':1650, '400mm':1650
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── SUTO S421 HAT TİPİ TERMAL KÜTLE DEBİMETRE (Dişli) ─── */
    'NT-S421': {
      byDN: {
        'DN8':[795],'DN15':[815],'DN20':[825],'DN25':[835],'DN32':[900]
      },
      listRatio: 2.0,
      options: {}
    },

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
        300:6593, 400:6954, 500:7296, 600:7714, 700:8056, 800:8322,
        900:8664, 1000:8968, 1100:9310, 1200:9652, 1300:9994, 1400:10336,
        1500:10678, 1600:11020, 1700:11362, 1800:11704, 1900:12046,
        2000:12540, 2200:13148, 2400:13908, 2500:14326, 2600:14744,
        2800:15428, 3000:16264, 3500:18164, 4000:19646
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
    'NT-VLV-VBR': {
      variants: {
        'M Serisi (Standart)':84,
        'B Serisi':144,
        'B Serisi 220°C':160,
        'P Serisi':168
      },
      listRatio: 2.5,
      options: {}
    },
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
        '0-160 bar':38, '0-250 bar':38, '0-400 bar':38
      },
      listRatio: 2.0,
      options: {}
    },
    /* ─── BASINÇ TRANSMİTTERİ 1/2" (ECT G1/2") ─── */
    'NT-BCT-2': {
      variants: {
        '0-1 bar':45, '0-4 bar':45, '0-10 bar':45, '0-16 bar':45,
        '0-25 bar':45, '0-40 bar':45, '0-60 bar':45, '0-100 bar':45,
        '0-160 bar':45, '0-250 bar':45, '0-400 bar':45
      },
      listRatio: 2.0,
      options: {}
    },
    /* ─── BASINÇ TRANSMİTTERİ mbar (ECT Mbar) ─── */
    'NT-BCT-M': {
      variants: {
        '0-0.1 mbar':48, '0-0.16 mbar':48, '0-0.2 mbar':48,
        '0-0.25 mbar':48, '0-0.4 mbar':48, '0-0.6 mbar':48
      },
      listRatio: 2.0,
      options: {}
    },
    /* ─── VAKUM BASINÇ TRANSMİTTERİ ─── */
    'NT-BCT-V': { base: 49, listRatio: 2.0, options: {} },
    'NT-BCT-D': { base: 45, listRatio: 2.0, options: {} },
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
        'VAS-30 Pirinç 1/2"':36, 'VAS-30 Pirinç 1"':36,
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

    /* ─── ŞAMANDIRALI PLASTİK DEBİMETRE (LZS) ─── */
    'NT-LZS': {
      variants: {
        'DN15 (5-500 Lt/h)':6.25, 'DN25 (100-3000 Lt/h)':8.75,
        'DN32 (0.4-10 m3/h)':15, 'DN50 (0.4-16 m3/h)':18.5,
        'DN65 (5-60 m3/h)':35, 'DN100 (18-120 m3/h)':145,
        'DN125 (25-180 m3/h)':155
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── AYAR VANALI AKRİLİK DEBİMETRE (LZM) ─── */
    'NT-LZM': {
      variants: {
        '4T serisi':12.5, '6T serisi':13, '15T serisi':15,
        '20T serisi':16, '25T serisi':20
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── ELES57 ŞAMANDIRALI SEVİYE ŞALTERİ (14mm Boru) ─── */
    'NT-ELES57P': {
      byLength: {
        100:54, 150:55, 200:56, 300:58, 400:60, 500:63, 600:65,
        700:67, 800:70, 1000:75, 1200:84, 1500:93, 1800:102,
        2000:112, 2200:125, 2500:132, 2800:145, 3000:152,
        3500:164, 4000:178
      },
      listRatio: 2.0,
      options: {}
    },
    'NT-ELES57S': {
      byLength: {
        100:66, 150:68, 200:70, 300:72, 400:76, 500:78, 600:80,
        700:84, 800:86, 1000:92, 1200:100, 1500:112, 1800:124,
        2000:134, 2200:146, 2500:158, 2800:170, 3000:180,
        3500:196, 4000:212
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── ELES11 ŞAMANDIRALI SEVİYE TRANSMİTTERİ ─── */
    'NT-ELES11P': {
      byLength: {
        100:95, 150:100, 200:104, 300:113, 400:125, 500:136,
        600:148, 700:159, 800:172, 1000:189, 1200:211, 1500:243,
        1800:278, 2000:305, 2200:320, 2500:350, 2800:377,
        3000:401, 3500:437, 4000:487
      },
      listRatio: 2.0,
      options: {}
    },
    'NT-ELES11S': {
      byLength: {
        100:130, 150:135, 200:145, 300:165, 400:190, 500:215,
        600:235, 700:265, 800:285, 1000:315, 1200:365, 1500:430,
        1800:500, 2000:550, 2200:575, 2500:625, 2800:700,
        3000:750, 3500:825, 4000:900
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── ELES5 ŞAMANDIRALI SEVİYE ŞALTERİ (8mm Boru) ─── */
    'NT-ELES5-M1': {
      byLength: {
        100:20, 150:21, 200:22, 300:23, 400:24, 500:25,
        600:26, 700:28, 800:30, 900:33, 1000:36, 1200:40
      },
      listRatio: 2.0,
      options: {}
    },
    'NT-ELES5-M2': {
      byLength: {
        50:9, 100:10.5, 150:11.5, 200:15, 250:16, 300:17,
        350:19, 400:20, 450:21, 500:22, 550:23, 600:24, 700:25
      },
      listRatio: 2.0,
      options: {}
    },

    /* ─── KATALOG KOD EŞLEMELERİ (alternatif kodlar) ─── */
    'NT-DK800': { base: 26, listRatio: 2.5, options: {} },
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
