import Link from "next/link";
import Title from "~/components/Title";
import $ from "./style.css";

export default ({ title, headline, image, link, date, isCollapsed }) => {
	const readMoreIconClasses = `${$.read_more_icon} ion-ios-arrow-right`;

	return (
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
						<b className={$.title}>
							<Title title={title} />
						</b>
					</a>
				</Link>
				<b className={$.headline}>{headline}</b>
				{isCollapsed ? null : (
					<b className={$.read_more_action}>
						<Link href={link}>
							<a>
								Read article
								<i className={readMoreIconClasses} />
							</a>
						</Link>
					</b>
				)}
			</b>
		</b>
	);
};
