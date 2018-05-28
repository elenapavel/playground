import { Component, cloneElement } from "react";

import isSameDay from "date-fns/is_same_day";
import isWeekend from "date-fns/is_weekend";

import Head from "next/head";
import Tabs from "./Tabs";
import Calendar from "~/components/Calendar";

import $ from "./style.css";

const specialDates = [
	{
		type: "holiday",
		date: "2018-05-21",
		name: "holiday 1",
	},
	{
		type: "holiday",
		date: "2018-06-21",
		name: "holiday 2",
	},
	{
		type: "event",
		date: "2018-05-29",
		name: "event 1",
	},
	{
		type: "event",
		date: "2018-05-21",
		name: "event 2",
	},
	{
		type: "reminder",
		date: "2018-05-21",
		name: "reminder 1",
	},
];

const viewTabs = ["year", "month"];

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

const DisplaySpecialDay = ({ date, title }) => {
	let hasEvents = false;
	specialDates.map((specialDate, key) => {
		if (isSameDay(date, new Date(specialDate.date))) {
			hasEvents = true;
		}
	});
	return (
		<div>
			{hasEvents ? <div className={$.title}>{title}</div> : null}
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
								fontWeight: "bold",
							}}
						>
							{specialDate.name}
						</div>
					);
				}
			})}
		</div>
	);
};

class Application extends Component {
	constructor(props) {
		super();
		this.state = {
			date: "2018-05",
			view: "month",
		};

		// setInterval(() => {
		// 	this.setState({ date: new Date() });
		// }, 1000);
	}

	onRender({ dayOfMonth, date }, cell) {
		const content =
			dayOfMonth === 12 ? (
				<div>dev</div>
			) : (
				<div>
					{dayOfMonth}
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

	onSelect = (date, dayOfMonth, type, cell) => {
		const styles = {
			borderColor: "yellow",
			padding: "0.75rem 0",
		};

		if (cell != null) {
			return cloneElement(
				cell,
				{
					style: styles,
				},
				<div>
					{dayOfMonth}
					<SpecialDay date={date} />
				</div>
			);
		}

		this.setState({ date: date });
	};

	onChangeViewByIndex(viewIndex) {
		this.setState({ view: viewTabs[viewIndex] });
	}

	render() {
		const { date, view } = this.state;

		return (
			<div>
				{/*<Tabs
					items={viewTabs}
					active="1"
					onChangeViewByIndex={view => this.onChangeViewByIndex(view)}
				/>*/}
				<Calendar
					date={date}
					view={view}
					onChange={this.onSelect}
					onRender={this.onRender}
				/>
				<div className={$.events_list}>
					<DisplaySpecialDay date={date} title="Events" />
				</div>
			</div>
		);
	}
}

export default () => (
	<div className={$.application}>
		<Head>
			<link
				rel="stylesheet"
				href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
				rel="stylesheet"
			/>
		</Head>
		<Application />
	</div>
);
