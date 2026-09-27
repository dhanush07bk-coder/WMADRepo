import { useState } from "react";
import { supabase } from "../supabaseClient";

function Tournaments() {

  /* =========================
     PLAYER FORM
     ========================= */

  const [playerName, setPlayerName] = useState("");
  const [age, setAge] = useState("");
  const [playerEmail, setPlayerEmail] = useState("");
  const [playerMobile, setPlayerMobile] = useState("");
  const [position, setPosition] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");
  const [playerTournament, setPlayerTournament] = useState("");


  /* =========================
     TEAM FORM
     ========================= */

  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [leaderMobile, setLeaderMobile] = useState("");
  const [teamTournament, setTeamTournament] = useState("");


  /* =========================
     POPUP
     ========================= */

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");


  /* =========================
     TOURNAMENT DATA
     ========================= */

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


  /* =========================
     POPUP FUNCTIONS
     ========================= */

  function showMessage(text, type) {
    setMessage(text);
    setMessageType(type);
  }

  function closeMessage() {
    setMessage("");
    setMessageType("");
  }


  /* =========================
     PLAYER REGISTRATION
     ========================= */

  async function handlePlayerSubmit(event) {

    event.preventDefault();

    closeMessage();


    if (
      playerName === "" ||
      age === "" ||
      playerEmail === "" ||
      playerMobile === "" ||
      position === "" ||
      playerTeam === "" ||
      playerTournament === ""
    ) {

      showMessage(
        "Please fill all player registration fields.",
        "error"
      );

      return;
    }


    if (age < 10 || age > 40) {

      showMessage(
        "Please enter a valid age between 10 and 40.",
        "error"
      );

      return;
    }


    if (playerMobile.length < 10) {

      showMessage(
        "Please enter a valid mobile number.",
        "error"
      );

      return;
    }


    const { error } = await supabase
      .from("tournament_registrations")
      .insert([
        {
          player_name: playerName,
          age: age,
          email: playerEmail,
          mobile: playerMobile,
          position: position,
          team_name: playerTeam,
          tournament: playerTournament
        }
      ]);


    if (error) {

      console.log(error);

      showMessage(
        "Player registration failed. Please try again.",
        "error"
      );

      return;
    }


    showMessage(
      "Player registered successfully! 🏆",
      "success"
    );


    setPlayerName("");
    setAge("");
    setPlayerEmail("");
    setPlayerMobile("");
    setPosition("");
    setPlayerTeam("");
    setPlayerTournament("");
  }


  /* =========================
     TEAM REGISTRATION
     ========================= */

  async function handleTeamSubmit(event) {

    event.preventDefault();

    closeMessage();


    if (
      teamName === "" ||
      leaderName === "" ||
      leaderEmail === "" ||
      leaderMobile === "" ||
      teamTournament === ""
    ) {

      showMessage(
        "Please fill all team registration fields.",
        "error"
      );

      return;
    }


    if (leaderMobile.length < 10) {

      showMessage(
        "Please enter a valid leader mobile number.",
        "error"
      );

      return;
    }


    const { error } = await supabase
      .from("team_registrations")
      .insert([
        {
          team_name: teamName,
          leader_name: leaderName,
          leader_email: leaderEmail,
          leader_mobile: leaderMobile,
          tournament: teamTournament
        }
      ]);


    if (error) {

      console.log(error);

      showMessage(
        "Team registration failed. Please check your Supabase table.",
        "error"
      );

      return;
    }


    showMessage(
      "Team registered successfully! 🏆",
      "success"
    );


    setTeamName("");
    setLeaderName("");
    setLeaderEmail("");
    setLeaderMobile("");
    setTeamTournament("");
  }


  return (

    <div className="page">


      {/* =========================
          POPUP
          ========================= */}

      {message !== "" && (

        <div className={`popup ${messageType}`}>

          <div className="popup-content">

            <h3>

              {messageType === "error"
                ? "⚠️ Warning"
                : "✅ Success"}

            </h3>

            <p>
              {message}
            </p>

            <button onClick={closeMessage}>
              OK
            </button>

          </div>

        </div>

      )}


      {/* =========================
          TITLE
          ========================= */}

      <h1>
        🏆 Football Tournaments
      </h1>

      <p>
        Find upcoming tournaments and register
        as a player or team.
      </p>


      {/* =========================
          TOURNAMENT CARDS
          ========================= */}

      <div className="card-container">

        {tournaments.map((tournament, index) => (

          <div
            className="card"
            key={index}
          >

            <h2>
              {tournament.name}
            </h2>

            <p>
              ⚽ {tournament.type}
            </p>

            <p>
              📍 {tournament.location}
            </p>

            <p>
              📅 {tournament.date}
            </p>

            <button
              onClick={() => {
                setPlayerTournament(tournament.name);
                setTeamTournament(tournament.name);
              }}
            >
              Register for this
            </button>

          </div>

        ))}

      </div>


      {/* =========================
          TWO REGISTRATION FORMS
          ========================= */}

      <div className="tournament-forms">


        {/* =========================
            PLAYER REGISTRATION
            ========================= */}

        <div className="registration">

          <h2>
            ⚽ Player Registration
          </h2>

          <form onSubmit={handlePlayerSubmit}>


            <label>
              Player Name
            </label>

            <input
              type="text"
              placeholder="Enter player name"
              value={playerName}
              onChange={(event) =>
                setPlayerName(event.target.value)
              }
            />


            <label>
              Age
            </label>

            <input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(event) =>
                setAge(event.target.value)
              }
            />


            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={playerEmail}
              onChange={(event) =>
                setPlayerEmail(event.target.value)
              }
            />


            <label>
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              value={playerMobile}
              onChange={(event) =>
                setPlayerMobile(event.target.value)
              }
            />


            <label>
              Playing Position
            </label>

            <select
              value={position}
              onChange={(event) =>
                setPosition(event.target.value)
              }
            >

              <option value="">
                Select position
              </option>

              <option value="Goalkeeper">
                Goalkeeper
              </option>

              <option value="Defender">
                Defender
              </option>

              <option value="Midfielder">
                Midfielder
              </option>

              <option value="Forward">
                Forward
              </option>

            </select>


            <label>
              Team Name
            </label>

            <input
              type="text"
              placeholder="Enter team name"
              value={playerTeam}
              onChange={(event) =>
                setPlayerTeam(event.target.value)
              }
            />


            <label>
              Tournament
            </label>

            <select
              value={playerTournament}
              onChange={(event) =>
                setPlayerTournament(event.target.value)
              }
            >

              <option value="">
                Select tournament
              </option>

              {tournaments.map((item, index) => (

                <option
                  value={item.name}
                  key={index}
                >
                  {item.name}
                </option>

              ))}

            </select>


            <button type="submit">
              ⚽ Register Player
            </button>

          </form>

        </div>


        {/* =========================
            TEAM REGISTRATION
            ========================= */}

        <div className="registration">

          <h2>
            🏆 Team Registration
          </h2>

          <form onSubmit={handleTeamSubmit}>


            <label>
              Team Name
            </label>

            <input
              type="text"
              placeholder="Enter team name"
              value={teamName}
              onChange={(event) =>
                setTeamName(event.target.value)
              }
            />


            <h3>
              👤 Team Leader Details
            </h3>


            <label>
              Leader Name
            </label>

            <input
              type="text"
              placeholder="Enter leader name"
              value={leaderName}
              onChange={(event) =>
                setLeaderName(event.target.value)
              }
            />


            <label>
              Leader Email
            </label>

            <input
              type="email"
              placeholder="Enter leader email"
              value={leaderEmail}
              onChange={(event) =>
                setLeaderEmail(event.target.value)
              }
            />


            <label>
              Leader Mobile
            </label>

            <input
              type="tel"
              placeholder="Enter leader mobile"
              value={leaderMobile}
              onChange={(event) =>
                setLeaderMobile(event.target.value)
              }
            />


            <label>
              Tournament
            </label>

            <select
              value={teamTournament}
              onChange={(event) =>
                setTeamTournament(event.target.value)
              }
            >

              <option value="">
                Select tournament
              </option>

              {tournaments.map((item, index) => (

                <option
                  value={item.name}
                  key={index}
                >
                  {item.name}
                </option>

              ))}

            </select>


            <button type="submit">
              🏆 Register Team
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default Tournaments;