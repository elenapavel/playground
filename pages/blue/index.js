import { Component } from "react";
import Layout from "./Layout";
import data from "./data";
import Nav from "./Nav";
import Footer from "./Footer";

export default class Page extends Component {
	state = data.view;

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1000);
	}

	render() {
		const { isLoading } = this.state;

		return (
			<div
				className={isLoading ? "application_is_loading" : "application"}
			>
				{!isLoading ? (
					<div>
						<div className="navigation_container">
							<Nav logo={data.view.logo} />
						</div>
						<Layout items={data.blue.members} />
						<div className="footer_container">
							<Footer
								social_media={data.view.social_media}
								copyright={data.view.copyright}
							/>
						</div>
					</div>
				) : null}
				<style jsx>{`
					:global(body) {
						margin: 0;
					}
					:global(*) {
						box-sizing: border-box;
					}
					.application,
					.application_is_loading {
						background-image: url('${data.view.background}');
						background-position: center;
						background-size: cover;
						background-repeat: no-repeat;
						position: relative;
						min-height: 100vh;
					}
					.application:before {
						content: "";
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						width: 100%;
						height: 100%;
						background-color: rgba(255,255,255, 0.95);
					}
					.application_is_loading {
						position: relative;
					}
					.application_is_loading:before {
						content: "";
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						width: 100%;
						height: 100%;
						animation-name: pulse;
						animation-duration: 1s;
						animation-iteration-count: 1;
						animation-fill-mode: forwards;
					}
					.navigation_container{
						position: fixed;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						width: 100%:
						height: auto;
						padding: 2rem;
					}
					.footer_container{
						padding: 2rem;
						position: fixed;
						top: auto;
						bottom: 0;
						left: 0;
						right: 0;
						width: 100%:
						height: auto;
					}
					@keyframes pulse {
						from {
							background-color: rgba(255,255,255, 0.5);
						}
						to {
							background-color: rgba(255,255,255, 0.95);
						}
					}
				`}</style>
			</div>
		);
	}
}
