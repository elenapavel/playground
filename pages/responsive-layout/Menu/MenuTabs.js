import { Component } from "react";

class MenuTabs extends Component {
	render() {
		return (
			<div className="container">
				<div className="tab" />
				<div className="tab" />
				<div className="tab" />
				<div className="tab" />
				<div className="tab" />
				<div className="tab" />
				<style jsx>{`
					.container {
						display: flex;
						align-items: center;
						justify-content: center;
						flex-wrap: wrap;
						height: auto;
						background: black;
						margin-top: 1.5rem;
					}
					.tab {
						height: 2rem;
						min-width: 7rem;
						flex-basis: 10%;
						margin: 0.5rem;
						background: grey;
					}
				`}</style>
			</div>
		);
	}
}

export default MenuTabs;
