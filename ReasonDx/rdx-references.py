#!/usr/bin/env python3
"""
rdx-references.py — Inject topic-specific open-access references
into modules, deep dives, and topic pages.
"""

# StatPearls reference map: topic keyword → (NBK ID, title)
STATPEARLS = {
    'anaphylaxis': ('NBK482124', 'Anaphylaxis'),
    'angioedema': ('NBK538489', 'Angioedema'),
    'appendicitis': ('NBK493193', 'Appendicitis'),
    'acute appendicitis': ('NBK493193', 'Acute Appendicitis'),
    'asthma': ('NBK430901', 'Asthma'),
    'asthma biologics': ('NBK430901', 'Asthma'),
    'asthma phenotyping': ('NBK430901', 'Asthma'),
    'atrial fibrillation': ('NBK526072', 'Atrial Fibrillation'),
    'cellulitis': ('NBK549770', 'Cellulitis'),
    'necrotizing fasciitis': ('NBK430756', 'Necrotizing Fasciitis'),
    'cholecystitis': ('NBK459171', 'Acute Cholecystitis'),
    'cholangitis': ('NBK459182', 'Cholangitis'),
    'chronic urticaria': ('NBK555910', 'Chronic Urticaria'),
    'urticaria': ('NBK555910', 'Chronic Urticaria'),
    'copd': ('NBK559281', 'Chronic Obstructive Pulmonary Disease'),
    'congestive heart failure': ('NBK430873', 'Congestive Heart Failure'),
    'heart failure': ('NBK430873', 'Congestive Heart Failure'),
    'deep vein thrombosis': ('NBK507235', 'Deep Venous Thrombosis'),
    'dvt': ('NBK507235', 'Deep Venous Thrombosis'),
    'pulmonary embolism': ('NBK560551', 'Pulmonary Embolism'),
    'vte': ('NBK507235', 'Deep Venous Thrombosis'),
    'diabetic ketoacidosis': ('NBK560723', 'Diabetic Ketoacidosis'),
    'dka': ('NBK560723', 'Diabetic Ketoacidosis'),
    'hhs': ('NBK482142', 'Hyperosmolar Hyperglycemic Nonketotic Coma'),
    'diabetes': ('NBK551501', 'Diabetes Mellitus'),
    'diabetic foot': ('NBK537328', 'Diabetic Foot Infections'),
    'developmental milestones': ('NBK557518', 'Developmental Milestones'),
    'dress syndrome': ('NBK459149', 'Drug Reaction with Eosinophilia and Systemic Symptoms'),
    'electrolyte': ('NBK541123', 'Electrolytes'),
    'epilepsy': ('NBK560665', 'Epilepsy'),
    'seizure': ('NBK430765', 'Seizure'),
    'status epilepticus': ('NBK430765', 'Status Epilepticus'),
    'gastrointestinal bleeding': ('NBK537291', 'Gastrointestinal Bleeding'),
    'gi bleed': ('NBK537291', 'Gastrointestinal Bleeding'),
    'guillain-barre': ('NBK532254', 'Guillain-Barre Syndrome'),
    'hepatitis': ('NBK554549', 'Viral Hepatitis'),
    'immunodeficiency': ('NBK500027', 'Primary Immunodeficiency'),
    'immunotherapy': ('NBK560551', 'Immunotherapy'),
    'inflammatory bowel disease': ('NBK470312', 'Inflammatory Bowel Disease'),
    'ibd': ('NBK470312', 'Inflammatory Bowel Disease'),
    'liver failure': ('NBK482374', 'Acute Liver Failure'),
    'acute liver failure': ('NBK482374', 'Acute Liver Failure'),
    'cirrhosis': ('NBK482419', 'Cirrhosis'),
    'liver disease': ('NBK482419', 'Cirrhosis'),
    'meningitis': ('NBK459360', 'Meningitis'),
    'encephalitis': ('NBK459360', 'Encephalitis'),
    'metabolic acidosis': ('NBK482146', 'Metabolic Acidosis'),
    'myasthenia gravis': ('NBK559331', 'Myasthenia Gravis'),
    'myxedema': ('NBK545193', 'Myxedema Coma'),
    'pancreatitis': ('NBK482468', 'Acute Pancreatitis'),
    'penicillin allergy': ('NBK459320', 'Penicillin Allergy'),
    'penicillin delabeling': ('NBK459320', 'Penicillin Allergy'),
    'plastic surgery': ('NBK547752', 'Plastic Surgery'),
    'pneumonia': ('NBK513321', 'Pneumonia'),
    'pyelonephritis': ('NBK519537', 'Pyelonephritis'),
    'sepsis': ('NBK507170', 'Sepsis'),
    'septic shock': ('NBK507170', 'Sepsis'),
    'sinusitis': ('NBK547701', 'Sinusitis'),
    'small bowel obstruction': ('NBK441975', 'Small Bowel Obstruction'),
    'svt': ('NBK441972', 'Supraventricular Tachycardia'),
    'wpw': ('NBK554437', 'Wolff-Parkinson-White Syndrome'),
    'thyroid storm': ('NBK448095', 'Thyroid Storm'),
    'thyroid': ('NBK482214', 'Thyroid Disease'),
    'venom immunotherapy': ('NBK482124', 'Anaphylaxis'),  # closest match
    'acid-base': ('NBK507807', 'Acid-Base Disorders'),
    'acute coronary syndrome': ('NBK459157', 'Acute Coronary Syndrome'),
    'acs': ('NBK459157', 'Acute Coronary Syndrome'),
    'chest pain': ('NBK459157', 'Acute Coronary Syndrome'),
    'anemia': ('NBK499994', 'Anemia'),
    'antidepressant': ('NBK557791', 'Antidepressants'),
    'antipsychotic': ('NBK519503', 'Antipsychotics'),
    'biliary': ('NBK459171', 'Biliary Disease'),
    'calcium': ('NBK557683', 'Calcium Disorders'),
    'parathyroid': ('NBK557683', 'Calcium Disorders'),
    'cardiac embryology': ('NBK537313', 'Cardiac Development'),
    'contraception': ('NBK536949', 'Contraception'),
    'cryptorchidism': ('NBK470270', 'Cryptorchidism'),
    'diaphragmatic hernia': ('NBK532270', 'Congenital Diaphragmatic Hernia'),
    'duodenal atresia': ('NBK534232', 'Duodenal Atresia'),
    'hematuria': ('NBK534213', 'Hematuria'),
    'hypospadias': ('NBK482122', 'Hypospadias'),
    'neonatal respiratory': ('NBK560612', 'Neonatal Respiratory Distress'),
    'obstructive lung': ('NBK559281', 'Obstructive Lung Disease'),
    'pda': ('NBK430758', 'Patent Ductus Arteriosus'),
    'coarctation': ('NBK430913', 'Coarctation of the Aorta'),
    'personality disorder': ('NBK556058', 'Personality Disorders'),
    'pft': ('NBK537323', 'Pulmonary Function Testing'),
    'pituitary': ('NBK459187', 'Pituitary Adenoma'),
    'placental': ('NBK532260', 'Placental Disorders'),
    'potassium': ('NBK539791', 'Potassium Disorders'),
    'renal function': ('NBK507807', 'Renal Physiology'),
    'respiratory embryology': ('NBK544370', 'Respiratory Development'),
    'syncope': ('NBK526027', 'Syncope'),
    'arrhythmia': ('NBK526027', 'Cardiac Arrhythmias'),
    'thrombocytopenia': ('NBK560637', 'Thrombocytopenia'),
    'ttp': ('NBK430721', 'Thrombotic Thrombocytopenic Purpura'),
    'hus': ('NBK459240', 'Hemolytic Uremic Syndrome'),
    'dic': ('NBK560632', 'Disseminated Intravascular Coagulation'),
    'transfusion': ('NBK499824', 'Transfusion Reactions'),
    'valvular': ('NBK513276', 'Valvular Heart Disease'),
    'well-child': ('NBK557518', 'Developmental Milestones'),
    'adrenal': ('NBK537260', 'Adrenal Insufficiency'),
    'cushing': ('NBK470218', 'Cushing Syndrome'),
    'addison': ('NBK537260', 'Adrenal Insufficiency'),
    'pediatric': ('NBK470560', 'Pediatric Assessment'),
    'clinical reasoning': ('NBK470627', 'Clinical Reasoning'),
    'upj obstruction': ('NBK561499', 'UPJ Obstruction'),
    'testicular': ('NBK563163', 'Testicular Cancer'),
    'aki': ('NBK441896', 'Acute Kidney Injury'),
    'posterior urethral valves': ('NBK547700', 'Posterior Urethral Valves'),
}

def find_refs(title):
    """Find best matching references for a given topic title"""
    title_lower = title.lower()
    refs = []
    seen_nbk = set()
    
    # Direct title match first
    for keyword, (nbk, sp_title) in STATPEARLS.items():
        if keyword in title_lower and nbk not in seen_nbk:
            refs.append({
                'title': f'{sp_title} - StatPearls',
                'url': f'https://www.ncbi.nlm.nih.gov/books/{nbk}/',
                'source': 'StatPearls / NCBI Bookshelf',
                'access': 'Open Access'
            })
            seen_nbk.add(nbk)
    
    # If no matches, try individual words
    if not refs:
        for word in title_lower.split():
            if len(word) < 4:
                continue
            for keyword, (nbk, sp_title) in STATPEARLS.items():
                if word in keyword and nbk not in seen_nbk:
                    refs.append({
                        'title': f'{sp_title} - StatPearls',
                        'url': f'https://www.ncbi.nlm.nih.gov/books/{nbk}/',
                        'source': 'StatPearls / NCBI Bookshelf',
                        'access': 'Open Access'
                    })
                    seen_nbk.add(nbk)
                    break
    
    return refs[:3]  # Max 3 refs per topic

if __name__ == '__main__':
    import json
    # Test
    for title in ['Acute Appendicitis', 'DVT & VTE', 'Seizures and Status Epilepticus', 'Cardiac Embryology']:
        refs = find_refs(title)
        print(f"{title}: {len(refs)} refs")
        for r in refs:
            print(f"  {r['title']}: {r['url']}")
