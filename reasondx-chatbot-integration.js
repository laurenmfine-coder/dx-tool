/**
 * ReasonDx AI Patient Chatbot Integration
 * 
 * This script integrates the AI-powered patient chatbot into the existing
 * ReasonDx history-taking workflow, giving students the choice between:
 * 1. Structured question selection (original method)
 * 2. Free-form AI patient conversation (new chatbot)
 * 
 * Add this script to your index.html AFTER the main ReasonDx scripts.
 */

(function() {
    'use strict';
    
    // ==================== CONFIGURATION ====================
    
    const CHATBOT_CONFIG = {
        // Firebase Function URL for AI responses
        functionUrl: 'https://us-central1-clinical-reasoning-trainer.cloudfunctions.net/patientChat',
        
        // Minimum questions before allowing submission
        minQuestions: 8,
        
        // Enable/disable chatbot feature
        enabled: true,
        
        // Default mode: 'structured' or 'chatbot'
        defaultMode: 'structured'
    };
    
    // ==================== STATE ====================
    
    // Chatbot-specific state (separate from main state)
    let chatbotState = {
        mode: CHATBOT_CONFIG.defaultMode, // 'structured' or 'chatbot'
        conversationHistory: [],
        questionCount: 0,
        categoriesCovered: new Set(),
        isLoading: false,
        caseStartTime: null
    };
    
    // Category detection keywords for OLDCARTS tracking
    const CATEGORY_KEYWORDS = {
        onset: ['when', 'start', 'began', 'first', 'how long', 'onset', 'sudden', 'gradual'],
        location: ['where', 'location', 'which part', 'point to', 'localize', 'site'],
        duration: ['how long', 'duration', 'constant', 'intermittent', 'come and go', 'episode'],
        character: ['describe', 'feel like', 'type of', 'sharp', 'dull', 'burning', 'aching', 'quality', 'character'],
        severity: ['scale', '1 to 10', 'severe', 'mild', 'moderate', 'worst', 'intensity', 'how bad'],
        aggravating: ['worse', 'aggravate', 'trigger', 'provoke', 'exacerbate', 'increase'],
        alleviating: ['better', 'relieve', 'help', 'improve', 'decrease', 'ease'],
        associated: ['other symptoms', 'associated', 'along with', 'also have', 'notice', 'accompan'],
        medications: ['medication', 'medicine', 'drug', 'pill', 'prescription', 'taking', 'otc', 'supplement'],
        pmh: ['medical history', 'past', 'previous', 'diagnosed', 'condition', 'surgery', 'hospital', 'allergies', 'family']
    };
    
    // Case ID mapping (ReasonDx case IDs to chatbot case IDs)
    const CASE_ID_MAP = {
        'epigastric': 'epigastric',
        'nausea-vomiting': 'nausea',
        'rlq-pain': 'rlq',
        'ruq-cholecystitis': 'ruq',
        'gi-bleed': 'gi-bleed',
        // Add more mappings as cases are added
    };
    
    // Limited initial presentations (what the AI patient says first)
    const INITIAL_PRESENTATIONS = {
        'epigastric': "I've got this pain in my stomach. Been bothering me for a few days now.",
        'nausea': "I can't stop throwing up. It started a couple days ago and I feel terrible.",
        'rlq': "I have really bad pain in my stomach. It hurts so much I can barely move.",
        'ruq': "I have this pain on my right side, under my ribs. It's been getting worse.",
        'gi-bleed': "I've been feeling really weak and dizzy. And I noticed something strange when I went to the bathroom."
    };
    
    // ==================== CORE FUNCTIONS ====================
    
    /**
     * Initialize the chatbot integration
     */
    function initChatbotIntegration() {
        if (!CHATBOT_CONFIG.enabled) {
            console.log('[ReasonDx Chatbot] Feature disabled');
            return;
        }
        
        console.log('[ReasonDx Chatbot] Initializing integration...');
        
        // Override the renderHistoryStage function to add mode toggle
        if (typeof window.renderHistoryStage === 'function') {
            const originalRenderHistoryStage = window.renderHistoryStage;
            window.renderHistoryStage = function() {
                return renderHistoryStageWithChatbot(originalRenderHistoryStage);
            };
            console.log('[ReasonDx Chatbot] History stage rendering enhanced');
        }
        
        // Add global functions
        window.toggleHistoryMode = toggleHistoryMode;
        window.sendChatbotMessage = sendChatbotMessage;
        window.resetChatbotState = resetChatbotState;
        window.submitChatbotHistory = submitChatbotHistory;
        
        console.log('[ReasonDx Chatbot] Integration complete');
    }
    
    /**
     * Render the history stage with chatbot option
     */
    function renderHistoryStageWithChatbot(originalRender) {
        const caseData = window.cases?.find(c => c.id === window.state?.caseType);
        const variant = caseData?.variants?.[window.state?.variantKey];
        
        if (!caseData || !variant) {
            return originalRender ? originalRender() : '<div>Error loading case</div>';
        }
        
        // Get the chatbot case ID
        const chatbotCaseId = CASE_ID_MAP[window.state.caseType] || window.state.caseType;
        const initialPresentation = INITIAL_PRESENTATIONS[chatbotCaseId] || "I'm not feeling well. That's why I came in today.";
        
        // Initialize chatbot state for this case if needed
        if (!chatbotState.caseStartTime) {
            chatbotState.caseStartTime = Date.now();
        }
        
        return `
            <div class="fade-in">
                <div class="card p-6 mb-4">
                    <!-- Progress -->
                    <div class="mb-4">
                        <div class="flex justify-between text-sm text-gray-500 mb-1">
                            <span>Stage 2 of 5</span>
                            <span>History Taking</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 40%"></div>
                        </div>
                    </div>
                    
                    ${!window.state.historySubmitted ? `
                        <!-- Mode Toggle -->
                        <div class="mb-6">
                            <div class="flex items-center justify-center gap-2 p-1 bg-gray-100 rounded-xl max-w-md mx-auto">
                                <button onclick="toggleHistoryMode('structured')"
                                        class="flex-1 py-2 px-4 rounded-lg font-medium transition-all ${chatbotState.mode === 'structured' ? 'bg-white shadow text-blue-600' : 'text-gray-600 hover:text-gray-800'}">
                                    📋 Structured Questions
                                </button>
                                <button onclick="toggleHistoryMode('chatbot')"
                                        class="flex-1 py-2 px-4 rounded-lg font-medium transition-all ${chatbotState.mode === 'chatbot' ? 'bg-white shadow text-teal-600' : 'text-gray-600 hover:text-gray-800'}">
                                    🤖 AI Patient Chat
                                </button>
                            </div>
                            <p class="text-center text-xs text-gray-500 mt-2">
                                ${chatbotState.mode === 'structured' 
                                    ? 'Select from predefined questions to gather history' 
                                    : 'Have a natural conversation with an AI-powered patient'}
                            </p>
                        </div>
                        
                        ${chatbotState.mode === 'chatbot' 
                            ? renderChatbotInterface(chatbotCaseId, initialPresentation, variant) 
                            : renderStructuredInterface(variant)}
                    ` : renderHistoryFeedbackSection(variant)}
                </div>
            </div>
        `;
    }
    
    /**
     * Render the AI chatbot interface
     */
    function renderChatbotInterface(caseId, initialPresentation, variant) {
        const canSubmit = chatbotState.questionCount >= CHATBOT_CONFIG.minQuestions;
        const coveragePercent = Math.round((chatbotState.categoriesCovered.size / 10) * 100);
        
        return `
            <!-- Chatbot Interface -->
            <div class="chatbot-container" id="chatbotContainer">
                <!-- Status Bar -->
                <div class="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full ${chatbotState.isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}"></div>
                            <span class="text-sm text-gray-600">AI Patient</span>
                        </div>
                        <div class="text-sm">
                            Questions: <span class="font-semibold ${canSubmit ? 'text-green-600' : 'text-blue-600'}">${chatbotState.questionCount}</span>/${CHATBOT_CONFIG.minQuestions} min
                        </div>
                    </div>
                    <div class="text-sm text-gray-500">
                        Coverage: <span class="font-semibold ${coveragePercent >= 70 ? 'text-green-600' : 'text-amber-600'}">${coveragePercent}%</span>
                    </div>
                </div>
                
                <!-- OLDCARTS Checklist -->
                <div class="mb-4 p-3 bg-teal-50 border border-teal-200 rounded-lg">
                    <h4 class="text-sm font-semibold text-teal-800 mb-2">📋 History Taking Checklist</h4>
                    <div class="grid grid-cols-5 gap-2 text-xs">
                        ${Object.entries(CATEGORY_KEYWORDS).map(([cat, _]) => `
                            <div class="flex items-center gap-1 ${chatbotState.categoriesCovered.has(cat) ? 'text-green-600' : 'text-gray-400'}">
                                <span>${chatbotState.categoriesCovered.has(cat) ? '✓' : '○'}</span>
                                <span class="capitalize">${cat === 'pmh' ? 'PMH' : cat}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Chat Messages -->
                <div class="border-2 border-gray-200 rounded-xl overflow-hidden mb-4">
                    <div class="bg-gradient-to-r from-teal-500 to-blue-500 p-3 text-white">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                                ${variant.patientAvatar || '👤'}
                            </div>
                            <div>
                                <div class="font-semibold">${variant.patientName || 'Patient'}</div>
                                <div class="text-sm opacity-90">${variant.chiefComplaint || 'Chief Complaint'}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="chatMessages" class="h-72 overflow-y-auto p-4 bg-white" style="scroll-behavior: smooth;">
                        <!-- System message -->
                        <div class="flex justify-center mb-3">
                            <div class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                Interview started — take a thorough history
                            </div>
                        </div>
                        
                        <!-- Initial patient statement -->
                        <div class="flex gap-2 mb-3">
                            <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                                ${variant.patientAvatar || '👤'}
                            </div>
                            <div class="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                                <p class="text-gray-800 text-sm">${initialPresentation}</p>
                            </div>
                        </div>
                        
                        <!-- Conversation history -->
                        ${chatbotState.conversationHistory.map((msg, i) => `
                            <div class="flex gap-2 mb-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}">
                                ${msg.role === 'user' ? '' : `
                                    <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                                        ${variant.patientAvatar || '👤'}
                                    </div>
                                `}
                                <div class="${msg.role === 'user' 
                                    ? 'bg-blue-500 text-white rounded-2xl rounded-tr-sm' 
                                    : 'bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm'} px-4 py-2 max-w-xs">
                                    <p class="text-sm">${escapeHtml(msg.content)}</p>
                                </div>
                            </div>
                        `).join('')}
                        
                        <!-- Typing indicator -->
                        ${chatbotState.isLoading ? `
                            <div class="flex gap-2 mb-3">
                                <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                                    ${variant.patientAvatar || '👤'}
                                </div>
                                <div class="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                                    <div class="flex gap-1">
                                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    
                    <!-- Input area -->
                    <div class="border-t border-gray-200 p-3 bg-gray-50">
                        <div class="flex gap-2">
                            <input type="text" 
                                   id="chatbotInput"
                                   class="flex-1 px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                                   placeholder="Ask the patient a question..."
                                   onkeypress="if(event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendChatbotMessage(); }"
                                   ${chatbotState.isLoading ? 'disabled' : ''}>
                            <button onclick="sendChatbotMessage()"
                                    class="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 transition-all"
                                    ${chatbotState.isLoading ? 'disabled' : ''}>
                                Ask
                            </button>
                        </div>
                        <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
                            <span>💡 Ask about onset, location, severity, medications, etc.</span>
                        </div>
                    </div>
                </div>
                
                <!-- Submit Button -->
                <button onclick="submitChatbotHistory()"
                        class="w-full py-3 rounded-xl font-bold text-white transition-all ${canSubmit 
                            ? 'bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 cursor-pointer' 
                            : 'bg-gray-300 cursor-not-allowed'}"
                        ${canSubmit ? '' : 'disabled'}>
                    ${canSubmit 
                        ? 'Submit History & Continue →' 
                        : `Ask ${CHATBOT_CONFIG.minQuestions - chatbotState.questionCount} more questions to continue`}
                </button>
                
                <p class="text-center text-xs text-gray-500 mt-2">
                    You can switch back to structured questions at any time
                </p>
            </div>
        `;
    }
    
    /**
     * Render the original structured question interface
     */
    function renderStructuredInterface(variant) {
        // Call the original rendering logic
        // This section preserves all existing functionality
        
        return `
            <!-- OLDCARTS Narrative -->
            <div class="mb-6">
                <h3 class="font-semibold text-gray-800 mb-2">📋 Initial History (OLDCARTS)</h3>
                <p class="text-sm text-gray-500 mb-3">The patient's standard OLDCARTS history has been gathered for you. Review this information:</p>
                <div class="narrative-box">
                    ${variant.oldcartsNarrative || 'No initial history available.'}
                </div>
            </div>
            
            <!-- What's Missing Checkpoint -->
            ${typeof renderWhatsMissingCheckpoint === 'function' ? renderWhatsMissingCheckpoint() : ''}
            
            <!-- ROS Section -->
            <div class="mb-6">
                <h3 class="font-semibold text-gray-800 mb-2">🔍 Review of Systems (ROS)</h3>
                <p class="text-sm text-gray-600 mb-3">
                    Based on your differential, select which body systems to review.
                </p>
                
                ${typeof ROS_DISCLAIMER !== 'undefined' ? `
                    <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-xs text-amber-800">
                        <strong>💡 Note:</strong> ${ROS_DISCLAIMER}
                    </div>
                ` : ''}
                
                <!-- ROS System Selection -->
                ${typeof ROS_SYSTEMS !== 'undefined' ? `
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                        ${Object.entries(ROS_SYSTEMS).map(([sysId, sys]) => `
                            <button onclick="toggleROSSystem('${sysId}')"
                                    class="p-2 rounded-lg border-2 text-center transition-all ${window.state?.selectedROSSystems?.includes(sysId) ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}">
                                <div class="text-xl">${sys.icon}</div>
                                <div class="text-xs font-medium ${window.state?.selectedROSSystems?.includes(sysId) ? 'text-purple-700' : 'text-gray-600'}">${sys.name}</div>
                                ${window.state?.selectedROSSystems?.includes(sysId) ? '<div class="text-purple-500 text-xs">✓ Selected</div>' : ''}
                            </button>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${typeof renderROSQuestionsSection === 'function' ? renderROSQuestionsSection() : ''}
            </div>
            
            <!-- Free Text Question Input -->
            <div>
                <h3 class="font-semibold text-gray-800 mb-2">🎯 Ask Additional History Questions</h3>
                <p class="text-sm text-gray-600 mb-4">
                    ${typeof getLevelStageInstructions === 'function' ? getLevelStageInstructions('history') : 'Type questions to ask the patient.'}
                </p>
                
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div class="flex gap-2 mb-3">
                        <input type="text" 
                               id="historyQuestionInput"
                               class="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                               placeholder="Type a question to ask the patient..."
                               value="${window.state?.currentHistoryInput || ''}"
                               oninput="updateHistoryInput(this.value)"
                               onkeypress="if(event.key === 'Enter') askHistoryQuestion()">
                        <button onclick="askHistoryQuestion()"
                                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold whitespace-nowrap">
                            Ask 💬
                        </button>
                    </div>
                    <p class="text-xs text-blue-600">
                        💡 Examples: "Any chest pain?" • "Do you take any medications?" • "Does the pain radiate anywhere?"
                    </p>
                </div>
                
                <!-- Questions Asked Display -->
                ${window.state?.askedQuestions?.length > 0 ? `
                    <div class="mb-4">
                        <div class="flex items-center justify-between mb-2">
                            <span class="font-medium text-gray-700">Questions Asked:</span>
                            <span class="text-sm text-blue-600 font-semibold">${window.state.askedQuestions.length} questions</span>
                        </div>
                        <div class="space-y-2 max-h-64 overflow-y-auto">
                            ${window.state.askedQuestions.map(asked => `
                                <div class="p-3 rounded-lg ${asked.matched ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}">
                                    <div class="flex items-start gap-2">
                                        <span class="text-lg">${asked.matched ? '✅' : '💭'}</span>
                                        <div class="flex-1">
                                            <div class="font-medium text-gray-800 text-sm">"${escapeHtml(asked.question)}"</div>
                                            <div class="text-gray-600 text-sm mt-1 italic">"${escapeHtml(asked.answer)}"</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <button onclick="submitHistory()"
                        class="w-full py-3 rounded-lg font-bold text-white ${(window.state?.askedQuestions?.length || 0) >= 3 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}"
                        ${(window.state?.askedQuestions?.length || 0) >= 3 ? '' : 'disabled'}>
                    ${(window.state?.askedQuestions?.length || 0) < 3 ? `Ask at least ${3 - (window.state?.askedQuestions?.length || 0)} more` : 'Submit History Questions →'}
                </button>
            </div>
        `;
    }
    
    /**
     * Render history feedback section
     */
    function renderHistoryFeedbackSection(variant) {
        // Use existing feedback rendering if available
        if (typeof renderHistoryFeedbackInteractive === 'function') {
            return renderHistoryFeedbackInteractive(variant);
        }
        return '<div class="text-center text-gray-500">History submitted successfully.</div>';
    }
    
    // ==================== EVENT HANDLERS ====================
    
    /**
     * Toggle between structured and chatbot modes
     */
    function toggleHistoryMode(mode) {
        chatbotState.mode = mode;
        
        // Re-render the screen
        if (typeof render === 'function') {
            render();
        }
        
        // Focus the appropriate input
        setTimeout(() => {
            if (mode === 'chatbot') {
                document.getElementById('chatbotInput')?.focus();
            } else {
                document.getElementById('historyQuestionInput')?.focus();
            }
        }, 100);
    }
    
    /**
     * Send a message to the AI patient
     */
    async function sendChatbotMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input?.value?.trim();
        
        if (!message || chatbotState.isLoading) return;
        
        // Clear input
        input.value = '';
        
        // Add user message to history
        chatbotState.conversationHistory.push({ role: 'user', content: message });
        chatbotState.questionCount++;
        
        // Detect categories covered
        detectCategories(message);
        
        // Set loading state
        chatbotState.isLoading = true;
        
        // Re-render to show user message and typing indicator
        if (typeof render === 'function') {
            render();
        }
        
        // Scroll to bottom
        scrollChatToBottom();
        
        try {
            // Get the case ID for the API
            const chatbotCaseId = CASE_ID_MAP[window.state?.caseType] || window.state?.caseType || 'epigastric';
            
            // Call the Firebase function
            const response = await fetch(CHATBOT_CONFIG.functionUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    caseId: chatbotCaseId,
                    message: message,
                    conversationHistory: chatbotState.conversationHistory.slice(0, -1) // Exclude the message we just added
                })
            });
            
            const data = await response.json();
            
            if (response.ok && data.response) {
                // Add patient response to history
                chatbotState.conversationHistory.push({ role: 'assistant', content: data.response });
                
                // Also add to the main state for tracking
                if (window.state && Array.isArray(window.state.askedQuestions)) {
                    window.state.askedQuestions.push({
                        question: message,
                        answer: data.response,
                        matched: true,
                        source: 'chatbot'
                    });
                }
            } else {
                // Error response
                chatbotState.conversationHistory.push({ 
                    role: 'assistant', 
                    content: "I'm sorry, I didn't quite understand. Could you ask that differently?" 
                });
            }
        } catch (error) {
            console.error('[ReasonDx Chatbot] Error:', error);
            chatbotState.conversationHistory.push({ 
                role: 'assistant', 
                content: "I'm having trouble responding right now. Please try again." 
            });
        }
        
        // Clear loading state
        chatbotState.isLoading = false;
        
        // Re-render
        if (typeof render === 'function') {
            render();
        }
        
        // Scroll to bottom and focus input
        scrollChatToBottom();
        setTimeout(() => {
            document.getElementById('chatbotInput')?.focus();
        }, 100);
    }
    
    /**
     * Detect which OLDCARTS categories a question covers
     */
    function detectCategories(message) {
        const lower = message.toLowerCase();
        Object.entries(CATEGORY_KEYWORDS).forEach(([category, keywords]) => {
            if (keywords.some(kw => lower.includes(kw))) {
                chatbotState.categoriesCovered.add(category);
            }
        });
    }
    
    /**
     * Scroll chat to bottom
     */
    function scrollChatToBottom() {
        setTimeout(() => {
            const chatMessages = document.getElementById('chatMessages');
            if (chatMessages) {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }, 50);
    }
    
    /**
     * Submit chatbot history and continue
     */
    function submitChatbotHistory() {
        if (chatbotState.questionCount < CHATBOT_CONFIG.minQuestions) {
            return;
        }
        
        // Transfer chatbot questions to main state
        if (window.state) {
            // Mark history as submitted
            window.state.historySubmitted = true;
            
            // Ensure askedQuestions contains chatbot data
            if (!window.state.askedQuestions) {
                window.state.askedQuestions = [];
            }
            
            // Add chatbot conversation to analytics/tracking
            if (typeof rpfsLogInteraction === 'function') {
                rpfsLogInteraction('submit_chatbot_history', 'history', {
                    questionsAsked: chatbotState.questionCount,
                    categoriesCovered: Array.from(chatbotState.categoriesCovered),
                    mode: 'chatbot'
                });
            }
        }
        
        // Call the original submit function if it exists
        if (typeof submitHistory === 'function') {
            submitHistory();
        } else if (typeof goToExam === 'function') {
            goToExam();
        } else if (typeof render === 'function') {
            render();
        }
    }
    
    /**
     * Reset chatbot state (for new cases)
     */
    function resetChatbotState() {
        chatbotState = {
            mode: CHATBOT_CONFIG.defaultMode,
            conversationHistory: [],
            questionCount: 0,
            categoriesCovered: new Set(),
            isLoading: false,
            caseStartTime: null
        };
    }
    
    // ==================== UTILITY FUNCTIONS ====================
    
    /**
     * Escape HTML to prevent XSS
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // ==================== INITIALIZATION ====================
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbotIntegration);
    } else {
        // Small delay to ensure other scripts have loaded
        setTimeout(initChatbotIntegration, 500);
    }
    
    // Also initialize after a longer delay to catch late-loading scripts
    setTimeout(initChatbotIntegration, 1500);
    
    // Reset chatbot state when a new case starts
    const originalStartCase = window.startCase;
    if (typeof originalStartCase === 'function') {
        window.startCase = function(...args) {
            resetChatbotState();
            return originalStartCase.apply(this, args);
        };
    }
    
    // Export for debugging
    window.ReasonDxChatbot = {
        config: CHATBOT_CONFIG,
        state: chatbotState,
        resetState: resetChatbotState,
        toggleMode: toggleHistoryMode
    };
    
    console.log('[ReasonDx Chatbot] Script loaded');
    
})();
