import { Component } from "react";

import setDate from "date-fns/set_date";
import isSameDay from "date-fns/is_same_day";
import addMonths from "date-fns/add_months";
import subMonths from "date-fns/sub_months";

import Day from "./Day";

import $ from "./style.css";

class Grid extends Component {
	render() {
		const {
			daysInMonth,
			setDay,
			onRender,
			date,
			selected,
			view,
		} = this.props;
		if (view == "month")
			return (
				<div className={$.container}>
					{daysInMonth.map((day, key) => {
						var currentDate;
						currentDate = day.lastMonth
							? setDate(subMonths(date, 1), day.day)
							: day.nextMonth
								? setDate(addMonths(date, 1), day.day)
								: setDate(date, day.day);

						return (
							<Day
								key={key}
								isSameMonth={day.lastMonth || day.nextMonth}
								isCurrent={day.current}
								isSelected={day.selected}
								dayNumber={day.day}
								date={currentDate}
								setDay={setDay}
								selected={selected}
								onRender={onRender}
							/>
						);
					})}
				</div>
			);
		return null;
	}
}

export default Grid;
