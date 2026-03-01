// Virtual EMR Case: Allergic Angioedema
// Variant: allergic-angioedema | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Priya Nair",
    "dob": "03/28/1990",
    "age": 35,
    "sex": "Female",
    "mrn": "NSU-2025-50832",
    "pronouns": "She/Her",
    "insurance": "United Healthcare HMO",
    "pcp": "Dr. Lisa Chung, MD",
    "pharmacy": "Walgreens — 2301 N University Dr, Pembroke Pines, FL",
    "language": "English, Hindi",
    "race": "Asian",
    "address": "9404 NW 2nd St, Pembroke Pines, FL 33024",
    "phone": "(954) 555-2258",
    "email": "priya.nair90@email.com",
    "emergencyContact": {
      "name": "Amit Nair (Husband)",
      "phone": "(954) 555-2271"
    }
  },
  "problems": [
    {
      "problem": "Allergic Rhinitis, Perennial",
      "icd": "J30.89",
      "onset": "2010",
      "status": "Active",
      "notes": "Dust mite, cat dander sensitized; on immunotherapy"
    },
    {
      "problem": "Atopic Dermatitis, Mild",
      "icd": "L20.9",
      "onset": "2008",
      "status": "Active",
      "notes": "Intermittent flares, flexural distribution"
    },
    {
      "problem": "History of Allergic Angioedema (Penicillin)",
      "icd": "T78.3XXA",
      "onset": "2023",
      "status": "Active",
      "notes": "Episode following amoxicillin — lip and periorbital swelling with urticaria; treated in ED"
    },
    {
      "problem": "Asthma, Mild Persistent",
      "icd": "J45.30",
      "onset": "2012",
      "status": "Active",
      "notes": "Well-controlled on low-dose ICS"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone/Salmeterol 100/50mcg INH BID",
      "sig": "Inhale 1 puff twice daily; rinse mouth after use",
      "prescriber": "Dr. Chung",
      "start": "04/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg INH PRN",
      "sig": "Inhale 1-2 puffs every 4-6 hours as needed for shortness of breath or wheezing",
      "prescriber": "Dr. Chung",
      "start": "06/2012",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Chung",
      "start": "01/2016",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Fluticasone Nasal Spray 50mcg 2 sprays each nostril daily",
      "sig": "Spray 2 sprays in each nostril once daily",
      "prescriber": "Dr. Chung",
      "start": "03/2016",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Triamcinolone 0.1% Cream PRN",
      "sig": "Apply thin layer to affected areas twice daily as needed for flares; max 2 weeks continuous use",
      "prescriber": "Dr. Chung",
      "start": "05/2020",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Epinephrine Auto-Injector 0.3mg",
      "sig": "Inject into outer thigh at onset of severe allergic reaction; call 911 immediately after use",
      "prescriber": "Dr. Gupta",
      "start": "08/2023",
      "refills": 1,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin/Amoxicillin",
      "type": "Drug",
      "reaction": "Angioedema — lip and periorbital swelling, diffuse urticaria within 30 minutes",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Cephalosporins",
      "type": "Drug",
      "reaction": "Cross-reactivity concern — not challenged",
      "severity": "Moderate",
      "verified": "No"
    },
    {
      "allergen": "Cat Dander",
      "type": "Environmental",
      "reaction": "Rhinitis, eye itching",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Dust Mites",
      "type": "Environmental",
      "reaction": "Rhinitis, sneezing",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/12/2026",
      "bp": "128/78",
      "hr": 96,
      "rr": 18,
      "temp": "98.8°F",
      "spo2": "97%",
      "wt": "132 lbs",
      "ht": "5'3\"",
      "bmi": 23.4,
      "setting": "ED"
    },
    {
      "date": "10/20/2025",
      "bp": "112/70",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "130 lbs",
      "ht": "5'3\"",
      "bmi": 23.0,
      "setting": "Specialist"
    },
    {
      "date": "06/18/2025",
      "bp": "114/72",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "131 lbs",
      "ht": "5'3\"",
      "bmi": 23.2,
      "setting": "PCP Office"
    },
    {
      "date": "01/08/2025",
      "bp": "110/68",
      "hr": 70,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "129 lbs",
      "ht": "5'3\"",
      "bmi": 22.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/20/2025",
      "type": "Specialist",
      "provider": "Dr. Sanjay Gupta, MD (Allergy/Immunology)",
      "cc": "Allergen immunotherapy visit; follow-up history of allergic angioedema",
      "hpi": "35-year-old female presenting for subcutaneous allergen immunotherapy (maintenance phase — dust mite and cat dander). Reports well-controlled allergic rhinitis on current regimen. Asthma stable, uses rescue inhaler <1x/month. No angioedema episodes since the 2023 penicillin-related event. Atopic dermatitis with mild intermittent flexural flares managed with topical steroid. Carries epinephrine auto-injector at all times.",
      "exam": "General: NAD, well-appearing. HEENT: Nasal mucosa mildly pale, no polyps. Oropharynx clear. Neck: No LAD. Lungs: CTAB, no wheezes. Skin: Mild lichenification bilateral antecubital fossae. No urticaria.",
      "assessment": "1. Perennial allergic rhinitis — well-controlled on immunotherapy and nasal steroids\n2. Mild persistent asthma — well-controlled on ICS/LABA\n3. History of allergic angioedema to penicillin — epinephrine auto-injector prescribed\n4. Atopic dermatitis — mild, stable",
      "plan": "1. Continue immunotherapy, currently maintenance q4 weeks\n2. Continue current medications\n3. Renew epinephrine auto-injector prescription\n4. Discussed penicillin allergy testing — patient defers at this time\n5. RTC 4 weeks for next immunotherapy injection"
    },
    {
      "id": "V002",
      "date": "06/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Lisa Chung, MD",
      "cc": "Annual wellness visit",
      "hpi": "35-year-old female for annual exam. Atopic triad well-managed. Allergic rhinitis improved on immunotherapy. Asthma well-controlled. No recent angioedema. Reports occasional eczema flares managed with triamcinolone cream. Planning for pregnancy in the next year — requests preconception counseling.",
      "exam": "General: NAD. HEENT: WNL. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT/ND. Skin: Mild flexural eczema, no active lesions. Breast: No masses.",
      "assessment": "1. Annual wellness\n2. Atopic triad — stable\n3. Preconception counseling",
      "plan": "1. Start prenatal vitamin\n2. Review medication safety for pregnancy at next visit\n3. Update immunizations — Tdap booster pending\n4. Continue current allergy/asthma regimen\n5. RTC 6 months or if pregnant"
    },
    {
      "id": "V003",
      "date": "08/15/2023",
      "type": "ED",
      "provider": "Dr. Karen Moy, MD (Emergency Medicine)",
      "cc": "Acute lip swelling, hives after taking amoxicillin",
      "hpi": "35-year-old female presenting with acute-onset lip swelling, periorbital edema, and diffuse urticaria within 30 minutes of taking amoxicillin 500mg (prescribed by urgent care for sinusitis). Reports itching, lip tingling, then rapid facial swelling. Mild throat tightness but no stridor, no dyspnea. No prior known penicillin allergy. Has history of atopy (rhinitis, asthma, eczema).",
      "exam": "General: Anxious female with visible facial swelling. HEENT: Bilateral lip edema, periorbital swelling, no tongue protrusion. Oropharynx: Mild uvular edema, no stridor. Neck: Supple. Lungs: CTAB, no wheezes. CV: Tachycardic but regular. Skin: Diffuse urticaria on trunk and extremities.",
      "assessment": "1. IgE-mediated allergic angioedema secondary to amoxicillin\n2. Anaphylaxis — meets criteria (skin + mucosal + mild respiratory)",
      "plan": "1. IM epinephrine 0.3mg — rapid improvement\n2. IV diphenhydramine 50mg, IV methylprednisolone 125mg, IV famotidine 20mg\n3. Monitored 4 hours — swelling resolving, urticaria clearing\n4. Discharge with EpiPen prescription, prednisone 40mg x 3 days\n5. Allergy/immunology referral — Dr. Gupta\n6. Amoxicillin and penicillin added to allergy list"
    }
  ],
  "labs": [
    {
      "date": "02/12/2026",
      "time": "14:50",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "collected": "02/12/2026 14:30",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2026-021255",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "9.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Neutrophils", "value": "52", "unit": "%", "range": "40-70", "flag": "" },
            { "test": "Eosinophils", "value": "8", "unit": "%", "range": "1-4", "flag": "H" },
            { "test": "Hemoglobin", "value": "13.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "40.2", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "258", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "92", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.7", "unit": "mg/dL", "range": "0.6-1.2", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "ALT (SGPT)", "value": "18", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "20", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "TRYPTASE",
          "results": [
            { "test": "Serum Tryptase", "value": "18.4", "unit": "ng/mL", "range": "<11.4", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/08/2025",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2025-01084",
      "status": "FINAL",
      "orderedBy": "Dr. Lisa Chung, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "Routine",
      "clinical": "35F with mild persistent asthma. Baseline imaging.",
      "technique": "PA and lateral views, upright, full inspiration.",
      "findings": "Heart: Normal size. No pericardial effusion.\\n\\nLungs: Clear bilaterally. No consolidation, mass, or pleural effusion. No pneumothorax.\\n\\nBones: No acute fracture.",
      "impression": "1. Normal chest radiograph.\\n2. No acute cardiopulmonary process.",
      "dictated": "01/08/2025 11:20",
      "verified": "01/08/2025 13:45"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/28/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-292",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/15/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-775",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2014",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, Allergic rhinitis, alive at 62",
    "Father: Type 2 Diabetes Mellitus, Hypertension, alive at 65",
    "Sister: Atopic dermatitis, food allergies (peanut), alive at 32",
    "Maternal grandmother: Asthma (deceased at 80)"
  ],
  "socialHistory": [
    ["Occupation", "Software engineer (remote)"],
    ["Marital", "Married"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Rare, 1-2 glasses of wine/month"],
    ["Drugs", "Denies"],
    ["Exercise", "Yoga 4x/week; running 2x/week"],
    ["Housing", "Townhouse with husband; no pets (due to cat allergy)"],
    ["Safety", "Denies IPV; seatbelt always"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "allergic-angioedema",
    "diagnosis": "Allergic (Mast Cell-Mediated) Angioedema",
    "acuity": 2,
    "presentation": "Allergic Reaction",
    "category": "immunologic"
  }
};
