/**
 * INTERCONNECTION WEB - Cross-topic connections
 */
const InterconnectionWeb = {
    connections: [
        // Heart Failure Integration
        { from: { domain: 'PHYSIOLOGY', topic: 'frank_starling' }, to: { domain: 'PATHOLOGY', topic: 'heart_failure' }, type: 'mechanism', strength: 0.95, explanation: 'Frank-Starling explains HF pathophysiology' },
        { from: { domain: 'PHYSIOLOGY', topic: 'raas' }, to: { domain: 'PATHOLOGY', topic: 'heart_failure' }, type: 'mechanism', strength: 0.95, explanation: 'RAAS activation in HF causes volume overload' },
        { from: { domain: 'PATHOLOGY', topic: 'heart_failure' }, to: { domain: 'PHARMACOLOGY', topic: 'hf_drugs' }, type: 'treatment', strength: 0.95, explanation: 'Understanding HF guides drug selection' },
        { from: { domain: 'PATHOLOGY', topic: 'heart_failure' }, to: { domain: 'PATHOLOGY', topic: 'aki' }, type: 'complication', strength: 0.85, explanation: 'Cardiorenal syndrome' },
        
        // AKI Integration
        { from: { domain: 'PHYSIOLOGY', topic: 'gfr' }, to: { domain: 'PATHOLOGY', topic: 'aki' }, type: 'prerequisite', strength: 0.95, explanation: 'Must understand GFR to understand AKI' },
        { from: { domain: 'PHYSIOLOGY', topic: 'tubular_function' }, to: { domain: 'PHYSIOLOGY', topic: 'diuretics' }, type: 'mechanism', strength: 0.95, explanation: 'Each diuretic targets specific tubular segment' },
        
        // Diabetes Integration
        { from: { domain: 'BIOCHEMISTRY', topic: 'glycolysis' }, to: { domain: 'PATHOLOGY', topic: 'diabetes' }, type: 'mechanism', strength: 0.9 },
        
        // Immunology Integration
        { from: { domain: 'IMMUNOLOGY', topic: 'type1' }, to: { domain: 'PHARMACOLOGY', topic: 'adrenergics' }, type: 'treatment', strength: 0.9, explanation: 'Epinephrine for anaphylaxis' }
    ],
    
    integrationClusters: {
        heart_failure: {
            name: 'Heart Failure Integration',
            topics: ['PHYSIOLOGY.cardiovascular.frank_starling', 'PHYSIOLOGY.renal.raas', 'PATHOLOGY.cardiovascular.heart_failure', 'PHARMACOLOGY.cardiovascular.hf_drugs']
        },
        aki: {
            name: 'AKI Integration',
            topics: ['PHYSIOLOGY.renal.gfr', 'PHYSIOLOGY.renal.tubular_function', 'PATHOLOGY.renal.aki']
        }
    }
};
window.InterconnectionWeb = InterconnectionWeb;
