import { COUNTRIES_DB } from '../frontend/src/data/countriesData';

let cCount = Object.keys(COUNTRIES_DB).length;
let uCount = 0;
let crsCount = 0;

Object.values(COUNTRIES_DB).forEach((c: any) => {
  if (c.universities) {
    uCount += c.universities.length;
    c.universities.forEach((u: any) => {
      if (u.programs) {
        crsCount += u.programs.length;
      }
    });
  }
});

console.log(`Countries: ${cCount}`);
console.log(`Universities: ${uCount}`);
console.log(`Courses: ${crsCount}`);
