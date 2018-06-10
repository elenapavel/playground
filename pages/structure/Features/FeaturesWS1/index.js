import SectionTitle from "~/components/SectionTitle";
import { STATIC } from "~/playground";
import Steps from "./Steps";
import $ from "./style.css";

const data = {
	title: "Features",
	previewImage: `${STATIC}/images/planets/Saturn.jpeg`,
	features: [
		{
			title: "Feature 1",
			headline: "Lorem ipsum dolor sit amet consectetur est",
		},
		{
			title: "Feature 2",
			headline:
				"Lorem ipsum dolor sit amet consectetur est. Lorem ipsum dolor sit amet consectetur est. Lorem ipsum dolor sit amet consectetur est. Lorem ipsum dolor sit amet consectetur est",
		},
		{
			title: "Feature 3",
			headline:
				"Lorem ipsum dolor sit amet consectetur est. Lorem ipsum dolor sit amet consectetur est",
		},
	],
};

export default () => (
	<b className={$.featured}>
		<SectionTitle title={data.title || "SectionTitle"} />
		<b className={$.featured_section}>
			<b className={$.featured_list}>
				<Steps steps={data.features} />
			</b>
			<b
				className={$.featured_preview}
				style={{ backgroundImage: `url(${data.previewImage})` }}
			/>
		</b>
	</b>
);
