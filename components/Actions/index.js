import { Component } from "react";
import $ from "./style.css";

class Actions extends Component {
	state = {
		active: 0,
	};

	static getDerivedStateFromProps(props, state) {
		state.active = props.active;

		return state;
	}

	onSelect(key) {
		this.setState({ active: key });

		if (typeof this.props.onSelect === "function") this.props.onSelect(key);
	}

	render() {
		const { items, active, onSelect } = this.props;

		return (
			<b className={$.items}>
				{items != null &&
					items.length != 0 &&
					items.map((item, key) => (
						<b
							className={key == active ? $.item_active : $.item}
							key={key}
							onClick={() => this.onSelect(key)}
						>
							{item}
						</b>
					))}
			</b>
		);
	}
}

export default Actions;
