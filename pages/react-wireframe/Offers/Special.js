import { Component } from "react";

import $ from "./style.css";

class Special extends Component {
	render() {
		return (
			<div className={$.special_offer_container}>
				<div className={$.special_offer_week}>
					<div className={$.special_offer_title} />
					<div className={$.special_offer_content} />
					<div className={$.special_offer_action} />
				</div>
			</div>
		);
	}
}

export default Special;
