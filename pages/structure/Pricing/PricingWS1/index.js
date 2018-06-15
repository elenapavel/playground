import { Component } from "react";
import SectionTitle from "~/components/SectionTitle";
import Card from "./Card";
import $ from "./style.css";

const cards = [
	{
		label: "Personal",
		description:
			"Buying this plan can help you improve your company with some features we provide",
		price: "Free",
		link: "#",
	},
	{
		label: "Professional",
		description:
			"Buying this plan can help you improve your company with multiple features we provide",
		price: "$89",
		link: "#",
	},
	{
		label: "Corporate",
		description:
			"Buying this plan can help you improve your company with all the features we provide",
		price: "$149",
		link: "#",
	},
];

class PricingWs1 extends Component {
	state = { selectedCard: null };

	onSelectPlan(index) {
		this.setState({
			selectedCard: this.state.selectedCard == index ? null : index,
		});
	}

	render() {
		const { selectedCard } = this.state;

		return (
			<b className={$.section}>
				<SectionTitle title="Pricing table" />
				<b className={$.plans}>
					{cards.map((card, key) => (
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
