import { PureComponent } from "react";

import { module } from "../application";

import $ from "./style.css";

class Action extends PureComponent {
	render() {
		const actionClasses = `${$.action_close} ion-android-close`;

		return module(
			"universeFacts",
			({ universeFacts, changeViewToCategory }) => (
				<div
					className={actionClasses}
					onClick={() => changeViewToCategory()}
				/>
			)
		);
	}
}

export default Action;
