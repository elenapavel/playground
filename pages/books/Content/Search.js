import { Component } from "react";

class Search extends Component {
	render() {
		return (
			<div className="container">
				<input type="text" placeholder="Type book name or author" />
				<div className="action_search ion-ios-search-strong" />
				<style jsx>{`
					.container {
						position: relative;
						margin: 3rem 2rem;
					}
					input {
						width: 100%;
						padding: 1.3rem;
						font-size: 1rem;
						line-height: 1.4;
						border-radius: 0.3rem;
						border: 0 none;
						box-shadow: 0 1rem 3.5rem #e1e1e1;
						color: #7e7d94;
						font-family: "Cabin", sans-serif;
						font-weight: 400;
						outline: none;
						letter-spacing: 0.5px;
						transition: box-shadow 0.3s ease-in-out;
					}
					input:focus {
						box-shadow: 0 1rem 3.5rem #ccc;
					}
					::-webkit-input-placeholder,
					::placeholder {
						color: #7e7d94;
						opacity: 1;
					}
					:-ms-input-placeholder {
						color: #7e7d94;
					}
					::-ms-input-placeholder {
						color: #7e7d94;
					}
					.action_search {
						position: absolute;
						font-size: 2rem;
						right: 0;
						top: 0;
						bottom: 0;
						padding: 1rem 1.3rem;
						color: #7e7d94;
						transition: color 0.3s ease-in-out;
						cursor: pointer;
					}
					.action_search:active,
					.action_search:focus {
						color: #2a2734;
					}
				`}</style>
			</div>
		);
	}
}

export default Search;
