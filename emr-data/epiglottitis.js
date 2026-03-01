// Virtual EMR Case: Acute epiglottitis in under-immunized child
// Variant: epiglottitis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Sophia Martinez",
    "dob": "09/05/2020",
    "age": 5,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Medicaid",
    "pcp": "Dr. Linda Park, MD (Pediatrics)",
    "pharmacy": "CVS \u2014 Miramar, FL",
    "language": "Spanish/English",
    "race": "Hispanic",
    "address": "3280 SW 68th Ave, Miramar, FL",
    "phone": "(954) 555-9012",
    "email": "martinez.family@email.com",
    "emergencyContact": {
      "name": "Rosa Martinez (Mother)",
      "phone": "(954) 555-9028"
    },
    "mrn": "NSU-2025-44634"
  },
  "problems": [
    {
      "problem": "Incomplete Immunizations",
      "icd": "Z28.39",
      "onset": "2020",
      "status": "Active",
      "notes": "Behind on Hib series \u2014 only received 1 of 4 doses; family relocated, records incomplete"
    }
  ],
  "medications": [
    {
      "name": "None",
      "sig": "",
      "prescriber": "",
      "start": "",
      "refills": 0,
      "status": ""
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
      "date": "02/26/2026",
      "bp": "92/58",
      "hr": 148,
      "rr": 36,
      "temp": "103.8\u00b0F",
      "spo2": "92%",
      "wt": "42 lbs",
      "ht": "3'6\"",
      "bmi": 16.8,
      "setting": "ED Resus"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED \u2014 Pediatric Resus",
      "provider": "Dr. Sarah Mitchell, MD",
      "cc": "High fever, drooling, refusing to swallow, noisy breathing x 8 hours",
      "hpi": "5F with incomplete Hib immunization presenting with acute onset high fever (103.8\u00b0F), drooling, dysphagia (refusing to swallow), muffled voice, and inspiratory stridor. Onset 8 hours ago \u2014 rapidly progressive. Child sitting in tripod position, leaning forward with chin thrust. No cough (important \u2014 not croup). No preceding URI symptoms. Mother reports child was in her usual health yesterday.",
      "exam": "Toxic-appearing, sitting upright in tripod position. Drooling copiously. Inspiratory stridor at rest. Muffled 'hot potato' voice. No barking cough. Mild intercostal retractions. Lungs: Stridor, otherwise clear air entry. No wheezing. Skin: Flushed, no rash.",
      "assessment": "1. ACUTE EPIGLOTTITIS \u2014 classic presentation (drooling, dysphagia, distress, stridor without cough) in under-immunized child\n2. AIRWAY EMERGENCY \u2014 do NOT examine throat, do NOT lay child flat\n3. Likely H. influenzae type b given incomplete Hib vaccination",
      "plan": "1. DO NOT examine oropharynx \u2014 risk of complete obstruction\n2. Keep child calm, upright, with parent\n3. STAT call to anesthesia + ENT \u2014 controlled intubation in OR\n4. Prepare tracheostomy tray at bedside\n5. Heliox if available while awaiting OR\n6. Blood culture, CBC (draw AFTER airway secured)\n7. IV ceftriaxone 50mg/kg AFTER airway secured (do not distress child)\n8. Lateral neck X-ray ONLY if stable \u2014 thumbprint sign expected\n9. Contact isolation \u2014 Hib prophylaxis for close contacts"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "17:00",
      "orderedBy": "Dr. Mitchell",
      "collected": "02/26/2026 17:00",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02261700",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC (POST-INTUBATION)",
          "results": [
            {
              "test": "WBC",
              "value": "22.4",
              "unit": "K/uL",
              "range": "5.0-15.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "11.5-14.5",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "342",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Bands",
              "value": "18",
              "unit": "%",
              "range": "0-5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BLOOD CULTURE",
          "results": [
            {
              "test": "Blood Culture x2",
              "value": "Pending",
              "unit": "",
              "range": "No growth",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "LATERAL NECK RADIOGRAPH",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. Mitchell",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Suspected epiglottitis \u2014 drooling, stridor, tripod positioning",
      "technique": "Lateral soft tissue neck radiograph, upright.",
      "findings": "Markedly swollen epiglottis \u2014 classic 'thumbprint sign.' Thickened aryepiglottic folds. Hypopharyngeal overdistension. Subglottic airway patent. Prevertebral soft tissues normal.",
      "impression": "1. Acute epiglottitis \u2014 thumbprint sign.\n2. Aryepiglottic fold thickening.\n3. Airway management is priority.",
      "dictated": "02/26/2026 15:00",
      "verified": "02/26/2026 15:20"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8001",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2101",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-502",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Healthy",
    "Father: Healthy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Unknown"
    ],
    [
      "Tobacco",
      "Denies"
    ]
  ],
  "meta": {
    "caseId": "epiglottitis",
    "diagnosis": "Acute epiglottitis in under-immunized child",
    "acuity": 1,
    "presentation": "Pediatric Emergency",
    "category": "pediatric"
  }
};
