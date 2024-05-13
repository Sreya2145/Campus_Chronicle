import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const EventCalendar = () => {
  // Sample events data for April
  const events = [
    {
      title: "Guest Lecture on React.js",
      start: '2024-04-10', // Start date of the event
      end: '2024-04-10',   // End date of the event (optional)
      color: '#FF5733',     // Color code for the event
    },
    {
      title: 'College Fest - TechFest',
      start: '2024-04-15',
      end: '2024-04-17',
      color: '#FFC300',
    },
    {
      title: 'Workshop on Machine Learning',
      start: '2024-04-20',
      end: '2024-04-20',
      color: '#5431A4',
    },
  ];

  return (
    <div>

      <h2 style={{ textAlign: 'center' ,marginTop: '75px', fontSize: '250%', color: '#1C1899' }}>Event Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events} 
        eventContent={renderEventContent}
      />
    </div>
  );
};

// Custom event rendering function to apply styles and color coding
const renderEventContent = (eventInfo) => {
  return (
    <div style={{ backgroundColor: eventInfo.event.backgroundColor, padding: '10px', borderRadius: '5px' }}>
      <b>{eventInfo.timeText}</b> {eventInfo.event.title}
    </div>
  );
};

export default EventCalendar;

