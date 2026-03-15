/* emr-data/croup-epiglottitis-ddx.js
   Croup vs Epiglottitis — Pediatric Airway Emergency
   Category: pediatric | Acuity: ESI-2
   Settings: ED
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Mateo Reyes",
      "patientHPI": "My son is 3 years old and has had a barky cough for the past 8 hours and now his breathing sounds really squeaky and he's working hard to breathe. He had a runny nose for two days before this started.",
      "dob": "11/18/2022", "age": "3", "sex": "Male", "pronouns": "he/him",
      "mrn": "MRN-118822", "language": "English/Spanish", "race": "Hispanic/Latino",
      "phone": "(602) 555-8822", "email": "",
      "address": "3312 N. 16th St, Phoenix, AZ 85016",
      "insurance": "AHCCCS (Arizona Medicaid)", "pcp": "Dr. Rosa Morales, MD",
      "pharmacy": "Walgreens — 16th St",
      "emergencyContact": { "name": "Luis Reyes", "phone": "(602) 555-4411", "relationship": "Father" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [
      { "name": "Hib (Haemophilus influenzae type b)", "date": "Up to date per records", "lot": "", "site": "" },
      { "name": "DTaP", "date": "Up to date", "lot": "", "site": "" },
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }
    ],
    "familyHistory": ["No family history of airway disorders"],
    "socialHistory": [
      ["Daycare", "Attends daycare — other children with URI symptoms this week"],
      ["Immunizations", "Fully vaccinated for age — Hib vaccines up to date (critical — epiglottitis from H. influenzae type b virtually eliminated by vaccination in vaccinated children)"],
      ["Prior croup", "One prior episode of croup at age 2 — resolved with dexamethasone + cool mist"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "3yo with 8h barky cough + inspiratory stridor + increased work of breathing — viral croup vs epiglottitis — Westley Croup Score 5 (moderate) — nebulized epinephrine + dexamethasone",
        "diagnosis": "Moderate Croup (Viral Laryngotracheobronchitis) — Westley Score 5"
      },
      "problems": [
        { "id": "prob-1", "description": "Moderate croup (laryngotracheobronchitis) — Westley Croup Score 5. Barky 'seal-like' cough, inspiratory stridor at rest, mild retractions, normal O2 sat. Clinical diagnosis — no imaging needed in uncomplicated croup.", "status": "Active", "onset": "Acute", "icd10": "J05.0" },
        { "id": "prob-2", "description": "EPIGLOTTITIS EXCLUDED clinically — classic differentiating features: Croup: barky cough, URI prodrome, gradual onset, 6mo-3yr. Epiglottitis: NO cough, HIGH fever, toxic-appearing, drooling, tripod position, sudden onset, older child/adult. This child: barky cough + URI prodrome + 3yo + up-to-date Hib = CROUP.", "status": "Resolved", "onset": "Acute", "icd10": "J05.10" },
        { "id": "prob-3", "description": "Hib vaccination status — FULLY VACCINATED. H. influenzae type b epiglottitis virtually eliminated in vaccinated children. Most epiglottitis now in adults or unvaccinated.", "status": "Active", "onset": "Acute", "icd10": "Z23" }
      ],
      "medications": [
        { "id": "med-1", "name": "Dexamethasone", "dose": "0.6 mg/kg PO (7.2mg for 12kg)", "route": "PO", "frequency": "SINGLE DOSE — oral dexamethasone equally effective as IM for croup. Reduces airway edema. Effect at 6h, peaks 12-24h. SINGLE DOSE treats croup (most cases).", "status": "Active — give now", "prescriber": "Dr. Pediatric Attending" },
        { "id": "med-2", "name": "Racemic Epinephrine 2.25%", "dose": "0.5 mL in 2.5 mL NS nebulized", "route": "Nebulized", "frequency": "NOW — for moderate-severe croup with stridor at rest. Short-acting (effect 2-3h) — must observe 3-4h after last dose for rebound. L-epinephrine (regular epi) 5mg equally effective.", "status": "Active — give now", "prescriber": "Dr. Pediatric Attending" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "02:00", "bp": "98/62", "hr": "128", "rr": "36", "temp": "38.2°C", "spo2": "97%", "pain": "Unable to assess verbally" }],
      "visits": [{
        "id": "visit-1", "type": "Pediatric Emergency Visit", "date": "03/15/2026", "provider": "Dr. Pediatric Attending",
        "cc": "Barky cough + stridor — croup vs epiglottitis",
        "hpi": "3yo male with 2-day URI now with 8-hour barky cough and stridor at rest. Vitals: HR 128, RR 36, SpO2 97%, low-grade fever 38.2°C. Alert, frightened but consolable. Barky cough audible across room. Inspiratory stridor at rest. Mild subcostal retractions. No drooling. No difficulty swallowing. No tripod positioning. Not toxic-appearing.\n\nWESTLEY CROUP SCORE:\n- Stridor: 2 (at rest)\n- Retractions: 2 (mild subcostal)\n- Air entry: 1 (mildly decreased)\n- Cyanosis: 0\n- Level of consciousness: 0\n- TOTAL: 5 — MODERATE (4-6 = moderate)\n\nCROUP vs EPIGLOTTITIS — KEY DIFFERENTIATORS:\nFeature         | CROUP              | EPIGLOTTITIS\nAge             | 6mo-3yr           | Any (adults now most)\nOnset           | Gradual (days)    | Rapid (hours)\nCough           | Barky, seal-like  | ABSENT or minimal\nFever           | Low-grade         | HIGH (39-40°C)\nDrooling        | Absent            | PRESENT\nSitting position| Normal            | Tripod (leaning forward)\nAppearance      | Anxious, not toxic| TOXIC, frightened\nStridor         | Inspiratory       | Inspiratory, muffled voice\nHib vaccine     | Not relevant      | Vaccinated = very rare\nDo NOT: agitate or examine throat in suspected epiglottitis — can precipitate complete obstruction\n\nCROUP TREATMENT:\n- Mild (score <4): dexamethasone 0.15-0.6 mg/kg PO — observe 2-4h\n- Moderate (score 4-6): dexamethasone 0.6 mg/kg + nebulized epinephrine — observe 4h after epi\n- Severe (score >6): same as moderate + consider ICU admission\n- Dexamethasone: single dose — no need for repeat. Oral = IM efficacy.\n- Heliox: if not responding to epinephrine\n- Avoid: humidified air (no evidence), sedation (suppresses drive), high-flow O2 (can mask worsening)",
        "assessment": "Moderate viral croup. Dexamethasone 0.6 mg/kg PO + nebulized epinephrine. Observe 4h. Discharge if improved and no rebound stridor.",
        "plan": "Dexamethasone 0.6 mg/kg PO (7.2mg) NOW. Racemic epinephrine nebulizer NOW. Observation x4h after epinephrine. Parent teaching: rebound stridor can occur — return if child worse. No humidifier needed. Discharge criteria: stridor resolved at rest, SpO2 >95%, alert, tolerating fluids. Return instructions: stridor at rest, retractions, SpO2 drop, drooling or inability to swallow."
      }],
      "labs": [],
      "imaging": [
        { "id": "img-1", "type": "AP Neck X-Ray (obtained on arrival before diagnosis confirmed)",
          "date": "03/15/2026", "time": "02:15", "orderedBy": "Dr. Pediatric Attending",
          "findings": "Steeple sign — subglottic narrowing with loss of normal shouldered tracheal air column. Epiglottis appears normal in size. No thumbprint sign.",
          "impression": "Steeple sign — consistent with subglottic edema of viral croup. Normal epiglottis argues against epiglottitis. NOTE: X-ray NOT routinely needed for uncomplicated croup — clinical diagnosis sufficient. Obtained here due to diagnostic uncertainty on initial presentation.", "critical": false }
      ]
    },
    "inpatient": {
      "patient": { "chiefComplaint": "Not applicable — discharged from ED", "diagnosis": "Discharged" },
      "problems": [], "medications": [], "vitals": [], "visits": [], "labs": [], "imaging": []
    }
  },
  "references": [
    { "id": "StatPearls-Croup", "title": "Croup", "authors": "Smith DK, McDermott AJ, Sullivan JF", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK431069/", "openAccess": true, "validates": ["Westley Croup Score", "Dexamethasone dosing", "Epinephrine indications", "Croup vs epiglottitis differentiation", "No humidifier evidence"] },
    { "id": "StatPearls-Epiglottitis", "title": "Epiglottitis", "authors": "Guardiani E, Bliss M, Harley E", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK430942/", "openAccess": true, "validates": ["Epiglottitis clinical features", "Hib vaccination impact", "Do not agitate — airway safety", "Thumbprint sign vs steeple sign"] }
  ]
};
