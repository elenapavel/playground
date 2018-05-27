import { Component } from "react";
import PlantDetails from "./PlantDetails";
import PlantImage from "./PlantImage";
import Progress from "./Progress";
import Actions from "./Actions";

class Content extends Component {
	render() {
		const {
			title,
			name,
			content,
			category,
			species,
			image,
			lastTitle,
			lastName,
			lastContent,
			lastCategory,
			lastSpecies,
			lastImage,
			label,
			lastIndex,
			currentIndex,
			total,
		} = this.props;
		return (
			<div className="container">
				<div className="to_top">
					<div className="to_left">
						<PlantImage
							title={name}
							subtitle={category}
							image={image}
							index={currentIndex}
							lastTitle={lastName}
							lastSubtitle={lastCategory}
							lastImage={lastImage}
							lastIndex={lastIndex}
						/>
					</div>
					<div className="to_right">
						<PlantDetails
							title={title}
							content={content}
							label={species}
							lastTitle={lastTitle}
							lastContent={lastContent}
							lastLabel={lastSpecies}
						/>
					</div>
				</div>
				<div className="to_bottom">
					<div className="to_left">
						<Actions />
					</div>
					<div className="to_right">
						<Progress
							label={label}
							lastIndex={lastIndex}
							index={currentIndex}
							total={total}
						/>
					</div>
				</div>
				<style jsx>{`
					.container {
						position: relative;
						display: block;
						flex-direction: column;
						flex-wrap: wrap;
						align-items: flex-start;
						height: 100%;
					}
					.to_top {
						flex-grow: 1;
						display: block;
						flex-direction: row-reverse;
						flex-wrap: wrap;
						width: 100%;
					}
					.to_left {
						flex-basis: 100%;
						min-width: 1px;
						padding-top: 4rem;
					}
					.to_right {
						flex-basis: 100%;
						min-width: 1px;
					}
					.to_bottom {
						align-self: flex-end;
						width: 100%;
						padding: 2rem 0;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						align-items: center;
						padding-left: 2rem;
					}
					.to_bottom .to_left {
						flex-basis: 100%;
						min-width: 1px;
						padding: 0;
					}
					.to_bottom .to_right {
						flex-basis: 100%;
						min-width: 1px;
					}
					@media (min-width: 30rem) {
						.to_bottom {
							padding: 4rem 0;
							padding-left: 4rem;
						}
					}
					@media (min-width: 40rem) {
						.to_bottom {
							padding-left: 8rem;
						}
						.to_bottom .to_left {
							padding: 0 2rem;
						}
					}
					@media (min-width; 48rem) {
						.to_bottom .to_left {
							flex-basis: 12rem;
							min-width: 12rem;
						}
						.to_bottom .to_right {
							flex-basis: calc(100% - 12rem);
							min-width: calc(100% - 12rem);
						}
					}
					@media (min-width: 64rem) {
						.container {
							display: flex;
						}
						.to_top {
							display: flex;
						}
						.to_left {
							flex-basis: 30rem;
							min-width: 30rem;
						}
						.to_right {
							flex-basis: calc(100% - 30rem);
							min-width: 30rem;
						}
						.to_bottom .to_left {
							flex-basis: 24rem;
							min-width: 24rem;
						}
						.to_bottom .to_right {
							flex-basis: calc(100% - 24rem);
							min-width: 24rem;
						}
					}
					@media (min-width: 90rem) and (min-height: 56.25rem) {
						.to_left {
							padding-top: 8rem;
						}
						.to_bottom {
							padding: 8rem 0;
							padding-left: 16rem;
						}
						.to_left {
							flex-basis: 40rem;
							min-width: 40rem;
							padding-top: 4rem;
						}
						.to_right {
							flex-basis: calc(100% - 40rem);
							min-width: 30rem;
						}
					}
					@media (min-width: 105rem) {
						.to_left {
							flex-basis: 50%;
						}
						.to_right {
							flex-basis: 50%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Content;
