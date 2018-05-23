import { Component } from "react";

class Tabs extends Component {
	constructor(props) {
		super();

		this.state = {
			active: props.active != null ? props.active : 0,
		};
	}

	setActive(index) {
		this.setState({ active: index });
		this.props.onChangeViewByIndex(index);
	}

	render() {
		const { items, labelBackground } = this.props;
		const { active } = this.state;

		const tabs = items.map((item, key) => (
			<div className="tab" key={key} onClick={() => this.setActive(key)}>
				{item}

				<style jsx>{`
					.tab {
						display: inline-block;
						vertical-align: top;
						padding: 0.5rem 1rem;
						background: ${labelBackground
							? labelBackground
							: "#ccc"};
						border-bottom: 1px solid #444;
						cursor: pointer;
					}
				`}</style>
			</div>
		));

		return (
			<div className="tabs">
				{tabs}

				<style jsx>{`
					.tabs {
						border: 1px solid #444;
					}
					.content {
						padding: 3rem;
					}
				`}</style>
			</div>
		);
	}
}

export default Tabs;
