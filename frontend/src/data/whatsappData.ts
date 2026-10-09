export interface WhatsAppContact {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  phoneDisplay: string;
  waNumber: string; // Clean digits for wa.me link
  defaultMessage: string;
  isOfficial?: boolean;
}

export const OFFICIAL_WHATSAPP_NUMBER = '8801898833034';
export const OFFICIAL_WHATSAPP_DISPLAY = '+880 1898-833034';

export const WHATSAPP_BRANCHES: WhatsAppContact[] = [
  {
    id: 'official-head-office',
    name: 'Head Office (Banani)',
    subtitle: 'General Admissions & All Destinations',
    badge: 'Official WhatsApp',
    phoneDisplay: '+880 1898-833034',
    waNumber: '8801898833034',
    defaultMessage: 'Hi Study First Info, I want to inquire about higher study abroad admissions.',
    isOfficial: true,
  },
  {
    id: 'farmgate-branch',
    name: 'Farmgate Branch (Dhaka)',
    subtitle: 'BTI Central Plaza Desk, Green Road',
    badge: 'Central Hub',
    phoneDisplay: '+880 1806-971441',
    waNumber: '8801806971441',
    defaultMessage: 'Hi Farmgate Branch, I want to book an in-person or online study counseling session.',
  },
  {
    id: 'sylhet-branch',
    name: 'Sylhet Branch',
    subtitle: 'Millennium Shopping Centre, Zindabazar',
    badge: 'Regional Desk',
    phoneDisplay: '+880 1898-383120',
    waNumber: '8801898383120',
    defaultMessage: 'Hi Sylhet Branch, I want to inquire about study abroad opportunities and visa processing.',
  },
  {
    id: 'chittagong-branch',
    name: 'Chittagong Branch',
    subtitle: 'Sanmar Ocean City, GEC Circle',
    badge: 'Port City Hub',
    phoneDisplay: '+880 1806-971443',
    waNumber: '8801806971443',
    defaultMessage: 'Hi Chittagong Branch, I want to inquire about study abroad opportunities and profile assessment.',
  },
];
