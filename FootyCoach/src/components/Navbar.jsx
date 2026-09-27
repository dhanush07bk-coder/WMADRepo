import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Navbar.css";

function Navbar() {

  const [user, setUser] = useState(null);

  const [message, setMessage] = useState("");

  const [showPopup, setShowPopup] = useState(false);


  /* =========================
     CHECK LOGIN STATUS
     ========================= */

  useEffect(() => {

    supabase.auth.getSession().then((result) => {

      const session = result.data.session;

      setUser(session ? session.user : null);

    });


    /* =========================
       WATCH LOGIN / LOGOUT
       ========================= */

    const listener = supabase.auth.onAuthStateChange(
      (event, session) => {

        setUser(session ? session.user : null);

      }
    );


    return () => {

      listener.data.subscription.unsubscribe();

    };

  }, []);


  /* =========================
     LOGOUT
     ========================= */

  async function handleLogout() {

    const { error } = await supabase.auth.signOut();

    if (error) {

      setMessage("Logout failed. Please try again.");

      setShowPopup(true);

      return;
    }


    setUser(null);

    setMessage("You have been logged out successfully! ⚽");

    setShowPopup(true);

  }


  /* =========================
     CLOSE POPUP
     ========================= */

  function closePopup() {

    setShowPopup(false);

  }


  /* =========================
     NAVBAR
     ========================= */

  return (

    <>

      <nav className="navbar">

        <h2>
          ⚽ FootyCoach
        </h2>


        <div className="navbar-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/training">
            Train
          </Link>

          <Link to="/matches">
            Matches
          </Link>

          <Link to="/tournaments">
            Tournaments
          </Link>

        </div>


        {/* =========================
            LOGIN / USER
            ========================= */}

        {user ? (

          <div className="user-section">

            <span>
              👤 {user.email}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        ) : (

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

        )}

      </nav>


      {/* =========================
          POPUP MESSAGE
          ========================= */}

      {showPopup && (

        <div className="popup">

          <div className="popup-content">

            <h3>
              FootyCoach ⚽
            </h3>

            <p>
              {message}
            </p>

            <button onClick={closePopup}>
              OK
            </button>

          </div>

        </div>

      )}

    </>

  );

}

export default Navbar;