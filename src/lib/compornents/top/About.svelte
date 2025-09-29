<script lang="ts">
	import InnerLink from '$lib/compornents/parts/InnerLink.svelte';
</script>

<section class="about">
	<h2 class="about__title js-anim-chars">ABOUT</h2>
	<p class="about__text js-anim-lines">
		COLOHUは関東を拠点に全国で活動している建築設計事務所です。
		現地調査と利用者へのヒアリングを重視し、地域の特性を活かした建築設計を行っています。
		新築からインテリア、什器設計、まちづくり企画まで幅広く手がけています。
	</p>
	<enhanced:img src="$lib/images/top/about.png?enhanced" alt="" class="about__img js-scroll-in" />
	<div class="section__bottom">
		<InnerLink href="/project/" labelWords={['View', 'more']} />
	</div>
</section>

<style lang="scss">
	.about {
		@include vw(
			(
				//
				margin: (54 16 50, 120 0 110)
			)
		);
		&__title {
			@extend %font-Poppins;
			font-weight: 800;
			@include vw(
				(
					//
					font-size: (60, 130),
					letter-spacing: (12, 26)
				)
			);
		}
		&__text {
			@include vw(
				(
					//
					margin: (18 0 25, 31 0 46)
				)
			);

			@include media_sp() {
				line-height: 1.5;
			}
		}
		&__img {
			height: auto;
			margin-left: auto;
			width: 100%;
			@include vw(
				(
					//
					width: (null, 582)
				)
			);
		}
	}
	.section {
		&__bottom {
			text-align: right;
			:global(.inner-link) {
				@include vw(
					(
						//
						margin: (20 0 0 auto, 45 0 0 auto)
					)
				);
			}
		}
	}
</style>
