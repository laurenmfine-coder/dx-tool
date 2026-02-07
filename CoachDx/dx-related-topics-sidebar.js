// ============================================================================
// DXSUITE RELATED TOPICS SIDEBAR
// Cross-platform navigation and discovery component
// Created: January 30, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// This component provides intelligent cross-platform linking between:
// - CoachDx SBAR cases
// - MechanismDx modules  
// - ReasonDx adventures and deep dives
// - PredictLabs exercises
// - Clinical tools and calculators
//
// ============================================================================

const DxRelatedTopicsSidebar = {

    // ========================================================================
    // TOPIC MAPPING DATABASE
    // Maps clinical topics to related content across all platforms
    // ========================================================================
    
    topicMappings: {
        // CARDIOVASCULAR
        'acs': {
            displayName: 'Acute Coronary Syndrome',
            keywords: ['stemi', 'nstemi', 'mi', 'myocardial', 'troponin', 'chest pain', 'cardiac'],
            mechanism: [
                { title: 'ACS Pathophysiology', link: '../mechanism/acs-module.html', description: 'Plaque rupture and thrombosis' },
                { title: 'ECG Patterns', link: '../mechanism/ecg-patterns.html', description: 'STEMI recognition' }
            ],
            reasondx: [
                { title: 'ACS Adventure', link: '../ReasonDx/adventure-cases/acs-expanded-adventure.html', description: 'Work through ACS case' },
                { title: 'Chest Pain Workup', link: '../ReasonDx/adventure-cases/chest-pain-expanded.html', description: 'Differentiate chest pain' }
            ],
            deepDive: [
                { title: 'ACS Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=acs-deep-dive-complete', description: 'Complete ACS algorithms' }
            ],
            coachdx: ['stemi-cath-activation'],
            tools: [
                { title: 'ECG Viewer', link: '../ReasonDx/ecg/ecg-viewer.html', description: 'Practice ECG interpretation' }
            ]
        },
        
        'heart-failure': {
            displayName: 'Heart Failure',
            keywords: ['chf', 'hfref', 'hfpef', 'cardiomyopathy', 'pulmonary edema', 'bnp'],
            mechanism: [
                { title: 'Heart Failure Module', link: '../mechanism/hf-module.html', description: 'HF pathophysiology and types' }
            ],
            reasondx: [
                { title: 'HF Adventure', link: '../ReasonDx/adventure-cases/heart-failure-expanded-adventure.html', description: 'Manage acute decompensation' }
            ],
            deepDive: [
                { title: 'HF Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=heart-failure-deep-dive', description: 'Treatment algorithms' }
            ],
            coachdx: ['flash-pulmonary-edema'],
            tools: []
        },
        
        'afib': {
            displayName: 'Atrial Fibrillation',
            keywords: ['atrial fibrillation', 'rvr', 'anticoagulation', 'rate control', 'rhythm control'],
            mechanism: [
                { title: 'AFib Module', link: '../mechanism/afib-module.html', description: 'AFib mechanisms and management' }
            ],
            reasondx: [
                { title: 'AFib Adventure', link: '../ReasonDx/adventure-cases/afib-expanded-adventure.html', description: 'Rate vs rhythm control decisions' }
            ],
            deepDive: [
                { title: 'AFib Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=afib-deep-dive', description: 'CHA2DS2-VASc and management' }
            ],
            coachdx: [],
            tools: []
        },
        
        'aortic-dissection': {
            displayName: 'Aortic Dissection',
            keywords: ['dissection', 'stanford', 'debakey', 'aorta', 'tearing'],
            mechanism: [
                { title: 'Aortic Dissection Module', link: '../mechanism/aortic-dissection-module.html', description: 'Types and management' }
            ],
            reasondx: [
                { title: 'Dissection Adventure', link: '../ReasonDx/adventure-cases/aortic-dissection-expanded.html', description: 'Recognize and manage' }
            ],
            deepDive: [
                { title: 'Dissection Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=aortic-dissection-deep-dive', description: 'Surgical vs medical management' }
            ],
            coachdx: ['aortic-dissection-type-a'],
            tools: []
        },
        
        'cardiac-tamponade': {
            displayName: 'Cardiac Tamponade',
            keywords: ['tamponade', 'pericardial', 'becks triad', 'pulsus paradoxus'],
            mechanism: [
                { title: 'Tamponade Module', link: '../mechanism/cardiac-tamponade-module.html', description: 'Physiology and recognition' }
            ],
            reasondx: [
                { title: 'Tamponade Adventure', link: '../ReasonDx/adventure-cases/cardiac-tamponade-adventure.html', description: 'Diagnose and manage' }
            ],
            deepDive: [
                { title: 'Tamponade Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=cardiac-tamponade-deep-dive', description: 'Echo findings and treatment' }
            ],
            coachdx: ['cardiac-tamponade-becks'],
            tools: []
        },
        
        // PULMONARY
        'pe': {
            displayName: 'Pulmonary Embolism',
            keywords: ['pe', 'pulmonary embolism', 'dvt', 'vte', 'anticoagulation'],
            mechanism: [
                { title: 'VTE Module', link: '../mechanism/vte-pe-module.html', description: 'VTE pathophysiology' }
            ],
            reasondx: [
                { title: 'PE Adventure', link: '../ReasonDx/adventure-cases/pe-expanded-adventure.html', description: 'PE workup and management' }
            ],
            deepDive: [
                { title: 'PE Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=pe-deep-dive', description: 'Wells, PERC, treatment' }
            ],
            coachdx: ['pe-massive'],
            tools: []
        },
        
        'copd': {
            displayName: 'COPD Exacerbation',
            keywords: ['copd', 'emphysema', 'bronchitis', 'exacerbation', 'niv', 'bipap'],
            mechanism: [
                { title: 'COPD Module', link: '../mechanism/copd-module.html', description: 'COPD pathophysiology' }
            ],
            reasondx: [
                { title: 'COPD Adventure', link: '../ReasonDx/adventure-cases/copd-expanded-adventure.html', description: 'Manage exacerbation' }
            ],
            deepDive: [
                { title: 'COPD Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=copd-exacerbation-deep-dive', description: 'GOLD guidelines' }
            ],
            coachdx: ['copd-niv-failure'],
            tools: []
        },
        
        'asthma': {
            displayName: 'Asthma',
            keywords: ['asthma', 'bronchospasm', 'wheezing', 'status asthmaticus'],
            mechanism: [
                { title: 'Asthma Module', link: '../mechanism/asthma-module.html', description: 'Asthma pathophysiology' }
            ],
            reasondx: [
                { title: 'Asthma Adventure', link: '../ReasonDx/adventure-cases/asthma-exacerbation-expanded.html', description: 'Manage exacerbation' }
            ],
            deepDive: [
                { title: 'Asthma Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=asthma-exacerbation-deep-dive', description: 'GINA guidelines' }
            ],
            coachdx: ['status-asthmaticus'],
            tools: []
        },
        
        'ards': {
            displayName: 'ARDS',
            keywords: ['ards', 'respiratory distress', 'berlin criteria', 'peep'],
            mechanism: [
                { title: 'ARDS Module', link: '../mechanism/ards-module.html', description: 'ARDS pathophysiology' }
            ],
            reasondx: [
                { title: 'ARDS Adventure', link: '../ReasonDx/adventure-cases/ards-adventure.html', description: 'Manage ARDS' }
            ],
            deepDive: [
                { title: 'ARDS Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=ards-deep-dive', description: 'Ventilator management' }
            ],
            coachdx: ['ards-refractory'],
            tools: []
        },
        
        // NEUROLOGY
        'stroke': {
            displayName: 'Stroke',
            keywords: ['stroke', 'cva', 'tpa', 'thrombolysis', 'nihss'],
            mechanism: [
                { title: 'Stroke Module', link: '../mechanism/stroke-module.html', description: 'Stroke pathophysiology' }
            ],
            reasondx: [
                { title: 'Stroke Adventure', link: '../ReasonDx/adventure-cases/stroke-expanded-adventure.html', description: 'Stroke workup' }
            ],
            deepDive: [
                { title: 'Stroke Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=stroke-deep-dive', description: 'tPA criteria and management' }
            ],
            coachdx: ['lvo-stroke'],
            tools: []
        },
        
        'status-epilepticus': {
            displayName: 'Status Epilepticus',
            keywords: ['seizure', 'status epilepticus', 'convulsion', 'benzodiazepine'],
            mechanism: [
                { title: 'Status Module', link: '../mechanism/status-epilepticus-module.html', description: 'Seizure pathophysiology' }
            ],
            reasondx: [
                { title: 'Status Adventure', link: '../ReasonDx/adventure-cases/status-epilepticus-adventure.html', description: 'Manage status' }
            ],
            deepDive: [
                { title: 'Status Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=status-epilepticus-deep-dive', description: 'Treatment algorithm' }
            ],
            coachdx: ['status-epilepticus'],
            tools: []
        },
        
        'meningitis': {
            displayName: 'Meningitis',
            keywords: ['meningitis', 'csf', 'lumbar puncture', 'nuchal rigidity'],
            mechanism: [
                { title: 'Meningitis Module', link: '../mechanism/meningitis-module.html', description: 'CSF analysis' }
            ],
            reasondx: [
                { title: 'Meningitis Adventure', link: '../ReasonDx/adventure-cases/meningitis-expanded-adventure.html', description: 'Meningitis workup' }
            ],
            deepDive: [
                { title: 'Meningitis Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=meningitis-deep-dive', description: 'CSF interpretation' }
            ],
            coachdx: ['bacterial-meningitis'],
            tools: []
        },
        
        // ENDOCRINE
        'dka': {
            displayName: 'DKA',
            keywords: ['dka', 'diabetic ketoacidosis', 'ketones', 'anion gap'],
            mechanism: [
                { title: 'DKA Module', link: '../mechanism/diabetes-dka-module.html', description: 'DKA pathophysiology' }
            ],
            reasondx: [
                { title: 'DKA Adventure', link: '../ReasonDx/adventure-cases/dka-expanded-adventure.html', description: 'Manage DKA' }
            ],
            deepDive: [
                { title: 'DKA Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=dka-deep-dive', description: 'Insulin and fluid management' }
            ],
            coachdx: ['dka-severe', 'hhs-hyperosmolar'],
            tools: []
        },
        
        'thyroid-storm': {
            displayName: 'Thyroid Storm',
            keywords: ['thyroid storm', 'thyrotoxicosis', 'graves', 'hyperthyroidism'],
            mechanism: [
                { title: 'Thyroid Module', link: '../mechanism/thyroid-module.html', description: 'Thyroid physiology' }
            ],
            reasondx: [
                { title: 'Thyroid Storm Adventure', link: '../ReasonDx/adventure-cases/thyroid-storm-expanded.html', description: 'Manage thyroid storm' }
            ],
            deepDive: [
                { title: 'Thyroid Storm Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=thyroid-storm-deep-dive', description: 'Burch-Wartofsky and treatment' }
            ],
            coachdx: ['thyroid-storm'],
            tools: []
        },
        
        'adrenal-crisis': {
            displayName: 'Adrenal Crisis',
            keywords: ['adrenal', 'addison', 'cortisol', 'steroid'],
            mechanism: [
                { title: 'Adrenal Module', link: '../mechanism/adrenal-crisis-module.html', description: 'HPA axis' }
            ],
            reasondx: [
                { title: 'Adrenal Crisis Adventure', link: '../ReasonDx/adventure-cases/adrenal-crisis-adventure.html', description: 'Manage adrenal crisis' }
            ],
            deepDive: [
                { title: 'Adrenal Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=adrenal-crisis-deep-dive', description: 'Steroid dosing' }
            ],
            coachdx: ['adrenal-crisis'],
            tools: []
        },
        
        // NEPHROLOGY
        'aki': {
            displayName: 'Acute Kidney Injury',
            keywords: ['aki', 'acute kidney injury', 'creatinine', 'renal failure'],
            mechanism: [
                { title: 'AKI Module', link: '../mechanism/aki-module.html', description: 'AKI pathophysiology' }
            ],
            reasondx: [
                { title: 'AKI Adventure', link: '../ReasonDx/adventure-cases/aki-expanded-adventure.html', description: 'AKI workup' }
            ],
            deepDive: [
                { title: 'AKI Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=aki-deep-dive', description: 'Pre/intra/post renal' }
            ],
            coachdx: ['aki-workup', 'contrast-nephropathy'],
            tools: []
        },
        
        'hyperkalemia': {
            displayName: 'Hyperkalemia',
            keywords: ['hyperkalemia', 'potassium', 'peaked t waves'],
            mechanism: [
                { title: 'Potassium Module', link: '../mechanism/potassium-module.html', description: 'Potassium physiology' }
            ],
            reasondx: [
                { title: 'Hyperkalemia Adventure', link: '../ReasonDx/adventure-cases/hyperkalemia-expanded.html', description: 'Manage hyperkalemia' }
            ],
            deepDive: [
                { title: 'Hyperkalemia Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=hyperkalemia-deep-dive', description: 'Treatment algorithm' }
            ],
            coachdx: ['hyperkalemia-emergency'],
            tools: []
        },
        
        // HEMATOLOGY/ONCOLOGY
        'dic': {
            displayName: 'DIC',
            keywords: ['dic', 'disseminated intravascular', 'coagulopathy', 'fibrinogen'],
            mechanism: [
                { title: 'DIC Module', link: '../mechanism/dic-module.html', description: 'DIC pathophysiology' }
            ],
            reasondx: [
                { title: 'DIC Adventure', link: '../ReasonDx/adventure-cases/dic-expanded.html', description: 'Manage DIC' }
            ],
            deepDive: [
                { title: 'DIC Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=dic-deep-dive', description: 'Diagnosis and treatment' }
            ],
            coachdx: ['dic-sepsis'],
            tools: []
        },
        
        'ttp': {
            displayName: 'TTP/HUS',
            keywords: ['ttp', 'hus', 'thrombotic thrombocytopenic', 'maha', 'schistocytes'],
            mechanism: [
                { title: 'TTP Module', link: '../mechanism/ttp-module.html', description: 'TTP pathophysiology' }
            ],
            reasondx: [
                { title: 'TTP Adventure', link: '../ReasonDx/adventure-cases/ttp-hus-expanded.html', description: 'TTP workup' }
            ],
            deepDive: [
                { title: 'TTP Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=ttp-hus-deep-dive', description: 'PLASMIC score, plasmapheresis' }
            ],
            coachdx: ['ttp-plasmic'],
            tools: []
        },
        
        // INFECTIOUS DISEASE
        'sepsis': {
            displayName: 'Sepsis',
            keywords: ['sepsis', 'septic shock', 'lactate', 'qsofa'],
            mechanism: [
                { title: 'Sepsis Module', link: '../mechanism/sepsis-shock-module.html', description: 'Sepsis pathophysiology' }
            ],
            reasondx: [
                { title: 'Sepsis Adventure', link: '../ReasonDx/adventure-cases/sepsis-expanded-adventure.html', description: 'Sepsis management' }
            ],
            deepDive: [
                { title: 'Sepsis Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=sepsis-deep-dive', description: 'Hour-1 bundle' }
            ],
            coachdx: ['septic-shock-source'],
            tools: []
        },
        
        // ALLERGY/IMMUNOLOGY
        'anaphylaxis': {
            displayName: 'Anaphylaxis',
            keywords: ['anaphylaxis', 'allergic', 'epinephrine', 'angioedema'],
            mechanism: [
                { title: 'Anaphylaxis Module', link: '../mechanism/anaphylaxis-module.html', description: 'Type I hypersensitivity' }
            ],
            reasondx: [
                { title: 'Anaphylaxis Adventure', link: '../ReasonDx/adventure-cases/anaphylaxis-expanded-adventure.html', description: 'Manage anaphylaxis' }
            ],
            deepDive: [
                { title: 'Anaphylaxis Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=anaphylaxis-deep-dive', description: 'Epinephrine dosing' }
            ],
            coachdx: [],
            tools: []
        }
    },

    // ========================================================================
    // RENDER FUNCTIONS
    // ========================================================================
    
    /**
     * Renders the related topics sidebar for a given case or module
     * @param {string} containerId - ID of the container element
     * @param {object} caseData - The current case data with relatedContent
     * @param {string} currentTopicId - ID of the current topic (optional)
     */
    render(containerId, caseData, currentTopicId = null) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let html = '';
        
        // Case-specific related content (from case definition)
        if (caseData && caseData.relatedContent && caseData.relatedContent.length > 0) {
            html += this.renderCaseRelatedContent(caseData.relatedContent);
        }
        
        // Topic-based related content (from mappings)
        const topicContent = this.findRelatedTopics(caseData, currentTopicId);
        if (topicContent) {
            html += this.renderTopicRelatedContent(topicContent);
        }
        
        // Cross-platform learning path
        html += this.renderLearningPath(caseData);
        
        container.innerHTML = html;
    },
    
    renderCaseRelatedContent(relatedContent) {
        let html = `
            <div class="related-section">
                <h4 class="related-section-title">📚 Related Resources</h4>
        `;
        
        for (const item of relatedContent) {
            const icon = this.getIconForType(item.type);
            const colorClass = this.getColorClassForType(item.type);
            
            html += `
                <a href="${item.link}" class="related-card ${colorClass}">
                    <div class="related-card-stripe ${colorClass}"></div>
                    <div class="related-card-icon ${colorClass}">${icon}</div>
                    <div class="related-card-info">
                        <div class="related-card-title">${item.title}</div>
                        <div class="related-card-meta">${item.reason || ''}</div>
                    </div>
                    <span class="related-card-arrow">→</span>
                </a>
            `;
        }
        
        html += '</div>';
        return html;
    },
    
    renderTopicRelatedContent(topicContent) {
        let html = `
            <div class="related-section">
                <h4 class="related-section-title">🔗 Explore ${topicContent.displayName}</h4>
        `;
        
        // MechanismDx links
        if (topicContent.mechanism && topicContent.mechanism.length > 0) {
            for (const item of topicContent.mechanism) {
                html += this.renderRelatedCard(item, 'mechanism', '⚙️');
            }
        }
        
        // ReasonDx links
        if (topicContent.reasondx && topicContent.reasondx.length > 0) {
            for (const item of topicContent.reasondx) {
                html += this.renderRelatedCard(item, 'reasondx', '🔬');
            }
        }
        
        // Deep Dive links
        if (topicContent.deepDive && topicContent.deepDive.length > 0) {
            for (const item of topicContent.deepDive) {
                html += this.renderRelatedCard(item, 'deepdive', '📊');
            }
        }
        
        html += '</div>';
        return html;
    },
    
    renderRelatedCard(item, type, icon) {
        return `
            <a href="${item.link}" class="related-card ${type}">
                <div class="related-card-stripe ${type}"></div>
                <div class="related-card-icon ${type}">${icon}</div>
                <div class="related-card-info">
                    <div class="related-card-title">${item.title}</div>
                    <div class="related-card-meta">${item.description || ''}</div>
                </div>
                <span class="related-card-arrow">→</span>
            </a>
        `;
    },
    
    renderLearningPath(caseData) {
        return `
            <div class="learning-path-section">
                <h4 class="related-section-title">🎯 Complete Learning Path</h4>
                <div class="learning-path-steps">
                    <div class="path-step">
                        <div class="path-step-number">1</div>
                        <div class="path-step-content">
                            <div class="path-step-title">Learn the Mechanism</div>
                            <div class="path-step-desc">Understand pathophysiology</div>
                        </div>
                    </div>
                    <div class="path-connector"></div>
                    <div class="path-step active">
                        <div class="path-step-number">2</div>
                        <div class="path-step-content">
                            <div class="path-step-title">Practice Communication</div>
                            <div class="path-step-desc">CoachDx SBAR training</div>
                        </div>
                    </div>
                    <div class="path-connector"></div>
                    <div class="path-step">
                        <div class="path-step-number">3</div>
                        <div class="path-step-content">
                            <div class="path-step-title">Deep Dive</div>
                            <div class="path-step-desc">Master the algorithms</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    // ========================================================================
    // HELPER FUNCTIONS
    // ========================================================================
    
    findRelatedTopics(caseData, currentTopicId) {
        if (currentTopicId && this.topicMappings[currentTopicId]) {
            return this.topicMappings[currentTopicId];
        }
        
        // Try to match based on case keywords
        if (caseData) {
            const caseText = JSON.stringify(caseData).toLowerCase();
            for (const [topicId, mapping] of Object.entries(this.topicMappings)) {
                if (mapping.keywords.some(kw => caseText.includes(kw))) {
                    return mapping;
                }
            }
        }
        
        return null;
    },
    
    getIconForType(type) {
        const icons = {
            'mechanism': '⚙️',
            'reasondx': '🔬',
            'deepdive': '📊',
            'parallel': '🔄',
            'predictlabs': '🔮',
            'tool': '🧮'
        };
        return icons[type] || '📄';
    },
    
    getColorClassForType(type) {
        const classes = {
            'mechanism': 'mechanismdx',
            'reasondx': 'reasondx',
            'deepdive': 'reasondx',
            'parallel': 'parallel',
            'predictlabs': 'predictlabs'
        };
        return classes[type] || 'default';
    }
};

// ============================================================================
// CSS STYLES FOR RELATED TOPICS SIDEBAR
// ============================================================================

const relatedTopicsStyles = `
<style>
.related-section {
    margin-bottom: 20px;
}

.related-section-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary, #18181b);
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border, #e4e4e7);
}

.related-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: var(--bg-card, #fff);
    border-radius: 10px;
    border: 1px solid var(--border, #e4e4e7);
    text-decoration: none;
    color: inherit;
    margin-bottom: 8px;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
}

.related-card:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.related-card-stripe {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
}

.related-card-stripe.mechanismdx { background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%); }
.related-card-stripe.reasondx { background: linear-gradient(180deg, #8b5cf6 0%, #7c3aed 100%); }
.related-card-stripe.predictlabs { background: linear-gradient(180deg, #f97316 0%, #ea580c 100%); }
.related-card-stripe.parallel { background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%); }

.related-card-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-left: 8px;
}

.related-card-icon.mechanismdx { background: #dcfce7; }
.related-card-icon.reasondx { background: #ede9fe; }
.related-card-icon.predictlabs { background: #ffedd5; }
.related-card-icon.parallel { background: #fef3c7; }

.related-card-info {
    flex: 1;
}

.related-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary, #18181b);
}

.related-card-meta {
    font-size: 11px;
    color: var(--text-secondary, #71717a);
    margin-top: 2px;
}

.related-card-arrow {
    color: var(--text-muted, #a1a1aa);
    font-size: 14px;
    transition: transform 0.2s;
}

.related-card:hover .related-card-arrow {
    transform: translateX(4px);
    color: var(--text-secondary, #71717a);
}

/* Learning Path Styles */
.learning-path-section {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-radius: 12px;
    padding: 16px;
    margin-top: 16px;
}

.learning-path-steps {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.path-step {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px;
    border-radius: 8px;
    background: var(--bg-card, #fff);
    border: 1px solid var(--border, #e4e4e7);
}

.path-step.active {
    background: #ede9fe;
    border-color: #8b5cf6;
}

.path-step-number {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #e4e4e7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: #71717a;
}

.path-step.active .path-step-number {
    background: #8b5cf6;
    color: #fff;
}

.path-step-content {
    flex: 1;
}

.path-step-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary, #18181b);
}

.path-step-desc {
    font-size: 10px;
    color: var(--text-secondary, #71717a);
}

.path-connector {
    width: 2px;
    height: 12px;
    background: #e4e4e7;
    margin-left: 19px;
}
</style>
`;

// Inject styles
if (typeof document !== 'undefined') {
    document.head.insertAdjacentHTML('beforeend', relatedTopicsStyles);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DxRelatedTopicsSidebar;
}
