import { useState } from 'react';
import { FileText, AlertCircle, Eye, Download, RefreshCw, Upload, Edit3 } from 'lucide-react';

interface DocumentGridProps {
  onOpenUpload: (docName?: string) => void;
}

export default function DocumentGrid({ onOpenUpload }: DocumentGridProps) {
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending' | 'missing'>('all');
  const [viewingDoc, setViewingDoc] = useState<string | null>(null);

  const docs = [
    {
      id: 'doc-1',
      title: 'Passport Copy',
      filename: 'passport_scan.pdf',
      filesize: '2.3 MB',
      uploadDate: 'Sep 2, 2026',
      status: 'verified',
      statusLabel: '✅ Verified by Counselor',
      canReplace: true,
    },
    {
      id: 'doc-2',
      title: 'SSC Certificate',
      filename: 'ssc_certificate.pdf',
      filesize: '1.8 MB',
      uploadDate: 'Sep 2, 2026',
      status: 'verified',
      statusLabel: '✅ Verified',
      canReplace: true,
    },
    {
      id: 'doc-3',
      title: 'HSC Certificate',
      filename: 'hsc_certificate.pdf',
      filesize: '1.9 MB',
      uploadDate: 'Sep 2, 2026',
      status: 'verified',
      statusLabel: '✅ Verified',
      canReplace: true,
    },
    {
      id: 'doc-4',
      title: 'IELTS Score Card',
      filename: 'ielts_scorecard.pdf',
      filesize: '1.1 MB',
      uploadDate: 'Sep 2, 2026',
      meta: 'IELTS: 6.5 | Date: June 2026',
      status: 'verified',
      statusLabel: '✅ Verified',
      canReplace: true,
    },
    {
      id: 'doc-5',
      title: 'Bank Statement',
      filename: 'bank_statement_aug2026.pdf',
      filesize: '3.4 MB',
      uploadDate: 'Sep 6, 2026',
      status: 'pending',
      statusLabel: '⏳ Under Review',
      canReplace: true,
    },
    {
      id: 'doc-6',
      title: 'SoP Draft',
      filename: 'statement_of_purpose_v2.docx',
      filesize: '450 KB',
      uploadDate: 'Sep 7, 2026',
      status: 'pending',
      statusLabel: '⏳ Counselor Reviewing',
      note: 'Minor edits needed',
      canEditSop: true,
    },
    {
      id: 'doc-7',
      title: 'Medical Certificate Required',
      description: 'Upload your medical fitness certificate',
      status: 'missing',
      statusLabel: '❌ Missing',
    },
    {
      id: 'doc-8',
      title: 'Police Clearance Certificate',
      description: 'Upload police clearance from Bangladesh',
      status: 'missing',
      statusLabel: '❌ Missing',
    },
  ];

  const filteredDocs = docs.filter((d) => {
    if (filter === 'all') return true;
    return d.status === filter;
  });

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'all'
              ? 'bg-primary text-white shadow-xs'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          All (8)
        </button>
        <button
          onClick={() => setFilter('verified')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'verified'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
          }`}
        >
          ✅ Verified (4)
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'pending'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white text-gray-600 hover:bg-amber-50 border border-gray-200'
          }`}
        >
          ⏳ Pending (2)
        </button>
        <button
          onClick={() => setFilter('missing')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'missing'
              ? 'bg-red-600 text-white shadow-xs'
              : 'bg-white text-gray-600 hover:bg-red-50 border border-gray-200'
          }`}
        >
          ❌ Missing (2)
        </button>
      </div>

      {/* Document Grid (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDocs.map((doc) => {
          if (doc.status === 'missing') {
            return (
              <div
                key={doc.id}
                className="border-2 border-dashed border-red-300 bg-red-50/40 rounded-2xl p-6 flex flex-col justify-between hover:bg-red-50/70 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2.5 py-0.5 rounded-md">
                      Action Required
                    </span>
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> Missing
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{doc.title}</h3>
                  <p className="text-xs text-gray-600">{doc.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-red-200/60 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Official format needed</span>
                  <button
                    onClick={() => onOpenUpload(doc.title)}
                    className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-xs"
                  >
                    <Upload size={14} /> Upload Now
                  </button>
                </div>
              </div>
            );
          }

          const isVerified = doc.status === 'verified';

          return (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-sm p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        isVerified ? 'bg-emerald-50 text-accent' : 'bg-amber-50 text-amber-600'
                      }`}
                    >
                      <FileText size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-base">{doc.title}</h3>
                      <p className="text-xs font-mono text-gray-500 truncate max-w-[200px]">{doc.filename}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                      isVerified
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {doc.statusLabel}
                  </span>
                </div>

                <div className="text-xs text-gray-500 space-y-1 mb-2">
                  <div className="flex items-center justify-between">
                    <span>Uploaded: {doc.uploadDate || 'Sep 2, 2026'}</span>
                    <span>{doc.filesize}</span>
                  </div>
                  {doc.meta && (
                    <div className="text-emerald-700 font-semibold bg-emerald-50/70 px-2 py-0.5 rounded">
                      {doc.meta}
                    </div>
                  )}
                  {doc.note && (
                    <div className="text-amber-800 font-medium bg-amber-50 p-2 rounded-lg border border-amber-200/60 mt-2">
                      Counselor note: &ldquo;{doc.note}&rdquo;
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setViewingDoc(doc.filename || doc.title)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Eye size={13} /> View
                </button>
                <a
                  href={`#download-${doc.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading ${doc.filename}...`);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Download size={13} /> Download
                </a>
                {doc.canEditSop ? (
                  <button
                    onClick={() => onOpenUpload('Statement of Purpose (SoP)')}
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors ml-auto"
                  >
                    <Edit3 size={13} /> Edit SoP
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenUpload(doc.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-emerald-800 hover:bg-emerald-50 px-2.5 py-1.5 rounded-lg transition-colors ml-auto"
                  >
                    <RefreshCw size={12} /> Replace
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Document Viewer Modal preview */}
      {viewingDoc && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-primary">{viewingDoc}</h4>
              <button
                onClick={() => setViewingDoc(null)}
                className="text-gray-400 hover:text-gray-600 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="py-12 text-center text-gray-500 space-y-2">
              <FileText size={48} className="mx-auto text-accent/60" />
              <div className="font-semibold text-gray-700">Previewing Document File</div>
              <p className="text-xs text-gray-400">Authentic scanned copy verified for German Embassy processing.</p>
            </div>
            <button
              onClick={() => setViewingDoc(null)}
              className="w-full py-2.5 bg-primary text-white font-bold rounded-xl text-xs hover:bg-emerald-900 transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
