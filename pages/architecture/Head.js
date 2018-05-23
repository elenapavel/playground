import { Component } from "react";
import Head from "next/head";

class head extends Component {
	render() {
		return (
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700"
					rel="stylesheet"
				/>
			</Head>
		);
	}
}

export default head;
