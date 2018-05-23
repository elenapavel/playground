import { Component } from "react";
import Application, { module } from "./application";
import TopBar from "./TopBar";
import Head from "./Head";
import Content from "./Content";
import { Spring } from "react-spring";

class Page extends Component {
	render() {
		return module("portfolio", ({ portfolio }) => {
			const {
				logo,
				quote,
				selectedArticleIndex,
				lastSelectedArticleIndex,
				articles,
			} = portfolio;
			const lastArticle =
				lastSelectedArticleIndex != null
					? articles[lastSelectedArticleIndex]
					: {
							title: "",
							content: [""],
							date: "",
							image: "",
							category: "",
							more: "",
							extras: { title: "", content: "" },
					  };
			return (
				<div className="container">
					<Head />

					<TopBar logo={logo} quote={quote} />
					<Content
						article={articles[selectedArticleIndex]}
						lastArticle={lastArticle}
						lastIndex={
							lastSelectedArticleIndex
								? lastSelectedArticleIndex
								: 0
						}
						currentIndex={selectedArticleIndex}
						total={articles.length}
					/>
					<style jsx>{`
						:global(body) {
							margin: 0;
							overflow-x: hidden;
							font-family: "Poppins", sans-serif;
							font-size: 1rem;
							line-height: 1.4;
							font-weight: 500;
							transition: font-size 0.5s ease-in-out;
						}
						:global(*) {
							box-sizing: border-box;
						}
						.container {
							position: relative;
							background: #fefefe;
						}
						@media (min-width: 40rem) {
							:global(body) {
								font-size: 1.3rem;
							}
						}
					`}</style>
				</div>
			);
		});
	}
}

export default () => (
	<Application>
		<Page />
	</Application>
);
