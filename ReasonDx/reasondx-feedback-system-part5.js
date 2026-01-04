// ============================================================================
// REASONDX ULTIMATE FEEDBACK SYSTEM - PART 5
// Final Wave of Brilliant Innovations
// ============================================================================

// ============================================================================
// 22. "THE DIAGNOSTIC AUTOPSY" - Post-Case Physiological Narrative
// ============================================================================

const DiagnosticAutopsy = {
    
    // Templates for physiological narratives from patient's body perspective
    narrativeTemplates: {
        sepsis: {
            timeline: [
                { time: -6, event: "Bacteria entered my bloodstream through the UTI. My immune system began mobilizing." },
                { time: -4, event: "Cytokines started flooding my system. I began feeling 'off' - fatigue, mild confusion." },
                { time: -2, event: "My capillaries started leaking. Blood pressure dropped. Organs weren't getting enough oxygen." },
                { time: 0, event: "You saw me in the ED. My lactate was rising - my cells were starving for oxygen." },
                { time: 0.5, event: "You ordered the lactate. Smart move - it revealed the hidden perfusion crisis." },
                { time: 1, event: "Antibiotics hit my bloodstream. The bacterial assault began to slow." },
                { time: 2, event: "IV fluids restored my circulating volume. Blood pressure stabilized." },
                { time: 6, event: "My immune system, now supported, began winning. Cytokine storm calming." },
                { time: 24, event: "I turned the corner. The early intervention saved my organs from permanent damage." }
            ],
            alternateTimeline: {
                delay: 2, // hours of delay
                outcome: [
                    { time: 2, event: "Without antibiotics, bacteria continued multiplying exponentially." },
                    { time: 4, event: "My blood pressure crashed. Vasopressors needed just to maintain perfusion." },
                    { time: 8, event: "Kidneys began failing. Lungs filling with fluid. Multi-organ dysfunction." },
                    { time: 24, event: "ICU day 3. Still on the ventilator. Family gathered at bedside." }
                ]
            }
        },
        mi: {
            timeline: [
                { time: -0.5, event: "The plaque in my LAD ruptured. Platelets rushed to form a clot." },
                { time: -0.25, event: "Blood flow to my anterior wall slowed. Myocytes began screaming for oxygen." },
                { time: 0, event: "You saw my ECG. Those ST elevations were my heart muscle dying in real-time." },
                { time: 0.1, event: "You activated the cath lab. Every minute mattered now." },
                { time: 0.5, event: "The wire crossed my lesion. Balloon inflated. Blood flowed again." },
                { time: 1, event: "Stent deployed. My heart muscle, starved for 45 minutes, began recovering." },
                { time: 24, event: "Echo shows EF of 50%. Could have been 30% with a 2-hour delay." },
                { time: 168, event: "One week later: I'm walking my daughter down the aisle next month. Thank you." }
            ]
        },
        pe: {
            timeline: [
                { time: -72, event: "A clot formed in my calf vein during that long flight. I didn't notice." },
                { time: -2, event: "The clot broke free. It traveled through my inferior vena cava toward my heart." },
                { time: -0.1, event: "It lodged in my pulmonary artery. Suddenly, a large part of my lung couldn't exchange oxygen." },
                { time: 0, event: "You noticed my tachycardia, my hypoxia, my leg swelling. You connected the dots." },
                { time: 0.5, event: "CTA confirmed it. A saddle embolus - I was one step from cardiovascular collapse." },
                { time: 1, event: "Anticoagulation started. The clot stopped growing. My body began dissolving it." },
                { time: 48, event: "Oxygen requirements decreasing. The clot is breaking down." },
                { time: 168, event: "Going home on blood thinners. You caught it before it killed me." }
            ]
        },
        stroke: {
            timeline: [
                { time: -0.1, event: "A clot lodged in my middle cerebral artery. Neurons began dying immediately." },
                { time: 0, event: "1.9 million neurons dying per minute. My right side went weak. Words wouldn't come." },
                { time: 0.25, event: "You recognized the signs. Time is brain - you moved fast." },
                { time: 0.5, event: "CT cleared hemorrhage. I was a tPA candidate." },
                { time: 0.75, event: "tPA entered my bloodstream. It began dissolving the clot." },
                { time: 1, event: "Blood flow restored. The penumbra - tissue at risk - was saved." },
                { time: 24, event: "I can move my hand again. I can speak. You gave me my life back." }
            ]
        },
        dka: {
            timeline: [
                { time: -48, event: "I ran out of insulin. Couldn't afford the refill. My blood sugar began climbing." },
                { time: -24, event: "Without insulin, my cells couldn't use glucose. They started burning fat instead." },
                { time: -12, event: "Ketones accumulated. My blood turned acidic. I felt nauseated, started vomiting." },
                { time: -6, event: "Profound dehydration set in. I lost liters of fluid through osmotic diuresis." },
                { time: 0, event: "You saw my Kussmaul breathing - my body desperately trying to blow off acid." },
                { time: 0.5, event: "You started fluids carefully. Checked my potassium before insulin." },
                { time: 1, event: "Insulin drip started. Finally, glucose could enter my cells again." },
                { time: 6, event: "Anion gap closing. Ketones clearing. The acidosis resolving." },
                { time: 24, event: "Back to subcutaneous insulin. You also connected me with resources for medication costs." }
            ]
        }
    },

    generateNarrative: function(caseType, studentActions) {
        const template = this.narrativeTemplates[caseType];
        if (!template) return null;

        const narrative = {
            patientVoice: true,
            timeline: this.personalizeTimeline(template.timeline, studentActions),
            alternateReality: template.alternateTimeline,
            emotionalImpact: this.generateEmotionalImpact(caseType, studentActions),
            physiologyHighlights: this.extractPhysiologyLessons(caseType)
        };

        return narrative;
    },

    personalizeTimeline: function(baseTimeline, studentActions) {
        // Adjust timeline based on student's actual actions
        return baseTimeline.map(event => {
            // Find matching student action
            const studentEvent = studentActions?.find(a => 
                Math.abs(a.time - event.time) < 0.5
            );
            
            if (studentEvent) {
                return {
                    ...event,
                    studentAction: studentEvent.action,
                    wasOptimal: studentEvent.wasOptimal,
                    highlight: true
                };
            }
            return event;
        });
    },

    generateEmotionalImpact: function(caseType, studentActions) {
        const impacts = {
            sepsis: "I have three grandchildren. Because you acted fast, I'll see them graduate.",
            mi: "My daughter's wedding is next month. I'll be there to walk her down the aisle.",
            pe: "I'm a single mom of two. They still have their mother because of you.",
            stroke: "I'm a pianist. You saved my hands, my music, my identity.",
            dka: "I'm 22. I have my whole life ahead of me, thanks to your careful management."
        };
        return impacts[caseType] || "Your quick thinking made all the difference.";
    },

    extractPhysiologyLessons: function(caseType) {
        const lessons = {
            sepsis: [
                "Lactate rises when tissues switch to anaerobic metabolism",
                "Cytokines cause capillary leak and vasodilation",
                "Early antibiotics prevent exponential bacterial growth"
            ],
            mi: [
                "Myocardium can survive ~20 min of ischemia before irreversible damage",
                "ST elevation = transmural ischemia = complete vessel occlusion",
                "Door-to-balloon time directly correlates with myocardium saved"
            ],
            pe: [
                "Clots obstruct pulmonary blood flow → V/Q mismatch → hypoxia",
                "Right heart strain occurs when >30-50% of pulmonary circulation blocked",
                "Anticoagulation prevents clot propagation while body lyses existing clot"
            ],
            stroke: [
                "Penumbra = tissue at risk that can be saved with reperfusion",
                "1.9 million neurons die per minute of large vessel occlusion",
                "tPA works best within 3 hours; can extend to 4.5 hours in some patients"
            ],
            dka: [
                "Without insulin, cells can't use glucose and switch to lipolysis",
                "Ketones are strong acids that overwhelm bicarbonate buffer",
                "Potassium shifts with insulin - always check K before starting insulin"
            ]
        };
        return lessons[caseType] || [];
    },

    renderNarrative: function(narrative) {
        return `
            <div class="diagnostic-autopsy bg-gradient-to-br from-slate-900 to-slate-800 
                        text-white rounded-xl shadow-2xl overflow-hidden">
                <!-- Header -->
                <div class="p-6 border-b border-slate-700">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl">🫀</span>
                        <div>
                            <h3 class="text-xl font-bold">The Diagnostic Autopsy</h3>
                            <p class="text-slate-400 text-sm">What happened inside your patient</p>
                        </div>
                    </div>
                </div>
                
                <!-- Patient voice intro -->
                <div class="p-6 bg-slate-800/50 border-b border-slate-700">
                    <p class="text-lg italic text-slate-300">
                        "Let me tell you what was happening inside my body while you were figuring out what was wrong..."
                    </p>
                </div>
                
                <!-- Timeline -->
                <div class="p-6">
                    <div class="relative">
                        <!-- Timeline line -->
                        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-600"></div>
                        
                        <div class="space-y-6">
                            ${narrative.timeline.map((event, index) => `
                                <div class="relative flex gap-4 ${event.highlight ? 'animate-pulse-once' : ''}">
                                    <!-- Time marker -->
                                    <div class="flex-shrink-0 w-8 h-8 rounded-full 
                                                ${event.highlight ? 'bg-green-500' : 
                                                  event.time < 0 ? 'bg-red-500/50' : 'bg-blue-500'}
                                                flex items-center justify-center text-xs font-bold z-10">
                                        ${event.time >= 0 ? '+' : ''}${event.time}h
                                    </div>
                                    
                                    <!-- Event content -->
                                    <div class="flex-1 pb-2">
                                        <p class="text-slate-200 ${event.highlight ? 'font-medium' : ''}">
                                            ${event.event}
                                        </p>
                                        ${event.studentAction ? `
                                            <div class="mt-2 text-sm ${event.wasOptimal ? 'text-green-400' : 'text-amber-400'}">
                                                ${event.wasOptimal ? '✓' : '→'} Your action: ${event.studentAction}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Emotional impact -->
                <div class="p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-t border-green-800">
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">💚</span>
                        <p class="text-green-200 italic">
                            "${narrative.emotionalImpact}"
                        </p>
                    </div>
                </div>
                
                <!-- Physiology lessons -->
                <div class="p-6 bg-slate-800 border-t border-slate-700">
                    <h4 class="font-medium text-slate-300 mb-3">🧬 Physiology Takeaways</h4>
                    <ul class="space-y-2">
                        ${narrative.physiologyHighlights.map(lesson => `
                            <li class="flex items-start gap-2 text-sm text-slate-400">
                                <span class="text-blue-400">•</span>
                                <span>${lesson}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <!-- See alternate timeline button -->
                <div class="p-4 bg-slate-900 text-center">
                    <button onclick="DiagnosticAutopsy.showAlternateTimeline()"
                            class="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 
                                   rounded-lg text-sm border border-red-600/30">
                        ⚠️ See What Could Have Happened
                    </button>
                </div>
            </div>
        `;
    },

    showAlternateTimeline: function() {
        // Would show the "what if you were delayed" timeline
        console.log('Showing alternate (worse) timeline');
    }
};


// ============================================================================
// 23. "THE BUTTERFLY EFFECT" - Parallel Timeline Visualization
// ============================================================================

const ButterflyEffect = {
    
    scenarios: {
        sepsis_timing: {
            decision: "Antibiotic timing",
            timelines: [
                {
                    name: "Your Choice",
                    time: "45 min",
                    icon: "✓",
                    color: "green",
                    outcomes: [
                        { day: 1, event: "Fever breaking, lactate normalizing" },
                        { day: 2, event: "Off pressors, eating" },
                        { day: 3, event: "Transfer to floor" },
                        { day: 5, event: "Discharge home" }
                    ],
                    finalOutcome: "Full recovery",
                    stats: { mortality: "8%", icuDays: 2, cost: "$15,000" }
                },
                {
                    name: "2-Hour Delay",
                    time: "2 hrs",
                    icon: "⚠️",
                    color: "amber",
                    outcomes: [
                        { day: 1, event: "Septic shock, vasopressors started" },
                        { day: 3, event: "AKI developing, still intubated" },
                        { day: 7, event: "Slow wean from ventilator" },
                        { day: 14, event: "Transfer to rehab" }
                    ],
                    finalOutcome: "Recovery with complications",
                    stats: { mortality: "15%", icuDays: 8, cost: "$85,000" }
                },
                {
                    name: "Missed Diagnosis",
                    time: "Never",
                    icon: "✗",
                    color: "red",
                    outcomes: [
                        { day: 1, event: "Cardiovascular collapse" },
                        { day: 1, event: "Code blue called" },
                        { day: 1, event: "Resuscitation unsuccessful" }
                    ],
                    finalOutcome: "Death",
                    stats: { mortality: "100%", icuDays: 1, cost: "Immeasurable" }
                }
            ]
        },
        stemi_activation: {
            decision: "Cath lab activation",
            timelines: [
                {
                    name: "Immediate Activation",
                    time: "Door-to-balloon: 60 min",
                    icon: "✓",
                    color: "green",
                    outcomes: [
                        { day: 1, event: "Successful PCI, 2 stents placed" },
                        { day: 2, event: "Echo: EF 50%" },
                        { day: 4, event: "Discharge on GDMT" }
                    ],
                    finalOutcome: "Preserved heart function",
                    stats: { efPreserved: "50%", mortality30d: "3%", rehospitalization: "5%" }
                },
                {
                    name: "Delayed 60 min",
                    time: "Door-to-balloon: 120 min",
                    icon: "⚠️",
                    color: "amber",
                    outcomes: [
                        { day: 1, event: "PCI successful but more myocardium lost" },
                        { day: 2, event: "Echo: EF 35%, HF developing" },
                        { day: 7, event: "Discharge with new HF diagnosis" }
                    ],
                    finalOutcome: "Heart failure",
                    stats: { efPreserved: "35%", mortality30d: "8%", rehospitalization: "20%" }
                },
                {
                    name: "Missed STEMI",
                    time: "No activation",
                    icon: "✗",
                    color: "red",
                    outcomes: [
                        { day: 1, event: "Complete LAD occlusion continues" },
                        { day: 1, event: "Ventricular fibrillation" },
                        { day: 1, event: "Cardiac arrest" }
                    ],
                    finalOutcome: "Death or severe disability",
                    stats: { efPreserved: "<20%", mortality30d: "40%", rehospitalization: "N/A" }
                }
            ]
        }
    },

    generateVisualization: function(scenarioType, studentChoice) {
        const scenario = this.scenarios[scenarioType];
        if (!scenario) return null;

        return {
            decision: scenario.decision,
            timelines: scenario.timelines,
            studentTimeline: scenario.timelines.find(t => t.name === studentChoice) || scenario.timelines[0],
            comparison: this.generateComparison(scenario.timelines)
        };
    },

    generateComparison: function(timelines) {
        // Compare outcomes across timelines
        return {
            mortalityRange: timelines.map(t => t.stats.mortality || t.stats.mortality30d),
            bestCase: timelines[0],
            worstCase: timelines[timelines.length - 1]
        };
    },

    renderVisualization: function(visualization) {
        return `
            <div class="butterfly-effect bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-violet-600 to-purple-600 p-4 text-white">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl">🦋</span>
                        <div>
                            <h3 class="text-lg font-bold">The Butterfly Effect</h3>
                            <p class="text-violet-200 text-sm">How your decision changed everything</p>
                        </div>
                    </div>
                </div>
                
                <div class="p-4">
                    <div class="text-center mb-4">
                        <div class="text-sm text-zinc-500 dark:text-zinc-400">Decision Point</div>
                        <div class="text-lg font-bold text-zinc-800 dark:text-zinc-200">
                            ${visualization.decision}
                        </div>
                    </div>
                    
                    <!-- Parallel timelines -->
                    <div class="grid grid-cols-3 gap-4">
                        ${visualization.timelines.map((timeline, index) => `
                            <div class="relative ${index === 0 ? 'ring-2 ring-green-500' : ''} 
                                        rounded-lg overflow-hidden">
                                <!-- Header -->
                                <div class="p-3 bg-${timeline.color}-100 dark:bg-${timeline.color}-900/30 
                                            text-center border-b border-${timeline.color}-200 dark:border-${timeline.color}-800">
                                    <div class="text-2xl mb-1">${timeline.icon}</div>
                                    <div class="font-medium text-${timeline.color}-800 dark:text-${timeline.color}-200">
                                        ${timeline.name}
                                    </div>
                                    <div class="text-xs text-${timeline.color}-600 dark:text-${timeline.color}-400">
                                        ${timeline.time}
                                    </div>
                                </div>
                                
                                <!-- Events -->
                                <div class="p-3 space-y-2 bg-zinc-50 dark:bg-zinc-900 min-h-[150px]">
                                    ${timeline.outcomes.slice(0, 4).map(o => `
                                        <div class="text-xs text-zinc-600 dark:text-zinc-400">
                                            <span class="font-medium">Day ${o.day}:</span> ${o.event}
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <!-- Final outcome -->
                                <div class="p-3 bg-${timeline.color}-50 dark:bg-${timeline.color}-900/20 
                                            text-center">
                                    <div class="font-bold text-${timeline.color}-800 dark:text-${timeline.color}-200">
                                        ${timeline.finalOutcome}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <!-- Your choice highlight -->
                    <div class="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg text-center">
                        <div class="text-green-800 dark:text-green-200">
                            <strong>Your choice led to Timeline A.</strong><br>
                            <span class="text-sm">This is the power of good clinical decision-making.</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// 24. "GRANDMOTHER TEST" - Explain Simply Challenge
// ============================================================================

const GrandmotherTest = {
    
    readabilityLevels: {
        expert: { grade: 16, label: "Medical Professional", color: "red" },
        college: { grade: 13, label: "College Level", color: "amber" },
        highSchool: { grade: 10, label: "High School", color: "yellow" },
        accessible: { grade: 8, label: "General Public", color: "green" },
        grandmother: { grade: 6, label: "Grandmother Approved! 👵", color: "emerald" }
    },

    medicalJargon: [
        'hypertension', 'hyperlipidemia', 'atherosclerosis', 'myocardial', 'infarction',
        'ischemia', 'perfusion', 'embolism', 'thrombosis', 'anticoagulation',
        'pathophysiology', 'etiology', 'prognosis', 'differential', 'contraindicated',
        'hemodynamic', 'tachycardia', 'bradycardia', 'arrhythmia', 'fibrillation',
        'dyspnea', 'edema', 'effusion', 'infiltrate', 'consolidation',
        'metabolic', 'acidosis', 'alkalosis', 'electrolyte', 'renal'
    ],

    simpleAlternatives: {
        'hypertension': 'high blood pressure',
        'hyperlipidemia': 'high cholesterol',
        'myocardial infarction': 'heart attack',
        'ischemia': 'not enough blood flow',
        'embolism': 'blood clot that traveled',
        'thrombosis': 'blood clot',
        'dyspnea': 'trouble breathing',
        'edema': 'swelling',
        'tachycardia': 'fast heart rate',
        'prognosis': 'what we expect to happen'
    },

    evaluateExplanation: function(text, concept) {
        const evaluation = {
            readabilityScore: this.calculateReadability(text),
            jargonFound: this.findJargon(text),
            clarity: this.assessClarity(text),
            completeness: this.assessCompleteness(text, concept),
            grandmotherApproved: false,
            suggestions: [],
            improvedVersion: ''
        };

        // Calculate overall grade
        evaluation.grandmotherApproved = 
            evaluation.readabilityScore.grade <= 8 && 
            evaluation.jargonFound.length === 0 &&
            evaluation.clarity.score >= 80;

        // Generate suggestions
        evaluation.suggestions = this.generateSuggestions(evaluation);

        return evaluation;
    },

    calculateReadability: function(text) {
        // Flesch-Kincaid Grade Level approximation
        const words = text.split(/\s+/).length;
        const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
        const syllables = this.countSyllables(text);

        const grade = 0.39 * (words / Math.max(sentences, 1)) + 
                      11.8 * (syllables / Math.max(words, 1)) - 15.59;

        const level = grade <= 6 ? 'grandmother' :
                      grade <= 8 ? 'accessible' :
                      grade <= 10 ? 'highSchool' :
                      grade <= 13 ? 'college' : 'expert';

        return {
            grade: Math.round(grade),
            level: level,
            details: this.readabilityLevels[level]
        };
    },

    countSyllables: function(text) {
        // Simplified syllable counting
        const words = text.toLowerCase().split(/\s+/);
        return words.reduce((count, word) => {
            word = word.replace(/[^a-z]/g, '');
            if (word.length <= 3) return count + 1;
            word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
            word = word.replace(/^y/, '');
            const matches = word.match(/[aeiouy]{1,2}/g);
            return count + (matches ? matches.length : 1);
        }, 0);
    },

    findJargon: function(text) {
        const lowered = text.toLowerCase();
        const found = [];

        this.medicalJargon.forEach(term => {
            if (lowered.includes(term)) {
                found.push({
                    term: term,
                    simpler: this.simpleAlternatives[term] || 'Consider simpler phrasing'
                });
            }
        });

        return found;
    },

    assessClarity: function(text) {
        let score = 100;
        const issues = [];

        // Check for long sentences
        const sentences = text.split(/[.!?]+/).filter(s => s.trim());
        const avgWords = sentences.reduce((sum, s) => sum + s.split(/\s+/).length, 0) / Math.max(sentences.length, 1);
        if (avgWords > 20) {
            score -= 20;
            issues.push("Some sentences are too long. Try breaking them up.");
        }

        // Check for passive voice (simplified)
        if (text.includes(' was ') || text.includes(' were ') || text.includes(' been ')) {
            score -= 10;
            issues.push("Consider using more active voice.");
        }

        // Check for concrete examples
        if (!text.includes('like') && !text.includes('for example') && !text.includes('imagine')) {
            score -= 10;
            issues.push("Add a concrete example or analogy.");
        }

        return { score, issues };
    },

    assessCompleteness: function(text, concept) {
        // Check if key elements of explanation are present
        const elements = {
            whatItIs: text.length > 50,
            whyItMatters: text.toLowerCase().includes('because') || text.toLowerCase().includes('means'),
            whatHappensNext: text.toLowerCase().includes('will') || text.toLowerCase().includes('next')
        };

        const complete = Object.values(elements).filter(Boolean).length;
        return {
            score: (complete / 3) * 100,
            elements: elements
        };
    },

    generateSuggestions: function(evaluation) {
        const suggestions = [];

        if (evaluation.jargonFound.length > 0) {
            evaluation.jargonFound.slice(0, 3).forEach(j => {
                suggestions.push({
                    type: 'jargon',
                    message: `Replace "${j.term}" with "${j.simpler}"`
                });
            });
        }

        evaluation.clarity.issues.forEach(issue => {
            suggestions.push({ type: 'clarity', message: issue });
        });

        if (evaluation.readabilityScore.grade > 8) {
            suggestions.push({
                type: 'readability',
                message: "Use shorter words and sentences to lower the reading level."
            });
        }

        return suggestions;
    },

    renderEvaluation: function(evaluation, originalText) {
        const level = evaluation.readabilityScore.details;

        return `
            <div class="grandmother-test bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl">👵</span>
                        <div>
                            <h3 class="text-lg font-bold">The Grandmother Test</h3>
                            <p class="text-amber-100 text-sm">Can you explain it simply?</p>
                        </div>
                    </div>
                </div>
                
                <!-- Score -->
                <div class="p-6 text-center border-b border-zinc-200 dark:border-zinc-700">
                    <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full
                                bg-${level.color}-100 dark:bg-${level.color}-900/30">
                        <span class="text-4xl">${evaluation.grandmotherApproved ? '✅' : '📚'}</span>
                        <div class="text-left">
                            <div class="font-bold text-${level.color}-800 dark:text-${level.color}-200">
                                ${level.label}
                            </div>
                            <div class="text-sm text-${level.color}-600 dark:text-${level.color}-400">
                                Grade Level: ${evaluation.readabilityScore.grade}
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Jargon found -->
                ${evaluation.jargonFound.length > 0 ? `
                    <div class="p-4 bg-red-50 dark:bg-red-900/20 border-b border-zinc-200 dark:border-zinc-700">
                        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">
                            🔬 Medical Jargon Detected
                        </h4>
                        <div class="space-y-2">
                            ${evaluation.jargonFound.map(j => `
                                <div class="flex items-center gap-2 text-sm">
                                    <span class="text-red-600 line-through">${j.term}</span>
                                    <span class="text-zinc-400">→</span>
                                    <span class="text-green-600">${j.simpler}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Suggestions -->
                ${evaluation.suggestions.length > 0 ? `
                    <div class="p-4 border-b border-zinc-200 dark:border-zinc-700">
                        <h4 class="font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                            💡 Suggestions
                        </h4>
                        <ul class="space-y-2">
                            ${evaluation.suggestions.map(s => `
                                <li class="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                                    <span>•</span>
                                    <span>${s.message}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                <!-- Success message -->
                ${evaluation.grandmotherApproved ? `
                    <div class="p-6 bg-green-50 dark:bg-green-900/30 text-center">
                        <div class="text-4xl mb-2">🎉</div>
                        <div class="font-bold text-green-800 dark:text-green-200">
                            Grandmother Approved!
                        </div>
                        <p class="text-sm text-green-600 dark:text-green-400 mt-1">
                            If you can explain it this simply, you truly understand it.
                        </p>
                        <div class="mt-4">
                            <span class="inline-block px-4 py-1 bg-green-600 text-white rounded-full text-sm">
                                🏆 Teacher Badge Earned!
                            </span>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }
};


// ============================================================================
// 25. "UNCERTAINTY EMBRACE" - Epistemic Humility Tracker
// ============================================================================

const UncertaintyEmbrace = {
    
    data: {
        appropriateUncertainty: 0,  // Said "unsure" when actually unsure
        appropriateCertainty: 0,    // Said "confident" when correct
        overconfidence: 0,          // Said "confident" but wrong
        underconfidence: 0,         // Said "unsure" but was right
        appropriateTests: 0,        // Ordered confirmatory tests when uncertain
        totalDecisions: 0
    },

    recordDecision: function(stated, actual, orderedConfirmatory = false) {
        this.data.totalDecisions++;

        if (stated === 'uncertain' && actual === 'uncertain') {
            this.data.appropriateUncertainty++;
        } else if (stated === 'confident' && actual === 'correct') {
            this.data.appropriateCertainty++;
        } else if (stated === 'confident' && actual === 'incorrect') {
            this.data.overconfidence++;
        } else if (stated === 'uncertain' && actual === 'correct') {
            this.data.underconfidence++;
        }

        if (orderedConfirmatory && stated === 'uncertain') {
            this.data.appropriateTests++;
        }

        this.persist();
    },

    calculateEpistemicHumilityScore: function() {
        if (this.data.totalDecisions < 10) return null;

        const appropriateResponses = 
            this.data.appropriateUncertainty + 
            this.data.appropriateCertainty + 
            this.data.appropriateTests;

        return Math.round((appropriateResponses / this.data.totalDecisions) * 100);
    },

    getInsight: function() {
        const score = this.calculateEpistemicHumilityScore();
        if (score === null) return { message: "Complete more cases to see your pattern." };

        if (this.data.overconfidence > this.data.totalDecisions * 0.2) {
            return {
                type: 'overconfident',
                icon: '⚠️',
                message: "You tend to express more certainty than warranted.",
                advice: "Practice saying 'I'm not sure, but my leading diagnosis is...'",
                color: 'amber'
            };
        } else if (this.data.underconfidence > this.data.totalDecisions * 0.2) {
            return {
                type: 'underconfident',
                icon: '💪',
                message: "You know more than you think! Trust yourself more.",
                advice: "When you have good evidence, it's okay to be confident.",
                color: 'blue'
            };
        } else {
            return {
                type: 'calibrated',
                icon: '🎯',
                message: "Excellent epistemic calibration! You know what you know.",
                advice: "This self-awareness is a clinical superpower.",
                color: 'green'
            };
        }
    },

    renderDashboard: function() {
        const score = this.calculateEpistemicHumilityScore();
        const insight = this.getInsight();

        return `
            <div class="uncertainty-embrace bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 text-white">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl">🤔</span>
                        <div>
                            <h3 class="text-lg font-bold">Epistemic Humility Score</h3>
                            <p class="text-indigo-200 text-sm">Knowing what you don't know</p>
                        </div>
                    </div>
                </div>
                
                ${score !== null ? `
                    <!-- Score display -->
                    <div class="p-6 text-center border-b border-zinc-200 dark:border-zinc-700">
                        <div class="text-5xl font-bold text-${insight.color}-600 mb-2">
                            ${score}%
                        </div>
                        <div class="text-zinc-500 dark:text-zinc-400">Epistemic Humility Score</div>
                    </div>
                    
                    <!-- Stats breakdown -->
                    <div class="grid grid-cols-2 gap-4 p-4 border-b border-zinc-200 dark:border-zinc-700">
                        <div class="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                            <div class="text-xl font-bold text-green-600">
                                ${this.data.appropriateCertainty}
                            </div>
                            <div class="text-xs text-zinc-500">Confident & Correct</div>
                        </div>
                        <div class="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                            <div class="text-xl font-bold text-blue-600">
                                ${this.data.appropriateUncertainty}
                            </div>
                            <div class="text-xs text-zinc-500">Appropriately Uncertain</div>
                        </div>
                        <div class="text-center p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                            <div class="text-xl font-bold text-amber-600">
                                ${this.data.overconfidence}
                            </div>
                            <div class="text-xs text-zinc-500">Overconfident</div>
                        </div>
                        <div class="text-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                            <div class="text-xl font-bold text-purple-600">
                                ${this.data.underconfidence}
                            </div>
                            <div class="text-xs text-zinc-500">Underconfident</div>
                        </div>
                    </div>
                    
                    <!-- Insight -->
                    <div class="p-4 bg-${insight.color}-50 dark:bg-${insight.color}-900/30">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">${insight.icon}</span>
                            <div>
                                <p class="font-medium text-zinc-800 dark:text-zinc-200">
                                    ${insight.message}
                                </p>
                                <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                    💡 ${insight.advice}
                                </p>
                            </div>
                        </div>
                    </div>
                ` : `
                    <div class="p-8 text-center text-zinc-500">
                        <div class="text-4xl mb-2">📊</div>
                        <p>Complete at least 10 cases to see your epistemic humility pattern.</p>
                        <p class="text-sm mt-2">${this.data.totalDecisions}/10 decisions recorded</p>
                    </div>
                `}
            </div>
        `;
    },

    persist: function() {
        localStorage.setItem('reasondx_uncertainty', JSON.stringify(this.data));
    },

    load: function() {
        const saved = localStorage.getItem('reasondx_uncertainty');
        if (saved) {
            this.data = JSON.parse(saved);
        }
    }
};


// ============================================================================
// 26. "NIGHT SHIFT SIMULATOR" - Fatigue & Distraction Mode
// ============================================================================

const NightShiftSimulator = {
    
    enabled: false,
    currentState: null,

    fatigueEffects: {
        mild: {
            timeMultiplier: 1.0,
            distractionFrequency: 0.1,
            cognitiveLoadIncrease: 1.1
        },
        moderate: {
            timeMultiplier: 0.8,  // Less time to answer
            distractionFrequency: 0.2,
            cognitiveLoadIncrease: 1.3
        },
        severe: {
            timeMultiplier: 0.6,
            distractionFrequency: 0.35,
            cognitiveLoadIncrease: 1.5
        }
    },

    distractions: [
        { type: 'page', message: "📟 BEEP: Nurse calling about Room 412's pain meds", urgency: 'low' },
        { type: 'page', message: "📟 BEEP: Lab critical value callback", urgency: 'high' },
        { type: 'interruption', message: "👨‍⚕️ Resident: 'Can you cosign this order?'", urgency: 'medium' },
        { type: 'interruption', message: "📱 Personal phone buzzing", urgency: 'low' },
        { type: 'announcement', message: "🔊 'Code Blue, 4th floor ICU'", urgency: 'high' },
        { type: 'interruption', message: "☕ 'Want coffee? I'm making a run.'", urgency: 'low' },
        { type: 'page', message: "📟 BEEP: ED consult request", urgency: 'medium' },
        { type: 'environmental', message: "💡 Fluorescent light flickering above you", urgency: 'low' }
    ],

    startSimulation: function(fatigueLevel = 'moderate') {
        this.enabled = true;
        this.currentState = {
            fatigueLevel: fatigueLevel,
            effects: this.fatigueEffects[fatigueLevel],
            distractionsShown: 0,
            distractionsHandled: 0,
            performanceBaseline: null,
            performanceUnderFatigue: null,
            startTime: Date.now()
        };

        return this.currentState;
    },

    shouldShowDistraction: function() {
        if (!this.enabled || !this.currentState) return false;
        return Math.random() < this.currentState.effects.distractionFrequency;
    },

    getRandomDistraction: function() {
        const distraction = this.distractions[
            Math.floor(Math.random() * this.distractions.length)
        ];
        this.currentState.distractionsShown++;
        return distraction;
    },

    handleDistraction: function(response) {
        // 'acknowledge', 'defer', 'ignore'
        if (response === 'acknowledge' || response === 'defer') {
            this.currentState.distractionsHandled++;
        }
    },

    endSimulation: function(performanceData) {
        this.currentState.performanceUnderFatigue = performanceData;
        this.enabled = false;

        return this.generateReport();
    },

    generateReport: function() {
        const state = this.currentState;
        
        return {
            fatigueLevel: state.fatigueLevel,
            duration: Math.round((Date.now() - state.startTime) / 60000),
            distractions: {
                shown: state.distractionsShown,
                handled: state.distractionsHandled,
                handlingRate: Math.round((state.distractionsHandled / Math.max(state.distractionsShown, 1)) * 100)
            },
            performance: {
                baseline: state.performanceBaseline,
                underFatigue: state.performanceUnderFatigue,
                degradation: state.performanceBaseline ? 
                    Math.round(((state.performanceBaseline - state.performanceUnderFatigue) / state.performanceBaseline) * 100) : null
            },
            insights: this.generateInsights()
        };
    },

    generateInsights: function() {
        const insights = [];
        const state = this.currentState;

        if (state.distractionsHandled < state.distractionsShown * 0.5) {
            insights.push({
                type: 'warning',
                message: "You ignored many interruptions. In real life, some of these could be critical."
            });
        }

        insights.push({
            type: 'learning',
            message: "Night shifts impair cognition similar to legal intoxication. Recognize when to ask for help."
        });

        insights.push({
            type: 'tip',
            message: "Strategic use of checklists can offset cognitive degradation from fatigue."
        });

        return insights;
    },

    renderDistraction: function(distraction) {
        const urgencyColors = {
            low: 'bg-zinc-100 dark:bg-zinc-700 border-zinc-300',
            medium: 'bg-amber-100 dark:bg-amber-900/30 border-amber-300',
            high: 'bg-red-100 dark:bg-red-900/30 border-red-300 animate-pulse'
        };

        return `
            <div class="night-shift-distraction fixed top-4 right-4 max-w-sm z-50 
                        ${urgencyColors[distraction.urgency]} border-2 rounded-xl p-4 shadow-2xl">
                <div class="flex items-start gap-3">
                    <span class="text-2xl">
                        ${distraction.type === 'page' ? '📟' : 
                          distraction.type === 'interruption' ? '👤' : 
                          distraction.type === 'announcement' ? '🔊' : '⚠️'}
                    </span>
                    <div class="flex-1">
                        <p class="text-zinc-800 dark:text-zinc-200 font-medium">
                            ${distraction.message}
                        </p>
                        <div class="flex gap-2 mt-3">
                            <button onclick="NightShiftSimulator.handleDistraction('acknowledge')"
                                    class="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                                Handle Now
                            </button>
                            <button onclick="NightShiftSimulator.handleDistraction('defer')"
                                    class="px-3 py-1 bg-zinc-600 text-white rounded text-sm">
                                After This
                            </button>
                            <button onclick="NightShiftSimulator.handleDistraction('ignore')"
                                    class="px-3 py-1 bg-zinc-300 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-300 rounded text-sm">
                                Ignore
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderReport: function(report) {
        return `
            <div class="night-shift-report bg-gradient-to-br from-slate-900 to-indigo-900 
                        text-white rounded-xl shadow-lg overflow-hidden">
                <div class="p-6 border-b border-slate-700">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl">🌙</span>
                        <div>
                            <h3 class="text-xl font-bold">Night Shift Debrief</h3>
                            <p class="text-slate-400 text-sm">${report.duration} minutes of simulated fatigue</p>
                        </div>
                    </div>
                </div>
                
                <div class="p-6 grid grid-cols-3 gap-4">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-amber-400">
                            ${report.fatigueLevel}
                        </div>
                        <div class="text-slate-400 text-sm">Fatigue Level</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-400">
                            ${report.distractions.shown}
                        </div>
                        <div class="text-slate-400 text-sm">Interruptions</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold ${report.performance.degradation > 20 ? 'text-red-400' : 'text-green-400'}">
                            ${report.performance.degradation !== null ? `-${report.performance.degradation}%` : 'N/A'}
                        </div>
                        <div class="text-slate-400 text-sm">Performance Change</div>
                    </div>
                </div>
                
                <div class="p-6 bg-slate-800">
                    <h4 class="font-medium text-slate-300 mb-3">💡 Insights</h4>
                    <ul class="space-y-2">
                        ${report.insights.map(insight => `
                            <li class="text-sm text-slate-400 flex items-start gap-2">
                                <span>${insight.type === 'warning' ? '⚠️' : insight.type === 'tip' ? '💡' : '📚'}</span>
                                <span>${insight.message}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// 27. "PATIENT FOLLOW-UP" - Long-Term Outcome Notifications
// ============================================================================

const PatientFollowUp = {
    
    pendingFollowUps: [],

    scheduleFollowUp: function(caseData, daysLater, outcome) {
        const followUp = {
            id: `followup_${Date.now()}`,
            caseId: caseData.id,
            patientName: caseData.patientName || this.generatePatientName(),
            diagnosis: caseData.diagnosis,
            studentActions: caseData.studentActions,
            scheduledFor: Date.now() + (daysLater * 24 * 60 * 60 * 1000),
            outcome: outcome,
            delivered: false
        };

        this.pendingFollowUps.push(followUp);
        this.persist();

        return followUp;
    },

    generatePatientName: function() {
        const firstNames = ['James', 'Maria', 'Robert', 'Linda', 'Michael', 'Sarah', 'David', 'Jennifer'];
        const lastNames = ['Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez'];
        return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    },

    checkForDueFollowUps: function() {
        const now = Date.now();
        return this.pendingFollowUps.filter(f => !f.delivered && f.scheduledFor <= now);
    },

    deliverFollowUp: function(followUpId) {
        const followUp = this.pendingFollowUps.find(f => f.id === followUpId);
        if (followUp) {
            followUp.delivered = true;
            this.persist();
        }
        return followUp;
    },

    outcomeTemplates: {
        excellent: {
            icon: '💚',
            messages: [
                "I just walked my daughter down the aisle. Couldn't have done it without you.",
                "Back to work, feeling great. My family wanted me to thank you.",
                "Running my first 5K since the diagnosis. Thank you for catching it early.",
                "Just celebrated my anniversary. Every day is a gift now."
            ]
        },
        good: {
            icon: '💙',
            messages: [
                "Recovery is going well. Cardiac rehab starts next week.",
                "Home from rehab, getting stronger every day.",
                "Follow-up echo looks good. Medications are working.",
                "Learning to manage this new normal. Grateful for the care."
            ]
        },
        complicated: {
            icon: '💛',
            messages: [
                "It's been a tough road, but I'm still fighting.",
                "Some setbacks, but the team is adjusting my treatment.",
                "Rehab is harder than I expected, but I'm not giving up.",
                "Taking it one day at a time. Thank you for not giving up on me."
            ]
        },
        educational: {
            icon: '📚',
            messages: [
                "The social worker you connected me with changed everything.",
                "Finally got insurance sorted. Can afford my medications now.",
                "Joined a support group. Helps to know I'm not alone.",
                "My family learned CPR after this. Paying it forward."
            ]
        }
    },

    renderFollowUp: function(followUp) {
        const outcome = this.outcomeTemplates[followUp.outcome] || this.outcomeTemplates.good;
        const message = outcome.messages[Math.floor(Math.random() * outcome.messages.length)];

        return `
            <div class="patient-followup fixed inset-0 flex items-center justify-center z-50 bg-black/60"
                 onclick="if(event.target === this) this.remove()">
                <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl max-w-md mx-4 overflow-hidden 
                            transform animate-slide-up">
                    <!-- Envelope opening animation -->
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
                        <div class="text-4xl mb-2">📬</div>
                        <h3 class="text-xl font-bold">Patient Follow-Up</h3>
                        <p class="text-blue-200 text-sm">A message from the future</p>
                    </div>
                    
                    <div class="p-6">
                        <!-- Patient info -->
                        <div class="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-700">
                            <div class="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-700 
                                        flex items-center justify-center text-xl">
                                👤
                            </div>
                            <div>
                                <div class="font-medium text-zinc-900 dark:text-white">
                                    ${followUp.patientName}
                                </div>
                                <div class="text-sm text-zinc-500">
                                    ${followUp.diagnosis} • ${Math.round((Date.now() - (followUp.scheduledFor - 14*24*60*60*1000)) / (24*60*60*1000))} days ago
                                </div>
                            </div>
                        </div>
                        
                        <!-- Message -->
                        <div class="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 mb-4">
                            <p class="text-zinc-700 dark:text-zinc-300 italic">
                                "${message}"
                            </p>
                            <div class="text-right mt-2">
                                <span class="text-2xl">${outcome.icon}</span>
                            </div>
                        </div>
                        
                        <!-- Impact reminder -->
                        <p class="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                            This is why we do what we do.
                        </p>
                    </div>
                    
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-900 text-center">
                        <button onclick="this.closest('.patient-followup').remove()"
                                class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    persist: function() {
        localStorage.setItem('reasondx_followups', JSON.stringify(this.pendingFollowUps));
    },

    load: function() {
        const saved = localStorage.getItem('reasondx_followups');
        if (saved) {
            this.pendingFollowUps = JSON.parse(saved);
        }
    }
};


// ============================================================================
// 28. "COGNITIVE LOAD DASHBOARD" - Real-Time Brain Status
// ============================================================================

const CognitiveLoadDashboard = {
    
    currentSession: null,

    metrics: {
        responseTime: [],
        errorRate: [],
        hesitationEvents: 0,
        backtrackEvents: 0,
        sessionStart: null
    },

    startSession: function() {
        this.currentSession = {
            startTime: Date.now(),
            responseTime: [],
            errors: 0,
            totalQuestions: 0,
            hesitations: 0,
            backtracks: 0,
            breaksTaken: 0
        };
    },

    recordResponse: function(timeTaken, wasCorrect, hesitated = false, backtracked = false) {
        if (!this.currentSession) this.startSession();

        this.currentSession.responseTime.push(timeTaken);
        this.currentSession.totalQuestions++;
        if (!wasCorrect) this.currentSession.errors++;
        if (hesitated) this.currentSession.hesitations++;
        if (backtracked) this.currentSession.backtracks++;
    },

    calculateCognitiveLoad: function() {
        if (!this.currentSession || this.currentSession.totalQuestions < 3) return null;

        const session = this.currentSession;
        
        // Calculate metrics
        const avgResponseTime = session.responseTime.reduce((a, b) => a + b, 0) / session.responseTime.length;
        const recentResponseTime = session.responseTime.slice(-5).reduce((a, b) => a + b, 0) / Math.min(session.responseTime.length, 5);
        const errorRate = session.errors / session.totalQuestions;
        const hesitationRate = session.hesitations / session.totalQuestions;
        const sessionDuration = (Date.now() - session.startTime) / 60000; // minutes

        // Calculate load score (0-100)
        let loadScore = 0;
        
        // Response time slowing indicates fatigue
        if (recentResponseTime > avgResponseTime * 1.3) loadScore += 30;
        else if (recentResponseTime > avgResponseTime * 1.15) loadScore += 15;
        
        // Error rate indicates overload
        loadScore += errorRate * 40;
        
        // Hesitation indicates uncertainty/fatigue
        loadScore += hesitationRate * 20;
        
        // Long sessions increase load
        if (sessionDuration > 45) loadScore += 20;
        else if (sessionDuration > 30) loadScore += 10;

        return {
            score: Math.min(100, Math.round(loadScore)),
            zone: loadScore < 30 ? 'optimal' : loadScore < 60 ? 'manageable' : loadScore < 80 ? 'high' : 'overload',
            metrics: {
                avgResponseTime: Math.round(avgResponseTime),
                recentResponseTime: Math.round(recentResponseTime),
                errorRate: Math.round(errorRate * 100),
                sessionDuration: Math.round(sessionDuration),
                hesitationRate: Math.round(hesitationRate * 100)
            },
            recommendation: this.getRecommendation(loadScore, sessionDuration)
        };
    },

    getRecommendation: function(loadScore, duration) {
        if (loadScore >= 80) {
            return {
                icon: '🛑',
                message: "Take a break now. Your performance is declining.",
                action: "5-minute break recommended",
                urgency: 'high'
            };
        } else if (loadScore >= 60) {
            return {
                icon: '⚠️',
                message: "Cognitive load is building. Consider a break soon.",
                action: "Finish this case, then rest",
                urgency: 'medium'
            };
        } else if (duration > 45) {
            return {
                icon: '⏰',
                message: "You've been studying for a while. Breaks improve retention.",
                action: "Optional break in 10 minutes",
                urgency: 'low'
            };
        } else {
            return {
                icon: '✅',
                message: "You're in the zone! Optimal cognitive state.",
                action: "Keep going",
                urgency: 'none'
            };
        }
    },

    renderDashboard: function() {
        const load = this.calculateCognitiveLoad();
        
        if (!load) {
            return `
                <div class="cognitive-load-mini bg-zinc-100 dark:bg-zinc-700 rounded-lg p-3 text-center text-sm text-zinc-500">
                    📊 Cognitive load tracking will begin after a few questions
                </div>
            `;
        }

        const zoneColors = {
            optimal: { bg: 'bg-green-500', text: 'text-green-600', label: 'Optimal' },
            manageable: { bg: 'bg-yellow-500', text: 'text-yellow-600', label: 'Manageable' },
            high: { bg: 'bg-orange-500', text: 'text-orange-600', label: 'High' },
            overload: { bg: 'bg-red-500', text: 'text-red-600', label: 'Overload' }
        };
        const zone = zoneColors[load.zone];

        return `
            <div class="cognitive-load-dashboard bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <div class="p-4 border-b border-zinc-200 dark:border-zinc-700">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="text-xl">🧠</span>
                            <span class="font-medium text-zinc-800 dark:text-zinc-200">Cognitive Load</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-3 rounded-full ${zone.bg} ${load.zone === 'overload' ? 'animate-pulse' : ''}"></div>
                            <span class="text-sm ${zone.text} font-medium">${zone.label}</span>
                        </div>
                    </div>
                </div>
                
                <!-- Load meter -->
                <div class="p-4">
                    <div class="h-4 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                        <div class="h-full ${zone.bg} transition-all duration-500"
                             style="width: ${load.score}%"></div>
                    </div>
                    <div class="flex justify-between text-xs text-zinc-500 mt-1">
                        <span>Fresh</span>
                        <span>Fatigued</span>
                    </div>
                </div>
                
                <!-- Quick stats -->
                <div class="px-4 pb-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                        <div class="font-medium text-zinc-800 dark:text-zinc-200">
                            ${load.metrics.sessionDuration} min
                        </div>
                        <div class="text-zinc-500">Session</div>
                    </div>
                    <div>
                        <div class="font-medium text-zinc-800 dark:text-zinc-200">
                            ${load.metrics.errorRate}%
                        </div>
                        <div class="text-zinc-500">Error Rate</div>
                    </div>
                    <div>
                        <div class="font-medium text-zinc-800 dark:text-zinc-200">
                            ${load.metrics.recentResponseTime}s
                        </div>
                        <div class="text-zinc-500">Avg Time</div>
                    </div>
                </div>
                
                <!-- Recommendation -->
                ${load.recommendation.urgency !== 'none' ? `
                    <div class="p-3 ${
                        load.recommendation.urgency === 'high' ? 'bg-red-50 dark:bg-red-900/30' :
                        load.recommendation.urgency === 'medium' ? 'bg-amber-50 dark:bg-amber-900/30' :
                        'bg-blue-50 dark:bg-blue-900/30'
                    } border-t border-zinc-200 dark:border-zinc-700">
                        <div class="flex items-center gap-2 text-sm">
                            <span>${load.recommendation.icon}</span>
                            <span class="text-zinc-700 dark:text-zinc-300">${load.recommendation.action}</span>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }
};


// ============================================================================
// 29. "DIFFERENTIAL GRAVEYARD" - Ruled-Out Diagnoses Memorial
// ============================================================================

const DifferentialGraveyard = {
    
    ruledOut: [],

    addToGraveyard: function(diagnosis, reason, evidence) {
        const tombstone = {
            id: `grave_${Date.now()}`,
            diagnosis: diagnosis,
            reason: reason,
            evidence: evidence,
            ruledOutAt: new Date().toISOString(),
            wasAppropriate: true // Can be updated if they ruled out the correct answer
        };

        this.ruledOut.push(tombstone);
        return tombstone;
    },

    markInappropriate: function(tombstoneId) {
        const tombstone = this.ruledOut.find(t => t.id === tombstoneId);
        if (tombstone) {
            tombstone.wasAppropriate = false;
        }
    },

    getSessionGraveyard: function() {
        // Return ruled-out diagnoses from current session
        const sessionStart = Date.now() - (60 * 60 * 1000); // Last hour
        return this.ruledOut.filter(t => new Date(t.ruledOutAt).getTime() > sessionStart);
    },

    renderGraveyard: function() {
        const graves = this.getSessionGraveyard();

        return `
            <div class="differential-graveyard bg-gradient-to-br from-slate-800 to-slate-900 
                        text-white rounded-xl shadow-lg overflow-hidden">
                <div class="p-4 border-b border-slate-700">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">🪦</span>
                        <div>
                            <h3 class="font-bold">Differential Graveyard</h3>
                            <p class="text-slate-400 text-sm">Diagnoses appropriately laid to rest</p>
                        </div>
                    </div>
                </div>
                
                <div class="p-4">
                    ${graves.length > 0 ? `
                        <div class="space-y-3">
                            ${graves.map(grave => `
                                <div class="p-3 bg-slate-700/50 rounded-lg ${!grave.wasAppropriate ? 'border border-red-500' : ''}">
                                    <div class="flex items-start gap-3">
                                        <span class="text-xl">${grave.wasAppropriate ? '💀' : '👻'}</span>
                                        <div class="flex-1">
                                            <div class="font-medium ${!grave.wasAppropriate ? 'text-red-400 line-through' : ''}">
                                                ${grave.diagnosis}
                                            </div>
                                            <div class="text-sm text-slate-400 mt-1">
                                                <strong>Ruled out by:</strong> ${grave.reason}
                                            </div>
                                            <div class="text-xs text-slate-500 mt-1">
                                                ${grave.evidence}
                                            </div>
                                            ${!grave.wasAppropriate ? `
                                                <div class="text-xs text-red-400 mt-2">
                                                    ⚠️ This was actually the correct diagnosis
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="text-center text-slate-500 py-4">
                            <div class="text-3xl mb-2">🪦</div>
                            <p>No diagnoses ruled out yet</p>
                            <p class="text-sm mt-1">Good clinicians know when to exclude</p>
                        </div>
                    `}
                </div>
                
                <div class="p-4 bg-slate-800 border-t border-slate-700">
                    <p class="text-sm text-slate-400 italic text-center">
                        "A good differential isn't just what you consider—<br>
                        it's what you appropriately exclude."
                    </p>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// 30. "THE MENTOR'S NOTEBOOK" - Auto-Generated Clinical Pearl Collection
// ============================================================================

const MentorsNotebook = {
    
    pearls: {},

    addPearl: function(pearl) {
        const entry = {
            id: `pearl_${Date.now()}`,
            content: pearl.content,
            category: pearl.category,
            source: pearl.source, // Which case it came from
            timestamp: new Date().toISOString(),
            reviewed: 0,
            favorite: false
        };

        if (!this.pearls[pearl.category]) {
            this.pearls[pearl.category] = [];
        }
        this.pearls[pearl.category].push(entry);
        this.persist();

        return entry;
    },

    toggleFavorite: function(pearlId) {
        Object.values(this.pearls).forEach(category => {
            const pearl = category.find(p => p.id === pearlId);
            if (pearl) {
                pearl.favorite = !pearl.favorite;
            }
        });
        this.persist();
    },

    searchPearls: function(query) {
        const results = [];
        const loweredQuery = query.toLowerCase();

        Object.entries(this.pearls).forEach(([category, pearls]) => {
            pearls.forEach(pearl => {
                if (pearl.content.toLowerCase().includes(loweredQuery)) {
                    results.push({ ...pearl, category });
                }
            });
        });

        return results;
    },

    getFavorites: function() {
        const favorites = [];
        Object.entries(this.pearls).forEach(([category, pearls]) => {
            pearls.filter(p => p.favorite).forEach(pearl => {
                favorites.push({ ...pearl, category });
            });
        });
        return favorites;
    },

    exportNotebook: function() {
        let markdown = "# My Clinical Pearls Notebook\n\n";
        markdown += `*Generated from ReasonDx on ${new Date().toLocaleDateString()}*\n\n`;

        Object.entries(this.pearls).forEach(([category, pearls]) => {
            markdown += `## ${category}\n\n`;
            pearls.forEach(pearl => {
                markdown += `- ${pearl.content}${pearl.favorite ? ' ⭐' : ''}\n`;
            });
            markdown += '\n';
        });

        return markdown;
    },

    renderNotebook: function() {
        const categories = Object.keys(this.pearls);
        const totalPearls = Object.values(this.pearls).reduce((sum, cat) => sum + cat.length, 0);
        const favorites = this.getFavorites();

        return `
            <div class="mentors-notebook bg-amber-50 dark:bg-amber-900/20 rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-amber-600 to-orange-600 p-4 text-white">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="text-3xl">📓</span>
                            <div>
                                <h3 class="text-lg font-bold">The Mentor's Notebook</h3>
                                <p class="text-amber-200 text-sm">Your clinical pearls collection</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-2xl font-bold">${totalPearls}</div>
                            <div class="text-amber-200 text-xs">Pearls</div>
                        </div>
                    </div>
                </div>
                
                <!-- Search -->
                <div class="p-4 border-b border-amber-200 dark:border-amber-800">
                    <input type="text" 
                           placeholder="Search your pearls..."
                           class="w-full px-4 py-2 rounded-lg border border-amber-300 dark:border-amber-700
                                  bg-white dark:bg-amber-900/30 text-zinc-800 dark:text-zinc-200"
                           onkeyup="MentorsNotebook.handleSearch(this.value)">
                </div>
                
                <!-- Favorites section -->
                ${favorites.length > 0 ? `
                    <div class="p-4 border-b border-amber-200 dark:border-amber-800">
                        <h4 class="font-medium text-amber-800 dark:text-amber-200 mb-2">
                            ⭐ Favorites
                        </h4>
                        <div class="space-y-2">
                            ${favorites.slice(0, 5).map(pearl => `
                                <div class="text-sm text-amber-900 dark:text-amber-100 p-2 
                                            bg-white dark:bg-amber-900/30 rounded">
                                    ${pearl.content}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Categories -->
                <div class="p-4">
                    <div class="flex flex-wrap gap-2">
                        ${categories.map(cat => `
                            <button class="px-3 py-1 bg-amber-200 dark:bg-amber-800 
                                           text-amber-800 dark:text-amber-200 rounded-full text-sm">
                                ${cat} (${this.pearls[cat].length})
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Export button -->
                <div class="p-4 bg-amber-100 dark:bg-amber-900/40 text-center">
                    <button onclick="MentorsNotebook.downloadExport()"
                            class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm">
                        📥 Export as Study Guide
                    </button>
                </div>
            </div>
        `;
    },

    handleSearch: function(query) {
        console.log('Searching:', query);
    },

    downloadExport: function() {
        const markdown = this.exportNotebook();
        console.log('Exporting notebook:', markdown);
    },

    persist: function() {
        localStorage.setItem('reasondx_notebook', JSON.stringify(this.pearls));
    },

    load: function() {
        const saved = localStorage.getItem('reasondx_notebook');
        if (saved) {
            this.pearls = JSON.parse(saved);
        }
    }
};


// ============================================================================
// 31. "THE MIRROR" - Clinical Identity Reflection
// ============================================================================

const ClinicalMirror = {
    
    traits: {
        thinkingStyle: null,      // 'systematic', 'intuitive', 'mixed'
        speedAccuracyBalance: null, // 'speed-focused', 'accuracy-focused', 'balanced'
        riskTolerance: null,       // 'conservative', 'aggressive', 'balanced'
        strengthAreas: [],
        blindSpots: [],
        learningPattern: null      // 'morning-person', 'night-owl', 'consistent'
    },

    analyzeIdentity: function(behaviorData) {
        // Analyze thinking style
        if (behaviorData.usesChecklists && behaviorData.systematicApproach > 0.7) {
            this.traits.thinkingStyle = 'systematic';
        } else if (behaviorData.patternRecognitionSpeed < 30 && behaviorData.gutAccuracy > 0.7) {
            this.traits.thinkingStyle = 'intuitive';
        } else {
            this.traits.thinkingStyle = 'mixed';
        }

        // Analyze speed vs accuracy
        if (behaviorData.avgResponseTime < 45 && behaviorData.accuracy > 0.75) {
            this.traits.speedAccuracyBalance = 'balanced';
        } else if (behaviorData.avgResponseTime < 30) {
            this.traits.speedAccuracyBalance = 'speed-focused';
        } else {
            this.traits.speedAccuracyBalance = 'accuracy-focused';
        }

        // Identify strengths
        this.traits.strengthAreas = this.identifyStrengths(behaviorData);
        this.traits.blindSpots = this.identifyBlindSpots(behaviorData);

        return this.traits;
    },

    identifyStrengths: function(data) {
        const strengths = [];
        if (data.timePressurePerformance > 0.8) {
            strengths.push({ trait: 'Performs under pressure', icon: '⚡' });
        }
        if (data.neverMissedCritical) {
            strengths.push({ trait: 'Never misses life-threatening diagnoses', icon: '🛡️' });
        }
        if (data.thoroughHistory) {
            strengths.push({ trait: 'Thorough history-taking', icon: '📋' });
        }
        if (data.goodPatientCommunication) {
            strengths.push({ trait: 'Clear patient communication', icon: '💬' });
        }
        return strengths;
    },

    identifyBlindSpots: function(data) {
        const blindSpots = [];
        if (data.overtestsWhenUncertain > 0.5) {
            blindSpots.push({ trait: 'Tends to over-test when uncertain', advice: 'Trust your clinical judgment more' });
        }
        if (data.rushesComplexCases) {
            blindSpots.push({ trait: 'Rushes through complex cases', advice: 'Slow down when things don\'t fit' });
        }
        if (data.avoidsSpecialties && data.avoidsSpecialties.length > 0) {
            blindSpots.push({ trait: `Avoids ${data.avoidsSpecialties[0]} cases`, advice: 'Confront uncomfortable topics' });
        }
        return blindSpots;
    },

    renderMirror: function() {
        const traits = this.traits;

        const styleDescriptions = {
            systematic: { icon: '📊', label: 'Systematic Thinker', desc: 'You work through problems methodically, rarely skipping steps.' },
            intuitive: { icon: '💡', label: 'Intuitive Diagnostician', desc: 'You recognize patterns quickly and trust your gut.' },
            mixed: { icon: '🔄', label: 'Adaptive Reasoner', desc: 'You flexibly switch between systematic and intuitive approaches.' }
        };

        const style = styleDescriptions[traits.thinkingStyle] || styleDescriptions.mixed;

        return `
            <div class="clinical-mirror bg-gradient-to-br from-violet-100 to-purple-100 
                        dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-violet-600 to-purple-600 p-6 text-white text-center">
                    <div class="text-4xl mb-2">🪞</div>
                    <h3 class="text-xl font-bold">The Mirror</h3>
                    <p class="text-violet-200">Your Clinical Identity</p>
                </div>
                
                <!-- Primary style -->
                <div class="p-6 text-center border-b border-violet-200 dark:border-violet-800">
                    <div class="text-4xl mb-2">${style.icon}</div>
                    <div class="text-xl font-bold text-violet-800 dark:text-violet-200">
                        ${style.label}
                    </div>
                    <p class="text-violet-600 dark:text-violet-400 mt-2">
                        ${style.desc}
                    </p>
                </div>
                
                <!-- Strengths -->
                ${traits.strengthAreas.length > 0 ? `
                    <div class="p-4 border-b border-violet-200 dark:border-violet-800">
                        <h4 class="font-medium text-violet-800 dark:text-violet-200 mb-3">
                            💪 Your Superpowers
                        </h4>
                        <div class="space-y-2">
                            ${traits.strengthAreas.map(s => `
                                <div class="flex items-center gap-2 text-sm text-violet-700 dark:text-violet-300">
                                    <span>${s.icon}</span>
                                    <span>${s.trait}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Blind spots -->
                ${traits.blindSpots.length > 0 ? `
                    <div class="p-4">
                        <h4 class="font-medium text-violet-800 dark:text-violet-200 mb-3">
                            👁️ Growth Opportunities
                        </h4>
                        <div class="space-y-3">
                            ${traits.blindSpots.map(b => `
                                <div class="p-3 bg-white dark:bg-violet-900/30 rounded-lg">
                                    <div class="text-sm font-medium text-violet-800 dark:text-violet-200">
                                        ${b.trait}
                                    </div>
                                    <div class="text-xs text-violet-600 dark:text-violet-400 mt-1">
                                        💡 ${b.advice}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="p-4 bg-violet-200 dark:bg-violet-900/50 text-center">
                    <p class="text-sm text-violet-700 dark:text-violet-300 italic">
                        "Understanding how you think helps you think better."
                    </p>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// EXPORT ALL PART 5 MODULES
// ============================================================================

const ReasonDxFeedbackSystemPart5 = {
    DiagnosticAutopsy,
    ButterflyEffect,
    GrandmotherTest,
    UncertaintyEmbrace,
    NightShiftSimulator,
    PatientFollowUp,
    CognitiveLoadDashboard,
    DifferentialGraveyard,
    MentorsNotebook,
    ClinicalMirror,

    initialize: function() {
        UncertaintyEmbrace.load();
        PatientFollowUp.load();
        MentorsNotebook.load();
        console.log('ReasonDx Feedback System Part 5 initialized');
    }
};

// Browser exports
if (typeof window !== 'undefined') {
    Object.assign(window, ReasonDxFeedbackSystemPart5);
    window.ReasonDxFeedbackSystemPart5 = ReasonDxFeedbackSystemPart5;
}

console.log('✅ ReasonDx Feedback System Part 5 loaded successfully');
console.log('📚 10 additional brilliant innovations ready (Total: 31)');
