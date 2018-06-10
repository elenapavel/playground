import { Component } from "react";
import Header from "./Header";
import Form from "~/components/Form";
import $ from "./style.css";

const fields = [
	{
		type: "text",
		placeholder: "Name",
		icon: null,
		ref: "name",
	},
	{
		type: "password",
		placeholder: "Password",
		icon: "ion-ios-eye",
		ref: "password",
	},
	{
		type: null,
		placeholder: "Message",
		icon: null,
		ref: "message",
	},
];

class PlatformPromo extends Component {
	onRegisterFormSubmit(refs) {
		const refsKeys = Object.keys(refs);

		let values = [];

		refsKeys.forEach(ref => {
			values.push({ ref: ref, value: refs[ref].value });
		});

		console.log(values);
	}

	render() {
		const socialIconClasses = `${$.social_signup_icon} ion-social-facebook`;

		return (
			<b className={$.platform_promo}>
				<b className={$.header}>
					<Header />
				</b>
				<b className={$.promo_section}>
					<b className={$.promo_title}>Platforma wireframe kit</b>
					<b className={$.promo_headline}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla imperdiet ante sed orci efficitur interdum quis eu
						neque.
					</b>
					<b className={$.social_signup}>
						<i className={socialIconClasses} />
						Sign up with Facebook
					</b>
					<b className={$.option_headline}>or register usign form</b>
					<b className={$.register_form}>
						<Form
							fields={fields}
							submitActionText="Sign up"
							onSubmit={refs => this.onRegisterFormSubmit(refs)}
						/>
					</b>
				</b>
			</b>
		);
	}
}

export default PlatformPromo;
