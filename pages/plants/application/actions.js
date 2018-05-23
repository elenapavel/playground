const { assign } = Object;

export default store => ({
	selectPlantByIndex(state, index) {
		const plantoid = assign({}, state.plantoid);
		const menu = assign({}, state.menu);
		plantoid.lastSelectedPlant = plantoid.selectedPlant;
		if (index == plantoid.plants.length) {
			plantoid.selectedPlantIndex = 0;
		} else if (index == -1) {
			plantoid.selectedPlantIndex = plantoid.plants.length - 1;
		} else {
			plantoid.selectedPlantIndex = index;
		}
		plantoid.selectedPlant = plantoid.plants[plantoid.selectedPlantIndex];

		menu.isOpen = false;
		menu.selectedIndex = plantoid.selectedPlantIndex;

		return { plantoid, menu };
	},
	toggleMenu(state) {
		const menu = assign({}, state.menu);

		menu.isOpen = !menu.isOpen;

		return { menu };
	},
});
