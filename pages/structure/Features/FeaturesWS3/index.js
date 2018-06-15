import { STATIC } from "~/playground";
import SectionTitle from "~/components/SectionTitle";
import Title from "~/components/Title";
import data from "./data";
import $ from "./style.css";

export default ({ title }) => {
	const previewImageSrc = `${STATIC}/images/smartphone.svg`;

	return (
		<b className={$.featured}>
			<SectionTitle title={title || "Section Title"} />
			<b className={$.content}>
				<b className={$.to_left}>
					{data.map((section, key) => {
						const sectionIconClasses = `${$.section_icon} ${
							section.icon
						}`;
						if (key < parseInt(data.length / 2)) {
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
					{data.map((section, key) => {
						const sectionIconClasses = `${$.section_icon} ${
							section.icon
						}`;
						if (key >= parseInt(data.length / 2)) {
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
