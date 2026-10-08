export interface Counselor {
  id: string;
  name: string;
  countryKey: string;
  tags: string[];
  stats: { exp: string; success: string; students: string };
  rating: number;
  bio: string;
  image: string;
  active: boolean;
  phone: string;
  branch: string;
}

export const ALL_COUNSELORS: Counselor[] = [
  {
    id: 'c-1',
    name: 'M. Imran Hossain Rony',
    countryKey: 'germany',
    tags: ['🇩🇪 Germany', '🇵🇱 Poland', 'PR Visa', 'DAAD'],
    stats: { exp: '8 yrs', success: '94%', students: '120+' },
    rating: 5,
    bio: 'Specialized in DAAD scholarships, German blocked accounts, APS verification, and embassy mock preparation.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    active: true,
    phone: '+8801711223344',
    branch: 'Banani Head Office'
  },
  {
    id: 'c-2',
    name: 'Md Abul Bashar',
    countryKey: 'hungary',
    tags: ['🇭🇺 Hungary', 'Schengen', 'PR', 'Spouse Visa'],
    stats: { exp: '10 yrs', success: '98%', students: '520+' },
    rating: 5,
    bio: 'Chief Hungary strategist with over 500+ visa successes. Expert in Stipendium Hungaricum and direct Dhaka embassy files.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    active: true,
    phone: '+8801711998877',
    branch: 'Banani Head Office'
  },
  {
    id: 'c-3',
    name: 'Md Belal Hossain',
    countryKey: 'malaysia',
    tags: ['🇲🇾 Malaysia', 'UniSZA', 'Spouse Visa', 'Fast EMGS'],
    stats: { exp: '6 yrs', success: '99%', students: '420+' },
    rating: 5,
    bio: 'Official representative for Universiti Sultan Zainal Abidin (UniSZA) & MILA. Specializes in 3-week EMGS approvals.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    active: true,
    phone: '+8801822334455',
    branch: 'Farmgate Branch'
  },
  {
    id: 'c-4',
    name: 'Dr. Sarah Rahman',
    countryKey: 'china',
    tags: ['🇨🇳 China', 'CSC Scholarship', '100% Full Ride'],
    stats: { exp: '12 yrs', success: '98%', students: '850+' },
    rating: 5,
    bio: 'Former university admissions liaison. Guides students directly for Type A and Type B CSC full-ride scholarships.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200',
    active: false,
    phone: '+8801933445566',
    branch: 'Sylhet Branch'
  },
  {
    id: 'c-5',
    name: 'Md Tariq Hasan',
    countryKey: 'uk',
    tags: ['🇬🇧 UK', 'Cardiff', '1-Yr Masters', 'Russell Group'],
    stats: { exp: '7 yrs', success: '95%', students: '290+' },
    rating: 5,
    bio: 'Specialist in UK January and September intakes. Direct liaison for Cardiff, Hertfordshire, and £10,000 merit grants.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    active: true,
    phone: '+8801755667788',
    branch: 'Banani Head Office'
  },
  {
    id: 'c-6',
    name: 'Tanzeel Ahmed Chowdhury',
    countryKey: 'new-zealand',
    tags: ['🇳🇿 New Zealand', 'Pay After Visa', 'Spouse Work', 'Green List'],
    stats: { exp: '9 yrs', success: '96%', students: '240+' },
    rating: 5,
    bio: 'Lead counselor for New Zealand AIP (Approval in Principle). Guides spouse full open work permits and FDR 6-month solvency.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200',
    active: true,
    phone: '+8801644556677',
    branch: 'Sylhet Branch'
  },
  {
    id: 'c-7',
    name: 'Fatema Akter',
    countryKey: 'sweden',
    tags: ['🇸🇪 Sweden', 'Schengen', 'Legalization', 'Notary'],
    stats: { exp: '7 yrs', success: '97%', students: '310+' },
    rating: 5,
    bio: 'Specialist in document legalizations, apostille verifications, Swedish Institute scholarships, and bank statements.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200',
    active: false,
    phone: '+8801788990011',
    branch: 'Farmgate Branch'
  },
  {
    id: 'c-8',
    name: 'Sardar Rezwan Kabir',
    countryKey: 'russia',
    tags: ['🇷🇺 Russia', 'State Quota', 'Pay After Visa', 'Medical'],
    stats: { exp: '6 yrs', success: '93%', students: '160+' },
    rating: 5,
    bio: 'Novosibirsk State & Russian Quota expert. Pay tuition fees after visa approval with monthly 15,000 Ruble state stipend.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200',
    active: true,
    phone: '+8801899001122',
    branch: 'Banani Head Office'
  }
];
