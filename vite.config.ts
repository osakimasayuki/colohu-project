import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()
	],
	css: {
		preprocessorOptions: {
		  scss: {
			additionalData: `@use '$lib/scss/_includes/_mixins.scss' as *;\n@use '$lib/scss/_includes/_extends.scss' as *;`
		  }
		}
	  }
});
