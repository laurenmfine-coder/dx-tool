/* emr-data/scid-ada.js — PID Case: Severe Combined Immunodeficiency (ADA-SCID), T-B-NK+ */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Amara Osei",
      "patientHPI": "The doctors called and said something came back abnormal on my baby's newborn screening test and we need to come in right away. She seems completely fine to me - she's eating well, gaining weight, and hasn't been sick at all, so I'm confused and worried about what this could mean.",
      "dob": "01/15/2026",
      "age": "6 weeks",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-592847",
      "language": "English",
      "race": "Black or African American",
      "phone": "(704) 555-9955",
      "email": "osei.family@email.com",
      "address": "7337 Juniper Dr, Pittsburgh, PA 15205",
      "insurance": "Medicaid",
      "pcp": "Dr. Patricia Walker, MD (Neonatology → Pediatrics)",
      "pharmacy": "Jackson Memorial Pharmacy",
      "emergencyContact": {
        "name": "Kwame Osei",
        "phone": "(404) 555-2210",
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
        "date": "01/15/2026",
        "lot": "NB-01",
        "site": "Right Vastus Lateralis"
      }
    ],
    "familyHistory": [
      "No known immunodeficiency in family",
      "Parents: non-consanguineous",
      "No prior affected siblings"
    ],
    "socialHistory": [
      [
        "Birth",
        "Full term, uncomplicated vaginal delivery"
      ],
      [
        "Newborn screening",
        "TREC (T-cell receptor excision circles) — ABSENT on NBS — flagged at 3 days of life"
      ],
      [
        "Key",
        "SCID detected by newborn screening (TREC absent) before clinical disease. Treatment window open — HSCT curative."
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Newborn referral — absent TRECs on newborn screening — evaluate for SCID",
        "diagnosis": "Severe Combined Immunodeficiency (ADA-SCID)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Absent TRECs on newborn blood spot screening — urgent SCID evaluation",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "D81.3"
        },
        {
          "id": "prob-2",
          "description": "Otherwise well-appearing 6-week-old",
          "status": "Active",
          "onset": "",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "PCP prophylaxis (TMP-SMX)",
          "dose": "Pediatric dosing",
          "route": "PO",
          "frequency": "3×/week — started empirically pending workup",
          "status": "Active",
          "prescriber": "Dr. Immunology Fellow"
        }
      ],
      "vitals": [
        {
          "date": "02/28/2026",
          "time": "09:00",
          "bp": "78/48",
          "hr": "144",
          "rr": "42",
          "temp": "37.1°C",
          "spo2": "99% (room air)",
          "pain": "N/A — infant"
        }
      ],
      "labs": [
        {
          "date": "02/28/2026",
          "time": "09:30",
          "status": "Final",
          "orderedBy": "Dr. Pediatric Immunology",
          "accession": "LAB-392840",
          "collected": "02/28/2026 09:25",
          "fasting": "Not fasting",
          "facility": "Jackson Memorial Hospital",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "3.1",
                  "unit": "x10³/µL",
                  "range": "9.0-30.0 (newborn)",
                  "flag": "L"
                },
                {
                  "test": "Lymphocytes (Absolute)",
                  "value": "320",
                  "unit": "cells/µL",
                  "range": ">2500 (infants)",
                  "flag": "L"
                },
                {
                  "test": "Neutrophils",
                  "value": "68%",
                  "unit": "%",
                  "range": "35-70",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "14.2",
                  "unit": "g/dL",
                  "range": "13.5-19.5 (newborn)",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "298",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                }
              ]
            },
            {
              "name": "LYMPHOCYTE SUBSETS (Flow Cytometry)",
              "results": [
                {
                  "test": "CD3+ T Cells (Absolute)",
                  "value": "28",
                  "unit": "cells/µL",
                  "range": ">2000 (infants)",
                  "flag": "L"
                },
                {
                  "test": "CD4+ T Cells (Absolute)",
                  "value": "18",
                  "unit": "cells/µL",
                  "range": ">1500 (infants)",
                  "flag": "L"
                },
                {
                  "test": "CD8+ T Cells (Absolute)",
                  "value": "10",
                  "unit": "cells/µL",
                  "range": ">500 (infants)",
                  "flag": "L"
                },
                {
                  "test": "CD19+ B Cells (Absolute)",
                  "value": "0",
                  "unit": "cells/µL",
                  "range": ">200 (infants)",
                  "flag": "L"
                },
                {
                  "test": "NK Cells CD56+ (Absolute)",
                  "value": "0",
                  "unit": "cells/µL",
                  "range": ">200 (infants)",
                  "flag": "L"
                },
                {
                  "test": "T cell phenotype note",
                  "value": "Maternal T-cell engraftment suspected — CD3+ cells present are predominantly CD45RO+ memory cells (likely maternal). Confirm with maternal lymphocyte chimerism.",
                  "unit": "",
                  "range": "",
                  "flag": "A"
                }
              ]
            },
            {
              "name": "IMMUNOGLOBULINS (Age-Appropriate Interpretation Needed)",
              "results": [
                {
                  "test": "IgG",
                  "value": "821",
                  "unit": "mg/dL",
                  "range": "Reflects maternal IgG (normal at 6 weeks)",
                  "flag": ""
                },
                {
                  "test": "IgA",
                  "value": "<7",
                  "unit": "mg/dL",
                  "range": "Infants normally have no endogenous IgA at 6 weeks",
                  "flag": ""
                },
                {
                  "test": "IgM",
                  "value": "8",
                  "unit": "mg/dL",
                  "range": "14-142 (infants)",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ADA ENZYME ASSAY (Adenosine Deaminase)",
              "results": [
                {
                  "test": "RBC ADA Activity",
                  "value": "2",
                  "unit": "µmol/h/gHb",
                  "range": "130-600 µmol/h/gHb",
                  "flag": "L"
                },
                {
                  "test": "Interpretation",
                  "value": "Severe ADA deficiency — <5% of normal. Consistent with ADA-SCID. Toxic metabolites (dATP, SAH hydrolase inhibition) accumulate → T, B, and NK cell apoptosis.",
                  "unit": "",
                  "range": "Normal: 130-600",
                  "flag": "A"
                },
                {
                  "test": "dATP (Toxic Metabolite)",
                  "value": "Markedly elevated",
                  "unit": "",
                  "range": "Undetectable",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "TREC CONFIRMATION",
              "results": [
                {
                  "test": "Peripheral Blood TRECs (Quantitative)",
                  "value": "Undetectable (<5 copies/µg DNA)",
                  "unit": "copies/µg",
                  "range": ">1000 copies/µg (infants)",
                  "flag": "L"
                },
                {
                  "test": "Interpretation",
                  "value": "Absent TRECs confirm profound T cell lymphopenia. TRECs are DNA excision circles produced during normal T cell development in the thymus — absent in SCID where thymic T cell output is zero.",
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
          "date": "02/28/2026",
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Stat",
          "orderedBy": "Dr. Pediatric Immunology",
          "readBy": "Dr. Radiologist",
          "facility": "Jackson Memorial Hospital",
          "accession": "IMG-481920",
          "clinical": "Suspected SCID — evaluate for thymic shadow and pulmonary infiltrates",
          "technique": "AP portable",
          "findings": "Absent thymic shadow. No pulmonary infiltrates. Heart size normal.",
          "impression": "Absent thymus — consistent with T-cell immunodeficiency (SCID or DiGeorge syndrome). No PCP pneumonia at this time.",
          "dictated": "02/28/2026 10:00",
          "verified": "02/28/2026 10:20"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Urgent Immunology Consultation",
          "date": "02/28/2026",
          "provider": "Dr. Pediatric Immunology Attending",
          "cc": "Absent TRECs on newborn screening — SCID evaluation",
          "hpi": "Amara Osei is a 6-week-old female referred urgently after absent TRECs were detected on her newborn blood spot at day 3 of life. She was born full-term without complications and has been asymptomatic — no infections, normal weight gain, no diarrhea. Examination today is unremarkable except absent thymic shadow on CXR. Laboratory evaluation reveals profound lymphopenia (ALC 320 cells/µL), absent CD19+ B cells, absent NK cells, and near-absent T cells (28 cells/µL — likely maternal engraftment). ADA enzyme assay: markedly reduced (2 µmol/h/gHb, <5% of normal). Confirms ADA-SCID.\n\nKey teaching point: She is well BECAUSE she was caught by newborn screening BEFORE developing infections. Without NBS, ADA-SCID presents at 2–6 months with failure to thrive, chronic diarrhea, Pneumocystis jirovecii pneumonia (PCP), CMV pneumonitis, BCG-itis (if vaccinated), and early mortality.",
          "exam": "Well-appearing infant. No dysmorphic features. No lymphadenopathy. No tonsils (absent — no B cells). Absent thymus on imaging. No HSM. No skin findings.",
          "assessment": "ADA-SCID (T-B-NK- SCID phenotype). Detected pre-symptomatically by newborn screening (absent TRECs). No maternal engraftment-vs-host disease currently.",
          "plan": "Protective isolation protocol. No live vaccines (BCG, rotavirus). All blood products must be irradiated and CMV-negative. TMP-SMX prophylaxis for PCP. IVIG supplementation (maternal IgG will wane by 6 months). HLA typing of patient and family for HSCT planning. Contact BMT team urgently — HSCT before 3.5 months of age achieves >95% T cell reconstitution. Bridge therapy options: PEG-ADA (enzyme replacement — $500K/year, not curative but can bridge to HSCT) vs gene therapy (approved in EU, investigational US). CMV and EBV surveillance."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for HSCT preparation — ADA-SCID",
        "diagnosis": "ADA-SCID — Pre-HSCT conditioning"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ADA-SCID — admitted for matched sibling donor HSCT (none available — proceeding with matched unrelated donor)",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "D81.3"
        },
        {
          "id": "prob-2",
          "description": "On PEG-ADA bridge therapy since diagnosis",
          "status": "Active",
          "onset": "",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "PEG-ADA (Elapegademase)",
          "dose": "30 units/kg",
          "route": "IM",
          "frequency": "Weekly — bridge therapy",
          "status": "Active",
          "prescriber": "Dr. Pediatric Immunology"
        },
        {
          "id": "med-2",
          "name": "TMP-SMX",
          "dose": "Pediatric dosing",
          "route": "PO",
          "frequency": "3×/week",
          "status": "Active",
          "prescriber": "Dr. Pediatric Immunology"
        },
        {
          "id": "med-3",
          "name": "Busulfan + Fludarabine (conditioning)",
          "dose": "Per BMT protocol",
          "route": "IV",
          "frequency": "Per BMT schedule",
          "status": "Pending",
          "prescriber": "Dr. BMT Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "08:00",
          "bp": "80/50",
          "hr": "138",
          "rr": "38",
          "temp": "37.0°C",
          "spo2": "99%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "07:30",
          "status": "Final",
          "orderedBy": "Dr. BMT Attending",
          "accession": "LAB-412033",
          "collected": "03/15/2026 07:25",
          "fasting": "Not fasting",
          "facility": "Jackson Memorial Hospital — BMT Unit",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "PRE-CONDITIONING LABS",
              "results": [
                {
                  "test": "ALC (Post-PEG-ADA)",
                  "value": "680",
                  "unit": "cells/µL",
                  "range": ">2500 (infants)",
                  "flag": "L"
                },
                {
                  "test": "Note",
                  "value": "Improvement with PEG-ADA bridge — ADA enzyme activity partially restored. Lymphocytes recovering partially. HSCT remains definitive treatment.",
                  "unit": "",
                  "range": "",
                  "flag": "A"
                },
                {
                  "test": "CMV PCR",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "EBV PCR",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "id": "visit-2",
          "type": "BMT Pre-Conditioning Consult",
          "date": "03/15/2026",
          "provider": "Dr. BMT Attending",
          "cc": "ADA-SCID — HSCT planned with 9/10 MUD",
          "hpi": "Amara is now 2 months old. HLA typing identified a 9/10 matched unrelated donor (MUD) — no matched sibling donor available. HSCT timing: ideally before 3.5 months for best T-cell reconstitution. Pre-conditioning regimen: reduced-intensity busulfan + fludarabine (reduced-intensity conditioning, RIC, preferred in SCID to reduce toxicity while enabling engraftment). Post-transplant: GVHD prophylaxis with cyclosporine + mycophenolate. PEG-ADA to be discontinued at time of transplant (can interfere with engraftment). IVIG to continue until IgG >500 mg/dL post-HSCT.",
          "exam": "Infant well. No active infections. Weight 4.8 kg (appropriate growth on PEG-ADA).",
          "assessment": "ADA-SCID. Pre-HSCT. No active infections. Cleared for transplant.",
          "plan": "Proceed with MUD HSCT. Conditioning starts Day -6. Day 0: stem cell infusion. Irradiated, CMV-negative blood products throughout. Continue TMP-SMX prophylaxis. Goal: T cell reconstitution by Day +90 to +180."
        }
      ]
    },
    "office": {
      "patient": {
        "chiefComplaint": "Post-HSCT follow-up — Day +120 — immune reconstitution check",
        "diagnosis": "ADA-SCID — Post-HSCT reconstitution"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ADA-SCID — Day +120 post-MUD HSCT",
          "status": "Active",
          "onset": "Congenital",
          "icd10": "D81.3"
        },
        {
          "id": "prob-2",
          "description": "Immune reconstitution in progress — CD4 recovering",
          "status": "Active",
          "onset": "",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cyclosporine",
          "dose": "Taper ongoing",
          "route": "PO",
          "frequency": "BID — GVHD prophylaxis taper",
          "status": "Active",
          "prescriber": "Dr. BMT Attending"
        },
        {
          "id": "med-2",
          "name": "TMP-SMX",
          "dose": "Pediatric",
          "route": "PO",
          "frequency": "3×/week — continue until CD4 >200 cells/µL",
          "status": "Active",
          "prescriber": "Dr. BMT Attending"
        },
        {
          "id": "med-3",
          "name": "IVIG",
          "dose": "400 mg/kg",
          "route": "IV",
          "frequency": "q4 weeks — continue until endogenous IgG producing",
          "status": "Active",
          "prescriber": "Dr. BMT Attending"
        }
      ],
      "vitals": [
        {
          "date": "07/13/2026",
          "time": "10:00",
          "bp": "82/52",
          "hr": "124",
          "rr": "36",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "07/13/2026",
          "time": "10:15",
          "status": "Final",
          "orderedBy": "Dr. BMT Attending",
          "accession": "LAB-448019",
          "collected": "07/13/2026 10:10",
          "fasting": "Not fasting",
          "facility": "Jackson Memorial Hospital — BMT Clinic",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "IMMUNE RECONSTITUTION PANEL — Day +120",
              "results": [
                {
                  "test": "CD4+ T Cells (Absolute)",
                  "value": "342",
                  "unit": "cells/µL",
                  "range": ">200 (initial recovery target)",
                  "flag": ""
                },
                {
                  "test": "CD8+ T Cells (Absolute)",
                  "value": "218",
                  "unit": "cells/µL",
                  "range": ">100",
                  "flag": ""
                },
                {
                  "test": "CD19+ B Cells (Absolute)",
                  "value": "48",
                  "unit": "cells/µL",
                  "range": "Beginning to recover",
                  "flag": "L"
                },
                {
                  "test": "NK Cells (Absolute)",
                  "value": "180",
                  "unit": "cells/µL",
                  "range": ">100",
                  "flag": ""
                },
                {
                  "test": "Chimerism (Donor:Host)",
                  "value": "98% donor T cells, 96% donor B cells",
                  "unit": "",
                  "range": "Target: full donor chimerism",
                  "flag": ""
                },
                {
                  "test": "GVHD Signs",
                  "value": "No rash, diarrhea, or liver abnormalities — no active GVHD",
                  "unit": "",
                  "range": "Absent",
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
          "type": "BMT Clinic Follow-Up — Day +120",
          "date": "07/13/2026",
          "provider": "Dr. BMT Attending",
          "cc": "Post-HSCT immune reconstitution — good progress",
          "hpi": "Day +120 post-MUD HSCT for ADA-SCID. Excellent engraftment: 98% donor T cells, 96% donor B cells. CD4 now 342 cells/µL — above threshold for beginning to wean PCP prophylaxis when sustained >200. B cells still low (48 cells/µL) — continue IVIG until B cells recover and IgG endogenous production established. No GVHD. No infections. Growing well. Parents counseled: she is on track. Full immune reconstitution (including B cells and protective antibody responses) will take 12–18 months. After confirmed reconstitution, killed vaccines can be given — delay until 1 year post-HSCT minimum. Live vaccines require documented normal immune function (CD4 >200, normal vaccine responses, off IVIG).",
          "exam": "Well-appearing 6-month-old. Normal growth. No rash. No lymphadenopathy. No hepatosplenomegaly. Lungs clear.",
          "assessment": "ADA-SCID post-HSCT Day +120 — good reconstitution. No GVHD. Continue prophylaxis until T and B cell recovery complete.",
          "plan": "Continue TMP-SMX until CD4 sustained >200 for 2 months off IVIG. Wean cyclosporine per BMT protocol. Repeat reconstitution panel at Day +180. Killed vaccines at 1 year post-HSCT. Monitor for late GVHD, EBV lymphoproliferation (post-transplant lymphoproliferative disorder), and CMV reactivation."
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
        "SCID diagnostic criteria: profound lymphopenia + absent T cells + at least one of: absent B cells, absent NK cells, absent T cell function",
        "TREC newborn screening — absent TRECs mandate urgent immunology evaluation",
        "HSCT: definitive treatment for SCID; best outcomes when performed before 3.5 months",
        "All blood products must be irradiated and CMV-negative",
        "No live vaccines in SCID patients"
      ]
    },
    {
      "id": "StatPearls-SCID",
      "title": "Severe combined immunodeficiency",
      "authors": "Justiz Vaillant AA, Muganlinskaya N.",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK545261/",
      "openAccess": true,
      "validates": [
        "SCID diagnostic criteria: profound T cell lymphopenia, absent T cell function",
        "TREC newborn screening: absent TRECs = absent thymic T cell output",
        "ADA-SCID: T-B-NK- phenotype, toxic dATP accumulation",
        "HSCT before 3.5 months: best outcomes for T cell reconstitution",
        "All blood products irradiated + CMV-negative; no live vaccines"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "ADA-SCID (adenosine deaminase deficiency): ADA enzyme deficiency → toxic metabolite accumulation (deoxyadenosine → dATP) → lymphocyte apoptosis → T-B-NK SCID. Most common autosomal recessive SCID (~15% of SCID cases).",
      "SCID newborn screening: T-cell receptor excision circles (TRECs) on newborn blood spot. TRECs = DNA byproducts of T-cell maturation. Low/absent TRECs = T-cell lymphopenia → triggers SCID workup before clinical presentation.",
      "Treatment options for ADA-SCID: hematopoietic stem cell transplant (HSCT, curative), PEG-ADA enzyme replacement therapy (bridge, not curative), and gene therapy (Strimvelis — approved EU; lentiviral vector insertion of ADA gene, curative, high long-term efficacy)."
    ],
    "boardPearls": [
      "ADA-SCID: ADA deficiency → dATP accumulation → lymphocyte apoptosis. T-B-NK SCID. AR inheritance.",
      "SCID newborn screening: TRECs (T-cell receptor excision circles). Low TRECs = T-cell lymphopenia → SCID workup.",
      "SCID presentation: absent T cells → susceptibility to ALL pathogens including opportunists (PCP, CMV, EBV, RSV, fungal).",
      "Avoid live vaccines in SCID — including BCG (fatal disseminated BCG reported).",
      "Graft-vs-Host Disease (GVHD): can be triggered by non-irradiated blood transfusions in SCID. Use irradiated + CMV-negative blood products only.",
      "HSCT: curative. Best outcomes with matched sibling donor early in life. MHC-matched unrelated or haploidentical with T-cell depletion also used.",
      "Gene therapy (Strimvelis): EU approved for ADA-SCID. High efficacy. No donor needed."
    ]
  },
  "meta": {
    "diagnosis": "Severe Combined Immunodeficiency (ADA-SCID, T-B-NK+)",
    "caseId": "scid-ada"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: severe combined immunodeficiency (SCID) due to adenosine deaminase (ADA) deficiency, T-B-NK+ subtype. Key learning: (1) SCID is a group of genetic disorders causing profound defects in both cellular (T-cell) and humoral (B-cell) immunity, with lymphocyte counts typically under 2,500/uL and functional immune failure. Without treatment, SCID is fatal within the first 1-2 years of life from overwhelming infection. Subtypes are classified by lymphocyte phenotype (T, B, NK cells present/absent) — X-linked SCID (T-B+NK-, IL2RG, most common), ADA-SCID (T-B-NK+, autosomal recessive), JAK3 (T-B+NK-), RAG1/2 (T-B-NK+), IL7R (T-B+NK+), and others. Each subtype has distinct genetic and treatment implications. (2) Newborn screening for SCID (TREC analysis) has transformed early diagnosis. TREC (T-cell receptor excision circles) are DNA byproducts of normal T-cell maturation in the thymus — low or absent TREC suggests T-cell lymphopenia. TREC screening is now universal in US newborns and identifies most SCID in the first days of life, before infections develop. Abnormal TREC triggers confirmatory flow cytometry (T, B, NK cell enumeration), functional testing (mitogen response, antigen response), genetic testing, ADA enzyme assay. (3) ADA deficiency has unique features: (a) Neurologic — cognitive delay, sensorineural deafness, behavioral abnormalities (from toxic metabolite accumulation affecting brain). (b) Skeletal — costochondral abnormalities, 'rachitic rosary'. (c) Hepatic — liver dysfunction, hepatitis. (d) Pulmonary — interstitial disease. (e) Renal — mesangial sclerosis. Because ADA is a systemic enzyme, its deficiency affects tissues beyond the immune system, whereas most other SCIDs are purely immunologic. (4) Management. Infection prevention and treatment: protective isolation, no live vaccines (absolute contraindication — BCG, rotavirus, MMR, varicella can cause disseminated infection), irradiated and CMV-negative blood products (to prevent TA-GVHD and CMV transmission), TMP-SMX for PCP prophylaxis, IVIG for antibody replacement, and prompt aggressive treatment of any infection. Definitive treatments: (a) Hematopoietic stem cell transplant (HSCT) — gold standard, ideally from HLA-matched sibling donor; excellent outcomes when performed early (under 3.5 months of age, before infections develop). (b) Enzyme replacement therapy (ERT) — PEGylated ADA (pegademase bovine) weekly SQ, as bridge to transplant or long-term for patients without donors. (c) Gene therapy — autologous hematopoietic stem cell gene therapy has FDA approval for ADA-SCID (Strimvelis) and is an established option. (5) Classic pitfalls: (a) giving live vaccines — BCG at birth (in non-US countries) or rotavirus vaccine in the US to a SCID infant can cause disseminated disease; universal newborn TREC screening helps identify infants before vaccination. (b) Missing the diagnosis in infants without classic infections because of maternal antibody transfer (which protects for the first 3-6 months). (c) Not irradiating blood products — transfusion-associated GVHD in SCID infants is virtually 100% fatal. (d) Delaying transplant referral — outcomes decline sharply once infection is established; prompt referral to a specialized SCID transplant center is essential. (e) Forgetting genetic counseling and carrier testing for parents and family members after diagnosis."
    }
  }
};
