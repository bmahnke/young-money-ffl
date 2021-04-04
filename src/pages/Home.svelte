<script lang="ts">
  import EspnApi from '../services/espn_api';
  import Team from '../components/teams/Team.svelte'
  import { dayjs } from '../lib/dayjs';

  const leagueId = 272834;
  const seasonId = 2019;

  // http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/272834?view=mSettings

  let url = 'http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/272834?view=mSettings'

  $: visibleTeam = undefined;
  function onTeamRequestVisibilityChange(event) {
    visibleTeam = event.detail.id;
  }

</script>

<div>
  <main>
    {#await EspnApi.league(seasonId)}
      <!-- promise is pending -->
      <p>waiting for the promise to resolve...</p>
    {:then league}
      <h1>{league.name}!</h1>
      <p>Draft Date: {dayjs.utc(league.draftSettings.date).local().toString()}</p>
      <p>Welcome to the home page for <b>{league.name}</b></p>
    {:catch error}
      <!-- promise was rejected -->
      <p>Something went wrong: {error.message}</p>
    {/await}
  </main>

  {#await EspnApi.teams(seasonId, 3)}
    <!-- promise is pending -->
    <p>waiting for the promise to resolve...</p>
  {:then teams}
    {#each teams as team}
      <Team on:team-request-visibility-change={onTeamRequestVisibilityChange} canBeVisible={visibleTeam} team={team} />
    {/each}
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>


<style>
  main {
    text-align: center;
    max-width: 240px;
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
