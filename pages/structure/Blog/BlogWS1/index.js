import SectionTitle from "~/components/SectionTitle";
import Article from "./Article";
import items from "./data.js";
import $ from "./style.css";

const components = {
	featured: Article,
	block: Article,
};

export default ({ title }) => (
	<b className={$.section}>
		<SectionTitle title={title || "Section title"} />
		<b className={$.content}>
			{items.map((item, key) => {
				const Component = components[item.type];

				if (item.type == "featured") {
					return (
						<b className={$.featured} key={key}>
							<b className={$.article}>
								<Component {...item} />
							</b>
						</b>
					);
				}

				if (item.type == "block") {
					return (
						<b className={$.block} key={key}>
							<b className={$.article}>
								<Component {...item} isCollapsed />
							</b>
						</b>
					);
				}

				return <b> missing component type {item.type} </b>;
			})}
		</b>
	</b>
);
