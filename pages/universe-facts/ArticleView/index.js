import { Component } from "react";
import $ from "./style.css";
import Background from "./Background";
import Bullets from "../Bullets";
import Action from "./Action";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Content from "./Content";
import { module } from "../application";
import { Spring, config } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

class ArticleView extends Component {
	render() {
		return module("universeFacts", ({ universeFacts }) => {
			const {
				selectedCategoryArticles,
				view,
				selectedArticleIndex,
			} = universeFacts;
			const currentArticle =
				selectedArticleIndex != null
					? selectedCategoryArticles[selectedArticleIndex]
					: {
							title: "",
							subtitle: "",
							category: "",
							image: "",
							gallery: [],
							content: [],
					  };
			return (
				<Spring
					impl={TimingAnimation}
					config={{
						duration: 300,
						easing: Easing.linear,
					}}
					from={{ opacity: `${view == "article" ? 1 : 0}` }}
					to={{ opacity: `${view == "article" ? 1 : 0}` }}
				>
					{styles => (
						<div style={{ ...styles }}>
							<div className={$.container}>
								<Background />
								<Overview
									title={currentArticle.title}
									subtitle={currentArticle.subtitle}
									index={selectedArticleIndex}
								/>
								<div className={$.bullets}>
									<Bullets />
								</div>
								<div className={$.content_container}>
									{currentArticle.gallery.length ? (
										<div className={$.content_gallery}>
											<Gallery
												items={currentArticle.gallery}
											/>
										</div>
									) : null}
									<div className={$.content}>
										<Content
											content={currentArticle.content}
										/>
									</div>
								</div>
								<Action />
							</div>
						</div>
					)}
				</Spring>
			);
		});
	}
}

export default ArticleView;
