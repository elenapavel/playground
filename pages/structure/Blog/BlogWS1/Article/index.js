import Link from "next/link";
import $ from "./style.css";

export default ({ heading, description, image, link, date, isCollapsed }) => (
	<b className={isCollapsed ? $.article : $.article_featured}>
		{isCollapsed ? (
			<b className={$.date}>{date}</b>
		) : (
			<b
				className={$.image}
				style={{ backgroundImage: `url(${image})` }}
			/>
		)}
		<Link href={link}>
			<a>
				<b className={$.heading}>{heading}</b>
			</a>
		</Link>
		<b className={$.description}>{description}</b>
		<b className={$.read_more_action}>
			<Link href={link}>
				<a>
					Read article
					<i className={$.read_more_icon} />
				</a>
			</Link>
		</b>
	</b>
);
