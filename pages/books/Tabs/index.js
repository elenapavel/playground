import { Component } from "react";
import { module } from "../application";

class Tabs extends Component {
	render() {
		const { items, activeIndex } = this.props;
		return (
			<div className="container">
				{items.map((item, key) => {
					const tabClasses =
						"tab " + (activeIndex == key ? "active" : "");
					return (
						<div key={key}>
							{module(
								"store",
								({ store, setView, selectSection }) => (
									<div
										className={tabClasses}
										onClick={() => {
											selectSection(key);
											setView(item.view);
										}}
									>
										<div className="tab_label">
											{item.label}
										</div>
									</div>
								)
							)}
						</div>
					);
				})}
				<style jsx>{`
					.container {
						position: relative;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: space-around;
					}
					.tab {
						text-align: center;
						cursor: pointer;
					}
					.tab_label {
						display: inline-block;
						padding: 1rem;
						font-size: 1rem;
						border-bottom: 3px solid transparent;
						transition: all 0.3s ease-in-out;
						color: #7e7d94;
						font-weight: 600;
						font-family: "Cabin", sans-serif;
						letter-spacing: 0.5px;
					}
					.active .tab_label {
						border-color: #6a42e2;
						color: #2a2734;
					}
				`}</style>
			</div>
		);
	}
}

export default Tabs;
