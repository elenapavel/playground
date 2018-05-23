import Head from "next/head";
import Application from "./application";
import CategoryView from "./CategoryView";
import ArticleView from "./ArticleView";

export default () => (
	<div>
		<Head>
			<link
				rel="stylesheet"
				href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Playfair+Display:400,900"
				rel="stylesheet"
			/>
		</Head>
		<Application>
			<div>
				<CategoryView />
				<ArticleView />
			</div>
		</Application>
	</div>
);
