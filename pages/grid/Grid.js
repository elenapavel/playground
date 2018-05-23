import { Component } from "react";

const defaults = {
	breakPoints: [
		{
			point: 1024,
			columns: 3,
			gutters: 0,
		},
		{
			point: 768,
			columns: 2,
			gutters: 0,
		},
		{
			point: 480,
			columns: 1,
			gutters: 0,
		},
	],
	colors: [
		"#d2c0ff",
		"beige",
		"#75ec79",
		"#ec7575",
		"#c4c0ff",
		"#f1dd95",
		"pink",
		"#5bc5a8",
		"#ffefc0",
		"#c0d9ff",
		"#deffc0",
		"#fa8787",
		"#f3dcf5",
		"aliceblue",
		"#d46869",
	],
};

class Grid extends Component {
	render() {
		const { columns, gutters, elements, breakPoints } = this.props;
		const cols = columns ? columns : 1;
		const gutter = gutters ? gutters : 0;
		const points = breakPoints ? breakPoints : defaults.breakPoints;
		const gridClasses = `grid_${cols}cols gutter_${gutter}`;

		var atMedia = "";

		points.forEach(point => {
			atMedia += `
					@media (max-width: ${point.point}px) {
						.grid_${cols}cols {
							margin-top: -${point.gutters}px;
						}
						.gutter_${gutter} .element {
							margin-left: ${point.gutters}px;
						}
						.grid_${cols}cols .element {
							flex-basis: calc(
								${100 / point.columns}% - ${point.gutters *
				(point.columns - 1) /
				point.columns}px
							);
						}
						.gutter_${gutter} .element {
							margin-top: ${point.gutters}px;
						}
					}
			`;
		});

		return (
			<div className="container">
				<div className={gridClasses}>
					{elements.map((element, key) => (
						<div className="element" key={key}>
							{element}
						</div>
					))}
				</div>

				<style jsx>{`
					.container {
						position: relative;
						overflow: hidden;
					}
					.element {
						border: 1px solid white;
						background: pink;
						height: 3rem;
						text-align: center;
					}
					.grid_${cols}cols .element {
						background: ${defaults.colors[cols - 1]};
					}
					.grid_${cols}cols .element:nth-child(${cols}n + 1) {
						margin-left: 0;
					}
					.grid_${cols}cols {
						margin-top: -${gutter}px;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
					}
					.gutter_${gutter} .element {
						margin-left: ${gutter}px;
					}
					.grid_${cols}cols .element {
						flex-basis: calc(
							${100 / cols}% - ${gutter * (cols - 1) / cols}px
						);
					}
					.gutter_${gutter} .element {
						margin-top: ${gutter}px;
					}
				`}</style>
			</div>
		);
	}
}

export default Grid;
