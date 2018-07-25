import React, { Component } from "react";
import Actions from "./Actions";
import Product from "./Product";
import Ad from "./Ad";
import data from "./data";
import $ from "./style.css";

const components = { product: Product, ad: Ad };

class EcommerceWS1 extends Component {
	state = { active: 0, selectedProduct: null };

	onSelectCategory(index) {
		this.setState({ active: index, selectedProduct: null });
	}

	onSelectProduct(index) {
		this.setState({
			selectedProduct: this.state.selectedProduct == index ? null : index,
		});
	}

	render() {
		const { heading } = this.props;
		const { active, selectedProduct } = this.state;

		return (
			<b className={$.section}>
				<b className={$.heading}>{heading || data.heading}</b>
				<b className={$.content}>
					<Actions
						items={data.categories}
						active={active}
						onSelect={key => this.onSelectCategory(key)}
					/>
					<b className={$.items}>
						{data.items[active].map((item, key) => {
							const Component = components[item.type];

							if (item.type == "product")
								return (
									<b className={$.product} key={key}>
										<Component
											{...item}
											index={key}
											isSelected={key == selectedProduct}
											onSelect={key =>
												this.onSelectProduct(key)
											}
										/>
									</b>
								);
							else if (item.type == "ad")
								return (
									<b className={$.ad} key={key}>
										<Component {...item} />
									</b>
								);
							else
								return (
									<b className={$.error} key={key}>
										No component found for {item.type}.
									</b>
								);
						})}
					</b>
				</b>
			</b>
		);
	}
}

export default EcommerceWS1;
