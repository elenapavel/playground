import React, { Component } from "react";
import { BASE, STATIC } from "~/playground.js";
import Logo from "./Logo";
import Navigation from "./Navigation";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import BeginningSection from "./BeginningSection";
import ServicesSection from "./ServicesSection";
import ClientsSection from "./ClientsSection";
import PortfolioSection from "./PortfolioSection";
import WebSection from "./WebSection";
import FrontendSection from "./FrontendSection";
import $ from "./style.css";

class Simple extends Component {
	state = {
		data: null,
		selectedSectionRef: "intro",
		isMenuOpened: false,
		isLoading: true,
	};

	componentDidMount() {
		window.addEventListener("resize", () => this.getWindowWidth());

		fetch(`${STATIC}/data/simple.json`)
			.then(response => response.json())
			.then(response => {
				this.setState({ data: response, isLoading: false });
			});
	}

	getWindowWidth() {
		if (window.innerWidth > 899) {
			this.setState({ isMenuOpened: false });
		}
	}

	toggleMenu() {
		this.setState({ isMenuOpened: !this.state.isMenuOpened });
	}

	handleScroll(ref) {
		this.setState({ isMenuOpened: false, selectedSectionRef: ref });
		setTimeout(() => {
			window.scrollTo({
				top: this.refs[ref].offsetTop,
				behavior: "smooth",
			});
		}, 300);
	}

	render() {
		const { data, isMenuOpened, isLoading } = this.state;

		const styleMenuOpened = {
			transform: "translateX(-15rem)",
			overflow: "hidden",
			opacity: 0.5,
		};

		const styleMenuClosed = {
			transform: "translateX(0)",
			overflow: "visible",
			opacity: 1,
		};

		return isLoading ? null : (
			<b className={$.application}>
				<b className={$.header}>
					<i
						className={$.logo}
						style={{
							transform: `translateX(${
								isMenuOpened ? -15 : 0
							}rem)`,
						}}
					>
						<Logo image={STATIC + data.logo} link={`${BASE}/`} />
					</i>
					<i
						className={
							isMenuOpened ? $.menu_icon_colored : $.menu_icon
						}
						onClick={() => this.toggleMenu()}
					>
						<i className={$.bar_long} />
						<i className={$.bar_short} />
						<i className={$.bar} />
					</i>
					<i
						className={$.navigation}
						style={{
							transform: `translateX(${
								isMenuOpened ? 0 : 15
							}rem)`,
						}}
					>
						<Navigation onSelect={ref => this.handleScroll(ref)} />
					</i>
				</b>
				<b
					className={$.container}
					style={isMenuOpened ? styleMenuOpened : styleMenuClosed}
				>
					<b className={$.intro_section} ref={data.introSection.ref}>
						<IntroSection
							image={STATIC + data.introSection.image}
							heading={data.introSection.heading}
						/>
					</b>
					<b
						className={$.beginning_section}
						ref={data.beginningSection.ref}
					>
						<BeginningSection
							heading={data.beginningSection.heading}
							description={data.beginningSection.description}
							image={STATIC + data.beginningSection.image}
						/>
					</b>
					<b className={$.about_section} ref={data.aboutSection.ref}>
						<AboutSection
							heading={data.aboutSection.heading}
							subheading={data.aboutSection.subheading}
							description={data.aboutSection.description}
							image={STATIC + data.aboutSection.image}
						/>
					</b>
					<b
						className={$.services_section}
						ref={data.servicesSection.ref}
					>
						<b className={$.gradient} />
						<ServicesSection
							heading={data.servicesSection.heading}
							items={data.servicesSection.items}
						/>
					</b>
					<b
						className={$.clients_section}
						ref={data.clientsSection.ref}
					>
						<ClientsSection
							heading={data.clientsSection.heading}
							image={STATIC + data.clientsSection.image}
							description={data.clientsSection.description}
						/>
					</b>
					<b
						className={$.portfolio_section}
						ref={data.portfolioSection.ref}
					>
						<PortfolioSection
							heading={data.portfolioSection.heading}
							items={data.portfolioSection.items}
						/>
					</b>
					<b className={$.web_section} ref={data.webSection.ref}>
						<WebSection
							heading={data.webSection.heading}
							image={STATIC + data.webSection.image}
							description={data.webSection.description}
						/>
					</b>
					<b
						className={$.frontend_section}
						ref={data.frontendSection.ref}
					>
						<FrontendSection
							heading={data.frontendSection.heading}
							image={STATIC + data.frontendSection.image}
							description={data.frontendSection.description}
						/>
					</b>
				</b>
			</b>
		);
	}
}

export default Simple;
