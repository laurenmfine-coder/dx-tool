// ReasonDx Ecosystem Tour - Enhanced Tutorial System
// This file provides a comprehensive 5-tab guided tour of ReasonDx, MechanismDx, and CoachDx
// It overrides the default renderTutorialModal function in training.html

(function() {
    'use strict';
    
    // Wait for the page to load and state to be available
    function initEcosystemTour() {
        if (typeof state === 'undefined' || typeof render === 'undefined') {
            setTimeout(initEcosystemTour, 100);
            return;
        }
        
        // Tutorial Tab Navigation
        window.setTutorialTab = function(tab) {
            state.tutorialTab = tab;
            render();
        };
        
        function getNextTab(current) {
            const tabs = ['overview', 'reasondx', 'mechanism', 'coach', 'workflow'];
            const idx = tabs.indexOf(current);
            return tabs[Math.min(idx + 1, tabs.length - 1)];
        }
        
        function getPrevTab(current) {
            const tabs = ['overview', 'reasondx', 'mechanism', 'coach', 'workflow'];
            const idx = tabs.indexOf(current);
            return tabs[Math.max(idx - 1, 0)];
        }
        
        // Override the renderTutorialModal function
        window.renderTutorialModal = function() {
            if (!state.showTutorial) return '';
            
            const activeTab = state.tutorialTab || 'overview';
            const prevTab = getPrevTab(activeTab);
            const nextTab = getNextTab(activeTab);
            
            return `
                <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onclick="closeTutorial(event)">
                    <div class="bg-white dark:bg-zinc-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800" onclick="event.stopPropagation()">
                        
                        <!-- Header with tabs -->
                        <div class="sticky top-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 z-10">
                            <div class="flex justify-between items-center p-4 pb-0">
                                <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">🎓 Welcome to ReasonDx</h2>
                                <button onclick="closeTutorial()" class="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 text-2xl leading-none p-1">&times;</button>
                            </div>
                            
                            <!-- Tab Navigation -->
                            <div class="flex gap-1 px-4 pt-4 overflow-x-auto">
                                <button onclick="setTutorialTab('overview')" class="px-4 py-2 text-sm font-medium rounded-t-lg transition whitespace-nowrap ${activeTab === 'overview' ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-b-2 border-teal-500' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'}">
                                    🌐 The Ecosystem
                                </button>
                                <button onclick="setTutorialTab('reasondx')" class="px-4 py-2 text-sm font-medium rounded-t-lg transition whitespace-nowrap ${activeTab === 'reasondx' ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-b-2 border-teal-500' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'}">
                                    🎯 ReasonDx
                                </button>
                                <button onclick="setTutorialTab('mechanism')" class="px-4 py-2 text-sm font-medium rounded-t-lg transition whitespace-nowrap ${activeTab === 'mechanism' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-b-2 border-emerald-500' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'}">
                                    ⚙️ MechanismDx
                                </button>
                                <button onclick="setTutorialTab('coach')" class="px-4 py-2 text-sm font-medium rounded-t-lg transition whitespace-nowrap ${activeTab === 'coach' ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-b-2 border-violet-500' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'}">
                                    💬 CoachDx
                                </button>
                                <button onclick="setTutorialTab('workflow')" class="px-4 py-2 text-sm font-medium rounded-t-lg transition whitespace-nowrap ${activeTab === 'workflow' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-b-2 border-blue-500' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'}">
                                    🔄 How It Connects
                                </button>
                            </div>
                        </div>
                        
                        <!-- Tab Content -->
                        <div class="p-6 overflow-y-auto" style="max-height: calc(90vh - 180px);">
                            ${renderTutorialTabContent(activeTab)}
                        </div>
                        
                        <!-- Footer -->
                        <div class="sticky bottom-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 p-4 flex justify-between items-center">
                            <div>
                                ${activeTab !== 'overview' ? `<button onclick="setTutorialTab('${prevTab}')" class="px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 transition">← Previous</button>` : ''}
                            </div>
                            <div class="flex gap-3">
                                ${activeTab !== 'workflow' ? `<button onclick="setTutorialTab('${nextTab}')" class="px-5 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-200 transition">Next →</button>` : ''}
                                <button onclick="closeTutorial()" class="px-5 py-2.5 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition">
                                    ${activeTab === 'workflow' ? "Let's Get Started!" : 'Skip Tour'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };
        
        console.log('[ReasonDx] Ecosystem tour loaded successfully');
    }
    
    function renderTutorialTabContent(tab) {
        switch(tab) {
            case 'overview': return renderTutorialOverview();
            case 'reasondx': return renderTutorialReasonDx();
            case 'mechanism': return renderTutorialMechanism();
            case 'coach': return renderTutorialCoach();
            case 'workflow': return renderTutorialWorkflow();
            default: return renderTutorialOverview();
        }
    }

function renderTutorialOverview() {
    return `
        <div class="space-y-6">
            <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">One Platform. Complete Clinical Reasoning.</h3>
                <p class="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">ReasonDx is an integrated ecosystem of three powerful tools that work together to transform how you learn clinical medicine.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-5 border border-teal-200 dark:border-teal-800">
                    <div class="text-3xl mb-3">🎯</div>
                    <h4 class="font-semibold text-teal-900 dark:text-teal-100 mb-2">ReasonDx</h4>
                    <p class="text-sm text-teal-700 dark:text-teal-300 mb-3">Practice diagnosis through interactive cases with AI patients</p>
                    <div class="text-xs text-teal-600 dark:text-teal-400 space-y-1">
                        <div>✓ 225+ clinical cases</div>
                        <div>✓ AI patient interviews</div>
                        <div>✓ Real-time feedback</div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-5 border border-emerald-200 dark:border-emerald-800">
                    <div class="text-3xl mb-3">⚙️</div>
                    <h4 class="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">MechanismDx</h4>
                    <p class="text-sm text-emerald-700 dark:text-emerald-300 mb-3">Understand the WHY with deep pathophysiology modules</p>
                    <div class="text-xs text-emerald-600 dark:text-emerald-400 space-y-1">
                        <div>✓ Interactive mechanisms</div>
                        <div>✓ Visual pathways</div>
                        <div>✓ Test your understanding</div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-5 border border-violet-200 dark:border-violet-800">
                    <div class="text-3xl mb-3">💬</div>
                    <h4 class="font-semibold text-violet-900 dark:text-violet-100 mb-2">CoachDx</h4>
                    <p class="text-sm text-violet-700 dark:text-violet-300 mb-3">Learn from an AI attending through Socratic dialogue</p>
                    <div class="text-xs text-violet-600 dark:text-violet-400 space-y-1">
                        <div>✓ Guided case discussion</div>
                        <div>✓ Questions, not answers</div>
                        <div>✓ Think like an expert</div>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                    <span>🔗</span> The Magic: Integrated Learning
                </h4>
                <p class="text-sm text-blue-700 dark:text-blue-300 mb-4">Unlike standalone apps, our tools share your progress and reinforce each other:</p>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                    <div class="flex items-start gap-3"><span class="text-blue-500">→</span><div class="text-blue-800 dark:text-blue-200">Struggle with CHF cases? We suggest the Heart Failure module</div></div>
                    <div class="flex items-start gap-3"><span class="text-blue-500">→</span><div class="text-blue-800 dark:text-blue-200">Complete a module? Related cases unlock in ReasonDx</div></div>
                    <div class="flex items-start gap-3"><span class="text-blue-500">→</span><div class="text-blue-800 dark:text-blue-200">Stuck on a case? Ask CoachDx to guide you</div></div>
                    <div class="flex items-start gap-3"><span class="text-blue-500">→</span><div class="text-blue-800 dark:text-blue-200">All progress tracked in one unified dashboard</div></div>
                </div>
            </div>
            
            <div class="grid grid-cols-4 gap-3 mt-6">
                <div class="text-center p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg"><div class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">225+</div><div class="text-xs text-zinc-500">Cases</div></div>
                <div class="text-center p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg"><div class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">20+</div><div class="text-xs text-zinc-500">Modules</div></div>
                <div class="text-center p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg"><div class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">15+</div><div class="text-xs text-zinc-500">Specialties</div></div>
                <div class="text-center p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg"><div class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">∞</div><div class="text-xs text-zinc-500">AI Chats</div></div>
            </div>
        </div>
    `;
}

function renderTutorialReasonDx() {
    return `
        <div class="space-y-6">
            <div class="flex items-center gap-3 mb-6">
                <span class="text-4xl">🎯</span>
                <div><h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">ReasonDx: Clinical Case Training</h3><p class="text-zinc-500 dark:text-zinc-400">Master hypothesis-driven diagnosis through realistic patient encounters</p></div>
            </div>
            
            <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-5">
                <h4 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">📋 The 5-Stage Case Workflow</h4>
                <div class="space-y-3">
                    <div class="flex items-center gap-4 p-3 bg-white dark:bg-zinc-800 rounded-lg"><span class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</span><div><div class="font-medium text-zinc-900 dark:text-zinc-100">Initial Differential</div><div class="text-sm text-zinc-500">Form hypotheses from the chief complaint alone</div></div></div>
                    <div class="flex items-center gap-4 p-3 bg-white dark:bg-zinc-800 rounded-lg"><span class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">2</span><div><div class="font-medium text-zinc-900 dark:text-zinc-100">History Taking</div><div class="text-sm text-zinc-500">Interview an AI patient who responds naturally to your questions</div></div></div>
                    <div class="flex items-center gap-4 p-3 bg-white dark:bg-zinc-800 rounded-lg"><span class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">3</span><div><div class="font-medium text-zinc-900 dark:text-zinc-100">Physical Exam</div><div class="text-sm text-zinc-500">Select targeted exam maneuvers based on your hypotheses</div></div></div>
                    <div class="flex items-center gap-4 p-3 bg-white dark:bg-zinc-800 rounded-lg"><span class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">4</span><div><div class="font-medium text-zinc-900 dark:text-zinc-100">Revised Differential</div><div class="text-sm text-zinc-500">Update your thinking based on what you learned</div></div></div>
                    <div class="flex items-center gap-4 p-3 bg-white dark:bg-zinc-800 rounded-lg"><span class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">5</span><div><div class="font-medium text-zinc-900 dark:text-zinc-100">Workup & Management</div><div class="text-sm text-zinc-500">Order tests, see results, make your final diagnosis</div></div></div>
                </div>
            </div>
            
            <div><h4 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">🎮 Training Modes</h4>
                <div class="grid md:grid-cols-2 gap-3">
                    <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800"><div class="font-medium text-teal-900 dark:text-teal-100">📖 Learning Mode</div><div class="text-sm text-teal-700 dark:text-teal-300">Guided feedback after each step - perfect for beginners</div></div>
                    <div class="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg"><div class="font-medium text-zinc-900 dark:text-zinc-100">🎯 Clinical Mode</div><div class="text-sm text-zinc-500">Realistic ward-style - feedback only at the end</div></div>
                    <div class="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg"><div class="font-medium text-zinc-900 dark:text-zinc-100">⏱️ OSCE Simulation</div><div class="text-sm text-zinc-500">Timed exam conditions with interruptions</div></div>
                    <div class="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg"><div class="font-medium text-zinc-900 dark:text-zinc-100">🏥 Clerkship Mode</div><div class="text-sm text-zinc-500">Cases organized by clinical rotation</div></div>
                </div>
            </div>
            
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
                <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2"><span>🩺</span> AI Patient Interviews</h4>
                <p class="text-sm text-green-700 dark:text-green-300 mb-3">Talk to patients who respond naturally. Ask "When did the pain start?" and get a realistic answer based on their unique presentation.</p>
                <div class="text-xs text-green-600 dark:text-green-400 space-y-1">
                    <div>• Each patient has a unique backstory and personality</div>
                    <div>• Practice building rapport and eliciting information</div>
                    <div>• No scripted questions - ask anything</div>
                </div>
            </div>
        </div>
    `;
}

function renderTutorialMechanism() {
    return `
        <div class="space-y-6">
            <div class="flex items-center gap-3 mb-6">
                <span class="text-4xl">⚙️</span>
                <div><h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">MechanismDx: Deep Pathophysiology</h3><p class="text-zinc-500 dark:text-zinc-400">Understand the WHY behind every diagnosis</p></div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
                    <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">❌ The Problem</h4>
                    <p class="text-sm text-red-700 dark:text-red-300">"I know CHF causes edema, but I can't explain WHY or connect it to other findings."</p>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
                    <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">✓ MechanismDx Solution</h4>
                    <p class="text-sm text-green-700 dark:text-green-300">Walk through the causal chain: ↓CO → RAAS activation → Na+ retention → volume overload → edema</p>
                </div>
            </div>
            
            <div><h4 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">📚 Example Modules</h4>
                <div class="grid md:grid-cols-3 gap-3">
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">❤️</div><div class="font-medium text-sm">Heart Failure</div><div class="text-xs text-zinc-500">Compensation → Decompensation</div></div>
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">🫁</div><div class="font-medium text-sm">Pneumonia</div><div class="text-xs text-zinc-500">Pathogen → Host Response</div></div>
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">🩸</div><div class="font-medium text-sm">Sepsis</div><div class="text-xs text-zinc-500">SIRS → Organ Dysfunction</div></div>
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">⚡</div><div class="font-medium text-sm">Electrolytes</div><div class="text-xs text-zinc-500">K+, Na+, Ca++ pathways</div></div>
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">🧪</div><div class="font-medium text-sm">Acid-Base</div><div class="text-xs text-zinc-500">Compensation mechanisms</div></div>
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">💉</div><div class="font-medium text-sm">Anaphylaxis</div><div class="text-xs text-zinc-500">IgE → Mast Cell → Shock</div></div>
                </div>
            </div>
            
            <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5 border border-emerald-200 dark:border-emerald-800">
                <h4 class="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">🔬 How Each Module Works</h4>
                <div class="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
                    <div class="flex items-start gap-2"><span class="font-bold">1.</span><span><strong>Visual Pathway:</strong> See the mechanism unfold step-by-step with interactive diagrams</span></div>
                    <div class="flex items-start gap-2"><span class="font-bold">2.</span><span><strong>Key Concepts:</strong> Master the essential physiologic principles</span></div>
                    <div class="flex items-start gap-2"><span class="font-bold">3.</span><span><strong>Clinical Connections:</strong> Link mechanisms to symptoms, signs, and test results</span></div>
                    <div class="flex items-start gap-2"><span class="font-bold">4.</span><span><strong>Test Yourself:</strong> Quiz questions to solidify understanding</span></div>
                </div>
            </div>
            
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div class="flex items-start gap-3">
                    <span class="text-xl">🔗</span>
                    <div>
                        <div class="font-medium text-blue-900 dark:text-blue-100">Connected to ReasonDx</div>
                        <div class="text-sm text-blue-700 dark:text-blue-300">When you struggle with certain case types, we'll recommend the relevant mechanism module. Complete modules to unlock deeper understanding for related cases.</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderTutorialCoach() {
    return `
        <div class="space-y-6">
            <div class="flex items-center gap-3 mb-6">
                <span class="text-4xl">💬</span>
                <div><h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">CoachDx: AI Attending Guidance</h3><p class="text-zinc-500 dark:text-zinc-400">Learn clinical reasoning through Socratic dialogue</p></div>
            </div>
            
            <div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-5 border border-violet-200 dark:border-violet-800">
                <h4 class="font-semibold text-violet-900 dark:text-violet-100 mb-3">🎓 The Socratic Method</h4>
                <p class="text-sm text-violet-700 dark:text-violet-300 mb-4">CoachDx doesn't just give you answers—it asks questions that guide you to discover the answer yourself. This is how expert clinicians teach.</p>
                <div class="bg-white dark:bg-zinc-800 rounded-lg p-4 space-y-3 text-sm">
                    <div class="flex gap-3"><span class="text-violet-500 font-medium">You:</span><span class="text-zinc-600 dark:text-zinc-400">"I think this patient has pneumonia."</span></div>
                    <div class="flex gap-3"><span class="text-violet-500 font-medium">Coach:</span><span class="text-zinc-600 dark:text-zinc-400">"What findings led you to that? And what other diagnoses could explain those same findings?"</span></div>
                    <div class="flex gap-3"><span class="text-violet-500 font-medium">You:</span><span class="text-zinc-600 dark:text-zinc-400">"The cough and fever... I guess PE could also cause that."</span></div>
                    <div class="flex gap-3"><span class="text-violet-500 font-medium">Coach:</span><span class="text-zinc-600 dark:text-zinc-400">"Good! How would you distinguish between them? What question could you ask?"</span></div>
                </div>
            </div>
            
            <div><h4 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">📍 When to Use CoachDx</h4>
                <div class="grid md:grid-cols-2 gap-3">
                    <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div class="font-medium text-green-900 dark:text-green-100 mb-1">✓ Great For</div>
                        <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Working through a case you're stuck on</li>
                            <li>• Understanding WHY an answer is correct</li>
                            <li>• Practicing clinical reasoning out loud</li>
                            <li>• Preparing for oral exams</li>
                        </ul>
                    </div>
                    <div class="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                        <div class="font-medium text-zinc-900 dark:text-zinc-100 mb-1">💡 Pro Tips</div>
                        <ul class="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                            <li>• Think out loud—the coach responds to your reasoning</li>
                            <li>• Don't just ask "what's the answer"</li>
                            <li>• Explain your thought process</li>
                            <li>• Ask "why" and "how" questions</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-3">
                <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">🎯</div><div class="font-medium text-sm">Case-Specific</div><div class="text-xs text-zinc-500">Knows the case details</div></div>
                <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">📚</div><div class="font-medium text-sm">Evidence-Based</div><div class="text-xs text-zinc-500">References guidelines</div></div>
                <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center"><div class="text-2xl mb-2">🔄</div><div class="font-medium text-sm">Adaptive</div><div class="text-xs text-zinc-500">Adjusts to your level</div></div>
            </div>
            
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div class="flex items-start gap-3">
                    <span class="text-xl">🔗</span>
                    <div>
                        <div class="font-medium text-blue-900 dark:text-blue-100">Connected to ReasonDx Cases</div>
                        <div class="text-sm text-blue-700 dark:text-blue-300">Access CoachDx directly from any case when you need guidance. The coach knows exactly which case you're working on and can help you think through it.</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderTutorialWorkflow() {
    return `
        <div class="space-y-6">
            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">🔄 How Everything Connects</h3>
                <p class="text-zinc-500 dark:text-zinc-400">The power of an integrated learning ecosystem</p>
            </div>
            
            <!-- The Learning Loop -->
            <div class="bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700">
                <h4 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center">The Learning Loop</h4>
                
                <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-2xl border-4 border-teal-500">🎯</div>
                        <div class="mt-2 font-medium text-sm text-center">Practice Cases</div>
                        <div class="text-xs text-zinc-500">in ReasonDx</div>
                    </div>
                    
                    <div class="text-xl text-zinc-400 rotate-90 md:rotate-0">→</div>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-2xl border-4 border-amber-500">📊</div>
                        <div class="mt-2 font-medium text-sm text-center">Identify Gaps</div>
                        <div class="text-xs text-zinc-500">via Analytics</div>
                    </div>
                    
                    <div class="text-xl text-zinc-400 rotate-90 md:rotate-0">→</div>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-2xl border-4 border-emerald-500">⚙️</div>
                        <div class="mt-2 font-medium text-sm text-center">Learn Why</div>
                        <div class="text-xs text-zinc-500">in MechanismDx</div>
                    </div>
                    
                    <div class="text-xl text-zinc-400 rotate-90 md:rotate-0">→</div>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-2xl border-4 border-violet-500">💬</div>
                        <div class="mt-2 font-medium text-sm text-center">Get Coached</div>
                        <div class="text-xs text-zinc-500">via CoachDx</div>
                    </div>
                </div>
                
                <div class="text-center mt-4">
                    <div class="text-xl text-zinc-400">↻</div>
                    <div class="text-sm text-zinc-500">Then practice more cases with deeper understanding</div>
                </div>
            </div>
            
            <!-- Example Journey -->
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
                <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-3">📖 Example Learning Journey</h4>
                <div class="space-y-3 text-sm">
                    <div class="flex items-start gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                        <span class="text-teal-500 font-bold">1.</span>
                        <div class="text-zinc-700 dark:text-zinc-300">You complete a CHF case in <strong>ReasonDx</strong> but miss the importance of BNP levels</div>
                    </div>
                    <div class="flex items-start gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                        <span class="text-amber-500 font-bold">2.</span>
                        <div class="text-zinc-700 dark:text-zinc-300">Your <strong>Progress Dashboard</strong> shows you struggle with cardiac biomarker interpretation</div>
                    </div>
                    <div class="flex items-start gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                        <span class="text-emerald-500 font-bold">3.</span>
                        <div class="text-zinc-700 dark:text-zinc-300">You study the Heart Failure module in <strong>MechanismDx</strong> and learn why BNP rises with wall stress</div>
                    </div>
                    <div class="flex items-start gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                        <span class="text-violet-500 font-bold">4.</span>
                        <div class="text-zinc-700 dark:text-zinc-300">You ask <strong>CoachDx</strong> to help you understand how to use BNP in clinical decision-making</div>
                    </div>
                    <div class="flex items-start gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                        <span class="text-blue-500 font-bold">5.</span>
                        <div class="text-zinc-700 dark:text-zinc-300">You return to <strong>ReasonDx</strong> and ace the next cardiac case, now understanding the mechanism</div>
                    </div>
                </div>
            </div>
            
            <!-- Quick Access -->
            <div><h4 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">🚀 Quick Access From Anywhere</h4>
                <div class="grid md:grid-cols-2 gap-3">
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <div class="font-medium mb-2">From the top nav:</div>
                        <div class="text-sm text-zinc-500 space-y-1">
                            <div>• <strong>Train</strong> → ReasonDx cases</div>
                            <div>• <strong>Learn</strong> → MechanismDx & CoachDx</div>
                            <div>• <strong>Progress</strong> → Your analytics</div>
                        </div>
                    </div>
                    <div class="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <div class="font-medium mb-2">From any case:</div>
                        <div class="text-sm text-zinc-500 space-y-1">
                            <div>• Click "Need Help?" → CoachDx opens</div>
                            <div>• Click mechanism links → MechanismDx</div>
                            <div>• Case summary → Related resources</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Ready CTA -->
            <div class="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 text-white text-center">
                <h4 class="text-xl font-bold mb-2">Ready to Begin?</h4>
                <p class="text-teal-100 mb-2">Start with a case in Learning Mode and explore from there!</p>
                <div class="text-sm text-teal-200">Tip: The "Case of the Day" is a great first challenge</div>
            </div>
        </div>
    `;
}

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEcosystemTour);
    } else {
        initEcosystemTour();
    }
    
})();
