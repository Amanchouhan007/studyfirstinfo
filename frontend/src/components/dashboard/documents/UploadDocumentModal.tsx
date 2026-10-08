import { useState } from 'react';
import { UploadCloud, X, CheckCircle, FileCheck } from 'lucide-react';

interface UploadDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDocType?: string;
}

export default function UploadDocumentModal({ isOpen, onClose, defaultDocType }: UploadDocumentModalProps) {
  const [docType, setDocType] = useState(defaultDocType || 'Medical Certificate Required');
  const [file, setFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFile(null);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary">Upload Document</h3>
          <p className="text-xs text-gray-500 mt-1">Submit high-resolution authentic scans for counselor verification</p>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-100 text-accent rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle size={36} />
            </div>
            <h4 className="text-lg font-bold text-primary">Document Uploaded!</h4>
            <p className="text-xs text-gray-500">Sent to counselor Imran Hossain Rony for verification.</p>
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
                <option value="Medical Certificate Required">Medical Fitness Certificate</option>
                <option value="Police Clearance Certificate">Police Clearance Certificate</option>
                <option value="Passport Copy">Passport Copy</option>
                <option value="SSC Certificate">SSC Certificate / Transcript</option>
                <option value="HSC Certificate">HSC Certificate / Transcript</option>
                <option value="IELTS Score Card">IELTS Official Test Report Form</option>
                <option value="Bank Statement">Bank Solvency / 6-Month Statement</option>
                <option value="Statement of Purpose (SoP)">Statement of Purpose (SoP)</option>
              </select>
            </div>

            {/* Drag & Drop Zone */}
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
                    <p className="text-xs text-gray-400 mt-1">Accepted: PDF, JPG, PNG | Max: 10MB</p>
                  </>
                )}
              </label>
            </div>

            {/* Actions */}
            <div className="pt-3 space-y-2.5">
              <button
                type="submit"
                className="w-full bg-accent hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-sm active:scale-[0.99]"
              >
                Upload Document
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full text-center text-xs font-semibold text-gray-400 hover:text-gray-600 py-1"
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
