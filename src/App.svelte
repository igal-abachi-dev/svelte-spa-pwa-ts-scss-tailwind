<script lang="ts">
//	import TailwindStyles from './TailwindStyles.svelte';
//https://github.com/ItalyPaleAle/svelte-spa-router

import Router from 'svelte-spa-router';
import routes from './Routes.ts';


  import Toggle from "./components/Atoms/Toggle.svelte";
  export let darkMode:boolean = false;
</script>

<style src="./app.scss" lang="scss"></style>

<main class="{darkMode ? 'dark' : ''}">
<div class="w-full">

    <div class="container mx-auto">
<h2>Svelte Test</h2>
<ul>
    <li><a href="#/">Home</a></li>
    <li><a href="#/does/not/exist">Not found</a></li>
</ul>
<Router {routes} />
</div>
</div>
</main>
