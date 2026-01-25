/**
 * DxSuite PubMed Monitoring Configuration
 * Automated tracking of new guidelines, systematic reviews, and key publications
 * 
 * To use with NCBI E-utilities API:
 * 1. Optional: Register for API key at https://www.ncbi.nlm.nih.gov/account/
 * 2. Set NCBI_API_KEY environment variable (increases rate limit from 3/sec to 10/sec)
 * 3. Run: node pubmed-monitor.js
 */

const PUBMED_CONFIG = {
    // API Settings
    api: {
        baseUrl: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/',
        searchEndpoint: 'esearch.fcgi',
        fetchEndpoint: 'efetch.fcgi',
        linkEndpoint: 'elink.fcgi',
        // Rate limiting: without API key = 3 requests/second, with key = 10/second
        requestDelayMs: 350, // Safe for no API key
    },

    // Topics to monitor - each maps to DxSuite content
    monitoredTopics: [
        // ==================== CARDIOLOGY ====================
        {
            topic: 'ACLS/Resuscitation',
            dxsuiteContent: ['acls-rhythms-deep-dive.json', 'cardiac-arrest-adventure.html'],
            queries: [
                '"advanced cardiac life support"[Title] AND guideline[Title]',
                '"cardiopulmonary resuscitation"[Title] AND (guideline[Title] OR recommendations[Title])',
                'AHA[Author] AND resuscitation[Title] AND systematic review[pt]',
            ],
            keyOrganizations: ['American Heart Association', 'European Resuscitation Council'],
            lastKnownGuideline: { year: 2020, source: 'AHA' }
        },
        {
            topic: 'Acute Coronary Syndrome',
            dxsuiteContent: ['acs-deep-dive-complete.json', 'acs-expanded-adventure.html'],
            queries: [
                '"acute coronary syndrome"[Title] AND guideline[Title] AND (ACC[Author] OR AHA[Author])',
                'STEMI[Title] AND management[Title] AND guideline[pt]',
                'NSTEMI[Title] AND (guideline[Title] OR recommendations[Title])',
            ],
            keyOrganizations: ['ACC', 'AHA', 'ESC'],
            lastKnownGuideline: { year: 2021, source: 'AHA/ACC' }
        },
        {
            topic: 'Heart Failure',
            dxsuiteContent: ['heart-failure.html', 'chf-deep-dive.json'],
            queries: [
                '"heart failure"[Title] AND guideline[Title] AND (AHA[Author] OR ACC[Author])',
                'heart failure[Title] AND (SGLT2[Title] OR sacubitril[Title]) AND systematic review[pt]',
            ],
            keyOrganizations: ['ACC', 'AHA', 'HFSA'],
            lastKnownGuideline: { year: 2022, source: 'AHA/ACC/HFSA' }
        },
        {
            topic: 'Hypertensive Emergency',
            dxsuiteContent: ['hypertensive-emergency-deep-dive.json'],
            queries: [
                '"hypertensive emergency"[Title] AND (guideline[Title] OR management[Title])',
                '"hypertensive crisis"[Title] AND systematic review[pt]',
            ],
            keyOrganizations: ['AHA', 'ACC'],
            lastKnownGuideline: { year: 2017, source: 'AHA/ACC' }
        },

        // ==================== PULMONARY ====================
        {
            topic: 'Pulmonary Embolism',
            dxsuiteContent: ['pe-deep-dive.json', 'pe-adventure.html'],
            queries: [
                '"pulmonary embolism"[Title] AND guideline[Title]',
                'VTE[Title] AND (CHEST[Author] OR antithrombotic[Title]) AND guideline[pt]',
                '"venous thromboembolism"[Title] AND treatment[Title] AND systematic review[pt]',
            ],
            keyOrganizations: ['CHEST/ACCP', 'ESC'],
            lastKnownGuideline: { year: 2021, source: 'CHEST' }
        },
        {
            topic: 'DVT',
            dxsuiteContent: ['dvt-deep-dive.json'],
            queries: [
                '"deep vein thrombosis"[Title] AND (guideline[Title] OR diagnosis[Title] OR treatment[Title])',
                'DVT[Title] AND anticoagulation[Title] AND systematic review[pt]',
            ],
            keyOrganizations: ['CHEST/ACCP', 'ASH'],
            lastKnownGuideline: { year: 2021, source: 'CHEST' }
        },
        {
            topic: 'Tension Pneumothorax',
            dxsuiteContent: ['tension-pneumothorax-deep-dive.json'],
            queries: [
                '"tension pneumothorax"[Title] AND (management[Title] OR decompression[Title])',
                'pneumothorax[Title] AND treatment[Title] AND guideline[pt]',
            ],
            keyOrganizations: ['BTS', 'ACEP'],
            lastKnownGuideline: { year: 2023, source: 'BTS' }
        },

        // ==================== CRITICAL CARE ====================
        {
            topic: 'Sepsis',
            dxsuiteContent: ['sepsis-deep-dive.json', 'sepsis-expanded-adventure.html'],
            queries: [
                '"surviving sepsis"[Title] AND guideline[Title]',
                'sepsis[Title] AND (definition[Title] OR criteria[Title]) AND consensus[Title]',
                'septic shock[Title] AND management[Title] AND systematic review[pt]',
            ],
            keyOrganizations: ['SCCM', 'ESICM'],
            lastKnownGuideline: { year: 2021, source: 'Surviving Sepsis Campaign' },
            priority: 'HIGH' // Frequently updated
        },
        {
            topic: 'Acid-Base',
            dxsuiteContent: ['acid-base-interpretation-deep-dive.json'],
            queries: [
                '"acid-base"[Title] AND (interpretation[Title] OR approach[Title])',
                'metabolic acidosis[Title] AND systematic review[pt]',
            ],
            keyOrganizations: [],
            lastKnownGuideline: null // No specific guideline body
        },

        // ==================== PEDIATRICS ====================
        {
            topic: 'Bronchiolitis',
            dxsuiteContent: ['bronchiolitis-deep-dive.json'],
            queries: [
                'bronchiolitis[Title] AND (guideline[Title] OR clinical practice[Title]) AND AAP[Author]',
                'bronchiolitis[Title] AND management[Title] AND systematic review[pt]',
            ],
            keyOrganizations: ['AAP', 'NICE'],
            lastKnownGuideline: { year: 2014, source: 'AAP' }
        },
        {
            topic: 'Croup',
            dxsuiteContent: ['croup-deep-dive.json'],
            queries: [
                'croup[Title] AND (guideline[Title] OR management[Title])',
                'laryngotracheobronchitis[Title] AND treatment[Title]',
            ],
            keyOrganizations: ['AAP'],
            lastKnownGuideline: null
        },
        {
            topic: 'Kawasaki Disease',
            dxsuiteContent: ['kawasaki-disease-deep-dive.json'],
            queries: [
                '"kawasaki disease"[Title] AND (guideline[Title] OR statement[Title])',
                '"kawasaki disease"[Title] AND (diagnosis[Title] OR treatment[Title]) AND systematic review[pt]',
            ],
            keyOrganizations: ['AHA', 'AAP'],
            lastKnownGuideline: { year: 2017, source: 'AHA' }
        },
        {
            topic: 'Febrile Infant',
            dxsuiteContent: ['febrile-infant-deep-dive.json'],
            queries: [
                '"febrile infant"[Title] AND (guideline[Title] OR management[Title])',
                'fever[Title] AND infant[Title] AND AAP[Author]',
            ],
            keyOrganizations: ['AAP'],
            lastKnownGuideline: { year: 2021, source: 'AAP' }
        },

        // ==================== NEUROLOGY ====================
        {
            topic: 'Stroke',
            dxsuiteContent: ['stroke-deep-dive.json'],
            queries: [
                '"acute ischemic stroke"[Title] AND guideline[Title] AND AHA[Author]',
                'stroke[Title] AND (thrombolysis[Title] OR thrombectomy[Title]) AND systematic review[pt]',
            ],
            keyOrganizations: ['AHA/ASA'],
            lastKnownGuideline: { year: 2019, source: 'AHA/ASA' }
        },
        {
            topic: 'Subarachnoid Hemorrhage',
            dxsuiteContent: ['subarachnoid-hemorrhage-deep-dive.json'],
            queries: [
                '"subarachnoid hemorrhage"[Title] AND guideline[Title]',
                'aneurysmal SAH[Title] AND management[Title]',
            ],
            keyOrganizations: ['AHA/ASA', 'Neurocritical Care Society'],
            lastKnownGuideline: { year: 2023, source: 'AHA/ASA' }
        },

        // ==================== INFECTIOUS DISEASE ====================
        {
            topic: 'Meningitis',
            dxsuiteContent: ['meningitis-deep-dive.json'],
            queries: [
                '"bacterial meningitis"[Title] AND (guideline[Title] OR management[Title])',
                'meningitis[Title] AND IDSA[Author]',
            ],
            keyOrganizations: ['IDSA'],
            lastKnownGuideline: { year: 2017, source: 'IDSA' }
        },
        {
            topic: 'Pneumonia',
            dxsuiteContent: ['pneumonia-deep-dive.json'],
            queries: [
                '"community-acquired pneumonia"[Title] AND guideline[Title]',
                'CAP[Title] AND (IDSA[Author] OR ATS[Author])',
            ],
            keyOrganizations: ['IDSA', 'ATS'],
            lastKnownGuideline: { year: 2019, source: 'IDSA/ATS' }
        },
        {
            topic: 'Diabetic Foot Infection',
            dxsuiteContent: ['diabetic-foot-infection-deep-dive.json'],
            queries: [
                '"diabetic foot infection"[Title] AND guideline[Title]',
                'diabetic foot[Title] AND IDSA[Author]',
            ],
            keyOrganizations: ['IDSA'],
            lastKnownGuideline: { year: 2012, source: 'IDSA' }
        },

        // ==================== OB/GYN ====================
        {
            topic: 'Preeclampsia',
            dxsuiteContent: ['preeclampsia-module.html'],
            queries: [
                'preeclampsia[Title] AND (guideline[Title] OR practice bulletin[Title])',
                'preeclampsia[Title] AND ACOG[Author]',
                'hypertensive disorders of pregnancy[Title] AND guideline[pt]',
            ],
            keyOrganizations: ['ACOG'],
            lastKnownGuideline: { year: 2020, source: 'ACOG' }
        },

        // ==================== ALLERGY/IMMUNOLOGY ====================
        {
            topic: 'Anaphylaxis',
            dxsuiteContent: ['anaphylaxis-deep-dive.json', 'anaphylaxis-adventure.html'],
            queries: [
                'anaphylaxis[Title] AND (guideline[Title] OR parameter[Title])',
                'anaphylaxis[Title] AND epinephrine[Title] AND systematic review[pt]',
            ],
            keyOrganizations: ['AAAAI', 'ACAAI', 'WAO'],
            lastKnownGuideline: { year: 2020, source: 'AAAAI/ACAAI' }
        },
        {
            topic: 'Penicillin Allergy',
            dxsuiteContent: ['penicillin-delabeling-deep-dive.json'],
            queries: [
                '"penicillin allergy"[Title] AND (delabeling[Title] OR testing[Title])',
                '"drug allergy"[Title] AND guideline[Title]',
            ],
            keyOrganizations: ['AAAAI', 'IDSA'],
            lastKnownGuideline: { year: 2022, source: 'IDSA' }
        },
    ],

    // Alert thresholds
    alerts: {
        // Alert immediately if a major guideline from these organizations
        majorGuidelineOrgs: [
            'American Heart Association',
            'American College of Cardiology', 
            'Surviving Sepsis Campaign',
            'IDSA',
            'AAP',
            'ACOG',
            'CHEST',
            'ATS',
        ],
        // Alert if publication has these characteristics
        highImpactFilters: [
            'guideline[pt]',
            'practice guideline[pt]',
            'consensus[Title]',
            'statement[Title]',
        ],
        // Number of days to look back for each check
        lookbackDays: 30,
    },

    // Output settings
    output: {
        reportDir: './admin/reports/',
        alertLogFile: './admin/reports/guideline-alerts.json',
        fullReportFile: './admin/reports/pubmed-monitoring-report.json',
    }
};

/**
 * Generate PubMed search URL for a topic
 */
function generateSearchUrl(query, daysBack = 30) {
    const baseUrl = PUBMED_CONFIG.api.baseUrl + PUBMED_CONFIG.api.searchEndpoint;
    const dateFilter = `"last ${daysBack} days"[dp]`;
    const fullQuery = `(${query}) AND ${dateFilter}`;
    
    const params = new URLSearchParams({
        db: 'pubmed',
        term: fullQuery,
        retmax: 20,
        retmode: 'json',
        sort: 'date'
    });
    
    return `${baseUrl}?${params.toString()}`;
}

/**
 * Generate RSS feed URL for continuous monitoring
 */
function generateRssUrl(query) {
    const baseUrl = 'https://pubmed.ncbi.nlm.nih.gov/rss/search/';
    const encodedQuery = encodeURIComponent(query);
    return `${baseUrl}?term=${encodedQuery}&limit=20&fc=20250101000000&StartDate=2024-01-01&EndDate=2030-12-31`;
}

/**
 * Sample monitoring script
 */
async function checkForUpdates() {
    const https = require('https');
    const results = [];
    
    for (const topic of PUBMED_CONFIG.monitoredTopics) {
        console.log(`\nChecking: ${topic.topic}`);
        
        for (const query of topic.queries) {
            const url = generateSearchUrl(query);
            
            try {
                const response = await fetchUrl(url);
                const data = JSON.parse(response);
                
                if (data.esearchresult && data.esearchresult.count > 0) {
                    results.push({
                        topic: topic.topic,
                        query: query,
                        count: parseInt(data.esearchresult.count),
                        ids: data.esearchresult.idlist,
                        affectedContent: topic.dxsuiteContent,
                        lastKnownGuideline: topic.lastKnownGuideline
                    });
                    console.log(`  Found ${data.esearchresult.count} new results`);
                }
                
                // Rate limiting
                await sleep(PUBMED_CONFIG.api.requestDelayMs);
                
            } catch (error) {
                console.error(`  Error: ${error.message}`);
            }
        }
    }
    
    return results;
}

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const https = require('https');
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PUBMED_CONFIG,
        generateSearchUrl,
        generateRssUrl,
        checkForUpdates
    };
}

// Run if called directly
if (require.main === module) {
    console.log('DxSuite PubMed Monitoring System');
    console.log('================================\n');
    console.log(`Monitoring ${PUBMED_CONFIG.monitoredTopics.length} topics\n`);
    
    checkForUpdates().then(results => {
        console.log('\n================================');
        console.log('SUMMARY');
        console.log('================================');
        
        const withResults = results.filter(r => r.count > 0);
        if (withResults.length === 0) {
            console.log('No new publications found in monitored topics.');
        } else {
            console.log(`Found ${withResults.length} topics with new publications:`);
            withResults.forEach(r => {
                console.log(`  - ${r.topic}: ${r.count} new items`);
            });
        }
    }).catch(console.error);
}
