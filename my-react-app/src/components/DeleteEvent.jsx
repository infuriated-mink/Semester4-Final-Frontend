import React from "react";
import axiosInstance from "../api/axiosInstance";

const DeleteEvent = ({ id, refreshEvents, setError }) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/event/${id}`);
      refreshEvents(); // Call refreshEvents to update the event list
    } catch (err) {
      setError(err);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteEvent;
