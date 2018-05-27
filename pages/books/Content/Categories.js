import { PureComponent } from "react";
import { module } from "../application";

class Categories extends PureComponent {
	render() {
		return module("store", ({ store, selectCategory }) => {
			const { categories, selectedCategoryIndex } = store;
			return (
				<div className="container">
					{categories.map((category, key) => {
						const categoryBoxShadow =
							selectedCategoryIndex == key
								? `0.5rem 2rem 5rem -2rem ${
										category.color[1]
								  }, inset 0 0 16px rgba(255, 255, 255, 0.35)`
								: `inset 0 0 16px rgba(255, 255, 255, 0.35)`;

						const iconClasses = "icon " + category.icon;
						return (
							<div
								key={key}
								className="category"
								style={{
									background: `linear-gradient(to bottom right, ${
										category.color[0]
									}, ${category.color[1]})`,
									boxShadow: `${categoryBoxShadow}`,
								}}
								onClick={() => selectCategory(key)}
							>
								<div className={iconClasses} />
								<div className="label">{category.label}</div>
							</div>
						);
					})}
					<style jsx>{`
						.container {
							position: relative;
							display: flex;
							flex-direction: row;
							justify-content: center stretch;
							overflow-x: auto;
							margin: 3rem 2rem;
							padding: 0 0 4rem;
						}
						.category {
							cursor: pointer;
							width: 7rem;
							height: 7rem;
							border-radius: 0.3rem;
							margin-right: 2rem;
							display: flex;
							align-items: center;
							flex-direction: column;
							justify-content: center;
							flex: 0 0 auto;
							transiton: all 0.3s ease-in-out;
						}
						.label {
							color: #fff;
							text-transform: uppercase;
							font-size: 0.6rem;
							letter-spacing: 1px;
							font-family: "Cabin", sans-serif;
						}
						.icon {
							font-size: 3rem;
							color: #fff;
						}
					`}</style>
				</div>
			);
		});
	}
}

export default Categories;
