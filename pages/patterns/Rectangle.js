import { Component } from "react";

class Rectangle extends Component {
	render() {
		return (
			<div className="container">
				<div className="test" />
				<style jsx>{`
					.container {
						position: relative;
						width: 60rem;
						height: 20rem;
						background: #75ec79;
						border-radius: 3rem;
						margin-top: 10rem;
						transform: skewY(-10deg);
						background: url(/static/images/blue.jpg);
						background-position: center;
						background-size: cover;
					}
				`}</style>
			</div>
		);
	}
}

export default Rectangle;
