/* Blog Posts — Net Flow
   Each language has UNIQUE content (not translations) targeting specific markets.
   EN → Global / East Africa / Gulf
   FR → West & North Africa (francophone)
   AR → Arab / Gulf / Middle East
   RU → Central Asia / Caucasus
   TR → Turkey domestic
*/
window.BLOG_POSTS={
en:[
{slug:"select-electromagnetic-flow-meter-water-treatment",
title:"How to Select the Right Electromagnetic Flow Meter for Water Treatment Plants",
excerpt:"DN selection, liner compatibility, electrode materials, and SCADA integration — a complete guide for water utility engineers planning flow meter procurement.",
category:"Application Guide",
date:"2026-09-14",
image:"assets/products/NT-VMF.png",
content:`<h2>Why Electromagnetic Flow Meters Dominate Water Treatment</h2>
<p>In municipal water treatment, measurement accuracy directly affects chemical dosing, energy costs, and regulatory compliance. Electromagnetic flow meters — often called mag meters — have become the default technology because they offer <strong>no moving parts</strong>, <strong>zero pressure loss</strong>, and reliable readings even on water containing suspended solids or air bubbles.</p>
<p>At Net Flow, every NT-VMF electromagnetic flow meter is calibrated on our <strong>TÜRKAK-accredited ISO/IEC 17025 rig</strong> with ±0.27% uncertainty before it leaves the factory. The certificate is traceable and recognised in 100+ countries through EA & ILAC mutual recognition.</p>

<h2>Step 1: Determine the Right Pipe Size (DN)</h2>
<p>Electromagnetic flow meters work across an enormous range — from <strong>DN3</strong> (3 mm bore, used for chemical dosing) up to <strong>DN3000</strong> (3-metre pipes in major water transmission mains). The key is matching the meter bore to your <strong>flow velocity sweet spot</strong>: ideally between 1 m/s and 5 m/s.</p>
<ul>
<li><strong>Raw water intake:</strong> DN200–DN1200 typical, velocities 1.5–3 m/s</li>
<li><strong>Filter feed lines:</strong> DN150–DN600, higher velocity acceptable</li>
<li><strong>Chlorine dosing:</strong> DN3–DN25, very low flow, miniature meters recommended</li>
<li><strong>Distribution mains:</strong> DN80–DN500, DMA metering for non-revenue water control</li>
</ul>

<h2>Step 2: Choose the Right Liner</h2>
<p>The liner is the insulating layer between the pipe wall and the liquid. For water treatment:</p>
<ul>
<li><strong>Hard rubber (ebonite):</strong> Best for raw water and wastewater — abrasion-resistant, cost-effective, DN50–DN3000</li>
<li><strong>PTFE:</strong> For treated/potable water lines and chemical dosing — chemical resistance, FDA-suitable, DN3–DN300</li>
<li><strong>PFA:</strong> Premium chemical resistance for aggressive media (ozone, chlorine dioxide), DN6–DN200</li>
<li><strong>Polyurethane:</strong> For abrasive slurries (sludge lines), excellent wear life</li>
</ul>

<h2>Step 3: Select Electrode Material</h2>
<p>Electrodes sit flush with the liner and pick up the induced voltage. Standard options:</p>
<ul>
<li><strong>316L stainless steel:</strong> Default for clean water — excellent corrosion resistance, most economical</li>
<li><strong>Hastelloy C-276:</strong> For chlorinated water, seawater, or aggressive chemicals</li>
<li><strong>Titanium:</strong> For seawater desalination, strong oxidizing media</li>
<li><strong>Tantalum:</strong> For concentrated acids (HCl, H₂SO₄)</li>
</ul>

<h2>Step 4: Output Protocol & SCADA Integration</h2>
<p>Our NT-VMF meters support multiple output options:</p>
<ul>
<li><strong>4–20 mA + HART:</strong> Industry standard, compatible with virtually every PLC and SCADA system</li>
<li><strong>RS485 Modbus RTU:</strong> Digital communication for multi-meter networks — ideal for DMA monitoring</li>
<li><strong>Pulse output:</strong> For totaliser counting and batch control</li>
</ul>

<h2>Real-World Example: District Metered Area (DMA) Monitoring</h2>
<p>A water utility monitoring 24 DMAs across a city network needs meters that deliver consistent accuracy over years of continuous operation. The NT-VMF's <strong>empty-pipe detection</strong>, <strong>low-flow cut-off</strong>, and <strong>bi-directional measurement</strong> features ensure that non-revenue water loss figures are trustworthy — not inflated by measurement artifacts.</p>
<p>Every meter is backed by a TÜRKAK-traceable calibration certificate, so when the regulator audits your flow data, the documentation is already in order.</p>

<h2>Summary</h2>
<p>Selecting the right electromagnetic flow meter is not complicated — but the consequences of choosing wrong (inaccurate dosing, failed audits, excessive maintenance) are expensive. Start with the pipe size, match the liner and electrode to your media, and choose an output that fits your control system. If you send us your application details, we can configure and quote within one business day.</p>`
},
{slug:"reducing-non-revenue-water-loss-africa-middle-east",
title:"How African & Middle Eastern Utilities Cut 40% Water Loss with Accurate Flow Metering",
excerpt:"Non-revenue water exceeds 40% across Sub-Saharan Africa and parts of the Middle East. District metering with electromagnetic flow meters is the proven solution to identify and fix losses.",
category:"Industry Insight",
date:"2026-09-12",
image:"assets/products/NT-VMF-W.png",
content:`<h2>The Scale of the Problem</h2>
<p>Non-revenue water (NRW) — water that is produced and lost before reaching the customer — is one of the biggest challenges facing water utilities worldwide. In many networks across <strong>Sub-Saharan Africa, the Middle East, and Central Asia</strong>, NRW rates exceed <strong>40%</strong>. That means nearly half of all treated water never generates revenue.</p>
<p>The causes are well-known: physical leaks, illegal connections, meter inaccuracy, and unbilled authorized consumption. But before you can fix losses, you need to <strong>measure them accurately</strong>.</p>

<h2>Why District Metered Areas (DMAs) Work</h2>
<p>The internationally accepted approach to NRW reduction is to divide the network into <strong>District Metered Areas</strong> — isolated zones where all inflow and outflow is measured. By comparing the volume entering a DMA with the volume billed to customers in that zone, utilities can calculate actual losses for each district.</p>
<p>The key instrument at every DMA boundary is an <strong>electromagnetic flow meter</strong>. Unlike mechanical meters, mag meters have no moving parts to degrade over time, maintain their accuracy even with sediment-laden water, and provide <strong>bi-directional measurement</strong> to capture reverse flows.</p>

<h2>Meter Accuracy Matters More Than You Think</h2>
<p>Consider a DMA with 5,000 m³/day inflow. A meter with ±2% accuracy has a potential error band of ±100 m³/day. Over a year, that's ±36,500 m³ of <strong>measurement uncertainty</strong> — enough to mask or exaggerate real leaks.</p>
<p>The NT-VMF electromagnetic flow meter delivers <strong>±0.2% accuracy</strong> at full scale, calibrated to <strong>±0.27% uncertainty</strong> on our ISO/IEC 17025 rig. That same 5,000 m³/day measurement now has an error band of just ±10 m³/day — making your NRW calculations trustworthy.</p>

<h2>Installation Best Practices for DMA Meters</h2>
<ul>
<li><strong>Straight pipe runs:</strong> 5×DN upstream, 3×DN downstream for optimal accuracy</li>
<li><strong>Full-bore installation:</strong> Never reduce pipe diameter at the meter — use the correct DN size</li>
<li><strong>Grounding rings:</strong> Essential for plastic pipe installations to ensure electrical contact with the liquid</li>
<li><strong>Empty-pipe detection:</strong> Enable this feature to avoid false readings when the pipe drains during maintenance</li>
<li><strong>Low-flow cut-off:</strong> Set appropriately to eliminate noise at zero flow — critical for night-flow analysis</li>
</ul>

<h2>The Business Case</h2>
<p>If a utility reduces NRW from 40% to 25% in a network producing 100,000 m³/day, it recovers <strong>15,000 m³/day</strong> of previously lost water. At a conservative tariff, that's significant recovered revenue — often paying for the entire DMA metering programme within 12–18 months.</p>
<p>Accurate flow metering is not a cost — it's an investment with measurable returns.</p>`
},
{slug:"magnetic-bypass-level-indicators-storage-tanks",
title:"Magnetic Bypass Level Indicators: Replacing Glass Gauges in Oil, Gas & Chemical Storage",
excerpt:"From atmospheric tanks to high-pressure boiler drums, magnetic bypass level indicators eliminate the risks of glass gauges while providing safe, reliable continuous level reading.",
category:"Technical Guide",
date:"2026-09-10",
image:"assets/products/NT-MLI.png",
content:`<h2>What Is a Magnetic Bypass Level Indicator?</h2>
<p>A magnetic bypass level indicator (also called a magnetic level gauge or MLG) is a device mounted externally on a tank or vessel. A float inside a bypass chamber rises and falls with the liquid level, and its built-in magnet flips coloured flags or rollers on the external indicator — providing a clear, <strong>continuous visual level reading</strong> without any electrical power.</p>
<p>Unlike sight glass gauges, magnetic bypass indicators have <strong>no fragile glass tubes</strong>, no risk of leakage, and can operate at pressures and temperatures far beyond what glass can handle.</p>

<h2>Net Flow Product Range</h2>
<p>We manufacture three types of magnetic bypass level indicators:</p>
<ul>
<li><strong>NT-MBY (Standard):</strong> For atmospheric and low-pressure tanks — water storage, chemical tanks, process vessels. Operating range up to PN16 / 150°C.</li>
<li><strong>NT-MBYEX (Ex-proof):</strong> For hazardous areas — petrochemical storage, solvent tanks, fuel depots. ATEX/IECEx certified, up to PN40 / 200°C.</li>
<li><strong>NT-MBYB (Boiler-type):</strong> For steam drums and high-pressure vessels — PN100 / 350°C, with high-visibility bi-colour indication (red = steam, green = water).</li>
</ul>

<h2>How to Specify a Magnetic Bypass Level Indicator</h2>
<p>To configure the right unit, we need:</p>
<ul>
<li><strong>Centre-to-centre distance (C/C):</strong> The distance between the upper and lower process connections — this determines the measurement range</li>
<li><strong>Process connections:</strong> Flange standard (DIN, ANSI, JIS), size (typically DN20–DN50), and rating</li>
<li><strong>Operating pressure and temperature:</strong> Determines material grade and float design</li>
<li><strong>Liquid density:</strong> The float must be designed for the specific gravity of your media — lighter liquids need longer floats</li>
<li><strong>Mounting orientation:</strong> Top-bottom, side-side, or top-side connections</li>
</ul>

<h2>Optional Add-Ons</h2>
<ul>
<li><strong>4–20 mA transmitter:</strong> Reed-switch or magnetostrictive type, mounted alongside the indicator for remote level monitoring via SCADA</li>
<li><strong>Level switches:</strong> Magnetic reed switches at configurable set points for high/low alarms</li>
<li><strong>Steam jacket or heat tracing:</strong> For viscous media or cold environments to prevent freezing</li>
</ul>

<h2>Why Replace Sight Glasses?</h2>
<p>Glass level gauges have been used for over a century, but they have real disadvantages: glass can break under thermal shock, gaskets leak, the liquid column can become discoloured, and they require regular maintenance shutdowns for cleaning. Magnetic bypass indicators eliminate all of these issues while providing a clearer, safer level reading from a greater distance.</p>
<p>Every Net Flow magnetic bypass level indicator is pressure-tested, documented, and shipped with full material certificates. For hazardous applications, ATEX/IECEx certification is included.</p>`
}
],
fr:[
{slug:"choisir-debitmetre-reseaux-eau-afrique-ouest",
title:"Quel débitmètre pour les réseaux d'eau au Sénégal, Cameroun et Côte d'Ivoire ?",
excerpt:"Températures extrêmes, eaux chargées en sédiments, coupures électriques — les réseaux d'eau ouest-africains exigent des débitmètres robustes. Guide de sélection complet.",
category:"Guide Afrique de l'Ouest",
date:"2026-09-14",
image:"assets/products/NT-VMF-BT.png",
content:`<h2>Les défis spécifiques des réseaux d'eau ouest-africains</h2>
<p>Les réseaux de distribution d'eau au <strong>Sénégal, en Côte d'Ivoire, au Cameroun, en Guinée et au Burkina Faso</strong> partagent des défis communs : des eaux de surface chargées en matières en suspension, des températures ambiantes pouvant dépasser 45°C, et des réseaux souvent anciens avec des taux de pertes d'eau non comptabilisée (ENC) supérieurs à 40%.</p>
<p>Le choix du débitmètre est donc crucial. Un appareil inadapté se dégrade rapidement, perd en précision, et fausse les bilans hydrauliques.</p>

<h2>Pourquoi le débitmètre électromagnétique est le meilleur choix</h2>
<p>Le débitmètre électromagnétique (à induction) est la technologie la plus adaptée aux réseaux d'eau africains, pour plusieurs raisons :</p>
<ul>
<li><strong>Aucune pièce mobile :</strong> pas d'usure, pas de blocage par les sédiments</li>
<li><strong>Aucune perte de charge :</strong> le tube de mesure est complètement lisse, sans obstruction</li>
<li><strong>Insensible aux matières en suspension :</strong> fonctionne parfaitement avec de l'eau brute non traitée</li>
<li><strong>Durée de vie &gt; 15 ans :</strong> sans maintenance mécanique</li>
</ul>

<h2>Critères de sélection pour l'Afrique de l'Ouest</h2>
<h3>Revêtement intérieur (liner)</h3>
<p>Pour les eaux brutes de captage avec sédiments et sable : le <strong>caoutchouc dur (ébonite)</strong> offre la meilleure résistance à l'abrasion pour les diamètres DN50 à DN3000. Pour l'eau traitée et les lignes de chloration : le <strong>PTFE</strong> résiste aux produits chimiques et convient aux applications sanitaires.</p>

<h3>Protection IP</h3>
<p>Avec les pluies tropicales et les risques d'inondation des chambres de comptage, l'indice de protection est essentiel. Nos débitmètres NT-VMF sont disponibles en <strong>IP68</strong> (submersible) — idéal pour les installations en chambre enterrée courantes en Afrique de l'Ouest.</p>

<h3>Alimentation</h3>
<p>Dans les zones où l'alimentation électrique est instable, nos versions <strong>sur batterie</strong> (NT-VMF-B) fonctionnent jusqu'à 5 ans sans alimentation externe, avec enregistrement des données et communication GSM/GPRS en option.</p>

<h2>Étalonnage et certification</h2>
<p>Chaque débitmètre Net Flow est étalonné dans notre laboratoire <strong>accrédité TÜRKAK ISO/IEC 17025</strong> avec une incertitude de ±0,27%. Le certificat d'étalonnage est traçable et reconnu dans tous les pays d'Afrique de l'Ouest grâce aux accords de reconnaissance mutuelle EA & ILAC.</p>
<p>Cela signifie que vous n'avez pas besoin de faire ré-étalonner l'instrument à l'arrivée — le certificat est directement accepté par les autorités de régulation locales.</p>

<h2>Dimensionnement recommandé</h2>
<ul>
<li><strong>Captage en rivière :</strong> DN300–DN1200, vitesse 1,5–3 m/s</li>
<li><strong>Réseau de distribution :</strong> DN80–DN400, comptage de zone (DMA)</li>
<li><strong>Dosage du chlore :</strong> DN3–DN25, débitmètres miniatures</li>
<li><strong>Station de pompage :</strong> DN150–DN600, sortie 4–20 mA vers automate</li>
</ul>

<p>Envoyez-nous les détails de votre application (fluide, diamètre, plage de débit) et nous vous enverrons un devis configuré sous un jour ouvré.</p>`
},
{slug:"mesure-debit-mines-bauxite-cuivre-phosphate-afrique",
title:"Mines de bauxite, cuivre et phosphate en Afrique : quel débitmètre résiste aux slurries ?",
excerpt:"Du slurry de bauxite en Guinée aux boues de phosphate au Sénégal, la mesure de débit dans le secteur minier africain exige des instruments ultra-robustes.",
category:"Industrie Minière Afrique",
date:"2026-09-11",
image:"assets/products/NT-VMF-P.png",
content:`<h2>Les contraintes de mesure en milieu minier</h2>
<p>L'industrie minière en <strong>Guinée (bauxite), au Sénégal (phosphates), au Cameroun (ciment) et en RD Congo (cuivre/cobalt)</strong> utilise des liquides extrêmement abrasifs : slurries chargés en particules solides, boues de forage, eaux acides de drainage minier, et pulpes de flottation.</p>
<p>Un débitmètre classique ne survit pas longtemps dans ces conditions. Le revêtement s'use, les électrodes se corrodent, et la précision chute en quelques mois.</p>

<h2>Technologie haute fréquence : la solution Net Flow</h2>
<p>Nos débitmètres électromagnétiques pour boues utilisent une <strong>excitation haute fréquence à 25/30 Hz</strong> (contre 6,25 Hz pour les modèles standard). Cette fréquence élevée offre :</p>
<ul>
<li><strong>Réponse rapide :</strong> temps de réponse &lt; 0,5 seconde, adapté aux variations brutales de débit</li>
<li><strong>Insensibilité au bruit :</strong> les slurries génèrent un bruit électrochimique important — la haute fréquence le filtre efficacement</li>
<li><strong>Stabilité du zéro :</strong> le signal est moins affecté par l'encrassement des électrodes</li>
</ul>

<h2>Choix du revêtement</h2>
<ul>
<li><strong>Polyuréthane :</strong> le meilleur choix pour les slurries abrasifs — résistance à l'usure 5× supérieure au caoutchouc, recommandé pour les pulpes de minerai</li>
<li><strong>Caoutchouc dur (ébonite) :</strong> bonne résistance pour les boues modérément abrasives, coût inférieur</li>
<li><strong>PTFE :</strong> uniquement pour les eaux acides de drainage minier (AMD) sans particules abrasives</li>
</ul>

<h2>Choix des électrodes</h2>
<ul>
<li><strong>Hastelloy C-276 :</strong> standard pour la plupart des applications minières — résiste aux chlorures et aux acides faibles</li>
<li><strong>Titane :</strong> pour les eaux très chlorurées ou les solutions de cyanure (mines d'or)</li>
<li><strong>Carbure de tungstène :</strong> électrodes ultra-résistantes à l'abrasion pour les slurries les plus agressifs</li>
</ul>

<h2>Applications types dans le secteur minier africain</h2>
<ul>
<li><strong>Transfert de pulpe :</strong> DN100–DN400, slurry 20–60% de solides, polyuréthane + Hastelloy</li>
<li><strong>Eau de process :</strong> DN50–DN300, ébonite + 316L, application standard</li>
<li><strong>Dosage de réactifs :</strong> DN6–DN25, PTFE + Hastelloy, haute précision</li>
<li><strong>Drainage minier acide :</strong> DN80–DN200, PTFE + titane, résistance chimique maximale</li>
</ul>

<p>Tous nos débitmètres sont étalonnés TÜRKAK avec certificat traçable, reconnu internationalement. Contactez-nous avec vos paramètres d'application pour recevoir un devis configuré.</p>`
},
{slug:"indicateurs-niveau-magnetiques-raffineries-algerie-maroc-tunisie",
title:"Indicateurs de niveau magnétiques pour les raffineries en Algérie, Maroc et Tunisie",
excerpt:"Remplacer les hublots en verre dangereux par des indicateurs magnétiques certifiés ATEX — la solution sécuritaire pour l'industrie pétrolière nord-africaine.",
category:"Pétrole & Gaz Afrique du Nord",
date:"2026-09-08",
image:"assets/products/NT-MLI-EX.png",
content:`<h2>Pourquoi remplacer les indicateurs à verre ?</h2>
<p>Dans les installations pétrolières et gazières d'<strong>Algérie (Sonatrach, raffineries de Skikda et Arzew), du Maroc et de Tunisie</strong>, les indicateurs de niveau à tube de verre sont encore largement utilisés sur les réservoirs de stockage, les séparateurs et les ballons de vapeur.</p>
<p>Ces instruments présentent des risques bien connus :</p>
<ul>
<li>Rupture du tube de verre sous choc thermique ou vibration</li>
<li>Fuites aux joints, risque d'incendie avec les hydrocarbures</li>
<li>Opacification progressive du verre par les dépôts</li>
<li>Maintenance fréquente nécessitant des arrêts de production</li>
</ul>

<h2>L'alternative : l'indicateur de niveau magnétique à bypass</h2>
<p>L'indicateur magnétique à bypass utilise un flotteur équipé d'un aimant permanent à l'intérieur d'une chambre externe. L'aimant fait tourner des volets bicolores (rouge/blanc) sur l'indicateur externe, donnant une lecture de niveau <strong>continue, claire et visible à distance</strong> — sans aucun contact entre le fluide de process et l'extérieur.</p>

<h2>Gamme Net Flow pour le pétrole et le gaz</h2>
<ul>
<li><strong>NT-MBYEX (antidéflagrant) :</strong> certifié ATEX/IECEx, jusqu'à PN40 / 200°C. Idéal pour les réservoirs de stockage de brut, les séparateurs huile-eau et les ballons de gaz.</li>
<li><strong>NT-MBYB (type chaudière) :</strong> jusqu'à PN100 / 350°C, indication bicolore haute visibilité (rouge = vapeur, vert = eau). Pour les chaudières de raffinerie et les générateurs de vapeur.</li>
</ul>

<h2>Options d'instrumentation</h2>
<ul>
<li><strong>Transmetteur 4–20 mA :</strong> signal de niveau continu pour le système DCS/SCADA de la raffinerie</li>
<li><strong>Contacts de niveau :</strong> alarmes haut/bas et très-haut/très-bas par contacts reed magnétiques</li>
<li><strong>Traçage vapeur :</strong> pour les hydrocarbures visqueux (fuel lourd, bitume) nécessitant un maintien en température</li>
</ul>

<h2>Spécification et documentation</h2>
<p>Pour les projets pétroliers nord-africains, nous fournissons une documentation complète :</p>
<ul>
<li>Certificats matière 3.1 selon EN 10204</li>
<li>Certificat d'épreuve hydraulique</li>
<li>Certificat ATEX/IECEx pour les zones classées</li>
<li>Plans dimensionnels et schémas de raccordement</li>
</ul>
<p>Envoyez-nous vos spécifications (entre-axes, pression, température, densité du fluide) pour recevoir une offre technique détaillée.</p>`
}
],
ar:[
{slug:"flow-measurement-oil-gas-iraq-kuwait-bahrain",
title:"قياس التدفق في صناعة النفط والغاز — العراق، الكويت، البحرين وعُمان",
excerpt:"من حقول النفط العراقية إلى مصافي الخليج، أجهزة قياس التدفق الكهرومغناطيسية من Net Flow مصممة لأقسى الظروف التشغيلية.",
category:"النفط والغاز",
date:"2026-09-14",
image:"assets/products/NT-VMF-S.png",
content:`<h2>متطلبات القياس في منشآت النفط والغاز</h2>
<p>تعتمد صناعة النفط والغاز في <strong>العراق والكويت والبحرين وعُمان والأردن</strong> على أجهزة قياس التدفق في مراحل متعددة: من مياه الحقن في الآبار إلى مياه التبريد في المصافي ومن طين الحفر إلى المياه المعالجة.</p>
<p>مقاييس التدفق الكهرومغناطيسية من Net Flow مصممة خصيصاً لهذه التطبيقات، حيث تقيس أي سائل موصل كهربائياً <strong>بدون أي أجزاء متحركة</strong>، مما يعني صفر صيانة ميكانيكية وعمر افتراضي يتجاوز 15 عاماً.</p>

<h2>التطبيقات الرئيسية</h2>
<h3>مياه العملية في المصافي</h3>
<p>قياس مياه التبريد ومياه الغلايات ومياه إزالة الأملاح. الحجم النموذجي: DN50–DN600، بطانة PTFE أو مطاط صلب، أقطاب 316L.</p>

<h3>طين الحفر</h3>
<p>قياس تدفق طين الحفر المحمل بالمواد الصلبة. يتطلب تردد إثارة عالي (25/30 هرتز) وبطانة بولي يوريثان مقاومة للتآكل. الحجم: DN100–DN300.</p>

<h3>حقن المياه</h3>
<p>مراقبة حجم المياه المحقونة في الآبار لتعزيز الإنتاج. دقة ±0.2% ضرورية للتحكم الدقيق. خرج 4-20 مللي أمبير + HART للربط مع نظام SCADA.</p>

<h2>مؤشرات المستوى المغناطيسية</h2>
<p>لخزانات التخزين والفاصلات والأوعية الضاغطة، نقدم مؤشرات مستوى مغناطيسية بتقنية البايباس:</p>
<ul>
<li><strong>NT-MBYEX:</strong> معتمد ATEX/IECEx للمناطق الخطرة، حتى PN40 / 200°C</li>
<li><strong>NT-MBYB:</strong> لأسطوانات البخار والأوعية عالية الضغط، حتى PN100 / 350°C</li>
</ul>

<h2>المعايرة والاعتماد</h2>
<p>كل جهاز من Net Flow يتم معايرته في مختبرنا <strong>المعتمد من TÜRKAK وفق ISO/IEC 17025</strong> بعدم يقين ±0.27%. الشهادة معترف بها في جميع الدول العربية من خلال اتفاقيات الاعتراف المتبادل EA و ILAC.</p>
<p>أرسل لنا تفاصيل تطبيقك (الوسط، قطر الأنبوب، نطاق التدفق) وسنرسل لك عرض أسعار مُهيأ خلال يوم عمل واحد.</p>`
},
{slug:"water-metering-jordan-egypt-saudi-municipal-networks",
title:"قياس التدفق في شبكات المياه البلدية — الأردن، مصر، السعودية",
excerpt:"مع فقدان أكثر من 50% من المياه في بعض الشبكات العربية، القياس الدقيق هو الخطوة الأولى لتقليل الهدر وتوفير الملايين.",
category:"شبكات المياه",
date:"2026-09-11",
image:"assets/products/NT-VMF-I.png",
content:`<h2>تحديات شبكات المياه في المنطقة العربية</h2>
<p>تواجه شبكات المياه في <strong>الأردن والعراق ومصر والسعودية</strong> تحديات فريدة: ندرة الموارد المائية، ارتفاع درجات الحرارة، وشبكات توزيع ممتدة جغرافياً مع نسب فاقد مرتفعة.</p>
<p>في بعض الشبكات، يتجاوز الفاقد (المياه غير المدرة للدخل) <strong>50%</strong> من إجمالي الإنتاج. القياس الدقيق هو الخطوة الأولى لتحديد مواقع التسرب وتقليل الهدر.</p>

<h2>نظام مناطق القياس المحددة (DMA)</h2>
<p>أثبت نظام تقسيم الشبكة إلى مناطق قياس محددة فعاليته عالمياً. يتطلب كل حد منطقة مقياس تدفق كهرومغناطيسي دقيق لقياس:</p>
<ul>
<li><strong>التدفق الداخل:</strong> إجمالي المياه الواردة للمنطقة</li>
<li><strong>التدفق الليلي الأدنى:</strong> مؤشر على التسربات الحقيقية</li>
<li><strong>القياس ثنائي الاتجاه:</strong> رصد أي تدفق عكسي غير متوقع</li>
</ul>

<h2>مواصفات مقاييس Net Flow لشبكات المياه</h2>
<ul>
<li>الأحجام: DN80–DN1200 لخطوط التوزيع الرئيسية</li>
<li>الدقة: ±0.2% من القراءة</li>
<li>درجة الحماية: IP68 (غاطس) — ضروري لغرف العدادات المعرضة للغمر</li>
<li>الخرج: 4-20 مللي أمبير + Modbus RS485 للربط مع SCADA</li>
<li>البطانة: مطاط صلب للمياه الخام، PTFE للمياه المعالجة</li>
</ul>

<h2>الإصدار البطاري</h2>
<p>للمواقع البعيدة بدون كهرباء، يعمل الإصدار البطاري NT-VMF-B حتى <strong>5 سنوات</strong> بدون مصدر خارجي، مع خيار الاتصال اللاسلكي GSM/GPRS لنقل البيانات تلقائياً.</p>

<p>تواصل معنا لتلقي عرض أسعار مُخصص لمشروعك.</p>`
},
{slug:"chemical-plant-instrumentation-qatar-kuwait-bahrain",
title:"أجهزة القياس لمصانع الكيماويات والبتروكيماويات — قطر، الكويت، البحرين",
excerpt:"من مصانع الأسمدة في قطر إلى مجمعات EQUATE في الكويت — دليل اختيار أجهزة قياس التدفق والمستوى المقاومة للتآكل الكيميائي.",
category:"كيماويات",
date:"2026-09-08",
image:"assets/products/NT-MLI-BR.png",
content:`<h2>بيئة القياس في المصانع الكيماوية</h2>
<p>تعمل مصانع الكيماويات والبتروكيماويات في <strong>قطر (QAFCO) والكويت (EQUATE) والبحرين والسعودية</strong> مع سوائل شديدة التآكل: أحماض، قواعد، مذيبات، ومحاليل ملحية مركزة.</p>
<p>يتطلب ذلك أجهزة قياس بمواد خاصة تقاوم التآكل الكيميائي مع الحفاظ على الدقة المطلوبة.</p>

<h2>اختيار مواد التلامس</h2>
<h3>البطانة</h3>
<ul>
<li><strong>PTFE:</strong> مقاومة كيميائية شاملة لمعظم الأحماض والقواعد، مناسب لدرجات حرارة حتى 180°C</li>
<li><strong>PFA:</strong> أداء كيميائي أعلى، مناسب للأحماض المركزة والمؤكسدات القوية</li>
</ul>

<h3>الأقطاب</h3>
<ul>
<li><strong>Hastelloy C-276:</strong> الخيار القياسي لمعظم التطبيقات الكيميائية</li>
<li><strong>التنتالوم:</strong> لحمض الهيدروكلوريك المركز وحمض الكبريتيك الساخن</li>
<li><strong>البلاتين:</strong> لأكثر الوسائط تآكلاً</li>
</ul>

<h2>مؤشرات المستوى للخزانات الكيميائية</h2>
<p>مؤشرات المستوى المغناطيسية NT-MBYEX مناسبة لخزانات تخزين الكيماويات:</p>
<ul>
<li>جسم من الفولاذ المقاوم 316L أو Hastelloy</li>
<li>عوامة مصممة حسب كثافة السائل المحدد</li>
<li>اعتماد ATEX/IECEx للمناطق المصنفة</li>
<li>مرسل 4-20 مللي أمبير اختياري للمراقبة عن بُعد</li>
</ul>

<h2>المعايرة والتوثيق</h2>
<p>لمشاريع المصانع الكيميائية، نوفر:</p>
<ul>
<li>شهادة معايرة TÜRKAK ISO/IEC 17025</li>
<li>شهادات المواد 3.1 وفق EN 10204</li>
<li>وثائق الاختبار الهيدروليكي</li>
<li>رسومات الأبعاد وأنظمة التوصيل</li>
</ul>
<p>أرسل مواصفاتك التقنية لتلقي عرض فني مفصل.</p>`
}
],
ru:[
{slug:"vodosnabzhenie-kazahstan-uzbekistan-turkmenistan",
title:"Электромагнитные расходомеры для водоснабжения Казахстана, Узбекистана и Туркменистана",
excerpt:"Экстремальный климат от −40°C до +50°C, песчаные взвеси, устаревшие сети — как выбрать расходомер, который выдержит условия Центральной Азии.",
category:"Водоснабжение Центральная Азия",
date:"2026-09-14",
image:"assets/products/NT-VMF.png",
content:`<h2>Особенности систем водоснабжения региона</h2>
<p>Системы водоснабжения <strong>Казахстана, Узбекистана, Туркменистана, Кыргызстана и Таджикистана</strong> работают в экстремальных условиях: температуры от −40°C зимой до +50°C летом, высокая минерализация воды, песчаные взвеси в источниках поверхностного водозабора.</p>
<p>Механические расходомеры в таких условиях быстро выходят из строя — крыльчатки заклинивают от песка, подшипники изнашиваются, точность падает уже через 6–12 месяцев.</p>

<h2>Почему электромагнитные расходомеры — оптимальный выбор</h2>
<p>Электромагнитный расходомер Net Flow NT-VMF не имеет движущихся частей. Измерение основано на <strong>законе электромагнитной индукции Фарадея</strong> — магнитное поле пересекает поток жидкости, и индуцированное напряжение пропорционально скорости потока.</p>
<ul>
<li><strong>Нет движущихся частей</strong> — нечему ломаться и засоряться</li>
<li><strong>Нулевая потеря давления</strong> — проходное сечение полностью свободно</li>
<li><strong>Работа с загрязнённой водой</strong> — песок, ил, взвеси не влияют на точность</li>
<li><strong>Диапазон DN3–DN3000</strong> — от дозирования хлора до магистральных водоводов</li>
</ul>

<h2>Рекомендации по выбору</h2>
<h3>Футеровка</h3>
<ul>
<li><strong>Твёрдая резина (эбонит):</strong> для сырой воды с абразивными частицами — DN50–DN3000</li>
<li><strong>PTFE:</strong> для очищенной питьевой воды и линий хлорирования — DN3–DN300</li>
</ul>

<h3>Степень защиты</h3>
<p>Для установки в колодцах и камерах, подверженных затоплению, рекомендуется <strong>IP68</strong> (полная герметичность при погружении).</p>

<h3>Температурный диапазон</h3>
<p>Стандартный NT-VMF работает при температуре окружающей среды от <strong>−25°C до +60°C</strong>. Для экстремальных зимних условий Казахстана доступна версия с расширенным диапазоном и обогревом электроники.</p>

<h2>Калибровка и сертификация</h2>
<p>Каждый расходомер калибруется на нашем стенде, <strong>аккредитованном TÜRKAK по ISO/IEC 17025</strong>, с неопределённостью ±0,27%. Сертификат калибровки признаётся в Казахстане, Узбекистане и других странах СНГ через соглашения EA & ILAC о взаимном признании.</p>

<h2>Типовые применения</h2>
<ul>
<li><strong>Водозабор:</strong> DN200–DN1200, эбонит + 316L</li>
<li><strong>Распределительная сеть:</strong> DN80–DN400, зональный учёт</li>
<li><strong>Насосные станции:</strong> DN100–DN600, выход 4–20 мА + Modbus</li>
<li><strong>Дозирование хлора:</strong> DN3–DN25, PTFE + Hastelloy</li>
</ul>
<p>Отправьте нам параметры вашего приложения для получения коммерческого предложения в течение одного рабочего дня.</p>`
},
{slug:"rashodomery-gornodoba-kazminerals-navoi-talco",
title:"Расходомеры для горнодобычи: KazMinerals, Навоийский ГМК, TALCO — подбор под суспензии",
excerpt:"Рудные пульпы с 60% твёрдых частиц, кислотный дренаж, цементные шламы — высокочастотные расходомеры Net Flow решают задачи, с которыми стандартные приборы не справляются.",
category:"Горнодобыча СНГ",
date:"2026-09-10",
image:"assets/products/NT-VMF-M.png",
content:`<h2>Вызовы измерения в горнодобыче</h2>
<p>Горнодобывающие предприятия <strong>Казахстана (KazMinerals), Таджикистана (TALCO), Узбекистана (Навоийский ГМК)</strong> и цементные заводы региона работают с жидкостями, содержащими до 60% твёрдых частиц — рудные пульпы, шламы, цементные суспензии.</p>
<p>Стандартные расходомеры с частотой возбуждения 6,25 Гц не справляются с электрохимическим шумом, генерируемым абразивными суспензиями. Сигнал становится нестабильным, показания «плавают».</p>

<h2>Высокочастотное возбуждение 25/30 Гц</h2>
<p>Расходомеры Net Flow для суспензий используют частоту возбуждения <strong>25/30 Гц</strong> — в 4 раза выше стандартной. Это обеспечивает:</p>
<ul>
<li><strong>Подавление шума:</strong> эффективная фильтрация электрохимических помех от суспензий</li>
<li><strong>Быстрый отклик:</strong> время реакции &lt; 0,5 с</li>
<li><strong>Стабильный ноль:</strong> минимальный дрейф при загрязнении электродов</li>
</ul>

<h2>Выбор футеровки</h2>
<ul>
<li><strong>Полиуретан:</strong> максимальная износостойкость для абразивных пульп — в 5 раз долговечнее резины</li>
<li><strong>Твёрдая резина:</strong> для умеренно абразивных суспензий, более экономичный вариант</li>
</ul>

<h2>Выбор электродов</h2>
<ul>
<li><strong>Hastelloy C-276:</strong> стандарт для большинства горных применений</li>
<li><strong>Карбид вольфрама:</strong> ультраизносостойкие электроды для самых агрессивных суспензий</li>
</ul>

<h2>Уровнемеры для химических резервуаров</h2>
<p>На горнодобывающих предприятиях также применяются наши <strong>магнитные байпасные уровнемеры</strong> для резервуаров с реагентами (кислоты, щёлочи, флотореагенты):</p>
<ul>
<li>NT-MBYEX во взрывозащищённом исполнении</li>
<li>Материал корпуса: 316L или Hastelloy</li>
<li>Опциональный передатчик 4–20 мА</li>
</ul>

<p>Свяжитесь с нами для подбора оптимального решения под ваше применение.</p>`
},
{slug:"neftepererabotka-azerbajdzhan-gruziya-turkmenistan",
title:"Приборы для НПЗ Азербайджана, Грузии и Туркменистана — расходомеры и уровнемеры ATEX",
excerpt:"SOCAR, ТНПЗ, грузинские НПЗ — расходомеры и магнитные уровнемеры с сертификацией ATEX/IECEx для нефтеперерабатывающих заводов Кавказа и Каспия.",
category:"Нефтепереработка Кавказ",
date:"2026-09-06",
image:"assets/products/NT-MLI-EX.png",
content:`<h2>Нефтепереработка в Каспийском регионе</h2>
<p>Нефтеперерабатывающие заводы <strong>Азербайджана (SOCAR), Туркменистана (ТНПЗ) и Грузии</strong> нуждаются в надёжных приборах для измерения расхода и уровня в различных точках технологического процесса.</p>

<h2>Применения расходомеров</h2>
<h3>Технологическая вода</h3>
<p>Охлаждающая вода, питательная вода котлов, деминерализованная вода — основные применения электромагнитных расходомеров на НПЗ. Типовые размеры DN50–DN600, футеровка PTFE или эбонит, электроды 316L.</p>

<h3>Буровой раствор</h3>
<p>На буровых площадках SOCAR применяются расходомеры с высокочастотным возбуждением для измерения расхода бурового раствора с высоким содержанием твёрдых частиц. Футеровка полиуретан, электроды Hastelloy.</p>

<h2>Магнитные байпасные уровнемеры</h2>
<p>Для резервуаров хранения и технологических ёмкостей:</p>
<ul>
<li><strong>NT-MBYEX:</strong> взрывозащищённое исполнение ATEX/IECEx для резервуарного парка — до PN40 / 200°C</li>
<li><strong>NT-MBYB:</strong> для паровых барабанов котлов — до PN100 / 350°C, двухцветная индикация</li>
</ul>

<h2>Преимущества Net Flow для региона</h2>
<ul>
<li><strong>Географическая близость:</strong> Турция — ближайший производитель, сроки поставки от 2 недель</li>
<li><strong>Калибровка TÜRKAK:</strong> сертификат ISO/IEC 17025, признанный в странах СНГ</li>
<li><strong>Техническая поддержка:</strong> прямая связь с инженерами-разработчиками</li>
<li><strong>Конкурентные цены:</strong> без посредников, напрямую от производителя</li>
</ul>

<p>Запросите коммерческое предложение — мы подберём оптимальное решение под ваши технологические условия.</p>`
}
],
tr:[
{slug:"elektromanyetik-debimetre-secim-rehberi",
title:"Elektromanyetik Debimetre Secim Rehberi: Dogru Cihazi Nasil Belirlersiniz",
excerpt:"Boru capi, liner secimi, elektrot malzemesi ve cikis protokolu — dogru elektromanyetik debimetreyi secmek icin bilmeniz gereken her sey.",
category:"Uygulama Rehberi",
date:"2026-09-14",
image:"assets/products/NT-VMF.png",
content:`<h2>Neden Elektromanyetik Debimetre?</h2>
<p>Elektromanyetik debimetreler, iletken sivilarin hacimsel debi olcumunde en yaygin kullanilan teknolojidir. Faraday'in elektromanyetik induksiyon yasasina dayanir: manyetik alan icinden gecen iletken sivi, akis hizina orantili bir gerilim uretir.</p>
<p>Net Flow NT-VMF serisi, DN3'ten DN3000'e kadar tum boru caplarini kapsar ve <strong>TURKAK akrediteli ISO/IEC 17025 laboratuvarimizda</strong> ±0,27% belirsizlikle kalibre edilir.</p>

<h2>Adim 1: Boru Capi (DN) Secimi</h2>
<p>Ideal akis hizi 1–5 m/s araligindadir. Cok dusuk hizlarda hassasiyet azalir, cok yuksek hizlarda asindirma riski artar.</p>
<ul>
<li><strong>Su sebeke hatlari:</strong> DN80–DN600</li>
<li><strong>Ana iletim hatlari:</strong> DN300–DN1200</li>
<li><strong>Klor dozlama:</strong> DN3–DN25 (miniatur debimetreler)</li>
<li><strong>Endustriyel proses:</strong> DN25–DN300</li>
</ul>

<h2>Adim 2: Liner Secimi</h2>
<ul>
<li><strong>Sert kaucuk (ebonit):</strong> Ham su, atiksu — asinmaya dayanikli, DN50–DN3000</li>
<li><strong>PTFE:</strong> Kimyasal dayanim, icme suyu ve dozlama hatlari, DN3–DN300</li>
<li><strong>PFA:</strong> Premium kimyasal dayanim, asit/baz hatlari</li>
<li><strong>Poliuretan:</strong> Asindirici camurlar, maden pulpleri</li>
</ul>

<h2>Adim 3: Elektrot Secimi</h2>
<ul>
<li><strong>316L paslanmaz:</strong> Temiz su uygulamalari icin standart</li>
<li><strong>Hastelloy C-276:</strong> Klorlu su, deniz suyu, kimyasal ortamlar</li>
<li><strong>Titanyum:</strong> Deniz suyu aritma, guclu oksitleyiciler</li>
<li><strong>Tantal:</strong> Konsantre asitler (HCl, H₂SO₄)</li>
</ul>

<h2>Adim 4: Cikis ve Haberlesme</h2>
<ul>
<li><strong>4–20 mA + HART:</strong> Endüstri standardi, her PLC ile uyumlu</li>
<li><strong>RS485 Modbus RTU:</strong> Coklu cihaz aglari icin dijital haberlesme</li>
<li><strong>Puls cikisi:</strong> Toplam hacim sayimi ve parti kontrolu</li>
</ul>

<p>Uygulama detaylarinizi gonderin — bir is gunu icinde yapilandirilmis teklif ve veri sayfasi gonderelim.</p>`
},
{slug:"turkak-kalibrasyon-neden-onemli",
title:"TURKAK Akrediteli Kalibrasyon Neden Onemlidir?",
excerpt:"ISO/IEC 17025 akreditasyonu, kalibrasyon sertifikanizin 100'den fazla ulkede gecerli olmasini saglar. Iste detaylar.",
category:"Teknik",
date:"2026-09-11",
image:"assets/products/NT-RCS-3100-2100.png",
content:`<h2>Kalibrasyon Nedir?</h2>
<p>Kalibrasyon, bir olcum cihazinin gosterdigi degerin, bilinen bir referans standarda gore ne kadar saptigini belirleme islemidir. Sonuc, bir <strong>kalibrasyon sertifikasi</strong> ile belgelenir.</p>

<h2>Akrediteli vs. Akreditesiz Kalibrasyon</h2>
<p>Herhangi bir firma "kalibrasyon sertifikasi" verebilir. Ancak bu sertifikanin uluslararasi gecerliligi icin, kalibrasyonu yapan laboratuvarin <strong>ISO/IEC 17025 standardina gore akredite</strong> olmasi gerekir.</p>
<p>Net Flow'un kalibrasyon laboratuvari, <strong>TURKAK (Turk Akreditasyon Kurumu)</strong> tarafindan AB-0354-K numarasi ile akredite edilmistir. TURKAK, Avrupa Akreditasyon Birligi (EA) ve ILAC'in tam uyesidir.</p>

<h2>Bu Ne Anlama Gelir?</h2>
<ul>
<li>Sertifikamiz <strong>100'den fazla ulkede</strong> otomatik olarak taninir</li>
<li>Musteri ulkesinde yeniden kalibrasyon gerekmez</li>
<li>Denetim ve uyumluluk sureclerinde kabul gorur</li>
<li>Olcum belirsizligi ±0,27% olarak belgelenir</li>
</ul>

<h2>Kalibrasyon Rigimiz</h2>
<p>Laboratuvarimizda DN3'ten DN1200'e kadar debimetreleri kalibre edebilen coklu referans hatti bulunur. Her hat, gravimetrik (tartim bazli) yontemle en yuksek dogrulugu saglar.</p>
<ul>
<li><strong>Kucuk DN hatti:</strong> DN3–DN50, hassas tartim sistemi</li>
<li><strong>Orta DN hatti:</strong> DN50–DN300, yuksek hacimli kalibrasyon tanki</li>
<li><strong>Buyuk DN hatti:</strong> DN300–DN1200, endustriyel olcekli rig</li>
</ul>

<h2>Ihracat Musterileri Icin</h2>
<p>Irak, Azerbaycan, Kazakistan, Fas, Nijerya ve diger ihracat pazarlarimizda musteriler, cihaz ile birlikte gelen TURKAK sertifikasini dogrudan kullanabilir. Ek kalibrasyon maliyeti ve suresi ortadan kalkar.</p>`
},
{slug:"endustriyel-seviye-olcum-rehberi",
title:"Endustriyel Seviye Olcum Yontemleri: Manyetik Bypass vs Diger Teknolojiler",
excerpt:"Tank ve kaplarda sivi seviye olcumu icin manyetik bypass, ultrasonik, radar ve kapasitif yontemlerin karsilastirilmasi.",
category:"Teknik",
date:"2026-09-08",
image:"assets/products/NT-MLI.png",
content:`<h2>Seviye Olcum Neden Onemli?</h2>
<p>Endustriyel tesislerde tanklardaki sivi seviyesinin dogru olculmesi, uretim surekliligi, guvenlik ve stok yonetimi icin kritiktir. Yanlis seviye okumasi, tank tasmasina, pompa hasarina veya uretim duraklarina yol acabilir.</p>

<h2>Manyetik Bypass Seviye Gostergesi</h2>
<p>Net Flow'un NT-MBY serisi, tank disina monte edilen bir bypass odasinda yukselen/alcalan samandrali kullanir. Samandranin icindeki miknatis, dis gostergede renkli bayraklari cevirir.</p>
<p><strong>Avantajlari:</strong></p>
<ul>
<li>Elektrik gerektirmez — tamamen mekanik gosterge</li>
<li>Cam tup riski yok — guvenli, kirilmaz</li>
<li>Yuksek basinc ve sicakliga dayanikli (PN100, 350°C)</li>
<li>Opsiyonel 4–20 mA transmitter ile uzaktan izleme</li>
</ul>

<h2>Diger Teknolojilerle Karsilastirma</h2>
<ul>
<li><strong>Ultrasonik seviye:</strong> Temassiz, ancak kopuk ve buhar etkiler. Tank ici engellere duyarli.</li>
<li><strong>Radar seviye:</strong> Yuksek dogruluk, ancak maliyet yuksek. Kimyasal buharlardan etkilenmez.</li>
<li><strong>Kapasitif seviye:</strong> Basit ve ekonomik, ancak sivi ozelligine bagli kalibrasyon gerekir.</li>
<li><strong>Manyetik bypass:</strong> Orta maliyet, yuksek guvenilirlik, basinc/sicaklik dayanimi, mekanik gosterge + elektronik cikis kombinasyonu.</li>
</ul>

<h2>Net Flow Urun Yelpazesi</h2>
<ul>
<li><strong>NT-MBY:</strong> Standart — su tanklari, proses kaplari, PN16/150°C</li>
<li><strong>NT-MBYEX:</strong> Ex-proof — yakit depolari, kimyasal tanklar, ATEX/IECEx</li>
<li><strong>NT-MBYB:</strong> Kazan tipi — buhar kazanlari, PN100/350°C</li>
</ul>

<p>Uygulamaniz icin en uygun seviye olcum cozumunu belirlemek icin bize ulasin.</p>`
}
]
};
