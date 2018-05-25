import { Component } from "react";

import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";

import $ from "./style.css";

class Menu extends Component {
	render() {
		return (
			<div>
				<div className={$.container}>
					<div className={$.form} />
					<div className={$.title} />
					<MenuTabs />
				</div>
				<MenuList />
			</div>
		);
	}
}

export default Menu;
