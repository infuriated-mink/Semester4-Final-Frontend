import React from "react";
import FilterComponent from "../components/filterComponent";

const LandingPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <header>
        <h1>Welcome to the Data Filter Application</h1>
      </header>
      <main>
        <FilterComponent />
      </main>
    </div>
  );
};

export default LandingPage;
