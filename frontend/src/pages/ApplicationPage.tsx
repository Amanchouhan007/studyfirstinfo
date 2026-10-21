import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  AlertCircle 
} from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ApplicationStatusBanner from '../components/dashboard/application/ApplicationStatusBanner';
import ApplicationJourneyTimeline from '../components/dashboard/application/ApplicationJourneyTimeline';
import UniversityMatches from '../components/dashboard/application/UniversityMatches';
import CounselorNotes from '../components/dashboard/application/CounselorNotes';
import SelfApplicationForm from '../components/dashboard/application/SelfApplicationForm';
import { applicationService, type Application } from '../services/api/applications';

export default function ApplicationPage() {
  const [activeTab, setActiveTab] = useState<'self' | 'agency'>('self');
  const [applications, setApplications] = useState<Application[]>([]);

  const loadApplications = async () => {
    try {
      const data = await applicationService.getMyApplications();
      if (Array.isArray(data)) {
        setApplications(data);
      }
    } catch (err) {
      console.warn('Failed to fetch applications:', err);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const latestApp = applications.length > 0 ? applications[0] : null;

  return (
    <DashboardLayout>
      {/* Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">University Applications</h1>
          <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
            <span>&gt;</span>
            <span className="text-primary font-semibold">My Applications</span>
          </div>
        </div>

        {/* Tab Toggle: Self-Application (Free) vs Agency-Assisted */}
        <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 self-start sm:self-auto border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('self')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'self'
                ? 'bg-accent text-white shadow-xs'
                : 'text-slate-600 hover:text-primary'
            }`}
          >
            <Sparkles size={14} />
            Self-Application (Free)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('agency')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'agency'
                ? 'bg-accent text-white shadow-xs'
                : 'text-slate-600 hover:text-primary'
            }`}
          >
            <ShieldCheck size={14} />
            Agency-Assisted
          </button>
        </div>
      </div>

      {/* Real Submitted Applications Section (when student has logged applications) */}
      {applications.length > 0 && (
        <div className="mb-8 bg-white rounded-2xl border border-emerald-200 shadow-xs p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
              <h3 className="font-bold text-primary text-base">Your Active Applications ({applications.length})</h3>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Live Database Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((app) => (
              <div 
                key={app.id} 
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary bg-white px-2 py-0.5 rounded border border-slate-200">
                      #{app.trackingId}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {app.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm pt-1">{app.university}</h4>
                  <p className="text-xs text-slate-600">{app.program}</p>
                  <p className="text-xs text-slate-500 font-medium">{app.country} &bull; {app.track === 'SELF_APPLY' ? 'Self-Apply (Free)' : app.track}</p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-accent" />
                    {new Date(app.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="font-bold text-emerald-700">Fee: {app.fee} BDT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 1: Self-Application Form */}
      {activeTab === 'self' && (
        <div className="space-y-8">
          <SelfApplicationForm onSuccess={() => loadApplications()} />
        </div>
      )}

      {/* Tab 2: Agency-Assisted View */}
      {activeTab === 'agency' && (
        <div className="space-y-6">
          {applications.length === 0 && (
            <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-4 text-xs flex items-center gap-3">
              <AlertCircle size={18} className="text-amber-600 shrink-0" />
              <span>
                <strong>Example Agency View:</strong> You do not currently have an active agency-assisted contract. The roadmap below demonstrates how our counselors manage end-to-end applications.
              </span>
            </div>
          )}

          {/* Application Status Banner */}
          <ApplicationStatusBanner 
            application={latestApp} 
            isExample={applications.length === 0} 
          />

          {/* Full Application Journey */}
          <ApplicationJourneyTimeline />

          {/* Two Columns: University Matches & Counselor Notes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            <div>
              <UniversityMatches />
            </div>
            <div>
              <CounselorNotes />
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
