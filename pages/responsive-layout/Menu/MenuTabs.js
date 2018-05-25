import { Component } from "react";

import $ from "./style.css";

class MenuTabs extends Component {
	render() {
		return (
			<div className={$.tabs_container}>
				<div className={$.tab} />
				<div className={$.tab} />
				<div className={$.tab} />
				<div className={$.tab} />
				<div className={$.tab} />
				<div className={$.tab} />
			</div>
		);
	}
}

export default MenuTabs;
