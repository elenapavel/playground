import { STATIC } from "~/playground";
import SectionTitle from "~/components/SectionTitle";
import $ from "./style.css";

const items = [
	{
		title: "Item one",
		headline:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",
	},
	{
		title: "Item two",
		headline:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",
	},
];

export default ({ title }) => (
	<b className={$.portfolio}>
		<b className={$.content}>
			<b className={$.to_left}>
				<b className={$.content_title}>{title || "Section title"}</b>
				<b className={$.content_headline}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla imperdiet ante sed orci efficitur interdum quis eu
					neque.
				</b>
			</b>
			<b className={$.to_right}>
				<b className={$.items}>
					{items.map((item, key) => (
						<b className={$.item} key={key}>
							<b className={$.item_title}>{item.title}</b>
							<b className={$.item_headline}>{item.headline}</b>
						</b>
					))}
				</b>
			</b>
		</b>
		<b className={$.slider}>
			<b
				className={$.preview}
				style={{
					backgroundImage: `url(${STATIC}/images/planets/Saturn.jpeg)`,
				}}
			/>
			<b className={$.actions}>
				<b className={$.action_previous} />
				<b className={$.action_next} />
			</b>
		</b>
	</b>
);
