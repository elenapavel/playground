import { Component } from "react";
import { module } from "../application";
import { Spring, config } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";
import Background from "./Background";
import TopPanel from "./TopPanel";
import Overview from "./Overview";
import Listing from "./Listing";
import $ from "./style.css";

class CategoryView extends Component {
	render() {
		return module("universeFacts", ({ universeFacts }) => {
			const {
				selectedCategoryArticles,
				view,
				categories,
				selectedCategoryIndex,
			} = universeFacts;
			const currentCategory = categories[selectedCategoryIndex];
			return (
				<Spring
					impl={TimingAnimation}
					config={{
						duration: 300,
						easing: Easing.linear,
					}}
					from={{ opacity: `${view == "category" ? 1 : 0}` }}
					to={{ opacity: `${view == "category" ? 1 : 0}` }}
				>
					{styles => (
						<div style={{ ...styles }}>
							<div className={$.container}>
								<Background />
								<TopPanel />
								<Spring
									config={config.stiff}
									from={{
										opacity: `${
											view == "category" ? 1 : 0
										}`,
									}}
									to={{
										opacity: `${
											view == "category" ? 1 : 0
										}`,
									}}
								>
									{styles => (
										<div style={{ ...styles }}>
											<Overview
												title={currentCategory.title}
												description={
													currentCategory.description
												}
												index={selectedCategoryIndex}
											/>
											<div className={$.list_container}>
												<Listing
													items={
														selectedCategoryArticles
													}
												/>
											</div>
										</div>
									)}
								</Spring>
							</div>
						</div>
					)}
				</Spring>
			);
		});
	}
}

export default CategoryView;
