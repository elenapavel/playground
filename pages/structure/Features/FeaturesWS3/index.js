import { STATIC } from "~/playground";
import SectionTitle from "~/components/SectionTitle";
import Title from "~/components/Title";
import $ from "./style.css";

const content = [
	{
		icon: "ion-ios-checkmark-outline",
		title: "Feature 1",
		headline:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis.",
	},
	{
		icon: "ion-ios-checkmark-outline",
		title: "Feature two",
		headline:
			"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum.",
	},
	{
		icon: "ion-ios-checkmark-outline",
		title: "Feature 3",
		headline:
			"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. ",
	},
	{
		icon: "ion-ios-checkmark-outline",
		title: "Feature four",
		headline:
			"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies",
	},
	{
		icon: "ion-ios-checkmark-outline",
		title: "Feature 5",
		headline:
			"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu.",
	},
	{
		icon: "ion-ios-checkmark-outline",
		title: "Feature 6",
		headline:
			"Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies",
	},
];

export default ({ title }) => {
	const previewImageSrc = `${STATIC}/images/smartphone.svg`;

	return (
		<b className={$.featured}>
			<SectionTitle title={title || "Section Title"} />
			<b className={$.content}>
				<b className={$.to_left}>
					{content.map((section, key) => {
						const sectionIconClasses = `${$.section_icon} ${
							section.icon
						}`;
						if (key < parseInt(content.length / 2)) {
							return (
								<b className={$.section_to_right} key={key}>
									<b className={sectionIconClasses} />
									<Title title={section.title} />
									<b className={$.section_headline}>
										{section.headline}
									</b>
								</b>
							);
						} else {
							return null;
						}
					})}
				</b>
				<b className={$.to_center}>
					{content.map((section, key) => {
						const sectionIconClasses = `${$.section_icon} ${
							section.icon
						}`;
						if (key >= parseInt(content.length / 2)) {
							return (
								<b className={$.section_to_left} key={key}>
									<b className={sectionIconClasses} />
									<Title title={section.title} />
									<b className={$.section_headline}>
										{section.headline}
									</b>
								</b>
							);
						} else {
							return null;
						}
					})}
				</b>
				<b className={$.to_right}>
					<b
						className={$.content_preview}
						style={{ backgroundImage: `url(${previewImageSrc})` }}
					/>
				</b>
			</b>
		</b>
	);
};
