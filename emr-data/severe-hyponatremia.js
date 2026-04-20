
window.EMR_DATA = {
  "patient": {
    "name": "Linda Petrowski",
    "patientHPI": "I've been feeling so confused and dizzy lately, and I keep feeling sick to my stomach. My family says I'm not making sense when I talk, and I feel unsteady when I try to walk around the house.",
    "dob": "03/18/1956",
    "age": "70",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-125847",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(620) 555-7044",
    "email": "linda.petrowski@email.com",
    "address": "1512 Iris Blvd, Denver, CO 80211",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
    "emergencyContact": {
      "name": "Thomas Petrowski",
      "phone": "(614) 555-3126",
      "relationship": "Partner"
    },
    "chiefComplaint": "Confusion, nausea, and unsteady gait",
    "diagnosis": "Severe Hyponatremia"
  },
  "problems": [
    {
      "problem": "Severe symptomatic hyponatremia \u2014 Na+ 118",
      "icd": "E87.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Confusion + nausea + gait instability \u2014 cerebral edema threshold approaching"
    },
    {
      "problem": "SIADH \u2014 SSRI-induced (sertraline)",
      "icd": "E22.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Urine osmolality >100, urine Na+ >40, volume euvolemic \u2014 SIADH criteria met"
    },
    {
      "problem": "Hyponatremia correction risk \u2014 osmotic demyelination syndrome",
      "icd": "G37.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Max correction: 8-10 mEq/L per 24h. Faster = osmotic demyelination (central pontine myelinolysis)."
    }
  ],
  "medications": [
    {
      "name": "3% NaCl 150mL IV over 20 min (for acute symptomatic correction)",
      "sig": "Hypertonic saline bolus \u2014 raise Na+ 4-6 mEq/L to relieve cerebral edema acutely",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "HOLD sertraline \u2014 contributing cause",
      "sig": "Discontinue SSRI until sodium corrected",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "HELD"
    },
    {
      "name": "Fluid restriction 500-800 mL/day (after acute correction)",
      "sig": "Primary SIADH treatment \u2014 free water restriction",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "138/78",
      "hr": "72",
      "rr": "16",
      "temp": "36.6\u00b0C",
      "spo2": "98%",
      "pain": "2/10",
      "bmi": "35",
      "weight": "75 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Confusion, nausea, and unsteady gait",
      "hpi": "Linda Petrowski is a 70-year-old female presenting with confusion, nausea, and unsteady gait. Past medical history includes Depression, Hypothyroidism, Hypertension, SIADH suspected. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Severe Hyponatremia \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Hyponatremia Workup",
      "results": [
        {
          "test": "Serum sodium",
          "value": "118",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Serum osmolality",
          "value": "245",
          "unit": "mOsm/kg",
          "ref": "285-295",
          "flag": "L"
        },
        {
          "test": "Urine osmolality",
          "value": "620",
          "unit": "mOsm/kg",
          "ref": "should be <100 if kidneys working normally",
          "flag": "H"
        },
        {
          "test": "Urine sodium",
          "value": "48",
          "unit": "mEq/L",
          "ref": "<20 if pre-renal",
          "flag": "H"
        },
        {
          "test": "TSH",
          "value": "2.1",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        },
        {
          "test": "Cortisol (AM)",
          "value": "18",
          "unit": "mcg/dL",
          "ref": "6-23",
          "flag": ""
        },
        {
          "test": "BUN",
          "value": "8",
          "unit": "mg/dL",
          "ref": "7-20",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Head Without Contrast",
      "indication": "Altered mental status with severe hyponatremia",
      "findings": "No acute intracranial hemorrhage or mass effect. No midline shift. Mild sulcal effacement consistent with cerebral edema from hyponatremia.",
      "impression": "Mild cerebral edema \u2014 consistent with acute hyponatremia. No structural cause for altered mental status."
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Water intake",
      "Drinks excessive water \u2014 4-5 liters daily"
    ],
    [
      "Living",
      "Assisted living facility"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Linda appears mildly confused and disoriented, speaking slowly with occasional word-finding difficulties. She seems cooperative but frustrated by her symptoms, frequently touching her head and appearing nauseated. Her responses may be somewhat delayed or incomplete due to her altered mental status.",
    "interviewQuestions": [
      "When did you first notice feeling confused or having trouble thinking clearly?",
      "Can you describe what the confusion feels like - do you forget things or have trouble finding words?",
      "Tell me more about the nausea - when does it occur and how severe is it?",
      "Have you been vomiting or just feeling nauseated?",
      "Describe your unsteady gait - do you feel dizzy or like the room is spinning?",
      "How much water do you typically drink in a day?",
      "Have you had any changes in your urination patterns?",
      "Any headaches or changes in your vision?",
      "Have you had any recent medication changes or new prescriptions?",
      "Any muscle weakness, cramps, or twitching?",
      "Have you had any seizures or episodes of losing consciousness?",
      "Any recent infections, illnesses, or hospitalizations?",
      "Have family members or staff noticed changes in your behavior or personality?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble understanding what you're asking. Could you repeat that? My head feels so foggy right now.",
      "onset": "It's been getting worse over the past week or two. At first I just felt a little off, but now I feel confused most of the time and my family says I'm not making sense.",
      "character": "It's like my brain is in a fog. I have trouble finding the right words sometimes, and I feel like I'm moving through thick water. Everything seems slower.",
      "location": "The confusion is just everywhere in my head. The nausea is mostly in my stomach, and the unsteadiness affects my whole body when I try to walk.",
      "severity": "The confusion is probably a 7 out of 10 - it's really interfering with my daily activities. I can't concentrate on anything and feel unsafe walking alone.",
      "aggravating": "I think it might be worse in the morning when I first wake up. Moving around too quickly makes the nausea and unsteadiness worse.",
      "relieving": "Sitting still helps a little with the nausea and dizziness, but nothing really helps with the confusion. I just have to wait for clearer moments.",
      "associated": "I've been feeling weak and tired, and I think I've been urinating less than usual even though I drink a lot of water. No headaches or vision changes.",
      "denies": "No chest pain, shortness of breath, fever, or seizures. No recent falls or head injuries. No changes in bowel movements.",
      "history": "I've never had symptoms quite like this before. I've always been pretty sharp mentally until recently.",
      "medications": "SSRI (Escitalopram); Levothyroxine; HCTZ; Lisinopril",
      "allergies": "NKDA",
      "family": "Nothing really runs in my family that would cause this. My parents lived to old age without major problems like this.",
      "social": "I'm retired and live in assisted living. I've never smoked and don't drink alcohol. I do drink a lot of water - probably 4-5 liters a day because I'm always thirsty."
    },
    "examManeuvers": [
      "Mental status examination (orientation, attention, memory)",
      "Neurological assessment (cranial nerves, motor, sensory, reflexes)",
      "Gait and balance assessment",
      "Assessment of mucous membranes and skin turgor",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Assessment for edema",
      "Fundoscopic examination",
      "Assessment of muscle strength and tone"
    ],
    "examFindings": {
      "Mental status examination (orientation, attention, memory)": "Oriented to person and place but uncertain of date. Impaired attention and concentration. Short-term memory deficits present.",
      "Neurological assessment (cranial nerves, motor, sensory, reflexes)": "Cranial nerves intact. Mild generalized weakness. Reflexes diminished but symmetric. Sensory examination normal.",
      "Gait and balance assessment": "Unsteady gait with wide-based stance. Positive Romberg test. Difficulty with heel-to-toe walking.",
      "Assessment of mucous membranes and skin turgor": "Mucous membranes appear moist. Normal skin turgor without evidence of dehydration.",
      "Cardiovascular examination": "Regular rate and rhythm. No murmurs, gallops, or rubs. Normal jugular venous pressure.",
      "Pulmonary examination": "Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi.",
      "Abdominal examination": "Soft, non-tender, non-distended. Normal bowel sounds. No organomegaly.",
      "Assessment for edema": "No peripheral edema noted in extremities.",
      "Fundoscopic examination": "Normal optic discs without papilledema.",
      "Assessment of muscle strength and tone": "Mild generalized weakness, worse proximally. Normal muscle tone."
    },
    "ddxTargets": [
      "SIADH \u2014 SSRI-induced, Na+ 118 (correct)",
      "Psychogenic polydipsia \u2014 urine osmolality would be dilute (<100)",
      "Hypothyroidism \u2014 TSH normal",
      "Adrenal insufficiency \u2014 cortisol normal",
      "Heart failure hyponatremia \u2014 hypervolemic, not euvolemic",
      "Beer potomania \u2014 different history"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on age-related cognitive decline or dementia given the patient's age and assisted living residence, potentially missing acute metabolic causes",
      "prematureClosure": "Risk of stopping evaluation after noting depression and psychiatric medications without considering SSRI-induced SIADH as a cause of her neurological symptoms",
      "availabilityBias": "Recent cases of UTI-related delirium in elderly patients might bias toward infectious causes rather than considering metabolic etiologies"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities for altered mental status in an elderly patient. Before interviewing the patient, consider what specific historical details might help you differentiate between metabolic, infectious, and structural causes. Pay particular attention to any clues about fluid balance and medication effects.",
      "phase5": "Now that you've gathered history and physical findings, think about the constellation of confusion, nausea, and gait instability in the context of this patient's medications and excessive water intake. What laboratory studies would be most helpful to confirm your leading hypothesis? Consider how certain medications might predispose to electrolyte abnormalities.",
      "finalDebrief": "This case illustrates how SIADH can present with subtle neurological symptoms that might initially be attributed to age-related changes. The key was recognizing the triad of altered mental status, nausea, and unsteady gait in a patient taking an SSRI with excessive water intake. This highlights the importance of considering medication-induced metabolic disturbances, particularly in elderly patients on multiple drugs.",
      "final": "Diagnosis: severe SIADH, SSRI-induced, Na+ 118. Key MBS learning: (1) SIADH criteria: low serum osm + urine osm >100 (inappropriately concentrated) + urine Na+ >40 + euvolemia + normal thyroid/adrenal. All met here. (2) Why SSRI causes SIADH: serotonin receptor activation in hypothalamus stimulates ADH (vasopressin) release. ADH \u2192 aquaporin-2 insertion in collecting duct \u2192 water reabsorption \u2192 dilutional hyponatremia. This is a class effect of all SSRIs. (3) Osmotic demyelination syndrome (ODS): rapid correction of chronic hyponatremia \u2192 oligodendrocytes dehydrate faster than they can adapt \u2192 myelin sheath destruction. MAX 8-10 mEq/L per 24h. Correction of >12 mEq/24h = risk of central pontine myelinolysis: locked-in syndrome, quadriplegia, dysarthria appearing 2-6 days after over-correction. (4) Hypertonic saline 3%: ONLY for symptomatic patients (seizure, altered consciousness). Purpose: raise Na+ 4-6 mEq/L to relieve cerebral edema acutely, not to fully correct. (5) Correction formula: for each liter of 3% NaCl infused: Na+ rises approximately (513 - patient's Na+) / (total body water + 1). Calculate carefully, monitor q2h initially."
    }
  },
  "meta": {
    "diagnosis": "Severe Symptomatic Hyponatremia \u2014 SIADH from SSRIs, Na+ 118 with Altered Mental Status",
    "caseId": "severe-hyponatremia"
  }
};
