import { PrismaClient } from '@prisma/client';
import { COUNTRIES_DB } from '../../frontend/src/data/countriesData';
import { ALL_COUNSELORS } from '../../frontend/src/data/counselorsData';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');
  let countryCount = 0;
  let universityCount = 0;
  let courseCount = 0;
  let counselorCount = 0;
  let duplicates = { countries: 0, universities: 0, courses: 0, counselors: 0 };

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

  // Seed Counselors from counselorsData.ts (upsert by name)
  for (const c of ALL_COUNSELORS) {
    const existingCounselor = await prisma.counselor.findFirst({
      where: { name: c.name }
    });

    if (!existingCounselor) {
      await prisma.counselor.create({
        data: {
          name: c.name,
          specializations: c.tags || [],
          status: c.active ? 'ACTIVE' : 'INACTIVE'
        }
      });
      console.log(`Created counselor: ${c.name}`);
    } else {
      await prisma.counselor.update({
        where: { id: existingCounselor.id },
        data: {
          specializations: c.tags || [],
          status: c.active ? 'ACTIVE' : 'INACTIVE'
        }
      });
      duplicates.counselors++;
    }
    counselorCount++;
  }

  console.log(`\nSeed Dry-Run / Validation Summary:`);
  console.log(`Countries to sync: ${countryCount} (Duplicates skipped: ${duplicates.countries})`);
  console.log(`Universities to sync: ${universityCount} (Duplicates skipped: ${duplicates.universities})`);
  console.log(`Courses to sync: ${courseCount} (Duplicates skipped: ${duplicates.courses})`);
  console.log(`Counselors to sync: ${counselorCount} (Updated/Duplicates: ${duplicates.counselors})`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
