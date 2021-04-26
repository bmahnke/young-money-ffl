<script lang="ts">
  import { onDestroy } from 'svelte'
  import { week } from '../store';
  import EspnApi from '../services/espn_api';
  import Team from '../components/teams/Team.svelte'
  import { dayjs } from '../lib/dayjs';

  const leagueId = 272834;
  const seasonId = 2019;
  let currentWeek

  const unsubscribe = week.subscribe(value => (currentWeek = value));
  onDestroy(unsubscribe);

  // http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/272834?view=mSettings
  // let url = 'http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/272834?view=mSettings'

  $: visibleTeam = undefined;
  function onTeamRequestVisibilityChange(event) {
    visibleTeam = event.detail.id;
  }

</script>

<div>
  <div class="page-header">
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
  </div>

  {#await EspnApi.teams(seasonId, currentWeek)}
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
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
