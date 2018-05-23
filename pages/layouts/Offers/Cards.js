import { Component } from "react";

class Cards extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="image" />
					<div className="details">
						<div className="title" />
						<div className="info" />
						<div className="price" />
					</div>
				</div>
				<div className="card">
					<div className="image" />
					<div className="details">
						<div className="title" />
						<div className="info" />
						<div className="price" />
					</div>
				</div>
				<div className="card">
					<div className="image" />
					<div className="details">
						<div className="title" />
						<div className="info" />
						<div className="price" />
					</div>
				</div>
				<style jsx>{`
					.container {
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						overflow-x: auto;
						justify-content: flex-start;
						margin-top: -3rem;
						z-index: 20;
						position: relative;
					}
					.card {
						position: relative;
						flex-basis: 15rem;
						min-width: 15rem;
						background: beige;
						margin: 0 0.5rem;
					}
					.card:first-child {
						margin-left: 0;
					}
					.image {
						height: 10rem;
						background: #f3dcf5;
					}
					.details {
						padding: 2rem;
					}
					.title {
						height: 2rem;
						text-align: center;
						background: #75c6ec;
					}
					.info {
						height: 4rem;
						text-align: center;
						background: #dcf2f5;
						margin-top: 2rem;
					}
					.price {
						width: 60%;
						background: #75ec79;
						margin: 2rem auto 0;
						height: 3rem;
					}
					@media (min-width: 64rem) {
						.container {
							justify-content: center;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Cards;
