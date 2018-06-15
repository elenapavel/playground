import Register from "~/components/Register";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b className={$.heading}>Get your plan today</b>
			<b className={$.subheading}>
				Try out our newest business features and learn how to manage
				your company with our help.
			</b>
			<i className={$.action}>
				<Register text="Get plan" />
			</i>
			<b className={$.tagline}>We can help you.</b>
		</b>
	</b>
);
