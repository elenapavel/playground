import { STATIC } from "~/playground";
import Register from "~/components/Register";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b
				className={$.preview}
				style={{
					backgroundImage: `url(${STATIC}/images/planets/Saturn.jpeg)`,
				}}
			/>
			<b className={$.card}>
				<b className={$.title}>Section title</b>
				<b className={$.headline}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla imperdiet ante sed orci efficitur interdum quis eu
					neque.
				</b>
				<i className={$.register_action}>
					<Register />
				</i>
			</b>
		</b>
	</b>
);
