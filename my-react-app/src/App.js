import "./App.css";
import Events from "./components/Events";
import AdminPage from "./pages/AdminPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Events />} />
    <Route path="/admin" element={<AdminPage />} />
  </Routes>
  );
}

export default App;
