import { PureComponent } from "react";
import { module } from "../../application";

class Actions extends PureComponent {
	render() {
		const { bookIndex, isExpanded, color } = this.props;
		const actionClasses = isExpanded
			? "container is_expanded"
			: "container is_collapsed";
		return module("store", ({ store, manageOrders }) => {
			const {
				view,
				displayedBooks,
				selectedCategoryIndex,
				categories,
				pendingOrders,
				completedOrders,
			} = store;
			var buttonClasses = "action_order";
			if (view == "library") {
				if (pendingOrders.indexOf(displayedBooks[bookIndex]) != -1) {
					buttonClasses += " is_managed";
				}
			} else if (view == "orders") {
				if (completedOrders.indexOf(pendingOrders[bookIndex]) != -1) {
					buttonClasses += " is_managed";
				}
			} else if (view == "myAccount") {
				if (completedOrders.indexOf(pendingOrders[bookIndex]) != -1) {
					buttonClasses += " is_managed";
				}
			}
			return (
				<div className={actionClasses}>
					{view == "library" ? (
						<div>
							<div
								className={buttonClasses}
								onClick={() =>
									pendingOrders.indexOf(
										displayedBooks[bookIndex]
									) == -1
										? manageOrders(bookIndex)
										: null
								}
							>
								Take book<div className="checked ion-checkmark-round" />
							</div>
						</div>
					) : view == "orders" ? (
						<div>
							<div
								className={buttonClasses}
								onClick={() => manageOrders(bookIndex)}
							>
								Confirm order<div className="checked ion-checkmark-round" />
							</div>
						</div>
					) : view == "myAccount" ? (
						<div>
							<div
								className={buttonClasses}
								onClick={() => manageOrders(bookIndex)}
							>
								Return book<div className="checked ion-checkmark-round" />
							</div>
						</div>
					) : null}
					<style jsx>{`
						.container {
							position: relative;
							overflow: hidden;
							display: flex;
							flex-wrap: wrap;
							justify-content: flex-end;
							transition: all 0.5s ease-in-out;
						}
						.container.is_collapsed {
							height: 0;
							opacity: 0;
							margin-top: 0;
						}
						.container.is_expanded {
							height: 100%;
							opacity: 1;
							margin-top: 1.5rem;
						}
						.container .action_order {
							transition: all 0.5s ease-in-out;
							font-size: 0;
							font-family: "Cabin", sans-serif;
							font-weight: 600;
							letter-spacing: 0.5px;
							background: transparent;
							padding: 0;
							border-radius: 0.3rem;
							color: transparent;
							transition: all 0.5s ease-in-out 0.3s;
							display: inline-block;
							position: relative;
							cursor: pointer;
						}
						.container .action_order:focus .checked,
						.container .action_order:active .checked,
						.container .action_order.is_managed .checked {
							opacity: 1;
							transition: all 0.5s ease-in-out 0.6s;
						}
						.container .action_order .checked {
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							right: 0;
							opacity: 0;
							width: 100%;
							margin: auto;
							color: #fff;
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 1.7rem;
							transition: all 0.5s ease-in-out;
						}
						.container.is_expanded .action_order {
							font-size: 1rem;
							padding: 1rem 2rem;
							color: ${color};
							background: #f5f5fa;
							transition: all 0.5s ease-in-out 0.3s;
						}
						.container.is_expanded .action_order.is_managed {
							background: ${color};
							font-size: 1rem;
							padding: 1rem 2rem;
							color: ${color};
						}
						.container.is_expanded .action_order:focus,
						.container.is_expanded .action_order:active,
						.container.is_expanded .action_order.is_managed {
							background: ${color};
						}
					`}</style>
				</div>
			);
		});
	}
}

export default Actions;
