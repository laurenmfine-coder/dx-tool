#!/usr/bin/env python3
"""Batch 26 (handoff 'Batch 23') — Part B: remaining 6 cases.

Cases: hyperkalemia-with-concurrent-acs, hyperkalemic-cardiac-emergency,
       hypersensitivity-pneumonitis, hypertensive-emergency,
       hyperthermia-nms, hypoglycemia
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "hyperkalemia-with-concurrent-acs": {
    "diagnosis": "Severe Hyperkalemia with Concurrent Type 2 NSTEMI and Acute-on-Chronic Kidney Injury",
    "coachFinal": (
      "Diagnosis: severe hyperkalemia (K 7.8) with concurrent type 2 NSTEMI, acute-on-chronic kidney injury, and decompensated heart failure. "
      "Key learning: "
      "(1) Hyperkalemia is a true emergency when K is over 6.5, when ECG changes are present, or when the patient is symptomatic. "
      "The classic ECG progression is peaked T waves, then PR prolongation, then loss of P waves and QRS widening, then the sine-wave pattern that precedes asystole or VF. "
      "ECG changes do not correlate perfectly with the potassium number — some patients tolerate K 7 with minimal ECG change, others arrest at 6.2 — so always treat based on ECG and clinical status, not the number alone. "
      "(2) Emergency management follows a memorized algorithm with three simultaneous goals: stabilize the membrane, shift potassium into cells, and eliminate potassium from the body. "
      "Membrane stabilization: IV calcium gluconate 1-2 g (or calcium chloride via central line) given immediately if any ECG changes — it does not lower K but antagonizes the membrane effects within minutes and buys time. "
      "Intracellular shift: regular insulin 10 units IV with dextrose (D50W 25 g) drops K by 0.5-1 mEq/L within 30 minutes; albuterol 10-20 mg nebulized adds another 0.5-1 mEq/L drop; sodium bicarbonate is useful primarily in acidemic patients. "
      "Elimination: loop diuretics if the patient still makes urine, potassium binders (patiromer, sodium zirconium cyclosilicate, or older sodium polystyrene sulfonate), and hemodialysis when refractory or the patient is anuric. "
      "(3) The concurrent NSTEMI adds important complexity. Type 2 NSTEMI (demand ischemia from hypotension, anemia, tachycardia, hypoxia) is distinct from type 1 (acute plaque rupture) and the management differs — type 2 requires treating the underlying trigger rather than immediate cath lab activation. "
      "However, always rule out type 1 by trending troponin, serial ECGs, and clinical assessment; if any doubt, involve cardiology early. "
      "Hyperkalemia itself can mimic MI on ECG (peaked T waves can look like hyperacute T waves), so the differential must stay open. "
      "(4) Review every medication for potassium-elevating or potassium-retaining effects: ACE-inhibitors, ARBs, spironolactone, eplerenone, amiloride, triamterene, trimethoprim, heparin, NSAIDs, beta-blockers, digoxin toxicity, and succinylcholine. "
      "In CKD patients, these drugs are often still reasonable for cardioprotection but require closer potassium monitoring and sometimes dose reduction. "
      "(5) Classic pitfalls: (a) treating a pseudohyperkalemia without recognizing it — hemolyzed sample, tourniquet time, fist clenching, leukocytosis over 100k, or thrombocytosis can falsely elevate K; always repeat with a free-flowing sample if the clinical picture does not fit. "
      "(b) Giving insulin without dextrose in a non-diabetic or hypoglycemic patient, precipitating severe hypoglycemia. "
      "(c) Under-treating by giving calcium once and moving on — calcium effect lasts 30-60 minutes; redose if ECG changes return. "
      "(d) Forgetting that kayexalate/SPS alone is too slow for emergency management and has risks of intestinal necrosis in high-risk patients — use newer binders when available."
    )
  },

  "hyperkalemic-cardiac-emergency": {
    "diagnosis": "Hyperkalemic Cardiac Emergency from Adrenal Crisis with Acute Kidney Injury",
    "coachFinal": (
      "Diagnosis: hyperkalemic cardiac emergency secondary to acute adrenal crisis (Addisonian crisis) with acute kidney injury. "
      "Key learning: "
      "(1) Adrenal crisis is life-threatening and often missed because its presentation overlaps with sepsis, hypovolemia, and gastroenteritis. "
      "The cardinal features are hypotension refractory to fluids, hyperkalemia, hyponatremia, hypoglycemia, and nonspecific GI symptoms (nausea, vomiting, abdominal pain). "
      "Any patient with known primary adrenal insufficiency who becomes ill, any patient on chronic steroids who misses doses or has an acute stressor, and any patient with unexplained hypotension plus hyperkalemia plus hyponatremia should be suspected of adrenal crisis until proven otherwise. "
      "(2) Treatment is emergent and must not wait for confirmatory testing. "
      "Give hydrocortisone 100 mg IV immediately (followed by 50-100 mg IV every 6 hours or a continuous infusion), aggressive IV saline resuscitation (often 2-3 L in the first hours), dextrose if hypoglycemic, and treat the inciting stressor (infection, surgery, trauma). "
      "A cosyntropin stimulation test can be done later when the patient is stable, but dexamethasone is preferred over hydrocortisone if stimulation testing is planned soon because it does not interfere with cortisol assays. "
      "In practice, hydrocortisone is almost always chosen because it has both glucocorticoid and mineralocorticoid activity at stress doses. "
      "(3) The hyperkalemia and AKI in adrenal crisis are driven by aldosterone deficiency (loss of Na+/K+ and Na+/H+ exchange in the distal nephron) plus volume depletion from vomiting and decreased oral intake. "
      "Hyperkalemia management follows the same algorithm as any other cause — calcium for membrane stabilization if ECG changes, insulin/glucose and albuterol for intracellular shift, loop diuretics and binders for elimination — but the unique feature is that the hyperkalemia often resolves rapidly once cortisol replacement and volume resuscitation begin. "
      "(4) Distinguish primary (Addison disease — autoimmune, TB, adrenal hemorrhage, metastatic disease) from secondary (pituitary failure, chronic steroid use with abrupt taper) adrenal insufficiency. "
      "Primary has hyperpigmentation (ACTH-driven melanocyte stimulation), hyperkalemia, and hyponatremia (aldosterone loss). "
      "Secondary typically has normal K and less hyperpigmentation because aldosterone is preserved (regulated by renin-angiotensin, not ACTH). "
      "(5) Classic pitfalls: (a) giving only fluids for hypotension without cortisol — the hypotension of adrenal crisis does not respond to fluids or pressors alone. "
      "(b) Forgetting stress-dose steroids in a patient on chronic prednisone who needs surgery, develops infection, or has major trauma (triple the home dose for minor illness, stress doses for major illness or surgery). "
      "(c) Missing Waterhouse-Friderichsen syndrome (acute adrenal hemorrhage from severe bacterial sepsis, classically meningococcus) in a septic patient with refractory hypotension. "
      "(d) Not counseling known adrenal insufficiency patients about sick-day rules and injectable emergency hydrocortisone (Solu-Cortef) — every patient should have one at home."
    )
  },

  "hypersensitivity-pneumonitis": {
    "diagnosis": "Chronic Fibrotic Hypersensitivity Pneumonitis (Bird Fancier's Lung)",
    "coachFinal": (
      "Diagnosis: chronic fibrotic hypersensitivity pneumonitis (bird fancier's lung) from prolonged avian antigen exposure. "
      "Key learning: "
      "(1) Hypersensitivity pneumonitis (HP) is a type III and type IV immune response to inhaled organic antigens, now classified into two phenotypes: non-fibrotic (acute/subacute) and fibrotic (chronic). "
      "Classic antigens: bird proteins (bloom, feathers, droppings) causing bird fancier's/bird breeder's lung; thermophilic actinomycetes in moldy hay causing farmer's lung; Aspergillus and Penicillium in water-damaged buildings; isocyanates in spray painting; metalworking fluids; hot tub use (Mycobacterium avium complex). "
      "(2) Presentation varies. Non-fibrotic HP resembles a flu-like illness 4-8 hours after exposure with cough, dyspnea, fever, and myalgias that improve with removal. "
      "Fibrotic HP presents like IPF: insidious exertional dyspnea, chronic cough, weight loss, and bibasilar crackles over months to years. "
      "The diagnostic challenge is that by the time fibrosis develops, many patients do not remember or report the exposure, and the history must be taken with extraordinary care — ask specifically about birds, down pillows, feather duvets, humidifiers, hot tubs, water damage, and occupational exposures. "
      "(3) Diagnostic workup. HRCT is central: classic findings are ground-glass opacities, centrilobular nodules, and the 'three-density' or 'headcheese' sign (regions of ground-glass, normal lung, and air-trapping/mosaic attenuation). "
      "Fibrotic HP adds traction bronchiectasis, reticulation, and honeycombing, often with upper/mid-lung predominance (in contrast to IPF's basal predominance). "
      "Serum precipitating IgG antibodies to suspected antigens support the diagnosis but are neither sensitive nor specific. "
      "Bronchoalveolar lavage typically shows lymphocytosis (over 30%, often over 50%), which strongly supports HP. "
      "Surgical or transbronchial lung biopsy may be needed when imaging is atypical — classic histology is poorly formed non-necrotizing granulomas, bronchiolocentric lymphoid infiltrates, and giant cells. "
      "(4) Management. Antigen avoidance is the single most important intervention and can reverse non-fibrotic disease and halt progression in fibrotic disease. "
      "In this case, that means permanent removal of all birds from the home, thorough environmental cleaning, and vigilance against other avian exposures. "
      "Systemic corticosteroids (prednisone 0.5 mg/kg for 4-8 weeks with taper) help symptoms and gas exchange in non-fibrotic HP but have less impact on established fibrosis. "
      "Antifibrotics — nintedanib (INBUILD trial demonstrated slowing of FVC decline in progressive fibrosing ILDs including HP) and pirfenidone — are now standard for progressive fibrotic HP. "
      "Mycophenolate and azathioprine are options for steroid-sparing maintenance. "
      "(5) Classic pitfalls: (a) misdiagnosing fibrotic HP as IPF and missing the reversible component — always take a meticulous exposure history in any patient with ILD. "
      "(b) Allowing continued exposure even after diagnosis — many patients struggle to give up beloved pets; a structured family discussion and often a social work consult help. "
      "(c) Failing to investigate household exposures in a spouse or co-resident. "
      "(d) Forgetting that down pillows, feather duvets, and feather comforters are hidden avian exposures that can sustain disease long after visible birds are removed."
    )
  },

  "hypertensive-emergency": {
    "diagnosis": "Hypertensive Emergency with End-Organ Damage (Hypertensive Encephalopathy, Progressive CKD)",
    "coachFinal": (
      "Diagnosis: hypertensive emergency with hypertensive encephalopathy and acute-on-chronic kidney injury. "
      "Key learning: "
      "(1) Hypertensive emergency is defined by severe hypertension (typically SBP over 180 or DBP over 120) PLUS evidence of acute end-organ damage. "
      "End-organ damage includes hypertensive encephalopathy, intracranial hemorrhage, acute ischemic stroke, acute coronary syndrome, aortic dissection, pulmonary edema, acute kidney injury, preeclampsia/eclampsia, and retinal hemorrhages with papilledema. "
      "Severe hypertension WITHOUT end-organ damage is 'hypertensive urgency' and is managed with oral medications and close outpatient follow-up, NOT aggressive parenteral therapy — this distinction matters because overly rapid lowering in urgency can cause ischemic injury. "
      "(2) The rate of BP reduction is as important as the target. "
      "General rule: reduce MAP by no more than 20-25% in the first hour, then gradually to 160/100-110 over the next 2-6 hours, then to near-normal over the next 24-48 hours. "
      "The major exceptions: aortic dissection (aim for SBP under 120 and HR under 60 within 20 minutes), ischemic stroke eligible for thrombolysis (under 185/110 before tPA, under 180/105 for 24 hours after), and intracerebral hemorrhage (SBP target 140 per INTERACT and ATACH). "
      "(3) Agent selection is tailored to the end-organ picture. "
      "Labetalol (alpha/beta blockade) is versatile and a workhorse for encephalopathy, pregnancy, and most emergencies. "
      "Nicardipine and clevidipine (IV calcium channel blockers) give smooth titration and are excellent for post-op and neurologic emergencies. "
      "Nitroprusside works but has cyanide and thiocyanate toxicity concerns with prolonged use or renal failure. "
      "Hydralazine is a good choice in pregnancy. "
      "Esmolol and labetalol are first line for aortic dissection (HR control before BP). "
      "Nitroglycerin is preferred for ACS and pulmonary edema. "
      "Avoid hydralazine and dihydropyridines alone in dissection (reflex tachycardia). "
      "(4) Workup should confirm end-organ damage and seek precipitants: ECG, troponin, BNP, chest X-ray, urinalysis, BMP, non-contrast head CT if any neurologic symptoms, fundoscopy (papilledema, flame hemorrhages), and review of medication adherence and ingestions (cocaine, amphetamines, MAOI-tyramine interactions). "
      "In young patients or those with resistant hypertension, secondary causes should be pursued: renal artery stenosis (especially fibromuscular dysplasia in young women), pheochromocytoma, primary aldosteronism, Cushing syndrome, coarctation of the aorta, and obstructive sleep apnea. "
      "(5) Classic pitfalls: (a) treating hypertensive urgency as an emergency and dropping the BP precipitously, causing watershed strokes or renal injury — if there is no acute end-organ damage, resume or restart oral therapy and arrange close follow-up. "
      "(b) Sublingual nifedipine is obsolete and dangerous — it causes unpredictable precipitous drops and should never be used. "
      "(c) Discharging without a clear outpatient plan, medication reconciliation, and follow-up within days. "
      "(d) Missing posterior reversible encephalopathy syndrome (PRES), which can present identically to hypertensive encephalopathy and has a characteristic MRI pattern in the posterior parieto-occipital regions."
    )
  },

  "hyperthermia-nms": {
    "diagnosis": "Neuroleptic Malignant Syndrome (NMS)",
    "coachFinal": (
      "Diagnosis: neuroleptic malignant syndrome (NMS) in a patient on an antipsychotic. "
      "Key learning: "
      "(1) NMS is an idiosyncratic reaction to dopamine D2 receptor blockade, classically from typical antipsychotics (haloperidol, fluphenazine) but also from atypicals (risperidone, olanzapine) and abrupt dopaminergic withdrawal in Parkinson disease. "
      "The tetrad is fever, rigidity (lead-pipe, generalized), autonomic instability (labile BP, tachycardia, diaphoresis), and altered mental status. "
      "Onset is typically over hours to days after initiation or dose increase. "
      "Labs show markedly elevated CK (often over 1000, sometimes over 10,000), leukocytosis, and metabolic acidosis; complications include rhabdomyolysis, AKI, aspiration pneumonia, DIC, and cardiovascular collapse. "
      "(2) The critical differential is serotonin syndrome, which presents similarly but has key distinguishing features: NMS has 'lead-pipe' rigidity (sustained, generalized) while serotonin syndrome has hyperreflexia, clonus (especially lower extremity), and tremor. "
      "Serotonin syndrome onset is faster (within 24 hours of serotonergic agent initiation or interaction) and often involves GI symptoms (diarrhea, nausea). "
      "Other mimics: malignant hyperthermia (triggered by volatile anesthetics or succinylcholine, treated with dantrolene), anticholinergic toxicity (dry, hot skin without rigidity), sympathomimetic toxicity (cocaine, amphetamines), and heat stroke (exertional or environmental, core over 40 C, altered mental status — but no rigidity or drug trigger). "
      "(3) Management is supportive and specific. "
      "STOP the offending antipsychotic immediately. "
      "Aggressive cooling (evaporative, cold IV fluids, ice packs to groin/axillae), airway protection if obtunded, and ICU admission. "
      "IV fluids are essential — patients are often profoundly dehydrated and at risk for pigment nephropathy from rhabdomyolysis (target urine output 200-300 mL/hr with bicarbonate-containing fluids if CK is very high). "
      "Specific therapies: dantrolene 1-2.5 mg/kg IV (direct muscle relaxant) for severe rigidity and hyperthermia; bromocriptine 2.5 mg PO/NG q8h (dopamine agonist); amantadine as alternative dopaminergic. "
      "Benzodiazepines for agitation and for mild cases. "
      "(4) Rechallenge. After recovery (usually 7-14 days), antipsychotics can often be cautiously restarted if clinically essential, preferring a lower-potency atypical agent, starting at low dose, and monitoring closely. "
      "Wait at least 2 weeks after full recovery, discuss risks with the patient, and document the plan. "
      "Recurrence risk is real but not inevitable — about 30% recur on rechallenge. "
      "(5) Classic pitfalls: (a) attributing fever and altered mental status to infection and missing the medication history — always review every medication in a febrile, encephalopathic patient, especially antipsychotics, antiemetics (metoclopramide, prochlorperazine), and serotonergic drugs. "
      "(b) Using typical antipsychotics to treat the agitation of presumed delirium without recognizing that they can cause NMS. "
      "(c) Not stopping all dopamine blockers — including antiemetics like metoclopramide and promethazine. "
      "(d) Missing the Parkinson disease patient who has abruptly discontinued levodopa — this is 'dopaminergic withdrawal NMS' and requires urgent restoration of their dopaminergic regimen."
    )
  },

  "hypoglycemia": {
    "diagnosis": "Severe Insulin-Induced Hypoglycemia in CKD",
    "coachFinal": (
      "Diagnosis: severe insulin-induced hypoglycemia in a patient with chronic kidney disease. "
      "Key learning: "
      "(1) Hypoglycemia in diabetes is defined by the ADA three-level classification: level 1 (glucose 54-70 mg/dL, alert), level 2 (under 54 mg/dL, neuroglycopenic symptoms and need for immediate action), and level 3 (any hypoglycemia requiring assistance from another person regardless of glucose number — this is severe hypoglycemia and the key clinical endpoint). "
      "Presentation spans adrenergic symptoms (tremor, palpitations, sweating, anxiety — mediated by catecholamine release) and neuroglycopenic symptoms (confusion, behavioral change, slurred speech, seizures, coma — from direct CNS glucose deprivation). "
      "Elderly patients, long-standing diabetics, and those on beta-blockers may have 'hypoglycemia unawareness' — loss of adrenergic warning symptoms so that neuroglycopenia is the first sign. "
      "(2) Acute management. For the conscious patient with a functional GI tract: 15-20 g fast-acting oral carbohydrate (4 oz juice, glucose tablets, 1 tablespoon sugar), recheck in 15 minutes, repeat if still under 70, then follow with a complex-carb snack or meal. "
      "For the unconscious patient or one unable to swallow safely: IV dextrose (D50W 25 g = 50 mL of 50% dextrose through a large-bore peripheral or central line, or D10W 250 mL if only smaller access available). "
      "If no IV access: glucagon 1 mg IM/SQ (now also available as intranasal) — works within 10-15 minutes but less effective in malnourished, alcohol-intoxicated, or glycogen-depleted patients. "
      "After correction, IV dextrose infusion (D5W or D10W) may be needed, especially with long-acting insulin or sulfonylurea overdose. "
      "(3) CKD uniquely predisposes to prolonged and recurrent hypoglycemia because (a) insulin clearance is reduced (kidney accounts for ~30-40% of insulin clearance, and this falls with GFR), (b) gluconeogenesis in the kidney contributes ~20-25% of endogenous glucose production in the fasted state, and (c) drug metabolism of oral agents changes. "
      "Clinical implications: reduce insulin doses as GFR falls, avoid glyburide (prolonged half-life in CKD with severe hypoglycemia risk), use glipizide cautiously or prefer meglitinides, and reconsider metformin at very low GFR (generally stopped under 30). "
      "(4) Prolonged observation after sulfonylurea overdose is essential — even after apparent correction, hypoglycemia can recur repeatedly for 24-72 hours, so admit for monitoring. "
      "Octreotide (50-100 mcg SQ q6-8h) blocks pancreatic insulin release and is specific therapy for sulfonylurea-induced hypoglycemia, dramatically reducing dextrose requirements. "
      "(5) Classic pitfalls: (a) treating hypoglycemia and discharging home without identifying and correcting the cause — skipped meal, increased activity, dose error, interacting medication, worsening renal function, or evolving cognitive decline affecting self-management. "
      "(b) Under-dosing correction and the glucose drifting back down — always recheck in 15 minutes. "
      "(c) Failing to ask about alcohol use — alcohol inhibits gluconeogenesis and is a classic overlooked cause of severe hypoglycemia, especially in the fasted state. "
      "(d) Giving glucagon to a sulfonylurea-poisoned patient as if it would solve the problem — glucagon transiently raises glucose but insulin release then spikes again; octreotide is the right adjunct. "
      "(e) Forgetting to evaluate for insulinoma or factitious hypoglycemia in a non-diabetic patient with recurrent fasting hypoglycemia (check insulin, C-peptide, proinsulin, sulfonylurea screen during a symptomatic low)."
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
    print(f'\nBatch 26B: {done}/{len(ENRICHMENTS)} enriched')
