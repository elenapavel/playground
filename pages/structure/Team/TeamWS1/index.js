import { Component } from "react";
import SectionTitle from "~/components/SectionTitle";
import Member from "./Member";
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
		const { members, title } = this.props;
		const { visibleMemberDetailsIndex } = this.state;

		return (
			<b className={$.section}>
				<SectionTitle title={title || "Section Title"} />
				<b className={$.section_content}>
					{members.length &&
						members.map((member, key) => (
							<b className={$.section_item} key={key}>
								<Member
									areDetailsVisible={
										key == visibleMemberDetailsIndex
									}
									index={key}
									avatar={member.avatar}
									name={member.name}
									position={member.position}
									description={member.description}
									socialMedia={member.socialMedia}
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
