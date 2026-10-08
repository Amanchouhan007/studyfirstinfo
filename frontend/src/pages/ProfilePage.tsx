import { useState, useEffect } from 'react';
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
import { studentService } from '../services/api/student';

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>({
    studyLevel: '',
    academicScore: '',
    englishTestType: '',
    englishScore: '',
    budget: '',
    preferredCountry: ''
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    studentService.getProfile().then(setProfile).catch(() => {});
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await studentService.updateProfile(profile);
      alert('Profile saved successfully!');
    } catch (e) {
      alert('Failed to save profile');
    } finally {
      setIsSaving(false);
    }
  };

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
          <AcademicInfoCard profile={profile} />
          <EnglishScoresCard profile={profile} />
          <ChangePasswordCard />
        </div>

        {/* Right Column (40%) */}
        <div className="lg:w-[40%] flex flex-col gap-6">
          <StudyPreferencesCard profile={profile} />
          <ProfileCompletionCard />
          <ProfileScholarshipCard />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8">
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="w-full bg-accent hover:bg-green-700 disabled:bg-green-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/30 transition-all hover:-translate-y-0.5 text-lg"
        >
          {isSaving ? 'SAVING...' : 'SAVE CHANGES'}
        </button>
      </div>
    </DashboardLayout>
  );
}
