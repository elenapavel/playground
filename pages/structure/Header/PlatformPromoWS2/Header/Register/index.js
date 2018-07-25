import $ from "./style.css";

export default ({ text, onSelect }) => (
	<b className={$.register} onClick={() => onSelect()}>
		{text || "Register"}
	</b>
);
