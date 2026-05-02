/* concept-maps/infectious-disease.js
 *
 * Infectious Disease domain. Mirrors the structural patterns from
 * cardiology and neurology: presentation-first hubs, concept clusters,
 * mechanism nodes for cross-cutting bridges, every edge labeled.
 *
 * Cross-domain edges connect to cardiology (endocarditis, cardiorenal,
 * PE) and neurology (meningitis, delirium-UTI anchoring trap). ID has
 * the broadest integration potential of any domain because infection
 * touches every system; this map captures the highest-yield bridges.
 *
 * Authoring rule: every node references existing puzzles. No node
 * without content backing.
 */

window.RDX_CONCEPT_MAPS = window.RDX_CONCEPT_MAPS || {};
window.RDX_CONCEPT_MAPS["infectious-disease"] = {
  domain: "infectious-disease",
  domainLabel: "Infectious Disease",
  defaultFocus: "sepsis-and-shock",
  searchAliases: {
    "infectious disease": "sepsis-and-shock",
    "id": "sepsis-and-shock",
    "infection": "sepsis-and-shock",
    "sepsis": "sepsis-and-shock",
    "septic shock": "sepsis-and-shock",
    "shock": "sepsis-and-shock",
    "lactate": "sepsis-and-shock",
    "post-op fever": "post-op-fever-surveillance",
    "postop fever": "post-op-fever-surveillance",
    "surveillance": "post-op-fever-surveillance",
    "uti": "nursing-home-delirium-uti",
    "asymptomatic bacteriuria": "nursing-home-delirium-uti",
    "delirium uti": "nursing-home-delirium-uti",
    "pneumonia": "pneumonia",
    "cap": "community-acquired-pneumonia",
    "community acquired pneumonia": "community-acquired-pneumonia",
    "aspiration": "community-acquired-pneumonia",
    "tb": "pulmonary-tuberculosis",
    "tuberculosis": "pulmonary-tuberculosis",
    "cavitary": "pulmonary-tuberculosis",
    "bacteremia": "bacteremia-endovascular",
    "blood cultures": "bacteremia-endovascular",
    "viridans": "viridans-strep-bacteremia",
    "mrsa": "mrsa-cellulitis",
    "vancomycin": "mrsa-cellulitis",
    "vanc": "mrsa-cellulitis",
    "cellulitis": "mrsa-cellulitis",
    "c diff": "c-diff-colitis",
    "c. diff": "c-diff-colitis",
    "clostridioides": "c-diff-colitis",
    "antibiotic-associated diarrhea": "c-diff-colitis",
    "strep throat": "pharyngitis-strep-mono",
    "pharyngitis": "pharyngitis-strep-mono",
    "mono": "pharyngitis-strep-mono",
    "ebv": "pharyngitis-strep-mono",
    "atypical lymphocytes": "pharyngitis-strep-mono",
    "dress": "dress-syndrome",
    "drug rash": "dress-syndrome",
    "septic arthritis": "pediatric-septic-arthritis",
    "septic joint": "pediatric-septic-arthritis",
    "immunocompromise": "host-immune-status",
    "immunocompromised": "host-immune-status",
    "hiv": "host-immune-status",
    "transplant": "host-immune-status",
    "neutropenia": "host-immune-status"
  },
  nodes: [
    // ── Hubs ────────────────────────────────────────────────────────
    { id: "sepsis-and-shock",
      label: "Sepsis and septic shock",
      kind: "hub",
      summary: "Presentation-first hub for the patient with infection and hemodynamic compromise. The decision tree: source identification, fluid resuscitation, vasopressors, antibiotic timing, and the catch when standard resuscitation fails (think adrenal insufficiency, occult source).",
      content: "Puzzles: #44, #75, #109" },
    { id: "pneumonia",
      label: "Pneumonia",
      kind: "hub",
      summary: "Hub for pulmonary infection. Sub-presentations diverge by setting (CAP vs HAP vs aspiration), pathogen risk (TB on certain risk factors), and host (immunocompromise changes the differential dramatically).",
      content: "Puzzles: #28, #31" },
    { id: "bacteremia-endovascular",
      label: "Bacteremia and endovascular infection",
      kind: "hub",
      summary: "Hub for bloodstream infection and its complications. Source matters (line, skin, GI, GU, endocardium); the path from positive blood cultures to endocarditis is the highest-stakes downstream pathway and lives across the cardio-ID boundary.",
      content: "Puzzles: #19, #33, #76" },

    // ── Sepsis cluster ──────────────────────────────────────────────
    { id: "post-op-fever-surveillance",
      label: "Post-op fever and surveillance",
      kind: "concept",
      summary: "The trending vital-sign pattern that signals brewing post-op sepsis. The teaching: subtle changes (fever, tachycardia, rising RR) precede overt instability by hours. Recognition is the surveillance skill.",
      content: "Puzzles: #75" },
    { id: "nursing-home-delirium-uti",
      label: "Asymptomatic bacteriuria as anchor",
      kind: "concept",
      summary: "The classic anchoring trap: positive UA in a delirious nursing-home patient does not diagnose UTI as the cause. Up to 50% of nursing-home residents have asymptomatic bacteriuria. The delirium needs a real workup; UTI is one possibility among many.",
      content: "Puzzles: #44" },
    { id: "septic-shock-with-adrenal",
      label: "Septic shock with adrenal insufficiency",
      kind: "concept",
      summary: "Refractory shock despite fluids and vasopressors should prompt evaluation for adrenal insufficiency. Random cortisol below 15 in a critically ill patient supports the diagnosis; stress-dose steroids change the trajectory.",
      content: "Puzzles: #109" },

    // ── Pneumonia cluster ──────────────────────────────────────────
    { id: "community-acquired-pneumonia",
      label: "Community-acquired pneumonia",
      kind: "concept",
      summary: "Beta-lactam plus macrolide is the standard combination for hospitalized CAP, balancing typical and atypical coverage. Monotherapy with respiratory fluoroquinolone is an alternative but less preferred in stewardship-conscious institutions.",
      content: "Puzzles: #31" },
    { id: "pulmonary-tuberculosis",
      label: "Pulmonary tuberculosis",
      kind: "concept",
      summary: "Subacute cough, weight loss, night sweats, hemoptysis. Cavitary upper-lobe disease classic. Risk factors include healthcare exposure, immigration history, immunocompromise, incarceration. Airborne isolation while awaiting AFB smears.",
      content: "Puzzles: #28" },

    // ── Bacteremia cluster ─────────────────────────────────────────
    { id: "viridans-strep-bacteremia",
      label: "Viridans strep bacteremia",
      kind: "concept",
      summary: "Persistent bacteremia with a typical endocarditis organism (viridans strep, S. aureus, enterococci) in a patient with risk factors (IV drug use, dental work, prosthetic valve) is endocarditis until echo proves otherwise. The cross-domain edge to cardiology endocarditis is the central teaching.",
      content: "Puzzles: #33" },
    { id: "mrsa-cellulitis",
      label: "MRSA and cellulitis treatment",
      kind: "concept",
      summary: "Cellulitis not improving on cefazolin should prompt consideration of MRSA coverage (vancomycin), but the call is not automatic: re-examine the wound, consider abscess requiring drainage, consider missed diagnosis. Vancomycin dosing requires renal-function-aware adjustment.",
      content: "Puzzles: #76, #84" },

    // ── Other ID concepts ──────────────────────────────────────────
    { id: "c-diff-colitis",
      label: "C. difficile colitis",
      kind: "concept",
      summary: "Antibiotic-associated diarrhea, especially with broad-spectrum exposure (cephalosporins, fluoroquinolones, clindamycin). PCR positivity confirms colonization; severity (WBC, creatinine, ileus, megacolon) drives management. Vancomycin oral or fidaxomicin first-line.",
      content: "Puzzles: #39" },
    { id: "pharyngitis-strep-mono",
      label: "Pharyngitis: strep vs mono",
      kind: "concept",
      summary: "The distinguishing case. Strep: rapid antigen positive, exudates, no LAD beyond cervical, treat with penicillin. Mono: cervical+posterior LAD, atypical lymphocytes, transaminitis, fatigue out of proportion. Avoid amoxicillin in mono (rash). Splenomegaly contraindicates contact sports.",
      content: "Puzzles: #80, #110" },
    { id: "dress-syndrome",
      label: "DRESS syndrome",
      kind: "concept",
      summary: "Drug Reaction with Eosinophilia and Systemic Symptoms. Typically 2-8 weeks after starting culprit drug (sulfa, anticonvulsants, allopurinol). Fever, rash, lymphadenopathy, eosinophilia, organ involvement (liver, kidney). Stop the drug; severe cases need steroids.",
      content: "Puzzles: #121" },
    { id: "pediatric-septic-arthritis",
      label: "Pediatric septic arthritis",
      kind: "concept",
      summary: "Child with fever, refusal to bear weight, joint held in flexion. Kocher criteria stratify risk vs transient synovitis. Aspiration is diagnostic and therapeutic; delay risks joint destruction.",
      content: "Puzzles: #22" },

    // ── Mechanism node (cross-cutting) ─────────────────────────────
    { id: "host-immune-status",
      label: "Host immune status",
      kind: "mechanism",
      summary: "Bridge concept. The patient's immune status changes the differential at every step: HIV/CD4 count opens cryptococcal meningitis, neutropenia opens fungal infections, transplant immunosuppression opens CMV/PJP/aspergillus. The same presentation in different hosts is different clinical territory.",
      content: "Puzzles (referenced from neurology #20 cryptococcal)" }
  ],

  edges: [
    // ── Sepsis hub edges ────────────────────────────────────────────
    { from: "sepsis-and-shock", to: "post-op-fever-surveillance", type: "shares-presentation",
      label: "trending vitals",
      note: "Post-op sepsis is recognized through surveillance: subtle vital sign changes (fever, tachycardia, rising RR) precede overt shock by hours. The skill is reading the trend, not waiting for the threshold." },
    { from: "sepsis-and-shock", to: "septic-shock-with-adrenal", type: "differential-pair",
      label: "refractory + low cortisol",
      note: "When standard fluid + vasopressor resuscitation fails, consider adrenal insufficiency. Low cortisol in a critically ill patient supports the diagnosis; stress-dose steroids change the trajectory." },
    { from: "sepsis-and-shock", to: "nursing-home-delirium-uti", type: "differential-pair",
      label: "real workup vs UA",
      note: "A positive UA in a delirious elderly patient does not equal sepsis. Asymptomatic bacteriuria is common in nursing-home residents; the delirium needs a workup independent of the UA. The trap is letting the UA close the differential." },

    // ── Pneumonia hub edges ─────────────────────────────────────────
    { from: "pneumonia", to: "community-acquired-pneumonia", type: "differential-pair",
      label: "CAP coverage",
      note: "Beta-lactam plus macrolide is the standard combination for hospitalized CAP. Monotherapy with respiratory fluoroquinolone is an alternative but less preferred." },
    { from: "pneumonia", to: "pulmonary-tuberculosis", type: "differential-pair",
      label: "subacute + cavitary",
      note: "Subacute cough, weight loss, night sweats, hemoptysis, upper-lobe cavitary disease points away from typical CAP toward TB. Risk factors and exposure history drive the index of suspicion." },

    // ── Bacteremia hub edges ────────────────────────────────────────
    { from: "bacteremia-endovascular", to: "viridans-strep-bacteremia", type: "differential-pair",
      label: "typical IE organism",
      note: "Persistent bacteremia with a typical endocarditis organism is endocarditis until echo proves otherwise. The pathogen identity drives the workup." },
    { from: "bacteremia-endovascular", to: "mrsa-cellulitis", type: "shares-presentation",
      label: "skin source + bacteremia",
      note: "Cellulitis is the most common skin source of bacteremia, especially S. aureus including MRSA. The pathway: skin infection, blood-stream seeding, possible endovascular complications." },

    // ── Other ID edges ──────────────────────────────────────────────
    { from: "community-acquired-pneumonia", to: "c-diff-colitis", type: "shares-mechanism",
      label: "antibiotic exposure",
      note: "Broad-spectrum antibiotics for pneumonia (and many other indications) are the leading risk factor for C. difficile colitis. The teaching is stewardship: every dose has downstream cost." },
    { from: "pharyngitis-strep-mono", to: "host-immune-status", type: "shares-mechanism",
      label: "EBV in immunocompromise",
      note: "EBV (mono) is usually self-limited in immunocompetent hosts but can be life-threatening in transplant or HIV. Same pathogen, different host, different clinical territory." },

    // Septic arthritis stands somewhat alone but connects to bacteremia
    { from: "pediatric-septic-arthritis", to: "bacteremia-endovascular", type: "shares-mechanism",
      label: "hematogenous seeding",
      note: "Pediatric septic arthritis is most commonly hematogenous (bacteremia seeding the joint). Source identification matters: sometimes the joint is the only finding of an occult bacteremia." },

    // DRESS connects through host immune status (drug-mediated immune dysregulation)
    { from: "dress-syndrome", to: "host-immune-status", type: "shares-mechanism",
      label: "drug-immune dysregulation",
      note: "DRESS is a drug-induced systemic immune reaction with eosinophilia and organ involvement. Mechanism is incompletely understood but involves T-cell dysregulation and HHV-6 reactivation." },

    // TB reactivation in immunocompromise — high-yield clinical teaching
    { from: "pulmonary-tuberculosis", to: "host-immune-status", type: "shares-mechanism",
      label: "reactivation risk",
      note: "Latent TB reactivates when cell-mediated immunity wanes: HIV, anti-TNF therapy, transplant immunosuppression, chronic steroids. Screening before starting immunosuppression is the standard of care." },

    // Mono and DRESS share a mechanism (HHV-family reactivation)
    { from: "pharyngitis-strep-mono", to: "dress-syndrome", type: "shares-mechanism",
      label: "HHV reactivation",
      note: "Both EBV mononucleosis and DRESS involve herpesvirus biology: EBV directly causes mono; HHV-6 reactivation contributes to DRESS pathogenesis. The connection is mechanistic, not clinical, but explains some shared features (lymphadenopathy, hepatic involvement)." },

    // ── Cross-domain edges ──────────────────────────────────────────

    // To cardiology: bacteremia → endocarditis (the canonical bridge)
    { from: "viridans-strep-bacteremia",
      to: { domain: "cardiology", node: "endocarditis" },
      type: "shares-mechanism",
      label: "valve seeding",
      note: "Persistent viridans strep bacteremia in a patient with valve risk factors is endocarditis until proven otherwise. Echo (TTE first, TEE if negative and suspicion remains) confirms; antibiotics are 4-6 weeks IV depending on organism and valve." },

    // To cardiology: sepsis → cardiorenal (sepsis-induced AKI)
    { from: "sepsis-and-shock",
      to: { domain: "cardiology", node: "cardiorenal" },
      type: "shares-mechanism",
      label: "sepsis AKI overlap",
      note: "Sepsis is a leading cause of AKI. The pathophysiology overlaps with cardiorenal syndrome (low effective circulating volume, neurohormonal activation), and the management decisions (fluids vs diuresis, when to start vasopressors) parallel each other." },

    // To cardiology: pneumonia → PE (the diagnostic mimic)
    { from: "pneumonia",
      to: { domain: "cardiology", node: "pulmonary-embolism" },
      type: "differential-pair",
      label: "PE mimics pneumonia",
      note: "PE can present with pleuritic chest pain, low-grade fever, leukocytosis, and a CXR infiltrate, mimicking pneumonia. The trap is treating with antibiotics while missing the embolism. Risk factors and oxygenation that doesn't match the radiographic findings should prompt CTPA." },

    // To neurology: nursing-home delirium-UTI → delirium-dementia
    { from: "nursing-home-delirium-uti",
      to: { domain: "neurology", node: "delirium-dementia" },
      type: "shares-presentation",
      label: "anchoring on UTI",
      note: "The delirium-UTI anchoring trap is the same teaching from both sides: the delirium needs a real workup, the UA does not close the differential. ID and neuro share this clinical decision." },

    // To neurology: pneumonia → bacterial meningitis (community-acquired bacterial illness syndromes)
    { from: "pneumonia",
      to: { domain: "neurology", node: "bacterial-meningitis" },
      type: "shares-mechanism",
      label: "community pathogens",
      note: "Strep pneumoniae causes both community-acquired pneumonia and bacterial meningitis; the same pathogen produces different clinical syndromes depending on tissue invasion. Pneumococcal vaccination prevents both." },

    // To neurology: host immune status → viral/cryptococcal meningitis
    { from: "host-immune-status",
      to: { domain: "neurology", node: "viral-meningitis" },
      type: "shares-mechanism",
      label: "opportunistic CNS",
      note: "HIV with low CD4 opens the differential to cryptococcal meningitis; transplant patients can have CMV encephalitis or progressive multifocal leukoencephalopathy. The host status reframes the meningitis differential entirely." }
  ]
};
