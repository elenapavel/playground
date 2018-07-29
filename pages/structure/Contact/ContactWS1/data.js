export default {
	form: {
		heading: "Sign in",
		subheading: "Login to have access to files",
		fields: [
			{
				type: "text",
				icon: "",
				placeholder: "Name",
				ref: "name",
				background: "#e6f0fc",
			},
			{
				type: "email",
				icon: "",
				placeholder: "Email",
				ref: "email",
				background: "#e6f0fc",
			},
			{
				type: "text",
				icon: "",
				placeholder: "Subject",
				background: "#e6f0fc",
			},
			{
				type: "textarea",
				icon: "",
				placeholder: "Message",
				background: "#e6f0fc",
			},
		],
		submitAction: { text: "Send" },
	},
	map: {
		loadingMassage: "Be happy",
		infoBox: "Hello, React :)",
		params: {
			v: "3.exp",
			key: "YOUR_API_KEY",
		},
		coords: {
			lat: 51.5258541,
			lng: -0.08040660000006028,
		},
	},
};
