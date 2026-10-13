import { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Send, 
  Search, 
  MessageSquare, 
  CheckCheck, 
  ShieldCheck, 
  Info, 
  Sparkles, 
  Phone, 
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

interface Message {
  id: string;
  sender: 'student' | 'counselor';
  text: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
}

interface Conversation {
  id: string;
  counselorName: string;
  role: string;
  specialization: string;
  avatarText: string;
  isOnline: boolean;
  unreadCount?: number;
  phone: string;
  lastMessage: string;
  lastTimestamp: string;
  messages: Message[];
}

const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-1',
    counselorName: 'M. Imran Hossain Rony',
    role: 'Senior Admissions Director',
    specialization: 'Germany & Schengen Europe Lead',
    avatarText: 'IR',
    isOnline: true,
    unreadCount: 1,
    phone: '+880 1898-833034',
    lastMessage: "Rahul's profile is strong. Dual A+ grades qualify for merit waiver.",
    lastTimestamp: '3:45 PM',
    messages: [
      {
        id: 'm1',
        sender: 'counselor',
        text: 'Hello Rahul! I reviewed your HSC and SSC academic records. Your dual GPA 5.0 (Golden A+) makes you a top candidate for German public university waivers.',
        timestamp: 'Sep 8, 2:15 PM',
        status: 'read'
      },
      {
        id: 'm2',
        sender: 'student',
        text: 'Thank you Sir! Does my IELTS 6.5 fulfill the direct requirement for the Winter intake, or should I re-take for 7.0?',
        timestamp: 'Sep 8, 2:40 PM',
        status: 'read'
      },
      {
        id: 'm3',
        sender: 'counselor',
        text: "Rahul's profile is strong. Dual A+ grades qualify for merit waiver. IELTS 6.5 is sufficient for target universities. Proceeding with applications after blocked account confirmation.",
        timestamp: 'Sep 8, 3:45 PM',
        status: 'delivered'
      }
    ]
  },
  {
    id: 'conv-abu-musa',
    counselorName: 'Abu Musa',
    role: 'Principal Counselor & Legal Advisor',
    specialization: 'Student Visa / PR / Dependent (Spouse Visa)',
    avatarText: 'AM',
    isOnline: true,
    phone: '+880 1806-971440',
    lastMessage: 'Spouse work permit and family relocation guidelines are prepared.',
    lastTimestamp: '11:15 AM',
    messages: [
      {
        id: 'mam1',
        sender: 'counselor',
        text: 'Assalamu Alaikum Rahul! For student visa with accompanying spouse, we assist with joint sponsorship and marriage certificate attestation.',
        timestamp: 'Yesterday, 4:20 PM',
        status: 'read'
      },
      {
        id: 'mam2',
        sender: 'counselor',
        text: 'Spouse work permit and family relocation guidelines are prepared.',
        timestamp: '11:15 AM',
        status: 'delivered'
      }
    ]
  },
  {
    id: 'conv-2',
    counselorName: 'Dr. Sarah Rahman',
    role: 'Chief Academic Advisor',
    specialization: 'China CSC & Full Scholarships',
    avatarText: 'SR',
    isOnline: false,
    phone: '+880 1806-971441',
    lastMessage: 'Your CSC Type-A documentation checklist is ready for download.',
    lastTimestamp: 'Yesterday',
    messages: [
      {
        id: 'm201',
        sender: 'counselor',
        text: 'Welcome Rahul! In case you wish to keep China as a backup for a 100% full tuition + free dormitory scholarship, the Type A portal opens November 15.',
        timestamp: 'Yesterday, 11:30 AM',
        status: 'read'
      },
      {
        id: 'm202',
        sender: 'counselor',
        text: 'Your CSC Type-A documentation checklist is ready for download.',
        timestamp: 'Yesterday, 11:32 AM',
        status: 'read'
      }
    ]
  },
  {
    id: 'conv-3',
    counselorName: 'Md Abul Bashar',
    role: 'Chief Hungary Strategist',
    specialization: 'Hungary & Schengen Admissions',
    avatarText: 'AB',
    isOnline: true,
    phone: '+880 1711-998877',
    lastMessage: 'Budapest Metropolitan University interview dates confirmed.',
    lastTimestamp: 'Sep 5',
    messages: [
      {
        id: 'm301',
        sender: 'counselor',
        text: 'Hello Rahul! Hungarian universities accept MOI without IELTS. Tuition fees can be paid upon conditional acceptance.',
        timestamp: 'Sep 5, 4:10 PM',
        status: 'read'
      }
    ]
  },
  {
    id: 'conv-4',
    counselorName: 'Md Belal Hossain',
    role: 'Regional Representative',
    specialization: 'Malaysia (UniSZA & MILA Dual Degrees)',
    avatarText: 'BH',
    isOnline: true,
    phone: '+880 1822-334455',
    lastMessage: 'The 50% Flat Scholarship scheme has been approved for your track.',
    lastTimestamp: 'Sep 2',
    messages: [
      {
        id: 'm401',
        sender: 'counselor',
        text: 'Hello Rahul! MILA and UniSZA dual awards allow European degree transfer after year 2. Let me know if you would like fee estimations.',
        timestamp: 'Sep 2, 10:00 AM',
        status: 'read'
      }
    ]
  },
  {
    id: 'conv-5',
    counselorName: 'Eusha Ibne Nur Sami',
    role: 'Executive Counselor',
    specialization: 'Student Visa & Dependent Visa',
    avatarText: 'ES',
    isOnline: true,
    phone: '+880 1898-383120',
    lastMessage: 'Ready to assist with your visa documentation review.',
    lastTimestamp: 'Aug 29',
    messages: [
      {
        id: 'm501',
        sender: 'counselor',
        text: 'Hi Rahul! Whenever you are ready to submit your financial solvency papers, please message me here.',
        timestamp: 'Aug 29, 2:00 PM',
        status: 'read'
      }
    ]
  },
  {
    id: 'conv-6',
    counselorName: 'Md Abu Sayed',
    role: 'Senior Admissions Lead',
    specialization: 'Permanent Residence (PR) & Spouse Visa',
    avatarText: 'AS',
    isOnline: true,
    phone: '+880 1806-971443',
    lastMessage: 'Feel free to schedule a one-on-one session anytime.',
    lastTimestamp: 'Aug 25',
    messages: [
      {
        id: 'm601',
        sender: 'counselor',
        text: 'Hello Rahul! Let me know if you need assistance comparing degree requirements or embassy filing checklists.',
        timestamp: 'Aug 25, 11:00 AM',
        status: 'read'
      }
    ]
  }
];

const QUICK_PROMPTS = [
  'What documents are needed for blocked account?',
  'Can I apply for multiple universities simultaneously?',
  'When is the next embassy slot expected?',
  'How do I request my tuition fee waiver certificate?'
];

const generateMessageId = (prefix: string) => `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

export default function MessagesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [conversations, setConversations] = useState<Conversation[]>(INITIAL_CONVERSATIONS);
  const counselorParam = searchParams.get('counselor');

  const [activeConvId, setActiveConvId] = useState<string>(() => {
    if (counselorParam) {
      const match = INITIAL_CONVERSATIONS.find(
        c => c.counselorName.toLowerCase().includes(counselorParam.toLowerCase()) ||
             c.id.toLowerCase() === counselorParam.toLowerCase()
      );
      if (match) return match.id;
    }
    return 'conv-1';
  });
  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mobileChatOpen, setMobileChatOpen] = useState<boolean>(() => Boolean(counselorParam));

  // Sync active conversation when searchParams change (e.g. back/forward, direct link)
  useEffect(() => {
    if (counselorParam) {
      const match = conversations.find(
        c => c.counselorName.toLowerCase().includes(counselorParam.toLowerCase()) ||
             c.id.toLowerCase() === counselorParam.toLowerCase()
      );
      if (match && match.id !== activeConvId) {
        setActiveConvId(match.id);
        setMobileChatOpen(true);
      }
    }
  }, [counselorParam, conversations, activeConvId]);

  const selectConversation = (id: string) => {
    setActiveConvId(id);
    setMobileChatOpen(true);
    const conv = conversations.find(c => c.id === id);
    if (conv) {
      setSearchParams({ counselor: conv.counselorName });
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConversation = conversations.find(c => c.id === activeConvId) || conversations[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeConversation?.messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || !activeConversation) return;

    const newMessage: Message = {
      id: generateMessageId('msg'),
      sender: 'student',
      text,
      timestamp: 'Just now',
      status: 'sent'
    };

    setConversations(prev => prev.map(c => {
      if (c.id === activeConvId) {
        return {
          ...c,
          lastMessage: text,
          lastTimestamp: 'Just now',
          messages: [...c.messages, newMessage]
        };
      }
      return c;
    }));

    setInputText('');

    // Simulate counselor reply after 1.2s
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replyMessage: Message = {
        id: generateMessageId('reply'),
        sender: 'counselor',
        text: `Thanks Rahul! I received your query regarding "${text.slice(0, 45)}${text.length > 45 ? '...' : ''}". I am checking your file records and will update you directly.`,
        timestamp: 'Just now',
        status: 'delivered'
      };

      setConversations(prev => prev.map(c => {
        if (c.id === activeConvId) {
          return {
            ...c,
            lastMessage: replyMessage.text,
            lastTimestamp: 'Just now',
            messages: [...c.messages, replyMessage]
          };
        }
        return c;
      }));
    }, 1200);
  };

  const filteredConversations = conversations.filter(c => 
    c.counselorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      {/* Top Header & Breadcrumbs */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">Messages</h1>
          <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
            <Link to="/dashboard" className="hover:text-emerald-700 transition-colors">Dashboard</Link>
            <span>&gt;</span>
            <span className="text-primary font-semibold">Messages &amp; Counselor Communications</span>
          </div>
        </div>
      </div>

      {/* Demo Notice Banner */}
      <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-3 sm:p-3.5 text-xs text-amber-800 flex items-start sm:items-center gap-3 shadow-xs">
        <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
        <div className="flex-1">
          <p className="font-semibold text-amber-900">
            Frontend Demo Messaging Interface
          </p>
          <p className="text-amber-700 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
            This student messaging hub operates locally in this session. For official admissions urgency, reach your assigned counselor directly via verified branch WhatsApp.
          </p>
        </div>
      </div>

      {/* Main Chat Interface Container */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col md:flex-row h-[660px] max-h-[calc(100vh-230px)] min-h-[520px] w-full min-w-0">
        
        {/* Left Column: Conversations List */}
        <div className={`w-full md:w-80 lg:w-88 shrink-0 border-r border-slate-200/80 flex flex-col min-h-0 bg-white ${mobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
          {/* Search Box */}
          <div className="p-3.5 border-b border-slate-100 bg-slate-50/50 shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search counselors & advisors..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
              />
            </div>
          </div>

          {/* Conversations Scrollable List */}
          <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-slate-100">
            {filteredConversations.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-40" />
                No counselors found matching &ldquo;{searchTerm}&rdquo;
              </div>
            ) : (
              filteredConversations.map((conv) => {
                const isSelected = conv.id === activeConvId;
                return (
                  <button
                    key={conv.id}
                    onClick={() => selectConversation(conv.id)}
                    className={`w-full p-3.5 text-left transition-all flex items-start gap-3 hover:bg-slate-50 cursor-pointer ${
                      isSelected ? 'bg-emerald-50/60 border-l-4 border-l-emerald-600' : ''
                    }`}
                  >
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        {conv.avatarText}
                      </div>
                      {conv.isOnline && (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-xs text-slate-900 truncate">
                          {conv.counselorName}
                        </span>
                        <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                          {conv.lastTimestamp}
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-800 font-semibold truncate">
                        {conv.specialization}
                      </p>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {conv.lastMessage}
                      </p>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Chat Room Panel */}
        <div className={`flex-1 min-w-0 flex flex-col min-h-0 bg-slate-50/40 ${mobileChatOpen ? 'flex' : 'hidden md:flex'}`}>
          {/* Chat Header */}
          <div className="p-3.5 sm:p-4 bg-white border-b border-slate-200/80 flex items-center justify-between gap-3 shrink-0 min-w-0">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* Mobile Back Button */}
              <button 
                onClick={() => setMobileChatOpen(false)}
                className="md:hidden p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 shrink-0"
                aria-label="Back to conversations"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shrink-0">
                {activeConversation.avatarText}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-slate-900 truncate">
                    {activeConversation.counselorName}
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-md font-semibold shrink-0">
                    <ShieldCheck size={11} /> Verified Counselor
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate">
                  {activeConversation.role} &bull; {activeConversation.specialization}
                </p>
              </div>
            </div>

            {/* Quick WhatsApp Link */}
            <a
              href={`https://wa.me/${activeConversation.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${activeConversation.counselorName}, I am messaging from my Study First Info Student Portal.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all shrink-0 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <Phone size={13} className="text-emerald-700" />
              <span className="hidden sm:inline">WhatsApp Direct</span>
              <ExternalLink size={12} className="opacity-60" />
            </a>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-4">
            {activeConversation.messages.map((msg) => {
              const isStudent = msg.sender === 'student';
              return (
                <div 
                  key={msg.id}
                  className={`flex flex-col ${isStudent ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm shadow-xs ${
                    isStudent 
                      ? 'bg-emerald-600 text-white rounded-br-xs' 
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                  }`}>
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-1 px-1">
                    <span>{msg.timestamp}</span>
                    {isStudent && msg.status && (
                      <CheckCheck size={13} className="text-emerald-600" />
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 italic bg-white border border-slate-200/60 rounded-xl px-3 py-2 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>{activeConversation.counselorName} is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          <div className="px-4 py-2 bg-white/90 border-t border-slate-100 flex items-center gap-2 overflow-x-auto min-w-0 shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase shrink-0 flex items-center gap-1">
              <Sparkles size={11} className="text-emerald-600" /> Quick Ask:
            </span>
            {QUICK_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="text-[11px] text-slate-600 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200/80 shrink-0">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 min-w-0"
            >
              <div className="relative flex-1 min-w-0">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Write a message to ${activeConversation.counselorName}...`}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={!inputText.trim()}
                className="bg-accent hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold p-2.5 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
              >
                <Send size={15} />
                <span className="hidden sm:inline">Send</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
