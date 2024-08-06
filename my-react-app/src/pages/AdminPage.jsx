import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const AdminPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    axiosInstance.get('/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  const handleEdit = (id) => {
    // Handle edit functionality
    console.log(`Edit event with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete functionality
    axiosInstance.delete(`/events/${id}`)
      .then(response => {
        setEvents(events.filter(event => event.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the event!", error);
      });
  };

  return (
    <div>
      <div>
        <button>+ Add Event</button>
      </div>
      <div>
        {events.map(event => (
          <div key={event.id}>
            <img src={event.image} alt={event.name} />
            <div>{event.name}</div>
            <div>{event.venue}</div>
            <div>{event.date}</div>
            <button onClick={() => handleEdit(event.id)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;