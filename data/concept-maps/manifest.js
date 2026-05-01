/* concept-maps/manifest.js
 *
 * Registry of available concept-map domains. The page reads this on
 * load to know which domain files to fetch and which to offer in the
 * domain switcher. Add a new domain by creating its data file in
 * /data/concept-maps/<id>.js and adding an entry below.
 *
 * Each entry:
 *   id:    URL slug used in ?domain=<id>; matches the data file name
 *   label: Display name for the domain switcher
 *   src:   Path to the data file (relative to site root)
 *   beta:  Optional. If true, render a beta tag in the switcher.
 *
 * Order matters: the first entry is the default domain when no
 * ?domain= param is present.
 */

window.RDX_CONCEPT_MAP_MANIFEST = [
  {
    id: "cardiology",
    label: "Cardiology",
    src: "/data/concept-maps/cardiology.js",
    beta: true
  }
  // Add more domains here as they are authored. Keep beta:true until
  // the domain has been validated through usage data.
];
