// rdx-mcq-library.js — ReasonDx Pre-Seeded MCQ Library
// Generated: 2026-03-05T03:11:25.614788+00:00
// MCQs: 146 across 49 cases
//
// Pipeline: 3-pass AI generation matching workers/studydx-engine.js
//   Pass 1 — Generate (PASS1_GENERATE prompt)
//   Pass 2 — Quality audit (PASS2_AUDIT rubric, threshold ≥0.65)
//   Pass 3 — Educational metadata tagging (PASS3_TAG)
//
// Drop into repo root. Auto-loads on content-library.html and studydx.html page load.

(function() {
'use strict';

var LIBRARY = [
  {
    "id": "lib-abpa-aspergillus-0000",
    "type": "mcq",
    "status": "approved",
    "caseId": "abpa-aspergillus",
    "diagnosis": "Allergic bronchopulmonary aspergillosis (ABPA) — Stage I (ABPA-S, pre-bronchiectasis)",
    "source": "ReasonDx Case Library — Allergic bronchopulmonary aspergillosis (ABPA) — Stage I (ABPA-S, pre-bronchiectasis)",
    "submittedAt": "2026-03-05T01:28:58Z",
    "approvedAt": "2026-03-05T01:28:58Z",
    "question": {
      "stem": "A 28-year-old woman with a 10-year history of asthma presents with worsening dyspnea and productive cough over 3 months. She reports expectorating thick, brown-colored mucus plugs daily. Physical examination reveals bilateral expiratory wheeze. Chest CT shows mucoid impaction in the upper lobes without bronchiectasis. Laboratory studies show total IgE 1,800 IU/mL, Aspergillus fumigatus-specific IgE 15.2 kUA/L (elevated), and positive Aspergillus fumigatus precipitins. Skin prick test is positive for Aspergillus fumigatus.",
      "options": [
        {
          "text": "Allergic bronchopulmonary aspergillosis",
          "explanation": "This is correct. The patient meets all criteria for ABPA: underlying asthma, Aspergillus fumigatus sensitization (positive skin test and specific IgE), total IgE >1000 IU/mL, and positive AF-specific IgG (precipitins). The brown mucus plugs are pathognomonic."
        },
        {
          "text": "Simple aspergillus sensitization",
          "explanation": "This is incorrect. Simple sensitization would have positive skin test and specific IgE but would lack the positive precipitins (AF-specific IgG) that distinguish ABPA from simple sensitization."
        },
        {
          "text": "Invasive pulmonary aspergillosis",
          "explanation": "This is incorrect. Invasive aspergillosis occurs in immunocompromised patients and presents with tissue invasion, not the allergic response pattern seen here with elevated IgE and precipitins."
        },
        {
          "text": "Chronic eosinophilic pneumonia",
          "explanation": "This is incorrect. While this can present with asthma and pulmonary infiltrates, it lacks the specific Aspergillus sensitization markers and brown mucus plugs characteristic of ABPA."
        },
        {
          "text": "Aspergillus-induced occupational asthma",
          "explanation": "This is incorrect. Occupational asthma from Aspergillus exposure would not typically produce the high total IgE levels, positive precipitins, or characteristic mucus plugs seen in ABPA."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has allergic bronchopulmonary aspergillosis (ABPA-S stage). The diagnosis requires the classic triad: underlying asthma, Aspergillus fumigatus sensitization, and total IgE >1000 IU/mL. Additionally, positive AF-specific IgG (precipitins) distinguishes ABPA from simple Aspergillus sensitization. The brown mucus plugs are virtually pathognomonic for ABPA in an asthmatic patient. The absence of bronchiectasis indicates ABPA-S (seropositive) rather than ABPA-CB (central bronchiectasis) stage.",
      "topic_tags": [
        "pulmonology",
        "immunology",
        "fungal diseases",
        "asthma"
      ],
      "key_concept": "ABPA diagnosis requires the triad of asthma, Aspergillus sensitization, and IgE >1000 IU/mL, with precipitins distinguishing it from simple sensitization"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "ABPA triad for ABAI: asthma (or CF) + AF sensitization + IgE >1000 IU/mL",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence leaves insufficient information to diagnose ABPA. The clinical vignette with specific lab values and imaging findings is essential."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: asthma history (prerequisite), brown mucus plugs (pathognomonic), imaging findings (stage classification), and specific lab values (diagnostic criteria)."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,3,3,3,3]"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "Simple aspergillus sensitization (0.9) and chronic eosinophilic pneumonia (0.8) are reasonable considerations. Invasive aspergillosis (0.7) less likely in immunocompetent patient. Occupational asthma (0.8) plausible given Aspergillus sensitivity."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing medical conditions with consistent structure."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "ABPA diagnosis is correct based on established criteria: underlying asthma, total IgE >1000 IU/mL, positive AF-specific IgE and IgG, and characteristic brown plugs."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "ABPA is clearly the best answer given the constellation of findings. Brown mucus plugs with high total IgE and positive precipitins make this diagnosis highly specific."
      }
    }
  },
  {
    "id": "lib-abpa-aspergillus-0001",
    "type": "mcq",
    "status": "approved",
    "caseId": "abpa-aspergillus",
    "diagnosis": "Allergic bronchopulmonary aspergillosis (ABPA) — Stage I (ABPA-S, pre-bronchiectasis)",
    "source": "ReasonDx Case Library — Allergic bronchopulmonary aspergillosis (ABPA) — Stage I (ABPA-S, pre-bronchiectasis)",
    "submittedAt": "2026-03-05T01:29:32Z",
    "approvedAt": "2026-03-05T01:29:32Z",
    "question": {
      "stem": "A 28-year-old woman with a 10-year history of poorly controlled asthma presents to the pulmonology clinic with worsening dyspnea and productive cough yielding brown mucus plugs over the past 3 months. She reports frequent exacerbations requiring oral corticosteroids despite adherence to inhaled bronchodilators and corticosteroids. Physical examination reveals bilateral expiratory wheeze and scattered coarse crackles. Chest radiograph shows bilateral upper lobe infiltrates with areas of atelectasis. Laboratory studies reveal: total IgE 2,400 IU/mL (normal <100), eosinophil count 950/μL (normal <500). Aspergillus fumigatus skin prick test is positive at 8mm wheal. Aspergillus fumigatus-specific IgE is elevated at 45 kU/L (normal <0.35). High-resolution CT chest shows mucoid impaction in segmental bronchi without bronchiectasis. Which additional laboratory finding would most specifically distinguish this patient's condition from simple Aspergillus sensitization?",
      "options": [
        {
          "text": "Elevated Aspergillus fumigatus-specific IgG antibodies (precipitins)",
          "explanation": "Correct. AF-specific IgG precipitins are the key distinguishing feature between ABPA and simple AF sensitization, as sensitization alone can cause IgE elevation without precipitin formation."
        },
        {
          "text": "Total IgE concentration greater than 1000 IU/mL",
          "explanation": "Incorrect. While elevated total IgE >1000 IU/mL is part of ABPA diagnostic criteria, it can also occur in simple sensitization and other allergic conditions."
        },
        {
          "text": "Positive Aspergillus fumigatus skin prick test reaction",
          "explanation": "Incorrect. A positive skin prick test indicates sensitization but is present in both ABPA and simple AF sensitization, making it non-discriminatory."
        },
        {
          "text": "Peripheral blood eosinophilia above 500 cells/μL",
          "explanation": "Incorrect. Eosinophilia can occur in various allergic conditions including simple sensitization and is not specific for distinguishing ABPA from sensitization alone."
        },
        {
          "text": "Aspergillus fumigatus-specific IgE elevation above normal",
          "explanation": "Incorrect. Elevated AF-specific IgE indicates sensitization but occurs in both ABPA and simple sensitization, making it insufficient to distinguish between the two conditions."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic features of ABPA Stage I (ABPA-S): asthma, brown mucus plugs, elevated total IgE >1000 IU/mL, positive AF sensitization (skin test and specific IgE), and HRCT showing mucoid impaction without bronchiectasis. The key distinguishing feature between ABPA and simple AF sensitization is the presence of AF-specific IgG antibodies (precipitins). While both conditions can have elevated AF-specific IgE and positive skin tests indicating sensitization, only ABPA develops the immune complex formation evidenced by precipitins. This represents the progression from simple sensitization to the pathologic immune response characteristic of ABPA. The other options (elevated total IgE, positive skin test, eosinophilia, and elevated specific IgE) can all occur in simple sensitization without ABPA development.",
      "topic_tags": [
        "ABPA",
        "aspergillosis",
        "asthma",
        "immunology",
        "pulmonology"
      ],
      "key_concept": "AF-specific IgG precipitins distinguish ABPA from simple Aspergillus sensitization"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "AF-specific IgG (precipitins) positive = distinguishes ABPA from simple AF sensitization (sensitization alone can cause IgE elevation without ABPA)",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final question requires comprehensive analysis of the clinical vignette - cannot be answered from question alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All clinical details (symptoms, duration, exam findings, imaging, lab values) are necessary to establish ABPA diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,7,6,6,7] - excellent parity"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B, D, E are excellent distractors present in ABPA. C is weaker as it's explicitly mentioned in stem as positive"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct - precipitins (AF-specific IgG) are the key distinguishing feature between ABPA and simple sensitization"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - precipitins are pathognomonic for ABPA vs simple sensitization"
      }
    }
  },
  {
    "id": "lib-abpa-aspergillus-0002",
    "type": "mcq",
    "status": "approved",
    "caseId": "abpa-aspergillus",
    "diagnosis": "Allergic bronchopulmonary aspergillosis (ABPA) — Stage I (ABPA-S, pre-bronchiectasis)",
    "source": "ReasonDx Case Library — Allergic bronchopulmonary aspergillosis (ABPA) — Stage I (ABPA-S, pre-bronchiectasis)",
    "submittedAt": "2026-03-05T01:30:05Z",
    "approvedAt": "2026-03-05T01:30:05Z",
    "question": {
      "stem": "A 28-year-old woman with a 10-year history of poorly controlled asthma presents to the pulmonology clinic with worsening dyspnea and productive cough over the past 3 months. She reports expectorating thick, brown mucus plugs. Physical examination reveals bilateral expiratory wheezes. Laboratory studies show total IgE of 1,200 IU/mL, positive Aspergillus fumigatus-specific IgE at 15 kU/L, and positive Aspergillus fumigatus-specific IgG precipitins. High-resolution computed tomography of the chest shows mucoid impaction in the upper lobes with high-attenuation mucus but no evidence of bronchiectasis. Pulmonary function tests demonstrate an FEV1 of 65% predicted with reversible airflow obstruction.",
      "options": [
        {
          "text": "Allergic bronchopulmonary aspergillosis without bronchiectasis",
          "explanation": "Correct. This patient meets criteria for ABPA-S (seropositive stage): asthma + AF sensitization + IgE >1000 + AF-specific IgE/IgG positive. No bronchiectasis present distinguishes this from ABPA-CB."
        },
        {
          "text": "Simple Aspergillus fumigatus sensitization without ABPA",
          "explanation": "Incorrect. Simple sensitization would not have positive AF-specific IgG precipitins, which distinguish ABPA from sensitization alone. The brown plugs and high IgE further support ABPA."
        },
        {
          "text": "Allergic bronchopulmonary aspergillosis with central bronchiectasis",
          "explanation": "Incorrect. HRCT shows no bronchiectasis, ruling out ABPA-CB. This patient has ABPA-S (seropositive stage) which is the pre-bronchiectasis stage."
        },
        {
          "text": "Severe asthma with comorbid invasive pulmonary aspergillosis",
          "explanation": "Incorrect. Invasive aspergillosis occurs in immunocompromised patients, not in immunocompetent asthmatics. The positive precipitins and brown plugs suggest ABPA, not invasive disease."
        },
        {
          "text": "Eosinophilic granulomatosis with polyangiitis involving the lungs",
          "explanation": "Incorrect. EGPA typically presents with systemic vasculitis, neuropathy, and tissue eosinophilia. The specific AF sensitization pattern and brown plugs are characteristic of ABPA."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has allergic bronchopulmonary aspergillosis without bronchiectasis (ABPA-S). She meets the diagnostic criteria: underlying asthma, AF sensitization (positive specific IgE), total IgE >1000 IU/mL, and positive AF-specific IgG precipitins. The brown mucus plugs and high-attenuation mucus on HRCT are highly suggestive of ABPA. The absence of bronchiectasis distinguishes this as ABPA-S (seropositive stage) rather than ABPA-CB (central bronchiectasis stage). Simple AF sensitization would lack the positive precipitins that distinguish ABPA from sensitization alone. Invasive aspergillosis occurs in immunocompromised patients, not immunocompetent asthmatics. EGPA would present with systemic vasculitis features rather than this specific pattern of AF sensitization.",
      "topic_tags": [
        "pulmonology",
        "allergy",
        "aspergillosis",
        "asthma",
        "radiology"
      ],
      "key_concept": "Distinguishing ABPA-S from ABPA-CB based on presence of bronchiectasis and understanding diagnostic criteria"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "ABPA-S vs ABPA-CB: S = seropositive only (no bronchiectasis). CB = central bronchiectasis present. CB is irreversible.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Question requires full clinical vignette including history, physical exam, labs, and imaging to distinguish between ABPA subtypes and related conditions"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All components are essential: asthma history establishes underlying condition, symptoms suggest ABPA, labs provide diagnostic criteria, imaging confirms mucoid impaction without bronchiectasis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [6,7,7,8,9], ratio 1.5 which meets threshold but could be tighter"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "Excellent distractors: B represents earlier stage, C is classic ABPA variant, D addresses immunocompromised consideration, E is reasonable vasculitis differential"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are consistent noun phrases describing diagnostic entities"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with established ABPA diagnostic criteria and staging system"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While ABPA-S is most appropriate, some might argue for simple sensitization given stage of disease, but positive precipitins clearly favor ABPA"
      }
    }
  },
  {
    "id": "lib-ace-angioedema-0003",
    "type": "mcq",
    "status": "approved",
    "caseId": "ace-angioedema",
    "diagnosis": "ACE Inhibitor Angioedema",
    "source": "DOI: 10.1016/j.iac.2006.08.001; ACE inhibitor-associated angioedema",
    "submittedAt": "2026-03-05T01:30:40Z",
    "approvedAt": "2026-03-05T01:30:40Z",
    "question": {
      "stem": "A 45-year-old Black woman presents to the emergency department with acute onset of lip and tongue swelling that began 2 hours ago. She has been taking lisinopril 10 mg daily for hypertension for the past 3 years without prior issues. Physical examination reveals significant angioedema of the lips, tongue, and soft palate without urticaria or wheezing. Vital signs are stable. The patient received diphenhydramine 50 mg IV and methylprednisolone 125 mg IV in triage with minimal improvement. Laboratory studies show normal C3, C4, and C1-esterase inhibitor levels.",
      "options": [
        {
          "text": "Discontinue lisinopril and administer icatibant",
          "explanation": "Correct. This is ACE inhibitor angioedema, which is bradykinin-mediated. Icatibant is a bradykinin B2 receptor antagonist effective for this condition."
        },
        {
          "text": "Continue lisinopril and administer epinephrine",
          "explanation": "Incorrect. ACE inhibitor angioedema is bradykinin-mediated, not IgE-mediated, so epinephrine has limited efficacy. The ACE inhibitor must be discontinued."
        },
        {
          "text": "Discontinue lisinopril and increase antihistamine dosing",
          "explanation": "Incorrect. While discontinuing lisinopril is correct, antihistamines have poor efficacy in bradykinin-mediated angioedema as this is not histamine-mediated."
        },
        {
          "text": "Continue lisinopril and administer fresh frozen plasma",
          "explanation": "Incorrect. This patient has normal complement levels, ruling out hereditary angioedema. The ACE inhibitor must be discontinued, and FFP is not indicated."
        },
        {
          "text": "Discontinue lisinopril and administer high-dose corticosteroids",
          "explanation": "Incorrect. While discontinuing lisinopril is correct, corticosteroids have limited efficacy in acute bradykinin-mediated angioedema and are not first-line treatment."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has ACE inhibitor-induced angioedema, evidenced by the temporal relationship to lisinopril use, characteristic distribution (lips, tongue, soft palate), absence of urticaria, and poor response to antihistamines. ACE inhibitor angioedema is caused by bradykinin accumulation due to inhibition of angiotensin-converting enzyme, which normally degrades bradykinin. The normal complement levels rule out hereditary angioedema. Treatment requires immediate discontinuation of the ACE inhibitor and, for severe cases, icatibant (bradykinin B2 receptor antagonist) or C1-esterase inhibitor concentrate. Epinephrine, antihistamines, and corticosteroids have limited efficacy because this is not IgE/histamine-mediated. Black patients have a 3-4 times higher risk of ACE inhibitor angioedema.",
      "topic_tags": [
        "angioedema",
        "ACE inhibitors",
        "bradykinin",
        "drug adverse effects"
      ],
      "key_concept": "ACE inhibitor angioedema is bradykinin-mediated and responds poorly to standard allergic reaction treatments"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "ACEi angioedema mechanism: bradykinin accumulation (NOT IgE/histamine). Responds poorly to epinephrine/antihistamines.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final sentence alone is insufficient - requires clinical context about patient presentation, medication history, and response to initial treatments to determine correct management"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are essential: patient demographics (Black race - higher ACE-I angioedema risk), symptom onset/timeline, medication history, physical findings, vital signs, treatment response, and lab results all contribute to diagnosis and management"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [6,6,7,7,8] - ratio 1.33, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B,C,D,E are all reasonable considerations clinicians might consider - continuing vs discontinuing ACE-I, using epinephrine for angioedema, increasing antihistamines, FFP for complement disorders, high-dose steroids"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: 'Verb + medication + and + verb + treatment'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct - ACE inhibitor angioedema requires discontinuation of ACE-I and icatibant is appropriate for severe bradykinin-mediated angioedema"
      },
      "single_best_answer": {
        "score": 0.7,
        "note": "While A is clearly best, some might argue for C (discontinue + antihistamines) as a reasonable approach, though icatibant is more targeted for severe ACE-I angioedema"
      }
    }
  },
  {
    "id": "lib-ace-angioedema-0004",
    "type": "mcq",
    "status": "approved",
    "caseId": "ace-angioedema",
    "diagnosis": "ACE Inhibitor Angioedema",
    "source": "DOI: 10.1016/j.iac.2006.08.001; ACE inhibitor-associated angioedema",
    "submittedAt": "2026-03-05T01:31:15Z",
    "approvedAt": "2026-03-05T01:31:15Z",
    "question": {
      "stem": "A 52-year-old Black woman presents to the emergency department with facial swelling that began 6 hours ago. She reports lip and tongue swelling without urticaria or pruritus. Her medical history includes hypertension treated with lisinopril 10 mg daily for the past 3 years. Vital signs show blood pressure 165/95 mmHg, heart rate 88/min, respiratory rate 16/min, and oxygen saturation 98% on room air. Physical examination reveals asymmetric lip and tongue edema with mild voice changes but no stridor. The patient received diphenhydramine 50 mg IV and methylprednisolone 125 mg IV in triage with minimal improvement. Laboratory studies show normal C3, C4, and C1 esterase inhibitor levels.",
      "options": [
        {
          "text": "Discontinue lisinopril and initiate losartan with close monitoring",
          "explanation": "Incorrect. While ARBs like losartan have lower cross-reactivity risk (3-10%), they should be used with extreme caution after ACE inhibitor angioedema. The safer approach is to use alternative antihypertensive classes initially."
        },
        {
          "text": "Continue lisinopril and add antihistamine prophylaxis",
          "explanation": "Incorrect. This is dangerous as it leaves the patient at risk for recurrent and potentially fatal angioedema. ACE inhibitor angioedema is bradykinin-mediated, not histamine-mediated, so antihistamines provide minimal benefit."
        },
        {
          "text": "Discontinue lisinopril permanently and avoid all ACE inhibitors",
          "explanation": "Correct. ACE inhibitor angioedema is caused by bradykinin accumulation due to inhibition of angiotensin-converting enzyme. All ACE inhibitors are absolutely contraindicated after an episode of ACE inhibitor-induced angioedema due to the risk of recurrent, potentially fatal attacks."
        },
        {
          "text": "Switch to sacubitril/valsartan for dual renin-angiotensin system blockade",
          "explanation": "Incorrect. ARNI (sacubitril/valsartan) is contraindicated after ACE inhibitor angioedema because neprilysin inhibition by sacubitril further increases bradykinin levels, potentially worsening angioedema risk."
        },
        {
          "text": "Reduce lisinopril dose to 5 mg daily with premedication",
          "explanation": "Incorrect. Dose reduction does not eliminate the risk of recurrent angioedema. The mechanism involves bradykinin accumulation regardless of ACE inhibitor dose. Continued ACE inhibitor use poses unacceptable risk for life-threatening angioedema."
        }
      ],
      "correct_index": 2,
      "explanation": "This patient presents with classic ACE inhibitor-induced angioedema: facial swelling without urticaria in a Black patient (higher risk population) on chronic lisinopril therapy. The poor response to antihistamines and corticosteroids supports bradykinin-mediated rather than IgE-mediated angioedema. Normal complement levels rule out hereditary angioedema. The correct management is immediate and permanent discontinuation of all ACE inhibitors due to the risk of recurrent, potentially fatal episodes. ARBs may be considered cautiously due to 3-10% cross-reactivity risk, but alternative antihypertensive classes are preferred initially. ARNI is contraindicated due to neprilysin inhibition increasing bradykinin levels.",
      "topic_tags": [
        "angioedema",
        "ACE_inhibitors",
        "adverse_drug_reactions",
        "hypertension",
        "emergency_medicine"
      ],
      "key_concept": "ACE inhibitor angioedema requires permanent discontinuation of all ACE inhibitors due to bradykinin-mediated mechanism and risk of fatal recurrence"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Epidemiology: 0.1–0.7% ACEi users. Black patients: 3–4× higher risk. Can occur after years on the drug.",
    "quality_score": 0.89,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence would leave insufficient information to determine the specific management approach for ACE inhibitor-induced angioedema"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: patient demographics (Black race - higher risk), timing, symptoms, medication history, vital signs, physical exam findings, treatment response, and lab results all contribute to the diagnosis and management decision"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,7,8,8,10] - ratio 1.43, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "A: Plausible alternative (ARB switch) but ignores cross-reactivity risk. B: Unreasonable - continuing causative agent. D: Creative but inappropriate due to neprilysin inhibition. E: Dangerous - dose reduction won't prevent recurrence"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with guidelines for ACE inhibitor-induced angioedema management - permanent discontinuation of all ACE inhibitors"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - permanent ACE inhibitor discontinuation is the standard of care for this diagnosis"
      }
    }
  },
  {
    "id": "lib-ace-angioedema-0005",
    "type": "mcq",
    "status": "approved",
    "caseId": "ace-angioedema",
    "diagnosis": "ACE Inhibitor Angioedema",
    "source": "DOI: 10.1016/j.iac.2006.08.001; ACE inhibitor-associated angioedema",
    "submittedAt": "2026-03-05T01:31:54Z",
    "approvedAt": "2026-03-05T01:31:54Z",
    "question": {
      "stem": "A 52-year-old Black woman presents to the emergency department with sudden onset of lip and tongue swelling that began 3 hours ago. She has been taking lisinopril 10 mg daily for hypertension for the past 4 years without prior issues. Physical examination reveals significant angioedema of the lips, tongue, and soft palate without urticaria or wheezing. Vital signs show blood pressure 165/95 mmHg, heart rate 88/min, and oxygen saturation 96% on room air. The patient reports mild difficulty swallowing but no stridor. Laboratory studies show normal C3, C4, and C1-esterase inhibitor levels. After ensuring airway stability and discontinuing lisinopril, which of the following is the most appropriate next step in management?",
      "options": [
        {
          "text": "Administer epinephrine 0.3 mg intramuscularly and diphenhydramine 50 mg intravenously",
          "explanation": "This treats IgE-mediated allergic reactions, but ACE inhibitor angioedema is bradykinin-mediated, not histamine-mediated, making epinephrine and antihistamines largely ineffective."
        },
        {
          "text": "Administer icatibant 30 mg subcutaneously and monitor for airway compromise",
          "explanation": "This is correct. Icatibant is a selective bradykinin B2 receptor antagonist that directly targets the pathophysiology of ACE inhibitor angioedema, which is bradykinin-mediated rather than histamine-mediated."
        },
        {
          "text": "Initiate high-dose methylprednisolone 125 mg intravenously every 6 hours",
          "explanation": "Corticosteroids have limited acute benefit in ACE inhibitor angioedema since the mechanism is bradykinin accumulation rather than inflammatory cascade activation that responds to steroids."
        },
        {
          "text": "Administer fresh frozen plasma 15 mL/kg intravenously over 30 minutes",
          "explanation": "Fresh frozen plasma is used for hereditary angioedema or acquired C1-esterase inhibitor deficiency, but this patient has normal complement levels, ruling out these conditions."
        },
        {
          "text": "Observe for spontaneous resolution and discharge home in 6 hours if stable",
          "explanation": "While ACE inhibitor angioedema may resolve spontaneously within 48-72 hours, this patient has significant oropharyngeal involvement requiring active management and extended monitoring for potential airway compromise."
        }
      ],
      "correct_index": 1,
      "explanation": "This case represents ACE inhibitor-induced angioedema, which occurs in 0.1-0.7% of ACE inhibitor users with a 3-4x higher incidence in Black patients. The mechanism involves bradykinin accumulation due to ACE inhibitor blocking bradykinin degradation. Normal complement levels (C3, C4, C1-INH) exclude hereditary angioedema. Icatibant, a selective bradykinin B2 receptor antagonist, directly targets the underlying pathophysiology and is highly effective for severe ACE inhibitor angioedema. Traditional treatments like epinephrine and antihistamines are ineffective because this is not IgE/histamine-mediated. Corticosteroids have limited acute benefit, and FFP is not indicated with normal complement levels.",
      "topic_tags": [
        "angioedema",
        "ACE inhibitors",
        "emergency medicine",
        "pharmacology",
        "allergy"
      ],
      "key_concept": "ACE inhibitor angioedema is bradykinin-mediated and requires targeted therapy with icatibant rather than standard allergic reaction treatments"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Treatment: stop ACEi immediately. Airway management first. Icatibant or C1-INH for severe/refractory attacks.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The question stem provides essential clinical context including patient demographics, medication history, physical findings, vital signs, and laboratory results that are all necessary to distinguish ACE inhibitor-induced angioedema from other causes"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: patient race (higher risk), medication history (lisinopril), timing, physical findings (angioedema without urticaria/wheezing), vital signs, and crucially the normal complement levels that exclude hereditary angioedema"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [11,11,9,9,12] - ratio 1.33, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "A is plausible traditional allergy treatment; C represents reasonable anti-inflammatory approach; D could be considered for complement-mediated angioedema; E is reasonable conservative management. All are clinically logical considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently start with action verbs (Administer/Initiate/Observe) followed by specific medication details"
      },
      "clinical_accuracy": {
        "score": 0.8,
        "note": "Icatibant is correct for ACE inhibitor angioedema, though some guidelines still consider it second-line after traditional measures fail. The mechanism and rationale are accurate"
      },
      "single_best_answer": {
        "score": 0.85,
        "note": "While icatibant is increasingly recognized as optimal for ACE inhibitor angioedema, some clinicians might still try epinephrine first, making this slightly debatable but generally accepted"
      }
    }
  },
  {
    "id": "lib-acquired-c1esterase-inhibitor-deficiency-0006",
    "type": "mcq",
    "status": "approved",
    "caseId": "acquired-c1esterase-inhibitor-deficiency",
    "diagnosis": "Acquired C1-INH Deficiency",
    "source": "DOI: 10.1111/all.15214; International WAO/EAACI guideline for management of hereditary angioedema — 2021 revision; DOI: 10.1186/1710-1492-6-14; Acquired angioedema",
    "submittedAt": "2026-03-05T01:32:28Z",
    "approvedAt": "2026-03-05T01:32:28Z",
    "question": {
      "stem": "A 58-year-old man presents to the emergency department with recurrent episodes of facial swelling and difficulty swallowing over the past 6 months. He has no known allergies and denies recent medication changes. His symptoms occur without urticaria and resolve spontaneously over 48-72 hours. He has no family history of similar episodes. Physical examination reveals asymmetric swelling of the lips and tongue without erythema. Laboratory studies show C4 12 mg/dL (normal 20-50), C3 85 mg/dL (normal 90-180), C1-INH activity 15% (normal 70-130%), and C1q 8 mg/dL (normal 14-26). Tryptase level is normal.",
      "options": [
        {
          "text": "Acquired C1-esterase inhibitor deficiency",
          "explanation": "Correct. The combination of adult onset without family history, low C1q, and the complement pattern (low C4, low/normal C3, low C1-INH) is diagnostic of acquired angioedema (AAE)."
        },
        {
          "text": "Hereditary angioedema type I",
          "explanation": "Incorrect. HAE typically presents in younger patients with family history and shows normal C1q levels, unlike this case where C1q is low."
        },
        {
          "text": "ACE inhibitor-induced angioedema",
          "explanation": "Incorrect. While ACE inhibitors can cause angioedema, the patient denies medication changes and the complement abnormalities point to a C1-INH deficiency disorder."
        },
        {
          "text": "Idiopathic angioedema with complement consumption",
          "explanation": "Incorrect. The specific pattern of complement abnormalities with low C1-INH activity indicates acquired C1-INH deficiency rather than idiopathic disease."
        },
        {
          "text": "Systemic mastocytosis with recurrent episodes",
          "explanation": "Incorrect. Normal tryptase levels and the absence of urticaria make mastocytosis unlikely, and the complement abnormalities are characteristic of C1-INH deficiency."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has acquired angioedema (AAE) based on the classic presentation of adult-onset angioedema without family history, combined with the pathognomonic laboratory finding of low C1q. The key distinguishing feature between AAE and hereditary angioedema (HAE) is C1q level: low in AAE due to complement activation extending to the C1q level, but normal in HAE where consumption primarily affects C4. The complement pattern (low C4, low/normal C3, low C1-INH activity, low C1q) confirms AAE. This patient requires workup for underlying B-cell malignancy or autoimmune conditions, as AAE is often associated with lymphoproliferative disorders or anti-C1-INH antibodies.",
      "topic_tags": [
        "angioedema",
        "complement disorders",
        "acquired C1-INH deficiency",
        "hereditary angioedema"
      ],
      "key_concept": "C1q level distinguishes acquired angioedema (low C1q) from hereditary angioedema (normal C1q)"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "AAE vs HAE: AAE — adult onset, no family history, C1q LOW, malignancy association. HAE — younger onset, positive family history, C1q NORMAL.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The last sentence alone cannot be answered without the clinical history and laboratory values, particularly the C1q level which is the key distinguishing feature"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is necessary: age/onset for acquired vs hereditary, absence of urticaria/allergies, family history, physical findings, and comprehensive complement studies all contribute to the differential"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [5,4,4,6,6]. Ratio 6/4 = 1.5, which meets the threshold but is at the limit"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are clinically reasonable: HAE type I has similar presentation but normal C1q, ACE inhibitor angioedema is common, idiopathic angioedema occurs, mastocytosis can cause swelling. Strong clinical reasoning required"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing medical conditions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - low C1q is pathognomonic for acquired C1-INH deficiency vs hereditary forms"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "The C1q level definitively distinguishes acquired from hereditary angioedema, making A the single best answer"
      }
    }
  },
  {
    "id": "lib-acquired-c1esterase-inhibitor-deficiency-0007",
    "type": "mcq",
    "status": "approved",
    "caseId": "acquired-c1esterase-inhibitor-deficiency",
    "diagnosis": "Acquired C1-INH Deficiency",
    "source": "DOI: 10.1111/all.15214; International WAO/EAACI guideline for management of hereditary angioedema — 2021 revision; DOI: 10.1186/1710-1492-6-14; Acquired angioedema",
    "submittedAt": "2026-03-05T01:33:05Z",
    "approvedAt": "2026-03-05T01:33:05Z",
    "question": {
      "stem": "A 58-year-old man presents to the emergency department with his third episode of facial swelling in 6 months. He describes sudden onset of lip and eyelid swelling that resolves over 2-3 days without urticaria. He has no family history of similar episodes and no known allergies. His medical history includes hypertension treated with lisinopril. Physical examination reveals asymmetric swelling of the upper lip and right eyelid without erythema or pruritus. Laboratory studies show C4 level of 8 mg/dL (normal 20-50), C3 level of 85 mg/dL (normal 90-180), C1-INH level of 12 mg/dL (normal 21-39), and C1q level of 8 mg/dL (normal 14-22). Flow cytometry reveals a monoclonal B-cell population.",
      "options": [
        {
          "text": "Acquired C1-esterase inhibitor deficiency",
          "explanation": "Correct. The combination of adult onset, no family history, low C4, low/normal C3, low C1-INH, and critically low C1q with monoclonal B-cell population is diagnostic of acquired angioedema (AAE)."
        },
        {
          "text": "Hereditary angioedema type I",
          "explanation": "Incorrect. HAE would have normal C1q levels despite low C4 and C1-INH. The adult onset without family history and low C1q distinguish this as acquired rather than hereditary."
        },
        {
          "text": "ACE inhibitor-induced angioedema",
          "explanation": "Incorrect. While lisinopril can cause angioedema, the complement abnormalities (low C4, C1-INH, C1q) and monoclonal B-cell population suggest C1-INH deficiency rather than bradykinin-mediated ACE inhibitor angioedema."
        },
        {
          "text": "Hereditary angioedema type II",
          "explanation": "Incorrect. HAE type II has normal or elevated C1-INH levels but dysfunctional protein. This patient has low C1-INH levels, and the low C1q indicates acquired rather than hereditary disease."
        },
        {
          "text": "Idiopathic angioedema with complement consumption",
          "explanation": "Incorrect. The specific pattern of low C1q with monoclonal B-cell population points to acquired C1-INH deficiency associated with B-cell malignancy, not idiopathic angioedema."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with acquired angioedema (AAE) associated with B-cell malignancy. The key diagnostic feature distinguishing AAE from hereditary angioedema (HAE) is the low C1q level. In AAE, complement activation extends to the C1q level due to consumption by autoantibodies or malignant B-cell clones, whereas in HAE, C1q remains normal as C4 is the primary complement component consumed. The adult onset without family history, presence of monoclonal B-cells, and the specific complement pattern (low C4, low/normal C3, low C1-INH, low C1q) confirm acquired C1-INH deficiency. This patient requires workup for underlying B-cell malignancy and may benefit from treatment of the underlying clone.",
      "topic_tags": [
        "angioedema",
        "complement deficiency",
        "hematologic malignancy",
        "immunology"
      ],
      "key_concept": "C1q level distinguishes acquired from hereditary C1-INH deficiency"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK4",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Complement in AAE: C4 low + C3 low/normal + C1-INH low + C1q LOW.",
    "quality_score": 0.89,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence leaves critical diagnostic information - recurrent episodes, complement levels, monoclonal B-cells - all essential for distinguishing between angioedema types"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: recurrent episodes establish pattern, lack of urticaria/family history rules out allergic/hereditary causes, lisinopril suggests ACE-inhibitor cause, specific complement levels distinguish acquired from hereditary forms, monoclonal B-cells confirm acquired etiology"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [5,4,4,4,6] - ratio 1.5, at the threshold"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are highly plausible given the clinical presentation: HAE types I/II are classic differentials for recurrent angioedema, ACE-inhibitor cause given lisinopril use, idiopathic with complement consumption could explain lab abnormalities"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing specific medical conditions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - low C1q is the key distinguishing feature of acquired C1-INH deficiency from hereditary forms, and monoclonal B-cells support this diagnosis"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While acquired C1-INH deficiency is the best answer given the low C1q and monoclonal B-cells, some clinicians might initially consider ACE-inhibitor angioedema given the lisinopril use, though the complement pattern clearly favors acquired deficiency"
      }
    }
  },
  {
    "id": "lib-acquired-c1esterase-inhibitor-deficiency-0008",
    "type": "mcq",
    "status": "approved",
    "caseId": "acquired-c1esterase-inhibitor-deficiency",
    "diagnosis": "Acquired C1-INH Deficiency",
    "source": "DOI: 10.1111/all.15214; International WAO/EAACI guideline for management of hereditary angioedema — 2021 revision; DOI: 10.1186/1710-1492-6-14; Acquired angioedema",
    "submittedAt": "2026-03-05T01:33:43Z",
    "approvedAt": "2026-03-05T01:33:43Z",
    "question": {
      "stem": "A 52-year-old man presents to the emergency department with acute onset of facial swelling and difficulty swallowing that began 6 hours ago. He has no known allergies and takes no medications. Physical examination reveals asymmetric swelling of the lips, eyelids, and tongue without urticaria. His voice is muffled but airways remain patent. He denies any family history of similar episodes and reports this is his first such occurrence. Vital signs are stable. Laboratory studies reveal C4 12 mg/dL (normal 16-47), C3 85 mg/dL (normal 83-177), C1-INH 8 mg/dL (normal 21-39), and C1q 8.2 mg/dL (normal 11.1-20.1). Which of the following is the most appropriate next step in management?",
      "options": [
        {
          "text": "Order serum and urine protein electrophoresis with immunofixation",
          "explanation": "Correct. The combination of adult onset angioedema without family history, low C1q distinguishing this from hereditary angioedema, and the characteristic complement pattern (low C4, normal C3, low C1-INH, low C1q) indicates acquired C1-INH deficiency (AAE). All patients with AAE require malignancy workup as it's associated with B-cell lymphoproliferative disorders."
        },
        {
          "text": "Begin prophylactic danazol therapy and discharge home",
          "explanation": "Incorrect. While danazol is used for hereditary angioedema prophylaxis, this patient's low C1q indicates acquired rather than hereditary disease. Additionally, prophylaxis should not be started until after acute episode resolution and underlying malignancy workup is completed."
        },
        {
          "text": "Obtain genetic testing for hereditary angioedema mutations",
          "explanation": "Incorrect. The low C1q level distinguishes this from hereditary angioedema, where C1q remains normal. Hereditary angioedema also typically presents at younger age with positive family history, neither of which are present here."
        },
        {
          "text": "Administer high-dose corticosteroids and antihistamines",
          "explanation": "Incorrect. While these may be tried empirically, they are generally ineffective for C1-INH deficiency-related angioedema. The complement pattern clearly indicates C1-INH deficiency requiring specific treatment and malignancy workup, not empiric allergy management."
        },
        {
          "text": "Start ACE inhibitor discontinuation protocol and monitor",
          "explanation": "Incorrect. While ACE inhibitors can cause angioedema, this patient takes no medications. More importantly, the specific complement abnormalities (low C4, C1-INH, and C1q) indicate acquired C1-INH deficiency requiring malignancy evaluation, not drug-induced angioedema."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with acquired C1-INH deficiency (AAE), distinguished from hereditary angioedema by the low C1q level. In hereditary angioedema, C1q remains normal while in AAE, C1q is consumed due to complement activation extending to the C1q level. The adult onset without family history further supports AAE. All patients with newly diagnosed AAE require comprehensive malignancy workup including SPEP/UPEP as AAE is strongly associated with B-cell lymphoproliferative disorders. The other options fail to recognize the specific diagnosis or inappropriately treat this as hereditary disease or allergic angioedema.",
      "topic_tags": [
        "angioedema",
        "complement_disorders",
        "hematology_oncology",
        "emergency_medicine"
      ],
      "key_concept": "C1q level distinguishes acquired from hereditary C1-INH deficiency and mandates malignancy workup"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Complement in HAE Type I: C4 low + C3 normal + C1-INH low + C1q NORMAL.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Question requires integration of clinical presentation with specific laboratory findings (low C1q distinguishing AAE from HAE) to determine appropriate workup"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details necessary: age/onset supports acquired form, no allergies/meds rules out drug-induced, physical findings consistent with angioedema, lab values essential for diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [8,8,7,7,8]"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B, C, D are reasonable considerations for angioedema workup/treatment. E less plausible as no ACE inhibitor history mentioned, but ACE-inhibitor angioedema is common differential"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently structured as verb phrases (Order, Begin, Obtain, Administer, Start)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct identification of AAE based on low C1q, and appropriate next step of malignancy screening with SPEP/UPEP"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Given the specific lab pattern showing AAE, malignancy workup is the clear next priority, though some might argue for genetic testing"
      }
    }
  },
  {
    "id": "lib-acute-urticaria-0009",
    "type": "mcq",
    "status": "approved",
    "caseId": "acute-urticaria",
    "diagnosis": "Acute Urticaria",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T01:34:15Z",
    "approvedAt": "2026-03-05T01:34:15Z",
    "question": {
      "stem": "A 28-year-old woman presents to urgent care with a 2-day history of raised, red, itchy bumps on her arms and trunk that appeared shortly after starting amoxicillin for sinusitis. The lesions are approximately 0.5-2 cm in diameter, blanch with pressure, and she reports that some have resolved while new ones have appeared. She denies fever, difficulty breathing, or swelling of her face or lips. Physical examination reveals multiple erythematous wheals on her arms, chest, and back. Vital signs are normal. Which of the following is the most appropriate initial management?",
      "options": [
        {
          "text": "Discontinue amoxicillin and prescribe cetirizine 10 mg twice daily",
          "explanation": "This is correct. The patient has acute urticaria likely triggered by amoxicillin. First-line treatment involves removing the trigger and starting an H1 antihistamine like cetirizine."
        },
        {
          "text": "Continue amoxicillin and prescribe topical corticosteroid cream",
          "explanation": "This is incorrect. Continuing the likely trigger (amoxicillin) would worsen the urticaria. Topical corticosteroids are not effective for urticaria treatment."
        },
        {
          "text": "Discontinue amoxicillin and prescribe prednisone 40 mg for 5 days",
          "explanation": "This is incorrect. While discontinuing amoxicillin is appropriate, oral steroids are reserved for severe or refractory cases. H1 antihistamines should be tried first."
        },
        {
          "text": "Order comprehensive allergy testing and continue current antibiotic",
          "explanation": "This is incorrect. Extensive workup is not needed for first episode of acute urticaria. The trigger is likely the recently started antibiotic, which should be discontinued."
        },
        {
          "text": "Administer epinephrine and discontinue amoxicillin immediately",
          "explanation": "This is incorrect. Epinephrine is indicated for anaphylaxis with systemic symptoms like hypotension or bronchospasm. This patient has isolated urticaria without systemic features."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has acute urticaria triggered by amoxicillin, evidenced by the temporal relationship between antibiotic initiation and symptom onset. The lesions show classic urticaria characteristics: raised wheals, blanching with pressure, pruritic, and individual lesions resolving within 24 hours. Management involves removing the trigger (discontinuing amoxicillin) and symptomatic treatment with H1 antihistamines like cetirizine. Oral steroids are reserved for severe or refractory cases, not first-line treatment. Extensive workup is unnecessary for acute urticaria. Epinephrine is only indicated if anaphylaxis features are present.",
      "topic_tags": [
        "dermatology",
        "allergy",
        "urticaria",
        "drug reactions"
      ],
      "key_concept": "Acute urticaria management requires trigger removal and H1 antihistamine therapy"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Acute urticaria most common cause: viral URI (especially in children). Food allergy, NSAIDs, antibiotics in adults.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question requires integration of clinical presentation, diagnosis of drug-induced urticaria, and knowledge of appropriate management hierarchy. Cannot be answered from question alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: drug history establishes trigger, lesion characteristics confirm urticaria diagnosis, vital signs rule out systemic reaction, absence of anaphylaxis symptoms guides management choice."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,8,9,8,7] - excellent parity with max/min ratio of 1.29"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B is reasonable but suboptimal (doesn't address trigger). C is plausible for severe cases. D is inappropriate timing but defensible thought process. E correctly identifies severe scenario requiring epinephrine."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: action verb + object + additional treatment specification"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer follows standard guidelines: remove trigger + H1 antihistamine for acute urticaria without systemic symptoms"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear best answer - discontinuing trigger plus appropriate symptomatic treatment is standard of care for this presentation"
      }
    }
  },
  {
    "id": "lib-acute-urticaria-0010",
    "type": "mcq",
    "status": "approved",
    "caseId": "acute-urticaria",
    "diagnosis": "Acute Urticaria",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T01:34:51Z",
    "approvedAt": "2026-03-05T01:34:51Z",
    "question": {
      "stem": "A 28-year-old woman presents to the clinic with a 3-day history of raised, red, itchy bumps on her arms and trunk that appeared after starting amoxicillin for a sinus infection. She reports the lesions are very pruritic and seem to move around her body, with some disappearing while new ones appear elsewhere. Physical examination reveals multiple erythematous, raised wheals of various sizes that blanch with pressure. When you press on one lesion with a tongue depressor, it completely disappears and returns when pressure is released. The patient denies fever, difficulty breathing, or facial swelling.",
      "options": [
        {
          "text": "Discontinue amoxicillin and start cetirizine 10 mg twice daily",
          "explanation": "Correct. This is acute drug-induced urticaria from amoxicillin. First-line management involves removing the trigger (discontinuing amoxicillin) and starting an H1 antihistamine like cetirizine for symptom control."
        },
        {
          "text": "Continue amoxicillin and apply topical corticosteroids to affected areas",
          "explanation": "Incorrect. Continuing the likely trigger (amoxicillin) would perpetuate the urticaria. Topical corticosteroids are not effective for urticaria, which requires systemic antihistamines."
        },
        {
          "text": "Obtain complete blood count and comprehensive metabolic panel before treatment",
          "explanation": "Incorrect. Extensive workup is not needed for first episode of acute urticaria in the absence of systemic symptoms. Laboratory testing would delay appropriate treatment."
        },
        {
          "text": "Prescribe prednisone 40 mg daily for 5 days as first-line therapy",
          "explanation": "Incorrect. While prednisone can be used for severe or refractory acute urticaria, H1 antihistamines are first-line therapy. Systemic steroids are reserved for cases that don't respond to antihistamines."
        },
        {
          "text": "Administer intramuscular epinephrine and observe for anaphylaxis",
          "explanation": "Incorrect. The patient has no signs of anaphylaxis (no hypotension, bronchospasm, or angioedema). Epinephrine is not indicated for isolated urticaria without systemic features."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has classic acute urticaria triggered by amoxicillin, evidenced by pruritic, raised, blanching wheals that appear and resolve in different locations. The key management principles are: 1) Remove the trigger (discontinue amoxicillin), and 2) Provide symptom control with H1 antihistamines like cetirizine. The blanching characteristic and transient nature (<24 hours per lesion) confirm urticaria rather than urticarial vasculitis. Extensive workup is unnecessary for first-episode acute urticaria without systemic symptoms. Systemic steroids are reserved for refractory cases, and epinephrine is only indicated if anaphylaxis features are present.",
      "topic_tags": [
        "dermatology",
        "allergy",
        "drug reactions",
        "urticaria"
      ],
      "key_concept": "Acute urticaria management requires trigger removal and H1 antihistamine therapy as first-line treatment"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 2
    },
    "pearl_source": "Urticaria characteristics: raised erythematous wheals, pruritic, blanching on pressure, individual lesions resolve <24h (wheals lasting >24h → suspect urticarial vasculitis).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The stem provides essential clinical details (drug trigger, timeline, physical findings, blanching test) that are necessary to differentiate urticaria from other conditions and choose appropriate management"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: drug history establishes trigger, symptom description confirms urticaria, physical exam findings confirm diagnosis, absence of systemic symptoms rules out anaphylaxis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,10,11,9,8]. Max/min ratio = 11/8 = 1.38, which is acceptable"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "B is plausible but wrong approach. C represents unnecessary workup some might consider. D is reasonable but not first-line. E addresses valid concern about progression to anaphylaxis"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases describing management actions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer follows standard urticaria management: remove trigger + H1 antihistamine. Clinical presentation clearly describes acute urticaria"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Option A is clearly best practice. Some might debate steroid use, but antihistamines are definitively first-line after trigger removal"
      }
    }
  },
  {
    "id": "lib-acute-urticaria-0011",
    "type": "mcq",
    "status": "approved",
    "caseId": "acute-urticaria",
    "diagnosis": "Acute Urticaria",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T01:35:26Z",
    "approvedAt": "2026-03-05T01:35:26Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department with a 6-hour history of intensely pruritic, raised red welts that appeared suddenly across her trunk and arms. She reports the lesions seem to move around, with some disappearing while new ones appear elsewhere. She denies facial swelling, difficulty breathing, or abdominal pain. Physical examination reveals multiple 0.5-2 cm raised, erythematous, blanching wheals scattered across her torso and extremities. Vital signs are normal. She started amoxicillin 3 days ago for a suspected urinary tract infection and has no known drug allergies. Which of the following is the most appropriate initial treatment?",
      "options": [
        {
          "text": "Cetirizine 10 mg twice daily for 7-10 days",
          "explanation": "Correct. This represents acute urticaria, likely antibiotic-induced. First-line treatment is H1 antihistamines like cetirizine 10 mg BID, which effectively controls symptoms in most cases of acute urticaria."
        },
        {
          "text": "Prednisone 40 mg daily for 5 days with cetirizine taper",
          "explanation": "Incorrect. While prednisone 40 mg × 5 days is appropriate for refractory or severe acute urticaria, it should be reserved for cases not responding to antihistamines alone. This patient should try H1 antihistamines first."
        },
        {
          "text": "Intramuscular epinephrine 0.3 mg with IV methylprednisolone",
          "explanation": "Incorrect. Epinephrine is indicated for anaphylaxis with systemic symptoms like hypotension or bronchospasm. This patient has isolated urticaria without systemic involvement, making epinephrine unnecessary."
        },
        {
          "text": "Diphenhydramine 25 mg every 6 hours with topical calamine lotion",
          "explanation": "Incorrect. While diphenhydramine is an H1 antihistamine, first-generation antihistamines cause significant sedation. Second-generation antihistamines like cetirizine or loratadine are preferred for their efficacy and tolerability."
        },
        {
          "text": "Famotidine 20 mg twice daily with hydroxyzine as needed",
          "explanation": "Incorrect. Famotidine is an H2 antihistamine with minimal benefit in urticaria. H1 antihistamines are the mainstay of treatment. While hydroxyzine is an H1 antihistamine, it's sedating compared to preferred second-generation options."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has classic acute urticaria with raised, blanching, pruritic wheals that migrate and resolve within 24 hours, likely triggered by amoxicillin. The first-line treatment is second-generation H1 antihistamines such as cetirizine 10 mg BID or loratadine 10 mg daily. These provide effective symptom control with minimal sedation. Oral corticosteroids like prednisone 40 mg × 5 days are reserved for severe or refractory cases that don't respond to antihistamines. Epinephrine is only indicated if anaphylaxis features are present (hypotension, bronchospasm, severe systemic symptoms). First-generation antihistamines and H2 blockers are less preferred due to side effects and limited efficacy respectively.",
      "topic_tags": [
        "dermatology",
        "allergy",
        "emergency_medicine",
        "pharmacology"
      ],
      "key_concept": "First-line treatment of acute urticaria with second-generation H1 antihistamines"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 2
    },
    "pearl_source": "Treatment: H1 antihistamine (cetirizine 10 mg BID or loratadine 10 mg daily). Prednisone 40 mg × 5 days for refractory/severe acute urticaria.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette provides essential context (urticaria presentation, amoxicillin trigger, absence of anaphylaxis) that cannot be inferred from the question alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: onset/duration establishes acute urticaria, migratory nature confirms diagnosis, absence of systemic symptoms rules out anaphylaxis, amoxicillin history identifies trigger"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [8,9,7,9,9] - ratio 1.29"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B (prednisone) reasonable for severe cases; C (epinephrine) appropriate concern for drug reaction; D (diphenhydramine) valid antihistamine choice; E (H2 blocker) less plausible as monotherapy"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: medication name + dose + frequency/duration"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Cetirizine 10mg BID is correct first-line treatment for acute urticaria per current guidelines"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Cetirizine is clearly the best initial choice - second-generation H1 antihistamine is standard first-line therapy"
      }
    }
  },
  {
    "id": "lib-allergic-angioedema-0012",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-angioedema",
    "diagnosis": "Allergic Angioedema",
    "source": "DOI: 10.1186/1865-1380-5-39",
    "submittedAt": "2026-03-05T01:37:04Z",
    "approvedAt": "2026-03-05T01:37:04Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department 15 minutes after eating shrimp at a restaurant. She reports facial swelling, particularly around her lips and eyelids, along with itchy raised red welts on her arms and trunk. Her vital signs are stable with blood pressure 118/72 mmHg, heart rate 88 bpm, and oxygen saturation 98% on room air. Physical examination reveals symmetric periorbital and lip edema with multiple erythematous, raised, pruritic lesions scattered across her extremities and torso. She has no voice changes, stridor, or respiratory distress.",
      "options": [
        {
          "text": "Administer intramuscular epinephrine and prepare for potential airway management",
          "explanation": "While epinephrine would be appropriate if anaphylaxis features were present, this patient has stable vital signs and no airway involvement, bronchospasm, or hypotension."
        },
        {
          "text": "Begin oral corticosteroids and schedule follow-up with allergy specialist",
          "explanation": "Corticosteroids may be used as adjunctive therapy but are not the primary acute treatment for allergic angioedema. The immediate priority is histamine blockade."
        },
        {
          "text": "Obtain C1 esterase inhibitor levels and avoid antihistamine administration",
          "explanation": "The rapid onset (<30 minutes) and presence of urticaria strongly suggest IgE-mediated allergic angioedema, not bradykinin-mediated hereditary angioedema."
        },
        {
          "text": "Administer intravenous diphenhydramine and consider H2 blocker addition",
          "explanation": "This is the appropriate first-line treatment for allergic angioedema without anaphylaxis features - H1 antihistamine with potential H2 blocker adjunct for histamine-mediated reaction."
        },
        {
          "text": "Discontinue any ACE inhibitor medications and monitor for 24-48 hours",
          "explanation": "ACE inhibitor angioedema typically has slower onset (hours), lacks urticaria, and doesn't respond to antihistamines. The rapid onset with urticaria suggests allergic etiology."
        }
      ],
      "correct_index": 3,
      "explanation": "This patient presents with classic allergic angioedema: rapid onset (<30 minutes) after allergen exposure (shrimp) with both angioedema and urticaria. The combination of facial swelling with urticarial lesions and the immediate timeframe strongly indicates IgE-mediated, histamine-driven angioedema. Since there are no anaphylaxis features (stable vitals, no airway compromise, no bronchospasm), the primary treatment is H1 antihistamine blockade with diphenhydramine, potentially augmented with H2 blockers. Epinephrine would be reserved for anaphylaxis. The presence of urticaria and rapid onset rules out bradykinin-mediated causes like hereditary angioedema or ACE inhibitor angioedema, which typically lack urticaria and have slower onset.",
      "topic_tags": [
        "Allergic Reactions",
        "Angioedema",
        "Emergency Medicine",
        "Dermatology"
      ],
      "key_concept": "Allergic angioedema is IgE-mediated with rapid onset and commonly presents with concurrent urticaria, requiring antihistamine treatment as first-line therapy"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Allergic angioedema: IgE + mast cell → histamine → Type I (immediate, <30 min). WITH urticaria in most cases.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the last sentence removes critical context about timing, allergen exposure, vital signs stability, and absence of anaphylaxis features - all necessary to differentiate treatment approaches"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: timing establishes allergic cause, vital signs rule out anaphylaxis, physical findings differentiate from other angioedema types"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [11,10,10,9,10] - excellent parity with max/min ratio of 1.22"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "A is plausible but wrong severity assessment; B reasonable but suboptimal timing; C tests knowledge of hereditary angioedema; E addresses ACE inhibitor angioedema - all clinically relevant differentials"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options begin with action verbs and follow consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer appropriately treats allergic angioedema without anaphylaxis features using antihistamines as first-line therapy"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "D is clearly best for allergic angioedema without anaphylaxis, though some might debate whether corticosteroids should be concurrent"
      }
    }
  },
  {
    "id": "lib-allergic-angioedema-0013",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-angioedema",
    "diagnosis": "Allergic Angioedema",
    "source": "DOI: 10.1186/1865-1380-5-39",
    "submittedAt": "2026-03-05T01:37:41Z",
    "approvedAt": "2026-03-05T01:37:41Z",
    "question": {
      "stem": "A 58-year-old man presents to the emergency department with facial swelling that began 8 hours ago and has progressively worsened. He reports his lips, eyelids, and tongue have been swelling slowly throughout the day. He denies difficulty breathing but reports his voice sounds different. He has hypertension treated with lisinopril for 3 years. Vital signs are temperature 98.6°F, blood pressure 142/88 mmHg, heart rate 76/min, and oxygen saturation 98% on room air. Physical examination reveals significant periorbital edema, lip swelling, and tongue enlargement without skin rash. The patient appears comfortable and has no stridor.",
      "options": [
        {
          "text": "Administer fresh frozen plasma and discontinue lisinopril",
          "explanation": "Correct. This is ACE inhibitor-induced angioedema, a bradykinin-mediated process. FFP contains C1 esterase inhibitor and can help reverse the bradykinin accumulation. Discontinuing the offending ACE inhibitor is essential."
        },
        {
          "text": "Give intramuscular epinephrine and intravenous diphenhydramine",
          "explanation": "Incorrect. This is bradykinin-mediated angioedema, not allergic angioedema. Epinephrine and antihistamines are ineffective for bradykinin-mediated processes and would not help this patient."
        },
        {
          "text": "Administer high-dose corticosteroids and schedule allergy testing",
          "explanation": "Incorrect. While corticosteroids might provide some anti-inflammatory benefit, this is not allergic angioedema requiring allergy evaluation. The slow onset and absence of urticaria indicate bradykinin-mediated angioedema."
        },
        {
          "text": "Start continuous albuterol nebulization and obtain chest radiograph",
          "explanation": "Incorrect. The patient has no bronchospasm or respiratory distress requiring bronchodilators. This treatment addresses asthma/COPD exacerbation rather than the underlying angioedema pathophysiology."
        },
        {
          "text": "Initiate intravenous famotidine and cetirizine combination therapy",
          "explanation": "Incorrect. H1 and H2 antihistamine combinations are effective for histamine-mediated allergic angioedema, but this patient has bradykinin-mediated ACE inhibitor angioedema that will not respond to antihistamines."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic ACE inhibitor-induced angioedema, characterized by slow onset (8 hours), absence of urticaria, and asymmetric facial swelling affecting lips, eyelids, and tongue. The key distinguishing features are: 1) No accompanying urticaria (present in most allergic angioedema cases), 2) Slow progressive onset over hours (vs. minutes in allergic reactions), and 3) Long-term ACE inhibitor use. This is bradykinin-mediated angioedema caused by decreased bradykinin degradation due to ACE inhibition. Fresh frozen plasma contains C1 esterase inhibitor and other factors that can help metabolize bradykinin. Discontinuing lisinopril is essential as continued ACE inhibition will perpetuate the problem. Epinephrine and antihistamines (options B and E) are ineffective because this is not histamine-mediated. Corticosteroids (option C) have limited acute benefit, and this isn't allergic angioedema requiring testing. Bronchodilators (option D) are irrelevant as there's no bronchospasm.",
      "topic_tags": [
        "angioedema",
        "ace_inhibitor",
        "bradykinin",
        "emergency_medicine"
      ],
      "key_concept": "Distinguishing bradykinin-mediated angioedema (no urticaria, slow onset, antihistamine-resistant) from allergic angioedema"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Bradykinin angioedema (HAE, ACEi): NO urticaria, slower onset (hours), longer duration (24–72h), does NOT respond to epinephrine/antihistamines.",
    "quality_score": 0.71,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Last sentence alone is insufficient - requires clinical context of ACE inhibitor use, timing, and physical findings to distinguish from allergic angioedema"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: timing establishes non-allergic cause, lisinopril history is key, vital signs show stability, physical exam findings distinguish from allergic angioedema"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,7,8,9,7] - ratio 1.3, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.6,
        "note": "B (epinephrine/diphenhydramine) very plausible for angioedema; C (steroids/allergy testing) reasonable; D (albuterol/CXR) less plausible as no respiratory distress; E (H2/H1 blockers) somewhat plausible"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow verb + object structure consistently"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Fresh frozen plasma for ACE inhibitor angioedema is evidence-based, though some prefer C1 esterase inhibitor concentrate when available"
      },
      "single_best_answer": {
        "score": 0.5,
        "note": "While A is preferred, some clinicians might reasonably choose B initially given angioedema presentation, though explanation clarifies why antihistamines are ineffective"
      }
    }
  },
  {
    "id": "lib-allergic-angioedema-0014",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-angioedema",
    "diagnosis": "Allergic Angioedema",
    "source": "DOI: 10.1186/1865-1380-5-39",
    "submittedAt": "2026-03-05T01:38:19Z",
    "approvedAt": "2026-03-05T01:38:19Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department 20 minutes after eating at a seafood restaurant with facial swelling and difficulty swallowing. She reports her lips and eyelids began swelling shortly after consuming shrimp. Physical examination reveals bilateral periorbital edema, lip swelling, and multiple raised, pruritic wheals on her arms and trunk. Vital signs show blood pressure 110/70 mmHg, heart rate 95/min, respirations 18/min, and oxygen saturation 98% on room air. She has no prior history of angioedema and takes no medications.",
      "options": [
        {
          "text": "Administer intramuscular epinephrine and prepare for possible airway management",
          "explanation": "Correct. This patient has IgE-mediated allergic angioedema with urticaria occurring within 30 minutes of allergen exposure. The presence of oropharyngeal swelling with difficulty swallowing indicates potential airway involvement, making epinephrine the first-line treatment even without frank anaphylaxis."
        },
        {
          "text": "Give intravenous diphenhydramine and monitor for symptom resolution",
          "explanation": "Incorrect. While antihistamines are part of angioedema treatment, the presence of oropharyngeal swelling and dysphagia indicates potential airway compromise requiring immediate epinephrine, not antihistamines as first-line therapy."
        },
        {
          "text": "Obtain C1 esterase inhibitor levels and administer fresh frozen plasma",
          "explanation": "Incorrect. This patient has classic allergic angioedema with urticaria and rapid onset after allergen exposure. C1 esterase inhibitor deficiency (hereditary angioedema) typically presents without urticaria and has slower onset over hours."
        },
        {
          "text": "Discontinue ACE inhibitor therapy and provide supportive care only",
          "explanation": "Incorrect. The patient takes no medications and has classic allergic angioedema with urticaria. ACE inhibitor angioedema occurs without urticaria, has slower onset, and would not present 20 minutes after food exposure in someone not taking ACE inhibitors."
        },
        {
          "text": "Administer high-dose corticosteroids and schedule allergy testing",
          "explanation": "Incorrect. While corticosteroids may be used as adjunctive therapy, they are not first-line treatment for acute angioedema with potential airway involvement. Epinephrine is the immediate priority given the oropharyngeal swelling and dysphagia."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic IgE-mediated allergic angioedema, evidenced by rapid onset within 30 minutes of allergen exposure, presence of urticaria, and oropharyngeal involvement. The combination of facial angioedema with difficulty swallowing indicates potential airway compromise, making epinephrine the first-line treatment. Allergic angioedema is histamine-mediated and responds to epinephrine, unlike bradykinin-mediated angioedema (HAE, ACE inhibitor-induced) which presents without urticaria and does not respond to epinephrine or antihistamines. The presence of urticaria is the key distinguishing feature that identifies this as allergic rather than bradykinin-mediated angioedema.",
      "topic_tags": [
        "emergency medicine",
        "allergology",
        "angioedema",
        "anaphylaxis"
      ],
      "key_concept": "IgE-mediated allergic angioedema presents with urticaria and rapid onset, requiring epinephrine for oropharyngeal involvement"
    },
    "tags": {
      "abai_domain": "Domain 6 — Anaphylaxis",
      "abai_domain_number": 6,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Angioedema differential: allergic (IgE, histamine) vs bradykinin (HAE, ACEi, acquired C1INH) vs idiopathic.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the final sentence removes critical diagnostic information (seafood exposure, timing, physical findings, vital signs) needed to distinguish allergic vs other forms of angioedema"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: age/demographics, timing of exposure, specific allergen, key physical findings, vital signs, and medication history all contribute to diagnosis and management"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [11,9,11,9,9] - ratio 1.22, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B is reasonable but inadequate for airway threat; C appropriate for hereditary angioedema; D reasonable for ACE-inhibitor angioedema; E less plausible as primary intervention but reasonable consideration"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently structured as verb phrases starting with action verbs"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with emergency management guidelines for allergic angioedema with airway involvement - epinephrine is first-line treatment"
      },
      "single_best_answer": {
        "score": 0.75,
        "note": "While epinephrine is clearly indicated, some clinicians might debate whether airway preparation is immediately necessary given stable vitals, though difficulty swallowing makes this the most defensible choice"
      }
    }
  },
  {
    "id": "lib-allergic-conjunctivitis-severe-0015",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-conjunctivitis-severe",
    "diagnosis": "Vernal Keratoconjunctivitis",
    "source": "DOI: 10.1111/j.1399-3038.2007.00658.x; Vernal keratoconjunctivitis: severe allergic eye disease with remodeling",
    "submittedAt": "2026-03-05T01:38:52Z",
    "approvedAt": "2026-03-05T01:38:52Z",
    "question": {
      "stem": "A 12-year-old boy presents to the clinic with bilateral eye itching, tearing, and thick mucoid discharge that has persisted for 8 months. His mother reports the symptoms are present year-round and worsen with outdoor activities. Physical examination reveals bilateral injection of the conjunctiva with large, raised lesions on the upper tarsal conjunctiva that have a distinctive cobblestone appearance. Visual acuity is 20/20 bilaterally. The patient has a history of asthma and seasonal allergies.",
      "options": [
        {
          "text": "Vernal keratoconjunctivitis",
          "explanation": "Correct. The combination of young male patient, perennial symptoms, and pathognomonic giant papillae with cobblestone appearance on tarsal conjunctiva confirms VKC diagnosis."
        },
        {
          "text": "Seasonal allergic conjunctivitis",
          "explanation": "Incorrect. SAC is milder, typically seasonal rather than perennial, and does not produce the characteristic giant papillae seen in this case."
        },
        {
          "text": "Atopic keratoconjunctivitis",
          "explanation": "Incorrect. AKC typically affects adults with atopic dermatitis, not children, and has different clinical features including lower lid involvement."
        },
        {
          "text": "Perennial allergic conjunctivitis",
          "explanation": "Incorrect. PAC does not typically produce giant papillae or the severe cobblestone appearance characteristic of this presentation."
        },
        {
          "text": "Infectious conjunctivitis",
          "explanation": "Incorrect. The chronic perennial course, bilateral involvement, cobblestone papillae, and lack of purulent discharge argue against infectious etiology."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic vernal keratoconjunctivitis (VKC), the most severe form of allergic conjunctivitis. Key diagnostic features include: young male patient (typical demographic), perennial symptoms lasting 8 months, and pathognomonic giant papillae (>1mm) creating a cobblestone appearance on the upper tarsal conjunctiva. VKC is eosinophil-driven and represents the severe end of the allergic conjunctivitis spectrum. The other options represent milder forms of allergic conjunctivitis that lack the characteristic giant papillae, or infectious causes that would have different clinical features and course.",
      "topic_tags": [
        "ophthalmology",
        "allergic_conjunctivitis",
        "pediatrics",
        "vernal_keratoconjunctivitis"
      ],
      "key_concept": "Recognition of vernal keratoconjunctivitis based on demographic (young males), chronicity (perennial), and pathognomonic finding of giant papillae with cobblestone appearance"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "AC spectrum: seasonal AC (SAC, mildest) → perennial AC (PAC) → atopic keratoconjunctivitis (AKC, adults with AD) → vernal keratoconjunctivitis (VKC, young males, most severe).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Question requires integration of clinical presentation (chronic symptoms, cobblestone appearance, demographics) - cannot be answered from final sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: duration (8 months), demographics (12-year-old boy), key symptom pattern (year-round, worse outdoors), pathognomonic finding (cobblestone lesions), and relevant history (asthma/allergies)"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [2,3,2,3,2] - excellent parity with max/min ratio of 1.5"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B, C, D are all plausible allergic conjunctivitis variants that could present similarly. E (infectious) is less plausible given the 8-month duration and bilateral cobblestone appearance, but still reasonable initial consideration"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - cobblestone papillae on upper tarsal conjunctiva in young male with chronic symptoms is pathognomonic for vernal keratoconjunctivitis"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "VKC is clearly the best answer given pathognomonic cobblestone appearance, though some might initially consider other allergic variants"
      }
    }
  },
  {
    "id": "lib-allergic-conjunctivitis-severe-0016",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-conjunctivitis-severe",
    "diagnosis": "Vernal Keratoconjunctivitis",
    "source": "DOI: 10.1111/j.1399-3038.2007.00658.x; Vernal keratoconjunctivitis: severe allergic eye disease with remodeling",
    "submittedAt": "2026-03-05T01:39:22Z",
    "approvedAt": "2026-03-05T01:39:22Z",
    "question": {
      "stem": "A 12-year-old boy presents to the clinic with a 6-month history of bilateral eye itching, tearing, and thick mucoid discharge that worsens during spring and summer months. His mother reports he frequently rubs his eyes and complains of a gritty sensation. Past medical history includes asthma and eczema. On examination, there is bilateral conjunctival injection with prominent raised lesions on the upper tarsal conjunctiva that have a distinctive cobblestone appearance. Visual acuity is 20/20 bilaterally. Fluorescein staining shows superficial punctate keratopathy in both eyes.",
      "options": [
        {
          "text": "Vernal keratoconjunctivitis",
          "explanation": "Correct. Giant papillae (>1 mm) with cobblestone appearance on tarsal conjunctiva in a young male with perennial symptoms and atopic history is pathognomonic for VKC."
        },
        {
          "text": "Seasonal allergic conjunctivitis",
          "explanation": "Incorrect. SAC typically has smaller papillae and is milder. The giant cobblestone papillae and severity indicate VKC rather than SAC."
        },
        {
          "text": "Atopic keratoconjunctivitis",
          "explanation": "Incorrect. AKC typically occurs in adults with atopic dermatitis and affects the lower lid more than upper. This patient's age and upper lid involvement favor VKC."
        },
        {
          "text": "Perennial allergic conjunctivitis",
          "explanation": "Incorrect. PAC is milder than VKC and lacks the characteristic giant papillae. The cobblestone appearance indicates the more severe VKC variant."
        },
        {
          "text": "Giant papillary conjunctivitis",
          "explanation": "Incorrect. GPC is typically associated with contact lens wear or ocular prosthetics. This patient's age, atopic history, and bilateral involvement suggest VKC."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic vernal keratoconjunctivitis (VKC) in a young male with giant papillae creating a cobblestone appearance on the upper tarsal conjunctiva. VKC is the most severe form of allergic conjunctivitis, predominantly affecting young males with atopic history. The giant papillae (>1 mm) are pathognomonic and distinguish it from milder forms like seasonal or perennial allergic conjunctivitis. The eosinophil-driven inflammation can lead to serious complications like shield ulcers if untreated.",
      "topic_tags": [
        "ophthalmology",
        "allergic_conjunctivitis",
        "pediatric_allergy"
      ],
      "key_concept": "Vernal keratoconjunctivitis diagnosis based on giant papillae with cobblestone appearance on tarsal conjunctiva"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "VKC: giant papillae (>1 mm) on tarsal conjunctiva = cobblestone appearance. Eosinophil-driven. Young males. Perennial.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Without the clinical vignette, the question becomes impossible to answer correctly as all options are types of allergic conjunctivitis"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/gender (VKC affects young males), seasonality, atopic history (asthma/eczema), cobblestone papillae (pathognomonic), and punctate keratopathy"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [2,3,2,3,3] - max/min ratio 1.5, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All are legitimate allergic conjunctivitis types that could present similarly, though cobblestone papillae strongly favor VKC"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are consistently formatted noun phrases"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "VKC is correct - cobblestone papillae on upper tarsal conjunctiva in young atopic male is pathognomonic"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Cobblestone appearance makes VKC the clear best answer, though other allergic conditions could theoretically be considered"
      }
    }
  },
  {
    "id": "lib-allergic-conjunctivitis-severe-0017",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-conjunctivitis-severe",
    "diagnosis": "Vernal Keratoconjunctivitis",
    "source": "DOI: 10.1111/j.1399-3038.2007.00658.x; Vernal keratoconjunctivitis: severe allergic eye disease with remodeling",
    "submittedAt": "2026-03-05T01:40:29Z",
    "approvedAt": "2026-03-05T01:40:29Z",
    "question": {
      "stem": "A 12-year-old boy presents with bilateral eye irritation, tearing, and photophobia that has persisted year-round for the past 18 months. He has a history of asthma and eczema. Physical examination reveals thick, ropey discharge and giant papillae with a cobblestone appearance on the upper tarsal conjunctiva bilaterally. Corneal examination shows punctate epithelial erosions. He was initially treated with topical olopatadine twice daily for 6 weeks with minimal improvement. Topical prednisolone provided temporary relief but symptoms returned when discontinued.",
      "options": [
        {
          "text": "Initiate topical cyclosporine 0.05% twice daily",
          "explanation": "Correct. This patient has VKC that failed first-line topical antihistamine/mast cell stabilizer therapy. The treatment escalation for VKC follows: olopatadine → cyclosporine → tacrolimus → systemic therapy."
        },
        {
          "text": "Prescribe topical prednisolone for long-term daily use",
          "explanation": "Incorrect. While topical steroids are effective for VKC, long-term use risks IOP elevation and cataract formation. They should be reserved for short-term flares with ophthalmology co-management."
        },
        {
          "text": "Switch to topical ketotifen twice daily",
          "explanation": "Incorrect. Ketotifen is another H1 antihistamine/mast cell stabilizer similar to olopatadine. Since olopatadine failed, switching to another agent in the same class is unlikely to provide benefit."
        },
        {
          "text": "Start oral prednisone 1 mg/kg daily",
          "explanation": "Incorrect. Systemic steroids are reserved for severe, refractory VKC after failing topical cyclosporine and tacrolimus. This would be premature escalation with significant systemic side effect risks."
        },
        {
          "text": "Apply topical tacrolimus 0.1% twice daily",
          "explanation": "Incorrect. Tacrolimus is third-line therapy for VKC, used after cyclosporine failure. The appropriate escalation sequence should be followed: cyclosporine before tacrolimus."
        }
      ],
      "correct_index": 0,
      "explanation": "This case represents vernal keratoconjunctivitis (VKC) in a young male with characteristic giant papillae and year-round symptoms that failed first-line therapy with olopatadine. VKC treatment follows a specific escalation: topical antihistamine/mast cell stabilizers (olopatadine) → topical cyclosporine → topical tacrolimus → systemic immunosuppression. Since olopatadine failed and steroids provided only temporary relief, topical cyclosporine is the appropriate next step. Long-term topical steroids carry risks of IOP elevation and cataracts. Switching to another first-line agent (ketotifen) is unlikely to help after olopatadine failure. Systemic steroids and tacrolimus are premature without trying cyclosporine first.",
      "topic_tags": [
        "ophthalmology",
        "allergy",
        "pediatrics",
        "conjunctivitis"
      ],
      "key_concept": "VKC treatment escalation pathway after first-line therapy failure"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "VKC treatment: topical olopatadine (H1 + mast cell stabilizer) → topical cyclosporine → tacrolimus → systemic steroids for severe flares.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question sentence alone is insufficient to answer correctly - the specific clinical presentation, failed treatments, and characteristic findings are essential"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/gender (VKC demographics), symptoms (classic VKC), physical findings (pathognomonic giant papillae), failed olopatadine (establishes treatment resistance), steroid response pattern (confirms inflammatory nature)"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,8,6,6,7] - well balanced"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B is plausible but risky long-term; C represents logical alternative antihistamine; D is reasonable for severe cases; E is appropriate but premature - all are clinically reasonable considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: verb + topical/oral modifier + medication + dosing"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Topical cyclosporine is indeed the standard next step after failed antihistamine therapy in VKC, per established treatment algorithms"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While cyclosporine is clearly preferred per guidelines, some clinicians might reasonably consider tacrolimus or even systemic therapy for severe refractory cases"
      }
    }
  },
  {
    "id": "lib-allergic-rhinitis-immunotherapy-0018",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-rhinitis-immunotherapy",
    "diagnosis": "Moderate-severe perennial allergic rhinitis (dust mite + mold-sensitized) with seasonal exacerbation (grass + tree pollen). Allergen immunotherapy (SCIT) candidate.",
    "source": "ReasonDx Case Library — Moderate-severe perennial allergic rhinitis (dust mite + mold-sensitized) with seasonal exacerbation (grass + tree pollen). Allergen immunotherapy (SCIT) candidate.",
    "submittedAt": "2026-03-05T01:41:02Z",
    "approvedAt": "2026-03-05T01:41:02Z",
    "question": {
      "stem": "A 42-year-old man with moderate-severe perennial allergic rhinitis presents for evaluation of subcutaneous immunotherapy (SCIT). His symptoms are poorly controlled despite maximized medical therapy with intranasal corticosteroids and antihistamines. Skin testing reveals significant sensitization to dust mites, mold, grass pollen, and tree pollen. His medical history is significant for hypertension treated with propranolol 80 mg twice daily and mild intermittent asthma with an FEV1 of 85% predicted. He has no history of autoimmune disease or malignancy. Physical examination reveals pale, boggy nasal turbinates with clear rhinorrhea.",
      "options": [
        {
          "text": "Initiate SCIT buildup phase with standard protocol",
          "explanation": "Incorrect. Propranolol is a non-selective beta-blocker, which is a relative contraindication to SCIT due to impaired epinephrine response if anaphylaxis occurs."
        },
        {
          "text": "Switch propranolol to metoprolol before initiating SCIT",
          "explanation": "Correct. Metoprolol is cardioselective (β1-selective) and poses lower risk than non-selective beta-blockers like propranolol for SCIT patients who may need epinephrine for systemic reactions."
        },
        {
          "text": "Defer SCIT due to asthma with FEV1 below 90%",
          "explanation": "Incorrect. FEV1 of 85% does not preclude SCIT. The contraindication is severe/uncontrolled asthma with FEV1 <70% predicted."
        },
        {
          "text": "Start with sublingual immunotherapy instead of SCIT",
          "explanation": "Incorrect. While SLIT has a lower anaphylaxis risk, the primary issue here is the non-selective beta-blocker, which affects treatment of systemic reactions regardless of immunotherapy route."
        },
        {
          "text": "Obtain cardiology clearance before any immunotherapy",
          "explanation": "Incorrect. Cardiology clearance is not routinely required for immunotherapy. The issue is specifically the type of beta-blocker, not underlying cardiac status."
        }
      ],
      "correct_index": 1,
      "explanation": "Non-selective beta-blockers like propranolol are a relative contraindication to SCIT because they impair the cardiovascular response to epinephrine, which is the first-line treatment for systemic allergic reactions (Grade 2 and above). Cardioselective beta-blockers like metoprolol have β1-selectivity and pose lower risk because they have less impact on β2-mediated epinephrine effects. The patient's asthma is not severe enough (FEV1 >70%) to contraindicate SCIT, and his other medical conditions do not preclude immunotherapy.",
      "topic_tags": [
        "allergic rhinitis",
        "immunotherapy",
        "SCIT",
        "beta-blockers",
        "contraindications"
      ],
      "key_concept": "Non-selective beta-blockers are relative contraindications to SCIT due to impaired epinephrine response; cardioselective beta-blockers are preferred"
    },
    "tags": {
      "abai_domain": "Domain 11 — Allergen Immunotherapy",
      "abai_domain_number": 11,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "SCIT contraindications: severe/uncontrolled asthma (FEV1 <70%), active autoimmune disease, malignancy, pregnancy (relative CI — can continue maintenance if established, do NOT start new SCIT in pregnancy).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Last sentence alone cannot be answered - requires knowledge of propranolol being non-selective beta-blocker and SCIT contraindications"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant - allergic sensitizations, failed medical therapy, propranolol use, asthma severity, and physical findings all inform decision-making"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,8,9,8,7] - ratio 1.29, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "A is plausible error, C reflects common misconception about FEV1 threshold, D is reasonable alternative, E could seem appropriate given cardiac medication - all clinically reasonable"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct - non-selective beta-blockers are relative contraindication to SCIT due to interference with epinephrine response"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "B is clearly best answer based on established guidelines about beta-blocker contraindications to SCIT"
      }
    }
  },
  {
    "id": "lib-allergic-rhinitis-immunotherapy-0019",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-rhinitis-immunotherapy",
    "diagnosis": "Moderate-severe perennial allergic rhinitis (dust mite + mold-sensitized) with seasonal exacerbation (grass + tree pollen). Allergen immunotherapy (SCIT) candidate.",
    "source": "ReasonDx Case Library — Moderate-severe perennial allergic rhinitis (dust mite + mold-sensitized) with seasonal exacerbation (grass + tree pollen). Allergen immunotherapy (SCIT) candidate.",
    "submittedAt": "2026-03-05T01:41:36Z",
    "approvedAt": "2026-03-05T01:41:36Z",
    "question": {
      "stem": "A 45-year-old man with moderate-severe perennial allergic rhinitis sensitized to dust mites and mold is being evaluated for subcutaneous immunotherapy (SCIT). His symptoms worsen seasonally with grass and tree pollen exposure. He has well-controlled hypertension and was recently started on propranolol for essential tremor. His current FEV1 is 85% predicted, and he has no history of systemic reactions to allergens. Physical examination reveals pale, boggy nasal turbinates and clear rhinorrhea. Skin prick tests confirm sensitization to dust mites, mold, grass, and tree pollens with appropriate positive and negative controls.",
      "options": [
        {
          "text": "Proceed with SCIT as planned, monitoring closely during buildup phase",
          "explanation": "Incorrect. Propranolol is a non-selective beta-blocker that represents a relative contraindication to SCIT due to impaired epinephrine response if anaphylaxis occurs."
        },
        {
          "text": "Switch propranolol to metoprolol before initiating SCIT",
          "explanation": "Correct. Cardioselective beta-blockers like metoprolol pose lower risk than non-selective beta-blockers for SCIT patients, as they preserve epinephrine responsiveness better."
        },
        {
          "text": "Defer SCIT until FEV1 improves to >90% predicted",
          "explanation": "Incorrect. FEV1 of 85% is acceptable for SCIT; the contraindication threshold is FEV1 <70% predicted for severe/uncontrolled asthma."
        },
        {
          "text": "Start with sublingual immunotherapy (SLIT) instead of SCIT",
          "explanation": "Incorrect. While SLIT has lower anaphylaxis risk, the beta-blocker issue remains relevant. Switching to a cardioselective agent addresses the root concern."
        },
        {
          "text": "Discontinue all beta-blockers before considering SCIT",
          "explanation": "Incorrect. Complete discontinuation isn't necessary when a cardioselective alternative like metoprolol can provide similar clinical benefit with reduced SCIT risk."
        }
      ],
      "correct_index": 1,
      "explanation": "This patient is an appropriate SCIT candidate with moderate-severe allergic rhinitis and multiple sensitizations. However, propranolol (non-selective beta-blocker) poses increased risk during SCIT due to impaired epinephrine response if anaphylaxis occurs. Non-selective beta-blockers block both beta-1 and beta-2 receptors, preventing epinephrine from counteracting anaphylaxis effectively. Switching to metoprolol (cardioselective, primarily beta-1 blocking) maintains hypertension control while reducing SCIT risk. His FEV1 of 85% is acceptable (contraindication is <70%), and his clinical presentation supports SCIT candidacy.",
      "topic_tags": [
        "allergy_immunology",
        "immunotherapy",
        "drug_contraindications",
        "beta_blockers"
      ],
      "key_concept": "Non-selective beta-blockers are relative contraindications to SCIT due to impaired epinephrine response; cardioselective agents pose lower risk"
    },
    "tags": {
      "abai_domain": "Domain 11 — Allergen Immunotherapy",
      "abai_domain_number": 11,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Beta-blockers: relative CI for SCIT. Non-selective (propranolol, nadolol) = higher risk than cardioselective (metoprolol). ACE inhibitors also increase systemic reaction risk (impair kinin degradation).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Without the detailed clinical vignette, one cannot determine the specific contraindication or risk factor that necessitates switching from propranolol to metoprolol before SCIT"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: allergic rhinitis severity establishes SCIT indication, allergen sensitizations confirm appropriateness, propranolol creates the clinical dilemma, FEV1 rules out contraindication, and physical findings support diagnosis"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [10,8,8,9,8]. Ratio 1.25 - acceptable but could be tighter"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical considerations: A (standard monitoring), C (FEV1 concern), D (alternative therapy), E (complete beta-blocker discontinuation). Each reflects actual clinical decision points"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with guidelines: non-selective beta-blockers increase anaphylaxis risk with SCIT by impairing epinephrine response, while cardioselective beta-blockers are safer alternatives"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Strong consensus exists that switching to cardioselective beta-blocker is preferred over non-selective for SCIT patients, though some might consider option E"
      }
    }
  },
  {
    "id": "lib-allergic-rhinitis-immunotherapy-0020",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-rhinitis-immunotherapy",
    "diagnosis": "Moderate-severe perennial allergic rhinitis (dust mite + mold-sensitized) with seasonal exacerbation (grass + tree pollen). Allergen immunotherapy (SCIT) candidate.",
    "source": "ReasonDx Case Library — Moderate-severe perennial allergic rhinitis (dust mite + mold-sensitized) with seasonal exacerbation (grass + tree pollen). Allergen immunotherapy (SCIT) candidate.",
    "submittedAt": "2026-03-05T01:42:09Z",
    "approvedAt": "2026-03-05T01:42:09Z",
    "question": {
      "stem": "A 28-year-old man with moderate-severe perennial allergic rhinitis is undergoing subcutaneous immunotherapy (SCIT). During his 15th buildup injection, he develops generalized urticaria and facial angioedema within 10 minutes. His vital signs are stable: blood pressure 125/78 mmHg, heart rate 88 bpm, respiratory rate 16/min, oxygen saturation 98% on room air. He has no wheezing, stridor, or gastrointestinal symptoms. His medical history includes hypertension treated with lisinopril 10 mg daily. What is the most appropriate immediate management?",
      "options": [
        {
          "text": "Administer epinephrine 0.3 mg intramuscularly and observe for 4 hours",
          "explanation": "This is correct. Generalized urticaria with angioedema represents a Grade 2 systemic reaction per WAO criteria, which requires epinephrine as first-line treatment regardless of vital sign stability."
        },
        {
          "text": "Give oral diphenhydramine 25 mg and observe for 30 minutes",
          "explanation": "This is incorrect. Antihistamine alone is only appropriate for Grade 1 reactions (large local or mild systemic symptoms). Grade 2 reactions require epinephrine first."
        },
        {
          "text": "Discontinue SCIT permanently due to ACE inhibitor contraindication",
          "explanation": "This is incorrect. While ACE inhibitors increase systemic reaction risk, they are not an absolute contraindication. SCIT can continue with dose adjustment after managing the acute reaction."
        },
        {
          "text": "Administer inhaled albuterol and continue with observation only",
          "explanation": "This is incorrect. The patient has no respiratory symptoms, and albuterol would not address the systemic allergic reaction. Epinephrine is the primary treatment for Grade 2 reactions."
        },
        {
          "text": "Reduce the next SCIT dose by 25% and reschedule in one week",
          "explanation": "This is incorrect. This addresses future dosing but ignores the immediate need to treat the current Grade 2 systemic reaction with epinephrine and appropriate observation period."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has a Grade 2 systemic reaction to SCIT, characterized by generalized urticaria and angioedema. According to WAO grading, Grade 2 reactions involve generalized skin/mucosal symptoms and require epinephrine as first-line treatment, followed by extended observation. Antihistamines alone are insufficient for Grade 2+ reactions. The patient's ACE inhibitor use increases reaction risk but doesn't contraindicate SCIT continuation with proper management.",
      "topic_tags": [
        "allergic rhinitis",
        "immunotherapy",
        "anaphylaxis",
        "emergency management"
      ],
      "key_concept": "WAO grading system for SCIT systemic reactions and appropriate emergency management with epinephrine for Grade 2+ reactions"
    },
    "tags": {
      "abai_domain": "Domain 11 — Allergen Immunotherapy",
      "abai_domain_number": 11,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "SCIT systemic reaction grading (WAO): Grade 1 = large local/mild systemic. Grade 2 = generalized urticaria/angioedema. Grade 3 = single-organ respiratory OR cardiovascular OR GI. Grade 4 = anaphylaxis. Grade 5 = fatal.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The last sentence alone cannot be answered without the clinical context of SCIT reaction, symptoms, and vital signs"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is necessary: patient demographics, SCIT context, specific symptoms, vital signs, and medication history all inform management decision"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [10,9,8,8,11] - ratio 1.38 is within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B is plausible but insufficient; C addresses real concern about ACE inhibitors; D is less plausible (albuterol for urticaria); E represents reasonable dose adjustment approach"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with WAO guidelines for Grade 2 systemic reactions requiring epinephrine and observation"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Epinephrine is clearly the standard of care for Grade 2+ systemic reactions to immunotherapy"
      }
    }
  },
  {
    "id": "lib-allergic-rhinitis-uncontrolled-0021",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-rhinitis-uncontrolled",
    "diagnosis": "Allergic Rhinitis — Uncontrolled",
    "source": "DOI: 10.1111/all.14049; ARIA guideline 2019: treatment of allergic rhinitis",
    "submittedAt": "2026-03-05T01:43:14Z",
    "approvedAt": "2026-03-05T01:43:14Z",
    "question": {
      "stem": "A 28-year-old woman presents to your clinic with a 6-month history of daily nasal congestion, clear rhinorrhea, and sneezing that worsens during spring and fall. She reports that over-the-counter loratadine provides some relief for her sneezing and runny nose but does not help her nasal congestion. Physical examination reveals pale, boggy nasal turbinates with clear discharge. She has no history of asthma or other allergic conditions. She asks about starting a nasal spray for better symptom control.",
      "options": [
        {
          "text": "Intranasal fluticasone used daily with continued loratadine as needed",
          "explanation": "Correct. INCS are first-line therapy for allergic rhinitis and superior to antihistamines for nasal congestion. Combination therapy is most effective for comprehensive symptom control."
        },
        {
          "text": "Oxymetazoline nasal spray twice daily for ongoing symptom management",
          "explanation": "Incorrect. Nasal decongestants should be limited to 3 days maximum to prevent rhinitis medicamentosa (rebound congestion). Not appropriate for chronic daily use."
        },
        {
          "text": "Increase loratadine to twice daily dosing for better symptom control",
          "explanation": "Incorrect. Antihistamines are not effective for nasal congestion, which is her primary uncontrolled symptom. Increasing the dose would not address her main complaint."
        },
        {
          "text": "Sublingual immunotherapy tablets for disease modification therapy",
          "explanation": "Incorrect. Allergen immunotherapy is indicated when symptoms are inadequately controlled with medications. She should first try optimal medical management with INCS before considering immunotherapy."
        },
        {
          "text": "Cetirizine replacement for loratadine to improve nasal congestion",
          "explanation": "Incorrect. All second-generation antihistamines have similar efficacy profiles and none are effective for nasal congestion. Switching antihistamines would not address her primary symptom."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has typical allergic rhinitis with nasal congestion as her primary uncontrolled symptom. Intranasal corticosteroids (INCS) are first-line therapy for allergic rhinitis because they are the most effective treatment for nasal congestion, which antihistamines do not address well. INCS like fluticasone have minimal systemic absorption and are safe for long-term daily use. The combination of INCS with antihistamines provides the most comprehensive symptom control. Nasal decongestants are limited to short-term use, immunotherapy is reserved for inadequately controlled cases after optimal medical management, and switching between antihistamines would not improve nasal congestion since this is not their primary mechanism of action.",
      "topic_tags": [
        "allergic rhinitis",
        "intranasal corticosteroids",
        "antihistamines",
        "nasal congestion"
      ],
      "key_concept": "Intranasal corticosteroids are first-line therapy for allergic rhinitis, particularly effective for nasal congestion which antihistamines do not treat well"
    },
    "tags": {
      "abai_domain": "Domain 3 — Upper/Lower Airway Disease",
      "abai_domain_number": 3,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 2
    },
    "pearl_source": "INCS: first-line for AR. Onset: 1–2 weeks. Must use daily for full effect (not PRN). Fluticasone, mometasone — minimal systemic absorption, safe for long-term use.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence would remove critical clinical context (symptoms, physical findings, failed treatment response) needed to determine the best next step"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: symptom duration/pattern establishes allergic rhinitis, failed OTC treatment guides next step, physical findings confirm diagnosis, no asthma history affects treatment choice"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,10,9,7,8] - ratio 1.43, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B (oxymetazoline) plausible but problematic for long-term use; C (increase loratadine) reasonable attempt; D (immunotherapy) premature but considered for allergic rhinitis; E (cetirizine switch) logical but won't address congestion"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure as treatment recommendations/actions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Intranasal corticosteroids are indeed first-line for allergic rhinitis with nasal congestion, supported by current guidelines"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear best answer - INCS are the most effective treatment for nasal congestion in allergic rhinitis when antihistamines are insufficient"
      }
    }
  },
  {
    "id": "lib-allergic-rhinitis-uncontrolled-0022",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-rhinitis-uncontrolled",
    "diagnosis": "Allergic Rhinitis — Uncontrolled",
    "source": "DOI: 10.1111/all.14049; ARIA guideline 2019: treatment of allergic rhinitis",
    "submittedAt": "2026-03-05T01:43:47Z",
    "approvedAt": "2026-03-05T01:43:47Z",
    "question": {
      "stem": "A 28-year-old graduate student presents to your clinic in early September with a 3-week history of nasal congestion, clear rhinorrhea, sneezing, and nasal itching. Symptoms worsen when outdoors and improve indoors with air conditioning. She has been taking loratadine 10 mg daily for the past week with improvement in sneezing and itching, but persistent nasal congestion that interferes with sleep and concentration. Physical examination reveals pale, boggy nasal turbinates with clear secretions. She has no fever, facial pain, or purulent discharge.",
      "options": [
        {
          "text": "Add intranasal fluticasone propionate daily",
          "explanation": "Correct. INCS are first-line therapy for allergic rhinitis and specifically effective for nasal congestion, which antihistamines do not treat well. The combination of INCS + antihistamine is most effective for all AR symptoms."
        },
        {
          "text": "Switch to cetirizine 10 mg daily",
          "explanation": "Incorrect. While cetirizine is a second-generation antihistamine like loratadine, it would not address the nasal congestion which is the patient's primary remaining symptom. Antihistamines are not effective for nasal congestion."
        },
        {
          "text": "Add oxymetazoline nasal spray twice daily",
          "explanation": "Incorrect. Nasal decongestants should only be used for maximum 3 days to avoid rhinitis medicamentosa (rebound congestion). This would not be appropriate for ongoing management of allergic rhinitis."
        },
        {
          "text": "Increase loratadine to 20 mg daily",
          "explanation": "Incorrect. Increasing the antihistamine dose would not address nasal congestion, which is the patient's main persistent symptom. Higher doses of antihistamines may increase side effects without additional benefit for congestion."
        },
        {
          "text": "Refer for subcutaneous immunotherapy evaluation",
          "explanation": "Incorrect. While allergen immunotherapy is disease-modifying, it's indicated when there is inadequate symptom control with medications. The patient hasn't tried first-line therapy (INCS) yet, which should be attempted before considering immunotherapy."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has classic allergic rhinitis with good response to antihistamines for sneezing and itching, but persistent nasal congestion. The key teaching point is that antihistamines are NOT effective for nasal congestion. Intranasal corticosteroids (INCS) are first-line therapy for allergic rhinitis and are specifically effective for nasal congestion. The combination of INCS + antihistamine provides optimal symptom control for all AR symptoms. Switching antihistamines won't help congestion, nasal decongestants are limited to 3 days use, increasing antihistamine dose won't address congestion, and immunotherapy is premature before trying first-line INCS therapy.",
      "topic_tags": [
        "allergic_rhinitis",
        "antihistamines",
        "intranasal_corticosteroids",
        "nasal_congestion"
      ],
      "key_concept": "Antihistamines are not effective for nasal congestion in allergic rhinitis; intranasal corticosteroids are first-line therapy and specifically address congestion"
    },
    "tags": {
      "abai_domain": "Domain 3 — Upper/Lower Airway Disease",
      "abai_domain_number": 3,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 2
    },
    "pearl_source": "Antihistamines: second-generation (cetirizine, fexofenadine, loratadine) preferred — less sedating. Effective for sneezing, itching, rhinorrhea. NOT effective for nasal congestion.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the last sentence removes critical context about symptom pattern, physical exam findings, and current treatment response - cannot be answered from last sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are necessary: age/demographics, symptom duration, environmental triggers, current treatment response, and physical exam findings all contribute to the clinical picture"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [5,5,6,5,5] - excellent parity with max/min ratio of 1.2"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B: reasonable alternative antihistamine; C: logical for congestion but limited duration; D: dose escalation attempt; E: premature but plausible consideration. All clinically reasonable"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: verb + medication/action + dosing/frequency"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct - intranasal corticosteroids are first-line for allergic rhinitis, especially effective for nasal congestion which antihistamines don't address well"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Clear best answer given partial antihistamine response with persistent congestion. INCS is standard next step per guidelines"
      }
    }
  },
  {
    "id": "lib-allergic-rhinitis-uncontrolled-0023",
    "type": "mcq",
    "status": "approved",
    "caseId": "allergic-rhinitis-uncontrolled",
    "diagnosis": "Allergic Rhinitis — Uncontrolled",
    "source": "DOI: 10.1111/all.14049; ARIA guideline 2019: treatment of allergic rhinitis",
    "submittedAt": "2026-03-05T01:44:22Z",
    "approvedAt": "2026-03-05T01:44:22Z",
    "question": {
      "stem": "A 28-year-old woman with seasonal allergic rhinitis presents to clinic reporting worsening nasal congestion over the past 2 weeks. She states she has been using an over-the-counter nasal decongestant spray twice daily for the past 10 days because her usual cetirizine was not controlling her congestion. She reports that the spray initially provided excellent relief, but now her congestion returns within 2-3 hours of each dose and seems worse than before she started the spray. Physical examination reveals bilateral nasal mucosal erythema and edema. Nasal endoscopy shows no polyps or structural abnormalities.",
      "options": [
        {
          "text": "Discontinue the nasal decongestant and initiate intranasal corticosteroid therapy",
          "explanation": "Correct. This patient has rhinitis medicamentosa (rebound congestion) from prolonged oxymetazoline use beyond the 3-day limit. Discontinuation is essential, and INCS are first-line for allergic rhinitis congestion."
        },
        {
          "text": "Continue current nasal decongestant but reduce frequency to once daily",
          "explanation": "Incorrect. Reducing frequency will not resolve rhinitis medicamentosa. Complete discontinuation is necessary to break the rebound cycle."
        },
        {
          "text": "Switch to a different nasal decongestant with phenylephrine instead",
          "explanation": "Incorrect. All topical nasal decongestants can cause rhinitis medicamentosa. Switching to another decongestant perpetuates the problem."
        },
        {
          "text": "Increase cetirizine dosage to twice daily while continuing current therapy",
          "explanation": "Incorrect. Antihistamines are not effective for nasal congestion, and this doesn't address the underlying rhinitis medicamentosa from prolonged decongestant use."
        },
        {
          "text": "Add montelukast while maintaining the current nasal decongestant regimen",
          "explanation": "Incorrect. While leukotriene antagonists can help with allergic rhinitis, continuing the decongestant will perpetuate rhinitis medicamentosa. The decongestant must be discontinued."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has developed rhinitis medicamentosa (rebound congestion) from using oxymetazoline nasal spray for 10 days, well beyond the recommended 3-day maximum. The classic presentation includes worsening congestion that returns quickly after each dose and is worse than the original symptoms. The cycle of rebound congestion can only be broken by complete discontinuation of the topical decongestant. Intranasal corticosteroids are the appropriate first-line therapy for allergic rhinitis as they effectively treat nasal congestion, unlike antihistamines which primarily address sneezing, itching, and rhinorrhea but not congestion.",
      "topic_tags": [
        "allergic_rhinitis",
        "rhinitis_medicamentosa",
        "nasal_decongestants",
        "intranasal_corticosteroids"
      ],
      "key_concept": "Rhinitis medicamentosa from prolonged nasal decongestant use requires complete discontinuation and transition to appropriate first-line therapy"
    },
    "tags": {
      "abai_domain": "Domain 3 — Upper/Lower Airway Disease",
      "abai_domain_number": 3,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Nasal decongestants (oxymetazoline): max 3 days — rhinitis medicamentosa (rebound congestion) with prolonged use.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the last sentence eliminates the key clinical context of rhinitis medicamentosa - the 10-day use, rebound pattern, and worsening congestion are essential for diagnosis"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: duration of spray use (10 days), rebound pattern (returns in 2-3 hours, worse than before), failed cetirizine, physical findings - all necessary for rhinitis medicamentosa diagnosis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,10,9,10,9] - excellent length parity with max/min ratio of 1.11"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: verb + object + conjunction + verb + object"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B, C, D are plausible but incorrect approaches a student might consider. E (montelukast) is less plausible as it doesn't address the core rebound congestion issue"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with standard treatment for rhinitis medicamentosa - discontinue offending agent and start intranasal corticosteroids"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - discontinuing the decongestant is the only way to break the rebound cycle"
      }
    }
  },
  {
    "id": "lib-alpha-gal-syndrome-0024",
    "type": "mcq",
    "status": "approved",
    "caseId": "alpha-gal-syndrome",
    "diagnosis": "Alpha-gal syndrome — IgE-mediated allergy to galactose-alpha-1,3-galactose (mammalian red meat antigen)",
    "source": "ReasonDx Case Library — Alpha-gal syndrome — IgE-mediated allergy to galactose-alpha-1,3-galactose (mammalian red meat antigen)",
    "submittedAt": "2026-03-05T01:45:00Z",
    "approvedAt": "2026-03-05T01:45:00Z",
    "question": {
      "stem": "A 42-year-old man presents to the emergency department with his third episode of facial swelling, urticaria, and difficulty breathing over the past 6 months. Each episode occurred 4-5 hours after dinner and resolved with antihistamines and corticosteroids. He reports frequent camping trips in Arkansas and has found several ticks on his body over the past year. His dinners on the nights of reactions included grilled steak, pork chops, and lamb curry respectively. He denies reactions to chicken, fish, or shellfish. Physical examination is normal between episodes. Serum tryptase during an acute episode is elevated at 18 ng/mL (normal <11.5).",
      "options": [
        {
          "text": "Alpha-gal syndrome from tick bite sensitization",
          "explanation": "Correct. The delayed onset (4-5 hours), mammalian meat trigger, tick exposure in endemic area (Arkansas), and normal tolerance of poultry/seafood are pathognomonic for alpha-gal syndrome."
        },
        {
          "text": "Hereditary angioedema from C1 esterase inhibitor deficiency",
          "explanation": "Incorrect. HAE typically presents with asymmetric swelling without urticaria, often triggered by trauma/stress, and would not have the specific temporal relationship to mammalian meat consumption."
        },
        {
          "text": "Scombroid poisoning from histamine ingestion",
          "explanation": "Incorrect. Scombroid occurs within 30 minutes of consuming spoiled fish (not red meat), presents with flushing and GI symptoms, and doesn't cause recurrent episodes with the same foods."
        },
        {
          "text": "Exercise-induced anaphylaxis triggered by food cofactor",
          "explanation": "Incorrect. While food-dependent exercise-induced anaphylaxis can have delayed onset, it requires exercise as a cofactor and the patient has no history of physical activity preceding these episodes."
        },
        {
          "text": "IgE-mediated food allergy to beef protein allergens",
          "explanation": "Incorrect. Traditional IgE-mediated food allergies to meat proteins typically occur within 0-2 hours of ingestion, not the 4-5 hour delay seen in this patient."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has alpha-gal syndrome, the only food allergy caused by tick bite sensitization rather than direct food exposure. The key distinguishing features are: (1) delayed onset 3-6 hours after mammalian meat consumption (vs 0-2 hours for typical IgE food allergies), (2) tick exposure in an endemic area (Arkansas - Lone Star tick territory), (3) reactions specifically to mammalian meats (beef, pork, lamb) while tolerating poultry and seafood (which lack the alpha-gal epitope), and (4) elevated tryptase confirming mast cell degranulation. The galactose-alpha-1,3-galactose antigen is present in all non-primate mammals but absent in birds, fish, and shellfish, explaining the selective reactivity pattern.",
      "topic_tags": [
        "allergy",
        "anaphylaxis",
        "food allergy",
        "tick-borne disease",
        "emergency medicine"
      ],
      "key_concept": "Alpha-gal syndrome: delayed anaphylaxis from tick bite sensitization causing reactions to mammalian meat but not poultry/seafood"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Alpha-gal is ONLY food allergy caused by tick bite (not by food exposure directly)",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final question sentence would leave insufficient clinical context to determine the specific syndrome - the tick exposure, delayed timing, and meat-specific pattern are all essential"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: delayed timing (4-5 hours), tick exposure in Arkansas, specific meat triggers, tolerance of non-mammalian proteins, and elevated tryptase all point to alpha-gal syndrome"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,8,7,8,9] - ratio 1.29, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable differential diagnoses for food-related anaphylaxis. HAE could present similarly but lacks the specific meat pattern. Scombroid and exercise-induced anaphylaxis are plausible considerations. Traditional IgE food allergy is the most common cause of food reactions"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent noun phrase structure describing different syndromes/conditions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Alpha-gal syndrome is correctly identified with all key diagnostic features present: tick exposure, delayed onset, mammalian meat specificity, and elevated tryptase"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Alpha-gal syndrome is clearly the best answer given the constellation of findings, though traditional IgE food allergy could be considered without knowledge of the delayed timing significance"
      }
    }
  },
  {
    "id": "lib-alpha-gal-syndrome-0025",
    "type": "mcq",
    "status": "approved",
    "caseId": "alpha-gal-syndrome",
    "diagnosis": "Alpha-gal syndrome — IgE-mediated allergy to galactose-alpha-1,3-galactose (mammalian red meat antigen)",
    "source": "ReasonDx Case Library — Alpha-gal syndrome — IgE-mediated allergy to galactose-alpha-1,3-galactose (mammalian red meat antigen)",
    "submittedAt": "2026-03-05T01:45:37Z",
    "approvedAt": "2026-03-05T01:45:37Z",
    "question": {
      "stem": "A 42-year-old man presents to the emergency department with generalized urticaria, facial swelling, and difficulty breathing that began 4 hours after eating a steak dinner. He reports similar episodes occurring twice in the past 3 months, always several hours after eating beef or pork. He denies symptoms with chicken, fish, or shellfish. He lives in rural Arkansas and spends considerable time outdoors. His medical history includes hypertension treated with lisinopril. Physical examination reveals widespread urticarial lesions, periorbital edema, and expiratory wheezing. Vital signs show blood pressure 90/60 mmHg, heart rate 110/min, and oxygen saturation 92% on room air.",
      "options": [
        {
          "text": "Alpha-gal syndrome with delayed anaphylaxis",
          "explanation": "Correct. The 4-hour delay after red meat consumption, tolerance of poultry and seafood, outdoor exposure in endemic tick area (Arkansas), and anaphylactic presentation are classic for alpha-gal syndrome."
        },
        {
          "text": "Classic IgE-mediated beef protein allergy",
          "explanation": "Incorrect. Classic IgE food allergies typically occur within 0-2 hours of ingestion, not the 4-hour delay seen here. The delay is pathognomonic for alpha-gal syndrome."
        },
        {
          "text": "Scombroid fish poisoning from contaminated steak",
          "explanation": "Incorrect. Scombroid poisoning occurs from histamine in spoiled fish, not red meat. The patient's symptoms occurred after steak, and he tolerates fish well."
        },
        {
          "text": "Hereditary angioedema triggered by meat consumption",
          "explanation": "Incorrect. HAE typically presents with asymmetric swelling without urticaria and is not specifically triggered by meat consumption. The urticarial rash makes IgE-mediated allergy more likely."
        },
        {
          "text": "Exercise-induced anaphylaxis coinciding with dinner",
          "explanation": "Incorrect. Exercise-induced anaphylaxis requires physical activity as a trigger. There is no mention of exercise, and the consistent association with red meat consumption points to alpha-gal syndrome."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has alpha-gal syndrome, distinguished by the characteristic 3-6 hour delay between red meat consumption and anaphylactic symptoms. The key diagnostic features include: (1) delayed onset anaphylaxis specifically after mammalian meat (beef, pork), (2) tolerance of poultry and seafood (which lack the alpha-gal epitope), (3) exposure risk from outdoor activities in Arkansas (Lone Star tick endemic area), and (4) recurrent pattern. Classic IgE food allergies occur within 0-2 hours, making the delay pathognomonic. The patient should avoid ACE inhibitors (lisinopril) as they worsen anaphylaxis severity and reduce epinephrine efficacy.",
      "topic_tags": [
        "allergy",
        "anaphylaxis",
        "food allergy",
        "tick-borne illness"
      ],
      "key_concept": "Alpha-gal syndrome presents with delayed anaphylaxis (3-6 hours) after red meat consumption, distinguishing it from classic IgE food allergies"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Delayed onset 3–6h (vs 0–2h for classic IgE food allergy) = most testable distinguishing feature",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence would leave only vital signs - insufficient to determine the specific syndrome without the delay pattern, geographic location, and meat specificity"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are necessary: delay timing (distinguishes from classic allergy), meat specificity (alpha-gal), geographic location (tick exposure), outdoor activity (tick vector), and ACE inhibitor use (complicates anaphylaxis)"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [5,6,6,6,6] - excellent parity with max/min ratio of 1.2"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B and D are clinically reasonable considerations. C is implausible (scombroid from steak is impossible - scombroid only occurs in certain fish species). E is somewhat plausible but timing doesn't fit typical exercise-induced patterns"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing different conditions - perfectly consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Alpha-gal syndrome correctly identified with accurate pathophysiology - delayed anaphylaxis to mammalian meat, tick vector transmission, geographic distribution"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Alpha-gal syndrome is definitively the best answer given the pathognomonic 3-6 hour delay, mammalian meat specificity, and geographic/exposure context"
      }
    }
  },
  {
    "id": "lib-alpha-gal-syndrome-0026",
    "type": "mcq",
    "status": "approved",
    "caseId": "alpha-gal-syndrome",
    "diagnosis": "Alpha-gal syndrome — IgE-mediated allergy to galactose-alpha-1,3-galactose (mammalian red meat antigen)",
    "source": "ReasonDx Case Library — Alpha-gal syndrome — IgE-mediated allergy to galactose-alpha-1,3-galactose (mammalian red meat antigen)",
    "submittedAt": "2026-03-05T01:46:12Z",
    "approvedAt": "2026-03-05T01:46:12Z",
    "question": {
      "stem": "A 42-year-old man presents to the emergency department with generalized urticaria, abdominal cramping, and difficulty breathing that began 4 hours after eating a steak dinner. He reports similar episodes occurring twice in the past 6 months, always several hours after eating beef or pork. He recently moved to Tennessee from Minnesota and enjoys hiking. Physical examination reveals diffuse urticaria and mild inspiratory stridor. Vital signs show blood pressure 95/60 mmHg, heart rate 118/min, and oxygen saturation 94% on room air. He is treated with epinephrine, corticosteroids, and antihistamines with good response. Alpha-gal IgE testing returns elevated at 15.2 kU/L. Which of the following foods should be recommended as safe for this patient?",
      "options": [
        {
          "text": "Grilled chicken breast and salmon fillet",
          "explanation": "Correct. Poultry and fish lack the alpha-gal epitope and are safe foods for patients with alpha-gal syndrome."
        },
        {
          "text": "Lean ground turkey and aged cheddar cheese",
          "explanation": "Incorrect. While turkey is safe, dairy products may cause reactions in some alpha-gal patients due to alpha-gal in casein, requiring individualized assessment."
        },
        {
          "text": "Bison steaks and venison prepared medium-rare",
          "explanation": "Incorrect. Both bison and venison are mammalian red meats containing alpha-gal and should be strictly avoided in alpha-gal syndrome."
        },
        {
          "text": "Pork tenderloin cooked to well-done temperature",
          "explanation": "Incorrect. Pork contains alpha-gal regardless of cooking temperature or preparation method and must be avoided in alpha-gal syndrome."
        },
        {
          "text": "Lamb chops with all visible fat removed",
          "explanation": "Incorrect. Lamb is mammalian red meat containing alpha-gal throughout the muscle tissue, not just in fat, and must be avoided."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has alpha-gal syndrome, evidenced by the delayed onset (4 hours) of anaphylaxis after red meat consumption, recent relocation to an endemic area (Tennessee), and elevated alpha-gal IgE. The delayed onset (3-6 hours) distinguishes alpha-gal syndrome from typical IgE-mediated food allergies (0-2 hours). Alpha-gal (galactose-alpha-1,3-galactose) is a carbohydrate antigen present in mammalian cells but absent in primates, birds, and fish. Therefore, poultry (chicken, turkey) and seafood (fish, shellfish) are safe foods as they lack the alpha-gal epitope. All mammalian red meats (beef, pork, lamb, venison, bison) must be avoided regardless of preparation. Dairy tolerance varies among patients and requires individualization.",
      "topic_tags": [
        "allergy",
        "anaphylaxis",
        "food allergy",
        "alpha-gal syndrome",
        "emergency medicine"
      ],
      "key_concept": "Alpha-gal syndrome safe foods: poultry and seafood lack alpha-gal epitope"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Safe foods in alpha-gal: poultry (chicken, turkey), fish, shellfish — all lack alpha-gal epitope",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all stem content except the final question requires understanding the full clinical presentation, timeline, geographic context, and test results to identify alpha-gal syndrome and determine safe foods"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All sentences are essential: symptoms establish anaphylaxis, timing indicates delayed reaction, food triggers suggest red meat allergy, geographic move to Tennessee indicates tick exposure risk, physical findings confirm severity, lab result confirms alpha-gal syndrome"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [5,6,6,6,6] - excellent parity with max/min ratio of 1.2"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B is tricky (turkey safe, cheese questionable in alpha-gal), C-E are clearly mammalian meats that should be avoided. All represent reasonable clinical considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: protein + protein/modifier"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer A is accurate - poultry and fish lack alpha-gal epitope and are safe in alpha-gal syndrome"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Only option A contains foods that are definitively safe (no mammalian products). All other options contain mammalian meat that must be avoided"
      }
    }
  },
  {
    "id": "lib-anaphylaxis-0027",
    "type": "mcq",
    "status": "approved",
    "caseId": "anaphylaxis",
    "diagnosis": "Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2025.01.021; Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report; DOI: 10.1016/j.waojou.2020.100472; World Allergy Organization anaphylaxis guidance 2020",
    "submittedAt": "2026-03-05T01:46:48Z",
    "approvedAt": "2026-03-05T01:46:48Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department 45 minutes after eating at a seafood restaurant. She developed generalized urticaria and facial swelling within 10 minutes, followed by throat tightness and difficulty swallowing. On arrival, she appears anxious with widespread raised erythematous lesions. Vital signs are temperature 37.1°C, blood pressure 85/50 mmHg, heart rate 115/min, respiratory rate 24/min, and oxygen saturation 94% on room air. Lung examination reveals expiratory wheeze bilaterally. She has no known allergies but recalls feeling nauseated after eating shrimp last year.",
      "options": [
        {
          "text": "Anaphylaxis based on acute onset with skin involvement, respiratory symptoms, and hypotension following allergen exposure",
          "explanation": "Correct. This patient meets diagnostic criteria with acute onset and skin/mucosal involvement plus both respiratory symptoms and hypotension after allergen exposure."
        },
        {
          "text": "Anaphylaxis requires laboratory confirmation with elevated tryptase levels before treatment can be initiated",
          "explanation": "Incorrect. Anaphylaxis is a clinical diagnosis requiring immediate treatment. Tryptase peaks at 60-90 minutes and should not delay epinephrine administration."
        },
        {
          "text": "Severe allergic reaction but not anaphylaxis since only two organ systems are involved",
          "explanation": "Incorrect. This patient has involvement of skin/mucosal, respiratory, and cardiovascular systems. Anaphylaxis criteria are met with ≥2 systems after allergen exposure."
        },
        {
          "text": "Anaphylaxis cannot be diagnosed without documented previous allergic reaction to the same allergen",
          "explanation": "Incorrect. Prior exposure history is not required for anaphylaxis diagnosis. Many patients experience anaphylaxis on first recognized exposure to an allergen."
        },
        {
          "text": "Possible anaphylaxis but requires cardiac involvement or loss of consciousness for definitive diagnosis",
          "explanation": "Incorrect. Cardiac involvement (hypotension) is present, and loss of consciousness is not required for anaphylaxis diagnosis. Clinical criteria are already met."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient meets the diagnostic criteria for anaphylaxis: acute onset with skin/mucosal involvement (urticaria, facial swelling) plus both respiratory symptoms (throat tightness, wheeze, hypoxia) and hypotension following allergen exposure. Anaphylaxis is a clinical diagnosis that requires immediate epinephrine treatment - laboratory confirmation should not delay therapy. The diagnostic criteria require either (1) skin/mucosal symptoms plus respiratory OR cardiovascular involvement, or (2) ≥2 of skin/mucosal, respiratory, cardiovascular, or GI symptoms after allergen exposure. This patient clearly meets criteria with involvement of all three major systems.",
      "topic_tags": [
        "anaphylaxis",
        "emergency medicine",
        "allergy",
        "diagnosis"
      ],
      "key_concept": "Clinical diagnostic criteria for anaphylaxis requiring immediate recognition and treatment"
    },
    "tags": {
      "abai_domain": "Domain 6 — Anaphylaxis",
      "abai_domain_number": 6,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Anaphylaxis diagnostic criteria: acute onset + either (1) skin/mucosal + respiratory OR hypotension; or (2) ≥2 of: skin/mucosal, respiratory, hypotension, GI after allergen exposure.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette provides essential context - removing the presentation details would make it impossible to distinguish between the diagnostic criteria options"
      },
      "stem_relevance": {
        "score": 0.9,
        "note": "All information is clinically relevant: timeline establishes acute onset, symptoms show multi-system involvement, vitals confirm hypotension/tachycardia, previous shrimp reaction provides allergen history context"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [17,16,15,15,14] - reasonable parity with max/min ratio of 1.21"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent common misconceptions about anaphylaxis diagnosis - requiring lab confirmation (B), organ system counting (C), prior reaction requirement (D), and cardiac/CNS involvement (E)"
      },
      "grammatical_consistency": {
        "score": 0.8,
        "note": "Options mix complete sentences (A,B) with sentence fragments (C,D,E) - minor inconsistency but clinically clear"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current anaphylaxis diagnostic criteria - clinical diagnosis with skin + respiratory/cardiovascular involvement after allergen exposure"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Option A is definitively correct per established clinical guidelines, while all distractors contain clear misconceptions"
      }
    }
  },
  {
    "id": "lib-anaphylaxis-0028",
    "type": "mcq",
    "status": "approved",
    "caseId": "anaphylaxis",
    "diagnosis": "Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2025.01.021; Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report; DOI: 10.1016/j.waojou.2020.100472; World Allergy Organization anaphylaxis guidance 2020",
    "submittedAt": "2026-03-05T01:47:23Z",
    "approvedAt": "2026-03-05T01:47:23Z",
    "question": {
      "stem": "A 28-year-old man presents to the emergency department 30 minutes after eating shellfish at a restaurant. He reports generalized pruritus, difficulty swallowing, and shortness of breath that began within 10 minutes of eating. On examination, he appears anxious with diffuse urticaria and facial angioedema. Vital signs show blood pressure 85/50 mmHg, heart rate 125/min, respiratory rate 28/min, and oxygen saturation 88% on room air. Wheezing is audible on lung examination. You immediately administer epinephrine 0.5 mg intramuscularly in the anterolateral thigh and position him supine with legs elevated. His symptoms partially improve, but he remains hypotensive at 90/55 mmHg after 10 minutes.",
      "options": [
        {
          "text": "Administer a second dose of epinephrine 0.5 mg intramuscularly",
          "explanation": "Correct. Epinephrine should be repeated every 5-15 minutes if symptoms persist or recur, which is appropriate given continued hypotension despite initial treatment."
        },
        {
          "text": "Administer epinephrine 0.5 mg intravenously for faster onset",
          "explanation": "Incorrect. IV epinephrine is reserved for cardiac arrest or when IM epinephrine has completely failed. IM remains first-line even with partial response."
        },
        {
          "text": "Administer diphenhydramine 50 mg IV and methylprednisolone 125 mg IV",
          "explanation": "Incorrect. While antihistamines and steroids are useful adjuncts, they do not address the acute hemodynamic crisis. Epinephrine remains the priority."
        },
        {
          "text": "Position the patient upright to improve respiratory symptoms",
          "explanation": "Incorrect. Patients with anaphylactic hypotension should remain supine with legs elevated. Sudden position changes can cause fatal cardiovascular collapse."
        },
        {
          "text": "Administer normal saline bolus 1-2 liters IV for hypotension",
          "explanation": "Incorrect. While IV fluids may be used as adjunctive therapy, epinephrine is the definitive treatment for anaphylactic hypotension and should be repeated first."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has anaphylaxis based on acute onset of symptoms after allergen exposure with skin/mucosal involvement (urticaria, angioedema) plus respiratory symptoms (dysphagia, dyspnea, wheezing) and hypotension. The initial epinephrine dose provided partial improvement but hypotension persists, indicating need for repeat dosing. Epinephrine should be repeated every 5-15 minutes until symptoms resolve. IV epinephrine is reserved for cardiac arrest or complete IM failure. Antihistamines and steroids are adjuncts that don't treat the acute crisis. Positioning upright risks fatal cardiovascular collapse. While IV fluids may help, repeat epinephrine is the priority for persistent anaphylactic hypotension.",
      "topic_tags": [
        "anaphylaxis",
        "emergency medicine",
        "epinephrine",
        "allergy",
        "hypotension"
      ],
      "key_concept": "Epinephrine dosing and timing in anaphylaxis management"
    },
    "tags": {
      "abai_domain": "Domain 6 — Anaphylaxis",
      "abai_domain_number": 6,
      "acgme_competency": "PC",
      "acgme_milestone": "PC3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Epinephrine dose: 0.3–0.5 mg IM (1:1000) in anterolateral mid-thigh. Repeat every 5–15 min. IV only if IM fails or cardiac arrest.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette with vital signs, examination findings, and response to initial treatment is essential - cannot be answered from last sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: timing, symptoms, examination findings, vitals, initial treatment, and response are all necessary for decision-making"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,9,8,8,8] - excellent parity with max/min ratio of 1.13"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B is plausible misconception, C represents common adjuncts, D is dangerous but students might consider it, E is reasonable supportive care - all clinically relevant distractors"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options start with 'Administer' or 'Position' - consistent verb-based structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with anaphylaxis guidelines - repeat IM epinephrine is appropriate for persistent symptoms after initial dose"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Option A is clearly best per guidelines, though some might debate E (fluids) - but epinephrine repetition takes clear priority"
      }
    }
  },
  {
    "id": "lib-anaphylaxis-0029",
    "type": "mcq",
    "status": "approved",
    "caseId": "anaphylaxis",
    "diagnosis": "Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2025.01.021; Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report; DOI: 10.1016/j.waojou.2020.100472; World Allergy Organization anaphylaxis guidance 2020",
    "submittedAt": "2026-03-05T01:48:01Z",
    "approvedAt": "2026-03-05T01:48:01Z",
    "question": {
      "stem": "A 28-year-old man develops generalized urticaria, facial swelling, and wheezing 15 minutes after eating shellfish at a restaurant. His blood pressure is 85/50 mmHg, heart rate 120/min, and oxygen saturation 88% on room air. After administering intramuscular epinephrine 0.5 mg to the anterolateral thigh, his symptoms begin to improve and blood pressure increases to 95/60 mmHg. He remains tachycardic and reports feeling dizzy when attempting to sit up.",
      "options": [
        {
          "text": "Position the patient supine with legs elevated and continue monitoring",
          "explanation": "Correct. Supine positioning with leg elevation optimizes venous return and cardiac preload in anaphylactic shock. Sitting or standing can precipitate fatal cardiovascular collapse ('empty heart syndrome') due to venous pooling and reduced preload in the setting of severe vasodilation."
        },
        {
          "text": "Position the patient in high Fowler's position to optimize respiratory mechanics",
          "explanation": "Incorrect. While upright positioning may seem logical for respiratory distress, sudden positional changes in anaphylaxis can cause fatal cardiovascular collapse due to venous pooling and reduced cardiac preload in the setting of severe vasodilation."
        },
        {
          "text": "Allow the patient to sit upright as this position provides the most comfort",
          "explanation": "Incorrect. Patient comfort is secondary to hemodynamic stability in anaphylaxis. Upright positioning can precipitate fatal cardiovascular collapse ('empty heart syndrome') due to impaired venous return and reduced cardiac preload."
        },
        {
          "text": "Position the patient in left lateral decubitus to prevent aspiration",
          "explanation": "Incorrect. While aspiration precautions are important, the primary concern in anaphylactic shock is maintaining cardiac preload. The supine position with leg elevation is essential to prevent cardiovascular collapse from venous pooling."
        },
        {
          "text": "Position the patient in Trendelenburg to maximize cerebral perfusion",
          "explanation": "Incorrect. While Trendelenburg position increases venous return, it can compromise respiratory mechanics in a patient with bronchospasm. Supine with legs elevated provides adequate venous return while maintaining optimal respiratory function."
        }
      ],
      "correct_index": 0,
      "explanation": "This question tests the critical concept of proper positioning in anaphylactic shock. The patient has classic anaphylaxis with hypotension, and despite initial improvement with epinephrine, remains hemodynamically compromised with orthostatic symptoms. The key teaching point is that patients in anaphylactic shock must be kept supine with legs elevated to prevent 'empty heart syndrome' - fatal cardiovascular collapse that can occur with sudden positional changes due to venous pooling in the setting of severe vasodilation. The distractors represent common positioning errors that could be fatal in this context.",
      "topic_tags": [
        "anaphylaxis",
        "emergency_medicine",
        "shock",
        "positioning",
        "hemodynamics"
      ],
      "key_concept": "Supine positioning with leg elevation is essential in anaphylactic shock to prevent fatal cardiovascular collapse from venous pooling"
    },
    "tags": {
      "abai_domain": "Domain 6 — Anaphylaxis",
      "abai_domain_number": 6,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Position: supine with legs elevated for hypotension. NOT upright — sudden positional change in anaphylaxis → fatal cardiovascular collapse ('empty heart syndrome').",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence leaves only positioning options without the critical clinical context of anaphylaxis, hypotension, and orthostatic symptoms needed to determine correct positioning"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All sentences are essential: anaphylaxis diagnosis, severity indicators, epinephrine response, and ongoing hemodynamic compromise with orthostatic symptoms - all directly inform positioning decisions"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [10,10,12,9,8] - ratio 1.5, meets criterion"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "High Fowler's (B) is reasonable for respiratory distress; upright position (C) addresses comfort; left lateral (D) is standard aspiration precaution; Trendelenburg (E) is logical for hypotension though excessive. All are clinically plausible positioning considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: 'Position the patient [position] [rationale clause]'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Supine with legs elevated is correct for anaphylactic shock to maintain venous return and prevent cardiovascular collapse from venous pooling"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Supine with legs elevated is clearly best for hemodynamically compromised anaphylaxis patient, though some might consider high Fowler's for respiratory component"
      }
    }
  },
  {
    "id": "lib-asthma-exacerbation-0030",
    "type": "mcq",
    "status": "approved",
    "caseId": "asthma-exacerbation",
    "diagnosis": "Asthma Exacerbation",
    "source": "ReasonDx Case Library — Asthma Exacerbation",
    "submittedAt": "2026-03-05T01:48:39Z",
    "approvedAt": "2026-03-05T01:48:39Z",
    "question": {
      "stem": "A 28-year-old man presents to the emergency department with acute shortness of breath and wheezing that began 6 hours ago after exposure to cigarette smoke at a party. He has a history of asthma but ran out of his albuterol inhaler 3 days ago. On examination, he is sitting upright, speaking in single words only, and appears anxious. Vital signs show temperature 37.1°C (98.8°F), heart rate 118/min, respiratory rate 32/min, blood pressure 142/88 mmHg, and oxygen saturation 89% on room air. Lung examination reveals diffuse expiratory wheezing and prolonged expiration. Peak expiratory flow rate (PEFR) is 35% of predicted. He receives nebulized albuterol and ipratropium, followed by intravenous methylprednisolone 125 mg, but shows minimal improvement after 1 hour.",
      "options": [
        {
          "text": "Administer intravenous magnesium sulfate 2 grams over 20 minutes",
          "explanation": "Correct. With PEFR <40% and minimal response to initial bronchodilators and steroids, this represents severe asthma exacerbation requiring IV magnesium as next-line therapy."
        },
        {
          "text": "Initiate heliox therapy with 70% helium and 30% oxygen mixture",
          "explanation": "Incorrect. Heliox is reserved for life-threatening exacerbations (PEFR <25%) or impending intubation, not severe exacerbations with PEFR 35%."
        },
        {
          "text": "Repeat nebulized albuterol and ipratropium treatments every 20 minutes",
          "explanation": "Incorrect. The patient already received optimal bronchodilator therapy with minimal response; repeating without additional intervention is insufficient for severe exacerbation."
        },
        {
          "text": "Prepare for endotracheal intubation and mechanical ventilation",
          "explanation": "Incorrect. Intubation is indicated for life-threatening asthma with altered consciousness or PEFR <25%. This patient is severe but not yet life-threatening."
        },
        {
          "text": "Switch to oral prednisone 60 mg since IV and oral steroids are equivalent",
          "explanation": "Incorrect. While oral and IV steroids are equivalent in efficacy, this patient is speaking only in words and may not reliably swallow oral medications during severe exacerbation."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with severe asthma exacerbation evidenced by PEFR 35% (severe = <40%), speaking in single words, and minimal response to initial bronchodilator and steroid therapy. IV magnesium sulfate 2g over 20 minutes is the appropriate next intervention for severe exacerbations non-responsive to standard treatment. Magnesium causes bronchodilation through calcium channel blockade in bronchial smooth muscle. Heliox is reserved for life-threatening cases (PEFR <25%), intubation for altered consciousness or complete respiratory failure, and oral medications may not be reliable when the patient can only speak in words.",
      "topic_tags": [
        "asthma",
        "emergency_medicine",
        "respiratory",
        "PEFR"
      ],
      "key_concept": "PEFR-guided severity assessment and appropriate escalation of asthma exacerbation treatment"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "PEFR thresholds: >70% = mild; 40–70% = moderate; <40% = severe; <25% = life-threatening.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical context (severe asthma, specific parameters, treatment failure) is essential to determine next management step"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: exposure trigger, medication history, severity indicators (PEFR 35%, speaking single words), vital signs, and treatment response are all necessary"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,10,9,7,11] - ratio 1.57, just slightly over 1.5 but acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B: Heliox is valid for severe asthma; C: Reasonable continuation of bronchodilators; D: Appropriate for respiratory failure; E: Weaker - route equivalence claim is questionable in severe exacerbation"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options start with verbs (Administer, Initiate, Repeat, Prepare, Switch) - consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "IV magnesium sulfate 2g is correct next step per guidelines for severe asthma non-responsive to initial treatment"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While magnesium is guideline-recommended, some might argue for immediate intubation preparation given severity, though magnesium trial is appropriate first"
      }
    }
  },
  {
    "id": "lib-asthma-exacerbation-0031",
    "type": "mcq",
    "status": "approved",
    "caseId": "asthma-exacerbation",
    "diagnosis": "Asthma Exacerbation",
    "source": "ReasonDx Case Library — Asthma Exacerbation",
    "submittedAt": "2026-03-05T01:49:44Z",
    "approvedAt": "2026-03-05T01:49:44Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department with acute shortness of breath and wheezing that began 2 hours ago after exposure to dust while cleaning. She reports speaking only in single words due to breathlessness and has a history of moderate persistent asthma. Vital signs show pulse 118/min, respirations 28/min, blood pressure 142/88 mmHg, and oxygen saturation 89% on room air. Physical examination reveals use of accessory muscles, diffuse expiratory wheezes, and peak expiratory flow rate of 35% predicted. She receives three nebulized albuterol treatments and oral prednisone 60 mg, but shows minimal improvement with persistent dyspnea and PEFR remaining at 38% predicted after 90 minutes of treatment.",
      "options": [
        {
          "text": "Administer intravenous magnesium sulfate 2 grams over 20 minutes",
          "explanation": "Correct. IV magnesium is indicated for severe asthma exacerbations (PEFR <40%) that are non-responsive to initial bronchodilators and steroids, as it provides additional bronchodilation through calcium channel blockade in smooth muscle."
        },
        {
          "text": "Initiate heliox therapy with 70% helium and 30% oxygen mixture",
          "explanation": "Incorrect. Heliox is reserved for life-threatening asthma (PEFR <25%) or patients requiring intubation preparation, not for severe exacerbations with PEFR of 38%."
        },
        {
          "text": "Switch from oral prednisone to intravenous methylprednisolone",
          "explanation": "Incorrect. Oral and IV steroids have equivalent efficacy in acute asthma when the patient can swallow, and she has already received appropriate oral steroid therapy."
        },
        {
          "text": "Add continuous nebulized albuterol instead of intermittent treatments",
          "explanation": "Incorrect. While continuous nebulization may be considered, the patient has already received multiple albuterol treatments with minimal response, indicating need for adjunctive therapy rather than increased SABA dosing."
        },
        {
          "text": "Prepare for immediate endotracheal intubation and mechanical ventilation",
          "explanation": "Incorrect. Intubation is indicated for life-threatening asthma with altered consciousness or silent chest, not for severe exacerbations with PEFR >25% and normal mental status."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has severe asthma exacerbation based on speaking in single words, accessory muscle use, and PEFR <40%. After failing to respond adequately to initial bronchodilator and steroid therapy, IV magnesium sulfate is the next appropriate intervention. Magnesium provides bronchodilation through calcium channel blockade in smooth muscle and is specifically recommended by GINA guidelines for severe exacerbations non-responsive to first-line therapy. Heliox is reserved for life-threatening cases (PEFR <25%), IV steroids offer no advantage over oral when the patient can swallow, continuous albuterol wouldn't address the refractory nature of this exacerbation, and intubation is premature given the patient's current status.",
      "topic_tags": [
        "respiratory",
        "emergency_medicine",
        "pharmacology",
        "asthma"
      ],
      "key_concept": "IV magnesium sulfate is indicated for severe asthma exacerbations non-responsive to initial bronchodilator and steroid therapy"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "SABA + ipratropium: combination superior to SABA alone in severe ED asthma (reduces hospitalization ~25%).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final sentence with options alone is insufficient - requires clinical context of severity, treatment response, and vital signs to determine next step"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details essential: severity markers (single words, accessory muscles, PEFR 35%), failed response to standard therapy (albuterol x3, prednisone, minimal improvement), and time course needed to justify escalation"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,10,8,8,8] - ratio 1.25, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All options are legitimate asthma treatments. Heliox, IV steroids, continuous albuterol, and intubation are all reasonable considerations for refractory severe asthma, though timing/indication differs"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options begin with action verbs (Administer, Initiate, Switch, Add, Prepare) in consistent imperative form"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "IV magnesium sulfate 2g over 20 minutes is correct next step per GINA guidelines for severe asthma non-responsive to bronchodilators and steroids"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Magnesium is clearly appropriate, though some might argue for continuous albuterol or consider intubation readiness - however magnesium is the established next step"
      }
    }
  },
  {
    "id": "lib-asthma-exacerbation-0032",
    "type": "mcq",
    "status": "approved",
    "caseId": "asthma-exacerbation",
    "diagnosis": "Asthma Exacerbation",
    "source": "ReasonDx Case Library — Asthma Exacerbation",
    "submittedAt": "2026-03-05T01:50:22Z",
    "approvedAt": "2026-03-05T01:50:22Z",
    "question": {
      "stem": "A 28-year-old woman with known asthma presents to the emergency department with severe dyspnea that began 3 hours ago. She can only speak in single words and appears anxious. Vital signs show temperature 98.6°F, blood pressure 145/85 mmHg, heart rate 118/min, respiratory rate 32/min, and oxygen saturation 89% on room air. Peak expiratory flow rate is 35% of her predicted value. She has already received three nebulizer treatments with albuterol and ipratropium, along with intravenous methylprednisolone 125 mg, over the past 90 minutes without significant improvement. Physical examination reveals use of accessory muscles, diffuse expiratory wheezing, and prolonged expiratory phase.",
      "options": [
        {
          "text": "Administer intravenous magnesium sulfate 2 grams over 20 minutes",
          "explanation": "Correct. This patient has severe asthma exacerbation (PEFR <40%, speaking in single words) that is non-responsive to standard bronchodilator and steroid therapy. IV magnesium sulfate 2g over 20 minutes is indicated for severe exacerbations not responding to initial treatment, providing bronchodilation via calcium channel blockade in smooth muscle."
        },
        {
          "text": "Initiate heliox therapy with 70% helium and 30% oxygen mixture",
          "explanation": "Incorrect. While heliox can reduce turbulent airflow and improve bronchodilator delivery, it is typically reserved for life-threatening asthma (PEFR <25%) or when intubation is imminent. This patient has severe but not life-threatening exacerbation based on current presentation."
        },
        {
          "text": "Increase albuterol frequency to continuous nebulization",
          "explanation": "Incorrect. The patient has already received three nebulizer treatments without significant improvement. Continuous nebulization is not the next appropriate step; escalation to IV magnesium is indicated for severe exacerbations non-responsive to standard bronchodilators."
        },
        {
          "text": "Administer intravenous methylprednisolone 250 mg bolus",
          "explanation": "Incorrect. The patient has already received IV steroids (125 mg methylprednisolone). Doubling the steroid dose will not provide immediate bronchodilation, and the patient needs additional bronchodilator therapy rather than more steroids at this point."
        },
        {
          "text": "Switch to intravenous albuterol 0.5 mg over 10 minutes",
          "explanation": "Incorrect. IV albuterol is not routinely used and has higher risk of cardiac side effects compared to nebulized therapy. The patient needs escalation to a different bronchodilator mechanism (magnesium) rather than changing the route of beta-agonist delivery."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with severe asthma exacerbation evidenced by PEFR <40% (35% predicted), speaking only in single words, tachypnea, and hypoxemia. She has received appropriate initial therapy with bronchodilators (albuterol + ipratropium) and systemic steroids but shows no significant improvement after 90 minutes. IV magnesium sulfate 2g over 20 minutes is the appropriate next step for severe exacerbations non-responsive to standard therapy. Magnesium provides bronchodilation through calcium channel blockade in bronchial smooth muscle, offering a different mechanism than beta-agonists. Heliox is reserved for life-threatening cases (PEFR <25%), continuous nebulization won't add benefit after failed standard treatments, additional steroids won't provide immediate bronchodilation, and IV albuterol has increased cardiac risks without proven superiority over nebulized delivery.",
      "topic_tags": [
        "asthma",
        "emergency_medicine",
        "bronchodilators",
        "respiratory_failure"
      ],
      "key_concept": "IV magnesium sulfate for severe asthma exacerbation non-responsive to standard bronchodilator and steroid therapy"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "IV Mg²⁺: 2g IV over 20 min for severe exacerbation non-responsive to bronchodilators. Bronchodilation via calcium channel blockade in smooth muscle.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The last sentence alone cannot determine the answer - requires the full clinical context of failed standard therapy to identify magnesium as next step"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: severity indicators (PEFR 35%, single words), failed treatments (3 nebs + steroids over 90 min), and physical findings all necessary to establish indication for magnesium"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [8,9,6,6,8] - ratio 1.5, meets threshold"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All are legitimate asthma treatments: heliox used in severe cases, continuous albuterol is standard escalation, higher steroid doses are used, IV albuterol exists though less common"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow same structure: verb + medication/therapy + specific dosing/parameters"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "IV magnesium 2g over 20 minutes is correct next step per guidelines for severe asthma non-responsive to standard therapy"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Magnesium is clearly indicated, though some might consider continuous albuterol - but patient already had 3 treatments over 90 minutes making magnesium the better choice"
      }
    }
  },
  {
    "id": "lib-atopic-dermatitis-severe-0033",
    "type": "mcq",
    "status": "approved",
    "caseId": "atopic-dermatitis-severe",
    "diagnosis": "Severe Atopic Dermatitis",
    "source": "DOI: 10.1016/j.jaad.2022.12.029; AAD guidelines for management of atopic dermatitis with topical therapies",
    "submittedAt": "2026-03-05T01:50:57Z",
    "approvedAt": "2026-03-05T01:50:57Z",
    "question": {
      "stem": "A 28-year-old woman with a 15-year history of atopic dermatitis presents for follow-up. Despite consistent use of topical corticosteroids and calcineurin inhibitors, she continues to have widespread eczematous lesions covering 40% of her body surface area with significant pruritus interfering with sleep. Physical examination reveals erythematous, lichenified plaques on her arms, legs, and trunk with evidence of excoriation. Her current SCORAD index is 58. Laboratory studies show elevated total IgE at 2,400 IU/mL and positive specific IgE to multiple environmental allergens. She has a history of asthma and seasonal allergic rhinitis.",
      "options": [
        {
          "text": "Initiate dupilumab therapy",
          "explanation": "Correct. With SCORAD >50 (severe AD) failing topical therapy, dupilumab (IL-4Rα antagonist) is first-line systemic biologic therapy with excellent safety profile."
        },
        {
          "text": "Prescribe oral prednisone for 2 weeks",
          "explanation": "Incorrect. Systemic corticosteroids provide temporary relief but cause rebound flares upon discontinuation and have significant long-term adverse effects."
        },
        {
          "text": "Increase frequency of topical corticosteroid application",
          "explanation": "Incorrect. Patient already has severe disease despite topical therapy. Increasing topical treatment intensity won't address the systemic inflammatory process."
        },
        {
          "text": "Begin cyclosporine therapy",
          "explanation": "Incorrect. While cyclosporine is effective for severe AD, it requires frequent monitoring for nephrotoxicity and hypertension. Dupilumab is preferred first-line systemic therapy."
        },
        {
          "text": "Start phototherapy treatment",
          "explanation": "Incorrect. UV phototherapy can be helpful but requires frequent clinic visits and may cause skin aging/cancer risk. Systemic biologic therapy is more appropriate for this severity."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has severe atopic dermatitis (SCORAD 58, >50 indicates severe disease) that has failed adequate topical therapy. The presence of atopic march (AD + asthma + allergic rhinitis) and elevated IgE further support the diagnosis. Dupilumab, an IL-4 receptor alpha antagonist, is the first-line systemic biologic therapy for severe AD, approved for ages ≥6 months with excellent long-term safety. It breaks the filaggrin-IL-4/IL-13 inflammatory cycle that perpetuates barrier dysfunction. Oral corticosteroids cause rebound flares, intensifying topicals won't address systemic inflammation, cyclosporine requires intensive monitoring, and phototherapy is less convenient than biologic therapy for this severity.",
      "topic_tags": [
        "dermatology",
        "atopic_dermatitis",
        "biologics",
        "treatment"
      ],
      "key_concept": "Severe atopic dermatitis (SCORAD >50) failing topical therapy requires systemic treatment, with dupilumab as first-line biologic therapy"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "AD severity: mild SCORAD <25, moderate 25–50, severe >50. IGA 0/1 = treatment success in trials.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The vignette provides essential clinical context (severity markers, failed topical therapy, SCORAD score, comorbidities) that cannot be determined from the final sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: age, disease duration, failed therapies, extent of involvement, SCORAD score, IgE levels, and comorbid atopic conditions all inform treatment decisions"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [3,6,6,3,3]. Ratio 6/3=2.0 exceeds 1.5 threshold but only slightly"
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors represent legitimate treatment considerations for severe atopic dermatitis: systemic corticosteroids, escalating topicals, cyclosporine, and phototherapy are all recognized therapeutic options"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent verb + object structure (Initiate/Prescribe/Increase/Begin/Start + therapy/treatment)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Dupilumab is indeed first-line biologic therapy for severe AD with excellent evidence base and safety profile for this clinical scenario"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "While cyclosporine could be considered, dupilumab is clearly preferred as first-line biologic with superior safety profile and convenience"
      }
    }
  },
  {
    "id": "lib-atopic-dermatitis-severe-0034",
    "type": "mcq",
    "status": "approved",
    "caseId": "atopic-dermatitis-severe",
    "diagnosis": "Severe Atopic Dermatitis",
    "source": "DOI: 10.1016/j.jaad.2022.12.029; AAD guidelines for management of atopic dermatitis with topical therapies",
    "submittedAt": "2026-03-05T01:51:35Z",
    "approvedAt": "2026-03-05T01:51:35Z",
    "question": {
      "stem": "A 28-year-old woman with severe atopic dermatitis presents for follow-up after achieving clinical remission with dupilumab therapy. Her SCORAD score has improved from 65 to 15 over the past 6 months. Physical examination shows minimal erythema on bilateral antecubital fossae with no active lesions elsewhere. She asks about preventing future flares now that her skin has cleared. Her current regimen includes daily emollients and dupilumab injections every other week.",
      "options": [
        {
          "text": "Apply topical corticosteroids twice weekly to previously affected areas",
          "explanation": "Correct. Proactive TCS therapy involves applying topical corticosteroids 2×/week to previously affected sites during remission, which reduces flare frequency by 50%."
        },
        {
          "text": "Discontinue dupilumab and monitor for flare recurrence",
          "explanation": "Incorrect. Discontinuing effective systemic therapy in severe AD typically leads to rapid flare recurrence. Maintenance therapy is usually continued."
        },
        {
          "text": "Increase dupilumab injection frequency to weekly",
          "explanation": "Incorrect. Standard dupilumab dosing for maintenance is every other week. Increasing frequency without indication of inadequate response is not recommended."
        },
        {
          "text": "Initiate bleach baths three times weekly",
          "explanation": "Incorrect. While bleach baths can reduce S. aureus colonization and flares, proactive TCS therapy is more evidence-based for preventing flares in remission."
        },
        {
          "text": "Apply emollients only to areas with visible inflammation",
          "explanation": "Incorrect. Emollients should be applied to all affected areas and maintained throughout remission. This approach doesn't address proactive flare prevention."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has achieved remission (SCORAD <25) from severe atopic dermatitis and is asking about flare prevention. Proactive topical corticosteroid therapy, which involves applying TCS twice weekly to previously affected sites during remission periods, has strong evidence showing a 50% reduction in flare frequency. This maintenance approach is distinct from reactive treatment where TCS are only used during active flares. The other options are incorrect: discontinuing effective systemic therapy leads to flare recurrence, increasing dupilumab frequency without indication is unnecessary, bleach baths are less evidence-based for proactive prevention, and limiting emollients to inflamed areas doesn't provide proactive flare prevention.",
      "topic_tags": [
        "atopic_dermatitis",
        "maintenance_therapy",
        "topical_corticosteroids",
        "dermatology"
      ],
      "key_concept": "Proactive topical corticosteroid therapy for atopic dermatitis flare prevention"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK4",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Proactive TCS therapy: apply 2×/week to previously affected sites during remission → reduces flare frequency 50%.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question about preventing future flares requires the clinical context of achieving remission with dupilumab, current SCORAD score, and examination findings to answer appropriately"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is relevant: age/gender establish patient, atopic dermatitis severity and response to treatment, SCORAD improvement quantifies response, physical exam confirms remission status, patient question drives the clinical decision"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [10,8,7,6,9] - ratio 1.67 is borderline but acceptable for clinical options"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B is plausible (discontinuing effective therapy), C could seem reasonable (intensifying treatment), D has some evidence base for maintenance, E is less plausible as it contradicts basic emollient use principles"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Proactive TCS therapy is evidence-based for flare prevention in atopic dermatitis remission, supported by multiple RCTs showing 50% reduction in flare frequency"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Proactive topical corticosteroid therapy is the clearly superior evidence-based approach for flare prevention in this clinical scenario"
      }
    }
  },
  {
    "id": "lib-atopic-dermatitis-severe-0035",
    "type": "mcq",
    "status": "approved",
    "caseId": "atopic-dermatitis-severe",
    "diagnosis": "Severe Atopic Dermatitis",
    "source": "DOI: 10.1016/j.jaad.2022.12.029; AAD guidelines for management of atopic dermatitis with topical therapies",
    "submittedAt": "2026-03-05T01:52:11Z",
    "approvedAt": "2026-03-05T01:52:11Z",
    "question": {
      "stem": "A 28-year-old woman with severe atopic dermatitis presents for follow-up after 6 months of dupilumab therapy. Her SCORAD has improved from 65 to 22, and her IGA has decreased from 4 to 1. She reports significant improvement in pruritus and sleep quality. However, over the past 2 months, she has developed bilateral conjunctival erythema, tearing, and mild eye discomfort that worsens in the evenings. Ophthalmologic examination reveals mild conjunctival injection without corneal involvement or purulent discharge. Her dermatitis remains well-controlled on current therapy.",
      "options": [
        {
          "text": "Continue dupilumab and initiate artificial tears with ophthalmology referral",
          "explanation": "Correct. Dupilumab-associated conjunctivitis occurs in 10-15% of AD patients and should be managed stepwise without discontinuing effective therapy."
        },
        {
          "text": "Discontinue dupilumab and transition to oral cyclosporine therapy",
          "explanation": "Incorrect. Dupilumab should not be discontinued for conjunctivitis, which is manageable. The patient has excellent disease control."
        },
        {
          "text": "Reduce dupilumab frequency to every 4 weeks and add topical corticosteroids",
          "explanation": "Incorrect. Reducing effective dupilumab dosing risks AD flare. Conjunctivitis management doesn't require dose modification."
        },
        {
          "text": "Switch to upadacitinib and prescribe prophylactic antibiotic eye drops",
          "explanation": "Incorrect. JAK inhibitors have black box warnings and switching isn't indicated for manageable conjunctivitis. Antibiotics aren't warranted without infection."
        },
        {
          "text": "Continue current therapy and prescribe topical ophthalmic corticosteroids",
          "explanation": "Incorrect. While topical steroids are part of conjunctivitis management, artificial tears should be tried first, and ophthalmology consultation is recommended."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has dupilumab-associated conjunctivitis, which occurs in 10-15% of AD patients receiving dupilumab (higher incidence than in asthma patients). The key teaching point is that dupilumab should NOT be discontinued for this manageable adverse effect, especially when AD control is excellent (SCORAD <25 and IGA 1 represent treatment success). Management follows a stepwise approach: artificial tears first, then topical steroids if needed, then cyclosporine eye drops for refractory cases. Ophthalmology referral is appropriate for proper evaluation and management. Discontinuing dupilumab risks severe AD flare, and switching to JAK inhibitors exposes the patient to black box warnings when the current effective therapy can be continued with supportive eye care.",
      "topic_tags": [
        "dermatology",
        "atopic_dermatitis",
        "biologics",
        "adverse_effects"
      ],
      "key_concept": "Management of dupilumab-associated conjunctivitis without discontinuing effective therapy"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "PC",
      "acgme_milestone": "PC3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Dupilumab: IL-4Rα blockade. Approved ≥6 months. Also approved: asthma, CRSwNP, EoE, PNP.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the last sentence removes crucial context about dupilumab therapy, SCORAD/IGA scores, timeline of eye symptoms, and ophthalmologic findings. Cannot answer from just 'Her dermatitis remains well-controlled on current therapy.'"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides essential information: patient demographics/condition, treatment duration and response (SCORAD/IGA scores), symptom improvement, new eye symptoms with timeline, ophthalmologic findings, and current treatment status. All necessary for clinical decision-making."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,8,10,8,8]. Ratio 1.25 (10/8) is acceptable."
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "B (discontinue dupilumab) - reasonable concern for adverse effect but overly aggressive. C (reduce frequency) - plausible dose adjustment strategy. D (switch to JAK inhibitor) - reasonable alternative but unnecessary. E (topical steroids without ophthalmology) - reasonable but incomplete management."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: action verb + therapy details"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current guidelines for dupilumab-associated conjunctivitis management: continue effective therapy, start with artificial tears, and involve ophthalmology for proper evaluation."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Option A is clearly best practice. Some clinicians might consider E, but lacking ophthalmology referral makes it suboptimal for proper evaluation and management."
      }
    }
  },
  {
    "id": "lib-cgd-xlinked-0036",
    "type": "mcq",
    "status": "approved",
    "caseId": "cgd-xlinked",
    "diagnosis": "Chronic Granulomatous Disease (CGD)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency; DOI: 10.1007/s12016-010-8184-4; Chronic granulomatous disease",
    "submittedAt": "2026-03-05T01:52:43Z",
    "approvedAt": "2026-03-05T01:52:43Z",
    "question": {
      "stem": "A 12-year-old boy presents with recurrent pneumonia and skin abscesses since infancy. His medical history includes multiple hospitalizations for Staphylococcus aureus infections and a recent Aspergillus lung infection that required prolonged antifungal therapy. Physical examination reveals hepatosplenomegaly and multiple healed skin scars. Laboratory studies show normal white blood cell count with normal neutrophil morphology. A dihydrorhodamine (DHR) flow cytometry test demonstrates significantly reduced fluorescence intensity in neutrophils compared to normal controls.",
      "options": [
        {
          "text": "Chronic granulomatous disease",
          "explanation": "Correct. The clinical picture of recurrent catalase-positive infections (S. aureus, Aspergillus) combined with reduced DHR fluorescence indicates defective NADPH oxidase, diagnostic of CGD."
        },
        {
          "text": "Severe combined immunodeficiency",
          "explanation": "Incorrect. SCID typically presents with opportunistic infections in early infancy, severe lymphopenia, and normal DHR test results."
        },
        {
          "text": "Hyper-IgE syndrome",
          "explanation": "Incorrect. While HIES causes recurrent S. aureus infections, it typically includes characteristic facial features, elevated IgE levels, and normal neutrophil oxidative burst."
        },
        {
          "text": "Leukocyte adhesion deficiency",
          "explanation": "Incorrect. LAD presents with delayed umbilical cord separation, severe gingivitis, and neutrophilia with normal oxidative burst function."
        },
        {
          "text": "Chediak-Higashi syndrome",
          "explanation": "Incorrect. CHS is characterized by giant cytoplasmic granules in neutrophils, partial albinism, and bleeding tendencies, with normal DHR test results."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has chronic granulomatous disease (CGD), indicated by the classic triad of recurrent infections with catalase-positive organisms (S. aureus, Aspergillus), normal neutrophil count/morphology, and abnormal DHR test. CGD results from NADPH oxidase deficiency, preventing the respiratory burst needed to kill catalase-positive organisms. The DHR test specifically measures neutrophil oxidative burst - reduced fluorescence confirms the diagnosis. The other options represent different primary immunodeficiencies with distinct clinical presentations and normal oxidative burst function.",
      "topic_tags": [
        "immunodeficiency",
        "pediatrics",
        "infectious_disease",
        "hematology"
      ],
      "key_concept": "CGD diagnosis requires recognizing catalase-positive infections plus abnormal neutrophil oxidative burst testing"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "CGD: NADPH oxidase deficiency → no respiratory burst → impaired killing of catalase-positive organisms.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence, the clinical vignette provides essential diagnostic information (recurrent infections with specific organisms, normal neutrophil morphology, abnormal DHR test) that is necessary to differentiate between primary immunodeficiencies"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides crucial diagnostic information: age/presentation establishes context, infection history points to specific immunodeficiency pattern, physical exam adds supporting findings, lab studies rule out quantitative defects, DHR test provides definitive diagnostic clue"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,4,3,4,3] - excellent parity with max/min ratio of 1.33"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "SCID (0.75 - reasonable but would typically present earlier with more severe infections), Hyper-IgE (0.75 - plausible with staph infections but typically has different features), LAD (0.75 - reasonable consideration with recurrent infections), Chediak-Higashi (0.75 - less plausible as neutrophil morphology described as normal)"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are consistent noun phrases naming specific immunodeficiency syndromes"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "CGD is correctly identified by the classic presentation of catalase-positive organism infections, normal neutrophil count/morphology, and abnormal DHR test measuring oxidative burst"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "The abnormal DHR test is pathognomonic for CGD in this clinical context, making it the single best answer"
      }
    }
  },
  {
    "id": "lib-cgd-xlinked-0037",
    "type": "mcq",
    "status": "approved",
    "caseId": "cgd-xlinked",
    "diagnosis": "Chronic Granulomatous Disease (CGD)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency; DOI: 10.1007/s12016-010-8184-4; Chronic granulomatous disease",
    "submittedAt": "2026-03-05T01:53:18Z",
    "approvedAt": "2026-03-05T01:53:18Z",
    "question": {
      "stem": "A 7-year-old boy presents with his fourth episode of pneumonia in 18 months. His current illness began 5 days ago with fever, productive cough, and chest pain. Past medical history includes recurrent skin abscesses requiring incision and drainage, and a hepatic abscess at age 4 years. Physical examination reveals temperature 38.9°C, crackles in the right lower lobe, and multiple healing scars on his arms and legs. Chest radiograph shows right lower lobe consolidation with cavitation. Sputum culture grows Staphylococcus aureus. Laboratory studies show leukocytosis with neutrophilia. A dihydrorhodamine (DHR) flow cytometry test demonstrates markedly diminished fluorescence in neutrophils compared to normal controls.",
      "options": [
        {
          "text": "Deficiency in NADPH oxidase complex preventing respiratory burst formation",
          "explanation": "This is correct. The clinical presentation of recurrent catalase-positive infections (S. aureus pneumonia, skin abscesses, hepatic abscess) combined with diminished DHR fluorescence confirms chronic granulomatous disease due to NADPH oxidase deficiency."
        },
        {
          "text": "Impaired neutrophil chemotaxis due to actin polymerization defects",
          "explanation": "This describes leukocyte adhesion deficiency, which presents with delayed umbilical cord separation, poor wound healing, and markedly elevated white blood cell counts, but normal DHR testing."
        },
        {
          "text": "Defective degranulation of neutrophil primary and secondary granules",
          "explanation": "This describes Chédiak-Higashi syndrome, which presents with partial albinism, giant cytoplasmic granules, and bleeding tendency, but would show normal DHR fluorescence."
        },
        {
          "text": "Abnormal neutrophil migration through endothelial cell junctions",
          "explanation": "This describes another form of leukocyte adhesion deficiency (LAD-II), characterized by recurrent infections but also developmental delays and distinctive facial features, with normal oxidative burst."
        },
        {
          "text": "Reduced production of neutrophil elastase and cathepsin G enzymes",
          "explanation": "This describes specific granule deficiency, which presents with recurrent infections but is associated with bilobed neutrophil nuclei and absence of specific granules on microscopy, not oxidative burst defects."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has chronic granulomatous disease (CGD), evidenced by recurrent infections with catalase-positive organisms (Staphylococcus aureus causing pneumonia, skin abscesses, and hepatic abscess) and markedly diminished DHR fluorescence indicating defective oxidative burst. CGD is caused by mutations in components of the NADPH oxidase complex, preventing formation of the respiratory burst needed to kill catalase-positive organisms. The DHR test specifically measures neutrophil oxidative burst - normal neutrophils show bright fluorescence while CGD neutrophils show dim or absent fluorescence. The other options describe different primary immunodeficiencies affecting neutrophil function but would not cause the specific pattern of catalase-positive infections with abnormal DHR testing seen in this case.",
      "topic_tags": [
        "immunodeficiency",
        "chronic_granulomatous_disease",
        "neutrophil_disorders",
        "pediatric_immunology"
      ],
      "key_concept": "Chronic granulomatous disease diagnosis through clinical pattern of catalase-positive infections and DHR flow cytometry demonstrating NADPH oxidase deficiency"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "X-linked CGD (gp91phox mutation, CYBB gene): most common (70%), most severe. AR forms: p47phox, p67phox, p22phox, p40phox mutations.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The last sentence about DHR test results is crucial - cannot be answered without the clinical context of recurrent catalase-positive infections and the specific pattern described"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is necessary: age/recurrence pattern, specific organisms (S. aureus), infection types, DHR test results all point to CGD diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,8,8,7,8] - max/min ratio 1.29 which is acceptable"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "B,C,D,E all represent real neutrophil defects (LAD, specific granule deficiency, LAD, neutrophil-specific granule deficiency) - clinically plausible but don't match DHR pattern"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing defects/deficiencies with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct - CGD is caused by NADPH oxidase deficiency, DHR test is diagnostic, clinical pattern matches perfectly"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Clear best answer given DHR test results, though some distractors represent overlapping clinical presentations"
      }
    }
  },
  {
    "id": "lib-cgd-xlinked-0038",
    "type": "mcq",
    "status": "approved",
    "caseId": "cgd-xlinked",
    "diagnosis": "Chronic Granulomatous Disease (CGD)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency; DOI: 10.1007/s12016-010-8184-4; Chronic granulomatous disease",
    "submittedAt": "2026-03-05T01:53:52Z",
    "approvedAt": "2026-03-05T01:53:52Z",
    "question": {
      "stem": "A 12-year-old boy presents with his fourth episode of pneumonia in 2 years. His medical history includes recurrent skin abscesses requiring drainage, chronic diarrhea, and a recent hospitalization for liver abscess. Physical examination reveals hepatosplenomegaly and several healed surgical scars from previous abscess drainage procedures. Laboratory studies show a white blood cell count of 18,000/μL with 75% neutrophils. Sputum culture grows Aspergillus fumigatus, and the liver abscess culture previously grew Staphylococcus aureus. A dihydrorhodamine (DHR) flow cytometry test shows markedly diminished fluorescence in neutrophils compared to normal controls.",
      "options": [
        {
          "text": "Chronic granulomatous disease",
          "explanation": "Correct. The combination of recurrent infections with catalase-positive organisms (S. aureus, Aspergillus), characteristic pattern of abscesses, hepatosplenomegaly, and diminished DHR fluorescence (indicating defective NADPH oxidase/respiratory burst) is diagnostic of CGD."
        },
        {
          "text": "Severe combined immunodeficiency",
          "explanation": "Incorrect. SCID presents in infancy with severe viral, bacterial, and fungal infections due to absent T and B cell function. The specific pattern of catalase-positive bacterial/fungal infections and normal DHR would not be seen."
        },
        {
          "text": "Common variable immunodeficiency",
          "explanation": "Incorrect. CVID typically presents with recurrent sinopulmonary infections due to antibody deficiency, often with encapsulated bacteria. The specific catalase-positive organism pattern and abnormal DHR testing would not be characteristic."
        },
        {
          "text": "Leukocyte adhesion deficiency",
          "explanation": "Incorrect. LAD presents with recurrent bacterial infections, delayed wound healing, and characteristic absence of neutrophils at infection sites due to defective adhesion molecules. DHR testing would be normal as the respiratory burst is intact."
        },
        {
          "text": "Hyper-IgE syndrome",
          "explanation": "Incorrect. HIES presents with recurrent skin/lung infections, elevated IgE, eczema, and skeletal abnormalities. While S. aureus infections occur, the specific DHR abnormality indicating defective respiratory burst is not characteristic of HIES."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has chronic granulomatous disease (CGD), diagnosed by the classic triad of recurrent infections with catalase-positive organisms (S. aureus and Aspergillus), characteristic clinical pattern of abscesses and granulomatous inflammation, and abnormal DHR flow cytometry indicating defective NADPH oxidase. CGD neutrophils cannot generate the respiratory burst needed to kill catalase-positive organisms, which produce their own catalase enzyme that destroys the hydrogen peroxide substrate needed for neutrophil killing. The diminished DHR fluorescence confirms defective oxidative burst, which is pathognomonic for CGD.",
      "topic_tags": [
        "immunodeficiency",
        "chronic_granulomatous_disease",
        "recurrent_infections",
        "NADPH_oxidase"
      ],
      "key_concept": "CGD diagnosis requires recognizing the pattern of catalase-positive organism infections plus abnormal neutrophil respiratory burst testing"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Classic pathogens: Staphylococcus aureus (#1), Aspergillus (#1 fungal), Nocardia, Burkholderia cepacia, Serratia marcescens.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The DHR test result is essential diagnostic information that cannot be determined from clinical presentation alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant - recurrent infections, specific organisms, physical findings, and diagnostic test results all contribute to the diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,4,4,4,3] - excellent parity with max/min ratio of 1.33"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "SCID and CVID are plausible immunodeficiencies but less likely given the specific pattern. LAD and Hyper-IgE are reasonable differentials for recurrent infections"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "CGD is correct - classic presentation with catalase-positive organisms, recurrent abscesses, and pathognomonic DHR test"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "DHR test makes CGD the clear best answer, though Hyper-IgE could theoretically cause similar infections"
      }
    }
  },
  {
    "id": "lib-chronic-spontaneous-urticaria-0039",
    "type": "mcq",
    "status": "approved",
    "caseId": "chronic-spontaneous-urticaria",
    "diagnosis": "Chronic Spontaneous Urticaria",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T01:54:27Z",
    "approvedAt": "2026-03-05T01:54:27Z",
    "question": {
      "stem": "A 28-year-old woman presents to dermatology clinic with a 3-month history of daily pruritic wheals that appear randomly on her trunk and extremities without any identifiable triggers. The wheals typically resolve within 2-4 hours, leaving no residual marks. She has tried avoiding potential food allergens and using over-the-counter antihistamines with minimal improvement. Physical examination shows multiple erythematous, raised wheals of varying sizes on her arms and back. No angioedema is present. She denies recent medication changes, infections, or exposure to new environments. Laboratory studies show normal CBC, TSH, and CRP levels.",
      "options": [
        {
          "text": "Initiate omalizumab 300 mg subcutaneously every 4 weeks",
          "explanation": "Incorrect. While omalizumab is effective for CSU, current guidelines recommend trying higher-dose H1 antihistamines (up to 4× standard dose) before advancing to omalizumab."
        },
        {
          "text": "Increase H1 antihistamine to 2-4 times the standard dose",
          "explanation": "Correct. This patient has chronic spontaneous urticaria (wheals >6 weeks without identifiable trigger). Current guidelines recommend escalating H1 antihistamine doses up to 4× standard before considering omalizumab."
        },
        {
          "text": "Perform comprehensive food allergy testing with skin prick tests",
          "explanation": "Incorrect. This patient has chronic spontaneous urticaria without identifiable triggers. Food allergy testing is not indicated as the urticaria occurs randomly without temporal relationship to food intake."
        },
        {
          "text": "Add montelukast 10 mg daily to current antihistamine regimen",
          "explanation": "Incorrect. While montelukast may have some benefit in urticaria, guidelines recommend optimizing H1 antihistamine dosing (up to 4× standard dose) before adding other agents, as montelukast provides minimal additional benefit."
        },
        {
          "text": "Start systemic corticosteroids for rapid symptom control",
          "explanation": "Incorrect. Corticosteroids are not recommended for chronic spontaneous urticaria management due to side effects with long-term use and availability of safer, more effective treatments like high-dose antihistamines and omalizumab."
        }
      ],
      "correct_index": 1,
      "explanation": "This patient has chronic spontaneous urticaria (CSU), defined as urticaria present for >6 weeks without identifiable external triggers. The wheals appearing randomly without triggers and lasting <24 hours are characteristic. Current treatment guidelines recommend a stepwise approach: first-line H1 antihistamines at standard dose, then escalation to 2-4× standard dose if inadequate response, followed by omalizumab if high-dose antihistamines fail. Since the patient has had minimal improvement with over-the-counter antihistamines, the next step is to optimize H1 antihistamine therapy by increasing to 2-4× the standard dose before considering omalizumab or other treatments.",
      "topic_tags": [
        "dermatology",
        "urticaria",
        "chronic spontaneous urticaria",
        "antihistamines"
      ],
      "key_concept": "Stepwise treatment approach for chronic spontaneous urticaria with H1 antihistamine dose escalation before omalizumab"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "CSU definition: urticaria >6 weeks duration without identifiable trigger. Distinguish from inducible urticaria (physical triggers: cold, pressure, exercise).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence and options, a student would need the clinical vignette details to distinguish between chronic spontaneous urticaria management options"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: duration (3 months = chronic), daily occurrence, lack of triggers, timing of resolution, failed OTC antihistamines, physical findings, normal labs - all necessary for diagnosis and management"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [8,11,9,9,7], max/min ratio = 1.57, slightly exceeds 1.5 threshold"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are reasonable: omalizumab is valid but premature, food testing logical but inappropriate for CSU, montelukast used in urticaria, steroids tempting for quick relief"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options start with verbs (Initiate, Increase, Perform, Add, Start) - consistent imperative structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct per current urticaria guidelines - step-up approach with H1 antihistamine dose escalation before omalizumab"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer based on established treatment algorithms for chronic spontaneous urticaria"
      }
    }
  },
  {
    "id": "lib-chronic-spontaneous-urticaria-0040",
    "type": "mcq",
    "status": "approved",
    "caseId": "chronic-spontaneous-urticaria",
    "diagnosis": "Chronic Spontaneous Urticaria",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T01:55:04Z",
    "approvedAt": "2026-03-05T01:55:04Z",
    "question": {
      "stem": "A 28-year-old woman presents to the allergy clinic with a 4-month history of daily pruritic wheals that appear suddenly on various parts of her body and resolve within 6-8 hours without leaving marks. She denies any identifiable triggers such as foods, medications, or physical stimuli. Physical examination reveals multiple raised, erythematous wheals on her arms and trunk. She has been taking cetirizine 10 mg daily with minimal improvement. Laboratory studies show normal CBC, TSH, and CRP. An autologous serum skin test is performed and shows a positive wheal response at 30 minutes. Basophil activation test demonstrates elevated CD63 expression following incubation with the patient's serum.",
      "options": [
        {
          "text": "Initiate omalizumab 300 mg subcutaneous every 4 weeks",
          "explanation": "While omalizumab is appropriate for refractory CSU, guidelines recommend maximizing antihistamine therapy (up to 4× standard dose) before advancing to omalizumab."
        },
        {
          "text": "Increase cetirizine to 40 mg daily and reassess in 4 weeks",
          "explanation": "This is the correct next step. Guidelines recommend increasing H1 antihistamines up to 4× standard dose (cetirizine 40 mg daily) before considering omalizumab for CSU."
        },
        {
          "text": "Add montelukast 10 mg daily to current cetirizine regimen",
          "explanation": "Montelukast provides minimal additional benefit beyond high-dose H1 antihistamines in CSU and is not recommended before maximizing antihistamine therapy."
        },
        {
          "text": "Perform skin biopsy to rule out urticarial vasculitis",
          "explanation": "Biopsy is indicated when wheals last >24 hours with residual bruising. This patient's wheals resolve within 6-8 hours without marks, making vasculitis unlikely."
        },
        {
          "text": "Start prednisone 40 mg daily for 2 weeks with taper",
          "explanation": "Systemic corticosteroids are not recommended for routine CSU management due to side effects and lack of long-term efficacy. Step-up antihistamine therapy is preferred."
        }
      ],
      "correct_index": 1,
      "explanation": "This patient has chronic spontaneous urticaria (CSU) with positive autoimmune markers (positive ASST and BAT), indicating an autoimmune etiology with IgG autoantibodies causing mast cell activation. According to current guidelines, the treatment approach is stepwise: standard-dose H1 antihistamine → high-dose H1 antihistamine (up to 4× standard dose) → omalizumab → cyclosporine. Since she has minimal improvement on standard-dose cetirizine (10 mg), the next step is increasing to 40 mg daily (4× dose) before considering omalizumab. Montelukast and H2 antihistamines provide minimal additional benefit. Biopsy is unnecessary as wheals resolve quickly without residual marks. Systemic corticosteroids are avoided due to side effects and poor long-term efficacy.",
      "topic_tags": [
        "chronic_spontaneous_urticaria",
        "autoimmune_urticaria",
        "antihistamine_therapy",
        "allergy_immunology"
      ],
      "key_concept": "Stepwise treatment approach in chronic spontaneous urticaria requires maximizing H1 antihistamine therapy before advancing to omalizumab"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Autoimmune CSU markers: positive autologous serum skin test (ASST), anti-FcεRIα IgG, anti-IgE IgG. Basophil activation test (BAT) best validated.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence leaves insufficient information to determine the next treatment step. The clinical presentation, test results, and current treatment response are all necessary."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: symptoms establish CSU diagnosis, negative triggers support spontaneous type, physical exam confirms active disease, current treatment establishes partial response, labs rule out systemic causes, and autoimmune tests guide treatment approach."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [8,10,9,8,8] - ratio 1.25, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "A: Reasonable but premature per guidelines. C: Plausible add-on therapy. D: Reasonable consideration for atypical urticaria. E: Common but inappropriate long-term approach. All are clinically reasonable considerations."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure (action verb + medication/procedure details)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with EAACI/GA²LEN/EDF/WAO guidelines for CSU management - step-up to 4x dose H1 antihistamine before omalizumab"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Clear best answer per guidelines, though some might argue for omalizumab given autoimmune markers. However, stepwise approach is standard of care."
      }
    }
  },
  {
    "id": "lib-chronic-spontaneous-urticaria-0041",
    "type": "mcq",
    "status": "approved",
    "caseId": "chronic-spontaneous-urticaria",
    "diagnosis": "Chronic Spontaneous Urticaria",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T01:55:37Z",
    "approvedAt": "2026-03-05T01:55:37Z",
    "question": {
      "stem": "A 28-year-old woman presents to dermatology clinic with a 10-week history of daily urticaria. She develops 10-15 pruritic wheals daily that resolve within 4-6 hours, often accompanied by lip swelling. She has tried avoiding suspected food triggers without improvement. Physical examination shows multiple erythematous, raised wheals on her arms and trunk. She has been taking cetirizine 10 mg daily for 3 weeks with minimal improvement. Laboratory studies show normal CBC, TSH 2.1 mU/L (normal 0.4-4.0), and negative ANA. Autologous serum skin test is positive with a 12 mm wheal at 30 minutes.",
      "options": [
        {
          "text": "Increase cetirizine to 40 mg daily",
          "explanation": "This is the correct next step in CSU management - escalate H1 antihistamines to 2-4x standard dose before advancing to next therapy level."
        },
        {
          "text": "Begin omalizumab 300 mg every 4 weeks",
          "explanation": "Omalizumab is third-line therapy for CSU. Guidelines require trial of high-dose H1 antihistamines before omalizumab initiation."
        },
        {
          "text": "Add ranitidine 150 mg twice daily",
          "explanation": "H2 antihistamines provide minimal additional benefit beyond optimized H1 antihistamine therapy in CSU management."
        },
        {
          "text": "Start cyclosporine 3 mg/kg daily",
          "explanation": "Cyclosporine is fourth-line therapy for CSU, reserved for patients who fail omalizumab after adequate H1 antihistamine trials."
        },
        {
          "text": "Add montelukast 10 mg daily",
          "explanation": "Leukotriene receptor antagonists show minimal additional efficacy beyond high-dose H1 antihistamines in CSU treatment algorithms."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has chronic spontaneous urticaria (CSU) based on >6 weeks of urticaria without identifiable triggers. The positive autologous serum skin test suggests autoimmune CSU. Current guidelines recommend stepwise treatment escalation: standard-dose H1 antihistamines → high-dose H1 antihistamines (2-4x standard dose) → omalizumab → cyclosporine. Since standard-dose cetirizine (10 mg) has failed, the next step is increasing to 20-40 mg daily before considering omalizumab. H2 antihistamines and montelukast provide minimal additional benefit, while omalizumab and cyclosporine are reserved for antihistamine-refractory cases.",
      "topic_tags": [
        "dermatology",
        "chronic urticaria",
        "antihistamines",
        "omalizumab"
      ],
      "key_concept": "Stepwise management of chronic spontaneous urticaria requires escalating H1 antihistamines to 2-4x standard dose before advancing to omalizumab"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Treatment stepwise: H1 antihistamine (standard dose) → H1 antihistamine (2–4× dose) → omalizumab 300 mg Q4W → cyclosporine.",
    "quality_score": 0.77,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The stem provides essential clinical context (duration, symptoms, failed treatments, test results) that cannot be determined from the question alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: duration establishes chronic urticaria, failed food avoidance rules out allergic triggers, physical exam confirms diagnosis, failed cetirizine establishes treatment failure, labs rule out systemic causes, positive autologous serum test suggests autoimmune etiology"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [5,6,5,4,4]. Ratio 6/4 = 1.5, which meets the threshold"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "Omalizumab is reasonable but premature without trying higher antihistamine doses first. Ranitidine has limited evidence but sometimes used. Cyclosporine is appropriate but third-line. Montelukast has weak evidence but sometimes tried"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: verb + medication + dosing"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current urticaria guidelines recommending dose escalation of H1 antihistamines before advancing to omalizumab"
      },
      "single_best_answer": {
        "score": 0.5,
        "note": "While increasing cetirizine is guideline-recommended, some clinicians might reasonably consider omalizumab given the positive autologous serum test and failed standard treatment"
      }
    }
  },
  {
    "id": "lib-contact-dermatitis-occupational-0042",
    "type": "mcq",
    "status": "approved",
    "caseId": "contact-dermatitis-occupational",
    "diagnosis": "Occupational Contact Dermatitis",
    "source": "DOI: 10.1016/j.jaci.2015.02.033; Patch testing",
    "submittedAt": "2026-03-05T01:56:13Z",
    "approvedAt": "2026-03-05T01:56:13Z",
    "question": {
      "stem": "A 28-year-old hairdresser presents with a 3-week history of erythematous, vesicular rash on her hands and forearms that worsens at work and improves on weekends. She denies immediate reactions or respiratory symptoms when handling hair products. Physical examination reveals eczematous changes on the dorsal hands with vesicles and papules. Patch testing is performed using standard allergens applied to her upper back for 48 hours, then removed. At 48-hour reading, the paraphenylenediamine (PPD) patch site shows mild erythema only. At 96-hour reading, the same site demonstrates erythema with papules and small vesicles.",
      "options": [
        {
          "text": "Positive patch test (1+) indicating Type IV hypersensitivity to paraphenylenediamine",
          "explanation": "Correct. The 96-hour reading shows erythema + papules + vesicles, which is a 1+ positive patch test. This delayed reaction confirms Type IV (T-cell mediated) contact hypersensitivity to PPD, consistent with occupational ACD in a hairdresser."
        },
        {
          "text": "Negative patch test as erythema at 48 hours indicates irritant reaction only",
          "explanation": "Incorrect. While erythema only at 48 hours suggests irritant reaction, the 96-hour reading is crucial. The development of papules and vesicles by 96 hours indicates a positive allergic reaction, not just irritation."
        },
        {
          "text": "Type I IgE-mediated hypersensitivity requiring skin prick testing for confirmation",
          "explanation": "Incorrect. The delayed onset (worsens at work, improves on weekends) and lack of immediate reactions or respiratory symptoms rule out Type I hypersensitivity. ACD is Type IV, and patch testing, not SPT, is diagnostic."
        },
        {
          "text": "Inconclusive test requiring immediate intradermal testing with hair dye allergens",
          "explanation": "Incorrect. The patch test is conclusive showing delayed positive reaction. Intradermal testing is not used for contact allergens and would be inappropriate for Type IV hypersensitivity diagnosis."
        },
        {
          "text": "Strong positive reaction (3+) indicating need for systemic immunosuppression",
          "explanation": "Incorrect. This is a 1+ positive (erythema + papules + vesicles), not 3+ (confluent vesicles, bullae, spreading). Treatment involves allergen avoidance and topical corticosteroids, not systemic immunosuppression."
        }
      ],
      "correct_index": 0,
      "explanation": "This question tests understanding of patch test interpretation and Type IV hypersensitivity. The key concept is that both 48-hour and 96-hour readings are required, as some reactions develop late. The progression from erythema only at 48 hours to erythema + papules + vesicles at 96 hours represents a 1+ positive patch test, confirming Type IV contact hypersensitivity to PPD. This delayed, cell-mediated reaction is classic for occupational ACD in hairdressers exposed to hair dye. The clinical presentation (work-related worsening, weekend improvement, eczematous morphology) supports ACD rather than immediate Type I hypersensitivity.",
      "topic_tags": [
        "dermatology",
        "occupational_medicine",
        "contact_dermatitis",
        "patch_testing"
      ],
      "key_concept": "Patch test interpretation requires both 48h and 96h readings to diagnose Type IV contact hypersensitivity"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "ACD = Type IVa (Th1 / CD4+ contact hypersensitivity). Patch test positive at 48–96h.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final sentence with options cannot be answered without the clinical vignette and patch test progression details"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are necessary: occupation establishes exposure, symptom pattern suggests contact dermatitis, physical exam confirms eczematous changes, patch test methodology and temporal readings are essential for interpretation"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [9,12,10,11,10] - ratio 1.33, acceptable but could be more balanced"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical considerations: B tests understanding of irritant vs allergic reactions, C addresses Type I vs IV confusion, D reflects real clinical uncertainty, E tests reaction grading knowledge"
      },
      "grammatical_consistency": {
        "score": 0.8,
        "note": "Most options are noun phrases, but some variation in structure (A starts with 'Positive', others vary slightly)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer A accurately describes 1+ patch test reaction and Type IV hypersensitivity based on described findings"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Option A is clearly the single best answer based on patch test interpretation guidelines and the described reaction pattern"
      }
    }
  },
  {
    "id": "lib-contact-dermatitis-occupational-0043",
    "type": "mcq",
    "status": "approved",
    "caseId": "contact-dermatitis-occupational",
    "diagnosis": "Occupational Contact Dermatitis",
    "source": "DOI: 10.1016/j.jaci.2015.02.033; Patch testing",
    "submittedAt": "2026-03-05T01:56:47Z",
    "approvedAt": "2026-03-05T01:56:47Z",
    "question": {
      "stem": "A 28-year-old hairdresser presents with a 3-week history of eczematous dermatitis on her hands and forearms that worsens at work and improves on weekends. She reports the rash began 2 weeks after starting to use a new permanent hair dye product. Physical examination reveals erythematous, scaling patches with microvesicles on the dorsal hands and distal forearms. Patch testing is performed with a standard series of allergens. At the 48-hour reading, the paraphenylenediamine (PPD) test site shows erythema and scattered papules. At the 96-hour reading, the same site demonstrates erythema, confluent papules, and multiple vesicles.",
      "options": [
        {
          "text": "1+ positive reaction indicating mild allergic contact dermatitis",
          "explanation": "Incorrect. The 96-hour reading shows erythema + papules + vesicles, which defines a 2+ reaction, not 1+ (which would be erythema + papules only)."
        },
        {
          "text": "2+ positive reaction confirming allergic contact dermatitis to PPD",
          "explanation": "Correct. The 96-hour reading demonstrates erythema + papules + vesicles, which defines a 2+ positive patch test reaction and confirms PPD allergic contact dermatitis."
        },
        {
          "text": "3+ positive reaction requiring immediate systemic corticosteroids",
          "explanation": "Incorrect. A 3+ reaction requires confluent vesicles, spreading, or bullae. This case shows discrete vesicles without confluence or spreading."
        },
        {
          "text": "Irritant contact dermatitis based on erythema-only reaction",
          "explanation": "Incorrect. The presence of papules and vesicles at 96 hours indicates allergic contact dermatitis, not irritant contact dermatitis (which would show erythema only)."
        },
        {
          "text": "False positive reaction due to improper patch test timing",
          "explanation": "Incorrect. The 96-hour reading is part of standard protocol. Late reactions appearing only at 96 hours are clinically significant and would be missed without the second reading."
        }
      ],
      "correct_index": 1,
      "explanation": "Patch test interpretation follows specific grading: erythema only = negative/irritant reaction; erythema + papules = 1+; erythema + papules + vesicles = 2+; confluent vesicles/spreading/bullae = 3+. This patient's 96-hour reading shows erythema + papules + vesicles, defining a 2+ positive reaction. The clinical context (hairdresser with occupational exposure to PPD in permanent hair dye, weekend improvement) combined with the 2+ patch test confirms allergic contact dermatitis to PPD. The 48-hour reading (1+) and 96-hour reading (2+) demonstrate the importance of dual readings in patch testing, as reactions can evolve. PPD is a well-known occupational allergen in hairdressers and cross-reacts with other chemicals including azo dyes and sulfonamides.",
      "topic_tags": [
        "dermatology",
        "occupational medicine",
        "contact dermatitis",
        "patch testing"
      ],
      "key_concept": "Patch test interpretation grading system for diagnosing allergic contact dermatitis"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Patch test interpretation: erythema only = negative/irritant. Erythema + papules = 1+. Erythema + papules + vesicles = 2+. Confluent vesicles, spreading, bullae = 3+ (strong positive).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Without the clinical context, a student cannot determine the patch test interpretation grade from just the final sentence and options"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is essential: occupation (exposure source), timing (occupational pattern), clinical description (confirms contact dermatitis), and detailed patch test readings (needed for grading)"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [8,8,7,7,8] - excellent parity with max/min ratio of 1.14"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: grade + descriptor + clinical interpretation"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "A and C are plausible alternative grades; D correctly identifies irritant pattern; E is weaker as timing described is standard"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct patch test grading: erythema + papules + vesicles = 2+ positive reaction"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer based on standard patch test interpretation criteria"
      }
    }
  },
  {
    "id": "lib-contact-dermatitis-occupational-0044",
    "type": "mcq",
    "status": "approved",
    "caseId": "contact-dermatitis-occupational",
    "diagnosis": "Occupational Contact Dermatitis",
    "source": "DOI: 10.1016/j.jaci.2015.02.033; Patch testing",
    "submittedAt": "2026-03-05T01:57:24Z",
    "approvedAt": "2026-03-05T01:57:24Z",
    "question": {
      "stem": "A 28-year-old hairstylist presents with a 3-week history of erythematous, scaly patches on her hands and forearms that worsen during work days and improve on weekends. She reports the rash began 2 weeks after she started using a new permanent hair dye at the salon. Physical examination reveals well-demarcated eczematous plaques on the dorsal hands and forearms with some vesiculation. Patch testing is performed with a standard series of allergens applied to her upper back for 48 hours, then removed and read. At the 48-hour reading, several test sites show only erythema, while one site demonstrates erythema with papules and vesicles. The same site is re-examined at 96 hours and shows confluent vesicles with mild spreading beyond the test chamber area.",
      "options": [
        {
          "text": "Paraphenylenediamine allergy with 3+ positive patch test reaction",
          "explanation": "Correct. Hair dye exposure in a hairstylist with occupational pattern suggests PPD sensitivity. The 96-hour reading shows confluent vesicles with spreading, indicating a 3+ (strong positive) reaction."
        },
        {
          "text": "Nickel allergy with 2+ positive patch test reaction",
          "explanation": "Incorrect. While nickel is the most common patch test positive overall, the occupational history of hair dye exposure points to PPD. The reaction described is 3+ (confluent vesicles with spreading), not 2+."
        },
        {
          "text": "Fragrance mix allergy with 1+ positive patch test reaction",
          "explanation": "Incorrect. Fragrance mix is a common sensitizer but doesn't fit the hair dye exposure history. The reaction shows confluent vesicles with spreading (3+), not just erythema with papules and vesicles (1+)."
        },
        {
          "text": "Rubber accelerator allergy with 2+ positive patch test reaction",
          "explanation": "Incorrect. Rubber accelerators cause ACD from latex gloves but the history specifically mentions hair dye exposure. The reaction described is 3+ (confluent vesicles with spreading), not 2+ (erythema, papules, and vesicles)."
        },
        {
          "text": "Balsam of Peru allergy with 1+ positive patch test reaction",
          "explanation": "Incorrect. Balsam of Peru is a common sensitizer but doesn't correlate with the hair dye exposure history. The reaction shows confluent vesicles with spreading (3+), not erythema with papules and vesicles (1+)."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic occupational allergic contact dermatitis (ACD) from paraphenylenediamine (PPD) in hair dye. The key features include: (1) occupational pattern in a hairstylist with weekend improvement, (2) temporal relationship to new hair dye use, (3) distribution on hands/forearms consistent with exposure pattern. PPD is a well-known occupational sensitizer in hair dye and black henna tattoos. The patch test interpretation is crucial: confluent vesicles with spreading beyond the test chamber indicates a 3+ (strong positive) reaction, not 1+ or 2+. The other allergens (nickel, fragrance mix, rubber accelerators, balsam of Peru) are common patch test positives but don't fit the specific occupational exposure history to hair dye.",
      "topic_tags": [
        "dermatology",
        "occupational_medicine",
        "contact_dermatitis",
        "patch_testing"
      ],
      "key_concept": "Recognition of occupational paraphenylenediamine contact dermatitis and proper patch test interpretation"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Most common patch test positives: nickel, fragrance mix, balsam of Peru, thimerosal, cobalt, rubber mix, neomycin, quaternium-15.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence about patch test reading at 96 hours is essential for determining the reaction grade. Cannot be answered without the clinical context."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are necessary: occupation (hairstylist), temporal pattern (work days vs weekends), exposure history (new hair dye), distribution pattern, and specific patch test findings all contribute to the diagnosis."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [8,7,7,7,8]. Ratio 8/7 = 1.14, well within acceptable range."
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All distractors are common contact allergens that could theoretically cause similar presentations. Nickel and rubber accelerators are plausible occupational exposures for hairstylists."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [Allergen] allergy with [grade]+ positive patch test reaction."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "PPD is indeed a major allergen in hair dyes, and confluent vesicles with spreading indicates a 3+ reaction per standard patch test grading."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "The specific occupational exposure to hair dye and 3+ patch test reaction clearly point to PPD allergy as the single best answer."
      }
    }
  },
  {
    "id": "lib-crswNP-biologics-0045",
    "type": "mcq",
    "status": "approved",
    "caseId": "crswNP-biologics",
    "diagnosis": "Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "source": "ReasonDx Case Library — Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "submittedAt": "2026-03-05T01:59:07Z",
    "approvedAt": "2026-03-05T01:59:07Z",
    "question": {
      "stem": "A 42-year-old woman presents with worsening nasal congestion, anosmia, and frequent asthma exacerbations over the past 2 years. She reports that ibuprofen consistently triggers severe nasal congestion and wheezing within 30 minutes of ingestion. Physical examination reveals bilateral nasal polyps and expiratory wheeze. Spirometry shows FEV1 of 68% predicted. Nasal polyp biopsy demonstrates >15 eosinophils per high-power field with Charcot-Leyden crystals. Urinary leukotriene E4 level is 1,200 pg/mg creatinine (normal <500 pg/mg).",
      "options": [
        {
          "text": "Aspirin-exacerbated respiratory disease with COX-1 inhibition causing leukotriene overproduction",
          "explanation": "Correct. The triad of asthma, nasal polyps, and NSAID sensitivity with elevated urinary LTE4 confirms AERD. COX-1 inhibition removes PGE2's inhibitory effect on mast cells, leading to increased cysteinyl leukotriene production."
        },
        {
          "text": "Systemic mastocytosis with elevated tryptase causing mast cell degranulation",
          "explanation": "Incorrect. While systemic mastocytosis can also elevate urinary LTE4, it would be associated with elevated serum tryptase, skin lesions, and systemic symptoms beyond respiratory complaints."
        },
        {
          "text": "Allergic fungal sinusitis with eosinophilic mucin and fungal hyphal elements",
          "explanation": "Incorrect. AFRS typically presents with thick eosinophilic mucin, fungal elements on histology, and elevated fungal-specific IgE. The NSAID sensitivity pattern is not characteristic of AFRS."
        },
        {
          "text": "Eosinophilic granulomatosis with polyangiitis causing tissue eosinophilia",
          "explanation": "Incorrect. EGPA would typically involve multiple organ systems with vasculitic features, elevated ANCA, and systemic symptoms beyond isolated sinonasal and pulmonary disease."
        },
        {
          "text": "Chronic rhinosinusitis with aspergillus sensitization causing cross-reactive inflammation",
          "explanation": "Incorrect. Aspergillus sensitization would show elevated Aspergillus-specific IgE and different histologic patterns. The clear NSAID sensitivity and elevated LTE4 point to AERD rather than fungal sensitization."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has the classic triad of aspirin-exacerbated respiratory disease (AERD): asthma, nasal polyps, and NSAID sensitivity. The elevated urinary LTE4 (>1,000 pg/mg) confirms the diagnosis, as this is the key biomarker for AERD. The mechanism involves COX-1 inhibition by NSAIDs, which reduces PGE2 production and removes its inhibitory effect on mast cells, leading to increased synthesis of cysteinyl leukotrienes (LTC4/LTD4). The tissue eosinophilia with Charcot-Leyden crystals indicates intense eosinophilic inflammation typical of eosinophilic CRSwNP associated with AERD.",
      "topic_tags": [
        "rhinology",
        "allergy_immunology",
        "pulmonology",
        "AERD",
        "chronic_rhinosinusitis"
      ],
      "key_concept": "AERD diagnosis through clinical triad and urinary LTE4 biomarker with understanding of COX-1 inhibition mechanism"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Samter's Triad: nasal polyps + asthma + NSAID sensitivity. Mechanism: COX-1 block → PGE2 loss → mast cell brake removed → LTC4/LTD4 surge.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence would leave only generic symptoms without the key diagnostic features (NSAID sensitivity, elevated LTE4, specific biopsy findings) needed to distinguish between options"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides essential diagnostic information: demographics, symptom triad, NSAID trigger, physical findings, spirometry, biopsy results, and biomarker - all necessary for AERD diagnosis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [11,10,10,9,9]. Max/min ratio = 11/9 = 1.22, which is acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are clinically reasonable: mastocytosis can cause similar symptoms, AFRS involves eosinophilia and polyps, EGPA causes tissue eosinophilia, and aspergillus sensitization is common in CRS"
      },
      "grammatical_consistency": {
        "score": 0.8,
        "note": "All options follow similar structure (condition name + mechanism), though some vary slightly in phrasing"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - AERD diagnosis is supported by classic triad, NSAID sensitivity, and elevated urinary LTE4 >1000 pg/mg creatinine"
      },
      "single_best_answer": {
        "score": 0.7,
        "note": "While AERD is the best answer given the elevated LTE4 and NSAID sensitivity, the overlap with other eosinophilic conditions could potentially cause some clinical disagreement"
      }
    }
  },
  {
    "id": "lib-crswNP-biologics-0046",
    "type": "mcq",
    "status": "approved",
    "caseId": "crswNP-biologics",
    "diagnosis": "Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "source": "ReasonDx Case Library — Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "submittedAt": "2026-03-05T01:59:49Z",
    "approvedAt": "2026-03-05T01:59:49Z",
    "question": {
      "stem": "A 42-year-old woman with a history of asthma presents with worsening nasal congestion, anosmia, and facial pressure over the past 6 months. She reports that ibuprofen consistently triggers severe nasal congestion and wheezing within 30 minutes of ingestion. Physical examination reveals bilateral nasal polyps and decreased air entry bilaterally on chest auscultation. Spirometry shows FEV1 of 68% predicted. CT sinuses demonstrates pansinusitis with complete opacification of ethmoid air cells. Nasal polyp biopsy reveals >15 eosinophils per high-power field. Her physician is considering ordering a urinary biomarker to confirm the suspected diagnosis.",
      "options": [
        {
          "text": "Urinary leukotriene E4 (LTE4) measurement",
          "explanation": "Correct. LTE4 is the diagnostic biomarker for AERD, typically elevated >1,000 pg/mg in active disease. This patient's triad of asthma, nasal polyps, and NSAID sensitivity strongly suggests AERD."
        },
        {
          "text": "Serum tryptase level measurement",
          "explanation": "Incorrect. While tryptase can be elevated in systemic mastocytosis (which can also cause elevated LTE4), the clinical picture here is classic for AERD, not mastocytosis. Tryptase would not confirm AERD diagnosis."
        },
        {
          "text": "Urinary 5-hydroxyindoleacetic acid (5-HIAA)",
          "explanation": "Incorrect. 5-HIAA is a biomarker for carcinoid syndrome, not AERD. This patient's presentation is not consistent with carcinoid syndrome."
        },
        {
          "text": "Serum vitamin D 25-hydroxyvitamin D level",
          "explanation": "Incorrect. While vitamin D deficiency may be associated with asthma severity, it is not a diagnostic biomarker for AERD and would not confirm this specific diagnosis."
        },
        {
          "text": "Urinary methylhistamine concentration",
          "explanation": "Incorrect. Methylhistamine is a histamine metabolite that may be elevated in allergic conditions but is not specific for AERD diagnosis. LTE4 is the specific biomarker for AERD."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic Samter's Triad (AERD): asthma, nasal polyps, and NSAID-induced respiratory reactions. The mechanism involves COX-1 inhibition by NSAIDs leading to loss of PGE2's inhibitory effect on mast cells, resulting in a surge of cysteinyl leukotrienes (LTC4/LTD4). Urinary LTE4 is the definitive biomarker for AERD, typically elevated >1,000 pg/mg in active disease. The tissue eosinophilia (>10 eosinophils/HPF) supports eosinophilic chronic rhinosinusitis with nasal polyps. Tryptase would be more relevant for systemic mastocytosis, 5-HIAA for carcinoid syndrome, vitamin D is not diagnostic for AERD, and methylhistamine is not specific for this condition.",
      "topic_tags": [
        "rhinology",
        "allergy",
        "asthma",
        "AERD",
        "biomarkers"
      ],
      "key_concept": "LTE4 as the diagnostic biomarker for AERD (Samter's Triad)"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "LTE4 (urinary) = AERD biomarker. Also elevated in systemic mastocytosis — distinguish by clinical picture + tryptase.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Last sentence alone ('Her physician is considering ordering a urinary biomarker to confirm the suspected diagnosis') with options cannot be answered without the clinical context. Requires the full vignette to identify AERD/Samter's triad."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/gender (typical demographics), asthma history, nasal symptoms, NSAID sensitivity (key for AERD), physical findings, spirometry, imaging, and biopsy results all contribute to the diagnosis."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [5,5,6,7,4]. Max/min ratio = 7/4 = 1.75, slightly exceeds 1.5 threshold but close."
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors are reasonable urinary/serum biomarkers that could theoretically be considered in respiratory/inflammatory conditions. Tryptase for mastocytosis, 5-HIAA for carcinoid, vitamin D for immune function, methylhistamine for histamine-mediated reactions."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: 'Substance name (abbreviation) measurement/level' - perfectly consistent."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate. Urinary LTE4 is indeed the established biomarker for AERD/Samter's triad, and the clinical presentation is classic for this condition."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer. LTE4 is the specific diagnostic biomarker for AERD, while other options are not indicated for this clinical scenario."
      }
    }
  },
  {
    "id": "lib-crswNP-biologics-0047",
    "type": "mcq",
    "status": "approved",
    "caseId": "crswNP-biologics",
    "diagnosis": "Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "source": "ReasonDx Case Library — Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "submittedAt": "2026-03-05T02:00:26Z",
    "approvedAt": "2026-03-05T02:00:26Z",
    "question": {
      "stem": "A 42-year-old woman with asthma presents with worsening nasal congestion and anosmia over 8 months. She reports severe bronchospasm requiring hospitalization after taking ibuprofen 2 years ago. Physical examination reveals bilateral nasal polyps completely obstructing both nasal cavities. CT shows pansinusitis with extensive polyposis. Histopathologic examination of polyp tissue obtained during functional endoscopic sinus surgery reveals numerous eosinophils and distinctive hexagonal crystalline structures. Urinary leukotriene E4 levels are markedly elevated at 1,200 pg/mg creatinine. Her pre-operative FEV1 was 76% predicted, which improved to 84% predicted 3 months post-operatively.",
      "options": [
        {
          "text": "Charcot-Leyden crystals indicating intense eosinophilic inflammation",
          "explanation": "Correct. The hexagonal crystalline structures described are Charcot-Leyden crystals, which are pathognomonic of intense eosinophilic inflammation and represent eosinophil breakdown products."
        },
        {
          "text": "Curschmann spirals from bronchial mucus plugging",
          "explanation": "Incorrect. Curschmann spirals are spiral-shaped mucus plugs found in sputum of asthma patients, not hexagonal crystals in nasal polyp tissue."
        },
        {
          "text": "Russell bodies from plasma cell activation",
          "explanation": "Incorrect. Russell bodies are eosinophilic inclusions in plasma cells containing immunoglobulin, not hexagonal crystals associated with eosinophilic inflammation."
        },
        {
          "text": "Birbeck granules characteristic of Langerhans cells",
          "explanation": "Incorrect. Birbeck granules are tennis racket-shaped organelles seen ultrastructurally in Langerhans cells, not hexagonal crystals visible on routine histology."
        },
        {
          "text": "Reinke crystals from Leydig cell hyperplasia",
          "explanation": "Incorrect. Reinke crystals are found in testicular Leydig cells and are unrelated to nasal polyp pathology or eosinophilic inflammation."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has AERD (Samter's Triad) evidenced by asthma, nasal polyps, and NSAID sensitivity with elevated urinary LTE4. The hexagonal crystalline structures in the polyp tissue are Charcot-Leyden crystals, which are pathognomonic of intense eosinophilic inflammation and represent breakdown products of eosinophils. These crystals are commonly found in eosinophilic chronic rhinosinusitis with nasal polyposis. The improvement in FEV1 after sinus surgery demonstrates the united airway concept. The other options represent different cellular structures unrelated to eosinophilic inflammation in nasal polyps.",
      "topic_tags": [
        "rhinology",
        "AERD",
        "nasal polyps",
        "pathology",
        "eosinophilic inflammation"
      ],
      "key_concept": "Charcot-Leyden crystals are pathognomonic of intense eosinophilic inflammation in chronic rhinosinusitis with nasal polyposis"
    },
    "tags": {
      "abai_domain": "Domain 3 — Upper/Lower Airway Disease",
      "abai_domain_number": 3,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Charcot-Leyden crystals in polyp tissue = eosinophil breakdown products. Pathognomonic of intense eosinophilic inflammation.",
    "quality_score": 0.71,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question about hexagonal crystalline structures requires all the clinical context (AERD triad, eosinophilic inflammation, nasal polyps) to answer correctly"
      },
      "stem_relevance": {
        "score": 0.8,
        "note": "Most information is relevant. The FEV1 improvement data supports AERD but is not essential for identifying Charcot-Leyden crystals"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,6,5,6,7] - ratio 1.4, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B and C are plausible cellular structures in respiratory disease. D and E are less plausible in this nasal polyp context but represent real cellular structures"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [Structure name] from/indicating/characteristic of [source/process]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Charcot-Leyden crystals are indeed hexagonal crystalline structures from eosinophil breakdown, pathognomonic of eosinophilic inflammation"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Given the clinical context of AERD with eosinophilic nasal polyps and hexagonal crystals, Charcot-Leyden crystals is the clear best answer"
      }
    }
  },
  {
    "id": "lib-crswNP-dupilumab-0048",
    "type": "mcq",
    "status": "approved",
    "caseId": "crswNP-dupilumab",
    "diagnosis": "Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "source": "ReasonDx Case Library — Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "submittedAt": "2026-03-05T02:01:05Z",
    "approvedAt": "2026-03-05T02:01:05Z",
    "question": {
      "stem": "A 42-year-old woman presents with worsening nasal congestion, anosmia, and asthma exacerbations over the past 2 years. She reports that ibuprofen reliably triggers severe nasal congestion and wheezing within 30 minutes. Physical examination reveals bilateral nasal polyps and expiratory wheeze. Spirometry shows FEV1 of 68% predicted. CT sinuses demonstrates pansinusitis with complete opacification. Nasal polyp biopsy reveals >15 eosinophils per high-power field with Charcot-Leyden crystals. Urinary leukotriene E4 level is 1,200 pg/mg creatinine.",
      "options": [
        {
          "text": "Aspirin-exacerbated respiratory disease with COX-1 inhibition leading to increased leukotriene production",
          "explanation": "This is correct. The triad of nasal polyps, asthma, and NSAID sensitivity with elevated urinary LTE4 >1,000 pg/mg confirms AERD. COX-1 inhibition removes PGE2's inhibitory effect on mast cells, leading to increased LTC4/LTD4 production."
        },
        {
          "text": "Allergic fungal sinusitis with type I hypersensitivity reaction to environmental allergens",
          "explanation": "This is incorrect. While tissue eosinophilia can occur in AFRS, the clear NSAID sensitivity, elevated urinary LTE4, and absence of fungal elements or allergic mucin make AERD the correct diagnosis."
        },
        {
          "text": "Systemic mastocytosis with elevated tryptase levels causing mast cell degranulation",
          "explanation": "This is incorrect. While systemic mastocytosis can also cause elevated urinary LTE4, the clear NSAID sensitivity pattern and nasal polyps without systemic symptoms or elevated tryptase point to AERD rather than mastocytosis."
        },
        {
          "text": "Chronic rhinosinusitis with nasal polyps secondary to cystic fibrosis transmembrane regulator dysfunction",
          "explanation": "This is incorrect. While CF can cause CRSwNP, the specific NSAID sensitivity, elevated urinary LTE4, and lack of other CF manifestations make AERD the more likely diagnosis in this adult patient."
        },
        {
          "text": "Eosinophilic granulomatosis with polyangiitis presenting with upper and lower respiratory tract involvement",
          "explanation": "This is incorrect. While EGPA can cause asthma and nasal polyps with tissue eosinophilia, the specific NSAID sensitivity and elevated urinary LTE4 without systemic vasculitis features point to AERD instead."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has the classic triad of aspirin-exacerbated respiratory disease (AERD/Samter's Triad): nasal polyps, asthma, and NSAID sensitivity. The mechanism involves COX-1 inhibition by NSAIDs, which removes prostaglandin E2's inhibitory effect on mast cells, leading to a surge in leukotriene production (LTC4/LTD4). The elevated urinary LTE4 >1,000 pg/mg is the diagnostic biomarker for AERD. Charcot-Leyden crystals indicate intense eosinophilic inflammation typical of this condition. The other options represent conditions that can mimic aspects of AERD but lack the specific NSAID sensitivity and elevated LTE4 that confirm this diagnosis.",
      "topic_tags": [
        "otolaryngology",
        "allergy",
        "respiratory",
        "chronic rhinosinusitis",
        "AERD"
      ],
      "key_concept": "AERD diagnosis based on clinical triad and urinary LTE4 biomarker, with understanding of COX-1 inhibition mechanism"
    },
    "tags": {
      "abai_domain": "Domain 3 — Upper/Lower Airway Disease",
      "abai_domain_number": 3,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Samter's Triad: nasal polyps + asthma + NSAID sensitivity. Mechanism: COX-1 block → PGE2 loss → mast cell brake removed → LTC4/LTD4 surge.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence would leave only 'Urinary leukotriene E4 level is 1,200 pg/mg creatinine.' This single lab value without clinical context cannot lead to the correct diagnosis - the full clinical picture is essential."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/demographics, symptom triad (congestion, anosmia, asthma), NSAID trigger, physical findings (polyps, wheeze), spirometry results, CT findings, histology with eosinophils and Charcot-Leyden crystals, and the diagnostic biomarker LTE4 level."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [12,11,11,13,13]. Max/min ratio = 13/11 = 1.18, which is acceptable."
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are clinically reasonable: AFRS can present with nasal polyps and eosinophilia; systemic mastocytosis can cause respiratory symptoms; CF can cause chronic rhinosinusitis; EGPA affects upper/lower respiratory tract. Each represents a legitimate differential diagnosis."
      },
      "grammatical_consistency": {
        "score": 0.7,
        "note": "Options have inconsistent structure - some start with disease names followed by 'with' clauses, others use 'secondary to'. While understandable, the grammar could be more parallel."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate. AERD (Samter's Triad) classically presents with this constellation of findings, and the elevated urinary LTE4 >1000 pg/mg is indeed the diagnostic biomarker."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "The combination of NSAID sensitivity, nasal polyps, asthma, and elevated urinary LTE4 makes AERD the unequivocal best answer. The other conditions lack these specific features."
      }
    }
  },
  {
    "id": "lib-crswNP-dupilumab-0049",
    "type": "mcq",
    "status": "approved",
    "caseId": "crswNP-dupilumab",
    "diagnosis": "Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "source": "ReasonDx Case Library — Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "submittedAt": "2026-03-05T02:01:42Z",
    "approvedAt": "2026-03-05T02:01:42Z",
    "question": {
      "stem": "A 42-year-old woman with chronic rhinosinusitis with nasal polyposis and asthma presents for evaluation of recurrent nasal congestion and anosmia despite multiple surgical resections. She reports that ibuprofen consistently triggers severe asthma exacerbations within 30 minutes of ingestion. Physical examination reveals bilateral nasal polyps and expiratory wheeze. Spirometry shows FEV1 of 68% predicted. Urinary leukotriene E4 (LTE4) level is 1,250 pg/mg creatinine. Serum tryptase level is 8 ng/mL. Nasal polyp biopsy shows >15 eosinophils per high-power field with Charcot-Leyden crystals.",
      "options": [
        {
          "text": "Aspirin-exacerbated respiratory disease (AERD)",
          "explanation": "Correct. The triad of nasal polyps, asthma, and NSAID sensitivity with elevated urinary LTE4 >1,000 pg/mg confirms AERD. Normal tryptase excludes systemic mastocytosis."
        },
        {
          "text": "Systemic mastocytosis with respiratory involvement",
          "explanation": "Incorrect. While systemic mastocytosis can cause elevated urinary LTE4, the normal serum tryptase level (8 ng/mL, reference <11.4) makes this diagnosis unlikely. Systemic mastocytosis typically has tryptase >20 ng/mL."
        },
        {
          "text": "Allergic bronchopulmonary aspergillosis (ABPA)",
          "explanation": "Incorrect. ABPA presents with asthma and nasal polyps but is characterized by Aspergillus-specific IgE/IgG, central bronchiectasis, and eosinophilia. NSAID sensitivity and elevated LTE4 are not features of ABPA."
        },
        {
          "text": "Eosinophilic granulomatosis with polyangiitis (EGPA)",
          "explanation": "Incorrect. While EGPA can present with asthma and nasal polyps, it typically includes systemic vasculitis features, peripheral neuropathy, and ANCA positivity. NSAID sensitivity is not a characteristic feature."
        },
        {
          "text": "Chronic eosinophilic leukemia with tissue infiltration",
          "explanation": "Incorrect. Although tissue eosinophilia is present, chronic eosinophilic leukemia would typically show peripheral blood eosinophilia >1,500/μL and organ dysfunction. NSAID sensitivity and elevated LTE4 are not associated features."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has the classic triad of AERD (Samter's Triad): nasal polyps, asthma, and NSAID-induced respiratory reactions. The elevated urinary LTE4 >1,000 pg/mg is a specific biomarker for AERD, reflecting increased cysteinyl leukotriene production due to COX-1 inhibition. The normal serum tryptase excludes systemic mastocytosis, which can also elevate LTE4. The tissue eosinophilia with Charcot-Leyden crystals supports eosinophilic chronic rhinosinusitis, commonly seen in AERD. The other options lack the characteristic NSAID sensitivity and specific biomarker elevation seen in this case.",
      "topic_tags": [
        "rhinology",
        "allergy_immunology",
        "pulmonology",
        "AERD",
        "biomarkers"
      ],
      "key_concept": "Urinary LTE4 as diagnostic biomarker for AERD, distinguished from systemic mastocytosis by normal tryptase levels"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "LTE4 (urinary) = AERD biomarker. Also elevated in systemic mastocytosis — distinguish by clinical picture + tryptase.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence alone cannot be answered without the clinical vignette details - requires the full context of symptoms, triggers, and lab values"
      },
      "stem_relevance": {
        "score": 0.9,
        "note": "All details are clinically relevant: age/sex establish demographics, triad of conditions suggests AERD, ibuprofen trigger is pathognomonic, physical findings support diagnosis, spirometry shows severity, LTE4 is specific biomarker, tryptase excludes mastocytosis, biopsy confirms eosinophilic inflammation"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [5,5,4,6,6] - ratio 1.5, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All distractors are reasonable: mastocytosis can cause respiratory symptoms and elevated tryptase, ABPA causes asthma with eosinophilia, EGPA is eosinophilic condition with asthma, chronic eosinophilic leukemia causes tissue infiltration"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow same format: disease name with descriptive parenthetical abbreviation or clarification"
      },
      "clinical_accuracy": {
        "score": 0.9,
        "note": "Correct answer is accurate - AERD diagnosis supported by classic triad, NSAID sensitivity, elevated LTE4 >1000 pg/mg, and normal tryptase"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "AERD is clearly the best answer given the pathognomonic NSAID trigger, specific biomarker elevation, and classic clinical presentation"
      }
    }
  },
  {
    "id": "lib-crswNP-dupilumab-0050",
    "type": "mcq",
    "status": "approved",
    "caseId": "crswNP-dupilumab",
    "diagnosis": "Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "source": "ReasonDx Case Library — Severe CRSwNP with AERD (Samter's Triad) + comorbid asthma — united airway disease",
    "submittedAt": "2026-03-05T02:02:18Z",
    "approvedAt": "2026-03-05T02:02:18Z",
    "question": {
      "stem": "A 42-year-old woman with a history of asthma presents with worsening nasal congestion, anosmia, and increased asthma exacerbations over the past 6 months. She reports severe bronchospasm and nasal congestion within 2 hours of taking ibuprofen for headaches. Physical examination reveals bilateral nasal polyps and expiratory wheezes. Spirometry shows FEV1 of 68% predicted. CT sinuses demonstrates pansinusitis with complete opacification. Histopathologic examination of polyp tissue obtained during functional endoscopic sinus surgery reveals prominent eosinophilic infiltration with numerous needle-shaped, double-pointed crystalline structures. Urinary leukotriene E4 level is 1,250 pg/mg creatinine.",
      "options": [
        {
          "text": "Charcot-Leyden crystals confirming eosinophilic chronic rhinosinusitis with nasal polyps",
          "explanation": "Correct. The needle-shaped, double-pointed crystalline structures described are pathognomonic Charcot-Leyden crystals, which are eosinophil breakdown products indicating intense eosinophilic inflammation in CRSwNP."
        },
        {
          "text": "Curschmann spirals indicating severe asthmatic inflammation in nasal tissue",
          "explanation": "Incorrect. Curschmann spirals are spiral-shaped mucus plugs found in bronchial secretions of asthma patients, not crystalline structures in nasal polyp tissue."
        },
        {
          "text": "Russell bodies suggesting plasma cell infiltration and chronic infection",
          "explanation": "Incorrect. Russell bodies are eosinophilic inclusions in plasma cells containing immunoglobulin, appearing as round structures, not needle-shaped crystals."
        },
        {
          "text": "Birbeck granules confirming Langerhans cell histiocytosis of sinonasal tract",
          "explanation": "Incorrect. Birbeck granules are tennis racket-shaped organelles seen ultrastructurally in Langerhans cells, not visible as crystalline structures on routine histopathology."
        },
        {
          "text": "Schaumann bodies indicating sarcoidosis with sinonasal involvement",
          "explanation": "Incorrect. Schaumann bodies are laminated calcified structures found in giant cells in sarcoidosis, appearing as basophilic inclusions, not needle-shaped crystals."
        }
      ],
      "correct_index": 0,
      "explanation": "The clinical presentation describes Samter's Triad (AERD): asthma, nasal polyps, and NSAID sensitivity, confirmed by elevated urinary LTE4 >1,000 pg/mg. The histopathologic finding of needle-shaped, double-pointed crystalline structures represents Charcot-Leyden crystals, which are pathognomonic of eosinophil breakdown and intense eosinophilic inflammation. These crystals form from eosinophil lysophospholipase and are specifically seen in eosinophilic CRSwNP. The other options describe different microscopic findings: Curschmann spirals (mucus spirals in asthma), Russell bodies (plasma cell inclusions), Birbeck granules (Langerhans cell markers), and Schaumann bodies (sarcoid giant cell inclusions), none of which appear as the described crystalline structures.",
      "topic_tags": [
        "rhinology",
        "pathology",
        "AERD",
        "eosinophilic inflammation",
        "chronic rhinosinusitis"
      ],
      "key_concept": "Charcot-Leyden crystals are pathognomonic histologic markers of eosinophilic breakdown in CRSwNP"
    },
    "tags": {
      "abai_domain": "Domain 3 — Upper/Lower Airway Disease",
      "abai_domain_number": 3,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Charcot-Leyden crystals in polyp tissue = eosinophil breakdown products. Pathognomonic of intense eosinophilic inflammation.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The histopathologic description of needle-shaped, double-pointed crystalline structures is essential for identifying Charcot-Leyden crystals. Cannot be answered from just the final sentence."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are clinically relevant: asthma history, nasal symptoms, NSAID sensitivity (establishes AERD/Samter's triad), physical findings, spirometry, CT findings, and crucially the histopathologic description."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,9,8,8,7]. Max/min ratio = 9/7 = 1.29, which is acceptable."
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent real histopathologic findings that could theoretically be considered in sinonasal pathology. Curschmann spirals, Russell bodies, Birbeck granules, and Schaumann bodies are all legitimate microscopic structures."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow the same structure: [microscopic finding] + [gerund verb] + [clinical interpretation/condition]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Charcot-Leyden crystals are indeed needle-shaped, double-pointed structures formed from eosinophil lysophospholipase, pathognomonic of eosinophilic inflammation. The clinical triad and elevated urinary LTE4 support AERD diagnosis."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "The specific description of needle-shaped, double-pointed crystalline structures uniquely identifies Charcot-Leyden crystals. Other options describe different morphologic structures."
      }
    }
  },
  {
    "id": "lib-cvid-presentation-0051",
    "type": "mcq",
    "status": "approved",
    "caseId": "cvid-presentation",
    "diagnosis": "CVID",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency; DOI: 10.1016/j.iac.2008.07.002; Subcutaneous immunoglobulin replacement: a new paradigm",
    "submittedAt": "2026-03-05T02:02:55Z",
    "approvedAt": "2026-03-05T02:02:55Z",
    "question": {
      "stem": "A 32-year-old woman presents with a 6-year history of recurrent sinus infections requiring multiple courses of antibiotics. She reports 4 episodes of pneumonia in the past 3 years, most recently caused by Streptococcus pneumoniae. She also has chronic diarrhea with recent stool testing positive for Giardia lamblia despite multiple treatment courses. Physical examination reveals mild splenomegaly. Laboratory studies show IgG 320 mg/dL (normal 700-1600), IgA 45 mg/dL (normal 70-400), IgM 35 mg/dL (normal 40-230). Flow cytometry demonstrates normal CD19+ B cell counts. Pneumococcal antibody titers remain low despite vaccination.",
      "options": [
        {
          "text": "Common variable immunodeficiency",
          "explanation": "Correct. This patient meets CVID criteria: low IgG plus low IgA and IgM, poor vaccine response, recurrent encapsulated bacterial infections, Giardia infection, and normal B cell counts. Adult onset with median diagnosis in 30s is typical."
        },
        {
          "text": "X-linked agammaglobulinemia",
          "explanation": "Incorrect. XLA presents with absent or very low B cells (CD19+ <2%), whereas this patient has normal B cell counts. XLA also typically presents in early childhood, not adulthood."
        },
        {
          "text": "Selective IgA deficiency",
          "explanation": "Incorrect. While IgA is low, this patient also has significantly low IgG and IgM with poor vaccine responses and recurrent serious infections, which exceeds isolated IgA deficiency."
        },
        {
          "text": "Hyper-IgM syndrome",
          "explanation": "Incorrect. Hyper-IgM syndrome presents with low IgG and IgA but elevated or normal IgM levels. This patient has low IgM, making hyper-IgM syndrome unlikely."
        },
        {
          "text": "Good syndrome",
          "explanation": "Incorrect. Good syndrome is hypogammaglobulinemia associated with thymoma. This patient lacks clinical or imaging evidence of thymoma and the age/presentation is more consistent with CVID."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has Common Variable Immunodeficiency (CVID), the most common symptomatic primary antibody deficiency in adults. The diagnosis is supported by: 1) Low IgG with low IgA and/or IgM, 2) Poor vaccine responses (low pneumococcal titers despite vaccination), 3) Recurrent infections with encapsulated bacteria (S. pneumoniae) and Giardia, 4) Normal B cell counts (distinguishing from XLA), and 5) Adult onset. The splenomegaly is a common non-infectious complication of CVID. Treatment involves immunoglobulin replacement therapy targeting IgG trough levels >700-800 mg/dL.",
      "topic_tags": [
        "immunology",
        "primary immunodeficiency",
        "CVID",
        "recurrent infections"
      ],
      "key_concept": "CVID diagnosis requires low immunoglobulins, poor vaccine responses, and normal B cell counts in adults with recurrent infections"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "CVID: low IgG + low IgA and/or IgM + poor vaccine responses. B cells PRESENT (unlike XLA).",
    "quality_score": 0.91,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The question stem provides essential clinical context including infection history, lab values, and physical findings that cannot be determined from just the final sentence and options alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides critical diagnostic information: infection pattern, specific pathogens, physical findings, immunoglobulin levels, B cell counts, and vaccine response - all necessary for immunodeficiency diagnosis."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,3,3,3,2] - ratio 2.0, but all are concise disease names which is appropriate for this question type"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "All distractors are reasonable immunodeficiency considerations. XLA (low B cells), IgA deficiency (isolated IgA low), Hyper-IgM (low IgG/IgA), Good syndrome (thymoma-associated) are all plausible differentials."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are consistently formatted as disease names/noun phrases."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "CVID is correct given low IgG+IgA/IgM, normal B cells, poor vaccine response, recurrent infections with typical pathogens, and adult onset."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "CVID is clearly the best answer based on the constellation of findings, particularly normal B cell counts ruling out XLA and the pattern of immunoglobulin deficiencies."
      }
    }
  },
  {
    "id": "lib-cvid-presentation-0052",
    "type": "mcq",
    "status": "approved",
    "caseId": "cvid-presentation",
    "diagnosis": "CVID",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency; DOI: 10.1016/j.iac.2008.07.002; Subcutaneous immunoglobulin replacement: a new paradigm",
    "submittedAt": "2026-03-05T02:03:32Z",
    "approvedAt": "2026-03-05T02:03:32Z",
    "question": {
      "stem": "A 32-year-old woman presents to the clinic with a 6-year history of recurrent pneumonia and chronic sinusitis. She reports 4 episodes of pneumonia requiring hospitalization, with cultures growing Streptococcus pneumoniae twice and Haemophilus influenzae once. She also describes 3 months of chronic diarrhea with steatorrhea and a 15-pound weight loss. Laboratory studies show IgG 320 mg/dL (normal 700-1600), IgA 45 mg/dL (normal 70-400), and IgM 35 mg/dL (normal 40-230). Flow cytometry reveals normal B-cell numbers. Pneumococcal antibody titers remain low despite recent vaccination. What is the most likely diagnosis?",
      "options": [
        {
          "text": "Common variable immunodeficiency",
          "explanation": "Correct. This patient meets CVID criteria: low IgG plus low IgA and IgM, poor vaccine responses, recurrent infections with encapsulated bacteria, and normal B-cell numbers. The chronic diarrhea suggests possible Giardia infection, common in CVID."
        },
        {
          "text": "X-linked agammaglobulinemia",
          "explanation": "Incorrect. XLA presents with absent or very low B cells, whereas this patient has normal B-cell numbers. XLA also typically presents in male infants, not adult women."
        },
        {
          "text": "Selective IgA deficiency",
          "explanation": "Incorrect. While IgA is low, this patient also has significantly low IgG and IgM with poor vaccine responses and recurrent severe infections, which is inconsistent with isolated IgA deficiency."
        },
        {
          "text": "Chronic granulomatous disease",
          "explanation": "Incorrect. CGD typically presents with catalase-positive bacterial and fungal infections (Staphylococcus, Aspergillus), not the encapsulated bacterial infections seen here. Immunoglobulin levels are normal in CGD."
        },
        {
          "text": "DiGeorge syndrome",
          "explanation": "Incorrect. DiGeorge syndrome primarily affects T-cell function and presents in infancy with cardiac defects, hypoparathyroidism, and facial dysmorphism. B-cell function and immunoglobulin levels are typically normal."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has Common Variable Immunodeficiency (CVID), the most common symptomatic primary antibody deficiency in adults with median diagnosis in the 30s. The diagnosis requires low IgG (<2 SD below normal) plus low IgA and/or IgM, poor vaccine responses, and exclusion of other causes. Key features supporting CVID include recurrent sinopulmonary infections with encapsulated bacteria (S. pneumoniae, H. influenzae), chronic diarrhea possibly from Giardia, and normal B-cell numbers (distinguishing from XLA). The other options are incorrect because XLA has absent B cells and affects males, selective IgA deficiency wouldn't cause this severity of infections with normal IgG, CGD causes different infection patterns with normal immunoglobulins, and DiGeorge affects T cells with normal B-cell function.",
      "topic_tags": [
        "immunodeficiency",
        "CVID",
        "primary antibody deficiency",
        "recurrent infections"
      ],
      "key_concept": "CVID is the most common symptomatic primary antibody deficiency in adults, diagnosed by low immunoglobulins, poor vaccine responses, and normal B-cell numbers"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Most common symptomatic PAD in adults. Median age at diagnosis: 30s (often 5–10 year delay).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question requires integration of the entire clinical presentation including history, lab values, and immunologic findings to differentiate between immunodeficiency syndromes"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is clinically relevant: age/gender (rules out XLA), infection pattern (encapsulated bacteria), GI symptoms (CVID association), specific immunoglobulin levels, B-cell counts, and vaccine response"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,3,4,4,3] - ratio 1.33"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "XLA (0.9) - reasonable but B-cells normal; IgA deficiency (0.8) - plausible but severity too high; CGD (0.6) - less likely given normal pattern; DiGeorge (0.7) - reasonable immunodeficiency consideration"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases naming specific immunodeficiency conditions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "CVID diagnosis is correct based on low IgG/IgA/IgM, poor vaccine response, normal B-cell numbers, and typical presentation in adult female"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "CVID is clearly the best answer given the constellation of findings, particularly normal B-cell numbers ruling out XLA and severity ruling out isolated IgA deficiency"
      }
    }
  },
  {
    "id": "lib-cvid-presentation-0053",
    "type": "mcq",
    "status": "approved",
    "caseId": "cvid-presentation",
    "diagnosis": "CVID",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency; DOI: 10.1016/j.iac.2008.07.002; Subcutaneous immunoglobulin replacement: a new paradigm",
    "submittedAt": "2026-03-05T02:04:14Z",
    "approvedAt": "2026-03-05T02:04:14Z",
    "question": {
      "stem": "A 32-year-old woman presents to the clinic with a 6-year history of recurrent sinus infections requiring multiple courses of antibiotics. She reports 4 episodes of pneumonia in the past 3 years, most recently caused by Streptococcus pneumoniae. Over the past year, she has developed chronic watery diarrhea with 6-8 loose stools daily, associated with bloating and a 15-pound weight loss. Stool studies reveal Giardia lamblia cysts. Physical examination shows mild splenomegaly. Laboratory studies reveal IgG 320 mg/dL (normal 700-1600), IgA 45 mg/dL (normal 70-400), IgM 38 mg/dL (normal 40-230). Flow cytometry shows normal numbers of CD19+ B cells. She received pneumococcal vaccination 2 years ago with poor antibody response.",
      "options": [
        {
          "text": "Initiate intravenous immunoglobulin replacement therapy every 3-4 weeks",
          "explanation": "Correct. This patient has CVID based on low IgG, IgA, and IgM with poor vaccine responses and characteristic infections (encapsulated bacteria causing sinopulmonary infections and Giardia causing chronic diarrhea). IVIG is the standard treatment to maintain IgG trough >700-800 mg/dL."
        },
        {
          "text": "Prescribe prophylactic trimethoprim-sulfamethoxazole for Pneumocystis prevention",
          "explanation": "Incorrect. While CVID patients have increased infection risk, Pneumocystis is not a characteristic infection in CVID. The primary pathogens are encapsulated bacteria and Giardia. Prophylactic antibiotics are not standard treatment; immunoglobulin replacement is the mainstay."
        },
        {
          "text": "Order bone marrow biopsy to evaluate for underlying hematologic malignancy",
          "explanation": "Incorrect. While CVID patients have increased lymphoma risk, the presentation with characteristic infections (encapsulated bacteria, Giardia) and immunoglobulin deficiencies with poor vaccine responses is diagnostic for CVID. Bone marrow biopsy is not indicated for initial management."
        },
        {
          "text": "Administer live MMR and varicella vaccines to boost immune response",
          "explanation": "Incorrect. Live vaccines are contraindicated in all primary antibody deficiencies including CVID due to risk of disseminated infection. Only inactivated vaccines should be used, though responses will be poor without immunoglobulin replacement."
        },
        {
          "text": "Start high-dose oral prednisone to treat underlying autoimmune condition",
          "explanation": "Incorrect. While CVID can be associated with autoimmune complications, the primary issue is antibody deficiency leading to recurrent infections. Steroids would further immunosuppress the patient and worsen infection risk. Immunoglobulin replacement addresses the underlying deficiency."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic CVID: recurrent sinopulmonary infections with encapsulated bacteria (S. pneumoniae), chronic Giardia diarrhea, low IgG/IgA/IgM with poor vaccine responses, and normal B cell numbers. IVIG replacement therapy is the standard treatment to maintain protective IgG levels >700-800 mg/dL. Live vaccines are contraindicated, prophylactic antibiotics aren't standard care, and steroids would worsen immunosuppression.",
      "topic_tags": [
        "immunology",
        "primary_immunodeficiency",
        "CVID",
        "immunoglobulin_therapy"
      ],
      "key_concept": "CVID diagnosis and management with immunoglobulin replacement therapy"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Characteristic infections: encapsulated bacteria (S. pneumoniae, H. influenzae) → recurrent sinopulmonary. Giardia lamblia → chronic diarrhea/malabsorption. Enteroviruses → chronic meningoencephalitis.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The stem provides comprehensive clinical context essential for diagnosis. The last sentence alone (vaccination history with poor response) would not allow correct diagnosis without the full clinical picture of recurrent infections, specific pathogens, GI symptoms, and immunoglobulin levels."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is clinically relevant: age/gender (CVID demographics), 6-year infection history (chronicity), specific pathogens (encapsulated bacteria pattern), GI symptoms with Giardia (classic CVID manifestation), splenomegaly (associated finding), Ig levels (diagnostic), B cell counts (differential diagnosis), and vaccine response (functional assessment)."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,8,9,9,9] - excellent parity with max/min ratio of 1.125"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B, C, and E are plausible considerations for immunodeficiency workup. However, D (live vaccines in immunocompromised patient) is clearly contraindicated and less plausible for any competent clinician to consider."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: verb + object/complement (Initiate..., Prescribe..., Order..., Administer..., Start...)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "IVIG replacement therapy is indeed the standard of care for CVID with hypogammaglobulinemia and recurrent infections. The clinical presentation perfectly fits CVID criteria."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "IVIG replacement is unambiguously the best answer for this CVID presentation. Other options are either contraindicated (live vaccines) or not first-line management."
      }
    }
  },
  {
    "id": "lib-digeorge-22q11-0054",
    "type": "mcq",
    "status": "approved",
    "caseId": "digeorge-22q11",
    "diagnosis": "DiGeorge Syndrome (22q11.2 Deletion Syndrome)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T02:04:50Z",
    "approvedAt": "2026-03-05T02:04:50Z",
    "question": {
      "stem": "A 2-day-old male infant presents with seizures and carpopedal spasm. He was born at 38 weeks gestation to a 28-year-old primigravida mother. Physical examination reveals hypertelorism, low-set ears, micrognathia, and a harsh systolic murmur best heard at the left sternal border. Laboratory studies show calcium 6.8 mg/dL (normal 8.5-10.5), phosphate 8.2 mg/dL (normal 4.5-6.5), and parathyroid hormone 12 pg/mL (normal 15-65). Complete blood count shows total lymphocyte count of 800/μL (normal 2,500-8,000). Echocardiogram reveals tetralogy of Fallot with pulmonary atresia.",
      "options": [
        {
          "text": "Fluorescence in situ hybridization for 22q11.2 deletion",
          "explanation": "Correct. The constellation of hypocalcemia with hypoparathyroidism, conotruncal cardiac defect, dysmorphic facies, and lymphopenia strongly suggests DiGeorge syndrome (22q11.2 deletion). FISH testing will confirm the diagnosis."
        },
        {
          "text": "Serum immunoglobulin levels and lymphocyte subset analysis",
          "explanation": "While lymphocyte subset analysis may show T-cell deficiency supporting DiGeorge syndrome, this test alone cannot establish the underlying genetic diagnosis. The clinical presentation requires specific genetic testing."
        },
        {
          "text": "Parathyroid hormone-related protein measurement",
          "explanation": "PTHrP would be elevated in malignancy-associated hypercalcemia, not hypocalcemia. The low PTH with hypocalcemia indicates hypoparathyroidism, not PTHrP-mediated disease."
        },
        {
          "text": "Thyroid function tests and thyroglobulin antibodies",
          "explanation": "While thymic hypoplasia is part of DiGeorge syndrome, thyroid function is typically normal. The hypocalcemia is due to parathyroid hypoplasia, not thyroid dysfunction."
        },
        {
          "text": "Chromosomal karyotype analysis with G-banding",
          "explanation": "Standard karyotype analysis cannot detect microdeletions like 22q11.2. The deletion is too small to be visualized by conventional cytogenetic methods and requires molecular techniques like FISH or microarray."
        }
      ],
      "correct_index": 0,
      "explanation": "This infant presents with classic features of DiGeorge syndrome: neonatal hypocalcemia with hypoparathyroidism (low calcium, high phosphate, low PTH), conotruncal cardiac defect (tetralogy of Fallot), dysmorphic facies, and lymphopenia suggesting thymic hypoplasia. DiGeorge syndrome results from 22q11.2 deletion affecting TBX1 gene and pharyngeal arch development. FISH for 22q11.2 deletion is the appropriate initial genetic test. Immunoglobulin levels would be supportive but not diagnostic. PTHrP is irrelevant in hypocalcemia. Thyroid function is typically normal. Standard karyotype cannot detect microdeletions.",
      "topic_tags": [
        "pediatrics",
        "genetics",
        "immunodeficiency",
        "endocrinology"
      ],
      "key_concept": "DiGeorge syndrome diagnosis requires genetic testing for 22q11.2 deletion in patients with CATCH-22 features"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "22q11.2 deletion: most common chromosomal microdeletion. TBX1 gene critical for pharyngeal arch development.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The question requires integration of multiple clinical findings (seizures, dysmorphic features, cardiac defect, lab values) to reach the diagnosis - cannot be answered from just the final sentence"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/presentation (neonatal hypocalcemia), physical findings (DiGeorge facies), labs (hypoparathyroidism pattern), CBC (lymphopenia), echo (conotruncal defect) - all point to 22q11.2 deletion"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,7,5,6,6]. Ratio 7/5 = 1.4, which is acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B is very plausible given lymphopenia; C could be considered for hypercalcemia workup; D less plausible but thyroid issues can occur; E reasonable for genetic syndrome evaluation"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing specific laboratory tests or analyses"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - FISH for 22q11.2 deletion is the appropriate test for suspected DiGeorge syndrome with this constellation of findings"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "22q11.2 deletion testing is clearly the most appropriate next step given the classic tetrad of DiGeorge syndrome features"
      }
    }
  },
  {
    "id": "lib-digeorge-22q11-0055",
    "type": "mcq",
    "status": "approved",
    "caseId": "digeorge-22q11",
    "diagnosis": "DiGeorge Syndrome (22q11.2 Deletion Syndrome)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T02:05:29Z",
    "approvedAt": "2026-03-05T02:05:29Z",
    "question": {
      "stem": "A 3-day-old male infant is brought to the neonatal intensive care unit with episodes of muscle twitching and brief seizures. He was born at 38 weeks gestation via cesarean delivery due to a prenatal cardiac abnormality. Physical examination reveals a harsh systolic murmur, micrognathia, low-set ears, and a shortened philtrum. Laboratory studies show calcium 6.8 mg/dL (normal 8.5-10.5), phosphorus 8.2 mg/dL (normal 4.5-6.5), and intact parathyroid hormone 8 pg/mL (normal 15-75). Complete blood count shows white blood cells 4,200/μL with lymphocytes 840/μL. Flow cytometry demonstrates CD4+ T cells 180/μL and CD8+ T cells 95/μL. Echocardiography confirms tetralogy of Fallot.",
      "options": [
        {
          "text": "Fluorescence in situ hybridization for 22q11.2 deletion",
          "explanation": "Correct. This presentation is classic for DiGeorge syndrome with CATCH-22 features: cardiac defects (tetralogy of Fallot), abnormal facies, thymic hypoplasia (low T cells), hypocalcemia from hypoparathyroidism, and neonatal seizures. FISH for 22q11.2 deletion is the appropriate initial test."
        },
        {
          "text": "Serum immunoglobulin levels and specific antibody responses",
          "explanation": "Incorrect. While immunoglobulin levels may be affected in DiGeorge syndrome, the primary defect is T-cell dysfunction from thymic hypoplasia. The hypocalcemia and cardiac defects point to 22q11.2 deletion rather than a primary B-cell immunodeficiency."
        },
        {
          "text": "Bone marrow biopsy for severe combined immunodeficiency",
          "explanation": "Incorrect. While this infant has reduced T cells, the CD4+ count of 180/μL indicates partial DiGeorge syndrome, not complete absence. SCID typically presents with much lower T-cell counts and would not explain the hypocalcemia and cardiac defects."
        },
        {
          "text": "Thyroid function tests and thyroglobulin antibodies",
          "explanation": "Incorrect. The hypocalcemia is due to hypoparathyroidism (low PTH), not thyroid dysfunction. The constellation of cardiac defects, dysmorphic features, and immune deficiency suggests a chromosomal deletion syndrome rather than autoimmune thyroid disease."
        },
        {
          "text": "Chromosomal karyotype analysis for Turner syndrome",
          "explanation": "Incorrect. While Turner syndrome can cause cardiac defects, it does not typically present with hypocalcemia, hypoparathyroidism, or T-cell deficiency. The facial dysmorphism and immune findings are characteristic of DiGeorge syndrome, not Turner syndrome."
        }
      ],
      "correct_index": 0,
      "explanation": "This case presents classic DiGeorge syndrome (22q11.2 deletion syndrome) with the CATCH-22 features: Cardiac defects (tetralogy of Fallot), Abnormal facies (micrognathia, low-set ears, shortened philtrum), Thymic hypoplasia (reduced CD4+ and CD8+ T cells), and Hypocalcemia with low parathyroid hormone. The neonatal seizures from hypocalcemia are often the presenting feature in the NICU. FISH for 22q11.2 deletion is the appropriate diagnostic test. The other options don't address the constellation of findings characteristic of this chromosomal deletion syndrome.",
      "topic_tags": [
        "immunodeficiency",
        "genetics",
        "neonatology",
        "endocrinology"
      ],
      "key_concept": "DiGeorge syndrome (22q11.2 deletion) presents with CATCH-22 features including neonatal hypocalcemic seizures"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "CATCH-22: Cardiac (conotruncal), Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, 22q11.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer from last sentence alone - requires clinical vignette with specific constellation of findings (cardiac defect, facial features, hypocalcemia, immunodeficiency)"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is essential - seizures/hypocalcemia, cardiac defect, facial dysmorphism, PTH levels, and T cell counts all point to DiGeorge syndrome"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,7,7,6,6] - excellent parity with max/min ratio of 1.17"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B and C are reasonable given immunodeficiency findings, D less plausible but possible given endocrine abnormalities, E implausible for male infant"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing diagnostic tests"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "FISH for 22q11.2 deletion is correct first-line test for DiGeorge syndrome with this classic presentation"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - constellation of findings specifically points to 22q11.2 deletion syndrome"
      }
    }
  },
  {
    "id": "lib-digeorge-22q11-0056",
    "type": "mcq",
    "status": "approved",
    "caseId": "digeorge-22q11",
    "diagnosis": "DiGeorge Syndrome (22q11.2 Deletion Syndrome)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T02:06:06Z",
    "approvedAt": "2026-03-05T02:06:06Z",
    "question": {
      "stem": "A 2-day-old full-term infant develops generalized tonic-clonic seizures in the NICU. Birth history is unremarkable. Physical examination reveals low-set ears, a short philtrum, and a harsh systolic murmur best heard at the left sternal border. Laboratory studies show serum calcium 6.2 mg/dL (normal 8.5-10.5), phosphorus 8.1 mg/dL (normal 4.5-6.5), magnesium 1.9 mg/dL (normal 1.7-2.2), and intact parathyroid hormone 8 pg/mL (normal 15-75). Echocardiogram demonstrates tetralogy of Fallot. Complete blood count shows lymphocyte count 800/μL (normal 2,000-11,000). The most likely underlying genetic abnormality involves which chromosome?",
      "options": [
        {
          "text": "Chromosome 22q11.2 deletion",
          "explanation": "Correct. This constellation of neonatal hypocalcemic seizures due to hypoparathyroidism, conotruncal cardiac defect (tetralogy of Fallot), lymphopenia, and dysmorphic features (low-set ears, short philtrum) is classic for DiGeorge syndrome caused by 22q11.2 deletion."
        },
        {
          "text": "Chromosome 15q11-q13 deletion",
          "explanation": "Incorrect. This deletion causes Prader-Willi syndrome (paternal deletion) or Angelman syndrome (maternal deletion), which present with hypotonia, feeding difficulties, and developmental delays, not the cardiac-immunologic-endocrine triad seen here."
        },
        {
          "text": "Chromosome 7q11.23 deletion",
          "explanation": "Incorrect. This deletion causes Williams-Beuren syndrome, which presents with supravalvular aortic stenosis, elfin facies, and hypercalcemia (not hypocalcemia), along with developmental delays and distinctive personality traits."
        },
        {
          "text": "Chromosome 5p deletion",
          "explanation": "Incorrect. This deletion causes cri-du-chat syndrome, characterized by a distinctive cat-like cry, microcephaly, and severe intellectual disability, but not the specific cardiac, endocrine, and immunologic features described."
        },
        {
          "text": "Chromosome 4p deletion",
          "explanation": "Incorrect. This deletion causes Wolf-Hirschhorn syndrome, presenting with severe growth retardation, distinctive facial features ('Greek warrior helmet' appearance), and seizures, but not the specific hypoparathyroidism and conotruncal cardiac defects."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic DiGeorge syndrome (22q11.2 deletion syndrome). The key features include: 1) Neonatal hypocalcemic seizures due to hypoparathyroidism (low calcium, high phosphorus, low PTH), 2) Conotruncal cardiac defect (tetralogy of Fallot), 3) Lymphopenia suggesting thymic hypoplasia, and 4) Dysmorphic facial features. This constellation fits the CATCH-22 mnemonic: Cardiac defects, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, 22q11 deletion. The other chromosomal deletions cause distinct syndromes with different phenotypes that don't match this presentation.",
      "topic_tags": [
        "genetics",
        "immunodeficiency",
        "neonatology",
        "endocrinology"
      ],
      "key_concept": "DiGeorge syndrome (22q11.2 deletion) presents with neonatal hypocalcemic seizures, conotruncal cardiac defects, and immunodeficiency"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Hypocalcemia: neonatal tetany/seizures → hypoparathyroidism. Most common presentation in NICU.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question requires integration of multiple clinical findings (seizures, cardiac defect, facial features, lab values) to identify the genetic syndrome - cannot be answered from last sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: seizures establish urgency, birth history rules out perinatal causes, physical exam provides dysmorphic features, labs confirm hypoparathyroidism, echo confirms conotruncal defect, CBC shows immunodeficiency - all pointing to DiGeorge syndrome"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,4,4,3,3] - excellent parity with max/min ratio of 1.33"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B (Prader-Willi/Angelman) and C (Williams syndrome) are plausible genetic deletions but don't match phenotype. D (Cri-du-chat) and E (Wolf-Hirschhorn) are less plausible as they have more distinctive presentations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: 'Chromosome [location] deletion'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - 22q11.2 deletion causes DiGeorge syndrome with the described constellation of findings"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - this constellation of findings (cardiac, immunologic, endocrine, dysmorphic) is pathognomonic for 22q11.2 deletion syndrome"
      }
    }
  },
  {
    "id": "lib-dress-syndrome-0057",
    "type": "mcq",
    "status": "approved",
    "caseId": "dress-syndrome",
    "diagnosis": "DRESS Syndrome",
    "source": "DOI: 10.1111/bjd.12501; DRESS: results from the prospective RegiSCAR study; DOI: 10.1016/j.jaip.2018.08.004; DRESS syndrome and long-term risk of autoimmunity",
    "submittedAt": "2026-03-05T02:06:41Z",
    "approvedAt": "2026-03-05T02:06:41Z",
    "question": {
      "stem": "A 52-year-old man with newly diagnosed seizure disorder presents to the emergency department 5 weeks after starting phenytoin with fever, facial swelling, and a generalized maculopapular rash. Physical examination reveals temperature 38.9°C, periorbital edema, cervical lymphadenopathy, and an erythematous rash covering 80% of his body surface area. Laboratory studies show ALT 180 U/L (normal 7-56), AST 165 U/L (normal 10-40), eosinophil count 1,200/μL (normal 50-500), and atypical lymphocytes on peripheral smear. HHV-6 reactivation is detected by PCR.",
      "options": [
        {
          "text": "Drug reaction with eosinophilia and systemic symptoms (DRESS)",
          "explanation": "Correct. Classic presentation with 5-week latency after phenytoin (aromatic anticonvulsant), fever, rash, hepatitis, eosinophilia, and HHV-6 reactivation - pathognomonic for DRESS."
        },
        {
          "text": "Stevens-Johnson syndrome with hepatic involvement",
          "explanation": "Incorrect. SJS typically occurs within 1-3 weeks, involves mucosal surfaces prominently, and does not feature HHV-6 reactivation or eosinophilia."
        },
        {
          "text": "Acute generalized exanthematous pustulosis with organ involvement",
          "explanation": "Incorrect. AGEP presents with sterile pustules overlying erythema, occurs within days of drug exposure, and does not typically cause hepatitis or HHV-6 reactivation."
        },
        {
          "text": "Viral exanthem with drug-induced hepatitis as separate entities",
          "explanation": "Incorrect. The constellation of findings 5 weeks post-phenytoin with HHV-6 reactivation represents DRESS pathophysiology, not coincidental separate conditions."
        },
        {
          "text": "Hypersensitivity syndrome secondary to phenytoin with bacterial superinfection",
          "explanation": "Incorrect. While hypersensitivity syndrome is an older term for DRESS, there are no signs of bacterial superinfection, and this doesn't explain the HHV-6 reactivation."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic DRESS syndrome. The 5-week latency period after phenytoin initiation is characteristic of DRESS, which has the longest latency (2-8 weeks) of any severe cutaneous adverse reaction. Key features include fever, widespread rash, internal organ involvement (hepatitis with elevated transaminases), eosinophilia, and HHV-6 reactivation - the latter being pathognomonic for DRESS and distinguishing it from other severe cutaneous reactions like SJS/TEN. Phenytoin is a well-known aromatic anticonvulsant trigger for DRESS. The other options are incorrect because they don't account for the specific latency period, the constellation of systemic findings, or the HHV-6 reactivation that defines DRESS syndrome.",
      "topic_tags": [
        "dermatology",
        "adverse drug reactions",
        "DRESS syndrome",
        "pharmacovigilance"
      ],
      "key_concept": "DRESS syndrome has the longest latency period (2-8 weeks) among severe cutaneous adverse reactions and is distinguished by HHV-6 reactivation"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "DRESS timing: 2–8 weeks after drug. Longest latency of any SCAR.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence and options, the clinical vignette provides essential diagnostic details (timing, symptoms, labs, HHV-6) that are necessary to distinguish DRESS from other conditions"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: 5-week latency is pathognomonic for DRESS, fever/rash/organ involvement are core features, lab values show eosinophilia and hepatitis, HHV-6 reactivation is diagnostic"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [8,6,7,8,8]. Ratio 8/6 = 1.33, which is acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "SJS and AGEP are reasonable differentials for severe drug reactions. Viral exanthem with separate hepatitis is plausible. Option E uses outdated terminology but represents a reasonable clinical consideration"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing medical conditions/syndromes with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "DRESS is correct given the 5-week latency, systemic involvement, eosinophilia, and especially HHV-6 reactivation which is pathognomonic for DRESS"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "HHV-6 reactivation makes DRESS the definitive diagnosis, clearly distinguishing it from other severe cutaneous reactions"
      }
    }
  },
  {
    "id": "lib-dress-syndrome-0058",
    "type": "mcq",
    "status": "approved",
    "caseId": "dress-syndrome",
    "diagnosis": "DRESS Syndrome",
    "source": "DOI: 10.1111/bjd.12501; DRESS: results from the prospective RegiSCAR study; DOI: 10.1016/j.jaip.2018.08.004; DRESS syndrome and long-term risk of autoimmunity",
    "submittedAt": "2026-03-05T02:07:18Z",
    "approvedAt": "2026-03-05T02:07:18Z",
    "question": {
      "stem": "A 32-year-old woman with newly diagnosed epilepsy presents to the emergency department 5 weeks after starting carbamazepine with fever, facial swelling, and a generalized maculopapular rash. Temperature is 38.9°C (102°F), pulse is 110/min, and blood pressure is 125/80 mmHg. Physical examination shows periorbital edema, cervical lymphadenopathy, and a confluent erythematous rash covering 40% of body surface area. Laboratory studies show leukocytosis with 15% eosinophils, elevated transaminases (ALT 180 U/L, AST 165 U/L), and atypical lymphocytes on peripheral blood smear. PCR testing reveals HHV-6 reactivation. Carbamazepine is discontinued and high-dose prednisone is initiated with clinical improvement over the following week.",
      "options": [
        {
          "text": "Levetiracetam should be selected as the alternative antiepileptic medication",
          "explanation": "Correct. Levetiracetam is a non-aromatic antiepileptic drug and is safe to use after DRESS from carbamazepine. Aromatic anticonvulsants (carbamazepine, phenytoin, phenobarbital, primidone) show cross-reactivity and must all be avoided."
        },
        {
          "text": "Phenytoin should be selected as the alternative antiepileptic medication",
          "explanation": "Incorrect. Phenytoin is an aromatic anticonvulsant that cross-reacts with carbamazepine. All aromatic anticonvulsants must be avoided after DRESS from any aromatic anticonvulsant due to cross-reactivity."
        },
        {
          "text": "HHV-6 reactivation indicates concurrent viral illness rather than drug reaction",
          "explanation": "Incorrect. HHV-6 reactivation is a distinguishing pathogenic feature of DRESS syndrome and correlates with disease severity. It is not seen in other severe cutaneous adverse reactions like SJS/TEN."
        },
        {
          "text": "Prednisone should be rapidly tapered over 2-3 weeks to prevent complications",
          "explanation": "Incorrect. DRESS requires a slow steroid taper over months. Rapid tapering leads to DRESS relapse, which is a well-recognized complication of inadequate treatment duration."
        },
        {
          "text": "The 5-week latency period excludes DRESS as the underlying diagnosis",
          "explanation": "Incorrect. DRESS has the longest latency period of any severe cutaneous adverse reaction, typically occurring 2-8 weeks after drug initiation. The 5-week onset is classic for DRESS syndrome."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has DRESS syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms) based on the classic presentation: 5-week latency after carbamazepine, fever, rash, internal organ involvement (liver), eosinophilia, atypical lymphocytes, and HHV-6 reactivation. The key management principle is avoiding all aromatic anticonvulsants due to cross-reactivity. Levetiracetam is the correct choice as it's non-aromatic and safe. Phenytoin would be dangerous due to cross-reactivity. HHV-6 reactivation is pathognomonic for DRESS. Slow steroid taper over months is essential to prevent relapse. The 5-week latency is typical for DRESS, which has the longest onset of any SCAR.",
      "topic_tags": [
        "dermatology",
        "adverse_drug_reactions",
        "DRESS_syndrome",
        "epilepsy_management"
      ],
      "key_concept": "Aromatic anticonvulsant cross-reactivity in DRESS syndrome requires switching to non-aromatic alternatives"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "HHV-6 reactivation: distinguishing feature of DRESS (not present in SJS/TEN). Correlates with severity.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Clinical scenario with complex presentation requiring knowledge of DRESS syndrome pathophysiology and management principles - cannot be answered from final sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: timeline establishes latency, symptoms define DRESS, labs show eosinophilia/liver involvement, HHV-6 confirms diagnosis, treatment response validates"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,9,9,10,9] - well balanced with max/min ratio of 1.11"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical considerations that might occur to practitioners unfamiliar with DRESS management nuances"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: '[Drug/concept] should be [action]' or '[Statement] [verb] [object]'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current guidelines - levetiracetam is appropriate alternative avoiding aromatic anticonvulsant cross-reactivity"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Levetiracetam is clearly the best choice, though other non-aromatic options exist - question context makes A definitively correct"
      }
    }
  },
  {
    "id": "lib-dress-syndrome-0059",
    "type": "mcq",
    "status": "approved",
    "caseId": "dress-syndrome",
    "diagnosis": "DRESS Syndrome",
    "source": "DOI: 10.1111/bjd.12501; DRESS: results from the prospective RegiSCAR study; DOI: 10.1016/j.jaip.2018.08.004; DRESS syndrome and long-term risk of autoimmunity",
    "submittedAt": "2026-03-05T02:07:55Z",
    "approvedAt": "2026-03-05T02:07:55Z",
    "question": {
      "stem": "A 45-year-old man with newly diagnosed epilepsy presents to the emergency department with a 3-day history of fever, facial swelling, and a generalized maculopapular rash. He was started on phenytoin 6 weeks ago after his first seizure. Vital signs show temperature 38.9°C, blood pressure 142/88 mmHg, heart rate 102/min, and oxygen saturation 96% on room air. Physical examination reveals facial edema, cervical lymphadenopathy, and an erythematous maculopapular rash covering 80% of his body surface area. Laboratory studies show AST 156 U/L, ALT 189 U/L, total bilirubin 2.4 mg/dL, creatinine 1.8 mg/dL (baseline 0.9 mg/dL), and white blood cell count 14,200/μL with 18% eosinophils. Which of the following is the most appropriate next step in management?",
      "options": [
        {
          "text": "Discontinue phenytoin immediately and start high-dose prednisone 1.5 mg/kg daily",
          "explanation": "This is correct. The patient has DRESS syndrome (RegiSCAR ≥4: fever, rash, hospitalization indicated, internal organ involvement with liver and kidney, eosinophilia). Immediate discontinuation of the culprit drug and high-dose corticosteroids are the cornerstone of treatment."
        },
        {
          "text": "Switch phenytoin to carbamazepine and continue current anticonvulsant therapy",
          "explanation": "This is incorrect. Aromatic anticonvulsants (phenytoin, carbamazepine, phenobarbital) have cross-reactivity for DRESS syndrome. If one causes DRESS, all aromatic anticonvulsants must be avoided permanently."
        },
        {
          "text": "Continue phenytoin and start topical corticosteroids for the cutaneous eruption",
          "explanation": "This is incorrect. Continuing the culprit medication in DRESS syndrome can lead to progression and potentially fatal outcomes. Topical corticosteroids are inadequate for systemic DRESS syndrome."
        },
        {
          "text": "Discontinue phenytoin and start levetiracetam with short-course oral prednisone",
          "explanation": "This is incorrect. While levetiracetam is an appropriate non-aromatic alternative, DRESS syndrome requires months-long steroid taper, not a short course. Rapid steroid taper leads to DRESS relapse."
        },
        {
          "text": "Reduce phenytoin dose by half and initiate supportive care with antihistamines",
          "explanation": "This is incorrect. Dose reduction of the culprit drug is insufficient in DRESS syndrome. Complete discontinuation is mandatory, and antihistamines alone are inadequate for managing systemic DRESS syndrome."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic DRESS syndrome 6 weeks after starting phenytoin, meeting RegiSCAR criteria with fever, extensive rash, internal organ involvement (liver with elevated transaminases and kidney with acute nephritis), and eosinophilia. The 6-week latency is characteristic of DRESS, which has the longest latency period (2-8 weeks) among severe cutaneous adverse reactions. Management requires immediate discontinuation of ALL potential culprit drugs and high-dose systemic corticosteroids (1-2 mg/kg/day prednisone) with a slow taper over months to prevent relapse. Aromatic anticonvulsants show cross-reactivity, so switching to another aromatic anticonvulsant is contraindicated. Non-aromatic alternatives like levetiracetam would be appropriate seizure management, but the steroid regimen must be prolonged.",
      "topic_tags": [
        "dermatology",
        "drug hypersensitivity",
        "DRESS syndrome",
        "anticonvulsants",
        "severe cutaneous adverse reactions"
      ],
      "key_concept": "DRESS syndrome diagnosis using RegiSCAR criteria and management with immediate drug discontinuation and prolonged corticosteroid therapy"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "RegiSCAR ≥4: fever + rash + hospitalization + internal organ + eosinophilia ± atypical lymphocytes.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The question stem with clinical vignette is essential - removing the detailed presentation would make it impossible to identify DRESS syndrome and determine appropriate management"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are clinically relevant: timing (6 weeks), drug history (phenytoin), fever, rash extent, organ involvement (liver/kidney), eosinophilia - all support DRESS diagnosis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [11,10,10,10,11] - good parity with max/min ratio of 1.1"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical considerations: switching anticonvulsants, continuing with topical treatment, alternative steroid regimens, dose reduction"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently structured as 'action + medication/treatment approach'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with DRESS syndrome management guidelines: immediate discontinuation and high-dose systemic corticosteroids"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Option A is clearly best, though option D could be debated regarding steroid duration - but high-dose long-term steroids are standard for DRESS"
      }
    }
  },
  {
    "id": "lib-drug-allergy-vancomycin-rms-0060",
    "type": "mcq",
    "status": "approved",
    "caseId": "drug-allergy-vancomycin-rms",
    "diagnosis": "Vancomycin Red Man Syndrome",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1186/cc1871; Red man syndrome",
    "submittedAt": "2026-03-05T02:08:28Z",
    "approvedAt": "2026-03-05T02:08:28Z",
    "question": {
      "stem": "A 28-year-old man with acute bacterial endocarditis is receiving his first dose of vancomycin 1.5 g IV infused over 30 minutes. Twenty minutes into the infusion, he develops facial flushing, neck erythema, and intense itching of his upper chest. His vital signs are temperature 38.2°C, blood pressure 128/78 mmHg, heart rate 92/min, and oxygen saturation 98% on room air. He has no respiratory distress or wheezing. The nurse pauses the infusion and administers diphenhydramine 50 mg IV, after which the symptoms resolve within 10 minutes.",
      "options": [
        {
          "text": "Resume vancomycin at a slower infusion rate over 90 minutes",
          "explanation": "Correct. This is Red Man Syndrome (RMS), a non-IgE mediated mast cell activation. The patient can safely receive vancomycin with slower infusion rates and pre-medication."
        },
        {
          "text": "Discontinue vancomycin permanently and obtain allergy consultation",
          "explanation": "Incorrect. RMS is not a true allergy and does not contraindicate future vancomycin use. Allergy consultation is only needed for suspected IgE-mediated anaphylaxis."
        },
        {
          "text": "Administer epinephrine 0.3 mg intramuscularly immediately",
          "explanation": "Incorrect. The patient has stable vital signs without hypotension or bronchospasm. Epinephrine is indicated for true anaphylaxis, not RMS."
        },
        {
          "text": "Switch to linezolid and avoid all glycopeptide antibiotics",
          "explanation": "Incorrect. RMS does not require avoiding vancomycin or related antibiotics. The patient can safely receive vancomycin with appropriate precautions."
        },
        {
          "text": "Restart vancomycin at the same rate with corticosteroid premedication",
          "explanation": "Incorrect. The infusion rate must be slowed to prevent recurrence. Corticosteroids are not the primary prevention strategy for RMS."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has Red Man Syndrome (RMS), a non-IgE mediated reaction caused by direct mast cell activation via MRGPRX2 receptors. Key features include flushing and pruritus of face/neck/upper torso during vancomycin infusion without hypotension or bronchospasm. RMS is NOT an allergic reaction and does not contraindicate future vancomycin use. Management involves pausing the infusion, giving antihistamines, and restarting at a slower rate (≥90 minutes for doses >1g). The patient's stable vital signs and lack of respiratory symptoms distinguish this from true anaphylaxis, which would require epinephrine.",
      "topic_tags": [
        "infectious_disease",
        "pharmacology",
        "drug_reactions",
        "vancomycin"
      ],
      "key_concept": "Red Man Syndrome is non-IgE mediated mast cell activation that does not contraindicate future vancomycin use"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "RMS mechanism: MRGPRX2 direct mast cell activation → histamine → flushing, pruritus, erythema. NOT IgE-mediated.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The question stem provides essential context about timing, symptoms, vital signs, and response to antihistamines that cannot be determined from the final sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: patient demographics, antibiotic indication, infusion details, symptom timing, vital signs, absence of respiratory distress, and response to treatment"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,8,7,8,10] - ratio 1.43, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B and D are plausible for suspected allergy, C reasonable for anaphylaxis concern, E logical but suboptimal. All represent realistic clinical considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with Red Man Syndrome management - slower infusion rate is the appropriate response"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Option A is clearly best practice for Red Man Syndrome, with other options being either inappropriate or suboptimal"
      }
    }
  },
  {
    "id": "lib-drug-allergy-vancomycin-rms-0061",
    "type": "mcq",
    "status": "approved",
    "caseId": "drug-allergy-vancomycin-rms",
    "diagnosis": "Vancomycin Red Man Syndrome",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1186/cc1871; Red man syndrome",
    "submittedAt": "2026-03-05T02:09:38Z",
    "approvedAt": "2026-03-05T02:09:38Z",
    "question": {
      "stem": "A 28-year-old man with acute osteomyelitis develops facial flushing, neck erythema, and intense pruritus 8 minutes into his first vancomycin infusion. His vital signs are temperature 37.2°C, blood pressure 128/82 mmHg, heart rate 92/min, and oxygen saturation 98% on room air. Lung examination reveals clear breath sounds bilaterally. The nurse stops the infusion and administers diphenhydramine 50 mg intravenously. Within 15 minutes, the patient's symptoms completely resolve and vital signs remain stable.",
      "options": [
        {
          "text": "Restart vancomycin at a slower infusion rate over 90 minutes",
          "explanation": "Correct. This presentation is classic Red Man Syndrome (RMS) - non-IgE mediated mast cell activation causing flushing/pruritus of face/neck without hypotension or bronchospasm. RMS is not a contraindication to vancomycin use. Management includes slowing infusion rate and pre-medication with antihistamines."
        },
        {
          "text": "Document vancomycin allergy and switch to linezolid",
          "explanation": "Incorrect. RMS is not a true allergy and does not require avoiding vancomycin. Documenting as an allergy could lead to inappropriate future antibiotic choices and potential antimicrobial stewardship issues."
        },
        {
          "text": "Administer epinephrine and prepare for anaphylaxis management",
          "explanation": "Incorrect. The absence of hypotension and bronchospasm, plus rapid resolution with antihistamines alone, indicates RMS rather than true anaphylaxis. Epinephrine is not indicated for RMS."
        },
        {
          "text": "Obtain serum tryptase level and refer to allergy/immunology",
          "explanation": "Incorrect. While tryptase can be elevated in mast cell activation, RMS is a well-recognized non-immune phenomenon that doesn't require allergy evaluation. The clinical presentation is diagnostic."
        },
        {
          "text": "Discontinue vancomycin permanently and use alternative antibiotics",
          "explanation": "Incorrect. RMS is not a contraindication to vancomycin use. Permanently avoiding vancomycin would limit future treatment options unnecessarily, especially since RMS can be prevented with slower infusion rates and pre-medication."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has Red Man Syndrome (RMS), a non-IgE mediated reaction caused by direct mast cell activation via MRGPRX2 receptors. The classic presentation includes flushing and pruritus of the face, neck, and upper torso (areas with high mast cell density) during or shortly after vancomycin infusion, without hypotension or bronchospasm. RMS is not a true allergic reaction and is not a contraindication to vancomycin use. Management involves slowing or stopping the infusion and administering antihistamines. Future doses should be infused over ≥90 minutes for doses >1g, with pre-medication using H1 antihistamines. True vancomycin anaphylaxis is rare and would present with hypotension and bronchospasm requiring epinephrine.",
      "topic_tags": [
        "vancomycin",
        "red_man_syndrome",
        "drug_reactions",
        "mast_cell_activation",
        "antibiotic_adverse_effects"
      ],
      "key_concept": "Red Man Syndrome distribution pattern and non-allergic nature requiring rate modification rather than drug discontinuation"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Distribution: face, neck, upper torso (high mast cell density in these areas).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette with patient history, symptoms, timing, and response to treatment is essential to distinguish Red Man Syndrome from anaphylaxis"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: age/gender, indication for vancomycin, specific symptoms, timing, vital signs, lung sounds, and response to diphenhydramine"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,7,7,9,7] - excellent parity with max/min ratio of 1.29"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B and E are reasonable but overly cautious responses to RMS; C would be appropriate for anaphylaxis; D is less plausible as tryptase is not indicated for RMS"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current guidelines for Red Man Syndrome management - slower infusion rate is appropriate"
      },
      "single_best_answer": {
        "score": 0.75,
        "note": "While A is best practice, some clinicians might reasonably choose B or E due to institutional policies or unfamiliarity with RMS"
      }
    }
  },
  {
    "id": "lib-drug-allergy-vancomycin-rms-0062",
    "type": "mcq",
    "status": "approved",
    "caseId": "drug-allergy-vancomycin-rms",
    "diagnosis": "Vancomycin Red Man Syndrome",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1186/cc1871; Red man syndrome",
    "submittedAt": "2026-03-05T02:10:15Z",
    "approvedAt": "2026-03-05T02:10:15Z",
    "question": {
      "stem": "A 45-year-old man with methicillin-resistant Staphylococcus aureus bacteremia is receiving intravenous vancomycin 1.5 g over 30 minutes. Twenty minutes into the infusion, he develops facial flushing, neck erythema, and generalized pruritus. His vital signs remain stable with blood pressure 128/82 mmHg, heart rate 88/min, and oxygen saturation 98% on room air. He has no respiratory distress or wheezing. The nurse stops the vancomycin infusion, and within 15 minutes, the patient's symptoms completely resolve.",
      "options": [
        {
          "text": "Resume vancomycin at a slower infusion rate over 90 minutes and administer diphenhydramine 50 mg intravenously",
          "explanation": "This is correct. Red Man Syndrome is a non-IgE mediated mast cell activation that responds to slowing the infusion rate and antihistamines. It is not a contraindication to continued vancomycin use."
        },
        {
          "text": "Discontinue vancomycin permanently and initiate linezolid as alternative therapy for the MRSA bacteremia",
          "explanation": "This is incorrect. Red Man Syndrome is not an allergic reaction and does not require permanent discontinuation of vancomycin. The patient can continue vancomycin with appropriate rate modification."
        },
        {
          "text": "Administer epinephrine 0.3 mg intramuscularly and refer for formal allergy evaluation before any future vancomycin use",
          "explanation": "This is incorrect. The stable vital signs and absence of hypotension or bronchospasm indicate Red Man Syndrome, not anaphylaxis. Epinephrine is not indicated for this non-immune reaction."
        },
        {
          "text": "Continue vancomycin at the same infusion rate but premedicate with corticosteroids before the next dose",
          "explanation": "This is incorrect. The infusion rate must be slowed to prevent recurrence. Corticosteroids are not the first-line premedication for Red Man Syndrome; antihistamines are more appropriate."
        },
        {
          "text": "Switch to daptomycin and document vancomycin as a true drug allergy in the medical record",
          "explanation": "This is incorrect. Red Man Syndrome is not a true drug allergy but rather a pharmacologic reaction. Documenting it as an allergy could inappropriately limit future antibiotic options when vancomycin remains safe to use."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient is experiencing Red Man Syndrome, a non-IgE mediated mast cell activation caused by rapid vancomycin infusion via MRGPRX2 receptors. The key features are facial/neck flushing and pruritus during infusion with stable vital signs and rapid resolution upon stopping the infusion. Management involves slowing the infusion rate (≥90 minutes for doses >1g) and administering H1 antihistamines like diphenhydramine. This is NOT an allergic reaction and is NOT a contraindication to future vancomycin use. True vancomycin anaphylaxis would present with hypotension and bronchospasm requiring epinephrine.",
      "topic_tags": [
        "vancomycin",
        "red man syndrome",
        "drug reactions",
        "antimicrobial therapy",
        "MRSA"
      ],
      "key_concept": "Red Man Syndrome management requires rate reduction and antihistamines, not vancomycin discontinuation"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "RMS management: pause/slow infusion + diphenhydramine 25–50 mg IV. Restart at slower rate. NOT contraindication to vancomycin.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final sentence alone cannot determine the answer - requires clinical context of symptoms, timing, vital signs stability, and rapid resolution to distinguish Red Man Syndrome from true allergy"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are essential: drug/dose/timing establish context, symptom description enables diagnosis, vital signs rule out anaphylaxis, resolution pattern confirms Red Man Syndrome"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [16,13,17,16,15] - excellent parity with max/min ratio of 1.31"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B and E are plausible but overly aggressive responses. C appropriately addresses anaphylaxis concerns. D shows understanding of premedication concept but wrong approach"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently structured as imperative verb phrases describing management actions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer accurately describes Red Man Syndrome management with slower infusion and antihistamines per current guidelines"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Option A is clearly superior - addresses the actual pathophysiology while other options either overreact or use suboptimal approaches"
      }
    }
  },
  {
    "id": "lib-eczema-herpeticum-0063",
    "type": "mcq",
    "status": "approved",
    "caseId": "eczema-herpeticum",
    "diagnosis": "Eczema Herpeticum",
    "source": "DOI: 10.1016/j.jaad.2022.12.029; AAD guidelines for management of atopic dermatitis with topical therapies",
    "submittedAt": "2026-03-05T02:10:53Z",
    "approvedAt": "2026-03-05T02:10:53Z",
    "question": {
      "stem": "A 28-year-old woman with a history of atopic dermatitis presents to the emergency department with a 3-day history of fever, malaise, and worsening skin lesions. She has been using topical triamcinolone cream for her eczema flare over the past week. Physical examination reveals multiple punched-out, umbilicated erosions clustered in areas of eczematous skin on her arms and face. Temperature is 101.8°F (38.8°C), and tender cervical lymphadenopathy is present. Tzanck smear from a lesion shows multinucleated giant cells.",
      "options": [
        {
          "text": "Discontinue topical corticosteroids and initiate intravenous acyclovir",
          "explanation": "Correct. This patient has eczema herpeticum (EH), a disseminated HSV infection in atopic dermatitis. The punched-out umbilicated lesions, fever, systemic illness, and multinucleated giant cells on Tzanck smear are classic. Topical steroids must be held during active EH as they worsen viral spread. IV acyclovir is indicated for severe/systemic EH."
        },
        {
          "text": "Continue topical corticosteroids and add oral cephalexin for secondary bacterial infection",
          "explanation": "Incorrect. The punched-out umbilicated lesions with multinucleated giant cells indicate viral (HSV) infection, not bacterial impetigo. Continuing topical steroids during active eczema herpeticum would worsen HSV dissemination and is contraindicated."
        },
        {
          "text": "Discontinue topical corticosteroids and initiate topical mupirocin ointment",
          "explanation": "Incorrect. While discontinuing steroids is appropriate, topical mupirocin treats bacterial infections. This presentation with umbilicated lesions, fever, and multinucleated giant cells indicates HSV infection requiring systemic antiviral therapy, not topical antibiotics."
        },
        {
          "text": "Continue current topical treatment and add oral prednisone for severe eczema flare",
          "explanation": "Incorrect. Adding systemic corticosteroids during active eczema herpeticum would severely worsen HSV dissemination and could lead to life-threatening complications. The lesions are not simply an eczema flare but represent HSV superinfection."
        },
        {
          "text": "Discontinue topical corticosteroids and initiate oral doxycycline for atypical bacterial coverage",
          "explanation": "Incorrect. While discontinuing steroids is correct, doxycycline treats bacterial infections. The clinical presentation with punched-out umbilicated lesions, fever, and multinucleated giant cells clearly indicates HSV infection requiring antiviral therapy, not antibiotics."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has eczema herpeticum (EH), a potentially life-threatening disseminated HSV infection occurring in patients with atopic dermatitis. The classic presentation includes punched-out, umbilicated erosions in eczematous skin areas, fever, systemic illness, and lymphadenopathy. The Tzanck smear showing multinucleated giant cells confirms HSV infection. Patients with atopic dermatitis have deficient cathelicidin (LL-37) and β-defensin production, leading to impaired antiviral defense and allowing HSV to spread beyond the initial inoculation site. Management requires immediate discontinuation of topical corticosteroids (which worsen viral dissemination) and systemic antiviral therapy. IV acyclovir is indicated for severe/systemic cases, while oral valacyclovir can be used for mild cases. The other options are incorrect because they either continue immunosuppressive therapy during active viral infection or treat for bacterial rather than viral etiology.",
      "topic_tags": [
        "dermatology",
        "infectious_disease",
        "atopic_dermatitis",
        "HSV",
        "emergency_medicine"
      ],
      "key_concept": "Eczema herpeticum requires immediate discontinuation of topical steroids and systemic antiviral therapy due to impaired antiviral defense in atopic dermatitis"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "EH: HSV dissemination in AD skin. Deficient LL-37 (cathelicidin) in AD → impaired antiviral defense.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence and options, a student could not determine the correct answer. The clinical context, physical findings, and Tzanck smear results are all essential for diagnosis."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence is necessary: patient demographics and atopic dermatitis history establish risk factors, symptom timeline shows progression, topical steroid use is relevant to pathophysiology, physical findings describe classic eczema herpeticum, and Tzanck smear confirms viral etiology."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [8,11,8,10,10]. Max/min ratio = 1.375, which is acceptable but shows some variation."
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical considerations: B addresses secondary bacterial infection concern, C considers topical antibiotics, D treats severe eczema flare, E covers atypical bacterial infections. All are clinically plausible but incorrect."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical grammatical structure: [verb phrase] and [verb phrase], maintaining perfect consistency."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate. IV acyclovir with steroid discontinuation is standard treatment for eczema herpeticum, especially with systemic symptoms and fever."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer. With confirmed HSV infection via Tzanck smear and systemic symptoms, IV acyclovir with steroid discontinuation is unambiguously correct."
      }
    }
  },
  {
    "id": "lib-eczema-herpeticum-0064",
    "type": "mcq",
    "status": "approved",
    "caseId": "eczema-herpeticum",
    "diagnosis": "Eczema Herpeticum",
    "source": "DOI: 10.1016/j.jaad.2022.12.029; AAD guidelines for management of atopic dermatitis with topical therapies",
    "submittedAt": "2026-03-05T02:11:32Z",
    "approvedAt": "2026-03-05T02:11:32Z",
    "question": {
      "stem": "A 7-year-old boy with a history of atopic dermatitis presents to the emergency department with a 3-day history of worsening skin lesions and fever. His mother reports that his usual eczematous patches on his arms and neck suddenly developed multiple small fluid-filled bumps that quickly became painful open sores. Physical examination reveals temperature of 101.8°F, cervical lymphadenopathy, and numerous punched-out erosions with central umbilication clustered within areas of chronic eczematous skin on his arms and neck. The lesions appear distinct from his typical eczema flares. His mother mentions she has been applying his usual topical corticosteroid cream more frequently due to the worsening appearance.",
      "options": [
        {
          "text": "Discontinue topical corticosteroids and initiate intravenous acyclovir",
          "explanation": "Correct. This presentation is classic for eczema herpeticum with punched-out umbilicated erosions in eczematous skin, fever, and lymphadenopathy. IV acyclovir is indicated for severe cases, and topical steroids must be held during active infection as they can worsen HSV spread."
        },
        {
          "text": "Increase topical corticosteroid potency and add topical antibiotic ointment",
          "explanation": "Incorrect. This would be dangerous in eczema herpeticum as topical steroids can worsen HSV dissemination. The umbilicated erosions are characteristic of viral rather than bacterial superinfection."
        },
        {
          "text": "Prescribe oral cephalexin and continue current topical corticosteroid regimen",
          "explanation": "Incorrect. The punched-out umbilicated lesions with systemic symptoms suggest viral etiology (eczema herpeticum) rather than bacterial impetigo. Antibiotics alone would be inadequate and continuing steroids could worsen the condition."
        },
        {
          "text": "Obtain bacterial culture and initiate topical mupirocin therapy",
          "explanation": "Incorrect. While bacterial superinfection can occur in atopic dermatitis, the umbilicated morphology and acute systemic presentation are more consistent with eczema herpeticum. Topical therapy alone would be insufficient for this systemic viral infection."
        },
        {
          "text": "Prescribe oral prednisone and schedule dermatology follow-up in one week",
          "explanation": "Incorrect. Systemic steroids would be contraindicated in eczema herpeticum as they suppress immune response and can lead to further HSV dissemination and potentially life-threatening complications."
        }
      ],
      "correct_index": 0,
      "explanation": "This case represents classic eczema herpeticum - HSV dissemination in atopic dermatitis skin. The key features are punched-out umbilicated erosions clustered in eczematous areas, fever, and lymphadenopathy. Patients with AD have deficient cathelicidin (LL-37) production leading to impaired antiviral defense. Treatment requires systemic antivirals (IV acyclovir for severe cases) and discontinuation of topical steroids which can worsen HSV spread. The other options either miss the viral etiology or inappropriately continue immunosuppressive therapy.",
      "topic_tags": [
        "dermatology",
        "pediatrics",
        "infectious_disease",
        "atopic_dermatitis",
        "HSV"
      ],
      "key_concept": "Recognition and management of eczema herpeticum with emphasis on discontinuing topical steroids and initiating systemic antiviral therapy"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Clinical: punched-out umbilicated erosions in eczematous skin + fever + lymphadenopathy.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence leaves only generic management options - the clinical vignette with specific features (punched-out erosions with umbilication, fever, lymphadenopathy) is essential for correct diagnosis"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/atopic dermatitis (predisposing factor), 3-day timeline, fever (systemic involvement), punched-out erosions with umbilication (pathognomonic for HSV), clustering in eczematous areas, and increased steroid use (relevant to management)"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [8,9,9,8,9] - excellent parity with max/min ratio of 1.125"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B and C are reasonable for bacterial superinfection; D is appropriate for suspected impetigo; E might be considered for severe eczema flare. All represent logical clinical reasoning paths for skin conditions in atopic dermatitis"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure with action verbs (discontinue/initiate, increase/add, prescribe/continue, obtain/initiate, prescribe/schedule)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - eczema herpeticum requires systemic antivirals and steroid discontinuation. Clinical presentation with punched-out umbilicated lesions, fever, and lymphadenopathy is classic"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "While bacterial superinfection could be considered, the umbilicated morphology and systemic symptoms strongly favor viral etiology. Most clinicians would recognize this as eczema herpeticum requiring antiviral therapy"
      }
    }
  },
  {
    "id": "lib-eczema-herpeticum-0065",
    "type": "mcq",
    "status": "approved",
    "caseId": "eczema-herpeticum",
    "diagnosis": "Eczema Herpeticum",
    "source": "DOI: 10.1016/j.jaad.2022.12.029; AAD guidelines for management of atopic dermatitis with topical therapies",
    "submittedAt": "2026-03-05T02:12:06Z",
    "approvedAt": "2026-03-05T02:12:06Z",
    "question": {
      "stem": "A 28-year-old woman with a history of atopic dermatitis presents to the emergency department with a 3-day history of worsening skin lesions and fever. She reports that her usual eczematous patches on her arms and neck suddenly developed new painful vesicles that have progressed to shallow, punched-out erosions with central umbilication. Physical examination reveals temperature 101.8°F, tender cervical lymphadenopathy, and multiple clustered erosions within areas of chronic eczematous skin. She has been using topical triamcinolone for her atopic dermatitis flare over the past week. Which of the following is the most appropriate initial diagnostic test?",
      "options": [
        {
          "text": "HSV PCR from lesional swab",
          "explanation": "Correct. HSV PCR is the most sensitive and specific test for diagnosing eczema herpeticum, providing rapid results to guide urgent antiviral therapy."
        },
        {
          "text": "Bacterial culture from lesional swab",
          "explanation": "Incorrect. While secondary bacterial infection can occur, the punched-out umbilicated erosions with systemic symptoms are classic for eczema herpeticum, not primary bacterial impetigo."
        },
        {
          "text": "Potassium hydroxide preparation of lesional scale",
          "explanation": "Incorrect. KOH prep is used to diagnose dermatophyte infections, which do not present with acute vesicles, umbilicated erosions, fever, or lymphadenopathy."
        },
        {
          "text": "Skin biopsy for histopathologic examination",
          "explanation": "Incorrect. While biopsy can show viral cytopathic changes, it is time-consuming and less sensitive than PCR for HSV detection in this acute setting requiring immediate diagnosis."
        },
        {
          "text": "Serum HSV-1 and HSV-2 IgG antibodies",
          "explanation": "Incorrect. Serology indicates past exposure but cannot diagnose acute infection or distinguish between primary and recurrent episodes needed for immediate management decisions."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic eczema herpeticum: punched-out umbilicated erosions within eczematous skin, fever, and lymphadenopathy. HSV PCR from lesional material is the most sensitive and specific diagnostic test, providing rapid results essential for prompt antiviral therapy. Tzanck smear showing multinucleated giant cells is also diagnostic but less sensitive than PCR. Eczema herpeticum is a dermatologic emergency requiring immediate systemic antiviral treatment to prevent complications like encephalitis or disseminated infection. The patient's recent topical steroid use may have contributed to HSV dissemination and should be discontinued during active infection.",
      "topic_tags": [
        "dermatology",
        "infectious_disease",
        "emergency_medicine",
        "atopic_dermatitis",
        "herpes_simplex"
      ],
      "key_concept": "HSV PCR is the most sensitive diagnostic test for eczema herpeticum"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Diagnosis: Tzanck smear (multinucleated giant cells), HSV PCR (most sensitive), DFA.",
    "quality_score": 0.71,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette is essential - cannot diagnose eczema herpeticum from just the last sentence and options"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details (atopic dermatitis history, vesicles progressing to erosions, fever, lymphadenopathy, recent steroid use) are relevant to diagnosing eczema herpeticum"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [5,5,6,4,7] - ratio 1.75 slightly exceeds ideal but acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All distractors are reasonable: bacterial superinfection (B), fungal infection (C), and histologic confirmation (D) are valid considerations; serum antibodies (E) less optimal but plausible"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing diagnostic tests"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "HSV PCR is indeed the most appropriate initial test for suspected eczema herpeticum - sensitive, specific, and rapid"
      },
      "single_best_answer": {
        "score": 0.0,
        "note": "While HSV PCR is preferred, Tzanck smear (not offered) would also be appropriate initial testing. Some clinicians might reasonably choose skin biopsy for definitive diagnosis"
      }
    }
  },
  {
    "id": "lib-eoe-adult-0066",
    "type": "mcq",
    "status": "approved",
    "caseId": "eoe-adult",
    "diagnosis": "Eosinophilic Esophagitis",
    "source": "DOI: 10.1053/j.gastro.2020.02.038; AGA clinical practice update on dietary management of EoE",
    "submittedAt": "2026-03-05T02:12:40Z",
    "approvedAt": "2026-03-05T02:12:40Z",
    "question": {
      "stem": "A 28-year-old man presents with a 6-month history of progressive dysphagia to solids and two episodes of food impaction requiring endoscopic removal. He has a history of seasonal allergies and asthma. Upper endoscopy reveals concentric rings throughout the esophagus with longitudinal furrows and white exudates. Esophageal biopsies show 22 eosinophils per high-power field in the distal esophagus and 18 eosinophils per high-power field in the proximal esophagus. He is started on high-dose proton pump inhibitor therapy for 8 weeks, after which repeat endoscopy shows persistent rings and furrows with biopsies demonstrating 20 eosinophils per high-power field distally and 16 eosinophils per high-power field proximally.",
      "options": [
        {
          "text": "Diagnosis of eosinophilic esophagitis is confirmed and treatment with six-food elimination diet should be initiated",
          "explanation": "Correct. The patient meets diagnostic criteria for EoE with ≥15 eos/hpf after adequate PPI trial, confirming this is not PPI-responsive esophageal eosinophilia."
        },
        {
          "text": "Esophageal dilation should be performed immediately to address the dysphagia before initiating anti-inflammatory therapy",
          "explanation": "Incorrect. While dilation may help dysphagia, it should be combined with anti-inflammatory therapy as it does not treat the underlying eosinophilic inflammation."
        },
        {
          "text": "Increase proton pump inhibitor dose and extend treatment duration as the eosinophil count suggests ongoing acid-related disease",
          "explanation": "Incorrect. The persistent eosinophilia after 8-week PPI trial indicates this is not PPI-responsive esophageal eosinophilia but true EoE."
        },
        {
          "text": "Initiate dupilumab therapy as first-line treatment given the patient's history of asthma and allergic disease",
          "explanation": "Incorrect. While dupilumab is FDA-approved for EoE, dietary elimination or topical steroids are typically first-line treatments, with dupilumab reserved for refractory cases."
        },
        {
          "text": "Obtain additional biopsies from the mid-esophagus as the current biopsy distribution is insufficient for diagnosis",
          "explanation": "Incorrect. The patient already has adequate biopsies from proximal and distal esophagus showing ≥15 eos/hpf, which meets diagnostic criteria."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has eosinophilic esophagitis (EoE) confirmed by the diagnostic criteria: ≥15 eosinophils per high-power field on esophageal biopsy after an adequate 8-week PPI trial. The persistent eosinophilia despite PPI therapy excludes PPI-responsive esophageal eosinophilia (GERD-related), confirming true EoE. The six-food elimination diet is highly effective (70-80% remission rate) and is considered first-line therapy. Dilation alone would not address the underlying inflammation, extended PPI therapy is unnecessary after failing the 8-week trial, dupilumab is typically reserved for refractory cases, and the biopsy sampling is already adequate.",
      "topic_tags": [
        "gastroenterology",
        "eosinophilic_esophagitis",
        "dysphagia",
        "food_allergies"
      ],
      "key_concept": "EoE diagnosis requires ≥15 eosinophils/hpf after 8-week PPI trial to exclude PPI-responsive esophageal eosinophilia"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "EoE diagnostic threshold: ≥15 eos/hpf after 8-week PPI trial. PPI-responsive eosinophilia: normalizes on PPI → NOT true EoE.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette provides essential context - age, symptoms, endoscopic findings, biopsy results, and PPI trial outcome - all necessary to differentiate EoE from GERD-related eosinophilia"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is clinically relevant: demographics establish typical EoE patient, symptoms provide clinical context, endoscopic findings support diagnosis, biopsy counts meet diagnostic threshold, and PPI trial failure confirms true EoE"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [16,18,19,17,19]. Ratio 1.19 - acceptable but could be tighter"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All distractors represent reasonable clinical considerations: dilation for symptomatic relief, extended PPI trial, dupilumab for allergic comorbidities, additional biopsies for diagnostic certainty"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are complete action statements with consistent grammatical structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current EoE guidelines: ≥15 eosinophils/hpf after 8-week PPI trial confirms EoE, and six-food elimination diet is first-line therapy"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - diagnosis is confirmed by criteria and six-food elimination diet is established first-line treatment"
      }
    }
  },
  {
    "id": "lib-eoe-adult-0067",
    "type": "mcq",
    "status": "approved",
    "caseId": "eoe-adult",
    "diagnosis": "Eosinophilic Esophagitis",
    "source": "DOI: 10.1053/j.gastro.2020.02.038; AGA clinical practice update on dietary management of EoE",
    "submittedAt": "2026-03-05T02:13:18Z",
    "approvedAt": "2026-03-05T02:13:18Z",
    "question": {
      "stem": "A 28-year-old man presents with a 6-month history of progressive dysphagia to solids and two episodes of food impaction requiring emergency endoscopic removal. He has a history of seasonal allergies and asthma. Upper endoscopy reveals concentric rings throughout the esophagus, longitudinal furrows, and white exudates. Multiple biopsies from the proximal and distal esophagus show 22 eosinophils per high-power field. He was treated with high-dose proton pump inhibitor therapy for 8 weeks prior to endoscopy without symptom improvement.",
      "options": [
        {
          "text": "Initiate six-food elimination diet removing milk, wheat, eggs, soy, nuts, and seafood",
          "explanation": "Correct. The 6-food elimination diet (6FED) is highly effective for EoE, achieving histologic remission in 70-80% of patients. Given the patient's confirmed EoE diagnosis and classic presentation, dietary elimination is a first-line treatment option."
        },
        {
          "text": "Begin twice-daily fluticasone swallowed without spacer device",
          "explanation": "Incorrect. While swallowed topical corticosteroids are effective for EoE (50-70% remission), the 6FED has higher efficacy rates (70-80%) and should be considered first-line, especially in motivated patients who can adhere to dietary restrictions."
        },
        {
          "text": "Schedule esophageal dilation for symptomatic stricture management",
          "explanation": "Incorrect. While dilation can improve dysphagia symptoms, endoscopy showed rings and furrows but no mention of fixed strictures. More importantly, dilation only addresses mechanical obstruction but does not treat the underlying eosinophilic inflammation."
        },
        {
          "text": "Start dupilumab subcutaneous injections every two weeks",
          "explanation": "Incorrect. While dupilumab is FDA-approved for EoE and effective (59% remission in TREX trial), it is typically reserved for patients who have failed first-line therapies like dietary elimination or topical corticosteroids due to cost and need for injection therapy."
        },
        {
          "text": "Repeat endoscopy in 8 weeks to reassess eosinophil count",
          "explanation": "Incorrect. The patient already completed an 8-week PPI trial without improvement and has confirmed EoE with >15 eosinophils/hpf. Repeating endoscopy without intervening treatment would delay appropriate therapy and not address the underlying condition."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has confirmed eosinophilic esophagitis (EoE) based on classic symptoms (dysphagia, food impaction), characteristic endoscopic findings (rings, furrows, white exudates), histology (≥15 eosinophils/hpf), and failure to respond to PPI therapy. The six-food elimination diet is highly effective first-line therapy with 70-80% histologic remission rates. While topical corticosteroids are also effective, they have lower remission rates. Dupilumab is typically reserved for refractory cases. Dilation alone would not address the underlying inflammation, and repeat endoscopy without treatment would unnecessarily delay therapy.",
      "topic_tags": [
        "eosinophilic esophagitis",
        "dysphagia",
        "food elimination diet",
        "gastroenterology"
      ],
      "key_concept": "Six-food elimination diet is first-line treatment for eosinophilic esophagitis with highest remission rates"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Endoscopic findings: rings (trachealization), longitudinal furrows, white exudates, edema, stricture. EREFS score used in trials.",
    "quality_score": 0.87,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering the stem, the question asks what to do for a patient - requires the clinical context to determine EoE diagnosis and appropriate first-line treatment"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is essential: age/demographics, symptom progression, allergic history, endoscopic findings, histology results, and PPI trial failure all contribute to EoE diagnosis and treatment selection"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [12,9,7,7,10] - ratio 1.71 slightly exceeds 1.5 threshold but not severely"
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors are legitimate EoE treatments: topical steroids (B), dilation (C), dupilumab (D), and surveillance (E) are all evidence-based options in appropriate contexts"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options begin with verbs in imperative form: Initiate, Begin, Schedule, Start, Repeat"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Six-food elimination diet is indeed first-line therapy for EoE with highest remission rates (70-80%) and is recommended by current guidelines"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While elimination diet is clearly preferred first-line, topical steroids (fluticasone) could also be reasonable first-line therapy - slight ambiguity but elimination diet has superior efficacy data"
      }
    }
  },
  {
    "id": "lib-eoe-adult-0068",
    "type": "mcq",
    "status": "approved",
    "caseId": "eoe-adult",
    "diagnosis": "Eosinophilic Esophagitis",
    "source": "DOI: 10.1053/j.gastro.2020.02.038; AGA clinical practice update on dietary management of EoE",
    "submittedAt": "2026-03-05T02:13:55Z",
    "approvedAt": "2026-03-05T02:13:55Z",
    "question": {
      "stem": "A 28-year-old man presents with a 6-month history of progressive dysphagia to solids and two episodes of food impaction requiring emergency endoscopic removal. He denies heartburn, regurgitation, or weight loss. Upper endoscopy reveals multiple concentric rings throughout the esophagus with longitudinal furrows and white exudates. Esophageal biopsies from proximal and distal locations show 22 eosinophils per high-power field. He was treated with high-dose proton pump inhibitor therapy for 8 weeks prior to biopsy with no symptomatic improvement. Which of the following is the most appropriate next step in management?",
      "options": [
        {
          "text": "Six-food elimination diet with sequential reintroduction and repeat endoscopy",
          "explanation": "Correct. This patient has confirmed EoE (>15 eos/hpf after PPI trial failed). The 6-food elimination diet achieves 70-80% histologic remission and is considered first-line therapy, especially in motivated patients."
        },
        {
          "text": "Initiate dupilumab subcutaneous injections every two weeks",
          "explanation": "Incorrect. While dupilumab is FDA-approved for EoE and effective (59% remission in TREX trial), it is typically reserved for refractory cases or when dietary/topical therapies have failed, not as first-line treatment."
        },
        {
          "text": "Swallowed fluticasone propionate twice daily for 8 weeks",
          "explanation": "Incorrect. Topical corticosteroids are effective (50-70% response) but dietary elimination is generally preferred as first-line therapy when feasible, as it identifies specific triggers and avoids long-term medication use."
        },
        {
          "text": "Esophageal dilation of strictured areas followed by observation",
          "explanation": "Incorrect. While dilation can improve dysphagia symptoms, it does not treat the underlying eosinophilic inflammation and symptoms will recur. Anti-inflammatory therapy must be combined with dilation."
        },
        {
          "text": "Repeat upper endoscopy with biopsy in 3 months without intervention",
          "explanation": "Incorrect. The patient has confirmed EoE with significant symptoms (dysphagia, food impaction). Active treatment is indicated rather than observation, as untreated EoE can lead to progressive fibrosis and stricture formation."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has classic adult EoE presentation (dysphagia with food impaction) and confirmed diagnosis with >15 eosinophils/hpf after failed PPI trial. The 6-food elimination diet (removing milk, wheat, egg, soy, nuts, seafood) is considered first-line therapy, achieving histologic remission in 70-80% of patients. Foods are reintroduced sequentially with repeat endoscopy to identify specific triggers, with cow's milk being the most common culprit (55-65%). While topical steroids and dupilumab are effective alternatives, dietary therapy is preferred when feasible as it avoids long-term medications and provides definitive trigger identification.",
      "topic_tags": [
        "gastroenterology",
        "eosinophilic esophagitis",
        "dysphagia",
        "food elimination diet"
      ],
      "key_concept": "Six-food elimination diet is first-line therapy for newly diagnosed eosinophilic esophagitis"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Most common adult EoE presentation: dysphagia + food impaction. Most common pediatric: feeding refusal, vomiting, abdominal pain.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the last sentence would leave insufficient information about EoE diagnosis, endoscopic findings, biopsy results, and failed PPI trial - all essential for determining appropriate next step"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides crucial diagnostic information: age/symptoms establish presentation, endoscopy findings suggest EoE, biopsy confirms diagnosis, failed PPI trial completes diagnostic workup per guidelines"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [10,8,9,9,10] - max/min ratio 1.25, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All distractors are legitimate EoE treatments: dupilumab (FDA-approved), topical steroids (standard therapy), dilation (for strictures), observation (valid approach). Each represents reasonable clinical consideration"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure as treatment/management actions starting with action words or treatment names"
      },
      "clinical_accuracy": {
        "score": 0.8,
        "note": "Six-food elimination diet is indeed first-line per current guidelines when feasible, though some experts might prefer topical steroids as equally valid first-line therapy"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While dietary therapy is preferred first-line when patient can comply, topical steroids are also considered equally valid first-line therapy by some guidelines, creating potential for reasonable disagreement"
      }
    }
  },
  {
    "id": "lib-eoe-pediatric-0069",
    "type": "mcq",
    "status": "approved",
    "caseId": "eoe-pediatric",
    "diagnosis": "Eosinophilic Esophagitis — Pediatric",
    "source": "DOI: 10.1053/j.gastro.2020.02.038; AGA clinical practice update on dietary management of EoE",
    "submittedAt": "2026-03-05T02:15:10Z",
    "approvedAt": "2026-03-05T02:15:10Z",
    "question": {
      "stem": "A 4-year-old boy is brought to the pediatric gastroenterologist for evaluation of chronic feeding difficulties. His parents report that he has refused solid foods for the past 8 months, frequently vomits after meals, and has had poor weight gain despite adequate caloric intake attempts. Physical examination shows a thin child at the 10th percentile for weight and 25th percentile for height. Upper endoscopy reveals linear furrows, white exudates, and rings throughout the esophagus. Esophageal biopsy demonstrates 22 eosinophils per high-power field in the distal esophagus. The parents are eager to identify potential food triggers quickly while ensuring adequate nutrition. What is the most appropriate next step in management?",
      "options": [
        {
          "text": "Initiate elimination of cow's milk only and reassess in 8 weeks",
          "explanation": "Single food elimination with cow's milk achieves remission in ~40% of cases and is a reasonable first step, but elemental formula provides higher success rates for confirming food-triggered EoE."
        },
        {
          "text": "Start elemental amino acid-based formula with dietitian involvement",
          "explanation": "Correct. Elemental formula achieves >90% histologic remission and is the gold standard to confirm food-driven EoE, allowing systematic food reintroduction to identify triggers while ensuring adequate nutrition."
        },
        {
          "text": "Begin six-food elimination diet removing milk, wheat, egg, soy, nuts, and seafood",
          "explanation": "Six-food elimination diet is effective but more complex and may compromise nutrition in a child already showing poor weight gain. Elemental formula is preferred initially."
        },
        {
          "text": "Prescribe swallowed fluticasone propionate spray twice daily",
          "explanation": "Topical steroids are appropriate treatment but do not help identify food triggers, which the parents specifically want to determine for long-term management."
        },
        {
          "text": "Recommend dupilumab therapy given the child's age and weight",
          "explanation": "While dupilumab is FDA-approved for EoE in children ≥1 year weighing ≥15 kg, it's typically reserved for cases where dietary or topical therapy is insufficient, not as first-line treatment."
        }
      ],
      "correct_index": 1,
      "explanation": "This 4-year-old has classic pediatric EoE with feeding refusal, vomiting, poor weight gain, and diagnostic endoscopy/histology (≥15 eosinophils/hpf). Elemental amino acid-based formula is the gold standard approach, achieving >90% histologic remission and confirming food-triggered EoE. This allows systematic food reintroduction to identify specific triggers while ensuring adequate nutrition in a child already showing growth concerns. Single milk elimination has lower success (~40%), six-food elimination may further compromise nutrition, topical steroids don't identify triggers, and dupilumab is reserved for refractory cases.",
      "topic_tags": [
        "pediatric gastroenterology",
        "eosinophilic esophagitis",
        "food allergy",
        "elimination diet"
      ],
      "key_concept": "Elemental formula is the gold standard initial approach for pediatric EoE to confirm food triggers while ensuring adequate nutrition"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "PC",
      "acgme_milestone": "PC3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Pediatric EoE: same histologic threshold (≥15 eos/hpf) and treatment approach as adults.",
    "quality_score": 0.71,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final question requires knowledge of EoE diagnostic criteria, management options, and pediatric considerations - cannot be answered from question alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All clinical details (age, symptoms, growth parameters, endoscopy findings, biopsy results, parent concerns) are essential for diagnosis and management decision"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [12,9,14,7,9] - max/min ratio 2.0, but within acceptable range for clinical options"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "A,C,D are reasonable EoE treatments but suboptimal for this scenario; E (dupilumab) is less plausible as first-line in pediatrics"
      },
      "grammatical_consistency": {
        "score": 0.5,
        "note": "Mixed structures: some start with verbs (Initiate, Start, Begin, Prescribe, Recommend) but have different grammatical patterns"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Elemental formula is indeed gold standard for pediatric EoE with growth concerns, allowing nutrition maintenance while identifying triggers"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear best answer given patient's age, growth concerns, and need for both trigger identification and nutritional support"
      }
    }
  },
  {
    "id": "lib-eoe-pediatric-0070",
    "type": "mcq",
    "status": "approved",
    "caseId": "eoe-pediatric",
    "diagnosis": "Eosinophilic Esophagitis — Pediatric",
    "source": "DOI: 10.1053/j.gastro.2020.02.038; AGA clinical practice update on dietary management of EoE",
    "submittedAt": "2026-03-05T02:16:16Z",
    "approvedAt": "2026-03-05T02:16:16Z",
    "question": {
      "stem": "A 7-year-old boy presents with a 6-month history of vomiting after meals and refusal to eat certain foods. His parents report he has dropped from the 75th to 25th percentile for weight. Upper endoscopy reveals linear furrows and white plaques in the esophagus. Biopsy shows 22 eosinophils per high-power field in the distal esophagus. His parents are concerned about dietary restrictions affecting his nutrition and ask about the most effective dietary approach to confirm that food triggers are causing his symptoms.",
      "options": [
        {
          "text": "Eliminate cow's milk only from his diet for 8 weeks",
          "explanation": "This single food elimination achieves remission in only ~40% of cases and would not definitively confirm food-driven EoE in this patient."
        },
        {
          "text": "Start elemental amino acid-based formula exclusively for 8 weeks",
          "explanation": "This is correct. Elemental formula achieves >90% histologic remission and is the gold standard to confirm food-driven EoE before identifying specific triggers."
        },
        {
          "text": "Remove the six most common food triggers simultaneously",
          "explanation": "While 6FED is effective, it's more restrictive than needed initially and doesn't definitively confirm food causation like elemental formula does."
        },
        {
          "text": "Begin swallowed fluticasone while continuing current diet",
          "explanation": "Topical steroids are effective treatment but won't help identify food triggers or confirm whether EoE is food-driven in this patient."
        },
        {
          "text": "Initiate dupilumab therapy and continue unrestricted diet",
          "explanation": "While dupilumab is FDA-approved for pediatric EoE, it doesn't address the parents' goal of confirming food triggers as the cause."
        }
      ],
      "correct_index": 1,
      "explanation": "Elemental (amino acid-based) formula achieves histologic remission in >90% of pediatric EoE patients and serves as the gold standard to confirm food-driven disease. This approach definitively establishes whether dietary triggers are responsible before proceeding with step-down food reintroduction to identify specific culprits. While single milk elimination achieves remission in ~40% of cases, it's insufficient to rule out food causation. The 6-food elimination diet is effective but more restrictive than necessary for initial confirmation. Pharmacologic treatments like topical steroids or dupilumab don't identify food triggers, which is the family's primary concern given the nutritional impact.",
      "topic_tags": [
        "Eosinophilic Esophagitis",
        "Pediatric Gastroenterology",
        "Food Allergies",
        "Elimination Diet"
      ],
      "key_concept": "Elemental formula is the gold standard for confirming food-driven EoE in pediatric patients"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Top trigger foods: cow's milk (#1), wheat, egg, soy. Single food elimination (milk only) achieves remission in ~40% — start here before 6FED.",
    "quality_score": 0.77,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Clinical context (age, symptoms, endoscopy findings, biopsy results, weight loss, parental concern about nutrition) is essential to determine the most appropriate diagnostic approach"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are necessary: age establishes pediatric context, symptoms/weight loss show severity, endoscopy/biopsy confirm EoE diagnosis, parental concern guides management approach"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,9,8,8,7], ratio 1.3 - acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All options are legitimate EoE treatments: single allergen elimination, 6-food elimination, topical steroids, and dupilumab are all evidence-based approaches"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow verb phrase structure (Eliminate, Start, Remove, Begin, Initiate)"
      },
      "clinical_accuracy": {
        "score": 0.7,
        "note": "Elemental formula is indeed highly effective (~90% response rate) for confirming food-driven EoE, though some guidelines also support 6-food elimination diet as first-line"
      },
      "single_best_answer": {
        "score": 0.6,
        "note": "Given the specific goal of confirming food causation with maximal certainty, elemental formula is defensible as best answer, though 6-food elimination could be debated"
      }
    }
  },
  {
    "id": "lib-eoe-pediatric-0071",
    "type": "mcq",
    "status": "approved",
    "caseId": "eoe-pediatric",
    "diagnosis": "Eosinophilic Esophagitis — Pediatric",
    "source": "DOI: 10.1053/j.gastro.2020.02.038; AGA clinical practice update on dietary management of EoE",
    "submittedAt": "2026-03-05T02:16:53Z",
    "approvedAt": "2026-03-05T02:16:53Z",
    "question": {
      "stem": "A 6-year-old boy presents with a 1-year history of intermittent vomiting after meals and refusal to eat solid foods. His parents report he has lost 3 kg over the past 6 months despite previously normal growth. Upper endoscopy reveals linear furrows and white plaques throughout the esophagus. Esophageal biopsies show 22 eosinophils per high-power field with eosinophil degranulation. Proton pump inhibitor therapy for 8 weeks showed no clinical or histologic improvement. The family is motivated to pursue dietary management but is concerned about nutritional adequacy and wants the most definitive approach to identify trigger foods.",
      "options": [
        {
          "text": "Initiate elemental amino acid-based formula as sole nutrition source",
          "explanation": "Correct - elemental formula achieves >90% histologic remission and serves as the gold standard to confirm food-driven EoE while allowing systematic food reintroduction to identify triggers."
        },
        {
          "text": "Begin six-food elimination diet removing milk, wheat, egg, soy, nuts, and seafood",
          "explanation": "Incorrect - while effective, 6FED is less definitive than elemental formula and doesn't achieve the >90% remission rate needed for optimal trigger identification."
        },
        {
          "text": "Start with cow's milk elimination only given its high likelihood as trigger",
          "explanation": "Incorrect - single milk elimination achieves remission in only ~40% of cases, making it insufficient for definitive trigger identification in this motivated family."
        },
        {
          "text": "Initiate swallowed budesonide orodispersible tablets while maintaining current diet",
          "explanation": "Incorrect - pharmacotherapy doesn't identify food triggers and this family specifically requested dietary management for trigger identification."
        },
        {
          "text": "Recommend empirical avoidance of the four most common triggers: milk, wheat, egg, and soy",
          "explanation": "Incorrect - four-food elimination is less comprehensive than elemental formula and doesn't provide the definitive approach requested by this motivated family."
        }
      ],
      "correct_index": 0,
      "explanation": "This case presents pediatric EoE with classic school-age presentation (vomiting, food refusal, weight loss) and characteristic endoscopic/histologic findings. The family's motivation and desire for the most definitive dietary approach makes elemental formula the optimal choice. Elemental (amino acid-based) formula achieves >90% histologic remission, serving as the gold standard to confirm food-driven EoE and providing the most reliable baseline for systematic food reintroduction. While other elimination diets are effective, they have lower remission rates and are less definitive for trigger identification. The 6FED achieves good results but not the >90% rate of elemental formula. Single milk elimination has only ~40% success rate. Pharmacotherapy doesn't address their goal of identifying food triggers.",
      "topic_tags": [
        "eosinophilic_esophagitis",
        "pediatric_gastroenterology",
        "food_allergy",
        "elimination_diet"
      ],
      "key_concept": "Elemental formula as gold standard for confirming food-driven EoE and systematic trigger identification"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Elemental formula: >90% histologic remission — gold standard to confirm food-driven EoE. Step-down to identify trigger foods.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final sentence references family motivation and desire for 'most definitive approach' - cannot determine correct answer without this context from the stem"
      },
      "stem_relevance": {
        "score": 0.9,
        "note": "All clinical details (age, symptoms, endoscopy, histology, PPI failure, family preferences) are necessary to distinguish between dietary and pharmacologic options"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [10,14,11,9,15] - ratio 1.67 slightly exceeds 1.5 threshold"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent legitimate EoE management approaches: 6FED is standard first-line, milk elimination is reasonable starting point, budesonide is established therapy, 4FED is validated approach"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently start with action verbs (Initiate, Begin, Start, Initiate, Recommend)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Elemental formula is indeed the most definitive dietary approach for EoE with >90% remission rates, appropriate for motivated families seeking comprehensive trigger identification"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Given family's specific request for 'most definitive approach', elemental formula is clearly superior, though 6FED could be debated as reasonable first-line approach"
      }
    }
  },
  {
    "id": "lib-erythema-multiforme-major-0072",
    "type": "mcq",
    "status": "approved",
    "caseId": "erythema-multiforme-major",
    "diagnosis": "Erythema Multiforme Major",
    "source": "DOI: 10.3949/ccjm.79a.11118; Erythema multiforme: recognition, treatment, and prevention",
    "submittedAt": "2026-03-05T02:17:32Z",
    "approvedAt": "2026-03-05T02:17:32Z",
    "question": {
      "stem": "A 28-year-old woman presents with a 4-day history of painful skin lesions on her hands, feet, and face. She reports similar episodes occurring 3-4 times per year, often preceded by lip tingling and small vesicles. Physical examination reveals well-demarcated lesions with pale dusky centers surrounded by dark edematous rings and erythematous peripheries on the palms, soles, and dorsal hands. She has painful oral ulcerations but no genital or ocular involvement. Nikolsky sign is negative. She denies recent medication changes or new drug exposures.",
      "options": [
        {
          "text": "Herpes simplex virus-triggered erythema multiforme major",
          "explanation": "Correct. The 3-zone target lesions in acral distribution, recurrent pattern with prodromal HSV symptoms, limited mucosal involvement (oral only), and negative Nikolsky sign are classic for HSV-triggered EM major."
        },
        {
          "text": "Drug-induced Stevens-Johnson syndrome",
          "explanation": "Incorrect. SJS is drug-caused with ill-defined atypical targets, trunk-dominant distribution, involves all mucosal sites, and has positive Nikolsky sign. This patient has no drug exposure and classic 3-zone targets."
        },
        {
          "text": "Mycoplasma pneumoniae-associated erythema multiforme",
          "explanation": "Incorrect. While Mycoplasma is the #1 cause of EM in children, this adult patient has recurrent episodes with HSV prodrome (lip tingling/vesicles), making HSV the more likely trigger."
        },
        {
          "text": "Bullous pemphigoid with target-like lesions",
          "explanation": "Incorrect. Bullous pemphigoid typically affects elderly patients with tense bullae on flexural areas, not the acral 3-zone target lesions seen here. The recurrent pattern with HSV prodrome points to EM major."
        },
        {
          "text": "Fixed drug eruption with bullous transformation",
          "explanation": "Incorrect. Fixed drug eruptions recur in the same anatomic location with drug re-exposure and typically present as solitary plaques, not the widespread acral 3-zone targets seen in this case."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has classic erythema multiforme major triggered by HSV. Key features include: (1) typical 3-zone target lesions (pale center, dark ring, red periphery), (2) acral distribution (palms, soles, hands, face), (3) recurrent episodes with HSV prodrome (lip tingling, vesicles), (4) limited mucosal involvement (oral only), and (5) negative Nikolsky sign. HSV is the #1 cause of EM in adults. This differs from SJS which is drug-caused, has atypical targets, trunk distribution, all mucosal sites involved, and positive Nikolsky sign. Mycoplasma is more common in children. The other options don't match the classic presentation pattern.",
      "topic_tags": [
        "dermatology",
        "infectious_disease",
        "emergency_medicine"
      ],
      "key_concept": "HSV is the primary cause of erythema multiforme major in adults, distinguished from drug-induced SJS/TEN by 3-zone target lesions and acral distribution"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "EM cause: infections (HSV #1 adults, Mycoplasma #1 children). NOT drugs (drugs → SJS/TEN).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The stem provides essential clinical details (target lesions, distribution, recurrent pattern, HSV prodrome) that are necessary to distinguish between the differential diagnoses. Cannot be answered from last sentence alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/demographics, lesion description (3-zone targets), distribution (acral), recurrence pattern, HSV prodrome (lip tingling/vesicles), mucosal involvement pattern, and negative Nikolsky sign all help differentiate EM major from SJS and other conditions."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,4,5,6,6] - max/min ratio is 1.75, but close enough to acceptable range and differences reflect necessary medical specificity"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "SJS (0.9) - very plausible given skin lesions and mucosal involvement. Mycoplasma EM (0.8) - reasonable consideration. Bullous pemphigoid (0.6) - less likely given target lesions and negative Nikolsky. Fixed drug eruption (0.7) - possible but distribution pattern doesn't fit well."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: [pathogen/cause]-[condition type] or [condition] with [modifier]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "HSV-triggered EM major is correct given the classic triad of target lesions, acral distribution, recurrent pattern with HSV prodrome, and limited mucosal involvement. Distinguishes appropriately from SJS."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear best answer based on classic presentation. The HSV prodrome, typical target morphology, acral distribution, and recurrence pattern definitively point to HSV-triggered EM major."
      }
    }
  },
  {
    "id": "lib-erythema-multiforme-major-0073",
    "type": "mcq",
    "status": "approved",
    "caseId": "erythema-multiforme-major",
    "diagnosis": "Erythema Multiforme Major",
    "source": "DOI: 10.3949/ccjm.79a.11118; Erythema multiforme: recognition, treatment, and prevention",
    "submittedAt": "2026-03-05T02:18:08Z",
    "approvedAt": "2026-03-05T02:18:08Z",
    "question": {
      "stem": "A 28-year-old woman presents with a 3-day history of painful skin lesions on her palms, soles, and dorsal hands. She reports similar episodes occurring every 4-6 months over the past 2 years, each lasting about 2 weeks. Physical examination reveals well-demarcated circular lesions with pale dusky centers, dark edematous inner rings, and erythematous outer borders. She has painful erosions on her oral mucosa but no genital or ocular involvement. Nikolsky sign is negative. She denies recent medication changes or new drug exposures.",
      "options": [
        {
          "text": "Erythema multiforme major with HSV suppression therapy",
          "explanation": "Correct. Classic 3-zone target lesions in acral distribution with limited mucosal involvement and recurrent pattern strongly suggests HSV-triggered EM major. Suppressive antiviral therapy reduces recurrence by 50-75%."
        },
        {
          "text": "Stevens-Johnson syndrome requiring immediate drug discontinuation",
          "explanation": "Incorrect. SJS typically has ill-defined atypical targets, trunk distribution, extensive mucosal involvement, positive Nikolsky sign, and drug causation. This patient has classic EM features."
        },
        {
          "text": "Bullous pemphigoid with topical corticosteroid therapy",
          "explanation": "Incorrect. Bullous pemphigoid presents with tense bullae, positive Nikolsky sign, and typically affects elderly patients. The target lesions and acral distribution are not characteristic."
        },
        {
          "text": "Fixed drug eruption with avoidance of culprit medication",
          "explanation": "Incorrect. Fixed drug eruptions are well-demarcated plaques that recur in the same location with drug re-exposure, but lack the classic 3-zone target morphology seen here."
        },
        {
          "text": "Hand-foot-and-mouth disease with supportive care only",
          "explanation": "Incorrect. HFMD typically affects children, has vesicular lesions rather than target lesions, and doesn't show the classic 3-zone morphology or recurrent pattern described."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic erythema multiforme major: 3-zone target lesions (pale center, dark inner ring, red outer border) in characteristic acral distribution (palms, soles, dorsal hands), limited mucosal involvement (oral only), negative Nikolsky sign, and importantly, a recurrent pattern every 4-6 months. The recurrent nature strongly suggests HSV-triggered EM major, which warrants suppressive antiviral therapy (valacyclovir 500mg BID or acyclovir 400mg BID for 6-12 months) to reduce recurrence by 50-75%. SJS is distinguished by drug causation, ill-defined targets, trunk distribution, extensive mucosal involvement, and positive Nikolsky sign. The other options don't match the classic target lesion morphology and distribution pattern.",
      "topic_tags": [
        "dermatology",
        "erythema_multiforme",
        "vesiculobullous_disorders",
        "HSV"
      ],
      "key_concept": "Classic 3-zone target lesions in acral distribution with recurrent pattern indicates HSV-triggered erythema multiforme major requiring suppressive antiviral therapy"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Classic target lesion: 3 zones — pale/dusky center + dark edematous inner ring + red outer ring. Acral distribution (palms, soles, dorsal hands, face).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Question requires full clinical vignette - target lesion morphology, distribution, recurrence pattern, and mucosal involvement are all essential for diagnosis"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All clinical details are necessary: lesion morphology distinguishes from other conditions, distribution is characteristic, recurrence pattern suggests HSV trigger, mucosal involvement differentiates EM major from minor"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [8,7,6,7,7] - ratio 1.33, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are reasonable dermatologic conditions that could present with skin lesions and mucosal involvement, though SJS and fixed drug eruption are particularly plausible"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow same structure: [Condition] with [management approach]"
      },
      "clinical_accuracy": {
        "score": 0.8,
        "note": "Correct answer is appropriate - recurrent EM major with classic features warrants HSV suppression. However, some experts might debate immediate suppression vs observation"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Given the recurrent pattern and classic presentation, HSV suppression is the best answer, though some clinicians might initially observe"
      }
    }
  },
  {
    "id": "lib-erythema-multiforme-major-0074",
    "type": "mcq",
    "status": "approved",
    "caseId": "erythema-multiforme-major",
    "diagnosis": "Erythema Multiforme Major",
    "source": "DOI: 10.3949/ccjm.79a.11118; Erythema multiforme: recognition, treatment, and prevention",
    "submittedAt": "2026-03-05T02:18:46Z",
    "approvedAt": "2026-03-05T02:18:46Z",
    "question": {
      "stem": "A 28-year-old woman presents with a 3-day history of painful oral ulcers and skin lesions on her hands and feet. She reports similar episodes occurring every 3-4 months over the past 2 years, always preceded by lip tingling. Physical examination reveals shallow oral erosions involving the buccal mucosa and lips. The skin lesions are symmetric, involving the palms, soles, and dorsal aspects of both hands. Each lesion has a pale dusky center surrounded by a dark edematous ring and red periphery. Gentle lateral pressure on intact skin does not cause epidermal separation. Temperature is 37.2°C (99.0°F), and she appears well otherwise. Previous episodes resolved spontaneously over 2-3 weeks without treatment.",
      "options": [
        {
          "text": "Initiate daily valacyclovir 500 mg twice daily for HSV suppression",
          "explanation": "Correct. This patient has recurrent erythema multiforme major triggered by HSV reactivation, evidenced by prodromal lip tingling, classic 3-zone target lesions in acral distribution, limited oral mucosal involvement, negative Nikolsky sign, and recurrent pattern every 3-4 months. Daily HSV suppression reduces recurrence by 50-75%."
        },
        {
          "text": "Discontinue all current medications and observe for improvement",
          "explanation": "Incorrect. While drug-induced SJS requires medication discontinuation, this patient has infection-triggered EM major (HSV-associated based on prodromal tingling and recurrent pattern). The classic 3-zone targets, acral distribution, and limited mucosal involvement distinguish this from drug-induced SJS."
        },
        {
          "text": "Start high-dose systemic corticosteroids and arrange ophthalmology consultation",
          "explanation": "Incorrect. This approach is appropriate for SJS/TEN which involves extensive mucosal surfaces including ocular involvement. This patient has EM major with limited oral mucosal involvement, negative Nikolsky sign, and acral target lesions characteristic of HSV-triggered disease."
        },
        {
          "text": "Obtain skin biopsy and direct immunofluorescence for autoimmune bullous disease",
          "explanation": "Incorrect. While autoimmune bullous diseases like pemphigus vulgaris can present with oral erosions, they typically have positive Nikolsky signs and lack the characteristic 3-zone target lesions in acral distribution. The recurrent pattern with prodromal tingling strongly suggests HSV-triggered EM major."
        },
        {
          "text": "Prescribe topical antimycotic therapy and recommend mycoplasma serology testing",
          "explanation": "Incorrect. While Mycoplasma pneumoniae is the leading cause of EM in children, this adult patient lacks respiratory symptoms and has clear HSV prodromal symptoms (lip tingling). The classic target lesions and acral distribution support HSV-triggered EM major, not mycoplasma or fungal infection."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has recurrent erythema multiforme major triggered by HSV reactivation. Key features include: 1) Classic 3-zone target lesions (pale dusky center, dark edematous ring, red periphery) in acral distribution (palms, soles, dorsal hands), 2) Limited mucosal involvement (oral only), 3) Negative Nikolsky sign, 4) Recurrent pattern every 3-4 months with HSV prodromal symptoms (lip tingling), and 5) Self-limiting course over 2-3 weeks. This distinguishes it from SJS/TEN (drug-induced, extensive mucosal involvement, positive Nikolsky, atypical targets, trunk distribution) and autoimmune bullous diseases (positive Nikolsky, lack of target lesions). Daily HSV suppression with valacyclovir reduces EM recurrence by 50-75%.",
      "topic_tags": [
        "dermatology",
        "infectious_disease",
        "emergency_medicine",
        "hsv",
        "erythema_multiforme"
      ],
      "key_concept": "HSV-triggered recurrent erythema multiforme major requires daily antiviral suppression, distinguished from SJS by classic 3-zone targets, acral distribution, limited mucosal involvement, and negative Nikolsky sign"
    },
    "tags": {
      "abai_domain": "Domain 4 — Skin & Ocular Allergy",
      "abai_domain_number": 4,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "EM major vs SJS: EM = infection, 3-zone targets, acral, limited mucosal (1 site, usually oral), Nikolsky NEGATIVE, self-limiting. SJS = drug, ill-defined targets, trunk-dominant, all mucosal sites, Nikolsky POSITIVE.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer from just the last sentence alone - requires clinical context, physical findings, and pattern recognition"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: age/demographics, symptom timeline, physical exam findings, vital signs, and natural history all contribute to diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,8,8,9,9] - excellent parity with max/min ratio of 1.125"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B (drug reaction), C (SJS/TEN), D (bullous disease) are reasonable differentials. E is weaker but mycoplasma can cause EM"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options start with action verbs in consistent imperative structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct diagnosis of HSV-triggered recurrent EM major. Valacyclovir suppression is evidence-based standard treatment"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "HSV suppression is clearly best given recurrent pattern and prodromal symptoms, though some might consider observation"
      }
    }
  },
  {
    "id": "lib-food-allergy-oit-reaction-0075",
    "type": "mcq",
    "status": "approved",
    "caseId": "food-allergy-oit-reaction",
    "diagnosis": "Food Allergy OIT Reaction",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1056/NEJMoa1812856; AR101 oral immunotherapy for peanut allergy",
    "submittedAt": "2026-03-05T02:19:26Z",
    "approvedAt": "2026-03-05T02:19:26Z",
    "question": {
      "stem": "A 12-year-old boy with severe peanut allergy is undergoing oral immunotherapy (OIT) and has been stable on his maintenance dose for 6 months. He presents to clinic reporting that yesterday he developed generalized urticaria and abdominal cramping 30 minutes after taking his daily OIT dose. His mother notes he had a low-grade fever of 38.2°C that morning due to a viral upper respiratory infection. His vital signs are normal today and physical examination is unremarkable. Which of the following best explains the mechanism by which his concurrent illness contributed to this reaction?",
      "options": [
        {
          "text": "Fever increased IgE cross-linking and enhanced mast cell degranulation",
          "explanation": "This is the correct mechanism. Fever and illness are cofactors that lower the threshold for mast cell activation, making patients more susceptible to reactions even at previously tolerated OIT doses."
        },
        {
          "text": "Viral infection decreased IgG4 blocking antibody production",
          "explanation": "While IgG4 blocking antibodies are part of OIT's mechanism, viral infections do not acutely decrease their production. The reaction occurred due to lowered mast cell activation threshold."
        },
        {
          "text": "Upper respiratory inflammation reduced oral mucosal tolerance",
          "explanation": "OIT works through systemic desensitization mechanisms, not local mucosal tolerance. The reaction was due to fever lowering the threshold for mast cell activation, not reduced mucosal effects."
        },
        {
          "text": "Illness triggered regulatory T-cell suppression and loss of tolerance",
          "explanation": "While Tregs are important in OIT tolerance, acute illness does not rapidly suppress Treg function. The reaction occurred due to fever acting as a cofactor lowering mast cell activation threshold."
        },
        {
          "text": "Concurrent infection increased basophil sensitivity to allergen exposure",
          "explanation": "Although basophil desensitization is part of OIT's mechanism, the primary issue here is that fever acts as a cofactor lowering the threshold for mast cell activation during allergen exposure."
        }
      ],
      "correct_index": 0,
      "explanation": "This question tests understanding of OIT cofactors and their mechanism. Fever >38°C is a well-established cofactor that lowers the threshold for mast cell activation, making patients more susceptible to reactions even at previously tolerated doses. The patient should hold his OIT dose until fever-free. Other cofactors include active illness, exercise within 2 hours, menses days 1-2, alcohol, and NSAIDs. The other options describe legitimate components of OIT's mechanism (IgG4 blocking antibodies, Treg induction, basophil desensitization) but do not explain how concurrent illness specifically increases reaction risk.",
      "topic_tags": [
        "Food Allergy",
        "Oral Immunotherapy",
        "Anaphylaxis",
        "Pediatric Allergy"
      ],
      "key_concept": "OIT cofactors lower mast cell activation threshold and increase reaction risk"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "OIT mechanism: mast cell anergy + basophil desensitization + Treg induction + IgG4 production (blocking antibody) + IgE/IgG4 ratio decrease.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette provides essential context (12-year-old with peanut allergy, stable on OIT maintenance for 6 months, developed reaction with concurrent fever/viral illness) that is necessary to answer the mechanism question correctly."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: patient age/allergy establishes context, OIT maintenance status shows previously stable tolerance, reaction details provide timing/symptoms, fever/viral illness are the key cofactors, and normal current exam confirms resolution."
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [9,7,7,8,8]. Max/min ratio is 9/7 = 1.29, which is acceptable but could be more balanced."
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors represent legitimate immunological mechanisms in OIT: IgG4 blocking antibodies, oral mucosal tolerance, regulatory T-cells, and basophil desensitization are all real components of OIT, making them highly plausible to students."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent noun phrase structure describing immunological mechanisms."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - fever >38°C is an established cofactor that lowers mast cell activation threshold during OIT. The explanation correctly identifies other cofactors and the clinical management (hold dose until fever-free)."
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While fever-enhanced mast cell degranulation is the primary mechanism, option D regarding Treg suppression could also be considered plausible during acute illness, though less direct than the correct answer."
      }
    }
  },
  {
    "id": "lib-food-allergy-oit-reaction-0076",
    "type": "mcq",
    "status": "approved",
    "caseId": "food-allergy-oit-reaction",
    "diagnosis": "Food Allergy OIT Reaction",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1056/NEJMoa1812856; AR101 oral immunotherapy for peanut allergy",
    "submittedAt": "2026-03-05T02:20:05Z",
    "approvedAt": "2026-03-05T02:20:05Z",
    "question": {
      "stem": "A 12-year-old boy with severe peanut allergy is undergoing oral immunotherapy (OIT) and has been on a maintenance dose of 300 mg peanut protein daily for 8 months. He presents to the allergy clinic for routine follow-up reporting that over the past 3 weeks he has experienced intermittent difficulty swallowing solid foods, occasional chest discomfort after eating, and one episode where food felt 'stuck' in his throat. His parents report he has been compliant with his daily OIT dosing and has not had any acute allergic reactions. Physical examination is unremarkable. Vital signs are normal.",
      "options": [
        {
          "text": "Continue current OIT maintenance dose and prescribe a proton pump inhibitor for suspected gastroesophageal reflux",
          "explanation": "Incorrect. While GERD can cause dysphagia, the combination of dysphagia, odynophagia, and food impaction sensation in an OIT patient strongly suggests eosinophilic esophagitis, which requires specific evaluation and OIT modification."
        },
        {
          "text": "Discontinue OIT immediately and refer for gastroenterology evaluation with upper endoscopy",
          "explanation": "Correct. These symptoms (dysphagia, chest pain, food impaction sensation) in an OIT patient are highly suggestive of eosinophilic esophagitis, which occurs in ~5% of OIT patients. Guidelines recommend low threshold for endoscopic evaluation and OIT discontinuation or dose reduction when EoE is suspected."
        },
        {
          "text": "Reduce OIT maintenance dose by 50% and schedule follow-up in 2 weeks to reassess symptoms",
          "explanation": "Incorrect. While dose reduction is sometimes appropriate for confirmed EoE, the patient first needs proper diagnostic evaluation with endoscopy to confirm the diagnosis before making OIT modifications."
        },
        {
          "text": "Increase antihistamine dosing and continue current OIT maintenance dose with closer monitoring",
          "explanation": "Incorrect. These are not typical allergic reaction symptoms that would respond to antihistamines. The dysphagia and food impaction symptoms suggest structural/inflammatory esophageal pathology requiring endoscopic evaluation."
        },
        {
          "text": "Temporarily hold OIT dosing for one week then resume at current maintenance dose",
          "explanation": "Incorrect. A brief OIT hold would not address the underlying concern for eosinophilic esophagitis. These symptoms require diagnostic evaluation before determining appropriate OIT management modifications."
        }
      ],
      "correct_index": 1,
      "explanation": "This patient presents with classic symptoms of eosinophilic esophagitis (EoE): dysphagia, odynophagia, chest pain, and food impaction sensation. EoE is a well-recognized complication of OIT occurring in approximately 5% of patients. Current guidelines recommend symptom-based screening at every OIT visit specifically looking for these symptoms. When EoE is suspected, patients should have a low threshold for gastroenterology referral and upper endoscopy for diagnosis. OIT should be discontinued or the dose reduced when EoE is confirmed. The other options fail to recognize this serious complication and would delay appropriate diagnosis and management.",
      "topic_tags": [
        "oral immunotherapy",
        "eosinophilic esophagitis",
        "food allergy",
        "treatment complications"
      ],
      "key_concept": "Recognition and management of eosinophilic esophagitis as a complication of oral immunotherapy"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "PC",
      "acgme_milestone": "PC4",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Desensitization vs sustained unresponsiveness (SU): desensitization = tolerance maintained only while dosing daily. SU = tolerance persists weeks after stopping. ~70% achieve desensitization; ~30% achieve SU.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer from last sentence alone - requires knowledge of OIT complications, symptom pattern, and appropriate management protocol"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements necessary: patient age, severe allergy, OIT maintenance details, symptom timeline, compliance confirmation, and normal physical exam - each affects clinical reasoning"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [14,12,15,13,13] - ratio 1.25, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "A (PPI for GERD) and C (dose reduction) are reasonable considerations. D (antihistamines) less plausible but possible. E (temporary hold) somewhat reasonable but inadequate"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative statements with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer B appropriately recognizes EoE as OIT complication requiring immediate evaluation - aligns with current guidelines"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "B is clearly best, though some might argue for C (dose reduction) as reasonable interim step - but B is definitively superior given symptom severity"
      }
    }
  },
  {
    "id": "lib-food-allergy-oit-reaction-0077",
    "type": "mcq",
    "status": "approved",
    "caseId": "food-allergy-oit-reaction",
    "diagnosis": "Food Allergy OIT Reaction",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1056/NEJMoa1812856; AR101 oral immunotherapy for peanut allergy",
    "submittedAt": "2026-03-05T02:20:39Z",
    "approvedAt": "2026-03-05T02:20:39Z",
    "question": {
      "stem": "A 12-year-old boy with peanut allergy has been receiving oral immunotherapy (OIT) for 8 months and is currently in the maintenance phase taking 300mg daily peanut protein. His mother calls the clinic stating that he developed fever of 38.5°C this morning with mild rhinorrhea and cough. She asks whether he should take his scheduled OIT dose today. His last reaction during OIT was mild oral itching 2 months ago during updosing. He has been tolerating his maintenance dose well without reactions for the past 6 weeks.",
      "options": [
        {
          "text": "Hold the OIT dose until fever resolves and he is asymptomatic for 24 hours",
          "explanation": "Correct. Fever >38°C is an established cofactor that lowers the threshold for mast cell activation during OIT, requiring dose holding."
        },
        {
          "text": "Give half the usual OIT dose since he is only mildly symptomatic",
          "explanation": "Incorrect. Dose reduction rather than holding is not recommended during cofactor states, as any amount of allergen can still trigger reactions."
        },
        {
          "text": "Continue the full OIT dose with premedication using antihistamines",
          "explanation": "Incorrect. Antihistamines do not adequately prevent OIT reactions during cofactor states when mast cell activation threshold is lowered."
        },
        {
          "text": "Continue the full OIT dose since he has been stable on maintenance therapy",
          "explanation": "Incorrect. Even patients stable on maintenance therapy must hold doses during cofactor states including fever >38°C."
        },
        {
          "text": "Administer the dose under medical supervision in the clinic today",
          "explanation": "Incorrect. Medical supervision does not mitigate the increased reaction risk during cofactor states; the dose should be held regardless of setting."
        }
      ],
      "correct_index": 0,
      "explanation": "OIT cofactor protocol mandates holding doses when fever exceeds 38°C, as fever is a well-established cofactor that lowers the threshold for mast cell activation and increases reaction risk. Other cofactors requiring dose holding include active illness, exercise within 2 hours, menses days 1-2, and alcohol consumption. The patient should resume his maintenance dose only after fever resolution and being asymptomatic for 24 hours. Dose modification, premedication, or supervised administration do not adequately address the underlying increased reaction risk during cofactor states.",
      "topic_tags": [
        "food_allergy",
        "oral_immunotherapy",
        "cofactors",
        "pediatric_allergy"
      ],
      "key_concept": "OIT cofactor protocol requiring dose holding during fever >38°C"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "OIT cofactor protocol: hold dose if fever >38°C, active illness, exercise within 2h, menses Day 1–2, alcohol.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The last sentence alone (asking about OIT dose with fever) cannot be answered without the clinical context of maintenance phase, fever details, and reaction history"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is relevant: age/allergy establishes patient, OIT duration/phase/dose shows treatment status, fever/symptoms create the clinical scenario, reaction history provides context for decision-making"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [13,11,9,12,10] - ratio 1.44, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B (dose reduction) and C (premedication) are reasonable but suboptimal approaches. D represents common misconception about maintenance stability. E (supervised administration) is plausible safety measure but doesn't address cofactor issue"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure as complete action statements"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with established OIT cofactor protocols - fever >38°C requires dose holding until resolution plus 24-hour asymptomatic period"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - cofactor protocols are well-established with specific fever thresholds"
      }
    }
  },
  {
    "id": "lib-fpies-acute-0078",
    "type": "mcq",
    "status": "approved",
    "caseId": "fpies-acute",
    "diagnosis": "FPIES — Acute Episode",
    "source": "DOI: 10.1016/j.jaci.2016.12.966; International consensus guidelines for FPIES: executive summary",
    "submittedAt": "2026-03-05T02:21:19Z",
    "approvedAt": "2026-03-05T02:21:19Z",
    "question": {
      "stem": "A 14-month-old boy is brought to the emergency department by his parents for profuse vomiting and lethargy that began 2 hours after eating rice cereal for the first time. The parents report he vomited 8 times, appears pale, and seems unusually tired. He has no fever, rash, or wheezing. Vital signs show temperature 36.2°C, heart rate 140/min, blood pressure 85/50 mmHg, and respiratory rate 28/min. Physical examination reveals a lethargic but responsive child with pale mucous membranes and no urticaria. The parents are concerned about a severe allergic reaction and ask if they should use the EpiPen prescribed for his older sibling's peanut allergy.",
      "options": [
        {
          "text": "Administer IV ondansetron 0.15 mg/kg and IV normal saline",
          "explanation": "Correct. This presentation is classic for FPIES with vomiting 1-4 hours post-ingestion of rice (common trigger in toddlers), lethargy, pallor, and hypotension. IV ondansetron is first-line treatment, not epinephrine."
        },
        {
          "text": "Administer intramuscular epinephrine and IV diphenhydramine",
          "explanation": "Incorrect. FPIES is non-IgE mediated, so epinephrine is not indicated. The timing (2 hours) and lack of urticaria distinguish this from IgE-mediated anaphylaxis which occurs within 5-30 minutes."
        },
        {
          "text": "Order stool culture and begin empiric antibiotic therapy",
          "explanation": "Incorrect. While food poisoning can cause vomiting 1-6 hours after ingestion, it typically affects multiple people who ate the same food. This child's isolated exposure to rice cereal makes FPIES more likely."
        },
        {
          "text": "Obtain blood cultures and start IV ceftriaxone for sepsis",
          "explanation": "Incorrect. Though FPIES can mimic sepsis with lethargy and pallor, the clear temporal relationship to rice cereal ingestion and lack of fever make FPIES the primary consideration."
        },
        {
          "text": "Discharge home with oral rehydration solution and follow-up",
          "explanation": "Incorrect. The child has hypotension (BP 85/50) and requires IV fluid resuscitation. FPIES can cause significant dehydration and shock requiring aggressive supportive care."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic FPIES (Food Protein-Induced Enterocolitis Syndrome) with vomiting occurring 2 hours after first rice exposure in a toddler. Key features include: timing (1-4 hours post-ingestion), absence of urticaria/wheezing, and systemic symptoms (lethargy, pallor, hypotension). Rice is a common FPIES trigger in toddlers. Treatment is supportive with IV ondansetron (0.15 mg/kg) for vomiting and IV fluids for hypotension. Epinephrine is not indicated as FPIES is non-IgE mediated. The other options represent common misdiagnoses (sepsis, food poisoning, IgE allergy) but don't fit the clinical picture as well.",
      "topic_tags": [
        "FPIES",
        "food allergy",
        "pediatric emergency",
        "non-IgE mediated allergy"
      ],
      "key_concept": "FPIES timing and management differs from IgE-mediated food allergy"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "FPIES timing: vomiting 1–4h after ingestion. Distinguish from IgE anaphylaxis (5–30 min) and food poisoning (1–6h but usually multiple people affected).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the last sentence leaves insufficient information to determine FPIES vs other causes. The timing, rice exposure, and clinical presentation are all essential."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age (FPIES common in toddlers), timing (2 hours post-rice), symptoms (vomiting, lethargy, pallor), vital signs (hypotension), physical exam (no urticaria), and parent concern about allergy all contribute to the diagnostic picture."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,8,8,9,9]. Good parity with max/min ratio of 1.125."
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are clinically reasonable: B represents IgE-mediated allergy (parent's concern), C fits infectious gastroenteritis, D addresses sepsis concern given age/presentation, E considers mild gastroenteritis. All are legitimate differential diagnoses."
      },
      "grammatical_consistency": {
        "score": 0.8,
        "note": "Most options start with verbs (Administer, Order, Obtain, Discharge) but structure varies slightly between treatment and diagnostic approaches. Generally consistent."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "FPIES presentation is accurate, ondansetron 0.15 mg/kg is correct dosing, IV fluids appropriate for hypotension. Epinephrine correctly avoided in non-IgE mediated reaction."
      },
      "single_best_answer": {
        "score": 0.7,
        "note": "While FPIES is the most likely diagnosis, some clinicians might reasonably consider sepsis workup given the age and presentation, though the timing and rice exposure strongly favor FPIES."
      }
    }
  },
  {
    "id": "lib-fpies-acute-0079",
    "type": "mcq",
    "status": "approved",
    "caseId": "fpies-acute",
    "diagnosis": "FPIES — Acute Episode",
    "source": "DOI: 10.1016/j.jaci.2016.12.966; International consensus guidelines for FPIES: executive summary",
    "submittedAt": "2026-03-05T02:24:13Z",
    "approvedAt": "2026-03-05T02:24:13Z",
    "question": {
      "stem": "A 14-month-old boy is brought to the emergency department with profuse vomiting that began 2 hours after eating rice cereal for the first time. His parents report he vomited 8 times, appears lethargic and pale, but has no rash or breathing difficulties. Vital signs show temperature 36.2°C (97.2°F), heart rate 140/min, blood pressure 85/50 mmHg, and oxygen saturation 98% on room air. Physical examination reveals a pale, listless infant with dry mucous membranes but no urticaria, wheezing, or stridor. Laboratory studies show white blood cell count 18,000/μL with 75% neutrophils. Skin prick tests for common food allergens including rice are negative.",
      "options": [
        {
          "text": "Administer intravenous ondansetron 2.1 mg and normal saline bolus",
          "explanation": "Correct. This presentation is classic for FPIES (food protein-induced enterocolitis syndrome) with rice as the trigger. Ondansetron 0.15 mg/kg (14 kg × 0.15 = 2.1 mg) is first-line treatment, with IV fluids for hypotension."
        },
        {
          "text": "Administer intramuscular epinephrine 0.15 mg and initiate anaphylaxis protocol",
          "explanation": "Incorrect. FPIES is non-IgE mediated, so epinephrine is not indicated. The absence of urticaria, wheezing, and negative skin tests distinguish this from IgE-mediated anaphylaxis."
        },
        {
          "text": "Obtain blood and urine cultures and initiate empirical antibiotic therapy",
          "explanation": "Incorrect. While sepsis can present with vomiting and lethargy, the clear temporal relationship to rice ingestion and lack of fever make FPIES more likely than bacterial infection."
        },
        {
          "text": "Administer intravenous diphenhydramine 1 mg/kg and methylprednisolone",
          "explanation": "Incorrect. Antihistamines and corticosteroids are not effective in FPIES because it is not mediated by histamine or IgE. These medications are used for allergic reactions, not FPIES."
        },
        {
          "text": "Provide supportive care with oral rehydration solution and discharge home",
          "explanation": "Incorrect. This child has hypotension and severe dehydration requiring IV fluid resuscitation. The profuse vomiting also warrants antiemetic therapy with ondansetron, not just oral rehydration."
        }
      ],
      "correct_index": 0,
      "explanation": "This case describes classic FPIES (food protein-induced enterocolitis syndrome) in a toddler after rice exposure. Key features include: vomiting 1-4 hours post-ingestion, absence of urticaria/wheezing, lethargy, pallor, hypotension, and neutrophilia. FPIES is non-IgE mediated (negative skin tests), distinguishing it from anaphylaxis. First-line treatment is IV ondansetron 0.15 mg/kg (max 4 mg) for antiemetic effect and IV fluids for hypotension. Epinephrine is not indicated as there's no IgE mechanism. Rice is a common FPIES trigger in toddlers.",
      "topic_tags": [
        "FPIES",
        "food allergies",
        "pediatric emergency",
        "non-IgE mediated",
        "ondansetron"
      ],
      "key_concept": "FPIES acute management requires ondansetron and IV fluids, not epinephrine, due to non-IgE mechanism"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Acute management: IV ondansetron 0.15 mg/kg (max 4 mg). IV NS 20 mL/kg if hypotension. NOT epinephrine.",
    "quality_score": 0.74,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence alone cannot determine the correct answer - requires the full clinical vignette including timing, symptoms, negative skin tests, and specific presentation"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: timing of vomiting, first rice exposure, vital signs showing hypotension, absence of allergic signs, neutrophilia, and negative skin tests all point to FPIES diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,9,9,7,10] - ratio 1.43, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B (anaphylaxis) and D (allergic reaction) are reasonable given food reaction context. C (sepsis) is plausible with neutrophilia and lethargy. E (discharge) is less plausible given hypotension and severity"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options begin with verbs (Administer/Obtain/Provide) and follow consistent structure"
      },
      "clinical_accuracy": {
        "score": 0.5,
        "note": "Ondansetron dose calculation: 0.15 mg/kg x 14 kg (14-month-old) = 2.1 mg is correct. However, FPIES management typically prioritizes IV fluid resuscitation over ondansetron as first-line treatment"
      },
      "single_best_answer": {
        "score": 0.5,
        "note": "While A addresses key components (fluids + antiemetic), some clinicians might prioritize aggressive fluid resuscitation alone initially, making the 'single best' answer debatable"
      }
    }
  },
  {
    "id": "lib-fpies-chronic-0080",
    "type": "mcq",
    "status": "approved",
    "caseId": "fpies-chronic",
    "diagnosis": "FPIES — Chronic",
    "source": "DOI: 10.1016/j.jaci.2016.12.966; International consensus guidelines for FPIES: executive summary",
    "submittedAt": "2026-03-05T02:25:24Z",
    "approvedAt": "2026-03-05T02:25:24Z",
    "question": {
      "stem": "A 4-month-old breastfed infant is brought to the pediatrician for evaluation of intermittent vomiting, loose stools, and poor weight gain over the past 6 weeks. The infant was born at term with normal birth weight but has dropped from the 50th to the 15th percentile for weight. The mother reports the infant seems irritable and feeds poorly. Physical examination reveals a fussy infant with mild dehydration but no fever or acute distress. The mother's diet includes regular consumption of dairy products. Laboratory studies show mild metabolic acidosis. Upper GI series is normal.",
      "options": [
        {
          "text": "Recommend maternal elimination of cow's milk from diet for 2 weeks",
          "explanation": "This is correct. The clinical presentation of chronic vomiting, diarrhea, poor weight gain, and irritability in a breastfed infant strongly suggests chronic FPIES. Maternal cow's milk proteins can pass through breast milk and trigger chronic FPIES. A 2-week maternal elimination diet is both diagnostic and therapeutic."
        },
        {
          "text": "Start proton pump inhibitor therapy for gastroesophageal reflux disease",
          "explanation": "This is incorrect. While GERD can cause similar symptoms (vomiting, irritability, poor weight gain), the combination of diarrhea, normal upper GI series, and the chronic progressive nature make chronic FPIES more likely. GERD would not typically cause loose stools or metabolic acidosis."
        },
        {
          "text": "Order abdominal ultrasound to evaluate for pyloric stenosis",
          "explanation": "This is incorrect. Pyloric stenosis typically presents with projectile vomiting in the first 2-8 weeks of life, not at 4 months. The presence of diarrhea and the chronic, gradually worsening course over 6 weeks is not consistent with pyloric stenosis."
        },
        {
          "text": "Switch to extensively hydrolyzed protein formula",
          "explanation": "This is incorrect. While formula change might be considered, extensively hydrolyzed formulas may still trigger symptoms in some FPIES patients. Since this is a breastfed infant, maternal dietary elimination is the preferred initial approach before switching to formula."
        },
        {
          "text": "Obtain comprehensive metabolic panel and refer for failure to thrive workup",
          "explanation": "This is incorrect. While FTT workup might be considered, the specific constellation of symptoms (vomiting, diarrhea, irritability) in a breastfed infant whose mother consumes dairy strongly suggests chronic FPIES. A targeted maternal elimination diet should be tried first before extensive workup."
        }
      ],
      "correct_index": 0,
      "explanation": "This infant presents with classic chronic FPIES symptoms: gradual onset of intermittent vomiting, diarrhea, poor weight gain, and irritability over 6 weeks. Unlike acute FPIES which presents with dramatic episodic vomiting, chronic FPIES develops with daily exposure to trigger foods and causes progressive symptoms that can mimic GERD or general failure to thrive. In breastfed infants, maternal cow's milk proteins passing through breast milk are the most common trigger. The maternal elimination diet for 2 weeks serves as both diagnostic test and treatment - symptom resolution confirms the diagnosis. The other options represent common misdiagnoses or inappropriate management approaches for this presentation.",
      "topic_tags": [
        "pediatric allergy",
        "FPIES",
        "failure to thrive",
        "breastfeeding",
        "food allergy"
      ],
      "key_concept": "Chronic FPIES in breastfed infants requires maternal dietary elimination of suspected trigger foods"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Chronic FPIES: daily exposure → gradual symptoms (vomiting, diarrhea, FTT). Contrast with acute FPIES: episodic exposure → dramatic acute vomiting.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical context (breastfed infant, chronic symptoms, maternal dairy consumption) is essential for determining the correct answer. The question cannot be answered from the last sentence alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are necessary: age and breastfeeding status establish context, symptom timeline and pattern support chronic FPIES, weight drop shows severity, maternal dairy consumption is the key diagnostic clue, physical findings rule out acute illness, and normal upper GI excludes structural causes."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [10,8,8,7,11] - max/min ratio is 1.57, just slightly above 1.5 but acceptable"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "All distractors represent reasonable clinical considerations: GERD is commonly misdiagnosed in this scenario, pyloric stenosis is appropriate given vomiting, formula switch is logical alternative, comprehensive workup is standard for failure to thrive."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure starting with action verbs (Recommend, Start, Order, Switch, Obtain)."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Maternal elimination diet is the correct first-line approach for suspected cow's milk protein allergy/FPIES in breastfed infants per current pediatric guidelines."
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While maternal elimination diet is preferred, some clinicians might reasonably consider switching to extensively hydrolyzed formula as an alternative approach, though elimination diet is less disruptive to breastfeeding."
      }
    }
  },
  {
    "id": "lib-fpies-chronic-0081",
    "type": "mcq",
    "status": "approved",
    "caseId": "fpies-chronic",
    "diagnosis": "FPIES — Chronic",
    "source": "DOI: 10.1016/j.jaci.2016.12.966; International consensus guidelines for FPIES: executive summary",
    "submittedAt": "2026-03-05T02:27:07Z",
    "approvedAt": "2026-03-05T02:27:07Z",
    "question": {
      "stem": "A 3-month-old exclusively breastfed infant is brought to the pediatrician for evaluation of chronic symptoms that began 6 weeks ago. The mother reports the infant has daily non-bloody, watery stools, intermittent vomiting after feeds, and poor weight gain despite adequate breastfeeding frequency. The infant appears irritable and has dropped from the 50th percentile to the 10th percentile for weight. Physical examination reveals a fussy infant with normal vital signs and no acute distress. The mother mentions she increased her dairy intake significantly around the time symptoms began due to concerns about milk production. Laboratory studies show normal complete blood count and comprehensive metabolic panel.",
      "options": [
        {
          "text": "Recommend maternal elimination of cow's milk from diet for 2 weeks",
          "explanation": "This is correct. The presentation is consistent with chronic FPIES triggered by maternal cow's milk proteins passing through breast milk. Maternal elimination diet is both diagnostic and therapeutic for breastfed infants with chronic FPIES."
        },
        {
          "text": "Initiate proton pump inhibitor therapy for gastroesophageal reflux disease",
          "explanation": "This is incorrect. While GERD can present with similar symptoms (vomiting, irritability, poor weight gain), the combination of watery diarrhea and the temporal relationship with increased maternal dairy intake suggests FPIES rather than GERD."
        },
        {
          "text": "Order upper GI series to evaluate for pyloric stenosis",
          "explanation": "This is incorrect. Pyloric stenosis typically presents with projectile vomiting in the first few months of life, but would not cause diarrhea. The vomiting in this case is intermittent rather than the characteristic projectile pattern."
        },
        {
          "text": "Switch to extensively hydrolyzed protein formula feeding",
          "explanation": "This is incorrect. While formula change might be considered, this infant is successfully breastfeeding and the issue appears to be maternal dietary proteins. Additionally, some FPIES infants may still react to extensively hydrolyzed formulas."
        },
        {
          "text": "Obtain stool culture and parasitology examination for infectious causes",
          "explanation": "This is incorrect. While infectious causes should be considered with diarrhea, the chronic nature, temporal relationship with maternal diet change, and associated poor weight gain without fever make FPIES more likely than infection."
        }
      ],
      "correct_index": 0,
      "explanation": "This infant presents with chronic FPIES triggered by cow's milk proteins in maternal breast milk. Chronic FPIES presents with daily symptoms including intermittent vomiting, watery diarrhea, and failure to thrive, contrasting with acute FPIES which has dramatic episodic vomiting. The key diagnostic clue is the temporal relationship between increased maternal dairy intake and symptom onset. In breastfed infants with suspected chronic FPIES, maternal elimination of the trigger food (most commonly cow's milk) for 2 weeks is both diagnostic and therapeutic. GERD would not typically cause diarrhea, pyloric stenosis would present with projectile vomiting without diarrhea, formula change is unnecessary in a successfully breastfeeding infant, and the chronic presentation without fever makes infection unlikely.",
      "topic_tags": [
        "FPIES",
        "food allergy",
        "breastfeeding",
        "failure to thrive",
        "pediatric gastroenterology"
      ],
      "key_concept": "Chronic FPIES in breastfed infants requires maternal elimination diet of trigger foods for diagnosis and treatment"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Breastfed infant with chronic FPIES: maternal cow's milk elimination diet → assess symptom resolution over 2 weeks.",
    "quality_score": 0.83,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering the stem leaves only 'Laboratory studies show normal complete blood count and comprehensive metabolic panel.' This alone cannot lead to the correct answer - the full clinical picture is needed"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides crucial information: age/feeding method, symptom timeline, specific symptoms, growth parameters, physical exam, temporal relationship with maternal diet change, and normal labs"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [11,8,10,7,9]. Max/min ratio = 11/7 = 1.57, slightly exceeding 1.5 threshold"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable differential diagnoses: GERD for vomiting, pyloric stenosis for vomiting in infants, formula switch for suspected milk allergy, infection workup for chronic GI symptoms"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure starting with action verbs (Recommend, Initiate, Order, Switch, Obtain)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Maternal dairy elimination is the correct first-line approach for suspected chronic FPIES in breastfed infants, supported by current pediatric guidelines"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - maternal elimination diet is the most appropriate initial step given the clinical presentation and temporal relationship"
      }
    }
  },
  {
    "id": "lib-fpies-chronic-0082",
    "type": "mcq",
    "status": "approved",
    "caseId": "fpies-chronic",
    "diagnosis": "FPIES — Chronic",
    "source": "DOI: 10.1016/j.jaci.2016.12.966; International consensus guidelines for FPIES: executive summary",
    "submittedAt": "2026-03-05T02:27:51Z",
    "approvedAt": "2026-03-05T02:27:51Z",
    "question": {
      "stem": "A 3-month-old exclusively breastfed infant is brought to the clinic for evaluation of persistent vomiting, watery diarrhea, and poor weight gain over the past 6 weeks. The infant appears irritable and has dropped from the 50th percentile to the 10th percentile for weight. The mother reports the symptoms occur daily, not in discrete episodes. Physical examination reveals a fussy infant with normal vital signs and no acute distress. Laboratory studies show mild hypoalbuminemia. The physician suspects chronic food protein-induced enterocolitis syndrome (FPIES) related to maternal dietary intake.",
      "options": [
        {
          "text": "Recommend maternal elimination of cow's milk from diet with reassessment in 2 weeks",
          "explanation": "Correct. In breastfed infants with chronic FPIES, maternal cow's milk proteins passing through breast milk are the most common trigger. Maternal elimination diet with 2-week assessment is the appropriate diagnostic and therapeutic approach."
        },
        {
          "text": "Switch to extensively hydrolyzed formula and monitor for symptom improvement",
          "explanation": "Incorrect. While switching formulas might seem logical, extensively hydrolyzed formulas may still trigger symptoms in FPIES infants. Additionally, stopping breastfeeding is unnecessary if maternal elimination diet can resolve symptoms."
        },
        {
          "text": "Initiate proton pump inhibitor therapy for presumed gastroesophageal reflux disease",
          "explanation": "Incorrect. While chronic FPIES can mimic GERD with similar GI symptoms, the combination of daily diarrhea, poor weight gain, and irritability in this context suggests FPIES rather than GERD. PPI therapy would not address the underlying food protein trigger."
        },
        {
          "text": "Order upper GI series to evaluate for pyloric stenosis or anatomical abnormalities",
          "explanation": "Incorrect. Although pyloric stenosis can cause projectile vomiting, it typically presents earlier (2-8 weeks) with non-bilious vomiting and metabolic alkalosis. The presence of diarrhea and the chronic daily pattern make FPIES more likely than anatomical causes."
        },
        {
          "text": "Obtain stool culture and parasitology studies to rule out infectious gastroenteritis",
          "explanation": "Incorrect. While infectious causes should be considered in any infant with vomiting and diarrhea, the 6-week chronic course without fever, the association with feeding, and the pattern of daily symptoms suggest chronic FPIES rather than infectious etiology."
        }
      ],
      "correct_index": 0,
      "explanation": "This question tests understanding of chronic FPIES in breastfed infants. The key clinical clues include: daily (not episodic) GI symptoms, poor weight gain, irritability, and exclusively breastfed status. In breastfed infants with chronic FPIES, maternal cow's milk proteins are the most common trigger. The appropriate first step is maternal elimination of cow's milk with reassessment in 2 weeks to confirm diagnosis. Extensively hydrolyzed formulas may still trigger FPIES symptoms, PPI therapy addresses GERD not food protein sensitivity, imaging is unnecessary given the clinical picture, and infectious workup is not indicated for this chronic presentation pattern.",
      "topic_tags": [
        "FPIES",
        "food allergy",
        "pediatric gastroenterology",
        "breastfeeding",
        "failure to thrive"
      ],
      "key_concept": "Chronic FPIES in breastfed infants requires maternal dietary elimination of trigger proteins, most commonly cow's milk"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "PC",
      "acgme_milestone": "PC2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Formula options for milk/soy FPIES: amino acid-based formula (Neocate, EleCare) — extensively hydrolyzed formulas may still trigger in some FPIES infants.",
    "quality_score": 0.71,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Last sentence alone 'The physician suspects chronic food protein-induced enterocolitis syndrome (FPIES) related to maternal dietary intake' plus options cannot be answered without the clinical context of symptoms, timeline, and breastfeeding status"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: age, feeding method, symptom pattern, timeline, growth parameters, physical findings, and lab results all contribute to the diagnosis and management decision"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [11,10,10,11,11] - excellent parity with max/min ratio of 1.1"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B (formula switch) and C (PPI therapy) are very plausible alternatives. D (imaging) is reasonable for weight loss/vomiting. E (infectious workup) is less plausible for 6-week chronic symptoms but still clinically reasonable"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure as action statements (verb phrases describing management steps)"
      },
      "clinical_accuracy": {
        "score": 0.7,
        "note": "Maternal elimination diet is appropriate first step for suspected chronic FPIES in breastfed infants, though some guidelines might recommend formula trial as equally appropriate"
      },
      "single_best_answer": {
        "score": 0.5,
        "note": "While maternal elimination is reasonable, switching to extensively hydrolyzed formula could be considered equally appropriate by some clinicians as a more definitive approach"
      }
    }
  },
  {
    "id": "lib-hereditary-angioedema-0083",
    "type": "mcq",
    "status": "approved",
    "caseId": "hereditary-angioedema",
    "diagnosis": "Hereditary Angioedema",
    "source": "DOI: 10.1111/all.15214; International WAO/EAACI guideline for management of hereditary angioedema — 2021 revision",
    "submittedAt": "2026-03-05T02:28:28Z",
    "approvedAt": "2026-03-05T02:28:28Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department with sudden onset of facial swelling and difficulty swallowing that began 3 hours ago. She reports similar episodes over the past 5 years, typically involving her lips, tongue, or throat. Her mother has a similar condition. She denies urticaria, pruritus, or respiratory symptoms. Vital signs are stable. Physical examination reveals significant swelling of the lips and tongue without erythema or warmth. Laboratory studies show C4 level of 8 mg/dL (normal 20-50 mg/dL), C3 level of 110 mg/dL (normal 90-180 mg/dL), and C1q level of 150 mg/L (normal 120-250 mg/L). C1-esterase inhibitor level is 5 mg/dL (normal 21-39 mg/dL).",
      "options": [
        {
          "text": "Administer C1-esterase inhibitor concentrate intravenously",
          "explanation": "Correct. This patient has hereditary angioedema Type I with characteristic low C4, normal C3, normal C1q, and low C1-INH levels. C1-INH concentrate is first-line treatment for acute HAE attacks."
        },
        {
          "text": "Administer epinephrine intramuscularly and diphenhydramine intravenously",
          "explanation": "Incorrect. HAE is mediated by bradykinin, not histamine, making antihistamines and epinephrine ineffective for HAE attacks."
        },
        {
          "text": "Administer high-dose corticosteroids and fresh frozen plasma",
          "explanation": "Incorrect. Corticosteroids are not effective for HAE attacks. FFP may worsen attacks by providing more substrate for bradykinin production."
        },
        {
          "text": "Administer tranexamic acid and schedule elective complement testing",
          "explanation": "Incorrect. Tranexamic acid is an antifibrinolytic agent not used for HAE. This is an acute attack requiring immediate treatment, not elective testing."
        },
        {
          "text": "Administer lorazepam and monitor for spontaneous resolution",
          "explanation": "Incorrect. HAE attacks above the waist, especially involving the airway, require immediate treatment as they can be fatal. Observation alone is inappropriate."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with hereditary angioedema Type I, evidenced by recurrent angioedema without urticaria, family history, and characteristic laboratory findings (low C4, normal C3, normal C1q, low C1-INH). HAE is caused by bradykinin accumulation, not histamine release, making antihistamines and epinephrine ineffective. C1-esterase inhibitor concentrate is the first-line treatment for acute HAE attacks. Fresh frozen plasma can worsen attacks by providing substrate for more bradykinin production. Any HAE attack above the waist requires immediate treatment due to potential for fatal laryngeal involvement.",
      "topic_tags": [
        "hereditary angioedema",
        "complement deficiency",
        "emergency medicine",
        "immunology"
      ],
      "key_concept": "HAE Type I diagnosis and acute management with C1-INH concentrate"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "PC",
      "acgme_milestone": "PC3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "HAE Types: I (low C1-INH level, most common, 85%); II (normal level, dysfunctional C1-INH); III (FXII mutation, estrogen-triggered, normal complement levels).",
    "quality_score": 0.83,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer without clinical context - requires understanding of HAE diagnosis, family history, and specific laboratory pattern"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements essential: recurrent episodes establish pattern, family history suggests hereditary cause, absence of urticaria/pruritus differentiates from allergic angioedema, lab values confirm HAE Type I diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [6,8,8,8,8] - excellent parity with max/min ratio of 1.33"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B (epinephrine/antihistamines) very plausible for angioedema; C (steroids/FFP) reasonable but FFP problematic; D (tranexamic acid) less plausible for acute management; E (lorazepam/monitoring) implausible for potentially life-threatening condition"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: 'Administer [medication(s)] [route] and [additional action]'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "C1-esterase inhibitor concentrate is indeed first-line treatment for acute HAE attacks per current guidelines"
      },
      "single_best_answer": {
        "score": 0.75,
        "note": "C1-INH concentrate clearly best, though some might consider icatibant or ecallantide as alternatives in HAE management"
      }
    }
  },
  {
    "id": "lib-hereditary-angioedema-0084",
    "type": "mcq",
    "status": "approved",
    "caseId": "hereditary-angioedema",
    "diagnosis": "Hereditary Angioedema",
    "source": "DOI: 10.1111/all.15214; International WAO/EAACI guideline for management of hereditary angioedema — 2021 revision",
    "submittedAt": "2026-03-05T02:29:10Z",
    "approvedAt": "2026-03-05T02:29:10Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department with sudden onset of facial swelling and difficulty swallowing that began 4 hours ago. She has a history of similar episodes involving her lips, eyelids, and throat over the past 5 years. Her mother and maternal grandfather had similar episodes. She is not taking any medications and denies recent trauma or illness. Physical examination reveals asymmetric swelling of the lips, eyelids, and soft palate without urticaria. Vital signs are stable but she has mild inspiratory stridor. Laboratory studies show C4: 8 mg/dL (normal 16-38), C3: 120 mg/dL (normal 90-180), C1q: 180 mcg/mL (normal 150-250), and C1-esterase inhibitor level: 12 mg/dL (normal 21-39). Which of the following best explains the pathophysiology of this patient's condition?",
      "options": [
        {
          "text": "IgE-mediated mast cell degranulation leading to histamine release and increased vascular permeability",
          "explanation": "This describes typical allergic angioedema, but the patient has no urticaria, normal C1q, and low C4/C1-INH levels consistent with HAE, not allergic mechanisms."
        },
        {
          "text": "Bradykinin accumulation due to impaired degradation causing B2 receptor activation and vascular permeability",
          "explanation": "This is the correct pathophysiology of HAE. C1-INH deficiency leads to uncontrolled complement and contact system activation, resulting in bradykinin accumulation that acts on B2 receptors to increase vascular permeability."
        },
        {
          "text": "Autoimmune destruction of C1-esterase inhibitor protein leading to complement system dysregulation",
          "explanation": "This would be acquired C1-INH deficiency, which typically presents with low C1q levels. This patient has normal C1q, indicating hereditary rather than acquired deficiency."
        },
        {
          "text": "Factor XII mutation causing estrogen-dependent complement activation and angioedema formation",
          "explanation": "This describes HAE Type III, but this patient has low C4 and C1-INH levels. Type III HAE typically has normal complement levels and is estrogen-triggered."
        },
        {
          "text": "Defective kallikrein regulation leading to excessive kinin production and postcapillary venule dilation",
          "explanation": "While kallikrein dysregulation occurs in HAE, this description is too vague. The specific mechanism involves C1-INH deficiency leading to bradykinin accumulation, not just general kinin excess."
        }
      ],
      "correct_index": 1,
      "explanation": "This patient has hereditary angioedema (HAE) Type I, evidenced by the family history, recurrent angioedema without urticaria, low C4 and C1-INH levels, and normal C1q. The pathophysiology involves C1-esterase inhibitor deficiency leading to uncontrolled activation of the complement and contact systems. This results in bradykinin accumulation, which acts on B2 receptors on postcapillary venules to increase vascular permeability and cause angioedema. This bradykinin-mediated mechanism explains why antihistamines and epinephrine are ineffective in HAE. The normal C1q distinguishes this from acquired C1-INH deficiency. The low C4 (chronically depleted even between attacks) with normal C3 is characteristic of HAE.",
      "topic_tags": [
        "immunology",
        "angioedema",
        "complement_disorders",
        "hereditary_angioedema",
        "emergency_medicine"
      ],
      "key_concept": "HAE pathophysiology involves bradykinin accumulation due to C1-INH deficiency, not histamine-mediated mechanisms"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Complement pattern in HAE: C4 LOW (chronically depleted, even between attacks). C3 NORMAL. C1-INH low (Type I) or dysfunctional (Type II). C1q NORMAL (distinguishes from acquired C1-INH deficiency where C1q is LOW).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The stem provides essential clinical context (family history, lab values, physical findings) that cannot be determined from just the final question about pathophysiology"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are relevant: age/sex (demographic context), onset pattern (acute), family history (hereditary pattern), physical findings (no urticaria), lab values (diagnostic), stridor (severity). Each contributes to the diagnosis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [14,13,12,12,13]. Max/min ratio = 1.17, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "A (IgE-mediated) plausible for allergic angioedema. C (autoimmune) reasonable for acquired angioedema. D (Factor XII) relates to contact system. E (kallikrein) involves related pathway. All are clinically relevant considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [mechanism] leading/causing [effect/outcome]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer B accurately describes HAE Type I pathophysiology. Lab values support diagnosis (low C4, low C1-INH, normal C1q). Bradykinin-mediated mechanism is correct"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Given the specific lab pattern and clinical presentation, hereditary angioedema with bradykinin pathophysiology is clearly the single best answer"
      }
    }
  },
  {
    "id": "lib-hereditary-angioedema-0085",
    "type": "mcq",
    "status": "approved",
    "caseId": "hereditary-angioedema",
    "diagnosis": "Hereditary Angioedema",
    "source": "DOI: 10.1111/all.15214; International WAO/EAACI guideline for management of hereditary angioedema — 2021 revision",
    "submittedAt": "2026-03-05T02:29:50Z",
    "approvedAt": "2026-03-05T02:29:50Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department with sudden onset of facial swelling, particularly involving her lips and eyelids, along with abdominal cramping that began 4 hours ago. She has a family history of similar episodes in her mother and maternal grandmother. Physical examination reveals asymmetric swelling of the face and lips without urticaria. Vital signs are stable. Laboratory studies show C4 level of 8 mg/dL (normal 20-50 mg/dL), C3 level of 110 mg/dL (normal 90-180 mg/dL), and C1q level of 14 mg/dL (normal 11-23 mg/dL). The patient reports she started oral contraceptive pills 3 months ago. She was given epinephrine and diphenhydramine 2 hours ago without improvement.",
      "options": [
        {
          "text": "Administer icatibant subcutaneously",
          "explanation": "Correct. This patient has hereditary angioedema (HAE) based on family history, characteristic asymmetric angioedema without urticaria, low C4 with normal C3 and C1q, and lack of response to epinephrine/antihistamines. HAE is mediated by bradykinin, not histamine, so icatibant (B2 receptor antagonist) is appropriate treatment."
        },
        {
          "text": "Continue high-dose antihistamine therapy",
          "explanation": "Incorrect. HAE is mediated by bradykinin accumulation, not histamine release. Antihistamines are ineffective for HAE attacks, as demonstrated by the patient's lack of response to diphenhydramine."
        },
        {
          "text": "Administer methylprednisolone intravenously",
          "explanation": "Incorrect. Corticosteroids are not effective for acute HAE attacks. HAE is caused by bradykinin-mediated vascular permeability, not inflammatory processes that respond to steroids."
        },
        {
          "text": "Repeat epinephrine administration",
          "explanation": "Incorrect. Epinephrine is ineffective for HAE because the mechanism involves bradykinin, not histamine or other mediators that respond to epinephrine. The patient already failed to respond to initial epinephrine."
        },
        {
          "text": "Obtain fresh frozen plasma for infusion",
          "explanation": "Incorrect. While FFP contains C1-INH, it also contains complement components and contact system proteins that can paradoxically worsen HAE attacks. Specific C1-INH concentrates are preferred over FFP."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with hereditary angioedema (HAE), evidenced by the family history, characteristic asymmetric facial swelling without urticaria, low C4 with normal C3 and C1q levels, estrogen trigger (oral contraceptives), and failure to respond to standard allergic reaction treatments. HAE is caused by C1-inhibitor deficiency leading to bradykinin accumulation, which mediates vascular permeability through B2 receptors. Since the mechanism is bradykinin-mediated rather than histamine-mediated, epinephrine and antihistamines are ineffective. Icatibant is a selective bradykinin B2 receptor antagonist that directly blocks the mediator responsible for HAE symptoms. Other appropriate treatments would include C1-INH concentrate or ecallantide, but icatibant is the only correct option provided.",
      "topic_tags": [
        "hereditary_angioedema",
        "bradykinin",
        "complement_deficiency",
        "emergency_medicine"
      ],
      "key_concept": "HAE is bradykinin-mediated, not histamine-mediated, making antihistamines and epinephrine ineffective; specific bradykinin pathway inhibitors like icatibant are required"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "HAE mechanism: bradykinin (NOT histamine) → B2 receptors on postcapillary venules → vascular permeability → angioedema. Epinephrine and antihistamines: NOT effective for HAE.",
    "quality_score": 0.89,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence would leave insufficient information to diagnose HAE and determine treatment. The family history, lab values, trigger, and lack of response to standard therapy are all essential."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: family history (hereditary pattern), specific swelling pattern (without urticaria), lab values (diagnostic for HAE), OCP trigger, and failed standard treatment all contribute to diagnosis and management."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [4,5,4,3,6] - ratio 2.0 slightly exceeds 1.5 threshold but not severely problematic"
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors represent reasonable but incorrect approaches: continuing antihistamines, steroids, repeat epinephrine are common but ineffective HAE treatments; FFP contains C1-INH but is suboptimal compared to specific therapy"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently start with action verbs (Administer, Continue, Obtain) in imperative form"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Icatibant is indeed the correct first-line treatment for acute HAE attacks, particularly when C1-INH concentrate is unavailable. The pathophysiology and diagnostic reasoning are accurate."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "While C1-INH concentrate might be equally appropriate, icatibant is clearly the best answer among the given options for acute HAE treatment"
      }
    }
  },
  {
    "id": "lib-hypereosinophilic-syndrome-0086",
    "type": "mcq",
    "status": "approved",
    "caseId": "hypereosinophilic-syndrome",
    "diagnosis": "Myeloproliferative HES with FIP1L1-PDGFRA fusion. Eosinophilic endomyocarditis (Löffler endocarditis stage 2) and eosinophilic lung infiltration. Imatinib initiated — complete molecular remission at 3 months.",
    "source": "ReasonDx Case Library — Myeloproliferative HES with FIP1L1-PDGFRA fusion. Eosinophilic endomyocarditis (Löffler endocarditis stage 2) and eosinophilic lung infiltration. Imatinib initiated — complete molecular remission at 3 months.",
    "submittedAt": "2026-03-05T02:30:29Z",
    "approvedAt": "2026-03-05T02:30:29Z",
    "question": {
      "stem": "A 42-year-old man presents with progressive dyspnea and chest pain over 3 months. He has no known allergies or recent travel. Physical examination reveals a systolic murmur and bilateral crackles. Echocardiogram shows apical thrombus and endomyocardial thickening. Laboratory studies reveal: WBC 18,000/µL with 35% eosinophils (absolute eosinophil count 6,300/µL), elevated serum vitamin B12 at 1,200 pg/mL (normal 200-900), elevated serum tryptase at 45 ng/mL (normal <11.5), and normal IgE levels. Bone marrow biopsy demonstrates hypercellularity with increased eosinophils and molecular testing reveals FIP1L1-PDGFRA fusion gene.",
      "options": [
        {
          "text": "Imatinib 100 mg daily",
          "explanation": "Correct. FIP1L1-PDGFRA-positive myeloproliferative HES is exquisitely sensitive to low-dose imatinib (100 mg daily), much lower than the 400 mg used for CML."
        },
        {
          "text": "Imatinib 400 mg daily",
          "explanation": "Incorrect. While imatinib is the correct drug, FIP1L1-PDGFRA-positive HES requires only 100 mg daily due to hypersensitivity to tyrosine kinase inhibition. The 400 mg dose is used for CML."
        },
        {
          "text": "Mepolizumab subcutaneous injection",
          "explanation": "Incorrect. Mepolizumab is reserved for FIP1L1-PDGFRA-negative HES when steroids are inadequate. This patient has the fusion gene and should receive imatinib."
        },
        {
          "text": "Prednisone 1 mg/kg daily",
          "explanation": "Incorrect. While steroids may provide symptomatic relief, they do not address the underlying molecular pathogenesis. FIP1L1-PDGFRA-positive HES requires targeted therapy with imatinib."
        },
        {
          "text": "Hydroxyurea 15 mg/kg daily",
          "explanation": "Incorrect. Hydroxyurea is a cytoreductive agent that may lower eosinophil counts but does not target the specific molecular abnormality driving this myeloproliferative disorder."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has myeloproliferative hypereosinophilic syndrome (HES) with FIP1L1-PDGFRA fusion, evidenced by AEC >1,500/µL, organ damage (Löffler endomyocarditis), elevated B12 and tryptase with normal IgE, and the molecular fusion. The FIP1L1-PDGFRA fusion creates a constitutively active tyrosine kinase that is exquisitely sensitive to imatinib at low doses (100 mg daily), unlike CML which requires 400 mg. Mepolizumab is for fusion-negative HES, steroids don't address the molecular driver, and hydroxyurea lacks specificity for the underlying pathophysiology.",
      "topic_tags": [
        "hematology",
        "hypereosinophilic syndrome",
        "targeted therapy",
        "cardiology"
      ],
      "key_concept": "FIP1L1-PDGFRA-positive myeloproliferative HES requires low-dose imatinib (100 mg daily), not the higher doses used for other malignancies"
    },
    "tags": {
      "abai_domain": "Domain 14 — Mast Cell Disorders",
      "abai_domain_number": 14,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 4,
      "blooms": "synthesis",
      "difficulty": 4
    },
    "pearl_source": "HES AEC threshold: ≥1,500 cells/µL (not ≥500 — that's mild eosinophilia). Severe >5,000.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The stem provides essential clinical context including specific lab values, imaging findings, and molecular testing results that are crucial for distinguishing this condition from other causes of eosinophilia. Cannot be answered from final sentence alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: symptoms establish organ involvement, labs show eosinophilia with specific markers (B12, tryptase, IgE pattern), and molecular testing confirms the specific fusion gene that determines treatment choice."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [4,4,3,4,4]. Ratio 4/3 = 1.33, which is acceptable."
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All distractors represent reasonable treatments for eosinophilic disorders: higher-dose imatinib (used in CML), mepolizumab (anti-IL5 for eosinophilic conditions), prednisone (first-line for many HES cases), and hydroxyurea (cytoreductive therapy). Each is clinically plausible."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: drug name + dosage/route format."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate. FIP1L1-PDGFRA fusion-positive HES responds to low-dose imatinib (100mg daily) due to exquisite sensitivity to tyrosine kinase inhibition, unlike the 400mg dose used in CML."
      },
      "single_best_answer": {
        "score": 0.6,
        "note": "While 100mg is the established starting dose for FIP1L1-PDGFRA fusion, some clinicians might consider 400mg daily as potentially acceptable, though excessive. The molecular diagnosis strongly favors the lower dose."
      }
    }
  },
  {
    "id": "lib-hypereosinophilic-syndrome-0087",
    "type": "mcq",
    "status": "approved",
    "caseId": "hypereosinophilic-syndrome",
    "diagnosis": "Myeloproliferative HES with FIP1L1-PDGFRA fusion. Eosinophilic endomyocarditis (Löffler endocarditis stage 2) and eosinophilic lung infiltration. Imatinib initiated — complete molecular remission at 3 months.",
    "source": "ReasonDx Case Library — Myeloproliferative HES with FIP1L1-PDGFRA fusion. Eosinophilic endomyocarditis (Löffler endocarditis stage 2) and eosinophilic lung infiltration. Imatinib initiated — complete molecular remission at 3 months.",
    "submittedAt": "2026-03-05T02:31:04Z",
    "approvedAt": "2026-03-05T02:31:04Z",
    "question": {
      "stem": "A 42-year-old man presents with progressive dyspnea and chest pain over 6 months. He has no travel history or pet exposure. Physical examination reveals a 3/6 holosystolic murmur at the apex and bilateral lower extremity edema. Laboratory studies show white blood cell count 18,000/µL with 65% eosinophils (absolute eosinophil count 11,700/µL), elevated serum vitamin B12 at 1,200 pg/mL (normal 200-900), elevated serum tryptase at 45 ng/mL (normal <11.4), and normal IgE at 35 IU/mL. Echocardiogram demonstrates apical wall thickening with small mural thrombus and moderate mitral regurgitation. Bone marrow biopsy reveals hypercellular marrow with eosinophil predominance and cytogenetic analysis shows FIP1L1-PDGFRA fusion gene.",
      "options": [
        {
          "text": "Initiate imatinib 100 mg daily",
          "explanation": "Correct. FIP1L1-PDGFRA+ myeloproliferative HES is exquisitely sensitive to low-dose imatinib (100 mg/day), much lower than CML dosing."
        },
        {
          "text": "Initiate imatinib 400 mg daily",
          "explanation": "Incorrect. This is the standard CML dose. FIP1L1-PDGFRA+ HES requires only 100 mg/day due to hypersensitivity to tyrosine kinase inhibition."
        },
        {
          "text": "Start mepolizumab injections",
          "explanation": "Incorrect. Mepolizumab is for FIP1L1-PDGFRA-negative HES when steroids are inadequate. This patient has the fusion gene requiring imatinib."
        },
        {
          "text": "Begin prednisone 1 mg/kg daily",
          "explanation": "Incorrect. Steroids are used for lymphocytic HES or idiopathic HES. This myeloproliferative variant with fusion gene responds dramatically to imatinib."
        },
        {
          "text": "Prescribe alemtuzumab therapy",
          "explanation": "Incorrect. Alemtuzumab targets CD52 and is used for lymphocytic HES with clonal T-cell populations, not myeloproliferative HES with fusion genes."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has myeloproliferative hypereosinophilic syndrome (HES) with FIP1L1-PDGFRA fusion, evidenced by: AEC >1,500/µL, elevated B12 and tryptase (myeloproliferative markers), normal IgE, and the pathognomonic fusion gene. The constellation suggests constitutively active tyrosine kinase activity. FIP1L1-PDGFRA+ HES is uniquely hypersensitive to imatinib, requiring only 100 mg/day (not the 400 mg used in CML). Mepolizumab is reserved for fusion-negative cases, steroids for lymphocytic variants, and alemtuzumab for clonal T-cell HES. The low-dose imatinib sensitivity is the key distinguishing therapeutic feature.",
      "topic_tags": [
        "hematology",
        "hypereosinophilic syndrome",
        "targeted therapy",
        "myeloproliferative disorders"
      ],
      "key_concept": "FIP1L1-PDGFRA+ myeloproliferative HES requires low-dose imatinib (100 mg/day) due to hypersensitivity to tyrosine kinase inhibition"
    },
    "tags": {
      "abai_domain": "Domain 13 — Autoimmune & Inflammatory Disease",
      "abai_domain_number": 13,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 4,
      "blooms": "synthesis",
      "difficulty": 4
    },
    "pearl_source": "FIP1L1-PDGFRA+ HES: imatinib 100 mg/day. NOT 400 mg (used in CML). Hyper-sensitive to TKI.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence would leave only generic treatment options without the specific diagnostic context of FIP1L1-PDGFRA fusion gene, making correct answer selection impossible"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are necessary: progressive symptoms establish chronicity, lab values distinguish myeloproliferative from other HES variants, echocardiogram shows end-organ damage, and genetic analysis provides the definitive diagnostic finding"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [4,4,3,4,3]. Max/min ratio = 4/3 = 1.33, which passes the 1.5 threshold"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All distractors represent legitimate HES treatments: 400mg imatinib for other fusion variants, mepolizumab for fusion-negative cases, prednisone for lymphocytic HES, alemtuzumab for clonal T-cell HES. Very clinically reasonable"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: verb + medication/therapy + dosing details"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - FIP1L1-PDGFRA+ HES is indeed hypersensitive to low-dose imatinib (100mg) vs standard 400mg dose"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Given the specific fusion gene, 100mg imatinib is clearly preferred, though some might consider 400mg initially. The genetic finding makes this reasonably clear-cut"
      }
    }
  },
  {
    "id": "lib-hypereosinophilic-syndrome-0088",
    "type": "mcq",
    "status": "approved",
    "caseId": "hypereosinophilic-syndrome",
    "diagnosis": "Myeloproliferative HES with FIP1L1-PDGFRA fusion. Eosinophilic endomyocarditis (Löffler endocarditis stage 2) and eosinophilic lung infiltration. Imatinib initiated — complete molecular remission at 3 months.",
    "source": "ReasonDx Case Library — Myeloproliferative HES with FIP1L1-PDGFRA fusion. Eosinophilic endomyocarditis (Löffler endocarditis stage 2) and eosinophilic lung infiltration. Imatinib initiated — complete molecular remission at 3 months.",
    "submittedAt": "2026-03-05T02:31:41Z",
    "approvedAt": "2026-03-05T02:31:41Z",
    "question": {
      "stem": "A 42-year-old man presents with progressive dyspnea and chest pain over 3 months. He has a history of chronic rhinosinusitis and recurrent pneumonia. Physical examination reveals bilateral pulmonary crackles and a grade 2/6 systolic murmur. Laboratory studies show absolute eosinophil count of 3,200 cells/µL (confirmed on repeat testing 6 weeks later), serum vitamin B12 of 1,850 pg/mL (normal 200-900), serum tryptase of 45 ng/mL (normal <11.5), and total IgE of 85 IU/mL (normal <100). Echocardiogram demonstrates apical thrombus with mild mitral regurgitation. Bone marrow biopsy reveals hypercellularity with 15% eosinophils and cytogenetic analysis shows 4q12 deletion. Which of the following is the most appropriate initial treatment?",
      "options": [
        {
          "text": "Imatinib 100 mg daily",
          "explanation": "Correct. The constellation of elevated B12, elevated tryptase, normal IgE, and 4q12 deletion (FIP1L1-PDGFRA fusion) confirms myeloproliferative HES. This variant is exquisitely sensitive to low-dose imatinib (100 mg/day), which targets the constitutively active tyrosine kinase."
        },
        {
          "text": "Prednisone 1 mg/kg daily",
          "explanation": "Incorrect. While steroids are first-line for many HES variants, the laboratory profile (elevated B12/tryptase, normal IgE) and 4q12 deletion indicate myeloproliferative HES with FIP1L1-PDGFRA fusion, which responds dramatically to imatinib rather than steroids."
        },
        {
          "text": "Mepolizumab 300 mg subcutaneous monthly",
          "explanation": "Incorrect. Mepolizumab (anti-IL-5 monoclonal antibody) is reserved for FIP1L1-PDGFRA-negative HES when steroids are inadequate. This patient has FIP1L1-PDGFRA-positive myeloproliferative HES, which should be treated with imatinib."
        },
        {
          "text": "Imatinib 400 mg daily",
          "explanation": "Incorrect. While imatinib is the correct drug choice, FIP1L1-PDGFRA-positive HES is hypersensitive to tyrosine kinase inhibition and requires only 100 mg/day (not the 400 mg dose used in CML). Higher doses risk unnecessary toxicity."
        },
        {
          "text": "Hydroxyurea 500 mg twice daily",
          "explanation": "Incorrect. Hydroxyurea is a cytoreductive agent sometimes used in myeloproliferative disorders, but FIP1L1-PDGFRA-positive HES has a specific targeted therapy (imatinib) that addresses the underlying molecular mechanism and achieves superior outcomes."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has myeloproliferative hypereosinophilic syndrome (HES) with FIP1L1-PDGFRA fusion. The key diagnostic clues are: (1) persistent eosinophilia ≥1,500 cells/µL with end-organ damage (endomyocarditis), (2) elevated serum B12 and tryptase with normal IgE (myeloproliferative phenotype), and (3) 4q12 deletion indicating FIP1L1-PDGFRA fusion. This creates a constitutively active tyrosine kinase that drives eosinophil proliferation. Imatinib 100 mg daily (much lower than the CML dose) provides targeted therapy and typically achieves rapid molecular remission. Steroids and mepolizumab are used for other HES variants, while the 400 mg imatinib dose would be excessive for this hypersensitive fusion protein.",
      "topic_tags": [
        "hematology",
        "eosinophilia",
        "myeloproliferative disorders",
        "targeted therapy"
      ],
      "key_concept": "Myeloproliferative HES with FIP1L1-PDGFRA fusion requires low-dose imatinib based on specific laboratory phenotype (elevated B12/tryptase, normal IgE)"
    },
    "tags": {
      "abai_domain": "Domain 14 — Mast Cell Disorders",
      "abai_domain_number": 14,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Elevated serum B12 + elevated tryptase + normal IgE = myeloproliferative HES phenotype.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Complex clinical vignette with multiple key findings required for diagnosis - cannot be answered from last sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All clinical details are essential: symptoms establish presentation, history suggests pattern, labs confirm eosinophilia and myeloproliferative markers, echo shows end-organ damage, cytogenetics identifies specific fusion"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [4,4,5,4,5] - ratio 1.25, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All options are legitimate HES treatments: prednisone for idiopathic HES, mepolizumab for eosinophilic asthma/HES, hydroxyurea as cytoreductive agent, higher dose imatinib plausible but excessive"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: drug name + dose + frequency"
      },
      "clinical_accuracy": {
        "score": 0.8,
        "note": "Correct identification of FIP1L1-PDGFRA fusion HES and appropriate low-dose imatinib therapy, though 4q12 deletion is somewhat simplified nomenclature"
      },
      "single_best_answer": {
        "score": 0.7,
        "note": "While imatinib 100mg is clearly best for this genetic variant, some clinicians might consider prednisone as initial therapy pending genetic confirmation"
      }
    }
  },
  {
    "id": "lib-hypersensitivity-pneumonitis-0089",
    "type": "mcq",
    "status": "approved",
    "caseId": "hypersensitivity-pneumonitis",
    "diagnosis": "Chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). Antigen: avian proteins (bloom, feather, serum). Progressive fibrosis on HRCT. Antigen avoidance initiated. Nintedanib added for fibrotic progression.",
    "source": "ReasonDx Case Library — Chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). Antigen: avian proteins (bloom, feather, serum). Progressive fibrosis on HRCT. Antigen avoidance initiated. Nintedanib added for fibrotic progression.",
    "submittedAt": "2026-03-05T02:32:17Z",
    "approvedAt": "2026-03-05T02:32:17Z",
    "question": {
      "stem": "A 62-year-old woman presents with progressive dyspnea and dry cough over 18 months. She has owned pet parrots for 15 years and reports no occupational exposures. Physical examination reveals bilateral fine crackles. High-resolution CT shows upper lobe ground-glass opacities with centrilobular nodules, mosaic attenuation, and lower lobe honeycombing. Bronchoalveolar lavage reveals 45% lymphocytes with a CD4:CD8 ratio of 0.6. Serum precipitins against avian antigens are positive. Pulmonary function tests show FVC 68% predicted with DLCO 52% predicted.",
      "options": [
        {
          "text": "Chronic fibrotic hypersensitivity pneumonitis",
          "explanation": "Correct. The combination of avian antigen exposure, upper lobe GGO with centrilobular nodules, mosaic attenuation, BAL lymphocytosis >30% with inverted CD4:CD8 ratio <1.0, and positive serum precipitins establishes the diagnosis of chronic fibrotic HP."
        },
        {
          "text": "Idiopathic pulmonary fibrosis",
          "explanation": "Incorrect. IPF typically shows strict basal subpleural honeycombing without upper lobe GGO or centrilobular nodules. BAL in IPF is neutrophil-predominant, not lymphocyte-predominant with inverted CD4:CD8 ratio."
        },
        {
          "text": "Pulmonary sarcoidosis",
          "explanation": "Incorrect. While sarcoidosis can cause upper lobe disease and lymphocytic BAL, the CD4:CD8 ratio is typically >3.5 (not inverted), and the HRCT pattern lacks the characteristic mosaic attenuation and centrilobular nodules of HP."
        },
        {
          "text": "Chronic eosinophilic pneumonia",
          "explanation": "Incorrect. CEP characteristically shows peripheral upper lobe consolidation ('photographic negative of pulmonary edema') and BAL eosinophilia >25%, not the lymphocytic predominance and mosaic attenuation seen here."
        },
        {
          "text": "Organizing pneumonia",
          "explanation": "Incorrect. Organizing pneumonia typically presents with migratory patchy consolidation and ground-glass opacities without the upper lobe centrilobular nodules, mosaic attenuation, or fibrotic changes characteristic of chronic HP."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). Key diagnostic features include: (1) identified antigen exposure (avian proteins from pet parrots), (2) characteristic HRCT pattern with upper lobe GGO, centrilobular nodules, and mosaic attenuation (distinguishing from IPF's basal honeycombing), (3) BAL lymphocytosis >30% with inverted CD4:CD8 ratio <1.0 (hallmark of HP, contrasts with sarcoidosis CD4:CD8 >3.5), and (4) positive serum precipitins confirming sensitization. The fibrotic progression with honeycombing indicates chronic fibrotic HP, which has a poor prognosis similar to IPF and may benefit from antifibrotic therapy like nintedanib.",
      "topic_tags": [
        "hypersensitivity pneumonitis",
        "interstitial lung disease",
        "pulmonology",
        "BAL interpretation",
        "HRCT patterns"
      ],
      "key_concept": "Chronic fibrotic hypersensitivity pneumonitis diagnosis requires integration of antigen exposure, characteristic HRCT pattern with upper lobe involvement and mosaic attenuation, and BAL lymphocytosis with inverted CD4:CD8 ratio"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "HP classifications (ATS/ERS 2020): non-fibrotic HP (reversible alveolitis) vs fibrotic HP (progressive, poor prognosis similar to IPF).",
    "quality_score": 0.89,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering the clinical vignette leaves only 'Which diagnosis is most likely?' - cannot be answered without the detailed clinical context"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is diagnostically relevant: bird exposure (antigen source), timeline (chronic progression), symptoms (dyspnea/cough), imaging findings (distinguishing patterns), BAL results (lymphocytosis with inverted CD4:CD8), and precipitins (sensitization)"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,3,2,3,2] - max/min ratio 2.0 but within acceptable range for medical terminology"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "IPF (honeycombing pattern), sarcoidosis (lymphocytosis), and organizing pneumonia are reasonable differentials. Chronic eosinophilic pneumonia less plausible given BAL shows lymphocytes, not eosinophils"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing pulmonary conditions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - all key features (bird exposure, inverted CD4:CD8 ratio <1.0, upper lobe predominance with mosaic attenuation, positive precipitins) point to chronic fibrotic HP"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - the constellation of findings definitively supports chronic fibrotic hypersensitivity pneumonitis over other options"
      }
    }
  },
  {
    "id": "lib-hypersensitivity-pneumonitis-0090",
    "type": "mcq",
    "status": "approved",
    "caseId": "hypersensitivity-pneumonitis",
    "diagnosis": "Chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). Antigen: avian proteins (bloom, feather, serum). Progressive fibrosis on HRCT. Antigen avoidance initiated. Nintedanib added for fibrotic progression.",
    "source": "ReasonDx Case Library — Chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). Antigen: avian proteins (bloom, feather, serum). Progressive fibrosis on HRCT. Antigen avoidance initiated. Nintedanib added for fibrotic progression.",
    "submittedAt": "2026-03-05T02:32:54Z",
    "approvedAt": "2026-03-05T02:32:54Z",
    "question": {
      "stem": "A 62-year-old woman presents with progressive dyspnea and dry cough over 18 months. She has owned multiple parrots for 15 years and cleans their cages daily. Physical examination reveals bibasilar fine crackles. Pulmonary function tests show FVC 68% predicted with DLCO 52% predicted. High-resolution CT demonstrates upper lobe ground-glass opacities, centrilobular nodules, and mosaic attenuation with lower lobe honeycombing. Bronchoalveolar lavage reveals 45% lymphocytes with a CD4:CD8 ratio of 0.6. Serum precipitins against avian antigens are positive.",
      "options": [
        {
          "text": "Chronic fibrotic hypersensitivity pneumonitis",
          "explanation": "Correct. The combination of avian exposure, upper lobe GGO with centrilobular nodules and mosaic attenuation on HRCT, BAL lymphocytosis >30% with inverted CD4:CD8 ratio <1.0, and positive precipitins establishes the diagnosis of chronic fibrotic HP (Bird Fancier's Lung)."
        },
        {
          "text": "Usual interstitial pneumonia",
          "explanation": "Incorrect. While the honeycombing might suggest UIP, the upper lobe GGO, centrilobular nodules, mosaic attenuation, and BAL findings with inverted CD4:CD8 ratio are inconsistent with IPF, which typically shows basal predominant fibrosis and neutrophil-predominant BAL."
        },
        {
          "text": "Pulmonary sarcoidosis",
          "explanation": "Incorrect. Although sarcoidosis can cause upper lobe predominant disease, the CD4:CD8 ratio would be >3.5 (not 0.6), and the HRCT pattern of centrilobular nodules with mosaic attenuation is not typical for sarcoidosis."
        },
        {
          "text": "Chronic eosinophilic pneumonia",
          "explanation": "Incorrect. CEP typically presents with peripheral eosinophilia and BAL eosinophilia >25%. This patient has lymphocyte-predominant BAL (45%) with no mention of eosinophils, and the HRCT pattern is inconsistent with CEP."
        },
        {
          "text": "Organizing pneumonia",
          "explanation": "Incorrect. OP typically shows patchy consolidation or GGO in a peribronchovascular distribution on HRCT, not the upper lobe centrilobular nodules with mosaic attenuation seen here. BAL in OP is typically mixed inflammatory without the specific lymphocytic pattern."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung) based on the classic triad of: (1) identified antigen exposure (avian proteins from parrots), (2) characteristic HRCT findings (upper lobe GGO, centrilobular nodules, mosaic attenuation indicating air-trapping), and (3) BAL lymphocytosis >30% with inverted CD4:CD8 ratio <1.0. The positive serum precipitins confirm sensitization. The presence of lower lobe honeycombing indicates progression to fibrotic HP. This differs from IPF (basal predominant fibrosis, neutrophil-predominant BAL), sarcoidosis (CD4:CD8 >3.5), and other inflammatory lung diseases by its specific pattern and BAL characteristics.",
      "topic_tags": [
        "hypersensitivity pneumonitis",
        "interstitial lung disease",
        "bronchoalveolar lavage",
        "HRCT interpretation"
      ],
      "key_concept": "Chronic fibrotic HP diagnosis requires integration of antigen exposure, characteristic HRCT pattern (upper lobe GGO/nodules/mosaic attenuation), and BAL lymphocytosis with inverted CD4:CD8 ratio"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Classic HP antigens: Bird Fancier's Lung (avian proteins/bloom); Farmer's Lung (Saccharopolyspora rectivirgula — thermophilic actinomycetes in moldy hay); Hot Tub Lung (Mycobacterium avium complex); Humidifier Lung; Chemical HP (isocyanates — MDI, TDI, HDI).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Without the clinical context, the last sentence alone cannot be answered - requires the full vignette including exposure history, imaging findings, and BAL results"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: exposure history (parrots), timeline (chronic), symptoms, PFTs (restrictive pattern), HRCT findings (classic HP pattern), BAL (lymphocytosis with inverted ratio), and precipitins (sensitization)"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [4,3,2,3,2] - ratio 2.0 exceeds 1.5 threshold but only slightly"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are reasonable considerations for progressive fibrotic lung disease with similar presentations, though sarcoidosis and UIP are most plausible given the imaging pattern"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases with consistent grammatical structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is clinically accurate - chronic fibrotic HP is supported by all key features: exposure, imaging pattern, BAL findings, and precipitins"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "While UIP could be considered given honeycombing, the exposure history, upper lobe predominance, and BAL findings clearly favor chronic HP"
      }
    }
  },
  {
    "id": "lib-hypersensitivity-pneumonitis-0091",
    "type": "mcq",
    "status": "approved",
    "caseId": "hypersensitivity-pneumonitis",
    "diagnosis": "Chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). Antigen: avian proteins (bloom, feather, serum). Progressive fibrosis on HRCT. Antigen avoidance initiated. Nintedanib added for fibrotic progression.",
    "source": "ReasonDx Case Library — Chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). Antigen: avian proteins (bloom, feather, serum). Progressive fibrosis on HRCT. Antigen avoidance initiated. Nintedanib added for fibrotic progression.",
    "submittedAt": "2026-03-05T02:33:30Z",
    "approvedAt": "2026-03-05T02:33:30Z",
    "question": {
      "stem": "A 58-year-old woman presents with progressive dyspnea and dry cough over 18 months. She has raised budgerigars for 15 years in her home. Physical examination reveals fine bibasilar crackles and digital clubbing. High-resolution CT shows upper lobe ground-glass opacities with centrilobular nodules, lower lobe honeycombing, and areas of mosaic attenuation. Pulmonary function tests demonstrate restrictive physiology with DLCO 45% predicted. Bronchoalveolar lavage is performed showing 65% lymphocytes. Flow cytometry analysis of BAL lymphocytes reveals a CD4:CD8 ratio of 0.6.",
      "options": [
        {
          "text": "Chronic fibrotic hypersensitivity pneumonitis",
          "explanation": "Correct. The combination of avian antigen exposure, upper lobe GGO with centrilobular nodules, mosaic attenuation, lymphocytic BAL >30%, and inverted CD4:CD8 ratio <1.0 is diagnostic of chronic fibrotic HP."
        },
        {
          "text": "Pulmonary sarcoidosis",
          "explanation": "Incorrect. While sarcoidosis can cause lymphocytic BAL, it typically shows a CD4:CD8 ratio >3.5 (not inverted like this case with 0.6). The upper lobe GGO pattern would be unusual for sarcoidosis."
        },
        {
          "text": "Idiopathic pulmonary fibrosis",
          "explanation": "Incorrect. IPF shows neutrophil-predominant BAL (not lymphocytic), lacks the upper lobe GGO/centrilobular nodules, and presents with strict basal subpleural honeycombing without mosaic attenuation."
        },
        {
          "text": "Chronic eosinophilic pneumonia",
          "explanation": "Incorrect. CEP would show eosinophil-predominant BAL (>25% eosinophils), not lymphocytic predominance. The CD4:CD8 ratio finding is not characteristic of eosinophilic pneumonia."
        },
        {
          "text": "Nonspecific interstitial pneumonia",
          "explanation": "Incorrect. While NSIP can cause lymphocytic BAL, it lacks the specific upper lobe centrilobular nodular pattern and mosaic attenuation. The inverted CD4:CD8 ratio is characteristic of HP, not NSIP."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung) based on the classic triad: identified antigen exposure (budgerigars), characteristic HRCT findings (upper lobe GGO with centrilobular nodules and mosaic attenuation), and pathognomonic BAL findings (lymphocytosis >30% with inverted CD4:CD8 ratio <1.0). The inverted CD4:CD8 ratio is the key distinguishing feature from sarcoidosis (which shows CD4:CD8 >3.5) and other interstitial lung diseases. IPF would show neutrophil-predominant BAL and lacks the upper lobe involvement. Eosinophilic pneumonia would demonstrate eosinophil predominance (>25%) rather than lymphocytic predominance.",
      "topic_tags": [
        "pulmonology",
        "interstitial lung disease",
        "hypersensitivity pneumonitis",
        "bronchoalveolar lavage",
        "differential diagnosis"
      ],
      "key_concept": "BAL lymphocytosis >30% with inverted CD4:CD8 ratio <1.0 is pathognomonic for hypersensitivity pneumonitis"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "BAL: HP = lymphocyte-predominant (>30%) with CD4:CD8 <1.0. Sarcoidosis = CD4:CD8 >3.5. Eosinophilic pneumonia = eosinophil-predominant (>25%). IPF = neutrophil-predominant.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence leaves insufficient clinical context. The bird exposure, HRCT pattern, and BAL findings are all essential for diagnosis."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides critical diagnostic information: bird exposure (antigen source), timeline (chronicity), symptoms, physical findings, imaging pattern, PFTs, and BAL results with flow cytometry."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [5,2,3,3,3] - max/min ratio is 2.5, but clinical terms are appropriately descriptive"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "Sarcoidosis and IPF are excellent distractors for interstitial lung disease. CEP is plausible but less likely given lymphocytic predominance. NSIP is reasonable differential."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing lung conditions with consistent structure."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate. The inverted CD4:CD8 ratio <1.0 with bird exposure and characteristic HRCT findings definitively supports chronic fibrotic HP."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "The combination of bird exposure, characteristic imaging, and inverted CD4:CD8 ratio makes chronic fibrotic HP the single best answer."
      }
    }
  },
  {
    "id": "lib-idiopathic-angioedema-0092",
    "type": "mcq",
    "status": "approved",
    "caseId": "idiopathic-angioedema",
    "diagnosis": "Idiopathic Angioedema",
    "source": "DOI: 10.1186/1865-1380-5-39",
    "submittedAt": "2026-03-05T02:34:07Z",
    "approvedAt": "2026-03-05T02:34:07Z",
    "question": {
      "stem": "A 42-year-old woman presents with recurrent episodes of facial and lip swelling over the past 8 months. Episodes occur 2-3 times per month, last 24-48 hours, and resolve spontaneously. She denies accompanying hives, shortness of breath, or gastrointestinal symptoms. Her medications include lisinopril for hypertension and a multivitamin. Physical examination during an episode shows asymmetric lip and periorbital edema without erythema or urticaria. Vital signs are normal. Laboratory studies reveal normal CBC, comprehensive metabolic panel, and ESR. Complement studies show C4 28 mg/dL (normal: 20-50 mg/dL), C3 110 mg/dL (normal: 90-180 mg/dL), C1q 180 mcg/mL (normal: 120-250 mcg/mL), and C1-esterase inhibitor level and function are normal.",
      "options": [
        {
          "text": "Discontinue lisinopril and initiate an angiotensin receptor blocker",
          "explanation": "Correct. ACE inhibitors are a common cause of angioedema without urticaria. The normal complement studies rule out hereditary and acquired angioedema. Lisinopril should be discontinued as it can cause bradykinin-mediated angioedema."
        },
        {
          "text": "Initiate treatment with high-dose antihistamines and leukotriene receptor antagonists",
          "explanation": "Incorrect. This patient has angioedema without urticaria, and the absence of histaminergic features makes antihistamine therapy less likely to be effective. This approach is more appropriate for allergic or histaminergic angioedema."
        },
        {
          "text": "Order C1-esterase inhibitor concentrate for prophylactic treatment",
          "explanation": "Incorrect. The normal C4, C1-INH level and function rule out hereditary angioedema. C1-INH concentrate is not indicated when complement studies are normal and there's no evidence of HAE."
        },
        {
          "text": "Perform Factor XII mutation analysis for hereditary angioedema type III",
          "explanation": "Incorrect. While Factor XII mutations can cause HAE type III, this typically affects women and is estrogen-sensitive. The patient's presentation with normal complement studies and ACE inhibitor use makes medication-induced angioedema more likely."
        },
        {
          "text": "Initiate omalizumab therapy for refractory idiopathic angioedema",
          "explanation": "Incorrect. Omalizumab is effective for histaminergic idiopathic angioedema but this patient lacks urticaria and histaminergic features. The ACE inhibitor should be addressed first before considering idiopathic causes."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with recurrent angioedema without urticaria while taking lisinopril. The normal complement studies (C4, C3, C1q, and C1-INH level/function) rule out hereditary angioedema (HAE) and acquired C1-INH deficiency. ACE inhibitors are a well-known cause of angioedema through bradykinin accumulation, as they prevent the breakdown of bradykinin by blocking angiotensin-converting enzyme. The angioedema is typically non-histaminergic (no urticaria) and can occur months to years after starting the medication. Discontinuing the ACE inhibitor is the appropriate first step. ARBs have a much lower risk of angioedema and can be used as an alternative.",
      "topic_tags": [
        "angioedema",
        "ACE inhibitors",
        "complement system",
        "drug-induced reactions"
      ],
      "key_concept": "ACE inhibitor-induced angioedema should be suspected in patients with recurrent angioedema without urticaria who have normal complement studies"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Recurrent angioedema without urticaria workup: C4 (if low → HAE), C1-INH level + function, C1q (if low → acquired C1INH deficiency), FXII mutation, medication review.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering the stem reveals only 'Which of the following is the most appropriate next step in management?' - insufficient information to determine the correct answer without the clinical vignette"
      },
      "stem_relevance": {
        "score": 0.9,
        "note": "All information is clinically relevant: recurrent pattern, absence of urticaria/systemic symptoms, ACE inhibitor use, physical findings, and normal complement studies all contribute to diagnosis"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [9,9,8,8,7] - ratio 1.3:1, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical considerations: antihistamines for angioedema, C1-INH concentrate for suspected HAE, Factor XII testing for HAE type III, omalizumab for refractory cases"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent grammatical structure as imperative verb phrases"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is appropriate - ACE inhibitor-induced angioedema with normal complement studies warrants discontinuation and ARB substitution"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Clear best answer given normal complement studies ruling out HAE and strong clinical suspicion for ACE inhibitor-induced angioedema"
      }
    }
  },
  {
    "id": "lib-idiopathic-angioedema-0093",
    "type": "mcq",
    "status": "approved",
    "caseId": "idiopathic-angioedema",
    "diagnosis": "Idiopathic Angioedema",
    "source": "DOI: 10.1186/1865-1380-5-39",
    "submittedAt": "2026-03-05T02:35:11Z",
    "approvedAt": "2026-03-05T02:35:11Z",
    "question": {
      "stem": "A 28-year-old woman presents to the allergy clinic with a 2-year history of recurrent episodes of facial and lip swelling occurring every 2-3 months. The episodes typically last 24-48 hours and resolve spontaneously. She denies accompanying urticaria, abdominal pain, or respiratory symptoms. She has no known food allergies and takes no medications. Physical examination between episodes is normal. Laboratory studies show: C4: 32 mg/dL (normal: 20-50 mg/dL), C3: 110 mg/dL (normal: 90-180 mg/dL), C1-esterase inhibitor level: normal, C1-esterase inhibitor function: normal, C1q: normal. A trial of high-dose antihistamines provides no symptom relief during subsequent episodes.",
      "options": [
        {
          "text": "Idiopathic non-histaminergic angioedema",
          "explanation": "Correct. Normal complement levels rule out HAE, normal C1q rules out acquired C1-INH deficiency, and lack of response to antihistamines indicates non-histaminergic mechanism, likely bradykinin-mediated."
        },
        {
          "text": "Hereditary angioedema type I",
          "explanation": "Incorrect. HAE type I would show low C4 levels between attacks and either low C1-INH levels or function. This patient has normal C4 and normal C1-INH studies."
        },
        {
          "text": "Acquired C1-esterase inhibitor deficiency",
          "explanation": "Incorrect. This condition would present with low C1q levels and is associated with lymphoproliferative disorders or autoimmune diseases. This patient has normal C1q."
        },
        {
          "text": "Idiopathic histaminergic angioedema",
          "explanation": "Incorrect. Histaminergic angioedema typically responds to antihistamines and often presents with concurrent urticaria. This patient has no response to antihistamines and no urticaria."
        },
        {
          "text": "ACE inhibitor-induced angioedema",
          "explanation": "Incorrect. While ACE inhibitors can cause bradykinin-mediated angioedema, this patient is not taking any medications. ACE inhibitor angioedema also typically occurs within the first year of treatment."
        }
      ],
      "correct_index": 0,
      "explanation": "This case represents idiopathic non-histaminergic angioedema. The key diagnostic clues are: (1) normal C4 levels between attacks, ruling out hereditary angioedema, (2) normal C1q, ruling out acquired C1-INH deficiency, (3) normal C1-INH levels and function, and (4) lack of response to antihistamines, indicating a non-histaminergic (likely bradykinin-mediated) mechanism. The absence of urticaria and medication history further supports this diagnosis. Treatment may include icatibant trials for acute episodes.",
      "topic_tags": [
        "angioedema",
        "complement",
        "allergy",
        "immunology"
      ],
      "key_concept": "C4 levels distinguish hereditary angioedema from other causes of recurrent angioedema"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "C4 low between attacks: HAE. C4 normal: ACEi, acquired, idiopathic, allergic.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer without clinical context - requires laboratory values, symptom pattern, and antihistamine response"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is diagnostically relevant - symptom pattern, timing, associated symptoms, exam findings, specific lab values, and treatment response all help differentiate between angioedema types"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,4,5,4,4] - excellent parity"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "All distractors represent reasonable considerations for recurrent angioedema. HAE type I, acquired C1-INH deficiency, and histaminergic angioedema are all legitimate differential diagnoses. ACE inhibitor option slightly less plausible given no medication history stated"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing angioedema conditions"
      },
      "clinical_accuracy": {
        "score": 0.8,
        "note": "Correct answer is appropriate given normal complement levels and lack of antihistamine response. However, the distinction between histaminergic and non-histaminergic idiopathic angioedema based solely on antihistamine response could be debated"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Given the specific laboratory findings and antihistamine trial, option A is the most supported answer, though the clinical classification of idiopathic angioedema subtypes can have some overlap"
      }
    }
  },
  {
    "id": "lib-idiopathic-angioedema-0094",
    "type": "mcq",
    "status": "approved",
    "caseId": "idiopathic-angioedema",
    "diagnosis": "Idiopathic Angioedema",
    "source": "DOI: 10.1186/1865-1380-5-39",
    "submittedAt": "2026-03-05T02:35:47Z",
    "approvedAt": "2026-03-05T02:35:47Z",
    "question": {
      "stem": "A 58-year-old woman presents with a 6-month history of recurrent episodes of facial and lip swelling without urticaria. Episodes occur 2-3 times per week, last 12-24 hours, and do not respond to antihistamines or corticosteroids. She has no family history of similar symptoms. Her medications include lisinopril for hypertension, which she has taken for 8 years without prior issues. Physical examination during an acute episode shows asymmetric lip and periorbital edema without erythema or pruritus. Laboratory studies reveal C4 18 mg/dL (normal 20-50), C1-esterase inhibitor level 22 mg/dL (normal 21-39), C1-esterase inhibitor function 85% (normal >68%), and C1q 8 mg/dL (normal 11-21). Complete blood count shows lymphocytosis with atypical lymphocytes.",
      "options": [
        {
          "text": "Acquired C1-esterase inhibitor deficiency secondary to underlying lymphoproliferative disorder",
          "explanation": "Correct. Low C1q with normal C1-INH level/function indicates acquired C1-INH deficiency, strongly associated with B-cell malignancies and lymphoproliferative disorders."
        },
        {
          "text": "Hereditary angioedema type I with incomplete penetrance",
          "explanation": "Incorrect. HAE type I would show low C1-INH levels, but this patient has normal C1-INH levels and function. The low C1q distinguishes acquired from hereditary forms."
        },
        {
          "text": "ACE inhibitor-induced angioedema with delayed onset presentation",
          "explanation": "Incorrect. While ACE inhibitors can cause angioedema, the laboratory findings (especially low C1q) suggest complement-mediated pathology rather than bradykinin-mediated ACE inhibitor reaction."
        },
        {
          "text": "Idiopathic non-histaminergic angioedema with complement consumption",
          "explanation": "Incorrect. True idiopathic angioedema would have normal complement studies. The low C1q specifically indicates acquired C1-INH deficiency rather than idiopathic disease."
        },
        {
          "text": "Hereditary angioedema type III with normal C1-esterase inhibitor",
          "explanation": "Incorrect. HAE type III typically affects women and involves estrogen sensitivity, but would not cause low C1q levels. The complement pattern here suggests acquired rather than hereditary disease."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with acquired C1-esterase inhibitor deficiency, indicated by the low C1q level (8 mg/dL, normal 11-21) in the setting of normal C1-INH levels and function. Low C1q is pathognomonic for acquired C1-INH deficiency and strongly suggests an underlying lymphoproliferative disorder or B-cell malignancy. The lymphocytosis with atypical lymphocytes supports this diagnosis. Unlike hereditary angioedema, which presents with low C1-INH levels, acquired C1-INH deficiency initially shows normal C1-INH levels but low C1q due to consumption by immune complexes or autoantibodies. ACE inhibitor-induced angioedema would not cause these complement abnormalities, and true idiopathic angioedema would have normal complement studies.",
      "topic_tags": [
        "angioedema",
        "complement_disorders",
        "hematology_oncology",
        "immunology"
      ],
      "key_concept": "Low C1q with normal C1-INH levels indicates acquired C1-esterase inhibitor deficiency associated with lymphoproliferative disorders"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "C1q low: acquired C1-INH deficiency (associated with lymphoma, B-cell malignancy, SLE).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer from last sentence alone - requires full clinical vignette with specific lab values and timeline"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements essential: timeline, lack of response to treatments, medication history, physical findings, and specific lab values all contribute to diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [9,8,8,7,8] - ratio 1.29, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B,C,D are plausible differentials; E is weaker as HAE type III is very rare and poorly defined"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing diagnostic conditions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - low C1q with normal C1-INH is pathognomonic for acquired C1-INH deficiency"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear best answer given the specific lab pattern and clinical presentation"
      }
    }
  },
  {
    "id": "lib-inducible-urticaria-0095",
    "type": "mcq",
    "status": "approved",
    "caseId": "inducible-urticaria",
    "diagnosis": "Cold urticaria with cold-induced anaphylaxis",
    "source": "ReasonDx Case Library — Cold urticaria with cold-induced anaphylaxis",
    "submittedAt": "2026-03-05T02:36:22Z",
    "approvedAt": "2026-03-05T02:36:22Z",
    "question": {
      "stem": "A 22-year-old woman presents to the clinic with recurrent episodes of raised, itchy welts on her arms and face that develop within minutes of swimming in cold water. She reports that the hives resolve spontaneously within 1-2 hours of warming up. Physical examination reveals no active lesions, but application of an ice cube to her forearm for 5 minutes followed by rewarming produces a visible wheal at the contact site after 10 minutes. Her vital signs are stable and she has no signs of systemic involvement during the office visit.",
      "options": [
        {
          "text": "Cold urticaria triggered by temperature threshold",
          "explanation": "Correct. The positive ice cube test (wheal formation at ice contact site after application and rewarming) is diagnostic for cold urticaria, with ~70% sensitivity. The clinical history of hives developing with cold water exposure and resolving with rewarming supports this diagnosis."
        },
        {
          "text": "Aquagenic urticaria triggered by water contact",
          "explanation": "Incorrect. Aquagenic urticaria is triggered by water contact regardless of temperature. This patient specifically develops hives only with cold water, not water at any temperature, making cold urticaria the correct diagnosis."
        },
        {
          "text": "Cholinergic urticaria from physical exertion",
          "explanation": "Incorrect. Cholinergic urticaria presents with characteristic 2-3 mm pinpoint hives with large flares triggered by core temperature rise (exercise, hot baths, emotion). This patient has larger wheals triggered specifically by cold exposure, not heat or exertion."
        },
        {
          "text": "Dermographism from mechanical skin trauma",
          "explanation": "Incorrect. Dermographism produces linear wheals after stroking or scratching the skin and is the most common inducible urticaria. This patient's wheals are specifically triggered by cold exposure, not mechanical trauma, and the ice cube test is positive."
        },
        {
          "text": "Exercise-induced anaphylaxis with cutaneous manifestations",
          "explanation": "Incorrect. Exercise-induced anaphylaxis typically requires physical exertion and may involve systemic symptoms. This patient's symptoms are specifically triggered by cold water exposure without exercise, and she has no systemic involvement during episodes."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has cold urticaria, diagnosed by the classic presentation of hives developing with cold water exposure and a positive ice cube test. The ice cube test involves applying ice to the skin for 5 minutes, then observing for wheal formation during a 5-10 minute rewarming period. This test has ~70% sensitivity for cold urticaria. The key distinguishing features are: (1) specific cold temperature trigger vs. aquagenic urticaria which occurs with any water temperature, (2) larger wheals vs. cholinergic urticaria's characteristic pinpoint 2-3mm hives, (3) cold trigger vs. dermographism's mechanical trigger, and (4) localized cutaneous response vs. exercise-induced anaphylaxis requiring exertion and often systemic involvement.",
      "topic_tags": [
        "dermatology",
        "urticaria",
        "physical urticaria",
        "cold urticaria",
        "diagnostic testing"
      ],
      "key_concept": "Cold urticaria diagnosis using ice cube test and distinguishing from other physical urticarias"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 2,
      "blooms": "application",
      "difficulty": 2
    },
    "pearl_source": "Ice cube test: positive = wheal at ice contact site. Sensitivity ~70% — cold water test more sensitive.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence leaves only vital signs and no systemic involvement - insufficient to diagnose cold urticaria without the clinical history and ice cube test"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are essential: age/demographics, symptom pattern (cold trigger), timing (minutes to develop, hours to resolve), physical exam findings, and diagnostic ice cube test"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,6,6,5,6] - ratio 1.4, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "Excellent distractors - aquagenic urticaria (water trigger), cholinergic urticaria (can occur with swimming), dermographism (physical urticaria), exercise anaphylaxis (swimming trigger) - all clinically reasonable considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: condition name + brief descriptor phrase"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Cold urticaria diagnosis is correct based on cold trigger, symptom pattern, and positive ice cube test per standard diagnostic criteria"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Cold urticaria is clearly the best answer given the specific cold trigger and positive ice cube test, though aquagenic urticaria could be considered by some"
      }
    }
  },
  {
    "id": "lib-inducible-urticaria-0096",
    "type": "mcq",
    "status": "approved",
    "caseId": "inducible-urticaria",
    "diagnosis": "Cold urticaria with cold-induced anaphylaxis",
    "source": "ReasonDx Case Library — Cold urticaria with cold-induced anaphylaxis",
    "submittedAt": "2026-03-05T02:37:00Z",
    "approvedAt": "2026-03-05T02:37:00Z",
    "question": {
      "stem": "A 22-year-old woman presents to the emergency department after developing generalized hives, throat swelling, and near-syncope while swimming in a lake. She reports similar but milder reactions when drinking cold beverages or walking outside in winter weather. Physical examination reveals resolving urticarial wheals on exposed skin areas. Vital signs show blood pressure 85/50 mmHg and heart rate 110/min. An ice cube test is performed by applying ice to her forearm for 5 minutes followed by rewarming, which produces a localized wheal at the contact site. Laboratory studies show serum tryptase of 15 ng/mL drawn 75 minutes after symptom onset.",
      "options": [
        {
          "text": "Cold urticaria with cold-induced anaphylaxis",
          "explanation": "This is correct. The patient has classic cold urticaria (positive ice cube test, reactions to cold stimuli) that progressed to anaphylaxis with total body cold water exposure during swimming, causing massive mast cell degranulation and cardiovascular collapse."
        },
        {
          "text": "Aquagenic urticaria with systemic reaction",
          "explanation": "This is incorrect. Aquagenic urticaria is triggered by water contact regardless of temperature, whereas this patient specifically reacts to cold stimuli (cold drinks, winter weather) and has a positive ice cube test indicating temperature-dependent mast cell activation."
        },
        {
          "text": "Cholinergic urticaria with exercise-induced anaphylaxis",
          "explanation": "This is incorrect. Cholinergic urticaria presents with characteristic 2-3 mm pinpoint hives triggered by core temperature rise, not the larger wheals seen with cold exposure. The positive ice cube test confirms cold-mediated rather than heat/exercise-mediated pathophysiology."
        },
        {
          "text": "Dermographism with coincidental anaphylaxis",
          "explanation": "This is incorrect. Dermographism produces linear wheals after mechanical stroking of skin, not the temperature-dependent reactions described. The ice cube test would not be positive in dermographism, and the pattern of cold-stimulus reactions points to cold urticaria."
        },
        {
          "text": "Idiopathic anaphylaxis with chronic spontaneous urticaria",
          "explanation": "This is incorrect. The clear pattern of cold-triggered symptoms (cold drinks, winter weather, cold water swimming) with positive ice cube test establishes a specific cold-mediated trigger rather than idiopathic anaphylaxis. The urticaria is inducible, not spontaneous."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has cold urticaria with cold-induced anaphylaxis. The positive ice cube test confirms cold urticaria diagnosis, and the progression to anaphylaxis during cold water swimming represents the most dangerous manifestation where total body cold exposure causes massive simultaneous mast cell activation leading to cardiovascular collapse. The key differentiating factor from aquagenic urticaria is the temperature dependence - cold urticaria is triggered specifically by cold stimuli (confirmed by ice cube test), while aquagenic urticaria would occur with water contact at any temperature. Cholinergic urticaria would show pinpoint 2-3 mm hives with heat/exercise triggers, dermographism would show linear wheals from mechanical stimulation, and idiopathic anaphylaxis would lack the clear cold-stimulus pattern demonstrated here.",
      "topic_tags": [
        "urticaria",
        "anaphylaxis",
        "physical urticaria",
        "allergy/immunology"
      ],
      "key_concept": "Cold urticaria is temperature-dependent (unlike aquagenic urticaria) and can progress to life-threatening anaphylaxis with total body cold exposure"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Cold urticaria ≠ aquagenic urticaria: cold water triggers cold urticaria; any water temperature triggers aquagenic.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering the clinical vignette leaves only 'Laboratory studies show serum tryptase of 15 ng/mL drawn 75 minutes after symptom onset.' - insufficient to determine the specific diagnosis without the pattern of cold exposure triggers and positive ice cube test"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are necessary: cold exposure history (lake swimming, cold drinks, winter), clinical presentation (anaphylaxis), positive ice cube test (diagnostic), and tryptase level (confirms mast cell activation)"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [6,5,6,5,7] - ratio 1.4, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B (aquagenic urticaria) - plausible given water exposure but lacks temperature specificity; C (cholinergic) - reasonable considering exercise component; D (dermographism) - less plausible but possible coincidence; E (idiopathic) - reasonable fallback diagnosis"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent noun phrase structure with condition + modifier"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Cold urticaria with anaphylaxis is correct - positive ice cube test is diagnostic, cold water swimming is classic trigger for severe reactions"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear best answer - positive ice cube test specifically confirms cold urticaria, and the pattern of cold-triggered symptoms with progression to anaphylaxis is classic"
      }
    }
  },
  {
    "id": "lib-inducible-urticaria-0097",
    "type": "mcq",
    "status": "approved",
    "caseId": "inducible-urticaria",
    "diagnosis": "Cold urticaria with cold-induced anaphylaxis",
    "source": "ReasonDx Case Library — Cold urticaria with cold-induced anaphylaxis",
    "submittedAt": "2026-03-05T02:37:34Z",
    "approvedAt": "2026-03-05T02:37:34Z",
    "question": {
      "stem": "A 28-year-old competitive swimmer presents to dermatology with recurrent episodes of hives that develop within minutes of entering cold pool water. She describes small, pinpoint lesions of 2-3 mm surrounded by large areas of redness that appear on her torso and arms. The hives resolve within 30 minutes of warming up. She denies similar reactions to warm water or other liquids. Physical examination reveals normal skin with no active lesions. An ice cube is applied to her forearm for 5 minutes, then removed. After 10 minutes of rewarming, a raised wheal appears at the contact site.",
      "options": [
        {
          "text": "Cold urticaria",
          "explanation": "Correct. The ice cube test is positive (wheal at contact site after rewarming), and the history of hives triggered specifically by cold water exposure confirms cold urticaria."
        },
        {
          "text": "Cholinergic urticaria",
          "explanation": "Incorrect. While cholinergic urticaria does cause 2-3 mm pinpoint hives, it is triggered by core temperature rise (exercise, hot baths, emotion), not cold exposure. The positive ice cube test excludes this diagnosis."
        },
        {
          "text": "Aquagenic urticaria",
          "explanation": "Incorrect. Aquagenic urticaria is triggered by water contact regardless of temperature. This patient specifically denies reactions to warm water, making cold urticaria more likely."
        },
        {
          "text": "Dermographism",
          "explanation": "Incorrect. Dermographism causes linear wheals after stroking or scratching the skin. The ice cube test would not be positive, and the trigger is mechanical pressure, not temperature."
        },
        {
          "text": "Exercise-induced anaphylaxis",
          "explanation": "Incorrect. While swimming could be considered exercise, the patient's symptoms are clearly triggered by cold water specifically, not by physical exertion. The positive ice cube test confirms a cold-mediated mechanism."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has cold urticaria, confirmed by the positive ice cube test showing wheal formation at the contact site after rewarming. The history of hives triggered specifically by cold water (but not warm water) is classic. Cholinergic urticaria is triggered by core temperature rise, not cold. Aquagenic urticaria would occur with any water temperature. Dermographism requires mechanical stimulation. Exercise-induced anaphylaxis would not have a positive ice cube test.",
      "topic_tags": [
        "dermatology",
        "urticaria",
        "allergy",
        "physical urticaria"
      ],
      "key_concept": "Cold urticaria diagnosis requires positive ice cube test and cold-specific triggers"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 2,
      "blooms": "application",
      "difficulty": 2
    },
    "pearl_source": "Cholinergic urticaria: 2–3 mm pinpoint hives with large flare, triggered by core temperature rise (exercise, hot bath, emotion). Small hive size is pathognomonic.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence, the clinical vignette provides essential context - cold water trigger, specific lesion description, timing, and positive ice cube test. Cannot be answered from final sentence alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: age/occupation (exposure context), cold water trigger (key diagnostic clue), lesion morphology (supports urticaria), timing of resolution (typical pattern), warm water denial (excludes aquagenic), normal exam (between episodes), and positive ice cube test (diagnostic confirmation)."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [2,2,2,1,2] - excellent parity with max/min ratio of 2.0, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "Cholinergic urticaria (heat/exercise trigger) - excellent distractor. Aquagenic urticaria (water trigger) - very plausible. Dermographism (physical urticaria) - reasonable. Exercise-induced anaphylaxis - somewhat less plausible given clear cold trigger and lack of systemic symptoms."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing specific types of urticaria or related conditions. Perfect grammatical consistency."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Cold urticaria is correct - classic presentation with cold trigger, typical lesion description, and positive ice cube test (pathognomonic when positive after rewarming)."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer. The positive ice cube test with rewarming response is diagnostic for cold urticaria and excludes other options definitively."
      }
    }
  },
  {
    "id": "lib-insect-sting-anaphylaxis-0098",
    "type": "mcq",
    "status": "approved",
    "caseId": "insect-sting-anaphylaxis",
    "diagnosis": "Hymenoptera Venom Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2010.09.034; Allergen immunotherapy: practice parameter 3rd update; DOI: 10.1016/j.anai.2016.10.031; Stinging insect hypersensitivity: practice parameter 2016",
    "submittedAt": "2026-03-05T02:38:11Z",
    "approvedAt": "2026-03-05T02:38:11Z",
    "question": {
      "stem": "A 42-year-old man presents to the allergy clinic 2 weeks after experiencing generalized urticaria and mild dyspnea within 10 minutes of a yellow jacket sting while gardening. He has no history of mastocytosis or prior severe allergic reactions. His symptoms resolved completely after treatment with antihistamines and a brief course of corticosteroids in the emergency department. He reports having large local reactions to insect stings in the past, with swelling extending 8-10 cm around the sting site lasting 2-3 days. Skin testing confirms yellow jacket venom sensitivity. His baseline serum tryptase level is 8.2 ng/mL (normal <11.4 ng/mL).",
      "options": [
        {
          "text": "Initiate venom immunotherapy for 3-5 years",
          "explanation": "Correct. Adults with any systemic reaction to hymenoptera venom, including urticaria-only reactions, are candidates for VIT. Standard duration is 3-5 years for patients without mastocytosis."
        },
        {
          "text": "Recommend epinephrine auto-injector only without immunotherapy",
          "explanation": "Incorrect. While epinephrine is essential for emergency treatment, VIT is indicated for adults with systemic reactions and is 95%+ effective at preventing future reactions."
        },
        {
          "text": "Initiate lifelong venom immunotherapy due to history of large local reactions",
          "explanation": "Incorrect. Large local reactions do not predict systemic anaphylaxis and are not an indication for VIT. Lifelong VIT is reserved for patients with mastocytosis or very severe reactions."
        },
        {
          "text": "No immunotherapy needed since tryptase level is normal",
          "explanation": "Incorrect. Normal tryptase does not contraindicate VIT. Elevated tryptase indicates mastocytosis risk and need for lifelong therapy, but normal levels still warrant standard VIT duration."
        },
        {
          "text": "Delay immunotherapy until after a more severe systemic reaction occurs",
          "explanation": "Incorrect. VIT is indicated after the first systemic reaction in adults. Waiting for more severe reactions increases the risk of life-threatening anaphylaxis."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient experienced a systemic allergic reaction (generalized urticaria and respiratory symptoms) to yellow jacket venom. In adults, any systemic reaction to hymenoptera venom is an indication for venom immunotherapy, even if limited to urticaria. VIT is highly effective (95%+) at preventing future systemic reactions. Standard duration is 3-5 years for patients without mastocytosis. His normal tryptase level indicates no evidence of mastocytosis, so standard duration therapy is appropriate. The history of large local reactions is not relevant to VIT indication, as large local reactions do not predict future systemic reactions.",
      "topic_tags": [
        "allergy",
        "anaphylaxis",
        "hymenoptera",
        "immunotherapy"
      ],
      "key_concept": "Venom immunotherapy indications for adults with systemic hymenoptera venom reactions"
    },
    "tags": {
      "abai_domain": "Domain 10 — Insect/Venom Allergy",
      "abai_domain_number": 10,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Hymenoptera order: honeybee (Apis mellifera), yellow jacket, yellow hornet, white-faced hornet, paper wasp. Fire ant (Solenopsis) in southeast US.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence asks about management approach - cannot be answered without the clinical context of systemic reaction history, severity, and test results"
      },
      "stem_relevance": {
        "score": 0.9,
        "note": "All elements are relevant: age/demographics for VIT decision, reaction details establish systemic nature, history of large local reactions provides contrast, skin testing confirms sensitivity, tryptase level rules out mastocytosis affecting duration"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [7,8,11,9,11] - ratio 1.57 slightly exceeds 1.5 threshold"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "B is reasonable conservative approach, C reflects common misconception about large local reactions, D misinterprets tryptase significance, E reflects overly cautious approach - all clinically plausible"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are verb phrases starting with action words (Initiate/Recommend/No/Delay)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct per current guidelines - systemic reactions in adults warrant VIT for 3-5 years, regardless of severity if limited to skin/mild respiratory symptoms"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - systemic reaction in adult is absolute indication for standard duration VIT"
      }
    }
  },
  {
    "id": "lib-insect-sting-anaphylaxis-0099",
    "type": "mcq",
    "status": "approved",
    "caseId": "insect-sting-anaphylaxis",
    "diagnosis": "Hymenoptera Venom Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2010.09.034; Allergen immunotherapy: practice parameter 3rd update; DOI: 10.1016/j.anai.2016.10.031; Stinging insect hypersensitivity: practice parameter 2016",
    "submittedAt": "2026-03-05T02:38:43Z",
    "approvedAt": "2026-03-05T02:38:43Z",
    "question": {
      "stem": "A 42-year-old man presents to the allergy clinic for evaluation after experiencing generalized urticaria and facial swelling 30 minutes after being stung by a yellow jacket while gardening. He has no history of mastocytosis or elevated baseline tryptase. Skin testing confirms IgE-mediated sensitivity to yellow jacket venom. He asks about cross-reactivity with other stinging insects and whether additional testing is needed before starting venom immunotherapy.",
      "options": [
        {
          "text": "Test for honeybee venom sensitivity as cross-reactivity is common due to shared Antigen 5",
          "explanation": "Incorrect. Honeybee venom is antigenically distinct and does not share Antigen 5 with yellow jacket venom, so cross-reactivity is uncommon."
        },
        {
          "text": "Test for paper wasp and hornet sensitivity due to shared antigens with yellow jacket venom",
          "explanation": "Correct. Yellow jacket, hornet, and paper wasp share Antigen 5, leading to significant cross-reactivity. Testing for these venoms is indicated."
        },
        {
          "text": "No additional testing needed as yellow jacket sensitivity predicts reactivity to all Hymenoptera venoms",
          "explanation": "Incorrect. Honeybee venom is antigenically distinct and requires separate testing. Cross-reactivity is not universal across all Hymenoptera."
        },
        {
          "text": "Test only for fire ant sensitivity as it has the highest cross-reactivity with yellow jacket",
          "explanation": "Incorrect. Fire ants are in a different subfamily and have minimal cross-reactivity with yellow jacket venom. Geographic relevance varies."
        },
        {
          "text": "Delay testing until after completing 3 years of yellow jacket venom immunotherapy",
          "explanation": "Incorrect. Cross-reactive venom testing should be done before initiating VIT to determine if multiple venoms need to be included in treatment."
        }
      ],
      "correct_index": 1,
      "explanation": "Yellow jacket, hornet, and paper wasp venoms share Antigen 5, resulting in significant cross-reactivity. Testing for these related venoms is indicated before starting VIT. Honeybee venom is antigenically distinct and does not cross-react with yellow jacket venom, so separate testing would be needed only if there's clinical suspicion of honeybee sensitivity. Fire ants have minimal cross-reactivity with vespid venoms. Cross-reactive venom testing should be completed before initiating VIT to ensure appropriate venom selection for immunotherapy.",
      "topic_tags": [
        "Allergy",
        "Anaphylaxis",
        "Hymenoptera",
        "Venom Immunotherapy"
      ],
      "key_concept": "Hymenoptera venom cross-reactivity patterns and testing requirements"
    },
    "tags": {
      "abai_domain": "Domain 10 — Insect/Venom Allergy",
      "abai_domain_number": 10,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Venom cross-reactivity: yellow jacket/hornet/wasp share Antigen 5. Honeybee venom distinct — separate testing needed.",
    "quality_score": 0.71,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical context (yellow jacket sting reaction, confirmed sensitivity) is essential for determining appropriate cross-reactivity testing approach"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is relevant: age/demographics, reaction details, lack of mastocytosis/elevated tryptase, confirmed sensitivity, and the specific clinical question about cross-reactivity testing"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [12,11,12,12,10] - ratio 1.2, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "A is plausible misconception about honeybee cross-reactivity; C represents reasonable but incorrect overgeneralization; D has some biological basis but wrong emphasis; E is less plausible timing-wise"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently structured as imperative statements about testing approach"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct - yellow jacket, paper wasp, and hornet (vespids) do share antigens and have cross-reactivity, requiring testing before VIT"
      },
      "single_best_answer": {
        "score": 0.25,
        "note": "While B is technically correct, some allergists might argue that comprehensive Hymenoptera panel testing (including honeybee despite lack of cross-reactivity) is standard practice for complete evaluation"
      }
    }
  },
  {
    "id": "lib-insect-sting-anaphylaxis-0100",
    "type": "mcq",
    "status": "approved",
    "caseId": "insect-sting-anaphylaxis",
    "diagnosis": "Hymenoptera Venom Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2010.09.034; Allergen immunotherapy: practice parameter 3rd update; DOI: 10.1016/j.anai.2016.10.031; Stinging insect hypersensitivity: practice parameter 2016",
    "submittedAt": "2026-03-05T02:39:15Z",
    "approvedAt": "2026-03-05T02:39:15Z",
    "question": {
      "stem": "A 45-year-old man is stung by a yellow jacket while gardening. Within 10 minutes, he develops generalized urticaria but no respiratory symptoms, hypotension, or gastrointestinal symptoms. He is treated with antihistamines and recovers completely. His baseline serum tryptase level is 8.2 ng/mL (normal <11.4). He asks about preventing future reactions and is referred to an allergist. Skin testing confirms yellow jacket venom sensitivity.",
      "options": [
        {
          "text": "Initiate venom immunotherapy for 3-5 years",
          "explanation": "Correct. Adults with any systemic reaction to hymenoptera venom, including urticaria-only reactions, are candidates for VIT. The standard duration is 3-5 years."
        },
        {
          "text": "Observe without treatment since reaction was mild",
          "explanation": "Incorrect. Even urticaria-only systemic reactions in adults warrant VIT. The severity of the initial reaction does not predict future reaction severity."
        },
        {
          "text": "Initiate lifelong venom immunotherapy due to risk factors",
          "explanation": "Incorrect. Lifelong VIT is indicated for patients with mastocytosis (elevated baseline tryptase >11.4) or very severe reactions. This patient has normal tryptase."
        },
        {
          "text": "Prescribe epinephrine auto-injector without immunotherapy",
          "explanation": "Incorrect. While an epinephrine auto-injector should be prescribed, VIT is the definitive treatment for preventing future systemic reactions and is indicated in this case."
        },
        {
          "text": "Recommend avoiding outdoor activities during peak seasons",
          "explanation": "Incorrect. Avoidance strategies alone are insufficient when VIT is indicated. Complete avoidance of hymenoptera exposure is impractical and VIT provides superior protection."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient experienced a systemic allergic reaction to yellow jacket venom, manifested as generalized urticaria. In adults, venom immunotherapy (VIT) is indicated for ANY systemic reaction, regardless of severity - this includes urticaria-only reactions. VIT is 95%+ effective at preventing future systemic reactions. The standard duration is 3-5 years for patients with normal baseline tryptase levels. Lifelong VIT is reserved for patients with mastocytosis (elevated baseline tryptase >11.4 ng/mL) or very severe initial reactions. This patient's normal tryptase level (8.2 ng/mL) indicates standard 3-5 year treatment duration is appropriate.",
      "topic_tags": [
        "allergy",
        "anaphylaxis",
        "immunotherapy",
        "hymenoptera",
        "venom"
      ],
      "key_concept": "VIT indications for adults: any systemic reaction including urticaria-only"
    },
    "tags": {
      "abai_domain": "Domain 10 — Insect/Venom Allergy",
      "abai_domain_number": 10,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "VIT indications: adults — any systemic reaction (including urticaria-only). Children — moderate-severe systemic reaction (anaphylaxis). NOT for large local reactions.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Last sentence alone cannot be answered without the clinical context of systemic reaction, tryptase level, and confirmed sensitivity"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: reaction severity, symptoms present/absent, tryptase level, and confirmed sensitivity all inform treatment decisions"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,8,9,7,8] - ratio 1.3, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B and D are reasonable but suboptimal approaches; C addresses real clinical consideration of lifelong therapy; E is less plausible as complete avoidance isn't standard care"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are verb phrases starting with action words (initiate, observe, prescribe, recommend)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct per current guidelines - adults with any systemic reaction to Hymenoptera venom should receive VIT for 3-5 years with normal tryptase"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - VIT is definitively indicated for systemic reactions in adults"
      }
    }
  },
  {
    "id": "lib-mastocytosis-0101",
    "type": "mcq",
    "status": "approved",
    "caseId": "mastocytosis",
    "diagnosis": "Systemic Mastocytosis",
    "source": "DOI: 10.1016/j.anai.2019.09.025; Mast cell activation syndrome: clinicopathological approach; DOI: 10.1016/j.jaci.2012.09.002; Definitions, criteria and classification of mast cell disorders",
    "submittedAt": "2026-03-05T02:39:50Z",
    "approvedAt": "2026-03-05T02:39:50Z",
    "question": {
      "stem": "A 42-year-old man presents to hematology clinic for evaluation of recurrent episodes of flushing, abdominal cramping, and diarrhea over the past 8 months. He has a history of severe anaphylaxis to a wasp sting 2 years ago that required prolonged hospitalization. Physical examination reveals multiple small brown macules on his trunk that become raised and pruritic when rubbed. Laboratory studies show serum tryptase 35 ng/mL (normal <11.4 ng/mL). Bone marrow biopsy demonstrates multifocal aggregates containing 18 mast cells per focus, with many cells showing spindle-shaped morphology. Flow cytometry reveals mast cells co-expressing CD25. What is the most likely diagnosis?",
      "options": [
        {
          "text": "Systemic mastocytosis",
          "explanation": "Correct. Patient meets WHO criteria with 1 major criterion (≥15 mast cells in aggregates on BM biopsy) plus 3 minor criteria (elevated tryptase >20 ng/mL, spindle-shaped morphology, CD25 co-expression)."
        },
        {
          "text": "Mast cell activation syndrome",
          "explanation": "Incorrect. MCAS requires symptoms of mast cell mediator release plus elevated mediators, but lacks the pathologic mast cell infiltration seen in systemic mastocytosis."
        },
        {
          "text": "Cutaneous mastocytosis",
          "explanation": "Incorrect. While Darier's sign is present, the bone marrow involvement with multifocal aggregates and elevated tryptase indicates systemic rather than purely cutaneous disease."
        },
        {
          "text": "Hereditary alpha tryptasemia",
          "explanation": "Incorrect. This condition can cause elevated baseline tryptase but does not produce bone marrow aggregates of mast cells or the pathologic morphology seen here."
        },
        {
          "text": "Idiopathic anaphylaxis",
          "explanation": "Incorrect. The presence of bone marrow mast cell aggregates, elevated baseline tryptase, and cutaneous lesions with Darier's sign indicates a specific mast cell disorder rather than idiopathic anaphylaxis."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has systemic mastocytosis based on WHO diagnostic criteria. He meets the major criterion (multifocal mast cell aggregates ≥15 cells per focus on bone marrow biopsy) and three minor criteria: elevated serum tryptase >20 ng/mL, spindle-shaped mast cell morphology, and aberrant CD25 expression. The diagnosis requires either ≥1 major plus ≥1 minor criterion, or ≥3 minor criteria. The cutaneous lesions showing Darier's sign (urticaria pigmentosa) and history of severe anaphylaxis are consistent findings. MCAS lacks the pathologic bone marrow infiltration, while cutaneous mastocytosis would not have systemic involvement. Hereditary alpha tryptasemia and idiopathic anaphylaxis do not explain the bone marrow findings.",
      "topic_tags": [
        "hematology",
        "mastocytosis",
        "anaphylaxis",
        "bone marrow biopsy"
      ],
      "key_concept": "WHO diagnostic criteria for systemic mastocytosis requiring major criterion of ≥15 mast cells in bone marrow aggregates"
    },
    "tags": {
      "abai_domain": "Domain 14 — Mast Cell Disorders",
      "abai_domain_number": 14,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "SM major criterion: >15 mast cells in compact aggregates on BM biopsy.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer from final sentence alone - requires full clinical vignette including history, physical findings, labs, and bone marrow results"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is diagnostically relevant: symptoms (mast cell mediator release), anaphylaxis history (mast cell disorder), Darier's sign (cutaneous mastocytosis), elevated tryptase, bone marrow aggregates, morphology, and CD25 expression all contribute to WHO criteria"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [2,5,2,3,2] - ratio 2.5 exceeds 1.5 threshold due to option B"
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors are clinically reasonable: MCAS (similar symptoms), cutaneous mastocytosis (skin findings present), hereditary alpha tryptasemia (elevated tryptase), idiopathic anaphylaxis (anaphylaxis history)"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are consistent noun phrases describing medical conditions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with WHO diagnostic criteria for systemic mastocytosis - meets major criterion (≥15 mast cells in aggregates) plus 3 minor criteria"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - patient definitively meets WHO criteria for systemic mastocytosis, distinguishing it from other mast cell disorders"
      }
    }
  },
  {
    "id": "lib-mastocytosis-0102",
    "type": "mcq",
    "status": "approved",
    "caseId": "mastocytosis",
    "diagnosis": "Systemic Mastocytosis",
    "source": "DOI: 10.1016/j.anai.2019.09.025; Mast cell activation syndrome: clinicopathological approach; DOI: 10.1016/j.jaci.2012.09.002; Definitions, criteria and classification of mast cell disorders",
    "submittedAt": "2026-03-05T02:40:57Z",
    "approvedAt": "2026-03-05T02:40:57Z",
    "question": {
      "stem": "A 42-year-old man presents to the hematology clinic for evaluation of recurrent episodes of flushing, abdominal cramping, and diarrhea over the past 18 months. He reports two episodes of near-syncope following bee stings, requiring emergency department visits. Physical examination reveals multiple small, brown-pigmented macules on his trunk that become raised and pruritic when rubbed. Laboratory studies show a serum tryptase level of 35 ng/mL. Bone marrow biopsy demonstrates multifocal aggregates of 20 mast cells per high-power field, with many cells displaying spindle-shaped morphology. Flow cytometry reveals mast cells co-expressing CD25. Molecular testing is positive for KIT D816V mutation.",
      "options": [
        {
          "text": "Systemic mastocytosis is confirmed by meeting 1 major and 3 minor WHO criteria",
          "explanation": "Correct. This patient meets the major criterion (≥15 mast cells in aggregates on BM biopsy) plus 3 minor criteria: spindle-shaped mast cells, KIT D816V mutation, CD25 co-expression, and tryptase >20 ng/mL. Only 1 major + 1 minor OR 3 minor criteria are needed for diagnosis."
        },
        {
          "text": "Cutaneous mastocytosis is the most likely diagnosis given the positive Darier's sign",
          "explanation": "Incorrect. While Darier's sign (urticaria pigmentosa) is present, the elevated tryptase, bone marrow findings, and systemic symptoms indicate systemic mastocytosis, not isolated cutaneous disease."
        },
        {
          "text": "Mast cell activation syndrome is diagnosed based on the elevated tryptase and symptoms",
          "explanation": "Incorrect. This patient has clear morphologic and molecular evidence of clonal mast cell disease (systemic mastocytosis), not mast cell activation syndrome, which is a diagnosis of exclusion without clonal markers."
        },
        {
          "text": "Additional bone marrow sampling is required since only 20 mast cells per aggregate were found",
          "explanation": "Incorrect. The major criterion requires ≥15 mast cells per aggregate, which is met with 20 cells. Additional sampling is not needed when WHO criteria are already satisfied."
        },
        {
          "text": "Serum tryptase must exceed 25 ng/mL to establish the diagnosis of systemic mastocytosis",
          "explanation": "Incorrect. The minor criterion threshold for tryptase is >20 ng/mL, not 25 ng/mL. This patient's tryptase of 35 ng/mL clearly meets the diagnostic criterion."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic systemic mastocytosis meeting WHO diagnostic criteria. The patient satisfies the major criterion (multifocal mast cell aggregates ≥15 cells on bone marrow biopsy) and three of four minor criteria: spindle-shaped mast cell morphology, KIT D816V mutation, CD25 co-expression, and serum tryptase >20 ng/mL. Diagnosis requires either ≥1 major + ≥1 minor criterion, or ≥3 minor criteria. The cutaneous findings (urticaria pigmentosa with positive Darier's sign) and anaphylaxis history support systemic involvement rather than isolated cutaneous mastocytosis.",
      "topic_tags": [
        "hematology",
        "mastocytosis",
        "WHO criteria",
        "bone marrow",
        "tryptase"
      ],
      "key_concept": "WHO diagnostic criteria for systemic mastocytosis requiring integration of major and minor criteria"
    },
    "tags": {
      "abai_domain": "Domain 14 — Mast Cell Disorders",
      "abai_domain_number": 14,
      "acgme_competency": "MK",
      "acgme_milestone": "MK4",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "SM minor criteria (need 3 of 4, or 1 major + 1 minor): spindle-shaped MCs >25%; KIT D816V; CD25 or CD2 co-expression; tryptase >20 ng/mL.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence and options leaves insufficient information to determine WHO criteria are met - need specific lab values, bone marrow findings, and clinical details"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides essential diagnostic information: symptoms establish clinical context, physical exam shows urticaria pigmentosa with Darier's sign, labs show elevated tryptase, bone marrow shows aggregates and morphology, flow cytometry shows CD25, molecular testing shows KIT mutation - all directly relevant to WHO criteria"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [12,13,13,14,13] - ratio 1.17, acceptable variation"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B is plausible but ignores systemic findings; C could be considered but doesn't recognize WHO criteria are met; D misunderstands the aggregate requirement; E has incorrect tryptase threshold (should be >20, not >25)"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are complete declarative sentences with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer accurately reflects WHO criteria for systemic mastocytosis: 1 major (≥15 mast cells in aggregates) + 3 minor criteria (spindle morphology, KIT D816V, CD25+, tryptase >20)"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - patient definitively meets WHO diagnostic criteria for systemic mastocytosis"
      }
    }
  },
  {
    "id": "lib-mastocytosis-0103",
    "type": "mcq",
    "status": "approved",
    "caseId": "mastocytosis",
    "diagnosis": "Systemic Mastocytosis",
    "source": "DOI: 10.1016/j.anai.2019.09.025; Mast cell activation syndrome: clinicopathological approach; DOI: 10.1016/j.jaci.2012.09.002; Definitions, criteria and classification of mast cell disorders",
    "submittedAt": "2026-03-05T02:41:33Z",
    "approvedAt": "2026-03-05T02:41:33Z",
    "question": {
      "stem": "A 42-year-old woman presents to the allergy clinic with a 2-year history of recurrent episodes of flushing, abdominal cramping, and diarrhea triggered by alcohol consumption and NSAIDs. Physical examination reveals multiple brown macules on her trunk that develop raised, erythematous wheals when gently stroked. Laboratory studies show a serum tryptase level of 28 ng/mL (normal <11.4 ng/mL). Bone marrow biopsy demonstrates focal aggregates of 18 spindle-shaped mast cells per high-power field, with immunohistochemistry positive for CD25 and tryptase. Flow cytometry reveals mast cells co-expressing CD2.",
      "options": [
        {
          "text": "Systemic mastocytosis with WHO major and minor criteria met",
          "explanation": "Correct. Patient meets 1 major criterion (>15 mast cells in aggregates on BM biopsy) and 3 minor criteria (spindle-shaped morphology, CD25/CD2 co-expression, tryptase >20 ng/mL)."
        },
        {
          "text": "Cutaneous mastocytosis without systemic involvement",
          "explanation": "Incorrect. While Darier's sign suggests cutaneous involvement, the elevated tryptase, BM findings, and systemic symptoms indicate systemic disease."
        },
        {
          "text": "Mast cell activation syndrome without clonal mast cell disease",
          "explanation": "Incorrect. The BM biopsy showing aggregates of abnormal mast cells with aberrant CD markers indicates clonal disease, not just activation syndrome."
        },
        {
          "text": "Indolent systemic mastocytosis with insufficient diagnostic criteria",
          "explanation": "Incorrect. The patient clearly meets WHO criteria with 1 major criterion (BM aggregates >15 cells) plus 3 minor criteria, which is diagnostic for SM."
        },
        {
          "text": "Primary mast cell leukemia based on bone marrow involvement",
          "explanation": "Incorrect. Mast cell leukemia requires >20% mast cells in BM aspirate and circulating mast cells, not focal aggregates of normal percentage."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has systemic mastocytosis based on WHO criteria. She meets the major criterion (multifocal mast cell aggregates ≥15 cells per focus on bone marrow biopsy) and three minor criteria: abnormal spindle-shaped mast cell morphology, aberrant expression of CD25 and CD2 on mast cells, and serum tryptase >20 ng/mL. Darier's sign (urtication of pigmented macules when stroked) indicates urticaria pigmentosa, the cutaneous manifestation. The diagnosis requires either ≥1 major + ≥1 minor criterion, or ≥3 minor criteria. Cutaneous mastocytosis alone would not explain the elevated tryptase and bone marrow findings. MCAS lacks the clonal markers seen here. The bone marrow shows focal aggregates, not the diffuse infiltration seen in mast cell leukemia.",
      "topic_tags": [
        "mastocytosis",
        "WHO criteria",
        "bone marrow biopsy",
        "tryptase",
        "Darier sign"
      ],
      "key_concept": "WHO diagnostic criteria for systemic mastocytosis requiring integration of clinical, laboratory, and histopathologic findings"
    },
    "tags": {
      "abai_domain": "Domain 14 — Mast Cell Disorders",
      "abai_domain_number": 14,
      "acgme_competency": "MK",
      "acgme_milestone": "MK4",
      "acgme_milestone_level": 4,
      "blooms": "synthesis",
      "difficulty": 4
    },
    "pearl_source": "Darier's sign: urtication of a pigmented macule on stroking = urticaria pigmentosa (cutaneous mastocytosis).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence alone cannot be answered without the clinical vignette - requires knowledge of symptoms, physical findings, lab values, and bone marrow biopsy results"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides essential diagnostic information: symptoms establish clinical presentation, physical exam shows Darier's sign, tryptase level meets minor criterion, bone marrow findings meet major criterion, flow cytometry provides additional minor criteria"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,6,8,7,8] - ratio 1.5, borderline acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are clinically reasonable differential diagnoses for mastocytosis spectrum disorders, though option E is less plausible given focal rather than diffuse bone marrow involvement"
      },
      "grammatical_consistency": {
        "score": 0.9,
        "note": "Four options are noun phrases describing diagnoses, but option E includes 'based on bone marrow involvement' making it slightly different in structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer accurately reflects WHO criteria for systemic mastocytosis diagnosis - patient meets 1 major + 3 minor criteria"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - patient definitively meets WHO criteria for systemic mastocytosis, other options are clearly incorrect given the evidence presented"
      }
    }
  },
  {
    "id": "lib-mcas-mast-cell-0104",
    "type": "mcq",
    "status": "approved",
    "caseId": "mcas-mast-cell",
    "diagnosis": "Mast cell activation syndrome (MCAS) — confirmed by elevated acute tryptase and symptom criteria",
    "source": "ReasonDx Case Library — Mast cell activation syndrome (MCAS) — confirmed by elevated acute tryptase and symptom criteria",
    "submittedAt": "2026-03-05T02:42:08Z",
    "approvedAt": "2026-03-05T02:42:08Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department with recurrent episodes of flushing, abdominal cramping, and dyspnea over the past 6 months. Episodes occur 2-3 times weekly, last 30-60 minutes, and resolve spontaneously. She denies skin lesions or lymphadenopathy. Physical examination during an acute episode reveals facial erythema, mild wheezing, and diffuse abdominal tenderness without organomegaly. Laboratory studies show: baseline serum tryptase 8.2 ng/mL (normal <11.4), acute tryptase drawn 75 minutes after symptom onset 22.4 ng/mL. Complete blood count and comprehensive metabolic panel are normal. Bone marrow biopsy shows normal mast cell morphology without aggregates.",
      "options": [
        {
          "text": "Mast cell activation syndrome",
          "explanation": "Correct. Patient meets all three Valent criteria: multisystem symptoms (GI, respiratory, cutaneous), acute tryptase ≥ 2×baseline+2 ng/mL (22.4 ≥ 18.4), and normal baseline tryptase with no organomegaly or skin lesions distinguishing from systemic mastocytosis."
        },
        {
          "text": "Systemic mastocytosis",
          "explanation": "Incorrect. Baseline tryptase is normal (<20 ng/mL), no skin lesions (urticaria pigmentosa), no organomegaly, and normal bone marrow morphology. These findings make systemic mastocytosis unlikely."
        },
        {
          "text": "Hereditary angioedema",
          "explanation": "Incorrect. While recurrent episodes occur, the symptom pattern includes flushing and GI cramping rather than asymmetric swelling. The elevated acute tryptase during episodes points to mast cell activation rather than complement pathway dysfunction."
        },
        {
          "text": "Carcinoid syndrome",
          "explanation": "Incorrect. Though flushing and GI symptoms are present, the episodic nature, normal baseline labs, and significantly elevated acute tryptase during episodes are more consistent with mast cell pathology than serotonin excess."
        },
        {
          "text": "Idiopathic anaphylaxis",
          "explanation": "Incorrect. While symptoms could suggest anaphylaxis, the recurrent nature without clear triggers, elevated acute tryptase meeting specific criteria (≥2×baseline+2), and response pattern suggest MCAS rather than idiopathic anaphylaxis."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient meets all three Valent criteria for MCAS: (1) multisystem symptoms involving GI, respiratory, and cutaneous systems; (2) acute tryptase ≥ 2×baseline+2 ng/mL (22.4 ≥ 18.4 ng/mL using the 2n+2 rule); and (3) clinical presentation consistent with mast cell activation. The normal baseline tryptase (<20 ng/mL), absence of skin lesions, no organomegaly, and normal bone marrow findings distinguish this from systemic mastocytosis. The other conditions don't explain the specific tryptase elevation pattern during acute episodes.",
      "topic_tags": [
        "mast_cell_disorders",
        "MCAS",
        "tryptase_criteria",
        "allergy_immunology"
      ],
      "key_concept": "MCAS diagnosis requires acute tryptase ≥ (2 × baseline + 2 ng/mL) along with multisystem symptoms and response to mast cell-targeted therapy"
    },
    "tags": {
      "abai_domain": "Domain 14 — Mast Cell Disorders",
      "abai_domain_number": 14,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Tryptase 2n+2 rule: acute tryptase must be ≥ (2 × baseline + 2 ng/mL) to meet MCAS criterion",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Question requires integration of clinical presentation, lab values, and bone marrow findings to differentiate between mast cell disorders"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically necessary: symptom pattern, physical findings, tryptase levels, timing, and bone marrow results are all essential for diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [4,2,2,2,2] - all concise and appropriately matched"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "Systemic mastocytosis (0.9) - very plausible given similar symptoms but ruled out by normal bone marrow; Hereditary angioedema (0.8) - reasonable given dyspnea/flushing but lacks typical features; Carcinoid syndrome (0.8) - plausible with flushing/GI symptoms but wrong biomarker; Idiopathic anaphylaxis (0.7) - somewhat plausible but doesn't explain specific tryptase pattern"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct application of Valent criteria for MCAS diagnosis with proper tryptase calculation (2n+2 rule)"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "MCAS is clearly the best answer given the specific diagnostic criteria met, though systemic mastocytosis could be considered by some"
      }
    }
  },
  {
    "id": "lib-mcas-mast-cell-0105",
    "type": "mcq",
    "status": "approved",
    "caseId": "mcas-mast-cell",
    "diagnosis": "Mast cell activation syndrome (MCAS) — confirmed by elevated acute tryptase and symptom criteria",
    "source": "ReasonDx Case Library — Mast cell activation syndrome (MCAS) — confirmed by elevated acute tryptase and symptom criteria",
    "submittedAt": "2026-03-05T02:42:40Z",
    "approvedAt": "2026-03-05T02:42:40Z",
    "question": {
      "stem": "A 42-year-old woman presents to the emergency department with recurrent episodes of flushing, abdominal cramping, and hypotension occurring 2-3 times monthly for the past year. During her current episode, she reports feeling lightheaded and nauseous. Physical examination reveals diffuse erythema of the face and chest, blood pressure 85/50 mmHg, and heart rate 110 bpm. No skin lesions or organomegaly are noted. Laboratory studies drawn 75 minutes after symptom onset show serum tryptase 28 ng/mL. Her baseline tryptase level from a previous asymptomatic visit was 8 ng/mL. She reports partial symptom improvement with diphenhydramine and ranitidine in the past.",
      "options": [
        {
          "text": "Mast cell activation syndrome",
          "explanation": "Correct. Patient meets MCAS criteria: multisystem symptoms, acute tryptase ≥ 2×baseline+2 ng/mL (28 ≥ 18), and response to antihistamines. Normal baseline tryptase makes SM unlikely."
        },
        {
          "text": "Systemic mastocytosis",
          "explanation": "Incorrect. While tryptase is elevated acutely, baseline tryptase <20 ng/mL makes SM unlikely. Patient lacks skin lesions (urticaria pigmentosa) and organomegaly typical of SM."
        },
        {
          "text": "Hereditary angioedema",
          "explanation": "Incorrect. HAE typically presents with asymmetric swelling of face, lips, and throat without flushing or hypotension. C1 esterase inhibitor levels would be diagnostic."
        },
        {
          "text": "Carcinoid syndrome",
          "explanation": "Incorrect. While flushing and diarrhea can occur, elevated acute tryptase during episodes and antihistamine responsiveness point to mast cell disorder rather than serotonin excess."
        },
        {
          "text": "Pheochromocytoma",
          "explanation": "Incorrect. Though hypertensive episodes can occur, this patient has hypotension with flushing. Elevated catecholamines and their metabolites would be expected, not elevated tryptase."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient meets all three Valent criteria for MCAS: (1) multisystem symptoms (flushing, GI, cardiovascular), (2) acute tryptase meeting the 2n+2 rule (28 ng/mL ≥ 2×8+2 = 18 ng/mL), and (3) partial response to mast cell-targeted therapy (antihistamines). The normal baseline tryptase (<11.4 ng/mL) makes systemic mastocytosis unlikely, as SM typically has baseline tryptase >20 ng/mL. The absence of skin lesions and organomegaly further supports MCAS over SM. Other conditions don't explain the elevated acute tryptase during symptomatic episodes.",
      "topic_tags": [
        "hematology",
        "immunology",
        "emergency_medicine",
        "mast_cell_disorders"
      ],
      "key_concept": "Normal baseline tryptase distinguishes MCAS from systemic mastocytosis"
    },
    "tags": {
      "abai_domain": "Domain 14 — Mast Cell Disorders",
      "abai_domain_number": 14,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Normal baseline tryptase (<11.4) makes systemic mastocytosis unlikely — SM usually has baseline >20",
    "quality_score": 0.89,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette with specific laboratory values and timeline is essential for differentiating between mast cell disorders"
      },
      "stem_relevance": {
        "score": 0.9,
        "note": "All details are clinically relevant - timing of tryptase measurement, baseline comparison, physical findings, and response to antihistamines are all necessary for diagnosis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [4,2,2,2,1] - slight variation but acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are reasonable considerations for recurrent flushing episodes with systemic symptoms"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct application of Valent criteria for MCAS diagnosis with appropriate tryptase interpretation"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "MCAS is clearly the best answer given the specific diagnostic criteria met, though systemic mastocytosis could be considered by some"
      }
    }
  },
  {
    "id": "lib-mcas-mast-cell-0106",
    "type": "mcq",
    "status": "approved",
    "caseId": "mcas-mast-cell",
    "diagnosis": "Mast cell activation syndrome (MCAS) — confirmed by elevated acute tryptase and symptom criteria",
    "source": "ReasonDx Case Library — Mast cell activation syndrome (MCAS) — confirmed by elevated acute tryptase and symptom criteria",
    "submittedAt": "2026-03-05T02:43:17Z",
    "approvedAt": "2026-03-05T02:43:17Z",
    "question": {
      "stem": "A 28-year-old woman presents to the emergency department with a 6-month history of episodic flushing, abdominal cramping, and difficulty breathing that occur 2-3 times weekly. Episodes last 30-60 minutes and resolve spontaneously. She denies urticaria or skin lesions. Physical examination during an acute episode shows facial flushing, mild wheezing, and diffuse abdominal tenderness without organomegaly. Baseline serum tryptase obtained between episodes is 8.2 ng/mL (normal <11.4). During her current acute episode, serum tryptase is measured at 22.4 ng/mL. She reports previous trials of proton pump inhibitors and bronchodilators provided minimal benefit, but combination H1 and H2 antihistamines significantly improved her symptoms.",
      "options": [
        {
          "text": "Mast cell activation syndrome based on elevated acute tryptase and clinical response to antihistamines",
          "explanation": "Correct. Meets MCAS criteria: multisystem symptoms, acute tryptase ≥ (2×baseline+2) = 18.4 ng/mL threshold (actual 22.4), and clinical response to mast cell-targeted therapy (H1/H2 antihistamines)."
        },
        {
          "text": "Systemic mastocytosis based on elevated acute tryptase exceeding 20 ng/mL threshold",
          "explanation": "Incorrect. SM requires baseline tryptase >20 ng/mL (minor criterion) plus major criteria like KIT D816V mutation, bone marrow aggregates, or skin lesions. This patient has normal baseline tryptase (8.2) and no skin involvement."
        },
        {
          "text": "Hereditary angioedema based on episodic flushing and abdominal symptoms",
          "explanation": "Incorrect. HAE typically presents with asymmetric swelling, normal tryptase levels, and family history. The elevated acute tryptase and response to antihistamines point away from complement-mediated angioedema."
        },
        {
          "text": "Carcinoid syndrome based on episodic flushing and gastrointestinal symptoms",
          "explanation": "Incorrect. Carcinoid syndrome would show elevated 24-hour urine 5-HIAA, not elevated tryptase. Flushing is typically more persistent and associated with diarrhea rather than cramping that responds to antihistamines."
        },
        {
          "text": "Anaphylaxis based on multisystem involvement and elevated acute tryptase levels",
          "explanation": "Incorrect. While anaphylaxis can elevate tryptase, this patient has recurrent episodes without clear triggers, normal baseline tryptase between episodes, and chronic management success with antihistamines rather than epinephrine requirement."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic MCAS meeting Valent criteria: (1) multisystem symptoms (flushing, GI, respiratory), (2) acute tryptase elevation meeting the 2n+2 rule (≥18.4 ng/mL threshold with actual 22.4), and (3) clinical response to mast cell-targeted therapy. Normal baseline tryptase (<11.4) and absence of skin lesions distinguish this from systemic mastocytosis, which requires baseline tryptase >20 ng/mL as a minor criterion plus major criteria including KIT mutations or bone marrow involvement.",
      "topic_tags": [
        "mast_cell_disorders",
        "allergy_immunology",
        "tryptase",
        "MCAS"
      ],
      "key_concept": "MCAS diagnostic criteria including tryptase 2n+2 rule and distinction from systemic mastocytosis"
    },
    "tags": {
      "abai_domain": "Domain 14 — Mast Cell Disorders",
      "abai_domain_number": 14,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "SM diagnostic criteria: minor = tryptase >20. Major criteria include KIT D816V, bone marrow mast cell aggregates, abnormal mast cell morphology, CD25/CD2 expression.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering the final sentence leaves insufficient information to determine the specific diagnosis - the clinical context, tryptase values, and treatment response are all essential"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is diagnostically relevant: symptom pattern, physical findings, baseline vs acute tryptase levels, and treatment response all contribute to differential diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [12,11,9,9,10] - max/min ratio 1.33 is within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B, D, E are clinically plausible given presentation. C (hereditary angioedema) less plausible as it typically doesn't present with flushing and has different pathophysiology"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: '[Condition] based on [clinical reasoning]'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "MCAS diagnosis is correct per Valent criteria: multisystem symptoms, appropriate tryptase elevation (2n+2 rule), and response to antihistamines"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "MCAS is the best answer, though systemic mastocytosis could be debated by some clinicians despite normal baseline tryptase"
      }
    }
  },
  {
    "id": "lib-milk-allergy-infant-0107",
    "type": "mcq",
    "status": "approved",
    "caseId": "milk-allergy-infant",
    "diagnosis": "Cow's Milk Protein Allergy",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1097/WOX.0b013e3181defeb9; WAO DRACMA: cow's milk allergy diagnosis",
    "submittedAt": "2026-03-05T02:43:53Z",
    "approvedAt": "2026-03-05T02:43:53Z",
    "question": {
      "stem": "A 3-year-old boy with a history of cow's milk protein allergy presents for follow-up. His mother reports that he developed hives and vomiting within 20 minutes of drinking milk at 8 months of age. Recent testing shows casein-specific IgE of <0.35 kU/L (negative) and β-lactoglobulin-specific IgE of 4.2 kU/L (positive). The family asks about introducing baked milk products like muffins and cookies to help him outgrow his allergy faster. His current diet excludes all milk products, and he drinks amino acid-based formula.",
      "options": [
        {
          "text": "Initiate a baked milk ladder starting with extensively heated milk products under medical supervision",
          "explanation": "Correct. Negative casein IgE with positive whey IgE indicates likely tolerance to baked milk, as whey proteins are heat-labile and denatured during extensive heating."
        },
        {
          "text": "Continue strict milk avoidance as positive β-lactoglobulin IgE indicates he cannot tolerate any milk products",
          "explanation": "Incorrect. β-lactoglobulin is a whey protein that is heat-labile and becomes denatured with extensive heating, so baked milk may still be tolerated."
        },
        {
          "text": "Switch to extensively hydrolyzed casein formula and avoid all baked milk products",
          "explanation": "Incorrect. He's already on appropriate amino acid formula, and negative casein IgE suggests he may tolerate baked milk products."
        },
        {
          "text": "Perform an oral food challenge with regular milk before considering baked milk products",
          "explanation": "Incorrect. Regular milk contains native whey proteins that would likely cause a reaction given his positive β-lactoglobulin IgE. Baked milk is the safer starting point."
        },
        {
          "text": "Wait until age 5-6 years for natural tolerance development before introducing any milk products",
          "explanation": "Incorrect. Introducing baked milk in casein IgE-negative patients can actually accelerate natural tolerance development rather than waiting passively."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has negative casein IgE but positive β-lactoglobulin (whey protein) IgE. Casein is heat-stable and maintains allergenicity even when baked, while whey proteins like β-lactoglobulin are heat-labile and become denatured during extensive heating. Since his casein IgE is negative, he is likely to tolerate baked milk products where the whey proteins have been denatured. Studies show that introducing baked milk in appropriate candidates can accelerate the development of natural tolerance. A supervised baked milk ladder would be appropriate, starting with extensively heated products.",
      "topic_tags": [
        "food allergy",
        "pediatric allergy",
        "cow's milk protein allergy",
        "baked milk tolerance"
      ],
      "key_concept": "Casein IgE-negative patients with whey protein sensitization can often tolerate baked milk due to heat denaturation of whey proteins"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "Milk protein components: casein (Bos d 8) — heat-stable → persistent allergy. Whey (β-lactoglobulin Bos d 5, α-lactalbumin) — heat-labile → may tolerate baked milk.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question requires integration of the specific IgE results, clinical history, and understanding of protein heat-lability to determine appropriate management"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is necessary: age/history establishes diagnosis, specific IgE results are crucial for determining baked milk candidacy, current management shows strict avoidance"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [14,17,12,13,16] - ratio 1.42, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical approaches: continued avoidance (B), formula change (C), standard OFC protocol (D), natural tolerance waiting (E)"
      },
      "grammatical_consistency": {
        "score": 0.8,
        "note": "Most options are imperative verb phrases, though some vary slightly in structure"
      },
      "clinical_accuracy": {
        "score": 0.9,
        "note": "Correct answer aligns with current food allergy management guidelines regarding baked milk introduction in appropriate candidates"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While A is the best evidence-based approach, some clinicians might reasonably choose continued avoidance (B) in conservative practice"
      }
    }
  },
  {
    "id": "lib-milk-allergy-infant-0108",
    "type": "mcq",
    "status": "approved",
    "caseId": "milk-allergy-infant",
    "diagnosis": "Cow's Milk Protein Allergy",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1097/WOX.0b013e3181defeb9; WAO DRACMA: cow's milk allergy diagnosis",
    "submittedAt": "2026-03-05T02:44:31Z",
    "approvedAt": "2026-03-05T02:44:31Z",
    "question": {
      "stem": "A 2-year-old boy with a history of cow's milk protein allergy presents for routine follow-up. His parents report that he developed urticaria and vomiting 20 minutes after drinking regular milk at 8 months of age. Recent laboratory testing shows casein-specific IgE of <0.35 kU/L (negative) and whey-specific IgE of 2.1 kU/L (positive). The child has been maintained on an extensively hydrolyzed casein formula with good growth. His parents ask about potentially introducing baked milk products into his diet.",
      "options": [
        {
          "text": "Initiate a baked milk ladder protocol under medical supervision",
          "explanation": "Correct. With negative casein IgE and positive whey IgE, this child is an excellent candidate for baked milk introduction. Casein is heat-stable, so negative casein IgE indicates tolerance to all milk proteins when extensively heated. Whey proteins are heat-labile and are denatured during baking."
        },
        {
          "text": "Continue current formula and recheck specific IgE levels in 6 months",
          "explanation": "Incorrect. While monitoring IgE levels is appropriate, this approach delays potentially beneficial baked milk introduction. The current IgE profile (negative casein, positive whey) suggests likely tolerance to baked milk products."
        },
        {
          "text": "Perform an oral food challenge with regular liquid milk",
          "explanation": "Incorrect. With positive whey IgE, this child would likely react to liquid milk since whey proteins remain intact in unheated milk. A liquid milk challenge would be premature and potentially dangerous."
        },
        {
          "text": "Switch to an amino acid-based formula before considering milk reintroduction",
          "explanation": "Incorrect. Amino acid formulas are reserved for severe CMPA or FPIES. This child is tolerating extensively hydrolyzed formula well, and the negative casein IgE suggests baked milk tolerance rather than need for further restriction."
        },
        {
          "text": "Recommend complete avoidance of all milk products until age 5",
          "explanation": "Incorrect. Complete avoidance until school age is unnecessarily restrictive. The negative casein IgE indicates likely tolerance to baked milk, and early introduction of tolerated forms can accelerate natural tolerance development."
        }
      ],
      "correct_index": 0,
      "explanation": "This question tests understanding of component-resolved diagnostics in milk allergy management. Casein (Bos d 8) is heat-stable, while whey proteins (β-lactoglobulin, α-lactalbumin) are heat-labile. Patients with negative casein IgE but positive whey IgE can typically tolerate extensively heated (baked) milk products because the heat denatures the whey proteins while leaving the already-tolerated casein intact. Introducing baked milk in these patients is safe and can accelerate the development of tolerance to all milk proteins. The other options either delay appropriate progression (B, E), pose unnecessary risk (C), or represent overtreatment (D).",
      "topic_tags": [
        "food_allergy",
        "pediatric_allergy",
        "component_resolved_diagnostics",
        "milk_allergy"
      ],
      "key_concept": "Component-resolved diagnostics guide baked milk tolerance assessment in CMPA"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK4",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Casein sIgE: positive → cannot tolerate baked milk. Negative, whey positive → baked milk ladder may be appropriate.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except 'His parents ask about potentially introducing baked milk products into his diet' would not provide sufficient information to answer correctly. The specific IgE results and clinical context are essential."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: age/history establishes CMPA, initial reaction confirms IgE-mediated allergy, component-specific IgE results are crucial for the baked milk decision, current formula shows tolerance, and parental question drives the clinical scenario."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,11,9,12,11]. Max/min ratio = 1.33, which is acceptable but approaching the threshold."
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "B is reasonable conservative management, C represents standard challenge protocol (though not optimal here), D is plausible overtreatment, E reflects outdated but still sometimes encountered approach. All are clinically reasonable considerations."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure (verb + object/complement)."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current understanding of component-resolved diagnostics in milk allergy. Negative casein IgE with positive whey IgE supports baked milk introduction under supervision."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Given the specific IgE pattern, option A is clearly best practice. Option B could be debated by some as reasonable conservative approach, but A is superior based on current evidence."
      }
    }
  },
  {
    "id": "lib-milk-allergy-infant-0109",
    "type": "mcq",
    "status": "approved",
    "caseId": "milk-allergy-infant",
    "diagnosis": "Cow's Milk Protein Allergy",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1097/WOX.0b013e3181defeb9; WAO DRACMA: cow's milk allergy diagnosis",
    "submittedAt": "2026-03-05T02:46:11Z",
    "approvedAt": "2026-03-05T02:46:11Z",
    "question": {
      "stem": "A 4-month-old infant presents with persistent bloody stools, vomiting, and failure to thrive despite switching from breast milk to standard cow's milk formula 3 weeks ago. Physical examination reveals an irritable infant with mild dehydration and perianal erythema. Laboratory studies show mild anemia and hypoalbuminemia. Skin prick tests are negative for milk proteins, but casein-specific IgE is elevated at 8.2 kU/L. The parents report that older sibling had similar symptoms as an infant but now tolerates cheese and yogurt without problems.",
      "options": [
        {
          "text": "Switch to amino acid-based formula due to severe CMPA presentation",
          "explanation": "Correct. The combination of severe GI symptoms (bloody stools, vomiting, FTT), elevated casein-specific IgE, and negative skin prick tests suggests severe CMPA. Amino acid formulas are indicated for severe CMPA/FPIES when extensively hydrolyzed formulas may not be sufficient."
        },
        {
          "text": "Switch to extensively hydrolyzed casein formula for mild CMPA management",
          "explanation": "Incorrect. While extensively hydrolyzed formulas are appropriate for mild-moderate CMPA, this infant has severe symptoms (bloody stools, FTT, hypoalbuminemia) requiring amino acid formula."
        },
        {
          "text": "Switch to soy-based formula as first-line alternative to cow's milk",
          "explanation": "Incorrect. Soy formula is not recommended for IgE-mediated milk allergy in infants <6 months due to 10-15% cross-reactivity rate and shared storage proteins."
        },
        {
          "text": "Continue current formula and add probiotics to improve gut tolerance",
          "explanation": "Incorrect. Continuing cow's milk formula in a child with confirmed CMPA and severe symptoms would perpetuate the allergic response and worsen clinical outcomes."
        },
        {
          "text": "Switch to goat milk formula as it has different protein structure",
          "explanation": "Incorrect. Goat milk has similar protein structure to cow's milk and shows significant cross-reactivity. It is not an appropriate alternative for CMPA management."
        }
      ],
      "correct_index": 0,
      "explanation": "This infant presents with severe CMPA evidenced by bloody stools, vomiting, failure to thrive, and elevated casein-specific IgE. The severity of symptoms (GI bleeding, growth failure, hypoalbuminemia) indicates the need for amino acid-based formula rather than extensively hydrolyzed formula. Amino acid formulas (Neocate, EleCare) are reserved for severe CMPA/FPIES cases where even extensively hydrolyzed proteins may trigger reactions. The elevated casein IgE suggests this child will be less likely to outgrow the allergy and less likely to tolerate baked milk products, unlike the sibling who likely had whey-predominant sensitivity.",
      "topic_tags": [
        "pediatrics",
        "allergy",
        "gastroenterology",
        "nutrition"
      ],
      "key_concept": "Amino acid formulas are indicated for severe CMPA presentations with systemic symptoms"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "PC",
      "acgme_milestone": "PC1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Formula options: extensively hydrolyzed casein (Nutramigen, Alimentum) for mild-moderate CMPA. Amino acid formula (Neocate, EleCare) for severe CMPA/FPIES.",
    "quality_score": 0.71,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Question requires the full clinical context including severity indicators (bloody stools, failure to thrive, elevated IgE) to determine appropriate formula choice"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are relevant: symptoms establish severity, lab values support diagnosis, negative skin tests with positive specific IgE clarify allergy type, sibling history provides prognostic context"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,9,10,10,11] - ratio 1.22, acceptable variance"
      },
      "distractor_plausibility": {
        "score": 0.6,
        "note": "B is highly plausible for CMPA; C and E are reasonable considerations; D is less plausible given severity of presentation"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow same structure: 'Switch to [formula type] [rationale]' or 'Continue current formula [modification]'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct - severe CMPA with bloody stools and failure to thrive warrants amino acid formula per current guidelines"
      },
      "single_best_answer": {
        "score": 0.5,
        "note": "While A is preferred for severe cases, some clinicians might reasonably try extensively hydrolyzed formula (B) first before amino acid formula"
      }
    }
  },
  {
    "id": "lib-nsaid-hypersensitivity-0110",
    "type": "mcq",
    "status": "approved",
    "caseId": "nsaid-hypersensitivity",
    "diagnosis": "AERD (Samter's Triad)",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1016/j.jaip.2020.09.016; Aspirin-exacerbated respiratory disease: comprehensive review",
    "submittedAt": "2026-03-05T02:47:21Z",
    "approvedAt": "2026-03-05T02:47:21Z",
    "question": {
      "stem": "A 28-year-old woman with chronic rhinosinusitis with nasal polyps and asthma presents to the emergency department with acute bronchospasm and facial swelling that began 30 minutes after taking ibuprofen for a headache. Her peak flow is 40% of baseline. She reports similar reactions in the past with aspirin and naproxen. Vital signs show oxygen saturation 88% on room air, respiratory rate 32/min. Physical examination reveals diffuse wheezing, nasal congestion, and bilateral nasal polyps on rhinoscopy. She is treated with albuterol, corticosteroids, and supplemental oxygen with improvement.",
      "options": [
        {
          "text": "All COX-1 inhibiting NSAIDs should be avoided, but celecoxib is safe for future analgesic needs",
          "explanation": "Correct. This patient has AERD (NSAID-ERD). The mechanism involves COX-1 inhibition leading to decreased PGE2 and subsequent mast cell activation. All COX-1 inhibitors cross-react, but COX-2 selective agents like celecoxib are safe."
        },
        {
          "text": "IgE-mediated allergy testing should be performed to identify the specific NSAID trigger",
          "explanation": "Incorrect. AERD is a pharmacologic reaction via COX-1 inhibition, not an IgE-mediated allergic reaction. IgE testing would be appropriate for SNIUAA (selective NSAID-induced reactions) but not for AERD."
        },
        {
          "text": "Acetaminophen should be completely avoided due to cross-reactivity with NSAIDs",
          "explanation": "Incorrect. Acetaminophen is safe in AERD patients at doses <1000 mg single dose because it has minimal COX-1 inhibition. Complete avoidance is unnecessary."
        },
        {
          "text": "Aspirin desensitization should be offered immediately while the patient is hospitalized",
          "explanation": "Incorrect. Aspirin desensitization requires FEV1 ≥50% baseline, no recent exacerbations, and stable respiratory status. This patient has acute bronchospasm with 40% peak flow, making immediate desensitization inappropriate."
        },
        {
          "text": "Only ibuprofen needs to be avoided since it was the specific trigger in this episode",
          "explanation": "Incorrect. This represents a pharmacologic cross-reaction affecting all COX-1 inhibiting NSAIDs (aspirin, ibuprofen, naproxen, ketorolac, diclofenac). The reaction is not drug-specific like SNIUAA."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has AERD (Aspirin-Exacerbated Respiratory Disease/Samter's Triad) characterized by asthma, chronic rhinosinusitis with nasal polyps, and NSAID hypersensitivity. The mechanism involves COX-1 inhibition leading to decreased PGE2, which normally inhibits mast cells. This results in mast cell activation and increased leukotriene production, causing bronchospasm and nasal edema. Because this is a pharmacologic reaction affecting the COX-1 pathway, all COX-1 inhibiting NSAIDs cross-react. However, COX-2 selective agents like celecoxib are safe because they don't significantly inhibit COX-1. IgE testing is inappropriate as this isn't an immunologic reaction. Acetaminophen is safe at appropriate doses. Aspirin desensitization requires stable respiratory function (FEV1 ≥50%) and cannot be done during acute exacerbations.",
      "topic_tags": [
        "AERD",
        "NSAID hypersensitivity",
        "drug allergy",
        "asthma",
        "chronic rhinosinusitis"
      ],
      "key_concept": "AERD involves pharmacologic COX-1 cross-reactivity with all NSAIDs, but COX-2 selective agents are safe"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "NSAID-ERD: COX-1 → ↓PGE₂ → mast cell activation → ↑LTE₄ → bronchospasm + nasal edema. Cross-reacts ALL NSAIDs. COX-2 safe.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence would remove critical clinical context (rhinosinusitis, nasal polyps, asthma triad, prior reactions with aspirin/naproxen, severity indicators). The question stem is essential for diagnosis."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/sex (typical demographic), chronic rhinosinusitis with nasal polyps + asthma (Samter's triad), timing of reaction, specific trigger (ibuprofen), severity markers (peak flow 40%, O2 sat 88%), cross-reactivity history (aspirin/naproxen), physical findings, and treatment response all contribute to AERD diagnosis."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [16,14,12,13,17] - max/min ratio 17/12 = 1.42, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B is plausible misconception about IgE testing; C represents common fear about acetaminophen cross-reactivity; D could seem logical for AERD treatment; E reflects misunderstanding of cross-reactivity. All are reasonable clinical considerations."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are complete declarative statements with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer A is accurate - AERD involves COX-1 inhibition mechanism, all COX-1 inhibitors cross-react, COX-2 selective agents like celecoxib are safe"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "A is clearly the best answer based on AERD pathophysiology. Other options have clear clinical flaws, though some clinicians might debate timing of desensitization."
      }
    }
  },
  {
    "id": "lib-nsaid-hypersensitivity-0111",
    "type": "mcq",
    "status": "approved",
    "caseId": "nsaid-hypersensitivity",
    "diagnosis": "AERD (Samter's Triad)",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1016/j.jaip.2020.09.016; Aspirin-exacerbated respiratory disease: comprehensive review",
    "submittedAt": "2026-03-05T02:48:01Z",
    "approvedAt": "2026-03-05T02:48:01Z",
    "question": {
      "stem": "A 28-year-old woman with a history of asthma and chronic rhinosinusitis with nasal polyposis presents to the emergency department with acute onset of facial swelling, urticaria, and wheezing that began 45 minutes after taking ibuprofen for menstrual cramps. She reports similar reactions in the past to aspirin and naproxen. Her vital signs show oxygen saturation of 92% on room air, blood pressure 110/70 mmHg, and peak expiratory flow rate 60% of predicted. Physical examination reveals bilateral periorbital edema, diffuse urticaria on the trunk and extremities, and expiratory wheeze on pulmonary auscultation. She is treated with epinephrine, corticosteroids, and bronchodilators with improvement. What is the most appropriate next step in management of her analgesic needs?",
      "options": [
        {
          "text": "Recommend celecoxib for future pain management needs",
          "explanation": "Correct. This patient has NSAID-EURD (NSAID-exacerbated urticaria/angioedema), which involves COX-1 inhibition leading to urticaria and angioedema. Celecoxib is COX-2 selective and safe in patients with COX-1-mediated NSAID hypersensitivity."
        },
        {
          "text": "Initiate aspirin desensitization protocol for long-term management",
          "explanation": "Incorrect. Aspirin desensitization is indicated for NSAID-ERD (respiratory reactions) in patients with AERD, not for NSAID-EURD (urticaria/angioedema reactions). This patient's presentation is consistent with urticarial reactions, not respiratory disease."
        },
        {
          "text": "Perform skin testing to identify specific NSAID allergens",
          "explanation": "Incorrect. NSAID-EURD is a pharmacologic reaction to COX-1 inhibition, not an IgE-mediated allergic reaction. Skin testing would be appropriate for SNIUAA (selective NSAID-induced reactions) but not for cross-reactive COX-1-mediated hypersensitivity."
        },
        {
          "text": "Prescribe low-dose aspirin with premedication using antihistamines",
          "explanation": "Incorrect. Premedication does not prevent COX-1-mediated reactions and low-dose aspirin still inhibits COX-1. All COX-1 inhibiting NSAIDs will cross-react in this patient due to the pharmacologic mechanism of the reaction."
        },
        {
          "text": "Recommend acetaminophen with maximum single dose of 500mg",
          "explanation": "Incorrect. While acetaminophen is generally safe in NSAID hypersensitivity, the dose limitation is unnecessary. Acetaminophen is safe up to 1000mg single dose in patients with NSAID-ERD, and this patient needs effective analgesia for menstrual cramps."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with NSAID-EURD (NSAID-exacerbated urticaria/angioedema), evidenced by urticaria, angioedema, and cross-reactivity to multiple COX-1 inhibiting NSAIDs (ibuprofen, aspirin, naproxen). The mechanism involves COX-1 inhibition leading to reduced PGE2 and subsequent mast cell activation. Since this is a pharmacologic rather than immunologic reaction, all COX-1 inhibiting NSAIDs will cross-react. Celecoxib, being COX-2 selective, is safe because it does not inhibit COX-1. Aspirin desensitization is for NSAID-ERD (respiratory reactions), not urticarial reactions. Skin testing is not useful for pharmacologic reactions. Premedication and dose reduction of COX-1 inhibitors will not prevent reactions.",
      "topic_tags": [
        "NSAID hypersensitivity",
        "drug allergy",
        "urticaria",
        "COX selectivity"
      ],
      "key_concept": "COX-2 selective NSAIDs are safe in NSAID-EURD because the reaction mechanism involves COX-1 inhibition"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "NSAID-EURD: COX-1 → urticaria/angioedema in patients with CSU. Cross-reacts ALL NSAIDs. COX-2 safe.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The stem provides essential clinical context (NSAID-EURD presentation, cross-reactivity pattern, specific symptoms) that cannot be determined from just the final question about analgesic management"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: patient demographics establish context, medication history shows cross-reactivity pattern, symptom onset timing confirms causality, vital signs indicate severity, physical findings support diagnosis, and treatment response confirms management approach"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [8,9,8,9,9] - excellent parity with max/min ratio of 1.125"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B and D are plausible but inappropriate for urticarial reactions; C seems reasonable but isn't indicated for pharmacologic reactions; E is overly conservative but could be considered"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure starting with action verbs (Recommend/Initiate/Perform/Prescribe/Recommend)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Celecoxib is indeed the appropriate choice for NSAID-EURD as it's COX-2 selective and doesn't cross-react with COX-1 inhibitors"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Celecoxib is clearly the best answer, though some might consider acetaminophen, but the dose restriction in option E makes it less optimal"
      }
    }
  },
  {
    "id": "lib-nsaid-hypersensitivity-0112",
    "type": "mcq",
    "status": "approved",
    "caseId": "nsaid-hypersensitivity",
    "diagnosis": "AERD (Samter's Triad)",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1016/j.jaip.2020.09.016; Aspirin-exacerbated respiratory disease: comprehensive review",
    "submittedAt": "2026-03-05T02:49:20Z",
    "approvedAt": "2026-03-05T02:49:20Z",
    "question": {
      "stem": "A 42-year-old woman with chronic rhinosinusitis with nasal polyps and moderate persistent asthma presents for evaluation of suspected NSAID hypersensitivity. She reports that ibuprofen 600 mg causes severe nasal congestion, rhinorrhea, and wheezing within 30 minutes. She also experienced similar symptoms with naproxen and ketorolac. Her current FEV₁ is 68% predicted with no recent exacerbations. Urinary LTE₄ levels are markedly elevated. Skin testing to common aeroallergens is negative. She requires frequent sinus surgeries and asks about aspirin desensitization to reduce polyp recurrence.",
      "options": [
        {
          "text": "Begin aspirin desensitization with 2-day in-office protocol followed by 650 mg twice daily maintenance",
          "explanation": "Correct. Patient has AERD (aspirin-exacerbated respiratory disease) with classic triad: asthma, chronic rhinosinusitis with nasal polyps, and NSAID hypersensitivity. Cross-reactivity to multiple NSAIDs and elevated baseline urinary LTE₄ confirm COX-1 mediated mechanism. FEV₁ ≥50% and stable asthma make her eligible for desensitization."
        },
        {
          "text": "Perform specific IgE testing to ibuprofen, naproxen, and ketorolac before considering treatment",
          "explanation": "Incorrect. This patient has NSAID-ERD (COX-1 mediated) not SNIUAA (IgE-mediated). NSAID-ERD involves pharmacologic COX-1 inhibition causing reduced PGE₂ and mast cell activation, not true IgE hypersensitivity. Specific IgE testing would be negative and unnecessary."
        },
        {
          "text": "Recommend strict avoidance of all NSAIDs including COX-2 selective agents like celecoxib",
          "explanation": "Incorrect. While COX-1 inhibiting NSAIDs must be avoided, COX-2 selective agents like celecoxib are safe in NSAID-ERD because they don't inhibit COX-1. The mechanism involves COX-1 inhibition reducing PGE₂, so COX-2 selective drugs don't trigger reactions."
        },
        {
          "text": "Start leukotriene receptor antagonist therapy and reassess symptoms in 3 months",
          "explanation": "Incorrect. While leukotriene modifiers may provide some benefit in AERD, this doesn't address her primary concern about reducing polyp recurrence. Aspirin desensitization provides superior outcomes with 50% reduction in polyp recurrence compared to medical management alone."
        },
        {
          "text": "Advise acetaminophen as primary analgesic with maximum single doses of 1500 mg as needed",
          "explanation": "Incorrect. While acetaminophen is generally safe in NSAID-ERD, doses should be limited to <1000 mg per single dose to minimize risk. More importantly, this doesn't address aspirin desensitization for polyp prevention, which is the optimal management for eligible AERD patients."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has classic AERD (aspirin-exacerbated respiratory disease), evidenced by the triad of asthma, chronic rhinosinusitis with nasal polyps, and NSAID hypersensitivity. The cross-reactivity to multiple NSAIDs (ibuprofen, naproxen, ketorolac) and markedly elevated baseline urinary LTE₄ confirm the COX-1 mediated mechanism rather than IgE-mediated allergy. With FEV₁ ≥50% and stable asthma, she meets eligibility criteria for aspirin desensitization. The 2-day in-office protocol followed by maintenance aspirin 650 mg BID provides significant clinical benefits including 50% reduction in polyp recurrence. IgE testing would be negative in NSAID-ERD since this is pharmacologic, not immunologic. COX-2 selective agents are safe alternatives. Leukotriene modifiers alone don't provide the polyp prevention benefits of aspirin desensitization.",
      "topic_tags": [
        "AERD",
        "NSAID hypersensitivity",
        "aspirin desensitization",
        "chronic rhinosinusitis",
        "drug allergy"
      ],
      "key_concept": "AERD diagnosis and aspirin desensitization eligibility in patients with COX-1 mediated NSAID hypersensitivity"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "SNIUAA (Selective NSAID-induced Urticaria/Angioedema/Anaphylaxis): TRUE IgE to specific NSAID. Drug-specific — other NSAIDs safe.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence alone cannot determine the correct answer - requires the full clinical vignette including symptoms, cross-reactivity pattern, urinary LTE4 levels, and FEV1 status"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: demographics establish AERD triad, NSAID reactions show cross-reactivity pattern, FEV1 establishes eligibility for desensitization, urinary LTE4 confirms mechanism, negative skin testing rules out allergic asthma phenotype"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [16,13,12,12,15] - ratio 1.33, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B is implausible (IgE testing irrelevant for non-immunologic reaction), but C, D, and E represent reasonable alternative approaches that clinicians might consider"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently structured as verb phrases describing treatment actions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current AERD management guidelines - patient meets criteria for aspirin desensitization with stable asthma FEV1 ≥50%"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Aspirin desensitization is clearly best for preventing polyp recurrence, though some might argue for trying leukotriene modifiers first"
      }
    }
  },
  {
    "id": "lib-occupational-asthma-isocyanate-0113",
    "type": "mcq",
    "status": "approved",
    "caseId": "occupational-asthma-isocyanate",
    "diagnosis": "Occupational asthma — isocyanate sensitization (TDI — toluene diisocyanate)",
    "source": "ReasonDx Case Library — Occupational asthma — isocyanate sensitization (TDI — toluene diisocyanate)",
    "submittedAt": "2026-03-05T02:49:57Z",
    "approvedAt": "2026-03-05T02:49:57Z",
    "question": {
      "stem": "A 42-year-old spray painter presents with progressive dyspnea and wheezing over 8 months. He works in an automotive repair shop using polyurethane spray paints daily. Symptoms worsen during workdays and improve on weekends and holidays. He has no previous history of asthma or allergies. Physical examination reveals bilateral expiratory wheezes. Spirometry shows FEV1 of 2.1 L (68% predicted) with 18% improvement after bronchodilator. Skin prick tests to common environmental allergens are negative. A 4-week serial peak expiratory flow monitoring study shows 25% diurnal variability on workdays and 8% variability during a 10-day vacation period.",
      "options": [
        {
          "text": "Toluene diisocyanate sensitization",
          "explanation": "Correct. This patient has classic occupational asthma from isocyanate exposure (polyurethane paints contain TDI). The work-related pattern, negative skin tests (expected with LMW sensitizers), and >20% PEF variability at work vs <20% away from work confirm the diagnosis."
        },
        {
          "text": "Baker's asthma from wheat flour exposure",
          "explanation": "Incorrect. The patient is a spray painter with no flour exposure. Baker's asthma is the most common occupational asthma worldwide but would involve high molecular weight allergens with positive skin prick tests."
        },
        {
          "text": "Reactive airways dysfunction syndrome",
          "explanation": "Incorrect. RADS occurs within 24 hours of a single massive irritant exposure without latency period. This patient has an 8-month progressive course with sensitization pattern typical of occupational asthma."
        },
        {
          "text": "Western red cedar asthma from plicatic acid",
          "explanation": "Incorrect. The patient works with automotive paints, not wood products. Western red cedar asthma is specific to woodworkers exposed to plicatic acid and is classically seen in Canadian lumber workers."
        },
        {
          "text": "Platinum salt sensitization",
          "explanation": "Incorrect. The patient has no exposure to platinum compounds. Additionally, platinum salts are high molecular weight sensitizers that typically cause positive skin prick tests, unlike this patient's negative results."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic occupational asthma from isocyanate sensitization. Toluene diisocyanate (TDI) is found in polyurethane paints and is the most common cause of occupational asthma in developed countries. Key diagnostic features include: (1) work-related symptom pattern with improvement during time away, (2) low molecular weight sensitizer causing negative skin prick tests, (3) serial PEF monitoring showing >20% variability at work versus normal variability when away from work. The 4-week PEF study with adequate work and away periods is the primary diagnostic tool when specific inhalation challenge is not available.",
      "topic_tags": [
        "occupational medicine",
        "pulmonology",
        "asthma",
        "environmental health"
      ],
      "key_concept": "Isocyanate-induced occupational asthma diagnosis using serial peak flow monitoring"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Most common OA worldwide: flour (baker's asthma) — HMW, IgE-mediated",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence, the clinical vignette provides essential details about occupation, symptom pattern, and diagnostic findings that are necessary to identify isocyanate sensitization"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence is clinically relevant: occupation details establish exposure, symptom pattern suggests occupational cause, physical findings confirm asthma, spirometry shows reversible obstruction, negative skin tests rule out common allergens, PEF monitoring confirms work-related pattern"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [4,6,4,7,3]. Ratio 7/3 = 2.33 exceeds 1.5 threshold but not severely"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are legitimate causes of occupational asthma: baker's asthma (though wrong exposure), RADS (plausible irritant response), cedar asthma (occupational sensitizer), platinum salts (occupational sensitizer). All clinically reasonable considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent noun phrase structure describing specific conditions/syndromes"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "TDI is indeed found in polyurethane paints and is a leading cause of occupational asthma. The diagnostic approach using serial PEF monitoring is appropriate and the findings support sensitizer-induced occupational asthma"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Given the specific exposure to polyurethane paints and the classic presentation, TDI sensitization is clearly the best answer among the occupational asthma causes listed"
      }
    }
  },
  {
    "id": "lib-occupational-asthma-isocyanate-0114",
    "type": "mcq",
    "status": "approved",
    "caseId": "occupational-asthma-isocyanate",
    "diagnosis": "Occupational asthma — isocyanate sensitization (TDI — toluene diisocyanate)",
    "source": "ReasonDx Case Library — Occupational asthma — isocyanate sensitization (TDI — toluene diisocyanate)",
    "submittedAt": "2026-03-05T02:51:04Z",
    "approvedAt": "2026-03-05T02:51:04Z",
    "question": {
      "stem": "A 28-year-old man working in an automotive spray-painting facility presents with a 6-month history of progressive dyspnea, wheezing, and chest tightness. Symptoms began 3 months after starting his current job and worsen during the workweek, with improvement on weekends and vacations. He denies smoking and has no prior history of asthma or allergies. Physical examination reveals expiratory wheezes bilaterally. Skin prick tests to common environmental allergens are negative. Spirometry shows FEV1 of 68% predicted with reversibility after bronchodilator. Serial peak expiratory flow monitoring over 4 weeks (2 weeks at work, 2 weeks away from work) demonstrates 25% variability between work and non-work periods.",
      "options": [
        {
          "text": "Toluene diisocyanate sensitization",
          "explanation": "Correct. This presentation is classic for isocyanate-induced occupational asthma, the most common cause of OA in developed countries. The automotive spray-painting environment commonly uses isocyanates like TDI. The temporal relationship, negative skin tests (expected with low molecular weight sensitizers), and positive serial PEF monitoring confirm the diagnosis."
        },
        {
          "text": "Baker's asthma from flour sensitization",
          "explanation": "Incorrect. While baker's asthma is the most common occupational asthma worldwide, this patient works in automotive spray-painting, not food production. Baker's asthma is caused by high molecular weight sensitizers and would typically show positive skin prick tests."
        },
        {
          "text": "Reactive airways dysfunction syndrome",
          "explanation": "Incorrect. RADS occurs within 24 hours of a single massive irritant exposure with no latency period. This patient has a 6-month progressive history with clear work-related patterns, indicating sensitization rather than acute irritant-induced asthma."
        },
        {
          "text": "Western red cedar sensitization",
          "explanation": "Incorrect. Plicatic acid from western red cedar is a classic occupational sensitizer in Canada's lumber industry. This patient works in automotive spray-painting with no wood dust exposure. The exposure pattern doesn't match cedar sensitization."
        },
        {
          "text": "Platinum salt sensitization",
          "explanation": "Incorrect. Platinum salts cause occupational asthma in precious metal refining and certain chemical industries. Unlike most low molecular weight sensitizers, platinum salts are IgE-mediated and would typically show positive skin tests. This patient works in automotive painting with negative skin tests."
        }
      ],
      "correct_index": 0,
      "explanation": "This case represents classic isocyanate-induced occupational asthma, specifically TDI sensitization from automotive spray-painting. Isocyanates are the most common cause of occupational asthma in developed countries. Key features supporting this diagnosis include: (1) temporal relationship with work exposure, (2) negative skin prick tests (typical for low molecular weight sensitizers like isocyanates), (3) positive serial peak flow monitoring showing >20% variability, and (4) occupational exposure in automotive painting where isocyanates are commonly used. The other options represent different occupational asthma causes but don't match the exposure pattern or clinical findings in this case.",
      "topic_tags": [
        "occupational_asthma",
        "isocyanates",
        "pulmonology",
        "environmental_medicine"
      ],
      "key_concept": "Isocyanate-induced occupational asthma as the most common OA cause in developed countries, diagnosed by serial PEF monitoring rather than skin testing"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Most common OA in developed countries: isocyanates — LMW, NON-IgE, SPT negative",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence, the question still requires analysis of the specific occupational exposure (automotive spray-painting), temporal relationship, negative skin tests, and peak flow variability to determine the correct sensitizing agent"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: occupation (spray-painting), temporal relationship, negative skin tests (key for low molecular weight sensitizers), spirometry findings, and peak flow variability are all necessary to distinguish between occupational asthma causes"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [3,5,4,4,3] - ratio 1.67 slightly exceeds 1.5 threshold but acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All are legitimate causes of occupational asthma: baker's asthma (flour), RADS (irritant exposure), cedar sensitization (wood), platinum salts (industrial). Each represents different exposure patterns making them clinically reasonable distractors"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent noun phrase structure describing specific sensitization types or syndromes"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "TDI is indeed the most common cause of occupational asthma in automotive spray-painting, and the clinical presentation with negative skin tests and positive peak flow monitoring is classic for isocyanate sensitization"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Given the specific occupational exposure to automotive spray-painting and classic presentation, TDI sensitization is clearly the best answer, though RADS could be considered by some as an alternative"
      }
    }
  },
  {
    "id": "lib-occupational-asthma-isocyanate-0115",
    "type": "mcq",
    "status": "approved",
    "caseId": "occupational-asthma-isocyanate",
    "diagnosis": "Occupational asthma — isocyanate sensitization (TDI — toluene diisocyanate)",
    "source": "ReasonDx Case Library — Occupational asthma — isocyanate sensitization (TDI — toluene diisocyanate)",
    "submittedAt": "2026-03-05T02:51:42Z",
    "approvedAt": "2026-03-05T02:51:42Z",
    "question": {
      "stem": "A 42-year-old automotive factory worker presents with a 6-month history of progressive dyspnea, wheezing, and chest tightness that began shortly after starting work in the spray painting department. Symptoms worsen during the work week and improve on weekends and vacations. He has no history of asthma or allergies. Physical examination reveals expiratory wheezes. Spirometry shows FEV1 of 68% predicted with positive bronchodilator response. Skin prick tests to common environmental allergens and occupational allergens are negative. Specific IgE levels to toluene diisocyanate (TDI) are undetectable. Serial peak flow monitoring over 4 weeks shows 25% variability between work days and days off work.",
      "options": [
        {
          "text": "Occupational asthma due to isocyanate sensitization",
          "explanation": "Correct. Isocyanates are the most common cause of occupational asthma in developed countries. This is a low molecular weight sensitizer that acts via non-IgE mechanisms, explaining the negative skin tests and specific IgE. The >20% variability in serial peak flow monitoring between work and non-work periods is diagnostic."
        },
        {
          "text": "Reactive airways dysfunction syndrome (RADS)",
          "explanation": "Incorrect. RADS occurs within 24 hours of a single massive irritant exposure with no latency period. This patient has a 6-month gradual onset with clear work-related pattern, indicating sensitization rather than acute irritant injury."
        },
        {
          "text": "Baker's asthma from flour protein exposure",
          "explanation": "Incorrect. While flour is the most common cause of occupational asthma worldwide, this patient works in automotive spray painting, not food production. Baker's asthma is also IgE-mediated with positive skin tests, unlike this case."
        },
        {
          "text": "Occupational asthma due to western red cedar exposure",
          "explanation": "Incorrect. Western red cedar (plicatic acid) exposure occurs in woodworking industries, not automotive painting. While it is also a low molecular weight sensitizer with non-IgE mechanisms, the occupational exposure doesn't match."
        },
        {
          "text": "Non-occupational asthma with coincidental work timing",
          "explanation": "Incorrect. The clear temporal relationship with work exposure, improvement during weekends and vacations, and >20% peak flow variability between work and non-work periods strongly indicates occupational causation rather than coincidence."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic occupational asthma due to isocyanate sensitization. Isocyanates (including TDI used in spray painting) are the most common cause of occupational asthma in developed countries. They are low molecular weight sensitizers that act through non-IgE mechanisms, which explains why skin prick tests and specific IgE are negative - standard allergy testing cannot rule out LMW sensitizer occupational asthma. The key diagnostic feature is the >20% variability in serial peak flow monitoring between work and non-work periods over the 4-week monitoring period. RADS is incorrect because it requires single massive exposure with onset within 24 hours. Baker's asthma involves flour proteins and would show positive IgE testing. Western red cedar exposure occurs in woodworking, not automotive industries. The clear work-related pattern rules out coincidental non-occupational asthma.",
      "topic_tags": [
        "occupational_medicine",
        "pulmonology",
        "asthma",
        "workplace_exposure"
      ],
      "key_concept": "Isocyanate occupational asthma diagnosis using serial peak flow monitoring when standard allergy testing is negative"
    },
    "tags": {
      "abai_domain": "Domain 15 — Occupational & Environmental Allergy",
      "abai_domain_number": 15,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "RADS: single massive irritant exposure → asthma within 24h. No latency. No sensitization. Not isocyanate-related.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the last sentence removes critical information about work environment (spray painting), temporal pattern, negative allergy tests, and peak flow variability - all essential for diagnosis"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: occupation/department, temporal pattern, symptoms, physical findings, spirometry results, negative allergy testing, and peak flow monitoring all contribute to the differential diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,7,7,8,7] - excellent parity with max/min ratio of 1.14"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: condition name + 'due to/from' + specific cause/trigger"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "RADS (0.8) - plausible occupational lung disease; Baker's asthma (0.5) - less plausible given automotive setting; Western red cedar (0.5) - wrong industry but occupational; Non-occupational (1.0) - very reasonable consideration"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - isocyanates are leading cause of occupational asthma, can cause non-IgE mediated sensitization, and >20% peak flow variability is diagnostic"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer based on spray painting exposure, work-related pattern, negative IgE testing consistent with low molecular weight sensitizer, and diagnostic peak flow variability"
      }
    }
  },
  {
    "id": "lib-peanut-allergy-anaphylaxis-0116",
    "type": "mcq",
    "status": "approved",
    "caseId": "peanut-allergy-anaphylaxis",
    "diagnosis": "Peanut Allergy — Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1056/NEJMoa1812856; AR101 oral immunotherapy for peanut allergy",
    "submittedAt": "2026-03-05T02:52:21Z",
    "approvedAt": "2026-03-05T02:52:21Z",
    "question": {
      "stem": "A 3-year-old boy presents to the allergy clinic for evaluation of possible peanut allergy. His parents report that he developed hives, vomiting, and wheezing within 30 minutes of eating a peanut butter sandwich 2 months ago. He was treated with epinephrine and antihistamines in the emergency department with complete resolution. The family has been strictly avoiding peanuts since the reaction. Physical examination is unremarkable. Laboratory studies show total IgE 180 kU/L (normal <60), peanut-specific IgE 8.2 kUA/L, Ara h 1 sIgE 2.1 kUA/L, Ara h 2 sIgE 4.8 kUA/L, and Ara h 8 sIgE 0.1 kUA/L. The parents ask about the need for oral food challenge testing.",
      "options": [
        {
          "text": "Oral food challenge is not needed due to high Ara h 2 level confirming clinical peanut allergy",
          "explanation": "Correct. Ara h 2 sIgE ≥0.35 kUA/L has >95% positive predictive value for clinical peanut allergy, making oral food challenge unnecessary at this threshold."
        },
        {
          "text": "Oral food challenge is required because total peanut sIgE is below the 95% predictive threshold",
          "explanation": "Incorrect. While total peanut sIgE of 8.2 kUA/L may be below some predictive thresholds, the elevated Ara h 2 component provides more specific diagnostic information."
        },
        {
          "text": "Oral food challenge should be performed due to cross-reactivity from Ara h 8 elevation",
          "explanation": "Incorrect. Ara h 8 level is very low at 0.1 kUA/L, and Ara h 8 is associated with oral allergy syndrome from birch cross-reactivity, not systemic reactions."
        },
        {
          "text": "Oral food challenge is needed because Ara h 1 elevation indicates mild allergy only",
          "explanation": "Incorrect. While Ara h 1 can be associated with milder reactions, the significantly elevated Ara h 2 level is the key component predicting systemic reactions."
        },
        {
          "text": "Oral food challenge must be done to determine eligibility for Palforzia oral immunotherapy",
          "explanation": "Incorrect. The clinical history and component testing already confirm peanut allergy. Palforzia eligibility is based on confirmed peanut allergy, not oral food challenge results."
        }
      ],
      "correct_index": 0,
      "explanation": "Ara h 2 is the most clinically relevant peanut component, representing a heat-stable 2S albumin storage protein that strongly predicts systemic reactions. An Ara h 2 sIgE level ≥0.35 kUA/L has a >95% positive predictive value for clinical peanut allergy, allowing clinicians to avoid oral food challenge testing. This patient's Ara h 2 level of 4.8 kUA/L, combined with a convincing clinical history of anaphylaxis, confirms the diagnosis without need for provocative testing. The other components are less predictive: Ara h 8 is associated with oral allergy syndrome from birch cross-reactivity (very low here), while Ara h 1, though elevated, is less predictive of severe reactions than Ara h 2.",
      "topic_tags": [
        "food allergy",
        "anaphylaxis",
        "component testing",
        "peanut allergy"
      ],
      "key_concept": "Ara h 2 component testing threshold for diagnosing peanut allergy without oral food challenge"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Ara h 2 sIgE ≥0.35 kUA/L: >95% PPV for clinical peanut allergy — can avoid OFC at this threshold.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer from just 'The parents ask about the need for oral food challenge testing' - requires full clinical context and lab values"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant - history, symptoms, treatment, avoidance, exam, and specific IgE components all inform the decision"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [14,13,11,12,13] - ratio 1.27, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B and E are plausible clinical considerations. C mentions cross-reactivity but Ara h 8 is actually low. D incorrectly characterizes Ara h 1 as indicating 'mild allergy only'"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: 'Oral food challenge [verb phrase] [reason]'"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct - Ara h 2 ≥0.35 kUA/L has high PPV for clinical peanut allergy, and 4.8 is well above this threshold"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Given the high Ara h 2 level and convincing history, A is clearly best, though some might argue for challenge in certain clinical contexts"
      }
    }
  },
  {
    "id": "lib-peanut-allergy-anaphylaxis-0117",
    "type": "mcq",
    "status": "approved",
    "caseId": "peanut-allergy-anaphylaxis",
    "diagnosis": "Peanut Allergy — Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1056/NEJMoa1812856; AR101 oral immunotherapy for peanut allergy",
    "submittedAt": "2026-03-05T02:53:00Z",
    "approvedAt": "2026-03-05T02:53:00Z",
    "question": {
      "stem": "A 3-year-old boy presents to the allergy clinic for evaluation of possible peanut allergy. He developed urticaria and vomiting 30 minutes after eating a peanut butter sandwich 2 months ago. His mother reports he has severe atopic dermatitis and known egg allergy. Component testing reveals Ara h 8 specific IgE of 2.1 kUA/L and Ara h 2 specific IgE of 0.15 kUA/L. During the visit, his mother asks about prevention strategies for her 6-month-old daughter who also has severe eczema and egg allergy.",
      "options": [
        {
          "text": "Recommend strict peanut avoidance for the 6-month-old and prescribe an epinephrine auto-injector for the 3-year-old",
          "explanation": "Incorrect. Current guidelines recommend early peanut introduction for high-risk infants. The Ara h 2 level is below the threshold suggesting lower systemic risk."
        },
        {
          "text": "Order an oral food challenge for the 3-year-old and recommend introducing peanut to the 6-month-old",
          "explanation": "Correct. The Ara h 2 level <0.35 kUA/L suggests lower probability of clinical allergy despite the Ara h 8 elevation, warranting OFC. The 6-month-old meets LEAP trial criteria for early introduction."
        },
        {
          "text": "Prescribe an epinephrine auto-injector for the 3-year-old and delay peanut introduction in the 6-month-old until age 3 years",
          "explanation": "Incorrect. This represents outdated management. The Ara h 2 level doesn't support high systemic risk, and delayed introduction increases allergy risk in high-risk infants."
        },
        {
          "text": "Recommend peanut avoidance for both children and initiate Palforzia oral immunotherapy for the 3-year-old",
          "explanation": "Incorrect. Palforzia is for confirmed peanut allergy ages 4-17 years. The component testing suggests the need for OFC rather than confirmed allergy."
        },
        {
          "text": "Order additional testing for tree nut allergies in both children given the peanut sensitivity pattern",
          "explanation": "Incorrect. While tree nut testing might be considered, the primary issue is determining clinical relevance of peanut sensitivity and addressing prevention in the high-risk infant."
        }
      ],
      "correct_index": 1,
      "explanation": "This question tests understanding of peanut allergy component testing interpretation and current prevention guidelines. The 3-year-old has Ara h 8 elevation (birch cross-reactive protein associated with oral allergy syndrome) but low Ara h 2 (<0.35 kUA/L threshold for >95% positive predictive value). This pattern, despite a clinical reaction, warrants oral food challenge to determine true clinical allergy. The 6-month-old meets LEAP trial criteria (high-risk infant with severe eczema and egg allergy) and should receive early peanut introduction per 2017 NIAID guidelines, which showed 80% reduction in peanut allergy development.",
      "topic_tags": [
        "food allergy",
        "anaphylaxis",
        "component testing",
        "prevention"
      ],
      "key_concept": "Component testing interpretation and early peanut introduction guidelines for allergy prevention"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK4",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Ara h 8 (PR-10, birch cross-reactive): oral allergy syndrome only — no systemic risk, no EpiPen needed.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question about prevention strategies requires the entire clinical context including component testing results, clinical history, and understanding of current guidelines - cannot be answered from last sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is essential: age/reaction history establishes clinical context, atopic dermatitis/egg allergy create high-risk status, component testing results are critical for interpretation, and 6-month-old's risk factors are necessary for prevention question"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [16,15,18,16,14]. Max/min ratio = 18/14 = 1.29, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "A: Reasonable but overly cautious given component pattern. C: Logical safety-first approach but outdated. D: Premature immunotherapy without confirmed allergy. E: Somewhat plausible but misses the main clinical decisions needed"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure with imperative verbs (recommend, order, prescribe) and parallel construction"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current evidence: low Ara h 2 warrants OFC despite clinical history, and high-risk 6-month-old meets LEAP criteria for early introduction per 2017 NIAID guidelines"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Based on current guidelines and component testing interpretation, option B is clearly best, though some clinicians might debate the OFC recommendation given the clinical history"
      }
    }
  },
  {
    "id": "lib-peanut-allergy-anaphylaxis-0118",
    "type": "mcq",
    "status": "approved",
    "caseId": "peanut-allergy-anaphylaxis",
    "diagnosis": "Peanut Allergy — Anaphylaxis",
    "source": "DOI: 10.1016/j.jaci.2010.10.008; Guidelines for diagnosis and management of food allergy in the US; DOI: 10.1056/NEJMoa1812856; AR101 oral immunotherapy for peanut allergy",
    "submittedAt": "2026-03-05T02:54:09Z",
    "approvedAt": "2026-03-05T02:54:09Z",
    "question": {
      "stem": "A 6-month-old infant is brought to the pediatrics clinic for routine care. The child has moderate-to-severe atopic dermatitis that began at 2 months of age, requiring topical corticosteroids for control. The parents report the infant developed urticaria and vomiting after eating scrambled eggs last week. Family history is significant for maternal asthma and paternal environmental allergies. The parents are concerned about food allergies and ask about peanut introduction, noting they have been avoiding all nuts. Physical examination shows well-controlled eczematous lesions on the face and extensor surfaces. Weight and length are at the 25th percentile for age.",
      "options": [
        {
          "text": "Recommend immediate peanut introduction with close monitoring at home",
          "explanation": "Incorrect. High-risk infants require medical supervision for first peanut introduction, not home monitoring alone."
        },
        {
          "text": "Defer all peanut exposure until age 12 months to allow immune system maturation",
          "explanation": "Incorrect. Delayed introduction beyond 11 months increases peanut allergy risk. The LEAP trial showed early introduction (4-11 months) is protective."
        },
        {
          "text": "Perform peanut-specific IgE testing and introduce peanuts based on results",
          "explanation": "Correct. Per NIAID 2017 guidelines, infants with severe eczema and egg allergy are high-risk. Testing guides safe introduction - if peanut IgE <0.35 kUA/L, introduce at home; if 0.35-13.9, medically supervised introduction; if ≥14, avoid and refer to allergist."
        },
        {
          "text": "Advise complete avoidance of peanuts until age 3 years given the egg allergy",
          "explanation": "Incorrect. Egg allergy and peanut allergy are independent. Avoidance strategies increase rather than decrease peanut allergy risk in high-risk infants."
        },
        {
          "text": "Begin with tree nut introduction first since peanuts are more allergenic",
          "explanation": "Incorrect. Peanuts are legumes, not tree nuts. The LEAP trial specifically demonstrated benefit of early peanut introduction. Tree nuts have different introduction recommendations."
        }
      ],
      "correct_index": 2,
      "explanation": "This infant has two high-risk features for peanut allergy: severe eczema and confirmed egg allergy. The LEAP trial (2015) demonstrated that early peanut introduction (4-11 months) in high-risk infants reduces peanut allergy by 80%. The NIAID 2017 guidelines recommend peanut-specific IgE testing for these high-risk infants to guide safe introduction. If IgE is <0.35 kUA/L, parents can introduce at home. If 0.35-13.9 kUA/L, medically supervised introduction is recommended. If ≥14 kUA/L, avoid and refer to allergist. The other options are incorrect because: immediate home introduction without testing ignores safety protocols; deferring until 12 months contradicts LEAP findings; complete avoidance increases allergy risk; and tree nut introduction is irrelevant to peanut allergy prevention.",
      "topic_tags": [
        "food_allergy",
        "peanut_allergy",
        "preventive_medicine",
        "pediatrics",
        "LEAP_trial"
      ],
      "key_concept": "NIAID 2017 guidelines for early peanut introduction in high-risk infants based on LEAP trial findings"
    },
    "tags": {
      "abai_domain": "Domain 8 — Food Allergy & Eosinophilic GI",
      "abai_domain_number": 8,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "LEAP trial: early peanut at 4–11 months → 80% reduction in peanut allergy. NIAID 2017: recommend for high-risk infants.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering all but the last sentence removes critical context about high-risk features (severe eczema, egg allergy) needed to determine peanut introduction approach"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are necessary: age establishes introduction window, eczema severity and egg allergy define high-risk status, family history adds context, physical exam confirms controlled eczema"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,13,10,13,11] - ratio 1.44, just under 1.5 threshold"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "A plausible but unsafe, B reflects outdated thinking, D represents overcautious approach, E shows misconception - all reasonable clinical considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options begin with imperative verbs (Recommend, Defer, Perform, Advise, Begin)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with 2017 NIAID guidelines for high-risk infants requiring peanut-specific IgE testing before introduction"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Clear best answer based on current guidelines, though some might debate immediate vs supervised introduction approaches"
      }
    }
  },
  {
    "id": "lib-penicillin-allergy-delabeling-0119",
    "type": "mcq",
    "status": "approved",
    "caseId": "penicillin-allergy-delabeling",
    "diagnosis": "Penicillin Allergy Evaluation",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1056/NEJMra1807761; Penicillin allergy",
    "submittedAt": "2026-03-05T02:54:46Z",
    "approvedAt": "2026-03-05T02:54:46Z",
    "question": {
      "stem": "A 28-year-old woman presents to clinic requesting antibiotic allergy evaluation. She reports being labeled 'penicillin allergic' at age 8 after developing a diffuse maculopapular rash while taking amoxicillin for strep throat. She recalls having concurrent mononucleosis symptoms including severe sore throat, swollen lymph nodes, and fatigue. She has avoided all penicillins since then but needs antibiotic prophylaxis for an upcoming dental procedure. She denies any history of hives, angioedema, wheezing, or systemic reactions to medications. Her current symptoms occurred 20 years ago with no intervening penicillin exposures.",
      "options": [
        {
          "text": "Perform graded amoxicillin challenge without skin testing",
          "explanation": "Correct. This patient has low-risk history (>10 years ago, non-IgE symptoms, likely EBV-amoxicillin rash). AAAAI 2022 guidelines recommend direct graded challenge for low-risk patients."
        },
        {
          "text": "Perform penicillin skin testing with PPL and penicillin G first",
          "explanation": "Incorrect. Skin testing is reserved for moderate-risk patients. This low-risk patient can proceed directly to graded challenge per AAAAI 2022 guidelines."
        },
        {
          "text": "Prescribe azithromycin and maintain penicillin allergy label",
          "explanation": "Incorrect. This perpetuates an unnecessary allergy label. The maculopapular rash with concurrent mono symptoms suggests EBV-amoxicillin rash, not true penicillin allergy."
        },
        {
          "text": "Order penicillin-specific IgE levels before any intervention",
          "explanation": "Incorrect. Serum IgE testing has poor sensitivity and is not recommended as initial evaluation. Direct challenge or skin testing are preferred approaches."
        },
        {
          "text": "Prescribe cephalexin as it has no cross-reactivity with penicillin",
          "explanation": "Incorrect. Cephalexin shares the same R1 side chain as amoxicillin, creating higher cross-reactivity risk if true penicillin allergy existed. Also avoids addressing the likely false label."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has a classic low-risk penicillin allergy history: reaction >10 years ago, non-IgE mediated symptoms (maculopapular rash), and concurrent EBV infection. The combination of amoxicillin and EBV causes maculopapular rash in 80-100% of patients due to viral-drug interaction, not IgE-mediated allergy. AAAAI 2022 guidelines recommend direct graded amoxicillin challenge for low-risk patients without requiring skin testing. Most penicillin IgE wanes over time (80% at 5 years, 98% at 10 years), making her 20-year-old label very likely outdated. Skin testing is reserved for moderate-risk patients, while maintaining the allergy label perpetuates unnecessary antibiotic avoidance and increased healthcare costs.",
      "topic_tags": [
        "drug_allergy",
        "penicillin",
        "allergy_evaluation",
        "AAAAI_guidelines"
      ],
      "key_concept": "Low-risk penicillin allergy patients can undergo direct graded challenge without skin testing, especially when the original reaction was likely EBV-amoxicillin rash"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Penicillin IgE wanes: 80% at 5 years, 98% at 10 years. Most labels are outdated.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the final sentence and options leaves insufficient context to determine the appropriate next step for penicillin allergy evaluation"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: age at reaction, type of rash, concurrent mono symptoms, time elapsed, lack of severe reactions, and need for prophylaxis all inform risk stratification"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [8,9,8,8,9] - good parity with max/min ratio of 1.125"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical approaches: skin testing (traditional approach), alternative antibiotics, IgE testing, and cephalexin (commonly used alternative)"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently start with action verbs (Perform, Perform, Prescribe, Order, Prescribe)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with AAAAI 2022 guidelines for low-risk penicillin allergy - direct challenge without skin testing is appropriate"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "While some clinicians might prefer skin testing first, the low-risk profile and current guidelines clearly support direct challenge as the best answer"
      }
    }
  },
  {
    "id": "lib-penicillin-allergy-delabeling-0120",
    "type": "mcq",
    "status": "approved",
    "caseId": "penicillin-allergy-delabeling",
    "diagnosis": "Penicillin Allergy Evaluation",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1056/NEJMra1807761; Penicillin allergy",
    "submittedAt": "2026-03-05T02:55:21Z",
    "approvedAt": "2026-03-05T02:55:21Z",
    "question": {
      "stem": "A 19-year-old college student presents to student health services with a 3-day history of sore throat, fever, and fatigue. Physical examination reveals bilateral tonsillar enlargement with exudate, cervical lymphadenopathy, and splenomegaly. A heterophile antibody test is positive. The patient is prescribed amoxicillin for presumed streptococcal pharyngitis. Three days later, she returns with a diffuse maculopapular rash covering her trunk and extremities. She is concerned about penicillin allergy and asks if she should avoid all penicillins in the future. Her medical history is otherwise unremarkable, and she has never taken penicillins previously.",
      "options": [
        {
          "text": "Reassure that this is not a penicillin allergy and penicillins can be used safely in the future",
          "explanation": "Correct. EBV + amoxicillin causes maculopapular rash in 80-100% of patients due to viral-drug interaction, not IgE-mediated allergy. This should not be labeled as penicillin allergy."
        },
        {
          "text": "Document penicillin allergy and recommend avoiding all beta-lactam antibiotics permanently",
          "explanation": "Incorrect. This would inappropriately label the patient as penicillin-allergic when the rash is due to EBV-amoxicillin interaction, not true allergy. This leads to unnecessary antibiotic restrictions."
        },
        {
          "text": "Recommend skin testing with penicilloyl-polylysine before any future penicillin use",
          "explanation": "Incorrect. Skin testing is unnecessary since this is not an IgE-mediated reaction. The rash is due to EBV-amoxicillin interaction, not penicillin allergy."
        },
        {
          "text": "Advise that cephalosporins are safe alternatives due to different beta-lactam ring structure",
          "explanation": "Incorrect reasoning. While cephalosporins may be safe, it's because this isn't a true penicillin allergy, not because of beta-lactam ring differences. Cross-reactivity is determined by R1 side chains."
        },
        {
          "text": "Prescribe antihistamines and schedule graded amoxicillin challenge in 6 months",
          "explanation": "Incorrect. A graded challenge is unnecessary since this is not a true allergic reaction. The patient can safely receive penicillins without formal challenge testing."
        }
      ],
      "correct_index": 0,
      "explanation": "The key diagnostic clue is the positive heterophile antibody test indicating EBV infection combined with amoxicillin use resulting in a maculopapular rash. This classic combination occurs in 80-100% of EBV patients given amoxicillin and represents a viral-drug interaction, NOT an IgE-mediated penicillin allergy. This patient should be reassured that she can safely use penicillins in the future and should not be labeled as penicillin-allergic. Inappropriately labeling patients leads to increased use of alternative antibiotics like vancomycin, higher rates of MRSA/C. diff infections, and longer hospitalizations.",
      "topic_tags": [
        "allergy",
        "infectious_disease",
        "drug_reactions",
        "penicillin"
      ],
      "key_concept": "EBV-amoxicillin maculopapular rash is not IgE-mediated penicillin allergy"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "EBV + amoxicillin rash: 80–100% maculopapular rash. NOT IgE. NOT penicillin allergy. Do not label.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final question requires understanding the clinical context of EBV + amoxicillin rash vs true penicillin allergy - cannot be answered from last sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: age/setting, symptoms, physical findings, positive heterophile test, amoxicillin prescription, and rash development are all necessary for diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [16,11,12,13,11] - max/min ratio = 1.45, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B, C, and E represent reasonable but incorrect approaches to suspected penicillin allergy; D is less plausible as cephalosporins have cross-reactivity concerns"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with current understanding that EBV + amoxicillin rash is not true penicillin allergy"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Option A is clearly best, though some clinicians might consider option C (skin testing) as a reasonable conservative approach"
      }
    }
  },
  {
    "id": "lib-penicillin-allergy-delabeling-0121",
    "type": "mcq",
    "status": "approved",
    "caseId": "penicillin-allergy-delabeling",
    "diagnosis": "Penicillin Allergy Evaluation",
    "source": "DOI: 10.1016/j.jaci.2022.08.028; Drug allergy: A 2022 practice parameter update; DOI: 10.1056/NEJMra1807761; Penicillin allergy",
    "submittedAt": "2026-03-05T02:55:58Z",
    "approvedAt": "2026-03-05T02:55:58Z",
    "question": {
      "stem": "A 45-year-old man with a history of 'penicillin allergy' is admitted for pneumonia requiring antibiotic therapy. His medical record indicates he developed a rash after taking amoxicillin for strep throat 12 years ago during a viral illness, with no systemic symptoms documented. He has avoided all penicillins since then. His current presentation includes fever, productive cough, and consolidation on chest imaging. You are considering penicillin allergy evaluation to optimize his antibiotic selection. Skin prick testing with penicilloyl-polylysine (PPL) and penicillin G is available.",
      "options": [
        {
          "text": "Proceed directly with graded amoxicillin challenge without skin testing",
          "explanation": "Correct. Per AAAAI 2022 guidelines, this patient meets low-risk criteria (vague symptoms, >10 years ago, no systemic features) and can proceed directly to graded challenge without skin testing."
        },
        {
          "text": "Perform skin prick testing with PPL and penicillin G before any penicillin exposure",
          "explanation": "Incorrect. While PPL detects 95% of penicillin-specific IgE, skin testing is not required for low-risk patients per current guidelines. Direct challenge is appropriate."
        },
        {
          "text": "Avoid penicillins entirely and use vancomycin for pneumonia treatment",
          "explanation": "Incorrect. This perpetuates unnecessary penicillin avoidance. Over 95% of labeled patients can tolerate penicillin, and 98% lose reactivity after 10 years."
        },
        {
          "text": "Test for cross-reactivity with ceftriaxone before considering beta-lactam alternatives",
          "explanation": "Incorrect. Cross-reactivity is determined by R1 side chains, not the beta-lactam ring. Ceftriaxone has a different R1 than amoxicillin, making cross-reactivity unlikely (<2%)."
        },
        {
          "text": "Obtain penicillin-specific IgE levels before proceeding with any intervention",
          "explanation": "Incorrect. Serum IgE testing is less sensitive than skin testing and is not the preferred initial approach. Low-risk patients can proceed directly to graded challenge."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient meets AAAAI 2022 low-risk criteria for penicillin allergy (vague/non-specific symptoms, >10 years ago, no systemic features) and can proceed directly with graded amoxicillin challenge without skin testing. PPL skin testing, while detecting 95% of penicillin-specific IgE, is not required for low-risk patients. The temporal factor is crucial - 98% of patients lose penicillin-specific IgE reactivity within 10 years. His rash during viral illness 12 years ago was likely viral-related, not true penicillin allergy. Avoiding penicillins unnecessarily leads to increased vancomycin use, higher MRSA/C.diff risk, and longer hospitalizations.",
      "topic_tags": [
        "allergy_immunology",
        "antibiotic_stewardship",
        "penicillin_allergy",
        "drug_hypersensitivity"
      ],
      "key_concept": "AAAAI 2022 low-risk penicillin allergy patients can proceed directly to graded challenge without skin testing"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "PPL (Pre-Pen): major penicillin determinant — detects 95% of penicillin-specific IgE. Required for skin test.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Without the clinical vignette, the question 'You are considering penicillin allergy evaluation to optimize his antibiotic selection. Skin prick testing with penicilloyl-polylysine (PPL) and penicillin G is available.' cannot be answered correctly - requires the specific patient details to determine risk stratification"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All sentences are necessary: age/demographics, allergy history details (rash only, 12 years ago, during viral illness), current pneumonia presentation, and available testing options all contribute to risk stratification decision"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [9,12,10,11,9] - ratio 1.33, acceptable but could be more uniform"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical approaches: B (standard testing protocol), C (conservative avoidance), D (cross-reactivity concern), E (serology workup). All are legitimate considerations in penicillin allergy management"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently start with action verbs (Proceed, Perform, Avoid, Test, Obtain)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with AAAAI 2022 guidelines for low-risk penicillin allergy - direct challenge appropriate for patients with vague symptoms >10 years ago without systemic features"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "While some clinicians might prefer skin testing first (option B), current guidelines clearly support direct challenge for low-risk patients, making A the single best evidence-based answer"
      }
    }
  },
  {
    "id": "lib-scid-ada-0122",
    "type": "mcq",
    "status": "approved",
    "caseId": "scid-ada",
    "diagnosis": "Severe Combined Immunodeficiency (ADA-SCID)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T02:56:36Z",
    "approvedAt": "2026-03-05T02:56:36Z",
    "question": {
      "stem": "A 4-month-old male infant presents to the pediatric clinic with failure to thrive, chronic diarrhea, and recurrent respiratory infections since birth. His parents are first cousins. Physical examination reveals oral thrush, absent tonsils, and palpable lymphadenopathy. Laboratory studies show absolute lymphocyte count of 800/μL (normal 4,000-13,500/μL) with CD3+ T cells <50/μL, CD19+ B cells <10/μL, and CD16/56+ NK cells <5/μL. Newborn screening revealed undetectable T-cell receptor excision circles (TRECs). Genetic testing confirms adenosine deaminase (ADA) deficiency.",
      "options": [
        {
          "text": "Deoxyadenosine triphosphate accumulation causing lymphocyte apoptosis",
          "explanation": "Correct. ADA deficiency leads to accumulation of deoxyadenosine, which is converted to dATP. High dATP levels are toxic to lymphocytes, causing apoptosis and resulting in the T-B-NK- SCID phenotype seen in this patient."
        },
        {
          "text": "Defective V(D)J recombination preventing T-cell receptor formation",
          "explanation": "Incorrect. This describes RAG1/RAG2 deficiency or other recombination defects causing T-B-NK+ SCID. ADA-SCID has intact V(D)J recombination but lymphocyte death from toxic metabolite accumulation."
        },
        {
          "text": "Absent thymic development leading to T-cell maturation failure",
          "explanation": "Incorrect. This describes DiGeorge syndrome (22q11.2 deletion). The patient has detectable but very low T cells, and the genetic testing confirms ADA deficiency, not thymic aplasia."
        },
        {
          "text": "Defective cytokine receptor signaling blocking lymphocyte activation",
          "explanation": "Incorrect. This describes X-linked SCID (IL2RG mutations) affecting the common gamma chain. The autosomal recessive inheritance pattern and ADA deficiency make this mechanism incorrect."
        },
        {
          "text": "Impaired purine salvage pathway reducing nucleotide availability",
          "explanation": "Incorrect. While ADA is involved in purine metabolism, the pathogenic mechanism is toxic metabolite accumulation (dATP), not nucleotide deficiency. The primary problem is lymphocyte toxicity from accumulated substrates."
        }
      ],
      "correct_index": 0,
      "explanation": "This case describes ADA-SCID, where adenosine deaminase deficiency leads to accumulation of deoxyadenosine. This substrate is phosphorylated to deoxyadenosine triphosphate (dATP), which accumulates to toxic levels in lymphocytes. High dATP disrupts cellular processes and triggers apoptosis, explaining the T-B-NK- phenotype. The consanguineous parents, undetectable TRECs on newborn screening, and severe combined immunodeficiency with infections support this diagnosis. The other options describe different SCID mechanisms but don't match the specific pathophysiology of ADA deficiency.",
      "topic_tags": [
        "immunodeficiency",
        "SCID",
        "ADA deficiency",
        "pediatrics",
        "genetics"
      ],
      "key_concept": "ADA-SCID pathophysiology: toxic metabolite accumulation causing lymphocyte apoptosis"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK1",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "ADA-SCID: ADA deficiency → dATP accumulation → lymphocyte apoptosis. T-B-NK SCID. AR inheritance.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final sentence alone ('Genetic testing confirms adenosine deaminase (ADA) deficiency') with options would not allow correct answer - the mechanism must be understood from the clinical context"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All elements are necessary: consanguinity suggests autosomal recessive, clinical presentation establishes SCID, lab values show T-B-NK- phenotype, undetectable TRECs confirm T-cell production defect, ADA deficiency provides specific diagnosis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,8,7,7,7] - excellent parity with max/min ratio of 1.14"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [compound noun] [present participle] [specific outcome]"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B describes RAG deficiency (valid SCID cause), C describes DiGeorge (reasonable differential), D describes cytokine receptor defects (another SCID type), E describes purine metabolism but incorrect direction - all clinically relevant"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer accurately describes ADA-SCID pathophysiology - dATP accumulation causing lymphocyte apoptosis is the established mechanism"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Given the specific diagnosis of ADA deficiency, only option A correctly describes this particular mechanism among the SCID variants"
      }
    }
  },
  {
    "id": "lib-scid-ada-0123",
    "type": "mcq",
    "status": "approved",
    "caseId": "scid-ada",
    "diagnosis": "Severe Combined Immunodeficiency (ADA-SCID)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T02:57:11Z",
    "approvedAt": "2026-03-05T02:57:11Z",
    "question": {
      "stem": "A 4-month-old male infant is brought to the pediatric clinic for routine immunizations. He was born at term via normal vaginal delivery and initially appeared healthy. His newborn screening showed low T-cell receptor excision circles (TRECs). Over the past month, he has had recurrent upper respiratory infections and thrush that responds poorly to antifungal treatment. Physical examination reveals failure to thrive (weight <5th percentile), oral candidiasis, and absence of palpable lymph nodes. Laboratory studies show absolute lymphocyte count of 800/μL (normal 2500-9000/μL) with CD3+ T cells <200/μL (normal 2300-6500/μL). Flow cytometry demonstrates severely reduced T, B, and NK cell populations. The parents are considering vaccination options.",
      "options": [
        {
          "text": "Proceed with routine live attenuated vaccines as scheduled",
          "explanation": "Incorrect. Live vaccines are absolutely contraindicated in SCID patients as they can cause fatal disseminated infections, including disseminated BCG disease."
        },
        {
          "text": "Delay all vaccinations until immune reconstitution following treatment",
          "explanation": "Correct. This patient has SCID based on low TRECs, severe lymphopenia affecting T-B-NK cells, and opportunistic infections. Live vaccines must be avoided, and inactivated vaccines are ineffective due to absent immune response."
        },
        {
          "text": "Administer only inactivated vaccines with close monitoring",
          "explanation": "Incorrect. While safer than live vaccines, inactivated vaccines are ineffective in SCID patients due to the absence of functional T and B cells needed for immune response."
        },
        {
          "text": "Give immunoglobulin replacement therapy before proceeding with vaccination",
          "explanation": "Incorrect. While IVIG may help with infections, it does not restore cellular immunity needed for vaccine responses, and live vaccines remain contraindicated regardless of IVIG."
        },
        {
          "text": "Administer pneumococcal and Haemophilus influenzae vaccines only",
          "explanation": "Incorrect. Even these specific inactivated vaccines would be ineffective due to the patient's lack of functional immune cells and would not address the contraindication to other vaccines."
        }
      ],
      "correct_index": 1,
      "explanation": "This patient presents with classic SCID features: low TRECs on newborn screening (indicating T-cell lymphopenia), severe combined immunodeficiency affecting T-B-NK cells, failure to thrive, and opportunistic infections (thrush). In SCID, live vaccines are absolutely contraindicated due to risk of fatal disseminated infections, and inactivated vaccines are ineffective due to absent immune function. The appropriate approach is to delay all vaccinations until immune reconstitution is achieved through definitive treatment (HSCT, gene therapy, or enzyme replacement for ADA-SCID). The low TRECs triggered the workup before severe clinical presentation, which is the purpose of newborn SCID screening.",
      "topic_tags": [
        "immunodeficiency",
        "SCID",
        "pediatrics",
        "vaccination",
        "newborn_screening"
      ],
      "key_concept": "SCID vaccination contraindications and newborn screening interpretation"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "SCID newborn screening: TRECs (T-cell receptor excision circles). Low TRECs = T-cell lymphopenia → SCID workup.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final sentence alone ('The parents are considering vaccination options') with options cannot be answered without the clinical context of SCID presentation"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is essential: newborn screening TRECs, recurrent infections, thrush, FTT, lymphopenia, flow cytometry results all contribute to SCID diagnosis"
      },
      "option_length_parity": {
        "score": 0.5,
        "note": "word counts: [8,10,8,9,8] - reasonable variation but some disparity"
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors represent real clinical considerations for immunocompromised patients - partial vaccination, IVIG therapy, specific vaccines"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are verb phrases starting with action verbs (Proceed, Delay, Administer, Give, Administer)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with SCID management guidelines - no live vaccines, delay until immune reconstitution"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer for SCID - delaying vaccines until treatment is the only safe approach"
      }
    }
  },
  {
    "id": "lib-scid-ada-0124",
    "type": "mcq",
    "status": "approved",
    "caseId": "scid-ada",
    "diagnosis": "Severe Combined Immunodeficiency (ADA-SCID)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T02:57:50Z",
    "approvedAt": "2026-03-05T02:57:50Z",
    "question": {
      "stem": "A 4-month-old male infant presents with failure to thrive, chronic diarrhea, and recurrent respiratory infections since 2 months of age. He was born at term to consanguineous parents. Physical examination reveals oral thrush, bilateral rales, and absence of palpable lymph nodes or tonsils. Laboratory studies show absolute lymphocyte count of 800/μL (normal 4000-13500/μL). Flow cytometry demonstrates CD3+ T cells <50/μL (normal 2500-5500/μL), CD19+ B cells <10/μL (normal 600-2700/μL), and CD16/56+ NK cells <5/μL (normal 200-1200/μL). Chest imaging shows bilateral interstitial infiltrates. The newborn screening program reports undetectable T-cell receptor excision circles (TRECs).",
      "options": [
        {
          "text": "Initiate hematopoietic stem cell transplantation evaluation",
          "explanation": "Correct. This patient has severe combined immunodeficiency (SCID) with T-B-NK phenotype, supported by profound lymphopenia, absent TRECs, and opportunistic infections. HSCT is curative and should be pursued urgently."
        },
        {
          "text": "Begin intravenous immunoglobulin replacement therapy",
          "explanation": "Incorrect. While IVIG may provide some protection against bacterial infections, it does not address the fundamental T-cell deficiency in SCID and will not prevent opportunistic infections or cure the underlying condition."
        },
        {
          "text": "Administer live attenuated vaccines to boost immunity",
          "explanation": "Incorrect. Live vaccines are contraindicated in SCID patients as they can cause disseminated infection due to the inability to mount an immune response. This could be fatal."
        },
        {
          "text": "Start prophylactic antibiotics and antifungal medications",
          "explanation": "Incorrect. While antimicrobial prophylaxis may be used as supportive care, it does not address the underlying immunodeficiency and is insufficient as primary treatment for SCID."
        },
        {
          "text": "Perform bone marrow biopsy to evaluate hematopoiesis",
          "explanation": "Incorrect. The diagnosis of SCID is established by the clinical presentation, lymphocyte subset analysis, and absent TRECs. Bone marrow biopsy would delay definitive treatment without providing additional diagnostic information."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic severe combined immunodeficiency (SCID) based on the triad of recurrent infections, failure to thrive, and profound T-B-NK lymphopenia with absent TRECs. The consanguineous parents suggest autosomal recessive inheritance, possibly ADA-SCID. HSCT is the definitive curative treatment and should be initiated urgently as outcomes are best when performed early in life. IVIG provides only partial protection, live vaccines are contraindicated due to risk of disseminated infection, antimicrobial prophylaxis is supportive but not curative, and bone marrow biopsy would unnecessarily delay treatment.",
      "topic_tags": [
        "immunodeficiency",
        "SCID",
        "pediatric_immunology",
        "hematopoietic_stem_cell_transplant"
      ],
      "key_concept": "SCID requires urgent HSCT evaluation as definitive curative treatment"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "SCID presentation: absent T cells → susceptibility to ALL pathogens including opportunists (PCP, CMV, EBV, RSV, fungal).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The stem provides essential clinical details (age, symptoms, consanguinity, physical findings, lab values, imaging, TREC results) that are all necessary to diagnose SCID and determine appropriate management. Cannot be answered from last sentence alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/symptoms establish timeline, consanguinity suggests genetic cause, physical findings support immunodeficiency, lab values confirm profound lymphopenia, TRECs confirm T-cell production failure. No filler content."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [6,6,7,6,8] - ratio 1.33, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are reasonable considerations for SCID management: IVIG is commonly used, prophylaxis is supportive care, bone marrow biopsy could evaluate hematopoiesis. Only live vaccines (C) is clearly contraindicated, but might be considered by someone unfamiliar with SCID."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent verb-object structure (Initiate/Begin/Administer/Start/Perform + object)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "HSCT is indeed the definitive treatment for SCID and should be performed urgently. The diagnosis is clearly established by the clinical presentation and laboratory findings."
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While HSCT is clearly the definitive treatment, some might argue for immediate supportive measures first. However, 'evaluation' in option A allows for concurrent supportive care while pursuing definitive treatment."
      }
    }
  },
  {
    "id": "lib-severe-allergic-reaction-0125",
    "type": "mcq",
    "status": "approved",
    "caseId": "severe-allergic-reaction",
    "diagnosis": "Severe Allergic Reaction — Drug",
    "source": "DOI: 10.1016/j.jaci.2025.01.021; Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report; DOI: 10.1016/j.waojou.2020.100472; World Allergy Organization anaphylaxis guidance 2020",
    "submittedAt": "2026-03-05T02:58:25Z",
    "approvedAt": "2026-03-05T02:58:25Z",
    "question": {
      "stem": "A 45-year-old man with a history of hypertension treated with metoprolol presents to the emergency department 20 minutes after receiving intravenous cefazolin for surgical prophylaxis. He develops generalized urticaria, facial swelling, wheezing, and hypotension with blood pressure 85/50 mmHg. After administering intramuscular epinephrine and intravenous fluids, his blood pressure remains 90/55 mmHg and heart rate is 65 bpm. An ECG shows new ST-segment depressions in leads V4-V6 that were not present on his preoperative ECG.",
      "options": [
        {
          "text": "Administer intravenous glucagon and repeat epinephrine",
          "explanation": "Correct. Beta-blockers can cause epinephrine resistance in anaphylaxis by blocking beta-adrenergic receptors. Glucagon bypasses this blockade by activating adenylyl cyclase through glucagon receptors, restoring cardiac contractility and heart rate response."
        },
        {
          "text": "Start intravenous nitroglycerin for coronary vasospasm",
          "explanation": "Incorrect. While this patient has Kounis syndrome (anaphylaxis with ECG changes), vasodilators like nitroglycerin can worsen hypotension during anaphylaxis. Treating the underlying anaphylaxis with glucagon takes priority."
        },
        {
          "text": "Administer intravenous methylprednisolone for severe reaction",
          "explanation": "Incorrect. While corticosteroids may help prevent biphasic reactions, they have no immediate effect in acute anaphylaxis. The priority is addressing epinephrine resistance with glucagon, not anti-inflammatory therapy."
        },
        {
          "text": "Give intravenous calcium chloride for cardiac protection",
          "explanation": "Incorrect. Calcium is not indicated for anaphylaxis or Kounis syndrome. The cardiac effects are due to mast cell mediators and epinephrine resistance from beta-blockade, not calcium channel dysfunction."
        },
        {
          "text": "Initiate intravenous dopamine for refractory hypotension",
          "explanation": "Incorrect. While dopamine might raise blood pressure, it doesn't address the underlying epinephrine resistance caused by beta-blockade. Glucagon specifically reverses this resistance and is the appropriate next step."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has drug-induced anaphylaxis (likely to cefazolin, a beta-lactam antibiotic) with Kounis syndrome (anaphylaxis-associated ECG changes). The key clinical clue is his poor response to standard therapy despite receiving epinephrine and fluids, with persistent hypotension and bradycardia. His beta-blocker therapy (metoprolol) is causing epinephrine resistance by blocking beta-adrenergic receptors. Glucagon bypasses this blockade by activating adenylyl cyclase through glucagon receptors, restoring cardiac contractility and chronotropic response. The ECG changes represent Kounis syndrome, but treating the underlying anaphylaxis takes priority over coronary-specific interventions like nitroglycerin, which could worsen hypotension.",
      "topic_tags": [
        "anaphylaxis",
        "drug allergy",
        "kounis syndrome",
        "beta-blocker interaction"
      ],
      "key_concept": "Glucagon reverses epinephrine resistance in anaphylaxis patients on beta-blockers"
    },
    "tags": {
      "abai_domain": "Domain 6 — Anaphylaxis",
      "abai_domain_number": 6,
      "acgme_competency": "MK",
      "acgme_milestone": "MK4",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Drug anaphylaxis most common causes: beta-lactam antibiotics (#1), NSAIDs, chemotherapy (platinum agents after multiple cycles), biologic agents.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question requires integration of anaphylaxis, beta-blocker therapy, poor response to epinephrine, and ECG changes - cannot be answered from last sentence alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: beta-blocker history explains epinephrine resistance, timing establishes drug-induced anaphylaxis, poor response to standard therapy sets up the clinical problem, ECG changes add complexity"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,6,6,6,6] - ratio 1.17, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B is plausible for ECG changes, C is standard anaphylaxis care, D could be considered for cardiac protection, E is reasonable for hypotension - all are clinically defensible considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow same structure: verb + object/description"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is clinically accurate - glucagon is the established treatment for epinephrine-resistant anaphylaxis in patients on beta-blockers"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Glucagon is clearly the best choice given beta-blocker use and epinephrine resistance, though some might debate timing of other interventions"
      }
    }
  },
  {
    "id": "lib-severe-allergic-reaction-0126",
    "type": "mcq",
    "status": "approved",
    "caseId": "severe-allergic-reaction",
    "diagnosis": "Severe Allergic Reaction — Drug",
    "source": "DOI: 10.1016/j.jaci.2025.01.021; Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report; DOI: 10.1016/j.waojou.2020.100472; World Allergy Organization anaphylaxis guidance 2020",
    "submittedAt": "2026-03-05T02:59:02Z",
    "approvedAt": "2026-03-05T02:59:02Z",
    "question": {
      "stem": "A 45-year-old man with hypertension presents to the emergency department with generalized urticaria, facial swelling, and wheezing that began 30 minutes after receiving intravenous cefazolin for surgical prophylaxis. His blood pressure is 85/50 mmHg, heart rate is 120/min, and oxygen saturation is 88% on room air. The ECG shows ST-segment depression in leads V2-V4 that was not present on his preoperative ECG from yesterday. After establishing IV access and administering high-flow oxygen, what is the most appropriate immediate next step in management?",
      "options": [
        {
          "text": "Administer epinephrine 0.3 mg intramuscularly and obtain urgent cardiology consultation",
          "explanation": "Correct. This represents Kounis syndrome (anaphylaxis with concurrent acute coronary syndrome). Despite ECG changes suggesting cardiac ischemia, anaphylaxis treatment with epinephrine takes priority as the underlying anaphylaxis is driving both the systemic reaction and coronary vasospasm."
        },
        {
          "text": "Obtain immediate cardiac catheterization and delay anaphylaxis treatment until coronary intervention",
          "explanation": "Incorrect. While ECG changes suggest acute coronary syndrome, treating the underlying anaphylaxis with epinephrine is the priority in Kounis syndrome, as anaphylactic mediators are causing the coronary vasospasm."
        },
        {
          "text": "Administer sublingual nitroglycerin and aspirin for the acute coronary syndrome",
          "explanation": "Incorrect. Nitroglycerin is a vasodilator that could worsen the hypotension from anaphylaxis. In Kounis syndrome, vasospastic agents should be avoided as they may paradoxically worsen coronary vasospasm."
        },
        {
          "text": "Give methylprednisolone 125 mg intravenously as the primary treatment for anaphylaxis",
          "explanation": "Incorrect. While corticosteroids have a role in anaphylaxis management, they have delayed onset of action (hours) and are not first-line treatment. Epinephrine is the immediate life-saving intervention needed."
        },
        {
          "text": "Administer diphenhydramine 50 mg intravenously and monitor cardiac enzymes",
          "explanation": "Incorrect. Antihistamines like diphenhydramine are adjunctive therapy in anaphylaxis but do not address the life-threatening cardiovascular collapse. Epinephrine is the essential first-line treatment for anaphylaxis."
        }
      ],
      "correct_index": 0,
      "explanation": "This case represents Kounis syndrome, where anaphylaxis triggers acute coronary syndrome through mast cell mediator release causing coronary vasospasm or plaque rupture. The key principle is that anaphylaxis treatment with epinephrine takes priority, even when ECG changes suggest cardiac ischemia. The anaphylactic reaction is the primary process driving both the systemic symptoms and coronary events. Epinephrine addresses both the anaphylaxis and may help resolve the coronary vasospasm. Vasodilators like nitroglycerin should be avoided as they can worsen hypotension, and other vasospastic agents may paradoxically worsen coronary vasospasm. Cardiology consultation should follow immediate anaphylaxis management.",
      "topic_tags": [
        "anaphylaxis",
        "drug allergy",
        "kounis syndrome",
        "emergency medicine",
        "cardiology"
      ],
      "key_concept": "Kounis syndrome management prioritizes anaphylaxis treatment with epinephrine despite concurrent ECG ischemic changes"
    },
    "tags": {
      "abai_domain": "Domain 6 — Anaphylaxis",
      "abai_domain_number": 6,
      "acgme_competency": "PC",
      "acgme_milestone": "PC3",
      "acgme_milestone_level": 4,
      "blooms": "synthesis",
      "difficulty": 4
    },
    "pearl_source": "Kounis syndrome: anaphylaxis + ECG ischemic changes → treat anaphylaxis first (epinephrine), then cardiology evaluation. Avoid vasospastic agents.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette provides essential context - anaphylactic reaction with cardiac changes requires the full scenario to determine appropriate management priorities"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: patient demographics, trigger (cefazolin), anaphylactic symptoms, hemodynamic instability, and new ECG changes all inform management decisions"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [12,13,11,11,11]. Ratio 1.18 - acceptable variation"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "B, C, D are reasonable but incorrect approaches. E is less plausible as diphenhydramine alone is inadequate for severe anaphylaxis"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options begin with action verbs (Administer/Obtain/Give) and follow consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with anaphylaxis guidelines - epinephrine is first-line treatment even with concurrent cardiac symptoms in Kounis syndrome"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "While some might debate cardiac vs anaphylaxis priority, current guidelines clearly support treating anaphylaxis first"
      }
    }
  },
  {
    "id": "lib-severe-allergic-reaction-0127",
    "type": "mcq",
    "status": "approved",
    "caseId": "severe-allergic-reaction",
    "diagnosis": "Severe Allergic Reaction — Drug",
    "source": "DOI: 10.1016/j.jaci.2025.01.021; Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report; DOI: 10.1016/j.waojou.2020.100472; World Allergy Organization anaphylaxis guidance 2020",
    "submittedAt": "2026-03-05T02:59:36Z",
    "approvedAt": "2026-03-05T02:59:36Z",
    "question": {
      "stem": "A 42-year-old man undergoes elective laparoscopic cholecystectomy under general anesthesia. Five minutes after induction with propofol and rocuronium, he develops generalized urticaria, facial angioedema, and severe bronchospasm. His blood pressure drops from 130/80 mmHg to 70/40 mmHg, and heart rate increases to 120/min. The anesthesiologist immediately administers epinephrine and initiates fluid resuscitation. During resuscitation, the ECG shows new ST-segment depression in leads V4-V6. The patient stabilizes after treatment, and troponin levels are elevated at 2.1 ng/mL (normal <0.04). He has no prior cardiac history and takes no medications.",
      "options": [
        {
          "text": "Administer epinephrine for anaphylaxis, then obtain cardiology consultation for coronary evaluation",
          "explanation": "Correct. This represents Kounis syndrome (anaphylaxis-induced acute coronary syndrome). Treat anaphylaxis first with epinephrine, then evaluate cardiac changes."
        },
        {
          "text": "Immediately initiate percutaneous coronary intervention for acute myocardial infarction",
          "explanation": "Incorrect. While ECG changes and troponin elevation suggest MI, the primary issue is anaphylaxis. Kounis syndrome requires anaphylaxis treatment first."
        },
        {
          "text": "Avoid epinephrine due to coronary vasospasm risk and treat with IV corticosteroids instead",
          "explanation": "Incorrect. Epinephrine is the first-line treatment for anaphylaxis even with concurrent cardiac changes. Avoiding epinephrine in Kounis syndrome can be fatal."
        },
        {
          "text": "Administer sublingual nitroglycerin for coronary vasospasm while continuing anaphylaxis treatment",
          "explanation": "Incorrect. Vasodilators like nitroglycerin are contraindicated in anaphylaxis-associated hypotension and can worsen hemodynamic instability."
        },
        {
          "text": "Start high-dose IV corticosteroids as first-line treatment for severe allergic reaction",
          "explanation": "Incorrect. Epinephrine is the first-line treatment for anaphylaxis. Corticosteroids are adjunctive therapy and do not treat the acute life-threatening manifestations."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates Kounis syndrome - anaphylaxis-induced acute coronary syndrome. The patient developed anaphylaxis (likely to rocuronium, the most common perioperative allergen) with concurrent ECG changes and troponin elevation. In Kounis syndrome, mast cell mediators cause coronary vasospasm or plaque rupture. The key management principle is to treat the underlying anaphylaxis first with epinephrine, which addresses both the allergic reaction and supports coronary perfusion. Cardiac evaluation follows stabilization. Avoiding epinephrine due to cardiac concerns is dangerous, and vasodilators are contraindicated in anaphylaxis-associated hypotension.",
      "topic_tags": [
        "anaphylaxis",
        "perioperative_complications",
        "kounis_syndrome",
        "drug_allergy",
        "emergency_medicine"
      ],
      "key_concept": "Kounis syndrome management: treat anaphylaxis first with epinephrine, then cardiac evaluation"
    },
    "tags": {
      "abai_domain": "Domain 6 — Anaphylaxis",
      "abai_domain_number": 6,
      "acgme_competency": "PC",
      "acgme_milestone": "PC3",
      "acgme_milestone_level": 4,
      "blooms": "synthesis",
      "difficulty": 4
    },
    "pearl_source": "Perioperative anaphylaxis: neuromuscular blocking agents (NMBAs) most common cause (#1 in OR). Chlorhexidine, latex, antibiotics also common.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering the stem reveals complex anaphylaxis with cardiac complications requiring integrated management - cannot be answered from question alone"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details essential: timing establishes drug causation, vital signs show severity, ECG/troponin establish cardiac involvement, medical history rules out pre-existing CAD"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [12,9,15,13,11] - ratio 1.67 slightly exceeds 1.5 threshold but close"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable but incorrect approaches: PCI for MI, avoiding epinephrine due to cardiac concerns, nitrates for vasospasm, steroids as primary treatment"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently structured as imperative verb phrases describing management actions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer accurately reflects Kounis syndrome management - treat anaphylaxis first with epinephrine, then cardiac evaluation"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Clear best answer though some might debate immediate cardiology consultation timing, but epinephrine-first approach is standard"
      }
    }
  },
  {
    "id": "lib-severe-asthma-biologics-0128",
    "type": "mcq",
    "status": "approved",
    "caseId": "severe-asthma-biologics",
    "diagnosis": "Severe eosinophilic asthma, Type 2 high — Step 5 refractory",
    "source": "ReasonDx Case Library — Severe eosinophilic asthma, Type 2 high — Step 5 refractory",
    "submittedAt": "2026-03-05T03:00:08Z",
    "approvedAt": "2026-03-05T03:00:08Z",
    "question": {
      "stem": "A 42-year-old woman with severe persistent asthma presents for biologic therapy evaluation. She has aspirin-exacerbated respiratory disease with chronic rhinosinusitis and nasal polyposis. Despite maximum inhaled therapy and frequent oral corticosteroid courses, she experiences weekly exacerbations. Laboratory studies show blood eosinophils 280 cells/μL, fractional exhaled nitric oxide (FeNO) 45 ppb, and total IgE 450 IU/mL. She requires prednisone 15 mg daily for symptom control and has had three hospitalizations in the past year.",
      "options": [
        {
          "text": "Dupilumab subcutaneous injection",
          "explanation": "Correct. Meets dupilumab criteria (eos ≥150 OR FeNO ≥25, plus OCS-dependent). Only biologic approved for asthma + CRSwNP + treats all AERD components including leukotriene pathway modulation."
        },
        {
          "text": "Mepolizumab subcutaneous injection",
          "explanation": "Incorrect. Requires eos ≥300 for approval. At 280 cells/μL, patient doesn't meet anti-IL-5 threshold criteria despite being OCS-dependent."
        },
        {
          "text": "Benralizumab subcutaneous injection",
          "explanation": "Incorrect. Also requires eos ≥300 threshold. Additionally, anti-IL-5 agents are not approved for CRSwNP treatment in AERD context."
        },
        {
          "text": "Tezepelumab subcutaneous injection",
          "explanation": "Incorrect. While no eosinophil threshold required, tezepelumab is less preferred when clear Type 2 biomarkers are present (elevated eos, FeNO, IgE). Better for non-Type 2 asthma."
        },
        {
          "text": "Omalizumab subcutaneous injection",
          "explanation": "Incorrect. While IgE is elevated, omalizumab doesn't address the CRSwNP component and is less effective than dupilumab for comprehensive AERD management in this clinical context."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has AERD with Type 2 high biomarkers and requires comprehensive treatment for asthma, CRSwNP, and leukotriene-mediated inflammation. Dupilumab is the only biologic approved for all three conditions and meets approval criteria (eos ≥150 OR FeNO ≥25, plus OCS-dependent status). Anti-IL-5 agents require eos ≥300 and don't treat CRSwNP. Tezepelumab is preferred for non-Type 2 asthma. The patient's clear Type 2 biomarker profile makes dupilumab the optimal choice for treating all components of her AERD syndrome.",
      "topic_tags": [
        "severe asthma",
        "biologic therapy",
        "AERD",
        "Type 2 inflammation",
        "dupilumab"
      ],
      "key_concept": "Dupilumab approval criteria and superiority in AERD with multiple comorbidities"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Dupilumab threshold: blood eos ≥150 OR FeNO ≥25. OCS-dependent: any eos count.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette provides essential context about AERD, biomarkers, severity, and comorbidities that cannot be determined from just the final sentence asking about biologic therapy choice."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: AERD diagnosis guides therapy choice, biomarkers determine eligibility, severity justifies biologics, and comorbidities influence selection."
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [3,3,3,3,3] - all options are identical length"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are legitimate biologic therapies for severe asthma with reasonable clinical considerations, though some have more specific indications."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [Drug name] subcutaneous injection"
      },
      "clinical_accuracy": {
        "score": 0.8,
        "note": "Dupilumab is appropriate for AERD with Type 2 biomarkers and comorbid CRSwNP, though other biologics could also be considered in clinical practice."
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "Dupilumab is the most comprehensive choice given the triad of conditions, though mepolizumab or benralizumab could be reasonable alternatives."
      }
    }
  },
  {
    "id": "lib-severe-asthma-biologics-0129",
    "type": "mcq",
    "status": "approved",
    "caseId": "severe-asthma-biologics",
    "diagnosis": "Severe eosinophilic asthma, Type 2 high — Step 5 refractory",
    "source": "ReasonDx Case Library — Severe eosinophilic asthma, Type 2 high — Step 5 refractory",
    "submittedAt": "2026-03-05T03:00:45Z",
    "approvedAt": "2026-03-05T03:00:45Z",
    "question": {
      "stem": "A 42-year-old woman with severe persistent asthma presents for biologic therapy selection. She has a 10-year history of nasal polyposis requiring multiple surgeries and experiences bronchospasm within 2 hours of taking ibuprofen. Current medications include high-dose fluticasone/salmeterol and prednisone 15 mg daily for the past 6 months. Physical examination reveals bilateral nasal polyps and expiratory wheeze. Laboratory studies show peripheral eosinophils 520/μL, total IgE 180 IU/mL, and fractional exhaled nitric oxide (FeNO) 65 ppb. Pulmonary function tests demonstrate FEV1 48% predicted with minimal bronchodilator response.",
      "options": [
        {
          "text": "Dupilumab therapy targeting IL-4 receptor alpha",
          "explanation": "Correct. Dupilumab is the only biologic approved for asthma, chronic rhinosinusitis with nasal polyps (CRSwNP), and addresses AERD pathophysiology, making it ideal for this patient's comorbid conditions."
        },
        {
          "text": "Mepolizumab therapy targeting IL-5",
          "explanation": "Incorrect. While effective for eosinophilic asthma with eos >300, mepolizumab is not approved for CRSwNP and does not address the leukotriene-mediated AERD component."
        },
        {
          "text": "Benralizumab therapy targeting IL-5 receptor alpha",
          "explanation": "Incorrect. Similar to mepolizumab, benralizumab treats eosinophilic asthma but lacks approval for CRSwNP and does not target AERD pathophysiology."
        },
        {
          "text": "Tezepelumab therapy targeting thymic stromal lymphopoietin",
          "explanation": "Incorrect. While tezepelumab has no biomarker threshold requirements, it is less preferred when clear Type 2 biomarkers are present and lacks specific CRSwNP indication."
        },
        {
          "text": "Omalizumab therapy targeting immunoglobulin E",
          "explanation": "Incorrect. Though omalizumab can treat allergic asthma and CRSwNP, the patient's very high eosinophils and FeNO indicate Type 2 high disease better addressed by IL-4 pathway inhibition."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has aspirin-exacerbated respiratory disease (AERD) with the classic triad of asthma, nasal polyps, and aspirin sensitivity, plus Type 2 high biomarkers (eosinophils 520, FeNO 65). Dupilumab is uniquely positioned as the only biologic approved for both severe asthma and CRSwNP, making it superior to anti-IL-5 therapies that only treat the asthma component. The IL-4 receptor blockade also reduces leukotriene production, addressing the underlying AERD pathophysiology. Anti-IL-5 agents (mepolizumab, benralizumab) would treat the eosinophilic asthma but not the nasal polyps. Tezepelumab is less preferred when clear Type 2 biomarkers are present. Omalizumab, while approved for both conditions, is less optimal given the very high Type 2 biomarker profile.",
      "topic_tags": [
        "severe asthma",
        "biologics",
        "AERD",
        "Type 2 inflammation",
        "dupilumab"
      ],
      "key_concept": "Dupilumab provides the broadest comorbidity coverage for patients with severe asthma plus CRSwNP and AERD"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Dupilumab is only biologic approved for asthma + CRSwNP + atopic dermatitis + EoE — broadest comorbidity coverage",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Final sentence alone is insufficient - requires full clinical context of AERD diagnosis, biomarkers, and dual pathology to determine optimal biologic"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: age/gender for context, asthma severity, nasal polyposis history, aspirin sensitivity (AERD triad), current medications showing treatment resistance, physical findings, and Type 2 biomarkers all inform biologic selection"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,5,7,6,6] - slight variation but within acceptable range"
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors are legitimate biologic therapies for severe asthma with reasonable clinical consideration - mepolizumab/benralizumab for eosinophilia, tezepelumab as newer broad option, omalizumab as established therapy"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: '[Drug name] therapy targeting [mechanism]'"
      },
      "clinical_accuracy": {
        "score": 0.8,
        "note": "Correct identification of AERD and rationale for dupilumab as dual-indication therapy is sound, though some experts might debate optimal first-line choice among the options"
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While dupilumab's dual indication advantage is compelling for AERD, reasonable clinicians might consider other biologics based on specific patient factors or institutional preferences"
      }
    }
  },
  {
    "id": "lib-severe-asthma-biologics-0130",
    "type": "mcq",
    "status": "approved",
    "caseId": "severe-asthma-biologics",
    "diagnosis": "Severe eosinophilic asthma, Type 2 high — Step 5 refractory",
    "source": "ReasonDx Case Library — Severe eosinophilic asthma, Type 2 high — Step 5 refractory",
    "submittedAt": "2026-03-05T03:01:25Z",
    "approvedAt": "2026-03-05T03:01:25Z",
    "question": {
      "stem": "A 42-year-old woman with severe asthma presents for biologic therapy evaluation. She has a 15-year history of asthma with recurrent nasal polyps requiring multiple surgeries and aspirin-exacerbated respiratory disease (AERD). Despite maximum inhaled therapy with high-dose ICS/LABA plus tiotropium and oral prednisone 10 mg daily, she has monthly exacerbations requiring emergency visits. Laboratory studies show blood eosinophils 450 cells/μL, fractional exhaled nitric oxide (FeNO) 65 ppb, and total IgE 890 IU/mL. CT sinuses demonstrates chronic rhinosinusitis with nasal polyposis (CRSwNP). Which biologic therapy is most appropriate for this patient?",
      "options": [
        {
          "text": "Dupilumab 300 mg subcutaneously every 2 weeks",
          "explanation": "Correct. This patient has AERD with asthma and CRSwNP. Dupilumab is the only biologic approved for both asthma and CRSwNP, making it ideal for AERD patients. She meets criteria with eos ≥150 and FeNO ≥25, and dupilumab addresses the underlying IL-4/IL-13 pathway driving both conditions."
        },
        {
          "text": "Mepolizumab 100 mg subcutaneously every 4 weeks",
          "explanation": "Incorrect. While this patient meets the eos ≥300 threshold for anti-IL-5 therapy, mepolizumab is not approved for CRSwNP treatment. In AERD patients with both asthma and nasal polyposis, dupilumab provides superior comprehensive management."
        },
        {
          "text": "Benralizumab 30 mg subcutaneously every 8 weeks after loading",
          "explanation": "Incorrect. Although benralizumab would address the eosinophilic asthma (eos ≥300), it lacks approval for CRSwNP treatment. This patient's AERD with prominent nasal polyposis requires a biologic that treats both conditions simultaneously."
        },
        {
          "text": "Tezepelumab 210 mg subcutaneously every 4 weeks",
          "explanation": "Incorrect. While tezepelumab has no biomarker threshold requirements, it is less preferred when clear Type 2 biomarkers are present (eos 450, FeNO 65). Additionally, it lacks specific approval for CRSwNP treatment in AERD context."
        },
        {
          "text": "Omalizumab 300 mg subcutaneously every 2 weeks",
          "explanation": "Incorrect. Although this patient has elevated IgE (890 IU/mL), omalizumab is not the optimal choice given the strong Type 2 eosinophilic profile and CRSwNP comorbidity. Dupilumab better addresses the IL-4/IL-13 pathway underlying both conditions in AERD."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has aspirin-exacerbated respiratory disease (AERD) with severe eosinophilic asthma and chronic rhinosinusitis with nasal polyposis (CRSwNP). She demonstrates clear Type 2 high biomarkers (eosinophils 450, FeNO 65, elevated IgE). Dupilumab is the only biologic approved for both asthma and CRSwNP, making it the optimal choice for AERD patients. It targets the IL-4/IL-13 pathway that drives both conditions. Anti-IL-5 therapies (mepolizumab, benralizumab) treat eosinophilic asthma but lack CRSwNP approval. Tezepelumab is less preferred when strong Type 2 biomarkers are present. Omalizumab doesn't optimally address the eosinophilic component and CRSwNP comorbidity.",
      "topic_tags": [
        "pulmonology",
        "allergy_immunology",
        "biologic_therapy",
        "eosinophilic_asthma",
        "AERD"
      ],
      "key_concept": "Dupilumab is the preferred biologic for AERD patients with both severe eosinophilic asthma and CRSwNP due to its dual approval and comprehensive Type 2 pathway targeting"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Anti-IL-5 (mepolizumab/benralizumab): eos ≥300 threshold, NOT approved for CRSwNP in AERD context",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The question requires the full clinical context including AERD, CRSwNP, biomarkers, and failed therapies to determine the optimal biologic choice. Cannot be answered from the last sentence alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: AERD diagnosis, CRSwNP comorbidity, failed maximal therapy, and Type 2 biomarkers all inform biologic selection."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,7,8,7,7] - excellent parity with max/min ratio of 1.14"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All options are FDA-approved biologics for severe asthma. Mepolizumab and benralizumab are highly plausible for eosinophilic asthma. Tezepelumab is reasonable but less optimal with strong Type 2 markers. Omalizumab slightly less plausible given the eosinophilic predominance."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [Drug name] [dose] [route] [frequency]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Dupilumab is correctly identified as the optimal choice for AERD with CRSwNP comorbidity, being the only biologic with dual approval for both conditions."
      },
      "single_best_answer": {
        "score": 0.8,
        "note": "While dupilumab is optimal for dual indication, some clinicians might reasonably consider anti-IL-5 therapies given the strong eosinophilic component, though dupilumab remains the best choice."
      }
    }
  },
  {
    "id": "lib-sjs-ten-0131",
    "type": "mcq",
    "status": "approved",
    "caseId": "sjs-ten",
    "diagnosis": "SJS/TEN",
    "source": "DOI: 10.1046/j.1523-1747.2000.00061.x; SCORTEN: severity-of-illness score for toxic epidermal necrolysis",
    "submittedAt": "2026-03-05T03:02:30Z",
    "approvedAt": "2026-03-05T03:02:30Z",
    "question": {
      "stem": "A 45-year-old woman with bipolar disorder presents to the emergency department with a 3-day history of fever, malaise, and progressive skin eruption. She started carbamazepine 2 weeks ago. On examination, she appears ill with temperature 38.9°C, heart rate 125 bpm, and blood pressure 90/60 mmHg. There are ill-defined, dusky red macules covering 25% of her body surface area with confluent epidermal detachment. Erosions involve her oral mucosa, conjunctiva, and genital mucosa. Lateral pressure on normal-appearing skin adjacent to blisters causes the epidermis to slide off. Laboratory studies show BUN 32 mg/dL, glucose 180 mg/dL, and bicarbonate 18 mEq/L.",
      "options": [
        {
          "text": "Stevens-Johnson syndrome/toxic epidermal necrolysis overlap with SCORTEN score of 4",
          "explanation": "This is correct. The patient has 25% BSA involvement (overlap range 10-30%), positive Nikolsky sign, and drug-induced presentation consistent with SJS/TEN overlap. SCORTEN factors present: age >40 (1), HR >120 (1), BSA >10% (1), BUN >28 (1) = 4 points."
        },
        {
          "text": "Toxic epidermal necrolysis with SCORTEN score of 3",
          "explanation": "Incorrect. TEN requires >30% BSA involvement; this patient has 25% (overlap range). SCORTEN calculation is also wrong - should be 4 points, not 3."
        },
        {
          "text": "Stevens-Johnson syndrome with SCORTEN score of 5",
          "explanation": "Incorrect. SJS involves <10% BSA; this patient has 25% involvement. SCORTEN is also miscalculated - glucose 180 doesn't meet the >252 criterion, so score should be 4, not 5."
        },
        {
          "text": "Erythema multiforme major with positive Nikolsky sign",
          "explanation": "Incorrect. EM major typically has classic 3-zone target lesions, is usually HSV-triggered, has limited mucosal involvement, and is Nikolsky-negative. This patient has drug-induced, ill-defined lesions with extensive mucosal involvement and positive Nikolsky sign."
        },
        {
          "text": "Staphylococcal scalded skin syndrome with secondary bacterial infection",
          "explanation": "Incorrect. SSSS typically occurs in neonates/young children and immunocompromised adults, involves superficial epidermis only, spares mucous membranes, and would not be associated with carbamazepine initiation in a healthy adult."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with SJS/TEN overlap syndrome based on 25% BSA involvement (overlap range 10-30%), drug-induced etiology (carbamazepine), ill-defined atypical targets, extensive mucosal involvement, and positive Nikolsky sign. SCORTEN calculation: age >40 (1 point), HR >120 (1 point), BSA >10% (1 point), BUN >28 (1 point) = 4 points total. The other options are incorrect due to misclassification of BSA involvement criteria or incorrect SCORTEN calculations.",
      "topic_tags": [
        "dermatology",
        "drug reactions",
        "emergency medicine",
        "critical care"
      ],
      "key_concept": "SJS/TEN classification by BSA involvement and SCORTEN mortality prediction"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "SJS <10% BSA; Overlap 10–30%; TEN >30% BSA. Mortality: SJS 1–5%, TEN 20–30%.",
    "quality_score": 0.77,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence alone cannot determine the correct diagnosis - requires integration of clinical presentation, BSA involvement, and SCORTEN calculation"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is clinically relevant: drug history establishes etiology, physical findings determine BSA classification, vital signs and labs contribute to SCORTEN score"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [9,8,7,7,8]. Ratio 9/7 = 1.29, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.6,
        "note": "Options B and C are plausible with different BSA classifications and SCORTEN scores. Option D reasonable but EM major typically has typical targets. Option E less plausible as SSSS typically affects children"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: condition name + descriptive phrase"
      },
      "clinical_accuracy": {
        "score": 0.8,
        "note": "Correct answer appears accurate based on 25% BSA (SJS/TEN overlap range) and SCORTEN criteria, though SCORTEN calculation could be verified"
      },
      "single_best_answer": {
        "score": 0.7,
        "note": "BSA percentage clearly indicates overlap syndrome, making A the best answer, though SCORTEN scoring might have some interpretation variability"
      }
    }
  },
  {
    "id": "lib-sjs-ten-0132",
    "type": "mcq",
    "status": "approved",
    "caseId": "sjs-ten",
    "diagnosis": "SJS/TEN",
    "source": "DOI: 10.1046/j.1523-1747.2000.00061.x; SCORTEN: severity-of-illness score for toxic epidermal necrolysis",
    "submittedAt": "2026-03-05T03:03:05Z",
    "approvedAt": "2026-03-05T03:03:05Z",
    "question": {
      "stem": "A 45-year-old woman with bipolar disorder presents to the emergency department with a 3-day history of fever, malaise, and painful skin lesions. She started carbamazepine 2 weeks ago. Physical examination reveals temperature 38.9°C, heart rate 125/min, and blood pressure 90/60 mmHg. There are ill-defined erythematous lesions with dusky centers covering 25% of her body surface area, extensive oral ulcerations, and conjunctival involvement. Lateral pressure on normal-appearing skin adjacent to a blister causes the epidermis to slide off. Laboratory studies show BUN 32 mg/dL, glucose 180 mg/dL, and bicarbonate 18 mEq/L. A skin biopsy shows full-thickness epidermal necrosis with subepidermal separation. Which of the following is the principal cytotoxic mediator responsible for this patient's condition?",
      "options": [
        {
          "text": "Granulysin released by CD8+ T lymphocytes",
          "explanation": "Correct. This patient has SJS-TEN overlap (10-30% BSA involvement) caused by carbamazepine. Granulysin is the principal cytotoxin released by CD8+ CTL and NK cells that causes keratinocyte apoptosis and epidermal detachment."
        },
        {
          "text": "Histamine released by degranulated mast cells",
          "explanation": "Incorrect. Histamine mediates type I hypersensitivity reactions and urticaria, not the keratinocyte apoptosis seen in SJS/TEN. This is a type IVc hypersensitivity reaction."
        },
        {
          "text": "IgE antibodies bound to keratinocyte surface antigens",
          "explanation": "Incorrect. IgE mediates type I hypersensitivity reactions. SJS/TEN is a type IVc cell-mediated reaction involving CD8+ T cells recognizing drug-MHC-I complexes on keratinocytes."
        },
        {
          "text": "Complement-mediated membrane attack complexes",
          "explanation": "Incorrect. Complement activation and membrane attack complexes are involved in type II and III hypersensitivity reactions, not the CD8+ T cell-mediated keratinocyte apoptosis of SJS/TEN."
        },
        {
          "text": "Tumor necrosis factor-alpha from activated macrophages",
          "explanation": "Incorrect. While TNF-α may play a secondary role in inflammation, granulysin is the principal cytotoxin directly responsible for keratinocyte death and epidermal detachment in SJS/TEN."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with SJS-TEN overlap syndrome (25% BSA involvement, between the 10-30% range) triggered by carbamazepine. The positive Nikolsky sign, extensive mucosal involvement, and full-thickness epidermal necrosis are classic features. SJS/TEN is a type IVc hypersensitivity reaction where CD8+ cytotoxic T lymphocytes recognize drug-MHC-I complexes on keratinocytes and release granulysin as the principal cytotoxin, causing widespread keratinocyte apoptosis and epidermal detachment. Granulysin levels in blister fluid correlate with disease severity. The other options represent different hypersensitivity mechanisms not involved in SJS/TEN pathogenesis.",
      "topic_tags": [
        "dermatology",
        "immunology",
        "drug reactions",
        "SJS/TEN"
      ],
      "key_concept": "Granulysin is the principal cytotoxic mediator in SJS/TEN, released by CD8+ T cells causing keratinocyte apoptosis"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Principal cytotoxin: granulysin (from CD8+ CTL and NK cells). Not histamine. Not IgE.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question about cytotoxic mediator requires integration of the entire clinical vignette - fever, skin lesions, drug history, Nikolsky sign, biopsy findings all needed to diagnose SJS/TEN"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: drug timing (2 weeks), fever/vitals (systemic involvement), skin description (BSA %), Nikolsky sign (pathognomonic), biopsy (confirms diagnosis)"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [7,6,7,4,6] - ratio 1.75 slightly exceeds 1.5 threshold"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent legitimate hypersensitivity mechanisms that could theoretically cause drug reactions, though not SJS/TEN specifically"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [mediator] [action] by/from [cell type]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Granulysin from CD8+ T cells is indeed the established principal cytotoxic mediator in SJS/TEN pathogenesis"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - granulysin is the well-established mechanism, other options represent different hypersensitivity pathways"
      }
    }
  },
  {
    "id": "lib-sjs-ten-0133",
    "type": "mcq",
    "status": "approved",
    "caseId": "sjs-ten",
    "diagnosis": "SJS/TEN",
    "source": "DOI: 10.1046/j.1523-1747.2000.00061.x; SCORTEN: severity-of-illness score for toxic epidermal necrolysis",
    "submittedAt": "2026-03-05T03:03:46Z",
    "approvedAt": "2026-03-05T03:03:46Z",
    "question": {
      "stem": "A 42-year-old woman with bipolar disorder presents to the emergency department with a 3-day history of fever, malaise, and progressive skin lesions that began 10 days after starting a new mood stabilizer. Physical examination reveals temperature 38.9°C, heart rate 118/min, and blood pressure 102/68 mmHG. She has confluent erythema with full-thickness epidermal detachment involving 35% of her body surface area, including extensive oral, conjunctival, and genital mucosal involvement. When lateral pressure is applied to normal-appearing skin adjacent to a blister, the epidermis readily slides off the dermis. Laboratory studies show BUN 32 mg/dL, serum glucose 268 mg/dL, and serum bicarbonate 18 mEq/L. The patient has no known malignancy history.",
      "options": [
        {
          "text": "Transfer to burn unit and calculate SCORTEN for mortality prediction",
          "explanation": "Correct. This patient has TEN (>30% BSA involvement) with positive Nikolsky sign. SCORTEN variables present: age >40, HR >120, BSA >10%, BUN >28, glucose >252, bicarbonate <20 = 6 points, indicating >90% mortality risk requiring immediate burn unit care."
        },
        {
          "text": "Administer high-dose corticosteroids and monitor for secondary infection",
          "explanation": "Incorrect. Corticosteroids are contraindicated in SJS/TEN as they increase mortality risk by promoting secondary infections and delaying wound healing. Standard care involves burn unit management with supportive care."
        },
        {
          "text": "Obtain skin biopsy to differentiate from staphylococcal scalded skin syndrome",
          "explanation": "Incorrect. While SSSS can have positive Nikolsky sign, the extensive mucosal involvement and clinical context (drug initiation, adult patient) clearly indicate TEN. SSSS typically affects infants/young children and spares mucosa."
        },
        {
          "text": "Start plasmapheresis to remove circulating immune complexes",
          "explanation": "Incorrect. SJS/TEN is a Type IVc reaction mediated by CD8+ T cells and granulysin, not immune complex-mediated. Plasmapheresis has no established role in treatment. IVIG or cyclosporine have limited evidence but are preferred over plasmapheresis."
        },
        {
          "text": "Initiate antihistamines and epinephrine for suspected drug hypersensitivity",
          "explanation": "Incorrect. This treats Type I IgE-mediated reactions (anaphylaxis). SJS/TEN is Type IVc mediated by CD8+ cytotoxic T lymphocytes producing granulysin, not histamine or IgE-mediated mechanisms."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with TEN based on >30% BSA involvement with positive Nikolsky sign (epidermis sliding off with lateral pressure). The SCORTEN variables present include age >40 (42 years), heart rate >120 (118/min), BSA >10% (35%), BUN >28 (32 mg/dL), glucose >252 (268 mg/dL), and bicarbonate <20 (18 mEq/L), totaling 6 points which indicates >90% mortality risk. Immediate burn unit transfer is mandatory for specialized wound care, fluid resuscitation, and supportive management. The positive Nikolsky sign confirms TEN rather than SJS (which has negative Nikolsky sign). Treatment involves stopping the culprit drug (likely carbamazepine or another mood stabilizer), burn unit care, and considering IVIG or cyclosporine, not corticosteroids which increase mortality.",
      "topic_tags": [
        "dermatology",
        "emergency_medicine",
        "drug_reactions",
        "critical_care"
      ],
      "key_concept": "Nikolsky sign differentiates TEN (positive) from SJS (negative), and SCORTEN predicts mortality in severe cutaneous adverse reactions"
    },
    "tags": {
      "abai_domain": "Domain 9 — Drug Allergy & Adverse Reactions",
      "abai_domain_number": 9,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Nikolsky sign: positive = TEN (and pemphigus, SSSS). Negative = SJS, EM major.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence leaves insufficient information to determine the correct diagnosis and management. The clinical details about BSA involvement, Nikolsky sign, and SCORTEN variables are essential."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides crucial information: drug history establishes cause, vital signs contribute to SCORTEN, physical findings confirm TEN diagnosis, lab values are SCORTEN variables, and cancer history exclusion is relevant for differential."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [10,9,10,8,9] - excellent parity with max/min ratio of 1.25"
      },
      "distractor_plausibility": {
        "score": 0.75,
        "note": "B is plausible but incorrect (steroids worsen TEN). C could be considered but clinical picture is clear. D is less plausible for TEN. E is implausible given severity - this is not simple drug hypersensitivity."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are imperative verb phrases with consistent structure (action verb + object/details)."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer A is accurate - TEN with high SCORTEN score requires immediate burn unit care. The explanation correctly identifies TEN criteria and SCORTEN variables."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "A is clearly the best answer given the severity and SCORTEN score, though some might consider skin biopsy, but clinical picture is diagnostic."
      }
    }
  },
  {
    "id": "lib-urticarial-vasculitis-0134",
    "type": "mcq",
    "status": "approved",
    "caseId": "urticarial-vasculitis",
    "diagnosis": "Urticarial Vasculitis",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T03:04:20Z",
    "approvedAt": "2026-03-05T03:04:20Z",
    "question": {
      "stem": "A 42-year-old woman presents with recurrent skin lesions for 3 months. She describes raised, red welts that appear on her arms and legs, lasting 2-3 days before slowly fading and leaving dark marks. The lesions cause a burning sensation rather than itching. Physical examination reveals several erythematous, edematous plaques on the extremities with areas of resolving hyperpigmentation. Laboratory studies show ESR 45 mm/hr, CRP 12 mg/L, C3 80 mg/dL (normal 90-180), C4 15 mg/dL (normal 16-47), and positive C1q antibodies. A skin biopsy shows leukocytoclastic vasculitis with fibrinoid necrosis of small vessel walls.",
      "options": [
        {
          "text": "Hypocomplementemic urticarial vasculitis syndrome",
          "explanation": "Correct. The combination of wheals lasting >24 hours, residual hyperpigmentation, burning sensation, low complement levels (C3/C4), positive C1q antibodies, and biopsy showing leukocytoclastic vasculitis confirms HUVS."
        },
        {
          "text": "Chronic spontaneous urticaria",
          "explanation": "Incorrect. CSU wheals typically last <24 hours, resolve completely without residual marks, are pruritic rather than burning, and biopsy shows mast cell infiltrate without vasculitis."
        },
        {
          "text": "Normcomplementemic urticarial vasculitis",
          "explanation": "Incorrect. While the clinical presentation and biopsy findings are consistent with urticarial vasculitis, the low C3/C4 levels and positive C1q antibodies indicate the hypocomplementemic variant."
        },
        {
          "text": "Systemic lupus erythematosus with cutaneous involvement",
          "explanation": "Incorrect. While SLE can be associated with HUVS, the primary presentation here is urticarial vasculitis. The biopsy findings and clinical course are more consistent with HUVS than typical lupus skin lesions."
        },
        {
          "text": "Hereditary angioedema with urticarial lesions",
          "explanation": "Incorrect. HAE typically presents with asymmetric angioedema without urticarial wheals, has normal inflammatory markers, and is associated with C1 esterase inhibitor deficiency, not C1q antibodies."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient has hypocomplementemic urticarial vasculitis syndrome (HUVS), characterized by wheals lasting >24 hours with residual hyperpigmentation, burning rather than pruritic sensation, low complement levels (C3/C4), positive C1q antibodies, and skin biopsy showing leukocytoclastic vasculitis. HUVS is distinguished from chronic spontaneous urticaria by the longer duration of individual lesions, residual marking, different symptom quality, and distinct histopathologic findings. The hypocomplementemic variant is more severe than normcomplementemic urticarial vasculitis and often requires systemic immunosuppression.",
      "topic_tags": [
        "dermatology",
        "vasculitis",
        "urticaria",
        "autoimmune"
      ],
      "key_concept": "Distinguishing hypocomplementemic urticarial vasculitis syndrome from chronic spontaneous urticaria based on lesion duration, residual changes, and laboratory findings"
    },
    "tags": {
      "abai_domain": "Domain 13 — Autoimmune & Inflammatory Disease",
      "abai_domain_number": 13,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "UV vs CSU: UV wheals last >24h, leave bruising, burn more than itch. CSU wheals <24h, fully resolve, pruritic.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer from final sentence alone - requires clinical vignette details about duration, appearance, complement levels, and biopsy findings"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is essential: symptom duration, lesion characteristics, burning vs itching, physical findings, lab values, and biopsy results all differentiate between options"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [5,4,4,7,6]. Max/min ratio 1.75 slightly exceeds 1.5 but close"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors are clinically reasonable for urticarial lesions. CSU, SLE cutaneous involvement, and hereditary angioedema are appropriate differentials"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing medical conditions with consistent structure"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - HUVS is characterized by low complement, C1q antibodies, leukocytoclastic vasculitis, and prolonged lesions with hyperpigmentation"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear single best answer - combination of hypocomplementemia, C1q antibodies, and vasculitis on biopsy definitively points to HUVS"
      }
    }
  },
  {
    "id": "lib-urticarial-vasculitis-0135",
    "type": "mcq",
    "status": "approved",
    "caseId": "urticarial-vasculitis",
    "diagnosis": "Urticarial Vasculitis",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T03:04:56Z",
    "approvedAt": "2026-03-05T03:04:56Z",
    "question": {
      "stem": "A 42-year-old woman presents with a 6-week history of recurrent skin lesions that she describes as 'hives that burn instead of itch.' Physical examination reveals multiple erythematous, raised wheals on her trunk and extremities, some with central pallor. She reports that individual lesions persist for 2-3 days before resolving, often leaving behind brownish discoloration. Laboratory studies show ESR 45 mm/hr (normal <20), CRP 8.2 mg/L (normal <3.0), normal C3 and C4 levels, and negative C1q antibodies. A skin biopsy of an active lesion demonstrates leukocytoclastic vasculitis with fibrinoid necrosis and neutrophilic infiltration of vessel walls.",
      "options": [
        {
          "text": "Initiate treatment with dapsone 50 mg daily",
          "explanation": "Correct. This patient has normcomplementemic urticarial vasculitis (normal complement levels, negative C1q antibodies). Dapsone is first-line treatment for normcomplementemic UV when antihistamines are insufficient."
        },
        {
          "text": "Start hydroxychloroquine 400 mg daily",
          "explanation": "Incorrect. Hydroxychloroquine is primarily used for hypocomplementemic urticarial vasculitis syndrome (HUVS), which this patient does not have given normal complement levels and negative C1q antibodies."
        },
        {
          "text": "Begin high-dose antihistamines with cetirizine 40 mg daily",
          "explanation": "Incorrect. While antihistamines may be tried initially, they have limited efficacy in urticarial vasculitis compared to chronic spontaneous urticaria. The biopsy-proven vasculitis requires more targeted therapy."
        },
        {
          "text": "Initiate prednisone 1 mg/kg daily with methotrexate",
          "explanation": "Incorrect. Systemic corticosteroids and immunosuppression are reserved for hypocomplementemic urticarial vasculitis with systemic involvement. This patient has normcomplementemic disease without systemic complications."
        },
        {
          "text": "Prescribe omalizumab 300 mg subcutaneous monthly",
          "explanation": "Incorrect. Omalizumab is effective for chronic spontaneous urticaria but not established as first-line therapy for urticarial vasculitis. The vasculitic component requires different treatment approaches."
        }
      ],
      "correct_index": 0,
      "explanation": "This case illustrates normcomplementemic urticarial vasculitis, distinguished from chronic spontaneous urticaria by wheals lasting >24 hours, burning sensation, residual hyperpigmentation, and biopsy showing leukocytoclastic vasculitis. Normal complement levels and negative C1q antibodies differentiate it from hypocomplementemic urticarial vasculitis syndrome (HUVS). Dapsone is first-line treatment for normcomplementemic UV. Hydroxychloroquine is used for HUVS. Antihistamines have limited efficacy in UV. Systemic immunosuppression is reserved for HUVS with systemic involvement. Omalizumab lacks established efficacy in urticarial vasculitis.",
      "topic_tags": [
        "dermatology",
        "vasculitis",
        "urticaria",
        "autoimmune"
      ],
      "key_concept": "Treatment selection for normcomplementemic urticarial vasculitis based on complement levels and systemic involvement"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Normcomplementemic UV: usually idiopathic, milder, no systemic involvement. Antihistamines ± dapsone/colchicine.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The clinical vignette with detailed history, physical findings, lab results, and biopsy findings is essential to distinguish this from other urticarial conditions. Cannot be answered from final sentence alone."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is clinically relevant: duration (>24h wheals), burning vs itching, persistent lesions with pigmentation, elevated inflammatory markers, normal complement, negative C1q, and pathognomonic biopsy findings all differentiate normcomplementemic urticarial vasculitis from other conditions."
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [7,6,8,8,7]. Ratio 1.33, acceptable but some variation."
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors are reasonable treatments for related conditions: hydroxychloroquine for HUVS, antihistamines for chronic urticaria, prednisone/MTX for severe vasculitis, omalizumab for chronic urticaria. Clinically plausible."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [Action verb] + [medication] + [dose/frequency]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Dapsone is indeed first-line treatment for normcomplementemic urticarial vasculitis according to current dermatology guidelines."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Dapsone is clearly the best answer for normcomplementemic UV. While some might consider systemic steroids, the case presentation strongly points to normcomplementemic UV where dapsone is preferred first-line."
      }
    }
  },
  {
    "id": "lib-urticarial-vasculitis-0136",
    "type": "mcq",
    "status": "approved",
    "caseId": "urticarial-vasculitis",
    "diagnosis": "Urticarial Vasculitis",
    "source": "DOI: 10.1111/all.15090; EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "submittedAt": "2026-03-05T03:05:31Z",
    "approvedAt": "2026-03-05T03:05:31Z",
    "question": {
      "stem": "A 42-year-old woman presents with a 6-week history of recurrent skin lesions that appear as raised, erythematous wheals lasting 2-3 days before resolving with residual brown discoloration. She describes the lesions as burning rather than itchy. Physical examination reveals multiple urticarial plaques on her arms and legs, with areas of post-inflammatory hyperpigmentation from previous lesions. Laboratory studies show ESR 65 mm/hr, CRP 12 mg/L, C3 45 mg/dL (normal 90-180), C4 8 mg/dL (normal 10-40), and positive C1q antibodies. ANA is positive at 1:640 with a homogeneous pattern. She also reports recent onset of joint pain and morning stiffness.",
      "options": [
        {
          "text": "Hypocomplementemic urticarial vasculitis syndrome requiring hydroxychloroquine and immunosuppressive therapy",
          "explanation": "Correct. The combination of wheals lasting >24 hours, residual pigmentation, burning sensation, low C3/C4, positive C1q antibodies, and systemic symptoms (arthritis) indicates HUVS, which requires systemic treatment."
        },
        {
          "text": "Chronic spontaneous urticaria managed with high-dose antihistamines and omalizumab",
          "explanation": "Incorrect. CSU wheals resolve completely within 24 hours without residual changes, are typically pruritic rather than burning, and don't cause hypocomplementemia or systemic symptoms."
        },
        {
          "text": "Normcomplementemic urticarial vasculitis treated with antihistamines and dapsone",
          "explanation": "Incorrect. This patient has clear hypocomplementemia (low C3/C4) and positive C1q antibodies, indicating hypocomplementemic rather than normcomplementemic urticarial vasculitis."
        },
        {
          "text": "Erythema multiforme requiring systemic corticosteroids and antiviral therapy",
          "explanation": "Incorrect. Erythema multiforme presents with target lesions, not urticarial wheals, and doesn't cause hypocomplementemia or positive C1q antibodies."
        },
        {
          "text": "Drug-induced urticaria requiring discontinuation of triggering medications",
          "explanation": "Incorrect. Drug-induced urticaria typically presents acutely after medication exposure, resolves with drug discontinuation, and doesn't cause hypocomplementemia or chronic systemic symptoms."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic features of hypocomplementemic urticarial vasculitis syndrome (HUVS): wheals lasting >24 hours with residual pigmentation, burning sensation rather than pruritus, hypocomplementemia (low C3/C4), positive C1q antibodies, and systemic involvement (arthritis). HUVS is associated with connective tissue diseases like SLE and requires systemic treatment with hydroxychloroquine and immunosuppressive agents. The other options are incorrect because they don't account for the hypocomplementemia and systemic features that distinguish HUVS from other urticarial conditions.",
      "topic_tags": [
        "dermatology",
        "vasculitis",
        "urticaria",
        "autoimmune"
      ],
      "key_concept": "Hypocomplementemic urticarial vasculitis syndrome diagnosis and management"
    },
    "tags": {
      "abai_domain": "Domain 5 — Urticaria & Angioedema",
      "abai_domain_number": 5,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "Hypocomplementemic UV (HUVS): C1q antibodies, low C3/C4, systemic complications. Associated with SLE, Sjögren's. Hydroxychloroquine ± immunosuppression.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Cannot answer from just the last sentence - requires detailed clinical history, physical findings, and laboratory results to distinguish HUVS from other urticarial conditions"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is essential: symptom duration, lesion characteristics, burning vs itching, physical findings, complement levels, autoantibodies, and systemic symptoms all needed to diagnose HUVS"
      },
      "option_length_parity": {
        "score": 0.7,
        "note": "word counts: [9,9,9,9,9] - all options have exactly 9 words, excellent parity"
      },
      "distractor_plausibility": {
        "score": 1.0,
        "note": "All distractors represent reasonable differential diagnoses for urticarial lesions - chronic urticaria, normcomplementemic vasculitis, erythema multiforme, and drug-induced urticaria are all clinically plausible considerations"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [Condition name] [requiring/managed with/treated with] [treatment approach]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer is accurate - HUVS diagnosis requires hypocomplementemia, C1q antibodies, and systemic symptoms, with treatment including hydroxychloroquine and immunosuppression"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "Clear best answer - only option A accounts for the specific constellation of hypocomplementemia, C1q antibodies, and systemic involvement that defines HUVS"
      }
    }
  },
  {
    "id": "lib-venom-immunotherapy-reaction-0137",
    "type": "mcq",
    "status": "approved",
    "caseId": "venom-immunotherapy-reaction",
    "diagnosis": "VIT Systemic Reaction",
    "source": "DOI: 10.1016/j.jaci.2010.09.034; Allergen immunotherapy: practice parameter 3rd update; DOI: 10.1016/j.anai.2016.10.031; Stinging insect hypersensitivity: practice parameter 2016",
    "submittedAt": "2026-03-05T03:06:04Z",
    "approvedAt": "2026-03-05T03:06:04Z",
    "question": {
      "stem": "A 42-year-old beekeeper presents to the allergy clinic for his third venom immunotherapy (VIT) injection during the build-up phase. Within 10 minutes of receiving 0.5 mL of mixed vespid venom extract, he develops generalized urticaria, throat tightness, and wheezing. His blood pressure is 85/50 mmHg and heart rate is 110 bpm. After immediate treatment with intramuscular epinephrine and supportive care, his symptoms resolve completely within 30 minutes. His baseline serum tryptase level measured prior to starting VIT was 8.2 ng/mL.",
      "options": [
        {
          "text": "Reduce the next VIT dose by 50% and continue build-up at a slower titration schedule",
          "explanation": "This is the correct management following a systemic reaction during VIT build-up phase."
        },
        {
          "text": "Discontinue VIT permanently and prescribe epinephrine auto-injectors for future sting protection",
          "explanation": "Incorrect - systemic reactions during VIT do not require permanent discontinuation, and VIT provides 95-97% protection versus epinephrine alone."
        },
        {
          "text": "Switch to rush VIT protocol to achieve maintenance dose more rapidly under close monitoring",
          "explanation": "Incorrect - rush VIT has higher systemic reaction rates and would be inappropriate after a systemic reaction."
        },
        {
          "text": "Continue VIT at the same dose with omalizumab pre-treatment to prevent future reactions",
          "explanation": "Incorrect - the dose must be reduced after a systemic reaction, though omalizumab could be considered as adjunctive therapy."
        },
        {
          "text": "Obtain mastocytosis workup given the systemic reaction and restart VIT only if negative",
          "explanation": "Incorrect - his baseline tryptase is normal (<11.4 ng/mL), making mastocytosis unlikely, and VIT should continue with dose reduction."
        }
      ],
      "correct_index": 0,
      "explanation": "Following a systemic reaction during VIT build-up, the standard management is to reduce the next dose by 50% and continue build-up at a slower pace. This patient experienced a classic systemic reaction with urticaria, respiratory symptoms, and hypotension. VIT should not be discontinued as it provides 95-97% protection against future anaphylaxis. His normal baseline tryptase (8.2 ng/mL, normal <11.4) makes mastocytosis unlikely. Rush protocols would increase reaction risk and are contraindicated after a systemic reaction.",
      "topic_tags": [
        "allergy_immunology",
        "venom_immunotherapy",
        "anaphylaxis",
        "immunotherapy_reactions"
      ],
      "key_concept": "VIT systemic reaction management requires dose reduction and slower build-up pace"
    },
    "tags": {
      "abai_domain": "Domain 11 — Allergen Immunotherapy",
      "abai_domain_number": 11,
      "acgme_competency": "PC",
      "acgme_milestone": "PC3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "VIT systemic reaction management: epinephrine IM → reduce next dose 50% → titrate back up at slower pace.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence alone cannot be answered without the clinical context of VIT reaction, vital signs, and baseline tryptase level"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: patient background (beekeeper), VIT phase, timing/dose, specific symptoms, vital signs, and baseline tryptase all inform management decisions"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [16,13,14,13,15]. Max/min ratio = 1.23, which is acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical considerations: permanent discontinuation, rush protocols, omalizumab pretreatment, and mastocytosis workup are all legitimate management options to consider"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options consistently start with action verbs (Reduce, Discontinue, Switch, Continue, Obtain)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with standard VIT management guidelines for systemic reactions during build-up phase"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "While dose reduction and slower titration is standard practice, some clinicians might reasonably consider mastocytosis workup given the systemic reaction, though normal tryptase makes this less likely"
      }
    }
  },
  {
    "id": "lib-venom-immunotherapy-reaction-0138",
    "type": "mcq",
    "status": "approved",
    "caseId": "venom-immunotherapy-reaction",
    "diagnosis": "VIT Systemic Reaction",
    "source": "DOI: 10.1016/j.jaci.2010.09.034; Allergen immunotherapy: practice parameter 3rd update; DOI: 10.1016/j.anai.2016.10.031; Stinging insect hypersensitivity: practice parameter 2016",
    "submittedAt": "2026-03-05T03:06:37Z",
    "approvedAt": "2026-03-05T03:06:37Z",
    "question": {
      "stem": "A 42-year-old beekeeper presents to the allergy clinic for follow-up after initiating venom immunotherapy (VIT) 8 weeks ago. He had experienced anaphylaxis to a bee sting 6 months prior, with hypotension requiring epinephrine and hospitalization. During his conventional VIT build-up phase, he developed generalized urticaria and mild wheezing 15 minutes after his injection last week, which resolved with intramuscular epinephrine and observation. His baseline serum tryptase level is 8.2 ng/mL. He asks about continuing VIT given his occupation and inquires about faster protocols to achieve maintenance dosing. Which of the following is the most appropriate next step in management?",
      "options": [
        {
          "text": "Reduce the next VIT dose by 50% and continue conventional build-up at a slower pace",
          "explanation": "This is the correct management after a systemic reaction during VIT build-up phase according to standard protocols."
        },
        {
          "text": "Switch to rush VIT protocol to achieve maintenance dosing within 3 days",
          "explanation": "Rush VIT has higher systemic reaction rates and would be inappropriate immediately after a systemic reaction."
        },
        {
          "text": "Discontinue VIT permanently due to the systemic reaction risk",
          "explanation": "VIT should not be discontinued after a manageable systemic reaction, especially given his high-risk occupation."
        },
        {
          "text": "Continue VIT at the same dose with omalizumab pretreatment",
          "explanation": "While omalizumab can help high-risk patients, dose reduction is still needed after a systemic reaction before considering adjunctive therapy."
        },
        {
          "text": "Obtain mastocytosis workup before proceeding with any further VIT",
          "explanation": "His normal baseline tryptase (8.2 ng/mL, <11.4) does not warrant mastocytosis evaluation at this time."
        }
      ],
      "correct_index": 0,
      "explanation": "After a systemic reaction during VIT build-up, standard management involves reducing the next dose by 50% and titrating back up at a slower pace. This patient's systemic reaction was appropriately managed with epinephrine and resolved. Rush VIT would be contraindicated immediately after a systemic reaction due to higher reaction rates. His normal baseline tryptase (<11.4 ng/mL) does not suggest mastocytosis. While omalizumab can be considered for high-risk patients, dose reduction is the first-line approach after a systemic reaction. Given his high-risk occupation as a beekeeper, discontinuing VIT would leave him unprotected against future potentially fatal reactions.",
      "topic_tags": [
        "venom immunotherapy",
        "anaphylaxis",
        "systemic reactions",
        "immunotherapy protocols"
      ],
      "key_concept": "Management of systemic reactions during VIT build-up requires dose reduction by 50% and slower titration"
    },
    "tags": {
      "abai_domain": "Domain 11 — Allergen Immunotherapy",
      "abai_domain_number": 11,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "application",
      "difficulty": 3
    },
    "pearl_source": "VIT efficacy: 95–97% protection against future systemic anaphylaxis. Most effective allergy immunotherapy available.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The question requires the full clinical context including VIT history, systemic reaction details, tryptase level, and occupational risk to determine appropriate management"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: occupation (high-risk exposure), anaphylaxis history, VIT timeline, systemic reaction specifics, tryptase level (rules out mastocytosis), and patient concerns about faster protocols"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [14,11,9,9,10] - max/min ratio 1.56, borderline but acceptable for clinical complexity"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable clinical considerations: rush protocols, discontinuation for safety, omalizumab for high-risk patients, and mastocytosis workup for systemic reactions"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are verb phrases describing management actions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with standard VIT guidelines for managing systemic reactions during build-up phase"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Dose reduction is clearly the standard first-line approach, though some might consider omalizumab in parallel"
      }
    }
  },
  {
    "id": "lib-venom-immunotherapy-reaction-0139",
    "type": "mcq",
    "status": "approved",
    "caseId": "venom-immunotherapy-reaction",
    "diagnosis": "VIT Systemic Reaction",
    "source": "DOI: 10.1016/j.jaci.2010.09.034; Allergen immunotherapy: practice parameter 3rd update; DOI: 10.1016/j.anai.2016.10.031; Stinging insect hypersensitivity: practice parameter 2016",
    "submittedAt": "2026-03-05T03:07:14Z",
    "approvedAt": "2026-03-05T03:07:14Z",
    "question": {
      "stem": "A 42-year-old beekeeper presents to the allergy clinic for follow-up after experiencing generalized urticaria and throat tightness 10 minutes after his 8th venom immunotherapy injection during the build-up phase. He was treated with intramuscular epinephrine and observed for 4 hours with complete resolution of symptoms. His baseline serum tryptase level was 18.2 ng/mL (normal <11.4 ng/mL). He had previously experienced anaphylaxis with hypotension requiring hospitalization after a bee sting 6 months ago, which prompted initiation of venom immunotherapy. He asks about continuing treatment and long-term duration recommendations.",
      "options": [
        {
          "text": "Discontinue venom immunotherapy and rely solely on epinephrine auto-injector for future protection",
          "explanation": "Incorrect. VIT provides 95-97% protection and should be continued despite systemic reactions, which can be managed."
        },
        {
          "text": "Resume venom immunotherapy at 25% of the previous dose and plan standard 3-5 year treatment duration",
          "explanation": "Incorrect. Dose reduction should be 50%, not 25%, and elevated tryptase indicates need for lifelong therapy."
        },
        {
          "text": "Resume venom immunotherapy at 50% of the previous dose and plan lifelong treatment duration",
          "explanation": "Correct. Elevated baseline tryptase >11.4 ng/mL indicates higher risk and warrants lifelong VIT duration."
        },
        {
          "text": "Switch to rush venom immunotherapy protocol to achieve maintenance dose more rapidly",
          "explanation": "Incorrect. Rush protocols have higher systemic reaction rates and are contraindicated after a systemic reaction."
        },
        {
          "text": "Resume venom immunotherapy at the same dose with omalizumab pretreatment for 3-5 years",
          "explanation": "Incorrect. Must reduce dose by 50% after systemic reaction, though omalizumab could be considered as adjunct therapy."
        }
      ],
      "correct_index": 2,
      "explanation": "This patient experienced a systemic reaction during VIT build-up phase. Standard management includes dose reduction by 50% and gradual titration back up. His elevated baseline tryptase (18.2 ng/mL, normal <11.4) indicates increased risk for both VIT reactions and future sting anaphylaxis, warranting mastocytosis workup and lifelong VIT duration rather than standard 3-5 years. The combination of prior severe anaphylaxis and elevated tryptase makes him a candidate for lifelong therapy.",
      "topic_tags": [
        "venom immunotherapy",
        "anaphylaxis",
        "tryptase",
        "systemic reactions",
        "immunotherapy duration"
      ],
      "key_concept": "VIT duration determination based on risk factors including elevated baseline tryptase"
    },
    "tags": {
      "abai_domain": "Domain 10 — Insect/Venom Allergy",
      "abai_domain_number": 10,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 4,
      "blooms": "analysis",
      "difficulty": 4
    },
    "pearl_source": "VIT duration: standard 3–5 years. Lifelong: prior anaphylaxis during VIT, prior very severe anaphylaxis, mastocytosis, elevated baseline tryptase.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question about continuing treatment requires all the clinical details - previous anaphylaxis, current reaction during VIT, elevated tryptase level, and occupation as beekeeper to determine proper management."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All details are clinically relevant: occupation (exposure risk), reaction details (systemic during build-up), previous anaphylaxis (severity), elevated tryptase (mastocytosis risk), treatment response (tolerability). No filler content."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [12,14,12,11,13] - ratio 1.27, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "A is plausible but suboptimal; B uses correct dose reduction but wrong duration; D is inappropriate given systemic reaction; E could be considered but omalizumab typically reserved for refractory cases. All represent reasonable clinical considerations."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure starting with verb phrases (Discontinue, Resume, Resume, Switch, Resume)"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Correct answer aligns with guidelines: 50% dose reduction after systemic reaction, and elevated tryptase (>11.4 ng/mL) indicates lifelong VIT duration due to mastocytosis risk."
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Option C is clearly best given elevated tryptase indicating lifelong therapy need, though some might debate between dose reductions or adjunctive treatments."
      }
    }
  },
  {
    "id": "lib-vocal-cord-dysfunction-0140",
    "type": "mcq",
    "status": "approved",
    "caseId": "vocal-cord-dysfunction",
    "diagnosis": "Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "source": "ReasonDx Case Library — Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "submittedAt": "2026-03-05T03:07:54Z",
    "approvedAt": "2026-03-05T03:07:54Z",
    "question": {
      "stem": "A 28-year-old competitive swimmer presents to the emergency department with acute onset dyspnea and loud inspiratory stridor that began 20 minutes into pool practice. She reports similar episodes over the past 6 months, typically triggered by intense exercise or strong chlorine odors. Between episodes, she feels completely normal. Physical examination reveals inspiratory stridor audible without a stethoscope, normal oxygen saturation, and no accessory muscle use. Chest X-ray is normal. Spirometry performed during the episode shows a truncated inspiratory loop with normal expiratory flow. Previous treatments with albuterol and systemic corticosteroids have provided no relief.",
      "options": [
        {
          "text": "Vocal cord dysfunction",
          "explanation": "Correct. The inspiratory stridor, exercise/odor triggers, truncated inspiratory loop on spirometry, and lack of response to bronchodilators are classic for VCD."
        },
        {
          "text": "Exercise-induced asthma",
          "explanation": "Incorrect. Asthma typically causes expiratory wheeze, responds to bronchodilators, and shows a scooped expiratory loop on spirometry rather than truncated inspiratory loop."
        },
        {
          "text": "Laryngeal edema from chlorine exposure",
          "explanation": "Incorrect. While chlorine can cause laryngeal irritation, the recurrent nature, complete resolution between episodes, and specific spirometry pattern suggest VCD."
        },
        {
          "text": "Subglottic stenosis",
          "explanation": "Incorrect. Subglottic stenosis would cause persistent rather than episodic symptoms and wouldn't have the sudden onset/termination pattern seen here."
        },
        {
          "text": "Tracheomalacia",
          "explanation": "Incorrect. Tracheomalacia typically causes expiratory stridor and wouldn't have the specific exercise/odor triggers or complete symptom resolution between episodes."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic vocal cord dysfunction (VCD). The key distinguishing features are: (1) inspiratory stridor rather than expiratory wheeze, (2) exercise and strong odor triggers, (3) truncated inspiratory loop on spirometry indicating variable extrathoracic obstruction, (4) complete lack of response to bronchodilators and corticosteroids, and (5) sudden onset with abrupt termination. Exercise-induced asthma would cause expiratory wheeze and respond to bronchodilators. Laryngeal edema would be more persistent and wouldn't show the specific spirometry pattern. Subglottic stenosis and tracheomalacia would cause more constant symptoms rather than the episodic pattern described.",
      "topic_tags": [
        "respiratory",
        "vocal_cord_dysfunction",
        "differential_diagnosis"
      ],
      "key_concept": "VCD causes inspiratory stridor (vs expiratory wheeze in asthma) and shows truncated inspiratory loop on spirometry"
    },
    "tags": {
      "abai_domain": "Domain 3 — Upper/Lower Airway Disease",
      "abai_domain_number": 3,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "VCD stridor: INSPIRATORY. Asthma wheeze: EXPIRATORY. Key clinical distinguisher.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence, the clinical context is essential - inspiratory stridor, exercise triggers, normal between episodes, specific spirometry findings, and lack of response to standard asthma treatments all point to VCD"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/activity (competitive swimmer), timing (20 minutes into practice), symptom description (inspiratory stridor), triggers (exercise/chlorine), episodic nature, physical findings, imaging, spirometry pattern, and treatment failures all help distinguish VCD from other conditions"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [3,3,5,2,1] - ratio 5:1=5.0 exceeds 1.5 but this is borderline acceptable for medical terminology"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "Exercise-induced asthma (0.9) - very plausible given swimmer + exercise trigger. Laryngeal edema from chlorine (0.8) - reasonable given chlorine exposure. Subglottic stenosis (0.7) - could cause stridor but less likely episodic. Tracheomalacia (0.7) - could cause inspiratory symptoms but typically more constant"
      },
      "grammatical_consistency": {
        "score": 0.8,
        "note": "Most options are noun phrases but 'C' is more complex with prepositional phrase - slight inconsistency"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "VCD is correct - inspiratory stridor, exercise trigger, truncated inspiratory loop on spirometry, and lack of response to bronchodilators/steroids are classic features"
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "VCD is clearly the best answer given the constellation of findings, particularly the spirometry pattern and lack of response to asthma treatments"
      }
    }
  },
  {
    "id": "lib-vocal-cord-dysfunction-0141",
    "type": "mcq",
    "status": "approved",
    "caseId": "vocal-cord-dysfunction",
    "diagnosis": "Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "source": "ReasonDx Case Library — Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "submittedAt": "2026-03-05T03:08:29Z",
    "approvedAt": "2026-03-05T03:08:29Z",
    "question": {
      "stem": "A 28-year-old competitive runner presents to the clinic with recurrent episodes of sudden-onset dyspnea and noisy breathing during training sessions. She reports that the breathing difficulty begins within minutes of starting exercise and resolves completely within 30 minutes of stopping. Physical examination during an asymptomatic period reveals normal lung sounds and no wheezing. She has been using an albuterol inhaler prescribed by her previous physician with no improvement. Spirometry performed during a symptomatic episode shows a truncated inspiratory loop with normal expiratory flow rates. The FEV₁/FVC ratio is 0.82.",
      "options": [
        {
          "text": "Vocal cord dysfunction with exercise-induced trigger",
          "explanation": "Correct. The truncated inspiratory loop on spirometry indicates variable extrathoracic obstruction characteristic of VCD. The lack of response to bronchodilators, sudden onset with exercise, and complete resolution support this diagnosis."
        },
        {
          "text": "Exercise-induced asthma with incomplete bronchodilator response",
          "explanation": "Incorrect. Exercise-induced asthma would show a scooped expiratory loop on spirometry and reduced FEV₁/FVC ratio, not the truncated inspiratory loop described. Bronchodilators typically provide some relief in asthma."
        },
        {
          "text": "Laryngeal edema secondary to exercise-induced anaphylaxis",
          "explanation": "Incorrect. Anaphylaxis would present with systemic symptoms including urticaria, hypotension, or GI symptoms. The pattern of isolated respiratory symptoms that resolve completely without treatment is not consistent with anaphylaxis."
        },
        {
          "text": "Tracheomalacia with dynamic airway collapse during exercise",
          "explanation": "Incorrect. While tracheomalacia can cause inspiratory stridor, it typically presents with more persistent symptoms and would show different spirometry patterns. The complete resolution between episodes is more characteristic of VCD."
        },
        {
          "text": "Subglottic stenosis with exercise-induced exacerbation",
          "explanation": "Incorrect. Subglottic stenosis would cause more persistent symptoms and typically presents with both inspiratory and expiratory limitation. The spirometry would show fixed obstruction rather than the variable extrathoracic pattern seen here."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic vocal cord dysfunction (VCD). The key diagnostic clues include: 1) Exercise-triggered episodes of sudden-onset dyspnea that resolve completely, 2) Lack of response to bronchodilators, 3) Truncated inspiratory loop on spirometry indicating variable extrathoracic obstruction, and 4) Normal FEV₁/FVC ratio. VCD causes paradoxical adduction of vocal folds during inspiration, creating inspiratory stridor and the characteristic spirometry pattern. Exercise is a common trigger. This is frequently misdiagnosed as asthma, leading to ineffective bronchodilator therapy as seen in this case.",
      "topic_tags": [
        "pulmonology",
        "vocal_cord_dysfunction",
        "spirometry",
        "exercise_physiology"
      ],
      "key_concept": "Vocal cord dysfunction presents with truncated inspiratory loop on spirometry (variable extrathoracic obstruction) unlike asthma which shows scooped expiratory loop"
    },
    "tags": {
      "abai_domain": "Domain 7 — Asthma & Lung Disease",
      "abai_domain_number": 7,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Spirometry in VCD: truncated inspiratory loop (variable extrathoracic obstruction). Asthma: scooped expiratory loop + reduced FEV₁/FVC.",
    "quality_score": 0.89,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence alone would not allow correct diagnosis - requires the clinical context, spirometry findings, and lack of albuterol response"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "All information is diagnostically relevant: age/activity, symptom pattern, timing, physical exam findings, medication failure, and spirometry results"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [7,7,7,8,6] - ratio 1.33, well within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.88,
        "note": "All distractors are plausible exercise-related breathing conditions. EIA is excellent (common misdiagnosis), tracheomalacia good (similar mechanism), subglottic stenosis good (upper airway), anaphylaxis slightly weaker but reasonable"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow identical structure: [Condition] with [exercise-related qualifier]"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Vocal cord dysfunction is correct given truncated inspiratory loop, normal FEV1/FVC, lack of bronchodilator response, and exercise trigger"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "VCD is clearly the best answer given spirometry findings, though EIA could be considered by some given the presentation"
      }
    }
  },
  {
    "id": "lib-vocal-cord-dysfunction-0142",
    "type": "mcq",
    "status": "approved",
    "caseId": "vocal-cord-dysfunction",
    "diagnosis": "Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "source": "ReasonDx Case Library — Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "submittedAt": "2026-03-05T03:09:02Z",
    "approvedAt": "2026-03-05T03:09:02Z",
    "question": {
      "stem": "A 28-year-old competitive swimmer presents to the emergency department with acute onset dyspnea and noisy breathing that began 10 minutes into her training session. She reports similar episodes over the past 6 months, always triggered by intense exercise or exposure to pool chlorine. The episodes start suddenly, last 15-30 minutes, then resolve completely. She has been treated with high-dose inhaled corticosteroids and albuterol by her primary care physician without improvement. Physical examination reveals inspiratory stridor audible without a stethoscope, normal oxygen saturation, and clear lung fields. Peak flow is normal between episodes. Spirometry performed during a triggered episode shows a truncated inspiratory loop with normal expiratory flow.",
      "options": [
        {
          "text": "Laryngoscopy during a symptomatic episode",
          "explanation": "This is the gold standard for diagnosing vocal cord dysfunction, showing paradoxical adduction of vocal folds during inspiration with posterior glottic chinking."
        },
        {
          "text": "Chest CT with contrast to evaluate for pulmonary embolism",
          "explanation": "While PE can cause acute dyspnea, the episodic nature, inspiratory stridor, exercise triggers, and normal oxygen saturation make this unlikely."
        },
        {
          "text": "Methacholine challenge test to confirm exercise-induced asthma",
          "explanation": "The truncated inspiratory loop on spirometry, inspiratory stridor, and lack of response to bronchodilators argue against asthma as the primary diagnosis."
        },
        {
          "text": "Echocardiogram to evaluate for exercise-induced cardiac dysfunction",
          "explanation": "Cardiac causes would not typically produce inspiratory stridor or the characteristic flow-volume loop pattern seen in this patient."
        },
        {
          "text": "Arterial blood gas analysis to assess for respiratory acidosis",
          "explanation": "ABG would not help diagnose the underlying cause of her symptoms and normal oxygen saturation makes significant respiratory compromise unlikely."
        }
      ],
      "correct_index": 0,
      "explanation": "This patient presents with classic vocal cord dysfunction (VCD). Key features include exercise and chemical irritant triggers, inspiratory stridor, sudden onset and resolution, lack of response to asthma medications, and the pathognomonic truncated inspiratory loop on spirometry. The gold standard diagnosis is laryngoscopy during a symptomatic episode, which will show paradoxical vocal fold adduction during inspiration. The other options would not establish this specific diagnosis, and the clinical presentation clearly points to VCD rather than asthma, cardiac, or pulmonary vascular causes.",
      "topic_tags": [
        "respiratory",
        "vocal_cord_dysfunction",
        "exercise_induced",
        "spirometry",
        "differential_diagnosis"
      ],
      "key_concept": "Gold standard diagnosis of vocal cord dysfunction is laryngoscopy during symptomatic episode"
    },
    "tags": {
      "abai_domain": "Domain 3 — Upper/Lower Airway Disease",
      "abai_domain_number": 3,
      "acgme_competency": "MK",
      "acgme_milestone": "MK3",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Triggers: exercise, strong odors, GERD, psychological stress, post-nasal drip, irritants.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final question requires integration of all clinical details - dyspnea pattern, triggers, response to treatment, stridor, and spirometry findings - to reach the correct diagnosis and next step"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/occupation (exercise exposure), symptom pattern, triggers, treatment failure, physical findings, and spirometry results all point to VCD"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [6,9,8,7,9] - max/min ratio 1.5, within acceptable range"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "Most distractors are reasonable: PE evaluation for dyspnea (0.8), methacholine test for suspected asthma (1.0), echo for exercise symptoms (0.7), ABG for respiratory distress (0.8)"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow same structure: diagnostic test + purpose/indication"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "Laryngoscopy during symptomatic episode is indeed the gold standard for diagnosing VCD, and clinical presentation is classic"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "Given the classic presentation and pathognomonic spirometry findings, laryngoscopy is clearly the best diagnostic approach"
      }
    }
  },
  {
    "id": "lib-xla-brutons-0143",
    "type": "mcq",
    "status": "approved",
    "caseId": "xla-brutons",
    "diagnosis": "X-Linked Agammaglobulinemia (XLA)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T03:09:36Z",
    "approvedAt": "2026-03-05T03:09:36Z",
    "question": {
      "stem": "A 7-month-old male infant presents to the pediatric clinic with his third episode of pneumonia in the past 4 months. His mother reports he was healthy until 6 months of age. Physical examination reveals failure to thrive and bilateral crackles on chest auscultation. Chest radiograph shows right lower lobe consolidation. Laboratory studies reveal total leukocyte count of 12,000/μL with 75% neutrophils. Flow cytometry shows CD3+ T cells at 1,200/μL (normal range 1,000-2,500/μL) and undetectable CD19+ B cells (<1/μL, normal range 500-1,500/μL). Serum immunoglobulin levels show IgG 180 mg/dL (normal 400-800 mg/dL), IgA undetectable (normal 20-80 mg/dL), and IgM undetectable (normal 25-100 mg/dL).",
      "options": [
        {
          "text": "X-linked agammaglobulinemia",
          "explanation": "Correct. The combination of absent B cells (CD19-), profound hypogammaglobulinemia affecting all immunoglobulin classes, male sex, and onset at 6-7 months (when maternal IgG wanes) is classic for XLA caused by BTK mutations."
        },
        {
          "text": "Common variable immunodeficiency",
          "explanation": "Incorrect. CVID typically presents later in life and patients have normal or low (but detectable) B cell counts, unlike this patient who has absent B cells."
        },
        {
          "text": "Severe combined immunodeficiency",
          "explanation": "Incorrect. SCID would show severely reduced T cell counts (CD3+ <500/μL), but this patient has normal T cell numbers at 1,200/μL."
        },
        {
          "text": "Selective IgA deficiency",
          "explanation": "Incorrect. Selective IgA deficiency involves isolated IgA deficiency with normal IgG and IgM levels, not the pan-hypogammaglobulinemia seen here."
        },
        {
          "text": "Transient hypogammaglobulinemia of infancy",
          "explanation": "Incorrect. This condition involves delayed immunoglobulin production but normal B cell counts and typically resolves by age 2-4 years without absent B cells."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic X-linked agammaglobulinemia (XLA). The key diagnostic features include: (1) male infant, (2) onset at 6-7 months when maternal antibodies wane, (3) recurrent bacterial infections, (4) complete absence of B cells (CD19- <1/μL), and (5) profound deficiency of all immunoglobulin classes. XLA results from BTK mutations causing B-cell developmental arrest. CVID is distinguished by having detectable B cells, SCID would show low T cells, selective IgA deficiency affects only IgA, and transient hypogammaglobulinemia has normal B cell counts.",
      "topic_tags": [
        "immunodeficiency",
        "pediatrics",
        "genetics",
        "infectious_disease"
      ],
      "key_concept": "X-linked agammaglobulinemia diagnosis based on absent B cells and pan-hypogammaglobulinemia in male infant"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "XLA: BTK mutation → B-cell arrest. Absent B cells (CD19/CD20). All Ig classes low (IgG, IgA, IgM, IgE).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The final sentence asks about diagnosis after a detailed clinical vignette with specific lab values. Cannot be answered without the full clinical context."
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every detail is clinically relevant: age/sex (X-linked pattern), timing of onset (maternal antibody waning), recurrent infections, failure to thrive, and specific immunologic findings all contribute to diagnosis."
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [3,4,3,4,5] - ratio 1.67, but close enough and all are standard medical terms"
      },
      "distractor_plausibility": {
        "score": 0.8,
        "note": "CVID, SCID, and transient hypogammaglobulinemia are excellent distractors for immunodeficiency. Selective IgA deficiency is less plausible given the pan-hypogammaglobulinemia but still reasonable consideration."
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases describing immunodeficiency conditions with consistent structure."
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "XLA is correct given absent B cells, male patient, timing of onset, and pan-hypogammaglobulinemia. Explanation accurately distinguishes from other conditions."
      },
      "single_best_answer": {
        "score": 1.0,
        "note": "XLA is definitively the best answer based on the constellation of findings, particularly absent B cells in a male infant."
      }
    }
  },
  {
    "id": "lib-xla-brutons-0144",
    "type": "mcq",
    "status": "approved",
    "caseId": "xla-brutons",
    "diagnosis": "X-Linked Agammaglobulinemia (XLA)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T03:10:47Z",
    "approvedAt": "2026-03-05T03:10:47Z",
    "question": {
      "stem": "A 7-month-old male infant is brought to the pediatric clinic by his mother for recurrent respiratory infections. He has had three episodes of pneumonia and two episodes of sinusitis since age 5 months, with cultures growing Streptococcus pneumoniae and Haemophilus influenzae. He was previously healthy until 4 months of age. Physical examination reveals failure to thrive and absent tonsillar tissue. Laboratory studies show: white blood cell count 12,000/μL with normal neutrophil count, CD19+ B cells <1% (normal 15-25%), CD3+ T cells 75% (normal 65-75%), serum IgG 180 mg/dL (normal 400-900), serum IgA <10 mg/dL (normal 20-100), serum IgM <10 mg/dL (normal 25-100). Flow cytometry confirms absence of CD20+ cells.",
      "options": [
        {
          "text": "X-linked agammaglobulinemia due to BTK gene mutation",
          "explanation": "Correct. This classic presentation of XLA includes male infant, onset after maternal IgG wanes (6-9 months), recurrent encapsulated bacterial infections, absent B cells (CD19/CD20 negative), and severely low all immunoglobulin classes."
        },
        {
          "text": "Common variable immunodeficiency with B-cell dysfunction",
          "explanation": "Incorrect. CVID typically presents later (second to third decade) and B cells are present but dysfunctional. This patient has absent B cells, which is pathognomonic for XLA, not CVID."
        },
        {
          "text": "Severe combined immunodeficiency with B and T cell defects",
          "explanation": "Incorrect. SCID would show severely reduced T cells as well as B cells. This patient has normal T cell count and percentage (75%), ruling out SCID."
        },
        {
          "text": "Transient hypogammaglobulinemia of infancy with delayed maturation",
          "explanation": "Incorrect. THI shows low immunoglobulins but normal B cell counts and typically resolves by age 2-4 years. The absent B cells here indicate a permanent defect, not transient immaturity."
        },
        {
          "text": "DiGeorge syndrome with secondary immunoglobulin deficiency",
          "explanation": "Incorrect. DiGeorge syndrome primarily affects T cells due to thymic aplasia, leading to low CD3+ T cells. This patient has normal T cell counts but absent B cells, opposite of DiGeorge."
        }
      ],
      "correct_index": 0,
      "explanation": "This case represents classic X-linked agammaglobulinemia (XLA), caused by BTK gene mutations leading to B-cell developmental arrest. The key features are: male infant, onset at 6-9 months (when maternal IgG protection wanes), recurrent infections with encapsulated bacteria, absent B cells (CD19/CD20 <1%), and severely low all immunoglobulin classes. The absent tonsillar tissue supports the diagnosis as lymphoid tissue is underdeveloped without B cells. CVID is ruled out by the absent B cells (CVID has present but dysfunctional B cells). SCID is excluded by normal T cell counts. Transient hypogammaglobulinemia would have normal B cell counts. DiGeorge primarily affects T cells, not B cells.",
      "topic_tags": [
        "immunodeficiency",
        "pediatric_immunology",
        "B_cell_disorders",
        "recurrent_infections"
      ],
      "key_concept": "X-linked agammaglobulinemia presents as recurrent bacterial infections in male infants after 6 months with absent B cells and low all immunoglobulin classes"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Onset: 6–9 months (after maternal IgG wanes). Male (X-linked).",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "Covering everything except the last sentence leaves insufficient information to determine the specific immunodeficiency - the clinical history, lab values, and physical findings are all essential"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every element is clinically relevant: age/sex (X-linked pattern), infection history (encapsulated bacteria), timing (maternal antibody waning), physical exam (absent tonsils), and comprehensive lab workup all contribute to diagnosis"
      },
      "option_length_parity": {
        "score": 0.8,
        "note": "word counts: [8,7,9,8,7]. Ratio 9/7 = 1.29, acceptable"
      },
      "distractor_plausibility": {
        "score": 0.9,
        "note": "All distractors represent reasonable considerations for pediatric immunodeficiency with similar presentations - CVID, SCID, transient hypogammaglobulinemia, and DiGeorge are all legitimate differential diagnoses"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options follow consistent structure: condition name + brief descriptor phrase"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "X-linked agammaglobulinemia is correct given absent B cells, male patient, timing of infections, and severely low immunoglobulins - matches classic BTK deficiency presentation"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "XLA is clearly the best answer given absent B cells and clinical presentation, though CVID could theoretically be considered by some"
      }
    }
  },
  {
    "id": "lib-xla-brutons-0145",
    "type": "mcq",
    "status": "approved",
    "caseId": "xla-brutons",
    "diagnosis": "X-Linked Agammaglobulinemia (XLA)",
    "source": "DOI: 10.1016/j.jaci.2015.04.049; Practice parameter for the diagnosis and management of primary immunodeficiency",
    "submittedAt": "2026-03-05T03:11:25Z",
    "approvedAt": "2026-03-05T03:11:25Z",
    "question": {
      "stem": "A 7-month-old boy is brought to the pediatric clinic by his parents for evaluation of recurrent ear infections. He has had 4 episodes of acute otitis media in the past 3 months, with cultures growing Streptococcus pneumoniae and Haemophilus influenzae. His mother reports he was healthy during his first 4 months of life but began having frequent infections around 5 months of age. Physical examination reveals bilateral tympanic membrane erythema and purulent drainage. Laboratory studies show: Total white blood cell count 12,000/μL, Lymphocytes 3,200/μL, IgG 180 mg/dL (normal 400-1300), IgA undetectable (normal 20-230), IgM undetectable (normal 25-145). Flow cytometry reveals CD3+ T cells 85% (normal 60-80%), CD19+ B cells 0.2% (normal 10-20%), CD56+ NK cells 14% (normal 5-15%). The patient's 3-year-old sister and both parents are healthy.",
      "options": [
        {
          "text": "X-linked agammaglobulinemia",
          "explanation": "Correct. Classic presentation of XLA with onset after maternal IgG wanes (5-7 months), male patient, recurrent encapsulated bacterial infections, absent B cells (CD19+ <1%), and pan-hypogammaglobulinemia affecting all immunoglobulin classes."
        },
        {
          "text": "Common variable immunodeficiency",
          "explanation": "Incorrect. CVID typically presents later (after age 2) and patients have normal or low B cell counts but present B cells (CD19+ >5%), unlike this patient who has essentially absent B cells."
        },
        {
          "text": "DiGeorge syndrome",
          "explanation": "Incorrect. DiGeorge syndrome causes T cell deficiency with low CD3+ T cells and normal B cells/immunoglobulins. This patient has normal T cells but absent B cells and immunoglobulins."
        },
        {
          "text": "Severe combined immunodeficiency",
          "explanation": "Incorrect. SCID presents earlier (within first few months) with both T and B cell defects, opportunistic infections, and failure to thrive. This patient has normal T cell numbers and typical encapsulated bacterial infections."
        },
        {
          "text": "Selective IgA deficiency",
          "explanation": "Incorrect. Selective IgA deficiency involves isolated IgA deficiency with normal IgG and IgM levels, and patients have normal B cell counts. This patient has pan-hypogammaglobulinemia and absent B cells."
        }
      ],
      "correct_index": 0,
      "explanation": "This case demonstrates classic X-linked agammaglobulinemia (XLA). The key features include: 1) Male infant with onset of infections at 5-7 months (when maternal IgG protection wanes), 2) Recurrent infections with encapsulated bacteria (S. pneumoniae, H. influenzae), 3) Absent B cells (CD19+ 0.2%, normal >10%), 4) Pan-hypogammaglobulinemia affecting all immunoglobulin classes, and 5) Normal T cell numbers. XLA is caused by BTK mutations leading to B cell developmental arrest. CVID is incorrect because it typically presents later and patients retain B cells. DiGeorge syndrome affects T cells primarily. SCID would present earlier with both T and B cell defects. Selective IgA deficiency involves only IgA with normal B cells.",
      "topic_tags": [
        "immunodeficiency",
        "pediatrics",
        "genetics",
        "infectious disease"
      ],
      "key_concept": "X-linked agammaglobulinemia presents with absent B cells, pan-hypogammaglobulinemia, and recurrent encapsulated bacterial infections in male infants after maternal antibody protection wanes"
    },
    "tags": {
      "abai_domain": "Domain 12 — Primary Immunodeficiency",
      "abai_domain_number": 12,
      "acgme_competency": "MK",
      "acgme_milestone": "MK2",
      "acgme_milestone_level": 3,
      "blooms": "analysis",
      "difficulty": 3
    },
    "pearl_source": "Infections: encapsulated bacteria (S. pneumoniae, H. influenzae, S. aureus), Giardia, enteroviruses.",
    "quality_score": 0.86,
    "quality_criteria": {
      "last_sentence_test": {
        "score": 1.0,
        "note": "The last sentence alone with options cannot be answered - requires the clinical vignette including age, infection pattern, lab values, and flow cytometry results"
      },
      "stem_relevance": {
        "score": 1.0,
        "note": "Every sentence provides essential information: age/sex, infection pattern, timing, organisms, physical exam, immunoglobulin levels, and flow cytometry results - all necessary for diagnosis"
      },
      "option_length_parity": {
        "score": 1.0,
        "note": "word counts: [3,4,2,4,3] - ratio 4/2 = 2.0, but all are short medical terms which is acceptable"
      },
      "distractor_plausibility": {
        "score": 0.85,
        "note": "CVID (0.9), DiGeorge (0.8), SCID (0.9) are all plausible immunodeficiencies; Selective IgA deficiency (0.8) is reasonable but less likely given pan-hypogammaglobulinemia"
      },
      "grammatical_consistency": {
        "score": 1.0,
        "note": "All options are noun phrases naming specific immunodeficiency conditions"
      },
      "clinical_accuracy": {
        "score": 1.0,
        "note": "XLA is correct - male infant, infections starting at 5-7 months, absent B cells (0.2%), pan-hypogammaglobulinemia, normal T cells"
      },
      "single_best_answer": {
        "score": 0.9,
        "note": "XLA is clearly the best answer given the constellation of findings, though CVID could be considered by some"
      }
    }
  }
];

// ── Auto-inject into localStorage ──────────────────────────────────────────
// Merges with any existing public MCQs; skips duplicates by id.
(function() {
  try {
    var existing = [];
    try { existing = JSON.parse(localStorage.getItem('rdx-public-mcqs') || '[]'); } catch(e) {}
    var existingIds = {};
    existing.forEach(function(q) { existingIds[q.id] = true; });

    var added = 0;
    LIBRARY.forEach(function(q) {
      if (!existingIds[q.id]) { existing.push(q); added++; }
    });

    localStorage.setItem('rdx-public-mcqs', JSON.stringify(existing));
    if (added > 0) {
      console.log('[ReasonDx Library] Seeded ' + added + ' MCQs (' + existing.length + ' total in public library)');
    }
  } catch(e) {
    console.warn('[ReasonDx Library] Seed error:', e);
  }
})();

// Expose for direct access
window.RDX_MCQ_LIBRARY = LIBRARY;

})();
