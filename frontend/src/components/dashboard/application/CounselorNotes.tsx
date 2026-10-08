import { FileText, Send, CheckCheck } from 'lucide-react';
import { useState } from 'react';

export default function CounselorNotes() {
  const [messages, setMessages] = useState<Array<{ sender: string; role: string; text: string; time: string; isStudent?: boolean }>>([
    {
      sender: 'M. Imran Hossain Rony',
      role: 'Senior Counselor',
      text: "Rahul's profile is strong. Dual A+ grades qualify for merit waiver. IELTS score sufficient for all target universities. Will proceed with applications after blocked account confirmation.",
      time: 'Sep 8, 2026 — 3:45 PM',
      isStudent: false,
    },
  ]);
  const [replyText, setReplyText] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newMessage = {
      sender: 'Rahul Ahmed',
      role: 'Student',
      text: replyText.trim(),
      time: 'Just now',
      isStudent: true,
    };

    setMessages([...messages, newMessage]);
    setReplyText('');
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
      <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-100">
        <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
          <FileText size={20} />
        </div>
        <div>
          <h3 className="font-bold text-primary text-lg">Counselor Feedback</h3>
          <p className="text-xs text-gray-500">Official notes &amp; direct communications</p>
        </div>
      </div>

      {/* Messages Thread */}
      <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-[360px] pr-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl text-sm ${
              msg.isStudent
                ? 'bg-emerald-50 border border-emerald-100 ml-4'
                : 'bg-gray-50 border border-gray-100 mr-4'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary text-xs">{msg.sender}</span>
                <span className="text-[10px] bg-white text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">
                  {msg.role}
                </span>
              </div>
              <span className="text-[11px] text-gray-400">{msg.time}</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{msg.text}</p>
            {msg.isStudent && (
              <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-emerald-700 font-medium">
                <CheckCheck size={12} /> Delivered
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reply Input Form */}
      <form onSubmit={handleSend} className="mt-auto pt-3 border-t border-gray-100">
        <div className="relative flex items-center">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Reply to counselor Imran Rony..."
            className="w-full text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
          <button
            type="submit"
            disabled={!replyText.trim()}
            className="absolute right-2 p-2 rounded-lg bg-accent text-white hover:bg-emerald-700 disabled:opacity-40 disabled:hover:bg-accent transition-colors"
            title="Send Reply"
          >
            <Send size={15} />
          </button>
        </div>
        <p className="text-[11px] text-gray-400 mt-2 text-center">
          Counselor responses are usually within 2 to 4 business hours.
        </p>
      </form>
    </div>
  );
}
