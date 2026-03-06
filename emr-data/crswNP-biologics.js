/* emr-data/crswNP-dupilumab.js
   Chronic Rhinosinusitis with Nasal Polyps (CRSwNP) + AERD + United Airway Disease
   Patient: Yolanda Baptiste, 44F, Haitian-American nurse
   Story: CRSwNP → FESS → polyp recurrence → dupilumab + aspirin desensitization
   Encounters: ENT office (initial) → FESS/hospital → A/I office (biologic + ASD)
   ABAI Domains 7 (asthma), 9 (rhinitis/sinusitis), 10 (united airway)
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Yolanda Baptiste",
  "patientHPI": "I can't breathe through my nose at all anymore, and the worst part is I completely lost my sense of smell - I can't even smell my own children, which breaks my heart. My face feels like there's constant pressure, like someone's squeezing it, and it's been going on for so long now that I'm desperate for help.",
      "dob": "03/08/1980",
      "age": "44",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "RDX-2025-95448",
      "language": "English / Haitian Creole",
      "race": "Black or African American",
      "phone": "(614) 555-1282",
      "email": "ybaptiste@email.com",
      "address": "3730 Dogwood Ln, Richmond, VA 23230",
      "insurance": "United Healthcare PPO",
      "pcp": "Dr. Marie Celestin, MD",
      "pharmacy": "Walgreens — NW 7th Ave",
      "emergencyContact": { "name": "Jean-Pierre Baptiste", "phone": "(313) 555-5820", "relationship": "Husband" },
      "chiefComplaint": "Complete nasal obstruction, anosmia, chronic facial pressure — 'I cannot smell my children anymore'",
      "diagnosis": "Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease"
    },
    "allergies": [
      { "allergen": "Aspirin", "reaction": "Facial flushing, nasal congestion, bronchospasm within 45 min of 325mg aspirin", "severity": "Severe", "type": "NSAID-ERD (COX-1)" },
      { "allergen": "Ibuprofen", "reaction": "Same reaction as aspirin — congestion and wheeze", "severity": "Severe", "type": "NSAID-ERD (COX-1)" },
      { "allergen": "Naproxen", "reaction": "Nasal blockade and chest tightness", "severity": "Moderate-Severe", "type": "NSAID-ERD (COX-1)" }
    ],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "site": "Left deltoid" },
      { "name": "COVID-19", "date": "09/2025", "site": "Right deltoid" },
      { "name": "Pneumococcal PCV20", "date": "01/2024", "site": "Right deltoid" }
    ],
    "familyHistory": [
      "Mother: asthma — controlled on ICS",
      "Brother: allergic rhinitis, sensitized to dust mite",
      "No family history of nasal polyps or AERD"
    ],
    "socialHistory": [
      ["Tobacco", "Never"],
      ["Alcohol", "Rare — 1–2 drinks/month"],
      ["Occupation", "Registered Nurse — 18 years. Works ICU. Exposure to cleaning agents (quaternary ammonium compounds). Not identified as OA trigger."],
      ["Housing", "Single-family home. No pets. Central AC. Lives with husband and 3 children."],
      ["Anosmia", "Complete loss of smell × 3 years. Partial taste loss. Cannot detect smoke detector alarm — smoke safety concern flagged."],
      ["NSAID history", "First aspirin reaction age 36 — ibuprofen for headache → immediate nasal blockade + wheeze. Has avoided all NSAIDs since. Uses acetaminophen exclusively."],
      ["Prior procedures", "FESS (bilateral, 2022) — initial improvement in nasal breathing for 4 months, then complete polyp recurrence by month 8."]
    ]
  },

  "encounters": {
    "ed": {
      "cc": "Initial ENT office evaluation — 6-month history of progressive nasal obstruction, anosmia, facial pressure. Referred by PCP after failed 8-week nasal steroid course. Notable: prior reaction to ibuprofen (nasal congestion + wheeze). Current asthma on medium-dose ICS.",
      "dx": "Bilateral CRSwNP — severe. AERD confirmed by history (Samter's Triad: asthma + nasal polyps + NSAID hypersensitivity). Bilateral nasal endoscopy: grade 3 polyps bilaterally, extending into nasal cavity. CT sinus ordered.",
      "problems": [
        { "id": "prob-1", "description": "Chronic rhinosinusitis with nasal polyps (CRSwNP) — bilateral, grade 3", "status": "Active", "onset": "Chronic" },
        { "id": "prob-2", "description": "AERD (Aspirin-Exacerbated Respiratory Disease) / Samter's Triad — asthma + nasal polyps + NSAID-ERD", "status": "Active", "onset": "Chronic" },
        { "id": "prob-3", "description": "Asthma — moderate persistent, on fluticasone 220 mcg BID + albuterol PRN", "status": "Active", "onset": "Chronic" },
        { "id": "prob-4", "description": "Anosmia — complete × 3 years. Significant QOL impact.", "status": "Active", "onset": "Chronic" },
        { "id": "prob-5", "description": "Aspirin/NSAID hypersensitivity — all COX-1 inhibitors contraindicated", "status": "Active", "onset": "Chronic" }
      ],
      "medications": [
        { "id": "med-1", "name": "Fluticasone propionate 220 mcg", "dose": "2 puffs BID", "route": "Inhaled", "indication": "Asthma controller" },
        { "id": "med-2", "name": "Fluticasone nasal spray 50 mcg", "dose": "2 sprays each nostril daily", "route": "Intranasal", "indication": "CRSwNP — inadequate response to date" },
        { "id": "med-3", "name": "Cetirizine 10 mg", "dose": "Daily", "route": "Oral", "indication": "Rhinitis" },
        { "id": "med-4", "name": "Albuterol MDI 90 mcg", "dose": "2 puffs PRN", "route": "Inhaled", "indication": "Rescue bronchodilator" },
        { "id": "med-5", "name": "Acetaminophen 500 mg", "dose": "PRN", "route": "Oral", "indication": "Safe analgesic for AERD" }
      ],
      "vitals": {
        "rows": [
          { "time": "ENT office", "bp": "122/78", "hr": "72", "rr": "14", "temp": "36.8", "spo2": "98% RA" }
        ]
      },
      "labs": {
        "ct_sinus": {
          "title": "CT Sinuses Without Contrast",
          "time": "ENT initial visit",
          "rows": [
            { "test": "Lund-Mackay Score", "value": "21 / 24", "flag": "H", "ref": "0 = no disease; 24 = maximum opacification", "note": "Severe CRSwNP. Score >12 is threshold for surgical candidacy." },
            { "test": "Bilateral ethmoid sinuses", "value": "Near-complete opacification", "note": "Ethmoid disease is hallmark of CRSwNP and AERD — eosinophilic inflammation preferentially affects anterior ethmoids" },
            { "test": "Bilateral maxillary sinuses", "value": "80% opacified, bilateral mucosal thickening", "flag": "H" },
            { "test": "Bilateral nasal cavities", "value": "Bilateral soft tissue masses (polyps) filling nasal cavities bilaterally — grade 3", "flag": "H" },
            { "test": "Frontal sinuses", "value": "Partial opacification bilaterally" },
            { "test": "Sphenoid sinuses", "value": "Mild mucosal thickening" },
            { "test": "Bony structures", "value": "No erosion. Lamina papyracea intact. Skull base intact.", "note": "Important to confirm no erosion before surgical planning" }
          ],
          "note": "Impression: Severe bilateral CRSwNP. Lund-Mackay 21/24. FESS indicated — bilateral total ethmoidectomy, maxillary antrostomy, polypectomy."
        },
        "nasal_endoscopy": {
          "title": "Flexible Nasal Endoscopy",
          "rows": [
            { "test": "Nasal polyp grade (Lund-Kennedy)", "value": "Grade 3 bilaterally", "flag": "H", "note": "Grade 3 = polyps completely obstructing nasal cavity. Scale 0–3 per side." },
            { "test": "Middle meatus", "value": "Completely occluded by polypoid tissue bilaterally" },
            { "test": "Inferior turbinate", "value": "Hypertrophic bilaterally, mucosal edema" },
            { "test": "Mucus quality", "value": "Thick, tenacious mucus bilaterally — characteristic of eosinophilic CRS" },
            { "test": "Septal deviation", "value": "Mild left-sided deviation — not clinically significant" }
          ]
        },
        "labs_ent": {
          "title": "Blood Work — ENT Initial Evaluation",
          "rows": [
            { "test": "Blood eosinophils", "value": "680", "unit": "cells/µL", "flag": "H", "ref": "<500", "note": "Elevated — consistent with Type 2/eosinophilic CRSwNP. Predicts poor surgical outcome without biologic treatment." },
            { "test": "Total IgE", "value": "284", "unit": "IU/mL", "flag": "H", "ref": "<100" },
            { "test": "Urinary LTE₄", "value": "1,840", "unit": "pg/mg creatinine", "flag": "H", "ref": "<100 pg/mg (normal); >1,000 = AERD-range", "note": "Markedly elevated. LTE₄ is the urinary metabolite of leukotriene C₄ — the master mediator of AERD. LTE₄ >1,000 pg/mg in symptomatic AERD patients is well-documented. Confirms leukotriene overproduction." },
            { "test": "FeNO", "value": "44", "unit": "ppb", "flag": "H", "ref": "<25 ppb normal", "note": "Elevated FeNO — Type 2 airway inflammation present in lower airway also. United airway confirmed." }
          ]
        }
      },
      "assessment": "44F nurse with severe bilateral CRSwNP (Lund-Mackay 21/24, grade 3 polyps), confirmed AERD (Samter's Triad), and comorbid asthma — classic united airway disease. Urinary LTE₄ markedly elevated, confirming active leukotriene-driven AERD. Eosinophil count 680 cells/µL — Type 2 endotype. Patient is a surgical candidate given CT severity and failed medical management (intranasal steroid × 8 weeks + oral antihistamine). FESS planned as initial treatment to reduce polyp burden and improve nasal steroid penetration. Critical preoperative discussion: aspirin/NSAID avoidance perioperatively (high AERD bronchospasm risk with surgical inflammation). Post-FESS aspirin desensitization (ASD) planned to reduce polyp recurrence rate. A/I co-management for biologic evaluation given prior FESS failure risk in AERD.",
      "plan": "1. FESS: bilateral total ethmoidectomy + maxillary antrostomy + polypectomy. Schedule within 6–8 weeks.\n2. Preoperative: prednisolone 0.5 mg/kg/day × 5 days starting 3 days before FESS (reduce mucosal edema, minimize bleeding)\n3. NSAID avoidance strict perioperatively — use acetaminophen for pain. NO ketorolac, NO ibuprofen in recovery.\n4. Refer A/I: biologic evaluation (dupilumab given AERD + eosinophilia + prior FESS) + aspirin desensitization planning post-FESS\n5. Continue fluticasone ICS for asthma\n6. Safety counseling: anosmia + smoke detection — recommend interconnected smoke alarms (vibration/strobe)"
    },

    "office": {
      "cc": "Surgical hospitalization — bilateral FESS with immediate postoperative complication: bronchospasm during recovery room (AERD-triggered — nurse inadvertently administered ketorolac for pain). Managed with nebulized albuterol + IV methylprednisolone. Stabilized.",
      "dx": "Bilateral FESS completed. Immediate postoperative AERD exacerbation due to inadvertent ketorolac (IV NSAID) administration — resolved with bronchodilator + corticosteroid. Reinforces aspirin desensitization necessity.",
      "problems": [
        { "id": "prob-1", "description": "Postoperative AERD bronchospasm — ketorolac administered despite documented NSAID allergy. Near-miss medication error.", "status": "Resolved", "onset": "Acute" },
        { "id": "prob-2", "description": "FESS — bilateral polypectomy + ethmoidectomy + antrostomy completed successfully", "status": "Resolving" },
        { "id": "prob-3", "description": "CRSwNP — significant polyp burden removed. Pathology ordered.", "status": "Active" }
      ],
      "medications": [
        { "id": "med-1", "name": "Methylprednisolone 125 mg IV", "dose": "Single dose — AERD exacerbation", "route": "IV", "indication": "Acute AERD bronchospasm from ketorolac" },
        { "id": "med-2", "name": "Albuterol 2.5 mg", "dose": "Continuous nebulization × 30 min", "route": "Nebulized", "indication": "Acute bronchospasm reversal" },
        { "id": "med-3", "name": "Prednisolone 40 mg", "dose": "Daily × 7 days", "route": "Oral", "indication": "Postoperative anti-inflammatory + AERD exacerbation recovery" },
        { "id": "med-4", "name": "Saline nasal irrigation", "dose": "BID (beginning POD 2)", "route": "Intranasal", "indication": "Post-FESS wound care" },
        { "id": "med-5", "name": "Acetaminophen 500 mg", "dose": "q6h PRN pain", "route": "Oral", "indication": "NSAID-safe analgesia — documented in chart after error" }
      ],
      "vitals": {
        "rows": [
          { "time": "PACU (post-ketorolac)", "bp": "156/94", "hr": "118", "rr": "28", "spo2": "89% RA", "note": "Acute bronchospasm" },
          { "time": "30 min post-treatment", "bp": "138/86", "hr": "96", "rr": "18", "spo2": "96% 2L NC" },
          { "time": "POD 1 morning", "bp": "124/78", "hr": "76", "rr": "14", "spo2": "98% RA" }
        ]
      },
      "labs": {
        "pathology": {
          "title": "Surgical Pathology — Bilateral Nasal Polyp Tissue",
          "time": "3 days post-FESS",
          "rows": [
            { "test": "Gross description", "value": "Multiple glistening polypoidal fragments, bilateral, total 8.4g" },
            { "test": "Eosinophil density (tissue)", "value": ">100 eosinophils / high-power field (HPF)", "flag": "H", "note": "ECES (eosinophilic CRS) confirmed. Threshold for eosinophilic CRS = >10 eos/HPF. >100 = marked eosinophilia — highest-risk category for recurrence without biologic." },
            { "test": "Edematous stroma", "value": "Present — extensive stromal edema with Charcot-Leyden crystals", "note": "Charcot-Leyden crystals = breakdown products of eosinophil granules. Pathognomonic of intense eosinophilic inflammation." },
            { "test": "Fungal elements", "value": "ABSENT — no fungal hyphae on GMS stain", "note": "ABPA/fungal sinusitis excluded" },
            { "test": "Dysplasia/malignancy", "value": "ABSENT" }
          ],
          "note": "Pathology confirms: eosinophilic CRSwNP (>100 eos/HPF), AERD endotype confirmed. High recurrence risk without biologic therapy. Dupilumab initiation strongly supported by pathology."
        }
      },
      "assessment": "Bilateral FESS completed with significant perioperative AERD event (ketorolac administration — documented as near-miss medication error; incident report filed). Pathology confirms severe eosinophilic CRSwNP (>100 eos/HPF, Charcot-Leyden crystals). Without biologic therapy, polyp recurrence rate in AERD with this degree of tissue eosinophilia is >80% within 2 years. Aspirin desensitization post-FESS reduces recurrence and allows long-term aspirin use as disease modifier. A/I consultation for both ASD and biologic initiation prior to discharge.",
      "plan": "1. Discharge home POD 2 — stable respiratory status\n2. Complete prednisolone taper × 7 days\n3. Continue nasal saline irrigation BID\n4. Restart fluticasone nasal spray after packing removal (POD 7)\n5. A/I outpatient appointment within 3 weeks for aspirin desensitization evaluation + biologic initiation\n6. INCIDENT REPORT: Ketorolac administered despite NSAID allergy documented in EMR. Risk management notified. Recovery staff NSAID allergy re-education completed.\n7. Patient counseled: NSAID allergy wristband, Medic Alert bracelet ordered"
    },

    "inpatient": {
      "cc": "A/I outpatient visit — 3 weeks post-FESS. Planning: (1) aspirin desensitization protocol for AERD, (2) biologic initiation. Nasal breathing markedly improved post-FESS. Partial olfactory return (sensing strong odors). Asthma stable.",
      "dx": "CRSwNP + AERD — post-FESS, early recovery. Dupilumab initiated. Aspirin desensitization (ASD) performed successfully. Long-term aspirin therapy started.",
      "problems": [
        { "id": "prob-1", "description": "AERD — aspirin desensitization completed (see procedure note). Now on aspirin 325 mg daily.", "status": "Controlled" },
        { "id": "prob-2", "description": "CRSwNP — post-FESS improvement. Biologic initiated to prevent recurrence.", "status": "Active/Treating" },
        { "id": "prob-3", "description": "Asthma — well controlled on ICS. FEV₁ 84% predicted.", "status": "Controlled" },
        { "id": "prob-4", "description": "Partial olfactory return post-FESS — improvement noted.", "status": "Improving" }
      ],
      "medications": [
        { "id": "med-1", "name": "Dupilumab (Dupixent) 300 mg/2 mL", "dose": "300 mg SC loading (2×150) then 300 mg SC q4w (CRSwNP dosing)", "route": "Subcutaneous", "indication": "CRSwNP + asthma — anti-IL-4Rα. NOTE: CRSwNP dose = 300 mg q4w (different from asthma dose 200 mg q2w)." },
        { "id": "med-2", "name": "Aspirin 325 mg", "dose": "Daily (maintained post-desensitization)", "route": "Oral", "indication": "AERD disease-modifying therapy — reduces polyp recurrence, improves nasal patency, reduces leukotriene production when continued daily" },
        { "id": "med-3", "name": "Fluticasone nasal spray 50 mcg", "dose": "2 sprays each nostril daily", "route": "Intranasal", "indication": "CRSwNP maintenance" },
        { "id": "med-4", "name": "Budesonide nasal rinse 0.5 mg/2 mL", "dose": "1 vial per nostril via neti pot once daily", "route": "Intranasal", "indication": "Post-FESS high-volume nasal steroid delivery — superior to spray after FESS opens sinuses" },
        { "id": "med-5", "name": "Saline nasal irrigation", "dose": "BID", "route": "Intranasal" },
        { "id": "med-6", "name": "Fluticasone inhaled 220 mcg", "dose": "2 puffs BID", "route": "Inhaled", "indication": "Asthma controller" }
      ],
      "vitals": {
        "rows": [
          { "time": "A/I office (post-ASD)", "bp": "120/76", "hr": "68", "rr": "14", "spo2": "98% RA" }
        ]
      },
      "labs": {
        "aspirin_desensitization": {
          "title": "Aspirin Desensitization Protocol — Procedure Note",
          "time": "A/I office visit (supervised, 6-hour protocol)",
          "rows": [
            { "test": "Pre-procedure FEV₁", "value": "2.94 L (84% predicted)", "note": "Adequate baseline for ASD — FEV₁ ≥70% required before initiating" },
            { "test": "Pre-procedure SpO₂", "value": "98% RA" },
            { "test": "Premedication", "value": "Montelukast 10 mg PO (night before + morning of). NO antihistamine premedication — would mask nasal symptoms used to detect threshold.", "note": "Montelukast reduces leukotriene-mediated reaction during ASD without masking nasal symptoms." },
            { "test": "Dose 1 (60 mg aspirin)", "value": "Administered 08:30. No reaction. FEV₁ 2.91L at 90 min.", "note": "Starting dose 60 mg — below threshold for most AERD patients. Observe 90 min per dose." },
            { "test": "Dose 2 (100 mg aspirin)", "value": "Administered 10:15. Mild nasal congestion at 60 min — rhinorrhea, increased nasal resistance. NO bronchospasm. FEV₁ unchanged (2.89 L). Oxymetazoline 2 sprays per nostril → rapid resolution. Proceeded.", "note": "Nasal reaction at 100 mg = threshold dose confirmed. Managed nasally. No systemic reaction." },
            { "test": "Dose 3 (160 mg aspirin)", "value": "Administered 12:00. Mild nasal congestion again — treated with oxymetazoline. No systemic reaction. FEV₁ 2.86L.", "note": "Continued desensitization protocol despite nasal reaction — nasal-only reactions are expected and manageable." },
            { "test": "Dose 4 (325 mg aspirin)", "value": "Administered 13:30. Mild nasal congestion — treated. No bronchospasm. FEV₁ 2.88L (stable). DESENSITIZED to 325 mg.", "note": "Full therapeutic dose achieved." },
            { "test": "Post-procedure status", "value": "Desensitization complete. Patient discharged with aspirin 325 mg daily prescription and instructions for strict daily continuation.", "note": "CRITICAL: Aspirin must be taken EVERY DAY without interruption. Missing >48h causes re-sensitization and requires full repeat protocol." }
          ],
          "note": "Aspirin desensitization successful. Patient tolerated 325 mg with manageable nasal reactions only. Benefits of continued daily aspirin in AERD: 40% reduction in polyp recurrence, improved nasal patency, reduced corticosteroid requirements, and reduced need for repeat FESS."
        },
        "biologic_rationale": {
          "title": "Dupilumab Selection Rationale",
          "rows": [
            { "test": "Indication: CRSwNP", "value": "FDA-approved for CRSwNP — reduces polyp size, improves sense of smell, reduces need for OCS/surgery", "note": "SINUS-52 trial: 57% reduction in nasal polyp score vs placebo. Sense of smell improved in 50% of patients (placebo 20%)." },
            { "test": "Indication: Comorbid asthma", "value": "Dual-approved for both CRSwNP and asthma — addresses united airway disease with one biologic", "note": "Only biologic with approval in both CRSwNP + asthma + atopic dermatitis + EoE" },
            { "test": "AERD: mechanism benefit", "value": "IL-4 and IL-13 drive leukotriene overproduction in AERD. Dupilumab blocks IL-4Rα → reduces IL-4/IL-13 signaling → less arachidonic acid shunting → reduced LTC4/LTD4 production", "note": "Dupilumab reduces urinary LTE4 in AERD patients. Complementary to aspirin desensitization (different mechanism)." },
            { "test": "Blood eos threshold met", "value": "680 cells/µL (threshold ≥150 OR FeNO ≥25)", "note": "Both thresholds exceeded." },
            { "test": "Dose for CRSwNP", "value": "300 mg SC q4 weeks (vs 200 mg q2w for asthma-only indication)", "note": "CRSwNP dosing = 300 mg q4w. If patient had asthma alone, dose would be 200 mg q2w. Combined disease — q4w preferred for convenience, adequate for both." }
          ]
        },
        "spirometry_post_fess": {
          "title": "Spirometry — 3 Weeks Post-FESS",
          "rows": [
            { "test": "FEV₁", "value": "2.94 L (84% predicted)", "note": "Improved from pre-FESS baseline (76% predicted). Upper airway patency improvement → reduced mouth breathing → improved lower airway humidification." },
            { "test": "FEV₁/FVC", "value": "0.78" },
            { "test": "Post-BD FEV₁", "value": "3.02 L (86%)", "note": "Minimal BD response — asthma well controlled." }
          ]
        }
      },
      "assessment": "Excellent post-FESS trajectory with partial olfactory return. Aspirin desensitization completed successfully — patient desensitized to 325 mg with manageable nasal reactions, no bronchospasm. Dupilumab initiated for both CRSwNP and asthma (united airway disease, single biologic addressing both). Combination of FESS + dupilumab + aspirin desensitization + nasal steroids = evidence-based comprehensive management for severe AERD-associated CRSwNP.\n\nKey patient education: daily aspirin continuity is non-negotiable — missing >48h requires full repeat ASD. Medical alert bracelet ordered. Strict NSAID avoidance for ALL other agents (ibuprofen, naproxen, ketorolac, diclofenac, indomethacin). COX-2 inhibitors (celecoxib) generally tolerated in AERD — but with caution.",
      "plan": "1. Dupilumab 300 mg SC q4 weeks — self-injection training completed\n2. Aspirin 325 mg PO daily — MUST NOT miss doses. Travel supply counseled.\n3. Budesonide nasal rinse daily + fluticasone nasal spray daily\n4. Return 3 months: nasal endoscopy, olfactory testing (UPSIT), blood eos, FeNO, spirometry\n5. 6-month: assess biologic response — nasal polyp score target <4\n6. Aspirin alert on medical bracelet: 'Takes daily aspirin 325 mg for AERD desensitization — do NOT withhold unless A/I consulted'\n7. Instruct surgical/procedural teams: if perioperative NSAID needed, consult A/I re: aspirin bridge protocol"
    }
  },

  "teachingPoints": {
    "keyLearning": [
      "Samter's Triad (AERD) = asthma + nasal polyps + NSAID-ERD. COX-1 inhibition removes PGE2 brake on mast cell → LTC4/LTD4 surge → bronchospasm + nasal congestion.",
      "Urinary LTE4 is the diagnostic biomarker for AERD — elevated >1,000 pg/mg in active disease. No aspirin challenge required if history is unambiguous.",
      "Tissue eosinophilia (>10 eos/HPF) in polyp pathology = eosinophilic CRSwNP — high recurrence risk, biologic indicated.",
      "Aspirin desensitization (ASD): performed post-FESS, graded oral challenge protocol. Nasal-only reactions expected and managed locally. Must continue aspirin DAILY — missing >48h = re-sensitization.",
      "Dupilumab is preferred biologic in AERD-associated CRSwNP: dual approval (CRSwNP + asthma), reduces leukotriene production via IL-4/IL-13 blockade, addresses united airway with one drug.",
      "CRSwNP dupilumab dose = 300 mg SC q4w (different from asthma-only dose of 200 mg q2w).",
      "Post-FESS nasal delivery: budesonide nasal rinse (via irrigator) is superior to nasal spray — FESS opens sinus ostia, allowing irrigated steroid to reach all mucosa."
    ],
    "boardPearls": [
      "Samter's Triad: nasal polyps + asthma + NSAID sensitivity. Mechanism: COX-1 block → PGE2 loss → mast cell brake removed → LTC4/LTD4 surge.",
      "LTE4 (urinary) = AERD biomarker. Also elevated in systemic mastocytosis — distinguish by clinical picture + tryptase.",
      "Charcot-Leyden crystals in polyp tissue = eosinophil breakdown products. Pathognomonic of intense eosinophilic inflammation.",
      "COX-2 inhibitors (celecoxib): generally safe in AERD (spare COX-1). Test with low-dose supervised challenge before routine use.",
      "Aspirin desensitization: must NOT premedicate with antihistamines (masks nasal threshold reaction). Montelukast premedication IS appropriate (reduces but does not mask nasal reaction).",
      "Biologic dosing: dupilumab for CRSwNP = 300 mg q4w. For asthma alone = 200 mg q2w. For both = q4w covers both.",
      "SINUS-52 trial: dupilumab for CRSwNP → 57% reduction in nasal polyp score, 50% olfactory improvement.",
      "United airway: upper airway disease (CRSwNP, allergic rhinitis) worsens asthma. Treating nasal disease improves FEV1 — shown in this case (76% → 84% after FESS)."
    ]
  },

  "references": [
    {
      "id": "ICAR-CRSwNP-2020",
      "title": "International Consensus Statement on Allergy and Rhinology: Rhinosinusitis 2021",
      "authors": "Orlandi RR, Kingdom TT, Smith TL, et al.",
      "journal": "Int Forum Allergy Rhinol",
      "year": 2021,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8098247/",
      "openAccess": true,
      "validates": [
        "CRSwNP diagnosis and Lund-Mackay scoring",
        "FESS indications and perioperative management",
        "AERD definition and aspirin desensitization evidence",
        "Biologic selection for CRSwNP"
      ]
    },
    {
      "id": "StatPearls-Rhinosinusitis",
      "title": "Chronic Rhinosinusitis",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK441934/",
      "openAccess": true,
      "validates": [
        "CRS diagnostic criteria (12 weeks symptoms)",
        "Lund-Mackay CT scoring system",
        "CRSwNP vs CRSsNP endotypes"
      ]
    },
    {
      "id": "GINA-2024",
      "title": "GINA Global Strategy for Asthma Management and Prevention 2024",
      "authors": "GINA Board of Directors",
      "journal": "GINA Report",
      "year": 2024,
      "url": "https://ginasthma.org/gina-reports/",
      "openAccess": true,
      "validates": [
        "United airway disease — nasal polyp and asthma comorbidity",
        "Dupilumab for asthma with CRSwNP",
        "Step therapy and biologic indications"
      ]
    },
    {
      "id": "Laidlaw-AERD-2021",
      "title": "Aspirin-Exacerbated Respiratory Disease",
      "authors": "Laidlaw TM, Boyce JA.",
      "journal": "J Allergy Clin Immunol",
      "year": 2021,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8217108/",
      "openAccess": true,
      "validates": [
        "AERD mechanism: COX-1 inhibition → PGE2 loss → LTC4/LTD4 surge",
        "Urinary LTE4 as diagnostic biomarker",
        "Aspirin desensitization protocol and outcomes",
        "Dupilumab in AERD — leukotriene reduction"
      ]
    }
  ]
};
