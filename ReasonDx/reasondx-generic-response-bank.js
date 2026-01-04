." },
        cesarean: { aliases: ["c-section", "cesarean section"], negativeResponse: "No C-sections." },
        
        // Other
        tonsillectomy: { aliases: ["tonsils removed"], negativeResponse: "No, I still have my tonsils." },
        thyroidectomy: { aliases: ["thyroid removed"], negativeResponse: "No thyroid surgery." },
        mastectomy: { aliases: ["breast removal"], negativeResponse: "No breast surgery." },
        prostatectomy: { aliases: ["prostate removal"], negativeResponse: "No prostate surgery." },
        cataract_surgery: { aliases: ["cataract"], negativeResponse: "No cataract surgery." },
        lasik: { aliases: ["eye surgery"], negativeResponse: "No eye surgery." }
    };

    // ========================================================================
    // USPSTF HEALTH MAINTENANCE SCREENING
    // ========================================================================
    
    const healthMaintenanceScreening = {
        // Colorectal Cancer Screening
        colonoscopy: {
            criteria: { minAge: 45, maxAge: 75, gender: 'all' },
            frequency: "every 10 years if normal",
            positiveResponses: [
                "Yes, I had a colonoscopy {timeframe}. It was normal.",
                "Yes, I'm up to date on that. Last one was {timeframe}.",
                "Yes, I had one done. They found {finding}."
            ],
            negativeResponses: [
                "No, I haven't had a colonoscopy yet.",
                "No, I've been putting that off.",
                "I'm not sure I'm due for that yet."
            ],
            overdueResponse: "No, I know I should get one. I've been meaning to schedule it."
        },
        
        // Breast Cancer Screening
        mammogram: {
            criteria: { minAge: 40, maxAge: 74, gender: 'F' },
            frequency: "every 1-2 years",
            positiveResponses: [
                "Yes, I get mammograms regularly. Last one was {timeframe}.",
                "Yes, I had one {timeframe}. It was normal.",
                "Yes, I had one recently. They called me back for extra views but it was fine."
            ],
            negativeResponses: [
                "No, I haven't had a mammogram.",
                "No, I've been putting it off.",
                "I don't think I've had one recently."
            ],
            overdueResponse: "No, I know I'm overdue. I need to schedule one."
        },
        
        // Cervical Cancer Screening
        pap_smear: {
            criteria: { minAge: 21, maxAge: 65, gender: 'F' },
            frequency: "every 3 years (Pap) or every 5 years (Pap + HPV)",
            positiveResponses: [
                "Yes, I get regular Pap smears. Last one was {timeframe}.",
                "Yes, I'm up to date. My last one was normal.",
                "Yes, I had one {timeframe}. All clear."
            ],
            negativeResponses: [
                "No, I haven't had a Pap smear recently.",
                "It's been a while since my last one.",
                "I'm not sure when my last one was."
            ],
            overdueResponse: "No, I know I'm due for one. I need to see my gynecologist."
        },
        
        // Lung Cancer Screening
        lung_cancer_screening: {
            criteria: { minAge: 50, maxAge: 80, gender: 'all', smokingHistory: true },
            frequency: "yearly low-dose CT for high-risk",
            positiveResponses: [
                "Yes, I get the CT scan for my lungs yearly because of my smoking history.",
                "Yes, my doctor has me do that because I used to smoke. Last one was clear."
            ],
            negativeResponses: [
                "No, I haven't had that done.",
                "No, I didn't know about that screening.",
                "No, my doctor hasn't mentioned that."
            ]
        },
        
        // Prostate Cancer Screening
        psa: {
            criteria: { minAge: 55, maxAge: 69, gender: 'M' },
            frequency: "shared decision-making",
            positiveResponses: [
                "Yes, my doctor checks my PSA. It's been normal.",
                "Yes, I get that checked. Last one was {value}.",
                "Yes, I had it checked {timeframe}. It was fine."
            ],
            negativeResponses: [
                "No, I haven't had my PSA checked.",
                "No, my doctor and I decided not to do that.",
                "I'm not sure if I've had that done."
            ]
        },
        
        // Abdominal Aortic Aneurysm
        aaa_screening: {
            criteria: { minAge: 65, maxAge: 75, gender: 'M', smokingHistory: true },
            frequency: "one-time ultrasound",
            positiveResponses: [
                "Yes, I had that ultrasound done. It was normal.",
                "Yes, my doctor checked for that. No aneurysm."
            ],
            negativeResponses: [
                "No, I haven't had that done.",
                "No, I didn't know about that screening."
            ]
        },
        
        // Bone Density
        dexa: {
            criteria: { minAge: 65, maxAge: 999, gender: 'F' },
            frequency: "every 2 years if osteoporosis",
            positiveResponses: [
                "Yes, I had a bone density test. It showed {result}.",
                "Yes, I get those. My bones are {status}.",
                "Yes, I had one {timeframe}. It was normal."
            ],
            negativeResponses: [
                "No, I haven't had a bone density test.",
                "No, my doctor hasn't recommended that yet."
            ]
        },
        
        // Diabetes Screening
        diabetes_screening: {
            criteria: { minAge: 35, maxAge: 70, gender: 'all' },
            frequency: "every 3 years",
            positiveResponses: [
                "Yes, my blood sugar gets checked regularly. It's normal.",
                "Yes, my A1C is checked. It's been fine."
            ],
            negativeResponses: [
                "I'm not sure when my last blood sugar test was.",
                "I think it gets checked but I'm not certain."
            ]
        },
        
        // Lipid Screening
        lipid_screening: {
            criteria: { minAge: 40, maxAge: 75, gender: 'all' },
            frequency: "every 5 years if normal",
            positiveResponses: [
                "Yes, my cholesterol is checked regularly. Last time it was {values}.",
                "Yes, I know my cholesterol numbers. They're {status}."
            ],
            negativeResponses: [
                "I'm not sure when my cholesterol was last checked.",
                "It's been a while since that was checked."
            ]
        },
        
        // Blood Pressure
        blood_pressure_screening: {
            criteria: { minAge: 18, maxAge: 999, gender: 'all' },
            frequency: "at every visit",
            positiveResponses: [
                "Yes, my blood pressure is checked when I see the doctor. It's usually normal.",
                "Yes, I know my blood pressure. It runs around {value}."
            ],
            negativeResponses: [
                "I'm not sure what my blood pressure usually is.",
                "I don't pay much attention to that."
            ]
        },
        
        // Hepatitis C
        hep_c_screening: {
            criteria: { minAge: 18, maxAge: 79, gender: 'all' },
            frequency: "one-time",
            positiveResponses: [
                "Yes, I've been tested for hepatitis C. It was negative.",
                "Yes, I had that test. I don't have it."
            ],
            negativeResponses: [
                "No, I've never been tested for that.",
                "I'm not sure if I've been tested."
            ]
        },
        
        // HIV
        hiv_screening: {
            criteria: { minAge: 15, maxAge: 65, gender: 'all' },
            frequency: "at least once",
            positiveResponses: [
                "Yes, I've been tested for HIV. It was negative.",
                "Yes, I get tested. I'm negative."
            ],
            negativeResponses: [
                "No, I've never been tested.",
                "I'm not sure if I've been tested for that."
            ]
        },
        
        // Vaccinations
        flu_vaccine: {
            criteria: { minAge: 6, maxAge: 999, gender: 'all' },
            frequency: "yearly",
            positiveResponses: [
                "Yes, I got my flu shot this year.",
                "Yes, I get it every year."
            ],
            negativeResponses: [
                "No, I haven't gotten my flu shot yet this year.",
                "No, I don't usually get the flu shot."
            ]
        },
        
        pneumonia_vaccine: {
            criteria: { minAge: 65, maxAge: 999, gender: 'all' },
            frequency: "once after 65",
            positiveResponses: [
                "Yes, I've had the pneumonia vaccine.",
                "Yes, I got that when I turned 65."
            ],
            negativeResponses: [
                "No, I haven't had the pneumonia shot.",
                "I'm not sure if I've had that."
            ]
        },
        
        shingles_vaccine: {
            criteria: { minAge: 50, maxAge: 999, gender: 'all' },
            frequency: "once (Shingrix - 2 doses)",
            positiveResponses: [
                "Yes, I got the shingles vaccine. Both doses.",
                "Yes, I've had Shingrix."
            ],
            negativeResponses: [
                "No, I haven't gotten the shingles vaccine yet.",
                "No, I've been meaning to get that."
            ]
        },
        
        tdap: {
            criteria: { minAge: 18, maxAge: 999, gender: 'all' },
            frequency: "every 10 years",
            positiveResponses: [
                "Yes, I think my tetanus is up to date.",
                "Yes, I had a booster a few years ago."
            ],
            negativeResponses: [
                "I'm not sure when my last tetanus shot was.",
                "It's been a while. Probably more than 10 years."
            ]
        },
        
        covid_vaccine: {
            criteria: { minAge: 6, maxAge: 999, gender: 'all' },
            frequency: "initial series + boosters as recommended",
            positiveResponses: [
                "Yes, I'm fully vaccinated and boosted for COVID.",
                "Yes, I've had all my COVID shots."
            ],
            negativeResponses: [
                "No, I haven't gotten the COVID vaccine.",
                "I got the initial shots but not the boosters."
            ]
        }
    };

    // ========================================================================
    // SPECIALIST/ER/URGENT CARE VISITS
    // ========================================================================
    
    const specialistVisitResponses = {
        general: {
            positive: [
                "Yes, I see a {specialist} for {condition}.",
                "Yes, I have a {specialist}. I see them every {frequency}."
            ],
            negative: [
                "No, I don't see any specialists right now.",
                "No, just my primary care doctor."
            ]
        },
        
        erVisits: {
            positive: [
                "Yes, I went to the ER about {timeframe} ago for {reason}.",
                "Yes, I've been to the emergency room. Last time was for {reason}."
            ],
            negative: [
                "No, I haven't been to the ER recently.",
                "No, I try to avoid the emergency room."
            ]
        },
        
        urgentCare: {
            positive: [
                "Yes, I went to urgent care {timeframe} ago for {reason}.",
                "Yes, I've used urgent care before for minor things."
            ],
            negative: [
                "No, I haven't been to urgent care.",
                "No, I usually just wait to see my regular doctor."
            ]
        },
        
        hospitalizations: {
            positive: [
                "Yes, I was hospitalized {timeframe} ago for {reason}.",
                "Yes, I've been in the hospital before. For {reason}."
            ],
            negative: [
                "No, I've never been hospitalized.",
                "No, I've been lucky - never had to stay in the hospital."
            ]
        }
    };

    // ========================================================================
    // RESPONSE GENERATION FUNCTIONS
    // ========================================================================

    /**
     * Check if patient has condition based on case data
     */
    function hasCondition(conditionKey, caseConditions) {
        if (!caseConditions) return false;
        
        // Check direct match
        if (caseConditions.includes(conditionKey)) return true;
        
        // Check aliases
        const condition = medicalConditions[conditionKey];
        if (condition && condition.aliases) {
            return condition.aliases.some(alias => 
                caseConditions.some(cc => cc.toLowerCase().includes(alias.toLowerCase()))
            );
        }
        
        return false;
    }

    /**
     * Find condition by keyword in question
     */
    function findConditionByKeyword(question) {
        const q = question.toLowerCase();
        
        for (const [key, data] of Object.entries(medicalConditions)) {
            // Check condition name
            if (q.includes(key.replace(/_/g, ' '))) {
                return key;
            }
            // Check aliases
            if (data.aliases && data.aliases.some(alias => q.includes(alias.toLowerCase()))) {
                return key;
            }
        }
        
        return null;
    }

    /**
     * Get response for medical condition question
     */
    function getMedicalConditionResponse(question, caseConditions, caseResponses) {
        const conditionKey = findConditionByKeyword(question);
        
        if (!conditionKey) return null;
        
        // Check if case has specific response
        if (caseResponses && caseResponses[conditionKey]) {
            return caseResponses[conditionKey];
        }
        
        // Check if patient has condition (from case data)
        if (hasCondition(conditionKey, caseConditions)) {
            return null; // Let case-specific response handle it
        }
        
        // Return generic negative response
        const condition = medicalConditions[conditionKey];
        return condition ? condition.negativeResponse : "No, I don't have that.";
    }

    /**
     * Get surgical history response
     */
    function getSurgicalHistoryResponse(question, caseSurgeries, caseResponses) {
        const q = question.toLowerCase();
        
        for (const [key, data] of Object.entries(surgicalProcedures)) {
            const matches = q.includes(key.replace(/_/g, ' ')) || 
                           (data.aliases && data.aliases.some(a => q.includes(a.toLowerCase())));
            
            if (matches) {
                // Check case-specific response
                if (caseResponses && caseResponses[key]) {
                    return caseResponses[key];
                }
                
                // Check if patient had this surgery
                if (caseSurgeries && caseSurgeries.includes(key)) {
                    return null; // Let case handle it
                }
                
                return data.negativeResponse;
            }
        }
        
        return null;
    }

    /**
     * Get health maintenance response based on patient demographics
     */
    function getHealthMaintenanceResponse(question, patientAge, patientGender, caseScreeningData) {
        const q = question.toLowerCase();
        
        for (const [key, data] of Object.entries(healthMaintenanceScreening)) {
            const matches = q.includes(key.replace(/_/g, ' ')) || 
                           q.includes(key.replace(/_/g, ''));
            
            if (matches) {
                // Check if patient meets criteria
                const meetsAge = patientAge >= data.criteria.minAge && patientAge <= data.criteria.maxAge;
                const meetsGender = data.criteria.gender === 'all' || data.criteria.gender === patientGender;
                
                if (!meetsAge || !meetsGender) {
                    return "I don't think that applies to me based on my age/gender.";
                }
                
                // Check case-specific data
                if (caseScreeningData && caseScreeningData[key]) {
                    const caseData = caseScreeningData[key];
                    const responses = caseData.upToDate ? data.positiveResponses : data.negativeResponses;
                    let response = responses[Math.floor(Math.random() * responses.length)];
                    
                    // Fill in placeholders
                    response = response.replace('{timeframe}', caseData.timeframe || 'a while ago');
                    response = response.replace('{finding}', caseData.finding || 'nothing significant');
                    response = response.replace('{result}', caseData.result || 'normal');
                    response = response.replace('{value}', caseData.value || 'normal');
                    response = response.replace('{values}', caseData.values || 'normal');
                    response = response.replace('{status}', caseData.status || 'good');
                    
                    return response;
                }
                
                // Default: assume up to date for well patients
                const responses = data.positiveResponses;
                let response = responses[Math.floor(Math.random() * responses.length)];
                response = response.replace('{timeframe}', 'about a year ago');
                response = response.replace('{finding}', 'nothing');
                response = response.replace('{result}', 'normal');
                response = response.replace('{value}', 'normal');
                response = response.replace('{values}', 'normal');
                response = response.replace('{status}', 'normal');
                
                return response;
            }
        }
        
        return null;
    }

    /**
     * Get specialist/ER/urgent care response
     */
    function getSpecialistVisitResponse(question, caseVisitData) {
        const q = question.toLowerCase();
        
        if (q.includes('specialist') || q.includes('see any other doctor')) {
            if (caseVisitData && caseVisitData.specialists && caseVisitData.specialists.length > 0) {
                const specialist = caseVisitData.specialists[0];
                return `Yes, I see a ${specialist.type} for ${specialist.reason}. I see them ${specialist.frequency || 'regularly'}.`;
            }
            return specialistVisitResponses.general.negative[Math.floor(Math.random() * specialistVisitResponses.general.negative.length)];
        }
        
        if (q.includes('emergency room') || q.includes('er ') || q.includes('emergency department')) {
            if (caseVisitData && caseVisitData.erVisits && caseVisitData.erVisits.length > 0) {
                const visit = caseVisitData.erVisits[0];
                return `Yes, I went to the ER ${visit.timeframe || 'recently'} for ${visit.reason}.`;
            }
            return specialistVisitResponses.erVisits.negative[Math.floor(Math.random() * specialistVisitResponses.erVisits.negative.length)];
        }
        
        if (q.includes('urgent care')) {
            if (caseVisitData && caseVisitData.urgentCare && caseVisitData.urgentCare.length > 0) {
                const visit = caseVisitData.urgentCare[0];
                return `Yes, I went to urgent care ${visit.timeframe || 'recently'} for ${visit.reason}.`;
            }
            return specialistVisitResponses.urgentCare.negative[Math.floor(Math.random() * specialistVisitResponses.urgentCare.negative.length)];
        }
        
        if (q.includes('hospital') || q.includes('admitted')) {
            if (caseVisitData && caseVisitData.hospitalizations && caseVisitData.hospitalizations.length > 0) {
                const stay = caseVisitData.hospitalizations[0];
                return `Yes, I was hospitalized ${stay.timeframe || 'before'} for ${stay.reason}.`;
            }
            return specialistVisitResponses.hospitalizations.negative[Math.floor(Math.random() * specialistVisitResponses.hospitalizations.negative.length)];
        }
        
        return null;
    }

    // ========================================================================
    // PUBLIC API
    // ========================================================================
    
    return {
        medicalConditions,
        surgicalProcedures,
        healthMaintenanceScreening,
        specialistVisitResponses,
        findConditionByKeyword,
        hasCondition,
        getMedicalConditionResponse,
        getSurgicalHistoryResponse,
        getHealthMaintenanceResponse,
        getSpecialistVisitResponse
    };
    
})();

// Export for Node.js if applicable
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GenericResponseBank;
}

console.log("✓ ReasonDx Generic Response Bank: Initialized");
