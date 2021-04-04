<script lang="ts">
  export let margin = "small"
  export let padding = "small"
</script>

<div class={`wrap bg-white padding-${padding} margin-${margin} shadow overflow-hidden rounded-lg`}>
  <slot></slot>
</div>

<style>
  .padding-none{
    margin: 0;
  }

  .padding-small{
    margin: 0.5rem;
  }

  .padding-medium{
    margin: 1rem;
  }

  .margin-none{
    margin: 0;
  }

  .margin-small{
    margin: 0.5rem;
  }

  .margin-medium{
    margin: 1rem;
  }
</style>