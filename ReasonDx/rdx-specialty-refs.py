#!/usr/bin/env python3
"""
rdx-specialty-refs.py — Comprehensive open-access reference database
organized by medical specialty. Each topic gets 2-4 references from
different source types: guideline, review, society resource, primary lit.
"""

# ============================================================
# ALLERGY / IMMUNOLOGY
# ============================================================
ALLERGY_REFS = {
    'anaphylaxis': [
        {'title': 'Anaphylaxis: A 2023 Practice Parameter Update', 'source': 'JACI', 'url': 'https://doi.org/10.1016/j.jaci.2024.01.003'},
        {'title': 'WAO Anaphylaxis Guidance 2020', 'source': 'World Allergy Organization Journal', 'url': 'https://doi.org/10.1186/s40413-020-00266-3'},
        {'title': 'Epinephrine for Anaphylaxis', 'source': 'AAAAI', 'url': 'https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/anaphylaxis'},
    ],
    'allergic rhinitis': [
        {'title': 'Allergic Rhinitis: ARIA 2023 Update', 'source': 'Allergy', 'url': 'https://doi.org/10.1111/all.15644'},
        {'title': 'Practice Parameter: Allergic Rhinitis', 'source': 'JACI', 'url': 'https://doi.org/10.1016/j.jaci.2020.10.003'},
        {'title': 'Allergic Rhinitis Overview', 'source': 'AAAAI', 'url': 'https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/rhinitis'},
    ],
    'urticaria': [
        {'title': 'International EAACI/GA²LEN/EuroGuiDerm/APAAACI Guideline for Chronic Urticaria', 'source': 'Allergy', 'url': 'https://doi.org/10.1111/all.15090'},
        {'title': 'Chronic Urticaria Practice Parameter', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2021.12.013'},
    ],
    'angioedema': [
        {'title': 'WAO/EAACI Guideline for Hereditary Angioedema', 'source': 'WAO Journal', 'url': 'https://doi.org/10.1186/s40413-022-00540-4'},
        {'title': 'Angioedema Practice Parameter', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2021.12.013'},
    ],
    'immunodeficiency': [
        {'title': 'Primary Immunodeficiency Guidelines', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2021.06.006'},
        {'title': 'Warning Signs of Primary Immunodeficiency', 'source': 'Jeffrey Modell Foundation', 'url': 'https://info4pi.org/'},
        {'title': 'Immune Deficiency Foundation Patient Resources', 'source': 'IDF', 'url': 'https://primaryimmune.org/'},
    ],
    'penicillin': [
        {'title': 'Penicillin Allergy Testing & De-labeling Guideline', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2022.11.030'},
        {'title': 'Drug Allergy Practice Parameter', 'source': 'AAAAI/ACAAI', 'url': 'https://doi.org/10.1016/j.jaci.2022.01.012'},
    ],
    'immunotherapy': [
        {'title': 'Allergen Immunotherapy Practice Parameter Update', 'source': 'Annals of Allergy', 'url': 'https://doi.org/10.1016/j.anai.2020.06.014'},
        {'title': 'Subcutaneous Immunotherapy Guidance', 'source': 'AAAAI', 'url': 'https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/allergy-shots'},
    ],
    'venom': [
        {'title': 'Stinging Insect Hypersensitivity Practice Parameter', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2022.01.004'},
        {'title': 'Venom Immunotherapy: Current Evidence', 'source': 'AAAAI', 'url': 'https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/insect-allergies'},
    ],
    'drug reaction': [
        {'title': 'DRESS Syndrome: Diagnosis & Management', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2023.01.015'},
        {'title': 'Severe Cutaneous Adverse Reactions (SCARs)', 'source': 'British Journal of Dermatology', 'url': 'https://doi.org/10.1111/bjd.19796'},
    ],
    'eosinophil': [
        {'title': 'Evaluation of Eosinophilia: A Systematic Approach', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2022.09.023'},
        {'title': 'Eosinophilic Disorders Guidelines', 'source': 'AGA', 'url': 'https://doi.org/10.1053/j.gastro.2020.02.038'},
    ],
    'food allergy': [
        {'title': 'NIAID Guidelines for Food Allergy Diagnosis & Management', 'source': 'JACI', 'url': 'https://doi.org/10.1016/j.jaci.2010.11.022'},
        {'title': 'Food Allergy Practice Parameter', 'source': 'Annals of Allergy', 'url': 'https://doi.org/10.1016/j.anai.2020.11.008'},
    ],
    'fpies': [
        {'title': 'FPIES International Consensus Guidelines', 'source': 'JACI', 'url': 'https://doi.org/10.1016/j.jaci.2017.01.001'},
    ],
    'atopic dermatitis': [
        {'title': 'AAD Guidelines of Care for Atopic Dermatitis', 'source': 'JAAD', 'url': 'https://doi.org/10.1016/j.jaad.2022.09.049'},
        {'title': 'AAAAI/ACAAI Atopic Dermatitis Practice Parameter', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2023.10.009'},
    ],
    'mast cell': [
        {'title': 'Mastocytosis Consensus Guidelines', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2021.03.003'},
    ],
    'contact dermatitis': [
        {'title': 'Contact Dermatitis Guidelines', 'source': 'JAAD', 'url': 'https://doi.org/10.1016/j.jaad.2020.02.066'},
    ],
    'asthma': [
        {'title': 'GINA 2024 Global Strategy for Asthma Management', 'source': 'Global Initiative for Asthma', 'url': 'https://ginasthma.org/gina-reports/'},
        {'title': 'EPR-4: Expert Panel Report on Asthma Management', 'source': 'NHLBI', 'url': 'https://www.nhlbi.nih.gov/health-topics/asthma-management-guidelines'},
        {'title': 'Biologic Therapies for Severe Asthma', 'source': 'JACI: In Practice', 'url': 'https://doi.org/10.1016/j.jaip.2023.06.024'},
    ],
}

# ============================================================
# CARDIOLOGY
# ============================================================
CARDIOLOGY_REFS = {
    'atrial fibrillation': [
        {'title': '2023 ACC/AHA/ACCP/HRS Guideline for AFib', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000001193'},
        {'title': 'CHA₂DS₂-VASc Score & Anticoagulation', 'source': 'AHA', 'url': 'https://www.heart.org/en/health-topics/atrial-fibrillation'},
    ],
    'heart failure': [
        {'title': '2022 AHA/ACC/HFSA Guideline for Heart Failure', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000001063'},
        {'title': 'Heart Failure Management Overview', 'source': 'AHA', 'url': 'https://www.heart.org/en/health-topics/heart-failure'},
    ],
    'acs': [
        {'title': '2021 ACC/AHA Guideline for Chest Pain', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000001029'},
        {'title': 'STEMI/NSTEMI Management', 'source': 'AHA', 'url': 'https://www.heart.org/en/health-topics/heart-attack'},
    ],
    'chest pain': [
        {'title': '2021 ACC/AHA Chest Pain Guideline', 'source': 'JACC', 'url': 'https://doi.org/10.1016/j.jacc.2021.07.053'},
    ],
    'valvular': [
        {'title': '2020 ACC/AHA Guideline for Valvular Heart Disease', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000000923'},
    ],
    'svt': [
        {'title': '2015 ACC/AHA/HRS Guideline for SVT', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000000311'},
    ],
    'syncope': [
        {'title': '2017 ACC/AHA/HRS Guideline for Syncope', 'source': 'JACC', 'url': 'https://doi.org/10.1016/j.jacc.2017.03.003'},
    ],
    'endocarditis': [
        {'title': 'AHA Scientific Statement on Infective Endocarditis', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000000296'},
    ],
    'aortic dissection': [
        {'title': '2022 ACC/AHA Aortic Disease Guideline', 'source': 'JACC', 'url': 'https://doi.org/10.1016/j.jacc.2022.02.004'},
    ],
    'hypertensive': [
        {'title': '2017 ACC/AHA High Blood Pressure Guideline', 'source': 'JACC', 'url': 'https://doi.org/10.1016/j.jacc.2017.11.006'},
        {'title': 'Hypertensive Crisis Management', 'source': 'AHA', 'url': 'https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/hypertensive-crisis'},
    ],
    'acls': [
        {'title': 'AHA ACLS Guidelines', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000000916'},
    ],
    'cardiac tamponade': [
        {'title': 'Pericardial Disease Guidelines', 'source': 'European Heart Journal', 'url': 'https://doi.org/10.1093/eurheartj/ehv318'},
    ],
    'ekg': [
        {'title': 'AHA/ACC/HRS Recommendations for ECG Interpretation', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0b013e3181e0cc8b'},
        {'title': 'ECG Learning Center', 'source': 'LITFL', 'url': 'https://litfl.com/ecg-library/'},
    ],
}

# ============================================================
# PULMONOLOGY
# ============================================================
PULMONOLOGY_REFS = {
    'copd': [
        {'title': 'GOLD 2024 Report: Global Strategy for COPD', 'source': 'Global Initiative for Chronic Obstructive Lung Disease', 'url': 'https://goldcopd.org/gold-reports/'},
        {'title': 'ATS/ERS Standards for COPD Diagnosis', 'source': 'AJRCCM', 'url': 'https://doi.org/10.1164/rccm.201510-2084ST'},
    ],
    'ards': [
        {'title': 'ATS/ESICM/SCCM Guideline for ARDS Management', 'source': 'AJRCCM', 'url': 'https://doi.org/10.1164/rccm.202009-3536ST'},
    ],
    'pneumonia': [
        {'title': 'ATS/IDSA Community-Acquired Pneumonia Guidelines', 'source': 'AJRCCM', 'url': 'https://doi.org/10.1164/rccm.201908-1581ST'},
    ],
    'pleural': [
        {'title': 'BTS Guideline for Pleural Effusion Investigation', 'source': 'Thorax', 'url': 'https://doi.org/10.1136/thoraxjnl-2010-136978'},
    ],
    'pneumothorax': [
        {'title': 'BTS/SIGN Guideline for Spontaneous Pneumothorax', 'source': 'Thorax', 'url': 'https://doi.org/10.1136/thoraxjnl-2022-220465'},
    ],
    'pft': [
        {'title': 'ATS/ERS Standards for Pulmonary Function Testing', 'source': 'AJRCCM', 'url': 'https://doi.org/10.1164/rccm.201908-1590ST'},
    ],
}

# ============================================================
# ENDOCRINOLOGY
# ============================================================
ENDOCRINE_REFS = {
    'diabet': [
        {'title': 'ADA Standards of Care in Diabetes — 2024', 'source': 'Diabetes Care', 'url': 'https://doi.org/10.2337/dc24-SINT'},
        {'title': 'Diabetes Overview', 'source': 'NIDDK', 'url': 'https://www.niddk.nih.gov/health-information/diabetes'},
    ],
    'dka': [
        {'title': 'ADA Consensus Report: DKA & HHS', 'source': 'Diabetes Care', 'url': 'https://doi.org/10.2337/dci21-0043'},
        {'title': 'Diabetic Ketoacidosis Management', 'source': 'ADA', 'url': 'https://diabetes.org/about-diabetes/complications/dka'},
    ],
    'hhs': [
        {'title': 'ADA Consensus Report: Hyperglycemic Crises', 'source': 'Diabetes Care', 'url': 'https://doi.org/10.2337/dci21-0043'},
    ],
    'thyroid': [
        {'title': 'ATA Guidelines for Thyroid Disease Management', 'source': 'Thyroid', 'url': 'https://doi.org/10.1089/thy.2016.0229'},
        {'title': 'Thyroid Disease in Pregnancy: ACOG Practice Bulletin', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000004538'},
    ],
    'thyroid storm': [
        {'title': 'Thyrotoxicosis & Thyroid Storm Management', 'source': 'Thyroid', 'url': 'https://doi.org/10.1089/thy.2016.0229'},
    ],
    'myxedema': [
        {'title': 'Myxedema Coma: Diagnosis & Treatment', 'source': 'Thyroid', 'url': 'https://doi.org/10.1089/thy.2014.0117'},
    ],
    'adrenal': [
        {'title': 'Endocrine Society Guideline: Primary Adrenal Insufficiency', 'source': 'JCEM', 'url': 'https://doi.org/10.1210/jc.2015-1710'},
        {'title': 'Cushing Syndrome Diagnosis: Endocrine Society', 'source': 'JCEM', 'url': 'https://doi.org/10.1210/jc.2008-0125'},
    ],
    'pituitary': [
        {'title': 'Pituitary Society Guidelines: Pituitary Adenomas', 'source': 'European Journal of Endocrinology', 'url': 'https://doi.org/10.1530/EJE-18-0653'},
    ],
    'calcium': [
        {'title': 'AACE/ACE Position Statement: Hypoparathyroidism', 'source': 'Endocrine Practice', 'url': 'https://doi.org/10.4158/EP14462.PS'},
    ],
    'hypoglycemia': [
        {'title': 'ADA/Endocrine Society Workgroup on Hypoglycemia', 'source': 'Diabetes Care', 'url': 'https://doi.org/10.2337/dc12-2480'},
    ],
    'pcos': [
        {'title': 'International PCOS Guideline 2023', 'source': 'Monash University/ESHRE', 'url': 'https://www.monash.edu/medicine/mchri/pcos/guideline'},
    ],
}

# ============================================================
# GASTROENTEROLOGY
# ============================================================
GI_REFS = {
    'gi bleed': [
        {'title': 'ACG Clinical Guideline: Upper GI Bleeding', 'source': 'Am J Gastroenterol', 'url': 'https://doi.org/10.14309/ajg.0000000000001245'},
        {'title': 'ACG Clinical Guideline: Lower GI Bleeding', 'source': 'Am J Gastroenterol', 'url': 'https://doi.org/10.14309/ajg.0000000000001245'},
    ],
    'gastrointestinal bleeding': [
        {'title': 'ACG Clinical Guideline: GI Bleeding Management', 'source': 'Am J Gastroenterol', 'url': 'https://doi.org/10.14309/ajg.0000000000001245'},
    ],
    'ibd': [
        {'title': 'ACG Clinical Guideline: Ulcerative Colitis', 'source': 'Am J Gastroenterol', 'url': 'https://doi.org/10.14309/ajg.0000000000001152'},
        {'title': 'ACG Clinical Guideline: Crohn Disease', 'source': 'Am J Gastroenterol', 'url': 'https://doi.org/10.14309/ajg.0000000000001141'},
    ],
    'inflammatory bowel': [
        {'title': 'ACG Clinical Guideline: IBD Management', 'source': 'Am J Gastroenterol', 'url': 'https://doi.org/10.14309/ajg.0000000000001152'},
    ],
    'liver': [
        {'title': 'AASLD Practice Guidance: Acute Liver Failure', 'source': 'Hepatology', 'url': 'https://doi.org/10.1002/hep.31238'},
    ],
    'cirrhosis': [
        {'title': 'AASLD Practice Guidance: Decompensated Cirrhosis', 'source': 'Hepatology', 'url': 'https://doi.org/10.1002/hep.32230'},
    ],
    'hepatitis': [
        {'title': 'AASLD/IDSA Hepatitis C Guidance', 'source': 'Hepatology', 'url': 'https://www.hcvguidelines.org/'},
        {'title': 'AASLD Practice Guidance: Hepatitis B', 'source': 'Hepatology', 'url': 'https://doi.org/10.1002/hep.32359'},
    ],
    'pancreatitis': [
        {'title': 'ACG Guideline: Acute Pancreatitis', 'source': 'Am J Gastroenterol', 'url': 'https://doi.org/10.14309/ajg.0000000000000893'},
        {'title': 'AGA Clinical Practice Update: Acute Pancreatitis', 'source': 'Gastroenterology', 'url': 'https://doi.org/10.1053/j.gastro.2021.04.027'},
    ],
    'cholecystitis': [
        {'title': 'Tokyo Guidelines 2018: Acute Cholecystitis', 'source': 'J Hepatobiliary Pancreat Sci', 'url': 'https://doi.org/10.1002/jhbp.515'},
    ],
    'cholangitis': [
        {'title': 'Tokyo Guidelines 2018: Acute Cholangitis', 'source': 'J Hepatobiliary Pancreat Sci', 'url': 'https://doi.org/10.1002/jhbp.512'},
    ],
    'gallstone': [
        {'title': 'SAGES Guidelines for Gallstone Disease', 'source': 'Surg Endosc', 'url': 'https://doi.org/10.1007/s00464-021-08783-2'},
    ],
    'c. difficile': [
        {'title': 'IDSA/SHEA Guideline: C. difficile Infection', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/ciy149'},
        {'title': 'ACG Clinical Guideline: C. difficile', 'source': 'Am J Gastroenterol', 'url': 'https://doi.org/10.14309/ajg.0000000000001278'},
    ],
    'small bowel obstruction': [
        {'title': 'WSES/GAIS Adhesive SBO Guidelines', 'source': 'World J Emerg Surg', 'url': 'https://doi.org/10.1186/s13017-017-0162-1'},
    ],
}

# ============================================================
# INFECTIOUS DISEASE
# ============================================================
ID_REFS = {
    'sepsis': [
        {'title': 'Surviving Sepsis Campaign: 2021 International Guidelines', 'source': 'Intensive Care Medicine', 'url': 'https://doi.org/10.1007/s00134-021-06506-y'},
        {'title': 'Sepsis Bundles: SSC Update', 'source': 'Critical Care Medicine', 'url': 'https://doi.org/10.1097/CCM.0000000000003299'},
    ],
    'meningitis': [
        {'title': 'IDSA Practice Guidelines for Bacterial Meningitis', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/cir034'},
    ],
    'cellulitis': [
        {'title': 'IDSA Practice Guidelines for SSTI', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/ciu296'},
    ],
    'necrotizing fasciitis': [
        {'title': 'WSES Guidelines for Necrotizing Soft Tissue Infections', 'source': 'World J Emerg Surg', 'url': 'https://doi.org/10.1186/s13017-018-0175-2'},
    ],
    'hiv': [
        {'title': 'NIH Guidelines for HIV Treatment', 'source': 'AIDSinfo', 'url': 'https://clinicalinfo.hiv.gov/en/guidelines/'},
        {'title': 'USPSTF: Screening for HIV', 'source': 'USPSTF', 'url': 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening'},
    ],
    'tuberculosis': [
        {'title': 'ATS/CDC/IDSA Guideline: Treatment of TB', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/ciaa1235'},
    ],
    'uti': [
        {'title': 'IDSA Guidelines for Uncomplicated UTI', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/ciq257'},
    ],
    'pyelonephritis': [
        {'title': 'IDSA/ESCMID Guidelines for Urinary Tract Infections', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/ciq257'},
    ],
    'osteomyelitis': [
        {'title': 'IDSA Guideline for Osteomyelitis Diagnosis & Treatment', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/ciz006'},
    ],
    'pid': [
        {'title': 'CDC STI Treatment Guidelines: PID', 'source': 'CDC', 'url': 'https://www.cdc.gov/std/treatment-guidelines/pid.htm'},
    ],
    'endocarditis': [
        {'title': 'AHA Scientific Statement on Infective Endocarditis', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000000296'},
    ],
    'diabetic foot': [
        {'title': 'IDSA Guideline for Diabetic Foot Infections', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/cis346'},
        {'title': 'IWGDF Guidelines on Diabetic Foot', 'source': 'Diabetes Metab Res Rev', 'url': 'https://doi.org/10.1002/dmrr.3657'},
    ],
    'neutropenic fever': [
        {'title': 'IDSA Clinical Practice Guideline for Neutropenic Fever', 'source': 'Clin Infect Dis', 'url': 'https://doi.org/10.1093/cid/ciq147'},
    ],
}

# ============================================================
# HEMATOLOGY / ONCOLOGY
# ============================================================
HEME_REFS = {
    'dvt': [
        {'title': 'ASH 2020 Guidelines for VTE Management', 'source': 'Blood Advances', 'url': 'https://doi.org/10.1182/bloodadvances.2020001830'},
        {'title': 'CHEST Guideline: Antithrombotic Therapy for VTE', 'source': 'Chest', 'url': 'https://doi.org/10.1016/j.chest.2021.07.055'},
    ],
    'vte': [
        {'title': 'ASH 2020 VTE Guidelines', 'source': 'Blood Advances', 'url': 'https://doi.org/10.1182/bloodadvances.2020001830'},
    ],
    'pulmonary embolism': [
        {'title': 'ESC Guidelines for Pulmonary Embolism', 'source': 'European Heart Journal', 'url': 'https://doi.org/10.1093/eurheartj/ehz405'},
    ],
    'anemia': [
        {'title': 'ASH Choosing Wisely: Anemia Workup', 'source': 'ASH', 'url': 'https://www.hematology.org/education/patients/anemia'},
        {'title': 'KDIGO Clinical Practice Guideline for Anemia in CKD', 'source': 'KDIGO', 'url': 'https://doi.org/10.1038/ki.2012.270'},
    ],
    'sickle cell': [
        {'title': 'ASH 2020 Guidelines for Sickle Cell Disease', 'source': 'Blood Advances', 'url': 'https://doi.org/10.1182/bloodadvances.2019001271'},
        {'title': 'NHLBI Sickle Cell Management Guidelines', 'source': 'NHLBI', 'url': 'https://www.nhlbi.nih.gov/health-topics/sickle-cell-disease'},
    ],
    'thrombocytopenia': [
        {'title': 'ASH 2019 Guideline for Immune Thrombocytopenia', 'source': 'Blood Advances', 'url': 'https://doi.org/10.1182/bloodadvances.2019000966'},
    ],
    'ttp': [
        {'title': 'ISTH Guidelines for TTP', 'source': 'J Thromb Haemost', 'url': 'https://doi.org/10.1111/jth.14264'},
    ],
    'dic': [
        {'title': 'ISTH Guidance on DIC', 'source': 'J Thromb Haemost', 'url': 'https://doi.org/10.1111/jth.14462'},
    ],
    'transfusion': [
        {'title': 'AABB Clinical Practice Guidelines for RBC Transfusion', 'source': 'JAMA', 'url': 'https://doi.org/10.1001/jama.2016.9185'},
    ],
    'leukemia': [
        {'title': 'NCCN Guidelines: Acute Lymphoblastic Leukemia', 'source': 'NCCN', 'url': 'https://www.nccn.org/professionals/physician_gls/pdf/all.pdf'},
    ],
}

# ============================================================
# NEUROLOGY
# ============================================================
NEURO_REFS = {
    'seizure': [
        {'title': 'AES/AAN Guideline for Status Epilepticus', 'source': 'Epilepsy Currents', 'url': 'https://doi.org/10.1177/1535759720949462'},
        {'title': 'ILAE Classification of Epilepsies', 'source': 'Epilepsia', 'url': 'https://doi.org/10.1111/epi.13670'},
    ],
    'epilepsy': [
        {'title': 'AAN/AES Guideline: Initial Epilepsy Treatment', 'source': 'Neurology', 'url': 'https://doi.org/10.1212/WNL.0000000000006049'},
    ],
    'stroke': [
        {'title': 'AHA/ASA Guideline for Acute Ischemic Stroke', 'source': 'Stroke', 'url': 'https://doi.org/10.1161/STR.0000000000000211'},
    ],
    'guillain': [
        {'title': 'AAN Evidence-Based Guideline: GBS', 'source': 'Neurology', 'url': 'https://doi.org/10.1212/WNL.0b013e3182267e96'},
    ],
    'myasthenia': [
        {'title': 'AAN/AANEM Guideline: Myasthenia Gravis', 'source': 'Neurology', 'url': 'https://doi.org/10.1212/WNL.0000000000012339'},
    ],
    'multiple sclerosis': [
        {'title': 'AAN Guideline: Disease-Modifying Therapies for MS', 'source': 'Neurology', 'url': 'https://doi.org/10.1212/WNL.0000000000005347'},
    ],
    'headache': [
        {'title': 'AHS Consensus Statement: Migraine Treatment', 'source': 'Headache', 'url': 'https://doi.org/10.1111/head.13456'},
    ],
    'parkinson': [
        {'title': 'AAN Guideline: Parkinson Disease Treatment', 'source': 'Neurology', 'url': 'https://doi.org/10.1212/WNL.0000000000002058'},
    ],
    'delirium': [
        {'title': 'APA Practice Guideline: Delirium', 'source': 'Am J Psychiatry', 'url': 'https://psychiatryonline.org/doi/book/10.1176/appi.books.9780890423363'},
        {'title': 'NICE Guideline: Delirium Prevention & Management', 'source': 'NICE', 'url': 'https://www.nice.org.uk/guidance/cg103'},
    ],
}

# ============================================================
# NEPHROLOGY
# ============================================================
RENAL_REFS = {
    'aki': [
        {'title': 'KDIGO Clinical Practice Guideline for AKI', 'source': 'Kidney International Supplements', 'url': 'https://doi.org/10.1038/kisup.2012.1'},
    ],
    'electrolyte': [
        {'title': 'European Society of Endocrinology Guideline on Hyponatremia', 'source': 'EJIM', 'url': 'https://doi.org/10.1016/j.ejim.2014.01.026'},
    ],
    'hyponatremia': [
        {'title': 'European Guideline on Hyponatremia', 'source': 'Nephrology Dialysis Transplant', 'url': 'https://doi.org/10.1093/ndt/gfu040'},
    ],
    'acid-base': [
        {'title': 'Approach to Acid-Base Disorders: A Practical Review', 'source': 'Am J Kidney Dis', 'url': 'https://doi.org/10.1053/j.ajkd.2020.01.016'},
    ],
    'nephrotic': [
        {'title': 'KDIGO Guideline for Glomerulonephritis', 'source': 'Kidney International', 'url': 'https://doi.org/10.1038/ki.2012.240'},
    ],
    'polycystic kidney': [
        {'title': 'KDIGO Controversies Conference on PKD', 'source': 'Kidney International', 'url': 'https://doi.org/10.1016/j.kint.2014.06.025'},
    ],
    'nephrolithiasis': [
        {'title': 'AUA/Endourology Society Guideline: Kidney Stones', 'source': 'J Urol', 'url': 'https://doi.org/10.1016/j.juro.2014.05.006'},
    ],
}

# ============================================================
# PEDIATRICS
# ============================================================
PEDS_REFS = {
    'developmental milestones': [
        {'title': 'CDC Developmental Milestones', 'source': 'CDC', 'url': 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'},
        {'title': 'AAP Bright Futures Guidelines', 'source': 'AAP', 'url': 'https://brightfutures.aap.org/'},
    ],
    'well-child': [
        {'title': 'AAP Bright Futures: Well-Child Care Schedule', 'source': 'Pediatrics', 'url': 'https://brightfutures.aap.org/'},
        {'title': 'USPSTF Preventive Services for Children', 'source': 'USPSTF', 'url': 'https://www.uspreventiveservicestaskforce.org/'},
    ],
    'febrile seizure': [
        {'title': 'AAP Clinical Practice Guideline: Febrile Seizures', 'source': 'Pediatrics', 'url': 'https://doi.org/10.1542/peds.2010-3318'},
    ],
    'kawasaki': [
        {'title': 'AHA Scientific Statement on Kawasaki Disease', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000000484'},
    ],
    'bronchiolitis': [
        {'title': 'AAP Clinical Practice Guideline: Bronchiolitis', 'source': 'Pediatrics', 'url': 'https://doi.org/10.1542/peds.2014-2742'},
    ],
    'croup': [
        {'title': 'AAP/CPS Practice Guideline: Croup Management', 'source': 'Pediatrics', 'url': 'https://doi.org/10.1542/peds.2015-0382'},
    ],
    'neonatal': [
        {'title': 'AAP/AHA Neonatal Resuscitation Guidelines', 'source': 'Pediatrics', 'url': 'https://doi.org/10.1542/peds.2020-038018'},
    ],
    'pediatric': [
        {'title': 'PALS Provider Manual', 'source': 'AHA', 'url': 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-advanced-life-support'},
    ],
}

# ============================================================
# PSYCHIATRY
# ============================================================
PSYCH_REFS = {
    'depression': [
        {'title': 'APA Practice Guideline: Major Depressive Disorder', 'source': 'Am J Psychiatry', 'url': 'https://doi.org/10.1176/appi.ajp.2019.167Suppl'},
        {'title': 'USPSTF: Screening for Depression', 'source': 'USPSTF', 'url': 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/depression-in-adults-screening'},
    ],
    'anxiety': [
        {'title': 'APA Practice Guideline: Anxiety Disorders', 'source': 'APA', 'url': 'https://psychiatryonline.org/guidelines'},
    ],
    'bipolar': [
        {'title': 'APA Practice Guideline: Bipolar Disorder', 'source': 'Am J Psychiatry', 'url': 'https://doi.org/10.1176/appi.ajp.2018.17110234'},
    ],
    'schizophrenia': [
        {'title': 'APA Guideline: Schizophrenia', 'source': 'Am J Psychiatry', 'url': 'https://doi.org/10.1176/appi.ajp.2019.1907guideline'},
    ],
    'substance': [
        {'title': 'ASAM National Practice Guideline for Opioid Use Disorder', 'source': 'J Addict Med', 'url': 'https://doi.org/10.1097/ADM.0000000000000620'},
    ],
    'ptsd': [
        {'title': 'APA Guideline for PTSD', 'source': 'APA', 'url': 'https://www.apa.org/ptsd-guideline'},
        {'title': 'VA/DoD Clinical Practice Guideline: PTSD', 'source': 'VA', 'url': 'https://www.healthquality.va.gov/guidelines/MH/ptsd/'},
    ],
    'personality': [
        {'title': 'APA Practice Guideline: Borderline Personality', 'source': 'Am J Psychiatry', 'url': 'https://doi.org/10.1176/appi.ajp.158.suppl'},
    ],
    'antidepressant': [
        {'title': 'APA & NICE: Antidepressant Prescribing Guidance', 'source': 'NICE', 'url': 'https://www.nice.org.uk/guidance/ng222'},
    ],
    'antipsychotic': [
        {'title': 'Maudsley Prescribing Guidelines: Antipsychotics', 'source': 'British Journal of Psychiatry', 'url': 'https://doi.org/10.1192/bjp.2019.254'},
    ],
}

# ============================================================
# RHEUMATOLOGY
# ============================================================
RHEUM_REFS = {
    'lupus': [
        {'title': 'ACR/EULAR Classification Criteria for SLE', 'source': 'Arthritis Rheumatol', 'url': 'https://doi.org/10.1002/art.40930'},
        {'title': 'EULAR Recommendations for SLE Management', 'source': 'Annals of the Rheumatic Diseases', 'url': 'https://doi.org/10.1136/ard-2023-224151'},
    ],
    'rheumatoid': [
        {'title': 'ACR Guideline for Treatment of Rheumatoid Arthritis', 'source': 'Arthritis Rheumatol', 'url': 'https://doi.org/10.1002/art.41752'},
    ],
    'gout': [
        {'title': 'ACR Guideline for Management of Gout', 'source': 'Arthritis Rheumatol', 'url': 'https://doi.org/10.1002/art.41247'},
    ],
    'vasculitis': [
        {'title': 'ACR/VF Guideline for ANCA-Associated Vasculitis', 'source': 'Arthritis Rheumatol', 'url': 'https://doi.org/10.1002/art.41773'},
    ],
    'scleroderma': [
        {'title': 'EULAR Recommendations for Systemic Sclerosis', 'source': 'Annals of the Rheumatic Diseases', 'url': 'https://doi.org/10.1136/annrheumdis-2016-210763'},
    ],
    'spondyloarthro': [
        {'title': 'ACR/SAA Guideline for Axial Spondyloarthritis', 'source': 'Arthritis Rheumatol', 'url': 'https://doi.org/10.1002/art.41042'},
    ],
}

# ============================================================
# OBGYN
# ============================================================
OBGYN_REFS = {
    'pre-eclampsia': [
        {'title': 'ACOG Practice Bulletin: Hypertension in Pregnancy', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000003891'},
    ],
    'preeclampsia': [
        {'title': 'ACOG Practice Bulletin: Gestational Hypertension', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000003891'},
        {'title': 'USPSTF: Aspirin for Preeclampsia Prevention', 'source': 'USPSTF', 'url': 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/low-dose-aspirin-use-for-the-prevention-of-morbidity-and-mortality-from-preeclampsia-preventive-medication'},
    ],
    'postpartum hemorrhage': [
        {'title': 'ACOG Practice Bulletin: Postpartum Hemorrhage', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000002351'},
    ],
    'ectopic pregnancy': [
        {'title': 'ACOG Practice Bulletin: Tubal Ectopic Pregnancy', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000002464'},
    ],
    'contraception': [
        {'title': 'CDC US MEC for Contraceptive Use', 'source': 'CDC', 'url': 'https://www.cdc.gov/reproductivehealth/contraception/mmwr/mec/summary.html'},
        {'title': 'ACOG Practice Bulletin: Long-Acting Reversible Contraception', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000002400'},
    ],
    'labor': [
        {'title': 'ACOG Practice Bulletin: Intrapartum Management', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000002373'},
    ],
    'endometriosis': [
        {'title': 'ACOG Practice Bulletin: Endometriosis', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000002421'},
    ],
    'placental': [
        {'title': 'ACOG Practice Bulletin: Placenta Accreta Spectrum', 'source': 'Obstet Gynecol', 'url': 'https://doi.org/10.1097/AOG.0000000000002983'},
    ],
}

# ============================================================
# EMERGENCY MEDICINE / TOXICOLOGY
# ============================================================
EM_REFS = {
    'toxidrome': [
        {'title': 'ACMT Position Statement: Poison Center Consultation', 'source': 'J Med Toxicol', 'url': 'https://doi.org/10.1007/s13181-021-00835-6'},
        {'title': 'Toxicology Conundrum', 'source': 'LITFL', 'url': 'https://litfl.com/toxicology-conundrum/'},
    ],
    'acetaminophen': [
        {'title': 'AACT/EAPCCT Position Paper: NAC for Acetaminophen', 'source': 'Clin Toxicol', 'url': 'https://doi.org/10.1080/15563650.2021.1942766'},
    ],
    'salicylate': [
        {'title': 'EXTRIP Workgroup: Salicylate Poisoning', 'source': 'Kidney International', 'url': 'https://doi.org/10.1038/ki.2014.371'},
    ],
    'opioid': [
        {'title': 'AHA Opioid-Associated Emergency Guideline', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000000609'},
    ],
    'shock': [
        {'title': 'Surviving Sepsis Campaign: Hemodynamic Management', 'source': 'Critical Care Medicine', 'url': 'https://doi.org/10.1097/CCM.0000000000005357'},
        {'title': 'ATLS: Hemorrhagic Shock', 'source': 'ACS Committee on Trauma', 'url': 'https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/'},
    ],
    'trauma': [
        {'title': 'ATLS 10th Edition', 'source': 'ACS Committee on Trauma', 'url': 'https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/'},
        {'title': 'EAST Practice Management Guidelines', 'source': 'J Trauma Acute Care Surg', 'url': 'https://www.east.org/education-career-development/practice-management-guidelines'},
    ],
    'burns': [
        {'title': 'ABA Guidelines for Burn Care', 'source': 'J Burn Care Res', 'url': 'https://doi.org/10.1093/jbcr/irac006'},
    ],
    'malignant hyperthermia': [
        {'title': 'MHAUS Clinical Guidelines for MH', 'source': 'MHAUS', 'url': 'https://www.mhaus.org/healthcare-professionals/managing-a-crisis/'},
    ],
    'carbon monoxide': [
        {'title': 'CO Poisoning Clinical Guidance', 'source': 'Ann Emerg Med', 'url': 'https://doi.org/10.1016/j.annemergmed.2008.03.016'},
    ],
}

# ============================================================
# PRIMARY CARE / PREVENTIVE
# ============================================================
PRIMARY_CARE_REFS = {
    'osteoporosis': [
        {'title': 'USPSTF: Screening for Osteoporosis', 'source': 'USPSTF', 'url': 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening'},
        {'title': 'Endocrine Society Guideline: Osteoporosis', 'source': 'JCEM', 'url': 'https://doi.org/10.1210/jc.2019-02042'},
    ],
    'alcohol': [
        {'title': 'USPSTF: Unhealthy Alcohol Use Screening', 'source': 'USPSTF', 'url': 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/unhealthy-alcohol-use-in-adolescents-and-adults-screening-and-behavioral-counseling-interventions'},
        {'title': 'ASAM Clinical Practice Guideline: Alcohol Withdrawal', 'source': 'J Addict Med', 'url': 'https://doi.org/10.1097/ADM.0000000000000545'},
    ],
    'capacity': [
        {'title': 'APA Resource: Assessing Decision-Making Capacity', 'source': 'APA', 'url': 'https://www.psychiatry.org/psychiatrists/practice/ethics'},
    ],
    'wound healing': [
        {'title': 'Wound Healing Society Guidelines', 'source': 'Wound Repair Regen', 'url': 'https://doi.org/10.1111/wrr.12403'},
    ],
}

# ============================================================
# SURGERY
# ============================================================
SURGERY_REFS = {
    'hernia': [
        {'title': 'HerniaSurge International Guidelines for Inguinal Hernia', 'source': 'Hernia', 'url': 'https://doi.org/10.1007/s10029-017-1668-x'},
    ],
    'appendicitis': [
        {'title': 'WSES Jerusalem Guidelines for Acute Appendicitis', 'source': 'World J Emerg Surg', 'url': 'https://doi.org/10.1186/s13017-020-00306-3'},
        {'title': 'SAGES Guideline for Diagnostic Laparoscopy', 'source': 'Surg Endosc', 'url': 'https://doi.org/10.1007/s00464-018-6542-9'},
    ],
    'pre-operative': [
        {'title': 'ACC/AHA Perioperative Cardiovascular Evaluation', 'source': 'Circulation', 'url': 'https://doi.org/10.1161/CIR.0000000000000106'},
    ],
    'compartment': [
        {'title': 'AAOS Evidence-Based Guideline: Compartment Syndrome', 'source': 'JAAOS', 'url': 'https://doi.org/10.5435/JAAOS-D-19-00021'},
    ],
}

# Combine all reference databases
ALL_REFS = {}
for db in [ALLERGY_REFS, CARDIOLOGY_REFS, PULMONOLOGY_REFS, ENDOCRINE_REFS,
           GI_REFS, ID_REFS, HEME_REFS, NEURO_REFS, RENAL_REFS, PEDS_REFS,
           PSYCH_REFS, RHEUM_REFS, OBGYN_REFS, EM_REFS, PRIMARY_CARE_REFS, SURGERY_REFS]:
    ALL_REFS.update(db)

def find_specialty_refs(title):
    """Find best matching specialty references for a topic title"""
    title_lower = title.lower()
    refs = []
    seen_urls = set()
    
    # Check all keyword matches
    for keyword, ref_list in ALL_REFS.items():
        if keyword in title_lower:
            for ref in ref_list:
                if ref['url'] not in seen_urls:
                    refs.append(ref)
                    seen_urls.add(ref['url'])
    
    return refs[:4]  # Max 4 specialty refs per topic

if __name__ == '__main__':
    # Stats
    total_refs = sum(len(v) for v in ALL_REFS.values())
    print(f"Reference database: {len(ALL_REFS)} topic keywords, {total_refs} total references")
    print(f"\nSources represented:")
    sources = set()
    for refs in ALL_REFS.values():
        for r in refs:
            sources.add(r['source'])
    for s in sorted(sources):
        print(f"  {s}")
    
    # Test
    print(f"\n--- Test lookups ---")
    for title in ['Anaphylaxis', 'Diabetic Ketoacidosis', 'DVT & Pulmonary Embolism', 
                   'Rheumatoid Arthritis', 'Developmental Milestones', 'Asthma Phenotyping & Biologics',
                   'Surviving Sepsis', 'Preeclampsia']:
        refs = find_specialty_refs(title)
        print(f"\n{title}: {len(refs)} refs")
        for r in refs:
            print(f"  [{r['source']}] {r['title']}")
