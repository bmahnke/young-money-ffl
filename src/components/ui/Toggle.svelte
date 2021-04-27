<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  function onCheckChanged() {
    dispatch('on-check-changed', {
      checked: checked
    });
  }

  export let text = "";
  export let checked = false;
  export let disabled = false;
  export let id = "";
</script>

<div class="flex">
  <div
    class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
  >
    <input
      type="checkbox"
      name={id}
      id={id}
      bind:checked
      on:change={onCheckChanged}
      {disabled}
      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
    />
    <label
      for={id}
      class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
    />
  </div>
  {#if text}
    <label for={id} class="text-gray-700">{text}</label>
  {/if}
</div>

<style>
  .toggle-checkbox:checked {
    right: 0;
    border-color: #68d391;
  }
  .toggle-checkbox:checked + .toggle-label {
    background-color: #68d391;
  }
</style>
