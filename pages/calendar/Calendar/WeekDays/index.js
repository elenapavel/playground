import { Component } from "react";

import $ from "./style.css";

const weekDaysNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const weekDaysNamesSmall = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekDaysNamesXSmall = ["S", "M", "T", "W", "T", "F", "S"];

class WeekDays extends Component {
	state = {
		weekDays: null,
	};
	componentDidMount() {
		this.setState({
			weekDays:
				window.innerWidth > 640
					? weekDaysNames
					: window.innerWidth > 480
						? weekDaysNamesSmall
						: weekDaysNamesXSmall,
		});
		window.addEventListener("resize", () => this.setWeekDaysName());
	}
	setWeekDaysName() {
		this.setState({
			weekDays:
				window.innerWidth > 640
					? weekDaysNames
					: window.innerWidth > 480
						? weekDaysNamesSmall
						: weekDaysNamesXSmall,
		});
	}
	render() {
		const { weekDays } = this.state;
		return (
			<div className={$.container}>
				{weekDays == null
					? null
					: weekDays.map((weekDay, key) => {
							return (
								<div key={key} className={$.week_day}>
									{weekDay}
								</div>
							);
					  })}
			</div>
		);
	}
}

export default WeekDays;
