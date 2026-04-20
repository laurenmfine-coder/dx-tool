
window.EMR_DATA = {
  "patient": {
    "name": "Cleo",
    "dob": "04/24/2013",
    "age": 12,
    "sex": "Male (neutered)",
    "species": "Domestic Shorthair Cat",
    "mrn": "RDX-2025-16613",
    "pronouns": "They/Them",
    "insurance": "Owner Pay \u2014 No Insurance",
    "pcp": "Dr. James Rodriguez, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Elevated Heart Rate",
    "race": "Species: Domestic Shorthair Cat",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025 (Owner: Sarah Kim)",
    "phone": "(954) 555-7028",
    "email": "cleoowner@email.com",
    "emergencyContact": {
      "name": "Sarah Kim (Owner)",
      "phone": "(954) 555-3930"
    }
  },
  "problems": [
    {
      "problem": "Hyperthyroidism \u2014 domestic shorthair cat, 14 years",
      "icd": "E05.90",
      "onset": "2024",
      "status": "Active",
      "notes": "T4 12.8 \u03bcg/dL (severely elevated), weight loss 18% over 4 months despite good appetite"
    },
    {
      "problem": "Hypertension \u2014 secondary to hyperthyroidism",
      "icd": "I10",
      "onset": "2024",
      "status": "Active",
      "notes": "BP 198/140 \u2014 systolic >200 = retinal detachment risk. Treat simultaneously."
    },
    {
      "problem": "Cardiac changes \u2014 hyperthyroid cardiomyopathy",
      "icd": "I43",
      "onset": "2024",
      "status": "Active",
      "notes": "Gallop rhythm, cardiac hypertrophy on echo \u2014 hyperthyroid cardiomyopathy, may partially reverse with treatment"
    }
  ],
  "medications": [
    {
      "name": "Methimazole 2.5mg PO BID \u2014 start low",
      "sig": "Give orally twice daily \u2014 antithyroid drug. Recheck T4 in 2-4 weeks.",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Amlodipine 0.625mg PO daily \u2014 antihypertensive",
      "sig": "Give orally once daily \u2014 calcium channel blocker, first-line for feline hypertension",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Atenolol 6.25mg PO q12h \u2014 heart rate control",
      "sig": "Give orally twice daily \u2014 beta-blocker for cardiac protection",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 2,
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
      "bp": "N/A",
      "hr": 220,
      "rr": 40,
      "temp": "104.2\u00b0F",
      "spo2": "95%",
      "wt": "4.2 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Hospital"
    },
    {
      "date": "09/10/2024",
      "bp": "N/A",
      "hr": 185,
      "rr": 28,
      "temp": "101.5\u00b0F",
      "spo2": "99%",
      "wt": "4.6 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Clinic"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Weight Loss Despite Good Appetite",
      "assessment": "Working diagnosis: Weight Loss Despite Good Appetite",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Feline Hyperthyroidism Panel",
      "results": [
        {
          "test": "Total T4",
          "value": "12.8",
          "unit": "\u03bcg/dL",
          "ref": "0.8-4.0",
          "flag": "H"
        },
        {
          "test": "BUN",
          "value": "28",
          "unit": "mg/dL",
          "ref": "14-36",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.6-2.4",
          "flag": ""
        },
        {
          "test": "Phosphorus",
          "value": "3.8",
          "unit": "mg/dL",
          "ref": "3.1-7.5",
          "flag": ""
        },
        {
          "test": "ALT",
          "value": "88",
          "unit": "U/L",
          "ref": "12-130",
          "flag": ""
        },
        {
          "test": "Blood pressure (systolic)",
          "value": "198",
          "unit": "mmHg",
          "ref": "<160",
          "flag": "H"
        },
        {
          "test": "Heart rate",
          "value": "224",
          "unit": "bpm",
          "ref": "120-200",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Echocardiogram + Thoracic Radiographs",
      "indication": "Hyperthyroidism with gallop rhythm \u2014 cardiac evaluation",
      "findings": "Echo: Mild left ventricular hypertrophy, mild left atrial enlargement, EF preserved 68%. No pleural effusion. HR 224 bpm \u2014 compensated. Thoracic radiographs: mild cardiac enlargement, no pulmonary edema.",
      "impression": "Hyperthyroid cardiomyopathy, compensated. No heart failure currently. Expect partial regression of cardiac changes with hyperthyroidism treatment."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V7249K",
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
    "smoking": "Former smoker, quit 2020",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "vet-hyperthyroidism-cat",
    "diagnosis": "Feline Hyperthyroidism \u2014 T4 Markedly Elevated, Concurrent Hypertension and Cardiac Changes",
    "acuity": 3,
    "presentation": "Weight Loss Despite Good Appetite",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with weight loss despite good appetite. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this endocrine presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Species-appropriate physical exam",
      "Vital signs (species-normal ranges)",
      "Weight and body condition scoring",
      "Auscultation (heart, lungs, GI for ruminants)",
      "Abdominal palpation",
      "Mucous membrane color and CRT",
      "Neurological assessment",
      "Pain scoring (species-appropriate scale)"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Feline hyperthyroidism \u2014 methimazole + antihypertensive (correct)",
      "Chronic kidney disease \u2014 weight loss, elevated BUN (but T4 is diagnostic)",
      "Diabetes mellitus \u2014 weight loss despite appetite (T4 markedly elevated)",
      "Cardiac primary disease \u2014 cardiac changes secondary to hyperthyroidism",
      "Lymphoma \u2014 weight loss in older cat (T4 diagnostic)",
      "Hypertension from primary renal disease \u2014 hyperthyroidism causing both"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Weight Loss Despite Good Appetite. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: feline hyperthyroidism with secondary hypertension and cardiomyopathy. Key veterinary learning: (1) Feline hyperthyroidism = most common endocrine disease in older cats (>10 years). Caused by functional thyroid adenoma (benign). Classic: weight loss despite polyphagia, vomiting, diarrhea, hyperactivity, poor coat. One-health note: BPA (bisphenol-A) from can linings is one proposed environmental cause \u2014 affects thyroid receptor signaling. (2) Critical pre-treatment consideration: masked CKD. Hyperthyroidism increases GFR. Treating hyperthyroidism \u2192 GFR normalizes \u2192 previously masked CKD becomes apparent. ALWAYS recheck creatinine 3-4 weeks after starting methimazole \u2014 some cats have severe CKD 'unmasked.' If CKD severe, may need to balance hyperthyroid treatment vs. renal perfusion. (3) Treatment options: methimazole (reversible medical management \u2014 useful for staging), radioactive iodine I-131 (curative \u2014 gold standard), surgical thyroidectomy, Hill's y/d prescription diet (low iodine). Most referral-level practices recommend I-131. (4) Hypertension >200 mmHg systolic = end-organ damage risk: retinal detachment (blindness), hypertensive encephalopathy, cardiac damage. Treat WITH hyperthyroidism, not after. (5) Cardiac hypertrophy may reverse: 50-70% of hyperthyroid cardiomyopathy regresses with successful T4 normalization."
    }
  }
};
