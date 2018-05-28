import Head from "next/head";
import LandingPage from "./LandingPage";
import $ from "./style.css";

export default () => (
	<div className={$.application}>
		<Head>
			<link
				href="https://fonts.googleapis.com/css?family=Cormorant:300,400|Montserrat:700"
				rel="stylesheet"
			/>
			<link
				rel="stylesheet"
				href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
			/>
		</Head>
		<LandingPage />
	</div>
);
