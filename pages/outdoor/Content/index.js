import Nav from "./Nav";
import ProgressBar from "./ProgressBar";
import Content from "./Content";
import Actions from "./Actions";

export default () => {
	const content = {
		title: "hiking",
		description:
			"Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.",
	};
	return (
		<div className="content">
			<div className="top_navigation">
				<Nav />
			</div>
			<div className="section section_progress">
				<ProgressBar currentIndex="03" total="04" />
			</div>
			<div className="section section_details">
				<Content {...content} />
			</div>
			<div className="section section_actions">
				<Actions />
			</div>
			<style jsx>{`
				.content {
					margin: 0 1.5rem;
					padding: 1.5rem 0;
					position: relative;
					display: block;
					height: auto;
					transition: all 0.3s ease-in-out;
				}
				.top_navigation {
					display: block;
				}
				.section {
					padding-top: 1rem;
					padding-bottom: 1rem;
					transition: all 0.3s ease-in-out;
				}
				.section_progress {
					padding-left: 0;
					padding-right: 0;
					padding-top: 5rem;
				}
				.section_details {
					margin-right: 0;
				}
				.section_actions {
					padding-top: 0;
					opacity: 0;
					visibility: hidden;
					transition: opacity 0.3s ease-in-out,
						padding-top 0.3s ease-in-out, height 0s linear 0.3s;
					height: 0;
				}
				@media (min-width: 56.25rem) and (min-height: 40rem) {
					.content {
						height: 100vh;
						display: flex;
						align-items: flex-start;
						justify-content: center;
						flex-direction: column;
						margin: 0 3rem;
						padding: 3rem 0;
					}
					.top_navigation {
						position: absolute;
						top: 3rem;
						left: 0;
						right: 0;
					}
					.section_progress {
						padding-left: 3rem;
						padding-right: 3rem;
					}
					.section_details {
						margin-right: 3rem;
					}
					.section_actions {
						padding-top: 7rem;
						opacity: 1;
						visibility: visible;
						height: auto;
					}
					.section {
						padding-top: 2rem;
						padding-bottom: 2rem;
					}
				}
			`}</style>
		</div>
	);
};
