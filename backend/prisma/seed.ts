import { PrismaClient } from '@prisma/client';
import { COUNTRIES_DB } from '../../frontend/src/data/countriesData';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');
  let countryCount = 0;
  let universityCount = 0;
  let courseCount = 0;
  let duplicates = { countries: 0, universities: 0, courses: 0 };

  for (const key of Object.keys(COUNTRIES_DB)) {
    const c = COUNTRIES_DB[key];
    
    // Find or create country
    let country = await prisma.country.findUnique({ where: { code: c.code } });
    if (!country) {
      country = await prisma.country.create({
        data: {
          name: c.name,
          code: c.code,
          region: c.regionCode,
          status: 'ACTIVE'
        }
      });
      console.log(`Created country: ${c.name}`);
    } else {
      duplicates.countries++;
    }
    countryCount++;

    if (c.universities) {
      for (const u of c.universities) {
        let univ = await prisma.university.findFirst({
          where: { name: u.name, countryId: country.id }
        });
        if (!univ) {
          univ = await prisma.university.create({
            data: {
              name: u.name,
              countryId: country.id,
              status: 'ACTIVE'
            }
          });
          console.log(`  Created university: ${u.name}`);
        } else {
          duplicates.universities++;
        }
        universityCount++;

        if (u.programs) {
          for (const p of u.programs) {
            let course = await prisma.course.findFirst({
              where: { name: p.name, universityId: univ.id }
            });
            if (!course) {
              course = await prisma.course.create({
                data: {
                  name: p.name,
                  universityId: univ.id,
                  status: 'ACTIVE'
                }
              });
            } else {
              duplicates.courses++;
            }
            courseCount++;
          }
        }
      }
    }
  }

  console.log(`\nSeed Dry-Run / Validation Summary:`);
  console.log(`Countries to sync: ${countryCount} (Duplicates skipped: ${duplicates.countries})`);
  console.log(`Universities to sync: ${universityCount} (Duplicates skipped: ${duplicates.universities})`);
  console.log(`Courses to sync: ${courseCount} (Duplicates skipped: ${duplicates.courses})`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
