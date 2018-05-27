import { Component } from "react";
import { STATIC } from "~/playground.js";

class SocialMedia extends Component {
	render() {
		const { items } = this.props;
		const facebook_color = "blue";
		const twitter_color = "darkblue";
		const instagram_color = "red";
		return (
			<div className="container">
				<div className="to_bottom">
					{items.map((item, key) => {
						const item_key = Object.keys(item)[0];
						const item_value = Object.values(item)[0];
						const icon_path =
							STATIC + "/social_icons/" + item_key + ".svg";
						const itemClasses = "item " + item_key;
						return (
							<div key={key} className={itemClasses}>
								<a href={item_value}>
									<img src={icon_path} />
								</a>
							</div>
						);
					})}
				</div>
				<style jsx>{`
					.container {
						position: relative;
						display: block;
						justify-content: space-between;
						height: 100%;
						align-items: center;
						flex-direction: column-reverse;
						padding: 0 2rem 2rem;
					}
					.item {
						display: inline-block;
						margin-right: 2rem;
					}
					.item img {
						width: 2.5rem;
						height: 2.5rem;
						padding: 0.5rem;
						vertical-align: top;
						border-bottom: 2px solid transparent;
						transition: all 0.3s ease-in-out;
					}
					.facebook:hover img {
						border-color: ${facebook_color};
					}
					.twitter:hover img {
						border-color: ${twitter_color};
					}
					.instagram:hover img {
						border-color: ${instagram_color};
					}
					@media (min-width: 30rem) {
						.container {
							padding: 0 4rem 4rem;
						}
					}
					@media (min-width: 40rem) {
						.item img {
							width: 1.3rem;
							height: 1.6rem;
							padding: 0 0 0.3rem;
						}
					}
					@media (min-width: 64rem) {
						.container {
							display: flex;
							padding: 1.5rem 1rem;
							flex-direction: column-reverse;
						}
						.item {
							display: block;
							margin-right: 0;
							margin-top: 2rem;
						}
					}
					@media (min-width: 90rem) and (min-height: 56.25rem) {
						.container {
							padding: 3rem 0;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default SocialMedia;
