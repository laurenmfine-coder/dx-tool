// ============================================================================
// COACHDX GI/HEPATOLOGY CASE PACK
// SBAR scenarios for GI and hepatology communication training
// Created: January 29, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// This module adds GI/Hepatology SBAR scenarios that link directly to
// existing ReasonDx adventures and MechanismDx modules.
//
// CASES INCLUDED:
// 1. Upper GI Bleed - Hemodynamic Instability
// 2. Acute Liver Failure - INR Rising
// 3. Acute Pancreatitis - Severe
// 4. Acute Cholangitis - Charcot's Triad
// 5. Variceal Hemorrhage - Cirrhotic Patient
//
// ============================================================================

const COACHDX_GI_CASES = {

// ============================================================================
// CASE 1: UPPER GI BLEED - HEMODYNAMIC INSTABILITY
// ============================================================================

'ugib-hemodynamic': {
    id: 'ugib-hemodynamic',
    title: 'Upper GI Bleed - Unstable',
    category: 'GI',
    isParallel: false,
    parallelCase: 'upper-gi-bleed',
    parallelDescription: 'Stable upper GI bleed',
    patient: { 
        name: 'Michael Rodriguez', 
        age: 62, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Vomiting Blood' 
    },
    description: 'A 62-year-old with a history of peptic ulcer disease presents with multiple episodes of hematemesis over 2 hours. On warfarin for mechanical aortic valve. HR 118, BP 84/52, pale and diaphoretic. Hgb 6.8, INR 4.2, BUN 58, Cr 1.4. NG lavage shows bright red blood that doesn\'t clear.',
    openingStatement: 'Mr. Rodriguez has a massive upper GI bleed with hemodynamic instability and supratherapeutic anticoagulation. He needs rapid resuscitation and urgent endoscopy. How do you coordinate this emergency?',
    conceptDomains: {
        'Situation': ['hemodynamic_status', 'bleeding_severity', 'anticoagulation_status'],
        'Background': ['pud_history', 'valve_history', 'medication_list'],
        'Assessment': ['shock_class', 'transfusion_needs', 'reversal_decision'],
        'Recommendation': ['resuscitation', 'gi_consult', 'icu_admission']
    },
    quickActions: [
        'How do I resuscitate this patient?',
        'Should I reverse his warfarin?',
        'When does he need endoscopy?',
        'What blood products does he need?'
    ],
    keyTeachingPoints: [
        'Massive GI bleed: 2 large-bore IVs, type and crossmatch, activate massive transfusion if needed',
        'Restrictive transfusion (Hgb target 7-9) improves outcomes EXCEPT in massive bleeding',
        'Mechanical valve + supratherapeutic INR + life-threatening bleed = reverse anticoagulation',
        '4-factor PCC (Kcentra) reverses warfarin faster than FFP',
        'EGD within 12-24 hours; sooner if unstable after resuscitation'
    ],
    sbarTemplate: {
        situation: 'I have a 62-year-old man with massive upper GI bleed - he\'s in hemorrhagic shock with ongoing hematemesis. He\'s on warfarin with INR 4.2.',
        background: 'He has a history of peptic ulcer disease and a mechanical aortic valve requiring anticoagulation. He\'s been vomiting bright red blood for 2 hours. Hemoglobin is 6.8.',
        assessment: 'He\'s in Class III hemorrhagic shock - hypotensive, tachycardic, and the NG lavage shows ongoing active bleeding. He needs urgent resuscitation, anticoagulation reversal, and emergent endoscopy.',
        recommendation: 'I\'m starting massive transfusion protocol and giving 4-factor PCC to reverse his INR. He needs ICU admission and emergent GI consult for EGD. Can you accept him to the ICU and help coordinate with GI?'
    },
    defined_responses: {
        'resuscitation': 'Two large-bore IVs (18g or larger), crossmatch 4-6 units PRBCs. In massive hemorrhage, use 1:1:1 ratio (PRBC:FFP:platelets). Don\'t chase a Hgb number - transfuse to hemodynamic stability. Permissive hypotension (SBP 80-90) may be reasonable until bleeding controlled.',
        'warfarin reversal': 'YES - reverse it. Mechanical valve is high-risk, but life-threatening hemorrhage takes priority. Use 4-factor PCC (25-50 units/kg) - reverses INR in 15-30 minutes. Add vitamin K 10mg IV for sustained reversal. Hematology and cardiology should be informed.',
        'endoscopy timing': 'Emergent EGD (<12 hours) for patients with hemodynamic instability that doesn\'t respond to resuscitation, or ongoing active bleeding. Most stable UGIB patients get EGD within 24 hours. Pre-endoscopy erythromycin (250mg IV) improves visualization.',
        'blood products': 'PRBCs for hemorrhagic shock (don\'t wait for type/screen - use O-neg if critical). FFP if INR elevated. Platelets if <50K. Consider TXA (tranexamic acid) 1g IV - may reduce mortality. Activate MTP if anticipating >10 units in 24 hours.',
        'ppi': 'Start IV PPI - pantoprazole 80mg bolus then 8mg/hour infusion. Reduces rebleeding after successful hemostasis. Evidence strongest for high-risk ulcer stigmata.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'GI Bleeding Module', link: '../mechanism/gi-bleeding-module.html', reason: 'Understand upper vs lower GI bleed pathophysiology' },
        { type: 'reasondx', title: 'GI Bleed Adventure', link: '../ReasonDx/adventure-cases/gi-bleed-expanded.html', reason: 'Practice GI bleed management' },
        { type: 'reasondx', title: 'Shock Module', link: '../mechanism/shock-module.html', reason: 'Hemorrhagic shock resuscitation' }
    ],
    evidenceBase: {
        guidelines: [
            "ACG Upper GI Bleeding Guidelines 2021",
            "International Consensus Group UGIB 2019"
        ],
        keyEvidence: [
            "Restrictive transfusion (Hgb <7) improves survival in stable UGIB (Villanueva NEJM 2013)",
            "4-factor PCC reverses warfarin faster than FFP",
            "HALT-IT trial: TXA did not improve outcomes in GI bleeding (but was underpowered for severe bleeds)",
            "Pre-endoscopic erythromycin improves visualization and reduces need for second-look EGD"
        ],
        openAccessLinks: [
            "https://journals.lww.com/ajg/fulltext/2021/01000/acg_clinical_guideline__upper_gastrointestinal_and.13.aspx"
        ]
    }
},

// ============================================================================
// CASE 2: ACUTE LIVER FAILURE
// ============================================================================

'acute-liver-failure': {
    id: 'acute-liver-failure',
    title: 'Acute Liver Failure - INR Rising',
    category: 'GI/Hepatology',
    isParallel: false,
    parallelCase: 'alf-tylenol',
    parallelDescription: 'Acetaminophen-induced ALF',
    patient: { 
        name: 'Jennifer Walsh', 
        age: 34, 
        sex: 'Female', 
        setting: 'ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Confusion and Jaundice' 
    },
    description: 'A 34-year-old previously healthy woman presents with 1 week of fatigue, 3 days of jaundice, and new confusion today. No medications, no alcohol, no recent travel. AST 3,200, ALT 2,800, T.bili 18, INR 4.8, ammonia 142. Hepatitis serologies pending. Becoming increasingly encephalopathic. No chronic liver disease history.',
    openingStatement: 'Ms. Walsh has acute liver failure - severe hepatocellular injury with coagulopathy and encephalopathy in someone without chronic liver disease. This is a hepatology and transplant emergency. How do you communicate the severity and coordinate care?',
    conceptDomains: {
        'Situation': ['encephalopathy_grade', 'inr_trend', 'etiology_workup'],
        'Background': ['no_prior_liver_disease', 'exposure_history', 'medication_review'],
        'Assessment': ['alf_criteria', 'prognosis', 'transplant_evaluation'],
        'Recommendation': ['icu_care', 'hepatology_transplant', 'supportive_measures']
    },
    quickActions: [
        'What defines acute liver failure?',
        'What\'s the most common cause?',
        'Does she need a transplant evaluation?',
        'How do I manage hepatic encephalopathy?'
    ],
    keyTeachingPoints: [
        'ALF definition: Acute liver injury + encephalopathy + INR ≥1.5 in patient WITHOUT prior liver disease',
        'Most common causes in US: Acetaminophen (46%), indeterminate (14%), drug-induced (11%), HBV (7%)',
        'King\'s College Criteria help predict who needs transplant',
        'NAC benefits even non-APAP ALF in early stages',
        'Complications: cerebral edema, infection, hypoglycemia, coagulopathy'
    ],
    sbarTemplate: {
        situation: 'I have a 34-year-old woman with acute liver failure - she has severe hepatocellular injury with INR 4.8 and is now encephalopathic. She needs urgent hepatology and transplant evaluation.',
        background: 'She was previously healthy with no known liver disease. Symptoms started 1 week ago with fatigue, then jaundice, now confusion. No acetaminophen exposure that we know of, no alcohol. Serologies are pending.',
        assessment: 'She meets ALF criteria: acute liver injury, INR >1.5, encephalopathy, no prior liver disease. AST and ALT are in the thousands. Ammonia is 142. This is a transplant emergency depending on etiology and trajectory.',
        recommendation: 'She needs ICU admission, urgent hepatology consult, and transplant center notification. I\'m starting NAC empirically and lactulose for encephalopathy. Can you help coordinate the transfer workup and contact the transplant team?'
    },
    defined_responses: {
        'alf definition': 'ALF requires ALL of: (1) Evidence of acute liver injury (usually AST/ALT elevation, jaundice), (2) Hepatic encephalopathy, (3) INR ≥1.5, (4) Illness duration <26 weeks, (5) NO prior liver disease. She meets all criteria.',
        'common causes': 'In the US: Acetaminophen is #1 (46%) - check APAP level even if denied. Drug-induced (other meds), viral hepatitis (especially HBV, rarely HAV), autoimmune hepatitis, Wilson disease, ischemic hepatitis, Budd-Chiari. About 14% remain indeterminate.',
        'transplant': 'Yes - all ALF patients need transplant center involvement. King\'s College Criteria help predict who will die without transplant. For non-APAP ALF: INR >6.5 OR any 3 of (age <10 or >40, non-A/non-B hepatitis, drug-induced, jaundice >7 days before encephalopathy, INR >3.5, bilirubin >17.5).',
        'encephalopathy management': 'Lactulose 30mL q2h until bowel movement, then titrate to 3-4 stools/day. Rifaximin can be added. For severe HE (grade 3-4), intubation may be needed for airway protection. Monitor for cerebral edema - avoid hypoglycemia, maintain Na 145-150, HOB 30 degrees.',
        'nac': 'Give NAC even in non-acetaminophen ALF - it improves transplant-free survival in early (grade 1-2) encephalopathy. Same dosing as APAP overdose: 150mg/kg load, then 50mg/kg over 4h, then 100mg/kg over 16h.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Liver Module', link: '../mechanism/liver-cirrhosis-module.html', reason: 'Understand hepatic synthetic function' },
        { type: 'reasondx', title: 'ALF Adventure', link: '../ReasonDx/adventure-cases/alf-expanded.html', reason: 'Practice ALF workup' },
        { type: 'reasondx', title: 'APAP Overdose', link: '../ReasonDx/adventure-cases/apap-overdose-expanded.html', reason: 'Acetaminophen hepatotoxicity' }
    ],
    evidenceBase: {
        guidelines: [
            "AASLD Position Paper on ALF 2011 (update pending)",
            "EASL Clinical Practical Guidelines on Management of ALF"
        ],
        keyEvidence: [
            "NAC improves transplant-free survival in non-APAP ALF with grade 1-2 encephalopathy",
            "King's College Criteria have ~70% sensitivity for predicting death without transplant",
            "Intracranial hypertension occurs in up to 80% of grade 4 HE",
            "Prophylactic antibiotics reduce infections but not clearly mortality"
        ],
        openAccessLinks: [
            "https://aasldpubs.onlinelibrary.wiley.com/doi/10.1002/hep.24199"
        ]
    }
},

// ============================================================================
// CASE 3: SEVERE ACUTE PANCREATITIS
// ============================================================================

'pancreatitis-severe': {
    id: 'pancreatitis-severe',
    title: 'Severe Acute Pancreatitis',
    category: 'GI',
    isParallel: false,
    parallelCase: 'pancreatitis-mild',
    parallelDescription: 'Mild pancreatitis',
    patient: { 
        name: 'David Chang', 
        age: 48, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Severe Abdominal Pain' 
    },
    description: 'A 48-year-old heavy drinker presents with 18 hours of severe epigastric pain radiating to back, vomiting. Lipase 4,200. HR 112, BP 92/58, RR 24, SpO2 94% on RA. BUN 32, Cr 1.8, Hct 52%, Ca 7.2, glucose 320. CT shows peripancreatic inflammation and early necrosis. APACHE II score 14.',
    openingStatement: 'Mr. Chang has severe acute pancreatitis with early organ dysfunction - he\'s developing shock and has imaging evidence of necrosis. This needs aggressive ICU management. How do you present this and coordinate care?',
    conceptDomains: {
        'Situation': ['severity_markers', 'hemodynamic_status', 'imaging_findings'],
        'Background': ['alcohol_history', 'prior_episodes', 'gallstone_status'],
        'Assessment': ['severity_scoring', 'organ_failure', 'necrosis_extent'],
        'Recommendation': ['fluid_resuscitation', 'icu_admission', 'monitoring_plan']
    },
    quickActions: [
        'How do I assess pancreatitis severity?',
        'How much fluid should I give?',
        'When does he need antibiotics?',
        'Does he need surgery?'
    ],
    keyTeachingPoints: [
        'Severe AP: Organ failure persisting >48 hours (Revised Atlanta Classification)',
        'Aggressive early fluid resuscitation (goal-directed): 5-10 mL/kg/hr initially, then reassess',
        'NO prophylactic antibiotics for necrosis - only if infected necrosis suspected',
        'Nutritional support: Enteral feeding (even NG) superior to NPO or TPN',
        'Infected necrosis usually develops after day 7-10, suspect if fever/WBC rise after initial improvement'
    ],
    sbarTemplate: {
        situation: 'I have a 48-year-old man with severe acute pancreatitis who is developing shock. Lipase is 4,200, he\'s hypotensive and tachycardic, and CT shows pancreatic necrosis.',
        background: 'He\'s a heavy alcohol user presenting with 18 hours of epigastric pain. No prior episodes, no gallstones on imaging. His labs show hemoconcentration, AKI, and hypocalcemia.',
        assessment: 'This is severe AP by Revised Atlanta criteria - he has early organ failure with shock and AKI. APACHE II is 14. High mortality risk. The necrosis raises concern for potential infected necrosis down the line.',
        recommendation: 'He needs ICU admission for aggressive fluid resuscitation - I\'m starting at 200-250 mL/hr with reassessment. No antibiotics yet unless we see signs of infection. Plan for early enteral nutrition. Can you help with ICU bed and GI consult?'
    },
    defined_responses: {
        'severity assessment': 'Revised Atlanta Classification: Mild (no organ failure, no local complications), Moderate (transient organ failure <48h OR local complications), Severe (persistent organ failure >48h). Scoring: APACHE II ≥8, BISAP ≥3, Ranson ≥3 predict severe. His APACHE II of 14 and developing shock = severe.',
        'fluid resuscitation': 'Aggressive early fluids reduce mortality. Goal-directed therapy: start 5-10 mL/kg/hr (200-500 mL/hr) for first 12-24 hours, reassess frequently. Targets: HR <120, MAP >65, UOP >0.5 mL/kg/hr, normalizing BUN/Hct. LR may be preferred over NS. Avoid overhydration - can worsen outcomes.',
        'antibiotics': 'NO prophylactic antibiotics even with necrosis - doesn\'t prevent infection or improve outcomes. Only give antibiotics if infected necrosis is suspected (usually after day 7-10 with fever spike, rising WBC after initial improvement). May need FNA to confirm infection.',
        'surgery timing': 'Surgery/intervention for infected necrosis, not sterile necrosis. If intervention needed, delay until at least 4 weeks when necrosis is "walled off" (step-up approach preferred: drainage first, then minimally invasive necrosectomy, then open surgery). Emergency surgery only for compartment syndrome or perforation.',
        'nutrition': 'Enteral nutrition within 24-48 hours! Even with ileus, NG/NJ feeding is superior to TPN - maintains gut integrity, reduces infections. Start trophic feeds and advance as tolerated. No need to wait for pain resolution or lipase normalization.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Pancreatitis Module', link: '../mechanism/pancreatitis-module.html', reason: 'Understand pancreatic autodigestion' },
        { type: 'reasondx', title: 'Pancreatitis Adventure', link: '../ReasonDx/adventure-cases/pancreatitis-expanded.html', reason: 'Practice pancreatitis workup' },
        { type: 'reasondx', title: 'Acute Abdomen', link: '../ReasonDx/adventure-cases/acute-abdomen-expanded.html', reason: 'Broader abdominal emergency context' }
    ],
    evidenceBase: {
        guidelines: [
            "ACG Acute Pancreatitis Guidelines 2013",
            "AGA Guidelines on Management of Acute Pancreatitis 2018",
            "Revised Atlanta Classification 2012"
        ],
        keyEvidence: [
            "Goal-directed fluid therapy improves outcomes vs aggressive fixed-volume resuscitation",
            "PROPATRIA trial: Probiotics increased mortality - avoid",
            "Prophylactic antibiotics for necrosis showed no benefit in meta-analyses",
            "Step-up approach (drainage → minimally invasive → open) superior to direct open necrosectomy"
        ],
        openAccessLinks: [
            "https://journals.lww.com/ajg/fulltext/2013/09000/american_college_of_gastroenterology_guideline_.6.aspx"
        ]
    }
},

// ============================================================================
// CASE 4: ACUTE CHOLANGITIS
// ============================================================================

'acute-cholangitis': {
    id: 'acute-cholangitis',
    title: 'Acute Cholangitis - Charcot\'s Triad',
    category: 'GI',
    isParallel: false,
    parallelCase: 'cholecystitis-presentation',
    parallelDescription: 'Acute cholecystitis',
    patient: { 
        name: 'Martha Williams', 
        age: 68, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Fever, RUQ Pain, and Jaundice' 
    },
    description: 'A 68-year-old with known gallstones presents with 2 days of RUQ pain, fever to 39.5°C, and new jaundice. BP 88/54, HR 108, confused. T.bili 8.2, ALP 420, AST 380, WBC 18K. RUQ ultrasound shows dilated CBD to 12mm with shadowing stone. She has Reynold\'s pentad.',
    openingStatement: 'Mrs. Williams has acute cholangitis with sepsis - she has Reynold\'s pentad indicating severe disease. She needs urgent biliary decompression. How do you communicate this emergency to GI and surgery?',
    conceptDomains: {
        'Situation': ['sepsis_status', 'clinical_syndrome', 'obstruction_evidence'],
        'Background': ['gallstone_history', 'prior_ercp', 'comorbidities'],
        'Assessment': ['tokyo_grade', 'charcot_vs_reynolds', 'urgency_of_drainage'],
        'Recommendation': ['resuscitation', 'antibiotics', 'ercp_timing']
    },
    quickActions: [
        'What is Charcot\'s triad vs Reynold\'s pentad?',
        'What antibiotics should I start?',
        'How urgent is ERCP?',
        'What if ERCP fails?'
    ],
    keyTeachingPoints: [
        'Charcot\'s triad: Fever + RUQ pain + jaundice (50-70% of cholangitis)',
        'Reynold\'s pentad: Charcot\'s + hypotension + altered mental status (severe cholangitis)',
        'Tokyo Guidelines severity: Grade I (mild), II (moderate), III (severe/organ dysfunction)',
        'Grade III cholangitis: ERCP within 24 hours, ideally within 12 hours',
        'Antibiotics must cover gram-negatives and anaerobes: pip-tazo, or ceftriaxone + metronidazole'
    ],
    sbarTemplate: {
        situation: 'I have a 68-year-old woman with acute cholangitis and sepsis - she has Reynold\'s pentad with hypotension and confusion. She needs emergent biliary drainage.',
        background: 'She has known gallstones and presents with 2 days of RUQ pain, high fever, and jaundice. Ultrasound shows a dilated CBD with a stone. She\'s never had ERCP.',
        assessment: 'This is Tokyo Grade III cholangitis - she has sepsis with organ dysfunction. Reynold\'s pentad carries high mortality without urgent decompression. Source control is critical.',
        recommendation: 'I\'m starting pip-tazo and aggressive fluid resuscitation. She needs emergent ERCP - can GI do this within the next few hours? If ERCP isn\'t available or fails, we\'ll need IR for percutaneous drainage. Please help coordinate.'
    },
    defined_responses: {
        'charcot vs reynolds': 'Charcot\'s triad (1877): Fever + RUQ pain + jaundice. Present in 50-70% of cholangitis. Reynold\'s pentad adds hypotension + altered mental status - indicates severe septic cholangitis with ~50% mortality if untreated. Mrs. Williams has the full pentad.',
        'antibiotics': 'Cover gram-negatives (E. coli, Klebsiella) and anaerobes. Options: Pip-tazo 4.5g IV q6h, OR ceftriaxone 2g + metronidazole 500mg, OR carbapenem if severe/resistant risk. Add vancomycin if healthcare-associated or prior biliary instrumentation.',
        'ercp timing': 'Tokyo Guidelines: Grade I (mild) - elective ERCP within 24-72 hrs. Grade II (moderate) - ERCP within 24 hrs. Grade III (severe with organ dysfunction) - emergent ERCP within 12-24 hrs after stabilization. She\'s Grade III - needs emergent ERCP.',
        'ercp fails': 'If ERCP fails or isn\'t available: Percutaneous transhepatic biliary drainage (PTBD) by IR is the backup. In truly unstable patients, PTBD may be first-line as it\'s faster and can be done bedside. Surgical CBD exploration is last resort.',
        'difference from cholecystitis': 'Cholecystitis is gallbladder inflammation (usually cystic duct obstruction). Cholangitis is bile duct infection (usually CBD obstruction). Key differences: Cholangitis has more jaundice, higher bilirubin/ALP, dilated CBD on imaging. Both can coexist.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Cholecystitis Module', link: '../mechanism/cholecystitis-module.html', reason: 'Understand biliary pathophysiology' },
        { type: 'reasondx', title: 'Cholecystitis Adventure', link: '../ReasonDx/adventure-cases/cholecystitis-expanded.html', reason: 'Practice biliary disease workup' },
        { type: 'reasondx', title: 'Sepsis Module', link: '../mechanism/sepsis-shock-module.html', reason: 'Sepsis from biliary source' }
    ],
    evidenceBase: {
        guidelines: [
            "Tokyo Guidelines 2018 (TG18) for Acute Cholangitis",
            "ASGE Guidelines on Role of ERCP"
        ],
        keyEvidence: [
            "Urgent biliary drainage reduces mortality in severe cholangitis",
            "TG18 severity grading helps triage urgency of intervention",
            "ERCP is preferred over surgical exploration for CBD stones",
            "Percutaneous drainage is effective alternative when ERCP unavailable"
        ],
        openAccessLinks: [
            "https://www.jstage.jst.go.jp/article/jhbps/25/1/25_2018-01/_html"
        ]
    }
},

// ============================================================================
// CASE 5: VARICEAL HEMORRHAGE
// ============================================================================

'variceal-hemorrhage': {
    id: 'variceal-hemorrhage',
    title: 'Variceal Hemorrhage - Cirrhotic',
    category: 'GI/Hepatology',
    isParallel: false,
    parallelCase: 'ugib-hemodynamic',
    parallelDescription: 'Non-variceal UGIB',
    patient: { 
        name: 'Anthony DeLuca', 
        age: 58, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Massive Hematemesis' 
    },
    description: 'A 58-year-old with alcoholic cirrhosis (known varices, on nadolol) presents after vomiting "a liter of blood." BP 78/48, HR 128, pale, confused. Hgb 5.8, platelets 68K, INR 2.1. Ascites present, asterixis. Prior EGD 6 months ago showed grade 2 esophageal varices.',
    openingStatement: 'Mr. DeLuca has variceal hemorrhage with hemorrhagic shock - this is a cirrhotic emergency requiring specific management. Variceal bleeds have high mortality. How do you coordinate this resuscitation?',
    conceptDomains: {
        'Situation': ['shock_severity', 'cirrhosis_status', 'known_varices'],
        'Background': ['liver_disease_stage', 'prior_bleeds', 'prophylaxis_history'],
        'Assessment': ['mortality_risk', 'coagulopathy_management', 'specific_therapies'],
        'Recommendation': ['vasoactive_drugs', 'antibiotic_prophylaxis', 'endoscopy_timing']
    },
    quickActions: [
        'What\'s different about variceal bleeds?',
        'What vasoactive drug should I use?',
        'Do I correct his INR?',
        'When do I use a balloon tamponade?'
    ],
    keyTeachingPoints: [
        'Variceal bleed mortality: 15-20% at 6 weeks despite treatment',
        'Triple therapy: Vasoactive drug + antibiotics + EGD within 12 hours',
        'Octreotide or terlipressin reduces portal pressure and variceal blood flow',
        'Antibiotics (ceftriaxone) reduce infection and rebleeding - start immediately',
        'Restrictive transfusion (Hgb 7-8) UNLESS massive/unstable; avoid over-transfusion (increases portal pressure)'
    ],
    sbarTemplate: {
        situation: 'I have a 58-year-old cirrhotic with massive variceal hemorrhage - he\'s in hemorrhagic shock with hemoglobin 5.8 and ongoing hematemesis. Known esophageal varices.',
        background: 'He has alcoholic cirrhosis with known grade 2 varices, was on nadolol for prophylaxis. He\'s encephalopathic at baseline. Current INR is 2.1, platelets 68K.',
        assessment: 'This is high-mortality variceal bleeding. He needs urgent resuscitation with blood products, vasoactive medication to reduce portal pressure, antibiotics, and emergent endoscopy for banding.',
        recommendation: 'I\'m starting octreotide bolus and drip, ceftriaxone 1g IV, and transfusing PRBCs. Please arrange emergent GI consult for EGD within 12 hours. He needs ICU admission. If bleeding doesn\'t stop, we may need balloon tamponade or TIPS.'
    },
    defined_responses: {
        'variceal differences': 'Variceal bleeds are different: (1) Higher mortality (15-20%), (2) Need vasoactive drugs (octreotide/terlipressin), (3) Mandatory antibiotics - proven mortality benefit, (4) Band ligation is treatment of choice at EGD, (5) Consider TIPS for refractory bleeding, (6) Over-transfusion can increase portal pressure and worsen bleeding.',
        'vasoactive drug': 'Start octreotide: 50 mcg IV bolus, then 50 mcg/hr infusion. Continue for 3-5 days. Alternative is terlipressin (not available in US). These reduce portal pressure and splanchnic blood flow. Start BEFORE EGD - don\'t wait for confirmation.',
        'inr correction': 'Controversial. INR doesn\'t reliably reflect bleeding risk in cirrhotics (balanced coagulopathy). Generally: Don\'t give FFP just to correct INR unless actively bleeding AND INR very high (>3-4). Platelets if <50K with active bleeding. Over-transfusion raises portal pressure.',
        'balloon tamponade': 'Sengstaken-Blakemore or Minnesota tube is temporizing measure when endoscopy fails or isn\'t immediately available. Inflate gastric balloon first (250-300 mL), then esophageal if needed. Maximum 24 hours due to necrosis risk. Bridge to TIPS or re-EGD.',
        'tips': 'TIPS (transjugular intrahepatic portosystemic shunt) for: (1) Refractory bleeding despite EGD, (2) Early TIPS in high-risk patients (Child-Pugh C or B with active bleeding at EGD) - reduces mortality. Contraindications: severe encephalopathy, severe HF.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Liver Cirrhosis Module', link: '../mechanism/liver-cirrhosis-module.html', reason: 'Understand portal hypertension' },
        { type: 'reasondx', title: 'GI Bleed Adventure', link: '../ReasonDx/adventure-cases/gi-bleed-expanded.html', reason: 'Practice GI bleed management' },
        { type: 'reasondx', title: 'GI Bleed Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=gi-bleed-deep-dive', reason: 'Variceal vs non-variceal comparison' }
    ],
    evidenceBase: {
        guidelines: [
            "AASLD Practice Guidance on Varices and Variceal Hemorrhage 2022",
            "Baveno VII Consensus 2022"
        ],
        keyEvidence: [
            "Antibiotic prophylaxis reduces mortality - NNT of 4 (Bernard, Hepatology 1999)",
            "Early TIPS (within 72 hours) improves survival in high-risk variceal bleeding",
            "Restrictive transfusion (Hgb 7-8) improves outcomes in variceal bleeding",
            "Band ligation preferred over sclerotherapy for esophageal varices"
        ],
        openAccessLinks: [
            "https://aasldpubs.onlinelibrary.wiley.com/doi/10.1002/hep.32472"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_GI_CASES;
}

// Merge with existing COACHDX_CASES if available
if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_GI_CASES);
}
