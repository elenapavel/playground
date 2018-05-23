import { Component } from "react";

class Header extends Component {
	render() {
		return (
			<div className="container">
				<div className="title" />
				<div className="quote" />
				<style jsx>{`
					.container {
						background: red;
						height: 10rem;
						display: flex;
						flex-direction: column;
						flex-wrap: wrap;
						align-items: center;
						justify-content: space-evenly;
						width: 100%;
						padding: 0 2rem;
						margin: 3rem auto 0;
					}
					.title {
						background: pink;
						flex-basis: 40%;
						width: 75%;
					}
					.quote {
						flex-basis: 10%;
						background: blue;
						width: 100%;
					}
					@media (min-width: 40rem) {
						.container {
							width: 75%;
						}
					}
					@media (min-width: 64rem) {
						.container {
							width: 50%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Header;
