import React, { useState, useMemo } from "react";
import Map from "../Map/Map";
import EventFilter from "./EventFilter";
import EventList from "./EventList";
import { Event, events as initialEvents } from "../../lib/events";

const EventFinder = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = useMemo(
    () => initialEvents.filter(event => filter === "All" || event.category === filter),
    [filter]
  );

  return (
    <div className="event-finder-container">
      <div className="map-section">
        <Map events={filteredEvents} />
      </div>

      <div className="sidebar">
        <h1>Event Finder</h1>
        <EventFilter filter={filter} setFilter={setFilter} />
        <EventList events={filteredEvents} onSelectEvent={setSelectedEvent} />

        {selectedEvent && (
          <div className="event-details">
            <h2>Event Details</h2>
            <p>{selectedEvent.name}</p>
            <p>Category: {selectedEvent.category}</p>
            <p>Location: {selectedEvent.lat}, {selectedEvent.lng}</p>
            <button className="close-button" onClick={() => setSelectedEvent(null)}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventFinder;