import React from "react";
import Link from "next/link";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			{data.items.map((item, key) => (
				<b className={$.item} key={key}>
					<b className={$.icon} />
					<b className={$.details}>
						<b className={$.heading}>{item.heading}</b>
						<b className={$.description}>{item.description}</b>
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
