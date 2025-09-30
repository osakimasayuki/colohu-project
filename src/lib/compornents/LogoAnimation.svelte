<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Logo1 from '$lib/svg/LogoSeparate1.svelte';
	import Logo2 from '$lib/svg/LogoSeparate2.svelte';
	import Logo3 from '$lib/svg/LogoSeparate3.svelte';
	import Logo4 from '$lib/svg/LogoSeparate4.svelte';
	import Logo5 from '$lib/svg/LogoSeparate5.svelte';
	import Logo6 from '$lib/svg/LogoSeparate6.svelte';

	onMount(() => {
		const items = gsap.utils.toArray('.logo-chara');
		const anim = gsap.from(items, {
			y: 50,
			opacity: 0,
			duration: 0.4,
			ease: 'power2.out',
			stagger: 0.06
		});

		return () => anim.kill();
	});
</script>

<span class="logo__wrap js-logo-anim link-anim">
	<Logo1 />
	<Logo2 />
	<Logo3 />
	<Logo4 />
	<Logo5 />
	<Logo6 />
</span>

<style lang="scss">
	.logo {
		&__wrap {
			display: flex;

			:global(.logo-chara) {
				fill: var(--clr-text);
			}
		}
	}
</style>
