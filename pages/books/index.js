import { Component } from "react";

import Head from "next/head";

import Application, { module } from "./application";
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
				<div className="container">
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
						.container {
							position: relative;
							max-width: 32.5rem;
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
	<div className="application">
		<Head>
			<link
				rel="stylesheet"
				href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Cabin:400,600&amp;subset=latin-ext"
				rel="stylesheet"
			/>
		</Head>
		<Application>
			<Page />
		</Application>
		<style jsx>{`
			.application {
				height: 100vh;
				overflow-y: auto;
				background: #e6e6ec;
			}
		`}</style>
	</div>
);
