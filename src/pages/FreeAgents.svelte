<script lang="ts">
  import { freeAgents, freeAgentsLoading } from "../store";
</script>
<div>
  <h1>Free Agents</h1>
  <div>
    {#if $freeAgentsLoading}
      <p>Free Agents Loading...</p>
    {:else}
      <p>There are {$freeAgents.length} available!</p>
    {/if}
  </div>
</div>
<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
