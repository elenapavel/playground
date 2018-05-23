import { PureComponent } from "react";
import { module } from "./application";
import $ from "./style.css";

class Bullets extends PureComponent {
	render() {
		return module(
			"universeFacts",
			({ universeFacts, selectArticleByIndex }) => {
				const {
					selectedArticleIndex,
					selectedCategoryArticles,
				} = universeFacts;
				const bulletsNumber = selectedCategoryArticles.length;
				return (
					<div className={$.bullets}>
						{bulletsNumber
							? new Array(bulletsNumber)
									.fill()
									.map((item, key) => {
										const bulletClasses = `${$.bullet} ${
											selectedArticleIndex != null
												? selectedArticleIndex == key
													? $.bullet_active
													: ""
												: key == 0
													? $.bullet_active
													: ""
										}`;
										return (
											<div
												key={key}
												className={bulletClasses}
												onClick={() =>
													selectArticleByIndex(key)
												}
											/>
										);
									})
							: null}
					</div>
				);
			}
		);
	}
}

export default Bullets;
