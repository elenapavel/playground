import { PureComponent } from "react";

import { Spring, Trail, config, animated } from "react-spring";

import { module } from "../application";

import $ from "./style.css";

class TopPanel extends PureComponent {
	render() {
		return module(
			"universeFacts",
			({ universeFacts, selectCategoryByIndex, toggleMenu }) => {
				const {
					categories,
					selectedCategoryIndex,
					menuIsOpen,
					view,
				} = universeFacts;
				const menuItemIn = {
					opacity: 1,
					x: 0,
				};
				const menuItemOut = {
					opacity: 0,
					x: 100,
				};
				const menuIconClasses = `${$.menu} ion-navicon`;
				return (
					<Spring
						config={config.stiff}
						from={{ opacity: `${view == "category" ? 1 : 0}` }}
						to={{ opacity: `${view == "category" ? 1 : 0}` }}
					>
						{styles => (
							<div>
								<div
									className={menuIconClasses}
									onClick={() => toggleMenu()}
								/>
								<div
									className={$.menu_container}
									style={{
										opacity: menuIsOpen ? 1 : 0,
										transform: `translateX(${
											menuIsOpen ? "0" : "100%"
										})`,
									}}
								>
									<div
										className={$.categories_container}
										style={{ ...styles }}
									>
										<Trail
											keys={categories.map(
												(category, key) => key
											)}
											config={config.stiff}
											from={
												menuIsOpen
													? menuItemIn
													: menuItemOut
											}
											to={
												menuIsOpen
													? menuItemIn
													: menuItemOut
											}
										>
											{categories.map(
												(category, key) => styles => {
													const categoryClasses = `${
														$.category
													} ${
														key ==
														selectedCategoryIndex
															? $.category_active
															: ""
													}`;

													return (
														<div
															key={key}
															style={{
																transform: `translateX(${
																	styles.x
																}%)`,
																opacity:
																	styles.opacity,
															}}
														>
															<div
																className={
																	categoryClasses
																}
																onClick={() =>
																	selectCategoryByIndex(
																		key
																	)
																}
															>
																{category.title}
															</div>
														</div>
													);
												}
											)}
										</Trail>
									</div>
								</div>
							</div>
						)}
					</Spring>
				);
			}
		);
	}
}
export default TopPanel;
