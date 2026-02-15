#!/usr/bin/env python3
"""Generate 6 gap-fill scenarios and inject into existing RadDx modules."""

import re, os

def make_scenario_html(s):
    def choices(step):
        opts = step.get("options", {})
        correct = step.get("correct", "A")
        h = f'<div class="choices" data-correct="{correct}">'
        for letter, text in opts.items():
            h += f'<div class="choice" onclick="selectChoice(this,\'{letter}\')"><span class="choice-letter">{letter}.</span><span>{text}</span></div>'
        h += '</div>'
        return h

    def explanation(step, pearl=True, rp=False):
        h = '<div class="explanation">'
        h += f'<h5>{step.get("explanation","")}</h5><p>{step.get("text","")}</p>'
        if pearl and "pearl" in step:
            parts = step["pearl"].split(":", 1)
            h += f'<div class="pearl"><strong>🌍 {parts[0]}:</strong>{parts[1] if len(parts)>1 else ""}</div>'
        if rp and "radiopaedia" in step:
            h += f'<a href="{step["radiopaedia"]}" target="_blank" rel="noopener" class="radiopaedia-link">📚 Explore on Radiopaedia →</a>'
        h += '</div>'
        return h

    return f'''
<div class="scenario"><div class="scenario-header"><span class="scenario-modality">{s["modality"]}</span><span class="scenario-title">{s["title"]}</span></div>
<div class="scenario-body">
<div class="vignette"><div class="vignette-label">Clinical Vignette</div>{s["vignette"]}</div>
<div class="reasoning-steps">
<div class="reasoning-step step-0"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">🌍</span><span>Epidemiological Context</span><span class="step-arrow">▾</span></button>
<div class="step-content">{choices(s["context"])}{explanation(s["context"])}</div></div>
<div class="reasoning-step step-1"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">1</span><span>What imaging would you order?</span><span class="step-arrow">▾</span></button>
<div class="step-content">{choices(s["order"])}{explanation(s["order"])}</div></div>
<div class="reasoning-step step-2"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">2</span><span>What findings do you expect?</span><span class="step-arrow">▾</span></button>
<div class="step-content">{choices(s["expect"])}{explanation(s["expect"], pearl=False)}</div></div>
<div class="reasoning-step step-3"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">3</span><span>How do you interpret these findings?</span><span class="step-arrow">▾</span></button>
<div class="step-content">{choices(s["interpret"])}{explanation(s["interpret"], pearl="pearl" in s["interpret"], rp=True)}</div></div>
<div class="reasoning-step step-4"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">4</span><span>How does this change your management?</span><span class="step-arrow">▾</span></button>
<div class="step-content">{choices(s["integrate"])}{explanation(s["integrate"], pearl=False, rp="radiopaedia" in s["integrate"])}</div></div>
</div></div></div>'''


# ============================================================
# GAP-FILL SCENARIOS
# ============================================================

SCENARIOS = {
    "modules/raddx-chest.html": [
        {
            "modality": "Low-Dose CT (LDCT)",
            "title": "Lung Cancer Screening — Lung-RADS",
            "vignette": "A <strong>62-year-old male</strong> presents for his annual wellness visit. He smoked 1.5 packs/day for 30 years and quit 8 years ago. He has COPD and mild emphysema. No respiratory symptoms beyond baseline. His wife recently died of lung cancer, prompting him to ask about screening. He works in construction with prior asbestos exposure.",
            "context": {
                "question": "What epidemiological factors determine lung cancer screening eligibility and this patient's risk profile?",
                "correct": "D",
                "options": {
                    "A": "Only current smokers benefit from lung cancer screening",
                    "B": "Quitting smoking 8 years ago eliminates his lung cancer risk",
                    "C": "Lung cancer screening is recommended for all adults over 50",
                    "D": "USPSTF 2021 criteria: age 50-80, ≥20 pack-year smoking history, currently smoke or quit within 15 years. He qualifies (62yo, 45 pack-years, quit 8 years ago). His risk is compounded by asbestos exposure (synergistic with smoking — 50-90× risk) and COPD (independent risk factor). The NLST trial showed LDCT screening reduces lung cancer mortality by 20% and all-cause mortality by 6.7%. Shared decision-making is REQUIRED before screening initiation"
                },
                "explanation": "Lung Cancer Screening Eligibility and Epidemiology",
                "text": "Lung cancer is the #1 cause of cancer death in both men and women. <strong>USPSTF 2021 expanded criteria</strong> (vs 2013): lowered age from 55→50 and pack-years from 30→20, adding ~6.4 million eligible Americans. <strong>The NLST trial</strong> (53,000+ participants): LDCT vs CXR screening showed 20% lung cancer mortality reduction. <strong>Risk factors beyond smoking</strong>: asbestos (synergistic — smoking × asbestos = 50-90× risk), radon (2nd leading cause of lung cancer), occupational carcinogens (silica, diesel exhaust, chromium), family history, COPD/emphysema, prior radiation therapy. <strong>Health disparities</strong>: Black men have the highest lung cancer incidence and mortality, yet screening uptake is lowest in Black and rural populations.",
                "pearl": "Epidemiologic Pearl: Despite strong evidence, LDCT screening uptake in the US is only ~5-15% of eligible individuals — one of the largest gaps between evidence and implementation in cancer screening. Barriers include lack of awareness, primary care physician screening behavior, insurance navigation, and the stigma of smoking ('I deserve it'). Integrating screening with smoking cessation counseling doubles quit rates — every screening visit is a cessation opportunity."
            },
            "order": {
                "correct": "A",
                "options": {
                    "A": "Low-dose CT chest (LDCT) — the only validated screening modality for lung cancer. Non-contrast, ~1.5 mSv (equivalent to 6 months of background radiation). Results classified using the Lung-RADS system",
                    "B": "Standard chest CT with contrast",
                    "C": "Chest X-ray annually (the prior standard)",
                    "D": "Sputum cytology"
                },
                "explanation": "LDCT — The Only Validated Screening Modality",
                "text": "LDCT uses ultra-low radiation dose (~1.5 mSv vs ~7 mSv for standard chest CT) without IV contrast. <strong>CXR is NOT adequate for lung cancer screening</strong> — the NLST and PLCO trials showed no mortality benefit from CXR screening. Results are reported using <strong>Lung-RADS</strong> (Lung CT Screening Reporting and Data System): standardizes nodule management based on size, morphology, and growth. Annual LDCT continues until the patient no longer meets criteria (age >80, quit >15 years ago, or develops a health condition limiting life expectancy or willingness to pursue treatment)."
            },
            "expect": {
                "correct": "C",
                "options": {
                    "A": "Lung-RADS 1 (negative) — completely normal scan",
                    "B": "Large central mass (advanced cancer)",
                    "C": "Given his emphysema, expect background changes (centrilobular emphysema, possible bullae). A common screening finding: Lung-RADS 2 (benign appearance — small calcified granulomas, stable nodules) or Lung-RADS 3 (probably benign — 6mm+ solid nodule requiring 6-month follow-up) or Lung-RADS 4A/4B (suspicious — growing or large nodule requiring further workup). Most positive screens are FALSE positives (~25% overall positive rate, but only ~4% are cancer)",
                    "D": "Normal lungs with no emphysema"
                },
                "explanation": "Lung-RADS Classification and False Positive Rates",
                "text": "<strong>Lung-RADS categories</strong>: <strong>1</strong> (negative, no nodules): continue annual screening. <strong>2</strong> (benign appearance): continue annual screening. <strong>3</strong> (probably benign, <1% malignancy): 6-month LDCT follow-up. <strong>4A</strong> (suspicious, 5-15% malignancy): 3-month LDCT or PET-CT. <strong>4B</strong> (very suspicious, >15%): chest CT with contrast, PET-CT, and/or tissue sampling. <strong>4X</strong> (additional features raising suspicion). <strong>False positive management</strong> is the biggest challenge: ~25% of screens are positive, but >95% of those are benign. This creates anxiety, additional imaging, and occasional unnecessary procedures."
            },
            "interpret": {
                "correct": "B",
                "options": {
                    "A": "Biopsy all nodules found on screening",
                    "B": "Management per Lung-RADS category: Lung-RADS 1-2 → annual LDCT. Lung-RADS 3 → 6-month short-interval follow-up LDCT. Lung-RADS 4A → 3-month LDCT or PET-CT. Lung-RADS 4B → PET-CT and/or biopsy (CT-guided, bronchoscopic, or surgical). Growth on serial LDCT is the most reliable indicator of malignancy",
                    "C": "PET-CT for all positive screens",
                    "D": "Repeat LDCT in 1 year regardless of findings"
                },
                "explanation": "Lung-RADS Drives Structured Follow-Up",
                "text": "The Lung-RADS system prevents both overreaction (unnecessary biopsies for benign nodules) and underreaction (missing early cancers). <strong>PET-CT</strong> is useful for nodules >8mm to assess metabolic activity (SUV >2.5 suggests malignancy), but has limitations: false positives from inflammation/infection, false negatives for slow-growing adenocarcinomas and carcinoid. <strong>Tissue diagnosis</strong> can be obtained via: CT-guided percutaneous biopsy (peripheral nodules), navigational bronchoscopy (central or difficult-to-access), or surgical resection (VATS lobectomy for highly suspicious lesions). <strong>Multidisciplinary tumor board</strong> review is recommended for all Lung-RADS 4 findings.",
                "radiopaedia": "https://radiopaedia.org/articles/lung-screening-reporting-and-data-system-lung-rads"
            },
            "integrate": {
                "correct": "D",
                "options": {
                    "A": "LDCT and return in 1 year with no other intervention",
                    "B": "Screening replaces the need for smoking cessation",
                    "C": "Stop screening since he quit smoking",
                    "D": "Initiate LDCT screening with shared decision-making + smoking cessation reinforcement (screening visits are cessation opportunities — quitting reduces lung cancer risk 30-50% over 10 years) + manage per Lung-RADS results + document asbestos exposure (may qualify for additional screening/surveillance programs) + address incidental findings (LDCT commonly detects coronary calcification, emphysema, other findings — each requires appropriate follow-up) + annual rescreening until age 80 or >15 years since quit + integrate with comprehensive cancer prevention (colon cancer screening, other age-appropriate)"
                },
                "explanation": "Screening + Cessation + Incidental Finding Management",
                "text": "LDCT screening is not just cancer detection — it's a comprehensive lung health intervention. <strong>Incidental findings</strong> on LDCT are extremely common: coronary artery calcification (predicts cardiovascular events), emphysema severity (may change COPD management), thyroid nodules, adrenal incidentalomas, and vertebral compression fractures. Each requires appropriate follow-up. His asbestos exposure history may qualify him for additional surveillance programs (VA, workers' compensation). The screening visit is also the ideal time to reinforce smoking cessation, update vaccinations (pneumococcal, influenza), and address other preventive care gaps."
            }
        }
    ],
    "modules/raddx-abdominal.html": [
        {
            "modality": "CT Abdomen/Pelvis with Contrast",
            "title": "Acute Diverticulitis — When to Image and When Not To",
            "vignette": "A <strong>48-year-old male</strong> presents with 2 days of left lower quadrant pain, low-grade fever (38.2°C), and mild nausea. He has a BMI of 36, eats a low-fiber Western diet, is sedentary, and takes NSAIDs regularly for knee pain. No prior episodes. On exam: LLQ tenderness with mild guarding, no peritoneal signs. WBC 13,800, CRP 85.",
            "context": {
                "question": "What epidemiological and dietary factors have made diverticulitis one of the most common GI emergencies?",
                "correct": "C",
                "options": {
                    "A": "Diverticulitis only affects elderly patients",
                    "B": "Diverticulosis always progresses to diverticulitis",
                    "C": "Diverticulosis is present in >60% of adults >60 in Western countries (driven by low-fiber diet), but only 10-25% develop diverticulitis. This patient has multiple risk factors: obesity (strongest modifiable risk, 1.5-3× risk), low-fiber diet (reduced stool bulk → increased intraluminal pressure), sedentary lifestyle, NSAID use (1.5-3× risk for complicated diverticulitis), and younger age at presentation (patients <50 are the fastest-growing demographic, often with more aggressive disease). Red meat and processed food consumption also increase risk",
                    "D": "Fiber intake has no effect on diverticular disease"
                },
                "explanation": "Diverticulitis Epidemiology — A Disease of Western Lifestyle",
                "text": "Diverticulitis has transformed from a disease of the elderly to one affecting younger patients: <strong>hospital admissions for diverticulitis in patients <50 have increased 132% over two decades</strong>. The 'fiber hypothesis' (Painter and Burkitt, 1970s) proposed that low-fiber Western diets cause increased colonic intraluminal pressure, leading to diverticular herniation. While the relationship is more complex than originally proposed, <strong>modifiable risk factors are clear</strong>: obesity (strongest), low-fiber diet, sedentary lifestyle, smoking, and NSAIDs/aspirin/corticosteroids (increase risk of perforation). <strong>Geographic variation</strong>: left-sided (sigmoid) predominance in Western countries; right-sided predominance in Asian countries (different pathophysiology, better prognosis).",
                "pearl": "Epidemiologic Pearl: The traditional teaching that 'nuts, seeds, and popcorn cause diverticulitis' has been definitively debunked — a large prospective study (HPFS, 47,000+ men, 18-year follow-up) showed NO increased risk, and popcorn was actually associated with DECREASED risk. Fiber supplementation, weight loss, and physical activity are the evidence-based prevention strategies. Also: recurrence rate after first episode is lower than previously thought (~20% at 10 years, not 50% as older literature suggested), which has changed the indications for elective sigmoid resection."
            },
            "order": {
                "correct": "B",
                "options": {
                    "A": "CT is required for all suspected diverticulitis",
                    "B": "CT abdomen/pelvis with IV contrast is the gold standard for diagnosing and classifying diverticulitis. However, for UNCOMPLICATED presentations (classic symptoms, no peritoneal signs, no immunosuppression), AGA 2022 guidelines suggest CT may NOT be needed for a typical first presentation if clinical probability is high — a paradigm shift toward imaging stewardship",
                    "C": "Abdominal ultrasound only",
                    "D": "Colonoscopy to confirm the diagnosis"
                },
                "explanation": "CT — Gold Standard with an Evolving Stewardship Discussion",
                "text": "CT with IV contrast has >95% sensitivity and specificity for diverticulitis. It classifies disease severity using the <strong>modified Hinchey classification</strong>: <strong>Ia</strong> (confined pericolic inflammation), <strong>Ib</strong> (pericolic/mesocolic abscess), <strong>II</strong> (pelvic/distant abscess), <strong>III</strong> (purulent peritonitis — perforated), <strong>IV</strong> (feculent peritonitis). <strong>Emerging imaging stewardship</strong>: AGA conditional recommendation suggests that in patients with classic LLQ pain + fever + leukocytosis without red flags (immunosuppression, peritonitis, inability to tolerate oral intake), a clinical diagnosis without CT may be reasonable. However, CT is still standard for first presentations (to exclude mimics like colon cancer, ovarian pathology, and complications)."
            },
            "expect": {
                "correct": "B",
                "options": {
                    "A": "Normal CT — this is IBS",
                    "B": "Sigmoid colon wall thickening with pericolic fat stranding (the hallmark), diverticula, and possible small pericolic fluid collection. Hinchey Ia (uncomplicated). CT also evaluates for complications: abscess (Hinchey Ib-II), free air (perforation, Hinchey III-IV), obstruction, and fistula",
                    "C": "Sigmoid colon mass suggesting cancer",
                    "D": "Appendicitis (right-sided findings)"
                },
                "explanation": "CT Classifies Severity and Detects Complications",
                "text": "CT findings: <strong>Uncomplicated</strong>: segmental sigmoid wall thickening (>4mm), pericolic fat stranding (inflammation extending into mesenteric fat), diverticula, ± small pericolic fluid. <strong>Complicated</strong>: abscess (rim-enhancing fluid collection — Hinchey Ib if pericolic, II if pelvic/distant), extraluminal air (microperforation vs gross perforation), fistula (colovesical — air in bladder, colovaginal, colocutaneous), or obstruction. <strong>Cancer exclusion</strong>: CT can suggest but cannot definitively exclude underlying colorectal cancer — follow-up colonoscopy after resolution (6-8 weeks) is recommended for first episodes, especially in patients >50 or with atypical features."
            },
            "interpret": {
                "correct": "A",
                "options": {
                    "A": "CT confirms uncomplicated diverticulitis (Hinchey Ia) → OUTPATIENT management with oral antibiotics (though recent evidence suggests antibiotics may NOT be necessary for uncomplicated disease — DIABOLO and AVOD trials showed no difference in outcomes). Clear liquid diet advancing as tolerated. If abscess >3-4cm (Hinchey Ib-II) → CT-guided percutaneous drainage + IV antibiotics",
                    "B": "Surgery for all diverticulitis",
                    "C": "IV antibiotics and hospitalization for all cases",
                    "D": "Colonoscopy during the acute episode"
                },
                "explanation": "Hinchey Classification Drives Management",
                "text": "Management by Hinchey stage: <strong>Ia (uncomplicated)</strong>: outpatient management (oral antibiotics × 7-10 days if used, though evidence increasingly supports no antibiotics for mild uncomplicated disease in immunocompetent patients). <strong>Ib-II (abscess)</strong>: small abscess (<3cm) — IV antibiotics alone; larger abscess (>3-4cm) — CT-guided percutaneous drainage + IV antibiotics. <strong>III-IV (perforation/peritonitis)</strong>: emergency surgery (Hartmann procedure or primary anastomosis with diverting loop ileostomy). <strong>AVOID colonoscopy during acute episode</strong> — risk of perforation. Colonoscopy at 6-8 weeks after resolution to exclude cancer.",
                "radiopaedia": "https://radiopaedia.org/articles/acute-diverticulitis"
            },
            "integrate": {
                "correct": "D",
                "options": {
                    "A": "Antibiotics and no follow-up",
                    "B": "Emergency surgery for uncomplicated disease",
                    "C": "Lifelong antibiotic prophylaxis",
                    "D": "Outpatient management (± antibiotics per shared decision-making based on recent evidence) + dietary modification (high-fiber diet — 25-30g/day after acute episode resolves) + weight loss counseling (obesity is the strongest modifiable risk) + STOP NSAIDs (switch to acetaminophen — NSAIDs increase risk of complicated recurrence 3-4×) + exercise prescription (reduces recurrence risk) + colonoscopy at 6-8 weeks (exclude cancer/polyps) + discuss that elective surgery is NOT routinely indicated after first uncomplicated episode (outdated practice)"
                },
                "explanation": "Treat + Modify Risk Factors + Colonoscopy Follow-Up",
                "text": "The CT finding classified the severity and enabled appropriate outpatient management. The comprehensive plan targets every modifiable risk factor: high-fiber diet (the strongest dietary intervention), weight loss, exercise, and NSAID cessation. <strong>The paradigm shift in diverticulitis management</strong> over the past decade has been dramatic: antibiotics may not be needed for uncomplicated disease, elective surgery is no longer recommended after 2 uncomplicated episodes (previously the standard), and mesalamine/rifaximin for prevention have shown mixed results. Follow-up colonoscopy is essential — 1-2% of patients diagnosed with diverticulitis on CT have an underlying colorectal cancer detected on subsequent colonoscopy."
            }
        }
    ],
    "modules/raddx-neuro.html": [
        {
            "modality": "MRI Spine with Contrast",
            "title": "Spinal Cord Compression — Oncologic Emergency",
            "vignette": "A <strong>64-year-old male</strong> with metastatic non-small cell lung cancer (diagnosed 8 months ago, on immunotherapy) presents with 1 week of progressive mid-back pain that is WORSE when lying down (unlike mechanical back pain). Over the past 48 hours, he has developed bilateral leg weakness, difficulty walking, and urinary hesitancy. On exam: bilateral lower extremity weakness (4/5), hyperreflexia, bilateral Babinski signs, and a sensory level at approximately T8.",
            "context": {
                "question": "What epidemiological factors make metastatic spinal cord compression (MSCC) the most urgent diagnosis?",
                "correct": "D",
                "options": {
                    "A": "Back pain in cancer patients is usually muscular",
                    "B": "Spinal cord compression only occurs with spinal tumors",
                    "C": "Urinary symptoms are unrelated to spinal pathology",
                    "D": "MSCC affects 5-10% of all cancer patients — it is the second most common neurological complication of cancer after brain metastases. The classic presentation: back pain WORSE at night/lying down (distinguishing it from mechanical pain) + progressive neurological deficit (weakness, sensory level, bowel/bladder dysfunction). Lung, breast, and prostate cancers account for >60% of MSCC cases. NEUROLOGICAL STATUS AT TREATMENT INITIATION determines outcome: patients who are ambulatory at diagnosis have >80% chance of remaining ambulatory; patients who are paraplegic have <10% chance of regaining function"
                },
                "explanation": "MSCC — A Time-Critical Oncologic Emergency",
                "text": "<strong>MSCC epidemiology by primary cancer</strong>: lung (most common), breast, prostate, renal cell, myeloma, lymphoma. <strong>Vertebral level</strong> correlates with cancer type: thoracic (60-70% — most common overall), lumbar (20-30%), cervical (10%). <strong>The neurological window</strong>: cord compression causes progressive ischemia — initially reversible (edema and venous congestion) but becoming irreversible (infarction) within hours to days. <strong>Ambulatory status is the single best prognostic factor</strong>: 80-90% of patients ambulatory at diagnosis remain so after treatment; <10-20% of non-ambulatory patients regain walking ability. This makes EARLY diagnosis critical — back pain in ANY cancer patient should trigger immediate evaluation.",
                "pearl": "Epidemiologic Pearl: The 'red flags' for MSCC should be memorized by every physician: cancer history + new back pain (especially worse at night/supine, unrelenting, progressive), progressive neurological deficit, bowel/bladder dysfunction. The median time from symptom onset to diagnosis is 2 MONTHS — this delay is the primary reason for poor outcomes. Every cancer patient presenting with new back pain deserves urgent MRI, not 'conservative management with NSAIDs and follow-up in 2 weeks.'"
            },
            "order": {
                "correct": "A",
                "options": {
                    "A": "EMERGENT MRI of the ENTIRE spine with and without gadolinium contrast — the gold standard for MSCC (sensitivity >95%). MRI of the ENTIRE spine is required because 10-38% of patients have multiple non-contiguous levels of compression",
                    "B": "CT spine without contrast",
                    "C": "Spine X-rays first",
                    "D": "Bone scan to identify metastatic sites"
                },
                "explanation": "Whole-Spine MRI — Emergent, Not Urgent",
                "text": "MRI is the definitive study: shows cord compression, epidural tumor mass, vertebral body involvement, paraspinal extension, and the number/location of all metastatic sites. <strong>CRITICAL: image the ENTIRE spine</strong> (cervical through sacrum) — multiple non-contiguous sites are found in 10-38% of patients, and missing a second level of compression leads to incomplete treatment. MRI also distinguishes: epidural tumor compression (most common), pathological fracture with retropulsed bone, and intradural/intramedullary metastases (rare). <strong>If MRI is contraindicated or unavailable</strong>: CT myelography is the alternative. <strong>Plain X-rays and bone scans are inadequate</strong> — they detect bony changes but cannot evaluate the spinal cord."
            },
            "expect": {
                "correct": "C",
                "options": {
                    "A": "Normal MRI — the symptoms are from spinal stenosis",
                    "B": "Disc herniation causing cord compression",
                    "C": "Vertebral body metastasis at T7-T8 with epidural soft tissue mass compressing the spinal cord, T2 signal change in the cord (edema/myelopathy), and possible pathological compression fracture. The epidural mass typically extends posteriorly from the vertebral body, compressing the anterior cord. Additional metastatic deposits may be seen at other vertebral levels",
                    "D": "Leptomeningeal carcinomatosis"
                },
                "explanation": "MSCC MRI Pattern",
                "text": "MRI findings: <strong>vertebral body metastasis</strong> (T1 low signal replacing normal bright marrow, T2 variable, post-contrast enhancement), <strong>epidural mass</strong> extending into the spinal canal and compressing the thecal sac/cord, <strong>cord signal change</strong> (T2 hyperintensity = edema/myelopathy — a poor prognostic sign), and possible <strong>pathological fracture</strong> with retropulsed bone fragment. The <strong>Bilsky scale</strong> grades epidural involvement: 0 (bone only), 1a-c (epidural but no cord compression), 2 (cord compression but CSF visible), 3 (cord compression with no CSF visible around the cord = high-grade compression requiring urgent intervention)."
            },
            "interpret": {
                "correct": "A",
                "options": {
                    "A": "MRI confirms MSCC → START DEXAMETHASONE IMMEDIATELY (10mg IV bolus then 4mg IV q6h — reduces vasogenic edema and buys time). Simultaneously: urgent consultation with radiation oncology AND spine surgery to determine definitive treatment (radiation vs surgical decompression + stabilization → radiation)",
                    "B": "Start chemotherapy and repeat MRI in 2 weeks",
                    "C": "Pain management and palliative care only",
                    "D": "Physical therapy and bracing"
                },
                "explanation": "Steroids + Definitive Treatment (RT vs Surgery)",
                "text": "<strong>Dexamethasone</strong> is the immediate first step — it reduces cord edema and can improve neurological function within hours. <strong>Definitive treatment decision</strong>: <strong>Radiation therapy alone</strong>: for patients with radiosensitive tumors (lymphoma, myeloma, small cell lung cancer), poor surgical candidates, or very advanced disease. <strong>Surgical decompression + stabilization followed by radiation</strong>: the Patchell trial showed surgical decompression + RT was superior to RT alone for maintaining ambulation (84% vs 57%) in patients with a single level of compression, good prognosis, and non-radiosensitive tumors. <strong>Surgery first</strong> is also indicated for: spinal instability, pathological fracture with bone retropulsion, unknown primary (tissue needed for diagnosis), and neurological deterioration during radiation.",
                "radiopaedia": "https://radiopaedia.org/articles/spinal-cord-compression"
            },
            "integrate": {
                "correct": "D",
                "options": {
                    "A": "Dexamethasone and radiation only",
                    "B": "Surgery for all patients",
                    "C": "Palliative care without treatment",
                    "D": "Immediate dexamethasone + multidisciplinary decision (spine surgery, radiation oncology, medical oncology) for definitive treatment per Patchell criteria + VTE prophylaxis (cancer + immobility = extremely high DVT risk) + pain management (back pain is often severe) + bowel/bladder management (catheter if retention, bowel regimen) + rehabilitation planning (physiotherapy to maintain/restore function) + reassess cancer treatment plan (MSCC is progression on current therapy — discuss systemic therapy changes) + goals of care conversation (MSCC significantly impacts prognosis — median survival after MSCC is 3-6 months depending on primary tumor and ambulatory status)"
                },
                "explanation": "Steroids + Definitive Treatment + Rehabilitation + Goals of Care",
                "text": "The MRI confirmed the oncologic emergency and directed urgent intervention. The comprehensive plan addresses: acute cord decompression (steroids + RT/surgery), complications prevention (VTE in an immobile cancer patient is extremely high risk), rehabilitation (physiotherapy to preserve ambulatory function — the most important prognostic factor for quality of remaining life), and goals of care (MSCC is a prognostic turning point — median survival is 3-6 months, making honest discussions about treatment goals essential). The key systemic lesson: back pain in a cancer patient is MSCC until proven otherwise, and delays in diagnosis are the primary reason for poor outcomes."
            }
        }
    ],
    "modules/raddx-peds.html": [
        {
            "modality": "X-ray → Bronchoscopy",
            "title": "Foreign Body Aspiration — The Missed Diagnosis",
            "vignette": "A <strong>2-year-old boy</strong> is brought in with persistent right-sided wheezing for 3 weeks that has not responded to albuterol nebulizers. His pediatrician diagnosed him with 'asthma.' Parents recall a choking episode while eating peanuts 3 weeks ago that resolved on its own. On exam: decreased breath sounds on the right, unilateral expiratory wheezing. Oxygen saturation 96%.",
            "context": {
                "question": "What epidemiological factors make foreign body aspiration (FBA) the most likely diagnosis?",
                "correct": "D",
                "options": {
                    "A": "New wheezing in a toddler is always asthma",
                    "B": "The choking episode 3 weeks ago is not relevant since he recovered",
                    "C": "Unilateral wheezing is common in viral bronchiolitis",
                    "D": "FBA peaks at age 1-3 years (oral exploration phase + incomplete dentition + immature airway protective reflexes). The choking episode with peanuts is the critical history — peanuts are the #1 aspirated food in toddlers. UNILATERAL wheezing is the hallmark (asthma causes bilateral wheezing). The 3-week delay is typical — FBA is one of the most commonly missed diagnoses in pediatrics because the acute choking episode may be unwitnessed or forgotten, and the subsequent presentation mimics asthma or recurrent pneumonia"
                },
                "explanation": "Foreign Body Aspiration Epidemiology",
                "text": "FBA causes ~150 deaths/year in US children. <strong>Peak age 1-3 years</strong>: oral exploration + molars not yet erupted (can't grind food properly) + immature cough/swallow reflexes. <strong>Most common objects</strong>: peanuts/tree nuts (#1 food), hotdog pieces, grapes, coins (#1 non-food), toy parts, button batteries (special emergency). <strong>Location</strong>: right mainstem bronchus in adults (more vertical takeoff), but bilateral/left-sided is equally common in young children (bronchial angles are equal before age 3). <strong>The diagnostic triad</strong>: choking episode + unilateral wheezing + unilateral decreased breath sounds. But up to 40% have NO witnessed choking event — this is why FBA should be on the differential for ANY child with unilateral or persistent/refractory wheezing.",
                "pearl": "Epidemiologic Pearl: The AAP recommends against giving whole nuts, grapes, hotdog rounds, hard candy, popcorn, and raw carrots to children under 4 years. Grapes and hotdogs should be cut lengthwise (not in rounds). Button battery ingestion/aspiration is a separate emergency — esophageal button batteries can cause tissue necrosis and perforation within 2 hours and require emergent removal. The Heimlich maneuver is NOT recommended for children <1 year — back blows and chest thrusts are used instead."
            },
            "order": {
                "correct": "B",
                "options": {
                    "A": "CT chest to identify the foreign body",
                    "B": "Inspiratory AND expiratory chest X-rays (or bilateral lateral decubitus films in young children who can't cooperate with expiratory films). The expiratory/decubitus films are critical — they reveal air trapping on the affected side (the foreign body acts as a one-way valve)",
                    "C": "Chest X-ray (inspiratory view only)",
                    "D": "Pulmonary function testing"
                },
                "explanation": "Inspiratory + Expiratory X-rays — The Key Technique",
                "text": "Most aspirated foreign bodies (especially organic materials like peanuts) are RADIOLUCENT — they won't be seen on standard X-ray. The diagnosis depends on detecting their EFFECT: <strong>air trapping</strong>. On inspiration, air enters around the foreign body. On expiration, the bronchus narrows around the foreign body, trapping air distally (ball-valve mechanism). <strong>Inspiratory film</strong> may appear normal or show subtle hyperinflation. <strong>Expiratory film</strong> (or dependent decubitus): the affected side stays hyperinflated while the normal side deflates → mediastinal shift TOWARD the normal side (away from the trapped air). <strong>Lateral decubitus films</strong> are used in toddlers who can't cooperate: the affected side stays hyperinflated when dependent (normal side deflates)."
            },
            "expect": {
                "correct": "C",
                "options": {
                    "A": "Bilateral hyperinflation suggesting asthma",
                    "B": "Normal inspiratory and expiratory films",
                    "C": "Inspiratory film may appear near-normal or show subtle right-sided hyperinflation. EXPIRATORY film reveals the diagnostic finding: persistent right-sided hyperinflation (air trapping) with mediastinal shift to the LEFT (normal side) — confirming an obstructive foreign body in the right bronchial tree. If chronic: possible post-obstructive atelectasis or pneumonia distal to the foreign body",
                    "D": "Radio-opaque foreign body clearly visible"
                },
                "explanation": "Air Trapping — The Indirect Sign of FBA",
                "text": "The classic FBA X-ray pattern: <strong>early</strong> (hours-days): unilateral air trapping with hyperinflation on expiratory film, mediastinal shift away from the affected side. <strong>Late</strong> (weeks-months if missed): post-obstructive atelectasis (complete bronchial obstruction), recurrent/non-resolving pneumonia in the same location, bronchiectasis. <strong>Only ~10-15% of aspirated foreign bodies are radiopaque</strong> (coins, metallic objects). The remaining 85-90% (food, plastic, organic material) require the indirect signs: air trapping, atelectasis, or post-obstructive infiltrate."
            },
            "interpret": {
                "correct": "A",
                "options": {
                    "A": "X-rays showing unilateral air trapping + history of choking episode = FBA confirmed. Definitive treatment is rigid bronchoscopy under general anesthesia for foreign body removal. This should be performed urgently (within hours) — NOT electively. NPO status should be initiated immediately",
                    "B": "Continue albuterol for presumed asthma",
                    "C": "CT chest for better characterization before bronchoscopy",
                    "D": "Antibiotics for the post-obstructive pneumonia"
                },
                "explanation": "Rigid Bronchoscopy — Definitive Diagnosis and Treatment",
                "text": "<strong>Rigid bronchoscopy</strong> under general anesthesia by a pediatric otolaryngologist or pulmonologist is both diagnostic and therapeutic. It allows: direct visualization of the foreign body, removal with optical forceps under direct vision, assessment of mucosal damage (granulation tissue from chronic impaction), and inspection of the contralateral bronchial tree (bilateral aspiration occurs in 2-5%). <strong>Timing</strong>: urgent (within hours of diagnosis, not next-day elective). <strong>NPO</strong> should be initiated immediately to prepare for anesthesia. If a strong clinical suspicion exists but X-rays are normal/equivocal, <strong>bronchoscopy should still be performed</strong> — a normal X-ray does NOT exclude FBA.",
                "radiopaedia": "https://radiopaedia.org/articles/foreign-body-aspiration"
            },
            "integrate": {
                "correct": "C",
                "options": {
                    "A": "Bronchoscopy and same-day discharge",
                    "B": "Trial of antibiotics before bronchoscopy",
                    "C": "NPO + urgent rigid bronchoscopy for foreign body removal + post-procedure observation (watch for laryngeal edema, bronchospasm) + if chronic FBA (3 weeks): may need repeat bronchoscopy for granulation tissue + post-procedure CXR to confirm resolution + parent education about choking hazards (age-appropriate food preparation, no nuts/popcorn/whole grapes under 4, supervised eating, CPR training) + follow-up to confirm symptom resolution and normal lung exam",
                    "D": "Flexible bronchoscopy in clinic"
                },
                "explanation": "Removal + Observation + Prevention Education",
                "text": "The X-ray finding directed urgent bronchoscopic intervention. After 3 weeks of impaction, expect granulation tissue around the peanut — removal may be more difficult and a second-look bronchoscopy may be needed. Post-procedure education is critical: choking prevention (food preparation guidelines, supervised eating, age-appropriate foods), CPR/choking intervention training for caregivers, and home safety assessment (small objects, button batteries). The 3-week delay in diagnosis highlights the importance of considering FBA in any child with unilateral or refractory wheezing — 'not all that wheezes is asthma.'"
            }
        }
    ],
    "modules/raddx-ob.html": [
        {
            "modality": "Clinical Diagnosis ± Ultrasound",
            "title": "Placental Abruption — When Imaging Fails",
            "vignette": "A <strong>31-year-old woman</strong>, G2P1 at <strong>34 weeks gestation</strong>, presents with sudden-onset severe abdominal pain with a rigid, 'board-like' abdomen. She has continuous dark vaginal bleeding. She has chronic hypertension and admits to using cocaine earlier today. Fetal heart rate tracing shows late decelerations with minimal variability. Vitals: HR 118, BP 168/102.",
            "context": {
                "question": "What epidemiological and exposure factors make placental abruption the most dangerous diagnosis?",
                "correct": "D",
                "options": {
                    "A": "Third-trimester bleeding is always placenta previa",
                    "B": "Cocaine use during pregnancy is rare and unlikely to cause complications",
                    "C": "Chronic hypertension doesn't affect placental health",
                    "D": "Placental abruption (premature separation of the placenta from the uterine wall) is the most dangerous cause of third-trimester bleeding. This patient has THREE major risk factors converging: (1) chronic hypertension (the STRONGEST risk factor — 2.4-5× risk), (2) cocaine use (acute vasospasm → abrupt BP spike → placental shearing, 1-2% of cocaine-using pregnancies), (3) the combination creates a 'perfect storm.' Abruption causes 10% of all stillbirths and is a leading cause of maternal hemorrhage and DIC. CRITICAL: PAINLESS bleeding = previa; PAINFUL bleeding with rigid abdomen = abruption"
                },
                "explanation": "Placental Abruption Epidemiology",
                "text": "Abruption occurs in ~1% of pregnancies but causes disproportionate mortality. <strong>Risk factors</strong>: chronic hypertension (#1, 2.4-5×), preeclampsia, cocaine/methamphetamine use (acute vasospasm), cigarette smoking (1.5-2.5×), prior abruption (10× recurrence risk), abdominal trauma (MVC, domestic violence — always screen), advanced maternal age, polyhydramnios/multiple gestation (rapid uterine decompression), short umbilical cord, and thrombophilia. <strong>Cocaine is the most common illicit drug cause of abruption</strong> — it causes acute hypertensive crisis and intense vasospasm of uterine arteries. <strong>The critical distinction</strong>: abruption = painful, dark bleeding, rigid uterus, fetal distress; previa = painless, bright red bleeding, soft uterus, usually reassuring fetal status.",
                "pearl": "Epidemiologic Pearl: Domestic violence screening is essential in ALL cases of abruption — abdominal trauma from intimate partner violence is a significant cause, particularly in the third trimester when the uterus is large and vulnerable. Abruption from trauma can occur even without obvious external injury. Also: the rising rates of chronic hypertension in younger women (driven by obesity) are contributing to increasing abruption rates."
            },
            "order": {
                "correct": "C",
                "options": {
                    "A": "CT abdomen to visualize the abruption",
                    "B": "MRI pelvis for better placental evaluation",
                    "C": "Placental abruption is primarily a CLINICAL diagnosis, not an imaging diagnosis. Ultrasound has only 25-50% sensitivity for abruption (retroplacental hemorrhage is often isoechoic to placenta and is MISSED by US). The key management is based on clinical assessment + fetal heart rate tracing, NOT imaging. If time allows and patient is stable, US can evaluate for retroplacental clot, but a NORMAL ultrasound does NOT exclude abruption",
                    "D": "Transabdominal US as the definitive diagnostic test"
                },
                "explanation": "Abruption — Clinical Diagnosis, Not Imaging Diagnosis",
                "text": "This is one of the most important teaching points in obstetrics: <strong>ultrasound MISSES 50-75% of abruptions</strong>. The retroplacental hemorrhage is frequently isoechoic to the placenta and invisible on US. A normal ultrasound in a patient with clinical abruption should NOT provide false reassurance. <strong>When US is helpful</strong>: it can visualize large retroplacental or preplacental hematomas, confirm previa (the other major cause of third-trimester bleeding), assess fetal presentation, and estimate gestational age if unknown. <strong>The clinical triad drives management</strong>: painful vaginal bleeding + rigid/tender uterus + fetal distress = abruption, regardless of ultrasound findings."
            },
            "expect": {
                "correct": "B",
                "options": {
                    "A": "US will definitively show the abruption",
                    "B": "US may show a retroplacental hypoechoic or mixed echogenicity collection between the placenta and uterine wall — BUT this is only visible in 25-50% of cases. Even if US appears NORMAL, clinical abruption should be managed based on maternal and fetal status, not imaging",
                    "C": "Complete placenta previa",
                    "D": "Normal US rules out abruption"
                },
                "explanation": "US Sensitivity Is Poor for Abruption",
                "text": "When US does detect abruption, findings include: <strong>retroplacental collection</strong> (hematoma between placenta and uterine wall — may be hypoechoic acutely, becoming more echogenic over days), <strong>placental thickening</strong> (>5cm, from concealed hemorrhage expanding the placenta), <strong>subchorionic hematoma</strong>, and <strong>elevated amniotic fluid echogenicity</strong> (blood in the amniotic fluid). <strong>Concealed abruption</strong> (blood trapped behind the placenta without external bleeding) is the most dangerous form — it can cause massive hemorrhage and DIC without obvious vaginal bleeding, making clinical assessment (rigid uterus, fetal distress, maternal tachycardia) even more critical."
            },
            "interpret": {
                "correct": "A",
                "options": {
                    "A": "Clinical abruption + non-reassuring fetal heart tracing + 34 weeks = EMERGENT CESAREAN DELIVERY. This patient has severe abruption with fetal compromise — delivery is the definitive treatment. Simultaneously: aggressive IV fluid resuscitation, type and crossmatch (massive transfusion protocol may be needed), correct coagulopathy (abruption causes DIC in 10-20% of severe cases), and urine drug screen documentation",
                    "B": "Tocolysis to delay delivery until term",
                    "C": "Betamethasone and observation",
                    "D": "Vaginal delivery with close monitoring"
                },
                "explanation": "Emergent Delivery + Hemorrhage/DIC Management",
                "text": "<strong>Severe abruption with fetal distress = emergent cesarean section</strong>. Maternal stabilization and delivery happen simultaneously — do NOT delay delivery for steroids or diagnostic workup. <strong>DIC management</strong>: abruption is the most common obstetric cause of DIC — tissue thromboplastin release from the damaged placenta activates the coagulation cascade. Labs: fibrinogen (<200 mg/dL = DIC), PT/PTT, platelets, D-dimer. Treatment: cryoprecipitate for fibrinogen <150, FFP for prolonged PT/PTT, platelets if <50,000, packed RBCs for hemorrhage. <strong>Massive transfusion protocol</strong> should be activated for significant abruption.",
                "radiopaedia": "https://radiopaedia.org/articles/placental-abruption"
            },
            "integrate": {
                "correct": "D",
                "options": {
                    "A": "Emergent delivery and discharge",
                    "B": "Conservative management since US is normal",
                    "C": "Delivery and no further investigation",
                    "D": "Emergent cesarean delivery + massive transfusion protocol activation + DIC monitoring and correction (fibrinogen, coagulation factors) + uterine atony prevention (oxytocin, consider carboprost/misoprostol) + urine drug screen + social work consultation for substance use + NICU alert for 34-week premature neonate + postpartum monitoring for renal failure (severe abruption can cause renal cortical necrosis from hypovolemia + DIC) + address hypertension (likely preeclampsia superimposed on chronic HTN) + postpartum substance use treatment referral + future pregnancy counseling (10× recurrence risk — pre-conception optimization with aspirin, BP control, and substance cessation)"
                },
                "explanation": "Delivery + DIC Management + Substance Use Treatment + Recurrence Prevention",
                "text": "The CLINICAL diagnosis (not imaging) drove emergent operative delivery. The comprehensive plan addresses: acute management (delivery, hemorrhage control, DIC correction), neonatal care (34-week premature infant requires NICU), substance use (cocaine is the most common illicit drug cause of abruption — treatment referral is both compassionate care and recurrence prevention), and future pregnancy planning (10× recurrence risk demands pre-conception optimization: blood pressure control, aspirin prophylaxis, smoking/substance cessation, and close antenatal surveillance). This scenario powerfully demonstrates that imaging has LIMITATIONS — clinical judgment must override a falsely reassuring ultrasound."
            }
        }
    ]
}

# NEW TRAUMA MODULE
TRAUMA_MODULE = {
    "modality": "FAST (Focused Assessment with Sonography in Trauma)",
    "title": "FAST Exam — Bedside Trauma Assessment",
    "vignette": "A <strong>28-year-old male</strong> is brought by EMS after a high-speed motorcycle collision. He was thrown 30 feet and found unresponsive at the scene. GCS 8 (intubated by EMS). Vitals: HR 128, BP 82/50, O2 sat 94% on ventilator. Primary survey: intubated, bilateral breath sounds, distended abdomen with diffuse tenderness and seatbelt sign. Pelvis is stable. Bilateral femur deformities. Massive transfusion protocol activated.",
    "context": {
        "question": "What makes the FAST exam the critical imaging decision point in this hemodynamically unstable trauma patient?",
        "correct": "D",
        "options": {
            "A": "All trauma patients need CT before any decision-making",
            "B": "Hemodynamic instability means he needs surgery regardless of imaging",
            "C": "Abdominal exam is unreliable in trauma, so imaging doesn't help",
            "D": "In HEMODYNAMICALLY UNSTABLE trauma patients, the FAST exam is the decision tool that determines the NEXT step: positive FAST (free fluid = hemoperitoneum) + unstable = immediate laparotomy (no CT). Negative FAST + unstable = consider other bleeding sources (pelvis, chest, retroperitoneum, extremities). Motorcycle crashes are the #1 mechanism for splenic injury. The massive transfusion protocol was correctly activated — traumatic hemorrhage is the #1 cause of preventable death in trauma (33% of deaths)"
        },
        "explanation": "FAST in the Trauma Algorithm",
        "text": "The FAST exam is the <strong>single most important bedside imaging tool in acute trauma</strong>. It answers ONE question: is there free fluid (blood) in the abdomen or pericardium? <strong>Four windows</strong>: (1) RUQ (Morison's pouch — most sensitive, detects as little as 200mL), (2) LUQ (splenorenal recess), (3) suprapubic (pouch of Douglas/rectovesical), (4) subxiphoid (pericardial effusion). <strong>The FAST determines the algorithm</strong>: Unstable + positive FAST → OR (emergent laparotomy). Stable + positive FAST → CT for grading/surgical planning. Unstable + negative FAST → consider non-abdominal hemorrhage (pelvis, chest, retroperitoneum — retroperitoneal bleeding is NOT detected by FAST). <strong>Extended FAST (eFAST)</strong> adds bilateral thoracic views for pneumothorax and hemothorax.",
        "pearl": "Epidemiologic Pearl: Trauma is the leading cause of death for ages 1-44 in the US. Hemorrhagic shock accounts for 30-40% of trauma deaths, and most are potentially preventable with rapid hemorrhage control. The 'golden hour' concept drives emergency care: definitive hemorrhage control within 60 minutes significantly improves survival. The FAST exam takes <3 minutes and can be performed during the primary survey — it does NOT delay resuscitation. Every emergency physician, surgeon, and medical student should be able to perform and interpret a FAST exam."
    },
    "order": {
        "correct": "A",
        "options": {
            "A": "FAST exam at the bedside DURING resuscitation — it is performed concurrently with the primary survey, NOT after stabilization. The 4-view FAST + bilateral thoracic views (eFAST) can be completed in <3 minutes without interrupting resuscitation efforts",
            "B": "CT abdomen/pelvis with IV contrast",
            "C": "Diagnostic peritoneal lavage (DPL)",
            "D": "Abdominal X-ray"
        },
        "explanation": "FAST — Concurrent with Resuscitation",
        "text": "The FAST exam is performed <strong>simultaneously with the primary survey</strong> — it does not require transport, contrast, radiation, or patient cooperation. <strong>Technique</strong>: low-frequency curvilinear probe (3.5-5 MHz), patient supine. The exam is BINARY: free fluid present (positive) or absent (negative). <strong>Free fluid appears as</strong>: anechoic (black) stripes between organs and in dependent spaces. <strong>eFAST adds bilateral lung assessments</strong>: absence of lung sliding + A-lines without B-lines + 'stratosphere sign' on M-mode = pneumothorax (can be detected before CXR). Hemothorax: anechoic fluid above the diaphragm."
    },
    "expect": {
        "correct": "B",
        "options": {
            "A": "Negative FAST — no intra-abdominal hemorrhage",
            "B": "POSITIVE FAST: anechoic free fluid (blood) in Morison's pouch (RUQ, between liver and right kidney) and/or the splenorenal recess (LUQ) and/or the pelvis. In a high-speed motorcycle crash, splenic laceration is the most common solid organ injury. The FAST does not grade the injury — it only confirms free intraperitoneal fluid",
            "C": "Pericardial effusion on subxiphoid view",
            "D": "Pneumothorax on eFAST"
        },
        "explanation": "Positive FAST — Hemoperitoneum Confirmed",
        "text": "FAST sensitivity for hemoperitoneum: ~85-95% when >200-500mL of free fluid is present (sensitivity decreases for smaller volumes). <strong>Morison's pouch</strong> (hepatorenal recess) is the most sensitive window — fluid accumulates here first in the supine patient. <strong>False negatives</strong>: early injury with <200mL of hemorrhage, retroperitoneal bleeding (duodenum, kidneys, pancreas, great vessels — NOT detected by FAST), adhesions preventing fluid migration, and obesity limiting image quality. <strong>False positives</strong>: pre-existing ascites, ruptured ovarian cyst, peritoneal dialysis fluid. In this unstable patient, any positive FAST finding = hemoperitoneum = OR."
    },
    "interpret": {
        "correct": "A",
        "options": {
            "A": "Positive FAST + hemodynamically unstable = EMERGENT LAPAROTOMY (no CT). This patient goes directly from the trauma bay to the operating room for surgical hemorrhage control. Damage control surgery (abbreviated laparotomy to control hemorrhage + temporary closure) with planned return to OR once coagulopathy, acidosis, and hypothermia are corrected (the 'lethal triad')",
            "B": "CT abdomen to grade the injury before surgery",
            "C": "Angiographic embolization first",
            "D": "Serial FAST exams every 4 hours and observe"
        },
        "explanation": "Positive FAST + Unstable = OR (Not CT)",
        "text": "The FAST exam answered the critical question: <strong>WHERE is he bleeding?</strong> The answer (abdomen) directs him to the OR. <strong>Damage control surgery principles</strong>: (1) stop hemorrhage (packing, ligation, resection), (2) control contamination (staple bowel injuries), (3) temporary abdominal closure (negative pressure dressing), (4) ICU resuscitation (correct coagulopathy, acidosis, hypothermia — the 'lethal triad' of trauma), (5) planned return to OR in 24-72h for definitive repair and closure. <strong>A stable patient with positive FAST</strong> would get CT for injury grading — many solid organ injuries (spleen, liver) can be managed non-operatively with angiographic embolization if the patient responds to resuscitation.",
        "radiopaedia": "https://radiopaedia.org/articles/focused-assessment-with-sonography-in-trauma-fast"
    },
    "integrate": {
        "correct": "C",
        "options": {
            "A": "Surgery and ICU with no further imaging",
            "B": "Surgery then discharge in 3 days",
            "C": "Emergent damage control laparotomy + massive transfusion protocol (1:1:1 pRBC:FFP:platelets) + address the 'lethal triad' (hypothermia: active warming; acidosis: resuscitation; coagulopathy: blood products) + ICU stabilization → planned return to OR at 24-48h for definitive repair → secondary survey with full CT imaging once stabilized (identify all injuries including head, spine, pelvis, extremities) + bilateral femur fixation + TBI management (GCS 8 = likely TBI from motorcycle crash) + VTE prophylaxis when safe + rehabilitation planning + injury prevention counseling (helmet use — was he wearing one?)"
        },
        "explanation": "Damage Control Surgery + Staged Injury Management",
        "text": "The FAST exam — a 3-minute bedside test — was the critical decision tool that sent this patient to the OR instead of the CT scanner (which would have delayed hemorrhage control and likely resulted in death). After surgical hemorrhage control and ICU stabilization, the SECONDARY survey with complete CT imaging identifies all injuries. Motorcycle crashes frequently produce polytrauma: TBI (the leading cause of motorcycle death — helmet use reduces mortality by 37%), splenic/hepatic laceration, pelvic fractures, and extremity fractures. Injury prevention (helmet use, alcohol avoidance) is the ultimate upstream intervention — motorcycle crashes with helmets have dramatically different injury patterns and survival."
    }
}


# ============================================================
# INJECT INTO EXISTING MODULES + CREATE TRAUMA MODULE
# ============================================================

for filepath, scenarios in SCENARIOS.items():
    full_path = os.path.join('/home/claude/reasondx', filepath)
    with open(full_path, 'r') as f:
        html = f.read()

    for s in scenarios:
        scenario_html = make_scenario_html(s)
        # Insert before the cross-links section
        insert_marker = '<div style="margin-top:32px"><h3'
        if insert_marker in html:
            html = html.replace(insert_marker, scenario_html + '\n' + insert_marker, 1)
            print(f"  Injected '{s['title']}' into {filepath}")
        else:
            print(f"  WARNING: Could not find insertion point in {filepath}")

    with open(full_path, 'w') as f:
        f.write(html)
    print(f"Updated {filepath} ({len(html):,} bytes)")

# Create trauma module using the existing module template structure
print("\nGenerating trauma module...")
import sys
sys.path.insert(0, '/home/claude/reasondx')
from importlib import import_module
gen = import_module("gen-raddx-remaining")

trauma_data = {
    "icon": "🚑",
    "title": "Trauma Imaging",
    "badge": "EMERGENCY / TRAUMA",
    "scenarios": [TRAUMA_MODULE],
    "cross_links": [
        ("🫁 Chest Imaging", "raddx-chest.html", "Pneumonia, PE, pneumothorax"),
        ("🩻 Abdominal Imaging", "raddx-abdominal.html", "CT abdomen, US, HIDA"),
        ("🧠 Neuroimaging", "raddx-neuro.html", "CT/MRI brain, stroke"),
        ("← RadDx Hub", "raddx-hub.html", "All body systems"),
    ],
    "references": [
        ("FAST Exam — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK470479/"),
        ("ATLS Guidelines 10th Edition", "https://doi.org/10.1097/TA.0000000000002047"),
        ("Damage Control Surgery — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK553106/"),
        ("Radiopaedia.org", "https://radiopaedia.org"),
    ]
}

trauma_html = gen.generate_module("trauma", trauma_data)
trauma_path = '/home/claude/reasondx/modules/raddx-trauma.html'
with open(trauma_path, 'w') as f:
    f.write(trauma_html)
print(f"Generated {trauma_path} ({len(trauma_html):,} bytes)")

print("\nDone! 6 gap-fill scenarios complete.")
