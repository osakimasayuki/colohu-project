<script lang="ts">
	import type { NewsType } from '$lib/@types.d';
	import InnerLink from '$lib/compornents/parts/InnerLink.svelte';
	import NewsRow from '$lib/compornents/parts/NewsRow.svelte';

	// - Props
	interface Props {
		data: NewsType[];
	}
	const { data }: Props = $props();
</script>

<section class="news">
	<h2 class="js-anim-chars">NEWS</h2>
	<ul class="news__list">
		{#each data as item (item.id)}
			<li class="news__item js-scroll-in">
				<NewsRow {item} />
			</li>
		{/each}
	</ul>
	<div class="news__bottom">
		<InnerLink href="/news/" labelWords={['View', 'more']} />
	</div>
</section>

<style lang="scss">
	.news {
		position: relative;
		@include vw(
			(
				//
				padding: (65 16 0, 40 0 0 80)
			)
		);

		h2 {
			@extend %font-Poppins;
			font-weight: 800;
			line-height: 1;
			@include vw(
				(
					//
					font-size: (60, 120),
					letter-spacing: (11, 24),
					left: (null, -155),
					top: (null, 290)
				)
			);
			@include media_not_sp {
				transform: rotate(90deg);
				position: absolute;
			}
		}

		&__list {
			@include vw(
				(
					//
					padding: (5 0 20, 40 100 0 122)
				)
			);
		}
		&__bottom {
			text-align: right;
			:global(.inner-link) {
				@include vw(
					(
						//
						margin: (null, 55 0 0 auto)
					)
				);
			}
		}
	}
</style>
