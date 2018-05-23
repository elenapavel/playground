import { Component } from "react";
import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";

class Menu extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="form" />
					<div className="title" />
					<MenuTabs />
				</div>
				<MenuList />
				<style jsx>{`
					.container {
						height: auto;
						background: beige;
						display: block;
						padding: 2rem;
					}
					.form {
						height: 10rem;
						transform: translateY(-50%);
						margin: 0 auto;
						background: #f1dd95;
						width: 100%;
					}
					.title {
						height: 4rem;
						width: 100%;
						margin: 0 auto;
						background: #f1dd95;
					}
					@media (min-width: 40rem) {
						.title {
							width: 75%;
						}
					}
					@media (min-width: 64rem) {
						.form {
							width: 70%;
						}
						.title {
							width: 50%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Menu;
