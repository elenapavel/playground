import { Component } from "react";
import ArticleContent from "./ArticleContent";
import ArticleImage from "./ArticleImage";
import Progress from "./Progress";
import { Transition, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

class Content extends Component {
	render() {
		const {
			article,
			lastArticle,
			total,
			currentIndex,
			lastIndex,
		} = this.props;
		return (
			<Transition
				keys={currentIndex}
				impl={TimingAnimation}
				config={{ duration: 600, easing: Easing.in }}
				from={{
					opacity: 0,
					left: currentIndex > lastIndex ? "-100%" : "100%",
				}}
				enter={{
					opacity: 1,
					left: "0",
				}}
				leave={{
					opacity: 0,
					left: currentIndex > lastIndex ? "100%" : "-100%",
				}}
			>
				{styles => (
					<div
						style={{
							...styles,
							position: "absolute",
							zIndex: 10,
							width: "100%",
						}}
					>
						<div className="container">
							<div className="to_left">
								<ArticleContent
									title={article.title}
									date={article.date}
									category={article.category}
									content={article.content}
									more={article.more}
									lastTitle={lastArticle.title}
									lastDate={lastArticle.date}
									lastCategory={lastArticle.category}
									lastContent={lastArticle.content}
									lastMore={lastArticle.more}
								/>
								<Progress index={currentIndex} total={total} />
							</div>
							<div className="to_right">
								<ArticleImage
									image={article.image}
									extras={article.extras}
									lastImage={lastArticle.image}
									lastExtras={lastArticle.extras}
								/>
							</div>
							<style jsx>{`
								.container {
									position: relative;
									display: flex;
									flex-wrap: wrap;
								}
								.to_left {
									flex-basis: 100%;
									transition: flex-basis 0.5s ease-in-out;
								}
								.to_right {
									flex-basis: 100%;
									transition: flex-basis 0.5s ease-in-out;
									overflow: hidden;
								}
								@media (min-width: 64rem) {
									.to_left {
										flex-basis: 50%;
									}
									.to_right {
										flex-basis: 50%;
									}
								}
							`}</style>
						</div>
					</div>
				)}
			</Transition>
		);
	}
}

export default Content;
