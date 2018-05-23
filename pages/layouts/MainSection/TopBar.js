import { Component } from "react";

class Topbar extends Component {
	render() {
		return (
			<div className="container">
				<div className="to_left" />
				<div className="logo" />
				<div className="to_right" />
				<div className="nav_icon" />
				<style jsx>{`
					.container {
						height: 5rem;
						width: 100%;
						margin: 0 auto;
						background: red;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: space-between;
						align-items: center;
					}
					.to_left {
						height: 3rem;
						flex-basis: 30%;
						background: green;
						display: none;
					}
					.to_right {
						height: 3rem;
						flex-basis: 30%;
						background: green;
						display: none;
					}
					.nav_icon {
						display: block;
						height: 3rem;
						width: 3rem;
						background: pink;
						margin-right: 2rem;
					}
					.logo {
						height: 4rem;
						flex-basis: 4rem;
						margin: 0 2rem;
						background: yellow;
					}
					@media (min-width: 64rem) {
						.container {
							width: 80%;
							justify-content: center;
							height: 10rem;
						}
						.logo {
							flex-basis: 10rem;
							height: 100%;
							margin: 0 3rem;
						}
						.to_left,
						.to_right {
							display: block;
						}
						.nav_icon {
							display: none;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Topbar;
