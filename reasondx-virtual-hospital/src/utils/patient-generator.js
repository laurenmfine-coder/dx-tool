/**
 * ReasonDx Virtual Hospital - Patient Generator
 * 
 * Generates patient instances from case templates.
 * Handles variant selection, demographic randomization, and user history tracking.
 */

/**
 * Generate a new patient from available case templates
 * @param {Object} user - Current user with history
 * @param {Object} hospital - Current hospital state
 * @param {Object} constraints - Optional constraints (acuity, rotation, etc.)
 * @returns {Object} Generated patient instance
 */
export async function generatePatient(user, hospital, constraints = {}) {
  // TODO: Implement
  // 1. Load available case templates
  // 2. Filter by rotation (user.currentRotation)
  // 3. Filter out variants user has already seen
  // 4. Apply acuity constraints if specified
  // 5. Randomly select presentation and variant
  // 6. Generate demographics
  // 7. Create patient instance with EMR
  // 8. Track variant in user history
  // 9. Add to hospital census
  
  throw new Error('Not implemented');
}

/**
 * Load all case templates from the data directory
 * @returns {Object[]} Array of case templates
 */
export async function loadCaseTemplates() {
  // TODO: Implement - load from /src/data/cases/
  throw new Error('Not implemented');
}

/**
 * Get unseen variants for a user
 * @param {Object} user - User with presentationsSeen history
 * @param {Object[]} templates - Available case templates
 * @returns {Object[]} Variants user hasn't seen
 */
export function getUnseenVariants(user, templates) {
  const unseen = [];
  
  for (const template of templates) {
    const seenVariants = user.presentationsSeen?.[template.id] || [];
    
    for (const variant of template.variants) {
      if (!seenVariants.includes(variant.id)) {
        unseen.push({
          template,
          variant,
          presentationId: template.id,
          variantId: variant.id
        });
      }
    }
  }
  
  return unseen;
}

/**
 * Generate random demographics from template ranges
 * @param {Object} template - Case template with demographics config
 * @returns {Object} Generated demographics
 */
export function generateDemographics(template) {
  const demo = template.demographics;
  
  // Random age within range
  const age = randomInt(demo.ageRange[0], demo.ageRange[1]);
  
  // Gender based on distribution
  const gender = Math.random() < demo.genderDistribution.male ? 'male' : 'female';
  
  // Random name
  const nameOptions = demo.nameOptions[gender];
  const name = nameOptions[randomInt(0, nameOptions.length - 1)];
  
  // Generate MRN
  const mrn = generateMRN();
  
  // Calculate DOB from age
  const dob = calculateDOB(age);
  
  return {
    name,
    age,
    gender,
    mrn,
    dob,
    insurance: randomInsurance(),
    emergencyContact: generateEmergencyContact()
  };
}

/**
 * Generate an EMR from template clinical facts
 * @param {Object} selected - Selected template and variant
 * @param {Object} demographics - Generated demographics
 * @returns {Object} Generated EMR
 */
export function generateEMR(selected, demographics) {
  const { template, variant } = selected;
  const cf = variant.clinicalFacts;
  
  return {
    patientId: null, // Set when patient created
    
    // From template
    problemList: cf.pmh.map(p => ({ name: p, status: 'Active' })),
    medications: cf.medications,
    allergies: cf.allergies,
    socialHistory: cf.socialHistory,
    familyHistory: cf.familyHistory,
    
    // Empty - will accumulate
    encounters: [],
    notes: [],
    orders: [],
    results: [],
    vitals: [variant.physicalExam.vitalSigns],
    io: [],
    
    // Current encounter placeholder
    currentEncounter: null,
    currentOrders: [],
    currentMedications: cf.medications.map(m => ({
      ...m,
      route: 'PO',
      status: 'Home Med'
    }))
  };
}

// === Helper Functions ===

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMRN() {
  return String(randomInt(100000, 999999));
}

function calculateDOB(age) {
  const now = new Date();
  const birthYear = now.getFullYear() - age;
  const month = String(randomInt(1, 12)).padStart(2, '0');
  const day = String(randomInt(1, 28)).padStart(2, '0');
  return `${month}/${day}/${birthYear}`;
}

function randomInsurance() {
  const options = ['Blue Cross', 'Aetna', 'United Healthcare', 'Medicare', 'Medicaid', 'Cigna'];
  return options[randomInt(0, options.length - 1)];
}

function generateEmergencyContact() {
  const relations = ['Spouse', 'Daughter', 'Son', 'Sister', 'Brother', 'Parent'];
  return {
    name: 'Emergency Contact',
    relation: relations[randomInt(0, relations.length - 1)],
    phone: `(${randomInt(200, 999)}) ${randomInt(200, 999)}-${randomInt(1000, 9999)}`
  };
}

export default {
  generatePatient,
  loadCaseTemplates,
  getUnseenVariants,
  generateDemographics,
  generateEMR
};
