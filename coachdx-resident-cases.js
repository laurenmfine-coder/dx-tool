// ============================================================================
// COACHDX RESIDENT CASE LIBRARY
// Advanced Clinical Reasoning Cases for Medical Residents
// Created: January 2026
// ============================================================================
// 
// 15 Advanced cases for resident-level clinical reasoning
// Designed for: PGY1-PGY3+ residents, fellows, advanced medical students
// 
// Coach Persona: Dr. David Kim - Senior Resident / Fellow
// ============================================================================

const COACHDX_RESIDENT_CASES = {

_coachPersona: {
    name: 'Dr. David Kim',
    title: 'Senior Resident',
    role: 'Your senior on service',
    style: 'collegial_challenging',
    avatar: '👨‍⚕️',
    phrases: {
        greeting: "Hey, I heard you picked up an interesting case.",
        challenge: "Have you considered...",
        praise: "Good clinical reasoning.",
        redirect: "Let's take a step back."
    }
},

'resident-dissection-mimic': {
    id: 'resident-dissection-mimic', title: 'Aortic Pathology - Beyond Classic Dissection',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Richard Thompson', age: 67, sex: 'Male', setting: 'Emergency Department', acuity: 'Critical', chiefComplaint: 'Severe Back Pain' },
    description: 'CTA is "negative for dissection" but patient has severe pain and the radiologist mentions subtle wall thickening. Don\'t stop thinking.',
    openingStatement: 'CTA is back - "no dissection." But something doesn\'t feel right. The radiologist mentioned aortic wall thickening. What now?',
    keyTeachingPoints: ['Aortic syndromes include IMH and PAU, not just classic dissection', '"Negative for dissection" doesn\'t mean normal aorta', 'Call radiology directly when clinical picture doesn\'t match']
},

'resident-mof': {
    id: 'resident-mof', title: 'Multi-Organ Failure - Prioritization',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Angela Martinez', age: 58, sex: 'Female', setting: 'ICU', acuity: 'Critical', chiefComplaint: 'Septic Shock Day 3' },
    description: 'Everything is failing: kidneys, liver, lungs. How do you think through multi-organ failure?',
    openingStatement: 'She\'s on 3 pressors, creatinine is 4.8, bili is 8, P/F ratio is 120. Everything is going wrong. How do you prioritize?',
    keyTeachingPoints: ['Find what\'s driving the cascade', 'Source control trumps everything in sepsis', 'Organ support is not cure - find the cause']
},

'resident-diagnostic-dilemma': {
    id: 'resident-diagnostic-dilemma', title: 'Diagnostic Dilemma - When Common Things Aren\'t',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Jennifer Liu', age: 34, sex: 'Female', setting: 'Medicine Ward', acuity: 'Medium', chiefComplaint: 'Persistent Fatigue and Fevers' },
    description: 'Admitted twice with "negative workups." Everyone thinks she\'s anxious. But ESR is 85 and she\'s lost 15 pounds.',
    openingStatement: 'Her chart is thick with negative tests. She\'s been told it\'s "viral" twice. But the clinical picture doesn\'t fit. What are you missing?',
    keyTeachingPoints: ['When diagnosis doesn\'t fit, start over', 'Physical exam is still powerful', 'Endocarditis is a great mimicker']
},

'resident-iatrogenic': {
    id: 'resident-iatrogenic', title: 'Iatrogenic Complication - Owning Your Mistake',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Harold Foster', age: 72, sex: 'Male', setting: 'Medicine Ward', acuity: 'High', chiefComplaint: 'Altered Mental Status' },
    description: 'You started D5W and high-dose furosemide. Now Na is 118. This is your mistake.',
    openingStatement: 'Sodium is 118, down from 136. He\'s on D5W and furosemide that you ordered. What do you do?',
    keyTeachingPoints: ['Stop the harm first', 'Tell your attending immediately', 'Disclosure is ethical and often legally protective', 'Document facts, not excuses']
},

'resident-attending-conflict': {
    id: 'resident-attending-conflict', title: 'Conflict with Attending - Evidence-Based Pushback',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Margaret Wilson', age: 82, sex: 'Female', setting: 'Medicine Ward', acuity: 'Medium', chiefComplaint: 'CHF Exacerbation' },
    description: 'Attending wants digoxin. You\'ve read the evidence showing harm in elderly women. How do you handle it?',
    openingStatement: 'Dr. Hendricks told you to start digoxin. You know the evidence suggests harm. Do you just do it?',
    keyTeachingPoints: ['Know your evidence first', 'Frame as curiosity not confrontation', 'Focus on patient, not ego', 'Good attendings welcome evidence-based pushback']
},

'resident-social-determinants': {
    id: 'resident-social-determinants', title: 'Social Determinants - Real-World Barriers',
    category: 'Resident', discipline: 'resident', difficulty: 'intermediate',
    patient: { name: 'James Washington', age: 48, sex: 'Male', setting: 'Medicine Ward', acuity: 'Medium', chiefComplaint: 'DKA - Third Admission' },
    description: 'Third DKA this year. Labeled "non-compliant." But when you actually talk to him, you learn compliance isn\'t the issue.',
    openingStatement: 'The team is frustrated with his "non-compliance." But when you sit down with him, he knows his diabetes perfectly. What\'s really going on?',
    keyTeachingPoints: ['"Non-compliant" means we haven\'t understood the patient', 'Ask about barriers: cost, access, housing', 'Social work is essential']
},

'resident-code-status': {
    id: 'resident-code-status', title: 'Code Status Discussion - Leading a Family Meeting',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Robert Chen', age: 81, sex: 'Male', setting: 'ICU', acuity: 'Critical', chiefComplaint: 'Multisystem Failure' },
    description: 'Intubated with metastatic cancer. Family wants "everything." Your attending asks you to lead the meeting.',
    openingStatement: 'The family is in the conference room. They\'re scared. Your attending wants you to lead. How do you approach this?',
    keyTeachingPoints: ['Start by assessing what family understands', 'Deliver news, then STOP', 'Respond to emotion before information', 'Make a recommendation based on patient values']
},

'resident-handoff-catch': {
    id: 'resident-handoff-catch', title: 'Handoff Failure - Catching Missed Information',
    category: 'Resident', discipline: 'resident', difficulty: 'intermediate',
    patient: { name: 'Linda Torres', age: 45, sex: 'Female', setting: 'Medicine Ward', acuity: 'Medium', chiefComplaint: 'Cellulitis' },
    description: 'Sign-out said "doing fine." But WBC is 18 and BP has been in the 90s. Something\'s off.',
    openingStatement: 'Sign-out was brief: "cellulitis, doing fine." But you notice the vitals are trending wrong. Do you accept it or verify?',
    keyTeachingPoints: ['Brief sign-outs miss things', 'Go see patients when taking over', 'Cellulitis + crepitus + not improving = nec fasc']
},

'resident-zebra': {
    id: 'resident-zebra', title: 'Zebra Diagnosis - Breaking Your Pattern',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Michael Park', age: 28, sex: 'Male', setting: 'Emergency Department', acuity: 'High', chiefComplaint: 'Severe Headache' },
    description: 'Worst headache of life. CT negative. LP "traumatic." About to be discharged with migraine. Something bothers you.',
    openingStatement: 'He\'s about to be discharged with migraine. CT negative, LP traumatic. But he\'s still in severe pain. Do you let him go?',
    keyTeachingPoints: ['Worst headache of life = SAH until proven otherwise', 'CT sensitivity decreases with time', 'Traumatic LP: RBCs should clear from tube 1 to 4']
},

'resident-two-crashing': {
    id: 'resident-two-crashing', title: 'Overlapping Emergencies - Triage and Delegation',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Multiple Patients', age: 0, sex: 'Multiple', setting: 'Hospital Ward', acuity: 'Critical', chiefComplaint: 'Two Emergencies' },
    description: 'Two pages 30 seconds apart: chest pain and seizure/unresponsive. You\'re alone.',
    openingStatement: 'Room 412: chest pain with diaphoresis. Room 508: seizure, now unresponsive. You\'re night float, alone. What\'s your move?',
    keyTeachingPoints: ['Airway problems take priority', 'Use rapid response teams', 'Delegate with specific orders', 'You cannot be two places at once']
},

'resident-pregnancy': {
    id: 'resident-pregnancy', title: 'Pregnancy Complicating Everything',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Sarah Mitchell', age: 29, sex: 'Female', setting: 'Emergency Department', acuity: 'High', chiefComplaint: 'Abdominal Pain - 24 Weeks Pregnant' },
    description: 'RLQ pain at 24 weeks. Could be appendicitis or obstetric. Imaging is complicated. Everything needs modification.',
    openingStatement: 'She\'s 24 weeks pregnant with severe RLQ pain and fever. How do you work this up when she\'s pregnant?',
    keyTeachingPoints: ['Involve OB early', 'US first, MRI safe, CT acceptable if needed', 'Appendix migrates in pregnancy', 'Untreated surgical emergencies harm fetus more than surgery']
},

'resident-polypharmacy': {
    id: 'resident-polypharmacy', title: 'Geriatric Polypharmacy - Deprescribing',
    category: 'Resident', discipline: 'resident', difficulty: 'intermediate',
    patient: { name: 'Eleanor Thompson', age: 84, sex: 'Female', setting: 'Medicine Ward', acuity: 'Medium', chiefComplaint: 'Falls' },
    description: 'She\'s on 14 medications. Many are Beers Criteria red flags. They may have caused her fall.',
    openingStatement: 'You spot: oxybutynin, diphenhydramine, lorazepam, PPI for 8 years. Which might be causing harm?',
    keyTeachingPoints: ['Beers Criteria lists inappropriate medications in elderly', 'Anticholinergics cause confusion and falls', 'Every medication needs a current indication', 'Deprescribing is active care']
},

'resident-addiction': {
    id: 'resident-addiction', title: 'Addiction Medicine - Compassionate Care',
    category: 'Resident', discipline: 'resident', difficulty: 'intermediate',
    patient: { name: 'Kevin Murphy', age: 35, sex: 'Male', setting: 'Medicine Ward', acuity: 'Medium', chiefComplaint: 'Endocarditis - IVDU' },
    description: 'Endocarditis from IV drug use. Team is frustrated. You want to actually help him.',
    openingStatement: 'The team is talking about "making him stay 6 weeks because he\'ll use the PICC to inject." What\'s a better approach?',
    keyTeachingPoints: ['Addiction is a disease', 'Offer MAT (buprenorphine/methadone)', 'Stigma affects care quality', 'Hospitalization is a reachable moment']
},

'resident-capacity': {
    id: 'resident-capacity', title: 'Capacity Assessment - Can They Refuse?',
    category: 'Resident', discipline: 'resident', difficulty: 'advanced',
    patient: { name: 'Dorothy Williams', age: 78, sex: 'Female', setting: 'Medicine Ward', acuity: 'Medium', chiefComplaint: 'Refusing Amputation' },
    description: 'She needs amputation to live. She\'s refusing. Team wants to override her. You need to assess capacity.',
    openingStatement: 'She needs her leg amputated or she\'ll die. She says no. Does she have capacity to refuse?',
    keyTeachingPoints: ['Capacity = understanding + appreciation + reasoning + choice', 'Bad decision ≠ lack of capacity', 'Disagreement is not incapacity', 'Respect autonomy']
},

'resident-malpractice-risk': {
    id: 'resident-malpractice-risk', title: 'Malpractice Risk - Documentation',
    category: 'Resident', discipline: 'resident', difficulty: 'intermediate',
    patient: { name: 'Thomas Wright', age: 52, sex: 'Male', setting: 'Emergency Department', acuity: 'Medium', chiefComplaint: 'Chest Pain - Discharged' },
    description: 'Negative troponin, being discharged with GERD. No stress test. Something makes you nervous.',
    openingStatement: 'He had 30 minutes of chest pain, one troponin, no stress test. He feels better. You\'re writing the discharge. What do you do?',
    keyTeachingPoints: ['Document your reasoning', 'Give specific return precautions', 'Arrange actual follow-up', 'Communication prevents lawsuits']
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_RESIDENT_CASES;
}
if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_RESIDENT_CASES);
} else if (typeof window !== 'undefined') {
    window.COACHDX_RESIDENT_CASES = COACHDX_RESIDENT_CASES;
}
