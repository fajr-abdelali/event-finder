import React, { useState, useMemo } from "react";
import Map from "../Map/Map";
import EventFilter from "./EventFilter";
import DateRangeFilter from "./DateRangeFilter";
import EventList from "./EventList";
import { Event, events as initialEvents } from "../../lib/events";
import { Card, Flex, Layout } from "antd";
import dayjs, { Dayjs } from "dayjs";
const { Header, Content, Sider } = Layout;

const EventFinder = () => {
  const [filter, setFilter] = useState<string>("All");
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = useMemo(() => {
    let result = initialEvents.filter(
      (event) => filter === "All" || event.category === filter
    );

    // Apply date filter if dates are selected
    if (dateRange[0] && dateRange[1]) {
      const startDate = dateRange[0].startOf("day");
      const endDate = dateRange[1].endOf("day");

      result = result.filter((event) => {
        const eventStart = dayjs(event.startDate).startOf("day");
        const eventEnd = dayjs(event.endDate || event.startDate).endOf("day");

        // Check if event overlaps with selected date range
        return (
          (eventStart.isAfter(startDate) && eventStart.isBefore(endDate)) ||
          (eventEnd.isAfter(startDate) && eventEnd.isBefore(endDate)) ||
          (eventStart.isBefore(startDate) && eventEnd.isAfter(endDate)) ||
          eventStart.isSame(startDate) ||
          eventEnd.isSame(endDate)
        );
      });
    }

    return result;
  }, [filter, dateRange]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: 1 }}>
          <Map events={filteredEvents} />
        </div>
        <Sider
          width={400}
          style={{
            background: "#fff",
            boxShadow: "-2px 0 8px 0 rgba(0,0,0,0.1)",
            height: "96vh",
            overflow: "scroll",
            position: "absolute",
            right: "3vh",
            top: "3vh",
            bottom: "3vh",
            border: "1px solid #e6e6e6",
            borderRadius: "15px",
          }}
        >
          <Card title="Event Finder">
            <Flex gap="middle" align="start" >
              <EventFilter filter={filter} setFilter={setFilter} />
              <DateRangeFilter
                dateRange={dateRange}
                setDateRange={setDateRange}
              />
            </Flex>
            <EventList
              events={filteredEvents}
              onSelectEvent={setSelectedEvent}
            />

            {selectedEvent && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold mb-4">Event Details</h2>
                <p className="font-medium">{selectedEvent.name}</p>
                <p className="text-sm">
                  <span className="font-medium">Category:</span>{" "}
                  {selectedEvent.category}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Date:</span>{" "}
                  {dayjs(selectedEvent.startDate).format("MMMM D, YYYY")}
                  {selectedEvent.endDate &&
                    ` - ${dayjs(selectedEvent.endDate).format("MMMM D, YYYY")}`}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Location:</span>{" "}
                  {selectedEvent.lat.toFixed(4)}, {selectedEvent.lng.toFixed(4)}
                </p>
                <button
                  className="mt-4 bg-primary text-white border-none px-4 py-2 rounded cursor-pointer"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close Details
                </button>
              </div>
            )}
          </Card>
        </Sider>
      </Content>
    </Layout>
  );
};

export default EventFinder;
