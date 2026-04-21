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
            {
              "test": "WBC",
              "value": "9.2",
              "unit": "K/uL",
              "range": "6.0-17.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.8",
              "unit": "g/dL",
              "range": "10.5-13.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "35.4",
              "unit": "%",
              "range": "33.0-39.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "302",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "ALLERGY PANEL",
          "results": [
            {
              "test": "Total IgE",
              "value": "148",
              "unit": "IU/mL",
              "range": "<97",
              "flag": "H"
            },
            {
              "test": "Peanut sIgE",
              "value": "12.4",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left vastus lateralis IM",
      "lot": "FL25-9044",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "DTaP (4th dose)",
      "date": "08/2024",
      "site": "Right vastus lateralis IM",
      "lot": "DT24-312",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "IPV (3rd dose)",
      "date": "08/2024",
      "site": "Left vastus lateralis IM",
      "lot": "IP24-188",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "MMR (1st dose)",
      "date": "09/2024",
      "site": "Right vastus lateralis IM",
      "lot": "MM24-416",
      "mfr": "Merck"
    },
    {
      "vaccine": "Varicella (1st dose)",
      "date": "09/2024",
      "site": "Left deltoid SC",
      "lot": "VR24-220",
      "mfr": "Merck"
    },
    {
      "vaccine": "Hepatitis A (1st dose)",
      "date": "09/2024",
      "site": "Right vastus lateralis IM",
      "lot": "HA24-308",
      "mfr": "Merck"
    },
    {
      "vaccine": "Hepatitis A (2nd dose)",
      "date": "10/2025",
      "site": "Right vastus lateralis IM",
      "lot": "HA25-520",
      "mfr": "Merck"
    },
    {
      "vaccine": "PCV15 (4th dose)",
      "date": "08/2024",
      "site": "Left vastus lateralis IM",
      "lot": "PC24-440",
      "mfr": "Merck"
    },
    {
      "vaccine": "Hib (4th dose)",
      "date": "08/2024",
      "site": "Right vastus lateralis IM",
      "lot": "HB24-284",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother: Eczema, allergic rhinitis, alive at 28",
    "Father: Asthma, alive at 32",
    "Maternal grandmother: T2DM, alive at 58",
    "Paternal grandfather: HTN, alive at 60"
  ],
  "socialHistory": [
    [
      "Occupation",
      "N/A — 2-year-old; attends daycare 5 days/week"
    ],
    [
      "Marital",
      "N/A — lives with both parents"
    ],
    [
      "Tobacco",
      "N/A — no secondhand smoke exposure in home (mother reports father smokes outside only)"
    ],
    [
      "Alcohol",
      "N/A"
    ],
    [
      "Drugs",
      "N/A"
    ],
    [
      "Exercise",
      "N/A — active toddler; outdoor play daily at daycare"
    ],
    [
      "Housing",
      "Apartment with parents and 4-month-old baby sister; no pets; carpet in bedrooms"
    ],
    [
      "Safety",
      "Rear-facing car seat; cabinet locks; pool fence at apartment complex; peanut-free daycare classroom; EpiPen at daycare and home"
    ],
    [
      "Advance Directive",
      "N/A — parents are medical decision-makers"
    ]
  ],
  "meta": {
    "caseId": "staphylococcal-scalded-skin-syndrome",
    "diagnosis": "Staphylococcal Scalded Skin Syndrome (SSSS)",
    "acuity": 2,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "dermatologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mateo Fernandez is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
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
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started My little boy has been really cranky for two days now and keeps pulling at his r.'",
      "character": "'It's skin / soft tissue emergency — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Staphylococcal Scalded Skin Syndrome.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Amoxicillin 400mg/5mL — 5 mL BID x 10 days; Cetirizine (Zyrtec) 2.5 mL daily; Hydrocortisone 1% cream — topical PRN; Epinephrine Auto-Injector (EpiPen Jr) 0.15 mg.'",
      "allergies": "'My allergies are Peanut.'",
      "family": "Mother: Eczema, allergic rhinitis, alive at 28  Father: Asthma, alive at 32  Maternal grandmother: T2DM, alive at 58",
      "social": "Occupation: N/A — 2-year-old; attends daycare 5 days/week  Marital: N/A — lives with both parents  Tobacco: N/A — no secondhand smoke exposure in home (mother reports father smokes outside only)  Alcohol: N/A  Drugs: N/A"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Vital signs review",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Extremity assessment",
      "Skin examination",
      "Targeted system examination"
    ],
    "examFindings": {
      "General appearance and level of distress": "Clinical finding consistent with Staphylococcal Scalded Skin Syndrome. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Staphylococcal Scalded Skin Syndrome. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Staphylococcal Scalded Skin Syndrome. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Staphylococcal Scalded Skin Syndrome. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Staphylococcal Scalded Skin Syndrome. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Staphylococcal Scalded Skin Syndrome. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Staphylococcal Scalded Skin Syndrome. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Staphylococcal Scalded Skin Syndrome. Document specifically what you observe."
    },
    "ddxTargets": [
      "Staphylococcal Scalded Skin Syndrome (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Staphylococcal Scalded Skin Syndrome, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Staphylococcal Scalded Skin Syndrome, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Staphylococcal Scalded Skin Syndrome based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Mateo Fernandez's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Staphylococcal Scalded Skin Syndrome (SSSS — Generalized Exfoliation in 2-Year-Old with Eczema and Recurrent Staphylococcal Colonization, Positive Nikolsky Sign). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: staphylococcal scalded skin syndrome (SSSS) with generalized exfoliation in a 2-year-old child with eczema and positive Nikolsky sign. Key learning: (1) SSSS is a toxin-mediated exfoliative dermatitis caused by exfoliative toxins A and B (ETA, ETB) produced by Staphylococcus aureus. The toxins are serine proteases that cleave desmoglein-1 in the superficial epidermis (granular layer), causing superficial blistering and exfoliation. Predominantly affects children under 5 (especially infants and neonates) due to immature renal clearance of toxin and lack of antibody; adults affected almost exclusively have renal failure or immunocompromise. Mortality in children is low (2-5%) with modern treatment; adults have much higher mortality (up to 60%). (2) Presentation. Prodrome: fever, irritability, malaise, sore throat, conjunctivitis. Characteristic skin findings: diffuse tender erythema (starts around the face, neck, axillae, groin), rapidly progressing to flaccid bullae that rupture leaving denuded 'scalded' areas. NIKOLSKY SIGN positive — gentle lateral pressure on skin causes separation of the superficial epidermis. Mucous membranes are characteristically SPARED (distinguishes from Stevens-Johnson syndrome and TEN, which involve mucosa). Flexural accentuation, perioral crusting ('radial fissures around mouth'), and peri-orifice crusting are typical. (3) Differential diagnosis. (a) Toxic epidermal necrolysis (TEN)/Stevens-Johnson syndrome — drug-induced, MUCOSAL involvement, full-thickness epidermal necrosis (biopsy shows subepidermal split at basement membrane, whereas SSSS is intraepidermal at granular layer). SJS/TEN is drug-induced. Critical distinction because management differs (SSSS responds to antibiotics; TEN requires ICU burn-level care and drug withdrawal). (b) Kawasaki disease — fever ≥5 days plus mucosal changes, rash, peripheral changes, lymphadenopathy, conjunctivitis; treated with IVIG. (c) Scarlet fever — GAS toxin-mediated, 'sandpaper rash', strawberry tongue, does not exfoliate to the extent of SSSS. (d) Bullous impetigo — localized form of SSSS (same toxins, focal infection with local blister without systemic exfoliation). (e) Staphylococcal toxic shock syndrome — fever, hypotension, diffuse erythroderma, multi-organ involvement. Skin biopsy with immediate frozen section can rapidly distinguish SSSS (intraepidermal split) from TEN (subepidermal/basement membrane split). (4) Management. (a) IV antibiotic therapy — empiric nafcillin or oxacillin; vancomycin if MRSA suspected or severe illness; add clindamycin (suppresses toxin production — similar to its use in streptococcal toxic shock). Adjust based on cultures. Duration 7-10 days typically. (b) Supportive care — fluid and electrolyte management (can lose fluids through denuded skin like a burn), temperature control, nutrition, pain control, and meticulous wound care. (c) Do NOT use topical steroids (can worsen infection). (d) Identify and eradicate source of S. aureus — look for skin infection, nasopharyngeal colonization, surgical wound, or (in neonates) umbilical colonization. Treat close contacts with positive colonization. (e) Admission to pediatric unit or burn unit for severe cases; ICU for septic shock or extensive skin loss. (5) Healing and outcome. Because the split is superficial (intraepidermal, above the basement membrane), healing is rapid and without scarring — typically within 1-2 weeks. Contrast with TEN, where full-thickness necrosis leaves residual scarring, dyspigmentation, and potential mucosal stricturing. Classic pitfalls: (a) misdiagnosing SSSS as TEN/SJS and stopping medications unnecessarily while missing the bacterial source. (b) Missing a focal staphylococcal infection source — look for impetigo, umbilical cord infection, surgical wound, conjunctivitis (most common in neonates). (c) Not isolating the patient — SSSS is contagious (S. aureus spread), contact precautions while infectious. (d) Over-using topical antimicrobials on denuded skin — can impair healing; gentle wound care and systemic antibiotics are the priority. (e) Forgetting to consider adult SSSS in dialysis patients or other immunocompromised adults with unexplained erythroderma and exfoliation."
    }
  }
};
