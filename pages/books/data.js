import { STATIC } from "~/playground.js";

export default {
	logo: STATIC + "/images/dropbox_logo.png",
	books: [
		{
			title: "Measuring the user experience",
			authors: ["Bill Alberts", "Tom Tullis"],
			ratings: "4.5",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content:
				"First businesses discoverd quality as a key competitive edge; next came science.",
			categories: [0, 1]
		},
		{
			title: "Measuring the user experience",
			authors: ["Bill Alberts", "Tom Tullis"],
			ratings: "4.0",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content:
				"First businesses discoverd quality as a key competitive edge; next came science.",
			categories: [1, 2]
		},
		{
			title: "Design of everyday things",
			authors: ["Don Norman"],
			ratings: "5.0",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content: "D. Norman reveals how smart design is the new frontier.",
			categories: [0, 2]
		},
		{
			title: "Design of everyday things",
			authors: ["Don Norman"],
			ratings: "5.0",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content: "D. Norman reveals how smart design is the new frontier.",
			categories: [0, 1, 2, 3]
		},
		{
			title: "Agile metrics in action",
			authors: ["Margaret Heffernan"],
			ratings: "4.5",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content:
				"First businesses discoverd quality as a key competitive edge; next came science.",
			categories: [1, 3]
		},
		{
			title: "Measuring the user experience",
			authors: ["Bill Alberts", "Tom Tullis"],
			ratings: "4.5",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content:
				"First businesses discoverd quality as a key competitive edge; next came science.",
			categories: [1, 2, 3]
		},
		{
			title: "Measuring the user experience",
			authors: ["Bill Alberts", "Tom Tullis"],
			ratings: "4.5",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content:
				"First businesses discoverd quality as a key competitive edge; next came science.",
			categories: [0, 1]
		},
		{
			title: "Measuring the user experience",
			authors: ["Bill Alberts", "Tom Tullis"],
			ratings: "4.0",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content:
				"First businesses discoverd quality as a key competitive edge; next came science.",
			categories: [1, 2]
		},
		{
			title: "Design of everyday things",
			authors: ["Don Norman"],
			ratings: "5.0",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content: "D. Norman reveals how smart design is the new frontier.",
			categories: [0, 2]
		},
		{
			title: "Design of everyday things",
			authors: ["Don Norman"],
			ratings: "5.0",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content: "D. Norman reveals how smart design is the new frontier.",
			categories: [0, 1, 2, 3]
		},
		{
			title: "Agile metrics in action",
			authors: ["Margaret Heffernan"],
			ratings: "4.5",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content:
				"First businesses discoverd quality as a key competitive edge; next came science.",
			categories: [1, 3]
		},
		{
			title: "Measuring the user experience",
			authors: ["Bill Alberts", "Tom Tullis"],
			ratings: "4.5",
			bookImage:
				"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",
			content:
				"First businesses discoverd quality as a key competitive edge; next came science.",
			categories: [1, 2, 3]
		}
	],
	sections: [
		{
			label: "Library",
			view: "library"
		},
		{
			label: "Orders",
			view: "orders"
		}
	],
	user: {
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",
		name: "John Doe",
		email: "john.doe@gmail.com"
	},
	categories: [
		{
			label: "Business",
			color: ["rgba(147, 232, 215, 0.95)", "rgba(84, 176, 208, 0.95)"],
			icon: "ion-ios-people-outline"
		},
		{
			label: "Design",
			color: ["rgba(135, 180, 246, 0.95)", "rgba(130, 117, 241, 0.95)"],
			icon: "ion-ios-eye-outline"
		},
		{
			label: "Database",
			color: ["rgba(234, 145, 141, 0.95)", "rgba(235, 98, 153, 0.95)"],
			icon: "ion-ios-albums-outline"
		},
		{
			label: "Software",
			color: ["rgba(130, 117, 241, 0.95)", "rgba(115, 70, 223, 0.95)"],
			icon: "ion-ios-gear-outline"
		}
	],
	view: "library"
};
