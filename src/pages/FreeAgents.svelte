<script lang="ts">
  import { freeAgents, freeAgentsLoading } from "../store";
  import Card from "../components/ui/Card.svelte";

  $: offset = 0;

  function move(event, page) {
    event.preventDefault();
    offset = page;
  }
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

  <div>
    <Card>
      <section>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Team
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {#each $freeAgents.slice(offset * 10, (offset + 1) * 10) as agent}
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                {agent.player.fullName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">{agent.player.proTeam}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Available
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {agent.player.defaultPosition}
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
      <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="flex-1 flex justify-between">
          <a href="page" on:click={(e) => move(e, offset - 1)} style={offset == 0 ? 'pointer-events: none;' : ''} class="page-move" >
            Previous
          </a>
          <a href="next"
            on:click={(e) => move(e, offset + 1)} class="page-move">
            Next
          </a>
        </div>
        <!-- <div>
          <a href="next" on:click={(e) => move(e, offset + 1)} class="page-move">
            Next
          </a>
        </div> -->
      </div>
    </Card>
  </div>
</div>

<style>
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
