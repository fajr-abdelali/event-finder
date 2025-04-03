import React from 'react';
import { Event } from '../../lib/events';
import { Button } from 'antd';

interface EventDetailsProps {
  event: Event;
  onClose: () => void;
}

const EventDetails = ({ event, onClose }: EventDetailsProps) => {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Event Details</h2>
      <div className="space-y-2">
        <p className="text-gray-900 font-medium">{event.name}</p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Category:</span> {event.category}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Location:</span> {event.lat.toFixed(4)}, {event.lng.toFixed(4)}
        </p>
      </div>
      <Button 
        type="primary" 
        className="mt-4" 
        onClick={onClose}
      >
        Close Details
      </Button>
    </div>
  );
};

export default React.memo(EventDetails);