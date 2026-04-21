#!/usr/bin/env python3
"""Batch 31 — Part A: 8 cases.

Cases: pseudogout, psoriasis-moderate-severe, psychogenic-polydipsia, pubic-ramus-fracture,
       pulmonary-embolism-syncope, pyelonephritis-urosepsis, reactive-arthritis, renal-colic
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "pseudogout": {
    "diagnosis": "Acute CPPD Crystal Arthropathy (Pseudogout) — Associated with Primary Hyperparathyroidism",
    "coachFinal": (
      "Diagnosis: acute CPPD (calcium pyrophosphate deposition) crystal arthropathy — 'pseudogout' — of the knee, with underlying primary hyperparathyroidism as a secondary cause. "
      "Key learning: "
      "(1) CPPD disease is a spectrum: asymptomatic chondrocalcinosis (often incidental on X-ray), acute CPP crystal arthritis ('pseudogout'), chronic CPP crystal inflammatory arthritis (polyarticular, RA-like), and OA with CPPD. "
      "Acute pseudogout typically affects the knee (most common), wrist, shoulder, or hip, with sudden-onset monoarticular swelling, warmth, erythema, and severe pain peaking over 6-24 hours — clinically similar to gout and septic arthritis. "
      "Attack triggers: trauma, surgery (especially parathyroidectomy — 'pseudogout after surgery'), acute illness, and IV bisphosphonates. "
      "(2) Differential diagnosis for acute monoarthritis — always rule out septic arthritis (risk of joint destruction within hours). "
      "Arthrocentesis is mandatory in every first-presentation acute monoarthritis: "
      "(a) Cell count and differential (WBC >50,000 with PMN predominance favors septic; 2,000-50,000 favors inflammatory/crystal; <2,000 favors noninflammatory). "
      "(b) Gram stain and culture. "
      "(c) Crystal analysis under polarized microscopy: CPPD = rhomboid, weakly POSITIVELY birefringent crystals (blue parallel to axis); MSU (gout) = needle-shaped, strongly NEGATIVELY birefringent (yellow parallel to axis). "
      "Crystal disease and septic arthritis can coexist — culture is essential. "
      "(3) Secondary causes of CPPD — the '5 H's' mnemonic: Hyperparathyroidism (primary), Hemochromatosis, Hypomagnesemia, Hypophosphatasia, and Hypothyroidism. "
      "Also: familial/genetic (ANKH mutations), Gitelman syndrome, and aging (most common cause in elderly). "
      "Any CPPD patient under 55 or with unusual severity/distribution should be screened for secondary causes: calcium, magnesium, phosphate, PTH, ferritin/transferrin saturation, alkaline phosphatase, and TSH. "
      "(4) Management of acute attack. "
      "Monoarticular large joint: intraarticular corticosteroid injection (e.g., triamcinolone 40 mg) — highly effective and avoids systemic side effects. "
      "Systemic therapy when multiple joints or injection contraindicated: "
      "NSAIDs (naproxen 500 mg BID, indomethacin 50 mg TID — mind renal function and GI risk). "
      "Colchicine 1.2 mg PO followed by 0.6 mg PO one hour later, then 0.6 mg BID-TID until symptoms resolve. "
      "Systemic corticosteroids (prednisone 30-40 mg PO daily with taper) for those who can't take NSAIDs or colchicine. "
      "Address the precipitant (infection, metabolic disturbance). "
      "(5) Chronic prevention and treatment of primary hyperparathyroidism. "
      "No proven disease-modifying therapy exists for CPPD itself; colchicine prophylaxis (0.6 mg daily or BID) can reduce attack frequency. "
      "Magnesium supplementation for hypomagnesemia. "
      "Primary hyperparathyroidism: parathyroidectomy for symptomatic disease (stones, fractures, hypercalcemic symptoms, osteoporosis), or per guidelines for asymptomatic disease (age <50, calcium >1 mg/dL above normal, GFR <60, T-score <=-2.5). "
      "Classic pitfalls: (a) calling it pseudogout without arthrocentesis and missing septic arthritis. "
      "(b) Treating multiple attacks without screening for secondary causes — a 40-year-old with pseudogout should trigger metabolic workup. "
      "(c) Giving IV bisphosphonate without flagging pseudogout risk in a patient with known CPPD. "
      "(d) Forgetting that CPPD can present as 'pseudo-rheumatoid arthritis' with symmetric polyarthritis — rheumatology evaluation helpful. "
      "(e) Treating chronically with indomethacin in an older patient — high GI and renal toxicity; alternative agents are safer."
    )
  },

  "psoriasis-moderate-severe": {
    "diagnosis": "Moderate-Severe Plaque Psoriasis — Biologic Initiation",
    "coachFinal": (
      "Diagnosis: moderate-severe plaque psoriasis requiring biologic therapy initiation. "
      "Key learning: "
      "(1) Psoriasis is a chronic immune-mediated inflammatory disease of the skin (and often joints) driven by the IL-23/Th17 axis. "
      "Subtypes: plaque (most common, 80-90%), guttate (post-streptococcal, raindrop-like papules), inverse (flexural), pustular (localized or generalized — generalized is life-threatening), and erythrodermic (>90% BSA — emergency). "
      "Up to 30% develop psoriatic arthritis — ask all psoriasis patients about joint pain, morning stiffness, dactylitis, enthesitis, and back pain, and examine nails (pitting, oil spots, onycholysis suggest joint involvement). "
      "(2) Severity assessment for treatment selection. "
      "Body surface area (BSA — palm = 1%), Psoriasis Area and Severity Index (PASI), and quality of life impact. "
      "Mild: BSA <3%, treated with topicals. "
      "Moderate: BSA 3-10%, often needs phototherapy or systemic. "
      "Severe: BSA >10% OR involvement of face/hands/feet/genitals OR significant QOL impact OR failure of topicals/phototherapy — candidate for systemic or biologic therapy. "
      "(3) Treatment escalation. "
      "Topical therapy (mild-moderate): high-potency topical corticosteroids, calcipotriene (vitamin D analog), combination products (Cal/BD foam), tazarotene, calcineurin inhibitors for face/folds, tar and salicylic acid for adjunctive use. "
      "Phototherapy (moderate): narrowband UVB, PUVA (older, limits due to skin cancer risk). "
      "Systemic (moderate-severe): methotrexate (weekly, with folate, monitor for hepatotoxicity and marrow suppression), cyclosporine (short-term rescue), acitretin (retinoid, useful in pustular and in combination with phototherapy; pregnancy category X — 3-year avoidance after cessation), and apremilast (PDE4 inhibitor, oral). "
      "Biologics (severe, or co-existing PsA): "
      "(a) TNF inhibitors — etanercept, adalimumab, infliximab, certolizumab. "
      "(b) IL-17 inhibitors — secukinumab, ixekizumab, brodalumab (rapid onset, high efficacy for skin; screen for IBD as can worsen it). "
      "(c) IL-23 inhibitors — guselkumab, risankizumab, tildrakizumab (every 8-12 weeks dosing, excellent safety). "
      "(d) IL-12/23 inhibitor — ustekinumab. "
      "(4) Pre-biologic screening and safety. "
      "Mandatory before starting any biologic: TB screening (TST or IGRA — treat latent TB before biologic if positive), hepatitis B and C screening, HIV testing, CBC and LFTs, and pregnancy status. "
      "Update vaccinations before starting (live vaccines contraindicated on biologics — MMR, varicella, zoster live, BCG, yellow fever); recombinant zoster vaccine (Shingrix) is safe. "
      "Screen and treat for depression (psoriasis has high comorbid rate), cardiovascular risk factors (psoriasis is an independent CV risk factor), metabolic syndrome, and obesity. "
      "(5) Classic pitfalls: (a) missing psoriatic arthritis and allowing joint damage — screen all psoriasis patients annually with validated tools (PsA screen, PASE). "
      "(b) Using long-term systemic corticosteroids — can trigger rebound flares and generalized pustular psoriasis on withdrawal; almost never indicated. "
      "(c) Not screening for TB/HBV/HCV before biologic — reactivation can be severe. "
      "(d) Forgetting cardiovascular risk modification — psoriasis is an independent CV risk factor, and aggressive BP, lipid, diabetes, and lifestyle management improves outcomes. "
      "(e) Discontinuing biologic abruptly when pregnant — individualize; some agents (certolizumab) are preferred in pregnancy; coordinate with obstetrics and rheumatology/derm."
    )
  },

  "psychogenic-polydipsia": {
    "diagnosis": "Psychogenic Polydipsia with Severe Hyponatremia and Cerebral Edema",
    "coachFinal": (
      "Diagnosis: psychogenic polydipsia with severe hyponatremia (Na 114) and cerebral edema in a patient with schizophrenia. "
      "Key learning: "
      "(1) Psychogenic (primary) polydipsia is compulsive excessive water drinking, most common in patients with chronic psychiatric illness (schizophrenia, bipolar disorder) and often iatrogenically worsened by dry mouth from antipsychotics and anticholinergics. "
      "Up to 20% of chronic inpatient psychiatric populations have polydipsia; a subset have life-threatening water intoxication with hyponatremia. "
      "(2) Differential diagnosis of polyuria-polydipsia: "
      "(a) Psychogenic polydipsia (primary excess intake) — urine osmolality inappropriately low, serum sodium may be low-normal or hyponatremic. "
      "(b) Central diabetes insipidus — ADH deficiency (head trauma, surgery, tumors, autoimmune), urine dilute even when serum is hypertonic, responds to DDAVP. "
      "(c) Nephrogenic DI — renal resistance to ADH (lithium, hypercalcemia, hypokalemia, genetic). "
      "(d) Osmotic diuresis — uncontrolled diabetes, mannitol. "
      "Water deprivation test distinguishes: psychogenic polydipsia → urine concentrates with dehydration. DI → urine stays dilute until DDAVP (central DI responds to DDAVP; nephrogenic does not). "
      "(3) Pathophysiology of water intoxication. "
      "Normal kidneys can excrete 15-20 L/day of free water with intact ADH suppression, but intake exceeding this causes dilutional hyponatremia. "
      "In schizophrenia, concurrent SIADH-like phenomena (from antipsychotics, stress, nausea) further impair water excretion. "
      "Acute hyponatremia causes cerebral edema because water shifts into brain cells — manifests as headache, nausea, altered mental status, seizures, coma, and brainstem herniation. "
      "Serum sodium under 125 with acute onset (over hours) is a medical emergency. "
      "(4) Management of severe symptomatic hyponatremia. "
      "(a) HYPERTONIC SALINE — 3% NaCl 100-150 mL IV bolus, repeat up to 3 times, targeting a rise of 4-6 mEq/L in the first 4-6 hours to stop seizures and reverse symptoms. "
      "(b) After initial correction, slow to no more than 8-10 mEq/L over 24 hours (6-8 in high-risk patients for ODS) to avoid osmotic demyelination syndrome. "
      "(c) Recheck sodium every 1-2 hours during active correction; if overcorrection occurs, give free water (D5W) or DDAVP to slow or reverse. "
      "(d) FLUID RESTRICTION (usually under 1 L/day) as maintenance management after initial resuscitation. "
      "(e) Treat underlying psychiatric illness; consider clozapine (reduces polydipsia in some schizophrenia patients), behavior modification, staff observation of fluid access, and structured water allowances. "
      "(5) Classic pitfalls: (a) correcting hyponatremia too rapidly and causing osmotic demyelination syndrome — a devastating, often irreversible neurologic injury manifesting 2-7 days later with quadriparesis, dysphagia, dysarthria, and locked-in syndrome. "
      "(b) Giving isotonic saline thinking it will 'fix' the hyponatremia — in SIADH-physiology, saline can paradoxically worsen hyponatremia because the sodium is excreted but the water is retained. "
      "(c) Not recognizing the chronic water abuse pattern in psychiatric patients — ask about thirst, fluid intake, polydipsia, and urine frequency; weigh patients to track fluid shifts. "
      "(d) Forgetting that some antipsychotics (carbamazepine, SSRIs, haloperidol, clozapine) cause SIADH — reconcile medications in any hyponatremic psychiatric patient."
    )
  },

  "pubic-ramus-fracture": {
    "diagnosis": "Pubic Ramus Fracture (Osteoporotic Insufficiency Fracture)",
    "coachFinal": (
      "Diagnosis: pubic ramus fracture from osteoporotic insufficiency in an older adult after a minor fall. "
      "Key learning: "
      "(1) Pelvic fractures in older adults are typically low-energy insufficiency fractures in osteoporotic bone, in contrast to younger adults where pelvic fracture usually means high-energy trauma. "
      "Common locations: pubic rami (superior and inferior), sacrum (sacral ala), acetabulum, and iliac wing. "
      "The term 'fragility fracture' captures the underlying bone weakness — any fracture from a fall from standing height or less in an adult over 50 is an osteoporotic fracture regardless of DXA result. "
      "(2) Clinical presentation: groin, hip, or pelvic pain after a fall, worse with weight-bearing, often with difficulty walking. "
      "Mobile patients may minimize symptoms initially; pain can persist for days before presentation. "
      "Physical exam: tender over the pubic symphysis or inguinal region, pain with pelvic compression (anterior-posterior and lateral), preserved distal neurovascular exam, and often preserved (though painful) ability to weight-bear. "
      "Key differentiation from hip fracture: pubic ramus fracture pain is typically groin/inguinal without leg shortening or external rotation; hip fracture causes shortened, externally rotated leg and inability to straight leg raise. "
      "(3) Imaging. "
      "AP pelvis X-ray: pubic ramus fractures are often visible but subtle; look carefully for cortical disruption. "
      "Occult fractures: CT pelvis if X-ray negative but clinical suspicion persists; MRI is the gold standard for occult osseous injury, particularly sacral insufficiency fractures which are notoriously missed on X-ray. "
      "Young-Burgess and Tile classifications stratify pelvic fracture stability and guide orthopedic management for higher-energy injuries. "
      "(4) Management. "
      "Most isolated pubic ramus fractures are stable and managed nonoperatively: pain control (acetaminophen, judicious opioids short-term, avoid NSAIDs in CKD/elderly), early mobilization with weight-bearing as tolerated (wheelchair/walker/crutches), fall precautions, and PT. "
      "DVT prophylaxis for immobilization. "
      "Unstable pelvic ring injuries (rare in low-energy falls — more concerning in high-energy) need orthopedic fixation. "
      "Sacral insufficiency fractures can be treated with sacroplasty when pain is persistent. "
      "(5) Secondary prevention and osteoporosis management — often neglected but critical. "
      "The hospitalization is a missed opportunity if osteoporosis treatment is not initiated. "
      "All fragility fracture patients should: "
      "(a) Have DXA scan (may be deferred to outpatient). "
      "(b) Check calcium, 25-OH vitamin D, creatinine, TSH, PTH — rule out secondary osteoporosis causes. "
      "(c) Start bisphosphonate (oral alendronate or risedronate; IV zoledronic acid 5 mg annually is an excellent option when adherence concerns or esophageal issues), denosumab (SQ every 6 months), or anabolic agent (teriparatide, abaloparatide, romosozumab) for severe/recurrent fractures. "
      "(d) Address vitamin D deficiency (800-2000 IU/day, more if deficient). "
      "(e) Optimize calcium intake (1,000-1,200 mg/day, preferably dietary). "
      "(f) Fall prevention: medication review (especially sedatives, anticholinergics, antihypertensives), vision check, home hazard assessment, strength and balance exercise, gait aids. "
      "Classic pitfalls: (a) treating the fracture and discharging without initiating osteoporosis therapy — high rate of second fracture (up to 20% in 1 year without treatment). "
      "(b) Missing concurrent sacral insufficiency fracture in a patient with pubic ramus fracture — almost 50% have concurrent sacral involvement. "
      "(c) Restricting weight-bearing unnecessarily — most pubic ramus fractures tolerate early mobilization, and prolonged bed rest causes rapid muscle loss, delirium, DVT, and pressure injury. "
      "(d) Forgetting to screen for underlying causes: multiple myeloma (SPEP/free light chains in unexpected fractures), hyperparathyroidism, hyperthyroidism, celiac, malabsorption, chronic steroid use."
    )
  },

  "pulmonary-embolism-syncope": {
    "diagnosis": "Massive Pulmonary Embolism with Syncope (Post-Orthopedic Surgery)",
    "coachFinal": (
      "Diagnosis: massive (high-risk) pulmonary embolism with syncope following orthopedic surgery and nonadherence to VTE prophylaxis, in a patient with active malignancy. "
      "Key learning: "
      "(1) Syncope is an underrecognized presentation of pulmonary embolism. "
      "In recent studies, up to 1 in 6 patients admitted for first-episode syncope had PE on systematic workup (PESIT study, though reproducibility has been debated). "
      "Mechanism: sudden obstruction of pulmonary circulation causes acute right ventricular failure, reduced LV filling, and transient systemic hypotension with cerebral hypoperfusion. "
      "Suspect PE in any syncope with tachycardia, tachypnea, hypoxia, unilateral leg swelling, postoperative state, active malignancy, recent immobilization, or pleuritic chest pain. "
      "(2) Risk factors multiply in this case: "
      "(a) Recent orthopedic surgery — especially lower extremity (hip, knee, tibial plateau ORIF) — high VTE risk even with prophylaxis; VTE risk lasts weeks. "
      "(b) Nonadherence to VTE prophylaxis — orthopedic guidelines recommend 10-35 days of LMWH or DOAC depending on procedure. "
      "(c) Active malignancy — independent VTE risk factor (hypercoagulable state; Khorana score stratifies). "
      "Cumulative risk multiplies; these patients can develop massive PE despite apparent adherence. "
      "(3) Massive PE hemodynamic collapse. "
      "Clinical findings: syncope, hypotension or shock, severe dyspnea, profound hypoxia, elevated troponin and BNP, RV dysfunction/dilation on echo or CT. "
      "Time-sensitive — mortality is very high without reperfusion. "
      "ECG: tachycardia, S1Q3T3 (specific but insensitive), new RBBB, T-wave inversions V1-V4. "
      "Bedside echo: acute RV dilation, septal flattening (D-shape), McConnell sign (RV free-wall hypokinesis with preserved apex), sometimes visible clot-in-transit. "
      "(4) Management — systemic thrombolysis, catheter-directed therapy, or surgical embolectomy. "
      "(a) IV unfractionated heparin bolus (80 units/kg) and infusion — rapid onset and reversibility. "
      "(b) Systemic thrombolysis (alteplase 100 mg over 2 hours, or 50 mg for high bleeding risk) for massive PE without absolute contraindications. "
      "(c) Catheter-directed thrombolysis or mechanical thrombectomy in centers with capability — lower systemic lysis dose, appealing when bleeding risk is elevated. "
      "(d) Surgical pulmonary embolectomy for failed/contraindicated lysis or clot-in-transit. "
      "(e) ECMO (VA) as bridge to reperfusion or surgery in refractory shock/arrest. "
      "Hemodynamic support: judicious fluids (250-500 mL boluses), norepinephrine as first-line pressor, vasopressin adjunct, avoid intubation if possible (positive pressure and induction can precipitate RV failure collapse). "
      "(6) Long-term management and cancer-associated VTE. "
      "Anticoagulation is the foundation: DOAC (apixaban, rivaroxaban — both have randomized data supporting use in cancer-associated thrombosis; prefer apixaban in GI cancer for bleeding); LMWH for patients with GI cancer, genitourinary cancer, severe thrombocytopenia, or when DOACs are contraindicated. "
      "Duration: at least 6 months, often indefinite while malignancy is active. "
      "Cancer-associated VTE has higher recurrence and bleeding rates than non-cancer VTE. "
      "Classic pitfalls: (a) missing PE in a patient with 'just syncope' without tachycardia awareness — always check HR, SpO2, and exertional symptoms; Wells, PERC, and PESI tools structure the evaluation. "
      "(b) Withholding thrombolysis in massive PE out of bleeding fear — mortality of untreated massive PE is 30-50%. "
      "(c) Using warfarin in cancer-associated VTE as first-line (historical) — now superseded by LMWH and DOACs. "
      "(d) Stopping anticoagulation at 3-6 months while cancer remains active — high recurrence. "
      "(e) Forgetting IVC filter is NOT a routine substitute for anticoagulation — reserved for absolute contraindication and retrieved when anticoagulation can be resumed."
    )
  },

  "pyelonephritis-urosepsis": {
    "diagnosis": "Acute Pyelonephritis with Urosepsis (E. coli) Complicated by Neurogenic Bladder",
    "coachFinal": (
      "Diagnosis: acute pyelonephritis with urosepsis from E. coli in a patient with neurogenic bladder and limited antibiotic options from prior resistance. "
      "Key learning: "
      "(1) Pyelonephritis is upper urinary tract infection with kidney involvement. "
      "Classic presentation: fever, flank pain, costovertebral angle tenderness, nausea/vomiting, plus lower urinary tract symptoms (dysuria, frequency, urgency). "
      "Elderly or immunocompromised patients often present atypically — confusion, falls, generalized weakness, or isolated fever without localizing findings. "
      "Urosepsis is pyelonephritis with sepsis physiology; it is the most common source of gram-negative sepsis in older adults. "
      "(2) Complicated UTI/pyelonephritis is defined by structural or functional urinary tract abnormality, immunosuppression, or conditions increasing resistance and recurrence risk: male sex, pregnancy, indwelling catheter, nephrolithiasis, diabetes mellitus, obstruction, recent instrumentation, prior antibiotic exposure, and neurogenic bladder. "
      "Neurogenic bladder (from spinal cord injury, MS, diabetes, spina bifida) increases risk because incomplete bladder emptying allows bacterial growth, often with multidrug-resistant organisms from repeated antibiotic exposure. "
      "(3) Workup. "
      "Urinalysis (pyuria, leukocyte esterase, nitrites — nitrites are 100% specific but only 50% sensitive) and urine culture with susceptibility ALWAYS in complicated disease. "
      "Blood cultures x2 — positive in 30-50% of pyelonephritis, more in urosepsis. "
      "CBC, CMP, lactate (sepsis), CRP, procalcitonin. "
      "Imaging if complicated course, suspected obstruction, or failure to improve: renal ultrasound first (identifies hydronephrosis, stones, abscess); CT (more definitive, identifies perinephric abscess, emphysematous pyelonephritis, obstructing stone, pyonephrosis). "
      "(4) Treatment. "
      "Mild-moderate outpatient: oral fluoroquinolone (ciprofloxacin 500 mg BID x 7 days or levofloxacin 750 mg daily x 5 days, if local resistance <10%); TMP-SMX if susceptible; amoxicillin-clavulanate or cephalosporin as alternatives. "
      "Severe inpatient: IV ceftriaxone 1-2 g daily or piperacillin-tazobactam; add vancomycin if MRSA risk or suspected bacteremia. "
      "Carbapenems (meropenem, ertapenem) for ESBL-producing organisms or history of resistance. "
      "Aminoglycoside (gentamicin) as synergy in sepsis with known susceptibility. "
      "Adjust based on culture susceptibilities — narrow spectrum once identified. "
      "Treat for 7-14 days total (longer for complicated disease, abscess, or bacteremia). "
      "(5) Neurogenic bladder-specific management. "
      "Chronic management: intermittent catheterization is preferred over indwelling (lower infection rate), timed voiding, anticholinergics or mirabegron for detrusor overactivity, Botox injections for refractory, sphincterotomy or surgical diversion for select cases. "
      "Asymptomatic bacteriuria is the rule in neurogenic bladder — DO NOT treat routinely (selects for resistance). Treat only with true UTI symptoms or prior to urologic surgery. "
      "Avoid antibiotic prophylaxis; use methenamine hippurate as a non-antibiotic option in some patients. "
      "Classic pitfalls: (a) treating asymptomatic bacteriuria in a neurogenic bladder patient — selects for resistance without benefit; exceptions are pregnancy and pre-urologic procedure. "
      "(b) Missing obstruction (stone, stricture) in pyelonephritis not improving after 48-72 hours — imaging and urgent decompression (ureteral stent or percutaneous nephrostomy) are required. "
      "(c) Underappreciating emphysematous pyelonephritis in diabetics — gas in renal parenchyma on CT, high mortality, requires prompt surgical drainage or nephrectomy. "
      "(d) Not reviewing prior cultures and resistance history before empiric antibiotic choice — leads to treatment failure and worse outcomes. "
      "(e) Forgetting infection source control — obstruction needs urgent decompression, abscess may need drainage."
    )
  },

  "reactive-arthritis": {
    "diagnosis": "Reactive Arthritis (Post-Campylobacter, HLA-B27+) — Classic Triad",
    "coachFinal": (
      "Diagnosis: reactive arthritis with the classic triad of arthritis, conjunctivitis, and urethritis (formerly called Reiter syndrome), HLA-B27 associated, following Campylobacter infection. "
      "Key learning: "
      "(1) Reactive arthritis is a seronegative spondyloarthropathy triggered by a genitourinary or gastrointestinal infection, typically occurring 2-4 weeks after the inciting infection. "
      "Triggering pathogens: Chlamydia trachomatis (most common — GU), Salmonella, Shigella, Yersinia, Campylobacter, and C. difficile (GI). "
      "About 60-80% of patients are HLA-B27 positive, with stronger association, more severe disease, and axial involvement in B27+ individuals. "
      "(2) Classic manifestations. "
      "The classic triad 'can't see, can't pee, can't climb a tree' — conjunctivitis, urethritis, and arthritis — is present in only a minority. "
      "Arthritis: asymmetric oligoarthritis of large joints, especially lower extremities (knees, ankles), dactylitis ('sausage digit'), enthesitis (especially Achilles tendonitis and plantar fasciitis), and inflammatory low back pain (sacroiliitis). "
      "Extra-articular features: conjunctivitis or anterior uveitis (iritis — painful red eye, photophobia — ophthalmology emergency), mucocutaneous (keratoderma blennorrhagicum on palms and soles, circinate balanitis, painless oral ulcers), and rarely cardiac (aortic regurgitation, conduction abnormalities). "
      "(3) Diagnosis is clinical. "
      "Labs: HLA-B27 typing (supports diagnosis but not required); CRP/ESR elevated; synovial fluid inflammatory (WBC 2,000-50,000, PMN predominance), negative Gram stain and culture (sterile reactive process), no crystals. "
      "Document the preceding infection: stool studies for enteric pathogens, urine NAAT or GC/Chlamydia for GU pathogens — often negative by the time arthritis appears, so negative tests don't exclude. "
      "Rule out septic arthritis (arthrocentesis), gout, RA (RF/anti-CCP negative), and other spondyloarthropathies (psoriatic arthritis, IBD-associated, ankylosing spondylitis). "
      "Imaging: X-rays early are often normal; chronic changes include periostitis, enthesophytes (heel 'spurs'), and asymmetric sacroiliitis. "
      "(4) Treatment. "
      "Acute phase: NSAIDs (naproxen, indomethacin) are first-line and often sufficient. "
      "Intraarticular corticosteroids for monoarticular large joints. "
      "Systemic corticosteroids for severe disease or when NSAIDs contraindicated. "
      "Antibiotics: treat persistent Chlamydia infection (azithromycin or doxycycline) if detected; enteric infections are usually self-limited and do not need antibiotic treatment to resolve the arthritis. "
      "Prolonged antibiotic courses for reactive arthritis itself are controversial and generally not recommended. "
      "Chronic or refractory disease: DMARDs (sulfasalazine first, methotrexate), TNF inhibitors (etanercept, adalimumab) for severe or axial disease. "
      "Ophthalmology referral for any eye involvement. "
      "(5) Prognosis. "
      "Most cases resolve within 3-12 months; 20-40% develop chronic or recurrent disease, especially HLA-B27+. "
      "Progression to classical ankylosing spondylitis can occur in a subset. "
      "Classic pitfalls: (a) missing anterior uveitis — any red painful photophobic eye needs urgent ophthalmology referral; untreated uveitis causes permanent vision loss. "
      "(b) Over-treating with prolonged antibiotics for reactive arthritis itself — evidence of benefit is limited, and risks of adverse effects and resistance are real. "
      "(c) Forgetting to test for and treat concurrent Chlamydia in GU-triggered cases (both the patient and partners). "
      "(d) Missing the axial component (sacroiliitis) when focus is only on peripheral joints — pelvis imaging and inflammatory back pain screening are important. "
      "(e) Not counseling about recurrence risk — patients with reactive arthritis, especially HLA-B27+, should be monitored long-term for progression to chronic spondyloarthritis."
    )
  },

  "renal-colic": {
    "diagnosis": "Renal Colic from Nephrolithiasis",
    "coachFinal": (
      "Diagnosis: renal colic from ureteral stone (nephrolithiasis). "
      "Key learning: "
      "(1) Nephrolithiasis is common (lifetime prevalence 10-15%, higher in men, recurrence rate 50% in 5-10 years). "
      "Stone composition: calcium oxalate (most common, 70-80%), calcium phosphate, uric acid (radiolucent on X-ray, acidic urine, hyperuricemia, gout), struvite (infection stones — staghorn calculi with urease-producing bacteria like Proteus, Klebsiella), and cystine (rare, genetic). "
      "Clinical presentation: sudden severe flank pain radiating to groin, nausea/vomiting, hematuria (gross or microscopic), dysuria, urinary frequency, and restlessness ('writhing pain' is classic — contrast with peritonitis where patients lie still). "
      "(2) Workup. "
      "Non-contrast CT abdomen/pelvis (low-dose CT protocol) is the gold standard — identifies stones, characterizes size and location, and assesses for obstruction, hydronephrosis, and complications. "
      "Ultrasound is a radiation-free first-line option, particularly for pregnancy and recurrent stone formers — identifies hydronephrosis but less sensitive for small or ureteral stones. "
      "Labs: urinalysis (hematuria, leukocytes/nitrites suggest infection), urine culture, CBC (leukocytosis suggests infection), BMP (renal function), calcium, uric acid. "
      "Stone straining to collect the passed stone for analysis guides prevention. "
      "(3) Management of acute colic. "
      "Pain control: NSAIDs (ketorolac IV, ibuprofen PO) are first-line and more effective than opioids for colic when renal function allows; IV acetaminophen is an alternative; opioids (morphine, hydromorphone) for refractory pain. "
      "IV hydration as needed — excessive fluid forcing does NOT help stone passage. "
      "Antiemetics for nausea/vomiting. "
      "Medical expulsive therapy with alpha-blockers (tamsulosin 0.4 mg daily) for distal ureteral stones 5-10 mm — modest benefit for spontaneous passage; not beneficial for smaller stones. "
      "(4) Indications for urologic intervention. "
      "Size and location drive urgency: "
      "(a) Stones <5 mm: ~90% pass spontaneously, outpatient pain management. "
      "(b) Stones 5-10 mm: ~50% pass; tamsulosin helpful; prolonged observation reasonable if uncomplicated. "
      "(c) Stones >10 mm: unlikely to pass spontaneously, plan urologic intervention. "
      "Urgent/emergent urology consultation and decompression (ureteral stent or percutaneous nephrostomy) for: "
      "- Urosepsis or infected hydronephrosis (MEDICAL EMERGENCY — high mortality without decompression). "
      "- Solitary kidney with obstruction. "
      "- Bilateral obstruction with AKI. "
      "- Intractable pain or vomiting despite analgesia. "
      "Definitive treatment once stable: extracorporeal shock wave lithotripsy (ESWL), ureteroscopy with laser lithotripsy, or percutaneous nephrolithotomy (PCNL) for large/staghorn calculi. "
      "(5) Long-term prevention. "
      "Hydration: target urine output >2-2.5 L/day to reduce recurrence. "
      "24-hour urine collection for metabolic workup in recurrent stone formers, pediatric cases, or those with metabolic risk factors — measures calcium, oxalate, citrate, uric acid, sodium, magnesium, creatinine, volume. "
      "Dietary: normal calcium intake (do NOT restrict — paradoxically increases oxalate absorption), reduce sodium (lowers urinary calcium), reduce animal protein (lowers urinary calcium and oxalate, raises citrate), reduce oxalate-rich foods in hyperoxaluria (spinach, nuts, tea, chocolate). "
      "Pharmacologic: thiazide for hypercalciuria (reduces urinary calcium); potassium citrate for hypocitraturia and uric acid stones; allopurinol for hyperuricosuric calcium stones; urinary alkalinization for uric acid and cystine stones. "
      "Classic pitfalls: (a) missing INFECTED OBSTRUCTED STONE — fever plus flank pain plus hydronephrosis is pyonephrosis until proven otherwise; needs IV antibiotics AND emergent urologic decompression; delay can cause septic shock and death. "
      "(b) Attributing flank pain to 'stone' without imaging — miss dissecting AAA (especially in elderly men with vasculopathic risk), pyelonephritis, appendicitis, ovarian pathology. "
      "(c) Over-hydrating — does not speed passage, can worsen pain. "
      "(d) Forgetting metabolic workup in recurrent stone formers — missed opportunity for prevention."
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
    print(f'\nBatch 31A: {done}/{len(ENRICHMENTS)} enriched')
