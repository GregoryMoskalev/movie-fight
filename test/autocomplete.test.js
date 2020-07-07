it('Shows an autocomplete', () => {
	createAutoComplete({
		root: document.getElementById('target'),
		fetchData() {
			return [
				{ Title: 'Avengers' },
				{ Title: 'Not Avengers' },
				{ Title: 'Some other movie' }
			];
		},
		renderOption(movie) {
			return movie.Title;
		}
	});
});
