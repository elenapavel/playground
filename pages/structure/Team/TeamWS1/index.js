import React, { Component } from "react";
import Member from "./Member";
import data from "./data";
import $ from "./style.css";

class TeamWS1 extends Component {
	state = {
		visibleMemberDetailsIndex: null,
	};

	selectVisibleMemberDetailsByIndex(index) {
		if (this.state.visibleMemberDetailsIndex == index)
			this.hideMemberDetails();
		else this.setState({ visibleMemberDetailsIndex: index });
	}

	hideMemberDetails() {
		this.setState({ visibleMemberDetailsIndex: null });
	}

	render() {
		const { heading } = this.props;
		const { visibleMemberDetailsIndex } = this.state;

		return (
			<b className={$.section}>
				<b className={$.heading}>{heading || data.heading}</b>
				<b className={$.content}>
					{data.members.length &&
						data.members.map((item, key) => (
							<b className={$.item} key={key}>
								<Member
									areDetailsVisible={
										key == visibleMemberDetailsIndex
									}
									index={key}
									avatar={item.avatar}
									name={item.name}
									position={item.position}
									description={item.description}
									socialMedia={item.socialMedia}
									onSelect={key =>
										this.selectVisibleMemberDetailsByIndex(
											key
										)
									}
								/>
							</b>
						))}
				</b>
			</b>
		);
	}
}

export default TeamWS1;
