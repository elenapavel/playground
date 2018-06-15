import { Component } from "react";
import $ from "./style.css";

class Switch extends Component {
	state = {
		isActive: false,
		isDragging: false,
		switchWidth: null,
		switchPosition: 0,
		circlePosition: 0,
	};
	componentDidMount() {
		this.onMouseDragCircle = this.onMouseDragCircle.bind(this);
		this.onMouseDragStop = this.onMouseDragStop.bind(this);
		this.setState({
			switchWidth: this.refs.switch.clientWidth / 16,
			switchPosition: this.refs.switch.offsetLeft / 16,
		});
	}

	toggleActiveState() {
		this.setState({ isActive: !this.state.isActive });
	}

	onDragCircle(event) {
		const { switchPosition, switchWidth } = this.state;

		const cursorPosition = event.touches[0].clientX / 16;
		const circlePosition =
			cursorPosition < switchPosition
				? 0
				: cursorPosition > switchPosition + switchWidth
					? switchWidth
					: cursorPosition - switchPosition;

		this.setState({ isDragging: true, circlePosition: circlePosition });
	}

	onDragStop(event) {
		const { switchWidth, circlePosition } = this.state;

		const shouldBeActive = switchWidth / 2 > circlePosition ? false : true;

		this.setState({ isDragging: false, isActive: shouldBeActive });
	}

	onMouseDragStart(event) {
		window.addEventListener("mousemove", this.onMouseDragCircle);
		window.addEventListener("mouseup", this.onMouseDragStop);
	}

	onMouseDragCircle(event) {
		const { switchPosition, switchWidth } = this.state;

		const cursorPosition = event.clientX / 16;
		const circlePosition =
			cursorPosition < switchPosition
				? 0
				: cursorPosition > switchPosition + switchWidth
					? switchWidth
					: cursorPosition - switchPosition;

		this.setState({ isDragging: true, circlePosition: circlePosition });
	}

	onMouseDragStop(event) {
		const { switchWidth, circlePosition } = this.state;

		const shouldBeActive = switchWidth / 2 > circlePosition ? false : true;

		window.removeEventListener("mousemove", this.onMouseDragCircle);
		window.removeEventListener("mouseup", this.onMouseDragStop);

		this.setState({
			isDragging: false,
			isActive: shouldBeActive,
		});
	}

	render() {
		const {
			isActive,
			isDragging,
			circlePosition,
			switchPosition,
			switchWidth,
		} = this.state;

		return (
			<b
				className={$.switch}
				ref="switch"
				onClick={() => this.toggleActiveState()}
			>
				<b className={$.labels}>
					<b className={$.to_left}>on</b>
					<b className={$.to_right}>off</b>
				</b>
				<b
					className={$.circle}
					style={{
						left: isDragging
							? circlePosition + "rem"
							: isActive ? switchWidth + "rem" : "0rem",
					}}
					onTouchMove={event => this.onDragCircle(event)}
					onTouchEnd={event => this.onDragStop(event)}
					onMouseDown={event => this.onMouseDragStart(event)}
				/>
			</b>
		);
	}
}

export default Switch;
