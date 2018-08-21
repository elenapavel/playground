export function getDegree(value, step) {
	return value * step - 90;
}

export function formatNumber(value) {
	return parseInt(value) < 10 ? `0${value}` : value;
}

export function getAngles() {
	let angles = [];

	for (let angle = 0; angle < 360; angle += 30) {
		angles.push(angle);
	}

	return angles;
}

export function setTextPosition(angle) {
	return {
		x: Math.round(160 * Math.cos(angle * (Math.PI / 180))) + 200,
		y: Math.round(160 * Math.sin(angle * (Math.PI / 180))) + 200,
	};
}

export function setHour(value) {
	return (value + 3) % 12 || 12;
}

export function setMinute(value) {
	return ((value + 3) % 12) * 5;
}
