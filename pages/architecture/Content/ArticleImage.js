import { PureComponent } from "react";
import { Spring, Transition, config, animated } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

class ArticleImage extends PureComponent {
	render() {
		const { image, extras, lastImage, lastExtras } = this.props;

		return (
			<div className="container">
				<Spring
					impl={TimingAnimation}
					config={{ delay: 400, duration: 300, easing: Easing.in }}
					from={{ transform: "scale(1.1)" }}
					to={{ transform: "scale(1)" }}
					reset
				>
					{styles => <div className="image" style={styles} />}
				</Spring>
				<Spring
					keys={image}
					impl={TimingAnimation}
					config={{ easing: Easing.in }}
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
				>
					{styles => (
						<div style={{ ...styles }} className="extras">
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
											className="title"
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
									// reset
								>
									{styles => (
										<div
											style={{
												...styles,
											}}
											className="content"
										>
											{extras.content}
										</div>
									)}
								</Spring>
							</div>
						</div>
					)}
				</Spring>
				<style jsx>{`
					.container {
						position: relative;
						height: 100%;
					}
					.image {
						position: relative;
						top: 0;
						bottom: 0;
						width: 100vw;
						left: 0;
						height: 75vw;
						background-image: url('${image}');
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						filter: grayscale(100%);
						transition-property: left, width, height, background-position;
						transition-duration: 0.5s;
						transition-timing-function: ease-in-out;
					}
					.extras{
						overflow: hidden;
						position: relative;
						width: 100%;
						bottom: 0;
						padding: 1.5rem;
						background: #0b0b0b;
						color: #fefefe;
						transition-property: width, padding;
						transition-duration: 0.5s;
						transition-timing-function: ease-in-out;
					}
					.title{
						width: 100%;
						text-transform: uppercase;
						text-decoration: underline;
						letter-spacing: -0.5px;
						font-size: 1.1rem;
						margin-bottom: 1.5rem;
						transition: width 0.5s ease-in-out;
					}
					.content{
						font-weight: 300;
						font-size: 1rem;
						line-height: 1.7;
						color: #ababab;
						transition: font-size 0.5s ease-in-out;
					}
					@media(min-width: 40rem){
						.extras{
							padding: 3rem;
						}
						.content{
							font-size: 1.1rem;
						}
					}
					@media(min-width: 48rem){
						.image{
							width: calc(100% - 30rem);
							left: 30rem;
							position:  absolute;
							height: 100%;
						}
						.extras{
							width: 30rem;
						}
						.title{
							width: 50%;
						}
					}
					@media(min-width: 64rem){
						.extras{
							position: absolute;
							padding: 4.1666vw;
						}
						.image{
							left: 0;
							right: 0;
							width: 100%;
							background-position: bottom center;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default ArticleImage;
