import { Component } from "react";
import Search from "./Search";
import Categories from "./Categories";
import BookList from "./BookList";

class Content extends Component {
	render() {
		const { view, books, label } = this.props;
		return (
			<div className="container">
				{view == "myAccount" ? null : (
					<div>
						<Search />
						{view == "orders" ? null : <Categories />}
					</div>
				)}
				<BookList items={books} view={view} label={label} />
				<style jsx>{`
					.container {
						background: #f5f5fa;
						position: relative;
						overflow: hidden;
					}
					.container:before {
						content: "";
						opacity: ${view == "myAccount" ? 0 : 1};
						box-shadow: 0 0 5rem #e1e1e1;
						position: absolute;
						top: -5rem;
						left: 0;
						right: 0;
						width: 100%;
						height: 5rem;
					}
				`}</style>
			</div>
		);
	}
}

export default Content;
