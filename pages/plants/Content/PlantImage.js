import { PureComponent } from "react";
import { Transition, animated, config } from "react-spring";

class PlantImage extends PureComponent {
	render() {
		const {
			title,
			subtitle,
			image,
			index,
			lastTitle,
			lastSubtitle,
			lastImage,
			lastIndex,
		} = this.props;
		const formattedIndex =
			parseInt(index) + 1 < 10
				? "0" + (parseInt(index) + 1)
				: parseInt(index) + 1;
		const lastFormattedIndex =
			parseInt(lastIndex) + 1 < 10
				? "0" + (parseInt(lastIndex) + 1)
				: parseInt(lastIndex) + 1;

		const defaultStylesTitles = {
			position: "absolute",
		};
		return (
			<div className="container">
				<Transition
					keys={image}
					config={config.stiff}
					from={{
						opacity: 0,
					}}
					enter={{
						opacity: 1,
					}}
					from={{
						opacity: 0,
					}}
				>
					{styles => (
						<div
							className="image"
							style={{
								...styles,
							}}
						/>
					)}
				</Transition>
				<Transition
					keys={title}
					config={config.default}
					from={{ opacity: 0, transform: "translateY(100%)" }}
					enter={{ opacity: 1, transform: "translateY(0%)" }}
					leave={{ opacity: 0, transform: "translateY(-100%)" }}
				>
					{styles => (
						<animated.div
							style={{
								...defaultStylesTitles,
								...styles,
							}}
						>
							<div className="title">{title}</div>
							<div className="subtitle">{subtitle}</div>
						</animated.div>
					)}
				</Transition>
				<Transition
					keys={index}
					config={config.default}
					from={{ opacity: 0, transform: "translateY(100%)" }}
					enter={{ opacity: 1, transform: "translateY(0%)" }}
					leave={{ opacity: 0, transform: "translateY(-100%)" }}
				>
					{styles => (
						<div
							className="index"
							style={{
								...styles,
							}}
						>
							{formattedIndex}
						</div>
					)}
				</Transition>
				<style jsx>{`
					.container {
						position: relative;
						padding: 2rem;
						height: 70vw;
						max-height: 70vh;
						overflow: hidden;
					}
					.image {
						background-position: top center;
						background-repeat: no-repeat;
						background-size: cover;
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						height: 100%;
						width: 100%;
					}
					.index {
						position: absolute;
						right: -0.6rem;
						font-weight: bold;
						color: rgba(0, 0, 0, 0.1);
						line-height: 1;
						bottom: 0;
						font-size: 5rem;
					}
					.container:before {
						content: "";
						display: block;
						position: absolute;
						top: 2rem;
						right: 2rem;
						width: 2rem;
						border-top: 2px solid #000;
						z-index: 10;
					}
					.container:after {
						content: "";
						display: block;
						position: absolute;
						top: 2rem;
						right: 2rem;
						height: 2rem;
						border-right: 2px solid #000;
						z-index: 10;
					}
					.title {
						font-weight: bold;
						font-size: 1rem;
					}
					.subtitle {
						font-size: 0.9rem;
					}
					.image {
						background-position: center;
						background-repeat: no-repeat;
						background-size: contain;
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						height: 100%;
						width: 100%;
						background-image: url(${image});
					}
					@media (min-width: 30rem) {
						.container {
							padding: 4rem;
						}
						.container:before,
						.container:after {
							top: 2rem;
							right: 2rem;
						}
						.index {
							bottom: -2.5rem;
							font-size: 10rem;
						}
					}
					@media (min-width: 48rem) {
						.index {
							bottom: -4rem;
							font-size: 15rem;
						}
					}
					@media (min-width: 64rem) {
						.container {
							height: 100%;
							max-height: none;
						}
						.image {
							background-position: top center;
							background-size: cover;
						}
					}
					@media (min-width: 90rem) and (min-height: 56.25rem) {
						.container {
							padding: 8rem;
						}
						.container:before {
							top: 8rem;
							right: 8rem;
							width: 3rem;
						}
						.container:after {
							top: 8rem;
							right: 8rem;
							height: 3rem;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default PlantImage;
