import PortfolioWS1 from "./PortfolioWS1";
import PortfolioWS2 from "./PortfolioWS2";
import $ from "./style.css";

export default () => (
	<b className={$.portfolio}>
		<PortfolioWS1 />
		<PortfolioWS2 />
	</b>
);
