import { CheckCircle2 } from 'lucide-react';

export default function EnglishScoresCard({ profile }: { profile?: any }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-primary mb-6">English Test Scores</h2>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <div className="flex justify-between items-start mb-4 border-b border-gray-200 pb-4">
          <div>
            <div className="text-2xl font-black text-primary">{profile?.englishTestType || 'IELTS'}: {profile?.englishScore || '6.5'} <span className="text-sm font-semibold text-gray-500 uppercase">Overall</span></div>
            <div className="text-xs text-gray-400 font-medium mt-1">Test Date: June 2026</div>
          </div>
          <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-green-200">
            Certificate: Uploaded <CheckCircle2 size={14} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <div className="text-gray-400 text-xs font-bold uppercase mb-1">Reading</div>
            <div className="font-bold text-primary text-lg">7.0</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <div className="text-gray-400 text-xs font-bold uppercase mb-1">Writing</div>
            <div className="font-bold text-primary text-lg">6.0</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <div className="text-gray-400 text-xs font-bold uppercase mb-1">Listening</div>
            <div className="font-bold text-primary text-lg">7.0</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <div className="text-gray-400 text-xs font-bold uppercase mb-1">Speaking</div>
            <div className="font-bold text-primary text-lg">6.0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
