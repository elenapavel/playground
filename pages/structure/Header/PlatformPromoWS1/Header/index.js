import { Component } from "react";
import Logo from "~/components/Logo";
import Menu from "~/components/Menu";
import Register from "~/components/Register";
import Search from "~/components/Search";
import { STATIC, BASE } from "~/playground";
import $ from "./style.css";

const items = [
	{
		link: BASE + "/test",
		name: "test lorem ipsum",
	},
	{
		link: BASE + "/home",
		name: "homepage",
	},
	{
		link: BASE + "/test",
		name: "test lorem",
	},
	{
		link: BASE + "/home",
		name: "homepage",
	},
];

const logoSrc = `${STATIC}/images/dropbox_logo.png`;

class HeaderWS2 extends Component {
	state = {
		isMenuOpened: false,
		isSearchVisible: false,
	};

	toggleMenu(isMenuOpened) {
		this.setState({
			isMenuOpened: !this.state.isMenuOpened,
			isSearchVisible: false,
		});
	}

	toggleSearch(isSearchVisible) {
		this.setState({
			isMenuOpened: false,
			isSearchVisible: isSearchVisible,
		});
	}

	render() {
		const { isMenuOpened, isSearchVisible } = this.state;
		const searchClass = `${
			isSearchVisible ? $.search_expanded : $.search_collapsed
		}`;

		return (
			<b className={$.platform_promo}>
				<b className={$.header}>
					<b className={$.logo}>
						<Logo image={logoSrc} />
					</b>
					<b className={$.to_right}>
						<b className={searchClass}>
							<Search
								isSearchVisible={isSearchVisible}
								onChange={isSearchVisible =>
									this.toggleSearch(isSearchVisible)
								}
							/>
						</b>
						<b className={$.register}>
							<Register />
						</b>
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
		);
	}
}

export default HeaderWS2;
