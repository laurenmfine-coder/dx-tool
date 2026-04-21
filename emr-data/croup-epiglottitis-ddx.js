
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Mateo Reyes",
      "patientHPI": "My son is 3 years old and has had a barky cough for the past 8 hours and now his breathing sounds really squeaky and he's working hard to breathe. He had a runny nose for two days before this started.",
      "dob": "11/18/2022",
      "age": "3",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-118822",
      "language": "English/Spanish",
      "race": "Hispanic/Latino",
      "phone": "(602) 555-8822",
      "email": "",
      "address": "3312 N. 16th St, Phoenix, AZ 85016",
      "insurance": "AHCCCS (Arizona Medicaid)",
      "pcp": "Dr. Rosa Morales, MD",
      "pharmacy": "Walgreens \u2014 16th St",
      "emergencyContact": {
        "name": "Luis Reyes",
        "phone": "(602) 555-4411",
        "relationship": "Father"
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
        "name": "Hib (Haemophilus influenzae type b)",
        "date": "Up to date per records",
        "lot": "",
        "site": ""
      },
      {
        "name": "DTaP",
        "date": "Up to date",
        "lot": "",
        "site": ""
      },
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "No family history of airway disorders"
    ],
    "socialHistory": [
      [
        "Daycare",
        "Attends daycare \u2014 other children with URI symptoms this week"
      ],
      [
        "Immunizations",
        "Fully vaccinated for age \u2014 Hib vaccines up to date (critical \u2014 epiglottitis from H. influenzae type b virtually eliminated by vaccination in vaccinated children)"
      ],
      [
        "Prior croup",
        "One prior episode of croup at age 2 \u2014 resolved with dexamethasone + cool mist"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "3yo with 8h barky cough + inspiratory stridor + increased work of breathing \u2014 viral croup vs epiglottitis \u2014 Westley Croup Score 5 (moderate) \u2014 nebulized epinephrine + dexamethasone",
        "diagnosis": "Moderate Croup (Viral Laryngotracheobronchitis) \u2014 Westley Score 5"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Moderate croup (laryngotracheobronchitis) \u2014 Westley Croup Score 5. Barky 'seal-like' cough, inspiratory stridor at rest, mild retractions, normal O2 sat. Clinical diagnosis \u2014 no imaging needed in uncomplicated croup.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "J05.0"
        },
        {
          "id": "prob-2",
          "description": "EPIGLOTTITIS EXCLUDED clinically \u2014 classic differentiating features: Croup: barky cough, URI prodrome, gradual onset, 6mo-3yr. Epiglottitis: NO cough, HIGH fever, toxic-appearing, drooling, tripod position, sudden onset, older child/adult. This child: barky cough + URI prodrome + 3yo + up-to-date Hib = CROUP.",
          "status": "Resolved",
          "onset": "Acute",
          "icd10": "J05.10"
        },
        {
          "id": "prob-3",
          "description": "Hib vaccination status \u2014 FULLY VACCINATED. H. influenzae type b epiglottitis virtually eliminated in vaccinated children. Most epiglottitis now in adults or unvaccinated.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "Z23"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Dexamethasone",
          "dose": "0.6 mg/kg PO (7.2mg for 12kg)",
          "route": "PO",
          "frequency": "SINGLE DOSE \u2014 oral dexamethasone equally effective as IM for croup. Reduces airway edema. Effect at 6h, peaks 12-24h. SINGLE DOSE treats croup (most cases).",
          "status": "Active \u2014 give now",
          "prescriber": "Dr. Pediatric Attending"
        },
        {
          "id": "med-2",
          "name": "Racemic Epinephrine 2.25%",
          "dose": "0.5 mL in 2.5 mL NS nebulized",
          "route": "Nebulized",
          "frequency": "NOW \u2014 for moderate-severe croup with stridor at rest. Short-acting (effect 2-3h) \u2014 must observe 3-4h after last dose for rebound. L-epinephrine (regular epi) 5mg equally effective.",
          "status": "Active \u2014 give now",
          "prescriber": "Dr. Pediatric Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "02:00",
          "bp": "98/62",
          "hr": "128",
          "rr": "36",
          "temp": "38.2\u00b0C",
          "spo2": "97%",
          "pain": "Unable to assess verbally"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Pediatric Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Pediatric Attending",
          "cc": "Barky cough + stridor \u2014 croup vs epiglottitis",
          "hpi": "3yo male with 2-day URI now with 8-hour barky cough and stridor at rest. Vitals: HR 128, RR 36, SpO2 97%, low-grade fever 38.2\u00b0C. Alert, frightened but consolable. Barky cough audible across room. Inspiratory stridor at rest. Mild subcostal retractions. No drooling. No difficulty swallowing. No tripod positioning. Not toxic-appearing.\n\nWESTLEY CROUP SCORE:\n- Stridor: 2 (at rest)\n- Retractions: 2 (mild subcostal)\n- Air entry: 1 (mildly decreased)\n- Cyanosis: 0\n- Level of consciousness: 0\n- TOTAL: 5 \u2014 MODERATE (4-6 = moderate)\n\nCROUP vs EPIGLOTTITIS \u2014 KEY DIFFERENTIATORS:\nFeature         | CROUP              | EPIGLOTTITIS\nAge             | 6mo-3yr           | Any (adults now most)\nOnset           | Gradual (days)    | Rapid (hours)\nCough           | Barky, seal-like  | ABSENT or minimal\nFever           | Low-grade         | HIGH (39-40\u00b0C)\nDrooling        | Absent            | PRESENT\nSitting position| Normal            | Tripod (leaning forward)\nAppearance      | Anxious, not toxic| TOXIC, frightened\nStridor         | Inspiratory       | Inspiratory, muffled voice\nHib vaccine     | Not relevant      | Vaccinated = very rare\nDo NOT: agitate or examine throat in suspected epiglottitis \u2014 can precipitate complete obstruction\n\nCROUP TREATMENT:\n- Mild (score <4): dexamethasone 0.15-0.6 mg/kg PO \u2014 observe 2-4h\n- Moderate (score 4-6): dexamethasone 0.6 mg/kg + nebulized epinephrine \u2014 observe 4h after epi\n- Severe (score >6): same as moderate + consider ICU admission\n- Dexamethasone: single dose \u2014 no need for repeat. Oral = IM efficacy.\n- Heliox: if not responding to epinephrine\n- Avoid: humidified air (no evidence), sedation (suppresses drive), high-flow O2 (can mask worsening)",
          "assessment": "Moderate viral croup. Dexamethasone 0.6 mg/kg PO + nebulized epinephrine. Observe 4h. Discharge if improved and no rebound stridor.",
          "plan": "Dexamethasone 0.6 mg/kg PO (7.2mg) NOW. Racemic epinephrine nebulizer NOW. Observation x4h after epinephrine. Parent teaching: rebound stridor can occur \u2014 return if child worse. No humidifier needed. Discharge criteria: stridor resolved at rest, SpO2 >95%, alert, tolerating fluids. Return instructions: stridor at rest, retractions, SpO2 drop, drooling or inability to swallow."
        }
      ],
      "labs": [],
      "imaging": [
        {
          "id": "img-1",
          "type": "AP Neck X-Ray (obtained on arrival before diagnosis confirmed)",
          "date": "03/15/2026",
          "time": "02:15",
          "orderedBy": "Dr. Pediatric Attending",
          "findings": "Steeple sign \u2014 subglottic narrowing with loss of normal shouldered tracheal air column. Epiglottis appears normal in size. No thumbprint sign.",
          "impression": "Steeple sign \u2014 consistent with subglottic edema of viral croup. Normal epiglottis argues against epiglottitis. NOTE: X-ray NOT routinely needed for uncomplicated croup \u2014 clinical diagnosis sufficient. Obtained here due to diagnostic uncertainty on initial presentation.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Not applicable \u2014 discharged from ED",
        "diagnosis": "Discharged"
      },
      "problems": [],
      "medications": [],
      "vitals": [],
      "visits": [],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "StatPearls-Croup",
      "title": "Croup",
      "authors": "Smith DK, McDermott AJ, Sullivan JF",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK431069/",
      "openAccess": true,
      "validates": [
        "Westley Croup Score",
        "Dexamethasone dosing",
        "Epinephrine indications",
        "Croup vs epiglottitis differentiation",
        "No humidifier evidence"
      ]
    },
    {
      "id": "StatPearls-Epiglottitis",
      "title": "Epiglottitis",
      "authors": "Guardiani E, Bliss M, Harley E",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430942/",
      "openAccess": true,
      "validates": [
        "Epiglottitis clinical features",
        "Hib vaccination impact",
        "Do not agitate \u2014 airway safety",
        "Thumbprint sign vs steeple sign"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Croup vs Epiglottitis \u2014 Differential Diagnosis of Pediatric Upper Airway Obstruction",
    "caseId": "croup-epiglottitis-ddx"
  },
  "problems": [
    {
      "problem": "Pediatric upper airway obstruction \u2014 differentiating croup vs epiglottitis",
      "icd": "J05.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Liam Torres, 3M \u2014 2-day gradual onset barky cough, seal-like stridor, mild fever 38.1\u00b0C. Not drooling, not toxic-appearing, sits comfortably in mother's lap. Presentation favors viral croup."
    },
    {
      "problem": "Stridor at rest \u2014 moderate severity, requires treatment",
      "icd": "J05.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Stridor at rest = at least moderate croup. Westley croup score 5 = moderate severity. Dexamethasone + racemic epinephrine indicated."
    },
    {
      "problem": "Airway assessment \u2014 rule out epiglottitis features",
      "icd": "J05.0",
      "onset": "2024",
      "status": "Active",
      "notes": "No drooling, not tripod posturing, not muffled voice, not toxic. All these features favor croup over epiglottitis. Epiglottitis now rare due to Hib vaccine."
    }
  ],
  "medications": [
    {
      "name": "Dexamethasone 0.6mg/kg PO/IM single dose",
      "sig": "Single dose dexamethasone reduces croup symptoms within 2-6 hours, reduces return ED visits, reduces hospitalization. Oral equivalent to IM. Most important intervention for croup.",
      "prescriber": "Pediatric Emergency",
      "start": "2024",
      "refills": 0,
      "status": "Administered"
    },
    {
      "name": "Racemic epinephrine 0.5mL of 2.25% nebulized \u2014 if stridor at rest",
      "sig": "Rapid symptomatic relief within 10-30 minutes. Effect temporary (2-3 hours) \u2014 observe for rebound. Does not change disease course but buys time. Can repeat q15-20 min x 3.",
      "prescriber": "Pediatric Emergency",
      "start": "2024",
      "refills": 0,
      "status": "Administered \u2014 observe 2-4h"
    },
    {
      "name": "Humidified air \u2014 no proven benefit but not harmful",
      "sig": "Cool mist historically used but meta-analyses show no benefit. No longer routinely recommended. Dexamethasone is the evidence-based treatment.",
      "prescriber": "Pediatric Emergency",
      "start": "2024",
      "refills": 0,
      "status": "Not recommended"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Croup Assessment",
      "results": [
        {
          "test": "SpO2",
          "value": "96",
          "unit": "%",
          "ref": "\u226595%",
          "flag": ""
        },
        {
          "test": "Temperature",
          "value": "38.1",
          "unit": "\u00b0C",
          "ref": "<38",
          "flag": "H"
        },
        {
          "test": "Westley Croup Score",
          "value": "5 \u2014 moderate (stridor at rest 2, mild retractions 1, normal air entry 0, no cyanosis 0, normal consciousness 0)",
          "unit": "",
          "ref": "<3 mild; 3-5 moderate; >5 severe",
          "flag": "H"
        },
        {
          "test": "Response to racemic epinephrine",
          "value": "Improved \u2014 stridor decreased, RR normalized",
          "unit": "",
          "ref": "Croup responds; epiglottitis does NOT",
          "flag": ""
        },
        {
          "test": "Lateral neck X-ray",
          "value": "Steeple sign \u2014 smooth subglottic narrowing",
          "unit": "",
          "ref": "Steeple sign = croup",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "AP and Lateral Neck X-Ray",
      "findings": "AP view: smooth subglottic narrowing \u2014 classic steeple sign. Lateral view: normal epiglottis. Normal hypopharynx. No thumb sign. No retropharyngeal soft tissue widening.",
      "impression": "Steeple sign consistent with croup (subglottic edema). Normal epiglottis. Epiglottitis excluded."
    }
  ],
  "guided": {
    "ddxTargets": [
      "Viral croup \u2014 moderate severity (correct)",
      "Epiglottitis \u2014 drooling, tripod, muffled voice, toxic, thumb sign on lateral neck X-ray; now rare post-Hib vaccine",
      "Bacterial tracheitis \u2014 does not respond to epinephrine; high fever; toxic; irregular tracheal wall",
      "Foreign body aspiration \u2014 sudden onset in well child; unilateral wheeze; no fever; bronchoscopy",
      "Subglottic stenosis \u2014 history of intubation; recurrent croup presentations; CT airway"
    ],
    "coachPrompts": {
      "final": "Diagnosis: moderate viral croup. Key learning: (1) Croup vs epiglottitis clinical distinction: croup = gradual onset, barky cough, seal-like stridor, low fever, not drooling, not toxic, comfortable; responds to epinephrine. Epiglottitis = rapid onset, toxic, drooling, tripod position, muffled/hot potato voice, dysphagia; does NOT respond to epinephrine. (2) Hib vaccine impact: Haemophilus influenzae type b was the classic cause of epiglottitis. Post-Hib vaccine era: epiglottitis is now rare (occurs in unvaccinated or from other organisms: Group A strep, S. aureus, S. pneumoniae). (3) Westley croup score: 0-2 mild (discharge with dexamethasone), 3-5 moderate (dexamethasone + epinephrine, observe 2-4h), >5 severe (ICU). (4) Dexamethasone in croup: single dose 0.6mg/kg (max 10mg) reduces severity, return visits, and hospitalization. Oral and IM equally effective. Works within 2-6 hours \u2014 the most important intervention. (5) Observe after racemic epinephrine: effects wear off in 2-3 hours \u2014 rebound stridor is possible. All patients given epinephrine require 2-4 hours of observation. If stable after 2-4h and given dexamethasone, can discharge."
    }
  }
};
