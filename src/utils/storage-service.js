/**
 * ReasonDx Virtual Hospital - Storage Service
 * 
 * Handles persistence using IndexedDB for offline-capable storage.
 * Manages users, hospitals, patients, and case history.
 */

import { openDB } from 'idb';

const DB_NAME = 'reasondx-virtual-hospital';
const DB_VERSION = 1;

let db = null;

/**
 * Initialize the database
 * @returns {Promise<IDBDatabase>}
 */
export async function initDB() {
  if (db) return db;
  
  db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(database, oldVersion, newVersion, transaction) {
      // Users store
      if (!database.objectStoreNames.contains('users')) {
        const userStore = database.createObjectStore('users', { keyPath: 'id' });
        userStore.createIndex('email', 'email', { unique: true });
      }
      
      // Hospitals store
      if (!database.objectStoreNames.contains('hospitals')) {
        const hospitalStore = database.createObjectStore('hospitals', { keyPath: 'id' });
        hospitalStore.createIndex('ownerId', 'ownerId');
      }
      
      // Patients store
      if (!database.objectStoreNames.contains('patients')) {
        const patientStore = database.createObjectStore('patients', { keyPath: 'id' });
        patientStore.createIndex('hospitalId', 'hospitalId');
        patientStore.createIndex('status', 'status');
      }
      
      // Notes store
      if (!database.objectStoreNames.contains('notes')) {
        const noteStore = database.createObjectStore('notes', { keyPath: 'id' });
        noteStore.createIndex('patientId', 'patientId');
        noteStore.createIndex('authorId', 'author.userId');
      }
      
      // Case history store (for tracking seen variants)
      if (!database.objectStoreNames.contains('caseHistory')) {
        const historyStore = database.createObjectStore('caseHistory', { keyPath: 'id', autoIncrement: true });
        historyStore.createIndex('userId', 'userId');
        historyStore.createIndex('presentationId', 'presentationId');
      }
    }
  });
  
  return db;
}

// === User Operations ===

/**
 * Create or update a user
 * @param {Object} user - User data
 * @returns {Promise<string>} User ID
 */
export async function saveUser(user) {
  const database = await initDB();
  await database.put('users', {
    ...user,
    lastActiveAt: new Date().toISOString()
  });
  return user.id;
}

/**
 * Get a user by ID
 * @param {string} id - User ID
 * @returns {Promise<Object|undefined>} User or undefined
 */
export async function getUser(id) {
  const database = await initDB();
  return database.get('users', id);
}

/**
 * Get user by email
 * @param {string} email - User email
 * @returns {Promise<Object|undefined>} User or undefined
 */
export async function getUserByEmail(email) {
  const database = await initDB();
  return database.getFromIndex('users', 'email', email);
}

/**
 * Get current user (most recently active)
 * @returns {Promise<Object|undefined>} User or undefined
 */
export async function getCurrentUser() {
  const database = await initDB();
  const users = await database.getAll('users');
  if (users.length === 0) return undefined;
  
  // Return most recently active
  return users.sort((a, b) => 
    new Date(b.lastActiveAt) - new Date(a.lastActiveAt)
  )[0];
}

// === Hospital Operations ===

/**
 * Create or update a hospital
 * @param {Object} hospital - Hospital data
 * @returns {Promise<string>} Hospital ID
 */
export async function saveHospital(hospital) {
  const database = await initDB();
  await database.put('hospitals', {
    ...hospital,
    lastUpdatedAt: new Date().toISOString()
  });
  return hospital.id;
}

/**
 * Get a hospital by ID
 * @param {string} id - Hospital ID
 * @returns {Promise<Object|undefined>} Hospital or undefined
 */
export async function getHospital(id) {
  const database = await initDB();
  return database.get('hospitals', id);
}

/**
 * Get hospital for a user
 * @param {string} userId - User ID
 * @returns {Promise<Object|undefined>} Hospital or undefined
 */
export async function getHospitalForUser(userId) {
  const database = await initDB();
  const hospitals = await database.getAllFromIndex('hospitals', 'ownerId', userId);
  return hospitals[0]; // Return first (should only be one per user for now)
}

// === Patient Operations ===

/**
 * Create or update a patient
 * @param {Object} patient - Patient data
 * @returns {Promise<string>} Patient ID
 */
export async function savePatient(patient) {
  const database = await initDB();
  await database.put('patients', patient);
  return patient.id;
}

/**
 * Get a patient by ID
 * @param {string} id - Patient ID
 * @returns {Promise<Object|undefined>} Patient or undefined
 */
export async function getPatient(id) {
  const database = await initDB();
  return database.get('patients', id);
}

/**
 * Get all patients in a hospital
 * @param {string} hospitalId - Hospital ID
 * @returns {Promise<Object[]>} Array of patients
 */
export async function getPatientsInHospital(hospitalId) {
  const database = await initDB();
  return database.getAllFromIndex('patients', 'hospitalId', hospitalId);
}

/**
 * Get patients by status
 * @param {string} status - Patient status
 * @returns {Promise<Object[]>} Array of patients
 */
export async function getPatientsByStatus(status) {
  const database = await initDB();
  return database.getAllFromIndex('patients', 'status', status);
}

/**
 * Delete a patient
 * @param {string} id - Patient ID
 * @returns {Promise<void>}
 */
export async function deletePatient(id) {
  const database = await initDB();
  await database.delete('patients', id);
}

// === Note Operations ===

/**
 * Create or update a note
 * @param {Object} note - Note data
 * @returns {Promise<string>} Note ID
 */
export async function saveNote(note) {
  const database = await initDB();
  await database.put('notes', note);
  return note.id;
}

/**
 * Get notes for a patient
 * @param {string} patientId - Patient ID
 * @returns {Promise<Object[]>} Array of notes
 */
export async function getNotesForPatient(patientId) {
  const database = await initDB();
  return database.getAllFromIndex('notes', 'patientId', patientId);
}

/**
 * Get notes by author
 * @param {string} authorId - Author user ID
 * @returns {Promise<Object[]>} Array of notes
 */
export async function getNotesByAuthor(authorId) {
  const database = await initDB();
  return database.getAllFromIndex('notes', 'authorId', authorId);
}

// === Case History Operations ===

/**
 * Record that a user has seen a case variant
 * @param {string} userId - User ID
 * @param {string} presentationId - Presentation ID
 * @param {string} variantId - Variant ID
 * @returns {Promise<void>}
 */
export async function recordCaseSeen(userId, presentationId, variantId) {
  const database = await initDB();
  await database.add('caseHistory', {
    userId,
    presentationId,
    variantId,
    completedAt: new Date().toISOString()
  });
}

/**
 * Get variants a user has seen for a presentation
 * @param {string} userId - User ID
 * @param {string} presentationId - Presentation ID
 * @returns {Promise<string[]>} Array of variant IDs
 */
export async function getSeenVariants(userId, presentationId) {
  const database = await initDB();
  const allHistory = await database.getAllFromIndex('caseHistory', 'userId', userId);
  return allHistory
    .filter(h => h.presentationId === presentationId)
    .map(h => h.variantId);
}

/**
 * Get all presentations a user has seen
 * @param {string} userId - User ID
 * @returns {Promise<Object>} Map of presentationId -> variantIds[]
 */
export async function getAllSeenPresentations(userId) {
  const database = await initDB();
  const allHistory = await database.getAllFromIndex('caseHistory', 'userId', userId);
  
  const seen = {};
  for (const h of allHistory) {
    if (!seen[h.presentationId]) {
      seen[h.presentationId] = [];
    }
    if (!seen[h.presentationId].includes(h.variantId)) {
      seen[h.presentationId].push(h.variantId);
    }
  }
  
  return seen;
}

// === Utility Functions ===

/**
 * Clear all data (for testing/reset)
 * @returns {Promise<void>}
 */
export async function clearAllData() {
  const database = await initDB();
  const tx = database.transaction(['users', 'hospitals', 'patients', 'notes', 'caseHistory'], 'readwrite');
  
  await Promise.all([
    tx.objectStore('users').clear(),
    tx.objectStore('hospitals').clear(),
    tx.objectStore('patients').clear(),
    tx.objectStore('notes').clear(),
    tx.objectStore('caseHistory').clear(),
  ]);
  
  await tx.done;
}

/**
 * Export all data (for backup)
 * @returns {Promise<Object>} All data
 */
export async function exportAllData() {
  const database = await initDB();
  
  return {
    users: await database.getAll('users'),
    hospitals: await database.getAll('hospitals'),
    patients: await database.getAll('patients'),
    notes: await database.getAll('notes'),
    caseHistory: await database.getAll('caseHistory'),
    exportedAt: new Date().toISOString()
  };
}

/**
 * Import data (for restore)
 * @param {Object} data - Data to import
 * @returns {Promise<void>}
 */
export async function importData(data) {
  const database = await initDB();
  const tx = database.transaction(['users', 'hospitals', 'patients', 'notes', 'caseHistory'], 'readwrite');
  
  for (const user of data.users || []) {
    await tx.objectStore('users').put(user);
  }
  for (const hospital of data.hospitals || []) {
    await tx.objectStore('hospitals').put(hospital);
  }
  for (const patient of data.patients || []) {
    await tx.objectStore('patients').put(patient);
  }
  for (const note of data.notes || []) {
    await tx.objectStore('notes').put(note);
  }
  for (const history of data.caseHistory || []) {
    await tx.objectStore('caseHistory').put(history);
  }
  
  await tx.done;
}

export default {
  initDB,
  saveUser,
  getUser,
  getUserByEmail,
  getCurrentUser,
  saveHospital,
  getHospital,
  getHospitalForUser,
  savePatient,
  getPatient,
  getPatientsInHospital,
  getPatientsByStatus,
  deletePatient,
  saveNote,
  getNotesForPatient,
  getNotesByAuthor,
  recordCaseSeen,
  getSeenVariants,
  getAllSeenPresentations,
  clearAllData,
  exportAllData,
  importData
};
