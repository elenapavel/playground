import { Component } from "react";

import $ from "./style.css";

class Form extends Component {
	render() {
		return (
			<div className={$.form_container}>
				<div className={$.left_panel}>
					<div className={$.input} />
					<div className={$.input} />
					<div className={$.input} />
				</div>
				<div className={$.right_panel}>
					<div className={$.textarea} />
				</div>
			</div>
		);
	}
}

export default Form;
