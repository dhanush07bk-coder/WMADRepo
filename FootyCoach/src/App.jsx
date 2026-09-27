import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Training from "./pages/Training";
import Matches from "./pages/Matches";
import Tournaments from "./pages/Tournaments";
import Login from "./pages/Login";

import "./App.css";


function App() {

  return (

    <BrowserRouter>

      {/* =========================
          NAVBAR
          ========================= */}

      <Navbar />


      {/* =========================
          WEBSITE PAGES
          ========================= */}

      <Routes>


        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* TRAINING */}

        <Route
          path="/training"
          element={<Training />}
        />


        {/* MATCHES */}

        <Route
          path="/matches"
          element={<Matches />}
        />


        {/* TOURNAMENTS */}

        <Route
          path="/tournaments"
          element={<Tournaments />}
        />


        {/* LOGIN / SIGNUP */}

        <Route
          path="/login"
          element={<Login />}
        />


      </Routes>

    </BrowserRouter>

  );

}

export default App;