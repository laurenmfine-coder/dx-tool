// =====================================================
// DxSuite AI Tutor - Clinical Reasoning Assistant
// =====================================================
// Uses Cloudflare Worker proxy - no student API keys needed
// ReasonDx AI Clinical Reasoning Tutor

const DxAITutor = (function() {
    'use strict';

    // =====================================================
    // CONFIGURATION
    // =====================================================
    
    const CONFIG = {
        // Cloudflare Worker endpoint (same as CoachDx)
        workerUrl: 'https://coachdx-attending.laurenmfine.workers.dev',
        
        // Rate limiting (client-side tracking)
        dailyLimit: 20,
        storageKey: 'dxAITutorUsage',
        
        // UI Configuration
        tutorName: 'DxTutor',
        welcomeMessage: "Hi! I'm your clinical reasoning tutor. I'm here to help you think through problems, not just give you answers. What would you like to explore?",
        
        // Thinking indicators
        thinkingPhrases: [
            "Thinking through this...",
            "Considering the clinical picture...",
            "Analyzing the reasoning...",
            "Working through the pathophysiology..."
        ]
    };

    // =====================================================
    // STATE MANAGEMENT
    // =====================================================
    
    let state = {
        isOpen: false,
        isLoading: false,
        messages: [],
        moduleContext: null,
        container: null
    };

    // =====================================================
    // RATE LIMITING (Client-side tracking)
    // =====================================================
    
    function getUsageData() {
        const stored = localStorage.getItem(CONFIG.storageKey);
        if (!stored) return createFreshUsage();
        
        const data = JSON.parse(stored);
        if (data.date !== new Date().toDateString()) {
            return createFreshUsage();
        }
        return data;
    }
    
    function createFreshUsage() {
        const data = { date: new Date().toDateString(), count: 0 };
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
        return data;
    }
    
    function incrementUsage() {
        const data = getUsageData();
        data.count++;
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
        return data;
    }
    
    function canMakeRequest() {
        const data = getUsageData();
        return data.count < CONFIG.dailyLimit;
    }
    
    function getRemainingRequests() {
        const data = getUsageData();
        return Math.max(0, CONFIG.dailyLimit - data.count);
    }

    // =====================================================
    // API COMMUNICATION (via Cloudflare Worker)
    // =====================================================
    
    async function sendMessage(userMessage) {
        if (!canMakeRequest()) {
            throw new Error(`Daily limit reached (${CONFIG.dailyLimit} messages). Resets at midnight.`);
        }

        // Build conversation history for API
        const conversationHistory = state.messages.map(msg => ({
            role: msg.role,
            content: msg.content
        }));

        try {
            const response = await fetch(CONFIG.workerUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'tutor',  // Routes to tutor handler in worker
                    message: userMessage,
                    conversationHistory: conversationHistory,
                    moduleContext: state.moduleContext
                })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Request failed');
            }

            const data = await response.json();
            incrementUsage();
            
            return data.response;
        } catch (error) {
            if (error.message.includes('Failed to fetch')) {
                throw new Error('Network error. Please check your connection.');
            }
            throw error;
        }
    }

    // =====================================================
    // UI RENDERING
    // =====================================================
    
    function createTutorUI() {
        // Create floating button
        const fab = document.createElement('button');
        fab.id = 'dx-tutor-fab';
        fab.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
                <circle cx="8" cy="10" r="1" fill="currentColor"></circle>
                <circle cx="16" cy="10" r="1" fill="currentColor"></circle>
            </svg>
            <span class="fab-label">AI Tutor</span>
        `;
        fab.addEventListener('click', togglePanel);
        document.body.appendChild(fab);

        // Create chat panel
        const panel = document.createElement('div');
        panel.id = 'dx-tutor-panel';
        panel.innerHTML = `
            <div class="tutor-header">
                <div class="tutor-title">
                    <div class="tutor-avatar">🧠</div>
                    <div class="tutor-info">
                        <h3>${CONFIG.tutorName}</h3>
                        <span class="tutor-status">Clinical Reasoning Tutor</span>
                    </div>
                </div>
                <div class="tutor-actions">
                    <button class="tutor-btn" id="tutor-clear-btn" title="New conversation">🔄</button>
                    <button class="tutor-btn" id="tutor-close-btn" title="Close">✕</button>
                </div>
            </div>
            
            <div class="tutor-messages" id="tutor-messages">
                <!-- Messages will be inserted here -->
            </div>
            
            <div class="tutor-footer">
                <div class="tutor-remaining" id="tutor-remaining"></div>
                <div class="tutor-input-container">
                    <textarea id="tutor-input" placeholder="Ask about this topic..." rows="1"></textarea>
                    <button id="tutor-send-btn" disabled>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
        
        state.container = panel;
        
        // Event listeners
        document.getElementById('tutor-close-btn').addEventListener('click', togglePanel);
        document.getElementById('tutor-clear-btn').addEventListener('click', clearConversation);
        document.getElementById('tutor-send-btn').addEventListener('click', handleSend);
        
        const input = document.getElementById('tutor-input');
        input.addEventListener('input', handleInputChange);
        input.addEventListener('keydown', handleKeyDown);
        
        // Initialize UI state
        updateRemainingDisplay();
    }
    
    function togglePanel() {
        state.isOpen = !state.isOpen;
        const panel = document.getElementById('dx-tutor-panel');
        const fab = document.getElementById('dx-tutor-fab');
        
        if (state.isOpen) {
            panel.classList.add('open');
            fab.classList.add('hidden');
            
            // Show welcome message if first open
            if (state.messages.length === 0) {
                addMessage('assistant', CONFIG.welcomeMessage);
            }
            
            document.getElementById('tutor-input').focus();
        } else {
            panel.classList.remove('open');
            fab.classList.remove('hidden');
        }
    }
    
    function clearConversation() {
        state.messages = [];
        const container = document.getElementById('tutor-messages');
        container.innerHTML = '';
        addMessage('assistant', CONFIG.welcomeMessage);
        showToast('Conversation cleared');
    }
    
    function handleInputChange(e) {
        const input = e.target;
        const sendBtn = document.getElementById('tutor-send-btn');
        
        // Auto-resize
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 120) + 'px';
        
        // Enable/disable send
        sendBtn.disabled = !input.value.trim() || state.isLoading;
    }
    
    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }
    
    async function handleSend() {
        const input = document.getElementById('tutor-input');
        const message = input.value.trim();
        
        if (!message || state.isLoading) return;
        
        // Clear input
        input.value = '';
        input.style.height = 'auto';
        document.getElementById('tutor-send-btn').disabled = true;
        
        // Add user message
        addMessage('user', message);
        state.messages.push({ role: 'user', content: message });
        
        // Show thinking indicator
        state.isLoading = true;
        const thinkingId = showThinking();
        
        try {
            const response = await sendMessage(message);
            
            // Remove thinking indicator
            removeThinking(thinkingId);
            
            // Add assistant message
            addMessage('assistant', response);
            state.messages.push({ role: 'assistant', content: response });
            
            updateRemainingDisplay();
        } catch (error) {
            removeThinking(thinkingId);
            showToast(error.message, 'error');
        } finally {
            state.isLoading = false;
            document.getElementById('tutor-send-btn').disabled = !input.value.trim();
        }
    }
    
    function addMessage(role, content) {
        const container = document.getElementById('tutor-messages');
        const messageEl = document.createElement('div');
        messageEl.className = `tutor-message ${role}`;
        
        // Parse markdown-style formatting
        const formattedContent = formatContent(content);
        
        messageEl.innerHTML = `
            <div class="message-bubble">
                ${formattedContent}
            </div>
        `;
        
        container.appendChild(messageEl);
        container.scrollTop = container.scrollHeight;
    }
    
    function formatContent(content) {
        // Basic markdown parsing
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');
    }
    
    function showThinking() {
        const container = document.getElementById('tutor-messages');
        const id = 'thinking-' + Date.now();
        const thinkingEl = document.createElement('div');
        thinkingEl.id = id;
        thinkingEl.className = 'tutor-message assistant thinking';
        
        const phrase = CONFIG.thinkingPhrases[Math.floor(Math.random() * CONFIG.thinkingPhrases.length)];
        
        thinkingEl.innerHTML = `
            <div class="message-bubble">
                <div class="thinking-indicator">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <span class="thinking-text">${phrase}</span>
            </div>
        `;
        
        container.appendChild(thinkingEl);
        container.scrollTop = container.scrollHeight;
        
        return id;
    }
    
    function removeThinking(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
    
    function updateRemainingDisplay() {
        const remaining = getRemainingRequests();
        const el = document.getElementById('tutor-remaining');
        
        if (remaining <= 5) {
            el.innerHTML = `<span class="warning">${remaining} messages remaining today</span>`;
        } else {
            el.innerHTML = `${remaining} messages remaining today`;
        }
    }
    
    function showToast(message, type = 'info') {
        const existing = document.querySelector('.tutor-toast');
        if (existing) existing.remove();
        
        const toast = document.createElement('div');
        toast.className = `tutor-toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // =====================================================
    // STYLES
    // =====================================================
    
    function injectStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            /* Floating Action Button */
            #dx-tutor-fab {
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: auto;
                height: 48px;
                padding: 0 20px;
                background: linear-gradient(135deg, #1f5f8b 0%, #1a4971 100%);
                border: none;
                border-radius: 24px;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                font-family: inherit;
                font-size: 14px;
                font-weight: 600;
                box-shadow: 0 4px 20px rgba(5, 150, 105, 0.4);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 9998;
            }
            
            #dx-tutor-fab:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 24px rgba(5, 150, 105, 0.5);
            }
            
            #dx-tutor-fab.hidden {
                transform: scale(0);
                opacity: 0;
                pointer-events: none;
            }
            
            .fab-label {
                white-space: nowrap;
            }
            
            /* Chat Panel */
            #dx-tutor-panel {
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 400px;
                max-width: calc(100vw - 48px);
                height: 600px;
                max-height: calc(100vh - 48px);
                background: #ffffff;
                border-radius: 16px;
                box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                z-index: 9999;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                pointer-events: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            #dx-tutor-panel.open {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: auto;
            }
            
            /* Header */
            .tutor-header {
                background: linear-gradient(135deg, #1f5f8b 0%, #1a4971 100%);
                padding: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-shrink: 0;
            }
            
            .tutor-title {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .tutor-avatar {
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
            }
            
            .tutor-info h3 {
                color: white;
                font-size: 16px;
                font-weight: 600;
                margin: 0;
            }
            
            .tutor-status {
                color: rgba(255, 255, 255, 0.8);
                font-size: 12px;
            }
            
            .tutor-actions {
                display: flex;
                gap: 8px;
            }
            
            .tutor-btn {
                width: 32px;
                height: 32px;
                border: none;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s;
                font-size: 16px;
            }
            
            .tutor-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            
            /* Messages */
            .tutor-messages {
                flex: 1;
                overflow-y: auto;
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                background: #f8fafc;
            }
            
            .tutor-message {
                display: flex;
                max-width: 85%;
            }
            
            .tutor-message.user {
                align-self: flex-end;
            }
            
            .tutor-message.assistant {
                align-self: flex-start;
            }
            
            .message-bubble {
                padding: 12px 16px;
                border-radius: 16px;
                font-size: 14px;
                line-height: 1.5;
            }
            
            .tutor-message.user .message-bubble {
                background: #1f5f8b;
                color: white;
                border-bottom-right-radius: 4px;
            }
            
            .tutor-message.assistant .message-bubble {
                background: white;
                color: #1e293b;
                border: 1px solid #e2e8f0;
                border-bottom-left-radius: 4px;
            }
            
            .message-bubble code {
                background: rgba(0, 0, 0, 0.1);
                padding: 2px 6px;
                border-radius: 4px;
                font-family: monospace;
                font-size: 13px;
            }
            
            /* Thinking indicator */
            .tutor-message.thinking .message-bubble {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .thinking-indicator {
                display: flex;
                gap: 4px;
            }
            
            .thinking-indicator .dot {
                width: 8px;
                height: 8px;
                background: #1f5f8b;
                border-radius: 50%;
                animation: bounce 1.4s infinite ease-in-out;
            }
            
            .thinking-indicator .dot:nth-child(1) { animation-delay: -0.32s; }
            .thinking-indicator .dot:nth-child(2) { animation-delay: -0.16s; }
            
            @keyframes bounce {
                0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
                40% { transform: scale(1); opacity: 1; }
            }
            
            .thinking-text {
                color: #64748b;
                font-style: italic;
                font-size: 13px;
            }
            
            /* Footer */
            .tutor-footer {
                padding: 12px 16px;
                background: white;
                border-top: 1px solid #e2e8f0;
                flex-shrink: 0;
            }
            
            .tutor-remaining {
                font-size: 11px;
                color: #64748b;
                margin-bottom: 8px;
                text-align: center;
            }
            
            .tutor-remaining .warning {
                color: #f59e0b;
                font-weight: 600;
            }
            
            .tutor-input-container {
                display: flex;
                gap: 8px;
                align-items: flex-end;
            }
            
            #tutor-input {
                flex: 1;
                padding: 12px 16px;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                font-family: inherit;
                font-size: 14px;
                resize: none;
                outline: none;
                transition: border-color 0.2s;
                max-height: 120px;
            }
            
            #tutor-input:focus {
                border-color: #1f5f8b;
            }
            
            #tutor-send-btn {
                width: 44px;
                height: 44px;
                border: none;
                background: #1f5f8b;
                border-radius: 12px;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                flex-shrink: 0;
            }
            
            #tutor-send-btn:hover:not(:disabled) {
                background: #1a4971;
            }
            
            #tutor-send-btn:disabled {
                background: #e2e8f0;
                cursor: not-allowed;
            }
            
            /* Toast */
            .tutor-toast {
                position: fixed;
                bottom: 100px;
                left: 50%;
                transform: translateX(-50%) translateY(20px);
                padding: 12px 24px;
                background: #1e293b;
                color: white;
                border-radius: 8px;
                font-size: 14px;
                opacity: 0;
                transition: all 0.3s;
                z-index: 10000;
            }
            
            .tutor-toast.show {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            
            .tutor-toast.error {
                background: #dc2626;
            }
            
            /* Mobile responsive */
            @media (max-width: 480px) {
                #dx-tutor-panel {
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                    max-height: 100%;
                    border-radius: 0;
                }
                
                #dx-tutor-fab {
                    bottom: 16px;
                    right: 16px;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    // =====================================================
    // PUBLIC API
    // =====================================================
    
    return {
        /**
         * Initialize the AI Tutor on the page
         * @param {Object} options - Configuration options
         * @param {string} options.moduleTitle - Current module title for context
         * @param {string} options.keyPoints - Key concepts from the module
         * @param {string} options.objectives - Learning objectives
         */
        init: function(options = {}) {
            // Set module context if provided
            if (options.moduleTitle || options.keyPoints || options.objectives) {
                state.moduleContext = {
                    title: options.moduleTitle || document.title,
                    keyPoints: options.keyPoints || null,
                    objectives: options.objectives || null
                };
            }
            
            // Inject styles and create UI
            injectStyles();
            createTutorUI();
');
        },
        
        /**
         * Open the tutor panel programmatically
         */
        open: function() {
            if (!state.isOpen) togglePanel();
        },
        
        /**
         * Close the tutor panel programmatically
         */
        close: function() {
            if (state.isOpen) togglePanel();
        },
        
        /**
         * Set module context (can be updated dynamically)
         * @param {Object} context - Module context object
         */
        setContext: function(context) {
            state.moduleContext = context;
        },
        
        /**
         * Clear conversation history
         */
        clearHistory: function() {
            state.messages = [];
            const container = document.getElementById('tutor-messages');
            if (container) container.innerHTML = '';
        },
        
        /**
         * Get remaining requests for today
         */
        getRemainingRequests: getRemainingRequests
    };
})();

// Auto-initialize if data attributes present
document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.querySelector('[data-dx-tutor]');
    if (trigger) {
        DxAITutor.init({
            moduleTitle: trigger.dataset.moduleTitle,
            keyPoints: trigger.dataset.keyPoints,
            objectives: trigger.dataset.objectives
        });
    }
});
