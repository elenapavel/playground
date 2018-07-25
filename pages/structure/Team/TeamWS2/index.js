import React, { Component } from "react";
import Member from "./Member";
import Register from "./Register";
import data from "./data";
import $ from "./style.css";

const components = {
	member: Member,
	register: Register,
};

class TeamWS1 extends Component {
	render() {
		const { heading } = this.props;

		return (
			<b className={$.section}>
				<b className={$.heading}>{heading || data.heading}</b>
				<b className={$.content}>
					{data.items.length &&
						data.items.map((item, key) => {
							const Component = components[item.type];

							return (
								<b className={$.item} key={key}>
									{item.type == "member" ? (
										<Component
											avatar={item.avatar}
											name={item.name}
											position={item.position}
										/>
									) : item.type == "register" ? (
										<Component heading={item.heading} />
									) : null}
								</b>
							);
						})}
				</b>
			</b>
		);
	}
}

export default TeamWS1;
