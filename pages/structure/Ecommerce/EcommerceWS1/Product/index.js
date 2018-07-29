import React, { Component } from "react";
import Link from "next/link";
import Button from "./Button";
import $ from "./style.css";

class Product extends Component {
	state = { isSelected: false };

	static getDerivedStateFromProps(props, state) {
		state.isSelected = props.isSelected;

		return state;
	}

	toggleSelect() {
		const { onSelect, index } = this.props;

		this.setState({ isSelected: !this.state.isSelected });

		if (typeof onSelect === "function") {
			onSelect(index);
		}
	}

	render() {
		const { name, image, price, description, link } = this.props;
		const { isSelected } = this.state;

		const sectionClass = isSelected
			? $.section_expanded
			: $.section_collapsed;

		return (
			<b className={sectionClass} onClick={() => this.toggleSelect()}>
				<b
					className={$.image}
					style={{ backgroundImage: `url(${image})` }}
				/>
				<b className={$.details}>
					<b className={$.name}>{name}</b>
					<b className={$.description}>{description}</b>
					<b className={$.price}>{price}</b>
					<i className={$.action}>
						{link ? (
							<Link href={link}>
								<a>
									<Button label="Buy" />
								</a>
							</Link>
						) : (
							<Button label="Buy" />
						)}
					</i>
				</b>
			</b>
		);
	}
}

export default Product;
