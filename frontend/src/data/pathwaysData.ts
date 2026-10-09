export interface University {
  name: string;
  country: string;
  tuition: string;
  scholarship: string;
  requirement: string;
}

export interface Scholarship {
  name: string;
  value: string;
}

export interface CountryItem {
  name: string;
  flag: string;
}

export interface PathwayDetail {
  countryTitle: string;
  badge: string;
  generalOverview: string;
  countriesIncluded: CountryItem[];
  description: string;
  intakes: string;
  workRights: string;
  english: string;
  universities: University[];
  scholarships: Scholarship[];
  workRightsInfo: string[];
}

export interface RouteCard {
  id: string;
  category: 'europe' | 'russia' | 'asia' | 'commonwealth';
  icon: string;
  regionCode: string;
  badge: string;
  badgeClass: string;
  title: string;
  countries: string[];
  glowColor: string;
  points: { prefix?: string; text: string }[];
  details: PathwayDetail;
}

export const pathways: Record<string, RouteCard> = {
  schengen: {
    id: 'schengen',
    category: 'europe',
    icon: '€',
    regionCode: 'EU',
    badge: 'Tuition-Free & High Visa Success',
    badgeClass: 'bg-[#c6f6d5] text-[#065f46]',
    title: 'Schengen Europe',
    countries: ['Hungary', 'Greece', 'Spain', 'Lithuania', 'Poland', 'Czech Republic', 'Bulgaria', 'Cyprus', 'Malta'],
    glowColor: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    points: [
      { prefix: 'Pay Tuition Fee After Visa', text: ' available in Greece & Bulgaria' },
      { prefix: '~90% Visa Success Ratio', text: ' in Greece and direct Dhaka file submission for Hungary' },
      { text: 'Full Stipendium Hungaricum & zero tuition public university options in Czechia' },
      { text: 'Travel freely across 29 Schengen states + legal student part-time work rights' }
    ],
    details: {
      countryTitle: 'Schengen & Continental Europe',
      badge: 'Tuition-Free & High Visa Success',
      generalOverview: 'Study First Info specializes in Central, Southern, and Eastern European destinations. From 100% full-ride scholarships in Hungary and Czechia, to select universities in Greece and Bulgaria where students can pay tuition fees AFTER visa approval with ~90% visa success rates.',
      countriesIncluded: [
        { name: 'Hungary', flag: '🇭🇺' },
        { name: 'Greece', flag: '🇬🇷' },
        { name: 'Spain', flag: '🇪🇸' },
        { name: 'Lithuania', flag: '🇱🇹' },
        { name: 'Poland', flag: '🇵🇱' },
        { name: 'Czech Republic', flag: '🇨🇿' },
        { name: 'Bulgaria', flag: '🇧🇬' },
        { name: 'Cyprus', flag: '🇨🇾' },
        { name: 'Malta', flag: '🇲🇹' },
        { name: 'Denmark', flag: '🇩🇰' },
        { name: 'Finland', flag: '🇫🇮' }
      ],
      description: 'Offers verified routes with direct Dhaka visa submission for Hungary, pay tuition after visa in Greece and Bulgaria, 43% flat tuition discounts in Cyprus, and zero-fee Czech state public universities.',
      intakes: 'Feb 2027 / Sept 2027',
      workRights: '20 to 24 hrs/week legal',
      english: 'MOI accepted / IELTS 4.5–5.5',
      universities: [
        {
          name: 'Budapest Metropolitan University (METU)',
          country: 'Hungary',
          tuition: '€7,000 – €8,200 / year',
          scholarship: 'Stipendium Hungaricum (100% full tuition, dorm & stipend)',
          requirement: 'MOI accepted; GPA 70%+ exempt from math entrance test'
        },
        {
          name: 'Partner Institutions in Athens & Thessaloniki',
          country: 'Greece',
          tuition: '€3,500 – €6,500 / year',
          scholarship: 'Pay tuition fees after visa approval; ~90% visa ratio',
          requirement: 'HSC/Bachelor pass; IELTS 5.0–5.5 or MOI accepted'
        },
        {
          name: 'SMK College of Applied Sciences',
          country: 'Lithuania',
          tuition: '€3,500 – €4,500 / year',
          scholarship: 'State & university merit performance waivers',
          requirement: 'HSC GPA 4.5/5.0; IELTS 5.5 / PTE 59 / Duolingo 110'
        },
        {
          name: 'Sofia University & Technical Partners',
          country: 'Bulgaria',
          tuition: 'Starting from €1,000 / year',
          scholarship: 'Pay tuition after visa; ministry documentation resolved',
          requirement: 'HSC 60%+; English proficiency or MOI'
        },
        {
          name: 'Cyprus International University (CIU)',
          country: 'Cyprus',
          tuition: '€3,000 – €4,500 / year',
          scholarship: '43% flat discount; initial deposit only €3,400',
          requirement: 'IELTS 4.5 or MOI; fast conditional acceptance'
        },
        {
          name: 'Charles University / CTU Tracks',
          country: 'Czech Republic',
          tuition: 'Zero tuition fee in Czech; €3,000–€6,000 in English',
          scholarship: 'Developing country full scholarships + 70,000 BDT/mo stipend',
          requirement: 'Certificate nostrification; solid academic profile'
        }
      ],
      scholarships: [
        { name: 'Stipendium Hungaricum', value: '100% Tuition + Free Dorm + €110-380/mo stipend' },
        { name: 'Czech Republic State Scheme', value: '100% full-ride funding + monthly allowance' },
        { name: 'Cyprus 43% Flat Discount', value: 'Save ~€4,300 with only €3,400 deposit' },
        { name: 'Greece & Bulgaria Post-Visa Fee Policy', value: 'Zero financial risk: tuition is payable after visa approval' }
      ],
      workRightsInfo: [
        '✓ Legal right to work 24 hours per week in Hungary, 20 hrs/week in Greece, Lithuania, and Cyprus.',
        '✓ 18 to 24-Month Post-Study Work Visa across all 29 Schengen member states.',
        '✓ Submit your Hungary student visa file directly at the Embassy in Dhaka—no need to travel to India.',
        '✓ Free borderless movement throughout the entire European Schengen zone.'
      ]
    }
  },
  russia: {
    id: 'russia',
    category: 'russia',
    icon: '🇷🇺',
    regionCode: 'RU',
    badge: '100% Scholarship + Monthly Stipend',
    badgeClass: 'bg-[#dbeafe] text-[#1e40af]',
    title: 'Russia Pathways',
    countries: ['Russian Federation', 'Novosibirsk State', 'Moscow State Partners'],
    glowColor: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    points: [
      { prefix: 'Pay Tuition Fee After Visa', text: ' available with verified partner universities' },
      { prefix: '100% Tuition Fee Waiver', text: ' + 15,000 Ruble monthly government stipend' },
      { text: 'Direct visa issuance via the Russian Embassy in Dhaka with zero interview hassle' },
      { text: 'World-renowned Medical, IT, Aviation, and Architecture degrees' }
    ],
    details: {
      countryTitle: 'Russian Federation State Quotas',
      badge: '100% Scholarship + Monthly Stipend',
      generalOverview: 'Russia offers high-reputation technical, medical, and architecture degrees with official state quotas that completely eliminate tuition costs and pay students a monthly living stipend. Select partner universities allow students to pay fees only after visa confirmation.',
      countriesIncluded: [
        { name: 'Russia', flag: '🇷🇺' },
        { name: 'Novosibirsk', flag: '🏛️' },
        { name: 'Moscow Partners', flag: '🇷🇺' },
        { name: 'Saint Petersburg', flag: '🇷🇺' }
      ],
      description: 'Official direct recruitment with Russian state universities. High visa approval in Dhaka with pay-after-visa pathways for Bangladeshi students.',
      intakes: 'Feb 2027 / Sept 2027',
      workRights: 'Legal student part-time work',
      english: 'MOI / English medium programs',
      universities: [
        {
          name: 'Novosibirsk State University of Architecture & Arts',
          country: 'Russia',
          tuition: '150,000 – 250,000 Rubles/yr (or 100% Free on Quota)',
          scholarship: '100% State quota tuition waiver + 15,000 Rubles monthly stipend',
          requirement: 'HSC / Bachelor pass; recent visa successes from Study First Info'
        },
        {
          name: 'Russian State Technical & Medical Partners',
          country: 'Russia',
          tuition: 'Subsidized state rates (approx. $1,800 – $3,200/yr)',
          scholarship: 'Pay tuition after visa confirmation; university dorms included',
          requirement: 'English Medium of Instruction (MOI) or basic preparatory year'
        }
      ],
      scholarships: [
        { name: 'Russian State Quota Scholarship', value: '100% Tuition waiver + 15,000 Rubles monthly stipend' },
        { name: 'Post-Visa Tuition Guarantee', value: 'Pay tuition only after official visa confirmation' }
      ],
      workRightsInfo: [
        '✓ Students have legal rights to work part-time during study in Russia.',
        '✓ Direct visa issuance at the Russian Embassy in Dhaka with no third-country travel.',
        '✓ Extremely low dormitory and living expenses (starting from 4,000 to 10,000 Rubles/mo).'
      ]
    }
  },
  china: {
    id: 'china',
    category: 'asia',
    icon: '🎓',
    regionCode: 'CN',
    badge: 'Fully-Funded CSC & Belt & Road',
    badgeClass: 'bg-[#fef3c7] text-[#92400e]',
    title: 'China Scholarships',
    countries: ['China (CSC Type A & B)', 'Harbin Institute of Tech (HIT)', 'Zhejiang University'],
    glowColor: 'bg-amber-500/10 group-hover:bg-amber-500/20',
    points: [
      { prefix: '100% Tuition & Campus Dormitory', text: ' fully waived' },
      { text: 'Up to 3,500 RMB/month government living stipend' },
      { text: 'Direct admission notices with official JW202 visa eligibility' },
      { text: "C9 League universities (China's Ivy League) with global research prestige" }
    ],
    details: {
      countryTitle: 'China C9 League Powerhouses',
      badge: '100% Fully Funded CSC Schemes',
      generalOverview: 'China provides world-class research infrastructure at Ivy League C9 institutions like Harbin Institute of Technology (HIT), Tsinghua, and Zhejiang, backed by full tuition waivers and comprehensive monthly living stipends for Bangladeshi students.',
      countriesIncluded: [
        { name: 'China (CSC Scheme)', flag: '🇨🇳' },
        { name: 'Harbin Institute of Tech (HIT)', flag: '🏛️' },
        { name: 'Zhejiang University', flag: '🇨🇳' },
        { name: 'Tsinghua University', flag: '🇨🇳' }
      ],
      description: 'World top-100 ranked engineering, computing, and AI research campuses with zero embassy interview risk and direct JW202 visa forms.',
      intakes: 'March 2027 / September 2027',
      workRights: 'University Lab Internships',
      english: 'IELTS 5.5 or MOI certificate',
      universities: [
        {
          name: 'Harbin Institute of Technology (HIT)',
          country: 'China',
          tuition: '100% Free under CSC (or RMB 22,000/yr)',
          scholarship: 'Chinese Government CSC Type A & B (100% Free)',
          requirement: '75%+ GPA in HSC/Bachelors; IELTS 5.5 or MOI'
        },
        {
          name: 'Zhejiang University & C9 League Campuses',
          country: 'China',
          tuition: 'Fully covered under CSC Scheme',
          scholarship: 'Free tuition + free hostel + up to 3,500 RMB/month',
          requirement: 'Top 100 QS Engineering & AI research departments'
        }
      ],
      scholarships: [
        { name: 'Chinese Government Scholarship (CSC)', value: '100% Tuition + Free Single/Double Dorm + RMB 2,500–3,500/mo' },
        { name: 'Belt and Road Initiative (BRI) Fund', value: 'Full tuition waiver and free campus housing' }
      ],
      workRightsInfo: [
        '✓ Complete financial independence with monthly stipends deposited to student accounts.',
        '✓ Direct admission notices and official JW202 visa forms issued without embassy interview risks.',
        '✓ Seamless career entry to global manufacturing and technology conglomerates.'
      ]
    }
  },
  korea: {
    id: 'korea',
    category: 'asia',
    icon: '🇰🇷',
    regionCode: 'KR',
    badge: '50%–70% Guaranteed Scholarship',
    badgeClass: 'bg-[#ffe4e6] text-[#9f1239]',
    title: 'South Korea',
    countries: ['South Korea', 'Sookmyung (Seoul)', 'Gachon', 'KMCU'],
    glowColor: 'bg-rose-500/10 group-hover:bg-rose-500/20',
    points: [
      { prefix: 'E-Visa electronic approval', text: 'Fast  without physical interview' },
      { text: '50% to 70% automatic tuition waiver for international students' },
      { text: 'Direct career links with Samsung, LG, Hyundai tech ecosystems' },
      { text: 'D-10 post-graduation job seeker visa and high part-time earning potential' }
    ],
    details: {
      countryTitle: 'South Korea High-Tech Hubs',
      badge: '50%–70% Automatic Waivers',
      generalOverview: 'South Korea offers an exceptional, stress-free route with electronic E-Visa confirmation—meaning zero embassy interviews and zero document complexity. Bangladeshi students enjoy 50% to 70% automatic tuition scholarships and prime corporate connections.',
      countriesIncluded: [
        { name: 'South Korea (Seoul Hubs)', flag: '🇰🇷' },
        { name: "Sookmyung Women's University", flag: '🏛️' },
        { name: 'Gachon University', flag: '🇰🇷' },
        { name: 'Keimyung College (KMCU)', flag: '🇰🇷' },
        { name: 'Sunchon National University', flag: '🇰🇷' }
      ],
      description: 'Study in Seoul and metropolitan campuses with electronic E-Visa issuance, minimum IELTS 5.5, and strong job-seeker transition permits.',
      intakes: 'March 2027 / September 2027',
      workRights: '20 to 25 hrs/week legal',
      english: 'IELTS 5.5+ or TOPIK',
      universities: [
        {
          name: "Sookmyung Women's University (Seoul)",
          country: 'South Korea',
          tuition: '$3,500 – $5,000 / semester',
          scholarship: '50% to 70% automatic tuition reduction',
          requirement: 'Located in central Seoul; top global business & IT faculty'
        },
        {
          name: 'Gachon University',
          country: 'South Korea',
          tuition: '$3,000 – $4,500 / semester',
          scholarship: '50% guaranteed profile scholarship with IELTS 5.5',
          requirement: 'Leader in AI and Biomedical sciences; fast E-visa issuance'
        },
        {
          name: 'Keimyung College University (KMCU)',
          country: 'South Korea',
          tuition: '$2,500 – $3,800 / semester',
          scholarship: '30% to 50% fee waivers',
          requirement: 'Mobility partner; high tech practical training'
        }
      ],
      scholarships: [
        { name: 'Global Korea Scholarship (GKS)', value: '100% full ride + roundtrip airfare + monthly stipend' },
        { name: 'Seoul University International Merit', value: '50% to 70% tuition fee reduction' }
      ],
      workRightsInfo: [
        '✓ Fast E-Visa electronic confirmation without embassy interview hurdles.',
        '✓ D-10 post-graduation job seeker visa allowing transition to Korean corporations.',
        '✓ Legal part-time work rights in technology, hospitality, and tutoring.'
      ]
    }
  },
  malaysia: {
    id: 'malaysia',
    category: 'asia',
    icon: '🏛️',
    regionCode: 'MY',
    badge: 'Fast EMGS Student Pass (~3-4 Wks)',
    badgeClass: 'bg-[#dbeafe] text-[#1e40af]',
    title: 'Malaysia Branches',
    countries: ['Malaysia', 'UniSZA', 'MILA', 'SEGi', 'INTI & APU'],
    glowColor: 'bg-sky-500/10 group-hover:bg-sky-500/20',
    points: [
      { text: 'Earn accredited UK & Australian Dual Degrees at 70% lower budget' },
      { text: 'UniSZA 1st year total official cost starts around ~৳5.5 Lakh BDT' },
      { text: 'Guaranteed 50% Flat Scholarship at MILA University across full course' },
      { text: 'Smooth credit transfer pathways to USA, UK, and Australia' }
    ],
    details: {
      countryTitle: 'Malaysia Branches & Public Universities',
      badge: 'Subsidized Rates & Dual Degrees',
      generalOverview: 'Malaysia represents a premier high-value hub where students can earn accredited British and Australian degrees at 60%–80% lower cost than studying in the West. Features 3-week EMGS visa clearances and initial budgets from just ৳5.5 Lakh BDT.',
      countriesIncluded: [
        { name: 'Malaysia', flag: '🇲🇾' },
        { name: 'UniSZA (Top 10 Public)', flag: '🏛️' },
        { name: 'MILA University', flag: '🇲🇾' },
        { name: 'SEGi University', flag: '🇲🇾' },
        { name: 'INTI International', flag: '🇲🇾' },
        { name: 'Asia Pacific University (APU)', flag: '🇲🇾' }
      ],
      description: 'Official recruitment partner for UniSZA and top private campuses. Dual UK awards, credit transfer to USA/Europe, and guaranteed scholarships.',
      intakes: 'October 2026 / Jan 2027',
      workRights: 'Allowed during semester breaks',
      english: 'MOI accepted / IELTS 5.0–5.5',
      universities: [
        {
          name: 'Universiti Sultan Zainal Abidin (UniSZA)',
          country: 'Malaysia',
          tuition: 'RM 10,500 / year (1st yr total cost ~৳5.5 Lakh)',
          scholarship: 'Subsidized Public University Fees',
          requirement: 'Top 10 Public University; IELTS 5.5 or MOI for research degrees'
        },
        {
          name: 'MILA University',
          country: 'Malaysia',
          tuition: 'Net RM 12,000 – RM 18,000 / year',
          scholarship: '50% FLAT Scholarship across the entire degree',
          requirement: '3 to 3.5 year fast-track degrees; 100% waiver for GPA 75%+'
        },
        {
          name: 'SEGi University (Kota Damansara)',
          country: 'Malaysia',
          tuition: 'RM 58,000 – RM 89,000 total course fee',
          scholarship: 'UK Dual Award with University of Greenwich & Chichester',
          requirement: 'Receive two certificates (UK + SEGi); 90+ nationalities'
        },
        {
          name: 'INTI International University',
          country: 'Malaysia',
          tuition: 'RM 20,000 – RM 35,000 / year',
          scholarship: 'Save 60-80% compared with UK/US campuses',
          requirement: 'Credit transfer pathways to USA, Australia, and UK'
        }
      ],
      scholarships: [
        { name: 'MILA 50% Flat Scholarship', value: 'Guaranteed 50% waiver on total program tuition' },
        { name: 'UniSZA Public Subsidies', value: 'Lowest tuition across South-East Asian public universities' },
        { name: 'SEGi Merit Concessions', value: '40% to 100% waiver based on academic profile' }
      ],
      workRightsInfo: [
        '✓ Fast EMGS student visa approval typically cleared in 3 to 4 weeks.',
        '✓ Living costs are 60%–80% lower than in the UK, USA, or Australia.',
        '✓ Smooth credit transfers and mobility programs with top universities in 25+ countries.'
      ]
    }
  },
  uk: {
    id: 'uk',
    category: 'commonwealth',
    icon: '🇬🇧',
    regionCode: 'UK',
    badge: '1-Year Masters & Russell Group',
    badgeClass: 'bg-[#ede9fe] text-[#5b21b6]',
    title: 'United Kingdom',
    countries: ['England', 'Wales (Cardiff)', 'London Hubs'],
    glowColor: 'bg-purple-500/10 group-hover:bg-purple-500/20',
    points: [
      { text: 'Up to £3,000 to £10,000 merit scholarships (Cardiff, Herts, York)' },
      { text: 'MOI accepted from 28+ leading Bangladeshi universities' },
      { text: '2-Year Graduate Route Post-Study Work Permit (PSW)' },
      { text: "1-Year intensive Master's programs saving tuition & living expenses" }
    ],
    details: {
      countryTitle: 'United Kingdom & Russell Group',
      badge: '1-Year Masters & London Proximity',
      generalOverview: "The United Kingdom provides world-class prestige, 1-year fast-track Master's programs that save both tuition and living costs, and 2-year Graduate Route Post-Study Work Permits with substantial international merit scholarships.",
      countriesIncluded: [
        { name: 'United Kingdom (England)', flag: '🇬🇧' },
        { name: 'Wales (Cardiff)', flag: '🏴' },
        { name: 'London Hubs', flag: '🇬🇧' },
        { name: 'Birmingham', flag: '🇬🇧' }
      ],
      description: 'Accepts MOI from 28+ leading Bangladeshi universities, offers £3,000 to £10,000 scholarships, and full 20 hrs/week student employment.',
      intakes: 'Jan 2027 / Sept 2027',
      workRights: '20 hrs/week during term',
      english: 'MOI accepted / IELTS 6.0',
      universities: [
        {
          name: 'University of Hertfordshire',
          country: 'United Kingdom',
          tuition: 'UG: £17,450 | PG: £18,600–£20,460',
          scholarship: 'Up to £3,000 Guaranteed Scholarship for self-funded students',
          requirement: 'Hatfield Campus (25 mins to London); accepts CGPA 2.50; MOI accepted'
        },
        {
          name: 'Cardiff University (Russell Group)',
          country: 'United Kingdom',
          tuition: '£24,000 – £33,000 / year',
          scholarship: 'Up to £8,000 to £10,000 Postgraduate Scholarship',
          requirement: 'World Top 180; CGPA 3.0+; prestigious research faculty'
        },
        {
          name: 'Birmingham City University (BCU)',
          country: 'United Kingdom',
          tuition: '£16,500 – £19,500 / year',
          scholarship: 'Up to £3,000 Merit Award',
          requirement: 'Accepts MOI from 28 Bangladeshi universities; modern central campus'
        }
      ],
      scholarships: [
        { name: 'Hertfordshire Guaranteed Grant', value: '£3,000 automatic tuition discount' },
        { name: 'Cardiff Postgraduate Excellence', value: '£8,000 to £10,000 fee reduction' },
        { name: 'Early Payment Concessions', value: '£1,000 to £2,000 early CAS deposit discount' }
      ],
      workRightsInfo: [
        '✓ 2-Year Graduate Route Post-Study Work Permit (PSW) upon completion.',
        '✓ Bank statement requirement: ~৳40 Lakh BDT held for 28 consecutive days.',
        '✓ 20 hours per week legal work rights during term time; full-time during vacations.'
      ]
    }
  },
  newzealand: {
    id: 'newzealand',
    category: 'commonwealth',
    icon: '🥝',
    regionCode: 'NZ',
    badge: 'Pay Tuition After Visa Approval (AIP)',
    badgeClass: 'bg-[#ccfbf1] text-[#115e59]',
    title: 'New Zealand',
    countries: ['New Zealand', 'Australia Pathways'],
    glowColor: 'bg-teal-500/10 group-hover:bg-teal-500/20',
    points: [
      { prefix: 'full-time work rights', text: 'Spouse flies together with ' },
      { text: 'Children get 100% free domestic schooling privileges' },
      { text: 'Up to 3-Year Post Study Work Visa with direct PR routes' },
      { text: 'Both Savings and FDR accepted (4 to 6 months maturity)' }
    ],
    details: {
      countryTitle: 'New Zealand & Oceania',
      badge: 'Pay Fees After Visa (AIP)',
      generalOverview: 'New Zealand offers arguably the world\'s most student-friendly and family-friendly immigration framework: pay tuition fees only after receiving Approval in Principle (AIP) on your visa. Plus, spouses receive open full-time work rights and children attend public schools for free.',
      countriesIncluded: [
        { name: 'New Zealand', flag: '🇳🇿' },
        { name: 'Auckland', flag: '🇳🇿' },
        { name: 'Waikato & Hamilton', flag: '🇳🇿' },
        { name: 'Australia Pathways', flag: '🇦🇺' }
      ],
      description: 'Pay tuition only after visa approval. Spouse flies together with full work rights and children receive 100% free domestic schooling.',
      intakes: 'Feb 2027 / July 2027',
      workRights: '25 hrs/week during study',
      english: 'IELTS 6.0 (UG) / 6.5 (PG)',
      universities: [
        {
          name: 'University of Auckland & AUT',
          country: 'New Zealand',
          tuition: 'NZ$32,000 – NZ$55,000 / year',
          scholarship: 'NZ$5,000 to NZ$20,000 International Excellence Awards',
          requirement: 'Top 100 globally; 3-year post-study work visa in Auckland'
        },
        {
          name: 'University of Waikato & Massey',
          country: 'New Zealand',
          tuition: 'NZ$30,000 – NZ$48,000 / year',
          scholarship: "Vice-Chancellor's International Excellence Scholarships",
          requirement: 'High demand in Agribusiness, Management & IT; regional bonus points'
        },
        {
          name: 'Waikato Institute of Technology (Wintec)',
          country: 'New Zealand',
          tuition: 'NZ$18,000 – NZ$26,000 / year',
          scholarship: 'Subsidized vocational packages',
          requirement: 'Accepts study gaps; hands-on Nursing, IT, and Engineering pathways'
        }
      ],
      scholarships: [
        { name: 'Tongarewa International Award', value: 'Up to NZ$10,000 fee reduction' },
        { name: 'Regional Institute Bursaries', value: 'NZ$2,500 to NZ$5,000 accommodation grants' }
      ],
      workRightsInfo: [
        '✓ Tuition fees payable AFTER visa approval in principle (AIP).',
        '✓ Spouse can travel together with full-time open work rights.',
        '✓ Children receive free domestic primary and secondary school education.',
        '✓ Both Savings and FDR accounts accepted with 4 to 6 months maturity.'
      ]
    }
  },
  germany: {
    id: 'germany',
    category: 'europe',
    icon: '🇩🇪',
    regionCode: 'DE',
    badge: '100% Tuition-Free Public Universities',
    badgeClass: 'bg-[#c6f6d5] text-[#065f46]',
    title: 'Germany Pathways',
    countries: ['Germany', 'TU Munich (TUM)', 'Berlin Tech Partners', 'Public Universities'],
    glowColor: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    points: [
      { prefix: 'Zero Tuition Fees', text: ' across all 16 German federal states at public universities' },
      { prefix: '18-Month Job Seeker Visa', text: ' post-graduation leading directly to an EU Blue Card' },
      { text: 'Official Blocked Account (€11,208 to €11,904) setup and escrow guidance' },
      { text: '20 hrs/week legal student work rights (120 full days / 240 half days/year)' }
    ],
    details: {
      countryTitle: 'Germany Public University Corridors',
      badge: '100% Tuition-Free & High-Tech',
      generalOverview: 'Germany offers world-class engineering, computing, and business degrees at 100% tuition-free public universities. Bangladeshi students benefit from generous 18-month post-study work permits and paid Werkstudent internships in Europe\'s largest economy.',
      countriesIncluded: [
        { name: 'Germany', flag: '🇩🇪' },
        { name: 'Munich (TUM)', flag: '🇩🇪' },
        { name: 'Berlin Tech', flag: '🇩🇪' },
        { name: 'Aachen & Stuttgart', flag: '🇩🇪' }
      ],
      description: 'Offers 100% tuition-free public university seats with Uni-Assist VPD guidance, Blocked Account setup, and direct EU Blue Card career pathways.',
      intakes: 'Winter (Oct 2026) / Summer (Apr 2027)',
      workRights: '20 hrs/week (120 full days/yr)',
      english: 'IELTS 6.5 / German B2 or MOI',
      universities: [
        {
          name: 'Technical University of Munich (TUM) & Public Partners',
          country: 'Germany',
          tuition: '€0 Tuition Fee (~€150/sem contribution)',
          scholarship: 'DAAD Merit Scholarships & Research Grants',
          requirement: '13 years education / Studienkolleg or Bachelor CGPA 3.0+; IELTS 6.5 / German B2'
        },
        {
          name: 'RWTH Aachen & Berlin University Partners',
          country: 'Germany',
          tuition: '€0 Tuition Fee (~€300/sem ticket & contribution)',
          scholarship: 'Deutschlandstipendium (€300/mo grant)',
          requirement: 'Recognized Bachelor / HSC background; English or German proficiency'
        }
      ],
      scholarships: [
        { name: 'DAAD Scholarship Schemes', value: '€934/month stipend + travel & health insurance' },
        { name: 'Deutschlandstipendium', value: '€300/month national merit grant' }
      ],
      workRightsInfo: [
        '✓ 100% tuition-free higher education at public universities across Germany.',
        '✓ 20 hours per week legal student employment during semesters (120 full days / 240 half days/year).',
        '✓ Paid Werkstudent (working student) positions paying €14–€20/hour.',
        '✓ 18-Month job seeker visa (Aufenthaltserlaubnis) leading directly to an EU Blue Card.'
      ]
    }
  },
  ireland: {
    id: 'ireland',
    category: 'europe',
    icon: '🇮🇪',
    regionCode: 'IE',
    badge: 'EU Tech Capital & 2-Yr PSW',
    badgeClass: 'bg-[#e6fffa] text-[#234e52]',
    title: 'Ireland Tech Corridor',
    countries: ['Ireland', 'Dublin Tech Hubs', 'National College of Ireland', 'University College Dublin (UCD)'],
    glowColor: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    points: [
      { prefix: '2-Year Graduate Route PSW', text: ' post-study work visa for Master\'s graduates in the Eurozone' },
      { prefix: 'European Tech Headquarters', text: ' home to Google, Meta, Apple, Pfizer, and Intel European HQs' },
      { text: '100% English-speaking European Union member with globally recognized degrees' },
      { text: '20 hours/week part-time work during terms, 40 hours/week during holidays' }
    ],
    details: {
      countryTitle: 'Ireland Tech & University Corridor',
      badge: 'EU Tech Capital & 2-Yr PSW',
      generalOverview: 'Ireland is Europe\'s premier technology and pharmaceutical hub, hosting European headquarters for over 1,000 multinational giants. As the only native English-speaking country in the Eurozone, it offers Bangladeshi graduates exceptional post-study work opportunities via the 2-Year Third Level Graduate Scheme.',
      countriesIncluded: [
        { name: 'Ireland', flag: '🇮🇪' },
        { name: 'Dublin', flag: '🇮🇪' },
        { name: 'Cork', flag: '🇮🇪' },
        { name: 'Galway', flag: '🇮🇪' }
      ],
      description: 'Direct access to world-ranked Irish universities and institutes of technology with high-demand graduate careers in software engineering, data analytics, fintech, and biotechnology.',
      intakes: 'Sept 2026 / Jan 2027',
      workRights: '20 hrs/week (40 hrs in holidays)',
      english: 'IELTS 6.0–6.5 / Duolingo 115+ / MOI',
      universities: [
        {
          name: 'National College of Ireland (NCI)',
          country: 'Ireland',
          tuition: '€10,000 – €15,000 / year',
          scholarship: 'Up to €4,000 Dean\'s Award / International Merit Scholarship',
          requirement: 'Bachelor CGPA 2.75+; IELTS 6.0–6.5 / Duolingo 110–120 / MOI accepted'
        },
        {
          name: 'University College Dublin (UCD) & Dublin Hubs',
          country: 'Ireland',
          tuition: '€14,000 – €22,000 / year',
          scholarship: 'Global Excellence Postgraduate Scholarship (€2,000 to €5,000)',
          requirement: 'Bachelor CGPA 3.0+; IELTS 6.5 or equivalent'
        }
      ],
      scholarships: [
        { name: 'Government of Ireland International Scholarship', value: '€10,000 stipend + full tuition waiver' },
        { name: 'Global Excellence Postgraduate Award', value: '€2,000 to €5,000 tuition reduction' }
      ],
      workRightsInfo: [
        '✓ 2-Year Third Level Graduate Scheme (Stamp 1G) post-study work permit for Master\'s graduates.',
        '✓ 1-Year Stamp 1G post-study work permit for Bachelor\'s graduates.',
        '✓ 20 hours/week legal part-time work during academic terms; 40 hours/week during holidays.',
        '✓ Direct access to Silicon Docks European tech conglomerates (Google, Meta, TikTok, Stripe).'
      ]
    }
  },
  thailand: {
    id: 'thailand',
    category: 'asia',
    icon: '🇹🇭',
    regionCode: 'TH',
    badge: '100% English • Affordable ASEAN Hub',
    badgeClass: 'bg-[#fefcbf] text-[#744210]',
    title: 'Thailand ASEAN Hub',
    countries: ['Thailand', 'Asian Institute of Tech (AIT)', 'Stamford International', 'Bangkok Hubs'],
    glowColor: 'bg-amber-500/10 group-hover:bg-amber-500/20',
    points: [
      { prefix: 'Zero Language Barrier', text: ' — 100% English-medium international curricula with MOI acceptance' },
      { prefix: 'Ultra-Affordable Budget', text: ' tuition from $2,500/yr and monthly living from $250/month' },
      { text: 'Asian Institute of Technology (AIT) international research network & fellowships' },
      { text: 'Fast visa processing with straightforward embassy approval from Dhaka' }
    ],
    details: {
      countryTitle: 'Thailand International University Corridors',
      badge: '100% English • Affordable ASEAN Hub',
      generalOverview: 'Thailand offers prestigious English-medium international higher education in the heart of Southeast Asia. With institutions like the Asian Institute of Technology (AIT) and international partner campuses in Bangkok, students experience world-class education at a fraction of Western costs with low living expenses and streamlined visa clearance.',
      countriesIncluded: [
        { name: 'Thailand', flag: '🇹🇭' },
        { name: 'Bangkok', flag: '🇹🇭' },
        { name: 'AIT Campus', flag: '🇹🇭' }
      ],
      description: 'Premier Asian gateway offering accredited Bachelor and Master degrees with industry internships, low tuition, and easy credit transfer options.',
      intakes: 'August 2026 / January 2027',
      workRights: 'Campus internships & project roles',
      english: 'MOI accepted / IELTS 5.0–5.5',
      universities: [
        {
          name: 'Asian Institute of Technology (AIT)',
          country: 'Thailand',
          tuition: '$3,500 – $6,000 / year',
          scholarship: 'Royal Thai Government (RTG) Fellowships & AIT Merit Awards',
          requirement: 'Bachelor pass with CGPA 2.75+; MOI or IELTS 5.5'
        },
        {
          name: 'Stamford International University (Bangkok)',
          country: 'Thailand',
          tuition: '$2,500 – $4,500 / year',
          scholarship: 'Early Bird & ASEAN Leadership Grants (up to 30%)',
          requirement: 'HSC / Bachelor pass; 100% English medium, MOI accepted'
        }
      ],
      scholarships: [
        { name: 'Royal Thai Government (RTG) Fellowships', value: 'Full/partial tuition fellowship grants' },
        { name: 'AIT President\'s Merit Scholarships', value: 'Up to 50% tuition reduction' }
      ],
      workRightsInfo: [
        '✓ 100% English-medium international curricula with MOI acceptance.',
        '✓ Affordable monthly living expenses (~$250 to $400/month including accommodation).',
        '✓ Authorized university laboratory internships and research assistantships.',
        '✓ Fast and straightforward student visa processing via the Royal Thai Embassy in Dhaka.'
      ]
    }
  }
};

export function getPathwayById(id?: string): RouteCard {
  if (!id) return pathways.schengen;
  const clean = id.toLowerCase().trim();
  
  if (pathways[clean]) return pathways[clean];
  if (clean.includes('schengen') || clean.includes('hungary') || clean.includes('greece')) {
    return pathways.schengen;
  }
  if (clean.includes('germany') || clean.includes('deutschland') || clean.includes('munich') || clean.includes('berlin')) {
    return pathways.germany;
  }
  if (clean.includes('ireland') || clean.includes('irish') || clean.includes('dublin')) {
    return pathways.ireland;
  }
  if (clean.includes('thailand') || clean.includes('thai') || clean.includes('bangkok') || clean.includes('ait')) {
    return pathways.thailand;
  }
  if (clean.includes('russia')) {
    return pathways.russia;
  }
  if (clean.includes('china')) {
    return pathways.china;
  }
  if (clean.includes('korea')) {
    return pathways.korea;
  }
  if (clean.includes('malaysia')) {
    return pathways.malaysia;
  }
  if (clean.includes('uk') || clean.includes('england') || clean.includes('united-kingdom') || clean.includes('britain')) {
    return pathways.uk;
  }
  if (clean.includes('zealand') || clean.includes('nz') || clean.includes('oceania') || clean.includes('australia')) {
    return pathways.newzealand;
  }
  if (clean.includes('europe')) {
    return pathways.schengen;
  }
  
  return pathways.schengen;
}
