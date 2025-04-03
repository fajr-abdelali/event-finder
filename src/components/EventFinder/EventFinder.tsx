import React, { useState, useMemo } from "react";
import Map from "../Map/Map";
import EventFilter from "./EventFilter";
import DateRangeFilter from "./DateRangeFilter";
import EventList from "./EventList";
import { Event, events as initialEvents } from "../../lib/events";
import { Card, Flex, Layout } from "antd";
import dayjs, { Dayjs } from "dayjs";
import EventDetails from "./EventDetails"; // Make sure to import EventDetails
const { Content, Sider } = Layout;

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

    if (dateRange[0] && dateRange[1]) {
      const startDate = dateRange[0].startOf("day");
      const endDate = dateRange[1].endOf("day");

      result = result.filter((event) => {
        const eventStart = dayjs(event.startDate).startOf("day");
        const eventEnd = dayjs(event.endDate || event.startDate).endOf("day");

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

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Overlay for when details are open */}
      <div className={`overlay ${selectedEvent ? 'visible' : ''}`} onClick={handleCloseDetails} />
      
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
            <Flex gap="middle" align="start">
              <EventFilter filter={filter} setFilter={setFilter} />
              <DateRangeFilter
                dateRange={dateRange}
                setDateRange={setDateRange}
              />
            </Flex>
            <EventList
              events={filteredEvents}
              onSelectEvent={setSelectedEvent}
              selectedEventId={selectedEvent?.id}
            />
          </Card>
        </Sider>
      </Content>

      {/* Slide-up panel for event details */}
      <div className={`event-details-panel ${selectedEvent ? 'open' : ''}`}>
        {selectedEvent && (
          <EventDetails event={selectedEvent} onClose={handleCloseDetails} />
        )}
      </div>
    </Layout>
  );
};

export default EventFinder;