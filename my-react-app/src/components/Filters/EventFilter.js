import React from "react";

const EventFilter = ({ filterCriteria, handleFilterChange }) => (
  <div>
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={filterCriteria.title || ""}
      onChange={handleFilterChange}
    />
    {/* Add more event-specific filters here */}
  </div>
);

export default EventFilter;
