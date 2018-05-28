import { Component } from "react";

import Cards from "./Cards";
import Special from "./Special";

import $ from "./style.css";

class Offers extends Component {
	render() {
		return (
			<div className={$.container}>
				<Cards />
				<Special />
			</div>
		);
	}
}

export default Offers;
