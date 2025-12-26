/**
 * ============================================================================
 * REASONDX PHASE 3 FEATURES
 * ============================================================================
 * Version: 1.0 | December 2025
 * 
 * Features:
 * 1. Voice-Based Cases (Conversational OSCE Prep)
 * 2. Case Builder for Students (User-Generated Content)
 * 3. Simulated EMR Interface
 * 4. Peer Tutoring Marketplace
 * 5. Residency Program Dashboard
 * ============================================================================
 */

(function() {
    'use strict';

    // ========== STYLES ==========
    var phase3Styles = document.createElement('style');
    phase3Styles.id = 'reasondx-phase3-styles';
    phase3Styles.textContent = [
        '.voice-container{max-width:600px;margin:0 auto;text-align:center}',
        '.voice-avatar{width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:48px;box-shadow:0 8px 32px rgba(59,130,246,0.3)}',
        '.voice-avatar.listening{animation:voicePulse 1.5s ease-in-out infinite}',
        '@keyframes voicePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}',
        '.voice-transcript{background:#f8fafc;border-radius:16px;padding:20px;margin:20px 0;min-height:100px;text-align:left}',
        '.dark .voice-transcript{background:#1e293b}',
        '.voice-btn{width:64px;height:64px;border-radius:50%;border:none;font-size:24px;cursor:pointer;transition:all 0.2s}',
        '.voice-btn.record{background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff}',
        '.voice-btn.record.active{animation:recordPulse 1s ease-in-out infinite}',
        '@keyframes recordPulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,0.5)}50%{box-shadow:0 0 0 20px rgba(239,68,68,0)}}',
        '.builder-step{display:flex;align-items:center;gap:16px;padding:16px;background:#f8fafc;border-radius:12px;margin-bottom:12px}',
        '.dark .builder-step{background:#1e293b}',
        '.builder-step-number{width:32px;height:32px;border-radius:50%;background:#3b82f6;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}',
        '.builder-form{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:24px}',
        '.dark .builder-form{background:#1e293b;border-color:#374151}',
        '.builder-field{margin-bottom:20px}',
        '.builder-field label{display:block;font-weight:600;margin-bottom:8px;font-size:14px}',
        '.builder-field input,.builder-field textarea,.builder-field select{width:100%;padding:12px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px}',
        '.dark .builder-field input,.dark .builder-field textarea,.dark .builder-field select{background:#0f172a;border-color:#374151;color:#f1f5f9}',
        '.emr-container{display:grid;grid-template-columns:200px 1fr 240px;gap:0;min-height:500px;background:#f1f5f9;border-radius:12px;overflow:hidden}',
        '.dark .emr-container{background:#0f172a}',
        '.emr-sidebar{background:#1e293b;color:#fff;padding:0}',
        '.emr-sidebar-item{display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;border-left:3px solid transparent}',
        '.emr-sidebar-item:hover{background:rgba(255,255,255,0.1)}',
        '.emr-sidebar-item.active{background:rgba(59,130,246,0.2);border-color:#3b82f6}',
        '.emr-main{background:#fff;padding:24px;overflow-y:auto}',
        '.dark .emr-main{background:#1e293b}',
        '.emr-patient-banner{display:flex;align-items:center;gap:16px;padding:12px 16px;background:#fef3c7;border-bottom:1px solid #fde68a}',
        '.emr-section{margin-bottom:24px}',
        '.emr-section-title{font-size:13px;font-weight:600;text-transform:uppercase;color:#64748b;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #e2e8f0}',
        '.emr-vitals-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}',
        '.emr-vital{text-align:center;padding:12px;background:#f8fafc;border-radius:8px}',
        '.dark .emr-vital{background:#0f172a}',
        '.emr-vital-value{font-size:20px;font-weight:700}',
        '.emr-vital-label{font-size:11px;color:#64748b;margin-top:2px}',
        '.emr-orders-panel{background:#fff;border-left:1px solid #e2e8f0;padding:16px}',
        '.dark .emr-orders-panel{background:#1e293b;border-color:#374151}',
        '.emr-order-item{display:flex;align-items:center;gap:8px;padding:10px;background:#f8fafc;border-radius:8px;margin-bottom:8px;font-size:13px}',
        '.dark .emr-order-item{background:#0f172a}',
        '.tutor-card{display:flex;gap:16px;padding:20px;background:#fff;border:1px solid #e2e8f0;border-radius:16px;margin-bottom:16px}',
        '.dark .tutor-card{background:#1e293b;border-color:#374151}',
        '.tutor-avatar{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#8b5cf6,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff}',
        '.tutor-badge{padding:4px 10px;background:#e0e7ff;color:#3730a3;border-radius:12px;font-size:12px;font-weight:500}',
        '.tutor-badge.gold{background:#fef3c7;color:#92400e}',
        '.residency-header{background:linear-gradient(135deg,#1e293b,#0f172a);color:#fff;padding:32px;border-radius:16px;margin-bottom:24px}',
        '.residency-stat-row{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-bottom:24px}',
        '.residency-stat{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;text-align:center}',
        '.dark .residency-stat{background:#1e293b;border-color:#374151}',
        '.residency-stat-value{font-size:32px;font-weight:700}',
        '.residency-table{width:100%;border-collapse:collapse}',
        '.residency-table th{text-align:left;padding:12px 16px;background:#f8fafc;font-size:13px;font-weight:600;color:#64748b}',
        '.dark .residency-table th{background:#0f172a}',
        '.residency-table td{padding:16px;border-bottom:1px solid #e2e8f0}',
        '.applicant-score{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;font-weight:700}',
        '.applicant-score.high{background:#dcfce7;color:#166534}',
        '.applicant-score.medium{background:#fef3c7;color:#92400e}',
        '.applicant-score.low{background:#fee2e2;color:#991b1b}',
        '.clerkship-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}',
        '.clerkship-card{position:relative;padding:24px;border-radius:16px;cursor:pointer;transition:all 0.3s;overflow:hidden;color:#fff}',
        '.clerkship-card:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(0,0,0,0.15)}',
        '.clerkship-im{background:linear-gradient(135deg,#3b82f6,#1d4ed8)}',
        '.clerkship-surgery{background:linear-gradient(135deg,#ef4444,#b91c1c)}',
        '.clerkship-peds{background:linear-gradient(135deg,#10b981,#059669)}',
        '.clerkship-obgyn{background:linear-gradient(135deg,#ec4899,#be185d)}',
        '.clerkship-psych{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}',
        '.clerkship-fm{background:linear-gradient(135deg,#f59e0b,#d97706)}',
        '.clerkship-neuro{background:linear-gradient(135deg,#6366f1,#4338ca)}',
        '.clerkship-em{background:linear-gradient(135deg,#f97316,#ea580c)}',
        '.clerkship-case-item{display:flex;align-items:center;gap:16px;padding:16px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:12px;cursor:pointer}',
        '.dark .clerkship-case-item{background:#1e293b;border-color:#374151}',
        '.clerkship-case-item:hover{border-color:#3b82f6}'
    ].join('');
    
    if (!document.getElementById('reasondx-phase3-styles')) {
        document.head.appendChild(phase3Styles);
    }

    // ========== 1. VOICE-BASED CASES ==========
    window.VoiceCases = {
        recognition: null,
        isListening: false,
        transcript: '',
        
        init: function() {
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                this.recognition = new SpeechRecognition();
                this.recognition.continuous = true;
                this.recognition.interimResults = true;
                
                var self = this;
                this.recognition.onresult = function(event) {
                    var transcript = '';
                    for (var i = event.resultIndex; i < event.results.length; i++) {
                        transcript += event.results[i][0].transcript;
                    }
                    self.transcript = transcript;
                    var el = document.getElementById('voice-transcript-text');
                    if (el) el.textContent = transcript || 'Listening...';
                };
            }
        },
        
        toggleListening: function() {
            if (!this.recognition) {
                alert('Speech recognition not supported. Try Chrome.');
                return;
            }
            
            if (this.isListening) {
                this.recognition.stop();
                this.isListening = false;
                document.getElementById('voice-record-btn').classList.remove('active');
                document.getElementById('voice-record-btn').textContent = '🎤';
                this.analyzePresentation();
            } else {
                this.transcript = '';
                this.recognition.start();
                this.isListening = true;
                document.getElementById('voice-record-btn').classList.add('active');
                document.getElementById('voice-record-btn').textContent = '⏹️';
            }
        },
        
        analyzePresentation: function() {
            if (!this.transcript) return;
            
            var score = 0;
            var elements = ['age', 'chief complaint', 'onset', 'location', 'severity', 'associated'];
            var transcript = this.transcript.toLowerCase();
            
            elements.forEach(function(el) {
                if (transcript.indexOf(el) !== -1 || 
                    (el === 'age' && transcript.match(/\d+\s*(year|yo)/))) {
                    score++;
                }
            });
            
            var percentage = Math.round((score / elements.length) * 100);
            var feedback = document.getElementById('voice-feedback');
            if (feedback) {
                feedback.innerHTML = '<div style="padding:20px;background:' + (percentage >= 70 ? '#dcfce7' : '#fef3c7') + ';border-radius:12px;margin-top:20px">' +
                    '<h3 style="font-size:18px;font-weight:600">' + (percentage >= 70 ? '🌟 Good!' : '📝 Keep Practicing') + '</h3>' +
                    '<div style="font-size:32px;font-weight:700;margin:12px 0">' + percentage + '%</div>' +
                    '<p>Elements covered: ' + score + '/' + elements.length + '</p></div>';
            }
        },
        
        show: function() {
            this.init();
            document.getElementById('app').innerHTML = '<div class="max-w-3xl mx-auto p-6">' +
                '<div class="flex items-center justify-between mb-6">' +
                '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
                '<h1 class="text-2xl font-bold">🎤 Voice Cases</h1><div></div></div>' +
                '<p class="text-center text-zinc-500 mb-8">Practice oral presentations with voice feedback</p>' +
                '<div class="voice-container">' +
                '<div class="voice-avatar">👨‍⚕️</div>' +
                '<div class="voice-transcript">' +
                '<div style="font-size:12px;color:#64748b;margin-bottom:8px">YOUR PRESENTATION</div>' +
                '<div id="voice-transcript-text">Press microphone to begin...</div></div>' +
                '<button id="voice-record-btn" class="voice-btn record" onclick="VoiceCases.toggleListening()">🎤</button>' +
                '<div id="voice-feedback"></div>' +
                '<div style="margin-top:24px;padding:16px;background:#eff6ff;border-radius:12px;text-align:left">' +
                '<h4 style="font-weight:600;margin-bottom:8px">📋 Practice Prompt</h4>' +
                '<p>Present a 58-year-old male with chest pain to your attending.</p></div></div></div>';
        }
    };

    // ========== 2. CASE BUILDER ==========
    window.CaseBuilder = {
        currentStep: 1,
        caseData: {},
        savedCases: JSON.parse(localStorage.getItem('rdx_user_cases') || '[]'),
        
        show: function() {
            var self = this;
            document.getElementById('app').innerHTML = '<div class="max-w-4xl mx-auto p-6">' +
                '<div class="flex items-center justify-between mb-6">' +
                '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
                '<h1 class="text-2xl font-bold">🏗️ Case Builder</h1><div></div></div>' +
                '<p class="text-center text-zinc-500 mb-8">Create cases from real encounters to share with classmates</p>' +
                '<div class="builder-form">' +
                '<div class="builder-field"><label>Chief Complaint</label><input type="text" id="case-cc" placeholder="e.g., Chest pain for 2 hours"></div>' +
                '<div class="builder-field"><label>Patient Demographics</label><input type="text" id="case-demo" placeholder="e.g., 58yo Male"></div>' +
                '<div class="builder-field"><label>History of Present Illness</label><textarea id="case-hpi" placeholder="Describe the HPI..."></textarea></div>' +
                '<div class="builder-field"><label>Key Findings</label><textarea id="case-findings" placeholder="Physical exam, labs, imaging..."></textarea></div>' +
                '<div class="builder-field"><label>Final Diagnosis</label><input type="text" id="case-dx" placeholder="e.g., NSTEMI"></div>' +
                '<div class="builder-field"><label>Teaching Points</label><textarea id="case-teaching" placeholder="What should learners take away?"></textarea></div>' +
                '<button onclick="CaseBuilder.submitCase()" class="btn-primary w-full mt-4">🚀 Submit Case</button></div>' +
                '<h3 class="font-bold mt-8 mb-4">Your Cases (' + this.savedCases.length + ')</h3>' +
                (this.savedCases.length === 0 ? '<p class="text-zinc-500">No cases yet</p>' : 
                this.savedCases.map(function(c) {
                    return '<div class="p-4 border rounded-lg mb-3"><div class="font-medium">' + c.cc + '</div><div class="text-sm text-zinc-500">' + c.demo + ' · ' + c.dx + '</div></div>';
                }).join('')) + '</div>';
        },
        
        submitCase: function() {
            var c = {
                id: Date.now(),
                cc: document.getElementById('case-cc').value,
                demo: document.getElementById('case-demo').value,
                hpi: document.getElementById('case-hpi').value,
                findings: document.getElementById('case-findings').value,
                dx: document.getElementById('case-dx').value,
                teaching: document.getElementById('case-teaching').value
            };
            if (!c.cc || !c.dx) { alert('Please fill required fields'); return; }
            this.savedCases.push(c);
            localStorage.setItem('rdx_user_cases', JSON.stringify(this.savedCases));
            alert('🎉 Case submitted!');
            this.show();
        }
    };

    // ========== 3. EMR INTERFACE ==========
    window.EMRInterface = {
        currentTab: 'chart',
        patient: { name: 'Smith, John', mrn: '12345678', age: '59yo M', allergies: 'Penicillin' },
        
        show: function() {
            var self = this;
            var tabs = [
                { id: 'chart', label: 'Chart', icon: '📋' },
                { id: 'results', label: 'Results', icon: '🔬' },
                { id: 'orders', label: 'Orders', icon: '💊' },
                { id: 'notes', label: 'Notes', icon: '📝' }
            ];
            
            document.getElementById('app').innerHTML = '<div class="max-w-6xl mx-auto p-4">' +
                '<div class="flex items-center justify-between mb-4">' +
                '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
                '<h1 class="text-xl font-bold">🖥️ EMR Simulation</h1><div class="text-sm text-zinc-500">Practice Mode</div></div>' +
                '<div class="emr-patient-banner rounded-t-lg"><div class="flex-1">' +
                '<div class="font-bold">' + this.patient.name + '</div>' +
                '<div class="text-sm">MRN: ' + this.patient.mrn + ' | ' + this.patient.age + '</div></div>' +
                '<div class="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium">⚠️ ' + this.patient.allergies + '</div></div>' +
                '<div class="emr-container">' +
                '<div class="emr-sidebar">' + tabs.map(function(t) {
                    return '<div class="emr-sidebar-item' + (self.currentTab === t.id ? ' active' : '') + '" onclick="EMRInterface.switchTab(\'' + t.id + '\')">' +
                        '<span>' + t.icon + '</span><span>' + t.label + '</span></div>';
                }).join('') + '</div>' +
                '<div class="emr-main">' + this.renderContent() + '</div>' +
                '<div class="emr-orders-panel"><h3 class="font-bold mb-4">Quick Orders</h3>' +
                ['CBC', 'BMP', 'Troponin', 'ECG', 'CXR'].map(function(o) {
                    return '<label class="emr-order-item"><input type="checkbox"><span>' + o + '</span></label>';
                }).join('') +
                '<button class="w-full mt-4 p-3 bg-blue-600 text-white rounded-lg font-medium" onclick="alert(\'Orders submitted!\')">Submit Orders</button></div></div></div>';
        },
        
        switchTab: function(tab) { this.currentTab = tab; this.show(); },
        
        renderContent: function() {
            if (this.currentTab === 'chart') {
                return '<div class="emr-section"><div class="emr-section-title">Vital Signs</div>' +
                    '<div class="emr-vitals-grid">' +
                    '<div class="emr-vital"><div class="emr-vital-value" style="color:#dc2626">158/92</div><div class="emr-vital-label">BP</div></div>' +
                    '<div class="emr-vital"><div class="emr-vital-value">88</div><div class="emr-vital-label">HR</div></div>' +
                    '<div class="emr-vital"><div class="emr-vital-value">18</div><div class="emr-vital-label">RR</div></div>' +
                    '<div class="emr-vital"><div class="emr-vital-value">96%</div><div class="emr-vital-label">SpO2</div></div></div></div>' +
                    '<div class="emr-section"><div class="emr-section-title">Chief Complaint</div><p>Chest pain x 2 hours</p></div>' +
                    '<div class="emr-section"><div class="emr-section-title">HPI</div><p>59yo male with HTN, HLD presents with substernal chest pressure 7/10, radiating to left arm, associated with diaphoresis.</p></div>';
            }
            if (this.currentTab === 'results') {
                return '<div class="emr-section"><div class="emr-section-title">Lab Results</div>' +
                    '<table class="w-full text-sm"><tr class="border-b"><td class="py-2 font-medium">Troponin I</td><td class="py-2 text-red-600 font-bold">0.45 ↑</td><td class="text-zinc-500">(<0.04)</td></tr>' +
                    '<tr class="border-b"><td class="py-2 font-medium">BNP</td><td class="py-2">250</td><td class="text-zinc-500">(<100)</td></tr></table></div>';
            }
            return '<div class="emr-section"><div class="emr-section-title">' + this.currentTab.toUpperCase() + '</div><p class="text-zinc-500">Content for ' + this.currentTab + '</p></div>';
        }
    };

    // ========== 4. PEER TUTORING ==========
    window.PeerTutoring = {
        tutors: [
            { name: 'Sarah M.', year: 'MS4', specialties: ['Cardiology'], rating: 4.9, sessions: 45, avatar: '👩‍⚕️' },
            { name: 'James K.', year: 'MS4', specialties: ['Surgery'], rating: 4.8, sessions: 32, avatar: '👨‍⚕️' },
            { name: 'Emily R.', year: 'MS3', specialties: ['Pediatrics'], rating: 4.7, sessions: 28, avatar: '👩‍⚕️' }
        ],
        
        show: function() {
            document.getElementById('app').innerHTML = '<div class="max-w-4xl mx-auto p-6">' +
                '<div class="flex items-center justify-between mb-6">' +
                '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
                '<h1 class="text-2xl font-bold">🤝 Peer Tutoring</h1>' +
                '<button class="btn-secondary text-sm">Become a Tutor</button></div>' +
                '<h3 class="font-bold mb-4">Available Tutors</h3>' +
                this.tutors.map(function(t) {
                    return '<div class="tutor-card"><div class="tutor-avatar">' + t.avatar + '</div>' +
                        '<div style="flex:1"><div style="font-size:18px;font-weight:600">' + t.name + ' <span style="color:#64748b;font-weight:400">(' + t.year + ')</span></div>' +
                        '<div style="font-size:13px;color:#64748b;margin:4px 0">📚 ' + t.sessions + ' sessions · ⭐ ' + t.rating + '</div>' +
                        '<div style="display:flex;gap:8px">' + t.specialties.map(function(s) { return '<span class="tutor-badge">' + s + '</span>'; }).join('') + '</div></div>' +
                        '<button class="btn-primary" onclick="alert(\'Request sent to ' + t.name + '!\')">Request</button></div>';
                }).join('') + '</div>';
        }
    };

    // ========== 5. RESIDENCY DASHBOARD ==========
    window.ResidencyDashboard = {
        applicants: [
            { name: 'Anderson, M.', school: 'NSU-KPCOM', score: 92, cases: 156, accuracy: 84 },
            { name: 'Chen, L.', school: 'Harvard', score: 89, cases: 142, accuracy: 81 },
            { name: 'Williams, K.', school: 'Johns Hopkins', score: 87, cases: 128, accuracy: 79 },
            { name: 'Patel, R.', school: 'Stanford', score: 85, cases: 134, accuracy: 77 }
        ],
        
        show: function() {
            document.getElementById('app').innerHTML = '<div class="max-w-6xl mx-auto p-6">' +
                '<div class="flex items-center justify-between mb-6">' +
                '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
                '<h1 class="text-2xl font-bold">🏥 Residency Dashboard</h1><div></div></div>' +
                '<div class="residency-header"><div class="text-2xl font-bold">Sample Medical Center</div>' +
                '<div style="opacity:0.8">Internal Medicine Residency</div></div>' +
                '<div class="residency-stat-row">' +
                '<div class="residency-stat"><div class="residency-stat-value">' + this.applicants.length + '</div><div style="font-size:13px;color:#64748b">Applicants</div></div>' +
                '<div class="residency-stat"><div class="residency-stat-value">88</div><div style="font-size:13px;color:#64748b">Avg Score</div></div>' +
                '<div class="residency-stat"><div class="residency-stat-value">140</div><div style="font-size:13px;color:#64748b">Avg Cases</div></div>' +
                '<div class="residency-stat"><div class="residency-stat-value">80%</div><div style="font-size:13px;color:#64748b">Avg Accuracy</div></div>' +
                '<div class="residency-stat"><div class="residency-stat-value">24</div><div style="font-size:13px;color:#64748b">Positions</div></div></div>' +
                '<div class="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden border">' +
                '<table class="residency-table"><thead><tr><th>Applicant</th><th>School</th><th>Score</th><th>Cases</th><th>Accuracy</th></tr></thead><tbody>' +
                this.applicants.map(function(a) {
                    var cls = a.score >= 85 ? 'high' : a.score >= 75 ? 'medium' : 'low';
                    return '<tr><td style="font-weight:600">' + a.name + '</td><td>' + a.school + '</td>' +
                        '<td><div class="applicant-score ' + cls + '">' + a.score + '</div></td>' +
                        '<td>' + a.cases + '</td><td>' + a.accuracy + '%</td></tr>';
                }).join('') + '</tbody></table></div></div>';
        }
    };

    // ========== 6. CLERKSHIP MODE ==========
    window.ClerkshipMode = {
        rotations: [
            { id: 'im', name: 'Internal Medicine', icon: '🫀', color: 'clerkship-im', cases: 10, duration: '8-12 weeks' },
            { id: 'surgery', name: 'Surgery', icon: '🔪', color: 'clerkship-surgery', cases: 8, duration: '8 weeks' },
            { id: 'peds', name: 'Pediatrics', icon: '👶', color: 'clerkship-peds', cases: 8, duration: '6-8 weeks' },
            { id: 'obgyn', name: 'OB/GYN', icon: '🤰', color: 'clerkship-obgyn', cases: 8, duration: '6 weeks' },
            { id: 'psych', name: 'Psychiatry', icon: '🧠', color: 'clerkship-psych', cases: 8, duration: '4-6 weeks' },
            { id: 'fm', name: 'Family Medicine', icon: '👨‍👩‍👧‍👦', color: 'clerkship-fm', cases: 8, duration: '4-6 weeks' },
            { id: 'neuro', name: 'Neurology', icon: '🧬', color: 'clerkship-neuro', cases: 8, duration: '4 weeks' },
            { id: 'em', name: 'Emergency Medicine', icon: '🚨', color: 'clerkship-em', cases: 8, duration: '4 weeks' }
        ],
        progress: JSON.parse(localStorage.getItem('rdx_clerkship_progress') || '{}'),
        
        show: function() {
            var self = this;
            document.getElementById('app').innerHTML = '<div class="max-w-5xl mx-auto p-6">' +
                '<div class="flex items-center justify-between mb-6">' +
                '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
                '<h1 class="text-2xl font-bold">🏥 Clerkship Mode</h1><div></div></div>' +
                '<p class="text-center text-zinc-500 mb-8">Select your rotation for curated case sets</p>' +
                '<div class="clerkship-grid">' +
                this.rotations.map(function(r) {
                    var prog = self.progress[r.id] || 0;
                    return '<div class="clerkship-card ' + r.color + '" onclick="ClerkshipMode.showRotation(\'' + r.id + '\')">' +
                        '<div style="font-size:48px;margin-bottom:12px">' + r.icon + '</div>' +
                        '<div style="font-size:20px;font-weight:700">' + r.name + '</div>' +
                        '<div style="font-size:14px;opacity:0.8;margin-bottom:12px">' + r.duration + '</div>' +
                        '<div style="font-size:13px">📚 ' + r.cases + ' cases · ✅ ' + prog + ' done</div>' +
                        '<div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:rgba(255,255,255,0.3)">' +
                        '<div style="height:100%;width:' + (prog/r.cases*100) + '%;background:rgba(255,255,255,0.8)"></div></div></div>';
                }).join('') + '</div></div>';
        },
        
        showRotation: function(id) {
            var rotation = this.rotations.find(function(r) { return r.id === id; });
            if (!rotation) return;
            
            var cases = [];
            for (var i = 1; i <= rotation.cases; i++) {
                cases.push({ id: i, title: rotation.name + ' Case ' + i, completed: i <= (this.progress[id] || 0) });
            }
            
            document.getElementById('app').innerHTML = '<div class="max-w-4xl mx-auto p-6">' +
                '<div class="flex items-center justify-between mb-6">' +
                '<button onclick="ClerkshipMode.show()" class="text-zinc-500">← Back to Rotations</button>' +
                '<h1 class="text-2xl font-bold">' + rotation.icon + ' ' + rotation.name + '</h1><div></div></div>' +
                cases.map(function(c) {
                    return '<div class="clerkship-case-item" onclick="alert(\'Starting case: ' + c.title + '\')">' +
                        '<div style="width:32px;height:32px;border-radius:50%;background:' + (c.completed ? '#dcfce7' : '#f1f5f9') + ';display:flex;align-items:center;justify-content:center;font-weight:700;color:' + (c.completed ? '#166534' : '#64748b') + '">' + c.id + '</div>' +
                        '<div style="flex:1;font-weight:600">' + c.title + '</div>' +
                        '<span>' + (c.completed ? '✅' : '→') + '</span></div>';
                }).join('') + '</div>';
        }
    };

    // ========== 7. PROGRESS REPORT ==========
    window.ProgressReport = {
        show: function() {
            var data = typeof playerData !== 'undefined' ? playerData : {};
            document.getElementById('app').innerHTML = '<div class="max-w-4xl mx-auto p-6">' +
                '<div class="flex items-center justify-between mb-6">' +
                '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
                '<h1 class="text-2xl font-bold">📊 Progress Report</h1><div></div></div>' +
                '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:32px" class="dark:bg-zinc-800 dark:border-zinc-700">' +
                '<div style="text-align:center;padding-bottom:24px;border-bottom:2px solid #e2e8f0;margin-bottom:24px">' +
                '<div style="font-size:32px;font-weight:700">ReasonDx</div>' +
                '<div style="font-size:20px;margin-top:8px">Clinical Reasoning Progress Report</div>' +
                '<div style="color:#64748b;margin-top:4px">Generated ' + new Date().toLocaleDateString() + '</div></div>' +
                '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px">' +
                '<div style="text-align:center;padding:16px;background:#f8fafc;border-radius:8px"><div style="font-size:28px;font-weight:700">' + (data.casesCompleted || 0) + '</div><div style="font-size:12px;color:#64748b">Cases</div></div>' +
                '<div style="text-align:center;padding:16px;background:#f8fafc;border-radius:8px"><div style="font-size:28px;font-weight:700">' + (data.accuracy || 0) + '%</div><div style="font-size:12px;color:#64748b">Accuracy</div></div>' +
                '<div style="text-align:center;padding:16px;background:#f8fafc;border-radius:8px"><div style="font-size:28px;font-weight:700">' + (data.level || 1) + '</div><div style="font-size:12px;color:#64748b">Level</div></div>' +
                '<div style="text-align:center;padding:16px;background:#f8fafc;border-radius:8px"><div style="font-size:28px;font-weight:700">' + (data.xp || 0) + '</div><div style="font-size:12px;color:#64748b">XP</div></div></div>' +
                '<div style="display:flex;gap:12px;justify-content:center">' +
                '<button class="btn-primary" onclick="alert(\'PDF generation coming soon!\')">📥 Download PDF</button>' +
                '<button class="btn-secondary" onclick="alert(\'Email feature coming soon!\')">📧 Email to Advisor</button></div></div></div>';
        }
    };

    // ========== 8. STUDY CALENDAR ==========
    window.StudyCalendar = {
        events: JSON.parse(localStorage.getItem('rdx_calendar_events') || '[]'),
        
        show: function() {
            var self = this;
            var upcoming = this.events.slice(0, 5);
            
            document.getElementById('app').innerHTML = '<div class="max-w-4xl mx-auto p-6">' +
                '<div class="flex items-center justify-between mb-6">' +
                '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
                '<h1 class="text-2xl font-bold">📅 Study Calendar</h1><div></div></div>' +
                '<div class="grid md:grid-cols-2 gap-6">' +
                '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:20px" class="dark:bg-zinc-800 dark:border-zinc-700">' +
                '<h3 class="font-bold mb-4">📌 Upcoming</h3>' +
                (upcoming.length === 0 ? '<p class="text-zinc-500">No events scheduled</p>' :
                upcoming.map(function(e) {
                    return '<div style="display:flex;gap:12px;padding:12px;background:#f8fafc;border-radius:8px;margin-bottom:8px">' +
                        '<div style="width:8px;height:8px;border-radius:50%;background:#3b82f6;margin-top:6px"></div>' +
                        '<div><div style="font-weight:500">' + e.title + '</div><div style="font-size:12px;color:#64748b">' + e.date + '</div></div></div>';
                }).join('')) +
                '<button onclick="StudyCalendar.addEvent()" style="width:100%;padding:12px;border:2px dashed #e2e8f0;border-radius:8px;background:none;color:#64748b;cursor:pointer;margin-top:12px">+ Add Reminder</button></div>' +
                '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:20px" class="dark:bg-zinc-800 dark:border-zinc-700">' +
                '<h3 class="font-bold mb-4">🗓️ This Month</h3>' +
                '<p class="text-zinc-500 text-sm">Calendar view coming soon...</p></div></div></div>';
        },
        
        addEvent: function() {
            var title = prompt('Event title:');
            var date = prompt('Date (YYYY-MM-DD):');
            if (title && date) {
                this.events.push({ title: title, date: date });
                localStorage.setItem('rdx_calendar_events', JSON.stringify(this.events));
                this.show();
            }
        }
    };

    // ========== MENU ITEMS ==========
    window.renderPhase2MenuItems = function() {
        return '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">🏥 Clinical Rotations</h2>' +
            '<div class="space-y-1">' +
            '<button onclick="ClerkshipMode.show()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🏥</span><div>' +
            '<div class="font-medium">Clerkship Mode</div><div class="text-sm text-zinc-500">Case sets by rotation</div></div></div>' +
            '<span class="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">NEW</span></button></div></section>' +
            '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">📋 Planning & Reports</h2>' +
            '<div class="space-y-1">' +
            '<button onclick="StudyCalendar.show()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">📅</span><div>' +
            '<div class="font-medium">Study Calendar</div><div class="text-sm text-zinc-500">Plan study sessions</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            '<button onclick="ProgressReport.show()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">📊</span><div>' +
            '<div class="font-medium">Progress Report</div><div class="text-sm text-zinc-500">Generate advisor reports</div></div></div>' +
            '<span class="text-zinc-400">→</span></button></div></section>';
    };

    window.renderPhase3MenuItems = function() {
        return '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">🚀 Advanced Features</h2>' +
            '<div class="space-y-1">' +
            '<button onclick="VoiceCases.show()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🎤</span><div>' +
            '<div class="font-medium">Voice Cases</div><div class="text-sm text-zinc-500">Practice oral presentations</div></div></div>' +
            '<span class="px-2 py-0.5 text-xs bg-purple-100 text-purple-800 rounded-full">BETA</span></button>' +
            '<button onclick="EMRInterface.show()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🖥️</span><div>' +
            '<div class="font-medium">EMR Simulation</div><div class="text-sm text-zinc-500">Practice in EHR interface</div></div></div>' +
            '<span class="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">NEW</span></button>' +
            '<button onclick="CaseBuilder.show()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🏗️</span><div>' +
            '<div class="font-medium">Case Builder</div><div class="text-sm text-zinc-500">Create your own cases</div></div></div>' +
            '<span class="text-zinc-400">→</span></button></div></section>' +
            '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">👥 Community & Admin</h2>' +
            '<div class="space-y-1">' +
            '<button onclick="PeerTutoring.show()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🤝</span><div>' +
            '<div class="font-medium">Peer Tutoring</div><div class="text-sm text-zinc-500">Get help from top performers</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            '<button onclick="ResidencyDashboard.show()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left border-l-4 border-purple-500">' +
            '<div class="flex items-center gap-4"><span class="text-lg">📊</span><div>' +
            '<div class="font-medium">Residency Dashboard</div><div class="text-sm text-zinc-500">View applicant data</div></div></div>' +
            '<span class="text-zinc-400">→</span></button></div></section>';
    };

    // Auto-inject menus
    setInterval(function() {
        var p2 = document.getElementById('phase2-menu-placeholder');
        if (p2 && !p2.innerHTML.trim()) p2.innerHTML = window.renderPhase2MenuItems();
        var p3 = document.getElementById('phase3-menu-placeholder');
        if (p3 && !p3.innerHTML.trim()) p3.innerHTML = window.renderPhase3MenuItems();
    }, 500);

    console.log('[ReasonDx Phase 2 & 3] All features loaded');
})();
