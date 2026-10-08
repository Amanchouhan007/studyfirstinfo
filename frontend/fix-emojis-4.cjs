const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/91969/Downloads/afsana-code-studyfirstinfo-8-oct/frontend/src';

const replacements = {
  '\u00f0\u0178\u0152\u0178': '🌟', // ðŸŒŸ
  '\u00f0\u0178\u00a0\u203a\u00ef\u00b8\u008f': '🏛️', // ðŸ ›ï¸ 
  '\u00f0\u0178\u2019\u00b6': '💵', // ðŸ’¶
  '\u00f0\u0178\u0161\u20ac': '🚀', // ðŸš€
  '\u00f0\u0178\u203a\u00a1\u00ef\u00b8\u008f': '🛡️', // ðŸ›¡ï¸ 
  '\u00f0\u0178\u2018\u00a8\u00e2\u20ac\u008d\u00f0\u0178\u2018\u00a9\u00e2\u20ac\u008d\u00f0\u0178\u2018\u00a7': '👨‍👩‍👧', // ðŸ‘¨â€ ðŸ‘©â€ ðŸ‘§
  '\u00f0\u0178\u201c\u02c6': '📈', // ðŸ“ˆ
  '\u00f0\u0178\u2019\u00b0': '💰', // ðŸ’°
  '\u00f0\u0178\u017d\u201c': '🎓', // ðŸŽ“
  '\u00f0\u0178\u201c\u0153': '📜', // ðŸ“œ
  '\u00f0\u0178\u0152\u008d': '🌍', // ðŸŒ 
  '\u00f0\u0178\u2019\u00bc': '💼', // ðŸ’¼
  '\u00f0\u0178\u00a5\u00ba': '🏥', // ðŸ ¥
  '\u00f0\u0178\u2019\u00b8': '💸', // ðŸ’¸
  '\u00f0\u0178\u00ad\u00ad': '🏭', // ðŸ ­
};

function walkDir(dir) {
  let files = fs.readdirSync(dir);
  for (let file of files) {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      
      // Let's print out what actually exists in the file to debug if needed
      let matches = newContent.match(/\u00f0\u0178.[^\"]+/g);
      if (matches) {
        console.log(`Found in ${fullPath}:`, [...new Set(matches)]);
      }

      for (const [bad, good] of Object.entries(replacements)) {
        newContent = newContent.split(bad).join(good);
      }
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

walkDir(directory);
console.log('Emoji fix 4 complete.');
