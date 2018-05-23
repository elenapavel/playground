import { Component } from "react";
import { module } from "../application";

class Actions extends Component {
	render() {
		return module("portfolio", ({ portfolio, selectArticleIndex }) => {
			const { selectedArticleIndex, articles } = portfolio;
			return (
				<div className="container">
					{selectedArticleIndex == 0 ? null : (
						<div
							className="action"
							onClick={() =>
								selectArticleIndex(selectedArticleIndex - 1)
							}
						>
							Previous
						</div>
					)}
					{selectedArticleIndex == articles.length - 1 ? null : (
						<div
							className="action"
							onClick={() =>
								selectArticleIndex(selectedArticleIndex + 1)
							}
						>
							Next
						</div>
					)}
					<style jsx>{`
						.container {
							position: relative;
						}
						.action {
							font-weight: 700;
							display: inline-block;
							cursor: pointer;
						}
						.action:first-child:after {
							content: "/";
							display: inline-block;
							padding: 0 0.5rem;
						}
						.action:first-child:last-child:after {
							display: none;
						}
					`}</style>
				</div>
			);
		});
	}
}

export default Actions;
