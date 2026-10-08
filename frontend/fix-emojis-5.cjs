const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/91969/Downloads/afsana-code-studyfirstinfo-8-oct/frontend/src';

function walkDir(dir) {
  let files = fs.readdirSync(dir);
  for (let file of files) {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;

      newContent = newContent.replace(/ðŸ›¡ï¸\x8F/g, '🛡️');
      newContent = newContent.replace(/ðŸ‘¨â€\x8DðŸ‘©â€\x8DðŸ‘§/g, '👨‍👩‍👧');
      newContent = newContent.replace(/ðŸ\x8F›ï¸\x8F/g, '🏛️');
      newContent = newContent.replace(/ðŸŒ\x8D/g, '🌍');
      newContent = newContent.replace(/ðŸ\x8F¥/g, '🏥');
      newContent = newContent.replace(/ðŸ\x8F­/g, '🏭');
      newContent = newContent.replace(/ðŸŒŸ/g, '🌟');
      newContent = newContent.replace(/ðŸ’¶/g, '💵');
      newContent = newContent.replace(/ðŸš€/g, '🚀');
      newContent = newContent.replace(/ðŸ“ˆ/g, '📈');
      newContent = newContent.replace(/ðŸ’°/g, '💰');
      newContent = newContent.replace(/ðŸŽ“/g, '🎓');
      newContent = newContent.replace(/ðŸ“œ/g, '📜');
      newContent = newContent.replace(/ðŸ’¼/g, '💼');
      newContent = newContent.replace(/ðŸ’¸/g, '💸');

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

walkDir(directory);
console.log('Emoji fix 5 complete.');
