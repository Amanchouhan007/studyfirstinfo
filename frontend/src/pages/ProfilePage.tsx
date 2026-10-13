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
  const [profile, setProfile] = useState<any>(() => {
    try {
      const stored = localStorage.getItem('sfi_student_profile');
      if (stored) return JSON.parse(stored);
    } catch {}
    return {
      fullName: 'Rahul Ahmed',
      name: 'Rahul Ahmed',
      email: 'rahul@gmail.com',
      phone: '+880 1XXXXXXXXX',
      nationality: 'Bangladeshi',
      dob: 'January 15, 2002',
      gender: 'Male',
      nationalId: 'XXXX-XXXX-XXXX',
      passportNumber: 'BX0000000',
      passportExpiry: 'Dec 2028',
      address: 'Dhaka, Bangladesh',
      studyLevel: 'Masters',
      academicScore: '3.85',
      englishTestType: 'IELTS',
      englishScore: '6.5',
      budget: 'Tuition Free / Full Scholarship',
      preferredCountry: 'Germany',
      cgpa: '3.85',
      undergraduate: {
        degree: 'Undergraduate: BSc',
        cgpa: '3.85',
        scale: '4.00',
        graduationYear: '2025'
      },
      hsc: {
        result: 'A+ (GPA 5.00)',
        board: 'Dhaka Board',
        year: '2021'
      },
      ssc: {
        result: 'A+ (GPA 5.00)',
        board: 'Dhaka Board',
        year: '2019'
      }
    };
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    studentService.getProfile()
      .then((res) => {
        if (res) {
          setProfile((prev: any) => ({
            ...prev,
            ...res,
            preferredCountry: res.preferredCountry || prev.preferredCountry,
            studyLevel: res.studyLevel || prev.studyLevel,
            academicScore: res.academicScore ? String(res.academicScore) : prev.academicScore,
            englishTestType: res.englishTestType || prev.englishTestType,
            englishScore: res.englishScore || prev.englishScore,
            budget: res.budget || prev.budget,
          }));
        }
      })
      .catch(() => {
        // Fallback to initial/cached profile state if unauthenticated in dev
      });
  }, []);

  const handlePersonalChange = (personalData: any) => {
    setProfile((prev: any) => {
      const updated = {
        ...prev,
        ...personalData,
        name: personalData.fullName || prev.name,
        fullName: personalData.fullName || prev.fullName,
      };
      localStorage.setItem('sfi_student_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const handleAcademicChange = (academicData: any) => {
    setProfile((prev: any) => {
      const updated = {
        ...prev,
        undergraduate: academicData.undergraduate,
        hsc: academicData.hsc,
        ssc: academicData.ssc,
        academicScore: academicData.undergraduate?.cgpa || prev.academicScore,
        cgpa: academicData.undergraduate?.cgpa || prev.cgpa,
      };
      localStorage.setItem('sfi_student_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const handleScoresChange = (scoresData: any) => {
    setProfile((prev: any) => {
      const updated = {
        ...prev,
        englishTestType: scoresData.testType,
        englishScore: scoresData.overallScore,
        testType: scoresData.testType,
        overallScore: scoresData.overallScore,
        reading: scoresData.reading,
        writing: scoresData.writing,
        listening: scoresData.listening,
        speaking: scoresData.speaking,
        certificateName: scoresData.certificateName,
      };
      localStorage.setItem('sfi_student_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const handlePreferencesChange = (prefData: any) => {
    setProfile((prev: any) => {
      const updated = {
        ...prev,
        preferredCountry: prefData.targetCountry,
        targetCountry: prefData.targetCountry,
        studyLevel: prefData.targetDegree,
        targetDegree: prefData.targetDegree,
        targetField: prefData.targetField,
        intake: prefData.intake,
        budget: prefData.budget,
        track: prefData.track,
      };
      localStorage.setItem('sfi_student_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    const payload = {
      studyLevel: profile.studyLevel || profile.targetDegree || 'Masters',
      academicScore: profile.academicScore ? parseFloat(profile.academicScore) : (profile.undergraduate?.cgpa ? parseFloat(profile.undergraduate.cgpa) : 0),
      englishTestType: profile.englishTestType || profile.testType || 'IELTS',
      englishScore: String(profile.englishScore || profile.overallScore || '6.5'),
      budget: profile.budget || '',
      preferredCountry: profile.preferredCountry || profile.targetCountry || 'Germany',
      ...profile
    };

    try {
      const res = await studentService.updateProfile(payload);
      if (res && res.id) {
        setProfile((prev: any) => ({ ...prev, ...res }));
        setSaveStatus({ message: 'Profile changes successfully saved and persisted to database!', type: 'success' });
      } else {
        localStorage.setItem('sfi_student_profile', JSON.stringify(payload));
        setSaveStatus({ message: 'Profile changes successfully saved for current session.', type: 'success' });
      }
    } catch {
      // In local preview mode when backend cookie auth is not active, persist to browser session storage
      localStorage.setItem('sfi_student_profile', JSON.stringify(payload));
      setSaveStatus({
        message: 'Profile changes saved in browser storage (Session persistence active).',
        type: 'success'
      });
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveStatus(null), 4000);
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
          <PersonalInfoCard profile={profile} onPersonalChange={handlePersonalChange} />
          <AcademicInfoCard profile={profile} onAcademicChange={handleAcademicChange} />
          <EnglishScoresCard profile={profile} onScoresChange={handleScoresChange} />
          <ChangePasswordCard />
        </div>

        {/* Right Column (40%) */}
        <div className="lg:w-[40%] flex flex-col gap-6">
          <StudyPreferencesCard profile={profile} onPreferencesChange={handlePreferencesChange} />
          <ProfileCompletionCard profile={profile} />
          <ProfileScholarshipCard />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 space-y-3">
        {saveStatus && (
          <div
            className={`p-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
              saveStatus.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}
          >
            <span>{saveStatus.message}</span>
            <button
              type="button"
              onClick={() => setSaveStatus(null)}
              className="text-xs opacity-70 hover:opacity-100 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="w-full bg-accent hover:bg-green-700 disabled:bg-green-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/30 transition-all hover:-translate-y-0.5 text-lg cursor-pointer"
        >
          {isSaving ? 'SAVING...' : 'SAVE CHANGES'}
        </button>
      </div>
    </DashboardLayout>
  );
}
