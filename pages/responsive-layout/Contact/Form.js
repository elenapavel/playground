import { Component } from "react";

class Form extends Component {
	render() {
		return (
			<div className="container">
				<div className="left_panel">
					<div className="input" />
					<div className="input" />
					<div className="input" />
				</div>
				<div className="right_panel">
					<div className="textarea" />
				</div>
				<style jsx>{`
					.container {
						position: relative;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: space-between;
						width: 100%;
						margin: 3rem auto 0;
						transition: width 0.5s ease-in-out;
					}
					.left_panel,
					.right_panel {
						flex-basis: 100%;
					}
					.input {
						height: 2rem;
						margin-top: 1rem;
						width: 100%;
						background: aliceblue;
					}
					.input:first-child {
						margin-top: 0;
					}
					.textarea {
						height: 8rem;
						width: 100%;
						background: aliceblue;
						margin-top: 1rem;
						transition: margin-top 0.5s ease-in-out;
					}
					@media (min-width: 30rem) {
						.left_panel,
						.right_panel {
							flex-basis: 47%;
						}
						.textarea {
							margin-top: 0;
						}
					}
					@media (min-width: 40rem) {
						.container {
							width: 80%;
							justify-content: space-around;
						}
					}
					@media (min-width: 75rem) {
						.container {
							width: 60%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Form;
