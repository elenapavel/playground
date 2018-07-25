import React, { Component } from "react";
import Card from "./Card";
import data from "./data";
import $ from "./style.css";

class PricingWs1 extends Component {
	state = { selectedCard: null };

	onSelectPlan(index) {
		this.setState({
			selectedCard: this.state.selectedCard == index ? null : index,
		});
	}

	render() {
		const { heading } = this.props;
		const { selectedCard } = this.state;

		return (
			<b className={$.section}>
				<b className={$.heading}>{data.heading}</b>
				<b className={$.plans}>
					{data.cards.map((card, key) => (
						<b className={$.item} key={key}>
							<Card
								label={card.label}
								description={card.description}
								price={card.price}
								link={card.link}
								index={key}
								isSelected={selectedCard == key}
								onSelect={index => this.onSelectPlan(index)}
							/>
						</b>
					))}
				</b>
			</b>
		);
	}
}

export default PricingWs1;
