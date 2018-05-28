import { Component } from "react";
import format from "date-fns/format";
import getYear from "date-fns/get_year";
import addMonths from "date-fns/add_months";
import subMonths from "date-fns/sub_months";
import addYears from "date-fns/add_years";
import subYears from "date-fns/sub_years";
import getMonthViewByDay from "./getMonthViewByDay.js";
import Header from "./Header";
import WeekDays from "./WeekDays";
import Grid from "./Grid";
import Day from "./Day";
import $ from "./style.css";

export default class Calendar extends Component {
	state = {};

	static getDerivedStateFromProps(props, state) {
		state.date = String(props.date || Date());
		state.inViewDate = String(props.date || Date());
		state.year = getYear(props.date || date());

		return state;
	}

	onSelect = selected => {
		const { onChange, onChangeView } = this.props;

		this.setState({ date: selected });

		if (typeof onChange === "function") {
			onChange(selected);
		}
		if (typeof onChangeView === "function") {
			onChangeView("month");
		}
	};

	nextMonth() {
		const nextMonth = addMonths(this.state.inViewDate, 1);
		this.setState({ inViewDate: nextMonth });
		this.setState({ year: getYear(nextMonth) });
	}
	prevMonth() {
		const prevMonth = subMonths(this.state.inViewDate, 1);
		this.setState({ inViewDate: prevMonth });
		this.setState({ year: getYear(prevMonth) });
	}

	nextYear() {
		this.setState({ year: this.state.year + 1 });
	}
	prevYear() {
		this.setState({ year: this.state.year - 1 });
	}

	render() {
		const { onRender, view } = this.props;
		const { inViewDate, date, year } = this.state;
		const days = getMonthViewByDay(inViewDate, date);
		const labelSelectedMonth = format(inViewDate, "MMM");
		const labelSelectedYear = year;
		const label = `${labelSelectedMonth} ${labelSelectedYear}`;

		const items = days.map(({ date, type }) => (
			<Day
				date={date}
				type={type}
				onSelect={this.onSelect}
				onRender={onRender}
			/>
		));
		return (
			<div>
				{view.toLowerCase() == "month" ? (
					<div className={$.calendar}>
						<Header
							label={label}
							next={() => this.nextMonth()}
							prev={() => this.prevMonth()}
						/>
						<WeekDays />
						<Grid items={items} />
					</div>
				) : view.toLowerCase() == "year" ? (
					<div className={$.calendar}>
						<Header
							label={labelSelectedYear}
							next={() => this.nextYear()}
							prev={() => this.prevYear()}
						/>
						<div className={$.months}>
							{new Array(12).fill(null).map((index, key) => {
								const selectedDate = new Date(year, key);
								const labelMonth = format(selectedDate, "MMM");
								const selectedDays = getMonthViewByDay(
									selectedDate,
									date
								);
								const currentItems = selectedDays.map(
									({ date, type }) => (
										<Day
											date={date}
											type={type}
											// onSelect={this.onSelect}
											// onRender={onRender}
										/>
									)
								);

								return (
									<div
										className={$.month}
										key={key}
										onClick={() =>
											this.onSelect(selectedDate)
										}
									>
										<Header label={labelMonth} />
										<WeekDays isMultipleView="true" />
										<Grid items={currentItems} />
									</div>
								);
							})}
						</div>
					</div>
				) : null}
			</div>
		);
	}
}
