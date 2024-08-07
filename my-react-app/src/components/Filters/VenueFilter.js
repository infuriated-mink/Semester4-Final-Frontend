import React from "react";

const VenueFilter = ({ filterCriteria, handleFilterChange }) => (
  <div>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={filterCriteria.name || ""}
      onChange={handleFilterChange}
    />
    {/* Add more venue-specific filters here */}
  </div>
);

export default VenueFilter;
