import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from "svelte-preprocess";
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			// Options are optional
			plugins: [svg()]
		}
	}
};

export default config;
