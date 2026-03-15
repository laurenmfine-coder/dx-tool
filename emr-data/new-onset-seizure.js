/* emr-data/new-onset-seizure.js
   New-Onset Seizure in an Adult — Workup and Red Flags
   Category: neurology | Acuity: ESI-2
   Settings: ED, Floor
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Amara Diallo",
      "patientHPI": "My coworkers said I fell to the floor and started shaking all over for about two minutes. I don't remember it at all. When I woke up I was confused and my tongue was bleeding. I've never had anything like this before. I've had a headache for about three weeks that won't go away.",
      "dob": "09/17/1985", "age": "40", "sex": "Female", "pronouns": "she/her",
      "mrn": "MRN-662891", "language": "English/French", "race": "Black/African American",
      "phone": "(212) 555-2891", "email": "a.diallo@email.com",
      "address": "445 W 145th St, New York, NY 10031",
      "insurance": "Medicaid", "pcp": "Dr. Fatou Ndiaye, MD",
      "pharmacy": "Duane Reade — 145th St",
      "emergencyContact": { "name": "Moussa Diallo", "phone": "(212) 555-7712", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }],
    "familyHistory": ["No family history of epilepsy", "Mother: hypertension"],
    "socialHistory": [
      ["HIV", "HIV-positive — diagnosed 8 years ago. On ART (bictegravir/emtricitabine/tenofovir). LAST LABS 4 months ago — CD4 count unknown today."],
      ["Recent headache", "3 weeks of progressive headache — attributed to stress, not evaluated"],
      ["Smoking", "Never"], ["Alcohol", "Rare"], ["Illicit drugs", "Denies current use"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "40F, HIV+, new-onset tonic-clonic seizure at work — 3-week headache history — post-ictal — MUST RULE OUT CNS INFECTION AND MASS",
        "diagnosis": "New-Onset Seizure — Secondary to CNS Toxoplasmosis (Ring-Enhancing Lesion)"
      },
      "problems": [
        { "id": "prob-1", "description": "New-onset seizure — generalized tonic-clonic, witnessed, ~2 minutes. Tongue laceration and post-ictal confusion. NO prior seizure history.", "status": "Active", "onset": "Acute", "icd10": "R56.9" },
        { "id": "prob-2", "description": "CNS Toxoplasmosis — ring-enhancing lesion right frontal lobe on MRI. HIV+ patient with CD4 count 68 (severely immunosuppressed — not disclosed, found today). Most common CNS mass in HIV with CD4 <100.", "status": "Active", "onset": "Subacute", "icd10": "B58.2" },
        { "id": "prob-3", "description": "3-week progressive headache — seizure was not the first symptom. Classic for CNS mass or infection. RED FLAG headache — new, progressive, in immunocompromised patient.", "status": "Active", "onset": "Subacute", "icd10": "G44.309" },
        { "id": "prob-4", "description": "HIV with CD4 68 — severely immunosuppressed. ART non-adherence? Viral load? Opportunistic infection risk panel needed.", "status": "Active", "onset": "Chronic", "icd10": "B20" }
      ],
      "medications": [
        { "id": "med-1", "name": "Bictegravir/emtricitabine/tenofovir (Biktarvy)", "dose": "1 tablet", "route": "PO", "frequency": "Daily — patient reports taking consistently but CD4 low", "status": "Active — continue", "prescriber": "Dr. ID Attending" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "11:15", "bp": "148/90", "hr": "106", "rr": "18", "temp": "38.2°C", "spo2": "98%", "pain": "5/10" }],
      "visits": [{
        "id": "visit-1", "type": "Emergency Visit", "date": "03/15/2026", "provider": "Dr. Attending",
        "cc": "New-onset seizure with 3-week headache in HIV+ patient — CNS pathology must be excluded",
        "hpi": "40F with HIV (on Biktarvy) presents after witnessed generalized tonic-clonic seizure at work (~2 minutes). Coworkers called 911. Post-ictal on arrival — confused, responding to name but disoriented. Tongue laceration. Right arm drift noted on exam. 3-week history of progressive frontal headache previously dismissed as stress.\n\nNEW SEIZURE WORKUP FRAMEWORK:\nSTEP 1 — Is this truly a seizure? (vs. syncope, TIA, psychogenic) → Witnessed tonic-clonic, tongue bite, post-ictal confusion = YES\nSTEP 2 — Provoked or unprovoked?\n- Provoked: metabolic (glucose, Na, Ca), drugs/alcohol, CNS infection, structural lesion\n- Unprovoked: epilepsy\nSTEP 3 — Red flags demanding immediate imaging:\n✓ New-onset adult seizure\n✓ HIV+/immunocompromised\n✓ Progressive headache\n✓ Focal neurologic signs (right arm drift)\n✓ Fever\n→ CT HEAD IMMEDIATELY, then MRI WITH CONTRAST\n\nNEVER DO LP BEFORE IMAGING in new seizure with possible mass (herniation risk if elevated ICP).",
        "assessment": "New seizure in HIV+ patient with 3-week headache and focal deficits — CNS mass is the working diagnosis until proven otherwise. CT/MRI urgently. ID consult. Do NOT give LP before imaging.",
        "plan": "CT head without contrast STAT (r/o hemorrhage, mass effect, herniation risk before LP). MRI brain with/without contrast (better for ring-enhancing lesions, toxo, lymphoma, PML). Toxoplasma IgG serology, CMV, EBV, cryptococcal Ag, RPR. CD4 count + HIV viral load. Blood cultures if febrile. Levetiracetam 1g IV for seizure prophylaxis. ID consult urgently. Neurology consult. Steroids HOLD until diagnosis (may worsen CNS lymphoma, improve toxo non-specifically). Continue Biktarvy. NPO until swallow assessed post-ictally."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "11:30", "status": "Final", "orderedBy": "Dr. Attending",
        "accession": "LAB-662891", "collected": "03/15/2026 11:25", "fasting": "Not fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "METABOLIC — SEIZURE SCREEN", "results": [
            { "test": "Glucose", "value": "96", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Calcium", "value": "9.2", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "Magnesium", "value": "1.9", "unit": "mg/dL", "range": "1.7-2.2", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.5-1.1", "flag": "" }
          ]},
          { "name": "HIV AND IMMUNE STATUS", "results": [
            { "test": "CD4 Count", "value": "68", "unit": "cells/µL", "range": ">500 normal; <200 = AIDS", "flag": "L" },
            { "test": "HIV Viral Load", "value": "12,400", "unit": "copies/mL", "range": "<20 (undetectable)", "flag": "H" },
            { "test": "Toxoplasma IgG", "value": "POSITIVE (high titer)", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Cryptococcal Antigen (serum)", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "CMV IgG", "value": "Positive (prior exposure)", "unit": "", "range": "Negative", "flag": "" },
            { "test": "CMV Viral Load", "value": "Undetectable", "unit": "", "range": "Undetectable", "flag": "" }
          ]},
          { "name": "CBC AND INFLAMMATORY", "results": [
            { "test": "WBC", "value": "3.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "L" },
            { "test": "Hemoglobin", "value": "10.2", "unit": "g/dL", "range": "12-16", "flag": "L" },
            { "test": "Platelets", "value": "142", "unit": "x10³/µL", "range": "150-400", "flag": "L" },
            { "test": "CRP", "value": "42", "unit": "mg/L", "range": "<10", "flag": "H" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "CT Head Without Contrast — STAT",
          "date": "03/15/2026", "time": "11:48", "orderedBy": "Dr. Attending",
          "findings": "Hypodense lesion right frontal lobe with surrounding edema and mild mass effect. No hemorrhage. No midline shift. No herniation.",
          "impression": "Right frontal hypodense lesion with vasogenic edema — MRI with contrast urgently needed. CNS mass cannot be excluded.", "critical": true },
        { "id": "img-2", "type": "MRI Brain With and Without Contrast",
          "date": "03/15/2026", "time": "13:00", "orderedBy": "Dr. Attending",
          "findings": "Two ring-enhancing lesions: right frontal (2.2 cm) and left basal ganglia (1.1 cm). Central hypointensity with peripheral ring enhancement on post-contrast T1. Surrounding vasogenic edema. 'Eccentric target sign' present — highly characteristic of toxoplasmosis. No leptomeningeal enhancement. No hydrocephalus.",
          "impression": "Multiple ring-enhancing lesions with eccentric target sign in HIV+ patient with CD4 68 and positive Toxoplasma IgG — CNS toxoplasmosis is the leading diagnosis. CNS lymphoma in differential. Empiric toxoplasmosis treatment indicated.", "critical": true }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 3 — CNS toxoplasmosis — empiric Pyrimethamine + Sulfadiazine + Leucovorin started. Seizure-free.",
        "diagnosis": "CNS Toxoplasmosis — HIV/AIDS — Treatment Day 3"
      },
      "problems": [
        { "id": "prob-1", "description": "CNS toxoplasmosis — empiric treatment started (clinical + radiologic diagnosis; biopsy deferred if responds to treatment in 2 weeks — expected 50% lesion reduction). Toxoplasma IgG positive, CD4 68, ring-enhancing lesions with eccentric target sign.", "status": "Active", "onset": "Subacute", "icd10": "B58.2" },
        { "id": "prob-2", "description": "Seizure-free on levetiracetam. Continue antiseizure medication x3-6 months minimum while treating toxo.", "status": "Active", "onset": "Acute", "icd10": "G40.909" },
        { "id": "prob-3", "description": "HIV viral load 12,400 — ART non-adherence or resistance. ID adjusting ART regimen.", "status": "Active", "onset": "Chronic", "icd10": "B20" }
      ],
      "medications": [
        { "id": "med-1", "name": "Pyrimethamine", "dose": "200mg loading, then 75mg daily", "route": "PO", "frequency": "Daily — with leucovorin to prevent bone marrow suppression", "status": "Active — day 3", "prescriber": "Dr. ID Attending" },
        { "id": "med-2", "name": "Sulfadiazine", "dose": "1.5g", "route": "PO", "frequency": "Q6H", "status": "Active — day 3", "prescriber": "Dr. ID Attending" },
        { "id": "med-3", "name": "Leucovorin (folinic acid)", "dose": "10mg", "route": "PO", "frequency": "Daily — PREVENTS pyrimethamine bone marrow toxicity", "status": "Active", "prescriber": "Dr. ID Attending" },
        { "id": "med-4", "name": "Levetiracetam", "dose": "1000mg", "route": "PO", "frequency": "BID", "status": "Active", "prescriber": "Dr. Neurology" },
        { "id": "med-5", "name": "Dexamethasone", "dose": "4mg", "route": "IV", "frequency": "Q6H — ONLY for significant mass effect/edema. Steroids WORSEN CNS lymphoma — used cautiously once toxo diagnosis favored.", "status": "Active — 48h course for edema", "prescriber": "Dr. ID Attending" }
      ],
      "vitals": [{ "date": "03/17/2026", "time": "06:00", "bp": "132/84", "hr": "88", "rr": "16", "temp": "37.4°C", "spo2": "99%", "pain": "2/10" }],
      "visits": [{
        "id": "visit-2", "type": "ID/Neurology Progress Note", "date": "03/17/2026", "provider": "Dr. ID + Neurology",
        "cc": "CNS toxo day 3 — improving, headache better, no seizures",
        "hpi": "Headache improving significantly. No further seizures on levetiracetam. Focal neurologic deficit (right arm drift) mildly improving. Tolerating oral toxoplasma regimen. CD4 68 — ART being optimized by ID team.\n\nTREATMENT RESPONSE MONITORING:\n- Clinical: headache, focal deficits, seizures\n- Imaging: Repeat MRI at 2 weeks — expect 50% lesion reduction if toxoplasmosis\n- If NO improvement at 2 weeks → biopsy to exclude CNS lymphoma (EBV-associated, ring-enhancing, often indistinguishable from toxo on imaging)\n\nLONG-TERM: After 6 weeks acute treatment → maintenance/secondary prophylaxis (pyrimethamine + sulfadiazine at lower dose) until CD4 >200 x6 months on ART.",
        "assessment": "CNS toxoplasmosis responding to empiric treatment. Continue 6-week acute course then maintenance prophylaxis.",
        "plan": "Continue pyrimethamine/sulfadiazine/leucovorin. Repeat MRI at 2 weeks. CBC weekly (pyrimethamine bone marrow toxicity — monitor WBC/platelets). ID team optimizing ART. Neurology follow-up. Discharge to home with close ID/neurology follow-up when stable, afebrile, tolerating PO."
      }],
      "labs": [{
        "date": "03/17/2026", "time": "06:00", "status": "Final", "orderedBy": "Dr. ID Attending",
        "accession": "LAB-662892", "collected": "03/17/2026 05:55", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "CBC — WEEKLY MONITORING ON PYRIMETHAMINE", "results": [
            { "test": "WBC", "value": "3.4", "unit": "x10³/µL", "range": "4.5-11.0 (watching for pyrimethamine suppression)", "flag": "L" },
            { "test": "Platelets", "value": "128", "unit": "x10³/µL", "range": "150-400", "flag": "L" }
          ]}
        ]
      }],
      "imaging": []
    }
  },
  "references": [
    { "id": "StatPearls-Seizure", "title": "Seizure", "authors": "Bhatt DL, Bhatt S", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK430765/", "openAccess": true, "validates": ["New-onset seizure workup", "Provoked vs unprovoked", "Imaging before LP"] },
    { "id": "StatPearls-Toxoplasmosis", "title": "Toxoplasmosis", "authors": "Dunay IR, Gajurel K, Dhakal R, Liesenfeld O, Montoya JG", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK470628/", "openAccess": true, "validates": ["CNS toxo diagnosis (CD4 <100, ring-enhancing, Toxo IgG+)", "Eccentric target sign", "Empiric treatment", "Pyrimethamine + sulfadiazine + leucovorin", "2-week imaging response"] }
  ]
};
