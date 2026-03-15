/* emr-data/hypertensive-emergency.js
   Hypertensive Emergency with End-Organ Damage
   Category: neurology | Acuity: ESI-2
   Settings: ED, Floor, ICU
   Priority 1 gap fill — neurology/cardiology overlap
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Washington",
      "patientHPI": "My head is pounding worse than it ever has before. I've had headaches before but this is different — it's at the back of my head and my vision is blurry. I took some Tylenol but nothing is helping.",
      "dob": "09/14/1968",
      "age": "57",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-338847",
      "language": "English",
      "race": "Black/African American",
      "phone": "(312) 555-8847",
      "email": "m.washington@email.com",
      "address": "2847 S. Michigan Ave, Chicago, IL 60616",
      "insurance": "Medicaid",
      "pcp": "Dr. Yvonne Carter, MD",
      "pharmacy": "Walgreens — 35th St",
      "emergencyContact": {
        "name": "Diane Washington",
        "phone": "(312) 555-9012",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      { "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }
    ],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }
    ],
    "familyHistory": [
      "Father: died of stroke at 61",
      "Mother: hypertension, CKD",
      "Brother: hypertension"
    ],
    "socialHistory": [
      ["Adherence", "Ran out of amlodipine 3 weeks ago — 'couldn't get to the pharmacy'"],
      ["Diet", "High-sodium diet — works as a short-order cook"],
      ["Smoking", "Former — 20 pack-year history, quit 5 years ago"],
      ["Alcohol", "Occasional"],
      ["Work", "Short-order cook — high-stress environment"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "57M with h/o HTN presenting with severe occipital headache, blurred vision, BP 226/138 — ran out of amlodipine 3 weeks ago",
        "diagnosis": "Hypertensive Emergency — Hypertensive Encephalopathy + Hypertensive Retinopathy"
      },
      "problems": [
        { "id": "prob-1", "description": "Hypertensive emergency — BP 226/138 with end-organ damage (neurologic + ophthalmic)", "status": "Active", "onset": "Acute", "icd10": "I16.1" },
        { "id": "prob-2", "description": "Hypertensive encephalopathy — severe headache, confusion, blurred vision", "status": "Active", "onset": "Acute", "icd10": "I67.4" },
        { "id": "prob-3", "description": "Hypertensive retinopathy — papilledema on fundoscopy", "status": "Active", "onset": "Acute", "icd10": "H35.039" },
        { "id": "prob-4", "description": "Medication non-adherence — ran out of amlodipine 3 weeks ago", "status": "Active", "onset": "Chronic", "icd10": "Z91.19" },
        { "id": "prob-5", "description": "Hypertension — poorly controlled, likely >10 year history", "status": "Chronic", "onset": "Chronic", "icd10": "I10" }
      ],
      "medications": [
        { "id": "med-1", "name": "Amlodipine", "dose": "10mg", "route": "PO", "frequency": "Daily", "status": "Not taking — ran out", "prescriber": "Dr. Yvonne Carter, MD" },
        { "id": "med-2", "name": "Lisinopril", "dose": "20mg", "route": "PO", "frequency": "Daily", "status": "Active", "prescriber": "Dr. Yvonne Carter, MD" }
      ],
      "vitals": [
        { "date": "03/15/2026", "time": "14:22", "bp": "226/138", "hr": "96", "rr": "18", "temp": "37.1°C", "spo2": "98%", "pain": "9/10" }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Severe occipital headache with blurred vision — BP 226/138",
          "hpi": "57-year-old Black male with known hypertension presents with 6-hour history of severe occipital headache (9/10), blurred vision bilaterally, and mild confusion. He ran out of amlodipine 3 weeks ago and has not been able to refill it. He has no prior episodes this severe. His wife noticed he seemed 'not himself' this morning — slow to respond, forgot her name briefly. He denies chest pain, shortness of breath, focal weakness, or slurred speech. ROS: nausea without vomiting, photophobia. No fever, no neck stiffness.",
          "assessment": "Hypertensive emergency with neurologic and ophthalmologic end-organ damage. BP 226/138. Fundoscopy reveals bilateral papilledema with flame hemorrhages — Grade IV Keith-Wagener-Barker. Needs urgent but controlled BP reduction — MAP reduction of 10-20% in first hour, 25% over 24 hours. Avoid overcorrection — cerebral autoregulation is shifted and rapid drop can cause ischemia.",
          "plan": "IV nicardipine infusion (titratable). ICU admission. Continuous arterial line monitoring. CT head to r/o hemorrhagic stroke. MRI brain — posterior reversible encephalopathy syndrome (PRES) likely. Ophthalmology consult. Cardiology for hypertensive heart disease eval. Renal function/UA — hypertensive nephropathy assessment. Restart home medications. Social work for medication access barriers."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "14:45",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-338847",
          "collected": "03/15/2026 14:40",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "COMPREHENSIVE METABOLIC PANEL",
              "results": [
                { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
                { "test": "Potassium", "value": "3.7", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
                { "test": "Creatinine", "value": "1.8", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
                { "test": "BUN", "value": "28", "unit": "mg/dL", "range": "7-20", "flag": "H" },
                { "test": "eGFR", "value": "38", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
                { "test": "Glucose", "value": "108", "unit": "mg/dL", "range": "70-100", "flag": "H" },
                { "test": "AST", "value": "34", "unit": "U/L", "range": "10-40", "flag": "" },
                { "test": "ALT", "value": "28", "unit": "U/L", "range": "7-56", "flag": "" }
              ]
            },
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                { "test": "WBC", "value": "9.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
                { "test": "Hemoglobin", "value": "13.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
                { "test": "Platelets", "value": "198", "unit": "x10³/µL", "range": "150-400", "flag": "" },
                { "test": "Schistocytes", "value": "Present", "unit": "", "range": "Absent", "flag": "H" }
              ]
            },
            {
              "name": "CARDIAC / ORGAN DAMAGE",
              "results": [
                { "test": "Troponin I", "value": "0.08", "unit": "ng/mL", "range": "<0.04", "flag": "H" },
                { "test": "BNP", "value": "480", "unit": "pg/mL", "range": "<100", "flag": "H" },
                { "test": "LDH", "value": "420", "unit": "U/L", "range": "140-280", "flag": "H" }
              ]
            },
            {
              "name": "URINALYSIS",
              "results": [
                { "test": "Protein", "value": "3+", "unit": "", "range": "Negative", "flag": "H" },
                { "test": "RBC casts", "value": "Present", "unit": "", "range": "Absent", "flag": "H" },
                { "test": "Glucose", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "type": "CT Head Without Contrast",
          "date": "03/15/2026",
          "time": "15:10",
          "orderedBy": "Dr. Attending",
          "findings": "No acute intracranial hemorrhage. No midline shift. No mass lesion. Subtle white matter hypodensities in bilateral occipital and parietal regions — may represent early PRES. Moderate cerebral atrophy for age. Periventricular white matter changes consistent with chronic hypertensive leukoencephalopathy.",
          "impression": "No hemorrhagic stroke. Findings suspicious for early posterior reversible encephalopathy syndrome (PRES) — correlate with MRI. Chronic hypertensive changes.",
          "critical": true
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted to ICU — hypertensive emergency on nicardipine drip, BP now 178/104 after 2 hours",
        "diagnosis": "Hypertensive Emergency — Hypertensive Encephalopathy, PRES"
      },
      "problems": [
        { "id": "prob-1", "description": "Hypertensive emergency — responding to IV nicardipine", "status": "Active", "onset": "Acute", "icd10": "I16.1" },
        { "id": "prob-2", "description": "Posterior Reversible Encephalopathy Syndrome (PRES) — confirmed on MRI", "status": "Active", "onset": "Acute", "icd10": "I67.83" },
        { "id": "prob-3", "description": "AKI on CKD — creatinine 1.8, baseline ~1.2", "status": "Active", "onset": "Acute", "icd10": "N17.9" },
        { "id": "prob-4", "description": "Hypertensive nephropathy — proteinuria 3+, RBC casts", "status": "Active", "onset": "Chronic", "icd10": "I12.9" },
        { "id": "prob-5", "description": "Microangiopathic hemolytic anemia — schistocytes on smear, elevated LDH", "status": "Active", "onset": "Acute", "icd10": "D59.4" }
      ],
      "medications": [
        { "id": "med-1", "name": "Nicardipine", "dose": "5 mg/hr → 10 mg/hr (titrating)", "route": "IV infusion", "frequency": "Continuous — titrate to MAP reduction 10-20%", "status": "Active", "prescriber": "Dr. ICU Attending" },
        { "id": "med-2", "name": "Lisinopril", "dose": "20mg", "route": "PO", "frequency": "Daily — hold until PO tolerating", "status": "Hold", "prescriber": "Dr. ICU Attending" },
        { "id": "med-3", "name": "Amlodipine", "dose": "10mg", "route": "PO", "frequency": "Daily", "status": "Restart", "prescriber": "Dr. ICU Attending" }
      ],
      "vitals": [
        { "date": "03/15/2026", "time": "16:30", "bp": "178/104", "hr": "88", "rr": "16", "temp": "37.0°C", "spo2": "99%", "pain": "5/10" },
        { "date": "03/15/2026", "time": "18:00", "bp": "162/98", "hr": "82", "rr": "14", "temp": "37.0°C", "spo2": "99%", "pain": "3/10" }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "ICU Progress Note",
          "date": "03/16/2026",
          "provider": "Dr. ICU Attending",
          "cc": "Day 2 — hypertensive emergency, PRES confirmed on MRI",
          "hpi": "Patient is HD stable overnight on nicardipine infusion. BP trending down appropriately — targeting MAP 120-130 over 24 hours, then gradually to 160/100 over 48-72 hours. MRI brain from last evening confirms PRES — bilateral symmetrical FLAIR hyperintensities predominantly in parieto-occipital regions, no restricted diffusion (no infarction). Headache improving, vision improving, confusion resolving. Renal following — creatinine stable at 1.7.",
          "assessment": "PRES from hypertensive emergency — responding to controlled BP reduction. Key: do NOT normalize BP rapidly — target 25% MAP reduction over 24 hours, then gradual normalization over days to weeks. Risk of ischemic stroke if BP drops too fast.",
          "plan": "Continue nicardipine — wean as tolerated, transition to PO regimen. Restart amlodipine + lisinopril. Add hydralazine or labetalol if needed for PO transition. Nephrology consult for CKD/AKI. Ophthalmology f/u in 48h for retinopathy grading. Social work for medication assistance program enrollment. Discharge plan: 48h after stable on PO regimen."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. ICU Attending",
          "accession": "LAB-338848",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "COMPREHENSIVE METABOLIC PANEL",
              "results": [
                { "test": "Creatinine", "value": "1.7", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
                { "test": "BUN", "value": "26", "unit": "mg/dL", "range": "7-20", "flag": "H" },
                { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" }
              ]
            },
            {
              "name": "TREND — ORGAN DAMAGE MARKERS",
              "results": [
                { "test": "Troponin I", "value": "0.06", "unit": "ng/mL", "range": "<0.04", "flag": "H" },
                { "test": "LDH", "value": "360", "unit": "U/L", "range": "140-280", "flag": "H" },
                { "test": "Haptoglobin", "value": "<10", "unit": "mg/dL", "range": "30-200", "flag": "L" }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-2",
          "type": "MRI Brain With and Without Contrast",
          "date": "03/15/2026",
          "time": "19:30",
          "orderedBy": "Dr. ICU Attending",
          "findings": "Bilateral symmetrical FLAIR hyperintensities in parieto-occipital regions, extending into posterior frontal lobes. No restricted diffusion on DWI (no acute infarction). No enhancement. No hemorrhage. Pattern consistent with posterior reversible encephalopathy syndrome (PRES). Moderate periventricular white matter T2 hyperintensities consistent with chronic hypertensive leukoencephalopathy.",
          "impression": "PRES — posterior reversible encephalopathy syndrome. Expected to resolve with BP control. No infarction. No hemorrhage.",
          "critical": true
        }
      ]
    }
  },
  "references": [
    {
      "id": "StatPearls-HypertensiveEmergency",
      "title": "Hypertensive Emergency",
      "authors": "Peixoto AJ",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK534284/",
      "openAccess": true,
      "validates": ["Hypertensive emergency definition", "MAP reduction targets", "IV agent selection", "End-organ damage assessment"]
    },
    {
      "id": "StatPearls-PRES",
      "title": "Posterior Reversible Encephalopathy Syndrome (PRES)",
      "authors": "Shankar J",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK519513/",
      "openAccess": true,
      "validates": ["PRES diagnosis", "MRI findings", "BP management in PRES", "Reversibility"]
    },
    {
      "id": "AHA-2017-HTN",
      "title": "2017 ACC/AHA High Blood Pressure Guideline",
      "authors": "Whelton PK, Carey RM, Aronow WS, et al.",
      "journal": "Hypertension",
      "year": 2018,
      "doi": "10.1161/HYP.0000000000000065",
      "url": "https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065",
      "openAccess": true,
      "validates": ["BP staging", "Hypertensive emergency vs urgency", "Treatment goals"]
    }
  ]
};
