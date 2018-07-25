import React, { Component } from "react";
import SocialLinks from "./SocialLinks";
import $ from "./style.css";

class Member extends Component {
	selectMemberByIndex(index) {
		if (typeof this.props.onSelect === "function") {
			this.props.onSelect(index);
		}
	}

	render() {
		const {
			avatar,
			name,
			position,
			description,
			socialMedia,
			index,
			onSelect,
			areDetailsVisible,
		} = this.props;

		const memberClass = `${
			areDetailsVisible ? $.member_expanded : $.member_collapsed
		}`;

		return (
			<b
				className={memberClass}
				onClick={() => this.selectMemberByIndex(index)}
			>
				<b
					className={$.avatar}
					style={{ backgroundImage: `url(${avatar})` }}
				/>
				<b className={$.details}>
					<b className={$.heading}>{name}</b>
					<b className={$.position}>{position}</b>
					<b className={$.description}>{description}</b>
					<b className={$.social_media}>
						<SocialLinks items={socialMedia} />
					</b>
				</b>
			</b>
		);
	}
}

export default Member;
