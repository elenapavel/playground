import React from "react";
import PortfolioWS1 from "./PortfolioWS1";
import PortfolioWS2 from "./PortfolioWS2";
import PortfolioWS3 from "./PortfolioWS3";
import $ from "./style.css";

export default () => (
	<b className={$.portfolio}>
		<PortfolioWS1 />
		<PortfolioWS2 />
		<PortfolioWS3 />
	</b>
);
