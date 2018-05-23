import { Component } from "react";

import { Spring, animated, config } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

import { module } from "../application";

import $ from "./style.css";

class Categories extends Component {
	render() {
		return module(
			"portfolio",
			({ portfolio, selectArticleByCategoryIndex }) => {
				const { categories, selectedCategoryLabel } = portfolio;
				return (
					<div className={$.categories_container}>
						{categories.map((category, key) => (
							<div
								key={key}
								className={$.category}
								onClick={() => {
									category.label != selectedCategoryLabel
										? selectArticleByCategoryIndex(key)
										: null;
								}}
							>
								{category.label}
							</div>
						))}
						<Spring
							impl={TimingAnimation}
							config={{
								duration: 700,
								easing: Easing.In,
							}}
							from={{ width: "100%", opacity: 1 }}
							to={{ width: "0", opacity: 0.9 }}
						>
							{styles => (
								<div
									className={$.categories_overlay}
									style={{ ...styles }}
								/>
							)}
						</Spring>
					</div>
				);
			}
		);
	}
}

export default Categories;
