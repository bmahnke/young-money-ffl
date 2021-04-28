<script lang="ts">
  import Icon from "../ui/Icon.svelte"
  import { injuryColorStatus, injuryIconStatus, injuryTextStatus } from "../../lib/availability_status.js";

  export let status;

  $: textStatus = injuryTextStatus(status);
  $: color = injuryColorStatus(status);
  $: icon = injuryIconStatus(status);
  $: shade = ['Q', 'D'].includes(textStatus) ? '300' : (['red'].includes(color) ? '300' : '100');

</script>
    
<div class="flex flex-row items-center">
  <p class="text-sm font-medium mt-1 mr-1">{textStatus}</p>
  <Icon name={icon}
        color={color}
        shade={shade}
        shape="circle"
  ></Icon>
</div>
    