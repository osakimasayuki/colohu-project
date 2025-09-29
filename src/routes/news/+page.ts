import { fetcher } from '$lib/scripts/cms';
import type { NewsType } from '$lib/@types.d';
import type { LoadEvent } from '@sveltejs/kit';

export const prerender = false;

const MAX_LENGTH = 10;

export const load = async ({ fetch, url }: LoadEvent) => {
	const pageOffset = url.searchParams.get('page');
	const params: { limit: number; offset?: number } = {
		limit: MAX_LENGTH
	};
	if (pageOffset) {
		params.offset = Number(pageOffset);
	}
	const data: { totalCount: number; contents: NewsType[] } = await fetcher({
		endpoint: 'news',
		fetch,
		params
	});
	return {
		news: data.contents,
		totalPage: data.totalCount / MAX_LENGTH
		// news: dammyData,
		// totalPage: 100 / MAX_LENGTH
	};
};

// const dammyData = [
// 	{
// 		id: '1',
// 		date: '2025-09-23',
// 		category: 'Technology',
// 		title: 'New AI Model Boosts Data Analysis',
// 		body: 'A groundbreaking artificial intelligence model has been released, promising to revolutionize data analysis with its enhanced processing speed and accuracy.'
// 	},
// 	{
// 		id: '2',
// 		date: '2025-09-22',
// 		category: 'Sports',
// 		title: 'Local Team Clinches Championship',
// 		body: "The city's beloved basketball team secured the national championship title in a thrilling final match last night."
// 	},
// 	{
// 		id: '3',
// 		date: '2025-09-21',
// 		category: 'Finance',
// 		title: 'Stock Market Rebounds After Volatile Week',
// 		body: 'Global stock markets showed signs of recovery today, with major indices closing in positive territory after a period of high volatility.'
// 	},
// 	{
// 		id: '4',
// 		date: '2025-09-20',
// 		category: 'Health',
// 		title: 'Breakthrough in Cancer Research Announced',
// 		body: 'Researchers have made a significant discovery in the field of oncology, opening up new avenues for targeted cancer therapies.'
// 	},
// 	{
// 		id: '5',
// 		date: '2025-09-19',
// 		category: 'Entertainment',
// 		title: 'Award-Winning Film Premieres to Critical Acclaim',
// 		body: "The highly anticipated film 'Echoes of Silence' has premiered, receiving glowing reviews for its stunning cinematography and powerful performances."
// 	},
// 	{
// 		id: '6',
// 		date: '2025-09-18',
// 		category: 'Technology',
// 		title: 'Quantum Computing Reaches New Milestone',
// 		body: 'Scientists have achieved a new level of stability in quantum computing, moving the technology closer to practical applications.'
// 	},
// 	{
// 		id: '7',
// 		date: '2025-09-17',
// 		category: 'Sports',
// 		title: 'Athlete Sets New World Record in Marathon',
// 		body: "An athlete from Kenya shattered the previous world record for the men's marathon, finishing the race in an unprecedented time."
// 	},
// 	{
// 		id: '8',
// 		date: '2025-09-16',
// 		category: 'Finance',
// 		title: 'Cryptocurrency Market Experiences Major Surge',
// 		body: 'The cryptocurrency market saw a massive increase in value today, with Bitcoin and other major coins reaching all-time highs.'
// 	},
// 	{
// 		id: '9',
// 		date: '2025-09-15',
// 		category: 'Health',
// 		title: 'Global Health Organization Launches New Vaccine Campaign',
// 		body: 'A global initiative has begun to distribute vaccines to developing nations, aiming to curb the spread of infectious diseases.'
// 	},
// 	{
// 		id: '10',
// 		date: '2025-09-14',
// 		category: 'Entertainment',
// 		title: 'Famous Musician Announces World Tour',
// 		body: "Pop sensation 'Lumina' has announced a new world tour, with tickets expected to sell out within minutes."
// 	}
// ];
