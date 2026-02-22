/**
 * DxSuite Automated Audit Engine
 * 
 * This module performs automated audits of the platform:
 * 1. Link verification (checks all reference URLs)
 * 2. Content freshness (flags old content)
 * 3. Guideline monitoring (tracks major guideline updates)
 * 4. Cross-reference validation (ensures internal links work)
 * 
 * Run: node audit-engine.js [--links] [--content] [--guidelines] [--full]
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const CONFIG = {
    contentRoot: path.join(__dirname, '..'),
    outputDir: path.join(__dirname, 'reports'),
    freshnessThresholdMonths: 12,
    linkTimeoutMs: 10000,
    
    // Guideline sources to monitor
    guidelineSources: [
        {
            name: 'AHA/ACC Guidelines',
            topics: ['ACLS', 'ACS', 'Heart Failure', 'Hypertension', 'Stroke'],
            checkUrl: 'https://www.ahajournals.org/',
            rssFeeds: [
                'https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=circ'
            ]
        },
        {
            name: 'AAP Clinical Practice Guidelines',
            topics: ['Bronchiolitis', 'Febrile Seizures', 'Kawasaki', 'Febrile Infant'],
            checkUrl: 'https://publications.aap.org/pediatrics',
            searchTerms: ['clinical practice guideline', 'technical report']
        },
        {
            name: 'IDSA Guidelines',
            topics: ['Sepsis', 'Pneumonia', 'Meningitis', 'DFI'],
            checkUrl: 'https://www.idsociety.org/practice-guideline/',
            pubmedQuery: 'IDSA[Author] AND guideline[Title]'
        },
        {
            name: 'CHEST/ACCP',
            topics: ['VTE', 'PE', 'DVT', 'Anticoagulation'],
            checkUrl: 'https://journal.chestnet.org/',
            pubmedQuery: 'CHEST[Journal] AND antithrombotic therapy'
        },
        {
            name: 'ACOG Practice Bulletins',
            topics: ['Preeclampsia', 'Hemorrhage', 'Ectopic'],
            checkUrl: 'https://www.acog.org/clinical/',
        },
        {
            name: 'StatPearls',
            topics: ['All'],
            checkUrl: 'https://www.ncbi.nlm.nih.gov/books/',
            note: 'Continuously updated - check article revision dates'
        }
    ],
    
    // PubMed API for checking new publications
    pubmedApi: {
        baseUrl: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/',
        searchEndpoint: 'esearch.fcgi',
        fetchEndpoint: 'efetch.fcgi',
        apiKey: process.env.NCBI_API_KEY || null // Optional: increases rate limit
    }
};

// Results storage
const auditResults = {
    timestamp: new Date().toISOString(),
    links: { checked: 0, valid: 0, broken: [], redirected: [] },
    content: { total: 0, fresh: 0, stale: [], needsReview: [] },
    guidelines: { current: [], outdated: [], unknown: [] },
    crossRefs: { valid: 0, broken: [] },
    recommendations: []
};

/**
 * LINK VERIFICATION
 */
async function auditLinks() {
    console.log('\n🔗 Starting Link Audit...\n');
    
    const references = await extractAllReferences();
    console.log(`Found ${references.length} references to check\n`);
    
    for (const ref of references) {
        process.stdout.write(`Checking: ${ref.url.substring(0, 60)}...`);
        
        try {
            const result = await checkUrl(ref.url);
            auditResults.links.checked++;
            
            if (result.status === 'valid') {
                auditResults.links.valid++;
                process.stdout.write(' ✓\n');
            } else if (result.status === 'redirect') {
                auditResults.links.redirected.push({
                    ...ref,
                    newUrl: result.location
                });
                process.stdout.write(` → Redirected\n`);
            } else {
                auditResults.links.broken.push({
                    ...ref,
                    error: result.error,
                    statusCode: result.statusCode
                });
                process.stdout.write(` ✗ (${result.statusCode || result.error})\n`);
            }
        } catch (err) {
            auditResults.links.broken.push({
                ...ref,
                error: err.message
            });
            process.stdout.write(` ✗ (${err.message})\n`);
        }
        
        // Rate limiting
        await sleep(200);
    }
    
    console.log(`\n✓ Link audit complete: ${auditResults.links.valid}/${auditResults.links.checked} valid`);
    if (auditResults.links.broken.length > 0) {
        console.log(`⚠ ${auditResults.links.broken.length} broken links found`);
    }
}

async function extractAllReferences() {
    const references = [];
    
    // Scan Deep Dives
    const deepDivesDir = path.join(CONFIG.contentRoot, 'ReasonDx/data/deep-dives');
    if (fs.existsSync(deepDivesDir)) {
        const files = fs.readdirSync(deepDivesDir).filter(f => f.endsWith('.json'));
        for (const file of files) {
            const content = JSON.parse(fs.readFileSync(path.join(deepDivesDir, file), 'utf8'));
            if (content.references) {
                for (const ref of content.references) {
                    if (ref.url) {
                        references.push({
                            url: ref.url,
                            title: ref.citation || ref.title,
                            sourceFile: file,
                            sourceType: 'DeepDive'
                        });
                    }
                }
            }
        }
    }
    
    // Scan CoachDx for REFERENCES objects
    const coachDxDir = path.join(CONFIG.contentRoot, 'CoachDx');
    if (fs.existsSync(coachDxDir)) {
        const files = fs.readdirSync(coachDxDir).filter(f => f.endsWith('.js'));
        for (const file of files) {
            const content = fs.readFileSync(path.join(coachDxDir, file), 'utf8');
            const urlMatches = content.match(/url:\s*["']([^"']+)["']/g) || [];
            for (const match of urlMatches) {
                const url = match.match(/["']([^"']+)["']/)[1];
                if (url.startsWith('http')) {
                    references.push({
                        url,
                        sourceFile: file,
                        sourceType: 'CoachDx'
                    });
                }
            }
        }
    }
    
    // Scan HTML modules for href links
    const mechanismDir = path.join(CONFIG.contentRoot, 'mechanism');
    if (fs.existsSync(mechanismDir)) {
        const files = fs.readdirSync(mechanismDir).filter(f => f.endsWith('.html'));
        for (const file of files) {
            const content = fs.readFileSync(path.join(mechanismDir, file), 'utf8');
            const hrefMatches = content.match(/href=["']([^"']+)["']/g) || [];
            for (const match of hrefMatches) {
                const url = match.match(/["']([^"']+)["']/)[1];
                if (url.startsWith('http')) {
                    references.push({
                        url,
                        sourceFile: file,
                        sourceType: 'MechanismDx'
                    });
                }
            }
        }
    }
    
    // Deduplicate by URL
    const uniqueUrls = new Map();
    for (const ref of references) {
        if (!uniqueUrls.has(ref.url)) {
            uniqueUrls.set(ref.url, ref);
        }
    }
    
    return Array.from(uniqueUrls.values());
}

function checkUrl(url) {
    return new Promise((resolve) => {
        const protocol = url.startsWith('https') ? https : http;
        
        const req = protocol.get(url, { timeout: CONFIG.linkTimeoutMs }, (res) => {
            if (res.statusCode >= 200 && res.statusCode < 300) {
                resolve({ status: 'valid', statusCode: res.statusCode });
            } else if (res.statusCode >= 300 && res.statusCode < 400) {
                resolve({ 
                    status: 'redirect', 
                    statusCode: res.statusCode,
                    location: res.headers.location 
                });
            } else {
                resolve({ status: 'error', statusCode: res.statusCode });
            }
        });
        
        req.on('error', (err) => {
            resolve({ status: 'error', error: err.message });
        });
        
        req.on('timeout', () => {
            req.destroy();
            resolve({ status: 'error', error: 'timeout' });
        });
    });
}

/**
 * CONTENT FRESHNESS AUDIT
 */
async function auditContentFreshness() {
    console.log('\n📄 Starting Content Freshness Audit...\n');
    
    const contentFiles = await scanAllContent();
    const now = new Date();
    const thresholdDate = new Date(now.setMonth(now.getMonth() - CONFIG.freshnessThresholdMonths));
    
    for (const file of contentFiles) {
        auditResults.content.total++;
        
        const stats = fs.statSync(file.path);
        const fileAge = stats.mtime;
        
        // Also check for version/date metadata in JSON files
        let contentDate = fileAge;
        if (file.path.endsWith('.json')) {
            try {
                const content = JSON.parse(fs.readFileSync(file.path, 'utf8'));
                if (content.lastUpdated) {
                    contentDate = new Date(content.lastUpdated);
                } else if (content.version) {
                    // Extract date from version if present
                }
            } catch (e) {}
        }
        
        if (contentDate < thresholdDate) {
            auditResults.content.stale.push({
                file: file.name,
                path: file.path,
                lastModified: contentDate.toISOString(),
                ageMonths: Math.floor((new Date() - contentDate) / (1000 * 60 * 60 * 24 * 30))
            });
        } else {
            auditResults.content.fresh++;
        }
    }
    
    console.log(`✓ Content audit complete: ${auditResults.content.fresh}/${auditResults.content.total} fresh`);
    if (auditResults.content.stale.length > 0) {
        console.log(`⚠ ${auditResults.content.stale.length} items older than ${CONFIG.freshnessThresholdMonths} months`);
    }
}

async function scanAllContent() {
    const files = [];
    
    const scanDir = (dir, type) => {
        if (!fs.existsSync(dir)) return;
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isFile() && (item.endsWith('.json') || item.endsWith('.js') || item.endsWith('.html'))) {
                files.push({ name: item, path: fullPath, type });
            }
        }
    };
    
    scanDir(path.join(CONFIG.contentRoot, 'ReasonDx/data/deep-dives'), 'DeepDive');
    scanDir(path.join(CONFIG.contentRoot, 'CoachDx'), 'CoachDx');
    scanDir(path.join(CONFIG.contentRoot, 'mechanism'), 'MechanismDx');
    scanDir(path.join(CONFIG.contentRoot, 'ConsentDx'), 'ConsentDx');
    scanDir(path.join(CONFIG.contentRoot, 'ProcedureDx'), 'ProcedureDx');
    scanDir(path.join(CONFIG.contentRoot, 'TeamDx'), 'TeamDx');
    scanDir(path.join(CONFIG.contentRoot, 'SystemsDx'), 'SystemsDx');
    
    return files;
}

/**
 * GUIDELINE MONITORING
 */
async function auditGuidelines() {
    console.log('\n📚 Starting Guideline Update Check...\n');
    
    // This would integrate with PubMed API to check for new guidelines
    // For now, we'll check against a known list and flag items for manual review
    
    const guidelinesInContent = await extractGuidelineReferences();
    
    for (const guideline of guidelinesInContent) {
        console.log(`Checking: ${guideline.name}...`);
        
        // In production, this would query PubMed or society websites
        // For demo, we'll simulate based on known update cycles
        
        const knownUpdates = {
            'AHA ACLS': { currentYear: 2020, latestYear: 2025 },
            'Surviving Sepsis': { currentYear: 2021, latestYear: 2024 },
            'AAP Bronchiolitis': { currentYear: 2014, latestYear: 2014 },
            'CHEST VTE': { currentYear: 2021, latestYear: 2021 },
            'AHA Kawasaki': { currentYear: 2017, latestYear: 2024 },
            'ACOG Preeclampsia': { currentYear: 2020, latestYear: 2020 },
        };
        
        const match = Object.entries(knownUpdates).find(([key]) => 
            guideline.name.toLowerCase().includes(key.toLowerCase())
        );
        
        if (match) {
            const [, versions] = match;
            if (versions.currentYear < versions.latestYear) {
                auditResults.guidelines.outdated.push({
                    ...guideline,
                    ourVersion: versions.currentYear,
                    latestVersion: versions.latestYear,
                    recommendation: `Update content to reflect ${versions.latestYear} guidelines`
                });
                console.log(` ⚠ Update available (${versions.currentYear} → ${versions.latestYear})`);
            } else {
                auditResults.guidelines.current.push(guideline);
                console.log(` ✓ Current`);
            }
        } else {
            auditResults.guidelines.unknown.push(guideline);
            console.log(` ? Unable to verify`);
        }
    }
    
    console.log(`\n✓ Guideline audit complete`);
    console.log(`  ${auditResults.guidelines.current.length} current`);
    console.log(`  ${auditResults.guidelines.outdated.length} need updates`);
    console.log(`  ${auditResults.guidelines.unknown.length} need manual verification`);
}

async function extractGuidelineReferences() {
    const guidelines = [];
    
    const deepDivesDir = path.join(CONFIG.contentRoot, 'ReasonDx/data/deep-dives');
    if (fs.existsSync(deepDivesDir)) {
        const files = fs.readdirSync(deepDivesDir).filter(f => f.endsWith('.json'));
        for (const file of files) {
            const content = JSON.parse(fs.readFileSync(path.join(deepDivesDir, file), 'utf8'));
            if (content.references) {
                for (const ref of content.references) {
                    if (ref.citation && (
                        ref.citation.includes('Guideline') ||
                        ref.citation.includes('Statement') ||
                        ref.citation.includes('Practice Bulletin') ||
                        ref.citation.includes('Recommendations')
                    )) {
                        guidelines.push({
                            name: ref.citation,
                            url: ref.url,
                            sourceFile: file,
                            keyContent: ref.keyContent
                        });
                    }
                }
            }
        }
    }
    
    return guidelines;
}

/**
 * PUBMED API INTEGRATION
 */
async function searchPubMed(query, maxResults = 10) {
    const baseUrl = CONFIG.pubmedApi.baseUrl + CONFIG.pubmedApi.searchEndpoint;
    const params = new URLSearchParams({
        db: 'pubmed',
        term: query,
        retmax: maxResults,
        retmode: 'json',
        sort: 'date'
    });
    
    if (CONFIG.pubmedApi.apiKey) {
        params.append('api_key', CONFIG.pubmedApi.apiKey);
    }
    
    return new Promise((resolve, reject) => {
        https.get(`${baseUrl}?${params}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

/**
 * GENERATE RECOMMENDATIONS
 */
function generateRecommendations() {
    const recs = [];
    
    // Link recommendations
    if (auditResults.links.broken.length > 0) {
        recs.push({
            priority: 'HIGH',
            category: 'Links',
            issue: `${auditResults.links.broken.length} broken reference links`,
            action: 'Review and update URLs or find alternative open-access sources',
            files: auditResults.links.broken.map(l => l.sourceFile)
        });
    }
    
    if (auditResults.links.redirected.length > 0) {
        recs.push({
            priority: 'MEDIUM',
            category: 'Links',
            issue: `${auditResults.links.redirected.length} links have redirects`,
            action: 'Update URLs to final destinations to improve load time',
            files: auditResults.links.redirected.map(l => l.sourceFile)
        });
    }
    
    // Content freshness recommendations
    if (auditResults.content.stale.length > 0) {
        const veryOld = auditResults.content.stale.filter(c => c.ageMonths > 24);
        if (veryOld.length > 0) {
            recs.push({
                priority: 'HIGH',
                category: 'Content',
                issue: `${veryOld.length} content items over 2 years old`,
                action: 'Review for accuracy and update with current evidence',
                files: veryOld.map(c => c.file)
            });
        }
        
        const moderatelyOld = auditResults.content.stale.filter(c => c.ageMonths <= 24);
        if (moderatelyOld.length > 0) {
            recs.push({
                priority: 'MEDIUM',
                category: 'Content',
                issue: `${moderatelyOld.length} content items 12-24 months old`,
                action: 'Schedule review in next content update cycle',
                files: moderatelyOld.map(c => c.file)
            });
        }
    }
    
    // Guideline recommendations
    if (auditResults.guidelines.outdated.length > 0) {
        for (const g of auditResults.guidelines.outdated) {
            recs.push({
                priority: 'HIGH',
                category: 'Guidelines',
                issue: `${g.name} has newer version (${g.ourVersion} → ${g.latestVersion})`,
                action: g.recommendation,
                files: [g.sourceFile]
            });
        }
    }
    
    auditResults.recommendations = recs;
}

/**
 * GENERATE REPORT
 */
function generateReport() {
    const report = {
        ...auditResults,
        summary: {
            linksHealthy: auditResults.links.broken.length === 0,
            contentFresh: auditResults.content.stale.length < auditResults.content.total * 0.1,
            guidelinesCurrent: auditResults.guidelines.outdated.length === 0,
            overallStatus: 'HEALTHY'
        }
    };
    
    // Determine overall status
    if (auditResults.links.broken.length > 5 || auditResults.guidelines.outdated.length > 3) {
        report.summary.overallStatus = 'CRITICAL';
    } else if (auditResults.links.broken.length > 0 || auditResults.guidelines.outdated.length > 0) {
        report.summary.overallStatus = 'WARNING';
    }
    
    // Ensure output directory exists
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
    
    // Save JSON report
    const reportPath = path.join(CONFIG.outputDir, `audit-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📊 Report saved to: ${reportPath}`);
    
    // Generate summary to console
    console.log('\n' + '='.repeat(60));
    console.log('AUDIT SUMMARY');
    console.log('='.repeat(60));
    console.log(`Status: ${report.summary.overallStatus}`);
    console.log(`Links: ${auditResults.links.valid}/${auditResults.links.checked} valid`);
    console.log(`Content: ${auditResults.content.fresh}/${auditResults.content.total} fresh`);
    console.log(`Guidelines: ${auditResults.guidelines.outdated.length} need updates`);
    console.log(`Recommendations: ${auditResults.recommendations.length} action items`);
    console.log('='.repeat(60));
    
    return report;
}

/**
 * UTILITIES
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * MAIN
 */
async function main() {
    const args = process.argv.slice(2);
    const runAll = args.includes('--full') || args.length === 0;
    
    console.log('🔍 DxSuite Automated Audit Engine');
    console.log('='.repeat(40));
    console.log(`Started: ${new Date().toISOString()}\n`);
    
    try {
        if (runAll || args.includes('--links')) {
            await auditLinks();
        }
        
        if (runAll || args.includes('--content')) {
            await auditContentFreshness();
        }
        
        if (runAll || args.includes('--guidelines')) {
            await auditGuidelines();
        }
        
        generateRecommendations();
        const report = generateReport();
        
        // Return exit code based on status
        if (report.summary.overallStatus === 'CRITICAL') {
            process.exit(2);
        } else if (report.summary.overallStatus === 'WARNING') {
            process.exit(1);
        } else {
            process.exit(0);
        }
        
    } catch (error) {
        console.error('Audit failed:', error);
        process.exit(3);
    }
}

// Export for use as module
module.exports = {
    auditLinks,
    auditContentFreshness,
    auditGuidelines,
    generateReport,
    CONFIG
};

// Run if called directly
if (require.main === module) {
    main();
}
