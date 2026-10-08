const fs = require('fs');
const txt = fs.readFileSync('../frontend/src/data/countriesData.ts', 'utf8');

const countriesMatch = txt.match(/ id: ['"][^'"]+['"],/g);
const cCount = countriesMatch ? countriesMatch.length : 0;

const univMatch = txt.match(/ name: ['"][^'"]+['"],\s*badge:/g);
const uCount = univMatch ? univMatch.length : 0;

const coursesMatch = txt.match(/ name: ['"][^'"]+['"],\s*level:/g);
const crsCount = coursesMatch ? coursesMatch.length : 0;

console.log(`Countries: 10 (hardcoded based on FLAG_MAP in file)`);
console.log(`Universities: ${uCount}`);
console.log(`Courses: ${crsCount}`);
