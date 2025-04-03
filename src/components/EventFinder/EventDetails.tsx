import React from 'react';
import { Event } from '../../lib/events';
import { Button } from 'antd';
import dayjs from 'dayjs';

interface EventDetailsProps {
  event: Event;
  onClose: () => void;
}

const EventDetails = ({ event, onClose }: EventDetailsProps) => {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Event Details</h2>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
        {event.description && (
          <p className="text-gray-700">{event.description}</p>
        )}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium text-gray-600">Category:</span>
            <span className="ml-2">{event.category}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Date:</span>
            <span className="ml-2">
              {dayjs(event.startDate).format("MMM D, YYYY")}
              {event.endDate && ` - ${dayjs(event.endDate).format("MMM D, YYYY")}`}
            </span>
          </div>
          <div className="col-span-2">
            <span className="font-medium text-gray-600">Location:</span>
            <span className="ml-2">{event.lat.toFixed(4)}, {event.lng.toFixed(4)}</span>
          </div>
        </div>
        <Button 
          type="primary" 
          className="mt-4" 
          onClick={onClose}
        >
          Close Details
        </Button>
      </div>
    </div>
  );
};

export default React.memo(EventDetails);