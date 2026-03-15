/* emr-data/ibs-management.js
   Irritable Bowel Syndrome — Diagnosis and Management
   Category: gi | Acuity: ESI-3
   Settings: Clinic
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Priya Mehta",
      "patientHPI": "I've had stomach pain and bloating for over a year. Sometimes I have diarrhea and sometimes I'm constipated. The pain always gets better after I have a bowel movement. My primary care doctor has done lots of blood tests and they're all normal. I'm worried it's something serious.",
      "dob": "08/22/1990", "age": "35", "sex": "Female", "pronouns": "she/her",
      "mrn": "MRN-221847", "language": "English/Hindi", "race": "Asian",
      "phone": "(312) 555-1847", "email": "p.mehta@email.com",
      "address": "2218 W. Devon Ave, Chicago, IL 60659",
      "insurance": "Blue Cross Blue Shield", "pcp": "Dr. Anjali Patel, MD",
      "pharmacy": "Walgreens — Devon Ave",
      "emergencyContact": { "name": "Raj Mehta", "phone": "(312) 555-8844", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }],
    "familyHistory": ["Mother: IBS", "Father: no GI issues"],
    "socialHistory": [
      ["Stressors", "High-stress job — software project manager. Symptoms worse with work stress."],
      ["Diet", "Regular diet. Has tried eliminating gluten — no improvement. Drinks 3-4 cups coffee/day."],
      ["Menstrual", "Symptoms worsen perimenstrually — common in IBS"],
      ["Prior workup", "CBC, CMP, TSH, celiac panel — all normal. Colonoscopy 2 years ago (for family history workup) — normal. Stool calprotectin: 28 mcg/g (normal <50 — argues against IBD)."],
      ["Smoking", "Never"], ["Alcohol", "Rare"]
    ]
  },
  "encounters": {
    "clinic": {
      "patient": {
        "chiefComplaint": "35F — 14-month abdominal pain relieved by defecation, alternating bowel habits, bloating — Rome IV criteria for IBS-M — reassurance + dietary + low-dose TCA",
        "diagnosis": "Irritable Bowel Syndrome — Mixed Type (IBS-M) — Rome IV Criteria"
      },
      "problems": [
        { "id": "prob-1", "description": "IBS-M (mixed type) — meets Rome IV criteria: recurrent abdominal pain ≥1 day/week x3 months, associated with ≥2 of: (1) related to defecation, (2) change in stool frequency, (3) change in stool form. No red flags. Normal colonoscopy 2 years ago. Normal calprotectin.", "status": "Active", "onset": "Chronic", "icd10": "K58.9" },
        { "id": "prob-2", "description": "Red flags ABSENT — reassuring: no rectal bleeding, no unintentional weight loss, no nocturnal symptoms waking from sleep, no family history CRC/IBD, age <45, normal colonoscopy 2 years ago, normal calprotectin, no anemia.", "status": "Active", "onset": "Chronic", "icd10": "K58.9" },
        { "id": "prob-3", "description": "Brain-gut axis dysfunction — the pathophysiology of IBS. Visceral hypersensitivity + altered motility + gut microbiome + psychosocial factors. Treatment addresses this axis.", "status": "Active", "onset": "Chronic", "icd10": "K58.9" },
        { "id": "prob-4", "description": "Anxiety — GAD-7 score 12 (moderate). IBS and anxiety are highly comorbid — share underlying neural pathways. Addressing anxiety improves IBS outcomes.", "status": "Active", "onset": "Chronic", "icd10": "F41.1" }
      ],
      "medications": [
        { "id": "med-1", "name": "Amitriptyline", "dose": "10mg", "route": "PO", "frequency": "Nightly — LOW DOSE TCA (neuromodulator, not antidepressant dose). Reduces visceral hypersensitivity, slows motility (helpful for IBS-D component), improves sleep. Take at night (sedating).", "status": "NEW", "prescriber": "Dr. GI Attending" },
        { "id": "med-2", "name": "Psyllium (Metamucil)", "dose": "1 tsp", "route": "PO", "frequency": "BID in 8oz water — soluble fiber. Bulks stool (helps both diarrhea and constipation). Start low, increase slowly.", "status": "NEW", "prescriber": "Dr. GI Attending" },
        { "id": "med-3", "name": "Loperamide (Imodium)", "dose": "2mg", "route": "PO", "frequency": "PRN diarrhea episodes — max 4 doses/day. For breakthrough diarrhea days.", "status": "NEW PRN", "prescriber": "Dr. GI Attending" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "11:00", "bp": "118/74", "hr": "74", "rr": "16", "temp": "37.0°C", "spo2": "99%", "pain": "2/10" }],
      "visits": [{
        "id": "visit-1", "type": "Gastroenterology New Patient Visit", "date": "03/15/2026", "provider": "Dr. GI Attending",
        "cc": "IBS diagnosis and management plan",
        "hpi": "35F with 14-month history of recurrent abdominal cramping, bloating, and alternating diarrhea and constipation. Pain reliably improves with defecation. Extensive normal workup. No red flags.\n\nROME IV CRITERIA FOR IBS (all required):\n✓ Recurrent abdominal pain ≥1 day/week over the last 3 months\n✓ Associated with ≥2 of: pain related to defecation, change in stool frequency, change in stool form/appearance\n✓ Symptom onset ≥6 months before diagnosis\n✓ No evidence of IBD, celiac, other structural disease\n→ IBS DIAGNOSIS CONFIRMED\n\nIBS SUBTYPES (Bristol Stool Scale):\n- IBS-C: >25% hard/lumpy stools\n- IBS-D: >25% loose/watery stools\n- IBS-M (mixed): >25% both hard AND loose stools → THIS PATIENT\n- IBS-U: unclassified\n\nRED FLAGS REQUIRING FURTHER WORKUP:\n- Rectal bleeding → colonoscopy\n- Unintentional weight loss → CT + endoscopy\n- Nocturnal symptoms waking from sleep → IBD\n- New onset >50 years without prior colonoscopy\n- Family history CRC or IBD\n- Elevated calprotectin (>50) → suggests IBD\n→ NONE PRESENT — positive diagnosis is appropriate\n\nTREATMENT APPROACH (evidence-based):\n1. Education and reassurance — IBS is not dangerous. Reduces healthcare utilization.\n2. Dietary modifications: LOW FODMAP diet (fermentable carbs) — 50-70% response rate\n3. Soluble fiber (psyllium) — helps both subtypes\n4. Neuromodulators: low-dose TCA (amitriptyline 10-25mg) — reduces visceral hypersensitivity\n5. Psychological therapy: CBT, gut-directed hypnotherapy — strong evidence\n6. IBS-D specific: rifaximin, alosetron (severe refractory)\n7. IBS-C specific: linaclotide, plecanatide",
        "assessment": "IBS-M, Rome IV confirmed. Start low-dose amitriptyline + soluble fiber + dietary modification. Refer for CBT/gut-directed therapy given anxiety comorbidity.",
        "plan": "Amitriptyline 10mg nightly (neuromodulator). Psyllium BID. Low FODMAP diet trial x8 weeks — dietitian referral. Loperamide PRN diarrhea days. CBT referral (GI-focused CBT or gut-directed hypnotherapy — evidence-based). Reduce caffeine (stimulates motility). Return 8 weeks — reassess. If amitriptyline inadequate → increase to 25mg or switch to duloxetine. Avoid unnecessary repeat labs/scoping — re-assurance is part of treatment."
      }],
      "labs": [{
        "date": "03/01/2026", "time": "", "status": "Final", "orderedBy": "Dr. Anjali Patel",
        "accession": "LAB-221847", "collected": "03/01/2026", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood and Stool",
        "groups": [
          { "name": "IBS DIAGNOSTIC WORKUP (ALL NORMAL)", "results": [
            { "test": "CBC", "value": "WBC 7.2, Hgb 13.8, MCV 88, Plt 242 — normal", "unit": "", "range": "Normal", "flag": "" },
            { "test": "TSH", "value": "2.2", "unit": "mIU/L", "range": "0.4-4.0 — hypothyroid excluded", "flag": "" },
            { "test": "Celiac IgA / tTG IgA", "value": "Negative — celiac excluded", "unit": "", "range": "Negative", "flag": "" },
            { "test": "CRP", "value": "2.8", "unit": "mg/L", "range": "<10 — low inflammation", "flag": "" },
            { "test": "Stool Calprotectin", "value": "28", "unit": "mcg/g", "range": "<50 = low IBD probability", "flag": "" },
            { "test": "Stool culture / O&P", "value": "Negative — no infection", "unit": "", "range": "Negative", "flag": "" },
            { "test": "C. difficile toxin", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
          ]}
        ]
      }],
      "imaging": []
    },
    "ed": {
      "patient": { "chiefComplaint": "Not applicable", "diagnosis": "Clinic only" },
      "problems": [], "medications": [], "vitals": [], "visits": [], "labs": [], "imaging": []
    }
  },
  "references": [
    { "id": "ACG-IBS-2021", "title": "ACG Clinical Guideline: Management of Irritable Bowel Syndrome", "authors": "Lacy BE, Pimentel M, Brenner DM, et al.", "journal": "American Journal of Gastroenterology", "year": 2021, "doi": "10.14309/ajg.0000000000001036", "url": "https://journals.lww.com/ajg/fulltext/2021/01000/acg_clinical_guideline__management_of_irritable.11.aspx", "openAccess": false, "validates": ["Rome IV criteria", "Diagnostic approach", "Dietary interventions (low FODMAP)", "Neuromodulators (TCA)", "CBT evidence"] },
    { "id": "StatPearls-IBS", "title": "Irritable Bowel Syndrome", "authors": "Camilleri M", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK534810/", "openAccess": true, "validates": ["Rome IV criteria", "IBS subtypes", "Red flag symptoms", "Calprotectin role", "Treatment algorithm"] }
  ]
};
