import { Component } from "react";

import format from "date-fns/format";
import startOfMonth from "date-fns/start_of_month";
import subDays from "date-fns/sub_days";
import getMonth from "date-fns/get_month";
import getYear from "date-fns/get_year";
import getDaysInMonth from "date-fns/get_days_in_month";

import Actions from "./Actions";
import Label from "./Label";
import WeekDays from "./WeekDays";
import Grid from "./Grid";

import * as styles from "./design_tokens.css";
import $ from "./style.css";

export default class Calendar extends Component {
	constructor(props) {
		super();

		const date = new Date(props.date);
		const currentDate = new Date();
		const selectedDate = props.date != null ? date : currentDate;

		const month = parseInt(format(selectedDate, "M")) - 1;
		const monthName = format(selectedDate, "MMM");
		const year = parseInt(format(selectedDate, "YYYY"));

		this.state = {
			currentDate: currentDate,
			selectedDate: selectedDate,
			inViewMonth: month,
			inViewMonthName: monthName,
			inViewYear: year,
		};
	}
	setDay(date) {
		this.setState({ selectedDate: date });
		this.setMonth(getMonth(date));
		this.setYear(getYear(date));
		this.props.onChangeDate(date);
	}
	setMonth(month) {
		if (month < 0) {
			this.setState({ inViewMonth: 11 });
			this.setYear(this.state.inViewYear - 1);
		} else if (month > 11) {
			this.setState({ inViewMonth: 0 });
			this.setYear(this.state.inViewYear + 1);
		} else this.setState({ inViewMonth: month });

		const selectedDay = parseInt(format(this.state.selectedDate, "D"));

		const inViewDate = new Date(this.state.inViewYear, month, selectedDay);
		this.setState({
			inViewMonthName: format(inViewDate, "MMM"),
		});
	}
	setYear(year) {
		this.setState({
			inViewYear: year,
		});
	}
	setDaysInMonth() {
		const {
			currentDate,
			selectedDate,
			inViewMonth,
			inViewYear,
		} = this.state;

		const inViewDate = new Date(inViewYear, inViewMonth);

		const currentDay = parseInt(format(currentDate, "D"));
		const currentMonth = parseInt(format(currentDate, "M")) - 1;
		const currentMonthName = format(currentDate, "MMM");
		const currentYear = parseInt(format(currentDate, "YYYY"));

		const day = parseInt(format(selectedDate, "D"));
		const month = parseInt(format(selectedDate, "M")) - 1;
		const monthName = format(selectedDate, "MMM");
		const year = parseInt(format(selectedDate, "YYYY"));

		const daysUntilSunday = parseInt(format(startOfMonth(inViewDate), "d"));
		const monthLength = getDaysInMonth(inViewDate);
		const firstDayOfWeek = parseInt(
			format(subDays(startOfMonth(inViewDate), daysUntilSunday), "D")
		);

		var completeDaysInMonth = [];
		var daysInMonth = [];

		for (var i = 0; i < daysUntilSunday; i++) {
			completeDaysInMonth.push({
				lastMonth: true,
				day: firstDayOfWeek + i,
			});
		}
		for (var i = 0; i < monthLength; i++) {
			completeDaysInMonth.push({
				day: i + 1,
				current:
					currentDay == i + 1 &&
					currentMonth == inViewMonth &&
					currentYear == inViewYear,
				selected:
					day == i + 1 && inViewMonth == month && inViewYear == year,
			});
		}
		daysInMonth = completeDaysInMonth.concat(daysInMonth);

		completeDaysInMonth = [];

		for (var i = 0; i < 42 - daysInMonth.length; i++) {
			completeDaysInMonth.push({
				nextMonth: true,
				day: i + 1,
			});
		}

		daysInMonth = daysInMonth.concat(completeDaysInMonth);

		return daysInMonth;
	}
	render() {
		const { inViewMonth, inViewMonthName, inViewYear } = this.state;

		const { onRender, selected, view } = this.props;

		// const isCurrentDate = isSameDay(date, currentDate);
		// const isCurrentMonth = isSameMonth(date, currentDate);
		// const isCurrentYear = isSameYear(date, currentDate);

		return (
			<div className={$.container}>
				<div className={$.header}>
					<div className={$.actions}>
						<Actions
							nextMonth={() => this.setMonth(inViewMonth + 1)}
							prevMonth={() => this.setMonth(inViewMonth - 1)}
						/>
					</div>
					<div className={$.label}>
						<Label month={inViewMonthName} year={inViewYear} />
					</div>
				</div>
				<div className={$.body}>
					<div className={$.week_days}>
						<WeekDays />
					</div>
					<div className={$.grid}>
						<Grid
							view={view}
							daysInMonth={this.setDaysInMonth()}
							date={new Date(inViewYear, inViewMonth)}
							setDay={day => this.setDay(day)}
							onRender={onRender}
							selected={selected}
						/>
					</div>
				</div>
			</div>
		);
	}
}
