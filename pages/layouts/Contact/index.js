import { Component } from "react";
import Form from "./Form";

class Contact extends Component {
	render() {
		return (
			<div className="container">
				<div className="title" />
				<div className="content" />
				<Form />
				<div className="action" />
				<style jsx>{`
					.container {
						position: relative;
						background: #fa8787;
						padding: 3rem 2rem;
						transition: padding 0.5s ease-in-out;
					}
					.title {
						height: 3rem;
						width: 100%;
						background: pink;
						margin: auto;
						transition: width 0.5s ease-in-out;
					}
					.content {
						height: 5rem;
						width: 100%;
						background: #c4c0ff;
						margin: 1rem auto 0;
						transition: width 0.5s ease-in-out;
					}
					.action {
						height: 3rem;
						width: 10rem;
						margin: 1rem auto 0;
						background: #f1dd95;
					}
					@media (min-width: 40rem) {
						.content {
							width: 80%;
						}
					}
					@media (min-width: 40rem) {
						.container {
							padding: 5rem 2rem;
						}
					}
					@media (min-width: 64rem) {
						.container {
							padding: 5rem;
						}
						.title {
							width: 80%;
						}
						.content {
							width: 50%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Contact;
