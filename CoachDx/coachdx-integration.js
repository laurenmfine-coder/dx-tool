// ============================================================================
// COACHDX INTERPROFESSIONAL INTEGRATION
// Add this code to mentor-chat.html to enable multi-discipline support
// Created: January 2026
// ============================================================================
//
// INSTRUCTIONS:
// 1. Add this script to mentor-chat.html BEFORE your main JavaScript
// 2. Add the discipline case files to your CoachDx folder
// 3. Update the case loading section to use loadDisciplineCases()
//
// ============================================================================

// ============================================================================
// COACH PERSONAS BY DISCIPLINE
// ============================================================================

const COACH_PERSONAS = {
    'md-do': {
        name: 'Dr. Amara Osei',
        title: 'Attending Physician',
        avatar: '👩‍⚕️',
        role: 'Your attending on this rotation',
        greeting: "Good morning. I see you've picked up a new patient. Tell me about them.",
        style: 'socratic_challenging',
        phrases: {
            thinking: "Walk me through your reasoning on that.",
            good: "Good clinical thinking. What else?",
            redirect: "Let's think about this differently...",
            probe: "What would change your mind about that diagnosis?",
            summarize: "Before we move on, summarize your assessment."
        }
    },
    'pa': {
        name: 'Dr. Marcus Webb',
        title: 'Supervising Physician',
        avatar: '👨‍⚕️',
        role: 'Your supervising physician',
        greeting: "Hey, let's work through this patient together. What's the story?",
        style: 'collaborative',
        phrases: {
            thinking: "Good start. What's your differential?",
            good: "Solid reasoning. I agree.",
            redirect: "Consider this angle too...",
            probe: "What would you want to discuss before finalizing the plan?",
            summarize: "How would you present this to the patient?"
        }
    },
    'nursing': {
        name: 'Rachel Torres, RN',
        title: 'Charge Nurse',
        avatar: '👩‍⚕️',
        role: 'Your preceptor today',
        greeting: "Hey, I saw your patient has some changes. Let's talk through it before you call the doctor.",
        style: 'supportive_practical',
        phrases: {
            thinking: "Good. What's your assessment?",
            good: "Great catch. That's exactly what we watch for.",
            redirect: "Before you do that, what else should you check?",
            probe: "What would you want to tell the doctor when you call?",
            summarize: "Practice your SBAR with me first."
        }
    },
    'ems': {
        name: 'Captain Mike Rodriguez',
        title: 'Field Supervisor',
        avatar: '🚑',
        role: 'Your FTO today',
        greeting: "Alright, we've got a call coming in. Let's see how you handle it.",
        style: 'direct_practical',
        phrases: {
            thinking: "What's your working diagnosis?",
            good: "Good call. Keep it moving.",
            redirect: "Scene time. What can wait for the truck?",
            probe: "Where are you transporting and why?",
            summarize: "Give me your radio report."
        }
    },
    'rt': {
        name: 'Jennifer Park, RRT',
        title: 'Lead Respiratory Therapist',
        avatar: '🫁',
        role: 'Your clinical preceptor',
        greeting: "We've got a patient I want you to take the lead on. Let's assess together.",
        style: 'collaborative_technical',
        phrases: {
            thinking: "Walk me through the ABG first.",
            good: "Good respiratory thinking.",
            redirect: "Hold on - what does the vent waveform show?",
            probe: "What settings would you recommend and why?",
            summarize: "How would you present this to the physician?"
        }
    },
    'resident': {
        name: 'Dr. Rafael Mendoza',
        title: 'Senior Resident',
        avatar: '👨‍🔬',
        role: 'Your senior on service',
        greeting: "Heard you picked up an interesting case. Walk me through it.",
        style: 'collegial_challenging',
        phrases: {
            thinking: "I see where you're going. Have you considered...",
            good: "Good clinical reasoning. That's how I'd think about it too.",
            redirect: "Let me push back on that for a second...",
            probe: "What's your illness script here?",
            summarize: "How are you going to present this to the attending?"
        }
    },
    'professional': {
        name: 'Clinical Advisor',
        title: 'CE Instructor',
        avatar: '🎓',
        role: 'Your continuing education guide',
        greeting: "Let's review this case and reinforce some key concepts.",
        style: 'educational',
        phrases: {
            thinking: "What's the evidence behind that approach?",
            good: "Exactly. That's current best practice.",
            redirect: "Good thought, but guidelines have changed...",
            probe: "How would you apply this in your practice?",
            summarize: "What are your key takeaways?"
        }
    }
};

// ============================================================================
// DISCIPLINE CASE LOADER
// ============================================================================

/**
 * Loads discipline-specific case files dynamically
 * Call this before initializing the case selector
 */
async function loadDisciplineCases() {
    const role = localStorage.getItem('dxRole') || 'md-do';
    const specialty = localStorage.getItem('dxSpecialty') || null;
    
    // Map roles to case files
    const caseFiles = {
        'md-do': [], // Uses default merged cases only
        'pa': [],    // Uses default merged cases only
        'nursing': ['coachdx-nursing-cases.js'],
        'ems': ['coachdx-ems-cases.js'],
        'rt': ['coachdx-rt-cases.js'],
        'resident': ['coachdx-resident-cases.js', 'coachdx-specialty-cases.js'],
        'professional': ['coachdx-nursing-cases.js', 'coachdx-ems-cases.js', 'coachdx-rt-cases.js', 'coachdx-resident-cases.js']
    };
    
    const filesToLoad = caseFiles[role] || [];
    
    // Load each case file
    for (const file of filesToLoad) {
        try {
            await loadScript(file);
            console.log(`✓ Loaded ${file}`);
        } catch (error) {
            console.warn(`Could not load ${file}:`, error);
        }
    }
    
    console.log(`Case loading complete for role: ${role}`);
    return role;
}

/**
 * Helper to load a script dynamically
 */
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// ============================================================================
// COACH PERSONA MANAGER
// ============================================================================

/**
 * Gets the coach persona for the current role
 */
function getCurrentCoach() {
    const role = localStorage.getItem('dxRole') || 'md-do';
    return COACH_PERSONAS[role] || COACH_PERSONAS['md-do'];
}

/**
 * Updates the UI to show the current coach
 * Call this after page load
 */
function updateCoachUI() {
    const coach = getCurrentCoach();
    
    // Update coach name/title if elements exist
    const coachNameEl = document.getElementById('coachName');
    const coachTitleEl = document.getElementById('coachTitle');
    const coachAvatarEl = document.getElementById('coachAvatar');
    
    if (coachNameEl) coachNameEl.textContent = coach.name;
    if (coachTitleEl) coachTitleEl.textContent = coach.title;
    if (coachAvatarEl) coachAvatarEl.textContent = coach.avatar;
    
    console.log(`Coach set to: ${coach.name} (${coach.title})`);
}

/**
 * Gets a contextual phrase from the coach
 */
function getCoachPhrase(type) {
    const coach = getCurrentCoach();
    return coach.phrases[type] || '';
}

// ============================================================================
// CASE FILTERING BY DISCIPLINE
// ============================================================================

/**
 * Filters cases based on current role and specialty
 */
function getFilteredCases(allCases) {
    const role = localStorage.getItem('dxRole') || 'md-do';
    const specialty = localStorage.getItem('dxSpecialty') || null;
    
    let filtered = {};
    
    Object.keys(allCases).forEach(key => {
        const caseData = allCases[key];
        
        // Skip metadata keys
        if (key.startsWith('_')) return;
        
        // Check discipline match
        const caseDiscipline = caseData.discipline || 'md-do';
        
        // Include case if:
        // 1. It matches the current role
        // 2. It's a core/shared case (no discipline specified)
        // 3. User is 'professional' (sees everything)
        const shouldInclude = 
            caseDiscipline === role ||
            caseDiscipline === 'md-do' ||
            role === 'professional' ||
            (role === 'resident' && caseDiscipline === 'resident');
        
        // For residents, also filter by specialty if set
        if (role === 'resident' && specialty && caseData.specialty) {
            if (caseData.specialty !== specialty) {
                return; // Skip this case
            }
        }
        
        if (shouldInclude) {
            filtered[key] = caseData;
        }
    });
    
    return filtered;
}

/**
 * Gets cases organized by category for the case selector
 */
function getCasesByCategory(allCases) {
    const filtered = getFilteredCases(allCases);
    const categories = {};
    
    Object.values(filtered).forEach(caseData => {
        const category = caseData.category || 'Other';
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(caseData);
    });
    
    return categories;
}

// ============================================================================
// SBAR INTEGRATION
// ============================================================================

/**
 * Checks if current case has SBAR scenario
 */
function hasSBARScenario(caseData) {
    return caseData && caseData.sbarScenario;
}

/**
 * Gets SBAR scenario for current case
 */
function getSBARScenario(caseData) {
    return caseData?.sbarScenario || null;
}

/**
 * Launches SBAR practice for current case
 */
function launchSBARPractice(caseData) {
    if (!caseData?.sbarScenario) {
        console.warn('No SBAR scenario for this case');
        return;
    }
    
    // Store case context for SBAR trainer
    sessionStorage.setItem('sbarCaseContext', JSON.stringify({
        caseId: caseData.id,
        patient: caseData.patient,
        scenario: caseData.sbarScenario
    }));
    
    // Navigate to SBAR trainer
    window.location.href = 'sbar-trainer.html?fromCase=' + caseData.id;
}

// ============================================================================
// SYSTEM PROMPT MODIFIER FOR AI
// ============================================================================

/**
 * Gets the coach-specific system prompt modifier
 * Add this to your existing system prompt for the AI
 */
function getCoachSystemPrompt() {
    const coach = getCurrentCoach();
    
    return `
You are ${coach.name}, ${coach.title}. ${coach.role}.

Your communication style is ${coach.style}. 

When the student gives a good answer, say something like: "${coach.phrases.good}"
When you want them to think deeper, say: "${coach.phrases.thinking}"
When redirecting, say: "${coach.phrases.redirect}"
When probing their reasoning, say: "${coach.phrases.probe}"

Start the conversation with: "${coach.greeting}"

Remember:
- You are speaking AS this coach persona
- Use language appropriate to this discipline
- Reference role-appropriate clinical scenarios
- Encourage the student to think through problems systematically
`;
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize the interprofessional system
 * Call this when mentor-chat.html loads
 */
async function initInterprofessional() {
    console.log('Initializing interprofessional system...');
    
    // Load discipline-specific cases
    const role = await loadDisciplineCases();
    
    // Update coach UI
    updateCoachUI();
    
    // Log initialization
    console.log(`✓ Interprofessional system ready for: ${role}`);
    
    return role;
}

// ============================================================================
// USAGE INSTRUCTIONS
// ============================================================================

/*
STEP 1: Add this file to your CoachDx folder
- Save as: coachdx-integration.js

STEP 2: Add script tags to mentor-chat.html (in order):

<script src="coachdx-integration.js"></script>
<script src="coachdx-cases-merged.js"></script>
<!-- Discipline cases loaded dynamically -->

STEP 3: Modify your initialization code in mentor-chat.html:

// OLD:
// const CASES = {...};
// initializeApp();

// NEW:
initInterprofessional().then(() => {
    // Now COACHDX_CASES includes all loaded discipline cases
    const allCases = window.COACHDX_CASES || CASES;
    const filteredCases = getFilteredCases(allCases);
    initializeApp(filteredCases);
});

STEP 4: Update your AI system prompt:

// Add to your system prompt:
const systemPrompt = `${existingPrompt}

${getCoachSystemPrompt()}
`;

STEP 5: Add SBAR button to case view (optional):

if (hasSBARScenario(currentCase)) {
    // Show "Practice SBAR" button
    sbarButton.style.display = 'block';
    sbarButton.onclick = () => launchSBARPractice(currentCase);
}

*/

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        COACH_PERSONAS,
        loadDisciplineCases,
        getCurrentCoach,
        updateCoachUI,
        getCoachPhrase,
        getFilteredCases,
        getCasesByCategory,
        hasSBARScenario,
        getSBARScenario,
        launchSBARPractice,
        getCoachSystemPrompt,
        initInterprofessional
    };
}
