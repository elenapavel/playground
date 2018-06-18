import Link from "next/link";
import Form from "~/components/Form";
import $ from "./style.css";

const fields = [
	{
		type: "text",
		icon: "",
		placeholder: "Name",
		ref: "name",
		background: "#e6f0fc",
	},
	{
		type: "email",
		icon: "",
		placeholder: "Email",
		ref: "email",
		background: "#e6f0fc",
	},
	{
		type: "textarea",
		icon: "",
		placeholder: "Message",
		ref: "message",
		background: "#e6f0fc",
	},
];

const submitAction = {
	text: "Send",
};

export default () => (
	<b className={$.section}>
		<b className={$.heading}>Contact us</b>
		<b className={$.content}>
			<Form
				fields={fields}
				submitActionText={submitAction.text}
				submitActionBackground={submitAction.background}
			/>
			<b className={$.tagline}>Or just send an email on</b>
			<b className={$.email_action}>
				<Link href="mailto:great@simple.co">
					<a>
						<i className={$.email}>
							great@simple.co<b className={$.email_line} />
						</i>
					</a>
				</Link>
			</b>
		</b>
	</b>
);
