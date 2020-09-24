<script lang="ts">
	import TailwindStyles from './TailwindStyles.svelte';
//https://github.com/ItalyPaleAle/svelte-spa-router
import Router from 'svelte-spa-router';
import routes from './Routes.ts';
</script>

<style src="./app.scss" lang="scss"></style>

<main>
<h2>Svelte Test</h2>
<ul>
    <li><a href="#/">Home</a></li>
    <li><a href="#/does/not/exist">Not found</a></li>
</ul>
<Router {routes} />
</main>
