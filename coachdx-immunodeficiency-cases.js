// ============================================================================
// COACHDX IMMUNODEFICIENCY CASE LIBRARY
// Advanced Clinical Reasoning Cases: Immunodeficiency & Infectious Disease Integration
// Last Modified: January 7, 2026
// Author: Lauren Fine, MD, FAAAAI
// ============================================================================
//
// These cases integrate allergy/immunology with infectious disease and critical care
// Each case includes evidence-based guidelines and open-access references
//
// ============================================================================

const COACHDX_IMMUNODEFICIENCY_CASES = {

// ============================================================================
// CVID CASES
// ============================================================================

'ai-cvid-sepsis-presentation': {
    id: 'ai-cvid-sepsis-presentation',
    title: 'Sepsis Revealing Undiagnosed CVID',
    category: 'Immunodeficiency',
    specialty: 'allergy-immunology',
    crossSpecialty: ['infectious-disease', 'critical-care', 'pulmonology'],
    discipline: 'medical',
    difficulty: 'advanced',
    isCritical: true,
    lastModified: '2026-01-07',
    
    patient: {
        name: 'Michael Thompson',
        age: 34,
        sex: 'Male',
        setting: 'Medical ICU',
        chiefComplaint: 'Septic shock, respiratory failure',
        acuity: 'Critical'
    },
    
    description: `A 34-year-old man is admitted to the MICU with septic shock and respiratory failure. Blood cultures grew non-typeable Haemophilus influenzae. Chart review reveals 4 episodes of pneumonia in the past 3 years and 2 sinus surgeries. He has no known medical conditions and takes no medications. His parents are healthy and non-consanguineous.`,
    
    openingStatement: `This patient is critically ill with an unusual organism for his age. The recurrent infection history is striking. What aspects of his presentation concern you for an underlying immunodeficiency?`,
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Recognizing red flags for immunodeficiency, understanding antibody function',
            initialPrompt: 'What warning signs suggest this patient might have an underlying immune problem rather than just bad luck with infections?',
            keyObjectives: [
                'Identify warning signs of primary immunodeficiency (Jeffrey Modell Foundation criteria)',
                'Understand role of antibodies in protection against encapsulated organisms',
                'Learn about CVID as most common symptomatic primary immunodeficiency'
            ]
        },
        'resident': {
            focus: 'Systematic immunodeficiency workup, empiric management',
            initialPrompt: 'Walk me through your diagnostic approach. What labs would you order, and what empiric treatment considerations are unique to this patient?',
            keyObjectives: [
                'Order appropriate screening labs (quantitative immunoglobulins, CBC, HIV)',
                'Understand when to involve immunology consultation',
                'Recognize need for broader antimicrobial coverage in immunodeficiency'
            ]
        },
        'fellow': {
            focus: 'CVID diagnostic criteria, management decisions, long-term planning',
            initialPrompt: 'His IgG is 180 mg/dL. Walk me through confirming CVID diagnosis and your management plan both acutely and long-term.',
            keyObjectives: [
                'Apply ESID/ICON diagnostic criteria for CVID',
                'Discuss timing of IVIG initiation in acute illness',
                'Plan comprehensive CVID evaluation and monitoring'
            ]
        },
        'critical-care': {
            focus: 'ICU management of immunocompromised sepsis',
            initialPrompt: 'How does suspected immunodeficiency change your ICU management strategy?',
            keyObjectives: [
                'Broader antimicrobial coverage considerations',
                'IVIG as adjunctive therapy in sepsis',
                'Infection control and prophylaxis'
            ]
        }
    },
    
    conceptDomains: {
        'Warning Signs': [
            'recurrent_pneumonia', 
            'sinus_surgeries', 
            'encapsulated_organisms',
            'adult_onset_immunodeficiency',
            'family_history'
        ],
        'Diagnostic Workup': [
            'quantitative_immunoglobulins',
            'igg_subclasses',
            'specific_antibody_titers',
            'lymphocyte_subsets',
            'hiv_testing',
            'secondary_causes'
        ],
        'CVID Criteria': [
            'igg_reduction',
            'iga_or_igm_reduction',
            'impaired_vaccine_response',
            'exclusion_of_other_causes',
            'age_requirements'
        ],
        'Acute Management': [
            'broad_spectrum_antibiotics',
            'sepsis_resuscitation',
            'ivig_acute_dosing',
            'respiratory_support'
        ],
        'Long-term Management': [
            'igg_replacement_therapy',
            'prophylactic_antibiotics',
            'vaccination_approach',
            'complication_screening',
            'monitoring_schedule'
        ]
    },
    
    defined_responses: {
        'history_infections': `He's had pneumonia 4 times in 3 years - two required hospitalization. He's had chronic sinusitis since his 20s with two functional endoscopic sinus surgeries. He also gets bronchitis 2-3 times per year that "always needs antibiotics." Childhood was unremarkable, but he recalls being "sick a lot" in college.`,
        
        'family_history': `Parents are healthy, not related. One younger sister is healthy. No family history of recurrent infections, autoimmune disease, or early cancer. No consanguinity.`,
        
        'initial_labs': `WBC 18,500 with 89% neutrophils, Hgb 11.2, platelets 145,000. Lactate 4.8 (elevated). Procalcitonin 12.5. Creatinine 1.9 (baseline unknown). Blood cultures positive for non-typeable Haemophilus influenzae.`,
        
        'immunoglobulin_levels': `IgG: 180 mg/dL (normal 700-1600)
IgA: 45 mg/dL (normal 70-400)  
IgM: 35 mg/dL (normal 40-230)
All significantly reduced - this is a pan-hypogammaglobulinemia pattern.`,
        
        'lymphocyte_subsets': `CD3+ T cells: 1200/μL (normal)
CD4+ T cells: 650/μL (normal)
CD8+ T cells: 480/μL (normal)
CD19+ B cells: 180/μL (normal)
CD16+56+ NK cells: 250/μL (normal)
T cell numbers are preserved, but this doesn't assess function.`,
        
        'vaccine_responses': `Pneumococcal antibody titers (serotypes 1, 3, 5, 14, 19F, 23F): All <1.3 μg/mL (inadequate response despite vaccination 2 years ago). This demonstrates impaired specific antibody production despite normal B cell numbers.`,
        
        'cvid_diagnosis': `He meets ESID/ICON criteria for CVID:
• Marked decrease in IgG (>2 SD below mean for age)
• Marked decrease in at least one of IgM or IgA ✓ (both reduced)
• Impaired vaccine responses ✓
• Exclusion of secondary causes ✓ (HIV negative, no protein-losing states)
• Age >4 years at onset ✓
• No evidence of T cell deficiency ✓`,
        
        'acute_management': `Current management:
1. Broad-spectrum antibiotics: Ceftriaxone 2g IV q12h (covers H. flu well, but we broadened empirically given immunodeficiency)
2. Hemodynamic support: Norepinephrine for MAP >65
3. Respiratory: Intubated, ARDS-net protocol
4. IVIG: Loading dose 400-600 mg/kg - debatable timing in acute sepsis, but given profound hypogammaglobulinemia, we initiated
5. Stress-dose steroids: Not routinely indicated for CVID, reserved for refractory shock`,
        
        'encapsulated_organisms': `Non-typeable H. influenzae is an encapsulated organism. Patients with antibody deficiency are particularly susceptible to encapsulated bacteria because opsonizing antibodies are critical for phagocytosis. Classic encapsulated organisms: "SHiN SKiS" - Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis, Salmonella, Klebsiella, Group B Strep.`,
        
        'long_term_plan': `After ICU stabilization:
1. IVIG replacement: 400-600 mg/kg every 3-4 weeks, target trough IgG >500-800 mg/dL
2. Alternatively SCIG: Weekly dosing, same monthly total
3. Prophylactic antibiotics: Consider azithromycin 250mg 3x/week for bronchiectasis prevention
4. Vaccinations: Avoid live vaccines; give killed vaccines but may have poor response
5. Screen for CVID complications: CT chest for bronchiectasis, autoimmune cytopenias, granulomatous disease, lymphoma
6. Pulmonology follow-up for lung function monitoring
7. Annual screening: CBC, LFTs, consider CT q2-3 years`
    },
    
    keyTeachingPoints: [
        'Non-typeable H. influenzae bacteremia in a young adult should raise suspicion for immunodeficiency',
        'CVID is the most common symptomatic primary immunodeficiency, typically presenting in 2nd-4th decade',
        'Diagnosis requires: ↓ IgG + ↓ IgA or IgM + impaired vaccine response + exclusion of secondary causes',
        'Normal B cell numbers with low immunoglobulins suggests a defect in B cell differentiation or function',
        'IVIG replacement is lifelong; target trough IgG >500 mg/dL (some target >800 for those with lung disease)',
        'CVID patients need screening for complications: bronchiectasis, autoimmune disease, lymphoma, granulomatous disease',
        'Encapsulated organisms (S. pneumoniae, H. influenzae, N. meningitidis) are characteristic of antibody deficiency'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Practice Parameter on Immunodeficiency 2015; ESID/ICON CVID Criteria 2014; Jeffrey Modell Foundation Warning Signs',
        openAccessLinks: [
            'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Primary-Immunodeficiency-Disease-2015.pdf',
            'https://pubmed.ncbi.nlm.nih.gov/24235761/', // ESID criteria
            'https://www.info4pi.org/library/educational-materials/10-warning-signs'
        ],
        keyReferences: [
            {
                citation: 'Bonilla FA, Khan DA, Ballas ZK, et al. Practice parameter for the diagnosis and management of primary immunodeficiency. J Allergy Clin Immunol. 2015;136(5):1186-1205.',
                pmid: '26371839',
                openAccess: true,
                keyFinding: 'Comprehensive guidelines for PID diagnosis and management'
            },
            {
                citation: 'Seidel MG, Kindle G, Gathmann B, et al. The European Society for Immunodeficiencies (ESID) Registry Working Definitions for the Clinical Diagnosis of Inborn Errors of Immunity. J Allergy Clin Immunol Pract. 2019;7(6):1763-1770.',
                pmid: '30776527',
                openAccess: false,
                keyFinding: 'Standardized criteria for CVID and other PIDs'
            },
            {
                citation: 'Resnick ES, Moshier EL, Godbold JH, Cunningham-Rundles C. Morbidity and mortality in common variable immune deficiency over 4 decades. Blood. 2012;119(7):1650-1657.',
                pmid: '22180439',
                openAccess: true,
                keyFinding: 'Long-term outcomes and complications of CVID'
            }
        ]
    },
    
    relatedContent: [
        { type: 'mechanism', title: 'Immunodeficiency Module', link: '../mechanism/immunodeficiency-module.html', reason: 'Understand B cell development and function' },
        { type: 'mechanism', title: 'Sepsis & Shock', link: '../mechanism/sepsis-shock-module.html', reason: 'ICU management principles' },
        { type: 'coachdx', title: 'Classic CVID Presentation', link: 'mentor-chat.html?case=ai-cvid-classic', reason: 'Outpatient CVID workup' },
        { type: 'reasondx', title: 'Recurrent Infections Case', link: '../ReasonDx/training.html?case=recurrent-infections', reason: 'Differential diagnosis approach' }
    ]
},

'ai-cvid-classic': {
    id: 'ai-cvid-classic',
    title: 'Classic CVID: Recurrent Sinopulmonary Infections',
    category: 'Immunodeficiency',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    lastModified: '2026-01-07',
    
    patient: {
        name: 'Sarah Mitchell',
        age: 28,
        sex: 'Female',
        setting: 'Outpatient Allergy/Immunology Clinic',
        chiefComplaint: 'Recurrent sinus infections and pneumonia',
        acuity: 'Stable'
    },
    
    description: `A 28-year-old woman is referred for recurrent infections. She has had 3 pneumonias in 2 years and "constant" sinus infections requiring 6-8 antibiotic courses annually. She's frustrated because "antibiotics help but the infections keep coming back." She also has chronic fatigue and recently developed persistent diarrhea.`,
    
    openingStatement: `Ms. Mitchell has been referred by her PCP who is concerned about her recurrent infections. She seems frustrated and wants answers. Where would you like to start your evaluation?`,
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Warning signs of immunodeficiency, basic workup',
            initialPrompt: 'What aspects of her history concern you for an immune problem versus just frequent infections?'
        },
        'resident': {
            focus: 'Systematic workup, ruling out secondary causes',
            initialPrompt: 'Design your diagnostic workup. What are you looking for and what would help differentiate primary vs secondary immunodeficiency?'
        },
        'fellow': {
            focus: 'CVID complications, comprehensive management',
            initialPrompt: 'Her IgG is 250 and vaccine responses are poor. She also has diarrhea. What complications are you screening for and how do you counsel her?'
        }
    },
    
    defined_responses: {
        'infection_history': `Pneumonia: 3 episodes in 2 years, all requiring hospitalization. Organisms not always identified, but one grew Streptococcus pneumoniae. Sinusitis: "Constant" for 5 years, sees ENT regularly, has had 2 balloon sinuplasties. Uses 6-8 antibiotic courses per year. Bronchitis: Frequent, "turns into pneumonia" sometimes. UTIs: Occasional, not recurrent.`,
        
        'gi_symptoms': `Chronic watery diarrhea for 6 months. No blood, no weight loss yet. Colonoscopy showed lymphocytic infiltration. GI thinks it might be "CVID enteropathy" - that's partly why they referred her.`,
        
        'autoimmune_history': `She was diagnosed with ITP (immune thrombocytopenia) at age 22, treated with steroids and resolved. She also has vitiligo on her hands. These autoimmune features are actually common in CVID!`,
        
        'immunoglobulin_results': `IgG: 250 mg/dL (severely reduced)
IgA: <7 mg/dL (undetectable)
IgM: 28 mg/dL (reduced)
This pan-hypogammaglobulinemia pattern is classic for CVID.`,
        
        'vaccine_titers': `Pneumococcal serotypes: 0/23 protective
Tetanus: Undetectable
Diphtheria: 0.02 IU/mL (below protective)
Despite childhood vaccinations and a booster 1 year ago, she cannot maintain protective antibody levels.`,
        
        'diagnosis_confirmation': `She meets CVID criteria:
✓ Marked reduction in IgG (250, >2 SD below normal)
✓ Low IgA AND IgM
✓ Poor vaccine responses
✓ Age >4 years at diagnosis
✓ No T cell defect (normal lymphocyte subsets)
✓ Secondary causes excluded (HIV negative, no nephrotic syndrome, no protein-losing enteropathy causing the low Ig)`,
        
        'complications_workup': `CVID complications to screen for:
1. Pulmonary: CT chest shows early bronchiectasis - needs pulmonology follow-up
2. GI: Her enteropathy - may need nodular lymphoid hyperplasia evaluation, rule out celiac
3. Autoimmune: History of ITP and vitiligo - monitor for other cytopenias
4. Lymphoproliferative: Annual exam, low threshold for imaging
5. Granulomatous: Can mimic sarcoidosis - liver, lung, spleen involvement`,
        
        'treatment_plan': `1. IVIG: Start 400 mg/kg every 4 weeks
   - Goal trough IgG >500-600 mg/dL initially
   - She has lung disease, so we may target >800 mg/dL
   
2. Or SCIG: Weekly self-injection, same monthly dose
   - Better steady-state levels, more autonomy
   - We'll discuss both options and her preference
   
3. Supportive care:
   - Prophylactic azithromycin 250mg 3x/week
   - Aggressive treatment of breakthrough infections
   - No live vaccines

4. Monitoring:
   - Trough IgG before each infusion initially
   - CBC every 6 months (cytopenias)
   - LFTs, pulmonary function annually
   - CT chest every 2-3 years for bronchiectasis`
    },
    
    keyTeachingPoints: [
        'Jeffrey Modell Foundation 10 Warning Signs: ≥4 ear infections, ≥2 serious sinus infections, ≥2 months antibiotics with little effect, ≥2 pneumonias, failure to thrive, recurrent skin/organ abscesses, persistent thrush, need for IV antibiotics, ≥2 deep-seated infections, family history of PID',
        'CVID is associated with autoimmune disease in 20-25% of patients (cytopenias, autoimmune thyroid, vitiligo, inflammatory arthritis)',
        'GI manifestations (enteropathy, nodular lymphoid hyperplasia, IBD-like disease) occur in 10-15%',
        'Bronchiectasis develops in up to 70% if untreated - early IVIG initiation is critical',
        'IgG replacement is lifelong; IVIG every 3-4 weeks or SCIG weekly with equivalent total monthly dose',
        'Avoid live vaccines (MMR, varicella, zoster, yellow fever, oral typhoid, intranasal influenza)'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI PID Practice Parameter 2015; ICON CVID Consensus 2016',
        openAccessLinks: [
            'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Primary-Immunodeficiency-Disease-2015.pdf'
        ]
    },
    
    relatedContent: [
        { type: 'coachdx', title: 'CVID with Sepsis', link: 'mentor-chat.html?case=ai-cvid-sepsis-presentation', reason: 'Critical presentation of CVID' },
        { type: 'mechanism', title: 'IVIG/SCIG Pharmacology', link: '../mechanism/ivig-scig-module.html', reason: 'Understand replacement therapy' }
    ]
},

// ============================================================================
// SPECIFIC ANTIBODY DEFICIENCY
// ============================================================================

'ai-specific-antibody-deficiency': {
    id: 'ai-specific-antibody-deficiency',
    title: 'Specific Antibody Deficiency Evaluation',
    category: 'Immunodeficiency',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    lastModified: '2026-01-07',
    
    patient: {
        name: 'David Chen',
        age: 45,
        sex: 'Male',
        setting: 'Outpatient Allergy/Immunology Clinic',
        chiefComplaint: 'Recurrent sinus infections',
        acuity: 'Stable'
    },
    
    description: `A 45-year-old man presents with recurrent sinusitis. He gets 4-5 sinus infections per year requiring antibiotics, and "regular" URIs that "always turn into sinus infections." His quantitative immunoglobulins were checked by his PCP and are normal. He's frustrated that no one can figure out why he keeps getting sick.`,
    
    openingStatement: `His PCP checked his immunoglobulins and they were normal, so they thought he didn't have an immunodeficiency. But he keeps getting infections. What's going on here, and how do you approach this?`,
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding that total Ig levels don't tell the whole story',
            initialPrompt: 'If his immunoglobulin levels are normal, does that rule out an antibody problem?'
        },
        'resident': {
            focus: 'Vaccine response testing interpretation',
            initialPrompt: 'How would you test for specific antibody deficiency, and how do you interpret the results?'
        },
        'fellow': {
            focus: 'Management decisions in mild immunodeficiency',
            initialPrompt: 'He has normal total IgG but only responds to 30% of pneumococcal serotypes post-vaccination. Does he need IVIG?'
        }
    },
    
    defined_responses: {
        'immunoglobulin_levels': `IgG: 950 mg/dL (normal 700-1600)
IgA: 220 mg/dL (normal 70-400)
IgM: 110 mg/dL (normal 40-230)
IgG subclasses: All within normal limits
Total immunoglobulins are normal - but this doesn't assess FUNCTION.`,
        
        'baseline_pneumococcal': `Pre-vaccination pneumococcal titers (23 serotypes tested):
- Protective (≥1.3 μg/mL): 8/23 serotypes (35%)
- This suggests prior exposure/vaccination wasn't maintained well`,
        
        'post_vaccination': `4 weeks after Pneumovax 23:
- Protective response: 7/23 serotypes (30%)
- He only responded to 30% of serotypes
- Normal is response to >70% of serotypes
- This confirms SPECIFIC ANTIBODY DEFICIENCY`,
        
        'sad_diagnosis': `Specific Antibody Deficiency (SAD) criteria:
✓ Normal total IgG, IgA, IgM
✓ Normal IgG subclasses (optional)
✓ Impaired response to polysaccharide vaccine (<70% response)
✓ Clinical history of recurrent sinopulmonary infections
✓ Other causes excluded

This is impaired response to T-independent antigens (polysaccharides) despite normal T-dependent responses (protein antigens like tetanus).`,
        
        'management_discussion': `Management options for SAD:
1. Conservative:
   - Prophylactic antibiotics (azithromycin 250mg 3x/week)
   - Aggressive early treatment of infections
   - Nasal saline irrigation

2. Trial of conjugate vaccine:
   - Prevnar 20 (protein-conjugated) may elicit better T-dependent response
   - Recheck titers 4-6 weeks post-vaccination
   - Some patients respond better to conjugate vaccines

3. IVIG replacement:
   - Reserved for:
     • Failure of prophylactic antibiotics
     • Severe/invasive infections
     • Significant bronchiectasis development
   - Many insurers require trial of prophylactic antibiotics first

His case is moderate - we'll start prophylactic azithromycin and try Prevnar 20.`
    },
    
    keyTeachingPoints: [
        'Normal total immunoglobulin levels do NOT exclude antibody dysfunction',
        'Specific antibody deficiency = normal Ig levels with impaired vaccine responses',
        'Test response to POLYSACCHARIDE antigens (Pneumovax 23) - T-independent response',
        'Normal response = protective titers to >70% of serotypes tested',
        'Some patients respond to conjugate vaccines (Prevnar) but not polysaccharide (Pneumovax)',
        'Management is often conservative; IVIG reserved for severe/refractory cases'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI PID Practice Parameter 2015',
        openAccessLinks: [
            'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Primary-Immunodeficiency-Disease-2015.pdf'
        ]
    }
}

};

// Export for module integration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_IMMUNODEFICIENCY_CASES;
}

// Merge with main case library if present
if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_IMMUNODEFICIENCY_CASES);
}
