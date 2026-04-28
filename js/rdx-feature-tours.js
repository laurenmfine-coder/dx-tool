/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

// ReasonDx Feature Tours System
// Contextual onboarding that shows help when users need it

(function() {
  'use strict';

  var RdxTours = window.RdxTours = {};
  
  // Tour definitions
  var TOURS = {
    'simulation-engine': {
      title: 'Welcome to the Simulation Engine',
      description: 'This is a 10-phase adaptive clinical simulation. Watch how to gather history, build your differential, and get instant feedback.',
      video: '/demos/simulation-overview.mp4',
      steps: [
        { title: 'Chief Complaint', desc: 'Start by reading the patient\'s chief complaint' },
        { title: 'History & Exam', desc: 'Ask questions and perform physical exam' },
        { title: 'Build DDx', desc: 'Build your differential diagnosis list' },
        { title: 'Order Tests', desc: 'Order labs, imaging, or procedures' },
        { title: 'Get Feedback', desc: 'See your reasoning fingerprint and areas to improve' }
      ]
    },
    'voice-input': {
      title: 'Voice Input: Talk Your Way Through Cases',
      description: 'Click the microphone icon and speak your differential diagnoses, orders, or documentation. No typing needed.',
      video: '/demos/voice-input.mp4',
      inline: true // Shows as tooltip, not full overlay
    },
    'ddx-builder': {
      title: 'Building Your Differential',
      description: 'Start broad, then narrow. Add diagnoses by typing or speaking. The AI will challenge your thinking.',
      video: '/demos/ddx-builder.mp4'
    },
    'coach-dx': {
      title: 'CoachDx: Your AI Attending',
      description: 'CoachDx asks the questions a great attending would. It probes your reasoning instead of handing you answers — so the thinking actually sticks.',
      video: '/demos/coach-dx.mp4',
      instructions: {
        heading: 'How to use it',
        steps: [
          { num: '1', title: 'Pick a topic', desc: 'Type any clinical concept, presentation, or topic you\'re struggling with — for example "AKI workup", "interpreting a wide-complex tachycardia", or "DKA management".' },
          { num: '2', title: 'Answer honestly', desc: 'When CoachDx asks what you already know, share your actual current thinking — even if it feels rough. The AI calibrates to wherever you are.' },
          { num: '3', title: 'Stay in the questions', desc: 'It will rarely tell you the answer outright. That\'s by design. Push through — the productive struggle is the point.' }
        ],
        tip: 'Best for: pre-rounding prep, post-call decompression, study sessions, or any moment you want to pressure-test your reasoning.'
      }
    },
    'virtual-emr': {
      title: 'Virtual EMR: Practice Clinical Workflow',
      description: 'Review charts, place orders, and document your thinking in a realistic EMR environment.',
      video: '/demos/virtual-emr.mp4'
    },
    'reasoning-frameworks': {
      title: '8 Reasoning Frameworks',
      description: 'Use structured approaches like Analysis of Competing Hypotheses, FMEA, or Devil\'s Advocate to strengthen your reasoning.',
      video: '/demos/reasoning-frameworks.mp4'
    },
    'cognitive-portrait': {
      title: 'Your Cognitive Portrait',
      description: 'Track your reasoning patterns, biases, and growth across EPA domains over time.',
      video: '/demos/cognitive-portrait.mp4'
    }
  };

  // Track what user has seen
  var seenTours = JSON.parse(localStorage.getItem('rdx-tours-seen') || '{}');
  
  // Active tour state
  var activeTour = null;
  var activeStep = 0;

  // Auto-show tour on page load if first visit
  RdxTours.autoShow = function(tourId) {
    if (seenTours[tourId]) return; // Already seen
    
    setTimeout(function() {
      RdxTours.show(tourId);
    }, 1000); // Delay 1 second after page load
  };

  // Manually show tour
  RdxTours.show = function(tourId, targetElement) {
    var tour = TOURS[tourId];
    if (!tour) {
      console.warn('Tour not found:', tourId);
      return;
    }

    activeTour = tourId;
    activeStep = 0;

    if (tour.inline && targetElement) {
      showInlineTooltip(tour, targetElement);
    } else {
      showFullTour(tour, tourId);
    }
  };

  // Show full-screen tour with video
  function showFullTour(tour, tourId) {
    // Create overlay
    var overlay = document.createElement('div');
    overlay.className = 'rdx-tour-overlay active';
    overlay.onclick = function(e) {
      if (e.target === overlay) closeTour();
    };

    // Create tour card
    var card = document.createElement('div');
    card.className = 'rdx-tour-card';
    card.style.left = '50%';
    card.style.top = '50%';
    card.style.transform = 'translate(-50%, -50%)';

    var html = '';

    // Video / intro section. If the video file is available, show it.
    // Otherwise, show structured instructions if the tour defines them,
    // and fall back to a generic placeholder only as a last resort.
    if (tour.video && fileExists(tour.video)) {
      html += '<div class="rdx-tour-video-wrapper">';
      html += '<video class="rdx-tour-video" src="' + tour.video + '" autoplay loop muted playsinline></video>';
      html += '</div>';
    } else if (tour.instructions) {
      html += '<div class="rdx-tour-instructions">';
      if (tour.instructions.heading) {
        html += '<div class="rdx-tour-instructions-heading">' + escapeHtml(tour.instructions.heading) + '</div>';
      }
      if (Array.isArray(tour.instructions.steps)) {
        html += '<ol class="rdx-tour-instructions-list">';
        tour.instructions.steps.forEach(function(step) {
          html += '<li class="rdx-tour-instructions-step">';
          if (step.num) html += '<span class="rdx-tour-instructions-num">' + escapeHtml(step.num) + '</span>';
          html += '<div class="rdx-tour-instructions-body">';
          if (step.title) html += '<div class="rdx-tour-instructions-step-title">' + escapeHtml(step.title) + '</div>';
          if (step.desc) html += '<div class="rdx-tour-instructions-step-desc">' + escapeHtml(step.desc) + '</div>';
          html += '</div></li>';
        });
        html += '</ol>';
      }
      if (tour.instructions.tip) {
        html += '<div class="rdx-tour-instructions-tip">💡 ' + escapeHtml(tour.instructions.tip) + '</div>';
      }
      html += '</div>';
    }
    // (No more "Video demo coming soon" placeholder — content speaks for itself.)

    // Content section
    html += '<div class="rdx-tour-content">';
    html += '<button class="rdx-tour-close" onclick="RdxTours.close()">×</button>';
    html += '<div class="rdx-tour-title">' + escapeHtml(tour.title) + '</div>';
    html += '<div class="rdx-tour-desc">' + escapeHtml(tour.description) + '</div>';
    
    html += '<div class="rdx-tour-actions">';
    html += '<button class="rdx-tour-btn rdx-tour-btn-secondary" onclick="RdxTours.skip()">Skip</button>';
    if (tour.steps && tour.steps.length > 1) {
      html += '<button class="rdx-tour-btn rdx-tour-btn-primary" onclick="RdxTours.next()">Next →</button>';
    } else {
      html += '<button class="rdx-tour-btn rdx-tour-btn-primary" onclick="RdxTours.gotIt()">Got it!</button>';
    }
    html += '</div>';

    // Progress dots
    if (tour.steps && tour.steps.length > 1) {
      html += '<div class="rdx-tour-progress">';
      for (var i = 0; i < tour.steps.length; i++) {
        html += '<div class="rdx-tour-dot' + (i === 0 ? ' active' : '') + '"></div>';
      }
      html += '</div>';
    }

    html += '</div>';

    card.innerHTML = html;
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  }

  // Show inline tooltip
  function showInlineTooltip(tour, targetElement) {
    var tooltip = document.createElement('div');
    tooltip.className = 'rdx-tour-tooltip bottom';
    
    var rect = targetElement.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.bottom + 10) + 'px';

    var html = '';
    html += '<div class="rdx-tour-tooltip-title">' + escapeHtml(tour.title) + '</div>';
    html += '<div class="rdx-tour-tooltip-text">' + escapeHtml(tour.description) + '</div>';
    html += '<div class="rdx-tour-tooltip-action" onclick="RdxTours.show(\'' + activeTour + '\')">▶ Watch demo</div>';
    html += '<button class="rdx-tour-close" onclick="this.parentElement.remove();RdxTours.markSeen(\'' + activeTour + '\')">×</button>';

    tooltip.innerHTML = html;
    document.body.appendChild(tooltip);

    // Auto-dismiss after 10 seconds
    setTimeout(function() {
      if (tooltip.parentElement) {
        tooltip.remove();
        RdxTours.markSeen(activeTour);
      }
    }, 10000);
  }

  // Next step in multi-step tour
  RdxTours.next = function() {
    var tour = TOURS[activeTour];
    if (!tour || !tour.steps) return;

    activeStep++;
    if (activeStep >= tour.steps.length) {
      RdxTours.gotIt();
      return;
    }

    // Update content
    var step = tour.steps[activeStep];
    var card = document.querySelector('.rdx-tour-card');
    if (!card) return;

    card.querySelector('.rdx-tour-title').textContent = step.title;
    card.querySelector('.rdx-tour-desc').textContent = step.desc;

    // Update progress dots
    var dots = card.querySelectorAll('.rdx-tour-dot');
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === activeStep);
    });

    // Update button
    var btn = card.querySelector('.rdx-tour-btn-primary');
    if (activeStep === tour.steps.length - 1) {
      btn.textContent = 'Got it!';
      btn.onclick = function() { RdxTours.gotIt(); };
    } else {
      btn.textContent = 'Next →';
    }
  };

  // User acknowledges tour
  RdxTours.gotIt = function() {
    RdxTours.markSeen(activeTour);
    closeTour();
  };

  // User skips tour
  RdxTours.skip = function() {
    RdxTours.markSeen(activeTour);
    closeTour();
  };

  // Close tour
  RdxTours.close = function() {
    closeTour();
  };

  function closeTour() {
    var overlay = document.querySelector('.rdx-tour-overlay');
    if (overlay) overlay.remove();
    
    var tooltips = document.querySelectorAll('.rdx-tour-tooltip');
    tooltips.forEach(function(t) { t.remove(); });

    activeTour = null;
    activeStep = 0;
  }

  // Mark tour as seen
  RdxTours.markSeen = function(tourId) {
    seenTours[tourId] = true;
    localStorage.setItem('rdx-tours-seen', JSON.stringify(seenTours));
  };

  // Reset tours (for testing)
  RdxTours.reset = function() {
    localStorage.removeItem('rdx-tours-seen');
    seenTours = {};
    rdxLog('All tours reset');
  };

  // Check if tour has been seen
  RdxTours.hasSeen = function(tourId) {
    return !!seenTours[tourId];
  };

  // Auto-attach tours to elements with data-tour attribute
  function initAutoTours() {
    document.querySelectorAll('[data-tour]').forEach(function(el) {
      if (el.dataset.tourAttached) return;
      el.dataset.tourAttached = 'true';

      var tourId = el.dataset.tour;
      var tour = TOURS[tourId];
      if (!tour) return;

      // Show tooltip on first hover/focus
      var shown = false;
      function maybeShow() {
        if (shown || seenTours[tourId]) return;
        shown = true;
        
        if (tour.inline) {
          RdxTours.show(tourId, el);
        }
      }

      el.addEventListener('mouseenter', maybeShow, { once: true });
      el.addEventListener('focus', maybeShow, { once: true });
    });
  }

  // Helper: check if file exists (simplified)
  function fileExists(path) {
    // In production, you'd check if the file actually exists
    // For now, return false to show placeholder
    return false;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAutoTours);
  } else {
    initAutoTours();
  }

  // Re-scan for new elements periodically
  setInterval(initAutoTours, 2000);

})();
