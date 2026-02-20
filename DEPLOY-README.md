# ReasonDx Deployment — February 20, 2026

## Files in this package

| File | Path on server | What changed |
|------|---------------|--------------|
| `index.html` | `/` (root) | Added SimRoomDx "Simulate" card (5th homepage card) |
| `training.html` | `/` (root) | **CRITICAL FIX** — blank page bug (script tag in template literal) |
| `simroomdx.html` | `/` (root) | NEW — AI simulation with MechanismDx knowledge embedded |
| `dx-plan-gate.js` | `/` (root) | Added SimRoom case gating (1 free case, rest Pro) |
| `auth/register.html` | `/auth/` | Added visible "Sign in" link at top of page |
| `CoachDx/index.html` | `/CoachDx/` | Fixed frozen nav, soft free/pro tier labels |

## DO NOT replace
- **rdx-nav.js** or **js/rdx-nav.js** — Live version is correct. Do not touch.

## Post-upload: Hard refresh (Ctrl+Shift+R) every page
