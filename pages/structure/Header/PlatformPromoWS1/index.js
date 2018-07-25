import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import data from "./data";
import $ from "./style.css";

class PlatformPromo extends Component {
	onRegisterFormSubmit(refs) {
		const refsKeys = Object.keys(refs);

		let values = [];

		refsKeys.forEach(ref => {
			values.push({ ref: ref, value: refs[ref].value });
		});
	}

	render() {
		const { heading } = this.props;
		const socialIconClasses = `${$.social_signup_icon} ion-social-facebook`;

		return (
			<b className={$.platform_promo}>
				<b className={$.header}>
					<Header />
				</b>
				<b className={$.promo_section}>
					<b className={$.heading}>{heading || data.heading}</b>
					<b className={$.promo_headline}>{data.description}</b>
					<b className={$.social_signup}>
						<i className={socialIconClasses} />
						{data.socialLoginText}
					</b>
					<b className={$.option_headline}>{data.optionText}</b>
					<b className={$.register_form}>
						<Form
							fields={data.fields}
							submitActionText={data.submitActionText}
							onSubmit={refs => this.onRegisterFormSubmit(refs)}
						/>
					</b>
				</b>
			</b>
		);
	}
}

export default PlatformPromo;
