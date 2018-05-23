import { Component } from "react";

import setDate from "date-fns/set_date";
import isSameDay from "date-fns/is_same_day";
import addMonths from "date-fns/add_months";
import subMonths from "date-fns/sub_months";

import Day from "./Day";

import $ from "./style.css";

class Month extends Component {
	render() {
		const { days, setDay, onRender, date, onSelect } = this.props;

		return (
			<div className={$.container}>
				{days.map((day, key) => {
					var currentDate = null;

					currentDate = day.lastMonth
						? setDate(subMonths(date, 1), day.day)
						: day.nextMonth
							? setDate(addMonths(date, 1), day.day)
							: setDate(date, day.day);

					return (
						<Day
							key={key}
							isDisabled={day.lastMonth || day.nextMonth}
							isCurrent={day.current}
							isSelected={day.selected}
							dayNumber={day.day}
							date={currentDate}
							setDay={setDay}
							onSelect={onSelect}
							onRender={onRender}
						/>
					);
				})}
			</div>
		);
	}
}

export default Month;
