import { Link } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import NotificationsList from '../components/dashboard/notifications/NotificationsList';
import NotificationPreferencesCard from '../components/dashboard/notifications/NotificationPreferencesCard';

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      {/* Header & Breadcrumb */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">Notifications</h1>
        <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
          <Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
          <span>&gt;</span>
          <span className="text-primary font-semibold">Notifications</span>
        </div>
      </div>

      {/* Notifications List with Filter Tabs */}
      <NotificationsList />

      {/* Notification Preferences Card */}
      <NotificationPreferencesCard />
    </DashboardLayout>
  );
}
