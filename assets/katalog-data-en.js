/* NET FLOW — E-Catalogue data (English)
   All product codes carry the NT- prefix. */
window.NF_CAT = {
  lang:"en",
  brand:{name:"Net Flow", domain:"netflw.com", phone:"+90 541 373 79 53", mail:"info@netflw.com",
    tagline:"The export brand of VFA Elektronik", since:"12 years of manufacturing experience",
    addr:"Fevzıçakmak Mah. Aslım Cad. · Konya · Türkiye"},

  ui:{
    principle:"Operating Principle", contents:"Contents",
    jumpHint:"Click a product name to jump to its page",
    corporate:"Company", aboutTitle:"Who We Are", aboutLabel:"Who We Are",
    uses:"Applications", sectorsLong:"Industries Served", sectors:"Industries",
    variantImgs:"Model Images", notes:"Notes", models:"Models",
    specs:"Technical Specifications", contact:"Contact", address:"Address",
    waCta:"Message us on WhatsApp", exportBrand:"Export brand of VFA Elektronik",
    coverVfa:"The export brand of VFA Elektronik · 12 years of manufacturing experience",
    tagline:"Industrial Measurement", coverLabel:"Cover", backLabel:"Back Cover",
    coverEyebrow:"Product Catalogue · 2026",
    coverH1:"Measure.", coverH1em:"Take control.",
    coverLede:"End-to-end instrumentation solutions for flow, level, pressure and temperature measurement. Manufactured in Türkiye and calibrated in our TÜRKAK accredited laboratory.",
    madeIn:"Made in Türkiye",
    calibTitle:"Calibration Assurance",
    calibBody:"Electromagnetic flow meters are calibrated in our TÜRKAK accredited (AB-0354-K) ISO/IEC 17025:2017 laboratory over the 1–350 m³/h range with an uncertainty of ±0.27%. A traceable calibration certificate, recognised in more than 100 countries through the EA and ILAC mutual recognition arrangements, is supplied with the instrument. All other products are supplied as Yerli Malı (locally manufactured) certified, with an ISO 9001 quality system and a CE declaration.",
    projectTitle:"Project Enquiry",
    projectBody:"Share your measuring points, medium data and line sizes; our engineering team will support you with the appropriate product selection, sizing and quotation. For custom manufacturing and special process requirements please contact us directly.",
    closingLabel:"Automation", closingScreen:"Automation and Design",
    backH2:"Accurate measurement,<br>reliable data.",
    backSub:"Contact us for product selection, application support and quotations. Local manufacturing, fast delivery and direct engineering support.",
    contLabel:"Continued",
    rights:"© 2026 Net Flow · All rights reserved",
  },

  wp:{
    flow:["The coils create a magnetic field across the pipe bore.","As the conductive liquid passes through the field, a <b>voltage is induced</b>.","The electrodes read this voltage; it is proportional to velocity.","The transmitter converts the value into volumetric flow."],
    turbine:["The flow spins the turbine rotor inside the line.","The sensor counts blade passes as <b>pulses</b>.","Pulse frequency is proportional to flow velocity.","Totalised and instantaneous flow are calculated."],
    rota:["Liquid or gas flows upward through a tapered tube.","The float is held in <b>equilibrium</b> by the flow force.","Equilibrium height is proportional to flow rate.","The value is read directly from the scale."],
    vortex:["Vortices form behind the bluff body in the flow path.","Vortex shedding frequency is <b>proportional to velocity</b>.","A piezo sensor detects the pressure oscillation.","Flow is calculated for steam, gas and liquids."],
    ultra:["Two opposing transducers send ultrasonic signals.","The signal travelling with the flow arrives <b>faster</b>.","The transit-time difference is measured.","The difference is converted into flow velocity."],
    channel:["A weir or flume constricts the open channel.","The sensor measures water <b>level</b> without contact.","The level–flow relationship is applied.","Instantaneous and totalised flow are obtained."],
    metaltube:["The float rises inside the metal tube with the flow.","Its position is transferred outward by <b>magnetic coupling</b>.","The indicator pointer follows this position.","Readings are possible on opaque and high-pressure lines."],
    ovalgear:["The liquid fills the cavity between two oval gears.","Each rotation carries a <b>fixed volume</b>.","Rotations are counted by the sensor.","High accuracy is achieved on viscous liquids."],
    helical:["Two intermeshing helical rotors turn.","Each rotation transfers a defined <b>volume</b>.","Rotation pulses are counted.","Measurement is possible on highly viscous products."],
    thermal:["A heated probe is placed in the flow stream.","As gas passes, the probe <b>cools down</b>.","The cooling rate depends on mass flow.","No pressure or temperature correction is required."],
    coriolis:["The measuring tubes are vibrated in a controlled way.","The flow creates a <b>phase shift</b> in the tubes.","The shift is proportional to mass flow.","Density and temperature are measured as well."],
    switchflow:["A paddle or probe in the flow path changes position.","At the set flow rate the <b>contact</b> switches over.","The relay output is sent to the control panel.","Pump protection and alarms are provided."],
    sight:["The flow passes through a transparent sight glass.","The operator confirms flow <b>visually</b>.","A vane or ball movement shows the direction.","It is clear whether the line is flowing or not."],
    level:["The sensor is mounted on top of the tank.","The <b>distance</b> to the liquid surface is measured.","Level is calculated from the tank height.","A 4–20 mA or digital output is provided."],
    radar:["The antenna emits a high-frequency radar wave.","The wave <b>reflects</b> off the liquid surface.","Distance is derived from the round-trip time.","Dust, vapour and foam do not affect it."],
    hydro:["The probe is submerged to the bottom of the tank.","The liquid column creates <b>pressure</b> on the probe.","Pressure is converted to level using density.","A continuous level signal is generated."],
    capacitive:["The probe and tank wall form a capacitor.","As the level changes, <b>capacitance</b> changes.","The electronics measure this change.","Level is detected in both solids and liquids."],
    motor:["A small motor rotates the paddle continuously.","When material blocks the paddle, rotation <b>stops</b>.","Motor torque triggers the micro switch.","A full/empty signal is given via relay."],
    vibrating:["The tuning fork vibrates at its own frequency.","When material surrounds the fork, frequency <b>drops</b>.","The electronics detect this change.","A point level alarm is generated."],
    sideswitch:["The float is side-mounted on the tank wall.","When the level changes, the float <b>pivots</b>.","The magnet inside triggers a reed contact.","An NO/NC relay output is obtained."],
    diaphragm:["A flexible diaphragm contacts the material.","Material pressure <b>pushes</b> the diaphragm.","The movement actuates a micro switch.","A full signal is given for dust and granules."],
    flood:["The sensor is placed on the floor or in a sump.","When water touches it, the circuit <b>completes</b>.","The control unit raises an alarm.","Early warning against flooding is provided."],
    bypass:["The float in the bypass chamber rises with the liquid.","Its magnet <b>flips</b> the flag scale.","The colour change indicates the level.","No power is required and no maintenance is needed."],
    conductive:["Electrodes of different lengths reach into the tank.","When liquid touches an electrode, the circuit <b>conducts</b>.","The relay unit detects the conduction.","Full, empty and intermediate levels are controlled."],
    rope:["A cable-suspended probe is lowered into tall silos.","As material approaches, <b>capacitance</b> changes.","The electronics trigger once the threshold is passed.","Point level is obtained in deep silos."],
    floattx:["The float rides along a guide tube.","Its position is transferred <b>magnetically</b>.","A resistance chain converts position into a signal.","A continuous 4–20 mA output is provided."],
    pressure:["Process pressure acts on the measuring cell.","The sensing element <b>deflects</b> at micron scale.","The deflection is converted into an electrical signal.","It is transmitted as 4–20 mA."],
    diffpressure:["Pressure is taken from two separate points.","The <b>difference</b> is developed across the measuring cell.","The difference is converted into a signal.","Filter clogging and level are monitored."],
    exproof:["The measuring cell sits in a <b>flameproof</b> housing.","Process pressure is transferred to the sensor.","The signal is carried to the safe area.","Safe measurement in explosive atmospheres is ensured."],
    smart:["The sensor signal is processed digitally.","Temperature and linearity are <b>compensated</b>.","Parameters are entered locally from the display.","It connects to the system via HART/Modbus."],
    gauge:["The pressure sensor converts the reading to digital.","The value is read directly <b>on the display</b>.","Min/max values are held in memory.","Calibration is performed from the menu."],
    pswitch:["The set pressure value is reached.","The mechanism changes the <b>contact</b> position.","The relay signal is sent to the panel.","Pumps and compressors are protected."],
    manometer:["The Bourdon tube <b>uncoils</b> under pressure.","The movement is transferred to a gear mechanism.","The pointer deflects across the scale.","Direct reading without any power supply."],
    temp:["The sensor tip is immersed in the process.","<b>Resistance or voltage</b> changes with temperature.","The transmitter measures this change.","A 4–20 mA signal is generated."],
    thermocouple:["Two dissimilar metals are joined at the tip.","The temperature difference produces a small <b>voltage</b>.","The voltage is converted into temperature.","Measurement is possible at high temperatures."],
    rtd:["The resistance of the platinum element changes with temperature.","<b>100 Ω</b> at 0 °C is taken as reference.","The resistance is measured precisely.","High-accuracy temperature is obtained."],
    humidity:["The capacitive element absorbs moisture.","<b>Capacitance</b> changes together with humidity.","The electronics calculate relative humidity.","It is reported together with temperature."],
    panel:["The sensor signal is wired to the panel input.","The device <b>scales</b> and displays the signal.","Alarm limits are defined.","Relay and serial outputs are provided."],
    controller:["The process value is read continuously.","It is compared with the setpoint to find the <b>deviation</b>.","The PID algorithm calculates the output.","A valve or heater is driven."],
    converter:["The input signal is isolated.","It is <b>converted</b> into a different format.","Noise and earth loops are prevented.","The system is fed safely."],
    valve:["The medium enters the valve body.","The disc or ball position <b>throttles the flow</b>.","The position is set by the actuator.","Flow rate or pressure is controlled."],
    actuator:["The control signal reaches the actuator.","A motor or piston <b>drives</b> the stem.","The valve position is changed.","Position feedback is sent back."],
    solenoid:["The coil is energised.","The magnetic field <b>pulls</b> the plunger.","The passage opens or closes.","A spring returns it when power is removed."],
    handheld:["The device is carried to the measuring point.","An <b>instant</b> reading is taken with the probe.","The value is shown on the display.","Records are stored in memory."],
    laser:["The device emits a laser beam at the target.","The <b>reflected</b> light from the surface is measured.","Transit time is converted into distance.","Non-contact measurement is performed."],
    anemo:["Vanes or a probe are placed in the air stream.","Stream velocity is converted into <b>rotation</b> or cooling.","The electronics calculate the velocity.","Air flow rate and velocity are reported."],
    sound:["The microphone picks up ambient sound.","The signal is processed as <b>decibels</b>.","Weighting filters are applied.","The noise level is reported."],
    gasdetect:["The sensor cell samples the ambient air.","The target gas creates a <b>reaction</b>.","Concentration is calculated.","An alarm is raised once the threshold is exceeded."],
    analytic:["The sample passes through the measuring cell.","An electrode or optical sensor <b>reads the value</b>.","Temperature compensation is applied.","pH, conductivity or turbidity is reported."],
    gps:["The receiver captures satellite signals.","<b>Position</b> is resolved from the signal delays.","Data is logged or transmitted.","Vehicle and field tracking is provided."],
    logger:["The device reads sensor data periodically.","Readings are <b>logged</b> with a time stamp.","Data is transferred to memory or the cloud.","It is reviewed as reports and charts."]
  },

  about:[
    "Net Flow is the export brand of VFA Elektronik, a manufacturer with 12 years of production and engineering experience. It was established in Türkiye to supply industrial measurement instruments and automation solutions to industry. As industry develops, quality and the consistency of that quality have become decisive factors for the manufacturer. For this reason producers need industrial measurement, data monitoring and control of the monitored data across their process parameters, both for energy efficiency and to meet quality standards.",
    "With our young and dynamic team we develop accurate and innovative solutions for these needs. In measuring elements we supply and commission sensors for flow, level, pressure, temperature, humidity and analytical measurement. For data monitoring we offer process indicators, paper and paperless recorders together with PID and PLC applications. Alongside these we also supply and commission actuators and valves in the field of mechanical control.",
    "By aiming to deliver solutions with competitive cost, high quality and fast service, we have built a satisfied customer base. In line with this we increase our product range every day through our domestic and international sales representatives.",
    "In the manufacture of float and capacitive level sensors we have made original design and reliable measurement our guiding principle. In the long term we aim to manufacture all measuring instruments locally and thereby reduce our country's dependence on imports in this field."
  ],
  aboutStats:[["TÜRKAK","AB-0354-K accreditation"],["ISO/IEC 17025","Calibration laboratory"],["100+","Countries accepting our certificates"],["12 Years","VFA Elektronik experience"]],

  sections:[
    /* ===================== FLOW METERS ===================== */
    {id:"debi", kicker:"01", title:"Flow Meters", sub:"Volumetric and mass flow measurement on liquid, gas and steam lines", glyph:"flow",
     products:[
      {code:"NT-VMF", img:"assets/products/NT-VMF.png", name:"Electromagnetic Flow Meter", glyph:"flow", hero:true,
       vimgs:[["Hygienic Type","assets/products/NT-VMF-W.png"],["Miniature Type","assets/products/NT-VMF-M.png"],["Insertion Type","assets/products/NT-VMF-I.png"],["Battery Powered","assets/products/NT-VMF-BT.png"],["Partially Filled","assets/products/NT-VMF-P.png"],["Zero Straight Run (0D)","assets/products/NT-VMF-0D.png"],["Slurry Type","assets/products/NT-VMF-S.png"]],
       desc:"These flow meters measure conductive liquids (minimum 5 μS/cm) by relating the magnetic field generated by the coils, and the resulting voltage difference, to the velocity of the medium. Their high measuring accuracy and the absence of any moving parts inside the bore make them suitable for all non-corrosive conductive liquids.",
       variants:[
         ["Hygienic Type","Designed to prevent bacterial growth and suitable for all food applications; manufactured with a fully stainless steel body and either a hygienic or tri-clamp connection."],
         ["Miniature Type","Developed for low flow rates. With measuring ranges of 0.2–2 L/min and 5–100 L/min, it can be applied to connection diameters between DN3 and DN15. It is widely used in filling applications."],
         ["Insertion Type","Designed for application diameters between DN100 and DN3000; this model is installed through a boss welded onto the pipe."],
         ["Battery Powered","Designed for applications where no power supply is available. A 3.6 V lithium battery provides long-term operation."]
       ],
       specs:[["Body Material","Carbon steel / Stainless steel 304-316 (opt.)"],["Connection Size","DN10 – DN3000"],["Measuring Range | Velocity","0.2–2 L/min … 12000–38000 m³/h | 0.5–15 m/s"],["Coil Material","99% copper"],["Minimum Conductivity","5 μS/cm"],["Nominal Pressure","0.6 / 1.0 / 1.6 / 2.5 / 4.0 MPa"],["Liner Material","PTFE / Neoprene / Hard rubber / F46 / PFA / Polyurethane"],["Electrode Material","SS316L / Hastelloy B / Hastelloy C / Titanium / Tantalum / Platinum"],["Ambient Temperature","Rubber −25…+60 °C / PTFE −20…+150 °C"],["Accuracy","0.5% / ±0.3% / ±0.2% (opt.)"],["Power Supply","AC 85–250 V / DC 20–36 V"],["Output","4–20 mA, pulse, RS485 Modbus (opt.) / HART, Profibus (opt.)"],["Alarm","Empty pipe, excitation, low and high limit"],["Display","Three-line LCD"],["Ingress Protection","IP65 / IP67 / IP68 (opt.)"],["Certificates","CE / ISO 9001 / Calibration certificate"]],
       uses:"Drinking water, agricultural irrigation, fruit juices, chemicals and conductive liquids containing coarse particles.",
       sectors:"Wastewater plants, food industry, textile industry, heavy industry, machinery industry, chemical industry, petrochemicals, paper industry, pharmaceutical industry and agricultural irrigation.",
       notes:["The liquid being measured must be electrically conductive.","The pipe must be completely full while the flow passes through it.","The components within the medium must be homogeneously mixed.","If the liquid itself induces a magnetic effect, the magnetic field of the device changes and recalibration is required.","It must be installed according to the mechanical connection guide to ensure laminar flow."]},

      {code:"NT-TRB", img:"assets/kat/p04_6.png", name:"Turbine Flow Meter", glyph:"turbine",
       desc:"A turbine that can rotate freely is placed inside the body in order to detect the velocity of the medium. The rotational rate of the turbine is directly proportional to the velocity of the medium. By calculating velocity × cross-section and ensuring laminar flow, flow measurement with ±0.2% accuracy is possible. Stainless steel and plastic bodied versions are available with flanged, threaded, tri-clamp, insertion and wafer connections.",
       variants:[
         ["Hygienic Type","Models developed for food applications; mechanical installation is made with a tri-clamp or clamp type connection that prevents bacterial growth."],
         ["Plastic Model","For line diameters between 1/8\" and 2\" threaded connections it offers a measuring range of 0.15–200 L/min. Models manufactured entirely from PTFE are available for acidic applications."],
         ["Insertion Type","Designed for application diameters between DN100 and DN3000; it is installed through a boss welded onto the pipe."],
         ["High Temperature","A model designed with an additional cooling extension for a temperature rating of 200 °C."]
       ],
       specs:[["Body Material","AISI 304-316 stainless steel / PTFE"],["Connection Size","DN4 – DN200"],["Medium","Particle-free liquids"],["Flow Range","0.04 – 800 m³/h"],["Accuracy","±0.2% / ±0.5% / ±1%"],["Temperature Range","−20…+80 °C, opt. −20…+120 °C, opt. 200 °C"],["Repeatability","0.1% of reading"],["Turbine Material","CD4MCU stainless steel"],["Turndown Ratio","Standard 10:1, opt. 20:1"],["Maximum Pressure","16 / 25 / 40 / 63 bar, opt. up to 400 bar"],["Output","Square wave (pulse), opt. 4–20 mA"],["Power Supply","12 – 24 VDC"],["Ingress Protection","IP65"],["Indicator","Compact or remote type 2-line LCD"],["Certificates","CE / ISO 9001 / Calibration certificate"]],
       uses:"Particle-free liquids, water lines, milk lines, food lines, liquids where conductivity is not available, chemicals and filling units.",
       sectors:"Machinery industry, chemical industry, test rigs, pharmaceutical industry, paper industry, heavy industry.",
       notes:["Not recommended in media containing particles or at points where the rotor could become blocked.","The pipe must be completely full while the flow passes through it.","For abrasive liquids the fluid details must always be stated during product selection.","It must be installed according to the mechanical connection guide to ensure laminar flow."]},

      {code:"NT-VA / NT-DK800", img:"assets/kat/p05_2.png", name:"Variable Area Flow Meter (Rotameter)", glyph:"rota",
       desc:"It consists of a weight-calibrated float that moves freely inside a tapered tube made of glass or rigid plastic. As the medium passes through the tube it moves the float upward, and the instantaneous flow rate can be determined from this movement.",
       variants:[
         ["NT-VA Series","Used to determine the instantaneous flow of liquid or gaseous media. It has a glass tube and metal body; it is installed vertically in the line and, as the flow passes from bottom to top, the float changes position without friction. Suitable for high-temperature service."],
         ["NT-DK800 Series","A model with a glass tube and metal body. Instantaneous flow can be monitored on the glass scale; its compact design and integral control valve allow precise flow adjustment."],
         ["NT-LZS Series","A PVC bodied model for the instantaneous flow of liquid and corrosive liquid media. The rate of change depends on the weight of the float together with the density and viscosity of the medium."],
         ["NT-LZM Series","A polypropylene bodied model for liquid and gaseous media. The control valve allows precise flow adjustment."]
       ],
       specs:[["Body Material","Aluminium / SS316 stainless steel (epoxy coated), PVC, polypropylene"],["Maximum Temperature","70 °C … 150 °C (depending on model)"],["Connection Size","1/4\" NPT … 1\" threaded, flanged and tri-clamp; DN65–DN150"],["O-Ring","Viton"],["Medium","Liquid and gas"],["Measuring Range – Liquid","0.25 L/h … 15000 L/h"],["Measuring Range – Gas","0.05 L/min … 4300 L/h"],["Accuracy","1% – 2.5% of full scale"],["Measuring Tube","Glass / rigid plastic"],["Maximum Pressure","10 – 16 bar"]],
       uses:"Gases and liquids.",
       sectors:"Treatment plants, machinery manufacturing, recycling plants, heat treatment plants, test rigs, chemical industry."},

      {code:"NT-VTX", img:"assets/kat/p06_2.png", name:"Vortex Flow Meter", glyph:"vortex",
       desc:"Flow measurement based on the principle of the eddies that a flow stream forms as it swirls around an obstruction. In short, the flow value is derived from the differential pressure variation produced by the vortices generated by the bluff body inside the meter body.",
       specs:[["Medium","Liquid, gas, steam"],["Measuring Range","DN15–DN300 (flanged and wafer), DN100–DN2000 (insertion type)"],["Temperature Range","−20…250 °C, opt. 350 °C"],["Maximum Pressure","16 / 25 / 40 bar"],["Accuracy","±0.5% / ±1.0% / ±1.5% of full scale — insertion type: ±2.5%"],["Reynolds Number","Re > 4000"],["Signal & Communication Output","4–20 mA (2-wire), pulse (3-wire), RS485 Modbus"],["Ambient Temperature","−25…55 °C"],["Power Supply","24 VDC, 3.6 V lithium battery"],["Body Material","SS304, opt. SS316"]],
       uses:"Solvents and chemicals, oil and gas, refrigerants and steam units.",
       sectors:"Chemical industry, paper industry, recycling plants, petrochemicals, energy, mining, iron and steel, textile industry.",
       notes:["Suitable for demanding process conditions.","Temperature and pressure data can also be monitored during flow measurement.","Can be used where available pipe run is limited.","Actual values can be obtained with temperature and pressure compensation."]},

      {code:"NT-TUF-2000", img:"assets/kat/p06_5.png", name:"Ultrasonic Flow Meter", glyph:"ultra",
       desc:"These flow meters determine the velocity of liquids inside a closed pipe with the help of sound-wave transducers clamped onto the pipe surface, without any mechanical intrusion into the pipe. Flow values with 1% accuracy can be obtained at the reading terminals from the proportional calculation of flow velocity.",
       variants:[["NT-TUF-2000H","Portable type; supplied with a carrying case, mounting straps and tape measure. Field measurement with a rechargeable battery."],["NT-TUF-2000S/M","Fixed / DIN-rail type; 220 VAC or 24 VDC supply, IP68 protection, RS485 and 4–20 mA output."]],
       specs:[["Connection Size","DN15 … DN6000"],["Measuring Range","0.01 … 32 m/s"],["Accuracy","1% of reading"],["Temperature Range","−40…110 °C, opt. 160 °C"],["Indicator","Backlit 4×16 / 2×20 character LCD"],["Cable Length","5 metres, opt. 10 metres"],["Communication","RS232 / RS485"],["Signal Output","4–20 mA, relay (fixed type)"],["Data Logging","2000-record memory"],["Ingress Protection","IP65 / IP68"]],
       uses:"Water, wastewater, chemicals, acids, abrasive and viscous liquids.",
       sectors:"Treatment plants, petrochemicals, hydroelectric power plants, food industry, paper industry, pharmaceutical industry, automotive industry, municipalities and public institutions.",
       notes:["Provides measurement without damaging the pipe.","Three transducer sizes provide a wide measuring range.","The viscosity of the medium must be constant and it must be used on homogeneous, completely full pipes.","Measurement options for materials such as steel, stainless steel, cast iron, PVC, copper and aluminium."]},

      {code:"NT-OCF", img:"assets/kat/p07_2.png", name:"Open Channel Flow Meter", glyph:"channel",
       desc:"These flow meters are installed over a weir or dam in an open channel and determine flow by taking the velocity and depth of the shaped flow stream using a non-contact (ultrasonic) method. They provide high accuracy with 1 mm resolution of change. An electric heating feature is available for extremely cold applications. Thanks to interference isolation they are unaffected by electrical noise; instantaneous and totalised quantities can be monitored.",
       specs:[["Measuring Range","0 ~ 99999 L/s or m³/h"],["Level Resolution","1 mm"],["Indicator","14-digit, two-line backlit LCD"],["Flow Units","m³/h – L/s"],["Output","4–20 mA and RS485 serial communication (Modbus RTU)"],["Output Alarms","Up to 6 programmable relays; pulse output for cumulative flow"],["Temperature Rating","−40…+70 °C"],["Ingress Protection","IP67 (main unit) / IP68 (probe)"],["Power Supply","DC 24 V (±5%) 0.2 A / AC 220 V (±20%) 0.1 A"],["Supported Weirs","Open weirs and channels, Parshall flumes (ISO), right-angle triangular and rectangular weirs"],["Probe Measuring Range","0.00 ~ 4.00 m (level)"],["Probe Material","ABS / PVC / PTFE"]],
       uses:"Water treatment, irrigation, industrial wastewater and other industrial areas.",
       sectors:"Streams and rivers with an existing weir structure, municipalities and public institutions, treatment and wastewater plants, hotel and tourism operations, industry and agricultural irrigation.",
       notes:["The steps stated in the installation guide must be followed according to the weir type.","Probe selection must be made carefully according to the medium used."]},

      {code:"NT-MTF", img:"assets/kat/p07_4.png", name:"Metal Tube Rotameter", glyph:"metaltube",
       desc:"A variable area flow meter model used for liquid, gas and steam measurement; it measures on the basis of the movement of a magnetic float. Metal tube rotameters, which withstand hydrodynamic effects, are mostly used on vertical lines, but with a special mechanical design they can also be used horizontally. Their fine-graduated indicator and wide scale ratio make them easy to read.",
       specs:[["Measuring Range","Liquids 2.5–100000 L/h; gases 0.07–3000 m³/h"],["Temperature Rating","−25…+100 °C, opt. high temperature 300 °C"],["Accuracy","±2.5%, opt. high accuracy ±1.5%"],["Output","Opt. 4–20 mA, contact, LCD monitoring panel"],["Power Supply","24 VDC, 3.6 V lithium battery"],["Max. Working Pressure","16 bar"],["Pipe Connection","Flanged, threaded, quick coupling"],["Ingress Protection","IP65, IP67"]],
       uses:"High temperature and high pressure applications, chemical media, water applications, explosive gases and liquids, abrasive media, analogue monitoring applications requiring no electrical connection.",
       sectors:"Chemical plants, power plants, heavy industry, machinery industry, petrochemical industry, paper industry, gas filling plants.",
       notes:["High temperature and pressure data must be observed.","The scale range can be specified.","A hygienic clamp connection can be provided for food applications.","Body and ingress protection class can be selected according to corrosive and explosive media."]},

      {code:"NT-OGF", img:"assets/kat/p08_2.png", name:"Oval Gear Flow Meter", glyph:"ovalgear",
       desc:"These flow meters measure by means of two synchronised oval gears that rotate in proportion to the flow velocity. The rotational speed determines the flow velocity and, with the cross-section calculation, the instantaneous and totalised flow quantity is obtained. They provide easy installation and high accuracy on media with high temperature and viscosity. They can be used at very low flow rates and produce a high-resolution pulse.",
       specs:[["Connection","DN6 – DN100 mm"],["Accuracy","±0.5% (opt.)"],["Max. Pressure Rating","100 bar"],["Measuring Range","0.5 mL/min – 240 L/min"],["Output","Pulse, opt. 4–20 mA"],["Power Supply","5 – 24 VDC"]],
       uses:"Industrial oils, hydraulic oils, chemicals of low or high viscosity, high temperature and high pressure liquids, liquid food applications and refined oils.",
       sectors:"Automotive industry, machinery industry, petrochemical and paint plants, chemical plants, oil production plants, beverage industry.",
       notes:["The product must be selected according to the viscosity of the medium.","High temperature and pressure data must be observed.","Media containing particles must be filtered.","Body options are available for abrasive media."]},

      {code:"NT-HGF", img:"assets/kat/p08_4.png", name:"Helical Gear Flow Meter", glyph:"helical",
       desc:"Helical flow meters are a measuring method designed to determine the flow of viscous media by placing two cycloidal helical rotors inside a cylindrical housing, so that these rotors form a closed volume against the inner wall and the movement of the medium depends solely on their rotation. This method achieves very high accuracy with minimum leakage, uninterrupted flow and minimum pressure loss.",
       specs:[["Connection","DN6 – DN100"],["Accuracy","±0.5%"],["Max. Pressure Rating","100 bar"],["Measuring Range","0.5 mL/min – 240 L/min"],["Output","Pulse, opt. 4–20 mA"],["Power Supply","5 – 24 VDC"]],
       uses:"Media of varying viscosity, paraffin and adhesive media, food applications, chemical media, grease and similar oils.",
       sectors:"Filling and dosing systems, paper industry, heavy industry, insulation and coating industry, test rigs, paraffin industry, food industry.",
       notes:["Its robust construction provides a long service life.","Body options are available for abrasive media.","An ideal choice for low flow rates and media of varying viscosity."]},

      {code:"NT-TMF", img:"assets/kat/p09_2.png", name:"Thermal Mass Flow Meter", glyph:"thermal",
       desc:"These flow meters are designed for gaseous media on the basis of thermal dispersion and measure using the constant differential temperature method. Heat is generated on the measuring probe by an applied current; the power level rises to counteract the cooling effect of the gas flow, and this level is directly proportional to the mass flow rate. Instantaneous and totalised flow quantity is determined from this.",
       specs:[["Connection Sizes","DN80–DN4000 (insertion), DN10–DN2000 (inline)"],["Velocity","0.5 ~ 100 Nm/s (20 °C, 101.33 kPa)"],["Accuracy","±2.5% (insertion) / ±1% (inline)"],["Operating Temperature","−40…+220 °C (sensor), −20…+45 °C (transmitter)"],["Maximum Pressure","Insertion ≤2.5 MPa, inline ≤4.0 MPa"],["Output","4–20 mA (optoelectronically isolated, max. load 500 Ω)"],["Alarm Output","1–2 relay channels, normally open, 10 A / 220 VAC or 5 A / 30 VDC"],["Communication","RS485 (optoelectronically isolated), HART"],["Ingress Protection","IP65"]],
       uses:"Dry air and gases (propane, nitrogen, oxygen, hydrogen and similar).",
       sectors:"Power and heating plants, natural gas power stations, chemical industry, machinery industry.",
       notes:["The device can also be used for gas leak detection.","It has high vibration resistance."]},

      {code:"NT-CMF", img:"assets/kat/p09_4.png", name:"Coriolis Mass Flow Meter", glyph:"coriolis",
       desc:"With the sensors located at the inlet and outlet of a specially designed flow tube, the signals coming from the sensors are in phase when there is no flow. The moment flow begins, the resulting vibration creates a phase difference between the signals; this difference is directly proportional to the mass flow passing through the tubes. Flow is compensated by a temperature sensor mounted on the tubes; these products can also determine the density of the medium.",
       specs:[["Accuracy","±0.2%, opt. ±0.1%"],["Density Measuring Range","0.3–3000 g/cm³ (accuracy ±0.002 g/cm³)"],["Temperature Rating","−50…+200 °C, opt. −200…+300 °C (accuracy ±1 °C)"],["Output","4–20 mA, opt. flow rate / density / temperature signal"],["Communication","RS485, Modbus protocol"],["Protection & Pressure Rating","IP67 – 4.0 MPa"]],
       uses:"All liquid and gas applications; predominantly petroleum derivatives, chemical industry, medical industry and heating plants.",
       sectors:"Chemical plants, petrochemical and fuel industry, power plants, paper industry, textile industry, refrigeration industry, machinery industry, pharmaceutical industry.",
       notes:["Provides mass flow, density and temperature measurement together.","Allows easy horizontal and vertical installation.","Requires no straight pipe run at the inlet and outlet.","Provides measurement independent of the physical properties of the medium."]},

      {code:"NT-CTG", img:"assets/kat/p10_2.png", name:"Compact Thermal Gas Flow Meter", glyph:"thermal",
       desc:"Designed on the basis of economical thermal dispersion, it adopts the constant differential temperature method to measure gas flow. It offers advantages such as small size, easy installation, high reliability and high accuracy.",
       specs:[["Connection Sizes","DN8 – DN300"],["Accuracy","±1.5% of reading + 0.3% of full scale"],["Measurable Gases","N₂, Ar, O₂, CO₂ and similar process gases"],["Operating Temperature","−30…+230 °C / relative humidity <90%"],["Maximum Pressure","5.0 MPa"],["Output","4–20 mA and pulse output, Modbus, M-Bus communication"],["Alarm Output","1–2 relay channels, normally open, 10 A / 220 VAC or 5 A / 30 VDC"],["Ingress Protection","IP65"]],
       uses:"Process gases, natural gas lines and compressed air systems.",
       sectors:"Power plants, chemical industry, machinery industry, gas filling plants.",
       notes:["Offers easy calibration for all gases.","Offers remote control, configuration and calibration."]}
     ]},

    /* ===================== FLOW SENSORS ===================== */
    {id:"akis", kicker:"02", title:"Flow Sensors", sub:"Monitoring the presence of flow, switching and visual checking", glyph:"switchflow",
     products:[
      {code:"NT-FSW", img:"assets/kat/p11_2.png", name:"Flow Switches", glyph:"switchflow",
       desc:"A flow switch is used to sense the flow inside pipework. By detecting the movement of liquids within the pipe it indicates whether or not there is flow. They are a reliable choice for many machine builders in flow control and in heating and cooling systems.",
       variants:[
         ["Paddle Flow Switches","Paddle type flow switches and sensors are installed vertically in the line. With their T-body or direct paddle models they are practical and easy to use; having a direct relay output makes it easy to connect them straight to many drive elements."],
         ["Thermal Flow Switches","Flow switches that monitor liquid-based flow and operate on the calorimetric principle. When the flow velocity moves outside the limit value set by the user, they reverse their current state; status can be read from the LEDs on the device."]
       ],
       specs:[["Line Connection Sizes","DN8 – DN200"],["Temperature Rating","+200 °C"],["Pressure Rating","25 bar (thermal type 6.3 MPa)"],["Material","304 SS – PP"],["Signal Output","Reed contact 26 VA / 20 W; relay, PNP, NPN, 4–20 mA (thermal)"],["Power Supply","24 V ±10% DC (thermal type)"],["Display","10 × tri-colour LED (flow velocity) + 1 × LED (temperature)"],["Velocity Flow Range","4 … 400 cm/s (accuracy ±2 … ±8 cm/s)"],["Ingress Protection","IP65 / IP67"]],
       uses:"Appliances such as water heaters, combi boilers and heaters, cooling water lines, power plants and mines. Special models are available for explosive and demanding processes.",
       sectors:"Machinery manufacturing, heating and cooling systems, power plants, mining."},

      {code:"NT-FSG", img:"assets/kat/p11_3.png", name:"Sight Flow Indicators", glyph:"sight",
       desc:"A sight flow indicator is an element used to observe the flow in closed pipe circuits from various directions. Sight flow indicators are installed before and after steam traps to monitor steam leakage, and are used in industries such as food and pharmaceuticals to provide visual verification of the medium. The glasses used in sight flow indicators are special; they are also known as tempered soda-lime glass.",
       specs:[["Line Connection Sizes","1/4\" – 2\""],["Temperature Rating","−30…+180 °C"],["Working Pressure","16 bar"],["Material","AISI 304 stainless steel, opt. 316 stainless steel"],["Sight Glass Material","Heat-resistant glass"]],
       uses:"Cold water, hot water, steam, compressed air, LPG, LNG, asphalt, fuel oil, ceramic slip and similar.",
       sectors:"Food industry, pharmaceutical industry, power plants, chemical industry, ceramics industry."}
     ]},

    /* ===================== LEVEL SENSORS ===================== */
    {id:"seviye", kicker:"03", title:"Level Sensors", sub:"Continuous and point level measurement on liquids and solids", glyph:"level",
     products:[
      {code:"NT-ULS", img:"assets/kat/p12_1.png", name:"Ultrasonic Level Transmitters", glyph:"ultra",
       desc:"Ultrasonic level sensors are instruments designed for non-contact distance, level and volume measurement on solids and liquids. They consist of an ultrasonic sensor, a signal converter and a control unit. The sound wave that the easily mounted sensor sends into the tank strikes the material and is detected on its return, thereby determining the level. False readings are prevented by the filtering feature.",
       specs:[["Measuring Range","0–1 … 0–20 metres"],["Accuracy","0.5% – 1.0%"],["Resolution","3 mm or 0.1%"],["Temperature Rating","Transmitter −20…+60 °C, sensor −20…+80 °C"],["Ingress Protection","Transmitter IP65, sensor IP68"],["Output","4–20 mA"],["Power Supply","24 VDC"]],
       uses:"Water treatment and distribution plants, chemical and petrochemical plants, food plants, closed and open tanks.",
       sectors:"Sand, cement clinker, wastewater, clean water, dusty solid particles, food and feed, plastic granules.",
       notes:["The steps stated in the installation guide must be followed.","Probe selection must be made carefully according to the medium used."]},

      {code:"NT-RLS", img:"assets/kat/p12_2.png", name:"Radar Level Transmitters", glyph:"radar",
       desc:"Radar level sensors emit frequency sweeps that increase over time through pulse management; these signals, reflected back from the measured surface, are collected by the antenna and the level of liquids and solids is thereby determined. With their advanced technology and different application methods such as non-contact and guided wave, they simplify measurement in demanding processes. The measured value can be interpreted as distance, level, volume or mass.",
       specs:[["Measuring Range","0–10 m / 0–30 m / 0–50 m / 0–70 m"],["Accuracy","±2 mm"],["Power Supply","24 VDC – 220 VAC"],["Temperature Rating","−60…+60 °C / −60…+150 °C / −60…+250 °C"],["Ingress Protection","Transmitter IP65, sensor IP68"],["Signal & Communication Output","4–20 mA, HART, RS485 Modbus, Profibus PA, Foundation Fieldbus"],["Frequency Band","26 GHz – 70 GHz"]],
       uses:"Sand, cement clinker, wastewater, clean water, dusty solid particles, high-temperature and viscous liquids; milk and dairy products, soft drinks, oil, petrol, diesel, dolomite, calcite, lime, flour and feed, plastic granules.",
       sectors:"Ceramics industry, cement plants, treatment plants, food industry, petrochemical industry, plastics processing and raw material plants, sand and stone quarries, lime and gypsum plants."},

      {code:"NT-HLS", img:"assets/kat/p13_2.png", name:"Hydrostatic Level Transmitters", glyph:"hydro",
       desc:"The hydrostatic level transmitter is specially designed as a submersible type. As the liquid level rises, the pressure it exerts on the bottom increases linearly. Based on this principle, the unit submerged in the liquid measures the level precisely in proportion to the rise of the liquid level.",
       specs:[["Measuring Range","1 – 100 metres"],["Accuracy","0.5%"],["Maximum Pressure","200% FS"],["Electrical Connection","Cable length according to the level value"],["Supply Voltage","+12…30 VDC"],["Ingress Protection","IP68"],["Body","1.4404 (AISI 316L), opt. 1.4462 (duplex) – titanium"],["Operating Temperature","−25…+85 °C"],["Output","4–20 mA, 0–10 VDC or 0.5–4.5 VDC"]],
       uses:"Wells, water tanks, fuel tanks, lake level, river level, sea level and reservoirs.",
       sectors:"Irrigation systems, watercourses, tanks, municipalities and public institutions.",
       notes:["The cable length must be stated when ordering.","A special vented cable is used for the measurement and must therefore be protected."]},

      {code:"NT-CLS", img:"assets/kat/p13_3.png", name:"Capacitive Level Transmitters", glyph:"capacitive",
       desc:"The capacitive level transmitter offers high-accuracy proportional measurement in the level management of solid and liquid materials, despite dust, foam, dirt or similar particles. The capacitive measuring principle is based on detecting the capacitance value between the electrode and the tank surface, which varies with the mass present. After installation, the sensor electrode is immersed into the material down to the required point.",
       specs:[["Measuring Length","150 – 400 – 650 – 1150 mm"],["Process Temperature","−20…+100 °C"],["Ingress Protection","IP68"],["Max. Working Pressure","10 bar"],["Detection Delay","Max. 1 s"],["Supply Voltage","12 – 35 VDC, 1.2 W"],["Signal Output","Relay, 1 changeover contact, AC max. 250 VAC / 2 A / 500 VA"]],
       uses:"In the building industry: gypsum, lime, fine sand, dolomite, calcite, perlite plaster, cement, stone, coal, pulverised coal dust; in the food industry: feed, seed, flour, salt and sugar.",
       sectors:"Building industry, food industry, construction industry.",
       notes:["Unaffected by dust and soil at the point of use.","The unit must be kept away from the material inlet.","Where conditions could damage the unit, fitting a baffle at the measuring point is recommended."]},

      {code:"NT-MLS", img:"assets/products/NT-MLS.png", name:"Rotary Paddle Level Switches", glyph:"motor",
       desc:"This type of level switch is an instrument designed for level control of coarse-grained material inside silos and containers. The operating principle is very simple: the paddle probe of the level switch mounted on the tank wall starts to rotate at low speed; when coarse-grained material rises to the probe level it applies a counter-force to the paddle and prevents it from turning, so the motor stops and provides a contact that can be used for control purposes.",
       specs:[["Connection Terminal","Cable entry up to 2 mm² (AWG 14) cross-section"],["Power Supply","24 VDC – 220 VAC"],["Temperature Rating","Ambient −20…+80 °C, process −5…+100 °C"],["Material","Stainless steel SS316"],["Connection Size","R1½\" – R1\" – R2\""],["Min. Detection Density","250 g/L (with standard paddle)"],["Max. Silo Internal Pressure","0.5 bar"]],
       uses:"Bulk solid level control in the construction, building, food and plastics industries.",
       sectors:"Construction sector (gypsum, lime, cement, stone crushing plants), food (feed, seed, flour, salt, sugar, tea, pulses), plastics industry."},

      {code:"NT-VLS", img:"assets/kat/p14_3.png", name:"Vibrating Fork Level Switches", glyph:"vibrating",
       desc:"Vibrating level sensors are designed for point level detection on liquid and solid materials. They work on the principle that the vibration on the fork is damped when it comes into contact with material. Thanks to the small number of moving parts, maintenance requirements are low and they operate reliably in environments with high vibration.",
       specs:[["Application","Liquid and solid materials"],["Material","Stainless steel"],["Mechanical Connection","R1\", opt. flanged, tri-clamp"],["Max. Temperature & Pressure","150 °C … 1.5 MPa"],["Output","PNP-NO"],["Power Supply","24 VDC"]],
       uses:"Solid products in powder, granule and particle form, as well as liquids.",
       sectors:"Food, pharmaceutical and chemical industries, building and construction industry."},

      {code:"NT-CSW", img:"assets/products/NT-LSW-M.png", name:"Capacitive Level Switch", glyph:"capacitive",
       desc:"Once the sensing element at the tip of the Magcap type level switch becomes surrounded by the raw material at the point of use, the RF power it emits decreases. When this decrease exceeds the configured sensitivity setting, an output signal is generated. Sensitivity can be adjusted on the device according to the dielectric constant and the properties of the material.",
       specs:[["Measuring Length","150 – 400 – 650 – 1150 mm"],["Process Temperature","−20…+100 °C"],["Ingress Protection","IP68"],["Max. Working Pressure","10 bar"],["Detection Delay","Max. 1 s"],["Supply Voltage","12 – 35 VDC, 1.2 W"],["Signal Output","Relay, 1 changeover contact, AC max. 250 VAC / 2 A / 500 VA"]],
       uses:"Solid products in powder, granule and particle form.",
       sectors:"Building industry, food industry, construction industry.",
       notes:["Unaffected by dust and soil at the point of use.","Depending on the application point, a baffle may be required where the unit could be damaged."]},

      {code:"NT-SSW", img:"assets/products/NT-MLP.png", name:"Side-Mounted Level Switch", glyph:"sideswitch",
       desc:"F1 type magnetic level switches are used for liquid level measurement in all types of tank. They have a wide field of use thanks to their ability to operate without an external power supply, side-mounting capability, wide pressure and temperature range and fully stainless steel wetted parts.",
       specs:[["Pressure Rating","16 bar"],["Temperature Rating","Max. 150 °C"],["Connection Type","Square flange"],["Flange Material","AISI 316"],["Housing","Aluminium"],["Adjustment","50 – 100 – 200 mm"],["Density","> 0.7 kg/L"],["Switch Capacity","250 VAC, 15 A, NO+NC"]],
       uses:"Waste and clean water tanks, acid and caustic tanks, fuel and oil tanks, all pressurised and unpressurised vessels.",
       sectors:"Shipbuilding industry, fuel and oil plants, chemical industry.",
       notes:["Requires no external power supply.","Can operate under high vibration."]},

      {code:"NT-DSW", img:"assets/products/NT-LSW-P.png", name:"Diaphragm Level Switch", glyph:"diaphragm",
       desc:"The diaphragm solid level switch is the most economical method of measuring the level of bulk material in a store. It can be used in open and unpressurised tanks. The full and empty status of dusty, powdered, granular and pelletised bulk materials in the silo can be monitored. The membrane must always be in contact with the material being monitored. As material poured into the silo builds up, the membrane closes; the resulting pressure pushes the diaphragm back and the mechanism actuates the contact. As the material decreases, the contact returns to its original position.",
       specs:[["Body Material","Nitrile, NBR, FPM, stainless steel"],["Connection","Round flange"],["Output","1 × NO/NC micro switch"],["Maximum Temperature","200 °C"]],
       uses:"Full/empty control of bulk solid materials in silos.",
       sectors:"Construction, building, food and plastics industries."},

      {code:"NT-WLD", img:"assets/kat/p16_2.png", name:"Water Leak Detector", glyph:"flood",
       desc:"It can be used with confidence in all areas where flooding is possible and critically important. At the moment of flooding it warns with a built-in siren, allowing rapid action to be taken. Through its relay output it controls units such as pumps or solenoid valves to stop the leak. A 3-second detection delay feature is provided to prevent false alarms.",
       specs:[["Indicator","3 alarm LEDs"],["Siren","1 built-in siren"],["Number of Sensors","Up to 3 sensors can be connected"],["Power","24 VDC"],["Output","Relay, 2 A / 125 °C, NO, NC"]],
       uses:"Server rooms, basements, pump stations and critical equipment areas.",
       sectors:"Building automation, data centres, industrial facilities."},

      {code:"NT-MLI", img:"assets/products/NT-MLI.png", name:"Magnetic Level Indicators", glyph:"bypass",
       vimgs:[["Ex-Proof Type","assets/products/NT-MLI-EX.png"],["Boiler Type","assets/products/NT-MLI-BR.png"]],
       desc:"The MLG type magnetic level indicator is used for the continuous measurement, monitoring and display of liquid level. A change of level in the tank also changes the level of the liquid inside the bypass chamber by the same amount, according to the principle of communicating vessels. The magnetic float inside the indicator therefore moves and acts on the magnetic flaps on the outer surface of the bypass chamber, causing them to rotate 180° about their own axis. As the liquid level rises the white flaps turn red, and as it falls the red flaps turn white.",
       specs:[["Pressure Rating","10 bar (opt. 40 bar)"],["Temperature Rating","150 °C (opt. 350 °C)"],["Connection Types","Threaded G 1/2\", 3/4\", 1\" – flanged DN15, DN20, DN25"],["Chamber & Float","Stainless steel"],["Indicator Profile","Aluminium"],["Output","4–20 mA, 0–10 V, contact output"]],
       uses:"Water tanks, condensate tanks, deaerators, fuel tanks, steam boilers, underground tanks, aggressive and toxic liquids, liquefied gases, all pressurised and unpressurised vessels.",
       sectors:"Shipbuilding industry, chemical industry, refineries, power plants."},

      {code:"NT-CDS", img:"assets/products/NT-LSW-F.png", name:"Conductive Level Switches", glyph:"conductive",
       desc:"Conductive level switches are used for liquid level control in tanks and boilers. As they have no moving parts they can be used in critical environments and with conductive liquids containing solid particles, of low density and of high viscosity.",
       specs:[["Electrode Material","304 stainless steel, opt. 316 stainless steel"],["Connection & Housing Material","Delrin"],["Output","1 × NO/NC micro switch"],["Maximum Temperature & Pressure","60 °C … 6 bar"],["Number of Electrodes","Max. 3"]],
       uses:"An economical and reliable solution for booster set applications, water level control on steam boilers and various conductive liquid tanks.",
       sectors:"Power plants, building automation, chemical industry."},

      {code:"NT-RCS", img:"assets/products/NT-RCS-3100-2100.png", name:"Cable Type Capacitive Level Switch", glyph:"rope",
       desc:"Designed to detect the instantaneous (point) level of powdered and granular solids in a storage area. Its operating principle is that materials in contact with the probe surface create a change in capacitance, and these instruments use that change to determine the level by means of electronic components.",
       specs:[["Output (Contact)","1 × NC-NO relay (220 VAC/5 A – 14 VDC/20 A)"],["Cable & Weight Material","304 SS, opt. 316 SS"],["Length","1 metre … 20 metres"],["Housing Material","Delrin"],["Power Supply","24 VDC"]],
       uses:"Granular solids, lime, sand, coal dust, cement, clinker and grains such as wheat and maize.",
       sectors:"Grain silos, cement plants, lime and gypsum plants, foundries.",
       notes:["The cable length can be specified according to the application point.","The cable can be used insulated or uninsulated."]},

      {code:"NT-ELES", img:"assets/products/NT-FLT.png", name:"Float Level Sensors", glyph:"floattx",
       desc:"NT-ELES float level sensors are instruments designed to determine liquid level by making use of the buoyancy principle: a magnetic, movable float travelling along a guide tube triggers, through its magnetic field, a reed contact placed inside the guide tube, thereby switching the circuit on or off. Depending on the intended use they are produced as continuous (online) level and point level versions; continuous level sensors are called level transmitters, while point level sensors are called level switches.",
       variants:[
         ["NT-ELES11 Series","Designed to determine the instantaneous (online) level of liquid media. It can produce analogue signal outputs and communication outputs for transmission or monitoring; with different mechanical connection designs and length options from 50 mm to 3000 mm it provides a wide field of use."],
         ["NT-ELES7 Series","Level switches designed to provide instantaneous level detection in liquids, such as full-empty status or at selectable points. With a wide length range from 50 mm to 5000 mm, top or side mounting options and flanged, threaded and clamp mechanical connection options, they provide economical and reliable measurement."]
       ],
       specs:[["Housing & Tube Material","Stainless steel 304, 316, 316L / Delrin and PVDF / brass"],["Float Material","Stainless steel 304, 316, 316L / PVDF, NBR, polyurethane"],["Electrical Connection","M12 terminal, DIN 43650, terminal block, shielded cable"],["Connection Type","R 1/4\" | 1/2\" | 1\" | 1¼\" | 1½\" | R 2\" male thread or flange DN15–DN100"],["Measuring Range","50 mm – 5000 mm"],["Float Type","Spherical or cylindrical"],["Min. Buoyancy Density","0.6 g/cm³"],["Pressure Rating","10 bar, opt. 30 bar"],["Temperature Rating","−20…+120 °C, opt. 180 °C"],["Accuracy (Transmitters)","5 mm – 10 mm – 15 mm"],["Transmitter Signal Output","4–20 mA / 0–10 V / ohm"],["Switch Signal Output","NO-NC contact / relay"],["Optional Temperature Sensor","PT100 – PT1000"]],
       uses:"Water and all water-based media; water reservoirs, waste water tanks, yacht and ship water tanks, hydraulic oil tanks, chemical tanks, soft drink and low-viscosity liquid vessels.",
       sectors:"Treatment plants, machine builders, yacht and shipbuilding sector, chemical sector, textile sector, hotels and swimming pools, oil and fuel sector, food sector.",
       notes:["An economical solution.","Application-specific manufacturing is possible.","Easy to install and mount.","Not recommended for adhesive and high-density liquids."]}
     ]},

    /* ===================== PRESSURE SENSORS ===================== */
    {id:"basinc", kicker:"04", title:"Pressure Sensors", sub:"Pressure transmitters, switches and gauges", glyph:"pressure",
     products:[
      {code:"NT-BT", img:"assets/products/NT-BTT-S.png", name:"Standard Series (OEM) Pressure Transmitters", glyph:"pressure",
       desc:"Pressure is the magnitude of the force that liquids and gases exert per unit area. Equipment that converts the pressure value it senses into a defined electronic signal can be described as a pressure transmitter.",
       variants:[["NT-BT Series","G1/4\" connection, measuring ranges from 0…2.5 bar up to 0…600 bar."],["NT-FPT Series","G1/4\" – G1/2\" connection; 0…100 mbar to 0…600 bar, with vacuum options (0…−1 bar)."]],
       specs:[["Connection Size","G1/4\" – G1/2\""],["Measuring Range","From 0…2.5 bar up to 0…600 bar; 0…100 mbar options"],["Accuracy","±0.5% FS / ±0.3% FS"],["Temperature Range","−40…+125 °C"],["Output Signal","4…20 mA, 0…5 VDC, 1…6 VDC, 0…10 VDC, 0.5…4.5 VDC ratiometric"]],
       uses:"Non-adhesive and particle-free liquids, non-aggressive gases.",
       sectors:"Wastewater plants, food industry, textile industry, heavy industry, machinery industry, chemical industry, petrochemicals, paper industry, pharmaceutical industry, hydroelectric power plants."},

      {code:"NT-EPI / NT-NAT / NT-BCT", img:"assets/kat/p19_4.png", name:"Flush Diaphragm Pressure Transmitters", glyph:"diaphragm",
       desc:"Equipment that measures by sensing the force applied to the diaphragm located at the mechanical connection point and converting it into an electrical signal. Suitable for adhesive media such as liquids containing waste and particles, viscous liquids and dusty gases.",
       specs:[["Connection Size","1/4\" – 1/2\", G1/2\" male flush membrane"],["Measuring Range","From 0…1 bar up to 0…600 bar"],["Accuracy","±0.4% FS / ±0.5% FS"],["Temperature Range","−40…+85 °C / −40…+125 °C"],["Output Signal","4…20 mA, 0…5 VDC, 1…6 VDC, 0…10 VDC"]],
       uses:"Liquids containing waste and particles, viscous liquids, dusty gases and adhesive liquids.",
       sectors:"Wastewater and treatment plants, food industry, machinery industry, chemical and petrochemical industry, HVAC industry."},

      {code:"NT-DMP / NT-BFT / NT-DPT", img:"assets/kat/p20_2.png", name:"Differential Pressure Transmitters", glyph:"diffpressure",
       desc:"Products designed to determine the difference (Δp) between two separate pressure values. They cover a broad range, from low differential pressure models with hose connections up to high-pressure differential measurement.",
       specs:[["Connection Size","1/4\", M20×1.5, G1/2\", hose connection"],["Measuring Range","−100 Pa … +7000 Pa; 0 bar … 200 bar"],["Differential Pressure Range","From 100 mbar up to 25 bar; ±60 mbar to ±100 bar"],["Accuracy","±0.5% FS; ±1.5%, opt. ±0.25%"],["Temperature Range","−40…+125 °C / −10…+50 °C"],["Output Signal","4…20 mA, 0…5 VDC, 1…5 VDC, 0–10 V, opt. Modbus"]],
       uses:"Pneumatic systems, air compressors, air cooling and heating systems, water pumps and liquid tanks.",
       sectors:"Medical and chemical industry, test systems, HVAC, machinery industry."},

      {code:"NT-EXNT", img:"assets/kat/p20_3.png", name:"Ex-Proof Pressure Transmitters", glyph:"exproof",
       desc:"Instruments specially designed for the measurement of flammable and explosive liquids and gases. With an Ex-proof approved housing they provide safe measurement in hazardous areas.",
       specs:[["Connection Size","1/4\""],["Measuring Range","200 Pa … 10 MPa"],["Differential Pressure Range","From ±60 mbar up to ±100 bar"],["Accuracy","±0.075% FS (opt. ±0.05% FS)"],["Temperature Range","−40…+125 °C (opt. 400 °C)"],["Output Signal","4…20 mA / HART / MBAS"],["Ex-Proof Approval","Ex d IIC T6, Ex ia IIC T6"]],
       uses:"Flammable gases such as LNG and LPG derivatives, flammable and combustible liquids.",
       sectors:"Shipbuilding industry, Ex Zones 0/1/2 (gas) and 20/21/22 (dust), mining industry, petrochemical industry, coal mines, grain silos, sugar factories."},

      {code:"NT-DMPX", img:"assets/kat/p21_2.png", name:"Smart Pressure Transmitters", glyph:"smart",
       desc:"Equipment that provides pressure measurement with advanced microprocessor technology and temperature compensation. They offer high accuracy and capability.",
       specs:[["Connection Size","1/4\""],["Measuring Range","0…100 mbar up to 0…1000 bar"],["Accuracy","±0.075% FS (opt. ±0.05% FS)"],["Temperature Range","−40…+125 °C (opt. 400 °C)"],["Output Signal","4…20 mA / HART / MBAS"],["Ex-Proof Approval","Ex d IIC T6, Ex ia IIC T6"]],
       uses:"All liquid, gas and steam applications.",
       sectors:"Machinery industry, test and calibration systems, chemical industry, heavy industry, defence industry, petrochemical industry."},

      {code:"NT-EPD", img:"assets/kat/p21_4.png", name:"Pressure Transmitters and Switches with Display", glyph:"gauge",
       desc:"Consists of a programming and display screen added compactly onto the pressure transmitter. Thanks to its easy and practical operation it allows instantaneous data monitoring in the field.",
       specs:[["Connection Size","G1/4\" – G1/2\""],["Measuring Range","From 0…0.2 bar up to 0…600 bar"],["Accuracy","±0.5% FS"],["Temperature Range","−25…+85 °C"],["Output Signal","4…20 mA, 0…10 VDC, switchable mA or V"],["Switching","2 × PNP transistor (opt. contact output)"]],
       uses:"All liquids and gases.",
       sectors:"Machine tools, all hydraulically operated machinery, HVAC equipment (heating, air conditioning, ventilation units), refrigeration units, water treatment machinery.",
       notes:["Absolute or relative measurement option.","Can be programmed from a mobile phone via NFC.","Current and voltage output options in a single device."]},

      {code:"NT-TG / NT-KP", img:"assets/kat/p22_2.png", name:"Pressure Switches", glyph:"pswitch",
       desc:"Pressure measuring equipment produced for switching, safety and alarm purposes at one or more set points based on the pressure data it senses.",
       specs:[["Connection Size","G1/4\", G1/8\""],["Measuring Range","−200 mbar…−800 mbar and 0.1…600 bar; −0.2…7.5 / 2…14 bar"],["Accuracy","<5%"],["Temperature Range","−30…+100 °C (opt. 250 °C); −40…+60 °C"],["Output Signal","NO / NC / changeover (NO&NC)"]],
       uses:"Particle-free liquids, air, steam and non-aggressive gases.",
       sectors:"Machine components, hydraulics, industrial applications."},

      {code:"NT-A300 / NT-S100 / NT-C600", img:"assets/kat/p23_2.png", name:"Pressure Gauges", glyph:"manometer",
       desc:"Available in variants such as standard type, diaphragm type, industrial type and contact type for gas, liquid and steam lines, this is still the most widely used product group today as the simplest method of monitoring pressure. Mechanical connection variants that can be configured to the process are available; some models are manufactured with contacts so that they can switch. Our product portfolio includes dial diameters from 40 mm to 200 mm, manufactured for pressure ranges from −1 bar to 1000 bar including vacuum lines.",
       variants:[
         ["Standard Series","G1/8\" (40 mm) – G1/4\" B (50, 63 mm) – G1/2\" B (100, 160 mm). −1…0 bar to 0…400 bar. Cl. 2.5 / Cl. 1.6."],
         ["Stainless Series","G1/4\" B (63 mm) – G1/2\" B (100, 160 mm). −1…0 to 0…1600 bar. Dry type max. +200 °C, glycerine filled max. +100 °C."],
         ["Capsule Diaphragm","63/100/160 mm dial. −25…0 mbar to 0…600 mbar. Cl. 1.6 (positive), Cl. 2.5 (vacuum)."],
         ["Flush Series Diaphragm","DN40, DN50 connection. −1…0 bar to 0…40 bar. Dry type max. +150 °C."],
         ["Hygienic Union Connection","DN25/32/40/50 (DIN 11851), 1½\" and 2\" (SMS). −1…0 bar to 0…40 bar."],
         ["Clamp Diaphragm","DN25/32/40/50 (DIN 32676), 1\", 1½\", 2\" (ISO 2852). −1…0 bar to 0…40 bar."]
       ],
       specs:[["Dial Diameters","40, 50, 63, 100, 160, 200 mm"],["Measuring Range","−1 bar … 1600 bar"],["Accuracy","Cl. 1.0 / Cl. 1.6 / Cl. 2.5"],["Temperature Range","+60 °C … +200 °C (depending on type)"],["Body","Stainless steel / brass"]],
       uses:"Liquids, steam and gases.",
       sectors:"Shipbuilding industry, clean water transport systems, wastewater systems, chemical and petrochemical industry, power plants, food and beverage industry, dairy machinery, pharmaceutical industry, machinery industry."}
     ]},

    /* ===================== TEMPERATURE SENSORS ===================== */
    {id:"sicaklik", kicker:"05", title:"Temperature Sensors", sub:"Thermocouples, resistance thermometers and temperature-humidity transmitters", glyph:"temp",
     products:[
      {code:"NT-TC", img:"assets/kat/p24_2.png", name:"Thermocouples", glyph:"thermocouple",
       desc:"Instruments designed to determine, observe and control the temperature of an environment or of materials. They can be examined under three headings: resistance thermometers, thermocouples and infrared thermometers.",
       variants:[
         ["Head Type Thermocouples","Straight type thermocouples are widely used in various processes from −200 °C up to 2320 °C. Process conditions must be defined very carefully in order to extend the service life of the thermocouple. Type L thermocouples are used for temperature measurement of molten metals and salt baths."],
         ["Platinum Thermocouples","Preferred for high-temperature measurement. They are manufactured with a construction suited to process conditions of 1200 °C – 1600 °C. Preferred in the cement, aluminium, copper, iron and steel, ceramics and glass industries."],
         ["Special Thermocouples","Custom products can be produced with the variable connection types and physical constructions required by the process. Models with a PP housing head and PTFE sheath for acidic environments, and Ex-proof protected models for explosive atmospheres, are among these."],
         ["Mineral Insulated & Bayonet","Mineral insulated thermocouples, manufactured with single or dual elements, can be used between −40 °C and 1600 °C. Bayonet thermocouples are generally preferred in simple processes; they are produced with cable and spring loading."]
       ],
       specs:[["Type","J – K – T – E – N – R – S – B"],["Wire Diameter","0.35 – 0.50 – 0.80 – 1 – 1.6 – 2 – 2.5 – 3 mm"],["Protective Sheath","SS316 – Inconel 600/800 – 1.4749 – 1.4841 (1.4845), ceramic KER 530/610/710 (C799), silicon carbide, silicon nitride (Si₃N₄), PTFE, PVDF, PFA"],["Connection Types","R or NPT 1/4\", 3/8\", 1/2\", 3/4\", 1\"; DIN or ASME flange"],["Number of Elements","Single / dual / multiple"],["Signal Output","4–20 mA – 0–10 V"],["Housing / Head","DIN 43729 aluminium, IP67 (opt. Ex-proof, bakelite)"]],
       uses:"In all solid, liquid, gas and steam applications.",
       sectors:"Machinery industry, cement plants, glass and ceramics industry, food industry, pharmaceutical industry, chemical and petrochemical industry, heavy industry and defence industry, test rigs, HVAC, agriculture industry.",
       notes:["The correct type must be selected according to the temperature.","Custom manufacturing is available on request."]},

      {code:"NT-RTD", img:"assets/kat/p25_2.png", name:"Resistance Thermometers (PT100 / PT1000)", glyph:"rtd",
       desc:"Platinum resistance thermo elements are temperature sensors capable of measuring temperature between −200 °C and +450 °C with precise measuring capability. They may be designated as PT100, PT1000 and similar.",
       variants:[
         ["Head Type Thermo Elements","SS316 – SS310 protective sheath, 4–6 mm sheath diameters, Class A / Class B element construction, 4–20 mA or 0–10 V signal output."],
         ["Special Thermo Elements","Models with a PP housing head and PTFE sheath for acidic environments, and Ex-proof protected models for explosive atmospheres. Manufacturing options in the 3–22 mm sheath diameter range."],
         ["Penetration Thermo Elements","Temperature sensors with pointed tips suitable for insertion. Their application processes are food and meat processing plants; they may have stainless steel or PTFE handles."],
         ["Plug-in and Display Types","Models generally developed for machine applications or for easy reading at the process point. The output can be selected from the display; data can be monitored and configured from a phone via the Android application (NFC)."]
       ],
       specs:[["Type","PT100, PT200, PT500, PT1000, PT2000"],["Protective Sheath","SS316 – SS310 – (PTFE-PVDF-PFA)"],["Sheath Diameters","Manufacturing options in the 3 mm … 22 mm range"],["Element Construction","Core, Class A, Class B, foil, glass, ceramic"],["Number of Elements","1×, 2×, 3×, 6×"],["Mechanical Connection","R 1/2\" (opt. customer specific)"],["Immersion Length","50 mm … 500 mm"],["Power Supply","10 – 30 VDC"],["Signal Output","4–20 mA, 0–10 V, 2×PNP (display model)"],["Accuracy","±0.5% FS"]],
       uses:"In all solid, liquid, gas and steam applications.",
       sectors:"Machinery industry, cement plants, glass and ceramics industry, food industry, pharmaceutical industry, chemical and petrochemical industry, heavy industry and defence industry, test rigs, HVAC, agriculture industry.",
       notes:["The correct type must be selected according to the temperature.","Custom manufacturing is available on request."]},

      {code:"NT-HT", img:"assets/kat/p26_2.png", name:"Temperature and Humidity Sensors", glyph:"humidity",
       desc:"NT-HT series temperature and humidity transmitters are precise measuring devices that measure with a capacitive sensor. Thanks to the redesigned sensor and integrated technology they can be used under almost all conditions. Even if the sensor comes into direct contact with liquid, it is constructed to continue measuring once the liquid on it has evaporated.",
       variants:[
         ["NT-HT100 Series","Can easily be used in different applications either standard wall mounted or with its extendable cable. The display model allows convenient local monitoring; economical versions without a display are also available. In addition to relay and analogue signal outputs, an optional RS485 Modbus communication module can be added."],
         ["NT-HT101 Series","An inline transmitter developed for air ducts or immersion temperature-humidity applications; options with and without display, stainless steel, brass and plastic probes, and filter options specially developed for pressurised environments are available."],
         ["NT-HT-W10","Developed for monitoring temperature and humidity data over GSM. Reading of 2 external analogue, 2 logic and 16 Modbus parameters plus GSM communication features have been added. Logging and web upload intervals for all data are configurable."],
         ["NT-HT13/14","Special series products from which a 4–20 mA output can be taken for temperature and humidity; practical in application and economical."]
       ],
       specs:[["Display Features","2 × 14 mm 4-digit special display (15 m reading distance)"],["Signal Output","4–20 mA / 0–10 V for temperature and humidity, or 2×3 A relay + RS485 Modbus"],["Ingress Protection","IP65 (opt. IP68)"],["Accuracy","0.2 °C, 3% rH"],["Temperature Measuring Range","−40…+120 °C"],["Humidity Measuring Range","0–100 %rH"],["Power Supply","24 VDC (12…36 VDC / 100–240 VAC depending on model)"],["Connection Type","Wall mount, threaded mount, inline mount"],["Probe Material","Stainless steel, brass with filter, threaded stainless steel, PVC sensor body"],["Filter Material","Stainless steel or PTFE"],["Cable Length","5 m (opt. up to 30 m)"]],
       uses:"Cold storage rooms, poultry farming, office temperature-humidity monitoring systems, isolated rooms.",
       sectors:"Food storage, agriculture and livestock, building automation, pharmaceuticals and logistics."}
     ]},

    /* ===================== PROCESS CONTROL ===================== */
    {id:"kontrol", kicker:"06", title:"Process Indicators and Controllers", sub:"Monitoring, control and signal transmission", glyph:"panel",
     products:[
      {code:"NT-TCS / NT-FBT", img:"assets/kat/p27_2.png", name:"Flow Rate and Totaliser Indicators", glyph:"panel",
       desc:"Control instruments designed for monitoring, controlling and transmitting the measurements made in industrial processes. They are developed to monitor instantaneous and totalised flow quantity, and to control and transmit it through different output options.",
       specs:[["Product Code","NT-TCS / NT-FBT / NT-TCS37"],["Size","72×72 mm / 96×96 mm / 36×72 mm"],["Display","2×6 digits (8 mm) / 6 digits (8 mm)"],["Switching","2×8 A relay / 1×8 A relay"],["Analogue Output","4–20 mA / 0–20 mA"],["Communication","RS485 Modbus ASCII/RTU"],["Supply Voltage","12 VDC – 24 VDC – 220 VAC"],["Counting Rate","10 kHz"]],
       uses:"Panel monitoring and control of flow rate and totalised flow measurements.",
       sectors:"Treatment plants, food industry, chemical industry, machinery manufacturing."},

      {code:"NT-DI / NT-UPI", img:"assets/kat/p27_3.png", name:"Universal Input Indicators", glyph:"panel",
       desc:"Simple type control indicators produced for observing and controlling process values across all universal input types (compatible with temperature sensors and sensors with analogue outputs). Outputs can be obtained by defining different alarm options.",
       specs:[["Product Code","NT-DI 377 / NT-UPI"],["Size","35×77 mm / 48×48, 72×72, 48×96, 96×48 mm"],["Display","4 digits (10 mm) / 2×4 digits (upper 14 mm, lower 10 mm)"],["Input","Thermocouple, PT100, PTC, NTC, 4–20 mA, 0–10 V, ohm"],["Switching","4×8 A relay / 2×8 A relay (opt. 3×8 A)"],["Analogue Output","4–20 mA, 0–20 mA, 0–10 V"],["Communication","RS485 Modbus ASCII/RTU"],["Accuracy","0.5% / 0.3%"],["Supply Voltage","12 VDC – 24 VDC – 220 VAC"]],
       uses:"Panel monitoring of temperature and analogue sensors.",
       sectors:"Machinery manufacturing, food, chemicals, power plants."},

      {code:"NT-EPD 11", img:"assets/kat/p28_2.png", name:"Compact Universal Indicators", glyph:"panel",
       desc:"The NT-EPD 11 digital indicator is used to take the 4–20 mA signal from transmitters and convert and display it in the required engineering unit. It is designed for easy fitting and removal on 2-wire transmitters with a DIN 43650 plug connection. The product offers high accuracy, stability and ease of use. It is a convenient solution for adding a display and alarm set points to pressure or other transmitters.",
       specs:[["Applications","Display of 4–20 mA current value or percentage, 2 independent alarm/switch outputs"],["Input Signal","4–20 mA (2-wire)"],["Power Source","4–20 mA 2-wire loop powered, max. voltage drop 8 VDC"],["Output Signal","4–20 mA 2-wire signal output"],["Field Operation","3 buttons, all parameters can be changed locally"],["Display","Dual row 5-bit/8-bit, 7/16 segment backlit LCD, −19999~99999"],["Accuracy and ADC","0.1% FS ±1 bit / 24 bit"],["Number of Switches","2-way PNP / NO"],["Switch Function","High set, low set, window function, hysteresis"],["Engineering Units","kPa, MPa, Pa, bar, mbar, psi, mH₂O, Torr, atm, kg, N, °C, °F, K, %RH, PPM, pH, m, mm, m/s, Ω, mV, V"]],
       uses:"Adding a field display and alarm to transmitters.",
       sectors:"All industrial process applications."},

      {code:"NT-UPC / NT-TC / NT-PRFC", img:"assets/kat/p28_4.png", name:"Controllers", glyph:"controller",
       desc:"Used for observing and controlling process values in applications measured with temperature sensors and sensors with analogue outputs. On-Off, proportional (P), proportional + integral (PI) and proportional + integral + derivative (PID) operating modes are available for the control output. They can operate integrated with other systems via the Modbus communication protocol.",
       variants:[
         ["Universal Input Controllers","NT-UPC 4 / 7 / 49. 48×48, 72×72, 48×96 mm. Universal process input 4…20 mA, 0…20 mA, 0…60 mV, 0…10 V, thermocouple (J,K,R,S,T), PT100 (with lead compensation). 2 relay outputs 8 A@250 VAC, analogue output, RS485 Modbus."],
         ["Temperature Controllers","NT-TCS 377-X / NT-TC 4 / NT-TC 38. All thermocouple types, PT100, PTC and NTC input. ON/OFF or time proportional (P) operation, heating/cooling function, alarm output and delay time can be configured."],
         ["Ramp/Soak Controllers","NT-PRFC7. 72×72 mm. A ramp/profile controller designed for measuring and controlling temperature or any process value in industry. Profiles of up to 20 steps."]
       ],
       specs:[["Accuracy","0.3% – 0.5%"],["Control Output","Relay output (8 A@250 VAC)"],["Analogue Output","4…20 mA, 0…20 mA"],["Communication","RS485 Modbus RTU/ASCII"],["Resolution","1 °C / 0.1 °C (PT100, for the 0…100 °C range)"],["Supply Voltage","220 VAC, 24 VDC, 12 VDC (to be stated when ordering)"]],
       uses:"Temperature and process value control, heating-cooling automation.",
       sectors:"Furnaces and heat treatment plants, food, plastics, chemicals, machinery manufacturing."},

      {code:"NT-UT / NT-LT / NT-TT", img:"assets/kat/p28_6.png", name:"Signal Converters", glyph:"converter",
       desc:"Devices designed to convert and carry analogue and digital signal outputs to systems that have different input options. Easy mounting and isolation against external influences are important for correct application in this type of converter device.",
       variants:[
         ["DIN-Rail Universal Signal Converters","NT-UT 17 / 18. Converts all thermocouples and resistance thermo elements, 0/4–20 mA current and 0–50 mV voltage inputs into 0/4–20 mA and 0/2–10 V voltage outputs. Single and dual channel options; 1500 V 3-way galvanic isolation."],
         ["In-Head Signal Converters","NT-LT / NT-TT Series. Designed to obtain 4–20 / 20–4 mA outputs from type B, E, J, K, L, N, R, S, T, U thermocouples, PT100 resistance thermo elements and level sensors producing a resistance output. Suitable for mounting in a housing or socket."]
       ],
       specs:[["Supply Voltage","8 – 36 VDC"],["Universal Analogue Input","Thermocouple B,E,J,K,L,N,R,S,T,U; PT100; current 0/4–20 mA; voltage 0–50 mV"],["Input Resolution","16 bit"],["Sampling Period","100 – 400 ms"],["Analogue Output","0/4–20 mA, 0/2–10 V, 20–4 mA"],["Load Resistance","Current RL ≤ 600 Ω, voltage RL ≥ 1 MΩ"],["Accuracy","PT100 ±0.2% MV ±0.3 °C; T/C, mV ±0.2% MV ±1 °C"],["Thermal Drift","±100 ppm/°C"],["Galvanic Isolation","1500 V"],["Memory","100 years, 100,000 write cycles"],["Response Time","0.2 … 120 s"],["Operating Temperature","−40…+85 °C"]],
       uses:"Signal level and type conversion, long-distance signal transmission, galvanic isolation.",
       sectors:"All industrial automation applications."}
     ]},

    /* ===================== MECHANICAL CONTROL ===================== */
    {id:"mekanik", kicker:"07", title:"Mechanical Control", sub:"Actuators, solenoid valves and valves", glyph:"valve",
     products:[
      {code:"NT-VT / NT-ATG / NT-KE100", img:"assets/kat/p29_2.png", name:"Actuators", glyph:"actuator",
       desc:"Drive elements that enable a system or mechanism to perform its opening and closing action. Different types are available according to the field of use and application. They generally command this control by hydraulic, pneumatic or electrical means.",
       variants:[
         ["Pneumatic Actuator (NT-VT)","Aluminium body and piston, alloy steel shaft, Namur solenoid valve interface, 5–8 bar supply pressure, ISO 5211 valve connection, 90° ±5° rotation angle."],
         ["Pneumatic Actuator (NT-ATG)","Aluminium body and piston, Namur switch box interface, ISO 5211 valve connection, 180° rotation angle."],
         ["Electric Actuator (NT-KE100)","Quarter-turn electric actuator; aluminium body (polyester powder coated), ISO 5211 connection, IP67 protection, 220 VAC supply, −20…+70 °C ambient, 20–500 Nm torque, 2 limit switches as standard, class F motor."]
       ],
       specs:[["Body and Piston","Aluminium"],["Operating Temperature","−20…+80 °C"],["Shaft Material","Alloy steel"],["Supply Pressure","5 – 8 bar (pneumatic)"],["Valve Connection","ISO 5211"],["Ingress Protection","IP67 (electric)"],["Torque Values","20 – 500 Nm"]],
       uses:"Driving valves and butterfly valves, automatic line control.",
       sectors:"Treatment plants, chemicals and petrochemicals, food industry, power plants."},

      {code:"NT-1901 / NT-7901 / NT-PV250", img:"assets/kat/p29_4.png", name:"Solenoid Valves", glyph:"solenoid",
       desc:"Electrically or pneumatically controlled mechanical circuit elements that open, close or redirect the path of a medium by opening and closing one or more orifices.",
       variants:[
         ["Brass Body Solenoid Valve (NT-1901)","Brass body, NC-NO position, 1/8\"…2\" sizes (opt. hose connection), NBR/EPDM/HNBR/Viton/PTFE/Rubin/POM diaphragm, 12-24 VAC/DC … 220 VAC coil. Pilot operated, direct acting and diaphragm operated modes."],
         ["Stainless Body Solenoid Valve (NT-7901)","Stainless steel body, NC-NO position, 1/8\"…1\" sizes, Viton/NBR/PTFE diaphragm, 12-24 VAC/DC … 220 VAC coil."],
         ["Pulse Valve (NT-PV250)","Aluminium body, NC position, 3/4\" to 4\" threaded, flanged or union connection, silicone/rubber diaphragm, 12 VAC/DC … 220 VAC coil."]
       ],
       specs:[["Body Material","Brass / stainless steel / aluminium"],["Position","NC – NO"],["Size","1/8\" … 4\""],["Diaphragm / Seal","NBR, EPDM, HNBR, Viton, PTFE, silicone, rubber"],["Coil","12, 24 VAC/DC … 220 VAC"]],
       uses:"On-off duty on liquid and gas lines, filter cleaning (pulse valve) and dosing control.",
       sectors:"Water and treatment, cement and dust collection plants, food industry, machinery manufacturing."},

      {code:"NT-VLV", img:"assets/kat/p29_6.png", name:"Valves", glyph:"valve",
       desc:"Mechanical control products driven by a gearbox, hand lever or actuator; they can operate on-off or proportionally and serve to regulate, stop or redirect the flow of media of different specifications. Ball, butterfly, globe, knife gate, plug and other types are available, and different types can be selected according to properties present in the process such as pressure, temperature, medium type, density and viscosity.",
       variants:[
         ["Wafer Butterfly Valve","Ductile iron body, wafer connection, optional pressure rating, compatible with pneumatic and electric actuators."],
         ["Ball Valve","Stainless steel or brass body, threaded/flanged/wafer connection, PN10 (opt. PN63), max. 180 °C, compatible with pneumatic and electric actuators."],
         ["3-Way Valve","Stainless steel or brass body, threaded connection, L or T port, PN63, max. 180 °C."],
         ["PVC Ball Valve","PVC body, full bore, PN10, max. 60 °C, compatible with pneumatic and electric actuators."],
         ["Pinch Valve","Cast aluminium body, threaded and flanged connection, compliant with the Namur standard."],
         ["Timer Controlled Valve","Stainless steel, brass or PVC body, PN10 / 90 °C, 2-way or 3-way, on-off or proportional, time controlled models."]
       ],
       specs:[["Body Material","Ductile iron, stainless steel, brass, PVC, cast aluminium"],["Connection","Wafer, threaded, flanged"],["Pressure Rating","PN10 … PN63"],["Max. Temperature","60 °C … 180 °C"],["Actuator Compatibility","Pneumatic and electric"]],
       uses:"Line on-off duty, flow diversion and proportional flow control.",
       sectors:"Water and wastewater, chemicals and petrochemicals, food industry, power plants, mining."}
     ]},

    /* ===================== HANDHELD + AUTOMATION ===================== */
    {id:"eltipi", kicker:"08", title:"Handheld Instruments and Data Logging", sub:"Field measurement, analysis and data recording", glyph:"handheld",
     products:[
      {code:"NT-IRT", img:"assets/kat/p30_1.png", name:"Infrared Thermometer", glyph:"laser",
       desc:"A thermometer that senses without contact (infrared). Models are available that can take readings in the −60…+2000 °C temperature range; they are handheld, easy to use and ergonomic products.",
       specs:[["Measuring Range","−60 … +2000 °C (depending on model)"],["Measuring Type","Non-contact infrared"],["Use","Handheld, ergonomic"]],
       uses:"Machine surface temperature, electrical panel inspection, food safety checks.",
       sectors:"Maintenance and repair, food, energy, heavy industry."},

      {code:"NT-ANM", img:"assets/kat/p30_2.png", name:"Anemometer", glyph:"anemo",
       desc:"Easy-to-use devices that measure wind/air velocity in open areas or in tunnels where an air flow develops. Many models of this type of device also measure temperature and humidity values.",
       specs:[["Measurement","Air/wind velocity, temperature, humidity"],["Use","Handheld"]],
       uses:"Ventilation duct measurement, tunnel and mine ventilation, HVAC commissioning.",
       sectors:"HVAC, mining, construction, energy."},

      {code:"NT-SLM", img:"assets/kat/p30_3.png", name:"Sound Level (Decibel) Meter", glyph:"sound",
       desc:"Compact handheld devices developed for measuring and determining sound intensity. Different models are available that combine other measuring parameters such as temperature, humidity and light.",
       specs:[["Measurement","Sound intensity (dB), opt. temperature-humidity-light"],["Use","Compact handheld"]],
       uses:"Occupational health and safety measurements, environmental noise monitoring.",
       sectors:"Occupational safety, municipalities and public bodies, industrial facilities."},

      {code:"NT-GLD", img:"assets/kat/p30_4.png", name:"Gas Leak Detector", glyph:"gasdetect",
       desc:"Devices capable of detecting leaks of gases such as carbon monoxide, ammonia, methane and propane, whose escape could endanger human health. They can raise an audible and visual alarm should the level rise above the specified threshold.",
       specs:[["Detected Gases","CO, ammonia, methane, propane and similar"],["Alarm","Audible and visual"],["Use","Handheld"]],
       uses:"Gas line leak inspection, confined space safety, maintenance checks.",
       sectors:"Natural gas, petrochemicals, refrigeration plants, facility management."},

      {code:"NT-AQM", img:"assets/kat/p30_5.png", name:"pH, EC, TDS and Chlorine Meters", glyph:"analytic",
       desc:"Devices developed for analytical measurements such as pH, conductivity, salinity, dissolved oxygen and chlorine. Handheld, laboratory and online (continuous) measurement models are available. Some models offer analogue or digital signal output options for control and monitoring purposes.",
       specs:[["Measuring Parameters","pH, EC, TDS, salinity, dissolved oxygen, chlorine"],["Model Types","Handheld, laboratory, online"],["Output","Opt. analogue or digital signal"]],
       uses:"Water treatment process control, swimming pool and drinking water monitoring, laboratory analysis.",
       sectors:"Water and wastewater treatment, food industry, chemicals, municipalities and public bodies."},

      {code:"NT-TAO", img:"assets/kat/p30_6.png", name:"GPS Field Area Meter", glyph:"gps",
       desc:"A practical, high-accuracy product that measures area in square metres using GPS signals. With its menu and user-friendly interface it allows a measurement to be taken with a single button.",
       specs:[["Measurement","GPS-based area (m², decare)"],["Interface","Menu driven, single-button measurement"]],
       uses:"Field and land area calculation, agricultural planning.",
       sectors:"Agriculture, land management, cadastral applications."},

      {code:"NT-DLG", img:"assets/kat/p30_8.png", name:"Data Recorders and Dataloggers", glyph:"logger",
       desc:"Devices that store in memory the data sensed by all thermocouple types, resistance thermo elements and sensor groups producing an output across all universal analogue input types; display models allow the data to be viewed on screen graphically or in table form. Many models offer communication outputs and monitoring software so that data can be examined on a computer.",
       variants:[["Data Recorders","2, 4, 6 … 40 channels, 320×200 LCD screen, isolated universal inputs, RS232 communication, 2 GB USB disk and 1 GB SD card memory, 4–20 mA output and 24 VDC sensor supply. The logging interval is adjustable between 1 s and 30 min."],["Datalogger","Designed to record the instantaneous temperature data of products such as pharmaceuticals and food; temperature variations are typically monitored during shipment. −35…+70 °C, ±0.5 °C accuracy, IP67, EN 12830 compliant, internationally HACCP certified, 16,000 record capacity, 90 days operating time."]],
       specs:[["Number of Channels","2, 4, 6 … 40"],["Screen","320×200 LCD (varies with the number of channels)"],["Input","Isolated universal inputs"],["Communication","RS232"],["Memory","2 GB USB disk, 1 GB SD card"],["Response Time and Accuracy","1 s / ±0.2"],["Output","4–20 mA, 24 VDC sensor supply"],["Logging Interval","Adjustable between 1 s and 30 min"],["Power Supply","220 VAC, opt. 24 VDC"]],
       uses:"Process data logging, cold chain monitoring, quality documentation.",
       sectors:"Food and pharmaceutical industry, logistics, heat treatment plants, laboratories."}
     ]}
  ],

  closing:{
    title:"Automation and Design",
    body:["Net Flow is the brand that carries VFA Elektronik's 12 years of manufacturing experience into export markets. Alongside the supply of measuring instruments, it designs and commissions complete automation solutions according to the needs of your facility. From field instrumentation to panel manufacturing, and from PLC and SCADA software to commissioning and training, we manage the entire process from a single source.",
      "Throughout the project we work with all our strength and capability towards accurate measurement, reliable data and sustainable control. Our engineering team is at your service for the modernisation of your existing facility or the instrumentation design of your new investment."],
    items:[["Field Instrumentation","Project-based selection and supply of flow, level, pressure, temperature and analytical measurements."],["Panel Manufacturing","Design, manufacturing and site installation of command and control panels."],["PLC and SCADA","Process automation software, data monitoring and reporting systems."],["Commissioning","Site installation, calibration, testing and user training."]]
  }
};
