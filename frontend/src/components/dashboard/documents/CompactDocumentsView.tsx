import { useState } from 'react';
import { FileText, CheckCircle2, Clock, UploadCloud, Download, Check } from 'lucide-react';

export default function CompactDocumentsView() {
  const [docType, setDocType] = useState('Medical Certificate');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const [documents, setDocuments] = useState([
    { name: 'Passport Copy', file: 'passport_scan.pdf', size: '2.3 MB', date: 'Sep 2, 2026', status: 'Verified' },
    { name: 'SSC Certificate & Transcript', file: 'ssc_certificate.pdf', size: '1.8 MB', date: 'Sep 2, 2026', status: 'Verified' },
    { name: 'HSC Certificate & Transcript', file: 'hsc_certificate.pdf', size: '1.9 MB', date: 'Sep 2, 2026', status: 'Verified' },
    { name: 'IELTS Official Score Card', file: 'ielts_scorecard.pdf', size: '1.1 MB', date: 'Sep 2, 2026', status: 'Verified' },
    { name: 'Bank Solvency Statement', file: 'bank_statement_aug2026.pdf', size: '3.4 MB', date: 'Sep 6, 2026', status: 'Under Review' },
    { name: 'Statement of Purpose (SoP)', file: 'statement_of_purpose_v2.docx', size: '450 KB', date: 'Sep 7, 2026', status: 'Under Review' },
  ]);

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFileName) return;

    setDocuments([
      ...documents,
      {
        name: docType,
        file: uploadedFileName,
        size: '1.5 MB',
        date: 'Just now',
        status: 'Under Review',
      },
    ]);
    setShowSuccess(true);
    setUploadedFileName('');
    setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl font-bold text-primary mb-1">My Documents</h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Upload and track required paperwork for German university application &amp; visa.
        </p>
      </div>

      {/* Upload Box (Simple & Functional) */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
          Upload New Document
        </h2>

        {showSuccess && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2">
            <Check size={14} className="text-accent" />
            Document uploaded successfully and queued for counselor review!
          </div>
        )}

        <form onSubmit={handleUploadSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Document Type</label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              >
                <option value="Medical Certificate">Medical Certificate</option>
                <option value="Police Clearance">Police Clearance</option>
                <option value="Recommendation Letter (LoR)">Recommendation Letter (LoR)</option>
                <option value="CV / Resume">Updated CV / Resume</option>
                <option value="Other Document">Other Academic Document</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-700 mb-1">Select File (PDF, JPG, PNG)</label>
              <div className="flex gap-2">
                <input
                  type="file"
                  id="doc-upload-input"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setUploadedFileName(e.target.files[0].name);
                    }
                  }}
                />
                <label
                  htmlFor="doc-upload-input"
                  className="flex-1 bg-gray-50 hover:bg-emerald-50/40 border border-dashed border-gray-300 hover:border-accent rounded-xl px-4 py-2.5 text-xs text-gray-600 flex items-center gap-2 cursor-pointer transition-colors truncate"
                >
                  <UploadCloud size={16} className="text-accent shrink-0" />
                  <span className="truncate">{uploadedFileName || 'Choose document file...'}</span>
                </label>

                <button
                  type="submit"
                  disabled={!uploadedFileName}
                  className="bg-accent hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-xs disabled:opacity-40 shrink-0"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider">
            Uploaded Documents ({documents.length})
          </h2>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            6 of 8 Uploaded
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {documents.map((doc, idx) => (
            <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-50 text-primary flex items-center justify-center shrink-0 border border-gray-100">
                  <FileText size={18} className="text-accent" />
                </div>
                <div>
                  <div className="font-bold text-primary text-sm">{doc.name}</div>
                  <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                    <span>{doc.file}</span>
                    <span>&bull;</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                    doc.status === 'Verified'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {doc.status === 'Verified' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                  {doc.status}
                </span>

                <button
                  onClick={() => alert(`Downloading ${doc.file}...`)}
                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  title="Download File"
                >
                  <Download size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
