import { STATIC, BASE } from "~/playground";

export default {
	logo: `${STATIC}/images/dropbox_logo.png`,
	items: [
		{
			link: BASE + "/",
			name: "Item 1",
		},
		{
			link: BASE + "/",
			name: "Item 2",
		},
		{
			link: BASE + "/",
			name: "Item 3",
		},
		{
			link: BASE + "/",
			name: "Item 4",
		},
	],
	accountMenuItems: [
		{
			link: BASE + "/",
			name: "Account Item 1",
		},
		{
			link: BASE + "/",
			name: "Account Item 2",
		},
		{
			link: BASE + "/",
			name: "Account Item 3",
		},
	],
	user: {
		avatar: `${STATIC}/images/user.svg`,
		name: "User",
	},
};
