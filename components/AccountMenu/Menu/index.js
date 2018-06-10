import Link from "next/link";
import $ from "./style.css";

export default ({ items }) => (
	<b className={$.menu}>
		{items.map((item, key) => (
			<b className={$.item} key={key}>
				<Link href={item.link}>
					<a>{item.name}</a>
				</Link>
			</b>
		))}
	</b>
);
