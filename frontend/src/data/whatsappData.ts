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
    phoneDisplay: '+880 1898-833035',
    waNumber: '8801898833035',
    defaultMessage: 'Hi Farmgate Branch, I want to book an in-person or online study counseling session.',
  },
  {
    id: 'sylhet-branch',
    name: 'Sylhet Branch',
    subtitle: 'Millennium Shopping Centre, Zindabazar',
    badge: 'Regional Desk',
    phoneDisplay: '+880 1898-833036',
    waNumber: '8801898833036',
    defaultMessage: 'Hi Sylhet Branch, I want to inquire about study abroad opportunities and visa processing.',
  },
];
