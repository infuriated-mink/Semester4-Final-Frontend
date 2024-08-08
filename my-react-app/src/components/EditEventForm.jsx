import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Modal, Button, Form } from "react-bootstrap";
import handleDelete from "./DeleteEvent";

const EditEventForm = ({ show, handleClose, eventId, refreshEvents }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axiosInstance.get(`/events/${eventId}`);
        setEvent(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  const handleSave = async () => {
    try {
      setLoading(true);
      await axiosInstance.put(`/events/${eventId}`, event);
      refreshEvents(); // Call refreshEvents to update the event list
      handleClose(); // Close the modal on successful save
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (!show) {
    return null;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              value={event?.eventName || ""}
              onChange={(e) =>
                setEvent({ ...event, eventName: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formEventVenue">
            <Form.Label>Venue</Form.Label>
            <Form.Control
              type="text"
              value={event?.venue?.venueName || ""}
              onChange={(e) =>
                setEvent({
                  ...event,
                  venue: { ...event.venue, venueName: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="formEventDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={event?.date || ""}
              onChange={(e) => setEvent({ ...event, date: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditEventForm;
