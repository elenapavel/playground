import Application from "./application";
import Head from "./Head";
import CategoryView from "./CategoryView";
import ArticleView from "./ArticleView";

export default () => (
	<Application>
		<div>
			<Head />
			<CategoryView />
			<ArticleView />
		</div>
	</Application>
);
