import { useState } from 'react';
import { Eye, Download, Trash2, AlertTriangle } from 'lucide-react';

export default function PrivacyTab() {
  const [allowCounselors, setAllowCounselors] = useState(true);
  const [showInAlumni, setShowInAlumni] = useState(false);
  const [shareStory, setShareStory] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="space-y-8">
      {/* Profile Visibility */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-gray-100">
          <Eye size={18} className="text-accent" />
          <h3 className="text-base font-bold text-primary">Profile Visibility</h3>
        </div>

        <div className="divide-y divide-gray-100">
          {/* Option 1 */}
          <div className="py-4 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-primary">
                Allow counselors to view my profile
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                Enables Study First Info destination leads to assess eligibility and suggest scholarships.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAllowCounselors(!allowCounselors)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out shrink-0 ${
                allowCounselors ? 'bg-accent justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
            </button>
          </div>

          {/* Option 2 */}
          <div className="py-4 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-primary">
                Show my profile in alumni section
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                Display your profile as an accepted student once you receive your visa.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowInAlumni(!showInAlumni)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out shrink-0 ${
                showInAlumni ? 'bg-accent justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
            </button>
          </div>

          {/* Option 3 */}
          <div className="py-4 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-primary">
                Share success story publicly
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                Allow Study First Info marketing to feature your admission testimonial.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShareStory(!shareStory)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out shrink-0 ${
                shareStory ? 'bg-accent justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Data & Account */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <h3 className="text-base font-bold text-primary mb-4 pb-2 border-b border-gray-100">
          Data &amp; Account Controls
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div>
              <div className="text-sm font-bold text-primary">Export My Academic Profile &amp; Documents</div>
              <div className="text-xs text-gray-500">Download a complete ZIP archive containing your documents, notes, and application history.</div>
            </div>
            <button
              onClick={() => alert('Preparing complete student data archive for Rahul Ahmed...')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline shrink-0"
            >
              <Download size={14} /> Download my data
            </button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-red-50/50 border border-red-100">
            <div>
              <div className="text-sm font-bold text-red-900">Delete Account &amp; Personal Data</div>
              <div className="text-xs text-red-700/80">Permanently delete your profile, documents, and application records.</div>
            </div>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800 hover:underline shrink-0"
            >
              <Trash2 size={14} /> Delete my account
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2 text-red-600">
              <AlertTriangle size={24} />
              <h4 className="text-lg font-bold">Delete Account?</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              This action is permanent and cannot be undone. All verified certificates, pending German university filings, and counselor notes will be wiped.
            </p>
            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Account deletion request registered.');
                  setShowDeleteModal(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
