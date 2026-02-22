// Remove Mechanism Module Links from CRT Cases
// This removes the broken ../mechanism/*.html links while keeping StatPearls links
// 
// Usage (Node.js):
//   node remove-mechanism-links.js path/to/cases/folder
//
// Or run on a single file:
//   node remove-mechanism-links.js path/to/case-file.html

const fs = require('fs');
const path = require('path');

function updateFile(filePath) {
    let html = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Pattern 1: Remove mechanism links like:
    // <a href="../mechanism/xxx-module.html" style="...">📘 ReasonDx</a>
    const pattern1 = /<a\s+href="\.\.\/mechanism\/[^"]*-module\.html"[^>]*>📘 ReasonDx<\/a>/gi;
    if (pattern1.test(html)) {
        html = html.replace(pattern1, '');
        changed = true;
    }
    
    // Pattern 2: Also catch any with different formatting
    // <a href="../mechanism/xxx-module.html">📘 ReasonDx</a>
    const pattern2 = /<a\s+href="\.\.\/mechanism\/[^"]*\.html"[^>]*>[^<]*ReasonDx[^<]*<\/a>/gi;
    if (pattern2.test(html)) {
        html = html.replace(pattern2, '');
        changed = true;
    }
    
    // Pattern 3: Catch mechanism links in the Learn More section
    // href="../mechanism/xxx.html"
    const pattern3 = /href="\.\.\/mechanism\/[^"]*\.html"/gi;
    if (pattern3.test(html)) {
        // Remove the entire <a> tag containing this href
        html = html.replace(/<a[^>]*href="\.\.\/mechanism\/[^"]*\.html"[^>]*>[^<]*<\/a>/gi, '');
        changed = true;
    }
    
    if (changed) {
        // Clean up any resulting double spaces or empty flex containers
        html = html.replace(/\s{3,}/g, '  ');
        fs.writeFileSync(filePath, html);
        console.log('✓ Updated: ' + path.basename(filePath));
        return true;
    } else {
        console.log('- No changes: ' + path.basename(filePath));
        return false;
    }
}

function processFolder(folderPath) {
    const files = fs.readdirSync(folderPath);
    let updated = 0;
    let total = 0;
    
    files.forEach(file => {
        if (file.endsWith('-crt.html')) {
            total++;
            const filePath = path.join(folderPath, file);
            if (updateFile(filePath)) {
                updated++;
            }
        }
    });
    
    console.log('\n=== Summary ===');
    console.log('Total CRT files: ' + total);
    console.log('Updated: ' + updated);
    console.log('No changes needed: ' + (total - updated));
}

// Main
const target = process.argv[2];

if (!target) {
    console.log('Usage:');
    console.log('  node remove-mechanism-links.js path/to/cases/folder');
    console.log('  node remove-mechanism-links.js path/to/single-file.html');
    process.exit(1);
}

if (fs.statSync(target).isDirectory()) {
    processFolder(target);
} else {
    updateFile(target);
}
