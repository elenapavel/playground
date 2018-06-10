import { PureComponent } from "react";
import { STATIC, BASE } from "~/playground";
import Logo from "~/components/Logo";
import Menu from "~/components/Menu";
import AccountMenu from "~/components/AccountMenu";
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

const accountMenuItems = [
	{
		link: "/test",
		name: "test",
	},
	{
		link: "/my-account",
		name: "my account",
	},
	{
		link: "/settings",
		name: "settings",
	},
];

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
		const logoSrc = `${STATIC}/images/dropbox_logo.png`;

		const user = {
			avatar: `${STATIC}/images/user.svg`,
			name: "User",
		};

		return (
			<b className={$.header}>
				<b className={$.logo}>
					<Logo image={logoSrc} />
				</b>
				<b className={$.account}>
					<AccountMenu
						isMenuOpened={isAccountMenuOpened}
						user={user}
						items={accountMenuItems}
						onChange={isAccountMenuOpened =>
							this.toggleAccountMenu(isAccountMenuOpened)
						}
					/>
				</b>
				<b className={$.menu}>
					<Menu
						isMenuOpened={isMenuOpened}
						items={items}
						onChange={isMenuOpened => this.toggleMenu(isMenuOpened)}
					/>
				</b>
			</b>
		);
	}
}

export default HeaderWS1;
