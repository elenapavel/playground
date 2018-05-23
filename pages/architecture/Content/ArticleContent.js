import { Component } from "react";

import { Transition, Spring, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

import $ from "./style.css";

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
			<div className={$.content_container}>
				<Spring
					impl={TimingAnimation}
					config={{ delay: 300, duration: 400, easing: Easing.in }}
					from={{ opacity: 0, transform: "translateY(3rem)" }}
					to={{ opacity: 1, transform: "translateY(0)" }}
				>
					{styles => (
						<animated.div style={styles}>
							<div className={$.title}>{title}</div>
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
							<div className={$.details_section}>
								<div className={$.category}>{category}</div>
								<div className={$.date}>{date}</div>
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
							<div className={$.content}>
								{content.map((paragraph, key) => (
									<div key={key} className={$.paragraph}>
										{paragraph}
									</div>
								))}
								<a className={$.more} href={more}>
									Read more
								</a>
							</div>
						</animated.div>
					)}
				</Spring>
			</div>
		);
	}
}

export default ArticleContent;
