/* concept-maps/neurology.js
 *
 * Neurology domain for the ReasonDx concept map. Mirrors the
 * structural patterns from cardiology.js: presentation-first hubs,
 * concept clusters, mechanism nodes as cross-cutting bridges, every
 * edge labeled with a discriminator-style teaching point.
 *
 * Cross-domain edges declared at the bottom connect to cardiology
 * (and will connect to other domains as they're authored). The
 * single source of truth pattern means each cross-domain edge is
 * declared once; the rendering layer mirrors it from both sides.
 *
 * Node content references existing puzzles by index (matching the
 * PUZZLES array in puzzles.html) and branched cases by id. Every
 * node and edge in this file maps to existing platform content; no
 * dangling references.
 */

window.RDX_CONCEPT_MAPS = window.RDX_CONCEPT_MAPS || {};
window.RDX_CONCEPT_MAPS["neurology"] = {
  domain: "neurology",
  domainLabel: "Neurology",
  defaultFocus: "acute-headache",
  searchAliases: {
    "neurology": "acute-headache",
    "neuro": "acute-headache",
    "headache": "acute-headache",
    "ha": "acute-headache",
    "thunderclap": "subarachnoid-hemorrhage",
    "sah": "subarachnoid-hemorrhage",
    "subarachnoid": "subarachnoid-hemorrhage",
    "meningitis": "bacterial-meningitis",
    "bacterial meningitis": "bacterial-meningitis",
    "viral meningitis": "viral-meningitis",
    "aseptic": "viral-meningitis",
    "gca": "giant-cell-arteritis",
    "temporal arteritis": "giant-cell-arteritis",
    "giant cell": "giant-cell-arteritis",
    "ams": "altered-mental-status",
    "altered mental status": "altered-mental-status",
    "coma": "altered-mental-status",
    "unresponsive": "altered-mental-status",
    "herniation": "herniation-icp",
    "icp": "herniation-icp",
    "raised icp": "herniation-icp",
    "tbi": "herniation-icp",
    "wernicke": "wernicke",
    "thiamine": "wernicke",
    "opioid": "opioid-overdose",
    "overdose": "opioid-overdose",
    "narcan": "opioid-overdose",
    "naloxone": "opioid-overdose",
    "delirium": "delirium-dementia",
    "dementia": "delirium-dementia",
    "weakness": "acute-weakness",
    "stroke": "ischemic-stroke",
    "tia": "ischemic-stroke",
    "cva": "ischemic-stroke",
    "gbs": "gbs",
    "guillain": "gbs",
    "guillain-barre": "gbs",
    "myelopathy": "cervical-myelopathy",
    "cord compression": "cervical-myelopathy",
    "spinal cord": "cervical-myelopathy",
    "nms": "nms-vs-serotonin",
    "serotonin syndrome": "nms-vs-serotonin",
    "neuroleptic": "nms-vs-serotonin",
    "intracranial pressure": "intracranial-pressure",
    "cerebral perfusion": "cerebral-perfusion",
    "watershed": "cerebral-perfusion"
  },
  nodes: [
    // ── Hubs ────────────────────────────────────────────────────────
    { id: "acute-headache",
      label: "Acute headache",
      kind: "hub",
      summary: "Presentation-first hub. Connects to the killers (SAH, bacterial meningitis, GCA) and the high-yield mimics. The discriminator is timing and associated features, not the headache itself.",
      content: "Puzzles: #30, #56, #86, #102, #116" },
    { id: "altered-mental-status",
      label: "Altered mental status",
      kind: "hub",
      summary: "Presentation-first hub for the patient who looks 'off.' Spans structural, metabolic, and toxic causes. The first move is checking glucose, vital signs, and pupils, not pattern-matching to one diagnosis.",
      content: "Branched: herniation-overnight | Puzzles: #4, #27, #34, #42, #51, #85, #91, #100" },
    { id: "acute-weakness",
      label: "Acute weakness",
      kind: "hub",
      summary: "Presentation-first hub for new-onset weakness. The discriminator is pattern (focal vs ascending vs proximal), tempo (sudden vs days), and exam findings (UMN vs LMN).",
      content: "Puzzles: #13, #48, #52, #73" },

    // ── Concepts: headache cluster ───────────────────────────────────
    { id: "subarachnoid-hemorrhage",
      label: "Subarachnoid hemorrhage",
      kind: "concept",
      summary: "Thunderclap onset, neck stiffness, photophobia. CT first; LP if CT is negative and pretest probability stays high (xanthochromia).",
      content: "Puzzles: #30, #56" },
    { id: "bacterial-meningitis",
      label: "Bacterial meningitis",
      kind: "concept",
      summary: "Fever, headache, neck stiffness, photophobia. LP findings: high WBC (neutrophil predominant), high protein, low glucose. Empiric antibiotics before LP if there is any delay.",
      content: "Puzzles: #14, #86, #116" },
    { id: "viral-meningitis",
      label: "Viral / aseptic meningitis",
      kind: "concept",
      summary: "Similar presentation to bacterial but milder; LP shows lymphocyte predominance, normal glucose, modest protein elevation. Cryptococcal in immunocompromised hosts is a key consideration.",
      content: "Puzzles: #20, #86, #116" },
    { id: "giant-cell-arteritis",
      label: "Giant cell arteritis",
      kind: "concept",
      summary: "Older patient, new headache, scalp tenderness, jaw claudication, vision changes. ESR and CRP elevated. Treat empirically while awaiting biopsy; vision loss is the catastrophic consequence of delay.",
      content: "Puzzles: #102" },

    // ── Concepts: AMS cluster ────────────────────────────────────────
    { id: "herniation-icp",
      label: "Herniation and elevated ICP",
      kind: "concept",
      summary: "Cushing triad (hypertension, bradycardia, irregular respirations), pupillary asymmetry, decerebrate or decorticate posturing. Time-critical: head-of-bed up, hyperventilation as a temporizer, hyperosmolar therapy.",
      content: "Branched: herniation-overnight | Puzzles: #4, #42" },
    { id: "wernicke",
      label: "Wernicke encephalopathy",
      kind: "concept",
      summary: "Triad: confusion, ophthalmoplegia, ataxia. Often missed by anchoring on alcohol intoxication. Thiamine before glucose in any malnourished or alcohol-dependent patient with altered mentation.",
      content: "Puzzles: #51" },
    { id: "opioid-overdose",
      label: "Opioid overdose",
      kind: "concept",
      summary: "Pinpoint pupils, depressed respirations, decreased mental status. Naloxone reverses; airway and ventilation are the priority. Resedation is common and the patient often needs prolonged observation.",
      content: "Puzzles: #27" },
    { id: "delirium-dementia",
      label: "Delirium superimposed on dementia",
      kind: "concept",
      summary: "Acute change from baseline in a patient with chronic cognitive impairment. The trap is attributing the new findings to the chronic dementia. Always look for the precipitant (infection, metabolic, drug).",
      content: "Puzzles: #34, #85, #91" },

    // ── Concepts: weakness cluster ───────────────────────────────────
    { id: "ischemic-stroke",
      label: "Ischemic stroke",
      kind: "concept",
      summary: "Sudden focal deficit. Time is brain: tPA window, thrombectomy window, NIH stroke scale. The post-stroke disposition is its own decision tree (rehab level, dysphagia screen, social).",
      content: "Puzzles: #73" },
    { id: "gbs",
      label: "Guillain-Barre syndrome",
      kind: "concept",
      summary: "Ascending symmetric weakness, areflexia, often post-infectious (Campylobacter classic). Albuminocytologic dissociation on LP. Watch for respiratory failure; the chronic mimic is CIDP.",
      content: "Puzzles: #13, #48" },
    { id: "cervical-myelopathy",
      label: "Cervical myelopathy",
      kind: "concept",
      summary: "Progressive bilateral leg weakness, hyperreflexia, Babinski, sensory level on the trunk. Distinguishes from peripheral disease by upper motor neuron findings. Cord compression is a surgical emergency.",
      content: "Puzzles: #52" },
    { id: "nms-vs-serotonin",
      label: "NMS vs serotonin syndrome",
      kind: "concept",
      summary: "Both present with hyperthermia, altered mental status, autonomic instability, and rigidity. Discriminate by exposure (antipsychotic vs serotonergic) and exam: NMS has lead-pipe rigidity and bradyreflexia; serotonin has clonus and hyperreflexia.",
      content: "Puzzles: #100" },

    // ── Mechanism nodes (cross-cutting) ──────────────────────────────
    { id: "intracranial-pressure",
      label: "Intracranial pressure physiology",
      kind: "mechanism",
      summary: "Bridge concept. The Monro-Kellie doctrine (skull as fixed-volume compartment) explains why mass lesions, edema, and obstruction all produce the same final pathway. Connects herniation, TBI, SAH, and severe meningitis.",
      content: "Puzzles: #4, #42" },
    { id: "cerebral-perfusion",
      label: "Cerebral perfusion",
      kind: "mechanism",
      summary: "Bridge to cardiology. Cerebral blood flow depends on systemic perfusion (cardiac output) and pressure gradient (MAP minus ICP). Watershed strokes, cardiogenic emboli, and global hypoperfusion all live here.",
      content: "Puzzles: #73" }
  ],

  edges: [
    // ── Headache hub edges ───────────────────────────────────────────
    { from: "acute-headache", to: "subarachnoid-hemorrhage", type: "differential-pair",
      label: "thunderclap onset",
      note: "Sudden, maximal-from-onset headache with neck stiffness. CT first, LP for xanthochromia if CT is negative and pretest probability stays high." },
    { from: "acute-headache", to: "bacterial-meningitis", type: "differential-pair",
      label: "fever + neck stiffness",
      note: "Fever, photophobia, neck stiffness. LP: neutrophil-predominant pleocytosis, high protein, low glucose. Empiric antibiotics if any delay." },
    { from: "acute-headache", to: "giant-cell-arteritis", type: "differential-pair",
      label: "ESR, jaw claudication",
      note: "Older patient, new headache, scalp tenderness, jaw claudication, ESR/CRP elevated. Treat empirically; vision loss is the cost of delay." },

    // Headache sub-cluster
    { from: "bacterial-meningitis", to: "viral-meningitis", type: "differential-pair",
      label: "LP cell type, glucose",
      note: "Bacterial: neutrophils, low glucose. Viral/aseptic: lymphocytes, normal glucose. Cryptococcal in immunocompromised hosts adds India ink positivity." },

    // ── AMS hub edges ────────────────────────────────────────────────
    { from: "altered-mental-status", to: "herniation-icp", type: "differential-pair",
      label: "pupil + posturing",
      note: "Pupillary asymmetry, posturing, Cushing triad. Time-critical structural emergency. The branched case herniation-overnight is the centerpiece." },
    { from: "altered-mental-status", to: "wernicke", type: "differential-pair",
      label: "alcohol + ophthalmoplegia",
      note: "Confusion + ophthalmoplegia + ataxia in a malnourished or alcohol-dependent patient. Thiamine before glucose; the trap is anchoring on intoxication." },
    { from: "altered-mental-status", to: "opioid-overdose", type: "differential-pair",
      label: "pinpoint pupils, low RR",
      note: "Pinpoint pupils, depressed respirations, decreased mental status. Reversible with naloxone but requires sustained observation." },
    { from: "altered-mental-status", to: "delirium-dementia", type: "differential-pair",
      label: "acute on chronic",
      note: "Acute change from baseline in a patient with dementia. The trap is dismissing it as 'just the dementia.' Always look for the precipitant." },

    // AMS sub-cluster
    { from: "herniation-icp", to: "intracranial-pressure", type: "shares-mechanism",
      label: "pressure compartment",
      note: "Herniation is the final common pathway when ICP exceeds the brain's ability to compensate. The Monro-Kellie doctrine is the physiology." },

    // ── Weakness hub edges ───────────────────────────────────────────
    { from: "acute-weakness", to: "ischemic-stroke", type: "differential-pair",
      label: "abrupt focal deficit",
      note: "Sudden focal deficit. Time is brain. NIH stroke scale, tPA and thrombectomy windows, dysphagia screen, post-stroke disposition." },
    { from: "acute-weakness", to: "gbs", type: "differential-pair",
      label: "ascending + areflexia",
      note: "Ascending symmetric weakness, areflexia, often post-infectious. Albuminocytologic dissociation on LP. Respiratory failure is the deteriorating endpoint." },
    { from: "acute-weakness", to: "cervical-myelopathy", type: "differential-pair",
      label: "UMN signs, sensory level",
      note: "Bilateral leg weakness with hyperreflexia, Babinski, sensory level. UMN findings distinguish from peripheral causes. Cord compression is surgical." },

    // Weakness sub-cluster
    { from: "gbs", to: "cervical-myelopathy", type: "shares-presentation",
      label: "leg weakness, exam clue",
      note: "Both present with bilateral leg weakness, but GBS is areflexic (LMN) and myelopathy is hyperreflexic (UMN). The exam distinguishes them in seconds." },

    // Stroke connections
    { from: "ischemic-stroke", to: "cerebral-perfusion", type: "shares-mechanism",
      label: "watershed",
      note: "Watershed infarcts arise from systemic hypoperfusion rather than embolic occlusion. Mechanism connects to cardiac output and global cerebral perfusion." },

    // ── Cross-cluster (within neurology) ────────────────────────────
    { from: "subarachnoid-hemorrhage", to: "intracranial-pressure", type: "shares-mechanism",
      label: "raised ICP from blood",
      note: "Subarachnoid blood raises ICP through irritation, hydrocephalus, and edema. Connects to the same final pathway as TBI and severe meningitis." },
    { from: "bacterial-meningitis", to: "intracranial-pressure", type: "shares-mechanism",
      label: "cerebral edema",
      note: "Severe bacterial meningitis raises ICP through inflammation and cerebral edema. The same physiology as TBI; the same management principles apply." },

    // ── Diagnostic discrimination edges ──────────────────────────────
    { from: "wernicke", to: "delirium-dementia", type: "shares-presentation",
      label: "confusion, easy to miss",
      note: "Both produce acute confusion in older patients. The discriminator is the alcohol/malnutrition history and the eye findings; thiamine is empiric and harmless." },

    // Special: NMS vs serotonin syndrome (the puzzle is itself the discrimination)
    { from: "altered-mental-status", to: "nms-vs-serotonin", type: "differential-pair",
      label: "rigidity + autonomic",
      note: "Both produce hyperthermia + AMS + autonomic instability. Discriminator: NMS = antipsychotic exposure, lead-pipe rigidity, bradyreflexia; serotonin syndrome = serotonergic, clonus, hyperreflexia." },

    // ── Cross-domain edges (to cardiology) ───────────────────────────
    // The canonical cardio-neuro integration: AFib as the cardiac
    // source of cardioembolic stroke. Declared in this file; renders
    // automatically from both sides of the boundary.
    { from: "ischemic-stroke",
      to: { domain: "cardiology", node: "afib-anticoag" },
      type: "shares-mechanism",
      label: "cardiac source of emboli",
      note: "AFib is the leading cause of cardioembolic stroke. The integration teaching: anticoagulation choice in AFib (CHA2DS2-VASc) is a stroke-prevention decision, not just a cardiology decision." },

    // Mechanism node bridge: cerebral perfusion physiology connects to
    // heart failure (low forward flow) and other low-perfusion states.
    { from: "cerebral-perfusion",
      to: { domain: "cardiology", node: "heart-failure" },
      type: "shares-mechanism",
      label: "low forward flow",
      note: "Cerebral blood flow depends on cardiac output. Heart failure produces watershed-pattern hypoperfusion; severe HF can cause cardiogenic encephalopathy. The mechanism is the same as cardiorenal syndrome, applied to the brain." }
  ]
};
