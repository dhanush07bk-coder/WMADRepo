import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Training from "./pages/Training";
import Matches from "./pages/Matches";
import Tournaments from "./pages/Tournaments";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/training" element={<Training />} />

        <Route path="/matches" element={<Matches />} />

        <Route
          path="/tournaments"
          element={<Tournaments />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
