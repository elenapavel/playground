import React from "react";
import Link from "next/link";
import Button from "./Button";
import $ from "./style.css";

export default ({ heading, subheading, link }) => (
	<b className={$.section}>
		<b className={$.heading}>{heading}</b>
		<b className={$.subheading}>{subheading}</b>
		<i className={$.action}>
			<Link href={link}>
				<a>
					<Button label="Read more" />
				</a>
			</Link>
		</i>
	</b>
);
