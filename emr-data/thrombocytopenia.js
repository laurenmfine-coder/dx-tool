/* emr-data/thrombocytopenia.js — Thrombocytopenia: TTP vs ITP vs HIT */
window.CASES = window.CASES || {};
window.CASES['thrombocytopenia'] = {
  id: 'thrombocytopenia', name: 'Karen Mitchell', age: '45F', dob: '1980-05-17',
  mrn: 'RDX-2026-77321', setting: 'Medicine / Hematology', category: 'hematologic', acuity: 2,
  chiefComplaint: 'Platelets 14,000 — found on routine labs + fatigue, petechiae. No heparin exposure.',
  diagnosis: 'Immune Thrombocytopenic Purpura (ITP) — Severe (Plt <30,000)',
  presentation: {
    hpi: 'Karen Mitchell, 45F, presents with 1 week of easy bruising and petechiae on her lower extremities. Platelets on routine labs: 14,000. She has had a minor upper respiratory infection 2 weeks ago. No recent medications other than ibuprofen. No heparin exposure (never hospitalized, no LMWH). No fever, no renal failure, no microangiopathic symptoms. No neurological symptoms. LDH is normal, haptoglobin is normal, peripheral smear: no schistocytes. Bone marrow not needed at this point.',
    pmh: ['No significant PMH', 'Recent URI 2 weeks ago'],
    meds: ['Ibuprofen PRN (started 1 week ago for URI symptoms — stop this)'],
    allergies: ['NKDA']
  },
  vitals: { BP: '124/78', HR: '88', RR: '14', Temp: '37.0°C', SpO2: '99%' },
  labs: {
    'CBC': 'WBC 8.2 (normal), Hgb 12.8 (normal), Platelets 14,000 (CRITICALLY LOW)',
    'Peripheral smear': 'Large platelets (thrombocytopenia + large platelets = peripheral destruction, not production failure). NO SCHISTOCYTES — rules out TTP/HUS.',
    'LDH': '188 (normal — rules against TTP)',
    'Haptoglobin': '1.4 g/L (normal — no hemolysis)',
    'Coags': 'PT 12.1, PTT 29, INR 1.0 — NORMAL (rules out DIC)',
    'ADAMTS13': 'Pending — but clinical picture does not suggest TTP (no renal failure, no fever, no neuro symptoms, no schistocytes)',
    'H. pylori': 'Testing sent — H. pylori eradication can improve ITP',
    'ANA': 'Negative — secondary ITP from SLE excluded'
  },
  orders: {
    correct: [
      { id: 'stop-nsaids', name: 'Stop ibuprofen IMMEDIATELY — impairs platelet function', rationale: 'NSAIDs inhibit thromboxane A2 and impair platelet aggregation. With Plt 14,000, adding NSAID-induced platelet dysfunction dramatically increases bleeding risk. Switch to acetaminophen for pain.' },
      { id: 'ivig-itp', name: 'IVIG 1g/kg × 1-2 days — fastest platelet rise for severe ITP (Plt <30,000)', rationale: 'IVIG blocks Fc receptors on splenic macrophages, reducing platelet destruction. Raises platelets within 24-48 hours — fastest response of any ITP treatment. Use for: active bleeding, surgery, or Plt <20,000-30,000 with severe thrombocytopenia.' },
      { id: 'steroids-itp', name: 'Dexamethasone 40mg PO daily × 4 days OR prednisone 1mg/kg/day', rationale: 'First-line treatment for ITP. Steroids reduce autoantibody production and Fc receptor blockade. Response in 70-80% but often not durable. Dexamethasone pulse has higher initial response than prednisone.' },
      { id: 'no-plt-transfuse', name: 'Do NOT transfuse platelets — ITP is destructive, transfused platelets will be destroyed within hours', rationale: 'Platelet transfusion in ITP is NOT indicated unless life-threatening hemorrhage (ICH, GI bleed). Transfused platelets are destroyed by the same autoantibodies destroying native platelets — no benefit, waste of product.' },
      { id: 'activity-restrict', name: 'Activity restrictions — no contact sports, no IM injections, no NSAIDs', rationale: 'Plt 14,000 = high spontaneous bleeding risk. Restrict activities. No intramuscular injections (use IV or subcut). No aspirin or NSAIDs.' }
    ],
    incorrect: [
      { id: 'plt-transfuse-itp', name: 'Transfuse 1 pack platelets — Plt 14,000 is dangerously low', rationale: 'Platelet transfusion in ITP does not work and is not indicated. Autoantibodies (anti-GPIIb/IIIa or anti-GPIb/IX) destroy donor platelets as fast as native platelets. Transfuse only for life-threatening hemorrhage as a temporizing bridge to other therapies.' },
      { id: 'bone-marrow', name: 'Bone marrow biopsy to exclude aplasia', rationale: 'NOT needed at this stage. Large platelets on smear + normal WBC/RBC + normal LDH = peripheral destruction, not production failure. Bone marrow biopsy is indicated if: atypical features, failed treatment, age >60 (exclude MDS), suspected aplasia.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Thrombocytopenia differential: (1) Decreased production (aplasia, B12/folate deficiency, medications) — small platelets, pancytopenia. (2) Increased destruction: ITP (immune, no schistocytes), TTP/HUS (microangiopathic — schistocytes + high LDH + hemolysis), DIC (abnormal coags), HIT (heparin exposure + thrombosis). (3) Sequestration: hypersplenism.',
      'ITP diagnosis of exclusion: isolated thrombocytopenia, large platelets, no schistocytes, normal coags, no alternative explanation. No platelet antibody test is sensitive or specific enough to confirm.',
      'Never transfuse platelets in ITP unless life-threatening hemorrhage. Autoantibodies destroy donor platelets just as fast.',
      'TTP pentad: MAHA + thrombocytopenia + renal failure + fever + neurological symptoms. Treatment: IMMEDIATE plasma exchange (not IVIG). ADAMTS13 <10% confirms. TTP is a true emergency.'
    ],
    boardPearls: [
      'HIT (heparin-induced thrombocytopenia): platelet drop >50% after 5-10 days of heparin + thrombosis (arterial or venous). 4T score for pre-test probability. Diagnosis: anti-PF4/heparin ELISA. Treatment: STOP all heparin, start non-heparin anticoagulant (argatroban, fondaparinux, bivalirudin). Do NOT give platelets.',
      'Refractory ITP options: rituximab (anti-CD20), splenectomy (70% durable response), TPO receptor agonists (romiplostim, eltrombopag — increase platelet production).',
      'H. pylori and ITP: 50% of H. pylori-positive ITP patients improve with eradication alone. Test all ITP patients.',
      'Gestational thrombocytopenia: common (5% of pregnancies), mild (Plt rarely <70,000), benign — resolves postpartum. No treatment needed. Distinguished from HELLP by LFTs and clinical context.'
    ]
  },
  references: [{ id: 'StatPearls-ITP', title: 'Immune Thrombocytopenia', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470545/', openAccess: true }]
};
