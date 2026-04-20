
window.EMR_DATA = {
  "patient": {
    "name": "Miguel Santos",
    "dob": "06/05/2013",
    "age": 12,
    "sex": "Male",
    "mrn": "RDX-2025-29654",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Fever 39.4",
    "race": "Asian",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-8760",
    "email": "miguelsa@email.com",
    "emergencyContact": {
      "name": "Lisa Chen (Family)",
      "phone": "(954) 555-4466"
    }
  },
  "problems": [
    {
      "problem": "Febrile illness \u2014 18-month-old, fever 39.4\u00b0C",
      "icd": "R50.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Fully vaccinated \u2014 pneumococcal, Hib, meningococcal dramatically reduce occult bacteremia risk"
    },
    {
      "problem": "Viral URI \u2014 probable etiology",
      "icd": "J06.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Rhinorrhea, mild pharyngeal injection, no source of bacterial infection identified"
    },
    {
      "problem": "Parental anxiety \u2014 requesting antibiotics",
      "icd": "Z71.19",
      "onset": "2024",
      "status": "Active",
      "notes": "Education opportunity: vaccinated child with viral URI does not need antibiotics"
    }
  ],
  "medications": [
    {
      "name": "Acetaminophen 15mg/kg PO/PR q4-6h PRN fever >38.5\u00b0C",
      "sig": "By mouth or rectally every 4-6 hours as needed",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Active PRN"
    },
    {
      "name": "Ibuprofen 10mg/kg PO q6-8h PRN fever (alternate with acetaminophen)",
      "sig": "Every 6-8 hours \u2014 alternate with acetaminophen for high fever",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Active PRN"
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
      "wt": "110 lbs",
      "ht": "5'7\"",
      "bmi": 17.2,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "110 lbs",
      "ht": "5'7\"",
      "bmi": 17.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "110 lbs",
      "ht": "5'7\"",
      "bmi": 17.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Fever 39.4",
      "assessment": "Working diagnosis: Fever 39.4",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pediatric Fever Workup",
      "results": [
        {
          "test": "WBC",
          "value": "12.4",
          "unit": "K/\u03bcL",
          "ref": "6-17 for age",
          "flag": ""
        },
        {
          "test": "Bands",
          "value": "4",
          "unit": "%",
          "ref": "0-10",
          "flag": ""
        },
        {
          "test": "CRP",
          "value": "0.8",
          "unit": "mg/dL",
          "ref": "<1.0",
          "flag": ""
        },
        {
          "test": "Rapid strep",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Rapid influenza A/B",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Temperature",
          "value": "39.4",
          "unit": "\u00b0C",
          "ref": "<38.0",
          "flag": "H"
        },
        {
          "test": "SpO2",
          "value": "99",
          "unit": "%",
          "ref": ">95",
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
      "lot": "V8884K",
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
    "caseId": "pa-febrile-child",
    "diagnosis": "Occult Bacteremia Ruled Out \u2014 Viral URI Most Likely in Vaccinated 18-Month-Old",
    "acuity": 2,
    "presentation": "Fever 39.4",
    "category": "pediatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with fever 39.4. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Complete history and physical",
      "Vital signs and trending",
      "Focused systems exam",
      "Scope of practice determination",
      "Escalation criteria assessment",
      "Documentation review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Viral URI \u2014 no antibiotic indicated (correct)",
      "Occult bacteremia \u2014 very low risk in fully vaccinated child",
      "Strep pharyngitis \u2014 rapid strep negative",
      "Influenza \u2014 rapid test negative",
      "UTI \u2014 no urinary symptoms, no dipstick urinalysis done",
      "Meningitis \u2014 no meningismus, fontanelle normal, alert and interactive"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: Fever 39.4. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: viral URI \u2014 watchful waiting appropriate. Key PA learning: (1) Pre-vaccine era: occult bacteremia from S. pneumoniae occurred in 3-5% of febrile children <36 months with high fever. Post-PCV13 vaccination: risk <0.5%. Fully vaccinated children with non-toxic appearance and no source DO NOT need blood cultures or empiric antibiotics. (2) Fever management: 38.5\u00b0C is the treatment threshold (comfort, not organ protection). Fever itself does not cause brain damage below 42\u00b0C \u2014 educate parents. Alternating acetaminophen and ibuprofen is safe and effective for high fever. (3) Serious bacterial infection signs requiring workup: ill-appearing/toxic, petechiae/purpura (meningococcal), fever >5 days (Kawasaki), meningismus, dehydration, <3 months age. None present here. (4) Parent education is the PA's highest-value intervention: 'Antibiotics for viral illness increase antibiotic resistance, disrupt the microbiome, and cause side effects without benefit.' Deferred antibiotic prescription (fill only if worsening in 48h) is evidence-based shared decision-making. (5) Return precautions: fever >5 days, petechiae, difficulty breathing, stiff neck, inconsolable, dehydration signs \u2192 return immediately."
    }
  }
};
