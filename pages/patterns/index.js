import { Component } from "react";
import Nav from "../../components/nav";
import Stripes from "./Stripes";
import Stripes2 from "./Stripes2";
import Rectangle from "./Rectangle";

class Page extends Component {
	render() {
		return (
			<div className="container">
				{/*<div className="nav">
					<Nav />
				</div>*/}
				<Rectangle />
				<div className="test" />
				<style jsx>{`
					:global(body) {
						margin: 0;
						overflow-x: hidden;
					}
					:global(*) {
						box-sizing: border-box;
					}
					.container {
						position: relative;
						height: 400vh;
					}
					.nav {
						position: relative;
						z-index: 10;
					}
					.test {
						position: absolute;
						top: 14rem;
						width: 100%;
						border-top: 1px solid #000;
					}
				`}</style>
			</div>
		);
	}
}

export default () => <Page />;
