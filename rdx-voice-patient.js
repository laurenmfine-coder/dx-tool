/**
 * rdx-voice-patient.js
 * Gives the AI patient a voice using browser-native Web Speech Synthesis.
 * Zero cost, zero infrastructure, works in Chrome/Edge/Safari.
 *
 * Features:
 *   - Patient speaks every response aloud using a voice matched to their identity
 *   - OSCE mode: hides the text input, student must speak (mic only)
 *   - Voice profile derived from patientScript.identity (age + sex)
 *   - Interrupt button stops speech mid-sentence
 *   - Respects user preference (can be toggled off)
 *
 * Include in simulation-engine.html after other scripts.
 * Inject after patient message: RDXVoicePatient.speak(text, patientScript)
 * Toggle OSCE mode:            RDXVoicePatient.setOSCEMode(true/false)
 */

(function(window) {
  'use strict';

  var STORAGE_KEY = 'rdx-voice-patient-enabled';
  var OSCE_KEY    = 'rdx-osce-mode-enabled';

  // ── State ──────────────────────────────────────────────────────────────────
  var _enabled    = localStorage.getItem(STORAGE_KEY) !== 'false'; // default on
  var _osceMode   = localStorage.getItem(OSCE_KEY) === 'true';     // default off
  var _speaking   = false;
  var _utterance  = null;
  var _voiceList  = [];
  var _ready      = false;

  // ── Load voices (async in Chrome) ─────────────────────────────────────────
  function loadVoices() {
    _voiceList = window.speechSynthesis.getVoices();
    if (_voiceList.length > 0) { _ready = true; return; }
    // Chrome loads voices async
    window.speechSynthesis.onvoiceschanged = function() {
      _voiceList = window.speechSynthesis.getVoices();
      _ready = true;
    };
  }

  // ── Pick a voice based on patient identity ─────────────────────────────────
  function pickVoice(patientScript) {
    if (!_voiceList.length) _voiceList = window.speechSynthesis.getVoices();

    var identity = (patientScript && patientScript.identity) || '';
    var isFemale = /woman|female|girl|she|her/i.test(identity);
    var age = 40;
    var ageMatch = identity.match(/(\d+)-year/);
    if (ageMatch) age = parseInt(ageMatch[1], 10);

    // Prefer natural-sounding English voices
    var preferred = [
      'Samantha', 'Karen', 'Moira',          // female macOS
      'Daniel', 'Arthur',                     // male macOS/iOS
      'Google US English',                    // Chrome
      'Microsoft Aria Online', 'Microsoft Guy Online',
      'Microsoft Zira Desktop', 'Microsoft David Desktop',
    ];

    // Filter to English voices
    var enVoices = _voiceList.filter(function(v) {
      return v.lang.startsWith('en');
    });

    if (!enVoices.length) return null;

    // Try preferred voices first by gender
    var genderKeywords = isFemale
      ? ['Samantha', 'Karen', 'Zira', 'Aria', 'Moira', 'Google US English Female', 'female']
      : ['Daniel', 'Arthur', 'David', 'Guy', 'Google US English Male', 'male', 'James', 'Mark'];

    for (var i = 0; i < genderKeywords.length; i++) {
      var kw = genderKeywords[i].toLowerCase();
      var match = enVoices.find(function(v) {
        return v.name.toLowerCase().includes(kw);
      });
      if (match) return match;
    }

    // Fallback: pick by index based on gender
    if (isFemale && enVoices.length > 1) return enVoices[1];
    return enVoices[0];
  }

  // ── Pick speech rate based on age and urgency ──────────────────────────────
  function pickRate(patientScript) {
    var identity = (patientScript && patientScript.identity) || '';
    var age = 40;
    var ageMatch = identity.match(/(\d+)-year/);
    if (ageMatch) age = parseInt(ageMatch[1], 10);

    if (age >= 75) return 0.82;   // elderly — slower
    if (age >= 65) return 0.88;
    if (age <= 10) return 0.92;   // child — slightly slower
    return 0.95;                  // default — natural pace
  }

  // ── Speak a patient response ───────────────────────────────────────────────
  function speak(text, patientScript) {
    if (!_enabled) return;
    if (!window.speechSynthesis) return;
    if (!text || !text.trim()) return;

    // Cancel any ongoing speech
    stop();

    // Clean text — remove markdown, brackets, stage directions
    var clean = text
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\[.*?\]/g, '')
      .replace(/\(.*?\)/g, '')
      .replace(/^(Patient:|Dr\.|Nurse:)\s*/i, '')
      .replace(/\[Teaching Debrief.*$/i, '')
      .trim();

    if (!clean) return;

    _utterance = new SpeechSynthesisUtterance(clean);
    _utterance.lang  = 'en-US';
    _utterance.rate  = pickRate(patientScript);
    _utterance.pitch = 1.0;
    _utterance.volume = 1.0;

    var voice = pickVoice(patientScript);
    if (voice) _utterance.voice = voice;

    _utterance.onstart = function() {
      _speaking = true;
      updateStopBtn(true);
    };

    _utterance.onend = function() {
      _speaking = false;
      _utterance = null;
      updateStopBtn(false);
    };

    _utterance.onerror = function() {
      _speaking = false;
      _utterance = null;
      updateStopBtn(false);
    };

    window.speechSynthesis.speak(_utterance);
  }

  // ── Stop speech ────────────────────────────────────────────────────────────
  function stop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    _speaking = false;
    _utterance = null;
    updateStopBtn(false);
  }

  // ── OSCE mode ──────────────────────────────────────────────────────────────
  function setOSCEMode(on) {
    _osceMode = on;
    localStorage.setItem(OSCE_KEY, on ? 'true' : 'false');

    var chatInput = document.getElementById('chatInput');
    var sendBtn   = document.getElementById('sendBtn');
    var osceBanner = document.getElementById('rdx-osce-banner');

    if (chatInput) {
      chatInput.style.display = on ? 'none' : '';
      chatInput.disabled = on;
    }
    if (sendBtn) {
      sendBtn.style.display = on ? 'none' : '';
    }
    if (osceBanner) {
      osceBanner.style.display = on ? 'flex' : 'none';
    }

    updateModeToggle();
  }

  // ── Enable/disable voice ───────────────────────────────────────────────────
  function setEnabled(on) {
    _enabled = on;
    localStorage.setItem(STORAGE_KEY, on ? 'true' : 'false');
    if (!on) stop();
    updateVoiceToggle();
  }

  // ── Update UI elements ─────────────────────────────────────────────────────
  function updateStopBtn(active) {
    var btn = document.getElementById('rdx-voice-stop');
    if (!btn) return;
    btn.style.display = active ? 'inline-flex' : 'none';
  }

  function updateVoiceToggle() {
    var btn = document.getElementById('rdx-voice-toggle');
    if (!btn) return;
    btn.textContent = _enabled ? '🔊' : '🔇';
    btn.title = _enabled ? 'Patient voice ON — click to mute' : 'Patient voice OFF — click to enable';
    btn.style.opacity = _enabled ? '1' : '0.5';
  }

  function updateModeToggle() {
    var btn = document.getElementById('rdx-osce-toggle');
    if (!btn) return;
    btn.textContent = _osceMode ? '⌨️ Type mode' : '🎙 OSCE mode';
    btn.title = _osceMode ? 'Switch to typing mode' : 'Switch to voice-only OSCE mode';
    btn.style.background = _osceMode ? '#DC2626' : '';
    btn.style.color = _osceMode ? '#fff' : '';
  }

  // ── Inject UI controls into simulation ────────────────────────────────────
  function injectUI() {
    // Wait for DOM
    if (!document.getElementById('chatInput')) {
      setTimeout(injectUI, 500);
      return;
    }

    // 1. Voice toggle button (mute/unmute patient voice)
    if (!document.getElementById('rdx-voice-toggle')) {
      var voiceBtn = document.createElement('button');
      voiceBtn.id = 'rdx-voice-toggle';
      voiceBtn.title = 'Patient voice ON — click to mute';
      voiceBtn.textContent = '🔊';
      voiceBtn.style.cssText = [
        'padding:10px 12px',
        'background:transparent',
        'border:1px solid var(--border-main,#D0D5DD)',
        'border-radius:var(--radius,8px)',
        'cursor:pointer',
        'font-size:16px',
        'line-height:1',
        'transition:all .15s',
        'margin-left:4px',
      ].join(';');
      voiceBtn.onclick = function() { setEnabled(!_enabled); };

      // Insert after micBtn
      var micBtn = document.getElementById('micBtn');
      if (micBtn && micBtn.parentNode) {
        micBtn.parentNode.insertBefore(voiceBtn, micBtn.nextSibling);
      }
    }

    // 2. Stop speech button (shown only while speaking)
    if (!document.getElementById('rdx-voice-stop')) {
      var stopBtn = document.createElement('button');
      stopBtn.id = 'rdx-voice-stop';
      stopBtn.title = 'Stop patient speaking';
      stopBtn.textContent = '⏹';
      stopBtn.style.cssText = [
        'display:none',
        'align-items:center',
        'padding:10px 12px',
        'background:#DC2626',
        'color:#fff',
        'border:none',
        'border-radius:var(--radius,8px)',
        'cursor:pointer',
        'font-size:16px',
        'line-height:1',
        'margin-left:4px',
        'animation:rdx-pulse-red 1s ease-in-out infinite',
      ].join(';');
      stopBtn.onclick = stop;

      var voiceToggle = document.getElementById('rdx-voice-toggle');
      if (voiceToggle && voiceToggle.parentNode) {
        voiceToggle.parentNode.insertBefore(stopBtn, voiceToggle.nextSibling);
      }
    }

    // 3. OSCE mode toggle
    if (!document.getElementById('rdx-osce-toggle')) {
      var osceBtn = document.createElement('button');
      osceBtn.id = 'rdx-osce-toggle';
      osceBtn.textContent = '🎙 OSCE mode';
      osceBtn.title = 'Switch to voice-only OSCE mode';
      osceBtn.style.cssText = [
        'padding:8px 14px',
        'background:transparent',
        'border:1px solid var(--border-main,#D0D5DD)',
        'border-radius:var(--radius,8px)',
        'cursor:pointer',
        'font-size:12px',
        'font-weight:600',
        'font-family:inherit',
        'color:var(--text-main,#344054)',
        'transition:all .15s',
        'margin-left:8px',
      ].join(';');
      osceBtn.onclick = function() { setOSCEMode(!_osceMode); };

      // Insert near send button area
      var sendBtn = document.getElementById('sendBtn');
      if (sendBtn && sendBtn.parentNode) {
        sendBtn.parentNode.insertBefore(osceBtn, sendBtn.nextSibling);
      }
    }

    // 4. OSCE mode banner (shown when in OSCE mode)
    if (!document.getElementById('rdx-osce-banner')) {
      var banner = document.createElement('div');
      banner.id = 'rdx-osce-banner';
      banner.style.cssText = [
        'display:none',
        'align-items:center',
        'gap:10px',
        'padding:10px 16px',
        'background:#1e3a5f',
        'border-radius:8px',
        'margin:8px 0',
        'font-size:13px',
        'color:#bfdbfe',
        'font-weight:500',
      ].join(';');
      banner.innerHTML = [
        '<span style="font-size:18px">🎙</span>',
        '<span><strong style="color:#fff">OSCE Mode</strong> — speak your questions aloud. ',
        'Patient will respond verbally. Click mic button to activate.</span>',
      ].join('');

      var chatInput = document.getElementById('chatInput');
      if (chatInput && chatInput.parentNode) {
        chatInput.parentNode.insertBefore(banner, chatInput);
      }
    }

    // 5. Add CSS animation for stop button pulse
    if (!document.getElementById('rdx-voice-style')) {
      var style = document.createElement('style');
      style.id = 'rdx-voice-style';
      style.textContent = [
        '@keyframes rdx-pulse-red {',
        '  0%,100% { opacity:1; }',
        '  50% { opacity:0.6; }',
        '}',
      ].join('');
      document.head.appendChild(style);
    }

    // Apply saved states
    updateVoiceToggle();
    updateModeToggle();
    if (_osceMode) setOSCEMode(true);
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  function init() {
    if (!window.speechSynthesis) {
      console.warn('[RDXVoicePatient] speechSynthesis not supported in this browser');
      return;
    }
    loadVoices();
    // Inject UI once DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', injectUI);
    } else {
      injectUI();
    }
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.RDXVoicePatient = {
    speak:       speak,
    stop:        stop,
    setEnabled:  setEnabled,
    setOSCEMode: setOSCEMode,
    isEnabled:   function() { return _enabled; },
    isSpeaking:  function() { return _speaking; },
    isOSCEMode:  function() { return _osceMode; },
  };

  init();

})(window);
