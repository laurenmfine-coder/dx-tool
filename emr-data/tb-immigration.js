
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "05/11/1997",
    "age": 28,
    "sex": "Non-binary",
    "mrn": "RDX-2025-70518",
    "pronouns": "They/Them",
    "insurance": "Tricare",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Productive Cough 6 Weeks",
    "race": "Multiracial",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-2000",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Tamika Williams (Family)",
      "phone": "(954) 555-1615"
    }
  },
  "problems": [
    {
      "problem": "Active pulmonary TB \u2014 smear-positive, cavitary disease",
      "icd": "A15.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Amara Diallo, 31F \u2014 immigrant from West Africa 4 months ago. 6-week productive cough, night sweats, 15 lb weight loss. AFB smear 3+."
    },
    {
      "problem": "Airborne isolation \u2014 public health reporting mandatory",
      "icd": "A15.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Negative pressure room required. N95 for all entering. State health department notified within 24h."
    },
    {
      "problem": "Contact investigation \u2014 household and close contacts",
      "icd": "Z03.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Public health will conduct contact tracing \u2014 household members, coworkers require IGRA testing."
    }
  ],
  "medications": [
    {
      "name": "Isoniazid 300mg PO daily (INH) \u2014 RIPE regimen",
      "sig": "Take on empty stomach or with food if GI upset. Pyridoxine 50mg daily co-administered to prevent peripheral neuropathy.",
      "prescriber": "ID/Pulmonology",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Rifampin 600mg PO daily (RIF)",
      "sig": "Take on empty stomach. Turns urine/sweat/tears orange \u2014 warn patient. Significant drug interactions (CYP3A4 inducer).",
      "prescriber": "ID",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Pyrazinamide 1500mg PO daily (PZA) \u2014 first 2 months",
      "sig": "First 2 months only. Monitor uric acid and LFTs.",
      "prescriber": "ID",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 2 months"
    },
    {
      "name": "Ethambutol 1200mg PO daily (EMB) \u2014 first 2 months",
      "sig": "Until susceptibility results. Monitor visual acuity and color vision monthly \u2014 optic neuritis risk.",
      "prescriber": "ID",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 2 months"
    },
    {
      "name": "Pyridoxine (B6) 50mg PO daily \u2014 INH neuropathy prevention",
      "sig": "Always co-administer with isoniazid.",
      "prescriber": "ID",
      "start": "2024",
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
      "wt": "122 lbs",
      "ht": "5'9\"",
      "bmi": 18.0,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "122 lbs",
      "ht": "5'9\"",
      "bmi": 18.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "122 lbs",
      "ht": "5'9\"",
      "bmi": 18.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Productive Cough 6 Weeks",
      "assessment": "Working diagnosis: Productive Cough 6 Weeks",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "TB Workup",
      "results": [
        {
          "test": "AFB smear (sputum x3)",
          "value": "3+ positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "IGRA (QuantiFERON-TB Gold)",
          "value": "Positive \u2014 8.2 IU/mL",
          "unit": "",
          "ref": "<0.35 negative",
          "flag": "H"
        },
        {
          "test": "HIV antibody",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "ALT/AST",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Uric acid",
          "value": "5.8",
          "unit": "mg/dL",
          "ref": "2.4-7.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CXR PA/Lateral",
      "indication": "Chronic cough, night sweats, weight loss",
      "findings": "Right upper lobe cavitary lesion. Ipsilateral hilar adenopathy. Miliary pattern absent.",
      "impression": "Classic active pulmonary TB pattern \u2014 upper lobe cavitation with hilar adenopathy. Smear result confirms."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9907K",
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
    "caseId": "tb-immigration",
    "diagnosis": "Active Pulmonary Tuberculosis \u2014 Recent Immigrant, Positive IGRA, Smear-Positive, RIPE Therapy Initiated",
    "acuity": 2,
    "presentation": "Productive Cough 6 Weeks",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with productive cough 6 weeks. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
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
      "Active pulmonary TB \u2014 immigrant, cavitary disease, smear 3+ (correct)",
      "Lung cancer with superinfection \u2014 cavitary mass; age and AFB smear argue against",
      "Aspergillosis \u2014 immunocompromised, cavitary; HIV negative here",
      "NTM (non-tuberculous mycobacteria) \u2014 culture will distinguish; treatment differs",
      "Lung abscess \u2014 anaerobic, aspiration history; upper lobe cavitation atypical",
      "Histoplasmosis \u2014 geographic exposure (Ohio/Mississippi valley); different endemic region"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Productive Cough 6 Weeks. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: active pulmonary TB. Key learning: (1) RIPE regimen: Rifampin + Isoniazid + Pyrazinamide + Ethambutol for 2 months (intensive phase), then RIF + INH for 4 more months (continuation phase) = 6 months total for drug-sensitive TB. DOT (directly observed therapy) is standard \u2014 public health supervises each dose. (2) Airborne precautions: TB is spread via airborne droplet nuclei (<5 \u03bcm) \u2014 negative pressure room, N95 respirators (not surgical masks). Isolation continues until 3 consecutive negative AFB smears and clinical improvement. (3) Drug interactions with rifampin: rifampin is a potent CYP3A4 inducer \u2014 lowers levels of protease inhibitors (HIV), oral contraceptives, warfarin, methadone, many others. Review ALL medications. (4) INH hepatotoxicity: monitor LFTs monthly. Stop if ALT >3-5x ULN with symptoms or >5x ULN asymptomatic. Pyridoxine 50mg daily prevents peripheral neuropathy (INH inhibits B6 metabolism). (5) Reporting: TB is a mandatory reportable disease in all US states. State health department must be notified within 24h of suspected active TB. Contact investigation for household contacts and close contacts is the health department's responsibility."
    }
  }
};
