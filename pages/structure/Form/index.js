import React from "react";
import FormWS1 from "./FormWS1";
import FormWS2 from "./FormWS2";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<FormWS1 />
		<FormWS2 />
	</b>
);
