import { Component } from "react";
import $ from "./style.css";

class Form extends Component {
	onSubmit() {
		if (typeof this.props.onSubmit !== "function") return null;
		this.props.onSubmit(this.refs);
	}
	render() {
		const { fields, submitActionText, submitActionBackground } = this.props;
		return (
			<b className={$.form}>
				{fields.map((field, key) => {
					const iconClasses = `${$.field_icon} ${field.icon}`;
					const fieldClasses = `${
						field.icon ? $.field_has_icon : $.field
					}`;

					if (field.type != null && field.type != "textarea")
						return (
							<b
								key={key}
								className={fieldClasses}
								style={{
									backgroundColor: field.background
										? field.background
										: null,
								}}
							>
								{field.icon != null ? (
									<b className={iconClasses} />
								) : null}
								<input
									type={field.type}
									placeholder={field.placeholder}
									ref={field.ref}
								/>
							</b>
						);
					else
						return (
							<b
								key={key}
								className={fieldClasses}
								style={{
									backgroundColor: field.background
										? field.background
										: null,
								}}
							>
								{field.icon != null ? (
									<b className={iconClasses} />
								) : null}
								<textarea
									placeholder={field.placeholder}
									ref={field.ref}
								/>
							</b>
						);
				})}
				<b
					className={$.submit_action}
					onClick={() => this.onSubmit()}
					style={{
						backgroundColor: submitActionBackground
							? submitActionBackground
							: null,
					}}
				>
					{submitActionText ? submitActionText : "Register"}
				</b>
			</b>
		);
	}
}

export default Form;
