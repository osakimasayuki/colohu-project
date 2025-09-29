<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let isOverlayMode = $state(false);
	let offsetX = $state(0);
	let offsetY = $state(0);
	let opacity = $state(0.5);
	let hidden = $state(false);

	// 現在のルートパスからデザイン画像のパスを組み立てる
	let designPath = $state('');
	let designPathSp = $state('');
	let pcImgData = $state({});
	let spImgData = $state({});

	onMount(() => {
		// design/ 配下の画像を一括 import
		const imageModules = import.meta.glob('/design/**/*.{png,jpg,jpeg,webp}', {
			eager: true,
			query: {
				enhanced: true
			}
		});
		isOverlayMode = $page.url.search.includes('design');
		if (isOverlayMode) {
			let pathName = $page.route.id === '/' ? '' : $page.route.id;
			if (pathName === null) pathName = '/404';
			designPath = `/design${pathName}/design.png`;
			designPathSp = `/design${pathName}/design_sp.png`;
			pcImgData = imageModules[designPath] ?? {};
			spImgData = imageModules[designPathSp] ?? {};

			window.addEventListener('keydown', handleKeyDown);
			window.addEventListener('keyup', handleKeyUp);
		}
	});

	// onDestroy(() => {
	// 	window.removeEventListener('keydown', handleKey);
	// 	window.removeEventListener('keyup', handleKeyUp);
	// });

	function handleKeyDown(e: KeyboardEvent) {
		if (!isOverlayMode) return;

		const step = e.shiftKey ? 10 : 1;

		switch (e.key) {
			case 'ArrowUp':
				offsetY -= step;
				e.preventDefault();
				break;
			case 'ArrowDown':
				offsetY += step;
				e.preventDefault();
				break;
			case 'ArrowLeft':
				offsetX -= step;
				e.preventDefault();
				break;
			case 'ArrowRight':
				offsetX += step;
				e.preventDefault();
				break;
			case 'Meta': // Commandキー
				opacity = 0;
				break;
			case 'Alt': // Optionキー
				opacity = 1;
				break;
		}
	}

	function handleKeyUp(e: KeyboardEvent) {
		if (!isOverlayMode) return;

		if (e.key === 'Meta') {
			opacity = 0.5;
		}
		if (e.key === 'Alt') {
			opacity = 0.5;
		}
	}
</script>

{#if isOverlayMode}
	<div
		class="overlay"
		style="
			transform: translate({offsetX}px, {offsetY}px);
			opacity: {opacity};
		"
	>
		<enhanced:img src={pcImgData.default} alt="design overlay" class="is-PC" />
		<enhanced:img src={spImgData.default} alt="design overlay" class="is-SP" />
	</div>
{/if}

<style lang="scss">
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: auto;
		max-width: none;
		pointer-events: none;
		z-index: 9999;

		img {
			width: 100%;
			height: auto;
			user-select: none;
		}
	}
</style>
