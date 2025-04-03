export interface Event {
  id: number;
  name: string;
  lat: number;
  lng: number;
  category: string;
}

export const eventCategories = [
  "All", "Music", "Tech", "Art", "History", 
  "Family", "Food", "Sports", "Seasonal"
];

export const events: Event[] = [
  { id: 1, name: "Classical Concert at Sainte-Chapelle", lat: 48.8558, lng: 2.3450, category: "Music" },
  { id: 2, name: "Startup Demo Day at Station F", lat: 48.8303, lng: 2.3684, category: "Tech" },
  { id: 3, name: "Louvre Night Exhibition", lat: 48.8606, lng: 2.3376, category: "Art" },
  { id: 4, name: "Versailles Palace Tour", lat: 48.8049, lng: 2.1204, category: "History" },
  { id: 5, name: "Disneyland Paris Show", lat: 48.8722, lng: 2.7758, category: "Family" },
  { id: 6, name: "Montmartre Art Workshop", lat: 48.8867, lng: 2.3431, category: "Art" },
  { id: 7, name: "Le Marais Food Tour", lat: 48.8554, lng: 2.3625, category: "Food" },
  { id: 8, name: "Fontainebleau Forest Hike", lat: 48.4025, lng: 2.6997, category: "Sports" },
  { id: 9, name: "Champagne Tasting in Reims", lat: 49.2583, lng: 4.0317, category: "Food" },
  { id: 10, name: "Paris Plages Festival", lat: 48.8556, lng: 2.3692, category: "Seasonal" },
  { id: 11, name: "Tour de France Final Stage", lat: 48.8429, lng: 2.3197, category: "Sports" }
];