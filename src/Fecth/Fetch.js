const KEY = '28344913-175486e0517d92fb48d77b40d';
export const Fetch = (query, page) => {
	return fetch(
		`https://pixabay.com/api/?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
	)
		.then(res => res.json())
}

