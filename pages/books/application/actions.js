const { assign } = Object;

export default store => ({
	setView(state, view) {
		const store = assign({}, state.store);

		if (view == "myAccount") {
			store.view = view;
			store.displayedBooks = store.completedOrders;
		} else {
			store.view = store.sections[store.selectedSectionIndex].view;
			store.displayedBooks = view == "orders" ? store.pendingOrders : [];
		}

		return { store };
	},
	selectSection(state, sectionIndex) {
		const store = assign({}, state.store);

		store.selectedSectionIndex = sectionIndex;

		return { store };
	},
	selectCategory(state, categoryIndex) {
		const store = assign({}, state.store);

		store.selectedCategoryIndex = categoryIndex;
		store.displayedBooks = [];
		store.books.forEach(book => {
			if (book.categories.includes(categoryIndex)) {
				store.displayedBooks.push(book);
				store.displayedBooks[store.displayedBooks.indexOf(book)].color =
					store.categories[categoryIndex].color[1];
			}
		});

		return { store };
	},
	manageOrders(state, bookIndex) {
		const store = assign({}, state.store);
		const orderedBook = assign({}, store.displayedBooks[bookIndex]);
		const confirmedBook = assign({}, store.pendingOrders[bookIndex]);

		var pendingOrderIndex = store.pendingOrders.indexOf(orderedBook);
		var completedOrderIndex = store.completedOrders.indexOf(orderedBook);

		if (store.view == "library") {
			if (
				pendingOrderIndex == -1 ||
				store.pendingOrders[pendingOrderIndex].color !=
					orderedBook.color
			) {
				store.pendingOrders.push(orderedBook);
			} else {
				store.pendingOrders.splice(pendingOrderIndex, 1);
			}
		} else if (store.view == "orders") {
			if (
				completedOrderIndex == -1 ||
				store.completedOrders[completedOrderIndex].color !=
					store.pendingOrders[bookIndex].color
			) {
				store.completedOrders.push(store.pendingOrders[bookIndex]);
				store.pendingOrders.splice(bookIndex, 1);
			} else {
				store.completedOrders.splice(completedOrderIndex, 1);
			}
		} else if (store.view == "myAccount") {
			store.completedOrders.splice(bookIndex, 1);
		}

		return { store };
	},
});
