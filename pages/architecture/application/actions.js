const { assign } = Object;

export default store => ({
	selectArticleIndex(state, articleIndex) {
		const portfolio = assign({}, state.portfolio);

		portfolio.lastSelectedArticleIndex = portfolio.selectedArticleIndex;
		portfolio.selectedArticleIndex = articleIndex;
		portfolio.selectedCategoryLabel =
			portfolio.articles[articleIndex].category;

		return { portfolio };
	},
	selectArticleByCategoryIndex(state, categoryIndex) {
		const portfolio = assign({}, state.portfolio);
		portfolio.articles.forEach((article, key) => {
			if (article.category == portfolio.categories[categoryIndex].label) {
				portfolio.lastSelectedArticleIndex =
					portfolio.selectedArticleIndex;
				portfolio.selectedArticleIndex = key;
				portfolio.selectedCategoryLabel =
					portfolio.categories[categoryIndex].label;
			}
		});

		return { portfolio };
	},
});
