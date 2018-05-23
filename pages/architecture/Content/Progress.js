import { Component } from "react";

import Actions from "./Actions";

import $ from "./style.css";

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
			<div className={$.progress_container}>
				<div className="to_left">
					<Actions />
				</div>
				<div className={$.progress_to_right}>
					{formattedIndex} / {formattedTotal}.
				</div>
				<div className="progress_bar" />
				<style jsx>{`
					.progress_bar {
						flex-basis: 100%;
						border-bottom: 3px solid #adadad;
						position: relative;
						margin: 1.5rem 0;
					}
					.progress_bar:after {
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
				`}</style>
			</div>
		);
	}
}

export default Progress;
