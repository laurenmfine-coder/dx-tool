"""Inject batch 2 (puzzles 6-10) into puzzles.html.

Same pattern as inject-batch-1.py — anchors on the array-close and
inserts before it. Idempotent via a unique marker comment.
"""

import sys
from pathlib import Path

PUZZLES_FILE = Path('/home/claude/dx-tool/puzzles.html')
MARKER = '// ── BATCH 2 (live review session, May 2026) ──'

NEW_PUZZLES_JS = r'''
  // ── BATCH 2 (live review session, May 2026) ──
  // Five more puzzles drafted in live review. Same content rules:
  // clinical reasoning focus, no dosing, strict open-access refs.
  // Several use the new "recall + what-if twist" pattern: step 1
  // includes an eponym recall sub-ask; step 2 is a B-shape twist
  // toward an alternative diagnosis with shared features.

  {type:'Risk Priority',scenario:'A 16-year-old previously healthy girl is brought in by her parents for fatigue, dizziness, and several months of progressive weight loss. They were surprised at her labs from her PCP yesterday, which her parents brought: low potassium, low phosphate, low magnesium, normal sodium, glucose 68. She has been eating very little for months. She tells you she has been drinking only water and exercising for hours daily. On exam she appears thin and tired, BP 88/54 sitting and 72/40 standing, HR 52 sitting and 96 standing, T 35.7°C, capillary refill slightly delayed. No focal findings. The admitting team plans to start her on standard maintenance fluids and a regular tray at dinner.',
    prompt:'The plan to "feed her normally" is well-intentioned but dangerous. (1) Name the specific syndrome the admitting plan would risk and the underlying physiologic mechanism that makes it dangerous. (2) Identify three findings in her presentation that should anchor your concern about that syndrome before any feeding occurs. (3) Explain why the orthostatic vital sign pattern is more informative than her supine vitals alone.',
    teaching:'The syndrome at risk is refeeding syndrome. Mechanism: prolonged starvation depletes intracellular phosphate, magnesium, potassium, and thiamine while shifting metabolism away from glucose. When carbohydrates are reintroduced, insulin secretion resumes, driving phosphate, magnesium, and potassium back into cells en masse. Already-low extracellular levels can crash further, producing the clinical syndrome: cardiac arrhythmias, respiratory failure from diaphragmatic weakness, seizures, rhabdomyolysis, and sudden death. The brain and heart are exquisitely sensitive to phosphate depletion because ATP synthesis depends on it. Three findings that should anchor concern: (1) already-low electrolytes before feeding — phosphate, magnesium, and potassium are all low at baseline, meaning her stores are depleted before insulin even arrives to drive them lower; (2) bradycardia and hypothermia at baseline are markers of profound metabolic adaptation to starvation, signaling the body has down-regulated metabolic rate substantially; (3) the duration and severity of restriction implied by months of progressive weight loss with very low intake — duration of starvation is the strongest predictor of refeeding risk. The orthostatic vital sign pattern is more informative than supine alone because supine BP and HR can look "okay" in a young healthy patient while standing reveals severe volume depletion and autonomic dysfunction. A drop of more than 20 mmHg systolic and a pulse rise of more than 20 with positional change indicates significant volume contraction or autonomic failure — both common in advanced anorexia and both increase the risk of arrhythmia during refeeding. The reasoning move: in starvation states, "normal" labs and vitals are red herrings; the physiology has shifted, and refeeding requires anticipating the shift. Refeeding should proceed cautiously with electrolyte repletion and close monitoring; protocols typically begin with reduced calories and advance slowly.',
    keyConcepts: [
      { token: 'Refeeding syndrome', synonyms: ['refeeding', 're-feeding', 'refeed syndrome'] },
      { token: 'Insulin-driven electrolyte shift', synonyms: ['insulin', 'intracellular shift', 'shift into cells', 'cellular uptake', 'glucose drives', 'carbohydrate', 'carbs trigger'] },
      { token: 'Phosphate depletion', synonyms: ['phosphate', 'phos', 'hypophosphatemia', 'low phos'] },
      { token: 'Bradycardia and hypothermia as adaptation', synonyms: ['bradycardia', 'low heart rate', 'hr 52', 'hypothermia', 'low temp', '35.7', 'metabolic adaptation', 'down-regulated metabolic'] },
      { token: 'Orthostatic findings', synonyms: ['orthostatic', 'standing', 'positional', 'volume', 'autonomic', 'drop with standing', '20 systolic', '20 pulse'] }
    ],
    references: [
      {
        citation: 'Persaud-Sharma D, Saha S, Trippensee AW. Refeeding Syndrome. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK564513/'
      },
      {
        citation: 'Moore JK, Watson HJ, Harper E, McCormack J, Nguyen T. Anorexia Nervosa. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK459148/'
      }
    ]
  },

  {type:'Risk Priority',scenario:'A 34-year-old woman presents with 2 days of fever, malaise, and a rash that started on her face and chest and is spreading. She started a new medication 12 days ago for a urinary tract infection. On exam: temperature 38.6, ill-appearing. Skin shows dusky red macules with central darkening on her trunk and proximal extremities, some coalescing. She has erosions on her lips and inside her mouth, painful enough that she cannot drink. Conjunctival injection bilaterally with crusting at the lid margins. The rash, when stroked gently with a tongue depressor, peels superficially.',
    prompt:'A colleague says "this looks like a viral exanthem with mouth sores — supportive care, send home." You are concerned this is something else. (1) Name the syndrome you are concerned about. (2) Name the eponym for the physical exam sign in the vignette where the rash peels with gentle pressure. (3) Identify three findings beyond the rash itself that mark this as a mucocutaneous emergency rather than a benign exanthem. (4) Explain the relevance of the medication timeline and why "started 12 days ago" is in the typical window.',
    teaching:'The syndrome of concern is Stevens-Johnson syndrome / toxic epidermal necrolysis (SJS/TEN), a continuum defined by epidermal detachment with mucosal involvement, most commonly drug-induced. The single most important physical finding pointing to it is the positive Nikolsky sign — superficial epidermis sloughs with gentle lateral pressure (the "stroke with a tongue depressor" detail). Nikolsky positivity in this clinical context indicates desmosomal disruption at the dermal-epidermal junction; it is not specific to SJS/TEN but in combination with the rest of this picture it is highly concerning. Three findings that mark this as a mucocutaneous emergency rather than a benign exanthem: (1) mucosal involvement at multiple sites — oral erosions plus conjunctival injection plus crusting at the lid margins. SJS/TEN by definition involves at least two mucosal surfaces (oral, ocular, genital). A "viral exanthem with mouth sores" rarely produces eye involvement of this kind. (2) Systemic illness — fever, malaise, ill appearance. SJS/TEN patients look sick out of proportion to the rash itself. (3) Skin features — dusky/atypical target lesions with central darkening that suggests epidermal necrosis, not the brighter red of a viral rash, plus coalescence into larger areas. The medication timeline matters because drug-induced SJS/TEN typically presents 1 to 4 weeks after starting the offending agent, with most cases in the 1-3 week window. "Twelve days ago" is squarely inside that window and shifts the differential toward drug etiology rather than viral. Common offenders include sulfa antibiotics (the empiric UTI agent is the suspicion here), aromatic anticonvulsants (lamotrigine, carbamazepine, phenytoin), allopurinol, and NSAIDs. The reasoning move: skin findings plus mucosal involvement plus a medication started in the last few weeks is SJS/TEN until proven otherwise.',
    keyConcepts: [
      { token: 'Stevens-Johnson / TEN', synonyms: ['stevens-johnson', 'sjs', 'ten', 'toxic epidermal necrolysis', 'sjs/ten', 'mucocutaneous emergency'] },
      { token: 'Nikolsky sign (named)', synonyms: ['nikolsky', "nikolsky's", 'nikolsky sign', 'nikolsky positive'] },
      { token: 'Mucosal multi-site involvement', synonyms: ['mucosal', 'mucous membrane', 'mouth and eye', 'oral and ocular', 'conjunctival and oral', 'multiple mucosa', 'two mucosal sites'] },
      { token: 'Drug-induced timeline', synonyms: ['drug', 'medication', 'sulfa', '1 to 4 weeks', '1-4 weeks', 'one to four weeks', 'started 12'] },
      { token: 'Systemic illness', synonyms: ['systemic', 'fever', 'malaise', 'ill-appearing', 'looks sick', 'toxic appearing'] }
    ],
    followUp: {
      prompt: 'Same physical findings — rash, peeling on gentle pressure, ill appearance — but in a different patient: a 3-year-old boy, no medications, peri-oral and skin-fold redness that progressed to sloughing over 48 hours, no oral erosions or eye involvement. (1) What is the most likely diagnosis now and how does it differ from the prior case mechanistically? (2) Name the staphylococcal toxin responsible and what tissue layer it cleaves. (3) Explain why the absence of mucosal involvement is a key discriminator here, not just an absence of finding.',
      teaching: 'This is Staphylococcal Scalded Skin Syndrome (SSSS) — a toxin-mediated condition almost exclusively seen in young children (and rarely in adults with renal failure, because of how the toxin is cleared). Mechanism: certain Staphylococcus aureus strains produce exfoliative toxins (ETA and ETB) that cleave desmoglein-1, a desmosomal protein in the superficial epidermis. The split is intraepidermal — within the granular layer — much shallower than SJS/TEN\u2019s full-thickness dermal-epidermal junction split. That depth difference matters: SSSS scars less, heals faster, and has lower mortality than SJS/TEN, despite looking similar at the bedside. The absence of mucosal involvement is mechanistically meaningful, not coincidental. Mucous membranes do not express desmoglein-1 (they express desmoglein-3), so the toxin has no target there. SJS/TEN, in contrast, is an immune-mediated full-thickness keratinocyte apoptosis that affects skin and mucosa equally. Same Nikolsky sign at the bedside, very different mechanism, very different prognosis. The reasoning move: when two diseases share a sign, the distribution of where the sign appears (and where it doesn\u2019t) is often the discriminator. Mucosa-spared in a febrile child with peri-oral redness points to SSSS. Mucosa-involved in an adult on a new drug points to SJS/TEN.',
      keyConcepts: [
        { token: 'Staphylococcal Scalded Skin Syndrome', synonyms: ['ssss', 'staph scalded', 'scalded skin', 'staphylococcal scalded'] },
        { token: 'Exfoliative toxin', synonyms: ['exfoliative toxin', 'exfoliative', 'eta', 'etb', 'staph toxin'] },
        { token: 'Desmoglein-1', synonyms: ['desmoglein', 'desmoglein-1', 'dsg1', 'dsg-1'] },
        { token: 'Intraepidermal cleavage', synonyms: ['intraepidermal', 'granular layer', 'within epidermis', 'superficial split', 'shallow', 'within the epidermis'] },
        { token: 'Mucosa spared mechanistically', synonyms: ['no mucosal', 'spares mucosa', 'spares mucous', 'mucosa not affected', 'desmoglein-3', 'dsg3', 'different desmoglein'] }
      ]
    },
    references: [
      {
        citation: 'Oakley AM, Krishnamurthy K. Stevens-Johnson Syndrome. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK459323/'
      },
      {
        citation: 'Ross A, Shoff HW. Staphylococcal Scalded Skin Syndrome. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK448135/'
      }
    ]
  },

  {type:'Anchoring Check',scenario:'A 58-year-old man with hypertension and a 30-pack-year smoking history presents with substernal chest discomfort that started 90 minutes ago while walking. He describes it as "pressure," not sharp, radiating to the left arm and jaw. Associated with diaphoresis and mild nausea. Pain is now slightly better at rest. On arrival: BP 148/92, HR 88, RR 18, SpO2 97%. ECG shows normal sinus rhythm with no ST elevation, no clear ST depression, and a flat T wave in lead III only. First troponin: 0.02 ng/mL (lab cutoff for elevation 0.04). His exam is unremarkable.',
    prompt:'Your colleague says "ECG is clean, troponin is negative — discharge with PCP follow-up." You disagree. (1) Name the syndrome you are concerned about and explain whether the initial troponin and ECG can rule it out. (2) Name the eponym for the chest pain pattern that is brought on by exertion and improves with rest, and what it traditionally signals. (3) Identify three features in this history (excluding the chest pain quality itself) that meaningfully raise pretest probability. (4) Explain what serial testing strategy is required and why a single negative result early after symptom onset is insufficient.',
    teaching:'The syndrome of concern is acute coronary syndrome (ACS) — encompassing unstable angina, NSTEMI, and STEMI. The initial ECG and troponin cannot rule it out in this presentation because: (1) early in the course of an evolving infarction, the ECG can appear unrevealing — ST changes may not develop for hours, and the only clue may be subtle T-wave abnormalities or hyperacute T-waves not easily seen on a single tracing; (2) troponin requires myocardial necrosis to elevate, and there is a typical lag from symptom onset to troponin rise — earlier-generation troponin assays could remain negative for hours, and even high-sensitivity assays have a lower-bound detection window. The classic chest pain pattern of pressure-quality discomfort precipitated by exertion and relieved by rest is angina pectoris, and traditionally signals fixed coronary obstruction with demand-supply mismatch. Three features beyond the chest pain quality that raise pretest probability here: (1) age and male sex — coronary disease prevalence rises sharply through the 50s in men; (2) hypertension and smoking history — both are independent risk factors with substantial effect size, especially smoking, which roughly doubles cardiovascular risk; (3) radiation to left arm and jaw plus diaphoresis — radiation pattern and autonomic symptoms (sweating, nausea) carry meaningful positive likelihood ratios in chest pain assessment. The serial testing strategy required is serial ECGs and serial troponins — typically a repeat ECG at any change in symptoms and troponin at 3-6 hours after the first (depending on assay sensitivity). The reasoning: ACS is a time-evolving diagnosis. A single point-in-time test captures one moment; the disease is a process. The cost of a missed early ACS is sudden cardiac death; the cost of an extra few hours of observation is a few hours of observation. The asymmetry should drive the testing strategy.',
    keyConcepts: [
      { token: 'Acute coronary syndrome', synonyms: ['acs', 'acute coronary', 'unstable angina', 'nstemi', 'stemi', 'mi', 'myocardial infarction'] },
      { token: 'Angina pectoris (named)', synonyms: ['angina pectoris', 'angina', 'classic angina', 'stable angina', 'exertional angina'] },
      { token: 'Risk factors raise pretest probability', synonyms: ['risk factor', 'pretest', 'pretest probability', 'prior probability', 'smoking', 'age', 'hypertension', 'hpi raises probability', 'modifiable risk'] },
      { token: 'Radiation and autonomic features', synonyms: ['radiation', 'radiating', 'left arm', 'jaw', 'diaphoresis', 'sweating', 'nausea', 'autonomic'] },
      { token: 'Serial ECG and serial troponin', synonyms: ['serial ecg', 'serial troponin', 'serial', 'repeat troponin', 'repeat ecg', 'time-evolving', 'time evolving', 'over time', 'rule out over hours', 'observation'] }
    ],
    followUp: {
      prompt: 'Same patient, same vitals, same exam. But you learn three additional details: (1) the chest pain came on suddenly while at rest, not with exertion; (2) the pain radiates to the back between the shoulder blades, in addition to the arm; (3) on careful exam there is a 20 mmHg blood pressure difference between his right and left arms. ECG and troponin unchanged. (1) What diagnosis now jumps to the top of your differential and why? (2) Name the chest X-ray finding most associated with this diagnosis. (3) Explain why thrombolysis or antiplatelet therapy in this scenario could be catastrophic, even though it would be standard for the original ACS framing.',
      teaching: 'With the new history, the leading diagnosis is acute aortic dissection. Key discriminators that pull toward dissection over ACS: sudden onset at rest (dissection is classically tearing/ripping or sudden, not exertion-precipitated); radiation to the back between the shoulder blades (the path of the descending aorta — a high-yield discriminator); and inter-arm blood pressure differential of 20 mmHg or more, which suggests differential perfusion of the subclavian arteries from a dissection flap. The classic chest X-ray finding most associated with dissection is a widened mediastinum, though sensitivity is only moderate (~60-70%) and a normal CXR does not rule out dissection — CT angiography is the diagnostic test of choice. Why thrombolysis or antiplatelet would be catastrophic: ACS protocols frequently include aspirin, P2Y12 inhibitors, anticoagulation, and (in STEMI) consideration of thrombolytics. Aortic dissection is a bleeding problem — a tear in the aortic wall with blood dissecting between layers. Antiplatelet and anticoagulant therapy would worsen bleeding into the false lumen and can extend the dissection or cause aortic rupture. The reasoning move: in chest pain, before committing to ACS-directed therapy, you must consider the alternatives whose treatment is opposite — aortic dissection (avoid antiplatelets, definitive surgery), pericardial tamponade (volume, pericardiocentesis), pulmonary embolism (anticoagulation, but different decision tree). Same chest pain syndrome, four different therapeutic paths. The diagnosis must be made before the treatment is started.',
      keyConcepts: [
        { token: 'Aortic dissection', synonyms: ['aortic dissection', 'dissection', 'aortic tear', 'thoracic aortic'] },
        { token: 'Sudden onset at rest plus radiation to back', synonyms: ['sudden', 'at rest', 'back', 'between shoulder', 'interscapular', 'tearing', 'ripping'] },
        { token: 'Inter-arm BP differential', synonyms: ['inter-arm', 'interarm', 'arm to arm', 'between arms', 'bp difference', 'pulse deficit', 'pulse differential', '20 mmhg', 'subclavian'] },
        { token: 'Widened mediastinum', synonyms: ['widened mediastinum', 'mediastinum', 'cxr', 'chest x-ray', 'wide mediastinum'] },
        { token: 'Antiplatelet/anticoagulant catastrophic in dissection', synonyms: ['antiplatelet', 'anticoag', 'aspirin', 'thrombolytic', 'tpa', 'bleeding worsens', 'extend dissection', 'rupture', 'opposite treatment', 'catastrophic'] }
      ]
    },
    references: [
      {
        citation: 'Singh A, Museedi AS, Grossman SA. Acute Coronary Syndrome. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK459157/'
      },
      {
        citation: 'Levy D, Goyal A, Grujic D. Aortic Dissection. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK441963/'
      }
    ]
  },

  {type:'Missing Evidence',scenario:'A 19-year-old college student with type 1 diabetes presents to the ED with 2 days of nausea, vomiting, and abdominal pain. She says she has been compliant with her insulin pump and her glucose readings have been "in the 200s, maybe 300s." She has a viral upper respiratory illness over the past week. On arrival: BP 102/64, HR 118, RR 28 with deep respirations, T 37.8°C. Glucose 412. Bicarbonate 8. Anion gap 24. pH 7.18 on venous blood gas. Urine ketones 3+. She is alert, oriented, but uncomfortable. The admitting team plans to start IV fluids, insulin, and electrolyte repletion.',
    prompt:'The diagnosis is straightforward, but the clinical reasoning question is what brought her here. (1) Name the syndrome and the eponym for the deep, labored breathing pattern in the vignette. (2) State the three lab criteria that define this syndrome. (3) Identify three plausible triggers in this specific history that should be investigated even though the diagnosis is clear. (4) Explain why "compliant with the pump" does not rule out an insulin delivery problem.',
    teaching:'The syndrome is diabetic ketoacidosis (DKA). The breathing pattern — deep, labored, often without distress — is Kussmaul respiration, a respiratory compensation for severe metabolic acidosis. The three defining lab criteria for DKA are: (1) hyperglycemia (typically >250 mg/dL, though "euglycemic DKA" exists and is increasingly recognized, especially with SGLT2 inhibitors); (2) anion-gap metabolic acidosis (anion gap >12, bicarbonate <18, pH <7.30 in moderate to severe disease); (3) ketonemia or ketonuria (urine ketones, beta-hydroxybutyrate). DKA requires all three; one or two is suggestive but not diagnostic. Three plausible triggers in this specific history that should be investigated even though the diagnosis is clear: (1) infection — the recent URI is a classic precipitant; viral or bacterial illness raises counter-regulatory hormones (cortisol, glucagon, catecholamines) that drive ketogenesis and can outpace exogenous insulin. Always look for an occult infection (UTI, pneumonia, intra-abdominal). (2) Insulin delivery failure — pump occlusions, kinked tubing, dislodged catheter, dead battery, or empty reservoir can cause hours of effective insulin deprivation despite the patient believing the pump is working. "Compliance" is a behavior; pump function is a mechanical question, and the two are independent. (3) Missed doses or dosing errors — viral illness with vomiting often leads patients to skip insulin because "I am not eating," but basal insulin is required regardless of intake; missing it during a stress state is a classic trigger. Also worth carrying on the broader trigger list: new-onset diabetes (in undiagnosed type 1), pregnancy, MI in older patients, pancreatitis, drug effects (corticosteroids, SGLT2 inhibitors). The reasoning move: DKA has a presentation; it also has a cause. Treating the presentation without investigating the cause leaves the patient at risk for recurrence within days. The history-taking work after the diagnosis is made is what prevents the next admission.',
    keyConcepts: [
      { token: 'DKA', synonyms: ['dka', 'diabetic ketoacidosis', 'ketoacidosis'] },
      { token: 'Kussmaul respirations (named)', synonyms: ['kussmaul', "kussmaul's", 'kussmaul respirations', 'kussmaul breathing'] },
      { token: 'Three diagnostic criteria', synonyms: ['hyperglycemia', 'anion gap', 'metabolic acidosis', 'ketones', 'ketonemia', 'ketonuria', 'three criteria', 'diagnostic criteria', 'all three'] },
      { token: 'Infection trigger', synonyms: ['infection', 'uri', 'upper respiratory', 'viral illness', 'bacterial', 'occult infection', 'sepsis'] },
      { token: 'Pump or insulin delivery failure', synonyms: ['pump', 'pump failure', 'pump occlusion', 'kinked', 'catheter', 'delivery failure', 'mechanical', 'pump malfunction', 'occluded', 'empty reservoir'] },
      { token: 'Counter-regulatory hormones', synonyms: ['counter-regulatory', 'counterregulatory', 'cortisol', 'glucagon', 'catecholamine', 'stress hormones', 'stress response'] }
    ],
    followUp: {
      prompt: 'Same labs, same Kussmaul breathing, same anion-gap acidosis. But the patient is a 47-year-old man with no known diabetes, recently put on a new oral diabetes medication 6 weeks ago. His glucose is 134, not 412. Urine ketones are still 3+. (1) Name the diagnosis and what makes it distinct from classic DKA. (2) Name the medication class most strongly associated with this presentation. (3) Explain the mechanism that allows ketoacidosis to occur without significant hyperglycemia. (4) State why this presentation is more likely to be missed than classic DKA, and what that means for clinicians.',
      teaching: 'This is euglycemic DKA (eu-DKA) — diabetic ketoacidosis with normal or near-normal blood glucose. The medication class most strongly associated is SGLT2 inhibitors (sodium-glucose cotransporter-2 inhibitors), used in type 2 diabetes and increasingly in heart failure and chronic kidney disease. Mechanism: SGLT2 inhibitors block renal glucose reabsorption, producing glucosuria that lowers serum glucose. In settings of stress, fasting, low-carb diet, or surgery, the patient\u2019s insulin requirements drop because glucose is being excreted; the pancreas (or exogenous regimen) reduces insulin output accordingly. Low insulin plus relatively elevated glucagon shifts metabolism toward lipolysis and ketogenesis — but glucose stays controlled because of ongoing renal excretion. Result: severe ketoacidosis without the hyperglycemic clue that normally triggers diagnostic suspicion. Why this is more likely to be missed: clinicians anchor on hyperglycemia as the marker of "diabetic" emergencies. A patient on an SGLT2 inhibitor who presents with nausea, vomiting, abdominal pain, Kussmaul breathing, and a glucose of 134 may be diagnosed with gastroenteritis, sepsis of unknown etiology, or "non-specific acidosis" — and the bicarbonate and ketones may be the only clues. The clinical reasoning move for clinicians: in any patient on an SGLT2 inhibitor who is acidotic, check ketones regardless of glucose level. The diagnostic threshold for euglycemic DKA in someone on an SGLT2 inhibitor is glucose under 200 with anion-gap acidosis and ketones — and the syndrome is real, dangerous, and increasingly common as the drug class expands.',
      keyConcepts: [
        { token: 'Euglycemic DKA', synonyms: ['euglycemic', 'eu-dka', 'eudka', 'normoglycemic ketoacidosis', 'normoglycemic dka', 'euglycaemic'] },
        { token: 'SGLT2 inhibitor class', synonyms: ['sglt2', 'sglt-2', 'sodium-glucose', 'sodium glucose cotransporter', 'gliflozin', 'glucose cotransporter'] },
        { token: 'Glucosuria masks hyperglycemia', synonyms: ['glucosuria', 'glucose excretion', 'urinary glucose', 'renal excretion', 'blocked reabsorption', 'masks', 'urine excretion'] },
        { token: 'Lipolysis and ketogenesis without hyperglycemia', synonyms: ['lipolysis', 'ketogenesis', 'low insulin', 'glucagon', 'fatty acid', 'ketones still produced'] },
        { token: 'Check ketones regardless of glucose', synonyms: ['check ketones', 'measure ketones', 'regardless of glucose', 'normal glucose', 'easily missed', 'low threshold', 'high index of suspicion'] }
      ]
    },
    references: [
      {
        citation: 'Lizzo JM, Goyal A, Gupta V. Adult Diabetic Ketoacidosis. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK560723/'
      }
    ]
  },

  {type:'Distinguishing Case',scenario:'A 64-year-old man presents to the ED with three episodes of dark, tarry stools over the past 24 hours and one episode of vomiting that "looked like coffee grounds." He has chronic NSAID use for osteoarthritis, no alcohol use, no liver disease history. On arrival: BP 108/68 sitting, HR 102 sitting; BP 92/58 and HR 118 on standing. Hgb 9.4 (baseline 14.1 from 6 months ago). BUN 48, creatinine 1.0.',
    prompt:'Your intern says "could be lower GI bleed — let\u2019s get a CT abdomen." You think the source is upper GI. (1) Name the eponym for the dark, tarry stool pattern in the vignette and what it tells you about transit time and source. (2) State the BUN-to-creatinine ratio in this patient and explain what an elevated ratio in the setting of GI bleeding signifies mechanistically. (3) Identify two history features that further support an upper GI source over lower. (4) Explain why orthostatic vital signs in this patient are more meaningful than the supine numbers.',
    teaching:'The dark, tarry stool pattern is melena. Melena means digested blood — blood that has been in the GI tract long enough for hemoglobin to be metabolized by gastric acid and bacterial action, producing the characteristic black, tarry, foul-smelling stool. That requires a transit time of approximately 4-6 hours minimum, which essentially localizes the source to the upper GI tract (esophagus, stomach, duodenum, or proximal jejunum). Bright red blood per rectum (hematochezia) suggests a lower source, although a brisk upper GI bleed can also present as hematochezia when transit is fast. The BUN-to-creatinine ratio in this patient is 48 ÷ 1.0 = 48. A ratio above approximately 30 in the setting of GI bleeding strongly suggests an upper GI source. Mechanism: blood in the upper GI tract is essentially a high-protein meal — hemoglobin and serum proteins are digested and absorbed, producing a urea load that elevates BUN out of proportion to creatinine. Volume depletion from the bleed itself contributes some, but the protein-load effect is the larger driver of the disproportionate elevation. Two further features supporting upper GI: (1) coffee-ground emesis — vomited blood that has been partially digested by gastric acid, by definition upper GI; (2) chronic NSAID use — a well-established risk factor for peptic ulcer disease, which is the most common cause of upper GI bleeding. The orthostatic findings matter more than the supine numbers because his supine BP and HR look stable (108/68, HR 102 — borderline tachycardia but not alarming). Standing reveals a 16 mmHg drop and a 16 bpm rise — together suggesting class II to class III hemorrhagic shock with maintained supine perfusion through compensation. This is approximately a 15-30% blood volume deficit; supine numbers will fail until decompensation, at which point the patient crashes. The reasoning move: the orthostatic delta is a sensitive indicator of significant volume loss before supine pressure fails.',
    keyConcepts: [
      { token: 'Melena (named)', synonyms: ['melena', 'melaena'] },
      { token: 'BUN-to-creatinine ratio elevated', synonyms: ['bun creatinine ratio', 'bun:cr', 'bun/cr', 'bun to cr', 'ratio of 48', 'ratio 48', 'ratio above 30', '48 to 1', 'high ratio', 'elevated ratio'] },
      { token: 'Protein digestion drives BUN', synonyms: ['protein load', 'protein digestion', 'hemoglobin digested', 'absorbed protein', 'urea load', 'high-protein meal', 'digested blood produces urea', 'urea production'] },
      { token: 'Coffee-ground emesis', synonyms: ['coffee ground', 'coffee-ground', 'partially digested blood', 'hematemesis', 'vomiting blood'] },
      { token: 'NSAID risk for peptic ulcer', synonyms: ['nsaid', 'peptic ulcer', 'pud', 'gastric ulcer', 'duodenal ulcer', 'ulcer disease', 'nsaid use'] },
      { token: 'Orthostatic detects compensated shock', synonyms: ['orthostatic', 'standing', 'compensated shock', 'occult volume loss', 'before supine fails', 'class ii', 'class iii', 'volume deficit'] }
    ],
    followUp: {
      prompt: 'Same melena, same orthostatic findings, same BUN-to-creatinine ratio. But the patient is different: a 52-year-old man with known cirrhosis from chronic alcohol use, with a known history of esophageal varices on prior endoscopy. He had a large episode of bright red hematemesis at home before the melena. On exam he has spider angiomata, palmar erythema, and a slightly distended abdomen with shifting dullness. Platelets 78, INR 1.6. (1) Name the type of dilated submucosal vessels involved and the broader physiologic state that produces them. (2) State two physical findings in the vignette beyond the bleed that point to the underlying disease. (3) Explain why the management approach differs from the original NSAID-related bleed, focusing on the diagnostic and resuscitation reasoning (not specific medications). (4) Explain why the elevated INR and low platelets are not the primary cause of bleeding here, even though they look alarming.',
      teaching: 'The most likely source is variceal bleeding, specifically from esophageal varices — dilated submucosal veins in the lower esophagus formed as portosystemic collaterals when portal venous pressure rises in cirrhosis. The standard term for the vessels is varices, and the broader physiologic state is portal hypertension. Two physical findings beyond the bleed pointing to underlying cirrhosis with portal hypertension: (1) spider angiomata and palmar erythema — both are estrogen-mediated stigmata of liver disease, since the cirrhotic liver fails to clear circulating estrogens; (2) shifting dullness — a sign of ascites, indicating portal hypertension and/or hypoalbuminemia. Why the management approach differs: variceal bleeding has different priorities and a different resuscitation strategy than NSAID-induced peptic ulcer bleeding. The diagnostic differences include: priority for endoscopy (urgent for variceal bleeding given the rebleed risk and mortality), specific therapeutic options at endoscopy (banding for esophageal varices), and consideration of medication classes that reduce splanchnic blood flow (octreotide and similar) and prophylactic antibiotic class (typically a third-generation cephalosporin given empirically because spontaneous bacterial peritonitis risk rises around bleeding episodes). Resuscitation differs as well — overly aggressive volume resuscitation can paradoxically worsen variceal bleeding by raising portal pressure, so the approach is more measured than in non-variceal bleeds. Why INR 1.6 and platelets 78 are not the primary cause of bleeding: cirrhotic patients have abnormal coagulation labs but a rebalanced hemostatic system — they have parallel reductions in pro- and anti-coagulant factors. The INR and PT measure only the procoagulant arm and overestimate true bleeding risk in cirrhosis. The bleeding here is from a mechanical source (a ruptured varix under high portal pressure), not from a coagulopathic state. Correcting INR with FFP in this setting is rarely helpful and can worsen volume overload and portal pressure. The reasoning move: in cirrhosis, abnormal coagulation labs reflect liver dysfunction, not necessarily a hemostatic defect that drives bleeding.',
      keyConcepts: [
        { token: 'Variceal bleeding', synonyms: ['variceal', 'varices', 'esophageal varices', 'gastric varices', 'variceal bleed'] },
        { token: 'Portal hypertension', synonyms: ['portal hypertension', 'portal pressure', 'portosystemic', 'portal htn'] },
        { token: 'Cirrhosis stigmata', synonyms: ['spider angioma', 'palmar erythema', 'ascites', 'shifting dullness', 'stigmata', 'liver disease stigmata', 'cirrhosis findings'] },
        { token: 'Different management approach', synonyms: ['endoscopy', 'banding', 'octreotide', 'splanchnic', 'antibiotic prophylaxis', 'sbp', 'measured resuscitation', 'measured volume', 'less aggressive volume', 'different management'] },
        { token: 'Rebalanced coagulation in cirrhosis', synonyms: ['rebalanced', 'inr overestimate', 'inr does not predict bleeding', 'mechanical source', 'rupture', 'pt overestimate', 'parallel reduction', 'compensated coagulation', 'inr unreliable'] }
      ]
    },
    references: [
      {
        citation: 'DiGregorio AM, Alvey H. Gastrointestinal Bleeding. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK537291/'
      },
      {
        citation: 'Garbuzenko DV. Esophageal Varices. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK448078/'
      }
    ]
  }
'''


def main():
    src = PUZZLES_FILE.read_text()
    if MARKER in src:
        print("Batch 2 marker already present; skipping insert.")
        return

    anchor = '\n];\n\nvar currentIndex'
    idx = src.find(anchor)
    if idx < 0:
        print("ERROR: could not locate PUZZLES array close anchor")
        sys.exit(1)

    pre_close = src[:idx]
    last_brace = pre_close.rfind('}')
    if last_brace < 0:
        print("ERROR: could not find last `}` before array close")
        sys.exit(1)

    insert_text = ',\n' + NEW_PUZZLES_JS
    new_src = src[:last_brace + 1] + insert_text + src[last_brace + 1:]
    PUZZLES_FILE.write_text(new_src)
    print(f"Inserted batch 2 (5 puzzles, 3 with B-shape followUp). File grew by {len(insert_text)} chars.")


if __name__ == '__main__':
    main()
