import { Component } from "react";
import Ratings from "./Ratings";
import Actions from "./Actions";

class BookCard extends Component {
	state = {
		state: "initial",
	};
	setCardState(state) {
		this.setState({ state });
	}
	componentWillReceiveProps() {
		this.setState({ state: "initial" });
	}
	render() {
		const {
			title,
			authors,
			ratings,
			bookImage,
			content,
			color,
			index,
		} = this.props;
		const { state } = this.state;
		var cardClasses = "container";
		switch (state) {
			case "expanded":
				cardClasses += " is_expanded";
				break;
			case "collpased":
				cardClasses += " is_collapsed";
				break;
			default:
				cardClasses += " is_initial";
		}
		return (
			<div className={cardClasses}>
				<div className="top_side">
					<div className="book_image">
						<img src={bookImage} />
					</div>
					<div className="book_details">
						<div
							className="title"
							onClick={e =>
								this.setCardState(
									state == "expanded"
										? "collpased"
										: "expanded"
								)
							}
						>
							{title}
						</div>
						<div className="authors">
							{authors.map((author, key) => (
								<div key={key} className="author">
									{author}
								</div>
							))}
						</div>
						<Ratings
							isExpanded={state == "expanded"}
							score={ratings}
							color={color}
						/>
					</div>
				</div>
				<div className="content">{content}</div>
				<Actions
					bookIndex={index}
					isExpanded={state == "expanded"}
					color={color}
				/>
				<style jsx>{`
					.container {
						position: relative;
						padding: 1.5rem 2rem;
						border-radius: 0.3rem;
						margin-top: 0.8rem;
						background: #fff;
						transition: all 0.5s ease-in-out;
						animation-duration: 0.5s;
						animation-iteration-count: 1;
						animation-fill-mode: forwards;
					}
					.is_collapsed {
						animation-name: moveToTop;
					}
					.is_expanded {
						animation-name: moveToBottom;
					}
					.is_initial {
						animation-name: fadeInBottom;
					}
					.container:first-child {
						margin-top: 0;
					}
					.container:before {
						content: "";
						overflow: hidden;
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						height: 100%;
						border-left: 5px solid ${color};
						border-top-left-radius: 0.3rem;
						border-bottom-left-radius: 0.3rem;
					}
					.top_side {
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
					}
					.book_details {
						flex-basis: 100%;
						transition: all 0.5s ease-in-out 0.5s;
					}
					.book_image {
						flex-basis: 0%;
						width: 50%;
						transition: flex-basis 0.5s ease-in-out 0.5s;
						padding: 0;
						margin-top: -5rem;
					}
					.is_expanded .book_details {
						flex-basis: 50%;
						transition: all 0.5s ease-in-out;
					}
					.is_expanded .book_image {
						flex-basis: 50%;
						transition: all 0.5s ease-in-out;
					}
					.book_image img {
						box-shadow: 0 1rem 3rem -0.5rem ${color};
						display: block;
						max-width: calc(100% - 4rem);
						max-height: 100%;
						width: auto;
						height: auto;
						margin: 0 3rem 1.5rem 1rem;
						opacity: 0;
						transition: all 0.5s ease-in-out;
					}
					.is_expanded .book_image img {
						opacity: 1;
					}
					.title {
						cursor: pointer;
						color: #2a2734;
						font-size: 1rem;
						font-family: "Cabin", sans-serif;
						line-height: 1.4;
						font-weight: 600;
						letter-spacing: 0.5px;
						margin-bottom: 0.7rem;
					}
					.author {
						color: #7e7d94;
						font-size: 0.8rem;
						font-family: "Cabin", sans-serif;
						line-height: 1.4;
						letter-spacing: 0.5px;
						margin-bottom: 0.7rem;
						display: inline-block;
					}
					.author:after {
						content: ",";
						padding-right: 0.2rem;
						display: inine-block;
					}
					.author:last-child:after {
						display: none;
					}
					.content {
						height: 0;
						opacity: 0;
						color: #7e7d94;
						font-size: 0;
						line-height: 1.4;
						font-style: italic;
						font-family: "Cabin", sans-serif;
						transition: all 0.5s ease-in-out;
						overflow: hidden;
					}
					.is_expanded .content {
						opacity: 1;
						font-size: 1rem;
						height: 100%;
						transition: all 0.5s ease-in-out;
					}
					.to_right {
						height: 0;
						opacity: 0;
						overflow: hidden;
						margin-top: 0;
						display: flex;
						flex-wrap: wrap;
						justify-content: flex-end;
						transition: all 0.5s ease-in-out;
					}
					.is_expanded .to_right {
						height: 100%;
						opacity: 1;
						margin-top: 1.5rem;
					}
					.action_order {
						transition: all 0.5s ease-in-out;
						font-size: 0;
						font-family: "Cabin", sans-serif;
						font-weight: 600;
						letter-spacing: 0.5px;
						background: transparent;
						padding: 0;
						border-radius: 0.3rem;
						color: transparent;
						transition: all 0.5s ease-in-out 0.3s;
						display: inline-block;
						position: relative;
						cursor: pointer;
					}
					.action_order .checked {
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						opacity: 0;
						width: 100%;
						margin: auto;
						color: #fff;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 1.7rem;
						transition: all 0.5s ease-in-out;
					}
					.is_expanded .action_order:focus,
					.is_expanded .action_order:active,
					.is_expanded .ordered {
						background: ${color};
					}
					.action_order:focus .checked,
					.action_order:active .checked,
					.ordered .checked {
						opacity: 1;
						transition: all 0.5s ease-in-out 0.6s;
					}
					.is_expanded .action_order {
						font-size: 1rem;
						padding: 1rem 2rem;
						color: ${color};
						background: #f5f5fa;
						transition: all 0.5s ease-in-out 0.3s;
					}
					.is_expanded .action_order.ordered {
						background: ${color};
						font-size: 1rem;
						padding: 1rem 2rem;
						color: ${color};
					}
					@keyframes moveToBottom {
						from {
							margin-top: 0.8rem;
						}
						to {
							margin-top: 5rem;
						}
					}
					@keyframes moveToTop {
						from {
							margin-top: 5rem;
						}
						to {
							margin-top: 0.8rem;
						}
					}
					@keyframes fadeInBottom {
						from {
							opacity: 0;
							margin-top: 5rem;
						}
						to {
							opacity: 1;
							margin-top: 0.8rem;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default BookCard;
