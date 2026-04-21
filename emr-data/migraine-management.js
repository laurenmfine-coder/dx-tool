/* emr-data/migraine-management.js
   Migraine — Acute and Preventive Management
   Category: neurology | Acuity: ESI-3
   Settings: Clinic, ED
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Sofia Ramirez",
      "patientHPI": "I get terrible headaches about 3 times a week that last 4-8 hours. The pain is on one side, throbbing, and gets worse when I move around. Light and noise bother me a lot and I feel nauseous. Sometimes I see flashing lights for about 20 minutes before the headache starts. Ibuprofen doesn't work anymore.",
      "dob": "04/15/1988",
      "age": "37",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-552841",
      "language": "English/Spanish",
      "race": "Hispanic/Latina",
      "phone": "(214) 555-2841",
      "email": "s.ramirez@email.com",
      "address": "4412 Cedar Springs Rd, Dallas, TX 75219",
      "insurance": "United Healthcare",
      "pcp": "Dr. Carlos Rivera, MD",
      "pharmacy": "CVS — Cedar Springs",
      "emergencyContact": {
        "name": "Marco Ramirez",
        "phone": "(214) 555-9933",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Codeine",
        "reaction": "Nausea and vomiting",
        "severity": "Moderate",
        "type": "Drug"
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
      "Mother: migraines — started in her 20s",
      "Sister: migraines"
    ],
    "socialHistory": [
      [
        "Headache frequency",
        "3 attacks/week x6 months. Was 1-2/month 2 years ago — escalating. On ibuprofen DAILY — medication overuse headache risk."
      ],
      [
        "Triggers identified",
        "Hormonal (worse around menses), red wine, skipping meals, poor sleep, stress"
      ],
      [
        "OCP",
        "On combined oral contraceptive — IMPORTANT: migraine with aura + OCP = increased stroke risk. Must discuss."
      ],
      [
        "Disability",
        "Missing work 1-2 days/month. MIDAS score 22 (severe disability)."
      ],
      [
        "Smoking",
        "Never"
      ],
      [
        "Alcohol",
        "1-2 drinks/week (wine — identified trigger)"
      ]
    ]
  },
  "encounters": {
    "clinic": {
      "patient": {
        "chiefComplaint": "37F migraine with aura 3x/week — MIDAS 22 (severe disability) — daily NSAID use (medication overuse risk) — OCP + aura = stroke risk discussion needed — starting preventive therapy",
        "diagnosis": "Migraine with Aura — High Frequency — OCP Contraindicated — Starting Topiramate Prevention"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Migraine with aura — meets ICHD-3 criteria: ≥5 attacks, 4-72h duration, unilateral, pulsating, moderate-severe, aggravated by activity, nausea/photophobia/phonophobia. Visual aura (scintillating scotoma) precedes headache.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "G43.109"
        },
        {
          "id": "prob-2",
          "description": "PREVENTIVE therapy INDICATED: ≥4 headache days/month with disability, OR ≥3 headache days/month regardless, OR significant disability (MIDAS ≥11). This patient: 12 days/month + MIDAS 22 → STRONG indication.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "G43.109"
        },
        {
          "id": "prob-3",
          "description": "MEDICATION OVERUSE HEADACHE (MOH) RISK — using ibuprofen ≥10 days/month. Simple analgesics ≥15 days/month = MOH. Must limit acute therapy to <10 days/month. Introduce preventive to reduce need for acute therapy.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "G44.40"
        },
        {
          "id": "prob-4",
          "description": "OCP CONTRAINDICATED in migraine with aura — WHO category 4 (contraindication). Combined OCP + migraine with aura = 6-8x increased ischemic stroke risk. MUST switch to progestin-only pill (POP), IUD, or non-hormonal contraception. Discuss urgently with OB/GYN.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "Z30.09"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Sumatriptan",
          "dose": "100mg",
          "route": "PO",
          "frequency": "At onset of migraine — ACUTE THERAPY. Take early in attack (within 1h of onset). Limit to 9 days/month to avoid MOH.",
          "status": "NEW",
          "prescriber": "Dr. Neurology"
        },
        {
          "id": "med-2",
          "name": "Topiramate (Topamax)",
          "dose": "25mg nightly x4 weeks → 50mg nightly → 100mg nightly (target dose)",
          "route": "PO",
          "frequency": "PREVENTIVE THERAPY — titrate slowly over 8 weeks to minimize side effects. Takes 6-8 weeks to assess efficacy.",
          "status": "NEW",
          "prescriber": "Dr. Neurology"
        },
        {
          "id": "med-3",
          "name": "Ondansetron",
          "dose": "4mg",
          "route": "PO/ODT",
          "frequency": "PRN nausea with migraine — can take with sumatriptan",
          "status": "NEW PRN",
          "prescriber": "Dr. Neurology"
        },
        {
          "id": "med-4",
          "name": "Combined OCP",
          "dose": "Current OCP",
          "route": "PO",
          "frequency": "STOP — contraindicated with migraine with aura. Refer OB/GYN for alternative contraception today.",
          "status": "STOP — contraindicated",
          "prescriber": "OB/GYN — refer to change"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "10:30",
          "bp": "118/72",
          "hr": "68",
          "rr": "16",
          "temp": "37.0°C",
          "spo2": "99%",
          "pain": "0/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Neurology Outpatient Visit — Migraine Management",
          "date": "03/15/2026",
          "provider": "Dr. Neurology",
          "cc": "High-frequency migraine with aura — preventive therapy initiation + OCP contraindication",
          "hpi": "37F with escalating migraine frequency (now 12 days/month from baseline 2/month). Visual aura (20-min scintillating scotoma) preceding attacks. MIDAS score 22 — severe disability. Daily NSAID use at risk for MOH. Currently on combined OCP — CONTRAINDICATED with migraine with aura.\n\nICHD-3 CRITERIA FOR MIGRAINE WITH AURA:\n✓ ≥2 attacks\n✓ Aura: ≥1 fully reversible visual/sensory/speech symptom\n✓ Aura spreads gradually ≥5 min AND/OR 2+ aura symptoms\n✓ Aura lasts 5-60 min\n✓ Headache phase follows aura within 60 min\n→ CONFIRMED migraine with aura\n\nPREVENTIVE THERAPY OPTIONS (evidence-based):\n1. Topiramate (Topamax): first-line. 50-100mg/day. Side effects: cognitive slowing ('dopamax'), weight loss (sometimes desirable), kidney stones, teratogenicity. Effective: 50% reduction in ~40-50%.\n2. Propranolol: first-line. 80-240mg/day. Contraindicated if asthma, DM. Good for anxiety comorbidity.\n3. Amitriptyline: first-line. 10-75mg nightly. Good for comorbid anxiety/insomnia.\n4. CGRP monoclonal antibodies (erenumab, fremanezumab): second-line, expensive, injection. For refractory cases.\n5. Valproate: effective but teratogenic — avoid in women of childbearing age unless adequate contraception.\n\nACUTE THERAPY — TRIPTAN SELECTION:\n- Sumatriptan: first-line triptan. 50-100mg PO or 6mg SQ (faster).\n- Contraindicated: ischemic heart disease, uncontrolled HTN, hemiplegic migraine\n- Take EARLY in attack — most effective in first hour\n- Medication overuse: triptans ≤9 days/month to avoid MOH",
          "assessment": "Migraine with aura — preventive therapy indicated (MIDAS 22, 12 days/month). Topiramate + sumatriptan for acute. URGENT: stop combined OCP — refer OB/GYN today.",
          "plan": "Start topiramate 25mg nightly — titrate to 100mg over 8 weeks. Sumatriptan 100mg for acute attacks. Headache diary (app or paper). Limit all acute medications to ≤9 days/month. URGENT: Stop combined OCP — today. OB/GYN referral for progestin-only alternative. Trigger identification and management. Magnesium 400mg daily (evidence for prevention in menstrual migraine). Return 8 weeks — MIDAS reassessment. If topiramate intolerable: switch to propranolol or amitriptyline."
        }
      ],
      "labs": [],
      "imaging": []
    },
    "ed": {
      "patient": {
        "chiefComplaint": "37F known migraine — severe breakthrough attack, vomiting, unable to take oral medication — IV abortive therapy",
        "diagnosis": "Status Migrainosus — IV Abortive Protocol"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Status migrainosus — migraine >72h, unable to abort with oral sumatriptan. Vomiting prevents oral medications. IV protocol needed.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "G43.011"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prochlorperazine (Compazine)",
          "dose": "10mg IV",
          "route": "IV",
          "frequency": "Once — FIRST LINE in ED. Antiemetic + anti-migraine. More effective than IV opioids for migraine.",
          "status": "Active",
          "prescriber": "Dr. ED Attending"
        },
        {
          "id": "med-2",
          "name": "Diphenhydramine (Benadryl)",
          "dose": "25mg IV",
          "route": "IV",
          "frequency": "With prochlorperazine — prevents akathisia",
          "status": "Active",
          "prescriber": "Dr. ED Attending"
        },
        {
          "id": "med-3",
          "name": "Ketorolac",
          "dose": "30mg IV",
          "route": "IV",
          "frequency": "Once — IV NSAID adjunct. Limit single-use.",
          "status": "Active",
          "prescriber": "Dr. ED Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/20/2026",
          "time": "22:00",
          "bp": "122/78",
          "hr": "102",
          "rr": "18",
          "temp": "37.0°C",
          "spo2": "99%",
          "pain": "9/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "ED Visit — Status Migrainosus",
          "date": "03/20/2026",
          "provider": "Dr. ED Attending",
          "cc": "Status migrainosus — 5-day attack, vomiting",
          "hpi": "Known migraine patient now on topiramate (just started). 5-day refractory attack, vomiting, unable to take oral medications. No red flags (no fever, no nuchal rigidity, no focal deficits, no worst-of-life headache).\n\nED MIGRAINE TREATMENT — KEY TEACHING:\n1. AVOID OPIOIDS for migraine — opioids worsen long-term outcomes, increase MOH risk, associated with poor outcomes\n2. PROCHLORPERAZINE + DIPHENHYDRAMINE = most effective ED abortive combination. Diphenhydramine prevents akathisia from prochlorperazine.\n3. IV FLUIDS for dehydration from vomiting\n4. DEXAMETHASONE 10mg IV — prevents recurrence at 24-72h. Use with abortive, not alone.\n5. DHE (dihydroergotamine) 1mg IV — for status migrainosus if above fails\n\nWORST HEADACHE OF LIFE / RED FLAGS — WHEN TO WORRY:\n- First or worst headache of life → LP to exclude SAH (even if CT negative)\n- Fever + headache + nuchal rigidity → meningitis\n- Focal neurologic deficit → stroke\n- Headache with exertion, coughing, orgasm → Valsalva-triggered\n- Progressive worsening over weeks → mass\n→ NONE PRESENT — treat as migraine",
          "assessment": "Status migrainosus — IV protocol. No red flags. Prochlorperazine + diphenhydramine + ketorolac + IV fluids.",
          "plan": "IV access. NS 1L bolus. Prochlorperazine 10mg IV + diphenhydramine 25mg IV. Ketorolac 30mg IV. Dexamethasone 10mg IV (prevents recurrence). Dark quiet room. Reassess in 1 hour. If no improvement → DHE 1mg IV or valproate IV. If responds — discharge home with follow-up with neurology. No opioids."
        }
      ],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "AAN-Migraine-Prevention-2012",
      "title": "Evidence-based guideline update: NSAIDs and other complementary treatments for episodic migraine prevention in adults",
      "authors": "Holland S, Silberstein SD, Freitag F, et al.",
      "journal": "Neurology",
      "year": 2012,
      "doi": "10.1212/WNL.0b013e3182535884",
      "url": "https://www.neurology.org/doi/10.1212/WNL.0b013e3182535884",
      "openAccess": false,
      "validates": [
        "Topiramate for prevention",
        "Propranolol for prevention",
        "Evidence levels"
      ]
    },
    {
      "id": "StatPearls-Migraine",
      "title": "Migraine Headache",
      "authors": "Weatherall MW",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK560787/",
      "openAccess": true,
      "validates": [
        "ICHD-3 criteria",
        "Migraine with aura + OCP stroke risk",
        "Triptan selection",
        "ED abortive therapy",
        "Status migrainosus"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Status Migrainosus — Acute and Preventive Management",
    "caseId": "migraine-management"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: status migrainosus (severe migraine lasting over 72 hours) requiring IV abortive therapy, with a treatment plan for acute rescue and preventive therapy going forward. Key learning: (1) Migraine is a primary headache disorder diagnosed clinically using ICHD-3 criteria: at least 5 attacks lasting 4-72 hours, with at least 2 of (a) unilateral, (b) pulsating, (c) moderate-severe intensity, (d) aggravation by routine physical activity, AND at least one of (a) nausea/vomiting or (b) photophobia AND phonophobia. Status migrainosus is a debilitating migraine lasting over 72 hours despite usual abortive therapy. Before labeling any severe headache as migraine, rule out secondary causes with the 'SNOOP' red flags: Systemic symptoms or signs (fever, weight loss, cancer history), Neurologic deficits or altered consciousness, Onset sudden (thunderclap), Older age onset (over 50), Pattern change or Pregnancy/postpartum. (2) Acute abortive therapy follows a stepwise approach. Mild-moderate migraine: NSAIDs (naproxen, ibuprofen), acetaminophen, or combination analgesics. Moderate-severe migraine: triptans (sumatriptan is the workhorse — SQ for fastest onset, nasal for intermediate, oral for convenience; other triptans include rizatriptan, eletriptan, frovatriptan for longer half-life); CGRP antagonists (gepants — ubrogepant, rimegepant, zavegepant); ditans (lasmiditan — no vasoconstriction, option for patients with cardiovascular risk). ED/IV abortive regimen for status migrainosus: IV fluids, metoclopramide or prochlorperazine (dopamine antagonists are also effective abortives), ketorolac, magnesium (1-2 g IV), dexamethasone (8-10 mg to prevent recurrence), and consideration of DHE (dihydroergotamine) infusion in refractory cases. Avoid opioids and butalbital — they are less effective and drive medication overuse headache. (3) Preventive therapy is indicated for 4+ migraine days/month, significant disability despite acute therapy, or inability to tolerate acute therapy. Oral preventives: beta-blockers (propranolol, metoprolol), topiramate, amitriptyline or venlafaxine, candesartan, and valproate (avoid in women of childbearing potential). CGRP monoclonal antibodies: erenumab, fremanezumab, galcanezumab (monthly or quarterly SQ injections); atogepant and rimegepant (oral daily). OnabotulinumtoxinA injections every 12 weeks for chronic migraine (≥15 headache days/month with ≥8 migraine days). Trigger identification and lifestyle modifications: regular sleep, regular meals, hydration, exercise, stress reduction, limiting dietary triggers, and treating comorbid depression/anxiety. (4) Medication overuse headache (MOH) is a major cause of chronic daily headache: develops with frequent acute medication use (simple analgesics more than 15 days/month, triptans/ergots/opioids/combinations more than 10 days/month). Treatment requires withdrawal of the offending agent (abrupt for triptans, NSAIDs, acetaminophen; gradual for barbiturates and opioids), bridge therapy (NSAIDs, dexamethasone, DHE, or anti-nausea agents), and starting preventive therapy simultaneously. (5) Classic pitfalls: (a) labeling every severe headache as migraine without ruling out SAH, giant cell arteritis, venous sinus thrombosis, carotid/vertebral dissection, and pituitary apoplexy — any SNOOP feature triggers imaging. (b) Over-reliance on opioids or butalbital-containing products — drive MOH and rarely help migraine. (c) Not offering preventive therapy to patients with frequent or disabling migraines — undertreatment is common. (d) Forgetting that triptans are contraindicated in uncontrolled hypertension, ischemic heart disease, stroke, peripheral vascular disease, hemiplegic migraine, and basilar migraine — use ditans or gepants in these patients."
    }
  }
};
