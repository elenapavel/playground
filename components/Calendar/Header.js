import $ from "./style.css";

export default ({ label, next, prev }) => {
	const prevArrowClasses = `${$.arrow} ion-chevron-left`;
	const nextArrowClasses = `${$.arrow} ion-chevron-right`;

	return (
		<div className={$.header}>
			<div className={prevArrowClasses} onClick={() => prev()} />
			<div className={nextArrowClasses} onClick={() => next()} />
			<div className={$.label}>{label}</div>
		</div>
	);
};
