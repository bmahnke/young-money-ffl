<script>
  const leagueId = 272834;
  const seasonId = 2021;
  const baseUrl = 'http://fantasy.espn.com/apis/v3/games/ffl/'
  import axios from "axios";

  import { Client } from 'espn-fantasy-football-api';
  const myClient = new Client({ 
    leagueId: 432132,
    espnS2: 'AEBdVgU48jjRqXVY%2BXN5aQAPJ8E%2Fyb9HdCoOKftJ%2BUCQsee9jlFVXD3WaTXjnTIIu1Jjxl9rZRi734tGmHzfLnylYJixXD5D5aIICe5O7DQldmB0laVt4YNWDaEcehprM32J43rXYBvKgXGvuRbG0zFeeSELl4ZcHM4lhuEzvGQ%2BPaKDsybanhDKltlxD%2BBXcFgYG9XujYrICelLi0ojm6Tz20Bd049cXxcT3A%2B1Zgb1Z%2Bzg9MDvYQEToeSp6LtG%2Ftu%2B3ZT5DAxArE3uUNiNHJg0',
    SWID: '{C01E138D-3F00-4EB6-BF87-06A7415E02A9}'
  });

  // http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/272834?view=mSettings

  let url = 'http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/272834?view=mSettings'
  let p = myClient.getLeagueInfo({ seasonId: seasonId });
  p.then(r => {
    console.log('Api request', r);
  });

  let pageName = "Leage Home";
</script>

<main>
  <h1>{pageName}!</h1>
  <p>Welcome this is my <b>{pageName}</b></p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
