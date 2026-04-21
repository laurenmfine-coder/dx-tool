// Virtual EMR Case: Mixed Overdose (Intentional — Acetaminophen + Diphenhydramine + Alcohol)
// Variant: mixed-overdose | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Brianna Torres",
    "patientHPI": "I came in for my yearly visit and things have been okay mostly, just the usual ups and downs with my mood, though I did stop going to therapy a few weeks ago because I didn't think it was really helping me.",
    "dob": "02/14/2004",
    "age": 22,
    "sex": "Female",
    "mrn": "RDX-2025-43576",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO (parent plan)",
    "pcp": "Dr. Sandra Ellis, MD",
    "pharmacy": "CVS Pharmacy — 4401 Sheridan St, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Puerto Rican American)",
    "address": "5916 Cedar Blvd, Memphis, TN 38116",
    "phone": "(954) 555-6040",
    "email": "b.torres04@email.com",
    "emergencyContact": {
      "name": "Carmen Torres (Mother)",
      "phone": "(954) 555-6058"
    }
  },
  "problems": [
    {
      "problem": "Major Depressive Disorder — Recurrent, Moderate",
      "icd": "F33.1",
      "onset": "2020",
      "status": "Active",
      "notes": "Onset during COVID pandemic isolation; on sertraline 150mg since 2022; 1 prior suicide attempt (2021) — superficial wrist lacerations; hospitalized briefly at psychiatric facility; has been in outpatient therapy but stopped 3 months ago"
    },
    {
      "problem": "Borderline Personality Disorder",
      "icd": "F60.3",
      "onset": "2021",
      "status": "Active",
      "notes": "Diagnosed during psychiatric hospitalization; chronic emotional dysregulation, unstable relationships, self-harm history; was in DBT therapy — discontinued 3 months ago"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2019",
      "status": "Active",
      "notes": "On buspirone"
    },
    {
      "problem": "Prior Suicide Attempt",
      "icd": "T14.91XA",
      "onset": "2021",
      "status": "Active",
      "notes": "Superficial bilateral wrist lacerations (03/2021) during relationship crisis; transported to ER by mother; 72-hour psychiatric hold; discharged to outpatient DBT"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 150mg daily",
      "sig": "Take 1 tablet by mouth once daily in the morning",
      "prescriber": "Dr. Nolan (Psychiatry)",
      "start": "06/2022",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Buspirone 10mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Nolan (Psychiatry)",
      "start": "09/2021",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Ortho Tri-Cyclen Lo (norgestimate-ethinyl estradiol) daily",
      "sig": "Take 1 tablet by mouth daily per pack directions",
      "prescriber": "Dr. Ellis",
      "start": "01/2023",
      "refills": 11,
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
      "date": "02/24/2026",
      "bp": "98/58",
      "hr": 118,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "95%",
      "wt": "126 lbs",
      "ht": "5'4\"",
      "bmi": 21.6,
      "setting": "ED"
    },
    {
      "date": "09/22/2025",
      "bp": "112/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "128 lbs",
      "ht": "5'4\"",
      "bmi": 22,
      "setting": "PCP Office"
    },
    {
      "date": "03/12/2025",
      "bp": "108/66",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "130 lbs",
      "ht": "5'4\"",
      "bmi": 22.3,
      "setting": "Psychiatry Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Ellis, MD",
      "cc": "Annual wellness, medication refills",
      "hpi": "21F with MDD, BPD, GAD presents for annual wellness visit. Reports mood has been 'okay' — some 'ups and downs' but managing. Sertraline 150mg tolerated. Buspirone helps with anxiety. Denies SI, self-harm, or substance use. Reports she stopped DBT therapy 'a few weeks ago' because she felt she 'didn't need it anymore' and her therapist 'didn't understand.' Relationship with boyfriend is strained. Working part-time as barista. Living with mother.",
      "exam": "NAD. Thin young female, appropriate affect but flat at times. CV: RRR. Lungs: CTAB. Skin: Healed linear scars on bilateral volar wrists (from 2021); no new lesions. Psych: Euthymic today; denies current SI/HI; good eye contact; organized thought process.",
      "assessment": "1. MDD — partially treated; therapy discontinuation is concerning given BPD and prior SA\n2. BPD — DBT discontinued; risk factor for crisis without ongoing skills training\n3. GAD — managed\n4. Prior SA — monitor; safety plan reviewed",
      "plan": "1. Continue sertraline 150mg, buspirone 10mg BID\n2. STRONGLY encouraged resuming DBT therapy — provided 3 referrals\n3. Reviewed safety plan — patient identified mother and best friend as supports; 988 Suicide & Crisis Lifeline discussed\n4. Lethal means counseling: mother advised to secure medications and firearms at home\n5. Psychiatry follow-up scheduled with Dr. Nolan in 4 weeks\n6. Return 6 months or sooner if concerns"
    },
    {
      "id": "V002",
      "date": "03/12/2025",
      "type": "Psychiatry",
      "provider": "Dr. Brian Nolan, MD (Psychiatry)",
      "cc": "Follow-up MDD, BPD, medication management",
      "hpi": "21F with MDD, BPD, GAD, prior SA presents for quarterly psychiatry follow-up. Mood 'more stable' — in DBT group therapy, finding it helpful. Sertraline 150mg — no side effects. Relationship with boyfriend still turbulent but using DBT skills. Denies SI, self-harm. PHQ-9: 12 (moderate depression). GAD-7: 8 (mild anxiety). Sleeping well. Appetite okay.",
      "exam": "Appropriate appearance and grooming. Cooperative. Affect: Full range, mildly anxious. Thought process: Linear, goal-directed. Thought content: No SI, HI, or psychotic symptoms. Judgment: Fair. Insight: Improving.",
      "assessment": "1. MDD — partially remitted on sertraline 150mg; PHQ-9 12\n2. BPD — engaging in DBT; functional improvement\n3. GAD — mild on buspirone",
      "plan": "1. Continue sertraline 150mg, buspirone 10mg BID\n2. Continue DBT group therapy\n3. Return 3 months"
    }
  ],
  "labs": [
    {
      "date": "09/22/2025",
      "time": "10:00",
      "orderedBy": "Dr. Ellis",
      "collected": "09/22/2025 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800922",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "86",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "12",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.7",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "HEPATIC PANEL",
          "results": [
            {
              "test": "ALT",
              "value": "18",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST",
              "value": "20",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            },
            {
              "test": "Total Bilirubin",
              "value": "0.6",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "6.4",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "268",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
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
      "site": "Left deltoid IM",
      "lot": "FL25-8944",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2048",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "TD22-510",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — Series Complete",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "HP19-448",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY Booster",
      "date": "2022",
      "site": "Right deltoid IM",
      "lot": "MN22-394",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother: Depression, anxiety, alive at 48",
    "Father: Alcohol use disorder (estranged; left family when patient was 8), alive at 52",
    "Maternal grandmother: Bipolar disorder, suicide attempt (survived), alive at 72",
    "Half-brother (paternal): Unknown medical history; no contact"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Part-time barista at coffee shop; community college student (stopped attending classes 2 months ago)"
    ],
    [
      "Marital",
      "Single; recent breakup with boyfriend (1 week ago) — described as 'volatile' relationship"
    ],
    [
      "Tobacco",
      "Social vaping (JUUL) — 'a few times a week'"
    ],
    [
      "Alcohol",
      "Increasing — reports drinking wine 'a few glasses' most evenings over past month; tonight's ingestion included approximately half a bottle of vodka"
    ],
    [
      "Drugs",
      "Denies illicit drugs; occasional marijuana edibles ('a couple times a month')"
    ],
    [
      "Exercise",
      "None currently"
    ],
    [
      "Housing",
      "Lives with mother in townhouse; recently moved back in after breakup with boyfriend"
    ],
    [
      "Safety",
      "Prior suicide attempt (2021); tonight's presentation is an intentional overdose; safety plan was in place but patient did not use it"
    ],
    [
      "Advance Directive",
      "None — not discussed (age 22)"
    ]
  ],
  "meta": {
    "caseId": "mixed-overdose",
    "diagnosis": "Intentional Mixed Overdose (Acetaminophen + Diphenhydramine + Alcohol) with Suicidal Intent",
    "acuity": 1,
    "presentation": "Toxicologic Emergency",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Brianna appears emotionally labile with alternating periods of tearfulness and flat affect, demonstrating poor eye contact and psychomotor agitation. She is initially guarded about the intentional nature of her ingestion but becomes more forthcoming when approached with empathy, expressing significant distress about her recent breakup and feelings of hopelessness.",
    "interviewQuestions": [
      "Can you tell me exactly what happened tonight and what brought you to the emergency department?",
      "What medications or substances did you take tonight, and approximately how much?",
      "What time did you take these substances?",
      "Was this intentional, and if so, what were you hoping to achieve?",
      "Have you had any thoughts of hurting yourself or others recently?",
      "Can you tell me about your mood over the past few weeks or months?",
      "Have you experienced any nausea, vomiting, or abdominal pain since taking these substances?",
      "Are you experiencing any drowsiness, confusion, or changes in your vision?",
      "Tell me about the recent breakup you mentioned - how has that affected you?",
      "Have you attempted to hurt yourself before?",
      "Are you currently taking any prescribed medications?",
      "How much alcohol do you typically drink, and how much did you have tonight?",
      "Do you have any drug allergies I should know about?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing right now... can you ask me that again?",
      "onset": "It was around 9 PM tonight... I took everything at once after my ex called me and said some really hurtful things. I just couldn't take it anymore.",
      "character": "I feel really dizzy and my heart is racing. My mouth is so dry and I keep feeling like I might throw up but I haven't yet.",
      "location": "My stomach hurts right here in the upper part, and I have this pounding headache that won't go away.",
      "severity": "The emotional pain is like a 10 out of 10... I just wanted it to stop. Physically I'd say maybe a 6 or 7 - I feel really sick.",
      "aggravating": "Thinking about him, about how worthless I am... bright lights make my head pound worse. Moving around makes me more dizzy.",
      "relieving": "Nothing helps the emotional pain... I tried sleeping pills before but tonight I just took everything I could find.",
      "associated": "I'm really thirsty but drinking makes me nauseous. I feel confused and my vision seems a little blurry. I can't stop my hands from shaking.",
      "denies": "I haven't thrown up yet, no chest pain, no trouble breathing really except my heart racing. No fever or chills.",
      "history": "I tried to overdose about two years ago with just my antidepressants, but my roommate found me and brought me to the hospital. I've been in therapy on and off since then.",
      "medications": "Sertraline 150mg daily; Buspirone 10mg BID; Ortho Tri-Cyclen Lo (norgestimate-ethinyl estradiol) daily",
      "allergies": "NKDA",
      "family": "My mom has depression like me, and my grandmother actually tried to kill herself once too when I was little. My dad is an alcoholic and left us when I was 8.",
      "social": "I work part-time at a coffee shop and was going to community college but stopped going to classes about two months ago. I've been drinking more wine lately, especially after the breakup. Tonight I drank about half a bottle of vodka with the pills."
    },
    "examManeuvers": [
      "Vital signs assessment and orthostatic measurements",
      "Mental status examination and Glasgow Coma Scale",
      "HEENT examination for anticholinergic signs",
      "Cardiac examination",
      "Abdominal examination for hepatic tenderness",
      "Neurological examination including reflexes",
      "Skin examination for diaphoresis or flushing",
      "Pupillary examination",
      "Assessment for nystagmus",
      "Suicide risk assessment and mental health evaluation"
    ],
    "examFindings": {
      "Vital signs assessment and orthostatic measurements": "BP 98/58 lying, 88/52 standing with HR increase from 118 to 135, indicating volume depletion and possible toxicity",
      "Mental status examination and Glasgow Coma Scale": "GCS 14 (E4V4M6), mildly confused with slow responses, oriented to person and place but uncertain of time",
      "HEENT examination for anticholinergic signs": "Dry mucous membranes, dilated pupils (5mm bilaterally), minimal response to light, flushed face",
      "Cardiac examination": "Tachycardic regular rhythm, no murmurs, gallops, or rubs appreciated",
      "Abdominal examination for hepatic tenderness": "Mild epigastric tenderness, no hepatomegaly appreciated on palpation, bowel sounds hypoactive",
      "Neurological examination including reflexes": "Reflexes symmetrically diminished, mild tremor of hands, no focal deficits, gait unsteady",
      "Skin examination for diaphoresis or flushing": "Warm, dry skin with flushing consistent with anticholinergic toxidrome",
      "Pupillary examination": "Pupils dilated at 5mm bilaterally with sluggish light response",
      "Assessment for nystagmus": "No nystagmus present, but patient reports mild blurred vision",
      "Suicide risk assessment and mental health evaluation": "High suicide risk with ongoing ideation, poor insight, recent stressor, prior attempt, impulsive personality features"
    },
    "ddxTargets": [
      "Intentional Mixed Overdose (Acetaminophen ~15g + Diphenhydramine ~1.5g + Alcohol — Suicidal Intent in Patient with MDD, BPD, Prior SA, and Recent Relationship Crisis; Rumack-Matthew Nomogram Indicates NAC Treatment Required) (correct diagnosis)",
      "Anticholinergic toxidrome from diphenhydramine overdose alone",
      "Acute alcohol intoxication with concurrent psychiatric crisis",
      "Acetaminophen poisoning requiring immediate NAC therapy",
      "Serotonin syndrome from medication interaction",
      "Acute psychotic episode or manic episode",
      "Sepsis or other infectious process with altered mental status"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on psychiatric history and missing the serious toxicologic emergency requiring immediate antidote therapy",
      "prematureClosure": "May focus only on suicide risk assessment without fully evaluating the specific substances ingested and their treatment requirements",
      "availabilityBias": "Recent cases of simple overdose or psychiatric presentations may overshadow the complexity of this mixed ingestion requiring specific antidotes"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Before you interview the patient, think about what specific information you need to risk-stratify this overdose. What details about timing, quantity, and specific substances will be crucial for your management decisions?",
      "phase5": "You've identified concerning anticholinergic signs and a history of mixed ingestion. What's your next step in determining the severity of each component of this overdose? How will you decide which antidotes or treatments are needed urgently?",
      "finalDebrief": "This case highlights the complexity of mixed overdoses requiring multiple treatment considerations. How did your differential evolve from a general overdose to recognizing the specific need for NAC therapy? What clues helped you identify the anticholinergic toxidrome, and how do you balance acute medical management with psychiatric safety concerns?",
      "final": "Diagnosis: intentional mixed overdose with acetaminophen (~15 g), diphenhydramine (~1.5 g), and ethanol in a patient with suicidal intent. Key learning: (1) Approach to the undifferentiated overdose patient: ABCs first, then aggressive supportive care, then antidote-specific therapy. Initial workup: vital signs including temperature (cool patient in hypothermia, hot in anticholinergic, sympathomimetic), accucheck glucose, pupils (mydriasis in anticholinergic/sympathomimetic/opioid withdrawal; miosis in opioid/cholinergic/clonidine), skin (dry in anticholinergic, diaphoretic in sympathomimetic/cholinergic/opioid withdrawal), mental status, bowel sounds, and toxidrome pattern recognition. Get ECG (QRS widening, QT prolongation), ABG, BMP (anion gap), lactate, acetaminophen level, salicylate level, ethanol level, urine drug screen (limited but sometimes useful), pregnancy test in women, and CPK/troponin if prolonged down-time. (2) Acetaminophen toxicity is dose-dependent and often underrecognized because the early course is deceptively benign. Stages: Stage 1 (0-24h) — nausea, vomiting, malaise, or asymptomatic. Stage 2 (24-72h) — RUQ pain, rising transaminases and INR as hepatocellular injury manifests. Stage 3 (72-96h) — peak hepatotoxicity, possible acute liver failure, hepatic encephalopathy, coagulopathy. Stage 4 — recovery or death. Draw level at 4 hours post-ingestion (or now if ingestion time unknown) and plot on the Rumack-Matthew nomogram to determine need for N-acetylcysteine (NAC). In single time-point ingestions, NAC is indicated for level above the treatment line. Mass ingestion, staggered ingestion, unknown time, or extended-release formulation often gets empiric NAC regardless of nomogram. NAC dosing: IV 21-hour protocol (150 mg/kg bolus, 50 mg/kg over 4 hours, 100 mg/kg over 16 hours) or oral 72-hour protocol. Extend NAC beyond 21 hours if transaminases are rising or encephalopathy develops. (3) Diphenhydramine is anticholinergic and sodium-channel blocking at high doses. Anticholinergic toxidrome: 'hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter' — hyperthermia, dry skin and mucosa, flushing, mydriasis, urinary retention, ileus, altered mental status with agitation or hallucinations, and tachycardia. High-dose diphenhydramine adds sodium-channel blockade: QRS widening, seizures, and ventricular arrhythmias. Treatment: supportive (cooling, benzodiazepines for agitation/seizures), sodium bicarbonate boluses for QRS widening over 100 ms or ventricular dysrhythmias, physostigmine (reverses central and peripheral anticholinergic effects) in carefully selected patients without TCA co-ingestion (contraindicated with TCAs). (4) Ethanol adds CNS depression, respiratory depression, hypoglycemia (especially in children and fasted patients), and metabolic acidosis. Check glucose repeatedly. Supportive care, monitor airway and breathing, and consider thiamine before any glucose-containing fluids in chronic alcohol use to prevent Wernicke encephalopathy. (5) Classic pitfalls: (a) stopping NAC at 21 hours in a patient with rising transaminases, ongoing encephalopathy, or massive ingestion — continue until INR and LFTs improve and encephalopathy resolves. (b) Missing delayed acetaminophen toxicity because the initial level was 'low' — in staggered ingestions, nomogram is unreliable; treat based on history and rising AST/ALT. (c) Discharging a patient who has cleared an anticholinergic toxidrome without psychiatric evaluation — every intentional overdose gets psychiatric assessment, means restriction counseling, and safety planning before discharge. (d) Forgetting universal bedside precautions: capacity evaluation, collateral history, medication reconciliation, imaging if head injury suspected, and rhabdomyolysis workup in prolonged down-time."
    }
  }
};
