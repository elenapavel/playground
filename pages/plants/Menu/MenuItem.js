import { PureComponent } from "react";

class MenuItem extends PureComponent {
	render() {
		const { name, isSelected, index, onSelect } = this.props;
		return (
			<div
				className={isSelected ? "item selected" : "item"}
				onClick={() => onSelect(index)}
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
	}
}

export default MenuItem;
