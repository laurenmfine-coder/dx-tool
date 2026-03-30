/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Voice Input — js/rdx-voice.js
 * ═══════════════════════════════════════════════════════════════
 * Auto-attaches a microphone button to any chat input on the page.
 * Uses Web Speech API (Chrome/Edge). Graceful fallback for other
 * browsers.
 *
 * Loaded globally via nav-global.js on every page.
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  var recognition = null;
  var isListening = false;
  var targetInput = null;

  function findChatInput() {
    // Find the most likely chat input on the page
    var selectors = [
      '#chatInput',
      '.chat-input',
      'textarea[id*="chat"]',
      'input[id*="chat"]',
      'textarea[placeholder*="Type"]',
      'input[placeholder*="Type"]'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el) return el;
    }
    return null;
  }

  function createMicButton() {
    var btn = document.createElement('button');
    btn.id = 'rdxMicBtn';
    btn.type = 'button';
    btn.title = 'Dictate';
    btn.textContent = '\uD83C\uDF99\uFE0F';
    btn.style.cssText = 'padding:8px 12px;background:transparent;border:1px solid #D0D5DD;border-radius:8px;cursor:pointer;font-size:16px;line-height:1;flex-shrink:0;transition:all .15s;';
    btn.onclick = toggleMic;

    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      btn.style.opacity = '0.3';
      btn.style.cursor = 'default';
      btn.title = 'Voice input requires Chrome or Edge';
      btn.onclick = function() { alert('Voice input requires Chrome or Edge.'); };
    }

    return btn;
  }

  function toggleMic() {
    if (isListening) { stopListening(); return; }

    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    targetInput = findChatInput();
    if (!targetInput) return;

    recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    var accumulated = '';
    var btn = document.getElementById('rdxMicBtn');

    recognition.onstart = function() {
      isListening = true;
      accumulated = '';
      if (btn) {
        btn.textContent = '\u23F9';
        btn.style.background = '#DC2626';
        btn.style.color = '#fff';
        btn.style.borderColor = '#DC2626';
        btn.title = 'Listening... tap to stop';
      }
    };

    recognition.onresult = function(e) {
      if (!targetInput) return;
      var interimTxt = '';
      for (var i = e.resultIndex; i < e.results.length; i++) {
        var t = e.results[i][0].transcript;
        if (e.results[i].isFinal) {
          accumulated += t.charAt(0).toUpperCase() + t.slice(1) + '. ';
        } else {
          interimTxt += t;
        }
      }
      targetInput.value = (accumulated + interimTxt).trim();
      // Trigger input event for any listeners
      targetInput.dispatchEvent(new Event('input', { bubbles: true }));
    };

    recognition.onerror = function(e) {
      if (e.error === 'not-allowed') {
        alert('Microphone access denied.\n\nAllow microphone access in your browser settings and reload.');
      }
      stopListening();
    };

    recognition.onend = function() {
      if (isListening) {
        try { recognition.start(); } catch(e) { stopListening(); }
      }
    };

    try { recognition.start(); } catch(e) { stopListening(); }
  }

  function stopListening() {
    isListening = false;
    var btn = document.getElementById('rdxMicBtn');
    if (btn) {
      btn.textContent = '\uD83C\uDF99\uFE0F';
      btn.style.background = 'transparent';
      btn.style.color = '';
      btn.style.borderColor = '#D0D5DD';
      btn.title = 'Dictate';
    }
    if (recognition) {
      try { recognition.stop(); } catch(e) {}
      recognition = null;
    }
  }

  function init() {
    // Don't attach on rad-study page (it has its own mic button)
    if (window.location.pathname.includes('rad-study')) return;

    var input = findChatInput();
    if (!input) return;

    // Check if mic already exists
    if (document.getElementById('rdxMicBtn')) return;

    // Insert mic button next to the input's send button or after the input
    var sendBtn = input.parentElement.querySelector('button[onclick*="send"], .send-btn, button[type="submit"]');
    var mic = createMicButton();

    if (sendBtn) {
      sendBtn.parentElement.insertBefore(mic, sendBtn);
    } else {
      input.parentElement.appendChild(mic);
    }

    // Auto-stop when send is clicked
    if (sendBtn) {
      var origClick = sendBtn.onclick;
      sendBtn.addEventListener('click', function() {
        if (isListening) stopListening();
      });
    }

    // Auto-stop on Enter
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && isListening) stopListening();
    });
  }

  // Try to init after page load, with retries for dynamic content
  function tryInit() {
    init();
    if (!document.getElementById('rdxMicBtn')) {
      setTimeout(init, 3000);
      setTimeout(init, 6000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(tryInit, 1000); });
  } else {
    setTimeout(tryInit, 1000);
  }

  // Expose for manual control
  window.RdxVoice = { toggle: toggleMic, stop: stopListening, isListening: function() { return isListening; } };
})();
