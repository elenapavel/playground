import React, { Component } from "react";
import { STATIC } from "~/playground";
import Menu from "./Menu";
import $ from "./style.css";

class AccountMenu extends Component {
	state = {
		isMenuOpened: false,
	};

	static getDerivedStateFromProps(props, state) {
		state.isMenuOpened = props.isMenuOpened;

		return state;
	}

	toggleMenu() {
		this.setState({
			isMenuOpened: !this.state.isMenuOpened,
		});
		if (typeof this.props.onChange === "function")
			this.props.onChange(!this.state.isMenuOpened);
	}

	render() {
		const { user, items } = this.props;
		const { isMenuOpened } = this.state;

		const menuClass = isMenuOpened ? $.menu_expanded : $.menu_collapsed;
		const dropdownIconClass = `${$.dropdown_icon} ${
			isMenuOpened ? "ion-arrow-up-b" : "ion-arrow-down-b"
		}`;

		return (
			<b className={$.account}>
				<b className={$.avatar}>
					<img src={user.avatar} />
					<b className={$.notification} />
				</b>
				<b className={$.account_menu} onClick={() => this.toggleMenu()}>
					<b className={$.user}>{user.name}</b>
					<b className={dropdownIconClass} />
				</b>
				<b className={menuClass}>
					<Menu items={items} />
				</b>
			</b>
		);
	}
}

export default AccountMenu;
