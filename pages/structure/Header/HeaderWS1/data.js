import { STATIC, BASE } from "~/playground";

export default {
	logo: `${STATIC}/images/dropbox_logo.png`,
	items: [
		{
			link: BASE + "/",
			name: "Shop",
		},
		{
			link: BASE + "/",
			name: "About",
		},
		{
			link: BASE + "/",
			name: "Blog",
		},
		{
			link: BASE + "/",
			name: "Contact",
		},
	],
	accountMenuItems: [
		{
			link: BASE + "/",
			name: "Account",
		},
		{
			link: BASE + "/",
			name: "Settings",
		},
		{
			link: BASE + "/",
			name: "Orders",
		},
	],
	user: {
		avatar: `${STATIC}/images/user.svg`,
		name: "John",
	},
};
