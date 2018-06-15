import { Component } from "react";
import Logo from "~/components/Logo";
import Menu from "~/components/Menu";
import Register from "~/components/Register";
import { STATIC, BASE } from "~/playground";
import $ from "./style.css";

const items = [
	{
		link: BASE + "#",
		name: "Menu one",
	},
	{
		link: BASE + "#",
		name: "Menu two",
	},
	{
		link: BASE + "#",
		name: "Menu three",
	},
	{
		link: BASE + "#",
		name: "Menu four",
	},
];

const logoSrc = `${STATIC}/images/dropbox_logo.png`;

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
						<Logo image={logoSrc} />
					</b>
					<b className={$.to_right}>
						<b className={$.register}>
							<Register />
						</b>
						<b className={$.menu}>
							<Menu
								isMenuOpened={isMenuOpened}
								items={items}
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
