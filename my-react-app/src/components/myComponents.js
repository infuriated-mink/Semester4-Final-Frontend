import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/events");
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axiosInstance.get("/attendees");
    //         setData(response.data);
    //       } catch (err) {
    //         setError(err);
    //       }
    //     };

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axiosInstance.get("/speakers");
    //         setData(response.data);
    //       } catch (err) {
    //         setError(err);
    //       }
    //     };

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axiosInstance.get("/events_speakers");
    //         setData(response.data);
    //       } catch (err) {
    //         setError(err);
    //       }
    //     };

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axiosInstance.get("/venues");
    //         setData(response.data);
    //       } catch (err) {
    //         setError(err);
    //       }
    //     };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
