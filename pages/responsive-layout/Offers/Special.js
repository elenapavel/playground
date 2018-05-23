import { Component } from "react";

class Special extends Component {
	render() {
		return (
			<div className="container">
				<div className="special_week">
					<div className="title" />
					<div className="content" />
					<div className="action" />
				</div>
				<style jsx>{`
					.container {
						position: relative;
						background: rgba(0, 0, 0, 0.1);
						padding: 3rem 1rem;
					}
					.special_week {
						max-width: 60rem;
						margin: auto;
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
					@media (min-width: 64rem) {
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

export default Special;
