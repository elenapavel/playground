import { Component } from "react";
import Link from "next/link";
import Tooltip from "~/components/Tooltip";
import $ from "./style.css";

class SocialLinks extends Component {
	state = {
		elementWithVisibleTooltip: null,
	};

	isTooltipVisible(index) {
		this.setState({ elementWithVisibleTooltip: index });
	}

	isTooltipHidden() {
		this.setState({ elementWithVisibleTooltip: null });
	}

	render() {
		const { items } = this.props;

		const { elementWithVisibleTooltip } = this.state;

		const platforms = Object.keys(items);

		return (
			<b className={$.items}>
				{platforms.map((platform, key) => {
					let iconClass = null;

					switch (platform) {
						case "facebook":
							iconClass = "ion-social-facebook";
							break;
						case "twitter":
							iconClass = "ion-social-twitter";
							break;
						case "googlePlus":
							iconClass = "ion-social-googleplus";
							break;
						case "instagram":
							iconClass = "ion-social-instagram-outline";
							break;
						default:
							iconClass = key;
					}

					if (typeof iconClass === "number") {
						const errorIconClasses = `${$.error_icon} ion-help`;

						let errorClass = `${$.error_tooltip_hidden}`;

						if (elementWithVisibleTooltip != null)
							errorClass = `${$.error_tooltip_visible}`;

						return (
							<b
								className={$.error}
								key={key}
								onMouseEnter={() => this.isTooltipVisible(key)}
								onMouseLeave={() => this.isTooltipHidden()}
							>
								<b className={errorIconClasses} />
								<b className={errorClass}>
									<Tooltip
										text={`Icon for ${
											platforms[iconClass]
										} not found`}
									/>
								</b>
							</b>
						);
					} else {
						return (
							<b className={$.item} key={key}>
								<Link href={items[platform]}>
									<a>
										<b className={iconClass} />
									</a>
								</Link>
							</b>
						);
					}
				})}
			</b>
		);
	}
}

export default SocialLinks;
