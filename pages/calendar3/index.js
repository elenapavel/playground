import { Component, cloneElement } from "react";

import isSameDay from "date-fns/is_same_day";
import isWeekend from "date-fns/is_weekend";

import Head from "./Head";
import Tabs from "./Tabs";
import Calendar from "./Calendar";
import $ from "./style.css";

const specialDates = [
	{
		type: "holiday",
		date: "2018-05-21",
		name: "elena",
	},
	{
		type: "holiday",
		date: "2018-06-21",
		name: "test",
	},
	{
		type: "event",
		date: "2018-05-29",
		name: "event",
	},
	{
		type: "event",
		date: "2018-05-21",
		name: "event",
	},
	{
		type: "reminder",
		date: "2018-05-21",
		name: "next",
	},
];

const viewTabs = ["year", "month", "week"];

const SpecialDay = ({ date }) => (
	<div>
		{specialDates.map((specialDate, key) => {
			if (isSameDay(date, new Date(specialDate.date))) {
				return (
					<div
						key={key}
						style={{
							width: "100%",
							marginTop: "0.25rem",
							border: `2px solid ${
								specialDate.type == "holiday"
									? "red"
									: specialDate.type == "event"
										? "green"
										: specialDate.type == "reminder"
											? "orange"
											: "transparent"
							}`,
						}}
					/>
				);
			}
		})}
	</div>
);

const DisplaySpecialDay = ({ date }) => (
	<div>
		{specialDates.map((specialDate, key) => {
			if (isSameDay(date, new Date(specialDate.date))) {
				return (
					<div
						key={key}
						style={{
							color: `${
								specialDate.type == "holiday"
									? "red"
									: specialDate.type == "event"
										? "green"
										: specialDate.type == "reminder"
											? "orange"
											: "transparent"
							}`,
						}}
					>
						{specialDate.name}
					</div>
				);
			}
		})}
	</div>
);

class Application extends Component {
	constructor(props) {
		super();
		this.state = {
			date: "2018-05-21",
			view: "month",
		};
	}

	onRender({ dayNumber, date }, cell) {
		const content =
			dayNumber === 12 ? (
				<div>dev</div>
			) : (
				<div>
					{dayNumber}
					<SpecialDay date={date} />
				</div>
			);

		const isWeekendDay = isWeekend(date);

		const styles = {
			backgroundColor: isWeekendDay ? "rgba(0,0,0,0.1)" : "",
			padding: "0.75rem 0",
		};

		if (cell != null)
			return cloneElement(
				cell,
				{
					style: styles,
				},
				content
			);
		return content;
	}

	onSelect({ date, dayNumber }, cell) {
		const styles = {
			borderColor: "yellow",
			padding: "0.75rem 0",
		};
		if (cell != null)
			return cloneElement(
				cell,
				{
					style: styles,
				},
				<div>
					{dayNumber}
					<SpecialDay date={date} />
				</div>
			);
		return content;
	}

	onChangeDate(date) {
		this.setState({ date: date });
	}

	onChangeViewByIndex(viewIndex) {
		this.setState({ view: viewTabs[viewIndex] });
	}

	render() {
		const { date, view } = this.state;
		return (
			<div>
				<Head />
				<Tabs
					items={viewTabs}
					active="1"
					onChangeViewByIndex={view => this.onChangeViewByIndex(view)}
				/>
				<Calendar
					date={date}
					onChangeDate={date => this.onChangeDate(date)}
					onRender={this.onRender}
					selected={this.onSelect}
					view={view}
				/>
				<DisplaySpecialDay date={date} />
			</div>
		);
	}
}

export default () => <Application />;
