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
      throw new Error(`API Error: ${response.status}`);
    }
    
    // We expect an array from the DB. But frontend uses a dictionary mapping for `COUNTRIES_DB`.
    // The DB only stores normalized data, leaving out rich presentation data.
    // For read-only safety, if we reach the DB, we can map its records back into the frontend structure.
    // HOWEVER, to preserve all existing visual presentation fields (images, marketing text, SVGs) 
    // without completely breaking the UI, we merge the API data over the local data where matched.

    const apiCountries = await response.json();
    
    // Fallback dictionary base
    const mergedDb = { ...COUNTRIES_DB };

    // Merge API data over local data if available
    apiCountries.forEach((apiCountry: any) => {
      const existing = mergedDb[apiCountry.code.toLowerCase()];
      if (existing) {
        // We have API data for this country, merge only relational identifiers safely
        mergedDb[apiCountry.code.toLowerCase()] = {
          ...existing,
          id: apiCountry.id, // Update to official UUID if needed
          name: apiCountry.name || existing.name,
        };
      }
    });

    return mergedDb;
  } catch (error) {
    console.warn('Backend API unavailable. Falling back to local COUNTRIES_DB.', error);
    return COUNTRIES_DB;
  }
}
