import SectionTitle from "~/components/SectionTitle";
import Gallery from "./Gallery";
import data from "./data";
import $ from "./style.css";

export default ({ title }) => (
	<b className={$.section}>
		<SectionTitle title={title || "Gallery"} />
		<Gallery items={data.items} />
	</b>
);
