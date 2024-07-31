// EventList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <Link to={`/events/${event._id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-event">Create Event</Link>
    </div>
  );
};

export default EventList;
