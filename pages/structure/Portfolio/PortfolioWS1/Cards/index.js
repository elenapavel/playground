import Link from "next/link";
import Title from "~/components/Title";
import $ from "./style.css";

export default ({ cards }) => (
	<b className={$.cards}>
		{cards.map((card, key) => (
			<b className={$.card} key={key}>
				<Link href={card.link}>
					<a>
						<b
							className={$.card_image}
							style={{ backgroundImage: `url(${card.image})` }}
						/>
						<b className={$.card_content}>
							<Title title={card.title} />
							<b className={$.card_headline}>{card.headline}</b>
						</b>
					</a>
				</Link>
			</b>
		))}
	</b>
);
