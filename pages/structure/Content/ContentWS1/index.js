import { STATIC } from "~/playground";
import $ from "./style.css";

const data = {
	previewImage: `${STATIC}/images/planets/Saturn.jpeg`,
	title: "Lorem ipsum",
	headline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla imperdiet ante sed orci efficitur interdum quis eu
					neque.`,
};

export default () => (
	<b className={$.section}>
		<b
			className={$.preview_image}
			style={{ backgroundImage: `url(${data.previewImage})` }}
		/>
		<b className={$.content}>
			<b className={$.title}>{data.title}</b>
			<b className={$.headline}>{data.headline}</b>
		</b>
	</b>
);
