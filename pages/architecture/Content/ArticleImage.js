import { PureComponent } from "react";

import { Spring, Transition, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

import $ from "./style.css";

class ArticleImage extends PureComponent {
	render() {
		const { image, extras, lastImage, lastExtras } = this.props;

		return (
			<div className={$.image_container}>
				<Spring
					impl={TimingAnimation}
					config={{ delay: 400, duration: 300, easing: Easing.in }}
					from={{ transform: "scale(1.1)" }}
					to={{ transform: "scale(1)" }}
					reset
				>
					{styles => (
						<div
							className={$.image}
							style={{
								...styles,
								backgroundImage: `url("${image}")`,
							}}
						/>
					)}
				</Spring>
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
										delay: 500,
										duration: 300,
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
										delay: 800,
										duration: 300,
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
