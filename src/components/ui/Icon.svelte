<script lang="ts">
  import { IconStore } from "./icons/icon_store";
  export let name;
  export let color = "black";
  export let shade = "100";
  export let shape = "circle";

  $: svgContent = IconStore.getByName(name);

  let usedColor = function () {
    if (color == "transparent") return "";

    if (["white", "black"].includes(color)) {
      return `bg-${color}`;
    }

    return `bg-${color}-${shade}`;
  };
</script>

<span
  class={`p-1 inline-flex text-xs leading-5 font-semibold ${
    shape == "circle" ? "rounded-full" : ""
  } ${usedColor()}`}
>
  <div contenteditable bind:innerHTML={svgContent} class="icon-inner" />
</span>

<style>
</style>
