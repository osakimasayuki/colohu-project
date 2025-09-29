<script lang="ts">
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import SnsLinks from '$lib/compornents/parts/SnsLinks.svelte';
	import LogoAnimation from '$lib/compornents/LogoAnimation.svelte';
	import SingleLink from '$lib/compornents/parts/SingleLink.svelte';

	let isOpen: boolean = $state(false);
	let isTop: boolean = $state(false);
	let currentPath: string = $state('');
	let logoAnimTrigger: ScrollTrigger | undefined;
	let headerLogoDom: HTMLElement;

	// - Functions
	const toggleNav = (bool: boolean) => {
		isOpen = bool;
		if (isOpen) {
			document.body.classList.add('is-fixed');
		} else {
			document.body.classList.remove('is-fixed');
		}
	};

	// - Lifecycle
	onNavigate((navigation) => {
		const nextPath = navigation.to?.url.pathname;
		isTop = nextPath === '/';
		if (!isTop) {
			if (logoAnimTrigger) logoAnimTrigger.kill();
			if (headerLogoDom) headerLogoDom.classList.remove('is-top');
		} else {
			if (headerLogoDom) headerLogoDom.classList.add('is-top');
		}

		if (nextPath && currentPath !== nextPath) {
			currentPath = nextPath;
			toggleNav(false);
		}
	});

	onMount(() => {
		isTop = $page.url.pathname === '/';
		if (isTop) {
			if (headerLogoDom) headerLogoDom.classList.add('is-top');
		}
	});

	onMount(() => {
		const headerLogo = document.querySelector('.header-logo');
		if (!headerLogo) return;

		ScrollTrigger.create({
			trigger: '.js-logo-anim-trigger',
			start: 'top top',
			onEnter: () => {
				if (isTop) headerLogo.classList.remove('is-top');
			},
			onEnterBack: () => {
				if (isTop) headerLogo.classList.add('is-top');
			},
			onLeaveBack: () => {
				if (isTop) headerLogo.classList.add('is-top');
			}
		});
	});
</script>

<a class="header-logo" href="/" aria-label="サイトTOPへ" bind:this={headerLogoDom}>
	<LogoAnimation />
</a>
<header class="header">
	<nav class="nav" class:is-open={isOpen}>
		<div class="nav__menu is-SP">
			<SnsLinks className="-outside" />
			<button class="nav__toggle" onclick={() => toggleNav(!isOpen)} aria-label="メニュー">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
		<div class="nav__links">
			<ul>
				<li
					aria-current={$page.url.pathname.includes('/project/') ? 'page' : undefined}
					class="nav__link"
				>
					<SingleLink href="/project" label="Project" />
				</li>
				<li aria-current={$page.url.pathname === '/about/' ? 'page' : undefined} class="nav__link">
					<SingleLink href="/about" label="About" />
				</li>
				<li
					aria-current={$page.url.pathname === '/workflow/' ? 'page' : undefined}
					class="nav__link"
				>
					<SingleLink href="/workflow" label="Workflow" />
				</li>
				<li
					aria-current={$page.url.pathname.includes('/news/') ? 'page' : undefined}
					class="nav__link"
				>
					<SingleLink href="/news" label="News" />
				</li>
				<li class="nav__link">
					<SingleLink href="mailto:info@colohu.com" label="Contact" />
				</li>
			</ul>
			<SnsLinks className="is-PC" />
		</div>

		<div class="nav__bottom is-SP">
			<SnsLinks className="-hamburger" />
			<a href="/privacy-policy/">Privacy Policy</a>
		</div>
	</nav>
</header>

<style lang="scss">
	.header-logo {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 110;
		transition: transform 0.4s ease;
		transform: scale(1);
		transform-origin: left;
		@include vw(
			(
				//
				left: (16, 48),
				top: (22, 18),
				width: (166, 222),
				height: (24, 32)
			)
		);

		:global(svg) {
			height: 100%;
		}

		&:global(.is-top) {
			position: absolute;
			pointer-events: none;
			transform: scale(4.05);
			@include vw(
				(
					//
					top: (135, 288),
					left: (16, 48)
				)
			);

			@include media_sp {
				z-index: 90;
				transform: scale(2);
			}
		}
	}
	.header {
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100vw;
		z-index: 100;
		overflow: hidden;
		pointer-events: none;
		max-width: 2000px;
		background-color: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(5px);
	}
	.nav {
		position: relative;
		transition: margin-left 0.3s ease-in-out;
		pointer-events: all;
		@include vw(
			(
				//
				padding: (null, 20 37),
				height: (65, null)
			)
		);

		@include media_sp() {
			background-color: rgba(255, 255, 255, 0.3);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			overflow-y: auto;
			margin-left: 100vw;
			transition:
				background-color 0.3s ease-in-out,
				height 0.3s ease-in-out,
				margin-left 0.3s ease-in-out;
		}

		&.is-open {
			margin-left: 0;

			@include media_sp() {
				// background-color: #ffffff;
				height: 100vh;
			}

			.nav__toggle {
				span {
					&:nth-of-type(1) {
						top: 50%;
						transform: translateY(-50%) rotate(45deg);
					}
					&:nth-of-type(2) {
						opacity: 0;
					}
					&:nth-of-type(3) {
						bottom: 50%;
						transform: translateY(50%) rotate(-45deg);
					}
				}
			}
		}

		&__menu {
			position: fixed;
			z-index: 10;
			align-items: center;
			@include media_sp {
				display: flex;
			}
			@include vw(
				(
					//
					right: (19 null),
					top: (22, null),
					gap: (20, null)
				)
			);

			:global(.sns.-outside) {
				@include vw(
					(
						//
						gap: (16, null)
					)
				);

				:global(svg) {
					@include vw(
						(
							//
							width: (22, null),
							height: (21, null)
						)
					);
				}
			}
		}

		&__toggle {
			border: none;
			background-color: transparent;
			display: block;
			position: relative;
			&:focus {
				outline: none;
			}
			@include vw(
				(
					//
					width: (18, null),
					height: (16, null)
				)
			);

			span {
				background-color: #09244b;
				position: absolute;
				left: 0;
				transition: all 0.3s ease-in-out;
				@include vw(
					(
						//
						width: (18, null),
						height: (2, null),
						border-radius: (2, null)
					)
				);
				&:nth-of-type(1) {
					top: 0;
				}
				&:nth-of-type(2) {
					top: 50%;
					transform: translateY(-50%);
				}
				&:nth-of-type(3) {
					bottom: 0;
				}
			}
		}

		&__logo {
			position: absolute;
			@include vw(
				(
					//
					left: (16, 48),
					top: (22, 24),
					width: (166, 222)
				)
			);

			:global(svg) {
				// width: 100%;
				// height: auto;
			}
		}

		&__links {
			@include media_not_sp() {
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			ul {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				@include vw(
					(
						//
						padding-top: (100, null)
					)
				);

				@include media_sp() {
					flex-direction: column;
					align-items: flex-start;
				}
			}

			:global(.sns__item) {
				@include vw(
					(
						//
						padding-top: (null, 4)
					)
				);
			}
		}
		&__link {
			&[aria-current='page'] {
				:global(.single-link) {
					font-weight: bold;
				}
			}
			:global(.single-link) {
				@extend %font-Poppins;
				display: block;
				font-weight: 500;

				@include vw(
					(
						//
						font-size: (50, 16),
						line-height: (null, 20),
						margin-left: (15, 25),
						margin-bottom: (1, null)
					)
				);

				@include media_sp() {
					font-weight: 700;
				}
			}
		}

		&__bottom {
			font-weight: 500;
			@extend %font-Poppins;
			@include vw(
				(
					//
					letter-spacing: (0.4, null),
					padding: (16, null)
				)
			);

			:global(.sns.-hamburger .sns__item) {
				@include vw(
					(
						//
						margin-right: (20, null),
						margin-bottom: (16, null)
					)
				);

				:global(svg) {
					@include vw(
						(
							//
							width: (22, null),
							height: (21, null)
						)
					);
				}
			}
		}
	}
</style>
