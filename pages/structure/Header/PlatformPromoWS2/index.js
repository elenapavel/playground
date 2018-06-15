import { STATIC } from "~/playground";
import SectionTitle from "~/components/SectionTitle";
import Register from "~/components/Register";
import Header from "./Header";
import $ from "./style.css";

export default ({ title }) => (
	<b className={$.platform_promo}>
		<Header />
		<b className={$.promo_section}>
			<b className={$.to_left}>
				<b className={$.promo_title}>{title || "Section Title"}</b>
				<b className={$.headline}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla imperdiet ante sed orci efficitur interdum quis eu
					neque.
				</b>
				<i className={$.register_action}>
					<Register />
				</i>
			</b>
			<b className={$.to_right}>
				<b
					className={$.preview}
					style={{
						backgroundImage: `url(${STATIC}/images/planets/Saturn.jpeg)`,
					}}
				/>
			</b>
		</b>
	</b>
);
