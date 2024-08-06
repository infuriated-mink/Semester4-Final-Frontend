import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axiosInstance.get(`/event/${id}`);
        setEvent(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!event) {
    return <div>No event found</div>;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{event.eventName}</h1>
      <p>{event.date}</p>
      <p>{event.venueId}</p>
      <img src={event.image} alt="sadness not working..." />
      {/* Render more event details here */}
    </div>
  );
};

export default Event;
