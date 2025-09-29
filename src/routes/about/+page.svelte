<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import Loading from '$lib/compornents/Loading.svelte';
	import {
		scrollInAnimation,
		setTextCharsAnimation,
		setTextLinesAnimation
	} from '$lib/scripts/gsap-animations';

	// - Data
	const { data }: PageProps = $props();

	// - Lifecycle
	onMount(() => {
		scrollInAnimation();
		setTextCharsAnimation();
		setTextLinesAnimation();
	});

	onMount(() => {
		const sections = document.querySelectorAll('.about__sec');
		sections.forEach((section) => {
			const link = document.querySelector(`.-${section.id}`);

			ScrollTrigger.create({
				trigger: section,
				start: 'top 10%',
				end: 'bottom 10%',
				onToggle: (self) => {
					if (self.isActive) {
						document
							.querySelectorAll('.about__menu-item')
							.forEach((a) => a.classList.remove('-active'));
						if (link) link.classList.add('-active');
					}
				}
			});
		});
	});

	// メニューの表示・非表示
	onMount(() => {
		const duration = 0.2;
		const menu = document.querySelector('.about__menu');
		gsap.set(menu, { autoAlpha: 0 });

		ScrollTrigger.create({
			trigger: '.about__content',
			start: 'top top',
			end: 'bottom bottom',
			onEnter: () => gsap.to(menu, { autoAlpha: 1, y: 0, duration }),
			onLeave: () => gsap.to(menu, { autoAlpha: 0, y: 30, duration }),
			onEnterBack: () => gsap.to(menu, { autoAlpha: 1, y: 0, duration }),
			onLeaveBack: () => gsap.to(menu, { autoAlpha: 0, y: 30, duration })
		});
	});

	// 目的のセクションまでスクロール
	const handleClickMenu = (e: Event, id: string) => {
		e.preventDefault();
		const targetSection = document.querySelector(`#${id}`);
		if (targetSection) {
			targetSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};
</script>

<svelte:head>
	<title>About | COLOHU</title>
</svelte:head>

<div class="lower about">
	<h2 class="lower__title js-anim-chars">ABOUT</h2>

	{#await data.about}
		<Loading />
	{:then res}
		<div class="about__menu">
			<button
				class="about__menu-item -concept -active"
				onclick={(e) => handleClickMenu(e, 'concept')}
			>
				CONCEPT
			</button>
			<button class="about__menu-item -outline" onclick={(e) => handleClickMenu(e, 'outline')}>
				OUTLINE
			</button>
			<button class="about__menu-item -profile" onclick={(e) => handleClickMenu(e, 'profile')}>
				PROFIEL
			</button>
		</div>
		<div class="about__content">
			<section class="about__sec -concept js-scroll-in" id="concept">
				<h2 class="about__sec-ttl">CONCEPT</h2>
				<p>{res.concept}</p>
			</section>

			<section class="about__sec -outline js-scroll-in" id="outline">
				<h2 class="about__sec-ttl">OUTLINE</h2>
				<table class="-outline line-break">
					<tbody>
						{#each res.outline as item (item)}
							<tr>
								<th>{item.title}</th>
								<td>{item.body}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</section>

			<section class="about__sec profile -profile js-scroll-in" id="profile">
				<h2 class="about__sec-ttl">PROFILE</h2>
				<enhanced:img
					src="$lib/images/pc/profile.png?enhanced&quality=80"
					alt="プロフィール画像"
					class="profile__img is-PC"
				/>
				<enhanced:img
					src="$lib/images/sp/profile.png?enhanced&quality=80"
					alt="プロフィール画像"
					class="profile__img is-SP"
				/>
				<p class="profile__role">COLOHU 代表取締役　一級建築士</p>
				<p class="profile__name">大崎 真幸 | Masayuki Osaki</p>
				<table class="line-break">
					<tbody>
						{#each res.history as item (item)}
							<tr>
								<th>{item.title}</th>
								<td>{item.body}</td>
							</tr>
						{/each}
					</tbody>
				</table>

				<section class="profile__sec -awards">
					<h3>受賞歴</h3>
					<table class="line-break">
						<tbody>
							{#each res.awards as item (item)}
								<tr>
									<th>{item.title}</th>
									<td>{item.body}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</section>

				<section class="profile__sec -publications">
					<h3>掲載歴</h3>
					<table class="line-break">
						<tbody>
							{#each res.publications as item (item)}
								<tr>
									<th>{item.title}</th>
									<td class:table-link={item.label}>
										{#if item.body}
											{item.body}
										{/if}
										{#if item.label}
											<a href={item.url} target="_blank">
												<span>{item.label}</span>
											</a>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
					<p class="profile__note">(s)：SALHAUSにて担当</p>
				</section>

				<section class="profile__sec -links">
					<h3>SALHAUSでの担当作品</h3>
					<ul>
						{#each res.links as item (item)}
							<li>
								<a href={item.url} target="_blank">
									<span>{item.label}</span>
								</a>
							</li>
						{/each}
					</ul>
				</section>
			</section>
		</div>
	{:catch}
		<p>時間をおいてもう一度お試しください。</p>
	{/await}
</div>

<style lang="scss">
	.about {
		a[target='_blank'] span {
			@extend %external-link;
		}

		&__menu {
			position: fixed;
			display: inline-flex;
			flex-direction: column;
			@extend %font-Poppins;
			@include vw(
				(
					//
					top: (null, 160),
					gap: (null, 24),
					font-size: (null, 20)
				)
			);
			@include media_sp {
				display: none;
			}

			button {
				cursor: pointer;
				border: none;
				background-color: transparent;
				text-align: left;
				line-height: 1.5;
				color: #d3d1d0;
				&:global(.-active) {
					font-weight: bold;
					color: var(--clr-text);
				}
			}
		}
		&__content {
			@include vw(
				(
					//
					margin-left: (null, 300),
					margin-top: (50, null),
					padding-top: (null, 100)
				)
			);
		}

		&__sec {
			@include vw(
				(
					//
					margin-bottom: (48, 130),
					margin-top: (null, -70),
					padding-top: (null, 70)
				)
			);

			&.-concept {
				h2 {
					@include vw(
						(
							//
							margin-bottom: (28, 36)
						)
					);
				}
			}
			&.-outline {
				h2 {
					@include vw(
						(
							//
							margin-bottom: (10, 22)
						)
					);
				}
			}
			&.-profile {
				h2 {
					@include vw(
						(
							//
							margin-bottom: (24, 42)
						)
					);
				}
			}
		}
		&__sec-ttl {
			@extend %font-Poppins;
			font-weight: 700;
			line-height: 1;
			@include vw(
				(
					//
					font-size: (34, 50),
					letter-spacing: (6, 10)
				)
			);
		}

		table {
			border-collapse: collapse;

			&.-outline {
				tr {
					@include media_sp {
						display: flex;
						flex-direction: column;
					}
				}
				th {
					@include vw(
						(
							//
							width: (300, null),
							padding: (16 8 5, null)
						)
					);
				}
				td {
					@include vw(
						(
							//
							padding: (0 8 16, null)
						)
					);
				}
			}

			tr {
				vertical-align: top;
				border-bottom: 1px solid #f0efef;
			}
			th {
				text-align: left;
				@include vw(
					(
						//
						width: (95, 190),
						padding: (16 8, 24 12)
					)
				);
			}

			td {
				line-height: 180%;
				@include vw(
					(
						//
						padding: (16 8, 24 12),
						font-size: (16, null)
					)
				);

				&:global(.table-link) {
					@include vw(
						(
							//
							padding-left: (0, null)
						)
					);
				}
			}
		}

		.profile {
			margin-bottom: 0;
			&__img {
				width: 100%;
				height: auto;
			}
			&__role {
				@include vw(
					(
						//
						margin: (25 0 4, 50 0 16)
					)
				);
			}
			&__name {
				@include vw(
					(
						//
						font-size: (24, 30),
						margin-bottom: (8, 24)
					)
				);
			}
			&__sec {
				@include vw(
					(
						//
						margin-top: (36, 86)
					)
				);

				h3 {
					font-weight: 500;
					@include vw(
						(
							//
							margin-bottom: (16, 8),
							font-size: (18, null)
						)
					);
				}
			}
			&__note {
				@include vw(
					(
						//
						font-size: (12, 12),
						margin-top: (16, 16)
					)
				);
			}

			ul {
				display: flex;
				flex-direction: column;
				li {
					border-bottom: 1px solid #f0efef;
					a {
						display: block;
						@include vw(
							(
								//
								padding: (15 8, 24 10)
							)
						);
					}
				}
			}
		}
	}
</style>
