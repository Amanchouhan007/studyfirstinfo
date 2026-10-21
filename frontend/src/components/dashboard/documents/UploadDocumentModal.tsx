import { useState } from 'react';
import { UploadCloud, X, CheckCircle, FileCheck, AlertCircle } from 'lucide-react';
import { documentService } from '../../../services/api/documents';

interface UploadDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDocType?: string;
  onSuccess?: () => void;
}

export default function UploadDocumentModal({ 
  isOpen, 
  onClose, 
  defaultDocType,
  onSuccess 
}: UploadDocumentModalProps) {
  const [docType, setDocType] = useState(defaultDocType || 'Passport Copy');
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds the 5MB limit. Please upload a smaller file.');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      await documentService.uploadDocument(docType, file);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setIsSuccess(false);
        setFile(null);
        onClose();
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Failed to upload document. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary">Upload Document</h3>
          <p className="text-xs text-gray-500 mt-1">Submit high-resolution authentic scans for counselor verification</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800 flex items-center gap-2">
            <AlertCircle size={14} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-100 text-accent rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle size={36} />
            </div>
            <h4 className="text-lg font-bold text-primary">Document Uploaded!</h4>
            <p className="text-xs text-gray-500">Sent to counselor desk for verification.</p>
          </div>
        ) : (
          <form onSubmit={handleUpload} className="space-y-5">
            {/* Document Type Dropdown */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-primary uppercase tracking-wider">
                Select Document Type
              </label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              >
                <option value="Passport Copy">Passport Copy</option>
                <option value="SSC Certificate & Transcript">SSC Certificate / Transcript</option>
                <option value="HSC Certificate & Transcript">HSC Certificate / Transcript</option>
                <option value="Bachelor Certificate & Transcript">Bachelor Certificate / Transcript</option>
                <option value="English Proficiency Test (IELTS/PTE/MOI)">English Proficiency Certificate</option>
                <option value="Bank Solvency Certificate">Bank Solvency / 6-Month Statement</option>
                <option value="Statement of Purpose (SoP)">Statement of Purpose (SoP)</option>
                <option value="Recommendation Letter (LoR)">Recommendation Letter (LoR)</option>
                <option value="Medical Certificate">Medical Fitness Certificate</option>
                <option value="Police Clearance Certificate">Police Clearance Certificate</option>
                <option value="Other Document">Other Document</option>
              </select>
            </div>

            {/* File Zone */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-primary uppercase tracking-wider">
                File Upload
              </label>
              <label className="border-2 border-dashed border-gray-300 hover:border-accent bg-gray-50/50 hover:bg-emerald-50/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all group">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFile(e.target.files[0]);
                      setError(null);
                    }
                  }}
                />
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <UploadCloud size={24} />
                </div>
                {file ? (
                  <div className="text-sm font-bold text-accent flex items-center gap-1.5">
                    <FileCheck size={16} />
                    {file.name}
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-gray-700">
                      Drop file here or <span className="text-accent underline">click to browse</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Accepted: PDF, JPG, PNG | Max: 5MB</p>
                  </>
                )}
              </label>
            </div>

            {/* Actions */}
            <div className="pt-3 space-y-2.5">
              <button
                type="submit"
                disabled={!file || isUploading}
                className="w-full bg-accent hover:bg-emerald-700 disabled:bg-gray-400 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-sm active:scale-[0.99] cursor-pointer"
              >
                {isUploading ? 'Uploading Document...' : 'Upload Document'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full text-center text-xs font-semibold text-gray-400 hover:text-gray-600 py-1 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
