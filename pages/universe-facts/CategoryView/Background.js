import { PureComponent } from "react";

import { Transition, config } from "react-spring";

import { module } from "../application";

import $ from "./style.css";

class Background extends PureComponent {
	render() {
		return module("universeFacts", ({ universeFacts }) => {
			const { view, selectedCategoryIndex, categories } = universeFacts;
			const backgroundImage = categories[selectedCategoryIndex].image;
			return (
				<Transition
					keys={view}
					config={config.slow}
					from={{ width: "0%" }}
					enter={{ width: "100%" }}
					leave={{ width: "0%" }}
				>
					{styles => (
						<div
							className={$.background_container}
							style={{
								width: `${
									view == "category" ? styles.width : "0%"
								}`,
								backgroundImage: `url(${backgroundImage})`,
							}}
						/>
					)}
				</Transition>
			);
		});
	}
}

export default Background;
