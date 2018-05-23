import { Component } from "react";

import setDate from "date-fns/set_date";
import isSameDay from "date-fns/is_same_day";
import addMonths from "date-fns/add_months";
import subMonths from "date-fns/sub_months";

import Month from "./Month";

import $ from "./style.css";

class DaysList extends Component {
	render() {
		const { view, days, date, onSelect, onRender, setDay } = this.props;
		if (days != null && days.length != 0)
			if (view == "month")
				return (
					<Month
						date={date}
						onRender={onRender}
						onSelect={onSelect}
						setDay={setDay}
						days={days[0]}
					/>
				);
			else if (view == "year")
				return (
					<div>
						{days.map((month, key) => {
							return (
								<Month
									key={key}
									date={date}
									onRender={onRender}
									onSelect={onSelect}
									setDay={setDay}
									days={days[key]}
								/>
							);
						})}
					</div>
				);

		return null;
	}
}

export default DaysList;
