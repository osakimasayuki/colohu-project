<script lang="ts">
	// import { page } from '$app/stores';

	// - Props
	interface Props {
		pagePath: string;
		totalPage: number;
		pageNo: number;
	}

	const { pagePath, totalPage, pageNo }: Props = $props();

	// - Variables
	const POINT_LENGTH = 3; // ページネーションの中間部分の数
	const currentPage: number = $state(pageNo);

	// - Functions
	const getLink = (pageNum: number) => {
		// ページ数の更新
		const params = new URLSearchParams({ page: `${pageNum}` });

		return `${pagePath}?${params}`;
	};
</script>

<nav class="pagination">
	<ul class="pagination__list">
		<!-- 最初のページ -->
		{#if pageNo > 2}
			<li>
				<a href={getLink(1)} class:-current={currentPage === 1} data-sveltekit-reload>1</a>
			</li>
			{#if pageNo > POINT_LENGTH}
				<li class="dot">...</li>
			{/if}
		{/if}
		<!-- 中間のページ -->
		{#each Array.from({ length: totalPage }, (_, i) => i + 1) as id (id)}
			{#if id === pageNo || id === pageNo - 1 || id === pageNo + 1}
				<!-- {id}, {pageNo} -->
				<li>
					<a href={getLink(id)} class:-current={pageNo === id} data-sveltekit-reload>
						{id}
					</a>
				</li>
			{/if}
		{/each}

		<!-- 最後のページ -->
		{#if pageNo < totalPage - 1}
			{#if pageNo < totalPage - 2}
				<li class="dot">...</li>
			{/if}
			<li>
				<a href={getLink(totalPage)} class:-current={pageNo === totalPage} data-sveltekit-reload>
					{totalPage}
				</a>
			</li>
		{/if}
	</ul>

	<!-- <ul class="pagination__arrows">
		<li>
			<a href={getLink(pageNo - 1)} class:-disabled={pageNo === 1}> ◀ </a>
		</li>
		<li>
			<a href={getLink(pageNo + 1)} class:-disabled={pageNo === totalPage}> ▶ </a>
		</li>
	</ul> -->
</nav>

<style lang="scss">
	.pagination {
		position: relative;

		&__list {
			display: grid;
			grid-auto-flow: column;
			justify-content: center;
			align-items: center;
			position: relative;
			margin: 0 auto;
			z-index: 1;
			color: #000000;

			@include vw(
				(
					//
					height: (60, 40),
					font-size: (16, 16),
					gap: (8, 8)
				)
			);

			a {
				position: relative;
				color: var(--clr-key);
				transition: color 0.3s ease('easeOutExpo');
				@include vw(
					(
						//
						margin: (null, 0 1)
					)
				);

				&:global(.-current) {
					pointer-events: none;
					font-weight: bold;
				}

				// @include hover {
				// 	text-decoration: underline;
				// }
			}
		}

		.dot {
			color: #a0a0a0;
		}
	}
</style>
