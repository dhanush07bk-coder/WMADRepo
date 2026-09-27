import { useState } from "react";

function Matches() {

  const [matchType, setMatchType] = useState("live");

  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("1");
  const [match, setMatch] = useState("");

  const [message, setMessage] = useState("");


  /* =========================
     MATCH DATA
     ========================= */

  const liveMatches = [
    {
      home: "Barcelona",
      away: "Real Madrid",
      score: "2 - 1",
      time: "65'"
    },
    {
      home: "Arsenal",
      away: "Chelsea",
      score: "1 - 1",
      time: "72'"
    }
  ];


  const nearbyMatches = [
    {
      home: "Bangalore FC",
      away: "City United",
      location: "Bangalore",
      time: "5:00 PM"
    },
    {
      home: "College FC",
      away: "University FC",
      location: "Bangalore",
      time: "7:00 PM"
    }
  ];


  const schoolMatches = [
    {
      home: "Delhi Public School",
      away: "National Public School",
      location: "Bangalore",
      date: "October 5"
    },
    {
      home: "Greenwood High",
      away: "Bishop Cotton",
      location: "Bangalore",
      date: "October 12"
    }
  ];


  /* =========================
     TICKET BOOKING
     ========================= */

  function bookTicket(event) {

    event.preventDefault();

    if (name === "" || match === "") {

      setMessage("⚠️ Please fill all the required fields.");

      return;
    }

    setMessage(
      "✅ Ticket booked successfully for " + name + "!"
    );

    setName("");
    setTickets("1");
    setMatch("");

  }


  return (

    <div className="page">

      <h1>🏟️ Matches</h1>

      <p>
        Follow live matches, highlights and
        football games near you.
      </p>


      {/* =========================
          MATCH NAVIGATION
          ========================= */}

      <div className="match-buttons">

        <button onClick={() => setMatchType("live")}>
          🔴 Live & Highlights
        </button>

        <button onClick={() => setMatchType("nearby")}>
          📍 Nearby & School
        </button>

        <button onClick={() => setMatchType("tickets")}>
          🎟️ Book Tickets
        </button>

      </div>


      {/* =========================
          LIVE & HIGHLIGHTS
          ========================= */}

      {matchType === "live" && (

        <div>

          <h2>🔴 Live Matches</h2>

          <div className="card-container">

            {liveMatches.map((game, index) => (

              <div className="card" key={index}>

                <h2>
                  {game.home} vs {game.away}
                </h2>

                <h1>
                  {game.score}
                </h1>

                <p>
                  Match Time: {game.time}
                </p>

                <button
                  onClick={() =>
                    alert("Match highlights coming soon! 🎬")
                  }
                >
                  🎬 Highlights
                </button>

              </div>

            ))}

          </div>

        </div>

      )}


      {/* =========================
          NEARBY & SCHOOL
          ========================= */}

      {matchType === "nearby" && (

        <div>

          <h2>📍 Nearby Matches</h2>

          <div className="card-container">

            {nearbyMatches.map((game, index) => (

              <div className="card" key={index}>

                <h2>
                  {game.home} vs {game.away}
                </h2>

                <p>
                  📍 {game.location}
                </p>

                <p>
                  🕐 {game.time}
                </p>

                <button>
                  View Match
                </button>

              </div>

            ))}

          </div>


          <h2>🏫 School Matches</h2>

          <div className="card-container">

            {schoolMatches.map((game, index) => (

              <div className="card" key={index}>

                <h2>
                  {game.home}
                </h2>

                <p>
                  vs {game.away}
                </p>

                <p>
                  📍 {game.location}
                </p>

                <p>
                  📅 {game.date}
                </p>

                <button>
                  View Match
                </button>

              </div>

            ))}

          </div>

        </div>

      )}


      {/* =========================
          TICKET BOOKING
          ========================= */}

      {matchType === "tickets" && (

        <div className="registration">

          <h2>🎟️ Book Match Tickets</h2>

          <form onSubmit={bookTicket}>

            <label>
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
            />


            <label>
              Select Match
            </label>

            <select
              value={match}
              onChange={(event) =>
                setMatch(event.target.value)
              }
            >

              <option value="">
                Select a match
              </option>

              <option value="Barcelona vs Real Madrid">
                Barcelona vs Real Madrid
              </option>

              <option value="Arsenal vs Chelsea">
                Arsenal vs Chelsea
              </option>

              <option value="Manchester United vs Liverpool">
                Manchester United vs Liverpool
              </option>

            </select>


            <label>
              Number of Tickets
            </label>

            <input
              type="number"
              min="1"
              max="10"
              value={tickets}
              onChange={(event) =>
                setTickets(event.target.value)
              }
            />


            <button type="submit">
              Book Tickets
            </button>

          </form>


          {message !== "" && (

            <p className="form-message">
              {message}
            </p>

          )}

        </div>

      )}

    </div>

  );

}

export default Matches;