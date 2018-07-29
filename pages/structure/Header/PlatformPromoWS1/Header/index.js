import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";
import Search from "./Search";
import data from "./data";
import $ from "./style.css";

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
						<Logo image={data.logo} />
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
							<Button />
						</b>
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
		);
	}
}

export default HeaderWS2;
