<script lang="ts">
	import { onMount } from 'svelte';
	import {
		scrollInAnimation,
		setTextCharsAnimation,
		setTextLinesAnimation
	} from '$lib/scripts/gsap-animations';

	onMount(() => {
		scrollInAnimation();
		setTextCharsAnimation();
		setTextLinesAnimation();
	});
</script>

<svelte:head>
	<title>Privacy Policy | COLOHU</title>
</svelte:head>

<div class="lower privacy-policy">
	<h2 class="lower__title js-anim-chars">PRIVACY POLICY</h2>
	<p>
		当サイトは、COLOHUの作品や実績などを紹介するサイトです。個人情報の保護に関する法律を遵守し、個人情報の適切な取り扱いと保護に努めます。
	</p>

	<section>
		<h3>個人情報の定義</h3>
		<p>
			本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に規定する個人情報を指し、特定の個人を識別できる情報をいいます。
		</p>
	</section>

	<section>
		<h3>個人情報の利用目的</h3>
		<p>
			当サイトでは、メールでのお問い合わせの際に、名前、メールアドレス等の個人情報をお送りいただく場合がありますが、これらの個人情報は質問に対する回答や必要な情報を電子メールでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
		</p>
	</section>

	<section>
		<h3>個人情報の第三者への開示</h3>
		<p>
			当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。<br
			/>
			・情報提供者本人の同意がある場合<br />
			・法令等への協力のため、開示が必要となる場合
		</p>
	</section>

	<section>
		<h3>個人情報の訂正、削除について</h3>
		<p>
			ご利用者様ご本人の要請があった場合、ご本人を確認した上で個人情報の訂正、削除を適切に行います。
		</p>
	</section>

	<section>
		<h3>個人情報保護に関するお問い合わせ</h3>
		<p>
			個人情報保護に関するお問い合わせや開示、修正、削除のご依頼がある場合は、メールにてご連絡ください。
		</p>
	</section>

	<section>
		<h3>プライバシーポリシーの変更</h3>
		<p>
			当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示いたします。
		</p>
	</section>

	<section>
		<h3>免責事項</h3>
		<p>
			当サイトからリンクなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
		</p>
	</section>

	<section>
		<h3>著作権について</h3>
		<p>当サイトに掲載した文章・写真等に関する著作権は当サイトが有します。</p>
	</section>

	<p>
		制定日：2025年10月1日<br />
		COLOHU
	</p>
</div>

<style lang="scss">
	.lower {
		&__title {
			@include vw(
				(
					//
					font-size: (60, 88),
					letter-spacing: (11, 17.1),
					line-height: (72, null),
					margin-bottom: (0, 24)
				)
			);
		}
	}

	.privacy-policy {
		display: flex;
		flex-direction: column;
		@include vw(
			(
				//
				padding: (120 16 0, 210 149 0),
				gap: (28, 51),
				font-size: (16, null)
			)
		);

		h3 {
			@include vw(
				(
					//
					font-size: (20, 24),
					margin-bottom: (12, 23)
				)
			);
		}
	}
</style>
