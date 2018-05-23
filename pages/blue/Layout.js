import { Component } from "react";
import Section from "./Section";

class Layout extends Component {
	state = {
		selected: null,
	};
	selectedSection = index => {
		this.setState({ selected: index });
	};
	clearSection = () => {
		this.setState({ selected: null });
	};
	render() {
		const { items } = this.props;
		const { selected } = this.state;

		return (
			<div className="layout">
				{items.map((item, key) => {
					if (selected == key) {
						return (
							<Section
								isSelected
								key={key}
								clearSection={this.clearSection}
								{...item}
							/>
						);
					} else if (selected == null)
						return (
							<Section
								key={key}
								index={key}
								selectedSection={this.selectedSection}
								{...item}
							/>
						);
				})}
				<style jsx>{`
					:global(body) {
						margin: 0;
					}
					:global(*) {
						box-sizing: border-box;
					}
					.layout {
						position: relative;
						display: flex;
						flex-direction: row;
						justify-content: center;
						flex-wrap: wrap;
						min-height: 100vh;
					}
				`}</style>
			</div>
		);
	}
}

export default Layout;
