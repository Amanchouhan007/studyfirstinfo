const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface StudentDocument {
  id: string;
  userId: string;
  type: string;
  fileName: string;
  fileKey: string;
  mimeType: string;
  fileSize: number;
  status: 'UPLOADED' | 'UNDER_REVIEW' | 'VERIFIED' | 'REJECTED';
  reviewFeedback?: string | null;
  reviewedById?: string | null;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    name: string;
    email: string;
    phone?: string | null;
  };
}

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, {
    ...options,
    credentials: 'include'
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Request failed');
  }
  return res.json();
};

export const documentService = {
  async getMyDocuments(): Promise<StudentDocument[]> {
    return fetchWithAuth(`${API_URL}/documents`);
  },

  async uploadDocument(type: string, file: File): Promise<StudentDocument> {
    const formData = new FormData();
    formData.append('type', type);
    formData.append('file', file);

    const res = await fetch(`${API_URL}/documents`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to upload document');
    }

    return res.json();
  },

  async deleteDocument(id: string): Promise<{ message: string }> {
    return fetchWithAuth(`${API_URL}/documents/${id}`, {
      method: 'DELETE'
    });
  },

  async downloadDocumentFile(id: string, fileName: string): Promise<void> {
    const res = await fetch(`${API_URL}/documents/${id}/file`, {
      method: 'GET',
      credentials: 'include'
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to download document file');
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  },

  async getAdminDocuments(page = 1, pageSize = 20): Promise<{
    documents: StudentDocument[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }> {
    return fetchWithAuth(`${API_URL}/admin/documents?page=${page}&pageSize=${pageSize}`);
  },

  async updateDocumentStatus(id: string, status: string, reviewFeedback?: string): Promise<StudentDocument> {
    return fetchWithAuth(`${API_URL}/documents/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, reviewFeedback })
    });
  }
};
