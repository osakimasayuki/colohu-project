import { fetcher } from '$lib/scripts/cms'
import type {ProjectType} from '$lib/@types.d'
import type { LoadEvent } from '@sveltejs/kit';

export const prerender = false;

export const load = async ({ params, fetch }: LoadEvent) => {
    const contentId = params.id;
    const project: ProjectType = await fetcher({endpoint: "project", fetch, contentId});
    return {
        project
    };
};
