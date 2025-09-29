import type { PageLoad } from './$types';

import { fetcher } from '$lib/scripts/cms';
import type { ProjectType, NewsType } from '$lib/@types.d';

export const load: PageLoad = async ({ fetch }) => {
	const projects: { contents: ProjectType[] } = await fetcher({
		endpoint: 'project',
		fetch,
		params: { limit: 6 }
	});
	const news: { contents: NewsType[] } = await fetcher({
		endpoint: 'news',
		fetch,
		params: { limit: 3 }
	});

	return {
		projects: projects.contents,
		news: news.contents
	};
};
