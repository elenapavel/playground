import { Component } from "react";

import $ from "./style.css";

class Events extends Component {
	render() {
		return (
			<div className={$.container}>
				<div className={$.title} />
				<div className={$.events}>
					<div className={$.event}>
						<div className={$.image} />
						<div className={$.details}>
							<div className={$.date} />
							<div className={$.info} />
						</div>
					</div>
					<div className={$.event}>
						<div className={$.image} />
						<div className={$.details}>
							<div className={$.date} />
							<div className={$.info} />
						</div>
					</div>
					<div className={$.event}>
						<div className={$.image} />
						<div className={$.details}>
							<div className={$.date} />
							<div className={$.info} />
						</div>
					</div>
					<div className={$.event}>
						<div className={$.image} />
						<div className={$.details}>
							<div className={$.date} />
							<div className={$.info} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Events;
