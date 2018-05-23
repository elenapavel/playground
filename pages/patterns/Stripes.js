import { Component } from "react";

class Stripes extends Component {
	render() {
		return (
			<div className="container">
				<div className="line blue" />
				<div className="line pink" />
				<div className="line cyan" />
				<div className="line green" />
				<div className="line black" />
				<div className="line grey" />
				<div className="line red" />
				<div className="line yellow" />
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
						background: white;
						border: 3px solid #000;
						height: 100vh;
						padding: 3rem;
						width: 100%;
						overflow: hidden;
					}
					.line {
						margin-top: 1rem;
						width: 100%;
						animation-name: moveDown;
						animation-duration: 2.5s;
						animation-iteration-count: 1;
						animation-fill-mode: both;
						animation-timing-function: ease-in-out;
					}
					@keyframes moveDown {
						from {
							transform: rotateZ(30deg) translateY(100%)
								translateX(calc(-100% - 15rem));
						}
						to {
							transform: rotateZ(30deg) translateY(100%)
								translateX(calc(100% + 15rem));
						}
					}
					.blue {
						background: #5f57d4;
						height: 2rem;
						animation-duration: 2.4s;
					}
					.pink {
						background: pink;
						height: 3rem;
						animation-duration: 2.2s;
						animation-delay: 0.5s;
					}
					.cyan {
						background: #57bdd4;
						height: 2rem;
						animation-duration: 2s;
					}
					.green {
						background: #57d461;
						height: 1rem;
						animation-duration: 2.4s;
						animation-delay: 0.2s;
					}
					.black {
						background: black;
						height: 3rem;
						animation-duration: 2s;
						animation-delay: 0.1s;
					}
					.grey {
						background: grey;
						height: 2rem;
						animation-duration: 2.7s;
					}
					.red {
						background: #d45757;
						height: 3rem;
					}
					.yellow {
						background: #ffeb00;
						height: 1rem;
						animation-duration: 2.7s;
						animation-delay: 0.5s;
					}
				`}</style>
			</div>
		);
	}
}

export default Stripes;
