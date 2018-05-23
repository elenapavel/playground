import { Component } from "react";
import BookCard from "./BookCard";

class BookList extends Component {
	render() {
		const { items, view, label } = this.props;
		return (
			<div className="container">
				{items.length == 0 ? null : (
					<div className="label">{label}</div>
				)}
				{items.length == 0
					? null
					: items.map((item, key) => (
							<BookCard
								key={key}
								title={item.title}
								authors={item.authors}
								ratings={item.ratings}
								bookImage={item.bookImage}
								content={item.content}
								color={item.color}
								index={key}
							/>
					  ))}
				<style jsx>{`
					.container {
						position: relative;
						margin: 3rem 2rem;
					}
					.label {
						font-size: 1rem;
						font-weight: 600;
						font-family: "Cabin", sans-serif;
						line-height: 1.4;
						color: #595769;
						letter-spacing: 0.3px;
						margin-bottom: 2rem;
					}
				`}</style>
			</div>
		);
	}
}

export default BookList;
