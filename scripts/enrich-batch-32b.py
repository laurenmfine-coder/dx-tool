#!/usr/bin/env python3
"""Batch 32 — Part B: 7 cases.

Cases: siadh, simple-sbo, sle-flare-with-cytopenias, small-bowel-volvulus,
       spinal-metastasis, spontaneous-bacterial-peritonitis, staphylococcal-scalded-skin-syndrome
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "siadh": {
    "diagnosis": "SIADH — Drug-Induced (Sertraline + HCTZ) with Symptomatic Hyponatremia",
    "coachFinal": (
      "Diagnosis: syndrome of inappropriate antidiuretic hormone secretion (SIADH), drug-induced from sertraline plus HCTZ, with symptomatic hyponatremia (Na 121). "
      "Key learning: "
      "(1) Hyponatremia evaluation starts with serum osmolality to identify tonicity, then volume status to narrow the differential. "
      "Hypotonic hyponatremia (serum osm <275 mOsm/kg) — the most common — is further divided into hypovolemic (true volume depletion — GI losses, diuretics, cerebral salt wasting, adrenal insufficiency), euvolemic (SIADH, hypothyroidism, glucocorticoid deficiency, psychogenic polydipsia, beer potomania, 'tea and toast' diet), and hypervolemic (heart failure, cirrhosis, nephrotic syndrome, CKD). "
      "Isotonic hyponatremia (pseudohyponatremia from hyperlipidemia or hyperproteinemia) and hypertonic hyponatremia (hyperglycemia, mannitol) must be ruled out. "
      "(2) SIADH diagnostic criteria: euvolemia, hypotonic hyponatremia (serum osm <275), inappropriately concentrated urine (urine osm >100), urine sodium >20-30 mmol/L (reflecting intact tubular sodium handling), normal thyroid and adrenal function, and absence of diuretic use. "
      "The classic fingerprint: low serum osm with inappropriately high urine osm. "
      "(3) SIADH causes are organized into four categories: "
      "(a) CNS — stroke, hemorrhage, trauma, infection, tumor, surgery, psychosis. "
      "(b) Pulmonary — pneumonia (especially Legionella, Mycoplasma, TB), abscess, malignancy (especially small cell lung cancer — ectopic ADH production), positive pressure ventilation. "
      "(c) Drugs — SSRIs (the most common drug cause; sertraline, fluoxetine, citalopram, escitalopram, venlafaxine), carbamazepine and oxcarbazepine, chlorpropamide, ecstasy (MDMA), cyclophosphamide, vincristine, opioids, NSAIDs. "
      "HCTZ is NOT classic SIADH but can cause hyponatremia by a similar mechanism (impaired free water excretion plus hypovolemia-stimulated ADH). "
      "(d) Malignancy (ectopic ADH production) — small cell lung cancer, head and neck cancer, others. "
      "(4) Management depends on severity and acuity. "
      "(a) Severe symptomatic hyponatremia (seizures, obtundation, coma, respiratory failure) — hypertonic 3% saline 100-150 mL IV bolus, repeat up to 3 times, targeting 4-6 mEq/L rise in first 4-6 hours to reverse symptoms. "
      "(b) Chronic or less severe — fluid restriction (usually <1 L/day) as first-line, often sufficient. "
      "(c) Address the cause: stop offending drug when possible (sertraline and HCTZ in this case; coordinate with psychiatry for depression continuation), treat underlying infection/malignancy, correct hormone deficiency. "
      "(d) Pharmacologic adjuncts when fluid restriction inadequate: salt tablets (supplement sodium), urea (promotes free water excretion), loop diuretics (in SIADH specifically when urine osm very high), vasopressin antagonists (tolvaptan, conivaptan — effective but expensive, black box for overly rapid correction; reserved for selected cases). "
      "(5) Correction rate is critical. "
      "Sodium correction should NOT exceed 8-10 mEq/L in the first 24 hours (6 in high-risk patients for ODS — chronic hyponatremia, alcohol use disorder, malnutrition, hypokalemia, advanced liver disease). "
      "Overly rapid correction causes osmotic demyelination syndrome (ODS), a devastating, often irreversible neurologic injury presenting 2-7 days later with quadriparesis, dysphagia, dysarthria, locked-in syndrome. "
      "Recheck sodium every 2 hours during active correction; if overcorrection occurs, reverse with D5W or DDAVP. "
      "Classic pitfalls: (a) correcting too rapidly, causing ODS. "
      "(b) Giving normal saline to SIADH patient and causing paradoxical worsening — in SIADH, the kidneys excrete the sodium but retain the free water. "
      "(c) Missing underlying malignancy (SCLC) in a patient with new SIADH — chest imaging is appropriate. "
      "(d) Stopping antidepressant abruptly without plan — work with psychiatry to transition to alternative (mirtazapine has lower hyponatremia risk). "
      "(e) Not counseling about sick-day rules for diuretic users — vomiting, diarrhea, decreased intake may require holding diuretic."
    )
  },

  "simple-sbo": {
    "diagnosis": "Simple Small Bowel Obstruction (Adhesive)",
    "coachFinal": (
      "Diagnosis: simple (uncomplicated) adhesive small bowel obstruction without strangulation. "
      "Key learning: "
      "(1) Adhesive small bowel obstruction is the most common cause of SBO in developed countries, accounting for >60% of cases. "
      "Most patients have had prior abdominal surgery — even decades earlier — with adhesions forming fibrous bands that kink, twist, or constrict the small bowel. "
      "Simple obstruction has no vascular compromise and is distinguished clinically and radiographically from strangulation (which mandates surgery). "
      "(2) Presentation tetrad: abdominal pain (colicky), distension, vomiting (bilious in proximal, feculent/dark in distal or long-standing), and obstipation. "
      "Physical exam findings depend on location and duration — high-pitched 'tinkling' bowel sounds early, absent late; distension (more pronounced with distal obstruction); tenderness without peritoneal signs in simple obstruction. "
      "Examine for hernias at every evaluation — always. "
      "(3) Imaging. "
      "CT abdomen/pelvis with IV contrast (oral contrast often omitted or water-soluble gastrografin used): identifies obstruction level (transition point), cause, completeness, and looks for strangulation features (bowel wall thickening, mesenteric edema, closed loop, reduced enhancement, free fluid, pneumatosis, portal venous gas). "
      "Plain radiographs: dilated small bowel loops, air-fluid levels in step-ladder pattern — less sensitive and specific than CT, useful when CT not immediately available. "
      "Upright chest X-ray: evaluates for free air suggesting perforation. "
      "Labs: CBC, CMP, lactate (surrogate for strangulation), coagulation, type and screen. "
      "(4) Conservative (non-operative) management is appropriate for simple SBO without strangulation — succeeds in 70-80% of first-episode adhesive SBO. "
      "(a) NPO with NG decompression (relieves distension, symptoms, and aspiration risk). "
      "(b) IV isotonic crystalloid replacement and correction of electrolyte abnormalities (hypokalemia, hypochloremic metabolic alkalosis from NG losses common). "
      "(c) Serial abdominal exam and vital signs monitoring, often every few hours. "
      "(d) Pain control with judicious opioids (avoid paralytic ileus). "
      "(e) No antibiotics routinely for simple obstruction. "
      "(f) GASTROGRAFIN CHALLENGE — oral water-soluble contrast (100 mL diluted) is both prognostic and potentially therapeutic: if contrast reaches the colon on repeat abdominal X-ray within 8-24 hours, the obstruction is likely to resolve without surgery; if it does not progress, operation is more likely. "
      "Some studies show gastrografin itself may hasten resolution by osmotic effect. "
      "(5) Operative indications (stop conservative management and operate): "
      "(a) Signs of strangulation (peritonitis, fever, tachycardia, acidosis, lactate elevation, concerning CT findings). "
      "(b) Complete obstruction with no clinical improvement after 24-48 hours of NG decompression. "
      "(c) Closed-loop obstruction. "
      "(d) Incarcerated hernia. "
      "(e) Progressive abdominal distension, worsening pain, or hemodynamic changes. "
      "Surgical approach: laparoscopic or open adhesiolysis; resection if bowel is non-viable. "
      "Post-operatively, adhesion barriers (Seprafilm, etc.) may reduce recurrence. "
      "Classic pitfalls: (a) delaying surgery for strangulation — decompensation is rapid; maintain low threshold for operative conversion. "
      "(b) Missing hernia in the abdominal wall or groin — always examine. "
      "(c) Attributing persistent symptoms to 'ileus' after surgery beyond typical timeframe (3-5 days) — CT for re-obstruction. "
      "(d) Not providing education about future adhesive obstruction risk — lifelong 10-30% recurrence, warning signs to return. "
      "(e) Forgetting that obstruction in a patient without prior surgery should raise suspicion for malignancy, hernia, or less common causes — broader workup warranted."
    )
  },

  "sle-flare-with-cytopenias": {
    "diagnosis": "SLE Flare with Evans Syndrome (AIHA + Immune Thrombocytopenia)",
    "coachFinal": (
      "Diagnosis: systemic lupus erythematosus (SLE) flare with Evans syndrome — concurrent autoimmune hemolytic anemia (AIHA) and immune thrombocytopenia (ITP). "
      "Key learning: "
      "(1) SLE is a multi-system autoimmune disease with highly variable presentation. "
      "2019 EULAR/ACR classification criteria: ANA >=1:80 (entry criterion), then weighted additive criteria across domains: constitutional (fever), hematologic (leukopenia, thrombocytopenia, AIHA), neuropsychiatric (delirium, psychosis, seizure), mucocutaneous (non-scarring alopecia, oral ulcers, subacute cutaneous or discoid lupus, acute cutaneous lupus), serosal (pleural or pericardial effusion, acute pericarditis), musculoskeletal (joint involvement), renal (proteinuria, renal biopsy class II-VI), and immunologic (antiphospholipid antibodies, low complement, anti-dsDNA or anti-Sm). "
      "Classification score >=10 with ANA >=1:80 = classified as SLE. "
      "Diagnosis remains clinical; criteria are for research and classification. "
      "(2) Hematologic manifestations are common and often serious. "
      "AIHA — warm autoantibody type (IgG, reacts at body temperature, positive direct antiglobulin test for IgG and sometimes C3). "
      "Presents with anemia, jaundice, splenomegaly, elevated LDH, indirect bilirubin, and reticulocyte count; low haptoglobin. "
      "ITP — isolated thrombocytopenia with normal-appearing megakaryocytes on marrow, risk of bleeding proportional to platelet count (bleeding risk rises steeply <20,000). "
      "Evans syndrome — simultaneous AIHA and ITP (sometimes with neutropenia) — can be primary/idiopathic or secondary to SLE, lymphoproliferative disease, CVID, or infection. "
      "(3) Treatment of SLE flare with significant cytopenias. "
      "(a) High-dose corticosteroids — prednisone 1 mg/kg/day (or IV methylprednisolone pulse 500-1,000 mg daily x 3 days for severe or life-threatening disease). "
      "Response typically in 1-3 weeks; taper begins when counts stabilize. "
      "(b) IVIG 1-2 g/kg over 2-5 days — rapid effect on platelets and hemolysis, useful for acute life-threatening cytopenias or bleeding. "
      "(c) Steroid-sparing/maintenance: mycophenolate mofetil, azathioprine, cyclophosphamide (for severe organ involvement), rituximab (highly effective for refractory Evans and SLE flares). "
      "(d) Splenectomy — third-line for refractory ITP, rarely used first-line for SLE. "
      "(e) Hydroxychloroquine — background SLE therapy, always continued unless retinal toxicity or severe adverse effect; reduces flares, improves survival, reduces thrombosis risk. "
      "(4) Supportive care and monitoring. "
      "Transfusion: packed red cells for symptomatic anemia (cross-matching complex in AIHA — the 'best match' may still have hemolysis; transfuse based on clinical need); platelets for bleeding (platelets are rapidly consumed in ITP and give only transient benefit). "
      "Thromboprophylaxis is important despite thrombocytopenia — SLE has baseline thrombotic risk and antiphospholipid antibodies (lupus anticoagulant, anti-cardiolipin, anti-beta2-GP1) add further risk; anticoagulation decisions are individualized. "
      "Infection surveillance — immunosuppression and disease itself increase infection risk; prophylaxis for PCP in high-dose steroid and immunosuppressed patients. "
      "Screen for SLE nephritis (UA, urine protein, creatinine), pulmonary involvement (pulmonary hemorrhage, shrinking lung), neuropsychiatric SLE, and serositis. "
      "Monitor dsDNA and complement (C3, C4) for disease activity tracking. "
      "(5) Classic pitfalls: (a) missing antiphospholipid syndrome in SLE — can cause thrombosis, recurrent miscarriage, stroke, livedo reticularis; always test for antiphospholipid antibodies at diagnosis and with any thrombotic event. "
      "(b) Under-appreciating infection risk in immunosuppressed SLE patients — fever in a lupus patient on cyclophosphamide or high-dose steroids needs infection workup, not automatic assumption of flare. "
      "(c) Over-transfusing red cells in AIHA — only give for clinical need, not number. "
      "(d) Abruptly stopping hydroxychloroquine during flare — continues to provide long-term benefit and should not be discontinued. "
      "(e) Not addressing cardiovascular risk — SLE patients have accelerated atherosclerosis; aggressive management of BP, lipids, smoking."
    )
  },

  "small-bowel-volvulus": {
    "diagnosis": "Small Bowel Volvulus (Internal Hernia Post-RYGB)",
    "coachFinal": (
      "Diagnosis: small bowel volvulus from internal hernia following Roux-en-Y gastric bypass (RYGB) surgery. "
      "Key learning: "
      "(1) Post-bariatric internal hernia is a potentially catastrophic complication, occurring in up to 3-5% of RYGB patients, typically 1-2 years post-operatively (coinciding with weight loss that creates mesenteric defects). "
      "The three potential spaces: Petersen space (between the Roux limb mesentery and transverse colon mesentery), mesocolic (transverse mesocolic) defect from the retrocolic Roux limb, and jejunojejunostomy mesenteric defect. "
      "Weight loss reduces mesenteric fat, opening these spaces and allowing bowel herniation and volvulus. "
      "(2) Presentation can be subtle and intermittent — cramping abdominal pain after meals, vomiting, bloating, intermittent obstruction. "
      "Recurrent 'vague abdominal pain' in a post-bariatric patient warrants urgent evaluation — delay can be fatal from ischemia and infarction. "
      "Acute presentation: severe abdominal pain, vomiting, distension, hemodynamic instability from bowel ischemia. "
      "Lab abnormalities: leukocytosis, elevated lactate (late), metabolic acidosis. "
      "(3) Imaging. "
      "CT abdomen/pelvis with IV contrast is the imaging of choice: signs of internal hernia include mesenteric swirl ('whirlpool sign' of rotating mesentery — most sensitive), clustered small bowel loops in an abnormal location, mesenteric vessel abnormalities (SMA/SMV rotated), displacement of jejunojejunostomy, twisted mesentery, and dilated Roux or biliopancreatic limb. "
      "Signs of ischemia: bowel wall thickening, pneumatosis, portal venous gas, reduced enhancement, free fluid. "
      "Normal CT does NOT rule out internal hernia — if clinical suspicion is high, proceed to operative exploration. "
      "(4) Management. "
      "Internal hernia is a SURGICAL EMERGENCY. "
      "Laparoscopic or open exploration with reduction of the herniated loop, assessment of bowel viability, closure of mesenteric defects (all three spaces should be evaluated and closed, regardless of which was involved — done prophylactically at all future bariatric operations now). "
      "Ischemic bowel requires resection, which can be devastating in a post-bypass patient because it shortens the functional intestine and compounds malabsorption. "
      "NPO, IV fluids, NG decompression, broad-spectrum antibiotics for perforation/ischemia. "
      "(5) Post-bariatric surgical complications beyond internal hernia. "
      "Other complications to consider in post-bariatric abdominal pain: marginal ulcer (at gastrojejunostomy — endoscopy), anastomotic stricture, cholelithiasis (rapid weight loss), dumping syndrome (carbohydrate-triggered), bariatric-specific vitamin deficiencies (B12, iron, thiamine, folate, calcium, vitamin D), nephrolithiasis (oxalate), and small intestinal bacterial overgrowth. "
      "Emergency providers should know: always ask about prior bariatric surgery, have low threshold for surgical consultation in any post-bariatric abdominal pain, and consider internal hernia even with unremarkable imaging. "
      "Classic pitfalls: (a) attributing post-bariatric abdominal pain to dumping syndrome or 'gas' without imaging — internal hernia can be intermittent and progress quickly. "
      "(b) Being reassured by a 'normal' CT — internal hernia is subtle; get a radiologist familiar with bariatric imaging. "
      "(c) Not closing all three mesenteric defects at index bariatric operation — primary prevention is key. "
      "(d) Missing ischemic bowel at exploration — always inspect entire small bowel carefully, warm compresses, check pulsation and peristalsis before closing. "
      "(e) Forgetting to educate bariatric patients about warning symptoms and the need for prompt evaluation of any concerning abdominal pain — they often minimize symptoms, attributing to 'normal' post-surgical changes."
    )
  },

  "spinal-metastasis": {
    "diagnosis": "Spinal Metastasis with Pathologic Fracture (ER+ Breast Cancer)",
    "coachFinal": (
      "Diagnosis: spinal metastasis with pathologic vertebral fracture from ER+ breast cancer. "
      "Key learning: "
      "(1) Spine is the most common site of bone metastases (70% of cases), with thoracic spine affected most often. "
      "Common primaries: breast, prostate, lung, kidney, thyroid, myeloma (MBL-TKP). "
      "Breast cancer in particular has a high predilection for bone (about 70% of advanced breast cancer develops bony metastases). "
      "Bone mets produce three types of lesions: lytic (destructive — breast, lung, kidney, thyroid, myeloma), blastic/sclerotic (bone-forming — prostate, small cell lung), or mixed (breast often mixed). "
      "(2) Clinical presentation. "
      "Back pain is the most common presenting symptom — often constant, worse at night and rest, unrelieved by position (distinct from mechanical back pain which is worse with activity). "
      "Red flags for malignant back pain: age >50, history of cancer, unexplained weight loss, unrelieved by rest, nocturnal pain, progressive neurologic deficits. "
      "Pathologic fracture presents with sudden worsening pain and potentially neurologic deficit. "
      "EPIDURAL SPINAL CORD COMPRESSION (ESCC) — the feared complication — presents with back pain (usually first), progressing to motor weakness, sensory changes, bladder or bowel dysfunction, gait disturbance. "
      "A patient with back pain in a cancer patient requires MRI of the entire spine, not just the symptomatic level, because multiple-level disease is common. "
      "(3) Diagnostic workup. "
      "MRI with contrast of the entire spine is the gold standard — shows vertebral body involvement, paraspinal extension, epidural disease, cord compression. "
      "CT for bony anatomic detail and stability assessment; bone scan for whole-body survey; PET-CT for staging; CT-guided or open biopsy when primary unknown or histology needed. "
      "Labs: CBC, CMP, calcium (watch for hypercalcemia of malignancy), alkaline phosphatase, tumor markers (CEA, CA 15-3, PSA, thyroglobulin depending on primary), SPEP/UPEP/free light chains for myeloma. "
      "(4) Management is multidisciplinary. "
      "(a) Immediate: dexamethasone 10 mg IV load then 4 mg q6h for suspected or confirmed ESCC (reduces edema and improves neurologic outcomes); emergent neurosurgical and radiation oncology consultation. "
      "Pain control. "
      "(b) Structural stabilization: surgical decompression and instrumented fusion (especially for ESCC with good performance status, oligometastatic disease, radioresistant tumor — RCC, sarcoma) or vertebroplasty/kyphoplasty (percutaneous cement augmentation for painful vertebral compression without cord compromise). "
      "The Patchell trial (2005) established surgery followed by radiation as superior to radiation alone for spinal cord compression in selected patients. "
      "SINS score (Spinal Instability Neoplastic Score) stratifies stability. "
      "(c) Radiation: conventional external beam for most cases; stereotactic body radiotherapy (SBRT) for oligometastatic or radioresistant tumors. "
      "(d) Systemic therapy directed at the primary: hormone therapy for ER+ breast cancer (aromatase inhibitors like letrozole, anastrozole; tamoxifen in pre-menopausal; CDK4/6 inhibitors ribociclib/palbociclib/abemaciclib added), chemotherapy, targeted therapy, immunotherapy per specific cancer guidelines. "
      "(e) Bone-targeted therapy: zoledronic acid or denosumab (every 4 weeks initially) reduces skeletal-related events (SREs — pathologic fracture, cord compression, need for radiation or surgery to bone, hypercalcemia). "
      "(f) Supportive: pain management (opioids, adjuvants like gabapentin for neuropathic), physical and occupational therapy, DVT prophylaxis, palliative care involvement early. "
      "(5) Classic pitfalls: (a) delaying MRI in a cancer patient with new back pain — ESCC window is hours; function lost is often not regained. "
      "(b) Under-treating pain in metastatic cancer — liberal opioid use with stool regimen is appropriate; bone pain often responds to steroids and radiation as well. "
      "(c) Forgetting to initiate bone-targeted therapy at diagnosis of bony metastases — reduces SREs by ~50%. "
      "(d) Missing hypercalcemia of malignancy in breast cancer — check calcium, address urgently if elevated (see hypercalcemia case). "
      "(e) Not involving palliative care early — improves quality of life, symptom control, and sometimes survival; should be integrated with oncologic care, not an alternative."
    )
  },

  "spontaneous-bacterial-peritonitis": {
    "diagnosis": "Spontaneous Bacterial Peritonitis (E. coli) in Decompensated Cirrhosis",
    "coachFinal": (
      "Diagnosis: spontaneous bacterial peritonitis (SBP) from E. coli in a patient with decompensated cirrhosis and low-protein ascites. "
      "Key learning: "
      "(1) SBP is bacterial infection of ascitic fluid without an intra-abdominal surgical source, occurring in 10-30% of patients hospitalized with cirrhotic ascites and carrying 20-40% in-hospital mortality. "
      "Pathogenesis: translocation of gut bacteria across an edematous intestinal wall into mesenteric lymph nodes, bacteremia, and seeding of ascitic fluid with impaired peritoneal opsonization (low ascitic fluid protein and complement). "
      "Risk factors: advanced cirrhosis (Child B/C), low ascitic fluid protein (<1.0-1.5 g/dL is high risk), prior SBP (recurrence rate 40-70% within 1 year without prophylaxis), variceal hemorrhage, PPI use, and hospitalization. "
      "(2) Presentation is often subtle in decompensated cirrhosis — classic peritonitis signs (rebound, rigidity) are uncommon because tension ascites masks the exam. "
      "Symptoms: fever, abdominal pain, tender ascites, worsening encephalopathy (a very common presentation — mental status change in cirrhosis should prompt SBP workup), GI bleeding, deterioration in renal or liver function. "
      "Up to 30% are clinically silent, detected only on routine paracentesis of new or worsening ascites. "
      "(3) Diagnostic paracentesis is mandatory at admission for any cirrhotic with ascites and again if clinical deterioration. "
      "Ascitic fluid analysis: "
      "(a) Cell count with differential — PMN >=250 cells/mm³ is diagnostic of SBP (treat immediately). "
      "(b) Culture — inoculate blood culture bottles at the bedside (higher yield than swabbing). "
      "(c) Total protein, albumin, glucose, LDH — help distinguish SBP (typical: protein <1 g/dL, glucose similar to serum, LDH <225) from secondary bacterial peritonitis (multiple organisms, glucose <50, LDH > serum LDH, protein >1 — suggests perforation or abscess needing imaging and possibly surgery). "
      "(d) Gram stain — often negative in SBP (low bacterial load). "
      "(e) Calculate SAAG (serum-ascites albumin gradient) >=1.1 g/dL confirms portal hypertensive etiology. "
      "(4) Treatment. "
      "Empiric IV ceftriaxone 2 g daily (or cefotaxime 2 g IV q8h) for 5-7 days is standard first-line — covers the typical gram-negative enteric organisms. "
      "Carbapenem for healthcare-associated SBP, recent broad-spectrum antibiotic use, or known resistance. "
      "Piperacillin-tazobactam or carbapenem plus vancomycin for severe/nosocomial cases. "
      "ADD IV ALBUMIN 1.5 g/kg on day 1 and 1 g/kg on day 3 — reduces hepatorenal syndrome and mortality in SBP; consistent mortality benefit in trials. "
      "Repeat paracentesis at 48 hours: PMN should decrease by at least 25%; if not, consider resistance, secondary bacterial peritonitis, or inadequate source control. "
      "(5) Prophylaxis and long-term management. "
      "Secondary prophylaxis (prior SBP): norfloxacin 400 mg daily (or ciprofloxacin, TMP-SMX) reduces recurrence. "
      "Primary prophylaxis: indicated for low ascitic protein (<1.5 g/dL) with advanced liver disease or renal dysfunction; and during GI hemorrhage (3-7 days of ceftriaxone or oral quinolone). "
      "Liver transplant evaluation — SBP is a decompensation event and indicates transplant consideration. "
      "Avoid non-selective beta-blockers in advanced refractory ascites or renal dysfunction (risk of paracentesis-induced circulatory dysfunction). "
      "Non-adherence to dietary salt restriction, diuretics (spironolactone + furosemide combination), and large-volume paracentesis with albumin replacement for refractory ascites. "
      "Classic pitfalls: (a) not performing diagnostic paracentesis in every cirrhotic patient admitted with ascites — missed SBP is a frequent cause of avoidable mortality. "
      "(b) Giving nephrotoxins (aminoglycosides, contrast, NSAIDs) or ACE-I/ARB in hepatorenal syndrome setting — worsens AKI. "
      "(c) Forgetting albumin infusion — reduces HRS and mortality. "
      "(d) Not starting prophylaxis after index SBP or GI hemorrhage. "
      "(e) Missing secondary bacterial peritonitis (appendicitis, perforation, abscess) — high PMN, polymicrobial culture, protein >1 g/dL, imaging and often surgical intervention needed."
    )
  },

  "staphylococcal-scalded-skin-syndrome": {
    "diagnosis": "Staphylococcal Scalded Skin Syndrome (SSSS)",
    "coachFinal": (
      "Diagnosis: staphylococcal scalded skin syndrome (SSSS) with generalized exfoliation in a 2-year-old child with eczema and positive Nikolsky sign. "
      "Key learning: "
      "(1) SSSS is a toxin-mediated exfoliative dermatitis caused by exfoliative toxins A and B (ETA, ETB) produced by Staphylococcus aureus. "
      "The toxins are serine proteases that cleave desmoglein-1 in the superficial epidermis (granular layer), causing superficial blistering and exfoliation. "
      "Predominantly affects children under 5 (especially infants and neonates) due to immature renal clearance of toxin and lack of antibody; adults affected almost exclusively have renal failure or immunocompromise. "
      "Mortality in children is low (2-5%) with modern treatment; adults have much higher mortality (up to 60%). "
      "(2) Presentation. "
      "Prodrome: fever, irritability, malaise, sore throat, conjunctivitis. "
      "Characteristic skin findings: diffuse tender erythema (starts around the face, neck, axillae, groin), rapidly progressing to flaccid bullae that rupture leaving denuded 'scalded' areas. "
      "NIKOLSKY SIGN positive — gentle lateral pressure on skin causes separation of the superficial epidermis. "
      "Mucous membranes are characteristically SPARED (distinguishes from Stevens-Johnson syndrome and TEN, which involve mucosa). "
      "Flexural accentuation, perioral crusting ('radial fissures around mouth'), and peri-orifice crusting are typical. "
      "(3) Differential diagnosis. "
      "(a) Toxic epidermal necrolysis (TEN)/Stevens-Johnson syndrome — drug-induced, MUCOSAL involvement, full-thickness epidermal necrosis (biopsy shows subepidermal split at basement membrane, whereas SSSS is intraepidermal at granular layer). SJS/TEN is drug-induced. Critical distinction because management differs (SSSS responds to antibiotics; TEN requires ICU burn-level care and drug withdrawal). "
      "(b) Kawasaki disease — fever ≥5 days plus mucosal changes, rash, peripheral changes, lymphadenopathy, conjunctivitis; treated with IVIG. "
      "(c) Scarlet fever — GAS toxin-mediated, 'sandpaper rash', strawberry tongue, does not exfoliate to the extent of SSSS. "
      "(d) Bullous impetigo — localized form of SSSS (same toxins, focal infection with local blister without systemic exfoliation). "
      "(e) Staphylococcal toxic shock syndrome — fever, hypotension, diffuse erythroderma, multi-organ involvement. "
      "Skin biopsy with immediate frozen section can rapidly distinguish SSSS (intraepidermal split) from TEN (subepidermal/basement membrane split). "
      "(4) Management. "
      "(a) IV antibiotic therapy — empiric nafcillin or oxacillin; vancomycin if MRSA suspected or severe illness; add clindamycin (suppresses toxin production — similar to its use in streptococcal toxic shock). Adjust based on cultures. "
      "Duration 7-10 days typically. "
      "(b) Supportive care — fluid and electrolyte management (can lose fluids through denuded skin like a burn), temperature control, nutrition, pain control, and meticulous wound care. "
      "(c) Do NOT use topical steroids (can worsen infection). "
      "(d) Identify and eradicate source of S. aureus — look for skin infection, nasopharyngeal colonization, surgical wound, or (in neonates) umbilical colonization. "
      "Treat close contacts with positive colonization. "
      "(e) Admission to pediatric unit or burn unit for severe cases; ICU for septic shock or extensive skin loss. "
      "(5) Healing and outcome. "
      "Because the split is superficial (intraepidermal, above the basement membrane), healing is rapid and without scarring — typically within 1-2 weeks. "
      "Contrast with TEN, where full-thickness necrosis leaves residual scarring, dyspigmentation, and potential mucosal stricturing. "
      "Classic pitfalls: (a) misdiagnosing SSSS as TEN/SJS and stopping medications unnecessarily while missing the bacterial source. "
      "(b) Missing a focal staphylococcal infection source — look for impetigo, umbilical cord infection, surgical wound, conjunctivitis (most common in neonates). "
      "(c) Not isolating the patient — SSSS is contagious (S. aureus spread), contact precautions while infectious. "
      "(d) Over-using topical antimicrobials on denuded skin — can impair healing; gentle wound care and systemic antibiotics are the priority. "
      "(e) Forgetting to consider adult SSSS in dialysis patients or other immunocompromised adults with unexplained erythroderma and exfoliation."
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
    print(f'\nBatch 32B: {done}/{len(ENRICHMENTS)} enriched')
