import { Component } from "react";
import $ from "./style.css";

class Tabs extends Component {
	constructor(props) {
		super();

		this.state = {
			active: props.active != null ? props.active : 0,
		};
	}

	setActive(index) {
		this.setState({ active: index });
		this.props.onChange(this.props.items[index]);
	}

	render() {
		const { items, labelBackground, containerBackground } = this.props;
		const { active } = this.state;

		const tabs = items.map((item, key) => (
			<div
				className={$.tab}
				key={key}
				onClick={() => this.setActive(key)}
				style={{
					background:
						labelBackground || containerBackground || "#ccc",
				}}
			>
				{item}
			</div>
		));

		return (
			<div
				className={$.tabs}
				style={{
					background: containerBackground || "#ccc",
				}}
			>
				{tabs}
			</div>
		);
	}
}

export default Tabs;
