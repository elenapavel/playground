import { Component } from "react";
import $ from "./style.css";

class Label extends Component {
	render() {
		const { month, year } = this.props;
		return (
			<div className={$.container}>
				{month} {year}
			</div>
		);
	}
}

export default Label;
