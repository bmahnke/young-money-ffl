<script lang="ts">
  import { freeAgents, freeAgentsLoading } from "../store";
  import Card from "../components/ui/Card.svelte";
  import Icon from "../components/ui/Icon.svelte";
  import InjuryStatus from "../components/players/InjuryStatus.svelte";

  $: offset = 0;

  function move(event, page) {
    event.preventDefault();
    offset = page;
  }

  console.log("free agent", $freeAgents[9]);
</script>

<div>
  <div class="page-header">
    <h1>Free Agents</h1>
    <div>
      {#if $freeAgentsLoading}
        <p>Free Agents Loading...</p>
      {:else}
        <p>There are {$freeAgents.length} available!</p>
      {/if}
    </div>
  </div>

  <div>
    <Card>
      <section>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div class="shadow overflow-hidden border-b border-gray-200">
                <table class="min-w-full table-auto divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col"> Name </th>
                      <th scope="col"> Team </th>
                      <th scope="col"> Availability </th>
                      <th scope="col"> Injury Status </th>
                      <th scope="col"> Position </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {#each $freeAgents.slice(offset * 10, (offset + 1) * 10) as agent (agent.player.id)}
                      <tr>
                        <td class="px-6 py-4 text-left whitespace-nowrap">
                          <p class="text-sm font-medium text-gray-900">
                            {agent.player.fullName}
                          </p>
                        </td>
                        <td class="px-6 py-4 text-left whitespace-nowrap">
                          <p class="text-sm text-gray-900">
                            {agent.player.proTeam}
                          </p>
                        </td>
                        <td class="px-6 py-4 text-left whitespace-nowrap">
                          <div class="flex flex-row">
                            {#if agent.player.availabilityStatus == "FREEAGENT"}
                              <p class="text-sm font-medium mt-1 mr-1">
                                Available
                              </p>
                              <Icon name="check" color="green" />
                            {:else if agent.player.availabilityStatus == "WAIVERS"}
                              <p class="text-sm font-medium mt-1 mr-1">
                                Waivers
                              </p>
                              <Icon
                                name="clock"
                                color="yellow"
                                shape="circle"
                                shade="300"
                              />
                            {/if}
                          </div>
                        </td>
                        <td class="px-6 py-4 text-left whitespace-nowrap">
                          {#if agent.player.defaultPosition !== "D/ST"}
                            <InjuryStatus status={agent.player.injuryStatus} />
                          {/if}
                        </td>
                        <td
                          class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500"
                        >
                          <p>{agent.player.defaultPosition}</p>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      >
        <div class="flex-1 flex justify-between">
          <a
            href="page"
            on:click={(e) => move(e, offset - 1)}
            style={offset == 0 ? "pointer-events: none;" : ""}
            class="page-move"
          >
            Previous
          </a>
          <a
            href="next"
            on:click={(e) => move(e, offset + 1)}
            class="page-move"
          >
            Next
          </a>
        </div>
      </div>
    </Card>
  </div>
</div>

<style>
  th {
    padding-left: 1.5rem /* 24px */;
    padding-right: 1.5rem /* 24px */;
    padding-top: 0.75rem /* 12px */;
    padding-bottom: 0.75rem /* 12px */;
    font-size: 0.75rem /* 12px */;
    font-weight: 500;
    --text-opacity: 1;
    color: #a0aec0;
    color: rgba(160, 174, 192, var(--text-opacity));
    text-align: left;
    text-transform: uppercase;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .page-move {
    border-radius: 0.375rem;
    margin-left: 0.75rem;
    font-size: 0.875rem;
    position: relative;
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-width: 1px;
    border-color: #e2e8f0;
    border-color: rgba(226, 232, 240, 1);
    color: #4a5568;
    color: rgba(74, 85, 104, 1);
    background-color: #fff;
    background-color: rgba(255, 255, 255, 1);
  }

  .page-move:hover {
    color: #a0aec0;
    color: rgba(160, 174, 192, 1);
  }
</style>
