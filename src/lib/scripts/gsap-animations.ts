import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

/* --------------------------------
  慣性スクロール
-------------------------------- */

export const setInertialScroll = () => {
	// gsap.registerPlugin(ScrollSmoother);
	// const scrollSmoother = ScrollSmoother.create()
};

/* --------------------------------
  テキスト出現
-------------------------------- */
let split: SplitText;
export const setTextCharsAnimation = () => {
	const elements = document.querySelectorAll('.js-anim-chars');
	elements.forEach((el) => {
		split = SplitText.create(el, { type: 'chars' });
		gsap.from(split.chars, {
			y: 50,
			opacity: 0,
			duration: 0.2,
			delay: 0.2,
			ease: 'easeOutSine',
			stagger: 0.04,
			scrollTrigger: {
				trigger: el,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		});
	});
};

export const setTextLinesAnimation = () => {
	const elements = document.querySelectorAll('.js-anim-lines');
	elements.forEach((el) => {
		split = SplitText.create(el, { type: 'lines' });
		gsap.from(split.lines, {
			y: 50,
			opacity: 0,
			ease: 'easeOutSine',
			stagger: 0.04,
			scrollTrigger: {
				trigger: el,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		});
	});
};

/* --------------------------------
  Header Logo
-------------------------------- */
export const scrollInAnimation = () => {
	const listEl = document.querySelectorAll('.js-scroll-in');
	listEl.forEach((el) => {
		gsap.fromTo(
			el,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.4,
				delay: 0.4,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 90%',
					toggleActions: 'play none none reverse'
				}
			}
		);
	});
};
