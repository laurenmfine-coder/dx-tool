/* emr-data/xla-brutons.js — PID Case: X-Linked Agammaglobulinemia (XLA / Bruton's) */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Ethan Prescott",
      "patientHPI": "My son has had a fever for two days and won't put any weight on his right leg, and his knee is really swollen - I'm worried because he's had so many infections already for a 2-year-old.",
      "dob": "08/14/2023",
      "age": "2",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-481203",
      "language": "English",
      "race": "White",
      "phone": "(630) 555-9740",
      "email": "prescott.family@email.com",
      "address": "2863 Willow Way, Columbus, OH 43215",
      "insurance": "Blue Cross Blue Shield",
      "pcp": "Dr. Angela Simmons, MD (Pediatrics)",
      "pharmacy": "Walgreens — Sunrise Blvd",
      "emergencyContact": {
        "name": "David Prescott",
        "phone": "(313) 555-9234",
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
        "name": "DTaP (Dose 3)",
        "date": "02/2024",
        "lot": "PED-24",
        "site": "Left Thigh"
      },
      {
        "name": "PCV15 (Dose 3)",
        "date": "02/2024",
        "lot": "PED-24A",
        "site": "Right Thigh"
      }
    ],
    "familyHistory": [
      "Maternal uncle: died of bacterial meningitis at age 3 (undiagnosed immunodeficiency suspected)",
      "No other family history of immunodeficiency"
    ],
    "socialHistory": [
      [
        "Living situation",
        "Lives with both parents, no siblings"
      ],
      [
        "Daycare",
        "Started daycare at 12 months"
      ],
      [
        "Key",
        "Male infant with recurrent bacterial infections after 6 months — absent B cells — XLA until proven otherwise"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "2-year-old male — 4th serious bacterial infection; now with septic arthritis",
        "diagnosis": "X-Linked Agammaglobulinemia (XLA)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Septic arthritis — right knee (Streptococcus pneumoniae)",
          "status": "Active",
          "onset": "Acute",
          "icd10": "M00.061"
        },
        {
          "id": "prob-2",
          "description": "Prior: S. pneumoniae bacteremia (age 14 months)",
          "status": "Resolved",
          "onset": "Past",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Prior: Recurrent otitis media — 5 episodes in 8 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Prior: Haemophilus influenzae pneumonia (age 18 months)",
          "status": "Resolved",
          "onset": "Past",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Normal growth and development",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amoxicillin",
          "dose": "45 mg/kg/day",
          "route": "PO",
          "frequency": "Divided BID (recent course)",
          "status": "Active",
          "prescriber": "Dr. Angela Simmons, MD"
        },
        {
          "id": "med-2",
          "name": "Cefazolin",
          "dose": "50 mg/kg IV",
          "route": "IV",
          "frequency": "Q8H (admitted)",
          "status": "Active",
          "prescriber": "Dr. ED Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/01/2026",
          "time": "14:30",
          "bp": "92/58",
          "hr": "128",
          "rr": "28",
          "temp": "38.9°C",
          "spo2": "97%",
          "pain": "7/10 (crying, guarding right knee)"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "14:45",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-281044",
          "collected": "03/01/2026 14:40",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "18.4",
                  "unit": "x10³/µL",
                  "range": "6.0-17.5",
                  "flag": "H"
                },
                {
                  "test": "Neutrophils",
                  "value": "82%",
                  "unit": "%",
                  "range": "35-65",
                  "flag": "H"
                },
                {
                  "test": "Lymphocytes",
                  "value": "12%",
                  "unit": "%",
                  "range": "25-50",
                  "flag": "L"
                },
                {
                  "test": "Hemoglobin",
                  "value": "10.8",
                  "unit": "g/dL",
                  "range": "10.5-13.5",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "412",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "IMMUNOGLOBULINS",
              "results": [
                {
                  "test": "IgG",
                  "value": "42",
                  "unit": "mg/dL",
                  "range": "345-1213 (age 2)",
                  "flag": "L"
                },
                {
                  "test": "IgA",
                  "value": "<7",
                  "unit": "mg/dL",
                  "range": "14-106 (age 2)",
                  "flag": "L"
                },
                {
                  "test": "IgM",
                  "value": "<5",
                  "unit": "mg/dL",
                  "range": "43-173 (age 2)",
                  "flag": "L"
                },
                {
                  "test": "IgE Total",
                  "value": "2",
                  "unit": "IU/mL",
                  "range": "0-15 (age 2)",
                  "flag": ""
                }
              ]
            },
            {
              "name": "LYMPHOCYTE SUBSETS (Flow Cytometry)",
              "results": [
                {
                  "test": "CD3+ T Cells",
                  "value": "78%",
                  "unit": "%",
                  "range": "60-85",
                  "flag": ""
                },
                {
                  "test": "CD4+ T Cells",
                  "value": "44%",
                  "unit": "%",
                  "range": "30-60",
                  "flag": ""
                },
                {
                  "test": "CD8+ T Cells",
                  "value": "31%",
                  "unit": "%",
                  "range": "15-35",
                  "flag": ""
                },
                {
                  "test": "CD19+ B Cells",
                  "value": "0.1%",
                  "unit": "%",
                  "range": "15-30",
                  "flag": "L"
                },
                {
                  "test": "CD19+ B Cells (Absolute)",
                  "value": "8",
                  "unit": "cells/µL",
                  "range": "200-500",
                  "flag": "L"
                },
                {
                  "test": "NK Cells (CD56+)",
                  "value": "18%",
                  "unit": "%",
                  "range": "5-20",
                  "flag": ""
                }
              ]
            },
            {
              "name": "JOINT FLUID ANALYSIS — Right Knee Aspirate",
              "results": [
                {
                  "test": "WBC (Joint)",
                  "value": "94,000",
                  "unit": "cells/µL",
                  "range": "<200",
                  "flag": "H"
                },
                {
                  "test": "PMN%",
                  "value": "96%",
                  "unit": "%",
                  "range": "<25%",
                  "flag": "H"
                },
                {
                  "test": "Glucose (Joint)",
                  "value": "28",
                  "unit": "mg/dL",
                  "range": "Serum-like",
                  "flag": "L"
                },
                {
                  "test": "Culture (Joint)",
                  "value": "Pending — GPCs in pairs/short chains",
                  "unit": "",
                  "range": "No growth",
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
          "date": "03/01/2026",
          "study": "Right Knee X-Ray",
          "status": "Final",
          "priority": "Stat",
          "orderedBy": "Dr. ED Attending",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-381029",
          "clinical": "Joint swelling, fever, inability to bear weight — rule out septic arthritis",
          "technique": "AP and lateral views",
          "findings": "Soft tissue swelling and joint effusion of right knee. No fracture. No periosteal reaction.",
          "impression": "Right knee effusion — clinical correlation for septic arthritis. Recommend arthrocentesis.",
          "dictated": "03/01/2026 15:10",
          "verified": "03/01/2026 15:30"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/01/2026",
          "provider": "Dr. ED Attending",
          "cc": "Fever and right knee swelling — 4th serious bacterial infection",
          "hpi": "Ethan Prescott is a 2-year-old male brought by parents with 2 days of fever to 38.9°C, refusal to weight-bear on right leg, and progressive right knee swelling. Mother notes this is his 4th significant bacterial infection. He had S. pneumoniae bacteremia at 14 months, recurrent otitis media (5 episodes since 12 months), and Haemophilus influenzae pneumonia at 18 months. His infections all occurred AFTER 6 months of age. Maternal uncle died at age 3 from presumed bacterial meningitis. Immunizations are up to date. He has been on multiple antibiotic courses with temporary improvement but recurring infections. PCP noted 'low lymphocytes' on prior CBC but deferred workup.",
          "exam": "Ill-appearing toddler. Temp 38.9°C. HR 128. RR 28. Right knee: 2+ effusion, warmth, erythema, exquisitely tender to palpation. Unable to actively or passively flex knee. Remainder of exam unremarkable. Tonsils present. No lymphadenopathy. No hepatosplenomegaly.",
          "assessment": "Septic arthritis right knee — S. pneumoniae most likely given history. Pattern of recurrent encapsulated bacterial infections beginning after 6 months (after maternal IgG wanes) with absent B cells on flow cytometry — XLA (X-linked agammaglobulinemia, Bruton's) most likely diagnosis.",
          "plan": "Arthrocentesis complete — septic arthritis confirmed. IV cefazolin. Urgent hematology/immunology consult. Send BTK gene testing. IVIG loading dose once diagnosis confirmed."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted: Septic arthritis + XLA diagnosis and initiation of IVIG",
        "diagnosis": "X-Linked Agammaglobulinemia (XLA)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Septic arthritis — right knee (S. pneumoniae confirmed)",
          "status": "Active",
          "onset": "Acute",
          "icd10": "M00.061"
        },
        {
          "id": "prob-2",
          "description": "X-Linked Agammaglobulinemia (XLA) — newly diagnosed",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "D80.0"
        },
        {
          "id": "prob-3",
          "description": "Panhypogammaglobulinemia with absent B cells",
          "status": "Active",
          "onset": "Congenital",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cefazolin",
          "dose": "50 mg/kg",
          "route": "IV",
          "frequency": "Q8H × 3 weeks total",
          "status": "Active",
          "prescriber": "Dr. Pediatric Orthopedics"
        },
        {
          "id": "med-2",
          "name": "IVIG (Intravenous Immunoglobulin)",
          "dose": "400 mg/kg",
          "route": "IV",
          "frequency": "Loading dose, then q3-4 weeks",
          "status": "Active",
          "prescriber": "Dr. Pediatric Immunology"
        }
      ],
      "vitals": [
        {
          "date": "03/03/2026",
          "time": "08:00",
          "bp": "96/62",
          "hr": "104",
          "rr": "22",
          "temp": "37.4°C",
          "spo2": "99%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/03/2026",
          "time": "07:30",
          "status": "Final",
          "orderedBy": "Dr. Pediatric Immunology",
          "accession": "LAB-282190",
          "collected": "03/03/2026 07:25",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "BTK GENE SEQUENCING (Send-Out)",
              "results": [
                {
                  "test": "BTK Mutation",
                  "value": "Pathogenic variant identified: c.1684C>T (p.Arg562Cys) in BTK gene — hemizygous",
                  "unit": "",
                  "range": "No mutation",
                  "flag": "A"
                },
                {
                  "test": "Interpretation",
                  "value": "Confirms X-linked agammaglobulinemia (Bruton's). BTK kinase-dead mutation. Absent BTK protein expression expected on flow cytometry monocyte staining.",
                  "unit": "",
                  "range": "Normal BTK expression",
                  "flag": "A"
                }
              ]
            },
            {
              "name": "REPEAT IMMUNOGLOBULINS (Post-IVIG loading, Day 2)",
              "results": [
                {
                  "test": "IgG (post-IVIG)",
                  "value": "621",
                  "unit": "mg/dL",
                  "range": "Target trough >500",
                  "flag": ""
                },
                {
                  "test": "IgA",
                  "value": "<7",
                  "unit": "mg/dL",
                  "range": "14-106",
                  "flag": "L"
                },
                {
                  "test": "IgM",
                  "value": "<5",
                  "unit": "mg/dL",
                  "range": "43-173",
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
          "type": "Inpatient Progress Note",
          "date": "03/03/2026",
          "provider": "Dr. Pediatric Immunology",
          "cc": "XLA diagnosis confirmed — IVIG initiated",
          "hpi": "Day 3 of admission. BTK gene sequencing returned: pathogenic hemizygous variant in BTK confirming XLA. Clinical picture consistent: male, onset after 6 months (after maternal IgG wanes), recurrent encapsulated bacterial infections (S. pneumoniae, H. influenzae — classic organisms for humoral immunodeficiency), profound panhypogammaglobulinemia, absent B cells (CD19+ 0.1%), normal T cells and NK cells. Key distinction from CVID: age of onset (infancy vs adulthood), absent B cells (CVID has low but present B cells), and BTK mutation (CVID is polygenic/unknown cause in most cases). IVIG loading dose 400 mg/kg given — IgG trough now 621 mg/dL. Maintenance IVIG 400-600 mg/kg q3-4 weeks planned to maintain trough >500 mg/dL. Orthopedic team performing arthroscopic washout today. Genetic counseling arranged for family — X-linked, 50% of brothers affected, 50% of sisters are carriers.",
          "exam": "Improved. Afebrile. HR 104. Right knee: improved, post-washout, moderate swelling, moving more freely.",
          "assessment": "XLA confirmed. Septic arthritis improving on IV antibiotics + surgical washout. IVIG initiated.",
          "plan": "Complete 3-week IV antibiotic course. Discharge on home IVIG q3-4 weeks (home infusion referral). No live vaccines — ever. Maternal carrier testing. Sibling testing. Immunology follow-up in 4 weeks with IgG trough."
        }
      ]
    },
    "office": {
      "patient": {
        "chiefComplaint": "Follow-up: XLA on IVIG — trough check and vaccine review",
        "diagnosis": "X-Linked Agammaglobulinemia (XLA) — on IVIG maintenance"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "X-Linked Agammaglobulinemia — on IVIG q3 weeks",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "D80.0"
        },
        {
          "id": "prob-2",
          "description": "Septic arthritis — resolved post-arthroscopy + antibiotics",
          "status": "Resolved",
          "onset": "Past",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Hearing evaluation — mild CHL noted, bilateral tympanic membranes scarred from recurrent OM",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "IVIG (Gammagard Liquid)",
          "dose": "500 mg/kg",
          "route": "IV",
          "frequency": "Every 3 weeks (home infusion)",
          "status": "Active",
          "prescriber": "Dr. Pediatric Immunology"
        }
      ],
      "vitals": [
        {
          "date": "03/24/2026",
          "time": "10:00",
          "bp": "94/60",
          "hr": "96",
          "rr": "22",
          "temp": "36.9°C",
          "spo2": "99%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/24/2026",
          "time": "10:15",
          "status": "Final",
          "orderedBy": "Dr. Pediatric Immunology",
          "accession": "LAB-294011",
          "collected": "03/24/2026 10:10",
          "fasting": "Fasting (pre-infusion trough)",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "IVIG TROUGH — IgG Pre-Infusion",
              "results": [
                {
                  "test": "IgG Trough",
                  "value": "534",
                  "unit": "mg/dL",
                  "range": "Target >500 mg/dL",
                  "flag": ""
                },
                {
                  "test": "Interpretation",
                  "value": "Adequate — maintain current dose. Target trough >500 mg/dL. If breakthrough infections develop, target >700 mg/dL.",
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
          "type": "Office Visit — Allergy/Immunology",
          "date": "03/24/2026",
          "provider": "Dr. Pediatric Immunology",
          "cc": "XLA maintenance — trough adequate, vaccine counseling",
          "hpi": "Ethan is doing well on IVIG q3 weeks. No infections since discharge. IgG trough today 534 mg/dL — above target. Parents ask: (1) Can he get vaccines? (2) Will he get better? (3) Can siblings be checked? Counseled: No live vaccines ever (MMR, varicella, LAIV, rotavirus, yellow fever, oral polio — all contraindicated. Risk of vaccine-strain infection without protective humoral immunity). Killed/inactivated vaccines are safe but will NOT generate protective titers — do not use titers to assess immunity in XLA. Continue IVIG for life. Prognosis: good with consistent IVIG — normal life expectancy, reduced quality of life from infusion burden. Bronchiectasis is the major long-term complication from pre-diagnosis pulmonary infections. Siblings: maternal brothers have 50% chance of XLA, sisters have 50% chance of being carriers. Recommend genetic testing for mother (confirm carrier) and any male siblings.",
          "exam": "Well-appearing. No adenopathy. Tonsils absent (noted — common in XLA, B cell-dependent tonsillar tissue absent). Lungs clear. Joints intact.",
          "assessment": "XLA on IVIG — adequate trough. No active infections.",
          "plan": "Continue IVIG q3 weeks. Target trough >500 mg/dL. Hearing follow-up for CHL from OM damage. Bronchiectasis surveillance CT chest at age 5 if no prior CT. Maternal carrier BTK testing ordered. Genetic counseling for siblings."
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
        "XLA diagnostic criteria: absent B cells + BTK mutation + panhypogammaglobulinemia",
        "IVIG dosing: 400–600 mg/kg q3–4 weeks, trough target >500 mg/dL",
        "Live vaccine contraindication in humoral immunodeficiency",
        "XLA vs CVID: age of onset, B cell count, BTK mutation"
      ]
    },
    {
      "id": "StatPearls-XLA",
      "title": "X-linked agammaglobulinemia",
      "authors": "Winstead JM, Kemp WL.",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK549866/",
      "openAccess": true,
      "validates": [
        "BTK kinase function in pre-B cell to B cell maturation",
        "Absent CD19+ B cells in all lymphoid compartments",
        "Onset at 6 months after maternal IgG wanes",
        "Encapsulated organism susceptibility — S. pneumoniae, H. influenzae",
        "IVIG lifelong, trough target >500 mg/dL"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "XLA (X-linked agammaglobulinemia, Bruton's disease) is caused by BTK (Bruton's tyrosine kinase) mutations → B-cell developmental arrest at pro-B/pre-B cell stage → absent circulating B cells → absent all immunoglobulins. Presents in male infants at 6–9 months when maternal IgG wanes.",
      "XLA classic presentation: recurrent bacterial sinopulmonary infections (encapsulated organisms) in a male infant after 6 months of age, with absent B cells and absent all serum immunoglobulins.",
      "BTK inhibitors (ibrutinib, acalabrutinib) used in B-cell malignancies work by the same pathway — XLA is essentially a natural BTK knockout, demonstrating BTK's essential role in B-cell development."
    ],
    "boardPearls": [
      "XLA: BTK mutation → B-cell arrest. Absent B cells (CD19/CD20). All Ig classes low (IgG, IgA, IgM, IgE).",
      "Onset: 6–9 months (after maternal IgG wanes). Male (X-linked).",
      "Infections: encapsulated bacteria (S. pneumoniae, H. influenzae, S. aureus), Giardia, enteroviruses.",
      "Unlike CVID: B cells ABSENT in XLA; B cells PRESENT in CVID.",
      "Live vaccines: absolutely contraindicated. Oral polio vaccine (OPV) can cause vaccine-derived polio in XLA — use IPV only.",
      "Treatment: IVIG (same as CVID). BTK gene therapy: investigational.",
      "BTK inhibitors (ibrutinib): work by same mechanism — pharmacologic BTK inhibition for CLL/lymphoma."
    ]
  },
  "meta": {
    "diagnosis": "X-Linked Agammaglobulinemia (XLA / Bruton's Agammaglobulinemia)",
    "caseId": "xla-brutons"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: X-linked agammaglobulinemia (XLA), also called Bruton's agammaglobulinemia — a primary immunodeficiency. Key learning: (1) XLA is caused by mutations in Bruton tyrosine kinase (BTK), a signaling molecule essential for B-cell maturation beyond the pro-B cell stage. Result: near-absence of mature B cells in circulation, severely reduced or absent immunoglobulins (IgG, IgA, IgM), and recurrent bacterial infections. X-linked inheritance — affects almost exclusively males; female carriers typically asymptomatic. Incidence about 1 in 200,000 live male births. (2) Presentation. Typical onset: 6-9 months of age as maternal IgG wanes. Recurrent bacterial infections with encapsulated organisms: Streptococcus pneumoniae (sinusitis, otitis, pneumonia, meningitis), Haemophilus influenzae, Streptococcus pyogenes, Staphylococcus aureus. Gastrointestinal: Giardia lamblia, enteroviruses (persistent and difficult to eradicate), chronic diarrhea. Respiratory: chronic sinusitis, recurrent otitis media, bronchiectasis (late complication from recurrent pneumonia). Skin: pyoderma, ecthyma. Unique vulnerabilities: live viral vaccines (poliovirus vaccine historically caused vaccine-associated paralytic polio in XLA patients), enteroviral meningoencephalitis (difficult to eradicate), and chronic lung disease from recurrent infections. Physical exam: ABSENT or markedly hypoplastic tonsils, adenoids, and peripheral lymph nodes (hallmark finding) — absence of visible tonsils in a boy with recurrent infections should trigger workup. (3) Diagnostic workup. Immunoglobulin levels: IgG, IgA, IgM all markedly reduced or undetectable (IgG <200 typically). Flow cytometry of peripheral blood: <2% B cells (CD19+), T cells typically normal. BTK gene sequencing confirms diagnosis and identifies specific mutation. Protein analysis: absent BTK protein expression in monocytes by flow cytometry. Specific antibody response to vaccines (pneumococcal, tetanus, diphtheria): absent. Genetic counseling for family — female carriers can be identified with targeted mutation testing. (4) Treatment. (a) IMMUNOGLOBULIN REPLACEMENT is the mainstay — IVIG every 3-4 weeks OR subcutaneous immunoglobulin (weekly or more frequent) at doses 400-600 mg/kg monthly (adjusted to maintain trough IgG >500 mg/dL or higher based on infection frequency). Immunoglobulin therapy dramatically reduces infection rate and morbidity. (b) Prompt, aggressive treatment of infections — bacterial infections can be severe; low threshold for cultures, imaging, and broad-spectrum antibiotics. (c) PROPHYLACTIC antibiotics in selected patients with breakthrough infections — TMP-SMX, azithromycin. (d) NO LIVE VACCINES — oral polio vaccine, yellow fever, MMR, varicella, BCG, rotavirus are CONTRAINDICATED (household members should also avoid oral polio vaccine, now uncommon; MMR and varicella in household members are acceptable). Inactivated vaccines (inactivated polio — IPV, inactivated influenza, pneumococcal, meningococcal) are safe but often ineffective due to antibody deficiency; they can be given but don't substitute for immunoglobulin replacement. (e) Long-term lung disease management: aggressive treatment of pulmonary infections, chest physiotherapy, bronchodilators, HRCT surveillance for bronchiectasis, and pulmonary rehabilitation. (f) Surveillance for lymphoreticular malignancy (lymphoma, leukemia have modestly increased risk). (g) Hematopoietic stem cell transplant is rarely indicated — considered in severe cases with bronchiectasis progression or persistent enteroviral infection. BTK-targeted gene therapy is in clinical trials. (5) Long-term outcomes. With early diagnosis, immunoglobulin replacement, and prompt infection treatment, most patients have near-normal life expectancy with good quality of life. Complications: bronchiectasis (leading cause of long-term morbidity), chronic sinusitis, GI infections, psychological and social impact of chronic illness and regular infusions. Genetic counseling for family planning in affected men (all daughters obligate carriers; no sons affected) and for carrier women (50% of sons affected, 50% of daughters carriers). Classic pitfalls: (a) delayed diagnosis in a boy with recurrent ENT and pulmonary infections — check immunoglobulin levels and lymph node/tonsil size; absent tonsils is a key clue. (b) Giving live vaccines — can cause disseminated vaccine-strain disease. (c) Attributing chronic sinopulmonary disease to 'just asthma' or 'allergies' without considering immunodeficiency — recurrent otitis media beyond age 4-6, recurrent sinusitis, or recurrent pneumonia warrants immunologic evaluation. (d) Not escalating immunoglobulin dose in patients with breakthrough infections — target trough IgG levels, not minimum replacement. (e) Forgetting household contact considerations — counsel about vaccines, hygiene, and early evaluation for infections."
    }
  }
};
