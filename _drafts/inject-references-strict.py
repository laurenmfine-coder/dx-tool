"""
Strict-policy reference injection. Allowlist:
  - StatPearls (NIH Bookshelf NBK URLs)
  - AHA/ACC published guidelines (ahajournals.org)
  - NIH Bookshelf chapters (other NBK URLs)

Anything else is excluded. Where stripping leaves a puzzle with no
references, we skip the puzzle entirely rather than tag with nothing.
"""

import re
import sys
from pathlib import Path

PUZZLES_FILE = Path('/home/claude/dx-tool/puzzles.html')

# Each entry: (fingerprint, [(citation, url), ...])
# Only StatPearls (NBK), AHA/ACC (ahajournals.org), and NIH Bookshelf
# entries below.
TAGGINGS = [
    # Puzzle 1: PE — keep StatPearls only (drop ESC guideline)
    ('52-year-old male with substernal chest pressure for 2 hours',
     [
        ("Vyas V, Goyal A. Acute Pulmonary Embolism. StatPearls. NIH Bookshelf. Updated 2024.",
         "https://www.ncbi.nlm.nih.gov/books/NBK560551/"),
     ]),
    # Puzzle 2: New MR in CHF — keep StatPearls + AHA/ACC valvular guideline
    ('68-year-old female with progressive dyspnea over 3 weeks',
     [
        ("King KE, Iyer P. Mitral Regurgitation. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK553135/"),
        ("Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation. 2021.",
         "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000923"),
     ]),
    # Puzzle 4: Uncal herniation — keep StatPearls only
    ('78-year-old male found unresponsive',
     [
        ("Patel S, M Das J. Cerebral Herniation. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK542246/"),
     ]),
    # Puzzle 5: SAH vs migraine — keep StatPearls + AHA SAH guideline
    ('Two patients in your ED both present with "worst headache of my life."',
     [
        ("Ziu E, Khan Suheb MZ, Mesfin FB. Subarachnoid Hemorrhage. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK441958/"),
        ("Hoh BL, et al. 2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage. Stroke. 2023.",
         "https://www.ahajournals.org/doi/10.1161/STR.0000000000000436"),
     ]),
    # Puzzle 6: Appendicitis — StatPearls only
    ('35-year-old male with 3 days of right lower quadrant pain',
     [
        ("Jones MW, Lopez RA, Deppen JG. Appendicitis. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK493193/"),
     ]),
    # Puzzle 7: Chest pain risk priority — StatPearls (ACS, dissection)
    ('45-year-old with acute chest pain includes: GERD',
     [
        ("Singh A, Museedi AS, Grossman SA. Acute Coronary Syndrome. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK459157/"),
        ("Levy D, Goyal A, Grujic D. Aortic Dissection. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK441963/"),
     ]),
    # Puzzle 9: ATN/NSAID — StatPearls only (drop AAFP)
    ('58-year-old male with type 2 diabetes, hypertension, and recent NSAID use',
     [
        ("Hanif MO, Bali A, Ramphul K. Acute Tubular Necrosis. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK507815/"),
     ]),
    # Puzzle 10: FENa interpretation — StatPearls only
    ('Patient A: creatinine 4.2, FENa 0.3%',
     [
        ("Goyal A, Daneshpajouhnejad P, Hashmi MF, Bashir K. Acute Kidney Injury. StatPearls. NIH Bookshelf. Updated 2024.",
         "https://www.ncbi.nlm.nih.gov/books/NBK441896/"),
     ]),
    # Puzzle 11: Hemolysis/jaundice — StatPearls only (drop AAFP)
    ('32-year-old female with 3 days of fatigue, jaundice, and dark urine',
     [
        ("Baldwin C, Pandey J, Olarewaju O. Hemolytic Anemia. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK558904/"),
     ]),
    # Puzzle 12: Severe thrombocytopenia — StatPearls only (drop AAFP)
    ('Your patient has a platelet count of 18,000',
     [
        ("Jasti S, Jain D, Mahajan K. Immune Thrombocytopenic Purpura. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK537240/"),
     ]),
    # Puzzle 13: GBS — StatPearls only
    ('45-year-old male with progressive proximal weakness over 3 weeks, aref',
     [
        ("Nguyen TP, Taylor RS. Guillain-Barre Syndrome. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK532254/"),
     ]),
    # Puzzle 14: Meningitis — StatPearls only (drop IDSA)
    ('19-year-old with headache, fever, stiff neck',
     [
        ("Hersi K, Gonzalez FJ, Kondamudi NP. Meningitis. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK459360/"),
     ]),
    # Puzzle 15: RA + anti-CCP — StatPearls only (drop ACR)
    ('38-year-old female with 6 weeks of symmetric small joint arthritis',
     [
        ("Chauhan K, Jandu JS, Brent LH, Al-Dhahir MA. Rheumatoid Arthritis. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK441999/"),
     ]),
    # Puzzle 17: Variceal bleed — StatPearls only (drop AASLD)
    ('62-year-old cirrhotic male with acute hematemesis',
     [
        ("Garbuzenko DV. Esophageal Varices. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK448078/"),
     ]),
    # Puzzle 19: Endocarditis — StatPearls + AHA/ACC valvular
    ('29-year-old male, 5 days of fever, new murmur, history of IV drug use',
     [
        ("Yallowitz AW, Decker LC. Infectious Endocarditis. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK557641/"),
        ("Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation. 2021.",
         "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000923"),
     ]),
    # Puzzle 21: Hyperthyroidism — StatPearls only (drop ATA)
    ('24-year-old female, 3 months of palpitations, heat intolerance',
     [
        ("Mathew P, Rawla P. Hyperthyroidism. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK537053/"),
     ]),
    # Puzzle 22: Pediatric septic arthritis — StatPearls only (drop PMC review)
    ('3-year-old, 3 days of fever 39.8',
     [
        ("Momodu II, Savaliya V. Septic Arthritis. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK538176/"),
     ]),
    # Puzzle 23: First manic episode — StatPearls only
    ('28-year-old male, no psychiatric history: 4 days no sleep, pressured s',
     [
        ("Jain A, Mitra P. Bipolar Disorder. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK558998/"),
     ]),
    # Puzzle 27: Opioid OD — StatPearls only
    ('22-year-old unresponsive at a party',
     [
        ("Schiller EY, Goyal A, Mechanic OJ. Opioid Overdose. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK470415/"),
     ]),
    # Puzzle 28: TB — StatPearls only (drop ATS/IDSA/CDC)
    ('44-year-old nurse, 6 weeks of productive cough, night sweats',
     [
        ("Adigun R, Singh R. Tuberculosis. StatPearls. NIH Bookshelf. Updated 2023.",
         "https://www.ncbi.nlm.nih.gov/books/NBK441916/"),
     ]),
    # Puzzle 30: ED waiting room triage — SKIPPED.
    # Only ref I had was AHRQ ESI guide, which is outside the strict
    # allowlist. There's no StatPearls article on the ESI triage system
    # specifically. Better to leave untagged than tag with a bad
    # substitute or drift policy. Lauren can tag this one when she
    # has a preferred allowlist source.
]


def js_escape(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")


def build_references_field(refs):
    lines = ['    references: [']
    for citation, url in refs:
        lines.append('      {')
        lines.append(f"        citation: '{js_escape(citation)}',")
        lines.append(f"        url: '{js_escape(url)}'")
        lines.append('      },')
    if lines[-1] == '      },':
        lines[-1] = '      }'
    lines.append('    ]')
    return '\n'.join(lines)


def main():
    src = PUZZLES_FILE.read_text()
    applied = 0
    errors = []

    for fingerprint, refs in TAGGINGS:
        idx = src.find(fingerprint)
        if idx < 0:
            errors.append(f"NOT FOUND: {fingerprint[:60]}")
            continue
        if src.find(fingerprint, idx + 1) >= 0:
            errors.append(f"AMBIGUOUS (multiple matches): {fingerprint[:60]}")
            continue

        m = list(re.finditer(r'\n\s{2}\{type:', src[:idx]))
        if not m:
            errors.append(f"NO PUZZLE START: {fingerprint[:60]}")
            continue
        start = m[-1].start() + 1
        open_brace = src.find('{', start)

        depth = 0
        i = open_brace
        in_string = False
        string_char = None
        while i < len(src):
            ch = src[i]
            if in_string:
                if ch == '\\':
                    i += 2
                    continue
                if ch == string_char:
                    in_string = False
            else:
                if ch in ("'", '"'):
                    in_string = True
                    string_char = ch
                elif ch == '{':
                    depth += 1
                elif ch == '}':
                    depth -= 1
                    if depth == 0:
                        break
            i += 1

        if depth != 0:
            errors.append(f"UNBALANCED BRACES: {fingerprint[:60]}")
            continue

        close_brace = i
        puzzle_src = src[open_brace:close_brace + 1]

        if re.search(r'\breferences\s*:', puzzle_src):
            continue

        before_close = puzzle_src.rstrip()[:-1].rstrip()
        if not before_close.endswith(','):
            before_close += ','

        refs_js = build_references_field(refs)
        new_puzzle_src = before_close + '\n' + refs_js + '\n  }'

        src = src[:open_brace] + new_puzzle_src + src[close_brace + 1:]
        applied += 1

    PUZZLES_FILE.write_text(src)

    print(f"Applied: {applied}")
    print(f"Skipped (no allowlist source): puzzle 30 (ED triage)")
    if errors:
        print("\nERRORS:")
        for e in errors:
            print(f"  {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
