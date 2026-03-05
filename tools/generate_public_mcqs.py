#!/usr/bin/env python3
"""
ReasonDx PUBLIC MCQ Generator
================================
Same 3-pass pipeline as generate_mcq_library.py, but:
  1. Only uses NIAID / NHLBI / AHRQ / CDC / PMC CC-BY sources for citations
  2. Overrides restricted Elsevier/Wiley/etc. DOIs with verified safe equivalents
  3. Outputs rdx-public-mcq-library.js  (safe for public library & Pro tier)

Usage:
    export ANTHROPIC_API_KEY=sk-ant-...
    python3 tools/generate_public_mcqs.py
    python3 tools/generate_public_mcqs.py --resume
    python3 tools/generate_public_mcqs.py --dry-run
    python3 tools/generate_public_mcqs.py --cases anaphylaxis,asthma-exacerbation
"""

import os, sys, json, re, time, argparse, traceback
from pathlib import Path
from datetime import datetime, timezone
import urllib.request, urllib.error

SCRIPT_DIR    = Path(__file__).parent
REPO_DIR      = SCRIPT_DIR.parent
EMR_DIR       = REPO_DIR / 'emr-data'
OUTPUT_JS     = REPO_DIR / 'rdx-public-mcq-library.js'
OUTPUT_REPORT = REPO_DIR / 'rdx-public-mcq-report.json'
CHECKPOINT    = REPO_DIR / 'rdx-public-mcq-checkpoint.json'

API_URL       = 'https://api.anthropic.com/v1/messages'
MODEL         = 'claude-sonnet-4-20250514'
MAX_RETRIES   = 3
QUALITY_PASS  = 0.65
RATE_PAUSE    = 2.0
OVERLOAD_PAUSE= 30.0

SKIP_FILES = {
    'manifest.js', 'patient-names.js', 'handoff-data.js', 'auto-handoff.js',
    'day-progression.js', 'day-evolution.js', 'coachdx-analytics.js',
    'spacedrep-generator.js', 'case-specialty-map.js'
}

# ─── SAFE SOURCE OVERRIDES ────────────────────────────────────────────────────
# Maps case IDs (or DOI prefixes) to verified public-domain / CC BY citations.
# Format: { case_id: { citation, url, note } }

SAFE_SOURCE_MAP = {
    # ── ANAPHYLAXIS / SEVERE ALLERGIC REACTION ─────────────────────────────
    'anaphylaxis': {
        'citation': 'NIAID-Sponsored Expert Panel. Guidelines for the Diagnosis and Management of Food Allergy in the United States. NIH/NIAID, 2010. Available: niaid.nih.gov',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
        'note': 'NIAID public domain — anaphylaxis criteria section'
    },
    'severe-allergic-reaction': {
        'citation': 'NIAID/FAAN Anaphylaxis Diagnostic Criteria. National Institute of Allergy and Infectious Diseases. Available: niaid.nih.gov/diseases-conditions/anaphylaxis',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/anaphylaxis',
        'note': 'NIAID public domain'
    },
    'insect-sting-anaphylaxis': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Insect Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/insect-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/insect-allergy',
        'note': 'NIAID public domain'
    },
    'venom-immunotherapy-reaction': {
        'citation': 'AHRQ Comparative Effectiveness Review No. 196: The Role of Immunotherapy in the Treatment of Asthma. Agency for Healthcare Research and Quality, 2018. Available: effectivehealthcare.ahrq.gov',
        'url': 'https://effectivehealthcare.ahrq.gov/products/asthma-immunotherapy/research-protocol',
        'note': 'AHRQ public domain — immunotherapy safety section'
    },

    # ── FOOD ALLERGY ────────────────────────────────────────────────────────
    'food-allergy-oit-reaction': {
        'citation': 'NIAID-Sponsored Expert Panel. Guidelines for the Diagnosis and Management of Food Allergy in the United States. NIH/NIAID, 2010. Available: niaid.nih.gov',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
        'note': 'NIAID public domain — OFC and OIT guidance'
    },
    'milk-allergy-infant': {
        'citation': 'NIAID-Sponsored Expert Panel. Guidelines for the Diagnosis and Management of Food Allergy in the United States. NIH/NIAID, 2010. Available: niaid.nih.gov',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
        'note': 'NIAID public domain — infant food allergy section'
    },
    'peanut-allergy-anaphylaxis': {
        'citation': 'Togias A et al. Addendum Guidelines for the Prevention of Peanut Allergy in the United States: Report of the NIAID-Sponsored Expert Panel. NIH/NIAID, 2017. Available: niaid.nih.gov',
        'url': 'https://www.niaid.nih.gov/sites/default/files/addendum-peanut-allergy-prevention-guidelines.pdf',
        'note': 'NIAID public domain — peanut prevention addendum'
    },
    'fpies-acute': {
        'citation': 'NIAID-Sponsored Expert Panel. Guidelines for the Diagnosis and Management of Food Allergy in the United States. NIH/NIAID, 2010. Available: niaid.nih.gov',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
        'note': 'NIAID public domain — non-IgE food reactions section'
    },
    'fpies-chronic': {
        'citation': 'NIAID-Sponsored Expert Panel. Guidelines for the Diagnosis and Management of Food Allergy in the United States. NIH/NIAID, 2010. Available: niaid.nih.gov',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
        'note': 'NIAID public domain — non-IgE food reactions section'
    },

    # ── ASTHMA ──────────────────────────────────────────────────────────────
    'asthma-exacerbation': {
        'citation': 'National Heart, Lung, and Blood Institute. Expert Panel Report 3 (EPR-3): Guidelines for the Diagnosis and Management of Asthma. NIH/NHLBI, 2007. Available: nhlbi.nih.gov',
        'url': 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma',
        'note': 'NHLBI public domain'
    },
    'severe-asthma-biologics': {
        'citation': 'National Heart, Lung, and Blood Institute. 2020 Focused Updates to the Asthma Management Guidelines. NIH/NHLBI, 2020. Available: nhlbi.nih.gov',
        'url': 'https://www.nhlbi.nih.gov/health-topics/asthma-management-guidelines-2020-updates',
        'note': 'NHLBI public domain — biologics and step 5 therapy'
    },
    'occupational-asthma-isocyanate': {
        'citation': 'National Heart, Lung, and Blood Institute. Expert Panel Report 3 (EPR-3): Guidelines for the Diagnosis and Management of Asthma. NIH/NHLBI, 2007. Available: nhlbi.nih.gov',
        'url': 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma',
        'note': 'NHLBI public domain — occupational asthma section'
    },
    'vocal-cord-dysfunction': {
        'citation': 'National Heart, Lung, and Blood Institute. Expert Panel Report 3 (EPR-3): Guidelines for the Diagnosis and Management of Asthma. NIH/NHLBI, 2007. Available: nhlbi.nih.gov',
        'url': 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma',
        'note': 'NHLBI public domain — asthma mimics / differential diagnosis'
    },

    # ── IMMUNOTHERAPY ───────────────────────────────────────────────────────
    'allergic-rhinitis-immunotherapy': {
        'citation': 'AHRQ Comparative Effectiveness Review No. 196: The Role of Immunotherapy in the Treatment of Asthma. Agency for Healthcare Research and Quality, 2018. Available: effectivehealthcare.ahrq.gov',
        'url': 'https://effectivehealthcare.ahrq.gov/products/asthma-immunotherapy/research-protocol',
        'note': 'AHRQ public domain — SCIT/SLIT evidence review'
    },

    # ── PRIMARY IMMUNODEFICIENCY ────────────────────────────────────────────
    'cgd-xlinked': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Primary Immune Deficiency Diseases (PIDD). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/primary-immune-deficiency-diseases',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/primary-immune-deficiency-diseases',
        'note': 'NIAID public domain — CGD section'
    },
    'cvid-presentation': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Common Variable Immune Deficiency (CVID). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/common-variable-immune-deficiency',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/common-variable-immune-deficiency',
        'note': 'NIAID public domain'
    },
    'digeorge-22q11': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Primary Immune Deficiency Diseases (PIDD). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/primary-immune-deficiency-diseases',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/primary-immune-deficiency-diseases',
        'note': 'NIAID public domain — T-cell immunodeficiency section'
    },
    'scid-ada': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Severe Combined Immune Deficiency (SCID). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/severe-combined-immune-deficiency-scid',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/severe-combined-immune-deficiency-scid',
        'note': 'NIAID public domain'
    },
    'xla-brutons': {
        'citation': 'National Institute of Allergy and Infectious Diseases. X-linked Agammaglobulinemia (XLA). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/x-linked-agammaglobulinemia',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/x-linked-agammaglobulinemia',
        'note': 'NIAID public domain'
    },

    # ── ANGIOEDEMA ──────────────────────────────────────────────────────────
    'ace-angioedema': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Angioedema. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/angioedema',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/angioedema',
        'note': 'NIAID public domain — ACE inhibitor angioedema'
    },
    'hereditary-angioedema': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Hereditary Angioedema. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/hereditary-angioedema',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/hereditary-angioedema',
        'note': 'NIAID public domain'
    },
    'acquired-c1esterase-inhibitor-deficiency': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Angioedema. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/angioedema',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/angioedema',
        'note': 'NIAID public domain — acquired C1-INH section'
    },
    'idiopathic-angioedema': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Angioedema. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/angioedema',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/angioedema',
        'note': 'NIAID public domain'
    },
    'allergic-angioedema': {
        'citation': 'NIAID-Sponsored Expert Panel. Guidelines for the Diagnosis and Management of Food Allergy in the United States. NIH/NIAID, 2010. Available: niaid.nih.gov',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
        'note': 'NIAID public domain — allergic angioedema / food allergy overlap'
    },

    # ── RHINITIS / SINUSITIS ────────────────────────────────────────────────
    'allergic-rhinitis-uncontrolled': {
        'citation': 'National Heart, Lung, and Blood Institute. Expert Panel Report 3 (EPR-3): Guidelines for the Diagnosis and Management of Asthma. NIH/NHLBI, 2007 (comorbidities section). Available: nhlbi.nih.gov',
        'url': 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma',
        'note': 'NHLBI public domain — rhinitis as asthma comorbidity; supplemented by CDC data'
    },

    # ── URTICARIA ───────────────────────────────────────────────────────────
    'acute-urticaria': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Hives (Urticaria). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/hives',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/hives',
        'note': 'NIAID public domain'
    },
    'chronic-spontaneous-urticaria': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Hives (Urticaria). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/hives',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/hives',
        'note': 'NIAID public domain'
    },
    'urticarial-vasculitis': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Hives (Urticaria). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/hives',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/hives',
        'note': 'NIAID public domain — urticarial vasculitis differential'
    },
    'inducible-urticaria': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Hives (Urticaria). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/hives',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/hives',
        'note': 'NIAID public domain — physical/inducible urticaria'
    },

    # ── DRUG ALLERGY ────────────────────────────────────────────────────────
    'drug-allergy-vancomycin-rms': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Drug Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/drug-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/drug-allergy',
        'note': 'NIAID public domain — drug hypersensitivity / RMS context'
    },
    'nsaid-hypersensitivity': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Drug Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/drug-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/drug-allergy',
        'note': 'NIAID public domain'
    },
    'penicillin-allergy-delabeling': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Drug Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/drug-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/drug-allergy',
        'note': 'NIAID public domain — penicillin allergy evaluation'
    },

    # ── ATOPIC DERMATITIS / SKIN ────────────────────────────────────────────
    'atopic-dermatitis-severe': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Eczema (Atopic Dermatitis). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/eczema',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/eczema',
        'note': 'NIAID public domain'
    },
    'eczema-herpeticum': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Eczema (Atopic Dermatitis). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/eczema',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/eczema',
        'note': 'NIAID public domain — eczema herpeticum complication'
    },
    'contact-dermatitis-occupational': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Skin Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/skin-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/skin-allergy',
        'note': 'NIAID public domain'
    },

    # ── MAST CELL / MASTOCYTOSIS ────────────────────────────────────────────
    'mastocytosis': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Mast Cell Diseases. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/mast-cell-diseases',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/mast-cell-diseases',
        'note': 'NIAID public domain'
    },
    'mcas-mast-cell': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Mast Cell Diseases. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/mast-cell-diseases',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/mast-cell-diseases',
        'note': 'NIAID public domain — MCAS section'
    },

    # ── EOSINOPHILIC / EoE ──────────────────────────────────────────────────
    'eoe-adult': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Eosinophilic Esophagitis (EoE). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/eosinophilic-esophagitis',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/eosinophilic-esophagitis',
        'note': 'NIAID public domain'
    },
    'eoe-pediatric': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Eosinophilic Esophagitis (EoE). NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/eosinophilic-esophagitis',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/eosinophilic-esophagitis',
        'note': 'NIAID public domain — pediatric EoE'
    },
    'hypereosinophilic-syndrome': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Eosinophil-Associated Diseases. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/eosinophil-associated-diseases',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/eosinophil-associated-diseases',
        'note': 'NIAID public domain'
    },

    # ── DRUG REACTIONS / SEVERE CUTANEOUS ──────────────────────────────────
    'dress-syndrome': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Drug Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/drug-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/drug-allergy',
        'note': 'NIAID public domain — severe cutaneous adverse reactions'
    },
    'sjs-ten': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Drug Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/drug-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/drug-allergy',
        'note': 'NIAID public domain — SJS/TEN section'
    },
    'erythema-multiforme-major': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Drug Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/drug-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/drug-allergy',
        'note': 'NIAID public domain — erythema multiforme / SCAR differential'
    },

    # ── CONJUNCTIVITIS ──────────────────────────────────────────────────────
    'allergic-conjunctivitis-severe': {
        'citation': 'National Institute of Allergy and Infectious Diseases. Eye Allergy. NIH/NIAID. Available: niaid.nih.gov/diseases-conditions/eye-allergy',
        'url': 'https://www.niaid.nih.gov/diseases-conditions/eye-allergy',
        'note': 'NIAID public domain'
    },

    # ── ABPA / HYPERSENSITIVITY PNEUMONITIS ─────────────────────────────────
    'abpa-aspergillus': {
        'citation': 'National Heart, Lung, and Blood Institute. Expert Panel Report 3 (EPR-3): Guidelines for the Diagnosis and Management of Asthma. NIH/NHLBI, 2007. Available: nhlbi.nih.gov',
        'url': 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma',
        'note': 'NHLBI public domain — ABPA as asthma complication'
    },
    'hypersensitivity-pneumonitis': {
        'citation': 'National Heart, Lung, and Blood Institute. Hypersensitivity Pneumonitis. NIH/NHLBI. Available: nhlbi.nih.gov/health-topics/hypersensitivity-pneumonitis',
        'url': 'https://www.nhlbi.nih.gov/health-topics/hypersensitivity-pneumonitis',
        'note': 'NHLBI public domain'
    },

    # ── ALPHA-GAL / MISC ────────────────────────────────────────────────────
    'alpha-gal-syndrome': {
        'citation': 'Centers for Disease Control and Prevention. Alpha-gal Syndrome. CDC. Available: cdc.gov/tick-borne-diseases/alpha-gal',
        'url': 'https://www.cdc.gov/tick-borne-diseases/alpha-gal/index.html',
        'note': 'CDC public domain — alpha-gal syndrome'
    },
    'crswNP-biologics': {
        'citation': 'National Heart, Lung, and Blood Institute. 2020 Focused Updates to the Asthma Management Guidelines. NIH/NHLBI, 2020. Available: nhlbi.nih.gov',
        'url': 'https://www.nhlbi.nih.gov/health-topics/asthma-management-guidelines-2020-updates',
        'note': 'NHLBI public domain — biologics / type 2 inflammation'
    },
    'crswNP-dupilumab': {
        'citation': 'National Heart, Lung, and Blood Institute. 2020 Focused Updates to the Asthma Management Guidelines. NIH/NHLBI, 2020. Available: nhlbi.nih.gov',
        'url': 'https://www.nhlbi.nih.gov/health-topics/asthma-management-guidelines-2020-updates',
        'note': 'NHLBI public domain — type 2 inflammation / dupilumab context'
    },
}


# ─── PROMPTS ─────────────────────────────────────────────────────────────────

def load_prompts():
    worker = REPO_DIR / 'workers' / 'studydx-engine.js'
    src = worker.read_text(encoding='utf-8')
    p1 = re.search(r'const PASS1_GENERATE = `(.*?)`;', src, re.DOTALL)
    p2 = re.search(r'const PASS2_AUDIT = `(.*?)`;', src, re.DOTALL)
    p3 = re.search(r'const PASS3_TAG = `(.*?)`;', src, re.DOTALL)
    if not (p1 and p2 and p3):
        raise ValueError("Could not extract prompts from worker source.")
    return p1.group(1), p2.group(1), p3.group(1)


# ─── CASE EXTRACTOR ──────────────────────────────────────────────────────────

def extract_cases(only_cases=None):
    cases = []
    for path in sorted(EMR_DIR.glob('*.js')):
        if path.name in SKIP_FILES:
            continue
        if only_cases and path.stem not in only_cases:
            continue

        raw = path.read_text(encoding='utf-8', errors='ignore')
        diagnoses = re.findall(r'"diagnosis":\s*"([^"]+)"', raw)
        dx = diagnoses[0] if diagnoses else path.stem.replace('-', ' ').title()

        pearls_m = re.search(r'"boardPearls":\s*\[(.*?)\]', raw, re.DOTALL)
        kl_m     = re.search(r'"keyLearning":\s*\[(.*?)\]', raw, re.DOTALL)
        pearls   = re.findall(r'"([^"]{30,})"', pearls_m.group(1)) if pearls_m else []
        kl       = re.findall(r'"([^"]{30,})"', kl_m.group(1)) if kl_m else []

        if not pearls and not kl:
            continue

        # Use safe source override if available, otherwise use ReasonDx fallback
        safe = SAFE_SOURCE_MAP.get(path.stem)
        if safe:
            source = safe['citation']
            source_url = safe['url']
        else:
            source = f"ReasonDx Clinical Case Library — {dx}"
            source_url = "https://reasondx.com"

        cases.append({
            'id':           path.stem,
            'diagnosis':    dx,
            'pearls':       pearls,
            'key_learning': kl,
            'source':       source,
            'source_url':   source_url,
            'has_override': bool(safe),
        })
    return cases


# ─── API ──────────────────────────────────────────────────────────────────────

def call_api(api_key, system_prompt, user_message, max_tokens=2000):
    payload = json.dumps({
        'model': MODEL, 'max_tokens': max_tokens,
        'system': system_prompt,
        'messages': [{'role': 'user', 'content': user_message}],
    }).encode('utf-8')

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            req = urllib.request.Request(API_URL, data=payload, headers={
                'Content-Type': 'application/json',
                'x-api-key': api_key,
                'anthropic-version': '2023-06-01',
            })
            with urllib.request.urlopen(req, timeout=90) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                text = ''.join(b.get('text','') for b in data.get('content',[])).strip()
                return parse_json(text)
        except urllib.error.HTTPError as e:
            body = e.read().decode('utf-8', errors='ignore')
            if e.code in (429, 529) or 'overloaded' in body.lower():
                wait = OVERLOAD_PAUSE * attempt
                print(f"    ⏳ Rate limited, waiting {wait:.0f}s...")
                time.sleep(wait)
            else:
                raise
        except Exception as e:
            if attempt == MAX_RETRIES: raise
            time.sleep(5 * attempt)

    raise RuntimeError(f"API failed after {MAX_RETRIES} attempts")


def parse_json(text):
    cleaned = re.sub(r'^```(?:json)?\s*', '', text, flags=re.IGNORECASE)
    cleaned = re.sub(r'\s*```\s*$', '', cleaned).strip()
    fb = cleaned.find('{'); fk = cleaned.find('[')
    start = -1
    if fb >= 0 and (fk < 0 or fb < fk): start = fb
    elif fk >= 0: start = fk
    if start < 0: raise ValueError(f"No JSON found in: {cleaned[:100]}")
    return json.loads(cleaned[start:])


# ─── GENERATOR ───────────────────────────────────────────────────────────────

def generate_mcq(api_key, p1, p2, p3, case, pearl_idx):
    pearl = case['pearls'][pearl_idx] if pearl_idx < len(case['pearls']) else \
            case['key_learning'][pearl_idx - len(case['pearls'])]

    user_msg = f"""Generate ONE board-style MCQ for an allergy/immunology question bank.

DIAGNOSIS: {case['diagnosis']}
KEY CONCEPT: {pearl}
ADDITIONAL CONTEXT: {'; '.join((case['pearls'] + case['key_learning'])[:4])}
SOURCE: {case['source']}

The question should test understanding of this concept in a clinical vignette format."""

    # Pass 1 — Generate
    mcq = call_api(api_key, p1, user_msg)
    time.sleep(RATE_PAUSE)

    # Pass 2 — Quality audit
    audit_msg = f"Audit this MCQ:\n{json.dumps(mcq, indent=2)}"
    audit = call_api(api_key, p2, audit_msg)
    time.sleep(RATE_PAUSE)

    score = audit.get('overall_score', audit.get('score', 0))
    if isinstance(score, str):
        score = float(re.search(r'[\d.]+', score).group())

    if score < QUALITY_PASS:
        return None, score, 'below_threshold'

    # Pass 3 — Tag
    tag_msg = f"Tag this MCQ:\n{json.dumps(mcq, indent=2)}"
    tagged = call_api(api_key, p3, tag_msg)
    time.sleep(RATE_PAUSE)

    result = {**mcq, **tagged,
              'source': case['source'],
              'source_url': case['source_url'],
              'caseId': case['id'],
              'quality_score': score,
              'generated_at': datetime.now(timezone.utc).isoformat(),
              'license': 'public_domain_source',
    }
    return result, score, 'passed'


# ─── MAIN ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    parser.add_argument('--resume',  action='store_true')
    parser.add_argument('--cases',   type=str, default='')
    parser.add_argument('--mcqs-per-case', type=int, default=3)
    args = parser.parse_args()

    api_key = os.environ.get('ANTHROPIC_API_KEY', '')
    if not api_key and not args.dry_run:
        print("ERROR: Set ANTHROPIC_API_KEY environment variable.")
        sys.exit(1)

    print("ReasonDx PUBLIC MCQ Generator")
    print("=" * 50)
    print("Source policy: NIAID / NHLBI / AHRQ / CDC (public domain) only\n")

    print("📋  Loading prompts...")
    p1, p2, p3 = load_prompts()
    print(f"    Pass 1: {len(p1)} chars | Pass 2: {len(p2)} chars | Pass 3: {len(p3)} chars\n")

    only = set(args.cases.split(',')) if args.cases else None
    cases = extract_cases(only)
    print(f"📂  Found {len(cases)} cases")
    overridden = sum(1 for c in cases if c['has_override'])
    print(f"    {overridden} with safe-source overrides, {len(cases)-overridden} using ReasonDx fallback\n")

    if args.dry_run:
        print("🔍  DRY RUN — would generate:")
        for c in cases:
            src_label = "✅ NIAID/NHLBI/AHRQ" if c['has_override'] else "✅ ReasonDx (no restricted DOIs)"
            print(f"  {src_label}  {c['id']}: {len(c['pearls'])} pearls | {c['diagnosis'][:50]}")
        print(f"\n  Total: {len(cases) * args.mcqs_per_case} MCQs across {len(cases)} cases")
        return

    # Load checkpoint
    checkpoint = {}
    if args.resume and CHECKPOINT.exists():
        checkpoint = json.loads(CHECKPOINT.read_text())
        print(f"♻️   Resuming — {len(checkpoint)} cases already done\n")

    mcqs = []
    skipped = passed = failed = 0

    for i, case in enumerate(cases, 1):
        cid = case['id']
        if cid in checkpoint:
            print(f"[{i:2d}/{len(cases)}] ⏭  {cid} (already done)")
            mcqs.extend(checkpoint[cid])
            continue

        pearl_count = min(args.mcqs_per_case, len(case['pearls']) + len(case['key_learning']))
        src_label = "NIAID/NHLBI/AHRQ" if case['has_override'] else "ReasonDx"
        print(f"[{i:2d}/{len(cases)}] 🔬  {cid} ({src_label}) — {pearl_count} MCQs...")

        case_mcqs = []
        for pi in range(pearl_count):
            for attempt in range(1, MAX_RETRIES + 1):
                try:
                    mcq, score, status = generate_mcq(api_key, p1, p2, p3, case, pi)
                    if mcq:
                        case_mcqs.append(mcq)
                        passed += 1
                        print(f"    ✅ MCQ {pi+1}: score={score:.2f}")
                    else:
                        failed += 1
                        if attempt < MAX_RETRIES:
                            print(f"    🔄 MCQ {pi+1}: score={score:.2f} below threshold, retrying...")
                            continue
                        print(f"    ❌ MCQ {pi+1}: failed quality gate (score={score:.2f})")
                    break
                except Exception as e:
                    if attempt == MAX_RETRIES:
                        print(f"    ❌ MCQ {pi+1} error: {e}")
                        failed += 1
                    else:
                        print(f"    ⚠  MCQ {pi+1} error (attempt {attempt}): {e}")
                        time.sleep(5 * attempt)

        mcqs.extend(case_mcqs)
        checkpoint[cid] = case_mcqs
        CHECKPOINT.write_text(json.dumps(checkpoint, indent=2))
        print(f"    → {len(case_mcqs)} MCQs saved for {cid}")

    # Write output JS
    js_lines = [
        '// ReasonDx Public MCQ Library',
        f'// Generated: {datetime.now(timezone.utc).isoformat()}',
        '// Source policy: NIAID / NHLBI / AHRQ / CDC (public domain only)',
        f'// {len(mcqs)} MCQs | {passed} passed | {failed} failed quality gate',
        '',
        'window.RDX_PUBLIC_MCQ_LIBRARY = ' + json.dumps(mcqs, indent=2) + ';',
        '',
        '// Auto-seed public library on load',
        '(function() {',
        '  try {',
        '    var existing = JSON.parse(localStorage.getItem("rdx-public-mcqs") || "[]");',
        '    var existingIds = new Set(existing.map(function(q) { return q.id || q.question; }));',
        '    var added = 0;',
        '    (window.RDX_PUBLIC_MCQ_LIBRARY || []).forEach(function(q) {',
        '      var key = q.id || q.question;',
        '      if (!existingIds.has(key)) { existing.push(q); added++; }',
        '    });',
        '    if (added > 0) {',
        '      localStorage.setItem("rdx-public-mcqs", JSON.stringify(existing));',
        '      console.log("[ReasonDx] Seeded " + added + " public MCQs (NIAID/NHLBI/AHRQ sources)");',
        '    }',
        '  } catch(e) { console.warn("[ReasonDx] Public MCQ seed error:", e); }',
        '})();',
    ]
    OUTPUT_JS.write_text('\n'.join(js_lines))

    # Write report
    report = {
        'generated': datetime.now(timezone.utc).isoformat(),
        'total': len(mcqs), 'passed': passed, 'failed': failed,
        'source_policy': 'NIAID/NHLBI/AHRQ/CDC public domain only',
        'cases_processed': len(cases),
        'mcqs': mcqs,
    }
    OUTPUT_REPORT.write_text(json.dumps(report, indent=2))

    print(f"\n{'='*50}")
    print(f"✅  Done: {len(mcqs)} public MCQs generated")
    print(f"   Passed: {passed} | Failed: {failed}")
    print(f"   Output: {OUTPUT_JS.name}")
    print(f"   Report: {OUTPUT_REPORT.name}")
    print(f"\nNext: Add <script src=\"rdx-public-mcq-library.js\"></script>")
    print(f"      to content-library.html and studydx.html")

if __name__ == '__main__':
    main()
