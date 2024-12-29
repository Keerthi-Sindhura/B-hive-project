export interface DayPassDiscount {
    value: number;
    message: string;
  }
  
  export interface DayPassDiscounts {
    [key: string]: DayPassDiscount;
  }
  
  export interface Space {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    google_maps_url?: string;  // Made optional with ?
    city: string;
    state: string;
    country: string;
    postal_code: string;
    description: string | null;
    rules: string | null;
    amenities: string[];
    images: string[];
    working_hours_start: string;
    working_hours_end: string;
    contact_person_name?: string;  // Made optional
    facilities: string[] | null;
    is_active: boolean;
    is_day_pass_enabled: boolean;
    day_pass_price: number;
    day_pass_discounts_percentage: DayPassDiscounts;
    manager_id: string | null;
  }
  
  export type Amenity = string;
  
  // You might want to add these types as well for future use
  export interface LocationInfo {
    latitude: number;
    longitude: number;
    city: string;
    state: string;
    country: string;
    postal_code: string;
  }
  
  export interface WorkingHours {
    start: string;
    end: string;
  }