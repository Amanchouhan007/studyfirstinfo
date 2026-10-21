const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Shared single constant for paid counseling fee
export const COUNSELING_PAID_FEE_BDT = 500;

export interface Appointment {
  id: string;
  userId: string;
  counselorId: string;
  counselor?: {
    id: string;
    name: string;
    specializations: string[];
    status: string;
  };
  date: string;
  type: 'FREE' | 'PAID';
  durationMinutes: number;
  fee: number;
  paymentStatus: 'NOT_REQUIRED' | 'PENDING' | 'PAID' | 'REJECTED';
  trxId?: string | null;
  status: string;
}

export interface BookAppointmentPayload {
  counselorId?: string;
  counselorName?: string;
  date: string;
  type: 'FREE' | 'PAID';
  trxId?: string;
}

export const appointmentService = {
  async bookAppointment(data: BookAppointmentPayload): Promise<Appointment> {
    const res = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include'
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to book appointment');
    }
    return res.json();
  },

  async getMyAppointments(): Promise<Appointment[]> {
    const res = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'GET',
      credentials: 'include'
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to load appointments');
    }
    return res.json();
  }
};
