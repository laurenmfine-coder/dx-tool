/**
 * DxStorage — Persistence layer for ReasonDx tools
 * 
 * Provides a consistent API for all tools to save/load/list/delete data.
 * Currently backed by localStorage; designed for easy migration to 
 * IndexedDB or a server API later.
 * 
 * Usage:
 *   DxStorage.save('bookmarks', 'bk-001', { title: '...', url: '...' });
 *   DxStorage.load('bookmarks', 'bk-001');
 *   DxStorage.list('bookmarks');
 *   DxStorage.remove('bookmarks', 'bk-001');
 *   DxStorage.clear('bookmarks');
 * 
 * Data is namespaced per tool: dx-{tool}-{key}
 */

(function(global) {
    'use strict';

    const PREFIX = 'dx-';
    const META_KEY = PREFIX + 'storage-meta';

    const DxStorage = {
        /**
         * Save data for a tool
         * @param {string} tool - Tool namespace (e.g., 'bookmarks', 'flashcards', 'notes', 'planner')
         * @param {string} key - Item key (e.g., 'bk-001', 'deck-cardiology')
         * @param {*} data - Any JSON-serializable data
         * @returns {boolean} Success
         */
        save: function(tool, key, data) {
            try {
                const storageKey = PREFIX + tool + '-' + key;
                const wrapped = {
                    data: data,
                    tool: tool,
                    key: key,
                    createdAt: this._getExisting(storageKey)?.createdAt || new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };
                localStorage.setItem(storageKey, JSON.stringify(wrapped));
                this._updateIndex(tool, key, 'add');
                return true;
            } catch (e) {
                console.error('[DxStorage] Save failed:', e);
                return false;
            }
        },

        /**
         * Load data for a tool
         * @param {string} tool - Tool namespace
         * @param {string} key - Item key
         * @returns {*} The stored data, or null if not found
         */
        load: function(tool, key) {
            try {
                const storageKey = PREFIX + tool + '-' + key;
                const raw = localStorage.getItem(storageKey);
                if (!raw) return null;
                const parsed = JSON.parse(raw);
                return parsed.data;
            } catch (e) {
                console.error('[DxStorage] Load failed:', e);
                return null;
            }
        },

        /**
         * Load with metadata (createdAt, updatedAt)
         */
        loadFull: function(tool, key) {
            try {
                const storageKey = PREFIX + tool + '-' + key;
                const raw = localStorage.getItem(storageKey);
                if (!raw) return null;
                return JSON.parse(raw);
            } catch (e) {
                return null;
            }
        },

        /**
         * List all keys for a tool
         * @param {string} tool - Tool namespace
         * @returns {string[]} Array of keys
         */
        list: function(tool) {
            try {
                const index = this._getIndex();
                return index[tool] || [];
            } catch (e) {
                console.error('[DxStorage] List failed:', e);
                return [];
            }
        },

        /**
         * List all items for a tool (full data)
         * @param {string} tool - Tool namespace
         * @returns {Array} Array of {key, data, createdAt, updatedAt}
         */
        listAll: function(tool) {
            const keys = this.list(tool);
            return keys.map(key => this.loadFull(tool, key)).filter(Boolean);
        },

        /**
         * Remove a specific item
         * @param {string} tool - Tool namespace
         * @param {string} key - Item key
         * @returns {boolean} Success
         */
        remove: function(tool, key) {
            try {
                const storageKey = PREFIX + tool + '-' + key;
                localStorage.removeItem(storageKey);
                this._updateIndex(tool, key, 'remove');
                return true;
            } catch (e) {
                console.error('[DxStorage] Remove failed:', e);
                return false;
            }
        },

        /**
         * Clear all data for a tool
         * @param {string} tool - Tool namespace
         * @returns {boolean} Success
         */
        clear: function(tool) {
            try {
                const keys = this.list(tool);
                keys.forEach(key => {
                    localStorage.removeItem(PREFIX + tool + '-' + key);
                });
                const index = this._getIndex();
                delete index[tool];
                localStorage.setItem(META_KEY, JSON.stringify(index));
                return true;
            } catch (e) {
                console.error('[DxStorage] Clear failed:', e);
                return false;
            }
        },

        /**
         * Count items for a tool
         * @param {string} tool - Tool namespace
         * @returns {number}
         */
        count: function(tool) {
            return this.list(tool).length;
        },

        /**
         * Check if a key exists
         */
        exists: function(tool, key) {
            return localStorage.getItem(PREFIX + tool + '-' + key) !== null;
        },

        /**
         * Get storage stats across all tools
         */
        stats: function() {
            const index = this._getIndex();
            const result = {};
            for (const [tool, keys] of Object.entries(index)) {
                result[tool] = keys.length;
            }
            return result;
        },

        /**
         * Generate a unique ID
         */
        generateId: function(prefix) {
            prefix = prefix || 'item';
            return prefix + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6);
        },

        // ─── INTERNAL ─────────────────────────────────
        _getIndex: function() {
            try {
                const raw = localStorage.getItem(META_KEY);
                return raw ? JSON.parse(raw) : {};
            } catch (e) {
                return {};
            }
        },

        _updateIndex: function(tool, key, action) {
            const index = this._getIndex();
            if (!index[tool]) index[tool] = [];
            if (action === 'add' && !index[tool].includes(key)) {
                index[tool].push(key);
            } else if (action === 'remove') {
                index[tool] = index[tool].filter(k => k !== key);
            }
            localStorage.setItem(META_KEY, JSON.stringify(index));
        },

        _getExisting: function(storageKey) {
            try {
                const raw = localStorage.getItem(storageKey);
                return raw ? JSON.parse(raw) : null;
            } catch (e) {
                return null;
            }
        }
    };

    // ─── BOOKMARKS API ────────────────────────────────
    // Convenience wrapper for use by other tools:
    //   window.DxBookmarks.add({ title, url, type, source, tags })
    //   window.DxBookmarks.remove(id)
    //   window.DxBookmarks.list()
    //   window.DxBookmarks.getBySource(source)
    const DxBookmarks = {
        add: function(item) {
            const id = DxStorage.generateId('bk');
            const bookmark = {
                id: id,
                title: item.title || 'Untitled',
                url: item.url || '',
                type: item.type || 'general', // 'deep-dive', 'crt-case', 'mechanism', 'general'
                source: item.source || '',     // e.g., 'deep-dive-cardiology-q12'
                tags: item.tags || [],
                flagged: item.flagged || false
            };
            DxStorage.save('bookmarks', id, bookmark);
            return id;
        },
        remove: function(id) {
            return DxStorage.remove('bookmarks', id);
        },
        list: function() {
            return DxStorage.listAll('bookmarks').map(item => item.data);
        },
        getBySource: function(source) {
            return this.list().filter(b => b.source === source);
        },
        getByType: function(type) {
            return this.list().filter(b => b.type === type);
        },
        toggleFlag: function(id) {
            const data = DxStorage.load('bookmarks', id);
            if (data) {
                data.flagged = !data.flagged;
                DxStorage.save('bookmarks', id, data);
                return data.flagged;
            }
            return false;
        },
        count: function() {
            return DxStorage.count('bookmarks');
        }
    };

    // ─── NOTES API ────────────────────────────────────
    const DxNotes = {
        add: function(item) {
            const id = DxStorage.generateId('note');
            const note = {
                id: id,
                title: item.title || 'Untitled Note',
                content: item.content || '',
                linkedTo: item.linkedTo || null, // bookmark ID or source reference
                tags: item.tags || [],
                color: item.color || 'default'
            };
            DxStorage.save('notes', id, note);
            return id;
        },
        update: function(id, updates) {
            const data = DxStorage.load('notes', id);
            if (data) {
                Object.assign(data, updates);
                DxStorage.save('notes', id, data);
                return true;
            }
            return false;
        },
        remove: function(id) {
            return DxStorage.remove('notes', id);
        },
        list: function() {
            return DxStorage.listAll('notes').map(item => ({
                ...item.data,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            }));
        },
        search: function(query) {
            const q = query.toLowerCase();
            return this.list().filter(n => 
                n.title.toLowerCase().includes(q) || 
                n.content.toLowerCase().includes(q) ||
                (n.tags && n.tags.some(t => t.toLowerCase().includes(q)))
            );
        },
        count: function() {
            return DxStorage.count('notes');
        }
    };

    // Export
    global.DxStorage = DxStorage;
    global.DxBookmarks = DxBookmarks;
    global.DxNotes = DxNotes;

})(typeof window !== 'undefined' ? window : this);
