#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"erythema-multiforme-major-v2": {
  "diagnosis": "Erythema Multiforme Major — HSV-Triggered, Mucosal Involvement, Antiviral Suppression Required",
  "problems": [
    {"problem":"Erythema multiforme major — HSV-induced","icd":"L51.1","onset":"2024","status":"Active","notes":"Tyler Brooks, 26M — recurrent EM following HSV-1 oral outbreaks. Target lesions + oral mucosal erosions."},
    {"problem":"Oral mucosal erosions — pain with eating and swallowing","icd":"K12.1","onset":"2024","status":"Active","notes":"Hemorrhagic lip crusting, painful oral erosions. Distinct from SJS — <10% BSA involvement."},
    {"problem":"Recurrent HSV-triggered EM — suppressive therapy needed","icd":"B00.9","onset":"2022","status":"Active","notes":"Third episode in 2 years. Each episode follows HSV outbreak by 1-3 weeks. Acyclovir suppression prevents recurrence."}
  ],
  "medications": [
    {"name":"Acyclovir 400mg PO BID — chronic suppressive therapy","sig":"Long-term HSV suppression prevents EM recurrence. Continue indefinitely or reassess at 1 year.","prescriber":"Dermatology","start":"2024","refills":11,"status":"Active — suppressive"},
    {"name":"Dexamethasone 0.1% oral rinse — mucosal inflammation","sig":"Swish and spit TID — topical steroid for oral erosions. Do not swallow.","prescriber":"Dermatology","start":"2024","refills":2,"status":"Active"},
    {"name":"Magic mouthwash (equal parts diphenhydramine/lidocaine/Maalox)","sig":"Swish and spit q3-4h PRN — numbs oral mucosa for pain with eating","prescriber":"Dermatology","start":"2024","refills":0,"status":"PRN"}
  ],
  "labs": [{"date":"11/2024","panel":"EM Workup","results":[
    {"test":"HSV-1 IgG","value":"Positive (>5.0 index)","unit":"","ref":"<0.9 negative","flag":"H"},
    {"test":"HSV-1 PCR — active lesion swab","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"Mycoplasma pneumoniae IgM","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"ANA","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"CBC","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["EM major — HSV-triggered, target lesions + oral mucosa (correct)","Stevens-Johnson syndrome — EM major has <10% BSA and target lesions; SJS has flat atypical targets and >10% epidermal detachment","Bullous pemphigoid — older adults, tense blisters, no target lesions, different immunofluorescence","Drug-induced EM — no new medications; HSV PCR positive","Pemphigus vulgaris — flaccid blisters, Nikolsky sign positive, acantholysis on biopsy","Behcet disease — oral ulcers, genital ulcers, uveitis triad; different clinical context"],
  "coachFinal": "Diagnosis: EM major — HSV triggered. Key learning: (1) EM classification: EM minor (target lesions, no mucosal or single mucosal site, <10% BSA) vs EM major (target lesions + ≥2 mucosal sites, <10% BSA). EM major ≠ SJS — they are different entities. SJS = >10% BSA epidermal detachment, flat atypical targets, drug-triggered. (2) Cause: HSV is responsible for >50% of EM cases. Mycoplasma pneumoniae is the second most common — especially in children. Drugs rarely cause classic EM (they cause SJS/TEN). (3) Target lesion: three concentric zones — central dusky/blister zone, surrounding paler edematous ring, outer erythematous ring. Pathognomonic when present. (4) Recurrent HSV-EM: once the pattern is established (HSV outbreak → EM 1-3 weeks later), acyclovir or valacyclovir suppression virtually eliminates recurrence. Duration: typically 6-12 months minimum, then reassess. (5) SJS vs EM major: both have mucosal involvement, but SJS = drug-triggered, flat atypical lesions (no 3-zone target), >10% BSA, higher morbidity. Never treat EM with the same urgency and protocols as SJS unless detachment is present."
},
"erythema-multiforme-major": {
  "diagnosis": "Erythema Multiforme — First Episode, HSV and Drug Exposure Both Present, Systematic Workup",
  "problems": [
    {"problem":"Erythema multiforme — first episode, etiology unclear","icd":"L51.9","onset":"2024","status":"Active","notes":"Priya Nair, 22F — target lesions on palms and extensor surfaces + oral erosions. Fever 38.2°C."},
    {"problem":"Concurrent exposures — HSV-1 outbreak 2 weeks ago AND sulfa antibiotic recently started","icd":"L51.9","onset":"2024","status":"Active","notes":"Two potential triggers: HSV (most common) and sulfamethoxazole (can cause EM or SJS). Workup needed."},
    {"problem":"Oral mucosal erosions — eating and hydration impaired","icd":"K12.1","onset":"2024","status":"Active","notes":"Painful oral erosions — oral hydration possible but limited. IV fluids if intake inadequate."}
  ],
  "medications": [
    {"name":"STOP sulfamethoxazole-trimethoprim — suspect drug trigger","sig":"If drug is causative: discontinuation is the primary intervention. Monitor for progression.","prescriber":"Medicine/Dermatology","start":"HOLD","refills":0,"status":"HOLD — suspect trigger"},
    {"name":"Acyclovir 400mg TID x7 days — treat active HSV","sig":"Active HSV PCR positive — treat the active outbreak. Does not reverse EM already established, but stops ongoing antigenic stimulus.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active"},
    {"name":"Prednisolone mouthwash — oral mucosal symptom relief","sig":"Swish and spit TID — topical mucosal inflammation management","prescriber":"Dermatology","start":"2024","refills":1,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"EM Etiology Workup","results":[
    {"test":"HSV-1 PCR — lip lesion swab","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"Mycoplasma IgM","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"CBC","value":"Normal — mild lymphocytosis","unit":"","ref":"Normal","flag":""},
    {"test":"CMP","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"ANA/Anti-dsDNA","value":"Negative","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["EM — HSV as primary trigger (sulfa may be coincidental) (correct)","SJS from sulfa — BSA <10%, true target lesions present; SJS has flat atypical targets + more detachment","Urticarial vasculitis — no target lesions; wheals >24h, burn not itch","Fixed drug eruption — localized, same location each exposure, no target lesions","Viral exanthem — no target lesions, no mucosal involvement","Systemic lupus — ANA negative, no systemic features"],
  "coachFinal": "Diagnosis: EM — HSV primary trigger (sulfa coincidental). Key learning: (1) When multiple potential triggers are present: HSV serology/PCR is positive → HSV is the most likely trigger. Drugs rarely cause classic EM with 3-zone target lesions — they cause SJS/TEN. However, when uncertain, stopping the drug is low-risk and appropriate. (2) EM target lesion vs SJS atypical target: EM target = 3 concentric zones (center + pale middle ring + outer red). SJS atypical target = 2 zones only (dusky center + surrounding erythema) — these are 'flat' with no true 3-zone structure. This distinction is clinically important and determines management path. (3) BSA assessment: in EM major with oral mucosal involvement, always assess for skin detachment and BSA involved. If >10% or epidermal detachment developing → this is transitioning toward SJS-TEN, not EM, and requires different management (burn unit, IVIG, etc.). (4) First-episode EM: work up HSV (PCR preferred), Mycoplasma IgM (especially in pediatric or younger patients), drug exposure history within 3 weeks. (5) Prognosis of EM: generally self-limited over 2-4 weeks. Mucosal erosions heal without scarring typically. Recurrent EM (>3 episodes/year) warrants suppressive antiviral therapy."
},
"evali-vaping": {
  "diagnosis": "E-Cigarette or Vaping Product Use-Associated Lung Injury (EVALI) — Vitamin E Acetate, Systemic Steroids Required",
  "problems": [
    {"problem":"EVALI — vaping-associated lung injury","icd":"J68.0","onset":"2024","status":"Active","notes":"Jordan Hayes, 21M — vaping THC cartridges daily x8 months. Progressive dyspnea, fever, GI symptoms. SpO2 88% on RA."},
    {"problem":"Acute hypoxic respiratory failure — bilateral infiltrates","icd":"J96.00","onset":"2024","status":"Active","notes":"SpO2 88% on room air. CXR bilateral infiltrates. High-flow O2 initiated. EVALI pattern on CT."},
    {"problem":"Vitamin E acetate — likely causative agent in THC cartridge","icd":"J68.0","onset":"2024","status":"Active","notes":"CDC identified vitamin E acetate (used as thickener in THC vaping oil) as primary causative agent in EVALI outbreak."}
  ],
  "medications": [
    {"name":"Methylprednisolone 125mg IV q6h — systemic steroid","sig":"EVALI responds to systemic steroids — reduces organizing pneumonia and inflammatory component. Taper over 2-4 weeks after discharge.","prescriber":"Pulmonology","start":"2024","refills":0,"status":"Active"},
    {"name":"Ceftriaxone 1g IV daily + azithromycin 500mg daily — empiric antibiotics","sig":"Empiric coverage — infection cannot be clinically excluded from EVALI. Antibiotics continued pending culture results.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active — empiric"},
    {"name":"High-flow nasal cannula (HFNC) 40L/min, FiO2 0.6","sig":"Non-invasive respiratory support. Target SpO2 ≥92%. Avoid intubation if possible.","prescriber":"Pulmonology","start":"2024","refills":0,"status":"Active"},
    {"name":"Cessation counseling — all vaping products","sig":"Strict avoidance of all vaping products mandatory. Nicotine replacement options discussed.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"EVALI Workup","results":[
    {"test":"WBC","value":"18.2","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"CRP","value":"94","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"LDH","value":"620","unit":"U/L","ref":"135-225","flag":"H"},
    {"test":"Respiratory viral panel","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Sputum culture","value":"No growth — pending","unit":"","ref":"No pathogens","flag":""},
    {"test":"BAL — macrophages with lipid-laden vacuoles","value":"Lipid-laden macrophages present","unit":"","ref":"Absent","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Chest — HRCT","indication":"Progressive dyspnea, vaping history","findings":"Bilateral ground-glass opacities, predominantly subpleural. Scattered consolidation lower lobes. No pleural effusion. No cavitation.","impression":"EVALI pattern — bilateral subpleural ground-glass and consolidation consistent with organizing pneumonia. Clinical correlation with vaping history confirms EVALI."}],
  "ddxTargets": ["EVALI — THC vaping, bilateral GGO, steroid-responsive (correct)","COVID-19 pneumonia — negative respiratory panel; EVALI pattern similar","Bacterial pneumonia — culture negative, no lobar consolidation, EVALI pattern on CT","Lipoid pneumonia — lipid-laden macrophages on BAL support EVALI mechanism","Hypersensitivity pneumonitis — exposure history, similar CT; vaping history key","ARDS from another cause — EVALI is a cause of ARDS; history determines etiology"],
  "coachFinal": "Diagnosis: EVALI. Key learning: (1) EVALI diagnostic criteria (CDC): use of e-cigarette or vaping products in 90 days before symptom onset + pulmonary infiltrate on imaging + no plausible alternative diagnosis (infection excluded). Bronchoalveolar lavage with lipid-laden macrophages is supportive but not required. (2) Vitamin E acetate: added to illicit THC vaping cartridges as a thickening agent. Inhaled → directly toxic to alveolar epithelium → organizing pneumonia pattern. Legal nicotine vaping products less clearly associated — THC products are the primary EVALI risk. (3) Symptom triad: respiratory (dyspnea, cough, chest pain) + constitutional (fever, fatigue, weight loss) + GI (nausea, vomiting, diarrhea). GI symptoms in the context of respiratory illness should trigger vaping history. (4) Steroids: EVALI responds to systemic corticosteroids — methylprednisolone IV then prednisone oral taper. Most patients improve significantly within 24-48 hours of steroid initiation. (5) Cessation: strict, complete cessation of ALL vaping products is required — both THC and nicotine vaping. Counsel on risks of resumption and offer NRT alternatives."
},
"food-allergy-oit-reaction-v2": {
  "diagnosis": "Peanut OIT Adverse Reaction — Systemic Symptoms During Updosing, Protocol Hold, Epinephrine Administration",
  "problems": [
    {"problem":"Peanut oral immunotherapy (OIT) reaction — updosing event","icd":"T78.1XXA","onset":"2024","status":"Active","notes":"Emma Rodriguez, 14F — on Palforzia OIT. Developed urticaria + abdominal pain + vomiting 30 min after updose to 80mg."},
    {"problem":"OIT protocol modification — dose reduction after reaction","icd":"Z79.899","onset":"2024","status":"Active","notes":"Updosing held after systemic reaction. Return to last tolerated dose after reassessment. Risk factor review needed."},
    {"problem":"Uncontrolled exercise before OIT dose — cofactor identified","icd":"T78.1XXA","onset":"2024","status":"Active","notes":"Patient had PE class before coming to office. Exercise is the most common OIT cofactor for dose reactions."}
  ],
  "medications": [
    {"name":"Epinephrine 0.3mg IM — administered for systemic reaction","sig":"Systemic reaction (urticaria + GI + vomiting) = anaphylaxis criteria met. Epinephrine given in office.","prescriber":"Allergy","start":"2024","refills":0,"status":"Given"},
    {"name":"Palforzia OIT — dose reduced to prior tolerated dose (40mg)","sig":"After systemic reaction: hold updosing, return to last well-tolerated dose after 1-2 weeks on reduced dose.","prescriber":"Allergy","start":"2024","refills":2,"status":"Active — dose reduced"},
    {"name":"EpiPen 0.3mg x2 — prescribe/reinforce for home use","sig":"Two EpiPens at all times during OIT — home reactions can occur during maintenance dosing.","prescriber":"Allergy","start":"2024","refills":1,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"OIT Reaction Assessment","results":[
    {"test":"Peanut-specific IgE","value":"12.4","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Ara h 2 IgE","value":"8.6","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Tryptase (drawn 1h post-reaction)","value":"18.2","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"Tryptase baseline (24h post)","value":"4.0","unit":"ng/mL","ref":"<11.4","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["OIT updosing reaction — exercise cofactor, systemic symptoms (correct)","Anaphylaxis from accidental peanut exposure — OIT context makes updose the trigger","Panic attack — tachycardia and anxiety, but urticaria and GI symptoms are organic","Vasovagal reaction — no urticaria, pallor/bradycardia pattern","Mast cell activation syndrome — baseline tryptase normal at 24h","Idiopathic anaphylaxis — OIT dose is the identifiable trigger"],
  "coachFinal": "Diagnosis: OIT dose reaction — exercise cofactor. Key learning: (1) OIT cofactors — conditions that lower the reaction threshold during OIT dosing: exercise (most common — do not exercise 2 hours before or after OIT dose), illness/fever, menstruation, poor sleep, NSAID use, empty stomach (or unusual eating timing), emotional stress. These MUST be reviewed at every OIT visit and patients must know to call before dosing if cofactors present. (2) Protocol after systemic reaction: do NOT updose after a systemic reaction. Return to last tolerated dose. Reassess with allergist before any further updosing. Adjust protocol based on frequency and severity of reactions. (3) Palforzia (Aimmune AR101): FDA-approved peanut OIT for ages 4-17. Reduces risk of accidental severe reaction from 3 peanuts (threshold) to ~67 peanut equivalents or more for most patients. Does NOT allow intentional unrestricted peanut eating — it is DESENSITIZATION, not tolerance. (4) OIT vs omalizumab: omalizumab (Xolair) is increasingly used as an adjunct to OIT or as monotherapy (FDA-approved 2024 for ages 1+ for peanut, milk, egg, wheat, cashew, walnut, hazelnut) — reduces reaction severity and may allow faster updosing. (5) Patient education: epinephrine must always be accessible during OIT — reactions during maintenance dosing are less common than during updosing but occur and can be severe."
},
"food-allergy-oit-reaction": {
  "diagnosis": "Food Allergy OIT — Maintenance Phase Reaction, Illness Cofactor, Dose Hold and Reassessment",
  "problems": [
    {"problem":"Milk OIT maintenance phase reaction — illness cofactor","icd":"T78.1XXA","onset":"2024","status":"Active","notes":"Lucas Kim, 8M — milk OIT maintenance 1200mg daily x4 months. URI 3 days ago. Today: urticaria + wheeze after dose."},
    {"problem":"Asthma — OIT contraindication during uncontrolled asthma","icd":"J45.909","onset":"2022","status":"Active","notes":"Mild persistent asthma, well-controlled on ICS. Active respiratory illness lowers OIT tolerance — dose held."},
    {"problem":"Illness as OIT cofactor — dose held appropriately","icd":"Z79.899","onset":"2024","status":"Active","notes":"Holding OIT dose during illness is the standard protocol. Resume when fully recovered."}
  ],
  "medications": [
    {"name":"Epinephrine 0.3mg IM — given in office for systemic symptoms","sig":"Wheeze + urticaria = multisystem reaction = anaphylaxis criteria. Epinephrine given.","prescriber":"Allergy","start":"2024","refills":0,"status":"Given"},
    {"name":"Milk OIT — HOLD during illness, resume at lower dose (600mg) when recovered","sig":"Hold OIT dose during any febrile illness. Resume at 50% of maintenance dose x3-5 days, then return to full dose.","prescriber":"Allergy","start":"2024","refills":2,"status":"Active — on hold"},
    {"name":"Albuterol MDI 2 puffs q4h PRN — URI wheezing","sig":"Short-acting bronchodilator for acute wheeze. Step up ICS temporarily during URI.","prescriber":"Allergy","start":"2024","refills":1,"status":"Active PRN"}
  ],
  "labs": [{"date":"11/2024","panel":"OIT Reaction Panel","results":[
    {"test":"Milk-specific IgE (casein)","value":"4.2","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Milk IgG4 (tolerance biomarker)","value":"24","unit":"mgA/L","ref":"elevated = desensitization","flag":""},
    {"test":"Total IgE","value":"280","unit":"IU/mL","ref":"<150","flag":"H"},
    {"test":"Tryptase post-reaction","value":"14.8","unit":"ng/mL","ref":"<11.4","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["OIT maintenance reaction — illness cofactor (correct)","Accidental milk exposure — on controlled OIT, dose is the exposure source","Asthma exacerbation from URI — wheezing present but urticaria requires allergic explanation","Anaphylaxis from another food source — most likely OIT dose in this context","Viral-induced wheeze — URI + asthma, but urticaria argues for allergic component","Eczema flare — no eczema history; urticaria and wheeze are the primary findings"],
  "coachFinal": "Diagnosis: OIT maintenance reaction — illness cofactor. Key learning: (1) Illness is the most important maintenance-phase OIT cofactor. ANY febrile illness, GI illness, or significant URI lowers the allergic threshold during OIT dosing. Standard protocol: SKIP the OIT dose during illness. Resume at 50% dose when fully recovered x3-5 days, then return to maintenance dose. (2) Asthma and OIT: uncontrolled or acutely worsening asthma is a CONTRAINDICATION for OIT dosing — wheeze from any cause dramatically increases reaction risk. This patient's OIT was appropriately held. Peak flow or asthma symptom assessment should be performed before every OIT dose in asthmatic patients. (3) Maintenance phase reactions are less common than updosing reactions but can still occur — every OIT patient needs their EpiPen with every dose for the foreseeable future. (4) IgG4 as OIT biomarker: rising food-specific IgG4 during OIT indicates desensitization is occurring. Does not predict tolerance (ability to eat the food without ongoing dosing). (5) OIT goal clarification: OIT desensitizes the patient — protects against accidental exposure but typically requires ongoing daily dosing. Sustained unresponsiveness (tolerance after stopping OIT) occurs in ~25-50% but is not guaranteed. Discuss realistic goals with families before initiating OIT."
},
"fpies-acute-v2": {
  "diagnosis": "FPIES — Food Protein-Induced Enterocolitis Syndrome, Acute Reaction to Soy, Ondansetron Treatment",
  "problems": [
    {"problem":"FPIES — soy trigger, acute presentation","icd":"K52.29","onset":"2024","status":"Active","notes":"Noah Williams, 7M — 1.5-2h after soy formula: profuse vomiting x10-15 episodes, lethargy, pallor. No IgE-mediated features."},
    {"problem":"Acute dehydration — fluid replacement needed","icd":"E86.0","onset":"2024","status":"Active","notes":"Lethargy and pallor from dehydration and vagal response. NS IV bolus given."},
    {"problem":"Soy and cow's milk avoidance — FPIES management","icd":"K52.29","onset":"2024","status":"Active","notes":"FPIES patients often react to multiple proteins — soy triggers in ~50% of cow's milk FPIES patients."}
  ],
  "medications": [
    {"name":"Ondansetron 0.1-0.15mg/kg IM/IV — acute FPIES treatment","sig":"Ondansetron blocks the 5-HT3 vagal pathway that causes FPIES vomiting. Single dose often terminates episode. First-line acute treatment.","prescriber":"ED/Allergy","start":"2024","refills":0,"status":"Given"},
    {"name":"Normal saline 20mL/kg IV bolus — volume resuscitation","sig":"IV fluid bolus for dehydration and hemodynamic support. Reassess after bolus.","prescriber":"ED","start":"2024","refills":0,"status":"Given"},
    {"name":"Extensively hydrolyzed or amino acid formula — transition from soy","sig":"Amino acid formula (Neocate, EleCare) if cow's milk FPIES also present. Extensively hydrolyzed (Alimentum) if tolerating.","prescriber":"Allergy/GI","start":"2024","refills":2,"status":"Active — transition"}
  ],
  "labs": [{"date":"11/2024","panel":"FPIES Acute Assessment","results":[
    {"test":"Tryptase (drawn during acute episode)","value":"3.2","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"WBC (drawn 6h post-reaction — FPIES marker)","value":"22,400","unit":"cells/μL","ref":"<15,000","flag":"H"},
    {"test":"Stool reducing substances","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"Blood glucose","value":"62","unit":"mg/dL","ref":"70-100","flag":"L"},
    {"test":"Sodium","value":"134","unit":"mEq/L","ref":"136-145","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["FPIES — soy trigger, acute profuse vomiting 1.5-2h post-ingestion (correct)","IgE-mediated food allergy — no urticaria/angioedema, tryptase normal, delayed onset","Viral gastroenteritis — exposure timing to specific food, pattern of episodic reactions","Hypertrophic pyloric stenosis — age, projectile vomiting, but no food-specific timing","Intussusception — episodic pain + currant jelly stool; different presentation","Sepsis — WBC elevation is a FPIES feature, not infection"],
  "coachFinal": "Diagnosis: FPIES — acute soy reaction. Key learning: (1) FPIES mechanism: non-IgE-mediated cell-mediated gut reaction. Antigen triggers T-cell/eosinophil cascade in gut submucosa → TNF-α release → intestinal inflammation → vagal nerve activation → profuse vomiting. Timeline: 1-4 hours after ingestion (never immediate). (2) Classic FPIES picture: infant with profuse, repetitive vomiting (10-20 episodes) 1-4 hours after trigger food, pallor, lethargy, and NO urticaria/angioedema/wheeze. Appears severely ill but recovers quickly. WBC surge (leukocytosis) 6h post-reaction is a diagnostic criterion. (3) Ondansetron: the vomiting in FPIES is 5-HT3-mediated (vagal). Ondansetron blocks this receptor — dramatically reduces vomiting within 15-30 minutes. It is first-line acute management. (4) Common triggers: cow's milk and soy are most common (80-90% of cases). Rice, oat, and other grains are next. Multiple food triggers in same patient are common. (5) Prognosis: most FPIES resolves by age 3-5 years. Supervised oral food challenges (OFC) at age 12-18 months post-reaction confirm ongoing FPIES before permanent elimination. Allergy referral is essential."
},
"fpies-chronic-v2": {
  "diagnosis": "FPIES — Chronic Form, Cow's Milk Protein, Weight Faltering, Amino Acid Formula Transition",
  "problems": [
    {"problem":"Chronic FPIES — cow's milk protein, daily low-level exposure","icd":"K52.29","onset":"2024","status":"Active","notes":"Mia Johnson, 4M — on cow's milk formula since 6 weeks. Intermittent vomiting, loose stools, poor weight gain since then."},
    {"problem":"Weight faltering — cow's milk FPIES causing chronic nutritional compromise","icd":"R62.51","onset":"2024","status":"Active","notes":"Weight crossing percentile lines — from 40th to 10th. Insufficient caloric absorption due to chronic gut inflammation."},
    {"problem":"FPIES vs cow's milk protein allergy (CMPA) — clinical distinction","icd":"K52.29","onset":"2024","status":"Active","notes":"Chronic FPIES overlaps clinically with non-IgE CMPA. Both treated with milk protein elimination."}
  ],
  "medications": [
    {"name":"Amino acid formula (Neocate or EleCare) — complete protein elimination","sig":"Transition from cow's milk formula to amino acid-based formula immediately. Eliminates all cow's milk protein.","prescriber":"Pediatric GI/Allergy","start":"2024","refills":3,"status":"Active"},
    {"name":"Probiotics — gut microbiome support","sig":"Lactobacillus reuteri drops — gut flora support during formula transition. Evidence modest but low risk.","prescriber":"Pediatric GI","start":"2024","refills":1,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Chronic FPIES Workup","results":[
    {"test":"Cow's milk IgE (skin prick + RAST)","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Total IgE","value":"4","unit":"IU/mL","ref":"<10 for age","flag":""},
    {"test":"Stool calprotectin","value":"820","unit":"mcg/g","ref":"<50 elevated","flag":"H"},
    {"test":"Stool eosinophils","value":"Present","unit":"","ref":"Absent","flag":"H"},
    {"test":"Weight gain since birth","value":"Suboptimal — 10th percentile at 4 months","unit":"","ref":"Following curve","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Chronic FPIES — cow's milk, poor weight gain, no IgE (correct)","IgE-mediated cow's milk allergy — negative skin prick and RAST excludes","Cow's milk protein allergy (non-IgE CMPA) — overlapping entity, treated identically","Gastroesophageal reflux disease — vomiting, but weight loss and stool eosinophils suggest FPIES","Pyloric stenosis — projectile vomiting, palpable olive mass, age-appropriate","Hirschsprung disease — constipation predominant, not diarrhea"],
  "coachFinal": "Diagnosis: chronic FPIES — cow's milk. Key learning: (1) Acute vs chronic FPIES: acute = episodic dramatic vomiting 1-4h after trigger, appears severely ill temporarily, then recovers completely. Chronic = low-level daily exposure → intermittent vomiting, loose stools, weight faltering, chronic gut inflammation. Chronic form is more common in younger infants on formula. (2) Diagnosis of chronic FPIES: clinical picture + IgE testing NEGATIVE + symptoms resolve after elimination diet + return after re-exposure or OFC. No biopsy required for diagnosis. (3) Elimination trial: symptoms should improve within 2 weeks of switching to amino acid formula. Weight gain resumes. This is both diagnostic AND therapeutic. (4) Stool biomarkers: elevated calprotectin and stool eosinophils suggest gut mucosal inflammation — supportive of FPIES or CMPA, not diagnostic alone. (5) Follow-up: once symptoms resolve on amino acid formula, supervised food challenge at age 12-18 months confirms whether FPIES has resolved. Most cases resolve by age 3-5. Reintroduce under allergy supervision — acute FPIES reaction can occur on first solid food reintroduction."
},
"fpies-chronic": {
  "diagnosis": "FPIES — Chronic Presentation in Breastfed Infant, Maternal Dietary Elimination, Resolution Confirms Diagnosis",
  "problems": [
    {"problem":"Chronic FPIES — breastfed infant, maternal diet trigger","icd":"K52.29","onset":"2024","status":"Active","notes":"Sophia Chen, 3M — exclusively breastfed. Chronic vomiting, bloody stools, weight faltering. Cow's milk in maternal diet suspected."},
    {"problem":"Rectal bleeding — eosinophilic proctocolitis contributing","icd":"K52.29","onset":"2024","status":"Active","notes":"Bloody mucousy stools in breastfed infant — eosinophilic proctocolitis overlaps with FPIES spectrum. Maternal elimination is first step."},
    {"problem":"Maternal diet — cow's milk protein passes in breast milk","icd":"K52.29","onset":"2024","status":"Active","notes":"Cow's milk protein antigens pass through breast milk → infant gut sensitization. Maternal elimination resolves infant symptoms."}
  ],
  "medications": [
    {"name":"Maternal dairy elimination — complete cow's milk avoidance","sig":"Mother eliminates ALL dairy products (milk, cheese, yogurt, butter, casein, whey in processed foods) for 2-4 weeks. Supplement with calcium 1000mg + vitamin D 600 IU daily.","prescriber":"Allergy/Pediatric GI","start":"2024","refills":0,"status":"Active"},
    {"name":"Calcium + vitamin D supplementation — maternal during elimination","sig":"Dairy elimination depletes calcium. Supplement mother, not infant.","prescriber":"OB/Pediatrics","start":"2024","refills":2,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Breastfed FPIES Workup","results":[
    {"test":"Fecal blood (Hemoccult)","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"Stool eosinophils","value":"Present — sheets","unit":"","ref":"Absent","flag":"H"},
    {"test":"Total IgE (infant)","value":"2","unit":"IU/mL","ref":"<10","flag":""},
    {"test":"Cow's milk IgE (infant)","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Growth — weight","value":"3rd percentile — crossing from 25th","unit":"","ref":"Following curve","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Chronic FPIES/eosinophilic proctocolitis — breastfed, maternal dairy (correct)","Infectious enterocolitis — stool culture negative; no fever","Necrotizing enterocolitis — preterm infant; this is term infant, exclusive breastfeeding","Intussusception — episodic pain, currant jelly; different age and presentation","Meckel's diverticulum — painless rectal bleeding, older children","Anal fissure — localized bright blood, no systemic features"],
  "coachFinal": "Diagnosis: chronic FPIES/eosinophilic proctocolitis — breastfed infant, maternal dairy trigger. Key learning: (1) Breastfed infant FPIES/proctocolitis: exclusively breastfed infants can develop gut eosinophilic disease from maternal dietary antigens passing through breast milk. Most common triggers: cow's milk, then egg, soy. The infant has no direct dietary exposure — elimination is maternal. (2) Maternal elimination trial: eliminate all dairy (check ingredient labels for casein, whey, lactalbumin). Strict elimination for 2-4 weeks. If symptoms resolve — maternal dairy is the trigger. Rechallenging the mother (reintroducing dairy) causes symptom recurrence in the infant, confirming diagnosis. (3) Calcium supplementation for mother: maternal dairy elimination + no supplementation = maternal calcium deficiency risk. Supplement with 1000mg calcium + 600 IU vitamin D daily. (4) Continuation of breastfeeding: maternal elimination allows breastfeeding to continue — preferred over formula switch when possible. Breastfeeding has significant immunologic benefits. (5) Timeline: symptoms typically improve within 2-4 weeks of maternal elimination. If no improvement by 4 weeks with strict adherence, reconsider diagnosis or check for soy cross-reactivity (often need to eliminate soy as well)."
},
"heat-stroke": {
  "diagnosis": "Exertional Heat Stroke — Athlete, Core Temperature 41.8°C, Cold Water Immersion Immediate Cooling",
  "problems": [
    {"problem":"Exertional heat stroke — core temp 41.8°C","icd":"T67.01XA","onset":"2024","status":"Active","notes":"Marcus Taylor, 19M — football player collapsed post-practice, 95°F outside. Confused, not sweating. Rectal temp 41.8°C."},
    {"problem":"CNS dysfunction — altered mental status defining feature","icd":"T67.01XA","onset":"2024","status":"Active","notes":"GCS 11. CNS dysfunction + hyperthermia = heat stroke (vs heat exhaustion where CNS is intact)."},
    {"problem":"Rhabdomyolysis — exertional, heat-induced","icd":"M62.82","onset":"2024","status":"Active","notes":"CK 18,000 — exertional rhabdomyolysis. Aggressive IV fluids. Monitor for AKI and compartment syndrome."}
  ],
  "medications": [
    {"name":"Cold water immersion (CWI) — primary cooling method","sig":"Immerse in cold water (1-15°C) while monitoring continuously. Goal core temp <39°C within 30 minutes. Most effective cooling modality for exertional heat stroke.","prescriber":"Medicine/Sports Med","start":"2024","refills":0,"status":"Active — immediate"},
    {"name":"Normal saline 1-2L IV bolus — volume resuscitation","sig":"Aggressive IV fluids for rhabdomyolysis — maintain urine output >1-2 mL/kg/h. Prevents myoglobin-induced AKI.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Lorazepam 2mg IV PRN — seizure prophylaxis/treatment","sig":"Heat stroke patients are at high risk for seizure during cooling. Have benzodiazepine available.","prescriber":"Medicine","start":"2024","refills":0,"status":"PRN"}
  ],
  "labs": [{"date":"11/2024","panel":"Heat Stroke Panel","results":[
    {"test":"Rectal temperature","value":"41.8","unit":"°C","ref":"36.1-37.2","flag":"H"},
    {"test":"CK","value":"18,000","unit":"U/L","ref":"22-198","flag":"H"},
    {"test":"Creatinine","value":"1.8","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Sodium","value":"136","unit":"mEq/L","ref":"136-145","flag":""},
    {"test":"Potassium","value":"5.2","unit":"mEq/L","ref":"3.5-5.0","flag":"H"},
    {"test":"Urine — myoglobinuria","value":"Dark brown, myoglobin positive","unit":"","ref":"Clear, negative","flag":"H"},
    {"test":"PT/INR","value":"1.4","unit":"","ref":"0.9-1.1","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Exertional heat stroke — CWI required, CNS dysfunction (correct)","Heat exhaustion — intact CNS; confusion distinguishes heat stroke","Hyponatremia (water intoxication in athlete) — Na normal; different CNS mechanism","Drug intoxication — stimulants can cause hyperthermia; history negative","Neuroleptic malignant syndrome — no antipsychotic exposure, different context","Meningitis — no meningismus, acute exertional context, rectal temp is the key finding"],
  "coachFinal": "Diagnosis: exertional heat stroke. Key learning: (1) Heat stroke vs heat exhaustion: BOTH have hyperthermia, but heat stroke = CNS dysfunction (confusion, seizure, coma). Heat exhaustion = hyperthermia + weakness/nausea/dizziness with INTACT mental status. The presence of CNS dysfunction mandates heat stroke management regardless of exact temperature. (2) Cold water immersion (CWI): the most effective cooling modality for exertional heat stroke. Target core temp <39°C within 30 minutes. Death and permanent neurologic injury correlate with duration of hyperthermia. Delay in cooling = worse outcome. Cool first, transport second ('cool and transport, not scoop and run'). (3) Rhabdomyolysis management: IV normal saline to achieve urine output >1-2 mL/kg/h. Once urine output established, can add sodium bicarbonate to alkalinize urine (reduces myoglobin tubular precipitation). Monitor CK, creatinine, potassium. (4) Coagulopathy: elevated PT/INR from heat-induced hepatic injury and direct coagulation factor deactivation. Monitor for DIC in severe cases. (5) Return-to-play after heat stroke: athlete MUST be evaluated by sports medicine/cardiology before returning. Typically 4-6 weeks minimum. Heat tolerance testing before clearance. Prior heat stroke increases future risk."
},
"hereditary-angioedema-v2": {
  "diagnosis": "Hereditary Angioedema Type I — C1-INH Deficiency, Acute Abdominal Attack, C1 Esterase Inhibitor Concentrate",
  "problems": [
    {"problem":"Hereditary angioedema type I — acute abdominal attack","icd":"D84.1","onset":"2018","status":"Active","notes":"Isabel Torres, 34F — known HAE type I. Severe abdominal pain, vomiting, colicky. No urticaria. C4 low."},
    {"problem":"Misdiagnosis risk — acute abdomen mimicking surgical emergency","icd":"D84.1","onset":"2018","status":"Active","notes":"HAE abdominal attacks cause bowel wall edema mimicking appendicitis, ovarian torsion, obstruction. C4 draws the line."},
    {"problem":"HAE trigger — emotional stress event 24h prior","icd":"D84.1","onset":"2024","status":"Active","notes":"Emotional stress triggers bradykinin release. Other triggers: trauma, estrogen, ACE inhibitors."}
  ],
  "medications": [
    {"name":"C1 esterase inhibitor concentrate (Berinert) 20 units/kg IV — acute attack","sig":"First-line acute treatment for HAE attacks. Works within 30-90 minutes. Replaces deficient C1-INH.","prescriber":"Allergy/ED","start":"2024","refills":0,"status":"Given"},
    {"name":"Icatibant 30mg SQ (bradykinin B2 antagonist) — alternative if C1-INH not available","sig":"Bradykinin receptor antagonist — alternative acute treatment. Equal efficacy to C1-INH concentrate. Self-injectable.","prescriber":"Allergy","start":"2024","refills":0,"status":"Alternative"},
    {"name":"Tranexamic acid — avoid in HAE (not effective, not mechanism-targeted)","sig":"Antifibrinolytic — NOT indicated for HAE acute attack. Historical use predates specific therapies.","prescriber":"Allergy — DO NOT USE","start":"Avoid","refills":0,"status":"AVOID"},
    {"name":"Lanadelumab (Takhzyro) 300mg SQ q2-4 weeks — prophylaxis","sig":"Plasma kallikrein inhibitor — long-term prophylaxis. Dramatically reduces attack frequency. First-line for frequent HAE attackers.","prescriber":"Allergy","start":"2024","refills":5,"status":"Active — prophylaxis"}
  ],
  "labs": [{"date":"11/2024","panel":"HAE Workup","results":[
    {"test":"C4 complement (acute)","value":"3","unit":"mg/dL","ref":"16-47","flag":"L"},
    {"test":"C1 esterase inhibitor level","value":"8","unit":"mg/dL","ref":"21-39","flag":"L"},
    {"test":"C1 esterase inhibitor function","value":"28","unit":"%","ref":">68%","flag":"L"},
    {"test":"C1q","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"C3","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Abdomen/Pelvis With Contrast","indication":"Severe abdominal pain, vomiting — rule out surgical emergency","findings":"Diffuse bowel wall edema, ascites. No appendicitis, no obstruction, no perforation. Edema pattern consistent with hereditary angioedema abdominal attack.","impression":"HAE abdominal attack — bowel wall edema and ascites. No surgical pathology identified."}],
  "ddxTargets": ["HAE type I abdominal attack — C4 low, C1-INH low (correct)","Appendicitis — CT rules out; no urticaria in HAE","Ovarian torsion — CT negative; no adnexal pathology","ACE inhibitor angioedema — no ACEi; complement abnormal in HAE, normal in ACEi angioedema","Allergic angioedema — HAE has NO urticaria; allergic has urticaria + elevated tryptase","Acquired C1-INH deficiency — C1q LOW in acquired; C1q normal in hereditary HAE"],
  "coachFinal": "Diagnosis: HAE type I abdominal attack. Key learning: (1) HAE types: Type I = low C1-INH level AND function (~85% of HAE). Type II = normal C1-INH level, low function (~15%). Type III = normal C1-INH, estrogen-dependent, usually females. C4 is LOW in all three types during and between attacks — C4 is the best screening test. (2) C4 vs C1q: HAE = low C4, low C1-INH, NORMAL C1q. Acquired C1-INH deficiency = low C4, low C1-INH, LOW C1q (C1q consumed in acquired disease by autoantibodies or lymphoma). This distinction separates hereditary from acquired. (3) Abdominal attacks: occur in ~50% of HAE patients. Mimics appendicitis, cholecystitis, bowel obstruction. No urticaria — differentiates from allergic angioedema. CT: bowel wall edema and ascites. Unnecessary surgeries are common in undiagnosed HAE. (4) Acute attack medications that DON'T work: epinephrine (temporary at best), antihistamines, steroids — ALL are ineffective in HAE. Only bradykinin-targeted therapy works: C1-INH concentrate, icatibant, ecallantide. (5) Prophylaxis hierarchy: lanadelumab (q2-4 weeks SQ) or berotralstat (oral daily) are first-line long-term prophylaxis. C1-INH concentrate (Cinryze) is alternative. Androgens (danazol) are effective but have significant side effects."
}
}

def enrich(slug, e):
    path = os.path.join(EMR_DIR, f"{slug}.js")
    if not os.path.exists(path): print(f"  SKIP {slug}"); return False
    with open(path) as f: src = f.read()
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m: print(f"  PARSE ERROR {slug}"); return False
    data = json.loads(m.group(1))
    if "meta" not in data: data["meta"] = {}
    data["meta"]["diagnosis"] = e.get("diagnosis","")
    data["meta"]["caseId"] = slug
    for k in ["problems","medications","labs","imaging"]:
        if k in e: data[k] = e[k]
    if "ddxTargets" in e:
        if "guided" not in data: data["guided"] = {}
        data["guided"]["ddxTargets"] = e["ddxTargets"]
    if "coachFinal" in e:
        if "guided" not in data: data["guided"] = {}
        if "coachPrompts" not in data["guided"]: data["guided"]["coachPrompts"] = {}
        data["guided"]["coachPrompts"]["final"] = e["coachFinal"]
    with open(path,'w') as f: f.write(f"\nwindow.EMR_DATA = {json.dumps(data,indent=2)};\n")
    return True

done = 0
for s,e in ENRICHMENTS.items():
    if enrich(s,e): print(f"✓ {s}"); done += 1
print(f"\nBatch 13: {done}/{len(ENRICHMENTS)} enriched")
