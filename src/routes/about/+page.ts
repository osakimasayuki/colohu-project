import type { PageLoad } from './$types';

import { fetcher } from '$lib/scripts/cms'
import type { AboutType } from '$lib/@types.d'

export const load: PageLoad = async({ fetch }) => {
    const about: AboutType = await fetcher({ endpoint: "about", fetch, isList: false });
    return {
        about
    };  
};