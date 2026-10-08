const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/91969/Downloads/afsana-code-studyfirstinfo-8-oct/frontend/src';

const replacements = {
  'ðŸŒŸ': '🌟',
  'ðŸ ›ï¸ ': '🏛️',
  'ðŸ’¶': '💵',
  'ðŸš€': '🚀',
  'ðŸ›¡ï¸ ': '🛡️',
  'ðŸ‘¨â€ ðŸ‘©â€ ðŸ‘§': '👨‍👩‍👧',
  'ðŸ“ˆ': '📈',
  'ðŸ’°': '💰',
  'ðŸŽ“': '🎓',
  'ðŸ“œ': '📜',
  'ðŸŒ ': '🌍',
  'ðŸ’¼': '💼',
  'ðŸ ¥': '🏥',
  'ðŸ’¸': '💸',
  'ðŸ ­': '🏭',
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
console.log('Emoji fix 2 complete.');
