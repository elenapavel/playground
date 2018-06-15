import ContentWS1 from "./ContentWS1";
import ContentWS2 from "./ContentWS2";
import ContentWS3 from "./ContentWS3";
import $ from "./style.css";

export default () => (
	<b className={$.content}>
		<ContentWS1 />
		<ContentWS2 />
		<ContentWS3 />
	</b>
);
