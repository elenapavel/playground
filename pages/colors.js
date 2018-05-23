import { Component } from "react";

class colors extends Component {
	render() {
		const colors = [
			"#f3dcf5",
			"beige",
			"#75c6ec",
			"#dcf2f5",
			"#75ec79",
			"#ec7575",
			"#c4c0ff",
			"#f1dd95",
			"pink",
			"#5bc5a8",
			"#ffefc0",
			"#d2c0ff",
			"#c0d9ff",
			"#deffc0",
			"lime",
			"#fa8787",
			"aliceblue",
			"#d46869",
		];
		return (
			<div className="container">
				{colors.map((color, key) => (
					<div
						className="color"
						key={key}
						style={{ background: color }}
					>
						{color}
					</div>
				))}
				<style jsx>{`
					.container {
						position: relative;
					}
					.color {
						height: 3rem;
						width: 10rem;
						margin-right: 2rem;
						display: inline-block;
						text-align: center;
						line-height: 3rem;
					}
				`}</style>
			</div>
		);
	}
}

export default colors;
