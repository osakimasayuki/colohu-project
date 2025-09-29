<script lang="ts">
	import type { PageProps } from './$types';
	import type { NewsType } from '$lib/@types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import CategoryTab from '$lib/compornents/parts/CategoryTab.svelte';
	import Loading from '$lib/compornents/Loading.svelte';
	import NewsRow from '$lib/compornents/parts/NewsRow.svelte';
	import Pagination from '$lib/compornents/parts/Pagination.svelte';
	import {
		scrollInAnimation,
		setTextCharsAnimation,
		setTextLinesAnimation
	} from '$lib/scripts/gsap-animations';

	// - Data
	const { data }: PageProps = $props();

	// - Variables
	const categories: string[] = ['All', 'Info', 'Award', 'Media'];
	let activeCategory: string = $state('All');
	let filterdData: NewsType[] = $state([]);
	let pageNum: number = $state(1);

	// - Functions
	const filter = () => {
		filterdData = data.news.filter((item: NewsType) => item.category[0] === activeCategory);
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
	<title>News | COLOHU</title>
</svelte:head>

<div class="lower news">
	<h2 class="lower__title js-anim-chars">NEWS</h2>
	{#await data.news}
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

		{@const list = filterdData.length > 0 ? filterdData : res}
		<ul class="news__list">
			{#each list as item, _ (item.id)}
				<li class="news__item js-scroll-in">
					<NewsRow {item} />
				</li>
			{/each}
		</ul>
		<Pagination pagePath="/news/" totalPage={data.totalPage} pageNo={pageNum} />
	{:catch}
		<p>時間をおいてもう一度お試しください。</p>
	{/await}
</div>

<style lang="scss">
	.news {
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
					margin-top: (30, 73),
					margin-bottom: (-10, 0)
				)
			);
		}
	}
</style>
