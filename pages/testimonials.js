import { Component } from "react";

const data = [
	{
		label: "test 1",
		content: [
			"I enjoyed working with S&P. You guys have a good technical and visual understanding which enables you to deliver first class products for international enterprises. I rarely seen such organized, reliable and professional teams in the outsourcing business. We'll keep doing great things together.",
		],
		notes: ["by me", "by me", "testing"],
	},
	{
		label: "test 2",
		content: [
			"I enjoyed working with S&P. You guys have a good technical and visual understanding which enables you to deliver first class products for international enterprises. I rarely seen such organized, reliable and professional teams in the outsourcing business. We'll keep doing great things together.",
			"I enjoyed working with S&P. You guys have a good technical and visual understanding which enables you to deliver first class products for international enterprises. I rarely seen such organized, reliable and professional teams in the outsourcing business. We'll keep doing great things together.",
		],
		notes: ["testing", "by me"],
	},
	{
		label: "test 3",
		content: [
			"I enjoyed working with S&P. You guys have a good technical and visual understanding which enables you to deliver first class products for international enterprises. I rarely seen such organized, reliable and professional teams in the outsourcing business. We'll keep doing great things together.",
		],
		notes: [],
	},
	{
		label: "testing 1",
		content: [
			"I enjoyed working with S&P. You guys have a good technical and visual understanding which enables you to deliver first class products for international enterprises. I rarely seen such organized, reliable and professional teams in the outsourcing business. We'll keep doing great things together.",
			"I enjoyed working with S&P. You guys have a good technical and visual understanding which enables you to deliver first class products for international enterprises. I rarely seen such organized, reliable and professional teams in the outsourcing business. We'll keep doing great things together.",
		],
		notes: ["by me", "by me", "testing"],
	},
	{
		label: "test bla 2",
		content: [
			"I enjoyed working with S&P. You guys have a good technical and visual understanding which enables you to deliver first class products for international enterprises. I rarely seen such organized, reliable and professional teams in the outsourcing business. We'll keep doing great things together.",
			"I enjoyed working with S&P. You guys have a good technical and visual understanding which enables you to deliver first class products for international enterprises. I rarely seen such organized, reliable and professional teams in the outsourcing business. We'll keep doing great things together.",
		],
		notes: ["testing", "by me"],
	},
	{
		label: "test bla bla 3",
		content: [
			"<p>testing</p><p>testing 3</p>",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: [],
	},
	{
		label: "testing test 1",
		content: [
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: ["by me", "by me", "testing"],
	},
	{
		label: "lorem ipsum 2",
		content: ["<p>testing</p><p>testing 2</p>", "testing", "testing 2"],
		notes: ["testing", "by me"],
	},
	{
		label: "lorem 3",
		content: [
			"<p>testing</p><p>testing 3</p>",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: [],
	},
	{
		label: "consectetur 1",
		content: [
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: ["by me", "by me", "testing"],
	},
	{
		label: "amet est 2",
		content: ["<p>testing</p><p>testing 2</p>", "testing", "testing 2"],
		notes: ["testing", "by me"],
	},
	{
		label: "test 3",
		content: [
			"<p>testing</p><p>testing 3</p>",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: [],
	},
	{
		label: "test 1",
		content: [
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: ["by me", "by me", "testing"],
	},
	{
		label: "test 2",
		content: ["<p>testing</p><p>testing 2</p>", "testing", "testing 2"],
		notes: ["testing", "by me"],
	},
	{
		label: "test 3",
		content: [
			"<p>testing</p><p>testing 3</p>",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: [],
	},
	{
		label: "test 1",
		content: [
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: ["by me", "by me", "testing"],
	},
	{
		label: "test 2",
		content: ["<p>testing</p><p>testing 2</p>", "testing", "testing 2"],
		notes: ["testing", "by me"],
	},
	{
		label: "test 3",
		content: [
			"<p>testing</p><p>testing 3</p>",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
			"testing",
			"testing 2",
		],
		notes: [],
	},
];

class Testimonials extends Component {
	constructor(props) {
		super();
		this.state = {
			active: props.active != null ? props.active : 0,
			isAnimatedContent: false,
			isAnimatedNotes: false,
		};
	}
	setActive(index) {
		this.setState({ isAnimatedNotes: true });
		setTimeout(() => {
			this.setState({ isAnimatedContent: true });
		}, 250);
		setTimeout(() => {
			this.setState({ isAnimatedContent: false });
			this.setState({ isAnimatedNotes: false });
			this.setState({ active: index });
		}, 500);
	}
	render() {
		const { items } = this.props;
		const { active, isAnimatedNotes, isAnimatedContent } = this.state;
		const tabs = (
			<div className="tabs_container">
				{items.map((item, index) => {
					const tabClass =
						"tab " + (index == active ? "tab_active" : "");
					return (
						<div
							className={tabClass}
							key={index}
							onClick={() => this.setActive(index)}
						>
							{item.label}
						</div>
					);
				})}
				<style jsx>{`
					.tabs_container {
						margin: 0 -1rem;
						display: flex;
						flex-direction: row;
						// justify-content: space-between;
						flex-wrap: wrap;
					}
					.tab {
						flex-basis: 25%;
						font-size: 1.2rem;
						padding: 0.5rem 1rem;
						color: grey;
						transition: all 0.3s ease-in-out;
						cursor: pointer;
						min-width: 10rem;
						line-height: 1.4;
					}
					.tab:hover,
					.tab_active {
						color: #fff;
					}
				`}</style>
			</div>
		);
		const contentClass =
			"content_container " + (isAnimatedContent ? "animating" : "");
		const content = (
			<div className={contentClass} ref="testimonialContent">
				{items[active].content.map((paragraph, key) => (
					<div className="content" key={key}>
						{paragraph}
					</div>
				))}
				<style jsx>{`
					.content_container {
						padding: 3rem 0;
						margin-top: 3rem;
						position: relative;
						border-top: 1px solid #000;
					}
					.content_container:before {
						content: '"';
						color: #fff;
						position: absolute;
						right: 100%;
						top: 5rem;
						font-size: 0;
						transition: all 0.3s ease-in-out;
						padding: 0 20px;
						line-height: 0.5;
					}
					.content {
						color: #fff;
						margin: 0 0 20px;
						animation-name: bottomFade;
						animation-duration: 0.25s;
						animation-iteration-count: 1;
						font-size: 1.5rem;
						line-height: 1.4;
					}
					.animating .content {
						animation-name: topFade;
					}
					@keyframes topFade {
						0% {
							margin-top: 0;
							opacity: 1;
						}
						100% {
							margin-top: -20px;
							opacity: 0;
						}
					}
					@keyframes bottomFade {
						0% {
							margin-top: 20px;
							opacity: 0;
						}
						100% {
							margin-top: 0;
							opacity: 1;
						}
					}
					@media (min-width: 30rem) {
						.content_container:before {
							font-size: 10rem;
						}
						.content_container {
							margin-top: 5rem;
							padding: 5rem 0;
						}
					}
				`}</style>
			</div>
		);
		const notesClass =
			"notes_container " + (isAnimatedNotes ? "animating" : "");
		const notes = (
			<div className={notesClass} ref="testimonialNotes">
				{items[active].notes.map((line, key) => (
					<div className="notes" key={key}>
						{line}
					</div>
				))}
				<style jsx>{`
					.notes_container {
						padding: 20px 0;
					}
					.notes {
						text-align: right;
						color: rgba(255, 192, 203, 0.3);
						margin: 0 0 20px;
						animation-name: bottomFade;
						animation-duration: 0.5s;
						animation-iteration-count: 1;
						font-size: 1.2rem;
						line-height: 1.4;
					}
					.animating .notes {
						animation-name: topFade;
					}
					@keyframes topFade {
						0% {
							margin-top: 0;
							opacity: 1;
						}
						100% {
							margin-top: -20px;
							opacity: 0;
						}
					}
					@keyframes bottomFade {
						0% {
							margin-top: 20px;
							opacity: 0;
						}
						100% {
							margin-top: 0;
							opacity: 1;
						}
					}
				`}</style>
			</div>
		);
		return (
			<div className="testimonials_container">
				<div className="testimonials_title">Testimonials</div>
				<div className="testimonial_content">
					{tabs}
					{content}
					{notes}
				</div>
				<style jsx>{`
					:global(body) {
						margin: 0;
					}
					:global(*) {
						box-sizing: border-box;
					}
					.testimonials_container {
						background: #1f1f1f;
					}
					.testimonials_title {
						display: flex;
						align-items: center;
						justify-content: center;
						height: 100vh;
						color: #000;
						font-size: 10rem;
						font-weight: bold;
						text-align: center;
					}
					.testimonial_content {
						width: 60vw;
						min-height: 100vh;
						margin: auto;
					}
				`}</style>
			</div>
		);
	}
}

export default () => (
	<div>
		<Testimonials items={data} />
	</div>
);
