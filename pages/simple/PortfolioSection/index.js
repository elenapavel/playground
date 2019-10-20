import { BASE, STATIC } from "~/playground";
import $ from "./style.css";

export default ({ heading, items }) => (
	<b className={$.container}>
		<i className={$.heading}>{heading}</i>
		<b className={$.items}>
			{items.map((item, key) => (
				<b className={$.item} key={key}>
					<b
						className={$.preview}
						style={{
							backgroundImage: `url(${STATIC + item.image})`,
						}}
					/>
					<b className={$.gradient} />
					<b className={$.content}>
						<a href={`${BASE + item.link}`}>
							<b className={$.item_heading}>{item.heading}</b>
						</a>
					</b>
				</b>
			))}
		</b>
	</b>
);
