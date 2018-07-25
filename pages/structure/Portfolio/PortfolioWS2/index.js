import React, { Component } from "react";
import Actions from "./Actions";
import Gallery from "./Gallery";
import data from "./data";
import $ from "./style.css";

class PortfolioWS2 extends Component {
	state = {
		active: 0,
	};

	onSelect(key) {
		this.setState({ active: key });
	}

	render() {
		const { heading } = this.props;
		const { active } = this.state;

		const items = Object.keys(data.items);
		const shownItems = data.items[items[active]];

		return (
			<b className={$.portfolio}>
				<b className={$.heading}>{heading || data.heading}</b>
				<b className={$.portfolio_actions}>
					<Actions
						items={items}
						active={active}
						onSelect={key => this.onSelect(key)}
					/>
				</b>
				<b className={$.portfolio_selected_content}>
					<Gallery items={shownItems} shouldFit />
				</b>
			</b>
		);
	}
}

export default PortfolioWS2;
