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
import DaysList from "./DaysList";

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
			daysInYear: [],
		};
	}
	componentDidMount() {
		const { view } = this.props;
		const { inViewMonth, inViewYear } = this.state;

		this.setView(view, inViewMonth, inViewYear);
	}
	setDay(date) {
		this.props.onChangeDate(date);
	}
	setMonth(month) {
		var inViewDate = null;
		if (month < 0) {
			this.setState({ inViewMonth: 11 });
			this.setYear(this.state.inViewYear - 1);
			inViewDate = new Date(this.state.inViewYear - 1, 11);
		} else if (month > 11) {
			this.setState({ inViewMonth: 0 });
			this.setYear(this.state.inViewYear + 1);
			inViewDate = new Date(this.state.inViewYear + 1, 0);
		} else {
			this.setState({ inViewMonth: month });
			inViewDate = new Date(this.state.inViewYear, month);
		}

		this.setState({
			inViewMonthName: format(inViewDate, "MMM"),
		});
	}
	setYear(year) {
		this.setState({
			inViewYear: year,
		});
	}
	setView(view = "month", month = null, year = null) {
		var daysInYear = [];

		const currentMonth = month != null ? month : this.state.inViewMonth;
		const currentYear = year != null ? year : this.state.inViewYear;

		if (view == "year") {
			this.setYear(currentYear);
			this.setDaysInYearView(currentYear);
		} else if (view == "month") {
			this.setMonth(currentMonth);
			this.setDaysInMonthView(currentMonth);
		}
	}
	setDaysInMonthView(month, year = null) {
		var daysInYear = [];

		const currentMonth = month != null ? month : this.state.inViewMonth;
		const currentYear = this.state.inViewYear;

		daysInYear.push(this.setDays(currentMonth, currentYear));
		this.setState({ daysInYear: daysInYear });
	}
	setDaysInYearView(year) {
		var daysInYear = [];

		const currentYear = year != null ? year : this.state.inViewYear;

		new Array(12)
			.fill(1)
			.forEach((month, key) =>
				daysInYear.push(this.setDays(key, currentYear))
			);
		this.setState({ daysInYear: daysInYear });
	}
	setDays(month = null, year = null) {
		const {
			currentDate,
			selectedDate,
			inViewMonth,
			inViewYear,
		} = this.state;

		const inViewDate = new Date(
			year != null ? year : inViewYear,
			month != null ? month : inViewMonth
		);

		const currentDay = parseInt(format(currentDate, "D"));
		const currentMonth = parseInt(format(currentDate, "M")) - 1;
		const currentYear = parseInt(format(currentDate, "YYYY"));

		const selectedDay = parseInt(format(selectedDate, "D"));
		const selectedMonth = parseInt(format(selectedDate, "M")) - 1;
		const selectedYear = parseInt(format(selectedDate, "YYYY"));

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
					selectedDay == i + 1 &&
					inViewMonth == selectedMonth &&
					inViewYear == selectedYear,
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
		const {
			inViewMonth,
			inViewMonthName,
			inViewYear,
			daysInYear,
			selectedDate,
		} = this.state;

		const { onRender, onSelect, view } = this.props;

		const days = daysInYear;

		// const isCurrentDate = isSameDay(date, currentDate);
		// const isCurrentMonth = isSameMonth(date, currentDate);
		// const isCurrentYear = isSameYear(date, currentDate);

		return (
			<div className={$.container}>
				<div className={$.header}>
					<div className={$.actions}>
						<Actions
							next={() =>
								this.setView(
									"month",
									inViewMonth + 1,
									inViewYear
								)
							}
							prev={() =>
								this.setView(
									"month",
									inViewMonth - 1,
									inViewYear
								)
							}
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
						<DaysList
							view={view}
							days={days}
							date={new Date(inViewYear, inViewMonth)}
							setDay={date => this.setDay(date)}
							onRender={onRender}
							onSelect={onSelect}
						/>
					</div>
				</div>
			</div>
		);
	}
}
