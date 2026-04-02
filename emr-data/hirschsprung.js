/* emr-data/hirschsprung.js — Hirschsprung Disease — Failure to Pass Meconium */
window.CASES = window.CASES || {};
window.CASES['hirschsprung'] = {
  id: 'hirschsprung', name: 'Oliver Chen', age: '3d', dob: '2026-03-28',
  mrn: 'RDX-2026-57327', setting: 'Neonatal ICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Hirschsprung Disease — Failure to Pass Meconium',
  diagnosis: 'Hirschsprung Disease — Failure to Pass Meconium',
  presentation: {
    hpi: '3-day-old male. Has not passed meconium (normal: first 24-48h). Progressive abdominal distension. Explosive stool on rectal exam (temporary decompression from exam). Barium enema: transition zone — narrow aganglionic rectosigmoid with dilated proximal colon. Down syndrome association (5-15% of Hirschsprung have trisomy 21). Cause: failed neural crest cell migration into distal colon → absent ganglion cells in myenteric + submucosal plexuses → functional obstruction.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'Age-appropriate', HR: '162', RR: '46', Temp: '37.4°C', SpO2: '98%' },
  labs: { 'Barium enema': 'Transition zone at rectosigmoid — narrow aganglionic segment + proximal dilation. Delayed 24h film: retained contrast (normal evacuation is absent)', 'Rectal biopsy (suction, 1.5cm above dentate line)': 'ABSENT GANGLION CELLS — GOLD STANDARD DIAGNOSIS. Calretinin immunostaining negative.', 'AXR': 'Dilated proximal colon, gasless rectum' },
  orders: {
    correct: [
      { id: 'rectal-biopsy', name: 'Rectal suction biopsy — GOLD STANDARD for Hirschsprung diagnosis', rationale: 'Rectal suction biopsy 1.5cm above dentate line: absent ganglion cells in myenteric + submucosal plexuses = Hirschsprung. Calretinin staining: negative in aganglionic bowel. This is the definitive diagnostic test. Barium enema is suggestive but not definitive.' },
      { id: 'pullthrough', name: 'Staged repair: colostomy (decompress) → pull-through at 3-6 months (Swenson, Soave, or Duhamel procedure)', rationale: 'Surgical repair: diverting colostomy in neonates → definitive pull-through at 3-6 months. Primary pull-through is performed at some centers if stable and early diagnosis. Soave pull-through (endorectal) is most common.' }
    ],
    incorrect: [
      { id: 'enemas-hirsch', name: 'Daily enemas and rectal stimulation — functional constipation treatment', rationale: 'Enemas provide temporary decompression but do NOT treat Hirschsprung disease. Without surgery, enterocolitis and perforation will occur. Surgical pull-through is the only definitive treatment.' },
      { id: 'laxatives-hirsch', name: 'Oral laxatives — constipation management', rationale: 'Laxatives are ineffective and potentially harmful in Hirschsprung — the aganglionic segment cannot propel stool regardless. Feeding orally without decompression risks HAEC (Hirschsprung-associated enterocolitis).' }
    ]
  },
  teachingPoints: {
    keyLearning: ['Hirschsprung: failed neural crest migration → absent ganglion cells → functional obstruction. Rectal suction biopsy (absent ganglion cells) is the gold standard. Barium enema transition zone is suggestive.', 'HAEC (Hirschsprung-associated enterocolitis): life-threatening complication — fever, abdominal distension, diarrhea (may be bloody), sepsis. Can occur before or after surgery. Treatment: IV antibiotics, NGT, rectal irrigations, emergency colostomy if severe.', 'Down syndrome: 5-15% of Hirschsprung. Screen all Down syndrome patients with delayed meconium passage.'],
    boardPearls: ['Total colonic Hirschsprung (10%): entire colon is aganglionic. Barium enema may miss it (no classic transition zone). Short colon sign. Requires extended pull-through.', 'Long-segment vs short-segment: short (rectosigmoid, 80%) vs long (above sigmoid, 15%) vs total colonic (5%). Long-segment has worse long-term continence.', 'Adult Hirschsprung: presents with lifelong severe constipation, megacolon. Often misdiagnosed for years as functional constipation.']
  },
  references: [{ id: 'StatPearls', title: 'Hirschsprung Disease — Failure to Pass Meconium', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK537037/', openAccess: true }]
};
