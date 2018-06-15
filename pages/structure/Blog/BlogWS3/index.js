import Register from "~/components/Register";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b className={$.to_left}>
				<b className={$.tag}>Tag one</b>
				<b className={$.title}>
					Etiam quis consequat quam morbi nunc dolor
				</b>
				<b className={$.headline}>
					Proin congue ligula quis lobortis pulvinar. Nam sodales
					lorem a magna varius malesuada.
				</b>
				<i className={$.action}>
					<Register />
				</i>
			</b>
			<b className={$.to_right}>
				<b className={$.description}>
					Mauris lectus metus, blandit rutrum consectetur pharetra,
					venenatis nec leo. Ut semper volutpat congue. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Integer a
					turpis ante. Ut convallis urna ac arcu ultricies, quis
					euismod lectus egestas. Praesent pellentesque gravida quam,
					vitae egestas felis viverra a. Fusce id lacus imperdiet,
					tincidunt arcu quis, lobortis diam. Sed sed orci ut diam
					viverra molestie vehicula sed purus. Nulla facilisi. Morbi
					tincidunt odio vitae massa pulvinar tincidunt. Pellentesque
					habitant morbi tristique senectus et netus et malesuada
					fames ac turpis egestas.
				</b>
				<b className={$.extra}>
					Etiam quis consequat quam. Morbi nunc dolor, iaculis et
					porta sit amet, finibus at dui.
				</b>
			</b>
		</b>
	</b>
);
