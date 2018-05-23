import { Component } from "react";

class Events extends Component {
	render() {
		return (
			<div className="container">
				<div className="title" />
				<div className="events">
					<div className="event">
						<div className="image" />
						<div className="details">
							<div className="date" />
							<div className="info" />
						</div>
					</div>
					<div className="event">
						<div className="image" />
						<div className="details">
							<div className="date" />
							<div className="info" />
						</div>
					</div>
					<div className="event">
						<div className="image" />
						<div className="details">
							<div className="date" />
							<div className="info" />
						</div>
					</div>
					<div className="event">
						<div className="image" />
						<div className="details">
							<div className="date" />
							<div className="info" />
						</div>
					</div>
				</div>
				<style jsx>{`
					.container {
						position: relative;
						background: #ffefc0;
						padding: 1rem;
					}
					.title {
						height: 3rem;
						width: 80%;
						background: #d2c0ff;
					}
					.events {
						margin-top: 2rem;
					}
					.event {
						background: #c0d9ff;
						margin-top: 2rem;
						position: relative;
					}
					.event:before {
						content: "";
						display: block;
						position: absolute;
						border-top: 1px solid grey;
						width: 100%;
						top: -1rem;
					}
					.event:first-child {
						margin-top: 0;
					}
					.event:first-child:before {
						display: none;
					}
					.image {
						width: 4rem;
						height: 4rem;
						margin-right: 1rem;
						display: inline-block;
						background: pink;
					}
					.details {
						display: inline-block;
						vertical-align: top;
						width: calc(100% - 5rem);
					}
					.date {
						height: 1rem;
						margin-top: 0.5rem;
						margin-bottom: 0.5rem;
						background: lime;
						width: 10rem;
					}
					.info {
						height: 1.5rem;
						width: 100%;
						background: #deffc0;
					}
				`}</style>
			</div>
		);
	}
}

export default Events;
