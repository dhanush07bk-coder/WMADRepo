import { useState } from "react";

function Training() {

  // User selections
  const [position, setPosition] = useState("Forward");
  const [goal, setGoal] = useState("Ball Control");

  // Generated session
  const [session, setSession] = useState(null);


  // Training plans
  const trainingPlans = {

    Forward: {
      "Ball Control": "Close control and first-touch drills",
      Shooting: "Finishing, volleys and shooting drills",
      Fitness: "Sprint and acceleration training"
    },

    Midfielder: {
      "Ball Control": "First touch and ball retention drills",
      Shooting: "Long-range shooting and finishing",
      Fitness: "Endurance and running drills"
    },

    Defender: {
      "Ball Control": "First touch and passing drills",
      Shooting: "Defensive clearance and long passing",
      Fitness: "Agility and strength training"
    },

    Goalkeeper: {
      "Ball Control": "Footwork and ball distribution",
      Shooting: "Shot-stopping practice",
      Fitness: "Reflex and agility training"
    }

  };


  // Generate training session
  function generateSession() {

    const training = trainingPlans[position][goal];

    setSession(training);
  }


  return (
    <div className="page">

      <h1>⚽ FootyCoach Training</h1>

      <p>
        Build a training session based on your position
        and football goal.
      </p>


      {/* TRAINING FORM */}

      <div className="training-form">

        <h2>Create Your Training Session</h2>


        {/* POSITION */}

        <label>
          Your Position
        </label>

        <select
          value={position}
          onChange={(event) =>
            setPosition(event.target.value)
          }
        >

          <option value="Forward">
            Forward
          </option>

          <option value="Midfielder">
            Midfielder
          </option>

          <option value="Defender">
            Defender
          </option>

          <option value="Goalkeeper">
            Goalkeeper
          </option>

        </select>


        {/* TRAINING GOAL */}

        <label>
          Training Goal
        </label>

        <select
          value={goal}
          onChange={(event) =>
            setGoal(event.target.value)
          }
        >

          <option value="Ball Control">
            Ball Control
          </option>

          <option value="Shooting">
            Shooting
          </option>

          <option value="Fitness">
            Fitness
          </option>

        </select>


        <br />

        <button onClick={generateSession}>
          Generate Training
        </button>

      </div>


      {/* GENERATED SESSION */}

      {session !== null && (

        <div className="selected-session">

          <h2>🔥 Your Training Session</h2>

          <p>
            <strong>Position:</strong> {position}
          </p>

          <p>
            <strong>Goal:</strong> {goal}
          </p>

          <p>
            <strong>Session:</strong> {session}
          </p>


          <h3>Today's Training</h3>

          <ul>

            <li>
              Warm-up - 10 minutes
            </li>

            <li>
              Main drills - 20 minutes
            </li>

            <li>
              Position training - 15 minutes
            </li>

            <li>
              Cool down - 10 minutes
            </li>

          </ul>

        </div>

      )}


      {/* BASIC DRILLS */}

      <h2>Football Drills</h2>

      <div className="card-container">


        <div className="card">

          <h2>⚽ Ball Control</h2>

          <p>
            Improve your first touch and close control.
          </p>

          <button>
            Start Drill
          </button>

        </div>


        <div className="card">

          <h2>🏃 Speed</h2>

          <p>
            Improve acceleration and sprint speed.
          </p>

          <button>
            Start Drill
          </button>

        </div>


        <div className="card">

          <h2>🎯 Shooting</h2>

          <p>
            Practice finishing and shooting accuracy.
          </p>

          <button>
            Start Drill
          </button>

        </div>


        <div className="card">

          <h2>💪 Fitness</h2>

          <p>
            Improve stamina, strength and agility.
          </p>

          <button>
            Start Drill
          </button>

        </div>

      </div>


      {/* NUTRITION */}

      <div className="card nutrition">

        <h2>🥗 Football Nutrition</h2>

        <p>
          Fuel your body for better football performance.
        </p>

        <ul>

          <li>
            💧 Drink plenty of water
          </li>

          <li>
            🍚 Eat carbohydrates for energy
          </li>

          <li>
            🥚 Eat protein for recovery
          </li>

          <li>
            🥗 Eat fruits and vegetables
          </li>

        </ul>

      </div>

    </div>
  );
}

export default Training;