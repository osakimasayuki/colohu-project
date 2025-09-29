<script lang="ts">
	import type { PageProps } from './$types';
	import {
		scrollInAnimation,
		setTextCharsAnimation,
		setTextLinesAnimation
	} from '$lib/scripts/gsap-animations';
	import { onMount } from 'svelte';

	// - Components
	import Project from '$lib/compornents/top/Project.svelte';
	import About from '$lib/compornents/top/About.svelte';
	import Workflow from '$lib/compornents/top/Workflow.svelte';
	import News from '$lib/compornents/top/News.svelte';

	// - Data
	const { data }: PageProps = $props();

	onMount(() => {
		scrollInAnimation();
		setTextCharsAnimation();
		setTextLinesAnimation();
	});

	onMount(() => {
		return () => document.body.classList.remove('is-dark');
	});
</script>

<div class="top">
	<div class="js-logo-anim-trigger"></div>
	<Project data={data.projects} />
	<About />
	<Workflow />
	<News data={data.news} />
</div>

<style lang="scss">
	.top {
		position: relative;
		@include vw(
			(
				//
				padding: (202 0 0, 450 47 0)
			)
		);

		.js-logo-anim-trigger {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			@include vw(
				(
					//
					height: (1, 1),
					top: (100, 220)
				)
			);
		}
	}
</style>
