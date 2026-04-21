#!/usr/bin/env python3
"""Batch 32 — Part A: 8 cases.

Cases: scid-ada, sepsis-with-rigidity, sepsisseptic-shock, septic-arthritis-v2,
       septic-arthritis, severe-cellulitis, severe-croup, severe-hyperkalemia-from-missed-dialysis
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "scid-ada": {
    "diagnosis": "Severe Combined Immunodeficiency (ADA-SCID, T-B-NK+)",
    "coachFinal": (
      "Diagnosis: severe combined immunodeficiency (SCID) due to adenosine deaminase (ADA) deficiency, T-B-NK+ subtype. "
      "Key learning: "
      "(1) SCID is a group of genetic disorders causing profound defects in both cellular (T-cell) and humoral (B-cell) immunity, with lymphocyte counts typically under 2,500/uL and functional immune failure. "
      "Without treatment, SCID is fatal within the first 1-2 years of life from overwhelming infection. "
      "Subtypes are classified by lymphocyte phenotype (T, B, NK cells present/absent) — X-linked SCID (T-B+NK-, IL2RG, most common), ADA-SCID (T-B-NK+, autosomal recessive), JAK3 (T-B+NK-), RAG1/2 (T-B-NK+), IL7R (T-B+NK+), and others. "
      "Each subtype has distinct genetic and treatment implications. "
      "(2) Newborn screening for SCID (TREC analysis) has transformed early diagnosis. "
      "TREC (T-cell receptor excision circles) are DNA byproducts of normal T-cell maturation in the thymus — low or absent TREC suggests T-cell lymphopenia. "
      "TREC screening is now universal in US newborns and identifies most SCID in the first days of life, before infections develop. "
      "Abnormal TREC triggers confirmatory flow cytometry (T, B, NK cell enumeration), functional testing (mitogen response, antigen response), genetic testing, ADA enzyme assay. "
      "(3) ADA deficiency has unique features: "
      "(a) Neurologic — cognitive delay, sensorineural deafness, behavioral abnormalities (from toxic metabolite accumulation affecting brain). "
      "(b) Skeletal — costochondral abnormalities, 'rachitic rosary'. "
      "(c) Hepatic — liver dysfunction, hepatitis. "
      "(d) Pulmonary — interstitial disease. "
      "(e) Renal — mesangial sclerosis. "
      "Because ADA is a systemic enzyme, its deficiency affects tissues beyond the immune system, whereas most other SCIDs are purely immunologic. "
      "(4) Management. "
      "Infection prevention and treatment: protective isolation, no live vaccines (absolute contraindication — BCG, rotavirus, MMR, varicella can cause disseminated infection), irradiated and CMV-negative blood products (to prevent TA-GVHD and CMV transmission), TMP-SMX for PCP prophylaxis, IVIG for antibody replacement, and prompt aggressive treatment of any infection. "
      "Definitive treatments: "
      "(a) Hematopoietic stem cell transplant (HSCT) — gold standard, ideally from HLA-matched sibling donor; excellent outcomes when performed early (under 3.5 months of age, before infections develop). "
      "(b) Enzyme replacement therapy (ERT) — PEGylated ADA (pegademase bovine) weekly SQ, as bridge to transplant or long-term for patients without donors. "
      "(c) Gene therapy — autologous hematopoietic stem cell gene therapy has FDA approval for ADA-SCID (Strimvelis) and is an established option. "
      "(5) Classic pitfalls: (a) giving live vaccines — BCG at birth (in non-US countries) or rotavirus vaccine in the US to a SCID infant can cause disseminated disease; universal newborn TREC screening helps identify infants before vaccination. "
      "(b) Missing the diagnosis in infants without classic infections because of maternal antibody transfer (which protects for the first 3-6 months). "
      "(c) Not irradiating blood products — transfusion-associated GVHD in SCID infants is virtually 100% fatal. "
      "(d) Delaying transplant referral — outcomes decline sharply once infection is established; prompt referral to a specialized SCID transplant center is essential. "
      "(e) Forgetting genetic counseling and carrier testing for parents and family members after diagnosis."
    )
  },

  "sepsis-with-rigidity": {
    "diagnosis": "Urosepsis with Parkinson Akinetic Crisis (Dopaminergic Withdrawal) — Mimicking NMS",
    "coachFinal": (
      "Diagnosis: urosepsis precipitating Parkinson akinetic crisis (dopaminergic withdrawal) — a syndrome mimicking neuroleptic malignant syndrome. "
      "Key learning: "
      "(1) Parkinson disease patients are uniquely vulnerable when they cannot take oral levodopa (NPO status, severe illness preventing swallowing, surgery, GI obstruction). "
      "Interruption of dopaminergic therapy for even 24-48 hours can precipitate akinetic crisis: severe worsening rigidity, bradykinesia, mutism, dysphagia, autonomic instability (fever, tachycardia, labile BP), and altered mental status. "
      "Clinically indistinguishable from NMS — both have rigidity, hyperthermia, autonomic instability, and CK elevation from muscle breakdown. "
      "The distinguishing feature: NMS arises from dopamine D2 RECEPTOR BLOCKADE (antipsychotics, antiemetics); parkinsonism-hyperpyrexia syndrome ('neuroleptic malignant-like syndrome of Parkinson disease') arises from LOSS of dopaminergic activity — the underlying pathology is the same dopamine deficiency, just from different causes. "
      "(2) The concurrent urosepsis adds complexity. "
      "Infection is a common trigger for decompensation in Parkinson patients: fever alters drug absorption and metabolism, NPO status interrupts oral medications, delirium clouds the clinical picture, and sepsis-related cytokines worsen motor symptoms. "
      "UTI is especially common in PD (from autonomic dysfunction causing incomplete bladder emptying), and urosepsis is a leading cause of hospitalization. "
      "(3) Management requires simultaneous treatment of sepsis AND restoration of dopaminergic therapy. "
      "(a) Sepsis: broad-spectrum antibiotics (ceftriaxone, piperacillin-tazobactam), IV fluids, source control (imaging for obstruction, urinary catheter drainage, possibly ureteral stent or nephrostomy if obstruction), lactate monitoring, and ICU admission if unstable. "
      "(b) Restore dopaminergic therapy URGENTLY: "
      "- Continue levodopa whenever possible — via NG tube if unable to swallow. "
      "- Parenteral apomorphine (SQ or IV) for severe akinetic crisis. "
      "- Rotigotine transdermal patch if oral not possible and apomorphine unavailable — converts to continuous dopaminergic stimulation. "
      "- Levodopa-carbidopa intestinal gel (Duopa) in patients already on it. "
      "AVOID all dopamine-blocking drugs — antiemetics (metoclopramide, prochlorperazine, promethazine) and antipsychotics (haloperidol) can precipitate or worsen crisis. "
      "Safe antiemetics in PD: ondansetron, trimethobenzamide (limited), domperidone (not in US). "
      "Safe antipsychotics for delirium in PD: quetiapine, pimavanserin, clozapine (all preserve dopaminergic activity). "
      "(c) Supportive: aggressive hydration for muscle breakdown and AKI risk, rhabdomyolysis workup and management (see rhabdomyolysis case), DVT prophylaxis, airway protection if dysphagic, and nutritional support. "
      "(4) Diagnostic clarification of the mimic. "
      "Distinguishing NMS from parkinsonism-hyperpyrexia is often impossible on clinical grounds alone. "
      "Features that suggest parkinsonism-hyperpyrexia: known PD diagnosis, recent PD medication interruption or reduction, and rapid improvement with restoration of dopaminergic therapy. "
      "Features that suggest NMS: recent initiation of or dose increase in antipsychotic/antiemetic, no underlying PD. "
      "When uncertain, hold all dopamine blockers AND restore/add dopaminergic therapy — this treats both conditions. "
      "(5) Classic pitfalls: (a) labeling the patient as 'NMS' and giving dopamine blockers as sedatives for the agitation — worsens the underlying dopamine deficiency. "
      "(b) Stopping all PD medications because of acute illness — 'medication holiday' is contraindicated in PD. "
      "(c) Using metoclopramide for sepsis-related nausea — blocks dopamine and precipitates/worsens crisis; use ondansetron. "
      "(d) Missing occult infection as trigger — always look for UTI, pneumonia, skin/wound infection, C. difficile in any PD patient with sudden worsening. "
      "(e) Forgetting that constipation, fever, dehydration, and hypoxia can all acutely worsen PD motor symptoms — address each proactively."
    )
  },

  "sepsisseptic-shock": {
    "diagnosis": "Septic Shock (Urinary Source) in Uncontrolled Diabetes with BPH/CKD",
    "coachFinal": (
      "Diagnosis: septic shock from urinary source in a patient with uncontrolled diabetes, benign prostatic hyperplasia, and chronic kidney disease. "
      "Key learning: "
      "(1) Sepsis is defined as life-threatening organ dysfunction from a dysregulated host response to infection. "
      "Septic shock is sepsis with circulatory, cellular, and metabolic dysfunction sufficient to substantially increase mortality — clinically: persistent hypotension requiring vasopressors to maintain MAP >=65 AND serum lactate >2 mmol/L despite adequate volume resuscitation. "
      "Sepsis-3 (2016) eliminated SIRS criteria in favor of SOFA score; qSOFA (respiratory rate >=22, altered mentation, SBP <=100) was a bedside screen but is no longer recommended for diagnosis. "
      "(2) Surviving Sepsis Campaign HOUR-1 BUNDLE (implement as quickly as possible, within the first hour): "
      "(a) Measure lactate. Remeasure if initial >2 mmol/L. "
      "(b) Obtain blood cultures BEFORE antibiotics when feasible — x2 sets from separate sites. "
      "(c) Administer broad-spectrum antibiotics within 1 hour of recognition. "
      "(d) Begin rapid administration of 30 mL/kg of IV crystalloid for hypotension or lactate >=4 mmol/L. "
      "(e) Apply vasopressors if patient remains hypotensive after fluids to maintain MAP >=65. "
      "Reassess volume status and tissue perfusion dynamically (pulse pressure variation, passive leg raise, lactate trend, urine output, mental status, capillary refill, bedside ultrasound of IVC and cardiac function). "
      "(3) Empiric antibiotic selection depends on suspected source and patient factors. "
      "Urinary source + severe illness: piperacillin-tazobactam OR ceftriaxone (add anti-MRSA like vancomycin only for risk factors); carbapenem (meropenem) for suspected ESBL organisms based on prior cultures or local epidemiology. "
      "Adjust based on culture susceptibilities and de-escalate as soon as possible (typically within 24-72 hours of obtaining sensitivities). "
      "Source control is as important as antibiotics: decompress obstruction (ureteral stent, percutaneous nephrostomy), drain abscess, remove infected hardware, debride necrotic tissue — within 6-12 hours of diagnosis when indicated. "
      "(4) Vasopressor and adjunctive therapy. "
      "First-line: norepinephrine (titrate to MAP >=65). "
      "Add vasopressin at moderate doses (0.03 units/min) for synergy and norepinephrine-sparing effect. "
      "Add epinephrine for refractory shock. "
      "Hydrocortisone 200 mg/day (divided or continuous infusion) for septic shock on escalating vasopressors — reduces vasopressor duration and may improve outcomes. "
      "Avoid dopamine (increased arrhythmia risk). "
      "Target sugars 140-180 mg/dL (NICE-SUGAR), restrictive transfusion Hgb threshold 7 g/dL (unless active ischemia), lung-protective ventilation if intubated. "
      "(5) Comorbid considerations. "
      "Diabetes: hyperglycemia worsens immune function and outcomes — insulin titration to target range. "
      "BPH: urinary obstruction contributes to infection; relief may be needed (Foley catheter, alpha-blocker). "
      "CKD: medications need dose adjustment, avoid nephrotoxins (aminoglycoside if alternative exists, contrast dye when possible), and dialysis may be needed for refractory acidosis or volume overload. "
      "Classic pitfalls: (a) inadequate fluid resuscitation — some patients need far more than 30 mL/kg; dynamic assessment guides. "
      "(b) Delayed antibiotics — every hour delay increases mortality in septic shock. "
      "(c) Missing source control — the best antibiotics fail without drainage/decompression. "
      "(d) Over-resuscitating with crystalloid causing pulmonary edema — transition to vasopressors and albumin when adequate preload is achieved. "
      "(e) Using dopamine as first-line vasopressor — higher arrhythmia rate. "
      "(f) Not discussing goals of care in a patient with multiple comorbidities and poor baseline functional status — septic shock outcomes correlate with baseline status."
    )
  },

  "septic-arthritis-v2": {
    "diagnosis": "Prosthetic Joint Infection (Left Knee TKA, S. aureus, Post-Dental Hematogenous)",
    "coachFinal": (
      "Diagnosis: prosthetic joint infection (PJI) of left knee total knee arthroplasty, S. aureus, hematogenous seeding after dental procedure in an immunosuppressed host. "
      "Key learning: "
      "(1) Prosthetic joint infection is a devastating complication of joint replacement with lifetime risk of 1-2% for primary joint arthroplasty and higher for revisions, elderly, diabetes, obesity, RA, immunosuppression, and prior PJI. "
      "Classification by time of onset: "
      "(a) Early (<3 months post-op) — usually perioperative contamination, more virulent organisms (S. aureus, gram-negatives). "
      "(b) Delayed (3-24 months) — indolent, usually less virulent (coagulase-negative staphylococci, Cutibacterium acnes). "
      "(c) Late (>24 months) — hematogenous seeding from distant infection (dental procedures, skin infections, bacteremia). "
      "(2) Presentation and diagnostic criteria. "
      "Classic signs — persistent pain, joint warmth, swelling, erythema, fever — variable in delayed/late infections. "
      "MSIS (Musculoskeletal Infection Society) diagnostic criteria combine major criteria (sinus tract communicating with joint, two positive cultures with identical organism) and minor criteria (elevated ESR/CRP, elevated synovial WBC or PMN%, positive single culture, histologic inflammation). "
      "Workup: ESR, CRP, synovial fluid aspiration (WBC count, differential, Gram stain, culture including extended incubation for slow-growing organisms, synovial alpha-defensin if available — highly specific). "
      "Imaging: X-rays for hardware position, loosening, osteolysis; nuclear medicine (tagged WBC or FDG-PET) for complex cases; MRI limited by hardware artifact. "
      "(3) Microbiology and dental source. "
      "S. aureus is the most common PJI organism overall. "
      "Late hematogenous PJI after dental procedures has been debated — antibiotic prophylaxis before dental procedures is now recommended selectively (AAOS 2012 guidelines) for patients with recent joint replacement (<2 years), immunocompromised state, prior PJI, diabetes with A1c >7, and other risk factors — decision shared between orthopedic surgeon, patient, and dentist. "
      "Oral streptococci and anaerobes are typical after dental procedures; S. aureus hematogenous seeding comes from skin or other sources. "
      "(4) Management. "
      "Surgical strategy depends on duration of infection, hardware status, and patient factors: "
      "(a) Debridement, antibiotics, implant retention (DAIR) — for acute PJI (<3 months post-op or <3 weeks of symptoms hematogenously), stable implant, susceptible organisms. Higher recurrence than exchange. "
      "(b) Two-stage exchange arthroplasty — gold standard for most chronic PJI. Stage 1: remove hardware, debride, place antibiotic-loaded cement spacer; 6+ weeks of IV antibiotics. Stage 2: reimplant after infection cleared. "
      "(c) One-stage exchange — selected cases with favorable organism and soft tissue. "
      "(d) Arthrodesis or amputation for salvage of limb-threatening recurrent infections. "
      "Antibiotic therapy: organism-directed, prolonged (6 weeks IV typically, followed by oral suppression in some cases). "
      "Biofilm-active agents for staphylococci (rifampin combined with other agents; rifampin never used as monotherapy due to resistance). "
      "Multidisciplinary care: infectious disease, orthopedics, microbiology, primary care. "
      "(5) Classic pitfalls: (a) aspirating a joint and sending only for crystal analysis without culture — always send for Gram stain, culture, and WBC in any suspected joint infection. "
      "(b) Treating presumed PJI with antibiotics alone — biofilm on prosthetic material requires surgical source control; antibiotics alone rarely cure established PJI. "
      "(c) Giving prophylactic antibiotics for dental procedures reflexively — now selective based on risk factors. "
      "(d) Not obtaining sufficient tissue cultures at revision surgery — at least 3-5 intraoperative cultures with extended incubation improve yield for slow-growing organisms like Cutibacterium. "
      "(e) Forgetting to address modifiable risks before elective joint replacement: weight, A1c, smoking, dental disease — improves PJI risk long-term."
    )
  },

  "septic-arthritis": {
    "diagnosis": "Septic Arthritis",
    "coachFinal": (
      "Diagnosis: native joint septic arthritis — a musculoskeletal emergency. "
      "Key learning: "
      "(1) Septic arthritis is infection within the joint space that destroys cartilage rapidly — irreversible joint damage begins within hours. "
      "Mortality is 10-15%, and permanent functional disability occurs in 30-50% of survivors. "
      "Risk factors: age >80, prior joint disease (RA, gout, OA), diabetes, immunosuppression, IV drug use, recent joint injection or surgery, skin infection, bacteremia, sickle cell disease (Salmonella), and prosthetic joint (separate entity — see PJI case). "
      "(2) Microbiology: Staphylococcus aureus (40-50%, most common in all adult groups), streptococci, Neisseria gonorrhoeae (young sexually active adults — classic triad of migratory polyarthritis, tenosynovitis, and pustular skin lesions), gram-negatives (elderly, immunocompromised, IVDU), and less commonly fungi, mycobacteria (tuberculous arthritis — chronic monoarthritis), and Lyme (large joint, often knee, subacute). "
      "(3) Presentation: acute monoarthritis (typical) with pain, swelling, warmth, erythema, and often inability to bear weight or move the joint. "
      "Knee is the most common joint (>50%), followed by hip, shoulder, ankle, and wrist. "
      "Fever in only 50-60% — absence does not rule out septic arthritis. "
      "Polyarticular septic arthritis in 10-20%, especially in rheumatoid patients (may be mistaken for RA flare). "
      "Hip infection in infants and elderly can present subtly — limp, refusal to bear weight, or isolated irritability. "
      "(4) Diagnosis — arthrocentesis is mandatory and URGENT. "
      "Synovial fluid analysis: "
      "(a) WBC >50,000/uL with PMN predominance (>75%) strongly suggests infection; WBC 2,000-50,000 inflammatory/crystal; <2,000 noninflammatory. "
      "(b) Gram stain — positive in ~50% with S. aureus, lower with other organisms. "
      "(c) Culture — positive in 70-90%, may be lower with prior antibiotics. "
      "(d) Crystal analysis — gout and pseudogout can coexist with infection, so identification of crystals does not exclude sepsis. "
      "Blood cultures positive in 25-50% of cases. "
      "Imaging: X-rays baseline (usually normal early, may show effusion); ultrasound identifies effusion and guides aspiration; MRI for deeper joints (hip) and osteomyelitis assessment. "
      "(5) Management. "
      "(a) Empiric IV antibiotics AFTER aspiration and cultures: vancomycin (MRSA coverage) PLUS anti-pseudomonal beta-lactam (ceftriaxone for most adults; cefepime or piperacillin-tazobactam for elderly/immunocompromised/gram-negative risk). "
      "Add ceftriaxone for suspected gonococcal arthritis in young adults (also treats syphilis, often co-infection). "
      "Tailor to culture results; narrow as appropriate. "
      "Duration: typically 4-6 weeks (oral transition after 2 weeks of IV if improving and susceptible organism). "
      "(b) URGENT JOINT DRAINAGE is essential: "
      "- Repeated large-volume arthrocenteses (daily or more) for easily accessible joints (knee), ensuring complete aspiration. "
      "- Arthroscopic washout for most knees, shoulders. "
      "- Open surgical drainage for hip (surgical emergency — cannot be adequately drained by aspiration), poor response to aspiration, or loculated fluid. "
      "Orthopedic consultation immediately. "
      "(c) Supportive: analgesia, joint rest initially then early mobilization to prevent stiffness, physical therapy once infection controlled. "
      "Classic pitfalls: (a) giving antibiotics before joint aspiration — clouds cultures; aspirate first, then treat empirically. "
      "(b) Attributing joint pain to flare of known RA, gout, or OA without considering superimposed infection — arthrocenteze any new severe presentation. "
      "(c) Missing disseminated gonococcal infection — young adult with migratory polyarthritis, tenosynovitis, and pustular skin lesions; treat broadly for GC plus chlamydia. "
      "(d) Under-draining — antibiotics alone rarely adequate; source control with drainage is as important. "
      "(e) Not addressing the seeding source: bacteremia from line, endocarditis, skin infection."
    )
  },

  "severe-cellulitis": {
    "diagnosis": "Severe Cellulitis with Abscess — Suspected MRSA in HIV-Positive Patient",
    "coachFinal": (
      "Diagnosis: severe cellulitis with abscess formation of the right lower extremity, suspected MRSA, in an HIV-positive patient with prior MRSA history, post-occupational skin trauma. "
      "Key learning: "
      "(1) Skin and soft tissue infections (SSTIs) span a severity spectrum — from uncomplicated cellulitis to necrotizing fasciitis. "
      "IDSA classification: (a) purulent SSTI (abscess, furuncle, carbuncle) — usually staphylococcal; (b) non-purulent SSTI (cellulitis, erysipelas, deeper infections) — usually streptococcal; (c) mild, moderate, severe based on systemic features. "
      "Severe SSTI: systemic inflammatory response (fever, tachycardia, hypotension, leukocytosis), failed outpatient therapy, immunocompromised host, or features of necrotizing infection. "
      "(2) Microbiology. "
      "Cellulitis (non-purulent): beta-hemolytic streptococci (groups A, B, C, G) dominant; S. aureus (MSSA and MRSA) next. "
      "Abscess/purulent: S. aureus predominates — community-acquired MRSA (CA-MRSA) now accounts for 50-70% of purulent SSTIs in many US regions. "
      "Special scenarios: water exposure (Vibrio vulnificus with cirrhosis/immunosuppression, Aeromonas with freshwater, Mycobacterium marinum), animal bites (Pasteurella multocida from cats/dogs, Capnocytophaga), human bites (Eikenella, oral anaerobes), diabetics (polymicrobial including gram-negatives and anaerobes). "
      "(3) Workup. "
      "Mild SSTI: clinical diagnosis, no labs typically. "
      "Moderate-severe: CBC, BMP, CRP, lactate, blood cultures (positive in only 5-10% of cellulitis — higher in severe/bacteremic). "
      "Imaging: ultrasound (highly useful for differentiating cellulitis from abscess at the bedside), CT for deep tissue involvement or suspected necrotizing infection. "
      "Wound/abscess cultures when fluid can be obtained — drives targeted therapy. "
      "Specific considerations in HIV: CD4 count (determines risk of opportunistic pathogens), viral load (adherence, resistance), and review of ART regimen and drug interactions with antibiotics. "
      "(4) Management. "
      "Abscess (purulent): INCISION AND DRAINAGE is the primary treatment; antibiotics are adjunctive. "
      "For most small uncomplicated abscesses in immunocompetent patients, I&D alone is adequate. "
      "Antibiotics for I&D + abscess indications: fever, systemic symptoms, immunocompromise, large size (>2 cm), multiple abscesses, comorbidities, poor wound care access, or failed prior treatment. "
      "Empiric antibiotic selection: "
      "(a) Mild purulent SSTI (outpatient): TMP-SMX OR doxycycline (both cover MRSA); clindamycin (community resistance rising — check local antibiogram). "
      "(b) Non-purulent cellulitis (outpatient): cephalexin, dicloxacillin, or amoxicillin-clavulanate (cover streptococci and MSSA). "
      "(c) Moderate (inpatient): IV cefazolin, oxacillin, or ceftriaxone. Add vancomycin for MRSA risk. "
      "(d) Severe or immunocompromised: IV vancomycin PLUS broad-spectrum gram-negative/anaerobic coverage (piperacillin-tazobactam, cefepime). "
      "Adjust based on cultures and clinical response. "
      "Duration: uncomplicated 5-7 days; prolonged for deeper/complicated/severe, guided by clinical response. "
      "(5) Special considerations in HIV. "
      "Increased risk of bacterial SSTI, recurrence, and less common pathogens (especially in advanced HIV/AIDS with CD4 <200). "
      "Consider bartonella (bacillary angiomatosis — purple papules, often in advanced HIV), mycobacterial (including atypical), and fungal (histoplasmosis, cryptococcus) infections in atypical or refractory cases. "
      "Optimize ART — well-controlled HIV has near-normal infection risk profile. "
      "Decolonization strategies for recurrent MRSA: chlorhexidine baths (daily for 5-7 days), nasal mupirocin, environmental cleaning, household member screening. "
      "Classic pitfalls: (a) missing necrotizing fasciitis in severe SSTI — pain out of proportion, systemic toxicity, crepitus, bullae, skin necrosis — emergent surgical consult. "
      "(b) Treating abscess with antibiotics alone without I&D. "
      "(c) Not covering MRSA empirically in purulent SSTI or when risk factors present. "
      "(d) Missing other skin disease mimicking cellulitis: DVT, stasis dermatitis (bilateral, chronic), lipodermatosclerosis, erythema migrans, gout, contact dermatitis, eosinophilic cellulitis — clinical features and response to therapy clarify. "
      "(e) Forgetting wound care and tetanus in occupational injuries."
    )
  },

  "severe-croup": {
    "diagnosis": "Severe Viral Croup (Westley Score 8)",
    "coachFinal": (
      "Diagnosis: severe viral croup (laryngotracheobronchitis) with Westley score of 8, requiring nebulized epinephrine and prolonged observation. "
      "Key learning: "
      "(1) Croup is a viral upper airway illness most common in children 6 months to 6 years old, with peak incidence at 1-2 years. "
      "Parainfluenza viruses account for ~75% of cases; others include RSV, influenza, adenovirus, and rhinovirus. "
      "The virus causes inflammation and edema of the subglottic airway (cricoid cartilage is the narrowest fixed ring in pediatric airway), producing inspiratory stridor, barking cough, and respiratory distress. "
      "(2) Clinical severity — Westley Croup Score: "
      "(a) Stridor (0 no, 1 when agitated, 2 at rest). "
      "(b) Retractions (0 none, 1 mild, 2 moderate, 3 severe). "
      "(c) Air entry (0 normal, 1 decreased, 2 markedly decreased). "
      "(d) Cyanosis (0 none, 4 with agitation, 5 at rest). "
      "(e) Level of consciousness (0 normal, 5 altered). "
      "Categories: mild <=2, moderate 3-5, severe >=6. "
      "Score 8 is severe and requires aggressive treatment with nebulized epinephrine and prolonged observation. "
      "(3) Differential is critical — must distinguish from epiglottitis, bacterial tracheitis, foreign body aspiration, retropharyngeal abscess, peritonsillar abscess, and angioedema. "
      "Features favoring viral croup: gradual onset over hours to days, preceding URI, barky 'seal-like' cough, low-grade fever, child generally interactive and not toxic, stridor improves with calm. "
      "Features suggesting epiglottitis: acute onset (hours), high fever, toxic appearance, drooling, dysphagia, tripod position, muffled voice (not barky cough), and absence of cough. "
      "Immediately life-threatening — do not agitate the child, keep with parent, involve anesthesia and ENT emergently. "
      "Bacterial tracheitis: toxic appearance, high fever, rapid deterioration, failure to respond to croup treatment — requires IV antibiotics and often intubation. "
      "Foreign body: sudden onset in previously well child, focal findings, unilateral wheeze. "
      "(4) Treatment of severe croup. "
      "(a) DEXAMETHASONE 0.6 mg/kg PO/IM/IV (max 10-16 mg) — single dose, works within 2-6 hours, reduces severity, hospitalization, and return visits. "
      "The single most important intervention for croup. "
      "Budesonide nebulized is an alternative when PO not tolerated. "
      "(b) NEBULIZED EPINEPHRINE — racemic epinephrine 0.5 mL of 2.25% solution, or L-epinephrine 5 mL of 1:1,000, for moderate-severe croup. "
      "Works within 10-30 minutes; effect lasts 2-3 hours with rebound possible. "
      "All patients receiving nebulized epinephrine require OBSERVATION for at least 2-4 hours (some guidelines 3-4 hours) to detect rebound stridor. "
      "(c) Supplemental oxygen to target SpO2 >=92%. "
      "(d) Keep child calm — agitation worsens stridor; allow parent to hold child, minimize painful interventions. "
      "(e) Heliox (helium-oxygen mixture) in severe cases may reduce work of breathing but evidence is mixed. "
      "(f) IV fluids if inadequate oral intake. "
      "(5) Indications for admission, PICU, or intubation. "
      "Admission: persistent stridor at rest despite epinephrine and steroids, need for repeat epinephrine, poor oral intake, dehydration, return visit for same illness, or concerning social situation. "
      "PICU: severe persistent respiratory distress, hypoxemia despite treatment, altered mental status, or need for close airway monitoring. "
      "Intubation: rare for viral croup, but necessary for impending respiratory failure — preparation with smaller ETT size than predicted (due to subglottic narrowing) and anesthesia involvement. "
      "Classic pitfalls: (a) missing epiglottitis and agitating a child with severe respiratory distress — if in doubt, DO NOT visualize the pharynx with a tongue depressor in a distressed child; keep calm and get ENT/anesthesia. "
      "(b) Discharging after epinephrine without observation — rebound stridor occurs in 2-3 hours. "
      "(c) Using antibiotics for viral croup — not indicated unless bacterial tracheitis. "
      "(d) Forgetting steroids — single dose dexamethasone is standard of care for ALL croup, even mild. "
      "(e) Missing foreign body in a child with persistent 'croup-like' symptoms — especially unilateral wheeze or no response to croup treatment."
    )
  },

  "severe-hyperkalemia-from-missed-dialysis": {
    "diagnosis": "Severe Hyperkalemia with ECG Changes from Missed Hemodialysis (ESRD)",
    "coachFinal": (
      "Diagnosis: severe hyperkalemia (K 7.8) with ECG changes from missed hemodialysis in ESRD, with volume overload and metabolic acidosis. "
      "Key learning: "
      "(1) End-stage renal disease (ESRD) patients on hemodialysis depend on regular dialysis (typically 3 times weekly) for potassium, volume, and solute clearance. "
      "Missed dialysis sessions are a common cause of life-threatening hyperkalemia — interdialytic intake without clearance leads to rapid K+ rise. "
      "Common reasons for missed dialysis: transportation issues, hospitalization, nonadherence, weather, clinic closures, and acute illness. "
      "Education and support around dialysis adherence is a key population health issue. "
      "(2) Hyperkalemia severity: "
      "- Mild: 5.5-5.9 mEq/L. "
      "- Moderate: 6.0-6.4. "
      "- Severe: >=6.5 or any level with ECG changes, symptoms, or rapid rise. "
      "ECG changes progress from peaked T waves (first sign), to PR prolongation, to P wave flattening, to QRS widening, to sine-wave morphology, to asystole or ventricular fibrillation. "
      "ECG changes do not correlate perfectly with K+ number — always treat based on ECG and clinical status, not the number alone. "
      "(3) Emergency management algorithm (simultaneous goals): "
      "(a) MEMBRANE STABILIZATION — IV calcium gluconate 1-2 g (10-20 mL of 10% solution) OR calcium chloride 500-1,000 mg via central access (calcium chloride has 3x more calcium but more irritating peripherally) — given immediately for any ECG changes. Effect within minutes, lasts 30-60 min — REDOSE if changes persist. "
      "(b) INTRACELLULAR SHIFT: "
      "- Insulin 10 units IV with dextrose 25 g (D50W 50 mL) — drops K by 0.5-1 mEq/L within 30 min; monitor glucose for hypoglycemia for 4-6 hours. "
      "- Albuterol 10-20 mg nebulized (4-8x standard dose) — adds 0.5-1 mEq/L drop; caution in ischemic heart disease. "
      "- Sodium bicarbonate 1 mEq/kg IV over 15-30 min — useful in acidemic patients, effect modest. "
      "(c) ELIMINATION: "
      "- HEMODIALYSIS is the definitive treatment in ESRD — activate the dialysis team immediately. "
      "- Loop diuretics (furosemide) — ineffective in anuric ESRD. "
      "- Potassium binders: patiromer, sodium zirconium cyclosilicate, or sodium polystyrene sulfonate (SPS/Kayexalate — safety concerns with colonic necrosis, especially post-op and with concurrent sorbitol; use newer binders when available). "
      "(4) Dialysis considerations. "
      "Arrange urgent hemodialysis with a low-potassium dialysate bath (2.0 mEq/L typical; can go lower if severe, but caution about arrhythmias with rapid correction). "
      "Continuous cardiac monitoring during dialysis. "
      "Address volume overload and acidosis simultaneously via dialysis. "
      "Watch for 'rebound hyperkalemia' as intracellular K shifts back out after temporizing measures wear off — important to complete dialysis before discharge. "
      "(5) Discharge and long-term. "
      "Identify and address cause of missed dialysis: transportation (Medicaid transport, family support), social determinants, depression, substance use, home vs clinic dialysis decisions. "
      "Medication review: ACE-I/ARB/MRA and potassium-retaining drugs appropriate in many ESRD patients but require careful monitoring; patiromer or sodium zirconium cyclosilicate can enable continuation. "
      "Dietary counseling: low-potassium diet review (avoid bananas, oranges, tomatoes, potatoes, salt substitutes — often overlooked potassium source). "
      "Classic pitfalls: (a) waiting for dialysis without giving calcium in a patient with ECG changes — membrane stabilization is minutes-urgent. "
      "(b) Giving insulin without dextrose or without glucose monitoring — severe hypoglycemia can follow. "
      "(c) Using SPS in ileus/postop patients — colonic necrosis risk. "
      "(d) Not addressing why dialysis was missed — the same problem will recur. "
      "(e) Forgetting concurrent volume overload — dialysis addresses both K and volume; pulmonary edema from volume can kill even after K is normalized."
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
    print(f'\nBatch 32A: {done}/{len(ENRICHMENTS)} enriched')
