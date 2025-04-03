import React, { useState, useMemo } from "react";
import Map from "../Map/Map";
import EventFilter from "./EventFilter";
import EventList from "./EventList";
import { Event, events as initialEvents } from "../../lib/events";
import { Card, Layout } from "antd";
const { Header, Content, Sider } = Layout;

const EventFinder = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = useMemo(
    () =>
      initialEvents.filter(
        (event) => filter === "All" || event.category === filter
      ),
    [filter]
  );

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
          <Card title="Event Finder" variant="borderless">
            <EventFilter filter={filter} setFilter={setFilter} />
            <EventList
              events={filteredEvents}
              onSelectEvent={setSelectedEvent}
            />

            {selectedEvent && (
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "16px",
                  borderTop: "1px solid #f0f0f0",
                }}
              >
                <h2>Event Details</h2>
                <p>{selectedEvent.name}</p>
                <p>Category: {selectedEvent.category}</p>
                <p>
                  Location: {selectedEvent.lat}, {selectedEvent.lng}
                </p>
                <button
                  style={{
                    background: "#6B48FF",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    marginTop: "12px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
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
