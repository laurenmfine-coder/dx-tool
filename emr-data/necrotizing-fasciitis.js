// Virtual EMR Case: Necrotizing Fasciitis (Type I — Polymicrobial)
// Variant: necrotizing-fasciitis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Angela Simmons",
    "patientHPI": "I scratched a mosquito bite on my left calf about five days ago, and now the whole area is red, swollen, and really painful. It started small but has been getting worse each day, and I've had a low fever at home. My leg with the swelling issue seems to get infected pretty easily, and this feels different - more serious somehow.",
    "dob": "02/16/1970",
    "age": 55,
    "sex": "Female",
    "mrn": "RDX-2025-41572",
    "pronouns": "She/Her",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. Lourdes Figueroa, MD",
    "pharmacy": "CVS Pharmacy — 4401 Sheridan St, Hollywood, FL",
    "language": "English",
    "race": "Black (African American)",
    "address": "1580 Chestnut Rd, Baltimore, MD 21214",
    "phone": "(954) 555-7134",
    "email": "a.simmons70@email.com",
    "emergencyContact": {
      "name": "Tyrone Simmons (Son)",
      "phone": "(954) 555-7148"
    }
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes Mellitus — Poorly Controlled",
      "icd": "E11.65",
      "onset": "2012",
      "status": "Active",
      "notes": "A1c 10.2; non-adherent to insulin regimen; recurrent hyperglycemia; lost to follow-up 06/2025 to 01/2026"
    },
    {
      "problem": "Obesity, BMI 42.1",
      "icd": "E66.01",
      "onset": "2005",
      "status": "Active",
      "notes": "Class III obesity; declined bariatric surgery referral"
    },
    {
      "problem": "Chronic Venous Insufficiency — Bilateral",
      "icd": "I87.2",
      "onset": "2018",
      "status": "Active",
      "notes": "Bilateral lower extremity edema; stasis dermatitis; compression stockings prescribed but not worn consistently"
    },
    {
      "problem": "Lymphedema — Left Lower Extremity",
      "icd": "I89.0",
      "onset": "2020",
      "status": "Active",
      "notes": "Secondary to chronic venous insufficiency and obesity; recurrent cellulitis episodes (3 in past 2 years)"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "On amlodipine; poorly controlled when non-adherent"
    },
    {
      "problem": "Depression — Moderate, Recurrent",
      "icd": "F33.1",
      "onset": "2017",
      "status": "Active",
      "notes": "On sertraline; contributing to self-care neglect"
    }
  ],
  "medications": [
    {
      "name": "Insulin Glargine 30 units QHS",
      "sig": "Inject 30 units subcutaneously at bedtime",
      "prescriber": "Dr. Figueroa",
      "start": "08/2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Figueroa",
      "start": "04/2013",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Figueroa",
      "start": "06/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Sertraline 100mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Figueroa",
      "start": "09/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Cephalexin 500mg QID",
      "sig": "Take 1 capsule by mouth four times daily for 10 days",
      "prescriber": "Dr. Park (Urgent Care)",
      "start": "02/2026",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "type": "Drug",
      "reaction": "Anaphylaxis — hives, lip swelling, wheezing",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/23/2026",
      "bp": "82/48",
      "hr": 132,
      "rr": 28,
      "temp": "104.2°F",
      "spo2": "92%",
      "wt": "268 lbs",
      "ht": "5'5\"",
      "bmi": 44.6,
      "setting": "ED"
    },
    {
      "date": "02/16/2026",
      "bp": "142/88",
      "hr": 96,
      "rr": 18,
      "temp": "100.4°F",
      "spo2": "96%",
      "wt": "264 lbs",
      "ht": "5'5\"",
      "bmi": 43.9,
      "setting": "Urgent Care"
    },
    {
      "date": "06/10/2025",
      "bp": "158/94",
      "hr": 84,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "260 lbs",
      "ht": "5'5\"",
      "bmi": 43.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/16/2026",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Park, DO",
      "cc": "Left leg redness, swelling, pain x 3 days",
      "hpi": "55F with history of recurrent cellulitis, lymphedema, and poorly controlled DM presents with 3-day history of increasing left leg redness, swelling, and pain. Reports scratching a mosquito bite 5 days ago on the medial left calf. Area became red and swollen. Low-grade fever at home (100.2°F). Denies tracking redness at this time. Reports moderate pain. Non-weight-bearing on left leg due to pain.",
      "exam": "Obese female, uncomfortable. Temp 100.4°F. Left lower extremity: Diffuse erythema from ankle to mid-calf, warm, tender, edematous. 3+ pitting edema (chronic baseline 2+). No blistering, no crepitus, no skin necrosis. Margins marked with pen. Right leg: Chronic venous stasis changes, no acute findings.",
      "assessment": "1. Left lower extremity cellulitis — recurrent, on background of lymphedema and chronic venous insufficiency\n2. T2DM — poorly controlled, infection risk",
      "plan": "1. Cephalexin 500mg QID x 10 days (sulfa allergy — cannot use TMP-SMX)\n2. Elevation, compression when tolerated\n3. Mark cellulitis borders — return to ED if spreading beyond marks, fevers >101, blistering, or worsening pain\n4. Follow-up PCP in 3-5 days\n5. Needs to resume diabetes management — labs and PCP follow-up"
    },
    {
      "id": "V002",
      "date": "06/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Lourdes Figueroa, MD",
      "cc": "Diabetes management, depression follow-up",
      "hpi": "55F with T2DM, depression, obesity presents. A1c 10.2 — worsened from 9.0. Admits not taking insulin regularly ('I forget' and 'the needles are hard to reach my belly'). Depression — reports low motivation, poor self-care. Sertraline helping somewhat. Reports bilateral leg swelling worsening.",
      "exam": "Obese. CV: RRR. Lungs: CTAB. Ext: Bilateral LE 2+ pitting edema, stasis dermatitis bilat, left > right. Skin: Hemosiderin staining bilateral medial ankles. No ulcers today.",
      "assessment": "1. T2DM — significantly uncontrolled, A1c 10.2\n2. Depression — undertreated, contributing to non-adherence\n3. CVI with lymphedema — worsening",
      "plan": "1. Insulin education and pen device (easier for patient to self-inject)\n2. Sertraline increase to 150mg discussed — patient declined\n3. Compression stockings re-ordered\n4. Social work referral for support services\n5. Return 2 months"
    }
  ],
  "labs": [
    {
      "date": "06/10/2025",
      "time": "09:30",
      "orderedBy": "Dr. Figueroa",
      "collected": "06/10/2025 09:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-601044",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            {
              "test": "HbA1c",
              "value": "10.2",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "242",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "18",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            },
            {
              "test": "Albumin",
              "value": "3.2",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "8.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "34.8",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "288",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/2024",
      "study": "VENOUS DUPLEX ULTRASOUND — BILATERAL LOWER EXTREMITY",
      "accession": "IMG-2024-80822",
      "status": "FINAL",
      "orderedBy": "Dr. Figueroa",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Bilateral LE edema — evaluate for DVT vs venous insufficiency",
      "technique": "Compression and Doppler ultrasound of bilateral lower extremity deep and superficial venous systems.",
      "findings": "Deep veins: Patent and compressible bilaterally. No DVT identified.\n\nSuperficial veins: Bilateral great saphenous vein incompetence with reflux >1 second on Valsalva. Left > right.\n\nPerforator veins: Incompetent perforator veins at left mid-calf level.",
      "impression": "1. No DVT bilaterally.\n2. Bilateral superficial venous insufficiency with significant reflux, left > right.\n3. Incompetent perforators left leg.",
      "dictated": "08/14/2024 11:30",
      "verified": "08/14/2024 13:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "11/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8928",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-1834",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "04/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-290",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B Series",
      "date": "2002",
      "site": "Right deltoid IM",
      "lot": "HB02-180",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: T2DM, HTN, CHF, deceased at 68 (cardiac arrest)",
    "Father: Unknown — estranged",
    "Sister: T2DM, obesity, alive at 58",
    "Brother: Deceased at 42 (gun violence)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Former home health aide; on disability since 2022 (mobility limitations from obesity and lymphedema)"
    ],
    [
      "Marital",
      "Divorced; lives alone"
    ],
    [
      "Tobacco",
      "Former — 10 pack-years; quit 2015"
    ],
    [
      "Alcohol",
      "Denies current use"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal — limited by leg edema, pain, and deconditioning"
    ],
    [
      "Housing",
      "Ground-floor apartment; accessible but poorly maintained; no A/C in bedroom (uses fans)"
    ],
    [
      "Safety",
      "Fall risk; uses cane; no firearms; neighborhood safety concerns (low-income area)"
    ],
    [
      "Advance Directive",
      "None — not discussed"
    ]
  ],
  "meta": {
    "caseId": "necrotizing-fasciitis",
    "diagnosis": "Necrotizing Fasciitis Type I (Polymicrobial) — Lower Extremity",
    "acuity": 1,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Angela Simmons appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did skin / soft tissue emergency start?",
      "Can you describe exactly how it started — sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history — any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle — work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started I scratched a mosquito bite on my left calf about five days ago, and now the who.'",
      "character": "'It's skin / soft tissue emergency — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Necrotizing Fasciitis Type I.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Insulin Glargine 30 units QHS; Metformin 1000mg BID; Amlodipine 10mg daily; Sertraline 100mg daily; Cephalexin 500mg QID.'",
      "allergies": "'My allergies are Sulfa drugs (Trimethoprim-Sulfamethoxazole).'",
      "family": "Mother: T2DM, HTN, CHF, deceased at 68 (cardiac arrest)  Father: Unknown — estranged  Sister: T2DM, obesity, alive at 58",
      "social": "Occupation: Former home health aide; on disability since 2022 (mobility limitations from obesity and lymphedema)  Marital: Divorced; lives alone  Tobacco: Former — 10 pack-years; quit 2015  Alcohol: Denies current use  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and toxicity",
      "Vital signs with temperature",
      "Skin for rash, lesions, or signs of infection",
      "Lymph node palpation",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Source-specific examination"
    ],
    "examFindings": {
      "General appearance and toxicity": "Clinical finding consistent with Necrotizing Fasciitis Type I. Document specifically what you observe.",
      "Vital signs with temperature": "Clinical finding consistent with Necrotizing Fasciitis Type I. Document specifically what you observe.",
      "Skin for rash, lesions, or signs of infection": "Clinical finding consistent with Necrotizing Fasciitis Type I. Document specifically what you observe.",
      "Lymph node palpation": "Clinical finding consistent with Necrotizing Fasciitis Type I. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Necrotizing Fasciitis Type I. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Necrotizing Fasciitis Type I. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Necrotizing Fasciitis Type I. Document specifically what you observe.",
      "Source-specific examination": "Clinical finding consistent with Necrotizing Fasciitis Type I. Document specifically what you observe."
    },
    "ddxTargets": [
      "Necrotizing Fasciitis Type I (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Necrotizing Fasciitis Type I, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Necrotizing Fasciitis Type I, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Necrotizing Fasciitis Type I based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Angela Simmons's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Necrotizing Fasciitis Type I (Polymicrobial — Left Lower Extremity, Rapidly Progressing from Cellulitis in Immunocompromised Diabetic Patient with Lymphedema). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: necrotizing fasciitis type I (polymicrobial) of the lower extremity in an immunocompromised diabetic patient. Key learning: (1) Necrotizing fasciitis (NF) is a rare, rapidly progressive soft-tissue infection with mortality 20-40%. Classification: Type I — polymicrobial (mixed aerobic and anaerobic — commonly in diabetics, obese, post-surgical, perineal/Fournier gangrene); Type II — monomicrobial (classically group A Streptococcus, sometimes with S. aureus including MRSA — 'flesh-eating bacteria' in the media); Type III — gram-negative monomicrobial (Vibrio vulnificus after seawater or seafood exposure, Aeromonas in freshwater); Type IV — fungal (in immunocompromised or trauma). Gas gangrene (Clostridium perfringens) is a related, distinct entity. (2) Risk factors: diabetes mellitus, obesity, peripheral vascular disease, immunosuppression, IV drug use, chronic alcoholism, liver cirrhosis, NSAID use (may mask symptoms and delay recognition), recent surgery or trauma, and varicella (in children, increases risk of invasive GAS infection). (3) Presentation: severe pain OUT OF PROPORTION to visible findings is the cardinal early feature — this pain often persists despite seemingly modest skin findings (erythema, edema, tenderness). Progression over hours: skin color changes (dusky, purple, mottled), bullae (especially hemorrhagic bullae — ominous), crepitus (from gas-producing organisms, NF type I typically), anesthesia in the involved area (from nerve necrosis — sometimes interpreted by patients as 'feeling better'), and systemic toxicity (fever, tachycardia, hypotension, altered mental status). (4) Workup. Early suspicion is the key — do not wait for classic late findings. Labs: CBC, CMP, CRP, lactate, CPK (muscle involvement), coagulation, blood cultures, and LRINEC score (Laboratory Risk Indicator for Necrotizing Fasciitis): CRP, WBC, Hgb, sodium, creatinine, glucose — score ≥6 raises suspicion, ≥8 strongly suggestive, but a low score does NOT rule out NF. Imaging: CT with IV contrast shows gas, fascial thickening, edema, and sometimes fluid collections; MRI is more sensitive for fascial involvement but often time-consuming. Do not delay surgical consultation for imaging if clinical suspicion is high — the finger test at bedside (small skin incision, finger-probing for loss of fascial resistance) is diagnostic. (5) Management. (a) EMERGENT SURGICAL DEBRIDEMENT is the only definitive treatment — must happen within hours of diagnosis. Multiple serial debridements are expected every 24-48 hours until margins are clean. (b) Broad-spectrum empiric antibiotics: carbapenem (meropenem or imipenem) OR piperacillin-tazobactam PLUS clindamycin (anti-toxin effect for GAS and C. perfringens) PLUS vancomycin or linezolid for MRSA. For Vibrio: add doxycycline plus ceftriaxone. (c) Aggressive fluid resuscitation, vasopressor support as needed, ICU admission. (d) IVIG is considered for toxic shock syndrome from GAS or S. aureus (not routine in polymicrobial NF). (e) Hyperbaric oxygen therapy is adjunctive in centers where available — does not replace surgery. (f) Amputation may be required for extensive extremity involvement to save life. Classic pitfalls: (a) accepting 'just cellulitis' in a diabetic with severe pain out of proportion — always palpate for crepitus, assess for bullae, and have a low threshold for surgical consultation. (b) Non-operative management with antibiotics alone — fatal in true NF. (c) Using LRINEC as a rule-out rather than a rule-in — clinical judgment supersedes the score. (d) Missing post-operative rehabilitation and long-term outcomes planning — survivors need extensive reconstruction, prosthetics, PT, and psychological support."
    }
  }
};
