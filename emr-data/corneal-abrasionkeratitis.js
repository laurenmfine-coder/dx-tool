// Virtual EMR Case: Corneal Abrasion/Keratitis
// Variant: corneal-abrasionkeratitis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Priya Mehta",
  "patientHPI": "I'm here for my yearly visit and everything's been going well. I wear contacts every day and sometimes fall asleep in them even though I know I shouldn't - my eye doctor always tells me not to do that. My seasonal allergies bother my eyes sometimes but the drops I buy at the pharmacy help with that.",
    "dob": "09/02/1996",
    "age": 28,
    "sex": "Female",
    "mrn": "RDX-2025-57418",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO",
    "pcp": "Dr. Lauren Fischer, MD",
    "pharmacy": "Walgreens — 2600 Weston Rd, Weston, FL",
    "language": "English, Hindi",
    "race": "Asian (South Asian)",
    "address": "331 Peachtree Rd, Memphis, TN 38107",
    "phone": "(954) 555-4519",
    "email": "p.mehta96@email.com",
    "emergencyContact": {
      "name": "Vikram Mehta (Father)",
      "phone": "(954) 555-4535"
    }
  },
  "problems": [
    {
      "problem": "Myopia — High",
      "icd": "H52.13",
      "onset": "2008",
      "status": "Active",
      "notes": "-6.50 OU; daily contact lens wearer (soft, monthly replacement); extended wear on occasion"
    },
    {
      "problem": "Contact Lens Overwear — History",
      "icd": "H18.829",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Corneal neovascularization noted by optometrist 2022; counseled on proper wear and removal schedule"
    },
    {
      "problem": "Seasonal Allergic Conjunctivitis",
      "icd": "H10.45",
      "onset": "2015",
      "status": "Chronic",
      "notes": "Bilateral; spring and fall; uses antihistamine drops PRN"
    }
  ],
  "medications": [
    {
      "name": "Ketotifen 0.025% ophthalmic drops BID PRN",
      "sig": "Instill 1 drop in each eye twice daily as needed for allergic eye symptoms",
      "prescriber": "Dr. Fischer",
      "start": "04/2020",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Oral Contraceptive (Levonorgestrel-Ethinyl Estradiol)",
      "sig": "Take 1 tablet by mouth daily at same time each day",
      "prescriber": "Dr. Fischer",
      "start": "01/2018",
      "refills": 6,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Erythromycin",
      "type": "Drug",
      "reaction": "GI upset — severe nausea and cramping",
      "severity": "Moderate",
      "verified": "Patient-reported"
    },
    {
      "allergen": "Dust mites",
      "type": "Environmental",
      "reaction": "Rhinitis, eye itching",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/22/2024",
      "bp": "110/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "125 lbs",
      "ht": "5'3\"",
      "bmi": 22.1,
      "setting": "PCP Office"
    },
    {
      "date": "04/10/2024",
      "bp": "108/66",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "123 lbs",
      "ht": "5'3\"",
      "bmi": 21.8,
      "setting": "PCP Office"
    },
    {
      "date": "10/18/2023",
      "bp": "112/70",
      "hr": 68,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "122 lbs",
      "ht": "5'3\"",
      "bmi": 21.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Lauren Fischer, MD",
      "cc": "Annual wellness exam",
      "hpi": "28-year-old female for annual wellness visit. No acute complaints. Wears monthly soft contact lenses daily, sometimes sleeps in them despite counseling. Allergic conjunctivitis well-managed with OTC ketotifen. OCP tolerated well. Exercises regularly. Denies headaches, vision changes, or eye pain.",
      "exam": "General: NAD, well-appearing. HEENT: PERRL, EOMI, conjunctivae clear bilaterally, contact lenses in place. Neck: Supple. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT.",
      "assessment": "1. Annual wellness — healthy young female\n2. High myopia with contact lens use — counseled again on proper wear hygiene, no sleeping in lenses\n3. Allergic conjunctivitis — controlled",
      "plan": "1. Continue current medications\n2. Reinforced: remove contact lenses nightly, hand hygiene before handling, replace per schedule\n3. Optometry follow-up for annual contact lens evaluation\n4. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "04/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Lauren Fischer, MD",
      "cc": "Eye redness and itching — seasonal allergies",
      "hpi": "28-year-old female presents with bilateral eye itching, tearing, and mild redness x 5 days. Consistent with prior spring allergy episodes. No pain, discharge, photophobia, or vision changes. Using ketotifen drops with partial relief.",
      "exam": "General: NAD. Eyes: Bilateral mild conjunctival injection, chemosis, no discharge, corneas clear by penlight exam, pupils reactive.",
      "assessment": "1. Seasonal allergic conjunctivitis — bilateral, mild\n2. No concerning features for infectious etiology",
      "plan": "1. Continue ketotifen drops BID\n2. Add olopatadine 0.1% if inadequate response\n3. Cool compresses\n4. Avoid rubbing eyes especially with contacts in\n5. Return if purulent discharge, pain, vision change"
    }
  ],
  "labs": [
    {
      "date": "10/22/2024",
      "time": "09:00",
      "orderedBy": "Dr. Lauren Fischer, MD",
      "collected": "10/22/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-102220",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "41.0", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "245", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "84", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "12", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.7", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-258",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-688",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2014",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Myopia, T2DM, alive at 56",
    "Father: HTN, glaucoma (open-angle), alive at 58",
    "Sister: Myopia, asthma, age 24",
    "Maternal grandmother: Cataracts, T2DM, deceased at 78"
  ],
  "socialHistory": [
    ["Occupation", "Accountant — office work; extensive screen time"],
    ["Marital", "Single, lives with roommate"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 1-2 drinks on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Running 3x/week; Pilates 2x/week"],
    ["Housing", "Apartment with roommate"],
    ["Safety", "Denies IPV; seatbelt"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "corneal-abrasionkeratitis",
    "diagnosis": "Contact Lens-Related Bacterial Keratitis (Pseudomonas Suspected)",
    "acuity": 3,
    "presentation": "Eye Emergency",
    "category": "ophthalmologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Priya Mehta appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did eye emergency start?",
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
        "onset": "'The symptoms started I'm here for my yearly visit and everything's been going well.'",
        "character": "'It's eye emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Contact Lens-Related Bacterial Keratitis.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Ketotifen 0.025% ophthalmic drops BID PRN; Oral Contraceptive (Levonorgestrel-Ethinyl Estradiol).'",
        "allergies": "'My allergies are Erythromycin, Dust mites.'",
        "family": "Mother: Myopia, T2DM, alive at 56  Father: HTN, glaucoma (open-angle), alive at 58  Sister: Myopia, asthma, age 24",
        "social": "Occupation: Accountant \u2014 office work; extensive screen time  Marital: Single, lives with roommate  Tobacco: Never smoker  Alcohol: Social, 1-2 drinks on weekends  Drugs: Denies"
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
        "General appearance and level of distress": "Clinical finding consistent with Contact Lens-Related Bacterial Keratitis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Contact Lens-Related Bacterial Keratitis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Contact Lens-Related Bacterial Keratitis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Contact Lens-Related Bacterial Keratitis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Contact Lens-Related Bacterial Keratitis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Contact Lens-Related Bacterial Keratitis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Contact Lens-Related Bacterial Keratitis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Contact Lens-Related Bacterial Keratitis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Contact Lens-Related Bacterial Keratitis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Contact Lens-Related Bacterial Keratitis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Contact Lens-Related Bacterial Keratitis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Contact Lens-Related Bacterial Keratitis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Priya Mehta's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Contact Lens-Related Bacterial Keratitis (Pseudomonas Suspected). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
