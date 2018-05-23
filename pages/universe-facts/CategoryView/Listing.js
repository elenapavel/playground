import { PureComponent } from "react";
import Item from "./Item";
import Bullets from "../Bullets";
import $ from "./style.css";

class Listing extends PureComponent {
	constructor(props) {
		super();
		this.state = {
			active: 0,
		};
	}
	render() {
		const { items } = this.props;
		const { active } = this.state;
		return (
			<div>
				<div className={$.list_items}>
					{items.length
						? items != null && items.length
							? items.map((item, key) => (
									<Item
										key={key}
										isActive={active == key}
										backgroundImage={item.image}
										title={item.title}
										index={key}
									/>
							  ))
							: null
						: null}
				</div>
				<div className={$.bullets}>
					<Bullets />
				</div>
			</div>
		);
	}
}

export default Listing;
