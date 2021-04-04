<script type="ts">
  import Card from '../ui/Card.svelte'
  import Player from '../players/Player.svelte'
  export let team;

  console.log('roster hit');
</script>

<div class="grid grid-cols-3 gap-4 m-4">
  {#each team.roster as player}
    <Card padding="medium" margin="none">
      <section class="p-8">
        <Player player={player} />
      </section>
    </Card>
  {/each}
</div>

<style>

</style>
