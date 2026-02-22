/**
 * ReasonDx Category Normalization & Nesting System
 * 
 * This module normalizes inconsistent category names and organizes
 * dual-specialty cases into a nested hierarchy.
 */

const DxCategorySystem = (function() {
    
    // Primary category consolidation - maps various names to canonical names
    const CATEGORY_ALIASES = {
        // Cardiovascular consolidation
        'Cardiology': 'Cardiovascular',
        'Cardiac': 'Cardiovascular',
        'Cardiology/ID': 'Cardiovascular',
        
        // Pulmonary consolidation
        'Pulmonology': 'Pulmonary',
        'Respiratory': 'Pulmonary',
        'Respiratory/ENT': 'ENT', // This is more ENT focused
        
        // GI consolidation
        'Gastroenterology': 'GI',
        'GI/Hepatology': 'GI',
        'GI/Surgical': 'GI',
        'GI/OB': 'GI',
        'GI/Infectious Disease': 'GI',
        
        // Neurology stays Neurology
        'Neurologic': 'Neurology',
        'Neuro': 'Neurology',
        
        // MSK consolidation
        'Musculoskeletal': 'MSK',
        'Orthopedics': 'MSK',
        'Sports Medicine': 'MSK',
        'Musculoskeletal/Neurology': 'MSK', // Spine cases
        
        // Infectious Disease consolidation
        'ID': 'Infectious Disease',
        'ID/Dermatology': 'Infectious Disease',
        'ID/Occupational': 'Infectious Disease',
        'ID/Oncology': 'Infectious Disease',
        'ID/Pediatric': 'Infectious Disease',
        'ID/Travel Medicine': 'Infectious Disease',
        
        // Renal/Urology consolidation
        'Renal': 'Renal/GU',
        'Urology': 'Renal/GU',
        'Nephrology': 'Renal/GU',
        'Renal/Infectious Disease': 'Renal/GU',
        
        // Psychiatry consolidation
        'Psych': 'Psychiatry',
        'Psychiatric': 'Psychiatry',
        'Psychiatry/Emergency': 'Psychiatry',
        'Psychiatry/Primary Care': 'Psychiatry',
        
        // OB/GYN consolidation
        'GYN': 'OB/GYN',
        'GYN Emergency': 'OB/GYN',
        'GYN/Endocrine': 'OB/GYN',
        
        // Toxicology - keep as primary for pure tox cases
        'Toxicology/Emergency': 'Toxicology',
        
        // Geriatrics consolidation  
        'Geriatrics/Internal Medicine': 'Geriatrics',
        'Geriatrics/Palliative': 'Geriatrics',
        'Geriatrics/Primary Care': 'Geriatrics',
        
        // Emergency Medicine
        'Emergency': 'Emergency Medicine',
        
        // Dermatology consolidation
        'Dermatology/Primary Care': 'Dermatology',
        
        // Trap Cases → Clinical Challenges (hide the trap aspect)
        'Trap Case': 'Clinical Challenges',
        
        // Multi-diagnosis
        'Multi-Diagnosis Case': 'Complex Cases',
        
        // Allergy
        'Allergy & Immunology': 'Allergy/Immunology',
        'Allergy/Emergency Medicine': 'Allergy/Immunology',
        
        // Endocrine
        'Endocrinology': 'Endocrine',
        'Endocrinology/Emergency Medicine': 'Endocrine',
        
        // Internal Medicine as catch-all
        'Perioperative Medicine': 'Internal Medicine'
    };
    
    // Dual-specialty cases that should be nested under a primary specialty
    // Format: 'Dual Category': { primary: 'Primary Specialty', tag: 'Subspecialty Tag' }
    const DUAL_SPECIALTY_NESTING = {
        // Pulmonary subspecialties
        'Pulmonary/Occupational': { primary: 'Pulmonary', tag: 'Occupational' },
        'Pulmonology/Occupational': { primary: 'Pulmonary', tag: 'Occupational' },
        'Pulmonology/Occupational Medicine': { primary: 'Pulmonary', tag: 'Occupational' },
        'Pulmonary/Environmental': { primary: 'Pulmonary', tag: 'Environmental' },
        'Pulmonary/ID': { primary: 'Pulmonary', tag: 'Infectious' },
        'Pulmonology/Oncology': { primary: 'Pulmonary', tag: 'Oncology' },
        'Pulmonary/Oncology': { primary: 'Pulmonary', tag: 'Oncology' },
        
        // Infectious Disease subspecialties
        'Infectious Disease/Pulmonology': { primary: 'Infectious Disease', tag: 'Pulmonary' },
        'Infectious Disease/Travel Medicine': { primary: 'Infectious Disease', tag: 'Travel' },
        'Infectious Disease/Critical Care': { primary: 'Infectious Disease', tag: 'Critical Care' },
        'Infectious Disease/Emergency': { primary: 'Infectious Disease', tag: 'Emergency' },
        'Infectious Disease/Hematology': { primary: 'Infectious Disease', tag: 'Hematology' },
        'Infectious Disease/Urology': { primary: 'Infectious Disease', tag: 'GU' },
        
        // Neurology subspecialties
        'Neurology/Occupational': { primary: 'Neurology', tag: 'Occupational' },
        'Neurology/ENT': { primary: 'Neurology', tag: 'ENT' },
        'Neurology/ID': { primary: 'Neurology', tag: 'Infectious' },
        'Neurology/Oncology': { primary: 'Neurology', tag: 'Oncology' },
        
        // Toxicology subspecialties (keep Tox as primary for these)
        'Toxicology/Neurology': { primary: 'Toxicology', tag: 'Neurology' },
        'Toxicology/GI': { primary: 'Toxicology', tag: 'GI' },
        'Toxicology/Gastroenterology': { primary: 'Toxicology', tag: 'GI' },
        'Toxicology/Pediatric': { primary: 'Toxicology', tag: 'Pediatrics' },
        
        // Pediatric subspecialties
        'Pediatric/Pulmonary': { primary: 'Pediatrics', tag: 'Pulmonary' },
        'Pediatric/Toxicology': { primary: 'Pediatrics', tag: 'Toxicology' },
        'Pediatrics/Toxicology': { primary: 'Pediatrics', tag: 'Toxicology' },
        'Pediatric Emergency': { primary: 'Pediatrics', tag: 'Emergency' },
        
        // Hematology/Oncology
        'Hematology/Oncology': { primary: 'Hematology/Oncology', tag: null },
        'Oncology/Occupational': { primary: 'Hematology/Oncology', tag: 'Occupational' },
        'Oncology/Endocrine': { primary: 'Hematology/Oncology', tag: 'Endocrine' },
        
        // Dermatology subspecialties
        'Dermatology/Occupational Medicine': { primary: 'Dermatology', tag: 'Occupational' },
        'Dermatology/Occupational': { primary: 'Dermatology', tag: 'Occupational' },
        'Occupational/Dermatology': { primary: 'Dermatology', tag: 'Occupational' },
        
        // ENT subspecialties
        'ENT/Occupational': { primary: 'ENT', tag: 'Occupational' },
        
        // Emergency/Occupational
        'Emergency/Occupational': { primary: 'Emergency Medicine', tag: 'Occupational' },
        'Emergency/Toxicology': { primary: 'Emergency Medicine', tag: 'Toxicology' },
        
        // Surgery subspecialties
        'Surgery/Breast': { primary: 'Surgery', tag: 'Breast' },
        'Surgery/Medicine': { primary: 'Surgery', tag: 'Perioperative' },
        
        // Rheumatology
        'Rheumatology/Toxicology': { primary: 'Rheumatology', tag: 'Toxicology' },
        
        // Sports Medicine
        'Sports Medicine/Endocrinology': { primary: 'MSK', tag: 'Sports/Endocrine' },
        'Sports Medicine/Psych': { primary: 'MSK', tag: 'Sports/Psych' }
    };
    
    // Canonical category display order and icons
    const CATEGORY_CONFIG = {
        'Cardiovascular': { icon: '❤️', order: 1 },
        'Pulmonary': { icon: '🫁', order: 2 },
        'GI': { icon: '🫃', order: 3 },
        'Neurology': { icon: '🧠', order: 4 },
        'Infectious Disease': { icon: '🦠', order: 5 },
        'Renal/GU': { icon: '🫘', order: 6 },
        'Endocrine': { icon: '⚗️', order: 7 },
        'Hematology/Oncology': { icon: '🩸', order: 8 },
        'MSK': { icon: '🦴', order: 9 },
        'Surgery': { icon: '🔪', order: 10 },
        'Psychiatry': { icon: '🧩', order: 11 },
        'Pediatrics': { icon: '👶', order: 12 },
        'OB/GYN': { icon: '🤰', order: 13 },
        'Geriatrics': { icon: '👴', order: 14 },
        'Dermatology': { icon: '🔬', order: 15 },
        'Allergy/Immunology': { icon: '🤧', order: 16 },
        'ENT': { icon: '👂', order: 17 },
        'Ophthalmology': { icon: '👁️', order: 18 },
        'Rheumatology': { icon: '🦴', order: 19 },
        'Toxicology': { icon: '☠️', order: 20 },
        'Emergency Medicine': { icon: '🚨', order: 21 },
        'Internal Medicine': { icon: '🏥', order: 22 },
        'Clinical Challenges': { icon: '🎯', order: 23 },
        'Complex Cases': { icon: '🧩', order: 24 },
        'Other': { icon: '📋', order: 99 }
    };
    
    // Title fixes for cases with undefined or diagnosis-revealing titles
    const TITLE_FIXES = {
        // Undefined titles
        'NO TITLE': 'Clinical Case',
        'undefined': 'Clinical Case',
        '': 'Clinical Case',
        
        // Diagnosis-revealing titles that should be changed
        'Pulmonary Embolism': 'Sudden Shortness of Breath',
        'Deep Vein Thrombosis': 'Leg Swelling',
        'DVT': 'Leg Swelling',
        'Acute Coronary Syndrome': 'Chest Discomfort',
        'ACS': 'Chest Discomfort',
        'STEMI': 'Crushing Chest Pain',
        'NSTEMI': 'Chest Tightness',
        'Heart Failure': 'Worsening Shortness of Breath',
        'CHF': 'Worsening Shortness of Breath',
        'Pneumonia': 'Cough and Fever',
        'Community-Acquired Pneumonia': 'Cough and Fever',
        'CAP': 'Cough and Fever',
        'Sepsis': 'Fever and Confusion',
        'DKA': 'Nausea and Confusion',
        'Diabetic Ketoacidosis': 'Nausea and Confusion',
        'Stroke': 'Sudden Weakness',
        'CVA': 'Sudden Weakness',
        'TIA': 'Brief Weakness Episode',
        'Meningitis': 'Severe Headache with Fever',
        'Appendicitis': 'Right Lower Quadrant Pain',
        'Cholecystitis': 'Right Upper Quadrant Pain',
        'Pancreatitis': 'Severe Epigastric Pain',
        'GI Bleed': 'Dark Stools',
        'Upper GI Bleed': 'Vomiting Blood',
        'Anaphylaxis': 'Allergic Reaction',
        'Encephalitis': 'Fever and Confusion',
        'Cellulitis': 'Red Swollen Leg',
        'Cardiomyopathy': 'Shortness of Breath and Fatigue'
    };
    
    /**
     * Normalize a category to its canonical form
     */
    function normalizeCategory(category) {
        if (!category) return 'Other';
        
        // Check for direct alias
        if (CATEGORY_ALIASES[category]) {
            return CATEGORY_ALIASES[category];
        }
        
        // Check for dual-specialty nesting
        if (DUAL_SPECIALTY_NESTING[category]) {
            return DUAL_SPECIALTY_NESTING[category].primary;
        }
        
        return category;
    }
    
    /**
     * Get subspecialty tag if this is a dual-specialty case
     */
    function getSubspecialtyTag(category) {
        if (!category) return null;
        
        const nesting = DUAL_SPECIALTY_NESTING[category];
        return nesting ? nesting.tag : null;
    }
    
    /**
     * Fix a case title if it reveals diagnosis or is undefined
     */
    function fixTitle(title) {
        if (!title || title === 'undefined' || title === 'NO TITLE') {
            return 'Clinical Case';
        }
        
        // Check for exact match fix
        if (TITLE_FIXES[title]) {
            return TITLE_FIXES[title];
        }
        
        // Check if title contains a diagnosis term (case insensitive)
        const lowerTitle = title.toLowerCase();
        for (const [diagnosis, replacement] of Object.entries(TITLE_FIXES)) {
            if (lowerTitle === diagnosis.toLowerCase()) {
                return replacement;
            }
        }
        
        return title;
    }
    
    /**
     * Get category icon
     */
    function getCategoryIcon(category) {
        const normalized = normalizeCategory(category);
        return CATEGORY_CONFIG[normalized]?.icon || '📋';
    }
    
    /**
     * Get category sort order
     */
    function getCategoryOrder(category) {
        const normalized = normalizeCategory(category);
        return CATEGORY_CONFIG[normalized]?.order || 99;
    }
    
    /**
     * Process a case object - normalize category and fix title
     */
    function processCase(caseObj) {
        const originalCategory = caseObj.category;
        const normalized = normalizeCategory(originalCategory);
        const subspecialty = getSubspecialtyTag(originalCategory);
        const fixedTitle = fixTitle(caseObj.title);
        
        return {
            ...caseObj,
            category: normalized,
            originalCategory: originalCategory,
            subspecialtyTag: subspecialty,
            title: fixedTitle,
            originalTitle: caseObj.title,
            icon: getCategoryIcon(normalized)
        };
    }
    
    /**
     * Group cases by normalized category
     */
    function groupCasesByCategory(cases) {
        const groups = {};
        
        cases.forEach(c => {
            const processed = processCase(c);
            const cat = processed.category;
            
            if (!groups[cat]) {
                groups[cat] = {
                    name: cat,
                    icon: getCategoryIcon(cat),
                    order: getCategoryOrder(cat),
                    cases: [],
                    subspecialties: {}
                };
            }
            
            groups[cat].cases.push(processed);
            
            // Track subspecialties
            if (processed.subspecialtyTag) {
                if (!groups[cat].subspecialties[processed.subspecialtyTag]) {
                    groups[cat].subspecialties[processed.subspecialtyTag] = [];
                }
                groups[cat].subspecialties[processed.subspecialtyTag].push(processed);
            }
        });
        
        // Sort groups by order
        return Object.values(groups).sort((a, b) => a.order - b.order);
    }
    
    // Public API
    return {
        normalizeCategory,
        getSubspecialtyTag,
        fixTitle,
        getCategoryIcon,
        getCategoryOrder,
        processCase,
        groupCasesByCategory,
        CATEGORY_CONFIG,
        CATEGORY_ALIASES,
        DUAL_SPECIALTY_NESTING,
        TITLE_FIXES
    };
    
})();

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DxCategorySystem;
}
