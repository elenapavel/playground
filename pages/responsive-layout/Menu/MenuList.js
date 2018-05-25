import { Component } from "react";

import $ from "./style.css";

class MenuList extends Component {
	state = {
		containerHeight: 0,
	};
	componentDidMount() {
		const background = new Array(9).fill();
		const containerHeight =
			window.innerWidth < 560
				? "auto"
				: window.innerWidth < 800
					? `${background.length * 50}vw`
					: window.innerWidth < 1200
						? `${
								background.length % 3 == 0
									? background.length / 3 * 50
									: (parseInt(background.length / 3) + 1) * 50
						  }vw`
						: `${
								background.length % 2 == 0
									? background.length / 2 * 25
									: (parseInt(background.length / 2) + 1) * 25
						  }vw`;

		this.setState({ containerHeight: containerHeight });

		window.addEventListener("resize", () => this.calcContainerHeight());
	}
	calcContainerHeight() {
		const background = new Array(9).fill();
		const containerHeight =
			window.innerWidth < 560
				? "auto"
				: window.innerWidth < 800
					? `${background.length * 50}vw`
					: window.innerWidth < 1200
						? `${
								background.length % 3 == 0
									? background.length / 3 * 50
									: (parseInt(background.length / 3) + 1) * 50
						  }vw`
						: `${
								background.length % 2 == 0
									? background.length / 2 * 25
									: (parseInt(background.length / 2) + 1) * 25
						  }vw`;

		this.setState({ containerHeight: containerHeight });
	}
	render() {
		const { containerHeight, background } = this.state;

		return (
			<div>
				<div
					className={$.menu_container}
					style={{ height: containerHeight }}
				>
					{new Array(9).fill().map((color, key) => (
						<div className={$.menu_item} key={key} number={key + 1}>
							<div className={$.product_image} />
							<div className={$.product_details} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default MenuList;
