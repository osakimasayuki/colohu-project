<script lang="ts">
	let { href, label = '' } = $props();
</script>

<a {href} class="single-link">
	<span>
		<span class="transform">
			<span>{label}</span>
			<span>{label}</span>
		</span>
	</span>
</a>

<style lang="scss">
	.single-link {
		overflow: hidden;
		position: relative;
		display: block;
		@include vw(
			(
				//
				height: (null, 20)
			)
		);

		@include hover {
			opacity: 1;
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
					height: (null, 40)
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
</style>
