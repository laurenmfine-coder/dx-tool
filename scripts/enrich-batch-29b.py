#!/usr/bin/env python3
"""Batch 29 — Part B: 7 cases.

Cases: new-onset-seizure, nonocclusive-mesenteric-ischemia, normal-pressure-hydrocephalus,
       nstemiunstable-angina, optic-neuritis, orthostatic-hypotension, ovarian-pathology
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "new-onset-seizure": {
    "diagnosis": "New-Onset Seizure in an Adult — Workup and Red Flags",
    "coachFinal": (
      "Diagnosis: first-ever adult seizure requiring comprehensive workup. "
      "Key learning: "
      "(1) A first unprovoked seizure in an adult requires a structured evaluation for provoked causes, structural lesions, and epilepsy risk stratification. "
      "Provoked vs unprovoked distinction is central: provoked (acute symptomatic) seizures arise from a reversible insult (metabolic, toxic, infectious, structural acute); unprovoked seizures have no acute cause and may represent the first presentation of epilepsy. "
      "The differential for a witnessed spell also includes syncope (often with brief myoclonic jerks mistaken for seizure), psychogenic nonepileptic seizure, transient ischemic attack, migraine with aura, and cataplexy. "
      "(2) Provoked causes screened with initial labs and history: metabolic (hypoglycemia, hyponatremia, hypocalcemia, hypomagnesemia, uremia, hepatic encephalopathy), toxic (alcohol withdrawal typically 6-48 hours after last drink, benzodiazepine or barbiturate withdrawal, tricyclics, bupropion, tramadol, cocaine, amphetamines, INH, theophylline), infectious (meningitis, encephalitis, brain abscess), and structural acute insult (stroke, hemorrhage, head trauma). "
      "Every new seizure gets CBC, comprehensive metabolic panel, magnesium, calcium, glucose, lactate (often elevated postictally — trend), troponin, tox screen, ECG (arrhythmia mimicking seizure), urinalysis, and head CT emergently. "
      "(3) Structural and epilepsy workup: MRI brain with and without contrast (higher yield than CT for chronic structural causes — hippocampal sclerosis, cortical dysplasia, tumor, AVM, cavernous malformation, gliosis from prior injury) and EEG (ideally prolonged/sleep-deprived to increase yield). "
      "LP for suspected CNS infection, immunologic encephalitis (anti-NMDA, anti-LGI1, and others — especially in atypical presentations, subacute encephalopathy, movement disorder, psychiatric symptoms), and subarachnoid hemorrhage with negative CT. "
      "(4) Decision to start antiepileptic drug (AED) after a first unprovoked seizure depends on recurrence risk. "
      "Low risk (normal MRI and EEG): recurrence about 30-40% over 2 years — typically do not start AED after single seizure, but discuss. "
      "High risk (abnormal MRI, abnormal EEG, nocturnal seizure, prior brain injury, known risk factor): recurrence 60-80% — AED often recommended. "
      "Choice of AED depends on patient factors: levetiracetam (broad-spectrum, few interactions, first-line in many settings), lamotrigine (favorable cognitive profile, requires slow titration, Stevens-Johnson risk), lacosamide, valproate (avoid in women of childbearing potential), carbamazepine/oxcarbazepine. "
      "Counsel patients on driving restrictions (legally mandated reporting varies by jurisdiction), seizure precautions (no heights, no swimming alone, no working with dangerous machinery until cleared), and medication adherence. "
      "(5) Classic pitfalls: (a) not checking glucose immediately — hypoglycemia is a critical, easily missed cause. "
      "(b) Attributing a seizure to 'epilepsy' in an older patient without workup — stroke, subdural hematoma, brain tumor, and metabolic causes are much more common in new-onset adult seizure. "
      "(c) Starting AED without confirming the event was a seizure — syncope and psychogenic nonepileptic events are common mimics. "
      "(d) Missing autoimmune/paraneoplastic encephalitis in young patients with subacute onset seizures plus psychiatric or cognitive changes — treatable with immunotherapy if caught early. "
      "(e) Forgetting driving counseling and documentation — medicolegal requirement in many places."
    )
  },

  "nonocclusive-mesenteric-ischemia": {
    "diagnosis": "Nonocclusive Mesenteric Ischemia (NOMI)",
    "coachFinal": (
      "Diagnosis: nonocclusive mesenteric ischemia (NOMI) — mesenteric hypoperfusion without mechanical vascular occlusion. "
      "Key learning: "
      "(1) Acute mesenteric ischemia has four subtypes with different mechanisms and management: "
      "(a) Arterial embolism (40-50%) — cardioembolic source (AF, LV thrombus, endocarditis), classically to the SMA. "
      "(b) Arterial thrombosis (20-30%) — usually on preexisting atherosclerosis, often with prior chronic mesenteric ischemia (postprandial abdominal pain, food fear, weight loss). "
      "(c) Venous thrombosis (5-15%) — associated with hypercoagulable states, cirrhosis, malignancy, pancreatitis. "
      "(d) NOMI (20-30%) — splanchnic vasoconstriction without mechanical occlusion, driven by low-flow states: shock, heart failure, post-cardiac surgery, dialysis-induced hypotension, vasopressor use, cocaine, digoxin. "
      "(2) NOMI presentation and mechanism. "
      "NOMI classically occurs in critically ill or elderly patients with significant comorbidities who develop disproportionate abdominal pain, progressive ileus, worsening lactate, and deteriorating clinical status without an obvious surgical abdomen. "
      "The splanchnic vasoconstriction is an adaptive response to preserve cardiac and cerebral perfusion during systemic hypotension, but if prolonged it causes bowel ischemia. "
      "Recognition is often delayed because the 'pain out of proportion to exam' classic teaching is harder to apply in an ICU patient who is already sedated or obtunded. "
      "(3) Diagnosis. "
      "Laboratory: elevated lactate (late and insensitive early), leukocytosis, metabolic acidosis. "
      "CT angiography of the abdomen and pelvis is the test of choice — may show bowel wall thickening, pneumatosis, mesenteric stranding, portal venous gas, and in NOMI often diffuse vasoconstriction of the SMA and its branches without a discrete occlusion. "
      "Mesenteric angiography is diagnostic (and therapeutic) — shows 'pruned tree' appearance, spasm of SMA branches, and delayed filling. "
      "Have a low threshold to image any critically ill patient with new abdominal pain, rising lactate, or unexplained deterioration. "
      "(4) Management of NOMI. "
      "(a) Correct the underlying low-flow state: optimize volume status, reduce or change vasopressors if driving the vasoconstriction, treat heart failure, correct shock. "
      "(b) Intraarterial papaverine or other vasodilator via catheter directly into the SMA can relieve vasospasm; glucagon or prostaglandin infusions are alternatives. "
      "(c) Broad-spectrum antibiotics (translocation of gut flora) — piperacillin-tazobactam or a carbapenem. "
      "(d) Surgical exploration for suspected bowel infarction, peritonitis, or failure of medical management — resect necrotic bowel, second-look laparotomy often indicated. "
      "(e) Supportive ICU care, close monitoring, and serial lactate and abdominal exams. "
      "(5) Classic pitfalls: (a) attributing the abdominal findings to 'ICU ileus' or 'post-operative' and missing NOMI until bowel necrosis is established. "
      "(b) Not thinking of mesenteric ischemia in an older patient with atrial fibrillation and acute abdominal pain — CT angiography should be considered early. "
      "(c) Failing to optimize hemodynamics before or during operative intervention — NOMI is fundamentally a perfusion problem, and operating without addressing it leads to postoperative progression. "
      "(d) Forgetting that the overall mortality of acute mesenteric ischemia is 50-80% — early recognition and multidisciplinary care (surgery, vascular, critical care, interventional radiology) are the only levers that meaningfully improve outcomes."
    )
  },

  "normal-pressure-hydrocephalus": {
    "diagnosis": "Normal Pressure Hydrocephalus (NPH)",
    "coachFinal": (
      "Diagnosis: idiopathic normal pressure hydrocephalus (NPH). "
      "Key learning: "
      "(1) NPH is a communicating hydrocephalus with ventriculomegaly on imaging but normal or only intermittently elevated opening pressure on lumbar puncture. "
      "The classic clinical triad — the 'wet, wacky, wobbly' triad — is gait disturbance (magnetic, shuffling, wide-based, apraxic — often the first and most responsive symptom), urinary incontinence (urgency then frank incontinence), and cognitive impairment (subcortical pattern — slowing, executive dysfunction, apathy; distinct from cortical dementias). "
      "The gait disturbance typically predominates and responds best to CSF diversion. "
      "(2) Differential includes other dementias and gait disorders: Alzheimer disease (cortical memory loss predominant), Parkinson disease (resting tremor, rigidity, bradykinesia — unilateral onset), vascular dementia (stepwise course, focal findings), cerebrovascular disease, cervical myelopathy, spinal stenosis, and normal aging. "
      "The challenge is that NPH features often coexist with other neurodegenerative disease — up to 70% of NPH patients have comorbid Alzheimer pathology — which limits shunt responsiveness. "
      "(3) Workup. "
      "MRI brain: ventriculomegaly (Evans index >0.3 — ratio of maximal frontal horn width to maximal inner skull diameter), disproportionately enlarged subarachnoid space hydrocephalus (DESH sign — tight high-convexity sulci, enlarged Sylvian fissures, ventriculomegaly), rounded third and lateral ventricles, periventricular white matter changes, reduced callosal angle (<90 degrees). "
      "CT is less sensitive. "
      "Cognitive and gait assessment: neuropsychological testing, Timed Up and Go, 10-meter walk test. "
      "Large-volume lumbar puncture (remove 30-50 mL of CSF) with gait and cognitive assessment before and 30-60 minutes after — objective improvement predicts shunt responsiveness and is the most useful predictive test (sometimes called the 'tap test' or Miller Fisher test). "
      "External lumbar drainage for 72 hours is an alternative with higher sensitivity. "
      "(4) Treatment. "
      "Ventriculoperitoneal (VP) shunt is the definitive treatment; lumboperitoneal and ventriculoatrial are alternatives. "
      "Programmable valves allow outpatient pressure adjustment to balance under- and over-drainage. "
      "Shunt responsiveness: about 60-80% improve, especially gait; cognition responds less reliably; incontinence variable. "
      "Complications: shunt malfunction (clogging, disconnection), infection, subdural hematoma (especially in elderly from overdrainage), seizures. "
      "Patient selection is key — shunt in a patient with poor predictors (absent triad, severe dementia, no tap test response, coexisting neurodegenerative disease) risks surgical morbidity without benefit. "
      "(5) Classic pitfalls: (a) missing the diagnosis by attributing the gait and cognitive changes to 'just aging' or generic dementia — NPH is potentially treatable and should be considered in any older patient with the triad. "
      "(b) Diagnosing based on imaging alone — ventriculomegaly is common with age and doesn't require treatment without clinical triad. "
      "(c) Not performing a large-volume tap test before shunt referral — predicting response is central to shunting decisions. "
      "(d) Over-promising to families — discuss realistic expectations about partial and variable responses, and the potential for rapid improvement followed by plateau or eventual decline if comorbid neurodegeneration is present."
    )
  },

  "nstemiunstable-angina": {
    "diagnosis": "NSTEMI / Unstable Angina (In-Stent Restenosis)",
    "coachFinal": (
      "Diagnosis: non-ST-elevation acute coronary syndrome (NSTEMI vs unstable angina) in the setting of in-stent restenosis. "
      "Key learning: "
      "(1) Acute coronary syndrome (ACS) spans a spectrum: STEMI (ST elevation, full-thickness infarction, emergent reperfusion), NSTEMI (no ST elevation but troponin elevation indicating myocardial necrosis — usually from partial occlusion or microvascular embolization), and unstable angina (no troponin elevation but angina at rest or crescendo pattern — distinction from NSTEMI has narrowed with high-sensitivity troponin). "
      "The fourth universal definition of myocardial infarction classifies: Type 1 (plaque rupture/erosion with thrombus), Type 2 (supply-demand mismatch — sepsis, anemia, tachyarrhythmia, hypotension), Type 3 (sudden cardiac death before troponin rise), Type 4 (PCI- or stent-related), Type 5 (CABG-related). "
      "(2) In-stent restenosis (ISR) is the re-narrowing of a previously stented coronary segment — mechanisms include neointimal hyperplasia (early), neoatherosclerosis (late), stent underexpansion, stent fracture, and incomplete stent apposition. "
      "Presentation ranges from recurrent stable angina to acute coronary syndrome. "
      "Risk factors for ISR: diabetes, long lesions, small vessel diameter, bifurcation stents, bare metal stents (now rare; much lower rate with drug-eluting stents), and medication non-adherence (statin, antiplatelet). "
      "(3) ACS workup: serial ECGs (looking for ST depression, T-wave inversion, dynamic changes), high-sensitivity troponin (repeat at 1-3 hours depending on protocol — rise and fall pattern confirms MI), bedside echocardiography (wall motion abnormalities, LV function), CXR, CBC/BMP/PT/PTT, and risk stratification with GRACE, TIMI, or HEART score. "
      "High-sensitivity troponin algorithms (0/1h or 0/2h) efficiently rule in and rule out MI in the ED. "
      "(4) Management of NSTE-ACS. "
      "Antiplatelet: aspirin loading (162-325 mg chewed) plus a P2Y12 inhibitor (ticagrelor or prasugrel preferred over clopidogrel in ACS without excessive bleeding risk; caution with prasugrel in stroke history and older age). "
      "Anticoagulation: unfractionated heparin or enoxaparin (bivalirudin in selected high-bleeding-risk patients going to cath). "
      "Antianginal: nitrates (caution with hypotension, recent PDE-5 use, RV infarct), beta-blockers (if no heart failure or hypotension), calcium channel blockers if beta-blockers contraindicated. "
      "High-intensity statin. "
      "Invasive strategy: immediate angiography (<2 hours) for very high-risk features (hemodynamic instability, refractory angina, life-threatening arrhythmia, mechanical complications); early invasive (<24 hours) for high-risk features (elevated GRACE score, dynamic ST changes, new heart failure); delayed invasive (<72 hours) for intermediate risk; ischemia-guided (stress testing) for low-risk patients. "
      "ISR management: repeat PCI with drug-coated balloon or repeat stent with DES, consideration of CABG in complex multi-vessel restenosis, and always re-evaluate medication adherence and risk factors. "
      "(5) Classic pitfalls: (a) missing NSTE-ACS in women and older adults who often present atypically (dyspnea, fatigue, epigastric pain rather than classic chest pain). "
      "(b) Stopping dual antiplatelet therapy prematurely after stenting — causes stent thrombosis, which is often fatal; DAPT duration is individualized (typically 6-12 months after DES, longer in ACS) and any interruption for surgery requires multidisciplinary planning. "
      "(c) Not addressing the underlying ISR causes: nonadherence to statin/antiplatelet, undertreated diabetes or hypertension, smoking continuation. "
      "(d) Forgetting cardiac rehab referral, which reduces mortality, hospitalization, and depression after ACS."
    )
  },

  "optic-neuritis": {
    "diagnosis": "Optic Neuritis (Likely Demyelinating — Clinically Isolated Syndrome)",
    "coachFinal": (
      "Diagnosis: optic neuritis, likely demyelinating (clinically isolated syndrome, possible first presentation of multiple sclerosis). "
      "Key learning: "
      "(1) Optic neuritis (ON) is inflammation of the optic nerve, classically presenting in a young adult (20-40 years old, female predominance) with subacute monocular vision loss over hours to days, pain with eye movement (worsened by looking up and side-to-side — the most specific symptom), reduced color vision (especially red desaturation), and a relative afferent pupillary defect (RAPD, Marcus Gunn pupil — asymmetric pupillary response on swinging flashlight test). "
      "(2) Etiologies: demyelinating (most common in young adults — isolated or as part of MS, NMO spectrum disorder, MOG-associated disease), infectious (syphilis, Lyme, TB, Bartonella, viral), autoimmune/inflammatory (sarcoidosis, SLE, Behcet), toxic (methanol, ethambutol, amiodarone), nutritional (B12, folate deficiency), ischemic (AION — typically older patients with vasculopathic risk factors, a distinct entity with different management), and compressive (tumor — can mimic). "
      "(3) Workup. "
      "Ophthalmologic examination: visual acuity, color vision, pupillary reflexes (RAPD), visual fields (often a central scotoma), fundus exam (two-thirds have normal-appearing disc — retrobulbar ON; one-third have disc swelling — papillitis). "
      "MRI brain and orbits with contrast is mandatory: optic nerve enhancement and thickening confirm ON; demyelinating lesions in the brain and cord predict high risk of MS (Barkhof-Tintore criteria, modified McDonald criteria help diagnose MS). "
      "LP for selected patients: oligoclonal bands, cell count, protein, glucose, infectious workup when indicated. "
      "Blood work: CBC, B12, folate, RPR/syphilis serology, ACE (sarcoid), ANA, aquaporin-4 IgG (NMO), MOG IgG. "
      "(4) Management. "
      "ACUTE TREATMENT: IV methylprednisolone 1 g daily x 3-5 days (Optic Neuritis Treatment Trial showed faster recovery with IV steroids, though final visual outcome is not improved — recovery is usually good regardless). "
      "Oral prednisone alone at standard dose is NOT recommended (ONTT showed increased recurrence risk with oral steroids without IV induction). "
      "Plasma exchange or IVIG for steroid-refractory severe cases. "
      "LONG-TERM: if MRI shows demyelinating lesions (CIS with high MS risk), start disease-modifying therapy for MS early (interferons, glatiramer, oral agents like dimethyl fumarate/teriflunomide, monoclonal antibodies like ocrelizumab/natalizumab) to delay conversion and accumulation of disability. "
      "NMO-spectrum disorder (AQP4+ or MOG+): distinct treatment approach — rituximab, eculizumab, inebilizumab, satralizumab; avoid MS-specific agents which can worsen NMO. "
      "(5) Classic pitfalls: (a) giving oral prednisone alone for suspected ON — increases recurrence per ONTT. "
      "(b) Missing ischemic optic neuropathy (AION) in older patients with vasculopathic risk factors — no pain with eye movement, altitudinal visual field defect, pale edematous disc. Giant cell arteritis must always be considered in patients over 50 with vision loss (temporal headache, jaw claudication, scalp tenderness, elevated ESR/CRP — urgent high-dose steroids and temporal artery biopsy). "
      "(c) Not checking for NMO or MOG antibodies in atypical presentations (bilateral, severe visual loss, poor recovery, transverse myelitis). "
      "(d) Forgetting to counsel about early disease-modifying therapy when MRI suggests MS — each relapse accrues disability, and early treatment changes long-term trajectory."
    )
  },

  "orthostatic-hypotension": {
    "diagnosis": "Orthostatic Syncope from Polypharmacy-Induced Orthostatic Hypotension",
    "coachFinal": (
      "Diagnosis: orthostatic syncope from polypharmacy-induced orthostatic hypotension in a patient on doxazosin, amlodipine, lisinopril, carbidopa-levodopa, and mirtazapine. "
      "Key learning: "
      "(1) Orthostatic hypotension (OH) is defined by a sustained reduction in systolic BP of at least 20 mm Hg or diastolic BP of at least 10 mm Hg within 3 minutes of standing, or when the head-up tilt is ≥60 degrees. "
      "Initial OH (overshoot within 30 seconds) is transient and physiologic. "
      "Classic OH (within 3 minutes) is the definition. "
      "Delayed OH (after 3 minutes) is often missed — requires prolonged standing or tilt-table testing. "
      "Neurogenic OH (failure of HR compensation on standing) suggests autonomic failure (Parkinson, MSA, Lewy body, diabetic neuropathy, amyloid). "
      "Non-neurogenic OH (appropriate HR increase) suggests volume or medication cause. "
      "(2) Drug-induced OH is extremely common and often cumulative. "
      "Major classes: alpha-blockers (doxazosin, tamsulosin, prazosin), nitrates, PDE-5 inhibitors, centrally acting antihypertensives (clonidine, methyldopa), diuretics (volume depletion), tricyclic antidepressants, SSRIs (less but possible), trazodone, mirtazapine, antipsychotics (especially low-potency and atypicals), levodopa and dopamine agonists, and opioids. "
      "The risk multiplies when combinations are used — a patient on three or more BP-lowering or autonomic-affecting drugs has exponentially increased OH risk. "
      "(3) Presentation ranges from asymptomatic to lightheadedness, blurred vision, dizziness, syncope, and falls. "
      "Postprandial hypotension (drop within 60-90 min of eating, especially breakfast, from splanchnic blood pooling) is a distinct and underrecognized variant. "
      "Consequences: falls, fractures (especially hip), cognitive impairment from chronic hypoperfusion, and increased cardiovascular mortality. "
      "(4) Workup. "
      "Measurement: supine BP/HR after 5 minutes, then standing BP/HR at 1 minute and 3 minutes (and 5-10 minutes if suspicion of delayed OH). "
      "History: medications (prescription, OTC, herbals), fluid and salt intake, diabetes, Parkinson, amyloid features. "
      "Labs: CBC (anemia), BMP (electrolytes, renal function), B12, HbA1c, TSH, cortisol if suspected adrenal insufficiency. "
      "ECG (arrhythmia, conduction), echocardiogram in selected patients. "
      "Tilt-table testing for atypical or unclear cases. "
      "(5) Management. "
      "(a) DEPRESCRIBE — review the full medication list and remove or reduce the most offending and least necessary drugs. Alpha-blockers are often the single highest-yield target. "
      "(b) Lifestyle: adequate hydration (2-2.5 L daily), liberal salt intake (8-10 g/day if no contraindication), compression stockings (thigh-high, abdominal binders), raising head of bed 10-30 degrees at night, physical counter-maneuvers (leg crossing, squatting, calf pumping before standing), avoiding prolonged standing, and eating smaller frequent meals with reduced carbohydrates (for postprandial hypotension). "
      "(c) Pharmacologic: fludrocortisone (expands plasma volume — watch for supine hypertension, hypokalemia, edema), midodrine (alpha-1 agonist, shorter-acting — dose 30 min before arising, last dose at least 4 hr before bed), droxidopa (norepinephrine precursor, FDA-approved for neurogenic OH), pyridostigmine (cholinesterase inhibitor, modest effect mainly during standing). "
      "(d) Fall prevention program, home safety evaluation, PT for balance and gait. "
      "Classic pitfalls: (a) attributing falls in an elderly patient to 'age' without measuring orthostatic vitals — OH is common, modifiable, and a major fall risk factor. "
      "(b) Starting a new antihypertensive without removing another when BP is 'still high' on office measurement — supine hypertension with standing hypotension (classic in autonomic failure) is the classic trap. "
      "(c) Not measuring delayed OH — 3-minute measurement can miss it. "
      "(d) Over-aggressive BP targets in elderly with OH — individualize, and consider tolerating slightly higher supine BP to avoid symptomatic orthostasis and falls."
    )
  },

  "ovarian-pathology": {
    "diagnosis": "Ovarian Torsion",
    "coachFinal": (
      "Diagnosis: ovarian torsion — a gynecologic surgical emergency. "
      "Key learning: "
      "(1) Ovarian torsion is twisting of the ovary (and often the fallopian tube — 'adnexal torsion') on its vascular pedicle, causing venous and lymphatic congestion, then arterial obstruction, and ultimately ovarian ischemia and necrosis. "
      "It occurs across the lifespan but is most common in reproductive-age women and in girls; it can also occur in postmenopausal women, pregnancy, and after ovarian stimulation for fertility. "
      "Risk factors include ovarian mass or cyst (usually over 5 cm — a lead point for torsion), pregnancy (especially first trimester), prior tubal ligation, and ovarian hyperstimulation from IVF. "
      "(2) Presentation: sudden-onset severe unilateral lower abdominal or pelvic pain (often severe, often with waxing and waning if the torsion is intermittent), nausea and vomiting (common, can dominate), and sometimes a palpable mass. "
      "Pain may radiate to the back, groin, or flank, and is often severe enough that the patient is writhing — out of proportion to exam findings early. "
      "The clinical picture can mimic appendicitis, renal colic, ectopic pregnancy, tubo-ovarian abscess, endometrioma rupture, or gastroenteritis. "
      "(3) Workup. "
      "Beta-hCG in any woman of reproductive age to rule out pregnancy and evaluate for ectopic. "
      "Pelvic (transvaginal) ultrasound with Doppler is the imaging study of choice: shows an enlarged ovary, often with peripheral follicles ('string of pearls' appearance), free fluid, ovarian mass as lead point, and Doppler findings ranging from absent flow (late, high specificity but low sensitivity — preserved flow does NOT rule out torsion because of dual ovarian blood supply from ovarian and uterine arteries) to whirlpool sign. "
      "CT may identify the mass and alternative diagnoses but is less sensitive for torsion itself. "
      "MRI is reserved for pregnant patients or when ultrasound is nondiagnostic. "
      "(4) Management. "
      "Surgical exploration (usually laparoscopy) is both diagnostic and therapeutic. "
      "DETORSION and preservation of the ovary, even if appearing dusky or black, is now the standard of care — the ovary can recover remarkably well even after prolonged ischemia, and oophorectomy should be avoided unless clearly necrotic and nonviable. "
      "Cystectomy or fenestration of the underlying ovarian mass at the same operation reduces recurrence. "
      "Oophoropexy (fixation) may be considered in pediatric patients with recurrent torsion or abnormal anatomy. "
      "Broad-spectrum antibiotics, IV fluids, analgesia, and prompt OR transfer are key. "
      "(5) Classic pitfalls: (a) waiting for absent Doppler flow to diagnose torsion — by that point, the ovary is usually infarcted; any clinical and sonographic suspicion with unilateral adnexal enlargement and severe pain should prompt surgical exploration. "
      "(b) Performing unnecessary oophorectomy on a dusky ovary — detorse and observe for viability. "
      "(c) Missing torsion in pregnancy, pediatric, or postmenopausal patients because of atypical presentation — torsion can occur at any age with appropriate risk factors. "
      "(d) Forgetting concurrent ovarian pathology — address the underlying cyst or mass at the time of detorsion; pathology to rule out malignancy, especially in postmenopausal patients. "
      "(e) Not considering hemorrhagic ovarian cyst rupture, ectopic pregnancy, or PID — the differential of acute pelvic pain is broad; targeted history, exam, beta-hCG, and imaging narrow it."
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
    print(f'\nBatch 29B: {done}/{len(ENRICHMENTS)} enriched')
