# ReasonDx Deployment — February 20, 2026

## Files in this package

All files mirror the live site folder structure. Upload as-is to your GitHub repo.

| File | Path on server | What changed |
|------|---------------|--------------|
| `index.html` | `/` (root) | Added SimRoomDx "Simulate" card (5th homepage card) |
| `training.html` | `/` (root) | Fixed blank page bug (printCaseSummary script tag escape) |
| `simroomdx.html` | `/` (root) | NEW — AI simulation with MechanismDx knowledge embedded |
| `dx-plan-gate.js` | `/` (root) | Added SimRoom case gating (1 free case, rest Pro) |
| `auth/register.html` | `/auth/` | Added visible "Sign in" link at top of page |
| `CoachDx/index.html` | `/CoachDx/` | Fixed frozen nav, soft free/pro tier labels, removed Coming Soon |

## DO NOT replace

- **rdx-nav.js** — The live version on your server has the correct nav (Home, Train, Coach, Dashboard). This package does not include it because the version in recent uploads was an older copy with wrong links.
- **js/rdx-nav.js** — Same warning. Do not touch.

## MechanismDx access control

Students cannot reach MechanismDx modules directly:
- No MechanismDx card on homepage
- Search bar filters to CRT cases only (modules excluded)
- Level selector, Popular Topics, Browse by Specialty all commented out
- MechanismDx pathophysiology content is embedded INTO SimRoomDx character prompts and CRT — students learn it through conversation, not by browsing modules

## Post-upload checklist

1. Hard refresh every page (Ctrl+Shift+R)
2. Homepage → 5 cards visible (Train, Communicate, Coach, Simulate, Dashboard)
3. Train → CRT loads with case selection (not blank)
4. Coach → 3 active cards with free/pro labels
5. Simulate → SimRoomDx setup modal with 6 cases
6. Dashboard → Learning dashboard loads
7. Log out → Register page shows "Sign in" link at top
8. Nav bar works on every page
