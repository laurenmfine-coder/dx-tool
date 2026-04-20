
window.EMR_DATA = {
  "patient": {
    "name": "Alejandro Gutierrez",
    "patientHPI": "My family found me really confused and throwing up this morning, and I honestly don't remember much about what happened. I've been feeling more tired than usual lately and haven't been great about taking my insulin like I should.",
    "dob": "08/01/1998",
    "age": "28",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-909133",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(630) 555-9984",
    "email": "alejandro.gutierrez@email.com",
    "address": "6341 Peachtree Rd, Minneapolis, MN 55410",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Cynthia Gutierrez",
      "phone": "(713) 555-6327",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Found confused and vomiting by family",
    "diagnosis": "Diabetic Ketoacidosis"
  },
  "problems": [
    {
      "problem": "DKA \u2014 new-onset T1DM, severe (pH 7.18)",
      "icd": "E10.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Alex Kim, 19M \u2014 polyuria/polydipsia x3 weeks, vomiting x2 days. Glucose 524, pH 7.18, AG 28."
    },
    {
      "problem": "Severe dehydration \u2014 6-8L deficit estimated",
      "icd": "E86.0",
      "onset": "2024",
      "status": "Active",
      "notes": "HR 128, BP 98/62. Dry mucous membranes. Initial resuscitation with NS, then switch to 0.45% NaCl."
    },
    {
      "problem": "Hypokalemia risk \u2014 insulin and fluids will worsen K+",
      "icd": "E87.6",
      "onset": "2024",
      "status": "Active",
      "notes": "K+ 3.4 on arrival \u2014 must replace to \u22653.5 BEFORE starting insulin. Ongoing replacement required."
    }
  ],
  "medications": [
    {
      "name": "Normal saline 1L IV bolus, then 500mL/h x2h \u2014 resuscitation",
      "sig": "Restore intravascular volume first. Switch to 0.45% NaCl + 20mEq KCl at 250mL/h after hemodynamic stabilization.",
      "prescriber": "Medicine/Endocrinology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Potassium chloride 40mEq IV \u2014 before insulin",
      "sig": "MUST replace K+ to \u22653.5 before starting insulin. Insulin drives K+ into cells \u2014 severe hypokalemia causes fatal arrhythmia.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Regular insulin 0.1 units/kg/h IV infusion \u2014 after K+ \u22653.5",
      "sig": "Do NOT bolus unless pH <6.9. Continuous infusion. Target glucose drop 50-75 mg/dL/h.",
      "prescriber": "Endocrinology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 after K+ replacement"
    },
    {
      "name": "Dextrose 5% in 0.45% NaCl \u2014 add when glucose <250",
      "sig": "Switch IVF to D5 0.45NS when glucose drops below 250 \u2014 keeps insulin running while preventing hypoglycemia. The goal is anion gap closure, not glucose normalization.",
      "prescriber": "Endocrinology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 conditional"
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
      "bp": "98/62",
      "hr": "128",
      "rr": "32",
      "temp": "36.4\u00b0C",
      "spo2": "99%",
      "pain": "6/10",
      "bmi": "29",
      "weight": "60 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Found confused and vomiting by family",
      "hpi": "Alejandro Gutierrez is a 28-year-old male presenting with found confused and vomiting by family. Past medical history includes Type 1 Diabetes, Depression, Non-adherence to insulin. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Diabetic Ketoacidosis \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "DKA Panel \u2014 Initial",
      "results": [
        {
          "test": "Glucose",
          "value": "524",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "pH (venous)",
          "value": "7.18",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "L"
        },
        {
          "test": "Bicarbonate",
          "value": "8",
          "unit": "mEq/L",
          "ref": "22-26",
          "flag": "L"
        },
        {
          "test": "Anion gap",
          "value": "28",
          "unit": "mEq/L",
          "ref": "8-12",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "3.4",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "Beta-hydroxybutyrate",
          "value": "8.4",
          "unit": "mmol/L",
          "ref": "<0.6",
          "flag": "H"
        },
        {
          "test": "HbA1c",
          "value": "12.8",
          "unit": "%",
          "ref": "<5.7",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
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
    "Mother: Type 2 Diabetes",
    "Father: Hypertension"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Binge drinking on weekends"
    ],
    [
      "Insulin",
      "Admits to not taking insulin for 4 days \u2014 ran out and couldn't afford refill"
    ],
    [
      "Occupation",
      "Works two part-time jobs, no insurance"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Alejandro appears anxious and somewhat embarrassed about his non-adherence to insulin, speaking quietly and avoiding eye contact when discussing his financial struggles. He is cooperative but still recovering from confusion, occasionally needing questions repeated and showing mild cognitive sluggishness from recent DKA.",
    "interviewQuestions": [
      "Can you tell me more about when your family found you this morning?",
      "How long have you been without insulin?",
      "Have you been urinating more frequently than usual?",
      "Have you been drinking more water or feeling very thirsty?",
      "Have you had any abdominal pain?",
      "How has your breathing been - any shortness of breath?",
      "Have you had any chest pain?",
      "When did you last eat and what did you eat?",
      "Have you been sick with any infections recently?",
      "How has your mood been lately with your depression?",
      "Have you had episodes like this before?",
      "What prevented you from getting your insulin refilled?",
      "Have you been taking your sertraline regularly?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm still feeling a bit foggy. Can you ask that again?",
      "onset": "My sister found me around 8 AM this morning throwing up in the bathroom and I was really confused, couldn't remember where I was. She said I'd been vomiting for a while.",
      "character": "The vomiting just won't stop, and I feel incredibly weak and dizzy. My head feels foggy and I'm having trouble concentrating.",
      "location": "The nausea is mostly in my stomach, and I have this dull ache in my belly. No real pain shooting anywhere else.",
      "severity": "The confusion and vomiting are about an 8 out of 10 - it's really scary not being able to think clearly. The weakness is probably a 7.",
      "aggravating": "Trying to drink anything makes me throw up more. Moving around makes me feel more dizzy.",
      "relieving": "Nothing really helps. Lying still helps a little with the dizziness but the nausea is constant.",
      "associated": "I've been peeing constantly and drinking tons of water for the past few days. I've been really tired and weak. My breathing feels a bit heavy.",
      "denies": "No fever, no chest pain, no diarrhea, no recent infections that I know of.",
      "history": "I had something similar about two years ago when I ran out of insulin and ended up in the ER. They said something about ketones being high.",
      "medications": "Insulin Glargine; Insulin Lispro; Sertraline",
      "allergies": "NKDA",
      "family": "My mom has type 2 diabetes and my dad has high blood pressure. My mom actually helps me sometimes when I can't afford my insulin.",
      "social": "I work two part-time jobs - one at a restaurant and one doing delivery driving. No insurance right now. I don't smoke, but I do drink on weekends, sometimes pretty heavily. I ran out of insulin four days ago and couldn't afford the refill until I got paid."
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Vital signs assessment",
      "HEENT examination",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Neurological examination",
      "Skin examination",
      "Assessment for dehydration",
      "Kussmaul respirations assessment"
    ],
    "examFindings": {
      "General appearance and mental status": "Alert but mildly lethargic, appears dehydrated and ill-appearing, responds appropriately but with slight delay",
      "Vital signs assessment": "BP 98/62 (orthostatic), HR 128 regular, Temp 36.4\u00b0C, SpO2 99%, RR 24 with deep respirations",
      "HEENT examination": "Dry mucous membranes, sunken eyes, poor skin turgor, fruity odor on breath",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, weak peripheral pulses, capillary refill 3 seconds",
      "Pulmonary examination": "Deep, labored respirations (Kussmaul pattern), lungs clear to auscultation bilaterally",
      "Abdominal examination": "Soft, mild diffuse tenderness, no rebound or guarding, hypoactive bowel sounds",
      "Neurological examination": "Oriented x3 but sluggish responses, no focal deficits, reflexes intact but diminished",
      "Skin examination": "Poor turgor, warm and dry, no rashes or lesions",
      "Assessment for dehydration": "Severe dehydration evidenced by dry mucous membranes, poor skin turgor, orthostatic hypotension",
      "Kussmaul respirations assessment": "Deep, rapid respirations consistent with metabolic acidosis compensation"
    },
    "ddxTargets": [
      "DKA \u2014 new-onset T1DM (correct)",
      "HHS (hyperosmolar hyperglycemic state) \u2014 T2DM, older, no ketosis, glucose often >600",
      "Alcoholic ketoacidosis \u2014 history, glucose often normal or low, alcohol odor",
      "Starvation ketosis \u2014 mild, glucose normal/low, no acidosis",
      "SGLT-2 inhibitor euglycemic DKA \u2014 glucose often <250 despite DKA; not applicable here (new T1DM)",
      "Lactic acidosis \u2014 lactate elevated; DKA anion gap from ketones not lactate"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on gastroenteritis due to prominent vomiting and dehydration, missing the underlying metabolic crisis",
      "prematureClosure": "May stop at 'medication non-compliance' without fully appreciating the severity of DKA and need for immediate intervention",
      "availabilityBias": "Recent cases of viral gastroenteritis or alcohol-related illness may overshadow consideration of diabetic emergency"
    },
    "coachPrompts": {
      "phase2": "Looking at this 28-year-old with diabetes presenting with confusion and vomiting, what key historical elements would help you differentiate between the various causes of altered mental status in a diabetic patient? Think about what his medication non-adherence might lead to.",
      "phase5": "You've identified classic signs of severe dehydration and Kussmaul respirations in a non-adherent diabetic. How do these physical findings help narrow your differential? What's the pathophysiology behind the breathing pattern you observed?",
      "finalDebrief": "This case demonstrates how social determinants of health directly impact medical outcomes. The combination of insulin non-adherence, classic symptoms of polyuria and polydipsia, Kussmaul respirations, and altered mental status pointed clearly to DKA. How might you address both the acute medical crisis and the underlying access issues that led to this presentation?",
      "final": "Diagnosis: DKA, new-onset T1DM. Key learning: (1) DKA triad: glucose >250 + pH <7.30 + positive ketones. Severity: mild pH 7.25-7.30, moderate 7.00-7.25, severe <7.00. This patient: pH 7.18 = moderate-severe. (2) Potassium rule: NEVER start insulin until K+ \u22653.5. Insulin drives potassium into cells \u2192 serum K+ drops \u2192 fatal arrhythmia. Replace K+ to \u22653.5 before ANY insulin. Even in DKA with a normal or high K+ on admission, total body K+ is depleted \u2014 aggressive replacement ongoing. (3) Glucose vs anion gap: the treatment goal is ANION GAP CLOSURE, not glucose normalization. When glucose drops below 250, ADD dextrose to IVF and continue insulin \u2014 this keeps the insulin running to close the gap without causing hypoglycemia. (4) Cerebral edema: risk is higher in pediatric/young patients with DKA. Warning signs: headache, altered mental status, bradycardia during treatment. Prevent by avoiding overly rapid fluid correction or sodium drop. Mannitol 0.5-1g/kg IV if suspected. (5) Subcutaneous insulin transition: once AG closed + patient tolerating PO \u2192 overlap SC long-acting insulin with IV insulin by 1-2 hours before stopping drip (prevents rebound ketosis). Start basal-bolus regimen with endocrinology guidance."
    }
  },
  "meta": {
    "diagnosis": "Diabetic Ketoacidosis \u2014 New-Onset T1DM, Insulin Drip, Anion Gap Closure, Transition to Subcutaneous Protocol",
    "caseId": "dka-v1"
  }
};
