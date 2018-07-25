import Link from "next/link";
import $ from "./style.css";

export default ({ heading, description, image, link, date, isCollapsed }) => (
	<b className={isCollapsed ? $.article : $.article_featured}>
		<Link href={link}>
			<a>
				<b
					className={$.image}
					style={{ backgroundImage: `url(${image})` }}
				/>
			</a>
		</Link>
		<b className={$.content}>
			{isCollapsed ? <b className={$.date}>{date}</b> : null}
			<Link href={link}>
				<a>
					<b className={$.heading}>{heading}</b>
				</a>
			</Link>
			<b className={$.description}>{description}</b>
			{isCollapsed ? null : (
				<b className={$.read_more_action}>
					<Link href={link}>
						<a>
							Read article
							<i className={$.read_more_icon} />
						</a>
					</Link>
				</b>
			)}
		</b>
	</b>
);
