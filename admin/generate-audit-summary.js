/**
 * DxSuite Audit Summary Generator
 * 
 * Generates a human-readable summary of what needs attention.
 * Run: node admin/generate-audit-summary.js
 * 
 * Output: Prints to console and saves to admin/reports/summary-YYYY-MM-DD.txt
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
    contentRoot: path.join(__dirname, '..'),
    reportsDir: path.join(__dirname, 'reports'),
    freshnessMonths: 12
};

// Ensure reports directory exists
if (!fs.existsSync(CONFIG.reportsDir)) {
    fs.mkdirSync(CONFIG.reportsDir, { recursive: true });
}

const today = new Date();
const summary = [];

summary.push('═══════════════════════════════════════════════════════════════');
summary.push('               DXSUITE AUDIT SUMMARY');
summary.push(`               Generated: ${today.toLocaleDateString()}`);
summary.push('═══════════════════════════════════════════════════════════════');
summary.push('');

// ============ CONTENT INVENTORY ============
summary.push('📊 CONTENT INVENTORY');
summary.push('───────────────────────────────────────────────────────────────');

function countFiles(dir, ext) {
    try {
        return fs.readdirSync(dir).filter(f => f.endsWith(ext)).length;
    } catch(e) {
        return 0;
    }
}

const inventory = {
    deepDives: countFiles(path.join(CONFIG.contentRoot, 'ReasonDx/data/deep-dives'), '.json'),
    adventures: countFiles(path.join(CONFIG.contentRoot, 'ReasonDx/adventure-cases'), '.html'),
    mechanisms: countFiles(path.join(CONFIG.contentRoot, 'mechanism'), '.html'),
    crtCases: countFiles(path.join(CONFIG.contentRoot, 'ReasonDx/data/cases'), '.json')
};

summary.push(`   Deep Dives:     ${inventory.deepDives}`);
summary.push(`   Adventures:     ${inventory.adventures}`);
summary.push(`   Mechanisms:     ${inventory.mechanisms}`);
summary.push(`   CRT Case Files: ${inventory.crtCases}`);
summary.push('');

// ============ GUIDELINE STATUS ============
summary.push('⚠️  GUIDELINES REQUIRING REVIEW');
summary.push('───────────────────────────────────────────────────────────────');
summary.push('');
summary.push('The following guidelines may have updates available:');
summary.push('');

// Known guidelines with typical update cycles
const guidelineAlerts = [
    {
        topic: 'Sepsis (Surviving Sepsis Campaign)',
        lastKnown: '2021',
        organization: 'SCCM/ESICM',
        checkUrl: 'https://www.sccm.org/SurvivingSepsisCampaign/',
        status: 'REVIEW - Check for 2024/2025 updates'
    },
    {
        topic: 'ACLS/Resuscitation',
        lastKnown: '2020',
        organization: 'AHA',
        checkUrl: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines',
        status: 'MONITOR - 2025 update cycle expected'
    },
    {
        topic: 'Bronchiolitis',
        lastKnown: '2014',
        organization: 'AAP',
        checkUrl: 'https://publications.aap.org/pediatrics',
        status: 'CHECK - Guidelines are 10+ years old'
    },
    {
        topic: 'Anaphylaxis',
        lastKnown: '2020',
        organization: 'AAAAI/ACAAI',
        checkUrl: 'https://www.aaaai.org/practice-management/practice-resources',
        status: 'CURRENT - Review annually'
    },
    {
        topic: 'VTE/PE Management',
        lastKnown: '2021',
        organization: 'CHEST',
        checkUrl: 'https://journal.chestnet.org/',
        status: 'CURRENT - Review annually'
    }
];

guidelineAlerts.forEach((g, i) => {
    summary.push(`   ${i + 1}. ${g.topic}`);
    summary.push(`      Organization: ${g.organization}`);
    summary.push(`      Last Known Guideline: ${g.lastKnown}`);
    summary.push(`      Status: ${g.status}`);
    summary.push(`      Check: ${g.checkUrl}`);
    summary.push('');
});

// ============ ACTION ITEMS ============
summary.push('✅ RECOMMENDED ACTIONS');
summary.push('───────────────────────────────────────────────────────────────');
summary.push('');
summary.push('   1. Run link verification:');
summary.push('      node admin/audit-engine.js --links');
summary.push('');
summary.push('   2. Check PubMed for new publications:');
summary.push('      node admin/pubmed-monitor.js');
summary.push('');
summary.push('   3. Review flagged guidelines above and update content if needed');
summary.push('');
summary.push('   4. Schedule monthly automated audits');
summary.push('');

// ============ SCHEDULING RECOMMENDATION ============
summary.push('📅 RECOMMENDED AUDIT SCHEDULE');
summary.push('───────────────────────────────────────────────────────────────');
summary.push('');
summary.push('   WEEKLY (every Monday):');
summary.push('      - Link verification (catches broken URLs quickly)');
summary.push('');
summary.push('   MONTHLY (1st of month):');
summary.push('      - PubMed monitoring for high-priority topics');
summary.push('      - Review AHA, SCCM, IDSA, AAAAI publications');
summary.push('');
summary.push('   QUARTERLY (Jan, Apr, Jul, Oct):');
summary.push('      - Full content audit');
summary.push('      - Review all guideline sources');
summary.push('      - Update content freshness markers');
summary.push('');

// ============ AUTOMATION SETUP ============
summary.push('🔧 SETTING UP AUTOMATED AUDITS');
summary.push('───────────────────────────────────────────────────────────────');
summary.push('');
summary.push('   Option 1: Cron Job (Linux/Mac server)');
summary.push('   ───────────────────────────────────────');
summary.push('   Add to crontab (crontab -e):');
summary.push('');
summary.push('   # Weekly link check (Mondays at 6 AM)');
summary.push('   0 6 * * 1 cd /path/to/DxSuite && node admin/audit-engine.js --links');
summary.push('');
summary.push('   # Monthly full audit (1st of month at 6 AM)');
summary.push('   0 6 1 * * cd /path/to/DxSuite && node admin/audit-engine.js --full');
summary.push('');
summary.push('   Option 2: GitHub Actions (if hosted on GitHub)');
summary.push('   ───────────────────────────────────────');
summary.push('   Create .github/workflows/audit.yml');
summary.push('   See admin/github-action-template.yml for example');
summary.push('');
summary.push('   Option 3: Manual Reminder');
summary.push('   ───────────────────────────────────────');
summary.push('   Set calendar reminders to run audits manually');
summary.push('');

// ============ CONTACT FOR ISSUES ============
summary.push('📧 GETTING NOTIFIED OF ISSUES');
summary.push('───────────────────────────────────────────────────────────────');
summary.push('');
summary.push('   The audit scripts can output to:');
summary.push('   1. Console (immediate feedback)');
summary.push('   2. JSON reports in admin/reports/');
summary.push('   3. Email (configure in audit-engine.js)');
summary.push('');
summary.push('   To add email notifications:');
summary.push('   1. Install nodemailer: npm install nodemailer');
summary.push('   2. Configure SMTP settings in audit-engine.js');
summary.push('   3. Add your email to notification recipients');
summary.push('');

summary.push('═══════════════════════════════════════════════════════════════');
summary.push('                     END OF SUMMARY');
summary.push('═══════════════════════════════════════════════════════════════');

// Output to console
console.log(summary.join('\n'));

// Save to file
const filename = `summary-${today.toISOString().split('T')[0]}.txt`;
const filepath = path.join(CONFIG.reportsDir, filename);
fs.writeFileSync(filepath, summary.join('\n'));
console.log(`\n📄 Summary saved to: ${filepath}`);
