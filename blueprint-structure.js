/**
 * USMLE BLUEPRINT STRUCTURE - Vanilla JS Version
 */
const USMLEBlueprint = {
    domains: {
        BIOCHEMISTRY: {
            id: 'BIOCHEMISTRY', name: 'Biochemistry & Nutrition', weight: 0.17, color: '#8B5CF6', icon: '🧬',
            subdomains: {
                metabolism: { id: 'metabolism', name: 'Metabolism', topics: [
                    { id: 'glycolysis', name: 'Glycolysis', depth: 3, highYield: true },
                    { id: 'gluconeogenesis', name: 'Gluconeogenesis', depth: 3, highYield: true },
                    { id: 'tca_cycle', name: 'TCA Cycle', depth: 3, highYield: true },
                    { id: 'beta_oxidation', name: 'Beta Oxidation', depth: 3, highYield: true }
                ]},
                nutrition: { id: 'nutrition', name: 'Nutrition', topics: [
                    { id: 'vitamins_water', name: 'Water-Soluble Vitamins', depth: 3, highYield: true },
                    { id: 'vitamins_fat', name: 'Fat-Soluble Vitamins', depth: 3, highYield: true }
                ]}
            }
        },
        PHYSIOLOGY: {
            id: 'PHYSIOLOGY', name: 'Physiology', weight: 0.17, color: '#3B82F6', icon: '💓',
            subdomains: {
                cardiovascular: { id: 'cardiovascular', name: 'Cardiovascular', topics: [
                    { id: 'cardiac_cycle', name: 'Cardiac Cycle', depth: 3, highYield: true },
                    { id: 'cardiac_output', name: 'Cardiac Output', depth: 3, highYield: true },
                    { id: 'frank_starling', name: 'Frank-Starling', depth: 3, highYield: true },
                    { id: 'pressure_volume', name: 'Pressure-Volume Loops', depth: 3, highYield: true }
                ]},
                renal: { id: 'renal', name: 'Renal', topics: [
                    { id: 'gfr', name: 'Glomerular Filtration', depth: 3, highYield: true },
                    { id: 'tubular_function', name: 'Tubular Function', depth: 3, highYield: true },
                    { id: 'raas', name: 'RAAS System', depth: 3, highYield: true },
                    { id: 'diuretics', name: 'Diuretic Mechanisms', depth: 3, highYield: true }
                ]},
                respiratory: { id: 'respiratory', name: 'Respiratory', topics: [
                    { id: 'lung_volumes', name: 'Lung Volumes', depth: 3, highYield: true },
                    { id: 'vq_matching', name: 'V/Q Matching', depth: 3, highYield: true },
                    { id: 'oxygen_hemoglobin', name: 'O2-Hb Curve', depth: 3, highYield: true }
                ]}
            }
        },
        PATHOLOGY: {
            id: 'PATHOLOGY', name: 'Pathology', weight: 0.17, color: '#EF4444', icon: '🔴',
            subdomains: {
                general: { id: 'general', name: 'General Pathology', topics: [
                    { id: 'cell_injury', name: 'Cell Injury', depth: 3, highYield: true },
                    { id: 'inflammation', name: 'Inflammation', depth: 3, highYield: true },
                    { id: 'neoplasia', name: 'Neoplasia', depth: 3, highYield: true }
                ]},
                cardiovascular: { id: 'cardiovascular', name: 'Cardiovascular', topics: [
                    { id: 'heart_failure', name: 'Heart Failure', depth: 3, highYield: true },
                    { id: 'ihd', name: 'Ischemic Heart Disease', depth: 3, highYield: true },
                    { id: 'valvular', name: 'Valvular Disease', depth: 3, highYield: true }
                ]},
                renal: { id: 'renal', name: 'Renal', topics: [
                    { id: 'aki', name: 'Acute Kidney Injury', depth: 3, highYield: true },
                    { id: 'glomerular', name: 'Glomerular Diseases', depth: 3, highYield: true }
                ]}
            }
        },
        PHARMACOLOGY: {
            id: 'PHARMACOLOGY', name: 'Pharmacology', weight: 0.17, color: '#6366F1', icon: '💊',
            subdomains: {
                autonomic: { id: 'autonomic', name: 'Autonomic', topics: [
                    { id: 'cholinergics', name: 'Cholinergic Drugs', depth: 3, highYield: true },
                    { id: 'adrenergics', name: 'Adrenergic Drugs', depth: 3, highYield: true }
                ]},
                cardiovascular: { id: 'cardiovascular', name: 'Cardiovascular', topics: [
                    { id: 'antihypertensives', name: 'Antihypertensives', depth: 3, highYield: true },
                    { id: 'hf_drugs', name: 'Heart Failure Drugs', depth: 3, highYield: true },
                    { id: 'anticoagulants', name: 'Anticoagulants', depth: 3, highYield: true }
                ]}
            }
        },
        MICROBIOLOGY: {
            id: 'MICROBIOLOGY', name: 'Microbiology', weight: 0.12, color: '#10B981', icon: '🦠',
            subdomains: {
                bacteriology: { id: 'bacteriology', name: 'Bacteriology', topics: [
                    { id: 'gram_pos_cocci', name: 'Gram+ Cocci', depth: 3, highYield: true },
                    { id: 'gram_neg_rods', name: 'Gram- Rods', depth: 3, highYield: true }
                ]},
                virology: { id: 'virology', name: 'Virology', topics: [
                    { id: 'hiv', name: 'HIV/AIDS', depth: 3, highYield: true },
                    { id: 'hepatitis', name: 'Hepatitis Viruses', depth: 3, highYield: true }
                ]}
            }
        },
        IMMUNOLOGY: {
            id: 'IMMUNOLOGY', name: 'Immunology', weight: 0.12, color: '#F59E0B', icon: '🛡️',
            subdomains: {
                adaptive: { id: 'adaptive', name: 'Adaptive Immunity', topics: [
                    { id: 't_cells', name: 'T Cells', depth: 3, highYield: true },
                    { id: 'b_cells', name: 'B Cells', depth: 3, highYield: true },
                    { id: 'antibodies', name: 'Antibodies', depth: 3, highYield: true }
                ]},
                hypersensitivity: { id: 'hypersensitivity', name: 'Hypersensitivity', topics: [
                    { id: 'type1', name: 'Type I (IgE)', depth: 3, highYield: true },
                    { id: 'type2', name: 'Type II', depth: 3, highYield: true },
                    { id: 'type3', name: 'Type III', depth: 3, highYield: true },
                    { id: 'type4', name: 'Type IV', depth: 3, highYield: true }
                ]}
            }
        },
        BEHAVIORAL: {
            id: 'BEHAVIORAL', name: 'Behavioral Science', weight: 0.07, color: '#EC4899', icon: '🧠',
            subdomains: {
                biostatistics: { id: 'biostatistics', name: 'Biostatistics', topics: [
                    { id: 'study_types', name: 'Study Types', depth: 3, highYield: true },
                    { id: 'sens_spec', name: 'Sensitivity & Specificity', depth: 3, highYield: true },
                    { id: 'bias', name: 'Types of Bias', depth: 2, highYield: true }
                ]}
            }
        }
    }
};
window.USMLEBlueprint = USMLEBlueprint;
