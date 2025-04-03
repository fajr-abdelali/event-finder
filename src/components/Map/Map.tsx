import React from "react";
import { useMap } from "./useMap";
import { Event } from "../../lib/events";
import "../../styles/map.css";

interface MapProps {
  events: Event[];
}

const Map = ({ events }: MapProps) => {
  const { mapContainer, isLoaded } = useMap(events);

  return (
    <div ref={mapContainer} className="map-container">
      {!isLoaded && <div className="map-loading">Loading map...</div>}
    </div>
  );
};

export default React.memo(Map);
