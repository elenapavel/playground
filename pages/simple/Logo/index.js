import $ from "./style.css";

export default ({ image, link }) => (
	<i className={$.container}>
		<a href={link}>
			<img src={image} />
		</a>
	</i>
);
