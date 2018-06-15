import BlogWS1 from "./BlogWS1";
import BlogWS2 from "./BlogWS2";
import BlogWS3 from "./BlogWS3";
import BlogWS4 from "./BlogWS4";
import $ from "./style.css";

export default () => (
	<b className={$.blog}>
		<BlogWS1 />
		<BlogWS2 />
		<BlogWS3 />
		<BlogWS4 />
	</b>
);
