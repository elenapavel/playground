import { Component } from "react";
import { STATIC } from "~/playground.js";
import $ from "./style.css";

class Navigation extends Component {
	state = {
		isLoading: true,
		items: null,
		activeIndex: null,
		hoverIndex: null,
		isMenuOpened: false,
	};

	componentDidMount() {
		fetch(`${STATIC}/data/simple.json`)
			.then(response => response.json())
			.then(response =>
				this.setState({
					items: response.menu,
					activeIndex: 0,
					isLoading: false,
				})
			);
	}

	handleClick(key) {
		this.setState({ activeIndex: key });
		const { onSelect } = this.props;

		if (typeof onSelect === "function") onSelect(this.state.items[key].ref);
	}

	handleHover(key) {
		this.setState({ hoverIndex: key });
	}

	render() {
		const { isLoading, items, activeIndex, hoverIndex } = this.state;

		return isLoading ? null : (
			<i className={$.container}>
				{items.map((item, key) => (
					<i
						key={key}
						ref={item.ref}
						className={
							activeIndex == key
								? $.item_active
								: hoverIndex == key
								? $.item_active
								: $.item
						}
						onClick={() => this.handleClick(key)}
						onMouseEnter={() => this.handleHover(key)}
						onMouseLeave={() => this.handleHover(null)}
					>
						{item.name}
					</i>
				))}
			</i>
		);
	}
}

export default Navigation;
