import { Component } from "react";
import Actions from "~/components/Actions";
import SectionTitle from "~/components/SectionTitle";
import data from "./data";
import Gallery from "./Gallery";
import $ from "./style.css";

class PortfolioWS2 extends Component {
	state = {
		active: 0,
	};

	onSelect(key) {
		this.setState({ active: key });
	}

	render() {
		const { title } = this.props;
		const { active } = this.state;

		const items = Object.keys(data);
		const contentActive = data[items[active]];

		return (
			<b className={$.portfolio}>
				<SectionTitle title={title || "Section title"} />
				<b className={$.portfolio_actions}>
					<Actions
						items={items}
						active={active}
						onSelect={key => this.onSelect(key)}
					/>
				</b>
				<b className={$.portfolio_selected_content}>
					<Gallery items={contentActive} shouldFit />
				</b>
			</b>
		);
	}
}

export default PortfolioWS2;
