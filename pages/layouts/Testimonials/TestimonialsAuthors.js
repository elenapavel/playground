import { Component } from "react";

class TestimonialsAuthors extends Component {
	render() {
		return (
			<div className="container">
				<div className="author">
					<div className="avatar" />
					<div className="name" />
				</div>
				<div className="author">
					<div className="avatar" />
					<div className="name" />
				</div>
				<div className="author active">
					<div className="avatar" />
					<div className="name" />
				</div>
				<div className="author">
					<div className="avatar" />
					<div className="name" />
				</div>
				<div className="author">
					<div className="avatar" />
					<div className="name" />
				</div>
				<style jsx>{`
					.container {
						position: relative;
						display: flex;
						align-items: center;
						flex-direction: row;
						max-width: 100%;
						overflow: auto;
						flex-wrap: nowrap;
						padding: 3rem 2rem 0;
						justify-content: center;
					}
					.author {
						display: inline-block;
						width: 4rem;
						text-align: center;
						vertical-align: middle;
					}
					.avatar {
						background: white;
						margin: 0 auto;
						width: 3rem;
						height: 3rem;
						border-radius: 50%;
						margin-bottom: 1rem;
					}
					.author .name {
						opacity: 0;
						background: pink;
						height: 1rem;
						width: 100%;
					}
					.author.active .avatar {
						width: 3.5rem;
						height: 3.5rem;
					}
					.author.active .name {
						opacity: 1;
					}
				`}</style>
			</div>
		);
	}
}

export default TestimonialsAuthors;
