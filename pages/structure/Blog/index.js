import BlogWS1 from "./BlogWS1";
import BlogWS2 from "./BlogWS2";
import $ from "./style.css";

export default () => (
	<b className={$.blog}>
		<BlogWS1 />
		<BlogWS2 />
	</b>
);
