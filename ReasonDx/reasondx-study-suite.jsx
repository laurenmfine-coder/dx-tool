import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight, Brain, Zap, GitBranch, BookOpen, Target, AlertTriangle, CheckCircle, XCircle, RotateCcw, Lightbulb, ArrowRight, Sparkles, ChevronUp, Filter, X, Plus } from 'lucide-react';

// ============================================================================
// SAMPLE DATA - Based on Socratic Discovery Templates
// ============================================================================

const SAMPLE_TOPICS = {
  gi_bleeding: {
    id: 'gi_bleeding',
    title: 'GI Bleeding',
    subtitle: 'Upper vs Lower Localization & Management',
    color: '#DC2626',
    concepts: {
      root: {
        id: 'root',
        label: 'GI Bleeding',
        children: ['localization', 'hemodynamic', 'management']
      },
      localization: {
        id: 'localization',
        label: 'Localization',
        children: ['upper_signs', 'lower_signs', 'hematochezia_trap'],
        keyPoint: 'First determine: Upper or Lower source?'
      },
      upper_signs: {
        id: 'upper_signs',
        label: 'Upper GI Signs',
        details: ['Hematemesis (coffee grounds or bright red)', 'Melena (black, tarry stool)', 'BUN/Cr ratio >20:1', 'NG lavage with blood'],
        pearl: 'BUN elevated because blood is digested and absorbed as protein'
      },
      lower_signs: {
        id: 'lower_signs',
        label: 'Lower GI Signs',
        details: ['Hematochezia with clots', 'Blood clots highly predictive of colonic source (LR 0.05 for upper)', 'Normal BUN/Cr ratio'],
        pearl: 'Clots = almost certainly lower source'
      },
      hematochezia_trap: {
        id: 'hematochezia_trap',
        label: '⚠️ Hematochezia Trap',
        details: ['10-15% of SEVERE hematochezia is actually UPPER source', 'Brisk upper bleed → blood moves fast → no time to become melena', 'Key: Check hemodynamics!'],
        critical: true,
        pearl: 'Hematochezia + hypotension = consider upper source'
      },
      hemodynamic: {
        id: 'hemodynamic',
        label: 'Hemodynamic Assessment',
        children: ['severity_signs', 'hemoglobin_trap'],
        keyPoint: 'Severity determines urgency'
      },
      severity_signs: {
        id: 'severity_signs',
        label: 'Shock Signs',
        details: ['Tachycardia (HR >100)', 'Hypotension (SBP <90)', 'Orthostatic changes', 'Altered mental status', 'Cool extremities']
      },
      hemoglobin_trap: {
        id: 'hemoglobin_trap',
        label: '⚠️ Normal Hemoglobin Trap',
        details: ['Acute blood loss = whole blood loss', 'Hemoglobin concentration unchanged initially', 'Takes 24-72 hours to equilibrate', 'Patient can be in shock with Hgb 14!'],
        critical: true,
        pearl: 'Trust vital signs over hemoglobin in acute bleeding'
      },
      management: {
        id: 'management',
        label: 'Management',
        children: ['resuscitation', 'transfusion', 'endoscopy', 'special_cases']
      },
      resuscitation: {
        id: 'resuscitation',
        label: 'Resuscitation',
        details: ['2 large-bore IVs', 'Crystalloid initially', 'Type and screen/crossmatch', 'Reverse anticoagulation if applicable']
      },
      transfusion: {
        id: 'transfusion',
        label: 'Transfusion Strategy',
        details: ['Restrictive: Target Hgb 7 g/dL', 'Liberal (Hgb 9) has WORSE outcomes', 'Villanueva trial: 5% vs 9% mortality'],
        pearl: 'Less is more - restrictive transfusion saves lives'
      },
      endoscopy: {
        id: 'endoscopy',
        label: 'Endoscopy Timing',
        details: ['Standard: Within 24 hours', 'Urgent (<6h): NOT better for stable patients', 'Exception: Variceal bleeding - go early']
      },
      special_cases: {
        id: 'special_cases',
        label: 'Special Cases',
        children: ['variceal', 'aortoenteric']
      },
      variceal: {
        id: 'variceal',
        label: 'Variceal Bleeding',
        details: ['Octreotide infusion', 'Prophylactic antibiotics (ceftriaxone)', 'NOT just PPI!', 'Early endoscopy for banding'],
        pearl: 'Cirrhosis + hematemesis = Octreotide + antibiotics + scope'
      },
      aortoenteric: {
        id: 'aortoenteric',
        label: '🚨 Aortoenteric Fistula',
        details: ['History of aortic graft surgery', 'Herald bleed: small self-limited bleed', 'Can exsanguinate rapidly', 'ALWAYS ask about aortic surgery!'],
        critical: true,
        pearl: 'GI bleed + aortic graft history = emergency CT angiography'
      }
    },
    discriminators: [
      {
        title: 'Upper vs Lower GI Bleeding',
        conditions: ['Upper GI', 'Lower GI'],
        features: [
          { name: 'Hematemesis', upper: '+++', lower: '-' },
          { name: 'Coffee-ground emesis', upper: '++', lower: '-' },
          { name: 'Melena', upper: '+++', lower: '+' },
          { name: 'Hematochezia', upper: '+ (if massive)', lower: '+++' },
          { name: 'Blood clots in stool', upper: '-', lower: '+++' },
          { name: 'BUN/Cr >20:1', upper: '+++', lower: '-' },
          { name: 'NG lavage positive', upper: '+++', lower: '-' }
        ]
      }
    ],
    caseHooks: [
      {
        id: 'herald_bleed',
        title: 'The Herald Bleed',
        scenario: '68-year-old man with history of AAA repair 3 years ago presents with one episode of bright red blood per rectum that stopped spontaneously. Vital signs stable. Hemoglobin 13.2.',
        question: 'Safe to discharge with outpatient GI follow-up?',
        answer: 'NO! This is a potential aortoenteric fistula. The "herald bleed" is a small warning bleed that can precede massive exsanguination. Needs urgent CT angiography and vascular surgery consult.',
        teaching: 'ALWAYS ask about aortic surgery history in GI bleed patients.'
      },
      {
        id: 'normal_hgb',
        title: 'The Normal Hemoglobin',
        scenario: '45-year-old woman with hematemesis x3 episodes over 2 hours. HR 118, BP 92/58. Labs return: Hemoglobin 13.5 g/dL.',
        question: 'The normal hemoglobin is reassuring, right?',
        answer: 'NO! She is in hemorrhagic shock (tachycardia, hypotension). Hemoglobin is normal because she lost WHOLE BLOOD - concentration unchanged. It takes 24-72 hours for fluid shifts.',
        teaching: 'In acute bleeding, trust vital signs over hemoglobin.'
      },
      {
        id: 'bright_red_blood',
        title: 'The Bright Red Blood',
        scenario: '72-year-old man on aspirin presents with large volume bright red blood per rectum. HR 105, BP 88/52. You prepare for colonoscopy.',
        question: 'Colonoscopy is the right first step for hematochezia?',
        answer: 'Not necessarily! With hypotension and hematochezia, 10-15% have an UPPER source. Consider EGD first or at least be prepared for it.',
        teaching: 'Hematochezia + hemodynamic instability = consider upper source.'
      }
    ],
    flashcards: [
      { front: 'What BUN/Cr ratio suggests upper GI bleeding?', back: '>20:1 (blood digested and absorbed as protein)' },
      { front: 'What is the target hemoglobin for transfusion in GI bleeding?', back: '7 g/dL (restrictive strategy) - NOT 9-10' },
      { front: 'What percentage of severe hematochezia is from an upper source?', back: '10-15%' },
      { front: 'What is the "herald bleed"?', back: 'Small, self-limited GI bleed warning of impending massive hemorrhage from aortoenteric fistula' },
      { front: 'Treatment triad for variceal bleeding?', back: 'Octreotide + Antibiotics + Early endoscopy (NOT just PPI)' },
      { front: 'Why is hemoglobin normal in acute severe bleeding?', back: 'Acute loss is whole blood - concentration unchanged. Takes 24-72h for fluid shifts.' }
    ],
    decisions: [
      {
        id: 'transfusion_threshold',
        scenario: 'Patient with upper GI bleed, now hemodynamically stable. Hemoglobin is 7.8 g/dL.',
        question: 'Do you transfuse?',
        options: [
          { text: 'Yes, transfuse to Hgb >10', correct: false, consequence: 'Increased mortality and rebleeding (Villanueva trial)' },
          { text: 'Yes, transfuse to Hgb >9', correct: false, consequence: 'Liberal strategy associated with 9% mortality vs 5% with restrictive' },
          { text: 'No, threshold is 7 g/dL', correct: true, consequence: 'Correct! Restrictive transfusion (threshold 7) improves survival' },
          { text: 'Transfuse 1 unit and reassess', correct: false, consequence: 'Still liberal approach - stick with threshold of 7' }
        ]
      },
      {
        id: 'hematochezia_workup',
        scenario: '65-year-old with bright red blood per rectum. HR 112, BP 85/50.',
        question: 'What is your first endoscopic study?',
        options: [
          { text: 'Colonoscopy after bowel prep', correct: false, consequence: 'Patient unstable - and 10-15% of severe hematochezia is upper source!' },
          { text: 'EGD first', correct: true, consequence: 'Correct! With hemodynamic instability, rule out upper source first' },
          { text: 'Flexible sigmoidoscopy', correct: false, consequence: 'Limited exam, and misses upper source which is likely given instability' },
          { text: 'CT angiography', correct: false, consequence: 'Reasonable if ongoing bleeding, but EGD should be first to rule out upper' }
        ]
      }
    ]
  },
  hematuria: {
    id: 'hematuria',
    title: 'Hematuria Evaluation',
    subtitle: 'Glomerular vs Non-glomerular & Risk Stratification',
    color: '#7C3AED',
    concepts: {
      root: {
        id: 'root',
        label: 'Hematuria',
        children: ['confirmation', 'localization', 'risk_stratification']
      },
      confirmation: {
        id: 'confirmation',
        label: 'Confirm True Hematuria',
        children: ['dipstick_limits', 'microscopy'],
        keyPoint: 'Dipstick positive ≠ confirmed hematuria'
      },
      dipstick_limits: {
        id: 'dipstick_limits',
        label: 'Dipstick Limitations',
        details: ['Detects heme (peroxidase activity)', 'Positive with: RBCs, hemoglobin, OR myoglobin', 'False positives: hemoglobinuria, myoglobinuria', 'Must confirm with microscopy']
      },
      microscopy: {
        id: 'microscopy',
        label: 'Microscopic Confirmation',
        details: ['≥3 RBCs per high-power field', 'Centrifuged urine sediment', 'Single positive = repeat', '2+ positive = workup']
      },
      localization: {
        id: 'localization',
        label: 'Glomerular vs Non-glomerular',
        children: ['glomerular_signs', 'nonglomerular_signs'],
        keyPoint: 'Critical branch point for workup direction'
      },
      glomerular_signs: {
        id: 'glomerular_signs',
        label: 'Glomerular Source',
        details: ['RBC casts (virtually diagnostic)', 'Dysmorphic RBCs (≥40%)', 'Acanthocytes (≥5%)', 'Proteinuria', 'Brown/cola-colored urine', 'NO clots'],
        pearl: 'RBC casts = nephrology referral'
      },
      nonglomerular_signs: {
        id: 'nonglomerular_signs',
        label: 'Non-glomerular Source',
        details: ['Blood clots (almost always non-glomerular)', 'Uniform/isomorphic RBCs', 'Red/pink urine color', 'Minimal proteinuria'],
        pearl: 'Clots = urology workup'
      },
      risk_stratification: {
        id: 'risk_stratification',
        label: 'Malignancy Risk',
        children: ['high_risk', 'workup_strategy', 'anticoag_trap']
      },
      high_risk: {
        id: 'high_risk',
        label: 'High Risk Features',
        details: ['Male sex', 'Age ≥60 (female) or ≥40 (male)', 'Smoking history', 'Gross hematuria', 'Occupational exposure (dyes, rubber)', 'Prior pelvic radiation', 'Cyclophosphamide exposure']
      },
      workup_strategy: {
        id: 'workup_strategy',
        label: 'Workup by Risk',
        details: ['HIGH: CT urography + cystoscopy', 'INTERMEDIATE: Ultrasound + cystoscopy', 'LOW: Repeat UA in 6 months']
      },
      anticoag_trap: {
        id: 'anticoag_trap',
        label: '⚠️ Anticoagulation Trap',
        details: ['Hematuria on anticoagulation still needs full workup', 'Studies show similar pathology rates', 'Do NOT attribute to anticoagulation alone'],
        critical: true,
        pearl: 'Anticoagulation unmasks pathology - it does not cause it'
      }
    },
    discriminators: [
      {
        title: 'Glomerular vs Non-glomerular Hematuria',
        conditions: ['Glomerular', 'Non-glomerular'],
        features: [
          { name: 'RBC casts', upper: '+++', lower: '-' },
          { name: 'Dysmorphic RBCs', upper: '+++', lower: '-' },
          { name: 'Acanthocytes', upper: '++', lower: '-' },
          { name: 'Blood clots', upper: '-', lower: '+++' },
          { name: 'Proteinuria (>500mg)', upper: '+++', lower: '+/-' },
          { name: 'Brown/cola urine', upper: '+++', lower: '-' },
          { name: 'Red/pink urine', upper: '-', lower: '+++' }
        ]
      }
    ],
    caseHooks: [
      {
        id: 'anticoag_patient',
        title: 'The Anticoagulated Patient',
        scenario: '70-year-old man on apixaban for atrial fibrillation presents with one episode of gross hematuria. His cardiologist says "it\'s probably just the blood thinner."',
        question: 'Is it safe to attribute to anticoagulation and monitor?',
        answer: 'NO! Studies show patients on anticoagulation with hematuria have similar rates of underlying pathology. Full workup required.',
        teaching: 'Never attribute hematuria to anticoagulation alone - it unmasks pathology.'
      },
      {
        id: 'cola_urine',
        title: 'The Cola Urine',
        scenario: '22-year-old man presents with dark brown "cola-colored" urine 2 days after a sore throat. No clots. UA shows 3+ blood, 2+ protein.',
        question: 'Urology referral for cystoscopy?',
        answer: 'NO! This is glomerular hematuria (cola color, no clots, proteinuria, recent URI). Likely post-streptococcal GN or IgA nephropathy. Needs NEPHROLOGY referral.',
        teaching: 'Cola urine + no clots + proteinuria = glomerular = nephrology'
      }
    ],
    flashcards: [
      { front: 'What finding is virtually diagnostic of glomerular bleeding?', back: 'RBC casts' },
      { front: 'Blood clots in urine suggest what source?', back: 'Non-glomerular (urologic) - glomerular blood gets diluted through nephron' },
      { front: 'Should you attribute hematuria to anticoagulation?', back: 'NO - studies show similar pathology rates. Full workup still needed.' },
      { front: 'What percentage of dysmorphic RBCs suggests glomerular source?', back: '≥40% dysmorphic RBCs or ≥5% acanthocytes' },
      { front: 'Microscopic hematuria definition?', back: '≥3 RBCs per high-power field on centrifuged sediment' }
    ],
    decisions: [
      {
        id: 'anticoag_workup',
        scenario: '65-year-old woman on warfarin (INR 2.8) with gross hematuria.',
        question: 'What is your approach?',
        options: [
          { text: 'Attribute to supratherapeutic INR, recheck after dose adjustment', correct: false, consequence: 'Missed bladder cancer diagnosed 18 months later' },
          { text: 'Full workup with CT urography and cystoscopy', correct: true, consequence: 'Correct! Anticoagulation does not explain hematuria' },
          { text: 'Urology referral only if hematuria persists', correct: false, consequence: 'Delay risks missing malignancy at treatable stage' },
          { text: 'Repeat UA in 6 months', correct: false, consequence: 'Gross hematuria requires immediate workup, not observation' }
        ]
      }
    ]
  },
  nephrolithiasis: {
    id: 'nephrolithiasis',
    title: 'Nephrolithiasis',
    subtitle: 'Stone Management & Emergency Recognition',
    color: '#059669',
    concepts: {
      root: {
        id: 'root',
        label: 'Kidney Stones',
        children: ['presentation', 'imaging', 'management', 'emergencies']
      },
      presentation: {
        id: 'presentation',
        label: 'Clinical Presentation',
        children: ['classic_symptoms', 'hematuria_absence']
      },
      classic_symptoms: {
        id: 'classic_symptoms',
        label: 'Classic Symptoms',
        details: ['Colicky flank pain', 'Radiation to groin/testicle/labia', 'Nausea/vomiting', 'Restlessness (can\'t find comfortable position)', 'Hematuria']
      },
      hematuria_absence: {
        id: 'hematuria_absence',
        label: '⚠️ Hematuria May Be Absent',
        details: ['10-30% of documented stones have NO hematuria', '95% positive on day 1', 'Only 65-68% positive by day 3-4', 'Absence does NOT rule out stone'],
        critical: true
      },
      imaging: {
        id: 'imaging',
        label: 'Imaging',
        children: ['ct_protocol', 'radiolucent_trap']
      },
      ct_protocol: {
        id: 'ct_protocol',
        label: 'CT Protocol',
        details: ['Low-dose CT (2-4 mSv) for non-pregnant', 'Ultrasound first in pregnancy', 'Can see size, location, hydronephrosis']
      },
      radiolucent_trap: {
        id: 'radiolucent_trap',
        label: '⚠️ Radiolucent Stones',
        details: ['Uric acid stones are RADIOLUCENT', 'May see hydronephrosis but NO stone', 'Ask about gout, metabolic syndrome'],
        critical: true,
        pearl: 'Hydronephrosis + no visible stone = think uric acid'
      },
      management: {
        id: 'management',
        label: 'Management',
        children: ['passage_prediction', 'met', 'pain_control']
      },
      passage_prediction: {
        id: 'passage_prediction',
        label: 'Passage Prediction',
        details: ['≤2mm: 95% pass (8 days)', '2-4mm: 83% pass (12 days)', '4-6mm: 50% pass (22 days)', '>10mm: unlikely to pass']
      },
      met: {
        id: 'met',
        label: 'Medical Expulsive Therapy',
        details: ['Tamsulosin (alpha blocker)', 'Only beneficial for 5-10mm stones', 'NOT helpful for ≤5mm or >10mm']
      },
      pain_control: {
        id: 'pain_control',
        label: 'Pain Management',
        details: ['NSAIDs preferred over opioids', 'Equally effective', 'Fewer side effects', 'May decrease ureteral tone'],
        pearl: 'Ketorolac is your friend'
      },
      emergencies: {
        id: 'emergencies',
        label: '🚨 Emergencies',
        children: ['infected_stone', 'aki']
      },
      infected_stone: {
        id: 'infected_stone',
        label: '🚨 Infected Obstructed Kidney',
        details: ['Stone + fever + pyuria = EMERGENCY', 'Antibiotics alone will NOT work', 'Needs urgent decompression', 'Ureteral stent or nephrostomy tube'],
        critical: true,
        pearl: 'Infected stone = antibiotics + decompression'
      },
      aki: {
        id: 'aki',
        label: 'Acute Kidney Injury',
        details: ['Bilateral obstruction', 'Obstruction of solitary kidney', 'Rising creatinine = urgent urology']
      }
    },
    discriminators: [],
    caseHooks: [
      {
        id: 'fever_stone',
        title: 'The Fever Stone',
        scenario: '52-year-old diabetic with known 6mm ureteral stone, now with fever 102.4°F, rigors, and worsening flank pain despite antibiotics started yesterday.',
        question: 'Continue antibiotics and add coverage?',
        answer: 'NO! This is an infected obstructed kidney - a urologic emergency. Antibiotics cannot penetrate an obstructed system. Needs URGENT decompression PLUS antibiotics.',
        teaching: 'Infected obstructed kidney = antibiotics + decompression. Antibiotics alone will fail.'
      },
      {
        id: 'invisible_stone',
        title: 'The Invisible Stone',
        scenario: '58-year-old man with gout presents with classic renal colic. CT shows moderate hydronephrosis but NO visible stone.',
        question: 'Stone must have already passed?',
        answer: 'Not necessarily! Uric acid stones are RADIOLUCENT and may not be visible on CT. The hydronephrosis confirms obstruction. Gout history is the clue.',
        teaching: 'Hydronephrosis + no visible stone + gout = uric acid stone'
      }
    ],
    flashcards: [
      { front: 'What percentage of stones ≤4mm pass spontaneously?', back: '95% (average 8-12 days)' },
      { front: 'What size stones benefit from tamsulosin (MET)?', back: '5-10mm only (not ≤5mm or >10mm)' },
      { front: 'What type of stone is radiolucent?', back: 'Uric acid stones' },
      { front: 'Infected obstructed kidney treatment?', back: 'Antibiotics + URGENT decompression (stent or nephrostomy)' },
      { front: 'Is hematuria always present with kidney stones?', back: 'No - absent in 10-30% of documented cases' },
      { front: 'Preferred pain medication for renal colic?', back: 'NSAIDs (as effective as opioids, fewer side effects)' }
    ],
    decisions: [
      {
        id: 'infected_stone_management',
        scenario: 'Patient with 7mm ureteral stone, temp 103°F, WBC 18,000, pyuria.',
        question: 'What is the priority intervention?',
        options: [
          { text: 'Broad spectrum IV antibiotics and observe', correct: false, consequence: 'Patient becomes septic - antibiotics cannot work in obstructed system' },
          { text: 'Pain control and IV fluids', correct: false, consequence: 'Does not address the emergency - infected obstruction' },
          { text: 'Urgent urology for decompression + antibiotics', correct: true, consequence: 'Correct! Infected obstructed kidney needs both' },
          { text: 'Lithotripsy to break up stone', correct: false, consequence: 'Not appropriate for infected stone - need to drain first' }
        ]
      }
    ]
  }
};

// Comprehensive diagnosis database
const ALL_DIAGNOSES = [
  'Bacterial Pneumonia', 'Viral Pneumonia', 'Atypical Pneumonia (Walking Pneumonia)', 'Acute Bronchitis',
  'Community-Acquired Pneumonia', 'Hospital-Acquired Pneumonia', 'Aspiration Pneumonia',
  'Influenza', 'COVID-19', 'RSV Infection', 'Pulmonary Embolism', 'Pulmonary Edema',
  'Empyema', 'Lung Abscess', 'Tuberculosis', 'Pneumocystis Pneumonia',
  'Asthma Exacerbation', 'COPD Exacerbation', 'Bronchiectasis',
  'Heart Failure Exacerbation', 'Acute Coronary Syndrome', 'STEMI', 'NSTEMI', 'Unstable Angina',
  'Atrial Fibrillation', 'Pericarditis', 'Myocarditis', 'Endocarditis', 'Aortic Dissection',
  'GERD', 'Peptic Ulcer Disease', 'Gastritis', 'Esophagitis',
  'Upper GI Bleeding', 'Lower GI Bleeding', 'Variceal Bleeding',
  'Acute Pancreatitis', 'Cholecystitis', 'Choledocholithiasis', 'Cholangitis',
  'Appendicitis', 'Diverticulitis', 'Small Bowel Obstruction', 'Large Bowel Obstruction',
  'C. difficile Colitis', 'Inflammatory Bowel Disease', 'Ischemic Colitis',
  'Acute Kidney Injury', 'Chronic Kidney Disease', 'Nephrolithiasis', 'Hydronephrosis',
  'Pyelonephritis', 'Cystitis', 'Urethritis', 'Prostatitis',
  'Glomerulonephritis', 'Nephrotic Syndrome',
  'Ischemic Stroke', 'Hemorrhagic Stroke', 'TIA', 'Subarachnoid Hemorrhage',
  'Meningitis', 'Encephalitis', 'Seizure', 'Status Epilepticus', 'Syncope',
  'Migraine', 'Tension Headache', 'Cluster Headache',
  'Sepsis', 'Septic Shock', 'Bacteremia',
  'Cellulitis', 'Necrotizing Fasciitis', 'Abscess',
  'Diabetic Ketoacidosis', 'Hyperosmolar Hyperglycemic State', 'Hypoglycemia',
  'DVT', 'Pulmonary Embolism', 'Anemia', 'Thrombocytopenia',
  'Gout', 'Pseudogout', 'Rheumatoid Arthritis', 'Osteoarthritis',
  'Anxiety Disorder', 'Panic Attack', 'Delirium', 'Alcohol Withdrawal'
];

// ============================================================================
// COMPONENT 1: Hybrid Searchable Diagnosis Selector
// ============================================================================

const HybridDiagnosisSelector = ({ 
  currentDifferential = ['Bacterial Pneumonia', 'Viral Pneumonia', 'Atypical Pneumonia (Walking Pneumonia)', 'Acute Bronchitis'],
  suggestedAlternatives = ['Community-Acquired Pneumonia', 'Influenza', 'Sepsis', 'Pulmonary Embolism', 'Empyema', 'Lung Abscess', 'Heart Failure Exacerbation', 'COVID-19', 'Tuberculosis'],
  onSelect,
  onConfidenceChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(currentDifferential[0] || '');
  const [confidence, setConfidence] = useState(50);
  const [showAddNew, setShowAddNew] = useState(false);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const filteredDiagnoses = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return ALL_DIAGNOSES.filter(dx => 
      dx.toLowerCase().includes(query) && 
      !currentDifferential.includes(dx) &&
      !suggestedAlternatives.includes(dx)
    ).slice(0, 10);
  }, [searchQuery, currentDifferential, suggestedAlternatives]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowAddNew(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (showAddNew && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showAddNew]);

  const handleSelect = (diagnosis) => {
    setSelectedDiagnosis(diagnosis);
    setIsOpen(false);
    setShowAddNew(false);
    setSearchQuery('');
    onSelect?.(diagnosis);
  };

  const getConfidenceColor = (value) => {
    if (value < 30) return '#EF4444';
    if (value < 60) return '#F59E0B';
    return '#10B981';
  };

  const getConfidenceLabel = (value) => {
    if (value < 20) return 'Very uncertain';
    if (value < 40) return 'Uncertain';
    if (value < 60) return 'Coin flip';
    if (value < 80) return 'Fairly confident';
    return 'Certain';
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: '600px', margin: '0 auto' }}>
      <div ref={dropdownRef} style={{ position: 'relative', marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
          -- Select your leading diagnosis --
        </label>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '100%', padding: '14px 16px', background: 'white',
            border: '2px solid #E5E7EB', borderRadius: '12px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            cursor: 'pointer', fontSize: '16px', color: '#1F2937'
          }}
        >
          <span>{selectedDiagnosis || 'Select diagnosis...'}</span>
          <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
        </button>

        {isOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '4px',
            background: 'white', border: '2px solid #E5E7EB', borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)', zIndex: 1000, maxHeight: '400px', overflowY: 'auto'
          }}>
            {/* Your Differential */}
            <div style={{ padding: '12px 16px', borderBottom: '1px solid #F3F4F6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <BookOpen size={16} color="#6366F1" />
                <span style={{ fontWeight: '600', color: '#6366F1', fontSize: '13px' }}>Your Differential</span>
              </div>
              {currentDifferential.map((dx, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(dx)}
                  style={{
                    width: '100%', padding: '10px 12px',
                    background: selectedDiagnosis === dx ? '#EEF2FF' : 'transparent',
                    border: 'none', borderRadius: '8px', textAlign: 'left',
                    cursor: 'pointer', fontSize: '15px', color: '#1F2937'
                  }}
                >
                  {dx}
                </button>
              ))}
            </div>

            {/* Changed My Mind */}
            <div style={{ padding: '12px 16px' }}>
              <button
                onClick={() => setShowAddNew(!showAddNew)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px',
                  background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0'
                }}
              >
                <Plus size={16} color="#10B981" />
                <span style={{ fontWeight: '600', color: '#10B981', fontSize: '13px' }}>Changed My Mind (Add New)</span>
                <ChevronDown size={14} color="#10B981" style={{ transform: showAddNew ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>

              {showAddNew && (
                <>
                  <div style={{ position: 'relative', marginBottom: '12px' }}>
                    <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search all diagnoses..."
                      style={{
                        width: '100%', padding: '10px 12px 10px 40px',
                        border: '2px solid #E5E7EB', borderRadius: '8px', fontSize: '14px', outline: 'none'
                      }}
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <X size={14} color="#9CA3AF" />
                      </button>
                    )}
                  </div>

                  {searchQuery && filteredDiagnoses.length > 0 && (
                    <div style={{ marginBottom: '12px', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}>
                      <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Search Results</div>
                      {filteredDiagnoses.map((dx, idx) => (
                        <button key={idx} onClick={() => handleSelect(dx)} style={{ width: '100%', padding: '8px 10px', background: 'transparent', border: 'none', borderRadius: '6px', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: '#1F2937' }}>
                          {dx}
                        </button>
                      ))}
                    </div>
                  )}

                  {!searchQuery && (
                    <>
                      <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Suggested Alternatives</div>
                      {suggestedAlternatives.map((dx, idx) => (
                        <button key={idx} onClick={() => handleSelect(dx)} style={{ width: '100%', padding: '8px 10px', background: 'transparent', border: 'none', borderRadius: '6px', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: '#1F2937' }}>
                          {dx}
                        </button>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Confidence Slider */}
      <div style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', borderRadius: '16px', padding: '20px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ color: '#92400E', fontWeight: '600', fontSize: '15px' }}>How confident are you in this diagnosis?</span>
          <span style={{ color: '#B45309', fontWeight: '500', fontSize: '13px' }}>(slide to rate)</span>
        </div>
        <input
          type="range" min="0" max="100" value={confidence}
          onChange={(e) => { setConfidence(parseInt(e.target.value)); onConfidenceChange?.(parseInt(e.target.value)); }}
          style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: 'linear-gradient(to right, #EF4444 0%, #F59E0B 50%, #10B981 100%)', cursor: 'pointer', marginBottom: '12px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#92400E' }}>
          <span style={{ color: '#EF4444' }}>0% - Very uncertain</span>
          <span style={{ color: '#F59E0B' }}>50% - Coin flip</span>
          <span style={{ color: '#10B981' }}>100% - Certain</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: '12px', padding: '8px 16px', background: 'rgba(255,255,255,0.6)', borderRadius: '8px' }}>
          <span style={{ fontWeight: '700', color: getConfidenceColor(confidence), fontSize: '18px' }}>{confidence}%</span>
          <span style={{ color: '#92400E', marginLeft: '8px', fontSize: '14px' }}>- {getConfidenceLabel(confidence)}</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT 2: Interactive Concept Map
// ============================================================================

const ConceptMap = ({ topicId = 'gi_bleeding' }) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root']));
  const [selectedNode, setSelectedNode] = useState(null);
  const topic = SAMPLE_TOPICS[topicId];

  if (!topic) return <div>Topic not found</div>;

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) newExpanded.delete(nodeId);
    else newExpanded.add(nodeId);
    setExpandedNodes(newExpanded);
  };

  const renderNode = (nodeId, depth = 0) => {
    const node = topic.concepts[nodeId];
    if (!node) return null;

    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(nodeId);
    const isSelected = selectedNode === nodeId;

    return (
      <div key={nodeId} style={{ marginLeft: depth > 0 ? '24px' : 0 }}>
        <div
          onClick={() => { setSelectedNode(nodeId); if (hasChildren) toggleNode(nodeId); }}
          style={{
            display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '12px 16px', marginBottom: '8px',
            background: node.critical ? 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)' : isSelected ? `linear-gradient(135deg, ${topic.color}15 0%, ${topic.color}25 100%)` : '#F9FAFB',
            border: `2px solid ${node.critical ? '#EF4444' : isSelected ? topic.color : 'transparent'}`,
            borderRadius: '12px', cursor: 'pointer'
          }}
        >
          {hasChildren && <div style={{ marginTop: '2px' }}>{isExpanded ? <ChevronDown size={18} color={topic.color} /> : <ChevronRight size={18} color="#6B7280" />}</div>}
          {!hasChildren && <div style={{ width: '18px' }} />}
          
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '600', color: node.critical ? '#DC2626' : '#1F2937', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {node.label}
              {node.critical && <AlertTriangle size={16} color="#DC2626" />}
            </div>
            {node.keyPoint && <div style={{ marginTop: '4px', fontSize: '13px', color: '#6B7280', fontStyle: 'italic' }}>{node.keyPoint}</div>}
            {isSelected && node.details && (
              <div style={{ marginTop: '12px' }}>
                {node.details.map((detail, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', fontSize: '14px', color: '#374151' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: topic.color, marginTop: '6px', flexShrink: 0 }} />
                    {detail}
                  </div>
                ))}
              </div>
            )}
            {isSelected && node.pearl && (
              <div style={{ marginTop: '12px', padding: '10px 14px', background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', borderRadius: '8px', fontSize: '13px', color: '#92400E', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Lightbulb size={16} style={{ flexShrink: 0, marginTop: '1px' }} />
                <span><strong>Pearl:</strong> {node.pearl}</span>
              </div>
            )}
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div style={{ borderLeft: `2px solid ${topic.color}30`, marginLeft: '9px', paddingLeft: '16px' }}>
            {node.children.map(childId => renderNode(childId, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ background: `linear-gradient(135deg, ${topic.color} 0%, ${topic.color}DD 100%)`, borderRadius: '20px', padding: '24px 32px', marginBottom: '24px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <GitBranch size={28} />
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '700' }}>{topic.title}</h2>
        </div>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '15px' }}>{topic.subtitle}</p>
        <div style={{ marginTop: '16px', fontSize: '13px', opacity: 0.8 }}>💡 Click nodes to expand and see details</div>
      </div>
      <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #E5E7EB' }}>
        {renderNode('root')}
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT 3: Discriminator Practice
// ============================================================================

const DiscriminatorPractice = ({ topicId = 'gi_bleeding' }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const topic = SAMPLE_TOPICS[topicId];
  
  if (!topic?.discriminators?.length) return <div style={{ padding: '40px', textAlign: 'center', color: '#6B7280' }}>No discriminators available for this topic</div>;

  const discriminator = topic.discriminators[0];

  const handleAnswer = (featureIdx, value) => setUserAnswers(prev => ({ ...prev, [featureIdx]: value }));

  const checkAnswers = () => {
    let correct = 0;
    discriminator.features.forEach((feature, idx) => {
      const userAnswer = userAnswers[idx];
      if (userAnswer) {
        const [userUpper, userLower] = userAnswer.split('|');
        if (userUpper === feature.upper && userLower === feature.lower) correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const reset = () => { setUserAnswers({}); setShowResults(false); setScore(0); };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ background: `linear-gradient(135deg, ${topic.color} 0%, ${topic.color}DD 100%)`, borderRadius: '20px', padding: '24px 32px', marginBottom: '24px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <Target size={28} />
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '700' }}>Discriminator Practice</h2>
        </div>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '15px' }}>{discriminator.title}</p>
      </div>

      <div style={{ background: '#F0F9FF', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', fontSize: '14px', color: '#0369A1' }}>
        <strong>Instructions:</strong> For each feature, select how strongly it suggests each condition. Use: <strong>+++</strong> (strongly), <strong>++</strong> (moderately), <strong>+</strong> (weakly), <strong>+/-</strong> (variable), <strong>-</strong> (not typical)
      </div>

      <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F9FAFB' }}>
              <th style={{ padding: '16px', textAlign: 'left', borderBottom: '2px solid #E5E7EB', width: '40%' }}>Feature</th>
              {discriminator.conditions.map((condition, idx) => (
                <th key={idx} style={{ padding: '16px', textAlign: 'center', borderBottom: '2px solid #E5E7EB', color: topic.color, fontWeight: '700' }}>{condition}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {discriminator.features.map((feature, idx) => {
              const userAnswer = userAnswers[idx];
              const correctAnswer = `${feature.upper}|${feature.lower}`;
              const isCorrect = showResults && userAnswer === correctAnswer;
              const isIncorrect = showResults && userAnswer && userAnswer !== correctAnswer;

              return (
                <tr key={idx} style={{ background: isCorrect ? '#F0FDF4' : isIncorrect ? '#FEF2F2' : 'white', borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '14px 16px', fontWeight: '500' }}>
                    {feature.name}
                    {showResults && isIncorrect && <div style={{ fontSize: '12px', color: '#DC2626', marginTop: '4px' }}>Correct: {feature.upper} | {feature.lower}</div>}
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                    {showResults ? (
                      <span style={{ fontWeight: '600', color: feature.upper.includes('+') ? '#059669' : '#6B7280' }}>{feature.upper}</span>
                    ) : (
                      <select value={userAnswer?.split('|')[0] || ''} onChange={(e) => { const currentLower = userAnswer?.split('|')[1] || ''; handleAnswer(idx, `${e.target.value}|${currentLower}`); }} style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #D1D5DB', fontSize: '14px', cursor: 'pointer' }}>
                        <option value="">Select...</option>
                        <option value="+++">+++</option>
                        <option value="++">++</option>
                        <option value="+">+</option>
                        <option value="+/-">+/-</option>
                        <option value="+ (if massive)">+ (if massive)</option>
                        <option value="-">-</option>
                      </select>
                    )}
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                    {showResults ? (
                      <span style={{ fontWeight: '600', color: feature.lower.includes('+') ? '#059669' : '#6B7280' }}>{feature.lower}</span>
                    ) : (
                      <select value={userAnswer?.split('|')[1] || ''} onChange={(e) => { const currentUpper = userAnswer?.split('|')[0] || ''; handleAnswer(idx, `${currentUpper}|${e.target.value}`); }} style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #D1D5DB', fontSize: '14px', cursor: 'pointer' }}>
                        <option value="">Select...</option>
                        <option value="+++">+++</option>
                        <option value="++">++</option>
                        <option value="+">+</option>
                        <option value="+/-">+/-</option>
                        <option value="-">-</option>
                      </select>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
        {!showResults ? (
          <button onClick={checkAnswers} disabled={Object.keys(userAnswers).length < discriminator.features.length} style={{ padding: '14px 32px', background: Object.keys(userAnswers).length < discriminator.features.length ? '#D1D5DB' : topic.color, color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '600', cursor: Object.keys(userAnswers).length < discriminator.features.length ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle size={20} /> Check Answers
          </button>
        ) : (
          <>
            <div style={{ padding: '14px 24px', background: score === discriminator.features.length ? '#F0FDF4' : '#FEF3C7', border: `2px solid ${score === discriminator.features.length ? '#10B981' : '#F59E0B'}`, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: '700', fontSize: '18px' }}>{score} / {discriminator.features.length}</span>
              <span style={{ color: '#6B7280' }}>correct</span>
            </div>
            <button onClick={reset} style={{ padding: '14px 24px', background: 'white', color: '#6B7280', border: '2px solid #E5E7EB', borderRadius: '12px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RotateCcw size={20} /> Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT 4: Case Flashcards
// ============================================================================

const CaseFlashcards = ({ topicId = 'gi_bleeding' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState('cases');
  const topic = SAMPLE_TOPICS[topicId];

  if (!topic) return <div>Topic not found</div>;

  const cards = mode === 'cases' ? topic.caseHooks : topic.flashcards;
  const currentCard = cards[currentIndex];

  const nextCard = () => { setIsFlipped(false); setTimeout(() => setCurrentIndex((prev) => (prev + 1) % cards.length), 150); };
  const prevCard = () => { setIsFlipped(false); setTimeout(() => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length), 150); };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ background: `linear-gradient(135deg, ${topic.color} 0%, ${topic.color}DD 100%)`, borderRadius: '20px', padding: '24px 32px', marginBottom: '24px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Zap size={28} />
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '700' }}>{topic.title} Flashcards</h2>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => { setMode('cases'); setCurrentIndex(0); setIsFlipped(false); }} style={{ padding: '8px 16px', background: mode === 'cases' ? 'rgba(255,255,255,0.25)' : 'transparent', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '8px', color: 'white', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Cases</button>
            <button onClick={() => { setMode('facts'); setCurrentIndex(0); setIsFlipped(false); }} style={{ padding: '8px 16px', background: mode === 'facts' ? 'rgba(255,255,255,0.25)' : 'transparent', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '8px', color: 'white', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Quick Facts</button>
          </div>
        </div>
        <div style={{ marginTop: '12px', fontSize: '14px', opacity: 0.9 }}>Card {currentIndex + 1} of {cards.length}</div>
      </div>

      <div onClick={() => setIsFlipped(!isFlipped)} style={{ perspective: '1000px', cursor: 'pointer', marginBottom: '24px' }}>
        <div style={{ position: 'relative', width: '100%', minHeight: mode === 'cases' ? '400px' : '250px', transition: 'transform 0.6s', transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
          {/* Front */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: 'white', borderRadius: '20px', border: '2px solid #E5E7EB', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
            {mode === 'cases' ? (
              <>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: topic.color, marginBottom: '12px', fontWeight: '700' }}>{currentCard.title}</div>
                <div style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7', marginBottom: '20px' }}>{currentCard.scenario}</div>
                <div style={{ fontSize: '17px', color: '#1F2937', fontWeight: '600', padding: '16px', background: '#F9FAFB', borderRadius: '12px' }}>{currentCard.question}</div>
              </>
            ) : (
              <div style={{ fontSize: '20px', color: '#1F2937', fontWeight: '500', textAlign: 'center', lineHeight: '1.6' }}>{currentCard.front}</div>
            )}
            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '13px', color: '#9CA3AF' }}>Click to reveal answer</div>
          </div>

          {/* Back */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: `linear-gradient(135deg, ${topic.color}10 0%, ${topic.color}20 100%)`, borderRadius: '20px', border: `2px solid ${topic.color}40`, padding: '32px', transform: 'rotateY(180deg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
            {mode === 'cases' ? (
              <>
                <div style={{ fontSize: '17px', color: '#1F2937', fontWeight: '600', marginBottom: '16px', lineHeight: '1.6' }}>{currentCard.answer}</div>
                <div style={{ padding: '16px', background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', borderRadius: '12px', fontSize: '14px', color: '#92400E', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Lightbulb size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Teaching Point:</strong> {currentCard.teaching}</span>
                </div>
              </>
            ) : (
              <div style={{ fontSize: '20px', color: '#1F2937', fontWeight: '600', textAlign: 'center', lineHeight: '1.6' }}>{currentCard.back}</div>
            )}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <button onClick={prevCard} style={{ padding: '12px 24px', background: 'white', border: '2px solid #E5E7EB', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', color: '#374151' }}>← Previous</button>
        <button onClick={nextCard} style={{ padding: '12px 24px', background: topic.color, border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', color: 'white' }}>Next →</button>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT 5: Decision Trainer
// ============================================================================

const DecisionTrainer = ({ topicId = 'gi_bleeding' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [stats, setStats] = useState({ correct: 0, total: 0 });
  const topic = SAMPLE_TOPICS[topicId];

  if (!topic?.decisions?.length) return <div style={{ padding: '40px', textAlign: 'center', color: '#6B7280' }}>No decision scenarios available</div>;

  const currentDecision = topic.decisions[currentIndex];

  const handleSelect = (optionIdx) => {
    if (showResult) return;
    setSelectedOption(optionIdx);
    setShowResult(true);
    const isCorrect = currentDecision.options[optionIdx].correct;
    setStats(prev => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
  };

  const nextDecision = () => { setSelectedOption(null); setShowResult(false); setCurrentIndex((prev) => (prev + 1) % topic.decisions.length); };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ background: `linear-gradient(135deg, ${topic.color} 0%, ${topic.color}DD 100%)`, borderRadius: '20px', padding: '24px 32px', marginBottom: '24px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Brain size={28} />
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '700' }}>What Would You Do?</h2>
          </div>
          <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', fontSize: '14px', fontWeight: '600' }}>{stats.correct} / {stats.total} correct</div>
        </div>
        <p style={{ margin: '12px 0 0 0', opacity: 0.9, fontSize: '15px' }}>{topic.title} - Clinical Decision Training</p>
      </div>

      <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '28px', marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6B7280', marginBottom: '12px' }}>Scenario {currentIndex + 1} of {topic.decisions.length}</div>
        <div style={{ fontSize: '16px', color: '#1F2937', lineHeight: '1.7', marginBottom: '20px' }}>{currentDecision.scenario}</div>
        <div style={{ fontSize: '18px', color: topic.color, fontWeight: '700' }}>{currentDecision.question}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {currentDecision.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = option.correct;
          let borderColor = '#E5E7EB', bgColor = 'white';
          if (showResult) {
            if (isCorrect) { borderColor = '#10B981'; bgColor = '#F0FDF4'; }
            else if (isSelected) { borderColor = '#EF4444'; bgColor = '#FEF2F2'; }
          } else if (isSelected) { borderColor = topic.color; bgColor = `${topic.color}10`; }

          return (
            <div key={idx}>
              <button onClick={() => handleSelect(idx)} disabled={showResult} style={{ width: '100%', padding: '18px 20px', background: bgColor, border: `2px solid ${borderColor}`, borderRadius: '12px', textAlign: 'left', cursor: showResult ? 'default' : 'pointer', fontSize: '15px', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: showResult && isCorrect ? '#10B981' : showResult && isSelected ? '#EF4444' : '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px', color: showResult && (isCorrect || isSelected) ? 'white' : '#6B7280', flexShrink: 0 }}>
                  {showResult && isCorrect ? <CheckCircle size={16} /> : showResult && isSelected ? <XCircle size={16} /> : String.fromCharCode(65 + idx)}
                </div>
                <span>{option.text}</span>
              </button>
              {showResult && (isSelected || isCorrect) && (
                <div style={{ marginTop: '8px', marginLeft: '40px', padding: '12px 16px', background: isCorrect ? '#F0FDF4' : '#FEF2F2', borderRadius: '8px', fontSize: '14px', color: isCorrect ? '#065F46' : '#991B1B', borderLeft: `3px solid ${isCorrect ? '#10B981' : '#EF4444'}` }}>{option.consequence}</div>
              )}
            </div>
          );
        })}
      </div>

      {showResult && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={nextDecision} style={{ padding: '14px 32px', background: topic.color, color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>Next Scenario <ArrowRight size={20} /></button>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// COMPONENT 6: Deep Dive Cards
// ============================================================================

const DeepDiveCards = ({ topicId = 'gi_bleeding' }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const topic = SAMPLE_TOPICS[topicId];

  if (!topic) return <div>Topic not found</div>;

  const sections = [
    { id: 'must_know', title: '🎯 Must Know', icon: Target, color: '#10B981', items: Object.values(topic.concepts).filter(c => c.details && !c.critical).slice(0, 4).flatMap(c => c.details?.slice(0, 2) || []) },
    { id: 'dont_miss', title: '⚠️ Don\'t Miss', icon: AlertTriangle, color: '#EF4444', items: Object.values(topic.concepts).filter(c => c.critical).flatMap(c => c.details || []) },
    { id: 'pearls', title: '💡 Clinical Pearls', icon: Lightbulb, color: '#F59E0B', items: Object.values(topic.concepts).filter(c => c.pearl).map(c => c.pearl) },
    { id: 'test_yourself', title: '📝 Test Yourself', icon: Brain, color: '#6366F1', items: topic.flashcards?.slice(0, 4).map(f => f.front) || [] }
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ background: `linear-gradient(135deg, ${topic.color} 0%, ${topic.color}DD 100%)`, borderRadius: '20px', padding: '24px 32px', marginBottom: '24px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <BookOpen size={28} />
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '700' }}>{topic.title} Deep Dive</h2>
        </div>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '15px' }}>Structured review for rapid knowledge acquisition</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {sections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSection === section.id;
          return (
            <div key={section.id} style={{ background: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              <button onClick={() => setExpandedSection(isExpanded ? null : section.id)} style={{ width: '100%', padding: '20px 24px', background: isExpanded ? `${section.color}10` : 'white', border: 'none', borderLeft: `4px solid ${section.color}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon size={22} color={section.color} />
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#1F2937' }}>{section.title}</span>
                  <span style={{ fontSize: '13px', color: '#9CA3AF', background: '#F3F4F6', padding: '2px 8px', borderRadius: '12px' }}>{section.items.length} items</span>
                </div>
                {isExpanded ? <ChevronUp size={20} color="#6B7280" /> : <ChevronDown size={20} color="#6B7280" />}
              </button>
              {isExpanded && (
                <div style={{ padding: '0 24px 20px 24px', background: `${section.color}05` }}>
                  {section.items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 0', borderBottom: idx < section.items.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: section.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>{idx + 1}</div>
                      <span style={{ fontSize: '15px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================================
// MAIN APP: Study Suite Dashboard
// ============================================================================

export default function ReasonDxStudySuite() {
  const [activeTab, setActiveTab] = useState('selector');
  const [selectedTopic, setSelectedTopic] = useState('gi_bleeding');

  const tabs = [
    { id: 'selector', label: 'Diagnosis Selector', icon: Target },
    { id: 'concept_map', label: 'Concept Map', icon: GitBranch },
    { id: 'discriminator', label: 'Discriminator Practice', icon: Filter },
    { id: 'flashcards', label: 'Flashcards', icon: Zap },
    { id: 'decisions', label: 'Decision Trainer', icon: Brain },
    { id: 'deep_dive', label: 'Deep Dive', icon: BookOpen }
  ];

  const topics = Object.values(SAMPLE_TOPICS);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'selector': return <HybridDiagnosisSelector />;
      case 'concept_map': return <ConceptMap topicId={selectedTopic} />;
      case 'discriminator': return <DiscriminatorPractice topicId={selectedTopic} />;
      case 'flashcards': return <CaseFlashcards topicId={selectedTopic} />;
      case 'decisions': return <DecisionTrainer topicId={selectedTopic} />;
      case 'deep_dive': return <DeepDiveCards topicId={selectedTopic} />;
      default: return null;
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: '100vh', background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)', padding: '24px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={28} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '700' }}>ReasonDx Study Suite</h1>
              <p style={{ margin: 0, opacity: 0.7, fontSize: '14px' }}>Clinical Reasoning Training Tools</p>
            </div>
          </div>

          {activeTab !== 'selector' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '14px', opacity: 0.7 }}>Topic:</span>
              <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                {topics.map(topic => <option key={topic.id} value={topic.id} style={{ color: '#1F2937' }}>{topic.title}</option>)}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '0 32px', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8px' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ padding: '16px 20px', background: 'transparent', border: 'none', borderBottom: isActive ? '3px solid #6366F1' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: isActive ? '#6366F1' : '#6B7280', fontWeight: isActive ? '600' : '500', fontSize: '14px', whiteSpace: 'nowrap' }}>
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
        {renderActiveComponent()}
      </div>
    </div>
  );
}
