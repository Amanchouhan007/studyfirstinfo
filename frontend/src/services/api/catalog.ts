import { COUNTRIES_DB } from '../../data/countriesData';
import type { CountryRecord } from '../../data/countriesData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Fetch the full countries catalog from the backend.
 * Safely falls back to local COUNTRIES_DB if the backend is unreachable.
 */
export async function fetchCountries(): Promise<Record<string, CountryRecord>> {
  try {
    const response = await fetch(`${API_BASE_URL}/countries`);
    if (!response.ok) {
      return COUNTRIES_DB;
    }

    const apiCountries = await response.json();
    if (!Array.isArray(apiCountries)) {
      return COUNTRIES_DB;
    }
    
    // Fallback dictionary base
    const mergedDb = { ...COUNTRIES_DB };

    // Merge API data over local data if available
    apiCountries.forEach((apiCountry: any) => {
      if (apiCountry?.code) {
        const existing = mergedDb[apiCountry.code.toLowerCase()];
        if (existing) {
          mergedDb[apiCountry.code.toLowerCase()] = {
            ...existing,
            id: apiCountry.id || existing.id,
            name: apiCountry.name || existing.name,
          };
        }
      }
    });

    return mergedDb;
  } catch (error) {
    return COUNTRIES_DB;
  }
}

/**
 * Fetch courses from backend catalog with optional filters.
 */
export async function fetchCourses(params?: {
  search?: string;
  country?: string;
  degreeLevel?: string;
  budgetMax?: number;
  page?: number;
  pageSize?: number;
}): Promise<any> {
  try {
    const query = new URLSearchParams();
    if (params?.search) query.append('search', params.search);
    if (params?.country) query.append('country', params.country);
    if (params?.degreeLevel) query.append('degreeLevel', params.degreeLevel);
    if (params?.budgetMax) query.append('budgetMax', String(params.budgetMax));
    if (params?.page) query.append('page', String(params.page));
    if (params?.pageSize) query.append('pageSize', String(params.pageSize));

    const url = `${API_BASE_URL}/courses${query.toString() ? `?${query.toString()}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}
