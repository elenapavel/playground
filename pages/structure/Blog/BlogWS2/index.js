import SectionTitle from "~/components/SectionTitle";
import Article from "./Article";
import items from "./data.js";
import $ from "./style.css";

const components = {
	featured: Article,
	block: Article,
};

export default ({ title }) => {
	let i = 0;

	return (
		<b className={$.section}>
			<SectionTitle title={title || "Section title"} />
			<b className={$.content}>
				<b className={$.to_left}>
					{items.map((item, key) => {
						const Component = components[item.type];

						if (item.type == "featured") {
							return (
								<b className={$.featured} key={key}>
									<Component {...item} />
								</b>
							);
						}
					})}
				</b>
				<b className={$.to_right}>
					{items.map((item, key) => {
						const Component = components[item.type];
						const hasMoreThanFourElements = i >= 4;

						if (!hasMoreThanFourElements)
							if (item.type == "block") {
								i++;
								return (
									<b className={$.block} key={key}>
										<Component {...item} isCollapsed />
									</b>
								);
							} else return null;
					})}
				</b>

				<b className={$.to_bottom}>
					{items.slice(5).map((item, key) => {
						const Component = components[item.type];

						if (item.type == "block") {
							i++;
							return (
								<b className={$.block} key={key}>
									<Component {...item} isCollapsed />
								</b>
							);
						}
					})}
				</b>
			</b>
		</b>
	);
};
