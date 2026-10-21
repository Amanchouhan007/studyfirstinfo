import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { 
  Sparkles, 
  GraduationCap, 
  ChevronRight,
  Info,
  Check,
  X,
  HelpCircle,
  Filter
} from 'lucide-react';
import { pathways, getPathwayById, type RouteCard } from '../data/pathwaysData';
import { fetchCourses } from '../services/api/catalog';

// Approximate exchange rates to be updated
const EUR_TO_BDT_RATE = 130; // 1 EUR = 130 BDT (approximate rate to be updated)
const USD_TO_EUR_RATE = 0.92; // 1 USD = 0.92 EUR (approximate rate to be updated)

interface MatchCheck {
  s: 'ok' | 'no' | 'nv' | 'info';
  t: string;
  src: 'rule' | 'input' | 'assume';
}

interface ProgramItem {
  id: number;
  uni: string;
  name: string;
  level: 'Bachelor' | 'Master';
  dur: string;
  fee: number;
  biz: 'yes' | 'unclear';
  country: string;
  city: string;
  alwaysVerify?: boolean;
}

const SAMPLE_PROGRAMS: ProgramItem[] = [
  {
    id: 1,
    uni: 'Budapest Metropolitan University',
    name: 'BSc Business Administration and Management',
    level: 'Bachelor',
    dur: '3.5 yrs',
    fee: 7000,
    biz: 'yes',
    country: 'Hungary',
    city: 'Budapest'
  },
  {
    id: 2,
    uni: 'Budapest Metropolitan University',
    name: 'BSc Commerce and Marketing',
    level: 'Bachelor',
    dur: '3.5 yrs',
    fee: 7000,
    biz: 'unclear',
    country: 'Hungary',
    city: 'Budapest'
  },
  {
    id: 3,
    uni: 'Budapest Metropolitan University',
    name: 'BA Communication and Media Studies',
    level: 'Bachelor',
    dur: '3 yrs',
    fee: 7800,
    biz: 'unclear',
    alwaysVerify: true,
    country: 'Hungary',
    city: 'Budapest'
  },
  {
    id: 4,
    uni: 'Budapest Metropolitan University',
    name: 'Master of Business Administration (MBA)',
    level: 'Master',
    dur: '2 yrs',
    fee: 8200,
    biz: 'yes',
    country: 'Hungary',
    city: 'Budapest'
  },
  {
    id: 5,
    uni: 'Budapest Metropolitan University',
    name: 'MSc Marketing & Business Development',
    level: 'Master',
    dur: '2 yrs',
    fee: 7200,
    biz: 'yes',
    country: 'Hungary',
    city: 'Budapest'
  },
  {
    id: 6,
    uni: 'IU International University of Applied Sciences',
    name: 'BSc Computer Science & Software Engineering',
    level: 'Bachelor',
    dur: '3 yrs',
    fee: 8400,
    biz: 'unclear',
    country: 'Germany',
    city: 'Berlin'
  },
  {
    id: 7,
    uni: 'Universiti Sultan Zainal Abidin (UniSZA)',
    name: 'Bachelor of Information Technology (Informatics)',
    level: 'Bachelor',
    dur: '3.5 yrs',
    fee: 3800,
    biz: 'unclear',
    country: 'Malaysia',
    city: 'Kuala Terengganu'
  }
];

export default function PathwayPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Mode switcher: 'matching' | 'pathways' synchronized with URL query parameter
  const viewParam = searchParams.get('view');
  const initialMode = viewParam === 'pathway' ? 'pathways' : 'matching';
  const [activeTab, setActiveTab] = useState<'matching' | 'pathways'>(initialMode);

  useEffect(() => {
    if (viewParam === 'pathway') {
      setActiveTab('pathways');
    } else if (viewParam === 'matching') {
      setActiveTab('matching');
    }
  }, [viewParam]);

  const handleTabChange = (tab: 'matching' | 'pathways') => {
    setActiveTab(tab);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('view', tab === 'pathways' ? 'pathway' : 'matching');
    navigate(`/dashboard/programs?${nextParams.toString()}`);
  };

  // Pathways route data
  const pathwayId = id || searchParams.get('id') || searchParams.get('route') || 'schengen';
  const currentPathway: RouteCard = getPathwayById(pathwayId);

  // -------------------------------------------------------------
  // PROGRAM MATCHING STATE (study_first_program_matching.html)
  // -------------------------------------------------------------
  const [profile, setProfile] = useState({
    dest: '',
    level: '',
    field: '',
    qual: '',
    scale: '',
    grade: '',
    etest: '',
    escore: '',
    budget: '',
    cur: 'EUR'
  });

  // Saved programs in localStorage
  const [savedProgramIds, setSavedProgramIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem('sfi_saved_programs');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Programs list: tries database courses first, falls back to SAMPLE_PROGRAMS safely
  const [programs, setPrograms] = useState<ProgramItem[]>(SAMPLE_PROGRAMS);

  useEffect(() => {
    let isMounted = true;
    fetchCourses()
      .then((data: any) => {
        if (!isMounted) return;
        const list = Array.isArray(data) ? data : data?.courses;
        if (Array.isArray(list) && list.length > 0) {
          const coursesWithTuition = list.filter((c: any) => c.tuitionFee && c.tuitionFee > 0);
          if (coursesWithTuition.length > 0) {
            const mapped: ProgramItem[] = coursesWithTuition.map((c: any, idx: number) => ({
              id: idx + 100,
              uni: c.university?.name || 'Partner University',
              name: c.name,
              level: (c.degreeLevel && c.degreeLevel.toLowerCase().includes('master')) ? 'Master' : 'Bachelor',
              dur: c.degreeLevel?.toLowerCase().includes('master') ? '2 yrs' : '3.5 yrs',
              fee: Number(c.tuitionFee),
              biz: (c.name.toLowerCase().includes('business') || c.name.toLowerCase().includes('commerce')) ? 'yes' : 'unclear',
              country: c.university?.country?.name || 'Germany',
              city: c.university?.country?.name === 'Hungary' ? 'Budapest' : 'Berlin'
            }));
            setPrograms(mapped);
          }
        }
      })
      .catch(() => {
        // Fallback silently to SAMPLE_PROGRAMS
      });

    return () => { isMounted = false; };
  }, []);

  const toggleSaveProgram = (programId: number) => {
    setSavedProgramIds((prev) => {
      const next = prev.includes(programId) ? prev.filter((i) => i !== programId) : [...prev, programId];
      try {
        localStorage.setItem('sfi_saved_programs', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Modals
  const [howModalOpen, setHowModalOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [viewProgramItem, setViewProgramItem] = useState<ProgramItem | null>(null);

  // Filter controls
  const [filterQuery, setFilterQuery] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterTuition, setFilterTuition] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [sortBy, setSortBy] = useState<'rel' | 'tl' | 'th'>('rel');

  // Profile completion calculation
  const profileCompletionPct = useMemo(() => {
    const requiredKeys = ['dest', 'level', 'field', 'qual', 'scale', 'grade', 'etest', 'budget'];
    let filled = 0;
    requiredKeys.forEach((key) => {
      if ((profile as any)[key] && (profile as any)[key].trim() !== '') {
        filled++;
      }
    });
    if (profile.etest === 'IELTS' && profile.escore.trim()) {
      filled++;
    }
    const total = profile.etest === 'IELTS' ? requiredKeys.length + 1 : requiredKeys.length;
    return Math.min(100, Math.round((filled / total) * 100));
  }, [profile]);

  // Matching evaluation logic (from reference HTML)
  const evaluateProgram = (p: ProgramItem) => {
    const checks: MatchCheck[] = [];
    const g = parseFloat(profile.grade);
    const hasGrade = !isNaN(g);
    const sc = profile.scale;

    // Study Level
    if (profile.level) {
      if (profile.level !== p.level) {
        checks.push({ s: 'no', src: 'input', t: `This is a ${p.level} program; you selected ${profile.level}.` });
      } else {
        checks.push({ s: 'info', src: 'input', t: `Study level matches your selection (${p.level}).` });
      }
    }

    // Destination
    if (profile.dest) {
      if (profile.dest.toLowerCase() !== p.country.toLowerCase()) {
        checks.push({ s: 'info', src: 'input', t: `This program is in ${p.country}; you selected ${profile.dest}.` });
      } else {
        checks.push({ s: 'info', src: 'input', t: `Destination matches your selection (${p.country}).` });
      }
    }

    // Field of interest
    if (profile.field && p.name.toLowerCase().includes(profile.field.toLowerCase())) {
      checks.push({ s: 'info', src: 'input', t: `Program name matches your field "${profile.field}". This is only a note.` });
    }

    // Academic Qualification / Grade Rules
    if (profile.level && profile.level !== p.level) {
      checks.push({ s: 'nv', src: 'assume', t: 'Academic criteria were not checked because the program level differs from your selection.' });
    } else if (!hasGrade || !sc || !profile.qual) {
      checks.push({ s: 'nv', src: 'input', t: 'Qualification, grading scale or grade is missing, so academic criteria cannot be checked.' });
    } else if (p.level === 'Bachelor') {
      if (sc !== 'pct') {
        checks.push({ s: 'nv', src: 'rule', t: 'Supplied bachelor rules use percentages. Your scale is different and is not converted.' });
      } else if (g < 0 || g > 100) {
        checks.push({ s: 'nv', src: 'input', t: 'Percentage must be between 0 and 100.' });
      } else if (g < 50) {
        checks.push({ s: 'no', src: 'rule', t: 'Below 50%. The supplied bachelor rules start at 50%.' });
        checks.push({ s: 'info', src: 'assume', t: 'Assumption: results under 50% are treated as not meeting the supplied criteria.' });
      } else if (g === 60) {
        checks.push({ s: 'nv', src: 'rule', t: 'Exactly 60% sits in both supplied ranges (50–60% Foundation and 60–69% Math test). Verify which applies.' });
      } else if (g < 60) {
        checks.push({ s: 'nv', src: 'rule', t: '50–60%: the supplied rule points to the Foundation program, not direct entry.' });
      } else if (g < 70) {
        if (p.alwaysVerify) {
          checks.push({ s: 'nv', src: 'rule', t: '60–69%: the Math-test rule is for Business. This program requirement needs verification.' });
        } else if (p.biz === 'yes') {
          checks.push({ s: 'nv', src: 'rule', t: '60–69%: a Math test is mandatory for Business (supplied rule). Your Math test result is unknown.' });
        } else {
          checks.push({ s: 'nv', src: 'assume', t: '60–69%: Math test applies to Business. This program Business classification is unclear.' });
        }
      } else {
        if (p.alwaysVerify) {
          checks.push({ s: 'nv', src: 'assume', t: '70%+ is direct entry without a Math test under the supplied rule, but this program specific requirements need verification.' });
        } else {
          checks.push({ s: 'ok', src: 'rule', t: '70% or above: direct entry without the Math test (supplied rule).' });
        }
      }
    } else {
      // Master
      if (profile.qual !== "Bachelor's degree") {
        checks.push({ s: 'nv', src: 'rule', t: 'Supplied master rules refer to a bachelor degree. Your qualification is different.' });
      } else if (sc !== 'gpa4') {
        checks.push({ s: 'nv', src: 'rule', t: 'Supplied master rule uses CGPA out of 4.0. Your scale is different and is not converted.' });
      } else if (g < 0 || g > 4) {
        checks.push({ s: 'nv', src: 'input', t: 'GPA must be between 0 and 4.0.' });
      } else if (g >= 2.5) {
        checks.push({ s: 'ok', src: 'rule', t: `CGPA ${g}/4.0 is at or above the supplied 2.5/4.0 minimum.` });
      } else {
        checks.push({ s: 'no', src: 'rule', t: `CGPA ${g}/4.0 is below the supplied 2.5/4.0 minimum.` });
      }
    }

    // English Language Requirements
    const need = p.level === 'Bachelor' ? 5.5 : 6.0;
    if (!profile.level || profile.level === p.level) {
      const et = profile.etest;
      if (!et) {
        checks.push({ s: 'nv', src: 'input', t: `English test not provided. Supplied rule: MOI or IELTS ${need.toFixed(1)}.` });
      } else if (et === 'MOI') {
        checks.push({ s: 'ok', src: 'rule', t: 'MOI is accepted (supplied rule). The university may still need to confirm your MOI letter.' });
      } else if (et === 'IELTS') {
        const sc2 = parseFloat(profile.escore);
        if (isNaN(sc2)) {
          checks.push({ s: 'nv', src: 'input', t: `IELTS score not entered. Supplied rule: ${need.toFixed(1)}.` });
        } else if (sc2 >= need) {
          checks.push({ s: 'ok', src: 'rule', t: `IELTS ${sc2.toFixed(1)} meets the supplied minimum of ${need.toFixed(1)}.` });
        } else {
          checks.push({ s: 'no', src: 'rule', t: `IELTS ${sc2.toFixed(1)} is below the supplied minimum of ${need.toFixed(1)}.` });
        }
      } else {
        checks.push({ s: 'nv', src: 'rule', t: 'Supplied rule accepts only MOI or IELTS. Other tests/status are not converted.' });
      }
    }

    // Budget Comparison
    if (profile.budget && profile.cur) {
      const rawBudget = parseFloat(profile.budget);
      let budgetInEur: number | null = null;

      if (profile.cur === 'EUR') {
        budgetInEur = rawBudget;
      } else if (profile.cur === 'BDT') {
        budgetInEur = rawBudget / EUR_TO_BDT_RATE;
      } else if (profile.cur === 'USD') {
        budgetInEur = rawBudget * USD_TO_EUR_RATE;
      }

      if (budgetInEur === null || isNaN(budgetInEur)) {
        checks.push({ s: 'nv', src: 'input', t: `Your budget is in ${profile.cur}. Tuition is in € and no currency conversion is used.` });
      } else if (budgetInEur >= p.fee) {
        checks.push({
          s: 'info',
          src: 'input',
          t: profile.cur === 'EUR'
            ? `Tuition €${p.fee.toLocaleString()}/yr is within your stated € budget.`
            : `Tuition €${p.fee.toLocaleString()}/yr is within your stated ${profile.cur} budget (approx. €${Math.round(budgetInEur).toLocaleString()}).`
        });
      } else {
        checks.push({
          s: 'info',
          src: 'input',
          t: profile.cur === 'EUR'
            ? `Tuition €${p.fee.toLocaleString()}/yr is above your stated € budget. Shown as a note only.`
            : `Tuition €${p.fee.toLocaleString()}/yr is above your stated ${profile.cur} budget (approx. €${Math.round(budgetInEur).toLocaleString()}). Shown as a note only.`
        });
      }
    }

    checks.push({ s: 'nv', src: 'assume', t: 'Intake: To be confirmed. Not used in matching.' });
    if (p.alwaysVerify) {
      checks.push({ s: 'nv', src: 'rule', t: 'Communication and Media Studies requirements are not clearly covered by the supplied rules.' });
    }
    if (p.biz === 'unclear' && !p.alwaysVerify) {
      checks.push({ s: 'nv', src: 'assume', t: 'Whether this program counts as Business (for the Math-test rule) is unclear.' });
    }

    // Overall Status
    const core = checks.filter((x) => !x.t.startsWith('Intake:'));
    let status: 'ok' | 'no' | 'nv' = 'ok';
    if (core.some((x) => x.s === 'no')) status = 'no';
    else if (core.some((x) => x.s === 'nv')) status = 'nv';
    if (p.alwaysVerify && status === 'ok') status = 'nv';
    if (!profile.grade && !profile.level) status = 'nv';

    return { status, checks };
  };

  // Filtered and sorted programs
  const evaluatedPrograms = useMemo(() => {
    const q = filterQuery.toLowerCase().trim();
    return programs.filter((p) => {
      if (q && !(p.name + ' ' + p.uni + ' ' + p.country).toLowerCase().includes(q)) return false;
      if (filterCountry && p.country.toLowerCase() !== filterCountry.toLowerCase()) return false;
      if (filterTuition && p.fee > parseFloat(filterTuition)) return false;
      if (filterLevel && p.level !== filterLevel) return false;
      return true;
    }).map((p) => ({
      program: p,
      evaluation: evaluateProgram(p)
    })).sort((a, b) => {
      if (sortBy === 'rel') {
        const orderMap = { ok: 0, nv: 1, no: 2 };
        return orderMap[a.evaluation.status] - orderMap[b.evaluation.status];
      }
      if (sortBy === 'tl') return a.program.fee - b.program.fee;
      if (sortBy === 'th') return b.program.fee - a.program.fee;
      return 0;
    });
  }, [filterQuery, filterCountry, filterTuition, filterLevel, sortBy, profile]);

  const resetFilters = () => {
    setFilterQuery('');
    setFilterCountry('');
    setFilterTuition('');
    setFilterLevel('');
    setSortBy('rel');
  };

  const getStatusBadge = (status: 'ok' | 'no' | 'nv') => {
    switch (status) {
      case 'ok':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Check size={13} /> Meets supplied criteria
          </span>
        );
      case 'no':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
            <X size={13} /> Does not meet supplied criteria
          </span>
        );
      case 'nv':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <HelpCircle size={13} /> Needs verification
          </span>
        );
    }
  };

  const getSourceBadge = (src: 'rule' | 'input' | 'assume') => {
    switch (src) {
      case 'rule':
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0">Supplied rule</span>;
      case 'input':
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 shrink-0">Your input</span>;
      case 'assume':
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 shrink-0">Assumption</span>;
    }
  };

  const getCheckIcon = (s: 'ok' | 'no' | 'nv' | 'info') => {
    switch (s) {
      case 'ok':
        return <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />;
      case 'no':
        return <X size={14} className="text-rose-600 shrink-0 mt-0.5" />;
      case 'nv':
        return <span className="text-xs font-bold text-amber-600 shrink-0">?</span>;
      case 'info':
        return <span className="text-xs text-slate-400 shrink-0">•</span>;
    }
  };

  const allPathwayList = Object.values(pathways);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        
        {/* ======================================================== */}
        {/* TOP NAVIGATION & SUB-TABS SWITCHER                       */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link to="/dashboard" className="hover:text-emerald-700 transition-colors">Dashboard</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <Link to="/dashboard/programs" className="hover:text-emerald-700 transition-colors">Search Programs</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-emerald-800 font-semibold">
              {activeTab === 'matching' ? 'Program Matching' : currentPathway.title}
            </span>
          </div>

          {/* Sub-Tabs: Program Matching (New) vs Country Pathways */}
          <div className="inline-flex max-w-full overflow-x-auto p-1 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => handleTabChange('matching')}
              className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeTab === 'matching'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles size={13} className="text-emerald-600" />
              <span>Program Matching</span>
              <span className="bg-rose-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">New</span>
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('pathways')}
              className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeTab === 'pathways'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap size={13} />
              <span>Country Roadmaps</span>
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: PROGRAM MATCHING EXPERIENCE (SCREENSHOT 1 & HTML REF) */}
        {/* ============================================================ */}
        {activeTab === 'matching' && (
          <div className="space-y-6">
            {/* Top Amber Demo Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start sm:items-center gap-3 shadow-xs">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <strong className="font-bold">DEMO CONTENT.</strong> The programs, tuition and entry rules on this page are sample data supplied for this mockup. They are not independently verified university requirements. Results do not guarantee eligibility or admission.
              </div>
            </div>

            {/* Header: Title + Saved Programs Box */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Find Your Best-Fit Programs
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Discover programs that fit your academic profile, preferences, and budget.
                </p>
                <button
                  type="button"
                  onClick={() => setHowModalOpen(true)}
                  className="text-xs font-semibold text-emerald-700 hover:underline mt-2 inline-flex items-center gap-1 cursor-pointer"
                >
                  <HelpCircle size={13} />
                  <span>How matching works</span>
                </button>
              </div>

              {/* Saved Box */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 shadow-xs self-start shrink-0">
                <div>
                  <div className="text-2xl font-black text-slate-900">{savedProgramIds.length}</div>
                  <div className="text-[11px] text-slate-500 font-medium">saved programs</div>
                </div>
                <button
                  type="button"
                  onClick={() => setCompareModalOpen(true)}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Compare saved
                </button>
              </div>
            </div>

            {/* Two Column Layout: Profile Panel (Left) & Controls/Results (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Your Profile Panel (4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-slate-900">Your profile</h2>
                
                {/* Progress bar */}
                <div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
                      style={{ width: `${profileCompletionPct}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                    <strong className="text-slate-800">{profileCompletionPct}% complete</strong>. A complete profile is not the same as a strong academic fit. It only means every field is filled in.
                  </p>
                </div>

                {/* Preferred Destination */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred study destination
                  </label>
                  <select
                    value={profile.dest}
                    onChange={(e) => setProfile({ ...profile, dest: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  >
                    <option value="">Select country</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Germany">Germany</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Study Level */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Study level
                  </label>
                  <select
                    value={profile.level}
                    onChange={(e) => setProfile({ ...profile, level: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  >
                    <option value="">Select level</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                  </select>
                </div>

                {/* Field of Interest */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Subject or field of interest
                  </label>
                  <input
                    type="text"
                    value={profile.field}
                    onChange={(e) => setProfile({ ...profile, field: e.target.value })}
                    placeholder="e.g. Business, Marketing, Media"
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Only used for a &ldquo;matches your field&rdquo; note. It does not affect the criteria checks.
                  </p>
                </div>

                {/* Academic Qualification */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Academic qualification
                  </label>
                  <select
                    value={profile.qual}
                    onChange={(e) => setProfile({ ...profile, qual: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  >
                    <option value="">Select qualification</option>
                    <option value="High school certificate">High school certificate</option>
                    <option value="Bachelor's degree">Bachelor&apos;s degree</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Grading Scale */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Grading scale
                  </label>
                  <select
                    value={profile.scale}
                    onChange={(e) => setProfile({ ...profile, scale: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  >
                    <option value="">Select scale</option>
                    <option value="pct">Percentage (0–100%)</option>
                    <option value="gpa4">GPA out of 4.0</option>
                    <option value="other">Other scale</option>
                  </select>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Your grade is kept on this original scale. It is never converted.
                  </p>
                </div>

                {/* Grade / Result */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Grade / result
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={profile.grade}
                    onChange={(e) => setProfile({ ...profile, grade: e.target.value })}
                    placeholder={
                      profile.scale === 'pct' 
                        ? 'e.g. 65 (0–100)' 
                        : profile.scale === 'gpa4' 
                        ? 'e.g. 3.2 (0–4.0)' 
                        : 'Choose a scale first'
                    }
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Enter your result exactly as on your transcript.
                  </p>
                </div>

                {/* English Test & Score in 2 columns */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">English test</label>
                    <select
                      value={profile.etest}
                      onChange={(e) => setProfile({ ...profile, etest: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                    >
                      <option value="">Select</option>
                      <option value="IELTS">IELTS</option>
                      <option value="MOI">MOI</option>
                      <option value="Other test">Other test</option>
                      <option value="None yet">None yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Score</label>
                    <input
                      type="number"
                      step="0.5"
                      disabled={profile.etest === 'MOI' || profile.etest === 'None yet'}
                      value={profile.etest === 'MOI' || profile.etest === 'None yet' ? '' : profile.escore}
                      onChange={(e) => setProfile({ ...profile, escore: e.target.value })}
                      placeholder={profile.etest === 'IELTS' ? 'e.g. 6.0' : 'Score'}
                      className="w-full text-xs p-2.5 bg-white disabled:bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">
                  MOI = medium of instruction letter (no score needed).
                </p>

                {/* Tuition Budget & Currency in 2 columns */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Annual budget</label>
                    <input
                      type="number"
                      value={profile.budget}
                      onChange={(e) => setProfile({ ...profile, budget: e.target.value })}
                      placeholder="e.g. 8000"
                      className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Currency</label>
                    <select
                      value={profile.cur}
                      onChange={(e) => setProfile({ ...profile, cur: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                    >
                      <option value="EUR">EUR (€)</option>
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="BDT">BDT (৳)</option>
                    </select>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">
                  Budgets in BDT and USD are automatically converted to EUR for tuition comparison.
                </p>

                {/* Preferred Intake (Disabled) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred intake</label>
                  <select
                    disabled
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-400"
                  >
                    <option>To be confirmed</option>
                  </select>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Intake dates are not supplied. Intake is not used in matching.
                  </p>
                </div>

                {/* Button: Find Matching Programs */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('programs-results-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-[0.99] cursor-pointer"
                >
                  Find Matching Programs
                </button>
              </div>

              {/* Right Column: Controls & Result Cards (8 cols) */}
              <div id="programs-results-section" className="lg:col-span-8 space-y-4">
                
                {/* Search & Filter Bar */}
                <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                    {/* Search */}
                    <div className="md:col-span-1">
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Search</label>
                      <input
                        type="text"
                        value={filterQuery}
                        onChange={(e) => setFilterQuery(e.target.value)}
                        placeholder="Program or uni"
                        className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Country</label>
                      <select
                        value={filterCountry}
                        onChange={(e) => setFilterCountry(e.target.value)}
                        className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      >
                        <option value="">All</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Germany">Germany</option>
                        <option value="Malaysia">Malaysia</option>
                      </select>
                    </div>

                    {/* Tuition */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Tuition (€/yr)</label>
                      <select
                        value={filterTuition}
                        onChange={(e) => setFilterTuition(e.target.value)}
                        className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      >
                        <option value="">Any</option>
                        <option value="7000">Up to €7,000</option>
                        <option value="7500">Up to €7,500</option>
                        <option value="8000">Up to €8,000</option>
                        <option value="9000">Up to €9,000</option>
                      </select>
                    </div>

                    {/* Study Level */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Study level</label>
                      <select
                        value={filterLevel}
                        onChange={(e) => setFilterLevel(e.target.value)}
                        className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      >
                        <option value="">All</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Master">Master</option>
                      </select>
                    </div>

                    {/* Sort By */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Sort by</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      >
                        <option value="rel">Relevance</option>
                        <option value="tl">Tuition: low to high</option>
                        <option value="th">Tuition: high to low</option>
                      </select>
                    </div>
                  </div>

                  {/* Results Count & Reset */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                    <span>
                      <strong>{evaluatedPrograms.length}</strong> of {programs.length} programs available
                    </span>
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="text-emerald-700 hover:underline font-semibold cursor-pointer"
                    >
                      Reset filters
                    </button>
                  </div>
                </div>

                {/* Results List */}
                {evaluatedPrograms.length === 0 ? (
                  <div className="bg-white rounded-3xl border border-slate-200/90 p-8 text-center text-slate-400 space-y-2">
                    <Filter className="w-8 h-8 mx-auto text-slate-300" />
                    <p className="text-sm font-semibold text-slate-600">No programs match these filters.</p>
                    <button
                      onClick={resetFilters}
                      className="text-xs text-emerald-700 font-bold hover:underline"
                    >
                      Reset filters to see all available programs
                    </button>
                  </div>
                ) : (
                  evaluatedPrograms.map(({ program, evaluation }) => {
                    const isSaved = savedProgramIds.includes(program.id);
                    return (
                      <div
                        key={program.id}
                        className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all space-y-3.5"
                      >
                        {/* Status Badge */}
                        <div>
                          {getStatusBadge(evaluation.status)}
                        </div>

                        {/* Program Name & University */}
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {program.name}
                          </h3>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {program.uni} &bull; {program.city}, {program.country} &bull; <i className="text-slate-400">Demo content</i>
                          </div>
                        </div>

                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-600 bg-slate-50 px-3.5 py-2.5 rounded-2xl border border-slate-100">
                          <span><strong>Level:</strong> {program.level}</span>
                          <span><strong>Duration:</strong> {program.dur}</span>
                          <span><strong>Tuition:</strong> €{program.fee.toLocaleString()}/yr</span>
                          <span><strong>Intake:</strong> To be confirmed</span>
                        </div>

                        {/* Why this result section */}
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                            Why this result
                          </h4>
                          <ul className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden bg-white text-xs">
                            {evaluation.checks.map((chk, i) => (
                              <li key={i} className="p-2.5 flex items-start gap-2.5 min-w-0">
                                {getCheckIcon(chk.s)}
                                <span className="flex-1 text-slate-700 leading-snug">{chk.t}</span>
                                {getSourceBadge(chk.src)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Help note */}
                        <p className="text-[11px] text-slate-400 italic">
                          Not a guarantee of eligibility or admission.
                        </p>

                        {/* Actions */}
                        <div className="flex items-center gap-2.5 pt-1">
                          <button
                            type="button"
                            onClick={() => setViewProgramItem(program)}
                            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                          >
                            View Program
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleSaveProgram(program.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                              isSaved
                                ? 'bg-rose-50 text-rose-700 border-rose-200 shadow-xs'
                                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                            }`}
                          >
                            {isSaved ? '✓ Saved' : 'Save Program'}
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}

                {/* Bottom CTA Card */}
                <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-3xl border border-emerald-200/80 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                  <div>
                    <h3 className="text-base font-bold text-emerald-950">Need help choosing?</h3>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Talk to a counsellor about your shortlist, application fee waivers, and next steps.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/appointments')}
                    className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer shrink-0"
                  >
                    Book Counselling
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: EXPLORE STUDY PATHWAYS (EXISTING ROADMAP SECTION)     */}
        {/* ============================================================ */}
        {activeTab === 'pathways' && (
          <div className="space-y-6">
            {/* Quick switcher between pathway countries */}
            <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Switch Route:</span>
                {allPathwayList.map((p) => {
                  const isActive = p.id === currentPathway.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => navigate(`/dashboard/programs?route=${p.id}&view=pathway`)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-emerald-800 text-white shadow-xs'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <span>{p.badge}</span>
                      <span>{p.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Pathway Hero */}
            <div className="bg-gradient-to-br from-[#061810] to-[#040f0a] text-white p-6 sm:p-8 rounded-3xl border border-emerald-900 shadow-sm relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <Sparkles size={12} />
                  <span>{currentPathway.badge} Dedicated Route</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold">{currentPathway.title}</h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentPathway.details.generalOverview}</p>
              </div>
            </div>

            {/* Key Pathway Highlights */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Key Route Highlights &amp; Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentPathway.points.map((pt, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      {pt.prefix || `Highlight ${idx + 1}`}
                    </span>
                    <p className="text-xs text-slate-800 font-medium leading-relaxed">{pt.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* ============================================================ */}
      {/* HOW MATCHING WORKS MODAL                                      */}
      {/* ============================================================ */}
      {howModalOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setHowModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setHowModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full bg-slate-100 cursor-pointer"
            >
              <X size={18} />
            </button>

            <h2 className="text-xl font-bold text-slate-900">How matching works</h2>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              Your profile is compared with the entry rules supplied for this demo. Each program gets one of three labels:
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                <strong className="text-emerald-900 font-bold block mb-0.5">Meets supplied criteria:</strong>
                <span className="text-emerald-800">Your inputs satisfy every supplied rule that was checked.</span>
              </div>
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
                <strong className="text-rose-900 font-bold block mb-0.5">Does not meet supplied criteria:</strong>
                <span className="text-rose-800">At least one supplied rule is not met.</span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
                <strong className="text-amber-900 font-bold block mb-0.5">Needs verification:</strong>
                <span className="text-amber-800">Something is missing, unclear, or cannot be checked without conversion.</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Every reason is tagged <strong>Supplied rule</strong>, <strong>Your input</strong>, or <strong>Assumption</strong>.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Grades stay on their original scale and tuition stays in €. Nothing is converted. A complete profile does not mean a strong academic fit. Results never guarantee eligibility or admission. All data is demo content.
            </p>

            <button
              type="button"
              onClick={() => setHowModalOpen(false)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* COMPARE SAVED PROGRAMS MODAL                                 */}
      {/* ============================================================ */}
      {compareModalOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setCompareModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setCompareModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full bg-slate-100 cursor-pointer"
            >
              <X size={18} />
            </button>

            <h2 className="text-xl font-bold text-slate-900">Compare saved programs</h2>

            {savedProgramIds.length < 2 ? (
              <div className="py-8 text-center text-slate-500 space-y-2">
                <p className="text-sm">Save at least two programs to compare them side-by-side.</p>
                <p className="text-xs text-slate-400">You currently have {savedProgramIds.length} saved program{savedProgramIds.length === 1 ? '' : 's'}.</p>
              </div>
            ) : (
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-3 font-bold text-slate-700 w-36">Criteria</th>
                      {programs.filter((p) => savedProgramIds.includes(p.id)).map((p) => (
                        <th key={p.id} className="p-3 font-bold text-slate-900 min-w-[200px]">
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">University</td>
                      {programs.filter((p) => savedProgramIds.includes(p.id)).map((p) => (
                        <td key={p.id} className="p-3 text-slate-800">{p.uni}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Location</td>
                      {programs.filter((p) => savedProgramIds.includes(p.id)).map((p) => (
                        <td key={p.id} className="p-3 text-slate-800">{p.city}, {p.country}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Level</td>
                      {programs.filter((p) => savedProgramIds.includes(p.id)).map((p) => (
                        <td key={p.id} className="p-3 text-slate-800">{p.level}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Duration</td>
                      {programs.filter((p) => savedProgramIds.includes(p.id)).map((p) => (
                        <td key={p.id} className="p-3 text-slate-800">{p.dur}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Tuition</td>
                      {programs.filter((p) => savedProgramIds.includes(p.id)).map((p) => (
                        <td key={p.id} className="p-3 text-slate-800 font-bold text-emerald-800">€{p.fee.toLocaleString()}/yr</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-500 bg-slate-50/50">Your Result</td>
                      {programs.filter((p) => savedProgramIds.includes(p.id)).map((p) => {
                        const r = evaluateProgram(p);
                        return (
                          <td key={p.id} className="p-3">
                            {getStatusBadge(r.status)}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <button
              type="button"
              onClick={() => setCompareModalOpen(false)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* VIEW PROGRAM DETAILS MODAL                                   */}
      {/* ============================================================ */}
      {viewProgramItem && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setViewProgramItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setViewProgramItem(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full bg-slate-100 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div>
              <h2 className="text-xl font-bold text-slate-900">{viewProgramItem.name}</h2>
              <p className="text-xs text-slate-500 mt-0.5">{viewProgramItem.uni} &bull; {viewProgramItem.city}, {viewProgramItem.country}</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-900">
              Demo content. Not verified by the university. No guarantee of eligibility or admission.
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span><strong>Level:</strong> {viewProgramItem.level}</span>
              <span><strong>Duration:</strong> {viewProgramItem.dur}</span>
              <span><strong>Tuition:</strong> €{viewProgramItem.fee.toLocaleString()}/yr</span>
              <span><strong>Intake:</strong> To be confirmed</span>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-800">Supplied entry rules</h4>
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                {viewProgramItem.level === 'Bachelor'
                  ? 'Bachelor (supplied): 50–60% Foundation program · 60–69% Math test mandatory for Business · 70%+ direct entry without Math test · MOI or IELTS 5.5 accepted.'
                  : 'Master (supplied): Bachelor CGPA 2.5+/4.0 · MOI or IELTS 6.0.'}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-800">
                Your current result: {getStatusBadge(evaluateProgram(viewProgramItem).status)}
              </h4>
              <ul className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden bg-white text-xs">
                {evaluateProgram(viewProgramItem).checks.map((chk, i) => (
                  <li key={i} className="p-2.5 flex items-start gap-2.5">
                    {getCheckIcon(chk.s)}
                    <span className="flex-1 text-slate-700 leading-snug">{chk.t}</span>
                    {getSourceBadge(chk.src)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={() => toggleSaveProgram(viewProgramItem.id)}
                className={`w-full py-2.5 rounded-xl font-bold text-xs border cursor-pointer ${
                  savedProgramIds.includes(viewProgramItem.id)
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {savedProgramIds.includes(viewProgramItem.id) ? '✓ Saved' : 'Save Program'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewProgramItem(null);
                  navigate('/appointments');
                }}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                Book Counselling
              </button>
            </div>
          </div>
        </div>
      )}

      </div>
    </DashboardLayout>
  );
}
