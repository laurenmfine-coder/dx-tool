
window.EMR_DATA = {
  "patient": {
    "name": "Taylor Kim",
    "dob": "11/21/1977",
    "age": 48,
    "sex": "Non-binary",
    "mrn": "RDX-2025-16314",
    "pronouns": "They/Them",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Progressive Shortness of Breath",
    "race": "Black or African American",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-6310",
    "email": "taylorki@email.com",
    "emergencyContact": {
      "name": "Aisha Johnson (Family)",
      "phone": "(954) 555-1304"
    }
  },
  "problems": [
    {
      "problem": "EVALI \u2014 vaping-associated lung injury",
      "icd": "J68.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Jordan Hayes, 21M \u2014 vaping THC cartridges daily x8 months. Progressive dyspnea, fever, GI symptoms. SpO2 88% on RA."
    },
    {
      "problem": "Acute hypoxic respiratory failure \u2014 bilateral infiltrates",
      "icd": "J96.00",
      "onset": "2024",
      "status": "Active",
      "notes": "SpO2 88% on room air. CXR bilateral infiltrates. High-flow O2 initiated. EVALI pattern on CT."
    },
    {
      "problem": "Vitamin E acetate \u2014 likely causative agent in THC cartridge",
      "icd": "J68.0",
      "onset": "2024",
      "status": "Active",
      "notes": "CDC identified vitamin E acetate (used as thickener in THC vaping oil) as primary causative agent in EVALI outbreak."
    }
  ],
  "medications": [
    {
      "name": "Methylprednisolone 125mg IV q6h \u2014 systemic steroid",
      "sig": "EVALI responds to systemic steroids \u2014 reduces organizing pneumonia and inflammatory component. Taper over 2-4 weeks after discharge.",
      "prescriber": "Pulmonology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ceftriaxone 1g IV daily + azithromycin 500mg daily \u2014 empiric antibiotics",
      "sig": "Empiric coverage \u2014 infection cannot be clinically excluded from EVALI. Antibiotics continued pending culture results.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 empiric"
    },
    {
      "name": "High-flow nasal cannula (HFNC) 40L/min, FiO2 0.6",
      "sig": "Non-invasive respiratory support. Target SpO2 \u226592%. Avoid intubation if possible.",
      "prescriber": "Pulmonology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Cessation counseling \u2014 all vaping products",
      "sig": "Strict avoidance of all vaping products mandatory. Nicotine replacement options discussed.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
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
      "wt": "76 lbs",
      "ht": "5'10\"",
      "bmi": 10.9,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "76 lbs",
      "ht": "5'10\"",
      "bmi": 10.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "76 lbs",
      "ht": "5'10\"",
      "bmi": 10.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Progressive Shortness of Breath",
      "assessment": "Working diagnosis: Progressive Shortness of Breath",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "EVALI Workup",
      "results": [
        {
          "test": "WBC",
          "value": "18.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "94",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        },
        {
          "test": "LDH",
          "value": "620",
          "unit": "U/L",
          "ref": "135-225",
          "flag": "H"
        },
        {
          "test": "Respiratory viral panel",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Sputum culture",
          "value": "No growth \u2014 pending",
          "unit": "",
          "ref": "No pathogens",
          "flag": ""
        },
        {
          "test": "BAL \u2014 macrophages with lipid-laden vacuoles",
          "value": "Lipid-laden macrophages present",
          "unit": "",
          "ref": "Absent",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Chest \u2014 HRCT",
      "indication": "Progressive dyspnea, vaping history",
      "findings": "Bilateral ground-glass opacities, predominantly subpleural. Scattered consolidation lower lobes. No pleural effusion. No cavitation.",
      "impression": "EVALI pattern \u2014 bilateral subpleural ground-glass and consolidation consistent with organizing pneumonia. Clinical correlation with vaping history confirms EVALI."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1979K",
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
    "caseId": "evali-vaping",
    "diagnosis": "E-Cigarette or Vaping Product Use-Associated Lung Injury (EVALI) \u2014 Vitamin E Acetate, Systemic Steroids Required",
    "acuity": 2,
    "presentation": "Progressive Shortness of Breath",
    "category": "pulmonary"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with progressive shortness of breath. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this pulmonary presentation.",
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
      "EVALI \u2014 THC vaping, bilateral GGO, steroid-responsive (correct)",
      "COVID-19 pneumonia \u2014 negative respiratory panel; EVALI pattern similar",
      "Bacterial pneumonia \u2014 culture negative, no lobar consolidation, EVALI pattern on CT",
      "Lipoid pneumonia \u2014 lipid-laden macrophages on BAL support EVALI mechanism",
      "Hypersensitivity pneumonitis \u2014 exposure history, similar CT; vaping history key",
      "ARDS from another cause \u2014 EVALI is a cause of ARDS; history determines etiology"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Progressive Shortness of Breath. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: EVALI. Key learning: (1) EVALI diagnostic criteria (CDC): use of e-cigarette or vaping products in 90 days before symptom onset + pulmonary infiltrate on imaging + no plausible alternative diagnosis (infection excluded). Bronchoalveolar lavage with lipid-laden macrophages is supportive but not required. (2) Vitamin E acetate: added to illicit THC vaping cartridges as a thickening agent. Inhaled \u2192 directly toxic to alveolar epithelium \u2192 organizing pneumonia pattern. Legal nicotine vaping products less clearly associated \u2014 THC products are the primary EVALI risk. (3) Symptom triad: respiratory (dyspnea, cough, chest pain) + constitutional (fever, fatigue, weight loss) + GI (nausea, vomiting, diarrhea). GI symptoms in the context of respiratory illness should trigger vaping history. (4) Steroids: EVALI responds to systemic corticosteroids \u2014 methylprednisolone IV then prednisone oral taper. Most patients improve significantly within 24-48 hours of steroid initiation. (5) Cessation: strict, complete cessation of ALL vaping products is required \u2014 both THC and nicotine vaping. Counsel on risks of resumption and offer NRT alternatives."
    }
  }
};
