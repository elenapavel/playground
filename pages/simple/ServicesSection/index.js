import { STATIC } from "~/playground";
import $ from "./style.css";

export default ({ heading, items }) => (
	<b className={$.container}>
		<b className={$.items}>
			{items.map((item, key) => (
				<b className={$.item} key={key}>
					<b
						className={$.blur}
						style={{
							backgroundImage: `url(${STATIC + item.icon})`,
						}}
					/>
					<b className={$.content}>
						<b className={$.item_heading}>{item.heading}</b>
						<b className={$.item_subheading}>{item.subheading}</b>
					</b>
				</b>
			))}
		</b>
	</b>
);
