import { STATIC } from "~/playground";

export default {
	background: `${STATIC}/images/planets/Saturn.jpeg`,
	fields: [
		{
			type: "text",
			icon: "",
			placeholder: "Username",
			ref: "userName",
			background: "#e6f0fc",
		},
		{
			type: "password",
			icon: "",
			placeholder: "Password",
			ref: "password",
			background: "#e6f0fc",
		},
	],
	tagline: "or",
	submitAction: { text: "Login" },
	registerAction: { text: "Sign up" },
	resetAction: {
		text: "Forgot password?",
		link: "#",
	},
};
