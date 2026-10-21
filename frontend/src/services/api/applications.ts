const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface Application {
  id: string;
  trackingId: string;
  userId: string;
  country: string;
  university: string;
  program: string;
  track: string;
  fee: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateApplicationPayload {
  country: string;
  university: string;
  program: string;
  track?: string;
}

export const applicationService = {
  async submitSelfApplication(data: CreateApplicationPayload): Promise<Application> {
    const res = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include'
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to submit application');
    }
    return res.json();
  },

  async getMyApplications(): Promise<Application[]> {
    const res = await fetch(`${API_BASE_URL}/applications`, {
      method: 'GET',
      credentials: 'include'
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to load applications');
    }
    return res.json();
  }
};
