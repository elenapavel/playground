import React from "react";
import Link from "next/link";
import Form from "./Form";
import Button from "./Button";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b
			className={$.preview}
			style={{
				backgroundImage: `url(${data.background})`,
			}}
		/>
		<b className={$.content}>
			<b className={$.to_right}>
				<b className={$.heading}>Sign in</b>
				<b className={$.subheading}>Login to have access to files</b>
				<b className={$.login_action}>
					<Form
						fields={data.fields}
						submitActionText={data.submitAction.text}
					/>
				</b>
				<b className={$.tagline}>{data.tagline}</b>
				<b className={$.register_action}>
					<Button label={data.registerAction.text} />
				</b>
				<b className={$.forgot_password_action}>
					<Link href={data.resetAction.link}>
						<a>
							<i className={$.forgot_password}>
								{data.resetAction.text}
								<b className={$.forgot_password_line} />
							</i>
						</a>
					</Link>
				</b>
			</b>
		</b>
	</b>
);
