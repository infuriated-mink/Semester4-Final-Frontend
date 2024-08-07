import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import EventFilter from "./Filters/EventFilter";
import EventSpeakerFilter from "./Filters/EventSpeakerFilter";
import VenueFilter from "./Filters/VenueFilter";

const FilterComponent = () => {
  const [endpoint, setEndpoint] = useState("/api/venues");
  const { data, error, loading } = useFetchData(endpoint);
  const [filteredData, setFilteredData] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({});

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleFilterChange = (e) => {
    setFilterCriteria({
      ...filterCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    if (data) {
      let filtered = data;
      Object.keys(filterCriteria).forEach((key) => {
        if (filterCriteria[key]) {
          filtered = filtered.filter((item) =>
            item[key]
              .toString()
              .toLowerCase()
              .includes(filterCriteria[key].toLowerCase())
          );
        }
      });
      setFilteredData(filtered);
    }
  };

  const handleEndpointChange = (e) => {
    setEndpoint(e.target.value);
    setFilterCriteria({});
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <select onChange={handleEndpointChange} value={endpoint}>
        <option value="/api/venues">Venues</option>
        <option value="/api/events">Events</option>
        <option value="/api/event_speakers">Event Speakers</option>
      </select>

      {endpoint === "/api/venues" && (
        <VenueFilter
          filterCriteria={filterCriteria}
          handleFilterChange={handleFilterChange}
        />
      )}

      {endpoint === "/api/events" && (
        <EventFilter
          filterCriteria={filterCriteria}
          handleFilterChange={handleFilterChange}
        />
      )}

      {endpoint === "/api/event_speakers" && (
        <EventSpeakerFilter
          filterCriteria={filterCriteria}
          handleFilterChange={handleFilterChange}
        />
      )}

      <button onClick={handleFilter}>Filter</button>

      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
