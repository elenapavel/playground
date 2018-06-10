import HeaderWS1 from "./HeaderWS1";
import PlatformPromoWS1 from "./PlatformPromoWS1";
import Search from "~/components/Search";
import $ from "./style.css";

export default () => (
	<b className={$.header_container}>
		<HeaderWS1 />
		<PlatformPromoWS1 />
		{/*<Search />*/}
	</b>
);
