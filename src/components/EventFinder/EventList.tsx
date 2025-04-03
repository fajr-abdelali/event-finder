import React from "react";
import {Card} from 'antd'
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
        <Card title={event.name} key={event.id} onClick={() => onSelectEvent(event)}>
          <span className="event-category">{event.category}</span>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
