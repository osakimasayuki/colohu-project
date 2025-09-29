<script lang="ts">
	import type { PageProps } from './$types';
	import type { ProjectType } from '$lib/@types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import CategoryTab from '$lib/compornents/parts/CategoryTab.svelte';
	import ProjectCard from '$lib/compornents/parts/ProjectCard.svelte';
	import Loading from '$lib/compornents/Loading.svelte';
	import Pagination from '$lib/compornents/parts/Pagination.svelte';
	import {
		scrollInAnimation,
		setTextCharsAnimation,
		setTextLinesAnimation
	} from '$lib/scripts/gsap-animations';

	// - Data
	const { data }: PageProps = $props();

	// - Variables
	const categories: string[] = ['All', 'House', 'Office', 'Shop', 'Public', 'Other'];
	let activeCategory: string = $state('All');
	let filterdData: ProjectType[] = $state([]);
	let pageNum: number = $state(1);

	// - Functions
	const filter = () => {
		filterdData = data.projects.filter((item: ProjectType) => item.category[0] === activeCategory);
	};

	// - Lifecycles
	onMount(() => {
		pageNum = Number($page.url.searchParams.get('page'));
	});

	onMount(() => {
		scrollInAnimation();
		setTextCharsAnimation();
		setTextLinesAnimation();
	});
</script>

<svelte:head>
	<title>Project | COLOHU</title>
</svelte:head>

<div class="lower">
	<h2 class="lower__title js-anim-chars">PROJECT</h2>
	{#await data.projects}
		<Loading />
	{:then res}
		<CategoryTab
			{categories}
			{activeCategory}
			onSelectCategory={(category) => {
				activeCategory = category;
				filter();
			}}
		/>

		{@const list = activeCategory === 'All' ? res : filterdData}
		<ul class="projects">
			{#each list as item, _ (item.id)}
				<li class="js-scroll-in">
					<ProjectCard {item} />
				</li>
			{/each}
		</ul>
		<Pagination pagePath="/projects/" totalPage={data.totalPage} pageNo={pageNum} />
	{:catch}
		<p>時間をおいてもう一度お試しください。</p>
	{/await}
</div>

<style lang="scss">
	.lower {
		:global(.category-tab) {
			@include vw(
				(
					//
					margin: (20 0 45, 56 0 76)
				)
			);
		}

		:global(.pagination) {
			@include vw(
				(
					//
					margin: (30 0 0, 56 0 0)
				)
			);
		}
	}
	.projects {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		@include vw(
			(
				//
				gap: (16, 24),
				// padding: (16, null)
			)
		);
		@include media_sp {
			grid-template-columns: 1fr;
		}

		li {
			@include vw(
				(
					//
					height: (239, 387)
				)
			);
		}
	}
</style>
