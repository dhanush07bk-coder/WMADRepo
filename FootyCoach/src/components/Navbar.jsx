import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>⚽ FootyCoach</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/training">Train</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/tournaments">Tournaments</Link>
      </div>

      <button className="login-btn">
        Login
      </button>

    </nav>
  );
}

export default Navbar;