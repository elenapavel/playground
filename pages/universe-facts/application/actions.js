const { assign } = Object;

export default store => ({
	selectCategoryByIndex(state, index) {
		const universeFacts = assign({}, state.universeFacts);

		universeFacts.lastSelectedCategoryIndex =
			universeFacts.selectedCategoryIndex;
		universeFacts.selectedCategoryIndex = index;
		universeFacts.selectedCategoryArticles = [];
		universeFacts.view = "category";
		universeFacts.menuIsOpen = false;

		universeFacts.articles.forEach(
			article =>
				article.category == universeFacts.categories[index].label
					? universeFacts.selectedCategoryArticles.push(article)
					: null
		);

		return { universeFacts };
	},
	selectArticleByIndex(state, index) {
		const universeFacts = assign({}, state.universeFacts);

		universeFacts.view = "article";
		universeFacts.lastSelectedArticleIndex =
			universeFacts.selectedArticleIndex;
		universeFacts.selectedArticleIndex = index;

		return { universeFacts };
	},
	changeViewToCategory(state) {
		const universeFacts = assign({}, state.universeFacts);

		universeFacts.view = "category";
		universeFacts.selectedArticleIndex = null;
		universeFacts.lastSelectedArticleIndex = null;

		return { universeFacts };
	},
	toggleMenu(state) {
		const universeFacts = assign({}, state.universeFacts);

		universeFacts.menuIsOpen = !universeFacts.menuIsOpen;

		return { universeFacts };
	},
});
