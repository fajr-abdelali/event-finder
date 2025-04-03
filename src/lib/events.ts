import eventsData from './events.json';

export interface Event {
  id: number;
  name: string;
  lat: number;
  lng: number;
  category: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export const eventCategories = eventsData.categories;
export const events: Event[] = eventsData.events;