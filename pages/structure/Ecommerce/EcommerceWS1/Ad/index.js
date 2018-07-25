import React from "react";
import Link from "next/link";
import Register from "./Register";
import $ from "./style.css";

export default ({ heading, subheading, link }) => (
	<b className={$.section}>
		<b className={$.heading}>{heading}</b>
		<b className={$.subheading}>{subheading}</b>
		<i className={$.action}>
			<Link href={link}>
				<a>
					<Register text="Read more" />
				</a>
			</Link>
		</i>
	</b>
);
