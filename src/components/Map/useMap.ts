import { useEffect, useRef, useState, useMemo } from "react";
import maplibregl from "maplibre-gl";
import { Event } from "../../lib/events";

export const useMap = (events: Event[]) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);

  const mapCenter = useMemo(() => {
    if (events.length === 0) return [2.3522, 48.8566];
    const totalLat = events.reduce((sum, event) => sum + event.lat, 0);
    const totalLng = events.reduce((sum, event) => sum + event.lng, 0);
    return [totalLng / events.length, totalLat / events.length];
  }, [events]);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    mapInstance.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://api.maptiler.com/maps/streets/style.json?key=TkWUcwmol2XyDAlX15uh",
      center: [2.3522, 48.8566],
      zoom: 10,
    });

    mapInstance.current.on("load", () => setIsLoaded(true));

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, [mapCenter]);

  useEffect(() => {
    if (!mapInstance.current) return;

    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    events.forEach((event) => {
      const marker = new maplibregl.Marker({ color: "#6B48FF" })
        .setLngLat([event.lng, event.lat])
        .setPopup(new maplibregl.Popup({ className: "map-popup" })
          .setHTML(`<div class="popup-content">
            <h3>${event.name}</h3>
            <p>${event.category}</p>
          </div>`))
        .addTo(mapInstance.current!);

      markersRef.current.push(marker);
    });

    if (events.length > 0) {
      const bounds = new maplibregl.LngLatBounds();
      events.forEach(event => bounds.extend([event.lng, event.lat]));
      mapInstance.current.fitBounds(bounds, { padding: 50, maxZoom: 14 });
    }
  }, [events]);

  return { mapContainer, isLoaded };
};