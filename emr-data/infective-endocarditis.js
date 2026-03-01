// Virtual EMR Case: Infective Endocarditis
// Variant: infective-endocarditis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Ryan Kowalski",
    "dob": "03/15/1990",
    "age": 34,
    "sex": "Male",
    "mrn": "NSU-2025-52371",
    "pronouns": "He/Him",
    "insurance": "Florida Medicaid",
    "pcp": "Dr. Patricia Hall, MD",
    "pharmacy": "Walgreens — 1200 S State Rd 7, North Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "5830 Kimberly Blvd, North Lauderdale, FL 33068",
    "phone": "(954) 555-4892",
    "email": "r.kowalski90@email.com",
    "emergencyContact": {
      "name": "Karen Kowalski (Mother)",
      "phone": "(954) 555-4910"
    }
  },
  "problems": [
    {
      "problem": "Opioid Use Disorder — In Sustained Remission on MAT",
      "icd": "F11.21",
      "onset": "2016",
      "status": "Active",
      "notes": "IVDU heroin 2016-2021; multiple ODs; on buprenorphine-naloxone since 2022; sustained remission; engaged in counseling"
    },
    {
      "problem": "Hepatitis C — Treated, SVR",
      "icd": "B18.2",
      "onset": "2018",
      "status": "Resolved",
      "notes": "Genotype 1a; treated with sofosbuvir/velpatasvir 2022; SVR12 achieved; viral load undetectable"
    },
    {
      "problem": "Mitral Valve Prolapse with Mild Regurgitation",
      "icd": "I34.1",
      "onset": "2019",
      "status": "Active",
      "notes": "Incidentally found on echo during addiction hospitalization; trivial-mild MR; no intervention needed"
    },
    {
      "problem": "Major Depressive Disorder — Recurrent",
      "icd": "F33.1",
      "onset": "2017",
      "status": "Active",
      "notes": "On sertraline; in outpatient therapy"
    }
  ],
  "medications": [
    {
      "name": "Buprenorphine-Naloxone (Suboxone) 16mg-4mg SL daily",
      "sig": "Dissolve 1 film under the tongue daily",
      "prescriber": "Dr. Patel (Addiction Medicine)",
      "start": "03/2022",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Sertraline 100mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Hall",
      "start": "06/2018",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/08/2024",
      "bp": "118/72",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "165 lbs",
      "ht": "5'11\"",
      "bmi": 23.0,
      "setting": "PCP Office"
    },
    {
      "date": "04/10/2024",
      "bp": "116/70",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "163 lbs",
      "ht": "5'11\"",
      "bmi": 22.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/08/2024",
      "type": "Primary Care",
      "provider": "Dr. Patricia Hall, MD",
      "cc": "Follow-up: OUD, depression, general wellness",
      "hpi": "34-year-old male with OUD in sustained remission on buprenorphine-naloxone for follow-up. Reports doing well — working full-time at a warehouse, attending weekly counseling. No cravings, no substance use. Depression improved. Denies any IV drug use since 2021. Had a dental issue 2 months ago — broken molar; seen by dentist who recommended extraction but patient has not followed through yet due to cost. No fever, chills, or other symptoms.",
      "exam": "General: NAD, well-appearing. HEENT: Dental — right lower molar visibly broken with surrounding gingival erythema. Neck: No LAD. CV: RRR, I/VI systolic click and late systolic murmur at apex, consistent with known MVP. Lungs: CTAB. Skin: Old track marks bilateral antecubital fossae, well-healed. Extremities: No edema, no splinter hemorrhages. Neuro: A&O x3.",
      "assessment": "1. OUD — sustained remission on MAT; excellent progress\n2. MDD — improved\n3. Dental caries with broken molar — needs extraction; risk factor for bacteremia given MVP\n4. MVP with mild MR — stable\n5. HCV — cured, SVR confirmed",
      "plan": "1. Continue buprenorphine-naloxone and sertraline\n2. URGENT dental referral for extraction — explain bacteremia risk with underlying valve disease\n3. Discussed: AHA does NOT recommend antibiotic prophylaxis for MVP with mild MR for dental procedures, but extraction should not be delayed\n4. Urine drug screen — ordered\n5. Labs: CBC, CMP, LFTs\n6. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "10/08/2024",
      "time": "10:15",
      "orderedBy": "Dr. Patricia Hall, MD",
      "collected": "10/08/2024 09:30",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2024-100815",
      "status": "Final",
      "specimenType": "Serum, Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "14.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "43.6", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "235", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "HEPATIC FUNCTION",
          "results": [
            { "test": "ALT (SGPT)", "value": "22", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "20", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "HCV Viral Load", "value": "Not Detected", "unit": "IU/mL", "range": "Not Detected", "flag": "" }
          ]
        },
        {
          "name": "URINE DRUG SCREEN",
          "results": [
            { "test": "Buprenorphine", "value": "Positive", "unit": "—", "range": "—", "flag": "" },
            { "test": "Opiates", "value": "Negative", "unit": "—", "range": "Negative", "flag": "" },
            { "test": "Amphetamines", "value": "Negative", "unit": "—", "range": "Negative", "flag": "" },
            { "test": "Cocaine", "value": "Negative", "unit": "—", "range": "Negative", "flag": "" },
            { "test": "THC", "value": "Negative", "unit": "—", "range": "Negative", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/2019",
      "study": "TRANSTHORACIC ECHOCARDIOGRAM (TTE)",
      "accession": "IMG-2019-06151",
      "status": "FINAL",
      "orderedBy": "Dr. Raj Gupta, MD (Hospitalist)",
      "readBy": "Dr. Priya Shah, MD (Cardiology)",
      "facility": "Broward Health — North Campus",
      "priority": "Routine",
      "clinical": "29M systolic murmur noted on admission for cellulitis.",
      "technique": "Standard 2D, M-mode, and Doppler TTE.",
      "findings": "Left ventricle: Normal size and function. LVEF 60%.\\n\\nMitral valve: Posterior leaflet prolapse (P2 segment). Mild mitral regurgitation. Jet area <4 cm². No anterior leaflet involvement.\\n\\nAortic, tricuspid, pulmonic valves: Normal.\\n\\nNo vegetations.\\n\\nPericardium: Normal.",
      "impression": "1. Mitral valve prolapse (posterior leaflet) with mild MR.\\n2. Normal LV size and function.\\n3. No vegetations.",
      "dictated": "06/15/2019 14:20",
      "verified": "06/15/2019 16:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-264",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-694",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Hepatitis A (2/2)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Hepatitis B (3/3)",
      "date": "2019",
      "site": "Right deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Depression, HTN, alive at 60",
    "Father: Alcohol use disorder, CAD, alive at 64",
    "Brother: Substance use disorder (in recovery), age 31",
    "No family history of valve disease or rheumatic fever"
  ],
  "socialHistory": [
    ["Occupation", "Warehouse associate — full-time"],
    ["Marital", "Single, lives with mother"],
    ["Tobacco", "Former smoker — 10 pack-years; quit 2022"],
    ["Alcohol", "Denies — in recovery"],
    ["Drugs", "History of IVDU heroin 2016-2021; in sustained remission on MAT; denies any current substance use"],
    ["Exercise", "Walking; physical job provides activity"],
    ["Housing", "Lives with mother in apartment"],
    ["Safety", "Denies IPV; no firearms; Narcan kit at home"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "infective-endocarditis",
    "diagnosis": "Infective Endocarditis — Subacute (Streptococcus viridans, Mitral Valve with MVP)",
    "acuity": 2,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  }
};
