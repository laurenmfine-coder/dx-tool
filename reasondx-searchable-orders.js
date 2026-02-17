/**
 * ReasonDx Searchable Orders - Comprehensive Lab and Imaging Database
 */
(function() {
    'use strict';
const LABS = {
        'cbc': { name: 'Complete Blood Count (CBC)', aliases: ['CBC', 'blood count', 'WBC', 'hemoglobin', 'hematocrit', 'platelets'], category: 'hematology' },
        'cbc-diff': { name: 'CBC with Differential', aliases: ['CBC diff', 'differential', 'neutrophils', 'lymphocytes', 'eosinophils'], category: 'hematology' },
        'bmp': { name: 'Basic Metabolic Panel (BMP)', aliases: ['BMP', 'chem 7', 'sodium', 'potassium', 'chloride', 'BUN', 'creatinine', 'glucose', 'electrolytes'], category: 'chemistry' },
        'cmp': { name: 'Comprehensive Metabolic Panel (CMP)', aliases: ['CMP', 'chem 14', 'liver function', 'albumin', 'AST', 'ALT', 'bilirubin'], category: 'chemistry' },
        'troponin': { name: 'Troponin I/T', aliases: ['troponin', 'trop', 'cardiac enzymes', 'MI', 'NSTEMI', 'STEMI', 'ACS'], category: 'cardiac' },
        'troponin-hs': { name: 'High-Sensitivity Troponin', aliases: ['hs-troponin', 'hsTnI', 'hsTnT'], category: 'cardiac' },
        'bnp': { name: 'BNP', aliases: ['BNP', 'heart failure', 'CHF', 'dyspnea'], category: 'cardiac' },
        'nt-probnp': { name: 'NT-proBNP', aliases: ['NT-proBNP', 'proBNP'], category: 'cardiac' },
        'ck': { name: 'Creatine Kinase (CK)', aliases: ['CK', 'CPK', 'rhabdomyolysis', 'muscle enzymes'], category: 'cardiac' },
        'ck-mb': { name: 'CK-MB', aliases: ['CK-MB', 'cardiac CK'], category: 'cardiac' },
        'pt-inr': { name: 'PT/INR', aliases: ['PT', 'INR', 'prothrombin time', 'coumadin', 'warfarin'], category: 'coagulation' },
        'ptt': { name: 'PTT', aliases: ['PTT', 'aPTT', 'heparin'], category: 'coagulation' },
        'd-dimer': { name: 'D-Dimer', aliases: ['D-dimer', 'DVT', 'PE', 'pulmonary embolism', 'clot'], category: 'coagulation' },
        'fibrinogen': { name: 'Fibrinogen', aliases: ['fibrinogen', 'DIC'], category: 'coagulation' },
        'lfts': { name: 'Liver Function Tests', aliases: ['LFTs', 'liver panel', 'AST', 'ALT', 'alk phos', 'bilirubin', 'GGT'], category: 'hepatic' },
        'ast': { name: 'AST', aliases: ['AST', 'SGOT', 'liver enzymes'], category: 'hepatic' },
        'alt': { name: 'ALT', aliases: ['ALT', 'SGPT', 'liver enzymes'], category: 'hepatic' },
        'alk-phos': { name: 'Alkaline Phosphatase', aliases: ['alk phos', 'ALP'], category: 'hepatic' },
        'ggt': { name: 'GGT', aliases: ['GGT', 'gamma GT', 'alcohol'], category: 'hepatic' },
        'bilirubin': { name: 'Bilirubin (Total/Direct)', aliases: ['bilirubin', 'bili', 'jaundice'], category: 'hepatic' },
        'albumin': { name: 'Albumin', aliases: ['albumin', 'protein'], category: 'hepatic' },
        'ammonia': { name: 'Ammonia', aliases: ['ammonia', 'NH3', 'hepatic encephalopathy'], category: 'hepatic' },
        'hepatitis-panel': { name: 'Hepatitis Panel', aliases: ['hepatitis', 'hep A', 'hep B', 'hep C', 'HBsAg', 'anti-HCV'], category: 'hepatic' },
        'bun': { name: 'BUN', aliases: ['BUN', 'urea', 'kidney'], category: 'renal' },
        'creatinine': { name: 'Creatinine', aliases: ['creatinine', 'Cr', 'kidney', 'GFR'], category: 'renal' },
        'gfr': { name: 'eGFR', aliases: ['GFR', 'glomerular filtration rate'], category: 'renal' },
        'ua': { name: 'Urinalysis', aliases: ['UA', 'urinalysis', 'urine', 'dipstick', 'UTI'], category: 'urine' },
        'ua-micro': { name: 'Urinalysis with Microscopy', aliases: ['UA micro', 'urine microscopy', 'casts'], category: 'urine' },
        'urine-culture': { name: 'Urine Culture', aliases: ['urine culture', 'UCx', 'UTI'], category: 'urine' },
        'urine-drug-screen': { name: 'Urine Drug Screen', aliases: ['UDS', 'drug screen', 'tox screen'], category: 'urine' },
        'urine-osmolality': { name: 'Urine Osmolality', aliases: ['urine osm'], category: 'urine' },
        'urine-sodium': { name: 'Urine Sodium', aliases: ['urine Na', 'FENa'], category: 'urine' },
        'abg': { name: 'Arterial Blood Gas (ABG)', aliases: ['ABG', 'blood gas', 'pH', 'pCO2', 'pO2', 'acidosis', 'alkalosis'], category: 'respiratory' },
        'vbg': { name: 'Venous Blood Gas', aliases: ['VBG', 'venous gas'], category: 'respiratory' },
        'lactate': { name: 'Lactate', aliases: ['lactate', 'lactic acid', 'sepsis', 'shock'], category: 'metabolic' },
        'carboxyhemoglobin': { name: 'Carboxyhemoglobin', aliases: ['COHb', 'carbon monoxide', 'CO poisoning'], category: 'respiratory' },
        'methemoglobin': { name: 'Methemoglobin', aliases: ['MetHb'], category: 'respiratory' },
        'tsh': { name: 'TSH', aliases: ['TSH', 'thyroid', 'hypothyroid', 'hyperthyroid'], category: 'endocrine' },
        'free-t4': { name: 'Free T4', aliases: ['free T4', 'FT4', 'thyroxine'], category: 'endocrine' },
        'free-t3': { name: 'Free T3', aliases: ['free T3', 'FT3'], category: 'endocrine' },
        'thyroid-antibodies': { name: 'Thyroid Antibodies', aliases: ['TPO antibodies', 'Hashimoto', 'Graves'], category: 'endocrine' },
        'cortisol': { name: 'Cortisol', aliases: ['cortisol', 'adrenal', 'Addison', 'Cushing'], category: 'endocrine' },
        'acth': { name: 'ACTH', aliases: ['ACTH', 'adrenocorticotropic'], category: 'endocrine' },
        'cosyntropin': { name: 'Cosyntropin Stimulation Test', aliases: ['cosyntropin', 'ACTH stim', 'adrenal insufficiency'], category: 'endocrine' },
        'aldosterone': { name: 'Aldosterone', aliases: ['aldosterone', 'hyperaldosteronism'], category: 'endocrine' },
        'renin': { name: 'Plasma Renin Activity', aliases: ['renin', 'PRA'], category: 'endocrine' },
        'glucose': { name: 'Glucose', aliases: ['glucose', 'blood sugar', 'hypoglycemia', 'hyperglycemia'], category: 'endocrine' },
        'hba1c': { name: 'Hemoglobin A1c', aliases: ['HbA1c', 'A1c', 'diabetes'], category: 'endocrine' },
        'c-peptide': { name: 'C-Peptide', aliases: ['C-peptide', 'insulin secretion'], category: 'endocrine' },
        'insulin': { name: 'Insulin Level', aliases: ['insulin', 'insulinoma'], category: 'endocrine' },
        'lipid-panel': { name: 'Lipid Panel', aliases: ['lipid panel', 'cholesterol', 'LDL', 'HDL', 'triglycerides'], category: 'metabolic' },
        'crp': { name: 'C-Reactive Protein', aliases: ['CRP', 'inflammation'], category: 'inflammatory' },
        'esr': { name: 'ESR', aliases: ['ESR', 'sed rate', 'inflammation'], category: 'inflammatory' },
        'procalcitonin': { name: 'Procalcitonin', aliases: ['procalcitonin', 'PCT', 'bacterial infection', 'sepsis'], category: 'inflammatory' },
        'ferritin': { name: 'Ferritin', aliases: ['ferritin', 'iron stores'], category: 'inflammatory' },
        'iron-studies': { name: 'Iron Studies', aliases: ['iron panel', 'iron', 'TIBC', 'transferrin', 'anemia'], category: 'hematology' },
        'magnesium': { name: 'Magnesium', aliases: ['Mg', 'magnesium'], category: 'chemistry' },
        'phosphorus': { name: 'Phosphorus', aliases: ['phos', 'phosphate'], category: 'chemistry' },
        'calcium': { name: 'Calcium', aliases: ['calcium', 'Ca', 'hypercalcemia', 'hypocalcemia'], category: 'chemistry' },
        'ionized-calcium': { name: 'Ionized Calcium', aliases: ['iCa', 'ionized calcium'], category: 'chemistry' },
        'serum-osmolality': { name: 'Serum Osmolality', aliases: ['serum osm', 'osmolality', 'SIADH'], category: 'chemistry' },
        'lipase': { name: 'Lipase', aliases: ['lipase', 'pancreatitis'], category: 'gi' },
        'amylase': { name: 'Amylase', aliases: ['amylase', 'pancreatitis'], category: 'gi' },
        'blood-culture': { name: 'Blood Cultures', aliases: ['blood culture', 'BCx', 'bacteremia', 'sepsis'], category: 'microbiology' },
        'sputum-culture': { name: 'Sputum Culture', aliases: ['sputum culture', 'pneumonia'], category: 'microbiology' },
        'wound-culture': { name: 'Wound Culture', aliases: ['wound culture', 'cellulitis', 'abscess'], category: 'microbiology' },
        'csf-culture': { name: 'CSF Culture', aliases: ['CSF culture', 'meningitis'], category: 'microbiology' },
        'stool-culture': { name: 'Stool Culture', aliases: ['stool culture', 'diarrhea'], category: 'microbiology' },
        'throat-culture': { name: 'Throat Culture', aliases: ['throat culture', 'strep', 'pharyngitis'], category: 'microbiology' },
        'rapid-strep': { name: 'Rapid Strep Test', aliases: ['rapid strep', 'strep A'], category: 'microbiology' },
        'flu-test': { name: 'Influenza Test', aliases: ['flu test', 'influenza', 'flu PCR'], category: 'microbiology' },
        'covid-test': { name: 'COVID-19 Test', aliases: ['COVID test', 'SARS-CoV-2', 'coronavirus'], category: 'microbiology' },
        'respiratory-panel': { name: 'Respiratory Viral Panel', aliases: ['respiratory panel', 'RVP', 'RSV'], category: 'microbiology' },
        'gi-panel': { name: 'GI Pathogen Panel', aliases: ['GI panel', 'stool PCR', 'diarrhea panel'], category: 'microbiology' },
        'c-diff': { name: 'C. difficile Test', aliases: ['C diff', 'CDI'], category: 'microbiology' },
        'malaria-smear': { name: 'Malaria Smear', aliases: ['malaria', 'thick smear', 'plasmodium'], category: 'microbiology' },
        'mono-test': { name: 'Monospot', aliases: ['monospot', 'mono', 'EBV'], category: 'microbiology' },
        'hiv-test': { name: 'HIV Test', aliases: ['HIV', 'HIV test', 'AIDS'], category: 'microbiology' },
        'rpr': { name: 'RPR/VDRL', aliases: ['RPR', 'VDRL', 'syphilis'], category: 'microbiology' },
        'lyme': { name: 'Lyme Disease Test', aliases: ['Lyme', 'Borrelia', 'tick bite'], category: 'microbiology' },
        'tb-test': { name: 'TB Test', aliases: ['TB test', 'Quantiferon', 'IGRA', 'PPD', 'tuberculosis'], category: 'microbiology' },
        'legionella-urine': { name: 'Legionella Urinary Antigen', aliases: ['Legionella', 'Legionnaires'], category: 'microbiology' },
        'strep-pneumo-urine': { name: 'Strep pneumoniae Urinary Antigen', aliases: ['pneumococcal antigen'], category: 'microbiology' },
        'fungal-markers': { name: 'Fungal Markers', aliases: ['beta-glucan', 'galactomannan', 'aspergillus'], category: 'microbiology' },
        'histoplasma': { name: 'Histoplasma Antigen', aliases: ['histoplasma', 'histo'], category: 'microbiology' },
        'blastomyces': { name: 'Blastomyces Antigen', aliases: ['blastomycosis', 'blasto'], category: 'microbiology' },
        'cocci': { name: 'Coccidioides Serology', aliases: ['cocci', 'Valley fever'], category: 'microbiology' },
        'crypto': { name: 'Cryptococcal Antigen', aliases: ['crypto', 'cryptococcus', 'CrAg'], category: 'microbiology' },
        'csf-analysis': { name: 'CSF Analysis', aliases: ['CSF', 'spinal fluid', 'LP', 'meningitis'], category: 'csf' },
        'csf-gram-stain': { name: 'CSF Gram Stain', aliases: ['CSF gram stain'], category: 'csf' },
        'csf-hsv-pcr': { name: 'CSF HSV PCR', aliases: ['HSV PCR', 'herpes encephalitis'], category: 'csf' },
        'csf-meningitis-panel': { name: 'CSF Meningitis Panel', aliases: ['meningitis panel', 'encephalitis panel'], category: 'csf' },
        'ana': { name: 'ANA', aliases: ['ANA', 'antinuclear antibody', 'lupus', 'autoimmune'], category: 'autoimmune' },
        'rheumatoid-factor': { name: 'Rheumatoid Factor', aliases: ['RF', 'RA'], category: 'autoimmune' },
        'anti-ccp': { name: 'Anti-CCP', aliases: ['anti-CCP', 'rheumatoid arthritis'], category: 'autoimmune' },
        'complement': { name: 'Complement (C3, C4)', aliases: ['C3', 'C4', 'complement', 'lupus'], category: 'autoimmune' },
        'anti-dsdna': { name: 'Anti-dsDNA', aliases: ['anti-dsDNA', 'lupus'], category: 'autoimmune' },
        'anca': { name: 'ANCA', aliases: ['ANCA', 'c-ANCA', 'p-ANCA', 'vasculitis', 'GPA'], category: 'autoimmune' },
        'ige-total': { name: 'Total IgE', aliases: ['IgE', 'allergy', 'atopy'], category: 'immunology' },
        'specific-ige': { name: 'Specific IgE Panel', aliases: ['specific IgE', 'RAST', 'allergen testing', 'food allergy'], category: 'immunology' },
        'tryptase': { name: 'Tryptase', aliases: ['tryptase', 'mast cell', 'anaphylaxis', 'mastocytosis'], category: 'immunology' },
        'immunoglobulins': { name: 'Quantitative Immunoglobulins', aliases: ['IgG', 'IgA', 'IgM', 'immunodeficiency', 'CVID'], category: 'immunology' },
        'igg-subclasses': { name: 'IgG Subclasses', aliases: ['IgG1', 'IgG2', 'IgG3', 'IgG4'], category: 'immunology' },
        'c1-esterase': { name: 'C1 Esterase Inhibitor', aliases: ['C1 inhibitor', 'C1-INH', 'hereditary angioedema', 'HAE'], category: 'immunology' },
        'c4-level': { name: 'C4 Level', aliases: ['C4', 'angioedema workup'], category: 'immunology' },
        'eosinophil-count': { name: 'Absolute Eosinophil Count', aliases: ['eosinophils', 'AEC', 'eosinophilia'], category: 'immunology' },
        'lymphocyte-subsets': { name: 'Lymphocyte Subsets', aliases: ['T cells', 'B cells', 'CD4', 'CD8', 'flow cytometry'], category: 'immunology' },
        'psa': { name: 'PSA', aliases: ['PSA', 'prostate'], category: 'oncology' },
        'cea': { name: 'CEA', aliases: ['CEA', 'colon cancer'], category: 'oncology' },
        'ca-125': { name: 'CA-125', aliases: ['CA-125', 'ovarian cancer'], category: 'oncology' },
        'afp': { name: 'AFP', aliases: ['AFP', 'liver cancer', 'HCC'], category: 'oncology' },
        'ldh': { name: 'LDH', aliases: ['LDH', 'hemolysis', 'tumor marker'], category: 'oncology' },
        'uric-acid': { name: 'Uric Acid', aliases: ['uric acid', 'gout', 'tumor lysis', 'TLS'], category: 'oncology' },
        'reticulocyte': { name: 'Reticulocyte Count', aliases: ['retic count', 'anemia workup'], category: 'hematology' },
        'peripheral-smear': { name: 'Peripheral Blood Smear', aliases: ['blood smear', 'PBS', 'morphology'], category: 'hematology' },
        'haptoglobin': { name: 'Haptoglobin', aliases: ['haptoglobin', 'hemolysis'], category: 'hematology' },
        'direct-coombs': { name: 'Direct Coombs Test', aliases: ['direct Coombs', 'DAT', 'autoimmune hemolytic anemia'], category: 'hematology' },
        'hemoglobin-electrophoresis': { name: 'Hemoglobin Electrophoresis', aliases: ['Hb electrophoresis', 'sickle cell', 'thalassemia'], category: 'hematology' },
        'g6pd': { name: 'G6PD Level', aliases: ['G6PD', 'hemolysis'], category: 'hematology' },
        'vitamin-b12': { name: 'Vitamin B12', aliases: ['B12', 'cobalamin', 'macrocytic anemia'], category: 'hematology' },
        'folate': { name: 'Folate', aliases: ['folate', 'folic acid', 'macrocytic anemia'], category: 'hematology' },
        'ethanol': { name: 'Ethanol Level', aliases: ['alcohol level', 'ethanol', 'EtOH'], category: 'toxicology' },
        'acetaminophen': { name: 'Acetaminophen Level', aliases: ['tylenol level', 'APAP'], category: 'toxicology' },
        'salicylate': { name: 'Salicylate Level', aliases: ['aspirin level', 'ASA'], category: 'toxicology' },
        'digoxin': { name: 'Digoxin Level', aliases: ['digoxin'], category: 'toxicology' },
        'lithium': { name: 'Lithium Level', aliases: ['lithium'], category: 'toxicology' },
        'valproic-acid': { name: 'Valproic Acid Level', aliases: ['valproate', 'depakote'], category: 'toxicology' },
        'phenytoin': { name: 'Phenytoin Level', aliases: ['dilantin', 'phenytoin'], category: 'toxicology' },
        'heavy-metals': { name: 'Heavy Metal Panel', aliases: ['lead', 'mercury', 'arsenic'], category: 'toxicology' },
        'lead-level': { name: 'Lead Level', aliases: ['lead', 'lead poisoning'], category: 'toxicology' },
        'cholinesterase': { name: 'Cholinesterase Level', aliases: ['cholinesterase', 'organophosphate', 'pesticide'], category: 'toxicology' },
        'hcg': { name: 'Beta-hCG', aliases: ['pregnancy test', 'hCG', 'ectopic'], category: 'obgyn' },
        'urine-pregnancy': { name: 'Urine Pregnancy Test', aliases: ['urine hCG', 'UPT'], category: 'obgyn' },
        'type-screen': { name: 'Type and Screen', aliases: ['blood type', 'crossmatch'], category: 'transfusion' },
        'fecal-occult': { name: 'Fecal Occult Blood Test', aliases: ['FOBT', 'FIT', 'guaiac'], category: 'gi' },
        'stool-ova-parasites': { name: 'Stool Ova and Parasites', aliases: ['O&P', 'stool parasites', 'giardia'], category: 'gi' },
        'fecal-calprotectin': { name: 'Fecal Calprotectin', aliases: ['calprotectin', 'IBD marker'], category: 'gi' }
    };

    const IMAGING = {
        'cxr': { name: 'Chest X-ray (CXR)', aliases: ['CXR', 'chest x-ray', 'PA lateral', 'portable chest'], category: 'xray' },
        'ct-chest': { name: 'CT Chest', aliases: ['CT chest', 'chest CT', 'thoracic CT'], category: 'ct' },
        'ct-chest-contrast': { name: 'CT Chest with Contrast', aliases: ['CT chest contrast'], category: 'ct' },
        'cta-chest': { name: 'CTA Chest (PE Protocol)', aliases: ['CTA chest', 'PE protocol', 'CT PE', 'pulmonary embolism CT'], category: 'ct' },
        'hrct-chest': { name: 'High-Resolution CT Chest', aliases: ['HRCT', 'ILD protocol'], category: 'ct' },
        'abd-xray': { name: 'Abdominal X-ray (KUB)', aliases: ['KUB', 'abdominal x-ray', 'flat plate'], category: 'xray' },
        'ct-abdomen-pelvis': { name: 'CT Abdomen/Pelvis', aliases: ['CT abd/pelvis', 'CT AP', 'abdominal CT'], category: 'ct' },
        'ct-abdomen-pelvis-contrast': { name: 'CT Abdomen/Pelvis with Contrast', aliases: ['CT AP contrast'], category: 'ct' },
        'cta-abdomen': { name: 'CTA Abdomen', aliases: ['CTA abdomen', 'mesenteric CTA'], category: 'ct' },
        'ct-enterography': { name: 'CT Enterography', aliases: ['CT enterography', 'small bowel CT', 'Crohn'], category: 'ct' },
        'ct-head': { name: 'CT Head without Contrast', aliases: ['CT head', 'head CT', 'brain CT', 'non-contrast head CT'], category: 'ct' },
        'ct-head-contrast': { name: 'CT Head with Contrast', aliases: ['CT head contrast'], category: 'ct' },
        'cta-head-neck': { name: 'CTA Head and Neck', aliases: ['CTA head neck', 'CT angio stroke', 'CTA brain'], category: 'ct' },
        'ct-perfusion': { name: 'CT Perfusion (Stroke Protocol)', aliases: ['CT perfusion', 'CTP', 'stroke protocol'], category: 'ct' },
        'mri-brain': { name: 'MRI Brain', aliases: ['MRI brain', 'brain MRI', 'head MRI'], category: 'mri' },
        'mri-brain-contrast': { name: 'MRI Brain with Contrast', aliases: ['MRI brain contrast', 'gadolinium'], category: 'mri' },
        'mra-brain': { name: 'MRA Brain', aliases: ['MRA brain', 'intracranial MRA'], category: 'mri' },
        'mra-neck': { name: 'MRA Neck', aliases: ['MRA neck', 'carotid MRA'], category: 'mri' },
        'xray-cspine': { name: 'X-ray Cervical Spine', aliases: ['c-spine x-ray', 'cervical spine x-ray', 'neck x-ray'], category: 'xray' },
        'xray-tspine': { name: 'X-ray Thoracic Spine', aliases: ['t-spine x-ray'], category: 'xray' },
        'xray-lspine': { name: 'X-ray Lumbar Spine', aliases: ['l-spine x-ray', 'lower back x-ray'], category: 'xray' },
        'ct-cspine': { name: 'CT Cervical Spine', aliases: ['CT c-spine', 'cervical CT'], category: 'ct' },
        'ct-lspine': { name: 'CT Lumbar Spine', aliases: ['CT l-spine', 'lumbar CT'], category: 'ct' },
        'mri-cspine': { name: 'MRI Cervical Spine', aliases: ['MRI c-spine', 'cervical MRI', 'neck MRI'], category: 'mri' },
        'mri-tspine': { name: 'MRI Thoracic Spine', aliases: ['MRI t-spine', 'thoracic MRI'], category: 'mri' },
        'mri-lspine': { name: 'MRI Lumbar Spine', aliases: ['MRI l-spine', 'lumbar MRI', 'lower back MRI'], category: 'mri' },
        'mri-total-spine': { name: 'MRI Total Spine', aliases: ['whole spine MRI'], category: 'mri' },
        'ekg': { name: 'EKG/ECG', aliases: ['EKG', 'ECG', 'electrocardiogram', '12-lead'], category: 'cardiac' },
        'echocardiogram': { name: 'Echocardiogram (TTE)', aliases: ['echo', 'TTE', 'transthoracic echo', 'heart ultrasound'], category: 'cardiac' },
        'echo-bubble': { name: 'Echo with Bubble Study', aliases: ['bubble study', 'PFO study', 'shunt study'], category: 'cardiac' },
        'tee': { name: 'TEE', aliases: ['TEE', 'transesophageal echo', 'endocarditis workup'], category: 'cardiac' },
        'stress-echo': { name: 'Stress Echocardiogram', aliases: ['stress echo', 'dobutamine echo'], category: 'cardiac' },
        'stress-test': { name: 'Exercise Stress Test', aliases: ['stress test', 'treadmill test', 'ETT'], category: 'cardiac' },
        'nuclear-stress': { name: 'Nuclear Stress Test', aliases: ['nuclear stress', 'myocardial perfusion', 'SPECT', 'sestamibi'], category: 'cardiac' },
        'cardiac-cta': { name: 'Cardiac CTA', aliases: ['cardiac CTA', 'coronary CTA', 'CCTA'], category: 'cardiac' },
        'cardiac-mri': { name: 'Cardiac MRI', aliases: ['cardiac MRI', 'CMR'], category: 'cardiac' },
        'cardiac-cath': { name: 'Cardiac Catheterization', aliases: ['cardiac cath', 'heart cath', 'coronary angiogram'], category: 'cardiac' },
        'lower-extremity-doppler': { name: 'Lower Extremity Venous Duplex', aliases: ['leg doppler', 'DVT ultrasound', 'venous duplex'], category: 'ultrasound' },
        'upper-extremity-doppler': { name: 'Upper Extremity Venous Duplex', aliases: ['arm doppler', 'arm DVT'], category: 'ultrasound' },
        'carotid-doppler': { name: 'Carotid Duplex', aliases: ['carotid doppler', 'carotid ultrasound'], category: 'ultrasound' },
        'arterial-doppler': { name: 'Arterial Duplex Lower Extremity', aliases: ['ABI', 'arterial doppler', 'PAD'], category: 'ultrasound' },
        'renal-doppler': { name: 'Renal Artery Duplex', aliases: ['renal doppler'], category: 'ultrasound' },
        'aorta-us': { name: 'Abdominal Aorta Ultrasound', aliases: ['AAA screening', 'aorta ultrasound'], category: 'ultrasound' },
        'cta-aorta': { name: 'CTA Aorta', aliases: ['CTA aorta', 'aortic dissection CT'], category: 'ct' },
        'us-ruq': { name: 'RUQ Ultrasound', aliases: ['RUQ ultrasound', 'gallbladder ultrasound', 'liver ultrasound'], category: 'ultrasound' },
        'us-abdomen': { name: 'Complete Abdominal Ultrasound', aliases: ['abdominal ultrasound', 'abd US'], category: 'ultrasound' },
        'us-renal': { name: 'Renal Ultrasound', aliases: ['kidney ultrasound', 'hydronephrosis'], category: 'ultrasound' },
        'us-bladder': { name: 'Bladder Ultrasound', aliases: ['bladder scan', 'post-void residual', 'PVR'], category: 'ultrasound' },
        'us-appendix': { name: 'Appendix Ultrasound', aliases: ['appendix US', 'RLQ ultrasound'], category: 'ultrasound' },
        'us-pelvic': { name: 'Pelvic Ultrasound', aliases: ['pelvic ultrasound', 'uterus ultrasound'], category: 'ultrasound' },
        'us-transvaginal': { name: 'Transvaginal Ultrasound', aliases: ['TVUS', 'transvaginal US', 'ectopic pregnancy'], category: 'ultrasound' },
        'us-testicular': { name: 'Testicular Ultrasound', aliases: ['scrotal ultrasound', 'testicular torsion'], category: 'ultrasound' },
        'ob-ultrasound': { name: 'Obstetric Ultrasound', aliases: ['OB US', 'pregnancy ultrasound', 'fetal ultrasound'], category: 'ultrasound' },
        'biophysical-profile': { name: 'Biophysical Profile', aliases: ['BPP', 'fetal wellbeing'], category: 'ultrasound' },
        'xray-shoulder': { name: 'X-ray Shoulder', aliases: ['shoulder x-ray'], category: 'xray' },
        'xray-elbow': { name: 'X-ray Elbow', aliases: ['elbow x-ray'], category: 'xray' },
        'xray-wrist': { name: 'X-ray Wrist', aliases: ['wrist x-ray'], category: 'xray' },
        'xray-hand': { name: 'X-ray Hand', aliases: ['hand x-ray'], category: 'xray' },
        'xray-hip': { name: 'X-ray Hip', aliases: ['hip x-ray', 'pelvis x-ray'], category: 'xray' },
        'xray-knee': { name: 'X-ray Knee', aliases: ['knee x-ray'], category: 'xray' },
        'xray-ankle': { name: 'X-ray Ankle', aliases: ['ankle x-ray'], category: 'xray' },
        'xray-foot': { name: 'X-ray Foot', aliases: ['foot x-ray'], category: 'xray' },
        'mri-shoulder': { name: 'MRI Shoulder', aliases: ['shoulder MRI', 'rotator cuff MRI'], category: 'mri' },
        'mri-knee': { name: 'MRI Knee', aliases: ['knee MRI', 'meniscus MRI', 'ACL MRI'], category: 'mri' },
        'mri-hip': { name: 'MRI Hip', aliases: ['hip MRI', 'labral tear MRI'], category: 'mri' },
        'mri-ankle': { name: 'MRI Ankle', aliases: ['ankle MRI', 'foot MRI'], category: 'mri' },
        'bone-scan': { name: 'Bone Scan', aliases: ['bone scan', 'skeletal scintigraphy'], category: 'nuclear' },
        'dexa': { name: 'DEXA Scan', aliases: ['DEXA', 'DXA', 'bone density', 'osteoporosis'], category: 'nuclear' },
        'us-soft-tissue': { name: 'Soft Tissue Ultrasound', aliases: ['soft tissue US', 'abscess ultrasound', 'cellulitis US'], category: 'ultrasound' },
        'us-thyroid': { name: 'Thyroid Ultrasound', aliases: ['thyroid US', 'thyroid nodule'], category: 'ultrasound' },
        'us-breast': { name: 'Breast Ultrasound', aliases: ['breast US'], category: 'ultrasound' },
        'mammogram': { name: 'Mammogram', aliases: ['mammography', 'breast cancer screening'], category: 'xray' },
        'vq-scan': { name: 'V/Q Scan', aliases: ['VQ scan', 'lung scan', 'PE nuclear'], category: 'nuclear' },
        'pet-ct': { name: 'PET-CT Scan', aliases: ['PET scan', 'PET-CT', 'FDG-PET'], category: 'nuclear' },
        'mrcp': { name: 'MRCP', aliases: ['MRCP', 'biliary MRI', 'pancreatic duct MRI'], category: 'mri' },
        'mre': { name: 'MR Enterography', aliases: ['MRE', 'small bowel MRI', 'Crohn MRI'], category: 'mri' },
        'hida': { name: 'HIDA Scan', aliases: ['HIDA', 'hepatobiliary scan', 'gallbladder scan', 'cholecystitis scan'], category: 'nuclear' },
        'gi-bleeding-scan': { name: 'GI Bleeding Scan', aliases: ['tagged RBC scan'], category: 'nuclear' },
        'gastric-emptying': { name: 'Gastric Emptying Study', aliases: ['gastric emptying', 'gastroparesis study'], category: 'nuclear' },
        'renal-scan': { name: 'Renal Scan', aliases: ['renal scan', 'MAG3', 'DTPA scan'], category: 'nuclear' },
        'upper-gi': { name: 'Upper GI Series', aliases: ['UGI', 'barium swallow', 'esophagram'], category: 'fluoroscopy' },
        'small-bowel-follow': { name: 'Small Bowel Follow Through', aliases: ['SBFT'], category: 'fluoroscopy' },
        'barium-enema': { name: 'Barium Enema', aliases: ['BE', 'lower GI series'], category: 'fluoroscopy' },
        'vcug': { name: 'VCUG', aliases: ['VCUG', 'voiding cystourethrogram', 'vesicoureteral reflux'], category: 'fluoroscopy' },
        'paracentesis': { name: 'Paracentesis', aliases: ['paracentesis', 'ascites tap'], category: 'procedure' },
        'thoracentesis': { name: 'Thoracentesis', aliases: ['thoracentesis', 'pleural tap'], category: 'procedure' },
        'lumbar-puncture': { name: 'Lumbar Puncture', aliases: ['LP', 'spinal tap', 'CSF'], category: 'procedure' },
        'arthrocentesis': { name: 'Arthrocentesis', aliases: ['joint aspiration', 'joint tap', 'synovial fluid'], category: 'procedure' },
        'spirometry': { name: 'Spirometry', aliases: ['PFT', 'pulmonary function test', 'FEV1', 'FVC'], category: 'pulmonary' },
        'full-pfts': { name: 'Full Pulmonary Function Tests', aliases: ['complete PFTs', 'lung volumes', 'DLCO'], category: 'pulmonary' },
        'bronchoscopy': { name: 'Bronchoscopy', aliases: ['bronch', 'BAL'], category: 'procedure' },
        'egd': { name: 'EGD', aliases: ['EGD', 'upper endoscopy', 'gastroscopy'], category: 'procedure' },
        'colonoscopy': { name: 'Colonoscopy', aliases: ['colonoscopy', 'colon scope'], category: 'procedure' },
        'ercp': { name: 'ERCP', aliases: ['ERCP', 'bile duct scope'], category: 'procedure' },
        'eus': { name: 'Endoscopic Ultrasound', aliases: ['EUS'], category: 'procedure' }
    };

    function searchLabs(query) {
        if (!query || !query.trim()) return Object.entries(LABS).map(function(e) { return Object.assign({id: e[0]}, e[1]); });
        var terms = query.toLowerCase().trim().split(/\s+/);
        var results = [];
        for (var id in LABS) {
            var data = LABS[id];
            var text = [data.name].concat(data.aliases, data.category).join(' ').toLowerCase();
            if (terms.every(function(t) { return text.indexOf(t) >= 0; })) {
                var score = data.name.toLowerCase().indexOf(query.toLowerCase()) >= 0 ? 10 : 0;
                if (data.aliases.some(function(a) { return a.toLowerCase() === query.toLowerCase(); })) score += 15;
                results.push(Object.assign({id: id, score: score}, data));
            }
        }
        return results.sort(function(a, b) { return b.score - a.score; });
    }

    function searchImaging(query) {
        if (!query || !query.trim()) return Object.entries(IMAGING).map(function(e) { return Object.assign({id: e[0]}, e[1]); });
        var terms = query.toLowerCase().trim().split(/\s+/);
        var results = [];
        for (var id in IMAGING) {
            var data = IMAGING[id];
            var text = [data.name].concat(data.aliases, data.category).join(' ').toLowerCase();
            if (terms.every(function(t) { return text.indexOf(t) >= 0; })) {
                var score = data.name.toLowerCase().indexOf(query.toLowerCase()) >= 0 ? 10 : 0;
                if (data.aliases.some(function(a) { return a.toLowerCase() === query.toLowerCase(); })) score += 15;
                results.push(Object.assign({id: id, score: score}, data));
            }
        }
        return results.sort(function(a, b) { return b.score - a.score; });
    }

    function searchAll(query) {
        var labs = searchLabs(query).map(function(l) { return Object.assign({type: 'lab'}, l); });
        var imaging = searchImaging(query).map(function(i) { return Object.assign({type: 'imaging'}, i); });
        return labs.concat(imaging).sort(function(a, b) { return (b.score || 0) - (a.score || 0); });
    }

    function addSearchToPanel(panel, type) {
        if (panel.querySelector('.orders-search-wrapper')) return;
        var placeholder = type === 'labs' ? 'Search labs...' : 'Search imaging...';
        var wrapper = document.createElement('div');
        wrapper.className = 'orders-search-wrapper mb-3';
        wrapper.innerHTML = '<div class="relative"><span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span><input type="text" class="orders-search-input w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="' + placeholder + '" autocomplete="off"></div>';
        var input = wrapper.querySelector('input');
        var container = panel.querySelector('.space-y-2, .grid, .order-items');
        if (!container) return;
        var items = Array.from(container.children);
        var timer;
        input.addEventListener('input', function(e) {
            clearTimeout(timer);
            timer = setTimeout(function() {
                var q = e.target.value.toLowerCase().trim();
                items.forEach(function(item) {
                    var text = item.textContent.toLowerCase();
                    item.style.display = (!q || text.indexOf(q) >= 0) ? '' : 'none';
                });
            }, 150);
        });
        panel.insertBefore(wrapper, panel.firstChild);
    }

    function init() {
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(m) {
                m.addedNodes.forEach(function(node) {
                    if (node.nodeType !== Node.ELEMENT_NODE) return;
                    var lab = node.querySelector && node.querySelector('[data-panel="labs"], .labs-panel');
                    var img = node.querySelector && node.querySelector('[data-panel="imaging"], .imaging-panel');
                    if (lab) addSearchToPanel(lab, 'labs');
                    if (img) addSearchToPanel(img, 'imaging');
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
        document.querySelectorAll('[data-panel="labs"], .labs-panel').forEach(function(p) { addSearchToPanel(p, 'labs'); });
        document.querySelectorAll('[data-panel="imaging"], .imaging-panel').forEach(function(p) { addSearchToPanel(p, 'imaging'); });
    }

    window.SearchableOrders = {
        LABS: LABS,
        IMAGING: IMAGING,
        searchLabs: searchLabs,
        searchImaging: searchImaging,
        searchAll: searchAll,
        addSearchToPanel: addSearchToPanel,
        stats: { labCount: Object.keys(LABS).length, imagingCount: Object.keys(IMAGING).length }
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
.length + ' labs and ' + Object.keys(IMAGING).length + ' imaging studies');
})();
