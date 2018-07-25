import React from "react";
import FeaturesWS1 from "./FeaturesWS1";
import FeaturesWS2 from "./FeaturesWS2";
import FeaturesWS3 from "./FeaturesWS3";
import $ from "./style.css";

export default () => (
	<b className={$.featured_sections}>
		<FeaturesWS1 />
		<FeaturesWS2 />
		<FeaturesWS3 />
	</b>
);
