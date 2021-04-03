<script lang="ts">
  import EspnApi from '../services/espn_api';
  import { dayjs } from '../lib/dayjs';

  const leagueId = 272834;
  const seasonId = 2019;

  // http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/272834?view=mSettings

  let url = 'http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/272834?view=mSettings'
  let pageName = '';
  let draftDay = '';

  let p = EspnApi.league(seasonId);
  p.then(r => {
    console.log('p', r);
    pageName = r.name;
    draftDay = dayjs.utc(r.draftSettings.date).local().toString()
  })

</script>

<main>
  <h1>{pageName}!</h1>
  <p>Draft Date: {draftDay}</p>
  <p>Welcome to the home page for <b>{pageName}</b></p>
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
