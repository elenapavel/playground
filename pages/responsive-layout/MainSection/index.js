import { Component } from "react";
import TopBar from "./TopBar";
import Header from "./Header";

class MainSection extends Component {
	render() {
		return (
			<div className="container">
				<TopBar />
				<Header />
				<style jsx>{`
					.container {
						position: relative;
						background: grey;
						height: 50rem;
					}
				`}</style>
			</div>
		);
	}
}

export default MainSection;
