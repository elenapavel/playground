import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b className={$.logo}>
				<Logo image={data.logo} />
			</b>
			<b className={$.copyright}>{data.copyright}</b>
			<b className={$.contact}>
				{data.contact.phone != null ? (
					<i className={$.phone}>
						<Link href={`tel:${data.contact.phone}`}>
							<a>{data.contact.phone}</a>
						</Link>
					</i>
				) : null}
				{data.contact.address != null ? (
					<i className={$.address}>{data.contact.address}</i>
				) : null}
			</b>
			{data.social != null ? (
				<b className={$.social_media}>
					<SocialLinks items={data.social} />
				</b>
			) : null}
		</b>
	</b>
);
