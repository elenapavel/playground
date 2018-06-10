import { Component } from "react";
import Actions from "~/components/Actions";
import SectionTitle from "~/components/SectionTitle";
import Sections from "./Sections";
import $ from "./style.css";

const items = ["Tab 1=one", "Tab two", "Tab 3"];

const content = [
	[
		{
			title: "Feature 1",
			headline:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis.",
		},
		{
			title: "Feature two",
			headline:
				"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum.",
		},
		{
			title: "Feature 3",
			headline:
				"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. ",
		},
		{
			title: "Feature four",
			headline:
				"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies",
		},
		{
			title: "Feature 5",
			headline:
				"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu.",
		},
		{
			title: "Feature 6",
			headline:
				"Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies",
		},
	],
	[
		{
			title: "Feature 1",
			headline:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis.",
		},
		{
			title: "Feature two",
			headline:
				"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum.",
		},
		{
			title: "Feature 3",
			headline:
				"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. ",
		},
		{
			title: "Feature four",
			headline:
				"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies",
		},
	],
	[
		{
			title: "Feature 1",
			headline:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis.",
		},
		{
			title: "Feature two",
			headline:
				"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum.",
		},
		{
			title: "Feature 3",
			headline:
				"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. ",
		},
		{
			title: "Feature four",
			headline:
				"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies",
		},
		{
			title: "Feature 5",
			headline:
				"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu.",
		},
	],
];

class FeaturesWS2 extends Component {
	state = { active: 0 };

	onSelect(index) {
		this.setState({ active: index });
	}

	render() {
		const { title } = this.props;
		const { active } = this.state;

		const contentActive = content[active];

		return (
			<b className={$.featured}>
				<SectionTitle title={title || "Section Title"} />
				<b className={$.actions}>
					<Actions
						items={items}
						active={active}
						onSelect={key => this.onSelect(key)}
					/>
				</b>
				<b className={$.content}>
					<Sections sections={contentActive} />
				</b>
			</b>
		);
	}
}

export default FeaturesWS2;
