import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import EditEventForm from "../components/EditEventForm";
import { Button } from "react-bootstrap";
import DeleteEvent from "../components/DeleteEvent"; // Import DeleteEvent component

const LandingPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const fetchEvents = async () => {
    try {
      const response = await axiosInstance.get("/events");
      setEvents(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setSelectedEvent(null);
  };

  const refreshEvents = () => {
    fetchEvents();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Events</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.eventId}>
              {event.eventName} - {event.venue?.venueName} - {event.date}
              <img src={event.image} alt="Event image" width={"100px"} />
              <Button onClick={() => handleEdit(event)}>Edit</Button>
              <DeleteEvent
                id={event.eventId}
                refreshEvents={refreshEvents}
                setError={setError}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
      {selectedEvent && (
        <EditEventForm
          show={showEditForm}
          handleClose={handleCloseEditForm}
          eventId={selectedEvent.eventId}
          refreshEvents={refreshEvents}
        />
      )}
    </div>
  );
};

export default LandingPage;
