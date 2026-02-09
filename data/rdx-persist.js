/**
 * ReasonDx Data Persistence Layer
 * ================================
 * Wraps localStorage with:
 *  - Version stamping (detects content updates)
 *  - Automatic backup before migrations
 *  - Schema migration hooks
 *  - Export/import for user data portability
 *  - Graceful handling of stale/orphaned keys
 * 
 * Include this BEFORE any module scripts:
 *   <script src="/data/rdx-persist.js"></script>
 */

(function(window) {
  'use strict';

  // ============================================================
  // CONFIGURATION
  // ============================================================
  const PLATFORM_VERSION = '2.0';       // Bump when content changes
  const SCHEMA_VERSION = 1;             // Bump when storage format changes
  const VERSION_KEY = 'rdx_platform_version';
  const SCHEMA_KEY = 'rdx_schema_version';
  const BACKUP_PREFIX = 'rdx_backup_';
  const LAST_BACKUP_KEY = 'rdx_last_backup';
  const MIGRATION_LOG_KEY = 'rdx_migration_log';

  // Keys that contain USER PROGRESS (must survive content updates)
  const PROGRESS_KEYS = [
    'crtScores',
    'dx-progress',
    'reasondx-progress',
    'reasondx_case_progress',
    'mechanismDxHistory',
    'mechanismdx_progress',
    'boardPrepHistory',
    'dxTrainingLevel',
    'reasondx_learner_level',
    'clinicalReasoningPlayerData',
    'clinicalReasoningUnlockedCases',
    'clinicalReasoningTeamNames',
    'osceBookmarks',
    'osceSpacedRep',
    'osceLastPlayed',
    'osceInterruptions',
    'osceDismissedTips',
    'osceLastInterrupt',
    'savedInterruptions',
    'boardPrepSystems',
    'reasondx_feedback',
    'coachdx_sessions',
  ];

  // Keys that are SETTINGS (survive content updates)
  const SETTINGS_KEYS = [
    'dx-theme',
    'theme',
    'viewMode',
    'reasondx_facilitator_mode',
    'selectedProfession',
    'dxSpecialty',
    'dxsuite-tour-completed',
    'reasondx_profile_completed',
    'osceOnboardingComplete',
    'reasondx_student_code',
  ];

  // Keys that are AUTH (survive content updates)
  const AUTH_KEYS = [
    'reasondx-user',
  ];

  // Keys with dynamic suffixes (matched by prefix)
  const DYNAMIC_PREFIXES = [
    'moduleScore_',
    'crt-score-',
    'rdx-xp-',
  ];

  // ALL protected keys (progress + settings + auth)
  const PROTECTED_KEYS = [...PROGRESS_KEYS, ...SETTINGS_KEYS, ...AUTH_KEYS];

  // ============================================================
  // CORE: RdxPersist object
  // ============================================================
  const RdxPersist = {

    /** Initialize on page load — checks version, runs migrations if needed */
    init: function() {
      const storedVersion = localStorage.getItem(VERSION_KEY);
      const storedSchema = parseInt(localStorage.getItem(SCHEMA_KEY) || '0');

      // First-time user
      if (!storedVersion) {
        localStorage.setItem(VERSION_KEY, PLATFORM_VERSION);
        localStorage.setItem(SCHEMA_KEY, String(SCHEMA_VERSION));
        this._log('init', 'First-time setup: v' + PLATFORM_VERSION);
        return;
      }

      // Version changed — content update detected
      if (storedVersion !== PLATFORM_VERSION) {
        console.log('[RdxPersist] Content update detected: v' + storedVersion + ' → v' + PLATFORM_VERSION);
        this._onContentUpdate(storedVersion, PLATFORM_VERSION);
        localStorage.setItem(VERSION_KEY, PLATFORM_VERSION);
      }

      // Schema changed — structural migration needed
      if (storedSchema < SCHEMA_VERSION) {
        console.log('[RdxPersist] Schema migration: v' + storedSchema + ' → v' + SCHEMA_VERSION);
        this._onSchemaMigration(storedSchema, SCHEMA_VERSION);
        localStorage.setItem(SCHEMA_KEY, String(SCHEMA_VERSION));
      }
    },

    // ============================================================
    // BACKUP & RESTORE
    // ============================================================

    /** Create a full backup of all user data */
    backup: function() {
      const snapshot = {};
      const allKeys = this._getAllProtectedKeys();

      allKeys.forEach(function(key) {
        const val = localStorage.getItem(key);
        if (val !== null) {
          snapshot[key] = val;
        }
      });

      const backupData = {
        timestamp: new Date().toISOString(),
        platformVersion: PLATFORM_VERSION,
        schemaVersion: SCHEMA_VERSION,
        keyCount: Object.keys(snapshot).length,
        data: snapshot
      };

      const backupKey = BACKUP_PREFIX + Date.now();
      localStorage.setItem(backupKey, JSON.stringify(backupData));
      localStorage.setItem(LAST_BACKUP_KEY, backupKey);

      // Keep max 3 backups
      this._pruneBackups(3);

      this._log('backup', 'Created backup with ' + backupData.keyCount + ' keys');
      return backupData;
    },

    /** Restore from the most recent backup */
    restore: function(backupKey) {
      backupKey = backupKey || localStorage.getItem(LAST_BACKUP_KEY);
      if (!backupKey) {
        console.warn('[RdxPersist] No backup found');
        return false;
      }

      const raw = localStorage.getItem(backupKey);
      if (!raw) {
        console.warn('[RdxPersist] Backup data missing: ' + backupKey);
        return false;
      }

      try {
        const backup = JSON.parse(raw);
        const data = backup.data || {};
        let restored = 0;

        Object.keys(data).forEach(function(key) {
          localStorage.setItem(key, data[key]);
          restored++;
        });

        this._log('restore', 'Restored ' + restored + ' keys from ' + backup.timestamp);
        console.log('[RdxPersist] Restored ' + restored + ' keys from backup');
        return true;
      } catch (e) {
        console.error('[RdxPersist] Restore failed:', e);
        return false;
      }
    },

    // ============================================================
    // EXPORT & IMPORT (user-facing data portability)
    // ============================================================

    /** Export all user data as a downloadable JSON file */
    exportData: function() {
      const exportObj = {
        exportDate: new Date().toISOString(),
        platform: 'ReasonDx',
        platformVersion: PLATFORM_VERSION,
        userData: {}
      };

      // Gather all protected keys + dynamic keys
      const allKeys = this._getAllProtectedKeys();
      allKeys.forEach(function(key) {
        const val = localStorage.getItem(key);
        if (val !== null) {
          try {
            exportObj.userData[key] = JSON.parse(val);
          } catch (e) {
            exportObj.userData[key] = val;
          }
        }
      });

      // Create download
      const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reasondx-progress-' + new Date().toISOString().slice(0,10) + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      this._log('export', 'Exported ' + Object.keys(exportObj.userData).length + ' keys');
      return exportObj;
    },

    /** Import user data from a JSON file */
    importData: function(file) {
      var self = this;
      return new Promise(function(resolve, reject) {
        const reader = new FileReader();
        reader.onload = function(e) {
          try {
            const importObj = JSON.parse(e.target.result);

            if (!importObj.userData || importObj.platform !== 'ReasonDx') {
              reject(new Error('Invalid ReasonDx export file'));
              return;
            }

            // Backup current data first
            self.backup();

            // Import
            let imported = 0;
            Object.keys(importObj.userData).forEach(function(key) {
              const val = importObj.userData[key];
              localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
              imported++;
            });

            self._log('import', 'Imported ' + imported + ' keys from v' + importObj.platformVersion);
            resolve({ imported: imported, fromVersion: importObj.platformVersion });
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = function() { reject(new Error('File read failed')); };
        reader.readAsText(file);
      });
    },

    // ============================================================
    // SAFE STORAGE WRAPPERS
    // ============================================================

    /** Get a value with type safety and default */
    get: function(key, defaultValue) {
      try {
        const raw = localStorage.getItem(key);
        if (raw === null) return defaultValue;
        return JSON.parse(raw);
      } catch (e) {
        return localStorage.getItem(key) || defaultValue;
      }
    },

    /** Set a value with automatic JSON serialization */
    set: function(key, value) {
      try {
        localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
        return true;
      } catch (e) {
        console.error('[RdxPersist] Storage full or unavailable:', e);
        return false;
      }
    },

    /** Get user progress summary */
    getProgressSummary: function() {
      var self = this;
      const summary = {
        xp: {},
        modulesCompleted: [],
        crtsCompleted: [],
        quizScores: {},
        totalKeys: 0
      };

      // CRT scores
      try {
        const crtRaw = localStorage.getItem('crtScores');
        if (crtRaw) {
          summary.crtsCompleted = JSON.parse(crtRaw);
        }
      } catch (e) {}

      // Dynamic XP keys
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('rdx-xp-')) {
          summary.xp[key.replace('rdx-xp-', '')] = localStorage.getItem(key);
        }
        if (key && key.startsWith('moduleScore_')) {
          summary.quizScores[key.replace('moduleScore_', '')] = localStorage.getItem(key);
        }
        if (key && key.startsWith('crt-score-')) {
          summary.quizScores[key] = localStorage.getItem(key);
        }
      }

      // Progress objects
      ['dx-progress', 'reasondx-progress', 'reasondx_case_progress', 'mechanismdx_progress'].forEach(function(pk) {
        const val = self.get(pk);
        if (val && typeof val === 'object') {
          Object.keys(val).forEach(function(k) {
            if (val[k] === true || val[k] === 'completed') {
              summary.modulesCompleted.push(k);
            }
          });
        }
      });

      summary.totalKeys = this._getAllProtectedKeys().filter(function(k) {
        return localStorage.getItem(k) !== null;
      }).length;

      return summary;
    },

    // ============================================================
    // MIGRATION HANDLERS
    // ============================================================

    /** Called when platform content version changes (new modules, updated quiz bank, etc.) */
    _onContentUpdate: function(oldVersion, newVersion) {
      // Step 1: Auto-backup
      this.backup();

      // Step 2: Content-specific migrations
      // When you rename/move content, add a migration here:
      
      // Example: if a module was renamed
      // this._migrateKey('moduleScore_old-name', 'moduleScore_new-name');
      
      // Example: if quiz bank was reindexed, remap stored question references
      // this._migrateQuizReferences(oldVersion, newVersion);

      // Step 3: Clean stale cache (non-progress keys)
      // Don't touch progress, settings, or auth — only quiz cache
      const staleKeys = ['reasondx_unmatched_questions'];
      staleKeys.forEach(function(key) {
        localStorage.removeItem(key);
      });

      this._log('content_update', 'Migrated from v' + oldVersion + ' to v' + newVersion);
    },

    /** Called when storage schema version changes */
    _onSchemaMigration: function(oldSchema, newSchema) {
      this.backup();

      // Add schema-specific migrations here as needed:
      // if (oldSchema < 2) { ... migrate from schema 1 to 2 ... }

      this._log('schema_migration', 'Schema v' + oldSchema + ' → v' + newSchema);
    },

    /** Rename a localStorage key (preserving data) */
    _migrateKey: function(oldKey, newKey) {
      const val = localStorage.getItem(oldKey);
      if (val !== null) {
        localStorage.setItem(newKey, val);
        localStorage.removeItem(oldKey);
        this._log('key_migrate', oldKey + ' → ' + newKey);
      }
    },

    // ============================================================
    // INTERNAL HELPERS
    // ============================================================

    /** Get all protected keys (including dynamic-prefix matches) */
    _getAllProtectedKeys: function() {
      const keys = new Set(PROTECTED_KEYS);

      // Add dynamic-prefix keys
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          DYNAMIC_PREFIXES.forEach(function(prefix) {
            if (key.startsWith(prefix)) {
              keys.add(key);
            }
          });
          // Also capture backup keys
          if (key.startsWith(BACKUP_PREFIX)) {
            keys.add(key);
          }
        }
      }

      return Array.from(keys);
    },

    /** Keep only the N most recent backups */
    _pruneBackups: function(keepCount) {
      const backupKeys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(BACKUP_PREFIX)) {
          backupKeys.push(key);
        }
      }

      if (backupKeys.length > keepCount) {
        backupKeys.sort();
        const toRemove = backupKeys.slice(0, backupKeys.length - keepCount);
        toRemove.forEach(function(key) {
          localStorage.removeItem(key);
        });
      }
    },

    /** Append to migration log */
    _log: function(action, detail) {
      try {
        var log = JSON.parse(localStorage.getItem(MIGRATION_LOG_KEY) || '[]');
        log.push({
          action: action,
          detail: detail,
          timestamp: new Date().toISOString(),
          version: PLATFORM_VERSION
        });
        // Keep last 50 entries
        if (log.length > 50) log = log.slice(-50);
        localStorage.setItem(MIGRATION_LOG_KEY, JSON.stringify(log));
      } catch (e) { /* silently fail */ }
    },

    /** Get the migration log (for debugging) */
    getMigrationLog: function() {
      try {
        return JSON.parse(localStorage.getItem(MIGRATION_LOG_KEY) || '[]');
      } catch (e) {
        return [];
      }
    },

    /** Nuclear option: clear all non-auth data (for support/debugging) */
    resetProgress: function(confirmReset) {
      if (confirmReset !== 'CONFIRM_RESET') {
        console.warn('[RdxPersist] Call resetProgress("CONFIRM_RESET") to confirm');
        return false;
      }

      // Backup first!
      this.backup();

      // Clear progress and quiz keys only (keep auth and settings)
      PROGRESS_KEYS.forEach(function(key) {
        localStorage.removeItem(key);
      });

      // Clear dynamic keys
      const toRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          DYNAMIC_PREFIXES.forEach(function(prefix) {
            if (key.startsWith(prefix)) {
              toRemove.push(key);
            }
          });
        }
      }
      toRemove.forEach(function(key) {
        localStorage.removeItem(key);
      });

      this._log('reset', 'Progress reset by user');
      return true;
    }
  };

  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { RdxPersist.init(); });
  } else {
    RdxPersist.init();
  }

  // Expose globally
  window.RdxPersist = RdxPersist;

})(window);
