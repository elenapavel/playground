import { PureComponent } from "react";

import { Spring, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

import Categories from "./Categories";

import $ from "./style.css";

class TopBar extends PureComponent {
	render() {
		const { logo, quote } = this.props;
		return (
			<div className={$.container}>
				<div className={$.to_left}>
					<div className={$.logo}>
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
					<div className={$.quote}>
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
				<div className={$.to_right}>
					<Categories />
				</div>
			</div>
		);
	}
}

export default TopBar;
