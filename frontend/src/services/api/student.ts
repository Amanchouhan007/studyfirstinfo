const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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

export const studentService = {
  async getProfile() {
    return fetchWithAuth(`${API_URL}/profile`);
  },

  async updateProfile(data: any) {
    return fetchWithAuth(`${API_URL}/profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },

  async evaluateEligibility(data: any) {
    return fetchWithAuth(`${API_URL}/eligibility/evaluate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },

  async downloadScholarshipGuide(data: { name: string; emailOrPhone: string; studyLevel?: string; preferredCountry?: string }) {
    const res = await fetch(`${API_URL}/leads/download-guide`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include'
    });

    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/pdf')) {
      const blob = await res.blob();
      return { type: 'pdf', blob };
    }

    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(json.error || 'Failed to download guide');
    }
    return { type: 'json', data: json };
  }
};
