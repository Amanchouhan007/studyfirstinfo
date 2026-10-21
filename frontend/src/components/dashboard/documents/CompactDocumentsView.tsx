import { useState, useEffect } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  UploadCloud, 
  Download, 
  Check, 
  AlertCircle, 
  Trash2,
  AlertTriangle,
  FolderOpen
} from 'lucide-react';
import { documentService, type StudentDocument } from '../../../services/api/documents';

export default function CompactDocumentsView() {
  const [docType, setDocType] = useState('Passport Copy');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [documents, setDocuments] = useState<StudentDocument[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const fetchDocs = async () => {
    try {
      setIsLoading(true);
      const docs = await documentService.getMyDocuments();
      setDocuments(docs || []);
    } catch (err: any) {
      setFeedback({
        message: err.message || 'Failed to load documents.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Client-side file size check (5 MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setFeedback({
          message: 'Selected file exceeds the 5MB size limit. Please choose a smaller file.',
          type: 'error'
        });
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setFeedback(null);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    setFeedback(null);

    try {
      await documentService.uploadDocument(docType, selectedFile);
      setFeedback({
        message: 'Document uploaded successfully and queued for counselor review!',
        type: 'success'
      });
      setSelectedFile(null);
      // Reset input value
      const fileInput = document.getElementById('doc-upload-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      await fetchDocs();
    } catch (err: any) {
      setFeedback({
        message: err.message || 'Failed to upload document. Please try again.',
        type: 'error'
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = async (doc: StudentDocument) => {
    try {
      await documentService.downloadDocumentFile(doc.id, doc.fileName);
    } catch (err: any) {
      alert(`Download failed: ${err.message || 'Unable to download file.'}`);
    }
  };

  const handleDelete = async (doc: StudentDocument) => {
    if (!window.confirm(`Are you sure you want to delete "${doc.fileName}"?`)) {
      return;
    }

    try {
      await documentService.deleteDocument(doc.id);
      setFeedback({
        message: 'Document deleted successfully.',
        type: 'success'
      });
      await fetchDocs();
    } catch (err: any) {
      setFeedback({
        message: err.message || 'Failed to delete document.',
        type: 'error'
      });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return 'Recently';
    }
  };

  const verifiedCount = documents.filter(d => d.status === 'VERIFIED').length;

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl font-bold text-primary mb-1">My Documents</h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Upload and track required paperwork for university admission &amp; visa clearance.
        </p>
      </div>

      {/* Upload Box */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
          Upload New Document
        </h2>

        {feedback && (
          <div className={`mb-4 p-3 rounded-xl border text-xs font-bold flex items-center justify-between gap-2 ${
            feedback.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}>
            <div className="flex items-center gap-2">
              {feedback.type === 'success' ? <Check size={14} className="text-accent" /> : <AlertCircle size={14} />}
              <span>{feedback.message}</span>
            </div>
            <button 
              type="button" 
              onClick={() => setFeedback(null)} 
              className="text-xs opacity-60 hover:opacity-100 cursor-pointer"
            >
              Dismiss
            </button>
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
                <option value="Passport Copy">Passport Copy</option>
                <option value="SSC Certificate & Transcript">SSC Certificate &amp; Transcript</option>
                <option value="HSC Certificate & Transcript">HSC Certificate &amp; Transcript</option>
                <option value="Bachelor Certificate & Transcript">Bachelor Certificate &amp; Transcript</option>
                <option value="English Proficiency Test (IELTS/PTE/MOI)">English Proficiency Certificate</option>
                <option value="Curriculum Vitae (CV)">Updated CV / Resume</option>
                <option value="Statement of Purpose (SoP)">Statement of Purpose (SoP)</option>
                <option value="Recommendation Letter (LoR)">Recommendation Letter (LoR)</option>
                <option value="Bank Solvency Certificate">Bank Solvency Certificate</option>
                <option value="Medical Certificate">Medical Certificate</option>
                <option value="Police Clearance Certificate">Police Clearance Certificate</option>
                <option value="Other Document">Other Academic Document</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-700 mb-1">Select File (PDF, JPG, PNG &le; 5 MB)</label>
              <div className="flex gap-2">
                <input
                  type="file"
                  id="doc-upload-input"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="doc-upload-input"
                  className="flex-1 bg-gray-50 hover:bg-emerald-50/40 border border-dashed border-gray-300 hover:border-accent rounded-xl px-4 py-2.5 text-xs text-gray-600 flex items-center gap-2 cursor-pointer transition-colors truncate min-w-0"
                >
                  <UploadCloud size={16} className="text-accent shrink-0" />
                  <span className="truncate">{selectedFile ? selectedFile.name : 'Choose document file...'}</span>
                </label>

                <button
                  type="submit"
                  disabled={!selectedFile || isUploading}
                  className="bg-accent hover:bg-emerald-700 text-white font-bold px-4 sm:px-5 py-2.5 rounded-xl text-xs transition-all shadow-xs disabled:opacity-40 shrink-0 cursor-pointer"
                >
                  {isUploading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-gray-100">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider">
            Uploaded Documents ({documents.length})
          </h2>
          {documents.length > 0 && (
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              {verifiedCount} of {documents.length} Verified
            </span>
          )}
        </div>

        {isLoading ? (
          <div className="py-12 text-center text-xs text-gray-400">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent mx-auto mb-2"></div>
            Loading your document repository...
          </div>
        ) : documents.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center mx-auto border border-gray-200">
              <FolderOpen size={24} />
            </div>
            <h3 className="text-sm font-bold text-gray-700">No documents uploaded yet</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Upload your passport, academic transcripts, and test certificates above to begin counselor verification.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {documents.map((doc) => (
              <div key={doc.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 text-primary flex items-center justify-center shrink-0 border border-gray-100 mt-0.5">
                    <FileText size={18} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-primary text-sm truncate">{doc.type}</div>
                    <div className="text-xs text-gray-400 font-mono flex items-center gap-2 truncate">
                      <span className="truncate">{doc.fileName}</span>
                      <span>&bull;</span>
                      <span className="shrink-0">{formatFileSize(doc.fileSize)}</span>
                      <span>&bull;</span>
                      <span className="shrink-0">{formatDate(doc.createdAt)}</span>
                    </div>

                    {/* Rejection Notice Banner */}
                    {doc.status === 'REJECTED' && doc.reviewFeedback && (
                      <div className="mt-1.5 p-2 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-start gap-1.5">
                        <AlertTriangle size={13} className="shrink-0 mt-0.5 text-rose-600" />
                        <div>
                          <strong className="font-bold">Rejection Reason:</strong> {doc.reviewFeedback}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto pt-1 sm:pt-0 shrink-0">
                  {/* Real Status Badge */}
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                      doc.status === 'VERIFIED'
                        ? 'bg-emerald-100 text-emerald-800'
                        : doc.status === 'REJECTED'
                        ? 'bg-rose-100 text-rose-800'
                        : doc.status === 'UNDER_REVIEW'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {doc.status === 'VERIFIED' && <CheckCircle2 size={12} />}
                    {doc.status === 'REJECTED' && <AlertCircle size={12} />}
                    {doc.status === 'UNDER_REVIEW' && <Clock size={12} />}
                    {doc.status === 'UPLOADED' && <Clock size={12} />}
                    {doc.status.replace('_', ' ')}
                  </span>

                  {/* Private File Download */}
                  <button
                    onClick={() => handleDownload(doc)}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                    title="Download File"
                  >
                    <Download size={14} />
                  </button>

                  {/* Delete Document (Allowed only if not verified) */}
                  {doc.status !== 'VERIFIED' && (
                    <button
                      onClick={() => handleDelete(doc)}
                      className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                      title="Delete Document"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
