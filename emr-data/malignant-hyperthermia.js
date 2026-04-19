// Virtual EMR Case: Malignant Hyperthermia
// Variant: malignant-hyperthermia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Ryan Kowalski",
  "patientHPI": "The pain started around my belly button yesterday and then moved down to my lower right side and keeps getting worse. I've been throwing up and have no appetite at all, plus I had a fever of 101 at home last night.",
    "dob": "11/08/1996",
    "age": 28,
    "sex": "Male",
    "mrn": "RDX-2025-68241",
    "pronouns": "He/Him",
    "insurance": "Aetna — EPO",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "CVS Pharmacy — 7001 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "race": "White/Caucasian (Polish descent)",
    "address": "7125 Elm St, Albuquerque, NM 87102",
    "phone": "(954) 555-1847",
    "email": "r.kowalski96@email.com",
    "emergencyContact": {
      "name": "Jennifer Kowalski (Wife)",
      "phone": "(954) 555-1850"
    }
  },
  "problems": [
    {
      "problem": "Malignant Hyperthermia Susceptibility",
      "icd": "T88.3",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — triggered by sevoflurane + succinylcholine during emergency appendectomy; NO prior known susceptibility"
    },
    {
      "problem": "Acute Appendicitis — Post-Appendectomy",
      "icd": "K35.80",
      "onset": "2025",
      "status": "Active",
      "notes": "Perforated appendicitis; taken to OR for laparoscopic appendectomy; MH crisis developed intraoperatively"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.9",
      "onset": "2018",
      "status": "Active",
      "notes": "Managed with OTC cetirizine"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily PRN",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Torres",
      "start": "03/2020",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA (prior to this admission)",
      "type": "None",
      "reaction": "None previously known — NOW: Malignant Hyperthermia susceptibility identified",
      "severity": "",
      "verified": "Yes"
    },
    {
      "allergen": "Volatile anesthetic agents (sevoflurane, desflurane, isoflurane, halothane)",
      "type": "Drug",
      "reaction": "Malignant Hyperthermia — intraoperative crisis with rigidity, hyperthermia, hypercarbia, rhabdomyolysis",
      "severity": "Severe — Life-threatening",
      "verified": "Yes — confirmed intraoperatively 02/22/2025"
    },
    {
      "allergen": "Succinylcholine",
      "type": "Drug",
      "reaction": "Malignant Hyperthermia trigger — masseter muscle rigidity following administration",
      "severity": "Severe — Life-threatening",
      "verified": "Yes — confirmed intraoperatively 02/22/2025"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2025",
      "bp": "82/48",
      "hr": 168,
      "rr": 36,
      "temp": "106.2°F",
      "spo2": "88%",
      "wt": "192 lbs",
      "ht": "6'0\"",
      "bmi": 26.0,
      "setting": "OR → SICU"
    },
    {
      "date": "02/22/2025",
      "bp": "118/76",
      "hr": 112,
      "rr": 22,
      "temp": "101.8°F",
      "spo2": "96%",
      "wt": "192 lbs",
      "ht": "6'0\"",
      "bmi": 26.0,
      "setting": "SICU — post-dantrolene"
    },
    {
      "date": "02/21/2025",
      "bp": "128/82",
      "hr": 98,
      "rr": 18,
      "temp": "100.8°F",
      "spo2": "98%",
      "wt": "192 lbs",
      "ht": "6'0\"",
      "bmi": 26.0,
      "setting": "ED — pre-op"
    },
    {
      "date": "10/15/2024",
      "bp": "122/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "190 lbs",
      "ht": "6'0\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/21/2025",
      "type": "ED",
      "provider": "Dr. Kevin Tran, MD",
      "cc": "Severe RLQ abdominal pain x 18 hours, nausea, vomiting, fever",
      "hpi": "28-year-old male presenting with 18-hour history of periumbilical pain that migrated to the RLQ. Associated nausea, 3 episodes of non-bloody vomiting, anorexia, and fever of 101.2°F at home. Pain worsening. No diarrhea. No urinary symptoms. No prior abdominal surgery.",
      "exam": "General: Moderate distress, lying still. Abdomen: RLQ tenderness with involuntary guarding, positive McBurney point tenderness, positive Rovsing sign, positive psoas sign. Rebound tenderness present. Bowel sounds diminished. CV: Tachycardic at 98, regular. Lungs: CTA.",
      "assessment": "1. Acute appendicitis — likely perforated given peritoneal signs and duration\n2. Surgical abdomen",
      "plan": "1. NPO, IV fluids, IV antibiotics (piperacillin-tazobactam)\n2. CT abdomen/pelvis with contrast\n3. Surgical consultation — likely operative\n4. Pain management with IV morphine"
    },
    {
      "id": "V002",
      "date": "10/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Michael Torres, MD",
      "cc": "Annual physical",
      "hpi": "28-year-old healthy male for routine annual exam. No complaints. Active lifestyle — plays recreational soccer and goes to the gym 4x/week. No medications besides OTC allergy med. No significant medical history. No prior surgeries or anesthesia exposure. Family history notable for father who had an 'unusual reaction' to anesthesia during knee surgery (details unclear).",
      "exam": "General: Well-appearing, fit male. HEENT: WNL. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, NT, no masses. MSK: Full ROM, good muscle tone. Neuro: Intact. Skin: No lesions.",
      "assessment": "1. Healthy male — annual wellness\n2. Allergic rhinitis — seasonal, well-controlled\n3. NOTE: Family history of 'unusual anesthetic reaction' in father — vague, could not obtain details; recommended patient ask father for specifics",
      "plan": "1. Routine labs ordered\n2. Continue cetirizine PRN\n3. Counseled to obtain father's surgical/anesthetic history\n4. RTC annually"
    }
  ],
  "labs": [
    {
      "date": "02/22/2025",
      "time": "14:45",
      "orderedBy": "Dr. Sarah Mitchell, MD (Anesthesiology/SICU)",
      "collected": "02/22/2025 14:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-097841",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Arterial Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "198", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "32", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "2.8", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "Sodium", "value": "148", "unit": "mEq/L", "range": "136-145", "flag": "H" },
            { "test": "Potassium", "value": "6.8", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Chloride", "value": "108", "unit": "mEq/L", "range": "98-106", "flag": "H" },
            { "test": "CO2 (Bicarbonate)", "value": "14", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium (ionized)", "value": "5.8", "unit": "mg/dL", "range": "4.6-5.3", "flag": "H" },
            { "test": "Phosphate", "value": "7.2", "unit": "mg/dL", "range": "2.5-4.5", "flag": "H" },
            { "test": "AST (SGOT)", "value": "892", "unit": "U/L", "range": "10-40", "flag": "H" },
            { "test": "ALT (SGPT)", "value": "412", "unit": "U/L", "range": "7-56", "flag": "H" }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            { "test": "CK Total", "value": "48,200", "unit": "U/L", "range": "30-200", "flag": "H" },
            { "test": "CK-MB", "value": "42", "unit": "ng/mL", "range": "0-5", "flag": "H" }
          ]
        },
        {
          "name": "ARTERIAL BLOOD GAS",
          "results": [
            { "test": "pH", "value": "7.12", "unit": "", "range": "7.35-7.45", "flag": "L" },
            { "test": "pCO2", "value": "72", "unit": "mmHg", "range": "35-45", "flag": "H" },
            { "test": "pO2", "value": "68", "unit": "mmHg", "range": "80-100", "flag": "L" },
            { "test": "HCO3", "value": "14", "unit": "mEq/L", "range": "22-26", "flag": "L" },
            { "test": "Base Excess", "value": "-14", "unit": "mEq/L", "range": "-2 to +2", "flag": "L" },
            { "test": "Lactate", "value": "8.4", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        },
        {
          "name": "COAGULATION STUDIES",
          "results": [
            { "test": "PT", "value": "18.2", "unit": "sec", "range": "11.0-14.0", "flag": "H" },
            { "test": "INR", "value": "1.6", "unit": "", "range": "0.9-1.1", "flag": "H" },
            { "test": "PTT", "value": "48", "unit": "sec", "range": "25-35", "flag": "H" },
            { "test": "Fibrinogen", "value": "128", "unit": "mg/dL", "range": "200-400", "flag": "L" },
            { "test": "D-Dimer", "value": "4.2", "unit": "µg/mL", "range": "<0.5", "flag": "H" }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            { "test": "Color", "value": "Dark brown (cola-colored)", "unit": "", "range": "Yellow", "flag": "" },
            { "test": "Myoglobin", "value": "Positive (>1000)", "unit": "ng/mL", "range": "Negative", "flag": "H" },
            { "test": "Blood (dipstick)", "value": "3+", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "RBC", "value": "0-2", "unit": "/HPF", "range": "0-3", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/21/2025",
      "study": "CT ABDOMEN AND PELVIS WITH IV CONTRAST",
      "accession": "IMG-2025-09412",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "readBy": "Dr. Robert Nash, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "28-year-old male with RLQ pain, fever, peritoneal signs — r/o appendicitis",
      "technique": "Axial CT images of the abdomen and pelvis obtained following IV contrast. Coronal and sagittal reformats reviewed.",
      "findings": "APPENDIX: The appendix is dilated to 14 mm with wall thickening and enhancement. There is a focal defect in the appendiceal wall at the tip consistent with perforation. Surrounding fat stranding and a small loculated fluid collection (2.2 x 1.8 cm) adjacent to the appendiceal tip.\n\nPERITONEUM: Small amount of free fluid in the pelvis. No diffuse peritoneal enhancement to suggest generalized peritonitis.\n\nOTHER BOWEL: Small and large bowel normal in caliber. No obstruction.\n\nSOLID ORGANS: Liver, spleen, kidneys, pancreas unremarkable.",
      "impression": "1. Perforated appendicitis with small peri-appendiceal abscess (2.2 cm)\n2. Small pelvic free fluid\n3. Surgical consultation recommended",
      "dictated": "02/21/2025 22:15",
      "verified": "02/21/2025 22:22"
    },
    {
      "date": "02/22/2025",
      "study": "CHEST X-RAY — PORTABLE AP (SICU)",
      "accession": "IMG-2025-09520",
      "status": "FINAL",
      "orderedBy": "Dr. Sarah Mitchell, MD (SICU)",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "Post-MH crisis, intubated, verify ETT placement",
      "technique": "Single portable AP chest radiograph.",
      "findings": "ETT: Endotracheal tube tip 3.5 cm above the carina — appropriate position.\n\nLINES: Right subclavian central venous catheter tip in the SVC. OG tube tip in the stomach.\n\nLUNGS: Mild bilateral basal atelectasis. No consolidation or effusion.\n\nHEART: Normal size.",
      "impression": "1. ETT, central line, and OG tube in satisfactory position\n2. Mild bibasilar atelectasis — likely positional\n3. No acute cardiopulmonary process",
      "dictated": "02/22/2025 15:10",
      "verified": "02/22/2025 15:18"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL861K", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "PF482R", "mfr": "Pfizer" },
    { "vaccine": "Tdap (Adacel)", "date": "11/2021", "site": "Left deltoid IM", "lot": "TA198P", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Father (age 58): Hx of 'unusual reaction to anesthesia' during knee arthroscopy (~age 45) — developed fever and 'muscle problems' in PACU; transferred to ICU; recovered after 3 days; details unclear but HIGHLY SUSPICIOUS FOR MH",
    "Mother (age 56): Hypertension, hypothyroidism — no surgical complications",
    "Brother (age 25): Healthy; has never had surgery",
    "Paternal uncle: Died during surgery at age 42 — family reports 'complications with anesthesia' (exact diagnosis unknown but concerning for MH)",
    "No other known family history of anesthetic reactions"
  ],
  "socialHistory": [
    ["Occupation", "Software developer — works remotely"],
    ["Marital", "Married x 2 years; wife Jennifer present at bedside"],
    ["Tobacco", "Never"],
    ["Alcohol", "Social — 2-4 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Very active — recreational soccer league, gym 4x/week, runs 3x/week"],
    ["Housing", "Owns townhouse with wife"],
    ["Safety", "No firearms"],
    ["Advance Directive", "None prior to admission — wife designated as healthcare proxy during SICU admission"]
  ],
  "meta": {
    "caseId": "malignant-hyperthermia",
    "diagnosis": "Malignant Hyperthermia — Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis",
    "acuity": 1,
    "presentation": "Psychiatric Emergency",
    "category": "anesthetic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Ryan Kowalski appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did psychiatric emergency start?",
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
        "onset": "'The symptoms started The pain started around my belly button yesterday and then moved down to my lowe.'",
        "character": "'It's psychiatric emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Cetirizine 10mg daily PRN.'",
        "allergies": "'My allergies are NKDA (prior to this admission), Volatile anesthetic agents (sevoflurane, desflurane, isoflurane, halothane), Succinylcholine.'",
        "family": "Father (age 58): Hx of 'unusual reaction to anesthesia' during knee arthroscopy (~age 45) \u2014 developed fever and 'muscle problems' in PACU; transferred to ICU; recovered after 3 days; details unclear but HIGHLY SUSPICIOUS FOR MH  Mother (age 56): Hypertension, hypothyroidism \u2014 no surgical complications  Brother (age 25): Healthy; has never had surgery",
        "social": "Occupation: Software developer \u2014 works remotely  Marital: Married x 2 years; wife Jennifer present at bedside  Tobacco: Never  Alcohol: Social \u2014 2-4 beers on weekends  Drugs: Denies"
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
        "General appearance and level of distress": "Clinical finding consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Ryan Kowalski's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Malignant Hyperthermia \u2014 Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
