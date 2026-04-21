#!/usr/bin/env python3
"""Batch 28 — Part B: 7 cases.

Cases: meningioma, mesenteric-lymphadenitis, metabolic, midgut-volvulus,
       migraine-management, migraine-with-aura, migraine
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "meningioma": {
    "diagnosis": "Right Parasagittal Meningioma with New-Onset Seizure and Midline Shift",
    "coachFinal": (
      "Diagnosis: right parasagittal meningioma (4.8 cm) presenting with new-onset focal seizure, contralateral focal deficits, and 8 mm midline shift. "
      "Key learning: "
      "(1) Meningiomas are the most common primary CNS tumor in adults, arising from arachnoidal cap cells. "
      "Most (about 80%) are WHO grade 1 (benign), with grade 2 (atypical) and grade 3 (anaplastic/malignant) being progressively aggressive. "
      "Common locations are parasagittal/convexity (most common, classic for motor and sensory deficits when near the precentral/postcentral gyri), sphenoid wing, posterior fossa, and skull base. "
      "Risk factors include female sex (about 2:1), prior cranial radiation, and neurofibromatosis type 2. "
      "(2) Presentation depends on location and growth rate. "
      "Because meningiomas grow slowly, patients often tolerate substantial tumors before becoming symptomatic. "
      "Classic presentations: new-onset focal seizure (often the first symptom of a convexity meningioma), progressive focal deficit, headache (often positional, worse in morning), cognitive or personality change (frontal), visual loss (optic nerve sheath, sphenoid wing), cranial neuropathies (skull base), and signs of increased intracranial pressure in large lesions. "
      "(3) Imaging. MRI with and without contrast is the study of choice: meningiomas appear extra-axial, homogeneously enhancing with a 'dural tail' (enhancement extending along the dura), have CSF cleft between tumor and brain, and often cause peritumoral edema. "
      "Midline shift greater than 5 mm is a warning sign of impending herniation and demands urgent management. "
      "CT shows a well-circumscribed, hyperdense extra-axial mass often with calcifications and hyperostosis of adjacent bone. "
      "(4) Management depends on size, location, symptoms, and grade. "
      "Incidental small asymptomatic meningiomas (under 2-3 cm, stable, away from critical structures) — observe with serial MRI. "
      "Symptomatic or growing lesions — surgical resection is standard (Simpson grade reflects completeness of resection; complete removal including involved dura and bone gives lowest recurrence). "
      "Stereotactic radiosurgery (SRS) is an alternative for small, surgically inaccessible, or residual lesions. "
      "Fractionated radiation is used for incomplete resections or grade 2/3 tumors. "
      "Dexamethasone reduces peritumoral edema and symptoms but does not treat the tumor; levetiracetam or other AED for seizures. "
      "(5) Classic pitfalls: (a) missing the diagnosis in older women with slowly progressive cognitive decline attributed to dementia — image any 'atypical dementia' or unexplained focal findings. "
      "(b) Starting prophylactic AEDs in all meningioma patients — evidence supports AEDs only in those who have had a seizure, not universal prophylaxis. "
      "(c) Under-recognizing sagittal sinus invasion in parasagittal meningiomas — MRV or MRA is essential preoperatively because sinus involvement changes the operative approach and risk profile. "
      "(d) Forgetting that meningioma recurrence is long-term — all resected patients need serial MRI surveillance for years."
    )
  },

  "mesenteric-lymphadenitis": {
    "diagnosis": "Mesenteric Lymphadenitis (Appendicitis Mimic)",
    "coachFinal": (
      "Diagnosis: mesenteric lymphadenitis — a self-limited inflammation of mesenteric lymph nodes that mimics appendicitis. "
      "Key learning: "
      "(1) Mesenteric lymphadenitis is a common cause of right lower quadrant (RLQ) pain in children and young adults, often following a viral illness (especially upper respiratory or gastroenteritis). "
      "It is the most common nonsurgical entity mistaken for appendicitis in this age group. "
      "Pathogens classically associated: Yersinia enterocolitica and Y. pseudotuberculosis (can cause severe lymphadenitis with terminal ileitis — 'pseudoappendicitis'), adenovirus, EBV, Campylobacter, and Salmonella. "
      "Non-specific or 'idiopathic' mesenteric lymphadenitis is also common. "
      "(2) Clinical distinction from appendicitis can be difficult and often requires imaging. "
      "Features favoring mesenteric lymphadenitis: preceding or concurrent URI/gastroenteritis symptoms, pain that shifts rather than localizes persistently at McBurney's point, less guarding and rebound, and often a relatively well-appearing child despite complaining of significant pain. "
      "Features favoring appendicitis: pain migration from periumbilical to RLQ, anorexia, fever, rebound tenderness, and consistently elevated inflammatory markers. "
      "(3) Workup. CBC often shows mild leukocytosis in both conditions — not discriminatory. "
      "Ultrasound is the first-line imaging in children (radiation-free): mesenteric lymphadenitis shows clustered enlarged mesenteric nodes (over 8 mm short axis) in the right lower quadrant without appendicitis findings; appendicitis shows a non-compressible appendix over 6 mm with surrounding inflammation, hyperemia, or fecalith. "
      "If ultrasound is equivocal, CT with contrast or MRI (in selected centers) can clarify. "
      "Serial clinical reassessment is an important tool — if the diagnosis is unclear, admit for observation with frequent reexaminations rather than operate or discharge immediately. "
      "(4) Management. Supportive care: hydration, analgesics (acetaminophen, ibuprofen), antiemetics as needed, and clear return precautions. "
      "Symptoms typically resolve within 1-2 weeks. "
      "Specific antibiotics are NOT routine — most cases are viral or self-limited bacterial. "
      "Antibiotics are reserved for culture-proven Yersinia in immunocompromised or severely ill patients (doxycycline, TMP-SMX, or fluoroquinolone). "
      "(5) Classic pitfalls: (a) discharging with mesenteric lymphadenitis diagnosis and missing evolving appendicitis — always give clear precautions and follow-up within 24 hours, especially if pain worsens, fever rises, or vomiting persists. "
      "(b) Performing negative appendectomy in equivocal cases — modern imaging protocols and observation have reduced the negative appendectomy rate substantially; accept brief uncertainty rather than operating on every RLQ pain. "
      "(c) Missing alternative diagnoses: Crohn disease (terminal ileitis and lymphadenopathy can mimic), ovarian pathology in girls (torsion, ovarian cyst rupture, ectopic pregnancy if menarchal), Meckel diverticulitis, and testicular torsion in boys (always examine the scrotum in pediatric RLQ pain). "
      "(d) Forgetting that mesenteric lymphadenopathy has a broader differential beyond infection — lymphoma and other malignancies can present with persistent or systemic lymphadenopathy; arrange follow-up for atypical or recurrent cases."
    )
  },

  "metabolic": {
    "diagnosis": "Metabolic Seizure — Dual Etiology Hypoglycemia and Hyponatremia in Polypharmacy/CKD",
    "coachFinal": (
      "Diagnosis: metabolic seizure with dual etiology — severe hypoglycemia (BG 28) from glipizide and insulin plus hyponatremia (Na 124) from HCTZ, compounded by CKD. "
      "Key learning: "
      "(1) New-onset seizure in an older adult with comorbidities is rarely 'just epilepsy' — the differential is broad and includes metabolic, structural, infectious, vascular, and toxicologic causes. "
      "The mnemonic VITAMINS: Vascular (stroke, hemorrhage), Infectious (meningitis, encephalitis, abscess), Trauma, Autoimmune (paraneoplastic, autoimmune encephalitis), Metabolic (glucose, sodium, calcium, magnesium, uremia, hepatic), Iatrogenic (medications, withdrawal), Neoplastic, Structural/congenital. "
      "Every new seizure in an adult should get CBC, comprehensive metabolic panel, magnesium, phosphorus, calcium, glucose, lactate (often elevated postictally — trend to be sure), tox screen, ECG, and head CT emergently; MRI and EEG in stable patients after workup. "
      "(2) Hypoglycemia as a seizure cause is a critical miss — always check a glucose immediately in any seizing patient. "
      "Severe hypoglycemia (under 54 mg/dL) causes neuroglycopenia: confusion, focal deficits, seizure, coma. "
      "Sulfonylureas (glipizide, glyburide, glimepiride) are notoriously prone to prolonged hypoglycemia, especially in CKD (reduced clearance), elderly, malnourished, or when combined with insulin. "
      "Treatment: IV dextrose (D50W 25 g), then sustained infusion (D5 or D10) often required for 24-72 hours because sulfonylurea effect persists. "
      "Octreotide 50-100 mcg SQ q6-8h blocks pancreatic insulin release and is the specific antidote for sulfonylurea overdose — reduces recurrent hypoglycemia and dextrose requirements. "
      "(3) Hyponatremia-related seizures occur at rapid drops or at very low levels (often under 120). "
      "Thiazides (HCTZ) are a classic cause — they impair free-water excretion in the distal tubule and cause hyponatremia particularly in elderly women. "
      "Symptomatic or severe hyponatremia with seizures requires 3% hypertonic saline 100-150 mL IV bolus, repeat to resolve symptoms, then carefully controlled correction — aim for 4-6 mEq/L rise in the first few hours to stop seizures, then no more than 8-10 mEq/L in the first 24 hours to avoid osmotic demyelination. "
      "Check sodium every 2 hours. "
      "(4) Dual etiology is not an either/or — both must be corrected concurrently, and each exacerbates neurologic vulnerability. "
      "Additional considerations in this case: review the full medication list for other contributors (SSRIs, carbamazepine, opioids can cause hyponatremia; beta-blockers mask hypoglycemic awareness), identify and treat the precipitating event (infection, missed meal, dose change), and plan durable changes (switch HCTZ to calcium channel blocker or ACE-I for hypertension, adjust diabetes regimen to avoid sulfonylureas in CKD, education on sick-day rules). "
      "(5) Classic pitfalls: (a) giving empiric levetiracetam for a seizure and discharging without identifying reversible metabolic causes — patients return within days with recurrent seizures and worse outcomes. "
      "(b) Undertreating the hypoglycemia with a single ampule of D50 and missing the prolonged effect of sulfonylureas — requires sustained infusion and octreotide. "
      "(c) Correcting the hyponatremia too fast, causing osmotic demyelination syndrome. "
      "(d) Forgetting the 'stop the insulin and sulfonylurea' step — both should be held during admission and reviewed with the outpatient prescriber before resuming. "
      "(e) Missing the social/functional root cause — is the patient mixing up medications at home, unable to eat regularly, or confused about sliding-scale insulin? A home visit or pharmacy review can be high-impact."
    )
  },

  "midgut-volvulus": {
    "diagnosis": "Intestinal Malrotation with Midgut Volvulus",
    "coachFinal": (
      "Diagnosis: intestinal malrotation with midgut volvulus — a pediatric surgical emergency. "
      "Key learning: "
      "(1) Intestinal malrotation is a congenital anomaly of the embryologic gut rotation around the superior mesenteric artery, leaving the small bowel vulnerable to twisting on a narrow mesenteric base (volvulus). "
      "Incidence is about 1 in 500 live births, but only 60-90% of cases present in the first year of life (most in the first month); a significant minority present later in childhood or even adulthood. "
      "(2) The cardinal presentation in a previously healthy infant is BILIOUS vomiting. "
      "Bilious emesis in a newborn or infant is midgut volvulus until proven otherwise — an absolute surgical emergency requiring immediate evaluation. "
      "Other features: sudden onset of abdominal pain and distension, poor feeding, bloody stools (late and ominous — indicates bowel ischemia), and signs of shock as ischemia progresses. "
      "The window to salvageable bowel is narrow — hours, not days. "
      "(3) Diagnosis. "
      "Upper GI contrast series is the gold standard: demonstrates abnormal position of the duodenojejunal junction (normally left of midline at the level of the pylorus), corkscrew or spiral appearance of the duodenum in volvulus, or complete obstruction. "
      "Ultrasound can show inversion of the superior mesenteric artery and vein relationship (normally SMV right of SMA; reversed in malrotation) and the 'whirlpool sign' of bowel twisting around the mesentery. "
      "Plain radiographs may be normal early, show gasless abdomen, or demonstrate obstruction — they do NOT rule out malrotation. "
      "CT is reserved for older children and adults. "
      "Do NOT delay surgery for imaging in an unstable or clearly surgical presentation. "
      "(4) Management is the Ladd procedure: (a) reduce the volvulus (counterclockwise detorsion — 'turn back the hands of time'), (b) divide Ladd bands, (c) widen the mesenteric base, (d) place the small bowel in the right abdomen and colon in the left (non-rotated position), and (e) appendectomy (because the appendix will be in an abnormal location in the future). "
      "Resection of necrotic bowel if ischemia is present. "
      "Preoperative resuscitation with fluids, correction of electrolytes and acidosis, NG decompression, and broad-spectrum antibiotics. "
      "(5) Classic pitfalls: (a) attributing bilious vomiting in an infant to feeding intolerance, reflux, or viral gastroenteritis and delaying workup — every bilious vomit in a neonate gets emergent evaluation. "
      "(b) Waiting for X-rays or CT that may not show volvulus — clinical suspicion with appropriate exam triggers immediate surgical consultation and often direct-to-OR without imaging in sick patients. "
      "(c) Missing malrotation in older children and adults with chronic intermittent abdominal pain and bilious vomiting — they may have a lifetime of symptoms attributed to functional GI disorder and then present with acute volvulus. "
      "(d) Forgetting associated anomalies — malrotation is associated with heterotaxy syndromes, CDH, gastroschisis, omphalocele, and duodenal atresia; look for them and arrange appropriate follow-up."
    )
  },

  "migraine-management": {
    "diagnosis": "Status Migrainosus — Acute and Preventive Management",
    "coachFinal": (
      "Diagnosis: status migrainosus (severe migraine lasting over 72 hours) requiring IV abortive therapy, with a treatment plan for acute rescue and preventive therapy going forward. "
      "Key learning: "
      "(1) Migraine is a primary headache disorder diagnosed clinically using ICHD-3 criteria: at least 5 attacks lasting 4-72 hours, with at least 2 of (a) unilateral, (b) pulsating, (c) moderate-severe intensity, (d) aggravation by routine physical activity, AND at least one of (a) nausea/vomiting or (b) photophobia AND phonophobia. "
      "Status migrainosus is a debilitating migraine lasting over 72 hours despite usual abortive therapy. "
      "Before labeling any severe headache as migraine, rule out secondary causes with the 'SNOOP' red flags: Systemic symptoms or signs (fever, weight loss, cancer history), Neurologic deficits or altered consciousness, Onset sudden (thunderclap), Older age onset (over 50), Pattern change or Pregnancy/postpartum. "
      "(2) Acute abortive therapy follows a stepwise approach. "
      "Mild-moderate migraine: NSAIDs (naproxen, ibuprofen), acetaminophen, or combination analgesics. "
      "Moderate-severe migraine: triptans (sumatriptan is the workhorse — SQ for fastest onset, nasal for intermediate, oral for convenience; other triptans include rizatriptan, eletriptan, frovatriptan for longer half-life); CGRP antagonists (gepants — ubrogepant, rimegepant, zavegepant); ditans (lasmiditan — no vasoconstriction, option for patients with cardiovascular risk). "
      "ED/IV abortive regimen for status migrainosus: IV fluids, metoclopramide or prochlorperazine (dopamine antagonists are also effective abortives), ketorolac, magnesium (1-2 g IV), dexamethasone (8-10 mg to prevent recurrence), and consideration of DHE (dihydroergotamine) infusion in refractory cases. "
      "Avoid opioids and butalbital — they are less effective and drive medication overuse headache. "
      "(3) Preventive therapy is indicated for 4+ migraine days/month, significant disability despite acute therapy, or inability to tolerate acute therapy. "
      "Oral preventives: beta-blockers (propranolol, metoprolol), topiramate, amitriptyline or venlafaxine, candesartan, and valproate (avoid in women of childbearing potential). "
      "CGRP monoclonal antibodies: erenumab, fremanezumab, galcanezumab (monthly or quarterly SQ injections); atogepant and rimegepant (oral daily). "
      "OnabotulinumtoxinA injections every 12 weeks for chronic migraine (≥15 headache days/month with ≥8 migraine days). "
      "Trigger identification and lifestyle modifications: regular sleep, regular meals, hydration, exercise, stress reduction, limiting dietary triggers, and treating comorbid depression/anxiety. "
      "(4) Medication overuse headache (MOH) is a major cause of chronic daily headache: develops with frequent acute medication use (simple analgesics more than 15 days/month, triptans/ergots/opioids/combinations more than 10 days/month). "
      "Treatment requires withdrawal of the offending agent (abrupt for triptans, NSAIDs, acetaminophen; gradual for barbiturates and opioids), bridge therapy (NSAIDs, dexamethasone, DHE, or anti-nausea agents), and starting preventive therapy simultaneously. "
      "(5) Classic pitfalls: (a) labeling every severe headache as migraine without ruling out SAH, giant cell arteritis, venous sinus thrombosis, carotid/vertebral dissection, and pituitary apoplexy — any SNOOP feature triggers imaging. "
      "(b) Over-reliance on opioids or butalbital-containing products — drive MOH and rarely help migraine. "
      "(c) Not offering preventive therapy to patients with frequent or disabling migraines — undertreatment is common. "
      "(d) Forgetting that triptans are contraindicated in uncontrolled hypertension, ischemic heart disease, stroke, peripheral vascular disease, hemiplegic migraine, and basilar migraine — use ditans or gepants in these patients."
    )
  },

  "migraine-with-aura": {
    "diagnosis": "Migraine with Prolonged Visual Aura and Sensory Extension (PFO-Associated)",
    "coachFinal": (
      "Diagnosis: migraine with prolonged visual aura and sensory aura extension, with patent foramen ovale (PFO) association. "
      "Key learning: "
      "(1) Migraine with aura accounts for about 25-30% of all migraines. "
      "Aura is a fully reversible focal neurologic symptom that develops gradually over 5-20 minutes, lasts less than 60 minutes (though prolonged aura over 60 minutes occurs in some patients), and is usually followed by a migraine headache within 60 minutes — though aura without headache ('acephalgic migraine') is recognized. "
      "Visual auras are most common (scintillating scotoma, zigzag fortification spectra, visual field loss), followed by sensory (paresthesias spreading up the arm or face), aphasic (speech disturbance), and motor (hemiparesis in hemiplegic migraine, a distinct subtype). "
      "(2) The differential for aura includes transient ischemic attack, seizure, retinal artery occlusion, multiple sclerosis, and pseudotumor cerebri. "
      "Distinguishing features of migraine aura: gradual onset and spread (cortical spreading depression propagates at 2-6 mm/min), positive phenomena (flashing lights, zigzags — rather than the pure negative phenomena of TIA), evolution through visual then sensory then speech over 15-30 minutes, and association with headache. "
      "Any first-ever aura, aura lasting over 60 minutes, atypical features (sudden onset, purely negative symptoms, cardiovascular risk factors), or aura persisting despite normal examination warrants workup with MRI brain and sometimes MRA/vascular imaging to exclude stroke or TIA. "
      "(3) Migraine with aura carries increased risk of ischemic stroke, particularly in young women, smokers, users of combined oral contraceptives, and those with patent foramen ovale. "
      "The mechanism is incompletely understood — cortical spreading depression may affect vascular function; paradoxical embolism through PFO may play a role in some cases. "
      "Clinical implications: combined estrogen-containing contraceptives are contraindicated in migraine with aura (risk of ischemic stroke); progestin-only methods and non-hormonal options are preferred. "
      "Smoking cessation is critical. "
      "Aspirin may reduce stroke risk but is not universally recommended — individualize based on risk. "
      "(4) PFO and migraine: observational studies show higher PFO prevalence in migraine with aura, and some patients report improvement in migraine frequency after PFO closure. "
      "However, randomized trials (MIST, PRIMA, PREMIUM) have NOT shown that routine PFO closure reduces migraine. "
      "PFO closure is reserved for patients with cryptogenic stroke and a PFO meeting specific criteria (large shunt, atrial septal aneurysm, etc.), not for migraine alone. "
      "Neurology and cardiology should collaborate when PFO-related paradoxical embolism is suspected. "
      "(5) Treatment of migraine with aura is similar to migraine without aura, with some caveats. "
      "Triptans can be used during aura or at headache onset — prior theoretical concerns about vasoconstriction during aura have not borne out in clinical practice. "
      "CGRP antagonists (gepants) and ditans (lasmiditan) are safe alternatives if triptans are contraindicated or not tolerated. "
      "Preventive therapy options are the same as for migraine without aura. "
      "Classic pitfalls: (a) missing TIA or ischemic stroke in a patient with 'typical' aura — new-onset aura over age 50, aura without headache, and aura with sustained deficits all warrant imaging. "
      "(b) Prescribing combined estrogen contraceptives to a migraine-with-aura patient. "
      "(c) Closing a PFO for migraine alone without clear indication. "
      "(d) Confusing hemiplegic migraine with stroke and inappropriately giving tPA — hemiplegic migraine is a known mimic but remains a diagnosis of exclusion after neuroimaging."
    )
  },

  "migraine": {
    "diagnosis": "Chronic Migraine with Aura and Medication Overuse Headache",
    "coachFinal": (
      "Diagnosis: chronic migraine with aura, complicated by medication overuse headache (MOH). "
      "Key learning: "
      "(1) Chronic migraine is defined as headache on 15 or more days per month for at least 3 months, with features of migraine on at least 8 of those days. "
      "It evolves from episodic migraine in about 2-3% of patients per year, driven by modifiable risk factors: medication overuse, obesity, depression, anxiety, poor sleep, and caffeine overuse. "
      "Recognizing and treating these co-drivers is as important as the migraine-specific therapy. "
      "(2) Medication overuse headache is a common complication and a major driver of chronic migraine. "
      "Diagnostic criteria: headache on 15+ days/month in a patient with pre-existing primary headache, regular overuse for 3+ months of acute or symptomatic headache medication, and headache that develops or worsens during medication overuse. "
      "Overuse thresholds: simple analgesics (NSAIDs, acetaminophen) more than 15 days/month; triptans, ergots, opioids, or combination analgesics more than 10 days/month. "
      "MOH should be suspected in any patient with chronic daily headache who has escalated acute medication use. "
      "(3) Management of MOH requires dual strategy: withdraw the offending agent AND start preventive therapy. "
      "Withdrawal: abrupt for triptans, NSAIDs, and acetaminophen (often causes rebound headache for 3-14 days); gradual taper for barbiturates (butalbital — risk of seizure) and opioids. "
      "Bridge therapy during withdrawal: NSAIDs if not overused, a short corticosteroid course (e.g., dexamethasone 4-8 mg daily x 5-7 days or prednisone taper), DHE infusion, or antiemetics. "
      "Simultaneously start preventive therapy (see below) so that when acute medications are removed, the patient has a preventive floor already in place. "
      "(4) Preventive therapy for chronic migraine. "
      "First-line oral options: beta-blockers (propranolol, metoprolol), topiramate, amitriptyline, candesartan. "
      "OnabotulinumtoxinA (Botox) every 12 weeks — approved specifically for chronic migraine (PREEMPT protocol, 31 injections across head and neck). "
      "CGRP pathway — both monoclonal antibodies (erenumab, fremanezumab, galcanezumab, eptinezumab) and oral gepants (atogepant, rimegepant for both acute and prevention) — have transformed chronic migraine treatment in the past several years. "
      "Nonpharmacologic: cognitive behavioral therapy, biofeedback, relaxation training, regular aerobic exercise, consistent sleep, hydration, trigger identification, and treatment of comorbid anxiety and depression. "
      "(5) Classic pitfalls: (a) continuing to dispense acute medications to a chronic daily headache patient without recognizing MOH and initiating preventive therapy. "
      "(b) Using opioids or butalbital chronically — these are the worst offenders for MOH and should be avoided in migraine care. "
      "(c) Expecting immediate improvement after medication withdrawal — patients often feel worse for 1-2 weeks before improvement; counseling and support during this period determine success. "
      "(d) Missing comorbid conditions that drive chronic migraine: obstructive sleep apnea, depression, anxiety, obesity, fibromyalgia, and temporomandibular dysfunction — each should be screened and treated. "
      "(e) Forgetting the lifestyle foundation: regular sleep, regular meals, regular exercise, hydration, and stress management do more long-term than any single medication for many patients."
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
    print(f'\nBatch 28B: {done}/{len(ENRICHMENTS)} enriched')
