// ============================================================
// REASONDX: ENHANCED PATIENT HEADER
// Version: 1.0.0
// Date: December 27, 2025
// 
// This module enhances the patient header to display:
// - Full patient name (not just initials)
// - Clinical setting (ED, Urgent Care, Primary Care, etc.)
// - Improved demographics display
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // CLINICAL SETTING DEFINITIONS
    // ============================================================

    const CLINICAL_SETTINGS = {
        'emergency_department': {
            display: 'Emergency Department',
            shortDisplay: 'ED',
            icon: '🚨',
            color: 'red',
            bgClass: 'bg-red-600',
            textClass: 'text-red-100'
        },
        'urgent_care': {
            display: 'Urgent Care Visit',
            shortDisplay: 'UC',
            icon: '⚡',
            color: 'orange',
            bgClass: 'bg-orange-500',
            textClass: 'text-orange-100'
        },
        'primary_care': {
            display: 'Primary Care Office',
            shortDisplay: 'PCP',
            icon: '🏥',
            color: 'blue',
            bgClass: 'bg-blue-600',
            textClass: 'text-blue-100'
        },
        'hospital_inpatient': {
            display: 'Hospital Inpatient',
            shortDisplay: 'Inpt',
            icon: '🛏️',
            color: 'purple',
            bgClass: 'bg-purple-600',
            textClass: 'text-purple-100'
        },
        'icu': {
            display: 'Intensive Care Unit',
            shortDisplay: 'ICU',
            icon: '💓',
            color: 'red',
            bgClass: 'bg-red-700',
            textClass: 'text-red-100'
        },
        'ob_clinic': {
            display: 'OB Clinic Visit',
            shortDisplay: 'OB',
            icon: '🤰',
            color: 'pink',
            bgClass: 'bg-pink-500',
            textClass: 'text-pink-100'
        },
        'nursing_facility': {
            display: 'Nursing Facility',
            shortDisplay: 'SNF',
            icon: '🏠',
            color: 'teal',
            bgClass: 'bg-teal-600',
            textClass: 'text-teal-100'
        },
        'telehealth': {
            display: 'Telehealth Visit',
            shortDisplay: 'Tele',
            icon: '💻',
            color: 'indigo',
            bgClass: 'bg-indigo-500',
            textClass: 'text-indigo-100'
        },
        'student_health': {
            display: 'Student Health Center',
            shortDisplay: 'SHC',
            icon: '🎓',
            color: 'green',
            bgClass: 'bg-green-600',
            textClass: 'text-green-100'
        },
        'occupational_health': {
            display: 'Occupational Health',
            shortDisplay: 'Occ',
            icon: '👷',
            color: 'yellow',
            bgClass: 'bg-yellow-600',
            textClass: 'text-yellow-100'
        },
        'preop': {
            display: 'Preoperative Evaluation',
            shortDisplay: 'PreOp',
            icon: '🔪',
            color: 'gray',
            bgClass: 'bg-gray-600',
            textClass: 'text-gray-100'
        },
        'postpartum': {
            display: 'Postpartum Visit',
            shortDisplay: 'PP',
            icon: '👶',
            color: 'pink',
            bgClass: 'bg-pink-400',
            textClass: 'text-pink-100'
        }
    };

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================

    /**
     * Get full patient name from case data
     */
    function getPatientFullName(caseData) {
        if (!caseData?.patient) return 'Unknown Patient';
        
        const p = caseData.patient;
        
        // Try different name field combinations
        if (p.firstName && p.lastName) {
            return `${p.firstName} ${p.lastName}`;
        }
        if (p.name && !p.name.includes(',') && p.name.length > 4) {
            return p.name;
        }
        
        // Fallback: generate from initials if that's all we have
        // This maintains backward compatibility
        if (p.name && p.name.match(/^[A-Z]\.[A-Z]\.?$/)) {
            return p.name; // Keep initials if that's the design
        }
        
        return p.name || 'Unknown Patient';
    }

    /**
     * Get formatted demographics string
     */
    function getFormattedDemographics(caseData) {
        if (!caseData?.patient) return '';
        
        const p = caseData.patient;
        const parts = [];
        
        // Age
        if (p.age) {
            parts.push(`${p.age}-year-old`);
        }
        
        // Gender/Sex
        if (p.gender) {
            parts.push(p.gender.toLowerCase());
        } else if (p.sex) {
            parts.push(p.sex.toLowerCase());
        }
        
        return parts.join(' ');
    }

    /**
     * Get clinical setting info
     */
    function getSettingInfo(caseData) {
        // Check multiple possible locations for setting
        const setting = caseData?.encounter?.setting || 
                       caseData?.setting || 
                       caseData?.clinicalSetting ||
                       null;
        
        if (!setting) return null;
        
        // Handle hospital day notation
        if (setting.startsWith('hospital_day_') || setting.match(/^hospital_inpatient_day_\d+$/)) {
            const dayMatch = setting.match(/(\d+)/);
            const day = dayMatch ? dayMatch[1] : '?';
            return {
                ...CLINICAL_SETTINGS['hospital_inpatient'],
                display: `Hospital Day ${day}`,
                shortDisplay: `HD${day}`
            };
        }
        
        // Handle ICU day notation
        if (setting.startsWith('icu_day_') || setting.match(/^icu_\d+$/)) {
            const dayMatch = setting.match(/(\d+)/);
            const day = dayMatch ? dayMatch[1] : '?';
            return {
                ...CLINICAL_SETTINGS['icu'],
                display: `ICU Day ${day}`,
                shortDisplay: `ICU D${day}`
            };
        }
        
        return CLINICAL_SETTINGS[setting] || {
            display: setting.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            shortDisplay: setting.substring(0, 3).toUpperCase(),
            icon: '📍',
            color: 'gray',
            bgClass: 'bg-gray-600',
            textClass: 'text-gray-100'
        };
    }

    // ============================================================
    // MAIN RENDER FUNCTION
    // ============================================================

    /**
     * Render the enhanced patient header
     */
    window.renderEnhancedPatientHeader = function(caseData, options = {}) {
        if (!caseData) {
            console.warn('renderEnhancedPatientHeader: No case data provided');
            return '';
        }
        
        const patientName = getPatientFullName(caseData);
        const demographics = getFormattedDemographics(caseData);
        const settingInfo = getSettingInfo(caseData);
        const chiefComplaint = caseData.chiefComplaint || caseData.cc || '';
        
        // Check if we're in a What If scenario
        const isWhatIf = window.state?.whatIf?.active;
        const whatIfScenario = window.state?.whatIf?.currentScenario;
        
        // Determine header color based on setting or What If status
        const headerBg = isWhatIf ? 'bg-purple-700' : 
                        (settingInfo?.bgClass || 'bg-gray-800');
        
        return `
            <div class="patient-header ${headerBg} text-white rounded-t-xl overflow-hidden">
                ${isWhatIf ? renderWhatIfBanner(whatIfScenario) : ''}
                
                <div class="px-4 py-3">
                    <!-- Patient Info Row -->
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-3">
                            <!-- Avatar -->
                            <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                                ${getPatientAvatar(caseData)}
                            </div>
                            
                            <!-- Name and Demographics -->
                            <div>
                                <h2 class="text-lg font-bold leading-tight">
                                    ${patientName}
                                </h2>
                                <p class="text-sm opacity-90">
                                    ${demographics}
                                </p>
                            </div>
                        </div>
                        
                        <!-- Action Buttons (Evidence, Exit, etc.) -->
                        <div class="flex items-center gap-2">
                            ${options.showEvidence !== false ? `
                                <button onclick="window.toggleEvidence?.()" 
                                        class="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg 
                                               flex items-center gap-1 text-sm font-medium transition-colors">
                                    <span>📚</span>
                                    <span>Evidence</span>
                                </button>
                            ` : ''}
                            ${options.showNightMode !== false ? `
                                <button onclick="window.toggleDarkMode?.()"
                                        class="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                                    🌙
                                </button>
                            ` : ''}
                            ${options.showExit !== false ? `
                                <button onclick="window.exitCase?.()"
                                        class="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                                    ✕ Exit
                                </button>
                            ` : ''}
                        </div>
                    </div>
                    
                    <!-- Clinical Setting Row -->
                    ${settingInfo ? `
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-lg">${settingInfo.icon}</span>
                            <span class="text-sm font-medium ${settingInfo.textClass || 'opacity-90'}">
                                ${settingInfo.display}
                            </span>
                            ${isWhatIf && window.state?.whatIf?.originalValues?.setting ? `
                                <span class="text-xs opacity-60 line-through ml-2">
                                    (was: ${CLINICAL_SETTINGS[window.state.whatIf.originalValues.setting]?.display || 'Unknown'})
                                </span>
                            ` : ''}
                        </div>
                    ` : ''}
                    
                    <!-- Chief Complaint -->
                    ${chiefComplaint ? `
                        <div class="bg-white/10 rounded-lg px-3 py-2 mt-2">
                            <p class="text-sm italic">
                                "${chiefComplaint}"
                            </p>
                        </div>
                    ` : ''}
                </div>
                
                <!-- Vitals Bar (if available) -->
                ${caseData.vitals ? renderVitalsBar(caseData.vitals, isWhatIf) : ''}
            </div>
        `;
    };

    /**
     * Get patient avatar emoji based on demographics
     */
    function getPatientAvatar(caseData) {
        const p = caseData?.patient;
        if (!p) return '👤';
        
        const age = p.age || 0;
        const gender = (p.gender || p.sex || '').toLowerCase();
        
        // Children
        if (age < 2) return gender === 'male' ? '👶' : '👶';
        if (age < 13) return gender === 'male' ? '👦' : '👧';
        if (age < 20) return gender === 'male' ? '🧑' : '👩';
        
        // Adults
        if (age < 65) {
            if (gender === 'male') return '👨';
            if (gender === 'female') {
                // Check for pregnancy
                if (caseData.isPregnant || caseData.patient?.pregnant) return '🤰';
                return '👩';
            }
            return '🧑';
        }
        
        // Elderly
        return gender === 'male' ? '👴' : '👵';
    }

    /**
     * Render What If scenario banner
     */
    function renderWhatIfBanner(scenario) {
        if (!scenario) return '';
        
        return `
            <div class="bg-purple-900 px-4 py-2 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="text-xl">${scenario.icon || '🔀'}</span>
                    <div>
                        <span class="text-xs font-bold text-purple-300 uppercase tracking-wide">
                            What If Scenario
                        </span>
                        <span class="text-sm text-white ml-2">${scenario.title}</span>
                    </div>
                </div>
                <button onclick="window.showWhatIfExitConfirm?.()"
                        class="text-xs bg-purple-800 hover:bg-purple-700 px-3 py-1 rounded">
                    Return to Main Case
                </button>
            </div>
        `;
    }

    /**
     * Render vitals bar
     */
    function renderVitalsBar(vitals, isWhatIf = false) {
        const originalVitals = window.state?.whatIf?.originalValues?.vitals || {};
        
        const vitalsList = [
            { key: 'bp', label: 'BP', format: v => v },
            { key: 'hr', label: 'HR', format: v => v, unit: '' },
            { key: 'rr', label: 'RR', format: v => v, unit: '' },
            { key: 'temp', label: 'Temp', format: v => `${v}°F` },
            { key: 'spo2', label: 'SpO2', format: v => `${v}%` }
        ];
        
        return `
            <div class="bg-black/20 px-4 py-2 flex items-center justify-between text-sm">
                <span class="font-medium opacity-75">Vital Signs</span>
                <div class="flex items-center gap-4">
                    ${vitalsList.map(v => {
                        const value = vitals[v.key];
                        if (value === undefined) return '';
                        
                        const original = originalVitals[v.key];
                        const isChanged = isWhatIf && original !== undefined && original !== value;
                        
                        return `
                            <div class="text-center ${isChanged ? 'text-yellow-300' : ''}">
                                <div class="text-xs opacity-75">${v.label}</div>
                                <div class="font-bold">
                                    ${v.format(value)}
                                    ${isChanged ? `<span class="text-xs line-through opacity-50 ml-1">${v.format(original)}</span>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    // ============================================================
    // INTEGRATION WITH EXISTING SYSTEM
    // ============================================================

    /**
     * Override or extend the existing patient header render
     */
    window.renderPatientHeader = window.renderEnhancedPatientHeader;

    /**
     * Utility to add setting to existing cases
     */
    window.setCaseSetting = function(setting) {
        if (!window.state?.currentCase) return;
        
        if (!window.state.currentCase.encounter) {
            window.state.currentCase.encounter = {};
        }
        
        window.state.currentCase.encounter.setting = setting;
        
        if (typeof window.render === 'function') {
            window.render();
        }
    };

    /**
     * Get list of available settings (for case authoring)
     */
    window.getAvailableSettings = function() {
        return Object.entries(CLINICAL_SETTINGS).map(([id, data]) => ({
            id: id,
            display: data.display,
            icon: data.icon
        }));
    };

    // ============================================================
    // EXPORTS
    // ============================================================

    window.ReasonDxPatientHeader = {
        render: window.renderEnhancedPatientHeader,
        settings: CLINICAL_SETTINGS,
        getFullName: getPatientFullName,
        getDemographics: getFormattedDemographics,
        getSettingInfo: getSettingInfo
    };

    // ============================================================
    // INITIALIZATION
    // ============================================================

    console.log('✅ ReasonDx Enhanced Patient Header module loaded');
    console.log(`   - ${Object.keys(CLINICAL_SETTINGS).length} clinical settings defined`);
    console.log('   - Use window.renderEnhancedPatientHeader(caseData) to render');
    console.log('   - Use window.setCaseSetting(settingId) to change setting');

})();
