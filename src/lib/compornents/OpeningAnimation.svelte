<script lang="ts">
	import { gsap } from 'gsap';
	import Logo1 from '$lib/svg/LogoSeparate1.svelte';
	import Logo2 from '$lib/svg/LogoSeparate2.svelte';
	import Logo3 from '$lib/svg/LogoSeparate3.svelte';
	import Logo4 from '$lib/svg/LogoSeparate4.svelte';
	import Logo5 from '$lib/svg/LogoSeparate5.svelte';
	import Logo6 from '$lib/svg/LogoSeparate6.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const items = gsap.utils.toArray('.logo-chara');
		gsap.to(items, {
			y: -60,
			delay: 0.2,
			duration: 1,
			ease: 'power2.inOut',
			stagger: 0.04
		});
	});
</script>

<div class="op-anim">
	<div class="op-anim__inner">
		<span class="logo__wrap">
			<Logo1 />
			<Logo2 />
			<Logo3 />
			<Logo4 />
			<Logo5 />
			<Logo6 />
		</span>
	</div>
</div>

<style lang="scss">
	.op-anim {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		z-index: 999;
		pointer-events: none;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: ease-out 0.5s 1.2s slideOut forwards;

		&__inner {
			position: relative;
			width: 150px;
			height: 60px;
			overflow: hidden;
		}

		@keyframes slideOut {
			0% {
				top: 0;
			}
			100% {
				top: -100%;
			}
		}

		.logo__wrap {
			display: flex;
			overflow: hidden;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;

			:global(.logo-chara) {
				fill: var(--clr-text);
			}
		}
	}
</style>
