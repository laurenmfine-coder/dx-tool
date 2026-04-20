
window.EMR_DATA = {
  "patient": {
    "name": "Maria Santos",
    "dob": "04/12/1968",
    "age": 57,
    "sex": "Female",
    "mrn": "RDX-2025-08471",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Angela Reyes, MD",
    "pharmacy": "CVS Pharmacy \u2014 850 Healthcare Blvd, Riverside, FL",
    "language": "English (Spanish-speaking)",
    "race": "Hispanic/Latina",
    "address": "9754 Maple St, Columbus, OH 43210",
    "phone": "(954) 555-0294",
    "email": "m.santos68@email.com",
    "emergencyContact": {
      "name": "Carlos Santos (Husband)",
      "phone": "(954) 555-0182"
    }
  },
  "problems": [
    {
      "problem": "Hypertensive emergency \u2014 BP 218/128, confusion",
      "icd": "I16.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Maria Santos, 54F \u2014 BP 218/128, confusion, visual blurring, headache. End-organ damage present: encephalopathy + retinal changes."
    },
    {
      "problem": "Hypertensive encephalopathy \u2014 confusion and visual symptoms",
      "icd": "I67.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Posterior reversible encephalopathy syndrome (PRES) on MRI \u2014 T2 hyperintensities in posterior parietal-occipital regions."
    },
    {
      "problem": "Medication non-adherence \u2014 ran out of lisinopril 2 weeks ago",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "Known hypertensive, off antihypertensives for 2 weeks. Rebound hypertension from clonidine also possible if that was the agent."
    }
  ],
  "medications": [
    {
      "name": "Nicardipine 5mg/h IV infusion \u2014 titrate to target BP",
      "sig": "Calcium channel blocker infusion \u2014 titratable. Target: reduce MAP by 25% in first hour, not more. Then gradual reduction over 24-48h.",
      "prescriber": "Medicine/ICU",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 titrating"
    },
    {
      "name": "Labetalol 20mg IV bolus q10min PRN \u2014 alternative/adjunct",
      "sig": "Alpha and beta blocker \u2014 bolus dosing for more rapid correction if nicardipine insufficient. Avoid if bronchospasm or acute decompensated HF.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active PRN"
    },
    {
      "name": "Lisinopril 10mg PO \u2014 restart home medication after IV stabilization",
      "sig": "Resume oral antihypertensive once stable and tolerating PO. Transition to oral after ICU phase.",
      "prescriber": "Medicine",
      "start": "2015",
      "refills": 5,
      "status": "Restart after IV stabilization"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Rash, urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Sulfa Drugs",
      "type": "Drug",
      "reaction": "Nausea, rash",
      "severity": "Mild",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Lip swelling, throat tightness",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Dust Mites",
      "type": "Environmental",
      "reaction": "Rhinitis, congestion",
      "severity": "Mild",
      "verified": "Yes"
    },
    {
      "allergen": "Latex",
      "type": "Contact",
      "reaction": "Contact dermatitis",
      "severity": "Mild",
      "verified": "No \u2014 per patient report"
    }
  ],
  "vitals": [
    {
      "date": "01/15/2025",
      "bp": "142/88",
      "hr": 82,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "187 lbs",
      "ht": "5'4\"",
      "bmi": 32.1,
      "setting": "PCP Office"
    },
    {
      "date": "10/03/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "185 lbs",
      "ht": "5'4\"",
      "bmi": 31.7,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2024",
      "bp": "148/92",
      "hr": 88,
      "rr": 18,
      "temp": "99.1\u00b0F",
      "spo2": "97%",
      "wt": "189 lbs",
      "ht": "5'4\"",
      "bmi": 32.4,
      "setting": "Urgent Care"
    },
    {
      "date": "04/10/2024",
      "bp": "136/84",
      "hr": 76,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "98%",
      "wt": "184 lbs",
      "ht": "5'4\"",
      "bmi": 31.6,
      "setting": "PCP Office"
    },
    {
      "date": "01/08/2024",
      "bp": "140/90",
      "hr": 80,
      "rr": 15,
      "temp": "98.5\u00b0F",
      "spo2": "99%",
      "wt": "186 lbs",
      "ht": "5'4\"",
      "bmi": 31.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/15/2025",
      "type": "Primary Care",
      "provider": "Dr. Angela Reyes, MD",
      "cc": "Follow-up: HTN, DM2, Anxiety",
      "hpi": "57-year-old female presenting for routine follow-up of hypertension, type 2 diabetes, and generalized anxiety disorder. Patient reports compliance with medications but notes occasional headaches (2-3x/week), which she attributes to stress at work. Reports intermittent dizziness when standing quickly. Blood sugars have been running 140-180 fasting per home glucometer. Denies chest pain, palpitations, SOB, vision changes, or polyuria. Anxiety has been stable on sertraline; reports improved sleep but ongoing worry about finances. Last eye exam 8 months ago \u2014 normal. Last dental visit >1 year ago.",
      "exam": "General: Well-appearing, obese female in NAD. HEENT: PERRL, EOMI, TMs clear, oropharynx clear. Neck: Supple, no LAD, no thyromegaly. CV: RRR, no murmurs/gallops/rubs. Lungs: CTAB, no wheezes/crackles. Abdomen: Soft, NT/ND, +BS, no hepatosplenomegaly. Extremities: No edema, pulses 2+ bilaterally. Neuro: A&O x3, CNs II-XII intact. Skin: Acanthosis nigricans noted at posterior neck. Psych: Pleasant, appropriate affect.",
      "assessment": "1. Essential hypertension \u2014 suboptimally controlled (142/88 today)\n2. Type 2 diabetes mellitus \u2014 A1c 7.8%, above goal\n3. Generalized anxiety disorder \u2014 stable on sertraline\n4. Obesity \u2014 BMI 32.1\n5. Orthostatic symptoms \u2014 likely related to HTN medications",
      "plan": "1. Increase lisinopril to 20mg daily (from 10mg) \u2014 recheck BP in 4 weeks\n2. Add HCTZ 12.5mg daily if BP remains elevated at follow-up\n3. Continue metformin 1000mg BID; reinforce dietary counseling; consider adding GLP-1 agonist if A1c not improved\n4. Order: CMP, lipid panel, HbA1c, urine microalbumin\n5. Referral to nutrition counseling\n6. Continue sertraline 50mg; PHQ-9 today = 8 (mild)\n7. RTC 8 weeks or sooner if symptoms worsen\n8. Discussed orthostatic precautions (rise slowly, hydrate)"
    },
    {
      "id": "V002",
      "date": "07/22/2024",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Tran, MD",
      "cc": "Headache x 3 days, nausea",
      "hpi": "57-year-old female with history of migraines presenting with 3-day history of persistent right-sided headache, throbbing in nature, rated 7/10. Associated with nausea and photophobia. Tried ibuprofen 400mg and sumatriptan without significant relief. Denies fever, neck stiffness, vision changes, weakness, or numbness. No recent head trauma. Reports increased stress at work. BP noted to be elevated at 148/92.",
      "exam": "General: Uncomfortable-appearing female, squinting under fluorescent lights. HEENT: No papilledema on fundoscopic exam, TMs clear, no sinus tenderness. Neck: Supple, no meningismus, mild bilateral trapezius tenderness. Neuro: A&O x3, CNs II-XII intact, strength 5/5 all extremities, coordination intact, gait steady. No focal deficits.",
      "assessment": "1. Migraine without aura \u2014 prolonged episode, likely stress-triggered\n2. Elevated blood pressure \u2014 148/92, in setting of pain/stress\n3. Medication overuse headache \u2014 possible contributing factor",
      "plan": "1. Ketorolac 30mg IM x1 now\n2. Ondansetron 4mg ODT x1 for nausea\n3. Rest in dark, quiet room\n4. Avoid ibuprofen >2 days/week to prevent rebound\n5. Follow up with PCP within 1 week\n6. Return if worst headache of life, fever, neck stiffness, or focal neuro deficits"
    },
    {
      "id": "V003",
      "date": "11/05/2024",
      "type": "Consultation \u2014 Endocrinology",
      "provider": "Dr. Priya Nair, MD (Endocrinology)",
      "cc": "Referral for diabetes optimization",
      "hpi": "57-year-old female referred by PCP for DM2 management. Diagnosed 2020, on metformin 1000mg BID. Most recent A1c 7.8% (goal <7%). Patient reports difficulty with dietary adherence, particularly in the evenings. Fasting glucose 140-180 per home readings. No hypoglycemic episodes. Family history significant for DM2 in mother and maternal grandmother. BMI 32.1.",
      "exam": "General: Obese female, NAD. Eyes: No retinopathy on dilated exam (per ophthalmology 05/2024). CV: RRR, no murmurs. Extremities: No ulcers, sensation intact to monofilament bilaterally. Skin: Acanthosis nigricans posterior neck and axillae.",
      "assessment": "1. Type 2 DM \u2014 suboptimally controlled on metformin monotherapy\n2. Obesity \u2014 contributing to insulin resistance\n3. Cardiovascular risk \u2014 HTN + DM2 + HLD + obesity",
      "plan": "1. Continue metformin 1000mg BID\n2. Initiate semaglutide 0.25mg SQ weekly x 4 weeks, then increase to 0.5mg\n3. Weight loss goal: 5-10% over 6 months\n4. DSME referral\n5. Recheck A1c in 3 months\n6. Target fasting glucose <130\n7. Coordinate with PCP re: HTN and lipids"
    },
    {
      "id": "V004",
      "date": "09/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Angela Reyes, MD",
      "cc": "Annual wellness visit",
      "hpi": "57-year-old female for annual wellness exam. Medication adherence reported. No new complaints. Mammogram (03/2024) \u2014 BIRADS 1. Pap \u2014 not due. Colonoscopy due (last 2019, 2 tubular adenomas). Walking 2-3x/week 20 min. Sleep 5-6 hrs/night due to worry.",
      "exam": "General: NAD, obese. Vitals: BP 138/86, HR 78. HEENT: WNL. Breast: No masses/discharge/LAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, obese, NT. Skin: No suspicious lesions. PHQ-9 = 6 (mild).",
      "assessment": "1. Annual wellness exam\n2. Chronic conditions stable (HTN, DM2, HLD, GAD)\n3. Overdue for colonoscopy (adenoma history)\n4. Suboptimal sleep duration",
      "plan": "1. Colonoscopy referral \u2014 surveillance per guidelines\n2. Immunizations: Flu given today; Tdap due\n3. DEXA ordered (postmenopausal risk)\n4. Continue current medications\n5. Sleep hygiene counseling; consider CBT-I\n6. Endocrinology referral for DM optimization\n7. RTC 3 months or PRN"
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Hypertensive Emergency Panel",
      "results": [
        {
          "test": "BMP \u2014 Creatinine",
          "value": "2.1",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "BMP \u2014 BUN",
          "value": "34",
          "unit": "mg/dL",
          "ref": "7-20",
          "flag": "H"
        },
        {
          "test": "UA \u2014 protein",
          "value": "3+",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "UA \u2014 RBC casts",
          "value": "Present",
          "unit": "",
          "ref": "Absent",
          "flag": "H"
        },
        {
          "test": "LDH",
          "value": "480",
          "unit": "U/L",
          "ref": "135-225",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.06",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "MRI Brain FLAIR",
      "indication": "Confusion, visual changes, severe hypertension",
      "findings": "Bilateral posterior parietal-occipital T2/FLAIR hyperintensities \u2014 cortical and subcortical. No restricted diffusion (not ischemic infarct). No hemorrhage.",
      "impression": "Posterior reversible encephalopathy syndrome (PRES) \u2014 hypertensive. Reversible with BP control."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/12/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-881",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-223",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "03/2015",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-441",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-607",
      "mfr": "GSK"
    },
    {
      "vaccine": "PPSV23",
      "date": "DUE \u2014 not administered",
      "site": "\u2014",
      "lot": "\u2014",
      "mfr": "\u2014"
    }
  ],
  "familyHistory": [
    "Mother: T2DM (dx 52), HTN, died 74 (CVA)",
    "Father: CAD, MI at 61, died 68",
    "Sister (54): Hypothyroidism, MDD",
    "Brother (50): Healthy",
    "Mat. Grandmother: T2DM, Breast Ca (dx 70, died 78)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Admin assistant, law firm x 12 yrs"
    ],
    [
      "Marital",
      "Married x 30 yrs"
    ],
    [
      "Children",
      "2 adult (28, 25)"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social, 1-2 glasses wine/wk"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks 2-3x/wk 20 min; sedentary"
    ],
    [
      "Diet",
      "Difficulty limiting carbs; skips breakfast"
    ],
    [
      "Housing",
      "Single-family home w/ husband"
    ],
    [
      "Stress",
      "Moderate \u2014 work, finances"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; smoke detectors"
    ],
    [
      "Advance Directive",
      "None \u2014 discussed"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Maria appears mildly anxious but cooperative, speaking in measured tones about her health concerns. She is forthcoming about her symptoms but seems somewhat worried about the increasing frequency of her headaches and whether her blood pressure medication needs adjustment.",
    "interviewQuestions": [
      "Can you describe these headaches you've been having?",
      "How often are you experiencing these headaches?",
      "Where exactly do you feel the pain in your head?",
      "On a scale of 1-10, how severe are these headaches?",
      "What seems to trigger or worsen your headaches?",
      "Have you noticed any vision changes or nausea with the headaches?",
      "How have you been managing your diabetes - any recent blood sugar issues?",
      "Have you been checking your blood pressure at home?",
      "How has your mood and anxiety been lately?",
      "Are you taking your medications as prescribed?",
      "Have you had any recent changes in your work or home stress levels?",
      "Any recent changes in your sleep pattern or diet?",
      "Have you noticed any swelling in your legs or shortness of breath?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "The headaches started becoming more frequent about 3 months ago, maybe 2-3 times per week instead of my usual migraines once or twice a month.",
      "character": "These feel different from my usual migraines - more of a constant, dull aching pressure, not the sharp throbbing I usually get.",
      "location": "It's mostly in the back of my head and neck area, sometimes wrapping around to my temples. Not like my migraines which are usually on one side.",
      "severity": "I'd say about a 6 out of 10. They're not debilitating like my migraines, but they're persistent and make it hard to concentrate at work.",
      "aggravating": "They seem worse in the mornings and when I'm stressed at work. Also noticed they're worse when I've had poor sleep.",
      "relieving": "The ibuprofen helps some, but not as much as it used to. Rest in a quiet room helps a little, but they don't completely go away like my migraines do.",
      "associated": "I've been feeling more tired lately, and sometimes a little dizzy when I stand up quickly. No nausea or vision changes like with my migraines.",
      "denies": "No chest pain, no shortness of breath, no swelling in my legs. No recent weight gain. No changes in vision or speech.",
      "history": "I've had migraines for years, but these feel completely different. My blood pressure has been well controlled until recently.",
      "medications": "Lisinopril 20mg; Metformin 1000mg; Atorvastatin 40mg; Sertraline 50mg; Cetirizine 10mg; Sumatriptan 50mg; Vitamin D3 2000 IU; Ibuprofen 400mg",
      "allergies": "Penicillin, Sulfa Drugs, Shellfish, Dust Mites, Latex",
      "family": "My mother had high blood pressure and diabetes, and she had a stroke at 74. My father had heart problems and died from a heart attack. I worry about following in their footsteps.",
      "social": "I work as an administrative assistant at a law firm for 12 years. It's been more stressful lately with staff changes. I'm married 30 years, have two adult children. I don't smoke, just have a glass or two of wine per week."
    },
    "examManeuvers": [
      "Blood pressure measurement in both arms",
      "Fundoscopic examination",
      "Cardiovascular examination",
      "Neurological examination including cranial nerves",
      "Palpation of temporal arteries",
      "Assessment of lymph nodes",
      "Thyroid examination",
      "Assessment for peripheral edema",
      "Point of maximum impulse palpation",
      "Carotid artery auscultation"
    ],
    "examFindings": {
      "Blood pressure measurement in both arms": "Right arm: 144/90 mmHg, Left arm: 142/88 mmHg",
      "Fundoscopic examination": "Mild arteriovenous nicking consistent with hypertensive changes, no papilledema or hemorrhages",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, rubs, or gallops. S1 and S2 normal.",
      "Neurological examination including cranial nerves": "Cranial nerves II-XII intact, no focal neurological deficits, reflexes 2+ and symmetric",
      "Palpation of temporal arteries": "Temporal arteries palpable, non-tender, no thickening or decreased pulsation",
      "Assessment of lymph nodes": "No lymphadenopathy in head, neck, or supraclavicular regions",
      "Thyroid examination": "Thyroid normal size, no nodules or tenderness palpated",
      "Assessment for peripheral edema": "No peripheral edema in lower extremities",
      "Point of maximum impulse palpation": "PMI at 5th intercostal space, midclavicular line, normal intensity",
      "Carotid artery auscultation": "No carotid bruits bilaterally"
    },
    "ddxTargets": [
      "Hypertensive emergency with PRES \u2014 target organ damage (correct)",
      "Hypertensive urgency \u2014 urgency has no target organ damage; this has encephalopathy + AKI",
      "Ischemic stroke \u2014 MRI no DWI restriction; PRES is posterior and diffusion-negative",
      "Eclampsia \u2014 not pregnant; but consider in reproductive-age women with PRES + HTN",
      "Posterior circulation TIA \u2014 PRES is reversible and bilateral; TIA lesions are DWI bright",
      "Hypertensive nephropathy \u2014 contributing but subacute; acute hypertensive nephrosclerosis here"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on migraine history and missing that this represents a new headache pattern secondary to worsening hypertension",
      "prematureClosure": "May prematurely attribute headaches to stress or medication overuse without fully investigating the hypertensive component",
      "availabilityBias": "Recent cases of tension headaches or migraine may overshadow consideration of hypertensive headache in a patient with known HTN"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. This patient has a known history of migraines - how might you differentiate between her usual migraine pattern and this new headache presentation? What key historical features would help you distinguish between different headache types?",
      "phase5": "You've gathered comprehensive history and physical findings. Her blood pressure is elevated at 142-144/88-90, and she describes a new headache pattern different from her usual migraines. How do these findings help narrow your differential diagnosis? What's the relationship between her headache pattern and her vital signs?",
      "finalDebrief": "This case demonstrates hypertensive headache in a patient with known essential hypertension. The key was recognizing that her new headache pattern - occipital location, morning predominance, associated with fatigue - differed significantly from her established migraine pattern. The elevated blood pressure readings supported this diagnosis. This highlights the importance of not anchoring on chronic diagnoses when patients present with new symptom patterns.",
      "final": "Diagnosis: hypertensive emergency \u2014 PRES. Key learning: (1) Hypertensive emergency definition: severely elevated BP + acute target organ damage. Organs: brain (encephalopathy, PRES, stroke), heart (ACS, acute HF), kidney (acute hypertensive nephropathy \u2014 hematuria, proteinuria, AKI), aorta (dissection), retina (flame hemorrhages, papilledema). Hypertensive urgency = severe BP WITHOUT target organ damage. (2) BP reduction rate: reduce MAP by 25% in the FIRST HOUR only. More rapid reduction risks watershed ischemia \u2014 the brain has auto-regulated to a higher set point. Over 24-48h, reduce further toward 160/100. Complete normalization occurs over days to weeks, not hours. (3) PRES: posterior reversible encephalopathy syndrome \u2014 bilateral posterior cortical/subcortical edema from failure of cerebrovascular autoregulation. T2/FLAIR bright, no DWI restriction (not infarct). Reversible with BP control. Causes: hypertension, eclampsia, immunosuppressants (calcineurin inhibitors), TTP. (4) IV agents: nicardipine (smooth, titratable) and labetalol (IV bolus or infusion) are first-line. Clevidipine (ultrashort CCB) for cardiac surgery/ICU. Sodium nitroprusside for most refractory (cyanide toxicity risk with prolonged use). AVOID oral antihypertensives acutely \u2014 uncontrolled drop. (5) Cause: non-adherence is the most common trigger for hypertensive emergency. Medication access barriers, cost, side effects \u2014 always explore."
    }
  },
  "meta": {
    "diagnosis": "Hypertensive Emergency with Target Organ Damage \u2014 Hypertensive Encephalopathy, IV Antihypertensive Titration",
    "caseId": "maria-santos"
  }
};
