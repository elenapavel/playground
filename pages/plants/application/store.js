import unistore from "unistore";
import data from "../data";

export default unistore({
	plantoid: {
		logo: data.logo,
		sections: data.sections,
		section: data.sections[0],
		plants: data.sections[0].plants,
		selectedPlant: data.sections[0].plants[0],
		selectedPlantIndex: 0,
		lastSelectedPlant: null,
		socialMedia: data.socialMedia,
	},
	menu: {
		isOpen: false,
		selectedIndex: 0,
		items: data.sections[0].plants,
	},
});
