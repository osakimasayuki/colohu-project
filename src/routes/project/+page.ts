import { fetcher } from '$lib/scripts/cms';
import type { ProjectType } from '$lib/@types.d';
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
	const data: { totalCount: number; contents: ProjectType[] } = await fetcher({
		endpoint: 'project',
		fetch,
		params
	});
	return {
		projects: data.contents,
		totalPage: data.totalCount / MAX_LENGTH
	};
};
