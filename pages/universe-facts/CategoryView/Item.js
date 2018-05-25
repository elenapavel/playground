import { PureComponent } from "react";

import { Spring } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

import { module } from "../application";

import $ from "./style.css";

class Item extends PureComponent {
	render() {
		const { isActive, backgroundImage, title, index } = this.props;
		const itemClasses = `${$.list_item} ${
			isActive ? $.list_item_active : ""
		}`;
		const itemsIn = {
			opacity: 0,
			x: 25,
		};
		const itemsOut = {
			opacity: 1,
			x: 0,
		};

		return module(
			"universeFacts",
			({ universeFacts, selectArticleByIndex }) => {
				return (
					<Spring
						impl={TimingAnimation}
						config={{
							delay: 200 + 100 * index,
							duration: 300,
							easing: Easing.linear,
						}}
						from={itemsIn}
						to={itemsOut}
					>
						{styles => (
							<div
								className={itemClasses}
								style={{
									backgroundImage: `url(${backgroundImage})`,
									opacity: styles.opacity,
									transform: `translateX(${styles.x}rem)`,
								}}
								onClick={() => selectArticleByIndex(index)}
							>
								{title != null ? (
									<div className={$.list_item_title}>
										{title}
									</div>
								) : null}
							</div>
						)}
					</Spring>
				);
			}
		);
	}
}

export default Item;
