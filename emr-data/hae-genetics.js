
window.EMR_DATA = {
  "patient": {
    "name": "Elena Rodriguez",
    "dob": "06/10/1960",
    "age": 65,
    "sex": "Female",
    "mrn": "RDX-2025-23660",
    "pronouns": "She/Her",
    "insurance": "Medicaid",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Recurrent Swelling",
    "race": "American Indian or Alaska Native",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-6121",
    "email": "elenarod@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-3931"
    }
  },
  "problems": [
    {
      "problem": "Hereditary angioedema Type I \u2014 C1-INH deficiency",
      "icd": "D84.1",
      "onset": "2024",
      "status": "Active",
      "notes": "C4 undetectable, C1-INH level 18% of normal \u2014 SERPING1 mutation confirmed. Father had 'unknown abdominal condition.'"
    },
    {
      "problem": "Recurrent facial angioedema without urticaria",
      "icd": "T78.3XXA",
      "onset": "2021",
      "status": "Active",
      "notes": "Three prior attacks \u2014 first trigger identified was dental extraction 3 years ago"
    },
    {
      "problem": "Family screening needed \u2014 autosomal dominant inheritance",
      "icd": "Z82.8",
      "onset": "2024",
      "status": "Active",
      "notes": "50% risk to first-degree relatives. Father's 'abdominal condition' was likely HAE attacks."
    }
  ],
  "medications": [
    {
      "name": "Lanadelumab (Takhzyro) 300mg SQ q4 weeks \u2014 prophylaxis",
      "sig": "Subcutaneous injection monthly \u2014 plasma kallikrein inhibitor, best-in-class for HAE prophylaxis",
      "prescriber": "Allergy/Hematology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Icatibant 30mg SQ self-injection kit \u2014 acute attacks",
      "sig": "Patient self-injectable \u2014 2 doses at home for any attack. Use immediately at symptom onset.",
      "prescriber": "Allergy",
      "start": "11/2024",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "C1-INH concentrate (Berinert) 20 units/kg IV \u2014 acute attacks (hospital)",
      "sig": "IV for acute attacks requiring hospital treatment",
      "prescriber": "Allergy",
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
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "77 lbs",
      "ht": "5'7\"",
      "bmi": 12.1,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "77 lbs",
      "ht": "5'7\"",
      "bmi": 12.1,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "77 lbs",
      "ht": "5'7\"",
      "bmi": 12.1,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Recurrent Swelling",
      "assessment": "Working diagnosis: Recurrent Swelling",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "HAE Type I Diagnostic Panel",
      "results": [
        {
          "test": "C4 complement",
          "value": "<1",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": "L"
        },
        {
          "test": "C1q complement",
          "value": "Normal \u2014 16 mg/dL",
          "unit": "mg/dL",
          "ref": "14-22",
          "flag": ""
        },
        {
          "test": "C1-INH level",
          "value": "18",
          "unit": "% normal",
          "ref": ">50%",
          "flag": "L"
        },
        {
          "test": "C1-INH function",
          "value": "22",
          "unit": "%",
          "ref": ">68%",
          "flag": "L"
        },
        {
          "test": "SERPING1 gene sequencing",
          "value": "Pathogenic variant \u2014 c.1A>G p.Met1Val",
          "unit": "",
          "ref": "No pathogenic variant",
          "flag": "H"
        },
        {
          "test": "Tryptase",
          "value": "3.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V2925K",
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
    "caseId": "hae-genetics",
    "diagnosis": "Hereditary Angioedema Type I \u2014 C1-INH Deficiency, SERPING1 Mutation, Family Screening Required",
    "acuity": 2,
    "presentation": "Recurrent Swelling",
    "category": "allergy"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with recurrent swelling. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this allergy presentation.",
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
      "HAE Type I \u2014 SERPING1 mutation, C1-INH deficiency (correct)",
      "HAE Type II \u2014 C1-INH level normal but function low (level abnormal here = Type I)",
      "Acquired C1-INH deficiency \u2014 C1q would be LOW, no family history",
      "ACE inhibitor angioedema \u2014 patient not on ACE inhibitor",
      "Allergic angioedema \u2014 tryptase low, no urticaria with attacks",
      "HAE Type III (FXII mutation) \u2014 normal C4/C1-INH, X-linked, females"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Recurrent Swelling. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: HAE Type I \u2014 C1-INH deficiency. Key learning: (1) HAE types: Type I (85%) = LOW C1-INH level AND function. Type II (15%) = NORMAL C1-INH level, LOW function (dysfunctional protein). Both: C4 always LOW (best screening test, consumed by unregulated complement). C1q: NORMAL in HAE (unlike acquired C1-INH deficiency). (2) SERPING1 gene: codes for C1-esterase inhibitor. Autosomal dominant \u2014 50% penetrance risk to first-degree relatives. Father's 'mysterious abdominal disease' is almost certainly undiagnosed HAE \u2014 family cascade genetic testing is urgent. (3) Pathophysiology: C1-INH also regulates plasma kallikrein \u2192 factor XIIa \u2192 bradykinin production. C1-INH deficiency \u2192 unregulated bradykinin \u2192 angioedema. Same as ACE angioedema mechanism but genetic not drug-induced. (4) Best prophylaxis 2024: lanadelumab (Takhzyro) = subcutaneous kallikrein inhibitor q2-4 weeks \u2192 95% reduction in attack frequency. Best evidence for prevention. (5) Emergency card: every HAE patient should carry a medical alert card and have icatibant or C1-INH concentrate available \u2014 any emergency procedure (dentistry, surgery, intubation) can trigger laryngeal attack. Laryngeal HAE is 30% of untreated fatalities."
    }
  }
};
