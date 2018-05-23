import { Component } from "react";

class Switch extends Component {
	constructor(props) {
		super();
		this.state = {
			isActive: props.isActive || false,
		};
	}
	toggleSwitch() {
		this.setState({ isActive: !this.state.isActive });
	}
	render() {
		const {
			disabled,
			activeLabel,
			inactiveLabel,
			activeBackgroundColor,
			inactiveBackgroundColor,
			activeLabelColor,
			inactiveLabelColor,
		} = this.props;
		const { isActive } = this.state;
		const switchClass =
			"switch_container " +
			(isActive ? "switch_active " : "switch_inactive ") +
			(disabled ? "switch_disabled" : "");

		return (
			<div
				className={switchClass}
				onClick={() => (!disabled ? this.toggleSwitch() : null)}
			>
				{!inactiveLabel ? null : (
					<div
						className="inactive_label"
						onClick={() => (!disabled ? this.toggleSwitch() : null)}
					>
						{inactiveLabel}
					</div>
				)}
				<div
					className="switch"
					onClick={() => (!disabled ? this.toggleSwitch() : null)}
				/>
				{!activeLabel ? null : (
					<div
						className="active_label"
						onClick={() => (!disabled ? this.toggleSwitch() : null)}
					>
						{activeLabel}
					</div>
				)}
				<style jsx>{`
					.switch_container {
						position: relative;
						display: block;
					}
					.inactive_label {
						padding-right: 0.5rem;
						font-size: 1rem;
						font-weight: bold;
						cursor: pointer;
						position: relative;
						display: inline-block;
						color: grey;
						transition: all 0.3s ease-in-out;
					}
					.switch_inactive .inactive_label {
						color: ${inactiveLabelColor
							? inactiveLabelColor
							: inactiveBackgroundColor
								? inactiveBackgroundColor
								: "black"};
					}
					.active_label {
						font-size: 1rem;
						padding-left: 0.5rem;
						font-weight: bold;
						cursor: pointer;
						position: relative;
						display: inline-block;
						color: grey;
						transition: all 0.3s ease-in-out;
					}
					.switch_active .active_label {
						color: ${activeLabelColor
							? activeLabelColor
							: activeBackgroundColor
								? activeBackgroundColor
								: "black"};
					}
					.switch {
						vertical-align: middle;
						display: inline-block;
						width: 50px;
						height: 20px;
						border-radius: 12px;
						position: relative;
						transition: all 0.3s ease-in-out;
						cursor: pointer;
						background: ${inactiveBackgroundColor || "lightgrey"};
						border: 2px solid
							${inactiveBackgroundColor || "lightgrey"};
					}
					.switch_active .switch {
						background: ${activeBackgroundColor || "red"};
						border-color: ${activeBackgroundColor || "red"};
					}
					.switch:after {
						content: "";
						position: absolute;
						background: #fff;
						top: 0;
						bottom: 0;
						margin: 1px;
						width: 16px;
						height: 16px;
						border-radius: 50%;
						transition: all 0.3s ease-in-out;
						left: 0;
						right: calc(100% - 20px);
						border: 1px solid
							${inactiveBackgroundColor || "lightgrey"};
					}
					.switch_active .switch:after {
						right: 0;
						left: calc(100% - 20px);
						border-color: ${activeBackgroundColor || "red"};
					}
					.switch_disabled .switch,
					.switch_disabled .inactive_label,
					.switch_disabled .active_label {
						cursor: not-allowed;
					}
					.switch_disabled .switch:before,
					.switch_disabled .active_label:before,
					.switch_disabled .inactive_label:before {
						content: "";
						position: absolute;
						border-radius: 12px;
						top: -2px;
						bottom: -2px;
						left: -2px;
						right: -2px;
						width: calc(100% + 4px);
						height: calc(100% + 4px);
						background-color: rgba(255, 255, 255, 0.3);
						z-index: 1;
					}
				`}</style>
			</div>
		);
	}
}

export default () => (
	<div>
		<Switch
			// disabled
			isActive="true"
			activeLabel="Active"
			inactiveLabel="Inactive"
			activeBackgroundColor="pink"
			inactiveBackgroundColor="lime"
		/>
	</div>
);
