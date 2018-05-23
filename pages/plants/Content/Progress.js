import { Component } from "react";
import { Transition, animated, config } from "react-spring";

class Progress extends Component {
	render() {
		const { label, index, total, lastIndex } = this.props;
		const formattedIndex = parseInt(index) + 1;
		const lastFormattedIndex = parseInt(lastIndex) + 1;
		const formattedTotal = parseInt(total);
		return (
			<div className="container">
				<div className="label">{label}</div>
				<div className="progress">
					<Transition
						keys={(index, lastIndex)}
						config={config.woobly}
						from={{ opacity: 0, transform: "translateY(100%)" }}
						enter={{ opacity: 1, transform: "translateY(0%)" }}
						leave={{
							opacity: 0,
							transform: "translateY(-100%)",
						}}
					>
						{styles => (
							<animated.div
								style={{
									position: "absolute",
									left: "2rem",
									...styles,
								}}
							>
								{formattedIndex}
							</animated.div>
						)}
					</Transition>
					<div className="total">{formattedTotal}</div>
				</div>
				<style jsx>{`
					.container {
						position: relative;
						display: flex;
						justify-content: space-between;
						flex-direction: row;
						flex-wrap: wrap;
						position: relative;
						padding: 2rem 2rem 0 0;
					}
					.container:before {
						content: "";
						position: absolute;
						top: 2rem;
						bottom: 0;
						left: 2rem;
						right: 2rem;
						border-top: 2px solid #000;
						display: block;
						height: 2px;
						margin: auto;
					}
					.label {
						font-weight: bold;
						font-size: 0.8rem;
						background: #fff;
						padding-right: 1rem;
						position: relative;
						z-index: 10;
					}
					.progress {
						display: flex;
						padding: 0 1rem;
						background: #fff;
						margin-right: 1rem;
						font-size: 0.8rem;
						font-weight: bold;
						position: relative;
						z-index: 10;
						width: 6.1rem;
					}
					.total {
						position: absolute;
						right: 2rem;
					}
					.total:before {
						content: "/";
						padding: 0 0.2rem;
						display: inline-block;
						vertical-align: top;
					}
					.actions {
						display: flex;
					}
					.action {
						background: #d8d8d8;
						border-radius: 50%;
						width: 2.5rem;
						height: 2.5rem;
						margin-right: 1rem;
						font-size: 1.5rem;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					@media (min-width: 30rem) {
						.container {
							padding: 4rem 4rem 0 0;
						}
						.container:before {
							top: 4rem;
							left: 4rem;
							right: 4rem;
						}
						.label {
							font-size: 1rem;
							padding-right: 2rem;
						}
						.progress {
							font-size: 1rem;
							padding: 0 2rem;
							margin-right: 2rem;
						}
					}
					@media (min-width: 40rem) {
						.container {
							padding: 4rem 4rem 0 2rem;
						}
					}
					@media (min-width: 64rem) {
						.container {
							padding: 0 4rem 0 4rem;
						}
						.container:before {
							top: 0;
						}
						.label {
							padding: 0 2rem;
						}
					}
					@media (min-width: 80rem) {
						.container {
							padding: 0 8rem 0 8rem;
						}
						.conatiner:before {
							left: 8rem;
							right: 8rem;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Progress;
