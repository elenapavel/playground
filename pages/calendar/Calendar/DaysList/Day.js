import { cloneElement } from "react";

import $ from "./style.css";

const Day = props => {
	const {
		isDisabled,
		isCurrent,
		isSelected,
		dayNumber,
		date,
		setDay,
		onRender,
		onSelect,
	} = props;

	const dayClasses = `${$.day} ${isDisabled ? $.day_disabled : ""} ${
		isCurrent ? $.day_current : ""
	} ${isSelected ? $.day_selected : ""}`;

	let content = null;

	if (typeof onRender === "function") {
		content = onRender(
			props,
			<div className={dayClasses}>{dayNumber}</div>
		);
	}

	if (typeof onSelect === "function" && isSelected) {
		content = onSelect(
			props,
			<div className={dayClasses}>{dayNumber}</div>
		);
	}
	if (content == null) {
		content = <div className={dayClasses}>{dayNumber}</div>;
	}

	return (
		<div
			className={$.day_container}
			onClick={() => {
				setDay(date);
			}}
		>
			{content}
		</div>
	);
};

export default Day;
