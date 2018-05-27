import unistore from "unistore";
import data from "../data";

export default unistore({
	plantoid: {
		logo: data.logo,
		sections: data.sections,
		section: data.sections[0],
		plants: data.sections[0].plants,
		selectedPlantIndex: 0,
		lastSelectedPlantIndex: null,
		socialMedia: data.socialMedia,
		isMenuOpened: false,
	},
});
