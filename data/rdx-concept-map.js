/* DEPRECATED: rdx-concept-map.js
 *
 * This file is kept for backward compatibility with any cached
 * references or external links. New code should load:
 *   /data/concept-maps/manifest.js
 *   /data/concept-maps/<domain>.js
 *
 * This shim does nothing on its own; the page loads the manifest
 * and per-domain files explicitly. If something still references
 * RDX_CONCEPT_MAP via this file, the cardiology data will populate
 * it as long as cardiology.js has been loaded.
 */

(function () {
  if (window.RDX_CONCEPT_MAPS && window.RDX_CONCEPT_MAPS.cardiology) {
    window.RDX_CONCEPT_MAP = window.RDX_CONCEPT_MAPS.cardiology;
  }
})();
