<script lang="ts">
	import type { PageProps } from './$types';
	import Loading from '$lib/compornents/Loading.svelte';
	import { dateFrormatterYear } from '$lib/scripts/utils';

	// - Data
	const { data }: PageProps = $props();

	// - Variables
</script>

<svelte:head>
	<title>{data.project.title} | COLOHU</title>
</svelte:head>

<div class="lower project">
	{#await data.project}
		<Loading />
	{:then res}
		<h2 class="project__title">{res.title}</h2>
		<div class="project__info">
			<p class="project__date">{dateFrormatterYear(res.category)}</p>
			<span class="project__info-border"></span>
			<p class="project__date">{dateFrormatterYear(res.date)}</p>
			<span class="project__info-border"></span>
			<p class="project__date">{res.place}</p>
		</div>
		<img src="{res.thumbs[0].url}?fm=webp" alt="" class="project__thumb" />
		<div class="project__body richtext">
			{@html res.body}
		</div>
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
					margin: (null, 56 0 76)
				)
			);
		}
	}
	.project {
		&__title {
			@include vw(
				(
					//
					font-size: (40, 80),
					margin-bottom: (30, 40)
				)
			);
		}
		&__info {
			display: flex;
			@extend %font-Poppins;

			@include vw(
				(
					//
					gap: (12, 12),
					letter-spacing: (0.5, 0.5),
					margin-bottom: (45, 45)
				)
			);
		}
		&__info-border {
			width: 1px;
			background-color: #000000;
			@include vw(
				(
					//
					height: (16, 16),
					margin-top: (5, 5)
				)
			);
		}

		&__thumb {
			width: 100%;
		}

		&__body {
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			@include vw(
				(
					//
					width: (null, 982),
					gap: (48, 48),
					margin-top: (48, 48)
				)
			);

			:global(img) {
				width: 100%;
				height: auto;
			}
		}
	}
</style>
