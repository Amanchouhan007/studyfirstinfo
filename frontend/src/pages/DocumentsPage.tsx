import DashboardLayout from '../components/dashboard/DashboardLayout';
import CompactDocumentsView from '../components/dashboard/documents/CompactDocumentsView';

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <CompactDocumentsView />
    </DashboardLayout>
  );
}
