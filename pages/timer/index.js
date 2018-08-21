import React, { Component } from "react";
import { getDegree, formatNumber } from "./methods.js";
import Clock from "./Clock";
import $ from "./style.css";

let defaults = {};

class Timer extends Component {
	state = {
		armPosition: -90,
		areMinutesVisible: false,
		dayTime: "am",
		clockPosition: {
			x: 0,
			y: 0,
		},
		clockCenterPosition: {
			x: 0,
			y: 0,
		},
		mouseDown: false,
		selectedHour: "6",
		selectedMinute: "0",
		isResetFocused: false,
		isConfirmFocused: false,
		message: null,
	};

	componentDidMount() {
		const { clockPosition, clockCenterPosition } = this.state;

		const { x, y } = this.refs.svg.getBoundingClientRect();
		const clockDiameter = this.refs.svg.clientHeight;

		this.setState({
			clockPosition: { x, y },
			clockCenterPosition: {
				x: clockDiameter / 2,
				y: clockDiameter / 2,
			},
			armPosition: getDegree(parseInt(this.state.selectedHour), 30),
			selectedHour: formatNumber(this.state.selectedHour),
			selectedMinute: formatNumber(this.state.selectedMinute),
		});
	}

	componentDidUpdate() {
		if (Object.keys(defaults).length == 0)
			defaults = Object.assign({}, this.state);
	}

	mouseDown = () => {
		this.setState({ mouseDown: true });
	};

	mouseMove = e => {
		if (this.state.mouseDown) {
			this.handleDrag(e);
		}
	};

	mouseUp = e => {
		this.setState({ mouseDown: false });

		this.handleEnd(e);
	};

	handleDrag = e => {
		const {
			clockPosition,
			clockCenterPosition,
			areMinutesVisible,
		} = this.state;

		const x2 = (e.clientX || e.touches[0].clientX) - clockPosition.x;
		const y2 = (e.clientY || e.touches[0].clientY) - clockPosition.y;

		const dx = clockCenterPosition.x - x2;
		const dy = clockCenterPosition.y - y2;

		let deg = Math.atan2(dy, dx) * 180 / Math.PI + 180;

		// console.log(deg, e.clientY, e.touches && e.touches[0].screenY);

		if (!areMinutesVisible) {
			deg = Math.round(deg / 30) * 30;
			if (deg % 30 === 0) {
				this.setState({
					armPosition: deg,
				});
			}
		} else {
			deg = Math.round(deg / 6) * 6;
			if (deg % 6 === 0) {
				this.setState({
					armPosition: deg,
				});
			}
		}
	};

	handleEnd = e => {
		const { areMinutesVisible } = this.state;

		if (!areMinutesVisible) {
			const hours =
				(Math.round(this.state.armPosition) / 30 + 3) % 12 || 12;
			this.setState({ selectedHour: formatNumber(hours) });
		} else {
			const minutes = (Math.round(this.state.armPosition) / 6 + 15) % 60;
			this.setState({ selectedMinute: formatNumber(minutes) });
		}

		this.showMinutes;
	};

	toggleDayTime = () => {
		this.setState({ dayTime: this.state.dayTime == "am" ? "pm" : "am" });
	};

	showHours = () => {
		const { selectedHour } = this.state;

		this.setState({
			areMinutesVisible: false,
			armPosition: getDegree(parseInt(selectedHour), 30),
		});
	};

	showMinutes = () => {
		const { selectedMinute } = this.state;

		this.setState({
			areMinutesVisible: true,
			armPosition: getDegree(parseInt(selectedMinute), 6),
		});
	};

	handleResetFocus = () => {
		this.setState({
			isResetFocused: !this.state.isResetFocused,
			isConfirmFocused: false,
		});
	};

	selectHour = e => {
		const hour = e.target.getAttribute("index");

		this.setState({
			selectedHour: formatNumber(hour),
			areMinutesVisible: true,
			armPosition: getDegree(parseInt(this.state.selectedMinute), 6),
		});
	};

	selectMinute = e => {
		const minute = e.target.getAttribute("index");

		this.setState({
			selectedMinute: formatNumber(minute),
			armPosition: getDegree(parseInt(minute), 6),
		});
	};

	handleConfirmFocus = () => {
		this.setState({
			isConfirmFocused: !this.state.isConfirmFocused,
			isResetFocused: false,
		});
	};

	resetTimer = () => {
		this.setState({
			...defaults,
		});
	};

	nextStep = () => {
		this.setState({
			areMinutesVisible: true,
			armPosition: getDegree(parseInt(this.state.selectedMinute), 6),
		});
	};

	alarmSet = () => {
		this.setState({ message: "Alarm set" });
	};

	render() {
		const {
			selectedHour,
			selectedMinute,
			dayTime,
			areMinutesVisible,
			isResetFocused,
			isConfirmFocused,
			armPosition,
			message,
		} = this.state;

		return (
			<b className={$.application}>
				{message ? (
					<b className={$.timer}>
						<b className={$.alarm_set}>{message}</b>
					</b>
				) : (
					<b className={$.timer}>
						<b className={$.heading}>Choose alarm time</b>
						<b className={$.selected_time}>
							<i onClick={this.showHours}>{selectedHour}</i>:
							<i onClick={this.showMinutes}>
								{selectedMinute}
							</i>{" "}
							<i
								className={$.day_time}
								onClick={this.toggleDayTime}
							>
								{dayTime}
							</i>
						</b>

						<b className={$.clock} ref="svg">
							<Clock
								armPosition={armPosition}
								areMinutesVisible={areMinutesVisible}
								onTouchMove={this.handleDrag}
								onTouchEnd={this.handleEnd}
								onMouseDown={this.mouseDown}
								onMouseMove={this.mouseMove}
								onMouseUp={this.mouseUp}
							/>
						</b>

						<b className={$.actions}>
							<b
								className={`${$.action_reset} ${
									isResetFocused ? $.is_focused : ""
								}`}
								onMouseEnter={this.handleResetFocus}
								onMouseLeave={this.handleResetFocus}
								onTouchStart={this.handleResetFocus}
								onTouchEnd={this.handleResetFocus}
								onClick={this.resetTimer}
							>
								Reset
							</b>
							<b
								className={`${$.action_confirm} ${
									isConfirmFocused ? $.is_focused : ""
								}`}
								onMouseEnter={this.handleConfirmFocus}
								onMouseLeave={this.handleConfirmFocus}
								onTouchStart={this.handleConfirmFocus}
								onTouchEnd={this.handleConfirmFocus}
								onClick={
									areMinutesVisible
										? this.alarmSet
										: this.nextStep
								}
							>
								{areMinutesVisible ? "Confirm" : "Next"}
							</b>
						</b>
					</b>
				)}
			</b>
		);
	}
}

export default Timer;
