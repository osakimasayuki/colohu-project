<script lang="ts">
	import InnerLink from '$lib/compornents/parts/InnerLink.svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const redirects: Record<string, string> = {
		'/works/eFGjIPaX/': '/project/ixxisbsit/',
		'/works/1SIt6ALF/': '/project/ahgdbv_p5/',
		'/works/QAfLQSU1/': '/project/rcfd67p30/',
		'/works/W8oFqyGl/': '/project/yp_utfo9uf/',
		'/works/k_mb83ub/': '/project/jfuztd7pzo4/',
		'/works/OCFFScJu/': '/project/vu7os5el_5l/',
		'/works/GotandaOffice/': '/project/1om_wwbft0/'
	};

	let is404: boolean = $state(true);

	onMount(() => {
		const currentPath = $page.url.pathname;
		const target = redirects[currentPath];
		if (target) {
			is404 = false;
			goto(target);
		}
	});
</script>

<svelte:head>
	<title>Page Not Found | COLOHU</title>
</svelte:head>

{#if is404}
	<div class="not-found">
		<svg
			width="446"
			height="171"
			viewBox="0 0 446 171"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="not-found__svg"
		>
			<path
				d="M223.777 44.1974C246.419 44.1974 264.827 62.606 264.827 85.2478C264.827 107.89 246.419 126.298 223.777 126.298C201.135 126.298 182.727 107.89 182.727 85.2478C182.727 62.606 201.135 44.1974 223.777 44.1974ZM223.777 0C176.683 0 138.529 38.1819 138.529 85.2478C138.529 132.314 176.711 170.496 223.777 170.496C270.843 170.496 309.025 132.314 309.025 85.2478C309.025 38.1819 270.871 0 223.777 0Z"
				fill="#231815"
			/>
			<path
				d="M0 124.164V97.6594L50.227 26H85.4023V96.3506H98V124.164H85.4023V143.796H53.0083V124.164H0ZM55.4624 62.1569L32.8848 96.3506H55.4624V62.1569Z"
				fill="#231815"
			/>
			<path
				d="M348 124.164V97.6594L398.227 26H433.402V96.3506H446V124.164H433.402V143.796H401.008V124.164H348ZM403.462 62.1569L380.885 96.3506H403.462V62.1569Z"
				fill="#231815"
			/>
		</svg>

		<p class="not-found__text">
			お探しのページが見つかりませんでした。<br /><br />
			一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。<br />
			お手数ですが、メニューより再度お探しください。
		</p>

		<InnerLink href="/" isBack labelWords={['Back', 'to', 'Top']} />
	</div>
{/if}

<style lang="scss">
	.not-found {
		text-align: center;
		@include vw(
			(
				//
				margin: (0 0 40, 200 0 0)
			)
		);
		&__svg {
			@include vw(
				(
					//
					margin: (120 0 5, 20 0 24),
					width: (200, 446),
					height: (100, null)
				)
			);
		}
		&__text {
			@include vw(
				(
					//
					margin-bottom: (22, 50),
					padding: (0 16, null)
				)
			);
		}
	}
</style>
