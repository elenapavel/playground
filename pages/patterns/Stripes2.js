import { Component } from "react";

class Stripes2 extends Component {
	state = {
		scroll: 0,
		windowHeight: null,
	};
	componentDidMount() {
		this.setState({ windowHeight: window.innerHeight });
		document.addEventListener("scroll", () => {
			this.getScrollOffset();
		});
	}
	getScrollOffset() {
		var x, docEl;

		if (typeof window.pageYOffset === "number") {
			x = window.pageYOffset;
		} else {
			docEl =
				document.compatMode && document.compatMode === "CSS1Compat"
					? document.documentElement
					: document.body;
			x = docEl.scrollTop;
		}
		this.setState({ scroll: x });
	}
	render() {
		const { scroll, windowHeight } = this.state;
		const stripesMove =
			scroll == 0
				? "-100"
				: scroll < windowHeight
					? -(100 - scroll * 100 / windowHeight)
					: scroll < 2 * windowHeight
						? scroll * 100 / windowHeight > 100
							? -(100 - scroll * 100 / windowHeight)
							: -(150 - scroll * 100 / windowHeight)
						: 150;

		return (
			<div className="container">
				{scroll}
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
						position: fixed;
						top: 0;
						opacity: 0.5;
					}
					.line {
						margin-top: 1rem;
						width: calc(100% + 20rem);
						transform: rotateZ(30deg) translateY(100%)
							translateX(calc(${stripesMove}% - 10rem));
					}
					.blue {
						background: #5f57d4;
						height: 2rem;
					}
					.pink {
						background: pink;
						height: 3rem;
					}
					.cyan {
						background: #57bdd4;
						height: 2rem;
					}
					.green {
						background: #57d461;
						height: 1rem;
					}
					.black {
						background: black;
						height: 3rem;
					}
					.grey {
						background: grey;
						height: 2rem;
					}
					.red {
						background: #d45757;
						height: 3rem;
					}
					.yellow {
						background: #ffeb00;
						height: 1rem;
					}
				`}</style>
			</div>
		);
	}
}

export default Stripes2;
