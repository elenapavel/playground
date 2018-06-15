import SectionTitle from "~/components/SectionTitle";
import Card from "./Card";
import sections from "./data";
import $ from "./style.css";

const card = {
	heading: "Why That Digital Photo Print Is Fuzzy",
	excerpt:
		"If your pictures look blotchy and out of focus, you likely need to print them at a smaller size or find a version of the photo at a higher resolution. On a Mac, you can quickly see the pixel dimensions and resolution of an image by selecting its desktop icon and pressing the Command and I keys to open the Info box; Windows users can right-click the icon and look in the Properties box.",
	author: {
		name: "By J. D. Biersdorfer",
	},
	date: "June 12, 2018",
};

export default ({ title }) => (
	<b className={$.section}>
		<SectionTitle title={title || "Technology Tips"} />
		<b className={$.content}>
			<b className={$.to_left}>
				<Card
					heading={card.heading}
					excerpt={card.excerpt}
					subheading={card.author.name}
					tagline={card.date}
				/>
			</b>
			<b className={$.to_right}>
				{sections.map((section, key) => {
					switch (section.type) {
						case "tagline":
							var sectionClass = $.tagline;
							break;
						case "paragraph":
							var sectionClass = $.paragraph;
							break;
						case "heading":
						default:
							var sectionClass = $.heading;
					}
					return (
						<b className={sectionClass} key={key}>
							{section.content}
						</b>
					);
				})}
			</b>
		</b>
	</b>
);
