/* NET FLOW — E-Catalogue data (Français)
   All product codes carry the NT- prefix. */
window.NF_CAT = {
  lang:"fr",
  brand:{name:"Net Flow", domain:"netflw.com", phone:"+90 541 373 79 53", mail:"info@netflw.com",
    tagline:"Marque d'exportation de VFA Elektronik", since:"12 ans d'expérience de fabrication",
    addr:"Fevzıçakmak Mah. Aslım Cad. · Konya · Türkiye"},

  ui:{
    principle:"Principe de fonctionnement", contents:"Sommaire",
    jumpHint:"Cliquez sur un nom de produit pour accéder à sa page",
    corporate:"Entreprise", aboutTitle:"Qui sommes-nous", aboutLabel:"Qui sommes-nous",
    uses:"Applications", sectorsLong:"Secteurs desservis", sectors:"Secteurs",
    variantImgs:"Images des modèles", notes:"Notes", models:"Modèles",
    specs:"Spécifications techniques", contact:"Contact", address:"Adresse",
    waCta:"Écrivez-nous sur WhatsApp", exportBrand:"Marque d'exportation de VFA Elektronik",
    coverVfa:"Marque d'exportation de VFA Elektronik · 12 ans d'expérience de fabrication",
    tagline:"Mesure industrielle", coverLabel:"Couverture", backLabel:"Quatrième de couverture",
    coverEyebrow:"Catalogue produits · 2026",
    coverH1:"Mesurer.", coverH1em:"Contrôler.",
    coverLede:"Solutions d'instrumentation complètes pour la mesure de débit, niveau, pression et température. Fabriqué en Türkiye et étalonné dans notre laboratoire accrédité TÜRKAK.",
    madeIn:"Fabriqué en Türkiye",
    calibTitle:"Garantie d'étalonnage",
    calibBody:"Les débitmètres électromagnétiques sont étalonnés dans notre laboratoire accrédité TÜRKAK (AB-0354-K) ISO/IEC 17025:2017 sur la plage 1–350 m³/h avec une incertitude de ±0,27 %. Un certificat d'étalonnage traçable, reconnu dans plus de 100 pays grâce aux accords de reconnaissance mutuelle EA et ILAC, est fourni avec l'instrument. Tous les autres produits sont fournis certifiés Yerli Malı (fabrication locale), avec un système qualité ISO 9001 et une déclaration CE.",
    projectTitle:"Demande de projet",
    projectBody:"Partagez vos points de mesure, données de fluide et diamètres de conduite ; notre équipe d'ingénieurs vous accompagnera dans le choix du produit, le dimensionnement et le devis. Pour la fabrication sur mesure et les exigences spéciales de process, contactez-nous directement.",
    closingLabel:"Automatisation", closingScreen:"Automatisation et conception",
    backH2:"Mesure précise,<br>données fiables.",
    backSub:"Contactez-nous pour la sélection de produits, le support applicatif et les devis. Fabrication locale, livraison rapide et support technique direct.",
    contLabel:"Suite",
    rights:"© 2026 Net Flow · Tous droits réservés",
  },

  wp:{
    flow:["Les bobines créent un champ magnétique à travers le tube.","Lorsque le liquide conducteur traverse le champ, une <b>tension est induite</b>.","Les électrodes lisent cette tension ; elle est proportionnelle à la vitesse.","Le transmetteur convertit la valeur en débit volumique."],
    turbine:["Le débit fait tourner le rotor de turbine dans la conduite.","Le capteur compte les passages de pales comme des <b>impulsions</b>.","La fréquence des impulsions est proportionnelle à la vitesse.","Le débit instantané et totalisé est calculé."],
    rota:["Le liquide ou le gaz s'écoule vers le haut dans un tube conique.","Le flotteur est maintenu en <b>équilibre</b> par la force du débit.","La hauteur d'équilibre est proportionnelle au débit.","La valeur est lue directement sur l'échelle."],
    vortex:["Des tourbillons se forment derrière le corps profilé.","La fréquence des tourbillons est <b>proportionnelle à la vitesse</b>.","Un capteur piézo détecte l'oscillation de pression.","Le débit est calculé pour la vapeur, le gaz et les liquides."],
    ultra:["Deux transducteurs opposés envoient des signaux ultrasonores.","Le signal voyageant avec le débit arrive <b>plus vite</b>.","La différence de temps de transit est mesurée.","La différence est convertie en vitesse d'écoulement."],
    channel:["Un déversoir ou canal contraint le canal ouvert.","Le capteur mesure le <b>niveau</b> d'eau sans contact.","La relation niveau-débit est appliquée.","Le débit instantané et totalisé est obtenu."],
    metaltube:["Le flotteur monte dans le tube métallique avec le débit.","Sa position est transmise par <b>couplage magnétique</b>.","L'aiguille de l'indicateur suit cette position.","Les lectures sont possibles sur des conduites opaques et haute pression."],
    ovalgear:["Le liquide remplit la cavité entre deux engrenages ovales.","Chaque rotation transporte un <b>volume fixe</b>.","Les rotations sont comptées par le capteur.","Une haute précision est obtenue sur les liquides visqueux."],
    helical:["Deux rotors hélicoïdaux imbriqués tournent.","Chaque rotation transfère un <b>volume</b> défini.","Les impulsions de rotation sont comptées.","La mesure est possible sur des produits très visqueux."],
    thermal:["Une sonde chauffée est placée dans le flux.","Lorsque le gaz passe, la sonde <b>se refroidit</b>.","Le taux de refroidissement dépend du débit massique.","Aucune correction de pression ou température n'est requise."],
    coriolis:["Les tubes de mesure sont mis en vibration de manière contrôlée.","Le débit crée un <b>déphasage</b> dans les tubes.","Le déphasage est proportionnel au débit massique.","La densité et la température sont également mesurées."],
    switchflow:["Une palette ou sonde dans le flux change de position.","Au débit défini, le <b>contact</b> commute.","La sortie relais est envoyée au tableau de commande.","La protection des pompes et les alarmes sont assurées."],
    sight:["Le flux passe à travers un hublot transparent.","L'opérateur confirme le débit <b>visuellement</b>.","Le mouvement d'une palette ou bille indique la direction.","Il est clair si la conduite est en écoulement ou non."],
    level:["Le capteur est monté sur le dessus de la cuve.","La <b>distance</b> à la surface du liquide est mesurée.","Le niveau est calculé à partir de la hauteur de la cuve.","Une sortie 4–20 mA ou numérique est fournie."],
    radar:["L'antenne émet une onde radar haute fréquence.","L'onde se <b>réfléchit</b> sur la surface du liquide.","La distance est calculée à partir du temps aller-retour.","La poussière, la vapeur et la mousse n'affectent pas la mesure."],
    hydro:["La sonde est immergée au fond de la cuve.","La colonne de liquide crée une <b>pression</b> sur la sonde.","La pression est convertie en niveau à l'aide de la densité.","Un signal de niveau continu est généré."],
    capacitive:["La sonde et la paroi de la cuve forment un condensateur.","Lorsque le niveau change, la <b>capacité</b> change.","L'électronique mesure ce changement.","Le niveau est détecté dans les solides et les liquides."],
    motor:["Un petit moteur fait tourner la palette en continu.","Lorsque le matériau bloque la palette, la rotation <b>s'arrête</b>.","Le couple moteur déclenche le micro-interrupteur.","Un signal plein/vide est donné via relais."],
    vibrating:["La fourche vibrante vibre à sa propre fréquence.","Lorsque le matériau entoure la fourche, la fréquence <b>chute</b>.","L'électronique détecte ce changement.","Une alarme de niveau ponctuel est générée."],
    sideswitch:["Le flotteur est monté latéralement sur la paroi de la cuve.","Lorsque le niveau change, le flotteur <b>pivote</b>.","L'aimant interne déclenche un contact reed.","Une sortie relais NO/NC est obtenue."],
    diaphragm:["Une membrane flexible entre en contact avec le matériau.","La pression du matériau <b>pousse</b> la membrane.","Le mouvement actionne un micro-interrupteur.","Un signal plein est donné pour poussières et granulés."],
    flood:["Le capteur est placé au sol ou dans un puisard.","Quand l'eau le touche, le circuit se <b>ferme</b>.","L'unité de contrôle déclenche une alarme.","Un avertissement précoce contre les inondations est fourni."],
    bypass:["Le flotteur dans la chambre bypass monte avec le liquide.","Son aimant <b>retourne</b> l'échelle à drapeaux.","Le changement de couleur indique le niveau.","Aucune alimentation ni maintenance n'est nécessaire."],
    conductive:["Des électrodes de différentes longueurs plongent dans la cuve.","Quand le liquide touche une électrode, le circuit <b>conduit</b>.","L'unité relais détecte la conduction.","Les niveaux plein, vide et intermédiaire sont contrôlés."],
    rope:["Une sonde suspendue par câble est descendue dans les grands silos.","À l'approche du matériau, la <b>capacité</b> change.","L'électronique se déclenche au franchissement du seuil.","Le niveau ponctuel est obtenu dans les silos profonds."],
    floattx:["Le flotteur se déplace le long d'un tube guide.","Sa position est transmise <b>magnétiquement</b>.","Une chaîne de résistances convertit la position en signal.","Une sortie continue 4–20 mA est fournie."],
    pressure:["La pression du process agit sur la cellule de mesure.","L'élément sensible <b>se déforme</b> à l'échelle du micron.","La déformation est convertie en signal électrique.","Il est transmis en 4–20 mA."],
    diffpressure:["La pression est prise en deux points distincts.","La <b>différence</b> se développe à travers la cellule.","La différence est convertie en signal.","Le colmatage des filtres et le niveau sont surveillés."],
    exproof:["La cellule de mesure est dans un boîtier <b>antidéflagrant</b>.","La pression du process est transmise au capteur.","Le signal est acheminé vers la zone sûre.","Une mesure sûre en atmosphères explosives est assurée."],
    smart:["Le signal du capteur est traité numériquement.","La température et la linéarité sont <b>compensées</b>.","Les paramètres sont saisis localement depuis l'afficheur.","Il se connecte au système via HART/Modbus."],
    gauge:["Le capteur de pression convertit la lecture en numérique.","La valeur est lue directement <b>sur l'afficheur</b>.","Les valeurs min/max sont conservées en mémoire.","L'étalonnage est effectué depuis le menu."],
    pswitch:["La valeur de pression définie est atteinte.","Le mécanisme change la position du <b>contact</b>.","Le signal relais est envoyé au tableau.","Les pompes et compresseurs sont protégés."],
    manometer:["Le tube de Bourdon se <b>déroule</b> sous la pression.","Le mouvement est transmis à un mécanisme à engrenage.","L'aiguille dévie sur l'échelle.","Lecture directe sans alimentation électrique."],
    temp:["La pointe du capteur est immergée dans le process.","La <b>résistance ou tension</b> change avec la température.","Le transmetteur mesure ce changement.","Un signal 4–20 mA est généré."],
    thermocouple:["Deux métaux dissemblables sont joints à la pointe.","La différence de température produit une petite <b>tension</b>.","La tension est convertie en température.","La mesure est possible à haute température."],
    rtd:["La résistance de l'élément en platine change avec la température.","<b>100 Ω</b> à 0 °C est pris comme référence.","La résistance est mesurée avec précision.","Une température de haute précision est obtenue."],
    humidity:["L'élément capacitif absorbe l'humidité.","La <b>capacité</b> change avec l'humidité.","L'électronique calcule l'humidité relative.","Elle est reportée avec la température."],
    panel:["Le signal du capteur est câblé à l'entrée du panneau.","L'appareil <b>met à l'échelle</b> et affiche le signal.","Les limites d'alarme sont définies.","Des sorties relais et série sont fournies."],
    controller:["La valeur du process est lue en continu.","Elle est comparée au point de consigne pour trouver l'<b>écart</b>.","L'algorithme PID calcule la sortie.","Une vanne ou un chauffage est piloté."],
    converter:["Le signal d'entrée est isolé.","Il est <b>converti</b> dans un autre format.","Le bruit et les boucles de terre sont évités.","Le système est alimenté en toute sécurité."],
    valve:["Le fluide entre dans le corps de vanne.","La position du disque ou de la bille <b>régule le débit</b>.","La position est définie par l'actionneur.","Le débit ou la pression est contrôlé."],
    actuator:["Le signal de commande atteint l'actionneur.","Un moteur ou piston <b>entraîne</b> la tige.","La position de la vanne est modifiée.","Un retour de position est renvoyé."],
    solenoid:["La bobine est alimentée.","Le champ magnétique <b>tire</b> le plongeur.","Le passage s'ouvre ou se ferme.","Un ressort le ramène quand l'alimentation est coupée."],
    handheld:["L'appareil est amené au point de mesure.","Une lecture <b>instantanée</b> est prise avec la sonde.","La valeur est affichée sur l'écran.","Les enregistrements sont stockés en mémoire."],
    laser:["L'appareil émet un faisceau laser vers la cible.","La lumière <b>réfléchie</b> de la surface est mesurée.","Le temps de transit est converti en distance.","Une mesure sans contact est effectuée."],
    anemo:["Des ailettes ou une sonde sont placées dans le flux d'air.","La vitesse du flux est convertie en <b>rotation</b> ou refroidissement.","L'électronique calcule la vitesse.","Le débit d'air et la vitesse sont reportés."],
    sound:["Le microphone capte le son ambiant.","Le signal est traité en <b>décibels</b>.","Des filtres de pondération sont appliqués.","Le niveau de bruit est reporté."],
    gasdetect:["La cellule du capteur échantillonne l'air ambiant.","Le gaz cible crée une <b>réaction</b>.","La concentration est calculée.","Une alarme est déclenchée au dépassement du seuil."],
    analytic:["L'échantillon passe à travers la cellule de mesure.","Une électrode ou capteur optique <b>lit la valeur</b>.","La compensation de température est appliquée.","Le pH, la conductivité ou la turbidité est reporté."],
    gps:["Le récepteur capte les signaux satellites.","La <b>position</b> est résolue à partir des délais de signal.","Les données sont enregistrées ou transmises.","Le suivi de véhicules et de terrain est assuré."],
    logger:["L'appareil lit les données du capteur périodiquement.","Les lectures sont <b>enregistrées</b> avec un horodatage.","Les données sont transférées en mémoire ou dans le cloud.","Elles sont consultées sous forme de rapports et graphiques."]
  },

  about:[
    "Net Flow est la marque d'exportation de VFA Elektronik, un fabricant avec 12 ans d'expérience en production et ingénierie. Établie en Türkiye pour fournir des instruments de mesure industrielle et des solutions d'automatisation à l'industrie. À mesure que l'industrie se développe, la qualité et sa constance sont devenues des facteurs décisifs. C'est pourquoi les producteurs ont besoin de mesure industrielle, de surveillance des données et de contrôle sur l'ensemble de leurs paramètres de process, tant pour l'efficacité énergétique que pour respecter les normes de qualité.",
    "Avec notre équipe jeune et dynamique, nous développons des solutions précises et innovantes pour ces besoins. En éléments de mesure, nous fournissons et mettons en service des capteurs de débit, niveau, pression, température, humidité et mesure analytique. Pour la surveillance des données, nous proposons des indicateurs de process, des enregistreurs papier et numériques ainsi que des applications PID et PLC. Nous fournissons également des actionneurs et vannes dans le domaine du contrôle mécanique.",
    "En visant des solutions à coût compétitif, haute qualité et service rapide, nous avons constitué une base de clients satisfaits. Conformément à cela, nous élargissons notre gamme de produits chaque jour grâce à nos représentants commerciaux nationaux et internationaux.",
    "Dans la fabrication de capteurs de niveau à flotteur et capacitifs, nous avons fait de la conception originale et de la mesure fiable notre principe directeur. À long terme, nous visons à fabriquer tous les instruments de mesure localement et ainsi réduire la dépendance de notre pays aux importations dans ce domaine."
  ],
  aboutStats:[["TÜRKAK","Accréditation AB-0354-K"],["ISO/IEC 17025","Laboratoire d'étalonnage"],["100+","Pays acceptant nos certificats"],["12 ans","Expérience VFA Elektronik"]],

  sections:[
    /* ===================== FLOW METERS ===================== */
    {id:"debi", kicker:"01", title:"Débitmètres", sub:"Mesure de débit volumique et massique sur les lignes de liquide, gaz et vapeur", glyph:"flow",
     products:[
      {code:"NT-VMF", img:"assets/products/NT-VMF.webp", name:"Débitmètre électromagnétique", glyph:"flow", hero:true,
       vimgs:[["Type hygiénique","assets/products/NT-VMF-W.webp"],["Type miniature","assets/products/NT-VMF-M.webp"],["Type à insertion","assets/products/NT-VMF-I.webp"],["Alimenté par batterie","assets/products/NT-VMF-BT.webp"],["Partiellement rempli","assets/products/NT-VMF-P.webp"],["Zéro longueur droite (0D)","assets/products/NT-VMF-0D.webp"],["Type boue","assets/products/NT-VMF-S.webp"]],
       desc:"Ces débitmètres mesurent les liquides conducteurs (minimum 5 μS/cm) en reliant le champ magnétique généré par les bobines, et la différence de tension résultante, à la vitesse du fluide. Leur grande précision de mesure et l'absence de pièces mobiles à l'intérieur du tube les rendent adaptés à tous les liquides conducteurs non corrosifs.",
       variants:[
         ["Type hygiénique","Conçu pour prévenir la croissance bactérienne et adapté à toutes les applications alimentaires ; fabriqué avec un corps entièrement en acier inoxydable et un raccordement hygiénique ou tri-clamp."],
         ["Type miniature","Développé pour les faibles débits. Avec des plages de mesure de 0,2–2 L/min et 5–100 L/min, il peut être appliqué aux diamètres de raccordement entre DN3 et DN15. Largement utilisé dans les applications de remplissage."],
         ["Type à insertion","Conçu pour les diamètres d'application entre DN100 et DN3000 ; ce modèle est installé à travers un piquage soudé sur la conduite."],
         ["Alimenté par batterie","Conçu pour les applications sans alimentation électrique disponible. Une batterie au lithium de 3,6 V assure un fonctionnement longue durée."]
       ],
       specs:[["Matériau du corps","Acier au carbone / Acier inoxydable 304-316 (opt.)"],["Taille de raccordement","DN10 – DN3000"],["Plage de mesure | Vitesse","0,2–2 L/min … 12000–38000 m³/h | 0,5–15 m/s"],["Matériau des bobines","Cuivre 99%"],["Conductivité minimale","5 μS/cm"],["Pression nominale","0,6 / 1,0 / 1,6 / 2,5 / 4,0 MPa"],["Matériau du revêtement","PTFE / Néoprène / Caoutchouc dur / F46 / PFA / Polyuréthane"],["Matériau des électrodes","SS316L / Hastelloy B / Hastelloy C / Titane / Tantale / Platine"],["Température ambiante","Caoutchouc −25…+60 °C / PTFE −20…+150 °C"],["Précision","0,5% / ±0,3% / ±0,2% (opt.)"],["Alimentation","AC 85–250 V / DC 20–36 V"],["Sortie","4–20 mA, impulsion, RS485 Modbus (opt.) / HART, Profibus (opt.)"],["Alarme","Tube vide, excitation, limite basse et haute"],["Affichage","LCD trois lignes"],["Indice de protection","IP65 / IP67 / IP68 (opt.)"],["Certificats","CE / ISO 9001 / Certificat d'étalonnage"]],
       uses:"Eau potable, irrigation agricole, jus de fruits, produits chimiques et liquides conducteurs contenant des particules grossières.",
       sectors:"Stations d'épuration, industrie alimentaire, industrie textile, industrie lourde, industrie mécanique, industrie chimique, pétrochimie, industrie papetière, industrie pharmaceutique et irrigation agricole.",
       notes:["Le liquide mesuré doit être électriquement conducteur.","La conduite doit être complètement pleine pendant le passage du débit.","Les composants du fluide doivent être mélangés de manière homogène.","Si le liquide lui-même induit un effet magnétique, le champ magnétique de l'appareil change et un réétalonnage est nécessaire.","Il doit être installé selon le guide de raccordement mécanique pour assurer un écoulement laminaire."]},

      {code:"NT-TRB", img:"assets/products/NT-TRB.webp", name:"Débitmètre à turbine", glyph:"turbine",
       desc:"Une turbine pouvant tourner librement est placée à l'intérieur du corps afin de détecter la vitesse du fluide. La vitesse de rotation de la turbine est directement proportionnelle à la vitesse du fluide. En calculant vitesse × section et en assurant un écoulement laminaire, une mesure de débit avec une précision de ±0,2% est possible. Des versions en acier inoxydable et en plastique sont disponibles avec des raccordements à bride, filetés, tri-clamp, à insertion et wafer.",
       variants:[
         ["Type hygiénique","Modèles développés pour les applications alimentaires ; l'installation mécanique se fait avec un raccordement tri-clamp ou à bride empêchant la croissance bactérienne."],
         ["Modèle plastique","Pour les diamètres de ligne entre 1/8\" et 2\" à raccordement fileté, il offre une plage de mesure de 0,15–200 L/min. Des modèles entièrement en PTFE sont disponibles pour les applications acides."],
         ["Type à insertion","Conçu pour les diamètres d'application entre DN100 et DN3000 ; il est installé à travers un piquage soudé sur la conduite."],
         ["Haute température","Un modèle conçu avec une extension de refroidissement supplémentaire pour une tenue en température de 200 °C."]
       ],
       specs:[["Matériau du corps","Acier inoxydable AISI 304-316 / PTFE"],["Taille de raccordement","DN4 – DN200"],["Fluide","Liquides sans particules"],["Plage de débit","0,04 – 800 m³/h"],["Précision","±0,2% / ±0,5% / ±1%"],["Plage de température","−20…+80 °C, opt. −20…+120 °C, opt. 200 °C"],["Répétabilité","0,1% de la lecture"],["Matériau de la turbine","Acier inoxydable CD4MCU"],["Rapport de réduction","Standard 10:1, opt. 20:1"],["Pression maximale","16 / 25 / 40 / 63 bar, opt. jusqu'à 400 bar"],["Sortie","Onde carrée (impulsion), opt. 4–20 mA"],["Alimentation","12 – 24 VDC"],["Indice de protection","IP65"],["Indicateur","LCD 2 lignes compact ou déporté"],["Certificats","CE / ISO 9001 / Certificat d'étalonnage"]],
       uses:"Liquides sans particules, lignes d'eau, lignes de lait, lignes alimentaires, liquides non conducteurs, produits chimiques et unités de remplissage.",
       sectors:"Industrie mécanique, industrie chimique, bancs d'essai, industrie pharmaceutique, industrie papetière, industrie lourde.",
       notes:["Non recommandé pour les fluides contenant des particules ou aux points où le rotor pourrait se bloquer.","La conduite doit être complètement pleine pendant le passage du débit.","Pour les liquides abrasifs, les détails du fluide doivent toujours être indiqués lors de la sélection du produit.","Il doit être installé selon le guide de raccordement mécanique pour assurer un écoulement laminaire."]},

      {code:"NT-VA / NT-DK800", img:"assets/products/NT-VA.webp", name:"Débitmètre à section variable (Rotamètre)", glyph:"rota",
       desc:"Il se compose d'un flotteur étalonné en poids qui se déplace librement à l'intérieur d'un tube conique en verre ou en plastique rigide. Lorsque le fluide traverse le tube, il pousse le flotteur vers le haut, et le débit instantané peut être déterminé à partir de ce mouvement.",
       variants:[
         ["Série NT-VA","Utilisé pour déterminer le débit instantané de fluides liquides ou gazeux. Il possède un tube en verre et un corps métallique ; il est installé verticalement dans la ligne et, lorsque le débit passe de bas en haut, le flotteur change de position sans frottement. Adapté au service à haute température."],
         ["Série NT-DK800","Un modèle avec tube en verre et corps métallique. Le débit instantané peut être surveillé sur l'échelle en verre ; sa conception compacte et sa vanne de contrôle intégrée permettent un réglage précis du débit."],
         ["Série NT-LZS","Un modèle à corps PVC pour le débit instantané de fluides liquides et corrosifs. Le taux de variation dépend du poids du flotteur ainsi que de la densité et de la viscosité du fluide."],
         ["Série NT-LZM","Un modèle à corps polypropylène pour les fluides liquides et gazeux. La vanne de contrôle permet un réglage précis du débit."]
       ],
       specs:[["Matériau du corps","Aluminium / Acier inoxydable SS316 (revêtement époxy), PVC, polypropylène"],["Température maximale","70 °C … 150 °C (selon modèle)"],["Taille de raccordement","1/4\" NPT … 1\" fileté, à bride et tri-clamp ; DN65–DN150"],["Joint torique","Viton"],["Fluide","Liquide et gaz"],["Plage de mesure – Liquide","0,25 L/h … 15000 L/h"],["Plage de mesure – Gaz","0,05 L/min … 4300 L/h"],["Précision","1% – 2,5% de la pleine échelle"],["Tube de mesure","Verre / plastique rigide"],["Pression maximale","10 – 16 bar"]],
       uses:"Gaz et liquides.",
       sectors:"Stations de traitement, industrie mécanique, usines de recyclage, usines de traitement thermique, bancs d'essai, industrie chimique."},

      {code:"NT-VTX", img:"assets/products/NT-VTX.webp", name:"Débitmètre vortex", glyph:"vortex",
       desc:"Mesure de débit basée sur le principe des tourbillons qu'un flux forme en tournoyant autour d'un obstacle. En résumé, la valeur de débit est dérivée de la variation de pression différentielle produite par les vortex générés par le corps profilé à l'intérieur du corps du compteur.",
       specs:[["Fluide","Liquide, gaz, vapeur"],["Plage de mesure","DN15–DN300 (à bride et wafer), DN100–DN2000 (type à insertion)"],["Plage de température","−20…250 °C, opt. 350 °C"],["Pression maximale","16 / 25 / 40 bar"],["Précision","±0,5% / ±1,0% / ±1,5% de la pleine échelle — type à insertion : ±2,5%"],["Nombre de Reynolds","Re > 4000"],["Sortie signal et communication","4–20 mA (2 fils), impulsion (3 fils), RS485 Modbus"],["Température ambiante","−25…55 °C"],["Alimentation","24 VDC, batterie lithium 3,6 V"],["Matériau du corps","SS304, opt. SS316"]],
       uses:"Solvants et produits chimiques, pétrole et gaz, fluides frigorigènes et unités de vapeur.",
       sectors:"Industrie chimique, industrie papetière, usines de recyclage, pétrochimie, énergie, mines, sidérurgie, industrie textile.",
       notes:["Adapté aux conditions de processus exigeantes.","Les données de température et de pression peuvent également être surveillées pendant la mesure de débit.","Peut être utilisé là où la longueur droite disponible est limitée.","Les valeurs réelles peuvent être obtenues avec compensation de température et de pression."]},

      {code:"NT-TUF-2000", img:"assets/products/NT-TUF-2000.webp", name:"Débitmètre à ultrasons", glyph:"ultra",
       desc:"Ces débitmètres déterminent la vitesse des liquides à l'intérieur d'une conduite fermée à l'aide de transducteurs à ondes sonores fixés sur la surface de la conduite, sans aucune intrusion mécanique dans la conduite. Des valeurs de débit avec une précision de 1% peuvent être obtenues aux bornes de lecture à partir du calcul proportionnel de la vitesse d'écoulement.",
       variants:[["NT-TUF-2000H","Type portable ; fourni avec un étui de transport, des sangles de montage et un mètre ruban. Mesure de terrain avec batterie rechargeable."],["NT-TUF-2000S/M","Type fixe / rail DIN ; alimentation 220 VAC ou 24 VDC, protection IP68, sortie RS485 et 4–20 mA."],["Compteur d'eau ultrasonique en ligne","Compteur d'eau ultrasonique en ligne intégré directement dans la conduite. Sans pièces mécaniques ; mesure résidentielle et industrielle de l'eau pour les diamètres de conduite de DN15 à DN300."],["Débitmètre ultrasonique en ligne","Débitmètre ultrasonique en ligne avec raccordement à bride ou fileté directement dans la conduite. Offre une précision supérieure au clamp-on."],["Modèle portable avec imprimante","Rapport de mesure instantané sur le terrain avec imprimante thermique intégrée. Utilisation portable, alimentation par batterie rechargeable."]],
       specs:[["Taille de raccordement","DN15 … DN6000"],["Plage de mesure","0,01 … 32 m/s"],["Précision","1% de la lecture"],["Plage de température","−40…110 °C, opt. 160 °C"],["Indicateur","LCD rétroéclairé 4×16 / 2×20 caractères"],["Longueur de câble","5 mètres, opt. 10 mètres"],["Communication","RS232 / RS485"],["Sortie signal","4–20 mA, relais (type fixe)"],["Enregistrement de données","Mémoire de 2000 enregistrements"],["Indice de protection","IP65 / IP68"]],
       uses:"Eau, eaux usées, produits chimiques, acides, liquides abrasifs et visqueux.",
       sectors:"Stations de traitement, pétrochimie, centrales hydroélectriques, industrie alimentaire, industrie papetière, industrie pharmaceutique, industrie automobile, municipalités et institutions publiques.",
       notes:["Fournit une mesure sans endommager la conduite.","Trois tailles de transducteurs offrent une large plage de mesure.","La viscosité du fluide doit être constante et il doit être utilisé sur des conduites homogènes et complètement pleines.","Options de mesure pour les matériaux tels que l'acier, l'acier inoxydable, la fonte, le PVC, le cuivre et l'aluminium."]},

      {code:"NT-OCF", img:"assets/products/NT-OCF.webp", name:"Débitmètre à canal ouvert", glyph:"channel",
       desc:"Ces débitmètres sont installés au-dessus d'un déversoir ou d'un barrage dans un canal ouvert et déterminent le débit en mesurant la vitesse et la profondeur du flux par une méthode sans contact (ultrasons). Ils offrent une haute précision avec une résolution de changement de 1 mm. Un système de chauffage électrique est disponible pour les applications à très basse température. Grâce à l'isolation contre les interférences, ils ne sont pas affectés par le bruit électrique ; les quantités instantanées et totalisées peuvent être surveillées.",
       specs:[["Plage de mesure","0 ~ 99999 L/s ou m³/h"],["Résolution de niveau","1 mm"],["Indicateur","LCD rétroéclairé 14 chiffres, deux lignes"],["Unités de débit","m³/h – L/s"],["Sortie","4–20 mA et communication série RS485 (Modbus RTU)"],["Alarmes de sortie","Jusqu'à 6 relais programmables ; sortie impulsion pour débit cumulé"],["Tenue en température","−40…+70 °C"],["Indice de protection","IP67 (unité principale) / IP68 (sonde)"],["Alimentation","DC 24 V (±5%) 0,2 A / AC 220 V (±20%) 0,1 A"],["Déversoirs compatibles","Déversoirs et canaux ouverts, canaux Parshall (ISO), déversoirs triangulaires à angle droit et rectangulaires"],["Plage de mesure de la sonde","0,00 ~ 4,00 m (niveau)"],["Matériau de la sonde","ABS / PVC / PTFE"]],
       uses:"Traitement de l'eau, irrigation, eaux usées industrielles et autres domaines industriels.",
       sectors:"Cours d'eau et rivières avec structure de déversoir existante, municipalités et institutions publiques, stations de traitement et d'épuration, hôtellerie et tourisme, industrie et irrigation agricole.",
       notes:["Les étapes indiquées dans le guide d'installation doivent être respectées selon le type de déversoir.","Le choix de la sonde doit être effectué avec soin en fonction du milieu utilisé."]},

      {code:"NT-MTF", img:"assets/products/NT-MTF.webp", name:"Rotamètre à tube métallique", glyph:"metaltube",
       desc:"Un modèle de débitmètre à section variable utilisé pour la mesure des liquides, gaz et vapeur ; il mesure sur la base du mouvement d'un flotteur magnétique. Les rotamètres à tube métallique, qui résistent aux effets hydrodynamiques, sont principalement utilisés sur les lignes verticales, mais avec une conception mécanique spéciale, ils peuvent également être utilisés horizontalement. Leur indicateur finement gradué et leur large rapport d'échelle les rendent faciles à lire.",
       specs:[["Plage de mesure","Liquides 2,5–100000 L/h ; gaz 0,07–3000 m³/h"],["Tenue en température","−25…+100 °C, opt. haute température 300 °C"],["Précision","±2,5%, opt. haute précision ±1,5%"],["Sortie","Opt. 4–20 mA, contact, panneau de surveillance LCD"],["Alimentation","24 VDC, batterie lithium 3,6 V"],["Pression de service max.","16 bar"],["Raccordement","À bride, fileté, raccord rapide"],["Indice de protection","IP65, IP67"]],
       uses:"Applications haute température et haute pression, fluides chimiques, applications d'eau, gaz et liquides explosifs, fluides abrasifs, applications de surveillance analogique ne nécessitant aucune connexion électrique.",
       sectors:"Usines chimiques, centrales électriques, industrie lourde, industrie mécanique, industrie pétrochimique, industrie papetière, usines de remplissage de gaz.",
       notes:["Les données de haute température et pression doivent être respectées.","La plage d'échelle peut être spécifiée.","Un raccordement hygiénique clamp peut être fourni pour les applications alimentaires.","Le corps et la classe de protection peuvent être sélectionnés selon les fluides corrosifs et explosifs."]},

      {code:"NT-OGF", img:"assets/products/NT-OGF.webp", name:"Débitmètre à engrenages ovales", glyph:"ovalgear",
       desc:"Ces débitmètres mesurent au moyen de deux engrenages ovales synchronisés qui tournent proportionnellement à la vitesse d'écoulement. La vitesse de rotation détermine la vitesse d'écoulement et, avec le calcul de la section, le débit instantané et totalisé est obtenu. Ils offrent une installation facile et une haute précision sur les fluides à haute température et viscosité. Ils peuvent être utilisés à de très faibles débits et produisent une impulsion à haute résolution.",
       specs:[["Raccordement","DN6 – DN100 mm"],["Précision","±0,5% (opt.)"],["Pression max.","100 bar"],["Plage de mesure","0,5 mL/min – 240 L/min"],["Sortie","Impulsion, opt. 4–20 mA"],["Alimentation","5 – 24 VDC"]],
       uses:"Huiles industrielles, huiles hydrauliques, produits chimiques de faible ou haute viscosité, liquides à haute température et haute pression, applications alimentaires liquides et huiles raffinées.",
       sectors:"Industrie automobile, industrie mécanique, usines pétrochimiques et de peinture, usines chimiques, usines de production d'huile, industrie des boissons.",
       notes:["Le produit doit être sélectionné en fonction de la viscosité du fluide.","Les données de haute température et pression doivent être respectées.","Les fluides contenant des particules doivent être filtrés.","Des options de corps sont disponibles pour les fluides abrasifs."]},

      {code:"NT-HGF", img:"assets/products/NT-HGF.webp", name:"Débitmètre à engrenages hélicoïdaux", glyph:"helical",
       desc:"Les débitmètres hélicoïdaux sont une méthode de mesure conçue pour déterminer le débit de fluides visqueux en plaçant deux rotors hélicoïdaux cycloïdaux à l'intérieur d'un boîtier cylindrique, de sorte que ces rotors forment un volume fermé contre la paroi intérieure et le mouvement du fluide dépend uniquement de leur rotation. Cette méthode atteint une très haute précision avec un minimum de fuite, un écoulement ininterrompu et une perte de charge minimale.",
       specs:[["Raccordement","DN6 – DN100"],["Précision","±0,1%"],["Répétabilité","±0,05%"],["Pression max.","400 bar"],["Plage de mesure","0,4 – 400 L/min"],["Sortie","Impulsion, opt. 4–20 mA"],["Alimentation","5 – 24 VDC"]],
       uses:"Fluides de viscosité variable, paraffine et fluides adhésifs, applications alimentaires, fluides chimiques, graisse et huiles similaires.",
       sectors:"Systèmes de remplissage et de dosage, industrie papetière, industrie lourde, industrie de l'isolation et du revêtement, bancs d'essai, industrie de la paraffine, industrie alimentaire.",
       notes:["Sa construction robuste assure une longue durée de vie.","Des options de corps sont disponibles pour les fluides abrasifs.","Un choix idéal pour les faibles débits et les fluides de viscosité variable."]},

      {code:"NT-TMF", img:"assets/products/NT-TMF.webp", name:"Débitmètre massique thermique", glyph:"thermal",
       desc:"Ces débitmètres sont conçus pour les fluides gazeux sur la base de la dispersion thermique et mesurent en utilisant la méthode de différence de température constante. La chaleur est générée sur la sonde de mesure par un courant appliqué ; le niveau de puissance augmente pour contrer l'effet de refroidissement du flux de gaz, et ce niveau est directement proportionnel au débit massique. Le débit instantané et totalisé est déterminé à partir de cela.",
       specs:[["Tailles de raccordement","DN80–DN4000 (insertion), DN10–DN2000 (en ligne)"],["Vitesse","0,5 ~ 100 Nm/s (20 °C, 101,33 kPa)"],["Précision","±2,5% (insertion) / ±1% (en ligne)"],["Température de fonctionnement","−40…+220 °C (capteur), −20…+45 °C (transmetteur)"],["Pression maximale","Insertion ≤2,5 MPa, en ligne ≤4,0 MPa"],["Sortie","4–20 mA (isolée optoélectroniquement, charge max. 500 Ω)"],["Sortie alarme","1–2 voies relais, normalement ouvert, 10 A / 220 VAC ou 5 A / 30 VDC"],["Communication","RS485 (isolée optoélectroniquement), HART"],["Indice de protection","IP65"]],
       uses:"Air sec et gaz (propane, azote, oxygène, hydrogène et similaires).",
       sectors:"Centrales électriques et de chauffage, centrales à gaz naturel, industrie chimique, industrie mécanique.",
       notes:["L'appareil peut également être utilisé pour la détection de fuites de gaz.","Il possède une haute résistance aux vibrations."]},

      {code:"NT-CMF", img:"assets/products/NT-CMF.webp", name:"Débitmètre massique Coriolis", glyph:"coriolis",
       desc:"Avec les capteurs situés à l'entrée et à la sortie d'un tube d'écoulement spécialement conçu, les signaux provenant des capteurs sont en phase en l'absence de débit. Dès que le débit commence, la vibration résultante crée un déphasage entre les signaux ; cette différence est directement proportionnelle au débit massique traversant les tubes. Le débit est compensé par un capteur de température monté sur les tubes ; ces produits peuvent également déterminer la densité du fluide.",
       specs:[["Précision","±0,2%, opt. ±0,1%"],["Plage de mesure de densité","0,3–3000 g/cm³ (précision ±0,002 g/cm³)"],["Tenue en température","−50…+200 °C, opt. −200…+300 °C (précision ±1 °C)"],["Sortie","4–20 mA, opt. signal débit / densité / température"],["Communication","RS485, protocole Modbus"],["Protection et pression","IP67 – 4,0 MPa"]],
       uses:"Toutes les applications liquides et gazeuses ; principalement les dérivés pétroliers, l'industrie chimique, l'industrie médicale et les centrales de chauffage.",
       sectors:"Usines chimiques, industrie pétrochimique et des carburants, centrales électriques, industrie papetière, industrie textile, industrie frigorifique, industrie mécanique, industrie pharmaceutique.",
       notes:["Fournit la mesure de débit massique, de densité et de température simultanément.","Permet une installation horizontale et verticale facile.","Ne nécessite aucune longueur droite à l'entrée et à la sortie.","Fournit une mesure indépendante des propriétés physiques du fluide."]},

      {code:"NT-CTG", img:"assets/products/NT-CTG.webp", name:"Débitmètre thermique compact pour gaz", glyph:"thermal",
       desc:"Conçu sur la base d'une dispersion thermique économique, il adopte la méthode de différence de température constante pour mesurer le débit de gaz. Il offre des avantages tels que petite taille, installation facile, haute fiabilité et haute précision.",
       specs:[["Tailles de raccordement","DN8 – DN300"],["Précision","±1,5% de la lecture + 0,3% de la pleine échelle"],["Gaz mesurables","N₂, Ar, O₂, CO₂ et gaz de processus similaires"],["Température de fonctionnement","−30…+230 °C / humidité relative <90%"],["Pression maximale","5,0 MPa"],["Sortie","4–20 mA et sortie impulsion, Modbus, communication M-Bus"],["Sortie alarme","1–2 voies relais, normalement ouvert, 10 A / 220 VAC ou 5 A / 30 VDC"],["Indice de protection","IP65"]],
       uses:"Gaz de processus, lignes de gaz naturel et systèmes d'air comprimé.",
       sectors:"Centrales électriques, industrie chimique, industrie mécanique, usines de remplissage de gaz.",
       notes:["Offre un étalonnage facile pour tous les gaz.","Offre contrôle, configuration et étalonnage à distance."]}
     ]},

    /* ===================== CAPTEURS DE DEBIT ===================== */
    {id:"akis", kicker:"02", title:"Capteurs de debit", sub:"Surveillance de la presence de debit, commutation et controle visuel", glyph:"switchflow",
     products:[
      {code:"NT-FSW", img:"assets/products/NT-FSW.webp", name:"Interrupteurs de debit", glyph:"switchflow",
       desc:"Un interrupteur de debit est utilise pour detecter le debit a l'interieur des conduites. En detectant le mouvement des liquides dans la conduite, il indique s'il y a ou non un ecoulement. Ils constituent un choix fiable pour de nombreux constructeurs de machines dans le controle de debit et les systemes de chauffage-refroidissement.",
       variants:[
         ["Interrupteurs de débit à palette (VAS-10/20)","Les interrupteurs et capteurs de débit à palette sont installés verticalement dans la conduite. Avec leurs modèles à corps en T ou à palette directe, ils sont pratiques et faciles à utiliser ; la sortie relais directe facilite la connexion à de nombreux éléments d'entraînement. VAS-10 série économique et VAS-20 série industrielle."],
         ["Interrupteur de débit à palette plastique (VAS-10P)","Corps PP, palette plastique. Solution économique pour les environnements corrosifs et acides."],
         ["Interrupteur de débit corps laiton (VAS-30)","Corps laiton, haute résistance à la pression et à la température. Format compact, lignes d'eau industrielles et de refroidissement."],
         ["Interrupteur de débit corps plastique (VAS-35)","Corps PP plastique, faible coût. Pour les applications nécessitant une compatibilité chimique."],
         ["Interrupteurs de débit thermiques (VAS-FS10)","Interrupteurs de débit qui surveillent le débit à base de liquide et fonctionnent selon le principe calorimétrique. Lorsque la vitesse de débit dépasse la valeur limite définie par l'utilisateur, ils inversent leur état ; l'état peut être lu sur les LED de l'appareil."],
         ["Interrupteur de débit thermique Ex-Proof","Interrupteur de débit thermique certifié ATEX pour les environnements explosifs et dangereux. Certifié Ex d IIC T6, pour les procédés chimiques et pétrochimiques."]
       ],
       specs:[["Raccordement","DN8 – DN200"],["Tenue en temperature","+200 °C"],["Tenue en pression","25 bar (type thermique 6,3 MPa)"],["Materiau","304 SS – PP"],["Signal de sortie","Contact Reed 26 VA / 20 W ; relais, PNP, NPN, 4–20 mA (thermique)"],["Alimentation","24 V ±10% DC (type thermique)"],["Affichage","10 × LED tricolore (vitesse) + 1 × LED (temperature)"],["Plage de vitesse","4 … 400 cm/s (precision ±2 … ±8 cm/s)"],["Indice de protection","IP65 / IP67"]],
       uses:"Chauffe-eau, chaudieres, lignes d'eau de refroidissement, centrales electriques et mines. Modeles speciaux disponibles pour les processus explosifs et exigeants.",
       sectors:"Construction de machines, systemes de chauffage et refroidissement, centrales electriques, mines."},

      {code:"NT-FSG", img:"assets/products/NT-FSG.webp", name:"Indicateurs de debit visuels", glyph:"sight",
       desc:"Un indicateur de debit visuel est un element utilise pour observer le debit dans les circuits de conduites fermees sous differents angles. Les indicateurs sont installes avant et apres les purgeurs de vapeur pour surveiller les fuites, et utilises dans les industries alimentaires et pharmaceutiques pour la verification visuelle du fluide. Les verres utilises sont speciaux ; ils sont egalement connus sous le nom de verre trempe sodo-calcique.",
       variants:[
         ["VAG-12 Indicateur de débit horizontal","Raccordement 3/8\", diamètre intérieur de tube 32 mm, corps en acier inoxydable. Observation visuelle du débit à travers un hublot en verre sur les conduites horizontales."],
         ["VAG-11 Indicateur de débit vertical","Raccordement 1/4\", corps en acier inoxydable AISI 304, max. 100 °C, 1,6 MPa (229 PSI). Surveillance du débit sur les conduites verticales."]
       ],
       specs:[["Raccordement","1/4\" – 2\""],["Tenue en temperature","−30…+180 °C"],["Pression de service","16 bar"],["Materiau","AISI 304 acier inoxydable, opt. 316 acier inoxydable"],["Materiau du regard","Verre resistant a la chaleur"]],
       uses:"Eau froide, eau chaude, vapeur, air comprime, GPL, GNL, asphalte, fioul, barbotine ceramique et similaires.",
       sectors:"Industrie alimentaire, industrie pharmaceutique, centrales electriques, industrie chimique, industrie ceramique."}
     ]},

    /* ===================== CAPTEURS DE NIVEAU ===================== */
    {id:"seviye", kicker:"03", title:"Capteurs de niveau", sub:"Mesure de niveau continue et ponctuelle sur les liquides et les solides", glyph:"level",
     products:[
      {code:"NT-ULS", img:"assets/products/NT-ULS.webp", name:"Transmetteurs de niveau a ultrasons", glyph:"ultra",
       desc:"Les capteurs de niveau a ultrasons sont des instruments concus pour la mesure sans contact de la distance, du niveau et du volume sur les solides et les liquides. Ils se composent d'un capteur a ultrasons, d'un convertisseur de signal et d'une unite de commande. L'onde sonore que le capteur, facile a installer, envoie dans la cuve frappe le materiau et est detectee a son retour, determinant ainsi le niveau. Les fausses lectures sont evitees grace a la fonction de filtrage.",
       variants:[
         ["Série VUS QLU","Affichage LCD 4 chiffres, précision 0,2%, alimentation 24 VDC, consommation 60 mA. Capteur de niveau ultrasonique compact et économique."],
         ["Série VUS ECH-30x","Plage de mesure 6–18 m, technologie ultrasonique haute fréquence, sortie 4–20 mA et communication Modbus RS485, 2 contacts relais. Applications à longue portée."]
       ],
       specs:[["Plage de mesure","0–1 … 0–20 metres"],["Precision","0,5% – 1,0%"],["Resolution","3 mm ou 0,1%"],["Tenue en temperature","Transmetteur −20…+60 °C, capteur −20…+80 °C"],["Indice de protection","Transmetteur IP65, capteur IP68"],["Sortie","4–20 mA"],["Alimentation","24 VDC"]],
       uses:"Stations de traitement et de distribution d'eau, usines chimiques et petrochimiques, usines agroalimentaires, cuves fermees et ouvertes.",
       sectors:"Sable, clinker de ciment, eaux usees, eau propre, particules solides poussiereuses, alimentation et fourrage, granules plastiques.",
       notes:["Les etapes indiquees dans le guide d'installation doivent etre respectees.","Le choix de la sonde doit etre effectue avec soin en fonction du milieu utilise."]},

      {code:"NT-RLS", img:"assets/products/NT-RLS.webp", name:"Transmetteurs de niveau radar", glyph:"radar",
       vimgs:[["Radar","assets/products/NT-RLS-radar.webp"],["Onde guidée","assets/products/NT-RLS-H.png"]],
       desc:"Les capteurs de niveau radar emettent des balayages de frequence croissants dans le temps par gestion d'impulsions ; ces signaux, reflechis par la surface mesuree, sont captes par l'antenne et le niveau des liquides et des solides est ainsi determine. Grace a leur technologie avancee et a differentes methodes d'application telles que le sans contact et l'onde guidee, ils simplifient la mesure dans les processus exigeants. La valeur mesuree peut etre interpretee comme distance, niveau, volume ou masse.",
       variants:[
         ["Radar VRS FMCW","Bande de fréquence 77–81 GHz, mesure sans contact. Détection de niveau haute précision sur les liquides et les solides."],
         ["Radar VRS à onde guidée","26 GHz, principe d'onde guidée. Mesure fiable dans les cuves avec mousse, vapeur ou nuage de poussière."],
         ["Série VRS RDR300 (ORION FMCW)","Portée de mesure jusqu'à 50 mètres. Pour les cuves de grand volume et les silos."],
         ["Série VRS 900","26 GHz, certifié Ex ia IIC T6 Ga. Utilisation en atmosphères explosives et zones dangereuses."]
       ],
       specs:[["Plage de mesure","0–10 m / 0–30 m / 0–50 m / 0–70 m"],["Precision","±2 mm"],["Alimentation","24 VDC – 220 VAC"],["Tenue en temperature","−60…+60 °C / −60…+150 °C / −60…+250 °C"],["Indice de protection","Transmetteur IP65, capteur IP68"],["Sortie signal et communication","4–20 mA, HART, RS485 Modbus, Profibus PA, Foundation Fieldbus"],["Bande de frequence","26 GHz – 70 GHz"]],
       uses:"Sable, clinker de ciment, eaux usees, eau propre, particules solides poussiereuses, liquides a haute temperature et visqueux ; lait et produits laitiers, boissons gazeuses, huile, essence, diesel, dolomite, calcite, chaux, farine et fourrage, granules plastiques.",
       sectors:"Industrie ceramique, cimenteries, stations d'epuration, industrie agroalimentaire, industrie petrochimique, usines de transformation des plastiques et de matieres premieres, carrieres de sable et de pierre, usines de chaux et de platre."},

      {code:"NT-HLS", img:"assets/products/NT-HLS.webp", name:"Transmetteurs de niveau hydrostatiques", glyph:"hydro",
       desc:"Le transmetteur de niveau hydrostatique est specialement concu en version submersible. A mesure que le niveau du liquide monte, la pression qu'il exerce sur le fond augmente lineairement. Sur la base de ce principe, l'appareil immerge dans le liquide mesure le niveau avec precision, proportionnellement a la montee du niveau du liquide.",
       variants:[
         ["VHL PL110","Plage de mesure 100 mbar – 25 bar, sortie 4–20 mA ou 0–10 VDC. Transmetteur de niveau submersible à usage général."],
         ["VHL PL130","Membrane piézorésistive (1.4404/AISI 316L), 100 mbar – 25 bar, sortie 0–10 VDC / 0,5–4,5 VDC / 4–20 mA. Modèle haute précision."]
       ],
       specs:[["Plage de mesure","1 – 100 metres"],["Precision","0,5%"],["Pression maximale","200% FS"],["Raccordement electrique","Longueur de cable selon la valeur du niveau"],["Tension d'alimentation","+12…30 VDC"],["Indice de protection","IP68"],["Corps","1.4404 (AISI 316L), opt. 1.4462 (duplex) – titane"],["Temperature de fonctionnement","−25…+85 °C"],["Sortie","4–20 mA, 0–10 VDC ou 0,5–4,5 VDC"]],
       uses:"Puits, reservoirs d'eau, reservoirs de carburant, niveau de lac, niveau de riviere, niveau de mer et bassins de retenue.",
       sectors:"Systemes d'irrigation, cours d'eau, cuves, municipalites et institutions publiques.",
       notes:["La longueur du cable doit etre indiquee lors de la commande.","Un cable ventile special est utilise pour la mesure et doit donc etre protege."]},

      {code:"NT-CLS", img:"assets/products/NT-CLS.webp", name:"Transmetteurs de niveau capacitifs", glyph:"capacitive",
       desc:"Le transmetteur de niveau capacitif offre une mesure proportionnelle de haute precision dans la gestion du niveau des materiaux solides et liquides, malgre la poussiere, la mousse, la salete ou des particules similaires. Le principe de mesure capacitif repose sur la detection de la valeur de capacite entre l'electrode et la surface de la cuve, qui varie en fonction de la masse presente. Apres l'installation, l'electrode du capteur est immergee dans le materiau jusqu'au point requis.",
       variants:[
         ["Transmetteur de niveau capacitif VKS 5","Mesure de niveau sur les liquides conducteurs. Alimentation 9–36 VDC, pression (−)1…(+)100 bar, plage de température −40…+150 °C."],
         ["Série VKS 11 ECAP","Mesure de niveau sur les liquides adhésifs et acides/basiques. Alimentation 9–36 VDC, (−)1…(+)100 bar, −40…+150 °C. Revêtement spécial résistant aux fluides corrosifs."]
       ],
       specs:[["Longueur de mesure","150 – 400 – 650 – 1150 mm"],["Temperature de process","−20…+100 °C"],["Indice de protection","IP68"],["Pression de service max.","10 bar"],["Delai de detection","Max. 1 s"],["Tension d'alimentation","12 – 35 VDC, 1,2 W"],["Sortie signal","Relais, 1 contact inverseur, AC max. 250 VAC / 2 A / 500 VA"]],
       uses:"Dans l'industrie du batiment : platre, chaux, sable fin, dolomite, calcite, enduit perlite, ciment, pierre, charbon, poussiere de charbon pulverise ; dans l'industrie agroalimentaire : fourrage, graines, farine, sel et sucre.",
       sectors:"Industrie du batiment, industrie agroalimentaire, industrie de la construction.",
       notes:["Non affecte par la poussiere et le sol au point d'utilisation.","L'appareil doit etre eloigne de l'entree du materiau.","Lorsque les conditions pourraient endommager l'appareil, il est recommande d'installer un deflecteur au point de mesure."]},

      {code:"NT-MLS", img:"assets/products/NT-MLS.webp", name:"Detecteurs de niveau rotatifs a palettes", glyph:"motor",
       desc:"Ce type de detecteur de niveau est un instrument concu pour le controle de niveau des materiaux a gros grains dans les silos et les conteneurs. Le principe de fonctionnement est tres simple : la sonde a palette du detecteur de niveau montee sur la paroi de la cuve commence a tourner a faible vitesse ; lorsque le materiau a gros grains atteint le niveau de la sonde, il exerce une contre-force sur la palette et l'empeche de tourner, de sorte que le moteur s'arrete et fournit un contact utilisable a des fins de controle.",
       variants:[
         ["Série VMS à palette motorisée","Détecteur de niveau motorisé à palette (drapeau) standard. Densité minimale de détection 250 g/L. Applications de silo et de conteneur."],
         ["ROT320 à palette motorisée","Conception compacte, couple élevé. Modèle robuste pour l'industrie lourde et les cimenteries."]
       ],
       specs:[["Borne de raccordement","Entree de cable jusqu'a 2 mm² (AWG 14) de section"],["Alimentation","24 VDC – 220 VAC"],["Tenue en temperature","Ambiante −20…+80 °C, process −5…+100 °C"],["Materiau","Acier inoxydable SS316"],["Taille de raccordement","R1½\" – R1\" – R2\""],["Densite min. de detection","250 g/L (avec palette standard)"],["Pression interne max. du silo","0,5 bar"]],
       uses:"Controle du niveau des solides en vrac dans les industries de la construction, du batiment, de l'agroalimentaire et des plastiques.",
       sectors:"Secteur de la construction (platre, chaux, ciment, concasseurs de pierre), agroalimentaire (fourrage, graines, farine, sel, sucre, the, legumineuses), industrie des plastiques."},

      {code:"NT-VLS", img:"assets/products/NT-VLS.webp", name:"Detecteurs de niveau a fourche vibrante", glyph:"vibrating",
       desc:"Les capteurs de niveau vibrants sont concus pour la detection ponctuelle de niveau sur les materiaux liquides et solides. Ils fonctionnent sur le principe que la vibration de la fourche est amortie lorsqu'elle entre en contact avec le materiau. Grace au faible nombre de pieces mobiles, les besoins de maintenance sont reduits et ils fonctionnent de maniere fiable dans les environnements a fortes vibrations.",
       variants:[
         ["VLV type fourche","Fourche en acier inoxydable, raccordement R1\" et R1/2\". Détection de niveau fiable sur les liquides et les solides."],
         ["VLV mono-sonde","Sonde unique en acier inoxydable, raccordement R1\" et R1/2\". Utilisation dans les espaces restreints et les liquides visqueux."],
         ["VLV-VBR fourche de contrôle","Alimentation 12–55 VDC, longueur de fourche 100 mm, température de fonctionnement −40…+85 °C. Fonctions de contrôle avancées."]
       ],
       specs:[["Application","Materiaux liquides et solides"],["Materiau","Acier inoxydable"],["Raccordement mecanique","R1\", R1/2\", opt. a bride, tri-clamp"],["Temperature et pression max.","150 °C … 1,5 MPa"],["Sortie","PNP-NO"],["Alimentation","24 VDC / 12–55 VDC"]],
       uses:"Produits solides sous forme de poudre, de granules et de particules, ainsi que les liquides.",
       sectors:"Industries agroalimentaire, pharmaceutique et chimique, industrie du batiment et de la construction."},

      {code:"NT-CSW", img:"assets/products/NT-CSW.webp", name:"Detecteur de niveau capacitif", glyph:"capacitive",
       desc:"Lorsque l'element de detection a l'extremite du detecteur de niveau de type Magcap est entoure par la matiere premiere au point d'utilisation, la puissance RF qu'il emet diminue. Lorsque cette diminution depasse le reglage de sensibilite configure, un signal de sortie est genere. La sensibilite peut etre ajustee sur l'appareil en fonction de la constante dielectrique et des proprietes du materiau.",
       variants:[
         ["Détecteur de niveau capacitif VKS 10","Alimentation 24 VDC, consommation max. 50 mW, température de fonctionnement −40…+150 °C. Construction compacte, contrôle de niveau industriel."],
         ["Détecteur de niveau capacitif VKS 12","Sensibilité de détection réglable, fréquence de fonctionnement 1,5 MHz, sortie relais (AC 250 V max. 2 A). Large gamme d'applications."]
       ],
       specs:[["Longueur de mesure","150 – 400 – 650 – 1150 mm"],["Temperature de process","−20…+100 °C"],["Indice de protection","IP68"],["Pression de service max.","10 bar"],["Delai de detection","Max. 1 s"],["Tension d'alimentation","12 – 35 VDC, 1,2 W"],["Sortie signal","Relais, 1 contact inverseur, AC max. 250 VAC / 2 A / 500 VA"]],
       uses:"Produits solides sous forme de poudre, de granules et de particules.",
       sectors:"Industrie du batiment, industrie agroalimentaire, industrie de la construction.",
       notes:["Non affecte par la poussiere et le sol au point d'utilisation.","Selon le point d'application, un deflecteur peut etre necessaire la ou l'appareil pourrait etre endommage."]},

      {code:"NT-SSW", img:"assets/products/NT-SSW.webp", name:"Detecteur de niveau a montage lateral", glyph:"sideswitch",
       desc:"Les detecteurs de niveau magnetiques de type F1 sont utilises pour la mesure du niveau de liquide dans tous les types de cuve. Ils offrent un large champ d'utilisation grace a leur capacite de fonctionnement sans alimentation externe, leur possibilite de montage lateral, leur large plage de pression et de temperature et leurs parties en contact entierement en acier inoxydable.",
       specs:[["Pression nominale","16 bar"],["Tenue en temperature","Max. 150 °C"],["Type de raccordement","Bride carree"],["Materiau de bride","AISI 316"],["Boitier","Aluminium"],["Reglage","50 – 100 – 200 mm"],["Densite","> 0,7 kg/L"],["Capacite de commutation","250 VAC, 15 A, NO+NC"]],
       uses:"Reservoirs d'eaux usees et d'eau propre, cuves d'acide et de soude caustique, reservoirs de carburant et d'huile, tous les recipients sous pression et sans pression.",
       sectors:"Industrie navale, installations de carburant et d'huile, industrie chimique.",
       notes:["Ne necessite aucune alimentation externe.","Peut fonctionner sous fortes vibrations."]},

      {code:"NT-DSW", img:"assets/products/NT-DSW.webp", name:"Detecteur de niveau a membrane", glyph:"diaphragm",
       desc:"Le detecteur de niveau a membrane pour solides est la methode la plus economique pour mesurer le niveau de materiaux en vrac dans un stockage. Il peut etre utilise dans les cuves ouvertes et non pressurisees. L'etat plein et vide des materiaux en vrac poudreux, en poudre, granulaires et en pastilles dans le silo peut etre surveille. La membrane doit toujours etre en contact avec le materiau surveille. A mesure que le materiau verse dans le silo s'accumule, la membrane se ferme ; la pression resultante repousse le diaphragme et le mecanisme actionne le contact. Lorsque le materiau diminue, le contact revient a sa position initiale.",
       specs:[["Materiau du corps","Nitrile, NBR, FPM, acier inoxydable"],["Raccordement","Bride ronde"],["Sortie","1 × micro-interrupteur NO/NC"],["Temperature maximale","200 °C"]],
       uses:"Controle plein/vide des materiaux solides en vrac dans les silos.",
       sectors:"Industries de la construction, du batiment, de l'agroalimentaire et des plastiques."},

      {code:"NT-WLD", img:"assets/products/NT-WLD.webp", name:"Detecteur de fuite d'eau", glyph:"flood",
       desc:"Il peut etre utilise en toute confiance dans toutes les zones ou une inondation est possible et d'importance critique. Au moment de l'inondation, il avertit au moyen d'une sirene integree, permettant une action rapide. Grace a sa sortie relais, il commande des equipements tels que des pompes ou des electrovannes pour stopper la fuite. Une fonction de temporisation de detection de 3 secondes est prevue pour eviter les fausses alarmes.",
       specs:[["Indicateur","3 LED d'alarme"],["Sirene","1 sirene integree"],["Nombre de capteurs","Jusqu'a 3 capteurs raccordables"],["Alimentation","24 VDC"],["Sortie","Relais, 2 A / 125 °C, NO, NC"]],
       uses:"Salles de serveurs, sous-sols, stations de pompage et zones d'equipements critiques.",
       sectors:"Automatisation du batiment, centres de donnees, installations industrielles."},

      {code:"NT-MLI", img:"assets/products/NT-MLI.webp", name:"Indicateurs de niveau magnetiques", glyph:"bypass",
       vimgs:[["Type antideflagrant","assets/products/NT-MLI-EX.webp"],["Type chaudiere","assets/products/NT-MLI-BR.webp"]],
       desc:"L'indicateur de niveau magnetique de type MLG est utilise pour la mesure continue, la surveillance et l'affichage du niveau de liquide. Un changement de niveau dans la cuve modifie egalement le niveau du liquide a l'interieur de la chambre de derivation de la meme quantite, selon le principe des vases communicants. Le flotteur magnetique a l'interieur de l'indicateur se deplace donc et agit sur les volets magnetiques situes sur la surface exterieure de la chambre de derivation, les faisant pivoter de 180° autour de leur propre axe. Lorsque le niveau du liquide monte, les volets blancs deviennent rouges, et lorsqu'il descend, les volets rouges redeviennent blancs.",
       variants:[
         ["VSG Standard","Indicateur de niveau magnétique bypass à usage général. Surveillance et affichage continus du niveau de liquide."],
         ["VSG Ex-Proof","Modèle certifié antidéflagrant pour atmosphères explosives. Utilisation en raffineries, pétrochimie et zones dangereuses."],
         ["VSG Type chaudière","Modèle type chaudière conçu pour les applications haute pression et haute température. Chaudières à vapeur et centrales électriques."]
       ],
       specs:[["Pression nominale","10 bar (opt. 40 bar)"],["Tenue en temperature","150 °C (opt. 350 °C)"],["Types de raccordement","Filete G 1/2\", 3/4\", 1\" – a bride DN15, DN20, DN25"],["Chambre et flotteur","Acier inoxydable"],["Profil indicateur","Aluminium"],["Sortie","4–20 mA, 0–10 V, sortie contact"],["Ex-Proof","Optionnel"]],
       uses:"Reservoirs d'eau, reservoirs de condensat, degazeurs, reservoirs de carburant, chaudieres a vapeur, reservoirs souterrains, liquides agressifs et toxiques, gaz liquefies, tous les recipients sous pression et sans pression.",
       sectors:"Industrie navale, industrie chimique, raffineries, centrales electriques."},

      {code:"NT-CDS", img:"assets/products/NT-CDS.webp", name:"Detecteurs de niveau conductifs", glyph:"conductive",
       desc:"Les detecteurs de niveau conductifs sont utilises pour le controle du niveau de liquide dans les cuves et les chaudieres. Comme ils n'ont pas de pieces mobiles, ils peuvent etre utilises dans des environnements critiques et avec des liquides conducteurs contenant des particules solides, de faible densite et de haute viscosite.",
       specs:[["Materiau des electrodes","Acier inoxydable 304, opt. acier inoxydable 316"],["Materiau de raccordement et du boitier","Delrin"],["Sortie","1 × micro-interrupteur NO/NC"],["Temperature et pression maximales","60 °C … 6 bar"],["Nombre d'electrodes","Max. 3"]],
       uses:"Une solution economique et fiable pour les applications de surpresseurs, le controle du niveau d'eau sur les chaudieres a vapeur et divers reservoirs de liquides conducteurs.",
       sectors:"Centrales electriques, automatisation du batiment, industrie chimique."},

      {code:"NT-RCS", img:"assets/products/NT-RCS.webp", name:"Detecteur de niveau capacitif a cable", glyph:"rope",
       desc:"Concu pour detecter le niveau instantane (ponctuel) des solides en poudre et en granules dans une zone de stockage. Son principe de fonctionnement repose sur le fait que les materiaux en contact avec la surface de la sonde creent un changement de capacite, et ces instruments utilisent ce changement pour determiner le niveau au moyen de composants electroniques.",
       specs:[["Sortie (contact)","1 × relais NC-NO (220 VAC/5 A – 14 VDC/20 A)"],["Materiau du cable et du poids","304 SS, opt. 316 SS"],["Longueur","1 metre … 20 metres"],["Materiau du boitier","Delrin"],["Alimentation","24 VDC"]],
       uses:"Solides granulaires, chaux, sable, poussiere de charbon, ciment, clinker et cereales telles que le ble et le mais.",
       sectors:"Silos a cereales, cimenteries, usines de chaux et de platre, fonderies.",
       notes:["La longueur du cable peut etre specifiee selon le point d'application.","Le cable peut etre utilise isole ou non isole."]},

      {code:"NT-ELES", img:"assets/products/NT-ELES.webp", name:"Capteurs de niveau à flotteur", glyph:"floattx",
       desc:"Les capteurs de niveau à flotteur NT-ELES sont des instruments conçus pour déterminer le niveau de liquide en utilisant le principe de la poussée d'Archimède : un flotteur magnétique mobile se déplaçant le long d'un tube guide déclenche, par son champ magnétique, un contact reed placé à l'intérieur du tube guide, commutant ainsi le circuit. Selon l'utilisation prévue, ils sont produits en versions de niveau continu (en ligne) et de niveau ponctuel ; les capteurs de niveau continu sont appelés transmetteurs de niveau, tandis que les capteurs de niveau ponctuel sont appelés détecteurs de niveau.",
       variants:[
         ["Série NT-ELES11","Conçu pour déterminer le niveau instantané (en ligne) des fluides liquides. Il peut produire des sorties de signal analogique et des sorties de communication pour la transmission ou la surveillance ; avec différentes conceptions de raccordement mécanique et des options de longueur de 50 mm à 3000 mm, il offre un large champ d'utilisation. Modèles avec brise-vagues, à bride et avec boîtier PP disponibles."],
         ["Série NT-ELES7","Détecteurs de niveau conçus pour fournir une détection de niveau instantanée dans les liquides, comme l'état plein-vide ou à des points sélectionnables. Avec une large gamme de longueurs de 50 mm à 5000 mm, des options de montage par le haut ou latéral et des options de raccordement mécanique à bride, fileté et clamp, ils fournissent une mesure économique et fiable."],
         ["ELES 5 Détecteur à boîtier PP","Raccordement fileté R2\", max. 4 contacts et 2 flotteurs. Contrôle de niveau économique avec boîtier PP."],
         ["ELES 5 Détecteur à bride","Raccordement à bride, max. 4 contacts et 2 flotteurs. Adapté aux cuves sous pression."],
         ["ELES 5 Détecteur raccord M10","Raccordement fileté externe M10, max. 3 contacts et 3 flotteurs. Applications compactes."],
         ["ELES 5 Détecteur à prise","Raccordement fileté G1\", max. 2 contacts et 2 flotteurs. Raccordement pratique par prise."],
         ["ELES 5 Montage latéral B10","Corps en aluminium moulé, bride et flotteur AISI 304/316, classe de pression PN10/16. Systèmes d'avertissement et de contrôle de remplissage/vidange de réservoir."]
       ],
       specs:[["Matériau du boîtier et du tube","Acier inoxydable 304, 316, 316L / Delrin et PVDF / laiton"],["Matériau du flotteur","Acier inoxydable 304, 316, 316L / PVDF, NBR, polyuréthane"],["Connexion électrique","Borne M12, DIN 43650, bornier, câble blindé"],["Type de raccordement","R 1/4\" | 1/2\" | 1\" | 1¼\" | 1½\" | R 2\" filetage mâle ou bride DN15–DN100"],["Plage de mesure","50 mm – 5000 mm"],["Type de flotteur","Sphérique ou cylindrique"],["Densité de flottabilité min.","0,6 g/cm³"],["Pression nominale","10 bar, opt. 30 bar"],["Tenue en température","−20…+120 °C, opt. 180 °C"],["Précision (transmetteurs)","5 mm – 10 mm – 15 mm"],["Sortie signal transmetteur","4–20 mA / 0–10 V / ohm"],["Sortie signal détecteur","Contact NO-NC / relais"],["Capteur de température optionnel","PT100 – PT1000"]],
       uses:"Eau et tous les fluides à base d'eau ; réservoirs d'eau, cuves d'eaux usées, réservoirs d'eau de yachts et navires, réservoirs d'huile hydraulique, cuves chimiques, récipients de boissons gazeuses et de liquides à faible viscosité.",
       sectors:"Stations de traitement, constructeurs de machines, secteur naval et de la construction de yachts, secteur chimique, secteur textile, hôtels et piscines, secteur pétrolier et des carburants, secteur alimentaire.",
       notes:["Une solution économique.","La fabrication spécifique à l'application est possible.","Facile à installer et à monter.","Non recommandé pour les liquides adhésifs et à haute densité."]},

      {code:"NT-MNS", img:"assets/products/NT-LSW-M.png", name:"Interrupteurs de niveau miniatures", glyph:"floattx",
       vimgs:[["Mini plastique","assets/products/NT-MLP.webp"],["Mini inox","assets/products/NT-LSW-M.png"]],
       desc:"Les interrupteurs de niveau miniatures sont conçus pour le contrôle de niveau de liquide dans les applications industrielles telles que les machines, les cuves et les chaudières grâce à leur format compact. Avec des options de corps en acier inoxydable et en plastique (PP, PVDF), ils offrent un large champ d'utilisation. Ils fonctionnent selon le principe du flotteur magnétique ; lorsque le niveau de liquide atteint le point défini, le contact reed est déclenché et un signal est généré.",
       variants:[
         ["VML-V Montage latéral inox","Corps en acier inoxydable AISI 304, raccordement R1/2\" et M10, courant de contact max. 1 A. Idéal pour le contrôle de niveau latéral sur les machines et les cuves."],
         ["VML-PS Montage supérieur inox","Corps en acier inoxydable AISI 304, raccordement M10, résistance en température −40…+125 °C. Surveillance de niveau en cuve par montage supérieur."],
         ["VF-V26-S Inox à prise","Corps AISI 304, raccordement fileté R1/2\", connexion électrique par prise, courant de contact 1 A."],
         ["VML-P Montage latéral plastique","Corps PP, courant de contact max. 0,5 A, câble silicone. Solution économique."],
         ["VML-T Montage latéral PVDF","Corps PVDF, raccordement fileté NPT 1/2\", max. 80 °C. Pour les environnements chimiques agressifs."],
         ["VML-PS Montage supérieur plastique","Corps PP, raccordement M8, max. 80 °C, courant de contact 1,2 A."]
       ],
       specs:[["Matériau du corps","Acier inoxydable AISI 304 / PP / PVDF"],["Raccordement","R1/2\", M8, M10, NPT 1/2\""],["Montage","Latéral ou supérieur"],["Tenue en température","−40…+125 °C (inox), max. 80 °C (plastique)"],["Type de contact","Contact reed NO / NC"],["Courant de contact max.","0,5 – 1,2 A"],["Câble","Silicone"],["Indice de protection","IP67"]],
       uses:"Contrôle d'eau de refroidissement de machines et CNC, réservoirs d'eau, cuves chimiques, réservoirs d'huile, petits réservoirs.",
       sectors:"Construction de machines, CNC et machines-outils, systèmes de refroidissement, industrie chimique, automobile, industrie des plastiques.",
       notes:["Son format compact facilite le montage dans les espaces restreints.","Ne nécessite aucune alimentation externe.","Non recommandé pour les liquides adhésifs et à haute densité."]}
     ]},

    /* ===================== CAPTEURS DE PRESSION ===================== */
    {id:"basinc", kicker:"04", title:"Capteurs de pression", sub:"Transmetteurs de pression, pressostats et manomètres", glyph:"pressure",
     products:[
      {code:"NT-BT", img:"assets/products/NT-BTT-S.webp", name:"Transmetteurs de pression série standard (OEM)", glyph:"pressure",
       desc:"La pression est la grandeur de la force que les liquides et les gaz exercent par unité de surface. Un équipement qui convertit la valeur de pression qu'il détecte en un signal électronique défini peut être décrit comme un transmetteur de pression.",
       variants:[["Série NT-BT","Raccordement G1/4\", plages de mesure de 0…2,5 bar à 0…600 bar."],["Série NT-FPT","Raccordement G1/4\" – G1/2\" ; 0…100 mbar à 0…600 bar, avec options vide (0…−1 bar)."]],
       specs:[["Taille de raccordement","G1/4\" – G1/2\""],["Plage de mesure","De 0…2,5 bar à 0…600 bar ; options 0…100 mbar"],["Précision","±0,5% FS / ±0,3% FS"],["Plage de température","−40…+125 °C"],["Signal de sortie","4…20 mA, 0…5 VDC, 1…6 VDC, 0…10 VDC, 0,5…4,5 VDC ratiométrique"]],
       uses:"Liquides non adhésifs et sans particules, gaz non agressifs.",
       sectors:"Stations d'épuration, industrie alimentaire, industrie textile, industrie lourde, industrie mécanique, industrie chimique, pétrochimie, industrie papetière, industrie pharmaceutique, centrales hydroélectriques."},

      {code:"NT-EPI / NT-NAT / NT-BCT", img:"assets/products/NT-EPI.webp", name:"Transmetteurs de pression à membrane affleurante", glyph:"diaphragm",
       desc:"Équipement qui mesure en détectant la force appliquée sur la membrane située au point de raccordement mécanique et en la convertissant en signal électrique. Adapté aux fluides adhésifs tels que les liquides contenant des déchets et des particules, les liquides visqueux et les gaz poussiéreux.",
       specs:[["Taille de raccordement","1/4\" – 1/2\", G1/2\" mâle membrane affleurante"],["Plage de mesure","De 0…1 bar à 0…600 bar"],["Précision","±0,4% FS / ±0,5% FS"],["Plage de température","−40…+85 °C / −40…+125 °C"],["Signal de sortie","4…20 mA, 0…5 VDC, 1…6 VDC, 0…10 VDC"]],
       uses:"Liquides contenant des déchets et des particules, liquides visqueux, gaz poussiéreux et liquides adhésifs.",
       sectors:"Stations d'épuration et de traitement, industrie alimentaire, industrie mécanique, industrie chimique et pétrochimique, industrie CVC."},

      {code:"NT-DMP / NT-BFT / NT-DPT", img:"assets/products/NT-DMP.webp", name:"Transmetteurs de pression différentielle", glyph:"diffpressure",
       desc:"Produits conçus pour déterminer la différence (Δp) entre deux valeurs de pression distinctes. Ils couvrent une large gamme, des modèles à basse pression différentielle avec raccordement par tuyau jusqu'à la mesure de pression différentielle haute pression.",
       specs:[["Taille de raccordement","1/4\", M20×1,5, G1/2\", raccord tuyau"],["Plage de mesure","−100 Pa … +7000 Pa ; 0 bar … 200 bar"],["Plage de pression différentielle","De 100 mbar à 25 bar ; ±60 mbar à ±100 bar"],["Précision","±0,5% FS ; ±1,5%, opt. ±0,25%"],["Plage de température","−40…+125 °C / −10…+50 °C"],["Signal de sortie","4…20 mA, 0…5 VDC, 1…5 VDC, 0–10 V, opt. Modbus"]],
       uses:"Systèmes pneumatiques, compresseurs d'air, systèmes de refroidissement et chauffage d'air, pompes à eau et réservoirs de liquide.",
       sectors:"Industrie médicale et chimique, systèmes d'essai, CVC, industrie mécanique."},

      {code:"NT-EXNT", img:"assets/products/NT-EXNT.webp", name:"Transmetteurs de pression antidéflagrants", glyph:"exproof",
       desc:"Instruments spécialement conçus pour la mesure de liquides et gaz inflammables et explosifs. Avec un boîtier homologué antidéflagrant, ils fournissent une mesure sûre dans les zones dangereuses.",
       specs:[["Taille de raccordement","1/4\""],["Plage de mesure","200 Pa … 10 MPa"],["Plage de pression différentielle","De ±60 mbar à ±100 bar"],["Précision","±0,075% FS (opt. ±0,05% FS)"],["Plage de température","−40…+125 °C (opt. 400 °C)"],["Signal de sortie","4…20 mA / HART / MBAS"],["Homologation antidéflagrante","Ex d IIC T6, Ex ia IIC T6"]],
       uses:"Gaz inflammables tels que les dérivés GNL et GPL, liquides inflammables et combustibles.",
       sectors:"Industrie navale, zones Ex 0/1/2 (gaz) et 20/21/22 (poussière), industrie minière, industrie pétrochimique, mines de charbon, silos à céréales, sucreries."},

      {code:"NT-DMPX", img:"assets/products/NT-DMPX.webp", name:"Transmetteurs de pression intelligents", glyph:"smart",
       desc:"Équipement qui fournit une mesure de pression avec une technologie de microprocesseur avancée et une compensation de température. Ils offrent une haute précision et une grande capacité.",
       specs:[["Taille de raccordement","1/4\""],["Plage de mesure","0…100 mbar à 0…1000 bar"],["Précision","±0,075% FS (opt. ±0,05% FS)"],["Plage de température","−40…+125 °C (opt. 400 °C)"],["Signal de sortie","4…20 mA / HART / MBAS"],["Homologation antidéflagrante","Ex d IIC T6, Ex ia IIC T6"]],
       uses:"Toutes les applications liquides, gazeuses et vapeur.",
       sectors:"Industrie mécanique, systèmes d'essai et d'étalonnage, industrie chimique, industrie lourde, industrie de la défense, industrie pétrochimique."},

      {code:"NT-EPD", img:"assets/products/NT-EPD.webp", name:"Transmetteurs et pressostats avec afficheur", glyph:"gauge",
       desc:"Se compose d'un écran de programmation et d'affichage ajouté de manière compacte sur le transmetteur de pression. Grâce à son utilisation facile et pratique, il permet la surveillance instantanée des données sur le terrain.",
       specs:[["Taille de raccordement","G1/4\" – G1/2\""],["Plage de mesure","De 0…0,2 bar à 0…600 bar"],["Précision","±0,5% FS"],["Plage de température","−25…+85 °C"],["Signal de sortie","4…20 mA, 0…10 VDC, commutable mA ou V"],["Commutation","2 × transistor PNP (opt. sortie contact)"]],
       uses:"Tous les liquides et gaz.",
       sectors:"Machines-outils, toutes les machines à commande hydraulique, équipements CVC (chauffage, climatisation, ventilation), unités frigorifiques, machines de traitement d'eau.",
       notes:["Option de mesure absolue ou relative.","Peut être programmé depuis un téléphone mobile via NFC.","Options de sortie courant et tension dans un seul appareil."]},

      {code:"NT-TG / NT-KP", img:"assets/products/NT-PSW.webp", name:"Pressostats", glyph:"pswitch",
       desc:"Équipement de mesure de pression produit pour la commutation, la sécurité et l'alarme à un ou plusieurs points de consigne basés sur les données de pression détectées.",
       specs:[["Taille de raccordement","G1/4\", G1/8\""],["Plage de mesure","−200 mbar…−800 mbar et 0,1…600 bar ; −0,2…7,5 / 2…14 bar"],["Précision","<5%"],["Plage de température","−30…+100 °C (opt. 250 °C) ; −40…+60 °C"],["Signal de sortie","NO / NC / inverseur (NO&NC)"]],
       uses:"Liquides sans particules, air, vapeur et gaz non agressifs.",
       sectors:"Composants de machines, hydraulique, applications industrielles."},

      {code:"NT-A300 / NT-S100 / NT-C600", img:"assets/products/NT-MNM.webp", name:"Manomètres", glyph:"manometer",
       desc:"Disponibles en variantes telles que type standard, type à membrane, type industriel et type à contact pour les lignes de gaz, de liquide et de vapeur, c'est encore le groupe de produits le plus utilisé aujourd'hui comme méthode la plus simple de surveillance de la pression. Des variantes de raccordement mécanique configurables au processus sont disponibles ; certains modèles sont fabriqués avec des contacts pour pouvoir commuter. Notre portefeuille de produits comprend des diamètres de cadran de 40 mm à 200 mm, fabriqués pour des plages de pression de −1 bar à 1000 bar, y compris les lignes de vide.",
       variants:[
         ["Série standard","G1/8\" (40 mm) – G1/4\" B (50, 63 mm) – G1/2\" B (100, 160 mm). −1…0 bar à 0…400 bar. Cl. 2,5 / Cl. 1,6."],
         ["Série inox","G1/4\" B (63 mm) – G1/2\" B (100, 160 mm). −1…0 à 0…1600 bar. Type sec max. +200 °C, rempli de glycérine max. +100 °C."],
         ["Membrane capsule","Cadran 63/100/160 mm. −25…0 mbar à 0…600 mbar. Cl. 1,6 (positif), Cl. 2,5 (vide)."],
         ["Membrane affleurante","Raccordement DN40, DN50. −1…0 bar à 0…40 bar. Type sec max. +150 °C."],
         ["Raccord hygiénique union","DN25/32/40/50 (DIN 11851), 1½\" et 2\" (SMS). −1…0 bar à 0…40 bar."],
         ["Membrane clamp","DN25/32/40/50 (DIN 32676), 1\", 1½\", 2\" (ISO 2852). −1…0 bar à 0…40 bar."]
       ],
       specs:[["Diamètres de cadran","40, 50, 63, 100, 160, 200 mm"],["Plage de mesure","−1 bar … 1600 bar"],["Précision","Cl. 1,0 / Cl. 1,6 / Cl. 2,5"],["Plage de température","+60 °C … +200 °C (selon type)"],["Corps","Acier inoxydable / laiton"]],
       uses:"Liquides, vapeur et gaz.",
       sectors:"Industrie navale, systèmes de transport d'eau propre, systèmes d'eaux usées, industrie chimique et pétrochimique, centrales électriques, industrie alimentaire et des boissons, machines laitières, industrie pharmaceutique, industrie mécanique."},

      {code:"NT-DPS-A", img:"assets/products/NT-DPS-A.webp", name:"Pressostat différentiel air", glyph:"diffpressure",
       desc:"Pressostat différentiel pour la détection de colmatage des filtres dans les systèmes CVC et les centrales de traitement d'air.",
       specs:[["Plage","20 – 300 Pa"],["Contact","SPDT"],["Protection","IP54"],["Raccordement","embout 6 mm"],["Température","−10…+85 °C"],["Point de consigne","Réglable"]],
       uses:"Détection de colmatage de filtres à air, surveillance de salles blanches.",
       sectors:"CVC, salles blanches, automatisation du bâtiment."},
      {code:"NT-DPS-L", img:"assets/products/NT-DPS-L.webp", name:"Pressostat différentiel liquide", glyph:"diffpressure",
       desc:"Pressostat différentiel compact pour la surveillance des filtres à liquide.",
       specs:[["Plage","0,2 – 4 bar"],["Contact","SPDT"],["Protection","IP65"],["Raccordement","G 1/4\""],["Température","−20…+85 °C"],["Pression max","40 bar"]],
       uses:"Surveillance de filtres à liquide, protection de circuits de refroidissement.",
       sectors:"Traitement de l'eau, chimie, énergie, industrie."}
     ]},

    /* ===================== CAPTEURS DE TEMPÉRATURE ===================== */
    {id:"sicaklik", kicker:"05", title:"Capteurs de température", sub:"Thermocouples, thermomètres à résistance et transmetteurs de température-humidité", glyph:"temp",
     products:[
      {code:"NT-TC", img:"assets/products/NT-TC.webp", name:"Thermocouples", glyph:"thermocouple",
       desc:"Les thermocouples sont des capteurs de temperature qui fonctionnent selon le principe de l'effet Seebeck. Ils sont utilises dans divers processus industriels de −200 °C a 2320 °C. Ils sont produits dans differentes configurations selon les conditions du processus.",
       variants:[
         ["VTC-J (Type J)","Thermocouple Fe-CuNi, plage −40…+750 °C. Utilise pour les mesures de temperature generales dans l'industrie, les fours et les etuves."],
         ["VTC-K (Type K)","Thermocouple NiCr-Ni, plage −40…+1200 °C. Le type de thermocouple le plus repandu, adapte aux temperatures elevees et aux environnements oxydants."],
         ["VTC-S (Type S)","Thermocouple PtRh-Pt, plage 0…+1600 °C. Haute precision, utilise dans les processus a haute temperature comme le ciment, la verrerie et la ceramique."],
         ["VTC-T (Type T)","Thermocouple Cu-CuNi, plage −200…+350 °C. Haute precision a basse temperature, adapte aux applications alimentaires et de laboratoire."]
       ],
       specs:[["Type","J – K – T – E – N – R – S – B"],["Diametre du fil","0,35 – 0,50 – 0,80 – 1 – 1,6 – 2 – 2,5 – 3 mm"],["Gaine de protection","SS316 – Inconel 600/800 – 1.4749 – 1.4841 (1.4845), ceramique KER 530/610/710 (C799), carbure de silicium, nitrure de silicium (Si₃N₄), PTFE, PVDF, PFA"],["Types de raccordement","R ou NPT 1/4\", 3/8\", 1/2\", 3/4\", 1\" ; bride DIN ou ASME"],["Nombre d'elements","Simple / double / multiple"],["Signal de sortie","4–20 mA – 0–10 V"],["Boitier / Tete","DIN 43729 aluminium, IP67 (opt. Ex-proof, bakelite)"]],
       uses:"Dans toutes les applications avec solides, liquides, gaz et vapeur.",
       sectors:"Industrie mecanique, cimenteries, industrie du verre et de la ceramique, industrie alimentaire, industrie pharmaceutique, industrie chimique et petrochimique, industrie lourde et defense, bancs d'essai, CVC, industrie agricole.",
       notes:["Le type correct doit etre selectionne en fonction de la temperature.","Fabrication sur mesure disponible sur demande."]},

      {code:"NT-RTD", img:"assets/products/NT-RTD.webp", name:"Thermometres a resistance (PT100 / PT1000)", glyph:"rtd",
       desc:"Les thermo-elements a resistance de platine sont des capteurs de temperature capables de mesurer la temperature entre −200 °C et +450 °C avec une grande precision. Ils peuvent etre designes comme PT100, PT1000 et similaires.",
       variants:[
         ["VPT-100K (PT100 a tete)","Gaine de protection SS316 – SS310, diametres 4–6 mm, construction element Classe A / Classe B, sortie signal 4–20 mA ou 0–10 V."],
         ["VPT-100B (PT100 Special)","Modeles avec tete de boitier PP et gaine PTFE pour environnements acides, modeles proteges Ex-proof pour atmospheres explosives. Options de fabrication de 3 a 22 mm."],
         ["VPT-1000K (PT1000 a tete)","Capteur de temperature PT1000 a tete, pour applications de machines et lecture facile au point de processus. Sortie selectionnable depuis l'ecran."],
         ["VPT-1000B (PT1000 Special)","Capteurs a pointe pour insertion, pour usines alimentaires et de transformation de viande. Poignees en acier inoxydable ou PTFE disponibles."]
       ],
       specs:[["Type","PT100, PT200, PT500, PT1000, PT2000"],["Gaine de protection","SS316 – SS310 – (PTFE-PVDF-PFA)"],["Diametres de gaine","Options de fabrication de 3 mm a 22 mm"],["Construction element","Noyau, Classe A, Classe B, feuille, verre, ceramique"],["Nombre d'elements","1×, 2×, 3×, 6×"],["Raccord mecanique","R 1/2\" (opt. specifique client)"],["Longueur d'immersion","50 mm … 500 mm"],["Alimentation","10 – 30 VDC"],["Signal de sortie","4–20 mA, 0–10 V, 2×PNP (modele avec ecran)"],["Precision","±0,5% FS"]],
       uses:"Dans toutes les applications avec solides, liquides, gaz et vapeur.",
       sectors:"Industrie mecanique, cimenteries, industrie du verre et de la ceramique, industrie alimentaire, industrie pharmaceutique, industrie chimique et petrochimique, industrie lourde et defense, bancs d'essai, CVC, industrie agricole.",
       notes:["Le type correct doit etre selectionne en fonction de la temperature.","Fabrication sur mesure disponible sur demande."]},

      {code:"NT-HT", img:"assets/products/NT-HT.webp", name:"Transmetteurs de temperature et d'humidite", glyph:"humidity",
       desc:"Les transmetteurs de temperature et d'humidite de la serie NT-HT sont des appareils de mesure precis qui mesurent avec un capteur capacitif. Grace au capteur reconcu et a la technologie integree, ils peuvent etre utilises dans presque toutes les conditions.",
       variants:[
         ["VTH Sonde plastique","Montage mural standard ou avec cable extensible. Le modele avec ecran permet une surveillance locale pratique ; des versions economiques sans ecran sont egalement disponibles. Sorties relais et analogiques, module de communication RS485 Modbus en option."],
         ["VTH Sonde inox","Transmetteur en ligne developpe pour les gaines d'air ou les applications d'immersion. Options avec et sans ecran, sondes en acier inoxydable, laiton et plastique, et filtres pour environnements sous pression."],
         ["Transmetteur en ligne","Produits de serie speciale avec sortie 4–20 mA pour la temperature et l'humidite ; pratiques et economiques."],
         ["Surveillance de donnees GSM","Developpe pour la surveillance des donnees de temperature et d'humidite par GSM. Lecture de 2 parametres analogiques externes, 2 logiques et 16 Modbus. Intervalles de journalisation et de telechargement configurables."]
       ],
       specs:[["Ecran","2 × 14 mm affichage 4 chiffres (distance de lecture 15 m)"],["Signal de sortie","4–20 mA / 0–10 V pour temperature et humidite, ou 2×3 A relais + RS485 Modbus"],["Indice de protection","IP65 (opt. IP68)"],["Precision","±0,3 °C, 3% rH"],["Plage de temperature","−40…+80 °C"],["Plage d'humidite","0–100 %rH"],["Resolution","0,1 °C / 0,1 %rH"],["Alimentation","24 VDC (12…36 VDC / 100–240 VAC selon modele)"],["Dimensions","165 × 65 × 56 mm"],["Type de raccordement","Montage mural, montage filete, montage en ligne"],["Materiau de la sonde","Acier inoxydable, laiton avec filtre, inox filete, corps de capteur PVC"],["Materiau du filtre","Acier inoxydable ou PTFE"],["Longueur du cable","5 m (opt. jusqu'a 30 m)"]],
       uses:"Chambres froides, elevage de volailles, systemes de surveillance de temperature et d'humidite de bureaux, salles isolees.",
       sectors:"Stockage alimentaire, agriculture et elevage, automatisation du batiment, pharmaceutique et logistique."}
     ]},

    /* ===================== CONTRÔLE DE PROCESSUS ===================== */
    {id:"kontrol", kicker:"06", title:"Indicateurs et régulateurs de processus", sub:"Surveillance, contrôle et transmission de signaux", glyph:"panel",
     products:[
      {code:"NT-TCS / NT-FBT", img:"assets/products/NT-TCS.webp", name:"Indicateurs de debit et totalisateurs", glyph:"panel",
       desc:"Instruments de controle concus pour surveiller, reguler et transmettre les mesures effectuees dans les processus industriels. Ils sont developpes pour surveiller le debit instantane et le volume totalise, et pour les controler et les transmettre via differentes options de sortie.",
       specs:[["Code produit","NT-TCS / NT-FBT / NT-TCS37"],["Dimensions","72×72 mm / 96×96 mm / 36×72 mm"],["Affichage","2×6 chiffres (8 mm) / 6 chiffres (8 mm)"],["Commutation","2×8 A relais / 1×8 A relais"],["Sortie analogique","4–20 mA / 0–20 mA"],["Communication","RS485 Modbus ASCII/RTU"],["Tension d'alimentation","12 VDC – 24 VDC – 220 VAC"],["Frequence de comptage","10 kHz"]],
       uses:"Surveillance et controle en tableau du debit et des mesures de volume totalise.",
       sectors:"Stations d'epuration, industrie agroalimentaire, industrie chimique, fabrication de machines."},

      {code:"NT-DI / NT-UPI", img:"assets/products/NT-DI.webp", name:"Indicateurs a entree universelle", glyph:"panel",
       desc:"Indicateurs de controle de type simple produits pour observer et controler les valeurs de processus sur tous les types d'entrees universelles (compatibles avec les capteurs de temperature et les capteurs a sorties analogiques). Des sorties peuvent etre obtenues en definissant differentes options d'alarme.",
       specs:[["Code produit","NT-DI 377 / NT-UPI"],["Dimensions","35×77 mm / 48×48, 72×72, 48×96, 96×48 mm"],["Affichage","4 chiffres (10 mm) / 2×4 chiffres (superieur 14 mm, inferieur 10 mm)"],["Entree","Thermocouple, PT100, PTC, NTC, 4–20 mA, 0–10 V, ohm"],["Commutation","4×8 A relais / 2×8 A relais (opt. 3×8 A)"],["Sortie analogique","4–20 mA, 0–20 mA, 0–10 V"],["Communication","RS485 Modbus ASCII/RTU"],["Precision","0.5% / 0.3%"],["Tension d'alimentation","12 VDC – 24 VDC – 220 VAC"]],
       uses:"Surveillance en tableau des capteurs de temperature et analogiques.",
       sectors:"Fabrication de machines, agroalimentaire, chimie, centrales electriques."},

      {code:"NT-EPD 11", img:"assets/products/NT-EPD11.webp", name:"Indicateurs universels compacts", glyph:"panel",
       desc:"L'indicateur numerique NT-EPD 11 est utilise pour prendre le signal 4–20 mA des transmetteurs et le convertir et l'afficher dans l'unite d'ingenierie requise. Il est concu pour un montage et un demontage faciles sur les transmetteurs 2 fils avec un raccordement a fiche DIN 43650. Le produit offre une grande precision, une stabilite et une facilite d'utilisation. C'est une solution pratique pour ajouter un affichage de terrain et des seuils d'alarme aux transmetteurs de pression ou autres.",
       specs:[["Applications","Affichage de la valeur du courant 4–20 mA ou du pourcentage, 2 sorties d'alarme/commutation independantes"],["Signal d'entree","4–20 mA (2 fils)"],["Source d'alimentation","Alimente par boucle 2 fils 4–20 mA, chute de tension max. 8 VDC"],["Signal de sortie","Sortie signal 2 fils 4–20 mA"],["Commande de terrain","3 boutons, tous les parametres modifiables localement"],["Affichage","Double rangee 5 bits/8 bits, LCD retro-eclaire 7/16 segments, −19999~99999"],["Precision et CAN","0.1% FS ±1 bit / 24 bit"],["Nombre de commutateurs","2 voies PNP / NO"],["Fonction de commutation","Seuil haut, seuil bas, fonction fenetre, hysteresis"],["Unites d'ingenierie","kPa, MPa, Pa, bar, mbar, psi, mH₂O, Torr, atm, kg, N, °C, °F, K, %RH, PPM, pH, m, mm, m/s, Ω, mV, V"]],
       uses:"Ajout d'un affichage de terrain et d'alarmes aux transmetteurs.",
       sectors:"Toutes les applications de processus industriels."},

      {code:"NT-UPC / NT-TC / NT-PRFC", img:"assets/products/NT-UPC.webp", name:"Regulateurs", glyph:"controller",
       desc:"Utilises pour observer et controler les valeurs de processus dans les applications mesurees avec des capteurs de temperature et des capteurs a sorties analogiques. Les modes de fonctionnement Tout-ou-Rien, proportionnel (P), proportionnel + integral (PI) et proportionnel + integral + derive (PID) sont disponibles pour la sortie de regulation. Ils peuvent fonctionner en integration avec d'autres systemes via le protocole de communication Modbus.",
       variants:[
         ["Regulateurs a entree universelle","NT-UPC 4 / 7 / 49. 48×48, 72×72, 48×96 mm. Entree de processus universelle 4…20 mA, 0…20 mA, 0…60 mV, 0…10 V, thermocouple (J,K,R,S,T), PT100 (avec compensation de fils). 2 sorties relais 8 A@250 VAC, sortie analogique, RS485 Modbus."],
         ["Regulateurs de temperature","NT-TCS 377-X / NT-TC 4 / NT-TC 38. Tous types de thermocouples, entree PT100, PTC et NTC. Fonctionnement ON/OFF ou proportionnel dans le temps (P), fonction chauffage/refroidissement, sortie d'alarme et temporisation configurables."],
         ["Regulateurs de rampe/palier","NT-PRFC7. 72×72 mm. Regulateur de rampe/profil concu pour mesurer et controler la temperature ou toute valeur de processus dans l'industrie. Profils jusqu'a 20 etapes."]
       ],
       specs:[["Precision","0.3% – 0.5%"],["Sortie de regulation","Sortie relais (8 A@250 VAC)"],["Sortie analogique","4…20 mA, 0…20 mA"],["Communication","RS485 Modbus RTU/ASCII"],["Resolution","1 °C / 0.1 °C (PT100, pour la plage 0…100 °C)"],["Tension d'alimentation","220 VAC, 24 VDC, 12 VDC (a preciser lors de la commande)"]],
       uses:"Regulation de temperature et de valeurs de processus, automatisation chauffage-refroidissement.",
       sectors:"Fours et installations de traitement thermique, agroalimentaire, plastiques, chimie, fabrication de machines."},

      {code:"NT-UT / NT-LT / NT-TT", img:"assets/products/NT-UT.webp", name:"Convertisseurs de signal", glyph:"converter",
       desc:"Dispositifs concus pour convertir et transporter les sorties de signaux analogiques et numeriques vers des systemes ayant differentes options d'entree. Un montage facile et une isolation contre les influences externes sont importants pour une application correcte de ce type de convertisseur.",
       variants:[
         ["Convertisseurs de signal universels sur rail DIN","NT-UT 17 / 18. Convertit tous les thermocouples et elements thermo-resistifs, les entrees de courant 0/4–20 mA et de tension 0–50 mV en sorties de tension 0/4–20 mA et 0/2–10 V. Options mono et bi-canal ; isolation galvanique 3 voies 1500 V."],
         ["Convertisseurs de signal en tete de sonde","Serie NT-LT / NT-TT. Concus pour obtenir des sorties 4–20 / 20–4 mA a partir de thermocouples de type B, E, J, K, L, N, R, S, T, U, d'elements thermo-resistifs PT100 et de capteurs de niveau produisant une sortie resistive. Adaptes au montage dans un boitier ou une douille."]
       ],
       specs:[["Tension d'alimentation","8 – 36 VDC"],["Entree analogique universelle","Thermocouple B,E,J,K,L,N,R,S,T,U; PT100; courant 0/4–20 mA; tension 0–50 mV"],["Resolution d'entree","16 bit"],["Periode d'echantillonnage","100 – 400 ms"],["Sortie analogique","0/4–20 mA, 0/2–10 V, 20–4 mA"],["Resistance de charge","Courant RL ≤ 600 Ω, tension RL ≥ 1 MΩ"],["Precision","PT100 ±0.2% MV ±0.3 °C; T/C, mV ±0.2% MV ±1 °C"],["Derive thermique","±100 ppm/°C"],["Isolation galvanique","1500 V"],["Memoire","100 ans, 100 000 cycles d'ecriture"],["Temps de reponse","0.2 … 120 s"],["Temperature de fonctionnement","−40…+85 °C"]],
       uses:"Conversion de niveau et de type de signal, transmission de signal longue distance, isolation galvanique.",
       sectors:"Toutes les applications d'automatisation industrielle."},

      {code:"NT-MLC", img:"assets/products/NT-MLC.webp", name:"Encodeur linéaire magnétique", glyph:"angle",
       desc:"Encodeur linéaire magnétique compact avec profilé fermé sur roulements pour la mesure de position jusqu'à 20 m.",
       specs:[["Longueur","Jusqu'à 20 m"],["Résolution","5 µm"],["Sortie","SSI, 4–20 mA, 0–10 V"],["Protection","IP67"],["Température","−20…+85 °C"]],
       uses:"Positionnement d'axes de machines CNC, mesure de course de presse.",
       sectors:"Machines-outils, presses, emballage, caoutchouc et plastique."},
      {code:"NT-MLS-E", img:"assets/products/NT-MLS-E.webp", name:"Capteur de lecture magnétique", glyph:"angle",
       desc:"Capteur de lecture magnétique sans contact sur bande magnétique pour la mesure de position jusqu'à 100 m.",
       specs:[["Longueur","Jusqu'à 100 m"],["Résolution","5 µm"],["Sortie","SSI, 4–20 mA, 0–10 V"],["Protection","IP67"],["Bande","Bande magnétique auto-adhésive"]],
       uses:"Positionnement longue course, mesure de déplacement de ponts roulants.",
       sectors:"Logistique, ponts roulants, AGV, sidérurgie."},
      {code:"NT-PLC", img:"assets/products/NT-PLC.webp", name:"Règle linéaire potentiométrique", glyph:"angle",
       desc:"Capteur de position linéaire potentiométrique analogique pour machines-outils et vérins hydrauliques.",
       specs:[["Course","25 – 3000 mm"],["Linéarité","±0,01%"],["Sortie","0–10 V, 4–20 mA"],["Protection","IP65"],["Température","−30…+100 °C"]],
       uses:"Position de vérin hydraulique, course de presse, moule d'injection.",
       sectors:"Hydraulique, presses, injection plastique, emballage."},
      {code:"NT-MSC", img:"assets/products/NT-MSC.webp", name:"Règle linéaire magnétostrictive", glyph:"angle",
       desc:"Capteur de position linéaire magnétostrictif sans contact pour vérins hydrauliques et environnements haute pression.",
       specs:[["Course","50 – 5000 mm"],["Résolution","1 µm"],["Pression","Jusqu'à 350 bar"],["Sortie","SSI, 4–20 mA"],["Protection","IP67 / IP68"]],
       uses:"Position de vérin hydraulique, commande de presse, servo-hydraulique.",
       sectors:"Hydraulique, sidérurgie, presses, énergie."},
      {code:"NT-OLC", img:"assets/products/NT-OLC.webp", name:"Encodeur linéaire optique", glyph:"angle",
       desc:"Encodeur linéaire optique sur roulements pour machines CNC de haute précision.",
       specs:[["Longueur","Jusqu'à 3000 mm"],["Résolution","1 µm"],["Sortie","RS422 / TTL"],["Protection","IP53"],["Précision","±3 µm/m"]],
       uses:"Centres d'usinage CNC, rectifieuses, machines à mesurer tridimensionnelles.",
       sectors:"Machines-outils, fabrication de précision, semi-conducteurs, métrologie."},
      {code:"NT-INS", img:"assets/products/NT-INS.webp", name:"Inclinomètre / Capteur d'inclinaison", glyph:"angle",
       desc:"Inclinomètre MEMS pour la surveillance d'inclinaison, le nivellement de plateformes et les engins mobiles. Fournit des données d'angle fiables pour le suivi solaire et la surveillance structurelle.",
       variants:[
         ["Série INS 130","Simple ou double axe, plage ±10° à ±90°, résolution 0,01°, IP67, sorties 4–20 mA et CANopen. Précision ±0,15°."],
         ["Série INS 120","Version compacte avec sortie tension pour intégration OEM. Plage ±15° à ±60°, précision ±0,15°."],
         ["Série INS 110","Version compacte OEM. Précision ±0,15°, faible consommation."],
         ["Série INC 210","Inclinomètre haute précision avec sortie numérique pour surveillance structurelle. Précision ±0,10°."],
         ["Série INC 110","Configuration simple ou double axe, construction compacte. Surveillance structurelle et nivellement de plateformes."]
       ],
       specs:[["Plage","±10° … ±90°"],["Résolution","0,01°"],["Précision","±0,1° (standard), ±0,005° (précision)"],["Sortie","4–20 mA, 0–10 V, CANopen, Modbus"],["Protection","IP67"],["Température de fonctionnement","−40…+85 °C"]],
       uses:"Surveillance d'inclinaison d'engins mobiles, positionnement de suiveurs solaires, nivellement de plateformes, surveillance structurelle.",
       sectors:"Construction, énergies renouvelables, maritime, mines, automatisation industrielle."},

      {code:"NT-AGS", img:"assets/products/NT-RCS-3100-2100.png", name:"Capteurs d'angle", glyph:"angle",
       desc:"Capteurs d'angle rotatifs fonctionnant selon le principe magnétique sans contact ; conçus pour mesurer avec précision l'angle de rotation dans les applications industrielles. Ils fournissent des données de position et d'angle fiables et durables sans usure mécanique. Avec des modèles à accouplement, sans arbre et à arbre intégré, ils s'adaptent à différents besoins de montage.",
       variants:[
         ["Série RCS 3100","Principe magnétique sans contact, raccordement par accouplement. Utilisé dans le positionnement industriel et les systèmes servo."],
         ["Série RFC 4800","Sans contact, conception sans arbre. Ne nécessite pas d'accouplement ; offre un montage compact."],
         ["Série RSC 2800","Arbre intégré de 6 mm, mesure sans contact. Sa construction compacte permet une connexion directe à l'entraînement."],
         ["Série RCS 2100","Principe de mesure magnétique entièrement sans contact. Détection d'angle haute précision."],
         ["Série SAS-T","Corps de 40 mm, mesure absolue, capteur d'angle rotatif avec sortie CANopen. Idéal pour les systèmes d'automatisation et servo."]
       ],
       specs:[["Principe de mesure","Magnétique sans contact"],["Plage de mesure","0–360°"],["Résolution","12–14 bits"],["Précision","±0,1° … ±0,5°"],["Sortie","4–20 mA, 0–10 V, SSI, CANopen"],["Indice de protection","IP65 / IP67"],["Température de fonctionnement","−40…+85 °C"],["Alimentation","10–30 VDC"]],
       uses:"Retour de position de vanne, mesure d'angle de bras robotique, orientation d'antenne, contrôle de lacet d'éolienne.",
       sectors:"Automatisation, robotique, énergies renouvelables, maritime, emballage, engins de chantier."},

      {code:"NT-TMR", img:"assets/products/NT-TMR.webp", name:"Minuterie / Chronomètre", glyph:"panel",
       desc:"Minuterie numérique et chronomètre pour montage en tableau avec sorties relais et modes de temporisation multiples.",
       specs:[["Tableau","48×48 / 72×72 mm"],["Affichage","2 × 6 chiffres"],["Plage","0,01 s – 9999 h"],["Sortie","2× relais"],["Alimentation","100–240 VAC / 12–24 VDC"],["Précision","±0,05%"]],
       uses:"Temporisation de lots, séquençage de machines, contrôle de délai.",
       sectors:"Emballage, agroalimentaire, traitement de l'eau, industrie générale."},
      {code:"NT-STC", img:"assets/products/NT-STC.webp", name:"Régulateur programmable", glyph:"controller",
       desc:"Régulateur programmable (profil) pour programmes de rampe/palier de température et courbes de cuisson.",
       specs:[["Tableau","72×72 mm"],["Entrée","TC, PT100, 4–20 mA"],["Étapes","Jusqu'à 7"],["Sortie","2× relais + 4–20 mA"],["Précision","±0,5%"],["Alimentation","100–240 VAC"]],
       uses:"Courbes de cuisson de fours, traitement thermique, profilage de température.",
       sectors:"Céramique, verre, métallurgie, laboratoires."}
     ]},

    /* ===================== CONTRÔLE MÉCANIQUE ===================== */
    {id:"mekanik", kicker:"07", title:"Controle mecanique", sub:"Actionneurs, electrovannes et vannes", glyph:"valve",
     products:[
      {code:"NT-VT / NT-ATG / NT-KE100", img:"assets/products/NT-ACT.webp", name:"Actionneurs", glyph:"actuator",
       desc:"Elements d'entrainement permettant a un systeme ou un mecanisme d'effectuer son action d'ouverture et de fermeture. Differents types sont disponibles selon le domaine d'utilisation et l'application. Ils commandent generalement ce controle par des moyens hydrauliques, pneumatiques ou electriques.",
       variants:[
         ["Actionneur pneumatique (NT-VT)","Corps et piston en aluminium, arbre en acier allie, interface electrovanne Namur, pression d'alimentation 5–8 bar, raccordement vanne ISO 5211, angle de rotation 90° ±5°."],
         ["Actionneur pneumatique (NT-ATG)","Corps et piston en aluminium, interface boite de commutation Namur, raccordement vanne ISO 5211, angle de rotation 180°."],
         ["Actionneur electrique (NT-KE100)","Actionneur electrique quart de tour ; corps en aluminium (revetu poudre polyester), raccordement ISO 5211, indice de protection IP67, alimentation 220 VAC, ambiance −20…+70 °C, couple 20–500 Nm, 2 fins de course en standard, moteur classe F."]
       ],
       specs:[["Corps et piston","Aluminium"],["Température de fonctionnement","−20…+80 °C"],["Matériau de l'arbre","Acier allié"],["Pression d'alimentation","5 – 8 bar (pneumatique)"],["Raccordement vanne","ISO 5211"],["Indice de protection","IP67 (électrique)"],["Valeurs de couple","20 – 500 Nm"]],
       uses:"Entraînement de vannes et de vannes papillon, contrôle automatique de ligne.",
       sectors:"Stations de traitement, chimie et pétrochimie, industrie alimentaire, centrales électriques."},

      {code:"NT-1901 / NT-7901 / NT-PV250", img:"assets/products/NT-VLV-MAIN.webp", name:"Électrovannes", glyph:"solenoid",
       desc:"Éléments de circuit mécanique commandés électriquement ou pneumatiquement qui ouvrent, ferment ou redirigent le passage d'un fluide en ouvrant et fermant un ou plusieurs orifices.",
       variants:[
         ["Électrovanne corps laiton (NT-1901)","Corps laiton, position NF-NO, tailles 1/8\"…2\" (opt. raccord tuyau), membrane NBR/EPDM/HNBR/Viton/PTFE/Rubin/POM, bobine 12-24 VAC/DC … 220 VAC. Modes pilotée, action directe et à membrane."],
         ["Électrovanne corps inox (NT-7901)","Corps acier inoxydable, position NF-NO, tailles 1/8\"…1\", membrane Viton/NBR/PTFE, bobine 12-24 VAC/DC … 220 VAC."],
         ["Vanne à impulsion (NT-PV250)","Corps aluminium, position NF, 3/4\" à 4\" fileté, à bride ou union, membrane silicone/caoutchouc, bobine 12 VAC/DC … 220 VAC."]
       ],
       specs:[["Matériau du corps","Laiton / acier inoxydable / aluminium"],["Position","NF – NO"],["Taille","1/8\" … 4\""],["Membrane / Joint","NBR, EPDM, HNBR, Viton, PTFE, silicone, caoutchouc"],["Bobine","12, 24 VAC/DC … 220 VAC"]],
       uses:"Service tout-ou-rien sur les lignes de liquide et de gaz, nettoyage de filtres (vanne à impulsion) et contrôle de dosage.",
       sectors:"Eau et traitement, cimenteries et installations de dépoussiérage, industrie alimentaire, fabrication de machines."},

      {code:"NT-VLV", img:"assets/products/NT-VANA.webp", name:"Vannes", glyph:"valve",
       desc:"Produits de contrôle mécanique entraînés par un réducteur, un levier manuel ou un actionneur ; ils peuvent fonctionner en tout-ou-rien ou proportionnellement et servent à réguler, arrêter ou rediriger l'écoulement de fluides de différentes spécifications. Des types à bille, papillon, globe, guillotine, à boisseau et autres sont disponibles, et différents types peuvent être sélectionnés selon les propriétés du processus telles que la pression, la température, le type de fluide, la densité et la viscosité.",
       variants:[
         ["Vanne papillon wafer","Corps en fonte ductile, raccordement wafer, pression nominale optionnelle, compatible avec actionneurs pneumatiques et électriques."],
         ["Vanne à bille","Corps acier inoxydable ou laiton, raccordement fileté/à bride/wafer, PN10 (opt. PN63), max. 180 °C, compatible avec actionneurs pneumatiques et électriques."],
         ["Vanne 3 voies","Corps acier inoxydable ou laiton, raccordement fileté, port L ou T, PN63, max. 180 °C."],
         ["Vanne à bille PVC","Corps PVC, passage intégral, PN10, max. 60 °C, compatible avec actionneurs pneumatiques et électriques."],
         ["Vanne à pincement","Corps aluminium moulé, raccordement fileté et à bride, conforme à la norme Namur."],
         ["Vanne à commande temporisée","Corps acier inoxydable, laiton ou PVC, PN10 / 90 °C, 2 voies ou 3 voies, tout-ou-rien ou proportionnel, modèles à commande temporisée."]
       ],
       specs:[["Matériau du corps","Fonte ductile, acier inoxydable, laiton, PVC, aluminium moulé"],["Raccordement","Wafer, fileté, à bride"],["Pression nominale","PN10 … PN63"],["Température max.","60 °C … 180 °C"],["Compatibilité actionneur","Pneumatique et électrique"]],
       uses:"Service tout-ou-rien en ligne, déviation de débit et contrôle de débit proportionnel.",
       sectors:"Eau et eaux usées, chimie et pétrochimie, industrie alimentaire, centrales électriques, mines."},

      {code:"NT-SOL-L", img:"assets/products/NT-SOL-L.webp", name:"Électrovanne grand diamètre", glyph:"solenoid",
       desc:"Électrovanne grand diamètre (DN50–DN200) pour l'eau, l'irrigation et la lutte contre l'incendie.",
       specs:[["Taille","DN50 – DN200"],["Corps","Laiton / fonte"],["Position","NF"],["Bobine","24–220 V"],["Pression","10 bar"]],
       uses:"Distribution d'eau, irrigation, lutte contre l'incendie.",
       sectors:"Agriculture, sécurité incendie, services des eaux."},
      {code:"NT-BDV", img:"assets/products/NT-BDV.webp", name:"Vanne à impulsion (membrane)", glyph:"solenoid",
       desc:"Vanne à impulsion pour dépoussiérage par filtres à manches. Corps aluminium, membrane silicone.",
       specs:[["Taille","1\" – 4\""],["Corps","Aluminium"],["Membrane","Silicone / caoutchouc"],["Pression","0,2 – 0,6 MPa"],["Bobine","DC 24V"]],
       uses:"Nettoyage des filtres à manches dans les systèmes de dépoussiérage.",
       sectors:"Cimenteries, mines, traitement de poudres, sidérurgie."}
     ]},

    /* ===================== INSTRUMENTS PORTABLES + AUTOMATISATION ===================== */
    {id:"eltipi", kicker:"08", title:"Instruments portables et enregistrement de données", sub:"Mesure de terrain, analyse et enregistrement de données", glyph:"handheld",
     products:[
      {code:"NT-IRT", img:"assets/products/NT-IRT.webp", name:"Thermomètre infrarouge", glyph:"laser",
       desc:"Un thermomètre qui mesure sans contact (infrarouge). Des modèles sont disponibles pour des lectures dans la plage de température −60…+2000 °C ; ce sont des produits portables, faciles à utiliser et ergonomiques.",
       specs:[["Plage de mesure","−60 … +2000 °C (selon modèle)"],["Type de mesure","Infrarouge sans contact"],["Utilisation","Portable, ergonomique"]],
       uses:"Température de surface de machines, inspection de tableaux électriques, contrôles de sécurité alimentaire.",
       sectors:"Maintenance et réparation, alimentaire, énergie, industrie lourde."},

      {code:"NT-ANM", img:"assets/products/NT-ANM.webp", name:"Anémomètre", glyph:"anemo",
       desc:"Appareils faciles à utiliser qui mesurent la vitesse du vent/air dans les espaces ouverts ou dans les tunnels où un flux d'air se développe. De nombreux modèles mesurent également la température et l'humidité.",
       specs:[["Mesure","Vitesse de l'air/vent, température, humidité"],["Utilisation","Portable"]],
       uses:"Mesure de gaines de ventilation, ventilation de tunnels et de mines, mise en service CVC.",
       sectors:"CVC, mines, construction, énergie."},

      {code:"NT-SLM", img:"assets/products/NT-SLM.png", name:"Sonomètre (décibelmètre)", glyph:"sound",
       desc:"Appareils portables compacts développés pour mesurer et déterminer l'intensité sonore. Différents modèles sont disponibles combinant d'autres paramètres de mesure tels que la température, l'humidité et la lumière.",
       specs:[["Mesure","Intensité sonore (dB), opt. température-humidité-lumière"],["Utilisation","Portable compact"]],
       uses:"Mesures de santé et sécurité au travail, surveillance du bruit environnemental.",
       sectors:"Sécurité au travail, municipalités et organismes publics, installations industrielles."},

      {code:"NT-GLD", img:"assets/products/NT-GLD.png", name:"Détecteur de fuite de gaz", glyph:"gasdetect",
       desc:"Appareils capables de détecter les fuites de gaz tels que le monoxyde de carbone, l'ammoniac, le méthane et le propane, dont l'échappement pourrait mettre en danger la santé humaine. Ils peuvent déclencher une alarme sonore et visuelle si le niveau dépasse le seuil spécifié.",
       specs:[["Gaz détectés","CO, ammoniac, méthane, propane et similaires"],["Alarme","Sonore et visuelle"],["Utilisation","Portable"]],
       uses:"Inspection des fuites de lignes de gaz, sécurité en espaces confinés, contrôles de maintenance.",
       sectors:"Gaz naturel, pétrochimie, installations frigorifiques, gestion des installations."},

      {code:"NT-AQM", img:"assets/products/NT-AQM.webp", name:"pH-mètres, conductivimètres, TDS et chloremètres", glyph:"analytic",
       desc:"Appareils développés pour les mesures analytiques telles que le pH, la conductivité, la salinité, l'oxygène dissous et le chlore. Des modèles portables, de laboratoire et en ligne (continu) sont disponibles. Certains modèles offrent des options de sortie signal analogique ou numérique à des fins de contrôle et de surveillance.",
       specs:[["Paramètres de mesure","pH, EC, TDS, salinité, oxygène dissous, chlore"],["Types de modèles","Portable, laboratoire, en ligne"],["Sortie","Opt. signal analogique ou numérique"]],
       uses:"Contrôle de processus de traitement d'eau, surveillance de piscines et d'eau potable, analyse de laboratoire.",
       sectors:"Traitement de l'eau et des eaux usées, industrie alimentaire, chimie, municipalités et organismes publics."},

      {code:"NT-TAO", img:"assets/products/NT-TAO.png", name:"Arpenteur GPS", glyph:"gps",
       desc:"Un produit pratique et de haute précision qui mesure la surface en mètres carrés à l'aide de signaux GPS. Avec son menu et son interface conviviale, il permet d'effectuer une mesure d'un simple bouton.",
       specs:[["Mesure","Surface basée sur GPS (m², décare)"],["Interface","Pilotée par menu, mesure à un bouton"]],
       uses:"Calcul de superficie de champs et de terrains, planification agricole.",
       sectors:"Agriculture, gestion foncière, applications cadastrales."},

      {code:"NT-CO2", img:"assets/products/NT-CO2.webp", name:"Transmetteur CO₂ / temp. / humidité", glyph:"humidity",
       desc:"Transmetteur CO₂ mural NDIR avec capteurs de température et d'humidité intégrés pour la qualité de l'air.",
       specs:[["CO₂","0 – 5000 ppm"],["Précision","±30 ppm"],["Capteur","NDIR"],["Sortie","4–20 mA, RS485"],["Protection","IP65"]],
       uses:"Contrôle CO₂ en serre, surveillance de chambres froides, qualité de l'air.",
       sectors:"Agriculture, stockage alimentaire, automatisation du bâtiment."},
      {code:"NT-GDC", img:"assets/products/NT-GDC.webp", name:"Détecteur de gaz catalytique", glyph:"gasdetect",
       desc:"Détecteur de gaz catalytique fixe pour la surveillance LIE des gaz combustibles. Ex d IIC T6.",
       specs:[["Plage","0 – 100% LIE"],["Capteur","Catalytique"],["Agrément","Ex d IIC T6"],["Sortie","4–20 mA"],["Protection","IP66"]],
       uses:"Surveillance des fuites de gaz combustibles dans les raffineries et usines chimiques.",
       sectors:"Pétrole et gaz, pétrochimie, énergie, mines."},
      {code:"NT-GDI", img:"assets/products/NT-GDI.webp", name:"Détecteur de gaz infrarouge", glyph:"gasdetect",
       desc:"Détecteur de gaz fixe infrarouge (NDIR) pour gaz combustibles et CO₂, immunisé contre l'empoisonnement.",
       specs:[["Plage","0 – 100% LIE / Vol"],["Capteur","NDIR"],["Agrément","Ex d IIC T6"],["Sortie","4–20 mA"],["Protection","IP66"]],
       uses:"Surveillance de gaz combustibles et CO₂ en espaces confinés et zones dangereuses.",
       sectors:"Pétrole et gaz, pétrochimie, tunnels, eaux usées, mines."},
      {code:"NT-GDE", img:"assets/products/NT-GDE.webp", name:"Détecteur de gaz électrochimique", glyph:"gasdetect",
       desc:"Détecteur de gaz électrochimique fixe pour gaz toxiques (CO, H₂S, O₂, NH₃). Ex d IIC T6.",
       specs:[["Gaz","CO, H₂S, O₂, NH₃, Cl₂, SO₂"],["Capteur","Cellule électrochimique"],["Agrément","Ex d IIC T6"],["Sortie","4–20 mA"],["Protection","IP66"]],
       uses:"Surveillance de gaz toxiques en espaces confinés et stations de traitement des eaux.",
       sectors:"Traitement de l'eau, chimie, mines, pétrole et gaz."},

      {code:"NT-DLG", img:"assets/products/NT-DLG.webp", name:"Enregistreurs de données et dataloggers", glyph:"logger",
       desc:"Appareils qui stockent en mémoire les données détectées par tous les types de thermocouples, éléments thermo-résistifs et groupes de capteurs produisant une sortie sur tous les types d'entrées analogiques universelles ; les modèles avec affichage permettent de visualiser les données à l'écran sous forme graphique ou tabulaire. De nombreux modèles offrent des sorties de communication et un logiciel de surveillance pour examiner les données sur ordinateur.",
       variants:[["Enregistreurs de données","2, 4, 6 … 40 voies, écran LCD 320×200, entrées universelles isolées, communication RS232, mémoire clé USB 2 Go et carte SD 1 Go, sortie 4–20 mA et alimentation capteur 24 VDC. L'intervalle d'enregistrement est réglable entre 1 s et 30 min."],["Datalogger","Conçu pour enregistrer les données de température instantanées de produits tels que les médicaments et les aliments ; les variations de température sont généralement surveillées pendant le transport. −35…+70 °C, précision ±0,5 °C, IP67, conforme EN 12830, certifié HACCP international, capacité 16 000 enregistrements, autonomie 90 jours."]],
       specs:[["Nombre de voies","2, 4, 6 … 40"],["Écran","LCD 320×200 (variable selon le nombre de voies)"],["Entrée","Entrées universelles isolées"],["Communication","RS232"],["Mémoire","Clé USB 2 Go, carte SD 1 Go"],["Temps de réponse et précision","1 s / ±0,2"],["Sortie","4–20 mA, alimentation capteur 24 VDC"],["Intervalle d'enregistrement","Réglable entre 1 s et 30 min"],["Alimentation","220 VAC, opt. 24 VDC"]],
       uses:"Enregistrement de données de processus, surveillance de la chaîne du froid, documentation qualité.",
       sectors:"Industrie alimentaire et pharmaceutique, logistique, installations de traitement thermique, laboratoires."}
     ]},

    /* ===================== MESURE ANALYTIQUE ===================== */
    {id:"analitik", kicker:"09", title:"Mesure analytique", sub:"Électrodes pH, ORP, conductivité et analyseurs en ligne", glyph:"analytic",
     products:[
      {code:"NT-PHA", img:"assets/products/NT-PHA.png", name:"Électrodes pH", glyph:"analytic",
       desc:"Électrodes à corps en verre et en polymère utilisées pour mesurer le degré d'acidité ou de basicité des liquides sur l'échelle de 0 à 14 pH. Elles fonctionnent selon le principe de la différence de potentiel à travers la membrane en verre. Différents matériaux de corps sont disponibles selon les exigences de température, de pression et de résistance chimique.",
       variants:[
         ["GPE100 Électrode pH économique en verre","Température de fonctionnement jusqu'à 80 °C. Solution économique pour la mesure de pH à usage général. Traitement de l'eau, piscines et applications industrielles de base."],
         ["PH5806 PRO Électrode pH haute température","Électrode professionnelle à corps en verre résistante jusqu'à 130 °C. Pour les procédés industriels exigeants et les applications haute température."],
         ["PH8012P Électrode pH corps PVC","Fonctionnement jusqu'à 80 °C. Corps PVC robuste et économique. Applications standard d'eau et d'eaux usées."],
         ["PH8012F Électrode pH corps Téflon","Corps en Téflon (PTFE) résistant aux environnements chimiques agressifs. Idéale pour les cuves d'acide-base et les procédés chimiques."]
       ],
       specs:[["Plage de mesure","0 – 14 pH"],["Précision","±0,02 pH"],["Tenue en température","80 °C (standard), 130 °C (PRO)"],["Référence","Ag/AgCl"],["Matériau du corps","Verre, PVC, Téflon (PTFE)"],["Connexion","Connecteur BNC"],["Longueur de câble","1 m (standard), longueurs spéciales"]],
       uses:"Traitement de l'eau, contrôle de l'eau de piscine, surveillance de procédés chimiques, production alimentaire et de boissons, analyse de laboratoire.",
       sectors:"Traitement de l'eau et des eaux usées, industrie chimique, agroalimentaire et boissons, industrie pharmaceutique, industrie papetière, piscines."},

      {code:"NT-ORP", img:"assets/products/NT-ORP.png", name:"Électrode ORP", glyph:"analytic",
       desc:"Électrode mesurant le potentiel d'oxydoréduction (ORP/Redox) d'un liquide en millivolts. Utilisée pour la surveillance des processus de désinfection, le contrôle du dosage de chlore et l'évaluation de la qualité de l'eau.",
       specs:[["Plage de mesure","−2000 … +2000 mV"],["Précision","±1 mV"],["Référence","Ag/AgCl"],["Matériau du corps","Verre / PVC"],["Connexion","Connecteur BNC"],["Température de fonctionnement","0…+80 °C"]],
       uses:"Contrôle de chloration et de désinfection, surveillance des eaux usées, entretien de piscines, contrôle de qualité de l'eau potable.",
       sectors:"Traitement de l'eau et des eaux usées, exploitants de piscines, industrie alimentaire, industrie chimique."},

      {code:"NT-ECA", img:"assets/products/NT-ECA.png", name:"Électrode de conductivité", glyph:"analytic",
       desc:"Électrode déterminant la valeur de conductivité (µS/cm ou mS/cm) en mesurant la concentration en ions dissous dans un liquide. C'est un paramètre critique dans la production d'eau pure, les procédés de traitement de l'eau et le contrôle de processus industriels.",
       specs:[["Constante de cellule","1,0"],["Plage de mesure","0 – 20 mS / 0 – 20 000 µS"],["Matériau du corps","SS316L / alliage de titane"],["Pression de service","0,3 MPa"],["Température de fonctionnement","0…+80 °C"],["Connexion","BNC / câble"]],
       uses:"Surveillance d'eau pure et ultrapure, contrôle de procédé de traitement de l'eau, contrôle de qualité de l'eau de rinçage industriel.",
       sectors:"Traitement de l'eau, industrie pharmaceutique, production de semi-conducteurs, centrales électriques, industrie alimentaire."},

      {code:"NT-ANZ", img:"assets/products/NT-ANZ.png", name:"Analyseurs en ligne", glyph:"controller",
       desc:"Analyseurs multiparamètres conçus pour la surveillance de processus en continu (en ligne). Ils mesurent et contrôlent en temps réel les paramètres de qualité de l'eau tels que le pH, l'ORP, la température, la conductivité, le TDS et la salinité. Avec un boîtier ABS résistant au feu, un écran couleur et des sorties relais, ils assurent un contrôle de processus entièrement automatique.",
       variants:[
         ["2091PRO Analyseur pH / ORP / Température en ligne","Mesure de pH −2…+16, ORP −2000…+2000 mV, température −30…+130 °C. Précision ±0,05 pH. 3 sorties relais, sortie analogique 4–20 mA, RS485 Modbus. Boîtier ABS mural."],
         ["2090PRO Analyseur Conductivité / TDS / Salinité / Température en ligne","Conductivité 0 – 2 000 000 µS/cm, mesure TDS et salinité, température −40…+200 °C. Précision 1%. 3 sorties relais, sortie analogique 4–20 mA, RS485 Modbus."]
       ],
       specs:[["Mesure (2091PRO)","pH : −2…+16, ORP : −2000…+2000 mV, Température : −30…+130 °C"],["Mesure (2090PRO)","Conductivité : 0–2 000 000 µS/cm, TDS, salinité, température : −40…+200 °C"],["Précision","±0,05 pH / 1% (conductivité) / ±0,2 °C"],["Sortie","4–20 mA analogique, 3× relais (5 A@250 VAC)"],["Communication","RS485 Modbus"],["Indice de protection","IP65"],["Boîtier","ABS résistant au feu (V0)"],["Alimentation","220 VAC / 24 VDC"],["Affichage","LCD couleur"]],
       uses:"Contrôle de procédé de station de traitement de l'eau, surveillance de la qualité de l'eau potable, automatisation de piscine, surveillance de processus industriels.",
       sectors:"Traitement de l'eau et des eaux usées, centrales électriques, agroalimentaire et boissons, chimie, industrie pharmaceutique, exploitants de piscines."}
     ]}
  ],

  closing:{
    title:"Automatisation et conception",
    body:["Net Flow est la marque qui porte les 12 années d'expérience de fabrication de VFA Elektronik sur les marchés d'exportation. En plus de la fourniture d'instruments de mesure, elle conçoit et met en service des solutions d'automatisation complètes selon les besoins de votre installation. De l'instrumentation de terrain à la fabrication de tableaux, et du logiciel PLC et SCADA à la mise en service et à la formation, nous gérons l'ensemble du processus depuis une source unique.",
      "Tout au long du projet, nous travaillons avec toute notre force et notre capacité vers une mesure précise, des données fiables et un contrôle durable. Notre équipe d'ingénieurs est à votre service pour la modernisation de votre installation existante ou la conception d'instrumentation de votre nouvel investissement."],
    items:[["Instrumentation de terrain","Sélection et fourniture basées sur le projet de mesures de débit, niveau, pression, température et analytiques."],["Fabrication de tableaux","Conception, fabrication et installation sur site de tableaux de commande et de contrôle."],["PLC et SCADA","Logiciel d'automatisation de processus, systèmes de surveillance et de reporting des données."],["Mise en service","Installation sur site, étalonnage, essais et formation des utilisateurs."]]
  }
};
