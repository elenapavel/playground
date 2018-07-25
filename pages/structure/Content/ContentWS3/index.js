import React from "react";
import Register from "./Register";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b
				className={$.preview}
				style={{
					backgroundImage: `url(${data.preview})`,
				}}
			/>
			<b className={$.card}>
				<b className={$.heading}>{data.heading}</b>
				<b className={$.description}>{data.description}</b>
				<i className={$.register_action}>
					<Register />
				</i>
			</b>
		</b>
	</b>
);
