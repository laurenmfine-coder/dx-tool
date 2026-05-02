/* concept-maps/endocrinology.js
 *
 * Endocrinology domain. Three presentation-first hubs covering the
 * highest-yield clinical content in the existing puzzle library.
 * Endo has the most cross-domain reach of any domain authored so far:
 * thyroid disease bridges to cardiac arrhythmia and HF; DKA bridges
 * to hyperkalemia ECG findings; adrenal crisis bridges to refractory
 * septic shock; hypercalcemia bridges to delirium.
 *
 * Authoring rule: every node references existing puzzles. Mechanism
 * nodes are explicitly cross-cutting; their edges reach into multiple
 * other domains.
 */

window.RDX_CONCEPT_MAPS = window.RDX_CONCEPT_MAPS || {};
window.RDX_CONCEPT_MAPS["endocrinology"] = {
  domain: "endocrinology",
  domainLabel: "Endocrinology",
  defaultFocus: "hyperglycemic-emergency",
  searchAliases: {
    "endocrinology": "hyperglycemic-emergency",
    "endo": "hyperglycemic-emergency",
    "diabetes": "hyperglycemic-emergency",
    "dka": "hyperglycemic-emergency",
    "diabetic ketoacidosis": "hyperglycemic-emergency",
    "ketoacidosis": "hyperglycemic-emergency",
    "hyperglycemia": "hyperglycemic-emergency",
    "insulin": "dka-potassium",
    "potassium dka": "dka-potassium",
    "k+ paradox": "dka-potassium",
    "anion gap": "dka-potassium",
    "new onset diabetes": "dka-pediatric",
    "type 1 diabetes": "dka-pediatric",
    "pediatric dka": "dka-pediatric",
    "insulin pump": "dka-pump-failure",
    "pump failure": "dka-pump-failure",
    "thyroid": "thyroid-disease",
    "thyroid storm": "thyroid-disease",
    "hyperthyroid": "graves-disease",
    "hyperthyroidism": "graves-disease",
    "graves": "graves-disease",
    "graves disease": "graves-disease",
    "tsh suppressed": "graves-disease",
    "lid lag": "graves-disease",
    "proptosis": "graves-disease",
    "hypothyroid": "hypothyroidism-treatment",
    "hypothyroidism": "hypothyroidism-treatment",
    "levothyroxine": "hypothyroidism-treatment",
    "hashimoto": "hypothyroidism-treatment",
    "depression mimic": "hypothyroidism-mimic",
    "fatigue weight loss": "hypothyroidism-mimic",
    "adrenal": "adrenal-and-electrolyte",
    "adrenal crisis": "adrenal-crisis",
    "adrenal insufficiency": "adrenal-crisis",
    "addison": "adrenal-crisis",
    "addison disease": "adrenal-crisis",
    "hypercalcemia": "hypercalcemia-malignancy",
    "high calcium": "hypercalcemia-malignancy",
    "pthrp": "hypercalcemia-malignancy",
    "stones bones groans": "hypercalcemia-malignancy",
    "cortisol": "cortisol-physiology",
    "steroid withdrawal": "cortisol-physiology",
    "thyroid cardiac": "thyroid-cardiac-axis"
  },
  nodes: [
    // ── Hubs ────────────────────────────────────────────────────────
    { id: "hyperglycemic-emergency",
      label: "Hyperglycemic emergency (DKA spectrum)",
      kind: "hub",
      summary: "Presentation-first hub for the patient with hyperglycemia, anion-gap acidosis, and ketones. The decision tree: insulin, fluids, electrolytes (especially K+), and the source of the precipitant. The K+ paradox is the canonical teaching that distinguishes thoughtful management from cookbook protocol.",
      content: "Puzzles: #96, #98, #111, #123" },
    { id: "thyroid-disease",
      label: "Thyroid disease",
      kind: "hub",
      summary: "Hub for thyroid pathology, both hyper and hypo. Recognition is one challenge (atypical presentations mimic depression, anxiety, dementia); cardiac and skeletal complications are another. The TSH plus free T4 is the discriminator that organizes the differential.",
      content: "Puzzles: #21, #36, #82, #103, #107" },
    { id: "adrenal-and-electrolyte",
      label: "Adrenal and electrolyte derangement",
      kind: "hub",
      summary: "Hub for adrenal pathology and the electrolyte abnormalities that signal endocrine emergencies. Adrenal crisis presents as refractory hypotension; hypercalcemia presents as altered mental status. Both are easy to miss when anchoring on the presenting symptom rather than checking labs.",
      content: "Puzzles: #112, #114" },

    // ── DKA cluster ─────────────────────────────────────────────────
    { id: "dka-potassium",
      label: "DKA potassium paradox",
      kind: "concept",
      summary: "The serum K+ in DKA is high or normal at presentation despite total-body depletion (insulin deficiency drives K+ out of cells; acidosis exchanges K+ for H+). Insulin therapy reverses both shifts and unmasks profound hypokalemia. Hold insulin if K+ below 3.3; add KCl to fluids when K+ is 3.3-5.3; recheck frequently.",
      content: "Puzzles: #96, #111" },
    { id: "dka-pediatric",
      label: "New-onset DKA in pediatric T1DM",
      kind: "concept",
      summary: "DKA as the presenting feature of new T1DM in a child requires the same management principles plus extra attention to cerebral edema risk: slower fluid resuscitation, careful sodium correction, watch for declining mental status during therapy.",
      content: "Puzzles: #98" },
    { id: "dka-pump-failure",
      label: "DKA from insulin pump failure",
      kind: "concept",
      summary: "Pump-treated T1DM patients can develop DKA rapidly when delivery fails (catheter occlusion, set displacement, depleted reservoir). Glucose is sometimes only modestly elevated because rapid-acting analog washes out quickly. Anion gap and ketones drive the diagnosis, not the glucose number.",
      content: "Puzzles: #123" },

    // ── Thyroid cluster ─────────────────────────────────────────────
    { id: "graves-disease",
      label: "Graves disease",
      kind: "concept",
      summary: "Autoimmune hyperthyroidism with TSH receptor antibodies. Distinguished from other hyperthyroid causes by lid retraction, proptosis (Graves ophthalmopathy), pretibial myxedema, and diffuse goiter. Treatment options: methimazole, radioactive iodine, thyroidectomy.",
      content: "Puzzles: #21, #36, #103" },
    { id: "hypothyroidism-treatment",
      label: "Hypothyroidism treatment dynamics",
      kind: "concept",
      summary: "Levothyroxine takes 4-6 weeks to reach steady state; checking TSH at 2 weeks shows incomplete normalization. Patient experience often lags lab improvement. Adherence is a frequent issue; absorption changes with food and other meds (calcium, iron, PPIs).",
      content: "Puzzles: #107" },
    { id: "hypothyroidism-mimic",
      label: "Hypothyroidism mimicking depression",
      kind: "concept",
      summary: "Fatigue, weight changes, cognitive slowing, and cold intolerance overlap with depression. The anchoring trap: increasing antidepressants when the underlying problem is endocrine. TSH is a low-cost screen with high yield in atypical or treatment-resistant depression.",
      content: "Puzzles: #82" },

    // ── Adrenal/electrolyte cluster ─────────────────────────────────
    { id: "hypercalcemia-malignancy",
      label: "Hypercalcemia of malignancy",
      kind: "concept",
      summary: "Calcium above 13 in a patient with malignancy. PTH suppressed, PTHrP elevated (paraneoplastic) or 1,25-vitamin D elevated (lymphoma). Presentation: stones, bones, groans, psychiatric overtones. Confusion and constipation often dominate. Aggressive saline, calcitonin for rapid effect, bisphosphonate for durable control.",
      content: "Puzzles: #112" },
    { id: "adrenal-crisis",
      label: "Adrenal crisis",
      kind: "concept",
      summary: "Refractory hypotension, hypoglycemia, hyponatremia, hyperkalemia in a patient with adrenal insufficiency or chronic steroid use who has stopped therapy or is under stress. Stress-dose hydrocortisone is the immediate treatment; high-dose IV steroids are not optional during the crisis.",
      content: "Puzzles: #114" },

    // ── Mechanism nodes (cross-cutting) ─────────────────────────────
    { id: "insulin-glucose-potassium",
      label: "Insulin, glucose, and potassium",
      kind: "mechanism",
      summary: "Bridge concept. Insulin drives K+ into cells along with glucose; the cell biology explains the DKA paradox, refeeding hypokalemia, and the use of insulin/dextrose for emergent hyperkalemia. Same physiology, three different clinical applications.",
      content: "Puzzles: #96, #111" },
    { id: "cortisol-physiology",
      label: "Cortisol physiology",
      kind: "mechanism",
      summary: "Bridge concept. Cortisol maintains vascular tone, glucose homeostasis, and the inflammatory response. Withdrawal (after chronic exogenous steroids) or absent production (Addisonian) presents with hypotension, hypoglycemia, hyperkalemia, hyponatremia. Stress response (illness, surgery) raises requirements; missing the increase precipitates crisis.",
      content: "Puzzles: #114" },
    { id: "thyroid-cardiac-axis",
      label: "Thyroid-cardiac axis",
      kind: "mechanism",
      summary: "Bridge to cardiology. Thyroid hormone increases heart rate, contractility, cardiac output, and beta-adrenergic sensitivity. Hyperthyroidism causes AFib (especially in older patients), high-output HF, and worsens existing CAD. Hypothyroidism produces bradycardia, pericardial effusion, and dilated cardiomyopathy. The cardiac exam is part of the thyroid workup.",
      content: "Puzzles: #21, #36, #103" }
  ],

  edges: [
    // ── DKA hub edges ───────────────────────────────────────────────
    { from: "hyperglycemic-emergency", to: "dka-potassium", type: "differential-pair",
      label: "K+ paradox",
      note: "The K+ paradox in DKA: serum K+ is high or normal at presentation but total-body K+ is depleted; insulin therapy unmasks profound hypokalemia. The teaching is to manage the K+ proactively, not reactively." },
    { from: "hyperglycemic-emergency", to: "dka-pediatric", type: "differential-pair",
      label: "new T1DM, cerebral edema",
      note: "DKA as the presentation of new T1DM in a child carries cerebral edema risk during therapy. Slower fluid resuscitation, careful sodium correction, watchful monitoring for declining mental status." },
    { from: "hyperglycemic-emergency", to: "dka-pump-failure", type: "differential-pair",
      label: "anion gap, not glucose",
      note: "Pump-treated T1DM can develop DKA with only modestly elevated glucose because the rapid-acting analog has washed out. The anion gap and ketones make the diagnosis, not the glucose number." },

    // DKA mechanism connection
    { from: "dka-potassium", to: "insulin-glucose-potassium", type: "shares-mechanism",
      label: "insulin drives K+ in",
      note: "The K+ shift on insulin therapy is the same mechanism used to treat hyperkalemia (insulin/dextrose protocol). Understanding the cell biology unifies what feels like two separate clinical scenarios." },

    // ── Thyroid hub edges ───────────────────────────────────────────
    { from: "thyroid-disease", to: "graves-disease", type: "differential-pair",
      label: "TSH-R Ab, eye signs",
      note: "Graves disease distinguishes from other causes of hyperthyroidism by autoimmune pathophysiology (TSH receptor antibodies) and ophthalmic findings (lid retraction, proptosis, ophthalmopathy)." },
    { from: "thyroid-disease", to: "hypothyroidism-treatment", type: "differential-pair",
      label: "TSH lag, adherence",
      note: "Levothyroxine has a 4-6 week steady-state lag; checking TSH at 2 weeks shows incomplete response. Adherence and absorption (calcium, iron, PPIs) are the two most common reasons for inadequate replacement." },
    { from: "thyroid-disease", to: "hypothyroidism-mimic", type: "differential-pair",
      label: "depression mimic",
      note: "Fatigue, cognitive slowing, weight changes overlap with depression. TSH is a low-cost screen with high yield in atypical or treatment-resistant depression. The trap is escalating antidepressants when the diagnosis is endocrine." },

    // Thyroid mechanism connections
    { from: "graves-disease", to: "thyroid-cardiac-axis", type: "shares-mechanism",
      label: "T3 and contractility",
      note: "Hyperthyroidism increases heart rate, contractility, and beta-adrenergic sensitivity. Cardiac complications (AFib, high-output HF, worsening CAD) are part of the workup, not separate consultations." },
    { from: "hypothyroidism-treatment", to: "thyroid-cardiac-axis", type: "shares-mechanism",
      label: "bradycardia, effusion",
      note: "Hypothyroidism produces bradycardia, pericardial effusion, and (in severe cases) dilated cardiomyopathy. Lab improvement precedes cardiac improvement; both are part of the treatment timeline." },

    // ── Adrenal/electrolyte hub edges ───────────────────────────────
    { from: "adrenal-and-electrolyte", to: "adrenal-crisis", type: "differential-pair",
      label: "refractory hypotension",
      note: "Refractory hypotension that doesn't respond to fluids and pressors should prompt adrenal evaluation. Stress-dose hydrocortisone is the immediate treatment; the diagnosis can be confirmed later with random cortisol or stim testing." },
    { from: "adrenal-and-electrolyte", to: "hypercalcemia-malignancy", type: "differential-pair",
      label: "stones, bones, groans",
      note: "Confusion, polyuria, constipation, bone pain in a patient with malignancy should prompt calcium check. PTH suppressed with PTHrP elevated points to paraneoplastic mechanism; high-dose vitamin D points to lymphoma." },

    // Adrenal mechanism connection
    { from: "adrenal-crisis", to: "cortisol-physiology", type: "shares-mechanism",
      label: "tone, glucose, electrolytes",
      note: "Adrenal crisis is the clinical face of cortisol's physiologic roles: vascular tone (hypotension), glucose homeostasis (hypoglycemia), and aldosterone interaction (hyponatremia, hyperkalemia). Recognizing the constellation is the diagnostic skill." },

    // Cross-cluster within endo
    { from: "dka-pump-failure", to: "dka-potassium", type: "shares-mechanism",
      label: "same K+ rules apply",
      note: "Even when DKA presents with only modest hyperglycemia, the K+ management rules are the same: hold insulin if K+ below 3.3, add KCl to fluids in the 3.3-5.3 range, recheck frequently." },

    // ── Cross-domain edges ──────────────────────────────────────────

    // To cardiology: hyperthyroidism is a major cause of AFib
    { from: "graves-disease",
      to: { domain: "cardiology", node: "afib-anticoag" },
      type: "shares-mechanism",
      label: "hyperthyroid AFib",
      note: "Hyperthyroidism is one of the most common reversible causes of AFib, especially in older patients. Treating the thyroid disease can restore sinus rhythm; anticoagulation decisions in this AFib still follow CHA2DS2-VASc but the rate-control strategy differs." },

    // To cardiology: thyroid-cardiac mechanism connects to HF
    { from: "thyroid-cardiac-axis",
      to: { domain: "cardiology", node: "heart-failure" },
      type: "shares-mechanism",
      label: "high-output HF",
      note: "Hyperthyroidism produces high-output heart failure: cardiac output is elevated but tissue oxygen demand outstrips it. Treatment is treating the thyroid; standard HF therapies (beta blockade) are particularly useful here." },

    // To cardiology: DKA potassium connects to hyperkalemia ECG findings
    { from: "dka-potassium",
      to: { domain: "cardiology", node: "hyperkalemia-ecg" },
      type: "shares-mechanism",
      label: "ECG during correction",
      note: "Watch the ECG during DKA correction. Initial peaked T waves can precede the K+ being unmasked as low; later, hypokalemia can cause U waves and arrhythmias. The ECG tracks the K+ shift in real time." },

    // To cardiology: cortisol axis connects to HF (vasopressor support physiology)
    { from: "cortisol-physiology",
      to: { domain: "cardiology", node: "heart-failure" },
      type: "shares-mechanism",
      label: "vascular tone, BP",
      note: "Cortisol potentiates catecholamine action on vascular smooth muscle. Adrenal insufficiency presents as catecholamine-resistant hypotension; the same physiology underlies stress-dose steroid use in critically ill patients with shock." },

    // To neurology: DKA causes altered mental status
    { from: "dka-pump-failure",
      to: { domain: "neurology", node: "altered-mental-status" },
      type: "shares-presentation",
      label: "AMS in DKA",
      note: "Severe DKA presents with altered mental status; the differential at the bedside includes hyperosmolar state, uremia, hypoglycemia (from over-correction), and concurrent infection. Glucose, anion gap, and osmolality narrow it." },

    // To neurology: hypercalcemia presents as confusion
    { from: "hypercalcemia-malignancy",
      to: { domain: "neurology", node: "delirium-dementia" },
      type: "shares-presentation",
      label: "calcium-induced confusion",
      note: "Hypercalcemia causes acute confusion, especially calcium above 13. The presentation can be indistinguishable from primary delirium; the workup for new confusion in a malignancy patient must include calcium, not just infection screen." },

    // To ID: adrenal crisis can mimic and complicate septic shock
    { from: "adrenal-crisis",
      to: { domain: "infectious-disease", node: "septic-shock-with-adrenal" },
      type: "shares-mechanism",
      label: "refractory shock",
      note: "Septic shock that fails to respond to fluids and pressors should trigger evaluation for adrenal insufficiency, especially in patients on chronic steroids. Same final clinical picture, two different upstream causes; same treatment (stress-dose steroids) helps both." }
  ]
};
