import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";
import data from "./data";
import $ from "./style.css";

class Header extends Component {
	state = {
		isMenuOpened: false,
	};

	toggleMenu(isMenuOpened) {
		this.setState({
			isMenuOpened: !this.state.isMenuOpened,
		});
	}

	render() {
		const { isMenuOpened } = this.state;

		return (
			<b className={$.platform_promo}>
				<b className={$.header}>
					<b className={$.logo}>
						<Logo image={data.logo} />
					</b>
					<b className={$.to_right}>
						<b className={$.register}>
							<Button />
						</b>
						<b className={$.menu}>
							<Menu
								isMenuOpened={isMenuOpened}
								items={data.items}
								onChange={isMenuOpened =>
									this.toggleMenu(isMenuOpened)
								}
							/>
						</b>
					</b>
				</b>
			</b>
		);
	}
}

export default Header;
