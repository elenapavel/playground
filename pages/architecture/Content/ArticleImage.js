import { PureComponent } from "react";

import { Spring, Transition, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

import $ from "./style.css";

class ArticleImage extends PureComponent {
	state = {
		isMobileView: 0,
	};

	componentDidMount() {
		this.setState({ isMobileView: window.innerWidth > 767 ? 0 : 1 });
		window.addEventListener("resize", () => this.calcWindowInnerWidth());
	}

	calcWindowInnerWidth() {
		this.setState({ isMobileView: window.innerWidth > 767 ? 0 : 1 });
	}

	render() {
		const { image, extras, lastImage, lastExtras } = this.props;

		const { isMobileView } = this.state;

		return (
			<div className={$.image_container}>
				{!isMobileView ? (
					<Transition
						keys={image}
						config={config.woobly}
						from={{ transform: "scale(1.1)", opacity: 0 }}
						enter={{ transform: "scale(1)", opacity: 1 }}
						leaves={{ transform: "scale(0.9)", opacity: 0 }}
						reset
					>
						{styles => (
							<animated.div
								style={{
									height: "100%",
									position: "absolute",
									width: "100%",
									...styles,
								}}
							>
								<div
									className={$.image}
									style={{
										backgroundImage: `url("${image}")`,
									}}
								/>
							</animated.div>
						)}
					</Transition>
				) : (
					<div
						className={$.image}
						style={{ backgroundImage: `url("${image}")` }}
					/>
				)}
				<Spring
					keys={image}
					impl={TimingAnimation}
					config={{ easing: Easing.in }}
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
				>
					{styles => (
						<div style={{ ...styles }} className={$.extras}>
							<div>
								<Spring
									impl={TimingAnimation}
									config={{
										delay: 250,
										duration: 150,
										easing: Easing.in,
									}}
									from={{
										opacity: "0",
										transform: "translateY(3rem)",
									}}
									to={{
										opacity: "1",
										transform: "translateY(0)",
									}}
									reset
								>
									{styles => (
										<div
											style={{
												...styles,
											}}
											className={$.image_title}
										>
											{extras.title}
										</div>
									)}
								</Spring>
								<Spring
									impl={TimingAnimation}
									config={{
										delay: 400,
										duration: 150,
										easing: Easing.in,
									}}
									from={{
										opacity: "0",
										transform: "translateY(3rem)",
									}}
									to={{
										opacity: "1",
										transform: "translateY(0)",
									}}
									reset
								>
									{styles => (
										<div
											style={{
												...styles,
											}}
											className={$.image_content}
										>
											{extras.content}
										</div>
									)}
								</Spring>
							</div>
						</div>
					)}
				</Spring>
				<style jsx>{``}</style>
			</div>
		);
	}
}

export default ArticleImage;
