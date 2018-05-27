import { PureComponent } from "react";

import { Transition, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

import ArticleContent from "./ArticleContent";
import ArticleImage from "./ArticleImage";
import Progress from "./Progress";

import $ from "./style.css";

class Content extends PureComponent {
	state = {
		isMobileView: 0,
	};

	componentDidMount() {
		this.setState({ isMobileView: window.innerWidth > 1023 ? 0 : 1 });
		window.addEventListener("resize", () => this.calcWindowInnerWidth());
	}
	calcWindowInnerWidth() {
		this.setState({ isMobileView: window.innerWidth > 1023 ? 0 : 1 });
	}

	render() {
		const {
			article,
			lastArticle,
			total,
			currentIndex,
			lastIndex,
		} = this.props;

		const { isMobileView } = this.state;

		return (
			<div className={$.container}>
				<div className={$.to_left}>
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
					{!isMobileView ? (
						<Transition
							keys={currentIndex}
							impl={TimingAnimation}
							config={{ duration: 400, easing: Easing.in }}
							from={{
								opacity: 0,
								left:
									currentIndex > lastIndex ? "-100%" : "100%",
							}}
							enter={{
								opacity: 1,
								left: "0",
							}}
							leave={{
								opacity: 0,
								left:
									currentIndex > lastIndex ? "100%" : "-100%",
							}}
						>
							{styles => (
								<div
									style={{
										...styles,
										position: "absolute",
										zIndex: 10,
										width: "50%",
									}}
								>
									<Progress
										index={currentIndex}
										total={total}
									/>
								</div>
							)}
						</Transition>
					) : (
						<Progress index={currentIndex} total={total} />
					)}
				</div>
				<div className={$.to_right}>
					<ArticleImage
						image={article.image}
						extras={article.extras}
						lastImage={lastArticle.image}
						lastExtras={lastArticle.extras}
					/>
				</div>
			</div>
		);
	}
}

export default Content;
