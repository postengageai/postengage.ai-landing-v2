const fs = require('fs');
const path = require('path');

const files = [
  'app/blog/instagram-abandoned-dm-recovery/page.tsx',
  'app/blog/instagram-automation-accountants/page.tsx',
  'app/blog/instagram-automation-architecture-firms/page.tsx',
  'app/blog/instagram-automation-beauty-brands/page.tsx',
  'app/blog/instagram-automation-car-dealerships/page.tsx',
  'app/blog/instagram-automation-consulting-firms/page.tsx',
  'app/blog/instagram-automation-content-creator-agencies/page.tsx',
  'app/blog/instagram-automation-dentists-doctors/page.tsx',
  'app/blog/instagram-automation-event-planners/page.tsx',
  'app/blog/instagram-automation-fashion-brands/page.tsx',
  'app/blog/instagram-automation-financial-advisors/page.tsx',
  'app/blog/instagram-automation-grocery-local-food/page.tsx',
  'app/blog/instagram-automation-hair-salons/page.tsx',
  'app/blog/instagram-automation-jewelry-brands/page.tsx',
  'app/blog/instagram-automation-lawyers/page.tsx',
  'app/blog/instagram-automation-mental-health-coaches/page.tsx',
  'app/blog/instagram-automation-multilingual-global/page.tsx',
  'app/blog/instagram-automation-music-artists/page.tsx',
  'app/blog/instagram-automation-pet-industry/page.tsx',
  'app/blog/instagram-automation-photographers/page.tsx',
  'app/blog/instagram-automation-software-companies/page.tsx',
  'app/blog/instagram-automation-sports-coaches/page.tsx',
  'app/blog/instagram-automation-subscription-boxes/page.tsx',
  'app/blog/instagram-automation-tech-gadgets/page.tsx',
  'app/blog/instagram-automation-travel-agents/page.tsx',
  'app/blog/instagram-automation-travel-bloggers/page.tsx',
  'app/blog/instagram-automation-virtual-assistants/page.tsx',
  'app/blog/instagram-automation-wedding-industry/page.tsx',
  'app/blog/instagram-automation-yoga-studios/page.tsx',
  'app/blog/instagram-cold-dm-outreach/page.tsx',
  'app/blog/instagram-comment-to-dm-funnel/page.tsx',
  'app/blog/instagram-dm-customer-journey/page.tsx',
  'app/blog/instagram-dm-response-rate-guide/page.tsx',
  'app/blog/instagram-dm-sales-funnel-2026/page.tsx',
  'app/blog/instagram-dms-vs-email-marketing-2026/page.tsx',
  'app/blog/instagram-membership-community-automation/page.tsx',
  'app/blog/instagram-notes-engagement-strategy/page.tsx',
  'app/blog/instagram-reels-to-dm-funnel/page.tsx',
  'app/blog/instagram-threads-strategy-2026/page.tsx',
  'app/blog/voice-dna-deep-dive/page.tsx',
];

function fixFile(filePath) {
  const fullPath = path.join(
    '/sessions/pensive-relaxed-bell/mnt/postengage.ai/postengage.ai-landing',
    filePath
  );

  try {
    const content = fs.readFileSync(fullPath, 'utf8');

    // Find the lucide-react import line
    const lucideImportRegex =
      /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"]/;
    const match = content.match(lucideImportRegex);

    if (!match) {
      // No lucide-react import found
      return { file: filePath, status: 'no-import', changed: false };
    }

    // Parse the imported names
    const importedString = match[1];
    const importedNames = importedString
      .split(',')
      .map(s => s.trim())
      .filter(s => s && !s.startsWith('//'));

    // Get the content after the import line (to check usage)
    const afterImportIndex = match.index + match[0].length;
    const contentAfterImport = content.substring(afterImportIndex);

    // Find which imports are actually used
    const usedNames = importedNames.filter(name => {
      // Check if the name appears in the content after the import
      // Use word boundary to avoid matching partial names
      const regex = new RegExp(`\\b${name}\\b`);
      return regex.test(contentAfterImport);
    });

    if (usedNames.length === importedNames.length) {
      // All imports are used, no change needed
      return { file: filePath, status: 'all-used', changed: false };
    }

    // Update the import line
    if (usedNames.length === 0) {
      // Remove the entire import line
      const newContent = content.replace(lucideImportRegex, '').trim() + '\n';
      fs.writeFileSync(fullPath, newContent, 'utf8');
      return {
        file: filePath,
        status: 'import-removed',
        removed: importedNames,
        changed: true,
      };
    } else {
      // Keep only the used imports
      const newImportLine = `import { ${usedNames.join(', ')} } from 'lucide-react'`;
      const newContent = content.replace(lucideImportRegex, newImportLine);
      fs.writeFileSync(fullPath, newContent, 'utf8');
      const removedNames = importedNames.filter(
        name => !usedNames.includes(name)
      );
      return {
        file: filePath,
        status: 'import-updated',
        removed: removedNames,
        used: usedNames,
        changed: true,
      };
    }
  } catch (error) {
    return { file: filePath, status: 'error', error: error.message };
  }
}

console.log('Fixing lucide-react imports...\n');

let changedCount = 0;
const results = files.map(file => {
  const result = fixFile(file);
  if (result.changed) {
    changedCount++;
  }
  return result;
});

// Print summary
console.log('=== Summary ===');
results.forEach(result => {
  if (result.status === 'error') {
    console.log(`ERROR: ${result.file} - ${result.error}`);
  } else if (result.changed) {
    console.log(`FIXED: ${result.file}`);
    if (result.removed) {
      console.log(`  Removed: ${result.removed.join(', ')}`);
    }
  }
});

console.log(`\n${changedCount} files fixed out of ${files.length}`);
