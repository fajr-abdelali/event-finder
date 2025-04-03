import React from "react";
import { eventCategories } from "../../lib/events";

interface EventFilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

const EventFilter = ({ filter, setFilter }: EventFilterProps) => {
  return (
    <select
      className="event-filter"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      {eventCategories.map((category) => (
        <option key={category} value={category}>
          {category === "All" ? "All Categories" : category}
        </option>
      ))}
    </select>
  );
};

export default EventFilter;
