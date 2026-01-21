// ============================================================================
// COACHDX RESIDENT SPECIALTY CASES
// Specialty-Specific Advanced Cases for Medical Residents
// Created: January 2026
// ============================================================================
// 
// Cases organized by specialty for resident training
// Load the relevant specialty module based on user selection
// ============================================================================

const COACHDX_SPECIALTY_CASES = {

// ============================================================================
// EMERGENCY MEDICINE CASES
// ============================================================================

'em-resus-leadership': {
    id: 'em-resus-leadership',
    title: 'Resuscitation Team Leadership',
    category: 'Emergency Medicine',
    discipline: 'resident',
    specialty: 'em',
    difficulty: 'advanced',
    patient: { name: 'Unknown Male', age: 45, sex: 'Male', setting: 'ED Resus Bay', acuity: 'Critical', chiefComplaint: 'Cardiac Arrest' },
    description: 'EMS is 2 minutes out with a witnessed arrest, CPR in progress, one shock given. You\'re the resuscitation team leader tonight. Time to run your first code as the leader.',
    openingStatement: 'The radio crackles: "2 minutes out, 45-year-old male, witnessed arrest at gym, bystander CPR, we shocked V-fib once, now in PEA." You have nurses, a tech, and a medical student looking at you. What do you do?',
    keyTeachingPoints: [
        'Team leader stands at foot of bed, maintains situational awareness',
        'Assign roles clearly before patient arrives',
        'Closed-loop communication: "Give epi" → "Epi given" → "Thank you"',
        'Think H\'s and T\'s early in PEA',
        'Time your interventions - announce 2-minute marks',
        'Debrief with team after every resuscitation'
    ],
    sbarScenario: {
        context: 'After ROSC, you need to call cardiology for emergent cath.',
        callingTo: 'Cardiology Fellow',
        expectedSBAR: {
            situation: 'I have a post-arrest patient with ROSC who needs emergent cath evaluation.',
            background: 'Witnessed arrest at gym, initially V-fib, required 3 shocks and 2 rounds of epi. ROSC after 12 minutes.',
            assessment: 'ECG shows anterior ST elevation. I suspect acute coronary occlusion as the cause of arrest.',
            recommendation: 'I need you to activate the cath lab emergently. He\'s intubated, on pressors, and we\'re starting TTM.'
        }
    }
},

'em-peds-emergency': {
    id: 'em-peds-emergency',
    title: 'Pediatric Emergency - Sick Infant',
    category: 'Emergency Medicine',
    discipline: 'resident',
    specialty: 'em',
    difficulty: 'advanced',
    patient: { name: 'Baby Garcia', age: 0.5, sex: 'Male', setting: 'ED', acuity: 'Critical', chiefComplaint: 'Fever and Lethargy' },
    description: 'A 6-week-old with fever of 101.5°F and "not acting right." Parents are terrified. The infant looks gray and mottled. This is a sick baby.',
    openingStatement: 'Mom says he was fine yesterday but today won\'t eat and feels hot. He\'s quiet - too quiet. Mottled skin, weak cry, fontanelle feels full. Temp 38.6°C. This is a critically ill neonate. Go.',
    keyTeachingPoints: [
        'Fever in infant <60 days = full sepsis workup, period',
        'Lethargy + mottling + poor feeding = sepsis until proven otherwise',
        'HSV encephalitis must be on differential - add acyclovir',
        'Bulging fontanelle = increased ICP, concerning for meningitis',
        'Don\'t let parental anxiety make you miss the sick baby',
        'Peds dosing: antibiotics weight-based, know your doses'
    ]
},

'em-trauma-decision': {
    id: 'em-trauma-decision',
    title: 'Trauma - OR vs Angio vs Resuscitate',
    category: 'Emergency Medicine',
    discipline: 'resident',
    specialty: 'em',
    difficulty: 'advanced',
    patient: { name: 'Marcus Johnson', age: 28, sex: 'Male', setting: 'ED Trauma Bay', acuity: 'Critical', chiefComplaint: 'GSW Abdomen' },
    description: 'Gunshot wound to abdomen, hypotensive, distended. FAST is positive. Surgery wants CT first, you want him in the OR now. Navigate this conflict while keeping the patient alive.',
    openingStatement: 'He\'s shot in the belly, BP 78/50, abdomen rigid, FAST shows free fluid. The surgery resident wants a CT. Your attending is in a procedure. What do you do?',
    keyTeachingPoints: [
        'Unstable trauma + positive FAST = OR, not CT',
        'Know when to push back on consultants',
        'Massive transfusion protocol - call it early',
        'Permissive hypotension until surgical control',
        'Call the surgery attending directly if needed',
        'Document your decision-making in real time'
    ]
},

// ============================================================================
// SURGERY CASES
// ============================================================================

'surg-acute-abdomen': {
    id: 'surg-acute-abdomen',
    title: 'Acute Abdomen - Operative Decision',
    category: 'Surgery',
    discipline: 'resident',
    specialty: 'surgery',
    difficulty: 'advanced',
    patient: { name: 'Robert Chen', age: 67, sex: 'Male', setting: 'ED Consult', acuity: 'High', chiefComplaint: 'Severe Abdominal Pain' },
    description: 'ED consult for acute abdomen. CT shows dilated small bowel with transition point but no clear obstruction. Do you operate tonight or watch and wait?',
    openingStatement: 'The CT shows SBO with a transition point in the pelvis, maybe adhesive. No free air, no obvious dead bowel. ED wants to admit to medicine, you think he needs surgery. Convince me one way or the other.',
    keyTeachingPoints: [
        'Complete SBO with transition point often needs surgery',
        'Signs of strangulation: fever, tachycardia, localized tenderness, elevated lactate',
        'Adhesive SBO can sometimes be managed non-operatively',
        'If operating: know the principles of SBO surgery',
        'Serial exams are essential if watching',
        'When in doubt, call your attending - but have a recommendation'
    ]
},

'surg-post-op-complication': {
    id: 'surg-post-op-complication',
    title: 'Post-Op Complication - Anastomotic Leak',
    category: 'Surgery',
    discipline: 'resident',
    specialty: 'surgery',
    difficulty: 'advanced',
    patient: { name: 'Patricia Williams', age: 58, sex: 'Female', setting: 'Surgical Floor', acuity: 'High', chiefComplaint: 'POD 5 Tachycardia and Fever' },
    description: 'Your patient had a low anterior resection 5 days ago. Nurse calls about new fever and tachycardia. Is this normal post-op course or anastomotic leak?',
    openingStatement: 'POD 5 from LAR for rectal cancer. Was doing well, now temp 101.8, HR 108, mild abdominal discomfort. She says she feels "off." Is this concerning?',
    keyTeachingPoints: [
        'POD 5-7 is classic timing for anastomotic leak',
        'Tachycardia is often the first sign - don\'t ignore it',
        '"Patient doesn\'t look right" = take seriously',
        'Get CT with rectal contrast to evaluate anastomosis',
        'Anastomotic leak may need OR vs IR drainage vs abx depending on containment',
        'Don\'t be the resident who misses a leak because "vitals are almost normal"'
    ]
},

'surg-consent-complication': {
    id: 'surg-consent-complication',
    title: 'Informed Consent - Discussing Complications',
    category: 'Surgery',
    discipline: 'resident',
    specialty: 'surgery',
    difficulty: 'intermediate',
    patient: { name: 'James Thompson', age: 72, sex: 'Male', setting: 'Pre-Op', acuity: 'Elective', chiefComplaint: 'Consent for Colectomy' },
    description: 'You\'re consenting a patient for right hemicolectomy for colon cancer. He asks "What could go wrong?" How do you discuss surgical risks honestly without terrifying him?',
    openingStatement: 'Mr. Thompson is scheduled for right hemicolectomy tomorrow. You\'re doing the consent. He seems nervous and asks, "What are the chances something goes wrong?" How do you answer?',
    keyTeachingPoints: [
        'Informed consent is a conversation, not a form',
        'Discuss common AND serious risks',
        'Use numbers when possible: "About 1-2% chance of..."',
        'Acknowledge uncertainty honestly',
        'Give him time to ask questions',
        'Document the discussion, not just the signature'
    ]
},

// ============================================================================
// PEDIATRICS CASES
// ============================================================================

'peds-neonatal-distress': {
    id: 'peds-neonatal-distress',
    title: 'Neonatal Respiratory Distress',
    category: 'Pediatrics',
    discipline: 'resident',
    specialty: 'peds',
    difficulty: 'advanced',
    patient: { name: 'Baby Boy Martinez', age: 0, sex: 'Male', setting: 'Newborn Nursery', acuity: 'High', chiefComplaint: 'Grunting and Retracting' },
    description: 'You\'re called to the nursery for a 4-hour-old term infant with respiratory distress. Grunting, flaring, retracting. Is this TTN, RDS, pneumonia, or something surgical?',
    openingStatement: 'Term infant, normal delivery, now with RR 72, grunting, subcostal retractions. SpO2 88% on room air. Mom had GBS prophylaxis. What\'s your differential and workup?',
    keyTeachingPoints: [
        'TTN most common but diagnosis of exclusion',
        'Grunting = baby creating auto-PEEP',
        'Sepsis workup if ANY risk factors or clinical concern',
        'Chest X-ray differentiates most causes',
        'Surgical causes: CDH, TEF, choanal atresia',
        'Early CPAP can prevent intubation'
    ]
},

'peds-non-accidental': {
    id: 'peds-non-accidental',
    title: 'Non-Accidental Trauma Recognition',
    category: 'Pediatrics',
    discipline: 'resident',
    specialty: 'peds',
    difficulty: 'advanced',
    patient: { name: 'Emma Wilson', age: 2, sex: 'Female', setting: 'ED', acuity: 'High', chiefComplaint: 'Arm Injury' },
    description: 'A 2-year-old brought in for arm pain. Dad says she fell off the couch. X-ray shows spiral humerus fracture. Something doesn\'t add up.',
    openingStatement: 'The X-ray shows a spiral fracture of the humerus. Dad says she fell off the couch. She\'s quiet and won\'t make eye contact. What are you thinking and what do you do?',
    keyTeachingPoints: [
        'Spiral fractures in non-ambulatory children are concerning',
        'Story doesn\'t match injury = red flag',
        'You are a mandated reporter - this is not optional',
        'Get skeletal survey to look for old fractures',
        'Document objectively what you see and what was said',
        'Child protective services, not police, is first call',
        'Don\'t interrogate - that\'s not your job'
    ]
},

'peds-diabetic-child': {
    id: 'peds-diabetic-child',
    title: 'New Onset Diabetes in a Child',
    category: 'Pediatrics',
    discipline: 'resident',
    specialty: 'peds',
    difficulty: 'intermediate',
    patient: { name: 'Tyler Johnson', age: 8, sex: 'Male', setting: 'ED', acuity: 'Medium', chiefComplaint: 'Weight Loss and Polyuria' },
    description: '8-year-old with 3 weeks of weight loss, polydipsia, polyuria. Blood glucose is 480, urine ketones positive. New Type 1 diabetes - now what?',
    openingStatement: 'Tyler has lost 8 pounds in 3 weeks and is up peeing all night. Glucose 480, positive ketones, pH 7.28. This is new-onset T1DM in DKA. Walk me through your management.',
    keyTeachingPoints: [
        'Peds DKA: slower correction than adults to prevent cerebral edema',
        'Start with NS bolus 10-20 mL/kg, then maintenance + deficit',
        'Insulin drip 0.05-0.1 units/kg/hr (lower than adults)',
        'Monitor for cerebral edema: headache, vomiting, altered mental status',
        'Glucose should drop 50-100 mg/dL per hour, no faster',
        'Family education starts in hospital - overwhelming for everyone'
    ]
},

// ============================================================================
// OB/GYN CASES
// ============================================================================

'obgyn-postpartum-hemorrhage': {
    id: 'obgyn-postpartum-hemorrhage',
    title: 'Postpartum Hemorrhage',
    category: 'OB/GYN',
    discipline: 'resident',
    specialty: 'obgyn',
    difficulty: 'advanced',
    patient: { name: 'Maria Santos', age: 32, sex: 'Female', setting: 'L&D', acuity: 'Critical', chiefComplaint: 'Heavy Bleeding Post-Delivery' },
    description: 'Just delivered twins vaginally. Now bleeding heavily - 1500mL estimated and ongoing. BP dropping. Time to act.',
    openingStatement: 'She delivered twins 10 minutes ago, placenta is out and complete, but she\'s soaking pads and there\'s blood pooling. BP 88/54, HR 124. What\'s your plan?',
    keyTeachingPoints: [
        'PPH causes: Tone (most common), Trauma, Tissue, Thrombin',
        'Bimanual uterine massage is first intervention',
        'Uterotonic agents: oxytocin, methergine, hemabate, misoprostol',
        'Have massive transfusion protocol ready',
        'If uterotonics fail: tamponade balloon, B-lynch suture, embolization, hysterectomy',
        'Don\'t delay for certainty - act while assessing'
    ]
},

'obgyn-ectopic': {
    id: 'obgyn-ectopic',
    title: 'Ruptured Ectopic Pregnancy',
    category: 'OB/GYN',
    discipline: 'resident',
    specialty: 'obgyn',
    difficulty: 'advanced',
    patient: { name: 'Jennifer Liu', age: 28, sex: 'Female', setting: 'ED', acuity: 'Critical', chiefComplaint: 'Abdominal Pain and Syncope' },
    description: 'Young woman with missed period, now with severe abdominal pain and syncopal episode. Positive pregnancy test, free fluid on FAST. Ruptured ectopic.',
    openingStatement: 'She fainted at work. Positive pregnancy test, LMP 6 weeks ago. HR 118, BP 90/60. FAST shows significant free fluid in the pelvis. She\'s going to the OR. What do you need to know and do before you go?',
    keyTeachingPoints: [
        'Ruptured ectopic is a surgical emergency',
        'Type and cross, consent, blood available',
        'Know your surgical approach: laparoscopic vs open depending on stability',
        'Salpingectomy vs salpingostomy - know indications',
        'Rh status - need RhoGAM if Rh negative',
        'Future fertility discussion can wait until she\'s stable'
    ]
},

// ============================================================================
// PSYCHIATRY CASES
// ============================================================================

'psych-suicidal-assessment': {
    id: 'psych-suicidal-assessment',
    title: 'Suicide Risk Assessment',
    category: 'Psychiatry',
    discipline: 'resident',
    specialty: 'psych',
    difficulty: 'advanced',
    patient: { name: 'David Miller', age: 42, sex: 'Male', setting: 'ED Psych Hold', acuity: 'High', chiefComplaint: 'Suicidal Ideation' },
    description: 'Brought in by police after texting friend "goodbye." Now calm and denying everything. "I\'m fine, I want to go home." Your job is to assess risk and determine disposition.',
    openingStatement: 'Mr. Miller sent a goodbye text to his friend who called 911. Now he says it was a "misunderstanding" and wants to leave. He seems calm and makes good eye contact. How do you assess this?',
    keyTeachingPoints: [
        'Calm after crisis can be relief at decision made - high risk',
        'Ask directly about suicide: plan, means, intent, timeline',
        'Static risk factors (history) + dynamic factors (current stressors)',
        'Collateral information is essential - call the friend',
        'Means restriction saves lives - ask about access to weapons',
        'Document your risk assessment, not just your decision',
        'Err on the side of safety - you can\'t take it back'
    ]
},

'psych-agitation': {
    id: 'psych-agitation',
    title: 'Acute Agitation Management',
    category: 'Psychiatry',
    discipline: 'resident',
    specialty: 'psych',
    difficulty: 'intermediate',
    patient: { name: 'Unknown Male', age: 35, sex: 'Male', setting: 'ED', acuity: 'High', chiefComplaint: 'Agitation' },
    description: 'Security calls: patient in the ED is becoming aggressive, throwing things, threatening staff. He was brought in for psych eval but refused to wait. De-escalation first, but be ready.',
    openingStatement: 'He\'s in the corner of the room, yelling about being "locked up." He picked up a chair but put it down. Security is at the door. What\'s your approach?',
    keyTeachingPoints: [
        'De-escalation first: calm voice, non-threatening posture, safe distance',
        'Offer choices: "Would you like to sit or stand while we talk?"',
        'Rule out medical causes: glucose, hypoxia, infection, drugs',
        'Oral medication preferred if patient will take it',
        'IM options: haloperidol + diphenhydramine, olanzapine, ziprasidone, droperidol',
        'Restraints are last resort and require close monitoring',
        'Document attempts at de-escalation before medication/restraints'
    ]
},

// ============================================================================
// CRITICAL CARE / ICU CASES
// ============================================================================

'icu-vent-desync': {
    id: 'icu-vent-desync',
    title: 'Ventilator Dyssynchrony',
    category: 'Critical Care',
    discipline: 'resident',
    specialty: 'icu',
    difficulty: 'advanced',
    patient: { name: 'William Foster', age: 65, sex: 'Male', setting: 'ICU', acuity: 'Critical', chiefComplaint: 'Fighting the Ventilator' },
    description: 'Patient is "bucking the vent" - alarms going off, pressures high, SpO2 dropping. The nurse wants to sedate him more. Is that the right answer?',
    openingStatement: 'High-pressure alarms, SpO2 88%, patient looks uncomfortable, making double-triggered breaths. Nurse asks if you want propofol bolus. What do you assess first?',
    keyTeachingPoints: [
        'DOPES mnemonic: Displacement, Obstruction, Pneumothorax, Equipment, Stacked breaths',
        'Don\'t sedate without diagnosis - could mask serious problem',
        'Disconnect and bag - if improves, it\'s vent/circuit issue',
        'Check ETT position, suction for mucus plug',
        'Assess for pneumothorax if sudden decompensation',
        'Dyssynchrony causes: inappropriate mode, wrong trigger, flow starvation, auto-PEEP'
    ]
},

'icu-nutrition': {
    id: 'icu-nutrition',
    title: 'ICU Nutrition - When and How',
    category: 'Critical Care',
    discipline: 'resident',
    specialty: 'icu',
    difficulty: 'intermediate',
    patient: { name: 'Angela Martinez', age: 58, sex: 'Female', setting: 'ICU', acuity: 'Critical', chiefComplaint: 'Septic Shock Day 4' },
    description: 'She\'s been in the ICU for 4 days on pressors. NPO since admission. The dietitian asks about nutrition. How do you feed a critically ill patient?',
    openingStatement: 'She\'s still on norepinephrine 8 mcg/min but stable-ish. Hasn\'t eaten in 4 days. When and how do you start feeding her?',
    keyTeachingPoints: [
        'Early enteral nutrition (within 24-48h) improves outcomes',
        'Enteral > parenteral whenever possible (gut integrity)',
        'Can feed on low-dose pressors if hemodynamically stable',
        'Start at trophic rate (10-20 mL/hr), advance as tolerated',
        'Watch for intolerance: high residuals, abdominal distension',
        'TPN only if gut not functioning after 7 days',
        'Avoid overfeeding - caloric goal is 20-25 kcal/kg'
    ]
},

'icu-family-withdrawal': {
    id: 'icu-family-withdrawal',
    title: 'Withdrawal of Life Support',
    category: 'Critical Care',
    discipline: 'resident',
    specialty: 'icu',
    difficulty: 'advanced',
    patient: { name: 'Harold Thompson', age: 82, sex: 'Male', setting: 'ICU', acuity: 'Critical', chiefComplaint: 'Transition to Comfort' },
    description: 'After a family meeting, the decision is made to withdraw life support. The family is present and wants to be there at the end. How do you do this compassionately?',
    openingStatement: 'The family has decided that Mr. Thompson would not have wanted prolonged life support. They want to be present when you extubate. Walk me through how you manage this transition.',
    keyTeachingPoints: [
        'Prepare the family: what to expect, timeline, physical changes',
        'Pre-medicate for comfort: morphine for dyspnea, midazolam for agitation',
        'Turn off monitors and alarms - focus on the patient, not the numbers',
        'Remove lines that aren\'t for comfort',
        'Extubate to room air or low-flow O2',
        'Allow family time and presence',
        'Death may not be immediate - hours to days possible',
        'Support the family AND your team - this is hard for everyone'
    ]
}

};

// ============================================================================
// SPECIALTY METADATA
// ============================================================================

const SPECIALTY_INFO = {
    'im': { name: 'Internal Medicine', cases: ['resident-mof', 'resident-diagnostic-dilemma', 'resident-social-determinants', 'resident-polypharmacy'] },
    'em': { name: 'Emergency Medicine', cases: ['em-resus-leadership', 'em-peds-emergency', 'em-trauma-decision'] },
    'surgery': { name: 'Surgery', cases: ['surg-acute-abdomen', 'surg-post-op-complication', 'surg-consent-complication'] },
    'peds': { name: 'Pediatrics', cases: ['peds-neonatal-distress', 'peds-non-accidental', 'peds-diabetic-child'] },
    'obgyn': { name: 'OB/GYN', cases: ['obgyn-postpartum-hemorrhage', 'obgyn-ectopic'] },
    'psych': { name: 'Psychiatry', cases: ['psych-suicidal-assessment', 'psych-agitation'] },
    'fm': { name: 'Family Medicine', cases: ['resident-social-determinants', 'resident-polypharmacy', 'resident-capacity'] },
    'icu': { name: 'Critical Care', cases: ['icu-vent-desync', 'icu-nutrition', 'icu-family-withdrawal', 'resident-mof'] }
};

// Helper function to get cases by specialty
function getCasesBySpecialty(specialty) {
    const caseIds = SPECIALTY_INFO[specialty]?.cases || [];
    const cases = [];
    
    caseIds.forEach(id => {
        if (COACHDX_SPECIALTY_CASES[id]) {
            cases.push(COACHDX_SPECIALTY_CASES[id]);
        }
    });
    
    return cases;
}

// ============================================================================
// EXPORT
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COACHDX_SPECIALTY_CASES, SPECIALTY_INFO, getCasesBySpecialty };
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_SPECIALTY_CASES);
}

if (typeof window !== 'undefined') {
    window.COACHDX_SPECIALTY_CASES = COACHDX_SPECIALTY_CASES;
    window.SPECIALTY_INFO = SPECIALTY_INFO;
    window.getCasesBySpecialty = getCasesBySpecialty;
}
