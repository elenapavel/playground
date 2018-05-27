import { Component } from "react";
import format from "date-fns/format";
import getYear from "date-fns/get_year";
import addMonths from "date-fns/add_months";
import subMonths from "date-fns/sub_months";
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
		return state;
	}

	onSelect = selected => {
		const { onChange } = this.props;

		this.setState({ date: selected });

		if (typeof onChange === "function") {
			onChange(selected);
		}
	};

	nextMonth() {
		const nextMonth = addMonths(this.state.inViewDate, 1);
		this.setState({ inViewDate: nextMonth });
	}
	prevMonth() {
		const prevMonth = subMonths(this.state.inViewDate, 1);
		this.setState({ inViewDate: prevMonth });
	}

	render() {
		const { onRender } = this.props;
		const { inViewDate, date } = this.state;
		const days = getMonthViewByDay(inViewDate, date);
		const labelMonth = format(inViewDate, "MMM");
		const labelYear = getYear(inViewDate);
		const label = `${labelMonth} ${labelYear}`;

		const items = days.map(({ date, type }) => (
			<Day
				date={date}
				type={type}
				onSelect={this.onSelect}
				onRender={onRender}
			/>
		));

		return (
			<div className={$.calendar}>
				<Header
					label={label}
					next={() => this.nextMonth()}
					prev={() => this.prevMonth()}
				/>
				<WeekDays />
				<Grid items={items} />
			</div>
		);
	}
}
