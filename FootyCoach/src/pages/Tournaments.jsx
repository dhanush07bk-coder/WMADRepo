import { useState } from "react";

function Tournaments() {

  // Form data
  const [teamName, setTeamName] = useState("");
  const [captainName, setCaptainName] = useState("");
  const [email, setEmail] = useState("");

  // Message after registration
  const [message, setMessage] = useState("");


  // Tournament data
  const tournaments = [
    {
      name: "FootyCoach Cup",
      type: "5-a-side",
      location: "Bangalore",
      date: "October 2026"
    },
    {
      name: "College Football Championship",
      type: "11-a-side",
      location: "Bangalore",
      date: "November 2026"
    },
    {
      name: "School Football League",
      type: "School Level",
      location: "Bangalore",
      date: "December 2026"
    }
  ];


  // Form submit function
  function handleSubmit(event) {

    // Stop page from refreshing
    event.preventDefault();


    // Check if fields are empty
    if (
      teamName === "" ||
      captainName === "" ||
      email === ""
    ) {

      setMessage("Please fill all the fields.");

      return;
    }


    // Registration successful
    setMessage(
      "Team " + teamName + " registered successfully! 🏆"
    );


    // Clear form
    setTeamName("");
    setCaptainName("");
    setEmail("");
  }


  return (
    <div className="page">

      <h1>🏆 Football Tournaments</h1>

      <p>
        Find tournaments and register your team.
      </p>


      {/* TOURNAMENTS */}

      <div className="card-container">

        {tournaments.map((tournament, index) => (

          <div className="card" key={index}>

            <h2>
              {tournament.name}
            </h2>

            <p>
              ⚽ Type: {tournament.type}
            </p>

            <p>
              📍 Location: {tournament.location}
            </p>

            <p>
              📅 Date: {tournament.date}
            </p>

          </div>

        ))}

      </div>


      {/* REGISTRATION FORM */}

      <div className="registration">

        <h2>Register Your Team</h2>

        <form onSubmit={handleSubmit}>

          <label>
            Team Name
          </label>

          <input
            type="text"
            value={teamName}
            placeholder="Enter team name"
            onChange={(event) =>
              setTeamName(event.target.value)
            }
          />


          <label>
            Captain Name
          </label>

          <input
            type="text"
            value={captainName}
            placeholder="Enter captain name"
            onChange={(event) =>
              setCaptainName(event.target.value)
            }
          />


          <label>
            Email
          </label>

          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />


          <button type="submit">
            Register Team
          </button>

        </form>


        {/* MESSAGE */}

        {message !== "" && (

          <p className="form-message">
            {message}
          </p>

        )}

      </div>

    </div>
  );
}

export default Tournaments;