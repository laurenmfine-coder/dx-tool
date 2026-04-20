
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "06/27/1956",
    "age": 69,
    "sex": "Non-binary",
    "mrn": "RDX-2025-74109",
    "pronouns": "They/Them",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Starting Methotrexate Then TNF Inhibitor",
    "race": "American Indian or Alaska Native",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-9409",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Drew Santos (Family)",
      "phone": "(954) 555-8013"
    }
  },
  "problems": [
    {
      "problem": "Immunocompromised \u2014 starting methotrexate then adalimumab",
      "icd": "Z79.4",
      "onset": "2024",
      "status": "Active",
      "notes": "RA patient, 65yo, starting MTX then TNF inhibitor. Vaccine review required before immunosuppression."
    },
    {
      "problem": "Rheumatoid arthritis \u2014 DMARD therapy initiation",
      "icd": "M05.59",
      "onset": "2024",
      "status": "Active",
      "notes": "MTX + adalimumab (Humira) planned. Window to complete vaccines before immunosuppression is critical."
    },
    {
      "problem": "Live vaccine contraindication \u2014 TNF inhibitor era",
      "icd": "Z23",
      "onset": "2024",
      "status": "Active",
      "notes": "Live vaccines (shingles/Zostavax, varicella, MMR) contraindicated while on biologics. Switch to Shingrix (recombinant)."
    }
  ],
  "medications": [
    {
      "name": "Methotrexate 15mg PO weekly \u2014 starting in 3 weeks",
      "sig": "Weekly \u2014 hold vaccines 3 months before starting for optimal immune response",
      "prescriber": "Rheumatology",
      "start": "Pending",
      "refills": 0,
      "status": "Pending start"
    },
    {
      "name": "Adalimumab (Humira) 40mg SQ q2 weeks \u2014 starting month 2",
      "sig": "Subcutaneous q2 weeks \u2014 biologic DMARD",
      "prescriber": "Rheumatology",
      "start": "Pending",
      "refills": 0,
      "status": "Pending start"
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'6\"",
      "bmi": 22.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "138 lbs",
      "ht": "5'6\"",
      "bmi": 22.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'6\"",
      "bmi": 22.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Starting Methotrexate Then TNF Inhibitor",
      "assessment": "Working diagnosis: Starting Methotrexate Then TNF Inhibitor",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pre-Immunosuppression Vaccine Screen",
      "results": [
        {
          "test": "Hepatitis B surface antigen",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Hepatitis B surface antibody",
          "value": "Negative (<10 mIU/mL)",
          "unit": "mIU/mL",
          "ref": ">10 = immune",
          "flag": "L"
        },
        {
          "test": "Varicella IgG",
          "value": "Positive",
          "unit": "",
          "ref": "Positive = immune",
          "flag": ""
        },
        {
          "test": "MMR IgG (measles, mumps, rubella)",
          "value": "Positive",
          "unit": "",
          "ref": "Positive = immune",
          "flag": ""
        },
        {
          "test": "Pneumococcal antibody titers",
          "value": "Not checked \u2014 give PPSV23 and PCV15",
          "unit": "",
          "ref": "",
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
      "lot": "V2223K",
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
    "caseId": "pharmacy-vaccine-immunosuppressed",
    "diagnosis": "Vaccine Safety in Immunosuppression \u2014 Methotrexate + TNF Inhibitor: Live Vaccines Contraindicated",
    "acuity": 3,
    "presentation": "Starting Methotrexate Then TNF Inhibitor",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with starting methotrexate then tnf inhibitor. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What medications are you currently taking, including OTC?",
      "Have you had any new medications started recently?",
      "Are you taking everything as prescribed?",
      "Have you noticed any side effects?",
      "Is cost or access a barrier to any medication?",
      "Do you have any allergies to medications?",
      "Are you taking any supplements or herbal products?",
      "Do you have any kidney or liver problems?",
      "Are you pregnant or breastfeeding?"
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
      "Medication reconciliation",
      "Drug interaction screening",
      "Renal/hepatic dosing review",
      "Allergy cross-reactivity assessment",
      "Patient counseling readiness",
      "Adherence assessment",
      "Cost barrier identification"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Give Shingrix, PCV15/PPSV23, HepB series before starting biologics (correct)",
      "Give Zostavax (live zoster vaccine) \u2014 CONTRAINDICATED on biologics",
      "No vaccines needed \u2014 incorrect, immunocompromised patients need specific vaccines",
      "Delay all vaccines until biologics started \u2014 opposite; vaccinate BEFORE",
      "Give MMR booster \u2014 already immune (IgG positive), not needed",
      "Influenza vaccine not needed in immunosuppressed \u2014 actually MORE important"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Starting Methotrexate Then TNF Inhibitor. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: pre-immunosuppression vaccine optimization \u2014 pharmacist review. Key pharmacy learning: (1) Live vaccine contraindications: Zostavax (live zoster \u2014 use Shingrix instead), varicella (patient immune, not needed), MMR (patient immune). Live vaccines must NOT be given during TNF inhibitor therapy OR within 3-4 weeks before starting. (2) Shingrix (recombinant zoster vaccine) is recommended for all adults \u226550 AND for immunocompromised patients regardless of age. Two-dose series. Can be given WHILE on biologic therapy (non-live). This is a pharmacist-detected intervention \u2014 Shingrix should be given NOW before MTX/adalimumab start. (3) Hepatitis B: HBV seronegative (anti-HBs negative) + starting immunosuppression = risk of HBV reactivation. Must test HBsAg and anti-HBc before biologics. If prior HBV infection (anti-HBc positive) \u2192 prophylactic antiviral (entecavir or tenofovir). If never vaccinated (like this patient) \u2192 complete HepB series before biologics. (4) Pneumococcal vaccines: all immunocompromised patients should receive PCV15 or PCV20 (pneumococcal conjugate) AND PPSV23 if not already given. Sequence matters: PCV first, PPSV23 at least 8 weeks later. (5) Influenza: inactivated influenza vaccine annually \u2014 safe during immunosuppression. Live attenuated influenza (FluMist nasal) is contraindicated."
    }
  }
};
