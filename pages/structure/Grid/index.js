import React from "react";
import Gallery from "./Gallery";
import data from "./data";
import $ from "./style.css";

export default ({ title }) => (
	<b className={$.section}>
		<b className={$.heading}>{title || data.heading}</b>
		<Gallery items={data.items} />
	</b>
);
