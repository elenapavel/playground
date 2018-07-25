import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b
			className={$.preview_image}
			style={{ backgroundImage: `url(${data.previewImage})` }}
		/>
		<b className={$.content}>
			<b className={$.heading}>{data.heading}</b>
			<b className={$.description}>{data.description}</b>
		</b>
	</b>
);
