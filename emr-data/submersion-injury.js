// Virtual EMR Case: Submersion Injury (Near-Drowning)
// Variant: submersion-injury | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Sofia Ramirez",
    "patientHPI": "She's been doing so well - talking up a storm with over 50 words now and even putting two words together, running around everywhere and climbing the stairs with just a little help from me. She sleeps great through the night and her skin rash has been much better lately.",
    "dob": "07/12/2022",
    "age": 2,
    "sex": "Female",
    "mrn": "RDX-2025-81394",
    "pronouns": "She/Her",
    "insurance": "Florida KidCare (Medicaid)",
    "pcp": "Dr. Amanda Torres, MD (Pediatrics)",
    "pharmacy": "Walgreens — 5200 S University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "8495 Oak Ave, Memphis, TN 38111",
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
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-813940",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "12.4",
              "unit": "x10³/µL",
              "range": "5.0-17.0 (age 1-3)",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.8",
              "unit": "g/dL",
              "range": "10.5-13.5 (age 1-3)",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "35.4",
              "unit": "%",
              "range": "33-39 (age 1-3)",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "310",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "60-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "8",
              "unit": "mg/dL",
              "range": "5-18",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.2",
              "unit": "mg/dL",
              "range": "0.2-0.4 (age 1-3)",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.5",
              "flag": ""
            }
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
      "facility": "ReasonDx Medical Center Lab",
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
    [
      "Occupation",
      "Toddler — stays home with maternal grandmother while parents work"
    ],
    [
      "Marital",
      "N/A — minor"
    ],
    [
      "Tobacco",
      "N/A; no household smokers"
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
      "Active toddler — running, climbing, outdoor play daily"
    ],
    [
      "Housing",
      "Lives with parents and older brother in single-family home WITH UNFENCED BACKYARD POOL"
    ],
    [
      "Safety",
      "Car seat — rear-facing convertible; pool safety counseled extensively; cabinet locks installed; medications out of reach"
    ],
    [
      "Advance Directive",
      "Minor — parents are legal guardians"
    ]
  ],
  "meta": {
    "caseId": "submersion-injury",
    "diagnosis": "Submersion Injury (Freshwater Near-Drowning, Pediatric)",
    "acuity": 1,
    "presentation": "Environmental Emergency",
    "category": "environmental"
  },
  "guided": {
    "supported": true,
    "patientPersona": "The maternal grandmother appears anxious and distraught, speaking rapidly with tearful eyes as she holds the quiet, clingy toddler. Sofia is alert but unusually subdued, staying close to her grandmother and not displaying her typical active behavior described in the developmental history.",
    "interviewQuestions": [
      "Can you tell me exactly what happened today?",
      "How long was Sofia underwater or submerged?",
      "What type of water was this - pool, lake, bathtub?",
      "Was Sofia unconscious at any point?",
      "Did Sofia vomit or cough up water?",
      "Has Sofia been breathing normally since the incident?",
      "How long ago did this happen?",
      "Who pulled Sofia out of the water?",
      "Was CPR performed or any rescue breathing?",
      "Has Sofia seemed different since - less active, sleepy, confused?",
      "Any chest pain or difficulty breathing?",
      "Has she been eating or drinking normally since?",
      "Any fever, chills, or other symptoms since the incident?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm so shaken up right now. Can you ask me that again? I just want to make sure Sofia is okay.",
      "onset": "It happened about 2 hours ago at the community pool. I turned away for just a second to get her towel and when I looked back, she had slipped and was face down in the shallow end.",
      "character": "She wasn't moving at first when I pulled her out, but then she coughed up a lot of water and started crying. She's been very quiet since then, not her usual chatty self.",
      "location": "It was the shallow end of the community pool, maybe 2 feet of water. She must have slipped on the wet concrete and fallen in face first.",
      "severity": "I don't know how to rate it, but I've never been so scared in my life. She's breathing fine now but she's just not acting like herself - so quiet and clingy.",
      "aggravating": "She seems more tired when she tries to run around like usual. She keeps wanting to sit on my lap instead of playing.",
      "relieving": "Holding her close seems to help her feel better. She drank some water and that seemed okay.",
      "associated": "She coughed up water right after I pulled her out, and she's had a few more coughs since. She seems a little more tired than usual but no fever.",
      "denies": "No fever, no blue lips, she's been breathing fine since we got here. No vomiting after the initial water came up. No complaints of chest pain, but she's only 2 so hard to know.",
      "history": "Never anything like this before. She's had a febrile seizure once when she was 18 months old but recovered completely from that.",
      "medications": "Hydrocortisone cream 1% PRN; Cetirizine syrup 2.5mg daily",
      "allergies": "NKDA",
      "family": "Her mother has asthma and eczema, but no family history of heart problems or lung issues. No one in the family has had any drowning incidents.",
      "social": "I watch Sofia during the day while both her parents work. We go to the community pool twice a week - she loves the water usually. No smokers in the house."
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Vital signs including oxygen saturation",
      "Pulmonary examination with auscultation",
      "Cardiac examination",
      "Neurological assessment including Glasgow Coma Scale",
      "Skin examination for cyanosis or pallor",
      "Abdominal examination",
      "Examination of oropharynx",
      "Assessment of work of breathing",
      "Temperature measurement"
    ],
    "examFindings": {
      "General appearance and mental status": "Alert, quiet 2-year-old female appearing tired but responsive to voice and visual stimuli, staying close to grandmother",
      "Vital signs including oxygen saturation": "HR 118, RR 24, SpO2 99% on room air, afebrile at 98.6°F, BP unable to obtain due to patient cooperation",
      "Pulmonary examination with auscultation": "Clear breath sounds bilaterally, no rales or rhonchi, occasional nonproductive cough",
      "Cardiac examination": "Regular rate and rhythm, no murmurs, gallops, or rubs, capillary refill <2 seconds",
      "Neurological assessment including Glasgow Coma Scale": "GCS 15 (age-appropriate), pupils equal and reactive, moving all extremities appropriately",
      "Skin examination for cyanosis or pallor": "Pink mucous membranes, no cyanosis, mild chronic eczematous changes on arms consistent with history",
      "Abdominal examination": "Soft, non-tender, no distension, normal bowel sounds",
      "Examination of oropharynx": "Moist mucous membranes, no foreign material or froth visible",
      "Assessment of work of breathing": "No retractions, nasal flaring, or accessory muscle use, breathing comfortably",
      "Temperature measurement": "98.6°F, normothermic"
    },
    "ddxTargets": [
      "Submersion Injury (Freshwater Near-Drowning, Pediatric) (correct diagnosis)",
      "Aspiration pneumonia secondary to submersion",
      "Post-hypoxic encephalopathy",
      "Acute respiratory distress syndrome (ARDS)",
      "Secondary drowning syndrome",
      "Upper respiratory infection with behavioral changes",
      "Viral syndrome with fatigue"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on normal vital signs and current stability, missing potential for delayed complications like secondary drowning or aspiration pneumonia",
      "prematureClosure": "May discharge too quickly based on current stability without considering 24-48 hour observation period needed for potential delayed respiratory complications",
      "availabilityBias": "If unfamiliar with pediatric submersion injuries, may treat as simple 'got water in lungs' rather than recognizing need for monitoring period"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider what specific details about the submersion event will help you assess severity and risk. What timeline factors and clinical signs would be most concerning in a pediatric near-drowning case?",
      "phase5": "Now that you've gathered your history and exam findings, think about the natural progression of submersion injuries. Even though Sofia appears stable now, what delayed complications should you be concerned about in the next 24-48 hours?",
      "finalDebrief": "This case illustrates the critical concept that submersion injuries can have a biphasic presentation. How did your differential diagnosis evolve from the initial presentation? What made you consider delayed complications even with normal initial findings?",
      "final": "Diagnosis: pediatric submersion injury (near-drowning) from freshwater submersion. Key learning: (1) Drowning is the process of experiencing respiratory impairment from submersion or immersion in liquid — updated 2005 definition abandons outdated terms (near-drowning, wet/dry drowning, secondary drowning) in favor of a spectrum based on outcome: fatal drowning, nonfatal drowning with or without morbidity. Leading cause of accidental death in children 1-4 years old (often in residential pools) and a significant cause in teens (often with alcohol use in natural water). Key risk factors: lack of supervision, inability to swim, alcohol/drugs, seizure disorder, long QT and other inherited arrhythmias (LQT1 particularly associated with drowning), hypoglycemia, trauma/spinal injury (diving). (2) Pathophysiology: submersion leads to reflexive breath-holding and laryngospasm, then forced inhalation of water, alveolar flooding, surfactant washout, ventilation-perfusion mismatch, and severe hypoxia. Freshwater vs saltwater differences clinically minimal — both cause hypoxemia, cerebral ischemia, and multi-organ injury. Cardiac arrest in drowning is typically asystolic from hypoxia (differs from adult sudden cardiac arrest which is often VF/VT). (3) Initial management at scene and ED. (a) Airway, breathing, oxygenation take priority — rescue breathing in the water for deeper rescue, then transport. (b) CPR per BLS/PALS with early attention to ventilation (the primary pathology is hypoxia); asystolic/bradyasystolic arrest common, follow non-shockable algorithm. (c) Spinal precautions only if trauma suspected (diving, high-energy fall into water, witnessed trauma). (d) Prolonged resuscitation is often appropriate in submersion — especially in cold water, where hypothermia may provide neuroprotection and recovery with good neurologic outcome has occurred after submersions of over an hour in very cold water. (e) In ED: supplemental oxygen or non-invasive/invasive ventilation as needed, warming for hypothermia, IV access, continuous monitoring, ABG, lactate, electrolytes, CK, CBC, CXR, ECG (look for long QT, arrhythmia). (4) Hospital management and observation. Asymptomatic patients without initial hypoxia, cyanosis, or respiratory symptoms, and with normal exam, CXR, and pulse oximetry after 4-8 hours of observation can usually be discharged with clear return precautions. Symptomatic patients (hypoxia, abnormal lung exam, altered mental status, arrhythmia) require admission. ICU for severe hypoxia, ARDS physiology, unstable vitals, or altered mental status. ARDS management: lung-protective ventilation (low tidal volume 6 mL/kg IBW, PEEP), prone positioning, neuromuscular blockade, ECMO for refractory hypoxemia. Corticosteroids and prophylactic antibiotics are NOT routine — reserved for specific indications (aspiration pneumonitis evolution to pneumonia, adrenal suppression, or other specific indication). Hypothermia protocols: rewarming to 36 C; therapeutic hypothermia as per local protocols. Neurologic monitoring: most long-term morbidity is neurologic; early EEG if seizures; serial neuro exams; consider neuroprotective interventions (head of bed, euoxia, normothermia, normal glucose). (5) Prognosis and prevention. Prognostic factors: submersion time (>10 min worse), water temperature (cold water may be neuroprotective), time to CPR, arrest rhythm on arrival, neurologic status on arrival, GCS, fixed pupils. Prevention is the highest-yield intervention: active supervision ('touch supervision' for infants and toddlers), fencing around residential pools (4-sided isolation fencing 4+ feet tall), swim lessons (for all children but doesn't substitute for supervision), CPR training, life jackets, avoiding alcohol in/around water, and addressing underlying medical risks (treatable long QT). Classic pitfalls: (a) terminating resuscitation too early in submersion/cold water — especially pediatric — prolonged resuscitation can have good outcomes. (b) Missing the 'secondary drowning' reality — patients who initially appear well but develop delayed pulmonary edema; observation period post-submersion is important. (c) Giving empiric antibiotics and steroids routinely — not evidence-based. (d) Not screening survivors for underlying arrhythmia syndromes (long QT, CPVT, Brugada) — especially in young competitive swimmers with unexplained drowning. (e) Forgetting the powerful prevention framework — outpatient discussions about supervision, fencing, and swim lessons save more lives than in-hospital care."
    }
  }
};
