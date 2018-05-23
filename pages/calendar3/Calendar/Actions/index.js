import { Component } from "react";
import $ from "./style.css";

class Actions extends Component {
	render() {
		const { next, prev } = this.props;

		const prevArrowClasses = `${$.arrow} ion-chevron-left`;
		const nextArrowClasses = `${$.arrow} ion-chevron-right`;
		return (
			<div className={$.container}>
				<div className={prevArrowClasses} onClick={() => prev()} />
				<div className={nextArrowClasses} onClick={() => next()} />
			</div>
		);
	}
}

export default Actions;
