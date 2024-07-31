// EventDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  useEffect(() => {
    axios.get(`/api/events/${id}`)
      .then(res => {
        setEvent(res.data);
        axios.get(`/api/tickets/${id}`)
          .then(res => {
            setTickets(res.data);
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  const handleTicketSale = () => {
    const ticketData = { eventId: id, attendeeName, attendeeEmail, ticketPrice };
    axios.post('/api/tickets', ticketData)
      .then(res => {
        setTickets([...tickets, res.data]);
        setAttendeeName('');
        setAttendeeEmail('');
        setTicketPrice('');
      })
      .catch(err => {
        console.error(err);
      });
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Event Details</h2>
      <p>Name: {event.name}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>

      <h3>Tickets</h3>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>
            {ticket.attendeeName} - {ticket.attendeeEmail} - ${ticket.ticketPrice}
          </li>
        ))}
      </ul>

      <h3>Sell Ticket</h3>
      <form onSubmit={handleTicketSale}>
        <input type="text" placeholder="Attendee Name" value={attendeeName} onChange={(e) => setAttendeeName(e.target.value)} required />
        <br />
        <input type="email" placeholder="Attendee Email" value={attendeeEmail} onChange={(e) => setAttendeeEmail(e.target.value)} required />
        <br />
        <input type="number" placeholder="Ticket Price" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)} required />
        <br />
        <button type="submit">Sell Ticket</button>
      </form>

      <br />
      <Link to="/">Back to Event List</Link>
    </div>
  );
};

export default EventDetails;
