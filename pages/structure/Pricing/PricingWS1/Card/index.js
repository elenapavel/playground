import { Component } from "react";
import Link from "next/link";
import Register from "~/components/Register";
import $ from "./style.css";

class Card extends Component {
	state = { isSelected: false };

	static getDerivedStateFromProps(props, state) {
		state.isSelected = props.isSelected;

		return state;
	}

	toggleSelect() {
		const { onSelect, index } = this.props;

		this.setState({ isSelected: !this.state.isSelected });

		if (typeof onSelect === "function") onSelect(index);
	}

	render() {
		const { label, description, price, link } = this.props;
		const { isSelected } = this.state;

		const cardClass = isSelected ? $.card_expanded : $.card_collapsed;

		return (
			<b className={cardClass} onClick={() => this.toggleSelect()}>
				<b className={$.label}>{label}</b>
				<b className={$.icon} />
				<b className={$.description}>{description}</b>
				<b className={$.price}>{price}</b>
				<b className={$.action}>
					<Link href={link}>
						<a>
							<Register text="Get plan" />
						</a>
					</Link>
				</b>
			</b>
		);
	}
}

export default Card;
