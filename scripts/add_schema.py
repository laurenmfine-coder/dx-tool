#!/usr/bin/env python3
"""
Add JSON-LD schema markup to all ReasonDx topic pages.
Marks pages as EducationalResource + MedicalWebPage for Google.
"""
import re
import json
from pathlib import Path

TOPICS_DIR = Path(__file__).parent.parent / "topics"

# FAQ content for pages that have SEO blocks
FAQS = {
    "anaphylaxis": [
        ("What are the criteria for diagnosing anaphylaxis?", "Anaphylaxis is diagnosed when acute onset illness involves skin/mucosal symptoms plus either respiratory compromise or cardiovascular collapse, OR when two or more body systems are affected after exposure to a likely allergen, OR when blood pressure drops after exposure to a known allergen."),
        ("What is the first-line treatment for anaphylaxis?", "Intramuscular epinephrine (0.3-0.5mg of 1:1000 solution) to the anterolateral thigh is the first-line treatment. Antihistamines and corticosteroids are adjuncts only and should never replace epinephrine."),
        ("What causes biphasic anaphylaxis?", "Biphasic anaphylaxis occurs in 5-20% of cases when symptoms recur 1-72 hours after the initial reaction without re-exposure to the allergen. This is why a 4-6 hour observation period is recommended after anaphylaxis."),
    ],
    "sepsis": [
        ("What are the Sepsis-3 diagnostic criteria?", "Sepsis-3 defines sepsis as life-threatening organ dysfunction caused by a dysregulated host response to infection, identified by a SOFA score increase of 2 or more points. Septic shock is a subset with vasopressor requirement to maintain MAP ≥65 mmHg and lactate >2 mmol/L despite adequate resuscitation."),
        ("What is the sepsis 1-hour bundle?", "The surviving sepsis campaign 1-hour bundle includes: measuring lactate, obtaining blood cultures before antibiotics, administering broad-spectrum antibiotics, beginning 30mL/kg crystalloid for hypotension or lactate ≥4 mmol/L, and applying vasopressors if hypotension persists."),
        ("How do you differentiate sepsis from SIRS?", "SIRS (systemic inflammatory response syndrome) can occur from non-infectious causes like pancreatitis or trauma. Sepsis requires a suspected or confirmed infectious source. Procalcitonin and lactate help differentiate, though clinical context is most important."),
    ],
    "acute-pancreatitis": [
        ("What are the diagnostic criteria for acute pancreatitis?", "Acute pancreatitis requires two of three criteria: characteristic abdominal pain (epigastric, radiating to back), serum lipase or amylase ≥3 times upper limit of normal, or characteristic imaging findings on CT or MRI."),
        ("What causes acute pancreatitis?", "Gallstones and alcohol account for 70-80% of cases. Other causes include hypertriglyceridemia, medications (azathioprine, thiazides, valproate), ERCP, trauma, and autoimmune pancreatitis. Idiopathic pancreatitis accounts for 10-15%."),
        ("How is acute pancreatitis severity classified?", "The Revised Atlanta Classification categorizes pancreatitis as mild (no organ failure, no local complications), moderately severe (transient organ failure <48h or local complications), or severe (persistent organ failure >48h). The BISAP score predicts severe disease."),
    ],
    "stroke": [
        ("What does BE-FAST stand for in stroke recognition?", "BE-FAST stands for Balance (sudden loss), Eyes (vision changes), Face drooping, Arm weakness, Speech difficulty, and Time to call emergency services. It is used for rapid prehospital stroke recognition."),
        ("What is the time window for tPA in ischemic stroke?", "IV alteplase (tPA) is indicated within 4.5 hours of symptom onset in eligible patients. Mechanical thrombectomy for large vessel occlusion can be performed up to 24 hours from onset in select patients with favorable perfusion imaging."),
        ("How do you differentiate ischemic from hemorrhagic stroke?", "CT head without contrast is the first imaging study and immediately identifies hemorrhage (hyperdense). Ischemic stroke may appear normal on initial CT. MRI diffusion-weighted imaging (DWI) is more sensitive for early ischemic changes."),
    ],
    "aki": [
        ("What is the KDIGO definition of acute kidney injury?", "KDIGO defines AKI as increase in serum creatinine ≥0.3 mg/dL within 48 hours, or ≥1.5 times baseline within 7 days, or urine output <0.5 mL/kg/h for ≥6 hours."),
        ("How do you differentiate prerenal from intrinsic AKI?", "FENa <1% suggests prerenal (kidneys avidly retaining sodium), while FENa >2% suggests ATN. However, FENa can be falsely low in contrast nephropathy and myoglobinuria. Urine sediment showing granular muddy brown casts strongly suggests ATN."),
        ("What medications commonly cause AKI?", "Common nephrotoxic medications include NSAIDs (reduce renal prostaglandins), ACE inhibitors/ARBs (reduce GFR in low-flow states), aminoglycosides (proximal tubular toxicity), vancomycin, contrast agents, and calcineurin inhibitors."),
    ],
    "alcohol-withdrawal": [
        ("What is the CIWA-Ar scale?", "The Clinical Institute Withdrawal Assessment for Alcohol-Revised (CIWA-Ar) is a 10-item scale scoring nausea, tremor, diaphoresis, anxiety, agitation, perceptual disturbances, headache, and orientation. Scores guide benzodiazepine dosing in symptom-triggered protocols."),
        ("When do alcohol withdrawal seizures occur?", "Alcohol withdrawal seizures typically occur 6-48 hours after the last drink, peaking around 24 hours. They are usually generalized tonic-clonic and brief. Prior seizure history is the strongest predictor of future seizures."),
        ("What is delirium tremens?", "Delirium tremens (DTs) is the most severe form of alcohol withdrawal, occurring in 3-5% of patients, typically 48-96 hours after last drink. It is characterized by autonomic instability (tachycardia, hypertension, fever), severe agitation, confusion, and hallucinations, with mortality up to 5% if untreated."),
    ],
    "afib": [
        ("What is the CHA₂DS₂-VASc score used for?", "CHA₂DS₂-VASc estimates stroke risk in non-valvular atrial fibrillation. Points are assigned for CHF, Hypertension, Age ≥75 (2 points), Diabetes, prior Stroke/TIA (2 points), Vascular disease, Age 65-74, and female Sex. Anticoagulation is recommended for scores ≥2 in men, ≥3 in women."),
        ("What is the difference between rate control and rhythm control in AFib?", "Rate control targets heart rate <110 bpm at rest using beta-blockers, calcium channel blockers, or digoxin without restoring sinus rhythm. Rhythm control aims to restore and maintain sinus rhythm using cardioversion, antiarrhythmics, or ablation. Both strategies have similar outcomes in most patients."),
        ("What causes new-onset atrial fibrillation?", "Common precipitants include cardiac causes (heart failure, valvular disease, CAD), pulmonary causes (PE, pneumonia, COPD), metabolic causes (thyrotoxicosis, electrolyte abnormalities), and external triggers (alcohol, caffeine, surgery, sepsis)."),
    ],
    "dka": [
        ("What are the diagnostic criteria for DKA?", "DKA requires all three: blood glucose >250 mg/dL (though can be lower in euglycemic DKA), arterial pH <7.3 or serum bicarbonate <18 mEq/L, and positive serum or urine ketones. Severity is classified as mild (pH 7.25-7.30), moderate (7.00-7.24), or severe (<7.00)."),
        ("Why is potassium replacement critical in DKA management?", "Insulin drives potassium intracellularly, rapidly dropping serum levels. Despite normal or high initial potassium (due to acidosis-driven extracellular shift), total body potassium is depleted. Insulin must be held until potassium is ≥3.5 mEq/L to prevent life-threatening hypokalemia and cardiac arrhythmias."),
        ("What is euglycemic DKA?", "Euglycemic DKA occurs with glucose <250 mg/dL, increasingly recognized with SGLT2 inhibitor use (empagliflozin, dapagliflozin). The glucosuria from SGLT2 inhibitors masks hyperglycemia while ketogenesis continues. Clinicians must maintain a high index of suspicion in diabetic patients on these medications presenting with acidosis."),
    ],
    "heart-failure": [
        ("What is the difference between HFrEF and HFpEF?", "HFrEF (ejection fraction <40%) involves impaired systolic contraction, while HFpEF (EF ≥50%) involves impaired diastolic relaxation with preserved contractility. HFmrEF (40-49%) is a borderline category. Treatment differs significantly — GDMT with proven mortality benefit applies primarily to HFrEF."),
        ("What are the four pillars of GDMT for HFrEF?", "Guideline-directed medical therapy for HFrEF includes: ACE inhibitor/ARB/ARNI (sacubitril-valsartan preferred), beta-blocker (carvedilol, metoprolol succinate, bisoprolol), mineralocorticoid receptor antagonist (spironolactone, eplerenone), and SGLT2 inhibitor (dapagliflozin, empagliflozin) — each with independent mortality benefit."),
        ("What triggers acute decompensated heart failure?", "Common precipitants include medication or dietary non-adherence (excess sodium/fluid), arrhythmias (especially new AFib), myocardial ischemia, infection/sepsis, uncontrolled hypertension, and pulmonary embolism. Identifying and treating the precipitant is essential alongside diuresis."),
    ],
    "pneumonia": [
        ("How is community-acquired pneumonia severity assessed?", "The CURB-65 score assigns one point each for Confusion, BUN >19, Respiratory rate ≥30, Blood pressure <90/60, and age ≥65. Score 0-1: outpatient; score 2: consider hospitalization; score ≥3: hospital admission, ICU evaluation for score ≥4-5."),
        ("What empiric antibiotics treat community-acquired pneumonia?", "Outpatient low-risk CAP: amoxicillin or doxycycline. Outpatient with comorbidities: respiratory fluoroquinolone or beta-lactam plus macrolide. Inpatient non-ICU: beta-lactam plus macrolide or respiratory fluoroquinolone. ICU: beta-lactam plus azithromycin or fluoroquinolone, with anti-pseudomonal coverage if risk factors present."),
        ("When should Legionella urinary antigen be tested?", "Legionella urinary antigen is recommended in severe CAP (ICU admission), CAP with hyponatremia, travel-associated pneumonia, outbreak situations, or pneumonia unresponsive to beta-lactam therapy. It detects serogroup 1, which causes 80% of Legionella pneumonia."),
    ],
}

def get_topic_title(html_path):
    content = html_path.read_text(encoding='utf-8')
    match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if match:
        return re.sub(r'<[^>]+>', '', match.group(1)).strip()
    return html_path.stem.replace('-', ' ').title()

def build_schema(title, url_path, description, faqs=None):
    schema = {
        "@context": "https://schema.org",
        "@type": ["MedicalWebPage", "EducationalResource"],
        "name": f"{title} — Clinical Reasoning | ReasonDx",
        "description": description,
        "url": f"https://www.reasondx.com/topics/{url_path}",
        "educationalLevel": "HigherEducation",
        "educationalUse": "Clinical Reasoning Practice",
        "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "student"
        },
        "provider": {
            "@type": "Organization",
            "name": "ReasonDx",
            "url": "https://www.reasondx.com"
        },
        "about": {
            "@type": "MedicalCondition",
            "name": title
        }
    }

    result = [json.dumps(schema, indent=2)]

    if faqs:
        faq_schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": a
                    }
                }
                for q, a in faqs
            ]
        }
        result.append(json.dumps(faq_schema, indent=2))

    return result

def build_faq_html(faqs):
    items = ""
    for q, a in faqs:
        items += f"""
  <div style="border-bottom:1px solid #e2e8f0;padding:16px 0">
    <h3 style="font-size:15px;font-weight:600;color:#1e293b;margin-bottom:8px">{q}</h3>
    <p style="font-size:14px;color:#475569;line-height:1.6;margin:0">{a}</p>
  </div>"""
    return f"""
<section style="max-width:720px;margin:0 auto;padding:0 24px 48px">
  <h2 style="font-family:var(--rdx-font-serif,serif);font-size:20px;color:#1e293b;font-weight:400;margin-bottom:4px">Frequently Asked Questions</h2>
  <p style="font-size:13px;color:#94a3b8;margin-bottom:16px">Common clinical reasoning questions about this topic</p>
  <div>{items}
  </div>
</section>"""

def process_page(html_path):
    stem = html_path.stem
    content = html_path.read_text(encoding='utf-8')

    # Skip if already has schema
    if 'schema.org' in content:
        return 'skipped'

    title = get_topic_title(html_path)

    # Get description from meta tag
    desc_match = re.search(r'<meta name="description" content="([^"]+)"', content)
    description = desc_match.group(1) if desc_match else f"{title} clinical reasoning module on ReasonDx."

    # Build schema tags
    schemas = build_schema(title, html_path.name, description, FAQS.get(stem))
    schema_tags = "\n".join([f'<script type="application/ld+json">\n{s}\n</script>' for s in schemas])

    # Inject schema into <head>
    content = content.replace('</head>', f'{schema_tags}\n</head>', 1)

    # Add FAQ HTML if we have FAQ content and SEO block exists
    if stem in FAQS and 'rdx-seo-content' in content:
        faq_html = build_faq_html(FAQS[stem])
        content = content.replace('</body>', f'{faq_html}\n</body>', 1)

    html_path.write_text(content, encoding='utf-8')
    return 'processed'

def main():
    topic_files = sorted(TOPICS_DIR.glob("*.html"))
    processed = skipped = 0

    for f in topic_files:
        result = process_page(f)
        if result == 'processed':
            processed += 1
            print(f"  ✓ {f.stem}")
        else:
            skipped += 1

    print(f"\nDone: {processed} processed, {skipped} skipped (already have schema)")

if __name__ == "__main__":
    main()
