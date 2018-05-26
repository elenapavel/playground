import { Component } from "react";
import Grid from "~/components/Grid";
import Nav from "~/components/Nav";

class Page extends Component {
	render() {
		const elements = [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
		];
		return (
			<div className="container">
				<Nav />
				<Grid columns="1" elements={["1"]} />
				<Grid columns="2" elements={["2", "2"]} />
				<Grid columns="3" elements={["3", "3", "3"]} />
				<Grid columns="4" elements={["4", "4", "4", "4"]} />
				<Grid columns="5" elements={["5", "5", "5", "5", "5"]} />
				<Grid
					columns="6"
					elements={["6", "6", "6", "6", "6", "6"]}
					breakPoints={[
						{
							point: 1024,
							columns: 3,
							gutters: 0,
						},
						{
							point: 768,
							columns: 2,
							gutters: 0,
						},
						{
							point: 480,
							columns: 1,
							gutters: 0,
						},
					]}
				/>
				<Grid
					columns="7"
					elements={["7", "7", "7", "7", "7", "7", "7"]}
				/>
				<Grid
					columns="8"
					elements={["8", "8", "8", "8", "8", "8", "8", "8"]}
				/>
				<Grid
					columns="9"
					elements={["9", "9", "9", "9", "9", "9", "9", "9", "9"]}
				/>
				<Grid
					columns="10"
					elements={[
						"10",
						"10",
						"10",
						"10",
						"10",
						"10",
						"10",
						"10",
						"10",
						"10",
					]}
				/>
				<Grid
					columns="11"
					elements={[
						"11",
						"11",
						"11",
						"11",
						"11",
						"11",
						"11",
						"11",
						"11",
						"11",
						"11",
					]}
				/>
				<Grid
					columns="12"
					elements={[
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
					]}
				/>
				<Grid
					columns="20"
					gutters="50"
					elements={[
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
						"12",
					]}
				/>

				<Grid
					columns="4"
					gutters="40"
					elements={["1", "2", "3", "4"]}
				/>
				<Grid columns="2" gutters="60" elements={["1", "2"]} />
				<Grid
					columns="7"
					gutters="20"
					elements={["1", "2", "3", "4", "5", "6", "7"]}
				/>
				<Grid elements={["1"]} />
				<Grid columns="3" gutters="10" elements={["1", "2", "3"]} />
				<Grid
					columns="10"
					gutters="30"
					elements={[
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"10",
					]}
				/>
				<style jsx>{`
					:global(body) {
						margin: 0;
						overflow-x: hidden;
					}
					:global(*) {
						box-sizing: border-box;
					}
					.container {
						position: relative;
					}
				`}</style>
			</div>
		);
	}
}

export default () => <Page />;
