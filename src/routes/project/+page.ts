import { fetcher } from '$lib/scripts/cms';
import type { ProjectType } from '$lib/@types.d';
import type { LoadEvent } from '@sveltejs/kit';

export const prerender = false;

const MAX_LENGTH = 10;

export const load = async ({ fetch, url }: LoadEvent) => {
	const page = Number(url.searchParams.get('page') || 1);
	const offset = (page - 1) * MAX_LENGTH;
	const category = url.searchParams.get('category');

	const params: { limit: number; offset: number; filters?: string } = {
		limit: MAX_LENGTH,
		offset
	};

	if (category && category !== 'All') {
		params.filters = `category[contains]${category}`;
	}

	const data: { totalCount: number; contents: ProjectType[] } = await fetcher({
		endpoint: 'project',
		fetch,
		params
	});
	return {
		projects: data.contents,
		totalPage: Math.ceil(data.totalCount / MAX_LENGTH)
	};
};
