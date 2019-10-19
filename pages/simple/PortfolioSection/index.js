import $ from "./style.css";

export default ({ heading, items }) => (
	<b className={$.container}>
		<i className={$.heading}>{heading}</i>
		<b className={$.items}>
			{items.map((item, key) => (
				<b className={$.item} key={key}>
					<b
						className={$.preview}
						style={{ backgroundImage: `url(${item.image.simple})` }}
					/>
					<b className={$.gradient} />
					<b className={$.content}>
						<b className={$.item_heading}>{item.heading}</b>
					</b>
				</b>
			))}
		</b>
	</b>
);
