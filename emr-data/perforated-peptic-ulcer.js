
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
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "38.4",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "MCV",
              "value": "78",
              "unit": "fL",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "Platelet Count",
              "value": "274",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            {
              "test": "Iron",
              "value": "42",
              "unit": "µg/dL",
              "range": "60-170",
              "flag": "L"
            },
            {
              "test": "TIBC",
              "value": "380",
              "unit": "µg/dL",
              "range": "250-370",
              "flag": "H"
            },
            {
              "test": "Ferritin",
              "value": "18",
              "unit": "ng/mL",
              "range": "30-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "H. PYLORI",
          "results": [
            {
              "test": "H. pylori Stool Antigen",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            }
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
    [
      "Occupation",
      "Retired auto mechanic"
    ],
    [
      "Marital",
      "Married — 38 years"
    ],
    [
      "Tobacco",
      "Current smoker — 1 PPD x 44 years (44 pack-years); declined cessation"
    ],
    [
      "Alcohol",
      "2-3 beers daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Limited by knee pain; walks to corner store"
    ],
    [
      "Housing",
      "Lives with wife in single-family home"
    ],
    [
      "Safety",
      "Wears seatbelt; no fall history"
    ],
    [
      "Advance Directive",
      "None — discussed; patient deferred"
    ]
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
    "patientPersona": "Vincent appears anxious and is holding his abdomen, with occasional grimacing indicating significant discomfort. He is cooperative but somewhat guarded when discussing his smoking and NSAID use, knowing they may be contributing factors. His speech is measured due to pain, but he provides detailed responses when asked directly.",
    "interviewQuestions": [
      "Can you describe when this stomach pain started and how it's different from your usual ulcer symptoms?",
      "What does the pain feel like - is it sharp, burning, cramping, or something else?",
      "Where exactly is the pain located and does it spread anywhere else?",
      "On a scale of 1-10, how severe is this pain compared to your previous ulcer episodes?",
      "What makes the pain worse - eating, moving, lying down?",
      "Have you found anything that helps relieve the pain?",
      "Are you experiencing any nausea, vomiting, or changes in your bowel movements?",
      "Have you noticed any blood in your vomit or stool, or any black tarry stools?",
      "How long have you been taking naproxen for your knee pain, and how often?",
      "Are you still taking your omeprazole as prescribed?",
      "Have you had any fever, chills, or feeling faint?",
      "When was your last meal and how has your appetite been?",
      "Have you had any similar severe episodes like this before?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you be more specific about my stomach pain?",
      "onset": "The pain started about 6 hours ago, really suddenly while I was watching TV. It's much worse than my usual heartburn - this feels different, more intense and constant.",
      "character": "It's a sharp, stabbing pain that's constant. Not like the burning I usually get with my ulcer - this is more like someone's stabbing me with a knife.",
      "location": "It's right here in my upper stomach area, just below my ribs in the center. Sometimes it seems to go through to my back.",
      "severity": "This is easily a 9 out of 10. My usual ulcer pain is maybe a 4 or 5, but this is excruciating. I can barely move without it getting worse.",
      "aggravating": "Any movement makes it worse - sitting up, walking, even taking a deep breath. Pressing on my stomach is agony.",
      "relieving": "Nothing helps. I tried antacids, my usual position changes, even tried some milk. Nothing touches this pain.",
      "associated": "I feel nauseous and had some dry heaving earlier. I feel dizzy when I stand up and I'm sweating even though I don't think I have a fever.",
      "denies": "No vomiting blood, no black stools, no actual vomiting yet - just the nausea and dry heaves. No chest pain or shortness of breath.",
      "history": "I've had peptic ulcer disease for about 8 years, but nothing like this. Usually antacids or my omeprazole help, and the pain comes and goes. This just won't stop.",
      "medications": "Omeprazole 20mg daily; Naproxen 500mg BID; Aspirin 81mg daily; Lisinopril 10mg daily; Atorvastatin 20mg daily",
      "allergies": "Tramadol",
      "family": "My mother died of stomach cancer at 68, and my brother had H. pylori ulcers. My father had heart problems and diabetes.",
      "social": "I'm a retired auto mechanic, married 38 years. I smoke a pack a day for 44 years now. I have 2-3 beers daily, no illegal drugs. My knees are killing me from all those years under cars."
    },
    "examManeuvers": [
      "Abdominal inspection",
      "Auscultation of bowel sounds",
      "Light abdominal palpation",
      "Deep abdominal palpation",
      "Rebound tenderness testing",
      "Percussion of abdomen",
      "Murphy's sign",
      "Rovsing's sign",
      "Psoas sign",
      "Assessment for rigidity"
    ],
    "examFindings": {
      "Abdominal inspection": "Abdomen appears slightly distended, patient guarding and appears in significant distress",
      "Auscultation of bowel sounds": "Bowel sounds are diminished to absent in all four quadrants",
      "Light abdominal palpation": "Extreme tenderness in epigastric region, patient winces and guards with minimal pressure",
      "Deep abdominal palpation": "Unable to perform due to severe tenderness and voluntary guarding",
      "Rebound tenderness testing": "Positive rebound tenderness in epigastric region, patient cries out with release",
      "Percussion of abdomen": "Loss of liver dullness, suggesting free air under diaphragm",
      "Murphy's sign": "Negative",
      "Rovsing's sign": "Negative",
      "Psoas sign": "Negative",
      "Assessment for rigidity": "Board-like rigidity present in upper abdomen, consistent with peritoneal irritation"
    },
    "ddxTargets": [
      "Perforated Peptic Ulcer (correct diagnosis)",
      "Acute Pancreatitis",
      "Acute Cholangitis",
      "Myocardial Infarction",
      "Aortic Dissection",
      "Acute Cholecystitis",
      "Gastroesophageal Reflux Disease"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known peptic ulcer disease history and missing the acute perforation, treating as routine PUD exacerbation",
      "prematureClosure": "May stop at 'ulcer flare-up' given clear PUD history without recognizing the surgical emergency of perforation",
      "availabilityBias": "Recent cases of GERD or routine PUD may overshadow recognition of this life-threatening complication requiring immediate surgery"
    },
    "coachPrompts": {
      "phase2": "You've identified several possibilities for acute abdominal pain. Given Mr. Morales' medication history, what specific complications should you be most concerned about? How might his NSAID use factor into your differential diagnosis?",
      "phase5": "Your physical exam reveals some concerning findings - loss of liver dullness and board-like rigidity. How do these findings change your assessment of his peptic ulcer disease? What's the most likely complication that's occurred?",
      "finalDebrief": "This case demonstrates how chronic conditions can develop life-threatening complications. The combination of NSAID use, known PUD, and classic perforation signs (sudden onset, rigid abdomen, loss of liver dullness) should have pointed toward perforated peptic ulcer. How did your differential evolve from routine PUD to surgical emergency?",
      "final": "Diagnosis: perforated peptic ulcer with acute peritonitis. Key learning: (1) Perforation is the most serious complication of peptic ulcer disease, with mortality 5-30% depending on age, comorbidities, and time to surgery. Most perforated ulcers are duodenal (anterior duodenal bulb) rather than gastric. Risk factors: H. pylori infection, NSAID and aspirin use (especially combined with steroids or anticoagulants), smoking, corticosteroids, chronic alcohol use, and physiologic stress (burns, trauma, critical illness — stress ulceration). (2) Classical triad: sudden severe epigastric pain, abdominal rigidity, and absent/hypoactive bowel sounds. Patients often describe the exact moment pain began (helpful historical clue). Subsequent phases: (a) Chemical peritonitis phase (first 2-6 hours) — acute epigastric pain becomes generalized, rigidity, guarding, rebound, tachycardia. (b) Reactive phase (6-12 hours) — temporary symptomatic improvement as peritoneal exudate dilutes gastric contents — a dangerous lull. (c) Diffuse bacterial peritonitis (after 12 hours) — sepsis, shock, ileus, multiorgan failure. Physical exam: abdominal rigidity, diffuse tenderness, absent bowel sounds, obliteration of hepatic dullness (air in peritoneum), tachycardia, hypotension in late presentation. (3) Workup. Upright chest X-ray: free air under the diaphragm (pneumoperitoneum) in 75-80% of cases — the classic finding but absent in 20-25%. CT abdomen/pelvis with IV contrast (oral contrast typically omitted) is more sensitive — demonstrates free air (sometimes minimal), fluid, and may identify the perforation site. Labs: CBC (leukocytosis), CMP, lactate, amylase/lipase (elevated because of exposure to peritoneal contents, can mimic pancreatitis), coagulation, type and crossmatch, cultures. (4) Management. (a) Resuscitation: IV fluids, broad-spectrum antibiotics covering gram-negative and anaerobes (piperacillin-tazobactam, or ceftriaxone + metronidazole), proton pump inhibitor (IV pantoprazole), NG decompression, Foley catheter, correction of coagulopathy, and pain control. (b) Operative repair is standard for most cases: laparoscopic or open primary repair with Graham patch (omental patch), peritoneal lavage, and drain placement. Partial gastrectomy in selected cases (large gastric ulcers, refractory disease, suspicion of malignancy — biopsy all gastric ulcers). (c) Nonoperative management with NG tube, antibiotics, and PPI may be considered in selected stable patients with sealed perforation and no peritonitis (confirmed by water-soluble contrast study showing no leak) — this is controversial and reserved for high-risk surgical candidates. (d) Post-op: H. pylori testing and eradication (essential — reduces recurrence), continued PPI, NSAID avoidance, and lifestyle modification. (5) Classic pitfalls: (a) missing perforation because of absent free air on CXR — CT is more sensitive, and clinical suspicion with peritoneal signs should prompt surgery even without imaging confirmation. (b) Being misled by the reactive phase — symptomatic improvement does not mean the perforation has healed; progression to sepsis is inevitable without surgery. (c) Missing malignancy in a gastric ulcer — always biopsy at the time of repair or within follow-up. (d) Failing to test and treat H. pylori postoperatively — the leading cause of recurrent ulceration and complications. (e) Forgetting NSAID counseling — many patients resume NSAIDs and re-perforate."
    }
  }
};
