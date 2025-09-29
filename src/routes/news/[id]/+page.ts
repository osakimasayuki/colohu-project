import { fetcher } from '$lib/scripts/cms'
import type {NewsType} from '$lib/@types.d'
import type { LoadEvent } from '@sveltejs/kit';

export const prerender = false;

export const load = async ({ params, fetch }: LoadEvent) => {
    const contentId = params.id;
    const news: NewsType = await fetcher({endpoint: "news", fetch, contentId});
    return {
        news
    };
};
