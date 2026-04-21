/* emr-data/ectopic-pregnancy-workup.js
   Ectopic Pregnancy — Diagnosis, Hemodynamic Stability, and Management
   Category: obstetric | Acuity: ESI-1
   Settings: ED
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Aaliya Hassan",
      "patientHPI": "I've had sharp left lower abdominal pain for the past 6 hours that keeps getting worse. I missed my period last month and took a home pregnancy test — it was positive. I'm really scared.",
      "dob": "09/14/1995",
      "age": "30",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-330841",
      "language": "English/Somali",
      "race": "Black/African American",
      "phone": "(612) 555-0841",
      "email": "a.hassan@email.com",
      "address": "2218 Nicollet Ave S, Minneapolis, MN 55404",
      "insurance": "Minnesota Medicaid",
      "pcp": "Dr. Fadumo Ali, MD",
      "pharmacy": "CVS — Nicollet Ave",
      "emergencyContact": {
        "name": "Ibrahim Hassan",
        "phone": "(612) 555-7744",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "OB history",
        "G1P0 — first pregnancy. LMP 6 weeks ago. Home UPT positive 2 weeks ago."
      ],
      [
        "GYN history",
        "Prior chlamydia infection (treated 3 years ago) — risk factor for ectopic. No prior pelvic surgery."
      ],
      [
        "IUD",
        "Removed Mirena IUD 4 months ago to attempt pregnancy — also a risk factor"
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
        "chiefComplaint": "30F G1P0 — 6wk LMP — positive UPT — left lower quadrant pain + vaginal bleeding — empty uterus on POCUS — FREE FLUID — ectopic until proven otherwise — hemodynamically unstable",
        "diagnosis": "Ruptured Ectopic Pregnancy — Hemorrhagic Shock — Emergency Surgery"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Ruptured ectopic pregnancy — left adnexal mass on POCUS + free fluid in abdomen/pelvis + positive UPT + empty uterus = RUPTURED ECTOPIC. Hemodynamically unstable (BP 88/54, HR 136). Emergency surgery.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "O00.102"
        },
        {
          "id": "prob-2",
          "description": "Hemorrhagic shock — HR 136, BP 88/54, pale, diaphoretic. Massive hemorrhage protocol. 2 large-bore IVs. Type and crossmatch. O-negative pRBCs if critical. OB/GYN surgical emergency.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "O08.1"
        },
        {
          "id": "prob-3",
          "description": "RISK FACTORS: Prior chlamydia (PID → tubal scarring), prior IUD (controversial — not direct cause but association), first pregnancy. Classic risk factor constellation for ectopic.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "Z87.39"
        },
        {
          "id": "prob-4",
          "description": "Rh status — MUST CHECK. If Rh negative → Rho(D) immune globulin (RhoGAM) 300mcg IM regardless of gestational age to prevent alloimmunization.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "Z67.1"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Normal Saline",
          "dose": "1-2L IV bolus",
          "route": "IV",
          "frequency": "RAPID — hemorrhagic shock resuscitation until blood available",
          "status": "Active",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-2",
          "name": "O-negative pRBCs",
          "dose": "2 units",
          "route": "IV",
          "frequency": "Immediately if BP not responding to saline — do not wait for crossmatch in unstable patient",
          "status": "Active — blood bank notified",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-3",
          "name": "Rho(D) immune globulin (RhoGAM)",
          "dose": "300mcg IM",
          "route": "IM",
          "frequency": "GIVE if Rh negative — prevents alloimmunization. Give post-op.",
          "status": "PRN — pending blood type",
          "prescriber": "Dr. OB Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "01:00",
          "bp": "88/54",
          "hr": "136",
          "rr": "24",
          "temp": "37.0°C",
          "spo2": "96%",
          "pain": "9/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit — OB Emergency",
          "date": "03/15/2026",
          "provider": "Dr. Attending + OB/GYN",
          "cc": "Ruptured ectopic pregnancy — hemorrhagic shock — emergency salpingectomy",
          "hpi": "30F G1P0, 6-week gestation (LMP), positive UPT, presents with acute left lower quadrant pain and vaginal spotting. BP 88/54, HR 136 — hemodynamically UNSTABLE. POCUS: empty uterus, left adnexal 4.2cm complex mass (gestational sac outside uterus), significant free fluid in Morison's pouch and pelvis (hemoperitoneum).\n\nECTOPIC PREGNANCY DIAGNOSIS FRAMEWORK:\nThe classic triad: (1) positive UPT + (2) abdominal pain + (3) vaginal bleeding\n\nDIAGNOSTIC APPROACH:\n1. UPT positive → pregnancy confirmed\n2. Transvaginal US: if empty uterus + positive UPT = ectopic until proven otherwise\n3. Discriminatory zone: β-hCG >1500-3000 IU/L → should see IUP on TVUS. If β-hCG above discriminatory zone + no IUP → ectopic confirmed.\n4. Free fluid + hemodynamic instability → RUPTURED ectopic — surgery NOW\n\nMANAGEMENT BASED ON STABILITY:\n- HEMODYNAMICALLY UNSTABLE (ruptured) → SURGERY IMMEDIATELY — no time for β-hCG or methotrexate\n- Hemodynamically stable + unruptured:\n  a. Methotrexate (IM injection): if β-hCG <5000, no cardiac activity, no rupture, compliant patient\n  b. Surgical: laparoscopic salpingectomy or salpingostomy\n\nMETHOTREXATE CONTRAINDICATIONS (when NOT to use):\n- Hemodynamic instability (THIS PATIENT)\n- β-hCG >5000 IU/L\n- Cardiac activity seen on US\n- Gestational sac >3.5cm\n- Cannot follow up reliably\n- Hepatic/renal disease, blood dyscrasia\n- Breastfeeding",
          "assessment": "Ruptured ectopic — hemodynamically unstable. EMERGENCY SALPINGECTOMY. No time for methotrexate. Blood bank activated. OB/GYN taking to OR now.",
          "plan": "OR NOW — laparoscopic left salpingectomy (convert to open if needed). 2 large-bore IVs — aggressive resuscitation. 2U O-negative pRBCs. Type and crossmatch. β-hCG STAT (for monitoring only — does not delay surgery). Check Rh type — RhoGAM if Rh negative. Foley catheter. Pre-op checklist. Family notified. Counseling post-op: remaining tube, future fertility, risk of repeat ectopic."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "01:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-330841",
          "collected": "03/15/2026 01:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "EMERGENCY LABS",
              "results": [
                {
                  "test": "β-hCG (quantitative)",
                  "value": "8,240",
                  "unit": "IU/L",
                  "range": "Discriminatory zone: >1500-3000",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "8.2",
                  "unit": "g/dL",
                  "range": "12-16 (falling from hemorrhage)",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "188",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Blood Type",
                  "value": "A Positive (Rh+) — no RhoGAM needed",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "Coagulation (PT/INR)",
                  "value": "PT 12.8s, INR 1.1 — normal",
                  "unit": "",
                  "range": "Normal",
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
          "type": "Bedside POCUS — Pelvic and Abdominal",
          "date": "03/15/2026",
          "time": "01:05",
          "orderedBy": "Dr. Attending",
          "findings": "Empty uterus — no intrauterine gestational sac. Left adnexal region: complex 4.2cm mass with ring-like structure consistent with ectopic gestational sac. Free fluid in Morison's pouch and bilateral paracolic gutters and pelvis — significant hemoperitoneum. No cardiac activity visualized in adnexal mass.",
          "impression": "RUPTURED LEFT ECTOPIC PREGNANCY with hemoperitoneum. Empty uterus confirms no IUP. Emergency surgical consultation needed immediately.",
          "critical": true
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Post-operative day 1 — laparoscopic left salpingectomy for ruptured ectopic. Hemodynamically stable.",
        "diagnosis": "Ruptured Left Ectopic Pregnancy — Post Laparoscopic Salpingectomy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Post-salpingectomy day 1 — surgery successful. 800mL hemoperitoneum evacuated. Left tube removed. Right tube intact. Hemostasis achieved. Hemoglobin stable at 9.2 (received 2U pRBCs intraoperatively).",
          "status": "Recovering",
          "onset": "Acute",
          "icd10": "O00.102"
        },
        {
          "id": "prob-2",
          "description": "Future fertility counseling — right tube intact + right ovary intact + young patient = fertility preserved. Risk of repeat ectopic with remaining tube (10-20%). IVF if right tube also damaged in future. β-hCG monitoring until <5 IU/L.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "Z31.5"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Ibuprofen",
          "dose": "600mg",
          "route": "PO",
          "frequency": "Q6H with food — post-op pain",
          "status": "Active",
          "prescriber": "Dr. OB/GYN"
        },
        {
          "id": "med-2",
          "name": "Oxycodone",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Q6H PRN breakthrough pain",
          "status": "Active PRN",
          "prescriber": "Dr. OB/GYN"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "bp": "112/72",
          "hr": "88",
          "rr": "16",
          "temp": "37.2°C",
          "spo2": "99%",
          "pain": "3/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "OB/GYN Post-Op Note",
          "date": "03/16/2026",
          "provider": "Dr. OB/GYN",
          "cc": "Post-op day 1 — ruptured ectopic salpingectomy",
          "hpi": "Hemodynamically stable. Pain controlled. Tolerating fluids. β-hCG falling (post-op: 4,200). Will trend weekly until <5 IU/L to confirm complete resolution of ectopic tissue.\n\nCOUNSELING POINTS:\n1. Remaining tube: right tube intact — natural conception possible\n2. Risk of repeat ectopic: 10-20% with one tube. EARLY ultrasound in next pregnancy to confirm IUP.\n3. Contraception: wait 3 months before attempting pregnancy again to allow recovery\n4. STI screening: chlamydia/gonorrhea — PID is a risk factor for ectopic\n5. β-hCG monitoring: weekly until <5 (confirms no retained ectopic tissue — rare persistent ectopic)\n6. Emotional support: pregnancy loss counseling available",
          "assessment": "Uncomplicated recovery from ruptured ectopic. β-hCG falling. Discharge today.",
          "plan": "Discharge today. β-hCG weekly until <5 IU/L. OB follow-up in 1-2 weeks. Contraception: barrier methods x3 months. STI testing. Pregnancy loss counseling referral. Return if: heavy bleeding, worsening pain, fever, dizziness."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. OB/GYN",
          "accession": "LAB-330842",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "POST-OP MONITORING",
              "results": [
                {
                  "test": "β-hCG",
                  "value": "4,200",
                  "unit": "IU/L",
                  "range": "Falling post-salpingectomy — trend weekly until <5",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "9.2",
                  "unit": "g/dL",
                  "range": "12-16 (post-hemorrhage, stable)",
                  "flag": "L"
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
      "id": "ACOG-Ectopic-2018",
      "title": "ACOG Practice Bulletin: Tubal Ectopic Pregnancy",
      "authors": "American College of Obstetricians and Gynecologists",
      "journal": "Obstetrics & Gynecology",
      "year": 2018,
      "doi": "10.1097/AOG.0000000000002464",
      "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/03/tubal-ectopic-pregnancy",
      "openAccess": false,
      "validates": [
        "Diagnostic criteria",
        "Discriminatory zone",
        "Methotrexate criteria and contraindications",
        "Surgical management",
        "RhoGAM use"
      ]
    },
    {
      "id": "StatPearls-Ectopic",
      "title": "Ectopic Pregnancy",
      "authors": "Hendriks E, Rosenberg R, Prine L",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK539860/",
      "openAccess": true,
      "validates": [
        "Risk factors",
        "Clinical presentation",
        "POCUS findings",
        "Management algorithm"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Ruptured Ectopic Pregnancy — Hemorrhagic Shock",
    "caseId": "ectopic-pregnancy-workup"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: ruptured ectopic pregnancy with hemorrhagic shock. Key learning: (1) Ectopic pregnancy must be on the differential for any woman of reproductive age with abdominal pain, vaginal bleeding, or a positive pregnancy test — it is the leading cause of first-trimester maternal death. The classic triad (amenorrhea + abdominal pain + vaginal bleeding) is present in only about 50% of patients; atypical presentations are common. Risk factors include prior ectopic (10x risk), prior tubal surgery, prior PID/chlamydia, IUD in situ (rare but when pregnancy occurs it is more likely ectopic), assisted reproductive technology, and smoking. (2) Diagnostic framework: quantitative beta-hCG plus transvaginal ultrasound are the core. The 'discriminatory zone' — beta-hCG above which an intrauterine pregnancy should be visible on TVUS — is roughly 1,500-3,500 IU/L depending on machine and operator. If beta-hCG is above the discriminatory zone and the uterus is empty, ectopic pregnancy is the working diagnosis. POCUS findings that clinch rupture are an empty uterus, an adnexal mass or ring, and free fluid in the pelvis or Morison's pouch. (3) Hemodynamic status drives management, not labs. An unstable patient — tachycardia, hypotension, diaphoresis, peritoneal signs, significant free fluid — goes directly to the OR for emergency salpingectomy. Do not delay surgery to chase a beta-hCG result; the number changes nothing about the operative decision. Two large-bore IVs, type and crossmatch, activate massive transfusion if needed, and transfuse O-negative blood early if crystalloid response is inadequate. (4) Stable patients have three options: (a) methotrexate (single or multi-dose IM) if beta-hCG under 5,000 (ideally under 3,500), sac under 3.5 cm, no fetal cardiac activity, no rupture, reliable follow-up, normal LFTs/renal function/CBC, no breastfeeding. (b) Laparoscopic salpingostomy (fertility-preserving if contralateral tube diseased) or salpingectomy. (c) Expectant management only for very low and declining beta-hCG in asymptomatic patients. Methotrexate follow-up requires beta-hCG on day 1, 4, and 7 expecting >=15% drop between day 4 and 7. (5) Classic pitfalls: (a) not checking Rh status — Rh-negative patients need Rho(D) immune globulin regardless of gestational age to prevent alloimmunization in future pregnancies. (b) Being falsely reassured by a low beta-hCG — heterotopic and ruptured ectopics can present with low or plateauing levels. (c) Delaying definitive management while awaiting beta-hCG trends in a patient with worsening pain or free fluid. (d) Overlooking cervical, interstitial, cornual, and cesarean scar ectopic locations, which can bleed catastrophically and require specialized management."
    }
  }
};
