/**
 * rdx-ecg.js
 * ECG image integration for ReasonDx simulation.
 *
 * Sources:
 *   PTB-XL dataset (PhysioNet, CC-BY-4.0, commercial OK)
 *   Wagner et al., PTB-XL, PhysioNet 2020
 *   https://physionet.org/content/ptb-xl/
 *
 * Architecture:
 *   1. ECG images stored in Cloudflare R2 (rdx-ecg bucket)
 *   2. Each cardiac case mapped to a matching ECG pattern
 *   3. When student orders "12-Lead ECG", image loads + Claude Vision interprets
 *   4. OSCE mode: student must interpret ECG before Claude confirms
 *
 * Usage:
 *   RDXEcg.renderOrder(caseId, containerId)  — render ECG as order result
 *   RDXEcg.getInterpretation(caseId)         — Claude Vision interpretation
 */

(function(window) {
  'use strict';

  var WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';

  // ── ECG pattern → PTB-XL SCP code mapping ─────────────────────────────────
  // All from PTB-XL dataset (CC-BY-4.0)
  // Images hosted on Cloudflare R2: r2.reasondx.com/ecg/{filename}
  var ECG_LIBRARY = {
    // ST-elevation patterns
    'stemi':          { pattern: 'STEMI — Anterior', file: 'ptbxl-stemi-ant-001.png',    scpCode: 'AMI',   rhythm: 'Sinus tachycardia' },
    'stemi-inferior': { pattern: 'STEMI — Inferior', file: 'ptbxl-stemi-inf-001.png',    scpCode: 'IMI',   rhythm: 'Sinus rhythm' },
    'stemi-lateral':  { pattern: 'STEMI — Lateral',  file: 'ptbxl-stemi-lat-001.png',    scpCode: 'LMI',   rhythm: 'Sinus rhythm' },

    // Conduction abnormalities
    'lbbb':           { pattern: 'Left Bundle Branch Block', file: 'ptbxl-lbbb-001.png', scpCode: 'LBBB',  rhythm: 'Sinus rhythm with LBBB' },
    'rbbb':           { pattern: 'Right Bundle Branch Block',file: 'ptbxl-rbbb-001.png', scpCode: 'RBBB',  rhythm: 'Sinus rhythm with RBBB' },
    'complete-heart-block': { pattern: '3rd Degree AV Block', file: 'ptbxl-chb-001.png', scpCode: 'CRBBB', rhythm: 'Complete heart block, junctional escape' },

    // Arrhythmias
    'afib':           { pattern: 'Atrial Fibrillation', file: 'ptbxl-afib-001.png',      scpCode: 'AFIB',  rhythm: 'Atrial fibrillation, irregular ventricular response' },
    'vt-syncope':     { pattern: 'Ventricular Tachycardia', file: 'ptbxl-vt-001.png',    scpCode: 'SVTA',  rhythm: 'Sustained monomorphic VT at 180 bpm' },
    'long-qt':        { pattern: 'Prolonged QTc', file: 'ptbxl-longqt-001.png',          scpCode: 'LNGQT', rhythm: 'Sinus rhythm, QTc 520ms' },

    // Ischemia/strain
    'nstemi':         { pattern: 'ST Depression + T-wave inversion', file: 'ptbxl-nstemi-001.png', scpCode: 'ISCAL', rhythm: 'Sinus tachycardia' },
    'pe-v1':          { pattern: 'Right Heart Strain (PE pattern)', file: 'ptbxl-pe-001.png',      scpCode: 'STTC',  rhythm: 'Sinus tachycardia, S1Q3T3 pattern' },

    // Electrolyte
    'hyperkalemia':   { pattern: 'Peaked T-waves (Hyperkalemia)', file: 'ptbxl-hyperK-001.png',    scpCode: 'STTC',  rhythm: 'Sinus bradycardia, peaked T-waves' },
    'hypokalemia':    { pattern: 'U-waves (Hypokalemia)', file: 'ptbxl-hypoK-001.png',             scpCode: 'STTC',  rhythm: 'Sinus rhythm, prominent U-waves' },

    // Normal
    'normal-sinus':   { pattern: 'Normal Sinus Rhythm', file: 'ptbxl-normal-001.png',              scpCode: 'SR',    rhythm: 'Normal sinus rhythm, rate 72' },
  };

  // ── Case ID → ECG pattern mapping ─────────────────────────────────────────
  var CASE_ECG_MAP = {
    // STEMI cases
    'stemi-v1': 'stemi', 'stemi-v2': 'stemi', 'stemi-v3': 'stemi',
    // Inferior MI
    'inferior-mi-v1': 'stemi-inferior',
    // LBBB
    'lbbb-v1': 'lbbb',
    // Heart block
    'complete-heart-block': 'complete-heart-block',
    'av-block-v1': 'complete-heart-block',
    // AFib
    'afib-v1': 'afib', 'afib-rvr': 'afib',
    // VT
    'vt-syncope': 'vt-syncope',
    // NSTEMI / ACS
    'nstemi-v1': 'nstemi', 'acs-v1': 'nstemi', 'unstable-angina': 'nstemi',
    // PE
    'pe-v1': 'pe-v1', 'pe-v2': 'pe-v1',
    // Hyperkalemia
    'hyperkalemia-v1': 'hyperkalemia', 'ckd-hyperkalemia': 'hyperkalemia',
    // Long QT
    'long-qt-v1': 'long-qt', 'torsades': 'long-qt',
    // DKA (may have sinus tach + hyperK changes)
    'dka-v1': 'hyperkalemia', 'dka-v2': 'hyperkalemia',
  };

  // ── R2 base URL ────────────────────────────────────────────────────────────
  // Images served from Cloudflare R2 public bucket
  // To populate: download PTB-XL, convert WFDB → PNG, upload to R2
  var R2_BASE = 'https://pub-rdx-ecg.r2.dev/';

  // ── Get ECG for a case ──────────────────────────────────────────────────────
  function getEcgForCase(caseId) {
    if (!caseId) return null;
    var patternKey = CASE_ECG_MAP[caseId.toLowerCase()];
    if (!patternKey) return null;
    return ECG_LIBRARY[patternKey] || null;
  }

  // ── Check if case has ECG ───────────────────────────────────────────────────
  function hasEcg(caseId) {
    return !!getEcgForCase(caseId);
  }

  // ── Render ECG as order result card ────────────────────────────────────────
  function renderOrder(caseId, containerId, opts) {
    opts = opts || {};
    var ecg = getEcgForCase(caseId);
    var container = document.getElementById(containerId);
    if (!container) return;

    if (!ecg) {
      container.innerHTML = '<div style="padding:12px;color:#64748b;font-size:13px">12-Lead ECG: No imaging available for this case.</div>';
      return;
    }

    var imgUrl = R2_BASE + ecg.file;
    var html = [
      '<div class="ecg-result" style="background:#0f1117;border:1px solid #2e3452;border-radius:10px;overflow:hidden;margin:12px 0">',
        '<div style="padding:10px 16px;background:#1a1d27;border-bottom:1px solid #2e3452;display:flex;align-items:center;gap:10px">',
          '<span style="font-size:13px;font-weight:700;color:#e2e8f0">📋 12-Lead ECG Result</span>',
          '<span style="margin-left:auto;font-size:11px;color:#64748b;font-family:monospace">PTB-XL · CC-BY-4.0</span>',
        '</div>',
        '<div style="padding:16px">',
          '<div style="background:#000;border-radius:6px;overflow:hidden;margin-bottom:12px">',
            '<img src="' + imgUrl + '" alt="12-Lead ECG" ',
                'style="width:100%;display:block;image-rendering:crisp-edges" ',
                'onerror="this.parentElement.innerHTML=\'<div style=&quot;padding:20px;color:#64748b;text-align:center;font-size:13px&quot;>ECG image loading — check R2 bucket setup</div>\'" ',
                'onload="this.style.opacity=1" style="opacity:0;transition:opacity .3s">',
          '</div>',
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">',
            '<div style="background:#1a1d27;border-radius:6px;padding:10px">',
              '<div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Pattern</div>',
              '<div style="font-size:13px;color:#e2e8f0;font-weight:600">' + ecg.pattern + '</div>',
            '</div>',
            '<div style="background:#1a1d27;border-radius:6px;padding:10px">',
              '<div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Rhythm</div>',
              '<div style="font-size:13px;color:#e2e8f0">' + ecg.rhythm + '</div>',
            '</div>',
          '</div>',
          '<div id="ecg-interpretation-' + caseId + '" style="margin-top:4px">',
            '<button onclick="RDXEcg.showInterpretation(\'' + caseId + '\')" ',
              'style="padding:8px 16px;background:#2874A6;border:none;border-radius:6px;',
              'color:#fff;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit">',
              '✨ Get Claude Vision Interpretation',
            '</button>',
          '</div>',
          '<div style="margin-top:10px;font-size:11px;color:#475569">',
            'Source: PTB-XL electrocardiography dataset, Wagner et al. (PhysioNet 2020). ',
            '<a href="https://physionet.org/content/ptb-xl/" target="_blank" ',
               'style="color:#60a5fa">CC-BY 4.0</a>',
          '</div>',
        '</div>',
      '</div>',
    ].join('');

    container.innerHTML = html;
  }

  // ── Claude Vision ECG interpretation ──────────────────────────────────────
  async function showInterpretation(caseId) {
    var ecg = getEcgForCase(caseId);
    var el  = document.getElementById('ecg-interpretation-' + caseId);
    if (!el || !ecg) return;

    el.innerHTML = '<div style="padding:10px;color:#60a5fa;font-size:13px">✨ Analyzing ECG...</div>';

    try {
      var response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'You are a cardiologist reviewing a 12-lead ECG. The ECG shows: ' +
                      ecg.pattern + '. Rhythm: ' + ecg.rhythm + '.\n\n' +
                      'Provide a concise clinical interpretation in 3-4 bullet points:\n' +
                      '1. Rate and rhythm\n2. Axis\n3. Key abnormalities\n4. Clinical impression\n\n' +
                      'Be specific and educational. This is for medical student teaching.',
              }
            ]
          }],
          system: 'You are a clinical cardiologist providing ECG interpretations for medical education. Be precise, educational, and clinically relevant. Use standard ECG terminology.',
          max_tokens: 400,
        })
      });

      var data = await response.json();
      var text = (data.content && data.content[0] && data.content[0].text) ||
                 (data.response) || 'Interpretation unavailable';

      el.innerHTML = [
        '<div style="background:#1e3a5f;border-left:3px solid #2874A6;border-radius:0 6px 6px 0;padding:12px 14px;margin-top:4px">',
          '<div style="font-size:11px;font-weight:700;color:#60a5fa;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">',
            '✨ Claude ECG Interpretation',
          '</div>',
          '<div style="font-size:13px;color:#e2e8f0;line-height:1.65;white-space:pre-wrap">' +
            text.replace(/</g, '&lt;').replace(/>/g, '&gt;') +
          '</div>',
        '</div>',
      ].join('');

    } catch(e) {
      el.innerHTML = '<div style="padding:8px;color:#f87171;font-size:12px">Interpretation failed: ' + e.message + '</div>';
    }
  }

  // ── Wire into simulation order system ─────────────────────────────────────
  // Called when student selects "12-Lead ECG" as an order
  function handleEcgOrder(caseId, resultsContainerId) {
    var ecg = getEcgForCase(caseId);
    if (!ecg) return false; // no ECG for this case

    renderOrder(caseId, resultsContainerId);
    return true;
  }

  // ── R2 upload guide (for documentation) ───────────────────────────────────
  function getUploadGuide() {
    return [
      '=== PTB-XL → Cloudflare R2 Setup ===',
      '',
      '1. Download PTB-XL dataset from PhysioNet:',
      '   wget -r -N -c -np https://physionet.org/files/ptb-xl/1.0.3/',
      '',
      '2. Convert WFDB signals to PNG (Python):',
      '   pip install wfdb matplotlib',
      '   python3 scripts/ptbxl_to_png.py',
      '',
      '3. Create R2 bucket: rdx-ecg (public)',
      '   wrangler r2 bucket create rdx-ecg',
      '   wrangler r2 bucket cors put rdx-ecg --rules \'[{"AllowedOrigins":["*"],"AllowedMethods":["GET"]}]\'',
      '',
      '4. Upload PNGs:',
      '   wrangler r2 object put rdx-ecg/ptbxl-stemi-ant-001.png --file stemi_anterior.png',
      '',
      '5. Set R2_BASE in rdx-ecg.js to your public bucket URL',
    ].join('\n');
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.RDXEcg = {
    hasEcg:             hasEcg,
    getEcgForCase:      getEcgForCase,
    renderOrder:        renderOrder,
    showInterpretation: showInterpretation,
    handleEcgOrder:     handleEcgOrder,
    getUploadGuide:     getUploadGuide,
    ECG_LIBRARY:        ECG_LIBRARY,
    CASE_ECG_MAP:       CASE_ECG_MAP,
  };

})(window);
