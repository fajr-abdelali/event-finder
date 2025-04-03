import React from "react";
import { Event } from "../../lib/events";

interface EventCardProps {
  event: Event;
  isSelected?: boolean;
  onClick?: () => void;
}

const EventCard = ({ event, isSelected, onClick }: EventCardProps) => {
  return (
    <div
      className={`p-4 mb-3 rounded-lg shadow-sm border cursor-pointer transition-all ${
        isSelected
          ? "border-purple-500 bg-purple-50"
          : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <h3 className="font-semibold text-gray-900">{event.name}</h3>
      <span
        className={`inline-block mt-1 px-2 py-1 text-xs rounded-md ${
          event.category === "Music"
            ? "bg-blue-100 text-blue-800"
            : event.category === "Tech"
            ? "bg-green-100 text-green-800"
            : event.category === "Art"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-purple-100 text-purple-800"
        }`}
      >
        {event.category}
      </span>
    </div>
  );
};

export default React.memo(EventCard);
