import "./App.css";
import Events from "./pages/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Event from "./pages/Event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
