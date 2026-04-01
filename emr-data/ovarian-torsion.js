/* emr-data/ovarian-torsion.js — Ovarian Torsion: Time to OR */
window.CASES = window.CASES || {};
window.CASES['ovarian-torsion'] = {
  id: 'ovarian-torsion', name: 'Sophia Reyes', age: '19F', dob: '2006-03-21',
  mrn: 'RDX-2026-18334', setting: 'ED → OR', category: 'gynecologic', acuity: 1,
  chiefComplaint: 'Sudden severe right lower quadrant pain, nausea, vomiting — young woman',
  diagnosis: 'Right Ovarian Torsion with Dermoid Cyst',
  presentation: {
    hpi: '19F, LMP 2 weeks ago, last sexual activity 1 month ago (uses condoms). Sudden onset severe right pelvic/lower quadrant pain 9/10 while doing yoga — sudden onset during exercise is classic. Nausea and vomiting. No fever. No vaginal bleeding. She has had 2 prior episodes of similar pain in the past 6 months that resolved spontaneously. Pelvic ultrasound with Doppler: enlarged right ovary 8×6cm with cystic component (dermoid), absent right ovarian arterial Doppler flow.',
    pmh: ['Prior similar episodes ×2 — spontaneously resolved (intermittent torsion)'], meds: ['OCP (oral contraceptive) — inconsistent use'], allergies: ['NKDA']
  },
  vitals: { BP: '112/68', HR: '118', RR: '20', Temp: '37.6°C', SpO2: '98%' },
  labs: {
    'Pregnancy test (urine β-hCG)': 'NEGATIVE — must ALWAYS exclude ectopic pregnancy first',
    'CBC': 'WBC 13.4 (mild elevation — stress response), Hgb 13.8',
    'BMP': 'Normal',
    'Pelvic US with Doppler': 'Right ovary enlarged 8×6cm with heterogeneous echogenic mass (dermoid). ABSENT right ovarian arterial AND venous Doppler flow — consistent with complete torsion. Left ovary: normal. No free fluid.'
  },
  orders: {
    correct: [
      { id: 'gyn-or', name: 'Immediate gynecology consult + OR — ovarian detorsion within hours', rationale: 'Ovarian torsion is a time-sensitive emergency. Every hour of delay increases risk of ovarian necrosis from ischemia. The goal is ovarian SALVAGE via detorsion (not immediate oophorectomy). Even a discolored, dusky ovary should be detorsed — 90-100% recover with blood flow restoration.' },
      { id: 'detorsion', name: 'Laparoscopic detorsion — attempt ovarian salvage', rationale: 'Prior teaching was to remove the ovary if it appeared necrotic (fear of thromboembolism from necrotic ovarian vein). This is now DISPROVEN — even infarcted-appearing ovaries recover after detorsion in >90% of cases. Always attempt detorsion first.' },
      { id: 'cyst-removal', name: 'Cystectomy after detorsion (same procedure) — dermoid is the lead point', rationale: 'After confirming ovarian viability post-detorsion, remove the dermoid cyst (the lead point). Leaving the cyst risks recurrent torsion. Oophorectomy is reserved for truly necrotic ovary after detorsion attempt.' },
      { id: 'analgesia-torsion', name: 'IV opioid analgesia (morphine/hydromorphone) + antiemetics immediately', rationale: 'Adequate pain control while arranging OR. Ovarian torsion pain is severe — do not withhold analgesia pending diagnosis.' }
    ],
    incorrect: [
      { id: 'wait-imaging', name: 'CT scan for better imaging — Doppler inconclusive', rationale: 'Absent Doppler flow on ultrasound + classic presentation = ovarian torsion until proven otherwise. CT provides no additional actionable information and delays OR. Go to the operating room.' },
      { id: 'remove-ovary', name: 'Immediate oophorectomy — ovary appears infarcted on Doppler', rationale: 'DO NOT remove the ovary based on Doppler appearance. Even an ovary with absent flow and dusky appearance at laparoscopy should be detorsed first — 90-100% recover. Oophorectomy is last resort.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Ovarian torsion: sudden severe unilateral pelvic pain in a woman of reproductive age = torsion until proven otherwise. Pregnancy test FIRST to exclude ectopic.',
      'Absent Doppler flow supports torsion but DOES NOT rule out. 60% of torsions have present Doppler flow on ultrasound (collateral circulation). Clinical suspicion + ultrasound findings → go to OR.',
      'ALWAYS attempt ovarian detorsion first — even infarcted-appearing ovaries recover in >90% of cases after detorsion. The old teaching to remove necrotic-appearing ovaries is WRONG. Ovarian salvage preserves fertility.',
      'Time from diagnosis to OR is the most critical factor. Every hour of additional ischemia reduces salvage probability.'
    ],
    boardPearls: [
      'Risk factors for ovarian torsion: ovarian cyst or mass (most common — dermoid, functional cyst), ovulation induction (IVF — hyperstimulated ovaries), prior torsion, tubal ligation.',
      'Intermittent torsion: episodes of severe pain that spontaneously resolve (ovary twists and untwists). These patients are at risk for complete torsion. Elective cystectomy is appropriate.',
      'Corpus luteum cyst in early pregnancy: can cause torsion. Always check β-hCG. Manage same way — OR for torsion.',
      'Right > left torsion: sigmoid colon protects the left adnexa. Right side more mobile and more commonly involved.'
    ]
  },
  references: [{ id: 'StatPearls-OvarianTorsion', title: 'Ovarian Torsion', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK560488/', openAccess: true }]
};
