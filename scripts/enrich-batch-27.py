#!/usr/bin/env python3
"""Batch 27 — Part A: 8 cases.

Cases: hypothyroidismrelated-hyponatremia, hypovolemic-shock-from-gastroenteritis,
       ibs-management, incarcerated-hernia-with-strangulation,
       incarcerated-incisional-hernia, incarcerated-inguinal-hernia,
       infectious-mononucleosis-with-tonsillar-hypertrophy, infective-endocarditis
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "hypothyroidismrelated-hyponatremia": {
    "diagnosis": "Severe Hypothyroidism (Myxedema Spectrum) with Symptomatic Hyponatremia",
    "coachFinal": (
      "Diagnosis: severe hypothyroidism (TSH 68) with symptomatic hyponatremia (Na 119) secondary to medication non-adherence. "
      "Key learning: "
      "(1) Hypothyroidism causes hyponatremia through two main mechanisms: reduced cardiac output with decreased renal perfusion triggering non-osmotic ADH release, and direct impaired free-water excretion at the distal nephron. "
      "The hyponatremia is typically euvolemic or mildly hypovolemic with a picture that can mimic SIADH (low serum osmolality, inappropriately concentrated urine, urine sodium over 20). "
      "TSH should be checked in any workup of unexplained hyponatremia, along with cortisol, glucose, lipids, and a medication review. "
      "(2) Severity of hyponatremia drives urgency. "
      "Severe (under 120) or symptomatic hyponatremia (seizures, obtundation, respiratory compromise) requires immediate correction with hypertonic 3% saline — typically 100-150 mL boluses repeated up to three times — aiming to raise sodium by 4-6 mEq/L in the first few hours to reverse symptoms. "
      "Chronic hyponatremia must be corrected slowly: no more than 8-10 mEq/L in 24 hours (some guidelines say 6-8), to avoid osmotic demyelination syndrome (formerly called central pontine myelinolysis). "
      "Check sodium every 2-4 hours during active correction. "
      "(3) Myxedema coma is the extreme end of the spectrum and is a true emergency. "
      "It presents with hypothermia, bradycardia, hypotension, hyponatremia, hypoglycemia, hypoventilation (CO2 retention), and altered mental status. "
      "Treatment is emergent IV levothyroxine 200-400 mcg loading dose then 50-100 mcg daily, plus IV hydrocortisone 100 mg q8h (given empirically because coexisting adrenal insufficiency is common and treating hypothyroidism alone can precipitate adrenal crisis), plus supportive care including mechanical ventilation, warming, and IV fluids. "
      "Always give hydrocortisone BEFORE or WITH levothyroxine, never after, if adrenal status is uncertain. "
      "(4) Long-term management hinges on adherence and proper administration. "
      "Levothyroxine should be taken on an empty stomach, at least 30-60 minutes before food, and separated from calcium, iron, antacids, PPIs, and cholestyramine which impair absorption. "
      "Recheck TSH 6-8 weeks after any dose change. "
      "In elderly patients and those with known CAD, start low (25-50 mcg daily) and titrate slowly to avoid precipitating ischemia. "
      "(5) Classic pitfalls: (a) correcting hyponatremia too rapidly, precipitating osmotic demyelination, which is typically irreversible and presents days later with quadriparesis, dysphagia, dysarthria, and locked-in syndrome. "
      "(b) Giving thyroid hormone without steroid coverage in possible adrenal insufficiency. "
      "(c) Missing myxedema coma in an older patient attributed to stroke, dementia, or sepsis. "
      "(d) Forgetting that medication non-adherence is the most common cause of 'refractory' hypothyroidism — always ask non-judgmentally about what the patient is actually taking, how often, and whether they can afford their medications."
    )
  },

  "hypovolemic-shock-from-gastroenteritis": {
    "diagnosis": "Hypovolemic Shock from Acute Gastroenteritis",
    "coachFinal": (
      "Diagnosis: hypovolemic shock from acute viral gastroenteritis in an elderly patient with CKD and HFpEF. "
      "Key learning: "
      "(1) The four classic types of shock — hypovolemic, cardiogenic, distributive, and obstructive — require different management but can coexist. "
      "Hypovolemic shock is characterized by decreased preload from volume loss (hemorrhagic or non-hemorrhagic) and presents with tachycardia, hypotension, cool extremities, decreased capillary refill, oliguria, and altered mental status. "
      "In gastroenteritis-related hypovolemia, fluid losses are both extracellular (isotonic losses in diarrhea) and occasionally intracellular (water loss in fever), and potassium and bicarbonate losses can be substantial. "
      "(2) Assessment of volume status uses the classic shock indices: tachycardia often precedes hypotension (compensated shock), narrow pulse pressure reflects vasoconstriction, shock index (HR/SBP) over 0.9 suggests shock, and lactate elevation indicates tissue hypoperfusion. "
      "In the elderly, beta-blockers can mask tachycardia, and baseline hypertension means 'normal' BPs may actually represent significant hypotension. "
      "Bedside point-of-care ultrasound can help distinguish shock types (IVC collapse and small LV in hypovolemia, IVC plethora in cardiogenic, preserved squeeze with distributive). "
      "(3) Resuscitation strategy balances volume repletion against fluid overload risk in patients with CKD and HFpEF. "
      "Initial approach: 500 mL to 1 L bolus of balanced crystalloid (lactated Ringer's or Plasma-Lyte preferred over normal saline for large-volume resuscitation to avoid hyperchloremic metabolic acidosis), reassess every 500 mL, and follow clinical response (BP, HR, mental status, urine output, lactate clearance). "
      "Target MAP at least 65 but individualize — a patient with chronic BP of 170/90 may need MAP 80-90 to perfuse their brain and kidneys. "
      "(4) Address electrolyte and acid-base derangements alongside resuscitation. "
      "Gastroenteritis commonly causes hypokalemia (diarrhea), hyponatremia, hypomagnesemia, metabolic acidosis (bicarbonate loss with diarrhea, tissue hypoperfusion), and contraction alkalosis (vomiting with chloride loss). "
      "Replete potassium aggressively in symptomatic hypokalemia, and magnesium because potassium cannot be fully restored in the setting of hypomagnesemia. "
      "Empiric antibiotics are generally NOT indicated for uncomplicated viral gastroenteritis — consider only for prolonged fever, bloody diarrhea in the right clinical context, or severe C. difficile or systemic illness. "
      "(5) Classic pitfalls: (a) under-resuscitating the elderly out of fear of fluid overload, causing prolonged hypoperfusion, AKI, and sepsis-like physiology. "
      "(b) Using normal saline in large volumes, causing a hyperchloremic metabolic acidosis that worsens renal perfusion. "
      "(c) Missing a surgical abdomen in an elderly patient attributed to gastroenteritis — mesenteric ischemia, perforated diverticulitis, and bowel obstruction can mimic gastroenteritis but require emergent surgery. "
      "(d) Forgetting to consider C. difficile in any patient with recent antibiotic exposure, hospitalization, or prolonged diarrhea — send stool for GDH/toxin or PCR."
    )
  },

  "ibs-management": {
    "diagnosis": "Irritable Bowel Syndrome — Diagnosis and Management",
    "coachFinal": (
      "Diagnosis: irritable bowel syndrome (IBS), mixed subtype (IBS-M). "
      "Key learning: "
      "(1) IBS is a disorder of gut-brain interaction (formerly called a 'functional' disorder) diagnosed by the Rome IV criteria: recurrent abdominal pain at least 1 day per week over 3 months, associated with at least two of (a) relation to defecation (improved or worsened), (b) change in stool frequency, or (c) change in stool form. "
      "Subtypes are IBS-C (constipation), IBS-D (diarrhea), IBS-M (mixed), and IBS-U (unclassified) based on Bristol stool chart predominance. "
      "(2) IBS is now a positive diagnosis, not one of exclusion. "
      "A limited workup is sufficient in the absence of alarm features: CBC, CMP, TSH, celiac serology (tTG-IgA with total IgA), and C-reactive protein or fecal calprotectin to screen for inflammatory bowel disease. "
      "In IBS-D, also consider stool studies and bile acid diarrhea workup. "
      "Age-appropriate colon cancer screening should be up to date. "
      "Alarm features that mandate deeper investigation include: onset age over 50, nocturnal symptoms, unexplained weight loss, GI bleeding, iron deficiency anemia, family history of CRC or IBD, and progressive symptoms. "
      "(3) Management follows a stepped approach. "
      "First line is lifestyle and diet: regular exercise, adequate sleep, stress management (cognitive behavioral therapy and gut-directed hypnotherapy have the best evidence of any intervention for IBS). "
      "A low-FODMAP diet under dietitian guidance helps 50-75% of patients with IBS-D or IBS-M; it should be time-limited with structured reintroduction. "
      "Soluble fiber (psyllium) helps IBS-C; insoluble fiber (bran) often worsens symptoms. "
      "Peppermint oil (enteric-coated) has modest evidence for pain and bloating. "
      "(4) Pharmacologic options are subtype-specific. "
      "IBS-C: polyethylene glycol (PEG), linaclotide, plecanatide, lubiprostone, tenapanor. "
      "IBS-D: loperamide, eluxadoline, rifaximin (14-day course, can be repeated), bile acid sequestrants (cholestyramine) if bile acid diarrhea suspected, alosetron (restricted use in women with severe IBS-D). "
      "Pain: low-dose TCAs (amitriptyline, nortriptyline) and SNRIs (duloxetine) are effective for visceral hypersensitivity; antispasmodics (dicyclomine, hyoscyamine) help cramping. "
      "(5) Classic pitfalls: (a) over-investigating young patients with classic symptoms and no alarm features — repeated endoscopies, imaging, and labs drive cost without yielding new diagnoses. "
      "(b) Missing celiac disease, IBD, microscopic colitis, bile acid diarrhea, small intestinal bacterial overgrowth (SIBO), and lactose/fructose intolerance which can all mimic IBS. "
      "(c) Dismissing the patient as 'just stress' without offering concrete strategies — IBS has real physiologic underpinnings and validating the diagnosis is therapeutic. "
      "(d) Overlooking the strong comorbidity with anxiety, depression, and fibromyalgia — screening and treating these improves GI outcomes."
    )
  },

  "incarcerated-hernia-with-strangulation": {
    "diagnosis": "Incarcerated Inguinal Hernia with Strangulation (Surgical Emergency)",
    "coachFinal": (
      "Diagnosis: incarcerated inguinal hernia with strangulation. "
      "Key learning: "
      "(1) The hernia vocabulary matters clinically: reducible (contents return to the abdomen with manual pressure or position change), incarcerated (contents are trapped and cannot be reduced), and strangulated (incarcerated hernia with compromised blood supply to the contents — a surgical emergency). "
      "Strangulation is suggested by severe tenderness, erythema or skin changes over the hernia, peritoneal signs, fever, tachycardia, leukocytosis, and a firm, painful, irreducible bulge. "
      "The window before necrosis is short — ischemia can progress within hours. "
      "(2) Physical exam is high-yield. "
      "Examine the patient supine and standing, have them cough or Valsalva, and assess for reducibility with gentle pressure. "
      "In men with inguinal hernias, assess direct (through Hesselbach triangle, medial to inferior epigastric vessels) vs indirect (through the internal ring, lateral to the inferior epigastrics, often extending into the scrotum) — the distinction rarely changes acute management but informs repair planning. "
      "Femoral hernias (below the inguinal ligament) carry a much higher risk of incarceration and strangulation per unit time and are more common in women. "
      "(3) Workup for suspected strangulation: CBC (leukocytosis), lactate, BMP, CT abdomen/pelvis with IV contrast (to characterize the hernia, identify obstruction, assess bowel viability by looking for bowel wall thickening, pneumatosis, mesenteric stranding, and enhancement pattern). "
      "Bedside ultrasound can confirm incarceration at the bedside but CT is more definitive for operative planning. "
      "Upright chest X-ray or abdominal series can show free air or obstruction. "
      "(4) Management of strangulated hernia is emergent surgery: resuscitation with IV fluids, NG decompression for obstruction, broad-spectrum antibiotics, and operative reduction with bowel inspection and resection if necrotic. "
      "In incarcerated (not strangulated) hernias, a single gentle reduction attempt may be made (especially in pediatrics and in non-tender hernias) with adequate analgesia and Trendelenburg positioning, but do not attempt forceful reduction, and NEVER reduce an obviously strangulated hernia (risk of reducing dead bowel into the peritoneum, causing 'en-masse reduction' with ongoing perforation). "
      "Elective repair should follow within 24-72 hours in successful reductions of adults (pediatric timing varies). "
      "(5) Classic pitfalls: (a) missing a strangulated femoral hernia in an elderly woman with 'just some groin discomfort and nausea' — mortality is up to 10% in delayed cases. "
      "(b) Reducing what turns out to be dead bowel, leading to delayed presentation with peritonitis and sepsis. "
      "(c) Confusing inguinal lymphadenopathy, hydrocele, lipoma of the cord, and saphena varix for hernia — ultrasound or CT clarifies. "
      "(d) Forgetting to counsel all reducible hernia patients about warning signs of incarceration (persistent pain, bulge that won't push in, nausea/vomiting, fever) and when to return urgently."
    )
  },

  "incarcerated-incisional-hernia": {
    "diagnosis": "Incarcerated Incisional Hernia",
    "coachFinal": (
      "Diagnosis: incarcerated incisional (ventral) hernia. "
      "Key learning: "
      "(1) Incisional hernias develop through prior surgical incisions, usually midline laparotomy scars, with reported incidence of 10-20% after open abdominal surgery (higher with wound infection, obesity, COPD, diabetes, malnutrition, steroid use, connective tissue disease, and emergency surgery). "
      "They can present at any time from months to many years after the index operation. "
      "Incisional hernias tend to be larger and have more complex anatomy than primary ventral hernias, often with multiple defects, adhesions, and loss of domain (contents no longer 'fit' back in the abdominal cavity). "
      "(2) Presentation spans asymptomatic bulge to acute incarceration or strangulation. "
      "Classic clues to incarceration: sudden increase in pain, inability to reduce a previously reducible bulge, nausea, vomiting, and obstipation if bowel is involved. "
      "Physical exam documents size, reducibility, fascial defect dimensions, skin changes, and tenderness. "
      "Valsalva or standing accentuates the bulge. "
      "(3) Imaging is usually CT abdomen/pelvis with IV contrast — it defines the defect, characterizes contents (bowel, omentum, bladder), assesses bowel viability, identifies secondary obstruction, and plans repair. "
      "Look for transition points, bowel wall thickening, mesenteric stranding, pneumatosis, and free fluid. "
      "MRI is reserved for special cases. "
      "(4) Management. Emergent operation for strangulation or obstruction unresponsive to brief conservative measures. "
      "For incarcerated but non-strangulated hernias, a trial of gentle reduction under analgesia is reasonable in selected patients; if successful, plan semi-urgent or elective repair. "
      "Repair options depend on defect size, location, contamination, and patient factors: primary repair (small defects), mesh repair (most adults — reduces recurrence), component separation (large or complex defects with loss of domain), open vs laparoscopic vs robotic approach. "
      "Contamination (strangulated or perforated bowel) changes mesh choice: avoid synthetic permanent mesh in contaminated fields, use biologic or biosynthetic mesh or delayed repair. "
      "Optimize modifiable risk factors pre-operatively when elective: weight loss, smoking cessation, diabetic control, nutritional optimization, and prehabilitation. "
      "(5) Classic pitfalls: (a) repeatedly reducing a symptomatic incisional hernia without offering elective repair — recurrent incarceration increases emergency risk. "
      "(b) Using synthetic mesh in a contaminated field, leading to chronic mesh infection and reoperation. "
      "(c) Missing a Spigelian hernia along the semilunar line, which can mimic an incisional hernia and is often missed on exam. "
      "(d) Underestimating perioperative risk in obese, sarcopenic, or cardiopulmonary-compromised patients; dedicated hernia center referral improves outcomes in complex cases."
    )
  },

  "incarcerated-inguinal-hernia": {
    "diagnosis": "Right Incarcerated Inguinal Hernia with Early Bowel Ischemia (Premature Infant)",
    "coachFinal": (
      "Diagnosis: right incarcerated inguinal hernia with early bowel ischemia in a premature infant. "
      "Key learning: "
      "(1) Inguinal hernias in infants are almost always indirect (patent processus vaginalis), more common in males, and strongly associated with prematurity (up to 30% in very premature infants vs ~1-5% in term infants). "
      "They typically present as an intermittent groin or scrotal bulge during crying or straining. "
      "Because the inguinal canal is short in infants, incarceration is much more common than in adults, and strangulation can compromise not only bowel but also testicular viability via compression of the spermatic cord vessels. "
      "(2) Incarceration signs in infants: irritability/inconsolable crying, feeding intolerance, vomiting (especially bilious), abdominal distension, and a firm, tender, non-reducible bulge that may have skin changes. "
      "Differential includes hydrocele (transilluminates, non-tender, can be reduced with gentle pressure), testicular torsion (usually older), undescended testis, and lymphadenopathy. "
      "(3) Management depends on reducibility and distress. "
      "For a non-strangulated incarcerated inguinal hernia in an infant, gentle manual reduction under procedural sedation (by experienced pediatric surgeon) is typically attempted with Trendelenburg positioning and sustained gentle pressure — successful in 70-90% of cases. "
      "If reduction succeeds, surgical repair is scheduled within 24-72 hours (not immediately) to allow tissue edema to subside and reduce operative risk. "
      "If reduction fails or there are any signs of strangulation (tenderness, skin changes, systemic signs, bilious emesis), emergent surgical exploration is required. "
      "(4) Preterm considerations: pediatric surgical and anesthesia risks are higher in premature and ex-premature infants (apnea of prematurity, bronchopulmonary dysplasia, thermoregulatory issues). "
      "Post-operative apnea monitoring is standard for ex-preterm infants under a corrected gestational age threshold (varies by center, typically under 50-60 weeks postmenstrual age). "
      "Bilateral exploration or repair has historically been considered but current practice is usually unilateral repair with observation (the contralateral patent processus closes in many cases). "
      "(5) Classic pitfalls: (a) mistaking a strangulated hernia for 'colic' or 'constipation' in a crying infant — always examine the groin in any fussy infant, and ask about a bulge. "
      "(b) Forceful reduction attempts that injure bowel or testicle. "
      "(c) Forgetting testicular viability — in an incarcerated inguinal hernia, the testicle on the affected side can infarct and should be assessed at surgery. "
      "(d) Underestimating anesthesia risk in ex-preterm infants — coordinate carefully with pediatric anesthesia, ensure post-op apnea monitoring, and avoid outpatient surgery below the institutional PMA cutoff."
    )
  },

  "infectious-mononucleosis-with-tonsillar-hypertrophy": {
    "diagnosis": "Infectious Mononucleosis with Severe Tonsillar Hypertrophy",
    "coachFinal": (
      "Diagnosis: infectious mononucleosis (EBV) with severe tonsillar hypertrophy and risk of airway compromise. "
      "Key learning: "
      "(1) Infectious mononucleosis is classically caused by Epstein-Barr virus (EBV), though CMV, HIV acute retroviral syndrome, toxoplasmosis, and other viruses can cause mononucleosis-like syndromes. "
      "The classic tetrad is fever, pharyngitis/tonsillitis (often with exudate), posterior cervical lymphadenopathy, and fatigue, often with splenomegaly (50%) and hepatomegaly (10-15%). "
      "Atypical lymphocytosis on peripheral smear and transaminitis are common. "
      "Diagnosis is usually by heterophile (Monospot) testing, which can be falsely negative early (first week) and in young children; EBV-specific serology (VCA IgM, VCA IgG, EBNA) is more reliable and distinguishes acute from past infection. "
      "(2) Severe tonsillar hypertrophy — 'kissing tonsils' meeting at the midline — can cause airway compromise, dysphagia, dehydration, and in extreme cases obstructive sleep apnea with respiratory failure. "
      "Watch for stridor, drooling, trismus, muffled voice, and tripod posture (similar to epiglottitis). "
      "ENT consultation is warranted for severe cases. "
      "Short courses of corticosteroids (prednisone or dexamethasone) are reserved for airway compromise, severe dysphagia preventing hydration, hemolytic anemia, or severe thrombocytopenia — routine steroid use is NOT recommended because of unclear long-term effects on immune regulation. "
      "(3) A classic and important pitfall: treating presumed strep pharyngitis with amoxicillin or ampicillin in an EBV-infected patient produces a dramatic morbilliform rash in most patients (the 'ampicillin-EBV rash'). "
      "This is NOT a true penicillin allergy but is often labeled as such, constraining future antibiotic choices. "
      "Always consider mononucleosis in adolescents and young adults with sore throat and fatigue before prescribing penicillins; heterophile testing and CBC with differential guide the diagnosis. "
      "(4) Splenic rupture is the most feared complication — spontaneous or minor-trauma rupture can occur up to 6-8 weeks after illness onset, with highest risk in weeks 2-3. "
      "Counsel all patients (especially athletes) to avoid contact sports, strenuous activity, and heavy lifting for at least 3-4 weeks and until splenomegaly resolves. "
      "Document return precautions: sudden left upper quadrant or left shoulder pain (Kehr sign), lightheadedness, syncope. "
      "Hematologic complications include autoimmune hemolytic anemia (cold agglutinins, IgM to I antigen), thrombocytopenia, and rarely hemophagocytic lymphohistiocytosis (HLH). "
      "(5) Classic pitfalls: (a) giving amoxicillin for 'strep' without checking rapid strep or considering mono. "
      "(b) Missing the diagnosis in older adults where presentation is more nonspecific (fatigue, transaminitis without classic pharyngitis). "
      "(c) Not counseling activity restriction for splenic rupture prevention. "
      "(d) Forgetting to test for HIV in any young adult with a mononucleosis-like syndrome — acute HIV can present identically and is a diagnosis with major public health and treatment implications."
    )
  },

  "infective-endocarditis": {
    "diagnosis": "Tricuspid Valve Infective Endocarditis (MSSA) — IVDU-Associated",
    "coachFinal": (
      "Diagnosis: tricuspid valve infective endocarditis (IE) due to methicillin-sensitive Staphylococcus aureus (MSSA), IVDU-associated. "
      "Key learning: "
      "(1) Infective endocarditis diagnosis uses the Modified Duke Criteria. "
      "Major criteria: (a) positive blood cultures with typical organism (Staph aureus, viridans strep, HACEK, enterococci from community acquisition without primary focus) in 2 separate draws, OR persistent bacteremia; (b) evidence of endocardial involvement — vegetation, abscess, or new valvular regurgitation on echo. "
      "Minor criteria: predisposing condition (IVDU, prosthetic valve, structural heart disease), fever over 38, vascular phenomena (septic emboli, Janeway lesions, mycotic aneurysm, intracranial hemorrhage), immunologic phenomena (Osler nodes, Roth spots, glomerulonephritis, rheumatoid factor), and microbiologic evidence not meeting major criteria. "
      "Definite IE = 2 major, 1 major + 3 minor, or 5 minor. "
      "(2) Blood culture strategy is essential: 3 sets from separate sites, spaced over 1 hour if hemodynamically stable (longer if possible to demonstrate persistence), BEFORE antibiotics when feasible. "
      "Culture-negative IE (5-10% of cases) suggests prior antibiotics, HACEK, Bartonella, Coxiella (Q fever), Brucella, fungi, or Tropheryma whipplei — send special serologies and consult infectious disease. "
      "(3) Echocardiography is required. "
      "Transthoracic echo (TTE) is first-line with good specificity but sensitivity only ~60% for native valve IE and ~30% for prosthetic valve IE; it is usually adequate for tricuspid IE in IVDU. "
      "Transesophageal echo (TEE) is indicated when TTE is negative but suspicion remains high, for prosthetic valves, for suspected paravalvular abscess or complications, and for pre-operative planning. "
      "(4) Treatment is long-course IV antibiotics, typically 4-6 weeks, chosen by organism and valve. "
      "Right-sided MSSA IE in IVDU with uncomplicated disease can sometimes be treated with 2 weeks of combination therapy (cefazolin or nafcillin/oxacillin plus gentamicin), but most contemporary guidelines favor 4-6 weeks. "
      "Left-sided IE always requires 4-6 weeks. "
      "Surgery indications: heart failure from valve dysfunction, uncontrolled infection despite appropriate antibiotics, persistent bacteremia beyond 5-7 days of therapy, abscess or fistula formation, large vegetations (over 10 mm) with embolic events, prosthetic valve dehiscence, and fungal or highly resistant organisms. "
      "Consult cardiac surgery early for complicated cases. "
      "(5) Classic pitfalls: (a) starting empiric antibiotics before adequate blood cultures are drawn, leading to culture-negative IE and uncertain diagnosis. "
      "(b) Undertreating IVDU patients because of stigma — IE in this population deserves the same aggressive workup, surgical consultation, and ID input as any other patient. "
      "(c) Missing septic pulmonary emboli (multiple peripheral nodules and cavities on chest CT) in right-sided IE. "
      "(d) Failing to offer addiction medicine consultation, medications for opioid use disorder (MOUD: buprenorphine or methadone), hepatitis C screening and treatment, HIV screening, and harm reduction counseling — the highest mortality in this population is from recurrent IE or overdose after discharge, not the index infection."
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
    print(f'\nBatch 27A: {done}/{len(ENRICHMENTS)} enriched')
