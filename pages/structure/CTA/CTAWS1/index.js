import React from "react";
import Register from "./Register";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b className={$.heading}>{data.heading}</b>
			<b className={$.description}>{data.description}</b>
			<i className={$.action}>
				<Register text={data.actionText} />
			</i>
			<b className={$.tagline}>{data.tagline}</b>
		</b>
	</b>
);
