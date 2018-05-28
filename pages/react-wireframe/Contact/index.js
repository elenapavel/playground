import { Component } from "react";

import Form from "./Form";

import $ from "./style.css";

class Contact extends Component {
	render() {
		return (
			<div className={$.container}>
				<div className={$.title} />
				<div className={$.content} />
				<Form />
				<div className={$.action} />
			</div>
		);
	}
}

export default Contact;
