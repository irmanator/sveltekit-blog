import vercel from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-netlify';
// /** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: vercel(),
		// adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
