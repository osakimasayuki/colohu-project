<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import {
		scrollInAnimation,
		setTextCharsAnimation,
		setTextLinesAnimation
	} from '$lib/scripts/gsap-animations';
	import Img1Pc from '$lib/images/pc/workflow_1.png';
	import Img1Sp from '$lib/images/sp/workflow_1.png';
	import Img2Pc from '$lib/images/pc/workflow_2.png';
	import Img2Sp from '$lib/images/sp/workflow_2.png';
	import Img3Pc from '$lib/images/pc/workflow_3.png';
	import Img3Sp from '$lib/images/sp/workflow_3.png';
	import Img4Pc from '$lib/images/pc/workflow_4.png';
	import Img4Sp from '$lib/images/sp/workflow_4.png';
	import Img5Pc from '$lib/images/pc/workflow_5.png';
	import Img5Sp from '$lib/images/sp/workflow_5.png';
	import Img6Pc from '$lib/images/pc/workflow_6.png';
	import Img6Sp from '$lib/images/sp/workflow_6.png';

	const texts = [
		{
			title: 'お問い合わせ',
			id: 'section1',
			desc: 'まずは Contactよりお気軽にご連絡ください。ご予算や物件の状況、実現したいイメージなどをお聞かせいただきます。「こんな空間をつくりたい」「どんな建物ができるか相談したい」など構想段階でも構いませんので、ぜひお気軽にご相談ください。',
			imgPc: Img1Pc,
			imgSp: Img1Sp
		},
		{
			title: '物件選び・現地調査',
			id: 'section2',
			desc: '土地や物件がお決まりの場合は、現地を訪問し寸法や設備の状態などを丁寧に確認いたします。また全体のイメージやご要望をヒアリングし、概算の予算やスケジュールについてもお話しさせていただきます。土地や物件がお決まりでない場合は物件探しの段階からサポートできますので、お気軽にご相談ください。',
			imgPc: Img2Pc,
			imgSp: Img2Sp
		},
		{
			title: 'レイアウト・イメージ提案',
			id: 'section3',
			desc: 'まずはお客様とレイアウトの方向性を整理していきます。新築・内装いずれの場合でも、お客様のイメージを具体化できるよう、用途や動線、空間の使い方を丁寧にヒアリングしながら最適なご提案を行います。また空間イメージをわかりやすくお伝えするため、CGパースを用いてデザイン案を複数案ご提案いたします。',
			imgPc: Img3Pc,
			imgSp: Img3Sp
		},
		{
			title: '設計図作成・工事費見積もり',
			id: 'section4',
			desc: '確定したレイアウト・イメージをもとに設計図面を作成し、工事費見積もりを施工会社様に依頼します。予算を超える場合も、デザインを損なわずに予算内へ調整できるよう最適化します。ご予算・機能性・耐久性などを踏まえ、デザイン性と使いやすさのバランスが取れたプランになるまで一緒に仕上げていきます。',
			imgPc: Img4Pc,
			imgSp: Img4Sp
		},
		{
			title: '施工',
			id: 'section5',
			desc: '工事は、これまで数多くのプロジェクトを共にしてきた信頼できる施工会社様へ依頼いたします。着工前の確認申請や消防協議などの必要な手続きも弊社で対応いたします。私たちはお客様の窓口として、現場の進行管理や品質チェックを徹底し、設計図面や完成イメージと相違がないよう工事監理をしっかり行います。',
			imgPc: Img5Pc,
			imgSp: Img5Sp
		},
		{
			title: '竣工検査',
			id: 'section6',
			desc: 'お客様立会いのもと竣工検査を行い、寸法や納まり、品質に問題がないことを一緒にチェックします。お引き渡し後は、使い勝手や不具合がないかを確認するため定期点検を実施いたします。工事完了後もお客様のパートナーとして、末長いお付き合いを大切にしてまいります。',
			imgPc: Img6Pc,
			imgSp: Img6Sp
		}
	];

	onMount(() => {
		setTextCharsAnimation();
		setTextLinesAnimation();
		scrollInAnimation();
	});

	onMount(() => {
		const sections = document.querySelectorAll('.workflow__item');
		sections.forEach((section) => {
			const link = document.querySelector(`.-${section.id}`);

			ScrollTrigger.create({
				trigger: section,
				start: 'top 20%',
				end: 'bottom 20%',
				onToggle: (self) => {
					if (self.isActive) {
						document
							.querySelectorAll('.workflow__menu-item')
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
		const menu = document.querySelector('.workflow__menu');
		gsap.set(menu, { autoAlpha: 0 });

		ScrollTrigger.create({
			trigger: '.workflow__sections',
			start: 'top 20%',
			end: 'bottom 10%',
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
	<title>Workflow | COLOHU</title>
</svelte:head>

<div class="lower workflow">
	<h2 class="lower__title js-anim-chars">WORK<br class="is-SP" />FLOW</h2>

	<div class="">
		<div class="workflow__menu">
			{#each texts as item, i (i)}
				<button
					class="workflow__menu-item -{item.id}"
					data-target={item.id}
					class:-active={i === 0}
					onclick={(e) => handleClickMenu(e, item.id)}
				>
					{item.title}
				</button>
			{/each}
		</div>

		<div class="workflow__sections">
			{#each texts as item, i (i)}
				<section class="workflow__item js-scroll-in" id={item.id}>
					<img src={item.imgPc} class="workflow__img is-PC" alt="" />
					<img src={item.imgSp} class="workflow__img is-SP" alt="" />
					<div class="workflow__content">
						<h3>
							<span>0{i + 1}</span>
							{item.title}
						</h3>
						<p>{item.desc}</p>
					</div>
				</section>
			{/each}
		</div>
	</div>

	<section class="fee">
		<h3 class="fee__title">DESIGN FEE</h3>
		<p class="fee__sub-title">設計料について</p>
		<p class="fee__desc">
			工事総工費の 12〜15%（消費税別途）<br />
			(上記の設計料は初回提案料+設計図作成+工事監理を含みます)<br /><br />
			上記の算出方法に関わらず設計料については基本設定額として25万円（税別）からのご対応となります。<br
			/>
			プロジェクトの規模や内容に応じて、正式なお見積もりをご提示いたしますので、まずはお気軽にご相談ください。<br
			/><br />
			レイアウト・イメージ提案のみの場合は提案料として12万円（税別）の対応となります。<br />
			初回相談は無料ですのでお気軽にご相談ください。<br />
			※交通費や各種申請関連の手数料は別途申し受ける場合がございます。
		</p>
	</section>
</div>

<style lang="scss">
	.lower__title {
		@include media_sp {
			line-height: 1.2;
		}
	}
	.workflow {
		&__menu {
			position: fixed;
			display: inline-flex;
			flex-direction: column;
			@include vw(
				(
					//
					top: (null, 160),
					gap: (null, 24),
					font-size: (null, 20),
					width: (null, 199)
				)
			);
			@include media_sp {
				display: none;
			}
			button {
				line-height: 1.5;
				color: #d3d1d0;
				background-color: transparent;
				border: none;
				text-align: left;
				cursor: pointer;
				&.-active {
					font-weight: bold;
					color: var(--clr-text);
				}
			}
		}
		&__sections {
			display: flex;
			flex-direction: column;
			@include vw(
				(
					//
					gap: (30, 80),
					margin-left: (null, 302),
					margin-top: (46, 90)
				)
			);
			@include media_sp {
				width: 100%;
			}
		}
		&__item {
			display: flex;
			align-items: center;
			@include vw(
				(
					//
					margin-top: (null, -100),
					padding-top: (null, 100)
				)
			);

			@include media_sp {
				flex-direction: column;
			}

			h3 {
				font-weight: bold;
				position: relative;
				@include vw(
					(
						//
						font-size: (20, 24),
						margin-bottom: (15, 20)
					)
				);
				span {
					position: absolute;
					top: 0;
					font-weight: 500;
					@extend %font-Poppins;
					@include vw(
						(
							//
							left: (-30, -40),
							font-size: (16, 18)
						)
					);
				}
			}
		}
		&__img {
			@include vw(
				(
					//
					width: (null, 379),
					margin-bottom: (20, null)
				)
			);
			&.is-PC {
				display: block;
				@include media_sp {
					display: none;
				}
			}
			&.is-SP {
				@include media_sp {
					display: block;
				}
				@include media_not_sp {
					width: 100%;
					display: none;
				}
			}
		}

		&__content {
			@include vw(
				(
					//
					padding-left: (30, 72)
				)
			);
		}
	}

	.fee {
		@include vw(
			(
				//
				margin-top: (50, 125)
			)
		);
		&__title {
			@extend %font-Poppins;
			font-weight: bold;
			@include vw(
				(
					//
					font-size: (34, 50),
					letter-spacing: (7, 10),
					margin-bottom: (23, 20)
				)
			);
		}
		&__sub-title {
			font-weight: bold;
			@include vw(
				(
					//
					font-size: (20, 24),
					margin-bottom: (20, 22)
				)
			);
		}
		&__desc {
			line-height: 1.8;
			@include vw(
				(
					//
					font-size: (null, 16)
				)
			);
		}
	}
</style>
