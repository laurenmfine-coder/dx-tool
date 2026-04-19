
window.EMR_DATA = {
  "patient": {
    "name": "Vincent Morales",
    "dob": "02/10/1960",
    "age": 64,
    "sex": "Male",
    "mrn": "RDX-2025-16508",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Susan Kim, MD",
    "pharmacy": "CVS Pharmacy — 3451 N State Rd 7, Lauderdale Lakes, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "5125 NW 31st Ave, Fort Lauderdale, FL 33309",
    "phone": "(954) 555-1682",
    "email": "v.morales60@email.com",
    "emergencyContact": {
      "name": "Carmen Morales (Wife)",
      "phone": "(954) 555-1700"
    }
  },
  "problems": [
    {
      "problem": "Peptic Ulcer Disease",
      "icd": "K27.9",
      "onset": "2019",
      "status": "Active",
      "notes": "H. pylori positive (treated 2019); duodenal ulcer on EGD; recurrent symptoms; poor PPI compliance"
    },
    {
      "problem": "Osteoarthritis, Bilateral Knees",
      "icd": "M17.0",
      "onset": "2016",
      "status": "Active",
      "notes": "Chronic NSAID use for pain management — risk factor for PUD"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "On lisinopril; well controlled"
    },
    {
      "problem": "Tobacco Use Disorder",
      "icd": "F17.210",
      "onset": "1980",
      "status": "Active",
      "notes": "1 PPD x 44 years; risk factor for PUD"
    },
    {
      "problem": "Coronary Artery Disease",
      "icd": "I25.10",
      "onset": "2018",
      "status": "Active",
      "notes": "Non-obstructive CAD on cath 2018; on aspirin — additional ulcerogenic risk"
    }
  ],
  "medications": [
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth once daily 30 minutes before breakfast",
      "prescriber": "Dr. Kim",
      "start": "04/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Naproxen 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with food",
      "prescriber": "Dr. Kim",
      "start": "01/2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Kim",
      "start": "06/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Kim",
      "start": "03/2011",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 20mg daily",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Kim",
      "start": "06/2018",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Tramadol",
      "type": "Drug",
      "reaction": "Seizure",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "12/02/2024",
      "bp": "128/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "176 lbs",
      "ht": "5'8\"",
      "bmi": 26.8,
      "setting": "PCP Office"
    },
    {
      "date": "06/10/2024",
      "bp": "130/80",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "178 lbs",
      "ht": "5'8\"",
      "bmi": 27.1,
      "setting": "PCP Office"
    },
    {
      "date": "12/15/2023",
      "bp": "126/76",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "180 lbs",
      "ht": "5'8\"",
      "bmi": 27.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/02/2024",
      "type": "Primary Care",
      "provider": "Dr. Susan Kim, MD",
      "cc": "Knee pain worsening; refills; dyspepsia returning",
      "hpi": "64-year-old male with PUD history, OA bilateral knees, and CAD presenting with worsening knee pain and recurrent epigastric burning. Bilateral knee pain limits walking — requests continued NSAID use. Also reports epigastric burning and early satiety returning over past month. Admits to inconsistent PPI use ('I forget sometimes'). Smoking 1 PPD. On both naproxen BID and aspirin daily — dual antiplatelet/NSAID risk. Counseled extensively on NSAID risks with PUD history.",
      "exam": "General: NAD. MSK: Bilateral knee crepitus, mild effusions, limited ROM. Abdomen: Mild epigastric tenderness, no rebound, no guarding. No melena on rectal exam (guaiac negative).",
      "assessment": "1. Recurrent dyspepsia — concerning with PUD history, dual NSAID/ASA use, smoking, and poor PPI compliance\n2. OA bilateral knees — worsening\n3. HIGH RISK for GI complications: concurrent naproxen + aspirin + active smoking + PUD history + inconsistent PPI use",
      "plan": "1. STRONGLY counseled to stop naproxen — switch to acetaminophen 1000mg TID and topical diclofenac gel\n2. Patient REFUSES to stop naproxen — states 'it's the only thing that works'\n3. Increase omeprazole 20mg → 40mg daily; SET ALARM reminder for daily use\n4. H. pylori stool antigen ordered (reinfection possible)\n5. GI referral for repeat EGD if symptoms persist >4 weeks\n6. Smoking cessation counseling — patient declines\n7. WARNED: combination of naproxen + aspirin + smoking + PUD = high perforation risk"
    },
    {
      "id": "V002",
      "date": "06/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Susan Kim, MD",
      "cc": "Routine follow-up; medication refills",
      "hpi": "64-year-old male for routine follow-up. Reports knee pain manageable on naproxen. No GI symptoms currently. Taking omeprazole 'most days.' Smoking unchanged. No chest pain.",
      "exam": "Abdomen: Soft, NT. MSK: Bilateral knee crepitus, stable.",
      "assessment": "1. OA — stable on current regimen\n2. PUD — asymptomatic; continued NSAID use\n3. CAD — stable",
      "plan": "1. Continue current medications\n2. Reinforce PPI compliance\n3. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "12/02/2024",
      "time": "09:30",
      "orderedBy": "Dr. Susan Kim, MD",
      "collected": "12/02/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-165080",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Stool",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "12.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "38.4", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "MCV", "value": "78", "unit": "fL", "range": "80-100", "flag": "L" },
            { "test": "Platelet Count", "value": "274", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            { "test": "Iron", "value": "42", "unit": "µg/dL", "range": "60-170", "flag": "L" },
            { "test": "TIBC", "value": "380", "unit": "µg/dL", "range": "250-370", "flag": "H" },
            { "test": "Ferritin", "value": "18", "unit": "ng/mL", "range": "30-400", "flag": "L" }
          ]
        },
        {
          "name": "H. PYLORI",
          "results": [
            { "test": "H. pylori Stool Antigen", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2019",
      "study": "EGD (ESOPHAGOGASTRODUODENOSCOPY)",
      "accession": "IMG-2019-16508",
      "status": "FINAL",
      "orderedBy": "Dr. Patricia Lopez, MD (Gastroenterology)",
      "readBy": "Dr. Patricia Lopez, MD (Gastroenterology)",
      "facility": "ReasonDx Medical Center Endoscopy Suite",
      "priority": "Urgent",
      "clinical": "59M with epigastric pain, dyspepsia, positive H. pylori. R/O peptic ulcer disease.",
      "technique": "Upper endoscopy with sedation (midazolam/fentanyl). Scope advanced to second portion of duodenum.",
      "findings": "Esophagus: Normal mucosa. No varices, stricture, or Barrett's.\\n\\nStomach: Erythematous mucosa in antrum. No ulcer. No mass.\\n\\nDuodenum: 1.5 cm clean-based ulcer on anterior wall of duodenal bulb. No active bleeding. No visible vessel. Forrest class III. Surrounding mucosa with erythema and edema.\\n\\nBiopsies: Antral biopsies obtained for H. pylori CLO test (positive).",
      "impression": "1. Duodenal ulcer — 1.5 cm, anterior wall, Forrest III (clean-based, no recent hemorrhage).\\n2. H. pylori positive — antral biopsies.\\n3. Antral erythema — mild gastritis.",
      "dictated": "04/22/2019 14:00",
      "verified": "04/22/2019 16:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose Quadrivalent)",
      "date": "10/15/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD318",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/01/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-820",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "2024",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: Gastric cancer, deceased at 68",
    "Father: Hypertension, T2DM, deceased at 75 (MI)",
    "Brother: PUD (H. pylori), alive at 62",
    "Sister: Healthy, age 58"
  ],
  "socialHistory": [
    ["Occupation", "Retired auto mechanic"],
    ["Marital", "Married — 38 years"],
    ["Tobacco", "Current smoker — 1 PPD x 44 years (44 pack-years); declined cessation"],
    ["Alcohol", "2-3 beers daily"],
    ["Drugs", "Denies"],
    ["Exercise", "Limited by knee pain; walks to corner store"],
    ["Housing", "Lives with wife in single-family home"],
    ["Safety", "Wears seatbelt; no fall history"],
    ["Advance Directive", "None — discussed; patient deferred"]
  ],
  "meta": {
    "caseId": "perforated-peptic-ulcer",
    "diagnosis": "Perforated Peptic Ulcer",
    "acuity": 1,
    "presentation": "GI Emergency",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Vincent Morales appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did gi emergency start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started 64-year-old male with PUD history, OA bilateral knees, and CAD presenting with w.'",
        "character": "'It's gi emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Perforated Peptic Ulcer.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Omeprazole 20mg daily; Naproxen 500mg BID; Aspirin 81mg daily; Lisinopril 10mg daily; Atorvastatin 20mg daily.'",
        "allergies": "'My allergies are Tramadol.'",
        "family": "Mother: Gastric cancer, deceased at 68  Father: Hypertension, T2DM, deceased at 75 (MI)  Brother: PUD (H. pylori), alive at 62",
        "social": "Occupation: Retired auto mechanic  Marital: Married \u2014 38 years  Tobacco: Current smoker \u2014 1 PPD x 44 years (44 pack-years); declined cessation  Alcohol: 2-3 beers daily  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Abdominal inspection",
        "Abdominal auscultation",
        "Abdominal palpation light and deep",
        "Rebound and guarding assessment",
        "Rectal examination if indicated",
        "Skin for jaundice or stigmata"
    ],
    "examFindings": {
        "General appearance": "Clinical finding consistent with Perforated Peptic Ulcer. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Perforated Peptic Ulcer. Document specifically what you observe.",
        "Abdominal inspection": "Clinical finding consistent with Perforated Peptic Ulcer. Document specifically what you observe.",
        "Abdominal auscultation": "Clinical finding consistent with Perforated Peptic Ulcer. Document specifically what you observe.",
        "Abdominal palpation light and deep": "Clinical finding consistent with Perforated Peptic Ulcer. Document specifically what you observe.",
        "Rebound and guarding assessment": "Clinical finding consistent with Perforated Peptic Ulcer. Document specifically what you observe.",
        "Rectal examination if indicated": "Clinical finding consistent with Perforated Peptic Ulcer. Document specifically what you observe.",
        "Skin for jaundice or stigmata": "Clinical finding consistent with Perforated Peptic Ulcer. Document specifically what you observe."
    },
    "ddxTargets": [
        "Perforated Peptic Ulcer (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Perforated Peptic Ulcer, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Perforated Peptic Ulcer, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Perforated Peptic Ulcer based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Vincent Morales's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Perforated Peptic Ulcer. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};