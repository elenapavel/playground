const { assign } = Object;

export default store => ({
	selectPlantByIndex(state, index) {
		const plantoid = assign({}, state.plantoid);

		plantoid.lastSelectedPlant = plantoid.selectedPlant;
		if (index == plantoid.plants.length) {
			plantoid.selectedPlantIndex = 0;
		} else if (index == -1) {
			plantoid.selectedPlantIndex = plantoid.plants.length - 1;
		} else {
			plantoid.selectedPlantIndex = index;
		}
		plantoid.selectedPlant = plantoid.plants[plantoid.selectedPlantIndex];

		plantoid.isMenuOpened = false;

		return { plantoid };
	},
	toggleMenu(state) {
		const plantoid = assign({}, state.plantoid);

		plantoid.isMenuOpened = !plantoid.isMenuOpened;

		return { plantoid };
	},
});
