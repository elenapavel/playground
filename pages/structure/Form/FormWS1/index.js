import React from "react";
import Link from "next/link";
import Form from "./Form";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.heading}>{data.heading}</b>
		<b className={$.content}>
			<Form
				fields={data.fields}
				submitActionText={data.submitAction.text}
				submitActionBackground={data.submitAction.background}
			/>
			<b className={$.tagline}>{data.tagline}</b>
			<b className={$.email_action}>
				<Link href={`mailto:${data.emailReceiver}`}>
					<a>
						<i className={$.email}>
							{data.emailReceiver}
							<b className={$.email_line} />
						</i>
					</a>
				</Link>
			</b>
		</b>
	</b>
);
