import Link from "next/link";
import $ from "./style.css";

export default ({ items }) => (
	<b className={$.items}>
		{items.map((item, key) => (
			<b className={$.item} key={key}>
				<Link href={item.link}>
					<a>
						<b
							className={$.image}
							style={{ backgroundImage: `url(${item.image})` }}
						/>
						<b className={$.content}>
							<b className={$.heading}>{item.heading}</b>
							<b className={$.description}>{item.description}</b>
						</b>
					</a>
				</Link>
			</b>
		))}
	</b>
);
