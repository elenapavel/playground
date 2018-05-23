import { Component } from "react";
import MainSection from "./MainSection";
import Menu from "./Menu";
import Testimonials from "./Testimonials";
import Offers from "./Offers";
import Extras from "./Extras";
import Contact from "./Contact";

class Page extends Component {
	render() {
		return (
			<div className="container">
				<Menu />
				<Testimonials />
				<Offers />
				<Extras />
				<Contact />
				<style jsx>{`
					:global(body) {
						overflow-x: hidden;
						margin: 0;
					}
					:global(*) {
						box-sizing: border-box;
					}
				`}</style>
			</div>
		);
	}
}

export default () => <Page />;
