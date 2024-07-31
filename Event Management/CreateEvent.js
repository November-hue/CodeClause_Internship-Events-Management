import React, { useState } from 'react';

function EventCreationForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    

  
    const newEvent = {
      title,
      date,
      location,
     
      tickets: [],
      attendees: []
    };

   
    addEvent(newEvent);

    
    setTitle('');
    setDate('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event Title" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventCreationForm;
