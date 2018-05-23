import { PureComponent } from "react";
import { module } from "../application";
import { Transition, config } from "react-spring";
import $ from "./style.css";

class Background extends PureComponent {
	state = {
		backgroundWidth: null,
	};
	componentDidMount() {
		this.setState({
			backgroundWidth:
				window.innerWidth > 1439
					? 100 - 96000 / window.innerWidth + "%"
					: window.innerWidth > 1071
						? 100 - 64000 / window.innerWidth + "%"
						: "100%",
		});
		document.defaultView.addEventListener("resize", () => {
			this.calcBackgroundWidth();
		});
	}
	calcBackgroundWidth() {
		this.setState({
			backgroundWidth:
				window.innerWidth > 1439
					? 100 - 96000 / window.innerWidth + "%"
					: window.innerWidth > 1071
						? 100 - 64000 / window.innerWidth + "%"
						: "100%",
		});
	}
	render() {
		const { backgroundWidth } = this.state;
		return module("universeFacts", ({ universeFacts }) => {
			const {
				view,
				selectedArticleIndex,
				selectedCategoryArticles,
			} = universeFacts;
			const backgroundImage =
				selectedArticleIndex != null
					? selectedCategoryArticles[selectedArticleIndex].image
					: "";
			return (
				<Transition
					keys={selectedArticleIndex}
					config={config.slow}
					from={{ width: "0%" }}
					enter={{ width: backgroundWidth }}
					leave={{ width: "0%" }}
				>
					{styles => (
						<div
							className={$.background_container}
							style={{
								width: `${
									view == "article" ? styles.width : "0%"
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
