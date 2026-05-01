"""
Insert the 5 approved puzzles (puzzle 1-5 from the live review) into
puzzles.html, just before the PUZZLES array closes.

Idempotent: detects if the marker comment is already present and skips
if so. Run once per batch.
"""

import sys
from pathlib import Path

PUZZLES_FILE = Path('/home/claude/dx-tool/puzzles.html')
MARKER = '// ── BATCH 1 (live review session, May 2026) ──'

# JS source of the 5 new puzzles. Indented to match the file's style.
NEW_PUZZLES_JS = '''
  // ── BATCH 1 (live review session, May 2026) ──
  // Five puzzles reviewed and approved by Lauren in a live drafting
  // session. Each follows the new content rules: clinical reasoning
  // focus, no medication dosing, strict open-access references only,
  // prompts that explicitly invite every scored keyConcept.

  {type:'Distinguishing Case',scenario:'A 22-year-old woman presents to urgent care 30 minutes after eating at a new restaurant. She reports diffuse itching, throat tightness, lightheadedness, and one episode of vomiting. On arrival: BP 96/58, HR 122, RR 22, SpO2 96% on room air. Diffuse urticaria on chest and arms. No stridor on auscultation. She has no prior allergy history.',
    prompt:"A colleague says \\"she has hives and ate something new — give an antihistamine and observe.\\" You think this is anaphylaxis, not just an allergic reaction. (1) Name two findings in the vignette beyond the urticaria that support anaphylaxis over isolated cutaneous reaction. (2) State the organ system involvement that defines anaphylaxis diagnostically. (3) Explain why \\"wait and see if it gets worse\\" is the wrong stance even if she looks stable now.",
    teaching:'Anaphylaxis is a clinical diagnosis defined by acute onset of illness with multi-organ involvement after likely allergen exposure. Two of the following organ systems involved makes the diagnosis: (1) skin/mucosa (urticaria, angioedema, flushing, pruritus), (2) respiratory (dyspnea, wheeze, stridor, hypoxia), (3) cardiovascular (hypotension, tachycardia, syncope), (4) GI (vomiting, cramping, diarrhea). This patient has skin (urticaria, itching), respiratory (throat tightness, tachypnea), cardiovascular (hypotension, tachycardia), and GI (vomiting) — four systems. The diagnosis is definitive. Antihistamines treat one mediator (histamine at H1) and do nothing for the others (leukotrienes, PAF, tryptase). Epinephrine acts upstream of mediator release and addresses every system simultaneously. The "wait and see" stance is dangerous because biphasic reactions occur in roughly 5% of cases up to several hours later, and the trajectory of anaphylaxis can shift from compensated to decompensated rapidly when laryngeal edema or vasodilatory collapse advances.',
    keyConcepts: [
      { token: 'Multi-organ involvement', synonyms: ['multi-organ', 'multiple organ', 'organ system', 'two systems', 'more than one system', 'multisystem'] },
      { token: 'Hypotension or cardiovascular', synonyms: ['hypotens', 'low bp', 'low blood pressure', 'cardiovascular', 'tachycard', 'shock'] },
      { token: 'GI involvement', synonyms: ['gi', 'vomit', 'gastrointestinal', 'cramping', 'diarrhea'] },
      { token: 'Diagnostic criteria', synonyms: ['criteria', 'definition', 'definitive', 'two organ', 'two systems', 'definition of anaphylaxis', 'two of'] },
      { token: 'Biphasic risk', synonyms: ['biphas', 'recurrence', 'rebound', 'late', 'hours later', 'second phase', 'return'] }
    ],
    references: [
      {
        citation: 'McLendon K, Sternard BT. Anaphylaxis. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK482124/'
      }
    ]
  },

  {type:'Distinguishing Case',scenario:'Two patients arrive within an hour of each other to the ED. Patient A: 24-year-old, fever 38.9, photophobia, neck pain that worsens with flexion, headache that came on over the past 6 hours and is now severe. No prior similar episodes. Patient B: 48-year-old, no fever, headache that hit peak severity within seconds while bending to tie a shoe 90 minutes ago, brief witnessed loss of consciousness at onset, vomited once, now alert with mild neck stiffness.',
    prompt:'Both have headache and some neck stiffness. The temptation is to lump them. (1) Name the single most discriminating historical feature for each patient and what diagnosis it points toward. (2) Explain why neck stiffness alone does not distinguish the two diagnoses. (3) State which patient\\'s diagnosis carries the higher immediate mortality and why pretest probability matters here.',
    teaching:'Patient A: the discriminating feature is fever with a 6-hour subacute trajectory. Bacterial or viral meningitis evolves over hours with fever, photophobia, and meningismus. Patient B: the discriminating feature is peak severity within seconds — the so-called thunderclap pattern. That trajectory is pathognomonic for subarachnoid hemorrhage until proven otherwise. The Valsalva trigger (bending) and the brief LOC at onset further support SAH. Neck stiffness fails as a discriminator because meningismus from blood in the subarachnoid space mimics infectious meningismus — both stretch the meninges. The clinical reasoning point: when two diagnoses share a sign, the sign cannot resolve them; you have to pivot to features they do not share. Patient B is the higher immediate mortality concern. Aneurysmal SAH carries substantial 30-day mortality and the rebleed risk is highest in the first 24 hours. Bacterial meningitis is comparably urgent but has a slightly wider treatment window. Pretest probability matters because a sudden-onset peak-in-seconds headache carries a meaningful probability of SAH in clinical series — high enough that clinical rule-out is not safe and warrants imaging.',
    keyConcepts: [
      { token: 'Peak severity in seconds', synonyms: ['thunderclap', 'sudden onset', 'seconds', 'peak immediately', 'maximal at onset', 'instantaneous', 'within seconds', 'peak in seconds'] },
      { token: 'Fever and subacute course', synonyms: ['fever', 'febrile', 'gradual', 'over hours', 'subacute', 'temperature', 'six hours', '6 hours'] },
      { token: 'Subarachnoid hemorrhage', synonyms: ['sah', 'subarachnoid', 'aneurysm', 'aneurysmal', 'bleed'] },
      { token: 'Meningitis', synonyms: ['meningitis', 'meningeal infection', 'bacterial mening', 'viral mening'] },
      { token: 'Shared sign cannot discriminate', synonyms: ['cannot discriminate', 'does not distinguish', 'shared', 'both can have', 'overlap', 'meninges', 'blood irritates', 'meningismus', 'stretch'] }
    ],
    references: [
      {
        citation: 'Ziu E, Khan Suheb MZ, Mesfin FB. Subarachnoid Hemorrhage. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK441958/'
      },
      {
        citation: 'Hersi K, Gonzalez FJ, Kondamudi NP. Meningitis. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK459360/'
      }
    ]
  },

  {type:'Missing Evidence',scenario:'A 26-year-old woman presents with 8 hours of right-sided lower abdominal pain. The pain started gradually mid-morning, became sharp around hour 3, and is now constant. She had a single episode of vomiting. She is sexually active with one partner, uses an IUD for contraception, and reports her last menstrual period started 5 weeks ago. On exam she is afebrile, BP 112/74, HR 96. Abdomen is tender in the right lower quadrant with voluntary guarding, no rebound. No CVA tenderness. Pelvic exam pending.',
    prompt:'Your differential includes appendicitis, ovarian torsion, ectopic pregnancy, ruptured ovarian cyst, and PID. With only the information above, you cannot rank these confidently. (1) Name the single test result that would most narrow this differential and explain what each result (positive vs. negative) would change. (2) Identify two findings from the existing history that should already shift your pretest probability for ectopic pregnancy and explain why. (3) Explain why an IUD does not rule out pregnancy.',
    teaching:'The single most differential-narrowing test here is a urine or serum hCG. A positive hCG narrows the field dramatically toward ectopic pregnancy or a pregnancy-associated process and reorders the rest of the differential below it. A negative hCG largely takes ectopic off the list (a small risk window remains very early in implantation but is rare in the symptomatic setting) and elevates the non-pregnancy diagnoses — torsion, appendicitis, cyst rupture, PID — into the top tier. The two pretest-probability shifters already in the history: a last menstrual period 5 weeks ago is a missed period (a normal cycle is approximately 28 days), and lateralized lower abdominal pain in a sexually active woman of reproductive age has a meaningful baseline rate of pregnancy-related etiologies. An IUD does not rule out pregnancy. IUDs reduce overall pregnancy risk substantially, but when contraceptive failure does occur with an IUD in place, the proportion of pregnancies that are ectopic is markedly higher than in non-IUD users — the IUD is much better at preventing intrauterine implantation than ectopic implantation. So an IUD shifts pretest probability for ectopic up, not down, in the rare event that pregnancy occurs. The clinical reasoning move: any abdominal pain in a reproductive-age woman gets an hCG, regardless of contraceptive history, regardless of how confident the patient is that she "can\\'t be pregnant."',
    keyConcepts: [
      { token: 'Pregnancy test (hCG)', synonyms: ['hcg', 'pregnancy test', 'beta hcg', 'urine pregnancy', 'serum pregnancy', 'preg test', 'urine hcg'] },
      { token: 'Missed period or LMP', synonyms: ['lmp', 'missed period', 'late period', 'overdue', 'five weeks', '5 weeks', 'cycle'] },
      { token: 'Lateralized pain in reproductive age', synonyms: ['reproductive age', 'lateralized', 'one-sided', 'right lower', 'rlq pain', 'right-sided', 'unilateral'] },
      { token: 'Ectopic', synonyms: ['ectopic', 'tubal', 'extrauterine'] },
      { token: 'IUD does not rule out pregnancy', synonyms: ['iud', 'ectopic risk higher', 'iud failure', 'still possible', 'higher proportion ectopic', 'iud does not rule out', 'iud does not exclude', 'iud raises ectopic'] }
    ],
    references: [
      {
        citation: 'Mummert T, Gnugnoli DM. Ectopic Pregnancy. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK539860/'
      }
    ]
  },

  {type:'Anchoring Check',scenario:'An 83-year-old woman is brought in by her daughter for "confusion" that started yesterday. The daughter reports her mother is normally sharp and lives independently, but yesterday seemed disoriented and forgot a planned lunch. Today she is more withdrawn and slept most of the morning. No fever reported at home. On arrival: temperature 37.2, BP 108/64 (her baseline is 140/80 per her records), HR 94, RR 18, SpO2 95%. She is oriented to person but not place or date, no focal neurologic deficits, no neck stiffness. Lungs clear. Mild suprapubic tenderness. Her PMH includes hypertension, osteoarthritis, and mild cognitive impairment at baseline.',
    prompt:'Your resident says "this looks like dementia progression — let\\'s get a CT and admit for placement evaluation." (1) Name the most likely acute diagnosis driving this presentation and the single physiologic clue in the vital signs that supports it. (2) Identify two ways the presentation deviates from a textbook version of that diagnosis and why elderly patients often present this way. (3) Explain what one specific bedside test you would order before accepting "dementia progression" as the explanation, and what you expect it to show.',
    teaching:'The most likely acute diagnosis is urinary tract infection, possibly progressing to urosepsis. The physiologic clue is the relative hypotension — her BP of 108/64 is meaningfully below her baseline of 140/80. Older adults with longstanding hypertension run high; "normal-looking" pressures on the chart can represent significant hypoperfusion. Two ways this deviates from the textbook UTI: (1) no fever — the elderly often mount blunted febrile responses or no febrile response at all, especially with frailty or polypharmacy, and (2) no urinary symptoms reported — dysuria, frequency, and urgency are often absent or undescribed, and the leading complaint is instead nonspecific functional decline (confusion, falls, anorexia, sleeping more). The mechanism is multifactorial: cytokine effects on a brain with reduced cognitive reserve produce delirium disproportionate to systemic illness severity. The bedside test before accepting "dementia progression" is a urinalysis (with reflex culture), expected to show pyuria and possibly nitrites or leukocyte esterase. The key reasoning point: acute change in cognition in an older adult is delirium until proven otherwise, and delirium is a clinical syndrome with an underlying cause that must be sought. Calling it "dementia progression" without ruling out delirium is anchoring on the chronic diagnosis at the expense of the treatable acute one.',
    keyConcepts: [
      { token: 'UTI or urinary infection', synonyms: ['uti', 'urinary tract infection', 'urinary infection', 'urosepsis', 'cystitis', 'pyelonephritis'] },
      { token: 'Relative hypotension from baseline', synonyms: ['relative hypotens', 'below baseline', 'lower than baseline', 'her baseline is', 'baseline 140', 'drop from baseline', 'hypoperfusion', 'normal looking but low'] },
      { token: 'Blunted fever response', synonyms: ['blunt', 'no fever', 'absent fever', 'afebrile despite', 'less febrile', 'do not mount', 'don\\'t mount', 'reduced fever', 'minimal fever'] },
      { token: 'Atypical or nonspecific presentation', synonyms: ['atypical', 'nonspecific', 'no urinary symptoms', 'no dysuria', 'no specific symptoms', 'functional decline', 'cognitive change', 'subtle'] },
      { token: 'Urinalysis', synonyms: ['urinalysis', 'ua', 'urine dip', 'dipstick', 'urine test', 'urine analysis'] },
      { token: 'Delirium not dementia', synonyms: ['delirium', 'acute change', 'acute confusion', 'not dementia progression', 'delirium until proven', 'rule out delirium'] }
    ],
    references: [
      {
        citation: 'Bono MJ, Leslie SW, Reygaert WC. Uncomplicated Urinary Tract Infections. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK470195/'
      },
      {
        citation: 'Mattison MLP. Delirium. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK470399/'
      }
    ]
  },

  {type:'Risk Priority',scenario:'A 6-year-old previously healthy boy is brought in by his mother for a 4-day limp. He had a mild upper respiratory illness 10 days ago that resolved on its own. The limp came on gradually, is worse in the morning, and improves a bit as the day goes on. He has been refusing to bear full weight on the right leg for the past 24 hours. Today: temperature 37.4, otherwise well-appearing, no rash. Right hip held in slight flexion and external rotation. Passive internal rotation of the right hip causes him to wince and pull away. Range of motion of the knee is normal.',
    prompt:'Before any labs come back, build your differential. (1) List four diagnoses that should be on a focused differential for an acutely limping child of this age. (2) For each, name the single feature that would most raise its probability above the others. (3) State which diagnosis on your list carries the highest cost-of-missing.',
    teaching:'A focused differential for an acutely limping child age 4-10 should include: transient (toxic) synovitis — most common cause, classically postviral, mild systemic signs; septic arthritis of the hip — fever, refusal to bear weight, marked irritability with passive motion, elevated inflammatory markers; Legg-Calvé-Perthes disease — idiopathic avascular necrosis of the femoral head, age 4-8 most common, more insidious onset, decreased internal rotation and abduction; and osteomyelitis — fever may be present or absent, point tenderness over a long bone or near the joint rather than diffuse joint pain, and inflammatory markers (especially CRP) often elevated. The infectious agent is most often S. aureus. Outside the focused four, also worth carrying on the broader list: fracture or trauma (occult or unwitnessed), discitis (often presents as refusal to walk or sit rather than a clear limp), slipped capital femoral epiphysis (age 10-16, particularly in adolescents who are obese — older than this patient but worth knowing), and in the right context leukemia or other malignancy presenting as bone pain. Septic arthritis carries the highest cost-of-missing by a wide margin — delayed diagnosis can cause rapid joint destruction within days, growth-plate damage, and lifelong impairment. Osteomyelitis is the second-highest cost-of-missing on this list. The clinical reasoning move: when one diagnosis on your list has catastrophic cost-of-missing, your workup should be designed to rule it out, not to confirm the most likely one.',
    keyConcepts: [
      { token: 'Transient synovitis', synonyms: ['transient synovitis', 'toxic synovitis', 'postviral synovitis', 'reactive synovitis'] },
      { token: 'Septic arthritis', synonyms: ['septic arthritis', 'septic joint', 'pyogenic arthritis', 'bacterial arthritis'] },
      { token: 'Legg-Calve-Perthes', synonyms: ['perthes', 'legg-calve-perthes', 'lcp', 'avascular necrosis', 'avn femoral head'] },
      { token: 'Osteomyelitis', synonyms: ['osteomyelitis', 'osteo', 'bone infection', 'bone infx'] },
      { token: 'Septic arthritis is highest cost-of-missing', synonyms: ['septic worst', 'septic arthritis worst', 'cost of missing septic', 'cannot miss septic', 'rule out septic', 'septic catastrophic', 'cant miss septic'] }
    ],
    followUp: {
      prompt: 'Labs return: WBC 11,200, CRP 18, ESR 28. Now apply the Kocher criteria. (1) State the four Kocher criteria and which the patient meets. (2) Based on the count of criteria met, name the approximate probability category of septic arthritis and what that should drive next. (3) Explain why the URI history 10 days ago is meaningful information that pulls in a specific direction.',
      teaching: 'The four Kocher criteria for distinguishing septic arthritis from transient synovitis in a child with hip pain are: (1) non-weight-bearing on the affected side, (2) fever (temperature above 38.5°C), (3) ESR above 40 mm/hr, and (4) WBC above 12,000. This patient meets one criterion (refusing to bear full weight). He does not meet the fever criterion (37.4 is below the threshold), does not meet ESR (28 is below 40), and does not meet WBC (11,200 is below 12,000). With one criterion met, the probability of septic arthritis falls in the lower range — historically cited around 3% in the original Kocher derivation studies. With zero criteria met, probability is roughly 0.2%; with all four met, probability climbs above 90%. With one criterion in this case, observation with serial reassessment plus imaging (typically ultrasound to look for hip effusion) is reasonable, though a low threshold for orthopedic consultation should be maintained. The URI 10 days ago is meaningful because transient synovitis (also called toxic synovitis) is a postviral reactive arthritis of the hip that classically follows a viral upper respiratory illness by 1-2 weeks. The temporal pattern — recent URI plus mild hip findings without high fever or markedly elevated inflammatory markers — fits the transient synovitis pattern rather than the septic arthritis pattern. The clinical reasoning move: when two diagnoses share a sign (limp, hip pain, refusal to bear weight), use a derived rule like Kocher to convert pattern recognition into probability, and let the prior (postviral context) inform pretest probability before applying the rule.',
      keyConcepts: [
        { token: 'Kocher criteria', synonyms: ['kocher', 'four criteria', '4 criteria', 'kocher score', 'kocher rule'] },
        { token: 'One criterion met', synonyms: ['one criterion', 'one of four', 'one of 4', '1 criterion', '1 of 4', 'meets one', 'only one', 'single criterion'] },
        { token: 'Low probability of septic arthritis', synonyms: ['low probability', 'low risk', 'unlikely septic', 'lower probability', 'less likely septic', 'low likelihood'] },
        { token: 'Postviral pattern', synonyms: ['postviral', 'post-viral', 'after viral', 'following uri', 'after uri', 'reactive', 'transient synovitis pattern'] },
        { token: 'Observation or further imaging', synonyms: ['observation', 'serial', 'reassess', 'ultrasound', 'us hip', 'imaging', 'hip ultrasound', 'monitor', 'observe'] }
      ]
    },
    references: [
      {
        citation: 'Whyte N, Sullivan C. Septic Arthritis (Pediatric). StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK535378/'
      },
      {
        citation: 'Kastrissianakis K, Beattie TF. Transient Synovitis of the Hip. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK459181/'
      }
    ]
  }
'''


def main():
    src = PUZZLES_FILE.read_text()
    if MARKER in src:
        print("Batch 1 marker already present; skipping insert.")
        return

    # Find the closing of the PUZZLES array. The pattern is
    # specifically the 1185-1188 region: last puzzle, blank line, blank line, '];'
    # We anchor on the unique '\n];\n\nvar currentIndex' sequence.
    anchor = '\n];\n\nvar currentIndex'
    idx = src.find(anchor)
    if idx < 0:
        print("ERROR: could not locate PUZZLES array close anchor")
        sys.exit(1)

    # Insert: we want to land BEFORE the '\n];' so the new puzzles
    # become the last entries in the array. The previous last entry
    # already lacks a trailing comma (per JS array convention).
    # We need to add a comma after the existing last entry.
    #
    # Strategy: find the last '}' before the '\n];' and insert a comma
    # plus our new puzzles right after it. The last entry in the file
    # ends with `}` (line 1185), then a blank line, then `\n];`.

    # Walk back from the array-close anchor to find the last `}` of
    # the previous puzzle.
    pre_close = src[:idx]  # everything before '\n];'
    last_brace = pre_close.rfind('}')
    if last_brace < 0:
        print("ERROR: could not find last `}` before array close")
        sys.exit(1)

    # Insert: ',' + newline + new puzzles JS + a trailing newline
    insert_text = ',\n' + NEW_PUZZLES_JS

    new_src = src[:last_brace + 1] + insert_text + src[last_brace + 1:]
    PUZZLES_FILE.write_text(new_src)
    print(f"Inserted batch 1 (5 puzzles) before array close. File grew by {len(insert_text)} chars.")


if __name__ == '__main__':
    main()
