import Title from "~/components/Title";
import $ from "./style.css";

export default ({ title }) => {
	const actionClass = `${$.register_action} ion-android-add`;

	return (
		<b className={$.register}>
			<b className={actionClass} />
			<b className={$.register_title}>
				<Title title={title || "Join the team"} />
			</b>
		</b>
	);
};
