import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  /* =========================
     TRAINING TIPS
     ========================= */

  const trainingTips = [
    "Keep your first touch close to your body.",
    "Practice passing with both feet.",
    "Work on your speed and acceleration.",
    "Stay hydrated before and after training.",
    "Practice finishing from different angles."
  ];

  const [tipNumber, setTipNumber] = useState(0);


  /* =========================
     CHANGE TRAINING TIP
     ========================= */

  function nextTip() {

    if (tipNumber === trainingTips.length - 1) {

      setTipNumber(0);

    } else {

      setTipNumber(tipNumber + 1);

    }

  }


  return (

    <div className="page">

      {/* =========================
          WELCOME SECTION
          ========================= */}

      <h1>
        Welcome to FootyCoach ⚽
      </h1>

      <p style={{ fontSize: "18px", color: "#166534" }}>
        Your complete football training and match platform.
      </p>


      {/* =========================
          QUICK ACTIONS
          ========================= */}

      <div className="home-content">

        <div className="card">

          <h2>
            ⚽ Train Better
          </h2>

          <p>
            Improve your football skills with
            training sessions, drills and fitness plans.
          </p>

          <Link to="/training">
            <button>
              Start Training
            </button>
          </Link>

        </div>


        <div className="card">

          <h2>
            🏟️ Find Matches
          </h2>

          <p>
            Follow live matches, watch highlights
            and discover nearby football games.
          </p>

          <Link to="/matches">
            <button>
              View Matches
            </button>
          </Link>

        </div>


        <div className="card">

          <h2>
            🏆 Compete
          </h2>

          <p>
            Find tournaments and register yourself
            or your team.
          </p>

          <Link to="/tournaments">
            <button>
              Find Tournaments
            </button>
          </Link>

        </div>

      </div>


      {/* =========================
          DAILY TRAINING TIP
          ========================= */}

      <div className="selected-session">

        <h2>
          💡 Training Tip
        </h2>

        <p>
          {trainingTips[tipNumber]}
        </p>

        <button onClick={nextTip}>
          Next Tip
        </button>

      </div>


      {/* =========================
          FOOTYCOACH FEATURES
          ========================= */}

      <div className="card-container">

        <div className="card">

          <h2>
            🏃 Training
          </h2>

          <p>
            Get football drills and practice
            sessions based on your goals.
          </p>

        </div>


        <div className="card">

          <h2>
            🎥 Highlights
          </h2>

          <p>
            Watch match highlights and learn
            from real football situations.
          </p>

        </div>


        <div className="card">

          <h2>
            🥗 Nutrition
          </h2>

          <p>
            Learn about football-friendly
            meals and hydration.
          </p>

        </div>

      </div>

    </div>

  );
}

export default Home;