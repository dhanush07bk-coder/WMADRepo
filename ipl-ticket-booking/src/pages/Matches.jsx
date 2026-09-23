

function MatchCard(props) {
  return (
    <div className="match-card">

      <h2>
        {props.team1} vs {props.team2}
      </h2>

      <p>📍 {props.venue}</p>

      <p>📅 {props.date}</p>

      <button>Book Ticket</button>

    </div>
  );
}

function Matches() {
  return (
    <main className="matches-page">

      <h1>Upcoming IPL Matches</h1>

      <div className="matches-grid">
        <MatchCard
          team1="RCB"
          team2="CSK"
          venue="M. Chinnaswamy Stadium, Bengaluru"
          date="25 March 2026"
        />
                <MatchCard
          team1="MI"
          team2="KKR"
          venue="Wankhede Stadium, Mumbai"
          date="28 March 2026"
        />
                <MatchCard
          team1="DC"
          team2="SRH"
          venue="Feroz Shah Kotla Ground, Delhi"
          date="30 March 2026"
        />
                <MatchCard
          team1="RR"
          team2="PBKS"
          venue="Sawai Mansingh Stadium, Jaipur"
          date="2 April 2026"
        />

      </div>
      

    </main>
  );
}

export default Matches;

