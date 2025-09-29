import { PUBLIC_MICROCMS_API_URL, PUBLIC_MICROCMS_API_KEY } from '$env/static/public';

type Fetcher = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

type QueryParams = {
	limit: number;
	offset?: number;
};

function buildQuery(params?: QueryParams): string {
	if (!params) return '';
	const query = Object.entries(params)
		.filter(([_, v]) => v !== undefined)
		.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
		.join('&');
	return query ? `?${query}` : '';
}

export const fetcher = async ({
	endpoint,
	fetch,
	contentId,
	isList = true,
	params
}: {
	endpoint: string;
	fetch: Fetcher;
	isList?: boolean;
	contentId?: string;
	params?: QueryParams;
}) => {
	const apiUrl = `${PUBLIC_MICROCMS_API_URL}/${endpoint}${contentId ? `/${contentId}` : ''}${buildQuery(params)}`;

	try {
		const response = await fetch(apiUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-MICROCMS-API-KEY': PUBLIC_MICROCMS_API_KEY
			}
		});

		if (!response.ok) {
			throw new Error(`API error: ${response.statusText}`);
		}
		const res = await response.json();

		return res;
	} catch (error) {
		console.error('Failed to fetch data:', error);
		throw new Error('データの取得に失敗しました。');
	}
};
