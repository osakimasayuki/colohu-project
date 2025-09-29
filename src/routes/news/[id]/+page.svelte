<script lang="ts">
	import type { PageProps } from './$types';
	import Loading from '$lib/compornents/Loading.svelte';
	import { dateFromatter } from '$lib/scripts/utils';
	import InnerLink from '$lib/compornents/parts/InnerLink.svelte';

	// - Data
	const { data }: PageProps = $props();

	// - Variables
</script>

<svelte:head>
	<title>{data.news.title} | COLOHU</title>
</svelte:head>

<div class="lower news">
	{#await data.news}
		<Loading />
	{:then res}
		<div class="news__back-button">
			<InnerLink href="/news/" isBack labelWords={['Back', 'to', 'List']} />
		</div>
		<div class="news__content">
			<h2 class="news__title">{res.title}</h2>
			<div class="news__info">
				<p class="news__date">{dateFromatter(res.date)}</p>
				<p class="category-label">{res.category}</p>
			</div>
			<div class="news__body richtext">
				{@html res.body}
			</div>
		</div>
	{:catch}
		<p>時間をおいてもう一度お試しください。</p>
	{/await}
</div>

<style lang="scss">
	.lower {
		@include vw(
			(
				//
				padding-top: (117, 180)
			)
		);
		:global(.category-tab) {
			@include vw(
				(
					//
					margin: (null, 56 0 76)
				)
			);
		}
	}

	.news {
		@include media_sp {
			display: flex;
			flex-direction: column;
		}

		&__back-button {
			@include media_sp {
				order: 2;
				margin-left: auto;
				@include vw(
					(
						//
						margin-top: (30, null)
					)
				);
			}
			@include media_not_sp {
				position: sticky;
				left: 0;
				@include vw(
					(
						//
						top: (null, 200)
					)
				);
			}
		}
		&__content {
			@include vw(
				(
					//
					margin-left: (null, 300),
					margin-top: (null, -14),
					width: (null, 882)
				)
			);
		}
		&__title {
			@include vw(
				(
					//
					font-size: (30, 60),
					line-height: (45, 90),
					margin-bottom: (25, 24)
				)
			);
		}
		&__info {
			display: flex;
			@extend %font-Poppins;
			align-items: center;

			@include vw(
				(
					//
					gap: (12, 12),
					letter-spacing: (0.5, 0.5),
					margin-bottom: (null, 45),
					font-size: (14, null)
				)
			);
		}

		&__body {
			margin: 0 auto;

			@include vw(
				(
					//
					margin-top: (33, 48)
				)
			);
		}
	}
</style>
