/* emr-data/lung-cancer-staging.js
   Lung Cancer — New Diagnosis Staging Workup
   Category: hematology (oncology) | Acuity: ESI-3
   Settings: Floor, Clinic
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Harold Simmons",
      "patientHPI": "I've had a cough for four months that won't go away and I've been losing weight without trying — about 18 pounds. I finally went to the doctor and they found something on my chest x-ray and sent me to get a CT scan.",
      "dob": "03/17/1951",
      "age": "74",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-551847",
      "language": "English",
      "race": "White",
      "phone": "(502) 555-1847",
      "email": "",
      "address": "4412 Lexington Ave, Louisville, KY 40207",
      "insurance": "Medicare",
      "pcp": "Dr. Thomas Brent, MD",
      "pharmacy": "Kroger — Lexington Ave",
      "emergencyContact": {
        "name": "Carol Simmons",
        "phone": "(502) 555-9922",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Brother: lung cancer, died at 68",
      "Father: lung cancer, died at 62"
    ],
    "socialHistory": [
      [
        "Smoking",
        "55 pack-year history — current smoker, 1 PPD x55 years. Discussing cessation today."
      ],
      [
        "Occupational",
        "Retired coal miner — 30 years exposure. Asbestos exposure likely."
      ],
      [
        "Alcohol",
        "2-3 drinks/week"
      ],
      [
        "Weight loss",
        "18 pounds unintentional over 3 months — B symptom / constitutional symptom"
      ]
    ]
  },
  "encounters": {
    "inpatient": {
      "patient": {
        "chiefComplaint": "74M, 55 pack-years, new right hilar mass on CT — admitted for bronchoscopy and staging workup — ? NSCLC",
        "diagnosis": "Non-Small Cell Lung Cancer — Squamous Cell Carcinoma — Stage IIIA (cT3N2M0)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "NSCLC — squamous cell carcinoma right upper lobe, 4.8cm. Ipsilateral mediastinal lymph nodes (N2). No distant metastasis on PET/CT. Stage IIIA (T3N2M0). Multidisciplinary tumor board review pending.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "C34.11"
        },
        {
          "id": "prob-2",
          "description": "Staging workup — CT chest/abdomen/pelvis: primary tumor + mediastinal adenopathy. PET/CT: FDG-avid RUL mass + N2 nodes, no distant mets. Brain MRI: no brain metastases. Bronchoscopy with EBUS: tissue confirmed squamous cell, EGFR/ALK/ROS1/PD-L1 pending.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "C34.11"
        },
        {
          "id": "prob-3",
          "description": "Molecular profiling pending — EGFR, ALK, ROS1, KRAS, BRAF, MET, PD-L1 (TPS score). Squamous cell less likely to have targetable mutations than adenocarcinoma but essential to check. PD-L1 determines immunotherapy eligibility.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "C34.11"
        },
        {
          "id": "prob-4",
          "description": "Pulmonary function — FEV1 58% predicted (obstructive pattern from smoking). Borderline surgical candidate — if surgery considered, needs cardiopulmonary exercise testing (CPET).",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "J44.9"
        },
        {
          "id": "prob-5",
          "description": "Smoking cessation — patient smoking up to diagnosis. Varenicline (Chantix) or NRT counseled. Continued smoking worsens treatment toxicity and outcomes.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "F17.210"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Varenicline (Chantix)",
          "dose": "0.5mg daily x3d, then 0.5mg BID x4d, then 1mg BID",
          "route": "PO",
          "frequency": "12-week course for smoking cessation — starting today",
          "status": "NEW",
          "prescriber": "Dr. Pulmonary/Oncology"
        },
        {
          "id": "med-2",
          "name": "Nicotine patch",
          "dose": "21mg/24h",
          "route": "Transdermal",
          "frequency": "Daily — in hospital until varenicline reaches therapeutic dose",
          "status": "Active",
          "prescriber": "Dr. Pulmonary/Oncology"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "08:00",
          "bp": "138/82",
          "hr": "78",
          "rr": "18",
          "temp": "37.0°C",
          "spo2": "93%",
          "pain": "1/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Pulmonology/Oncology Inpatient Note",
          "date": "03/15/2026",
          "provider": "Dr. Pulmonology + Oncology",
          "cc": "New lung cancer — staging and multidisciplinary planning",
          "hpi": "74M with 55 pack-year smoking history, 30-year coal mining career, presents after 4-month cough and 18-pound unintentional weight loss led to CXR showing right hilar mass. Admitted for expedited staging workup.\n\nLUNG CANCER STAGING (TNM 9th edition):\n- T3: Tumor >5cm or invading chest wall/pericardium (tumor 4.8cm — T2b actually, but direct pericardial involvement on CT → T3)\n- N2: Ipsilateral mediastinal or subcarinal nodes (EBUS confirmed right paratracheal station 4R)\n- M0: No distant metastasis on PET/CT. Brain MRI negative.\n- STAGE: IIIA (T3N2M0)\n\nSTAGE IIIA MANAGEMENT OPTIONS:\n- Concurrent chemoradiation (CRT): cisplatin/etoposide + radiation — standard for unresectable Stage III\n- Surgery: borderline candidate given FEV1 58% — CPET if curative-intent surgery considered\n- Durvalumab (immunotherapy): consolidation after CRT if no progression — PACIFIC trial showed OS benefit\n- PD-L1 status: if TPS ≥50% → consider pembrolizumab monotherapy vs CRT\n\nKEY TEACHING — STAGING WORKUP for suspected lung cancer:\n1. CT chest/abdomen/pelvis with contrast (extent of disease)\n2. PET/CT (distant metastasis, node involvement FDG avidity)\n3. Brain MRI (brain mets in ~10% at diagnosis — especially adenocarcinoma)\n4. Tissue diagnosis (bronchoscopy with EBUS for accessible lesions; CT-guided biopsy for peripheral)\n5. Molecular profiling: EGFR, ALK, ROS1, KRAS, BRAF, MET, PD-L1 — required for all NSCLC\n6. PFTs (surgical planning, treatment tolerance)\n7. Multidisciplinary tumor board",
          "assessment": "Stage IIIA squamous cell NSCLC. Pending molecular profiling. Multidisciplinary tumor board next Tuesday. Likely concurrent CRT + durvalumab consolidation. Smoking cessation started.",
          "plan": "Molecular profiling results in 7-10 days. MTB Tuesday. Radiation oncology and medical oncology consults placed. PFTs reviewed — CPET if surgery considered. Smoking cessation: varenicline + patch started. Nutrition consult (18lb weight loss). Palliative care early integration (not end-of-life — symptom management and goals of care clarification). Social work for treatment support."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "08:30",
          "status": "Final",
          "orderedBy": "Dr. Pulmonology",
          "accession": "LAB-551847",
          "collected": "03/15/2026 08:25",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood and Tissue",
          "groups": [
            {
              "name": "COMPLETE BLOOD COUNT",
              "results": [
                {
                  "test": "WBC",
                  "value": "9.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "10.8",
                  "unit": "g/dL",
                  "range": "13.5-17.5",
                  "flag": "L"
                },
                {
                  "test": "MCV",
                  "value": "78",
                  "unit": "fL",
                  "range": "80-100 (microcytic — ACD)",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "488",
                  "unit": "x10³/µL",
                  "range": "150-400 (reactive thrombocytosis in malignancy)",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "METABOLIC AND TUMOR MARKERS",
              "results": [
                {
                  "test": "Sodium",
                  "value": "128",
                  "unit": "mEq/L",
                  "range": "136-145 — SIADH from lung cancer",
                  "flag": "L"
                },
                {
                  "test": "LDH",
                  "value": "380",
                  "unit": "U/L",
                  "range": "140-280",
                  "flag": "H"
                },
                {
                  "test": "Albumin",
                  "value": "2.9",
                  "unit": "g/dL",
                  "range": "3.5-5.0 — malnutrition",
                  "flag": "L"
                },
                {
                  "test": "Calcium",
                  "value": "11.2",
                  "unit": "mg/dL",
                  "range": "8.5-10.5 (mild hypercalcemia — PTHrP from squamous)",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "BRONCHOSCOPY TISSUE — PATHOLOGY",
              "results": [
                {
                  "test": "Histology",
                  "value": "Squamous cell carcinoma — moderately differentiated",
                  "unit": "",
                  "range": "Normal tissue",
                  "flag": "H"
                },
                {
                  "test": "IHC: p40",
                  "value": "Positive (squamous marker)",
                  "unit": "",
                  "range": "Negative in normal",
                  "flag": "H"
                },
                {
                  "test": "IHC: TTF-1",
                  "value": "Negative (adenocarcinoma marker)",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "EGFR mutation",
                  "value": "Negative (less common in squamous)",
                  "unit": "",
                  "range": "No mutation",
                  "flag": ""
                },
                {
                  "test": "ALK rearrangement",
                  "value": "Negative",
                  "unit": "",
                  "range": "No rearrangement",
                  "flag": ""
                },
                {
                  "test": "PD-L1 TPS",
                  "value": "PENDING — 5-7 days",
                  "unit": "",
                  "range": "<1% / 1-49% / ≥50%",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "type": "CT Chest/Abdomen/Pelvis with Contrast",
          "date": "03/10/2026",
          "time": "",
          "orderedBy": "Dr. Thomas Brent",
          "findings": "Right upper lobe spiculated mass measuring 4.8 × 3.9 cm. Ipsilateral mediastinal lymphadenopathy — right paratracheal (station 4R) nodes up to 2.1 cm, subcarinal node 1.8 cm. No contralateral mediastinal nodes. No pleural effusion. No liver or adrenal metastases. No abdominal adenopathy.",
          "impression": "Right upper lobe primary lung mass with ipsilateral mediastinal nodal involvement — Stage III disease. No distant metastasis.",
          "critical": false
        },
        {
          "id": "img-2",
          "type": "PET/CT Whole Body",
          "date": "03/12/2026",
          "time": "",
          "orderedBy": "Dr. Pulmonology",
          "findings": "FDG-avid right upper lobe mass (SUVmax 18.4). FDG-avid right paratracheal and subcarinal lymph nodes (SUVmax 8.2). No FDG-avid lesions in contralateral lung, liver, adrenals, bones, or elsewhere. No distant metastatic disease.",
          "impression": "Stage IIIA NSCLC — locally advanced, no distant metastasis. PET confirms N2 nodal disease.",
          "critical": false
        }
      ]
    },
    "ed": {
      "patient": {
        "chiefComplaint": "Not applicable",
        "diagnosis": "Not applicable"
      },
      "problems": [],
      "medications": [],
      "vitals": [],
      "visits": [],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "NCCN-NSCLC-2024",
      "title": "NCCN Clinical Practice Guidelines: Non-Small Cell Lung Cancer v3.2024",
      "authors": "National Comprehensive Cancer Network",
      "journal": "NCCN Guidelines",
      "year": 2024,
      "doi": "",
      "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1450",
      "openAccess": false,
      "validates": [
        "TNM staging",
        "Stage IIIA management",
        "Concurrent CRT",
        "Durvalumab consolidation (PACIFIC trial)",
        "Molecular profiling requirements"
      ]
    },
    {
      "id": "StatPearls-LungCancer",
      "title": "Lung Cancer",
      "authors": "Hanna NH, Einhorn LH",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK482357/",
      "openAccess": true,
      "validates": [
        "Staging workup",
        "Histologic subtypes",
        "Paraneoplastic syndromes (SIADH, hypercalcemia, SIADH)"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Newly Diagnosed Lung Cancer — Staging Workup",
    "caseId": "lung-cancer-staging"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: newly diagnosed lung cancer requiring complete staging workup before treatment planning. Key learning: (1) Once lung cancer is suspected or biopsy-confirmed, complete staging is essential to define treatment — curative intent (surgery or chemoradiation) versus palliative systemic therapy. The key decisions are histology (non-small cell vs small cell), molecular/immunohistochemical profile (for NSCLC: EGFR, ALK, ROS1, BRAF V600E, KRAS G12C, MET exon 14, RET, HER2, NTRK, plus PD-L1 expression), and stage (TNM 8th edition for NSCLC; limited vs extensive for SCLC in older practice, though TNM is now used for both). (2) The standard staging package for NSCLC is CT chest with IV contrast extending through the adrenals and upper abdomen, PET-CT (to evaluate mediastinal nodes and distant metastases), MRI brain with contrast (high rate of occult CNS metastases, required even in asymptomatic patients with stage IB or higher), and invasive mediastinal staging in any case with suspicious nodes on imaging — EBUS-TBNA is first-line, mediastinoscopy or surgical staging if EBUS is non-diagnostic and result will change management. (3) Molecular profiling is essential before systemic therapy in NSCLC — treatment decisions in advanced disease depend on it. Send comprehensive next-generation sequencing from the biopsy tissue (or liquid biopsy if tissue insufficient); do not start empiric chemotherapy before results return in stable patients. Targetable driver mutations confer major survival benefit with matched targeted therapy (osimertinib for EGFR, alectinib for ALK, crizotinib for ROS1, dabrafenib-trametinib for BRAF, sotorasib for KRAS G12C). PD-L1 expression (tumor proportion score) guides immune checkpoint inhibitor selection in the absence of a driver mutation. (4) Functional assessment complements anatomic staging. PFTs with DLCO are standard before thoracic surgery — predicted postoperative FEV1 and DLCO below 40% suggest high surgical risk. Cardiopulmonary exercise testing (VO2 max) is used when PFTs are borderline. Performance status (ECOG or Karnofsky), nutritional assessment, and comorbidity burden influence candidacy for aggressive therapy. (5) Classic pitfalls: (a) starting systemic therapy before molecular results in an otherwise stable patient — a patient with an EGFR mutation given chemoimmunotherapy first may have compromised responses to subsequent targeted therapy. (b) Missing brain metastases by skipping MRI in 'asymptomatic' patients — treatment strategy (stereotactic radiosurgery, whole-brain radiation, CNS-penetrant targeted therapy) depends on identifying them. (c) Not offering smoking cessation pharmacotherapy at diagnosis — cessation improves treatment tolerance, response, and survival even after diagnosis. (d) Underutilizing multidisciplinary thoracic oncology tumor boards — survival outcomes are improved when decisions are made collaboratively among surgery, radiation oncology, medical oncology, pulmonology, radiology, and pathology. (e) Forgetting that NSCLC stage IIIA is a heterogeneous, treatment-decision-heavy subgroup where multidisciplinary review is particularly important."
    }
  }
};
