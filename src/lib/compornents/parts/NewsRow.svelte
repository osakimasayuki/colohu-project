<script lang="ts">
	import type { NewsType } from '$lib/@types';
	import { dateFromatter } from '$lib/scripts/utils';

	interface Props {
		item: NewsType;
	}
	const { item }: Props = $props();
</script>

<a class="news-row link-anim" href="/news/{item.id}">
	<span class="news-row__date">{dateFromatter(item.date)}</span>
	<span class="category-label">{item.category}</span>
	<span class="news-row__body">{item.title}</span>
</a>

<style lang="scss">
	.news-row {
		display: flex;
		align-items: flex-start;
		border-bottom: 1px solid #f0efef;
		@include vw(
			(
				//
				gap: (16, 16),
				padding: (24 0, 40 0)
			)
		);
		@include media_sp {
			flex-wrap: wrap;
		}

		&__date {
			@extend %font-Poppins;
			font-weight: 400;
			@include vw(
				(
					//
					font-size: (14, 16),
					line-height: (28, 36)
				)
			);
		}

		&__body {
			font-weight: 500;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			@include media_sp {
				width: 100%;
			}
		}
	}
</style>
