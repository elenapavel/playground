import { Component } from "react";

const data = [
	{
		label: "tab 1",
		content: "content 1",
	},
	{
		label: "tab 2",
		content: "content 2",
	},
	{
		label: "tab 3",
		content: <h1>asdasdas</h1>,
	},
];

class Tabs extends Component {
	constructor(props) {
		super();

		this.state = {
			active: props.active != null ? props.active : 0,
		};
	}

	setActive(index) {
		this.setState({ active: index });
	}

	render() {
		const { items, labelBackground } = this.props;
		const { active } = this.state;

		const tabs = items.map((item, key) => (
			<div className="tab" key={key} onClick={() => this.setActive(key)}>
				{item.label}

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

		const content = <div className="content">{items[active].content}</div>;

		return (
			<div className="tabs">
				{tabs}
				{content}

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

export default () => (
	<div>
		<h4> tabs example </h4>
		<Tabs items={data} active="2" />
	</div>
);
