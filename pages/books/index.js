import { Component } from "react";
import Application, { module } from "./application";
import head from "./head";
import TopBar from "./TopBar";
import Account from "./Account";
import Tabs from "./Tabs";
import Content from "./Content";

class Page extends Component {
	render() {
		return module("store", ({ store }) => {
			const {
				logo,
				user,
				selectedSectionIndex,
				view,
				sections,
				displayedBooks,
				pendingOrders,
				completedOrders,
				selectedCategoryIndex,
			} = store;
			return (
				<div className="application">
					{head}
					<TopBar
						isAccountView={view == "myAccount"}
						user={user}
						logo={logo}
						section={
							view == "myAccount"
								? "My Account"
								: sections[selectedSectionIndex].label
						}
					/>
					{view == "myAccount" ? (
						<Account items={completedOrders} user={user} />
					) : (
						<Tabs
							items={sections}
							activeIndex={selectedSectionIndex}
						/>
					)}
					<Content
						view={view}
						books={
							view == "myAccount"
								? completedOrders
								: view == "orders"
									? pendingOrders
									: displayedBooks
						}
						label={
							selectedCategoryIndex == null
								? ""
								: view == "myAccount"
									? "Taken Books"
									: "Results"
						}
					/>
					<style jsx>{`
						:global(body) {
							margin: 0;
							background: #e6e6ec;
						}
						:global(*) {
							box-sizing: border-box;
						}
						.application {
							position: relative;
							width: 32.5rem;
							margin: 5rem auto;
							border-radius: 0.5rem;
							overflow: hidden;
							box-shadow: 0 0 2.5rem #dbdbe2;
							background: #fff;
						}
					`}</style>
				</div>
			);
		});
	}
}

export default () => (
	<Application>
		<Page />
	</Application>
);
