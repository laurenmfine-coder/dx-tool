#!/usr/bin/env python3
"""
Add internal linking between related ReasonDx topic pages.
Boosts SEO by helping Google understand site structure and topic relationships.
"""
import re
from pathlib import Path

TOPICS_DIR = Path(__file__).parent.parent / "topics"

# Related topics map: {stem: [related_stem, ...]}
RELATED = {
    "sepsis": ["shock", "aki", "ards", "pneumonia", "infective-endocarditis", "sepsis-shock"],
    "sepsis-shock": ["sepsis", "shock", "aki", "ards"],
    "shock": ["sepsis", "sepsis-shock", "cardiac-tamponade", "tension-pneumothorax", "anaphylaxis", "aki"],
    "aki": ["aki-workup", "sepsis", "hyponatremia", "hyperkalemia", "acid-base", "renal-acid-base"],
    "aki-workup": ["aki", "acid-base", "hyperkalemia", "hyponatremia"],
    "anaphylaxis": ["peds-anaphylaxis", "angioedema", "allergic-rhinitis", "food-allergy", "epinephrine", "urticaria"],
    "peds-anaphylaxis": ["anaphylaxis", "food-allergy", "epinephrine", "angioedema"],
    "angioedema": ["anaphylaxis", "hereditary-angioedema", "hae", "urticaria", "allergic-rhinitis"],
    "hereditary-angioedema": ["angioedema", "hae", "anaphylaxis"],
    "hae": ["hereditary-angioedema", "angioedema", "anaphylaxis"],
    "urticaria": ["urticaria-angioedema", "anaphylaxis", "angioedema", "allergic-rhinitis", "atopic-dermatitis"],
    "urticaria-angioedema": ["urticaria", "angioedema", "anaphylaxis", "chronic-urticaria-angioedema"],
    "chronic-urticaria-angioedema": ["urticaria", "urticaria-angioedema", "angioedema"],
    "allergic-rhinitis": ["anaphylaxis", "asthma", "atopic-dermatitis", "food-allergy", "sinusitis", "immunotherapy-allergy"],
    "asthma": ["asthma-exacerbation", "asthma-biologics", "asthma-phenotyping", "copd", "allergic-rhinitis", "ards"],
    "asthma-exacerbation": ["asthma", "copd-exacerbation", "ards"],
    "asthma-biologics": ["asthma", "asthma-phenotyping", "immunotherapy"],
    "asthma-phenotyping": ["asthma", "asthma-biologics", "allergic-rhinitis"],
    "copd": ["copd-exacerbation", "asthma", "ards", "pneumonia", "obstructive-lung", "respiratory-pft"],
    "copd-exacerbation": ["copd", "asthma-exacerbation", "ards", "pneumonia"],
    "ards": ["sepsis", "pneumonia", "copd-exacerbation", "shock"],
    "pneumonia": ["sepsis", "ards", "copd-exacerbation", "pleural-effusion", "tuberculosis"],
    "stroke": ["ich", "sah", "intracranial-hemorrhage", "tbi-icp", "headache", "afib"],
    "ich": ["stroke", "sah", "intracranial-hemorrhage", "tbi-icp", "headache-icp"],
    "sah": ["ich", "stroke", "headache", "headache-icp", "intracranial-hemorrhage"],
    "intracranial-hemorrhage": ["ich", "sah", "stroke", "tbi-icp"],
    "tbi-icp": ["ich", "stroke", "intracranial-hemorrhage", "headache-icp"],
    "headache": ["headache-icp", "stroke", "meningitis", "sah"],
    "headache-icp": ["headache", "ich", "tbi-icp", "meningitis-encephalitis"],
    "meningitis": ["meningitis-encephalitis", "encephalitis", "sepsis", "headache"],
    "meningitis-encephalitis": ["meningitis", "encephalitis", "headache-icp"],
    "encephalitis": ["meningitis", "meningitis-encephalitis", "altered-mental-status"],
    "afib": ["svt-wpw", "syncope", "syncope-arrhythmia", "stroke", "heart-failure", "valvular-disease"],
    "svt-wpw": ["afib", "syncope-arrhythmia", "acls-rhythms", "ekg"],
    "syncope": ["syncope-arrhythmia", "afib", "shock", "ekg"],
    "syncope-arrhythmia": ["syncope", "afib", "svt-wpw", "acls-rhythms"],
    "acls-rhythms": ["ekg", "afib", "svt-wpw", "syncope-arrhythmia", "acs"],
    "ekg": ["acls-rhythms", "afib", "acs", "svt-wpw"],
    "heart-failure": ["hf", "acs", "afib", "valvular-disease", "aki", "pleural-effusion"],
    "hf": ["heart-failure", "acs", "afib", "valvular-disease"],
    "acs": ["heart-failure", "chest-pain", "afib", "shock", "acls-rhythms", "ekg"],
    "chest-pain": ["acs", "pe", "aortic-dissection", "pneumonia", "tension-pneumothorax"],
    "pe": ["dvt", "dvt-pe", "vte", "vte-pe", "chest-pain", "shock"],
    "dvt": ["pe", "dvt-pe", "vte", "vte-pe"],
    "dvt-pe": ["dvt", "pe", "vte"],
    "vte": ["dvt", "pe", "vte-pe", "antiphospholipid-syndrome"],
    "vte-pe": ["vte", "dvt", "pe"],
    "aortic-dissection": ["chest-pain", "shock", "acs"],
    "tension-pneumothorax": ["tension-ptx", "chest-pain", "shock", "ards"],
    "tension-ptx": ["tension-pneumothorax", "chest-pain", "shock"],
    "cardiac-tamponade": ["shock", "chest-pain", "aortic-dissection"],
    "valvular-disease": ["heart-failure", "afib", "infective-endocarditis", "acs"],
    "infective-endocarditis": ["sepsis", "valvular-disease", "stroke", "aki"],
    "dka": ["diabetic-ketoacidosis", "dka-hhs", "hhs", "diabetes-dka", "acid-base", "aki"],
    "diabetic-ketoacidosis": ["dka", "dka-hhs", "hhs", "acid-base", "hyperkalemia", "aki"],
    "dka-hhs": ["dka", "diabetic-ketoacidosis", "hhs", "hhs-dka-comparison"],
    "hhs": ["dka", "diabetic-ketoacidosis", "dka-hhs", "hhs-dka-comparison"],
    "hhs-dka-comparison": ["hhs", "dka", "diabetic-ketoacidosis"],
    "diabetes-dka": ["dka", "diabetic-ketoacidosis", "hhs"],
    "acid-base": ["acid-base-interpretation", "metabolic-acidosis", "renal-acid-base", "aki"],
    "acid-base-interpretation": ["acid-base", "metabolic-acidosis", "renal-acid-base"],
    "metabolic-acidosis": ["acid-base", "acid-base-interpretation", "dka", "aki"],
    "renal-acid-base": ["acid-base", "aki", "hyperkalemia", "hyponatremia"],
    "hyponatremia": ["electrolytes", "electrolyte-emergencies", "aki", "acid-base", "hyperkalemia"],
    "hyperkalemia": ["electrolytes", "electrolyte-emergencies", "aki", "acid-base", "hyponatremia"],
    "electrolytes": ["electrolyte-emergencies", "hyponatremia", "hyperkalemia", "calcium-disorders", "potassium"],
    "electrolyte-emergencies": ["electrolytes", "hyponatremia", "hyperkalemia", "calcium-disorders"],
    "calcium-disorders": ["electrolytes", "hyperkalemia", "hyponatremia", "hypercalcemia-malignancy"],
    "potassium": ["hyperkalemia", "electrolytes", "aki"],
    "hypercalcemia-malignancy": ["calcium-disorders", "electrolytes"],
    "hypoglycemia": ["dka", "diabetic-ketoacidosis", "altered-mental-status", "seizure"],
    "seizure": ["seizure-disorders", "status-epilepticus", "febrile-seizure", "altered-mental-status", "meningitis"],
    "seizure-disorders": ["seizure", "status-epilepticus", "febrile-seizure"],
    "status-epilepticus": ["seizure", "seizure-disorders", "altered-mental-status"],
    "febrile-seizure": ["seizure", "seizure-disorders", "meningitis"],
    "altered-mental-status": ["delirium", "encephalitis", "meningitis", "stroke", "hypoglycemia", "sepsis"],
    "delirium": ["altered-mental-status", "encephalitis", "sepsis", "alcohol-withdrawal"],
    "acute-pancreatitis": ["pancreatitis", "biliary-disease", "cholecystitis", "acute-liver-failure", "alf"],
    "pancreatitis": ["acute-pancreatitis", "biliary-disease", "cholecystitis"],
    "cholecystitis": ["cholecystitis-cholangitis", "biliary-disease", "acute-pancreatitis", "acute-abdomen"],
    "cholecystitis-cholangitis": ["cholecystitis", "biliary-disease", "sepsis"],
    "biliary-disease": ["cholecystitis", "acute-pancreatitis", "liver-cirrhosis", "hepatitis"],
    "acute-liver-failure": ["alf", "hepatitis", "cirrhosis", "liver-cirrhosis", "acetaminophen-overdose"],
    "alf": ["acute-liver-failure", "hepatitis", "cirrhosis"],
    "cirrhosis": ["liver-cirrhosis", "hepatitis", "acute-liver-failure", "gi-bleed", "gi-bleeding"],
    "liver-cirrhosis": ["cirrhosis", "hepatitis", "acute-liver-failure", "gi-bleed"],
    "hepatitis": ["acute-liver-failure", "cirrhosis", "liver-cirrhosis", "hiv-aids"],
    "gi-bleed": ["gi-bleeding", "cirrhosis", "sbo", "acute-abdomen"],
    "gi-bleeding": ["gi-bleed", "cirrhosis", "bowel-obstruction"],
    "sbo": ["bowel-obstruction", "acute-abdomen", "gi-bleed"],
    "bowel-obstruction": ["sbo", "acute-abdomen", "hernia"],
    "acute-abdomen": ["acute-appendicitis", "appendicitis", "cholecystitis", "sbo", "bowel-obstruction", "pancreatitis"],
    "acute-appendicitis": ["appendicitis", "acute-abdomen", "sbo"],
    "appendicitis": ["acute-appendicitis", "acute-abdomen"],
    "alcohol-withdrawal": ["substance-use", "delirium", "seizure", "altered-mental-status", "liver-cirrhosis"],
    "substance-use": ["alcohol-withdrawal", "opioid-overdose", "altered-mental-status"],
    "opioid-overdose": ["substance-use", "toxidromes", "altered-mental-status"],
    "toxidromes": ["opioid-overdose", "organophosphate", "serotonin-syndrome", "toxic-alcohols", "acetaminophen-overdose"],
    "acetaminophen-overdose": ["apap-overdose", "acute-liver-failure", "toxidromes"],
    "apap-overdose": ["acetaminophen-overdose", "acute-liver-failure", "toxidromes"],
    "serotonin-syndrome": ["toxidromes", "neuroleptic-malignant-syndrome", "malignant-hyperthermia"],
    "neuroleptic-malignant-syndrome": ["nms", "serotonin-syndrome", "malignant-hyperthermia"],
    "nms": ["neuroleptic-malignant-syndrome", "serotonin-syndrome"],
    "malignant-hyperthermia": ["serotonin-syndrome", "neuroleptic-malignant-syndrome"],
    "organophosphate": ["toxidromes", "altered-mental-status"],
    "toxic-alcohols": ["toxidromes", "acid-base", "altered-mental-status"],
    "carbon-monoxide": ["toxidromes", "altered-mental-status", "headache"],
    "salicylate": ["salicylate-poisoning", "toxidromes", "acid-base"],
    "salicylate-poisoning": ["salicylate", "toxidromes", "acid-base"],
    "tuberculosis": ["pneumonia", "hiv-aids", "meningitis"],
    "hiv-aids": ["immunodeficiency", "primary-immunodeficiency", "tuberculosis", "pneumonia"],
    "immunodeficiency": ["primary-immunodeficiency", "hiv-aids", "ivig-scig"],
    "primary-immunodeficiency": ["immunodeficiency", "hiv-aids", "ivig-scig"],
    "ivig-scig": ["primary-immunodeficiency", "immunodeficiency"],
    "food-allergy": ["anaphylaxis", "allergic-rhinitis", "fpies", "atopic-dermatitis"],
    "fpies": ["food-allergy", "anaphylaxis", "atopic-dermatitis"],
    "atopic-dermatitis": ["allergic-rhinitis", "food-allergy", "asthma", "contact-dermatitis"],
    "contact-dermatitis": ["atopic-dermatitis", "drug-allergy", "dress-sjs"],
    "drug-allergy": ["anaphylaxis", "penicillin-delabeling", "dress-sjs", "dress-scar"],
    "penicillin-delabeling": ["drug-allergy", "anaphylaxis"],
    "dress-sjs": ["drug-allergy", "dress-scar", "contact-dermatitis", "derm-emergencies"],
    "dress-scar": ["dress-sjs", "drug-allergy", "derm-emergencies"],
    "derm-emergencies": ["dermatologic-emergencies", "dress-sjs", "cellulitis-necfasc"],
    "dermatologic-emergencies": ["derm-emergencies", "dress-sjs", "cellulitis-necfasc"],
    "cellulitis-abscess": ["cellulitis-necfasc", "osteomyelitis", "diabetic-foot-infection"],
    "cellulitis-necfasc": ["cellulitis-abscess", "nec-fasc", "sepsis"],
    "nec-fasc": ["cellulitis-necfasc", "sepsis", "shock"],
    "osteomyelitis": ["cellulitis-abscess", "sepsis", "diabetic-foot-infection"],
    "diabetic-foot-infection": ["dfi", "osteomyelitis", "cellulitis-abscess", "diabetic-ketoacidosis"],
    "dfi": ["diabetic-foot-infection", "osteomyelitis", "cellulitis-abscess"],
    "pleural-effusion": ["pneumonia", "heart-failure", "cirrhosis", "pe", "tuberculosis"],
    "pft-interpretation": ["respiratory-pft", "copd", "asthma", "obstructive-lung"],
    "respiratory-pft": ["pft-interpretation", "copd", "asthma"],
    "obstructive-lung": ["copd", "asthma", "pft-interpretation", "respiratory-pft"],
    "sickle-cell": ["sickle-cell-disease", "anemia", "aki", "stroke"],
    "sickle-cell-disease": ["sickle-cell", "anemia", "aki"],
    "anemia": ["sickle-cell", "thrombocytopenia", "transfusion-medicine", "hematuria"],
    "thrombocytopenia": ["dic", "ttp", "ttp-hus", "anemia", "transfusion-medicine"],
    "dic": ["thrombocytopenia", "sepsis", "shock", "ttp"],
    "ttp": ["ttp-hus", "thrombocytopenia", "dic", "aki"],
    "ttp-hus": ["ttp", "thrombocytopenia", "aki"],
    "transfusion-medicine": ["anemia", "thrombocytopenia", "dic"],
    "antiphospholipid-syndrome": ["vte", "sle", "thrombocytopenia"],
    "sle": ["antiphospholipid-syndrome", "vasculitis", "rheumatoid-arthritis", "scleroderma"],
    "vasculitis": ["sle", "rheumatoid-arthritis", "scleroderma", "inflammatory-myopathy"],
    "rheumatoid-arthritis": ["sle", "vasculitis", "gout-pseudogout", "spondyloarthropathy"],
    "gout-pseudogout": ["rheumatoid-arthritis", "spondyloarthropathy"],
    "spondyloarthropathy": ["rheumatoid-arthritis", "gout-pseudogout"],
    "scleroderma": ["sle", "vasculitis", "inflammatory-myopathy"],
    "inflammatory-myopathy": ["sle", "vasculitis", "scleroderma"],
    "multiple-sclerosis": ["ms", "mse", "guillain-barre", "gbs", "myasthenia-gravis"],
    "ms": ["multiple-sclerosis", "mse", "guillain-barre"],
    "mse": ["ms", "multiple-sclerosis"],
    "guillain-barre": ["gbs", "multiple-sclerosis", "myasthenia-gravis"],
    "gbs": ["guillain-barre", "multiple-sclerosis", "myasthenia-gravis"],
    "myasthenia-gravis": ["myasthenia-crisis", "myasthenic-crisis", "guillain-barre", "multiple-sclerosis"],
    "myasthenia-crisis": ["myasthenia-gravis", "myasthenic-crisis", "guillain-barre"],
    "myasthenic-crisis": ["myasthenia-crisis", "myasthenia-gravis"],
    "spinal-cord": ["spinal-cord-compression", "ms", "tbi-icp", "trauma"],
    "spinal-cord-compression": ["spinal-cord", "trauma", "ms"],
    "thyroid": ["thyroid-storm", "myxedema-coma", "thyroid-deep-dive", "pituitary-disorders"],
    "thyroid-storm": ["thyroid", "myxedema-coma", "adrenal-crisis"],
    "thyroid-deep-dive": ["thyroid", "thyroid-storm", "myxedema-coma"],
    "myxedema-coma": ["thyroid", "thyroid-storm", "adrenal-crisis"],
    "adrenal-crisis": ["adrenal-disorders", "thyroid-storm", "shock"],
    "adrenal-disorders": ["adrenal-crisis", "pituitary-disorders", "electrolytes"],
    "pituitary-disorders": ["adrenal-disorders", "thyroid", "electrolytes"],
    "meningitis": ["meningitis-encephalitis", "encephalitis", "headache", "sepsis"],
    "preeclampsia": ["placental-abruption", "placental-disorders", "labor-delivery", "ectopic-pregnancy"],
    "placental-abruption": ["preeclampsia", "placental-disorders", "postpartum-hemorrhage"],
    "placental-disorders": ["placental-abruption", "preeclampsia", "labor-delivery"],
    "postpartum-hemorrhage": ["pph", "placental-disorders", "labor-delivery"],
    "pph": ["postpartum-hemorrhage", "placental-disorders"],
    "labor-delivery": ["labor-stages", "preeclampsia", "placental-disorders"],
    "labor-stages": ["labor-delivery", "preeclampsia"],
    "ectopic-pregnancy": ["preeclampsia", "ovarian-torsion", "acute-abdomen"],
    "ovarian-torsion": ["ectopic-pregnancy", "acute-abdomen", "pid-toa"],
    "pid-toa": ["ovarian-torsion", "ectopic-pregnancy", "uti-pyelonephritis"],
    "uti-pyelonephritis": ["pyelonephritis", "aki", "sepsis", "pid-toa"],
    "pyelonephritis": ["uti-pyelonephritis", "aki", "sepsis"],
    "kidney-stones": ["aki", "uti-pyelonephritis", "hematuria"],
    "hematuria": ["kidney-stones", "aki", "rcc", "bladder-cancer"],
    "rcc": ["hematuria", "bladder-cancer", "aki"],
    "bladder-cancer": ["hematuria", "rcc", "prostate-cancer"],
    "prostate-cancer": ["bladder-cancer", "rcc", "bph"],
    "bph": ["prostate-cancer", "hematuria", "urinary-incontinence"],
    "urinary-incontinence": ["bph", "neurogenic-bladder", "pyelonephritis"],
    "neurogenic-bladder": ["urinary-incontinence", "spinal-cord", "ms"],
    "schizophrenia": ["psychosis", "bipolar", "bipolar-disorder", "antipsychotic"],
    "psychosis": ["schizophrenia", "bipolar", "altered-mental-status", "antipsychotic"],
    "bipolar": ["bipolar-disorder", "schizophrenia", "depression"],
    "bipolar-disorder": ["bipolar", "schizophrenia", "depression"],
    "depression": ["bipolar", "anxiety", "substance-use", "antidepressant"],
    "anxiety": ["depression", "substance-use", "antidepressant"],
    "antidepressant": ["depression", "anxiety", "serotonin-syndrome"],
    "antipsychotic": ["schizophrenia", "psychosis", "neuroleptic-malignant-syndrome"],
    "personality-disorders": ["schizophrenia", "depression", "anxiety"],
    "psychopharmacology": ["antidepressant", "antipsychotic", "schizophrenia", "bipolar"],
    "neutropenic-fever": ["sepsis", "immunodeficiency", "hiv-aids"],
    "acute-leukemia": ["neutropenic-fever", "thrombocytopenia", "anemia", "dic"],
    "fuo": ["sepsis", "tuberculosis", "hiv-aids", "immunodeficiency"],
    "kawasaki": ["kawasaki-disease", "vasculitis", "febrile-seizure"],
    "kawasaki-disease": ["kawasaki", "vasculitis"],
    "trauma": ["tbi-icp", "spinal-cord", "shock", "burns"],
    "burns": ["trauma", "shock", "wound-healing"],
    "wound-healing": ["burns", "cellulitis-abscess", "osteomyelitis"],
    "immunotherapy": ["immunotherapy-allergy", "asthma-biologics", "allergic-rhinitis"],
    "immunotherapy-allergy": ["immunotherapy", "allergic-rhinitis", "anaphylaxis"],
    "epinephrine": ["anaphylaxis", "peds-anaphylaxis", "acls-rhythms", "shock"],
    "inhaler-spacer": ["asthma", "copd", "asthma-exacerbation"],
    "allergy-testing": ["allergic-rhinitis", "food-allergy", "drug-allergy", "anaphylaxis"],
    "eosinophilia": ["eosinophilia-workup", "allergic-rhinitis", "asthma", "parasites"],
    "eosinophilia-workup": ["eosinophilia", "allergic-rhinitis", "asthma"],
    "mast-cell": ["mast-cell-disorders", "anaphylaxis", "urticaria"],
    "mast-cell-disorders": ["mast-cell", "anaphylaxis", "urticaria", "hae"],
    "venom-allergy": ["venom-vit", "anaphylaxis", "immunotherapy-allergy"],
    "venom-vit": ["venom-allergy", "anaphylaxis", "immunotherapy"],
}

def get_title(stem):
    """Convert stem to readable title."""
    html_path = TOPICS_DIR / f"{stem}.html"
    if html_path.exists():
        content = html_path.read_text(encoding='utf-8', errors='ignore')
        m = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
        if m:
            return re.sub(r'<[^>]+>', '', m.group(1)).strip()
    return stem.replace('-', ' ').title()

def build_related_block(stem):
    related = RELATED.get(stem, [])
    # Filter to only existing pages
    existing = [(r, get_title(r)) for r in related if (TOPICS_DIR / f"{r}.html").exists()]
    if not existing:
        return None
    
    links = ''.join([
        f'<a href="{r}.html" style="display:inline-flex;align-items:center;gap:6px;background:#f0f7fc;border:1px solid #d4e8f7;border-radius:20px;padding:6px 14px;font-size:13px;font-weight:500;color:#1f5f8b;text-decoration:none;transition:all .15s" onmouseover="this.style.background=\'#d4e8f7\'" onmouseout="this.style.background=\'#f0f7fc\'">{t}</a>'
        for r, t in existing[:6]  # max 6 related links
    ])
    
    return f'''
<section style="max-width:720px;margin:0 auto;padding:0 24px 48px">
  <h2 style="font-family:var(--rdx-font-serif,serif);font-size:18px;color:#1e293b;font-weight:400;margin-bottom:16px">Related Topics</h2>
  <div style="display:flex;flex-wrap:wrap;gap:8px">{links}</div>
</section>'''

def already_has_related(html_path):
    return 'Related Topics' in html_path.read_text(encoding='utf-8', errors='ignore')

def main():
    files = sorted(TOPICS_DIR.glob("*.html"))
    processed = skipped = no_related = 0

    for f in files:
        stem = f.stem
        if already_has_related(f):
            skipped += 1
            continue
        if stem not in RELATED:
            no_related += 1
            continue

        block = build_related_block(stem)
        if not block:
            no_related += 1
            continue

        content = f.read_text(encoding='utf-8', errors='ignore')
        # Insert before </body>
        if '</body>' in content:
            new_content = content.replace('</body>', f'{block}\n</body>', 1)
            f.write_text(new_content, encoding='utf-8')
            processed += 1
        else:
            no_related += 1

    print(f"Done: {processed} pages linked, {skipped} already done, {no_related} no related defined")

if __name__ == "__main__":
    main()
