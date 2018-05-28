import { Component } from "react";

import $ from "./style.css";

class Cards extends Component {
	render() {
		return (
			<div className={$.cards_container}>
				<div className={$.card}>
					<div className={$.card_image} />
					<div className={$.card_details}>
						<div className={$.card_title} />
						<div className={$.card_info} />
						<div className={$.card_price} />
					</div>
				</div>
				<div className={$.card}>
					<div className={$.card_image} />
					<div className={$.card_details}>
						<div className={$.card_title} />
						<div className={$.card_info} />
						<div className={$.card_price} />
					</div>
				</div>
				<div className={$.card}>
					<div className={$.card_image} />
					<div className={$.card_details}>
						<div className={$.card_title} />
						<div className={$.card_info} />
						<div className={$.card_price} />
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;
