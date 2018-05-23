import { Component } from "react";
import Actions from "./Actions";

class Progress extends Component {
	render() {
		const { index, total } = this.props;
		const formattedIndex =
			parseInt(index) + 1 < 10
				? "0" + (parseInt(index) + 1)
				: parseInt(index) + 1;
		const formattedTotal =
			parseInt(total) < 10 ? "0" + parseInt(total) : parseInt(total);

		return (
			<div className="container">
				<div className="to_left">
					<Actions />
				</div>
				<div className="to_right">
					{formattedIndex} / {formattedTotal}.
				</div>
				<div className="to_bottom" />
				<style jsx>{`
					.container {
						position: relative;
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: space-between;
						padding: 1.5rem;
						transition: padding 0.5s ease-in-out;
					}
					.to_right {
						font-weight: 700;
					}
					.to_bottom {
						flex-basis: 100%;
						border-bottom: 3px solid #adadad;
						position: relative;
						margin: 1.5rem 0;
					}
					.to_bottom:after {
						content: "";
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						width: ${(index + 1) * (100 / total)}%;
						height: 3px;
						background-color: #696969;
					}
					@media (min-width: 40rem) {
						.container {
							padding: 3rem;
						}
					}
					@media (min-width: 64rem) {
						.container {
							padding: 3rem 5.8333vw;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Progress;
