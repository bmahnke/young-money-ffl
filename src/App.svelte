<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import FreeAgents from "./pages/FreeAgents.svelte";
  let name;
  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<main class="bg-gray-100 p-8">
  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="free-agents">Free Agents</Link>
    </nav>
    <div>
      <Route path="free-agents"><FreeAgents /></Route>
      <Route path="about"><About /></Route>
      <!--for now the router just support case sensitive,
           one workaround colud be add two time the route
           Example.
          <Route path="About" component="{About}" /> 
       -->
      <Route path="/"><Home /></Route>
    </div>
  </Router>
</main>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
