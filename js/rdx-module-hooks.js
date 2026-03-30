/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Module Event Hooks — rdx-module-hooks.js
 * ═══════════════════════════════════════════════════════════════
 * Auto-detects which module the student is using and hooks into
 * key events to emit them to the platform event bus.
 *
 * Loaded on every page via nav-global.js (after rdx-platform.js).
 * Non-invasive: wraps existing functions rather than modifying them.
 *
 * Hooks into:
 * - CoachDx: session start, topic submitted, session end
 * - ED Board: case opened, note submitted, disposition decided
 * - Clinic Board: appointment started, plan submitted
 * - MechanismDx: module opened, quiz completed
 * - CaseDx: case started, checkpoint reached
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  // Wait for platform to load
  function init() {
    if (!window.RdxPlatform) {
      setTimeout(init, 2000);
      return;
    }

    var P = window.RdxPlatform;
    var path = window.location.pathname.toLowerCase();

    // ── COACHDX HOOKS ──
    if (path.includes('mentor-chat')) {
      hookCoachDx(P);
    }
    // ── ED BOARD HOOKS ──
    else if (path.includes('virtual-emr')) {
      hookEDBoard(P);
    }
    // ── CLINIC BOARD HOOKS ──
    else if (path.includes('clinic-board')) {
      hookClinicBoard(P);
    }
    // ── MECHANISMDX HOOKS ──
    else if (path.includes('mechanism')) {
      hookMechanismDx(P);
    }
    // ── CASEDX HOOKS ──
    else if (path.includes('casedx') || path.includes('case-browser')) {
      hookCaseDx(P);
    }
  }


  // ═══════════════════════════════════════════════════════════════
  // COACHDX HOOKS
  // ═══════════════════════════════════════════════════════════════

  function hookCoachDx(P) {
    var sessionStarted = false;
    var sessionTopic = '';
    var turnCount = 0;
    var sessionStartTime = null;

    // Watch for message sends by observing the chat container
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        m.addedNodes.forEach(function(node) {
          if (node.nodeType === 1 && node.classList) {
            // Detect user messages
            if (node.classList.contains('msg-user') || node.classList.contains('user-message') ||
                node.querySelector && node.querySelector('[data-role="user"]')) {
              turnCount++;

              if (!sessionStarted) {
                sessionStarted = true;
                sessionStartTime = Date.now();
                sessionTopic = (node.textContent || '').substring(0, 100);

                P.EventBus.emit('coaching_session_start', 'coachdx', {
                  topic: sessionTopic
                });
              }
            }
          }
        });
      });
    });

    // Find chat container and observe
    function findAndObserveChat() {
      var chatContainers = document.querySelectorAll('.chat-messages, .messages-container, #chatMessages, [class*="messages"]');
      chatContainers.forEach(function(container) {
        observer.observe(container, { childList: true, subtree: true });
      });
    }

    setTimeout(findAndObserveChat, 2000);
    setTimeout(findAndObserveChat, 5000); // retry

    // Emit session end on page unload
    window.addEventListener('beforeunload', function() {
      if (sessionStarted) {
        var duration = sessionStartTime ? Math.round((Date.now() - sessionStartTime) / 1000) : 0;
        P.EventBus.emit('coaching_session', 'coachdx', {
          topic: sessionTopic,
          turnCount: turnCount,
          durationSeconds: duration
        }, {
          skillImpacts: turnCount >= 5 ? { metacognition: 0.01 } : null
        });
      }
    });

    console.log('CoachDx hooks wired');
  }


  // ═══════════════════════════════════════════════════════════════
  // ED BOARD HOOKS
  // ═══════════════════════════════════════════════════════════════

  function hookEDBoard(P) {
    var casesOpened = new Set();

    // Watch for submitDoc function
    if (window.submitDoc) {
      var origSubmitDoc = window.submitDoc;
      window.submitDoc = async function() {
        var result = await origSubmitDoc.apply(this, arguments);

        // Emit case completion event
        var caseId = '';
        try {
          var activeCase = document.querySelector('.active-case, [data-case-id], .case-header');
          if (activeCase) caseId = activeCase.dataset.caseId || activeCase.textContent.substring(0, 30);
        } catch(e) {}

        P.EventBus.emit('case_completed', 'ed_board', {
          caseId: caseId,
          module: 'ed_board'
        }, {
          caseId: caseId,
          skillImpacts: {
            time_management: 0.02,
            management: 0.02
          }
        });

        return result;
      };
    }

    // Track patient panel opens
    document.addEventListener('click', function(e) {
      var target = e.target.closest('[data-patient-id], .patient-card, .ed-slot');
      if (target) {
        var patientId = target.dataset.patientId || target.dataset.caseId || target.textContent.substring(0, 20);
        if (!casesOpened.has(patientId)) {
          casesOpened.add(patientId);
          P.EventBus.emit('case_opened', 'ed_board', {
            patientId: patientId
          });
        }
      }
    });

    console.log('ED Board hooks wired');
  }


  // ═══════════════════════════════════════════════════════════════
  // CLINIC BOARD HOOKS
  // ═══════════════════════════════════════════════════════════════

  function hookClinicBoard(P) {
    // Similar pattern — watch for appointment interactions
    document.addEventListener('click', function(e) {
      var slot = e.target.closest('.appointment-slot, .clinic-slot, [data-appointment]');
      if (slot) {
        var appointmentId = slot.dataset.appointment || slot.dataset.caseId || '';
        P.EventBus.emit('case_opened', 'clinic_board', {
          appointmentId: appointmentId,
          module: 'clinic_board'
        });
      }
    });

    // Watch for plan submissions
    if (window.submitDoc) {
      var origSubmit = window.submitDoc;
      window.submitDoc = async function() {
        var result = await origSubmit.apply(this, arguments);
        P.EventBus.emit('case_completed', 'clinic_board', {
          module: 'clinic_board'
        }, {
          skillImpacts: {
            management: 0.01,
            communication: 0.01
          }
        });
        return result;
      };
    }

    console.log('Clinic Board hooks wired');
  }


  // ═══════════════════════════════════════════════════════════════
  // MECHANISMDX HOOKS
  // ═══════════════════════════════════════════════════════════════

  function hookMechanismDx(P) {
    // Track module opens
    var moduleName = '';
    try {
      var titleEl = document.querySelector('h1, .module-title, title');
      if (titleEl) moduleName = titleEl.textContent.substring(0, 60);
    } catch(e) {}

    P.EventBus.emit('module_visit', 'mechanismdx', {
      moduleName: moduleName
    });

    // Watch for quiz completions
    document.addEventListener('click', function(e) {
      var submitBtn = e.target.closest('[data-quiz-submit], .quiz-submit, button[type="submit"]');
      if (submitBtn) {
        // Small delay to let quiz score update
        setTimeout(function() {
          var scoreEl = document.querySelector('.quiz-score, .score, [data-score]');
          var score = scoreEl ? parseInt(scoreEl.textContent) || 0 : 0;

          P.EventBus.emit('mechanism_quiz', 'mechanismdx', {
            moduleName: moduleName,
            score: score
          }, {
            skillImpacts: {
              data_integration: 0.01
            }
          });
        }, 1000);
      }
    });

    console.log('MechanismDx hooks wired');
  }


  // ═══════════════════════════════════════════════════════════════
  // CASEDX HOOKS
  // ═══════════════════════════════════════════════════════════════

  function hookCaseDx(P) {
    // Track case starts from the case browser
    document.addEventListener('click', function(e) {
      var caseCard = e.target.closest('.case-card, [data-case-id], a[href*="case"]');
      if (caseCard) {
        var caseId = caseCard.dataset.caseId || caseCard.href || '';
        P.EventBus.emit('case_opened', 'casedx', {
          caseId: caseId
        });
      }
    });

    console.log('CaseDx hooks wired');
  }


  // ═══════════════════════════════════════════════════════════════
  // INITIALIZE
  // ═══════════════════════════════════════════════════════════════

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 1000); });
  } else {
    setTimeout(init, 1000);
  }

})();
