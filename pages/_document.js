import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta http-equiv="x-ua-compatible" content="ie=edge" />

					<title>Elena's playground</title>

					<style>{`
						html {
							box-sizing: border-box;
						}
						*, *:before, *:after {
							box-sizing: inherit;
						}
					`}</style>

					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css"
					/>
					<link rel="stylesheet" href="/_next/static/style.css" />

					<script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
