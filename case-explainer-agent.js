/**
 * case-explainer-agent.js
 * Post-simulation debrief synthesis — injected into simulation-engine.html
 * 
 * After Dr. Patel's teaching debrief, this adds a second AI card:
 * "Your Learning Synthesis" — personalized 4-part narrative:
 *   1. What you did well
 *   2. The key reasoning gap
 *   3. One concept to cement
 *   4. Suggested next case
 * 
 * Include in simulation-engine.html after rdx-email-triggers.js
 */

(function(window) {
  'use strict';

  var WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';

  /**
   * Build the synthesis prompt from debrief data
   */
  function buildSynthesisPrompt(opts) {
    var diagnosis     = opts.diagnosis || 'unknown diagnosis';
    var specialty     = opts.specialty || 'general medicine';
    var acuity        = opts.acuity || 2;
    var gaps          = opts.gaps || [];
    var differentials = opts.differentials || {};
    var historyScore  = opts.historyScore; // 0, 1, or 2
    var turnCount     = opts.turnCount || 0;
    var phases        = opts.phasesCompleted || 0;
    var studentName   = opts.studentName || 'the student';

    // Summarize differential quality
    var diffSummary = '';
    if (differentials.initial && differentials.initial.length > 0) {
      var initDx = differentials.initial.map(function(e) { return e.diagnosis || e.name || e; }).join(', ');
      diffSummary = 'Initial differential: ' + initDx + '. ';
    }
    if (differentials.revised && differentials.revised.length > 0) {
      var revDx = differentials.revised.map(function(e) { return e.diagnosis || e.name || e; }).join(', ');
      diffSummary += 'Revised differential: ' + revDx + '. ';
    }

    var gapSummary = gaps.length > 0
      ? 'Key gaps identified: ' + gaps.map(function(g) { return g.label || g.id; }).join('; ') + '.'
      : 'No major gaps flagged.';

    var histLabel = historyScore === 2 ? 'comprehensive (asked all critical questions)'
                  : historyScore === 1 ? 'partial (missed some key history elements)'
                  : 'incomplete (significant history gaps)';

    return [
      'You are writing a post-simulation learning synthesis for a medical student.',
      'Be specific, warm, and educationally precise. Use second-person ("you").',
      'Format as exactly four labeled sections with no extra commentary before or after.',
      '',
      '=== CASE DATA ===',
      'Diagnosis: ' + diagnosis,
      'Specialty: ' + specialty,
      'Acuity: ESI ' + acuity + (acuity === 1 ? ' (critical)' : acuity === 2 ? ' (urgent)' : ' (stable)'),
      'History-taking quality: ' + histLabel,
      'Conversation turns: ' + turnCount,
      'Phases completed: ' + phases + '/10',
      diffSummary,
      gapSummary,
      '',
      '=== WRITE EXACTLY THIS FORMAT ===',
      '**What You Did Well**',
      '[1-2 sentences praising something specific and genuine from their performance]',
      '',
      '**The Key Reasoning Gap**',
      '[1-2 sentences naming the most important thing they missed and why it matters clinically]',
      '',
      '**One Concept to Cement**',
      '[1-2 sentences giving one high-yield teaching point directly from this case]',
      '',
      '**Your Recommended Next Case**',
      '[1 sentence recommending what type of case to do next to build on or address the gap]',
    ].join('\n');
  }

  /**
   * Call the CoachDx worker for synthesis
   */
  function generateSynthesis(opts, onChunk, onDone, onError) {
    var prompt = buildSynthesisPrompt(opts);

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic: 'post-simulation-synthesis',
        userMessage: prompt,
        systemOverride: 'You are Dr. Patel, a clinical reasoning coach writing a concise, personalized post-case learning synthesis. Be specific, encouraging, and educationally precise. Follow the exact format requested.',
        stream: true,
      }),
    }).then(function(res) {
      if (!res.ok) throw new Error('Worker returned ' + res.status);
      var reader = res.body.getReader();
      var decoder = new TextDecoder();
      var buffer = '';

      function read() {
        reader.read().then(function(result) {
          if (result.done) {
            onDone(buffer);
            return;
          }
          var chunk = decoder.decode(result.value, { stream: true });
          // Parse SSE
          chunk.split('\n').forEach(function(line) {
            if (line.startsWith('data: ')) {
              var data = line.slice(6).trim();
              if (data === '[DONE]') return;
              try {
                var parsed = JSON.parse(data);
                var text = (parsed.delta && parsed.delta.text) || parsed.text || '';
                if (text) {
                  buffer += text;
                  onChunk(text);
                }
              } catch(e) {}
            }
          });
          read();
        }).catch(onError);
      }
      read();
    }).catch(onError);
  }

  /**
   * Render the synthesis card into the chat
   */
  function renderSynthesisCard(chatEl) {
    var card = document.createElement('div');
    card.id = 'rdx-synthesis-card';
    card.style.cssText = [
      'margin:16px 0',
      'border:2px solid #2874A6',
      'border-radius:12px',
      'overflow:hidden',
      'font-family:inherit',
      'background:#f8fbff',
    ].join(';');

    card.innerHTML = [
      '<div style="background:#2874A6;padding:10px 16px;display:flex;align-items:center;gap:10px">',
      '  <div style="width:8px;height:8px;border-radius:50%;background:#7dd3fc;animation:rdx-pulse 1.5s infinite"></div>',
      '  <span style="color:#fff;font-weight:700;font-size:13px;letter-spacing:0.3px">',
      '    Your Learning Synthesis</span>',
      '  <span style="color:#bfdbfe;font-size:11px;margin-left:auto">Generating...</span>',
      '</div>',
      '<div id="rdx-synthesis-body" style="padding:16px 18px;font-size:13px;line-height:1.7;color:#1e3a5f;min-height:60px">',
      '  <div style="color:#94a3b8;font-style:italic">Analyzing your performance...</div>',
      '</div>',
    ].join('');

    // Add pulse animation if not already present
    if (!document.getElementById('rdx-synthesis-style')) {
      var style = document.createElement('style');
      style.id = 'rdx-synthesis-style';
      style.textContent = '@keyframes rdx-pulse{0%,100%{opacity:1}50%{opacity:0.4}}';
      document.head.appendChild(style);
    }

    chatEl.appendChild(card);
    chatEl.scrollTop = chatEl.scrollHeight;
    return card;
  }

  /**
   * Parse markdown bold sections into HTML
   */
  function parseMarkdown(text) {
    return text
      .replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#1e3a5f;display:block;margin-top:12px;margin-bottom:2px">$1</strong>')
      .replace(/\n\n/g, '</p><p style="margin:0 0 4px">')
      .replace(/\n/g, '<br>');
  }

  /**
   * Main entry point — call this from simulation-engine.html after debrief
   */
  window.CaseExplainerAgent = {
    run: function(opts) {
      // opts: { state, caseData, chatEl }
      var state    = opts.state    || {};
      var caseData = opts.caseData || {};
      var chatEl   = opts.chatEl   || document.getElementById('chatMessages');

      if (!chatEl) {
        console.warn('[CaseExplainerAgent] chatEl not found');
        return;
      }

      var synthesisOpts = {
        diagnosis:       caseData.targetDiagnosis || caseData.diagnosis || '',
        specialty:       caseData.category || '',
        acuity:          caseData.acuity || 2,
        gaps:            state.identifiedGaps || [],
        differentials:   state.differentials || {},
        historyScore:    state.envHistoryScore,
        turnCount:       state.turnCount || 0,
        phasesCompleted: state.currentPhase || 0,
        studentName:     state.studentName || '',
      };

      var card = renderSynthesisCard(chatEl);
      var bodyEl = card.querySelector('#rdx-synthesis-body');
      var headerStatus = card.querySelector('span:last-child');
      var accumulated = '';

      generateSynthesis(
        synthesisOpts,
        // onChunk — stream into card
        function(chunk) {
          accumulated += chunk;
          bodyEl.innerHTML = '<p style="margin:0 0 4px">' + parseMarkdown(accumulated) + '</p>';
          chatEl.scrollTop = chatEl.scrollHeight;
        },
        // onDone
        function(full) {
          headerStatus.textContent = 'Complete';
          headerStatus.style.color = '#86efac';
          bodyEl.innerHTML = '<p style="margin:0 0 4px">' + parseMarkdown(full) + '</p>';
          chatEl.scrollTop = chatEl.scrollHeight;
        },
        // onError
        function(err) {
          console.warn('[CaseExplainerAgent] Error:', err);
          headerStatus.textContent = 'Unavailable';
          bodyEl.innerHTML = '<div style="color:#94a3b8;font-style:italic">Synthesis unavailable for this session.</div>';
        }
      );
    }
  };

})(window);
