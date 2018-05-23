import { Component } from "react";

import Head from "next/head";

import { Spring } from "react-spring";

import Application, { module } from "./application";
import TopBar from "./TopBar";
import Content from "./Content";

import $ from "./style.css";

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
				<div className={$.container}>
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
				</div>
			);
		});
	}
}

export default () => (
	<div className={$.application}>
		<Head>
			<link
				href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700"
				rel="stylesheet"
			/>
		</Head>
		<Application>
			<Page />
		</Application>
	</div>
);
