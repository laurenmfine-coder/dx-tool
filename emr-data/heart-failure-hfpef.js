/* emr-data/heart-failure-hfpef.js
   Heart Failure with Preserved EF (HFpEF) — Diagnosis and Management
   Category: cardiology | Acuity: ESI-2
   Settings: ED, Floor, Clinic
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Dolores Martinez",
      "patientHPI": "I've been getting short of breath going up stairs for the past two months. I've gained about 10 pounds and my ankles are very swollen. I also wake up at night unable to breathe and have to prop myself up on three pillows.",
      "dob": "04/08/1948",
      "age": "77",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-229841",
      "language": "Spanish",
      "race": "Hispanic/Latina",
      "phone": "(210) 555-9841",
      "email": "",
      "address": "8841 San Pedro Ave, San Antonio, TX 78212",
      "insurance": "Medicare",
      "pcp": "Dr. Elena Garza, MD",
      "pharmacy": "HEB Pharmacy — San Pedro",
      "emergencyContact": {
        "name": "Carlos Martinez",
        "phone": "(210) 555-4411",
        "relationship": "Son"
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
      "Husband: heart failure, died at 78",
      "Sister: hypertension"
    ],
    "socialHistory": [
      [
        "HTN",
        "Hypertension x25 years — the primary cause of HFpEF. BP chronically 150-170 per records."
      ],
      [
        "DM",
        "Type 2 Diabetes x10 years on metformin"
      ],
      [
        "AF",
        "Paroxysmal atrial fibrillation — on apixaban"
      ],
      [
        "Obesity",
        "BMI 36 — major HFpEF risk factor"
      ],
      [
        "Sodium",
        "High sodium diet — 'I cook Mexican food with salt'"
      ],
      [
        "Smoking",
        "Never"
      ],
      [
        "Alcohol",
        "Rare"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "77F HTN/DM2/AF — 2 months dyspnea on exertion, orthopnea, PND, 10lb weight gain, bilateral leg edema — BNP 820 — ECHO EF 62% — HFpEF",
        "diagnosis": "Acute Decompensated Heart Failure with Preserved EF (HFpEF) — Hypertensive Etiology"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acute decompensated HFpEF — EF 62%, BNP 820, bilateral lower lobe crackles, bilateral leg edema. Hypertensive etiology (chronic HTN → LV hypertrophy → diastolic dysfunction). Precipitant: dietary sodium indiscretion + uncontrolled BP.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "I50.30"
        },
        {
          "id": "prob-2",
          "description": "HFpEF vs HFrEF distinction — CRITICAL: HFpEF (EF ≥50%) has DIFFERENT evidence-based treatment than HFrEF (EF <40%). ACE-I/ARB/beta-blockers reduce mortality in HFrEF but NOT proven in HFpEF. SGLT2 inhibitors (empagliflozin/dapagliflozin) are now indicated for HFpEF (EMPEROR-Preserved trial).",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "I50.30"
        },
        {
          "id": "prob-3",
          "description": "Paroxysmal AF — on apixaban. AF worsens HFpEF (loss of atrial kick reduces diastolic filling). Rate control is important.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "I48.19"
        },
        {
          "id": "prob-4",
          "description": "Dietary sodium indiscretion — precipitant. Target <2g sodium/day. Fluid restriction 1.5-2L/day. Daily weights — call provider if gain >2-3 lbs in 24h.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "Z72.4"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Furosemide (Lasix)",
          "dose": "40mg IV",
          "route": "IV",
          "frequency": "BID for acute decompensation — IV 2.5x more bioavailable than PO in decompensated heart failure. Target UO 0.5-1 mL/kg/hr.",
          "status": "Active — acute decongestion",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-2",
          "name": "Apixaban",
          "dose": "5mg",
          "route": "PO",
          "frequency": "BID — continue for AF",
          "status": "Active — continue",
          "prescriber": "Dr. Elena Garza, MD"
        },
        {
          "id": "med-3",
          "name": "Metformin",
          "dose": "500mg",
          "route": "PO",
          "frequency": "BID — HOLD during acute decompensation (reduced renal perfusion risk)",
          "status": "HOLD — restart when stable",
          "prescriber": "Dr. Elena Garza, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "09:00",
          "bp": "178/102",
          "hr": "92",
          "rr": "22",
          "temp": "37.0°C",
          "spo2": "91%",
          "pain": "1/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Decompensated HFpEF — bilateral crackles, BNP 820, EF 62%",
          "hpi": "77F with known HTN, DM2, and paroxysmal AF presents with 2-month progressive dyspnea on exertion now progressing to orthopnea (3-pillow), PND, and 10-pound weight gain. Bilateral lower lobe crackles. Bilateral pitting ankle edema 2+. BP 178/102.\n\nHFpEF DIAGNOSIS:\n- BNP 820 (elevated — fluid overload driving BNP release)\n- ECHO: EF 62%, LV hypertrophy, diastolic dysfunction Grade II-III\n- No structural cause (no significant valvular disease)\n- H2FPEF Score: Heavy BMI (2pts) + Hypertension (1pt) + AF (3pts) + Pulmonary hypertension (1pt) + Age >60 (1pt) = 8/9 → HFpEF probability >95%\n\nHFpEF TREATMENT — KEY DIFFERENCES FROM HFrEF:\n1. DIURETICS: same as HFrEF — for symptom relief and decongestion\n2. SGLT2 INHIBITORS: empagliflozin/dapagliflozin — REDUCE HHF and CV death in HFpEF (EMPEROR-Preserved 2021). New standard of care.\n3. BP CONTROL: critical — uncontrolled HTN is primary etiology\n4. RATE CONTROL for AF: important for diastolic filling\n5. ACE-I/ARB/sacubitril-valsartan: NOT proven to reduce mortality in HFpEF (unlike HFrEF)\n6. Beta-blockers: may worsen exercise tolerance in some HFpEF patients",
          "assessment": "Decompensated HFpEF — IV diuresis, BP control, SGLT2 inhibitor at discharge. Admit cardiology floor.",
          "plan": "IV furosemide 40mg BID — strict I&Os, daily weights. Fluid restriction 1.5L/day. Salt restriction <2g/day. BP control — amlodipine 10mg. Cardiology admission. ECHO confirmed. Start empagliflozin 10mg daily at discharge (EMPEROR-Preserved). Sodium and fluid restriction education. Daily weights — call if +2-3 lbs in 24h. Cardiology follow-up in 2 weeks."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "09:20",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-229841",
          "collected": "03/15/2026 09:15",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CARDIAC BIOMARKERS",
              "results": [
                {
                  "test": "BNP",
                  "value": "820",
                  "unit": "pg/mL",
                  "range": "<100 normal; 100-400 grey zone; >400 HF likely",
                  "flag": "H"
                },
                {
                  "test": "Troponin I",
                  "value": "0.02",
                  "unit": "ng/mL",
                  "range": "<0.04 — no ACS",
                  "flag": ""
                }
              ]
            },
            {
              "name": "METABOLIC",
              "results": [
                {
                  "test": "Sodium",
                  "value": "136",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0 — monitor with diuresis",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.2",
                  "unit": "mg/dL",
                  "range": "0.6-1.1 (baseline 1.0)",
                  "flag": "H"
                },
                {
                  "test": "eGFR",
                  "value": "48",
                  "unit": "mL/min/1.73m²",
                  "range": ">60",
                  "flag": "L"
                },
                {
                  "test": "HbA1c",
                  "value": "8.1",
                  "unit": "%",
                  "range": "<7.0 goal",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "type": "Chest X-Ray PA",
          "date": "03/15/2026",
          "time": "09:30",
          "orderedBy": "Dr. Attending",
          "findings": "Cardiomegaly. Bilateral interstitial edema — Kerley B lines. Cephalization of pulmonary vasculature. Small bilateral pleural effusions. No pneumonia.",
          "impression": "Acute decompensated heart failure. Bilateral pulmonary edema and pleural effusions.",
          "critical": false
        },
        {
          "id": "img-2",
          "type": "Transthoracic Echocardiogram",
          "date": "03/15/2026",
          "time": "11:00",
          "orderedBy": "Dr. Attending",
          "findings": "Left ventricular ejection fraction 62%. Concentric LV hypertrophy (IVSd 1.4cm). Diastolic dysfunction Grade II-III: E/e' ratio 18 (elevated), TR velocity 3.1 m/s (elevated PA pressure), LA volume index 42 mL/m² (enlarged). No significant valvular disease. Mild mitral regurgitation.",
          "impression": "HFpEF — preserved EF 62% with Grade II-III diastolic dysfunction and elevated filling pressures. LVH consistent with hypertensive etiology.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 3 decompensated HFpEF — net negative 3.2L — BNP trending down 820→420 — transitioning to oral diuretics",
        "diagnosis": "HFpEF — Responding to IV Diuresis — Transitioning to Oral"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "HFpEF decongesting — BNP 820→420. Net negative 3.2L over 3 days. Edema improving. Weight down 4.8 lbs. Transitioning to oral furosemide.",
          "status": "Improving",
          "onset": "Subacute",
          "icd10": "I50.30"
        },
        {
          "id": "prob-2",
          "description": "Empagliflozin (SGLT2 inhibitor) — starting at discharge. EMPEROR-Preserved trial: 21% relative risk reduction in CV death/HHF in HFpEF. Additional benefit: mild diuretic effect, weight loss, glucose lowering (dual benefit T2DM + HFpEF).",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "I50.30"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Furosemide",
          "dose": "40mg",
          "route": "PO",
          "frequency": "BID — oral step-down. Discharge dose: 40mg daily. Titrate per daily weights.",
          "status": "Active — transitioning oral",
          "prescriber": "Dr. Cardiology"
        },
        {
          "id": "med-2",
          "name": "Empagliflozin (Jardiance)",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily — NEW. Starting at discharge. EMPEROR-Preserved indication. Benefits: HF + T2DM.",
          "status": "NEW — discharge med",
          "prescriber": "Dr. Cardiology"
        },
        {
          "id": "med-3",
          "name": "Amlodipine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily — BP now 138/82 on amlodipine 10mg — good response",
          "status": "Active",
          "prescriber": "Dr. Cardiology"
        }
      ],
      "vitals": [
        {
          "date": "03/17/2026",
          "time": "08:00",
          "bp": "138/82",
          "hr": "84",
          "rr": "16",
          "temp": "37.0°C",
          "spo2": "95%",
          "pain": "0/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Cardiology Progress Note",
          "date": "03/17/2026",
          "provider": "Dr. Cardiology Attending",
          "cc": "Day 3 HFpEF — decongesting well — discharge planning",
          "hpi": "Significant improvement. Weight loss 4.8 lbs. Orthopnea resolved — sleeping flat now. Ankle edema 1+ (from 3+). BNP 420 (from 820). SpO2 95% on RA (from 91%). BP 138/82 on amlodipine.\n\nDISCHARGE PACKAGE — HF EDUCATION:\n- Daily weights: call provider if +2 lbs in 1 day or +5 lbs in 1 week\n- Sodium <2g/day\n- Fluid restriction 1.5-2L/day\n- Activity: walking program, 5-10 min/day then increase\n- Signs of worsening: increased dyspnea, orthopnea, leg swelling, weight gain\n- Medications: furosemide daily (morning), empagliflozin daily\n- Cardiology follow-up 2 weeks\n\nHFpEF vs HFrEF TEACHING SUMMARY:\nHFrEF (EF<40%): ACE-I/ARB/ARNI + beta-blocker + MRA + SGLT2i → all reduce mortality\nHFpEF (EF≥50%): SGLT2i (new evidence) + diuretics for symptoms + risk factor control. ACE-I/ARB/beta-blockers: no mortality benefit proven.",
          "assessment": "Decompensated HFpEF now compensated. Discharge tomorrow. Empagliflozin started. BP controlled.",
          "plan": "Discharge tomorrow. Oral furosemide 40mg daily. Empagliflozin 10mg daily. Amlodipine 10mg daily. Continue apixaban. Restart metformin (Cr now 1.0, empagliflozin taking over for glucose lowering). HF education booklet in Spanish. Cardiology 2 weeks. PCP 1 week. Daily weights — refrigerator chart provided."
        }
      ],
      "labs": [
        {
          "date": "03/17/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Cardiology",
          "accession": "LAB-229842",
          "collected": "03/17/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "TREND — BNP AND RENAL",
              "results": [
                {
                  "test": "BNP",
                  "value": "420",
                  "unit": "pg/mL",
                  "range": "Down from 820 — responding",
                  "flag": "H"
                },
                {
                  "test": "Potassium",
                  "value": "3.8",
                  "unit": "mEq/L",
                  "range": "3.5-5.0 — watch with diuresis",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.0",
                  "unit": "mg/dL",
                  "range": "0.6-1.1 — back to baseline",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "EMPEROR-Preserved",
      "title": "Empagliflozin in Heart Failure with a Preserved Ejection Fraction (EMPEROR-Preserved)",
      "authors": "Anker SD, Butler J, Filippatos G, et al.",
      "journal": "NEJM",
      "year": 2021,
      "doi": "10.1056/NEJMoa2107038",
      "url": "https://www.nejm.org/doi/10.1056/NEJMoa2107038",
      "openAccess": false,
      "validates": [
        "SGLT2i for HFpEF",
        "21% RRR in CV death/HHF",
        "EF ≥40% inclusion"
      ]
    },
    {
      "id": "AHA-HF-2022",
      "title": "2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure",
      "authors": "Heidenreich PA, Bozkurt B, Aguilar D, et al.",
      "journal": "Circulation",
      "year": 2022,
      "doi": "10.1161/CIR.0000000000001063",
      "url": "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063",
      "openAccess": true,
      "validates": [
        "HFpEF vs HFrEF treatment differences",
        "SGLT2i Class IIa for HFpEF",
        "Diuretic use",
        "BP targets"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Acute Decompensated Heart Failure with Preserved EF (HFpEF)",
    "caseId": "heart-failure-hfpef"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: acute decompensated heart failure with preserved ejection fraction (HFpEF), hypertensive etiology, precipitated by dietary sodium and uncontrolled blood pressure. Key learning: (1) HFpEF now accounts for roughly half of all heart failure cases and is the dominant phenotype in older women with hypertension, diabetes, obesity, and atrial fibrillation. Diagnosis requires signs and symptoms of heart failure, EF >=50%, and evidence of elevated filling pressures or structural heart disease (LV hypertrophy, left atrial enlargement, diastolic dysfunction on echo, elevated natriuretic peptides). Validated scoring tools — H2FPEF and HFA-PEFF — help when the diagnosis is uncertain, particularly in patients with dyspnea and preserved EF but no obvious decompensation signs. (2) The HFpEF vs HFrEF distinction drives therapy and must be made early. In HFrEF (EF <=40%), the mortality-reducing quartet is established: ARNI or ACE-I/ARB, beta-blocker, MRA, and SGLT2 inhibitor. In HFpEF, only SGLT2 inhibitors (empagliflozin in EMPEROR-Preserved, dapagliflozin in DELIVER) have shown clear reductions in heart failure hospitalization and cardiovascular death. ACE-I, ARBs, and beta-blockers do not reduce mortality in HFpEF, though they are often continued for coexisting HTN, CAD, or atrial fibrillation. (3) Acute decompensation management is similar to HFrEF: IV loop diuretic (furosemide dosed at >=2.5x the patient's home oral dose, or an initial IV dose of 40 mg if diuretic-naive), strict I/Os, daily weights, and fluid and sodium restriction. Target urine output of roughly 3-5 L net negative over the admission. Hypertensive HFpEF often responds dramatically to BP control — IV nitroglycerin for acute afterload reduction, then transition to oral antihypertensives. (4) Precipitants must always be identified and addressed: dietary indiscretion (sodium), medication nonadherence, uncontrolled HTN, rapid atrial fibrillation (loss of atrial kick is especially detrimental in stiff ventricles), ischemia, infection, NSAIDs, and renal dysfunction. Rate and rhythm control in AF become high-priority interventions in HFpEF because diastolic filling depends heavily on atrial contraction. (5) Classic pitfalls: (a) dismissing HFpEF as 'just diastolic dysfunction' and undertreating it — these patients have mortality comparable to HFrEF. (b) Over-diuresing and driving AKI, hyponatremia, or hypotension in patients whose hemodynamics depend on adequate preload. (c) Missing amyloid cardiomyopathy masquerading as HFpEF in older patients with unexplained LV hypertrophy, low-voltage ECG, carpal tunnel history, or discordance between wall thickness and QRS voltage — bone scintigraphy with 99mTc-PYP and free light chains should be considered. (d) Forgetting the lifestyle foundation: salt restriction, weight loss, exercise training, and BP control do more for long-term outcomes than any single medication."
    }
  }
};
