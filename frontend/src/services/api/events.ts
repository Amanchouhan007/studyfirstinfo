const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface EventRegistrationPayload {
  eventId?: string;
  eventName?: string;
  name: string;
  email: string;
  phone: string;
  country?: string;
  level?: string;
  degree?: string;
  gpa?: string;
  academicScore?: string;
  english?: string;
  englishProficiency?: string;
  venue?: string;
  notes?: string;
}

export interface EventRegistrationResponse {
  message: string;
  registration?: any;
  entryToken?: string;
  isDuplicate?: boolean;
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

export const eventService = {
  async registerForEvent(data: EventRegistrationPayload): Promise<EventRegistrationResponse> {
    return fetchWithAuth(`${API_URL}/event-registrations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },

  async getEvents() {
    return fetchWithAuth(`${API_URL}/events`);
  }
};
