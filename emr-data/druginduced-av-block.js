
window.EMR_DATA = {
  "patient": {
    "name": "Miriam Goldstein",
    "patientHPI": "I've been managing my heart rhythm problems pretty well - I can still do my housework and walk a few blocks without too much trouble. Lately though, I've been feeling more tired than usual and sometimes dizzy, especially when I stand up quickly.",
    "dob": "06/30/1948",
    "age": 77,
    "sex": "Female",
    "mrn": "RDX-2025-54382",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Aetna Supplement",
    "pcp": "Dr. Patricia Coleman, MD",
    "pharmacy": "CVS Pharmacy \u2014 5200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "6553 Clover St, San Antonio, TX 78207",
    "phone": "(954) 555-6148",
    "email": "m.goldstein48@email.com",
    "emergencyContact": {
      "name": "Rebecca Stein (Daughter)",
      "phone": "(954) 555-6162"
    },
    "chiefComplaint": "Nausea and feeling slow for a week"
  },
  "problems": [
    {
      "problem": "Complete AV block \u2014 digoxin toxicity",
      "icd": "T46.0X1A",
      "onset": "2024",
      "status": "Active",
      "notes": "Henry Morrison, 74M \u2014 CKD stage 3, on digoxin 0.25mg daily for AF. Now GCS 12, bradycardia rate 34, nausea/vomiting, visual disturbances (yellow-green halos). Dig level 4.2 ng/mL (toxic). Complete heart block."
    },
    {
      "problem": "CKD accumulation \u2014 digoxin is renally cleared",
      "icd": "T46.0X1A",
      "onset": "2024",
      "status": "Active",
      "notes": "Digoxin is renally excreted unchanged. CKD \u2192 reduced clearance \u2192 accumulation. Also acute AKI (dehydration this week) further reduced clearance. Classic scenario: stable patient becomes toxic with intercurrent illness."
    },
    {
      "problem": "Hypokalemia \u2014 potentiates digoxin toxicity",
      "icd": "E87.6",
      "onset": "2024",
      "status": "Active",
      "notes": "K 3.1 mEq/L. Hypokalemia potentiates digoxin toxicity \u2014 low potassium increases digoxin binding to Na-K-ATPase. Correct potassium as part of treatment."
    }
  ],
  "medications": [
    {
      "name": "Digoxin-specific antibody fragments (DigiFab) \u2014 IMMEDIATE",
      "sig": "Specific antidote for digoxin toxicity. Dose calculation: [dig level (ng/mL) \u00d7 weight (kg)] / 100 = vials of DigiFab. Or empiric 10 vials for acute severe toxicity. Onset within 30 minutes. Reverses all cardiac and extracardiac toxicity.",
      "prescriber": "Emergency/Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Transcutaneous pacing \u2014 bridge to DigiFab",
      "sig": "Temporary pacing for hemodynamic compromise while DigiFab is being prepared. Atropine often ineffective in high-degree AV block from digoxin.",
      "prescriber": "Emergency/Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 bridge"
    },
    {
      "name": "Potassium replacement \u2014 IV KCl",
      "sig": "Target K+ 4.0-5.0 mEq/L. Correction of hypokalemia reduces digoxin-Na-K-ATPase binding. Give IV in monitored setting (arrhythmia risk if too fast).",
      "prescriber": "Emergency",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 IV KCl"
    }
  ],
  "allergies": [
    {
      "allergen": "Amiodarone",
      "type": "Drug",
      "reaction": "Thyroid toxicity (amiodarone-induced thyrotoxicosis, 2017)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Sulfa Drugs",
      "type": "Drug",
      "reaction": "Urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2026",
      "bp": "96/58",
      "hr": 38,
      "rr": 18,
      "temp": "97.8\u00b0F",
      "spo2": "94%",
      "wt": "152 lbs",
      "ht": "5'4\"",
      "bmi": 26.1,
      "setting": "ED"
    },
    {
      "date": "11/18/2025",
      "bp": "128/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'4\"",
      "bmi": 26.4,
      "setting": "Specialist"
    },
    {
      "date": "05/20/2025",
      "bp": "132/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "156 lbs",
      "ht": "5'4\"",
      "bmi": 26.8,
      "setting": "PCP Office"
    },
    {
      "date": "11/12/2024",
      "bp": "130/74",
      "hr": 70,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'4\"",
      "bmi": 26.4,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/18/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "AFib rate control; HFpEF management",
      "hpi": "77-year-old female with persistent AFib and HFpEF for follow-up. Reports good rate control \u2014 no palpitations. Mild exertional dyspnea (NYHA II), stable. Able to do housework and walk 3 blocks. Weight stable. No edema. Digoxin level last checked 06/2025 was 1.0 ng/mL (therapeutic). Renal function trending downward \u2014 eGFR 36 from 42 prior year. Discussed reducing digoxin dose given declining eGFR but patient stable, so continued with close monitoring.",
      "exam": "General: NAD. CV: Irregularly irregular (AFib), rate 68. No S3. Lungs: Clear. Extremities: No edema.",
      "assessment": "1. Persistent AFib \u2014 rate controlled on diltiazem + digoxin\n2. HFpEF \u2014 stable, NYHA II\n3. CKD 3b \u2014 eGFR 36; declining; affects digoxin clearance\n4. Anticoagulation \u2014 therapeutic on apixaban",
      "plan": "1. Continue current regimen\n2. Recheck digoxin level and BMP in 3 months \u2014 consider dose reduction if eGFR declines further\n3. TSH at next visit\n4. Echo in 12 months\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "05/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Coleman, MD",
      "cc": "Chronic disease follow-up",
      "hpi": "77-year-old female for routine follow-up. Cardiac symptoms stable. Mild joint pain in hands. Thyroid stable \u2014 TSH 2.8 last check. CKD monitored. Reports no dizziness, no falls.",
      "exam": "General: NAD. CV: Irregularly irregular. Lungs: CTAB. Hands: Heberden and Bouchard nodes bilaterally. No synovitis.",
      "assessment": "1. HTN \u2014 controlled\n2. Hypothyroidism \u2014 stable\n3. OA hands \u2014 stable\n4. CKD 3b \u2014 monitoring",
      "plan": "1. Continue medications\n2. Labs: BMP, TSH, digoxin level\n3. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Digoxin Toxicity",
      "results": [
        {
          "test": "Digoxin level",
          "value": "4.2",
          "unit": "ng/mL",
          "ref": "0.5-2.0 ng/mL therapeutic",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "3.1",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "2.8",
          "unit": "mg/dL",
          "ref": "0.7-1.3 (AKI on CKD)",
          "flag": "H"
        },
        {
          "test": "ECG",
          "value": "Complete heart block, rate 34, junctional escape rhythm",
          "unit": "",
          "ref": "Normal sinus",
          "flag": "H"
        },
        {
          "test": "Magnesium",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "1.7-2.2",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/18/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD258",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/10/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-750",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "PV22-380",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "01/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-042",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-188",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Atrial fibrillation, CHF, deceased at 82",
    "Mother: Hypertension, Alzheimer's disease, deceased at 90",
    "Sister: AFib (pacemaker at 76), alive at 80",
    "No family history of sudden cardiac death"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired accountant; retired 2010"
    ],
    [
      "Marital",
      "Widowed (2022); husband deceased of dementia"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Gentle walks in neighborhood with neighbor; chair yoga 2x/week"
    ],
    [
      "Housing",
      "Condo with daughter nearby; independent ADLs"
    ],
    [
      "Safety",
      "Denies IPV; fall risk \u2014 uses grab bars in bathroom; wears medical alert device"
    ],
    [
      "Advance Directive",
      "POLST on file \u2014 Full Code; HCP: daughter Rebecca Stein"
    ]
  ],
  "meta": {
    "caseId": "druginduced-av-block",
    "diagnosis": "Drug-Induced Complete AV Block \u2014 Digoxin Toxicity with CKD",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Miriam appears mildly anxious but cooperative, speaking in measured tones about her symptoms. She's forthcoming with information but downplays her symptoms initially, typical of someone accustomed to chronic illness. She shows mild distress when discussing her recent decline in energy levels.",
    "interviewQuestions": [
      "Can you describe the fatigue you've been experiencing - when did it start and how has it progressed?",
      "Tell me more about the dizziness - when does it happen and how severe is it?",
      "Have you had any episodes of feeling like you might pass out or actually fainting?",
      "Are you experiencing any chest pain, shortness of breath, or palpitations?",
      "Have you noticed any changes in your appetite, nausea, or vision problems recently?",
      "When was your last visit with your cardiologist and any recent medication changes?",
      "Have you been taking all your medications as prescribed, including the digoxin?",
      "Have you had any recent lab work done, particularly checking your kidney function?",
      "Are you experiencing any swelling in your legs or weight gain?",
      "Have you had any confusion or memory problems lately?",
      "Any recent illnesses, dehydration, or changes in your fluid intake?",
      "Have you noticed your heart beating differently - faster, slower, or irregularly?",
      "Are you having any difficulty with activities you could normally do?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you explain that differently?",
      "onset": "The fatigue started about 2-3 weeks ago and has gotten progressively worse. The dizziness began about a week ago.",
      "character": "It's a heavy, overwhelming tiredness - different from my usual fatigue. The dizziness feels like the room is spinning briefly.",
      "location": "The fatigue is all over my body. The dizziness is in my head, sometimes with a brief feeling like I might fall.",
      "severity": "The fatigue is about a 7 out of 10 - it's really limiting what I can do. The dizziness is about a 6 when it happens.",
      "aggravating": "Standing up quickly makes the dizziness worse. Any activity makes the fatigue much worse than it used to.",
      "relieving": "Sitting down helps the dizziness. Nothing really helps the fatigue - even rest doesn't restore my energy.",
      "associated": "I've had some mild nausea and my appetite isn't great. Sometimes I feel a bit confused or forgetful.",
      "denies": "No chest pain, no fainting spells, no shortness of breath at rest, no leg swelling or weight gain.",
      "history": "I've never felt this tired before, even when my heart failure was acting up. This is different.",
      "medications": "Diltiazem ER 240mg daily; Digoxin 0.25mg daily; Apixaban 5mg BID; Furosemide 20mg daily; Levothyroxine 75mcg daily; Acetaminophen 500mg q6h PRN",
      "allergies": "Amiodarone, Sulfa Drugs",
      "family": "My father had heart problems and my sister needed a pacemaker for her atrial fibrillation when she was 76.",
      "social": "I'm a retired accountant, widowed since 2022. I live alone but manage well usually. I don't smoke or drink alcohol."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Pulse palpation and rhythm assessment",
      "Blood pressure measurement in supine and standing positions",
      "Jugular venous pressure assessment",
      "Pulmonary auscultation",
      "Lower extremity edema assessment",
      "Neurologic assessment including orientation and cognition",
      "Fundoscopic examination",
      "Abdominal examination",
      "Skin examination for color and perfusion"
    ],
    "examFindings": {
      "Cardiac auscultation": "Regular rhythm with bradycardia, normal S1 and S2, no murmurs, rubs, or gallops",
      "Pulse palpation and rhythm assessment": "Radial pulse 38 bpm, regular rhythm, good volume when present",
      "Blood pressure measurement in supine and standing positions": "Supine 96/58, standing 88/52 with mild dizziness",
      "Jugular venous pressure assessment": "JVP normal at 6 cm H2O, no cannon waves visible",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no rales or wheezes",
      "Lower extremity edema assessment": "No pedal edema, good distal pulses",
      "Neurologic assessment including orientation and cognition": "Alert and oriented x3, mild confusion with complex tasks",
      "Fundoscopic examination": "Mild arteriovenous nicking, no papilledema or hemorrhages",
      "Abdominal examination": "Soft, non-tender, no organomegaly",
      "Skin examination for color and perfusion": "Slightly pale, cool extremities, capillary refill 3 seconds"
    },
    "ddxTargets": [
      "Digoxin toxicity \u2014 complete heart block (correct)",
      "Beta-blocker/CCB overdose \u2014 AV block; different drug history; calcium or glucagon as antidote",
      "Hyperkalemia-induced AV block \u2014 K+ normal or elevated (not low); peaked T waves; different history",
      "Lyme carditis \u2014 endemic area; rash; Lyme serology; different context",
      "Idiopathic degenerative AV block \u2014 no drug cause; permanent pacemaker indicated"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on heart failure exacerbation given her established HFpEF, missing the medication toxicity component",
      "prematureClosure": "May stop at 'elderly patient with known heart disease having fatigue' without considering drug levels and interactions",
      "availabilityBias": "Recent cases of heart failure may overshadow consideration of digoxin toxicity, which is less commonly seen"
    },
    "coachPrompts": {
      "phase2": "Good differential thinking. Given her medication regimen and kidney disease history, what specific drug interactions or toxicities should you be most concerned about in an elderly patient? How might her renal function impact her current medications?",
      "phase5": "Excellent history and physical. You found bradycardia with fatigue and mild confusion in a patient on both digoxin and diltiazem with known CKD. What's the next most important step in your evaluation, and what specific lab values would help differentiate your top differentials?",
      "finalDebrief": "This case highlights how chronic kidney disease can lead to drug accumulation over time. Notice how the combination of digoxin and diltiazem in the setting of declining renal function created a perfect storm for toxicity. The key learning point is always considering medication toxicity in elderly patients with multiple cardiac drugs, especially when renal function may be declining.",
      "final": "Diagnosis: digoxin toxicity with complete heart block. Key learning: (1) Digoxin toxicity signs: cardiac (bradyarrhythmias, AV block, junctional tachycardia, bidirectional VT \u2014 the most characteristic) and extracardiac (nausea/vomiting, visual disturbances including xanthopsia/yellow-green vision, confusion). The visual symptoms are pathognomonic. (2) CKD + digoxin = toxicity risk: digoxin is renally cleared unchanged. Any acute reduction in GFR (dehydration, AKI, NSAID use) \u2192 digoxin accumulation. Digoxin dose must be reduced in CKD (0.125mg QOD or less). (3) Hypokalemia potentiates digoxin: digoxin inhibits Na-K-ATPase. Hypokalemia increases binding affinity. Diuretics given for AF cause hypokalemia \u2192 digoxin toxicity even at therapeutic levels. Always correct K+ in digoxin toxicity. (4) DigiFab (digoxin-specific Fab fragments): the specific antidote. Dose by formula or empirically. Onset 30 minutes. Works by binding free digoxin \u2192 removes from receptors. After DigiFab: total digoxin level rises (bound to Fab, not active) \u2014 do not re-dose based on level. (5) Narrow therapeutic index: digoxin therapeutic range 0.5-2.0 ng/mL. Recent evidence: target 0.5-0.9 ng/mL for HF mortality benefit. Levels >2.0 = toxicity. The toxic dose is close to the therapeutic dose \u2014 requires careful monitoring."
    }
  }
};
