import { Component } from "react";
import Events from "../Events";

class Extras extends Component {
	render() {
		return (
			<div className="container">
				<div className="events">
					<Events />
				</div>
				<div className="events">
					<Events />
				</div>
				<div className="events">
					<Events />
				</div>
				<style jsx>{`
					.container {
						position: relative;
						padding: 5rem 2rem;
						background: #5bc5a8;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						flex-wrap: wrap;
					}
					.events {
						flex-basis: 30%;
						min-width: 19rem;
						margin: 0.5rem;
					}
					@media (min-width: 75rem) {
						.container {
							padding: 5rem;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Extras;
