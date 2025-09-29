<script lang="ts">
	// - Styles
	import '../reset.css';
	import '$lib/scss/common.scss';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { setTextCharsAnimation } from '$lib/scripts/gsap-animations';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	import OpeningAnimation from '$lib/compornents/OpeningAnimation.svelte';

	// - Compornents
	import Header from '$lib/compornents/Header.svelte';
	import Footer from '$lib/compornents/Footer.svelte';
	import DesignOverlay from '$lib/compornents/DesignOverlay.svelte';

	// - Props
	let { children } = $props();
	let isLoading: boolean = $state(true);

	// Lifesycle
	onMount(setTextCharsAnimation);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(SplitText);

		setTimeout(() => {
			isLoading = false;
		}, 1300);
	});
</script>

<svelte:head>
	<title>COLOHU</title>
	<meta
		name="description"
		content="COLOHUは関東を拠点に全国で活動している建築設計事務所です。 新築からインテリア、什器設計、まちづくり企画まで幅広く手がけています。"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	{#if isLoading}
		<OpeningAnimation />
	{:else}
		<Header />

		<main id="smooth-wrapper">
			<div id="smooth-content">
				{@render children()}
			</div>
		</main>

		<Footer />
	{/if}

	{#if import.meta.env.DEV}
		<DesignOverlay />
	{/if}
</div>
