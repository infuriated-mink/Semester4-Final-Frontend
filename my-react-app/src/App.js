import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Event from "./pages/Event";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
