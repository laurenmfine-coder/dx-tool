// Virtual EMR Case: Submersion Injury (Near-Drowning)
// Variant: submersion-injury | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Sofia Ramirez",
    "dob": "07/12/2022",
    "age": 2,
    "sex": "Female",
    "mrn": "NSU-2025-81394",
    "pronouns": "She/Her",
    "insurance": "Florida KidCare (Medicaid)",
    "pcp": "Dr. Amanda Torres, MD (Pediatrics)",
    "pharmacy": "Walgreens — 5200 S University Dr, Davie, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "3825 SW 44th Ave, Fort Lauderdale, FL 33312",
    "phone": "(954) 555-9124",
    "email": "m.ramirez.parent@email.com",
    "emergencyContact": {
      "name": "Miguel Ramirez (Father)",
      "phone": "(954) 555-9180"
    }
  },
  "problems": [
    {
      "problem": "Atopic Dermatitis, Mild",
      "icd": "L20.9",
      "onset": "2023",
      "status": "Active",
      "notes": "Bilateral antecubital fossae; topical emollients and mild steroid"
    },
    {
      "problem": "History of Febrile Seizure (Simple)",
      "icd": "R56.00",
      "onset": "2024",
      "status": "Resolved",
      "notes": "Single episode at 18 months with fever 103.2°F; no recurrence; neurology cleared"
    }
  ],
  "medications": [
    {
      "name": "Hydrocortisone cream 1% PRN",
      "sig": "Apply thin layer to affected areas twice daily as needed for eczema flares",
      "prescriber": "Dr. Torres",
      "start": "06/2023",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Cetirizine syrup 2.5mg daily",
      "sig": "Give 2.5 mL (½ teaspoon) by mouth once daily for itching",
      "prescriber": "Dr. Torres",
      "start": "09/2024",
      "refills": 2,
      "status": "PRN"
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
      "date": "12/10/2024",
      "bp": "—",
      "hr": 118,
      "rr": 28,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "27 lbs",
      "ht": "34 in",
      "bmi": 16.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/15/2024",
      "bp": "—",
      "hr": 124,
      "rr": 30,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "25 lbs",
      "ht": "33 in",
      "bmi": 16.2,
      "setting": "PCP Office"
    },
    {
      "date": "01/12/2024",
      "bp": "—",
      "hr": 120,
      "rr": 28,
      "temp": "103.2°F",
      "spo2": "98%",
      "wt": "24 lbs",
      "ht": "32 in",
      "bmi": 16.5,
      "setting": "ED"
    },
    {
      "date": "07/10/2023",
      "bp": "—",
      "hr": 130,
      "rr": 34,
      "temp": "98.8°F",
      "spo2": "99%",
      "wt": "21 lbs",
      "ht": "30 in",
      "bmi": 16.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Amanda Torres, MD",
      "cc": "24-month well-child visit",
      "hpi": "2-year-old female for 24-month well-child check. Mother reports child is meeting developmental milestones — speaking 50+ words, 2-word phrases, running, climbing stairs with assistance. Eating well. Sleep 12 hrs/night with 1 nap. Eczema mild, controlled. No febrile seizure recurrence since 18-month episode. Lives in home with unfenced pool — discussed water safety extensively.",
      "exam": "General: Active, playful toddler, NAD. HEENT: TMs clear bilateral, oropharynx normal, dentition appropriate. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. Skin: Mild eczema bilateral antecubital fossae — improved. Neuro: Age-appropriate; walking and running well. Development: ASQ-3 above cutoff all domains.",
      "assessment": "1. 24-month well-child — healthy, meeting milestones\n2. Atopic dermatitis — controlled\n3. Pool safety — CRITICAL counseling given",
      "plan": "1. Hepatitis A vaccine #2 given\n2. POOL SAFETY: Discussed 4-sided fencing with self-latching gate, constant adult supervision within arm's reach, swimming lessons recommendation for age 1+, CPR training for parents, never leave unattended near water even briefly\n3. Continue emollients and hydrocortisone PRN\n4. RTC 30-month visit"
    },
    {
      "id": "V002",
      "date": "01/12/2024",
      "type": "ED",
      "provider": "Dr. Vanessa Obi, MD (Emergency Medicine)",
      "cc": "Febrile seizure",
      "hpi": "18-month-old female brought to ED by parents after witnessed generalized tonic-clonic seizure lasting approximately 90 seconds. Fever 103.2°F. Had been ill with URI symptoms x 2 days — runny nose, cough, mild fussiness. Seizure occurred during rapid fever rise. Post-ictal drowsiness lasting ~15 min, now alert and interactive. No prior seizures. No head trauma.",
      "exam": "General: Alert, interactive toddler, mild rhinorrhea. HEENT: TMs mildly erythematous bilateral, rhinorrhea. CV: RRR, tachycardic (age-appropriate for fever). Lungs: CTAB. Neuro: Post-ictal resolved; now A&O age-appropriate, moving all extremities, no focal deficits. Fontanelle flat.",
      "assessment": "1. Simple febrile seizure — first episode, generalized, <5 min duration, age-appropriate, no focal features\n2. URI — viral, likely trigger",
      "plan": "1. Acetaminophen for fever management; no antiepileptic needed for simple febrile seizure\n2. Neurology referral for parental reassurance and documentation\n3. Return precautions: seizure >5 min → call 911; complex features → return to ED\n4. Pediatric neurology cleared — no MRI needed for single simple febrile seizure"
    },
    {
      "id": "V003",
      "date": "07/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Amanda Torres, MD",
      "cc": "Well-child check; eczema follow-up",
      "hpi": "2-year-old female for routine visit. Eczema flared with summer heat — itching at night. No seizure recurrence. Development on track. Started preschool prep program.",
      "exam": "General: NAD. Skin: Moderate eczema bilateral antecubital and popliteal fossae. Lungs: CTAB.",
      "assessment": "1. Well-child — healthy\n2. Eczema — moderate flare",
      "plan": "1. Increase emollient frequency; start cetirizine syrup 2.5mg daily for pruritus\n2. Continue hydrocortisone cream\n3. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "01/12/2024",
      "time": "14:30",
      "orderedBy": "Dr. Vanessa Obi, MD",
      "collected": "01/12/2024 14:00",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2024-813940",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "12.4", "unit": "x10³/µL", "range": "5.0-17.0 (age 1-3)", "flag": "" },
            { "test": "Hemoglobin", "value": "11.8", "unit": "g/dL", "range": "10.5-13.5 (age 1-3)", "flag": "" },
            { "test": "Hematocrit", "value": "35.4", "unit": "%", "range": "33-39 (age 1-3)", "flag": "" },
            { "test": "Platelet Count", "value": "310", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "92", "unit": "mg/dL", "range": "60-100", "flag": "" },
            { "test": "BUN", "value": "8", "unit": "mg/dL", "range": "5-18", "flag": "" },
            { "test": "Creatinine", "value": "0.2", "unit": "mg/dL", "range": "0.2-0.4 (age 1-3)", "flag": "" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.4", "unit": "mEq/L", "range": "3.5-5.5", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "12/10/2024",
      "study": "LEAD SCREENING",
      "accession": "IMG-2024-81394",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Torres, MD",
      "readBy": "Dr. Amanda Torres, MD",
      "facility": "NSU Health — Davie Campus Lab",
      "priority": "Routine",
      "clinical": "24-month well-child. Lead screening per AAP guidelines.",
      "technique": "Capillary blood lead level.",
      "findings": "Blood lead level: 1.8 µg/dL.",
      "impression": "1. Blood lead level 1.8 µg/dL — within normal limits (CDC reference <3.5 µg/dL).",
      "dictated": "12/10/2024",
      "verified": "12/11/2024"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Hepatitis A (Havrix) — Dose 2",
      "date": "12/10/2024",
      "site": "Right vastus lateralis IM",
      "lot": "HA24-620",
      "mfr": "GSK"
    },
    {
      "vaccine": "DTaP (Daptacel) — Dose 4",
      "date": "07/15/2024",
      "site": "Left vastus lateralis IM",
      "lot": "DT24-318",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Right vastus lateralis IM",
      "lot": "FL2024-290",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "MMR (M-M-R II) — Dose 1",
      "date": "07/10/2023",
      "site": "Left vastus lateralis SC",
      "lot": "MMR23-402",
      "mfr": "Merck"
    },
    {
      "vaccine": "Varicella (Varivax) — Dose 1",
      "date": "07/10/2023",
      "site": "Right vastus lateralis SC",
      "lot": "VZ23-188",
      "mfr": "Merck"
    },
    {
      "vaccine": "Hepatitis A (Havrix) — Dose 1",
      "date": "07/10/2023",
      "site": "Right vastus lateralis IM",
      "lot": "HA23-315",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Eczema, asthma, alive at 28",
    "Father: Healthy, alive at 30",
    "Brother: Healthy, age 5",
    "Maternal grandmother: T2DM, alive at 55"
  ],
  "socialHistory": [
    ["Occupation", "Toddler — stays home with maternal grandmother while parents work"],
    ["Marital", "N/A — minor"],
    ["Tobacco", "N/A; no household smokers"],
    ["Alcohol", "N/A"],
    ["Drugs", "N/A"],
    ["Exercise", "Active toddler — running, climbing, outdoor play daily"],
    ["Housing", "Lives with parents and older brother in single-family home WITH UNFENCED BACKYARD POOL"],
    ["Safety", "Car seat — rear-facing convertible; pool safety counseled extensively; cabinet locks installed; medications out of reach"],
    ["Advance Directive", "Minor — parents are legal guardians"]
  ],
  "meta": {
    "caseId": "submersion-injury",
    "diagnosis": "Submersion Injury (Freshwater Near-Drowning, Pediatric)",
    "acuity": 1,
    "presentation": "Environmental Emergency",
    "category": "environmental"
  }
};
