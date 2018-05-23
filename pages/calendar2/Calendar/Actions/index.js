import { Component } from "react";
import $ from "./style.css";

class Actions extends Component {
	render() {
		const { nextMonth, prevMonth } = this.props;

		const prevArrowClasses = `${$.arrow} ion-chevron-left`;
		const nextArrowClasses = `${$.arrow} ion-chevron-right`;
		return (
			<div className={$.container}>
				<div className={prevArrowClasses} onClick={() => prevMonth()} />
				<div className={nextArrowClasses} onClick={() => nextMonth()} />
			</div>
		);
	}
}

export default Actions;
