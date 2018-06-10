import TeamWS1 from "./TeamWS1";
import TeamWS2 from "./TeamWS2";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<TeamWS1 members={data.members} />
		<TeamWS2 />
	</b>
);
