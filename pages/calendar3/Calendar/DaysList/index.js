import { Component } from "react";

import setDate from "date-fns/set_date";
import isSameDay from "date-fns/is_same_day";
import addMonths from "date-fns/add_months";
import subMonths from "date-fns/sub_months";

import Month from "./Month";

import $ from "./style.css";

class DaysList extends Component {
	render() {
		const { view, daysInMonth } = this.props;
		if (view == "month")
			return <Month {...this.props} daysInMonth={daysInMonth[0]} />;
		else if (view == "year")
			return (
				<div>
					{daysInMonth.map((month, key) => {
						console.log(month);
						return (
							<Month
								key={key}
								{...this.props}
								daysInMonth={daysInMonth[key]}
							/>
						);
					})}
				</div>
			);

		return null;
	}
}

export default DaysList;
