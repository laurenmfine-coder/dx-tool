/**
 * COACHDX DENTAL (DDS/DMD) CASES
 * Mentor-style coaching conversations for Dental students
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

const COACHDX_DENTAL_CASES = {

'dental-emergency-avulsion': {
    id: 'dental-emergency-avulsion',
    title: 'Dental Emergency - Avulsed Tooth',
    category: 'Emergency',
    profession: 'dental',
    patient: { name: 'Emma Rodriguez', age: 12, sex: 'Female', setting: 'Emergency Call', acuity: 'High', chiefComplaint: 'Tooth knocked out at soccer' },
    description: 'Parent calls: 12-year-old hit in mouth at soccer 15 minutes ago. Found the tooth on ground, put it in milk. Theyre 10 minutes away.',
    openingStatement: 'The parent is panicked on the phone. A tooth is out and theyre racing to your office. What do you tell them and what do you prepare for?',
    conceptDomains: { 'Phone Triage': ['storage', 'time_sensitivity'], 'Emergency Protocol': ['replantation', 'splinting'] },
    defined_responses: {
        'phone instructions': 'Tell them: "You did the right thing with milk. Keep it there. Do NOT scrub the tooth. If she can tolerate it, the tooth can go back in the socket or in her cheek. Come immediately - time is critical."',
        'time matters': 'Every minute counts. Best outcomes if replanted within 30 minutes. PDL cells start dying after 60 minutes dry. Shes at 15 min in milk - good prognosis if we act fast.',
        'treatment plan': 'Rinse tooth gently with saline (dont scrub), irrigate socket, replant with gentle pressure, splint flexibly for 2 weeks. Start antibiotics. RCT in 7-10 days (closed apex = pulp will necrose).',
        'afo decision': 'This is a permanent tooth (shes 12). We replant permanent teeth. If this were a baby tooth, we would NOT replant (risk of damage to permanent successor).'
    },
    quickActions: ['What do I tell them on phone?', 'How critical is timing?', 'How do I replant?'],
    keyTeachingPoints: ['Time is critical - every minute matters', 'Best storage: Hanks > milk > saliva', 'Never scrub the root - PDL cells are precious', 'Flexible splint for 2 weeks', 'RCT needed for closed apex teeth'],
    evidenceBase: { guidelines: ['IADT Avulsion Guidelines 2020'], keyEvidence: ['PDL cell viability: 30 min dry = 50% survival'] }
},

'dental-oral-cancer-screening': {
    id: 'dental-oral-cancer-screening',
    title: 'Oral Pathology - Cancer Screening',
    category: 'Oral Pathology',
    profession: 'dental',
    patient: { name: 'Patricia Henderson', age: 62, sex: 'Female', setting: 'Routine Exam', acuity: 'Medium', chiefComplaint: 'Here for cleaning, noticed white spot' },
    description: '62-year-old former smoker (quit 5 years ago, 30 pack-years). White lesion on left lateral tongue, 1.5cm, non-wipeable, present 6 weeks. No pain.',
    openingStatement: 'You find a white lesion during routine exam. The patient says "Its probably nothing." How do you approach this?',
    conceptDomains: { 'Lesion Assessment': ['characteristics', 'risk_factors'], 'Biopsy Decision': ['indications'] },
    defined_responses: {
        'concerning features': 'Multiple red flags: (1) Lateral tongue = highest risk site for oral SCC, (2) 30 pack-years smoking (risk persists 10+ years), (3) Non-wipeable white lesion present 6 weeks, (4) Age 62.',
        'biopsy needed': 'Absolutely. Non-wipeable white lesion on high-risk site in patient with smoking history = biopsy required. This is leukoplakia until proven otherwise, with 3-17% malignant transformation risk.',
        'patient conversation': '"I found something that needs further evaluation. White patches like this, especially in someone with your smoking history, need to be biopsied to make sure its not precancerous. Id like to do a small biopsy or refer you to an oral surgeon."',
        'dont reassure falsely': 'Never say "its probably nothing" for a lesion like this. Early detection of oral cancer improves 5-year survival from 30% to 80%+. Your exam could save her life.'
    },
    quickActions: ['Why is this concerning?', 'Does she need a biopsy?', 'How do I explain this to her?'],
    keyTeachingPoints: ['Lateral tongue is highest risk site for oral SCC', 'White lesions that dont wipe off need biopsy', 'Smoking risk persists 10+ years after quitting', 'Early detection saves lives'],
    evidenceBase: { guidelines: ['AAOMP White Lesion Guidelines'], keyEvidence: ['Lateral tongue = 40-50% of oral cavity cancers'] }
},

'dental-perio-treatment-planning': {
    id: 'dental-perio-treatment-planning',
    title: 'Periodontal Disease - Treatment Planning',
    category: 'Periodontics',
    profession: 'dental',
    patient: { name: 'James Washington', age: 48, sex: 'Male', setting: 'New Patient Exam', acuity: 'Low', chiefComplaint: 'Gums bleed, teeth feel loose' },
    description: '48-year-old diabetic (A1c 7.8%), hasnt seen dentist in 5 years. Generalized 4-6mm pockets, BOP 75%, mobile lower anteriors. Heavy calculus.',
    openingStatement: 'Mr. Washington has significant periodontal disease. He wants to know "Can you save my teeth?" How do you assess and plan treatment?',
    conceptDomains: { 'Classification': ['staging', 'grading'], 'Treatment Planning': ['phases', 'prognosis'] },
    defined_responses: {
        'classification': 'Stage III Grade C periodontitis. Stage III = severe (CAL ≥5mm, bone loss to middle third). Grade C = rapid progression (diabetes modifies grade upward).',
        'treatment phases': 'Phase 1: Non-surgical - SRP all quadrants, OHI, chlorhexidine. Re-evaluate at 4-6 weeks. Phase 2: Surgical if pockets persist >5mm. Maintenance: Q3 month recalls for Stage III.',
        'diabetes connection': 'Critical: Periodontal disease and diabetes have bidirectional relationship. Treating his perio may improve his A1c. Conversely, poor diabetes control worsens perio outcomes. Coordinate with his physician.',
        'prognosis discussion': '"With your commitment to treatment and good home care, we can stabilize most of your teeth. Some teeth with severe bone loss may have a guarded prognosis. The good news: periodontal disease is treatable, and treating it may help your diabetes too."'
    },
    quickActions: ['How do I classify his disease?', 'What is the treatment plan?', 'Can we save his teeth?'],
    keyTeachingPoints: ['2017 AAP classification uses staging and grading', 'Diabetes increases perio risk AND perio worsens diabetes', 'SRP is first-line treatment', '3-month maintenance for Stage III'],
    evidenceBase: { guidelines: ['AAP/EFP Classification 2017'], keyEvidence: ['A1c improves 0.4% with periodontal treatment'] }
},

'dental-restorative-decision': {
    id: 'dental-restorative-decision',
    title: 'Restorative - Crown vs Large Filling',
    category: 'Restorative',
    profession: 'dental',
    patient: { name: 'David Kim', age: 45, sex: 'Male', setting: 'Treatment Planning', acuity: 'Low', chiefComplaint: 'Filling fell out, tooth sensitive' },
    description: 'Large MOD amalgam in #19 fractured. Remaining tooth structure <50%. Buccal and lingual cusps undermined. Pulp testing normal. No periapical pathology.',
    openingStatement: 'Mr. Kim wants the cheapest option. But with this much tooth structure gone, what does he really need?',
    conceptDomains: { 'Treatment Options': ['crown_vs_filling', 'indications'], 'Patient Communication': ['cost_benefit'] },
    defined_responses: {
        'why crown': 'With <50% remaining tooth structure and undermined cusps, a direct restoration (filling) has high failure risk. The tooth will likely fracture - potentially catastrophically requiring extraction. Crown protects the remaining structure.',
        'filling risks': '"A filling is cheaper upfront, but with this much tooth gone, theres a high chance the tooth will crack. If it cracks below the gumline, we lose the tooth entirely. The crown costs more now but protects your investment."',
        'present options': 'Give him real options: (1) Crown - best long-term, protects tooth, $$$, (2) Large filling - cheaper but higher failure rate, may need crown later anyway or lose tooth, (3) Onlay - middle ground, $$.',
        'shared decision': '"Ultimately its your choice. My recommendation is a crown because I want this tooth to last. But I understand cost matters. What questions do you have?"'
    },
    quickActions: ['Why does he need a crown?', 'What are the risks of just a filling?', 'How do I explain the cost?'],
    keyTeachingPoints: ['<50% remaining structure usually indicates indirect restoration', 'Cuspal coverage prevents catastrophic fracture', 'Present options honestly with pros/cons', 'Shared decision-making respects patient autonomy'],
    evidenceBase: { guidelines: ['ADA Restorative Guidelines'], keyEvidence: ['Large direct composites: 30-40% 5-year failure rate'] }
},

'dental-pulpitis-diagnosis': {
    id: 'dental-pulpitis-diagnosis',
    title: 'Endodontics - Pulpitis Differential',
    category: 'Endodontics',
    profession: 'dental',
    patient: { name: 'Michael Torres', age: 34, sex: 'Male', setting: 'Emergency Visit', acuity: 'Medium', chiefComplaint: 'Severe tooth pain keeping me up at night' },
    description: 'Right lower jaw pain for 3 days. Started sharp with cold, now constant throbbing. Worse lying down. Points to general area but cant localize. Ibuprofen gives 2 hours relief.',
    openingStatement: 'He cant tell you which tooth hurts. The pain woke him up last night. Walk me through your diagnostic approach.',
    conceptDomains: { 'Pulp Testing': ['cold', 'percussion', 'palpation'], 'Diagnosis': ['reversible_vs_irreversible'] },
    defined_responses: {
        'key history clues': 'Spontaneous pain, worse at night, now constant = irreversible pulpitis or necrosis. Pain that was sharp to cold but is now constant suggests progression to pulp death. The "cant localize" is common - pulp has poor proprioception.',
        'systematic testing': 'Test each tooth: Cold test (normal = brief response; irreversible = prolonged/no response), percussion (periapical involvement), palpation (abscess). Compare to adjacent and contralateral teeth.',
        'your findings': 'You find: #30 has large carious lesion, no response to cold (necrotic), positive percussion and palpation over apex, swelling buccal gingiva. Diagnosis: Pulp necrosis with symptomatic apical periodontitis.',
        'treatment': 'He needs emergency treatment today: Either pulpectomy (start RCT) or extraction. I&D if fluctuant abscess. Antibiotics are adjunctive, not definitive - source control is required.'
    },
    quickActions: ['What does his history tell you?', 'How do I localize the tooth?', 'What is the diagnosis?', 'What treatment does he need?'],
    keyTeachingPoints: ['Spontaneous constant pain = irreversible/necrotic', 'Cold testing differentiates vital from necrotic', 'Patients often cant localize pulpal pain', 'Source control (RCT or extraction) is definitive treatment'],
    evidenceBase: { guidelines: ['AAE Diagnosis Guidelines 2021'], keyEvidence: ['Antibiotics alone do not resolve dental abscess'] }
}

};

if (typeof module !== 'undefined' && module.exports) { module.exports = COACHDX_DENTAL_CASES; }
if (typeof window !== 'undefined') { window.COACHDX_DENTAL_CASES = COACHDX_DENTAL_CASES; }
console.log('[CoachDx-Dental] Loaded ' + Object.keys(COACHDX_DENTAL_CASES).length + ' cases');
