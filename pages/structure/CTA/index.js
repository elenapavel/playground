import CTAWS1 from "./CTAWS1";
import CTAWS2 from "./CTAWS2";
import CTAWS3 from "./CTAWS3";
import $ from "./style.css";

export default () => (
	<b className={$.sections}>
		<CTAWS1 />
		<CTAWS2 />
		<CTAWS3 />
	</b>
);
