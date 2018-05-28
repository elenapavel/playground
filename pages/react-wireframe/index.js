import { Component } from "react";

import Menu from "./Menu";
import Testimonials from "./Testimonials";
import Offers from "./Offers";
import Extras from "./Extras";
import Contact from "./Contact";

import $ from "./style.css";

class Page extends Component {
	render() {
		return (
			<div className={$.container}>
				<Menu />
				<Testimonials />
				<Offers />
				<Extras />
				<Contact />
			</div>
		);
	}
}

export default () => <Page />;
