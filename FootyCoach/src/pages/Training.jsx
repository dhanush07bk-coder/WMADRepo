import { useState } from "react";

function Training() {

  /* =========================
     USER SELECTIONS
     ========================= */

  const [position, setPosition] = useState("Forward");

  const [goal, setGoal] = useState("Ball Control");


  /* =========================
     GENERATED SESSION
     ========================= */

  const [session, setSession] = useState(null);


  /* =========================
     SELECTED DRILL
     ========================= */

  const [selectedDrill, setSelectedDrill] = useState(null);


  /* =========================
     ADD DRILL FORM
     ========================= */

  const [drillName, setDrillName] = useState("");

  const [drillDescription, setDrillDescription] = useState("");

  const [drillDuration, setDrillDuration] = useState("10");


  /* =========================
     DRILLS
     ========================= */

  const [drills, setDrills] = useState([

    {
      name: "Ball Control",
      icon: "⚽",
      description:
        "Improve your first touch and close control.",
      duration: "10 minutes"
    },

    {
      name: "Speed Sprint",
      icon: "🏃",
      description:
        "Improve acceleration and sprint speed.",
      duration: "15 minutes"
    },

    {
      name: "Shooting Practice",
      icon: "🎯",
      description:
        "Practice finishing and shooting accuracy.",
      duration: "15 minutes"
    },

    {
      name: "Fitness Circuit",
      icon: "💪",
      description:
        "Improve stamina, strength and agility.",
      duration: "20 minutes"
    }

  ]);


  /* =========================
     TRAINING PLANS
     ========================= */

  const trainingPlans = {

    Forward: {

      "Ball Control":
        "Close control and first-touch drills",

      Shooting:
        "Finishing, volleys and shooting drills",

      Fitness:
        "Sprint and acceleration training"

    },


    Midfielder: {

      "Ball Control":
        "First touch and ball retention drills",

      Shooting:
        "Long-range shooting and finishing",

      Fitness:
        "Endurance and running drills"

    },


    Defender: {

      "Ball Control":
        "First touch and passing drills",

      Shooting:
        "Defensive clearance and long passing",

      Fitness:
        "Agility and strength training"

    },


    Goalkeeper: {

      "Ball Control":
        "Footwork and ball distribution",

      Shooting:
        "Shot-stopping practice",

      Fitness:
        "Reflex and agility training"

    }

  };


  /* =========================
     GENERATE SESSION
     ========================= */

  function generateSession() {

    const training =
      trainingPlans[position][goal];

    setSession(training);

  }


  /* =========================
     START DRILL
     ========================= */

  function startDrill(drill) {

    setSelectedDrill(drill);

  }


  /* =========================
     CLOSE DRILL
     ========================= */

  function closeDrill() {

    setSelectedDrill(null);

  }


  /* =========================
     ADD CUSTOM DRILL
     ========================= */

  function addDrill(event) {

    event.preventDefault();


    if (
      drillName === "" ||
      drillDescription === ""
    ) {

      alert("⚠️ Please enter the drill details.");

      return;

    }


    const newDrill = {

      name: drillName,

      icon: "⚽",

      description: drillDescription,

      duration: drillDuration + " minutes"

    };


    setDrills([...drills, newDrill]);


    setDrillName("");

    setDrillDescription("");

    setDrillDuration("10");


    alert("✅ New drill added!");

  }


  return (

    <div className="page">


      {/* =========================
          PAGE TITLE
          ========================= */}

      <h1>
        ⚽ FootyCoach Training
      </h1>

      <p>
        Build your own football training session
        based on your position and goals.
      </p>


      {/* =========================
          TRAINING FORM
          ========================= */}

      <div className="training-form">

        <h2>
          Create Your Training Session
        </h2>


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
          🔥 Generate Training
        </button>

      </div>


      {/* =========================
          GENERATED SESSION
          ========================= */}

      {session !== null && (

        <div className="selected-session">

          <h2>
            🔥 Your Training Session
          </h2>

          <p>
            <strong>Position:</strong> {position}
          </p>

          <p>
            <strong>Goal:</strong> {goal}
          </p>

          <p>
            <strong>Focus:</strong> {session}
          </p>


          <h3>
            Today's Training
          </h3>

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


      {/* =========================
          FOOTBALL DRILLS
          ========================= */}

      <h2>
        ⚽ Football Drills
      </h2>

      <p>
        Select a drill to see how to perform it.
      </p>


      <div className="card-container">

        {drills.map((drill, index) => (

          <div
            className="card"
            key={index}
          >

            <h2>
              {drill.icon} {drill.name}
            </h2>

            <p>
              {drill.description}
            </p>

            <p>
              ⏱️ {drill.duration}
            </p>

            <button
              onClick={() => startDrill(drill)}
            >
              ▶ Start Drill
            </button>

          </div>

        ))}

      </div>


      {/* =========================
          SELECTED DRILL
          ========================= */}

      {selectedDrill !== null && (

        <div className="selected-session">

          <h2>
            {selectedDrill.icon} {selectedDrill.name}
          </h2>

          <p>
            <strong>Duration:</strong>{" "}
            {selectedDrill.duration}
          </p>

          <p>
            <strong>How to do it:</strong>
          </p>

          <p>
            {selectedDrill.description}
          </p>

          <ul>

            <li>
              Start slowly and focus on technique.
            </li>

            <li>
              Keep your body balanced.
            </li>

            <li>
              Repeat the movement several times.
            </li>

            <li>
              Rest when necessary.
            </li>

          </ul>

          <button onClick={closeDrill}>
            Close Drill
          </button>

        </div>

      )}


      {/* =========================
          ADD YOUR OWN DRILL
          ========================= */}

      <div className="registration">

        <h2>
          ➕ Add Your Own Drill
        </h2>

        <p>
          Create a custom drill and add it to your
          training list.
        </p>


        <form onSubmit={addDrill}>

          <label>
            Drill Name
          </label>

          <input
            type="text"
            placeholder="Example: Weak Foot Passing"
            value={drillName}
            onChange={(event) =>
              setDrillName(event.target.value)
            }
          />


          <label>
            Drill Description
          </label>

          <input
            type="text"
            placeholder="Describe the drill"
            value={drillDescription}
            onChange={(event) =>
              setDrillDescription(event.target.value)
            }
          />


          <label>
            Duration
          </label>

          <input
            type="number"
            min="1"
            max="60"
            value={drillDuration}
            onChange={(event) =>
              setDrillDuration(event.target.value)
            }
          />


          <button type="submit">
            ➕ Add Drill
          </button>

        </form>

      </div>


      {/* =========================
          NUTRITION
          ========================= */}

      <div className="card nutrition">

        <h2>
          🥗 Football Nutrition
        </h2>

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