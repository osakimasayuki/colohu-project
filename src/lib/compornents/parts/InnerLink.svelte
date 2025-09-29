<script lang="ts">
	let { href, labelWords = [], isBack = false } = $props();
</script>

<a {href} class="inner-link js-anim-words link-anim" class:-back={isBack}>
	{#if isBack}
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M24.0003 23.4663L22.1337 25.333L9.33366 12.533L9.33366 23.9997L6.66699 23.9997L6.66699 7.99968L22.667 7.99968L22.667 10.6663L11.2003 10.6663L24.0003 23.4663Z"
			/>
		</svg>
	{/if}

	{#each labelWords as word, i (i)}
		<span>{word}</span>
	{/each}

	{#if !isBack}
		<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3.16707 21.9997L0.83374 19.6663L16.8337 3.66634H2.50041V0.333008H22.5004V20.333H19.1671V5.99967L3.16707 21.9997Z"
			/>
		</svg>
	{/if}
</a>

<style lang="scss">
	.inner-link {
		position: relative;
		display: inline-flex;
		@extend %font-Poppins;
		@include vw(
			(
				//
				font-size: (30, 40),
				padding-right: (38, 47),
				gap: (8, 12)
			)
		);

		&.-back {
			padding-right: 0;
			@include vw(
				(
					//
					padding-left: (40, 40),
					font-size: (20, 20)
				)
			);
			svg {
				position: absolute;
				left: 0;
				@include vw(
					(
						//
						width: (32, 32),
						height: (32, 32),
						top: (0, -5)
					)
				);
			}
		}

		svg {
			position: absolute;
			fill: var(--clr-text);
			@include vw(
				(
					//
					width: (16, 22),
					height: (16, 22),
					top: (17, 22),
					right: (7, 8)
				)
			);
		}
	}
</style>
