#!/usr/bin/env python3
"""Batch 29 — Part A: 8 cases.

Cases: mixed-overdose, musculoskeletal-back-pain, musculoskeletal, myocarditis,
       myxedema-coma, necrotizing-fasciitis-of-neck, necrotizing-fasciitis,
       neutropenic-fever
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "mixed-overdose": {
    "diagnosis": "Intentional Mixed Overdose (Acetaminophen + Diphenhydramine + Alcohol) with Suicidal Intent",
    "coachFinal": (
      "Diagnosis: intentional mixed overdose with acetaminophen (~15 g), diphenhydramine (~1.5 g), and ethanol in a patient with suicidal intent. "
      "Key learning: "
      "(1) Approach to the undifferentiated overdose patient: ABCs first, then aggressive supportive care, then antidote-specific therapy. "
      "Initial workup: vital signs including temperature (cool patient in hypothermia, hot in anticholinergic, sympathomimetic), accucheck glucose, pupils (mydriasis in anticholinergic/sympathomimetic/opioid withdrawal; miosis in opioid/cholinergic/clonidine), skin (dry in anticholinergic, diaphoretic in sympathomimetic/cholinergic/opioid withdrawal), mental status, bowel sounds, and toxidrome pattern recognition. "
      "Get ECG (QRS widening, QT prolongation), ABG, BMP (anion gap), lactate, acetaminophen level, salicylate level, ethanol level, urine drug screen (limited but sometimes useful), pregnancy test in women, and CPK/troponin if prolonged down-time. "
      "(2) Acetaminophen toxicity is dose-dependent and often underrecognized because the early course is deceptively benign. "
      "Stages: Stage 1 (0-24h) — nausea, vomiting, malaise, or asymptomatic. "
      "Stage 2 (24-72h) — RUQ pain, rising transaminases and INR as hepatocellular injury manifests. "
      "Stage 3 (72-96h) — peak hepatotoxicity, possible acute liver failure, hepatic encephalopathy, coagulopathy. "
      "Stage 4 — recovery or death. "
      "Draw level at 4 hours post-ingestion (or now if ingestion time unknown) and plot on the Rumack-Matthew nomogram to determine need for N-acetylcysteine (NAC). "
      "In single time-point ingestions, NAC is indicated for level above the treatment line. "
      "Mass ingestion, staggered ingestion, unknown time, or extended-release formulation often gets empiric NAC regardless of nomogram. "
      "NAC dosing: IV 21-hour protocol (150 mg/kg bolus, 50 mg/kg over 4 hours, 100 mg/kg over 16 hours) or oral 72-hour protocol. "
      "Extend NAC beyond 21 hours if transaminases are rising or encephalopathy develops. "
      "(3) Diphenhydramine is anticholinergic and sodium-channel blocking at high doses. "
      "Anticholinergic toxidrome: 'hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter' — hyperthermia, dry skin and mucosa, flushing, mydriasis, urinary retention, ileus, altered mental status with agitation or hallucinations, and tachycardia. "
      "High-dose diphenhydramine adds sodium-channel blockade: QRS widening, seizures, and ventricular arrhythmias. "
      "Treatment: supportive (cooling, benzodiazepines for agitation/seizures), sodium bicarbonate boluses for QRS widening over 100 ms or ventricular dysrhythmias, physostigmine (reverses central and peripheral anticholinergic effects) in carefully selected patients without TCA co-ingestion (contraindicated with TCAs). "
      "(4) Ethanol adds CNS depression, respiratory depression, hypoglycemia (especially in children and fasted patients), and metabolic acidosis. "
      "Check glucose repeatedly. "
      "Supportive care, monitor airway and breathing, and consider thiamine before any glucose-containing fluids in chronic alcohol use to prevent Wernicke encephalopathy. "
      "(5) Classic pitfalls: (a) stopping NAC at 21 hours in a patient with rising transaminases, ongoing encephalopathy, or massive ingestion — continue until INR and LFTs improve and encephalopathy resolves. "
      "(b) Missing delayed acetaminophen toxicity because the initial level was 'low' — in staggered ingestions, nomogram is unreliable; treat based on history and rising AST/ALT. "
      "(c) Discharging a patient who has cleared an anticholinergic toxidrome without psychiatric evaluation — every intentional overdose gets psychiatric assessment, means restriction counseling, and safety planning before discharge. "
      "(d) Forgetting universal bedside precautions: capacity evaluation, collateral history, medication reconciliation, imaging if head injury suspected, and rhabdomyolysis workup in prolonged down-time."
    )
  },

  "musculoskeletal-back-pain": {
    "diagnosis": "Acute Mechanical Low Back Pain (Lumbosacral Strain)",
    "coachFinal": (
      "Diagnosis: acute mechanical low back pain, likely lumbosacral muscle strain. "
      "Key learning: "
      "(1) Low back pain is extraordinarily common (lifetime prevalence over 80%) and the vast majority (about 90%) is nonspecific mechanical pain from muscle strain, ligament sprain, or nonspecific degenerative changes. "
      "Clinical evaluation primarily identifies the small minority of patients with serious underlying pathology through RED FLAG screening rather than detailed anatomic diagnosis. "
      "Most acute back pain resolves with conservative care within 4-6 weeks regardless of treatment. "
      "(2) The red flags for back pain, which mandate further workup, include: age over 50 or under 20, history of malignancy (concern for metastatic disease), fever/chills/night sweats (infection — vertebral osteomyelitis, epidural abscess, discitis), IV drug use or immunocompromise (infection), recent trauma (fracture), prolonged corticosteroid use or osteoporosis (compression fracture), neurologic deficits, saddle anesthesia, bowel/bladder dysfunction, bilateral sciatica (cauda equina syndrome — a surgical emergency), unexplained weight loss, nocturnal pain, pain worse with rest (inflammatory back pain suggests spondyloarthritis), morning stiffness over 30-60 minutes, and failure to improve over 4-6 weeks of appropriate conservative care. "
      "(3) Imaging is NOT routinely indicated for acute mechanical back pain in the absence of red flags — early imaging does not improve outcomes and often shows age-related findings (disc desiccation, mild disc bulge, facet arthropathy) that generate anxiety and further (unnecessary) workup. "
      "When imaging is needed: X-rays for suspected fracture or deformity; MRI for red flag concerns (infection, malignancy, cauda equina, persistent radiculopathy with neurologic deficit not responding to conservative care); CT when MRI is contraindicated. "
      "CBC, ESR, CRP, and further labs if infection or malignancy suspected. "
      "(4) Treatment of uncomplicated mechanical back pain: patient education and reassurance (return to activity as tolerated — bed rest prolongs recovery), heat application, NSAIDs or acetaminophen (limited opioid use for brief periods only if refractory; avoid long-term opioids), muscle relaxants (cyclobenzaprine, tizanidine, methocarbamol) for short courses with caution about sedation and fall risk, physical therapy for subacute or persistent cases, and gradual return to normal activity and exercise. "
      "Chronic back pain requires a multimodal biopsychosocial approach: exercise therapy, cognitive behavioral therapy, mindfulness-based stress reduction, and sometimes interventional procedures (epidural steroid injections, radiofrequency ablation, selective nerve root blocks) for specific indications. "
      "(5) Classic pitfalls: (a) obtaining an MRI on every patient with acute back pain — leads to incidental findings, unnecessary surgery, and patient anxiety. "
      "(b) Missing cauda equina syndrome — always ask about saddle anesthesia, bladder/bowel function, and bilateral leg symptoms; rectal tone and post-void residual are essential exam elements; MRI emergently if suspected; surgical decompression within 24-48 hours preserves function. "
      "(c) Overlooking vertebral osteomyelitis or epidural abscess — fever plus back pain plus neurologic symptoms in IV drug user, diabetic, or immunocompromised patient demands MRI, blood cultures, and ID/neurosurgery consultation. "
      "(d) Prescribing chronic opioids — associated with worse outcomes, dependence, and overdose risk without durable pain benefit."
    )
  },

  "musculoskeletal": {
    "diagnosis": "Musculoskeletal Chest Pain (Costochondritis)",
    "coachFinal": (
      "Diagnosis: costochondritis (inflammation of the costochondral junctions) — a common cause of anterior chest wall pain. "
      "Key learning: "
      "(1) Musculoskeletal chest pain accounts for a substantial fraction of chest pain presentations, particularly in younger and otherwise healthy patients. "
      "Costochondritis is inflammation of the costal cartilage where the ribs meet the sternum, typically affecting the 2nd to 5th costochondral junctions. "
      "Tietze syndrome is a related condition distinguished by visible or palpable swelling over the affected cartilage. "
      "Presentation: sharp or aching chest pain that is reproducible on palpation, worsens with deep breathing, coughing, or movement, often follows upper respiratory illness or unusual physical exertion, and can last days to weeks. "
      "(2) Costochondritis is a diagnosis of exclusion — never diagnose it without first considering and ruling out life-threatening causes of chest pain: acute coronary syndrome, pulmonary embolism, aortic dissection, tension pneumothorax, esophageal rupture, and pericarditis/myocarditis. "
      "Risk stratify with history (quality, radiation, duration, triggers, alleviators), risk factors (age, sex, smoking, hyperlipidemia, DM, family history, HRT/contraceptive use, recent surgery or immobilization), exam (vitals, cardiovascular and pulmonary exam, chest wall palpation, extremity exam for DVT), ECG, and selective use of troponin, D-dimer, and imaging. "
      "HEART score in the emergency department stratifies ACS risk; PERC and Wells rules for PE. "
      "(3) Features favoring musculoskeletal pain: reproducibility with palpation (though cardiac pain can occasionally be tender), positional variation, pleuritic character in some cases, young patient without cardiac risk factors, preceding illness or exertion, and absence of concerning features (dyspnea, diaphoresis, radiation, nausea). "
      "However, reproducibility on palpation does NOT rule out ACS — up to 15% of patients with MI have some chest wall tenderness, and musculoskeletal pain and cardiac pain can coexist. "
      "When in doubt, err on the side of workup. "
      "(4) Management of costochondritis: reassurance once serious causes are excluded, NSAIDs or acetaminophen, heat or ice application, rest from provocative activities, and gradual return to activity. "
      "Refractory cases: local corticosteroid injection at the tender costochondral junction, physical therapy, and workup for underlying inflammatory or infectious causes in atypical presentations. "
      "Most cases resolve within 2-4 weeks. "
      "(5) Classic pitfalls: (a) diagnosing costochondritis in an older patient with cardiac risk factors without adequate ACS workup — 'atypical' chest pain (including reproducible pain) in high-risk patients can still be ACS. "
      "(b) Missing pulmonary embolism in a patient with pleuritic chest pain attributed to costochondritis — apply Wells/PERC rules. "
      "(c) Overlooking shingles in its prodromal phase — thoracic dermatomal pain preceding the rash by days can mimic costochondritis. "
      "(d) Forgetting other musculoskeletal chest pain causes: rib fracture (especially after minor trauma in osteoporosis, spontaneous in severe coughing), SAPHO syndrome, slipping rib syndrome, and myofascial pain from pectoralis or intercostal muscle strain."
    )
  },

  "myocarditis": {
    "diagnosis": "Acute Myocarditis",
    "coachFinal": (
      "Diagnosis: acute myocarditis. "
      "Key learning: "
      "(1) Myocarditis is inflammation of the myocardium with a broad etiologic differential. "
      "Causes: viral (most common in developed world — Coxsackie B, adenovirus, parvovirus B19, HHV-6, SARS-CoV-2, influenza), bacterial (diphtheria, Lyme, tuberculosis), fungal and parasitic (Chagas disease — major cause in Latin America), autoimmune (SLE, sarcoidosis, giant cell myocarditis, eosinophilic myocarditis), drug-induced (clozapine, checkpoint inhibitors which cause a high-mortality immune-related myocarditis, anthracyclines, 5-FU, some illicit drugs), and hypersensitivity reactions. "
      "(2) Presentation is variable and can mimic other cardiac diagnoses. "
      "The spectrum ranges from subclinical disease to fulminant myocarditis with cardiogenic shock. "
      "Common presentations: recent viral illness followed by chest pain (often pericarditis-like from concurrent myopericarditis), dyspnea, fatigue, heart failure symptoms, palpitations, and syncope. "
      "Young athletes and young adults with new heart failure, ventricular arrhythmia, or sudden cardiac arrest should prompt consideration of myocarditis. "
      "(3) Workup. "
      "ECG: ST-segment elevation or depression, T-wave inversion, new bundle branch block, AV block, or low voltage — can mimic STEMI. "
      "Cardiac biomarkers: elevated troponin reflects myocardial necrosis. "
      "Echocardiography: regional or global wall motion abnormalities, reduced EF, pericardial effusion, increased wall thickness from edema. "
      "Cardiac MRI with gadolinium is the noninvasive gold standard — Lake Louise criteria (T2-weighted edema imaging, early gadolinium enhancement for hyperemia/capillary leak, late gadolinium enhancement for fibrosis/necrosis) support the diagnosis. "
      "Coronary angiography is often performed to rule out ACS, especially in older patients with risk factors. "
      "Endomyocardial biopsy is the histologic gold standard but is reserved for fulminant or unexplained cases, giant cell myocarditis suspicion, or when therapy depends on specific histology. "
      "(4) Management. "
      "Supportive: heart failure therapy (ACE-I/ARB, beta-blocker, MRA, SGLT2 inhibitor, diuretics as needed) for reduced EF — most patients recover over weeks to months but a minority develop chronic cardiomyopathy. "
      "Arrhythmia management as appropriate, including temporary pacing for high-grade block. "
      "Advanced heart failure therapies (inotropes, mechanical circulatory support — IABP, Impella, VA-ECMO, LVAD, transplant) for cardiogenic shock from fulminant myocarditis. "
      "Specific immunosuppression is reserved for certain etiologies: giant cell myocarditis (combination immunosuppression — cyclosporine plus steroids plus azathioprine), eosinophilic myocarditis, cardiac sarcoidosis (corticosteroids), checkpoint-inhibitor myocarditis (high-dose steroids, withdraw drug). "
      "Avoid NSAIDs — can worsen renal function and fluid retention. "
      "EXERCISE RESTRICTION is critical: abstain from competitive or high-intensity exercise for 3-6 months minimum; return after normalization of biomarkers, EF, and absence of arrhythmia — typically requires cardiology clearance. "
      "(5) Classic pitfalls: (a) misdiagnosing as STEMI in a young patient with chest pain and ST elevation — cath without obstruction plus elevated troponin plus preceding viral illness should raise myocarditis suspicion; MRI and cardiology consultation. "
      "(b) Missing checkpoint-inhibitor myocarditis in oncology patients — high mortality, requires prompt high-dose steroids. "
      "(c) Discharging without counseling about exercise restriction — sudden death risk during acute myocarditis. "
      "(d) Overlooking giant cell and eosinophilic myocarditis — distinct histologies with rapid progression that require aggressive immunosuppression and often advanced therapies; endomyocardial biopsy is needed when fulminant or atypical."
    )
  },

  "myxedema-coma": {
    "diagnosis": "Myxedema Coma",
    "coachFinal": (
      "Diagnosis: myxedema coma — the end-stage, life-threatening manifestation of profound hypothyroidism. "
      "Key learning: "
      "(1) Myxedema coma is a true endocrine emergency with mortality historically 20-40% even with treatment. "
      "It typically occurs in an elderly patient (often a woman) with known or undiagnosed hypothyroidism precipitated by a stressor: infection, cold exposure, myocardial infarction, stroke, surgery, trauma, opioid or sedative use, medication non-adherence, or amiodarone. "
      "The name is a misnomer — true coma is not always present; profound obtundation or altered mental status may be the only neurologic finding. "
      "(2) Clinical features: hypothermia (often under 35 C, sometimes under 32 C — do not miss a low reading), bradycardia, hypotension (or paradoxically normal BP from reduced perfusion), hypoventilation with CO2 retention (impaired hypoxic and hypercarbic drive), altered mental status from obtundation to coma, hyponatremia (SIADH-like picture), hypoglycemia, non-pitting edema (myxedematous facies, periorbital edema, macroglossia), hypoactive bowel sounds, and sometimes pleural/pericardial effusions. "
      "Diagnostic clues on history: thyroidectomy scar, known hypothyroidism with recent medication non-adherence, hair loss, cold intolerance, constipation, weight gain. "
      "(3) Diagnostic confirmation: TSH (markedly elevated in primary hypothyroidism — often over 50; may be low or inappropriately normal in secondary/pituitary cause), free T4 (very low), cortisol (to assess for coexisting adrenal insufficiency — common and MUST be ruled out before thyroid hormone replacement), BMP (hyponatremia, hypoglycemia), ABG (respiratory acidosis), CBC (leukocytosis may be blunted), and infection workup (CXR, UA, blood cultures, cultures from any suspected source). "
      "ECG: bradycardia, low voltage, prolonged QT. "
      "(4) Treatment is emergent and multipronged: "
      "(a) IV thyroid hormone — levothyroxine 200-400 mcg IV loading dose (lower in elderly or cardiac disease), then 50-100 mcg IV daily. Some centers add T3 (liothyronine) 10-20 mcg IV load then 10 mcg q8h for rapid onset (T3 has more cardiovascular toxicity; controversial). "
      "(b) IV hydrocortisone 100 mg q8h EMPIRICALLY, BEFORE or WITH thyroid hormone, because coexisting adrenal insufficiency is common and unrecognized adrenal crisis precipitated by thyroid hormone replacement can be fatal. "
      "(c) Gentle rewarming (passive — blankets, warm room; avoid aggressive external warming which causes peripheral vasodilation and worsens hypotension). "
      "(d) Mechanical ventilation for hypoventilation/respiratory failure. "
      "(e) Cautious IV fluid replacement (often with small amounts of hypertonic saline for severe hyponatremia, avoiding overcorrection). "
      "(f) Treat underlying precipitant — broad-spectrum antibiotics if infection suspected, even empirically, because occult infection is common and the usual signs are blunted. "
      "(g) ICU admission with close hemodynamic, glucose, and electrolyte monitoring. "
      "(5) Classic pitfalls: (a) not measuring core temperature with a low-reading thermometer — standard tympanic thermometers do not read below 34 C, missing severe hypothermia. "
      "(b) Giving thyroid hormone before hydrocortisone in a patient with possible concurrent adrenal insufficiency — precipitates adrenal crisis. "
      "(c) Active external warming causing vasodilation and shock. "
      "(d) Missing the subtle presentation — elderly patient with 'just' hypothermia, hyponatremia, and altered mental status attributed to UTI without checking TSH. "
      "(e) Forgetting to investigate the precipitant — treating the myxedema without treating the pneumonia, MI, or other stressor leads to relapse."
    )
  },

  "necrotizing-fasciitis-of-neck": {
    "diagnosis": "Cervical Necrotizing Fasciitis (Odontogenic Source)",
    "coachFinal": (
      "Diagnosis: cervical necrotizing fasciitis from an odontogenic source, potentially progressing to descending mediastinitis. "
      "Key learning: "
      "(1) Cervical necrotizing fasciitis (CNF) is a rare but rapidly lethal infection that spreads along the fascial planes of the neck. "
      "Odontogenic sources (especially mandibular molar infections) are the most common etiology, with Ludwig's angina (bilateral submandibular space infection) as a related entity. "
      "The danger is extension along the retropharyngeal, pretracheal, and carotid spaces down into the mediastinum (descending necrotizing mediastinitis, DNM) — which carries mortality up to 40% even with aggressive management. "
      "Other sources: peritonsillar abscess, salivary gland infection, penetrating trauma, IV drug use in the neck, and postsurgical infections. "
      "Microbiology is polymicrobial: viridans streptococci, Streptococcus anginosus group, anaerobes (Prevotella, Fusobacterium, Bacteroides), Peptostreptococcus, and sometimes MRSA. "
      "(2) Presentation: rapidly progressive neck swelling and pain often out of proportion to exam findings, fever, dysphagia, odynophagia, trismus (inability to fully open the mouth), dysphonia, drooling, and toxic appearance. "
      "Classic 'hard signs' of necrotizing fasciitis — crepitus, skin necrosis, bullae, anesthesia over the involved area — are LATE findings; early CNF often presents as what looks like cellulitis with disproportionate pain. "
      "Systemic signs: tachycardia, hypotension, leukocytosis, elevated CRP, elevated lactate, and clinical deterioration despite initial antibiotic therapy. "
      "(3) Workup. "
      "CT neck and chest with IV contrast is the imaging study of choice — identifies abscesses, gas in tissues (pathognomonic for necrotizing infection but not always present), fascial involvement, vessel involvement, and mediastinal extension. "
      "Do not delay CT for a patient with airway concerns — secure the airway first (early awake fiberoptic intubation, surgical airway as backup). "
      "Labs: CBC, CMP, lactate, blood cultures, coagulation studies, type and crossmatch, and LRINEC score (though less validated in cervical NF than extremity NF). "
      "(4) Management is emergent multidisciplinary: "
      "(a) SURGICAL exploration and debridement — lifesaving, cannot be delayed for more imaging or 'trial of antibiotics.' Serial operative washouts are expected every 24-48 hours until margins are clean. "
      "(b) Broad-spectrum antibiotics empirically: carbapenem (meropenem or imipenem) OR piperacillin-tazobactam PLUS clindamycin (suppresses toxin production and bacterial ribosomal activity) PLUS vancomycin or linezolid for MRSA coverage. "
      "Modify based on cultures. "
      "(c) Airway management — early definitive airway, often tracheostomy. "
      "(d) ICU care with aggressive resuscitation, goal-directed therapy, and monitoring for mediastinitis (chest CT, often mediastinal drainage by thoracic surgery via thoracotomy or VATS). "
      "(e) Dental extraction of source tooth when stable. "
      "(f) Hyperbaric oxygen is used in some centers as adjunct but does not replace surgery. "
      "(5) Classic pitfalls: (a) under-recognizing the severity because the skin looks relatively intact — 'pain out of proportion' in the neck demands CT and surgical consultation. "
      "(b) Delaying surgery for antibiotics to work — surgical debridement is the definitive treatment. "
      "(c) Not imaging the chest — descending mediastinitis has a narrow treatment window; CT chest must be part of initial workup. "
      "(d) Inadequate airway planning leading to emergency cricothyroidotomy in a distorted, edematous neck — always have the most experienced available airway operator manage these cases, with surgical backup in the room. "
      "(e) Missing immune and metabolic risk factors: poorly controlled diabetes, immunosuppression, chronic alcoholism — optimize during treatment and address long-term."
    )
  },

  "necrotizing-fasciitis": {
    "diagnosis": "Necrotizing Fasciitis Type I (Polymicrobial) — Lower Extremity",
    "coachFinal": (
      "Diagnosis: necrotizing fasciitis type I (polymicrobial) of the lower extremity in an immunocompromised diabetic patient. "
      "Key learning: "
      "(1) Necrotizing fasciitis (NF) is a rare, rapidly progressive soft-tissue infection with mortality 20-40%. "
      "Classification: Type I — polymicrobial (mixed aerobic and anaerobic — commonly in diabetics, obese, post-surgical, perineal/Fournier gangrene); Type II — monomicrobial (classically group A Streptococcus, sometimes with S. aureus including MRSA — 'flesh-eating bacteria' in the media); Type III — gram-negative monomicrobial (Vibrio vulnificus after seawater or seafood exposure, Aeromonas in freshwater); Type IV — fungal (in immunocompromised or trauma). "
      "Gas gangrene (Clostridium perfringens) is a related, distinct entity. "
      "(2) Risk factors: diabetes mellitus, obesity, peripheral vascular disease, immunosuppression, IV drug use, chronic alcoholism, liver cirrhosis, NSAID use (may mask symptoms and delay recognition), recent surgery or trauma, and varicella (in children, increases risk of invasive GAS infection). "
      "(3) Presentation: severe pain OUT OF PROPORTION to visible findings is the cardinal early feature — this pain often persists despite seemingly modest skin findings (erythema, edema, tenderness). "
      "Progression over hours: skin color changes (dusky, purple, mottled), bullae (especially hemorrhagic bullae — ominous), crepitus (from gas-producing organisms, NF type I typically), anesthesia in the involved area (from nerve necrosis — sometimes interpreted by patients as 'feeling better'), and systemic toxicity (fever, tachycardia, hypotension, altered mental status). "
      "(4) Workup. "
      "Early suspicion is the key — do not wait for classic late findings. "
      "Labs: CBC, CMP, CRP, lactate, CPK (muscle involvement), coagulation, blood cultures, and LRINEC score (Laboratory Risk Indicator for Necrotizing Fasciitis): CRP, WBC, Hgb, sodium, creatinine, glucose — score ≥6 raises suspicion, ≥8 strongly suggestive, but a low score does NOT rule out NF. "
      "Imaging: CT with IV contrast shows gas, fascial thickening, edema, and sometimes fluid collections; MRI is more sensitive for fascial involvement but often time-consuming. "
      "Do not delay surgical consultation for imaging if clinical suspicion is high — the finger test at bedside (small skin incision, finger-probing for loss of fascial resistance) is diagnostic. "
      "(5) Management. "
      "(a) EMERGENT SURGICAL DEBRIDEMENT is the only definitive treatment — must happen within hours of diagnosis. Multiple serial debridements are expected every 24-48 hours until margins are clean. "
      "(b) Broad-spectrum empiric antibiotics: carbapenem (meropenem or imipenem) OR piperacillin-tazobactam PLUS clindamycin (anti-toxin effect for GAS and C. perfringens) PLUS vancomycin or linezolid for MRSA. "
      "For Vibrio: add doxycycline plus ceftriaxone. "
      "(c) Aggressive fluid resuscitation, vasopressor support as needed, ICU admission. "
      "(d) IVIG is considered for toxic shock syndrome from GAS or S. aureus (not routine in polymicrobial NF). "
      "(e) Hyperbaric oxygen therapy is adjunctive in centers where available — does not replace surgery. "
      "(f) Amputation may be required for extensive extremity involvement to save life. "
      "Classic pitfalls: (a) accepting 'just cellulitis' in a diabetic with severe pain out of proportion — always palpate for crepitus, assess for bullae, and have a low threshold for surgical consultation. "
      "(b) Non-operative management with antibiotics alone — fatal in true NF. "
      "(c) Using LRINEC as a rule-out rather than a rule-in — clinical judgment supersedes the score. "
      "(d) Missing post-operative rehabilitation and long-term outcomes planning — survivors need extensive reconstruction, prosthetics, PT, and psychological support."
    )
  },

  "neutropenic-fever": {
    "diagnosis": "Febrile Neutropenia (Post-Chemotherapy)",
    "coachFinal": (
      "Diagnosis: febrile neutropenia in a patient on AC chemotherapy for breast cancer — an oncologic emergency. "
      "Key learning: "
      "(1) Febrile neutropenia (FN) is defined as a single oral temperature ≥38.3 C (101 F) or ≥38.0 C sustained over 1 hour in a patient with absolute neutrophil count (ANC) <500/uL, or <1,000/uL with expected decline to <500 within 48 hours. "
      "Nadir is typically 7-14 days post-chemotherapy — ask specifically what day post-chemo in any oncology patient with fever. "
      "The challenge is that inflammatory signs of infection are markedly blunted by neutropenia; patients can be bacteremic and septic while looking deceptively well. "
      "(2) Door-to-antibiotic target is 60 minutes. "
      "Every hour of delay increases mortality. "
      "Rapid workflow: triage, immediate IV access, rapid labs (CBC with diff, CMP, lactate), blood cultures (x2 — peripheral AND each lumen of any central line), urinalysis and urine culture, CXR, and specific site cultures as clinically indicated — then empiric antibiotics within the hour. "
      "Do NOT wait for blood culture results or imaging. "
      "(3) Empiric antibiotic choice: a single broad-spectrum anti-pseudomonal beta-lactam — cefepime, piperacillin-tazobactam, or meropenem. "
      "Vancomycin is NOT routine empiric therapy. Add vancomycin ONLY for specific indications: hemodynamic instability, known MRSA colonization, skin/soft-tissue infection, severe mucositis, catheter-related infection, suspected pneumonia, or recent fluoroquinolone prophylaxis. "
      "Antifungal coverage (typically an echinocandin like caspofungin or micafungin) should be added if fever persists beyond 4-7 days on broad-spectrum antibacterials, especially with prolonged neutropenia. "
      "Penicillin allergy of 'childhood hives' should not deter cefepime — cross-reactivity is under 2% and the risk of untreated FN far exceeds the allergy risk. "
      "(4) MASCC risk score stratifies admission: burden of illness (no/mild symptoms 5 pts), no hypotension (5), no COPD (4), solid tumor or no prior fungal infection (4), no dehydration (3), outpatient status (3), age under 60 (2). "
      "Score ≥21 = low risk (candidate for oral outpatient management in select settings: ciprofloxacin plus amoxicillin-clavulanate); <21 = high risk (IV antibiotics and admission). "
      "CISNE score is an alternative. "
      "De-escalation: continue antibiotics until ANC >500 and afebrile 48 hours, or modify based on culture results. "
      "(5) Classic pitfalls: (a) missing febrile neutropenia because the patient is afebrile at presentation — any neutropenic patient with hypotension, altered mental status, or localized pain/erythema should be treated as presumed FN even without fever. "
      "(b) Waiting for CT or other imaging before giving antibiotics. "
      "(c) Attributing a sepsis picture in an oncology patient to 'chemotherapy side effects' and missing occult bacteremia. "
      "(d) Not involving oncology early — admission location and ongoing chemotherapy decisions depend on their input. "
      "(e) Forgetting to counsel all chemotherapy patients about fever precautions: check temperature if feeling unwell, avoid sick contacts and crowds during nadir, report any fever over 100.4 immediately."
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
    print(f'\nBatch 29A: {done}/{len(ENRICHMENTS)} enriched')
