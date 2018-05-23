import { Component } from "react";

class Account extends Component {
	render() {
		const { items, user } = this.props;
		return (
			<div className="container">
				<div className="details">
					<div className="to_left">
						<div className="avatar">
							<img src={user.avatar} />
						</div>
					</div>
					<div className="to_right">
						<div className="name">{user.name}</div>
						<div className="email">{user.email}</div>
						<div className="orders_number">
							Taken books: {items.length}
						</div>
					</div>
				</div>
				<style jsx>{`
					.container {
						padding: 3rem 2rem 0;
						background: #f5f5fa;
						position: relative;
						overflow: hidden;
					}
					.container:before {
						content: "";
						box-shadow: 0 0 5rem #e1e1e1;
						position: absolute;
						top: -5rem;
						left: 0;
						right: 0;
						width: 100%;
						height: 5rem;
					}
					.details {
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						align-items: center;
						margin: 0 1rem;
					}
					.to_left {
						flex-basis: 10rem;
					}
					.to_right {
						display: flex;
						flex-direction: column;
						flex-wrap: wrap;
					}
					.avatar {
						border-radius: 50%;
						overflow: hidden;
						width: 8rem;
						height: 8rem;
					}
					.avatar img {
						display: block;
						max-width: 100%;
						max-height: 100%;
						margin: auto;
						display: block;
					}
					.name {
						font-size: 1.2rem;
						font-weight: 600;
						font-family: "Cabin", sans-serif;
						line-height: 1.4;
						color: #2a2734;
						letter-spacing: 0.5px;
						margin-bottom: 1rem;
					}
					.email {
						font-size: 0.9rem;
						font-weight: 400;
						font-family: "Cabin", sans-serif;
						line-height: 1.4;
						color: #7e7d94;
						letter-spacing: 0.3px;
						margin-bottom: 1rem;
					}
					.orders_number {
						font-size: 0.9rem;
						font-weight: 600;
						font-family: "Cabin", sans-serif;
						line-height: 1.4;
						color: #595769;
						letter-spacing: 0.2px;
					}
				`}</style>
			</div>
		);
	}
}

export default Account;
