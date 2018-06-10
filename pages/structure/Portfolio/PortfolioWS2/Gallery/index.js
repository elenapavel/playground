import Link from "next/link";
import Title from "~/components/Title";
import $ from "./style.css";

export default ({ items, shouldFit }) => {
	const fullWidthItemIndex = !shouldFit
		? null
		: items.length % 2 == 0 ? null : items.length - 1;

	return (
		<b className={$.items}>
			{items.map((item, key) => {
				const itemClass = `${
					fullWidthItemIndex == key ? $.item_full_width : $.item
				}`;

				return (
					<b className={itemClass} key={key}>
						<b
							className={$.item_image}
							style={{ backgroundImage: `url(${item.image})` }}
						/>
						<b className={$.item_content}>
							<Link href={item.link}>
								<a>
									<Title title={item.title} />
									<b className={$.item_headline}>
										{item.headline}
									</b>
								</a>
							</Link>
						</b>
					</b>
				);
			})}
		</b>
	);
};
