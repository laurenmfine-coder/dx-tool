/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx RPFS Visualizer — rdx-rpfs-viz.js
 * ═══════════════════════════════════════════════════════════════
 * Renders the student's reasoning trace as an interactive SVG
 * force-directed graph. Shows diagnoses, evidence, connections,
 * and the evolution across phases.
 *
 * Generates an SVG element that can be inserted into the chat,
 * the dashboard, or exported as an image.
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  const RPFSViz = {

    /**
     * Render a reasoning trace graph into a container element.
     * Uses pure SVG with simple force layout (no D3 dependency).
     */
    render: function(containerId, graphData, options) {
      options = options || {};
      var width = options.width || 700;
      var height = options.height || 400;
      var container = document.getElementById(containerId);
      if (!container || !graphData) return;

      var nodes = graphData.nodes || [];
      var edges = graphData.edges || [];

      if (nodes.length === 0) {
        container.innerHTML = '<div style="text-align:center;color:#999;padding:20px;font-size:13px;">No reasoning trace data to visualize.</div>';
        return;
      }

      // Assign positions using simple force-directed layout
      var positioned = this._layoutNodes(nodes, edges, width, height);

      // Build SVG
      var svg = '<svg viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:' + width + 'px;background:#fafbfc;border-radius:10px;border:1px solid #e2e8f0;">';

      // Title
      svg += '<text x="' + (width/2) + '" y="24" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#1B4F72">Reasoning Pathway Fingerprint</text>';

      // Phase legend
      var phaseColors = { 1: '#3498DB', 2: '#2ECC71', 3: '#E67E22', 4: '#9B59B6', 5: '#1ABC9C', 6: '#E74C3C', 7: '#F39C12' };
      var legendX = 10;
      svg += '<g transform="translate(' + legendX + ', ' + (height - 20) + ')">';
      Object.entries(phaseColors).forEach(function(entry, i) {
        svg += '<circle cx="' + (i * 80 + 10) + '" cy="0" r="5" fill="' + entry[1] + '"/>';
        svg += '<text x="' + (i * 80 + 20) + '" y="4" font-size="9" fill="#666" font-family="Arial">P' + entry[0] + '</text>';
      });
      svg += '</g>';

      // Draw edges first (behind nodes)
      edges.forEach(function(edge) {
        var from = positioned.find(function(n) { return n.id === edge.from; });
        var to = positioned.find(function(n) { return n.id === edge.to; });
        if (from && to) {
          var strokeWidth = Math.max(1, (edge.strength || 1) * 0.8);
          svg += '<line x1="' + from.x + '" y1="' + from.y + '" x2="' + to.x + '" y2="' + to.y + '" stroke="#CBD5E1" stroke-width="' + strokeWidth + '" stroke-dasharray="' + (edge.strength < 2 ? '4,3' : 'none') + '"/>';
        }
      });

      // ── Node type colors ─────────────────────────────────────────────
      var evidenceColors = {
        history:      '#F0F9FF',  // light blue
        lab:          '#F0FDF4',  // light green
        imaging:      '#FFF7ED',  // light orange
        metacognition:'#F5F3FF',  // light purple
        bias:         '#FEF2F2'   // light red
      };
      var evidenceStrokes = {
        history:      '#BAE6FD',
        lab:          '#A7F3D0',
        imaging:      '#FED7AA',
        metacognition:'#DDD6FE',
        bias:         '#FECACA'
      };

      // Draw nodes
      positioned.forEach(function(node) {
        var isDx  = node.type === 'diagnosis';
        var isBias = node.category === 'bias';
        var isMeta = node.category === 'metacognition';
        var isActive = node.active !== false;
        var isTarget = node.isTarget === true;
        var radius = isDx ? 30 : isBias ? 22 : 18;

        // Fill color
        var fill, stroke, strokeW;
        if (isDx) {
          if (isTarget && isActive) {
            fill = '#059669';      // green = target reached
            stroke = '#064E3B';
          } else if (!isActive) {
            fill = '#CBD5E1';      // grey = dropped
            stroke = '#94A3B8';
          } else {
            fill = phaseColors[node.phase] || '#3498DB';
            stroke = '#1B4F72';
          }
          strokeW = isTarget ? 3 : 2;
        } else {
          fill = evidenceColors[node.category] || '#F0F4F8';
          stroke = evidenceStrokes[node.category] || '#94A3B8';
          strokeW = isBias ? 2 : 1;
        }
        var opacity = isActive ? 1 : 0.45;

        svg += '<g transform="translate(' + node.x + ',' + node.y + ')" opacity="' + opacity + '">';

        if (isDx) {
          // Diagnosis: rounded rectangle; target gets gold ring
          svg += '<rect x="' + (-radius) + '" y="' + (-radius/2) + '" width="' + (radius*2) + '" height="' + (radius) + '" rx="8" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + strokeW + '"/>';
          if (isTarget && isActive) {
            // Gold crown marker above target dx
            svg += '<text x="0" y="' + (-radius/2 - 4) + '" text-anchor="middle" font-size="10">✓</text>';
          }
          if (!isActive) {
            svg += '<line x1="' + (-radius+4) + '" y1="0" x2="' + (radius-4) + '" y2="0" stroke="#E74C3C" stroke-width="1.5"/>';
          }
        } else if (isBias) {
          // Bias: diamond shape
          var s = radius;
          svg += '<polygon points="0,' + (-s) + ' ' + s + ',0 0,' + s + ' ' + (-s) + ',0" fill="' + fill + '" stroke="' + stroke + '" stroke-width="2"/>';
        } else {
          // Evidence: circle
          svg += '<circle cx="0" cy="0" r="' + radius + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + strokeW + '"/>';
        }

        // Label — wrap long labels
        var label = node.label || '';
        if (label.length > 18) label = label.substring(0, 16) + '…';
        var fontSize = isDx ? 9 : isBias ? 8 : 8;
        var textColor = (isDx && !isActive) ? '#475569' : (isDx ? '#FFF' : '#334155');
        svg += '<text x="0" y="3" text-anchor="middle" font-family="Arial" font-size="' + fontSize + '" font-weight="' + (isDx ? '700' : '500') + '" fill="' + textColor + '">' + this._escSvg(label) + '</text>';

        svg += '</g>';
      }.bind(this));

      // Stats overlay — bias flags and confidence
      var stats = graphData.stats || {};
      var biasNodes = (graphData.nodes || []).filter(function(n) { return n.category === 'bias'; });
      var confNode  = (graphData.nodes || []).find(function(n) {
        return n.category === 'metacognition' && n.label && n.label.indexOf('Confidence:') === 0;
      });
      var statsLine = (stats.activeDiagnoses || 0) + ' active dx  |  ' +
        (stats.droppedDiagnoses || 0) + ' dropped  |  ' +
        (stats.evidenceNodes || 0) + ' evidence';
      if (biasNodes.length > 0) {
        statsLine += '  |  ⚠ ' + biasNodes.map(function(n) { return n.label.replace('⚠ ',''); }).join(', ');
      }
      if (confNode) statsLine += '  |  ' + confNode.label;
      svg += '<text x="' + (width - 10) + '" y="' + (height - 8) + '" text-anchor="end" font-family="Arial" font-size="9" fill="#94A3B8">' +
        statsLine + '</text>';

      svg += '</svg>';

      container.innerHTML = svg;
    },

    /**
     * Simple force-directed layout (no D3 needed).
     * Separates diagnoses (left) from evidence (right) with connections between.
     */
    _layoutNodes: function(nodes, edges, width, height) {
      var dxNodes = nodes.filter(function(n) { return n.type === 'diagnosis'; });
      var evNodes = nodes.filter(function(n) { return n.type === 'evidence'; });
      var margin = 60;

      // Layout diagnoses on the left, spread vertically by phase
      dxNodes.forEach(function(n, i) {
        n.x = margin + 80 + (n.phase || 1) * 50 + (Math.random() * 30 - 15);
        n.y = margin + 30 + i * ((height - margin * 2) / Math.max(dxNodes.length, 1));
      });

      // Layout evidence on the right, spread vertically by category
      var catOrder = { history: 0, exam: 1, lab: 2, imaging: 3, report: 4 };
      evNodes.sort(function(a, b) { return (catOrder[a.category] || 0) - (catOrder[b.category] || 0); });
      evNodes.forEach(function(n, i) {
        n.x = width - margin - 60 + (Math.random() * 30 - 15);
        n.y = margin + 30 + i * ((height - margin * 2) / Math.max(evNodes.length, 1));
      });

      // Simple repulsion pass
      var allNodes = dxNodes.concat(evNodes);
      for (var iter = 0; iter < 20; iter++) {
        for (var i = 0; i < allNodes.length; i++) {
          for (var j = i + 1; j < allNodes.length; j++) {
            var dx = allNodes[j].x - allNodes[i].x;
            var dy = allNodes[j].y - allNodes[i].y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 50 && dist > 0) {
              var force = (50 - dist) / dist * 0.3;
              allNodes[j].x += dx * force;
              allNodes[j].y += dy * force;
              allNodes[i].x -= dx * force;
              allNodes[i].y -= dy * force;
            }
          }
        }
        // Keep in bounds
        allNodes.forEach(function(n) {
          n.x = Math.max(margin, Math.min(width - margin, n.x));
          n.y = Math.max(margin, Math.min(height - margin, n.y));
        });
      }

      return allNodes;
    },

    _escSvg: function(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
  };

  window.RPFSViz = RPFSViz;
})();
