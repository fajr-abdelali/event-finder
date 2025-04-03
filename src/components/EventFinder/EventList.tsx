import React from "react";
import { Badge, List, Space } from "antd";
import { Event } from "../../lib/events";
import EventCard from "../ui/EventCard";

interface EventListProps {
  events: Event[];
  selectedEventId?: number;
  onSelectEvent: (event: Event) => void;
}

const EventList: React.FC<EventListProps> = ({
  events,
  selectedEventId,
  onSelectEvent,
}) => {
  if (events.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No events found matching your criteria.
      </div>
    );
  }

  return (
    <List
      itemLayout="vertical"
      dataSource={events}
      pagination={{
        pageSize: 5,
        responsive: true,
        showSizeChanger: false,
      }}
      renderItem={(event) => (
        <List.Item
          key={event.id}
          onClick={() => onSelectEvent(event)}
          className={`
            cursor-pointer transition-all
            ${
              selectedEventId === event.id
                ? "border-l-4 border-purple-500 bg-purple-50"
                : "hover:bg-gray-50"
            }
          `}
          extra={
            <img
              width={100}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <div className="w-full">
            <h3 className="font-semibold text-gray-900">{event.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span
                className={`inline-block px-2 py-1 text-xs rounded-md ${
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

              <span className="text-sm text-gray-500">
                {new Date(event.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
                {event.endDate &&
                  ` - ${new Date(event.endDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}`}
              </span>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default React.memo(EventList);
