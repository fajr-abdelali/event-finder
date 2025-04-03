import React from "react";
import Card from "../ui/Card";
import { Event } from "../../lib/events";

interface EventListProps {
  events: Event[];
  onSelectEvent: (event: Event) => void;
}

const EventList = ({ events, onSelectEvent }: EventListProps) => {
  if (events.length === 0) {
    return <p className="no-events">No events found for this category.</p>;
  }

  return (
    <div className="event-list">
      {events.map((event) => (
        <Card key={event.id} onClick={() => onSelectEvent(event)}>
          <h3>{event.name}</h3>
          <span className="event-category">{event.category}</span>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
