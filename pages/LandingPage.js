import { Component } from "react";
import Link from "next/link";
import data from "./data";
import $ from "./style.css";

class LandingPage extends Component {
	state = { hoveredItemIndex: null };

	handleHover(index) {
		this.setState({ hoveredItemIndex: index });
	}

	render() {
		const { hoveredItemIndex } = this.state;

		const arrowClasses = `${$.arrow} ion-ios-arrow-thin-right`;

		return (
			<div className={$.container}>
				<div className={$.content}>
					<div className={$.separator} />
					<div className={$.title}>Playground</div>
					<div className={$.description} />
				</div>
				<div className={$.items}>
					{data.nav.map((item, key) => {
						const itemClasses =
							hoveredItemIndex == key ? $.item_link_hovered : $.item_link;

						return (
							<div key={key} className={$.item}>
								<div
									className={$.item_image}
									style={{
										backgroundImage: `url(${item.image})`
									}}
								/>
								<div
									className={itemClasses}
									onMouseEnter={() => this.handleHover(key)}
									onMouseLeave={() => this.handleHover(null)}
								>
									<Link href={item.link}>
										<a>{item.title}</a>
									</Link>
									<Link href={item.link}>
										<a>
											<div className={arrowClasses} />
										</a>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default LandingPage;
