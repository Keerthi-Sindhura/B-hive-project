import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Space } from '../types';
import rawSpaceData from '../data.json';

// Type assertion function to validate and transform the data
const validateSpaceData = (data: any[]): Space[] => {
  console.log(data)
  return data.map(item => ({
    id: item.id,
    name: item.name,
    address: item.address,
    latitude: item.latitude,
    longitude: item.longitude,
    google_maps_url: item.google_maps_url || undefined,
    city: item.city,
    state: item.state,
    country: item.country,
    postal_code: item.postal_code,
    description: item.description,
    rules: item.rules,
    amenities: item.amenities,
    images: item.images,
    working_hours_start: item.working_hours_start,
    working_hours_end: item.working_hours_end,
    contact_person_name: item.contact_person_name,
    facilities: item.facilities,
    is_active: item.is_active,
    is_day_pass_enabled: item.is_day_pass_enabled,
    day_pass_price: item.day_pass_price,
    day_pass_discounts_percentage: item.day_pass_discounts_percentage,
    manager_id: item.manager_id
  }));
};

interface SpaceState {
  spaces: Space[];
  loading: boolean;
  error: string | null;
  selectedSpace: Space | null;
}

interface SpaceActions {
  setSpaces: (spaces: Space[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSelectedSpace: (space: Space | null) => void;
  fetchSpaces: () => Promise<void>;
}

type SpaceStore = SpaceState & SpaceActions;

const useSpaceStore = create<SpaceStore>()(
  devtools(
    (set) => ({
      spaces: [],
      loading: false,
      error: null,
      selectedSpace: null,
      setSpaces: (spaces) => set({ spaces }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      setSelectedSpace: (space) => set({ selectedSpace: space }),
      fetchSpaces: async () => {
        set({ loading: true });
        try {
          // Transform and validate the imported data
          const validatedData = validateSpaceData(rawSpaceData);
          set({ spaces: validatedData, loading: false });
        } catch (error) {
          set({ error: (error as Error).message, loading: false });
          console.error('Error processing space data:', error);
        }
      },
    }),
    {
      name: 'space-store',
    }
  )
);

export default useSpaceStore;