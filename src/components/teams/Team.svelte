<script lang="ts">
  import TeamDetails from '../teams/TeamDetails.svelte'
	import { createEventDispatcher } from 'svelte';

  export let team;
  export let canBeVisible;

	const dispatch = createEventDispatcher();

  $: detailsVisible = canBeVisible == team.id;

  function toggle(event) {
    event.preventDefault();
    detailsVisible = !detailsVisible;
    dispatch('team-request-visibility-change', {visible: detailsVisible, id: team.id})
  }
</script>

<div>
  <main>
    <h3><button class="ghost" on:click={(e) => toggle(e)}>{team.name}!</button></h3>
  </main>

  {#if detailsVisible}
    <div class="p-4">
      <TeamDetails team={team} />
    </div>
  {/if}
</div>

<style>

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h3 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
