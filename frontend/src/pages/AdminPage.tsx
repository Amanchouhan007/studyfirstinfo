import { useState } from 'react';
import { Menu, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import type { AdminTab } from '../components/admin/AdminSidebar';
import AdminStatsRow from '../components/admin/AdminStatsRow';
import AdminPipelineTable from '../components/admin/AdminPipelineTable';
import AdminCounselorGrid from '../components/admin/AdminCounselorGrid';
import AdminWaiversDesk from '../components/admin/AdminWaiversDesk';
import AdminAnalyticsDesk from '../components/admin/AdminAnalyticsDesk';
import AdminSettingsDesk from '../components/admin/AdminSettingsDesk';
import AdminSeoDesk from '../components/admin/AdminSeoDesk';

export default function AdminPage() {
  const [currentTab, setCurrentTab] = useState<AdminTab>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getTabTitle = () => {
    switch (currentTab) {
      case 'overview':
        return { title: 'Pipeline & Leads Oversight', subtitle: 'Global active student files, counselor assignments, and visa progression' };
      case 'counselors':
        return { title: 'Counselor Desks & Team Workload', subtitle: 'Real-time caseload, country allocation, and student conversion benchmarks' };
      case 'waivers':
        return { title: '100% Merit Waivers & Scholarship Clearances', subtitle: 'Direct approvals for Chinese Government CSC, German tuition waivers, and grants' };
      case 'analytics':
        return { title: 'Intake Analytics & Remittance Volume', subtitle: 'Country distribution, processing velocity, and blocked account milestones' };
      case 'seo':
        return { title: 'SEO, Schema Markup & Tag Manager Control', subtitle: 'Google search console sitemaps, robots.txt, schema.org JSON-LD and page metadata' };
      case 'settings':
        return { title: 'Branch Management & Compliance Rules', subtitle: 'Physical offices in Dhaka & Chittagong, automation rules, and notifications' };
      default:
        return { title: 'Admin HQ Portal', subtitle: 'Executive management desk' };
    }
  };

  const { title, subtitle } = getTabTitle();

  return (
    <div className="min-h-screen bg-[#F0FDF4]/60 md:bg-gray-50 flex">
      {/* Executive Admin Sidebar */}
      <AdminSidebar
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 px-3 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-2 sm:gap-4 shadow-xs">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-xl transition-colors cursor-pointer shrink-0"
              aria-label="Open Sidebar"
            >
              <Menu size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs font-bold text-accent">Admin HQ</span>
                <span className="text-gray-300">&bull;</span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-500 capitalize truncate">{currentTab}</span>
              </div>
              <h1 className="text-sm sm:text-lg font-black text-primary tracking-tight truncate">
                {title}
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block truncate max-w-lg">{subtitle}</p>
            </div>
          </div>

          {/* Top Right Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link
              to="/auth"
              className="inline-flex items-center gap-1 sm:gap-1.5 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 px-2.5 sm:px-3.5 py-1.5 rounded-xl transition-all border border-rose-200 cursor-pointer"
              title="Logout"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Logout</span>
            </Link>

            <div className="flex items-center gap-2 pl-1.5 sm:pl-2 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-gray-900">Admin Director</div>
                <div className="text-[10px] text-emerald-600 font-semibold">Dhaka HQ</div>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs shadow-xs border border-white/20 shrink-0">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Tab Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6 max-w-7xl w-full mx-auto">
          {currentTab === 'overview' && (
            <>
              <AdminStatsRow />
              <AdminPipelineTable />
              <AdminCounselorGrid />
            </>
          )}

          {currentTab === 'counselors' && <AdminCounselorGrid />}

          {currentTab === 'waivers' && <AdminWaiversDesk />}

          {currentTab === 'analytics' && <AdminAnalyticsDesk />}

          {currentTab === 'seo' && <AdminSeoDesk />}

          {currentTab === 'settings' && <AdminSettingsDesk />}
        </main>
      </div>
    </div>
  );
}
