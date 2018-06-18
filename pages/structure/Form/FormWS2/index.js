import Link from "next/link";
import { STATIC } from "~/playground";
import Form from "~/components/Form";
import Register from "~/components/Register";
import $ from "./style.css";

const fields = [
	{
		type: "text",
		icon: "",
		placeholder: "Username",
		ref: "userName",
		background: "#e6f0fc",
	},
	{
		type: "password",
		icon: "",
		placeholder: "Password",
		ref: "password",
		background: "#e6f0fc",
	},
];

const submitAction = {
	text: "Login",
};

export default () => (
	<b className={$.section}>
		<b
			className={$.preview}
			style={{
				backgroundImage: `url(${STATIC}/images/planets/Saturn.jpeg)`,
			}}
		/>
		<b className={$.content}>
			<b className={$.to_right}>
				<b className={$.heading}>Sign in</b>
				<b className={$.subheading}>Login to have access to files</b>
				<b className={$.login_action}>
					<Form
						fields={fields}
						submitActionText={submitAction.text}
					/>
				</b>
				<b className={$.tagline}>or</b>
				<b className={$.register_action}>
					<Register text="Sign up" />
				</b>
				<b className={$.forgot_password_action}>
					<Link href="#">
						<a>
							<i className={$.forgot_password}>
								Forgot password?
								<b className={$.forgot_password_line} />
							</i>
						</a>
					</Link>
				</b>
			</b>
		</b>
	</b>
);
