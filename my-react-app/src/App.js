import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Event from "./pages/Event";
import Events from "./pages/Events";

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
