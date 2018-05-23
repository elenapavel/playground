import { Component } from "react";
import Cards from "./Cards";
import Special from "./Special";

class Offers extends Component {
	render() {
		return (
			<div className="container">
				<Cards />
				<Special />
				<style jsx>{`
					.container {
						position: relative;
						background: #ec7575;
					}
				`}</style>
			</div>
		);
	}
}

export default Offers;
