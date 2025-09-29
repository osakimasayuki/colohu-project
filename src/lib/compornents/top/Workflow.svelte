<script lang="ts">
	import Splide from '@splidejs/splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import '@splidejs/splide/css';
	import InnerLink from '$lib/compornents/parts/InnerLink.svelte';
	import { onMount } from 'svelte';

	const slideOption = {
		type: 'loop',
		arrows: false,
		pagination: false,
		autoWidth: true,
		autoScroll: {
			drag: 'free',
			speed: 1,
			pauseOnHover: false
		}
	};
	onMount(() => {
		const body = document.body;
		const trigger = ScrollTrigger.create({
			trigger: '.js-inversion-back',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				body.classList.add('is-dark');
			},
			onLeave: () => {
				body.classList.remove('is-dark');
			},
			onEnterBack: () => {
				body.classList.add('is-dark');
			},
			onLeaveBack: () => {
				body.classList.remove('is-dark');
			}
		});
		return () => trigger.kill();
	});

	onMount(() => {
		new Splide('.splide', slideOption).mount({ AutoScroll });
	});
</script>

<section class="workflow js-inversion-back">
	<div class="workflow__top">
		<h2 class="js-anim-chars"><span>WORK</span><span>FLOW</span></h2>
		<p class="workflow__text js-anim-lines">
			COLOHUでは、お客様との対話を重視した設計プロセスで計画を進めます。<br />
			初回のご相談から完成まで、どのような手順で進むのかをご紹介します。
		</p>
	</div>

	<InnerLink href="/workflow/" labelWords={['View', 'more']} />

	<div class="workflow__slide splide">
		<div class="splide__track">
			<ul class="splide__list">
				<li class="splide__slide">
					<enhanced:img src="$lib/images/pc/top/workflow_1.png?enhanced" alt="" class="is-PC" />
					<enhanced:img src="$lib/images/sp/top/workflow_1.png?enhanced" alt="" class="is-SP" />
				</li>
				<li class="splide__slide">
					<enhanced:img src="$lib/images/pc/top/workflow_2.png?enhanced" alt="" class="is-PC" />
					<enhanced:img src="$lib/images/sp/top/workflow_2.png?enhanced" alt="" class="is-SP" />
				</li>
				<li class="splide__slide">
					<enhanced:img src="$lib/images/pc/top/workflow_3.png?enhanced" alt="" class="is-PC" />
					<enhanced:img src="$lib/images/sp/top/workflow_3.png?enhanced" alt="" class="is-SP" />
				</li>
				<li class="splide__slide">
					<enhanced:img src="$lib/images/pc/top/workflow_4.png?enhanced" alt="" class="is-PC" />
					<enhanced:img src="$lib/images/sp/top/workflow_4.png?enhanced" alt="" class="is-SP" />
				</li>
				<li class="splide__slide">
					<enhanced:img src="$lib/images/pc/top/workflow_5.png?enhanced" alt="" class="is-PC" />
					<enhanced:img src="$lib/images/sp/top/workflow_5.png?enhanced" alt="" class="is-SP" />
				</li>
				<li class="splide__slide">
					<enhanced:img src="$lib/images/pc/top/workflow_6.png?enhanced" alt="" class="is-PC" />
					<enhanced:img src="$lib/images/sp/top/workflow_6.png?enhanced" alt="" class="is-SP" />
				</li>
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	.workflow {
		width: 100vw;
		margin-left: calc(-50vw + 50%);
		text-align: center;
		@include vw(
			(
				//
				padding: (64 0, 170 0 163)
			)
		);

		&__top {
			@include vw(
				(
					//
					padding: (0 16, null)
				)
			);
		}

		h2 {
			@extend %font-Poppins;
			font-weight: 800;
			@include vw(
				(
					//
					font-size: (60, 130),
					letter-spacing: (12, 26),
					margin-bottom: (16, 30),
					padding-left: (null, 23)
				)
			);

			@include media_sp() {
				font-weight: 700;
				line-height: 1.2;
				span {
					display: block;
					text-align: left;
					&:nth-last-of-type(1) {
						text-align: right;
						@include vw(
							(
								//
								margin-right: (-10, null)
							)
						);
					}
				}
			}
		}

		&__text {
			text-align: center;
			@include vw(
				(
					//
					line-height: (24.5, null)
				)
			);
			@include media_sp() {
				text-align: left;
			}
		}

		:global(.inner-link) {
			color: #ffffff;
			@include vw(
				(
					//
					margin-top: (20, 35),
					margin-bottom: (43, 70)
				)
			);
		}
		:global(.inner-link svg path) {
			fill: #ffffff;
		}

		&__slide {
			overflow: hidden;
			.splide__list {
				@include vw(
					(
						//
						margin-top: (44, 70)
					)
				);
			}

			li {
				position: relative;
				@include vw(
					(
						//
						width: (390, 480),
						height: (260, 320)
					)
				);
			}

			picture,
			img {
				position: absolute;
				top: 0;
				left: 0;
				@include vw(
					(
						//
						width: (390, 480),
						height: (260, 320)
					)
				);
			}
		}
	}
</style>
