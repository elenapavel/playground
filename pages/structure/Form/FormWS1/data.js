export default {
	heading: "Contact us",
	tagline: "Or just send an email on",
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
			type: "textarea",
			icon: "",
			placeholder: "Message",
			ref: "message",
			background: "#e6f0fc",
		},
	],
	submitAction: { text: "Send" },
	emailReceiver: "great@simple.co",
};
