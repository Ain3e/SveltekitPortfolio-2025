import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				'/fonts/SuisseIntl-Regular.woff', // Add your project path here
				'/fonts/SuisseIntl-Medium.woff',
				'/fonts/SuisseIntl-Bold.woff',
				'/fonts/SuisseIntl-Thin.woff',
			]
		}
	}
});


