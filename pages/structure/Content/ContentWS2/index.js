import Link from "next/link";
import { STATIC } from "~/playground";
import $ from "./style.css";

const data = {
	previewImage: `${STATIC}/images/planets/Saturn.jpeg`,
	title: "Lorem ipsum",
	headline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla imperdiet ante sed orci efficitur interdum quis eu
					neque.`,
	readMoreText: "Learn More",
	readMoreLink: "/",
};

export default () => {
	const readMoreIconClasses = `${$.read_more_icon} ion-ios-arrow-right`;

	return (
		<b className={$.section}>
			<b className={$.content}>
				<b className={$.title}>{data.title}</b>
				<b className={$.headline}>{data.headline}</b>
				<b className={$.read_more_action}>
					<Link href={data.readMoreLink}>
						<a>
							{data.readMoreText}
							<i className={readMoreIconClasses} />
						</a>
					</Link>
				</b>
			</b>
			<b
				className={$.preview_image}
				style={{ backgroundImage: `url(${data.previewImage})` }}
			/>
		</b>
	);
};
