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
