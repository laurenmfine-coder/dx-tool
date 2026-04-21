
window.EMR_DATA = {
  "patient": {
    "name": "Derek Hanson",
    "patientHPI": "I haven't been able to have a bowel movement in four days even though I'm taking the stool softeners, and I've been taking a lot of those pink sleep pills at night because I can't sleep - maybe three of them most nights.",
    "dob": "05/14/1998",
    "age": 26,
    "sex": "Male",
    "mrn": "RDX-2025-71842",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL \u2014 HMO",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "CVS Pharmacy \u2014 3100 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "5881 Peachtree Rd, Denver, CO 80212",
    "phone": "(954) 555-9281",
    "email": "d.hanson98@email.com",
    "emergencyContact": {
      "name": "Patricia Hanson (Mother)",
      "phone": "(954) 555-9284"
    },
    "chiefComplaint": "Agitation and confusion"
  },
  "problems": [
    {
      "problem": "Anticholinergic toxidrome \u2014 polypharmacy-induced",
      "icd": "T44.3X1A",
      "onset": "2024",
      "status": "Active",
      "notes": "Eleanor Hayes, 78F \u2014 admitted for urinary retention, confusion, tachycardia. On oxybutynin (OAB), diphenhydramine (sleep), amitriptyline (pain), promethazine (nausea). Cumulative anticholinergic burden toxic."
    },
    {
      "problem": "Urinary retention \u2014 from anticholinergic bladder effect",
      "icd": "R33.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Bladder detrusor inhibition from anticholinergic medications \u2192 urinary retention. Catheterization provides immediate relief."
    },
    {
      "problem": "Delirium \u2014 anticholinergic CNS effects",
      "icd": "F05",
      "onset": "2024",
      "status": "Active",
      "notes": "Confusion, agitation, visual hallucinations. Central anticholinergic syndrome from blood-brain barrier penetration (especially diphenhydramine and amitriptyline)."
    }
  ],
  "medications": [
    {
      "name": "Discontinue all anticholinergic medications \u2014 IMMEDIATE",
      "sig": "Remove ALL offending agents: oxybutynin, diphenhydramine, amitriptyline, promethazine. The cumulative burden is toxic. Safer alternatives for each indication exist.",
      "prescriber": "Medicine/Geriatrics",
      "start": "STOP",
      "refills": 0,
      "status": "DISCONTINUED"
    },
    {
      "name": "Physostigmine 1-2mg IV slow push \u2014 for severe toxidrome",
      "sig": "Reversible acetylcholinesterase inhibitor \u2014 crosses BBB, reverses central anticholinergic effects. Use for life-threatening delirium, seizures, severe hyperthermia. Not routine \u2014 have atropine available.",
      "prescriber": "Medicine/Toxicology",
      "start": "2024",
      "refills": 0,
      "status": "Available \u2014 severe cases"
    },
    {
      "name": "Urinary catheterization \u2014 immediate relief",
      "sig": "Straight catheter or Foley for urinary retention. Residual volume >300mL confirms retention.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Done \u2014 450mL residual"
    }
  ],
  "allergies": [
    {
      "allergen": "Haloperidol",
      "type": "Drug",
      "reaction": "Severe akathisia and dystonic reaction (oculogyric crisis)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/21/2025",
      "bp": "148/92",
      "hr": 128,
      "rr": 20,
      "temp": "101.4\u00b0F",
      "spo2": "97%",
      "wt": "242 lbs",
      "ht": "5'11\"",
      "bmi": 33.7,
      "setting": "ED"
    },
    {
      "date": "11/12/2024",
      "bp": "132/84",
      "hr": 82,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "238 lbs",
      "ht": "5'11\"",
      "bmi": 33.2,
      "setting": "PCP Office"
    },
    {
      "date": "05/08/2024",
      "bp": "128/80",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "230 lbs",
      "ht": "5'11\"",
      "bmi": 32.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/12/2024",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Follow-up: chronic constipation, weight management, medication check",
      "hpi": "26-year-old male with schizophrenia presenting for routine follow-up. Reports worsening constipation \u2014 no BM in 4 days despite docusate and senna. Continues taking diphenhydramine 'a lot' for sleep \u2014 admits to 3 capsules (150mg) most nights. Has not seen psychiatrist in 2 months. States he takes olanzapine and benztropine 'most of the time.' No auditory hallucinations currently. Sleep poor despite diphenhydramine. Weight up 8 lbs since last visit.",
      "exam": "General: Overweight male, flat affect, poor eye contact but cooperative. HEENT: Pupils 5mm, sluggish reaction (likely anticholinergic effect). CV: RRR, no murmur. Lungs: CTA. Abdomen: Mildly distended, decreased bowel sounds, nontender. Skin: Dry. Psych: Alert, oriented, linear thought process, no overt psychosis, flat affect.",
      "assessment": "1. Chronic constipation \u2014 worsening; likely multifactorial (olanzapine + benztropine + diphenhydramine \u2014 cumulative anticholinergic burden)\n2. Excessive OTC diphenhydramine use \u2014 100-150mg nightly\n3. Schizophrenia \u2014 stable on current regimen, needs psychiatry follow-up\n4. Obesity \u2014 progressive weight gain on olanzapine",
      "plan": "1. Added MiraLAX 17g daily for constipation\n2. STRONGLY counseled to reduce diphenhydramine \u2014 maximum 50mg/night; discussed trazodone alternative with psychiatry\n3. Contacted Dr. Patel's office to schedule follow-up\n4. Metabolic screening: fasting glucose, lipid panel ordered\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "08/20/2024",
      "type": "Specialist",
      "provider": "Dr. Anita Patel, MD (Psychiatry)",
      "cc": "Medication management \u2014 schizophrenia",
      "hpi": "26-year-old male with paranoid schizophrenia established on olanzapine 20mg QHS + benztropine 2mg BID. Reports improved positive symptoms \u2014 no auditory hallucinations or paranoid ideation in 2 months. Sleep still poor \u2014 using diphenhydramine. Denies suicidal or homicidal ideation. Living independently in apartment. Working part-time at warehouse.",
      "exam": "Psych: Casually dressed, hygiene adequate. Speech: normal rate and volume. Mood: 'okay.' Affect: blunted. Thought process: linear, goal-directed. No AH/VH. No paranoid ideation. No suicidal/homicidal ideation. Insight: fair. Judgment: fair.",
      "assessment": "1. Schizophrenia \u2014 paranoid type; positive symptoms well-controlled on olanzapine 20mg\n2. Insomnia \u2014 persistent; diphenhydramine use concerning for anticholinergic load\n3. EPS prophylaxis with benztropine \u2014 no current EPS noted; could consider tapering",
      "plan": "1. Continue olanzapine 20mg QHS\n2. Continue benztropine 2mg BID \u2014 discussed taper trial at next visit\n3. Consider trazodone 50mg QHS for insomnia to replace diphenhydramine\n4. Patient declined trazodone change at this time\n5. Metabolic monitoring per APA guidelines\n6. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Anticholinergic Toxidrome",
      "results": [
        {
          "test": "Heart rate",
          "value": "118",
          "unit": "bpm",
          "ref": "60-100",
          "flag": "H"
        },
        {
          "test": "Temperature",
          "value": "38.3",
          "unit": "\u00b0C",
          "ref": "36.5-37.5",
          "flag": "H"
        },
        {
          "test": "Post-void residual (catheterization)",
          "value": "450",
          "unit": "mL",
          "ref": "<50 mL",
          "flag": "H"
        },
        {
          "test": "Anticholinergic Drug Scale (ADS) score",
          "value": "9 (4 medications \u00d7 high burden)",
          "unit": "",
          "ref": "0-3 = low risk",
          "flag": "H"
        },
        {
          "test": "ECG",
          "value": "Sinus tachycardia, QTc 470ms",
          "unit": "",
          "ref": "QTc <450ms",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL841K",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Moderna, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV892T",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "05/2023",
      "site": "Left deltoid IM",
      "lot": "TA281R",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother (age 54): Major depressive disorder, hypothyroidism",
    "Father (age 56): Alcohol use disorder \u2014 in recovery x 10 years; hypertension",
    "Maternal aunt (age 48): Bipolar disorder type I",
    "Paternal grandfather (age 82): Dementia, CAD",
    "Brother (age 29): No psychiatric history; healthy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Part-time warehouse associate; works 20 hrs/week"
    ],
    [
      "Marital",
      "Single; lives alone in apartment"
    ],
    [
      "Tobacco",
      "Cigarettes \u2014 0.5 PPD x 4 years"
    ],
    [
      "Alcohol",
      "Occasional \u2014 2-3 beers on weekends"
    ],
    [
      "Drugs",
      "Cannabis \u2014 3-4x/week for sleep; denies other substances"
    ],
    [
      "Exercise",
      "Minimal \u2014 sedentary lifestyle"
    ],
    [
      "Housing",
      "Apartment; subsidized housing program"
    ],
    [
      "Safety",
      "No firearms; occasional SI in past (2021) but denies current; safety plan in place"
    ],
    [
      "Advance Directive",
      "None"
    ]
  ],
  "meta": {
    "caseId": "anticholinergic-toxicity",
    "diagnosis": "Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden",
    "acuity": 2,
    "presentation": "Psychiatric Emergency",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Derek appears confused and agitated, with dilated pupils and flushed skin. He is somewhat paranoid and suspicious but cooperative enough to answer questions, though his responses may be disorganized due to his altered mental status.",
    "interviewQuestions": [
      "How many diphenhydramine pills have you been taking each night?",
      "When did you start increasing the diphenhydramine dose?",
      "Are you experiencing any confusion, hallucinations, or seeing things that aren't there?",
      "Have you had any fever, hot flashes, or feeling overheated?",
      "Are you having trouble urinating or any urinary retention?",
      "Have you noticed your mouth being unusually dry?",
      "Are you experiencing any muscle stiffness or tremors?",
      "Have you been taking your schizophrenia medication as prescribed?",
      "When did the constipation start getting worse?",
      "Are you having any chest pain, palpitations, or racing heart?",
      "Have you used any other medications or substances recently?",
      "Are you experiencing any nausea or abdominal pain?",
      "Have you had any seizures or muscle twitching?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating right now. Can you repeat that?",
      "onset": "The constipation got really bad about four days ago, and I've been feeling hot and confused since yesterday. I started taking more of the pink pills about a week ago.",
      "character": "I feel really hot and dry, my heart is racing, and everything seems blurry. I can't think straight and I feel like people are watching me.",
      "location": "My whole body feels hot and I have a headache. My stomach hurts from not being able to go to the bathroom.",
      "severity": "The confusion is really bad, maybe 8 out of 10. I can barely focus and I'm scared something is really wrong with me.",
      "aggravating": "Being in bright lights makes me feel worse, and trying to think hard makes the confusion worse.",
      "relieving": "Nothing really helps. I tried drinking water but my mouth stays dry.",
      "associated": "I can't pee very well either, and my vision is blurry. I feel like my skin is burning up but I'm not sweating.",
      "denies": "I haven't had any seizures or chest pain, but I do feel like my heart is going really fast.",
      "history": "I've never felt like this before. Sometimes I get side effects from medications but nothing this bad.",
      "medications": "Olanzapine 20mg QHS; Benztropine 2mg BID; Diphenhydramine 50mg QHS PRN; Docusate Sodium 100mg BID; Senna 8.6mg QHS PRN",
      "allergies": "Haloperidol",
      "family": "My mom has depression and my dad had drinking problems. My aunt has bipolar disorder but nobody's had anything like this.",
      "social": "I work part-time at a warehouse, live alone, smoke about half a pack a day, drink a few beers on weekends, and use marijuana to help me sleep."
    },
    "examManeuvers": [
      "Pupillary examination",
      "Skin examination for diaphoresis and flushing",
      "Mental status examination",
      "Cardiac examination and rhythm assessment",
      "Neurological examination for tremor and rigidity",
      "Abdominal examination",
      "Mucous membrane examination",
      "Temperature assessment",
      "Blood pressure and heart rate monitoring",
      "Assessment for urinary retention"
    ],
    "examFindings": {
      "Pupillary examination": "Pupils are markedly dilated (6mm) and poorly reactive to light bilaterally",
      "Skin examination for diaphoresis and flushing": "Skin is hot, dry, and flushed with absence of sweating despite elevated temperature",
      "Mental status examination": "Patient is confused, disoriented to time and place, with altered mental status and mild agitation",
      "Cardiac examination and rhythm assessment": "Tachycardic with regular rhythm, no murmurs, but heart rate consistently >120 bpm",
      "Neurological examination for tremor and rigidity": "Mild tremor present, decreased muscle tone, hyperreflexia in lower extremities",
      "Abdominal examination": "Distended abdomen with decreased bowel sounds, consistent with ileus",
      "Mucous membrane examination": "Mucous membranes are notably dry with decreased salivation",
      "Temperature assessment": "Elevated temperature 101.4\u00b0F with hot, dry skin",
      "Blood pressure and heart rate monitoring": "Hypertensive at 148/92 with persistent tachycardia at 128 bpm",
      "Assessment for urinary retention": "Palpable bladder distension with patient reporting difficulty urinating"
    },
    "ddxTargets": [
      "Anticholinergic toxidrome \u2014 cumulative burden (correct)",
      "Sepsis with delirium \u2014 fever + tachycardia could suggest; but medication list and dry skin/urinary retention pattern",
      "Serotonin syndrome \u2014 hyperreflexia, clonus, diaphoresis; NOT dry skin; different toxidrome",
      "Neuroleptic malignant syndrome \u2014 severe rigidity, hyperthermia; recent antipsychotic; different",
      "Delirium from other cause \u2014 UTI, hypoxia, metabolic; but medication list is the key finding here"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on psychiatric history and assuming symptoms are related to schizophrenia exacerbation rather than medication toxicity",
      "prematureClosure": "May prematurely diagnose psychiatric decompensation without fully exploring the medication history and anticholinergic side effects",
      "availabilityBias": "Recent cases of psychiatric emergencies may overshadow recognition of toxicological causes in patients with known mental illness"
    },
    "coachPrompts": {
      "phase2": "Consider the constellation of symptoms Derek is presenting with - altered mental status, hyperthermia, and autonomic instability. What medication-related causes should you explore given his psychiatric medication regimen?",
      "phase5": "You've identified classic anticholinergic findings - hot, dry skin, dilated pupils, altered mental status, and urinary retention. How does Derek's medication history, particularly his self-reported increase in diphenhydramine use, fit with these examination findings?",
      "finalDebrief": "This case illustrates anticholinergic toxidrome from cumulative medication effects. Derek's combination of prescribed anticholinergics (benztropine, olanzapine) plus self-medication with excessive diphenhydramine created a perfect storm. Remember the anticholinergic mnemonic: 'blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone.' How will you counsel patients about over-the-counter medication interactions?",
      "final": "Diagnosis: anticholinergic toxidrome from cumulative drug burden. Key learning: (1) Anticholinergic mnemonic: 'Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter, full as a flask.' Hot (hyperthermia), blind (mydriasis), dry (dry skin, dry mouth, decreased secretions), red (flushing), mad (delirium, agitation), full (urinary retention). (2) Cumulative anticholinergic burden: single medications at therapeutic doses may not cause toxidrome; multiple medications with anticholinergic properties combined can cause severe toxicity. Beers Criteria lists medications to avoid in elderly \u2014 diphenhydramine, oxybutynin, amitriptyline, and promethazine are all high on this list. (3) Anticholinergic vs cholinergic toxidrome distinction: anticholinergic = dry skin, urinary retention, no secretions. Cholinergic (organophosphate) = SLUDGE (salivation, lacrimation, urination, defecation, GI distress, emesis) + diaphoresis. (4) Physostigmine: reverses central and peripheral anticholinergic effects. Reserved for severe cases \u2014 seizures, severe agitation, hemodynamic compromise. Have atropine at bedside (physostigmine can cause cholinergic crisis if overdosed). (5) QTc prolongation: amitriptyline and many antipsychotics prolong QTc via sodium channel blockade \u2014 monitor ECG and avoid other QTc-prolonging agents."
    }
  }
};
