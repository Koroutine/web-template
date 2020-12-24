import App from './App.svelte';
import "./Tailwind.svelte"

const app = new App({
	target: document.body,
	props: {
		name: 'test'
	}
});

export default app;