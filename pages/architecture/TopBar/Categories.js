import { Component } from "react";
import { module } from "../application";
import { Spring, animated, config } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

class Categories extends Component {
	render() {
		return module(
			"portfolio",
			({ portfolio, selectArticleByCategoryIndex }) => {
				const { categories, selectedCategoryLabel } = portfolio;
				return (
					<div className="container">
						{categories.map((category, key) => (
							<div
								key={key}
								className="category"
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
									className="overlay"
									style={{ ...styles }}
								/>
							)}
						</Spring>
						<style jsx>{`
							.container {
								position: relative;
								text-align: center;
								transition: text-align 0.5s ease-in-out;
							}
							.overlay {
								position: absolute;
								top: 0;
								bottom: 0;
								right: 0;
								height: 100%;
								background: #fefefe;
							}
							.category {
								display: inline-block;
								color: #4c4c4c;
								cursor: pointer;
								margin-left: 1rem;
								margin-top: 0.5rem;
								padding: 0.5rem 1rem;
								border: 2px solid transparent;
								border-bottom: 2px solid #969696;
								transition-property: border, padding,
									margin-left, margin-top;
								transition-duration: 0.5s;
								transition-timing-function: ease-in-out;
							}
							.category:first-child {
								margin-left: 0;
							}
							@media (min-width: 40rem) {
								.container {
									margin-top: 0;
									text-align: left;
								}
								.category {
									padding: 1rem 2rem;
									border-color: #969696;
									border-width: 0.2rem;
									margin-left: 1.5rem;
								}
							}
							@media (min-width: 80rem) {
								.container {
									text-align: right;
								}
							}
						`}</style>
					</div>
				);
			}
		);
	}
}

export default Categories;
