import { PureComponent } from "react";
import { module } from "../application";

class MenuItem extends PureComponent {
	render() {
		const { name, isSelected, index } = this.props;
		return module("plantoid", ({ plantoid, selectPlantByIndex }) => {
			return (
				<div
					className={isSelected ? "item selected" : "item"}
					onClick={() => selectPlantByIndex(index)}
				>
					{name}
					<style jsx>{`
						.item {
							padding: 1rem 2rem;
						}
						.item:hover {
							cursor: pointer;
						}
						.selected {
							font-weight: bold;
						}
					`}</style>
				</div>
			);
		});
	}
}

export default MenuItem;
