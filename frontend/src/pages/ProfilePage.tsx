import { Link } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ProfileHeader from '../components/dashboard/profile/ProfileHeader';
import PersonalInfoCard from '../components/dashboard/profile/PersonalInfoCard';
import AcademicInfoCard from '../components/dashboard/profile/AcademicInfoCard';
import EnglishScoresCard from '../components/dashboard/profile/EnglishScoresCard';
import StudyPreferencesCard from '../components/dashboard/profile/StudyPreferencesCard';
import ProfileCompletionCard from '../components/dashboard/profile/ProfileCompletionCard';
import ProfileScholarshipCard from '../components/dashboard/profile/ProfileScholarshipCard';
import ChangePasswordCard from '../components/dashboard/profile/ChangePasswordCard';

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary mb-1">Profile &amp; Settings</h1>
        <div className="text-xs font-medium text-gray-500">
          <Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-primary font-semibold">Profile &amp; Settings</span>
        </div>
      </div>

      <ProfileHeader />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column (60%) */}
        <div className="lg:w-[60%] space-y-6">
          <PersonalInfoCard />
          <AcademicInfoCard />
          <EnglishScoresCard />
          <ChangePasswordCard />
        </div>

        {/* Right Column (40%) */}
        <div className="lg:w-[40%] flex flex-col gap-6">
          <StudyPreferencesCard />
          <ProfileCompletionCard />
          <ProfileScholarshipCard />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8">
        <button className="w-full bg-accent hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/30 transition-all hover:-translate-y-0.5 text-lg">
          SAVE CHANGES
        </button>
      </div>
    </DashboardLayout>
  );
}
