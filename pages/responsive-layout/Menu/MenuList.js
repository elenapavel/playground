import { Component } from "react";

class MenuList extends Component {
	render() {
		const background = [
			"red",
			"blue",
			"yellow",
			"green",
			"cyan",
			"pink",
			"black",
			"white",
			"lightgrey",
		];
		return (
			<div>
				<div className="container">
					{background.map((color, key) => (
						<div className="item" key={key} number={key + 1}>
							<div className="product_image" />
							<div className="product_details" />
						</div>
					))}
				</div>
				<style jsx>{`
					.product_details {
						background: cyan;
						height: 100%;
						flex-basis: 50%;
						display: flex;
						align-items: center;
					}
					.product_image {
						flex-basis: 50%;
						background: yellow;
						height: 100%;
					}

					.container {
						display: flex;
						width: 100%;
						height: auto;
						background: red;
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: center;
					}
					.item {
						flex-basis: 20rem;
						height: 40rem;
						display: flex;
						flex-direction: column;
						position: relative;
					}
					.item:after {
						position: absolute;
						content: attr(number);
						display: block;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						font-size: 10rem;
						text-align: center;
						line-height: 100%;
					}

					@media (min-width: 35rem) {
						.container {
							height: ${background.length * 50}vw;
							flex-direction: row;
							justify-content: initial;
						}
						.item {
							flex-basis: 100%;
							height: 50vw;
							flex-direction: row;
						}
						.item:nth-child(2n + 1) {
							flex-direction: row-reverse;
						}
					}
					@media (min-width: 50rem) {
						.container {
							height: ${background.length % 3 == 0
								? background.length / 3 * 50
								: (parseInt(background.length / 3) + 1) * 50}vw;
							flex-direction: column;
						}
						.item {
							flex-basis: 25vw;
							width: 66vw;
							height: auto;
						}
						.item:nth-child(2n + 1) {
							flex-direction: row;
						}
						.item:nth-child(3n) {
							width: 34vw;
							flex-basis: 50vw;
							flex-direction: column;
							order: 10;
						}
						.item:nth-child(3n + 2) {
							flex-direction: row-reverse;
						}
					}
					@media (min-width: 75rem) {
						.container {
							height: ${background.length % 2 == 0
								? background.length / 2 * 25
								: (parseInt(background.length / 2) + 1) * 25}vw;
							flex-direction: row;
						}
						.item {
							flex-basis: 50%;
							height: 25vw;
							width: auto;
						}
						.item:nth-child(3n) {
							width: auto;
							flex-basis: 50%;
							flex-direction: row;
							order: initial;
						}
						.item:nth-child(3n + 2) {
							flex-direction: row;
						}
						.item:nth-child(4n),
						.item:nth-child(4n + 5) {
							flex-direction: row;
						}
						.item:nth-child(4n + 3),
						.item:nth-child(4n) {
							flex-direction: row-reverse;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default MenuList;
