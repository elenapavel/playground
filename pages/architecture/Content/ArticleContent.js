import { Component } from "react";
import { Transition, Spring, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

class ArticleContent extends Component {
	render() {
		const {
			title,
			date,
			category,
			content,
			more,
			lastTitle,
			lastDate,
			lastContent,
			lastMore,
			lastCategory,
		} = this.props;
		return (
			<div className="container">
				<Spring
					impl={TimingAnimation}
					config={{ delay: 300, duration: 400, easing: Easing.in }}
					from={{ opacity: 0, transform: "translateY(3rem)" }}
					to={{ opacity: 1, transform: "translateY(0)" }}
				>
					{styles => (
						<animated.div style={styles}>
							<div className="title">{title}</div>
						</animated.div>
					)}
				</Spring>
				<Spring
					impl={TimingAnimation}
					config={{ delay: 500, duration: 300, easing: Easing.in }}
					from={{ opacity: 0, transform: "translateY(1rem)" }}
					to={{ opacity: 1, transform: "translateY(0)" }}
				>
					{styles => (
						<animated.div style={styles}>
							<div className="details_section">
								<div className="category">{category}</div>
								<div className="date">{date}</div>
							</div>
						</animated.div>
					)}
				</Spring>
				<Spring
					impl={TimingAnimation}
					config={{ delay: 600, duration: 300, easing: Easing.in }}
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
				>
					{styles => (
						<animated.div style={styles}>
							<div className="content">
								{content.map((paragraph, key) => (
									<div key={key} className="paragraph">
										{paragraph}
									</div>
								))}
								<a className="more" href={more}>
									Read more
								</a>
							</div>
						</animated.div>
					)}
				</Spring>
				<style jsx>{`
					.container {
						position: relative;
						padding: 0 1.5rem;
					}
					.title {
						font-size: 2rem;
						font-weight: 700;
					}
					.details_section {
						display: block;
						font-weight: 400;
						color: #adadad;
						font-size: 1rem;
						margin-top: 1rem;
						letter-spacing: 0.5px;
						transition-property: font-size, margin-top;
						transition-duration: 0.5s;
						transition-timing-function: ease-in-out;
					}
					.category {
						flex-basis: 100%;
						transition: flex-basis 0.5s ease-in-out;
					}
					.date {
						margin-top: 1rem;
						padding-left: 0;
						flex-basis: 100%;
						transition-property: flex-basis, padding-left,
							margin-top;
						transition-duration: 0.5s;
						transition-timing-function: ease-in-out;
					}
					.content {
						color: #696969;
						line-height: 1.5;
						letter-spacing: -0.3px;
						font-weight: 400;
						margin-top: 1.5rem;
						column-count: 1;
						column-gap: 2.5rem;
					}
					.paragraph {
						margin-bottom: 1.5rem;
					}
					.more {
						display: block;
						font-weight: 700;
						text-decoration: none;
						color: #0b0b0b;
						transition: color 0.5s ease-in-out;
					}
					.more:hover {
						color: #696969;
					}
					@media (min-width: 40rem) {
						.details_section {
							display: flex;
							font-size: 1.3rem;
							margin-top: 1.5rem;
						}
						.category {
							flex-basis: 50%;
						}
						.date {
							margin-top: 0;
							padding-left: 1.25rem;
							flex-basis: 50%;
						}
						.content {
							column-count: 2;
							margin-top: 3rem;
						}
						.container {
							padding: 0 3rem;
						}
						.title {
							font-size: 3rem;
						}
					}
					@media (min-width: 64rem) {
						.container {
							padding: 0 5.8333vw;
						}
						.title {
							font-size: 4.1666vw;
						}
						.content {
							margin-top: 3.3333vw;
							column-count: 1;
						}
					}
					@media (min-width: 75rem) {
						.content {
							column-count: 2;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default ArticleContent;
