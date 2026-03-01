// Virtual EMR Case: Midgut Volvulus
// Variant: midgut-volvulus | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Mateo Rivera",
    "dob": "12/05/2024",
    "age": 0,
    "sex": "Male",
    "mrn": "RDX-2025-58412",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida Healthy Kids)",
    "pcp": "Dr. Sandra Delgado, MD (Pediatrics)",
    "pharmacy": "Walgreens — 4550 N State Rd 7, Lauderdale Lakes, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "1635 NW 46th Ave, Lauderhill, FL 33313",
    "phone": "(954) 555-4291",
    "email": "c.rivera.family@email.com",
    "emergencyContact": {
      "name": "Carmen Rivera (Mother)",
      "phone": "(954) 555-4293"
    }
  },
  "problems": [
    {
      "problem": "Intestinal Malrotation with Midgut Volvulus",
      "icd": "Q43.3",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — bilious vomiting at 11 weeks of age"
    },
    {
      "problem": "Mild Physiologic Jaundice — Resolved",
      "icd": "P59.9",
      "onset": "2024",
      "status": "Resolved",
      "notes": "Peak bilirubin 14.2 at day 4; resolved by 2 weeks without phototherapy"
    }
  ],
  "medications": [
    {
      "name": "Vitamin D 400 IU drops daily",
      "sig": "Give 1 mL by mouth daily",
      "prescriber": "Dr. Delgado",
      "start": "01/2025",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/19/2025",
      "bp": "68/38",
      "hr": 204,
      "rr": 58,
      "temp": "97.8°F",
      "spo2": "96%",
      "wt": "10.8 lbs",
      "ht": "22\"",
      "bmi": 15.8,
      "setting": "ED"
    },
    {
      "date": "02/04/2025",
      "bp": "74/44",
      "hr": 148,
      "rr": 36,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "10.4 lbs",
      "ht": "21.5\"",
      "bmi": 15.9,
      "setting": "PCP Office"
    },
    {
      "date": "12/19/2024",
      "bp": "70/40",
      "hr": 144,
      "rr": 40,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "7.6 lbs",
      "ht": "20\"",
      "bmi": 13.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/04/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Delgado, MD",
      "cc": "2-month well-baby visit",
      "hpi": "2-month-old male presenting for well-baby check. Parents report good feeding on breast milk with occasional formula supplementation (Similac Advance). Taking 4-5 oz every 2-3 hours. Stooling 3-4 times daily, yellow, seedy. One episode of spitting up yesterday but otherwise no vomiting. Active, alert, good eye contact. Sleeping 3-4 hour stretches.",
      "exam": "General: Alert, well-appearing infant. HEENT: Anterior fontanelle soft/flat, red reflex present bilaterally. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, nontender, no distension, no masses. GU: Normal circumcised male, testes descended. Skin: Clear. Neuro: Age-appropriate reflexes, good tone.",
      "assessment": "1. Well-baby 2-month visit — growing well along 50th percentile\n2. Immunizations given",
      "plan": "1. DTaP, IPV, Hib, PCV15, Rotavirus per schedule\n2. Continue breast milk + supplement as needed\n3. Vitamin D supplementation\n4. RTC 2 months for 4-month visit"
    },
    {
      "id": "V002",
      "date": "12/19/2024",
      "type": "Primary Care",
      "provider": "Dr. Sandra Delgado, MD",
      "cc": "Newborn visit — 2 weeks old",
      "hpi": "2-week-old full-term male born via SVD at 39+2 weeks. Birth weight 7 lbs 2 oz. Uncomplicated delivery. Apgar 8/9. Mild jaundice noted at day 3, peaked at 14.2 — below phototherapy threshold. Breastfeeding well, latching appropriately. Mother reports 6-8 wet diapers per day and 3-4 stools.",
      "exam": "General: Alert neonate, mild residual jaundice. HEENT: Anterior fontanelle soft/flat. CV: RRR. Lungs: CTA. Abdomen: Soft, umbilical stump clean and drying. GU: Normal. Skin: Mild jaundice improving. Neuro: Strong cry, intact reflexes.",
      "assessment": "1. Healthy newborn — 2-week visit\n2. Physiologic jaundice — improving\n3. Breastfeeding — established",
      "plan": "1. Transcutaneous bilirubin 10.4 — downtrending, no treatment\n2. Continue breastfeeding on demand\n3. Start Vitamin D 400 IU daily\n4. RTC at 2 months for well-baby visit and immunizations"
    }
  ],
  "labs": [
    {
      "date": "02/19/2025",
      "time": "03:45",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "collected": "02/19/2025 03:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-091827",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA), Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT (CBC) WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "18.6", "unit": "x10³/µL", "range": "5.0-19.5", "flag": "" },
            { "test": "Hemoglobin", "value": "12.4", "unit": "g/dL", "range": "9.5-14.0", "flag": "" },
            { "test": "Hematocrit", "value": "37.2", "unit": "%", "range": "28-42", "flag": "" },
            { "test": "Platelets", "value": "188", "unit": "x10³/µL", "range": "150-400", "flag": "" },
            { "test": "Neutrophils", "value": "68", "unit": "%", "range": "15-45", "flag": "H" },
            { "test": "Bands", "value": "6", "unit": "%", "range": "0-5", "flag": "H" },
            { "test": "Lymphocytes", "value": "20", "unit": "%", "range": "40-70", "flag": "L" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "58", "unit": "mg/dL", "range": "50-90", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "3-12", "flag": "H" },
            { "test": "Creatinine", "value": "0.3", "unit": "mg/dL", "range": "0.1-0.4", "flag": "" },
            { "test": "Sodium", "value": "133", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "5.4", "unit": "mEq/L", "range": "3.5-6.0", "flag": "" },
            { "test": "Chloride", "value": "100", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "14", "unit": "mEq/L", "range": "18-25", "flag": "L" }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            { "test": "Lactate", "value": "6.8", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        },
        {
          "name": "BLOOD GAS (VENOUS)",
          "results": [
            { "test": "pH", "value": "7.22", "unit": "", "range": "7.32-7.42", "flag": "L" },
            { "test": "pCO2", "value": "32", "unit": "mmHg", "range": "35-45", "flag": "L" },
            { "test": "Base Excess", "value": "-12", "unit": "mEq/L", "range": "-2 to +2", "flag": "L" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/19/2025",
      "study": "UPPER GI SERIES (FLUOROSCOPIC)",
      "accession": "IMG-2025-09184",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD (ED) / Pediatric Surgery",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "11-week-old male with acute bilious vomiting, abdominal distension, lethargy — concern for malrotation with midgut volvulus",
      "technique": "Oral administration of water-soluble contrast under fluoroscopic guidance. Spot images obtained of the esophagus, stomach, duodenum, and proximal jejunum.",
      "findings": "STOMACH: Normal gastric distension with contrast filling.\n\nDUODENUM: The duodenal C-loop is ABNORMAL. The duodenojejunal junction (ligament of Treitz) does NOT cross midline — it is positioned to the RIGHT of the spine and BELOW the duodenal bulb. This is consistent with intestinal malrotation.\n\nOBSTRUCTION: There is an abrupt cutoff of contrast flow at the level of the third portion of the duodenum with a 'corkscrew' or 'bird's beak' appearance, consistent with midgut volvulus.\n\nDISTAL BOWEL: No contrast passage beyond the point of obstruction.",
      "impression": "1. MALROTATION WITH MIDGUT VOLVULUS — classic findings of malpositioned ligament of Treitz and corkscrew sign at D3\n2. Complete small bowel obstruction at the level of the volvulus\n3. EMERGENT SURGICAL CONSULTATION — Ladd procedure indicated",
      "dictated": "02/19/2025 04:25",
      "verified": "02/19/2025 04:30"
    },
    {
      "date": "02/19/2025",
      "study": "ABDOMINAL X-RAY — AP SUPINE",
      "accession": "IMG-2025-09180",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "11-week-old with bilious vomiting — r/o obstruction",
      "technique": "Single AP supine radiograph of the abdomen.",
      "findings": "BOWEL GAS PATTERN: There is a paucity of distal bowel gas. The stomach and proximal duodenum appear dilated with an air-fluid level. The remainder of the abdomen shows very little intestinal gas — 'gasless abdomen' pattern in the distal small bowel and colon.\n\nNO FREE AIR: No pneumoperitoneum.\n\nSOFT TISSUES: Unremarkable.",
      "impression": "1. Double-bubble sign with paucity of distal bowel gas — concerning for proximal obstruction\n2. Differential includes malrotation with volvulus, duodenal atresia/web — clinical correlation and upper GI series recommended\n3. No free air to suggest perforation",
      "dictated": "02/19/2025 03:55",
      "verified": "02/19/2025 04:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Hepatitis B (Engerix-B)", "date": "12/05/2024", "site": "Right thigh IM", "lot": "HB721K", "mfr": "GSK" },
    { "vaccine": "DTaP (Daptacel)", "date": "02/04/2025", "site": "Right thigh IM", "lot": "DA518R", "mfr": "Sanofi" },
    { "vaccine": "IPV (IPOL)", "date": "02/04/2025", "site": "Left thigh IM", "lot": "IP342T", "mfr": "Sanofi" },
    { "vaccine": "Hib (ActHIB)", "date": "02/04/2025", "site": "Right thigh IM", "lot": "AH229P", "mfr": "Sanofi" },
    { "vaccine": "PCV15 (Vaxneuvance)", "date": "02/04/2025", "site": "Left thigh IM", "lot": "PV128L", "mfr": "Merck" },
    { "vaccine": "Rotavirus (RotaTeq)", "date": "02/04/2025", "site": "Oral", "lot": "RV831M", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother (age 24): Healthy, no significant medical history",
    "Father (age 27): Childhood appendectomy; otherwise healthy",
    "Maternal grandmother (age 52): Type 2 Diabetes, hypertension",
    "Paternal grandmother (age 55): Cholecystectomy, GERD",
    "No family history of congenital GI anomalies, Hirschsprung disease, or cystic fibrosis"
  ],
  "socialHistory": [
    ["Guardian", "Lives with both parents; first child"],
    ["Childcare", "Cared for at home by mother (on maternity leave)"],
    ["Tobacco Exposure", "None — no smokers in household"],
    ["Pets", "One small dog (Chihuahua)"],
    ["Home Environment", "Apartment; infant sleeps in crib in parent bedroom"],
    ["Feeding", "Breastfeeding with occasional formula supplement (Similac Advance); was taking 4-5 oz every 2-3 hours until onset of vomiting"],
    ["Development", "Social smile, tracking objects, lifting head — age-appropriate at 2-month visit"],
    ["Safety", "Rear-facing infant car seat; safe sleep practiced; no co-sleeping"]
  ],
  "meta": {
    "caseId": "midgut-volvulus",
    "diagnosis": "Intestinal Malrotation with Midgut Volvulus — Acute Presentation with Metabolic Acidosis",
    "acuity": 1,
    "presentation": "Pediatric Emergency",
    "category": "surgical"
  }
};
