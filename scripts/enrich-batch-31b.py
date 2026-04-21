#!/usr/bin/env python3
"""Batch 31 — Part B: 7 cases.

Cases: retinal-detachment, retropharyngeal-abscess, rhabdomyolysis,
       rhabdomyolysisinduced-hyperkalemia, rheumatoid-arthritis-new, ruptured-aaa,
       sbo-with-strangulation
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "retinal-detachment": {
    "diagnosis": "Rhegmatogenous Retinal Detachment (Post-PVD in High Myopia)",
    "coachFinal": (
      "Diagnosis: rhegmatogenous retinal detachment of the right eye following posterior vitreous detachment (PVD) in a highly myopic patient — an ophthalmic emergency. "
      "Key learning: "
      "(1) Retinal detachment is classified by mechanism: "
      "(a) Rhegmatogenous (most common) — a retinal tear/break allows liquefied vitreous to enter the subretinal space, separating retina from retinal pigment epithelium. Preceded by PVD in most cases. "
      "(b) Tractional — fibrovascular tissue pulls retina off (diabetic retinopathy, sickle cell, ROP). "
      "(c) Exudative/serous — fluid accumulates under retina without break (tumors, inflammation, vascular disease, central serous chorioretinopathy, hypertensive crisis). "
      "(d) Combined. "
      "(2) Risk factors for rhegmatogenous detachment: high myopia (axial length >26 mm or refractive error >-6 diopters; 10x risk), lattice degeneration (peripheral retinal thinning), prior cataract surgery, eye trauma, family history, prior detachment in fellow eye, and age (PVD incidence rises steeply after 50). "
      "(3) Classic symptoms — the 'Four F's' and related warnings: "
      "Floaters (new or increased — 'cobwebs', 'spots', sudden 'shower of floaters'). "
      "Flashes (photopsias — lightning streaks, particularly at the temporal edge, most visible in darkness). "
      "Field defect (curtain, shadow, or veil — peripheral initially, progressing centrally). "
      "Fading vision (decreased acuity when macula involved — 'macula off' detachment). "
      "Any patient with new floaters, flashes, or visual field defect needs URGENT ophthalmology evaluation, ideally within 24 hours. "
      "(4) Diagnosis and evaluation. "
      "Dilated fundus exam by an ophthalmologist with scleral depression is the gold standard — identifies the tear and detachment extent. "
      "Visual acuity, IOP, slit-lamp exam, and B-scan ultrasound when fundus view is obscured (dense cataract, vitreous hemorrhage, small pupil). "
      "OCT is helpful for macular involvement assessment. "
      "Document 'macula on' (macula still attached — better prognosis, time-sensitive) vs 'macula off' (already detached — less time-sensitive but still urgent for outcome optimization). "
      "(5) Management is surgical. "
      "Options (chosen by surgeon based on detachment characteristics): "
      "(a) Laser photocoagulation or cryotherapy for isolated retinal tears without detachment — creates chorioretinal scar to seal. "
      "(b) Pneumatic retinopexy — gas bubble injection with head positioning for simple superior detachments. "
      "(c) Scleral buckle — band placed externally to indent the sclera and close breaks. "
      "(d) Pars plana vitrectomy — removal of vitreous, drainage of subretinal fluid, retinopexy, and gas or silicone oil tamponade. "
      "Emergent surgery for macula-on detachments (hours to days); semi-urgent for macula-off (days). "
      "Postoperative: positioning requirements (face-down for hours to weeks depending on tamponade), no flying during gas tamponade (gas expands at altitude), limited activity, close follow-up. "
      "Anatomic success rate 85-90% with single procedure; visual outcomes depend on macula status, duration, and preoperative visual acuity. "
      "Classic pitfalls: (a) dismissing new floaters and flashes as 'just vitreous changes' — any acute onset symptoms warrant ophthalmology within 24 hours. "
      "(b) Delaying referral for macula-on detachments — each hour the macula remains attached improves final visual outcome. "
      "(c) Missing the diagnosis in the other eye — fellow eye has elevated risk, examine it carefully and counsel patients about symptoms to watch for. "
      "(d) Not screening high myopes and post-cataract patients prophylactically — prevention through regular dilated exams and prompt attention to new symptoms. "
      "(e) Confusing retinal detachment with retinal artery/vein occlusion (sudden painless vision loss without floaters/flashes — requires different urgent workup)."
    )
  },

  "retropharyngeal-abscess": {
    "diagnosis": "Retropharyngeal Abscess with Airway Compromise",
    "coachFinal": (
      "Diagnosis: retropharyngeal abscess (C2-C4) with airway compromise, complicating acute otitis media and URI. "
      "Key learning: "
      "(1) The retropharyngeal space extends from the base of skull to the mediastinum, posterior to the pharynx and anterior to the prevertebral fascia. "
      "It contains lymph nodes that receive drainage from the nose, paranasal sinuses, eustachian tubes, nasopharynx, and middle ear — making these the most common infection sources in pediatric retropharyngeal abscess. "
      "Adults more often develop retropharyngeal abscess from direct pharyngeal trauma, foreign body, dental infection, or cervical vertebral osteomyelitis. "
      "The lymph nodes atrophy after childhood, which is why retropharyngeal abscess is most common in children 2-8 years old. "
      "(2) Microbiology is polymicrobial: group A Streptococcus, Staphylococcus aureus (including MRSA), respiratory anaerobes (Fusobacterium, Prevotella, Peptostreptococcus), Haemophilus, Eikenella, and viridans streptococci. "
      "(3) Presentation: fever, sore throat, neck pain and stiffness (resistance to neck extension), dysphagia, drooling, muffled voice, torticollis, and in children refusal to feed, irritability, and inability to protect the airway. "
      "Severe cases: stridor, respiratory distress, trismus, and signs of sepsis. "
      "The 'tripod position' and drooling are classic for airway compromise. "
      "(4) Diagnosis. "
      "Lateral neck X-ray: widening of the prevertebral soft tissue (>7 mm at C2 or >22 mm at C6 in adults; >14 mm at C6 in children; or width greater than the vertebral body at that level). "
      "CT neck with IV contrast is the definitive imaging — confirms abscess location, size, extent (particularly descending extension toward the mediastinum — DANGEROUS), airway narrowing, and vascular involvement. "
      "Labs: CBC (leukocytosis), CMP, lactate, blood cultures, coagulation studies. "
      "Do NOT delay imaging for obvious airway emergencies — airway stabilization first, imaging as soon as safe. "
      "(5) Management. "
      "(a) AIRWAY FIRST — consultation with anesthesia and ENT/OMFS for planned airway management. Awake fiberoptic intubation is often preferred to preserve spontaneous ventilation; surgical airway (tracheostomy or cricothyroidotomy) backup available. Avoid blind attempts in a distorted airway. "
      "(b) SURGICAL DRAINAGE is the definitive treatment for most established abscesses — transoral for select small cases; external cervical approach for larger or deeper collections. Specimens sent for Gram stain, culture, anaerobic culture. "
      "(c) Empiric broad-spectrum IV antibiotics: ampicillin-sulbactam or clindamycin as single agent, OR piperacillin-tazobactam + vancomycin for severe cases or MRSA risk. Adjust based on cultures. "
      "(d) IV fluids, pain control, and ICU admission for airway monitoring. "
      "(e) Serial imaging and re-drainage as needed. "
      "Duration 10-14 days of antibiotic therapy (often IV for 3-5 days, then oral). "
      "Monitor for and treat complications: mediastinitis (CT chest), jugular vein thrombosis (Lemierre), carotid artery erosion, sepsis. "
      "Classic pitfalls: (a) missing airway compromise and attempting routine intubation — plan awake fiberoptic with surgical backup. "
      "(b) Delaying CT for a stable patient — the diagnosis can be missed on plain films; maintain low threshold. "
      "(c) Treating with antibiotics alone for established abscess — most require surgical drainage. "
      "(d) Not imaging the chest — descending necrotizing mediastinitis requires cardiothoracic surgery involvement and changes outcome. "
      "(e) Missing cervical osteomyelitis as the underlying cause in adults with minimal antecedent infection — requires targeted imaging and prolonged antibiotics."
    )
  },

  "rhabdomyolysis": {
    "diagnosis": "Rhabdomyolysis (Statin-Induced + Exertional)",
    "coachFinal": (
      "Diagnosis: rhabdomyolysis from combined statin-induced and exertional injury. "
      "Key learning: "
      "(1) Rhabdomyolysis is muscle breakdown releasing intracellular contents (myoglobin, CK, potassium, phosphate, urate) into circulation. "
      "Diagnostic threshold typically CK >5x upper limit of normal (>1,000 U/L) with characteristic history or symptoms; severe rhabdo often has CK >10,000, with values sometimes reaching 100,000+. "
      "Classic triad: muscle pain, weakness, and dark ('tea-colored' or 'cola-colored') urine from myoglobinuria. "
      "(2) Etiologies: "
      "(a) Trauma/compression — crush injury, prolonged immobilization, compartment syndrome. "
      "(b) Exertional — intense exercise, seizures, neuroleptic malignant syndrome, serotonin syndrome, malignant hyperthermia, delirium tremens. "
      "(c) Drugs — statins (especially at high doses and in combination with CYP3A4 inhibitors like macrolides, azoles, amiodarone), fibrates, colchicine, cocaine, amphetamines, heroin, alcohol. "
      "(d) Electrolyte/metabolic — hypokalemia, hypophosphatemia, hyponatremia, DKA, HHS, hypothyroidism. "
      "(e) Infectious — influenza, coxsackievirus, EBV, HIV, bacterial sepsis, malaria. "
      "(f) Genetic — McArdle disease, carnitine palmitoyltransferase deficiency, other metabolic myopathies — consider in recurrent or early-onset cases. "
      "(g) Temperature extremes — heat stroke, hypothermia. "
      "(3) Complications and management. "
      "Acute kidney injury (AKI) from pigment nephropathy: myoglobin is nephrotoxic via direct tubular toxicity, ischemia from vasoconstriction, and tubular obstruction — incidence ~15% overall, higher with severe rhabdo or comorbid dehydration. "
      "HYPERKALEMIA can be severe from intracellular potassium release combined with AKI — cardiac arrhythmia risk. "
      "Hypocalcemia early (calcium binds to damaged muscle), then hypercalcemia late (resorption from muscle during recovery). "
      "Hyperphosphatemia, hyperuricemia. "
      "DIC in severe cases. "
      "Compartment syndrome in crush injuries. "
      "(4) Treatment. "
      "(a) Aggressive IV fluid resuscitation — normal saline (or balanced crystalloid) at high rates, often 1-2 L boluses then 200-500 mL/hr, titrated to urine output target 200-300 mL/hr until CK trends down. "
      "May require 10+ liters in the first 24 hours. "
      "(b) Urine alkalinization with sodium bicarbonate (target urine pH >6.5) theoretically reduces myoglobin precipitation — controversial with limited evidence; generally not needed with adequate saline resuscitation. "
      "(c) Loop diuretics controversial — reserved for fluid overload, not routine. "
      "(d) Mannitol historically used; evidence weak. "
      "(e) Electrolyte correction: treat hyperkalemia urgently (calcium, insulin/dextrose, albuterol, bicarbonate, binders, dialysis if refractory), replete potassium cautiously if hypokalemic, treat hypocalcemia only if symptomatic. "
      "(f) Dialysis for refractory hyperkalemia, severe acidosis, refractory fluid overload, or severe AKI. "
      "(g) Stop/reverse offending agent — discontinue statin, treat underlying cause. "
      "(h) Monitor for and treat compartment syndrome (progressive extremity pain, firm compartments, delayed capillary refill, paresthesias, pain with passive stretch) — fasciotomy if compartment pressure >30 mm Hg. "
      "(i) Trend CK until downward trend confirmed; daily BMP, calcium, phosphate, magnesium. "
      "(5) Classic pitfalls: (a) under-resuscitating — the biggest determinant of AKI prevention is early aggressive fluids. "
      "(b) Missing concurrent statin-myotoxicity drug interaction — always review medication list for CYP3A4 inhibitors, fibrate co-administration, and high-potency statin dosing. "
      "(c) Overlooking genetic/metabolic myopathy in young patients with mild exertion triggering severe rhabdo — refer to neuromuscular specialist. "
      "(d) Treating hypocalcemia aggressively — avoid unless symptomatic; aggressive calcium repletion can cause rebound hypercalcemia during recovery. "
      "(e) Forgetting secondary prevention — statin re-challenge strategies, exertional training graduation, hydration counseling."
    )
  },

  "rhabdomyolysisinduced-hyperkalemia": {
    "diagnosis": "Severe Exertional Rhabdomyolysis with Hyperkalemia, AKI, and Sickle Cell Trait Contribution",
    "coachFinal": (
      "Diagnosis: severe exertional rhabdomyolysis (CK 84,200) with hyperkalemia (K 6.8), pigment nephropathy/AKI, and contributing sickle cell trait in heat exposure. "
      "Key learning: "
      "(1) Exertional rhabdomyolysis is a common injury in athletes, military recruits, and those undertaking intense unaccustomed exercise, especially in heat and humidity. "
      "Risk factors: unaccustomed intense exertion, heat and dehydration, insufficient acclimatization, sickle cell trait (increased risk of exertional collapse and rhabdomyolysis — especially during initial conditioning phases with heat stress), certain medications (statins, diuretics), and metabolic myopathies. "
      "Sickle cell trait (heterozygous HbAS) is usually asymptomatic at rest but confers increased risk of exertional collapse, splenic infarction at altitude, and rhabdomyolysis during intense exercise — counseling and modified training protocols are recommended for affected athletes. "
      "(2) Severity assessment: CK level, renal function, potassium, and comorbid conditions. "
      "Severe rhabdomyolysis: CK >10,000-20,000, AKI, hyperkalemia, acidosis, compartment syndrome, or DIC. "
      "This case is at the severe end — CK 84,200 with clinically significant hyperkalemia is a life-threatening syndrome requiring aggressive care. "
      "(3) Hyperkalemia management in rhabdomyolysis. "
      "Standard emergency algorithm: "
      "(a) IV calcium gluconate 1-2 g (or chloride via central access) for ECG changes — stabilizes membrane. "
      "(b) Insulin 10 units IV with dextrose 25 g + albuterol 10-20 mg nebulized — intracellular shift. "
      "(c) Sodium bicarbonate if acidemic. "
      "(d) Loop diuretics if patient still making urine. "
      "(e) Potassium binders (patiromer, sodium zirconium cyclosilicate, or sodium polystyrene sulfonate — last option). "
      "(f) Hemodialysis for refractory hyperkalemia or AKI. "
      "In rhabdomyolysis, potassium may rise rapidly with ongoing muscle breakdown — recheck frequently, continue aggressive management until CK trending down. "
      "(4) Pigment nephropathy AKI prevention and treatment. "
      "Aggressive volume expansion with IV crystalloid (normal saline or balanced solution) — initiate in the field or ED, continue at 200-500 mL/hr titrated to urine output of 200-300 mL/hr for 24-72 hours or until CK is declining toward normal. "
      "Early dialysis for refractory hyperkalemia, volume overload with anuria, or severe acidosis; dialysis does NOT remove myoglobin effectively, so it is supportive rather than causative therapy. "
      "Monitor for compartment syndrome in affected limbs — serial compartment pressures or clinical exam; fasciotomy for pressure >30 mm Hg or clinical signs. "
      "Renal function often recovers fully with timely care; some patients have residual CKD, especially if treatment was delayed. "
      "(5) Sickle cell trait and exertional safety. "
      "NATA and NCAA guidelines for sickle cell trait athletes: gradual acclimatization, hydration, avoidance of performance-based physical tests early in conditioning, immediate cessation for symptoms of collapse, and rapid cooling and evaluation for any exercise-associated symptoms. "
      "Mandatory universal preventive measures are more important than screening alone — maximize safety for ALL athletes to avoid missing undiagnosed cases. "
      "Sickle cell trait is also associated with renal medullary carcinoma (rare, young adults — flank pain, hematuria), exertional hematuria, and venous thromboembolism. "
      "Classic pitfalls: (a) attributing exertional collapse in an athlete to 'overexertion' without checking for sickle trait, hyperthermia, and rhabdomyolysis — complete workup is critical because management differs substantially. "
      "(b) Under-resuscitating — the main determinant of AKI outcome is aggressive early IV hydration. "
      "(c) Missing concurrent heat stroke — altered mental status plus hyperthermia plus exertion requires aggressive cooling with evaporative or ice-bath methods (cool first, transport second for exertional heat stroke). "
      "(d) Not providing appropriate training modification and counseling for sickle cell trait athletes after recovery. "
      "(e) Forgetting DIC monitoring in severe rhabdomyolysis — trend platelets, coagulation, fibrinogen, D-dimer; transfuse as appropriate."
    )
  },

  "rheumatoid-arthritis-new": {
    "diagnosis": "Rheumatoid Arthritis — New Diagnosis, DMARD Initiation",
    "coachFinal": (
      "Diagnosis: newly diagnosed rheumatoid arthritis (RA) requiring DMARD initiation. "
      "Key learning: "
      "(1) RA is a chronic systemic autoimmune inflammatory disease primarily affecting synovial joints, with extra-articular manifestations in many patients. "
      "Typical presentation: symmetric polyarthritis of small joints (MCPs, PIPs — DIPs typically spared, distinguishing from OA/psoriatic), wrists, MTPs, knees, with morning stiffness lasting >1 hour, improvement with movement, fatigue, and malaise. "
      "Can affect cervical spine (C1-C2 instability), shoulders, elbows, hips, and feet. "
      "Extra-articular: rheumatoid nodules, interstitial lung disease, pleuritis, pericarditis, Sjogren syndrome, vasculitis, scleritis/episcleritis, Felty syndrome (RA + splenomegaly + neutropenia), amyloidosis. "
      "(2) Diagnosis. "
      "2010 ACR/EULAR classification criteria (score ≥6 of 10): joint involvement (1-5 points, weighted by number and size), serology (RF and/or anti-CCP — 0-3 points), acute-phase reactants (CRP, ESR — 0-1 point), duration ≥6 weeks (0-1 point). "
      "Anti-CCP is more specific than RF (95% specificity) and is associated with more erosive disease. "
      "Seronegative RA (RF and anti-CCP negative) occurs in 20-30% — diagnosis based on clinical pattern. "
      "Imaging: X-rays early may be normal; later show erosions, joint space narrowing, subluxation. Ultrasound and MRI are more sensitive for early inflammation and erosions — useful for diagnosis and monitoring. "
      "(3) Early aggressive treatment is the modern standard — 'treat-to-target' strategy with DMARDs started early (within 3 months) to prevent erosive joint damage. "
      "Conventional synthetic DMARDs (csDMARDs): "
      "(a) Methotrexate is first-line — start 7.5-15 mg weekly, escalate to 20-25 mg weekly as tolerated, always with folic acid 1 mg daily (or 5 mg weekly the day after methotrexate) to reduce side effects. Monitor CBC, LFTs, creatinine; watch for pulmonary toxicity (pneumonitis, fibrosis), hepatotoxicity, marrow suppression, teratogenicity (absolute contraindication in pregnancy). "
      "(b) Leflunomide, sulfasalazine, hydroxychloroquine are alternatives or combination partners. "
      "Biologic DMARDs and targeted synthetics for inadequate response to csDMARD: "
      "(a) TNF inhibitors — etanercept, adalimumab, infliximab, golimumab, certolizumab. "
      "(b) IL-6 inhibitors — tocilizumab, sarilumab. "
      "(c) CD20 — rituximab. "
      "(d) CTLA-4 — abatacept. "
      "(e) JAK inhibitors — tofacitinib, baricitinib, upadacitinib (black box warnings for thrombosis, cardiovascular events, malignancy — cautious use especially in older patients with risk factors). "
      "Bridge therapy with low-dose prednisone (5-10 mg daily) or intraarticular steroids while DMARDs take effect (usually 4-12 weeks). "
      "(4) Pre-DMARD screening and safety monitoring. "
      "Before any DMARD: TB (IGRA or PPD), hepatitis B and C, HIV, CBC, CMP, chest X-ray, and pregnancy test. "
      "Vaccinations before initiation (live vaccines contraindicated on biologics/JAK inhibitors): pneumococcal (PCV20 or PCV15+PPSV23), influenza annually, HBV if non-immune, HPV if appropriate age, recombinant zoster (Shingrix — safe on biologics). "
      "Ongoing monitoring: CBC and LFTs every 2-3 months on MTX, creatinine periodically, annual TB screening, cardiovascular risk assessment (RA increases CV mortality), and bone health evaluation (osteoporosis risk with disease and chronic steroid use). "
      "Treat-to-target: assess disease activity every 3 months with validated tools (DAS28, CDAI, SDAI); adjust therapy if not at low disease activity or remission. "
      "(5) Patient education and lifestyle. "
      "Smoking cessation (smoking increases RA risk, worsens disease, and reduces therapy response). "
      "Exercise (low-impact aerobic, strength, flexibility). "
      "Physical and occupational therapy. "
      "Diet and weight management — Mediterranean pattern has some evidence; weight loss reduces joint stress. "
      "Adherence counseling and mental health screening (depression and anxiety are common and worsen outcomes). "
      "Classic pitfalls: (a) delayed DMARD initiation — the 'window of opportunity' concept: early aggressive treatment (within 3-6 months) changes disease trajectory; delay allows irreversible erosions. "
      "(b) Over-reliance on NSAIDs and prednisone without DMARD — symptomatic control masks ongoing damage. "
      "(c) Missing pulmonary manifestations: ILD in RA is independent of methotrexate toxicity; PFTs and HRCT for new respiratory symptoms. "
      "(d) Cervical spine instability — atlantoaxial subluxation can cause cord compression; screen before surgery/intubation in long-standing RA. "
      "(e) Forgetting cardiovascular risk — RA is an independent CV risk factor; aggressive BP, lipid, diabetes, and lifestyle management."
    )
  },

  "ruptured-aaa": {
    "diagnosis": "Ruptured Abdominal Aortic Aneurysm (AAA)",
    "coachFinal": (
      "Diagnosis: ruptured abdominal aortic aneurysm — a surgical emergency with 80-90% overall mortality. "
      "Key learning: "
      "(1) Abdominal aortic aneurysm is a focal dilation of the abdominal aorta >=3 cm (normal ~2 cm); most are infrarenal. "
      "Risk factors: age >65, male sex (4-6x more common), smoking (strongest modifiable risk factor), hypertension, family history, and atherosclerotic disease. "
      "Women have lower AAA incidence but rupture at smaller diameters. "
      "Connective tissue disorders (Marfan, Ehlers-Danlos, Loeys-Dietz) and infectious (mycotic) aneurysms are less common causes. "
      "Rupture risk rises with diameter: <5.5 cm low; 5.5-6.5 cm ~10% annually; 7 cm ~30% annually. "
      "(2) Classic triad of rupture: abdominal or back pain, hypotension, and pulsatile abdominal mass — all three present in only 25-50%. "
      "Pain is often severe, sudden-onset, radiating to back, flank, or groin — may mimic renal colic (especially in elderly men with 'first' kidney stone — always consider AAA). "
      "Hemodynamically unstable patients may have classic shock signs (tachycardia, hypotension, pale, diaphoretic) or paradoxically be normotensive initially due to retroperitoneal tamponade. "
      "Contained rupture into the retroperitoneum may present with days of back or abdominal pain and hemodynamic instability; free intraperitoneal rupture typically has rapid hemodynamic collapse. "
      "Any elderly patient with acute abdominal or back pain and hemodynamic instability requires IMMEDIATE assessment for AAA. "
      "(3) Diagnostic approach depends on hemodynamic status. "
      "Unstable patient — bedside abdominal ultrasound (FAST-type exam) detects AAA with >95% sensitivity; free fluid suggests rupture. "
      "STRAIGHT TO OR with suspected ruptured AAA in unstable patient — do NOT delay for CT. "
      "Stable patient with suspected rupture — CT angiography of abdomen/pelvis is definitive, characterizes rupture site, extent, and suitability for endovascular repair. "
      "(4) Management. "
      "(a) Activate mass transfusion protocol — balanced 1:1:1 ratio of PRBCs, FFP, platelets. "
      "(b) Permissive hypotension ('hypotensive resuscitation') — target SBP ~70-90 until aortic control is achieved; over-resuscitation can blow off clot and worsen bleeding. "
      "(c) Vascular surgery consultation immediately — direct-to-OR for open repair OR angiographic suite for endovascular aneurysm repair (EVAR). "
      "EVAR has better short-term outcomes when anatomy is suitable; open repair for complex anatomy or when EVAR fails. "
      "(d) In the OR: proximal aortic control (supraceliac or infrarenal clamp), open aneurysmorrhaphy with graft interposition. "
      "(e) Postoperative ICU care: monitor for AKI, mesenteric ischemia, lower extremity ischemia, graft infection, abdominal compartment syndrome (especially after massive transfusion). "
      "(5) Prevention and screening. "
      "One-time AAA screening ultrasound: USPSTF recommends for men 65-75 who have ever smoked; selective screening for nonsmoking men and women with risk factors. "
      "Asymptomatic AAA <5.5 cm (or <5.0 cm in women): surveillance imaging based on size. "
      "Elective repair: AAA >=5.5 cm (or >=5.0 in women or with rapid growth), rapidly expanding (>0.5 cm in 6 months or >1 cm in 1 year), or symptomatic. "
      "Medical management: smoking cessation (most important), BP control, statin therapy, antiplatelet (ASA), aerobic exercise. "
      "Classic pitfalls: (a) missing ruptured AAA — diagnosed as 'renal colic' or 'back strain' in an elderly man, especially with hemodynamic instability. "
      "(b) Delaying for CT in an unstable patient — go to OR or angiography suite based on bedside ultrasound. "
      "(c) Over-resuscitating with crystalloid — dilutional coagulopathy and clot disruption worsen outcomes; use blood products and permissive hypotension. "
      "(d) Missing mycotic (infected) aneurysm — fever, back pain, elevated inflammatory markers, Salmonella, Staphylococcus aureus, or Streptococcus often; requires different management (prolonged antibiotics, extra-anatomic bypass, excision). "
      "(e) Forgetting to screen first-degree relatives of AAA patients — 15-20% have AAA themselves."
    )
  },

  "sbo-with-strangulation": {
    "diagnosis": "Small Bowel Obstruction with Strangulation",
    "coachFinal": (
      "Diagnosis: small bowel obstruction (SBO) with strangulation — a surgical emergency. "
      "Key learning: "
      "(1) Small bowel obstruction is a common surgical problem with etiology distribution: postoperative adhesions (most common in developed world, >60% of cases), hernia (next most common — and the most likely cause in a patient with no prior surgery), malignancy (primary or metastatic, especially peritoneal carcinomatosis), Crohn disease strictures, volvulus, intussusception, gallstone ileus, bezoar, congenital (malrotation, Meckel). "
      "Classification: simple (partial or complete, no vascular compromise) vs complicated/strangulated (vascular compromise — bowel ischemia, infarction, perforation). "
      "(2) Strangulation is a key clinical distinction that drives urgency. "
      "Clinical warning signs: severe constant (rather than colicky) abdominal pain, peritoneal signs (guarding, rebound), fever, tachycardia, metabolic acidosis, elevated lactate, and leukocytosis. "
      "Imaging features of strangulation: mesenteric edema, pneumatosis intestinalis, portal venous gas, reduced bowel wall enhancement, mesenteric fluid, closed-loop obstruction (U-shaped loop with converging mesenteric vessels — 'whirlpool sign' of volvulus), and free fluid. "
      "Simple obstruction: colicky pain, distension, vomiting, obstipation, high-pitched bowel sounds initially (then decreased), and the classic dilated loops with air-fluid levels on imaging without strangulation markers. "
      "(3) Presentation and workup. "
      "Classic tetrad: abdominal pain, distension, vomiting (bilious in high obstructions, feculent/dark in more distal/longer-standing), and obstipation (inability to pass stool or gas). "
      "Proximal/jejunal obstruction: vomiting predominant, less distension. "
      "Distal/ileal: distension predominant, late vomiting. "
      "Physical exam: distension, tympany, high-pitched bowel sounds early (absent late), tenderness, previous scars (suggests adhesions), hernia exam (always palpate abdominal, inguinal, and femoral hernia orifices — missed incarcerated hernia is a common pitfall). "
      "Imaging: CT abdomen/pelvis with IV contrast is standard — identifies obstruction level (transition point), cause, completeness (complete vs partial), and complications (strangulation, perforation). "
      "Plain X-rays (upright abdomen + chest): air-fluid levels, dilated loops, but less sensitive and specific than CT. "
      "Labs: CBC (leukocytosis), CMP, lactate (strangulation marker), coagulation, type and cross. "
      "(4) Management. "
      "Initial: IV fluid resuscitation, NPO, nasogastric decompression (important for symptom relief, aspiration prevention, and bowel rest), correction of electrolyte abnormalities, broad-spectrum antibiotics if strangulation suspected, pain control, anti-emetics. "
      "Partial SBO without strangulation: conservative (non-operative) management with NG decompression — 70-80% resolve in 48-72 hours. "
      "Gastrografin challenge: oral water-soluble contrast can be therapeutic and prognostic — if reaches colon within 24 hours, likely will resolve without surgery. "
      "OPERATIVE INDICATIONS — EMERGENT: "
      "(a) Signs of strangulation (peritonitis, sepsis, tachycardia, fever, acidosis, lactate elevation, concerning CT findings). "
      "(b) Complete obstruction with no clinical improvement on conservative management. "
      "(c) Closed-loop obstruction (high risk of strangulation). "
      "(d) Incarcerated/strangulated hernia (reduce in OR under direct vision, not blindly). "
      "Surgery: lysis of adhesions for adhesive SBO, hernia repair, resection of ischemic bowel, and diversion or primary anastomosis depending on contamination and patient factors. "
      "(5) Postoperative and prevention. "
      "Adhesive SBO recurs in 15-30% even after surgery — recurrent conservative management is the norm unless strangulation. "
      "Counsel patients about warning signs for early presentation. "
      "Classic pitfalls: (a) missing incarcerated groin hernia in an elderly patient with SBO — always examine the hernia orifices in every obstruction. "
      "(b) Operating too late on strangulation — every hour of untreated strangulation increases resection length and mortality. "
      "(c) Attributing to ileus rather than mechanical obstruction in a postoperative patient — CT with contrast clarifies; persistent NG output beyond expected ileus resolution (usually 3-5 days) warrants re-imaging. "
      "(d) Forgetting malignancy as the cause — any SBO without clear adhesions, hernia, or prior surgery warrants evaluation for occult malignancy (peritoneal carcinomatosis, primary small bowel tumor). "
      "(e) Not optimizing medically before surgery — correct dehydration, electrolyte derangements, and anemia when time allows; urgent cases still need rapid resuscitation."
    )
  },

}


def enrich(slug, e):
    path = os.path.join(EMR_DIR, f'{slug}.js')
    if not os.path.exists(path):
        print(f'  SKIP (missing) {slug}'); return False
    with open(path) as f:
        src = f.read()
    header_match = re.match(r'^(.*?)window\.EMR_DATA\s*=', src, re.DOTALL)
    header = header_match.group(1) if header_match else ''
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m:
        print(f'  PARSE ERROR {slug}'); return False
    try:
        data = json.loads(m.group(1))
    except Exception as ex:
        print(f'  JSON ERROR {slug}: {ex}'); return False

    if not isinstance(data.get('meta'), dict):
        data['meta'] = {}
    if e.get('diagnosis'):
        data['meta']['diagnosis'] = e['diagnosis']
    data['meta']['caseId'] = slug

    if not isinstance(data.get('guided'), dict):
        data['guided'] = {}
    if not isinstance(data['guided'].get('coachPrompts'), dict):
        data['guided']['coachPrompts'] = {}
    if 'coachFinal' in e:
        data['guided']['coachPrompts']['final'] = e['coachFinal']

    with open(path, 'w') as f:
        if header and not header.endswith('\n'):
            header = header + '\n'
        f.write(f'{header}window.EMR_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n')
    return True


if __name__ == '__main__':
    done = 0
    for s, e in ENRICHMENTS.items():
        if enrich(s, e):
            print(f'OK {s}')
            done += 1
    print(f'\nBatch 31B: {done}/{len(ENRICHMENTS)} enriched')
