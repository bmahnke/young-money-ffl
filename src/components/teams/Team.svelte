<script lang="ts">
  import TeamDetails from "../teams/TeamDetails.svelte";
  import { createEventDispatcher } from "svelte";

  export let team;
  export let canBeVisible;

  const dispatch = createEventDispatcher();

  $: detailsVisible = canBeVisible == team.id;

  function toggle(event) {
    event.preventDefault();
    detailsVisible = !detailsVisible;
    dispatch("team-request-visibility-change", {
      visible: detailsVisible,
      id: team.id,
    });
  }
</script>

<div>
  <main>
    <div class="flex justify-center">
      <img
        class="h-10 w-10 rounded-full mt-1 mr-2"
        src={team.logoURL}
        alt={team.logoURL.split('/').pop()}
      />

      <h3>
        <button class="ghost" on:click={(e) => toggle(e)}>
          {team.name}!
        </button>
      </h3>
    </div>
  </main>

  {#if detailsVisible}
    <div class="p-4">
      <TeamDetails {team} />
    </div>
  {/if}
</div>

<style>
  main {
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
