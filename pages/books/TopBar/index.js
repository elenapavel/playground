import { Component } from "react";
import { module } from "../application";

class TopBar extends Component {
	render() {
		const { isAccountView, logo, user, section } = this.props;
		return (
			<div className="container">
				<div className="to_left">
					{isAccountView
						? module("store", ({ store, setView }) => (
								<div
									className="action_back ion-arrow-left-c"
									onClick={() => setView()}
								/>
						  ))
						: null}
				</div>
				<div className="to_center">
					{isAccountView ? null : (
						<div className="logo">
							<img src={logo} />
						</div>
					)}
					<div className={isAccountView ? "main_section" : "section"}>
						{section}
					</div>
				</div>
				<div className="to_right">
					{isAccountView
						? null
						: module("store", ({ store, setView }) => (
								<div
									className="user_avatar"
									onClick={() => setView("myAccount")}
								>
									<img src={user.avatar} />
								</div>
						  ))}
				</div>
				<style jsx>{`
					.container {
						position: relative;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
					}
					.to_center {
						padding: 1.5rem;
					}
					.to_right {
						padding: 1.5rem;
						min-width: 5rem;
					}
					.to_left {
						min-width: 5rem;
					}
					.logo {
						height: 1.5rem;
						width: 5rem;
						display: block;
					}
					.user_avatar {
						width: 2.5rem;
						height: 2.5rem;
						border-radius: 50%;
						overflow: hidden;
						cursor: pointer;
					}
					.logo img,
					.user_avatar img {
						max-width: 100%;
						max-height: 100%;
						margin: auto;
						display: block;
					}
					.section {
						display: block;
						text-align: center;
						font-size: 0.8rem;
						font-family: "Cabin", sans-serif;
						color: #87879c;
						font-weight: bold;
						padding-top: 0.2rem;
					}
					.main_section {
						font-size: 1.2rem;
						border-bottom: 3px solid transparent;
						transition: all 0.3s ease-in-out;
						color: #2a2734;
						font-weight: 600;
						font-family: "Cabin", sans-serif;
					}
					.action_back {
						padding: 1.5rem;
						font-size: 1.5rem;
						cursor: pointer;
					}
				`}</style>
			</div>
		);
	}
}

export default TopBar;
