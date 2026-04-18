/* js/patient-interview.js — ReasonDx Patient Interview Module
 * AI-powered patient persona using the coachdx-attending Cloudflare Worker.
 * Renders a chat-style interview UI. Case guided{} block provides persona + responses.
 * Supports both AI mode (full Anthropic call) and scripted fallback.
 */
(function () {
  'use strict';

  var WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';
  var STORAGE_KEY = 'rdx-interview-messages';

  var _messages = [];   // { role, content, ts }
  var _loading  = false;
  var _guided   = null;

  // ── Persistence ──────────────────────────────────────────────
  function _save() {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(_messages)); } catch (e) {}
  }
  function _load() {
    try {
      var raw = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
      if (Array.isArray(raw)) { _messages = raw; return true; }
    } catch (e) {}
    return false;
  }

  // ── Scripted fallback response ────────────────────────────────
  // Used if the AI call fails or if no API is available
  function _scriptedResponse(question) {
    if (!_guided || !_guided.patientResponses) return null;
    var responses = _guided.patientResponses;
    var qLower = question.toLowerCase();
    var best = null, bestLen = 0;
    Object.keys(responses).forEach(function (key) {
      if (key === 'default') return;
      if (qLower.indexOf(key) !== -1 && key.length > bestLen) {
        best = responses[key];
        bestLen = key.length;
      }
    });
    return best || responses['default'] || 'I\'m not sure. Can you rephrase that?';
  }

  // ── AI patient call ──────────────────────────────────────────
  async function _aiResponse(question) {
    if (!_guided) return _scriptedResponse(question);

    var persona  = _guided.patientPersona || '';
    var cc       = (window.PATIENT && PATIENT.chiefComplaint) || 'chest pain';
    var ptName   = (window.PATIENT && PATIENT.name) || 'Patient';
    var ptAge    = (window.PATIENT && PATIENT.age)  || '?';
    var ptSex    = (window.PATIENT && PATIENT.sex)  || '';

    var systemPrompt =
      'You are playing the role of a patient in a medical education simulation. ' +
      'Your character: ' + ptName + ', ' + ptAge + 'yo ' + ptSex + '. ' +
      'Chief complaint: ' + cc + '. ' +
      'Persona: ' + persona + ' ' +
      'Rules: Stay in character at all times. Do not volunteer information the student has not asked about. ' +
      'Answer only what is asked. Use realistic patient language — no medical jargon. ' +
      'Express discomfort or anxiety when appropriate but remain cooperative. ' +
      'If asked something you would not know (like a lab value), say so naturally. ' +
      'Keep responses to 1-3 sentences unless the student asks for elaboration. ' +
      'Do not break character under any circumstances.';

    // Build message history for context
    var apiMessages = _messages
      .filter(function (m) { return m.role === 'user' || m.role === 'assistant'; })
      .map(function (m) { return { role: m.role, content: m.content }; });
    apiMessages.push({ role: 'user', content: question });

    try {
      var resp = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          system: systemPrompt,
          patientMode: true,
          patientContext: {
            name:     ptName,
            age:      ptAge,
            sex:      ptSex,
            cc:       cc,
            hpi:      '',            // withheld — student must earn details
            persona:  persona,
            setting:  (window.S && S.clinicalSetting) || 'ed',
            difficulty: 'standard'
          }
        })
      });
      if (!resp.ok) throw new Error('Worker ' + resp.status);
      var data = await resp.json();
      // Worker returns { response: '...' } or { content: [...] }
      if (data.response) return data.response;
      if (data.content && data.content[0] && data.content[0].text) return data.content[0].text;
      throw new Error('Unexpected response shape');
    } catch (err) {
      console.warn('[PatientInterview] AI fallback:', err.message);
      return _scriptedResponse(question);
    }
  }

  // ── UI helpers ───────────────────────────────────────────────
  function _scrollToBottom() {
    var chat = document.getElementById('rdx-interview-chat');
    if (chat) chat.scrollTop = chat.scrollHeight;
  }

  function _renderMessages() {
    var chat = document.getElementById('rdx-interview-chat');
    if (!chat) return;
    var ptName = (window.PATIENT && PATIENT.name) || 'Patient';
    var initials = ptName.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2);

    chat.innerHTML = _messages.map(function (m) {
      var isUser = m.role === 'user';
      return '<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px;' + (isUser ? 'flex-direction:row-reverse' : '') + '">' +
        '<div style="width:32px;height:32px;border-radius:50%;background:' + (isUser ? '#2874A6' : '#1B4F72') + ';color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">' +
        (isUser ? 'You' : initials) + '</div>' +
        '<div style="max-width:75%;padding:10px 14px;border-radius:10px;background:' + (isUser ? '#EBF5FB' : '#f8fafc') + ';border:1px solid ' + (isUser ? '#d0dce8' : '#e2ecf4') + ';font-size:13px;color:#2d3748;line-height:1.6">' +
        m.content.replace(/</g, '&lt;').replace(/>/g, '&gt;') +
        '</div></div>';
    }).join('');

    if (_loading) {
      chat.innerHTML += '<div style="display:flex;align-items:center;gap:8px;padding:8px 0">' +
        '<div style="width:32px;height:32px;border-radius:50%;background:#1B4F72;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">' + initials + '</div>' +
        '<div style="display:flex;gap:4px;padding:10px 14px;background:#f8fafc;border-radius:10px;border:1px solid #e2ecf4">' +
        '<span style="width:6px;height:6px;background:#718096;border-radius:50%;animation:rdxDot 1.2s ease-in-out 0s infinite"></span>' +
        '<span style="width:6px;height:6px;background:#718096;border-radius:50%;animation:rdxDot 1.2s ease-in-out 0.2s infinite"></span>' +
        '<span style="width:6px;height:6px;background:#718096;border-radius:50%;animation:rdxDot 1.2s ease-in-out 0.4s infinite"></span>' +
        '</div></div>';
    }

    _scrollToBottom();
  }

  function _updateSendBtn(enabled) {
    var btn = document.getElementById('rdx-interview-send');
    if (!btn) return;
    btn.disabled = !enabled;
    btn.style.opacity = enabled ? '1' : '0.5';
    btn.style.cursor  = enabled ? 'pointer' : 'default';
  }

  // ── Send a question ──────────────────────────────────────────
  window._rdxInterviewSend = async function () {
    var input = document.getElementById('rdx-interview-input');
    if (!input) return;
    var text = input.value.trim();
    if (!text || _loading) return;

    input.value = '';
    _loading = true;
    _updateSendBtn(false);

    _messages.push({ role: 'user', content: text, ts: Date.now() });
    _renderMessages();
    _save();

    var response = await _aiResponse(text);

    _loading = false;
    _messages.push({ role: 'assistant', content: response, ts: Date.now() });
    _renderMessages();
    _save();
    _updateSendBtn(true);
    input.focus();
  };

  window._rdxInterviewKey = function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      window._rdxInterviewSend();
    }
  };

  window._rdxInterviewSuggestion = function (text) {
    var input = document.getElementById('rdx-interview-input');
    if (input) { input.value = text; input.focus(); }
  };

  // ── Public API ───────────────────────────────────────────────
  window.PatientInterview = {

    init: function () {
      _guided = window.EMR_DATA && window.EMR_DATA.guided;
      if (!_load()) {
        _messages = [];
        // Opening scene from patient
        var ptName = (window.PATIENT && PATIENT.name) || 'Patient';
        var cc = (window.PATIENT && PATIENT.chiefComplaint) || 'not feeling well';
        var opening = _guided && _guided.patientPersona
          ? ptName.split(' ')[0] + ' looks up as you enter, clearly uncomfortable.'
          : ptName + ' is waiting for you.';
        _messages.push({
          role: 'assistant',
          content: opening + ' When asked how they\'re doing, they say: "I\u2019ve been having ' + cc.toLowerCase() + '. I\u2019m hoping you can help figure out what\u2019s going on."',
          ts: Date.now()
        });
        _save();
      }
      // Inject dot animation CSS
      if (!document.getElementById('rdx-interview-css')) {
        var s = document.createElement('style');
        s.id = 'rdx-interview-css';
        s.textContent = '@keyframes rdxDot{0%,80%,100%{transform:scale(0.6);opacity:0.4}40%{transform:scale(1);opacity:1}}';
        document.head.appendChild(s);
      }
    },

    render: function () {
      this.init();
      var guided = _guided;
      var suggestions = guided && guided.interviewQuestions
        ? guided.interviewQuestions.slice(0, 6)
        : ['Tell me what brought you in today.', 'When did this start?', 'Does it go anywhere?',
           'Any nausea or shortness of breath?', 'Any relevant medical history?', 'What medications are you taking?'];

      var html = '';

      // Chat window
      html += '<div id="rdx-interview-chat" style="height:320px;overflow-y:auto;background:#fff;border:1px solid #e2ecf4;border-radius:10px;padding:16px;margin-bottom:12px">';
      html += '</div>';

      // Suggestion chips
      html += '<div style="margin-bottom:10px">';
      html += '<div style="font-size:10px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">Suggested questions</div>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:6px">';
      suggestions.forEach(function (q) {
        html += '<button type="button" onclick="_rdxInterviewSuggestion(' + JSON.stringify(q) + ')" ' +
          'style="padding:5px 10px;border:1px solid #d0dce8;border-radius:20px;background:#f8fafc;font-size:11px;color:#2874A6;cursor:pointer;font-family:inherit">' +
          q + '</button>';
      });
      html += '</div></div>';

      // Input row
      html += '<div style="display:flex;gap:8px">';
      html += '<textarea id="rdx-interview-input" placeholder="Ask the patient a question..." ' +
        'onkeydown="_rdxInterviewKey(event)" ' +
        'style="flex:1;padding:10px 12px;border:1px solid #d0dce8;border-radius:8px;font-family:inherit;font-size:13px;resize:none;height:44px;line-height:1.4;overflow:hidden"></textarea>';
      html += '<button id="rdx-interview-send" type="button" onclick="_rdxInterviewSend()" ' +
        'style="padding:10px 18px;background:#2874A6;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;align-self:flex-end">Ask →</button>';
      html += '</div>';

      html += '<div style="margin-top:6px;font-size:11px;color:#a0aec0">Press Enter to send · Shift+Enter for new line</div>';

      // Render messages after DOM is ready
      setTimeout(function () { _renderMessages(); }, 50);

      return html;
    },

    getMessages: function () { return _messages.slice(); },
    reset:       function () { _messages = []; sessionStorage.removeItem(STORAGE_KEY); }
  };

})();
