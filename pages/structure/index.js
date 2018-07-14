import Head from "next/head";
import Header from "./Header";
import Content from "./Content";
import Grid from "./Grid";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Team from "./Team";
import Ecommerce from "./Ecommerce";
import Pricing from "./Pricing";
import CTA from "./CTA";
import Form from "./Form";
import Contact from "./Contact";
import Footer from "./Footer";
import $ from "./style.css";

export default () => (
	<b className={$.application}>
		<Head>
			<link
				href="https://fonts.googleapis.com/css?family=Cormorant:300,400|Montserrat:400,700"
				rel="stylesheet"
			/>
			<link
				rel="stylesheet"
				href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
			/>
		</Head>
		<Header />
		<Content />
		<Grid />
		<Features />
		<Portfolio />
		<Blog />
		<Team />
		<Ecommerce />
		<Pricing />
		<CTA />
		<Form />
		<Contact />
		<Footer />
	</b>
);
