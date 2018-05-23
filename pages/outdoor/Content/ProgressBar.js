import { Component } from "react";

export default class ProgressBar extends Component {
	state = {
		currentIndex: 1,
		total: 4,
	};
	componentDidMount() {
		this.setState({ currentIndex: this.props.currentIndex });
		this.setState({ total: this.props.total });
	}

	render() {
		return (
			<div className="progress_bar">
				<div className="slide_number">{this.state.currentIndex}</div>
				<div className="separator" />
				<div className="slide_number">{this.state.total}</div>
				<style jsx>{`
					.progress_bar {
						color: yellow;
						display: flex;
						align-items: center;
					}
					.slide_number {
						color: #000;
						font-weight: bold;
						font-size: 1rem;
						display: inline-block;
					}
					.separator {
						display: inline-block;
						width: 7rem;
						margin: 0 1rem;
						border-top: 3px solid #000;
					}
				`}</style>
			</div>
		);
	}
}
