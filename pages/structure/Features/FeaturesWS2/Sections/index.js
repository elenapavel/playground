import Title from "~/components/Title";
import $ from "./style.css";

export default ({ sections }) => (
	<b className={$.sections}>
		{sections != null &&
			sections.length != 0 &&
			sections.map((section, key) => (
				<b
					className={$.section}
					key={key}
					style={{
						order:
							sections.length % 2
								? key < sections.length / 2 - 1
									? key
									: key - sections.length / 2
								: key <= sections.length / 2 - 1
									? key
									: key - sections.length / 2,
						marginTop:
							key == 0 || key == sections.length / 2 ? 0 : null,
					}}
				>
					<Title title={section.title} />
					<b className={$.section_headline}>{section.headline}</b>
				</b>
			))}
	</b>
);
