import React, { Component } from "react";
import $ from "./style.css";

class Search extends Component {
	state = {
		isSearchVisible: false,
	};

	static getDerivedStateFromProps(props, state) {
		state.isSearchVisible = props.isSearchVisible;

		return state;
	}

	toggleSearchVisibility() {
		this.setState({ isSearchVisible: !this.state.isSearchVisible });
		if (typeof this.props.onChange === "function") {
			this.props.onChange(!this.state.isSearchVisible);
		}
	}

	componentDidUpdate() {
		if (this.state.isSearchVisible)
			setTimeout(() => {
				this.refs.search.focus();
			}, 300);
	}

	render() {
		const { isSearchVisible } = this.state;

		const searchIconClasses = `${$.search_icon} ${
			isSearchVisible ? "ion-android-close" : "ion-android-search"
		}`;
		const searchInputClass = `${
			isSearchVisible ? $.search_input_visible : $.search_input_hidden
		}`;

		return (
			<b className={$.search}>
				<b
					className={searchIconClasses}
					onClick={() => this.toggleSearchVisibility()}
				/>
				<b className={searchInputClass}>
					<input
						type="text"
						value=""
						ref="search"
						placeholder="Search..."
					/>
				</b>
			</b>
		);
	}
}

export default Search;
