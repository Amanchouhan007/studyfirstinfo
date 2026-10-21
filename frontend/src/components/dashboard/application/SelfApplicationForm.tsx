import { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  FileCheck, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  AlertCircle, 
  ShieldCheck, 
  Info,
  Sparkles
} from 'lucide-react';
import { applicationService, type Application } from '../../../services/api/applications';

interface SelfApplicationFormProps {
  onSuccess?: (app: Application) => void;
}

const POPULAR_COUNTRIES = [
  'Germany',
  'Hungary',
  'United Kingdom',
  'United States',
  'Canada',
  'Australia',
  'Malaysia',
  'China',
  'Greece',
  'Cyprus',
  'Lithuania',
  'Other'
];

export default function SelfApplicationForm({ onSuccess }: SelfApplicationFormProps) {
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('Germany');
  const [customCountry, setCustomCountry] = useState('');
  const [university, setUniversity] = useState('');
  const [program, setProgram] = useState('');
  const [degreeLevel, setDegreeLevel] = useState("Master's");
  const [intake, setIntake] = useState('Fall 2026');

  // Documents checklist
  const [hasPassport, setHasPassport] = useState(false);
  const [hasTranscripts, setHasTranscripts] = useState(false);
  const [hasEnglish, setHasEnglish] = useState(false);
  const [hasSOP, setHasSOP] = useState(false);
  const [confirmedDocs, setConfirmedDocs] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedApplication, setSubmittedApplication] = useState<Application | null>(null);

  const finalCountry = country === 'Other' ? customCountry.trim() : country;

  const handleNextStep = () => {
    setErrorMessage(null);
    if (step === 1) {
      if (!finalCountry) {
        setErrorMessage('Please choose or enter a destination country.');
        return;
      }
      if (!university.trim()) {
        setErrorMessage('Please enter your target university name.');
        return;
      }
    } else if (step === 2) {
      if (!program.trim()) {
        setErrorMessage('Please enter your intended program of study.');
        return;
      }
    } else if (step === 3) {
      if (!confirmedDocs) {
        setErrorMessage('Please confirm that you have prepared the required documents.');
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setErrorMessage(null);
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      setIsSubmitting(true);
      const app = await applicationService.submitSelfApplication({
        country: finalCountry,
        university: university.trim(),
        program: `${degreeLevel} in ${program.trim()} (${intake})`,
        track: 'SELF_APPLY'
      });

      setSubmittedApplication(app);
      if (onSuccess) {
        onSuccess(app);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit application. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setUniversity('');
    setProgram('');
    setConfirmedDocs(false);
    setSubmittedApplication(null);
    setErrorMessage(null);
  };

  if (submittedApplication) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 shadow-sm text-center max-w-xl mx-auto space-y-5">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={36} />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Application Registered
          </span>
          <h2 className="text-2xl font-bold text-primary mt-2">Self-Application Submitted!</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Your free self-application has been logged into the Study First portal.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs text-gray-500 font-medium">Tracking ID:</span>
            <span className="font-mono font-bold text-primary text-sm bg-white px-2 py-0.5 rounded border border-slate-200">
              #{submittedApplication.trackingId}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Destination:</span>
            <span className="font-semibold text-gray-800">{submittedApplication.country}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">University:</span>
            <span className="font-semibold text-gray-800">{submittedApplication.university}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Program:</span>
            <span className="font-semibold text-gray-800">{submittedApplication.program}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Portal Service Fee:</span>
            <span className="font-bold text-emerald-700">0 BDT (Free)</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Status:</span>
            <span className="font-bold text-accent bg-emerald-50 px-2 py-0.5 rounded">
              {submittedApplication.status}
            </span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 text-left flex items-start gap-2">
          <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong>Reminder:</strong> Study First portal self-application is 100% free (0 BDT). University application fees (if charged directly by the university portal) are separate and paid by the student directly to the university.
          </span>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline pt-2 cursor-pointer"
        >
          Submit another self-application &rarr;
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Free Self-Application Track
            </span>
            <span className="text-xs font-bold text-accent bg-white px-2 py-0.5 rounded border border-accent/20">
              0 BDT
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mt-1.5">
            Student Direct Application
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Apply directly to international universities with zero agency commission or portal fees.
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center gap-1 self-start sm:self-auto bg-slate-50 p-1.5 rounded-xl border border-slate-200">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                step === s
                  ? 'bg-accent text-white shadow-xs'
                  : step > s
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-white text-gray-400 border border-gray-200'
              }`}
            >
              {step > s ? '✓' : s}
            </div>
          ))}
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs flex items-center gap-2">
          <AlertCircle size={15} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* STEP 1: Destination and University */}
      {step === 1 && (
        <div className="space-y-5 animate-in fade-in">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <Building2 size={18} className="text-accent" />
            <span>Step 1: Destination &amp; Target University</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-primary mb-1.5">
                Destination Country <span className="text-red-500">*</span>
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              >
                {POPULAR_COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {country === 'Other' && (
              <div>
                <label className="block text-xs font-bold text-primary mb-1.5">
                  Specify Country Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={customCountry}
                  onChange={(e) => setCustomCountry(e.target.value)}
                  placeholder="E.g., Sweden, France, Japan"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            )}

            <div className={country === 'Other' ? 'md:col-span-2' : ''}>
              <label className="block text-xs font-bold text-primary mb-1.5">
                University Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="E.g., Technical University of Munich, University of Debrecen"
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Program & Degree */}
      {step === 2 && (
        <div className="space-y-5 animate-in fade-in">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <GraduationCap size={18} className="text-accent" />
            <span>Step 2: Program of Study &amp; Intake</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-primary mb-1.5">Degree Level</label>
              <select
                value={degreeLevel}
                onChange={(e) => setDegreeLevel(e.target.value)}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              >
                <option value="Bachelor's">Bachelor's Degree</option>
                <option value="Master's">Master's Degree</option>
                <option value="PhD">Doctorate / PhD</option>
                <option value="Diploma / Foundation">Diploma / Foundation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-primary mb-1.5">
                Intended Intake
              </label>
              <select
                value={intake}
                onChange={(e) => setIntake(e.target.value)}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              >
                <option value="Fall 2026">Fall / September 2026</option>
                <option value="Spring 2027">Spring / January 2027</option>
                <option value="Fall 2027">Fall 2027</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-primary mb-1.5">
                Program Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                placeholder="E.g., Computer Science, Data Engineering, MBA"
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Document Checklist & Confirmation */}
      {step === 3 && (
        <div className="space-y-5 animate-in fade-in">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <FileCheck size={18} className="text-accent" />
            <span>Step 3: Document Readiness Checklist</span>
          </div>

          <p className="text-xs text-gray-600">
            For self-application, please verify that you have scanned copies of all required documents ready for direct portal submission:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={hasPassport}
                onChange={(e) => setHasPassport(e.target.checked)}
                className="w-4 h-4 text-accent rounded"
              />
              <span className="text-xs font-medium text-slate-700">Valid Passport (6+ months validity)</span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={hasTranscripts}
                onChange={(e) => setHasTranscripts(e.target.checked)}
                className="w-4 h-4 text-accent rounded"
              />
              <span className="text-xs font-medium text-slate-700">Academic Transcripts &amp; Certificates</span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={hasEnglish}
                onChange={(e) => setHasEnglish(e.target.checked)}
                className="w-4 h-4 text-accent rounded"
              />
              <span className="text-xs font-medium text-slate-700">English Proficiency (IELTS/Duolingo/MOI)</span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={hasSOP}
                onChange={(e) => setHasSOP(e.target.checked)}
                className="w-4 h-4 text-accent rounded"
              />
              <span className="text-xs font-medium text-slate-700">Statement of Purpose (SOP) &amp; CV</span>
            </label>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <label className="flex items-start gap-3 p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 cursor-pointer">
              <input
                type="checkbox"
                checked={confirmedDocs}
                onChange={(e) => setConfirmedDocs(e.target.checked)}
                className="w-4 h-4 text-accent rounded mt-0.5"
              />
              <span className="text-xs text-emerald-900 font-medium leading-relaxed">
                I confirm that I have prepared and checked all necessary academic and identity documents for my direct application.
              </span>
            </label>
          </div>
        </div>
      )}

      {/* STEP 4: Review & Submit */}
      {step === 4 && (
        <div className="space-y-5 animate-in fade-in">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <ShieldCheck size={18} className="text-accent" />
            <span>Step 4: Review &amp; Submit Application</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-500">Destination Country:</span>
                <p className="font-bold text-gray-900 mt-0.5">{finalCountry}</p>
              </div>
              <div>
                <span className="text-gray-500">Target University:</span>
                <p className="font-bold text-gray-900 mt-0.5">{university}</p>
              </div>
              <div>
                <span className="text-gray-500">Program &amp; Intake:</span>
                <p className="font-bold text-gray-900 mt-0.5">{degreeLevel} in {program} ({intake})</p>
              </div>
              <div>
                <span className="text-gray-500">Application Track:</span>
                <p className="font-bold text-emerald-700 mt-0.5">Self-Application (Free)</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-gray-600 font-medium">Study First Service Fee:</span>
              <span className="text-base font-bold text-emerald-700">0 BDT (100% Free)</span>
            </div>
          </div>

          {/* Mandatory Business Rule Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-2.5">
            <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Important Notice regarding University Fees:</p>
              <p className="leading-relaxed">
                Study First charges <strong>0 BDT</strong> for self-application logging and guidance. Any university application fee, evaluation fee, or uni-assist fee required by the institution or country portal is separate and paid directly by you to the university.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
        {step > 1 ? (
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={isSubmitting}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 cursor-pointer disabled:opacity-50"
          >
            <ArrowLeft size={14} /> Back
          </button>
        ) : (
          <div></div>
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={handleNextStep}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-accent hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            Continue <ArrowRight size={14} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-emerald-700 text-white text-sm font-bold transition-all shadow-sm disabled:opacity-50 cursor-pointer"
          >
            <Sparkles size={16} />
            {isSubmitting ? 'Submitting Application...' : 'Submit Self-Application (0 BDT)'}
          </button>
        )}
      </div>
    </div>
  );
}
