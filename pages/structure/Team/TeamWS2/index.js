import { Component } from "react";
import SectionTitle from "~/components/SectionTitle";
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
		const { title } = this.props;

		return (
			<b className={$.section}>
				<SectionTitle title={title || "Section Title"} />
				<b className={$.section_content}>
					{data.items.length &&
						data.items.map((item, key) => {
							const Component = components[item.type];

							return (
								<b className={$.section_item} key={key}>
									{item.type == "member" ? (
										<Component
											avatar={item.avatar}
											name={item.name}
											position={item.position}
										/>
									) : item.type == "register" ? (
										<Component title={item.title} />
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
