import React from "react";

const EventSpeakerFilter = ({ filterCriteria, handleFilterChange }) => (
  <div>
    <input
      type="text"
      name="speaker_name"
      placeholder="Speaker Name"
      value={filterCriteria.speaker_name || ""}
      onChange={handleFilterChange}
    />
    {/* Add more event speaker-specific filters here */}
  </div>
);

export default EventSpeakerFilter;
