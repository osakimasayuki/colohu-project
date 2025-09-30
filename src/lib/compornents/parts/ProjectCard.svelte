<script lang="ts">
	import type { ProjectType } from '$lib/@types.d';
	import { dateFrormatterYear } from '$lib/scripts/utils';

	//  - Props
	interface Props {
		item: ProjectType;
	}
	let { item }: Props = $props();
</script>

<a
	href={item.external_link ? item.external_link : `/project/${item.id}/`}
	class="project__link"
	target={item.external_link ? '_blank' : '_self'}
	rel={item.external_link ? 'noopener noreferrer' : ''}
>
	<span>
		{#each item.thumbs as thumb, j (thumb.url)}
			<img class="project__thumb" src="{thumb.url}?fm=webp" alt={`${j}`} />
		{/each}
	</span>

	<span class="project__bottom">
		<span class="project__title">{item.title}</span>
		<span class="project__info">
			<span>{item.category}</span><span>{dateFrormatterYear(item.date)}</span>
		</span>
	</span>
</a>

<style lang="scss">
	.project {
		&__link {
			position: relative;
			display: block;
			height: 100%;

			@include hover {
				.project__thumb {
					&:nth-of-type(1) {
						opacity: 1;
					}
					&:nth-of-type(2) {
						opacity: 2;
					}
				}
			}
		}

		&__thumb {
			width: 100%;
			height: 100%;
			transition: 0.2s opacity ease-in-out;
			object-fit: cover;
			object-position: center;
			&:nth-of-type(2) {
				position: absolute;
				top: 0;
				left: 0;
				opacity: 0;
			}
		}

		&__bottom {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			color: #ffffff;
			font-weight: 500;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			@include vw(
				(
					//
					height: (37, 40),
					padding: (8, 8 15 0),
					font-size: (14, 14),
					gap: (12, 30)
				)
			);
		}

		&__title {
			line-height: 1.5;
			@include vw(
				(
					//
					font-size: (null, 16),
					margin-bottom: (0, 10)
				)
			);
		}
		&__info {
			@extend %font-Poppins;
			font-weight: 400;
			display: flex;
			@include vw(
				(
					//
					gap: (24, 25),
					font-size: (12, 14),
					margin-bottom: (0, 8)
				)
			);

			span:nth-of-type(1) {
				position: relative;

				&::after {
					content: '';
					position: absolute;
					top: 0;
					top: 50%;
					transform: translateY(-50%);
					width: 1px;
					background-color: #ffffff;
					@include vw(
						(
							//
							right: (-12, -15),
							height: (12, 16)
						)
					);
				}
			}
		}
	}
</style>
