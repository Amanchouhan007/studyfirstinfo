import { Link } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ApplicationStatusBanner from '../components/dashboard/application/ApplicationStatusBanner';
import ApplicationJourneyTimeline from '../components/dashboard/application/ApplicationJourneyTimeline';
import UniversityMatches from '../components/dashboard/application/UniversityMatches';
import CounselorNotes from '../components/dashboard/application/CounselorNotes';

export default function ApplicationPage() {
  return (
    <DashboardLayout>
      {/* Header & Breadcrumbs */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">My Application</h1>
        <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
          <Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
          <span>&gt;</span>
          <span className="text-primary font-semibold">My Application</span>
        </div>
      </div>

      {/* Application Status Banner */}
      <ApplicationStatusBanner />

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
    </DashboardLayout>
  );
}
