/* voice-input.js — Voice Input for Clinical Communication
 * Provides speech-to-text for consult-callback, simroomdx, and ed-board.
 */
(function() {
  'use strict';
  window.VoiceInput = {
    supported: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
    _recognition: null,
    _callback: null,

    init: function(callback) {
      this._callback = callback;
      if (!this.supported) return false;
      var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      this._recognition = new SR();
      this._recognition.continuous = false;
      this._recognition.interimResults = true;
      this._recognition.lang = 'en-US';
      var self = this;
      this._recognition.onresult = function(e) {
        var transcript = '';
        for (var i = e.resultIndex; i < e.results.length; i++) {
          transcript += e.results[i][0].transcript;
        }
        if (self._callback) self._callback(transcript, e.results[e.results.length-1].isFinal);
      };
      return true;
    },

    start: function() {
      if (this._recognition) this._recognition.start();
    },

    stop: function() {
      if (this._recognition) this._recognition.stop();
    }
  };
})();
