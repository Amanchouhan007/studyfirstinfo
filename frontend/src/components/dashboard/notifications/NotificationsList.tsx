import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, CheckCircle2, Award, GraduationCap } from 'lucide-react';

interface NotificationItem {
  id: string;
  isUnread: boolean;
  category: 'Documents' | 'Appointments' | 'System';
  title: string;
  description: string;
  time: string;
  badgeColor?: string;
  actionText?: string;
  actionLink?: string;
  secondaryActionText?: string;
  secondaryActionLink?: string;
}

export default function NotificationsList() {
  const [filter, setFilter] = useState<'All' | 'Unread' | 'Appointments' | 'Documents' | 'System'>('All');
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'notif-1',
      isUnread: true,
      category: 'Documents',
      title: 'Your document has been verified',
      description: 'M. Imran Hossain Rony verified your Bank Statement. Your profile is now 85% complete.',
      time: '2 hours ago',
      badgeColor: 'emerald',
      actionText: 'View Document →',
      actionLink: '/documents',
    },
    {
      id: 'notif-2',
      isUnread: true,
      category: 'Appointments',
      title: 'Appointment Confirmed',
      description: 'Your video call with M. Imran Hossain Rony is confirmed for Sep 15, 2026 at 3:00 PM BST',
      time: '5 hours ago',
      badgeColor: 'emerald',
      actionText: 'Add to Calendar →',
      actionLink: '#calendar',
      secondaryActionText: 'View Details →',
      secondaryActionLink: '/appointments',
    },
    {
      id: 'notif-3',
      isUnread: true,
      category: 'Documents',
      title: 'Action Required: Upload Missing Documents',
      description: '2 documents still missing: Medical Certificate and Police Clearance. Upload to complete profile.',
      time: '1 day ago',
      badgeColor: 'amber',
      actionText: 'Upload Now →',
      actionLink: '/documents',
    },
    {
      id: 'notif-4',
      isUnread: false,
      category: 'System',
      title: 'Profile Approved',
      description: 'Your academic profile has been approved by your counselor.',
      time: '2 days ago',
    },
    {
      id: 'notif-5',
      isUnread: false,
      category: 'System',
      title: 'Welcome to Study First Info!',
      description: 'Account successfully created. Your study abroad journey starts here.',
      time: '3 days ago',
    },
    {
      id: 'notif-6',
      isUnread: false,
      category: 'System',
      title: 'Merit Waiver Approved!',
      description: 'Congratulations! Your dual A+ grades qualify you for 100% service fee waiver.',
      time: '4 days ago',
      actionText: 'Download Certificate →',
      actionLink: '/scholarships',
    },
    {
      id: 'notif-7',
      isUnread: false,
      category: 'System',
      title: 'University Matches Found',
      description: '3 German universities matched to your profile with over 95% eligibility score.',
      time: '5 days ago',
      actionText: 'View Matches →',
      actionLink: '/application',
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));
  };

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  const filtered = notifications.filter((n) => {
    if (filter === 'All') return true;
    if (filter === 'Unread') return n.isUnread;
    return n.category === filter;
  });

  const getIcon = (category: string, title: string) => {
    if (title.includes('Waiver')) return <Award size={18} className="text-amber-500" />;
    if (title.includes('University')) return <GraduationCap size={18} className="text-accent" />;
    if (category === 'Documents') return <FileText size={18} className="text-accent" />;
    if (category === 'Appointments') return <Calendar size={18} className="text-emerald-600" />;
    return <CheckCircle2 size={18} className="text-gray-500" />;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
      {/* Filter and Action Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-gray-100">
        <div className="flex flex-wrap items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setFilter('All')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              filter === 'All' ? 'bg-white text-primary shadow-xs' : 'text-gray-500 hover:text-primary'
            }`}
          >
            All ({notifications.length})
          </button>
          <button
            onClick={() => setFilter('Unread')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              filter === 'Unread' ? 'bg-white text-primary shadow-xs' : 'text-gray-500 hover:text-primary'
            }`}
          >
            Unread ({unreadCount})
          </button>
          <button
            onClick={() => setFilter('Appointments')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              filter === 'Appointments' ? 'bg-white text-primary shadow-xs' : 'text-gray-500 hover:text-primary'
            }`}
          >
            Appointments
          </button>
          <button
            onClick={() => setFilter('Documents')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              filter === 'Documents' ? 'bg-white text-primary shadow-xs' : 'text-gray-500 hover:text-primary'
            }`}
          >
            Documents
          </button>
          <button
            onClick={() => setFilter('System')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              filter === 'System' ? 'bg-white text-primary shadow-xs' : 'text-gray-500 hover:text-primary'
            }`}
          >
            System
          </button>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-xs font-bold text-accent hover:text-emerald-700 hover:underline transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Notifications Items */}
      <div className="space-y-3 mt-5">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-sm">
            No notifications in this category.
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                item.isUnread
                  ? 'bg-[#F0FDF4] border-accent/30 shadow-xs'
                  : 'bg-white border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    item.isUnread
                      ? item.badgeColor === 'amber'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-emerald-100 text-accent'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {getIcon(item.category, item.title)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-primary text-sm sm:text-base">{item.title}</h3>
                      {item.isUnread && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.badgeColor === 'amber' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          NEW
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium">{item.time}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {(item.actionText || item.secondaryActionText) && (
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {item.actionText && (
                        item.actionLink?.startsWith('/') ? (
                          <Link
                            to={item.actionLink}
                            className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                          >
                            {item.actionText}
                          </Link>
                        ) : (
                          <button
                            onClick={() => alert(`Triggered: ${item.actionText}`)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                          >
                            {item.actionText}
                          </button>
                        )
                      )}

                      {item.secondaryActionText && (
                        item.secondaryActionLink?.startsWith('/') ? (
                          <Link
                            to={item.secondaryActionLink}
                            className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-primary hover:underline"
                          >
                            {item.secondaryActionText}
                          </Link>
                        ) : (
                          <button
                            onClick={() => alert(`Triggered: ${item.secondaryActionText}`)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-primary hover:underline"
                          >
                            {item.secondaryActionText}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
