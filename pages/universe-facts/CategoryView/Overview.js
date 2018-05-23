import { PureComponent } from "react";
import { Transition } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";
import $ from "./style.css";

class Overview extends PureComponent {
	render() {
		const { title, description, index } = this.props;
		return (
			<Transition
				keys={index}
				impl={TimingAnimation}
				config={{ duration: 300, easing: Easing.linear }}
				from={{ opacity: 0, transform: "translateY(-100%)" }}
				enter={{
					opacity: 1,
					transform: "translateY(0%)",
				}}
				leave={{
					opacity: 0,
					transform: "translateY(100%)",
				}}
			>
				{styles => (
					<div className={$.overview_container} style={{ ...styles }}>
						<div className={$.overview_title}>{title}</div>
						<div className={$.overview_description}>
							{description}
						</div>
					</div>
				)}
			</Transition>
		);
	}
}

export default Overview;
