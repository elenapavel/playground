import unistore from "unistore";
import data from "../data";

export default unistore({
	portfolio: {
		logo: data.logo,
		quote: data.quote,
		categories: data.categories,
		articles: data.articles,
		selectedArticleIndex: 0,
		selectedCategoryLabel: "Argentina",
		lastSelectedArticleIndex: null,
	},
});
