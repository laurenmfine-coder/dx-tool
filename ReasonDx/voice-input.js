// =====================================================
// VOICE INPUT MODULE for ReasonDx Ecosystem
// Add speech-to-text to any text input or textarea
// =====================================================

const VoiceInput = {
    recognition: null,
    isRecording: false,
    currentInputId: null,
    
    // Check if browser supports speech recognition
    isSupported() {
        return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    },
    
    // Initialize speech recognition
    init() {
        if (!this.isSupported()) return false;
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
        
        this.recognition.onstart = () => {
            this.isRecording = true;
            this.updateUI(true);
        };
        
        this.recognition.onend = () => {
            this.isRecording = false;
            this.updateUI(false);
        };
        
        this.recognition.onresult = (event) => {
            const input = document.getElementById(this.currentInputId);
            if (!input) return;
            
            let finalTranscript = '';
            let interimTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + ' ';
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            
            if (finalTranscript) {
                // Append to existing text
                input.value += finalTranscript;
                // Trigger input event for any listeners
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
            
            // Update status with interim results
            const status = document.getElementById('voiceStatus');
            if (status && interimTranscript) {
                status.innerHTML = `<span class="voice-dot"></span> ${interimTranscript}`;
            }
        };
        
        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.isRecording = false;
            this.updateUI(false);
            
            const status = document.getElementById('voiceStatus');
            if (status) {
                let errorMsg = 'Error. Try again.';
                if (event.error === 'not-allowed') errorMsg = 'Microphone access denied. Please allow microphone access.';
                else if (event.error === 'no-speech') errorMsg = 'No speech detected. Try again.';
                status.textContent = errorMsg;
                status.style.display = 'block';
                setTimeout(() => { status.style.display = 'none'; }, 3000);
            }
        };
        
        return true;
    },
    
    // Toggle recording on/off
    toggle(inputId) {
        this.currentInputId = inputId;
        
        if (!this.recognition) {
            if (!this.init()) {
                alert('Voice input is not supported in this browser. Please use Chrome, Edge, or Safari.');
                return;
            }
        }
        
        if (this.isRecording) {
            this.recognition.stop();
        } else {
            // Clear any previous interim results
            const status = document.getElementById('voiceStatus');
            if (status) status.innerHTML = '<span class="voice-dot"></span> Listening...';
            this.recognition.start();
        }
    },
    
    // Update UI elements
    updateUI(recording) {
        const btn = document.getElementById('voiceBtn');
        const icon = document.getElementById('voiceIcon');
        const status = document.getElementById('voiceStatus');
        
        if (btn) {
            if (recording) {
                btn.classList.add('voice-recording');
                btn.title = 'Click to stop';
            } else {
                btn.classList.remove('voice-recording');
                btn.title = 'Click to speak';
            }
        }
        
        if (icon) {
            icon.textContent = recording ? '⏹️' : '🎤';
        }
        
        if (status) {
            if (recording) {
                status.innerHTML = '<span class="voice-dot"></span> Listening... speak now';
                status.style.display = 'flex';
            } else {
                status.style.display = 'none';
            }
        }
    },
    
    // Add voice button to an existing input
    // Call this after the input element exists in the DOM
    addToInput(inputId, containerId = null) {
        if (!this.isSupported()) {
            console.log('Voice input not supported in this browser');
            return;
        }
        
        const input = document.getElementById(inputId);
        if (!input) {
            console.error('Input element not found:', inputId);
            return;
        }
        
        // Create wrapper if input isn't already wrapped
        const container = containerId ? document.getElementById(containerId) : input.parentElement;
        
        // Check if voice button already exists
        if (document.getElementById('voiceBtn')) return;
        
        // Create voice button
        const btn = document.createElement('button');
        btn.id = 'voiceBtn';
        btn.type = 'button';
        btn.className = 'voice-btn';
        btn.title = 'Click to speak';
        btn.innerHTML = '<span id="voiceIcon">🎤</span>';
        btn.onclick = (e) => { e.preventDefault(); VoiceInput.toggle(inputId); };
        
        // Create status indicator
        const status = document.createElement('div');
        status.id = 'voiceStatus';
        status.className = 'voice-status';
        status.style.display = 'none';
        
        // Insert button after input
        input.insertAdjacentElement('afterend', btn);
        
        // Insert status after container
        container.insertAdjacentElement('afterend', status);
    },
    
    // Get the CSS styles needed (can be injected or included in stylesheet)
    getStyles() {
        return `
        .voice-btn {
            width: 44px;
            height: 44px;
            min-width: 44px;
            border-radius: 50%;
            border: 2px solid #E5E7EB;
            background: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            transition: all 0.2s;
            margin-left: 8px;
        }
        .voice-btn:hover {
            border-color: #8B5CF6;
            background: #F5F3FF;
        }
        .voice-btn.voice-recording {
            border-color: #EF4444;
            background: #FEF2F2;
            animation: voice-pulse 1.5s infinite;
        }
        @keyframes voice-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .voice-status {
            font-size: 0.8rem;
            color: #6B7280;
            margin-top: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .voice-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #EF4444;
            animation: voice-blink 1s infinite;
        }
        @keyframes voice-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        /* Make input container flex for inline button */
        .voice-input-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .voice-input-wrapper input,
        .voice-input-wrapper textarea {
            flex: 1;
        }
        `;
    },
    
    // Inject styles into page (call once)
    injectStyles() {
        if (document.getElementById('voice-input-styles')) return;
        const style = document.createElement('style');
        style.id = 'voice-input-styles';
        style.textContent = this.getStyles();
        document.head.appendChild(style);
    }
};

// Auto-inject styles when script loads
if (typeof document !== 'undefined') {
    VoiceInput.injectStyles();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VoiceInput;
}
