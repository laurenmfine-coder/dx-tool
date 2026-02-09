/**
 * ReasonDx Data Persistence Layer
 * Protects user progress during content updates
 * Auto-backs up data before changes, handles key migrations, version stamps everything
 */
(function() {
    if (window.RdxPersist) return;

    const PLATFORM_VERSION = '1.0.0';
    const BACKUP_PREFIX = 'rdx-backup-';
    const VERSION_KEY = 'rdx-platform-version';

    /**
     * Migration map: old key → new key
     * Add entries here when renaming localStorage keys
     */
    const KEY_MIGRATIONS = {
        // Example: 'old-quiz-progress': 'reasondx-quiz-progress'
    };

    /**
     * All known ReasonDx localStorage keys
     */
    const MANAGED_KEYS = [
        'reasondx-user',
        'reasondx-progress',
        'reasondx-preferences',
        'reasondx-spaced-rep',
        'reasondx-fingerprint',
        'reasondx-sessions',
        'reasondx-bookmarks',
        'reasondx-notes',
        'reasondx-theme'
    ];

    function getAllRdxKeys() {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key.startsWith('reasondx-') || key.startsWith('rdx-') || MANAGED_KEYS.includes(key))) {
                keys.push(key);
            }
        }
        return keys;
    }

    function backupAll() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backup = {};
        const keys = getAllRdxKeys();

        keys.forEach(key => {
            try {
                backup[key] = localStorage.getItem(key);
            } catch(e) {}
        });

        try {
            localStorage.setItem(BACKUP_PREFIX + timestamp, JSON.stringify(backup));
        } catch(e) {
            console.warn('RdxPersist: Backup failed', e);
        }

        // Keep only last 5 backups
        const backupKeys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.startsWith(BACKUP_PREFIX)) backupKeys.push(k);
        }
        backupKeys.sort();
        while (backupKeys.length > 5) {
            localStorage.removeItem(backupKeys.shift());
        }

        return backup;
    }

    function runMigrations() {
        for (const [oldKey, newKey] of Object.entries(KEY_MIGRATIONS)) {
            const oldVal = localStorage.getItem(oldKey);
            if (oldVal && !localStorage.getItem(newKey)) {
                localStorage.setItem(newKey, oldVal);
                localStorage.removeItem(oldKey);
                console.log(`RdxPersist: Migrated ${oldKey} → ${newKey}`);
            }
        }
    }

    function checkVersion() {
        const stored = localStorage.getItem(VERSION_KEY);
        if (stored !== PLATFORM_VERSION) {
            console.log(`RdxPersist: Platform updated ${stored || 'unknown'} → ${PLATFORM_VERSION}`);
            backupAll();
            runMigrations();
            localStorage.setItem(VERSION_KEY, PLATFORM_VERSION);
        }
    }

    window.RdxPersist = {
        version: PLATFORM_VERSION,

        /**
         * Initialize persistence (call on page load)
         */
        init: function() {
            checkVersion();
        },

        /**
         * Create a manual backup
         */
        backup: function() {
            return backupAll();
        },

        /**
         * Restore from a specific backup
         * @param {string} backupKey - the backup timestamp key
         */
        restore: function(backupKey) {
            try {
                const raw = localStorage.getItem(BACKUP_PREFIX + backupKey);
                if (!raw) return false;
                const data = JSON.parse(raw);
                for (const [key, val] of Object.entries(data)) {
                    localStorage.setItem(key, val);
                }
                return true;
            } catch(e) {
                console.error('RdxPersist: Restore failed', e);
                return false;
            }
        },

        /**
         * List available backups
         */
        listBackups: function() {
            const backups = [];
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.startsWith(BACKUP_PREFIX)) {
                    backups.push(k.replace(BACKUP_PREFIX, ''));
                }
            }
            return backups.sort().reverse();
        },

        /**
         * Export all user data as JSON
         */
        exportData: function() {
            const data = {};
            getAllRdxKeys().forEach(key => {
                try {
                    data[key] = JSON.parse(localStorage.getItem(key));
                } catch(e) {
                    data[key] = localStorage.getItem(key);
                }
            });
            return data;
        },

        /**
         * Import user data from JSON
         */
        importData: function(data) {
            backupAll(); // Safety backup before import
            for (const [key, val] of Object.entries(data)) {
                try {
                    localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
                } catch(e) {
                    console.warn('RdxPersist: Failed to import key', key, e);
                }
            }
            return true;
        },

        /**
         * Add a key migration for the next update
         */
        _migrateKey: function(oldKey, newKey) {
            KEY_MIGRATIONS[oldKey] = newKey;
            runMigrations();
        },

        /**
         * Reset all ReasonDx data (keeps backups)
         */
        reset: function() {
            backupAll();
            getAllRdxKeys().forEach(key => {
                if (!key.startsWith(BACKUP_PREFIX)) {
                    localStorage.removeItem(key);
                }
            });
        }
    };

    // Auto-init
    window.RdxPersist.init();
    console.log('RdxPersist initialized (v' + PLATFORM_VERSION + ')');
})();
