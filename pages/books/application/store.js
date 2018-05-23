import unistore from "unistore";
import data from "../data";

export default unistore({
	store: {
		logo: data.logo,
		books: data.books,
		sections: data.sections,
		selectedSectionIndex: 0,
		view: data.view,
		displayedBooks: [],
		user: data.user,
		pendingOrders: [],
		completedOrders: [],
		categories: data.categories,
		selectedCategoryIndex: null,
	},
});
