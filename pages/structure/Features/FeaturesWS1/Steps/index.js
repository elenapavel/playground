import Title from "~/components/Title";
import $ from "./style.css";

export default ({ steps }) => (
	<b className={$.steps}>
		{steps.map((step, key) => (
			<b className={$.step} key={key}>
				<b className={$.step_index}>{key + 1}</b>
				<Title title={step.title} />
				<b className={$.step_headline}>{step.headline}</b>
			</b>
		))}
		<b className={$.separator} />
	</b>
);
