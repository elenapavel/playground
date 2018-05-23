import { Component } from "react";

import { module } from "../application";

import $ from "./style.css";

class Actions extends Component {
	render() {
		return module("portfolio", ({ portfolio, selectArticleIndex }) => {
			const { selectedArticleIndex, articles } = portfolio;
			return (
				<div className={$.actions_container}>
					{selectedArticleIndex == 0 ? null : (
						<div
							className={$.action}
							onClick={() =>
								selectArticleIndex(selectedArticleIndex - 1)
							}
						>
							Previous
						</div>
					)}
					{selectedArticleIndex == articles.length - 1 ? null : (
						<div
							className={$.action}
							onClick={() =>
								selectArticleIndex(selectedArticleIndex + 1)
							}
						>
							Next
						</div>
					)}
					<style jsx>{``}</style>
				</div>
			);
		});
	}
}

export default Actions;
