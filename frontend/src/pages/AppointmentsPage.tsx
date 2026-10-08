import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import UpcomingHighlightCard from '../components/dashboard/appointments/UpcomingHighlightCard';
import AppointmentsList from '../components/dashboard/appointments/AppointmentsList';
import BookAppointmentForm from '../components/dashboard/appointments/BookAppointmentForm';

export default function AppointmentsPage() {
  const [targetCounselor, setTargetCounselor] = useState<string | undefined>(undefined);

  const scrollToBooking = (counselorName?: string) => {
    if (counselorName) {
      setTargetCounselor(counselorName);
    }
    const element = document.getElementById('book-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <DashboardLayout>
      {/* Top Header & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">My Appointments</h1>
          <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
            <span>&gt;</span>
            <span className="text-primary font-semibold">My Appointments</span>
          </div>
        </div>

        <button
          onClick={() => scrollToBooking()}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm active:scale-95 self-start sm:self-auto"
        >
          <Plus size={18} />
          + Book New Appointment
        </button>
      </div>

      {/* Upcoming Highlight Card */}
      <UpcomingHighlightCard />

      {/* Appointments List with Tabs */}
      <AppointmentsList onBookFollowup={(c) => scrollToBooking(c)} />

      {/* Book New Consultation Section */}
      <BookAppointmentForm defaultCounselor={targetCounselor} />
    </DashboardLayout>
  );
}
