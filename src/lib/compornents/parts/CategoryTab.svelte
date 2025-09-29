<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// - Props
	interface Props {
		categories: string[];
		activeCategory: string;
		onSelectCategory: (category: string) => void;
	}
	let { categories, activeCategory, onSelectCategory }: Props = $props();

	// - Variables
	let currentPath: string = $state('');

	onMount(() => {
		currentPath = $page.url.pathname;
	});
</script>

<ul class="category-tab">
	{#each categories as category, _ (category)}
		<li class:selected={category === activeCategory}>
			<a
				href="{currentPath}?category={category}"
				class="category-tab__link"
				class:-active={category === activeCategory}
				onclick={() => onSelectCategory(category)}
			>
				<span class="transform">
					<span>{category}</span>
					<span>{category}</span>
				</span>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	.category-tab {
		display: flex;
		@extend %font-Poppins;
		overflow-x: auto;
		@include vw(
			(
				//
				gap: (24, 24),
				font-size: (20, 20)
			)
		);

		&__link {
			overflow: hidden;
			position: relative;
			display: block;
			@include vw(
				(
					//
					height: (null, 30)
				)
			);
			&.-active {
				font-weight: bold;
			}
			@include hover {
				.transform {
					animation-name: btnAnimation;
					animation-duration: 0.4s;
					animation-timing-function: cubic-bezier(0.16, 0.03, 0.08, 1.55);
				}
			}

			.transform {
				display: block;
				@include vw(
					(
						//
						height: (null, 60)
					)
				);
				span {
					display: block;
					&:nth-of-type(2) {
						position: absolute;
						top: 100%;
						left: 0;
					}
				}
			}

			@keyframes btnAnimation {
				0% {
					opacity: 1;
					transform: translateY(0);
				}
				50% {
					opacity: 0;
					transform: translateY(2vw);
				}
				51% {
					opacity: 0;
					transform: translateY(-2vw);
				}
				100% {
					opacity: 1;
					transform: translateY(0);
				}
			}
		}
	}
</style>
