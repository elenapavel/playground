import { Component } from "react";

class LeftSide extends Component {
	render() {
		const { logo } = this.props;
		return (
			<div className="container">
				<div className="logo">
					<img src={logo} />
				</div>
				<style jsx>{`
					.container {
						position: relative;
					}
					.logo {
						position: absolute;
						top: 1.5rem;
						left: 2rem;
						z-index: 10;
					}
					.logo img {
						width: 5rem;
						display: block;
					}
					@media (min-width: 30rem) {
						.logo {
							left: 4rem;
						}
					}
					@media (min-width: 90rem) and (min-height: 56.25rem) {
						.logo {
							top: 8rem;
							bottom: 8rem;
							left: 8rem;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default LeftSide;
