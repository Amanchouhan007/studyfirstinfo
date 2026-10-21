import { useState, useEffect } from 'react';
import { 
  CreditCard, 
  FileText, 
  Download, 
  AlertTriangle,
  FolderOpen,
  RefreshCw
} from 'lucide-react';
import { documentService, type StudentDocument } from '../../services/api/documents';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function AdminPaymentsDesk() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [documents, setDocuments] = useState<StudentDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);
  const [rejectionModal, setRejectionModal] = useState<{ docId: string; fileName: string } | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [apptsRes, appsRes, docsRes] = await Promise.all([
        fetch(`${API_BASE}/admin/appointments?paymentStatus=PENDING`, { credentials: 'include' }).then(r => r.json()).catch(() => ({ appointments: [] })),
        fetch(`${API_BASE}/admin/applications`, { credentials: 'include' }).then(r => r.json()).catch(() => ({ applications: [] })),
        documentService.getAdminDocuments(1, 50).catch(() => ({ documents: [] }))
      ]);

      setAppointments(apptsRes.appointments || []);
      setApplications(appsRes.applications || []);
      setDocuments(docsRes.documents || []);
    } catch {
      // Ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleVerifyAppointment = async (id: string, paymentStatus: 'PAID' | 'REJECTED') => {
    try {
      const res = await fetch(`${API_BASE}/appointments/${id}/verify-payment`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentStatus }),
        credentials: 'include'
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to update payment');
      }

      setActionFeedback(`Appointment payment successfully marked as ${paymentStatus}!`);
      setTimeout(() => setActionFeedback(null), 4000);
      await loadData();
    } catch (err: any) {
      alert(err.message || 'Payment verification failed');
    }
  };

  const handleVerifyDocument = async (id: string) => {
    try {
      await documentService.updateDocumentStatus(id, 'VERIFIED');
      setActionFeedback('Document successfully verified and marked official!');
      setTimeout(() => setActionFeedback(null), 4000);
      await loadData();
    } catch (err: any) {
      alert(err.message || 'Failed to verify document');
    }
  };

  const handleRejectDocumentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectionModal || !rejectionReason.trim()) return;

    try {
      await documentService.updateDocumentStatus(rejectionModal.docId, 'REJECTED', rejectionReason.trim());
      setActionFeedback(`Document rejected with recorded counselor feedback.`);
      setRejectionModal(null);
      setRejectionReason('');
      setTimeout(() => setActionFeedback(null), 4000);
      await loadData();
    } catch (err: any) {
      alert(err.message || 'Failed to reject document');
    }
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner & Refresh */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-primary">Payment &amp; Intake Verification Desk</h2>
          <p className="text-xs text-gray-500">
            Real-time bKash/Nagad appointment verification, live student applications, and document review.
          </p>
        </div>
        <button
          onClick={loadData}
          disabled={loading}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 shadow-xs cursor-pointer transition-colors"
        >
          <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          <span>Refresh Desk</span>
        </button>
      </div>

      {actionFeedback && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center justify-between">
          <span>{actionFeedback}</span>
          <button onClick={() => setActionFeedback(null)} className="text-xs opacity-60 hover:opacity-100 cursor-pointer">
            Dismiss
          </button>
        </div>
      )}

      {/* SECTION 1: PENDING PAID APPOINTMENTS */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-accent" />
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
              Pending Paid Counseling Appointments ({appointments.length})
            </h3>
          </div>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
            Requires Manual TrxID Match
          </span>
        </div>

        {loading ? (
          <div className="py-8 text-center text-xs text-gray-400">Loading appointments...</div>
        ) : appointments.length === 0 ? (
          <div className="py-8 text-center text-xs text-gray-400">
            No pending appointment payments awaiting verification.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/70 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-3 py-2.5 rounded-l-lg">Student</th>
                  <th className="px-3 py-2.5">Counselor</th>
                  <th className="px-3 py-2.5">Date &amp; Slot (BST)</th>
                  <th className="px-3 py-2.5">Fee</th>
                  <th className="px-3 py-2.5">TrxID Submitted</th>
                  <th className="px-3 py-2.5 text-right rounded-r-lg">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {appointments.map((appt) => (
                  <tr key={appt.id} className="hover:bg-gray-50/50">
                    <td className="px-3 py-3 font-semibold text-gray-900">
                      <div>{appt.user?.name || 'Student'}</div>
                      <div className="text-[10px] text-gray-400">{appt.user?.email}</div>
                    </td>
                    <td className="px-3 py-3 text-gray-600 font-medium">
                      {appt.counselor?.name || 'Counselor'}
                    </td>
                    <td className="px-3 py-3 font-mono text-gray-600">
                      {formatDate(appt.date)}
                    </td>
                    <td className="px-3 py-3 font-bold text-primary">
                      {appt.fee} BDT
                    </td>
                    <td className="px-3 py-3">
                      <span className="bg-emerald-50 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                        {appt.trxId || 'N/A'}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => handleVerifyAppointment(appt.id, 'PAID')}
                          className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-xs cursor-pointer transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleVerifyAppointment(appt.id, 'REJECTED')}
                          className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] border border-rose-200 cursor-pointer transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* SECTION 2: REAL STUDENT APPLICATIONS TABLE */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <FolderOpen size={18} className="text-accent" />
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
              Live Database Student Applications ({applications.length})
            </h3>
          </div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Source: PostgreSQL
          </span>
        </div>

        {loading ? (
          <div className="py-8 text-center text-xs text-gray-400">Loading applications...</div>
        ) : applications.length === 0 ? (
          <div className="py-8 text-center text-xs text-gray-400">
            No student applications lodged in database yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/70 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-3 py-2.5 rounded-l-lg">Tracking ID</th>
                  <th className="px-3 py-2.5">Student</th>
                  <th className="px-3 py-2.5">Destination &amp; Uni</th>
                  <th className="px-3 py-2.5">Program</th>
                  <th className="px-3 py-2.5">Track</th>
                  <th className="px-3 py-2.5 text-right rounded-r-lg">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/50">
                    <td className="px-3 py-3 font-mono font-bold text-accent">
                      {app.trackingId}
                    </td>
                    <td className="px-3 py-3 font-semibold text-gray-900">
                      <div>{app.user?.name || 'Student'}</div>
                      <div className="text-[10px] text-gray-400">{app.user?.email}</div>
                    </td>
                    <td className="px-3 py-3">
                      <div className="font-bold text-gray-800">{app.country}</div>
                      <div className="text-[11px] text-gray-500">{app.university}</div>
                    </td>
                    <td className="px-3 py-3 text-gray-700">
                      {app.program}
                    </td>
                    <td className="px-3 py-3 font-mono text-[11px]">
                      {app.track}
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full text-[10px]">
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* SECTION 3: STUDENT DOCUMENTS REVIEW DESK */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-accent" />
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
              Student Document Review &amp; Verification Desk ({documents.length})
            </h3>
          </div>
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
            Private S3 / Local Storage
          </span>
        </div>

        {loading ? (
          <div className="py-8 text-center text-xs text-gray-400">Loading document queue...</div>
        ) : documents.length === 0 ? (
          <div className="py-8 text-center text-xs text-gray-400">
            No student documents uploaded to database yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/70 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-3 py-2.5 rounded-l-lg">Student</th>
                  <th className="px-3 py-2.5">Type</th>
                  <th className="px-3 py-2.5">File Name</th>
                  <th className="px-3 py-2.5">Uploaded</th>
                  <th className="px-3 py-2.5">Status</th>
                  <th className="px-3 py-2.5 text-right rounded-r-lg">Review Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50/50">
                    <td className="px-3 py-3 font-semibold text-gray-900">
                      <div>{doc.user?.name || 'Student'}</div>
                      <div className="text-[10px] text-gray-400">{doc.user?.email}</div>
                    </td>
                    <td className="px-3 py-3 font-medium text-gray-800">
                      {doc.type}
                    </td>
                    <td className="px-3 py-3 font-mono text-[11px] text-gray-600 truncate max-w-xs">
                      {doc.fileName}
                    </td>
                    <td className="px-3 py-3 text-gray-500">
                      {formatDate(doc.createdAt)}
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          doc.status === 'VERIFIED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : doc.status === 'REJECTED'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => documentService.downloadDocumentFile(doc.id, doc.fileName)}
                          className="p-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
                          title="Stream/Download File"
                        >
                          <Download size={13} />
                        </button>
                        {doc.status !== 'VERIFIED' && (
                          <button
                            onClick={() => handleVerifyDocument(doc.id)}
                            className="px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] cursor-pointer"
                          >
                            Verify
                          </button>
                        )}
                        {doc.status !== 'REJECTED' && (
                          <button
                            onClick={() => setRejectionModal({ docId: doc.id, fileName: doc.fileName })}
                            className="px-2 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] border border-rose-200 cursor-pointer"
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Rejection Modal with Required Reason */}
      {rejectionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2 text-rose-600">
              <AlertTriangle size={20} />
              <h3 className="font-bold text-base text-gray-900">Reject Document</h3>
            </div>
            <p className="text-xs text-gray-600">
              Specify the exact reason for rejecting <strong>{rejectionModal.fileName}</strong>. This feedback will be displayed directly to the student on their portal.
            </p>
            <form onSubmit={handleRejectDocumentSubmit} className="space-y-3">
              <textarea
                required
                rows={3}
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="e.g. Scanned copy is blurry and passport expiry date is unreadable. Please upload a clear 300 DPI scan."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 font-medium"
              />
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setRejectionModal(null)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!rejectionReason.trim()}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs cursor-pointer disabled:opacity-50"
                >
                  Confirm Rejection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
