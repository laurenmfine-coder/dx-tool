// ============================================================================
// COACHDX INTERDISCIPLINARY CASE LIBRARY
// ENT, Pulmonology, ID, and Nursing Integration Cases
// Last Modified: January 7, 2026
// Author: Lauren Fine, MD, FAAAAI
// ============================================================================

const COACHDX_INTERDISCIPLINARY_CASES = {

// ============================================================================
// ENT INTEGRATION CASES
// ============================================================================

'ent-crswnp-biologics': {
    id: 'ent-crswnp-biologics',
    title: 'CRSwNP: When Surgery Alone Isn\'t Enough',
    category: 'Rhinology/ENT Integration',
    specialty: 'allergy-immunology',
    crossSpecialty: ['ent', 'rhinology'],
    discipline: 'medical',
    difficulty: 'intermediate',
    lastModified: '2026-01-07',
    
    patient: {
        name: 'Kwame Asante',
        age: 52,
        sex: 'Male',
        setting: 'Allergy/Immunology Clinic',
        chiefComplaint: 'Recurrent nasal polyps despite 3 sinus surgeries',
        acuity: 'Stable'
    },
    
    description: `A 52-year-old man is referred by ENT for evaluation of recurrent CRSwNP. He has had 3 FESS procedures over 8 years with polyp recurrence within 12-18 months each time. He uses fluticasone nasal spray and saline rinses daily. He also has moderate persistent asthma on ICS/LABA. He denies aspirin/NSAID sensitivity.`,
    
    openingStatement: `Mr. Okonkwo's ENT surgeon is frustrated with recurrent polyps despite technically successful surgeries. They want your input on biologics or other systemic therapies. How do you approach this evaluation?`,
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding CRSwNP phenotypes and the Type 2 inflammatory connection',
            initialPrompt: 'What do nasal polyps, asthma, and eosinophils have in common? Why might a patient have both conditions?'
        },
        'resident': {
            focus: 'Workup and biologic selection',
            initialPrompt: 'What labs and testing would help you decide on therapy? Walk me through your biologic selection process.'
        },
        'fellow': {
            focus: 'Coordinated care and AERD evaluation',
            initialPrompt: 'His blood eosinophils are 650 and total IgE is 320. How do you counsel him about biologics vs continued surgery? Should you challenge him with aspirin?'
        },
        'ent': {
            focus: 'Timing of biologics relative to surgery',
            initialPrompt: 'When in the surgical planning should biologics be considered? Pre-op, post-op, or instead of revision surgery?'
        }
    },
    
    defined_responses: {
        'current_management': `He uses fluticasone propionate 2 sprays each nostril BID and does saline rinses with budesonide respules 0.5mg added. He's tried oral prednisone bursts (20mg × 5 days) about 4 times per year for flares—they help temporarily. His asthma is on Symbicort 160/4.5 two puffs BID.`,
        
        'nasal_symptoms': `Severe nasal congestion bilaterally—he breathes through his mouth most of the time. Complete anosmia for 2 years. Thick post-nasal drainage. Facial pressure. Sleep is poor due to congestion. These symptoms significantly impact his quality of life.`,
        
        'asthma_control': `His asthma is "okay"—he uses rescue inhaler about 4x/week and has had 2 courses of oral steroids for asthma in the past year. He gets winded climbing stairs. He's never been hospitalized for asthma.`,
        
        'aspirin_history': `He's never taken aspirin regularly. Took ibuprofen years ago without problems that he recalls, but he avoids NSAIDs now "just to be safe" because someone told him to.`,
        
        'labs': `Blood eosinophils: 650/μL (elevated)
Total IgE: 320 IU/mL (mildly elevated)
Specific IgE: Positive to dust mite, cat, grass
Tryptase: 5.2 ng/mL (normal)`,
        
        'ct_findings': `CT sinuses shows: Bilateral complete opacification of ethmoid and maxillary sinuses with polyps prolapsing into nasal cavities. Frontal recess obstruction bilaterally. Mucosal thickening in sphenoids. Previous surgical changes noted.`,
        
        'biologic_discussion': `His profile suggests Type 2 high CRSwNP:
- Elevated blood eosinophils (650)
- Comorbid asthma
- Recurrent polyps despite adequate surgery
- Elevated IgE with aeroallergen sensitization

FDA-approved biologics for CRSwNP:
1. **Dupilumab (Dupixent)**: Anti-IL-4Rα; also approved for his asthma. Would treat BOTH conditions with one drug.
2. **Omalizumab (Xolair)**: Anti-IgE; his IgE qualifies. Also helps asthma.
3. **Mepolizumab (Nucala)**: Anti-IL-5; approved for CRSwNP and severe eosinophilic asthma.

Given his concurrent asthma and polyps, dupilumab is often first choice—addresses both with one injection.`,
        
        'aerd_consideration': `Given CRSwNP + asthma, AERD (Samter's triad) should be considered even without clear NSAID reaction history. Options:
1. Careful oral aspirin challenge (if considering aspirin desensitization)
2. Empirically avoid NSAIDs
3. If he needs NSAIDs for other reasons, consider challenge in monitored setting

Prevalence of AERD in patients with CRSwNP + asthma is ~30-40%.`,
        
        'surgery_vs_biologics': `This isn't surgery VS biologics—it's often both. Biologics can:
- Reduce polyp size and potentially avoid/delay surgery
- Improve surgical outcomes (less bleeding, better visualization)
- Extend remission after surgery
- Allow lower-dose topical steroids

Many ENTs now start biologics before revision surgery or use them to maintain results post-op. The goal is to break the cycle of recurrence.`
    },
    
    keyTeachingPoints: [
        'CRSwNP with asthma strongly suggests Type 2 (eosinophilic) inflammation',
        'Always consider AERD in patients with nasal polyps + asthma, even without known NSAID reactions',
        'Blood eosinophils >150-300 and total IgE help identify patients likely to respond to biologics',
        'Dupilumab, omalizumab, and mepolizumab are all FDA-approved for CRSwNP',
        'Biologics and surgery are complementary—not mutually exclusive',
        'Quality of life measures (smell, congestion, sleep) are important endpoints for polyp treatment'
    ],
    
    guidelines: {
        source: 'ICAR 2021, EPOS 2020, Biologics Practice Parameters',
        openAccessLinks: [
            'https://www.rhinologyjournal.com/Supplement_29.pdf'
        ]
    },
    
    relatedContent: [
        { type: 'tool', title: 'Biologics Selector', link: '../biologics-selector.html' },
        { type: 'mechanism', title: 'Allergen Immunotherapy', link: '../mechanism/immunotherapy-module.html' }
    ]
},

// ============================================================================
// PULMONOLOGY INTEGRATION CASES
// ============================================================================

'pulm-severe-asthma-phenotyping': {
    id: 'pulm-severe-asthma-phenotyping',
    title: 'Severe Asthma: Phenotyping for Biologic Selection',
    category: 'Severe Asthma',
    specialty: 'allergy-immunology',
    crossSpecialty: ['pulmonology', 'critical-care'],
    discipline: 'medical',
    difficulty: 'advanced',
    lastModified: '2026-01-07',
    
    patient: {
        name: 'Carmen Delgado',
        age: 45,
        sex: 'Female',
        setting: 'Severe Asthma Clinic',
        chiefComplaint: 'Asthma not controlled despite multiple medications',
        acuity: 'Stable but severe'
    },
    
    description: `A 45-year-old woman with asthma since childhood is referred for severe uncontrolled disease. She is on fluticasone/salmeterol 500/50 BID, tiotropium, montelukast, and uses albuterol 2-3 times daily. She has had 4 ED visits and 2 hospitalizations in the past year. She's been on prednisone 10mg daily for "years." BMI is 34. She has no known allergies on history.`,
    
    openingStatement: `Maria has been labeled "severe asthma" and referred for biologics. But before selecting a biologic, we need to do detective work. What's your approach to evaluating her?`,
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Defining severe asthma and its differential diagnosis',
            initialPrompt: 'What makes asthma "severe"? And what else could cause wheezing and dyspnea that might look like asthma?'
        },
        'resident': {
            focus: 'Systematic severe asthma workup',
            initialPrompt: 'What are the steps before starting a biologic? What could we be missing?'
        },
        'fellow': {
            focus: 'Phenotype identification and biologic selection',
            initialPrompt: 'Her eosinophils are only 80 on chronic prednisone. Does this mean she\'s not a biologic candidate? How do you assess her true phenotype?'
        },
        'pulmonologist': {
            focus: 'When is it really severe asthma vs difficult-to-treat asthma?',
            initialPrompt: 'What percentage of "severe asthma" referrals actually have severe asthma? What are you ruling out?'
        }
    },
    
    defined_responses: {
        'confirm_diagnosis': `Before assuming severe asthma, confirm the diagnosis:
1. Objective evidence of variable airflow obstruction (spirometry with BD response, PEF variability, or methacholine challenge)
2. Rule out mimics: VCD, COPD overlap, cardiac dysfunction, bronchiectasis
3. Assess for comorbidities: GERD, OSA, rhinosinusitis, obesity, anxiety

Many "severe asthma" patients actually have difficult-to-treat asthma due to treatable factors.`,
        
        'adherence_assessment': `Key adherence checks:
- Pharmacy refill records: Is she actually filling her controller?
- Inhaler technique: Observe her using devices
- Electronic monitoring data if available
- Ask non-judgmentally: "Many people find it hard to use inhalers every day..."

Studies show 50%+ of "severe asthma" patients have significant adherence issues.`,
        
        'spirometry': `FEV₁: 58% predicted (reduced)
FVC: 75% predicted
FEV₁/FVC: 0.62 (obstructive pattern)
Post-BD: FEV₁ improves 18% (significant bronchodilator response—supports asthma)`,
        
        'phenotype_workup': `While ON chronic prednisone, her eosinophils are suppressed (80/μL). This doesn't mean she's not eosinophilic—steroids mask the true count.

Options to assess true phenotype:
1. Sputum eosinophils (not suppressed as much by systemic steroids)
2. FeNO (fractional exhaled nitric oxide)—elevated in Type 2 inflammation
3. Historical eosinophil counts BEFORE prednisone started
4. Trial of steroid reduction with close monitoring (risky but informative)

Her FeNO comes back at 45 ppb (elevated >25), suggesting Type 2 inflammation despite low blood eos.`,
        
        'comorbidity_findings': `Important findings:
- Sleep study: Moderate OSA (AHI 22)—untreated! This worsens asthma control
- GERD symptoms present; no PPI currently
- BMI 34—obesity worsens asthma and reduces steroid responsiveness
- CT chest: No bronchiectasis, but air trapping present
- DLCO: Normal (argues against COPD overlap)`,
        
        'treatment_plan': `Comprehensive plan:
1. **CPAP for OSA**—this alone may significantly improve control
2. **PPI for GERD**—omeprazole 40mg daily
3. **Address obesity**—referral to weight management
4. **Optimize inhaler technique**—observed demonstration
5. **Once comorbidities addressed**, reassess phenotype
6. **Biologic selection** based on phenotype:
   - If elevated FeNO/eos: Dupilumab or anti-IL-5
   - If allergic with appropriate IgE: Omalizumab
   - If phenotype unclear: Tezepelumab (works across phenotypes)
7. **GOAL: Taper prednisone** once biologic on board`
    },
    
    keyTeachingPoints: [
        'Severe asthma = uncontrolled despite Step 4-5 therapy with good adherence and technique',
        'Up to 50% of severe asthma referrals have treatable comorbidities or adherence issues',
        'Always verify the diagnosis—VCD, COPD, obesity hypoventilation can mimic asthma',
        'Blood eosinophils are suppressed by systemic steroids; use FeNO or sputum eos to assess true phenotype',
        'OSA is present in up to 50% of severe asthma patients and worsens control',
        'Biologics are steroid-sparing—the goal is to eliminate chronic OCS, not just add another drug'
    ],
    
    guidelines: {
        source: 'GINA 2024 Difficult-to-Treat & Severe Asthma Guide, ERS/ATS Severe Asthma Guidelines',
        openAccessLinks: [
            'https://ginasthma.org/severe-asthma/'
        ]
    }
},

// ============================================================================
// NURSING EDUCATION CASES
// ============================================================================

'nursing-epipen-training': {
    id: 'nursing-epipen-training',
    title: 'Epinephrine Auto-Injector Training',
    category: 'Patient Education',
    specialty: 'allergy-immunology',
    discipline: 'nursing',
    difficulty: 'foundational',
    lastModified: '2026-01-07',
    
    patient: {
        name: 'Adaeze Eze',
        age: 8,
        sex: 'Female',
        setting: 'Allergy Clinic - Education Visit',
        chiefComplaint: 'New peanut allergy diagnosis, needs EpiPen training',
        acuity: 'Stable'
    },
    
    description: `An 8-year-old girl was recently diagnosed with peanut allergy after an anaphylactic reaction (hives, vomiting, difficulty breathing) at a birthday party. She was treated in the ED with epinephrine and is now in your clinic for EpiPen training. Her mother appears anxious and says, "I'm terrified to use that needle."`,
    
    openingStatement: `Emma and her mom need comprehensive anaphylaxis education and hands-on EpiPen training. Mom's anxiety is palpable. How do you approach this teaching session?`,
    
    levelAdaptations: {
        'nursing-student': {
            focus: 'Basic EpiPen technique and recognition of anaphylaxis',
            initialPrompt: 'What are the steps for using an EpiPen? When should it be given?'
        },
        'rn': {
            focus: 'Comprehensive education including anxiety management and action plan',
            initialPrompt: 'How do you address mom\'s needle anxiety while ensuring she can use the device in an emergency? What does a complete education session include?'
        },
        'school-nurse': {
            focus: 'School protocols and emergency planning',
            initialPrompt: 'What does Emma\'s school need to have in place? How do you coordinate with the family and school staff?'
        }
    },
    
    defined_responses: {
        'recognize_anaphylaxis': `Teach recognition of anaphylaxis symptoms:

SKIN: Hives, itching, flushing, swelling (face, lips, eyes)
GI: Nausea, vomiting, abdominal pain, diarrhea
RESPIRATORY: Throat tightness, difficulty swallowing, hoarse voice, wheezing, coughing, difficulty breathing
CARDIOVASCULAR: Dizziness, fainting, pale/blue color, weak pulse
NEUROLOGIC: Anxiety, confusion, sense of doom

KEY MESSAGE: "Anaphylaxis involves MORE THAN SKIN—if breathing or circulation is affected, give epinephrine immediately."`,
        
        'when_to_give': `GIVE EPINEPHRINE IF:
- Known allergen exposure PLUS any of:
  • Difficulty breathing or swallowing
  • Swelling of tongue/throat
  • Widespread hives WITH any other symptom
  • Dizziness, feeling faint
  • Vomiting WITH other symptoms
  
"When in doubt, give it. Epinephrine is safe—delaying can be dangerous. There is no harm from giving it if you're unsure, but there IS harm from waiting too long."`,
        
        'epipen_technique': `EpiPen Demonstration Steps:

1. RECOGNIZE anaphylaxis is occurring
2. CALL 911 (or have someone else call)
3. GET the EpiPen
4. REMOVE the blue safety cap (Blue to the sky)
5. HOLD orange tip against OUTER THIGH (through clothes is OK)
6. PRESS firmly until you hear a CLICK
7. HOLD for 10 seconds
8. REMOVE and massage the area
9. NOTE the time
10. Go to ER even if feeling better (biphasic reactions can occur)

Memory phrase: "Blue to the sky, orange to the thigh"`,
        
        'address_anxiety': `Addressing Mom's Needle Anxiety:

1. NORMALIZE: "Many parents feel this way. Your worry shows how much you care about Emma's safety."

2. REFRAME: "The needle is hidden—you never see it. You're not 'giving a shot,' you're pressing a button that saves her life."

3. PRACTICE: Use trainer device MULTIPLE times until it feels automatic. Practice builds confidence.

4. EMPOWER: "You are Emma's first responder. Paramedics won't be there in time—YOU will be. You can do this."

5. SCENARIO-BASED: "Let's practice: Emma says her throat feels funny at a restaurant. What do you do?" Walk through the whole sequence.`,
        
        'action_plan': `Anaphylaxis Action Plan should include:
- Photo of child
- Known allergens
- Symptoms to watch for
- Step-by-step instructions
- Emergency contacts
- Medication locations (home, school, grandparents)
- Physician signature

Copies go to: Parents, school nurse, teacher, coach, babysitter, grandparents, anywhere she spends time.`,
        
        'school_coordination': `School requirements:
1. Anaphylaxis Action Plan on file
2. EpiPen stored per state law (clinic vs classroom)
3. Trained staff designated (nurse, teacher, office)
4. 504 Plan or IHP documenting accommodations
5. Allergen-aware lunch protocols
6. Field trip planning process
7. Bus driver notification if applicable`
    },
    
    keyTeachingPoints: [
        'Epinephrine is the FIRST-line treatment for anaphylaxis—antihistamines are not enough',
        'Give epinephrine EARLY—delays increase risk of poor outcomes',
        'After epinephrine, ALWAYS go to ER for observation (biphasic reactions)',
        'Practice with trainer devices builds confidence and automaticity',
        'Address caregiver anxiety directly—fearful parents may hesitate to give epinephrine',
        'Written action plan and trained staff at school are essential',
        'Carry TWO epinephrine auto-injectors at all times (may need repeat dose)'
    ]
},

'nursing-biologic-self-injection': {
    id: 'nursing-biologic-self-injection',
    title: 'Teaching Biologic Self-Injection',
    category: 'Patient Education',
    specialty: 'allergy-immunology',
    discipline: 'nursing',
    difficulty: 'intermediate',
    lastModified: '2026-01-07',
    
    patient: {
        name: 'Vikram Patel',
        age: 34,
        sex: 'Male',
        setting: 'Allergy Clinic - Biologic Start Visit',
        chiefComplaint: 'Starting dupilumab for severe atopic dermatitis',
        acuity: 'Stable'
    },
    
    description: `A 34-year-old man with severe atopic dermatitis is starting dupilumab (Dupixent). He's never self-injected before and seems nervous. Today he'll receive his loading dose (600mg = 2 injections) in the office with observation, and you need to teach him to self-inject at home for future doses.`,
    
    openingStatement: `James is ready to start his biologic but is anxious about self-injecting. How do you structure this teaching session and ensure he leaves confident?`,
    
    defined_responses: {
        'pre_injection_education': `Before the First Injection:
        
1. Explain the medication:
   - "Dupilumab blocks the signals that cause your skin inflammation"
   - "It takes 4-8 weeks to see improvement—don't give up early"
   - "You'll inject every 2 weeks after the loading dose"

2. Review storage:
   - Refrigerate 2-8°C (36-46°F)
   - Take out 30-45 min before injection to warm to room temp
   - Never freeze, shake, or microwave
   - Don't use if cloudy, discolored, or has particles

3. Gather supplies:
   - Pre-filled syringe or autoinjector
   - Alcohol wipes
   - Cotton ball or gauze
   - Sharps container`,
        
        'injection_technique': `Step-by-Step Injection Teaching:

1. WASH hands thoroughly
2. SELECT site: thigh or abdomen (not within 2 inches of navel)
3. CLEAN site with alcohol; let dry completely
4. REMOVE cap from pen/syringe
5. PINCH skin if using syringe (not needed for autoinjector)
6. INSERT needle at 90° (or 45° if thin)
7. INJECT slowly and steadily
   - Pen: Press button, wait for 2nd click, hold 10-15 seconds
   - Syringe: Push plunger slowly, then count to 5
8. REMOVE needle straight out
9. APPLY gentle pressure with cotton ball (don't rub)
10. DISPOSE in sharps container
11. DOCUMENT date, site, any reactions`,
        
        'site_rotation': `Site Rotation Pattern:

Divide injection areas into quadrants and rotate systematically:
- Week 1: Right thigh
- Week 3: Left thigh  
- Week 5: Right abdomen
- Week 7: Left abdomen
- Week 9: Back to right thigh

Keep injection sites at least 1 inch apart. Avoid areas that are tender, bruised, scarred, or have active eczema.`,
        
        'common_reactions': `Expected vs Concerning Reactions:

EXPECTED (common, not dangerous):
- Injection site redness, swelling, itching (improves over time)
- Mild pain at injection site
- Headache initially

CONTACT PROVIDER IF:
- Severe injection site reaction lasting >1 week
- Eye symptoms (redness, itching, swelling)—common with dupilumab
- Signs of infection at injection site
- Allergic reaction symptoms (hives, difficulty breathing)—rare`,
        
        'return_demonstration': `Teach-Back and Return Demo:

1. Ask patient to explain when and how to store medication
2. Have patient demonstrate injection on trainer or actual injection
3. Correct technique errors gently
4. Repeat until confident
5. Provide written instructions to take home
6. Give clinic contact for questions
7. Schedule follow-up call in 1 week`
    },
    
    keyTeachingPoints: [
        'Allow medication to reach room temperature before injection—cold injection is painful',
        'Don\'t rub the injection site after—this can increase bruising',
        'Site rotation prevents lipodystrophy and improves absorption',
        'Initial injection site reactions typically improve after 4-8 weeks',
        'Conjunctivitis is a known dupilumab side effect—report to provider',
        'Return demonstration is essential—never assume teaching was successful without it',
        'Provide 24/7 contact information for emergencies'
    ]
}

};

// Export for module integration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_INTERDISCIPLINARY_CASES;
}

// Merge with main case library if present
if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_INTERDISCIPLINARY_CASES);
}
