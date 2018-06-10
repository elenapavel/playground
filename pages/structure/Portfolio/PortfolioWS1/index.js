import { STATIC } from "~/playground";
import SectionTitle from "~/components/SectionTitle";
import Cards from "./Cards";
import $ from "./style.css";

const cards = [
	{
		image: `${STATIC}/images/planets/Saturn.jpeg`,
		title: "Item one",
		headline: "Lorem ipsum dolor sit amet consectetur",
		link: "/",
	},
	{
		image: `${STATIC}/images/planets/Saturn.jpeg`,
		title: "Item two",
		headline: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor",
		link: "/",
	},
	{
		image: `${STATIC}/images/planets/Saturn.jpeg`,
		title: "Item three",
		headline: "Lorem ipsum dolor sit amet consectetur",
		link: "/",
	},
	{
		image: `${STATIC}/images/planets/Saturn.jpeg`,
		title: "Item four",
		headline:
			"Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur",
		link: "/",
	},
	{
		image: `${STATIC}/images/planets/Saturn.jpeg`,
		title: "Item five",
		headline: "Lorem ipsum dolor sit",
		link: "/",
	},
	{
		image: `${STATIC}/images/planets/Saturn.jpeg`,
		title: "Item six",
		headline: "Lorem ipsum dolor sit amet consectetur",
		link: "/",
	},
];

export default ({ title }) => (
	<b className={$.portfolio}>
		<SectionTitle title={title || "Section Title"} />
		<b className={$.portfolio_cards}>
			<Cards cards={cards} />
		</b>
	</b>
);
