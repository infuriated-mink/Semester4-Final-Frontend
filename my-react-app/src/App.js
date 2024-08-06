import "./App.css";
import Events from "./components/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Event from "./components/Event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
