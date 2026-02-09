/**
 * ReasonDx AI Tutor Integration
 * Provides contextual AI tutoring within cases and modules
 */
(function() {
    if (window.DxAITutor) return;

    const TUTOR_CONTAINER_ID = 'dx-ai-tutor-panel';

    function getContainer() {
        let container = document.getElementById(TUTOR_CONTAINER_ID);
        if (!container) {
            // Look for data attribute placement
            container = document.querySelector('[data-module="ai-tutor"]');
        }
        return container;
    }

    window.DxAITutor = {
        /**
         * Initialize the AI tutor panel
         * @param {object} config - { moduleTitle, topicId, context }
         */
        init: function(config) {
            const container = getContainer();
            if (!container) return;

            this.config = config || {};
            this.history = [];
            this.isOpen = false;

            // Create the tutor toggle button
            const toggleBtn = document.createElement('button');
            toggleBtn.id = 'dx-tutor-toggle';
            toggleBtn.innerHTML = '💡 AI Tutor';
            toggleBtn.style.cssText = `
                position: fixed; bottom: 20px; right: 20px; z-index: 9999;
                background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white;
                border: none; padding: 12px 20px; border-radius: 50px;
                font-size: 0.9rem; font-weight: 600; cursor: pointer;
                box-shadow: 0 4px 20px rgba(59,130,246,0.3);
                transition: all 0.3s; display: flex; align-items: center; gap: 8px;
            `;
            toggleBtn.onmouseenter = () => { toggleBtn.style.transform = 'scale(1.05)'; };
            toggleBtn.onmouseleave = () => { toggleBtn.style.transform = 'scale(1)'; };
            toggleBtn.onclick = () => this.toggle();

            document.body.appendChild(toggleBtn);
        },

        /**
         * Toggle the tutor panel open/closed
         */
        toggle: function() {
            this.isOpen = !this.isOpen;
            const container = getContainer();
            if (!container) return;

            if (this.isOpen) {
                container.style.display = 'block';
                container.innerHTML = this.renderPanel();
            } else {
                container.style.display = 'none';
            }
        },

        /**
         * Send a question to the tutor
         * @param {string} question - the student's question
         * @param {object} context - current case/module context
         */
        askQuestion: function(question, context) {
            this.history.push({
                role: 'student',
                content: question,
                timestamp: new Date().toISOString()
            });

            // Generate a helpful prompt based on context
            const response = this.generateResponse(question, context);
            this.history.push({
                role: 'tutor',
                content: response,
                timestamp: new Date().toISOString()
            });

            return response;
        },

        /**
         * Generate a contextual response
         */
        generateResponse: function(question, context) {
            // This is a scaffold — in production this would call an AI API
            const hints = [
                "Think about the underlying mechanism. What's the pathophysiology here?",
                "Consider the key differentiating features between your top diagnoses.",
                "What additional test would help you narrow down the differential?",
                "Review the timeline of symptom onset — acute vs. chronic changes the differential significantly.",
                "Think about what risk factors are present and which conditions they predispose to."
            ];
            return hints[Math.floor(Math.random() * hints.length)];
        },

        /**
         * Render the tutor panel HTML
         */
        renderPanel: function() {
            return `
                <div style="position: fixed; bottom: 80px; right: 20px; width: 380px; max-height: 500px;
                    background: #1a2332; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5); z-index: 9998; overflow: hidden;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                    <div style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);
                        display: flex; justify-content: space-between; align-items: center;">
                        <span style="color: white; font-weight: 600;">💡 AI Tutor</span>
                        <button onclick="DxAITutor.toggle()" style="background: none; border: none;
                            color: rgba(255,255,255,0.5); cursor: pointer; font-size: 1.2rem;">✕</button>
                    </div>
                    <div style="padding: 16px; color: rgba(255,255,255,0.8); font-size: 0.9rem; line-height: 1.5;">
                        <p style="margin: 0 0 12px 0;">I'm here to help guide your clinical reasoning. Ask me about:</p>
                        <ul style="margin: 0; padding-left: 20px; color: rgba(255,255,255,0.6); font-size: 0.85rem;">
                            <li>Why a particular answer is correct or incorrect</li>
                            <li>The underlying pathophysiology</li>
                            <li>How to approach the differential diagnosis</li>
                            <li>Key distinguishing features between conditions</li>
                        </ul>
                    </div>
                </div>
            `;
        },

        /**
         * Provide a hint for the current question
         */
        getHint: function(questionData) {
            if (!questionData) return "Think carefully about the clinical presentation.";
            return `Consider: what mechanism would produce these specific findings?`;
        }
    };

    // Auto-init if data attribute present
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            const el = document.querySelector('[data-module="ai-tutor"]');
            if (el) {
                window.DxAITutor.init({
                    moduleTitle: el.getAttribute('data-module-title') || 'ReasonDx',
                    topicId: el.getAttribute('data-topic-id') || null
                });
            }
        });
    } else {
        const el = document.querySelector('[data-module="ai-tutor"]');
        if (el) {
            window.DxAITutor.init({
                moduleTitle: el.getAttribute('data-module-title') || 'ReasonDx',
                topicId: el.getAttribute('data-topic-id') || null
            });
        }
    }

    console.log('DxAITutor initialized');
})();
