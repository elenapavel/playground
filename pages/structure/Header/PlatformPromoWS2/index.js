import React from "react";
import Button from "./Button";
import Header from "./Header";
import data from "./data";
import $ from "./style.css";

export default ({ heading }) => (
	<b className={$.platform_promo}>
		<Header />
		<b className={$.promo_section}>
			<b className={$.to_left}>
				<b className={$.heading}>{heading || data.heading}</b>
				<b className={$.description}>{data.description}</b>
				<i className={$.register_action}>
					<Button />
				</i>
			</b>
			<b className={$.to_right}>
				<b
					className={$.preview}
					style={{
						backgroundImage: `url(${data.preview})`,
					}}
				/>
			</b>
		</b>
	</b>
);
