import React, { Component } from "react";
import Link from "next/link";
import $ from "./style.css";

class Menu extends Component {
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
		const { items, toggleMenu } = this.props;
		const { isMenuOpened } = this.state;

		const menuIconClasses = `${$.menu_icon} ion-navicon`;
		const menuClasses = `${
			isMenuOpened ? $.menu_expanded : $.menu_collapsed
		}`;

		return (
			<b className={$.menu}>
				<b
					className={menuIconClasses}
					onClick={() => this.toggleMenu()}
				/>
				<b className={menuClasses}>
					{items.map((item, key) => (
						<b className={$.item} key={key}>
							<Link href={item.link}>
								<a>{item.name}</a>
							</Link>
						</b>
					))}
				</b>
			</b>
		);
	}
}

export default Menu;
