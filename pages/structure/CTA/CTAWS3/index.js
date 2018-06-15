import Link from "next/link";
import $ from "./style.css";

const items = [
	{
		heading: "Basic plan",
		subheading:
			"Buying this plan can help you improve your company with some features we provide",
		tagline: "Take a tour",
		link: "#",
	},
	{
		heading: "Professional plan",
		subheading:
			"Buying this plan can help you improve your company with multiple features we provide",
		tagline: "View full project",
		link: "#",
	},
	{
		heading: "Corporate plan",
		subheading:
			"Buying this plan can help you improve your company with all the features we provide",
		tagline: "View full project",
		link: "#",
	},
];

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			{items.map((item, key) => (
				<b className={$.item} key={key}>
					<b className={$.icon} />
					<b className={$.details}>
						<b className={$.heading}>{item.heading}</b>
						<b className={$.subheading}>{item.subheading}</b>
						<b className={$.action}>
							<Link href={item.link}>
								<a>
									<b className={$.tagline}>
										{item.tagline}
										<i className={$.action_icon} />
									</b>
								</a>
							</Link>
						</b>
					</b>
				</b>
			))}
		</b>
	</b>
);
