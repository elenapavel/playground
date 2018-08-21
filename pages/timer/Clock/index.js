import React, { Component } from "react";
import { getAngles, setTextPosition, setHour, setMinute } from "../methods.js";
import $ from "./style.css";

class Clock extends Component {
	render() {
		const {
			armPosition,
			areMinutesVisible,
			onTouchMove,
			onTouchEnd,
			onMouseDown,
			onMouseMove,
			onMouseUp,
		} = this.props;

		return (
			<svg
				className={$.clock}
				width="400"
				height="400"
				viewBox="0 0 400 400"
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
				onMouseDown={onMouseDown}
				onMouseMove={onMouseMove}
				onMouseUp={onMouseUp}
			>
				<circle cx="200" cy="200" r="190" strokeWidth="4" />
				<g>
					<g
						className={$.arm}
						style={{
							transform: `rotate(${armPosition}deg)`,
						}}
					>
						<rect
							width="145"
							height="2"
							x="199"
							y="199"
							strokeWidth="0"
						/>
						<circle cx="200" cy="200" r="5" strokeWidth="0" />
						<circle cx="360" cy="200" r="20" strokeWidth="0" />
					</g>
					<g
						className={$.hours}
						style={{
							opacity: areMinutesVisible ? 0 : 1,
							transform: `scale(${
								areMinutesVisible ? "0.7" : "1"
							})`,
						}}
					>
						{getAngles().map((angle, index) => {
							return (
								<text
									key={index}
									index={setHour(index)}
									x={setTextPosition(angle).x}
									y={setTextPosition(angle).y}
								>
									{setHour(index)}
								</text>
							);
						})}
					</g>
					<g
						className={$.minutes}
						style={{
							opacity: areMinutesVisible ? 1 : 0,
							transform: `scale(${
								areMinutesVisible ? "1" : "0.7"
							})`,
						}}
					>
						{getAngles().map((angle, index) => {
							return (
								<text
									key={index}
									index={setMinute(index)}
									x={setTextPosition(angle).x}
									y={setTextPosition(angle).y}
								>
									{setMinute(index)}
								</text>
							);
						})}
					</g>
				</g>
			</svg>
		);
	}
}

export default Clock;
