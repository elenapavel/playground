import React from "react";
import FooterWS1 from "./FooterWS1";
import FooterWS2 from "./FooterWS2";
import FooterWS3 from "./FooterWS3";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<FooterWS1 />
		<FooterWS2 />
		<FooterWS3 />
	</b>
);
