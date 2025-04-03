import React from "react";
import { Select } from "antd";
import { eventCategories } from "../../lib/events";

interface EventFilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

const EventFilter = ({ filter, setFilter }: EventFilterProps) => {
  return (
    <Select
      className="w-full mb-4"
      value={filter}
      onChange={setFilter}
      options={eventCategories.map((category) => ({
        value: category,
        label: category === "All" ? "All Categories" : category,
      }))}
    />
  );
};

export default EventFilter;