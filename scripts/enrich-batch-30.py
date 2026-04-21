#!/usr/bin/env python3
"""Batch 30 — Part A: 8 cases.

Cases: pathologic-fracture, pe-v1, perforated-peptic-ulcer, perianal-abscess,
       peritonsillar-abscess-v2, peritonsillar-cellulitis, pheochromocytoma,
       phlegmasia-cerulea-dolens
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "pathologic-fracture": {
    "diagnosis": "Pathologic Fracture (Metastatic Prostate Cancer)",
    "coachFinal": (
      "Diagnosis: pathologic fracture from metastatic prostate cancer. "
      "Key learning: "
      "(1) A pathologic fracture is one that occurs through abnormal bone weakened by underlying disease — most commonly metastatic malignancy, but also multiple myeloma, osteoporosis, Paget disease, osteogenesis imperfecta, benign tumors (e.g., unicameral bone cyst), osteomyelitis, and metabolic bone disease. "
      "Suspect pathologic fracture whenever a fracture occurs after low-energy or trivial trauma, when there is preceding bone pain (especially nocturnal or rest pain), in patients with known malignancy, or when imaging shows a lytic or blastic lesion adjacent to the fracture line. "
      "(2) The most common sources of bony metastases are the 'BLT-KP' mnemonic: Breast, Lung, Thyroid, Kidney, Prostate — with breast and prostate being the two most common. "
      "Prostate cancer typically causes osteoblastic (sclerotic) lesions that appear dense on X-ray, while breast, lung, kidney, and thyroid tend to produce osteolytic (lucent) lesions. "
      "Mixed lesions occur. "
      "Sites with highest metastatic burden: vertebral bodies (especially lumbar and thoracic), pelvis, ribs, proximal femur, proximal humerus, and skull. "
      "(3) Workup. "
      "Dedicated imaging of the fracture site (plain films, CT) to characterize fracture pattern and underlying lesion. "
      "MRI is superior for defining extent of marrow involvement, soft tissue components, and spinal cord compression. "
      "Bone scan (Tc-99m MDP) surveys the whole skeleton for additional lesions. "
      "PET-CT is increasingly used for staging and treatment planning. "
      "Laboratory: CBC, CMP, calcium (watch for hypercalcemia of malignancy), alkaline phosphatase, PSA (prostate), SPEP/UPEP/free light chains (rule out myeloma in any unexplained lytic lesion), and imaging of primary sites when unknown (CT chest/abdomen/pelvis, mammogram, thyroid US). "
      "Biopsy of the lesion when primary is unknown — histology, molecular profiling, and hormone receptor status drive treatment. "
      "(4) Management is multidisciplinary. "
      "Orthopedic: stabilization or fixation (intramedullary nailing, plating, or arthroplasty for peri-articular lesions) before or instead of radiation for weight-bearing bones with impending or established pathologic fracture. "
      "Mirels scoring helps stratify risk of impending fracture in long bones (site, pain, lesion type, size — score >=9 recommends prophylactic fixation). "
      "Radiation oncology: palliative external beam radiation (single-fraction 8 Gy effective and convenient, or fractionated 30 Gy in 10 fractions) provides pain relief in >60% of patients and reduces further fracture. "
      "Medical oncology: systemic therapy guided by primary (androgen deprivation therapy and advanced agents for prostate cancer — enzalutamide, abiraterone, apalutamide, docetaxel, radium-223 for bony metastases). "
      "Bone-targeted therapy: zoledronic acid or denosumab reduces skeletal-related events (SREs — pathologic fracture, spinal cord compression, need for radiation or surgery to bone, hypercalcemia). "
      "Attention to hypercalcemia of malignancy (IV saline, bisphosphonate, calcitonin) and spinal cord compression (urgent neurologic exam, MRI, dexamethasone, surgical decompression or urgent radiation). "
      "(5) Classic pitfalls: (a) missing pathologic fracture in an elderly patient with a 'simple' hip fracture — always review for lytic or blastic changes on imaging and screen for occult malignancy if fracture pattern is atypical or preceding bone pain is reported. "
      "(b) Treating a pathologic fracture of a long bone with internal fixation without post-op radiation — residual tumor at the fixation site causes recurrence and hardware failure; coordinate with radiation oncology. "
      "(c) Not recognizing impending pathologic fracture in time — Mirels and clinical assessment identify patients needing prophylactic fixation before catastrophic fracture. "
      "(d) Missing spinal cord compression — new back pain with neurologic symptoms in a cancer patient is an emergency warranting urgent MRI and steroids."
    )
  },

  "pe-v1": {
    "diagnosis": "Acute Pulmonary Embolism",
    "coachFinal": (
      "Diagnosis: acute pulmonary embolism (PE). "
      "Key learning: "
      "(1) PE is a common diagnosis that spans a wide severity spectrum, and clinical risk stratification dictates workup and treatment. "
      "Use pretest probability tools (Wells score, Geneva score) to categorize patients as low, moderate, or high probability. "
      "PERC rule (PE Rule-out Criteria) can rule out PE clinically in very low risk patients without any testing — all 8 criteria must be met (age <50, HR <100, SpO2 >=95% on room air, no hemoptysis, no estrogen use, no prior DVT/PE, no unilateral leg swelling, no surgery/trauma in past 4 weeks). "
      "D-dimer (with age-adjusted cutoff in patients over 50: age x 10 ng/mL) has high sensitivity for ruling out PE in low-to-moderate probability patients. "
      "CTPA is the imaging gold standard; V/Q scan for patients with contrast allergy or significant CKD. "
      "(2) Risk stratification of confirmed PE guides treatment: "
      "(a) HIGH-RISK (massive) PE: sustained hypotension (SBP under 90 for at least 15 min or requiring vasopressors), cardiac arrest, or obstructive shock. "
      "(b) INTERMEDIATE-RISK (submassive) PE: hemodynamically stable with RV dysfunction on echo or CT (RV/LV ratio over 0.9) AND/OR positive troponin or BNP. "
      "(c) LOW-RISK PE: hemodynamically stable, no RV strain, normal biomarkers — candidates for outpatient management with select DOACs. "
      "PESI/sPESI scores stratify 30-day mortality risk. "
      "(3) Treatment. "
      "Anticoagulation is the foundation for all PE. "
      "Initial options: DOACs (apixaban, rivaroxaban — both can start immediately without heparin bridge for stable patients; dabigatran and edoxaban require 5-10 days of parenteral anticoagulation first), LMWH (enoxaparin) plus warfarin bridge, or unfractionated heparin (preferred in massive PE, severe CKD, or likely to need procedural intervention). "
      "Duration: at least 3 months for provoked PE; indefinite for unprovoked, recurrent, persistent risk factors (active cancer, antiphospholipid syndrome), or continuing major risk. "
      "Advanced therapies: "
      "(a) Systemic thrombolysis (alteplase 100 mg over 2 hours) for massive PE without contraindications. "
      "(b) Catheter-directed thrombolysis or mechanical thrombectomy for massive PE with relative lysis contraindications or for selected intermediate-high-risk PE. "
      "(c) Surgical pulmonary embolectomy for lysis failure, absolute lysis contraindications, or clot-in-transit. "
      "(d) IVC filter for absolute anticoagulation contraindications — retrieve when anticoagulation is safe to resume. "
      "(4) Supportive care: oxygen for hypoxemia, cautious fluid (250-500 mL boluses with reassessment — over-resuscitation worsens RV failure), norepinephrine as first-line vasopressor if hypotensive, vasopressin adjunct (no increase in pulmonary vascular resistance), and avoidance of aggressive intubation pre-reperfusion (positive pressure and induction agents can precipitate cardiac arrest in failing RV). "
      "(5) Classic pitfalls: (a) missing PE in a patient with atypical presentation (syncope, isolated dyspnea, postpartum malaise) — maintain a low threshold for testing in any patient with unexplained dyspnea or shock. "
      "(b) Ordering D-dimer in high-pretest-probability patients — a positive D-dimer adds nothing and a negative is unreliable; go straight to imaging. "
      "(c) Withholding thrombolysis in truly massive PE out of bleeding fear — mortality of untreated massive PE is 30-50%. "
      "(d) Forgetting long-term considerations: CTEPH screening at 3-6 months with V/Q or echo in symptomatic patients; thrombophilia workup only in selected patients (unusual site, young age, strong family history) because most positive results don't change duration of therapy in unprovoked PE; cancer screening in unprovoked PE over age 40."
    )
  },

  "perforated-peptic-ulcer": {
    "diagnosis": "Perforated Peptic Ulcer",
    "coachFinal": (
      "Diagnosis: perforated peptic ulcer with acute peritonitis. "
      "Key learning: "
      "(1) Perforation is the most serious complication of peptic ulcer disease, with mortality 5-30% depending on age, comorbidities, and time to surgery. "
      "Most perforated ulcers are duodenal (anterior duodenal bulb) rather than gastric. "
      "Risk factors: H. pylori infection, NSAID and aspirin use (especially combined with steroids or anticoagulants), smoking, corticosteroids, chronic alcohol use, and physiologic stress (burns, trauma, critical illness — stress ulceration). "
      "(2) Classical triad: sudden severe epigastric pain, abdominal rigidity, and absent/hypoactive bowel sounds. "
      "Patients often describe the exact moment pain began (helpful historical clue). "
      "Subsequent phases: (a) Chemical peritonitis phase (first 2-6 hours) — acute epigastric pain becomes generalized, rigidity, guarding, rebound, tachycardia. "
      "(b) Reactive phase (6-12 hours) — temporary symptomatic improvement as peritoneal exudate dilutes gastric contents — a dangerous lull. "
      "(c) Diffuse bacterial peritonitis (after 12 hours) — sepsis, shock, ileus, multiorgan failure. "
      "Physical exam: abdominal rigidity, diffuse tenderness, absent bowel sounds, obliteration of hepatic dullness (air in peritoneum), tachycardia, hypotension in late presentation. "
      "(3) Workup. "
      "Upright chest X-ray: free air under the diaphragm (pneumoperitoneum) in 75-80% of cases — the classic finding but absent in 20-25%. "
      "CT abdomen/pelvis with IV contrast (oral contrast typically omitted) is more sensitive — demonstrates free air (sometimes minimal), fluid, and may identify the perforation site. "
      "Labs: CBC (leukocytosis), CMP, lactate, amylase/lipase (elevated because of exposure to peritoneal contents, can mimic pancreatitis), coagulation, type and crossmatch, cultures. "
      "(4) Management. "
      "(a) Resuscitation: IV fluids, broad-spectrum antibiotics covering gram-negative and anaerobes (piperacillin-tazobactam, or ceftriaxone + metronidazole), proton pump inhibitor (IV pantoprazole), NG decompression, Foley catheter, correction of coagulopathy, and pain control. "
      "(b) Operative repair is standard for most cases: laparoscopic or open primary repair with Graham patch (omental patch), peritoneal lavage, and drain placement. "
      "Partial gastrectomy in selected cases (large gastric ulcers, refractory disease, suspicion of malignancy — biopsy all gastric ulcers). "
      "(c) Nonoperative management with NG tube, antibiotics, and PPI may be considered in selected stable patients with sealed perforation and no peritonitis (confirmed by water-soluble contrast study showing no leak) — this is controversial and reserved for high-risk surgical candidates. "
      "(d) Post-op: H. pylori testing and eradication (essential — reduces recurrence), continued PPI, NSAID avoidance, and lifestyle modification. "
      "(5) Classic pitfalls: (a) missing perforation because of absent free air on CXR — CT is more sensitive, and clinical suspicion with peritoneal signs should prompt surgery even without imaging confirmation. "
      "(b) Being misled by the reactive phase — symptomatic improvement does not mean the perforation has healed; progression to sepsis is inevitable without surgery. "
      "(c) Missing malignancy in a gastric ulcer — always biopsy at the time of repair or within follow-up. "
      "(d) Failing to test and treat H. pylori postoperatively — the leading cause of recurrent ulceration and complications. "
      "(e) Forgetting NSAID counseling — many patients resume NSAIDs and re-perforate."
    )
  },

  "perianal-abscess": {
    "diagnosis": "Perianal Abscess",
    "coachFinal": (
      "Diagnosis: perianal abscess — a common anorectal infection requiring surgical drainage. "
      "Key learning: "
      "(1) Anorectal abscesses arise from obstruction and infection of the anal glands in the intersphincteric space, then spread along preformed potential spaces into one of four locations: "
      "(a) Perianal (most common, 40-45%) — superficial, near the anal verge, visible and tender erythematous fluctuance. "
      "(b) Ischiorectal (20-25%) — deeper, extends into the ischiorectal fossa, causes buttock pain and induration but may not have visible findings. "
      "(c) Intersphincteric (2-5%) — between internal and external anal sphincters, causes anorectal pain without external findings — diagnosed by DRE or imaging. "
      "(d) Supralevator (2-10%) — deepest and most dangerous, can extend from pelvic pathology (diverticulitis, Crohn, appendicitis, GYN source); requires MRI and often multidisciplinary management. "
      "(2) Presentation: severe anorectal pain, often worse with sitting and defecation, fever, malaise. "
      "Physical exam: visible fluctuant mass and erythema for perianal abscesses; for deeper abscesses, DRE may reveal a tender mass or fluctuance, and tenderness may be disproportionate to visible findings. "
      "Imaging (CT or MRI pelvis) for deeper spaces, atypical presentations, or patients with Crohn disease. "
      "Ultrasound, especially endoanal/transperineal, is operator-dependent but helpful. "
      "(3) Management is surgical drainage — antibiotics alone are inadequate for established abscess. "
      "Simple perianal abscesses: incision and drainage in the emergency department or clinic under local anesthesia, with incision as close to the anal verge as possible to minimize fistula tract length if one develops. "
      "Deeper, larger, or complex abscesses: OR drainage under general or regional anesthesia, often with seton placement if fistula is identified. "
      "Post-drainage: sitz baths, analgesics, high-fiber diet, no routine packing needed for most simple abscesses. "
      "(4) Antibiotics are NOT routinely required after simple drainage in immunocompetent patients. "
      "Indications for antibiotics: systemic symptoms (fever, sepsis), extensive cellulitis, diabetes, immunocompromise (HIV, chemotherapy, chronic steroids), valvular heart disease (prophylaxis controversy but often given), signs of necrotizing infection, or MRSA concerns. "
      "Coverage: oral amoxicillin-clavulanate or metronidazole plus ciprofloxacin for outpatient; IV piperacillin-tazobactam or carbapenem for severe cases. "
      "(5) Fistula-in-ano develops in 30-50% after perianal abscess drainage. "
      "Presentation: persistent drainage, recurrent abscess at the same site, visible external opening. "
      "Workup: exam under anesthesia, MRI for complex or recurrent cases, and Goodsall rule for predicting internal opening location. "
      "Treatment: fistulotomy for simple, low fistulas; seton placement and staged procedures for high or complex fistulas to preserve continence. "
      "Classic pitfalls: (a) diagnosing and treating as 'external hemorrhoid' or 'skin irritation' and missing abscess — any patient with severe anorectal pain disproportionate to visible findings needs examination under adequate analgesia and sometimes imaging. "
      "(b) Treating with antibiotics alone without drainage — leads to expansion and sepsis. "
      "(c) Missing Crohn disease as the underlying cause of recurrent or atypical abscess/fistula — all patients with recurrent disease should be evaluated with colonoscopy and appropriate GI workup. "
      "(d) Forgetting that supralevator abscesses may arise from pelvic pathology — CT/MRI and broad differential are essential. "
      "(e) Not recognizing necrotizing anorectal infection (Fournier gangrene) in diabetic or immunocompromised patients — requires urgent broad-spectrum antibiotics and extensive surgical debridement."
    )
  },

  "peritonsillar-abscess-v2": {
    "diagnosis": "Peritonsillar Abscess",
    "coachFinal": (
      "Diagnosis: peritonsillar abscess (PTA, 'quinsy') — the most common deep neck space infection in adolescents and young adults. "
      "Key learning: "
      "(1) PTA is a collection of pus in the potential space between the tonsillar capsule and the superior constrictor muscle, typically arising from progression of bacterial tonsillitis. "
      "Microbiology is polymicrobial: group A Streptococcus is the most common single pathogen; mixed with oral anaerobes (Fusobacterium, Prevotella, Peptostreptococcus), Staphylococcus (including MRSA), and other streptococci. "
      "Fusobacterium necrophorum is a particularly important anaerobe because it can lead to Lemierre syndrome (septic thrombophlebitis of the internal jugular vein with septic emboli — see pitfalls). "
      "(2) Presentation — often in a patient with 3-7 days of worsening sore throat: severe unilateral throat pain, dysphagia and drooling, trismus (jaw muscle spasm from pterygoid irritation), muffled 'hot potato' voice, ipsilateral ear pain, fever, tender cervical lymphadenopathy. "
      "Exam: unilaterally enlarged tonsil displaced medially and inferiorly, uvular deviation to the contralateral side, bulging of the soft palate above the tonsil. "
      "Distinguish from peritonsillar cellulitis (no discrete pus collection — treated with antibiotics alone, often indistinguishable on exam without imaging or aspiration). "
      "(3) Workup. "
      "Clinical diagnosis is often sufficient in a classic presentation. "
      "CT neck with IV contrast for atypical presentations, suspected deeper extension (parapharyngeal or retropharyngeal), failed needle aspiration, or severe trismus preventing adequate exam. "
      "Intraoral ultrasound is an emerging, radiation-free alternative. "
      "Labs: CBC (leukocytosis), CMP, monospot or EBV serology (can mimic — though can also coexist; steroids used liberally if EBV tonsillitis). "
      "Rapid strep testing of the tonsil exudate. "
      "(4) Management. "
      "Drainage by needle aspiration (18-gauge needle, guarded to prevent deep penetration into the carotid) or incision and drainage is the mainstay — usually performed at the bedside under local anesthesia. "
      "Send pus for Gram stain and culture. "
      "Empiric antibiotics: ampicillin-sulbactam IV, clindamycin, or amoxicillin-clavulanate for less severe outpatient cases. "
      "Penicillin-allergic: clindamycin. "
      "Add vancomycin if severe illness, failure to improve, or MRSA concern. "
      "Dexamethasone 10 mg IV reduces pain and swelling and is now routine. "
      "Hydration, analgesia, and close monitoring. "
      "Tonsillectomy (Quinsy tonsillectomy, either acute or delayed) is considered for recurrent PTA, concurrent airway compromise, or difficult drainage. "
      "(5) Classic pitfalls: (a) missing LEMIERRE SYNDROME — in a patient with PTA or pharyngitis (often from Fusobacterium necrophorum) who develops neck pain, fever, and sepsis, suspect septic thrombophlebitis of the internal jugular vein. CT neck with contrast identifies the thrombus; septic pulmonary emboli are common; treatment is prolonged antibiotics (penicillin + metronidazole or piperacillin-tazobactam) for weeks, with anticoagulation controversial. "
      "(b) Carotid artery injury during needle aspiration — always use a guarded needle and aspirate along the tonsillar pillar, not posterior. "
      "(c) Discharging a patient who cannot tolerate oral intake or has persistent trismus — admit for IV hydration and antibiotics. "
      "(d) Not considering airway compromise in bilateral PTA or very large unilateral abscess — early ENT consultation and preparation for airway intervention. "
      "(e) Missing mononucleosis in a young adult with tonsillar swelling — avoid amoxicillin (rash) and counsel activity restriction for splenic rupture prevention."
    )
  },

  "peritonsillar-cellulitis": {
    "diagnosis": "Peritonsillar Cellulitis",
    "coachFinal": (
      "Diagnosis: peritonsillar cellulitis — inflammation of the peritonsillar tissue without a discrete abscess. "
      "Key learning: "
      "(1) Peritonsillar cellulitis is along a continuum with peritonsillar abscess (PTA) — distinguished by the presence or absence of a drainable pus collection. "
      "The clinical presentation is similar: unilateral sore throat, dysphagia, muffled voice, trismus, fever — but without the classic findings of uvular deviation and bulging soft palate, or with milder versions. "
      "Distinction matters because cellulitis responds to antibiotics alone, whereas abscess requires drainage. "
      "(2) Diagnostic approach. "
      "Clinical exam is often indeterminate — the same patient might be classified as cellulitis by one clinician and PTA by another. "
      "Helpful modalities: intraoral ultrasound (operator-dependent but radiation-free — identifies fluid collection), CT neck with IV contrast (most definitive imaging, identifies pus collection and extent, assesses for deeper space involvement), or a diagnostic-therapeutic needle aspiration (if pus is obtained, it was an abscess; if no pus, cellulitis). "
      "In practice, many ENT and ED clinicians proceed with empiric aspiration attempt under local anesthesia when clinical suspicion is high. "
      "(3) Management of peritonsillar cellulitis: "
      "(a) IV antibiotics (ampicillin-sulbactam, clindamycin, or piperacillin-tazobactam for severe presentations) with response expected in 24-48 hours; conversion to oral (amoxicillin-clavulanate or clindamycin) once improving. "
      "(b) Dexamethasone 10 mg IV for edema and pain (now routinely used). "
      "(c) IV fluids, analgesia, warm saline gargles, and close monitoring. "
      "(d) Re-examination at 24-48 hours — if not improving or worsening, repeat imaging/aspiration because the cellulitis may have progressed to abscess. "
      "(4) Indications for ENT consultation and/or intervention: "
      "(a) Failure to improve within 24-48 hours of IV antibiotics. "
      "(b) Inability to tolerate oral intake. "
      "(c) Severe trismus preventing adequate exam. "
      "(d) Bilateral involvement. "
      "(e) Suspicion of deeper neck infection or airway compromise. "
      "(f) Immunocompromise, diabetes, or other risk factors for complication. "
      "Total antibiotic course 10-14 days. "
      "Patients who cannot tolerate oral intake or with severe trismus should be admitted; selected stable patients may be managed outpatient with close follow-up. "
      "(5) Classic pitfalls: (a) labeling a patient as 'cellulitis' without imaging or aspiration and missing an early abscess — follow patients closely and re-image if not improving. "
      "(b) Missing infectious mononucleosis as the underlying cause of bilateral tonsillar swelling — check heterophile test and avoid amoxicillin. "
      "(c) Missing Lemierre syndrome — same caveat as for PTA; any worsening neck pain, fever, or respiratory symptoms after peritonsillar infection warrants CT neck with contrast to evaluate for internal jugular vein thrombosis. "
      "(d) Discharging a penicillin-allergic patient on an inadequate oral regimen — clindamycin is an acceptable alternative. "
      "(e) Forgetting that recurrent peritonsillar infection (3+ episodes) is an indication for tonsillectomy evaluation."
    )
  },

  "pheochromocytoma": {
    "diagnosis": "Pheochromocytoma",
    "coachFinal": (
      "Diagnosis: pheochromocytoma — a catecholamine-secreting tumor, usually of the adrenal medulla. "
      "Key learning: "
      "(1) Pheochromocytoma is a rare but life-threatening cause of secondary hypertension. "
      "The classic triad is episodic headache, palpitations, and diaphoresis (three 'P's: pressure, palpitations, perspiration); hypertension is sustained in about half, paroxysmal in the rest. "
      "The 'rule of 10s' historically: 10% extra-adrenal (paraganglioma), 10% bilateral, 10% malignant, 10% pediatric, 10% familial — though with modern genetics, up to 30-40% are now recognized as hereditary. "
      "Genetic syndromes: MEN2A/B (RET), von Hippel-Lindau (VHL), neurofibromatosis type 1 (NF1), and mutations in succinate dehydrogenase (SDHx — especially SDHB which has higher malignancy risk). "
      "(2) Indications to screen: resistant hypertension, paroxysmal hypertension with headache/palpitations/diaphoresis, hypertensive crisis triggered by anesthesia/surgery/contrast/beta-blockers alone, unexplained orthostatic hypotension, adrenal incidentaloma, family history of pheochromocytoma/paraganglioma or MEN2/VHL/NF1/SDHx, and certain imaging characteristics of an adrenal mass. "
      "(3) Biochemical diagnosis — 24-hour urinary fractionated metanephrines and catecholamines, OR plasma free metanephrines drawn supine after 30 minutes rest. "
      "Plasma metanephrines have higher sensitivity; urine has higher specificity. "
      "Metanephrines are more specific than catecholamines because they represent continuous metabolism within the tumor rather than episodic release. "
      "Levels more than 3-4x upper limit of normal are strongly positive. "
      "Confirmation with imaging: CT or MRI adrenals/abdomen (most pheochromocytomas are adrenal and >3 cm at diagnosis, often with cystic or hemorrhagic areas, Hounsfield units >10 on CT). "
      "MIBG scintigraphy, 68Ga-DOTATATE PET-CT, or FDG-PET for localization of extra-adrenal tumors or metastatic disease. "
      "Genetic testing is recommended for all patients due to high rate of underlying hereditary syndromes. "
      "(4) Preoperative management is critical and specific. "
      "(a) ALPHA-BLOCKADE FIRST — phenoxybenzamine (noncompetitive, long-acting) or doxazosin/terazosin (competitive) started 7-14 days before surgery. "
      "Target BP about 120/80 seated, 90/45 standing (intentional orthostasis to confirm adequate blockade). "
      "(b) Beta-blockade ONLY AFTER alpha-blockade is adequate — adding beta-blocker first causes unopposed alpha-mediated vasoconstriction and can precipitate hypertensive crisis, pulmonary edema, and cardiovascular collapse. "
      "Used for tachycardia/arrhythmia after alpha-blockade. "
      "(c) High salt diet and liberal fluids to expand intravascular volume (pheo patients are volume-depleted from chronic vasoconstriction). "
      "(d) Surgery: laparoscopic adrenalectomy for most tumors; open for large, malignant, or difficult anatomy. "
      "Intraoperative hypertensive crises managed with phentolamine, nitroprusside, magnesium, and intraoperative vasodilators; post-tumor-removal hypotension anticipated — stop antihypertensives, give IV fluids and pressors. "
      "(e) Postoperative: watch for hypoglycemia (rebound hyperinsulinemia as catecholamine suppression lifts), hypotension, and recurrence/malignancy monitoring. "
      "(5) Classic pitfalls: (a) giving a beta-blocker first (e.g., metoprolol for 'hypertension') — unopposed alpha vasoconstriction can be catastrophic. "
      "(b) Missing the diagnosis in a patient with paroxysmal hypertension attributed to anxiety or panic. "
      "(c) Performing adrenalectomy without adequate preoperative alpha-blockade — high intraoperative mortality. "
      "(d) Not pursuing genetic testing — up to 40% hereditary; implications for family screening and surveillance. "
      "(e) Forgetting lifelong biochemical surveillance after resection — 10-15% recur or develop metastases, sometimes years later."
    )
  },

  "phlegmasia-cerulea-dolens": {
    "diagnosis": "Phlegmasia Cerulea Dolens",
    "coachFinal": (
      "Diagnosis: phlegmasia cerulea dolens — a limb-threatening complication of massive deep vein thrombosis. "
      "Key learning: "
      "(1) Phlegmasia cerulea dolens (PCD) is the most severe manifestation of acute DVT, caused by near-complete thrombotic obstruction of the deep and often collateral venous outflow of an entire extremity (most commonly iliofemoral). "
      "The spectrum: phlegmasia alba dolens ('white painful leg' — extensive DVT with arterial spasm but without venous infarction) progresses to phlegmasia cerulea dolens ('blue painful leg' — venous outflow so compromised that arterial inflow is also compromised, with severe pain, cyanosis, massive edema) which can progress to venous gangrene (irreversible tissue necrosis). "
      "Mortality is 20-40%, and amputation rate is 20-50% in affected limbs. "
      "(2) Risk factors are those of standard DVT magnified: active malignancy (most common association — often metastatic or occult), hypercoagulable states, prolonged immobilization, recent surgery, pregnancy, estrogen use, antiphospholipid syndrome, heparin-induced thrombocytopenia, and extensive external compression (pelvic mass, May-Thurner syndrome). "
      "(3) Presentation. "
      "Triad: severe pain, pitting edema extending to the groin, and cyanotic discoloration of the entire affected limb. "
      "Bullae, paresthesias, decreased pulses (from edema-induced compartment-like compression, not primary arterial occlusion), and signs of systemic hypovolemic shock (massive third-spacing into the affected limb can sequester liters of fluid). "
      "Contrast with acute limb ischemia (primary arterial): cold, pale/mottled, absent pulses, 'six Ps' — but without massive edema of PCD. "
      "(4) Workup. "
      "Urgent venous duplex ultrasound of the affected limb and contralateral limb. "
      "CT venography or MR venography for extent of thrombus and pelvic/iliac involvement. "
      "Labs: CBC, coagulation, D-dimer, CMP, lactate, CPK (rhabdomyolysis from limb compartment syndrome), type and crossmatch. "
      "Imaging should not significantly delay treatment in obvious cases. "
      "(5) Management is aggressive and multidisciplinary (vascular surgery, interventional radiology, hematology). "
      "(a) Immediate therapeutic anticoagulation (IV unfractionated heparin — most rapidly titratable, reversible, and safe during intervention). "
      "(b) Elevate the limb (reduces edema and facilitates venous drainage). "
      "(c) Aggressive IV fluid resuscitation — patients are massively volume-depleted from third-spacing. "
      "(d) Catheter-directed thrombolysis (CDT) or pharmacomechanical thrombectomy (e.g., AngioJet, ClotTriever) are first-line for PCD with threatened limb — restore venous patency within the 'golden hours' to prevent progression to gangrene and post-thrombotic syndrome. "
      "(e) Systemic thrombolysis is an option if catheter-based intervention is unavailable but has higher bleeding risk. "
      "(f) Surgical venous thrombectomy for failure of endovascular therapy or profound compromise — historically associated with higher morbidity but salvages limbs in experienced centers. "
      "(g) Fasciotomy for limb-threatening compartment syndrome. "
      "(h) Long-term anticoagulation — duration indefinite for malignancy-associated or recurrent; minimum 3-6 months otherwise. "
      "(i) Compression stockings for post-thrombotic syndrome prevention. "
      "(j) Evaluate for and treat underlying provoking factor (malignancy screen, hypercoagulability workup when appropriate, May-Thurner identification and possible stenting). "
      "Classic pitfalls: (a) under-recognizing PCD as 'just a bad DVT' — the blue cyanotic limb demands immediate escalation. "
      "(b) Delaying thrombolytic intervention for diagnostic imaging — clinical picture with ultrasound confirmation is sufficient to activate vascular/IR. "
      "(c) Missing HIT as the precipitating hypercoagulable state in a hospitalized patient — always consider in recent heparin exposure with thrombosis and thrombocytopenia. "
      "(d) Forgetting occult malignancy screening in unprovoked PCD, especially in patients over 40 — age-appropriate screening plus directed evaluation for cancer-related hypercoagulability."
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
    print(f'\nBatch 30A: {done}/{len(ENRICHMENTS)} enriched')
