/**
 * PROFESSION LANGUAGE CONFIGURATION
 * Dx Learning Ecosystem - Multi-Profession Support
 * 
 * 14 PROFESSIONS SUPPORTED:
 * MD/DO, PA, Nursing, ARNP, EMS, RT, PharmD, OD, Dental, OMFS, PT, DPM, Resident, Professional
 * 
 * Place in ROOT folder of your GitHub repo.
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

// ============================================================
// PROFESSION CONFIGURATIONS
// ============================================================

const PROFESSION_CONFIG = {
    // ==================== MD/DO ====================
    "md-do": {
        professionCode: "md-do",
        professionFull: "Medical Doctor / Doctor of Osteopathic Medicine",
        degreeAbbreviation: "MD/DO",
        
        learnerTitle: "Medical Student",
        learnerTitlePlural: "Medical Students",
        learnerLevels: {
            ume: { name: "Medical Student", shortName: "UME", subtitle: "MS1-MS4", icon: "🎓" },
            gme: { name: "Resident", shortName: "GME", subtitle: "PGY1-5", icon: "🏥" },
            cme: { name: "Practicing Physician", shortName: "CME", subtitle: "Attending", icon: "⚕️" }
        },
        levelOptions: ["MS1", "MS2", "MS3", "MS4", "PGY-1", "PGY-2", "PGY-3", "Senior"],
        
        mentorTitle: "Attending Physician",
        mentorTitleShort: "Attending",
        supervisorTitle: "Attending Physician",
        
        welcomeMessage: "Welcome, Medical Student!",
        welcomeSubtext: "Your personalized clinical reasoning training awaits.",
        dashboardGreeting: "Ready to build your diagnostic reasoning skills?",
        
        patientTerm: "patient",
        encounterTerm: "clinical encounter",
        workupTerm: "workup",
        assessmentTerm: "assessment",
        planTerm: "plan",
        
        primaryQuestion: "What does this patient have?",
        decisionFramework: "Diagnosis → Treatment Plan",
        
        defaultCoach: {
            name: "Dr. Amara Osei",
            title: "Attending Physician",
            avatar: "👩‍⚕️",
            role: "Your attending on this rotation"
        }
    },
    
    // ==================== PA ====================
    "pa": {
        professionCode: "pa",
        professionFull: "Physician Associate/Assistant",
        degreeAbbreviation: "PA-C",
        
        learnerTitle: "PA Student",
        learnerTitlePlural: "PA Students",
        learnerLevels: {
            ume: { name: "PA Student", shortName: "PA-S", subtitle: "Didactic/Clinical", icon: "🎓" },
            gme: { name: "Practicing PA", shortName: "PA-C", subtitle: "Certified", icon: "🏥" },
            cme: { name: "Senior PA", shortName: "PA-CME", subtitle: "Experienced", icon: "⚕️" }
        },
        levelOptions: ["Didactic Year", "Clinical Year 1", "Clinical Year 2", "Practicing PA"],
        
        mentorTitle: "Supervising PA",
        mentorTitleShort: "Preceptor",
        supervisorTitle: "Supervising Physician",
        
        welcomeMessage: "Welcome, PA Student!",
        welcomeSubtext: "Your personalized clinical reasoning training awaits.",
        dashboardGreeting: "Ready to strengthen your diagnostic skills?",
        
        patientTerm: "patient",
        encounterTerm: "clinical encounter",
        workupTerm: "workup",
        assessmentTerm: "assessment",
        planTerm: "plan",
        
        primaryQuestion: "What can I diagnose and manage vs. refer?",
        decisionFramework: "Diagnosis → Scope Check → Plan or Referral",
        
        defaultCoach: {
            name: "Dr. Marcus Webb",
            title: "Supervising Physician",
            avatar: "👨‍⚕️",
            role: "Your supervising physician"
        }
    },
    
    // ==================== NURSING ====================
    "nursing": {
        professionCode: "nursing",
        professionFull: "Registered Nurse",
        degreeAbbreviation: "RN, BSN",
        
        learnerTitle: "Nursing Student",
        learnerTitlePlural: "Nursing Students",
        learnerLevels: {
            ume: { name: "Nursing Student", shortName: "NSG", subtitle: "Pre-licensure", icon: "🎓" },
            gme: { name: "New Grad RN", shortName: "RN", subtitle: "Residency", icon: "🏥" },
            cme: { name: "Experienced RN", shortName: "RN-CME", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Senior Practicum"],
        
        mentorTitle: "Clinical Instructor",
        mentorTitleShort: "Instructor",
        supervisorTitle: "Charge Nurse",
        
        welcomeMessage: "Welcome, Nursing Student!",
        welcomeSubtext: "Your personalized clinical reasoning training awaits.",
        dashboardGreeting: "Ready to sharpen your patient assessment skills?",
        
        patientTerm: "patient",
        encounterTerm: "patient assessment",
        workupTerm: "assessment",
        assessmentTerm: "nursing assessment",
        planTerm: "care plan",
        
        primaryQuestion: "What do I need to recognize and escalate?",
        decisionFramework: "Recognize → Prioritize → Intervene → Escalate",
        
        defaultCoach: {
            name: "Rachel Torres, RN",
            title: "Charge Nurse",
            avatar: "👩‍⚕️",
            role: "Your preceptor today"
        }
    },
    
    // ==================== ARNP ====================
    "arnp": {
        professionCode: "arnp",
        professionFull: "Advanced Practice Registered Nurse",
        degreeAbbreviation: "ARNP",
        
        learnerTitle: "NP Student",
        learnerTitlePlural: "NP Students",
        learnerLevels: {
            ume: { name: "NP Student", shortName: "NP-S", subtitle: "Graduate", icon: "🎓" },
            gme: { name: "New NP", shortName: "ARNP", subtitle: "Residency", icon: "🏥" },
            cme: { name: "Experienced NP", shortName: "ARNP-CME", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["Year 1", "Year 2", "Year 3", "Clinical Residency", "Practicing NP"],
        
        mentorTitle: "Precepting NP",
        mentorTitleShort: "Preceptor",
        supervisorTitle: "Collaborating Physician",
        
        welcomeMessage: "Welcome, NP Student!",
        welcomeSubtext: "Your personalized clinical reasoning training awaits.",
        dashboardGreeting: "Ready to advance your diagnostic reasoning?",
        
        patientTerm: "patient",
        encounterTerm: "clinical encounter",
        workupTerm: "workup",
        assessmentTerm: "assessment",
        planTerm: "management plan",
        
        primaryQuestion: "What can I independently manage vs. collaborate/refer?",
        decisionFramework: "Diagnosis → Scope Assessment → Manage/Collaborate/Refer",
        
        defaultCoach: {
            name: "Dr. Angela Foster",
            title: "DNP, ARNP-C, Preceptor",
            avatar: "👩‍⚕️",
            role: "Your clinical preceptor"
        }
    },
    
    // ==================== EMS ====================
    "ems": {
        professionCode: "ems",
        professionFull: "Emergency Medical Services",
        degreeAbbreviation: "EMT/Paramedic",
        
        learnerTitle: "EMS Student",
        learnerTitlePlural: "EMS Students",
        learnerLevels: {
            ume: { name: "EMS Student", shortName: "EMT-S", subtitle: "In Training", icon: "🎓" },
            gme: { name: "EMT/Paramedic", shortName: "EMT-P", subtitle: "Field", icon: "🚑" },
            cme: { name: "Senior Paramedic", shortName: "EMT-CME", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["EMT Basic", "EMT Advanced", "Paramedic Student", "Field Paramedic"],
        
        mentorTitle: "Field Training Officer",
        mentorTitleShort: "FTO",
        supervisorTitle: "Medical Director",
        
        welcomeMessage: "Welcome, EMS Provider!",
        welcomeSubtext: "Your personalized prehospital training awaits.",
        dashboardGreeting: "Ready to sharpen your field assessment skills?",
        
        patientTerm: "patient",
        encounterTerm: "patient contact",
        workupTerm: "field assessment",
        assessmentTerm: "field impression",
        planTerm: "treatment protocol",
        
        primaryQuestion: "What is the field impression and treatment priority?",
        decisionFramework: "Scene Safety → ABCs → Impression → Protocol → Transport",
        
        defaultCoach: {
            name: "Captain Mike Rodriguez",
            title: "Field Supervisor",
            avatar: "🚑",
            role: "Your FTO (Field Training Officer)"
        }
    },
    
    // ==================== RT ====================
    "rt": {
        professionCode: "rt",
        professionFull: "Respiratory Therapist",
        degreeAbbreviation: "RRT",
        
        learnerTitle: "RT Student",
        learnerTitlePlural: "RT Students",
        learnerLevels: {
            ume: { name: "RT Student", shortName: "RT-S", subtitle: "In Training", icon: "🎓" },
            gme: { name: "RRT", shortName: "RRT", subtitle: "Registered", icon: "🫁" },
            cme: { name: "Senior RRT", shortName: "RRT-CME", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["Year 1", "Year 2", "Clinical Rotation", "Practicing RRT"],
        
        mentorTitle: "Clinical Preceptor",
        mentorTitleShort: "Preceptor",
        supervisorTitle: "Lead Respiratory Therapist",
        
        welcomeMessage: "Welcome, RT Student!",
        welcomeSubtext: "Your personalized respiratory care training awaits.",
        dashboardGreeting: "Ready to master pulmonary assessment?",
        
        patientTerm: "patient",
        encounterTerm: "respiratory assessment",
        workupTerm: "pulmonary workup",
        assessmentTerm: "respiratory assessment",
        planTerm: "respiratory care plan",
        
        primaryQuestion: "What is the respiratory status and intervention needed?",
        decisionFramework: "Assess → Oxygenation/Ventilation → Intervene → Monitor",
        
        defaultCoach: {
            name: "Jennifer Park, RRT",
            title: "Lead Respiratory Therapist",
            avatar: "🫁",
            role: "Your clinical preceptor"
        }
    },
    
    // ==================== PHARMACY ====================
    "pharmd": {
        professionCode: "pharmd",
        professionFull: "Doctor of Pharmacy",
        degreeAbbreviation: "PharmD",
        
        learnerTitle: "Pharmacy Student",
        learnerTitlePlural: "Pharmacy Students",
        learnerLevels: {
            ume: { name: "Pharmacy Student", shortName: "P1-P4", subtitle: "Pre-APPE", icon: "🎓" },
            gme: { name: "Resident", shortName: "PGY1-2", subtitle: "Residency", icon: "🏥" },
            cme: { name: "Clinical Pharmacist", shortName: "PharmD", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["P1", "P2", "P3", "P4/APPE", "PGY-1", "PGY-2", "Practicing"],
        
        mentorTitle: "Clinical Pharmacist Preceptor",
        mentorTitleShort: "Preceptor",
        supervisorTitle: "Clinical Pharmacist",
        
        welcomeMessage: "Welcome, Pharmacy Student!",
        welcomeSubtext: "Your personalized medication therapy training awaits.",
        dashboardGreeting: "Ready to optimize drug therapy outcomes?",
        
        patientTerm: "patient",
        encounterTerm: "medication therapy review",
        workupTerm: "medication review",
        assessmentTerm: "drug therapy assessment",
        planTerm: "therapeutic recommendation",
        
        primaryQuestion: "What is the drug therapy problem?",
        decisionFramework: "Indication → Effectiveness → Safety → Adherence",
        
        defaultCoach: {
            name: "Dr. Kevin Patel",
            title: "PharmD, BCPS, Clinical Preceptor",
            avatar: "💊",
            role: "Your clinical preceptor"
        }
    },
    
    // ==================== OPTOMETRY ====================
    "od": {
        professionCode: "od",
        professionFull: "Doctor of Optometry",
        degreeAbbreviation: "OD",
        
        learnerTitle: "Optometry Student",
        learnerTitlePlural: "Optometry Students",
        learnerLevels: {
            ume: { name: "Optometry Student", shortName: "OD1-4", subtitle: "Pre-grad", icon: "🎓" },
            gme: { name: "Resident", shortName: "Res", subtitle: "Residency", icon: "🏥" },
            cme: { name: "Optometrist", shortName: "OD", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["OD1", "OD2", "OD3", "OD4/Externship", "Residency", "Practicing"],
        
        mentorTitle: "Attending Optometrist",
        mentorTitleShort: "Attending",
        supervisorTitle: "Attending Optometrist",
        
        welcomeMessage: "Welcome, Optometry Student!",
        welcomeSubtext: "Your personalized ocular reasoning training awaits.",
        dashboardGreeting: "Ready to sharpen your diagnostic vision?",
        
        patientTerm: "patient",
        encounterTerm: "eye examination",
        workupTerm: "ocular workup",
        assessmentTerm: "ocular assessment",
        planTerm: "management plan",
        
        primaryQuestion: "Where is the ocular pathology and can I manage it?",
        decisionFramework: "Localize → Diagnose → Manage or Refer",
        
        defaultCoach: {
            name: "Dr. Lisa Chang",
            title: "OD, FAAO, Attending",
            avatar: "👁️",
            role: "Your attending optometrist"
        }
    },
    
    // ==================== DENTAL ====================
    "dental": {
        professionCode: "dental",
        professionFull: "Doctor of Dental Surgery / Doctor of Dental Medicine",
        degreeAbbreviation: "DDS/DMD",
        
        learnerTitle: "Dental Student",
        learnerTitlePlural: "Dental Students",
        learnerLevels: {
            ume: { name: "Dental Student", shortName: "D1-D4", subtitle: "Pre-grad", icon: "🎓" },
            gme: { name: "Resident", shortName: "Res", subtitle: "Residency", icon: "🏥" },
            cme: { name: "Dentist", shortName: "DDS/DMD", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["D1", "D2", "D3", "D4", "GPR/AEGD", "Practicing"],
        
        mentorTitle: "Attending Dentist",
        mentorTitleShort: "Attending",
        supervisorTitle: "Attending Dentist",
        
        welcomeMessage: "Welcome, Dental Student!",
        welcomeSubtext: "Your personalized clinical reasoning training awaits.",
        dashboardGreeting: "Ready to develop your diagnostic skills?",
        
        patientTerm: "patient",
        encounterTerm: "dental examination",
        workupTerm: "dental workup",
        assessmentTerm: "dental assessment",
        planTerm: "treatment plan",
        
        primaryQuestion: "What is the diagnosis and treatment needed?",
        decisionFramework: "Localize → Diagnose → Treatment Plan",
        
        defaultCoach: {
            name: "Dr. Elena Martinez",
            title: "DDS, Attending Dentist",
            avatar: "🦷",
            role: "Your attending dentist"
        }
    },
    
    // ==================== OMFS ====================
    "omfs": {
        professionCode: "omfs",
        professionFull: "Oral and Maxillofacial Surgery",
        degreeAbbreviation: "DDS/DMD, MD",
        
        learnerTitle: "OMFS Resident",
        learnerTitlePlural: "OMFS Residents",
        learnerLevels: {
            ume: { name: "Junior Resident", shortName: "PGY1-2", subtitle: "Junior", icon: "🎓" },
            gme: { name: "Senior Resident", shortName: "PGY3-6", subtitle: "Senior", icon: "🏥" },
            cme: { name: "OMFS Surgeon", shortName: "OMFS", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["PGY-1", "PGY-2", "PGY-3", "PGY-4", "PGY-5", "PGY-6", "Practicing"],
        
        mentorTitle: "Attending Surgeon",
        mentorTitleShort: "Attending",
        supervisorTitle: "Attending Surgeon",
        
        welcomeMessage: "Welcome, OMFS Resident!",
        welcomeSubtext: "Your personalized surgical reasoning training awaits.",
        dashboardGreeting: "Ready to advance your surgical decision-making?",
        
        patientTerm: "patient",
        encounterTerm: "surgical consultation",
        workupTerm: "surgical workup",
        assessmentTerm: "surgical assessment",
        planTerm: "surgical plan",
        
        primaryQuestion: "Is this a surgical candidate and what approach?",
        decisionFramework: "Medical Optimization → Surgical Indication → Approach → Risk",
        
        defaultCoach: {
            name: "Dr. James Williams",
            title: "MD, DDS, OMFS Attending",
            avatar: "🔬",
            role: "Your attending surgeon"
        }
    },
    
    // ==================== PHYSICAL THERAPY (NEW) ====================
    "pt": {
        professionCode: "pt",
        professionFull: "Doctor of Physical Therapy",
        degreeAbbreviation: "DPT",
        
        learnerTitle: "PT Student",
        learnerTitlePlural: "PT Students",
        learnerLevels: {
            ume: { name: "PT Student", shortName: "DPT1-3", subtitle: "Pre-grad", icon: "🎓" },
            gme: { name: "Resident", shortName: "Res", subtitle: "Residency", icon: "🏥" },
            cme: { name: "Physical Therapist", shortName: "DPT", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["DPT-1", "DPT-2", "DPT-3", "Clinical Internship", "Residency", "Practicing"],
        
        mentorTitle: "Clinical Instructor",
        mentorTitleShort: "CI",
        supervisorTitle: "Supervising PT",
        
        welcomeMessage: "Welcome, PT Student!",
        welcomeSubtext: "Your personalized clinical reasoning training awaits.",
        dashboardGreeting: "Ready to develop your movement system diagnosis skills?",
        
        patientTerm: "patient",
        encounterTerm: "patient examination",
        workupTerm: "examination",
        assessmentTerm: "physical therapy diagnosis",
        planTerm: "plan of care",
        
        primaryQuestion: "What is the movement system diagnosis and prognosis?",
        decisionFramework: "Systems Review → Tests & Measures → PT Diagnosis → Prognosis → POC",
        
        defaultCoach: {
            name: "Dr. Michael Torres",
            title: "DPT, OCS, Clinical Instructor",
            avatar: "🦿",
            role: "Your clinical instructor"
        }
    },
    
    // ==================== PODIATRY (NEW) ====================
    "dpm": {
        professionCode: "dpm",
        professionFull: "Doctor of Podiatric Medicine",
        degreeAbbreviation: "DPM",
        
        learnerTitle: "Podiatry Student",
        learnerTitlePlural: "Podiatry Students",
        learnerLevels: {
            ume: { name: "Podiatry Student", shortName: "DPM1-4", subtitle: "Pre-grad", icon: "🎓" },
            gme: { name: "Resident", shortName: "PGY1-3", subtitle: "Residency", icon: "🏥" },
            cme: { name: "Podiatrist", shortName: "DPM", subtitle: "CE Credits", icon: "⚕️" }
        },
        levelOptions: ["DPM-1", "DPM-2", "DPM-3", "DPM-4", "PGY-1", "PGY-2", "PGY-3", "Practicing"],
        
        mentorTitle: "Attending Podiatrist",
        mentorTitleShort: "Attending",
        supervisorTitle: "Attending Podiatrist",
        
        welcomeMessage: "Welcome, Podiatry Student!",
        welcomeSubtext: "Your personalized clinical reasoning training awaits.",
        dashboardGreeting: "Ready to develop your diagnostic skills?",
        
        patientTerm: "patient",
        encounterTerm: "podiatric examination",
        workupTerm: "podiatric workup",
        assessmentTerm: "podiatric assessment",
        planTerm: "treatment plan",
        
        primaryQuestion: "What is the foot/ankle diagnosis and treatment approach?",
        decisionFramework: "Localize → Vascular/Neuro Assessment → Diagnose → Conservative vs Surgical",
        
        defaultCoach: {
            name: "Dr. Rebecca Stone",
            title: "DPM, FACFAS, Attending",
            avatar: "🦶",
            role: "Your attending podiatrist"
        }
    },
    
    // ==================== RESIDENT ====================
    "resident": {
        professionCode: "resident",
        professionFull: "Medical Resident",
        degreeAbbreviation: "MD/DO",
        
        learnerTitle: "Resident",
        learnerTitlePlural: "Residents",
        learnerLevels: {
            ume: { name: "Intern", shortName: "PGY-1", subtitle: "Intern", icon: "🎓" },
            gme: { name: "Resident", shortName: "PGY2-3", subtitle: "Junior", icon: "🏥" },
            cme: { name: "Senior/Chief", shortName: "Senior", subtitle: "Chief", icon: "⚕️" }
        },
        levelOptions: ["PGY-1 (Intern)", "PGY-2", "PGY-3", "Senior", "Chief"],
        
        mentorTitle: "Senior Resident",
        mentorTitleShort: "Senior",
        supervisorTitle: "Attending Physician",
        
        welcomeMessage: "Welcome, Resident!",
        welcomeSubtext: "Your personalized clinical training awaits.",
        dashboardGreeting: "Ready to refine your clinical reasoning?",
        
        patientTerm: "patient",
        encounterTerm: "clinical encounter",
        workupTerm: "workup",
        assessmentTerm: "assessment",
        planTerm: "plan",
        
        primaryQuestion: "What is the assessment and plan?",
        decisionFramework: "Efficient Workup → Management → Disposition",
        
        defaultCoach: {
            name: "Dr. Rafael Mendoza",
            title: "Senior Resident",
            avatar: "👨‍🔬",
            role: "Your senior on service"
        }
    },
    
    // ==================== PROFESSIONAL ====================
    "professional": {
        professionCode: "professional",
        professionFull: "Healthcare Professional",
        degreeAbbreviation: "Various",
        
        learnerTitle: "Healthcare Professional",
        learnerTitlePlural: "Healthcare Professionals",
        learnerLevels: {
            ume: { name: "Refresher", shortName: "Refresh", subtitle: "Review", icon: "📚" },
            gme: { name: "Standard", shortName: "Standard", subtitle: "CE", icon: "🏥" },
            cme: { name: "Advanced", shortName: "Advanced", subtitle: "Expert", icon: "⚕️" }
        },
        levelOptions: ["Refresher", "Standard CE", "Advanced"],
        
        mentorTitle: "CE Instructor",
        mentorTitleShort: "Instructor",
        supervisorTitle: "Clinical Advisor",
        
        welcomeMessage: "Welcome, Healthcare Professional!",
        welcomeSubtext: "Your continuing education awaits.",
        dashboardGreeting: "Ready to update your clinical knowledge?",
        
        patientTerm: "patient",
        encounterTerm: "clinical scenario",
        workupTerm: "workup",
        assessmentTerm: "assessment",
        planTerm: "management",
        
        primaryQuestion: "What are the current best practices?",
        decisionFramework: "Evidence Review → Guideline Updates → Application",
        
        defaultCoach: {
            name: "Clinical Advisor",
            title: "CE Instructor",
            avatar: "🎓",
            role: "Your continuing education guide"
        }
    }
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getProfessionConfig(professionCode) {
    var code = (professionCode || "md-do").toLowerCase();
    return PROFESSION_CONFIG[code] || PROFESSION_CONFIG["md-do"];
}

function getProfessionText(professionCode, textKey) {
    var config = getProfessionConfig(professionCode);
    return config[textKey] || "";
}

function getWelcomeContent(professionCode, userName) {
    var config = getProfessionConfig(professionCode);
    var title = config.welcomeMessage;
    if (userName) {
        title = "Welcome, " + userName + "!";
    }
    return {
        title: title,
        subtitle: config.welcomeSubtext,
        greeting: config.dashboardGreeting,
        learnerTitle: config.learnerTitle
    };
}

function getCoachDisplay(professionCode, customCoach) {
    var config = getProfessionConfig(professionCode);
    var coach = customCoach || config.defaultCoach;
    return {
        name: coach.name,
        title: coach.title,
        avatar: coach.avatar,
        role: coach.role,
        displayTitle: coach.title || config.mentorTitle
    };
}

function getUIStrings(professionCode) {
    var config = getProfessionConfig(professionCode);
    return {
        learnerTitle: config.learnerTitle,
        mentorTitle: config.mentorTitle,
        mentorTitleShort: config.mentorTitleShort,
        supervisorTitle: config.supervisorTitle,
        welcomeMessage: config.welcomeMessage,
        welcomeSubtext: config.welcomeSubtext,
        patient: config.patientTerm,
        encounter: config.encounterTerm,
        workup: config.workupTerm,
        assessment: config.assessmentTerm,
        plan: config.planTerm,
        primaryQuestion: config.primaryQuestion,
        decisionFramework: config.decisionFramework,
        levels: config.levelOptions
    };
}

function getLearnerLevelsForProfession(professionCode) {
    var config = getProfessionConfig(professionCode);
    var levels = config.learnerLevels;
    
    return {
        ume: {
            id: 'ume',
            name: levels.ume.name,
            shortName: levels.ume.shortName,
            subtitle: levels.ume.subtitle,
            icon: levels.ume.icon,
            color: '#6366f1',
            feedbackStyle: 'teaching',
            scaffolding: 'high',
            expectCompetence: false
        },
        gme: {
            id: 'gme',
            name: levels.gme.name,
            shortName: levels.gme.shortName,
            subtitle: levels.gme.subtitle,
            icon: levels.gme.icon,
            color: '#059669',
            feedbackStyle: 'efficiency',
            scaffolding: 'low',
            expectCompetence: true
        },
        cme: {
            id: 'cme',
            name: levels.cme.name,
            shortName: levels.cme.shortName,
            subtitle: levels.cme.subtitle,
            icon: levels.cme.icon,
            color: '#dc2626',
            feedbackStyle: 'update',
            scaffolding: 'minimal',
            expectCompetence: true
        }
    };
}

function getCurrentProfession() {
    return localStorage.getItem('dxRole') || 'md-do';
}

function getCurrentCoachName() {
    var profession = getCurrentProfession();
    var coach = getCoachDisplay(profession);
    return coach.name;
}

function updateProfessionUI() {
    var profession = getCurrentProfession();
    var config = getProfessionConfig(profession);
    var coach = getCoachDisplay(profession);
    
    document.querySelectorAll('[data-profession-text]').forEach(function(el) {
        var key = el.getAttribute('data-profession-text');
        if (key === 'welcomeMessage') el.textContent = config.welcomeMessage;
        if (key === 'learnerTitle') el.textContent = config.learnerTitle;
        if (key === 'mentorTitle') el.textContent = config.mentorTitle;
        if (key === 'coachName') el.textContent = coach.name;
        if (key === 'coachTitle') el.textContent = coach.title;
        if (key === 'coachAvatar') el.textContent = coach.avatar;
    });
    
    console.log('[ProfessionConfig] UI updated for profession: ' + profession);
}

// ============================================================
// EXPORTS
// ============================================================

window.PROFESSION_CONFIG = PROFESSION_CONFIG;
window.getProfessionConfig = getProfessionConfig;
window.getProfessionText = getProfessionText;
window.getWelcomeContent = getWelcomeContent;
window.getCoachDisplay = getCoachDisplay;
window.getUIStrings = getUIStrings;
window.getLearnerLevelsForProfession = getLearnerLevelsForProfession;
window.getCurrentProfession = getCurrentProfession;
window.getCurrentCoachName = getCurrentCoachName;
window.updateProfessionUI = updateProfessionUI;

window.ProfessionLanguage = {
    PROFESSION_CONFIG: PROFESSION_CONFIG,
    getProfessionConfig: getProfessionConfig,
    getProfessionText: getProfessionText,
    getWelcomeContent: getWelcomeContent,
    getCoachDisplay: getCoachDisplay,
    getUIStrings: getUIStrings,
    getLearnerLevelsForProfession: getLearnerLevelsForProfession,
    getCurrentProfession: getCurrentProfession,
    getCurrentCoachName: getCurrentCoachName,
    updateProfessionUI: updateProfessionUI
};

console.log('[ProfessionConfig] Loaded - 14 professions available (including PT and Podiatry)');
