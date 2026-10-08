import DashboardLayout from '../components/dashboard/DashboardLayout';
import CompactDashboardView from '../components/dashboard/compact/CompactDashboardView';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <CompactDashboardView />
    </DashboardLayout>
  );
}
