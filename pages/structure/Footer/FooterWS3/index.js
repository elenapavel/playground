import React from "react";
import Link from "next/link";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b className={$.to_left}>
				{data.menu.length ? (
					<b className={$.menu}>
						{data.menu.map((item, key) => (
							<b className={$.item} key={key}>
								<Link href={item.link}>
									<a>{item.name}</a>
								</Link>
							</b>
						))}
					</b>
				) : null}
			</b>
			<b className={$.to_right}>
				<b className={$.get_platform}>
					<Link href={data.getPlatform.link}>
						<a>
							<b className={$.get_platform_text}>
								{data.getPlatform.text}
								<i className={$.platform_preview} />
							</b>
						</a>
					</Link>
				</b>
			</b>
			<b className={$.separator} />
			<b className={$.to_bottom}>
				<b className={$.copyright}>{data.copyright}</b>
			</b>
		</b>
	</b>
);
