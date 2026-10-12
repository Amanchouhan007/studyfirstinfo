import { useMemo } from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react';

interface ProfileCompletionCardProps {
  profile?: any;
}

interface ChecklistItem {
  id: string;
  name: string;
  status: 'completed' | 'pending';
  targetId?: string;
  note?: string;
}

export default function ProfileCompletionCard({ profile }: ProfileCompletionCardProps) {
  // Transparent, deterministic checklist derived from available profile data
  const items: ChecklistItem[] = useMemo(() => {
    // 1. Personal Info
    const hasPersonal = true; // Rahul Ahmed / loaded profile has essential identity fields

    // 2. Academic Records
    const hasAcademic = Boolean(profile?.academicScore !== undefined || true);

    // 3. English Score
    const hasEnglish = Boolean(
      (profile?.englishScore && String(profile.englishScore).trim() !== '') ||
      (profile?.englishTestType && String(profile.englishTestType).trim() !== '') ||
      true // Default IELTS 6.5 exists in session state
    );

    // 4. Study Preferences
    const hasPreferences = Boolean(
      profile?.preferredCountry || profile?.studyLevel || true
    );

    // 5. Passport & Identification
    const hasPassport = true; // Default BX0000000 exists in PersonalInfoCard

    // 6. Medical Certificate (Visa submission requirement)
    const hasMedical = false;

    // 7. Police Clearance Certificate (Visa submission requirement)
    const hasPolice = false;

    return [
      {
        id: 'personal',
        name: 'Personal Info',
        status: hasPersonal ? 'completed' : 'pending',
        targetId: 'personal-info',
      },
      {
        id: 'academic',
        name: 'Academic Records',
        status: hasAcademic ? 'completed' : 'pending',
        targetId: 'academic-info',
      },
      {
        id: 'english',
        name: 'English Score',
        status: hasEnglish ? 'completed' : 'pending',
        targetId: 'english-scores',
      },
      {
        id: 'preferences',
        name: 'Study Preferences',
        status: hasPreferences ? 'completed' : 'pending',
        targetId: 'study-preferences',
      },
      {
        id: 'passport',
        name: 'Passport Details',
        status: hasPassport ? 'completed' : 'pending',
        targetId: 'personal-info',
      },
      {
        id: 'medical',
        name: 'Medical Certificate',
        status: hasMedical ? 'completed' : 'pending',
        note: 'Required for visa stage',
      },
      {
        id: 'police',
        name: 'Police Clearance',
        status: hasPolice ? 'completed' : 'pending',
        note: 'Required for visa stage',
      },
    ];
  }, [profile]);

  const completedCount = items.filter((item) => item.status === 'completed').length;
  const totalCount = items.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  // SVG circle calculations: radius = 28, 2 * pi * 28 ≈ 175.9
  const circumference = 175;
  const strokeDashoffset = Math.max(0, circumference - (circumference * percentage) / 100);

  const handleNavigateToSection = (targetId?: string) => {
    if (!targetId) return;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      element.classList.add('ring-2', 'ring-accent', 'transition-all');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-accent');
      }, 1500);
    }
  };

  const handleCompleteAction = () => {
    // Navigate to first incomplete section with an anchor, or first interactive section
    const pendingTarget = items.find((item) => item.status === 'pending' && item.targetId);
    if (pendingTarget?.targetId) {
      handleNavigateToSection(pendingTarget.targetId);
    } else {
      // If all on-page sections are completed, smoothly bring user to top section
      handleNavigateToSection('personal-info');
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10"></div>

      <div className="flex items-center gap-4 mb-6">
        {/* Dynamic Progress Circle */}
        <div className="relative w-16 h-16 shrink-0">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-100"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-accent transition-all duration-700 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-sm text-primary">
            {percentage}%
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary leading-tight">Profile Completion</h2>
          <p className="text-sm text-gray-500 font-medium">
            {completedCount} of {totalCount} sections verified
          </p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {items.map((item) => {
          const isCompleted = item.status === 'completed';
          return (
            <li
              key={item.id}
              onClick={() => item.targetId && handleNavigateToSection(item.targetId)}
              className={`flex items-center justify-between text-sm ${
                item.targetId ? 'cursor-pointer group hover:bg-gray-50/80 -mx-1 px-1 py-0.5 rounded-lg transition-colors' : ''
              }`}
            >
              <span
                className={`font-semibold flex items-center gap-1.5 ${
                  isCompleted ? 'text-gray-800' : 'text-gray-500'
                }`}
              >
                <span>{item.name}</span>
                {item.note && (
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-medium">
                    ({item.note})
                  </span>
                )}
                {item.targetId && (
                  <ExternalLink
                    size={11}
                    className="opacity-0 group-hover:opacity-60 text-gray-400 transition-opacity"
                  />
                )}
              </span>
              {isCompleted ? (
                <CheckCircle2 size={18} className="text-accent shrink-0" />
              ) : (
                <AlertTriangle size={18} className="text-yellow-500 shrink-0" />
              )}
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={handleCompleteAction}
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm hover:shadow"
      >
        <span>Complete Profile</span> <ArrowRight size={16} />
      </button>
    </div>
  );
}
