<script lang="ts">
	import Logo from '$lib/images/logo.svg';
	import { onMount, onDestroy } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	let trigger: gsap.core.Tween | undefined;

	const setContactAnim = () => {
		if (trigger) trigger.kill();
		const split = SplitText.create('.contact__title', { type: 'chars' });
		trigger = gsap.from(split.chars, {
			y: 30,
			opacity: 0,
			duration: 0.2,
			delay: 0.2,
			ease: 'easeOutSine',
			stagger: 0.02,
			onStart: () => {
				// Intersection Observerで表示されたときにアニメーション開始
			}
		});
	};

	let observer: IntersectionObserver;

	onMount(() => {
		const el = document.querySelector('.footer');
		if (!el) return;

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setContactAnim();
					}
				});
			},
			{
				root: null,
				threshold: 0.1
			}
		);

		observer.observe(el);
	});

	onDestroy(() => {
		if (observer) observer.disconnect();
		if (trigger) trigger.kill();
	});

	onMount(setContactAnim);
	onNavigate(setContactAnim);
</script>

<footer class="footer">
	<div class="contact" id="contact">
		<h2 class="contact__title">Contact Us</h2>
		<a href="mailto:info@colohu.com" class="contact__link link-anim">
			<span>info</span><span>@</span><span>colohu</span><span>.com</span>
		</a>
	</div>

	<div class="footer__middle">
		<a href="/privacy-policy/" class="link-anim"><span>Privacy</span><span>Policy</span></a>
		<p>Copyright ©︎ 2025 COLOHU.</p>
	</div>
	<img src={Logo} alt="COLOHU" class="footer__logo" />
</footer>

<style lang="scss">
	.footer {
		@include vw(
			(
				//
				padding: (64 16 30, 160 48 60)
			)
		);
		@include media_sp {
			display: flex;
			flex-direction: column;
		}

		&__middle {
			@extend %font-Poppins;
			display: flex;
			justify-content: space-between;
			@include media_sp {
				border-top: 1px solid #d9d9d9;
				flex-direction: column;
			}
			@include vw(
				(
					//
					padding: (22 0 40, 45 0 75),
					margin: (33 0 0, null),
					gap: (10, null)
				)
			);

			.link-anim {
				display: inline-flex;
				@include vw(
					(
						//
						gap: (8, 8)
					)
				);
			}

			p {
				font-weight: 400;
			}
		}
		&__logo {
			width: 100%;
			@include media_sp {
				order: 2;
			}
		}
	}

	.contact {
		@extend %font-Poppins;
		display: flex;
		justify-content: space-between;
		line-height: 1;
		border-bottom: 1px solid #d9d9d9;
		@include vw(
			(
				//
				padding: (null, 10 0 60)
			)
		);
		@include media_sp {
			display: block;
		}

		&__title {
			font-weight: 400;
			@include vw(
				(
					//
					font-size: (40, 60),
					margin-bottom: (20, null)
				)
			);
		}
		&__link {
			text-decoration: underline;
			@include vw(
				(
					//
					font-size: (40, 60)
				)
			);
			@include hover {
				span {
					text-decoration: underline;
				}
			}
		}
	}
</style>
