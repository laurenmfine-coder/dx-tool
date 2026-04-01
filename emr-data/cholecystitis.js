/* emr-data/cholecystitis.js — Acute Cholecystitis → Ascending Cholangitis */
window.CASES = window.CASES || {};
window.CASES['cholecystitis'] = {
  id: 'cholecystitis', name: 'David Park', age: '48M', dob: '1977-03-09',
  mrn: 'RDX-2026-66721', setting: 'ED → Surgery', category: 'gastrointestinal', acuity: 2,
  chiefComplaint: 'RUQ pain, fever, jaundice — Charcot\'s triad present',
  diagnosis: 'Ascending Cholangitis (Charcot\'s Triad: RUQ pain + fever + jaundice)',
  presentation: {
    hpi: 'David Park, 48M, presents with 3 days of worsening RUQ pain, fever to 39.4°C, and jaundice that developed today. He had prior episodes of RUQ pain after fatty meals (cholelithiasis). He now has Charcot\'s triad (RUQ pain + fever + jaundice). He looks toxic and is mildly confused (Reynolds\' pentad — adding AMS and hypotension = worst spectrum). BP 98/62.',
    pmh: ['Known cholelithiasis on prior ultrasound'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '98/62', HR: '118', RR: '20', Temp: '39.4°C', SpO2: '97%', GCS: '14' },
  labs: {
    'LFTs': 'Total bili 4.8 (H) | Direct bili 3.6 (H) | ALP 480 (H) | AST 220 (H) | ALT 180 (H) — obstructive pattern',
    'CBC': 'WBC 22,400 (H) | Hgb 14.2 | Plt 188',
    'CMP': 'Cr 1.4 (H — volume depletion) | Lactate 2.8 (H)',
    'Blood cultures': '×2 drawn — pending (Gram-negative sepsis from biliary source)',
    'RUQ Ultrasound': 'Cholelithiasis. Dilated common bile duct 12mm (normal <7mm). Shadowing stone visible in CBD. Pericholecystic fluid. Thickened gallbladder wall 6mm.',
    'MRCP (ordered)': 'Common bile duct stone 8mm with upstream biliary dilation — confirms choledocholithiasis'
  },
  orders: {
    correct: [
      { id: 'abx-cholangitis', name: 'Broad-spectrum antibiotics — piperacillin-tazobactam 3.375g IV q6h', rationale: 'Ascending cholangitis is sepsis from biliary source. Empiric antibiotics must cover enteric gram-negatives (E. coli, Klebsiella) and anaerobes. Pip-tazo or imipenem for severe disease.' },
      { id: 'ercp-cholangitis', name: 'Emergency ERCP within 24-48h for biliary decompression', rationale: 'ERCP with sphincterotomy and stone extraction is the definitive treatment. Timing: WITHIN 24H for severe cholangitis (Tokyo Guidelines Grade III), within 48h for moderate. Do NOT delay for cholecystectomy first.' },
      { id: 'ivf-cholangitis', name: 'IV fluid resuscitation — 30mL/kg crystalloid bolus, then maintenance', rationale: 'Biliary sepsis causes distributive shock. Aggressive early resuscitation improves outcomes.' },
      { id: 'surgery-consult', name: 'Surgery consult — cholecystectomy planned after ERCP and recovery', rationale: 'Laparoscopic cholecystectomy is planned after ERCP and resolution of acute infection (typically 4-6 weeks later, or during same hospitalization if patient stable after 3 days).' }
    ],
    incorrect: [
      { id: 'cholecystectomy-first', name: 'Emergency cholecystectomy tonight — source control', rationale: 'WRONG — cholangitis is a biliary duct problem, not a gallbladder problem primarily. ERCP is the treatment. Emergency cholecystectomy without biliary drainage has high mortality. ERCP first, cholecystectomy later.' },
      { id: 'obs-antibiotics', name: 'Observe on antibiotics — ERCP in the morning after labs improve', rationale: 'Severe cholangitis with Reynolds\' pentad (AMS + hypotension) is a surgical emergency. ERCP within 24h is mandatory. Delaying beyond 24h in severe cholangitis significantly increases mortality.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Charcot\'s triad: RUQ pain + fever + jaundice = ascending cholangitis until proven otherwise. Reynolds\' pentad adds AMS + hypotension = severe/fulminant cholangitis (emergency).',
      'Ascending cholangitis treatment: antibiotics + biliary decompression via ERCP. ERCP within 24h for severe, within 48-72h for moderate. Do NOT delay for cholecystectomy.',
      'Tokyo Guidelines severity grading: Grade I (mild, responds to antibiotics) → Grade II (moderate, organ dysfunction) → Grade III (severe, hypotension, AMS, renal failure — emergency ERCP).',
      'CBD stone (choledocholithiasis) vs cholecystitis (gallbladder stones): choledocholithiasis causes obstructive jaundice + dilated CBD + elevated direct bilirubin + ALP. Cholecystitis: positive Murphy\'s sign, no jaundice usually.'
    ],
    boardPearls: [
      'Murphy\'s sign: pain on deep inspiration with palpation of RUQ (hepatic angle) = cholecystitis. Positive only if pain causes inspiratory arrest.',
      'Mirizzi syndrome: gallstone in the cystic duct or Hartmann\'s pouch compresses the CBD externally → obstructive jaundice without choledocholithiasis.',
      'ERCP complications: pancreatitis (most common, 3-5%), perforation, bleeding, cholangitis.',
      'Primary sclerosing cholangitis (PSC): associated with IBD (UC). Beaded appearance of intrahepatic and extrahepatic bile ducts on MRCP. No effective medical therapy — liver transplant for end-stage.'
    ]
  },
  references: [{ id: 'StatPearls-Cholangitis', title: 'Cholangitis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK448083/', openAccess: true }]
};
