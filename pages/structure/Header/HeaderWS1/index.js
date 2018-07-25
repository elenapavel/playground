import React, { PureComponent } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import AccountMenu from "./AccountMenu";
import data from "./data";
import $ from "./style.css";

class HeaderWS1 extends PureComponent {
	state = {
		isMenuOpened: false,
		isAccountMenuOpened: false,
	};

	toggleMenu(isMenuOpened) {
		this.setState({
			isMenuOpened: isMenuOpened,
			isAccountMenuOpened: false,
		});
	}

	toggleAccountMenu(isAccountMenuOpened) {
		this.setState({
			isAccountMenuOpened: isAccountMenuOpened,
			isMenuOpened: false,
		});
	}

	render() {
		const { isMenuOpened, isAccountMenuOpened } = this.state;

		return (
			<b className={$.header}>
				<b className={$.logo}>
					<Logo image={data.logo} />
				</b>
				<b className={$.account}>
					<AccountMenu
						isMenuOpened={isAccountMenuOpened}
						user={data.user}
						items={data.accountMenuItems}
						onChange={isAccountMenuOpened =>
							this.toggleAccountMenu(isAccountMenuOpened)
						}
					/>
				</b>
				<b className={$.menu}>
					<Menu
						isMenuOpened={isMenuOpened}
						items={data.items}
						onChange={isMenuOpened => this.toggleMenu(isMenuOpened)}
					/>
				</b>
			</b>
		);
	}
}

export default HeaderWS1;
