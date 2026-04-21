
window.EMR_DATA = {
  "patient": {
    "name": "Evelyn Chambers",
    "patientHPI": "I fell on my outstretched hand when I tripped on the sidewalk yesterday, and now my wrist is really swollen and painful - I can barely move it without sharp shooting pains.",
    "dob": "07/30/1952",
    "age": 72,
    "sex": "Female",
    "mrn": "RDX-2025-58316",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B with Medigap Plan F",
    "pcp": "Dr. David Park, MD",
    "pharmacy": "Publix Pharmacy \u2014 4900 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "1873 Foxglove Dr, Baltimore, MD 21210",
    "phone": "(954) 555-7248",
    "email": "e.chambers52@email.com",
    "emergencyContact": {
      "name": "Katherine Chambers (Daughter)",
      "phone": "(954) 555-7265"
    }
  },
  "problems": [
    {
      "problem": "Colles' fracture \u2014 distal radius, osteoporotic",
      "icd": "S52.501A",
      "onset": "2024",
      "status": "Active",
      "notes": "Dorothy Williams, 74F \u2014 FOOSH (fall on outstretched hand). Dinner-fork deformity right wrist, severe pain. X-ray: distal radius fracture with dorsal angulation and displacement \u2014 classic Colles' fracture. Osteoporotic bone."
    },
    {
      "problem": "Osteoporosis \u2014 fragility fracture trigger for workup",
      "icd": "M80.01XA",
      "onset": "2024",
      "status": "Active",
      "notes": "Fall from standing height causing wrist fracture = fragility fracture = osteoporosis by definition (regardless of DEXA result). Must start bisphosphonate and treat underlying osteoporosis to prevent hip fracture."
    },
    {
      "problem": "Median nerve \u2014 carpal tunnel compartment watch",
      "icd": "S52.501A",
      "onset": "2024",
      "status": "Active",
      "notes": "Distal radius fracture can compress median nerve in carpal tunnel \u2192 acute carpal tunnel syndrome. Assess sensation of thumb/index/middle fingers and thenar muscle strength before and after reduction."
    }
  ],
  "medications": [
    {
      "name": "Closed reduction + sugar-tong splint",
      "sig": "Hematoma block with lidocaine or procedural sedation. Longitudinal traction, ulnar deviation, and palmar flexion to reduce. Sugar-tong splint (not circumferential cast) allows swelling. Follow-up 1 week for cast or surgical referral.",
      "prescriber": "Emergency/Orthopedics",
      "start": "2024",
      "refills": 0,
      "status": "Procedure done"
    },
    {
      "name": "Alendronate 70mg weekly OR denosumab \u2014 osteoporosis treatment",
      "sig": "Fragility fracture = osteoporosis treatment indication regardless of DEXA. Bisphosphonate reduces subsequent fracture risk 50% at hip and spine. Start after fracture heals (or immediately if denosumab).",
      "prescriber": "PCP/Endocrinology",
      "start": "2024",
      "refills": 3,
      "status": "Initiating"
    },
    {
      "name": "Vitamin D 2000 IU daily + calcium 1200mg daily",
      "sig": "Optimizes bone health and fracture healing. Vitamin D deficiency is almost universal in osteoporotic fractures.",
      "prescriber": "PCP",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Severe nausea and vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/16/2024",
      "bp": "132/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "128 lbs",
      "ht": "5'3\"",
      "bmi": 22.7,
      "setting": "PCP Office"
    },
    {
      "date": "04/10/2024",
      "bp": "130/74",
      "hr": 70,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "130 lbs",
      "ht": "5'3\"",
      "bmi": 23.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/16/2024",
      "type": "Primary Care",
      "provider": "Dr. David Park, MD",
      "cc": "Follow-up: osteoporosis, HTN",
      "hpi": "72-year-old female with osteoporosis and prior T12 compression fracture for follow-up. On alendronate x 7 years \u2014 discussed drug holiday vs continuation; elected to continue given prior fragility fracture. Reports occasional mid-back pain at T12 level, improved from prior. Vitamin D level normalized. Has been walking regularly but reports unsteadiness on uneven surfaces. Fall risk screening: Timed Up and Go 14 seconds (borderline). Two near-falls in past 3 months \u2014 tripped on rug, caught herself on furniture.",
      "exam": "General: Thin elderly female, NAD, mild thoracic kyphosis. Spine: Tenderness over T12 spinous process mild. No new step-off. MSK: Gait mildly unsteady \u2014 narrow base, slight sway. Romberg borderline positive. Extremities: No edema.",
      "assessment": "1. Osteoporosis \u2014 on alendronate; discussing drug holiday at next visit\n2. Prior T12 compression fracture \u2014 stable\n3. Fall risk \u2014 increasing; near-falls reported\n4. HTN \u2014 controlled\n5. GERD \u2014 stable",
      "plan": "1. Continue alendronate \u2014 plan DEXA in 6 months\n2. Fall prevention: remove throw rugs, grab bars in bathroom, nightlights, wear supportive shoes\n3. Physical therapy referral for balance and strengthening\n4. Calcium/Vitamin D \u2014 continue\n5. IF FALL WITH HIP/WRIST/BACK PAIN: ED immediately \u2014 high fracture risk\n6. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Fragility Fracture Workup",
      "results": [
        {
          "test": "Vitamin D (25-OH)",
          "value": "16",
          "unit": "ng/mL",
          "ref": "30-100",
          "flag": "L"
        },
        {
          "test": "Calcium",
          "value": "9.2",
          "unit": "mg/dL",
          "ref": "8.5-10.5",
          "flag": ""
        },
        {
          "test": "PTH",
          "value": "68",
          "unit": "pg/mL",
          "ref": "15-65 (secondary hyperparathyroidism from Vit D deficiency)",
          "flag": "H"
        },
        {
          "test": "DEXA (ordered)",
          "value": "Pending \u2014 T-score to quantify osteoporosis",
          "unit": "",
          "ref": "T-score <-2.5 = osteoporosis",
          "flag": ""
        },
        {
          "test": "Median nerve \u2014 sensation",
          "value": "Intact \u2014 index/middle/thumb normal sensation",
          "unit": "",
          "ref": "Intact",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Right Wrist X-Ray AP and Lateral",
      "findings": "Distal radius fracture with dorsal angulation 25\u00b0 and 3mm shortening. Radial styloid fracture. No ulnar fracture. Volar cortex intact. Classic Colles' fracture pattern.",
      "impression": "Displaced Colles' fracture. Closed reduction indicated."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD092",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/16/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-680",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-042",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-310",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Osteoporosis, hip fracture at 78, deceased at 84",
    "Father: CAD, deceased at 70",
    "Sister: Osteopenia, alive at 68",
    "No family history of osteomalacia or metabolic bone disease"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired librarian"
    ],
    [
      "Marital",
      "Widowed (husband deceased 2018); lives alone"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Occasional glass of wine with dinner"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 20 min daily; tai chi 2x/week"
    ],
    [
      "Housing",
      "Single-story condominium; lives alone; daughter visits weekly"
    ],
    [
      "Safety",
      "Throw rugs removed; grab bars in bathroom; wears medic alert pendant"
    ],
    [
      "Advance Directive",
      "Living will on file; HCP: daughter Katherine Chambers; Full code"
    ]
  ],
  "meta": {
    "caseId": "fracture-pain",
    "diagnosis": "Distal Radius Fracture (Colles') \u2014 Osteoporotic, Elderly",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "orthopedic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Evelyn Chambers appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did musculoskeletal emergency start?",
      "Can you describe exactly how it started \u2014 sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history \u2014 any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
      "onset": "'The symptoms started I fell on my outstretched hand when I tripped on the sidewalk yesterday, and now.'",
      "character": "'It's musculoskeletal emergency \u2014 it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Distal Radius Fracture.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Alendronate 70mg weekly; Amlodipine 5mg daily; Omeprazole 20mg daily; Calcium Carbonate 600mg with Vitamin D 400 IU BID; Cholecalciferol 2000 IU daily.'",
      "allergies": "'My allergies are Codeine.'",
      "family": "Mother: Osteoporosis, hip fracture at 78, deceased at 84  Father: CAD, deceased at 70  Sister: Osteopenia, alive at 68",
      "social": "Occupation: Retired librarian  Marital: Widowed (husband deceased 2018); lives alone  Tobacco: Never smoker  Alcohol: Occasional glass of wine with dinner  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Vital signs review",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Extremity assessment",
      "Skin examination",
      "Targeted system examination"
    ],
    "examFindings": {
      "General appearance and level of distress": "Clinical finding consistent with Distal Radius Fracture. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Distal Radius Fracture. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Distal Radius Fracture. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Distal Radius Fracture. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Distal Radius Fracture. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Distal Radius Fracture. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Distal Radius Fracture. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Distal Radius Fracture. Document specifically what you observe."
    },
    "ddxTargets": [
      "Colles' fracture \u2014 osteoporotic (correct)",
      "Smith fracture \u2014 volar (palmar) angulation (opposite of Colles'); fall on back of hand",
      "Barton fracture \u2014 intra-articular; marginal fracture of distal radius; instability",
      "Scaphoid fracture \u2014 snuffbox tenderness; FOOSH; may not show on initial X-ray; risk of AVN if missed",
      "Distal ulnar fracture \u2014 associated Galeazzi injury (distal ulna fracture + DRUJ disruption); check ulna"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Distal Radius Fracture, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Distal Radius Fracture, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Distal Radius Fracture based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Evelyn Chambers's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Distal Radius Fracture (Colles' Fracture) \u2014 Osteoporotic Fragility Fracture After Fall. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: Colles' fracture (distal radius) on osteoporotic bone. Key learning: (1) Colles' fracture: distal radius fracture with DORSAL angulation and displacement (dinner-fork deformity). Smith fracture = VOLAR angulation (garden-spade deformity). Mechanism for both = FOOSH (fall on outstretched hand). (2) Fracture in elderly woman from low-energy fall = fragility fracture = osteoporosis treatment regardless of prior DEXA results. Every fragility fracture represents a failure to identify and treat osteoporosis early. (3) Median nerve assessment: carpal tunnel lies just volar to distal radius. Acute displacement can acutely compress the median nerve \u2192 thenar weakness, numbness of thumb/index/middle fingers. Check before AND after reduction. Post-reduction persistent deficit \u2192 urgent carpal tunnel release. (4) Splint not cast for acute fractures: sugar-tong splint accommodates swelling. Circumferential casting too early risks compartment syndrome. Convert to cast at 1 week. (5) Surgical indications for Colles': >20\u00b0 dorsal angulation after reduction, >3mm shortening, intra-articular involvement, open fracture, young active patient. External fixator or ORIF with volar locking plate."
    }
  }
};
