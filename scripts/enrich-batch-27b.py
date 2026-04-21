#!/usr/bin/env python3
"""Batch 27 — Part B: 7 cases.

Cases: infiltrative-cardiomyopathy, inherited-coagulopathy, intertrochanteric-fracture,
       lethal-catatonia, lightning-strike-injury, long-qt-syndrome, lung-cancer-post-obstructive
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "infiltrative-cardiomyopathy": {
    "diagnosis": "Wild-Type ATTR Cardiac Amyloidosis (Infiltrative Cardiomyopathy)",
    "coachFinal": (
      "Diagnosis: wild-type transthyretin (ATTRwt) cardiac amyloidosis presenting as infiltrative cardiomyopathy. "
      "Key learning: "
      "(1) Cardiac amyloidosis is underdiagnosed and has historically been conflated with HFpEF, especially in older men. "
      "The two most common cardiac-dominant subtypes are ATTR (transthyretin) — either wild-type (aging-related, formerly 'senile systemic amyloidosis') or hereditary (variant TTR mutations) — and AL (light-chain, driven by plasma cell dyscrasia). "
      "Distinguishing the two is critical because AL is rapidly fatal without hematologic therapy, whereas ATTR progresses slowly and now has disease-modifying therapy. "
      "(2) Red flags that should prompt amyloid workup include: HFpEF in an older adult with unexplained LV hypertrophy, carpal tunnel syndrome (often bilateral, often years before cardiac symptoms), lumbar spinal stenosis, biceps tendon rupture, autonomic dysfunction (orthostasis, erectile dysfunction, early satiety), peripheral neuropathy, low-voltage ECG in a patient with echocardiographic LV hypertrophy (discordance), pseudoinfarct pattern on ECG (Q waves without corresponding wall motion abnormality), atrial fibrillation with preserved EF, and intolerance to standard heart failure medications (beta-blockers, ACE-I cause hypotension). "
      "(3) Diagnostic algorithm. Step 1: rule out AL amyloid with serum and urine protein electrophoresis with immunofixation (SPEP/UPEP) AND serum free light chains (FLCs). "
      "If any of these are abnormal (abnormal FLC ratio, M-protein), refer to hematology for biopsy of an accessible site (fat pad, bone marrow) with Congo red staining and typing. "
      "Step 2: if plasma cell dyscrasia is ruled out, perform 99mTc-pyrophosphate (PYP) bone scintigraphy. "
      "A positive PYP scan (grade 2 or 3 cardiac uptake, heart-to-contralateral ratio ≥1.5 at 1 hour) in the ABSENCE of a monoclonal protein has a positive predictive value for ATTR over 99% and obviates endomyocardial biopsy. "
      "Step 3: confirm with TTR gene sequencing to distinguish wild-type from variant (hereditary) ATTR, which has implications for family screening. "
      "(4) Treatment. For ATTR, TTR stabilizers — tafamidis and acoramidis — reduce cardiovascular hospitalization and mortality (ATTR-ACT, ATTRibute-CM trials). "
      "Silencers (patisiran, vutrisiran, inotersen) are approved for hereditary ATTR polyneuropathy and increasingly studied for cardiomyopathy. "
      "For AL amyloid, urgent hematologic treatment with daratumumab-based regimens (e.g., daratumumab + bortezomib + cyclophosphamide + dexamethasone, the D-VCd regimen) is standard. "
      "Symptom management: diuretics (often high doses) for volume, cautious use of ACE-I/ARB/beta-blockers (often poorly tolerated), rhythm control in AF when feasible, anticoagulation for AF given high thromboembolic risk (including LAA thrombus even with normal LA size), and avoidance of digoxin and calcium channel blockers (both bind amyloid and can precipitate hemodynamic collapse). "
      "(5) Classic pitfalls: (a) labeling the patient as 'just HFpEF' and missing amyloid for years. "
      "(b) Ordering PYP scan before ruling out AL — a positive PYP does NOT exclude AL. "
      "(c) Aggressive diuresis causing hypotension and AKI because amyloid hearts are preload-dependent. "
      "(d) Forgetting family screening in hereditary ATTR — first-degree relatives should be referred for TTR genetic testing and appropriate surveillance."
    )
  },

  "inherited-coagulopathy": {
    "diagnosis": "Hemophilia A with Acute Hemorrhagic Episode",
    "coachFinal": (
      "Diagnosis: hemophilia A (factor VIII deficiency) with acute hemarthrosis or soft-tissue bleeding. "
      "Key learning: "
      "(1) Hemophilia A (factor VIII deficiency) and hemophilia B (factor IX deficiency, Christmas disease) are X-linked recessive disorders, so almost all clinically affected patients are male; female carriers can have reduced factor levels and mild bleeding phenotypes. "
      "Severity is classified by factor activity: severe (<1%), moderate (1-5%), and mild (5-40%). "
      "Severe hemophilia presents in infancy or early childhood with spontaneous hemarthroses, deep muscle bleeds, and intracranial hemorrhage; moderate with bleeding after minor trauma; mild typically only after surgery or significant injury. "
      "(2) The characteristic coagulation lab pattern is isolated prolonged aPTT that CORRECTS on mixing study (distinguishing from inhibitor, lupus anticoagulant), with normal PT, platelet count, and bleeding time (or PFA-100). "
      "Confirm with specific factor VIII and IX activity assays. "
      "Factor VIII is also deficient in von Willebrand disease (vWF stabilizes VIII); check vWF antigen and ristocetin cofactor activity to distinguish. "
      "(3) Acute bleed management centers on rapid factor replacement. "
      "Target factor levels depend on bleed severity: minor bleeds (joint, muscle, epistaxis) aim for 30-50%, major bleeds (GI, GU, deep muscle, dental extractions) for 50-80%, and life-threatening bleeds (intracranial, retroperitoneal, airway, surgery) for 80-100%. "
      "For hemophilia A: recombinant factor VIII, dosed as 1 IU/kg raises activity by ~2% — so a 70 kg patient with severe hemophilia A needing 100% correction needs about 3500 IU. "
      "For hemophilia B: recombinant factor IX, with 1 IU/kg raising activity by ~1% (slightly different pharmacokinetics). "
      "In mild hemophilia A, desmopressin (DDAVP) can be used for minor bleeds — it releases stored VIII and vWF from endothelium. "
      "Adjuncts: antifibrinolytics (tranexamic acid, aminocaproic acid) for mucosal bleeding, RICE for joint bleeds. "
      "(4) Inhibitor (alloantibody against factor VIII or IX) development occurs in 20-30% of severe hemophilia A patients and is the most feared complication. "
      "Suspect inhibitor when factor replacement fails to control bleeding or raise levels — send Bethesda assay. "
      "Treatment of bleeds in inhibitor patients uses bypassing agents: activated prothrombin complex concentrate (aPCC/FEIBA) or recombinant factor VIIa (NovoSeven). "
      "Eradication with immune tolerance induction (ITI) is standard of care. "
      "Emicizumab (a bispecific antibody mimicking VIII function by bridging IXa and X) has transformed prophylaxis in both inhibitor and non-inhibitor patients. "
      "(5) Classic pitfalls: (a) missing the diagnosis in a woman carrier with bleeding — factor levels should be checked; extreme lyonization can produce clinically significant bleeding. "
      "(b) Delaying factor replacement while waiting for imaging — in any suspected intracranial bleed, give factor FIRST, image after. "
      "(c) Using IM injections or aspirin/NSAIDs in hemophilia patients — use subcutaneous or oral routes and acetaminophen or COX-2 inhibitors. "
      "(d) Forgetting comprehensive care center referral, genetic counseling, hepatitis/HIV screening (historical contamination risk in older patients), and immunization (especially hep B in untreated patients)."
    )
  },

  "intertrochanteric-fracture": {
    "diagnosis": "Intertrochanteric Hip Fracture",
    "coachFinal": (
      "Diagnosis: intertrochanteric hip fracture in an older adult after a fall. "
      "Key learning: "
      "(1) Hip fractures in older adults are a sentinel event with 30-day mortality of 5-10% and 1-year mortality of 20-30%, comparable to many cancers. "
      "The anatomic classification matters for surgical planning: femoral neck (intracapsular — risk of AVN and nonunion because the blood supply via the medial femoral circumflex artery is disrupted), intertrochanteric (extracapsular, between greater and lesser trochanters, good healing potential), and subtrochanteric (below lesser trochanter, often high-energy or pathologic). "
      "Classic presentation is a shortened, externally rotated leg with inability to bear weight after a low-energy fall. "
      "(2) Imaging. AP pelvis and cross-table lateral of the affected hip confirm most fractures. "
      "In occult fractures with high clinical suspicion but negative X-ray (especially in osteoporotic elderly or cognitively impaired patients), MRI is the gold standard for detecting occult fractures within 24 hours; CT is a reasonable alternative. "
      "Missing an occult fracture and allowing weight-bearing can convert a non-displaced fracture into a displaced one with much worse outcomes. "
      "(3) Surgical management is standard for almost all hip fractures in adults; non-operative management is reserved for non-ambulatory, imminently dying, or extreme surgical risk patients after careful discussion. "
      "Operative approach depends on fracture pattern: femoral neck displaced fractures in older adults — hemiarthroplasty or total hip arthroplasty; femoral neck non-displaced — percutaneous screws. "
      "Intertrochanteric fractures — typically sliding hip screw (dynamic hip screw, DHS) for stable patterns and cephalomedullary nail (gamma nail, etc.) for unstable or reverse oblique patterns. "
      "Subtrochanteric — cephalomedullary nail. "
      "Expedite surgery — best outcomes when operated within 24-48 hours. "
      "(4) Perioperative optimization. Fascia iliaca or femoral nerve block for analgesia reduces opioid use and delirium. "
      "Early mobilization postoperatively (day of or day after surgery), geriatrics co-management (orthogeriatric model reduces mortality and complications), VTE prophylaxis, bowel and bladder care, delirium prevention, and nutritional support. "
      "Pre-existing anticoagulation must be managed thoughtfully: warfarin reversal with PCC if urgent surgery needed; DOACs typically held with time-based approach. "
      "Avoid over-transfusion — restrictive thresholds (Hgb 7-8 g/dL) are generally safe. "
      "(5) Secondary fracture prevention is essential but often omitted. "
      "Start DXA and initiate osteoporosis therapy (bisphosphonate, denosumab, or anabolic agents) during hospitalization or at discharge — a hip fracture is an osteoporotic diagnosis regardless of T-score, and treatment halves the risk of subsequent fracture. "
      "Address falls: medication review (sedatives, anticholinergics, antihypertensives), vision, vestibular, home hazards, strength and balance training, vitamin D repletion, and assistive devices. "
      "Classic pitfalls: (a) discharging a hip fracture patient without initiating osteoporosis treatment. "
      "(b) Delaying surgery more than 48 hours for medical optimization when the evidence favors earlier surgery even in high-risk patients. "
      "(c) Missing an occult femoral neck fracture on X-ray and allowing weight-bearing. "
      "(d) Under-recognizing postoperative delirium and treating it with antipsychotics rather than addressing reversible causes (pain, constipation, hypoxia, UTI, medication)."
    )
  },

  "lethal-catatonia": {
    "diagnosis": "Lethal (Malignant) Catatonia with Autonomic Instability and Rhabdomyolysis",
    "coachFinal": (
      "Diagnosis: lethal (malignant) catatonia with autonomic instability, rhabdomyolysis, and concurrent lithium toxicity. "
      "Key learning: "
      "(1) Catatonia is a syndrome of motor, behavioral, and autonomic disturbances that can complicate psychiatric illness (schizophrenia, mood disorders), general medical conditions (encephalitis including anti-NMDA receptor encephalitis, metabolic derangements, neuroleptic exposure), or occur idiopathically. "
      "Core features (DSM-5, at least 3 required): catalepsy, waxy flexibility, stupor, agitation, mutism, negativism, posturing, mannerisms, stereotypies, grimacing, echolalia, echopraxia. "
      "Lethal or malignant catatonia adds autonomic instability (fever, labile BP and HR, diaphoresis), rigidity, altered consciousness, and has mortality up to 20% without treatment. "
      "(2) The differential between malignant catatonia and NMS is notoriously difficult because they are clinically nearly identical — fever, rigidity, autonomic instability, altered mental status, and CK elevation. "
      "Historical clues: NMS has temporal association with recent neuroleptic (typical or atypical) or dopamine blocker exposure; malignant catatonia may arise from underlying psychiatric illness without neuroleptic trigger, and often begins with pure catatonic signs before progressing to autonomic instability. "
      "Some experts argue these are a single spectrum and that NMS is essentially drug-induced malignant catatonia. "
      "The distinction matters less than recognition — both require ICU-level care. "
      "(3) Treatment of catatonia starts with benzodiazepines — IV lorazepam 1-2 mg with response typically within minutes to hours; responsiveness to lorazepam is so characteristic that it is sometimes used as a diagnostic test. "
      "ECT (electroconvulsive therapy) is highly effective and is the treatment of choice for lorazepam-nonresponders and for malignant catatonia — can be life-saving within days. "
      "Stop any offending dopamine blockers (antipsychotics, antiemetics like metoclopramide). "
      "Supportive care: aggressive cooling for hyperthermia, IV fluids for rhabdomyolysis (target urine output 200-300 mL/hr), VTE prophylaxis (immobile patients), electrolyte correction, nutritional support (often NG tube), and airway protection. "
      "(4) Lithium toxicity is the additional complication here. "
      "Lithium levels over 1.5 mEq/L are usually toxic; above 2.5 mEq/L is severe. "
      "Toxicity presents with tremor, ataxia, confusion, hyperreflexia, seizures, and in severe cases cardiovascular collapse. "
      "Dehydration, NSAIDs, ACE-I/ARB, thiazides, and renal dysfunction can all precipitate lithium toxicity. "
      "Treatment: hold lithium, aggressive IV normal saline hydration, hemodialysis for severe toxicity (level over 4, level over 2.5 with neurologic symptoms or renal failure), and ongoing symptom monitoring. "
      "(5) Classic pitfalls: (a) treating catatonia with antipsychotics — they make it worse and can precipitate malignant catatonia or NMS. "
      "(b) Missing catatonia in a 'non-cooperative' patient, interpreting mutism and immobility as willful refusal. "
      "(c) Failing to consider anti-NMDA receptor encephalitis in a young patient (especially female) with new catatonia, psychiatric symptoms, autonomic instability, seizures, or movement disorder — workup with CSF NMDA receptor antibodies, MRI, EEG, and ovarian teratoma screen. "
      "(d) Delaying ECT when indicated — in malignant catatonia, every day of untreated illness increases mortality."
    )
  },

  "lightning-strike-injury": {
    "diagnosis": "Lightning Strike Injury",
    "coachFinal": (
      "Diagnosis: lightning strike injury with multi-system involvement. "
      "Key learning: "
      "(1) Lightning strike is distinct from high-voltage electrical injury in important ways. "
      "Lightning delivers an extremely brief (milliseconds) but massive voltage (hundreds of millions of volts) pulse, typically causing external flashover rather than deep tissue heating, so internal burns are often minimal compared with high-voltage AC injuries. "
      "Mechanisms of injury: direct strike (highest mortality), side flash (from nearby object), contact (touching a struck object), ground current (current spreading through the ground), and blunt trauma (blast effect or fall). "
      "(2) Cardiovascular and respiratory effects are the immediate cause of death. "
      "Lightning acts as a massive depolarizing shock, causing simultaneous asystole and apnea. "
      "The heart often restarts via its intrinsic automaticity, but the medullary respiratory center may remain paralyzed longer — so a patient can re-establish a pulse but die of secondary cardiac arrest from prolonged apnea and hypoxia. "
      "This unique physiology reverses the standard mass casualty triage principle: in a multi-victim lightning strike scenario, RESUSCITATE THE DEAD FIRST — those in cardiorespiratory arrest may recover fully if ventilated promptly, while those still breathing will likely survive without intervention. "
      "Prolonged resuscitation is often worthwhile. "
      "(3) Neurologic manifestations include loss of consciousness, amnesia (especially retrograde), confusion, transient paralysis (keraunoparalysis — typically affecting lower extremities, with pale, pulseless, mottled limbs from sympathetic-mediated vasospasm — usually resolves within hours), seizures, intracranial hemorrhage, and chronic cognitive deficits and neuropsychiatric sequelae. "
      "Full neurologic exam, documentation of pupillary findings (fixed dilated pupils may be transient from autonomic effect and are NOT a contraindication to continued resuscitation), and low threshold for head imaging. "
      "(4) Dermatologic findings: Lichtenberg figures (fern-like erythematous pattern — pathognomonic but transient), linear and punctate burns, and superficial burns are common. "
      "Deep thermal injury and true electrical burns are relatively uncommon. "
      "Tympanic membrane rupture is frequent from the blast effect (up to 50% of survivors). "
      "Ophthalmologic complications include cataracts (can develop days to years later), retinal detachment, and uveitis. "
      "(5) Workup and disposition. ECG (watch for nonspecific changes, QT prolongation, arrhythmia), CK and troponin (rhabdomyolysis and cardiac contusion), BMP, head CT if altered mental status or focal findings, skin and tympanic exam, ophthalmology consultation, and cardiac monitoring for at least 24 hours even in asymptomatic patients if there is any cardiac symptom or ECG change. "
      "Classic pitfalls: (a) underestimating the need for resuscitation because 'he got hit by lightning — it's probably hopeless' — the opposite is true; prolonged CPR and ventilation are more often successful than in other arrests. "
      "(b) Mistaking keraunoparalysis for spinal cord injury — watch and document, reexamine serially; most recovers spontaneously. "
      "(c) Discharging without dermatologic, audiologic, and ophthalmologic evaluation. "
      "(d) Missing delayed complications: cataracts, neurocognitive dysfunction, chronic pain, PTSD — arrange appropriate follow-up and counsel survivors and families about expected and possible late effects."
    )
  },

  "long-qt-syndrome": {
    "diagnosis": "Drug-Induced Long QT Syndrome with Torsades de Pointes",
    "coachFinal": (
      "Diagnosis: drug-induced long QT syndrome (LQTS) with torsades de pointes (TdP), precipitated by citalopram plus azithromycin plus electrolyte derangements. "
      "Key learning: "
      "(1) QT prolongation reflects delayed ventricular repolarization, predominantly from reduced potassium efflux through the IKr channel (encoded by hERG, whose inhibition is the final common pathway of most drug-induced LQTS). "
      "The corrected QT (QTc) adjusts for heart rate: Bazett formula QTc = QT / sqrt(RR) is most commonly used, though it overcorrects at high heart rates and undercorrects at low — Fridericia and Framingham formulas are alternatives. "
      "QTc over 500 ms or a prolongation over 60 ms from baseline significantly increases TdP risk. "
      "Inherited LQTS (especially LQT1, LQT2, LQT3) also predisposes and should be considered in family history of sudden death, recurrent syncope with emotion/exercise/startle/sleep, and deafness (Jervell and Lange-Nielsen syndrome). "
      "(2) Common culprits for drug-induced QT prolongation: antiarrhythmics (sotalol, ibutilide, dofetilide, amiodarone has low risk), antipsychotics (haloperidol IV, ziprasidone, thioridazine), antidepressants (citalopram over 40 mg, escitalopram, TCAs), macrolides (azithromycin, erythromycin, clarithromycin), fluoroquinolones (moxifloxacin worst, levofloxacin), methadone, ondansetron and other 5-HT3 antagonists, droperidol, and many others. "
      "CredibleMeds.org maintains an updated list. "
      "Risk multiplies with combinations and with electrolyte derangements (hypokalemia, hypomagnesemia, hypocalcemia), bradycardia, female sex, and congenital LQTS background. "
      "(3) Torsades de pointes is polymorphic VT with a characteristic twisting-around-the-baseline morphology, typically occurring after a pause-dependent or bradycardia-dependent prolonged QT and an R-on-T premature beat. "
      "Most episodes self-terminate but can degenerate into ventricular fibrillation. "
      "Acute management: IV magnesium sulfate 2 g over 1-2 minutes, regardless of serum magnesium (repeat as needed); correct potassium to high-normal (4.5-5.0); correct calcium; stop all QT-prolonging drugs; defibrillate if sustained TdP causes hemodynamic instability or VF. "
      "For recurrent TdP, temporary overdrive pacing (transvenous or transcutaneous) at 90-110 bpm shortens QT and prevents pause-dependent episodes; isoproterenol infusion does the same pharmacologically (contraindicated in congenital LQTS, especially LQT1/2). "
      "(4) Prevention. Before prescribing QT-prolonging drugs, assess for risk factors: check baseline ECG in at-risk patients, correct electrolytes, avoid polypharmacy of QT-prolonging drugs when possible, and adjust doses in elderly and renally/hepatically impaired patients. "
      "Counsel patients about syncope or palpitations warranting urgent evaluation. "
      "For congenital LQTS, beta-blockers (nadolol or propranolol) are first-line; ICDs for secondary prevention or high-risk primary prevention; left cardiac sympathetic denervation for refractory cases. "
      "(5) Classic pitfalls: (a) not checking a baseline ECG before starting a QT-prolonging drug in an at-risk patient. "
      "(b) Forgetting to correct magnesium — hypomagnesemia often accompanies hypokalemia and must be repleted for potassium replacement to 'stick' and for TdP prevention. "
      "(c) Giving amiodarone for polymorphic VT without first considering that the VT is TdP, where amiodarone is relatively contraindicated (adds QT prolongation). "
      "(d) Missing the drug-drug interaction mechanism — many QT-prolonging drugs are metabolized by CYP3A4, and co-administration with inhibitors (macrolides, azoles, grapefruit, protease inhibitors) dramatically raises levels and TdP risk."
    )
  },

  "lung-cancer-post-obstructive": {
    "diagnosis": "Lung Cancer with Post-Obstructive Pneumonia",
    "coachFinal": (
      "Diagnosis: lung cancer with post-obstructive pneumonia (POP). "
      "Key learning: "
      "(1) Post-obstructive pneumonia occurs when an endobronchial lesion (most commonly primary lung cancer, occasionally metastatic disease, foreign body, or benign stricture) obstructs an airway, leading to impaired clearance, atelectasis, and secondary infection distal to the obstruction. "
      "It accounts for ~2-5% of community pneumonias overall but up to 50% of 'non-resolving pneumonias' in at-risk populations. "
      "Suspect POP whenever pneumonia (a) fails to resolve radiographically despite appropriate antibiotics, (b) recurs in the same anatomic location, (c) presents with hemoptysis, weight loss, or lymphadenopathy, or (d) occurs in an older smoker with no obvious aspiration risk. "
      "(2) Clinical clues include chronic cough, hemoptysis, weight loss, hoarseness, chest pain, supraclavicular lymphadenopathy, digital clubbing, paraneoplastic syndromes (SIADH in small cell lung cancer, hypercalcemia in squamous cell, Cushing syndrome, Lambert-Eaton, encephalitis), and performance status decline preceding the pneumonia. "
      "Smoking history (current, former, duration, pack-years) is essential. "
      "(3) Imaging and workup. CXR shows consolidation, often with volume loss (obstruction-related atelectasis), hilar or mediastinal mass, lymphadenopathy, pleural effusion. "
      "CT chest with IV contrast is the diagnostic workhorse — it shows the obstructing lesion, extent of post-obstructive consolidation, nodal involvement, pleural disease, and distant metastases (adrenals, liver, bones). "
      "Bronchoscopy provides direct visualization and tissue (endobronchial biopsy, EBUS-TBNA for lymph nodes), and can relieve obstruction therapeutically (debulking, stenting, argon plasma coagulation, laser, cryotherapy). "
      "PET-CT assists with staging. "
      "MRI brain is standard for staging in most lung cancers given high rate of occult CNS metastases. "
      "(4) Management combines immediate treatment of pneumonia with oncologic workup and planning. "
      "Empiric antibiotics with anaerobic coverage (community-acquired pneumonia coverage PLUS anaerobic — e.g., ampicillin-sulbactam, piperacillin-tazobactam, or ceftriaxone plus metronidazole or clindamycin) because obstruction allows anaerobic overgrowth. "
      "Duration is often longer than typical pneumonia (2-4 weeks or longer) because of impaired clearance. "
      "Airway interventions (stent, ablation) can provide rapid symptomatic relief and buy time for systemic therapy. "
      "Oncologic management is driven by histology and molecular profile: platinum-based chemotherapy and immune checkpoint inhibitors (pembrolizumab, nivolumab) for many non-small cell lung cancers; targeted therapy for EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, and HER2 mutations; radiation for symptom palliation and consolidative/curative intent in limited stage disease. "
      "(5) Classic pitfalls: (a) treating 'pneumonia' in an older smoker with repeated courses of antibiotics without ever getting a CT chest or bronchoscopy to look for the underlying lesion. "
      "(b) Missing central tumors on CXR — always compare to priors, look for volume loss, hilar fullness, and subtle masses; CT is more sensitive. "
      "(c) Neglecting the supportive and palliative care aspects — POP often heralds incurable disease and early palliative care referral improves quality of life and sometimes survival (TEMEL trial). "
      "(d) Forgetting to offer smoking cessation counseling and CT lung cancer screening to eligible family members and contacts — the teachable moment has community-wide impact."
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
    print(f'\nBatch 27B: {done}/{len(ENRICHMENTS)} enriched')
