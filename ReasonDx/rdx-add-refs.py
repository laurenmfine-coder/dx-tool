#!/usr/bin/env python3
"""
rdx-add-refs.py — Add evidence-based references to modules and deep dives.
Maps clinical topics to relevant open-access references.
"""
import os, re, json, glob, html

# === Reference database: map keywords to StatPearls/open-access URLs ===
REF_DB = {
    'anaphylaxis': [
        ('Anaphylaxis', 'https://www.ncbi.nlm.nih.gov/books/NBK482124/', 'StatPearls'),
        ('AAAAI Anaphylaxis Practice Parameter', 'https://www.jacionline.org/article/S0091-6749(15)00151-7/fulltext', 'JACI 2015'),
        ('WAO Anaphylaxis Guidance', 'https://doi.org/10.1186/s40413-020-00266-3', 'WAO Journal 2020'),
    ],
    'asthma': [
        ('Asthma', 'https://www.ncbi.nlm.nih.gov/books/NBK430901/', 'StatPearls'),
        ('GINA Global Strategy for Asthma', 'https://ginasthma.org/gina-reports/', 'GINA 2024'),
        ('Biologic Therapies in Severe Asthma', 'https://doi.org/10.1016/j.jaci.2019.10.032', 'JACI 2020'),
    ],
    'cellulitis': [
        ('Cellulitis', 'https://www.ncbi.nlm.nih.gov/books/NBK549770/', 'StatPearls'),
        ('IDSA Practice Guidelines for SSTI', 'https://doi.org/10.1093/cid/ciu296', 'CID 2014'),
    ],
    'necrotizing': [
        ('Necrotizing Fasciitis', 'https://www.ncbi.nlm.nih.gov/books/NBK430756/', 'StatPearls'),
        ('IDSA Practice Guidelines for SSTI', 'https://doi.org/10.1093/cid/ciu296', 'CID 2014'),
    ],
    'appendicitis': [
        ('Appendicitis', 'https://www.ncbi.nlm.nih.gov/books/NBK493193/', 'StatPearls'),
        ('ACS Guidelines for Appendicitis', 'https://doi.org/10.1016/j.jamcollsurg.2021.09.006', 'JACS 2022'),
    ],
    'dka': [
        ('Diabetic Ketoacidosis', 'https://www.ncbi.nlm.nih.gov/books/NBK534848/', 'StatPearls'),
        ('ADA Standards of Care in Diabetes', 'https://diabetesjournals.org/care/issue/47/Supplement_1', 'Diabetes Care 2024'),
    ],
    'diabetes': [
        ('Diabetes Mellitus', 'https://www.ncbi.nlm.nih.gov/books/NBK551501/', 'StatPearls'),
        ('ADA Standards of Care in Diabetes', 'https://diabetesjournals.org/care/issue/47/Supplement_1', 'Diabetes Care 2024'),
    ],
    'sepsis': [
        ('Sepsis', 'https://www.ncbi.nlm.nih.gov/books/NBK459174/', 'StatPearls'),
        ('Surviving Sepsis Campaign Guidelines', 'https://doi.org/10.1097/CCM.0000000000005337', 'Crit Care Med 2021'),
    ],
    'pneumonia': [
        ('Pneumonia', 'https://www.ncbi.nlm.nih.gov/books/NBK513321/', 'StatPearls'),
        ('ATS/IDSA CAP Guidelines', 'https://doi.org/10.1164/rccm.201908-1581ST', 'AJRCCM 2019'),
    ],
    'heart failure': [
        ('Heart Failure', 'https://www.ncbi.nlm.nih.gov/books/NBK430873/', 'StatPearls'),
        ('AHA/ACC Heart Failure Guidelines', 'https://doi.org/10.1016/j.jacc.2021.12.012', 'JACC 2022'),
    ],
    'seizure': [
        ('Seizures', 'https://www.ncbi.nlm.nih.gov/books/NBK430765/', 'StatPearls'),
        ('AAN/AES Status Epilepticus Guidelines', 'https://doi.org/10.1212/WNL.0000000000201045', 'Neurology 2023'),
    ],
    'meningitis': [
        ('Meningitis', 'https://www.ncbi.nlm.nih.gov/books/NBK459360/', 'StatPearls'),
        ('IDSA Meningitis Guidelines', 'https://doi.org/10.1093/cid/cir034', 'CID 2017'),
    ],
    'dvt': [
        ('Deep Venous Thrombosis', 'https://www.ncbi.nlm.nih.gov/books/NBK507708/', 'StatPearls'),
        ('ASH VTE Guidelines', 'https://doi.org/10.1182/bloodadvances.2020003411', 'Blood Adv 2020'),
    ],
    'pulmonary embolism': [
        ('Pulmonary Embolism', 'https://www.ncbi.nlm.nih.gov/books/NBK560551/', 'StatPearls'),
        ('ESC PE Guidelines', 'https://doi.org/10.1093/eurheartj/ehz405', 'Eur Heart J 2019'),
    ],
    'thyroid': [
        ('Thyroid Disease', 'https://www.ncbi.nlm.nih.gov/books/NBK537053/', 'StatPearls'),
        ('ATA Thyroid Guidelines', 'https://doi.org/10.1089/thy.2015.0020', 'Thyroid 2016'),
    ],
    'urticaria': [
        ('Urticaria', 'https://www.ncbi.nlm.nih.gov/books/NBK538196/', 'StatPearls'),
        ('EAACI/GA²LEN/EDF/WAO Urticaria Guideline', 'https://doi.org/10.1111/all.14773', 'Allergy 2022'),
    ],
    'angioedema': [
        ('Angioedema', 'https://www.ncbi.nlm.nih.gov/books/NBK538489/', 'StatPearls'),
        ('WAO/EAACI Angioedema Guidelines', 'https://doi.org/10.1186/s40413-021-00375-9', 'WAO J 2022'),
    ],
    'gi bleed': [
        ('GI Bleeding', 'https://www.ncbi.nlm.nih.gov/books/NBK537291/', 'StatPearls'),
        ('ACG Guidelines on Upper GI Bleeding', 'https://doi.org/10.14309/ajg.0000000000001245', 'Am J Gastroenterol 2021'),
    ],
    'acid-base': [
        ('Acid-Base Disorders', 'https://www.ncbi.nlm.nih.gov/books/NBK507807/', 'StatPearls'),
        ('Approach to Acid-Base Disorders', 'https://doi.org/10.1681/ASN.2018101025', 'JASN 2019'),
    ],
    'acls': [
        ('Advanced Cardiac Life Support', 'https://www.ncbi.nlm.nih.gov/books/NBK482181/', 'StatPearls'),
        ('AHA ACLS Guidelines', 'https://doi.org/10.1161/CIR.0000000000000916', 'Circulation 2020'),
    ],
    'copd': [
        ('COPD', 'https://www.ncbi.nlm.nih.gov/books/NBK559281/', 'StatPearls'),
        ('GOLD COPD Strategy', 'https://goldcopd.org/gold-reports/', 'GOLD 2024'),
    ],
    'cirrhosis': [
        ('Cirrhosis', 'https://www.ncbi.nlm.nih.gov/books/NBK482419/', 'StatPearls'),
        ('AASLD Cirrhosis Guidelines', 'https://doi.org/10.1002/hep.31884', 'Hepatology 2021'),
    ],
    'electrolyte': [
        ('Electrolyte Disorders', 'https://www.ncbi.nlm.nih.gov/books/NBK459316/', 'StatPearls'),
        ('Fluid & Electrolyte Management', 'https://doi.org/10.1056/NEJMra1614179', 'NEJM 2015'),
    ],
    'stroke': [
        ('Stroke', 'https://www.ncbi.nlm.nih.gov/books/NBK535369/', 'StatPearls'),
        ('AHA/ASA Stroke Guidelines', 'https://doi.org/10.1161/STR.0000000000000375', 'Stroke 2019'),
    ],
    'immunodeficiency': [
        ('Primary Immunodeficiency', 'https://www.ncbi.nlm.nih.gov/books/NBK551620/', 'StatPearls'),
        ('AAAAI Practice Parameter: Immunodeficiency', 'https://doi.org/10.1016/j.jaci.2015.03.025', 'JACI 2015'),
    ],
    'allergy': [
        ('Allergic Diseases', 'https://www.ncbi.nlm.nih.gov/books/NBK447113/', 'StatPearls'),
        ('AAAAI/ACAAI Allergy Practice Parameters', 'https://www.allergyparameters.org/', 'Joint Task Force'),
    ],
    'penicillin': [
        ('Penicillin Allergy', 'https://www.ncbi.nlm.nih.gov/books/NBK459320/', 'StatPearls'),
        ('AAAAI/ACAAI Drug Allergy Practice Parameter', 'https://doi.org/10.1016/j.anai.2022.01.006', 'AACI 2022'),
    ],
    'venom': [
        ('Hymenoptera Venom Allergy', 'https://www.ncbi.nlm.nih.gov/books/NBK518967/', 'StatPearls'),
        ('AAAAI Venom Immunotherapy Practice Parameter', 'https://doi.org/10.1016/j.jaci.2016.01.018', 'JACI 2017'),
    ],
    'ecg': [
        ('ECG Interpretation', 'https://www.ncbi.nlm.nih.gov/books/NBK549803/', 'StatPearls'),
        ('AHA ECG Interpretation Standards', 'https://doi.org/10.1016/j.jacc.2009.10.013', 'JACC 2009'),
    ],
    'embryology': [
        ('Embryology Overview', 'https://www.ncbi.nlm.nih.gov/books/NBK554437/', 'StatPearls'),
        ("Langman's Medical Embryology (reference)", 'https://www.ncbi.nlm.nih.gov/books/', 'NLM Bookshelf'),
    ],
    'cardiac': [
        ('Cardiac Embryology', 'https://www.ncbi.nlm.nih.gov/books/NBK537313/', 'StatPearls'),
        ('Congenital Heart Disease', 'https://www.ncbi.nlm.nih.gov/books/NBK537047/', 'StatPearls'),
    ],
    'neonatal': [
        ('Neonatal Respiratory Distress', 'https://www.ncbi.nlm.nih.gov/books/NBK560779/', 'StatPearls'),
        ('AAP Neonatal Resuscitation Guidelines', 'https://doi.org/10.1542/peds.2020-038562A', 'Pediatrics 2021'),
    ],
    'pediatric': [
        ('Pediatric Assessment', 'https://www.ncbi.nlm.nih.gov/books/NBK558975/', 'StatPearls'),
        ('AAP Bright Futures Guidelines', 'https://doi.org/10.1542/9781610020244', 'AAP 2017'),
    ],
    'cholecyst': [
        ('Cholecystitis', 'https://www.ncbi.nlm.nih.gov/books/NBK459171/', 'StatPearls'),
        ('Tokyo Guidelines for Acute Cholecystitis', 'https://doi.org/10.1002/jhbp.515', 'J Hepatobiliary 2018'),
    ],
    'liver': [
        ('Acute Liver Failure', 'https://www.ncbi.nlm.nih.gov/books/NBK482374/', 'StatPearls'),
        ('AASLD Acute Liver Failure Guidelines', 'https://doi.org/10.1002/hep.22759', 'Hepatology 2005'),
    ],
    'pancreatitis': [
        ('Pancreatitis', 'https://www.ncbi.nlm.nih.gov/books/NBK482468/', 'StatPearls'),
        ('ACG Acute Pancreatitis Guidelines', 'https://doi.org/10.14309/ajg.0000000000001667', 'Am J Gastroenterol 2024'),
    ],
    'bowel obstruction': [
        ('Small Bowel Obstruction', 'https://www.ncbi.nlm.nih.gov/books/NBK441975/', 'StatPearls'),
        ('WSES SBO Guidelines', 'https://doi.org/10.1186/s13017-017-0162-2', 'World J Emerg Surg 2017'),
    ],
    'myasthenia': [
        ('Myasthenia Gravis', 'https://www.ncbi.nlm.nih.gov/books/NBK559331/', 'StatPearls'),
        ('AAN Myasthenia Gravis Practice Parameter', 'https://doi.org/10.1212/WNL.0000000000201750', 'Neurology 2021'),
    ],
    'dress': [
        ('DRESS Syndrome', 'https://www.ncbi.nlm.nih.gov/books/NBK459159/', 'StatPearls'),
        ('Drug Hypersensitivity Classification', 'https://doi.org/10.1016/j.jaci.2019.01.029', 'JACI 2019'),
    ],
    'contraception': [
        ('Contraception', 'https://www.ncbi.nlm.nih.gov/books/NBK536949/', 'StatPearls'),
        ('CDC Contraception Guidelines (US MEC)', 'https://www.cdc.gov/reproductivehealth/contraception/', 'CDC 2024'),
    ],
    'syncope': [
        ('Syncope', 'https://www.ncbi.nlm.nih.gov/books/NBK526027/', 'StatPearls'),
        ('ESC Syncope Guidelines', 'https://doi.org/10.1093/eurheartj/ehy037', 'Eur Heart J 2018'),
    ],
    'anemia': [
        ('Anemia', 'https://www.ncbi.nlm.nih.gov/books/NBK499994/', 'StatPearls'),
        ('WHO Anaemia Guidelines', 'https://doi.org/10.1002/ajh.26746', 'Am J Hematol 2022'),
    ],
    'default': [
        ('Clinical Medicine Overview', 'https://www.ncbi.nlm.nih.gov/books/', 'NLM Bookshelf'),
        ('Evidence-Based Medicine Resources', 'https://www.cochranelibrary.com/', 'Cochrane Library'),
    ],
}

def get_refs_for_topic(filename):
    """Match filename to reference database entries"""
    name = filename.lower().replace('.html', '').replace('.json', '')
    name = name.replace('-module', '').replace('-crt', '').replace('-expanded', '')
    name = name.replace('-adventure', '').replace('-dual-adventure', '').replace('-deep-dive', '')
    
    matched_refs = []
    for keyword, refs in REF_DB.items():
        if keyword == 'default': continue
        if keyword in name:
            matched_refs.extend(refs)
    
    # Deduplicate by URL
    seen = set()
    unique = []
    for title, url, source in matched_refs:
        if url not in seen:
            seen.add(url)
            unique.append((title, url, source))
    
    # If no match, use default
    if not unique:
        unique = REF_DB['default']
    
    return unique[:5]  # Max 5 refs

def build_ref_html(refs):
    """Build HTML reference section"""
    items = ''
    for i, (title, url, source) in enumerate(refs, 1):
        items += f'<li><strong>{html.escape(title)}</strong>. <em>{html.escape(source)}</em>. <a href="{html.escape(url)}" target="_blank" rel="noopener">{html.escape(url)}</a></li>\n'
    
    return f'''
<div class="rdx-references" style="max-width:900px;margin:32px auto;padding:24px;border-top:1px solid var(--rdx-border,#e2e8f0)">
<h3 style="font-family:'DM Serif Display',Georgia,serif;font-size:18px;color:var(--rdx-text,#1e293b);margin-bottom:12px;font-weight:400">References</h3>
<ol class="rdx-ref-list" style="list-style:none;padding:0;counter-reset:ref-counter">
{items}</ol>
</div>
'''

def inject_refs_html(filepath):
    """Inject references into an HTML module or case file"""
    with open(filepath, 'r', errors='replace') as f:
        content = f.read()
    
    # Skip if already has references
    if 'rdx-references' in content or 'ncbi.nlm.nih.gov' in content.lower():
        return False
    
    refs = get_refs_for_topic(os.path.basename(filepath))
    ref_html = build_ref_html(refs)
    
    # Insert before </body> or last </div></div></div>
    if '</body>' in content:
        content = content.replace('</body>', ref_html + '\n</body>', 1)
    elif '</html>' in content:
        content = content.replace('</html>', ref_html + '\n</html>', 1)
    else:
        content += ref_html
    
    with open(filepath, 'w') as f:
        f.write(content)
    return True

def inject_refs_json(filepath):
    """Add references to deep dive JSON files"""
    try:
        with open(filepath, 'r') as f:
            data = json.load(f)
    except:
        return False
    
    # Skip if already has proper references with URLs
    existing = data.get('references', [])
    has_urls = any(isinstance(r, dict) and r.get('url', '').startswith('http') 
                   for r in existing) if existing else False
    if has_urls:
        return False
    
    refs = get_refs_for_topic(os.path.basename(filepath))
    data['references'] = [
        {'citation': title, 'url': url, 'source': source, 'access': 'Open Access'}
        for title, url, source in refs
    ]
    
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    return True

if __name__ == '__main__':
    import sys
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    
    total = 0
    
    if target in ('all', 'modules'):
        files = sorted(glob.glob('modules/*.html'))
        modified = sum(1 for f in files if inject_refs_html(f))
        print(f"Modules: {modified}/{len(files)} updated with references")
        total += modified
    
    if target in ('all', 'cases'):
        files = sorted(glob.glob('cases/*.html'))
        modified = sum(1 for f in files if inject_refs_html(f))
        print(f"Cases: {modified}/{len(files)} updated with references")
        total += modified
    
    if target in ('all', 'deepdives'):
        files = sorted(glob.glob('data/deep-dives/*.json'))
        modified = sum(1 for f in files if inject_refs_json(f))
        print(f"Deep dives: {modified}/{len(files)} updated with references")
        total += modified
    
    if target in ('all', 'topics'):
        files = sorted(glob.glob('topics/*.html'))
        modified = sum(1 for f in files if inject_refs_html(f))
        print(f"Topics: {modified}/{len(files)} updated with references")
        total += modified
    
    print(f"\nTotal files updated: {total}")
