<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import { afterUpdate } from 'svelte';
  import Card from '../ui/Card.svelte'
  import Roster from '../teams/Roster.svelte'
  export let team;
  let element

  afterUpdate(async () => {
    element.scrollTo(0, element.scrollHeight)
  });

  console.log('Team', team);
</script>
  
<div bind:this={element}>
  <Card padding="none" margin="none">
    <Roster team={team} />
  </Card>
</div>
  
<style>

</style>