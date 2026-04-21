/* emr-data/digeorge-22q11.js — PID Case: DiGeorge Syndrome / 22q11.2 Deletion */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Sophia Reyes",
      "patientHPI": "My baby has been having some trouble feeding and seems to have problems with her breathing sometimes. She also had what looked like a seizure episode yesterday which really frightened us, and I noticed her mouth looks a little different than other babies.",
      "dob": "02/01/2026",
      "age": "3 weeks",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-603921",
      "language": "Spanish / English",
      "race": "Hispanic or Latino",
      "phone": "(804) 555-6482",
      "email": "reyes.family@email.com",
      "address": "1649 Hollyhock Rd, Richmond, VA 23223",
      "insurance": "Medicaid",
      "pcp": "Dr. Maria Gonzalez, MD (Pediatrics)",
      "pharmacy": "Sedano's Pharmacy — Calle Ocho",
      "emergencyContact": {
        "name": "Carlos Reyes",
        "phone": "(313) 555-6401",
        "relationship": "Father"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": "Drug"
      }
    ],
    "immunizations": [
      {
        "name": "Hepatitis B (Birth dose)",
        "date": "02/01/2026",
        "lot": "NB-02",
        "site": "Right Vastus Lateralis"
      }
    ],
    "familyHistory": [
      "No known immunodeficiency",
      "No prior family history of cardiac defects",
      "Prenatal: no 22q11.2 microarray performed"
    ],
    "socialHistory": [
      [
        "Birth",
        "Full-term NSVD. Noted: bilateral cleft palate at delivery, small jaw (micrognathia)."
      ],
      [
        "Cardiac echo at 24h",
        "Truncus arteriosus — referred to pediatric cardiology"
      ],
      [
        "Neonatal course",
        "Hypocalcemia seizure on day 3 (Ca 5.8 mg/dL). Resolved with IV calcium gluconate."
      ],
      [
        "Key",
        "Cardiac defect + hypocalcemia + palate anomaly = 22q11.2 deletion until proven otherwise"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "3-week-old with truncus arteriosus, hypocalcemia, and cleft palate — immunology consult for T-cell evaluation",
        "diagnosis": "DiGeorge Syndrome (22q11.2 Deletion Syndrome)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "22q11.2 deletion syndrome (DiGeorge) — newly diagnosed",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "Q93.81"
        },
        {
          "id": "prob-2",
          "description": "Truncus arteriosus — surgical repair planned",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "Q20.0"
        },
        {
          "id": "prob-3",
          "description": "Hypoparathyroidism — hypocalcemia (parathyroid aplasia)",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "E20.9"
        },
        {
          "id": "prob-4",
          "description": "Cleft palate — surgical repair planned",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "Q35.9"
        },
        {
          "id": "prob-5",
          "description": "T-cell lymphopenia — partial DiGeorge (residual thymic tissue)",
          "status": "Active",
          "onset": "Congenital",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Calcium Carbonate",
          "dose": "50 mg/kg/day",
          "route": "PO",
          "frequency": "Divided Q6H",
          "status": "Active",
          "prescriber": "Dr. NICU Attending"
        },
        {
          "id": "med-2",
          "name": "Calcitriol (1,25-OH Vitamin D)",
          "dose": "0.05 mcg/kg/day",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Endocrinology"
        }
      ],
      "vitals": [
        {
          "date": "02/22/2026",
          "time": "10:00",
          "bp": "72/44",
          "hr": "152",
          "rr": "48",
          "temp": "37.2°C",
          "spo2": "94% (room air — truncus arteriosus)",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "02/22/2026",
          "time": "10:15",
          "status": "Final",
          "orderedBy": "Dr. Pediatric Immunology",
          "accession": "LAB-402881",
          "collected": "02/22/2026 10:10",
          "fasting": "Not fasting",
          "facility": "Jackson Memorial Hospital",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "8.2",
                  "unit": "x10³/µL",
                  "range": "9.0-30.0 (newborn)",
                  "flag": "L"
                },
                {
                  "test": "Lymphocytes (Absolute)",
                  "value": "1,840",
                  "unit": "cells/µL",
                  "range": ">2500 (infants)",
                  "flag": "L"
                },
                {
                  "test": "Neutrophils",
                  "value": "62%",
                  "unit": "%",
                  "range": "35-70",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "16.1",
                  "unit": "g/dL",
                  "range": "13.5-19.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "LYMPHOCYTE SUBSETS (Flow Cytometry)",
              "results": [
                {
                  "test": "CD3+ T Cells (Absolute)",
                  "value": "820",
                  "unit": "cells/µL",
                  "range": ">2000 (infants)",
                  "flag": "L"
                },
                {
                  "test": "CD4+ T Cells (Absolute)",
                  "value": "544",
                  "unit": "cells/µL",
                  "range": ">1500 (infants)",
                  "flag": "L"
                },
                {
                  "test": "CD8+ T Cells (Absolute)",
                  "value": "248",
                  "unit": "cells/µL",
                  "range": ">500 (infants)",
                  "flag": "L"
                },
                {
                  "test": "CD19+ B Cells (Absolute)",
                  "value": "482",
                  "unit": "cells/µL",
                  "range": ">200 (infants)",
                  "flag": ""
                },
                {
                  "test": "NK Cells (Absolute)",
                  "value": "312",
                  "unit": "cells/µL",
                  "range": ">200 (infants)",
                  "flag": ""
                },
                {
                  "test": "T Cell Receptor (TCR) Diversity",
                  "value": "Reduced but present — oligoclonal pattern",
                  "unit": "",
                  "range": "Normal polyclonal",
                  "flag": "A"
                },
                {
                  "test": "Interpretation",
                  "value": "Partial DiGeorge — some residual thymic tissue producing T cells. NOT complete DiGeorge (where T cells are completely absent — rare). Partial DiGeorge: T cells present but reduced and oligoclonal. Immune function may improve with age.",
                  "unit": "",
                  "range": "",
                  "flag": "A"
                }
              ]
            },
            {
              "name": "CALCIUM & PARATHYROID",
              "results": [
                {
                  "test": "Calcium (Total)",
                  "value": "7.4",
                  "unit": "mg/dL",
                  "range": "8.8-11.2 (infants)",
                  "flag": "L"
                },
                {
                  "test": "Ionized Calcium",
                  "value": "0.88",
                  "unit": "mmol/L",
                  "range": "1.0-1.3 (infants)",
                  "flag": "L"
                },
                {
                  "test": "Phosphorus",
                  "value": "7.8",
                  "unit": "mg/dL",
                  "range": "4.5-9.0 (infants)",
                  "flag": ""
                },
                {
                  "test": "PTH (Intact)",
                  "value": "4",
                  "unit": "pg/mL",
                  "range": "10-65 (infants)",
                  "flag": "L"
                },
                {
                  "test": "25-OH Vitamin D",
                  "value": "28",
                  "unit": "ng/mL",
                  "range": ">20 (sufficient)",
                  "flag": ""
                },
                {
                  "test": "Interpretation",
                  "value": "Hypocalcemia with low PTH — hypoparathyroidism. In DiGeorge: parathyroid glands derive from 3rd/4th pharyngeal pouches — same region as thymus. Deletion disrupts both thymus AND parathyroid development.",
                  "unit": "",
                  "range": "",
                  "flag": "A"
                }
              ]
            },
            {
              "name": "22q11.2 CHROMOSOMAL MICROARRAY",
              "results": [
                {
                  "test": "Chromosomal Microarray Result",
                  "value": "22q11.21 deletion — approximately 3 Mb. Heterozygous deletion encompassing TBX1 and ~30 additional genes.",
                  "unit": "",
                  "range": "No pathogenic copy number variant",
                  "flag": "A"
                },
                {
                  "test": "TBX1 Gene (Key Gene)",
                  "value": "Deleted (hemizygous)",
                  "unit": "",
                  "range": "Normal — 2 copies",
                  "flag": "A"
                },
                {
                  "test": "Interpretation",
                  "value": "Confirms DiGeorge/22q11.2 deletion syndrome. TBX1 is the master regulator of pharyngeal arch development — haploinsufficiency explains cardiac (aortic arch, outflow tract defects), thymus, parathyroid, and palate anomalies.",
                  "unit": "",
                  "range": "",
                  "flag": "A"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "02/02/2026",
          "study": "Echocardiogram",
          "status": "Final",
          "priority": "Urgent",
          "orderedBy": "Dr. Neonatology",
          "readBy": "Dr. Pediatric Cardiology",
          "facility": "Jackson Memorial Hospital",
          "accession": "IMG-492938",
          "clinical": "Newborn — murmur, cyanosis, cleft palate",
          "technique": "2D/Doppler echocardiogram",
          "findings": "Truncus arteriosus type I — single arterial trunk arising from both ventricles with pulmonary arteries originating from the ascending truncus. VSD present (malalignment). Aortic arch: right-sided aortic arch (common in DiGeorge).",
          "impression": "Truncus arteriosus type I with right-sided aortic arch — characteristic of 22q11.2 deletion. Surgical repair required. Recommend 22q11.2 FISH/microarray.",
          "dictated": "02/02/2026 12:00",
          "verified": "02/02/2026 12:30"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Immunology Consultation",
          "date": "02/22/2026",
          "provider": "Dr. Pediatric Immunology",
          "cc": "T-cell evaluation for 22q11.2 deletion — partial DiGeorge",
          "hpi": "Sophia is a 3-week-old female with: (1) Truncus arteriosus (conotruncal cardiac defect — aortic arch/outflow tract anomaly); (2) Hypocalcemia with seizures (hypoparathyroidism); (3) Cleft palate (velopharyngeal insufficiency); (4) Micrognathia. This tetrad points immediately to 22q11.2 deletion syndrome (DiGeorge). Chromosomal microarray confirms 3 Mb deletion at 22q11.21 including TBX1. T-cell flow cytometry today: partial DiGeorge (T cells reduced but present — 820 CD3+ cells/µL, oligoclonal pattern). NOT complete DiGeorge (rare variant — no T cells). In partial DiGeorge, T cell function tends to improve with age as residual thymic tissue matures. Management: (1) Hypocalcemia — calcium + calcitriol for life unless parathyroid function recovers; (2) Cardiac: truncus repair ASAP, pre-operatively MUST use irradiated blood (risk of GVHD if non-irradiated blood given to T-cell-deficient patient); (3) Immunology: monitor T cells, prophylaxis if CD4 falls below 200 cells/µL.",
          "exam": "Infant with dysmorphic features: micrognathia, low-set ears, short philtrum, hypertelorism, cleft palate visible. No adenopathy. No thymic shadow on CXR (absent thymus). Cardiac murmur (truncus).",
          "assessment": "22q11.2 deletion (DiGeorge) confirmed. Partial T-cell deficiency. Hypoparathyroidism. Truncus arteriosus.",
          "plan": "Irradiated blood products only (even for cardiac surgery). No live vaccines until T-cell status fully characterized. Monitor T-cell counts monthly. Calcium + calcitriol management (endocrinology co-manages). Speech therapy for palate/feeding. Developmental pediatrics referral (cognitive/learning issues in ~50% of 22q11.2 patients). Genetic counseling for parents (de novo in 90%, autosomal dominant — 50% recurrence risk for future pregnancies). Cardiothoracic surgery for truncus repair at 4–6 weeks of age."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted post-cardiac surgery (truncus repair) — post-op T-cell monitoring",
        "diagnosis": "DiGeorge Syndrome — Post-operative cardiac surgery"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "22q11.2 deletion — post-op truncus arteriosus repair (Day 5)",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "Q93.81"
        },
        {
          "id": "prob-2",
          "description": "Hypocalcemia — persistent, on calcium + calcitriol",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "E20.9"
        },
        {
          "id": "prob-3",
          "description": "T-cell lymphopenia — monitoring",
          "status": "Active",
          "onset": "Congenital",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Calcium Carbonate",
          "dose": "50 mg/kg/day",
          "route": "PO",
          "frequency": "Q6H",
          "status": "Active",
          "prescriber": "Dr. Endocrinology"
        },
        {
          "id": "med-2",
          "name": "Calcitriol",
          "dose": "0.05 mcg/kg/day",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Endocrinology"
        },
        {
          "id": "med-3",
          "name": "TMP-SMX",
          "dose": "Pediatric",
          "route": "PO",
          "frequency": "3×/week — prophylaxis if T cells remain low",
          "status": "Active",
          "prescriber": "Dr. Pediatric Immunology"
        }
      ],
      "vitals": [
        {
          "date": "03/08/2026",
          "time": "08:00",
          "bp": "78/48",
          "hr": "148",
          "rr": "42",
          "temp": "37.3°C",
          "spo2": "97% (post-repair)",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/08/2026",
          "time": "07:30",
          "status": "Final",
          "orderedBy": "Dr. Pediatric Immunology",
          "accession": "LAB-429011",
          "collected": "03/08/2026 07:25",
          "fasting": "Not fasting",
          "facility": "Jackson Memorial Hospital",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "POST-OP T-CELL MONITORING",
              "results": [
                {
                  "test": "CD3+ T Cells",
                  "value": "1,140",
                  "unit": "cells/µL",
                  "range": ">2000 (infants)",
                  "flag": "L"
                },
                {
                  "test": "CD4+ T Cells",
                  "value": "780",
                  "unit": "cells/µL",
                  "range": ">1500 (infants)",
                  "flag": "L"
                },
                {
                  "test": "Note",
                  "value": "T cells recovering compared to pre-op levels (820 → 1140 CD3+). Post-bypass lymphocyte decrease is transient and expected. Trend is upward. Continue monitoring.",
                  "unit": "",
                  "range": "",
                  "flag": "A"
                },
                {
                  "test": "Calcium (Total)",
                  "value": "7.9",
                  "unit": "mg/dL",
                  "range": "8.8-11.2",
                  "flag": "L"
                },
                {
                  "test": "PTH (Intact)",
                  "value": "6",
                  "unit": "pg/mL",
                  "range": "10-65",
                  "flag": "L"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-2",
          "type": "Post-Operative Immunology Note",
          "date": "03/08/2026",
          "provider": "Dr. Pediatric Immunology",
          "cc": "Post-cardiac surgery monitoring — T-cell improving, hypocalcemia persistent",
          "hpi": "Day 5 post-truncus arteriosus repair. Surgery used irradiated blood products — no GVHD. Cardiothoracic team notes good hemodynamic recovery. Immunology note: T cells improving (820 → 1,140 CD3+) — partial DiGeorge, expected gradual improvement. Calcium still low (7.9 mg/dL) — hypoparathyroidism persistent, calcium + calcitriol will be lifelong. Hypocalcemia can worsen during physiological stress (surgery, illness) — reinforce to parents: any illness/surgery may precipitate hypocalcemia and require IV calcium.",
          "exam": "Improving post-op. Extubated Day 3. Chest tubes removed. No signs of infection.",
          "assessment": "Partial DiGeorge post-cardiac repair. T-cell recovery trajectory favorable. Persistent hypoparathyroidism.",
          "plan": "Weekly T-cell monitoring until stable >1500 CD4+/µL. Calcium monitoring weekly. Continue TMP-SMX prophylaxis. Discharge planning when medically stable. VPI (velopharyngeal insufficiency from cleft palate) — ENT follow-up for speech outcomes. Neurodevelopmental monitoring plan established — 22q11.2 carries ~30% risk of psychotic disorders in adolescence and high risk of learning disabilities. Cardiothoracic follow-up for cardiac repair outcomes."
        }
      ]
    },
    "office": {
      "patient": {
        "chiefComplaint": "6-month follow-up — 22q11.2, T-cell trending up, vaccine counseling",
        "diagnosis": "DiGeorge Syndrome (22q11.2) — Partial T-cell deficiency, improving"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "22q11.2 deletion (DiGeorge) — partial T-cell deficiency improving",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "Q93.81"
        },
        {
          "id": "prob-2",
          "description": "Hypoparathyroidism — stable on calcium + calcitriol",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "E20.9"
        },
        {
          "id": "prob-3",
          "description": "Post-truncus repair — good cardiac function",
          "status": "Active",
          "onset": "Resolved",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Developmental delay — speech referral active",
          "status": "Active",
          "onset": "Congenital",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Calcium Carbonate",
          "dose": "Ongoing",
          "route": "PO",
          "frequency": "Q6H",
          "status": "Active",
          "prescriber": "Dr. Endocrinology"
        },
        {
          "id": "med-2",
          "name": "Calcitriol",
          "dose": "Ongoing",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Endocrinology"
        }
      ],
      "vitals": [
        {
          "date": "08/01/2026",
          "time": "10:00",
          "bp": "88/56",
          "hr": "118",
          "rr": "32",
          "temp": "36.9°C",
          "spo2": "99%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "08/01/2026",
          "time": "10:15",
          "status": "Final",
          "orderedBy": "Dr. Pediatric Immunology",
          "accession": "LAB-482011",
          "collected": "08/01/2026 10:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "T-CELL MONITORING — 6 Months",
              "results": [
                {
                  "test": "CD3+ T Cells (Absolute)",
                  "value": "2,240",
                  "unit": "cells/µL",
                  "range": ">2000 (infants)",
                  "flag": ""
                },
                {
                  "test": "CD4+ T Cells (Absolute)",
                  "value": "1,680",
                  "unit": "cells/µL",
                  "range": ">1500 (infants)",
                  "flag": ""
                },
                {
                  "test": "CD8+ T Cells",
                  "value": "520",
                  "unit": "cells/µL",
                  "range": ">500",
                  "flag": ""
                },
                {
                  "test": "Interpretation",
                  "value": "T cells now in normal range. Typical partial DiGeorge trajectory — thymic tissue matures over first 6 months → T-cell recovery. Live vaccine discussion appropriate: MMR may be given NOW per ACIP guidelines for patients with partial DiGeorge whose CD4 has normalized and T-cell function confirmed. SCID spectrum (complete DiGeorge) → NO live vaccines ever.",
                  "unit": "",
                  "range": "",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-3",
          "type": "Immunology Follow-Up — 6 months",
          "date": "08/01/2026",
          "provider": "Dr. Pediatric Immunology",
          "cc": "T-cell normalized — vaccine counseling for partial DiGeorge",
          "hpi": "Sophia at 6 months. T cells now normal (CD4 1,680 cells/µL). Partial DiGeorge — expected recovery. Calcium stable on calcium + calcitriol (lifelong hypoparathyroidism). Cardiac: good function post-repair. Developmental: behind on speech milestones — speech therapy active. VPI (velopharyngeal insufficiency) — palate repair planned at 12 months.\n\nVaccine counseling: Now that T cells are normal and T-cell function can be demonstrated (mitogen proliferation normal — tested today), LIVE vaccines (MMR, varicella) are SAFE in partial DiGeorge with normalized T cells. This contrasts with COMPLETE DiGeorge and SCID where live vaccines are NEVER given. This distinction is a high-yield ABAI board concept.",
          "exam": "Thriving infant. Alert and interactive. Normal cardiac exam. No lymphadenopathy.",
          "assessment": "Partial DiGeorge — T-cell recovery complete. Safe for live vaccines. Lifelong calcium management.",
          "plan": "Give MMR, varicella today per ACIP schedule. Continue TMP-SMX until age 1 then reassess. Calcium/calcitriol monitoring — endocrinology continues. Palate repair planning at 12 months. Neurodevelopmental monitoring throughout adolescence (schizophrenia/psychotic disorder risk counseling for parents). Annual echocardiogram for cardiac function. Refer for 22q11.2 patient support network."
        }
      ]
    }
  },
  "references": [
    {
      "id": "AAAAI-PID-PP-2015",
      "title": "Practice parameter for the diagnosis and management of primary immunodeficiency",
      "authors": "Bonilla FA, Barlan I, Chapel H, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2015,
      "doi": "10.1016/j.jaci.2015.04.049",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4837186/",
      "openAccess": true,
      "validates": [
        "DiGeorge: cardiac + T-cell + hypoparathyroidism from 3rd/4th pharyngeal pouch defect",
        "Complete DiGeorge: NO live vaccines. Partial DiGeorge: live vaccines after T-cell recovery confirmed",
        "Irradiated blood products required when T-cell deficiency present",
        "22q11.2 microarray: diagnostic gold standard (FISH detects classic deletion, microarray more comprehensive)"
      ]
    },
    {
      "id": "StatPearls-DiGeorge",
      "title": "DiGeorge syndrome",
      "authors": "Brizuela M, Winters R.",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK459209/",
      "openAccess": true,
      "validates": [
        "TBX1 haploinsufficiency — pharyngeal arch/pouch anomalies",
        "Cardiac defects: conotruncal (truncus, interrupted arch, ToF, VSD) in 75%",
        "Partial vs complete DiGeorge: T cell counts distinguish",
        "Partial DiGeorge: live vaccines after T cell recovery documented",
        "Psychiatric risk: schizophrenia spectrum in ~30% of 22q11.2 patients"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "DiGeorge syndrome (22q11.2 deletion) is the most common chromosomal deletion syndrome (~1:4,000 births). The deletion disrupts TBX1 → third and fourth pharyngeal pouch development failure → thymic hypoplasia/aplasia + parathyroid hypoplasia + conotruncal cardiac defects.",
      "The immune phenotype varies widely: partial DiGeorge (most common) — reduced T cells but functional; complete DiGeorge (<1%) — absent thymic tissue → T-cell aplasia = SCID-like phenotype requiring thymus transplantation.",
      "CATCH-22 mnemonic: Cardiac defects (conotruncal — tetralogy of Fallot, truncus arteriosus, interrupted aortic arch), Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia (hypoparathyroidism), 22q11 deletion."
    ],
    "boardPearls": [
      "22q11.2 deletion: most common chromosomal microdeletion. TBX1 gene critical for pharyngeal arch development.",
      "CATCH-22: Cardiac (conotruncal), Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, 22q11.",
      "Hypocalcemia: neonatal tetany/seizures → hypoparathyroidism. Most common presentation in NICU.",
      "T-cell range: partial DiGeorge (most) — CD4 200–1,500, functional. Complete DiGeorge (<1%) — T cells absent, SCID-like.",
      "Complete DiGeorge treatment: thymus transplantation (cultured thymus from deceased donor). NOT HSCT (no thymus to educate donor T cells).",
      "Associated conditions: schizophrenia/psychiatric disorders (~30%), learning disabilities, autoimmune disease (increased risk).",
      "Detection: FISH for 22q11.2 deletion. Chromosomal microarray more sensitive."
    ]
  },
  "meta": {
    "diagnosis": "DiGeorge Syndrome (22q11.2 Deletion Syndrome) — Neonatal Presentation",
    "caseId": "digeorge-22q11"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: DiGeorge syndrome (22q11.2 deletion) presenting with the classic triad of conotruncal cardiac defect (truncus arteriosus), hypocalcemia, and palate anomaly. Key learning: (1) The 22q11.2 deletion syndrome spectrum includes DiGeorge syndrome, velocardiofacial syndrome, and conotruncal anomaly face syndrome — all caused by the same 1.5-3 Mb deletion on chromosome 22. The mnemonic CATCH-22 captures the phenotype: Cardiac anomalies (conotruncal — truncus arteriosus, TOF, interrupted aortic arch type B, VSD), Abnormal facies (micrognathia, low-set ears, hypertelorism), Thymic hypoplasia or aplasia (T-cell deficiency), Cleft palate (especially submucous), Hypocalcemia (parathyroid hypoplasia), 22q11.2 deletion. (2) Diagnostic workup: confirmation is by chromosomal microarray or FISH for 22q11.2. In any neonate with a conotruncal heart defect plus hypocalcemia or palate anomaly, this deletion should be assumed until proven otherwise. Additional evaluation includes echo, calcium and PTH, T-cell subsets (CD3, CD4, CD8, naive CD4 via CD45RA), TREC analysis (often flagged on newborn screen in complete DiGeorge), immunoglobulin levels, and mitogen response. (3) Immunologic spectrum: partial DiGeorge (majority of cases) has residual thymic tissue and only modest T-cell lymphopenia that typically improves over the first year. Complete DiGeorge (<1%) has athymia, profound T-cell deficiency, and is a pediatric emergency mimicking SCID — requires thymus transplantation or consideration of hematopoietic stem cell transplant. (4) Management pearls: LIVE VACCINES (MMR, varicella, rotavirus, BCG) are CONTRAINDICATED until T-cell function is documented adequate (CD4 >500, normal mitogen response, and usually age >12 months with reassuring subsets). All blood products must be irradiated and CMV-negative to prevent transfusion-associated GVHD and CMV transmission. Calcium and calcitriol replacement are mainstays of hypoparathyroidism management; avoid high phosphate formulas that can precipitate hypocalcemic seizures. Multidisciplinary care includes cardiology, immunology, endocrinology, genetics, ENT, speech/feeding therapy, and developmental pediatrics. (5) Classic pitfall: missing the diagnosis in older children who present with learning disability, psychiatric symptoms (schizophrenia risk is 25x), or recurrent sinopulmonary infections without the florid neonatal presentation. Any child with an unexplained cardiac defect plus speech/language delay, hypernasal speech, or recurrent infection deserves a microarray. Genetic counseling is essential — the deletion is de novo in ~90% but inherited autosomal dominant in ~10%, with variable expressivity that can mislead family history taking."
    }
  }
};
