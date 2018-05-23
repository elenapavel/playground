import { PureComponent } from "react";
import Categories from "./Categories";
import { Spring, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

class TopBar extends PureComponent {
	render() {
		const { logo, quote } = this.props;
		return (
			<div className="container">
				<div className="to_left">
					<div className="logo">
						<Spring
							config={config.slow}
							from={{ opacity: 0, transform: "translateY(100%)" }}
							to={{ opacity: 1, transform: "translateY(0)" }}
						>
							{styles => (
								<animated.div style={styles}>
									<img src={logo} />
								</animated.div>
							)}
						</Spring>
					</div>
					<div className="quote">
						<Spring
							impl={TimingAnimation}
							config={{
								delay: 100,
								duration: 400,
								easing: Easing.in,
							}}
							from={{
								opacity: 0,
								transform: "translateX(-100%)",
							}}
							to={{ opacity: 1, transform: "translateX(0)" }}
						>
							{styles => (
								<animated.div style={styles}>
									<div>{quote}</div>
								</animated.div>
							)}
						</Spring>
					</div>
				</div>
				<div className="to_right">
					<Categories />
				</div>
				<style jsx>{`
					.container {
						position: relative;
						display: block;
						flex-wrap: wrap;
						flex-direction: row;
						align-items: center;
					}
					.to_left {
						padding: 0 1.5rem;
						margin: 1.5rem 0;
						flex-basis: 100%;
						display: block;
						align-items: center;
						trasition-property: flex-basis, padding, margin;
						transition-duration: 0.5s;
						trasition-timing-function: ease-in-out;
					}
					.to_right {
						padding: 0 1.5rem;
						margin: 1.5rem 0;
						flex-basis: 100%;
						trasition-property: flex-basis, padding, margin;
						transition-duration: 0.5s;
						trasition-timing-function: ease-in-out;
						position: relative;
					}
					.logo {
						flex-basis: 12.5vw;
						min-width: 5rem;
						width: 5rem;
						display: block;
						overflow: hidden;
						margin: auto;
					}
					.logo img {
						width: 100%;
						height: auto;
					}
					.quote {
						flex-basis: auto;
						line-height: 1.7;
						color: #4c4c4c;
						padding-left: 0;
						overflow: hidden;
						margin-top: 1.5rem;
						trasition-property: padding-left, margin-top;
						transition-duration: 0.5s;
						trasition-timing-function: ease-in-out;
						text-align: center;
					}
					@media (min-width: 25rem) {
						.to_left {
							display: flex;
						}
						.logo {
							width: auto;
							min-width: 10rem;
							display: inline-block;
						}
						.quote {
							padding-left: 1.5rem;
							margin-top: 0;
							text-align: left;
						}
					}
					@media (min-width: 40rem) {
						.logo {
							min-width: 9rem;
							margin: 0;
						}
						.to_left {
							padding: 0 3rem;
							margin: 3rem 0;
						}
						.to_right {
							padding: 0 3rem;
							margin: 3rem 0;
						}
					}
					@media (min-width: 80rem) {
						.container {
							display: flex;
						}
						.to_left {
							padding: 0 7.5vw 0 5.8333vw;
							margin: 4.1666vw 0;
							flex-basis: 50%;
						}
						.to_right {
							padding: 0 5.8333vw 0 0;
							margin: 4.1666vw 0;
							flex-basis: 50%;
							position: absolute;
							right: 0;
							top: 0;
							bottom: 0;
							display: flex;
							align-items: center;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default TopBar;
