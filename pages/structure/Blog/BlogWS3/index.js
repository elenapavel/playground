import React from "react";
import Register from "./Register";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b className={$.to_left}>
				<b className={$.tagline}>{data.tagline}</b>
				<b className={$.heading}>{data.heading}</b>
				<b className={$.description}>{data.description}</b>
				<i className={$.action}>
					<Register />
				</i>
			</b>
			<b className={$.to_right}>
				<b className={$.content}>{data.content}</b>
				<b className={$.extra}>{data.extra}</b>
			</b>
		</b>
	</b>
);
