import { Component } from "react";

import Events from "../Events";

import $ from "./style.css";

class Extras extends Component {
	render() {
		return (
			<div className={$.container}>
				<div className={$.events}>
					<Events />
				</div>
				<div className={$.events}>
					<Events />
				</div>
				<div className={$.events}>
					<Events />
				</div>
			</div>
		);
	}
}

export default Extras;
