import { Component } from "react";

class Ratings extends Component {
	render() {
		const { isExpanded, score, color } = this.props;
		const fullStarNumber = parseInt(score);
		var partialStar = parseFloat(
			parseFloat(score) - parseFloat(parseInt(score))
		);

		var stars = [];
		for (var i = 0; i < fullStarNumber; i++) {
			stars.push(
				<div key={i} className="star checked ion-ios-star">
					<style jsx>{`
						.star {
							display: inline-block;
							margin-right: 0.3rem;
							font-size: 1rem;
							color: ${color};
						}
					`}</style>
				</div>
			);
		}
		if (5 - fullStarNumber > 0) {
			if (partialStar != 0) {
				stars.push(
					<div
						key={fullStarNumber}
						className="star checked ion-ios-star-half"
					>
						<style jsx>{`
							.star {
								display: inline-block;
								margin-right: 0.3rem;
								font-size: 1rem;
								color: ${color};
							}
						`}</style>
					</div>
				);
			}
		}
		partialStar = partialStar != 0 ? 1 : 0;
		for (var i = 0; i < 5 - fullStarNumber - partialStar; i++) {
			stars.push(
				<div
					key={fullStarNumber + i + 1}
					className="star ion-ios-star-outline"
				>
					<style jsx>{`
						.star {
							display: inline-block;
							margin-right: 0.3rem;
							font-size: 1rem;
							color: ${color};
						}
					`}</style>
				</div>
			);
		}
		const ratingsClasses = isExpanded
			? "container is_expanded"
			: "container";
		return (
			<div className={ratingsClasses}>
				{isExpanded ? <div className="stars">{stars}</div> : null}
				{score}
				<style jsx>{`
					.container {
						position: relative;
						color: #2a2734;
						font-size: 0.8rem;
						font-weight: 600;
						font-family: "Cabin", sans-serif;
						width: 50%;
						transition: all 0.5s ease-in-out 0.5s;
						display: flex;
						justify-content: space-between;
					}
					.container.is_expanded {
						width: 100%;
						transition: all 0.5s ease-in-out;
					}
				`}</style>
			</div>
		);
	}
}

export default Ratings;
