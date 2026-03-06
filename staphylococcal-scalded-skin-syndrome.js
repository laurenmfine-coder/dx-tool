// Virtual EMR Case: Staphylococcal Scalded Skin Syndrome (SSSS)
// Variant: staphylococcal-scalded-skin-syndrome | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Mateo Fernandez",
  "patientHPI": "My little boy has been really cranky for two days now and keeps pulling at his right ear. He had a fever yesterday that got up to 102, and he's barely eating anything which isn't like him at all - I'm worried because he's had ear problems before.",
    "dob": "08/30/2023",
    "age": 2,
    "sex": "Male",
    "mrn": "RDX-2025-41908",
    "pronouns": "He/Him",
    "insurance": "Florida KidCare (Medicaid)",
    "pcp": "Dr. Lourdes Figueroa, MD",
    "pharmacy": "Publix Pharmacy — 4895 Sheridan St, Hollywood, FL",
    "language": "English, Spanish (parents bilingual)",
    "race": "Hispanic (Honduran American)",
    "address": "3251 Mulberry St, San Antonio, TX 78205",
    "phone": "(954) 555-5618",
    "email": "a.fernandez_parent@email.com",
    "emergencyContact": {
      "name": "Adriana Fernandez (Mother)",
      "phone": "(954) 555-5618"
    }
  },
  "problems": [
    {
      "problem": "Recurrent Otitis Media",
      "icd": "H66.90",
      "onset": "2024",
      "status": "Active",
      "notes": "4 episodes in past 12 months; last episode 01/2026 treated with amoxicillin; ENT referral for myringotomy tubes evaluation pending"
    },
    {
      "problem": "Eczema — Mild",
      "icd": "L20.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Flexural distribution; managed with emollients and low-potency topical corticosteroids PRN; staphylococcal skin colonization may be contributing factor"
    },
    {
      "problem": "Food Allergy — Peanut (Confirmed)",
      "icd": "T78.01",
      "onset": "2025",
      "status": "Active",
      "notes": "Confirmed by skin prick testing 06/2025 after hives with accidental peanut exposure at daycare; carries epinephrine auto-injector (EpiPen Jr); no history of anaphylaxis"
    }
  ],
  "medications": [
    {
      "name": "Amoxicillin 400mg/5mL — 5 mL BID x 10 days",
      "sig": "Give 5 mL by mouth twice daily for 10 days",
      "prescriber": "Dr. Figueroa",
      "start": "01/2026",
      "refills": 0,
      "status": "Discontinued"
    },
    {
      "name": "Cetirizine (Zyrtec) 2.5 mL daily",
      "sig": "Give 2.5 mL (2.5 mg) by mouth once daily as needed",
      "prescriber": "Dr. Figueroa",
      "start": "06/2025",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Hydrocortisone 1% cream — topical PRN",
      "sig": "Apply thin layer to eczema patches twice daily for up to 7 days when flaring",
      "prescriber": "Dr. Figueroa",
      "start": "05/2024",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Epinephrine Auto-Injector (EpiPen Jr) 0.15 mg",
      "sig": "Administer 0.15 mg intramuscularly in outer thigh for anaphylaxis",
      "prescriber": "Dr. Figueroa",
      "start": "06/2025",
      "refills": 1,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Peanut",
      "type": "Food",
      "reaction": "Generalized urticaria, periorbital edema (no respiratory distress or anaphylaxis)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/20/2026",
      "bp": "88/56",
      "hr": 142,
      "rr": 32,
      "temp": "102.6°F",
      "spo2": "97%",
      "wt": "28 lbs",
      "ht": "34\"",
      "bmi": 17.0,
      "setting": "ED"
    },
    {
      "date": "01/08/2026",
      "bp": "84/52",
      "hr": 118,
      "rr": 26,
      "temp": "101.8°F",
      "spo2": "99%",
      "wt": "28 lbs",
      "ht": "34\"",
      "bmi": 17.0,
      "setting": "PCP Office"
    },
    {
      "date": "10/14/2025",
      "bp": "82/50",
      "hr": 112,
      "rr": 24,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "27 lbs",
      "ht": "33.5\"",
      "bmi": 17.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2026",
      "type": "Primary Care",
      "provider": "Dr. Lourdes Figueroa, MD",
      "cc": "Ear pain, fever, fussiness x 2 days (mother historian)",
      "hpi": "2M brought by mother for 2-day history of fever (max 102.2°F at home), pulling at right ear, fussiness, and decreased oral intake. Fourth episode of otitis media in past year. Completed amoxicillin course for last episode 11/2025. Attends daycare 5 days/week. No cough, rhinorrhea, or rash. No diarrhea. Voiding and stooling normally. Developmentally appropriate — walking, saying ~50 words, following 2-step commands.",
      "exam": "Fussy but consolable in mother's arms. Ears: Right TM erythematous, bulging, with decreased mobility on pneumatic otoscopy. Left TM clear. Oropharynx: Normal. Neck: Supple, no lymphadenopathy. Lungs: CTAB. Skin: Mild eczema in antecubital fossae bilat, no acute infection.",
      "assessment": "1. Acute otitis media — right; 4th episode in 12 months\n2. Recurrent AOM — meets criteria for ENT referral for tubes",
      "plan": "1. Amoxicillin 400mg/5mL, 5 mL BID x 10 days\n2. Acetaminophen PRN for fever/pain\n3. ENT referral for myringotomy tube evaluation\n4. Return if symptoms worsen or not improving by day 3"
    },
    {
      "id": "V002",
      "date": "10/14/2025",
      "type": "Primary Care",
      "provider": "Dr. Lourdes Figueroa, MD",
      "cc": "24-month well-child visit",
      "hpi": "Healthy 24-month-old male presents for well-child visit. Mother reports normal development — running, climbing, stacking blocks, 50+ words, 2-word phrases. Eating well. Sleeps 11-12 hours at night. Eczema controlled with emollients. Carrying EpiPen at daycare for peanut allergy. No concerns.",
      "exam": "Well-appearing, active toddler. Growth: Wt 27 lbs (55th %ile), Ht 33.5 in (50th %ile), HC 49 cm (60th %ile). HEENT: Normal. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. Skin: Mild eczema antecubital fossae, well-controlled. Neuro: Age-appropriate development.",
      "assessment": "1. Healthy 24-month-old\n2. Eczema — controlled\n3. Peanut allergy — EpiPen available\n4. Recurrent AOM — monitoring",
      "plan": "1. Hepatitis A vaccine administered\n2. Developmental screening — passed M-CHAT (ASD screen negative)\n3. Anticipatory guidance: dental visit, car seat, water safety, dietary counseling\n4. Return at 30 months"
    }
  ],
  "labs": [
    {
      "date": "06/2025",
      "time": "10:00",
      "orderedBy": "Dr. Figueroa",
      "collected": "06/12/2025 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-601204",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "9.2", "unit": "K/uL", "range": "6.0-17.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.8", "unit": "g/dL", "range": "10.5-13.5", "flag": "" },
            { "test": "Hematocrit", "value": "35.4", "unit": "%", "range": "33.0-39.0", "flag": "" },
            { "test": "Platelets", "value": "302", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "ALLERGY PANEL",
          "results": [
            { "test": "Total IgE", "value": "148", "unit": "IU/mL", "range": "<97", "flag": "H" },
            { "test": "Peanut sIgE", "value": "12.4", "unit": "kU/L", "range": "<0.35", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left vastus lateralis IM", "lot": "FL25-9044", "mfr": "Sanofi" },
    { "vaccine": "DTaP (4th dose)", "date": "08/2024", "site": "Right vastus lateralis IM", "lot": "DT24-312", "mfr": "Sanofi" },
    { "vaccine": "IPV (3rd dose)", "date": "08/2024", "site": "Left vastus lateralis IM", "lot": "IP24-188", "mfr": "Sanofi" },
    { "vaccine": "MMR (1st dose)", "date": "09/2024", "site": "Right vastus lateralis IM", "lot": "MM24-416", "mfr": "Merck" },
    { "vaccine": "Varicella (1st dose)", "date": "09/2024", "site": "Left deltoid SC", "lot": "VR24-220", "mfr": "Merck" },
    { "vaccine": "Hepatitis A (1st dose)", "date": "09/2024", "site": "Right vastus lateralis IM", "lot": "HA24-308", "mfr": "Merck" },
    { "vaccine": "Hepatitis A (2nd dose)", "date": "10/2025", "site": "Right vastus lateralis IM", "lot": "HA25-520", "mfr": "Merck" },
    { "vaccine": "PCV15 (4th dose)", "date": "08/2024", "site": "Left vastus lateralis IM", "lot": "PC24-440", "mfr": "Merck" },
    { "vaccine": "Hib (4th dose)", "date": "08/2024", "site": "Right vastus lateralis IM", "lot": "HB24-284", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Mother: Eczema, allergic rhinitis, alive at 28",
    "Father: Asthma, alive at 32",
    "Maternal grandmother: T2DM, alive at 58",
    "Paternal grandfather: HTN, alive at 60"
  ],
  "socialHistory": [
    ["Occupation", "N/A — 2-year-old; attends daycare 5 days/week"],
    ["Marital", "N/A — lives with both parents"],
    ["Tobacco", "N/A — no secondhand smoke exposure in home (mother reports father smokes outside only)"],
    ["Alcohol", "N/A"],
    ["Drugs", "N/A"],
    ["Exercise", "N/A — active toddler; outdoor play daily at daycare"],
    ["Housing", "Apartment with parents and 4-month-old baby sister; no pets; carpet in bedrooms"],
    ["Safety", "Rear-facing car seat; cabinet locks; pool fence at apartment complex; peanut-free daycare classroom; EpiPen at daycare and home"],
    ["Advance Directive", "N/A — parents are medical decision-makers"]
  ],
  "meta": {
    "caseId": "staphylococcal-scalded-skin-syndrome",
    "diagnosis": "Staphylococcal Scalded Skin Syndrome (SSSS — Generalized Exfoliation in 2-Year-Old with Eczema and Recurrent Staphylococcal Colonization, Positive Nikolsky Sign)",
    "acuity": 2,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "dermatologic"
  }
};
