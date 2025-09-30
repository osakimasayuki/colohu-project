export interface ProjectType {
	id: string;
	title: string;
	date: string;
	category: string;
	place: string;
	thumbs: { url: string }[];
	external_link: string;
	body: string;
}

export interface NewsType {
	id: string;
	date: string;
	category: string;
	title: string;
	body: string;
}

export interface AboutType {
	concept: string;
	outline: {
		title: string;
		body: string;
	}[];
	history: {
		title: string;
		body: string;
	}[];
	awards: {
		title: string;
		body: string;
	}[];
	publications: {
		title: string;
		body: string;
		label: string;
		url: string;
	}[];
	links: {
		label: string;
		url: string;
	}[];
}
