import { Component } from "react";

class Section extends Component {
	state = {
		isSelecting: false,
		isClearing: false,
	};
	selectingSection(index, selectedSection) {
		this.setState({ isSelecting: true });
		setTimeout(() => {
			selectedSection(index);
			this.setState({ isSelecting: false });
		}, 500);
	}
	clearingSection(clearSection) {
		this.setState({ isClearing: true });
		setTimeout(() => {
			clearSection();
			this.setState({ isClearing: false });
		}, 500);
	}
	render() {
		const {
			title,
			content,
			color,
			image,
			selectedSection,
			isSelected,
			clearSection,
			index,
		} = this.props;
		const { isSelecting, isClearing } = this.state;
		return (
			<div
				className={
					isSelected
						? isClearing
							? "section_selected_container fade_out"
							: "section_selected_container fade_in"
						: isSelecting
							? "section_container fade_out"
							: "section_container fade_in"
				}
			>
				<div className="section">
					<div className="title">{title}</div>
					{isSelected ? (
						<div>
							<div className="content">{content}</div>
							<div
								className="close"
								onClick={e =>
									this.clearingSection(clearSection)
								}
							>
								<img src="/static/icons/close.svg" />
							</div>
						</div>
					) : (
						<div>
							<div
								className="more_mobile"
								onClick={e =>
									this.selectingSection(
										index,
										selectedSection
									)
								}
							/>
							<div
								className="more"
								onClick={e =>
									this.selectingSection(
										index,
										selectedSection
									)
								}
							>
								Read more
								<img src="/static/icons/chevron_right.svg" />
							</div>
						</div>
					)}
				</div>
				<style jsx>{`
					.fade_in{
						opacity: 0;
						animation-name: fadeIn;
						animation-duration: 0.5s;
						animaiton-iteration-count: 1;
						animation-fill-mode: forwards;
					}
					.fade_out{
						opacity: 1;
						animation-name: fadeOut;
						animation-duration: 0.5s;
						animaiton-iteration-count: 1;
						animation-fill-mode: forwards;
					}
					.section_selected_container{
						background-image: url('${image}');
						position: relative;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						flex-basis: 100%;
						color: red;
						display: flex;
						align-items: center;
						flex-wrap: wrap;
					}
					.section_container {
						position: relative;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						flex-basis: 100%;
						color: red;
						display: flex;
						align-items: center;
						flex-wrap: wrap;
					}
					.section_container:after,
					.section_container:after{
						content: "";
						z-index: 1;
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						width: 100%;
						height: 100%;
						background-color: transparent;
						transition: all 0.3s ease-in-out;
					}
					.section_container:hover:after,
					.section_container:focus:after{
						content: "";
						z-index: 1;
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						width: 100%;
						height: 100%;
						background-color: ${color};
					}
					.section_selected_container:before {
						content: "";
						z-index: 1;
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						width: 100%;
						height: 100%;
						background-color: rgba(255,255,255,0.7);
					}
					.section_selected_container:after {
						transition: all 0.3s ease-in-out;
						content: "";
						z-index: 1;
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						width: 2rem;
						height: 100%;
						background-color: ${color};
					}
					.section{
						padding: 2rem;
					}
					.section_selected_container .section{
						width: calc(100% - 2rem);
						margin-left: 2rem;
						transition: all 0.3s ease-in-out;
						padding: 1.5rem;
					}
					.title{
						font-size: 2rem;
						color: ${color};
						font-weight: bold;
						line-height: 1.4;
						position: relative;
						z-index: 10;
					}
					.content{
						font-size: 1.2rem;
						color: #444;
						line-height: 1.4;
						position: relative;
						z-index: 10;
					}
					.more{
						color: #000;
						font-size: 1.2rem;
						font-weight: bold;
						display: block;
						position: relative;
						z-index: 10;
						cursor: pointer;
					}
					.more img{
						 width: auto;
						 padding-left: 0.3rem;
						 height: 0.8rem;
						 max-width: 3rem;
						 display: inline-block;
						 transition: all 0.3s ease-in-out;
					}
					.more:hover img{
						transform: rotate(360deg);
					}
					.close{
						cursor: pointer;
						position: absolute;
						top: 0;
						right: 0;
						z-index: 10;
						padding: 1rem;
					}
					.close img{
						width: 2rem;
						height: 2rem;
					}
					.more_mobile{
						position: absolute;
						top: 0;
						bottom: 0;
						right: 0;
						left: 0;
						width: 100%;
						height: 100%;
						z-index: 10;
						cursor: pointer;
					}
					@keyframes fadeIn{
						from{
							opacity: 0;
							transform: scale(1.2);
						}
						to{
							opacity: 1;
							transform: scale(1);
						}
					}
					@keyframes fadeOut{
						from{
							opacity: 1;
							transform: scale(1);
						}
						to{
							opacity: 0;
							transform: scale(1.2);
						}
					}
					@media(min-width: 33.75rem){
						.more_mobile{
							display: none;
						}
						.section_container{
							flex-basis: 50%;
						}
						.section_selected_container .section{
							width: 75%;
							margin-left: 25%;
							padding: 3rem;
						}
						.section_selected_container:after{
							width: 25%;
						}
					}
					@media(min-width: 64rem){
						.section_container{
							flex-basis: 25%;
						}
					}
				`}</style>
			</div>
		);
	}
}
export default Section;
