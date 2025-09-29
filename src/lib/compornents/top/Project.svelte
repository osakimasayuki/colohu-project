<script lang="ts">
	import type { ProjectType } from '$lib/@types.d';
	import InnerLink from '$lib/compornents/parts/InnerLink.svelte';
	import ProjectCard from '$lib/compornents/parts/ProjectCard.svelte';

	// - Props
	interface Props {
		data: ProjectType[];
	}
	const { data }: Props = $props();
</script>

<section class="projects">
	<ul class="projects__list">
		{#each data as item, _ (item.id)}
			<li class="project js-scroll-in">
				<ProjectCard {item} />
			</li>
		{/each}
	</ul>
	<div class="section__bottom">
		<InnerLink href="/project/" labelWords={['All', 'Projects']} />
	</div>
</section>

<style lang="scss">
	.projects {
		@include vw(
			(
				//
				padding: (0 16, null)
			)
		);
		&__list {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			@include vw(
				(
					//
					gap: (16, 24 28)
				)
			);
		}
	}

	.project {
		position: relative;
		width: calc(50% - var(--gap));
		@include vw(
			(
				//
				--gap: (0, 14),
				height: (240, 387)
			)
		);

		@include media_sp {
			width: 100%;
		}

		&:nth-of-type(3n) {
			width: 100%;
			@include vw(
				(
					//
					height: (null, 790)
				)
			);
		}
	}

	.section {
		&__bottom {
			text-align: right;
			:global(.inner-link) {
				@include vw(
					(
						//
						margin: (20 0 0 auto, 45 0 0 auto)
					)
				);
			}
		}
	}
</style>
