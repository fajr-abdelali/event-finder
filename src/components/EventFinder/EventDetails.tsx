import React from 'react';
import { Event } from '../../lib/events';
import { Button, Card } from 'antd';
import dayjs from 'dayjs';
import { CloseOutlined } from '@ant-design/icons';

interface EventDetailsProps {
  event: Event;
  onClose: () => void;
}

const EventDetails = ({ event, onClose }: EventDetailsProps) => {
  return (
    <div>
      {/* <h2 className="text-xl font-bold mb-4 text-gray-900">Event Details <span className='' onClick={onClose}>X</span> </h2> */}
      <Card title='Event Details' extra={<a href="#" onClick={onClose}> <CloseOutlined /> </a>} >
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
          block
        >
          More details
        </Button>
      </div>
      </Card>
    </div>
  );
};

export default React.memo(EventDetails);