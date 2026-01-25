const fs = require('fs');
const path = require('path');

const BASE = '/home/claude/DxSuite';
const results = {
    summary: {},
    brokenLinks: [],
    missingConnections: [],
    topicCoverage: {},
    navigationIssues: [],
    recommendations: []
};

// Helper to check if file exists
function fileExists(filePath) {
    try {
        return fs.existsSync(filePath);
    } catch {
        return false;
    }
}

// Extract href/src links from HTML
function extractLinks(content, baseDir) {
    const links = [];
    const hrefRegex = /href=["']([^"'#]+)/g;
    const srcRegex = /src=["']([^"']+)/g;
    let match;
    
    while ((match = hrefRegex.exec(content)) !== null) {
        if (!match[1].startsWith('http') && !match[1].startsWith('mailto:') && !match[1].startsWith('javascript:')) {
            links.push({ type: 'href', path: match[1], baseDir });
        }
    }
    while ((match = srcRegex.exec(content)) !== null) {
        if (!match[1].startsWith('http') && !match[1].startsWith('data:')) {
            links.push({ type: 'src', path: match[1], baseDir });
        }
    }
    return links;
}

// Check all HTML files for broken links
function auditLinks() {
    console.log('\n=== AUDITING NAVIGATION LINKS ===\n');
    const htmlFiles = [];
    
    function findHtmlFiles(dir) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory() && !item.startsWith('.')) {
                findHtmlFiles(fullPath);
            } else if (item.endsWith('.html')) {
                htmlFiles.push(fullPath);
            }
        }
    }
    
    findHtmlFiles(BASE);
    console.log(`Found ${htmlFiles.length} HTML files to audit\n`);
    
    let brokenCount = 0;
    for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const baseDir = path.dirname(file);
        const links = extractLinks(content, baseDir);
        
        for (const link of links) {
            let targetPath;
            if (link.path.startsWith('/')) {
                targetPath = path.join(BASE, link.path);
            } else if (link.path.startsWith('./')) {
                targetPath = path.join(link.baseDir, link.path.slice(2));
            } else {
                targetPath = path.join(link.baseDir, link.path);
            }
            
            // Clean up query strings and fragments
            targetPath = targetPath.split('?')[0].split('#')[0];
            
            if (!fileExists(targetPath) && !link.path.includes('{') && !link.path.includes('$')) {
                results.brokenLinks.push({
                    file: file.replace(BASE, ''),
                    link: link.path,
                    type: link.type
                });
                brokenCount++;
            }
        }
    }
    
    console.log(`Found ${brokenCount} potentially broken links\n`);
    return htmlFiles;
}

// Load topic-map and check coverage
function auditTopicCoverage() {
    console.log('\n=== AUDITING TOPIC COVERAGE ===\n');
    
    const topicMapPath = path.join(BASE, 'data/topic-map.json');
    if (!fileExists(topicMapPath)) {
        console.log('ERROR: topic-map.json not found!');
        return;
    }
    
    const topicMap = JSON.parse(fs.readFileSync(topicMapPath, 'utf8'));
    const topics = topicMap.topics || {};
    
    let complete = 0, partial = 0, missing = 0;
    const coverageReport = [];
    
    for (const [key, topic] of Object.entries(topics)) {
        const coverage = {
            topic: key,
            displayName: topic.displayName,
            category: topic.category,
            hasDeepDive: !!topic.deepDive,
            hasAdventures: topic.adventures && topic.adventures.length > 0,
            hasMechanism: !!topic.mechanism,
            hasPediatric: !!topic.pediatricToggle || !!topic.pediatricCase,
            status: topic.status,
            issues: []
        };
        
        // Check if referenced files actually exist
        if (topic.deepDive) {
            const ddPath = path.join(BASE, 'ReasonDx/data/deep-dives', `${topic.deepDive}.json`);
            if (!fileExists(ddPath)) {
                coverage.issues.push(`Deep dive JSON not found: ${topic.deepDive}.json`);
            }
        }
        
        if (topic.adventures) {
            for (const adv of topic.adventures) {
                const advPath = path.join(BASE, 'ReasonDx/adventure-cases', adv);
                if (!fileExists(advPath)) {
                    coverage.issues.push(`Adventure not found: ${adv}`);
                }
            }
        }
        
        if (topic.mechanism) {
            const mechPath = path.join(BASE, 'mechanism', topic.mechanism);
            if (!fileExists(mechPath)) {
                coverage.issues.push(`Mechanism module not found: ${topic.mechanism}`);
            }
        }
        
        // Determine completeness
        if (coverage.hasDeepDive && coverage.hasAdventures && coverage.hasMechanism) {
            coverage.completeness = 'COMPLETE';
            complete++;
        } else if (coverage.hasDeepDive || coverage.hasAdventures || coverage.hasMechanism) {
            coverage.completeness = 'PARTIAL';
            partial++;
        } else {
            coverage.completeness = 'MISSING';
            missing++;
        }
        
        coverageReport.push(coverage);
    }
    
    results.topicCoverage = coverageReport;
    console.log(`Topics: ${complete} complete, ${partial} partial, ${missing} missing content`);
    console.log(`Total topics in map: ${Object.keys(topics).length}\n`);
    
    // Find topics needing work
    const needsWork = coverageReport.filter(t => t.completeness !== 'COMPLETE' || t.issues.length > 0);
    console.log(`Topics needing attention: ${needsWork.length}`);
}

// Check cross-platform connections
function auditConnections() {
    console.log('\n=== AUDITING CROSS-PLATFORM CONNECTIONS ===\n');
    
    // Check if key navigation files exist
    const criticalFiles = [
        'index.html',
        'ReasonDx/index.html',
        'ReasonDx/training.html',
        'ReasonDx/adventure-hub.html',
        'ReasonDx/deep-dive-player-integrated.html',
        'mechanism/index.html',
        'CoachDx/index.html',
        'ConsentDx/consentdx-main.html',
        'ProcedureDx/proceduredx-main.html',
        'TeamDx/teamdx-main.html',
        'SystemsDx/systemsdx-main.html'
    ];
    
    console.log('Critical navigation files:');
    for (const file of criticalFiles) {
        const exists = fileExists(path.join(BASE, file));
        console.log(`  ${exists ? '✓' : '✗'} ${file}`);
        if (!exists) {
            results.navigationIssues.push(`Missing critical file: ${file}`);
        }
    }
}

// Generate content inventory
function generateInventory() {
    console.log('\n=== CONTENT INVENTORY ===\n');
    
    const inventory = {
        adventures: { interactive: 0, socratic: 0, files: [] },
        deepDives: { count: 0, files: [] },
        mechanisms: { count: 0, files: [] },
        crtCases: { categories: 0, totalCases: 0 },
        coachDx: { count: 0 }
    };
    
    // Count adventures
    const advDir = path.join(BASE, 'ReasonDx/adventure-cases');
    if (fileExists(advDir)) {
        const files = fs.readdirSync(advDir).filter(f => f.endsWith('.html'));
        inventory.adventures.files = files;
        inventory.adventures.interactive = files.filter(f => f.includes('-adventure.html')).length;
        inventory.adventures.socratic = files.filter(f => f.includes('-expanded') && !f.includes('-adventure')).length;
    }
    
    // Count deep dives
    const ddDir = path.join(BASE, 'ReasonDx/data/deep-dives');
    if (fileExists(ddDir)) {
        const files = fs.readdirSync(ddDir).filter(f => f.endsWith('.json'));
        inventory.deepDives.count = files.length;
        inventory.deepDives.files = files;
    }
    
    // Count mechanisms
    const mechDir = path.join(BASE, 'mechanism');
    if (fileExists(mechDir)) {
        const files = fs.readdirSync(mechDir).filter(f => f.endsWith('.html'));
        inventory.mechanisms.count = files.length;
        inventory.mechanisms.files = files;
    }
    
    // Count CRT cases
    const crtDir = path.join(BASE, 'ReasonDx/data/cases');
    if (fileExists(crtDir)) {
        const files = fs.readdirSync(crtDir).filter(f => f.endsWith('.json') && f !== 'manifest.json');
        inventory.crtCases.categories = files.length;
        
        for (const file of files) {
            try {
                const data = JSON.parse(fs.readFileSync(path.join(crtDir, file), 'utf8'));
                if (data.cases) {
                    inventory.crtCases.totalCases += data.cases.length;
                }
            } catch (e) {}
        }
    }
    
    // Count CoachDx
    const coachDir = path.join(BASE, 'CoachDx');
    if (fileExists(coachDir)) {
        const files = fs.readdirSync(coachDir).filter(f => f.endsWith('.js'));
        inventory.coachDx.count = files.length;
    }
    
    results.summary = inventory;
    
    console.log('Content Counts:');
    console.log(`  Interactive Adventures: ${inventory.adventures.interactive}`);
    console.log(`  Socratic Cases: ${inventory.adventures.socratic}`);
    console.log(`  Deep Dives: ${inventory.deepDives.count}`);
    console.log(`  MechanismDx Modules: ${inventory.mechanisms.count}`);
    console.log(`  CRT Categories: ${inventory.crtCases.categories}`);
    console.log(`  CRT Total Cases: ${inventory.crtCases.totalCases}`);
    console.log(`  CoachDx Libraries: ${inventory.coachDx.count}`);
}

// Find orphaned content (not linked from anywhere)
function findOrphanedContent() {
    console.log('\n=== CHECKING FOR ORPHANED CONTENT ===\n');
    
    const topicMapPath = path.join(BASE, 'data/topic-map.json');
    const topicMap = JSON.parse(fs.readFileSync(topicMapPath, 'utf8'));
    
    // Get all referenced adventure files
    const referencedAdventures = new Set();
    for (const topic of Object.values(topicMap.topics || {})) {
        if (topic.adventures) {
            topic.adventures.forEach(a => referencedAdventures.add(a));
        }
    }
    
    // Get all actual adventure files
    const advDir = path.join(BASE, 'ReasonDx/adventure-cases');
    const actualAdventures = fs.readdirSync(advDir).filter(f => f.endsWith('.html'));
    
    const orphaned = actualAdventures.filter(f => !referencedAdventures.has(f));
    console.log(`Orphaned adventures (not in topic-map): ${orphaned.length}`);
    if (orphaned.length > 0 && orphaned.length <= 20) {
        orphaned.forEach(f => console.log(`  - ${f}`));
    }
    
    results.orphanedContent = orphaned;
}

// Run all audits
console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║           DXSUITE PLATFORM COMPREHENSIVE AUDIT             ║');
console.log('║                    January 24, 2026                        ║');
console.log('╚════════════════════════════════════════════════════════════╝');

generateInventory();
auditConnections();
auditLinks();
auditTopicCoverage();
findOrphanedContent();

// Save detailed results
fs.writeFileSync('/home/claude/audit-results.json', JSON.stringify(results, null, 2));
console.log('\n✓ Detailed results saved to audit-results.json');
