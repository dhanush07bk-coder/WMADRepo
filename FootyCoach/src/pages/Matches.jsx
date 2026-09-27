import { useState } from "react";

function Matches() {

  // Which section is currently selected
  const [matchType, setMatchType] = useState("live");

  // Ticket form values
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("1");
  const [match, setMatch] = useState("");

  // Booking message
  const [message, setMessage] = useState("");


  // Live matches
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


  // Match highlights
  const highlights = [
    "Barcelona vs Real Madrid",
    "Arsenal vs Chelsea",
    "Manchester United vs Liverpool"
  ];


  // Nearby matches
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


  // School matches
  const schoolMatches = [
    {
      school1: "Delhi Public School",
      school2: "National Public School",
      location: "Bangalore",
      date: "October 5"
    },
    {
      school1: "Greenwood High",
      school2: "Bishop Cotton",
      location: "Bangalore",
      date: "October 12"
    }
  ];


  // Ticket booking function
  function bookTicket(event) {

    // Prevent page refresh
    event.preventDefault();


    // Check if fields are empty
    if (name === "" || match === "") {

      setMessage("Please fill all the required fields.");

      return;
    }


    // Show booking message
    setMessage(
      "Ticket booked successfully for " +
      name +
      "! 🎟️"
    );


    // Clear form
    setName("");
    setTickets("1");
    setMatch("");
  }


  return (
    <div className="page">

      <h1>🏟️ Matches</h1>

      <p>
        Follow matches, watch highlights and
        find football games near you.
      </p>


      {/* MATCH NAVIGATION */}

      <div className="match-buttons">

        <button
          onClick={() => setMatchType("live")}
        >
          🔴 Live Matches
        </button>

        <button
          onClick={() => setMatchType("highlights")}
        >
          🎬 Highlights
        </button>

        <button
          onClick={() => setMatchType("nearby")}
        >
          📍 Nearby
        </button>

        <button
          onClick={() => setMatchType("school")}
        >
          🏫 School
        </button>

        <button
          onClick={() => setMatchType("tickets")}
        >
          🎟️ Tickets
        </button>

      </div>


      {/* LIVE MATCHES */}

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

                <button>
                  View Match
                </button>

              </div>

            ))}

          </div>

        </div>

      )}


      {/* HIGHLIGHTS */}

      {matchType === "highlights" && (

        <div>

          <h2>🎬 Match Highlights</h2>

          <div className="card-container">

            {highlights.map((game, index) => (

              <div className="card" key={index}>

                <h2>
                  {game}
                </h2>

                <p>
                  Watch the best moments from the match.
                </p>

                <button
                  onClick={() =>
                    alert("Highlight video coming soon!")
                  }
                >
                  ▶ Watch Highlight
                </button>

              </div>

            ))}

          </div>

        </div>

      )}


      {/* NEARBY MATCHES */}

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

        </div>

      )}


      {/* SCHOOL MATCHES */}

      {matchType === "school" && (

        <div>

          <h2>🏫 School Matches</h2>

          <div className="card-container">

            {schoolMatches.map((game, index) => (

              <div className="card" key={index}>

                <h2>
                  {game.school1}
                </h2>

                <h3>
                  vs
                </h3>

                <h2>
                  {game.school2}
                </h2>

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


      {/* TICKET BOOKING */}

      {matchType === "tickets" && (

        <div className="registration">

          <h2>🎟️ Book Match Tickets</h2>

          <form onSubmit={bookTicket}>

            {/* Name */}

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


            {/* Match */}

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


            {/* Number of tickets */}

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


          {/* Booking Message */}

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