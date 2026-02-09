# ReasonDx Content Update & Data Migration Guide

## How User Data Is Protected

The platform uses `data/rdx-persist.js` — a localStorage wrapper that:

1. **Version-stamps** all stored data (detects when content changes)
2. **Auto-backs up** user progress before any migration
3. **Migrates** renamed keys when modules are renamed/moved
4. **Exports/imports** user data as portable JSON files
5. **Keeps 3 rolling backups** in localStorage

## Making Content Changes Safely

### Scenario 1: Adding a New Module
**Risk to user data: NONE**
Just add the HTML file. No migration needed. The persistence layer handles it automatically.

### Scenario 2: Renaming or Moving a Module
**Risk: Module-specific scores and progress may become orphaned**

**Steps:**
1. Open `data/rdx-persist.js`
2. Find the `_onContentUpdate` method
3. Add a key migration:

```javascript
_onContentUpdate: function(oldVersion, newVersion) {
    this.backup();
    
    // ADD THIS LINE for your rename:
    this._migrateKey('moduleScore_old-module-name', 'moduleScore_new-module-name');
    
    // ... rest of method
},
```

4. Bump `PLATFORM_VERSION` at the top of the file:
```javascript
const PLATFORM_VERSION = '2.1';  // was '2.0'
```

### Scenario 3: Updating the Quiz Bank
**Risk: Cached quiz state may reference old question IDs**

**Steps:**
1. The stale cache key `reasondx_unmatched_questions` is already auto-cleared on version bump
2. Just bump `PLATFORM_VERSION` in `rdx-persist.js`
3. If you reindex question IDs, add a migration in `_onContentUpdate`:
```javascript
this._migrateQuizReferences(oldVersion, newVersion);
```

### Scenario 4: Restructuring Directories
**Risk: Relative paths to rdx-persist.js may break**

**Steps:**
1. After restructuring, run this to verify the script tag paths:
```bash
python3 -c "
import os, re
for root, dirs, files in os.walk('.'):
    for f in files:
        if not f.endswith('.html'): continue
        fp = os.path.join(root, f)
        with open(fp) as fh: content = fh.read()
        if 'rdx-persist.js' not in content:
            print(f'MISSING: {fp}')
        else:
            m = re.search(r'src=\"([^\"]*rdx-persist\.js)\"', content)
            if m:
                script_path = os.path.normpath(os.path.join(root, m.group(1)))
                if not os.path.exists(script_path):
                    print(f'BAD PATH: {fp} -> {m.group(1)}')
"
```

### Scenario 5: Deleting a Module
**Risk: LOW — orphaned keys are harmless but waste space**

No migration needed. Orphaned `moduleScore_deleted-module` keys are ignored.
To clean up proactively, add to `_onContentUpdate`:
```javascript
localStorage.removeItem('moduleScore_deleted-module');
```

## Protected vs. Ephemeral Keys

### PROTECTED (survive content updates):
- `crtScores` — all CRT completion data
- `dx-progress`, `reasondx-progress` — module completion
- `mechanismDxHistory`, `mechanismdx_progress` — mechanism module progress
- `boardPrepHistory`, `boardPrepSystems` — board prep progress
- `dxTrainingLevel`, `reasondx_learner_level` — XP/leveling
- `osceBookmarks`, `osceSpacedRep` — OSCE progress
- `dx-theme`, `viewMode`, `selectedProfession` — user settings
- `reasondx-user` — authentication
- `moduleScore_*`, `crt-score-*`, `rdx-xp-*` — dynamic score keys

### EPHEMERAL (cleared on content update):
- `reasondx_unmatched_questions` — stale quiz cache

## Version Bumping Checklist

When deploying a content update:

- [ ] Bump `PLATFORM_VERSION` in `data/rdx-persist.js`
- [ ] Add any key migrations for renamed/moved modules
- [ ] Test on a browser with existing data to verify migration
- [ ] Verify `my-data.html` shows correct stats post-update
- [ ] Check migration log shows the update event

## User-Facing Data Management

Users can manage their data at `my-data.html`, which provides:
- Progress summary (modules, CRTs, quizzes, data points)
- Export to JSON file
- Import from JSON file
- Manual backup/restore
- Progress reset (with auto-backup)
- Migration log viewer
