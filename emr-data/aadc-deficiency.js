
window.EMR_DATA = {
  "patient": {
    "name": "David Kim",
    "dob": "06/25/2013",
    "age": 12,
    "sex": "Male",
    "mrn": "RDX-2025-63055",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Infant",
    "race": "Asian",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-8271",
    "email": "davidkim@email.com",
    "emergencyContact": {
      "name": "Nicole Okafor (Family)",
      "phone": "(954) 555-3927"
    }
  },
  "problems": [
    {
      "problem": "AADC deficiency \u2014 confirmed on enzyme assay",
      "icd": "E70.89",
      "onset": "2024",
      "status": "Active",
      "notes": "DDC gene mutation confirmed. Urine vanillylactic acid elevated; HVA and 5-HIAA low."
    },
    {
      "problem": "Oculogyric crises \u2014 episodic upward eye deviation",
      "icd": "H51.8",
      "onset": "2024",
      "status": "Active",
      "notes": "Triggered by stimulation or fever. Lasts minutes to hours. Hallmark of AADC deficiency."
    },
    {
      "problem": "Hypotonia \u2014 severe axial and appendicular",
      "icd": "P94.2",
      "onset": "Birth",
      "status": "Active",
      "notes": "Unable to achieve head control. Feeding difficulties requiring NG tube supplementation."
    },
    {
      "problem": "Autonomic instability \u2014 ptosis, mottling, temperature dysregulation",
      "icd": "G90.9",
      "onset": "Birth",
      "status": "Active",
      "notes": "Dopamine and serotonin deficiency affects autonomic nervous system globally."
    }
  ],
  "medications": [
    {
      "name": "Pyridoxine (B6) 30mg/kg/day divided TID",
      "sig": "Cofactor for AADC enzyme \u2014 partial activity enhancement in some mutations",
      "prescriber": "Neurology/Genetics",
      "start": "2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Selegiline 0.1mg/kg/day (MAO-B inhibitor)",
      "sig": "Inhibits dopamine breakdown \u2014 compensates for reduced synthesis",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Pramipexole 0.05mg/kg/day (dopamine agonist)",
      "sig": "Direct dopamine receptor stimulation \u2014 bypasses synthesis defect",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "No known drug allergies",
      "type": "Drug",
      "reaction": "None",
      "severity": "N/A",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/18/2024",
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "103 lbs",
      "ht": "5'10\"",
      "bmi": 14.8,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "103 lbs",
      "ht": "5'10\"",
      "bmi": 14.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "103 lbs",
      "ht": "5'10\"",
      "bmi": 14.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Infant",
      "assessment": "Working diagnosis: Infant",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "01/2024",
      "panel": "AADC Diagnostic Panel",
      "results": [
        {
          "test": "Plasma AADC enzyme activity",
          "value": "2",
          "unit": "nmol/hr/mL",
          "ref": "5-25",
          "flag": "L"
        },
        {
          "test": "CSF HVA (homovanillic acid)",
          "value": "18",
          "unit": "nmol/L",
          "ref": "90-250",
          "flag": "L"
        },
        {
          "test": "CSF 5-HIAA",
          "value": "12",
          "unit": "nmol/L",
          "ref": "80-250",
          "flag": "L"
        },
        {
          "test": "Urine vanillylactic acid",
          "value": "Elevated",
          "unit": "",
          "ref": "Undetectable",
          "flag": "H"
        },
        {
          "test": "CSF 3-O-methyldopa",
          "value": "Elevated",
          "unit": "",
          "ref": "Undetectable",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/2024",
      "study": "MRI Brain",
      "indication": "Hypotonia and developmental delay workup",
      "findings": "No structural abnormality. Cerebellum normal.",
      "impression": "Normal MRI \u2014 structural causes of hypotonia excluded. Supports metabolic/enzymatic diagnosis."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5018K",
      "site": "Left deltoid"
    }
  ],
  "familyHistory": [
    {
      "relation": "Father",
      "condition": "Hypertension",
      "age": "58"
    },
    {
      "relation": "Mother",
      "condition": "Type 2 diabetes",
      "age": "55"
    }
  ],
  "socialHistory": {
    "smoking": "Never smoker",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "aadc-deficiency",
    "diagnosis": "AADC Deficiency \u2014 Aromatic L-Amino Acid Decarboxylase Deficiency, Infant with Movement Disorder and Oculogyric Crises",
    "acuity": 2,
    "presentation": "Infant",
    "category": "pediatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with infant. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did this start?",
      "Has it been getting better, worse, or the same?",
      "What makes it better or worse?",
      "Rate the severity 0-10.",
      "Any associated symptoms?",
      "Any prior episodes?",
      "What medications are you taking?",
      "Any allergies?",
      "Any relevant family history?",
      "Any recent travel or sick contacts?",
      "Any prior surgeries or hospitalizations?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this pediatric presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular exam",
      "Pulmonary exam",
      "Abdominal exam",
      "Neurological exam",
      "Skin exam",
      "Musculoskeletal exam"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "AADC deficiency \u2014 oculogyric crises + hypotonia + low CSF HVA/5-HIAA (correct)",
      "Cerebral palsy \u2014 normal MRI excludes structural cause",
      "Spinal muscular atrophy \u2014 no oculogyric crises; EMG/genetic testing differs",
      "Mitochondrial disease \u2014 different metabolic profile",
      "Dopamine transporter deficiency (SLC6A3) \u2014 similar phenotype, different CSF profile",
      "Infantile Parkinsonism-dystonia \u2014 related disorder, differentiated by enzyme assay"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Infant. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: AADC deficiency. Key learning: (1) AADC converts L-DOPA \u2192 dopamine AND 5-HTP \u2192 serotonin. Deficiency = combined dopaminergic AND serotonergic failure \u2014 explains oculogyric crises, autonomic instability, and hypotonia. (2) CSF pattern is diagnostic: low HVA (dopamine metabolite), low 5-HIAA (serotonin metabolite), elevated 3-O-methyldopa (L-DOPA backs up upstream). Plasma enzyme activity confirms. (3) Oculogyric crises are pathognomonic \u2014 episodic sustained upward or lateral eye deviation, often with neck extension. In any infant with hypotonia + OGC, AADC deficiency must be excluded. (4) Treatment hierarchy: pyridoxine (cofactor) \u2192 MAO-B inhibitors \u2192 dopamine agonists \u2192 gene therapy (AAV2-DDC, approved in some countries). (5) Prognosis with gene therapy is dramatically improving \u2014 early diagnosis is critical for neurodevelopmental outcome."
    }
  }
};
