// ============================================================
// REASONDX FACILITATOR GUIDE SYSTEM
// Comprehensive guidance for running small group clinical reasoning sessions
// ============================================================
//
// This module provides facilitators with:
// - Session learning objectives and goals
// - Stage-by-stage prompts and discussion questions
// - Timing recommendations
// - Common student struggles and how to address them
// - What If scenario facilitation guidance
// - Debriefing frameworks
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // FACILITATOR GUIDE STATE
    // ============================================================
    
    window.FacilitatorGuide = {
        enabled: false,
        visible: true,
        currentStage: null,
        panelPosition: 'right', // 'right', 'bottom', 'floating'
        expandedSections: {
            objectives: true,
            prompts: true,
            timing: false,
            struggles: false,
            whatIf: false
        }
    };

    const FG = window.FacilitatorGuide;

    // ============================================================
    // SESSION LEARNING OBJECTIVES BY CASE TYPE
    // ============================================================
    
    const sessionObjectives = {
        // General objectives that apply to all cases
        general: {
            clinical_reasoning: [
                "Practice generating a differential diagnosis based on chief complaint",
                "Refine differential using history and physical exam findings",
                "Apply illness scripts and pattern recognition",
                "Identify 'must-not-miss' diagnoses and red flags",
                "Recognize cognitive biases in clinical reasoning"
            ],
            collaboration: [
                "Practice articulating clinical reasoning to peers",
                "Learn from different perspectives and approaches",
                "Develop comfort with uncertainty and ambiguity",
                "Practice respectful disagreement and evidence-based discussion",
                "Build consensus through structured dialogue"
            ],
            metacognition: [
                "Reflect on confidence calibration before and after discussion",
                "Identify knowledge gaps and learning needs",
                "Recognize when reasoning changed and why",
                "Develop awareness of cognitive load and decision fatigue"
            ]
        },
        
        // Category-specific objectives
        byCategory: {
            "Pulmonary": [
                "Apply severity scoring systems (CURB-65, PSI)",
                "Differentiate infectious from non-infectious etiologies",
                "Recognize respiratory emergencies requiring immediate intervention"
            ],
            "Cardiovascular": [
                "Apply risk stratification tools (Wells, HEART, CHA2DS2-VASc)",
                "Recognize time-sensitive cardiovascular emergencies",
                "Integrate ECG and biomarker interpretation"
            ],
            "Infectious Disease": [
                "Apply sepsis criteria and recognize septic shock",
                "Choose appropriate empiric antibiotic coverage",
                "Identify source control needs"
            ],
            "Neurology": [
                "Perform focused neurological assessment",
                "Apply stroke scales and time-sensitive protocols",
                "Differentiate central from peripheral pathology"
            ],
            "Gastroenterology": [
                "Recognize surgical emergencies",
                "Apply severity scores for pancreatitis, GI bleeding",
                "Determine need for procedural intervention"
            ],
            "Endocrine": [
                "Recognize endocrine emergencies",
                "Apply treatment algorithms for DKA, HHS, thyroid storm",
                "Understand precipitating factors"
            ]
        },
        
        // Difficulty-specific objectives
        byDifficulty: {
            "foundational": [
                "Build pattern recognition for common presentations",
                "Practice systematic approach to history and exam",
                "Learn key distinguishing features of common diagnoses"
            ],
            "intermediate": [
                "Handle diagnostic uncertainty and overlapping presentations",
                "Integrate multiple comorbidities into decision-making",
                "Practice resource-conscious workup strategies"
            ],
            "advanced": [
                "Recognize atypical presentations of common diseases",
                "Identify cognitive traps (premature closure, anchoring)",
                "Handle high-stakes time-sensitive decisions"
            ]
        }
    };

    // ============================================================
    // STAGE-BY-STAGE FACILITATOR PROMPTS
    // ============================================================
    
    const stageGuidance = {
        // STAGE 1: Initial Differential
        differential: {
            name: "Initial Differential Diagnosis",
            suggestedTime: "8-10 minutes",
            phases: {
                individual: {
                    duration: "3-4 minutes",
                    instructions: [
                        "Allow students to work independently without discussion",
                        "Encourage them to write down their differential before seeing others'",
                        "Remind them to consider 'must-not-miss' diagnoses",
                        "Have them note their confidence level"
                    ]
                },
                discussion: {
                    duration: "4-5 minutes",
                    openingPrompts: [
                        "Let's go around - what's your top diagnosis and why?",
                        "Did anyone have a different lead diagnosis? What made you think of that?",
                        "What 'must-not-miss' diagnoses are on your list?"
                    ],
                    deepeningPrompts: [
                        "What features of the chief complaint triggered that diagnosis?",
                        "How confident are you? What would make you more confident?",
                        "What's the most dangerous thing this could be?",
                        "Is anyone anchored on a single diagnosis? What else should we consider?"
                    ],
                    closingPrompts: [
                        "Has anyone changed their thinking after hearing the group?",
                        "What's the group consensus on the top 3 diagnoses?",
                        "What information would most change your differential?"
                    ]
                },
                revision: {
                    duration: "1-2 minutes",
                    instructions: [
                        "Have students update their differential based on discussion",
                        "Ask them to re-rate their confidence",
                        "Note: Look for appropriate calibration - discussion should either increase confidence (consensus) or introduce healthy uncertainty"
                    ]
                }
            },
            facilitatorTips: [
                "Don't reveal the diagnosis - focus on the reasoning process",
                "Encourage minority opinions - they often catch zebras",
                "Ask 'what would make you change your mind?'",
                "Watch for premature closure on obvious diagnoses"
            ],
            commonStruggles: [
                {
                    issue: "Students anchor on first diagnosis mentioned",
                    response: "Ask: 'If [first diagnosis] were completely wrong, what else could this be?'"
                },
                {
                    issue: "Group converges too quickly without debate",
                    response: "Play devil's advocate: 'I'm going to argue for [alternative diagnosis] - convince me otherwise'"
                },
                {
                    issue: "Students don't consider dangerous diagnoses",
                    response: "Ask: 'What's the worst thing this could be? How would we rule it out?'"
                },
                {
                    issue: "Overconfidence",
                    response: "Ask: 'What if I told you your lead diagnosis is wrong? What's your backup?'"
                }
            ]
        },

        // STAGE 2: History Taking
        history: {
            name: "History Taking",
            suggestedTime: "10-12 minutes",
            phases: {
                individual: {
                    duration: "5-6 minutes",
                    instructions: [
                        "Let students ask questions individually",
                        "Encourage them to think about what information would differentiate diagnoses",
                        "Remind them about social history and environmental exposures"
                    ]
                },
                discussion: {
                    duration: "4-5 minutes",
                    openingPrompts: [
                        "What questions were most helpful in narrowing your differential?",
                        "Did any answers surprise you or change your thinking?",
                        "What questions did you wish you had asked?"
                    ],
                    deepeningPrompts: [
                        "How did [specific answer] change your differential?",
                        "What red flags did you identify or rule out?",
                        "Did anyone ask about [commonly missed area]?",
                        "How did social/environmental history factor into your thinking?"
                    ],
                    closingPrompts: [
                        "Based on the history, what's your working diagnosis now?",
                        "What's still uncertain that the physical exam might clarify?",
                        "Any 'doorknob moments' that changed things?"
                    ]
                },
                revision: {
                    duration: "1-2 minutes",
                    instructions: [
                        "Students don't 're-ask' questions, but reflect on what they learned",
                        "Update mental model of the case"
                    ]
                }
            },
            facilitatorTips: [
                "Point out high-yield questions that students missed",
                "Discuss the 'linked diagnoses' - how questions map to differentials",
                "Highlight social determinants of health when relevant",
                "Emphasize OLDCARTS framework if students seem disorganized"
            ],
            commonStruggles: [
                {
                    issue: "Students ask too many unfocused questions",
                    response: "Ask: 'Before your next question, what diagnosis are you trying to confirm or rule out?'"
                },
                {
                    issue: "Students miss crucial history elements",
                    response: "Guide: 'What do we know about medications/allergies/social history?'"
                },
                {
                    issue: "Students don't update differential after answers",
                    response: "Ask: 'That answer was important - how does it change your thinking?'"
                }
            ]
        },

        // STAGE 3: Physical Examination
        physical: {
            name: "Physical Examination",
            suggestedTime: "8-10 minutes",
            phases: {
                individual: {
                    duration: "4-5 minutes",
                    instructions: [
                        "Have students select exam maneuvers",
                        "Encourage focused, hypothesis-driven examination",
                        "Remind them: exam should TEST hypotheses from history"
                    ]
                },
                discussion: {
                    duration: "3-4 minutes",
                    openingPrompts: [
                        "What exam findings most influenced your diagnosis?",
                        "Did you find what you expected? Any surprises?",
                        "What exam would you have done differently?"
                    ],
                    deepeningPrompts: [
                        "How does [specific finding] fit with your differential?",
                        "What's the sensitivity/specificity of [key finding]?",
                        "Did anyone check [commonly missed exam]?",
                        "How do you interpret [ambiguous finding]?"
                    ],
                    closingPrompts: [
                        "Based on history AND exam, what's your diagnosis now?",
                        "How confident are you? What's your uncertainty?",
                        "What workup would you order and why?"
                    ]
                },
                revision: {
                    duration: "1-2 minutes",
                    instructions: [
                        "Finalize clinical impression before workup",
                        "Students should have clear leading diagnosis with rationale"
                    ]
                }
            },
            facilitatorTips: [
                "Emphasize hypothesis-testing approach to exam",
                "Discuss pre-test probability and how findings change it",
                "Review physical exam findings that are commonly misinterpreted",
                "Connect exam findings to pathophysiology"
            ],
            commonStruggles: [
                {
                    issue: "Students order 'complete' exam without focus",
                    response: "Ask: 'If you only had time for 3 exam maneuvers, which would you choose and why?'"
                },
                {
                    issue: "Students don't know how to interpret findings",
                    response: "Teach: 'Let's talk about the likelihood ratios for [finding]'"
                },
                {
                    issue: "Students skip vital signs interpretation",
                    response: "Ask: 'What do the vital signs tell us about severity and acuity?'"
                }
            ]
        },

        // STAGE 4: Revised Differential
        'revised-differential': {
            name: "Revised Differential Diagnosis",
            suggestedTime: "6-8 minutes",
            phases: {
                individual: {
                    duration: "2-3 minutes",
                    instructions: [
                        "Have students re-rank their differential based on all information",
                        "Encourage explicit reasoning about what changed",
                        "Record confidence for comparison with initial"
                    ]
                },
                discussion: {
                    duration: "3-4 minutes",
                    openingPrompts: [
                        "How has your differential changed from the beginning?",
                        "What information was most pivotal?",
                        "Did anyone completely change their top diagnosis?"
                    ],
                    deepeningPrompts: [
                        "Walk us through your reasoning evolution",
                        "What diagnoses moved up? What moved down? Why?",
                        "Is your confidence higher or lower now? Why?",
                        "What cognitive biases might be affecting our thinking?"
                    ],
                    closingPrompts: [
                        "What's the group consensus diagnosis?",
                        "What remaining uncertainty do we have?",
                        "How will the workup resolve our uncertainty?"
                    ]
                },
                revision: {
                    duration: "1-2 minutes",
                    instructions: [
                        "Final differential refinement",
                        "Document reasoning for later reflection"
                    ]
                }
            },
            facilitatorTips: [
                "This is a KEY metacognitive moment - emphasize what changed and why",
                "Compare initial vs revised confidence",
                "Discuss Bayesian updating in clinical reasoning",
                "Identify any anchoring or confirmation bias"
            ],
            commonStruggles: [
                {
                    issue: "No change from initial differential despite new data",
                    response: "Ask: 'Given everything we learned, why hasn't your thinking changed? Should it?'"
                },
                {
                    issue: "Overconfidence in revised diagnosis",
                    response: "Challenge: 'What would make this diagnosis wrong? What's your second choice?'"
                }
            ]
        },

        // STAGE 5: Workup
        workup: {
            name: "Diagnostic Workup & Treatment",
            suggestedTime: "10-12 minutes",
            phases: {
                individual: {
                    duration: "5-6 minutes",
                    instructions: [
                        "Have students order labs, imaging, treatments",
                        "Encourage cost-conscious, evidence-based choices",
                        "Remind them to think about test characteristics"
                    ]
                },
                discussion: {
                    duration: "4-5 minutes",
                    openingPrompts: [
                        "What tests did you order and what were you looking for?",
                        "How did results change your management?",
                        "What treatments did you choose and why?"
                    ],
                    deepeningPrompts: [
                        "Was [test] really necessary? What was your pre-test probability?",
                        "How did you decide on [treatment choice]?",
                        "What guidelines informed your decisions?",
                        "What consults did you consider? Why or why not?"
                    ],
                    closingPrompts: [
                        "What's your final disposition? Admit vs discharge?",
                        "What severity criteria did you use?",
                        "What would you tell the patient?"
                    ]
                },
                revision: {
                    duration: "1-2 minutes",
                    instructions: [
                        "Review essential vs helpful vs unhelpful tests",
                        "Discuss resource stewardship"
                    ]
                }
            },
            facilitatorTips: [
                "Discuss Choosing Wisely recommendations",
                "Review evidence-based guidelines (shown in case)",
                "Emphasize shared decision-making",
                "Discuss treatment vs testing urgency"
            ],
            commonStruggles: [
                {
                    issue: "Shotgun testing without clear rationale",
                    response: "Ask: 'For each test, tell me what you're looking for and how it will change management'"
                },
                {
                    issue: "Missing time-sensitive treatments",
                    response: "Prompt: 'Is there anything we need to do RIGHT NOW before tests result?'"
                },
                {
                    issue: "Not considering disposition",
                    response: "Ask: 'Where is this patient going after the ED? Home, floor, ICU?'"
                }
            ]
        },

        // STAGE 6: Case Summary / Oral Presentation
        'case-summary': {
            name: "Case Summary & Oral Presentation",
            suggestedTime: "8-10 minutes",
            phases: {
                individual: {
                    duration: "3-4 minutes",
                    instructions: [
                        "Have students prepare a structured oral presentation",
                        "Use standard format: CC, HPI, ROS, PMH, Meds, Allergies, Social, Exam, Data, A&P",
                        "Emphasize conciseness and organization"
                    ]
                },
                discussion: {
                    duration: "4-5 minutes",
                    openingPrompts: [
                        "Who would like to present first?",
                        "Group: What did the presenter do well?",
                        "What could make the presentation more effective?"
                    ],
                    deepeningPrompts: [
                        "How did you decide what to include vs exclude?",
                        "Was the presentation organized for the listener?",
                        "Did pertinent positives and negatives support the assessment?",
                        "Was the differential justified by the data presented?"
                    ],
                    closingPrompts: [
                        "If presenting to an attending, what would you change?",
                        "What makes a presentation 'trustworthy'?",
                        "How does good presentation support patient safety?"
                    ]
                },
                revision: {
                    duration: "1-2 minutes",
                    instructions: [
                        "Students can revise their presentation based on feedback",
                        "Optional: second student presents revised version"
                    ]
                }
            },
            facilitatorTips: [
                "Model effective presentation structure",
                "Give specific, actionable feedback",
                "Emphasize 'assertion-supported' format",
                "Discuss how presentation varies by audience (attending vs consultant vs signout)"
            ],
            commonStruggles: [
                {
                    issue: "Presentations too long/unfocused",
                    response: "Challenge: 'Give me the 30-second version for a busy attending'"
                },
                {
                    issue: "No clear assessment",
                    response: "Ask: 'What's your ONE-LINER? What problem are we solving?'"
                },
                {
                    issue: "Data dump without interpretation",
                    response: "Guide: 'Don't just list findings - tell me what they MEAN'"
                }
            ]
        },

        // STAGE 7: Assessment & Plan
        'assessment-plan': {
            name: "Assessment & Plan",
            suggestedTime: "8-10 minutes",
            phases: {
                individual: {
                    duration: "3-4 minutes",
                    instructions: [
                        "Have students write formal assessment and plan",
                        "Include differential with reasoning",
                        "Prioritize problem list"
                    ]
                },
                discussion: {
                    duration: "4-5 minutes",
                    openingPrompts: [
                        "What's your final diagnosis and confidence level?",
                        "Walk us through your plan",
                        "What discharge instructions would you give?"
                    ],
                    deepeningPrompts: [
                        "How does your plan address each differential diagnosis?",
                        "What safety netting did you include?",
                        "What follow-up is needed?",
                        "What would you tell the patient about their diagnosis?"
                    ],
                    closingPrompts: [
                        "Compare your plan to guideline recommendations",
                        "What would you do differently next time?",
                        "What did you learn from this case?"
                    ]
                },
                revision: {
                    duration: "1-2 minutes",
                    instructions: [
                        "Final plan refinement",
                        "Review teaching points and guidelines"
                    ]
                }
            },
            facilitatorTips: [
                "Review the case's teaching points as wrap-up",
                "Connect to clinical guidelines",
                "Discuss real-world implementation challenges",
                "Celebrate good reasoning, not just correct answers"
            ],
            commonStruggles: [
                {
                    issue: "Plan doesn't match assessment",
                    response: "Ask: 'Your diagnosis is X but your plan seems to be for Y - help me understand'"
                },
                {
                    issue: "No contingency planning",
                    response: "Prompt: 'What if your diagnosis is wrong? What's your backup plan?'"
                }
            ]
        }
    };

    // ============================================================
    // WHAT IF SCENARIO FACILITATION GUIDE
    // ============================================================
    
    const whatIfGuidance = {
        introduction: {
            timing: "After completing the main case (typically 5-10 minutes)",
            setup: [
                "We've worked through this case successfully. Now let's explore 'What If' scenarios.",
                "These scenarios test flexible thinking - how would your approach change if key details were different?",
                "This is NOT about memorizing variations - it's about understanding the clinical features that drive decisions."
            ],
            learningObjectives: [
                "Recognize how single variable changes affect differential diagnosis",
                "Understand key discriminating features between similar presentations",
                "Build cognitive flexibility for real-world clinical variability",
                "Practice rapid re-calibration of clinical reasoning"
            ]
        },
        
        facilitation: {
            beforeScenario: [
                "Read the scenario modification aloud to the group",
                "Give students 1-2 minutes to think individually",
                "Ask: 'How would this change your differential? Your workup? Your urgency?'"
            ],
            duringDiscussion: [
                "What's the KEY difference this modification introduces?",
                "What diagnosis rises? What falls? Why?",
                "How does this change your 'must-not-miss' list?",
                "Would your treatment timeline change?"
            ],
            afterScenario: [
                "Compare original vs modified reasoning side-by-side",
                "Identify the discriminating features that drove the change",
                "Connect to real patient variability",
                "Ask: 'How might you miss this in a real patient?'"
            ]
        },
        
        commonScenarioTypes: {
            "Patient factors": {
                examples: ["Immunocompromised", "Pregnant", "Elderly", "Pediatric"],
                keyQuestions: [
                    "How does this change the differential?",
                    "What additional diagnoses must we consider?",
                    "How does treatment change?",
                    "What complications are we more worried about?"
                ]
            },
            "Vital sign changes": {
                examples: ["Hypotensive", "Febrile", "Tachycardic", "Hypoxic"],
                keyQuestions: [
                    "How does severity change?",
                    "Does this change our disposition?",
                    "What immediate interventions are needed?",
                    "Does this suggest a different etiology?"
                ]
            },
            "Historical factors": {
                examples: ["Recent travel", "Occupational exposure", "Medication changes", "Substance use"],
                keyQuestions: [
                    "What new diagnoses enter the differential?",
                    "Does this suggest an atypical presentation?",
                    "What specific workup does this add?",
                    "How does this affect treatment choices?"
                ]
            },
            "Test results": {
                examples: ["Positive biomarker", "Imaging finding", "Culture result"],
                keyQuestions: [
                    "How does this change our diagnostic confidence?",
                    "What new diagnoses does this suggest?",
                    "How does management change?",
                    "What additional workup is indicated?"
                ]
            }
        },
        
        debriefing: {
            questions: [
                "What was the single most important discriminating feature in each scenario?",
                "Which scenario was most challenging? Why?",
                "How will you remember to consider these variations in real patients?",
                "What cognitive shortcuts might cause you to miss these variations?"
            ],
            synthesis: [
                "Create a mental 'checklist' of key modifiers for this presentation",
                "Identify high-yield questions that uncover scenario variations",
                "Connect back to pattern recognition and illness scripts"
            ]
        }
    };

    // ============================================================
    // DEBRIEFING AND WRAP-UP FRAMEWORKS
    // ============================================================
    
    const debriefingFrameworks = {
        standard: {
            name: "Standard Case Debrief",
            duration: "5-7 minutes",
            structure: [
                {
                    phase: "Reactions",
                    duration: "1 minute",
                    prompts: [
                        "How did that case feel?",
                        "What was most challenging?",
                        "What surprised you?"
                    ]
                },
                {
                    phase: "Analysis",
                    duration: "3-4 minutes",
                    prompts: [
                        "Where did your reasoning go well? Where did it struggle?",
                        "What information was most pivotal?",
                        "What cognitive biases might have affected us?",
                        "How did the group discussion help or hinder?"
                    ]
                },
                {
                    phase: "Summary",
                    duration: "1-2 minutes",
                    prompts: [
                        "What are 3 things you'll take away from this case?",
                        "What would you do differently next time?",
                        "What do you want to learn more about?"
                    ]
                }
            ]
        },
        
        plus_delta: {
            name: "Plus/Delta Debrief",
            duration: "3-5 minutes",
            structure: [
                {
                    phase: "Plus (What went well)",
                    prompts: [
                        "What clinical reasoning skills did we demonstrate?",
                        "What did the group do well?",
                        "What would we do again?"
                    ]
                },
                {
                    phase: "Delta (What to change)",
                    prompts: [
                        "What could we improve?",
                        "What would we do differently?",
                        "What gaps did we identify?"
                    ]
                }
            ]
        },
        
        advocacy_inquiry: {
            name: "Advocacy-Inquiry Model",
            description: "For cases where there was significant disagreement",
            duration: "5-7 minutes",
            structure: [
                {
                    phase: "State positions",
                    prompts: ["What was your position and reasoning?"]
                },
                {
                    phase: "Inquire about others",
                    prompts: [
                        "Help me understand your perspective",
                        "What data led you there?",
                        "What am I missing?"
                    ]
                },
                {
                    phase: "Synthesize",
                    prompts: [
                        "What can we agree on?",
                        "Where does legitimate uncertainty remain?",
                        "How do we resolve this clinically?"
                    ]
                }
            ]
        }
    };

    // ============================================================
    // TIMING RECOMMENDATIONS
    // ============================================================
    
    const sessionTiming = {
        short: {
            name: "30-Minute Session",
            structure: {
                "Setup & objectives": "2 min",
                "Initial differential": "5 min",
                "History taking": "8 min",
                "Physical exam": "5 min",
                "Revised differential": "3 min",
                "Brief workup discussion": "4 min",
                "Debrief": "3 min"
            },
            notes: "Skip What If scenarios. Focus on core reasoning."
        },
        standard: {
            name: "45-Minute Session",
            structure: {
                "Setup & objectives": "3 min",
                "Initial differential": "7 min",
                "History taking": "10 min",
                "Physical exam": "7 min",
                "Revised differential": "5 min",
                "Workup & treatment": "8 min",
                "Debrief": "5 min"
            },
            notes: "Can include 1 What If scenario if time permits."
        },
        extended: {
            name: "60-Minute Session",
            structure: {
                "Setup & objectives": "3 min",
                "Initial differential": "8 min",
                "History taking": "12 min",
                "Physical exam": "8 min",
                "Revised differential": "6 min",
                "Workup & treatment": "10 min",
                "What If scenarios": "8 min",
                "Debrief": "5 min"
            },
            notes: "Full session with 2-3 What If scenarios."
        },
        comprehensive: {
            name: "90-Minute Session",
            structure: {
                "Setup & objectives": "5 min",
                "Initial differential": "10 min",
                "History taking": "15 min",
                "Physical exam": "10 min",
                "Revised differential": "8 min",
                "Workup & treatment": "15 min",
                "Case summary/presentation": "10 min",
                "What If scenarios": "10 min",
                "Comprehensive debrief": "7 min"
            },
            notes: "All stages including oral presentation practice. All What If scenarios."
        }
    };

    // ============================================================
    // RENDER FACILITATOR PANEL
    // ============================================================
    
    window.renderFacilitatorGuide = function(caseData, variant, currentScreen) {
        if (!FG.enabled || !FG.visible) return '';
        
        const stage = mapScreenToStage(currentScreen);
        const guidance = stageGuidance[stage] || stageGuidance['differential'];
        const objectives = getSessionObjectives(caseData);
        const hasWhatIf = caseData.whatIfScenarios && caseData.whatIfScenarios.length > 0;
        
        return `
            <div class="facilitator-guide-panel bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-lg" 
                 style="position: fixed; right: 0; top: 80px; width: 380px; max-height: calc(100vh - 100px); overflow-y: auto; z-index: 1000;">
                
                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-indigo-800">
                        👩‍🏫 Facilitator Guide
                    </h3>
                    <button onclick="toggleFacilitatorGuide()" class="text-indigo-600 hover:text-indigo-800">
                        ${FG.visible ? '◀ Hide' : '▶ Show'}
                    </button>
                </div>
                
                <!-- Current Stage -->
                <div class="bg-white rounded-lg p-3 mb-4 border border-indigo-200">
                    <div class="text-sm text-indigo-600 font-medium">Current Stage</div>
                    <div class="text-xl font-bold text-indigo-800">${guidance.name}</div>
                    <div class="text-sm text-gray-600">⏱️ Suggested time: ${guidance.suggestedTime}</div>
                </div>
                
                <!-- Collapsible Sections -->
                
                <!-- Learning Objectives -->
                <div class="mb-3">
                    <button onclick="toggleFacilitatorSection('objectives')" 
                            class="w-full flex items-center justify-between bg-indigo-100 p-2 rounded-t-lg hover:bg-indigo-200">
                        <span class="font-semibold text-indigo-800">🎯 Session Objectives</span>
                        <span>${FG.expandedSections.objectives ? '▼' : '▶'}</span>
                    </button>
                    ${FG.expandedSections.objectives ? `
                        <div class="bg-white p-3 rounded-b-lg border border-indigo-100">
                            <ul class="text-sm space-y-1">
                                ${objectives.map(obj => `<li class="text-gray-700">• ${obj}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
                
                <!-- Discussion Prompts -->
                <div class="mb-3">
                    <button onclick="toggleFacilitatorSection('prompts')" 
                            class="w-full flex items-center justify-between bg-indigo-100 p-2 rounded-t-lg hover:bg-indigo-200">
                        <span class="font-semibold text-indigo-800">💬 Discussion Prompts</span>
                        <span>${FG.expandedSections.prompts ? '▼' : '▶'}</span>
                    </button>
                    ${FG.expandedSections.prompts ? `
                        <div class="bg-white p-3 rounded-b-lg border border-indigo-100">
                            <div class="mb-2">
                                <div class="text-xs font-semibold text-indigo-600 uppercase">Opening</div>
                                <ul class="text-sm space-y-1">
                                    ${(guidance.phases?.discussion?.openingPrompts || []).slice(0,2).map(p => 
                                        `<li class="text-gray-700 cursor-pointer hover:bg-indigo-50 p-1 rounded" onclick="copyPrompt(this)">📋 "${p}"</li>`
                                    ).join('')}
                                </ul>
                            </div>
                            <div class="mb-2">
                                <div class="text-xs font-semibold text-indigo-600 uppercase">Deepening</div>
                                <ul class="text-sm space-y-1">
                                    ${(guidance.phases?.discussion?.deepeningPrompts || []).slice(0,2).map(p => 
                                        `<li class="text-gray-700 cursor-pointer hover:bg-indigo-50 p-1 rounded" onclick="copyPrompt(this)">📋 "${p}"</li>`
                                    ).join('')}
                                </ul>
                            </div>
                            <div>
                                <div class="text-xs font-semibold text-indigo-600 uppercase">Closing</div>
                                <ul class="text-sm space-y-1">
                                    ${(guidance.phases?.discussion?.closingPrompts || []).slice(0,2).map(p => 
                                        `<li class="text-gray-700 cursor-pointer hover:bg-indigo-50 p-1 rounded" onclick="copyPrompt(this)">📋 "${p}"</li>`
                                    ).join('')}
                                </ul>
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <!-- Common Struggles -->
                <div class="mb-3">
                    <button onclick="toggleFacilitatorSection('struggles')" 
                            class="w-full flex items-center justify-between bg-amber-100 p-2 rounded-t-lg hover:bg-amber-200">
                        <span class="font-semibold text-amber-800">⚠️ Common Struggles</span>
                        <span>${FG.expandedSections.struggles ? '▼' : '▶'}</span>
                    </button>
                    ${FG.expandedSections.struggles ? `
                        <div class="bg-white p-3 rounded-b-lg border border-amber-100">
                            ${(guidance.commonStruggles || []).map(s => `
                                <div class="mb-2 p-2 bg-amber-50 rounded">
                                    <div class="text-sm font-medium text-amber-800">Issue: ${s.issue}</div>
                                    <div class="text-sm text-gray-700 mt-1">💡 ${s.response}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                
                <!-- What If Scenarios -->
                ${hasWhatIf ? `
                    <div class="mb-3">
                        <button onclick="toggleFacilitatorSection('whatIf')" 
                                class="w-full flex items-center justify-between bg-purple-100 p-2 rounded-t-lg hover:bg-purple-200">
                            <span class="font-semibold text-purple-800">🔀 What If Scenarios (${caseData.whatIfScenarios.length})</span>
                            <span>${FG.expandedSections.whatIf ? '▼' : '▶'}</span>
                        </button>
                        ${FG.expandedSections.whatIf ? `
                            <div class="bg-white p-3 rounded-b-lg border border-purple-100">
                                <div class="text-sm text-gray-600 mb-2">
                                    Use after completing main case. Each scenario tests clinical flexibility.
                                </div>
                                ${caseData.whatIfScenarios.map((scenario, idx) => `
                                    <div class="mb-2 p-2 bg-purple-50 rounded cursor-pointer hover:bg-purple-100"
                                         onclick="showWhatIfFacilitatorTips('${scenario.id}')">
                                        <div class="flex items-center gap-2">
                                            <span>${scenario.icon || '❓'}</span>
                                            <span class="text-sm font-medium text-purple-800">${scenario.title}</span>
                                        </div>
                                        <div class="text-xs text-gray-600 mt-1">${scenario.description}</div>
                                        <div class="text-xs text-purple-600 mt-1">⏱️ ${scenario.estimatedMinutes || 5} min</div>
                                    </div>
                                `).join('')}
                                
                                <div class="mt-3 p-2 bg-purple-100 rounded">
                                    <div class="text-xs font-semibold text-purple-800">Facilitation Tips:</div>
                                    <ul class="text-xs text-gray-700 mt-1 space-y-1">
                                        <li>• Read modification aloud, give 1-2 min to think</li>
                                        <li>• Ask: "What's the KEY difference?"</li>
                                        <li>• Compare original vs modified reasoning</li>
                                        <li>• Connect to real patient variability</li>
                                    </ul>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
                
                <!-- Facilitator Tips -->
                <div class="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                    <div class="text-sm font-semibold text-green-800 mb-2">💡 Tips for This Stage</div>
                    <ul class="text-sm text-gray-700 space-y-1">
                        ${(guidance.facilitatorTips || []).map(tip => `<li>• ${tip}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- Quick Actions -->
                <div class="mt-4 flex flex-wrap gap-2">
                    <button onclick="showTimingModal()" class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200">
                        ⏱️ Timing Guide
                    </button>
                    <button onclick="showDebriefModal()" class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200">
                        📝 Debrief Framework
                    </button>
                    <button onclick="showAllPrompts()" class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200">
                        💬 All Prompts
                    </button>
                </div>
            </div>
        `;
    };

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    function mapScreenToStage(screen) {
        const mapping = {
            'differential': 'differential',
            'history': 'history',
            'physical': 'physical',
            'revised-differential': 'revised-differential',
            'workup': 'workup',
            'labs': 'workup',
            'imaging': 'workup',
            'orders': 'workup',
            'case-summary': 'case-summary',
            'summary': 'case-summary',
            'assessment-plan': 'assessment-plan'
        };
        return mapping[screen] || 'differential';
    }
    
    function getSessionObjectives(caseData) {
        const objectives = [...sessionObjectives.general.clinical_reasoning.slice(0, 3)];
        
        // Add category-specific
        if (caseData.category && sessionObjectives.byCategory[caseData.category]) {
            objectives.push(...sessionObjectives.byCategory[caseData.category].slice(0, 2));
        }
        
        // Add difficulty-specific
        if (caseData.difficulty && sessionObjectives.byDifficulty[caseData.difficulty]) {
            objectives.push(...sessionObjectives.byDifficulty[caseData.difficulty].slice(0, 2));
        }
        
        return objectives;
    }
    
    window.toggleFacilitatorGuide = function() {
        FG.visible = !FG.visible;
        if (typeof render === 'function') render();
    };
    
    window.toggleFacilitatorSection = function(section) {
        FG.expandedSections[section] = !FG.expandedSections[section];
        if (typeof render === 'function') render();
    };
    
    window.enableFacilitatorMode = function() {
        FG.enabled = true;
        if (typeof render === 'function') render();
    };
    
    window.disableFacilitatorMode = function() {
        FG.enabled = false;
        if (typeof render === 'function') render();
    };
    
    window.copyPrompt = function(element) {
        const text = element.textContent.replace('📋 ', '').replace(/"/g, '');
        navigator.clipboard.writeText(text);
        
        // Visual feedback
        const original = element.innerHTML;
        element.innerHTML = '✅ Copied!';
        setTimeout(() => { element.innerHTML = original; }, 1000);
    };
    
    window.showTimingModal = function() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-2xl max-h-[80vh] overflow-y-auto">
                <h2 class="text-xl font-bold mb-4">⏱️ Session Timing Options</h2>
                ${Object.values(sessionTiming).map(timing => `
                    <div class="mb-4 p-4 bg-gray-50 rounded-lg">
                        <h3 class="font-bold text-lg">${timing.name}</h3>
                        <div class="grid grid-cols-2 gap-2 mt-2 text-sm">
                            ${Object.entries(timing.structure).map(([stage, time]) => 
                                `<div class="text-gray-600">${stage}</div><div class="font-medium">${time}</div>`
                            ).join('')}
                        </div>
                        <div class="mt-2 text-sm text-gray-600 italic">${timing.notes}</div>
                    </div>
                `).join('')}
                <button onclick="this.closest('.fixed').remove()" class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    Close
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    };
    
    window.showDebriefModal = function() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-2xl max-h-[80vh] overflow-y-auto">
                <h2 class="text-xl font-bold mb-4">📝 Debriefing Frameworks</h2>
                ${Object.values(debriefingFrameworks).map(framework => `
                    <div class="mb-4 p-4 bg-gray-50 rounded-lg">
                        <h3 class="font-bold text-lg">${framework.name}</h3>
                        <div class="text-sm text-gray-600 mb-2">${framework.duration || ''} ${framework.description || ''}</div>
                        ${framework.structure.map(phase => `
                            <div class="mt-2">
                                <div class="font-medium text-indigo-700">${phase.phase}</div>
                                <ul class="text-sm text-gray-700 ml-4">
                                    ${phase.prompts.map(p => `<li>• ${p}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
                <button onclick="this.closest('.fixed').remove()" class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    Close
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    };
    
    window.showAllPrompts = function() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-3xl max-h-[80vh] overflow-y-auto">
                <h2 class="text-xl font-bold mb-4">💬 All Discussion Prompts</h2>
                ${Object.entries(stageGuidance).map(([stageId, stage]) => `
                    <div class="mb-4 p-4 bg-gray-50 rounded-lg">
                        <h3 class="font-bold text-lg text-indigo-700">${stage.name}</h3>
                        ${stage.phases?.discussion ? `
                            <div class="mt-2">
                                <div class="font-medium text-green-700">Opening:</div>
                                <ul class="text-sm ml-4">
                                    ${stage.phases.discussion.openingPrompts.map(p => `<li class="cursor-pointer hover:bg-green-50 p-1" onclick="copyPrompt(this)">📋 "${p}"</li>`).join('')}
                                </ul>
                            </div>
                            <div class="mt-2">
                                <div class="font-medium text-blue-700">Deepening:</div>
                                <ul class="text-sm ml-4">
                                    ${stage.phases.discussion.deepeningPrompts.map(p => `<li class="cursor-pointer hover:bg-blue-50 p-1" onclick="copyPrompt(this)">📋 "${p}"</li>`).join('')}
                                </ul>
                            </div>
                            <div class="mt-2">
                                <div class="font-medium text-purple-700">Closing:</div>
                                <ul class="text-sm ml-4">
                                    ${stage.phases.discussion.closingPrompts.map(p => `<li class="cursor-pointer hover:bg-purple-50 p-1" onclick="copyPrompt(this)">📋 "${p}"</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
                <button onclick="this.closest('.fixed').remove()" class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    Close
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    };
    
    window.showWhatIfFacilitatorTips = function(scenarioId) {
        // Show detailed tips for a specific What If scenario
        const tips = whatIfGuidance.facilitation;
        
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-lg">
                <h2 class="text-xl font-bold mb-4 text-purple-800">🔀 What If Facilitation Guide</h2>
                
                <div class="mb-4">
                    <h3 class="font-semibold text-green-700">Before Scenario:</h3>
                    <ul class="text-sm ml-4">
                        ${tips.beforeScenario.map(t => `<li>• ${t}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="mb-4">
                    <h3 class="font-semibold text-blue-700">During Discussion:</h3>
                    <ul class="text-sm ml-4">
                        ${tips.duringDiscussion.map(t => `<li>• ${t}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="mb-4">
                    <h3 class="font-semibold text-purple-700">After Scenario:</h3>
                    <ul class="text-sm ml-4">
                        ${tips.afterScenario.map(t => `<li>• ${t}</li>`).join('')}
                    </ul>
                </div>
                
                <button onclick="this.closest('.fixed').remove()" class="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                    Close
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    };

    // ============================================================
    // EXPORT FOR INTEGRATION
    // ============================================================
    
    window.FacilitatorGuideData = {
        sessionObjectives,
        stageGuidance,
        whatIfGuidance,
        debriefingFrameworks,
        sessionTiming
    };

    console.log('ReasonDx Facilitator Guide module loaded');

})();
