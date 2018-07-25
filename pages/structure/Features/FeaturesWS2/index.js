import { Component } from "react";
import Actions from "./Actions";
import Sections from "./Sections";
import data from "./data";
import $ from "./style.css";

class FeaturesWS2 extends Component {
	state = { active: 0 };

	onSelect(index) {
		this.setState({ active: index });
	}

	render() {
		const { heading } = this.props;
		const { active } = this.state;

		const contentActive = data.content[active];

		return (
			<b className={$.featured}>
				<b className={$.heading}>{heading || data.heading}</b>
				<b className={$.actions}>
					<Actions
						items={data.items}
						active={active}
						onSelect={key => this.onSelect(key)}
					/>
				</b>
				<b className={$.content}>
					<Sections sections={contentActive} />
				</b>
			</b>
		);
	}
}

export default FeaturesWS2;
