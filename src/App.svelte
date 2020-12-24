<script lang="ts">
	export let name: string;
</script>

<main class="text-center p-4 max-w-xl my-0 mx-auto">
	<h1 class="text-red-500 uppercase text-6xl font-thin">Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>